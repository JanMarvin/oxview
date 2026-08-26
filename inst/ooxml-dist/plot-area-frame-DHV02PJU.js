import { a as e, n as t, r as n, t as r } from "./units-BzZ0gAxs.js";
//#region packages/core/src/canvas/aux-canvas.ts
function i(e, t) {
	return [Math.max(1, Math.ceil(e)), Math.max(1, Math.ceil(t))];
}
function a(e, t) {
	let [n, r] = i(e, t);
	if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
	if (typeof document < "u") {
		let e = document.createElement("canvas");
		return e.width = n, e.height = r, e;
	}
	return null;
}
function o(e, t, n) {
	let [r, a] = i(t, n);
	if (typeof OffscreenCanvas < "u") try {
		return new OffscreenCanvas(r, a);
	} catch {}
	if (typeof document < "u") try {
		let e = document.createElement("canvas");
		return e.width = r, e.height = a, e;
	} catch {}
	try {
		let t = e.canvas?.constructor;
		return typeof t == "function" ? new t(r, a) : null;
	} catch {
		return null;
	}
}
//#endregion
//#region packages/core/src/image/pixel-budget.ts
var s = 32767, c = 1 << 25, l = c * 4, u = class e extends RangeError {
	code = "ooxml-decoded-image-limit";
	constructor(t, n, r) {
		super(`OOXML decoded image limit exceeded: ${t} ${r} > ${n}`), this.metric = t, this.limit = n, this.observed = r, this.name = "OoxmlDecodedImageLimitError", Object.setPrototypeOf(this, e.prototype);
	}
};
function d(e) {
	return e instanceof u || !!e && typeof e == "object" && e.code === "ooxml-decoded-image-limit";
}
//#endregion
//#region packages/core/src/image/dib.ts
var f = s, p = c;
function m(e, t, n, r, i) {
	if (n < 40 || t + 40 > e.byteLength) return null;
	let a = e.getUint32(t, !0);
	if (a < 40) return null;
	let o = e.getInt32(t + 4, !0), s = e.getInt32(t + 8, !0), c = e.getUint16(t + 14, !0);
	if (e.getUint32(t + 16, !0) !== 0) return null;
	let l = s < 0, u = Math.abs(o), d = Math.abs(s);
	if (u <= 0 || d <= 0 || u > f || d > f || u * d > p) return null;
	let m = new Uint8ClampedArray(u * d * 4), h = u * c + 31 >> 5 << 2 >>> 0;
	if (r + h * d > r + i + h && r + h * d > e.byteLength) return null;
	let g = null;
	if (c <= 8) {
		let n = e.getUint32(t + 32, !0);
		n === 0 && (n = 1 << c);
		let r = t + a;
		g = [];
		for (let t = 0; t < n; t++) {
			let n = r + t * 4;
			if (n + 4 > e.byteLength) break;
			let i = e.getUint8(n), a = e.getUint8(n + 1), o = e.getUint8(n + 2);
			g.push(o << 16 | a << 8 | i);
		}
	}
	let _ = (e, t, n, r, i, a) => {
		let o = (e * u + t) * 4;
		m[o] = n, m[o + 1] = r, m[o + 2] = i, m[o + 3] = a;
	}, v = !1;
	for (let t = 0; t < d; t++) {
		let n = l ? t : d - 1 - t, i = t, a = r + n * h;
		if (a + h > e.byteLength) break;
		if (c === 32) for (let t = 0; t < u; t++) {
			let n = a + t * 4, r = e.getUint8(n), o = e.getUint8(n + 1), s = e.getUint8(n + 2), c = e.getUint8(n + 3);
			c !== 0 && (v = !0), _(i, t, s, o, r, c);
		}
		else if (c === 24) {
			for (let t = 0; t < u; t++) {
				let n = a + t * 3;
				_(i, t, e.getUint8(n + 2), e.getUint8(n + 1), e.getUint8(n), 255);
			}
			v = !0;
		} else if (c === 8 && g) {
			for (let t = 0; t < u; t++) {
				let n = e.getUint8(a + t), r = g[n] ?? 0;
				_(i, t, r >> 16 & 255, r >> 8 & 255, r & 255, 255);
			}
			v = !0;
		} else if (c === 4 && g) {
			for (let t = 0; t < u; t++) {
				let n = e.getUint8(a + (t >> 1)), r = t & 1 ? n & 15 : n >> 4 & 15, o = g[r] ?? 0;
				_(i, t, o >> 16 & 255, o >> 8 & 255, o & 255, 255);
			}
			v = !0;
		} else if (c === 1 && g) {
			for (let t = 0; t < u; t++) {
				let n = e.getUint8(a + (t >> 3)) >> 7 - (t & 7) & 1, r = g[n] ?? 0;
				_(i, t, r >> 16 & 255, r >> 8 & 255, r & 255, 255);
			}
			v = !0;
		} else return null;
	}
	if (c === 32 && !v) for (let e = 3; e < m.length; e += 4) m[e] = 255;
	return {
		width: u,
		height: d,
		data: m
	};
}
function h(e, t, n) {
	if (n < 40 || t + 40 > e.byteLength) return null;
	let r = e.getUint32(t, !0);
	if (r < 40) return null;
	let i = e.getUint16(t + 14, !0), a = 0;
	if (i <= 8) {
		let n = e.getUint32(t + 32, !0);
		n === 0 && (n = 1 << i), a = n;
	} else a = e.getUint32(t + 32, !0);
	let o = r + a * 4, s = t + o, c = n - o;
	return c <= 0 ? null : m(e, t, o, s, c);
}
function g(e, t, n, r, i, o) {
	try {
		let s = a(t.width, t.height);
		if (!s) return !1;
		let c = s.getContext("2d");
		if (!c) return !1;
		let l = c.createImageData(t.width, t.height);
		l.data.set(t.data), c.putImageData(l, 0, 0);
		let u = Math.min(n, i), d = Math.min(r, o), f = Math.abs(i - n), p = Math.abs(o - r);
		return e.drawImage(s, u, d, f, p), !0;
	} catch {
		return !1;
	}
}
//#endregion
//#region packages/core/src/image/emf.ts
var _ = {
	HEADER: 1,
	POLYBEZIER: 2,
	POLYGON: 3,
	POLYLINE: 4,
	POLYBEZIERTO: 5,
	POLYLINETO: 6,
	POLYPOLYLINE: 7,
	POLYPOLYGON: 8,
	SETWINDOWEXTEX: 9,
	SETWINDOWORGEX: 10,
	SETVIEWPORTEXTEX: 11,
	SETVIEWPORTORGEX: 12,
	EOF: 14,
	SETMAPMODE: 17,
	SETPOLYFILLMODE: 19,
	SETBKMODE: 18,
	SETTEXTALIGN: 22,
	SETTEXTCOLOR: 24,
	MOVETOEX: 27,
	SCALEVIEWPORTEXTEX: 31,
	SCALEWINDOWEXTEX: 32,
	SAVEDC: 33,
	RESTOREDC: 34,
	SETWORLDTRANSFORM: 35,
	MODIFYWORLDTRANSFORM: 36,
	SELECTOBJECT: 37,
	CREATEPEN: 38,
	CREATEBRUSHINDIRECT: 39,
	DELETEOBJECT: 40,
	ELLIPSE: 42,
	RECTANGLE: 43,
	LINETO: 54,
	BEGINPATH: 59,
	ENDPATH: 60,
	CLOSEFIGURE: 61,
	SELECTCLIPPATH: 67,
	EXTCREATEFONTINDIRECTW: 82,
	EXTTEXTOUTW: 84,
	POLYBEZIER16: 85,
	POLYGON16: 86,
	POLYLINE16: 87,
	POLYBEZIERTO16: 88,
	POLYLINETO16: 89,
	POLYPOLYLINE16: 90,
	POLYPOLYGON16: 91,
	CREATEMONOBRUSH: 93,
	CREATEDIBPATTERNBRUSHPT: 94,
	EXTCREATEPEN: 95,
	BITBLT: 76,
	STRETCHDIBITS: 81
}, v = {
	WHITE_BRUSH: 2147483648,
	LTGRAY_BRUSH: 2147483649,
	GRAY_BRUSH: 2147483650,
	DKGRAY_BRUSH: 2147483651,
	BLACK_BRUSH: 2147483652,
	NULL_BRUSH: 2147483653,
	WHITE_PEN: 2147483654,
	BLACK_PEN: 2147483655,
	NULL_PEN: 2147483656,
	DC_BRUSH: 2147483666,
	DC_PEN: 2147483662
}, y = {
	TEXT: 1,
	LOMETRIC: 2,
	HIMETRIC: 3,
	LOENGLISH: 4,
	HIENGLISH: 5,
	TWIPS: 6,
	ISOTROPIC: 7,
	ANISOTROPIC: 8
}, b = () => ({
	m11: 1,
	m12: 0,
	m21: 0,
	m22: 1,
	dx: 0,
	dy: 0
});
function x(e, t) {
	return {
		m11: e.m11 * t.m11 + e.m21 * t.m12,
		m12: e.m12 * t.m11 + e.m22 * t.m12,
		m21: e.m11 * t.m21 + e.m21 * t.m22,
		m22: e.m12 * t.m21 + e.m22 * t.m22,
		dx: e.m11 * t.dx + e.m21 * t.dy + e.dx,
		dy: e.m12 * t.dx + e.m22 * t.dy + e.dy
	};
}
var S = class {
	p;
	constructor(e, t, n) {
		this.dv = e, this.end = n, this.p = t;
	}
	get pos() {
		return this.p;
	}
	set pos(e) {
		this.p = e;
	}
	get remaining() {
		return this.end - this.p;
	}
	i16() {
		let e = this.dv.getInt16(this.p, !0);
		return this.p += 2, e;
	}
	i32() {
		let e = this.dv.getInt32(this.p, !0);
		return this.p += 4, e;
	}
	u32() {
		let e = this.dv.getUint32(this.p, !0);
		return this.p += 4, e;
	}
	f32() {
		let e = this.dv.getFloat32(this.p, !0);
		return this.p += 4, e;
	}
	xform() {
		return {
			m11: this.f32(),
			m12: this.f32(),
			m21: this.f32(),
			m22: this.f32(),
			dx: this.f32(),
			dy: this.f32()
		};
	}
	skip(e) {
		this.p += e;
	}
};
function ee(e, t, n) {
	return e.wt.m11 * t + e.wt.m21 * n + e.wt.dx;
}
function te(e, t, n) {
	return e.wt.m12 * t + e.wt.m22 * n + e.wt.dy;
}
function ne(e) {
	return e.winExtX === 0 ? 1 : e.vpExtX / e.winExtX;
}
function C(e) {
	return e.winExtY === 0 ? 1 : e.vpExtY / e.winExtY;
}
function w(e) {
	return Math.min(Math.abs(ne(e)), Math.abs(C(e)));
}
function re(e) {
	return e.mapMode === y.ISOTROPIC ? ne(e) < 0 ? -w(e) : w(e) : ne(e);
}
function ie(e) {
	return e.mapMode === y.ISOTROPIC ? C(e) < 0 ? -w(e) : w(e) : C(e);
}
function ae(e, t) {
	return (t - e.winOrgX) * re(e) + e.vpOrgX;
}
function oe(e, t) {
	return (t - e.winOrgY) * ie(e) + e.vpOrgY;
}
function T(e, t, n) {
	let r = ae(e, ee(e, t, n)), i = oe(e, te(e, t, n));
	return [(r - e.left) * e.W / e.boundsW, (i - e.top) * e.H / e.boundsH];
}
function se(e) {
	return (Math.hypot(e.wt.m11, e.wt.m12) + Math.hypot(e.wt.m21, e.wt.m22)) / 2;
}
function ce(e) {
	return (Math.abs(re(e)) + Math.abs(ie(e))) / 2;
}
function le(e) {
	return (e.W / e.boundsW + e.H / e.boundsH) / 2;
}
function ue(e) {
	return Math.hypot(e.wt.m21, e.wt.m22);
}
function de(e) {
	return e.H / e.boundsH;
}
function E(e, t) {
	let n = t * se(e) * ce(e) * le(e);
	return Math.max(.75, n);
}
function fe(e, t) {
	if (e.mapMode = t, t === y.TEXT) {
		e.winOrgX = 0, e.winOrgY = 0, e.vpOrgX = 0, e.vpOrgY = 0, e.winExtX = 1, e.winExtY = 1, e.vpExtX = 1, e.vpExtY = 1;
		return;
	}
	if (t === y.ANISOTROPIC || t === y.ISOTROPIC || e.devPxPerMmX <= 0 || e.devPxPerMmY <= 0) return;
	let n = 25.4, r = t === y.LOMETRIC ? .1 : t === y.HIMETRIC ? .01 : t === y.LOENGLISH ? .01 * n : t === y.HIENGLISH ? .001 * n : t === y.TWIPS ? n / 1440 : 0;
	r <= 0 || (e.winOrgX = 0, e.winOrgY = 0, e.vpOrgX = 0, e.vpOrgY = 0, e.winExtX = 1, e.winExtY = 1, e.vpExtX = r * e.devPxPerMmX, e.vpExtY = -(r * e.devPxPerMmY));
}
var pe = {
	[v.WHITE_BRUSH]: {
		kind: "brush",
		fill: "#ffffff"
	},
	[v.LTGRAY_BRUSH]: {
		kind: "brush",
		fill: "#c0c0c0"
	},
	[v.GRAY_BRUSH]: {
		kind: "brush",
		fill: "#808080"
	},
	[v.DKGRAY_BRUSH]: {
		kind: "brush",
		fill: "#404040"
	},
	[v.BLACK_BRUSH]: {
		kind: "brush",
		fill: "#000000"
	},
	[v.NULL_BRUSH]: {
		kind: "brush",
		fill: null
	}
}, me = {
	[v.WHITE_PEN]: {
		kind: "pen",
		stroke: "#ffffff",
		width: 1
	},
	[v.BLACK_PEN]: {
		kind: "pen",
		stroke: "#000000",
		width: 1
	},
	[v.NULL_PEN]: {
		kind: "pen",
		stroke: null,
		width: 1
	},
	[v.DC_PEN]: {
		kind: "pen",
		stroke: "#000000",
		width: 1
	}
};
function he(e, t) {
	let n = pe[t];
	if (n) {
		e.curBrush = n;
		return;
	}
	let r = me[t];
	if (r) {
		e.curPen = r;
		return;
	}
	t === v.DC_BRUSH && (e.curBrush = e.curBrush ?? {
		kind: "brush",
		fill: "#000000"
	});
}
function ge(e) {
	let t = 0, n = 0, r = 0, i = 0;
	for (let a = 0; a < e.data.length; a += 4) e.data[a + 3] !== 0 && (t += e.data[a], n += e.data[a + 1], r += e.data[a + 2], i++);
	if (i === 0) return "#808080";
	let a = (e) => Math.round(e / i).toString(16).padStart(2, "0");
	return `#${a(t)}${a(n)}${a(r)}`;
}
var D = (e) => [e.i16(), e.i16()], O = (e) => [e.i32(), e.i32()];
function _e(e, t, n) {
	t.skip(16);
	let r = t.u32();
	if (r < 2 || r > 1048576 || !e.curPen || e.curPen.stroke == null) return;
	let { ctx: i } = e;
	i.beginPath();
	let a = 0, o = 0;
	for (let s = 0; s < r && !(t.remaining < 4); s++) {
		let [r, c] = n(t), [l, u] = T(e, r, c);
		s === 0 ? i.moveTo(l, u) : i.lineTo(l, u), a = r, o = c;
	}
	i.strokeStyle = e.curPen.stroke, i.lineWidth = E(e, e.curPen.width), i.stroke(), e.drew = !0, e.curX = a, e.curY = o;
}
function ve(e, t, n) {
	t.skip(16);
	let r = t.u32();
	if (r < 1 || r > 1048576) return;
	let { ctx: i } = e, a = e.curPen != null && e.curPen.stroke != null;
	if (a) {
		i.beginPath();
		let [t, n] = T(e, e.curX, e.curY);
		i.moveTo(t, n);
	}
	for (let o = 0; o < r && !(t.remaining < 4); o++) {
		let [r, o] = n(t);
		if (a) {
			let [t, n] = T(e, r, o);
			i.lineTo(t, n);
		}
		e.curX = r, e.curY = o;
	}
	a && e.curPen && (i.strokeStyle = e.curPen.stroke, i.lineWidth = E(e, e.curPen.width), i.stroke(), e.drew = !0);
}
function ye(e, t, n) {
	t.skip(16);
	let r = t.u32();
	if (r < 2 || r > 1048576) return;
	let { ctx: i } = e;
	e.inPath || i.beginPath();
	let a = !1;
	for (let o = 0; o < r && !(t.remaining < 4); o++) {
		let [r, o] = n(t), [s, c] = T(e, r, o);
		a ? i.lineTo(s, c) : (i.moveTo(s, c), a = !0);
	}
	a && (i.closePath(), !e.inPath && (e.curBrush && e.curBrush.fill != null && (i.fillStyle = e.curBrush.fill, i.fill(e.fillRule), e.drew = !0), e.curPen && e.curPen.stroke != null && (i.strokeStyle = e.curPen.stroke, i.lineWidth = E(e, e.curPen.width), i.stroke(), e.drew = !0)));
}
function k(e, t, n, r) {
	t.skip(16);
	let i = t.u32();
	if (i < 1 || i > 1048576) return;
	let a = [];
	for (let e = 0; e < i && !(t.remaining < 4); e++) a.push(n(t));
	if (a.length < (r ? 3 : 4)) {
		a.length && (e.curX = a[a.length - 1][0], e.curY = a[a.length - 1][1]);
		return;
	}
	let o = e.curPen != null && e.curPen.stroke != null, { ctx: s } = e;
	if (o) {
		s.beginPath();
		let t = r ? T(e, e.curX, e.curY) : T(e, a[0][0], a[0][1]);
		s.moveTo(t[0], t[1]);
	}
	let c = +!r;
	for (; c + 2 < a.length + +!!r; c += 3) {
		let t = a[c], n = a[c + 1], r = a[c + 2];
		if (!t || !n || !r) break;
		if (o) {
			let i = T(e, t[0], t[1]), a = T(e, n[0], n[1]), o = T(e, r[0], r[1]);
			s.bezierCurveTo(i[0], i[1], a[0], a[1], o[0], o[1]);
		}
		e.curX = r[0], e.curY = r[1];
	}
	o && e.curPen && (s.strokeStyle = e.curPen.stroke, s.lineWidth = E(e, e.curPen.width), s.stroke(), e.drew = !0);
}
function A(e, t, n, r) {
	t.skip(16);
	let i = t.u32(), a = t.u32();
	if (i <= 0 || i > 65536 || a <= 0 || a > 2097152) return;
	let o = [];
	for (let e = 0; e < i; e++) {
		if (t.remaining < 4) return;
		o.push(t.u32());
	}
	let { ctx: s } = e;
	e.inPath || s.beginPath();
	let c = !1;
	for (let i of o) {
		if (i < 2) {
			for (let e = 0; e < i && t.remaining >= 4; e++) n(t);
			continue;
		}
		for (let r = 0; r < i && !(t.remaining < 4); r++) {
			let [i, a] = n(t), [o, c] = T(e, i, a);
			r === 0 ? s.moveTo(o, c) : s.lineTo(o, c);
		}
		r && s.closePath(), c = !0;
	}
	!c || e.inPath || (r && e.curBrush && e.curBrush.fill != null && (s.fillStyle = e.curBrush.fill, s.fill(e.fillRule), e.drew = !0), e.curPen && e.curPen.stroke != null && (s.strokeStyle = e.curPen.stroke, s.lineWidth = E(e, e.curPen.width), s.stroke(), e.drew = !0));
}
function be(e, t, n, r, i) {
	let { ctx: a } = e, o = T(e, t, n), s = T(e, r, n), c = T(e, r, i), l = T(e, t, i);
	e.inPath || a.beginPath(), a.moveTo(o[0], o[1]), a.lineTo(s[0], s[1]), a.lineTo(c[0], c[1]), a.lineTo(l[0], l[1]), a.closePath(), !e.inPath && (e.curBrush && e.curBrush.fill != null && (a.fillStyle = e.curBrush.fill, a.fill(e.fillRule), e.drew = !0), e.curPen && e.curPen.stroke != null && (a.strokeStyle = e.curPen.stroke, a.lineWidth = E(e, e.curPen.width), a.stroke(), e.drew = !0));
}
function xe(e) {
	let t = e.u32(), n = e.u32(), r = e.i32();
	e.i32();
	let i = e.u32();
	return [t, {
		kind: "pen",
		stroke: (n & 255) == 5 ? null : P(i),
		width: Math.abs(r)
	}];
}
function Se(e) {
	let t = e.u32();
	e.skip(16);
	let n = e.u32(), r = e.u32();
	e.u32();
	let i = e.u32();
	return [t, {
		kind: "pen",
		stroke: (n & 255) == 5 ? null : P(i),
		width: Math.abs(r)
	}];
}
function Ce(e) {
	let t = e.u32(), n = e.u32(), r = e.u32();
	return e.u32(), [t, {
		kind: "brush",
		fill: n === 1 ? null : P(r)
	}];
}
function we(e, t, n) {
	let r = e.u32();
	e.u32();
	let i = e.u32(), a = e.u32(), o = e.u32(), s = e.u32(), c = "#808080";
	try {
		let e = m(t, n + i, a, n + o, s);
		e && (c = ge(e));
	} catch {}
	return [r, {
		kind: "brush",
		fill: c
	}];
}
function Te(e, t, n) {
	let r = e.u32(), i = n + 12, a = t.getInt32(i, !0), o = t.getInt32(i + 8, !0), s = t.getInt32(i + 16, !0), c = t.getUint8(i + 20), l = "";
	for (let e = 0; e < 32; e++) {
		let n = i + 28 + e * 2;
		if (n + 2 > t.byteLength) break;
		let r = t.getUint16(n, !0);
		if (r === 0) break;
		l += String.fromCharCode(r);
	}
	return [r, {
		kind: "font",
		height: Math.abs(a),
		weight: s,
		italic: c !== 0,
		face: l,
		escapement: o
	}];
}
function Ee(e, t, n, r) {
	t.skip(16), t.u32(), t.f32(), t.f32();
	let i = t.i32(), a = t.i32(), o = t.u32(), s = t.u32();
	if (t.u32(), o <= 0 || o > 65536) return;
	let c = "";
	for (let e = 0; e < o; e++) {
		let t = r + s + e * 2;
		if (t + 2 > n.byteLength) break;
		c += String.fromCharCode(n.getUint16(t, !0));
	}
	if (c.length === 0) return;
	let l = e.curFont, u = Math.abs(l?.height ?? 0) * ue(e) * Math.abs(ie(e)) * de(e);
	if (!Number.isFinite(u) || u < 1) return;
	let { ctx: d } = e, [f, p] = T(e, i, a);
	d.fillStyle = e.textColor;
	let m = l && l.weight >= 700 ? "bold " : "";
	d.font = `${l?.italic ? "italic " : ""}${m}${u}px ${l?.face || "sans-serif"}`;
	let h = e.textAlign & 6;
	d.textAlign = h === 2 ? "right" : h === 6 ? "center" : "left", d.textBaseline = (e.textAlign & 24) == 24 ? "alphabetic" : "top";
	let g = l?.escapement ?? 0;
	try {
		if (g !== 0) {
			d.save();
			try {
				d.translate(f, p), d.rotate(-g / 10 * (Math.PI / 180)), d.fillText(c, 0, 0);
			} finally {
				d.restore();
			}
		} else d.fillText(c, f, p);
		e.drew = !0;
	} catch {}
}
function De(e, t, n, r, i, a, o, s, c, l, u) {
	if (i === 0 || o === 0) return;
	let d = m(t, n + r, i, n + a, o);
	if (!d) return;
	let [f, p] = T(e, s, c), [h, _] = T(e, l, u);
	g(e.ctx, d, f, p, h, _) && (e.drew = !0);
}
function Oe(e, t, n, r) {
	t.skip(16);
	let i = t.i32(), a = t.i32(), o = t.i32(), s = t.i32();
	t.u32(), t.i32(), t.i32(), t.skip(24), t.u32(), t.u32(), De(e, n, r, t.u32(), t.u32(), t.u32(), t.u32(), i, a, i + o, a + s);
}
function ke(e, t, n, r) {
	t.skip(16);
	let i = t.i32(), a = t.i32();
	t.i32(), t.i32(), t.i32(), t.i32();
	let o = t.u32(), s = t.u32(), c = t.u32(), l = t.u32();
	t.u32(), t.u32();
	let u = t.i32(), d = t.i32();
	De(e, n, r, o, s, c, l, i, a, i + u, a + d);
}
function Ae(e, t, n, r) {
	if (!N(e) || n <= 0 || r <= 0) return !1;
	let i = new DataView(e.buffer, e.byteOffset, e.byteLength), a = {
		ctx: t,
		W: n,
		H: r,
		left: 0,
		top: 0,
		boundsW: n,
		boundsH: r,
		wt: b(),
		mapMode: y.TEXT,
		winOrgX: 0,
		winOrgY: 0,
		winExtX: 1,
		winExtY: 1,
		vpOrgX: 0,
		vpOrgY: 0,
		vpExtX: 1,
		vpExtY: 1,
		devPxPerMmX: 0,
		devPxPerMmY: 0,
		objects: /* @__PURE__ */ new Map(),
		curPen: null,
		curBrush: null,
		curFont: null,
		textColor: "#000000",
		bkMode: 1,
		textAlign: 0,
		fillRule: "nonzero",
		curX: 0,
		curY: 0,
		stack: [],
		drew: !1,
		inPath: !1
	}, o = 0;
	for (; o + 8 <= e.length;) {
		let n = i.getUint32(o, !0), r = i.getUint32(o + 4, !0);
		if (r < 8 || r & 3) break;
		let s = o + r;
		if (s > e.length || n === _.EOF) break;
		let c = new S(i, o + 8, s);
		try {
			switch (n) {
				case _.HEADER: {
					let e = i.getInt32(o + 8, !0), t = i.getInt32(o + 12, !0), n = i.getInt32(o + 16, !0), r = i.getInt32(o + 20, !0);
					if (a.left = e, a.top = t, a.boundsW = Math.max(1, n - e), a.boundsH = Math.max(1, r - t), s >= o + 88) {
						let e = i.getInt32(o + 24, !0), t = i.getInt32(o + 28, !0), n = i.getInt32(o + 32, !0), r = i.getInt32(o + 36, !0), s = i.getInt32(o + 72, !0), c = i.getInt32(o + 76, !0), l = i.getInt32(o + 80, !0), u = i.getInt32(o + 84, !0), d = n - e, f = r - t;
						if (d > 0 && f > 0 && s > 0 && c > 0 && l > 0 && u > 0) {
							let n = s / (l * 100), r = c / (u * 100);
							a.left = e * n, a.top = t * r, a.boundsW = Math.max(1, d * n), a.boundsH = Math.max(1, f * r), a.devPxPerMmX = s / l, a.devPxPerMmY = c / u;
						}
					}
					break;
				}
				case _.SETWORLDTRANSFORM:
					a.wt = c.xform();
					break;
				case _.MODIFYWORLDTRANSFORM: {
					let e = c.xform(), t = c.u32();
					t === 1 ? a.wt = b() : t === 2 ? a.wt = x(e, a.wt) : t === 3 ? a.wt = x(a.wt, e) : t === 4 && (a.wt = e);
					break;
				}
				case _.SETMAPMODE:
					fe(a, c.u32());
					break;
				case _.SETWINDOWORGEX:
					a.winOrgX = c.i32(), a.winOrgY = c.i32();
					break;
				case _.SETWINDOWEXTEX: {
					let e = c.i32(), t = c.i32();
					e !== 0 && (a.winExtX = e), t !== 0 && (a.winExtY = t);
					break;
				}
				case _.SETVIEWPORTORGEX:
					a.vpOrgX = c.i32(), a.vpOrgY = c.i32();
					break;
				case _.SETVIEWPORTEXTEX: {
					let e = c.i32(), t = c.i32();
					e !== 0 && (a.vpExtX = e), t !== 0 && (a.vpExtY = t);
					break;
				}
				case _.SCALEWINDOWEXTEX: {
					let e = c.i32(), t = c.i32(), n = c.i32(), r = c.i32();
					t !== 0 && (a.winExtX = a.winExtX * e / t), r !== 0 && (a.winExtY = a.winExtY * n / r);
					break;
				}
				case _.SCALEVIEWPORTEXTEX: {
					let e = c.i32(), t = c.i32(), n = c.i32(), r = c.i32();
					t !== 0 && (a.vpExtX = a.vpExtX * e / t), r !== 0 && (a.vpExtY = a.vpExtY * n / r);
					break;
				}
				case _.SAVEDC:
					a.ctx.save(), a.stack.push({
						wt: { ...a.wt },
						mapMode: a.mapMode,
						winOrgX: a.winOrgX,
						winOrgY: a.winOrgY,
						winExtX: a.winExtX,
						winExtY: a.winExtY,
						vpOrgX: a.vpOrgX,
						vpOrgY: a.vpOrgY,
						vpExtX: a.vpExtX,
						vpExtY: a.vpExtY,
						curPen: a.curPen,
						curBrush: a.curBrush,
						curFont: a.curFont,
						textColor: a.textColor,
						bkMode: a.bkMode,
						textAlign: a.textAlign,
						fillRule: a.fillRule,
						curX: a.curX,
						curY: a.curY
					});
					break;
				case _.RESTOREDC: {
					let e = c.i32(), t = Math.min(Math.abs(e) || 1, a.stack.length), n;
					for (let e = 0; e < t; e++) n = a.stack.pop(), a.ctx.restore();
					n && (a.wt = n.wt, a.mapMode = n.mapMode, a.winOrgX = n.winOrgX, a.winOrgY = n.winOrgY, a.winExtX = n.winExtX, a.winExtY = n.winExtY, a.vpOrgX = n.vpOrgX, a.vpOrgY = n.vpOrgY, a.vpExtX = n.vpExtX, a.vpExtY = n.vpExtY, a.curPen = n.curPen, a.curBrush = n.curBrush, a.curFont = n.curFont, a.textColor = n.textColor, a.bkMode = n.bkMode, a.textAlign = n.textAlign, a.fillRule = n.fillRule, a.curX = n.curX, a.curY = n.curY);
					break;
				}
				case _.BEGINPATH:
					a.ctx.beginPath(), a.inPath = !0;
					break;
				case _.CLOSEFIGURE:
					a.inPath && a.ctx.closePath();
					break;
				case _.ENDPATH:
					a.inPath = !1;
					break;
				case _.SELECTCLIPPATH:
					try {
						a.ctx.clip(a.fillRule);
					} catch {}
					break;
				case _.SELECTOBJECT: {
					let e = c.u32();
					if (e & 2147483648) he(a, e >>> 0);
					else {
						let t = a.objects.get(e);
						t?.kind === "pen" ? a.curPen = t : t?.kind === "brush" ? a.curBrush = t : t?.kind === "font" && (a.curFont = t);
					}
					break;
				}
				case _.DELETEOBJECT: {
					let e = c.u32(), t = a.objects.get(e);
					t && (t === a.curPen && (a.curPen = null), t === a.curBrush && (a.curBrush = null), t === a.curFont && (a.curFont = null), a.objects.delete(e));
					break;
				}
				case _.CREATEPEN: {
					let [e, t] = xe(c);
					a.objects.set(e, t);
					break;
				}
				case _.EXTCREATEPEN: {
					let [e, t] = Se(c);
					a.objects.set(e, t);
					break;
				}
				case _.CREATEBRUSHINDIRECT: {
					let [e, t] = Ce(c);
					a.objects.set(e, t);
					break;
				}
				case _.CREATEMONOBRUSH:
				case _.CREATEDIBPATTERNBRUSHPT: {
					let [e, t] = we(c, i, o);
					a.objects.set(e, t);
					break;
				}
				case _.EXTCREATEFONTINDIRECTW: {
					let [e, t] = Te(c, i, o);
					a.objects.set(e, t);
					break;
				}
				case _.POLYLINE16:
					_e(a, c, D);
					break;
				case _.POLYLINE:
					_e(a, c, O);
					break;
				case _.POLYLINETO16:
					ve(a, c, D);
					break;
				case _.POLYLINETO:
					ve(a, c, O);
					break;
				case _.POLYGON16:
					ye(a, c, D);
					break;
				case _.POLYGON:
					ye(a, c, O);
					break;
				case _.POLYBEZIER16:
					k(a, c, D, !1);
					break;
				case _.POLYBEZIER:
					k(a, c, O, !1);
					break;
				case _.POLYBEZIERTO16:
					k(a, c, D, !0);
					break;
				case _.POLYBEZIERTO:
					k(a, c, O, !0);
					break;
				case _.POLYPOLYGON16:
					A(a, c, D, !0);
					break;
				case _.POLYPOLYGON:
					A(a, c, O, !0);
					break;
				case _.POLYPOLYLINE16:
					A(a, c, D, !1);
					break;
				case _.POLYPOLYLINE:
					A(a, c, O, !1);
					break;
				case _.MOVETOEX:
					a.curX = c.i32(), a.curY = c.i32();
					break;
				case _.LINETO: {
					let e = c.i32(), n = c.i32();
					if (a.curPen && a.curPen.stroke != null) {
						let [r, i] = T(a, a.curX, a.curY), [o, s] = T(a, e, n);
						t.beginPath(), t.moveTo(r, i), t.lineTo(o, s), t.strokeStyle = a.curPen.stroke, t.lineWidth = E(a, a.curPen.width), t.stroke(), a.drew = !0;
					}
					a.curX = e, a.curY = n;
					break;
				}
				case _.RECTANGLE:
					be(a, c.i32(), c.i32(), c.i32(), c.i32());
					break;
				case _.ELLIPSE: {
					let e = c.i32(), n = c.i32(), r = c.i32(), i = c.i32(), [o, s] = [(e + r) / 2, (n + i) / 2], [l, u] = T(a, o, s), [d] = T(a, r, s), [, f] = T(a, o, i), p = Math.abs(d - l), m = Math.abs(f - u);
					t.beginPath(), t.ellipse(l, u, p, m, 0, 0, Math.PI * 2), a.curBrush && a.curBrush.fill != null && (t.fillStyle = a.curBrush.fill, t.fill(a.fillRule), a.drew = !0), a.curPen && a.curPen.stroke != null && (t.strokeStyle = a.curPen.stroke, t.lineWidth = E(a, a.curPen.width), t.stroke(), a.drew = !0);
					break;
				}
				case _.SETPOLYFILLMODE:
					a.fillRule = c.u32() === 1 ? "evenodd" : "nonzero";
					break;
				case _.SETTEXTCOLOR:
					a.textColor = P(c.u32());
					break;
				case _.SETTEXTALIGN:
					a.textAlign = c.u32();
					break;
				case _.SETBKMODE:
					a.bkMode = c.u32();
					break;
				case _.EXTTEXTOUTW:
					Ee(a, c, i, o);
					break;
				case _.BITBLT:
					Oe(a, c, i, o);
					break;
				case _.STRETCHDIBITS:
					ke(a, c, i, o);
					break;
				default: break;
			}
		} catch {}
		o = s;
	}
	return a.drew;
}
async function je(e, t, n) {
	if (!N(e) || t <= 0 || n <= 0) return null;
	let r = a(t, n);
	if (!r) return null;
	let i = r.getContext("2d");
	return !i || (i.lineJoin = "round", i.lineCap = "round", !Ae(e, i, t, n)) ? null : createImageBitmap(r);
}
//#endregion
//#region packages/core/src/image/raster-dimensions.ts
function Me(e, t) {
	return e[t] << 8 | e[t + 1];
}
function Ne(e, t) {
	return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
}
function j(e, t) {
	return e[t] | e[t + 1] << 8;
}
function Pe(e, t) {
	return e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24 | 0;
}
function Fe(e) {
	let t = e.length;
	return t >= 24 && e[0] === 137 && e[1] === 80 && e[2] === 78 && e[3] === 71 && e[4] === 13 && e[5] === 10 && e[6] === 26 && e[7] === 10 ? e[12] === 73 && e[13] === 72 && e[14] === 68 && e[15] === 82 ? {
		width: Ne(e, 16),
		height: Ne(e, 20)
	} : null : t >= 10 && e[0] === 71 && e[1] === 73 && e[2] === 70 && e[3] === 56 && (e[4] === 55 || e[4] === 57) && e[5] === 97 ? {
		width: j(e, 6),
		height: j(e, 8)
	} : t >= 26 && e[0] === 66 && e[1] === 77 ? Ie(e, 14) === 12 ? {
		width: j(e, 18),
		height: j(e, 20)
	} : {
		width: Math.abs(Pe(e, 18)),
		height: Math.abs(Pe(e, 22))
	} : t >= 16 && e[0] === 82 && e[1] === 73 && e[2] === 70 && e[3] === 70 && e[8] === 87 && e[9] === 69 && e[10] === 66 && e[11] === 80 ? Le(e) : t >= 4 && e[0] === 255 && e[1] === 216 ? Re(e) : null;
}
function Ie(e, t) {
	return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0;
}
function Le(e) {
	let t = e.length, n = e[12], r = e[13], i = e[14], a = e[15];
	if (n === 86 && r === 80 && i === 56 && a === 32) return t < 30 ? null : {
		width: j(e, 26) & 16383,
		height: j(e, 28) & 16383
	};
	if (n === 86 && r === 80 && i === 56 && a === 76) {
		if (t < 25 || e[20] !== 47) return null;
		let n = Ie(e, 21);
		return {
			width: (n & 16383) + 1,
			height: (n >>> 14 & 16383) + 1
		};
	}
	return n === 86 && r === 80 && i === 56 && a === 88 ? t < 30 ? null : {
		width: (e[24] | e[25] << 8 | e[26] << 16) + 1,
		height: (e[27] | e[28] << 8 | e[29] << 16) + 1
	} : null;
}
function Re(e) {
	let t = e.length, n = 2;
	for (; n + 1 < t;) {
		if (e[n] !== 255) {
			n += 1;
			continue;
		}
		let r = e[n + 1];
		if (r === 255) {
			n += 1;
			continue;
		}
		if (r === 216 || r === 1 || r >= 208 && r <= 215) {
			n += 2;
			continue;
		}
		if (r === 217 || n + 3 >= t) return null;
		let i = Me(e, n + 2);
		if (r >= 192 && r <= 207 && r !== 196 && r !== 200 && r !== 204) {
			if (n + 8 >= t) return null;
			let r = Me(e, n + 5);
			return {
				width: Me(e, n + 7),
				height: r
			};
		}
		if (i < 2) return null;
		n += 2 + i;
	}
	return null;
}
function ze(e) {
	let { width: t, height: n } = e;
	return !Number.isFinite(t) || !Number.isFinite(n) || t <= 0 || n <= 0 || t > 32767 || n > 32767 ? !0 : t * n > c;
}
//#endregion
//#region packages/core/src/image/image-bitmap-lifecycle.ts
function Be(e) {
	let t = e.close;
	typeof t == "function" && t.call(e);
}
//#endregion
//#region packages/core/src/image/wmf.ts
var M = {
	EOF: 0,
	SETBKMODE: 258,
	SETTEXTALIGN: 302,
	SETTEXTCOLOR: 521,
	SETPOLYFILLMODE: 262,
	SETWINDOWORG: 523,
	SETWINDOWEXT: 524,
	SELECTOBJECT: 301,
	DELETEOBJECT: 496,
	TEXTOUT: 1313,
	POLYGON: 804,
	POLYLINE: 805,
	POLYPOLYGON: 1336,
	RECTANGLE: 1051,
	CREATEPENINDIRECT: 762,
	CREATEFONTINDIRECT: 763,
	CREATEBRUSHINDIRECT: 764,
	DIBBITBLT: 2368,
	DIBSTRETCHBLT: 2881,
	STRETCHDIBITS: 3907
}, Ve = 2596720087, He = 22, Ue = 18, We = 1179469088;
function Ge(e, t) {
	if (e.length < t + Ue) return !1;
	let n = e[t] | e[t + 1] << 8, r = e[t + 2] | e[t + 3] << 8;
	return (n === 1 || n === 2) && r === 9;
}
function Ke(e) {
	return e.length < 4 ? !1 : (e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24) >>> 0 === Ve ? !0 : Ge(e, 0);
}
function N(e) {
	if (e.length < 44) return !1;
	let t = new DataView(e.buffer, e.byteOffset, e.byteLength);
	return t.getUint32(0, !0) === 1 && t.getUint32(40, !0) === We;
}
function qe(e) {
	return e === "image/wmf" || e === "image/emf";
}
function P(e) {
	let t = e & 255, n = e >>> 8 & 255, r = e >>> 16 & 255, i = (e) => e.toString(16).padStart(2, "0");
	return `#${i(t)}${i(n)}${i(r)}`;
}
function F(e, t) {
	for (let n = 0; n < e.length; n++) if (e[n] == null) {
		e[n] = t;
		return;
	}
	e.push(t);
}
var Je = class {
	p = 0;
	constructor(e, t, n) {
		this.b = e, this.end = n, this.p = t;
	}
	get remaining() {
		return this.end - this.p;
	}
	i16() {
		let e = this.u16();
		return e >= 32768 ? e - 65536 : e;
	}
	u16() {
		let e = this.b[this.p] | this.b[this.p + 1] << 8;
		return this.p += 2, e;
	}
	u8() {
		return this.b[this.p++];
	}
	u32() {
		let e = (this.b[this.p] | this.b[this.p + 1] << 8 | this.b[this.p + 2] << 16 | this.b[this.p + 3] << 24) >>> 0;
		return this.p += 4, e;
	}
	bytes(e) {
		let t = Math.min(this.p + Math.max(0, e), this.end), n = this.b.subarray(this.p, t);
		return this.p = t, n;
	}
	skip(e) {
		this.p = Math.min(this.p + Math.max(0, e), this.end);
	}
};
function I(e, t) {
	return (t - e.orgX) * (e.W / e.extX);
}
function L(e, t) {
	return (t - e.orgY) * (e.H / e.extY);
}
function Ye(e, t) {
	let n = t * Math.abs(e.W / e.extX);
	return n >= 1 ? n : 1;
}
var R = .001;
function z(e, t, n) {
	return Math.abs(e - t) <= R || Math.abs(e - n) <= R;
}
function Xe(e, t, n) {
	let r = [], i = n ? t.length : t.length - 1;
	for (let n = 0; n < i; n++) {
		let i = t[n], a = t[(n + 1) % t.length], o = Math.abs(i[0] - a[0]) <= R && z(i[0], 0, e.W) && z(a[0], 0, e.W), s = Math.abs(i[1] - a[1]) <= R && z(i[1], 0, e.H) && z(a[1], 0, e.H);
		o || s || r.push([i, a]);
	}
	return r;
}
function Ze(e, t, n) {
	if (!e.curPen || e.curPen.stroke == null || t.length < 2) return;
	let { ctx: r } = e;
	if (r.strokeStyle = e.curPen.stroke, r.lineWidth = Ye(e, e.curPen.width), !e.suppressBoundaryFrame) {
		r.beginPath(), r.moveTo(t[0][0], t[0][1]);
		for (let e = 1; e < t.length; e++) r.lineTo(t[e][0], t[e][1]);
		n && r.closePath(), r.stroke(), e.drew = !0;
		return;
	}
	let i = Xe(e, t, n);
	if (i.length === 0) return;
	r.beginPath();
	let a = null;
	for (let [e, t] of i) (!a || a[0] !== e[0] || a[1] !== e[1]) && r.moveTo(e[0], e[1]), r.lineTo(t[0], t[1]), a = t;
	r.stroke(), e.drew = !0;
}
function B(e, t, n) {
	let r = [];
	for (let i = 0; i < n && !(t.remaining < 4); i++) {
		let n = t.i16(), i = t.i16();
		r.push([I(e, n), L(e, i)]);
	}
	return r;
}
function Qe(e, t) {
	t.length < 2 || !e.curPen || e.curPen.stroke == null || Ze(e, t, !1);
}
function $e(e, t) {
	if (t.length < 2) return;
	let { ctx: n } = e;
	if (e.curBrush && e.curBrush.fill != null) {
		n.beginPath(), n.moveTo(t[0][0], t[0][1]);
		for (let e = 1; e < t.length; e++) n.lineTo(t[e][0], t[e][1]);
		n.closePath(), n.fillStyle = e.curBrush.fill, n.fill(e.fillRule), e.drew = !0;
	}
	Ze(e, t, !0);
}
function et(e, t) {
	let n = t.u16();
	if (n <= 0 || n > 65536) return;
	let r = [];
	for (let e = 0; e < n; e++) {
		if (t.remaining < 2) return;
		r.push(t.u16());
	}
	let { ctx: i } = e;
	i.beginPath();
	let a = !1;
	for (let n of r) {
		if (n < 2) {
			for (let e = 0; e < n && t.remaining >= 4; e++) t.i16(), t.i16();
			continue;
		}
		let r = B(e, t, n);
		if (!(r.length < 2)) {
			i.moveTo(r[0][0], r[0][1]);
			for (let e = 1; e < r.length; e++) i.lineTo(r[e][0], r[e][1]);
			i.closePath(), a = !0;
		}
	}
	a && (e.curBrush && e.curBrush.fill != null && (i.fillStyle = e.curBrush.fill, i.fill(e.fillRule), e.drew = !0), e.curPen && e.curPen.stroke != null && (i.strokeStyle = e.curPen.stroke, i.lineWidth = Ye(e, e.curPen.width), i.stroke(), e.drew = !0));
}
function tt(e) {
	let t = e.u16(), n = e.i16();
	e.i16();
	let r = e.u32();
	return {
		kind: "pen",
		stroke: (t & 255) == 5 ? null : P(r),
		width: Math.abs(n)
	};
}
function nt(e) {
	let t = e.u16(), n = e.u32();
	return e.u16(), {
		kind: "brush",
		fill: t === 1 ? null : P(n)
	};
}
function rt(e) {
	let t = e.indexOf(0), n = t >= 0 ? e.subarray(0, t) : e;
	if (n.length === 0) return "";
	try {
		return new TextDecoder("shift_jis").decode(n);
	} catch {
		return String.fromCharCode(...n);
	}
}
function it(e) {
	let t = Math.abs(e.i16());
	e.i16(), e.i16(), e.i16();
	let n = e.i16(), r = e.u8() !== 0;
	return e.u8(), e.u8(), e.u8(), e.u8(), e.u8(), e.u8(), e.u8(), {
		kind: "font",
		height: t,
		weight: n,
		italic: r,
		face: rt(e.bytes(Math.min(32, e.remaining)))
	};
}
function at(e, t, n, r) {
	if (t.length === 0) return;
	let i = e.curFont, a = i?.height || 12, o = Math.abs(L(e, e.orgY + a) - L(e, e.orgY));
	if (!Number.isFinite(o) || o < 1) return;
	let { ctx: s } = e;
	try {
		s.fillStyle = e.textColor;
		let a = i && i.weight >= 700 ? "bold " : "";
		s.font = `${i?.italic ? "italic " : ""}${a}${o}px ${i?.face || "sans-serif"}`;
		let c = e.textAlign & 6;
		s.textAlign = c === 2 ? "right" : c === 6 ? "center" : "left", s.textBaseline = (e.textAlign & 24) == 24 ? "alphabetic" : "top", s.fillText(t, I(e, n), L(e, r)), e.drew = !0;
	} catch {}
}
function ot(e, t, n, r, i = !1) {
	if (!Ke(e)) return !1;
	let a = 0;
	(e.length >= 4 ? (e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24) >>> 0 : 0) === Ve && (a = He);
	let o = a + Ue;
	if (o > e.length) return !1;
	let s = {
		ctx: t,
		W: n,
		H: r,
		orgX: 0,
		orgY: 0,
		extX: n || 1,
		extY: r || 1,
		haveExt: !1,
		objects: [],
		curPen: null,
		curBrush: null,
		curFont: null,
		textColor: "#000000",
		textAlign: 0,
		fillRule: "nonzero",
		drew: !1,
		suppressBoundaryFrame: i
	}, c = new DataView(e.buffer, e.byteOffset, e.byteLength);
	for (; o + 6 <= e.length;) {
		let t = c.getUint32(o, !0), n = c.getUint16(o + 4, !0);
		if (t < 3) break;
		let r = t * 2, i = o + r;
		if (i > e.length || n === M.EOF) break;
		let a = o + 6, l = new Je(e, a, i);
		switch (n) {
			case M.SETWINDOWORG:
				s.orgY = l.i16(), s.orgX = l.i16();
				break;
			case M.SETWINDOWEXT: {
				let e = l.i16(), t = l.i16();
				s.extY = e || 1, s.extX = t || 1, s.haveExt = !0;
				break;
			}
			case M.SETPOLYFILLMODE:
				s.fillRule = l.u16() === 1 ? "evenodd" : "nonzero";
				break;
			case M.SETTEXTCOLOR:
				s.textColor = P(l.u32());
				break;
			case M.SETTEXTALIGN:
				s.textAlign = l.u16();
				break;
			case M.CREATEPENINDIRECT:
				F(s.objects, tt(l));
				break;
			case M.CREATEBRUSHINDIRECT:
				F(s.objects, nt(l));
				break;
			case M.CREATEFONTINDIRECT:
				F(s.objects, it(l));
				break;
			case M.SELECTOBJECT: {
				let e = l.u16(), t = s.objects[e];
				t?.kind === "pen" ? s.curPen = t : t?.kind === "brush" ? s.curBrush = t : t?.kind === "font" && (s.curFont = t);
				break;
			}
			case M.DELETEOBJECT: {
				let e = l.u16(), t = s.objects[e];
				t && (t === s.curPen && (s.curPen = null), t === s.curBrush && (s.curBrush = null), t === s.curFont && (s.curFont = null), s.objects[e] = null);
				break;
			}
			case M.POLYLINE:
				Qe(s, B(s, l, l.i16()));
				break;
			case M.POLYGON:
				$e(s, B(s, l, l.i16()));
				break;
			case M.POLYPOLYGON:
				et(s, l);
				break;
			case M.RECTANGLE: {
				let e = l.i16(), t = l.i16(), n = l.i16(), r = l.i16();
				$e(s, [
					[I(s, r), L(s, n)],
					[I(s, t), L(s, n)],
					[I(s, t), L(s, e)],
					[I(s, r), L(s, e)]
				]);
				break;
			}
			case M.TEXTOUT: {
				let e = l.u16(), t = rt(l.bytes(e));
				e % 2 != 0 && l.skip(1);
				let n = l.i16();
				at(s, t, l.i16(), n);
				break;
			}
			case M.STRETCHDIBITS: {
				l.u32(), l.i16(), l.i16(), l.i16(), l.i16(), l.u16();
				let e = l.i16(), t = l.i16(), n = l.i16(), r = l.i16(), o = a + 22, u = h(c, o, i - o);
				if (u) {
					let i = I(s, r), a = L(s, n), o = I(s, r + t), c = L(s, n + e);
					g(s.ctx, u, i, a, o, c) && (s.drew = !0);
				}
				break;
			}
			case M.DIBSTRETCHBLT:
			case M.DIBBITBLT:
			case M.SETBKMODE: break;
			default: break;
		}
		o = i;
	}
	return s.drew;
}
var st = 2e3, ct = 2;
function lt(e, t) {
	let n = e > 0 ? e : 300, r = t > 0 ? t : 300, i = (e) => Math.max(1, Math.min(st, Math.round(e)));
	return {
		w: i(n * ct),
		h: i(r * ct)
	};
}
async function ut(e, t, n, r = !1) {
	if (!Ke(e) || t <= 0 || n <= 0) return null;
	let i = a(t, n);
	if (!i) return null;
	let o = i.getContext("2d");
	return !o || (o.lineJoin = "round", o.lineCap = "round", !ot(e, o, t, n, r)) ? null : createImageBitmap(i);
}
async function dt(e, t = {}) {
	let { widthPt: n = 0, heightPt: r = 0, suppressBoundaryFrame: i = !1 } = t, a = new Uint8Array(await e.slice(0, 64 * 1024).arrayBuffer());
	if (Ke(a)) {
		let { w: t, h: a } = lt(n, r);
		return V(await ut(new Uint8Array(await e.arrayBuffer()), t, a, i));
	}
	if (N(a)) {
		let { w: t, h: i } = lt(n, r);
		return V(await je(new Uint8Array(await e.arrayBuffer()), t, i));
	}
	let o = Fe(a);
	if (o && ze(o)) throw new u("image-pixels", c, o.width * o.height);
	return V(await createImageBitmap(e));
}
function V(e) {
	if (!e) return null;
	let t = Number(e.width), n = Number(e.height);
	if (!ze({
		width: t,
		height: n
	})) return e;
	let r = t * n;
	throw Be(e), new u("image-pixels", c, Number.isSafeInteger(r) && r >= 0 ? r : 2 ** 53 - 1);
}
//#endregion
//#region packages/core/src/image/crop.ts
function ft(e) {
	if (!e) return !0;
	if (![
		e.l,
		e.t,
		e.r,
		e.b
	].every(Number.isFinite)) return !1;
	let t = e.l, n = e.t, r = 1 - e.r, i = 1 - e.b;
	return r > t && i > n && Math.min(1, r) > Math.max(0, t) && Math.min(1, i) > Math.max(0, n);
}
function pt(e) {
	let t = e;
	return {
		w: t.naturalWidth || (typeof t.width == "number" ? t.width : 0) || 0,
		h: t.naturalHeight || (typeof t.height == "number" ? t.height : 0) || 0
	};
}
function mt(e, t) {
	if (!t || !(t.l || t.t || t.r || t.b) || ![
		t.l,
		t.t,
		t.r,
		t.b
	].every(Number.isFinite)) return null;
	let { w: n, h: r } = pt(e);
	if (n <= 0 || r <= 0) return null;
	let i = t.l, a = t.t, o = 1 - t.r, s = 1 - t.b, c = o - i, l = s - a;
	if (!(c > 0) || !(l > 0)) return {
		sx: 0,
		sy: 0,
		sw: 0,
		sh: 0,
		dxFraction: 0,
		dyFraction: 0,
		dwFraction: 0,
		dhFraction: 0
	};
	let u = Math.max(0, i), d = Math.max(0, a), f = Math.min(1, o), p = Math.min(1, s), m = Math.max(0, f - u), h = Math.max(0, p - d);
	return {
		sx: u * n,
		sy: d * r,
		sw: m * n,
		sh: h * r,
		dxFraction: (u - i) / c,
		dyFraction: (d - a) / l,
		dwFraction: m / c,
		dhFraction: h / l
	};
}
function ht(e, t, n, r, i, a, o) {
	let s = mt(t, n);
	s ? s.sw > 0 && s.sh > 0 && s.dwFraction > 0 && s.dhFraction > 0 && e.drawImage(t, s.sx, s.sy, s.sw, s.sh, r + s.dxFraction * a, i + s.dyFraction * o, s.dwFraction * a, s.dhFraction * o) : e.drawImage(t, r, i, a, o);
}
function gt(e, t, n, r) {
	if (!t || !qe(e)) return {
		widthPt: n,
		heightPt: r
	};
	if (!ft(t)) return null;
	let i = 1 - t.l - t.r, a = 1 - t.t - t.b;
	return {
		widthPt: n / i,
		heightPt: r / a
	};
}
//#endregion
//#region packages/core/src/chart/box-whisker.ts
var _t = .06;
function vt(e) {
	let t = Math.floor(e.length / 2);
	return e.length % 2 == 1 ? e[t] : e[t - 1] / 2 + e[t] / 2;
}
function yt(e) {
	let t = 0;
	for (let n of e) t = Math.max(t, Math.abs(n));
	if (t === 0) return 0;
	let n = 0;
	for (let r of e) n += r / t;
	return n / e.length * t;
}
function bt(e, t, n) {
	if (!Number.isFinite(t)) return n < 0 ? -Number.MAX_VALUE : Number.MAX_VALUE;
	let r = e + n * t;
	return Number.isFinite(r) ? r : n < 0 ? -Number.MAX_VALUE : Number.MAX_VALUE;
}
function xt(e, t) {
	let n = e.filter((e) => typeof e == "number" && Number.isFinite(e)).sort((e, t) => e - t);
	if (n.length === 0) return null;
	let r = Math.floor(n.length / 2), i = vt(n), a = t === "inclusive" && n.length % 2 == 1, o = n.slice(0, r + +!!a), s = n.slice(r + +(n.length % 2 == 1 && !a)), c = vt(o.length > 0 ? o : n), l = vt(s.length > 0 ? s : n), u = (l - c) * 1.5, d = bt(c, u, -1), f = bt(l, u, 1), p = [], m = [];
	for (let e of n) e < d || e > f ? m.push(e) : p.push(e);
	return {
		q1: c,
		median: i,
		q3: l,
		lowerFence: d,
		upperFence: f,
		whiskerLo: p[0] ?? n[0],
		whiskerHi: p[p.length - 1] ?? n[n.length - 1],
		mean: yt(n),
		outliers: m,
		inner: p
	};
}
function St(e, t) {
	let n = 0;
	for (let r of e) for (let e of r) if (n += e.length, !Number.isSafeInteger(n) || n > t) return t + 1;
	return n;
}
function Ct(e, t, n, r, i, a, o) {
	if (!Number.isFinite(e) || !Number.isFinite(t) || t <= 0 || !Number.isInteger(n) || n <= 0 || !Number.isInteger(r) || r <= 0 || !Number.isInteger(i) || i < 0 || i >= n || !Number.isInteger(a) || a < 0 || a >= r || !Number.isFinite(o) || o < 0) return null;
	let s = t / n, c = s / (r + o / 100), l = c * r, u = c * _t, d = c - u, f = e + s * (i + .5) - l / 2 + a * c + u / 2;
	return {
		boxX: f,
		boxWidth: d,
		centerX: f + d / 2
	};
}
//#endregion
//#region packages/core/src/chart/category-spacing.ts
function wt(e, t) {
	return t == null || !Number.isFinite(t) ? e : e * Math.max(0, Math.min(1e3, t)) / 100;
}
function Tt(e, t, n, r = !1) {
	let i = Math.max(0, t - 1), a = Number.isFinite(e) ? Math.max(0, Math.min(i, e)) : 0, o = n ? (a + .5) / Math.max(1, t) : t === 1 ? .5 : a / i;
	return r ? 1 - o : o;
}
function Et(e, t) {
	if (e <= 0) return [];
	let n = [], r = t ? e : e - 1;
	for (let i = 0; i <= r; i++) n.push(t ? i / e : e === 1 ? .5 : i / (e - 1));
	return n;
}
function Dt(e, t) {
	return e <= 0 ? [] : t ? Array.from({ length: e }, (t, n) => (n + .5) / e) : e <= 1 ? [] : Array.from({ length: e - 1 }, (t, n) => (n + .5) / (e - 1));
}
function Ot(e, t, n, r, i) {
	if (i == null) return {
		fraction: Tt(e, t, n, r),
		textAlign: "center"
	};
	let a = Math.max(0, t - 1), o = Number.isFinite(e) ? Math.max(0, Math.min(a, e)) : 0, s, c;
	if (t <= 1 ? (s = 0, c = 1) : n ? (s = o / t, c = (o + 1) / t) : (s = o === 0 ? 0 : (o - .5) / a, c = o === a ? 1 : (o + .5) / a), r) {
		let e = 1 - c;
		c = 1 - s, s = e;
	}
	return i === "l" ? {
		fraction: s,
		textAlign: "left"
	} : i === "r" ? {
		fraction: c,
		textAlign: "right"
	} : {
		fraction: (s + c) / 2,
		textAlign: "center"
	};
}
function kt(e, t) {
	return e != null && Number.isFinite(e) ? Math.max(0, Math.min(500, e)) : t === "legacy" ? 150 : 33;
}
//#endregion
//#region packages/core/src/chart/layout.ts
function At(e, t, n) {
	let r = Math.max(1, t), i = [], a = [], o = 0;
	for (let t = 0; t < e.length; t++) {
		let s = Math.min(r, Math.max(0, e[t])), c = a.length === 0 ? s : o + n + s;
		a.length > 0 && c > r ? (i.push(a), a = [t], o = s) : (a.push(t), o = c);
	}
	return a.length > 0 && i.push(a), i;
}
var jt = 14;
function Mt(e, t) {
	return typeof e == "number" && Number.isFinite(e) && e >= 100 && e <= 4e5 ? e / 100 * t : null;
}
function Nt(e, t, n) {
	return Mt(e.titleFontSizeHpt, n) ?? jt * n;
}
var Pt = .62;
function Ft(e, t, n, r, i) {
	if (!e.title && !e.titlePresent) return {
		fontPx: 0,
		topPad: 0,
		bottomPad: 0,
		bandH: 0
	};
	let a = Nt(e, t, n), o = a + t * r + t * i, s = Math.min(Math.max(0, o - a), a * Pt);
	return {
		fontPx: a,
		topPad: s,
		bottomPad: o - a - s,
		bandH: o
	};
}
function It(e, t, n, r, i) {
	if (!e.showLegend) return null;
	let a = e.legendPos ?? "r", o = a === "l" ? "l" : a === "t" ? "t" : a === "b" ? "b" : "r";
	if (o === "r" || o === "l") {
		if (i) {
			let e = Math.min(80, t * .3), n = t * .3, r = Math.max(0, ...i.itemWidths) + i.horizontalPadding;
			return {
				side: o,
				reserveW: Math.min(n, Math.max(e, r)),
				reserveH: 0
			};
		}
		return {
			side: o,
			reserveW: Math.max(80, t * r),
			reserveH: 0
		};
	}
	if (i) {
		let e = Math.max(1, t - i.horizontalPadding), r = At(i.itemWidths, e, i.itemGap).length * i.rowHeight + i.verticalPadding;
		return {
			side: o,
			reserveW: 0,
			reserveH: Math.min(n * .3, r)
		};
	}
	return {
		side: o,
		reserveW: 0,
		reserveH: Math.max(18, n * .08)
	};
}
function Lt(e, t = !1) {
	return t ? {
		legRightW: 0,
		legLeftW: 0,
		legTopH: 0,
		legBottomH: 0
	} : {
		legRightW: e?.side === "r" ? e.reserveW : 0,
		legLeftW: e?.side === "l" ? e.reserveW : 0,
		legTopH: e?.side === "t" ? e.reserveH : 0,
		legBottomH: e?.side === "b" ? e.reserveH : 0
	};
}
function Rt(e, t) {
	return Mt(e, t) ?? 10 * t;
}
function zt(e, t) {
	return Math.max(0, e != null && Number.isFinite(e) ? e : 0) / n * t;
}
function Bt(e, t, n) {
	let r = 0, i = !1;
	if (n != null) switch (i = !0, n) {
		case "horz": break;
		case "vert270":
			r -= 90;
			break;
		case "vert":
		case "wordArtVert":
		case "eaVert":
		case "mongolianVert":
		case "wordArtVertRtl":
			r += 90;
			break;
	}
	return t != null && Number.isFinite(t) && (r += t / 6e4, i = !0), i ? r * Math.PI / 180 : e === "left" || e === "right" ? -Math.PI / 2 : 0;
}
function Vt(e) {
	return Math.max(8, e * .02);
}
function Ht(e, t, n, r) {
	let i = Rt(e.catAxisTitleFontSizeHpt, r), a = Rt(e.valAxisTitleFontSizeHpt, r), o = zt(e.catAxisTitleTextVerticalInsetEmu, r), s = zt(e.valAxisTitleTextVerticalInsetEmu, r);
	return {
		catFontPx: i,
		valFontPx: a,
		catBandH: e.catAxisTitle ? i + o + Vt(n) + 4 : 0,
		valBandW: e.valAxisTitle ? a + s + Vt(t) + 4 : 0
	};
}
var Ut = 2.25, Wt = 2.75;
function Gt(e, t, n) {
	if (!e.title && !e.titlePresent) return {
		fontPx: 0,
		topPad: 0,
		bottomPad: 0,
		bandH: 0
	};
	let r = Nt(e, t, n), i = r * Ut, a = Math.min(Math.max(0, i - r), r * Pt);
	return {
		fontPx: r,
		topPad: a,
		bottomPad: i - r - a,
		bandH: i
	};
}
function Kt(e, t) {
	let n = qt(e), r = wt(n, t);
	return e * Wt + r - n;
}
function qt(e) {
	return 5 / 6 * e;
}
function Jt(e) {
	return e;
}
var Yt = 1.5;
function Xt(e) {
	let t = e.outerTextMarginPx ?? 0;
	return {
		t: e.valAxisHidden ? 0 : e.valLabelFontPx / 2 + t,
		r: (e.secondaryBandW ?? 0) > 0 ? (e.secondaryBandW ?? 0) + t : 0,
		b: e.catAxisHidden ? 0 : e.catLabelFontPx + (e.catLabelGapPx ?? qt(e.catLabelFontPx)) + e.catTitleBandH + t,
		l: e.valAxisHidden ? 0 : e.valLabelWidth + (e.valLabelGapPx ?? Jt(e.valLabelFontPx)) + e.valTitleBandW + t
	};
}
function Zt(e, t, n) {
	let r = e.xMode || "factor", i = e.yMode || "factor", a = e.wMode || "factor", o = e.hMode || "factor", s = r === "edge" ? t.x + e.x * t.w : n.x + e.x * t.w, c = i === "edge" ? t.y + e.y * t.h : n.y + e.y * t.h, l = e.w == null ? n.w : a === "edge" ? t.x + e.w * t.w - s : e.w * t.w, u = e.h == null ? n.h : o === "edge" ? t.y + e.h * t.h - c : e.h * t.h;
	return ![
		s,
		c,
		l,
		u
	].every(Number.isFinite) || l <= 0 || u <= 0 ? null : {
		x: s,
		y: c,
		w: l,
		h: u
	};
}
function Qt(e, t, n, r, i, a, o) {
	let s = o.titleBand ?? Ft(e, i, a, o.titleTopPadFrac ?? 0, o.titleBottomPadFrac ?? 0), c = o.legendReserve === void 0 ? It(e, r, i, o.legendSideReserveFrac) : o.legendReserve, l = Lt(c, e.legendOverlay === !0), u = Ht(e, r, i, a), d, f, p, m;
	if (o.radialGapFrac != null) {
		let e = i * o.radialGapFrac;
		p = r - l.legRightW - l.legLeftW, m = i - s.bandH - l.legTopH - l.legBottomH - e, d = t + l.legLeftW, f = n + s.bandH + l.legTopH + e;
	} else {
		let e = o.pad;
		if (!e) throw Error("computeChartFrame: cartesian frame requires params.pad");
		d = t + e.l, f = n + e.t, p = r - e.l - e.r, m = i - e.t - e.b;
	}
	let h = o.honorPlotAreaManualLayout ? e.plotAreaManualLayout : null;
	if (h) {
		let e = h.layoutTarget === "inner" ? {
			t: 0,
			r: 0,
			b: 0,
			l: 0
		} : o.manualOuterInsets ?? {
			t: 0,
			r: 0,
			b: 0,
			l: 0
		}, a = h.layoutTarget === "inner" ? {
			x: d,
			y: f,
			w: p,
			h: m
		} : {
			x: d - e.l,
			y: f - e.t,
			w: p + e.l + e.r,
			h: m + e.t + e.b
		}, s = Zt(h, {
			x: t,
			y: n,
			w: r,
			h: i
		}, a);
		s && s.w > e.l + e.r && s.h > e.t + e.b && (d = s.x + e.l, f = s.y + e.t, p = s.w - e.l - e.r, m = s.h - e.t - e.b);
	}
	return {
		title: s,
		legend: c,
		legendBands: l,
		axisTitles: u,
		plotRect: {
			px0: d,
			py0: f,
			pw: p,
			ph: m
		},
		center: {
			cx: d + p / 2,
			cy: f + m / 2
		}
	};
}
//#endregion
//#region packages/core/src/chart/data-label-layout.ts
var $t = (e) => [
	e.x,
	e.y,
	e.w,
	e.h
].every(Number.isFinite) && e.w > 0 && e.h > 0;
function en(e, t) {
	let n = Math.max(e.x, t.x), r = Math.max(e.y, t.y), i = Math.min(e.x + e.w, t.x + t.w), a = Math.min(e.y + e.h, t.y + t.h);
	return i > n && a > r ? {
		x: n,
		y: r,
		w: i - n,
		h: a - r
	} : null;
}
function tn(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
function nn(e, t, n, r, i, a = t) {
	if (!$t(t) || !$t(a) || !Number.isFinite(r) || r <= 0 || ![n.w, n.h].every(Number.isFinite) || n.w < 0 || n.h <= 0) return null;
	let o = r * .5, s = t, c, l, u = !1, d = "center", f = "middle";
	if (e.kind === "point") {
		if (![
			e.x,
			e.y,
			e.markerGap ?? 0
		].every(Number.isFinite)) return null;
		let t = o + Math.max(0, e.markerGap ?? 0);
		switch (c = e.x, l = e.y, e.position ?? "r") {
			case "l":
				c -= t + n.w / 2, d = "right";
				break;
			case "t":
				l -= t + n.h / 2, f = "bottom";
				break;
			case "b":
				l += t + n.h / 2, f = "top";
				break;
			case "ctr":
			case "inEnd":
			case "bestFit": break;
			default:
				c += t + n.w / 2, d = "left";
				break;
		}
	} else if (e.kind === "box") {
		if (![
			e.rect.x,
			e.rect.y,
			e.rect.w,
			e.rect.h
		].every(Number.isFinite) || e.rect.w <= 0 || e.rect.h <= 0) return null;
		let r = en(e.rect, t);
		if (!r) return null;
		let i = e.position ?? "ctr";
		c = r.x + r.w / 2, l = r.y + r.h / 2, i === "inBase" ? (s = {
			x: r.x + o,
			y: r.y + o,
			w: r.w - o,
			h: r.h - o
		}, c = s.x + n.w / 2, l = s.y + n.h / 2, d = "left", f = "top") : i === "inEnd" ? (s = {
			x: r.x + o,
			y: r.y,
			w: r.w - o,
			h: r.h - o
		}, c = s.x + n.w / 2, l = s.y + s.h - n.h / 2, d = "left", f = "bottom") : i === "l" ? (s = {
			x: r.x + o,
			y: r.y + o,
			w: r.w - o,
			h: r.h - o * 2
		}, c = s.x + n.w / 2, d = "left") : i === "r" || i === "outEnd" ? (s = {
			x: r.x,
			y: r.y + o,
			w: r.w - o,
			h: r.h - o * 2
		}, c = s.x + s.w - n.w / 2, d = "right") : i === "t" ? (s = {
			x: r.x + o,
			y: r.y + o,
			w: r.w - o * 2,
			h: r.h - o
		}, l = s.y + n.h / 2, f = "top") : i === "b" ? (s = {
			x: r.x + o,
			y: r.y,
			w: r.w - o * 2,
			h: r.h - o
		}, l = s.y + s.h - n.h / 2, f = "bottom") : s = {
			x: r.x + o,
			y: r.y + o,
			w: r.w - o * 2,
			h: r.h - o * 2
		};
	} else {
		if (![
			e.rect.x,
			e.rect.y,
			e.rect.w,
			e.rect.h
		].every(Number.isFinite) || e.rect.w < 0 || e.rect.h < 0) return null;
		let r = e.position ?? "outEnd", i = r === "inBase" || r === "inEnd" || r === "ctr";
		if (u = !i, i) {
			let n = en(e.rect, t);
			if (!n) return null;
			s = n;
		} else if (e.orientation === "vertical" && e.rect.w <= 0 || e.orientation === "horizontal" && e.rect.h <= 0) return null;
		let a = e.rect.x + e.rect.w / 2, p = e.rect.y + e.rect.h / 2;
		if (c = a, l = p, e.orientation === "vertical") {
			let t = e.negative ? e.rect.y + e.rect.h : e.rect.y, i = e.negative ? e.rect.y : e.rect.y + e.rect.h;
			r === "inBase" ? (l = i + (e.negative ? 1 : -1) * (o + n.h / 2), f = e.negative ? "top" : "bottom") : r === "inEnd" ? (l = t + (e.negative ? -1 : 1) * (o + n.h / 2), f = e.negative ? "bottom" : "top") : r !== "ctr" && (l = t + (e.negative ? 1 : -1) * (o + n.h / 2), f = e.negative ? "top" : "bottom");
		} else {
			let t = e.negative ? e.rect.x : e.rect.x + e.rect.w, i = e.negative ? e.rect.x + e.rect.w : e.rect.x;
			r === "inBase" ? (c = i + (e.negative ? -1 : 1) * (o + n.w / 2), d = e.negative ? "right" : "left") : r === "inEnd" ? (c = t + (e.negative ? 1 : -1) * (o + n.w / 2), d = e.negative ? "left" : "right") : r !== "ctr" && (c = t + (e.negative ? -1 : 1) * (o + n.w / 2), d = e.negative ? "right" : "left");
		}
	}
	let p = Math.max(2, r * .5), m = Math.max(2, r * .9);
	if (s.w < p || s.h < m) return null;
	let h = {
		x: c - Math.min(n.w, s.w) / 2,
		y: l - Math.min(n.h, s.h) / 2,
		w: Math.min(n.w, s.w),
		h: Math.min(n.h, s.h)
	};
	if (i) {
		let e = Zt(i, a, h);
		if (!e) return null;
		h = e, d = "center", f = "middle";
		let n = en(e, t);
		if (!n || (s = n, s.w < p || s.h < m)) return null;
	}
	let g = Math.min(Math.max(p, h.w), s.w), _ = Math.min(Math.max(m, h.h), s.h), v = g / 2, y = _ / 2, b = u || i ? h.x + h.w / 2 : tn(h.x + h.w / 2, s.x + v, s.x + s.w - v), x = u || i ? h.y + h.h / 2 : tn(h.y + h.h / 2, s.y + y, s.y + s.h - y);
	return [b, x].every(Number.isFinite) ? {
		x: d === "left" ? b - v : d === "right" ? b + v : b,
		y: f === "top" ? x - y : f === "bottom" ? x + y : x,
		textAlign: d,
		textBaseline: f,
		maxWidth: s.w,
		maxHeight: s.h,
		clip: s,
		rect: h
	} : null;
}
var rn = 4096, an = 4;
function on(e, t, n) {
	if (n(e) <= t) return e;
	if (n("…") > t) return "";
	let r = 0, i = Array.from(e), a = i.length;
	for (; r < a;) {
		let e = Math.ceil((r + a) / 2);
		n(`${i.slice(0, e).join("")}…`) <= t ? r = e : a = e - 1;
	}
	return `${i.slice(0, r).join("")}…`;
}
function sn(e) {
	let t = "", n = 0;
	for (let r of e) {
		if (n >= rn) return {
			value: t,
			truncated: !0
		};
		t += r, n++;
	}
	return {
		value: t,
		truncated: !1
	};
}
function cn(e, t, n, r, i) {
	if (![
		t,
		n,
		r
	].every(Number.isFinite) || t <= 0 || n < r || r <= 0) return [];
	let a = Math.max(1, Math.min(an, Math.floor(n / r))), o = sn(e), s = o.value.split(/\r?\n/), c = [], l = o.truncated, u = (e) => {
		let n = [], r = "";
		for (let a of Array.from(e)) {
			let e = `${r}${a}`;
			r && i(e) > t ? (n.push(r), r = a) : r = e;
		}
		return r && n.push(r), n.filter((e) => i(e) <= t);
	};
	for (let e of s) {
		if (i(e) <= t) {
			c.push(e);
			continue;
		}
		let n = e.match(/\S+\s*|\s+/g) ?? [];
		if (n.length <= 1) c.push(...u(e));
		else {
			let e = "";
			for (let r of n) {
				let n = `${e}${r}`;
				if (i(n) <= t) e = n;
				else {
					e && c.push(e);
					let t = u(r);
					e = t.pop() ?? "", c.push(...t);
				}
			}
			e && c.push(e);
		}
	}
	l ||= c.length > a;
	let d = c.slice(0, a);
	return l && d.length > 0 && !d[d.length - 1].endsWith("…") && (d[d.length - 1] = on(`${d[d.length - 1]}…`, t, i)), d;
}
//#endregion
//#region packages/core/src/chart/data-label-style.ts
function ln(e, t) {
	return (t?.deleted ?? e?.deleted) === !0;
}
function un(e, t) {
	let n = e?.fontPaintAuthored === !0 || e?.fontColor != null || e?.fontHidden === !0, r = t?.fontPaintAuthored === !0 || t?.fontColor != null || t?.fontHidden === !0;
	return {
		fontColor: n ? e.fontColor : e?.fontColor ?? t?.fontColor,
		fontItalic: e?.fontItalic ?? t?.fontItalic,
		fontLanguage: e?.fontLanguage ?? t?.fontLanguage,
		fontBaseline: e?.fontBaseline ?? t?.fontBaseline,
		fontPaintAuthored: n ? !0 : r || void 0,
		fontHidden: n ? e.fontHidden : t?.fontHidden,
		textRotation: e?.textRotation ?? t?.textRotation,
		textWrap: e?.textWrap ?? t?.textWrap,
		textVerticalAnchor: e?.textVerticalAnchor ?? t?.textVerticalAnchor,
		textVerticalMode: e?.textVerticalMode ?? t?.textVerticalMode,
		textLInsEmu: e?.textLInsEmu ?? t?.textLInsEmu,
		textTInsEmu: e?.textTInsEmu ?? t?.textTInsEmu,
		textRInsEmu: e?.textRInsEmu ?? t?.textRInsEmu,
		textBInsEmu: e?.textBInsEmu ?? t?.textBInsEmu,
		textBodyAuthored: e?.textBodyAuthored === !0 || t?.textBodyAuthored === !0 || void 0,
		textAlign: e?.textAlign ?? t?.textAlign
	};
}
function dn(e, t) {
	return e?.textAlign === "l" ? "left" : e?.textAlign === "r" ? "right" : e?.textAlign === "ctr" ? "center" : t;
}
function fn(e, i) {
	let a = i / n, o = e?.textBodyAuthored === !0 ? r : 0, s = e?.textBodyAuthored === !0 ? t : 0;
	return {
		left: (e?.textLInsEmu ?? o) * a,
		top: (e?.textTInsEmu ?? s) * a,
		right: (e?.textRInsEmu ?? o) * a,
		bottom: (e?.textBInsEmu ?? s) * a
	};
}
function pn(e, t) {
	let n = Number.isFinite(e) ? e / 6e4 * Math.PI / 180 : 0;
	return t === "vert" ? n + Math.PI / 2 : t === "vert270" ? n + Math.PI * 3 / 2 : n;
}
function mn(e, t, n, r) {
	let i = pn(n, r);
	if (i === 0) return {
		w: e,
		h: t,
		radians: i
	};
	let a = Math.abs(Math.cos(i)), o = Math.abs(Math.sin(i));
	return {
		w: e * a + t * o,
		h: e * o + t * a,
		radians: i
	};
}
function hn(e, t, n, r, i, a, o) {
	return r !== 0 && (e.translate(t, n), e.rotate(r), e.translate(-t, -n)), {
		x: t + (i === "left" ? o.left : i === "right" ? -o.right : (o.left - o.right) / 2),
		y: n + (a === "top" ? o.top : a === "bottom" ? -o.bottom : (o.top - o.bottom) / 2)
	};
}
function gn(e, t, n, r, i, a) {
	return a?.textWrap === "none" ? ![
		t,
		n,
		r
	].every(Number.isFinite) || t <= 0 || n <= 0 || r <= 0 ? [] : sn(e).value.split(/\r?\n/) : cn(e, t, n, r, i);
}
function _n(e, t, n, r, i, a, o = "center", s = "center", c = n.w, l = 0) {
	if (!a) {
		let n = Math.max(0, c) / 2, r = (e) => e === "left" ? -n : e === "right" ? n : 0, i = r(o) - r(s);
		return {
			x: e + Math.cos(l) * i,
			y: t + Math.sin(l) * i
		};
	}
	let u = o === "left" ? n.x : o === "right" ? n.x + n.w : n.x + n.w / 2, d = i?.textVerticalAnchor ?? (i?.textBodyAuthored === !0 ? "t" : "ctr");
	return d === "t" ? {
		x: u,
		y: n.y + Math.min(r, n.h) / 2
	} : d === "b" ? {
		x: u,
		y: n.y + n.h - Math.min(r, n.h) / 2
	} : {
		x: u,
		y: n.y + n.h / 2
	};
}
//#endregion
//#region packages/core/src/chart/marker-style.ts
function vn(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e.legendEntries ?? []) n.deleted === !0 && t.add(n.idx);
	return t;
}
function yn(e) {
	return e.markerSymbol != null || e.markerSize != null || e.markerFill != null || e.markerFillPaint !== void 0 || e.markerFillPaintAuthored === !0 || e.markerLine != null || e.markerLineWidthEmu != null;
}
function bn(e) {
	return e != null && (e.markerSymbol != null || e.markerSize != null || e.markerFill != null || e.color != null || e.markerFillPaint !== void 0 || e.markerFillPaintAuthored === !0 || e.markerLine != null || e.markerLineWidthEmu != null);
}
function xn(e, t) {
	return t == null || !Number.isFinite(t) || t === 0 || t < 0 && e.showNegativeBubbles !== !0 ? null : Math.abs(t);
}
function Sn(e, t) {
	return e.bubble3D ?? e.bubble3DGroupDefault ?? !1;
}
function H(e) {
	return e !== "none" && e !== "x" && e !== "plus";
}
function Cn(e, t, n, r, i, a) {
	let o = a?.chartType ?? e.chartType, s = t.values[r] != null;
	if (!s && (n === "line" || n === "stackedLine" || n === "stackedLinePct") && (s = (o === "line" || o === "stackedLine" || o === "stackedLinePct") && (o !== "line" || e.dispBlanksAs === "zero")), !s) return !1;
	if (n === "scatter" && i) {
		let n = (t.categories ?? e.categories)[r];
		if (n == null || !Number.isFinite(Number.parseFloat(n))) return !1;
	}
	if (n === "scatter" && o === "bubble") {
		let n = t.bubbleSizes?.[r];
		if (n == null || !Number.isFinite(n) || n === 0) return !1;
		let i = a?.showNegativeBubbles ?? e.showNegativeBubbles;
		return n < 0 && i !== !0 ? !1 : (a?.bubbleScale ?? e.bubbleScale ?? 100) > 0;
	}
	return !0;
}
function wn(e, t, n, r, i, a) {
	if (n === "radar" || !t.seriesDataLabels && !t.dataLabelOverrides?.length) return 0;
	let o = new Map((t.dataLabelOverrides ?? []).map((e) => [e.idx, e])), s = 0;
	for (let c = 0; c < r; c++) {
		let r = o.get(c);
		ln(t.seriesDataLabels, r) || (r?.showLegendKey ?? t.seriesDataLabels?.showLegendKey ?? !1) === !0 && Cn(e, t, n, c, i, a) && s++;
	}
	return s;
}
function Tn(e) {
	return e === "line" || e === "stackedLine" || e === "stackedLinePct" || e === "area" || e === "stackedArea" || e === "stackedAreaPct" || e === "stock" || e === "clusteredBar" || e === "clusteredBarH" || e === "stackedBar" || e === "stackedBarH" || e === "stackedBarPct" || e === "stackedBarHPct";
}
function En(e) {
	return e.dataPointOverrides?.some((e) => e.markerSymbol != null && e.markerSymbol !== "none") === !0;
}
function Dn(e, t, n, r) {
	return e === "radar" ? r === "filled" : e === "scatter" && t !== "bubble" && (n === "lineNoMarker" || n === "smoothNoMarker");
}
function On(e, t, n, r) {
	let i = n.seriesType ?? e;
	return !(i === "line" || i === "stackedLine" || i === "stackedLinePct" || i === "stock" || i === "radar") && i !== "scatter" && i !== "bubble" || i === "radar" && r === "filled" || i === "scatter" && (t === "lineNoMarker" || t === "smoothNoMarker") ? !1 : (n.markerSymbol ?? (i === "stock" ? "none" : "circle")) !== "none" && n.showMarker !== !1;
}
function kn(e, t, n, r) {
	return t?.markerSymbol == null ? !r || e.markerSymbol === "none" ? "none" : e.markerSymbol ?? n : t.markerSymbol;
}
function An(e, t, n) {
	if (t?.markerFillPaint !== void 0) return t.markerFillPaint;
	if (!(t?.markerFill != null || t?.color != null || t?.markerFillPaintAuthored === !0) && e.dataPointColors?.[n] == null && e.markerFillPaint !== void 0) return e.markerFillPaint;
}
function jn(e, t, n, r) {
	return t?.markerFill == null ? t?.color == null ? e.dataPointColors?.[n] ?? (t?.markerFillPaintAuthored === !0 ? "00000000" : e.markerFill == null ? e.markerFillPaintAuthored === !0 ? "00000000" : r : e.markerFill) : t.color : t.markerFill;
}
function Mn(e) {
	return e.markerFillPaint;
}
function Nn(e, t) {
	return e.markerFill == null ? e.markerFillPaintAuthored === !0 ? "00000000" : t : e.markerFill;
}
function Pn(e) {
	return e?.fillType === "gradient" ? e.stops.length : e == null ? 0 : 1;
}
//#endregion
//#region packages/core/src/chart/resource-limits.ts
var U = 1e4, Fn = 4096, In = 1048576, Ln = 4096, Rn = new Set([
	"clusteredBar",
	"clusteredBarH",
	"stackedBar",
	"stackedBarH",
	"stackedBarPct",
	"stackedBarHPct",
	"clusteredColumn",
	"line",
	"stackedLine",
	"stackedLinePct",
	"area",
	"stackedArea",
	"stackedAreaPct",
	"pie",
	"doughnut",
	"radar",
	"scatter",
	"bubble",
	"stock",
	"surface"
]);
function zn(e) {
	return Rn.has(e);
}
function Bn(e) {
	let t = 0, n = (e) => !Number.isSafeInteger(e) || e < 0 || e > 1e4 - t ? !1 : (t += e, !0), r = (e, n) => !Number.isSafeInteger(e) || e < 0 || !Number.isSafeInteger(n) || n < 0 || e !== 0 && n > Math.floor((1e4 - t) / e) ? !1 : (t += e * n, !0);
	if (!n(e.legendEntries?.length ?? 0) || !n(e.plotGroups?.length ?? 0)) return U + 1;
	if (e.plotGroups != null) {
		let t = 0;
		for (let n of e.plotGroups) {
			if (!Number.isSafeInteger(n.seriesStart) || n.seriesStart < 0 || !Number.isSafeInteger(n.seriesCount) || n.seriesCount < 0 || n.seriesStart !== t || n.seriesCount > e.series.length - t) return U + 1;
			t += n.seriesCount;
		}
		if (t !== e.series.length) return U + 1;
	}
	for (let t of e.series) {
		let i = Math.max(1, e.categories.length, t.values.length, t.categories?.length ?? 0, t.bubbleSizes?.length ?? 0, t.dataPointOverrides?.length ?? 0, t.dataLabelOverrides?.length ?? 0);
		if (!n(i) || !r(t.trendLines?.length ?? 0, Math.max(1, t.values.length)) || !n(t.errBars?.length ?? 0)) return U + 1;
		for (let e of t.errBars ?? []) if (!n(Math.max(i, e.plus.length, e.minus.length))) return U + 1;
	}
	if (!n(e.chartexSunburst?.rows.length ?? 0) || !n(e.chartexTreemap?.rows.length ?? 0) || !n(e.chartexRegionMap?.rows.length ?? 0) || !n(e.chartexBox?.categories.length ?? 0) || !n(e.chartexBox?.series.length ?? 0)) return U + 1;
	for (let t of e.chartexBox?.series ?? []) for (let e of t.valuesByCategory) if (!n(e.length)) return U + 1;
	return n(e.ofPie?.customSplitIndices?.length ?? 0) ? t : U + 1;
}
function Vn(e) {
	if (!zn(e.chartType)) return null;
	let t = 0;
	for (let n of e.series) {
		let r = 0;
		for (let e of n.errBars ?? []) r = Math.max(r, e.plus.length, e.minus.length);
		let i = Math.max(1, e.categories.length, n.categories?.length ?? 0, n.values.length, n.bubbleSizes?.length ?? 0, n.dataPointOverrides?.length ?? 0, n.dataLabelOverrides?.length ?? 0, n.trendLines?.length ?? 0, r);
		if (!Number.isSafeInteger(i) || i > 1e4 - t) return U + 1;
		t += i;
	}
	return t;
}
//#endregion
//#region packages/core/src/chart/plot-groups.ts
var Hn = new Set([
	"area3D",
	"line3D",
	"pie3D",
	"bar3D",
	"surface3D"
]);
function Un(e, t) {
	return t === "bar" || t === "bar3D" ? e.includes("Bar") : t === "line" || t === "line3D" ? e.includes("Line") : t === "area" || t === "area3D" ? e.includes("Area") : t === "pie" || t === "pie3D" ? e === "pie" : t === "surface" || t === "surface3D" ? e === "surface" || e === "surface3D" : e === t;
}
function Wn(e) {
	if (e.plotGroups == null) return !0;
	let t = 0;
	for (let n of e.plotGroups) {
		if (!Number.isSafeInteger(n.seriesStart) || n.seriesStart !== t || !Number.isSafeInteger(n.seriesCount) || n.seriesCount < 0 || n.seriesCount > e.series.length - t) return !1;
		t += n.seriesCount;
	}
	return t === e.series.length;
}
function Gn(e) {
	let t = Array(e.series.length);
	for (let n of e.plotGroups ?? []) {
		let r = Math.min(e.series.length, n.seriesStart + n.seriesCount);
		for (let e = n.seriesStart; e < r; e++) t[e] = n;
	}
	return t;
}
function Kn(e, t) {
	return t ? t.kind === "bubble" ? "bubble" : t.kind === "line" ? t.grouping === "percentStacked" ? "stackedLinePct" : t.grouping === "stacked" ? "stackedLine" : "line" : t.kind === "area" ? t.grouping === "percentStacked" ? "stackedAreaPct" : t.grouping === "stacked" ? "stackedArea" : "area" : t.kind : e;
}
function qn(e) {
	if (e.plotGroups == null || e.plotGroups.length <= 1) return "legacy";
	if (!Wn(e)) return "unsupported";
	let t = e.plotGroups.filter((e) => e.seriesCount > 0);
	if (t.length === 0) return "legacy";
	if (t.length === 1) return Un(e.chartType, t[0].kind) ? "legacy" : "unsupported";
	if (t.some((e) => e.categoryAxis === "none" || e.valueAxis === "none") || t.some((t) => t.categoryAxis === "secondary" && e.secondaryCatAxis == null || t.valueAxis === "secondary" && e.secondaryValAxis == null)) return "unsupported";
	let n = new Set(t.map((e) => e.kind));
	if (t.some((e) => Hn.has(e.kind))) return "unsupported";
	if (t.length === 2 && t[0].kind === "bar" && t[1].kind === "scatter") {
		let [n, r] = t, i = e.series.slice(n.seriesStart, n.seriesStart + n.seriesCount), a = e.series.slice(r.seriesStart, r.seriesStart + r.seriesCount);
		return n.categoryAxis === "primary" && (n.valueAxis === "primary" || n.valueAxis === "unresolved") && (r.categoryAxis === "secondary" || r.categoryAxis === "unresolved") && r.valueAxis === "secondary" && e.secondaryCatAxis != null && e.secondaryValAxis != null && i.every((e) => e.useSecondaryAxis !== !0) && a.every((e) => e.useSecondaryAxis === !0) ? "bar-combo" : "unsupported";
	}
	if (t.some((e) => e.categoryAxis === "unresolved" || e.valueAxis === "unresolved" || e.seriesAxis === "unresolved")) return "unsupported";
	if (n.size === 1) {
		let n = t[0].kind;
		if (n === "line" || n === "area") return t.some((e) => e.categoryAxis !== "primary") ? "unsupported" : n === "line" ? "line-groups" : "area-groups";
		if (n === "scatter" || n === "bubble") return "scatter-bubble";
		if (n === "bar") {
			let n = e.chartType.endsWith("H") ? "bar" : "col";
			return new Set(t.map((e) => e.barDirection ?? n)).size > 1 && (t.length !== 2 || t.some((e) => e.categoryAxis !== "primary" || e.valueAxis !== "primary")) ? "unsupported" : "bar-combo";
		}
		return "unsupported";
	}
	if (t.length === 2 && n.has("bar") && n.has("area")) return t.find((e) => e.kind === "line" || e.kind === "area")?.categoryAxis === "primary" ? "bar-combo" : "unsupported";
	if (t.length === 2 && t[0].kind === "area" && t[1].kind === "line" && t.every((e) => e.categoryAxis === "primary" && e.valueAxis === "primary")) return "area-groups";
	if (n.size === 2 && n.has("bar") && n.has("line")) {
		let n = t.filter((e) => e.kind === "bar"), r = t.filter((e) => e.kind === "line"), i = e.chartType.endsWith("H") ? "bar" : "col", a = new Set(n.map((e) => e.barDirection ?? i));
		return n.length <= 2 && r.length === 1 && t.length <= 3 && a.size === 1 && t.every((e) => e.categoryAxis === "primary") ? "bar-combo" : "unsupported";
	}
	return [...n].every((e) => e === "scatter" || e === "bubble") ? t.length > 2 ? "unsupported" : "scatter-bubble" : t.length === 2 && t[0].kind === "stock" && t[1].kind === "line" && (t[0].seriesCount === 3 || t[0].seriesCount === 4) && (t[1].grouping == null || t[1].grouping === "standard") && t.every((e) => e.categoryAxis === "primary" && e.valueAxis === "primary") ? "stock-line" : "unsupported";
}
//#endregion
//#region packages/core/src/chart/style-paint.ts
function Jn(e, t, n) {
	let r = t === "fill" ? e?.fillColors : e?.lineColors;
	return r?.length ? r[((t === "fill" ? e?.fillColorIndex : e?.lineColorIndex) ?? n) % r.length] ?? null : null;
}
function Yn(e, t) {
	let n = e?.fillPaints;
	return n?.length ? n[(e?.fillColorIndex ?? t) % n.length] ?? null : null;
}
function Xn(e, t) {
	let n = e?.linePaints;
	return n?.length ? n[(e?.lineColorIndex ?? t) % n.length] ?? null : null;
}
function Zn(e, t) {
	if (!e) return;
	if (e.fillHidden) return e.fillNoStyle ? void 0 : null;
	let n = Yn(e, t);
	if (n) return n;
	let r = Jn(e, "fill", t);
	return r ? {
		fillType: "solid",
		color: r
	} : e.fillPaintAuthored === !0 ? null : void 0;
}
function Qn(e, t) {
	if (!e) return;
	if (e.lineHidden) return e.lineNoStyle ? void 0 : null;
	let n = Xn(e, t);
	if (n) return n;
	let r = Jn(e, "line", t);
	return r ? {
		fillType: "solid",
		color: r
	} : e.linePaintAuthored === !0 ? null : void 0;
}
function $n(e, t, n) {
	let r = t?.style, i = e.chartStyleRoles?.[n], a;
	a = t?.fillHidden === !0 ? null : t?.fillColor ? {
		fillType: "solid",
		color: t.fillColor
	} : Zn(r, 0), a === void 0 && (a = Zn(i, 0));
	let o;
	o = t?.lineHidden === !0 ? null : t?.lineColor ? {
		fillType: "solid",
		color: t.lineColor
	} : Qn(r, 0), o === void 0 && (o = Qn(i, 0));
	let s = i?.lineNoStyle === !0 ? void 0 : i;
	return {
		fill: a,
		line: o,
		lineWidthEmu: t?.lineWidthEmu ?? r?.lineWidthEmu ?? s?.lineWidthEmu,
		lineDash: t?.lineDash ?? r?.lineDash ?? s?.lineDash,
		lineCustomDash: r?.lineCustomDash ?? s?.lineCustomDash,
		lineCap: r?.lineCap ?? s?.lineCap,
		lineJoin: r?.lineJoin ?? s?.lineJoin
	};
}
//#endregion
//#region packages/core/src/chart/three-d-surface-picture-plan.ts
function er(e, t) {
	return !Number.isSafeInteger(t) || t < 0 ? !1 : e.slabFaces ? t === 0 ? e.slabFaces.front : t === 1 || t >= 6 ? !1 : t % 2 == 0 ? e.slabFaces.end : e.slabFaces.sides : t === 0;
}
function tr(e, t) {
	return e.mode !== "stack" && e.mode !== "stackScale" || !er(e, t) ? !1 : !e.slabFaces || t === 0 || t % 2 == 1;
}
function nr(e, t) {
	return er(e, t) ? rr(e, t) ? e.repetitions : 1 : 0;
}
function rr(e, t) {
	return e.mode === "stackScale" && tr(e, t);
}
function W(e) {
	let t = 0;
	for (let n = 0; n < 6; n++) if (t += nr(e, n), t > 4096) return null;
	return e;
}
function ir(e) {
	return e == null || [
		e.l,
		e.t,
		e.r,
		e.b
	].every((e) => (e ?? 0) === 0);
}
function ar(e) {
	if (!e) return !0;
	let t = e.l ?? 0, n = e.t ?? 0, r = e.r ?? 0, i = e.b ?? 0, a = [
		t,
		n,
		r,
		i
	], o = 1 - r, s = 1 - i;
	return a.every(Number.isFinite) && o > t && s > n && Math.min(1, o) > Math.max(0, t) && Math.min(1, s) > Math.max(0, n);
}
function or(e, t, n, r) {
	if (e.tile != null == (e.stretch === !0) || !ar(e.srcRect) || !ar(e.fillRect) || e.rotWithShape === !1 || e.alpha != null && (!Number.isFinite(e.alpha) || e.alpha < 0 || e.alpha > 1)) return null;
	let i = t?.pictureOptions;
	if (i?.pictureFormatAuthored === !0 && i.pictureFormat == null || i?.pictureStackUnitAuthored === !0 && i.pictureStackUnit == null) return null;
	let a = i?.pictureFormat ?? "stretch";
	if ((!ir(e.srcRect) || !ir(e.fillRect)) && a !== "stretch") return null;
	let o = t?.thicknessPercent ?? 0;
	if (!Number.isFinite(o) || o < 0) return null;
	let s = o === 0 ? void 0 : {
		front: i?.applyToFront !== !1,
		sides: i?.applyToSides !== !1,
		end: i?.applyToEnd !== !1
	};
	if (s && !Object.values(s).some(Boolean) || !s && (n === "backWall" && i?.applyToFront === !1 || (n === "floor" || n === "sideWall") && i?.applyToSides === !1) || (i?.pictureStackUnitAuthored === !0 || i?.pictureStackUnit != null) && a !== "stackScale") return null;
	if (e.tile) return a !== "stretch" || !ir(e.fillRect) ? null : W({
		mode: "tile",
		repetitions: 1,
		slabFaces: s
	});
	if (a === "stretch") return W({
		mode: "stretch",
		repetitions: 1,
		slabFaces: s
	});
	if (a === "stack") return W({
		mode: "stack",
		repetitions: 1,
		slabFaces: s
	});
	if (a !== "stackScale") return null;
	let c = i?.pictureStackUnit;
	if (!(c != null && Number.isFinite(c) && c > 0)) return null;
	if (n === "floor") return W({
		mode: "stretch",
		repetitions: 1,
		slabFaces: s
	});
	if (r == null) return W({
		mode: "stackScale",
		repetitions: 1,
		stackUnit: c,
		slabFaces: s
	});
	if (!(Number.isFinite(r) && r > 0)) return null;
	let l = Math.ceil(r / c);
	return !Number.isSafeInteger(l) || l < 1 || l > 4096 ? null : W({
		mode: "stackScale",
		repetitions: l,
		stackUnit: c,
		slabFaces: s
	});
}
//#endregion
//#region packages/core/src/chart/image-fill.ts
var sr = new Set([
	"line",
	"stackedLine",
	"stackedLinePct",
	"area",
	"stackedArea",
	"stackedAreaPct",
	"clusteredBar",
	"clusteredBarH",
	"stackedBar",
	"stackedBarH",
	"stackedBarPct",
	"stackedBarHPct",
	"surface",
	"surface3D"
]);
function cr(e) {
	return JSON.stringify([
		e.imagePath,
		e.svgImagePath ?? null,
		e.duotone?.clr1 ?? null,
		e.duotone?.clr2 ?? null
	]);
}
var G;
function lr(e, t) {
	let n = G;
	G = e;
	try {
		return t();
	} finally {
		G = n;
	}
}
function ur(e, t, n, r, i) {
	let a = e;
	return {
		x: a.endsWith("r") || a === "r" ? t - r : a === "t" || a === "ctr" || a === "b" ? (t - r) / 2 : 0,
		y: a.startsWith("b") || a === "b" ? n - i : a === "l" || a === "ctr" || a === "r" ? (n - i) / 2 : 0
	};
}
var dr = new Set([
	"tl",
	"t",
	"tr",
	"l",
	"ctr",
	"r",
	"bl",
	"b",
	"br"
]), fr = new Set([
	"none",
	"x",
	"y",
	"xy"
]);
function K(e) {
	return e.tile != null != (e.stretch === !0) && ft(e.srcRect);
}
function pr(e) {
	return K(e) ? G?.(e) ?? null : null;
}
function mr(t, r, i = e) {
	let a = t.tile;
	if (!a) return null;
	let { algn: o, tx: s, ty: c, sx: l, sy: u } = a, d = a.flip ?? "none";
	if (!o || !dr.has(o) || !fr.has(d) || !Number.isFinite(s) || !Number.isFinite(c) || !(t.dpi != null && Number.isFinite(t.dpi) && t.dpi > 0) || !(Number.isFinite(l) && l > 0) || !(Number.isFinite(u) && u > 0)) return null;
	let f = pt(r);
	if (!(Number.isFinite(f.w) && f.w > 0) || !(Number.isFinite(f.h) && f.h > 0)) return null;
	let p = 96 / t.dpi * (i / e), m = f.w * l * p, h = f.h * u * p;
	return !(m > 0) || !(h > 0) ? null : {
		alignment: o,
		tileW: m,
		tileH: h,
		offsetX: s / n * i,
		offsetY: c / n * i,
		flipX: d === "x" || d === "xy",
		flipY: d === "y" || d === "xy"
	};
}
function hr(e, t, n) {
	let r = ur(e.alignment, t, n, e.tileW, e.tileH);
	return {
		x: r.x + e.offsetX,
		y: r.y + e.offsetY
	};
}
function gr(e, t, n, r, i) {
	let a = mr(e, t, i);
	if (!a) return null;
	let { tileW: o, tileH: s } = a, c = Math.ceil(n / o) + 2, l = Math.ceil(r / s) + 2, u = c * l;
	return Number.isSafeInteger(u) ? {
		...a,
		columns: c,
		rows: l,
		repetitions: u
	} : null;
}
function _r(t, n, r, i, a = e) {
	if (!(r > 0) || !(i > 0) || !K(t)) return 0;
	let o = n?.(t);
	if (!o) return 0;
	if (!t.tile) return 1;
	let s = gr(t, o, r, i, a);
	return s ? Math.min(s.repetitions, Ln) : 0;
}
function vr(e) {
	if (Bn(e) > 1e4) return {
		fills: [],
		sourceLimitExceeded: !1
	};
	let t = /* @__PURE__ */ new Map(), n = !1, r = (e) => {
		if (!e || typeof e != "object" || e.fillType !== "image") return;
		let r = e;
		if (!K(r)) return;
		let i = cr(r);
		if (!t.has(i)) {
			if (t.size >= 256) {
				n = !0;
				return;
			}
			t.set(i, r);
		}
	}, i = (e, t) => {
		let n = e?.fillPaints;
		if (n?.length) return n[(e?.fillColorIndex ?? t) % n.length];
	}, a = (e, t) => {
		if (!e) return;
		if (e.fillHidden === !0) return e.fillNoStyle ? void 0 : null;
		let n = i(e, t);
		if (n?.fillType === "image") return n;
		if (n != null || e.fillPaintAuthored === !0) return null;
		let r = e.fillColors;
		return r?.length && r[(e.fillColorIndex ?? t) % r.length] ? null : void 0;
	}, o = (e, t, n, r, i) => {
		if (n === !0) return null;
		if (e?.fillType === "image") return e;
		if (e != null || t != null || r === !0) return null;
		if (i?.fillNoStyle !== !0) return a(i, 0);
	}, s = o(e.chartFill, void 0, e.chartFillHidden, e.chartFillPaintAuthored, e.chartStyleRoles?.chartArea);
	s && r(s);
	let c = o(e.plotAreaFill, e.plotAreaBg, e.plotAreaFillHidden, e.plotAreaFillPaintAuthored, e.threeD ? e.chartStyleRoles?.plotArea3D : e.chartStyleRoles?.plotArea);
	c && r(c);
	let l = e.series.some((e) => e.values.some((e) => e != null && Number.isFinite(e))), u = Math.max(e.categories.length, ...e.series.map((e) => e.categories?.length ?? e.values.length)), d = e.chartType === "surface" || e.chartType === "surface3D" ? e.series.length >= 2 && u >= 2 && l : l;
	if (e.threeD && sr.has(e.chartType) && d) {
		let t = e.valMin != null && Number.isFinite(e.valMin) && e.valMax != null && Number.isFinite(e.valMax) ? e.valMax - e.valMin : void 0;
		for (let [n, i] of [
			["floor", "floor"],
			["sideWall", "wall"],
			["backWall", "wall"]
		]) {
			let a = e.threeD[n], o = $n(e, a, i).fill;
			o?.fillType === "image" && or(o, a, n, t) && r(o);
		}
	}
	let f = Gn(e), p = e.series.some((t, n) => {
		let r = f[n];
		return (r?.kind === "bubble" || r?.kind === "scatter" ? "scatter" : t.seriesType ?? (e.chartType === "bubble" ? "scatter" : e.chartType)) === "scatter" && (t.categories ?? e.categories).some((e) => Number.isFinite(Number.parseFloat(e)));
	}), m = e.chartStyleRoles?.dataPointMarker, h = vn(e), g = e.categories.length > 0 || (e.series[0]?.categories?.length ?? 0) > 0 || e.series.some((e) => e.values.length > 0);
	for (let t = 0; t < e.series.length; t++) {
		let n = e.series[t], o = f[t], s = o?.kind === "bubble" || o == null && e.chartType === "bubble", c = o?.kind === "bubble" || o?.kind === "scatter" ? "scatter" : n.seriesType ?? (e.chartType === "bubble" ? "scatter" : e.chartType), l = Kn(e.chartType, o), u = o?.scatterStyle ?? e.scatterStyle, d = o?.radarStyle ?? e.radarStyle, _ = {
			chartType: l,
			bubbleScale: o?.bubbleScale ?? e.bubbleScale,
			showNegativeBubbles: o?.showNegativeBubbles ?? e.showNegativeBubbles
		};
		if (!(c === "line" || c === "stackedLine" || c === "stackedLinePct" || c === "area" || c === "stackedArea" || c === "stackedAreaPct" || c === "scatter" || c === "radar" || c === "stock") || Dn(c, l, u, d)) continue;
		let v = c === "area" || c === "stackedArea" || c === "stackedAreaPct" ? (n.showMarker === !0 || yn(n)) && n.markerSymbol !== "none" : c === "stock" ? n.markerSymbol != null && n.markerSymbol !== "none" : n.showMarker !== !1 && n.markerSymbol !== "none", y = h.has(t), b = Math.max(n.values.length, n.categories?.length ?? 0, e.categories.length), x = wn(e, n, c, b, p, _) > 0, S = On(l, u, n, d) && (e.showLegend && !y || e.dataTable?.showKeys === !0 && Tn(e.chartType) && g || x), ee = n.markerSymbol ?? (c === "stock" ? "none" : "circle");
		if (S && H(ee)) {
			if (s) {
				let i = a(n.chartexStyle, t);
				if (i && r(i), i === void 0 && n.color == null) {
					let n = a(e.chartStyleRoles?.dataPoint, t);
					n && r(n);
				}
			} else r(n.markerFillPaint);
			!s && n.markerFillPaint === void 0 && n.markerFill == null && n.markerFillPaintAuthored !== !0 && r(i(m, t));
		}
		if (!v && !En(n)) continue;
		let te = new Map((n.dataPointOverrides ?? []).map((e) => [e.idx, e]));
		for (let l = 0; l < b; l++) {
			if (!Cn(e, n, c, l, p, _)) continue;
			let u = te.get(l);
			if (!H(kn(n, u, "circle", v))) continue;
			if (s) {
				let t = { showNegativeBubbles: o?.showNegativeBubbles ?? e.showNegativeBubbles };
				if ((o?.bubbleScale ?? e.bubbleScale ?? 100) <= 0 || xn(t, n.bubbleSizes?.[l]) == null || (n.bubbleSizes?.[l] ?? 0) < 0) continue;
				let i = a(u?.chartexStyle, l);
				if (i && r(i), i !== void 0 || u?.fillHidden === !0 || u?.color != null || n.dataPointColors?.[l] != null) continue;
				let s = a(n.chartexStyle, l);
				if (s && r(s), s !== void 0 || n.color != null) continue;
				let c = a(e.chartStyleRoles?.dataPoint, l);
				c && r(c);
				continue;
			}
			let d = An(n, u, l);
			r(d), d === void 0 && u?.markerFill == null && u?.color == null && n.dataPointColors?.[l] == null && n.markerFill == null && u?.markerFillPaintAuthored !== !0 && n.markerFillPaintAuthored !== !0 && r(i(m, t));
		}
	}
	for (let t = 0; t < (e.chartexBox?.series.length ?? 0); t++) {
		let n = e.chartexBox.series[t];
		if (!H(e.chartStyleMarkerSymbol ?? e.chartexMarkerSymbol ?? "circle") || !(n.showNonoutliers || n.showOutliers)) continue;
		let i = 0;
		for (let e of n.valuesByCategory) {
			let t = xt(e, n.quartileMethod);
			t && (n.showNonoutliers && (i += t.inner.length), n.showOutliers && (i += t.outliers.length));
		}
		if (i === 0) continue;
		let o = n.chartexFormatIdx ?? t, s = n.chartexStyle, c = a(s, o);
		if (c && r(c), c !== void 0 || n.color != null) continue;
		let l = a(e.chartexDataPointMarkerStyle ?? e.chartexDataPointStyle ?? void 0, o);
		l && r(l);
	}
	return {
		fills: n ? [] : [...t.values()],
		sourceLimitExceeded: n
	};
}
function yr(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = vr(n);
		if (e.sourceLimitExceeded) return [];
		for (let n of e.fills) {
			let e = cr(n);
			if (!t.has(e)) {
				if (t.size >= 256) return [];
				t.set(e, n);
			}
		}
	}
	return [...t.values()];
}
function br(t, n, r, i, a, o, s = e, c = 0) {
	let l = G?.(n);
	if (!l || !(a > 0) || !(o > 0) || !K(n) || c !== 0 && n.rotWithShape == null) return !1;
	if (t.save(), t.beginPath(), t.rect(r, i, a, o), t.clip(), n.rotWithShape === !1 && c !== 0 && (t.translate(r + a / 2, i + o / 2), t.rotate(-c * Math.PI / 180), t.translate(-(r + a / 2), -(i + o / 2))), n.alpha != null && (t.globalAlpha *= Math.max(0, Math.min(1, n.alpha))), !n.tile) {
		let e = n.fillRect, s = r + (e?.l ?? 0) * a, c = i + (e?.t ?? 0) * o, u = (1 - (e?.l ?? 0) - (e?.r ?? 0)) * a, d = (1 - (e?.t ?? 0) - (e?.b ?? 0)) * o;
		return u > 0 && d > 0 && ht(t, l, n.srcRect, s, c, u, d), t.restore(), u > 0 && d > 0;
	}
	let u = gr(n, l, a, o, s);
	if (!u || u.repetitions > 4096) return t.restore(), !1;
	let { tileW: d, tileH: f, flipX: p, flipY: m, columns: h, rows: g } = u, _ = hr(u, a, o), v = r + _.x, y = i + _.y, b = Math.floor((r - v) / d) - 1, x = Math.floor((i - y) / f) - 1;
	for (let e = x; e < x + g; e++) for (let r = b; r < b + h; r++) {
		let i = v + r * d, a = y + e * f, o = p && Math.abs(r) % 2 == 1, s = m && Math.abs(e) % 2 == 1;
		t.save(), t.translate(i + (o ? d : 0), a + (s ? f : 0)), t.scale(o ? -1 : 1, s ? -1 : 1), ht(t, l, n.srcRect, 0, 0, d, f), t.restore();
	}
	return t.restore(), !0;
}
//#endregion
//#region packages/core/src/shape/pattern-bitmaps.ts
var xr = {
	pct5: [
		0,
		16,
		0,
		0,
		0,
		1,
		0,
		0
	],
	pct10: [
		136,
		0,
		34,
		0,
		136,
		0,
		34,
		0
	],
	pct20: [
		136,
		34,
		136,
		34,
		136,
		34,
		136,
		34
	],
	pct25: [
		136,
		85,
		34,
		85,
		136,
		85,
		34,
		85
	],
	pct30: [
		170,
		85,
		170,
		85,
		170,
		85,
		170,
		85
	],
	pct40: [
		170,
		119,
		170,
		221,
		170,
		119,
		170,
		221
	],
	pct50: [
		170,
		85,
		170,
		85,
		170,
		85,
		170,
		85
	],
	pct60: [
		221,
		85,
		119,
		85,
		221,
		85,
		119,
		85
	],
	pct70: [
		238,
		85,
		187,
		85,
		238,
		85,
		187,
		85
	],
	pct75: [
		238,
		170,
		187,
		170,
		238,
		170,
		187,
		170
	],
	pct80: [
		254,
		239,
		251,
		191,
		254,
		239,
		251,
		191
	],
	pct90: [
		255,
		239,
		255,
		251,
		255,
		239,
		255,
		251
	],
	horz: [
		255,
		0,
		0,
		0,
		255,
		0,
		0,
		0
	],
	vert: [
		136,
		136,
		136,
		136,
		136,
		136,
		136,
		136
	],
	ltHorz: [
		0,
		255,
		0,
		0,
		0,
		0,
		0,
		0
	],
	ltVert: [
		32,
		32,
		32,
		32,
		32,
		32,
		32,
		32
	],
	dkHorz: [
		255,
		255,
		0,
		0,
		255,
		255,
		0,
		0
	],
	dkVert: [
		204,
		204,
		204,
		204,
		204,
		204,
		204,
		204
	],
	narHorz: [
		255,
		0,
		255,
		0,
		255,
		0,
		255,
		0
	],
	narVert: [
		170,
		170,
		170,
		170,
		170,
		170,
		170,
		170
	],
	cross: [
		255,
		136,
		136,
		136,
		255,
		136,
		136,
		136
	],
	lgGrid: [
		255,
		128,
		128,
		128,
		128,
		128,
		128,
		128
	],
	smGrid: [
		255,
		136,
		136,
		136,
		255,
		136,
		136,
		136
	],
	dotGrid: [
		136,
		0,
		0,
		0,
		136,
		0,
		0,
		0
	],
	dnDiag: [
		128,
		64,
		32,
		16,
		8,
		4,
		2,
		1
	],
	upDiag: [
		1,
		2,
		4,
		8,
		16,
		32,
		64,
		128
	],
	ltDnDiag: [
		136,
		68,
		34,
		17,
		136,
		68,
		34,
		17
	],
	ltUpDiag: [
		17,
		34,
		68,
		136,
		17,
		34,
		68,
		136
	],
	dkDnDiag: [
		195,
		129,
		0,
		129,
		195,
		129,
		0,
		129
	],
	dkUpDiag: [
		195,
		129,
		0,
		129,
		195,
		129,
		0,
		129
	],
	wdDnDiag: [
		128,
		64,
		32,
		16,
		8,
		4,
		2,
		129
	],
	wdUpDiag: [
		1,
		2,
		4,
		8,
		16,
		32,
		64,
		129
	],
	diagCross: [
		129,
		66,
		36,
		24,
		24,
		36,
		66,
		129
	],
	horzBrick: [
		255,
		16,
		16,
		16,
		255,
		1,
		1,
		1
	],
	diagBrick: [
		129,
		66,
		36,
		24,
		36,
		66,
		129,
		0
	],
	lgCheck: [
		240,
		240,
		240,
		240,
		15,
		15,
		15,
		15
	],
	smCheck: [
		204,
		204,
		51,
		51,
		204,
		204,
		51,
		51
	],
	trellis: [
		165,
		90,
		165,
		90,
		165,
		90,
		165,
		90
	]
};
function Sr(e, t, n) {
	let r = xr[e];
	if (!r) return null;
	let i = a(8, 8);
	if (!i) return null;
	let o = i.getContext("2d");
	if (!o) return null;
	o.fillStyle = Cr(n), o.fillRect(0, 0, 8, 8), o.fillStyle = Cr(t);
	for (let e = 0; e < 8; e++) {
		let t = r[e];
		for (let n = 0; n < 8; n++) t & 1 << 7 - n && o.fillRect(n, e, 1, 1);
	}
	return i;
}
function Cr(e) {
	return `rgba(${parseInt(e.slice(0, 2), 16)},${parseInt(e.slice(2, 4), 16)},${parseInt(e.slice(4, 6), 16)},${e.length >= 8 ? parseInt(e.slice(6, 8), 16) / 255 : 1})`;
}
//#endregion
//#region packages/core/src/draw/dash.ts
function q(e, t) {
	return e.map((e) => e * t);
}
var wr = {
	dotted: [1, 2],
	dashed: [3, 2],
	dashSmallGap: [3, 1],
	dotDash: [
		1,
		2,
		3,
		2
	],
	dotDotDash: [
		1,
		2,
		1,
		2,
		3,
		2
	],
	dashDotStroked: [
		1,
		2,
		3,
		2
	]
};
function Tr(e, t) {
	let n = wr[e];
	return n ? q(n, t) : [];
}
var Er = {
	hair: [1, 1],
	dashed: [4, 3],
	mediumDashed: [4, 3],
	dotted: [2, 2],
	dashDot: [
		4,
		2,
		1,
		2
	],
	mediumDashDot: [
		4,
		2,
		1,
		2
	],
	dashDotDot: [
		4,
		2,
		1,
		2,
		1,
		2
	],
	mediumDashDotDot: [
		4,
		2,
		1,
		2,
		1,
		2
	],
	slantDashDot: [
		5,
		3,
		1,
		3
	]
};
function Dr(e) {
	let t = Er[e];
	return t ? q(t, 1) : [];
}
var Or = {
	dash: [6, 3],
	dot: [1.5, 3],
	dashDot: [
		6,
		3,
		1.5,
		3
	],
	lgDash: [10, 4],
	lgDashDot: [
		10,
		4,
		1.5,
		4
	],
	lgDashDotDot: [
		10,
		4,
		1.5,
		4,
		1.5,
		4
	],
	sysDash: [4, 2],
	sysDot: [1, 2],
	sysDashDot: [
		4,
		2,
		1,
		2
	],
	sysDashDotDot: [
		4,
		2,
		1,
		2,
		1,
		2
	]
};
function kr(e, t) {
	let n = Or[e];
	return n ? q(n, t) : [];
}
var Ar = 512;
function J(e, t, n) {
	if (e != null) {
		let t = [];
		for (let r = 0; r < Math.min(e.length, Ar); r += 1) {
			let i = e[r];
			!Number.isFinite(i.dash) || !Number.isFinite(i.space) || i.dash < 0 || i.space < 0 || i.dash === 0 && i.space === 0 || t.push(i.dash * n, i.space * n);
		}
		return t;
	}
	return kr(t ?? "solid", n);
}
function jr(e, t) {
	let n = kr(e, t);
	if (n.length > 0) return n;
	let r = e.trim().split(/[\s,]+/).map(Number);
	return r.length >= 2 && r.every((e) => Number.isFinite(e) && e >= 0) && r.some((e) => e > 0) ? (r.length % 2 != 0 && r.pop(), q(r, t)) : [];
}
var Mr = {
	dotted: [1.5, 3],
	dottedHeavy: [1.5, 3],
	dash: [6, 3],
	dashHeavy: [6, 3],
	dashLong: [10, 4],
	dashLongHeavy: [10, 4],
	dotDash: [
		6,
		3,
		1.5,
		3
	],
	dotDashHeavy: [
		6,
		3,
		1.5,
		3
	],
	dotDotDash: [
		6,
		3,
		1.5,
		3,
		1.5,
		3
	],
	dotDotDashHeavy: [
		6,
		3,
		1.5,
		3,
		1.5,
		3
	]
};
function Nr(e, t) {
	let n = Mr[e];
	return n ? q(n, t) : [];
}
//#endregion
//#region packages/core/src/shape/paint.ts
var Pr = 512;
function Fr(e, t, n, r, i, a, s) {
	let c = e.tileRect;
	if (!c || (c.l ?? 0) === 0 && (c.t ?? 0) === 0 && (c.r ?? 0) === 0 && (c.b ?? 0) === 0) return null;
	let l = n + i * (c.l ?? 0), u = r + a * (c.t ?? 0), d = i * (1 - (c.l ?? 0) - (c.r ?? 0)), f = a * (1 - (c.t ?? 0) - (c.b ?? 0));
	if (!Number.isFinite(d) || !Number.isFinite(f) || Math.abs(d) < 1e-9 || Math.abs(f) < 1e-9) return null;
	let p = Math.min(1, Pr / Math.abs(d), Pr / Math.abs(f)), m = Math.max(1, Math.ceil(Math.abs(d) * p)), h = Math.max(1, Math.ceil(Math.abs(f) * p)), g = o(t, m, h), _ = g?.getContext("2d");
	if (!g || !_) return null;
	let v = X({
		...e,
		tileRect: void 0,
		flip: void 0
	}, _, 0, 0, m, h, s);
	if (!v) return null;
	_.fillStyle = v, _.fillRect(0, 0, m, h);
	let y = e.flip === "x" || e.flip === "xy", b = e.flip === "y" || e.flip === "xy", x = g;
	if (y || b) {
		let e = o(t, m * (y ? 2 : 1), h * (b ? 2 : 1)), n = e?.getContext("2d");
		if (!e || !n) return null;
		for (let e = 0; e < (b ? 2 : 1); e += 1) for (let t = 0; t < (y ? 2 : 1); t += 1) n.save(), n.translate(t * m, e * h), n.scale(t === 1 ? -1 : 1, e === 1 ? -1 : 1), n.drawImage(g, t === 1 ? -m : 0, e === 1 ? -h : 0), n.restore();
		x = e;
	}
	let S = t.createPattern(x, "repeat");
	return !S || typeof S.setTransform != "function" ? null : (S.setTransform({
		a: d / m,
		b: 0,
		c: 0,
		d: f / h,
		e: l,
		f: u
	}), S);
}
function Y(e, t = 1) {
	let n = e.charCodeAt(0) === 35 ? e.slice(1) : e;
	return `rgba(${parseInt(n.slice(0, 2), 16)},${parseInt(n.slice(2, 4), 16)},${parseInt(n.slice(4, 6), 16)},${n.length >= 8 ? parseInt(n.slice(6, 8), 16) / 255 : t})`;
}
function Ir(e) {
	let t = e.charCodeAt(0) === 35 ? e.slice(1) : e, n = parseInt(t.slice(0, 2), 16), r = parseInt(t.slice(2, 4), 16), i = parseInt(t.slice(4, 6), 16);
	return .299 * n + .587 * r + .114 * i;
}
function Lr(e) {
	return e && Ir(e) < 128 ? "#FFFFFF" : "#000000";
}
function X(e, t, n, r, i, a, o = 0) {
	if (!e || e.fillType === "none") return null;
	if (e.fillType === "solid") return Y(e.color);
	if (e.fillType === "pattern") return zr(e, t);
	if (e.fillType === "gradient") {
		let s = e.stops;
		if (s.length === 0) return null;
		if (s.length === 1) return Y(s[0].color);
		let c = Fr(e, t, n, r, i, a, o);
		if (c) return c;
		let l, u = e.tileRect, d = n + i * (u?.l ?? 0), f = r + a * (u?.t ?? 0), p = i * (1 - (u?.l ?? 0) - (u?.r ?? 0)), m = a * (1 - (u?.t ?? 0) - (u?.b ?? 0));
		if (e.gradType === "radial") {
			let n = e.fillToRect, r = d + p * (n?.l ?? 0), i = f + m * (n?.t ?? 0), a = p * (1 - (n?.l ?? 0) - (n?.r ?? 0)), o = m * (1 - (n?.t ?? 0) - (n?.b ?? 0)), s = r + a / 2, c = i + o / 2, u = Math.max(Math.abs(s - d), Math.abs(d + p - s)), h = Math.max(Math.abs(c - f), Math.abs(f + m - c)), g = e.path === "rect" ? Math.max(u, h) : Math.sqrt(u * u + h * h);
			l = t.createRadialGradient(s, c, 0, s, c, Math.max(g, 1e-9));
		} else {
			let n = (e.rotWithShape === !1 ? e.angle - o : e.angle) * Math.PI / 180, r = Math.cos(n), i = Math.sin(n);
			if (e.scaled === !0) {
				r *= p, i *= m;
				let e = Math.hypot(r, i);
				e > 0 && (r /= e, i /= e);
			}
			let a = d + p / 2, s = f + m / 2, c = (Math.abs(r) * p + Math.abs(i) * m) / 2;
			l = t.createLinearGradient(a - r * c, s - i * c, a + r * c, s + i * c);
		}
		for (let e of s) l.addColorStop(Math.min(1, Math.max(0, e.position)), Y(e.color));
		return l;
	}
	return null;
}
var Rr = /* @__PURE__ */ new WeakMap();
function zr(e, t) {
	let n = `${e.preset}|${e.fg}|${e.bg}`, r = Rr.get(t);
	r || (r = /* @__PURE__ */ new Map(), Rr.set(t, r));
	let i = r.get(n);
	if (i) return i;
	let a = Sr(e.preset, e.fg, e.bg);
	if (!a) return Y(e.fg);
	let o = t.createPattern(a, "repeat");
	return o ? (r.set(n, o), o) : Y(e.fg);
}
function Br(e, t, n) {
	if (!t) {
		e.strokeStyle = "transparent", e.lineWidth = 0, e.setLineDash([]), e.lineCap = "butt", e.lineJoin = "miter", e.miterLimit = 10;
		return;
	}
	e.strokeStyle = Y(t.color);
	let r = Math.max(.5, t.width * n);
	e.lineWidth = r;
	let i = t.customDash == null ? t.dashStyle ? jr(t.dashStyle, r) : [] : J(t.customDash, null, r), a = t.lineCap ?? "butt", o = i.some((e, t) => t % 2 == 0 && e === 0);
	e.lineCap = a === "butt" && o ? "square" : a, e.lineJoin = t.lineJoin ?? "miter", e.miterLimit = t.miterLimit ?? 10, e.setLineDash(i);
}
//#endregion
//#region packages/core/src/chart/compound-frame.ts
function Vr(e, t) {
	if (!Number.isFinite(e) || e <= 0) return [];
	let n = t === "dbl" ? [
		1,
		1,
		1
	] : t === "thinThick" ? [
		1,
		1,
		3
	] : t === "thickThin" ? [
		3,
		1,
		1
	] : t === "tri" ? [
		1,
		1,
		2,
		1,
		1
	] : [1], r = e / n.reduce((e, t) => e + t, 0), i = [], a = 0;
	for (let e = 0; e < n.length; e += 2) {
		let t = n[e] * r;
		i.push({
			center: a + t / 2,
			width: t
		}), a += t + (n[e + 1] ?? 0) * r;
	}
	return i;
}
function Hr(e, t, n, r, i, a) {
	let o = Math.max(0, Math.min(a, r / 2, i / 2));
	e.beginPath(), e.moveTo(t + o, n), e.lineTo(t + r - o, n), e.quadraticCurveTo(t + r, n, t + r, n + o), e.lineTo(t + r, n + i - o), e.quadraticCurveTo(t + r, n + i, t + r - o, n + i), e.lineTo(t + o, n + i), e.quadraticCurveTo(t, n + i, t, n + i - o), e.lineTo(t, n + o), e.quadraticCurveTo(t, n, t + o, n), e.closePath();
}
function Z(e, t, n, r, i, a, o, s = 0) {
	if (r > 0 && i > 0) for (let c of Vr(a, o)) {
		let a = Math.max(0, r - c.center * 2), o = Math.max(0, i - c.center * 2);
		a > 0 && o > 0 && (e.lineWidth = c.width, s > 0 ? (Hr(e, t + c.center, n + c.center, a, o, Math.max(0, s - c.center)), e.stroke()) : e.strokeRect(t + c.center, n + c.center, a, o));
	}
}
//#endregion
//#region packages/core/src/chart/axis-style.ts
function Q(e, t) {
	return e ? Math.max(.5, e / n) * t : 1;
}
function Ur(e, t, n) {
	return {
		color: e ? `#${e}` : "#aaa",
		width: Q(t, n)
	};
}
function Wr(e, t, n) {
	return {
		color: e ? `#${e}` : "#e0e0e0",
		width: t ? Q(t, n) : .5
	};
}
function Gr(e) {
	return e.catAxisCrossBetween !== "midCat";
}
//#endregion
//#region packages/core/src/excel-date.ts
var $ = 864e5, Kr = Date.UTC(1899, 11, 30), qr = Date.UTC(1904, 0, 1);
function Jr(e, t = !1) {
	if (t) return new Date(qr + e * $);
	let n = e < 60 ? e + 1 : e;
	return new Date(Kr + n * $);
}
function Yr(e, t = !1) {
	if (t) return (e.getTime() - qr) / $;
	let n = (e.getTime() - Kr) / $;
	return n <= 60 ? n - 1 : n;
}
//#endregion
//#region packages/core/src/text/round-decimal.ts
function Xr(e, t) {
	if (!Number.isFinite(e)) return String(e);
	let n = Math.max(0, Math.trunc(t)), r = e < 0, [i, a = ""] = Zr(Math.abs(e).toString()).split("."), o = a.padEnd(n + 1, "0"), s = o.slice(0, n), c = o.charCodeAt(n) - 48, l = (i + s).split("").map((e) => e.charCodeAt(0) - 48);
	if (c >= 5) {
		let e = l.length - 1;
		for (; e >= 0; e--) if (l[e] === 9) l[e] = 0;
		else {
			l[e] += 1;
			break;
		}
		e < 0 && l.unshift(1);
	}
	let u = l.map((e) => String(e)).join(""), d = n, f = (d > 0 ? u.slice(0, u.length - d) : u) || "0", p = d > 0 ? u.slice(u.length - d) : "", m = f.replace(/^0+(?=\d)/, ""), h = p.length > 0 ? `${m}.${p}` : m, g = /^[0.]*$/.test(h) && !/[1-9]/.test(h);
	return r && !g ? `-${h}` : h;
}
function Zr(e) {
	let t = /^(\d+)(?:\.(\d+))?[eE]([+-]?\d+)$/.exec(e);
	if (!t) return e;
	let [, n, r = "", i] = t, a = parseInt(i, 10), o = n + r, s = n.length + a;
	return s <= 0 ? "0." + "0".repeat(-s) + o : s >= o.length ? o + "0".repeat(s - o.length) : o.slice(0, s) + "." + o.slice(s);
}
//#endregion
//#region packages/core/src/chart/chart-number-format.ts
var Qr = /* @__PURE__ */ new Map();
function $r(e, t = !1, n = typeof navigator > "u" ? void 0 : navigator.language) {
	let r = n ?? "", i = Qr.get(r);
	return i || (i = new Intl.DateTimeFormat(n, {
		year: "numeric",
		month: "numeric",
		day: "numeric",
		timeZone: "UTC"
	}), Qr.set(r, i)), i.format(Jr(e, t));
}
function ei(e) {
	return Number.isInteger(e) ? String(e) : Xr(e, 6).replace(/\.?0+$/, "");
}
function ti(e, t, n = !1) {
	if (!t || t.trim().toLowerCase() === "general") return ei(e);
	if (ri(t)) return ii(e, t, n);
	let r = ai(t), i;
	return i = e > 0 ? r[0] ?? t : e < 0 ? r[1] ?? r[0] ?? t : r[2] ?? r[0] ?? t, i === "" ? "" : (e < 0 && r.length < 2 ? "-" : "") + oi(Math.abs(e), i);
}
function ni(e, t, n = !1) {
	if (!t || e.trim() === "") return e;
	let r = Number(e);
	return Number.isFinite(r) ? ti(r, t, n) : e;
}
function ri(e) {
	let t = !1;
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (r === "\"") {
			t = !t;
			continue;
		}
		if (!t) {
			if (r === "\\") {
				n++;
				continue;
			}
			if (r === "[") {
				for (; n < e.length && e[n] !== "]";) n++;
				continue;
			}
			if (r === "y" || r === "Y" || r === "d" || r === "D" || r === "m" || r === "M" || r === "h" || r === "H" || r === "s" || r === "S") return !0;
		}
	}
	return !1;
}
function ii(e, t, n = !1) {
	let r = Jr(Math.floor(e), n), i = r.getUTCFullYear(), a = r.getUTCMonth() + 1, o = r.getUTCDate(), s = (e - Math.floor(e)) * 86400, c = Math.floor(s / 3600), l = Math.floor(s % 3600 / 60), u = Math.floor(s % 60), d = "", f = !1, p = 0;
	for (; p < t.length;) {
		let e = t[p];
		if (e === "\"") {
			f = !f, p++;
			continue;
		}
		if (f) {
			d += e, p++;
			continue;
		}
		if (e === "\\" && p + 1 < t.length) {
			d += t[p + 1], p += 2;
			continue;
		}
		if (e === "[") {
			for (; p < t.length && t[p] !== "]";) p++;
			p < t.length && p++;
			continue;
		}
		if (e === "y" || e === "Y") {
			let e = 0;
			for (; p < t.length && (t[p] === "y" || t[p] === "Y");) e++, p++;
			d += e >= 3 ? String(i) : String(i % 100).padStart(2, "0");
			continue;
		}
		if (e === "m" || e === "M") {
			let e = 0;
			for (; p < t.length && (t[p] === "m" || t[p] === "M");) e++, p++;
			if (d.match(/[Hh]+\W*$/)) d += e >= 2 ? String(l).padStart(2, "0") : String(l);
			else {
				let t = [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
					"Oct",
					"Nov",
					"Dec"
				], n = [
					"January",
					"February",
					"March",
					"April",
					"May",
					"June",
					"July",
					"August",
					"September",
					"October",
					"November",
					"December"
				];
				d += e >= 5 ? n[a - 1][0] : e === 4 ? n[a - 1] : e === 3 ? t[a - 1] : e === 2 ? String(a).padStart(2, "0") : String(a);
			}
			continue;
		}
		if (e === "d" || e === "D") {
			let e = 0;
			for (; p < t.length && (t[p] === "d" || t[p] === "D");) e++, p++;
			d += e >= 2 ? String(o).padStart(2, "0") : String(o);
			continue;
		}
		if (e === "h" || e === "H") {
			let e = 0;
			for (; p < t.length && (t[p] === "h" || t[p] === "H");) e++, p++;
			d += e >= 2 ? String(c).padStart(2, "0") : String(c);
			continue;
		}
		if (e === "s" || e === "S") {
			let e = 0;
			for (; p < t.length && (t[p] === "s" || t[p] === "S");) e++, p++;
			d += e >= 2 ? String(u).padStart(2, "0") : String(u);
			continue;
		}
		d += e, p++;
	}
	return d;
}
function ai(e) {
	let t = [], n = "";
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		if (i === "\\" && r + 1 < e.length) {
			n += i + e[r + 1], r++;
			continue;
		}
		if (i === "\"") {
			for (n += i, r++; r < e.length && e[r] !== "\"";) n += e[r], r++;
			r < e.length && (n += e[r]);
			continue;
		}
		if (i === "[") {
			for (n += i, r++; r < e.length && e[r] !== "]";) n += e[r], r++;
			r < e.length && (n += e[r]);
			continue;
		}
		if (i === ";") {
			t.push(n), n = "";
			continue;
		}
		n += i;
	}
	return t.push(n), t;
}
function oi(e, t) {
	let n = [], r = 0, i = !1, a = !1;
	for (; r < t.length;) {
		let e = t[r];
		if (e === "\"") {
			r++;
			let e = "";
			for (; r < t.length && t[r] !== "\"";) e += t[r], r++;
			r < t.length && r++, n.push({
				kind: "lit",
				text: e
			});
			continue;
		}
		if (e === "\\" && r + 1 < t.length) {
			n.push({
				kind: "lit",
				text: t[r + 1]
			}), r += 2;
			continue;
		}
		if (e === "_" && r + 1 < t.length) {
			n.push({
				kind: "lit",
				text: " "
			}), r += 2;
			continue;
		}
		if (e === "*" && r + 1 < t.length) {
			r += 2;
			continue;
		}
		if (e === "[") {
			for (r++; r < t.length && t[r] !== "]";) r++;
			r < t.length && r++;
			continue;
		}
		if (e === "%") {
			a = !0, n.push({
				kind: "lit",
				text: "%"
			}), r++;
			continue;
		}
		if (e === "#" || e === "0" || e === "." || e === "," || e === "?") {
			let e = "";
			for (; r < t.length && (t[r] === "#" || t[r] === "0" || t[r] === "." || t[r] === "," || t[r] === "?");) e += t[r], r++;
			n.push({
				kind: "num",
				text: e
			}), i = !0;
			continue;
		}
		n.push({
			kind: "lit",
			text: e
		}), r++;
	}
	if (!i) return n.map((e) => e.text).join("");
	let o = a ? e * 100 : e, s = "";
	for (let e of n) e.kind === "num" && (s += e.text);
	let c = si(o, s), l = !1;
	return n.map((e) => e.kind === "lit" ? e.text : l ? "" : (l = !0, c)).join("");
}
function si(e, t) {
	let n = t.indexOf("."), r = n >= 0 ? t.slice(0, n) : t, i = n >= 0 ? t.slice(n + 1) : "", a = /,/.test(r), o = (i.match(/[#0?]/g) ?? []).length, s = (r.replace(/,/g, "").match(/0/g) ?? []).length, [c, l = ""] = Xr(e, o).split("."), u = c.padStart(s, "0"), d = a ? u.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : u;
	return o === 0 ? d : `${d}.${l.padEnd(o, "0")}`;
}
//#endregion
//#region packages/core/src/chart/legend-frame.ts
function ci(e, t, n, r, i = 0) {
	if (!((!t.legendFill && !t.legendFillColor || t.legendFillHidden === !0) && (!t.legendLineFill && !t.legendLineColor || t.legendLineHidden === !0))) {
		if (e.save(), t.legendFillHidden !== !0 && (t.legendFill || t.legendFillColor)) {
			let r = t.legendFill ? X(t.legendFill, e, n.x, n.y, n.w, n.h, i) : `#${t.legendFillColor}`;
			r && (e.fillStyle = r), r && e.fillRect(n.x, n.y, n.w, n.h);
		}
		if (t.legendLineHidden !== !0 && (t.legendLineFill || t.legendLineColor) && n.w > 0 && n.h > 0) {
			let a = Q(t.legendLineWidthEmu, r), o = t.legendLineFill ? X(t.legendLineFill, e, n.x, n.y, n.w, n.h, i) : t.legendLineColor ? `#${t.legendLineColor}` : null;
			if (!o) {
				e.restore();
				return;
			}
			e.strokeStyle = o, e.lineCap = t.legendLineCap === "rnd" ? "round" : t.legendLineCap === "sq" ? "square" : "butt", e.lineJoin = t.legendLineJoin === "round" || t.legendLineJoin === "bevel" ? t.legendLineJoin : "miter", e.setLineDash(J(t.legendLineCustomDash, t.legendLineDash, a)), Z(e, n.x, n.y, n.w, n.h, a, t.legendLineCompound);
		}
		e.restore();
	}
}
//#endregion
//#region packages/core/src/chart/plot-area-frame.ts
function li(e, t, r, i, a, o, s, c = 0) {
	if (t.plotAreaFillHidden !== !0) if (t.plotAreaFill?.fillType === "image") br(e, t.plotAreaFill, r, i, a, o, s, c);
	else {
		let n = t.plotAreaFill ? X(t.plotAreaFill, e, r, i, a, o, c) : t.plotAreaBg ? `#${t.plotAreaBg}` : null;
		n && (e.fillStyle = n, e.fillRect(r, i, a, o));
	}
	if (t.plotAreaLineHidden === !0 || !t.plotAreaLineFill && !t.plotAreaLineColor) return;
	let l = t.plotAreaLineWidthEmu ? Math.max(.5, t.plotAreaLineWidthEmu / n) * s : 1;
	e.save();
	let u = t.plotAreaLineFill ? X(t.plotAreaLineFill, e, r, i, a, o, c) : t.plotAreaLineColor ? `#${t.plotAreaLineColor}` : null;
	if (!u) {
		e.restore();
		return;
	}
	e.strokeStyle = u, e.setLineDash(J(t.plotAreaLineCustomDash, t.plotAreaLineDash, l)), e.lineCap = t.plotAreaLineCap === "rnd" ? "round" : t.plotAreaLineCap === "sq" ? "square" : "butt", e.lineJoin = t.plotAreaLineJoin === "round" || t.plotAreaLineJoin === "bevel" ? t.plotAreaLineJoin : "miter", Z(e, r, i, a, o, l, t.plotAreaLineCompound), e.restore();
}
//#endregion
export { Sn as $, St as $t, br as A, Vt as At, Qn as B, Mt as Bt, Dr as C, mn as Ct, mr as D, nn as Dt, pr as E, cn as Et, tr as F, qt as Ft, Kn as G, Jt as Gt, $n as H, Qt as Ht, rr as I, Ht as It, In as J, wt as Jt, U as K, Et as Kt, Jn as L, Lt, or as M, zt as Mt, er as N, Gt as Nt, hr as O, Yt as Ot, nr as P, Kt as Pt, Bn as Q, Ct as Qt, Zn as R, It as Rt, Nr as S, gn as St, _r as T, sn as Tt, qn as U, At as Ut, Xn as V, Ft as Vt, Gn as W, Zt as Wt, Vn as X, Tt as Xt, Fn as Y, Dt as Yt, zn as Z, kt as Zt, Y as _, _n as _t, ti as a, dt as an, En as at, J as b, ln as bt, Jr as c, u as cn, Pn as ct, Gr as d, o as dn, bn as dt, xt as en, Tn as et, Ur as f, yn as ft, Lr as g, xn as gt, Br as h, Mn as ht, ei as i, gt as in, kn as it, lr as j, Bt as jt, yr as k, Rt as kt, Yr as l, d as ln, H as lt, Z as m, Nn as mt, ci as n, ht as nn, wn as nt, $r as o, Be as on, jn as ot, Wr as p, On as pt, Ln as q, Ot as qt, ni as r, pt as rn, vn as rt, Xr as s, l as sn, An as st, li as t, mt as tn, Cn as tt, Q as u, a as un, Dn as ut, X as v, dn as vt, cr as w, hn as wt, kr as x, un as xt, Tr as y, fn as yt, Yn as z, Xt as zt };
