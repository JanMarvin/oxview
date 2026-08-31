import { a as e, c as t, o as n, t as r } from "./tiff-contract-Xjn3qXqK.js";
import { t as i } from "./renderer-module-contract-C6sYZvTV.js";
//#region packages/core/src/image/tiff.ts
var a = 1, o = 3, s = 4, c = {
	width: 256,
	height: 257,
	bitsPerSample: 258,
	compression: 259,
	photometric: 262,
	stripOffsets: 273,
	orientation: 274,
	samplesPerPixel: 277,
	rowsPerStrip: 278,
	stripByteCounts: 279,
	planarConfiguration: 284,
	inkSet: 332,
	extraSamples: 338
}, l = class {
	view;
	constructor(e, t) {
		this.bytes = e, this.littleEndian = t, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength);
	}
	contains(e, t) {
		return Number.isSafeInteger(e) && Number.isSafeInteger(t) && e >= 0 && t >= 0 && e <= this.view.byteLength - t;
	}
	u16(e) {
		return this.contains(e, 2) ? this.view.getUint16(e, this.littleEndian) : null;
	}
	u32(e) {
		return this.contains(e, 4) ? this.view.getUint32(e, this.littleEndian) : null;
	}
};
function u(e) {
	if (!r(e)) return null;
	let t = new l(e, e[0] === 73), n = t.u32(4);
	if (n == null) return null;
	let i = t.u16(n);
	if (i == null || !t.contains(n + 2, i * 12 + 4)) return null;
	let a = /* @__PURE__ */ new Map();
	for (let e = 0; e < i; e++) {
		let r = n + 2 + e * 12, i = t.u16(r), o = t.u16(r + 2), s = t.u32(r + 4);
		if (i == null || o == null || s == null || a.has(i)) return null;
		a.set(i, {
			type: o,
			count: s,
			entryOffset: r
		});
	}
	return {
		reader: t,
		fields: a
	};
}
function d(e, t, n) {
	let r = e.fields.get(t);
	if (!r || r.count < 1 || r.count > n) return null;
	let i = r.type === a ? 1 : r.type === o ? 2 : r.type === s ? 4 : 0;
	if (i === 0) return null;
	let c = r.count * i, l = c <= 4 ? r.entryOffset + 8 : e.reader.u32(r.entryOffset + 8);
	if (l == null || !e.reader.contains(l, c)) return null;
	let u = Array(r.count);
	for (let t = 0; t < r.count; t++) {
		let n = l + t * i, s = r.type === a ? e.reader.bytes[n] : r.type === o ? e.reader.u16(n) : e.reader.u32(n);
		if (s == null) return null;
		u[t] = s;
	}
	return u;
}
function f(e, t, n) {
	return e.fields.has(t) ? e.fields.get(t).count === 1 ? d(e, t, 1)?.[0] ?? null : null : n ?? null;
}
function p(e, t) {
	return Math.round((255 - e) * (255 - t) / 255);
}
function m(t) {
	let r = u(t);
	if (!r) return null;
	let i = f(r, c.width), a = f(r, c.height);
	if (i == null || a == null) return null;
	let o = i * a;
	if (i <= 0 || a <= 0 || i > 32767 || a > 32767 || o > 33554432) throw new n("image-pixels", e, o);
	let s = f(r, c.compression, 1), l = f(r, c.photometric), m = f(r, c.samplesPerPixel, 1), h = f(r, c.rowsPerStrip, 4294967295);
	if (s !== 1 || l == null || m == null || h == null || h < 1 || f(r, c.planarConfiguration, 1) !== 1 || f(r, c.orientation, 1) !== 1 || r.fields.has(c.extraSamples) || l !== 5 || m !== 4 || f(r, c.inkSet, 1) !== 1) return null;
	let g = r.fields.has(c.bitsPerSample) ? d(r, c.bitsPerSample, m) : [1];
	if (!g || g.length !== m || g.some((e) => e !== 8)) return null;
	let _ = Math.ceil(a / h), v = d(r, c.stripOffsets, _), y = d(r, c.stripByteCounts, _);
	if (!v || !y || v.length !== _ || y.length !== _) return null;
	let b = i * m;
	for (let e = 0; e < _; e++) {
		let t = e * h, n = Math.min(h, a - t) * b;
		if (y[e] < n || !r.reader.contains(v[e], n)) return null;
	}
	let x = new Uint8ClampedArray(o * 4);
	for (let e = 0; e < _; e++) {
		let n = e * h, r = Math.min(h, a - n);
		for (let a = 0; a < r; a++) {
			let r = v[e] + a * b, o = (n + a) * i * 4;
			for (let e = 0; e < i; e++, o += 4) {
				let e = t[r++], n = t[r++], i = t[r++], a = t[r++];
				x[o] = p(e, a), x[o + 1] = p(n, a), x[o + 2] = p(i, a), x[o + 3] = 255;
			}
		}
	}
	return {
		width: i,
		height: a,
		data: x
	};
}
async function h(e) {
	let n = m(e);
	if (!n) return null;
	let r = t(n.width, n.height);
	if (!r) return null;
	let i = r.getContext("2d");
	if (!i) return null;
	let a = i.createImageData(n.width, n.height);
	return a.data.set(n.data), i.putImageData(a, 0, 0), createImageBitmap(r);
}
//#endregion
//#region src/tiff.ts
var g = i({ render: h }, "tiff");
//#endregion
export { g as tiff };
