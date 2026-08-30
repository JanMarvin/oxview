// Copy charts, images and shapes out of the docx / pptx canvas.
//
// The viewers already hit-test these elements for you: with
// `enableElementSelection: true` a click reports a DocxElementContext /
// PptxElementContext carrying the element's type and its bounds. What the
// library does not do - reasonably, since it is a viewer and says so - is
// give you anything to take away with you. This adds that on top, using only
// the headless engine's public surface.
//
// Two things are offered per element:
//
//   PNG   Rendered rather than extracted, which is the only approach that
//         works uniformly. A chart has no bitmap in the file at all - it is
//         DrawingML the library draws - so re-rendering the page or slide
//         offscreen and cropping to the element's bounds is the only way to
//         get pixels for one. The same path then serves images and shapes,
//         and it picks up the library's own faithful rendering instead of
//         the raw embedded asset (which for WMF/EMF would not be a usable
//         image anyway).
//
//   TSV   For docx charts only. ChartModel carries `categories: string[]`
//         and `series[].name` / `series[].values`, which is exactly a table,
//         and DocxDocument exposes the parsed model through its public
//         `document` getter. PptxPresentation has no equivalent public model
//         accessor in this release, so pptx charts offer PNG only. That is a
//         gap in what we can reach, not a defect upstream - the pptx engine
//         simply keeps its slide models to itself.
//
// Bounds arrive in the same units as pageSize() / slideWidth, so every
// conversion here is a ratio against those and never assumes points, EMU or
// pixels.

const PNG_ICON =
    '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" ' +
    'stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<rect x="3" y="3" width="18" height="18" rx="2"/>' +
    '<circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>';

const DATA_ICON =
    '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" ' +
    'stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M3 3v18h18"/><path d="M7 16v-5M12 16V7M17 16v-8"/></svg>';

const TICK_ICON =
    '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" ' +
    'stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M20 6 9 17l-5-5"/></svg>';

function tsvCell(s) {
    return /[\t\n\r"]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}

// Same normalisation the table copy applies - category labels come out of
// the same kind of run assembly and carry the same NBSP / doubled-space
// artefacts.
function clean(s) {
    return String(s)
        .replace(/[\u00A0\u2000-\u200A\u202F\u205F\u3000]/g, " ")
        .replace(/[\u200B\u200C\u200D\u2060\uFEFF\u00AD]/g, "")
        .replace(/[ \t]+/g, " ")
        .trim();
}

// categories down the rows, one column per series - the orientation you
// would want to paste straight into a sheet.
export function chartToTsv(chart) {
    const series = chart.series || [];
    const cats = chart.categories || [];
    const rows = [];

    rows.push([clean(chart.catAxisTitle || "")].concat(
        series.map((s, i) => clean(s.name || ("Series " + (i + 1))))));

    const depth = Math.max(cats.length, ...series.map(s => (s.values || []).length), 0);
    for (let r = 0; r < depth; r++) {
        const row = [cats[r] === undefined ? "" : clean(cats[r])];
        for (const s of series) {
            const v = (s.values || [])[r];
            row.push(v === null || v === undefined ? "" : String(v));
        }
        rows.push(row);
    }
    return rows.map(r => r.map(tsvCell).join("\t")).join("\r\n");
}

async function writeClipboard(items, fallbackText) {
    if (window.ClipboardItem && navigator.clipboard && navigator.clipboard.write) {
        try {
            await navigator.clipboard.write([new ClipboardItem(items)]);
            return true;
        } catch (e) {
            // fall through
        }
    }
    if (fallbackText !== undefined && navigator.clipboard && navigator.clipboard.writeText) {
        try {
            await navigator.clipboard.writeText(fallbackText);
            return true;
        } catch (e) {
            // fall through
        }
    }
    // Both of the above are Permissions-Policy gated; execCommand is not.
    if (fallbackText !== undefined) {
        const host = document.createElement("textarea");
        host.value = fallbackText;
        host.style.cssText = "position:fixed;left:-9999px;top:0;opacity:0;";
        document.body.appendChild(host);
        host.select();
        let ok = false;
        try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
        host.remove();
        return ok;
    }
    return false;
}

// The docx element context locates the run by story path. Walk the model the
// same way the layout walker builds that path: body index, then (row, col)
// per table level, then the element index inside the cell, and finally the
// run index inside the paragraph.
export function runAtPath(model, source) {
    if (!model || !source || !Array.isArray(source.path) || !source.path.length) return null;
    if (source.story !== "body") return null;

    let list = model.body;
    let path = source.path.slice();

    for (;;) {
        const idx = path.shift();
        const el = list && list[idx];
        if (!el) return null;

        if (el.type === "table") {
            if (path.length < 2) return null;
            const row = el.rows[path.shift()];
            const cell = row && row.cells[path.shift()];
            if (!cell) return null;
            list = cell.content;
            continue;
        }
        if (el.type !== "paragraph") return null;
        if (path.length !== 1) return null;
        return (el.runs || [])[path[0]] || null;
    }
}

function chartForContext(engine, context) {
    if (!context || context.elementType !== "chart") return null;
    let model;
    try {
        model = engine.document;
    } catch (e) {
        return null;
    }
    const run = runAtPath(model, context.source);
    if (run && run.type === "chart" && run.chart) return run.chart;

    // The path did not resolve to the run we expected. Rather than guess,
    // fall back to matching on series count when that is unambiguous.
    const charts = [];
    const walk = (list) => {
        for (const el of list || []) {
            if (el.type === "paragraph") {
                for (const r of el.runs || []) if (r.type === "chart" && r.chart) charts.push(r.chart);
            } else if (el.type === "table") {
                for (const row of el.rows || []) for (const cell of row.cells || []) walk(cell.content);
            }
        }
    };
    walk(model && model.body);
    const sized = charts.filter(c => (c.series || []).length === context.seriesCount);
    return sized.length === 1 ? sized[0] : null;
}

// Render the whole page/slide offscreen at a generous width, then crop by the
// element's share of the page. Cropping the on-screen canvas instead would
// bake in whatever zoom the user happens to be at.
async function elementPng(engine, kind, context, targetWidth) {
    const index = kind === "docx" ? context.pageIndex : context.slideIndex;
    const size = kind === "docx"
        ? (() => { const s = engine.pageSize(index); return { w: s.widthPt, h: s.heightPt }; })()
        : { w: engine.slideWidth, h: engine.slideHeight };
    if (!size.w || !size.h) return null;

    const width = targetWidth || 1600;
    const height = Math.round(width * size.h / size.w);

    const page = document.createElement("canvas");
    page.width = width;
    page.height = height;

    if (kind === "docx") await engine.renderPage(page, index, { width: width, dpr: 1 });
    else await engine.renderSlide(page, index, { width: width, dpr: 1 });

    const b = context.bounds;
    const sx = Math.max(0, Math.round((kind === "docx" ? b.xPt : b.x) / size.w * width));
    const sy = Math.max(0, Math.round((kind === "docx" ? b.yPt : b.y) / size.h * height));
    const sw = Math.min(width - sx, Math.round((kind === "docx" ? b.widthPt : b.width) / size.w * width));
    const sh = Math.min(height - sy, Math.round((kind === "docx" ? b.heightPt : b.height) / size.h * height));
    if (sw <= 0 || sh <= 0) return null;

    const out = document.createElement("canvas");
    out.width = sw;
    out.height = sh;
    out.getContext("2d").drawImage(page, sx, sy, sw, sh, 0, 0, sw, sh);

    return new Promise(resolve => out.toBlob(resolve, "image/png"));
}

function boundsToClient(kind, context, canvas, size) {
    const r = canvas.getBoundingClientRect();
    const b = context.bounds;
    const x = (kind === "docx" ? b.xPt : b.x) / size.w;
    const y = (kind === "docx" ? b.yPt : b.y) / size.h;
    const w = (kind === "docx" ? b.widthPt : b.width) / size.w;
    const h = (kind === "docx" ? b.heightPt : b.height) / size.h;
    return {
        left: r.left + x * r.width,
        top: r.top + y * r.height,
        right: r.left + (x + w) * r.width,
        bottom: r.top + (y + h) * r.height
    };
}

// Which page/slide a canvas belongs to. pptx stamps the index on its slot
// wrapper; docx only puts it on the text-selection surface, so check both -
// same walk the library's own locator helpers do.
function indexForCanvas(container, canvas, key) {
    const attr = key === "pageIndex" ? "data-page-index" : "data-slide-index";
    for (let node = canvas; node; node = node.parentElement) {
        const own = node.dataset ? node.dataset[key] : undefined;
        if (own !== undefined && /^\d+$/.test(own)) return Number(own);
        if (node.querySelector) {
            const marked = node.querySelector("[" + attr + "]");
            const val = marked && marked.getAttribute(attr);
            if (val && /^\d+$/.test(val)) return Number(val);
        }
        if (node === container) break;
    }
    return null;
}

export function initMediaCopy(opts) {
    const { container, engine, kind } = opts;
    const setStatus = opts.onStatus || function () {};
    const indexKey = kind === "docx" ? "pageIndex" : "slideIndex";
    const indexOf = opts.currentIndex ||
        ((canvas) => indexForCanvas(container, canvas, indexKey));

    const bar = document.createElement("div");
    bar.style.cssText =
        "position:fixed;z-index:1400;display:none;gap:4px;opacity:0;transition:opacity .12s;";
    document.body.appendChild(bar);

    function makeButton(icon, title) {
        const b = document.createElement("button");
        b.type = "button";
        b.title = title;
        b.innerHTML = icon;
        b.style.cssText =
            "display:flex;align-items:center;justify-content:center;width:22px;height:22px;" +
            "padding:0;border:1px solid #ccc;border-radius:4px;background:#fff;color:#444;" +
            "cursor:pointer;box-shadow:0 1px 3px rgba(0,0,0,0.18);";
        bar.appendChild(b);
        return b;
    }

    const pngBtn = makeButton(PNG_ICON, "Copy as PNG, or save it where the clipboard is blocked");
    const dataBtn = makeButton(DATA_ICON, "Copy chart data as TSV");

    let current = null;      // { context, rect, canvas, size, chart }
    // Rendered PNGs, keyed per element and filled while the pointer rests on
    // it. The point is to have a *resolved* blob by the time the button is
    // clicked: Chromium only accepts a promise inside ClipboardItem from 116
    // onwards, and the Electron shell RStudio embeds may well be older, while
    // the resolved form loses the click's user activation if we await the
    // render first. Rendering ahead of the click satisfies both.
    const pngCache = new Map();
    let prerenderTimer = null;
    let hideTimer = null;
    let overBar = false;
    let tickTimer = null;
    let busy = false;

    function flash(btn, ok) {
        const icon = btn === pngBtn ? PNG_ICON : DATA_ICON;
        btn.innerHTML = ok ? TICK_ICON : icon;
        btn.style.color = ok ? "#2f855a" : "#c00";
        clearTimeout(tickTimer);
        tickTimer = setTimeout(() => { btn.innerHTML = icon; btn.style.color = "#444"; }, 1200);
    }

    function place(rect) {
        const host = container.getBoundingClientRect();
        const wide = current && current.chart ? 48 : 26;
        const x = Math.min(Math.max(rect.right - wide, host.left + 4), host.right - wide);
        const y = Math.min(Math.max(rect.top + 4, host.top + 4), host.bottom - 26);
        bar.style.left = x + "px";
        bar.style.top = y + "px";
        bar.style.display = "flex";
        requestAnimationFrame(() => { bar.style.opacity = "1"; });
    }

    function hide() {
        if (busy) return;
        bar.style.opacity = "0";
        bar.style.display = "none";
        current = null;
    }

    function scheduleHide() {
        clearTimeout(hideTimer);
        hideTimer = setTimeout(() => { if (!overBar) hide(); }, 250);
    }

    function elementKey(context) {
        const b = context.bounds;
        const idx = kind === "docx" ? context.pageIndex : context.slideIndex;
        return kind + "|" + idx + "|" + context.elementType + "|" +
               (kind === "docx" ? [b.xPt, b.yPt, b.widthPt, b.heightPt] : [b.x, b.y, b.width, b.height]).join(",");
    }

    function prerender(context) {
        const key = elementKey(context);
        if (pngCache.has(key)) return pngCache.get(key);
        const entry = { blob: null, error: null };
        entry.promise = elementPng(engine, kind, context, opts.pngWidth)
            .then((blob) => {
                if (!blob) throw Error("empty crop");
                entry.blob = blob;
                return blob;
            })
            .catch((e) => {
                entry.error = e;
                throw e;
            });
        entry.promise.catch(() => {});
        pngCache.set(key, entry);
        return entry;
    }

    function sizeFor(index) {
        if (kind === "docx") {
            const s = engine.pageSize(index);
            return { w: s.widthPt, h: s.heightPt };
        }
        return { w: engine.slideWidth, h: engine.slideHeight };
    }

    async function probe(ev) {
        const canvas = ev.target && ev.target.tagName === "CANVAS" ? ev.target : null;
        if (!canvas) {
            scheduleHide();
            return;
        }

        // Still inside the element we already found - just keep up with
        // scrolling instead of hit-testing again.
        if (current) {
            const r = boundsToClient(kind, current.context, current.canvas, current.size);
            if (ev.clientX >= r.left && ev.clientX <= r.right &&
                ev.clientY >= r.top && ev.clientY <= r.bottom) {
                clearTimeout(hideTimer);
                place(r);
                return;
            }
        }

        const index = indexOf(canvas);
        if (index === null || index === undefined) {
            scheduleHide();
            return;
        }

        let size;
        try { size = sizeFor(index); } catch (e) { scheduleHide(); return; }
        if (!size.w || !size.h) { scheduleHide(); return; }

        const cr = canvas.getBoundingClientRect();
        const px = (ev.clientX - cr.left) / cr.width * size.w;
        const py = (ev.clientY - cr.top) / cr.height * size.h;

        let context = null;
        try {
            context = kind === "docx"
                ? await engine.getElementContextAt(index, { xPt: px, yPt: py })
                : await engine.getElementContextAt(index, { x: px, y: py });
        } catch (e) {
            context = null;
        }

        if (!context || context.kind !== "element") {
            scheduleHide();
            return;
        }

        const chart = kind === "docx" ? chartForContext(engine, context) : null;
        current = { context, canvas, size, chart };

        // Warm the PNG while the pointer rests here, so the click can write a
        // blob that already exists.
        clearTimeout(prerenderTimer);
        prerenderTimer = setTimeout(() => {
            if (current && current.context === context) prerender(context);
        }, 180);
        dataBtn.style.display = chart ? "flex" : "none";
        pngBtn.title = "Copy " + context.elementType + " as PNG, or save it where the clipboard is blocked";
        clearTimeout(hideTimer);
        place(boundsToClient(kind, context, canvas, size));
    }

    let queued = false;
    container.addEventListener("mousemove", (ev) => {
        if (queued) return;
        queued = true;
        const snapshot = { target: ev.target, clientX: ev.clientX, clientY: ev.clientY };
        requestAnimationFrame(() => {
            queued = false;
            probe(snapshot);
        });
    });
    container.addEventListener("mouseleave", scheduleHide);

    bar.addEventListener("mouseenter", () => { overBar = true; clearTimeout(hideTimer); });
    bar.addEventListener("mouseleave", () => { overBar = false; scheduleHide(); });

    // WebKit only honours navigator.clipboard.write() while the click's user
    // activation is still live, and awaiting the render (a full page paint plus
    // toBlob) outlives it - which is why this worked in Chrome and failed on
    // macOS. The supported shape is to hand ClipboardItem the *pending* blob
    // and call write() synchronously inside the handler; WebKit then waits on
    // the promise itself. Firefox does not accept a promise there, so the
    // resolved form is kept as a second attempt, and a download as the last.
    // The async Clipboard API is gated by Permissions Policy, and an embedding
    // host that does not put allow="clipboard-write" on its iframe blocks it
    // outright - which is what the RStudio Viewer pane does:
    //
    //   NotAllowedError: Failed to execute 'write' on 'Clipboard': The
    //   Clipboard API has been blocked because of a permissions policy
    //   applied to the current document.
    //
    // An execCommand("copy") over a selected <img> escapes that policy, but
    // Chromium then puts the image on the clipboard as markup referencing a
    // blob: URL that means nothing outside this document - execCommand returns
    // true and the paste target gets nothing. A silent no-op is worse than an
    // honest file, so the image button saves when the API is blocked. Text
    // has no such problem: a textarea + execCommand genuinely works, which is
    // why the table and chart-data copies stay on the clipboard everywhere.
    function downloadPng(blob, name) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 10000);
    }

    pngBtn.addEventListener("click", (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        if (!current || busy) return;
        busy = true;

        const label = current.context.elementType;
        const where = kind === "docx"
            ? "page-" + (current.context.pageIndex + 1)
            : "slide-" + (current.context.slideIndex + 1);
        const filename = where + "-" + label + ".png";
        setStatus("Rendering\u2026");

        const entry = prerender(current.context);
        const pending = entry.promise;

        const finish = (ok, note) => {
            setStatus(note);
            flash(pngBtn, ok);
            busy = false;
        };

        const canWrite = window.ClipboardItem && navigator.clipboard && navigator.clipboard.write;

        // Best case: the hover render already finished, so this is an ordinary
        // synchronous write of a real blob inside the click - the form every
        // engine accepts. Otherwise fall back to handing over the promise,
        // which needs a newer Chromium but at least keeps the activation.
        let attempt = null;
        if (!canWrite) {
            attempt = Promise.reject(Error("clipboard.write unavailable"));
        } else {
            try {
                attempt = navigator.clipboard.write([new ClipboardItem({
                    "image/png": entry.blob ? entry.blob : pending
                })]);
            } catch (e) {
                attempt = Promise.reject(e);
            }
        }

        attempt.then(
            () => finish(true, "Copied " + label + " as PNG"),
            (firstError) => pending.then(
                (blob) => {
                    // One more try with a resolved blob, for engines that
                    // refuse the promise form but allow the API itself. Any
                    // failure past this point saves the file.
                    if (canWrite) {
                        return navigator.clipboard.write([new ClipboardItem({ "image/png": blob })])
                            .then(() => finish(true, "Copied " + label + " as PNG"),
                                  () => {
                                      downloadPng(blob, filename);
                                      console.warn("[oxview] clipboard blocked, saved instead:", firstError);
                                      finish(true, "Saved " + filename);
                                  });
                    }
                    downloadPng(blob, filename);
                    finish(true, "Saved " + filename);
                },
                (renderError) => {
                    console.error("[oxview] element render failed:", renderError);
                    finish(false, "Render failed - see console");
                }
            )
        );
    });

    dataBtn.addEventListener("click", async (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        if (!current || !current.chart || busy) return;
        busy = true;
        try {
            const tsv = chartToTsv(current.chart);
            const ok = await writeClipboard(
                { "text/plain": new Blob([tsv], { type: "text/plain" }) }, tsv);
            const rows = (current.chart.categories || []).length;
            const cols = (current.chart.series || []).length;
            setStatus(ok ? "Copied chart data (" + rows + "\u00d7" + cols + ") as TSV"
                         : "Copy failed - clipboard unavailable");
            flash(dataBtn, ok);
        } finally {
            busy = false;
        }
    });

    function reposition() {
        if (!current || bar.style.display === "none") return;
        place(boundsToClient(kind, current.context, current.canvas, current.size));
    }
    container.addEventListener("scroll", () => requestAnimationFrame(reposition), true);
    window.addEventListener("resize", () => requestAnimationFrame(reposition));

    return { hide: hide };
}

// ---- xlsx ----
//
// A spreadsheet has no pages to hit-test, and XlsxViewer reports elements
// only through selection: clicking a chart or image fires
// onSelectionContextChange with kind 'element'. So this is click-driven
// rather than hover-driven, which matches how the viewer already behaves.
//
// XlsxElementContext carries no pixel box, only a two-cell anchor
// ({from,to} of row/col plus EMU offsets) - the same shape as the worksheet's
// own ChartAnchor. That makes matching a selected element to its chart exact:
// compare anchors, no index bookkeeping. Worksheet.charts[].chart is a full
// ChartModel, so chart data on this side needs no geometry at all.
//
// The PNG crop does need geometry, and it rests on two things this file
// cannot verify without a browser: that anchor row/col are zero-based as in
// OOXML, and that getCellViewportRect() is in CSS pixels from the canvas's
// top-left. The rect is sanity-checked before the button appears and logged
// under [oxview] so a wrong assumption shows up as a refusal rather than a
// garbage image.

const EMU_PER_PX = 9525;

function downloadBlob(blob, name) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
}

function anchorMatches(a, chartAnchor) {
    return chartAnchor.fromRow === a.from.row && chartAnchor.fromCol === a.from.col &&
           chartAnchor.toRow === a.to.row && chartAnchor.toCol === a.to.col;
}

export async function xlsxChartFor(viewer, context) {
    if (context.elementType !== "chart") return null;
    const wb = viewer.wb || viewer.workbook;
    if (!wb || typeof wb.getWorksheet !== "function") return null;
    let ws;
    try { ws = await wb.getWorksheet(context.sheetIndex); } catch (e) { return null; }
    const charts = (ws && ws.charts) || [];
    const hit = charts.filter(c => anchorMatches(context.anchor, c));
    if (hit.length === 1) return hit[0].chart;
    return charts[context.elementIndex] ? charts[context.elementIndex].chart : null;
}

export function xlsxElementRect(viewer, context) {
    const scale = typeof viewer.getScale === "function" ? viewer.getScale() : 1;
    const a = context.anchor;
    const from = viewer.getCellViewportRect({ row: a.from.row + 1, col: a.from.col + 1 });
    const to = viewer.getCellViewportRect({ row: a.to.row + 1, col: a.to.col + 1 });
    if (!from || !to) return null;

    const canvas = viewer.canvasElement;
    if (!canvas) return null;
    const host = canvas.getBoundingClientRect();

    const px = (emu) => (emu / EMU_PER_PX) * scale;
    const rect = {
        left: host.left + from.x + px(a.from.offsetX),
        top: host.top + from.y + px(a.from.offsetY),
        right: host.left + to.x + px(a.to.offsetX),
        bottom: host.top + to.y + px(a.to.offsetY)
    };
    rect.width = rect.right - rect.left;
    rect.height = rect.bottom - rect.top;

    const sane = rect.width >= 8 && rect.height >= 8 &&
                 rect.right > host.left && rect.left < host.right &&
                 rect.bottom > host.top && rect.top < host.bottom;
    if (!sane) {
        console.warn("[oxview] xlsx element rect looks wrong, not offering a copy:", rect, context.anchor);
        return null;
    }
    return rect;
}

// Crop the pixels already on screen. Re-rendering through renderViewport()
// would need a viewport range and the workbook handle; the displayed canvas
// is right there and is what the user is pointing at.
export function cropCanvas(canvas, rect) {
    const host = canvas.getBoundingClientRect();
    const ratio = canvas.width / host.width;
    const sx = Math.max(0, Math.round((rect.left - host.left) * ratio));
    const sy = Math.max(0, Math.round((rect.top - host.top) * ratio));
    const sw = Math.min(canvas.width - sx, Math.round(rect.width * ratio));
    const sh = Math.min(canvas.height - sy, Math.round(rect.height * ratio));
    if (sw <= 0 || sh <= 0) return Promise.resolve(null);

    const out = document.createElement("canvas");
    out.width = sw;
    out.height = sh;
    out.getContext("2d").drawImage(canvas, sx, sy, sw, sh, 0, 0, sw, sh);
    return new Promise(resolve => out.toBlob(resolve, "image/png"));
}

export function initXlsxMediaCopy(opts) {
    const { viewer } = opts;
    const setStatus = opts.onStatus || function () {};

    const bar = document.createElement("div");
    bar.style.cssText =
        "position:fixed;z-index:1400;display:none;gap:4px;opacity:0;transition:opacity .12s;";
    document.body.appendChild(bar);

    function makeButton(icon, title) {
        const b = document.createElement("button");
        b.type = "button";
        b.title = title;
        b.innerHTML = icon;
        b.style.cssText =
            "display:flex;align-items:center;justify-content:center;width:22px;height:22px;" +
            "padding:0;border:1px solid #ccc;border-radius:4px;background:#fff;color:#444;" +
            "cursor:pointer;box-shadow:0 1px 3px rgba(0,0,0,0.18);";
        bar.appendChild(b);
        return b;
    }

    const pngBtn = makeButton(PNG_ICON, "Copy as PNG, or save it where the clipboard is blocked");
    const dataBtn = makeButton(DATA_ICON, "Copy chart data as TSV");

    let current = null;
    let chart = null;
    let tickTimer = null;

    function flash(btn, ok) {
        const icon = btn === pngBtn ? PNG_ICON : DATA_ICON;
        btn.innerHTML = ok ? TICK_ICON : icon;
        btn.style.color = ok ? "#2f855a" : "#c00";
        clearTimeout(tickTimer);
        tickTimer = setTimeout(() => { btn.innerHTML = icon; btn.style.color = "#444"; }, 1200);
    }

    function hide() {
        bar.style.opacity = "0";
        bar.style.display = "none";
        current = null;
        chart = null;
    }

    function place() {
        if (!current) return;
        const rect = xlsxElementRect(viewer, current);
        if (!rect) { hide(); return; }
        const wide = chart ? 48 : 26;
        bar.style.left = Math.round(rect.right - wide) + "px";
        bar.style.top = Math.round(rect.top + 4) + "px";
        bar.style.display = "flex";
        requestAnimationFrame(() => { bar.style.opacity = "1"; });
    }

    async function show(context) {
        if (!context || context.kind !== "element") { hide(); return; }
        current = context;
        chart = null;
        dataBtn.style.display = "none";
        place();
        if (context.elementType === "chart") {
            const found = await xlsxChartFor(viewer, context);
            if (current === context && found) {
                chart = found;
                dataBtn.style.display = "flex";
                place();
            }
        }
    }

    pngBtn.addEventListener("click", async (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        if (!current) return;
        const rect = xlsxElementRect(viewer, current);
        const label = current.elementType;
        const filename = (current.sheetName || "sheet") + "-" + label + ".png";
        let blob = null;
        try {
            blob = rect ? await cropCanvas(viewer.canvasElement, rect) : null;
        } catch (e) {
            console.error("[oxview] xlsx crop failed:", e);
        }
        if (!blob) { setStatus("Could not capture that element"); flash(pngBtn, false); return; }

        let ok = false;
        if (window.ClipboardItem && navigator.clipboard && navigator.clipboard.write) {
            try {
                await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
                ok = true;
            } catch (e) { ok = false; }
        }
        if (ok) {
            setStatus("Copied " + label + " as PNG");
        } else {
            downloadBlob(blob, filename);
            setStatus("Saved " + filename);
        }
        flash(pngBtn, true);
    });

    dataBtn.addEventListener("click", async (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        if (!chart) return;
        const tsv = chartToTsv(chart);
        const ok = await writeClipboard({ "text/plain": new Blob([tsv], { type: "text/plain" }) }, tsv);
        const rows = (chart.categories || []).length;
        const cols = (chart.series || []).length;
        setStatus(ok ? "Copied chart data (" + rows + "\u00d7" + cols + ") as TSV"
                     : "Copy failed - clipboard unavailable");
        flash(dataBtn, ok);
    });

    window.addEventListener("resize", () => requestAnimationFrame(place));

    return { show: show, hide: hide, reposition: place };
}
