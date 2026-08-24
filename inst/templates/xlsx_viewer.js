import { XlsxViewer } from "/assets/xlsx.mjs";
import { threeD } from "/assets/three-d.mjs";
import { regionMap } from "/assets/region-map.mjs";
import { chartEx } from "/assets/chart-ex.mjs";
import { math } from "/assets/math.mjs";

// v0.77 migration: select()/selection/onSelectionChange/CellRange were
// removed upstream (breaking, no aliases kept) in favor of setSelection()/
// selectionState/onSelectionStateChange/XlsxSelectionState. We also took
// the opportunity to adopt the new getSelectionContext() public API for
// the formula bar, count/sum/average stats, and copy - previously these
// read the private `currentWorksheet.rows[...].cells` structure (the
// biggest private-API dependency in this codebase); getSelectionContext()
// gives the same cell values/formulas/display text through a real public
// API (bounded to 10,000 cells - see MAX_SELECTION_CONTEXT_CELLS).
//
// Hyperlink hover tooltip: initially assumed cells carried a `.hyperlink`
// field (matching docx/pptx run shape) - confirmed wrong against the
// actual dist/types/xlsx.d.ts, no such field exists on Cell. Hyperlinks
// live in a separate `Worksheet.hyperlinks: Hyperlink[]` array
// ({row, col, url, location, display}), looked up by address instead.
// This is public (part of the documented Worksheet type), so no private
// API dependency remains for this feature after all.

function colLetters(col) {
    let n = col, s = "";
    while (n > 0) {
        const rem = (n - 1) % 26;
        s = String.fromCharCode(65 + rem) + s;
        n = Math.floor((n - 1) / 26);
    }
    return s;
}

function safeStringify(obj, maxDepth) {
    const seen = new WeakSet();
    function walk(val, depth) {
        if (val === null || typeof val !== "object") return val;
        if (seen.has(val)) return "[circular]";
        if (depth > maxDepth) return "[maxdepth]";
        seen.add(val);
        if (Array.isArray(val)) return val.slice(0, 20).map(v => walk(v, depth + 1));
        const out = {};
        let names = [];
        try { names = Object.getOwnPropertyNames(val); } catch (e) {}
        for (const k of names) {
            let v;
            try { v = val[k]; } catch (e) { continue; }
            if (typeof v === "function") continue;
            out[k] = walk(v, depth + 1);
        }
        const proto = Object.getPrototypeOf(val);
        out["__ctor__"] = proto && proto.constructor ? proto.constructor.name : typeof val;
        return out;
    }
    try { return JSON.stringify(walk(obj, 0), null, 2); }
    catch (e) { return "stringify failed: " + e.message; }
}

function listMethods(obj, label) {
    let protoNames = [];
    try { protoNames = Object.getOwnPropertyNames(Object.getPrototypeOf(obj)); } catch (e) {}
    const protoFns = protoNames.filter(n => typeof obj[n] === "function");
    let ownNames = [];
    try { ownNames = Object.getOwnPropertyNames(obj); } catch (e) {}
    const ownFns = ownNames.filter(n => typeof obj[n] === "function");
    return "--- " + label + " methods ---\n" + protoFns.concat(ownFns).join("\n");
}

async function init() {
    const container = document.getElementById("xlsx-container");
    const refBox = document.getElementById("ref-box");
    const formulaBox = document.getElementById("formula-box");
    const statCount = document.getElementById("stat-count");
    const statSum = document.getElementById("stat-sum");
    const statAvg = document.getElementById("stat-avg");
    const statHint = document.getElementById("stat-hint");
    const clipHelper = document.getElementById("clip-helper");
    const loadStatus = document.getElementById("load-status");
    const sheetJump = document.getElementById("sheet-jump");
    const sheetNamesList = document.getElementById("sheet-names");
    const topbar = document.getElementById("topbar");
    const debugPanel = document.getElementById("debugpanel");
    const searchbar = document.getElementById("searchbar");

    // The formula box is a resizable/auto-growing <textarea> now (multi-line
    // formulas need it), so the top bar's height is no longer fixed - keep
    // everything below it positioned correctly regardless of what caused the
    // height change (auto-grow on new content, or the user manually dragging
    // the textarea's resize handle).
    function repositionBelowTopbar() {
        const h = topbar.offsetHeight;
        container.style.top = h + "px";
        debugPanel.style.top = (h + 4) + "px";
        searchbar.style.top = (h + 4) + "px";
    }
    new ResizeObserver(repositionBelowTopbar).observe(topbar);
    repositionBelowTopbar();

    const qs = new URLSearchParams(window.location.search);

    loadStatus.textContent = "Loading\u2026";

    let currentState = null;

    const xlsx = new XlsxViewer(container, {
        threeD,
        regionMap,
        chartEx,
        math,
        enableHyperlinks: true,
        enableElementSelection: true,
        onSelectionStateChange: (state) => {
            if (!state) return;
            currentState = state;
            statHint.textContent = "";
            updateBars();
            doCopy();
        },
        onSelectionContextChange: (context) => {
            // Element selection (chart/image/shape) is a separate concept
            // from cell selection - onSelectionStateChange doesn't fire for
            // it, this callback does. Read-only by the library's own design
            // (no move/edit API exists); the context gives metadata only
            // (element type, chart series *count*, shape text, image mime
            // type) - not actual chart data values, which live in a
            // separate headless document model this viewer doesn't expose.
            if (context && context.kind === "element") {
                showElementInfo(context);
            } else {
                hideElementInfo();
            }
        },
        onReady: () => {
            sheetNamesList.innerHTML = "";
            xlsx.sheetNames.forEach((name) => {
                const opt = document.createElement("option");
                opt.value = name;
                sheetNamesList.appendChild(opt);
            });
        },
        onError: (err) => console.error("[oxview] xlsx viewer error:", err)
    });

    const res = await fetch("./workbook.xlsx");
    const blob = await res.blob();
    const fileUrl = URL.createObjectURL(blob);
    await xlsx.load(fileUrl);
    URL.revokeObjectURL(fileUrl);

    loadStatus.textContent = "Ready";
    setTimeout(() => { loadStatus.textContent = ""; }, 3000);


    // ---- apply sheet= / cell= / zoom= from the query string (set by
    // ox_view_xlsx(x, sheet=, cell=, zoom=)) ----

    const initialSheet = qs.get("sheet");
    if (initialSheet !== null) {
        const byName = xlsx.sheetNames.indexOf(initialSheet);
        let targetIndex = byName;
        if (targetIndex === -1) {
            const asNum = parseInt(initialSheet, 10);
            if (!isNaN(asNum)) targetIndex = asNum - 1; // 1-based from R, 0-based here
        }
        if (targetIndex >= 0 && targetIndex < xlsx.sheetCount) {
            xlsx.goToSheet(targetIndex).catch(e => console.error("[oxview] initial goToSheet failed:", e));
        } else {
            console.warn("[oxview] sheet '" + initialSheet + "' not found");
        }
    }

    const initialZoom = qs.get("zoom");
    if (initialZoom !== null) {
        const z = parseFloat(initialZoom);
        if (!isNaN(z)) xlsx.setScale(z);
    }

    const initialCell = qs.get("cell");
    if (initialCell !== null) {
        try {
            xlsx.setSelection(initialCell);
            xlsx.scrollToCell(initialCell).catch(() => {});
        } catch (e) {
            console.warn("[oxview] initial cell select failed:", e);
        }
    }

    // ---- formula bar / stats / copy, via getSelectionContext() (public,
    // bounded to 10,000 cells) instead of the old private worksheet dig ----

    function autoGrowFormulaBox() {
        // reset height first so shrinking (shorter content) works too, not
        // just growing - scrollHeight only ever reports the space needed for
        // current content once the box isn't artificially tall already.
        // CSS max-height + overflow-y:auto already caps this and adds a
        // scrollbar beyond that, so no need to clamp it here too.
        formulaBox.style.height = "auto";
        formulaBox.style.height = (formulaBox.scrollHeight + 2) + "px";
        // ResizeObserver on #topbar (set up above) handles repositioning
        // everything below it automatically once this resolves
    }

    function currentContext() {
        try {
            const ctx = xlsx.getSelectionContext();
            return ctx && ctx.kind === "range" ? ctx : null;
        } catch (e) {
            console.warn("[oxview] getSelectionContext failed:", e);
            return null;
        }
    }

    function updateBars() {
        if (!currentState) return;

        // Range bounds and ref-box text come from currentState.areas, not
        // from context.cells - the cells array is sparse (empty cells
        // aren't included, same as the old private structure was) and can
        // also be truncated for large row/column/whole-sheet selections, so
        // it was never a reliable source for "what's the actual selection
        // bounds". This also fixes a real bug: selecting a blank cell right
        // after a non-blank one left the formula bar/ref box/stats showing
        // the previous cell's stale data, because the old code bailed out
        // entirely whenever context.cells was empty (which it always is
        // for an all-blank selection).
        const area = currentState.areas[currentState.activeAreaIndex];
        let refText;
        if (area.kind === "cells") {
            refText = (area.top === area.bottom && area.left === area.right)
                ? colLetters(area.left) + area.top
                : colLetters(area.left) + area.top + ":" + colLetters(area.right) + area.bottom;
        } else if (area.kind === "rows") {
            refText = area.firstRow === area.lastRow
                ? String(area.firstRow) + ":" + area.firstRow
                : area.firstRow + ":" + area.lastRow;
        } else if (area.kind === "columns") {
            refText = area.firstColumn === area.lastColumn
                ? colLetters(area.firstColumn) + ":" + colLetters(area.firstColumn)
                : colLetters(area.firstColumn) + ":" + colLetters(area.lastColumn);
        } else {
            refText = "(entire sheet)";
        }
        refBox.value = refText;

        const context = currentContext();
        if (context && context.truncated) {
            statHint.textContent = "selection truncated to " + context.maxCells + " cells";
        }

        const active = currentState.activeCell;
        const activeEntry = context ? context.cells.find(c => c.address.row === active.row && c.address.col === active.col) : null;
        formulaBox.value = activeEntry ? (activeEntry.formula ? "=" + activeEntry.formula : activeEntry.displayText) : "";
        autoGrowFormulaBox();

        let count = 0, numCount = 0, sum = 0;
        if (context) {
            for (const cell of context.cells) {
                if (cell.valueType === "empty") continue;
                count++;
                if (cell.valueType === "number" && typeof cell.value === "number") {
                    numCount++;
                    sum += cell.value;
                }
            }
        }
        statCount.textContent = "Count: " + count;
        statSum.textContent = numCount > 0 ? "Sum: " + (Math.round(sum * 100) / 100) : "";
        statAvg.textContent = numCount > 0 ? "Average: " + (Math.round((sum / numCount) * 100) / 100) : "";
    }

    function extractSelection() {
        const context = currentContext();
        if (!context || context.cells.length === 0) return "";

        const map = new Map();
        let r1 = Infinity, r2 = -Infinity, c1 = Infinity, c2 = -Infinity;
        for (const cell of context.cells) {
            map.set(cell.address.row + ":" + cell.address.col, cell.displayText);
            r1 = Math.min(r1, cell.address.row); r2 = Math.max(r2, cell.address.row);
            c1 = Math.min(c1, cell.address.col); c2 = Math.max(c2, cell.address.col);
        }

        const lines = [];
        for (let r = r1; r <= r2; r++) {
            const vals = [];
            for (let c = c1; c <= c2; c++) {
                vals.push(map.get(r + ":" + c) || "");
            }
            lines.push(vals.join("\t"));
        }
        return lines.join("\n");
    }

    function doCopy() {
        const text = extractSelection();
        clipHelper.value = text;

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).catch(() => {
                clipHelper.focus();
                clipHelper.select();
                try { document.execCommand("copy"); } catch (e) {}
            });
        } else {
            clipHelper.focus();
            clipHelper.select();
            try { document.execCommand("copy"); } catch (e) {}
        }
    }

    // ---- ref box: real selection movement via setSelection() ----

    refBox.addEventListener("keydown", (ev) => {
        if (ev.key !== "Enter") return;
        const ref = refBox.value.trim().toUpperCase();
        if (!/^[A-Z]+\d+(:[A-Z]+\d+)?$/.test(ref)) {
            statHint.textContent = "invalid ref, e.g. B2 or B2:D5";
            return;
        }
        try {
            xlsx.setSelection(ref);
            xlsx.scrollToCell(ref).catch(() => {});
            refBox.value = ref;
            // onSelectionStateChange fires from setSelection() and updates everything else
        } catch (e) {
            statHint.textContent = "setSelection() failed: " + e.message;
        }
    });

    // ---- search (Cmd/Ctrl+F) ----

    const searchInput = document.getElementById("search-input");

    function openSearch() {
        searchbar.style.display = "flex";
        searchInput.focus();
        searchInput.select();
    }
    function closeSearch() {
        searchbar.style.display = "none";
        xlsx.clearFind();
    }

    window.addEventListener("keydown", (ev) => {
        if ((ev.metaKey || ev.ctrlKey) && ev.key.toLowerCase() === "f") {
            ev.preventDefault();
            openSearch();
        } else if (ev.key === "Escape" && searchbar.style.display !== "none") {
            closeSearch();
        } else if ((ev.metaKey || ev.ctrlKey) && (ev.key === "+" || ev.key === "=")) {
            ev.preventDefault();
            xlsx.zoomIn();
        } else if ((ev.metaKey || ev.ctrlKey) && ev.key === "-") {
            ev.preventDefault();
            xlsx.zoomOut();
        } else if ((ev.metaKey || ev.ctrlKey) && ev.key.toLowerCase() === "a") {
            ev.preventDefault();
            // No public "select all" method exists; XlsxSelectionArea's
            // documented kind:'sheet' variant is the supported way to
            // express "the whole sheet" to setSelection().
            try {
                xlsx.setSelection({
                    areas: [{ kind: "sheet" }],
                    activeAreaIndex: 0,
                    activeCell: { row: 1, col: 1 },
                    extensionAnchor: { row: 1, col: 1 }
                });
            } catch (e) {
                console.error("[oxview] select-all failed:", e);
            }
        }
    });

    document.getElementById("search-close").addEventListener("click", closeSearch);

    sheetJump.addEventListener("keydown", (ev) => {
        if (ev.key !== "Enter") return;
        const name = sheetJump.value.trim();
        const idx = xlsx.sheetNames.findIndex(n => n.toLowerCase() === name.toLowerCase());
        if (idx === -1) {
            sheetJump.style.borderColor = "#e00";
            setTimeout(() => { sheetJump.style.borderColor = ""; }, 800);
            return;
        }
        xlsx.goToSheet(idx).catch(e => console.error("[oxview] goToSheet failed:", e));
        sheetJump.value = xlsx.sheetNames[idx];
    });

    searchInput.addEventListener("keydown", async (ev) => {
        if (ev.key !== "Enter") return;
        try {
            const matches = await xlsx.findText(searchInput.value);
            if (matches.length > 0) await xlsx.findNext();
        } catch (e) {
            console.error("[oxview] findText failed:", e);
        }
    });
    document.getElementById("search-next").addEventListener("click", async () => {
        try { await xlsx.findNext(); } catch (e) {}
    });
    document.getElementById("search-prev").addEventListener("click", async () => {
        try { await xlsx.findPrev(); } catch (e) {}
    });

    // ---- hyperlink hover preview (Wikipedia-style URL tooltip) ----
    // Can't use getSelectionContext() here - it only covers the current
    // selection, not an arbitrary hovered cell - so this still needs the
    // private worksheet structure. Also still can't reuse the docx trick
    // (hijacking a per-run <span>'s native title attribute) since xlsx
    // cells are canvas-rendered, not discrete DOM elements; using the
    // public getCellAt() hit-test instead. Unverified assumption carried
    // over: xlsx cells carry a `.hyperlink` field in the same {kind,
    // url|ref} shape docx/pptx runs do.

    // ---- selected-element info panel (charts/images/shapes) - draggable,
    // since a fixed corner position turned out to be an awkward, unmovable
    // spot for what's often a real chunk of text (context.text turns out
    // to be a real summary - chart type, title, categories - worth showing
    // in full rather than truncating to a snippet) ----

    let elementInfo = document.getElementById("ox-element-info");
    if (!elementInfo) {
        elementInfo = document.createElement("div");
        elementInfo.id = "ox-element-info";
        elementInfo.style.cssText =
            "position:fixed;top:100px;left:120px;z-index:996;display:none;flex-direction:column;" +
            "background:#fff;border:1px solid #ccc;border-radius:4px;" +
            "box-shadow:0 2px 8px rgba(0,0,0,0.15);width:300px;max-height:280px;" +
            "font:12px sans-serif;color:#333;overflow:hidden;";
        elementInfo.innerHTML =
            '<div id="ox-element-info-header" style="cursor:move;background:#f0f0f0;' +
            'padding:5px 8px;border-bottom:1px solid #ccc;display:flex;' +
            'align-items:center;font-weight:bold;flex:none;">' +
            '<span id="ox-element-info-title" style="flex:1 1 auto;"></span>' +
            '<span id="ox-element-info-close" style="cursor:pointer;padding:0 4px;">&times;</span>' +
            '</div>' +
            '<div id="ox-element-info-body" style="padding:8px 10px;overflow-y:auto;' +
            'white-space:pre-wrap;word-break:break-word;"></div>';
        document.body.appendChild(elementInfo);

        const header = document.getElementById("ox-element-info-header");
        let dragOffsetX = 0, dragOffsetY = 0, dragging = false;
        header.addEventListener("mousedown", (ev) => {
            dragging = true;
            const rect = elementInfo.getBoundingClientRect();
            dragOffsetX = ev.clientX - rect.left;
            dragOffsetY = ev.clientY - rect.top;
            ev.preventDefault();
        });
        window.addEventListener("mousemove", (ev) => {
            if (!dragging) return;
            elementInfo.style.left = (ev.clientX - dragOffsetX) + "px";
            elementInfo.style.top = (ev.clientY - dragOffsetY) + "px";
        });
        window.addEventListener("mouseup", () => { dragging = false; });

        document.getElementById("ox-element-info-close").addEventListener("click", hideElementInfo);
    }

    function showElementInfo(context) {
        document.getElementById("ox-element-info-title").textContent = context.elementType + " selected (read-only)";
        const lines = [];
        if (context.elementType === "chart" && context.seriesCount !== undefined) {
            lines.push(context.seriesCount + " series (data values not exposed by this API)");
        }
        if (context.mimeType) lines.push(context.mimeType);
        if (context.text) lines.push(context.text);
        document.getElementById("ox-element-info-body").textContent = lines.join("\n\n");
        elementInfo.style.display = "flex";
    }
    function hideElementInfo() {
        elementInfo.style.display = "none";
    }

    let linkTooltip = document.getElementById("ox-link-tooltip");
    if (!linkTooltip) {
        linkTooltip = document.createElement("div");
        linkTooltip.id = "ox-link-tooltip";
        linkTooltip.style.cssText =
            "position:fixed;z-index:2000;display:none;pointer-events:none;" +
            "background:#222;color:#fff;font:12px/1.4 sans-serif;padding:3px 8px;" +
            "border-radius:3px;max-width:60vw;overflow:hidden;text-overflow:ellipsis;" +
            "white-space:nowrap;box-shadow:0 2px 6px rgba(0,0,0,0.25);";
        document.body.appendChild(linkTooltip);
    }

    let lastHoverCell = null;
    container.addEventListener("mousemove", (ev) => {
        let addr;
        try {
            addr = xlsx.getCellAt(ev.clientX, ev.clientY);
        } catch (e) {
            return;
        }
        if (!addr) {
            linkTooltip.style.display = "none";
            lastHoverCell = null;
            return;
        }
        const key = addr.row + ":" + addr.col;
        if (key !== lastHoverCell) {
            lastHoverCell = key;
            const ws = xlsx.currentWorksheet;
            // Cells don't carry a .hyperlink field (that was never right -
            // confirmed against dist/types/xlsx.d.ts: no such field exists
            // on Cell). Hyperlinks live in a separate, flat
            // Worksheet.hyperlinks array of {row, col, url, location,
            // display}, matched by address.
            const link = ws && ws.hyperlinks
                ? ws.hyperlinks.find(h => h.row === addr.row && h.col === addr.col)
                : null;
            if (link) {
                const label = link.url ? link.url : "\u2192 " + (link.location || "") + " (in this workbook)";
                linkTooltip.textContent = label;
                linkTooltip.style.display = "block";
            } else {
                linkTooltip.style.display = "none";
            }
        }
        if (linkTooltip.style.display !== "none") {
            linkTooltip.style.left = (ev.clientX + 12) + "px";
            linkTooltip.style.top = (ev.clientY + 16) + "px";
        }
    });
    container.addEventListener("mouseleave", () => {
        linkTooltip.style.display = "none";
        lastHoverCell = null;
    });

    // ---- always-available debug panel, gated by ox_view_xlsx(x, debug = TRUE) ----

    const dbgOutput = document.getElementById("dbg-output");
    const debugToggleBtn = document.getElementById("btn-debug-toggle");

    const debugEnabled = new URLSearchParams(window.location.search).get("debug") === "1";
    if (debugEnabled) debugToggleBtn.style.display = "inline-block";

    debugToggleBtn.addEventListener("click", () => {
        debugPanel.style.display = debugPanel.style.display === "none" ? "block" : "none";
    });
    document.getElementById("dbg-close").addEventListener("click", () => {
        debugPanel.style.display = "none";
    });
    document.getElementById("dbg-dump").addEventListener("click", () => {
        dbgOutput.value = "top-level keys: " + Object.getOwnPropertyNames(xlsx).join(", ") + "\n\n" + safeStringify(xlsx, 2);
    });
    document.getElementById("dbg-methods").addEventListener("click", () => {
        dbgOutput.value = listMethods(xlsx, "viewer");
    });
    document.getElementById("dbg-call").addEventListener("click", () => {
        const name = document.getElementById("dbg-name").value;
        const raw = document.getElementById("dbg-arg").value;
        const arg = raw === "" ? undefined : (isNaN(Number(raw)) ? raw : Number(raw));
        try {
            const result = arg === undefined ? xlsx[name]() : xlsx[name](arg);
            if (result && typeof result.then === "function") {
                dbgOutput.value = "pending promise\u2026";
                result.then(
                    (r) => { dbgOutput.value = "resolved: " + safeStringify(r, 2); },
                    (e) => { dbgOutput.value = "rejected: " + e.message; }
                );
            } else {
                dbgOutput.value = "returned: " + safeStringify(result, 2);
            }
        } catch (e) {
            dbgOutput.value = "threw: " + e.message + "\n" + e.stack;
        }
    });
}
init().catch(console.error);
