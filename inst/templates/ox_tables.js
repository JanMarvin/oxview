// Copy tables out of the docx / pptx canvas as TSV.
//
// Upstream deliberately scopes cell-range selection to xlsx
// (yukiyokotani/office-open-xml-viewer#1408). The reasoning is sound: in a
// spreadsheet the whole surface is a grid, so any drag maps onto a
// rectangular cell range, while in a document or a slide a table is one kind
// of content among prose, shapes and images, and a drag may well begin
// outside it. Supporting both readings would need a modal affordance the
// library does not want to carry, and it would come at the cost of the
// existing behaviour where a selection starts before a table and ends inside
// it. #1410 then removed a tab-synthesis heuristic that depended on
// browser-specific selection behaviour, in favour of semantics that hold
// across engines. All of that is a reasonable place for a viewer library to
// draw its line - it just leaves the grid for a consumer to reconstruct.
//
// Which is straightforward, because the library already publishes the
// provenance we need on every span of its text-selection overlay
// (packages/*/src/text-layer.ts, `enableTextSelection: true`):
//
//   surface  data-ooxml-selection-surface="docx"|"pptx", data-page-index
//   docx run data-run-index, data-paragraph-id, data-source-story,
//            data-source-story-instance, data-source-path
//   pptx run data-run-index, data-shape-id, data-element-index,
//            data-element-origin
//
// `data-source-path` is the docx layout tree path. Its table rule is
//
//   table -> rows.forEach((row, r) => row.cells.forEach((cell, c) =>
//              walk(cell.content, [...prefix, r, c])))
//
// so a paragraph inside a cell has path [tableIdx, row, col, paraIdx], and
// every nesting level adds another (row, col) pair. That gives exact row and
// column indices for docx with no geometry involved - see docxGrids().
//
// pptx is in transition. In 0.83.0 table cells emit no text runs at all, so
// there is nothing here to work with. Upstream #1409 starts emitting them and
// #1410 attaches the piece that matters to us:
//
//   /** Zero-based logical grid address when this run belongs to a DrawingML
//    *  table cell. This is semantic identity only; consumers decide how cell
//    *  boundaries affect selection, search, or serialization. */
//   tableCell?: Readonly<{ row: number; column: number }>;
//
// which is precisely the docx source-path equivalent, and an unusually
// considerate thing to expose for downstream use. It rides on
// PptxTextRunInfo rather than on the overlay span, so the run list from the
// public collectSlideRuns() is where we read it - the span's
// data-run-index indexes straight into that list. See pptxGridFromRuns().
//
// Until a release carries those commits, the geometric fallback below is all
// there is: group by data-element-index, cluster rows by y and columns by x,
// and let the user place column splits by hand - see pptxGrid().
//
// These attributes are internal details rather than public API, so they may
// change with any bundled ooxml release - reasonably so, since nothing
// upstream promised them to us. We only read the DOM, never write to the
// document, so the worst case is that extraction stops working rather than
// anything being corrupted. oxTableSupport() checks that the attributes still
// look the way we expect, and the hover button stays out of the way when they
// do not.

const RUN_SEL = "[data-ooxml-selection-run]";
const SURFACE_SEL = "[data-ooxml-selection-surface]";

// Cell text is assembled from render runs, and a run boundary can fall
// anywhere - including mid-word, or on a space that then appears twice. The
// renderer also emits the Unicode spaces the document actually uses (NBSP is
// common in generated tables) and zero-width marks that are invisible but
// still count as characters downstream. Normalise all of that to plain
// single spaces so a pasted cell is what it looks like.
//
// Note what this does NOT do: it keeps ordinary interior spaces, so
// "Mazda RX4 Wag" stays one cell containing spaces. That trips up
// read.table() only because its default separator is whitespace - use
// read.delim(), or read.table(sep = "\t"), and the row names survive.
export function normaliseCell(s) {
    return s
        .replace(/[\u00A0\u2000-\u200A\u202F\u205F\u3000]/g, " ")
        .replace(/[\u200B\u200C\u200D\u2060\uFEFF\u00AD]/g, "")
        .replace(/[ \t]+/g, " ")
        .split("\n").map(line => line.trim()).join("\n")
        .trim();
}

function tsvCell(s) {
    return /[\t\n\r"]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}

export function gridToTsv(grid) {
    return grid.map(r => r.map(tsvCell).join("\t")).join("\r\n");
}

export function gridToHtml(grid) {
    const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const rows = grid.map(r => "<tr>" + r.map(c => "<td>" + esc(c) + "</td>").join("") + "</tr>");
    return "<table>" + rows.join("") + "</table>";
}

// Both flavours: text/plain so Excel, LibreOffice and read.delim() see a TSV,
// text/html so Word and Outlook paste a real table. The execCommand fallback
// exists because the async clipboard API is not reliably available in every
// embedded webview the RStudio viewer pane may be running.
export async function copyGrid(grid) {
    const tsv = gridToTsv(grid);
    const html = gridToHtml(grid);

    if (window.ClipboardItem && navigator.clipboard && navigator.clipboard.write) {
        try {
            await navigator.clipboard.write([new ClipboardItem({
                "text/plain": new Blob([tsv], { type: "text/plain" }),
                "text/html": new Blob([html], { type: "text/html" })
            })]);
            return true;
        } catch (e) {
            // fall through
        }
    }

    const host = document.createElement("div");
    host.contentEditable = "true";
    host.style.cssText = "position:fixed;left:-9999px;top:0;opacity:0;";
    host.innerHTML = html;
    document.body.appendChild(host);

    const range = document.createRange();
    range.selectNodeContents(host);
    const sel = window.getSelection();
    const saved = [];
    for (let i = 0; i < sel.rangeCount; i++) saved.push(sel.getRangeAt(i));
    sel.removeAllRanges();
    sel.addRange(range);

    let ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }

    sel.removeAllRanges();
    for (const r of saved) sel.addRange(r);
    host.remove();
    return ok;
}

function sourcePath(el) {
    const raw = el.dataset.sourcePath;
    if (!raw) return null;
    let p;
    try { p = JSON.parse(raw); } catch (e) { return null; }
    if (!Array.isArray(p) || !p.every(n => Number.isSafeInteger(n) && n >= 0)) return null;
    return p;
}

// [tableIdx, row, col, paraIdx] at depth 1, +3 per nesting level, so a cell
// paragraph always has (length - 1) % 3 === 0 and length >= 4. Body text is a
// bare [bodyIdx].
function docxCell(el) {
    const p = sourcePath(el);
    if (!p || p.length < 4 || (p.length - 1) % 3 !== 0) return null;
    const n = p.length;
    return {
        table: el.dataset.sourceStory + "\u0000" + el.dataset.sourceStoryInstance +
               "\u0000" + p.slice(0, n - 3).join("."),
        row: p[n - 3],
        col: p[n - 2],
        para: p[n - 1]
    };
}

function cellsToGrid(cells) {
    let nrow = 0, ncol = 0;
    for (const c of cells.values()) {
        if (c.row + 1 > nrow) nrow = c.row + 1;
        if (c.col + 1 > ncol) ncol = c.col + 1;
    }
    const grid = Array.from({ length: nrow }, () => Array(ncol).fill(""));
    for (const c of cells.values()) grid[c.row][c.col] = normaliseCell(c.text);
    return grid;
}

// Runs of a cell arrive in DOM order, which is run order. Paragraph breaks
// inside a cell become newlines; tsvCell() quotes those so the TSV survives.
export function docxGrids(spans) {
    const tables = new Map();
    for (const el of spans) {
        const k = docxCell(el);
        if (!k) continue;
        if (!tables.has(k.table)) tables.set(k.table, new Map());
        const cells = tables.get(k.table);
        const id = k.row + ":" + k.col;
        const prev = cells.get(id);
        if (!prev) {
            cells.set(id, { row: k.row, col: k.col, para: k.para, text: el.textContent });
        } else {
            if (prev.para !== k.para) prev.text += "\n";
            prev.text += el.textContent;
            prev.para = k.para;
        }
    }
    return [...tables.values()].map(cellsToGrid);
}

function autoSplits(items, tol) {
    const xs = items.map(i => i.x).sort((a, b) => a - b);
    const cuts = [];
    for (let i = 1; i < xs.length; i++) {
        if (xs[i] - xs[i - 1] > tol * 3) cuts.push((xs[i] + xs[i - 1]) / 2);
    }
    return cuts;
}

// splitsX: client-x positions of manual column boundaries. Empty means guess
// from horizontal gaps.
export function pptxGrid(spans, splitsX) {
    const items = [];
    for (const el of spans) {
        if (!el.textContent) continue;
        const r = el.getBoundingClientRect();
        if (!r.width && !r.height) continue;
        items.push({ text: el.textContent, x: r.left, y: r.top + r.height / 2, h: r.height });
    }
    if (!items.length) return [];

    const tol = Math.max(4, items.reduce((a, i) => a + i.h, 0) / items.length * 0.6);

    const rows = [];
    for (const it of items.slice().sort((a, b) => a.y - b.y || a.x - b.x)) {
        const last = rows[rows.length - 1];
        if (last && Math.abs(it.y - last.y) <= tol) {
            last.items.push(it);
            last.y = (last.y + it.y) / 2;
        } else {
            rows.push({ y: it.y, items: [it] });
        }
    }

    const cuts = (splitsX && splitsX.length) ? splitsX.slice().sort((a, b) => a - b)
                                            : autoSplits(items, tol);
    return rows.map(r => {
        const cells = Array(cuts.length + 1).fill("");
        for (const it of r.items.sort((a, b) => a.x - b.x)) {
            let c = 0;
            while (c < cuts.length && it.x >= cuts[c]) c++;
            cells[c] += it.text;
        }
        return cells.map(normaliseCell);
    });
}

// Cheap identity of the table a run belongs to, without collecting its
// spans - hover uses this to notice it is still over the same table and skip
// the (much more expensive) full rescan.
export function tableKeyOf(container, el) {
    if (!el) return null;
    const format = el.dataset.ooxmlSelectionRun;
    if (format === "docx") {
        const c = docxCell(el);
        return c ? "docx|" + c.table : null;
    }
    if (format === "pptx") {
        const surface = el.closest(SURFACE_SEL);
        const surfaces = [...container.querySelectorAll(SURFACE_SEL)];
        const idx = el.dataset.elementIndex;
        if (idx !== undefined) return "pptx|" + surfaces.indexOf(surface) + "|" + idx;
        const box = el.parentElement;
        if (!box || !box.style) return null;
        return "pptx|" + surfaces.indexOf(surface) + "|box:" +
               box.style.left + "," + box.style.top + "," + box.style.width + "," + box.style.height;
    }
    return null;
}

// Runs belonging to the same pptx shape. data-element-index is the direct
// answer when present; otherwise fall back to the per-shape <div> the text
// layer groups runs into, which it keys purely on the shape's box - so this
// keeps working whichever way table runs end up being attributed.
function pptxSiblings(container, el) {
    const idx = el.dataset.elementIndex;
    if (idx !== undefined) {
        const surface = el.closest(SURFACE_SEL) || container;
        return [...surface.querySelectorAll(RUN_SEL)]
            .filter(s => s.dataset.elementIndex === idx);
    }
    const box = el.parentElement;
    return box ? [...box.querySelectorAll(RUN_SEL)] : null;
}

// Exact pptx grid from the run list, once runs carry tableCell (upstream
// #1410). Keyed on the same shape the hovered run belongs to.
export function pptxGridFromRuns(runs, shapeKey) {
    const cells = new Map();
    let nrow = 0, ncol = 0;

    for (const run of runs) {
        if (!run || !run.tableCell) continue;
        const key = run.shapeId !== undefined ? "id:" + run.shapeId
                  : run.elementIndex !== undefined ? "el:" + run.elementIndex : null;
        if (key === null || key !== shapeKey) continue;

        const r = run.tableCell.row, c = run.tableCell.column;
        if (!Number.isInteger(r) || !Number.isInteger(c)) continue;
        const id = r + ":" + c;
        cells.set(id, (cells.get(id) || "") + (run.text || ""));
        if (r + 1 > nrow) nrow = r + 1;
        if (c + 1 > ncol) ncol = c + 1;
    }
    if (!nrow || !ncol) return null;

    const grid = Array.from({ length: nrow }, () => Array(ncol).fill(""));
    for (const [id, text] of cells) {
        const [r, c] = id.split(":").map(Number);
        grid[r][c] = normaliseCell(text);
    }
    return grid;
}

export function pptxShapeKey(run) {
    if (!run) return null;
    if (run.shapeId !== undefined) return "id:" + run.shapeId;
    if (run.elementIndex !== undefined) return "el:" + run.elementIndex;
    return null;
}

function spansIn(root) {
    return [...root.querySelectorAll(RUN_SEL)];
}

// Whole table under a click. docx keys on the source path, so a table split
// across pages is reassembled - but only from pages currently mounted by the
// virtualiser. pptx keys on (surface, elementIndex), which is one slide by
// construction.
export function tableAtPoint(container, target, slideRuns) {
    const el = target && target.closest ? target.closest(RUN_SEL) : null;
    if (!el) return null;
    const format = el.dataset.ooxmlSelectionRun;

    if (format === "docx") {
        const k = docxCell(el);
        if (!k) return null;
        const spans = spansIn(container).filter(s => {
            const c = docxCell(s);
            return c && c.table === k.table;
        });
        const grids = docxGrids(spans);
        return grids.length ? { format, grid: grids[0], spans } : null;
    }

    if (format === "pptx") {
        const spans = pptxSiblings(container, el);
        if (!spans || spans.length < 2) return null;

        // Exact route first: the span's run index addresses the run list, and
        // the run knows its own cell.
        if (slideRuns) {
            const run = slideRuns[Number(el.dataset.runIndex)];
            const key = pptxShapeKey(run);
            if (run && run.tableCell && key) {
                const exact = pptxGridFromRuns(slideRuns, key);
                if (exact && exact.length >= 2 && exact[0].length >= 2) {
                    return { format, grid: exact, spans, exact: true };
                }
            }
        }

        const grid = pptxGrid(spans, []);
        // pptx groups runs per shape, and a shape may just as well be a
        // paragraph of prose. Only offer a copy when what came out actually
        // looks like a grid.
        if (grid.length < 2 || !grid[0] || grid[0].length < 2) return null;
        return { format, grid, spans };
    }

    return null;
}

export function regionGrid(container, rect, splitsX) {
    const hit = spansIn(container).filter(el => {
        const r = el.getBoundingClientRect();
        return r.right > rect.left && r.left < rect.right &&
               r.bottom > rect.top && r.top < rect.bottom;
    });
    if (!hit.length) return null;

    const format = hit[0].dataset.ooxmlSelectionRun;
    if (format === "docx") {
        const grids = docxGrids(hit);
        // A region that caught no table cells at all still has text in it;
        // fall back to treating it geometrically so marking a plain-text
        // block or a docx table drawn without w:tbl still yields something.
        if (grids.length) return { format, grid: grids[0] };
    }
    return { format, grid: pptxGrid(hit, splitsX) };
}

export function oxTableSupport(container) {
    const spans = spansIn(container);
    if (!spans.length) return { ok: false, reason: "no selection overlay (enableTextSelection off?)" };
    const el = spans[0];
    const format = el.dataset.ooxmlSelectionRun;
    if (format === "docx" && el.dataset.sourcePath === undefined) {
        return { ok: false, reason: "docx runs carry no data-source-path" };
    }
    if (format === "pptx" && el.dataset.elementIndex === undefined) {
        return { ok: false, reason: "pptx runs carry no data-element-index" };
    }
    return { ok: true, format };
}

// ---- marquee: shift-drag a region, click inside to add column splits ----

function makeMarquee() {
    const box = document.createElement("div");
    box.style.cssText =
        "position:fixed;z-index:1500;border:1px solid #2b6cb0;" +
        "background:rgba(43,108,176,0.10);pointer-events:none;";
    document.body.appendChild(box);
    return box;
}

function placeBox(box, x0, y0, x1, y1) {
    box.style.left = Math.min(x0, x1) + "px";
    box.style.top = Math.min(y0, y1) + "px";
    box.style.width = Math.abs(x1 - x0) + "px";
    box.style.height = Math.abs(y1 - y0) + "px";
}

const COPY_ICON =
    '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" ' +
    'stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<rect x="9" y="9" width="11" height="11" rx="2"/>' +
    '<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';

const TICK_ICON =
    '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" ' +
    'stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M20 6 9 17l-5-5"/></svg>';

// Union of the run rectangles, which is the text extent rather than the
// authored table border - close enough to hang a corner button on, and it
// needs no geometry from the renderer.
function spansRect(spans) {
    let left = Infinity, top = Infinity, right = -Infinity, bottom = -Infinity;
    for (const el of spans) {
        const r = el.getBoundingClientRect();
        if (!r.width && !r.height) continue;
        if (r.left < left) left = r.left;
        if (r.top < top) top = r.top;
        if (r.right > right) right = r.right;
        if (r.bottom > bottom) bottom = r.bottom;
    }
    if (left === Infinity) return null;
    return { left, top, right, bottom, width: right - left, height: bottom - top };
}

export function initTableCopy(container, opts) {
    const options = opts || {};
    const setStatus = options.onStatus || function () {};
    // Optional: (slideIndex) => Promise<PptxTextRunInfo[]>. Supplying it
    // switches pptx tables from geometric clustering to exact cell addresses
    // as soon as the bundled ooxml carries them.
    const slideRunsFor = options.slideRuns || null;
    const runCache = new Map();

    let picked = null;      // { key, grid, spans } for the table under the cursor
    let region = null;      // { rect, splits, box, bar, lines }

    function describe(grid) {
        return grid.length + "\u00d7" + (grid[0] ? grid[0].length : 0);
    }

    async function copy(grid, label) {
        const ok = await copyGrid(grid);
        setStatus(ok ? "Copied " + describe(grid) + " " + label + " as TSV"
                     : "Copy failed - clipboard unavailable");
        if (!ok) console.warn("[oxview] clipboard write rejected");
    }

    function clearRegion() {
        if (!region) return;
        region.box.remove();
        region.bar.remove();
        for (const l of region.lines) l.remove();
        region = null;
    }

    function redrawSplits() {
        for (const l of region.lines) l.remove();
        region.lines = region.splits.map(x => {
            const l = document.createElement("div");
            l.style.cssText =
                "position:fixed;z-index:1501;width:0;border-left:1px dashed #2b6cb0;" +
                "pointer-events:none;top:" + region.rect.top + "px;height:" +
                region.rect.height + "px;left:" + x + "px;";
            document.body.appendChild(l);
            return l;
        });
    }

    function refreshRegion() {
        const res = regionGrid(container, region.rect, region.splits);
        region.grid = res ? res.grid : [];
        region.dims.textContent = res ? describe(res.grid) : "empty";
    }

    function openRegionBar(rect) {
        const bar = document.createElement("div");
        bar.style.cssText =
            "position:fixed;z-index:1502;background:#fff;border:1px solid #ccc;" +
            "border-radius:4px;box-shadow:0 2px 8px rgba(0,0,0,0.15);padding:4px 6px;" +
            "font:12px sans-serif;display:flex;align-items:center;gap:6px;" +
            "left:" + rect.left + "px;top:" + (rect.bottom + 6) + "px;";
        bar.innerHTML =
            '<span data-ox="dims" style="color:#333;"></span>' +
            '<button data-ox="copy">Copy TSV</button>' +
            '<button data-ox="reset" title="Remove manual column splits">Reset splits</button>' +
            '<button data-ox="close">&times;</button>';
        document.body.appendChild(bar);
        return bar;
    }

    let dragging = false, x0 = 0, y0 = 0, dragBox = null;

    container.addEventListener("pointerdown", (ev) => {
        if (!ev.shiftKey || ev.button !== 0) return;
        ev.preventDefault();
        clearRegion();
        dragging = true;
        x0 = ev.clientX;
        y0 = ev.clientY;
        dragBox = makeMarquee();
        placeBox(dragBox, x0, y0, x0, y0);
        try { container.setPointerCapture(ev.pointerId); } catch (e) {}
    });

    container.addEventListener("pointermove", (ev) => {
        if (!dragging) return;
        placeBox(dragBox, x0, y0, ev.clientX, ev.clientY);
    });

    container.addEventListener("pointerup", (ev) => {
        if (!dragging) return;
        dragging = false;
        try { container.releasePointerCapture(ev.pointerId); } catch (e) {}

        const rect = dragBox.getBoundingClientRect();
        if (rect.width < 6 || rect.height < 6) {
            dragBox.remove();
            return;
        }

        const bar = openRegionBar(rect);
        region = {
            rect: { left: rect.left, top: rect.top, right: rect.right,
                    bottom: rect.bottom, width: rect.width, height: rect.height },
            splits: [],
            box: dragBox,
            bar: bar,
            lines: [],
            dims: bar.querySelector('[data-ox="dims"]'),
            grid: []
        };
        dragBox = null;
        refreshRegion();

        bar.addEventListener("click", async (e) => {
            const act = e.target.dataset ? e.target.dataset.ox : null;
            if (act === "copy" && region.grid.length) await copy(region.grid, "region");
            else if (act === "reset") { region.splits = []; redrawSplits(); refreshRegion(); }
            else if (act === "close") clearRegion();
        });

        setStatus("Region marked - click inside it to add a column split");
    });

    // A click inside a live region adds a column split.
    container.addEventListener("click", (ev) => {
        if (!region) return;
        const r = region.rect;
        if (ev.clientX > r.left && ev.clientX < r.right &&
            ev.clientY > r.top && ev.clientY < r.bottom) {
            ev.preventDefault();
            region.splits.push(ev.clientX);
            redrawSplits();
            refreshRegion();
        }
    });

    // ---- hover-anchored copy button, in the table's top-right corner ----

    const copyBtn = document.createElement("button");
    copyBtn.type = "button";
    copyBtn.className = "ox-table-copy";
    copyBtn.title = "Copy table as TSV";
    copyBtn.innerHTML = COPY_ICON;
    copyBtn.style.cssText =
        "position:fixed;z-index:1400;display:none;align-items:center;justify-content:center;" +
        "width:22px;height:22px;padding:0;border:1px solid #ccc;border-radius:4px;" +
        "background:#fff;color:#444;cursor:pointer;opacity:0;transition:opacity .12s;" +
        "box-shadow:0 1px 3px rgba(0,0,0,0.18);";
    document.body.appendChild(copyBtn);

    let hideTimer = null;
    let overButton = false;
    let tickTimer = null;

    // Runs are fetched per slide, once, in the background. Hover never waits
    // on them: the first pass over a slide uses whatever route is available
    // and the next one picks up the exact grid.
    function cachedRuns(el) {
        if (!slideRunsFor) return null;
        const surface = el.closest(SURFACE_SEL);
        const idx = surface && surface.dataset ? Number(surface.dataset.slideIndex) : NaN;
        if (!Number.isInteger(idx)) return null;
        if (runCache.has(idx)) return runCache.get(idx);
        runCache.set(idx, null);
        Promise.resolve(slideRunsFor(idx))
            .then(runs => { runCache.set(idx, runs || null); })
            .catch(() => { runCache.set(idx, null); });
        return null;
    }

    function placeButton(rect) {
        const host = container.getBoundingClientRect();
        // Keep the button inside the scroll viewport, so it stays reachable
        // when a long table is only partly on screen.
        const x = Math.min(Math.max(rect.right - 26, host.left + 4), host.right - 26);
        const y = Math.min(Math.max(rect.top + 4, host.top + 4), host.bottom - 26);
        copyBtn.style.left = x + "px";
        copyBtn.style.top = y + "px";
        copyBtn.style.display = "flex";
        requestAnimationFrame(() => { copyBtn.style.opacity = "1"; });
    }

    function hideButton() {
        copyBtn.style.opacity = "0";
        copyBtn.style.display = "none";
        picked = null;
    }

    function scheduleHide() {
        clearTimeout(hideTimer);
        hideTimer = setTimeout(() => { if (!overButton) hideButton(); }, 250);
    }

    function showFor(target) {
        const el = target && target.closest ? target.closest(RUN_SEL) : null;
        const key = tableKeyOf(container, el);
        if (!key) {
            scheduleHide();
            return;
        }
        clearTimeout(hideTimer);

        if (picked && picked.key === key) {
            const rect = spansRect(picked.spans);
            if (rect) placeButton(rect);
            return;
        }

        const hit = tableAtPoint(container, el, cachedRuns(el));
        if (!hit) {
            scheduleHide();
            return;
        }
        picked = { key: key, grid: hit.grid, spans: hit.spans };
        const rect = spansRect(hit.spans);
        if (rect) placeButton(rect);
    }

    let moveQueued = false;
    container.addEventListener("mousemove", (ev) => {
        if (region || moveQueued) return;
        moveQueued = true;
        const target = ev.target;
        requestAnimationFrame(() => {
            moveQueued = false;
            showFor(target);
        });
    });
    container.addEventListener("mouseleave", scheduleHide);

    copyBtn.addEventListener("mouseenter", () => { overButton = true; clearTimeout(hideTimer); });
    copyBtn.addEventListener("mouseleave", () => { overButton = false; scheduleHide(); });

    // Rects move with scroll and zoom; recompute from the spans we already
    // have rather than re-deriving the table.
    function reposition() {
        if (!picked || copyBtn.style.display === "none") return;
        const rect = spansRect(picked.spans);
        if (rect) placeButton(rect);
        else hideButton();
    }
    container.addEventListener("scroll", () => requestAnimationFrame(reposition), true);
    window.addEventListener("resize", () => requestAnimationFrame(reposition));

    copyBtn.addEventListener("click", async (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        if (!picked) return;
        const ok = await copyGrid(picked.grid);
        setStatus(ok ? "Copied " + describe(picked.grid) + " table as TSV"
                     : "Copy failed - clipboard unavailable");
        copyBtn.innerHTML = ok ? TICK_ICON : COPY_ICON;
        copyBtn.style.color = ok ? "#2f855a" : "#c00";
        clearTimeout(tickTimer);
        tickTimer = setTimeout(() => {
            copyBtn.innerHTML = COPY_ICON;
            copyBtn.style.color = "#444";
        }, 1200);
    });

    window.addEventListener("keydown", (ev) => {
        if (ev.key === "Escape") clearRegion();
        if ((ev.metaKey || ev.ctrlKey) && ev.shiftKey && ev.key.toLowerCase() === "c") {
            ev.preventDefault();
            if (region && region.grid.length) copy(region.grid, "region");
            else if (picked) copy(picked.grid, "table");
        }
    });

    return {
        support: () => oxTableSupport(container),
        current: () => (region && region.grid.length ? region.grid : (picked ? picked.grid : null))
    };
}
