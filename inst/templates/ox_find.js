// Excel-style Find for the xlsx viewer: scope, formula search, and a
// clickable result list.
//
// The library's own findText() covers a lot of this already. Reading its
// implementation (packages/xlsx/src/find.ts plus the viewer's collector):
//
//   async find(query, opts) {
//     for (let s = 0; s < sheetCount(); s++) {
//       const cells = await collectSheetCells(s);   // every sheet, always
//       ...
//     }
//   }
//
//   async _collectSheetCells(i) {
//     const ws = await wb.getWorksheet(i);
//     for (const row of ws.rows) for (const cell of row.cells) {
//       const t = wb.cellText(ws, cell);            // rendered value only
//       if (t !== "") push({ row: cell.row, col: cell.col, text: t });
//     }
//   }
//
// So cross-sheet search is already there and works well - findNext() even
// calls goToSheet() for you. Two things Excel's dialog offers that this
// cannot express, both by reasonable design choices rather than oversight:
// the index is built from displayed text, so `Cell.formula` (which the
// parser does populate) is not searchable and a formula whose cached value
// is empty is skipped by the `t !== ""` guard; and there is no way to
// restrict a search to the active sheet, which happens to be Excel's
// default.
//
// Rather than ask upstream to widen a deliberately small find API, this
// builds its own index over the same public model - XlsxWorkbook's
// getWorksheet() and cellText() - and navigates with the equally public
// goToSheet() / scrollToCell() / setSelection(). The library's own find is
// left untouched and still owns the yellow match overlay; ours selects the
// found cell instead, which is what Excel does anyway.
//
// Cell row/col are 1-based in this model, matching the library's own A1
// formatter.

import { XlsxWorkbook } from "/assets/xlsx.mjs";

export function cellRef(row, col) {
    let name = "";
    for (let c = col; c > 0;) {
        name = String.fromCharCode(65 + (c - 1) % 26) + name;
        c = Math.floor((c - 1) / 26);
    }
    return name + row;
}

// Excel's "Look in: Formulas" searches what the formula bar shows: the
// formula text where a cell has one, the value otherwise.
function haystack(cell, lookIn) {
    if (lookIn === "formulas" && cell.formula !== undefined) return "=" + cell.formula;
    return cell.value;
}

export function searchIndex(index, query, opts) {
    const o = opts || {};
    if (!query) return [];

    const needle = o.matchCase ? query : query.toLowerCase();
    const out = [];

    for (const sheet of index) {
        if (o.within === "sheet" && sheet.index !== o.sheet) continue;

        for (const cell of sheet.cells) {
            const text = haystack(cell, o.lookIn);
            if (!text) continue;
            const hay = o.matchCase ? text : text.toLowerCase();

            const hit = o.wholeCell ? hay === needle : hay.indexOf(needle) !== -1;
            if (!hit) continue;

            out.push({
                sheet: sheet.index,
                sheetName: sheet.name,
                row: cell.row,
                col: cell.col,
                ref: cellRef(cell.row, cell.col),
                value: cell.value,
                formula: cell.formula,
                text: text
            });
            if (out.length >= (o.limit || 5000)) return out;
        }
    }
    return out;
}

async function buildIndex(wb) {
    const index = [];
    for (let i = 0; i < wb.sheetCount; i++) {
        const ws = await wb.getWorksheet(i);
        const cells = [];
        for (const row of ws.rows) {
            for (const cell of row.cells) {
                const value = wb.cellText(ws, cell);
                // Unlike the library's collector we keep formula-only cells,
                // so a formula with an empty cached value is still findable.
                if (value === "" && cell.formula === undefined) continue;
                cells.push({ row: cell.row, col: cell.col, value: value, formula: cell.formula });
            }
        }
        index.push({ index: i, name: wb.sheetNames[i], cells: cells });
    }
    return index;
}

// Nothing here touches the workbook until the first search. Viewer startup is
// the hot path - it happens every time a file is opened, while a search may
// never happen at all - so resolving the workbook eagerly (or worse, parsing
// one) would put avoidable work in front of the first paint.
//
// When a search does come, borrow the viewer's own handle if it is reachable;
// that is a private field, so fall back to parsing the retained bytes. Either
// way the cost lands on the first Ctrl/Cmd+F rather than on load.
export function makeFinder(viewer, fallbackBytes) {
    let wb = null;
    let owned = false;
    let index = null;
    let resolving = null;

    async function resolveWorkbook() {
        const borrowed = viewer.wb || viewer.workbook;
        if (borrowed && typeof borrowed.getWorksheet === "function" &&
            typeof borrowed.cellText === "function") {
            return { wb: borrowed, owned: false };
        }
        if (!fallbackBytes) return { wb: null, owned: false };
        return { wb: await XlsxWorkbook.load(await fallbackBytes()), owned: true };
    }

    async function ready() {
        if (index) return index;
        if (!resolving) {
            resolving = resolveWorkbook().then((r) => {
                wb = r.wb;
                owned = r.owned;
                return wb;
            });
        }
        await resolving;
        if (!wb) return null;
        if (!index) index = await buildIndex(wb);
        return index;
    }

    return {
        async available() {
            return (await ready()) !== null;
        },
        async find(query, opts) {
            const idx = await ready();
            return idx === null ? null : searchIndex(idx, query, opts);
        },
        // Excel selects the hit rather than highlighting every match, and
        // that is all three public calls we need.
        async goTo(match) {
            if (match.sheet !== undefined) await viewer.goToSheet(match.sheet);
            await viewer.scrollToCell(match.ref, { align: "nearest" });
            viewer.setSelection({
                areas: [{
                    kind: "cells",
                    top: match.row, left: match.col,
                    bottom: match.row, right: match.col
                }],
                activeAreaIndex: 0,
                activeCell: { row: match.row, col: match.col },
                extensionAnchor: { row: match.row, col: match.col }
            });
        },
        destroy() {
            // Only ours to destroy when we loaded it; an injected workbook
            // belongs to the caller.
            if (owned && wb && typeof wb.destroy === "function") wb.destroy();
        }
    };
}

function summarise(match, currentSheet) {
    const where = match.sheet === currentSheet ? match.ref : match.sheetName + "!" + match.ref;
    const body = match.formula !== undefined ? "=" + match.formula : match.value;
    return { where: where, body: body };
}

// Wires the finder to the search bar. The widening behaviour is the point:
// search what the user asked for, and if that finds nothing, say so and
// offer what a wider search would have found rather than a bare "no
// results".
export function initFind(finder, els, getCurrentSheet, onUnavailable) {
    const { input, results, status, allSheets, formulas, matchCase, wholeCell } = els;

    let matches = [];
    let active = -1;

    function options(over) {
        const base = {
            within: allSheets.checked ? "workbook" : "sheet",
            sheet: getCurrentSheet(),
            lookIn: formulas.checked ? "formulas" : "values",
            matchCase: matchCase.checked,
            wholeCell: wholeCell.checked
        };
        return Object.assign(base, over || {});
    }

    function render(note) {
        results.innerHTML = "";
        if (note) {
            const head = document.createElement("div");
            head.className = "find-note";
            head.textContent = note;
            results.appendChild(head);
        }
        matches.forEach((m, i) => {
            const row = document.createElement("div");
            row.className = "find-hit" + (i === active ? " active" : "");
            const s = summarise(m, getCurrentSheet());
            const where = document.createElement("span");
            where.className = "find-where";
            where.textContent = s.where;
            const body = document.createElement("span");
            body.className = "find-body";
            body.textContent = s.body;
            row.appendChild(where);
            row.appendChild(body);
            row.addEventListener("click", () => activate(i));
            results.appendChild(row);
        });
        results.style.display = (matches.length || note) ? "block" : "none";
    }

    async function activate(i) {
        if (i < 0 || i >= matches.length) return;
        active = i;
        try {
            await finder.goTo(matches[i]);
        } catch (e) {
            console.error("[oxview] find navigation failed:", e);
        }
        for (const el of results.querySelectorAll(".find-hit")) el.classList.remove("active");
        const rows = results.querySelectorAll(".find-hit");
        if (rows[i]) {
            rows[i].classList.add("active");
            rows[i].scrollIntoView({ block: "nearest" });
        }
        status.textContent = (i + 1) + " / " + matches.length;
    }

    async function run() {
        const query = input.value;
        if (!query) {
            matches = [];
            active = -1;
            status.textContent = "";
            render(null);
            return;
        }

        status.textContent = "Searching\u2026";
        const first = await finder.find(query, options());
        if (first === null) {
            // Workbook unreachable - hand back to the library's own find so
            // the box still does something useful.
            status.textContent = "";
            render(null);
            if (onUnavailable) await onUnavailable(query);
            return;
        }
        matches = first;
        active = -1;

        if (matches.length) {
            status.textContent = matches.length + " match" + (matches.length === 1 ? "" : "es");
            render(null);
            await activate(0);
            return;
        }

        // Nothing where the user looked. Try the wider searches they did not
        // ask for and report what is there, instead of a bare no-result.
        const wider = [];
        if (!allSheets.checked) wider.push({ label: "on other sheets", over: { within: "workbook" } });
        if (!formulas.checked) wider.push({ label: "in formulas", over: { lookIn: "formulas" } });
        if (!allSheets.checked && !formulas.checked) {
            wider.push({ label: "on other sheets, in formulas", over: { within: "workbook", lookIn: "formulas" } });
        }

        for (const w of wider.reverse()) {
            const found = await finder.find(query, options(w.over));
            if (found && found.length) {
                matches = found;
                status.textContent = "0 here, " + found.length + " " + w.label;
                render("Not on this sheet - " + found.length + " match" +
                       (found.length === 1 ? "" : "es") + " " + w.label + ". Click to jump.");
                return;
            }
        }

        status.textContent = "No matches";
        render("No matches anywhere in this workbook.");
    }

    function step(delta) {
        if (!matches.length) return;
        activate((active + delta + matches.length) % matches.length);
    }

    input.addEventListener("keydown", (ev) => {
        if (ev.key !== "Enter") return;
        ev.preventDefault();
        if (matches.length && !ev.shiftKey && input.dataset.lastQuery === input.value) step(1);
        else { input.dataset.lastQuery = input.value; run(); }
    });

    for (const box of [allSheets, formulas, matchCase, wholeCell]) {
        box.addEventListener("change", () => { input.dataset.lastQuery = ""; if (input.value) run(); });
    }

    return {
        next: () => step(1),
        prev: () => step(-1),
        clear: () => {
            matches = [];
            active = -1;
            status.textContent = "";
            results.innerHTML = "";
            results.style.display = "none";
        }
    };
}
