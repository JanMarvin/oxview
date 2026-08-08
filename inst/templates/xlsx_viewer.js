        import { XlsxViewer } from "/assets/xlsx.mjs";

        function colLetters(col) {
            let n = col, s = "";
            while (n > 0) {
                const rem = (n - 1) % 26;
                s = String.fromCharCode(65 + rem) + s;
                n = Math.floor((n - 1) / 26);
            }
            return s;
        }

        function lettersToCol(letters) {
            let n = 0;
            for (const ch of letters.toUpperCase()) {
                n = n * 26 + (ch.charCodeAt(0) - 64);
            }
            return n;
        }

        function parseRef(text) {
            const m = text.trim().toUpperCase().match(/^([A-Z]+)(\d+)(?::([A-Z]+)(\d+))?$/);
            if (!m) return null;
            const c1 = lettersToCol(m[1]), r1 = parseInt(m[2], 10);
            if (m[3] && m[4]) {
                const c2 = lettersToCol(m[3]), r2 = parseInt(m[4], 10);
                return { r1: Math.min(r1, r2), r2: Math.max(r1, r2), c1: Math.min(c1, c2), c2: Math.max(c1, c2) };
            }
            return { r1: r1, r2: r1, c1: c1, c2: c1 };
        }

        function findCell(ws, row, col) {
            if (!ws) return null;
            const rowObj = ws.rows.find(r => r.index === row);
            if (!rowObj || !rowObj.cells) return null;
            return rowObj.cells.find(c => c.col === col) || null;
        }

        function cellDisplay(cell) {
            if (!cell) return { text: "", num: null, formula: null };
            const formula = cell.formula ? "=" + cell.formula : null;
            const v = cell.value;
            if (v === null || v === undefined) return { text: "", num: null, formula: formula };
            if (typeof v !== "object") return { text: String(v), num: typeof v === "number" ? v : null, formula: formula };

            if (v.type === "number" && typeof v.number === "number") {
                return { text: String(v.number), num: v.number, formula: formula };
            }
            if (v.type === "text" && "text" in v) {
                return { text: String(v.text), num: null, formula: formula };
            }
            if (v.type === "bool" && "bool" in v) {
                return { text: v.bool ? "TRUE" : "FALSE", num: null, formula: formula };
            }
            if (v.type === "error" && "error" in v) {
                return { text: String(v.error), num: null, formula: formula };
            }
            if ("text" in v) return { text: String(v.text), num: null, formula: formula };
            if ("number" in v) return { text: String(v.number), num: v.number, formula: formula };
            if ("value" in v) return { text: String(v.value), num: typeof v.value === "number" ? v.value : null, formula: formula };
            return { text: JSON.stringify(v), num: null, formula: formula };
        }

        function cellText(row, col) {
            const cell = row && row.cells ? row.cells.find(c => c.col === col) : null;
            return cellDisplay(cell).text;
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
            const btnCopy = document.getElementById("btn-copy");
            const xlsx = new XlsxViewer(container);

            const res = await fetch("./workbook.xlsx");
            const blob = await res.blob();
            const fileUrl = URL.createObjectURL(blob);

            await xlsx.load(fileUrl);
            URL.revokeObjectURL(fileUrl);

            let sel = null;
            let manualSelectionActive = false;

            function selFromController() {
                const sc = xlsx.selectionController;
                if (!sc) return null;
                return {
                    r1: Math.min(sc.anchorCell.row, sc.activeCell.row),
                    r2: Math.max(sc.anchorCell.row, sc.activeCell.row),
                    c1: Math.min(sc.anchorCell.col, sc.activeCell.col),
                    c2: Math.max(sc.anchorCell.col, sc.activeCell.col),
                    activeRow: sc.activeCell.row,
                    activeCol: sc.activeCell.col
                };
            }

            function extractSelection() {
                const ws = xlsx.currentWorksheet;
                if (!sel || !ws) return "";
                const lines = [];
                for (let r = sel.r1; r <= sel.r2; r++) {
                    const rowObj = ws.rows.find(row => row.index === r);
                    const vals = [];
                    for (let c = sel.c1; c <= sel.c2; c++) {
                        vals.push(cellText(rowObj, c));
                    }
                    lines.push(vals.join("\t"));
                }
                return lines.join("\n");
            }

            function updateBars() {
                const ws = xlsx.currentWorksheet;
                if (!sel || !ws) return;

                const isRange = sel.r1 !== sel.r2 || sel.c1 !== sel.c2;
                refBox.value = isRange
                    ? colLetters(sel.c1) + sel.r1 + ":" + colLetters(sel.c2) + sel.r2
                    : colLetters(sel.c1) + sel.r1;

                const activeRow = sel.activeRow || sel.r1;
                const activeCol = sel.activeCol || sel.c1;
                const activeCellObj = findCell(ws, activeRow, activeCol);
                const disp = cellDisplay(activeCellObj);
                formulaBox.value = disp.formula || disp.text;

                let count = 0, numCount = 0, sum = 0;
                for (let r = sel.r1; r <= sel.r2; r++) {
                    for (let c = sel.c1; c <= sel.c2; c++) {
                        const cell = findCell(ws, r, c);
                        if (!cell) continue;
                        const d = cellDisplay(cell);
                        if (d.text === "") continue;
                        count++;
                        if (d.num !== null) { numCount++; sum += d.num; }
                    }
                }
                statCount.textContent = "Count: " + count;
                statSum.textContent = numCount > 0 ? "Sum: " + (Math.round(sum * 100) / 100) : "";
                statAvg.textContent = numCount > 0 ? "Average: " + (Math.round((sum / numCount) * 100) / 100) : "";
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

            function report() {
                sel = selFromController();
                updateBars();
                doCopy();
            }

            window.addEventListener("pointerup", (ev) => {
                if (!container.contains(ev.target)) return;
                manualSelectionActive = false;
                setTimeout(report, 50);
            });
            window.addEventListener("keyup", (ev) => {
                if (manualSelectionActive) return;
                if (ev.target.tagName === "INPUT" || ev.target.tagName === "TEXTAREA") return;
                setTimeout(report, 50);
            });

            refBox.addEventListener("keydown", (ev) => {
                if (ev.key !== "Enter") return;
                const parsed = parseRef(refBox.value);
                if (!parsed) {
                    statHint.textContent = "invalid ref, e.g. B2 or B2:D5";
                    return;
                }
                statHint.textContent = "value shown, selection on canvas not moved (click a cell to resume live tracking)";
                manualSelectionActive = true;
                sel = { r1: parsed.r1, r2: parsed.r2, c1: parsed.c1, c2: parsed.c2,
                         activeRow: parsed.r1, activeCol: parsed.c1 };
                updateBars();
                refBox.value = refBox.value.toUpperCase();
                doCopy();
            });

            btnCopy.addEventListener("click", () => {
                doCopy();
                btnCopy.textContent = "Copied!";
                setTimeout(() => { btnCopy.textContent = "Copy"; }, 1500);
            });
        }
        init().catch(console.error);
