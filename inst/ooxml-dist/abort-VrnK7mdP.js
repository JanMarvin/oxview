//#region packages/core/src/internal/abort.ts
function e(e) {
	let t = Error(e);
	return t.name = "AbortError", t;
}
function t(t, n) {
	if (t?.aborted) throw e(n);
}
//#endregion
export { t as n, e as t };
