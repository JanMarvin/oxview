import { DocxScrollViewer } from "/assets/docx.mjs";

// Using the library's native `enableTextSelection: true` instead of our
// earlier hand-rolled overlay: the hand-rolled version accumulated a series
// of distinct, unrelated failures (broke on zoom, broke on page-forward,
// selection made on one page blocked rebuilds on every other page, general
// lag/staleness by page 4-5) - a pattern that pointed at the approach itself
// (polling + guessing at timing against private/undocumented internals)
// rather than any single fixable bug. The library's own text layer is built
// and kept in sync from inside its actual render/scroll/zoom lifecycle, so
// it doesn't have that class of problem.
//
// Known tradeoff, carried over from the hand-rolled version rather than
// fixed: the library's buildDocxTextLayer (which this option uses
// internally) sizes each text span to its natural content width, with no
// stretch to the next word - the same technique that caused our own
// gap-after-every-word visual bug before we patched it. That's the
// library's own minified code; we can't patch it. If it's visible here too,
// that's expected, not a regression we introduced.

async function init() {
    const container = document.getElementById("docx-scroll");
    const pageIndicator = document.getElementById("page-indicator");
    const zoomIndicator = document.getElementById("zoom-indicator");
    const loadStatus = document.getElementById("load-status");

    loadStatus.textContent = "Loading\u2026";

    let targetPage = 0;
    let suppressSyncUntil = 0;

    const viewer = new DocxScrollViewer(container, {
        enableTextSelection: true,
        onVisiblePageChange: (topIndex, total) => {
            // Fires with intermediate, mid-animation values during a smooth
            // scroll, not just the final settled position - trusting every
            // firing was overwriting our just-clicked target with a stale
            // "still on the old page" report before the animation finished.
            if (Date.now() < suppressSyncUntil) return;
            targetPage = topIndex;
            pageIndicator.textContent = "Page " + (topIndex + 1) + " / " + total;
        },
        onScaleChange: (scale) => {
            zoomIndicator.textContent = Math.round(scale * 100) + "%";
        },
        onError: (err) => console.error("[oxview] docx viewer error:", err)
    });

    const res = await fetch("./workbook.docx");
    const blob = await res.blob();
    const fileUrl = URL.createObjectURL(blob);
    await viewer.load(fileUrl);
    URL.revokeObjectURL(fileUrl);

    // See the NOTE at computeTotalWordCount() below re: what "Ready" here
    // actually confirms (viewer.load() resolved) vs. doesn't (background
    // chunk-streaming may still be in progress - no public API reports that).
    loadStatus.textContent = "Ready (background loading may continue)";
    setTimeout(() => { loadStatus.textContent = ""; }, 4000);

    pageIndicator.textContent = "Page " + (viewer.topVisiblePage + 1) + " / " + viewer.pageCount;
    zoomIndicator.textContent = Math.round(viewer.getScale() * 100) + "%";
    targetPage = viewer.topVisiblePage;

    // ---- custom hover tooltip layered on top of the native title-attribute
    // tooltip the library sets on hyperlink spans (Wikipedia-style: instant,
    // styled, follows the cursor, instead of the slow unstyled browser
    // default). We suppress the native one by blanking `title` while hovered
    // and restoring it on mouseout - a standard trick for this. ----

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

    container.addEventListener("mouseover", (ev) => {
        const el = ev.target.closest("[title]");
        if (!el || !el.title) return;
        el.dataset.oxSavedTitle = el.title;
        linkTooltip.textContent = el.title;
        linkTooltip.style.display = "block";
        el.title = "";
    }, true);
    container.addEventListener("mousemove", (ev) => {
        if (linkTooltip.style.display === "none") return;
        linkTooltip.style.left = (ev.clientX + 12) + "px";
        linkTooltip.style.top = (ev.clientY + 16) + "px";
    }, true);
    container.addEventListener("mouseout", (ev) => {
        const el = ev.target.closest("[data-ox-saved-title]");
        if (!el) return;
        el.title = el.dataset.oxSavedTitle;
        delete el.dataset.oxSavedTitle;
        linkTooltip.style.display = "none";
    }, true);

    // ---- page navigation ----

    // We track the target page ourselves rather than reading viewer.topVisiblePage
    // fresh on every click: scrollToPage(..., {behavior:'smooth'}) animates, and
    // topVisiblePage likely doesn't update until that animation settles - so
    // clicking "next" again before the previous scroll finished was recomputing
    // from a stale topVisiblePage and landing on the same page instead of
    // advancing. onVisiblePageChange (wired at construction, above) keeps this
    // in sync for manual scrolling too.

    document.getElementById("btn-prev").addEventListener("click", () => {
        targetPage = Math.max(0, targetPage - 1);
        suppressSyncUntil = Date.now() + 700;
        pageIndicator.textContent = "Page " + (targetPage + 1) + " / " + viewer.pageCount;
        viewer.scrollToPage(targetPage, { behavior: "smooth" });
    });
    document.getElementById("btn-next").addEventListener("click", () => {
        targetPage = Math.min(viewer.pageCount - 1, targetPage + 1);
        suppressSyncUntil = Date.now() + 700;
        pageIndicator.textContent = "Page " + (targetPage + 1) + " / " + viewer.pageCount;
        viewer.scrollToPage(targetPage, { behavior: "smooth" });
    });

    // ---- zoom ----

    document.getElementById("btn-zoom-in").addEventListener("click", () => viewer.zoomIn());
    document.getElementById("btn-zoom-out").addEventListener("click", () => viewer.zoomOut());
    document.getElementById("btn-fit-width").addEventListener("click", () => viewer.fitWidth());
    document.getElementById("btn-fit-page").addEventListener("click", () => viewer.fitPage());

    // ---- search (Cmd/Ctrl+F) ----

    const searchbar = document.getElementById("searchbar");
    const searchInput = document.getElementById("search-input");

    function openSearch() {
        searchbar.style.display = "flex";
        searchInput.focus();
        searchInput.select();
    }
    function closeSearch() {
        searchbar.style.display = "none";
        viewer.clearFind();
    }

    window.addEventListener("keydown", (ev) => {
        if ((ev.metaKey || ev.ctrlKey) && ev.key.toLowerCase() === "f") {
            ev.preventDefault();
            openSearch();
        } else if (ev.key === "Escape" && searchbar.style.display !== "none") {
            closeSearch();
        }
    });

    document.getElementById("search-close").addEventListener("click", closeSearch);

    searchInput.addEventListener("keydown", async (ev) => {
        if (ev.key !== "Enter") return;
        try {
            const matches = await viewer.findText(searchInput.value);
            if (matches.length > 0) await viewer.findNext();
        } catch (e) {
            console.error("[oxview] findText failed:", e);
        }
    });
    document.getElementById("search-next").addEventListener("click", async () => {
        try { await viewer.findNext(); } catch (e) {}
    });
    document.getElementById("search-prev").addEventListener("click", async () => {
        try { await viewer.findPrev(); } catch (e) {}
    });

    // ---- word count / selected-word count ----

    const wordCountEl = document.getElementById("word-count");
    const selectionCountEl = document.getElementById("selection-count");

    function countWords(text) {
        const trimmed = text.trim();
        return trimmed === "" ? 0 : trimmed.split(/\s+/).length;
    }

    // NOTE: uses the private _collectPageRuns method (same one the hand-rolled
    // overlay used) purely to count words - independent of enableTextSelection,
    // still the only way to get full-document text since there's no public
    // word-count API.
    async function computeTotalWordCount() {
        const total = viewer.pageCount;
        if (!total) return;
        wordCountEl.textContent = "Counting words\u2026";
        let words = 0;
        try {
            for (let p = 0; p < total; p++) {
                const runs = await viewer._collectPageRuns(p);
                for (const run of runs) words += countWords(run.text);
            }
            wordCountEl.textContent = "Words: " + words.toLocaleString();
        } catch (e) {
            wordCountEl.textContent = "";
            console.warn("[oxview] word count failed:", e);
        }
    }

    document.addEventListener("selectionchange", () => {
        const sel = document.getSelection();
        const text = sel ? sel.toString() : "";
        selectionCountEl.textContent = text.trim() === "" ? "" : "Selected: " + countWords(text) + " words";
    });

    computeTotalWordCount();

    // ---- always-available debug panel (toggle button, not a separate mode
    // you have to remember to launch via oxview:::.ox_debug_docx()) ----

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

    const debugPanel = document.getElementById("debugpanel");
    const dbgOutput = document.getElementById("dbg-output");
    const debugToggleBtn = document.getElementById("btn-debug-toggle");

    // debug panel only appears when ox_view_docx(x, debug = TRUE) requested it
    // (passed through as a URL query param, since templates are static files)
    const debugEnabled = new URLSearchParams(window.location.search).get("debug") === "1";
    if (debugEnabled) debugToggleBtn.style.display = "inline-block";

    debugToggleBtn.addEventListener("click", () => {
        debugPanel.style.display = debugPanel.style.display === "none" ? "block" : "none";
    });
    document.getElementById("dbg-close").addEventListener("click", () => {
        debugPanel.style.display = "none";
    });
    document.getElementById("dbg-dump").addEventListener("click", () => {
        dbgOutput.value = "top-level keys: " + Object.getOwnPropertyNames(viewer).join(", ") + "\n\n" + safeStringify(viewer, 2);
    });
    document.getElementById("dbg-methods").addEventListener("click", () => {
        dbgOutput.value = listMethods(viewer, "viewer");
    });
    document.getElementById("dbg-call").addEventListener("click", () => {
        const name = document.getElementById("dbg-name").value;
        const raw = document.getElementById("dbg-arg").value;
        const arg = raw === "" ? undefined : (isNaN(Number(raw)) ? raw : Number(raw));
        try {
            const result = arg === undefined ? viewer[name]() : viewer[name](arg);
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
