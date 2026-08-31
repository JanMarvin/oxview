//#region packages/core/src/canvas/aux-canvas.ts
function e(e, t) {
	return [Math.max(1, Math.ceil(e)), Math.max(1, Math.ceil(t))];
}
function t(t, n) {
	let [r, i] = e(t, n);
	if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(r, i);
	if (typeof document < "u") {
		let e = document.createElement("canvas");
		return e.width = r, e.height = i, e;
	}
	return null;
}
function n(t, n, r) {
	let [i, a] = e(n, r);
	if (typeof OffscreenCanvas < "u") try {
		return new OffscreenCanvas(i, a);
	} catch {}
	if (typeof document < "u") try {
		let e = document.createElement("canvas");
		return e.width = i, e.height = a, e;
	} catch {}
	try {
		let e = t.canvas?.constructor;
		return typeof e == "function" ? new e(i, a) : null;
	} catch {
		return null;
	}
}
//#endregion
//#region packages/core/src/image/pixel-budget.ts
var r = 32767, i = 1 << 25, a = i * 4, o = class e extends RangeError {
	code = "ooxml-decoded-image-limit";
	constructor(t, n, r) {
		super(`OOXML decoded image limit exceeded: ${t} ${r} > ${n}`), this.metric = t, this.limit = n, this.observed = r, this.name = "OoxmlDecodedImageLimitError", Object.setPrototypeOf(this, e.prototype);
	}
};
function s(e) {
	return e instanceof o || !!e && typeof e == "object" && e.code === "ooxml-decoded-image-limit";
}
//#endregion
//#region packages/core/src/image/tiff-contract.ts
function c(e) {
	if (e.length < 4) return !1;
	let t = e[0] === 73 && e[1] === 73, n = e[0] === 77 && e[1] === 77;
	return !t && !n ? !1 : new DataView(e.buffer, e.byteOffset, e.byteLength).getUint16(2, t) === 42;
}
function l(e) {
	if (!c(e) || e.length < 8) return null;
	let t = e[0] === 73, n = new DataView(e.buffer, e.byteOffset, e.byteLength), r = (e, t) => Number.isSafeInteger(e) && e >= 0 && t >= 0 && e <= n.byteLength - t, i = n.getUint32(4, t);
	if (!r(i, 2)) return null;
	let a = n.getUint16(i, t);
	if (!r(i + 2, a * 12 + 4)) return null;
	let o, s;
	for (let e = 0; e < a; e++) {
		let r = i + 2 + e * 12, a = n.getUint16(r, t);
		if (a !== 256 && a !== 257) continue;
		let c = n.getUint16(r + 2, t);
		if (n.getUint32(r + 4, t) !== 1 || c !== 1 && c !== 3 && c !== 4) return null;
		let l = c === 1 ? n.getUint8(r + 8) : c === 3 ? n.getUint16(r + 8, t) : n.getUint32(r + 8, t);
		a === 256 ? o = l : s = l;
	}
	return o === void 0 || s === void 0 ? null : {
		width: o,
		height: s
	};
}
//#endregion
export { i as a, t as c, r as i, n as l, l as n, o, a as r, s, c as t };
