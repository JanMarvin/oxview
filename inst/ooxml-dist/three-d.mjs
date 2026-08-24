import { A as e, At as t, B as n, Bt as r, Ct as i, Dt as a, E as o, Et as s, H as c, Ht as l, It as u, J as d, Jt as f, Kt as p, Lt as m, Mt as h, Nt as g, R as _, Rt as v, St as y, Ut as b, Wt as x, Xt as S, Y as C, Yt as w, _t as T, a as E, an as D, at as O, b as k, bt as A, ct as j, ft as M, ht as N, it as P, jt as F, kt as I, mt as L, n as R, ot as ee, r as z, rn as B, st as V, t as H, v as U, vt as te, wt as W, x as G, xt as ne, yt as re } from "./plot-area-frame-Dg1VIpUU.js";
import { D as K, E as q, O as ie, _ as J, a as Y, c as ae, d as X, g as oe, h as se, i as ce, k as le, m as ue, n as de, o as fe, r as pe, s as me, t as he, x as ge } from "./three-d-BYiWCNlz.js";
import { t as _e } from "./renderer-module-contract-0bO_5SC0.js";
function ve(e) {
	switch (e) {
		case "cylinder":
		case "cone":
		case "coneToMax":
		case "pyramid":
		case "pyramidToMax": return e;
		default: return "box";
	}
}
var ye = (e) => Math.max(0, Math.min(1, e));
function be(e, t) {
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
function xe(e, t) {
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
		let r = be(e, t.indices);
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
function Se(e) {
	let { horizontal: t, crossStart: n, crossSize: r, baseCoord: i, endCoord: a, nearDepth: o, farDepth: s } = e;
	if (![
		n,
		r,
		i,
		a,
		o,
		s
	].every(Number.isFinite) || r <= 0 || i === a || o === s) return null;
	let c = ve(e.shape), l = c === "cylinder" || c === "cone" || c === "coneToMax", u = c !== "box" && c !== "cylinder", d = c === "coneToMax" || c === "pyramidToMax", f = l ? Math.max(8, Math.min(64, Math.trunc(e.roundSegments ?? 32))) : 4, p = ye(e.baseScale ?? (d ? e.toMaxBaseScale ?? 1 : 1)), m = ye(e.endScale ?? (u ? d ? e.toMaxEndScale ?? 0 : 0 : 1));
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
		faces: xe(y, w),
		silhouetteEdges: T
	};
}
function Ce(e) {
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
		faces: xe(_, [
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
function we(e) {
	let t = e.upper0 - e.lower0, n = e.upper1 - e.lower1;
	if (Number.isFinite(t) && Number.isFinite(n) && t * n < 0) {
		let r = t / (t - n), i = e.x0 + (e.x1 - e.x0) * r, a = e.lower0 + (e.lower1 - e.lower0) * r;
		return [Ce({
			...e,
			x1: i,
			lower1: a,
			upper1: a,
			capEnd: !1
		}), Ce({
			...e,
			x0: i,
			lower0: a,
			upper0: a,
			capStart: !1
		})].filter((e) => e != null);
	}
	let r = Ce(e);
	return r ? [r] : [];
}
function Te(e) {
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
		faces: xe(a, [
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
function Ee(e) {
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
	let l = Math.min(Math.PI * 2, c - s), u = l >= Math.PI * 2 - 1e-9, d = Math.max(2, Math.min(128, Math.trunc(e.segments ?? Math.ceil(32 * l / (Math.PI * 2))))), f = n - o / 2, p = n + o / 2, m = [{
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
		faces: xe(m, v),
		silhouetteEdges: h.slice(0, u ? void 0 : -1).map((e, t) => [e, g[t]])
	};
}
//#endregion
//#region packages/core/src/chart/three-d-scene.ts
function De(e, t) {
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
function Oe(e, t, n, r) {
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
var ke = (e) => ({
	minX: Math.min(...e.map((e) => e.x)),
	maxX: Math.max(...e.map((e) => e.x)),
	minY: Math.min(...e.map((e) => e.y)),
	maxY: Math.max(...e.map((e) => e.y))
}), Ae = (e, t) => {
	let n = !1;
	for (let r = 0, i = e.length - 1; r < e.length; i = r++) {
		let a = e[r], o = e[i], s = (a.x - t.x) * (o.y - t.y) - (a.y - t.y) * (o.x - t.x), c = Math.max(1, Math.abs(a.x), Math.abs(a.y), Math.abs(o.x), Math.abs(o.y));
		if (Math.abs(s) <= c * 1e-9 && t.x >= Math.min(a.x, o.x) - 1e-9 && t.x <= Math.max(a.x, o.x) + 1e-9 && t.y >= Math.min(a.y, o.y) - 1e-9 && t.y <= Math.max(a.y, o.y) + 1e-9) return !0;
		a.y > t.y != o.y > t.y && t.x < (o.x - a.x) * (t.y - a.y) / (o.y - a.y) + a.x && (n = !n);
	}
	return n;
}, je = (e, t, n, r) => {
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
function Me(e, t, n, r) {
	let i = [], a = (e) => {
		i.length >= 12 || i.some((t) => Math.hypot(t.x - e.x, t.y - e.y) < 1e-7) || i.push(e);
	}, o = {
		x: (Math.max(n.minX, r.minX) + Math.min(n.maxX, r.maxX)) / 2,
		y: (Math.max(n.minY, r.minY) + Math.min(n.maxY, r.maxY)) / 2
	};
	Ae(e, o) && Ae(t, o) && a(o);
	for (let n of e) Ae(t, n) && a(n);
	for (let n of t) Ae(e, n) && a(n);
	for (let n = 0; n < e.length && i.length < 12; n++) for (let r = 0; r < t.length && i.length < 12; r++) {
		let i = je(e[n], e[(n + 1) % e.length], t[r], t[(r + 1) % t.length]);
		i && a(i);
	}
	return i;
}
function Ne(e, t) {
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
function Pe(e) {
	if (e.length < 2) return [...e];
	let t = [...e.keys()].sort((t, n) => e[t].cameraDepth - e[n].cameraDepth || t - n), n = e.map((e) => ke(e.points)), r = [...e.keys()].sort((e, t) => n[e].minX - n[t].minX || e - t), i = e.map(() => /* @__PURE__ */ new Set()), a = e.map(() => 0), o = [], s = 0;
	for (let c of r) {
		for (let e = o.length - 1; e >= 0; e--) n[o[e]].maxX < n[c].minX - 1e-9 && o.splice(e, 1);
		for (let r of o) {
			if (++s > 2e5) return t.map((t) => e[t]);
			if (n[r].maxY < n[c].minY - 1e-9 || n[c].maxY < n[r].minY - 1e-9) continue;
			let o = Me(e[r].points, e[c].points, n[r], n[c]), l = 0;
			for (let t of o) {
				let n = Ne(e[r], t) - Ne(e[c], t), i = 1e-8 * Math.max(1, Math.abs(e[r].cameraDepth), Math.abs(e[c].cameraDepth));
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
//#endregion
//#region packages/core/src/chart/three-d-stroke.ts
var Z = 1e-9, Fe = 1e4, Ie = (e, t, n) => ({
	x: e.x + (t.x - e.x) * n,
	y: e.y + (t.y - e.y) * n,
	cameraDepth: e.cameraDepth + (t.cameraDepth - e.cameraDepth) * n,
	cameraWeight: (e.cameraWeight ?? 1) + ((t.cameraWeight ?? 1) - (e.cameraWeight ?? 1)) * n
}), Le = (e, t) => Math.hypot(e.x - t.x, e.y - t.y) <= Z;
function Re(e, t, n = 0) {
	let r = t.filter((e) => Number.isFinite(e) && e > Z);
	if (r.length === 0) return e.length >= 2 ? [[...e]] : [];
	r.length % 2 == 1 && r.push(...r);
	let i = [], a = 0, o = r[0], s = !0, c = r.reduce((e, t) => e + t, 0), l = c > Z && Number.isFinite(n) ? (n % c + c) % c : 0;
	for (; l > Z;) {
		let e = Math.min(l, o);
		l -= e, o -= e, o <= Z && (a = (a + 1) % r.length, o = r[a], s = a % 2 == 0);
	}
	let u = null;
	for (let t = 0; t + 1 < e.length; t++) {
		let n = e[t], c = e[t + 1], l = Math.hypot(c.x - n.x, c.y - n.y);
		if (!(l > Z)) continue;
		let d = 0;
		for (; d < l - Z;) {
			let e = Math.min(o, l - d), t = Ie(n, c, d / l), f = Ie(n, c, (d + e) / l);
			if (s && (u ??= [], (u.length === 0 || !Le(u.at(-1), t)) && u.push(t), u.push(f)), d += e, o -= e, o <= Z) {
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
	if (i.length > 1 && Le(e[0], e.at(-1)) && Le(i[0][0], e[0]) && Le(i.at(-1).at(-1), e.at(-1))) {
		let e = i.shift(), t = i.pop();
		i.unshift([...t, ...e.slice(1)]);
	}
	return i;
}
var ze = (e, t) => ({
	kind: e,
	points: t.map(({ x: e, y: t }) => ({
		x: e,
		y: t
	})),
	cameraDepths: t.map((e) => e.cameraDepth),
	cameraWeights: t.map((e) => e.cameraWeight ?? 1),
	cameraDepth: t.reduce((e, t) => e + t.cameraDepth, 0) / t.length
}), Be = (e, t, n) => {
	let r = [];
	for (let n = 0; n < 12; n++) {
		let i = Math.PI * 2 * n / 12;
		r.push({
			...e,
			x: e.x + Math.cos(i) * t,
			y: e.y + Math.sin(i) * t
		});
	}
	return ze(n, r);
};
function Ve(e, t, n) {
	let r = Number.isFinite(n.width) ? Math.max(0, n.width) : 0;
	if (!(r > Z) || t.length < 3) return null;
	let i = r / 2;
	if ((n.lineJoin ?? "miter") === "round") return Be(e, i, "join");
	let a = [];
	for (let n of t) {
		let t = n.x - e.x, r = n.y - e.y, o = Math.hypot(t, r);
		if (!(o > Z)) continue;
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
		for (; s.length >= 2 && o(s.at(-2), s.at(-1), e) <= Z;) s.pop();
		s.push(e);
	}
	let c = [];
	for (let e of [...a].reverse()) {
		for (; c.length >= 2 && o(c.at(-2), c.at(-1), e) <= Z;) c.pop();
		c.push(e);
	}
	let l = [...s.slice(0, -1), ...c.slice(0, -1)];
	return l.length >= 3 ? ze("join", l) : null;
}
var He = (e, t, n, r) => {
	let i = t.x * r.y - t.y * r.x;
	if (Math.abs(i) <= Z) return null;
	let a = {
		x: n.x - e.x,
		y: n.y - e.y
	}, o = (a.x * r.y - a.y * r.x) / i;
	return {
		x: e.x + t.x * o,
		y: e.y + t.y * o
	};
};
function Ue(e, t) {
	let n = Number.isFinite(t.width) ? Math.max(0, t.width) : 0;
	if (!(n > Z) || e.length < 2) return [];
	let r = n / 2, i = t.lineCap ?? "butt", a = t.lineJoin ?? "miter", o = Math.max(1, t.miterLimit ?? 10), s = [], c = Re(e, t.dash ?? [], t.dashOffset);
	if (c == null) return null;
	let l = (e) => s.length >= 1e4 ? !1 : (s.push(e), !0);
	for (let n = 0; n < c.length; n++) {
		let s = c[n], u = s.length > 2 && Le(s[0], s.at(-1)), d = n === 0 && Le(s[0], e[0]) ? t.startCap ?? i : i, f = n + 1 === c.length && Le(s.at(-1), e.at(-1)) ? t.endCap ?? i : i, p = [];
		for (let e = 0; e + 1 < s.length; e++) {
			let t = s[e], n = s[e + 1], r = Math.hypot(n.x - t.x, n.y - t.y);
			p.push(r > Z ? {
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
			if (!l(ze("segment", [
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
		if (!u && d === "round" && !l(Be(s[0], r, "cap")) || !u && f === "round" && !l(Be(s.at(-1), r, "cap"))) return null;
		let m = (e, t, n) => {
			if (!t || !n) return !0;
			let i = t.x * n.y - t.y * n.x;
			if (Math.abs(i) <= Z) return !0;
			if (a === "round") return l(Be(e, r, "join"));
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
				let i = He(c, t, u, n);
				if (i && Math.hypot(i.x - e.x, i.y - e.y) <= r * o) return !!l(ze("join", [
					c,
					{
						...e,
						...i
					},
					u
				]));
			}
			return l(ze("join", [
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
//#endregion
//#region packages/core/src/chart/three-d-outline.ts
var We = 1e-9, Ge = (e, t) => Math.hypot(e.x - t.x, e.y - t.y, e.depth - t.depth) <= We, Ke = (e, t) => e.x - t.x || e.y - t.y || e.depth - t.depth, qe = (e, t) => {
	let n = Math.min(e.length, t.length);
	for (let r = 0; r < n; r++) {
		let n = Ke(e[r], t[r]);
		if (n !== 0) return n;
	}
	return e.length - t.length;
};
function Je(e) {
	let t = [...e].reverse();
	return qe(e, t) <= 0 ? e : t;
}
function Ye(e) {
	let t = Ge(e[0], e.at(-1)) ? e.slice(0, -1) : [...e];
	if (t.length === 0) return [];
	let n = 0;
	for (let e = 1; e < t.length; e++) Ke(t[e], t[n]) < 0 && (n = e);
	let r = t.map((e, r) => t[(n + r) % t.length]), i = t.map((e, r) => t[(n - r + t.length) % t.length]), a = qe(r, i) <= 0 ? r : i;
	return [...a, a[0]];
}
function Xe(e) {
	let t = [], n = (e) => {
		let n = t.find((t) => Ge(t.point, e));
		if (n) return Ke(e, n.point) < 0 && (n.point = e), n;
		let r = {
			point: e,
			edges: [],
			order: -1
		};
		return t.push(r), r;
	}, r = [];
	for (let [t, i] of e) {
		if (Ge(t, i)) continue;
		let e = n(t), a = n(i);
		e !== a && r.push([e, a]);
	}
	t.sort((e, t) => Ke(e.point, t.point)), t.forEach((e, t) => {
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
	for (let e of t) if (e.edges.length !== 2) for (let t of e.edges) o.has(t) || c.push(Je(s(e, t)));
	for (let e = 0; e < i.length; e++) {
		if (o.has(e)) continue;
		let t = i[e], n = t.first.order <= t.second.order ? t.first : t.second;
		c.push(Ye(s(n, e)));
	}
	let l = t.filter((e) => e.edges.length > 2).map((e) => ({
		point: e.point,
		neighbours: e.edges.map((t) => {
			let n = i[t];
			return n.first === e ? n.second.point : n.first.point;
		}).sort(Ke)
	}));
	return {
		paths: c.sort(qe),
		junctions: l
	};
}
//#endregion
//#region packages/core/src/chart/three-d-renderer.ts
function Ze(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.legendEntries ?? []) t.set(n.idx, n);
	return t;
}
function Qe(e, t, n) {
	let i = r(t?.fontSizeHpt ?? e.legendFontSizeHpt, n) ?? 9 * n, a = t?.fontFace ?? e.legendFontFace;
	return {
		fontPx: i,
		font: `${t?.fontBold ?? e.legendFontBold ?? !1 ? "bold " : ""}${i}px ${mt(a)}`,
		color: t?.fontColor ? `#${t.fontColor}` : e.legendFontColor ? `#${e.legendFontColor}` : "#595959"
	};
}
var $e = [
	"4472C4",
	"ED7D31",
	"70AD47",
	"A5A5A5",
	"FFC000",
	"5B9BD5"
], et = C, tt = d, nt = new Set([
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
function rt(e, t) {
	let n = Number.isFinite(t) && t > 0 ? t / D : 1, r = Number.isFinite(e) && e >= 0 ? e / B : 0;
	return Math.max(.25, r) * n;
}
function it(e, t) {
	let n = Number.isSafeInteger(t) && t > 0 ? t : 0, r = Array.from({ length: n }, () => []);
	for (let t of e) {
		let e = t.categoryIndex;
		Number.isSafeInteger(e) && e >= 0 && e < n && r[e].push(t);
	}
	return r;
}
var at = (e, t) => `#${t?.color ?? $e[e % $e.length]}`;
function ot(e, t, n) {
	let r = 0;
	for (let i of e) for (let e of [t(i), n(i)]) {
		if (e == null) continue;
		let t = j(e);
		if (e.fillType === "gradient" && t > et || t > tt - r) return !1;
		r += t;
	}
	return !0;
}
function st(e, t) {
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
function ct(e, t, n, r) {
	let i = e.series[t]?.values[n] ?? 0;
	if (!Number.isFinite(i)) return 0;
	if (!r) return i;
	let { maxMagnitude: a, scaledTotal: o } = r[n] ?? {
		maxMagnitude: 0,
		scaledTotal: 0
	};
	return a > 0 && o > 0 ? i / a / o * 100 : 0;
}
function Q(e, t) {
	let n = e + t;
	return Number.isFinite(n) ? n : t < 0 ? -Number.MAX_VALUE : Number.MAX_VALUE;
}
function lt(e) {
	let t = [];
	for (let [n, r] of [
		[e.threeD?.floor, "floor"],
		[e.threeD?.sideWall, "wall"],
		[e.threeD?.backWall, "wall"]
	]) {
		let i = c(e, n, r);
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
				let o = dt(e, n, r.get(i), i, 0);
				t.push({
					fill: o.fill,
					line: o.lineFill
				});
			}
		}
	} else if (e.chartType === "clusteredBar" || e.chartType === "clusteredBarH" || e.chartType.startsWith("stackedBar")) {
		let n = e.chartType.startsWith("stacked"), r = e.chartType.endsWith("Pct"), i = n || e.dispBlanksAs === "zero", a = e.valAxisLogBase != null && Number.isFinite(e.valAxisLogBase) && e.valAxisLogBase >= 2, o = Math.max(1, e.categories.length, ...e.series.map((e) => Math.max(e.values.length, e.categories?.length ?? 0))), s = r ? st(e, o) : void 0, c = (t, n) => {
			if (t === n) return !1;
			let r = Math.min(t, n), i = Math.max(t, n), o = e.valMin, s = e.valMax;
			return o != null && Number.isFinite(o) && i <= o || s != null && Number.isFinite(s) && r >= s ? !1 : !a || i > 0;
		}, l = Array(o).fill(0), u = Array(o).fill(0);
		for (let r = 0; r < e.series.length; r++) {
			let d = e.series[r], f = new Map(d.dataPointOverrides?.map((e) => [e.idx, e]) ?? []);
			for (let p = 0; p < o; p++) {
				let o = d.values[p];
				if (!(o != null && Number.isFinite(o) && (!a || o > 0) || o == null && i)) continue;
				let m = ct(e, r, p, s), h = n ? m >= 0 ? l[p] : u[p] : 0, g = Q(h, m);
				if (n && (m >= 0 ? l[p] = g : u[p] = g), !c(h, g)) continue;
				let _ = dt(e, d, f.get(p), p, r);
				t.push({
					fill: _.fill,
					line: _.lineFill
				});
			}
		}
	} else {
		let n = e.chartType.toLowerCase().includes("area"), r = e.chartType.startsWith("stacked"), i = e.chartType.endsWith("Pct"), a = r || e.dispBlanksAs === "zero", o = e.valAxisLogBase != null && Number.isFinite(e.valAxisLogBase) && e.valAxisLogBase >= 2, s = Math.max(e.categories.length, ...e.series.map((e) => Math.max(e.categories?.length ?? 0, e.values.length))), c = i ? st(e, s) : void 0, l = e.series.map(() => Array(s).fill(0));
		if (r) {
			let t = Array(s).fill(0), n = Array(s).fill(0);
			for (let r = 0; r < e.series.length; r++) for (let i = 0; i < s; i++) {
				let a = ct(e, r, i, c), o = Q(a >= 0 ? t[i] : n[i], a);
				l[r][i] = o, a >= 0 ? t[i] = o : n[i] = o;
			}
		}
		for (let i = 0; i < e.series.length; i++) {
			let u = e.series[i], d = new Map(u.dataPointOverrides?.map((e) => [e.idx, e]) ?? []), f = s, p = 0, m = null, h = !1, g = !1;
			for (let s = 0; s < f; s++) {
				let f = u.values[s];
				if (f != null && Number.isFinite(f) && (!o || f > 0) || f == null && a) {
					p++;
					let a = r ? l[i][s] : ct(e, i, s, c), o = m == null ? a : Math.min(m, a), f = m == null ? a : Math.max(m, a), _ = e.valMin != null && Number.isFinite(e.valMin) && f <= e.valMin || e.valMax != null && Number.isFinite(e.valMax) && o >= e.valMax;
					if (p >= 2 && (n || u.smooth === !0 || !_)) {
						if (h = !0, n) break;
						let r = d.get(s);
						if (ft(r)) {
							let n = dt(e, u, r, s, i);
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
			let _ = dt(e, u, void 0, i, i);
			n ? t.push({
				fill: _.fill,
				line: _.lineFill
			}) : g && t.push({
				fill: void 0,
				line: _.lineFill
			});
		}
	}
	return ot(t, (e) => e.fill, (e) => e.line);
}
function ut(e, t) {
	return e?.fillType === "solid" ? {
		color: `#${e.color}`,
		fill: void 0
	} : {
		color: t,
		fill: e
	};
}
function dt(e, t, r, i, a) {
	let o = t.dataPointColors?.[i] ? `#${t.dataPointColors[i]}` : at(a, t), s = e.chartType === "pie" || e.varyColors === !0 && e.series.length === 1 && e.chartType.includes("Bar") ? i : a, c, l = o, u = _(r?.chartexStyle, i);
	if (u !== void 0) ({color: l, fill: c} = ut(u, l));
	else if (r?.fillHidden === !0 || r?.color === "00000000") c = null;
	else if (r?.color) l = `#${r.color}`;
	else {
		let n = _(t.chartexStyle, s);
		if (n !== void 0) ({color: l, fill: c} = ut(n, l));
		else {
			let t = _(e.chartStyleRoles?.dataPoint3D, s);
			t !== void 0 && ({color: l, fill: c} = ut(t, l));
		}
	}
	let d, f = null, p = n(r?.chartexStyle, i);
	if (p !== void 0) p?.fillType === "solid" ? f = `#${p.color}` : d = p;
	else if (r?.lineHidden === !0) d = null;
	else if (r?.lineColor) f = `#${r.lineColor}`;
	else {
		let r = n(t.chartexStyle, s);
		if (r !== void 0) r?.fillType === "solid" ? f = `#${r.color}` : d = r;
		else if (t.lineHidden === !0) d = null;
		else if (t.lineColor) f = `#${t.lineColor}`;
		else {
			let t = n(e.chartStyleRoles?.dataPoint3D, s);
			t !== void 0 && (t?.fillType === "solid" ? f = `#${t.color}` : d = t);
		}
	}
	let m = e.chartStyleRoles?.dataPoint3D?.lineNoStyle === !0 ? void 0 : e.chartStyleRoles?.dataPoint3D, h = r?.chartexStyle?.lineCap ?? t.chartexStyle?.lineCap ?? m?.lineCap, g = r?.chartexStyle?.lineJoin ?? t.chartexStyle?.lineJoin ?? m?.lineJoin;
	return {
		color: l,
		fill: c,
		lineColor: f,
		lineFill: d,
		lineWidthEmu: r?.lineWidthEmu ?? r?.chartexStyle?.lineWidthEmu ?? t.lineWidthEmu ?? t.chartexStyle?.lineWidthEmu ?? m?.lineWidthEmu,
		lineDash: r?.lineDash ?? r?.chartexStyle?.lineDash ?? t.chartexStyle?.lineDash ?? m?.lineDash,
		lineCustomDash: r?.chartexStyle?.lineCustomDash ?? t.chartexStyle?.lineCustomDash ?? m?.lineCustomDash,
		lineCap: h === "rnd" ? "round" : h === "sq" ? "square" : "butt",
		lineJoin: g === "round" || g === "bevel" ? g : "miter"
	};
}
function ft(e) {
	if (!e) return !1;
	let t = e.chartexStyle;
	return e.lineHidden != null || e.lineColor != null || e.lineWidthEmu != null || e.lineDash != null || t?.linePaintAuthored === !0 || t?.lineHidden != null || t?.lineNoStyle === !0 || t?.lineColors?.some((e) => e != null) === !0 || t?.linePaints?.some((e) => e != null) === !0 || t?.lineWidthEmu != null || t?.lineDash != null || t?.lineCustomDash != null || t?.lineCap != null || t?.lineJoin != null;
}
function pt(e, t) {
	let n = e.cameraNormal(t);
	if (!n) return 1;
	let r = {
		x: -.2,
		y: .25,
		z: 1
	}, i = Math.hypot(r.x, r.y, r.z), a = Math.max(0, (n.x * r.x + n.y * r.y + n.z * r.z) / i);
	return Math.max(.78, Math.min(1, .78 + .24 * a));
}
var mt = (e) => `"${e && !e.startsWith("+") ? e.replace(/["\\]/g, "") : "Arial"}"`, $ = (e, t, n = "minor") => mt((t?.startsWith("+mj-") ? e.themeMajorFontLatin : t?.startsWith("+mn-") ? e.themeMinorFontLatin : t) ?? (n === "major" ? e.themeMajorFontLatin : e.themeMinorFontLatin));
function ht(e, t) {
	if (t.length) {
		e.beginPath(), e.moveTo(t[0].x, t[0].y);
		for (let n = 1; n < t.length; n++) e.lineTo(t[n].x, t[n].y);
		e.closePath();
	}
}
var gt = (e) => e === "transparent" || e === "#00000000" || e === "rgba(0,0,0,0)";
function _t(e, t, n, r) {
	gt(n) || (ht(e, t), e.fillStyle = n, e.fill(), r > 0 && (ht(e, t), e.fillStyle = `rgba(0,0,0,${r})`, e.fill()));
}
function vt(e, t, n, r, i, a, o, s, c, l, u, d) {
	return we({
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
	}).flatMap((t) => bt(e, t, l).map((e) => ({
		...e,
		outline: !1,
		outlineSegments: void 0
	})));
}
function yt(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m = !1, h = !1, g, _) {
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
	let v = Se({
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
	return v ? bt(e, v, d, g, _) : [];
}
function bt(e, t, n, r, i, a = !1) {
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
				color: X(n, pt(e, i)),
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
	let p = Xe([...c.values()].map(([e, n]) => [t.vertices[e], t.vertices[n]]));
	if (!r) return s;
	let m = (e, t) => Math.hypot(e.x - t.x, e.y - t.y, e.depth - t.depth) <= 1e-9, h = (e) => p.junctions.some((t) => m(t.point, e));
	for (let t of p.paths) {
		let n = t.map((t) => e.project(t.x, t.y, t.depth)), a = t.map((t) => e.cameraDepth(t.x, t.y, t.depth)), o = t.map((t) => e.cameraProjectionWeight(t.x, t.y, t.depth)), c = Ue(n.map((e, t) => ({
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
		let n = Ve({
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
function xt(e, t, n, r, i, a, o) {
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
		let r = t[0], i = t.at(-1), s = Math.hypot(r.x - i.x, r.y - i.y, r.depth - i.depth) <= 1e-9, c = Ue((n && !s ? [...t, r] : [...t]).map((t) => ({
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
function St(e, t) {
	t.paint !== null && (t.paint === void 0 ? _t(e, t.points, t.color, t.shade) : (ht(e, t.points), e.fillStyle = t.paint, e.fill()), t.outline && (e.strokeStyle = t.outlineColor ?? "rgba(0,0,0,0.42)", e.lineWidth = t.outlineWidth ?? .75, e.setLineDash(G(t.outlineDash ?? "solid", e.lineWidth)), e.lineCap = t.outlineCap ?? "butt", e.lineJoin = t.outlineJoin ?? "miter", t.outline && (ht(e, t.points), e.stroke()), e.setLineDash([])));
}
function Ct(e, t, n, r, i) {
	if (r === void 0) return;
	let a = t.filter((e) => e.paintRole === n);
	if (!a.length) return;
	if (r === null) {
		for (let e of a) e.paint = null;
		return;
	}
	let o = a.flatMap((e) => e.points), s = Math.min(...o.map((e) => e.x)), c = Math.max(...o.map((e) => e.x)), l = Math.min(...o.map((e) => e.y)), u = Math.max(...o.map((e) => e.y)), d = U(r, e, s, l, c - s, u - l, i);
	for (let e of a) e.paint = d;
}
function wt(e, t) {
	e.fillStyle = "#888", e.font = "12px sans-serif", e.textAlign = "center", e.textBaseline = "middle", e.fillText("(too many data points)", t.x + t.w / 2, t.y + t.h / 2);
}
function Tt(e) {
	let t = e.catAxisLabelRotation;
	return t == null ? null : !Number.isFinite(t) || Math.abs(t) > 54e5 ? 0 : t / 6e4 * Math.PI / 180;
}
function Et(e, t, n, r, i, a = 1, o = 6) {
	if (i || r === 0) {
		e.textAlign = i ? "right" : "center", e.textBaseline = i ? "middle" : a < 0 ? "bottom" : "top", e.fillText(t, n.x + (i ? -o : 0), n.y + (i ? 0 : a * o));
		return;
	}
	e.save(), e.translate(n.x, n.y + a * o), e.rotate(r), e.textAlign = a < 0 ? "left" : "right", e.textBaseline = "middle", e.fillText(t, 0, 0), e.restore();
}
function Dt(t, n, r, i, a, o, s, c = void 0, l = 0, u = D) {
	if (!(i > 0) || !Number.isFinite(n.x) || !Number.isFinite(n.y)) return;
	let d = i / 2;
	switch (t.beginPath(), r) {
		case "square":
			t.rect(n.x - d, n.y - d, i, i);
			break;
		case "diamond":
			t.moveTo(n.x, n.y - d), t.lineTo(n.x + d, n.y), t.lineTo(n.x, n.y + d), t.lineTo(n.x - d, n.y), t.closePath();
			break;
		case "triangle":
			t.moveTo(n.x, n.y - d), t.lineTo(n.x + d, n.y + d), t.lineTo(n.x - d, n.y + d), t.closePath();
			break;
		case "x":
		case "plus": {
			let e = r === "x";
			t.moveTo(n.x - d, n.y + (e ? -d : 0)), t.lineTo(n.x + d, n.y + (e ? d : 0)), t.moveTo(n.x + (e ? -d : 0), n.y + d), t.lineTo(n.x + (e ? d : 0), n.y - d), t.strokeStyle = o, t.lineWidth = s, t.stroke();
			return;
		}
		case "dash":
			t.rect(n.x - d, n.y - i * .1, i, i * .2);
			break;
		case "star":
			for (let e = 0; e < 10; e++) {
				let r = -Math.PI / 2 + e * Math.PI / 5, i = e % 2 == 0 ? d : d * .4, a = n.x + Math.cos(r) * i, o = n.y + Math.sin(r) * i;
				e ? t.lineTo(a, o) : t.moveTo(a, o);
			}
			t.closePath();
			break;
		case "dot":
			t.ellipse(n.x, n.y, i * .25, i * .1, 0, 0, Math.PI * 2);
			break;
		case "picture":
			c?.fillType === "image" && e(t, c, n.x - d, n.y - d, i, i, u, l), t.strokeStyle = o, t.lineWidth = s, t.strokeRect(n.x - d, n.y - d, i, i);
			return;
		default:
			t.arc(n.x, n.y, d, 0, Math.PI * 2);
			break;
	}
	let f = c?.fillType === "image" ? c : void 0, p = f ? null : c === void 0 ? a === "transparent" ? null : a : c == null ? null : U(c, t, n.x - d, n.y - d, i, i, l);
	p == null ? f && (t.save(), t.clip(), e(t, f, n.x - d, n.y - d, i, i, u, l), t.restore()) : (t.fillStyle = p, t.fill()), t.strokeStyle = o, t.lineWidth = s, t.stroke();
}
function Ot(e, t, n, o, s, c, l, u, d, f = 0, p, m, h = "t", g = l, _ = !0, v, b, x = c, S = 0) {
	let C = m, w = n.seriesDataLabels;
	if (A(w, C) || t.showDataLabelsOverMax !== !0 && b != null && Number.isFinite(b) && x > b) return;
	let E = C?.showVal ?? w?.showVal ?? t.showDataLabels, D = C?.showCatName ?? w?.showCatName ?? !1, O = C?.showSerName ?? w?.showSerName ?? !1, k = C?.showPercent ?? w?.showPercent ?? !1, j = C?.text, M = ue({
		customText: j,
		showCategory: D,
		showSeries: O,
		showValue: E,
		showPercent: k,
		category: n.categories?.[s] ?? t.categories[s] ?? `${s + 1}`,
		seriesName: n.name || `Series ${o + 1}`,
		sourceValue: c,
		valueDivisor: v?.divisor,
		percentRatio: p != null && Number.isFinite(p) ? p : void 0,
		formatCode: C?.formatCode ?? w?.formatCode ?? t.dataLabelFormatCode ?? n.valFormatCode,
		percentFormatCode: C?.formatCode ?? w?.formatCode ?? t.dataLabelFormatCode ?? "0%",
		date1904: t.date1904,
		separator: C?.separator ?? w?.separator
	});
	if (!M) return;
	let N = r(C?.fontSizeHpt ?? w?.fontSizeHpt ?? t.dataLabelFontSizeHpt, d) ?? 9 * d, P = C?.fontBold ?? w?.fontBold ?? t.dataLabelFontBold ?? !1, F = ne(C, w), I = $(t, C?.fontFace ?? w?.fontFace ?? t.dataLabelFontFace);
	e.font = `${F.fontItalic ? "italic " : ""}${P ? "bold " : ""}${N}px ${I}`;
	let L = `#${C?.fontColor ?? w?.fontColor ?? n.labelColor ?? t.dataLabelFontColor ?? "111111"}`, R = j && C?.richRuns?.length ? oe(e, {
		runs: C.richRuns,
		ptToPx: d,
		fontFamily: I,
		fallbackBold: P,
		fallbackItalic: F.fontItalic,
		fallbackBaseline: F.fontBaseline,
		fallbackColorHidden: F.fontPaintAuthored === !0 && (F.fontHidden === !0 || F.fontColor == null),
		fontFamilyForFace: (e) => $(t, e)
	}, N, L) : null, ee = R ? [] : y(M, Math.max(N, u.w * .45), Math.max(N * 1.2, u.h * .35), N * 1.2, (t) => e.measureText(t).width, F);
	if (!R && !ee.length) return;
	let z = R?.width ?? Math.max(...ee.map((t) => e.measureText(t).width)), V = R?.height ?? ee.length * N * 1.2, H = re(F, d), U = i(z + H.left + H.right, V + H.top + H.bottom, F.textRotation, F.textVerticalMode), q = a({
		kind: "point",
		x: l.x,
		y: l.y,
		position: C?.position ?? w?.position ?? t.dataLabelPosition ?? h,
		markerGap: f
	}, u, {
		w: U.w,
		h: U.h
	}, N, C?.manualLayout, u);
	if (!q) return;
	let J = K(C?.labelBox, w?.labelBox);
	w?.showLeaderLines && w.leaderLineHidden !== !0 && _ && (e.beginPath(), e.moveTo(g.x, g.y), e.lineTo(Math.max(q.rect.x, Math.min(g.x, q.rect.x + q.rect.w)), Math.max(q.rect.y, Math.min(g.y, q.rect.y + q.rect.h))), e.strokeStyle = `#${w.leaderLineColor ?? "808080"}`, e.lineWidth = w.leaderLineWidthEmu == null ? .75 * d : Math.max(.25, w.leaderLineWidthEmu / B * d), e.setLineDash(G(w.leaderLineDash ?? "solid", e.lineWidth)), e.stroke()), ie(e, J, q.rect, d, S), e.save(), e.beginPath(), e.rect(q.clip.x, q.clip.y, q.clip.w, q.clip.h), e.clip();
	let Y = te(F, q.textAlign), ae = T(q.x, q.y, q.rect, V + H.top + H.bottom, F, C?.manualLayout != null, Y, q.textAlign, z + H.left + H.right, U.radians), X = W(e, ae.x, ae.y, U.radians, Y, q.textBaseline, H);
	if (R) {
		se(e, R, X.x, X.y, Y, q.textBaseline, C?.manualLayout ? Math.max(0, q.rect.w - H.left - H.right) : R.width), e.restore();
		return;
	}
	if (!(F.fontPaintAuthored === !0 && (F.fontHidden === !0 || F.fontColor == null))) {
		e.fillStyle = L, e.textAlign = Y, e.textBaseline = "middle";
		let t = N * 1.2, n = (F.fontBaseline ?? 0) * N, r = X.y - (ee.length - 1) * t / 2 - n;
		ee.forEach((n, i) => e.fillText(n, X.x, r + i * t));
	}
	e.restore();
}
function kt(e, t, n) {
	let r = t.seriesDataLabels;
	return A(r, n) ? !1 : n?.text ? !0 : (n?.showVal ?? r?.showVal ?? e.showDataLabels) || (n?.showCatName ?? r?.showCatName ?? !1) || (n?.showSerName ?? r?.showSerName ?? !1) || (n?.showPercent ?? r?.showPercent ?? !1);
}
function At(e, n, r, i, a, o) {
	let s = g(n, r.h, i);
	if (n.title) {
		e.font = `${n.titleFontBold === !1 ? "" : "bold "}${s.fontPx}px ${mt(n.titleFontFace)}`, e.fillStyle = n.titleFontColor ? `#${n.titleFontColor}` : "#111111", e.textAlign = "center", e.textBaseline = "top";
		let t = e.measureText(n.title).width, i = {
			x: r.x + (r.w - t) / 2,
			y: r.y + s.topPad,
			w: t,
			h: Math.max(1, s.fontPx)
		}, a = n.titleManualLayout ? x({
			...n.titleManualLayout,
			w: void 0,
			h: void 0
		}, r, i) : null;
		e.fillText(n.title, a ? a.x + a.w / 2 : r.x + r.w / 2, a?.y ?? i.y);
	}
	let c = Ze(n);
	e.save();
	let d = (n.chartType === "pie" ? n.series[0]?.categories?.length ? n.series[0].categories : n.categories : n.series.map((e, t) => e.name || `Series ${t + 1}`)).flatMap((e, t) => c.get(t)?.deleted === !0 ? [] : [{
		label: e,
		index: t
	}]), f = d.map((e) => Qe(n, c.get(e.index), i)), p = Math.max(0, ...f.map((e) => e.fontPx)), _ = d.map((t, n) => (e.font = f[n].font, 7 * i + 4 + e.measureText(t.label).width)), y = v(n, r.w, r.h, .23, {
		itemWidths: _,
		rowHeight: Math.max(p * 1.45, 12),
		itemGap: 12,
		horizontalPadding: 8,
		verticalPadding: 4
	});
	e.restore();
	let b = m(y, n.legendOverlay === !0), S = u(n, r.w, r.h, i), C = h(n.catAxisTitleTextVerticalInsetEmu, i), w = h(n.valAxisTitleTextVerticalInsetEmu, i), T = a === "horizontal" ? n.catAxisTitle ? S.catFontPx + C + t(r.w) + 4 : 0 : a === "vertical" ? S.valBandW : 0, E = a === "horizontal" ? n.valAxisTitle ? S.valFontPx + w + t(r.h) + 4 : 0 : a === "vertical" ? S.catBandH : 0, D = l(n, r.x, r.y, r.w, r.h, i, {
		titleBand: s,
		legendSideReserveFrac: .23,
		legendReserve: y,
		pad: {
			t: s.bandH + b.legTopH + r.h * .04,
			r: b.legRightW + r.w * .05,
			b: b.legBottomH + r.h * .19 + E,
			l: b.legLeftW + r.w * .13 + T
		},
		honorPlotAreaManualLayout: !0,
		manualOuterInsets: {
			t: s.bandH,
			r: b.legRightW,
			b: b.legBottomH + E,
			l: b.legLeftW + T
		}
	}), O = {
		x: D.plotRect.px0,
		y: D.plotRect.py0,
		w: Math.max(1, D.plotRect.pw),
		h: Math.max(1, D.plotRect.ph)
	};
	H(e, n, O.x, O.y, O.w, O.h, i, o);
	let k = y ? y.side === "r" ? {
		x: r.x + r.w - y.reserveW,
		y: O.y,
		w: y.reserveW,
		h: O.h
	} : y.side === "l" ? {
		x: r.x,
		y: O.y,
		w: y.reserveW,
		h: O.h
	} : y.side === "t" ? {
		x: r.x + 4,
		y: r.y + s.bandH,
		w: Math.max(1, r.w - 8),
		h: y.reserveH
	} : {
		x: r.x + 4,
		y: r.y + r.h - y.reserveH,
		w: Math.max(1, r.w - 8),
		h: y.reserveH
	} : null;
	return {
		plot: O,
		legend: (k && n.legendManualLayout ? x(n.legendManualLayout, r, k) : null) ?? k,
		legendMeasure: {
			labels: d.map((e) => e.label),
			styles: f,
			itemWidths: _
		}
	};
}
function jt(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
	e.save(), e.font = `${l ? "italic " : ""}${c ? "bold " : ""}${a}px ${o}`, e.fillStyle = s ? `#${s}` : "#555";
	let m = f ? t : J(e, t, p), h = F(i, u, d), g = r;
	if (f) {
		let t = e.measureText(m).width, i = Math.abs(Math.cos(h)), o = Math.abs(Math.sin(h)), s = {
			x: r.x - (t * i + a * o) / 2,
			y: r.y - (t * o + a * i) / 2,
			w: t * i + a * o,
			h: t * o + a * i
		}, c = x({
			...f,
			w: void 0,
			h: void 0
		}, n, s);
		c && (g = {
			x: c.x + c.w / 2,
			y: c.y + c.h / 2
		});
	}
	e.translate(g.x, g.y), h && e.rotate(h), e.textAlign = "center", e.textBaseline = "middle", e.fillText(m, 0, 0), e.restore();
}
function Mt(e, n, r, i, a, o) {
	if (n.valAxisTitle) {
		let s = I(n.valAxisTitleFontSizeHpt, o), c = a ? "horizontal" : "left";
		jt(e, n.valAxisTitle, r, a ? {
			x: i.x + i.w / 2,
			y: i.y + i.h + t(r.h) + s / 2
		} : {
			x: i.x - t(r.w) - s / 2,
			y: i.y + i.h / 2
		}, c, s, $(n, n.valAxisTitleFontFace, "major"), n.valAxisTitleFontColor, n.valAxisTitleFontBold ?? !0, n.valAxisTitleFontItalic ?? !1, n.valAxisTitleRotation, n.valAxisTitleVerticalMode, n.valAxisTitleManualLayout, a ? i.w : i.h);
	}
	if (n.catAxisTitle) {
		let s = I(n.catAxisTitleFontSizeHpt, o), c = a ? "left" : "horizontal";
		jt(e, n.catAxisTitle, r, a ? {
			x: i.x - t(r.w) - s / 2,
			y: i.y + i.h / 2
		} : {
			x: i.x + i.w / 2,
			y: i.y + i.h + t(r.h) + s / 2
		}, c, s, $(n, n.catAxisTitleFontFace, "major"), n.catAxisTitleFontColor, n.catAxisTitleFontBold ?? !0, n.catAxisTitleFontItalic ?? !1, n.catAxisTitleRotation, n.catAxisTitleVerticalMode, n.catAxisTitleManualLayout, a ? i.h : i.w);
	}
}
function Nt(e, t, n, i, a, o, s, c, l, u, d) {
	let f = t.threeD?.seriesAxis;
	if (!f || f.hidden || t.threeD?.barGrouping !== "standard" || t.series.length === 0) return;
	let p = Xt(t, i, a, o, s, c, l), m = Rt(i), h = l === "vertical" ? m.seriesAxisX : p.axisX, g = l === "horizontal" ? m.floorY === i.front.y ? i.front.y + i.front.h : i.front.y : m.floorY, _ = i.project(h, g, i.topology.nearDepth), v = i.project(h, g, i.topology.farDepth), y = Math.hypot(v.x - _.x, v.y - _.y);
	if (!(y > 1e-6)) return;
	let b = {
		x: (v.x - _.x) / y,
		y: (v.y - _.y) / y
	}, x = {
		x: -b.y,
		y: b.x
	}, S = i.project(i.front.x + i.front.w / 2, i.front.y + i.front.h / 2, .5), C = {
		x: (_.x + v.x) / 2,
		y: (_.y + v.y) / 2
	};
	(C.x - S.x) * x.x + (C.y - S.y) * x.y < 0 && (x = {
		x: -x.x,
		y: -x.y
	}), (f.tickLabelPos === "low" && x.y < 0 || f.tickLabelPos === "high" && x.y > 0) && (x = {
		x: -x.x,
		y: -x.y
	}), f.lineHidden || (Ht(e, Bt(f.lineColor, f.lineWidthEmu, f.lineDash, d)), e.beginPath(), e.moveTo(_.x, _.y), e.lineTo(v.x, v.y), e.stroke());
	let w = Math.max(1, Math.floor(f.tickMarkSkip ?? 1)), T = Math.max(1, Math.floor(f.tickLabelSkip ?? 1)), E = f.majorTickMark ?? "out", D = r(f.fontSizeHpt, d) ?? 9 * d;
	if (e.font = `${f.fontItalic ? "italic " : ""}${f.fontBold ? "bold " : ""}${D}px ${$(t, f.fontFace)}`, e.fillStyle = f.fontColor ? `#${f.fontColor}` : "#595959", e.textAlign = Math.abs(x.x) < .2 ? "center" : x.x < 0 ? "right" : "left", e.textBaseline = Math.abs(x.y) < .2 ? "middle" : x.y < 0 ? "bottom" : "top", u && !f.lineHidden && E !== "none") {
		Ht(e, Vt(f.lineColor, f.lineWidthEmu, f.lineDash, d));
		let n = t.series.length;
		for (let t = 0; t <= n; t += w) {
			let r = t / n, a = f.orientation === "maxMin" ? 1 - r : r, o = i.project(h, g, a), s = 6 * d, c = E === "cross" ? s / 2 : E === "out" ? s : 0, l = E === "cross" ? s / 2 : E === "in" ? s : 0;
			e.beginPath(), e.moveTo(o.x + x.x * c, o.y + x.y * c), e.lineTo(o.x - x.x * l, o.y - x.y * l), e.stroke();
		}
	}
	for (let n = 0; n < t.series.length; n++) {
		let r = i.seriesDepth(n, t.series.length, !1), a = f.orientation === "maxMin" ? 1 - r : r, o = i.project(h, g, a);
		if (!u && !f.lineHidden && n % w === 0 && E !== "none") {
			let t = 6 * d, n = E === "cross" ? t / 2 : E === "out" ? t : 0, r = E === "cross" ? t / 2 : E === "in" ? t : 0;
			e.beginPath(), e.moveTo(o.x + x.x * n, o.y + x.y * n), e.lineTo(o.x - x.x * r, o.y - x.y * r), e.stroke();
		}
		f.tickLabelPos !== "none" && n % T === 0 && e.fillText(t.series[n].name || `Series ${n + 1}`, o.x + x.x * (6 * d + 3), o.y + x.y * (6 * d + 3));
	}
	if (e.setLineDash([]), f.title) {
		let r = I(f.titleFontSizeHpt, d);
		jt(e, f.title, n, {
			x: C.x + x.x * (D + r + 12),
			y: C.y + x.y * (D + r + 12)
		}, "horizontal", r, $(t, f.titleFontFace, "major"), f.titleFontColor, f.titleFontBold ?? !0, f.titleFontItalic ?? !1, f.titleRotation, f.titleVerticalMode, f.titleManualLayout, Math.max(i.front.w, i.front.h));
	}
}
function Pt(e, t, n, r, i, a, o, s) {
	if (t.lineHidden !== !0) {
		let s = t.lineWidthEmu == null ? Math.max(1, 2 * o) : Math.max(.5, t.lineWidthEmu / B * o);
		e.beginPath(), e.moveTo(r, i), e.lineTo(r + a, i), e.strokeStyle = t.lineColor ? `#${t.lineColor}` : X(n, .7), e.lineWidth = s, e.setLineDash(G(t.chartexStyle?.lineDash ?? "solid", s)), e.stroke(), e.setLineDash([]);
	}
	if (t.showMarker !== !0 || t.markerSymbol === "none") return;
	let c = t.markerSymbol ?? "circle", l = L(t, n.replace(/^#/, "")), u = l === "00000000" ? "transparent" : l.startsWith("#") ? l : `#${l}`, d = t.markerLine ?? t.lineColor ?? n.replace(/^#/, ""), f = d === "00000000" ? "rgba(0,0,0,0)" : d.startsWith("#") ? d : `#${d}`, p = t.markerLineWidthEmu == null ? Math.max(.75, o) : Math.max(.25, t.markerLineWidthEmu / B * o);
	Dt(e, {
		x: r + a / 2,
		y: i
	}, c, Math.min(a, Math.max(2, (t.markerSize ?? 5) * o)), u, f, p, N(t), s, o);
}
function Ft(e, t, n, r, i = !1, a, o = 0) {
	if (!n) return;
	R(e, t, n, r, o);
	let c = new Map(t.series[0]?.dataPointOverrides?.map((e) => [e.idx, e]) ?? []), l = i ? (t.series[0]?.categories?.length ? t.series[0].categories : t.categories).map((e, n) => {
		let r = t.series[0]?.dataPointColors?.[n];
		return {
			label: e,
			color: r === "00000000" ? "transparent" : r ? `#${r}` : at(n),
			series: t.series[0],
			point: c.get(n),
			sourceIndex: n
		};
	}) : t.series.map((e, t) => ({
		label: e.name || `Series ${t + 1}`,
		color: at(t, e),
		series: e,
		point: void 0,
		sourceIndex: t
	})), u = Ze(t), d = l.filter((e) => u.get(e.sourceIndex)?.deleted !== !0), f = a != null && a.labels.length === d.length && a.labels.every((e, t) => e === d[t].label), p = f ? a.styles : d.map((e) => Qe(t, u.get(e.sourceIndex), r));
	e.textAlign = "left", e.textBaseline = "middle";
	let m = Math.max(Math.max(0, ...p.map((e) => e.fontPx)) * 1.45, 12), h = Math.min(7 * r, m * .7);
	if (t.legendPos === "t" || t.legendPos === "b" || t.legendManualLayout != null && n.w >= n.h) {
		let s = f ? a.itemWidths : d.map((t, n) => (e.font = p[n].font, h + 4 + e.measureText(t.label).width)), c = b(s, Math.max(1, n.w - 8), 12).slice(0, Math.max(0, Math.floor((n.h - 4 + 1e-6) / m))), l = n.y + 2 + m / 2;
		for (let a of c) {
			let c = a.map((e) => Math.min(n.w, s[e])), u = c.reduce((e, t) => e + t, 0) + Math.max(0, a.length - 1) * 12, f = n.x + Math.max(4, (n.w - u) / 2);
			for (let n = 0; n < a.length; n++) {
				let s = a[n], u = d[s], m = p[s];
				e.font = m.font;
				let g = Math.max(0, c[n] - h - 4);
				if (!i && t.chartType.toLowerCase().includes("line") && u.series) Pt(e, u.series, u.color, f, l, h, r, o);
				else {
					u.color !== "transparent" && (e.fillStyle = u.color, e.fillRect(f, l - h / 2, h, h));
					let t = u.point?.lineHidden ?? u.series?.lineHidden, n = u.point?.lineColor ?? u.series?.lineColor;
					t !== !0 && n && (e.strokeStyle = `#${n}`, e.lineWidth = (u.point?.lineWidthEmu ?? u.series?.lineWidthEmu) == null ? .75 * r : Math.max(.25, (u.point?.lineWidthEmu ?? u.series?.lineWidthEmu ?? 0) / B * r), e.setLineDash(G(u.point?.lineDash ?? u.series?.chartexStyle?.lineDash ?? "solid", e.lineWidth)), e.strokeRect(f, l - h / 2, h, h), e.setLineDash([]));
				}
				e.fillStyle = m.color, e.fillText(J(e, u.label, g), f + h + 4, l), f += c[n] + 12;
			}
			l += m;
		}
		return;
	}
	let g = n.y;
	for (let a = 0; a < d.length; a++) {
		let c = d[a], l = p[a];
		e.font = l.font;
		let u = n.x + 8 + h, f = Math.max(0, n.x + n.w - 4 - u), _ = Math.max(l.fontPx * 1.2, 10), v = s(c.label, f, _ * (i ? 1 : 2), _, (t) => e.measureText(t).width);
		if (v.length === 0) continue;
		let y = Math.max(m, v.length * _ + 2);
		if (g + y > n.y + n.h + 1e-6) break;
		let b = g + y / 2;
		if (!i && t.chartType.toLowerCase().includes("line") && c.series) Pt(e, c.series, c.color, n.x + 4, b, h, r, o);
		else {
			c.color !== "transparent" && (e.fillStyle = c.color, e.fillRect(n.x + 4, b - h / 2, h, h));
			let t = c.point?.lineHidden ?? c.series?.lineHidden, i = c.point?.lineColor ?? c.series?.lineColor;
			t !== !0 && i && (e.strokeStyle = `#${i}`, e.lineWidth = (c.point?.lineWidthEmu ?? c.series?.lineWidthEmu) == null ? .75 * r : Math.max(.25, (c.point?.lineWidthEmu ?? c.series?.lineWidthEmu ?? 0) / B * r), e.setLineDash(G(c.point?.lineDash ?? c.series?.chartexStyle?.lineDash ?? "solid", e.lineWidth)), e.strokeRect(n.x + 4, b - h / 2, h, h), e.setLineDash([]));
		}
		e.fillStyle = l.color;
		let x = b - (v.length - 1) * _ / 2;
		v.forEach((t, n) => e.fillText(t, u, x + n * _)), g += y;
	}
}
function It(e, t, n, r, i, a) {
	let o = i ? 100 : 1, s = e.valAxisMinorTickMark ?? "none";
	return q({
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
function Lt(e, t, n) {
	let r = e != null && Number.isFinite(e) ? (e % 360 + 360) % 360 : 0, i = Number.isFinite(t) ? Math.max(0, Math.min(1, t)) : 0, a = Number.isFinite(n) ? Math.max(0, Math.min(1 - i, n)) : 0, o = Math.PI / 2 - (r * Math.PI / 180 + i * Math.PI * 2), s = o - a * Math.PI * 2;
	return {
		start: Math.min(o, s),
		end: Math.max(o, s),
		middle: (o + s) / 2,
		leading: o
	};
}
function Rt(e) {
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
function zt(e, t, n, r, i = "A6A6A6", a = .75) {
	let o = t != null && Number.isFinite(t) && t >= 0 ? Math.max(.25, t / B * r) : a * r;
	return {
		color: `#${e ?? i}`,
		width: o,
		dash: G(n ?? "solid", o)
	};
}
function Bt(e, t, n, r) {
	let i = zt(e, t, n, r, "898989", 1);
	if (t == null || !Number.isFinite(t) || t < 0) return i;
	let a = t / B * r;
	if (!(a > 0)) return i;
	let o = a;
	return {
		...i,
		width: o,
		dash: G(n ?? "solid", o)
	};
}
function Vt(e, t, n, r) {
	return Bt(e, t, n, r);
}
function Ht(e, t) {
	e.strokeStyle = t.color, e.lineWidth = t.width, e.setLineDash(t.dash);
}
function Ut(e, t, n, r, i, a, s, l, u) {
	let { front: d } = n, f = d.x, m = d.x + d.w, h = Rt(n), { sideX: g, floorY: _, oppositeFloorY: v, nearDepth: y, farDepth: b } = h, x = Xt(t, n, r, a, s, l, i), S = [], C = t.catAxisLinePaintAuthored === !0, T = t.valAxisLinePaintAuthored === !0, E = i === "vertical" ? C && !t.catAxisHidden && !t.catAxisLineHidden : T && !t.valAxisHidden && !t.valAxisLineHidden, D = i === "vertical" ? T && !t.valAxisHidden && !t.valAxisLineHidden : C && !t.catAxisHidden && !t.catAxisLineHidden;
	E && S.push([x.horizontalStart, x.horizontalEnd]), D && S.push([x.verticalStart, x.verticalEnd]);
	let O = t.threeD?.seriesAxis, A = O?.linePaintAuthored === !0;
	if (O && !O.hidden && !O.lineHidden && A && t.threeD?.barGrouping === "standard" && t.series.length > 0) {
		let e = i === "vertical" ? h.seriesAxisX : x.axisX, t = i === "horizontal" ? _ === n.front.y ? n.front.y + n.front.h : n.front.y : _;
		S.push([n.project(e, t, y), n.project(e, t, b)]);
	}
	let j = (e, t) => Math.hypot(e.x - t.x, e.y - t.y) <= 1e-6, M = (e, t) => S.some(([n, r]) => j(e, n) && j(t, r) || j(e, r) && j(t, n)), N = (e, t) => {
		let r = Y(n, e, t?.thicknessPercent), i = r.faces.map((e, t) => ({
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
	}, P = N("floor", t.threeD?.floor), F = N("sideWall", t.threeD?.sideWall), I = N("backWall", t.threeD?.backWall), L = P.faces, R = F.faces, ee = I.faces, z = (i, a, s, l) => {
		let u = c(t, a, s), d = i.faces;
		if (!u.fill || !d.length) return;
		if (u.fill.fillType === "image") {
			let t = o(u.fill);
			if (!t) return;
			le(e, u.fill, t, a, l, i.slab, i.faces.map((e) => e.faceIndex), (e) => n.projectUnbounded(e.x, e.y, e.depth), r.max - r.min);
			return;
		}
		let f = d.flatMap((e) => e.points), p = Math.min(...f.map((e) => e.x)), m = Math.max(...f.map((e) => e.x)), h = Math.min(...f.map((e) => e.y)), g = Math.max(...f.map((e) => e.y)), _ = u.fill.fillType === "solid" ? `#${u.fill.color}` : U(u.fill, e, p, h, m - p, g - h);
		if (_) for (let t of d) t.points.length < 3 || (ht(e, t.points), e.fillStyle = _, e.fill());
	};
	z(P, t.threeD?.floor, "floor", "floor"), z(F, t.threeD?.sideWall, "wall", "sideWall"), z(I, t.threeD?.backWall, "wall", "backWall");
	let V = (t, r, i, a, o = !0) => {
		for (let s of fe(t.slab, r, i, a)) {
			if (!o && s.faceIndex !== 0 || !t.visibleFaceIndices.has(s.faceIndex)) continue;
			let [r, i] = s.scenePoints.map((e) => n.projectUnbounded(e.x, e.y, e.depth));
			e.beginPath(), e.moveTo(r.x, r.y), e.lineTo(i.x, i.y), e.stroke();
		}
	}, H = (t, a, o) => {
		Ht(e, a);
		for (let a of t) {
			let t = r.fraction(a);
			if (o) {
				i === "horizontal" ? (V(P, "floor", "x", t), V(I, "backWall", "x", t)) : (V(F, "sideWall", "y", t), V(I, "backWall", "y", t));
				continue;
			}
			if (i === "horizontal") {
				let r = d.x + t * d.w, i = n.project(r, _, b), a = n.project(r, v, b);
				e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(a.x, a.y), e.stroke();
			} else {
				let r = d.y + d.h - t * d.h, i = n.project(g, r, y), a = n.project(g, r, b), o = n.project(g === f ? m : f, r, b);
				e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(a.x, a.y), e.stroke(), e.beginPath(), e.moveTo(a.x, a.y), e.lineTo(o.x, o.y), e.stroke();
			}
		}
	};
	t.valAxisMinorGridlines === !0 && H(r.minorTicks, zt(t.valAxisMinorGridlineColor, t.valAxisMinorGridlineWidthEmu, t.valAxisMinorGridlineDash, u, "D9D9D9", .5), !0), t.valAxisMajorGridlines === !0 && H(r.majorTicks, zt(t.valAxisGridlineColor, t.valAxisGridlineWidthEmu, t.valAxisGridlineDash, u, "898989", 1), !0);
	let te = (t, n) => {
		Ht(e, n);
		for (let e of t) i === "vertical" ? (V(P, "floor", "x", e), V(I, "backWall", "x", e)) : (V(F, "sideWall", "y", e), V(I, "backWall", "y", e));
	};
	t.catAxisMinorGridlines === !0 && te(w(a, s), zt(t.catAxisMinorGridlineColor, t.catAxisMinorGridlineWidthEmu, t.catAxisMinorGridlineDash, u, "E0E0E0", .5)), t.catAxisMajorGridlines === !0 && te(p(a, s), zt(t.catAxisGridlineColor, t.catAxisGridlineWidthEmu, t.catAxisGridlineDash, u, "E0E0E0", .5));
	let W = (n, r, i) => {
		if (!n.length) return;
		let a = c(t, r, i);
		if (a.line === null) return;
		let o = a.line ?? {
			fillType: "solid",
			color: "898989"
		}, s = n.flatMap((e) => e.points), l = Math.min(...s.map((e) => e.x)), d = Math.max(...s.map((e) => e.x)), f = Math.min(...s.map((e) => e.y)), p = Math.max(...s.map((e) => e.y)), m = o.fillType === "solid" ? `#${o.color}` : U(o, e, l, f, d - l, p - f);
		if (!m) return;
		let h = a.lineWidthEmu == null ? u : Math.max(.25, a.lineWidthEmu / B * u);
		e.strokeStyle = m, e.lineWidth = h, e.setLineDash(k(a.lineCustomDash, a.lineDash, h)), e.lineCap = a.lineCap === "rnd" ? "round" : a.lineCap === "sq" ? "square" : "butt", e.lineJoin = a.lineJoin === "round" || a.lineJoin === "bevel" ? a.lineJoin : "miter";
		for (let t of n) {
			if (t.points.length < 2) continue;
			let n = t.points.map((e, n) => ({
				start: e,
				end: t.points[(n + 1) % t.points.length]
			}));
			if (n.some((e) => M(e.start, e.end))) {
				for (let t of n) M(t.start, t.end) || (e.beginPath(), e.moveTo(t.start.x, t.start.y), e.lineTo(t.end.x, t.end.y), e.stroke());
				continue;
			}
			e.beginPath(), e.moveTo(t.points[0].x, t.points[0].y);
			for (let n = 1; n < t.points.length; n++) e.lineTo(t.points[n].x, t.points[n].y);
			e.lineTo(t.points[0].x, t.points[0].y), e.closePath(), e.stroke();
		}
	};
	W(L, t.threeD?.floor, "floor"), W(R, t.threeD?.sideWall, "wall"), W(ee, t.threeD?.backWall, "wall"), e.setLineDash([]);
}
function Wt(e, t, n, r, i, a, o, s, c) {
	let l = Xt(t, n, r, i, a, o, c), u = c === "vertical" ? !t.catAxisHidden && !t.catAxisLineHidden : !t.valAxisHidden && !t.valAxisLineHidden, d = c === "vertical" ? !t.valAxisHidden && !t.valAxisLineHidden : !t.catAxisHidden && !t.catAxisLineHidden;
	u && (Ht(e, Bt(c === "vertical" ? t.catAxisLineColor : t.valAxisLineColor, c === "vertical" ? t.catAxisLineWidthEmu : t.valAxisLineWidthEmu, c === "vertical" ? t.catAxisLineDash : t.valAxisLineDash, s)), e.beginPath(), e.moveTo(l.horizontalStart.x, l.horizontalStart.y), e.lineTo(l.horizontalEnd.x, l.horizontalEnd.y), e.stroke()), d && (Ht(e, Bt(c === "vertical" ? t.valAxisLineColor : t.catAxisLineColor, c === "vertical" ? t.valAxisLineWidthEmu : t.catAxisLineWidthEmu, c === "vertical" ? t.valAxisLineDash : t.catAxisLineDash, s)), e.beginPath(), e.moveTo(l.verticalStart.x, l.verticalStart.y), e.lineTo(l.verticalEnd.x, l.verticalEnd.y), e.stroke()), e.setLineDash([]);
}
function Gt(e, t, n, r) {
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
function Kt(e, t, n, r, i, a, o, s, c) {
	if (!t || t === "none") return;
	let l = Gt(r, i, a, o), u = qt(s, c), d = t === "cross" ? u / 2 : u, f = t === "out" || t === "cross" ? d : 0, p = t === "in" || t === "cross" ? d : 0;
	e.beginPath(), e.moveTo(n.x + l.x * f, n.y + l.y * f), e.lineTo(n.x - l.x * p, n.y - l.y * p), e.stroke();
}
function qt(e, t) {
	return (e === "minor" ? 4 : 6) * t;
}
function Jt(e, t, n) {
	if (e !== "out" && e !== "cross") return 0;
	let r = qt(t, n);
	return e === "cross" ? r / 2 : r;
}
function Yt(e, t, n, r) {
	if (t) return r;
	let i = Jt(e, "major", n);
	return Math.max(r, i + 3 * n);
}
function Xt(e, t, n, r, i, a, o) {
	let { front: s } = t, c = (e) => Math.max(0, Math.min(1, e)), l = t.topology.axisX === "min" ? s.x : s.x + s.w, u = t.topology.axisY === "min" ? s.y : s.y + s.h, d = () => {
		if (e.catAxisCrossesAt != null && Number.isFinite(e.catAxisCrossesAt)) {
			let t = e.chartType.endsWith("Pct") ? e.catAxisCrossesAt * 100 : e.catAxisCrossesAt;
			return c(n.fraction(t));
		}
		let t = e.catAxisCrosses ?? "autoZero";
		return c(t === "min" ? n.fraction(n.min) : t === "max" ? n.fraction(n.max) : n.fraction(0));
	}, f = () => {
		let t = e.valAxisCrossesAt;
		if (t != null && Number.isFinite(t)) return S(t - 1, r, i, a);
		let n = e.valAxisCrosses;
		if (n !== "min" && n !== "max") return null;
		let o = +(n === "max");
		return a ? 1 - o : o;
	}, p = d(), m = f(), h = o === "horizontal" ? s.x + p * s.w : m == null ? l : s.x + m * s.w, g = o === "vertical" ? s.y + s.h - p * s.h : m == null ? u : s.y + m * s.h, _ = t.topology.nearDepth;
	return {
		axisX: h,
		axisY: g,
		depth: _,
		horizontalStart: t.project(s.x, g, _),
		horizontalEnd: t.project(s.x + s.w, g, _),
		verticalStart: t.project(h, s.y + s.h, _),
		verticalEnd: t.project(h, s.y, _)
	};
}
function Zt(e, t, n, r, i, a, o, s, c, l) {
	let { front: u } = n, d = Xt(t, n, r, i, a, o, s), { axisX: f, axisY: m, depth: h } = d, g = n.project(u.x + u.w / 2, u.y + u.h / 2, h), _ = t.valAxisMinorTickMark ?? "none", v = c ? Vt : Bt;
	if (!t.valAxisHidden && !t.valAxisLineHidden) {
		Ht(e, v(t.valAxisLineColor, t.valAxisLineWidthEmu, t.valAxisLineDash, l));
		let i = (e) => s === "horizontal" ? n.project(u.x + r.fraction(e) * u.w, m, h) : n.project(f, u.y + u.h - r.fraction(e) * u.h, h), a = s === "horizontal" ? d.horizontalStart : d.verticalStart, o = s === "horizontal" ? d.horizontalEnd : d.verticalEnd;
		for (let n of r.majorTicks) Kt(e, t.valAxisMajorTickMark, i(n), a, o, g, s === "vertical" ? "horizontal" : "vertical", "major", l);
		for (let t of r.minorTicks) Kt(e, _, i(t), a, o, g, s === "vertical" ? "horizontal" : "vertical", "minor", l);
	}
	if (!t.catAxisHidden && !t.catAxisLineHidden) {
		Ht(e, v(t.catAxisLineColor, t.catAxisLineWidthEmu, t.catAxisLineDash, l));
		let r = s === "vertical" ? d.horizontalStart : d.verticalStart, _ = s === "vertical" ? d.horizontalEnd : d.verticalEnd, y = Math.max(1, Math.floor(t.catAxisTickMarkSkip ?? 1)), b = (i) => {
			let a = s === "vertical" ? n.project(u.x + i * u.w, m, h) : n.project(f, u.y + i * u.h, h);
			Kt(e, t.catAxisMajorTickMark, a, r, _, g, s === "vertical" ? "vertical" : "horizontal", "major", l);
		};
		if (c) {
			let e = p(i, a);
			for (let t = 0; t < e.length; t += y) b(o ? 1 - e[t] : e[t]);
		} else for (let e = 0; e < i; e += y) b(S(e, i, a, o));
		let x = t.catAxisMinorUnit;
		if (t.catAxisMinorTickMark && t.catAxisMinorTickMark !== "none" && x != null && Number.isFinite(x) && x > 0) {
			let c = t.catAxisMajorUnit != null && Number.isFinite(t.catAxisMajorUnit) && t.catAxisMajorUnit > 0 ? t.catAxisMajorUnit : y, d = Math.min(512, Math.ceil(i / x));
			for (let p = 1; p < d; p++) {
				let d = p * x;
				if (!(d < i)) break;
				if (Math.abs(d / c - Math.round(d / c)) < 1e-9) continue;
				let v = S(d, i, a, o), y = s === "vertical" ? n.project(u.x + v * u.w, m, h) : n.project(f, u.y + v * u.h, h);
				Kt(e, t.catAxisMinorTickMark, y, r, _, g, s === "vertical" ? "vertical" : "horizontal", "minor", l);
			}
		}
	}
	e.setLineDash([]);
}
function Qt(e, t, n, i, a) {
	if (!t.threeD) return !1;
	let o = t.chartType === "clusteredBar" || t.chartType === "clusteredBarH" || t.chartType.startsWith("stackedBar"), s = t.chartType.endsWith("H") || t.chartType.includes("BarH"), c = t.chartType.startsWith("stacked"), l = o && !c && t.threeD.barGrouping === "standard", { plot: u, legend: d, legendMeasure: p } = At(e, t, n, i, s ? "horizontal" : "vertical", a), m = ce(t.threeD, u, {
		sceneDepthScale: o ? l ? .65 : .1 : .4,
		perspectiveTangentGain: l ? 1 : 2,
		sceneHeightScale: !o && !(t.threeD.heightPercentAuthored ?? t.threeD.heightPercent != null) ? 1 / 3 : void 0
	});
	if (!m) return !0;
	m = de(m, t.threeD, u);
	let h = t.chartType.endsWith("Pct"), g = t.series.find((e) => (e.categories?.length ?? 0) > 0)?.categories ?? t.categories, _ = Math.max(1, g.length, ...t.series.map((e) => e.values.length)), v = h ? st(t, _) : void 0, y = t.catAxisOrientation === "maxMin", b = t.catAxisCrossBetween === "between", x = t.dispBlanksAs ?? "gap", C = t.valAxisLogBase != null && Number.isFinite(t.valAxisLogBase) && t.valAxisLogBase >= 2, w = (e, n) => {
		let r = t.series[e]?.values[n];
		return r != null && Number.isFinite(r) && (!C || r > 0) || r == null && (c || x === "zero");
	}, T = (e, n) => ct(t, e, n, v), A = 0, j = 0;
	if (c) {
		for (let e = 0; e < _; e++) {
			let n = 0, r = 0;
			for (let i = 0; i < t.series.length; i++) {
				let t = T(i, e);
				t >= 0 ? n = Q(n, t) : r = Q(r, t);
			}
			A = Math.min(A, r), j = Math.max(j, n);
		}
		h && (A = A < 0 ? -100 : 0, j = j > 0 ? 100 : 0, A === 0 && j === 0 && (j = 1));
	} else {
		let e = ge(t.series.flatMap((e) => e.values).filter((e) => e != null && Number.isFinite(e) && (!C || e > 0)), C ? {
			min: 1,
			max: 10
		} : {
			min: 0,
			max: 1
		});
		A = C ? e.min : Math.min(0, e.min), j = C ? e.max : Math.max(0, e.max);
	}
	let N = s ? m.project(m.front.x, m.topology.axisY === "min" ? m.front.y : m.front.y + m.front.h, m.topology.nearDepth) : m.project(m.topology.axisX === "min" ? m.front.x : m.front.x + m.front.w, m.front.y, m.topology.nearDepth), F = s ? m.project(m.front.x + m.front.w, m.topology.axisY === "min" ? m.front.y : m.front.y + m.front.h, m.topology.nearDepth) : m.project(m.topology.axisX === "min" ? m.front.x : m.front.x + m.front.w, m.front.y + m.front.h, m.topology.nearDepth), I = Math.hypot(F.x - N.x, F.y - N.y) / i, L = It(t, A, j, I, h, s ? "horizontal" : "vertical"), R = (e) => Number.isFinite(e) ? Math.max(L.min, Math.min(L.max, e)) : L.min;
	o || Ut(e, t, m, L, s ? "horizontal" : "vertical", _, b, y, i);
	let { front: H } = m, U = Math.max(1, t.series.length), te = [], W = t.series.map((e) => new Map(e.dataPointOverrides?.map((e) => [e.idx, e]) ?? [])), G = t.series.map((e) => new Map(e.dataLabelOverrides?.map((e) => [e.idx, e]) ?? []));
	if (o) {
		let r = m.prismInterval(0, 1, !0), o = [], u = Array(_).fill(0), d = Array(_).fill(0), f = (s ? H.h : H.w) / _, p = t.barGapWidth != null && Number.isFinite(t.barGapWidth) && t.barGapWidth >= 0 ? t.barGapWidth : 150;
		for (let e = 0; e < t.series.length; e++) {
			let n = t.series[e], a = l ? m.prismInterval(e, U, !1) : r, g = me(f, p, l ? 0 : e, l ? 1 : U, c || l);
			for (let r = 0; r < _; r++) {
				if (!w(e, r)) continue;
				let l = T(e, r), p = dt(t, n, W[e].get(r), r, e), m = p.fill === null ? "transparent" : p.color, v = p.lineFill !== null && (p.lineColor != null || p.lineFill !== void 0), b = c ? l >= 0 ? u[r] : d[r] : 0, x = Q(b, l);
				c && (l >= 0 ? u[r] = x : d[r] = x);
				let S = R(b), E = R(x), O = n.threeDShape ?? t.threeD.shape ?? "box", k = O === "cone" || O === "pyramid", A = O === "coneToMax" || O === "pyramidToMax", j = (e) => {
					if (!k) return 1;
					let t = C && !(b > 0) ? L.min : b, n = L.fraction(t), r = L.fraction(x), i = L.fraction(e), a = r - n;
					return a === 0 || !Number.isFinite(a) || !Number.isFinite(i - n) ? +(e === t) : Math.max(0, Math.min(1, 1 - (i - n) / a));
				}, M = (e) => {
					if (!A) return 1;
					let t = x >= b ? L.max : L.min, n = C ? L.min : 0, r = L.fraction(t), i = L.fraction(n), a = L.fraction(e), o = Math.abs(r - i);
					return !(o > 0) || ![
						r,
						i,
						a
					].every(Number.isFinite) ? ae(e, L.min, L.max) : Math.max(0, Math.min(1, Math.abs(r - a) / o));
				}, N = A ? M(S) : j(S), P = A ? M(E) : j(E);
				if (s) {
					let t = H.x + L.fraction(S) * H.w, n = H.x + L.fraction(E) * H.w, s = y ? _ - 1 - r : r, c = H.y + s * f + g.offset;
					o.push({
						x: Math.min(t, n),
						y: c,
						width: Math.abs(n - t),
						height: g.size,
						nearDepth: a.near,
						farDepth: a.far,
						categoryIndex: r,
						seriesIndex: e,
						color: m,
						fillPaint: p.fill,
						lineFill: p.lineFill,
						shape: O,
						baseCoord: t,
						endCoord: n,
						baseScale: N,
						endScale: P,
						omitBaseCap: !1,
						omitEndCap: !1,
						outline: v,
						outlineColor: p.lineColor ?? "rgba(0,0,0,0.42)",
						outlineWidth: p.lineWidthEmu == null ? .75 * i / D : rt(p.lineWidthEmu, i),
						outlineDash: p.lineDash ?? "solid",
						outlineCustomDash: p.lineCustomDash,
						outlineCap: p.lineCap,
						outlineJoin: p.lineJoin,
						labelValue: h ? l / 100 : l,
						plottedLabelValue: x
					});
				} else {
					let t = H.y + H.h - L.fraction(S) * H.h, n = H.y + H.h - L.fraction(E) * H.h, s = y ? _ - 1 - r : r, c = H.x + s * f + g.offset;
					o.push({
						x: c,
						y: Math.min(t, n),
						width: g.size,
						height: Math.abs(n - t),
						nearDepth: a.near,
						farDepth: a.far,
						categoryIndex: r,
						seriesIndex: e,
						color: m,
						fillPaint: p.fill,
						lineFill: p.lineFill,
						shape: O,
						baseCoord: t,
						endCoord: n,
						baseScale: N,
						endScale: P,
						omitBaseCap: !1,
						omitEndCap: !1,
						outline: v,
						outlineColor: p.lineColor ?? "rgba(0,0,0,0.42)",
						outlineWidth: p.lineWidthEmu == null ? .75 * i / D : rt(p.lineWidthEmu, i),
						outlineDash: p.lineDash ?? "solid",
						outlineCustomDash: p.lineCustomDash,
						outlineCap: p.lineCap,
						outlineJoin: p.lineJoin,
						labelValue: h ? l / 100 : l,
						plottedLabelValue: x
					});
				}
			}
		}
		if (c) {
			let e = it(o, _);
			for (let t = 0; t < _; t++) {
				let n = e[t];
				for (let e of [-1, 1]) {
					let t = n.filter((t) => Math.sign(t.labelValue) === e && !gt(t.color) && Math.abs(t.endCoord - t.baseCoord) > 1e-9).sort((e, t) => e.seriesIndex - t.seriesIndex);
					for (let e = 0; e + 1 < t.length; e++) {
						let n = t[e], r = t[e + 1], i = 1e-8 * Math.max(1, Math.abs(n.endCoord), Math.abs(r.baseCoord));
						n.shape !== r.shape || Math.abs(n.endCoord - r.baseCoord) > i || Math.abs(n.endScale - r.baseScale) > 1e-9 || n.nearDepth !== r.nearDepth || n.farDepth !== r.farDepth || (n.omitEndCap = !0, r.omitBaseCap = !0);
					}
				}
				let r = n.find((e) => e.labelValue > 0 && !gt(e.color)), i = n.find((e) => e.labelValue < 0 && !gt(e.color));
				if (r && i) {
					let e = 1e-8 * Math.max(1, Math.abs(r.baseCoord), Math.abs(i.baseCoord));
					r.shape === i.shape && Math.abs(r.baseCoord - i.baseCoord) <= e && Math.abs(r.baseScale - i.baseScale) <= 1e-9 && r.nearDepth === i.nearDepth && r.farDepth === i.farDepth && (r.omitBaseCap = !0, i.omitBaseCap = !0);
				}
			}
		}
		Ut(e, t, m, L, s ? "horizontal" : "vertical", _, b, y, i);
		let g = {
			remaining: Fe,
			exceeded: !1
		}, v = o.flatMap((t) => {
			let n = yt(m, t.shape, s, t.x, t.y, t.width, t.height, t.baseCoord, t.endCoord, t.nearDepth, t.farDepth, t.color, t.baseScale, t.endScale, t.omitBaseCap, t.omitEndCap, t.outline && t.outlineColor ? {
				color: t.outlineColor,
				width: t.outlineWidth,
				dash: k(t.outlineCustomDash, t.outlineDash, t.outlineWidth),
				cap: t.outlineCap,
				join: t.outlineJoin
			} : void 0, g);
			return Ct(e, n, "fill", t.fillPaint, a), Ct(e, n, "outline", t.lineFill, a), n;
		});
		if (g.exceeded) return wt(e, n), !0;
		for (let t of Pe(v)) St(e, t);
		for (let r of o) {
			let o = t.series[r.seriesIndex], c = s ? m.project(r.endCoord, r.y + r.height / 2, (r.nearDepth + r.farDepth) / 2) : m.project(r.x + r.width / 2, r.endCoord, (r.nearDepth + r.farDepth) / 2), l = G[r.seriesIndex].get(r.categoryIndex);
			kt(t, o, l) && te.push(() => Ot(e, t, o, r.seriesIndex, r.categoryIndex, r.labelValue, c, n, i, 0, void 0, l, "t", c, !0, t.valAxisDisplayUnits, L.max, r.plottedLabelValue, a));
		}
	} else {
		let r = t.series.map(() => Array(_).fill(0)), o = t.series.map(() => Array(_).fill(0));
		if (c) {
			let e = Array(_).fill(0), n = Array(_).fill(0);
			for (let i = 0; i < t.series.length; i++) for (let t = 0; t < _; t++) {
				let a = T(i, t), s = a >= 0 ? e[t] : n[t];
				r[i][t] = s, o[i][t] = Q(s, a), a >= 0 ? e[t] = Q(e[t], a) : n[t] = Q(n[t], a);
			}
		}
		let s = (e) => {
			let t = m.seriesDepth(e, U, c), n = 0, r = 0;
			for (let i = 0; i < _; i++) {
				if (!w(e, i)) continue;
				let a = c ? o[e][i] : T(e, i), s = H.x + S(i, _, b, y) * H.w, l = H.y + H.h - L.fraction(R(a)) * H.h;
				n += m.cameraDepth(s, l, t), r++;
			}
			return r > 0 ? n / r : -Infinity;
		}, l = t.series.map((e, t) => t).sort((e, t) => s(e) - s(t) || t - e), u = t.series.map((e, n) => dt(t, e, void 0, n, n)), d = [], f = [], p = !1;
		for (let s of l) {
			if (p) break;
			let l = t.series[s], g = u[s], v = g.fill === null ? "transparent" : g.color, C = c ? m.prismInterval(0, 1, !0) : m.prismInterval(s, U, !1), E = H.x + H.w / 2, D = H.y + H.h / 2, A = m.cameraDepth(E, D, C.near) >= m.cameraDepth(E, D, C.far) ? C.near : C.far, j = [], N = [], F = [], I = [], R = [], z = [], ne = [], re = [], K = [], q = [];
			for (let e = 0; e < _; e++) {
				if (!w(s, e)) {
					j.push(null), N.push(null), F.push(null), I.push(null), R.push(null), z.push(null), ne.push(null), re.push(null), K.push(null), q.push(null);
					continue;
				}
				let n = c ? o[s][e] : T(s, e), i = c ? r[s][e] : 0, a = H.x + S(e, _, b, y) * H.w, l = L.fraction(n), u = L.fraction(i), d = Number.isFinite(u) ? u : i <= L.min ? 0 : 1, f = Number.isFinite(l) && l >= 0 && l <= 1, p = Number.isFinite(l) ? Math.max(0, Math.min(1, l)) : n <= L.min ? 0 : 1, h = H.y + H.h - p * H.h, g = H.y + H.h - Math.max(0, Math.min(1, d)) * H.h;
				j.push(t.chartType.toLowerCase().includes("area") || f ? m.project(a, h, A) : null), N.push(m.project(a, g, A)), F.push(f ? m.cameraDepth(a, h, A) : null), I.push(m.cameraDepth(a, g, A)), R.push(n), z.push(a), ne.push(h), re.push(g), K.push(l), q.push(d);
			}
			let ie = [], J = null;
			for (let e = 0; e < j.length; e++) {
				let t = j[e], n = N[e];
				if (!t || !n) {
					x === "gap" && (J && ie.push(J), J = null);
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
				}, J.upper.push(t), J.lower.push(n), J.upperDepths.push(F[e] ?? 0), J.lowerDepths.push(I[e] ?? 0), J.indices.push(e), J.sceneXs.push(z[e] ?? 0), J.upperYs.push(ne[e] ?? 0), J.lowerYs.push(re[e] ?? 0), J.upperFractions.push(K[e] ?? 0), J.lowerFractions.push(q[e] ?? 0);
			}
			J && ie.push(J);
			let Y = [], ae = [];
			if (t.chartType.toLowerCase().includes("area")) {
				for (let t of ie) {
					let n = null;
					for (let r = 0; r + 1 < t.upper.length; r++) {
						let i = Oe(t.lowerFractions[r], t.lowerFractions[r + 1], t.upperFractions[r], t.upperFractions[r + 1]);
						for (let a = 0; a < i.length; a++) {
							let o = i[a], s = t.sceneXs[r] + (t.sceneXs[r + 1] - t.sceneXs[r]) * o.startT, c = t.sceneXs[r] + (t.sceneXs[r + 1] - t.sceneXs[r]) * o.endT, l = H.y + H.h - o.lowerStart * H.h, u = H.y + H.h - o.lowerEnd * H.h, f = H.y + H.h - o.upperStart * H.h, h = H.y + H.h - o.upperEnd * H.h, g = {
								...m.project(s, f, A),
								cameraDepth: m.cameraDepth(s, f, A),
								cameraWeight: m.cameraProjectionWeight(s, f, A)
							}, _ = {
								...m.project(c, h, A),
								cameraDepth: m.cameraDepth(c, h, A),
								cameraWeight: m.cameraProjectionWeight(c, h, A)
							};
							n != null && Math.hypot(n.at(-1).x - g.x, n.at(-1).y - g.y) <= 1e-8 ? n.push(_) : (n && n.length >= 2 && Y.push(n), n = [g, _]);
							let y = vt(m, s, c, l, u, f, h, C.near, C.far, v, r === 0 && a === 0 && o.startT === 0, r + 2 === t.upper.length && a + 1 === i.length && o.endT === 1);
							for (let t of y) {
								if (d.length >= 1e4) {
									p = !0;
									break;
								}
								d.push({
									points: t.points,
									cameraDepth: t.cameraDepth,
									cameraDepths: t.cameraDepths,
									cameraWeights: t.cameraWeights,
									layer: 0,
									paint: () => St(e, t)
								}), ae.push(t);
							}
							if (p) break;
						}
						if (p) break;
					}
					if (n && n.length >= 2 && Y.push(n), p) break;
				}
				Ct(e, ae, "fill", g.fill, a);
			}
			let oe = [];
			if (!t.chartType.toLowerCase().includes("area")) {
				let e = [], t = null;
				for (let n = 0; n < _; n++) {
					let r = R[n], i = r == null ? NaN : L.fraction(r);
					if (r == null || !Number.isFinite(i)) {
						x === "gap" && t && (e.push(t), t = null);
						continue;
					}
					t ??= [], t.push({
						x: H.x + S(n, _, b, y) * H.w,
						fraction: i,
						ownerIndex: n
					});
				}
				t && e.push(t);
				let n = (e) => {
					let t = Math.max(0, Math.min(1, e.fraction)), n = H.y + H.h - t * H.h;
					return {
						...m.project(e.x, n, A),
						cameraDepth: m.cameraDepth(e.x, n, A),
						cameraWeight: m.cameraProjectionWeight(e.x, n, A)
					};
				}, r = (e) => {
					e && e.path.length >= 2 && oe.push(e);
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
					let i = null, a = 0;
					for (let t = 0; t + 1 < e.length; t++) {
						let o = e[t], s = e[t + 1], c = (e) => m.project(e.x, H.y + H.h - e.fraction * H.h, A), l = c(o), u = c(s), d = Math.hypot(u.x - l.x, u.y - l.y), f = Number.isFinite(d) ? d : Math.hypot(s.x - o.x, (s.fraction - o.fraction) * H.h), p = De(o.fraction, s.fraction);
						if (!p || p.endT - p.startT <= 1e-12) {
							r(i), i = null, a += f;
							continue;
						}
						let h = (e) => ({
							x: o.x + (s.x - o.x) * e,
							fraction: o.fraction + (s.fraction - o.fraction) * e,
							ownerIndex: s.ownerIndex
						}), g = c(h(p.startT)), _ = Math.hypot(g.x - l.x, g.y - l.y), v = n(h(p.startT)), y = n(h(p.endT)), b = h(p.startT), x = h(p.endT), S = (e) => ({
							x: e.x,
							y: H.y + H.h - Math.max(0, Math.min(1, e.fraction)) * H.h
						});
						i != null && Math.hypot(i.path.at(-1).x - v.x, i.path.at(-1).y - v.y) <= 1e-8 && i.ownerIndex === s.ownerIndex ? (i.path.push(y), i.modelPath.push(S(x)), i.endClipped = t + 1 < e.length - 1 || p.endT < 1) : (r(i), i = {
							path: [v, y],
							modelPath: [S(b), S(x)],
							ownerIndex: s.ownerIndex,
							startClipped: t > 0 || p.startT > 0,
							endClipped: t + 1 < e.length - 1 || p.endT < 1,
							dashOffset: a + (Number.isFinite(_) ? _ : f * p.startT)
						}), a += f;
					}
					r(i);
				}
			}
			let se = t.chartType.toLowerCase().includes("area"), ce = l.lineHidden != null || l.lineColor != null || l.lineWidthEmu != null || l.chartexStyle?.lineHidden != null || l.chartexStyle?.lineColors?.some(Boolean) || l.chartexStyle?.lineWidthEmu != null || l.chartexStyle?.lineDash != null || l.chartexStyle?.lineCap != null || l.chartexStyle?.lineJoin != null || g.lineColor != null || g.lineFill !== void 0;
			if (!se || g.lineFill !== null && ce) {
				let n = /* @__PURE__ */ new Map(), r = (e) => {
					let r = W[s].get(e);
					if (!ft(r)) return g;
					let i = n.get(e);
					return i || (i = dt(t, l, r, e, s), n.set(e, i)), i;
				}, o = /* @__PURE__ */ new Map(), c = {
					remaining: Fe,
					exceeded: !1
				}, u = (t, n, r, a = r, s = 0, l) => {
					if (n.lineFill === null) return;
					let u = n === g ? v : n.color, f = n.lineColor ?? X(u, .7), h = n.lineWidthEmu ? Math.max(.5, n.lineWidthEmu / B) * i : se ? .75 * i : Math.max(1, 2 * i), _ = {
						width: h,
						dash: k(n.lineCustomDash, n.lineDash, h),
						dashOffset: s,
						lineCap: n.lineCap,
						startCap: r,
						endCap: a,
						lineJoin: n.lineJoin
					};
					if (!se && l && l.length >= 2) {
						let t = Ue(l.map((e) => ({
							...e,
							cameraDepth: 0,
							cameraWeight: 1
						})), _);
						if (t == null) {
							p = !0;
							return;
						}
						let r = o.get(n) ?? [];
						for (let n of t) {
							let t = Te({
								outline: n.points,
								nearDepth: C.near,
								farDepth: C.far
							});
							if (!t) continue;
							let i = bt(m, t, f, void 0, c).map((e) => ({
								...e,
								paintRole: "outline"
							}));
							if (c.exceeded) {
								p = !0;
								return;
							}
							r.push(...i);
							for (let t of i) d.push({
								points: t.points,
								cameraDepth: t.cameraDepth,
								cameraDepths: t.cameraDepths,
								cameraWeights: t.cameraWeights,
								layer: 1,
								paint: () => St(e, t)
							});
						}
						o.set(n, r);
						return;
					}
					let y = Ue(t, _);
					if (y == null) {
						p = !0;
						return;
					}
					if (d.length + y.length > 1e4) {
						p = !0;
						return;
					}
					for (let t of y) {
						let r = {
							points: t.points,
							color: f,
							paintRole: "outline",
							shade: 0,
							cameraDepth: t.cameraDepth,
							cameraDepths: t.cameraDepths,
							cameraWeights: t.cameraWeights,
							outline: !1
						}, i = o.get(n) ?? [];
						i.push(r), o.set(n, i), d.push({
							points: t.points,
							cameraDepth: t.cameraDepth,
							cameraDepths: t.cameraDepths,
							cameraWeights: t.cameraWeights,
							layer: 1,
							paint: () => St(e, r)
						});
					}
				};
				if (se) for (let e of Y) u(e, g, g.lineCap);
				else for (let e of oe) {
					let t = r(e.ownerIndex);
					u(e.path, t, e.startClipped ? "butt" : t.lineCap, e.endClipped ? "butt" : t.lineCap, e.dashOffset, e.modelPath);
				}
				for (let [t, n] of o) Ct(e, n, "outline", t.lineFill, a);
			}
			let le = (se ? l.showMarker === !0 || M(l) : l.showMarker === !0) && l.markerSymbol !== "none";
			if ((t.chartType.toLowerCase().includes("line") || se) && (le || O(l))) for (let t = 0; t < j.length; t++) {
				let n = j[t];
				if (!n) continue;
				let r = W[s].get(t), o = P(l, r, "circle", le);
				if (o === "none") continue;
				let c = r?.markerSize ?? l.markerSize ?? 5, u = ee(l, r, t, l.color ?? $e[s % $e.length]), d = V(l, r, t), p = r?.markerLine ?? l.markerLine ?? l.lineColor ?? l.color ?? $e[s % $e.length], m = (r?.markerLineWidthEmu ?? l.markerLineWidthEmu) == null ? Math.max(.75, l.lineWidthEmu == null ? i : l.lineWidthEmu / B * i) : Math.max(.25, (r?.markerLineWidthEmu ?? l.markerLineWidthEmu ?? 0) / B * i);
				f.push(() => Dt(e, n, o, Math.max(2, c) * i, u === "00000000" ? "transparent" : `#${u}`, `#${p}`, m, d, a, i));
			}
			for (let r = 0; r < j.length; r++) {
				let u = j[r];
				if (!u) continue;
				let d = T(s, r), f = W[s].get(r), p = f?.markerSize ?? l.markerSize ?? 5, m = G[s].get(r);
				kt(t, l, m) && te.push(() => Ot(e, t, l, s, r, h ? d / 100 : d, u, n, i, l.showMarker === !0 || f?.markerSymbol != null ? p * i / 2 : 0, void 0, m, "t", u, !0, t.valAxisDisplayUnits, L.max, c ? o[s][r] : d, a));
			}
		}
		if (p) return wt(e, n), !0;
		for (let e of Pe(d)) e.paint();
		for (let e of f) e();
	}
	Wt(e, t, m, L, _, b, y, i, s ? "horizontal" : "vertical"), Zt(e, t, m, L, _, b, y, s ? "horizontal" : "vertical", o, i), Nt(e, t, n, m, L, _, b, y, s ? "horizontal" : "vertical", o, i);
	let ne = Xt(t, m, L, _, b, y, s ? "horizontal" : "vertical"), re = (e, t) => {
		if (t !== "low" && t !== "high") return ne;
		let n = m.topology.nearDepth, r = ne.axisX, i = ne.axisY;
		if (e === "value" === s) {
			let e = H.y, r = H.y + H.h, a = m.project(H.x + H.w / 2, e, n), o = m.project(H.x + H.w / 2, r, n), s = a.y >= o.y ? e : r;
			i = t === "low" ? s : s === e ? r : e;
		} else {
			let e = H.x, i = H.x + H.w, a = m.project(e, H.y + H.h / 2, n), o = m.project(i, H.y + H.h / 2, n), s = a.x <= o.x ? e : i;
			r = t === "low" ? s : s === e ? i : e;
		}
		return {
			axisX: r,
			axisY: i,
			depth: n,
			horizontalStart: m.project(H.x, i, n),
			horizontalEnd: m.project(H.x + H.w, i, n),
			verticalStart: m.project(r, H.y + H.h, n),
			verticalEnd: m.project(r, H.y, n)
		};
	}, K = re("value", t.valAxisTickLabelPos), q = re("category", t.catAxisTickLabelPos), ie = r(t.valAxisFontSizeHpt, i) ?? 9 * i;
	if (e.font = `${t.valAxisFontItalic ? "italic " : ""}${t.valAxisFontBold ? "bold " : ""}${ie}px ${mt(t.valAxisFontFace)}`, e.fillStyle = t.valAxisFontColor ? `#${t.valAxisFontColor}` : "#595959", e.textAlign = s ? "center" : "right", e.textBaseline = s ? "top" : "middle", !t.valAxisHidden && t.valAxisTickLabelPos !== "none") {
		let { axisX: n, axisY: r, depth: a } = K, o = m.project(H.x + H.w / 2, H.y + H.h / 2, a), c = Gt(s ? K.horizontalStart : K.verticalStart, s ? K.horizontalEnd : K.verticalEnd, o, s ? "vertical" : "horizontal");
		e.textAlign = Math.abs(c.x) < .2 ? "center" : c.x < 0 ? "right" : "left", e.textBaseline = Math.abs(c.y) < .2 ? "middle" : c.y < 0 ? "bottom" : "top";
		let l = Yt(t.valAxisMajorTickMark, t.valAxisLineHidden, i, 5), u = t.valAxisDisplayUnits?.divisor;
		for (let i of L.majorTicks) {
			let o = s ? m.project(H.x + L.fraction(i) * H.w, r, a) : m.project(n, H.y + H.h - L.fraction(i) * H.h, a);
			e.fillText(E(h ? i / 100 : u != null && Number.isFinite(u) && u > 0 ? i / u : i, h ? t.valAxisFormatCode ?? "0%" : t.valAxisFormatCode, t.date1904), o.x + c.x * l, o.y + c.y * l);
		}
	}
	let J = r(t.catAxisFontSizeHpt, i) ?? 9 * i;
	if (e.font = `${t.catAxisFontItalic ? "italic " : ""}${t.catAxisFontBold ? "bold " : ""}${J}px ${mt(t.catAxisFontFace)}`, e.fillStyle = t.catAxisFontColor ? `#${t.catAxisFontColor}` : "#595959", !t.catAxisHidden && t.catAxisTickLabelPos !== "none") {
		let n = f(Yt(t.catAxisMajorTickMark, t.catAxisLineHidden, i, 6), t.catAxisLabelOffsetPercent), r = Array.from({ length: _ }, (e, n) => z(String(g[n] ?? n + 1), t.catAxisFormatCode, t.date1904)), a = Tt(t);
		if (a == null && (a = 0, !s && _ > 1)) {
			let t = Infinity, n = null, i = q.axisY;
			for (let e = 0; e < _; e++) {
				let r = S(e, _, b, y), a = m.project(H.x + r * H.w, i, m.topology.nearDepth);
				n && (t = Math.min(t, Math.hypot(a.x - n.x, a.y - n.y))), n = a;
			}
			Math.max(0, ...r.map((t) => e.measureText(t).width)) > t * .9 && (a = -Math.PI / 4);
		}
		let o = Math.max(1, Math.floor(t.catAxisTickLabelSkip ?? 1));
		for (let t = 0; t < _; t += o) {
			let i = S(t, _, b, y), { axisX: o, axisY: c, depth: l } = q, u = s ? m.project(o, H.y + S(t, _, b, y) * H.h, l) : m.project(H.x + i * H.w, c, l);
			if (s) {
				let i = m.project(o, H.y + H.h / 2, l), a = m.project(H.x + H.w / 2, H.y + H.h / 2, l), s = i.x <= a.x;
				e.textAlign = s ? "right" : "left", e.textBaseline = "middle", e.fillText(r[t], u.x + (s ? -n : n), u.y);
			} else {
				let i = m.project(H.x + H.w / 2, H.y + H.h / 2, l), o = Gt(q.horizontalStart, q.horizontalEnd, i, "vertical");
				Et(e, r[t], u, a, s, o.y < 0 ? -1 : 1, n);
			}
		}
	}
	Mt(e, t, n, u, s, i);
	for (let e of te) e();
	return Ft(e, t, d, i, !1, p, a), !0;
}
function $t(e, t, n, i, a) {
	if (!t.threeD || t.chartType !== "pie") return !1;
	let o = t.series[0];
	if (!o) return !0;
	let s = o.values.flatMap((e, t) => e != null && Number.isFinite(e) ? [{
		index: t,
		value: Math.abs(e)
	}] : []), c = 0;
	for (let e of s) c = Math.max(c, e.value);
	if (!(c > 0)) return !0;
	let l = s.reduce((e, t) => e + t.value / c, 0);
	if (!(l > 0) || !Number.isFinite(l)) return !0;
	let { plot: u, legend: d, legendMeasure: f } = At(e, t, n, i, "radial", a), p = ce({
		...t.threeD,
		rotationY: t.threeD.rotationY ?? 0,
		heightPercent: void 0,
		depthPercent: 100
	}, u, {
		sceneDepthScale: 1,
		sceneHeightScale: .15
	});
	if (!p) return !0;
	let m = new Map(o.dataPointOverrides?.map((e) => [e.idx, e]) ?? []), h = 0;
	for (let e of m.values()) e.explosion != null && Number.isFinite(e.explosion) && (h = Math.max(h, Math.max(0, Math.min(100, e.explosion)) / 100));
	let { scene: g } = p, _ = Math.min(g.w * .45 / (1 + h), p.modelDepth * .45 / (1 + h), g.h / .45);
	if (!(_ > 0)) return !0;
	let v = g.x + g.w / 2, y = g.y + g.h / 2, b = .5, x = _ * .3 * pe(t.threeD), S = 0, C = [], w = new Map(o.dataLabelOverrides?.map((e) => [e.idx, e]) ?? []), T = Math.max(48, Math.min(128, Math.ceil(Math.PI * 2 * _ / 4)));
	for (let e of s) {
		let n = e.value / c / l, r = Lt(t.firstSliceAngle, S, n), i = m.get(e.index), a = dt(t, o, i, e.index, 0), s = r.middle, u = i?.explosion != null && Number.isFinite(i.explosion) ? Math.max(0, Math.min(100, i.explosion)) / 100 : 0, d = v + Math.cos(s) * _ * u, f = b + Math.sin(s) * _ * u / p.modelDepth, h = Math.max(2, Math.ceil(T * n)), g = Ee({
			centerX: d,
			centerY: y,
			centerDepth: f,
			radius: _,
			modelDepth: p.modelDepth,
			thickness: x,
			startAngle: r.start,
			endAngle: r.end,
			segments: h
		});
		if (!g) {
			S += n;
			continue;
		}
		C.push({
			index: e.index,
			start: r.start,
			end: r.end,
			color: a.fill === null ? "transparent" : a.color,
			fillPaint: a.fill,
			value: e.value,
			percentValue: n,
			centerX: d,
			centerDepth: f,
			segments: h,
			mesh: g,
			lineColor: a.lineColor,
			lineFill: a.lineFill,
			lineWidthEmu: a.lineWidthEmu ?? null,
			lineDash: a.lineDash ?? "solid",
			lineCustomDash: a.lineCustomDash,
			lineCap: a.lineCap,
			lineJoin: a.lineJoin
		}), S += n;
	}
	p = he(p, C.flatMap((e) => e.mesh.vertices), u, .08);
	let E = [], D = {
		remaining: Fe,
		exceeded: !1
	}, O = (e) => {
		let t = e.lineWidthEmu == null ? .75 * i : Math.max(.25, e.lineWidthEmu / B * i);
		return e.lineFill !== null && (e.lineColor != null || e.lineFill !== void 0) ? {
			color: e.lineColor ?? "rgba(0,0,0,0.42)",
			width: t,
			dash: k(e.lineCustomDash, e.lineDash, t),
			cap: e.lineCap,
			join: e.lineJoin
		} : void 0;
	}, A = C.flatMap((t) => {
		let n = bt(p, t.mesh, t.color, void 0, D);
		return Ct(e, n, "fill", t.fillPaint, a), n;
	}), j = [], M = C.map(O), N = M[0], P = (e) => e == null ? null : [
		e.color,
		e.width,
		e.dash.join(","),
		e.cap,
		e.join
	].join("|"), F = N != null && C.every((e) => e.lineFill === void 0) && M.every((e) => P(e) === P(N)) && C.every((e) => Math.abs(e.centerX - v) < 1e-9 && Math.abs(e.centerDepth - b) < 1e-9);
	if (F) j.push(...xt(p, C, y, _, x, N, D));
	else for (let t = 0; t < C.length; t++) {
		let n = M[t];
		if (!n) continue;
		let r = bt(p, C[t].mesh, "transparent", n, D, !0);
		Ct(e, r, "outline", C[t].lineFill, a), j.push(...r);
	}
	if (D.exceeded) return wt(e, n), !0;
	if (F) {
		for (let t of Pe(A)) St(e, t);
		for (let t of Pe(j)) St(e, t);
	} else for (let t of Pe([...A, ...j])) St(e, t);
	for (let n of C) {
		let s = (n.start + n.end) / 2, c = w.get(n.index);
		if (kt(t, o, c)) {
			let l = o.seriesDataLabels, d = r(c?.fontSizeHpt ?? l?.fontSizeHpt ?? t.dataLabelFontSizeHpt, i) ?? 9 * i;
			e.font = `${c?.fontBold ?? l?.fontBold ?? t.dataLabelFontBold ? "bold " : ""}${d}px ${$(t, c?.fontFace ?? l?.fontFace ?? t.dataLabelFontFace)}`;
			let f = ue({
				customText: c?.text,
				showCategory: c?.showCatName ?? l?.showCatName ?? !1,
				showSeries: c?.showSerName ?? l?.showSerName ?? !1,
				showValue: c?.showVal ?? l?.showVal ?? t.showDataLabels,
				showPercent: c?.showPercent ?? l?.showPercent ?? !1,
				category: o.categories?.[n.index] ?? t.categories[n.index] ?? `${n.index + 1}`,
				seriesName: o.name || "Series 1",
				sourceValue: n.value,
				percentRatio: n.percentValue,
				formatCode: c?.formatCode ?? l?.formatCode ?? t.dataLabelFormatCode ?? o.valFormatCode,
				separator: c?.separator ?? l?.separator,
				date1904: t.date1904
			}), m = $(t, c?.fontFace ?? l?.fontFace ?? t.dataLabelFontFace), h = c?.text && c.richRuns?.length ? oe(e, {
				runs: c.richRuns,
				ptToPx: i,
				fontFamily: m,
				fallbackBold: c.fontBold ?? l?.fontBold ?? t.dataLabelFontBold ?? !1,
				fontFamilyForFace: (e) => $(t, e)
			}, d, `#${c.fontColor ?? l?.fontColor ?? o.labelColor ?? t.dataLabelFontColor ?? "111111"}`) : null, g = c?.position ?? l?.position ?? t.dataLabelPosition, v = y - x / 2, b = y + x / 2, S = p.cameraDepth(n.centerX, v, n.centerDepth) >= p.cameraDepth(n.centerX, b, n.centerDepth) ? v : b, C = 0, w = null;
			for (let e = 0; e <= 12; e++) {
				let t = n.start + (n.end - n.start) * e / 12, r = p.project(n.centerX + Math.cos(t) * _ * .64, S, n.centerDepth + Math.sin(t) * _ * .64 / p.modelDepth);
				w && (C += Math.hypot(r.x - w.x, r.y - w.y)), w = r;
			}
			let T = (g == null || g === "bestFit") && (n.percentValue === 0 || C < (h?.width ?? e.measureText(f).width)) || g === "outEnd", D = _ * (T ? 1.12 : .64), O = p.project(n.centerX + Math.cos(s) * D, S, n.centerDepth + Math.sin(s) * D / p.modelDepth), k = p.project(n.centerX + Math.cos(s) * _, S, n.centerDepth + Math.sin(s) * _ / p.modelDepth);
			E.push(() => Ot(e, t, o, 0, n.index, n.value, O, u, i, 0, n.percentValue, c, "ctr", k, T, void 0, void 0, void 0, a));
		}
	}
	for (let e of E) e();
	let I = o.categories?.length ? o.categories : t.categories, L = Array.from({ length: I.length }, (e, t) => {
		let n = m.get(t), r = n?.fillHidden === !0 ? "00000000" : n?.color ?? o.dataPointColors?.[t] ?? o.color;
		return r === "00000000" ? "00000000" : X(r ? `#${r}` : at(t), .8).replace(/^#/, "");
	});
	return Ft(e, {
		...t,
		categories: I,
		series: [{
			...o,
			categories: I,
			dataPointColors: L
		}]
	}, d, i, !0, f, a), !0;
}
function en(e, t, n, r, i = 0) {
	return !t.threeD || !(t.chartType === "pie" || nt.has(t.chartType)) ? !1 : lt(t) ? $t(e, t, n, r, i) ? !0 : Qt(e, t, n, r, i) : (wt(e, n), !0);
}
//#endregion
//#region src/three-d.ts
var tn = _e({ render: en }, "threeD");
//#endregion
export { tn as threeD };
