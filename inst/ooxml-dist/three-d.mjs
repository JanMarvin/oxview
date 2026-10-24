// optional-renderer: packages/core/src/chart/three-d-renderer.ts
import { $a as e, Ba as t, Bi as n, Ca as r, Cn as i, Fi as a, Ga as o, Ha as s, Ii as c, Ja as l, Ji as u, Ka as d, Ki as f, Li as p, Ln as m, Nt as h, Ot as g, Pi as _, Ra as v, Ri as y, Rn as b, Rr as x, Sa as S, Si as C, Ui as w, Va as T, Vi as E, Wa as D, Wi as O, Xi as k, Yi as A, Zi as j, _a as M, bn as N, ca as P, da as F, ea as I, eo as L, fa as R, gi as z, ha as B, hi as V, ia as H, ja as U, ka as W, l as ee, la as G, ma as K, mi as te, n as q, na as ne, no as J, oa as Y, on as X, pa as re, qi as Z, qt as ie, sa as ae, sn as oe, sr as se, t as ce, ta as le, v as ue, va as de, vi as fe, vn as pe, xa as me, xn as he, xt as ge, ya as _e, yn as ve, za as ye, zi as be, zn as xe, zr as Se } from "./plot-area-frame-D3JtHvov.js";
import { a as Ce, c as we, i as Te, m as Ee, n as De, o as Oe, p as ke, r as Ae, s as je, t as Me, u as Ne, v as Pe, y as Fe } from "./three-d-ByHGsYrX.js";
import { t as Ie } from "./renderer-module-contract-BuTx2FWJ.js";
function Le(t, n, r, i) {
	return e(t, i) ? r : n.chartexFormatIdx ?? i;
}
function Re(e, n, r, i, a) {
	let o = Le(e, n, i, a), c = l(e, "dataPoint3D", a), u = J(e, "dataPoint3D"), d = v(r?.chartexStyle, u, i);
	if (d !== void 0) return d;
	if (r?.fillHidden === !0) {
		let e = t(u);
		if (e !== void 0) return e;
	}
	if (r?.color === "00000000") return null;
	if (r?.color) return {
		fillType: "solid",
		color: r.color
	};
	let f = v(n.chartexStyle, u, o);
	return f === void 0 ? s(c, u, o, r?.chartexStyle, n.chartexStyle) : f;
}
var ze = 32;
function Be(e) {
	switch (e) {
		case "cylinder":
		case "cone":
		case "coneToMax":
		case "pyramid":
		case "pyramidToMax": return e;
		default: return "box";
	}
}
var Ve = (e) => Math.max(0, Math.min(1, e));
function He(e, t) {
	if (t.length < 3) return null;
	let n = e[t[0]];
	for (let r = 1; r + 1 < t.length; r++) for (let i = r + 1; i < t.length; i++) {
		let a = e[t[r]], o = e[t[i]], s = {
			x: a.x - n.x,
			y: a.y - n.y,
			depth: a.depth - n.depth
		}, c = {
			x: o.x - n.x,
			y: o.y - n.y,
			depth: o.depth - n.depth
		}, l = {
			x: s.y * c.depth - s.depth * c.y,
			y: s.depth * c.x - s.x * c.depth,
			depth: s.x * c.y - s.y * c.x
		}, u = Math.hypot(l.x, l.y, l.depth);
		if (u > 2 ** -52) return {
			x: l.x / u,
			y: l.y / u,
			depth: l.depth / u
		};
	}
	return null;
}
function Ue(e, t) {
	let n = e.reduce((t, n) => ({
		x: t.x + n.x / e.length,
		y: t.y + n.y / e.length,
		depth: t.depth + n.depth / e.length
	}), {
		x: 0,
		y: 0,
		depth: 0
	});
	return t.map((t) => {
		let r = He(e, t.indices);
		if (!r) return t;
		let i = t.indices.reduce((n, r) => ({
			x: n.x + e[r].x / t.indices.length,
			y: n.y + e[r].y / t.indices.length,
			depth: n.depth + e[r].depth / t.indices.length
		}), {
			x: 0,
			y: 0,
			depth: 0
		}), a = {
			x: i.x - n.x,
			y: i.y - n.y,
			depth: i.depth - n.depth
		};
		return r.x * a.x + r.y * a.y + r.depth * a.depth >= 0 ? t : {
			...t,
			indices: [...t.indices].reverse()
		};
	});
}
function We(e) {
	let { horizontal: t, crossStart: n, crossSize: r, baseCoord: i, endCoord: a, nearDepth: o, farDepth: s } = e;
	if (![
		n,
		r,
		i,
		a,
		o,
		s
	].every(Number.isFinite) || r <= 0 || i === a || o === s) return null;
	let c = Be(e.shape), l = c === "cylinder" || c === "cone" || c === "coneToMax", u = c !== "box" && c !== "cylinder", d = c === "coneToMax" || c === "pyramidToMax", f = l ? Math.max(8, Math.min(64, Math.trunc(e.roundSegments ?? ze))) : 4, p = Ve(e.baseScale ?? (d ? e.toMaxBaseScale ?? 1 : 1)), m = Ve(e.endScale ?? (u ? d ? e.toMaxEndScale ?? 0 : 0 : 1));
	if (p === 0 && m === 0) return null;
	let h = n + r / 2, g = r / 2, _ = (o + s) / 2, v = Math.abs(s - o) / 2, y = [], b = (e, n) => {
		if (n === 0) {
			let n = y.length;
			return y.push(t ? {
				x: e,
				y: h,
				depth: _
			} : {
				x: h,
				y: e,
				depth: _
			}), [n];
		}
		let r = [];
		for (let i = 0; i < f; i++) {
			let a = l ? i / f * Math.PI * 2 : Math.PI / 4 + i / f * Math.PI * 2, o = l ? 1 : Math.SQRT2, s = h + Math.cos(a) * g * n * o, c = _ + Math.sin(a) * v * n * o;
			r.push(y.length), y.push(t ? {
				x: e,
				y: s,
				depth: c
			} : {
				x: s,
				y: e,
				depth: c
			});
		}
		return r;
	}, x = b(i, p), S = b(a, m), C = l, w = [];
	x.length > 1 && e.omitBaseCap !== !0 && w.push({
		indices: x,
		role: "baseCap",
		smoothSurface: C
	}), S.length > 1 && e.omitEndCap !== !0 && w.push({
		indices: S,
		role: "endCap",
		smoothSurface: C
	});
	let T = [], E = Math.max(x.length, S.length);
	for (let e = 0; e < E; e++) {
		let t = (e + 1) % E, n = x.length === 1 ? x[0] : x[e], r = x.length === 1 ? x[0] : x[t], i = S.length === 1 ? S[0] : S[e], a = S.length === 1 ? S[0] : S[t], o = x.length === 1 ? [
			n,
			a,
			i
		] : S.length === 1 ? [
			n,
			r,
			i
		] : [
			n,
			r,
			a,
			i
		];
		w.push({
			indices: o,
			role: "side",
			smoothSurface: C,
			segmentIndex: e,
			baseRimEdge: x.length > 1 ? [n, r] : void 0,
			endRimEdge: S.length > 1 ? [i, a] : void 0
		}), T.push([n, i]);
	}
	return {
		shape: c,
		vertices: y,
		faces: Ue(y, w),
		silhouetteEdges: T
	};
}
function Ge(e) {
	let { x0: t, x1: n, lower0: r, lower1: i, upper0: a, upper1: o, nearDepth: s, farDepth: c, capStart: l, capEnd: u } = e;
	if (![
		t,
		n,
		r,
		i,
		a,
		o,
		s,
		c
	].every(Number.isFinite) || t === n || s === c) return null;
	n < t && ([t, n] = [n, t], [r, i] = [i, r], [a, o] = [o, a], [l, u] = [u, l]);
	let d = Math.min(s, c), f = Math.max(s, c), p = Math.min(r, a), m = Math.min(i, o), h = Math.max(r, a), g = Math.max(i, o);
	if (Math.max(h - p, g - m) < 1e-9) return null;
	let _ = [
		{
			x: t,
			y: p,
			depth: d
		},
		{
			x: n,
			y: m,
			depth: d
		},
		{
			x: n,
			y: g,
			depth: d
		},
		{
			x: t,
			y: h,
			depth: d
		},
		{
			x: t,
			y: p,
			depth: f
		},
		{
			x: n,
			y: m,
			depth: f
		},
		{
			x: n,
			y: g,
			depth: f
		},
		{
			x: t,
			y: h,
			depth: f
		}
	];
	return {
		shape: "areaStrip",
		vertices: _,
		faces: Ue(_, [
			{
				indices: [
					0,
					3,
					2,
					1
				],
				role: "side",
				smoothSurface: !1
			},
			{
				indices: [
					4,
					5,
					6,
					7
				],
				role: "side",
				smoothSurface: !1
			},
			{
				indices: [
					0,
					4,
					7,
					3
				],
				role: "baseCap",
				smoothSurface: !1
			},
			{
				indices: [
					1,
					2,
					6,
					5
				],
				role: "endCap",
				smoothSurface: !1
			},
			{
				indices: [
					0,
					1,
					5,
					4
				],
				role: "side",
				smoothSurface: !1
			},
			{
				indices: [
					3,
					7,
					6,
					2
				],
				role: "side",
				smoothSurface: !1
			}
		].filter((e) => (e.role !== "baseCap" || l) && (e.role !== "endCap" || u))),
		silhouetteEdges: []
	};
}
function Ke(e) {
	let t = e.upper0 - e.lower0, n = e.upper1 - e.lower1;
	if (Number.isFinite(t) && Number.isFinite(n) && t * n < 0) {
		let r = t / (t - n), i = e.x0 + (e.x1 - e.x0) * r, a = e.lower0 + (e.lower1 - e.lower0) * r;
		return [Ge({
			...e,
			x1: i,
			lower1: a,
			upper1: a,
			capEnd: !1
		}), Ge({
			...e,
			x0: i,
			lower0: a,
			upper0: a,
			capStart: !1
		})].filter((e) => e != null);
	}
	let r = Ge(e);
	return r ? [r] : [];
}
function qe(e) {
	let t = e.outline;
	if (t.length < 3 || t.length > 64 || ![e.nearDepth, e.farDepth].every(Number.isFinite) || Math.abs(e.nearDepth - e.farDepth) < 1e-9 || !t.every((e) => Number.isFinite(e.x) && Number.isFinite(e.y))) return null;
	let n = Math.min(e.nearDepth, e.farDepth), r = Math.max(e.nearDepth, e.farDepth), i = t.length, a = [...t.map((e) => ({
		...e,
		depth: n
	})), ...t.map((e) => ({
		...e,
		depth: r
	}))], o = Array.from({ length: i }, (e, t) => t), s = Array.from({ length: i }, (e, t) => i + t).reverse();
	return {
		shape: "lineRibbon",
		vertices: a,
		faces: Ue(a, [
			{
				indices: o,
				role: "side",
				smoothSurface: !1
			},
			{
				indices: s,
				role: "side",
				smoothSurface: !1
			},
			...Array.from({ length: i }, (e, t) => {
				let n = (t + 1) % i;
				return {
					indices: [
						t,
						n,
						i + n,
						i + t
					],
					role: "side",
					smoothSurface: !1
				};
			})
		]),
		silhouetteEdges: []
	};
}
function Je(e) {
	let { centerX: t, centerY: n, centerDepth: r, radius: i, modelDepth: a, thickness: o, startAngle: s, endAngle: c } = e;
	if (![
		t,
		n,
		r,
		i,
		a,
		o,
		s,
		c
	].every(Number.isFinite) || !(i > 0) || !(a > 0) || !(o > 0) || !(c > s)) return null;
	let l = Math.min(Math.PI * 2, c - s), u = l >= Math.PI * 2 - 1e-9, d = Math.max(2, Math.min(128, Math.trunc(e.segments ?? Math.ceil(ze * l / (Math.PI * 2))))), f = n - o / 2, p = n + o / 2, m = [{
		x: t,
		y: f,
		depth: r
	}, {
		x: t,
		y: p,
		depth: r
	}], h = [], g = [], _ = u ? d : d + 1;
	for (let e = 0; e < _; e++) {
		let n = s + l * e / d, o = t + Math.cos(n) * i, c = r + Math.sin(n) * i / a;
		h.push(m.length), m.push({
			x: o,
			y: f,
			depth: c
		}), g.push(m.length), m.push({
			x: o,
			y: p,
			depth: c
		});
	}
	let v = u ? [{
		indices: [...h],
		role: "baseCap",
		smoothSurface: !0
	}, {
		indices: [...g],
		role: "endCap",
		smoothSurface: !0
	}] : [
		{
			indices: [0, ...h],
			role: "baseCap",
			smoothSurface: !0
		},
		{
			indices: [1, ...g],
			role: "endCap",
			smoothSurface: !0
		},
		{
			indices: [
				0,
				1,
				g[0],
				h[0]
			],
			role: "baseCap",
			smoothSurface: !1
		},
		{
			indices: [
				0,
				h.at(-1),
				g.at(-1),
				1
			],
			role: "endCap",
			smoothSurface: !1
		}
	];
	for (let e = 0; e < d; e++) {
		let t = u ? (e + 1) % d : e + 1;
		v.push({
			indices: [
				h[e],
				g[e],
				g[t],
				h[t]
			],
			role: "side",
			smoothSurface: !0,
			segmentIndex: e,
			baseRimEdge: [h[e], h[t]],
			endRimEdge: [g[e], g[t]]
		});
	}
	return {
		shape: "pieSector",
		vertices: m,
		faces: Ue(m, v),
		silhouetteEdges: h.slice(0, u ? void 0 : -1).map((e, t) => [e, g[t]])
	};
}
function Ye(e, t) {
	if (![e, t].every(Number.isFinite)) return null;
	let n = t - e;
	if (n === 0) return e >= 0 && e <= 1 ? {
		startT: 0,
		endT: 1
	} : null;
	let r = -e / n, i = (1 - e) / n, a = Math.max(0, Math.min(r, i)), o = Math.min(1, Math.max(r, i));
	return a <= o ? {
		startT: a,
		endT: o
	} : null;
}
function Xe(e, t, n, r) {
	if (![
		e,
		t,
		n,
		r
	].every(Number.isFinite)) return [];
	let i = [0, 1], a = (e, t) => {
		let n = t - e;
		if (n !== 0) for (let t of [0, 1]) {
			let r = (t - e) / n;
			r > 0 && r < 1 && Number.isFinite(r) && i.push(r);
		}
	};
	a(e, t), a(n, r), i.sort((e, t) => e - t);
	let o = i.filter((e, t) => t === 0 || Math.abs(e - i[t - 1]) > 1e-12), s = (e, t, n) => e + (t - e) * n, c = (e) => Math.max(0, Math.min(1, e)), l = [];
	for (let i = 0; i + 1 < o.length; i++) {
		let a = o[i], u = o[i + 1], d = (a + u) / 2, f = c(s(e, t, d)), p = c(s(n, r, d));
		Math.abs(p - f) <= 1e-12 || l.push({
			startT: a,
			endT: u,
			lowerStart: c(s(e, t, a)),
			lowerEnd: c(s(e, t, u)),
			upperStart: c(s(n, r, a)),
			upperEnd: c(s(n, r, u))
		});
	}
	return l;
}
var Ze = (e) => ({
	minX: Math.min(...e.map((e) => e.x)),
	maxX: Math.max(...e.map((e) => e.x)),
	minY: Math.min(...e.map((e) => e.y)),
	maxY: Math.max(...e.map((e) => e.y))
}), Qe = (e, t) => {
	let n = !1;
	for (let r = 0, i = e.length - 1; r < e.length; i = r++) {
		let a = e[r], o = e[i], s = (a.x - t.x) * (o.y - t.y) - (a.y - t.y) * (o.x - t.x), c = Math.max(1, Math.abs(a.x), Math.abs(a.y), Math.abs(o.x), Math.abs(o.y));
		if (Math.abs(s) <= c * 1e-9 && t.x >= Math.min(a.x, o.x) - 1e-9 && t.x <= Math.max(a.x, o.x) + 1e-9 && t.y >= Math.min(a.y, o.y) - 1e-9 && t.y <= Math.max(a.y, o.y) + 1e-9) return !0;
		a.y > t.y != o.y > t.y && t.x < (o.x - a.x) * (t.y - a.y) / (o.y - a.y) + a.x && (n = !n);
	}
	return n;
}, $e = (e, t, n, r) => {
	let i = {
		x: t.x - e.x,
		y: t.y - e.y
	}, a = {
		x: r.x - n.x,
		y: r.y - n.y
	}, o = i.x * a.y - i.y * a.x;
	if (Math.abs(o) < 1e-12) return null;
	let s = {
		x: n.x - e.x,
		y: n.y - e.y
	}, c = (s.x * a.y - s.y * a.x) / o, l = (s.x * i.y - s.y * i.x) / o;
	return c < -1e-9 || c > 1.000000001 || l < -1e-9 || l > 1.000000001 ? null : {
		x: e.x + i.x * c,
		y: e.y + i.y * c
	};
};
function et(e, t, n, r) {
	let i = [], a = (e) => {
		i.length >= 12 || i.some((t) => Math.hypot(t.x - e.x, t.y - e.y) < 1e-7) || i.push(e);
	}, o = {
		x: (Math.max(n.minX, r.minX) + Math.min(n.maxX, r.maxX)) / 2,
		y: (Math.max(n.minY, r.minY) + Math.min(n.maxY, r.maxY)) / 2
	};
	Qe(e, o) && Qe(t, o) && a(o);
	for (let n of e) Qe(t, n) && a(n);
	for (let n of t) Qe(e, n) && a(n);
	for (let n = 0; n < e.length && i.length < 12; n++) for (let r = 0; r < t.length && i.length < 12; r++) {
		let i = $e(e[n], e[(n + 1) % e.length], t[r], t[(r + 1) % t.length]);
		i && a(i);
	}
	return i;
}
function tt(e, t) {
	let n = e.cameraDepths;
	if (!n || n.length !== e.points.length || e.points.length < 3) return e.cameraDepth;
	let r = e.cameraWeights?.length === e.points.length ? e.cameraWeights : e.points.map(() => 1), i = e.points[0];
	for (let a = 1; a + 1 < e.points.length; a++) {
		let o = e.points[a], s = e.points[a + 1], c = (o.y - s.y) * (i.x - s.x) + (s.x - o.x) * (i.y - s.y);
		if (Math.abs(c) < 1e-12) continue;
		let l = ((o.y - s.y) * (t.x - s.x) + (s.x - o.x) * (t.y - s.y)) / c, u = ((s.y - i.y) * (t.x - s.x) + (i.x - s.x) * (t.y - s.y)) / c, d = 1 - l - u;
		if (Math.min(l, u, d) < -1e-7) continue;
		let f = l * r[0] + u * r[a] + d * r[a + 1];
		if (Math.abs(f) > 2 ** -52) return (l * n[0] * r[0] + u * n[a] * r[a] + d * n[a + 1] * r[a + 1]) / f;
	}
	return e.cameraDepth;
}
function nt(e) {
	if (e.length < 2) return [...e];
	let t = [...e.keys()].sort((t, n) => e[t].cameraDepth - e[n].cameraDepth || t - n), n = e.map((e) => Ze(e.points)), r = [...e.keys()].sort((e, t) => n[e].minX - n[t].minX || e - t), i = e.map(() => /* @__PURE__ */ new Set()), a = e.map(() => 0), o = [], s = 0;
	for (let c of r) {
		for (let e = o.length - 1; e >= 0; e--) n[o[e]].maxX < n[c].minX - 1e-9 && o.splice(e, 1);
		for (let r of o) {
			if (++s > 2e5) return t.map((t) => e[t]);
			if (n[r].maxY < n[c].minY - 1e-9 || n[c].maxY < n[r].minY - 1e-9) continue;
			let o = et(e[r].points, e[c].points, n[r], n[c]), l = 0;
			for (let t of o) {
				let n = tt(e[r], t) - tt(e[c], t), i = 1e-8 * Math.max(1, Math.abs(e[r].cameraDepth), Math.abs(e[c].cameraDepth));
				if (Math.abs(n) <= i) continue;
				let a = n < 0 ? -1 : 1;
				if (l !== 0 && l !== a) {
					l = 0;
					break;
				}
				l = a;
			}
			if (l === 0) continue;
			let u = l < 0 ? r : c, d = l < 0 ? c : r;
			i[u].has(d) || (i[u].add(d), a[d]++);
		}
		o.push(c);
	}
	let c = new Set(e.keys()), l = [];
	for (; c.size;) {
		let n = t.find((e) => c.has(e) && a[e] === 0);
		if (n ??= t.find((e) => c.has(e)), n == null) break;
		c.delete(n), l.push(e[n]);
		for (let e of i[n]) a[e]--;
	}
	return l;
}
var Q = 1e-9, rt = 1e4, it = (e, t, n) => ({
	x: e.x + (t.x - e.x) * n,
	y: e.y + (t.y - e.y) * n,
	cameraDepth: e.cameraDepth + (t.cameraDepth - e.cameraDepth) * n,
	cameraWeight: (e.cameraWeight ?? 1) + ((t.cameraWeight ?? 1) - (e.cameraWeight ?? 1)) * n
}), at = (e, t) => Math.hypot(e.x - t.x, e.y - t.y) <= Q;
function ot(e, t, n = 0) {
	let r = t.filter((e) => Number.isFinite(e) && e > Q);
	if (r.length === 0) return e.length >= 2 ? [[...e]] : [];
	r.length % 2 == 1 && r.push(...r);
	let i = [], a = 0, o = r[0], s = !0, c = r.reduce((e, t) => e + t, 0), l = c > Q && Number.isFinite(n) ? (n % c + c) % c : 0;
	for (; l > Q;) {
		let e = Math.min(l, o);
		l -= e, o -= e, o <= Q && (a = (a + 1) % r.length, o = r[a], s = a % 2 == 0);
	}
	let u = null;
	for (let t = 0; t + 1 < e.length; t++) {
		let n = e[t], c = e[t + 1], l = Math.hypot(c.x - n.x, c.y - n.y);
		if (!(l > Q)) continue;
		let d = 0;
		for (; d < l - Q;) {
			let e = Math.min(o, l - d), t = it(n, c, d / l), f = it(n, c, (d + e) / l);
			if (s && (u ??= [], (u.length === 0 || !at(u.at(-1), t)) && u.push(t), u.push(f)), d += e, o -= e, o <= Q) {
				if (s && u && u.length >= 2) {
					if (i.length >= 1e4) return null;
					i.push(u);
				}
				u = null, a = (a + 1) % r.length, o = r[a], s = a % 2 == 0;
			}
		}
	}
	if (s && u && u.length >= 2) {
		if (i.length >= 1e4) return null;
		i.push(u);
	}
	if (i.length > 1 && at(e[0], e.at(-1)) && at(i[0][0], e[0]) && at(i.at(-1).at(-1), e.at(-1))) {
		let e = i.shift(), t = i.pop();
		i.unshift([...t, ...e.slice(1)]);
	}
	return i;
}
var st = (e, t) => ({
	kind: e,
	points: t.map(({ x: e, y: t }) => ({
		x: e,
		y: t
	})),
	cameraDepths: t.map((e) => e.cameraDepth),
	cameraWeights: t.map((e) => e.cameraWeight ?? 1),
	cameraDepth: t.reduce((e, t) => e + t.cameraDepth, 0) / t.length
}), ct = (e, t, n) => {
	let r = [];
	for (let n = 0; n < 12; n++) {
		let i = Math.PI * 2 * n / 12;
		r.push({
			...e,
			x: e.x + Math.cos(i) * t,
			y: e.y + Math.sin(i) * t
		});
	}
	return st(n, r);
};
function lt(e, t, n) {
	let r = Number.isFinite(n.width) ? Math.max(0, n.width) : 0;
	if (!(r > Q) || t.length < 3) return null;
	let i = r / 2;
	if ((n.lineJoin ?? "miter") === "round") return ct(e, i, "join");
	let a = [];
	for (let n of t) {
		let t = n.x - e.x, r = n.y - e.y, o = Math.hypot(t, r);
		if (!(o > Q)) continue;
		let s = -r / o * i, c = t / o * i;
		a.push({
			...e,
			x: e.x + s,
			y: e.y + c
		}, {
			...e,
			x: e.x - s,
			y: e.y - c
		});
	}
	if (a.length < 3) return null;
	a.sort((e, t) => e.x - t.x || e.y - t.y);
	let o = (e, t, n) => (t.x - e.x) * (n.y - e.y) - (t.y - e.y) * (n.x - e.x), s = [];
	for (let e of a) {
		for (; s.length >= 2 && o(s.at(-2), s.at(-1), e) <= Q;) s.pop();
		s.push(e);
	}
	let c = [];
	for (let e of [...a].reverse()) {
		for (; c.length >= 2 && o(c.at(-2), c.at(-1), e) <= Q;) c.pop();
		c.push(e);
	}
	let l = [...s.slice(0, -1), ...c.slice(0, -1)];
	return l.length >= 3 ? st("join", l) : null;
}
var ut = (e, t, n, r) => {
	let i = t.x * r.y - t.y * r.x;
	if (Math.abs(i) <= Q) return null;
	let a = {
		x: n.x - e.x,
		y: n.y - e.y
	}, o = (a.x * r.y - a.y * r.x) / i;
	return {
		x: e.x + t.x * o,
		y: e.y + t.y * o
	};
};
function dt(e, t) {
	let n = Number.isFinite(t.width) ? Math.max(0, t.width) : 0;
	if (!(n > Q) || e.length < 2) return [];
	let r = n / 2, i = t.lineCap ?? "butt", a = t.lineJoin ?? "miter", o = Math.max(1, t.miterLimit ?? 10), s = [], c = ot(e, t.dash ?? [], t.dashOffset);
	if (c == null) return null;
	let l = (e) => s.length >= 1e4 ? !1 : (s.push(e), !0);
	for (let n = 0; n < c.length; n++) {
		let s = c[n], u = s.length > 2 && at(s[0], s.at(-1)), d = n === 0 && at(s[0], e[0]) ? t.startCap ?? i : i, f = n + 1 === c.length && at(s.at(-1), e.at(-1)) ? t.endCap ?? i : i, p = [];
		for (let e = 0; e + 1 < s.length; e++) {
			let t = s[e], n = s[e + 1], r = Math.hypot(n.x - t.x, n.y - t.y);
			p.push(r > Q ? {
				x: (n.x - t.x) / r,
				y: (n.y - t.y) / r
			} : null);
		}
		for (let e = 0; e + 1 < s.length; e++) {
			let n = p[e];
			if (!n) continue;
			let i = {
				x: -n.y * r,
				y: n.x * r
			}, a = e === 0, o = e + 2 === s.length, c = Math.min(.5, r / 2), m = u || !a || t.overlapStart === !0, h = u || !o || t.overlapEnd === !0, g = !u && a && d === "square" ? r : m ? c : 0, _ = !u && o && f === "square" ? r : h ? c : 0, v = {
				...s[e],
				x: s[e].x - n.x * g,
				y: s[e].y - n.y * g
			}, y = {
				...s[e + 1],
				x: s[e + 1].x + n.x * _,
				y: s[e + 1].y + n.y * _
			};
			if (!l(st("segment", [
				{
					...v,
					x: v.x + i.x,
					y: v.y + i.y
				},
				{
					...y,
					x: y.x + i.x,
					y: y.y + i.y
				},
				{
					...y,
					x: y.x - i.x,
					y: y.y - i.y
				},
				{
					...v,
					x: v.x - i.x,
					y: v.y - i.y
				}
			]))) return null;
		}
		if (!u && d === "round" && !l(ct(s[0], r, "cap")) || !u && f === "round" && !l(ct(s.at(-1), r, "cap"))) return null;
		let m = (e, t, n) => {
			if (!t || !n) return !0;
			let i = t.x * n.y - t.y * n.x;
			if (Math.abs(i) <= Q) return !0;
			if (a === "round") return l(ct(e, r, "join"));
			let s = i > 0 ? -1 : 1, c = {
				...e,
				x: e.x + -t.y * r * s,
				y: e.y + t.x * r * s
			}, u = {
				...e,
				x: e.x + -n.y * r * s,
				y: e.y + n.x * r * s
			};
			if (a === "miter") {
				let i = ut(c, t, u, n);
				if (i && Math.hypot(i.x - e.x, i.y - e.y) <= r * o) return !!l(st("join", [
					c,
					{
						...e,
						...i
					},
					u
				]));
			}
			return l(st("join", [
				c,
				e,
				u
			]));
		};
		for (let e = 1; e + 1 < s.length; e++) if (!m(s[e], p[e - 1], p[e])) return null;
		if (u && !m(s[0], p.at(-1) ?? null, p[0] ?? null)) return null;
	}
	return s;
}
var ft = 1e-9, pt = (e, t) => Math.hypot(e.x - t.x, e.y - t.y, e.depth - t.depth) <= ft, mt = (e, t) => e.x - t.x || e.y - t.y || e.depth - t.depth, ht = (e, t) => {
	let n = Math.min(e.length, t.length);
	for (let r = 0; r < n; r++) {
		let n = mt(e[r], t[r]);
		if (n !== 0) return n;
	}
	return e.length - t.length;
};
function gt(e) {
	let t = [...e].reverse();
	return ht(e, t) <= 0 ? e : t;
}
function _t(e) {
	let t = pt(e[0], e.at(-1)) ? e.slice(0, -1) : [...e];
	if (t.length === 0) return [];
	let n = 0;
	for (let e = 1; e < t.length; e++) mt(t[e], t[n]) < 0 && (n = e);
	let r = t.map((e, r) => t[(n + r) % t.length]), i = t.map((e, r) => t[(n - r + t.length) % t.length]), a = ht(r, i) <= 0 ? r : i;
	return [...a, a[0]];
}
function vt(e) {
	let t = [], n = (e) => {
		let n = t.find((t) => pt(t.point, e));
		if (n) return mt(e, n.point) < 0 && (n.point = e), n;
		let r = {
			point: e,
			edges: [],
			order: -1
		};
		return t.push(r), r;
	}, r = [];
	for (let [t, i] of e) {
		if (pt(t, i)) continue;
		let e = n(t), a = n(i);
		e !== a && r.push([e, a]);
	}
	t.sort((e, t) => mt(e.point, t.point)), t.forEach((e, t) => {
		e.order = t;
	});
	let i = [], a = /* @__PURE__ */ new Set();
	for (let [e, t] of r) {
		let n = e.order < t.order ? e : t, r = e.order < t.order ? t : e, o = `${n.order}:${r.order}`;
		a.has(o) || (a.add(o), i.push({
			first: n,
			second: r,
			key: o
		}));
	}
	i.sort((e, t) => e.key.localeCompare(t.key)), i.forEach((e, t) => {
		e.first.edges.push(t), e.second.edges.push(t);
	});
	for (let e of t) e.edges.sort((e, t) => e - t);
	let o = /* @__PURE__ */ new Set(), s = (e, t) => {
		let n = [e.point], r = e, a = t;
		for (; !o.has(a);) {
			o.add(a);
			let e = i[a], t = e.first === r ? e.second : e.first;
			if (n.push(t.point), t.edges.length !== 2) break;
			let s = t.edges.find((e) => !o.has(e));
			if (s === void 0) break;
			r = t, a = s;
		}
		return n;
	}, c = [];
	for (let e of t) if (e.edges.length !== 2) for (let t of e.edges) o.has(t) || c.push(gt(s(e, t)));
	for (let e = 0; e < i.length; e++) {
		if (o.has(e)) continue;
		let t = i[e], n = t.first.order <= t.second.order ? t.first : t.second;
		c.push(_t(s(n, e)));
	}
	let l = t.filter((e) => e.edges.length > 2).map((e) => ({
		point: e.point,
		neighbours: e.edges.map((t) => {
			let n = i[t];
			return n.first === e ? n.second.point : n.first.point;
		}).sort(mt)
	}));
	return {
		paths: c.sort(ht),
		junctions: l
	};
}
function yt(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.legendEntries ?? []) t.set(n.idx, n);
	return t;
}
function bt(e, t, n) {
	let r = H(t?.fontSizeHpt ?? e.legendFontSizeHpt, n) ?? 9 * n, i = t?.fontFace ?? e.legendFontFace, a = t?.fontBold ?? e.legendFontBold ?? !1;
	return {
		fontPx: r,
		font: `${t?.fontItalic ?? e.legendFontItalic ?? !1 ? "italic " : ""}${a ? "bold " : ""}${r}px ${Lt(e, i)}`,
		color: t?.fontColor ? `#${t.fontColor}` : e.legendFontColor ? `#${e.legendFontColor}` : "#595959"
	};
}
var xt = [
	"4472C4",
	"ED7D31",
	"70AD47",
	"A5A5A5",
	"FFC000",
	"5B9BD5"
], St = oe, Ct = X, wt = new Set([
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
	"stackedBarHPct"
]);
function Tt(e, t) {
	let n = Number.isFinite(t) && t > 0 ? t / U : 1, r = Number.isFinite(e) && e >= 0 ? e / W : 0;
	return Math.max(.25, r) * n;
}
function Et(e, t) {
	let n = Number.isSafeInteger(t) && t > 0 ? t : 0, r = Array.from({ length: n }, () => []);
	for (let t of e) {
		let e = t.categoryIndex;
		Number.isSafeInteger(e) && e >= 0 && e < n && r[e].push(t);
	}
	return r;
}
var Dt = (e, t) => `#${t?.color ?? xt[e % xt.length]}`;
function Ot(e, t, n) {
	let r = 0;
	for (let i of e) for (let e of [t(i), n(i)]) {
		if (e == null) continue;
		let t = fe(e);
		if (e.fillType === "gradient" && t > St || t > Ct - r) return !1;
		r += t;
	}
	return !0;
}
function kt(e, t) {
	let n = Array.from({ length: t }, () => ({
		maxMagnitude: 0,
		scaledTotal: 0
	}));
	for (let r of e.series) for (let e = 0; e < t; e++) {
		let t = r.values[e];
		t != null && Number.isFinite(t) && (n[e].maxMagnitude = Math.max(n[e].maxMagnitude, Math.abs(t)));
	}
	for (let r of e.series) for (let e = 0; e < t; e++) {
		let t = r.values[e], i = n[e].maxMagnitude;
		t != null && Number.isFinite(t) && i > 0 && (n[e].scaledTotal += Math.abs(t) / i);
	}
	return n;
}
function At(e, t, n, r) {
	let i = e.series[t]?.values[n] ?? 0;
	if (!Number.isFinite(i)) return 0;
	if (!r) return i;
	let { maxMagnitude: a, scaledTotal: o } = r[n] ?? {
		maxMagnitude: 0,
		scaledTotal: 0
	};
	return a > 0 && o > 0 ? i / a / o * 100 : 0;
}
function jt(e, t) {
	let n = e + t;
	return Number.isFinite(n) ? n : t < 0 ? -Number.MAX_VALUE : Number.MAX_VALUE;
}
function Mt(e) {
	let t = [];
	for (let [n, r] of [
		[e.threeD?.floor, "floor"],
		[e.threeD?.sideWall, "wall"],
		[e.threeD?.backWall, "wall"]
	]) {
		let i = d(e, n, r);
		t.push({
			fill: i.fill,
			line: i.line
		});
	}
	if (e.chartType === "pie") {
		let n = e.series[0];
		if (n) {
			let r = new Map(n.dataPointOverrides?.map((e) => [e.idx, e]) ?? []);
			for (let i = 0; i < n.values.length; i++) {
				let a = n.values[i];
				if (a == null || !Number.isFinite(a) || Math.abs(a) <= 0) continue;
				let o = $(e, n, r.get(i), i, 0);
				t.push({
					fill: o.fill,
					line: o.lineFill
				});
			}
		}
	} else if (e.chartType === "clusteredBar" || e.chartType === "clusteredBarH" || e.chartType.startsWith("stackedBar")) {
		let n = e.chartType.startsWith("stacked"), r = e.chartType.endsWith("Pct"), i = n || e.dispBlanksAs === "zero", a = e.valAxisLogBase != null && Number.isFinite(e.valAxisLogBase) && e.valAxisLogBase >= 2, o = Math.max(1, e.categories.length, ...e.series.map((e) => Math.max(e.values.length, e.categories?.length ?? 0))), s = r ? kt(e, o) : void 0, c = (t, n) => {
			if (t === n) return !1;
			let r = Math.min(t, n), i = Math.max(t, n), o = e.valMin, s = e.valMax;
			return o != null && Number.isFinite(o) && i <= o || s != null && Number.isFinite(s) && r >= s ? !1 : !a || i > 0;
		}, l = Array(o).fill(0), u = Array(o).fill(0);
		for (let r = 0; r < e.series.length; r++) {
			let d = e.series[r], f = new Map(d.dataPointOverrides?.map((e) => [e.idx, e]) ?? []);
			for (let p = 0; p < o; p++) {
				let o = d.values[p];
				if (!(o != null && Number.isFinite(o) && (!a || o > 0) || o == null && i)) continue;
				let m = At(e, r, p, s), h = n ? m >= 0 ? l[p] : u[p] : 0, g = jt(h, m);
				if (n && (m >= 0 ? l[p] = g : u[p] = g), !c(h, g)) continue;
				let _ = $(e, d, f.get(p), p, r);
				t.push({
					fill: _.fill,
					line: _.lineFill
				});
			}
		}
	} else {
		let n = e.chartType.toLowerCase().includes("area"), r = e.chartType.startsWith("stacked"), i = e.chartType.endsWith("Pct"), a = r || e.dispBlanksAs === "zero", o = e.valAxisLogBase != null && Number.isFinite(e.valAxisLogBase) && e.valAxisLogBase >= 2, s = Math.max(e.categories.length, ...e.series.map((e) => Math.max(e.categories?.length ?? 0, e.values.length))), c = i ? kt(e, s) : void 0, l = e.series.map(() => Array(s).fill(0));
		if (r) {
			let t = Array(s).fill(0), n = Array(s).fill(0);
			for (let r = 0; r < e.series.length; r++) for (let i = 0; i < s; i++) {
				let a = At(e, r, i, c), o = jt(a >= 0 ? t[i] : n[i], a);
				l[r][i] = o, a >= 0 ? t[i] = o : n[i] = o;
			}
		}
		for (let i = 0; i < e.series.length; i++) {
			let u = e.series[i], d = new Map(u.dataPointOverrides?.map((e) => [e.idx, e]) ?? []), f = s, p = 0, m = null, h = !1, g = !1;
			for (let s = 0; s < f; s++) {
				let f = u.values[s];
				if (f != null && Number.isFinite(f) && (!o || f > 0) || f == null && a) {
					p++;
					let a = r ? l[i][s] : At(e, i, s, c), o = m == null ? a : Math.min(m, a), f = m == null ? a : Math.max(m, a), _ = e.valMin != null && Number.isFinite(e.valMin) && f <= e.valMin || e.valMax != null && Number.isFinite(e.valMax) && o >= e.valMax;
					if (p >= 2 && (n || u.smooth === !0 || !_)) {
						if (h = !0, n) break;
						let r = d.get(s);
						if (Pt(r)) {
							let n = $(e, u, r, s, i);
							t.push({
								fill: void 0,
								line: n.lineFill
							});
						} else g = !0;
					}
					m = a;
				} else (e.dispBlanksAs ?? "gap") === "gap" && (p = 0, m = null);
			}
			if (!h) continue;
			let _ = $(e, u, void 0, i, i);
			n ? t.push({
				fill: _.fill,
				line: _.lineFill
			}) : g && t.push({
				fill: void 0,
				line: _.lineFill
			});
		}
	}
	return Ot(t, (e) => e.fill, (e) => e.line);
}
function Nt(e, t) {
	return e?.fillType === "solid" ? {
		color: `#${e.color}`,
		fill: void 0
	} : {
		color: t,
		fill: e
	};
}
function $(t, n, r, i, a, o = !0) {
	let s = o && n.dataPointColors?.[i] ? `#${n.dataPointColors[i]}` : Dt(a, n), c = e(t, a) ? i : n.chartexFormatIdx ?? a, u = n.seriesType ?? t.chartType, d = u === "line" || u === "stackedLine" || u === "stackedLinePct", f = l(t, "dataPoint3D", a), p = J(t, "dataPoint3D"), m, h = s, g = Re(t, n, r, i, a);
	g !== void 0 && ({color: h, fill: m} = Nt(g, h));
	let _, v = null, y = ye(r?.chartexStyle, p, i);
	if (y === void 0 && r?.lineHidden === !0 && (y = T(p)), y !== void 0) y?.fillType === "solid" ? v = `#${y.color}` : _ = y;
	else if (r?.lineColor) v = `#${r.lineColor}`;
	else {
		let e = ye(n.chartexStyle, p, c);
		if (e === void 0 && n.lineHidden === !0 && (e = T(p)), e !== void 0) e?.fillType === "solid" ? v = `#${e.color}` : _ = e;
		else if (n.lineColor) v = `#${n.lineColor}`;
		else if (d) _ = m === null ? null : m;
		else {
			let e = D(f, p, c, r?.chartexStyle, n.chartexStyle);
			e !== void 0 && (e?.fillType === "solid" ? v = `#${e.color}` : _ = e);
		}
	}
	let b = d ? void 0 : f, x = r?.chartexStyle?.lineCap ?? n.chartexStyle?.lineCap ?? b?.lineCap, S = r?.chartexStyle?.lineJoin ?? n.chartexStyle?.lineJoin ?? b?.lineJoin, C = L(r?.lineDash == null ? r?.chartexStyle : {
		lineDash: r.lineDash,
		lineDashAuthored: !0
	}, n.chartexStyle, b);
	return {
		color: h,
		fill: m,
		lineColor: v,
		lineFill: _,
		lineWidthEmu: r?.lineWidthEmu ?? r?.chartexStyle?.lineWidthEmu ?? n.lineWidthEmu ?? n.chartexStyle?.lineWidthEmu ?? b?.lineWidthEmu,
		lineDash: C?.lineDash,
		lineCustomDash: C?.lineCustomDash,
		lineCap: x === "rnd" ? "round" : x === "sq" ? "square" : "butt",
		lineJoin: S === "round" || S === "bevel" ? S : "miter"
	};
}
function Pt(e) {
	if (!e) return !1;
	let t = e.chartexStyle;
	return e.lineHidden != null || e.lineColor != null || e.lineWidthEmu != null || e.lineDash != null || t?.linePaintAuthored === !0 || t?.lineHidden != null || t?.lineNoStyle === !0 || t?.lineColors?.some((e) => e != null) === !0 || t?.linePaints?.some((e) => e != null) === !0 || t?.lineWidthEmu != null || t?.lineDash != null || t?.lineCustomDash != null || t?.lineCap != null || t?.lineJoin != null;
}
function Ft(e, t) {
	let n = e.cameraNormal(t);
	if (!n) return 1;
	let r = {
		x: -.2,
		y: .25,
		z: 1
	}, i = Math.hypot(r.x, r.y, r.z), a = Math.max(0, (n.x * r.x + n.y * r.y + n.z * r.z) / i);
	return Math.max(.78, Math.min(1, .78 + .24 * a));
}
var It = (e) => `"${e && !e.startsWith("+") ? e.replace(/["\\]/g, "") : "Arial"}"`, Lt = (e, t) => It(ge(e, t)), Rt = (e, t, n = "minor") => It((t?.startsWith("+mj-") ? e.themeMajorFontLatin : t?.startsWith("+mn-") ? e.themeMinorFontLatin : t) ?? (n === "major" ? e.themeMajorFontLatin : e.themeMinorFontLatin));
function zt(e, t) {
	if (t.length) {
		e.beginPath(), e.moveTo(t[0].x, t[0].y);
		for (let n = 1; n < t.length; n++) e.lineTo(t[n].x, t[n].y);
		e.closePath();
	}
}
var Bt = (e) => e === "transparent" || e === "#00000000" || e === "rgba(0,0,0,0)";
function Vt(e, t, n, r) {
	Bt(n) || (zt(e, t), e.fillStyle = n, e.fill(), r > 0 && (zt(e, t), e.fillStyle = `rgba(0,0,0,${r})`, e.fill()));
}
function Ht(e, t, n, r, i, a, o, s, c, l, u, d) {
	return Ke({
		x0: t,
		x1: n,
		lower0: r,
		lower1: i,
		upper0: a,
		upper1: o,
		nearDepth: s,
		farDepth: c,
		capStart: u,
		capEnd: d
	}).flatMap((t) => Wt(e, t, l).map((e) => ({
		...e,
		outline: !1,
		outlineSegments: void 0
	})));
}
function Ut(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m = !1, h = !1, g, _) {
	if (![
		r,
		i,
		a,
		o,
		s,
		c,
		l,
		u
	].every(Number.isFinite) || a <= 0 || o <= 0 || s === c) return [];
	let v = We({
		shape: t,
		horizontal: n,
		crossStart: n ? i : r,
		crossSize: n ? o : a,
		baseCoord: s,
		endCoord: c,
		nearDepth: l,
		farDepth: u,
		baseScale: f,
		endScale: p,
		omitBaseCap: m,
		omitEndCap: h
	});
	return v ? Wt(e, v, d, g, _) : [];
}
function Wt(e, t, n, r, i, a = !1) {
	if (i?.exceeded) return [];
	let o = t.faces.map((r) => {
		let i = r.indices.map((e) => t.vertices[e]), a = e.cameraFacing(i);
		if (!a) return {
			meshFace: r,
			facing: a,
			face: null
		};
		let o = i.map((t) => e.project(t.x, t.y, t.depth)), s = o.reduce((e, t, n) => {
			let r = o[(n + 1) % o.length];
			return e + t.x * r.y - t.y * r.x;
		}, 0);
		return !Number.isFinite(s) || Math.abs(s) < 1e-7 ? {
			meshFace: r,
			facing: a,
			face: null
		} : {
			meshFace: r,
			facing: a,
			face: {
				points: o,
				color: Ne(n, Ft(e, i)),
				paintRole: "fill",
				shade: 0,
				cameraDepth: i.reduce((t, n) => t + e.cameraDepth(n.x, n.y, n.depth), 0) / i.length,
				cameraDepths: i.map((t) => e.cameraDepth(t.x, t.y, t.depth)),
				cameraWeights: i.map((t) => e.cameraProjectionWeight(t.x, t.y, t.depth)),
				outline: !1
			}
		};
	}), s = a ? [] : o.map((e) => e.face).filter((e) => e != null);
	if (i) {
		if (s.length > i.remaining) return i.exceeded = !0, [];
		i.remaining -= s.length;
	}
	let c = /* @__PURE__ */ new Map(), l = (e, t) => {
		if (e === t) return;
		let n = e < t ? `${e}:${t}` : `${t}:${e}`;
		c.has(n) || c.set(n, [e, t]);
	};
	for (let e of o) {
		if (!e.facing || !e.face) continue;
		let { indices: t, smoothSurface: n, role: r } = e.meshFace;
		if (!(n && r === "side")) for (let e = 0; e < t.length; e++) l(t[e], t[(e + 1) % t.length]);
	}
	let u = o.filter((e) => e.meshFace.role === "side").sort((e, t) => (e.meshFace.segmentIndex ?? 0) - (t.meshFace.segmentIndex ?? 0));
	if (t.silhouetteEdges.length === u.length && u.length > 0) for (let e = 0; e < u.length; e++) {
		let n = u[(e + u.length - 1) % u.length], r = u[e];
		if (n.facing === r.facing || !(r.facing ? r.face : n.face)) continue;
		let [i, a] = t.silhouetteEdges[e];
		l(i, a);
	}
	let d = o.some((e) => e.meshFace.role === "baseCap" && e.facing && e.face != null), f = o.some((e) => e.meshFace.role === "endCap" && e.facing && e.face != null);
	for (let e of u) {
		if (!e.facing || !e.face) continue;
		let t = [d ? void 0 : e.meshFace.baseRimEdge, f ? void 0 : e.meshFace.endRimEdge].filter((e) => e != null);
		for (let [e, n] of t) l(e, n);
	}
	let p = vt([...c.values()].map(([e, n]) => [t.vertices[e], t.vertices[n]]));
	if (!r) return s;
	let m = (e, t) => Math.hypot(e.x - t.x, e.y - t.y, e.depth - t.depth) <= 1e-9, h = (e) => p.junctions.some((t) => m(t.point, e));
	for (let t of p.paths) {
		let n = t.map((t) => e.project(t.x, t.y, t.depth)), a = t.map((t) => e.cameraDepth(t.x, t.y, t.depth)), o = t.map((t) => e.cameraProjectionWeight(t.x, t.y, t.depth)), c = dt(n.map((e, t) => ({
			...e,
			cameraDepth: a[t],
			cameraWeight: o[t]
		})), {
			width: r.width,
			dash: r.dash,
			lineCap: r.cap,
			startCap: h(t[0]) ? "butt" : r.cap,
			endCap: h(t.at(-1)) ? "butt" : r.cap,
			overlapStart: h(t[0]),
			overlapEnd: h(t.at(-1)),
			lineJoin: r.join
		});
		if (!c || i && c.length > i.remaining) return i && (i.exceeded = !0), [];
		i && (i.remaining -= c.length), s.push(...c.map((e) => {
			let t = 1e-6 * Math.max(1, Math.abs(e.cameraDepth));
			return {
				points: e.points,
				color: r.color,
				paintRole: "outline",
				shade: 0,
				cameraDepth: e.cameraDepth + t,
				cameraDepths: e.cameraDepths?.map((e) => e + t),
				cameraWeights: e.cameraWeights,
				outline: !1
			};
		}));
	}
	for (let t of p.junctions) {
		let n = lt({
			...e.project(t.point.x, t.point.y, t.point.depth),
			cameraDepth: e.cameraDepth(t.point.x, t.point.y, t.point.depth),
			cameraWeight: e.cameraProjectionWeight(t.point.x, t.point.y, t.point.depth)
		}, t.neighbours.map((t) => ({
			...e.project(t.x, t.y, t.depth),
			cameraDepth: e.cameraDepth(t.x, t.y, t.depth),
			cameraWeight: e.cameraProjectionWeight(t.x, t.y, t.depth)
		})), {
			width: r.width,
			lineJoin: r.join
		});
		if (!n) continue;
		if (i && i.remaining < 1) return i.exceeded = !0, [];
		i && --i.remaining;
		let a = 1e-6 * Math.max(1, Math.abs(n.cameraDepth));
		s.push({
			points: n.points,
			color: r.color,
			paintRole: "outline",
			shade: 0,
			cameraDepth: n.cameraDepth + a,
			cameraDepths: n.cameraDepths?.map((e) => e + a),
			cameraWeights: n.cameraWeights,
			outline: !1
		});
	}
	return s;
}
function Gt(e, t, n, r, i, a, o) {
	if (!t.length || o.exceeded) return [];
	let s = [...t].sort((e, t) => e.start - t.start), c = n - i / 2, l = n + i / 2, u = s[0], d = e.cameraDepth(u.centerX, c, u.centerDepth) >= e.cameraDepth(u.centerX, l, u.centerDepth) ? c : l, f = d === c ? l : c, p = (t, n, i) => ({
		x: t.centerX + Math.cos(n) * r,
		y: i,
		depth: t.centerDepth + Math.sin(n) * r / e.modelDepth
	}), m = (e) => ({
		x: e.centerX,
		y: d,
		depth: e.centerDepth
	}), h = [], g = (t, n = !1) => {
		if (t.length < 2 || o.exceeded) return;
		let r = t[0], i = t.at(-1), s = Math.hypot(r.x - i.x, r.y - i.y, r.depth - i.depth) <= 1e-9, c = dt((n && !s ? [...t, r] : [...t]).map((t) => ({
			...e.project(t.x, t.y, t.depth),
			cameraDepth: e.cameraDepth(t.x, t.y, t.depth),
			cameraWeight: e.cameraProjectionWeight(t.x, t.y, t.depth)
		})), {
			width: a.width,
			dash: a.dash,
			lineCap: a.cap,
			startCap: "butt",
			endCap: "butt",
			lineJoin: a.join
		});
		if (!c || c.length > o.remaining) {
			o.exceeded = !0;
			return;
		}
		o.remaining -= c.length;
		for (let e of c) {
			let t = 1e-6 * Math.max(1, Math.abs(e.cameraDepth));
			h.push({
				points: e.points,
				color: a.color,
				paintRole: "outline",
				shade: 0,
				cameraDepth: e.cameraDepth + t,
				cameraDepths: e.cameraDepths?.map((e) => e + t),
				cameraWeights: e.cameraWeights,
				outline: !1
			});
		}
	}, _ = [], v = [], y = [], b = /* @__PURE__ */ new Set(), x = (e) => {
		let t = Math.PI * 2, n = (e % t + t) % t;
		return (n < 1e-8 || t - n < 1e-8 ? 0 : n).toFixed(8);
	}, S = /* @__PURE__ */ new Map();
	for (let t of s) {
		S.set(x(t.start), {
			slice: t,
			angle: t.start
		}), S.set(x(t.end), {
			slice: t,
			angle: t.end
		});
		for (let n = 0; n <= t.segments; n++) {
			let r = t.start + (t.end - t.start) * n / t.segments, i = p(t, r, d);
			if ((!_.length || Math.hypot(_.at(-1).x - i.x, _.at(-1).y - i.y, _.at(-1).depth - i.depth) > 1e-9) && _.push(i), n === t.segments) continue;
			let a = t.start + (t.end - t.start) * (n + 1) / t.segments, o = p(t, r, c), s = p(t, r, l), u = p(t, a, l), m = p(t, a, c);
			if (e.cameraFacing([
				o,
				s,
				u,
				m
			])) {
				let e = p(t, r, f), n = p(t, a, f);
				y.length || y.push(e), y.push(n), b.add(x(r)), b.add(x(a));
			} else y.length && (v.push(y), y = []);
		}
	}
	if (y.length && v.push(y), v.length > 1) {
		let e = v[0], t = v.at(-1), n = e[0], r = t.at(-1);
		Math.hypot(n.x - r.x, n.y - r.y, n.depth - r.depth) <= 1e-9 && (v[0] = [...t, ...e.slice(1)], v.pop());
	}
	g(_, !0);
	let C = /* @__PURE__ */ new Map();
	for (let { slice: e, angle: t } of S.values()) g([m(e), p(e, t, d)]), b.has(x(t)) && C.set(x(t), {
		slice: e,
		angle: t
	});
	for (let t of v) {
		g(t);
		for (let n of [t[0], t.at(-1)]) {
			let t = Math.atan2((n.depth - u.centerDepth) * e.modelDepth, n.x - u.centerX);
			C.set(x(t), {
				slice: u,
				angle: t
			});
		}
	}
	for (let { slice: e, angle: t } of C.values()) g([p(e, t, d), p(e, t, f)]);
	return h;
}
function Kt(e, t) {
	t.paint !== null && (t.paint === void 0 ? Vt(e, t.points, t.color, t.shade) : (zt(e, t.points), e.fillStyle = t.paint, e.fill()), t.outline && (e.strokeStyle = t.outlineColor ?? "rgba(0,0,0,0.42)", e.lineWidth = t.outlineWidth ?? .75, e.setLineDash(Se(t.outlineDash ?? "solid", e.lineWidth)), e.lineCap = t.outlineCap ?? "butt", e.lineJoin = t.outlineJoin ?? "miter", t.outline && (zt(e, t.points), e.stroke()), e.setLineDash([])));
}
function qt(e, t) {
	let n = t.filter((e) => e.paint !== null && e.points.length >= 3);
	if (n.length) {
		e.beginPath();
		for (let t of n) {
			e.moveTo(t.points[0].x, t.points[0].y);
			for (let n = 1; n < t.points.length; n++) e.lineTo(t.points[n].x, t.points[n].y);
			e.closePath();
		}
		e.fillStyle = "#000000", e.fill();
	}
}
function Jt(e, t, n, r, i) {
	if (r === void 0) return;
	let a = t.filter((e) => e.paintRole === n);
	if (!a.length) return;
	if (r === null) {
		for (let e of a) e.paint = null;
		return;
	}
	let o = a.flatMap((e) => e.points), s = Math.min(...o.map((e) => e.x)), c = Math.max(...o.map((e) => e.x)), l = Math.min(...o.map((e) => e.y)), u = Math.max(...o.map((e) => e.y)), d = se(r, e, s, l, c - s, u - l, i);
	for (let e of a) e.paint = d;
}
function Yt(e, t) {
	e.fillStyle = "#888", e.font = "12px sans-serif", e.textAlign = "center", e.textBaseline = "middle", e.fillText("(too many data points)", t.x + t.w / 2, t.y + t.h / 2);
}
function Xt(e) {
	let t = e.catAxisLabelRotation;
	return t == null ? null : !Number.isFinite(t) || Math.abs(t) > 54e5 ? 0 : t / 6e4 * Math.PI / 180;
}
function Zt(e) {
	return Math.max(e * 1.2, 10);
}
function Qt(e, t) {
	let n = Math.max(1, ...e.map(R));
	return n > 1 ? (n - 1) * Zt(t) : 0;
}
function $t(e, t, n, r, i, a = 1, o = 6, s = 0) {
	if (i || r === 0) {
		e.textAlign = i ? "right" : "center", e.textBaseline = i ? "middle" : a < 0 ? "bottom" : "top", B(e, t, n.x + (i ? -o : 0), n.y + (i ? 0 : a * o), s);
		return;
	}
	e.save(), e.translate(n.x, n.y + a * o), e.rotate(r), e.textAlign = a < 0 ? "left" : "right", e.textBaseline = "middle", B(e, t, 0, 0, s), e.restore();
}
function en(e, t, n, r, i, a, o, s = void 0, c = 0, l = U, u = void 0, d = void 0, f = 0, p = f, m = void 0, h = void 0, g = void 0, _ = void 0, v = void 0) {
	if (!(r > 0) || !Number.isFinite(t.x) || !Number.isFinite(t.y)) return;
	let y = r / 2;
	if (u !== void 0 || d !== void 0) {
		b(e, u, d, f, {
			x: t.x - y,
			y: t.y - y,
			w: r,
			h: r
		}, l, (e) => en(e, t, n, r, i, a, o, s, c, l, void 0, void 0, 0, 0, m, h, g, _, v), p);
		return;
	}
	e.beginPath();
	let S = m === void 0 ? a : m == null ? null : m.fillType === "solid" ? `#${m.color}` : se(m, e, t.x - y, t.y - y, r, r, c);
	switch (S && (e.strokeStyle = S, e.lineWidth = o, e.setLineDash(x(g, h, o)), e.lineCap = _ === "rnd" ? "round" : _ === "sq" ? "square" : "butt", e.lineJoin = v === "round" || v === "bevel" ? v : "miter"), n) {
		case "square":
			e.rect(t.x - y, t.y - y, r, r);
			break;
		case "diamond":
			e.moveTo(t.x, t.y - y), e.lineTo(t.x + y, t.y), e.lineTo(t.x, t.y + y), e.lineTo(t.x - y, t.y), e.closePath();
			break;
		case "triangle":
			e.moveTo(t.x, t.y - y), e.lineTo(t.x + y, t.y + y), e.lineTo(t.x - y, t.y + y), e.closePath();
			break;
		case "x":
		case "plus": {
			let r = n === "x";
			e.moveTo(t.x - y, t.y + (r ? -y : 0)), e.lineTo(t.x + y, t.y + (r ? y : 0)), e.moveTo(t.x + (r ? -y : 0), t.y + y), e.lineTo(t.x + (r ? y : 0), t.y - y), S && e.stroke();
			return;
		}
		case "dash":
			e.rect(t.x - y, t.y - r * .1, r, r * .2);
			break;
		case "star":
			for (let n = 0; n < 10; n++) {
				let r = -Math.PI / 2 + n * Math.PI / 5, i = n % 2 == 0 ? y : y * .4, a = t.x + Math.cos(r) * i, o = t.y + Math.sin(r) * i;
				n ? e.lineTo(a, o) : e.moveTo(a, o);
			}
			e.closePath();
			break;
		case "dot":
			e.ellipse(t.x, t.y, r * .25, r * .1, 0, 0, Math.PI * 2);
			break;
		case "picture":
			s?.fillType === "image" && ue(e, s, t.x - y, t.y - y, r, r, l, c), S && e.strokeRect(t.x - y, t.y - y, r, r);
			return;
		default:
			e.arc(t.x, t.y, y, 0, Math.PI * 2);
			break;
	}
	let C = s?.fillType === "image" ? s : void 0, w = C ? null : s === void 0 ? i === "transparent" ? null : i : s == null ? null : se(s, e, t.x - y, t.y - y, r, r, c);
	w == null ? C && (e.save(), e.clip(), ue(e, C, t.x - y, t.y - y, r, r, l, c), e.restore()) : (e.fillStyle = w, e.fill()), S && e.stroke();
}
function tn(e, t, r, i, o, s, l, u, d, f = 0, m, h, g = "t", v = l, b = !0, x, S, C = s, w = 0) {
	let T = h, D = r.seriesDataLabels;
	if (p(D, T) || t.showDataLabelsOverMax !== !0 && S != null && Number.isFinite(S) && C > S) return;
	let k = T?.showVal ?? D?.showVal ?? t.showDataLabels, A = T?.showCatName ?? D?.showCatName ?? !1, j = T?.showSerName ?? D?.showSerName ?? !1, M = T?.showPercent ?? D?.showPercent ?? !1, P = T?.text, F = N({
		customText: P,
		showCategory: A,
		showSeries: j,
		showValue: k,
		showPercent: M,
		category: r.categories?.[o] ?? t.categories[o] ?? `${o + 1}`,
		seriesName: r.name || `Series ${i + 1}`,
		sourceValue: s,
		valueDivisor: x?.divisor,
		percentRatio: m != null && Number.isFinite(m) ? m : void 0,
		formatCode: T?.formatCode ?? D?.formatCode ?? t.dataLabelFormatCode ?? r.valFormatCode,
		percentFormatCode: T?.formatCode ?? D?.formatCode ?? t.dataLabelFormatCode ?? "0%",
		date1904: t.date1904,
		separator: T?.separator ?? D?.separator
	});
	if (!F) return;
	let I = H(T?.fontSizeHpt ?? D?.fontSizeHpt ?? t.dataLabelFontSizeHpt, d) ?? 9 * d, L = T?.fontBold ?? D?.fontBold ?? t.dataLabelFontBold ?? !1, R = y(T, D), z = Rt(t, T?.fontFace ?? D?.fontFace ?? t.dataLabelFontFace);
	e.font = `${R.fontItalic ? "italic " : ""}${L ? "bold " : ""}${I}px ${z}`;
	let B = `#${T?.fontColor ?? D?.fontColor ?? r.labelColor ?? t.dataLabelFontColor ?? "111111"}`, V = P && T?.richRuns?.length ? Fe(e, {
		runs: T.richRuns,
		ptToPx: d,
		fontFamily: z,
		fallbackBold: L,
		fallbackItalic: R.fontItalic,
		fallbackBaseline: R.fontBaseline,
		fallbackColorHidden: R.fontPaintAuthored === !0 && (R.fontHidden === !0 || R.fontColor == null),
		fontFamilyForFace: (e) => Rt(t, e)
	}, I, B) : null, U = V ? [] : be(F, Math.max(I, u.w * .45), Math.max(I * 1.2, u.h * .35), I * 1.2, (t) => e.measureText(t).width, R);
	if (!V && !U.length) return;
	let ee = V?.width ?? Math.max(...U.map((t) => e.measureText(t).width)), G = V?.height ?? U.length * I * 1.2, K = c(R, d), te = n(ee + K.left + K.right, G + K.top + K.bottom, R.textRotation, R.textVerticalMode), q = O({
		kind: "point",
		x: l.x,
		y: l.y,
		position: T?.position ?? D?.position ?? t.dataLabelPosition ?? g,
		markerGap: f
	}, u, {
		w: te.w,
		h: te.h
	}, I, T?.manualLayout, u);
	if (!q) return;
	let ne = pe(T?.labelBox, D?.labelBox);
	D?.showLeaderLines && D.leaderLineHidden !== !0 && b && (e.beginPath(), e.moveTo(v.x, v.y), e.lineTo(Math.max(q.rect.x, Math.min(v.x, q.rect.x + q.rect.w)), Math.max(q.rect.y, Math.min(v.y, q.rect.y + q.rect.h))), e.strokeStyle = `#${D.leaderLineColor ?? "808080"}`, e.lineWidth = D.leaderLineWidthEmu == null ? .75 * d : Math.max(.25, D.leaderLineWidthEmu / W * d), e.setLineDash(Se(D.leaderLineDash ?? "solid", e.lineWidth)), e.stroke()), ve(e, ne, q.rect, d, w), e.save(), e.beginPath(), e.rect(q.clip.x, q.clip.y, q.clip.w, q.clip.h), e.clip();
	let J = a(R, q.textAlign), Y = _(q.x, q.y, q.rect, G + K.top + K.bottom, R, T?.manualLayout != null, J, q.textAlign, ee + K.left + K.right, te.radians), X = E(e, Y.x, Y.y, te.radians, J, q.textBaseline, K);
	if (V) {
		Pe(e, V, X.x, X.y, J, q.textBaseline, T?.manualLayout ? Math.max(0, q.rect.w - K.left - K.right) : V.width), e.restore();
		return;
	}
	if (!(R.fontPaintAuthored === !0 && (R.fontHidden === !0 || R.fontColor == null))) {
		e.fillStyle = B, e.textAlign = J, e.textBaseline = "middle";
		let t = I * 1.2, n = (R.fontBaseline ?? 0) * I, r = X.y - (U.length - 1) * t / 2 - n;
		U.forEach((n, i) => e.fillText(n, X.x, r + i * t));
	}
	e.restore();
}
function nn(e, t, n) {
	let r = t.seriesDataLabels;
	return p(r, n) ? !1 : n?.text ? !0 : (n?.showVal ?? r?.showVal ?? e.showDataLabels) || (n?.showCatName ?? r?.showCatName ?? !1) || (n?.showSerName ?? r?.showSerName ?? !1) || (n?.showPercent ?? r?.showPercent ?? !1);
}
function rn(e, t, n, r, i, a) {
	let o = j(t, n.h, r), s = t.titleRichRuns?.length ? {
		...o,
		bandH: o.bandH + G(t.title, o.fontPx)
	} : o;
	if (t.title) {
		e.font = `${t.titleFontBold === !1 ? "" : "bold "}${s.fontPx}px ${Lt(t, t.titleFontFace)}`, e.fillStyle = t.titleFontColor ? `#${t.titleFontColor}` : "#111111", e.textAlign = "center", e.textBaseline = "top";
		let r = M(e, t.title), i = {
			x: n.x + (n.w - r) / 2,
			y: n.y + s.topPad,
			w: r,
			h: Math.max(1, s.fontPx) + G(t.title, s.fontPx)
		}, a = t.titleManualLayout ? P({
			...t.titleManualLayout,
			w: void 0,
			h: void 0
		}, n, i) : null;
		B(e, t.title, a ? a.x + a.w / 2 : n.x + n.w / 2, a?.y ?? i.y, s.fontPx);
	}
	let c = yt(t);
	e.save();
	let l = (t.chartType === "pie" ? t.series[0]?.categories?.length ? t.series[0].categories : t.categories : t.series.map((e, t) => e.name || `Series ${t + 1}`)).flatMap((e, t) => c.get(t)?.deleted === !0 ? [] : [{
		label: e,
		index: t
	}]), d = l.map((e) => bt(t, c.get(e.index), r)), p = Math.max(0, ...d.map((e) => e.fontPx)), m = l.map((t, n) => (e.font = d[n].font, 7 * r + 4 + M(e, t.label))), h = ne(t, n.w, n.h, {
		itemWidths: m,
		rowHeight: Math.max(p * 1.45, 12) + Qt(l.map((e) => e.label), p),
		itemGap: 12,
		horizontalPadding: 8,
		verticalPadding: 4
	});
	e.restore();
	let g = le(h, t.legendOverlay === !0), _ = I(t, n.w, n.h, r), v = k(t.catAxisTitleTextVerticalInsetEmu, r), y = k(t.valAxisTitleTextVerticalInsetEmu, r), b = i === "horizontal" ? t.catAxisTitle ? _.catFontPx + v + u(n.w) + 4 + f(t.catAxisTitle, _.catFontPx, "left", t.catAxisTitleRotation, t.catAxisTitleVerticalMode) : 0 : i === "vertical" ? _.valBandW : 0, x = i === "horizontal" ? t.valAxisTitle ? _.valFontPx + y + u(n.h) + 4 + f(t.valAxisTitle, _.valFontPx, "horizontal", t.valAxisTitleRotation, t.valAxisTitleVerticalMode) : 0 : i === "vertical" ? _.catBandH : 0, S = Y(t, n.x, n.y, n.w, n.h, r, {
		titleBand: s,
		legendReserve: h,
		pad: {
			t: s.bandH + g.legTopH + n.h * .04,
			r: g.legRightW + n.w * .05,
			b: g.legBottomH + n.h * .19 + x,
			l: g.legLeftW + n.w * .13 + b
		},
		honorPlotAreaManualLayout: !0,
		manualOuterInsets: {
			t: s.bandH,
			r: g.legRightW,
			b: g.legBottomH + x,
			l: g.legLeftW + b
		}
	}), C = {
		x: S.plotRect.px0,
		y: S.plotRect.py0,
		w: Math.max(1, S.plotRect.pw),
		h: Math.max(1, S.plotRect.ph)
	};
	ce(e, t, C.x, C.y, C.w, C.h, r, a);
	let w = h ? h.side === "r" ? {
		x: n.x + n.w - h.reserveW,
		y: C.y,
		w: h.reserveW,
		h: C.h
	} : h.side === "l" ? {
		x: n.x,
		y: C.y,
		w: h.reserveW,
		h: C.h
	} : h.side === "t" ? {
		x: n.x + 4,
		y: n.y + s.bandH,
		w: Math.max(1, n.w - 8),
		h: h.reserveH
	} : {
		x: n.x + 4,
		y: n.y + n.h - h.reserveH,
		w: Math.max(1, n.w - 8),
		h: h.reserveH
	} : null;
	return {
		plot: C,
		legend: (w && t.legendManualLayout ? P(t.legendManualLayout, n, w) : null) ?? w,
		legendMeasure: {
			labels: l.map((e) => e.label),
			styles: d,
			itemWidths: m
		}
	};
}
function an(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
	e.save(), e.font = `${l ? "italic " : ""}${c ? "bold " : ""}${a}px ${o}`, e.fillStyle = s ? `#${s}` : "#555";
	let m = f ? t : on(e, t, p), h = A(i, u, d), g = r;
	if (f) {
		let t = M(e, m), i = a + G(m, a), o = Math.abs(Math.cos(h)), s = Math.abs(Math.sin(h)), c = {
			x: r.x - (t * o + i * s) / 2,
			y: r.y - (t * s + i * o) / 2,
			w: t * o + i * s,
			h: t * s + i * o
		}, l = P({
			...f,
			w: void 0,
			h: void 0
		}, n, c);
		l && (g = {
			x: l.x + l.w / 2,
			y: l.y + l.h / 2
		});
	}
	e.translate(g.x, g.y), h && e.rotate(h), e.textAlign = "center", e.textBaseline = "middle", B(e, m, 0, 0, a), e.restore();
}
function on(e, t, n) {
	let r = re(t);
	return r.length === 1 ? de(e, t, n) : r.map((t) => de(e, t, n)).join("\n");
}
function sn(e, t, n, r, i, a) {
	if (t.valAxisTitle) {
		let o = Z(t.valAxisTitleFontSizeHpt, a), s = i ? "horizontal" : "left", c = f(t.valAxisTitle, o, s, t.valAxisTitleRotation, t.valAxisTitleVerticalMode) / 2;
		an(e, t.valAxisTitle, n, i ? {
			x: r.x + r.w / 2,
			y: r.y + r.h + u(n.h) + o / 2 + c
		} : {
			x: r.x - u(n.w) - o / 2 - c,
			y: r.y + r.h / 2
		}, s, o, Rt(t, t.valAxisTitleFontFace, "major"), t.valAxisTitleFontColor, t.valAxisTitleFontBold ?? !0, t.valAxisTitleFontItalic ?? !1, t.valAxisTitleRotation, t.valAxisTitleVerticalMode, t.valAxisTitleManualLayout, i ? r.w : r.h);
	}
	if (t.catAxisTitle) {
		let o = Z(t.catAxisTitleFontSizeHpt, a), s = i ? "left" : "horizontal", c = f(t.catAxisTitle, o, s, t.catAxisTitleRotation, t.catAxisTitleVerticalMode) / 2;
		an(e, t.catAxisTitle, n, i ? {
			x: r.x - u(n.w) - o / 2 - c,
			y: r.y + r.h / 2
		} : {
			x: r.x + r.w / 2,
			y: r.y + r.h + u(n.h) + o / 2 + c
		}, s, o, Rt(t, t.catAxisTitleFontFace, "major"), t.catAxisTitleFontColor, t.catAxisTitleFontBold ?? !0, t.catAxisTitleFontItalic ?? !1, t.catAxisTitleRotation, t.catAxisTitleVerticalMode, t.catAxisTitleManualLayout, i ? r.h : r.w);
	}
}
function cn(e, t, n, r, i, a, o, s, c, l, u) {
	let d = t.threeD?.seriesAxis;
	if (!d || d.hidden || t.threeD?.barGrouping !== "standard" || t.series.length === 0) return;
	let f = Dn(t, r, i, a, o, s, c), p = hn(r), m = c === "vertical" ? p.seriesAxisX : f.axisX, h = c === "horizontal" ? p.floorY === r.front.y ? r.front.y + r.front.h : r.front.y : p.floorY, g = r.project(m, h, r.topology.nearDepth), _ = r.project(m, h, r.topology.farDepth), v = Math.hypot(_.x - g.x, _.y - g.y);
	if (!(v > 1e-6)) return;
	let y = {
		x: (_.x - g.x) / v,
		y: (_.y - g.y) / v
	}, b = {
		x: -y.y,
		y: y.x
	}, x = r.project(r.front.x + r.front.w / 2, r.front.y + r.front.h / 2, .5), S = {
		x: (g.x + _.x) / 2,
		y: (g.y + _.y) / 2
	};
	(S.x - x.x) * b.x + (S.y - x.y) * b.y < 0 && (b = {
		x: -b.x,
		y: -b.y
	}), (d.tickLabelPos === "low" && b.y < 0 || d.tickLabelPos === "high" && b.y > 0) && (b = {
		x: -b.x,
		y: -b.y
	}), d.lineHidden || (yn(e, _n(d.lineColor, d.lineWidthEmu, d.lineDash, u)), e.beginPath(), e.moveTo(g.x, g.y), e.lineTo(_.x, _.y), e.stroke());
	let C = Math.max(1, Math.floor(d.tickMarkSkip ?? 1)), w = Math.max(1, Math.floor(d.tickLabelSkip ?? 1)), T = d.majorTickMark ?? "out", E = H(d.fontSizeHpt, u) ?? 9 * u;
	if (e.font = `${d.fontItalic ? "italic " : ""}${d.fontBold ? "bold " : ""}${E}px ${Rt(t, d.fontFace)}`, e.fillStyle = d.fontColor ? `#${d.fontColor}` : "#595959", e.textAlign = Math.abs(b.x) < .2 ? "center" : b.x < 0 ? "right" : "left", e.textBaseline = Math.abs(b.y) < .2 ? "middle" : b.y < 0 ? "bottom" : "top", l && !d.lineHidden && T !== "none") {
		yn(e, vn(d.lineColor, d.lineWidthEmu, d.lineDash, u));
		let n = t.series.length;
		for (let t = 0; t <= n; t += C) {
			let i = t / n, a = d.orientation === "maxMin" ? 1 - i : i, o = r.project(m, h, a), s = 6 * u, c = T === "cross" ? s / 2 : T === "out" ? s : 0, l = T === "cross" ? s / 2 : T === "in" ? s : 0;
			e.beginPath(), e.moveTo(o.x + b.x * c, o.y + b.y * c), e.lineTo(o.x - b.x * l, o.y - b.y * l), e.stroke();
		}
	}
	for (let n = 0; n < t.series.length; n++) {
		let i = r.seriesDepth(n, t.series.length, !1), a = d.orientation === "maxMin" ? 1 - i : i, o = r.project(m, h, a);
		if (!l && !d.lineHidden && n % C === 0 && T !== "none") {
			let t = 6 * u, n = T === "cross" ? t / 2 : T === "out" ? t : 0, r = T === "cross" ? t / 2 : T === "in" ? t : 0;
			e.beginPath(), e.moveTo(o.x + b.x * n, o.y + b.y * n), e.lineTo(o.x - b.x * r, o.y - b.y * r), e.stroke();
		}
		d.tickLabelPos !== "none" && n % w === 0 && B(e, t.series[n].name || `Series ${n + 1}`, o.x + b.x * (6 * u + 3), o.y + b.y * (6 * u + 3), K(E));
	}
	if (e.setLineDash([]), d.title) {
		let i = Z(d.titleFontSizeHpt, u), a = E + i + 12 + F(t.series.map((e, t) => e.name || `Series ${t + 1}`), K(E)) + G(d.title, i) / 2;
		an(e, d.title, n, {
			x: S.x + b.x * a,
			y: S.y + b.y * a
		}, "horizontal", i, Rt(t, d.titleFontFace, "major"), d.titleFontColor, d.titleFontBold ?? !0, d.titleFontItalic ?? !1, d.titleRotation, d.titleVerticalMode, d.titleManualLayout, Math.max(r.front.w, r.front.h));
	}
}
function ln(e, t, n, r, i, a, c) {
	let u = l(e, "dataPointMarker", i), d = J(e, "dataPointMarker"), f = t.chartexFormatIdx ?? i, p = v(n?.markerStyle, d, r), h = v(t.markerStyle, d, f), g = p !== void 0 || n?.markerFillPaint !== void 0 || n?.markerFill != null || n?.color != null || n?.markerFillPaintAuthored === !0 && n.markerStyle?.fillHidden !== !0, _ = h !== void 0 || t.markerFillPaint !== void 0 || t.markerFill != null || t.markerFillPaintAuthored === !0 && t.markerStyle?.fillHidden !== !0, y = s(u, d, f), b = g ? p ?? n?.markerFillPaint : _ ? h ?? t.markerFillPaint : y, x = z(t, n, r, a), S = b;
	b?.fillType === "solid" ? (x = b.color, S = void 0) : b === null && (x = "00000000");
	let C = ye(n?.markerStyle, d, r), w = ye(t.markerStyle, d, f), T = C !== void 0 || n?.markerLine != null || n?.markerLinePaintAuthored === !0 && n.markerStyle?.lineHidden !== !0, E = w !== void 0 || t.markerLine != null || t.markerLinePaintAuthored === !0 && t.markerStyle?.lineHidden !== !0, D = o(u, f), O = T ? C ?? (n?.markerLinePaintAuthored === !0 ? null : void 0) : E ? w ?? (t.markerLinePaintAuthored === !0 ? null : void 0) : D, k = n?.markerLine ?? t.markerLine ?? t.lineColor ?? a, A = O;
	O?.fillType === "solid" ? (k = O.color, A = void 0) : O === null && (k = "00000000");
	let j = n?.markerStyle ?? t.markerStyle ?? u, M = L(n?.markerStyle, t.markerStyle, u);
	return {
		fill: x,
		fillPaint: S,
		line: k,
		linePaint: A,
		lineWidth: (n?.markerLineWidthEmu ?? t.markerLineWidthEmu ?? j?.lineWidthEmu) == null ? Math.max(.75, c) : Math.max(.25, (n?.markerLineWidthEmu ?? t.markerLineWidthEmu ?? j?.lineWidthEmu ?? 0) / W * c),
		lineDash: M?.lineDash,
		lineCustomDash: M?.lineCustomDash,
		lineCap: j?.lineCap,
		lineJoin: j?.lineJoin,
		effectDirect: m(n?.markerStyle, n?.chartexStyle, t.markerStyle),
		effectFallback: u,
		effectIndex: n?.markerStyle || n?.chartexStyle ? r : f,
		effectFallbackIndex: f
	};
}
function un(e, t, n, r, i, a, o, s, c, u, d, f) {
	let p = $(t, n, r, i, a, f), h = Le(t, n, i, a), g = {
		x: o,
		y: s - c / 2,
		w: c,
		h: c
	}, _ = (e) => {
		if (p.fill !== null) {
			let t = p.fill === void 0 ? p.color : p.fill.fillType === "image" ? null : se(p.fill, e, g.x, g.y, g.w, g.h, d);
			t && (e.fillStyle = t, e.fillRect(g.x, g.y, g.w, g.h));
		}
		let t = p.lineFill === void 0 ? p.lineColor : p.lineFill == null || p.lineFill.fillType === "image" ? null : se(p.lineFill, e, g.x, g.y, g.w, g.h, d);
		t && (e.strokeStyle = t, e.lineWidth = p.lineWidthEmu == null ? .75 * u : Math.max(.25, p.lineWidthEmu / W * u), e.setLineDash(x(p.lineCustomDash, p.lineDash, e.lineWidth)), e.lineCap = p.lineCap, e.lineJoin = p.lineJoin, e.strokeRect(g.x, g.y, g.w, g.h), e.setLineDash([]));
	}, v = m(r?.chartexStyle, n.chartexStyle);
	b(e, v, l(t, "dataPoint3D", a), v === r?.chartexStyle ? i : h, g, u, _, h);
}
function dn(e, t, n, r, i, a, o, s, c, u) {
	let d = $(t, n, void 0, r, r, !1), f = d.lineFill === void 0 ? d.lineColor == null ? d.fill : {
		fillType: "solid",
		color: d.lineColor.replace(/^#/, "")
	} : d.lineFill;
	if (f !== null) {
		let i = d.lineWidthEmu == null ? Math.max(1, 2 * c) : Math.max(.5, d.lineWidthEmu / W * c), p = {
			x: a,
			y: o - i / 2,
			w: s,
			h: i
		}, h = f === void 0 ? d.color : f.fillType === "image" ? null : f.fillType === "solid" ? `#${f.color}` : se(f, e, a, o - i / 2, s, i, u);
		if (h) {
			let g = (t) => {
				t.beginPath(), t.moveTo(a, o), t.lineTo(a + s, o), t.strokeStyle = t === e ? h : f === void 0 ? d.color : f.fillType === "image" ? "rgba(0,0,0,0)" : f.fillType === "solid" ? `#${f.color}` : se(f, t, a, o - i / 2, s, i, u) ?? "rgba(0,0,0,0)", t.lineWidth = i, t.setLineDash(x(d.lineCustomDash, d.lineDash, i)), t.stroke(), t.setLineDash([]);
			}, _ = Le(t, n, r, r);
			b(e, m(n.chartexStyle), l(t, "dataPoint3D", r), _, p, c, g, _);
		}
	}
	if (n.showMarker !== !0 || n.markerSymbol === "none") return;
	let p = n.markerSymbol ?? "circle", h = ln(t, n, void 0, r, r, i.replace(/^#/, ""), c);
	en(e, {
		x: a + s / 2,
		y: o
	}, p, Math.min(s, Math.max(2, (n.markerSize ?? 5) * c)), h.fill === "00000000" ? "transparent" : `#${h.fill.replace(/^#/, "")}`, h.line === "00000000" ? "rgba(0,0,0,0)" : `#${h.line.replace(/^#/, "")}`, h.lineWidth, h.fillPaint, u, c, h.effectDirect, h.effectFallback, h.effectIndex, h.effectFallbackIndex, h.linePaint, h.lineDash, h.lineCustomDash, h.lineCap, h.lineJoin);
}
function fn(e, t, n, r, i = !1, a, o = 0) {
	if (!n) return;
	ie(e, t, n, r, o);
	let s = new Map(t.series[0]?.dataPointOverrides?.map((e) => [e.idx, e]) ?? []), c = i ? (t.series[0]?.categories?.length ? t.series[0].categories : t.categories).map((e, n) => {
		let r = t.series[0]?.dataPointColors?.[n];
		return {
			label: e,
			color: r === "00000000" ? "transparent" : r ? `#${r}` : Dt(n),
			series: t.series[0],
			point: s.get(n),
			sourceIndex: n,
			seriesIndex: 0
		};
	}) : t.series.map((e, t) => ({
		label: e.name || `Series ${t + 1}`,
		color: Dt(t, e),
		series: e,
		point: void 0,
		sourceIndex: t,
		seriesIndex: t
	})), l = yt(t), u = c.filter((e) => l.get(e.sourceIndex)?.deleted !== !0), d = a != null && a.labels.length === u.length && a.labels.every((e, t) => e === u[t].label), f = d ? a.styles : u.map((e) => bt(t, l.get(e.sourceIndex), r));
	e.textAlign = "left", e.textBaseline = "middle";
	let p = Math.max(0, ...f.map((e) => e.fontPx)), m = Math.max(p * 1.45, 12), h = Math.min(7 * r, m * .7), g = m + Qt(u.map((e) => e.label), p);
	if (t.legendPos === "t" || t.legendPos === "b" || t.legendManualLayout != null && n.w >= n.h) {
		let s = d ? a.itemWidths : u.map((t, n) => (e.font = f[n].font, h + 4 + M(e, t.label))), c = ae(s, Math.max(1, n.w - 8), 12).slice(0, Math.max(0, Math.floor((n.h - 4 + 1e-6) / g))), l = n.y + 2 + g / 2;
		for (let a of c) {
			let c = a.map((e) => Math.min(n.w, s[e])), d = c.reduce((e, t) => e + t, 0) + Math.max(0, a.length - 1) * 12, p = n.x + Math.max(4, (n.w - d) / 2);
			for (let n = 0; n < a.length; n++) {
				let s = a[n], d = u[s], m = f[s];
				e.font = m.font;
				let g = Math.max(0, c[n] - h - 4);
				!i && t.chartType.toLowerCase().includes("line") && d.series ? dn(e, t, d.series, d.seriesIndex, d.color, p, l, h, r, o) : d.series && un(e, t, d.series, d.point, d.sourceIndex, d.seriesIndex, p, l, h, r, o, i), e.fillStyle = m.color, B(e, d.label, p + h + 4, l, Zt(m.fontPx), g), p += c[n] + 12;
			}
			l += g;
		}
		return;
	}
	let _ = n.y;
	for (let a = 0; a < u.length; a++) {
		let s = u[a], c = f[a];
		e.font = c.font;
		let l = n.x + 8 + h, d = Math.max(0, n.x + n.w - 4 - l), p = Math.max(c.fontPx * 1.2, 10), g = re(s.label), v = (t) => w(t, d, p * (i ? 1 : 2), p, (t) => e.measureText(t).width), y = g.length === 1 ? v(s.label) : g.flatMap(v);
		if (y.length === 0) continue;
		let b = Math.max(m, y.length * p + 2);
		if (_ + b > n.y + n.h + 1e-6) break;
		let x = _ + b / 2;
		!i && t.chartType.toLowerCase().includes("line") && s.series ? dn(e, t, s.series, s.seriesIndex, s.color, n.x + 4, x, h, r, o) : s.series && un(e, t, s.series, s.point, s.sourceIndex, s.seriesIndex, n.x + 4, x, h, r, o, i), e.fillStyle = c.color;
		let S = x - (y.length - 1) * p / 2;
		y.forEach((t, n) => e.fillText(t, l, S + n * p)), _ += b;
	}
}
function pn(e, t, n, r, i, a) {
	let o = i ? 100 : 1, s = e.valAxisMinorTickMark ?? "none";
	return h({
		dataMin: t,
		dataMax: n,
		explicitMin: e.valMin == null ? i ? t : null : e.valMin * o,
		explicitMax: e.valMax == null ? i ? n : null : e.valMax * o,
		majorUnit: e.valAxisMajorUnit == null ? null : e.valAxisMajorUnit * o,
		minorUnit: e.valAxisMinorUnit == null ? null : e.valAxisMinorUnit * o,
		axisLenPt: r,
		axisOrientation: a,
		logBase: e.valAxisLogBase,
		reversed: e.valAxisOrientation === "maxMin",
		needMinor: e.valAxisMinorGridlines === !0 || s !== "none"
	});
}
function mn(e, t, n) {
	let r = e != null && Number.isFinite(e) ? (e % 360 + 360) % 360 : 0, i = Number.isFinite(t) ? Math.max(0, Math.min(1, t)) : 0, a = Number.isFinite(n) ? Math.max(0, Math.min(1 - i, n)) : 0, o = Math.PI / 2 - (r * Math.PI / 180 + i * Math.PI * 2), s = o - a * Math.PI * 2;
	return {
		start: Math.min(o, s),
		end: Math.max(o, s),
		middle: (o + s) / 2,
		leading: o
	};
}
function hn(e) {
	let { front: t } = e, n = t.x, r = t.x + t.w, i = e.topology.farX === "min" ? n : r, a = i === n ? r : n, o = e.topology.axisY === "min" ? t.y : t.y + t.h, s = o === t.y ? t.y + t.h : t.y, { nearDepth: c, farDepth: l } = e.topology, u = e.project(n, o, c), d = e.project(r, o, c), f = e.project(r, o, l), p = e.project(n, o, l), m = e.project(n, s, l), h = e.project(r, s, l), g = e.project(i, o, c), _ = e.project(i, o, l), v = e.project(i, s, l), y = e.project(i, s, c);
	return {
		floor: [
			u,
			d,
			f,
			p
		],
		sideWall: [
			g,
			_,
			v,
			y
		],
		backWall: [
			p,
			f,
			h,
			m
		],
		sideX: i,
		seriesAxisX: a,
		floorY: o,
		oppositeFloorY: s,
		nearDepth: c,
		farDepth: l
	};
}
function gn(e, t, n, r, i = "A6A6A6", a = .75) {
	let o = t != null && Number.isFinite(t) && t >= 0 ? Math.max(.25, t / W * r) : a * r;
	return {
		color: `#${e ?? i}`,
		width: o,
		dash: Se(n ?? "solid", o)
	};
}
function _n(e, t, n, r) {
	let i = gn(e, t, n, r, "898989", 1);
	if (t == null || !Number.isFinite(t) || t < 0) return i;
	let a = t / W * r;
	if (!(a > 0)) return i;
	let o = a;
	return {
		...i,
		width: o,
		dash: Se(n ?? "solid", o)
	};
}
function vn(e, t, n, r) {
	return _n(e, t, n, r);
}
function yn(e, t) {
	e.strokeStyle = t.color, e.lineWidth = t.width, e.setLineDash(t.dash);
}
function bn(e, t, n, r, i, a, o, s, c) {
	let { front: l } = n, u = l.x, f = l.x + l.w, p = hn(n), { sideX: m, floorY: h, oppositeFloorY: g, nearDepth: _, farDepth: v } = p, y = Dn(t, n, r, a, o, s, i), b = [], C = t.catAxisLinePaintAuthored === !0, w = t.valAxisLinePaintAuthored === !0, T = i === "vertical" ? C && !t.catAxisHidden && !t.catAxisLineHidden : w && !t.valAxisHidden && !t.valAxisLineHidden, E = i === "vertical" ? w && !t.valAxisHidden && !t.valAxisLineHidden : C && !t.catAxisHidden && !t.catAxisLineHidden;
	T && b.push([y.horizontalStart, y.horizontalEnd]), E && b.push([y.verticalStart, y.verticalEnd]);
	let D = t.threeD?.seriesAxis, O = D?.linePaintAuthored === !0;
	if (D && !D.hidden && !D.lineHidden && O && t.threeD?.barGrouping === "standard" && t.series.length > 0) {
		let e = i === "vertical" ? p.seriesAxisX : y.axisX, t = i === "horizontal" ? h === n.front.y ? n.front.y + n.front.h : n.front.y : h;
		b.push([n.project(e, t, _), n.project(e, t, v)]);
	}
	let k = (e, t) => Math.hypot(e.x - t.x, e.y - t.y) <= 1e-6, A = (e, t) => b.some(([n, r]) => k(e, n) && k(t, r) || k(e, r) && k(t, n)), j = (e, t) => {
		let r = Ce(n, e, t?.thicknessPercent), i = r.faces.map((e, t) => ({
			scenePoints: e,
			faceIndex: t
		})).filter(({ scenePoints: e }) => r.thickness === 0 || n.cameraFacing(e)).map(({ scenePoints: e, faceIndex: t }) => ({
			faceIndex: t,
			scenePoints: e,
			points: e.map((e) => n.projectUnbounded(e.x, e.y, e.depth)),
			depth: e.reduce((e, t) => e + n.cameraDepth(t.x, t.y, t.depth), 0) / e.length
		})).sort((e, t) => e.depth - t.depth);
		return {
			slab: r,
			faces: i,
			visibleFaceIndices: new Set(i.map((e) => e.faceIndex))
		};
	}, M = j("floor", t.threeD?.floor), N = j("sideWall", t.threeD?.sideWall), P = j("backWall", t.threeD?.backWall), F = M.faces, I = N.faces, L = P.faces, R = (i, a, o, s) => {
		let l = d(t, a, o), u = i.faces;
		if (!l.fill || !u.length) return;
		if (l.fill.fillType === "image") {
			let t = l.fill, o = ke(i.slab, c), u = ee(l.fill, o ? q(l.fill, o.widthPt, o.heightPt) : void 0);
			if (!u) return;
			Ee(e, l.fill, u, a, s, i.slab, i.faces.map((e) => e.faceIndex), (e) => n.projectUnbounded(e.x, e.y, e.depth), r.max - r.min, (e, n) => ee(t, q(t, e, n)), c);
			return;
		}
		let f = u.flatMap((e) => e.points), p = Math.min(...f.map((e) => e.x)), m = Math.max(...f.map((e) => e.x)), h = Math.min(...f.map((e) => e.y)), g = Math.max(...f.map((e) => e.y)), _ = l.fill.fillType === "solid" ? `#${l.fill.color}` : se(l.fill, e, p, h, m - p, g - h);
		if (_) for (let t of u) t.points.length < 3 || (zt(e, t.points), e.fillStyle = _, e.fill());
	};
	R(M, t.threeD?.floor, "floor", "floor"), R(N, t.threeD?.sideWall, "wall", "sideWall"), R(P, t.threeD?.backWall, "wall", "backWall");
	let z = (t, r, i, a, o = !0) => {
		for (let s of Oe(t.slab, r, i, a)) {
			if (!o && s.faceIndex !== 0 || !t.visibleFaceIndices.has(s.faceIndex)) continue;
			let [r, i] = s.scenePoints.map((e) => n.projectUnbounded(e.x, e.y, e.depth));
			e.beginPath(), e.moveTo(r.x, r.y), e.lineTo(i.x, i.y), e.stroke();
		}
	}, B = (t, a, o) => {
		yn(e, a);
		for (let a of t) {
			let t = r.fraction(a);
			if (o) {
				i === "horizontal" ? (z(M, "floor", "x", t), z(P, "backWall", "x", t)) : (z(N, "sideWall", "y", t), z(P, "backWall", "y", t));
				continue;
			}
			if (i === "horizontal") {
				let r = l.x + t * l.w, i = n.project(r, h, v), a = n.project(r, g, v);
				e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(a.x, a.y), e.stroke();
			} else {
				let r = l.y + l.h - t * l.h, i = n.project(m, r, _), a = n.project(m, r, v), o = n.project(m === u ? f : u, r, v);
				e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(a.x, a.y), e.stroke(), e.beginPath(), e.moveTo(a.x, a.y), e.lineTo(o.x, o.y), e.stroke();
			}
		}
	};
	t.valAxisMinorGridlines === !0 && B(r.minorTicks, gn(t.valAxisMinorGridlineColor, t.valAxisMinorGridlineWidthEmu, t.valAxisMinorGridlineDash, c, "D9D9D9", .5), !0), t.valAxisMajorGridlines === !0 && B(r.majorTicks, gn(t.valAxisGridlineColor, t.valAxisGridlineWidthEmu, t.valAxisGridlineDash, c, "898989", 1), !0);
	let V = (t, n) => {
		yn(e, n);
		for (let e of t) i === "vertical" ? (z(M, "floor", "x", e), z(P, "backWall", "x", e)) : (z(N, "sideWall", "y", e), z(P, "backWall", "y", e));
	};
	t.catAxisMinorGridlines === !0 && V(S(a, o), gn(t.catAxisMinorGridlineColor, t.catAxisMinorGridlineWidthEmu, t.catAxisMinorGridlineDash, c, "E0E0E0", .5)), t.catAxisMajorGridlines === !0 && V(_e(a, o), gn(t.catAxisGridlineColor, t.catAxisGridlineWidthEmu, t.catAxisGridlineDash, c, "E0E0E0", .5));
	let H = (n, r, i) => {
		if (!n.length) return;
		let a = d(t, r, i);
		if (a.line === null) return;
		let o = a.line ?? {
			fillType: "solid",
			color: "898989"
		}, s = n.flatMap((e) => e.points), l = Math.min(...s.map((e) => e.x)), u = Math.max(...s.map((e) => e.x)), f = Math.min(...s.map((e) => e.y)), p = Math.max(...s.map((e) => e.y)), m = o.fillType === "solid" ? `#${o.color}` : se(o, e, l, f, u - l, p - f);
		if (!m) return;
		let h = a.lineWidthEmu == null ? c : Math.max(.25, a.lineWidthEmu / W * c);
		e.strokeStyle = m, e.lineWidth = h, e.setLineDash(x(a.lineCustomDash, a.lineDash, h)), e.lineCap = a.lineCap === "rnd" ? "round" : a.lineCap === "sq" ? "square" : "butt", e.lineJoin = a.lineJoin === "round" || a.lineJoin === "bevel" ? a.lineJoin : "miter";
		for (let t of n) {
			if (t.points.length < 2) continue;
			let n = t.points.map((e, n) => ({
				start: e,
				end: t.points[(n + 1) % t.points.length]
			}));
			if (n.some((e) => A(e.start, e.end))) {
				for (let t of n) A(t.start, t.end) || (e.beginPath(), e.moveTo(t.start.x, t.start.y), e.lineTo(t.end.x, t.end.y), e.stroke());
				continue;
			}
			e.beginPath(), e.moveTo(t.points[0].x, t.points[0].y);
			for (let n = 1; n < t.points.length; n++) e.lineTo(t.points[n].x, t.points[n].y);
			e.lineTo(t.points[0].x, t.points[0].y), e.closePath(), e.stroke();
		}
	};
	H(F, t.threeD?.floor, "floor"), H(I, t.threeD?.sideWall, "wall"), H(L, t.threeD?.backWall, "wall"), e.setLineDash([]);
}
function xn(e, t, n, r, i, a, o, s, c) {
	let l = Dn(t, n, r, i, a, o, c), u = c === "vertical" ? !t.catAxisHidden && !t.catAxisLineHidden : !t.valAxisHidden && !t.valAxisLineHidden, d = c === "vertical" ? !t.valAxisHidden && !t.valAxisLineHidden : !t.catAxisHidden && !t.catAxisLineHidden;
	u && (yn(e, _n(c === "vertical" ? t.catAxisLineColor : t.valAxisLineColor, c === "vertical" ? t.catAxisLineWidthEmu : t.valAxisLineWidthEmu, c === "vertical" ? t.catAxisLineDash : t.valAxisLineDash, s)), e.beginPath(), e.moveTo(l.horizontalStart.x, l.horizontalStart.y), e.lineTo(l.horizontalEnd.x, l.horizontalEnd.y), e.stroke()), d && (yn(e, _n(c === "vertical" ? t.valAxisLineColor : t.catAxisLineColor, c === "vertical" ? t.valAxisLineWidthEmu : t.catAxisLineWidthEmu, c === "vertical" ? t.valAxisLineDash : t.catAxisLineDash, s)), e.beginPath(), e.moveTo(l.verticalStart.x, l.verticalStart.y), e.lineTo(l.verticalEnd.x, l.verticalEnd.y), e.stroke()), e.setLineDash([]);
}
function Sn(e, t, n, r) {
	let i = {
		x: (e.x + t.x) / 2,
		y: (e.y + t.y) / 2
	};
	return r === "horizontal" ? {
		x: i.x <= n.x ? -1 : 1,
		y: 0
	} : {
		x: 0,
		y: i.y <= n.y ? -1 : 1
	};
}
function Cn(e, t, n, r, i, a, o, s, c) {
	if (!t || t === "none") return;
	let l = Sn(r, i, a, o), u = wn(s, c), d = t === "cross" ? u / 2 : u, f = t === "out" || t === "cross" ? d : 0, p = t === "in" || t === "cross" ? d : 0;
	e.beginPath(), e.moveTo(n.x + l.x * f, n.y + l.y * f), e.lineTo(n.x - l.x * p, n.y - l.y * p), e.stroke();
}
function wn(e, t) {
	return (e === "minor" ? 4 : 6) * t;
}
function Tn(e, t, n) {
	if (e !== "out" && e !== "cross") return 0;
	let r = wn(t, n);
	return e === "cross" ? r / 2 : r;
}
function En(e, t, n, r) {
	if (t) return r;
	let i = Tn(e, "major", n);
	return Math.max(r, i + 3 * n);
}
function Dn(e, t, n, i, a, o, s) {
	let { front: c } = t, l = (e) => Math.max(0, Math.min(1, e)), u = t.topology.axisX === "min" ? c.x : c.x + c.w, d = t.topology.axisY === "min" ? c.y : c.y + c.h, f = () => {
		if (e.catAxisCrossesAt != null && Number.isFinite(e.catAxisCrossesAt)) {
			let t = e.chartType.endsWith("Pct") ? e.catAxisCrossesAt * 100 : e.catAxisCrossesAt;
			return l(n.fraction(t));
		}
		let t = e.catAxisCrosses ?? "autoZero";
		return l(t === "min" ? n.fraction(n.min) : t === "max" ? n.fraction(n.max) : n.fraction(0));
	}, p = () => {
		let t = e.valAxisCrossesAt;
		if (t != null && Number.isFinite(t)) return r(t - 1, i, a, o);
		let n = e.valAxisCrosses;
		if (n !== "min" && n !== "max") return null;
		let s = +(n === "max");
		return o ? 1 - s : s;
	}, m = f(), h = p(), g = s === "horizontal" ? c.x + m * c.w : h == null ? u : c.x + h * c.w, _ = s === "vertical" ? c.y + c.h - m * c.h : h == null ? d : c.y + h * c.h, v = t.topology.nearDepth;
	return {
		axisX: g,
		axisY: _,
		depth: v,
		horizontalStart: t.project(c.x, _, v),
		horizontalEnd: t.project(c.x + c.w, _, v),
		verticalStart: t.project(g, c.y + c.h, v),
		verticalEnd: t.project(g, c.y, v)
	};
}
function On(e, t, n, i, a, o, s, c, l, u) {
	let { front: d } = n, f = Dn(t, n, i, a, o, s, c), { axisX: p, axisY: m, depth: h } = f, g = n.project(d.x + d.w / 2, d.y + d.h / 2, h), _ = t.valAxisMinorTickMark ?? "none", v = l ? vn : _n;
	if (!t.valAxisHidden && !t.valAxisLineHidden) {
		yn(e, v(t.valAxisLineColor, t.valAxisLineWidthEmu, t.valAxisLineDash, u));
		let r = (e) => c === "horizontal" ? n.project(d.x + i.fraction(e) * d.w, m, h) : n.project(p, d.y + d.h - i.fraction(e) * d.h, h), a = c === "horizontal" ? f.horizontalStart : f.verticalStart, o = c === "horizontal" ? f.horizontalEnd : f.verticalEnd;
		for (let n of i.majorTicks) Cn(e, t.valAxisMajorTickMark, r(n), a, o, g, c === "vertical" ? "horizontal" : "vertical", "major", u);
		for (let t of i.minorTicks) Cn(e, _, r(t), a, o, g, c === "vertical" ? "horizontal" : "vertical", "minor", u);
	}
	if (!t.catAxisHidden && !t.catAxisLineHidden) {
		yn(e, v(t.catAxisLineColor, t.catAxisLineWidthEmu, t.catAxisLineDash, u));
		let i = c === "vertical" ? f.horizontalStart : f.verticalStart, _ = c === "vertical" ? f.horizontalEnd : f.verticalEnd, y = Math.max(1, Math.floor(t.catAxisTickMarkSkip ?? 1)), b = (r) => {
			let a = c === "vertical" ? n.project(d.x + r * d.w, m, h) : n.project(p, d.y + r * d.h, h);
			Cn(e, t.catAxisMajorTickMark, a, i, _, g, c === "vertical" ? "vertical" : "horizontal", "major", u);
		};
		if (l) {
			let e = _e(a, o);
			for (let t = 0; t < e.length; t += y) b(s ? 1 - e[t] : e[t]);
		} else for (let e = 0; e < a; e += y) b(r(e, a, o, s));
		let x = t.catAxisMinorUnit;
		if (t.catAxisMinorTickMark && t.catAxisMinorTickMark !== "none" && x != null && Number.isFinite(x) && x > 0) {
			let l = t.catAxisMajorUnit != null && Number.isFinite(t.catAxisMajorUnit) && t.catAxisMajorUnit > 0 ? t.catAxisMajorUnit : y, f = Math.min(512, Math.ceil(a / x));
			for (let v = 1; v < f; v++) {
				let f = v * x;
				if (!(f < a)) break;
				if (Math.abs(f / l - Math.round(f / l)) < 1e-9) continue;
				let y = r(f, a, o, s), b = c === "vertical" ? n.project(d.x + y * d.w, m, h) : n.project(p, d.y + y * d.h, h);
				Cn(e, t.catAxisMinorTickMark, b, i, _, g, c === "vertical" ? "vertical" : "horizontal", "minor", u);
			}
		}
	}
	e.setLineDash([]);
}
function kn(e, t, n, a, o) {
	if (!t.threeD) return !1;
	let s = t.chartType === "clusteredBar" || t.chartType === "clusteredBarH" || t.chartType.startsWith("stackedBar"), c = t.chartType.endsWith("H") || t.chartType.includes("BarH"), u = t.chartType.startsWith("stacked"), d = s && !u && t.threeD.barGrouping === "standard", { plot: f, legend: p, legendMeasure: h } = rn(e, t, n, a, c ? "horizontal" : "vertical", o), _ = Te(t.threeD, f, {
		sceneDepthScale: s ? d ? .65 : .1 : .4,
		perspectiveTangentGain: d ? 1 : 2,
		sceneHeightScale: !s && !(t.threeD.heightPercentAuthored ?? t.threeD.heightPercent != null) ? 1 / 3 : void 0
	});
	if (!_) return !0;
	_ = De(_, t.threeD, f);
	let v = t.chartType.endsWith("Pct"), y = t.series.find((e) => (e.categories?.length ?? 0) > 0)?.categories ?? t.categories, b = Math.max(1, y.length, ...t.series.map((e) => e.values.length)), S = v ? kt(t, b) : void 0, w = t.catAxisOrientation === "maxMin", T = t.catAxisCrossBetween === "between", E = t.dispBlanksAs ?? "gap", D = t.valAxisLogBase != null && Number.isFinite(t.valAxisLogBase) && t.valAxisLogBase >= 2, O = (e, n) => {
		let r = t.series[e]?.values[n];
		return r != null && Number.isFinite(r) && (!D || r > 0) || r == null && (u || E === "zero");
	}, k = (e, n) => At(t, e, n, S), A = 0, j = 0;
	if (u) {
		for (let e = 0; e < b; e++) {
			let n = 0, r = 0;
			for (let i = 0; i < t.series.length; i++) {
				let t = k(i, e);
				t >= 0 ? n = jt(n, t) : r = jt(r, t);
			}
			A = Math.min(A, r), j = Math.max(j, n);
		}
		v && (A = A < 0 ? -100 : 0, j = j > 0 ? 100 : 0, A === 0 && j === 0 && (j = 1));
	} else {
		let e = g(t.series.flatMap((e) => e.values).filter((e) => e != null && Number.isFinite(e) && (!D || e > 0)), D ? {
			min: 1,
			max: 10
		} : {
			min: 0,
			max: 1
		});
		A = D ? e.min : Math.min(0, e.min), j = D ? e.max : Math.max(0, e.max);
	}
	let N = c ? _.project(_.front.x, _.topology.axisY === "min" ? _.front.y : _.front.y + _.front.h, _.topology.nearDepth) : _.project(_.topology.axisX === "min" ? _.front.x : _.front.x + _.front.w, _.front.y, _.topology.nearDepth), P = c ? _.project(_.front.x + _.front.w, _.topology.axisY === "min" ? _.front.y : _.front.y + _.front.h, _.topology.nearDepth) : _.project(_.topology.axisX === "min" ? _.front.x : _.front.x + _.front.w, _.front.y + _.front.h, _.topology.nearDepth), F = Math.hypot(P.x - N.x, P.y - N.y) / a, I = pn(t, A, j, F, v, c ? "horizontal" : "vertical"), L = (e) => Number.isFinite(e) ? Math.max(I.min, Math.min(I.max, e)) : I.min;
	s || bn(e, t, _, I, c ? "horizontal" : "vertical", b, T, w, a);
	let { front: R } = _, z = Math.max(1, t.series.length), ee = [], G = t.series.map((e) => new Map(e.dataPointOverrides?.map((e) => [e.idx, e]) ?? [])), q = t.series.map((e) => new Map(e.dataLabelOverrides?.map((e) => [e.idx, e]) ?? []));
	if (s) {
		let r = _.prismInterval(0, 1, !0), i = [], s = Array(b).fill(0), f = Array(b).fill(0), p = (c ? R.h : R.w) / b, h = t.barGapWidth != null && Number.isFinite(t.barGapWidth) && t.barGapWidth >= 0 ? t.barGapWidth : 150;
		for (let e = 0; e < t.series.length; e++) {
			let n = t.series[e], o = d ? _.prismInterval(e, z, !1) : r, l = je(p, h, d ? 0 : e, d ? 1 : z, u || d);
			for (let r = 0; r < b; r++) {
				if (!O(e, r)) continue;
				let d = k(e, r), m = $(t, n, G[e].get(r), r, e), h = m.fill === null ? "transparent" : m.color, g = m.lineFill !== null && (m.lineColor != null || m.lineFill !== void 0), _ = u ? d >= 0 ? s[r] : f[r] : 0, y = jt(_, d);
				u && (d >= 0 ? s[r] = y : f[r] = y);
				let x = L(_), S = L(y), C = n.threeDShape ?? t.threeD.shape ?? "box", T = C === "cone" || C === "pyramid", E = C === "coneToMax" || C === "pyramidToMax", A = (e) => {
					if (!T) return 1;
					let t = D && !(_ > 0) ? I.min : _, n = I.fraction(t), r = I.fraction(y), i = I.fraction(e), a = r - n;
					return a === 0 || !Number.isFinite(a) || !Number.isFinite(i - n) ? +(e === t) : Math.max(0, Math.min(1, 1 - (i - n) / a));
				}, j = (e) => {
					if (!E) return 1;
					let t = y >= _ ? I.max : I.min, n = D ? I.min : 0, r = I.fraction(t), i = I.fraction(n), a = I.fraction(e), o = Math.abs(r - i);
					return !(o > 0) || ![
						r,
						i,
						a
					].every(Number.isFinite) ? we(e, I.min, I.max) : Math.max(0, Math.min(1, Math.abs(r - a) / o));
				}, M = E ? j(x) : A(x), N = E ? j(S) : A(S);
				if (c) {
					let t = R.x + I.fraction(x) * R.w, n = R.x + I.fraction(S) * R.w, s = w ? b - 1 - r : r, c = R.y + s * p + l.offset;
					i.push({
						x: Math.min(t, n),
						y: c,
						width: Math.abs(n - t),
						height: l.size,
						nearDepth: o.near,
						farDepth: o.far,
						categoryIndex: r,
						seriesIndex: e,
						color: h,
						fillPaint: m.fill,
						lineFill: m.lineFill,
						shape: C,
						baseCoord: t,
						endCoord: n,
						baseScale: M,
						endScale: N,
						omitBaseCap: !1,
						omitEndCap: !1,
						outline: g,
						outlineColor: m.lineColor ?? "rgba(0,0,0,0.42)",
						outlineWidth: m.lineWidthEmu == null ? .75 * a / U : Tt(m.lineWidthEmu, a),
						outlineDash: m.lineDash ?? "solid",
						outlineCustomDash: m.lineCustomDash,
						outlineCap: m.lineCap,
						outlineJoin: m.lineJoin,
						labelValue: v ? d / 100 : d,
						plottedLabelValue: y
					});
				} else {
					let t = R.y + R.h - I.fraction(x) * R.h, n = R.y + R.h - I.fraction(S) * R.h, s = w ? b - 1 - r : r, c = R.x + s * p + l.offset;
					i.push({
						x: c,
						y: Math.min(t, n),
						width: l.size,
						height: Math.abs(n - t),
						nearDepth: o.near,
						farDepth: o.far,
						categoryIndex: r,
						seriesIndex: e,
						color: h,
						fillPaint: m.fill,
						lineFill: m.lineFill,
						shape: C,
						baseCoord: t,
						endCoord: n,
						baseScale: M,
						endScale: N,
						omitBaseCap: !1,
						omitEndCap: !1,
						outline: g,
						outlineColor: m.lineColor ?? "rgba(0,0,0,0.42)",
						outlineWidth: m.lineWidthEmu == null ? .75 * a / U : Tt(m.lineWidthEmu, a),
						outlineDash: m.lineDash ?? "solid",
						outlineCustomDash: m.lineCustomDash,
						outlineCap: m.lineCap,
						outlineJoin: m.lineJoin,
						labelValue: v ? d / 100 : d,
						plottedLabelValue: y
					});
				}
			}
		}
		if (u) {
			let e = Et(i, b);
			for (let t = 0; t < b; t++) {
				let n = e[t];
				for (let e of [-1, 1]) {
					let t = n.filter((t) => Math.sign(t.labelValue) === e && !Bt(t.color) && Math.abs(t.endCoord - t.baseCoord) > 1e-9).sort((e, t) => e.seriesIndex - t.seriesIndex);
					for (let e = 0; e + 1 < t.length; e++) {
						let n = t[e], r = t[e + 1], i = 1e-8 * Math.max(1, Math.abs(n.endCoord), Math.abs(r.baseCoord));
						n.shape !== r.shape || Math.abs(n.endCoord - r.baseCoord) > i || Math.abs(n.endScale - r.baseScale) > 1e-9 || n.nearDepth !== r.nearDepth || n.farDepth !== r.farDepth || (n.omitEndCap = !0, r.omitBaseCap = !0);
					}
				}
				let r = n.find((e) => e.labelValue > 0 && !Bt(e.color)), i = n.find((e) => e.labelValue < 0 && !Bt(e.color));
				if (r && i) {
					let e = 1e-8 * Math.max(1, Math.abs(r.baseCoord), Math.abs(i.baseCoord));
					r.shape === i.shape && Math.abs(r.baseCoord - i.baseCoord) <= e && Math.abs(r.baseScale - i.baseScale) <= 1e-9 && r.nearDepth === i.nearDepth && r.farDepth === i.farDepth && (r.omitBaseCap = !0, i.omitBaseCap = !0);
				}
			}
		}
		bn(e, t, _, I, c ? "horizontal" : "vertical", b, T, w, a);
		let g = {
			remaining: rt,
			exceeded: !1
		}, y = i.map((t) => {
			let n = Ut(_, t.shape, c, t.x, t.y, t.width, t.height, t.baseCoord, t.endCoord, t.nearDepth, t.farDepth, t.color, t.baseScale, t.endScale, t.omitBaseCap, t.omitEndCap, t.outline && t.outlineColor ? {
				color: t.outlineColor,
				width: t.outlineWidth,
				dash: x(t.outlineCustomDash, t.outlineDash, t.outlineWidth),
				cap: t.outlineCap,
				join: t.outlineJoin
			} : void 0, g);
			return Jt(e, n, "fill", t.fillPaint, o), Jt(e, n, "outline", t.lineFill, o), {
				item: t,
				faces: n
			};
		}), S = y.flatMap((e) => e.faces);
		if (g.exceeded) return Yt(e, n), !0;
		for (let t of nt(S)) Kt(e, t);
		for (let { item: n, faces: r } of y) {
			let i = t.series[n.seriesIndex], o = G[n.seriesIndex].get(n.categoryIndex), s = Le(t, i, n.categoryIndex, n.seriesIndex), c = m(o?.chartexStyle), u = m(i.chartexStyle);
			xe(e, c ?? u, l(t, "dataPoint3D", n.seriesIndex), c ? n.categoryIndex : s, a, (e) => qt(e, r), s);
		}
		for (let r of i) {
			let i = t.series[r.seriesIndex], s = c ? _.project(r.endCoord, r.y + r.height / 2, (r.nearDepth + r.farDepth) / 2) : _.project(r.x + r.width / 2, r.endCoord, (r.nearDepth + r.farDepth) / 2), l = q[r.seriesIndex].get(r.categoryIndex);
			nn(t, i, l) && ee.push(() => tn(e, t, i, r.seriesIndex, r.categoryIndex, r.labelValue, s, n, a, 0, void 0, l, "t", s, !0, t.valAxisDisplayUnits, I.max, r.plottedLabelValue, o));
		}
	} else {
		let i = t.series.map(() => Array(b).fill(0)), s = t.series.map(() => Array(b).fill(0));
		if (u) {
			let e = Array(b).fill(0), n = Array(b).fill(0);
			for (let r = 0; r < t.series.length; r++) for (let t = 0; t < b; t++) {
				let a = k(r, t), o = a >= 0 ? e[t] : n[t];
				i[r][t] = o, s[r][t] = jt(o, a), a >= 0 ? e[t] = jt(e[t], a) : n[t] = jt(n[t], a);
			}
		}
		let c = (e) => {
			let t = _.seriesDepth(e, z, u), n = 0, i = 0;
			for (let a = 0; a < b; a++) {
				if (!O(e, a)) continue;
				let o = u ? s[e][a] : k(e, a), c = R.x + r(a, b, T, w) * R.w, l = R.y + R.h - I.fraction(L(o)) * R.h;
				n += _.cameraDepth(c, l, t), i++;
			}
			return i > 0 ? n / i : -Infinity;
		}, l = t.series.map((e, t) => t).sort((e, t) => c(e) - c(t) || t - e), d = t.series.map((e, n) => $(t, e, void 0, n, n)), f = [], p = [], m = !1;
		for (let c of l) {
			if (m) break;
			let l = t.series[c], h = d[c], g = h.fill === null ? "transparent" : h.color, y = u ? _.prismInterval(0, 1, !0) : _.prismInterval(c, z, !1), S = R.x + R.w / 2, D = R.y + R.h / 2, A = _.cameraDepth(S, D, y.near) >= _.cameraDepth(S, D, y.far) ? y.near : y.far, j = [], M = [], N = [], P = [], F = [], L = [], B = [], H = [], U = [], K = [];
			for (let e = 0; e < b; e++) {
				if (!O(c, e)) {
					j.push(null), M.push(null), N.push(null), P.push(null), F.push(null), L.push(null), B.push(null), H.push(null), U.push(null), K.push(null);
					continue;
				}
				let n = u ? s[c][e] : k(c, e), a = u ? i[c][e] : 0, o = R.x + r(e, b, T, w) * R.w, l = I.fraction(n), d = I.fraction(a), f = Number.isFinite(d) ? d : a <= I.min ? 0 : 1, p = Number.isFinite(l) && l >= 0 && l <= 1, m = Number.isFinite(l) ? Math.max(0, Math.min(1, l)) : n <= I.min ? 0 : 1, h = R.y + R.h - m * R.h, g = R.y + R.h - Math.max(0, Math.min(1, f)) * R.h;
				j.push(t.chartType.toLowerCase().includes("area") || p ? _.project(o, h, A) : null), M.push(_.project(o, g, A)), N.push(p ? _.cameraDepth(o, h, A) : null), P.push(_.cameraDepth(o, g, A)), F.push(n), L.push(o), B.push(h), H.push(g), U.push(l), K.push(f);
			}
			let ne = [], J = null;
			for (let e = 0; e < j.length; e++) {
				let t = j[e], n = M[e];
				if (!t || !n) {
					E === "gap" && (J && ne.push(J), J = null);
					continue;
				}
				J ??= {
					upper: [],
					lower: [],
					upperDepths: [],
					lowerDepths: [],
					indices: [],
					sceneXs: [],
					upperYs: [],
					lowerYs: [],
					upperFractions: [],
					lowerFractions: []
				}, J.upper.push(t), J.lower.push(n), J.upperDepths.push(N[e] ?? 0), J.lowerDepths.push(P[e] ?? 0), J.indices.push(e), J.sceneXs.push(L[e] ?? 0), J.upperYs.push(B[e] ?? 0), J.lowerYs.push(H[e] ?? 0), J.upperFractions.push(U[e] ?? 0), J.lowerFractions.push(K[e] ?? 0);
			}
			J && ne.push(J);
			let Y = [], X = [];
			if (t.chartType.toLowerCase().includes("area")) {
				for (let t of ne) {
					let n = null;
					for (let r = 0; r + 1 < t.upper.length; r++) {
						let i = Xe(t.lowerFractions[r], t.lowerFractions[r + 1], t.upperFractions[r], t.upperFractions[r + 1]);
						for (let a = 0; a < i.length; a++) {
							let o = i[a], s = t.sceneXs[r] + (t.sceneXs[r + 1] - t.sceneXs[r]) * o.startT, c = t.sceneXs[r] + (t.sceneXs[r + 1] - t.sceneXs[r]) * o.endT, l = R.y + R.h - o.lowerStart * R.h, u = R.y + R.h - o.lowerEnd * R.h, d = R.y + R.h - o.upperStart * R.h, p = R.y + R.h - o.upperEnd * R.h, h = {
								..._.project(s, d, A),
								cameraDepth: _.cameraDepth(s, d, A),
								cameraWeight: _.cameraProjectionWeight(s, d, A)
							}, v = {
								..._.project(c, p, A),
								cameraDepth: _.cameraDepth(c, p, A),
								cameraWeight: _.cameraProjectionWeight(c, p, A)
							};
							n != null && Math.hypot(n.at(-1).x - h.x, n.at(-1).y - h.y) <= 1e-8 ? n.push(v) : (n && n.length >= 2 && Y.push(n), n = [h, v]);
							let b = Ht(_, s, c, l, u, d, p, y.near, y.far, g, r === 0 && a === 0 && o.startT === 0, r + 2 === t.upper.length && a + 1 === i.length && o.endT === 1);
							for (let t of b) {
								if (f.length >= 1e4) {
									m = !0;
									break;
								}
								f.push({
									points: t.points,
									cameraDepth: t.cameraDepth,
									cameraDepths: t.cameraDepths,
									cameraWeights: t.cameraWeights,
									layer: 0,
									paint: () => Kt(e, t)
								}), X.push(t);
							}
							if (m) break;
						}
						if (m) break;
					}
					if (n && n.length >= 2 && Y.push(n), m) break;
				}
				Jt(e, X, "fill", h.fill, o);
			}
			let re = [];
			if (!t.chartType.toLowerCase().includes("area")) {
				let e = [], t = null;
				for (let n = 0; n < b; n++) {
					let i = F[n], a = i == null ? NaN : I.fraction(i);
					if (i == null || !Number.isFinite(a)) {
						E === "gap" && t && (e.push(t), t = null);
						continue;
					}
					t ??= [], t.push({
						x: R.x + r(n, b, T, w) * R.w,
						fraction: a,
						ownerIndex: n
					});
				}
				t && e.push(t);
				let n = (e) => {
					let t = Math.max(0, Math.min(1, e.fraction)), n = R.y + R.h - t * R.h;
					return {
						..._.project(e.x, n, A),
						cameraDepth: _.cameraDepth(e.x, n, A),
						cameraWeight: _.cameraProjectionWeight(e.x, n, A)
					};
				}, i = (e) => {
					e && e.path.length >= 2 && re.push(e);
				};
				for (let t of e) {
					if (t.length < 2) continue;
					let e = [t[0]];
					for (let n = 0; n + 1 < t.length; n++) {
						let r = t[n - 1] ?? t[n], i = t[n], a = t[n + 1], o = t[n + 2] ?? a;
						if (l.smooth !== !0 || t.length < 3) {
							e.push(a);
							continue;
						}
						let s = {
							x: i.x + (a.x - r.x) / 6,
							fraction: i.fraction + (a.fraction - r.fraction) / 6
						}, c = {
							x: a.x - (o.x - i.x) / 6,
							fraction: a.fraction - (o.fraction - i.fraction) / 6
						};
						for (let t = 1; t <= 12; t++) {
							let n = t / 12, r = 1 - n;
							e.push({
								x: r * r * r * i.x + 3 * r * r * n * s.x + 3 * r * n * n * c.x + n * n * n * a.x,
								fraction: r * r * r * i.fraction + 3 * r * r * n * s.fraction + 3 * r * n * n * c.fraction + n * n * n * a.fraction,
								ownerIndex: a.ownerIndex
							});
						}
					}
					let r = null, a = 0;
					for (let t = 0; t + 1 < e.length; t++) {
						let o = e[t], s = e[t + 1], c = (e) => _.project(e.x, R.y + R.h - e.fraction * R.h, A), l = c(o), u = c(s), d = Math.hypot(u.x - l.x, u.y - l.y), f = Number.isFinite(d) ? d : Math.hypot(s.x - o.x, (s.fraction - o.fraction) * R.h), p = Ye(o.fraction, s.fraction);
						if (!p || p.endT - p.startT <= 1e-12) {
							i(r), r = null, a += f;
							continue;
						}
						let m = (e) => ({
							x: o.x + (s.x - o.x) * e,
							fraction: o.fraction + (s.fraction - o.fraction) * e,
							ownerIndex: s.ownerIndex
						}), h = c(m(p.startT)), g = Math.hypot(h.x - l.x, h.y - l.y), v = n(m(p.startT)), y = n(m(p.endT)), b = m(p.startT), x = m(p.endT), S = (e) => ({
							x: e.x,
							y: R.y + R.h - Math.max(0, Math.min(1, e.fraction)) * R.h
						});
						r != null && Math.hypot(r.path.at(-1).x - v.x, r.path.at(-1).y - v.y) <= 1e-8 && r.ownerIndex === s.ownerIndex ? (r.path.push(y), r.modelPath.push(S(x)), r.endClipped = t + 1 < e.length - 1 || p.endT < 1) : (i(r), r = {
							path: [v, y],
							modelPath: [S(b), S(x)],
							ownerIndex: s.ownerIndex,
							startClipped: t > 0 || p.startT > 0,
							endClipped: t + 1 < e.length - 1 || p.endT < 1,
							dashOffset: a + (Number.isFinite(g) ? g : f * p.startT)
						}), a += f;
					}
					i(r);
				}
			}
			let Z = t.chartType.toLowerCase().includes("area"), ie = l.lineHidden != null || l.lineColor != null || l.lineWidthEmu != null || l.chartexStyle?.lineHidden != null || l.chartexStyle?.lineColors?.some(Boolean) || l.chartexStyle?.lineWidthEmu != null || l.chartexStyle?.lineDash != null || l.chartexStyle?.lineCap != null || l.chartexStyle?.lineJoin != null || h.lineColor != null || h.lineFill !== void 0;
			if (!Z || h.lineFill !== null && ie) {
				let n = /* @__PURE__ */ new Map(), r = (e) => {
					let r = G[c].get(e);
					if (!Pt(r)) return h;
					let i = n.get(e);
					return i || (i = $(t, l, r, e, c), n.set(e, i)), i;
				}, i = /* @__PURE__ */ new Map(), s = {
					remaining: rt,
					exceeded: !1
				}, u = (t, n, r, o = r, c = 0, l) => {
					if (n.lineFill === null) return;
					let u = n === h ? g : n.color, d = n.lineColor ?? Ne(u, .7), p = n.lineWidthEmu ? Math.max(.5, n.lineWidthEmu / W) * a : Z ? .75 * a : Math.max(1, 2 * a), v = {
						width: p,
						dash: x(n.lineCustomDash, n.lineDash, p),
						dashOffset: c,
						lineCap: n.lineCap,
						startCap: r,
						endCap: o,
						lineJoin: n.lineJoin
					};
					if (!Z && l && l.length >= 2) {
						let t = dt(l.map((e) => ({
							...e,
							cameraDepth: 0,
							cameraWeight: 1
						})), v);
						if (t == null) {
							m = !0;
							return;
						}
						let r = i.get(n) ?? [];
						for (let n of t) {
							let t = qe({
								outline: n.points,
								nearDepth: y.near,
								farDepth: y.far
							});
							if (!t) continue;
							let i = Wt(_, t, d, void 0, s).map((e) => ({
								...e,
								paintRole: "outline"
							}));
							if (s.exceeded) {
								m = !0;
								return;
							}
							r.push(...i);
							for (let t of i) f.push({
								points: t.points,
								cameraDepth: t.cameraDepth,
								cameraDepths: t.cameraDepths,
								cameraWeights: t.cameraWeights,
								layer: 1,
								paint: () => Kt(e, t)
							});
						}
						i.set(n, r);
						return;
					}
					let b = dt(t, v);
					if (b == null) {
						m = !0;
						return;
					}
					if (f.length + b.length > 1e4) {
						m = !0;
						return;
					}
					for (let t of b) {
						let r = {
							points: t.points,
							color: d,
							paintRole: "outline",
							shade: 0,
							cameraDepth: t.cameraDepth,
							cameraDepths: t.cameraDepths,
							cameraWeights: t.cameraWeights,
							outline: !1
						}, a = i.get(n) ?? [];
						a.push(r), i.set(n, a), f.push({
							points: t.points,
							cameraDepth: t.cameraDepth,
							cameraDepths: t.cameraDepths,
							cameraWeights: t.cameraWeights,
							layer: 1,
							paint: () => Kt(e, r)
						});
					}
				};
				if (Z) for (let e of Y) u(e, h, h.lineCap);
				else for (let e of re) {
					let t = r(e.ownerIndex);
					u(e.path, t, e.startClipped ? "butt" : t.lineCap, e.endClipped ? "butt" : t.lineCap, e.dashOffset, e.modelPath);
				}
				for (let [t, n] of i) Jt(e, n, "outline", t.lineFill, o);
			}
			let ae = (Z ? l.showMarker === !0 || C(l) : l.showMarker === !0) && l.markerSymbol !== "none";
			if ((t.chartType.toLowerCase().includes("line") || Z) && (ae || V(l))) for (let n = 0; n < j.length; n++) {
				let r = j[n];
				if (!r) continue;
				let i = G[c].get(n), s = te(l, i, "circle", ae);
				if (s === "none") continue;
				let u = i?.markerSize ?? l.markerSize ?? 5, d = ln(t, l, i, n, c, l.color ?? xt[c % xt.length], a);
				p.push(() => en(e, r, s, Math.max(2, u) * a, d.fill === "00000000" ? "transparent" : `#${d.fill.replace(/^#/, "")}`, d.line === "00000000" ? "rgba(0,0,0,0)" : `#${d.line.replace(/^#/, "")}`, d.lineWidth, d.fillPaint, o, a, d.effectDirect, d.effectFallback, d.effectIndex, d.effectFallbackIndex, d.linePaint, d.lineDash, d.lineCustomDash, d.lineCap, d.lineJoin));
			}
			for (let r = 0; r < j.length; r++) {
				let i = j[r];
				if (!i) continue;
				let d = k(c, r), f = G[c].get(r), p = f?.markerSize ?? l.markerSize ?? 5, m = q[c].get(r);
				nn(t, l, m) && ee.push(() => tn(e, t, l, c, r, v ? d / 100 : d, i, n, a, l.showMarker === !0 || f?.markerSymbol != null ? p * a / 2 : 0, void 0, m, "t", i, !0, t.valAxisDisplayUnits, I.max, u ? s[c][r] : d, o));
			}
		}
		if (m) return Yt(e, n), !0;
		for (let e of nt(f)) e.paint();
		for (let e of p) e();
	}
	xn(e, t, _, I, b, T, w, a, c ? "horizontal" : "vertical"), On(e, t, _, I, b, T, w, c ? "horizontal" : "vertical", s, a), cn(e, t, n, _, I, b, T, w, c ? "horizontal" : "vertical", s, a);
	let ne = Dn(t, _, I, b, T, w, c ? "horizontal" : "vertical"), J = (e, t) => {
		if (t !== "low" && t !== "high") return ne;
		let n = _.topology.nearDepth, r = ne.axisX, i = ne.axisY;
		if (e === "value" === c) {
			let e = R.y, r = R.y + R.h, a = _.project(R.x + R.w / 2, e, n), o = _.project(R.x + R.w / 2, r, n), s = a.y >= o.y ? e : r;
			i = t === "low" ? s : s === e ? r : e;
		} else {
			let e = R.x, i = R.x + R.w, a = _.project(e, R.y + R.h / 2, n), o = _.project(i, R.y + R.h / 2, n), s = a.x <= o.x ? e : i;
			r = t === "low" ? s : s === e ? i : e;
		}
		return {
			axisX: r,
			axisY: i,
			depth: n,
			horizontalStart: _.project(R.x, i, n),
			horizontalEnd: _.project(R.x + R.w, i, n),
			verticalStart: _.project(r, R.y + R.h, n),
			verticalEnd: _.project(r, R.y, n)
		};
	}, Y = J("value", t.valAxisTickLabelPos), X = J("category", t.catAxisTickLabelPos), re = H(t.valAxisFontSizeHpt, a) ?? 9 * a;
	if (e.font = `${t.valAxisFontItalic ? "italic " : ""}${t.valAxisFontBold ? "bold " : ""}${re}px ${Lt(t, t.valAxisFontFace)}`, e.fillStyle = t.valAxisFontColor ? `#${t.valAxisFontColor}` : "#595959", e.textAlign = c ? "center" : "right", e.textBaseline = c ? "top" : "middle", !t.valAxisHidden && t.valAxisTickLabelPos !== "none") {
		let { axisX: n, axisY: r, depth: o } = Y, s = _.project(R.x + R.w / 2, R.y + R.h / 2, o), l = Sn(c ? Y.horizontalStart : Y.verticalStart, c ? Y.horizontalEnd : Y.verticalEnd, s, c ? "vertical" : "horizontal");
		e.textAlign = Math.abs(l.x) < .2 ? "center" : l.x < 0 ? "right" : "left", e.textBaseline = Math.abs(l.y) < .2 ? "middle" : l.y < 0 ? "bottom" : "top";
		let u = En(t.valAxisMajorTickMark, t.valAxisLineHidden, a, 5), d = t.valAxisDisplayUnits?.divisor;
		for (let a of I.majorTicks) {
			let s = c ? _.project(R.x + I.fraction(a) * R.w, r, o) : _.project(n, R.y + R.h - I.fraction(a) * R.h, o);
			B(e, i(v ? a / 100 : d != null && Number.isFinite(d) && d > 0 ? a / d : a, v ? t.valAxisFormatCode ?? "0%" : t.valAxisFormatCode, t.date1904), s.x + l.x * u, s.y + l.y * u, K(re));
		}
	}
	let Z = H(t.catAxisFontSizeHpt, a) ?? 9 * a;
	if (e.font = `${t.catAxisFontItalic ? "italic " : ""}${t.catAxisFontBold ? "bold " : ""}${Z}px ${Lt(t, t.catAxisFontFace)}`, e.fillStyle = t.catAxisFontColor ? `#${t.catAxisFontColor}` : "#595959", !t.catAxisHidden && t.catAxisTickLabelPos !== "none") {
		let n = me(En(t.catAxisMajorTickMark, t.catAxisLineHidden, a, 6), t.catAxisLabelOffsetPercent), i = Array.from({ length: b }, (e, n) => he(String(y[n] ?? n + 1), t.catAxisFormatCode, t.date1904)), o = Xt(t);
		if (o == null && (o = 0, !c && b > 1)) {
			let t = Infinity, n = null, a = X.axisY;
			for (let e = 0; e < b; e++) {
				let i = r(e, b, T, w), o = _.project(R.x + i * R.w, a, _.topology.nearDepth);
				n && (t = Math.min(t, Math.hypot(o.x - n.x, o.y - n.y))), n = o;
			}
			Math.max(0, ...i.map((t) => M(e, t))) > t * .9 && (o = -Math.PI / 4);
		}
		let s = Math.max(1, Math.floor(t.catAxisTickLabelSkip ?? 1));
		for (let t = 0; t < b; t += s) {
			let a = r(t, b, T, w), { axisX: s, axisY: l, depth: u } = X, d = c ? _.project(s, R.y + r(t, b, T, w) * R.h, u) : _.project(R.x + a * R.w, l, u);
			if (c) {
				let r = _.project(s, R.y + R.h / 2, u), a = _.project(R.x + R.w / 2, R.y + R.h / 2, u), o = r.x <= a.x;
				e.textAlign = o ? "right" : "left", e.textBaseline = "middle", B(e, i[t], d.x + (o ? -n : n), d.y, K(Z));
			} else {
				let r = _.project(R.x + R.w / 2, R.y + R.h / 2, u), a = Sn(X.horizontalStart, X.horizontalEnd, r, "vertical");
				$t(e, i[t], d, o, c, a.y < 0 ? -1 : 1, n, K(Z));
			}
		}
	}
	sn(e, t, n, f, c, a);
	for (let e of ee) e();
	return fn(e, t, p, a, !1, h, o), !0;
}
function An(e, t, n, r, i) {
	if (!t.threeD || t.chartType !== "pie") return !1;
	let a = t.series[0];
	if (!a) return !0;
	let o = a.values.flatMap((e, t) => e != null && Number.isFinite(e) ? [{
		index: t,
		value: Math.abs(e)
	}] : []), s = 0;
	for (let e of o) s = Math.max(s, e.value);
	if (!(s > 0)) return !0;
	let c = o.reduce((e, t) => e + t.value / s, 0);
	if (!(c > 0) || !Number.isFinite(c)) return !0;
	let { plot: u, legend: d, legendMeasure: f } = rn(e, t, n, r, "radial", i), p = Te({
		...t.threeD,
		rotationY: t.threeD.rotationY ?? 0,
		heightPercent: void 0,
		depthPercent: 100
	}, u, {
		sceneDepthScale: 1,
		sceneHeightScale: .15
	});
	if (!p) return !0;
	let h = new Map(a.dataPointOverrides?.map((e) => [e.idx, e]) ?? []), g = 0;
	for (let e of h.values()) e.explosion != null && Number.isFinite(e.explosion) && (g = Math.max(g, Math.max(0, Math.min(100, e.explosion)) / 100));
	let { scene: _ } = p, v = Math.min(_.w * .45 / (1 + g), p.modelDepth * .45 / (1 + g), _.h / .45);
	if (!(v > 0)) return !0;
	let y = _.x + _.w / 2, b = _.y + _.h / 2, S = .5, C = v * .3 * Ae(t.threeD), w = 0, T = [], E = new Map(a.dataLabelOverrides?.map((e) => [e.idx, e]) ?? []), D = Math.max(48, Math.min(128, Math.ceil(Math.PI * 2 * v / 4)));
	for (let e of o) {
		let n = e.value / s / c, r = mn(t.firstSliceAngle, w, n), i = h.get(e.index), o = $(t, a, i, e.index, 0), l = r.middle, u = i?.explosion != null && Number.isFinite(i.explosion) ? Math.max(0, Math.min(100, i.explosion)) / 100 : 0, d = y + Math.cos(l) * v * u, f = S + Math.sin(l) * v * u / p.modelDepth, m = Math.max(2, Math.ceil(D * n)), g = Je({
			centerX: d,
			centerY: b,
			centerDepth: f,
			radius: v,
			modelDepth: p.modelDepth,
			thickness: C,
			startAngle: r.start,
			endAngle: r.end,
			segments: m
		});
		if (!g) {
			w += n;
			continue;
		}
		T.push({
			index: e.index,
			start: r.start,
			end: r.end,
			color: o.fill === null ? "transparent" : o.color,
			fillPaint: o.fill,
			value: e.value,
			percentValue: n,
			centerX: d,
			centerDepth: f,
			segments: m,
			mesh: g,
			lineColor: o.lineColor,
			lineFill: o.lineFill,
			lineWidthEmu: o.lineWidthEmu ?? null,
			lineDash: o.lineDash ?? "solid",
			lineCustomDash: o.lineCustomDash,
			lineCap: o.lineCap,
			lineJoin: o.lineJoin
		}), w += n;
	}
	p = Me(p, T.flatMap((e) => e.mesh.vertices), u, .08);
	let O = [], k = {
		remaining: rt,
		exceeded: !1
	}, A = (e) => {
		let t = e.lineWidthEmu == null ? .75 * r : Math.max(.25, e.lineWidthEmu / W * r);
		return e.lineFill !== null && (e.lineColor != null || e.lineFill !== void 0) ? {
			color: e.lineColor ?? "rgba(0,0,0,0.42)",
			width: t,
			dash: x(e.lineCustomDash, e.lineDash, t),
			cap: e.lineCap,
			join: e.lineJoin
		} : void 0;
	}, j = T.map((t) => {
		let n = Wt(p, t.mesh, t.color, void 0, k);
		return Jt(e, n, "fill", t.fillPaint, i), {
			slice: t,
			faces: n
		};
	}), M = j.flatMap((e) => e.faces), P = [], F = T.map(A), I = F[0], L = (e) => e == null ? null : [
		e.color,
		e.width,
		e.dash.join(","),
		e.cap,
		e.join
	].join("|"), R = I != null && T.every((e) => e.lineFill === void 0) && F.every((e) => L(e) === L(I)) && T.every((e) => Math.abs(e.centerX - y) < 1e-9 && Math.abs(e.centerDepth - S) < 1e-9);
	if (R) P.push(...Gt(p, T, b, v, C, I, k));
	else for (let t = 0; t < T.length; t++) {
		let n = F[t];
		if (!n) continue;
		let r = Wt(p, T[t].mesh, "transparent", n, k, !0);
		Jt(e, r, "outline", T[t].lineFill, i), P.push(...r);
	}
	if (k.exceeded) return Yt(e, n), !0;
	if (R) {
		for (let t of nt(M)) Kt(e, t);
		for (let t of nt(P)) Kt(e, t);
	} else for (let t of nt([...M, ...P])) Kt(e, t);
	for (let { slice: n, faces: i } of j) {
		let o = h.get(n.index), s = Le(t, a, n.index, 0), c = m(o?.chartexStyle);
		xe(e, c ?? m(a.chartexStyle), l(t, "dataPoint3D", 0), c ? n.index : s, r, (e) => qt(e, i), s);
	}
	for (let n of T) {
		let o = (n.start + n.end) / 2, s = E.get(n.index);
		if (nn(t, a, s)) {
			let c = a.seriesDataLabels, l = H(s?.fontSizeHpt ?? c?.fontSizeHpt ?? t.dataLabelFontSizeHpt, r) ?? 9 * r;
			e.font = `${s?.fontBold ?? c?.fontBold ?? t.dataLabelFontBold ? "bold " : ""}${l}px ${Rt(t, s?.fontFace ?? c?.fontFace ?? t.dataLabelFontFace)}`;
			let d = N({
				customText: s?.text,
				showCategory: s?.showCatName ?? c?.showCatName ?? !1,
				showSeries: s?.showSerName ?? c?.showSerName ?? !1,
				showValue: s?.showVal ?? c?.showVal ?? t.showDataLabels,
				showPercent: s?.showPercent ?? c?.showPercent ?? !1,
				category: a.categories?.[n.index] ?? t.categories[n.index] ?? `${n.index + 1}`,
				seriesName: a.name || "Series 1",
				sourceValue: n.value,
				percentRatio: n.percentValue,
				formatCode: s?.formatCode ?? c?.formatCode ?? t.dataLabelFormatCode ?? a.valFormatCode,
				separator: s?.separator ?? c?.separator,
				date1904: t.date1904
			}), f = Rt(t, s?.fontFace ?? c?.fontFace ?? t.dataLabelFontFace), m = s?.text && s.richRuns?.length ? Fe(e, {
				runs: s.richRuns,
				ptToPx: r,
				fontFamily: f,
				fallbackBold: s.fontBold ?? c?.fontBold ?? t.dataLabelFontBold ?? !1,
				fontFamilyForFace: (e) => Rt(t, e)
			}, l, `#${s.fontColor ?? c?.fontColor ?? a.labelColor ?? t.dataLabelFontColor ?? "111111"}`) : null, h = s?.position ?? c?.position ?? t.dataLabelPosition, g = b - C / 2, _ = b + C / 2, y = p.cameraDepth(n.centerX, g, n.centerDepth) >= p.cameraDepth(n.centerX, _, n.centerDepth) ? g : _, x = 0, S = null;
			for (let e = 0; e <= 12; e++) {
				let t = n.start + (n.end - n.start) * e / 12, r = p.project(n.centerX + Math.cos(t) * v * .64, y, n.centerDepth + Math.sin(t) * v * .64 / p.modelDepth);
				S && (x += Math.hypot(r.x - S.x, r.y - S.y)), S = r;
			}
			let w = (h == null || h === "bestFit") && (n.percentValue === 0 || x < (m?.width ?? e.measureText(d).width)) || h === "outEnd", T = v * (w ? 1.12 : .64), E = p.project(n.centerX + Math.cos(o) * T, y, n.centerDepth + Math.sin(o) * T / p.modelDepth), D = p.project(n.centerX + Math.cos(o) * v, y, n.centerDepth + Math.sin(o) * v / p.modelDepth);
			O.push(() => tn(e, t, a, 0, n.index, n.value, E, u, r, 0, n.percentValue, s, "ctr", D, w, void 0, void 0, void 0, i));
		}
	}
	for (let e of O) e();
	let z = a.categories?.length ? a.categories : t.categories, B = Array.from({ length: z.length }, (e, n) => {
		let r = h.get(n), i = Re(t, a, r, n, 0);
		if (i === null) return "00000000";
		let o = i?.fillType === "solid" ? i.color : r?.color ?? a.dataPointColors?.[n] ?? a.color;
		return o === "00000000" ? "00000000" : Ne(o ? `#${o}` : Dt(n), .8).replace(/^#/, "");
	});
	return fn(e, {
		...t,
		categories: z,
		series: [{
			...a,
			categories: z,
			dataPointColors: B
		}]
	}, d, r, !0, f, i), !0;
}
function jn(e, t, n, r, i = 0) {
	return !t.threeD || !(t.chartType === "pie" || wt.has(t.chartType)) ? !1 : Mt(t) ? An(e, t, n, r, i) ? !0 : kn(e, t, n, r, i) : (Yt(e, n), !0);
}
var Mn = Ie({ render: jn }, "threeD");
export { Mn as threeD };
