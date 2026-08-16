//#region packages/core/src/worker/renderer-module-contract.ts
var e = "ooxml-worker-renderer-module/v1", t = /* @__PURE__ */ new WeakMap();
function n(t, n) {
	if (t === "math") {
		if (!n) throw TypeError("Math worker renderer requires an engine asset URL");
		return Object.freeze({
			protocol: e,
			builtin: t,
			engineAssetUrl: n
		});
	}
	return Object.freeze({
		protocol: e,
		builtin: t
	});
}
function r(e, r, i) {
	let a = r === "math" ? n(r, i?.engineAssetUrl ?? "") : n(r);
	return t.set(e, a), e;
}
function i(e) {
	let n = e.math ? t.get(e.math) : void 0, r = e.threeD ? t.get(e.threeD) : void 0, i = e.regionMap ? t.get(e.regionMap) : void 0, a = {
		...n ? { math: n } : {},
		...r ? { threeD: r } : {},
		...i ? { regionMap: i } : {}
	};
	return Object.keys(a).length > 0 ? Object.freeze(a) : void 0;
}
//#endregion
export { i as n, r as t };
