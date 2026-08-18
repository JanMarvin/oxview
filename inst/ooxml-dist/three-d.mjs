import { C as e, S as t, _ as n, d as r, f as i, g as a, h as o, l as s, r as c, t as l, u, x as d, y as f } from "./chart-number-format-qLhnk6hj.js";
import { H as p, L as m, N as h, S as g, _, b as v, d as y, g as b, i as x, j as S, n as C, r as w, s as T, t as E, v as D, w as O, x as k, y as ee } from "./three-d-C28kqDym.js";
import { t as A } from "./renderer-module-contract-BNGz8HvO.js";
function j(e) {
	switch (e) {
		case "cylinder":
		case "cone":
		case "coneToMax":
		case "pyramid":
		case "pyramidToMax": return e;
		default: return "box";
	}
}
var M = (e) => Math.max(0, Math.min(1, e));
function N(e, t) {
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
function P(e, t) {
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
		let r = N(e, t.indices);
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
function F(e) {
	let { horizontal: t, crossStart: n, crossSize: r, baseCoord: i, endCoord: a, nearDepth: o, farDepth: s } = e;
	if (![
		n,
		r,
		i,
		a,
		o,
		s
	].every(Number.isFinite) || r <= 0 || i === a || o === s) return null;
	let c = j(e.shape), l = c === "cylinder" || c === "cone" || c === "coneToMax", u = c !== "box" && c !== "cylinder", d = c === "coneToMax" || c === "pyramidToMax", f = l ? Math.max(8, Math.min(64, Math.trunc(e.roundSegments ?? 32))) : 4, p = M(e.baseScale ?? (d ? e.toMaxBaseScale ?? 1 : 1)), m = M(e.endScale ?? (u ? d ? e.toMaxEndScale ?? 0 : 0 : 1));
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
		faces: P(y, w),
		silhouetteEdges: T
	};
}
function I(e) {
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
		faces: P(_, [
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
function L(e) {
	let t = e.upper0 - e.lower0, n = e.upper1 - e.lower1;
	if (Number.isFinite(t) && Number.isFinite(n) && t * n < 0) {
		let r = t / (t - n), i = e.x0 + (e.x1 - e.x0) * r, a = e.lower0 + (e.lower1 - e.lower0) * r;
		return [I({
			...e,
			x1: i,
			lower1: a,
			upper1: a,
			capEnd: !1
		}), I({
			...e,
			x0: i,
			lower0: a,
			upper0: a,
			capStart: !1
		})].filter((e) => e != null);
	}
	let r = I(e);
	return r ? [r] : [];
}
function R(e) {
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
		faces: P(m, v),
		silhouetteEdges: h.slice(0, u ? void 0 : -1).map((e, t) => [e, g[t]])
	};
}
//#endregion
//#region packages/core/src/chart/three-d-scene.ts
function z(e, t) {
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
function B(e, t, n, r) {
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
var V = (e) => ({
	minX: Math.min(...e.map((e) => e.x)),
	maxX: Math.max(...e.map((e) => e.x)),
	minY: Math.min(...e.map((e) => e.y)),
	maxY: Math.max(...e.map((e) => e.y))
}), H = (e, t) => {
	let n = !1;
	for (let r = 0, i = e.length - 1; r < e.length; i = r++) {
		let a = e[r], o = e[i], s = (a.x - t.x) * (o.y - t.y) - (a.y - t.y) * (o.x - t.x), c = Math.max(1, Math.abs(a.x), Math.abs(a.y), Math.abs(o.x), Math.abs(o.y));
		if (Math.abs(s) <= c * 1e-9 && t.x >= Math.min(a.x, o.x) - 1e-9 && t.x <= Math.max(a.x, o.x) + 1e-9 && t.y >= Math.min(a.y, o.y) - 1e-9 && t.y <= Math.max(a.y, o.y) + 1e-9) return !0;
		a.y > t.y != o.y > t.y && t.x < (o.x - a.x) * (t.y - a.y) / (o.y - a.y) + a.x && (n = !n);
	}
	return n;
}, U = (e, t, n, r) => {
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
function W(e, t, n, r) {
	let i = [], a = (e) => {
		i.length >= 12 || i.some((t) => Math.hypot(t.x - e.x, t.y - e.y) < 1e-7) || i.push(e);
	}, o = {
		x: (Math.max(n.minX, r.minX) + Math.min(n.maxX, r.maxX)) / 2,
		y: (Math.max(n.minY, r.minY) + Math.min(n.maxY, r.maxY)) / 2
	};
	H(e, o) && H(t, o) && a(o);
	for (let n of e) H(t, n) && a(n);
	for (let n of t) H(e, n) && a(n);
	for (let n = 0; n < e.length && i.length < 12; n++) for (let r = 0; r < t.length && i.length < 12; r++) {
		let i = U(e[n], e[(n + 1) % e.length], t[r], t[(r + 1) % t.length]);
		i && a(i);
	}
	return i;
}
function G(e, t) {
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
function K(e) {
	if (e.length < 2) return [...e];
	let t = [...e.keys()].sort((t, n) => e[t].cameraDepth - e[n].cameraDepth || t - n), n = e.map((e) => V(e.points)), r = [...e.keys()].sort((e, t) => n[e].minX - n[t].minX || e - t), i = e.map(() => /* @__PURE__ */ new Set()), a = e.map(() => 0), o = [], s = 0;
	for (let c of r) {
		for (let e = o.length - 1; e >= 0; e--) n[o[e]].maxX < n[c].minX - 1e-9 && o.splice(e, 1);
		for (let r of o) {
			if (++s > 2e5) return t.map((t) => e[t]);
			if (n[r].maxY < n[c].minY - 1e-9 || n[c].maxY < n[r].minY - 1e-9) continue;
			let o = W(e[r].points, e[c].points, n[r], n[c]), l = 0;
			for (let t of o) {
				let n = G(e[r], t) - G(e[c], t), i = 1e-8 * Math.max(1, Math.abs(e[r].cameraDepth), Math.abs(e[c].cameraDepth));
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
var q = 1e-9, te = 1e4, ne = (e, t, n) => ({
	x: e.x + (t.x - e.x) * n,
	y: e.y + (t.y - e.y) * n,
	cameraDepth: e.cameraDepth + (t.cameraDepth - e.cameraDepth) * n,
	cameraWeight: (e.cameraWeight ?? 1) + ((t.cameraWeight ?? 1) - (e.cameraWeight ?? 1)) * n
}), J = (e, t) => Math.hypot(e.x - t.x, e.y - t.y) <= q;
function re(e, t, n = 0) {
	let r = t.filter((e) => Number.isFinite(e) && e > q);
	if (r.length === 0) return e.length >= 2 ? [[...e]] : [];
	r.length % 2 == 1 && r.push(...r);
	let i = [], a = 0, o = r[0], s = !0, c = r.reduce((e, t) => e + t, 0), l = c > q && Number.isFinite(n) ? (n % c + c) % c : 0;
	for (; l > q;) {
		let e = Math.min(l, o);
		l -= e, o -= e, o <= q && (a = (a + 1) % r.length, o = r[a], s = a % 2 == 0);
	}
	let u = null;
	for (let t = 0; t + 1 < e.length; t++) {
		let n = e[t], c = e[t + 1], l = Math.hypot(c.x - n.x, c.y - n.y);
		if (!(l > q)) continue;
		let d = 0;
		for (; d < l - q;) {
			let e = Math.min(o, l - d), t = ne(n, c, d / l), f = ne(n, c, (d + e) / l);
			if (s && (u ??= [], (u.length === 0 || !J(u.at(-1), t)) && u.push(t), u.push(f)), d += e, o -= e, o <= q) {
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
	if (i.length > 1 && J(e[0], e.at(-1)) && J(i[0][0], e[0]) && J(i.at(-1).at(-1), e.at(-1))) {
		let e = i.shift(), t = i.pop();
		i.unshift([...t, ...e.slice(1)]);
	}
	return i;
}
var Y = (e, t) => ({
	kind: e,
	points: t.map(({ x: e, y: t }) => ({
		x: e,
		y: t
	})),
	cameraDepths: t.map((e) => e.cameraDepth),
	cameraWeights: t.map((e) => e.cameraWeight ?? 1),
	cameraDepth: t.reduce((e, t) => e + t.cameraDepth, 0) / t.length
}), ie = (e, t, n) => {
	let r = [];
	for (let n = 0; n < 12; n++) {
		let i = Math.PI * 2 * n / 12;
		r.push({
			...e,
			x: e.x + Math.cos(i) * t,
			y: e.y + Math.sin(i) * t
		});
	}
	return Y(n, r);
};
function ae(e, t, n) {
	let r = Number.isFinite(n.width) ? Math.max(0, n.width) : 0;
	if (!(r > q) || t.length < 3) return null;
	let i = r / 2;
	if ((n.lineJoin ?? "miter") === "round") return ie(e, i, "join");
	let a = [];
	for (let n of t) {
		let t = n.x - e.x, r = n.y - e.y, o = Math.hypot(t, r);
		if (!(o > q)) continue;
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
		for (; s.length >= 2 && o(s.at(-2), s.at(-1), e) <= q;) s.pop();
		s.push(e);
	}
	let c = [];
	for (let e of [...a].reverse()) {
		for (; c.length >= 2 && o(c.at(-2), c.at(-1), e) <= q;) c.pop();
		c.push(e);
	}
	let l = [...s.slice(0, -1), ...c.slice(0, -1)];
	return l.length >= 3 ? Y("join", l) : null;
}
var oe = (e, t, n, r) => {
	let i = t.x * r.y - t.y * r.x;
	if (Math.abs(i) <= q) return null;
	let a = {
		x: n.x - e.x,
		y: n.y - e.y
	}, o = (a.x * r.y - a.y * r.x) / i;
	return {
		x: e.x + t.x * o,
		y: e.y + t.y * o
	};
};
function se(e, t) {
	let n = Number.isFinite(t.width) ? Math.max(0, t.width) : 0;
	if (!(n > q) || e.length < 2) return [];
	let r = n / 2, i = t.lineCap ?? "butt", a = t.lineJoin ?? "miter", o = Math.max(1, t.miterLimit ?? 10), s = [], c = re(e, t.dash ?? [], t.dashOffset);
	if (c == null) return null;
	let l = (e) => s.length >= 1e4 ? !1 : (s.push(e), !0);
	for (let n = 0; n < c.length; n++) {
		let s = c[n], u = s.length > 2 && J(s[0], s.at(-1)), d = n === 0 && J(s[0], e[0]) ? t.startCap ?? i : i, f = n + 1 === c.length && J(s.at(-1), e.at(-1)) ? t.endCap ?? i : i, p = [];
		for (let e = 0; e + 1 < s.length; e++) {
			let t = s[e], n = s[e + 1], r = Math.hypot(n.x - t.x, n.y - t.y);
			p.push(r > q ? {
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
			if (!l(Y("segment", [
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
		if (!u && d === "round" && !l(ie(s[0], r, "cap")) || !u && f === "round" && !l(ie(s.at(-1), r, "cap"))) return null;
		let m = (e, t, n) => {
			if (!t || !n) return !0;
			let i = t.x * n.y - t.y * n.x;
			if (Math.abs(i) <= q) return !0;
			if (a === "round") return l(ie(e, r, "join"));
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
				let i = oe(c, t, u, n);
				if (i && Math.hypot(i.x - e.x, i.y - e.y) <= r * o) return !!l(Y("join", [
					c,
					{
						...e,
						...i
					},
					u
				]));
			}
			return l(Y("join", [
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
var ce = 1e-9, le = (e, t) => Math.hypot(e.x - t.x, e.y - t.y, e.depth - t.depth) <= ce, ue = (e, t) => e.x - t.x || e.y - t.y || e.depth - t.depth, de = (e, t) => {
	let n = Math.min(e.length, t.length);
	for (let r = 0; r < n; r++) {
		let n = ue(e[r], t[r]);
		if (n !== 0) return n;
	}
	return e.length - t.length;
};
function fe(e) {
	let t = [...e].reverse();
	return de(e, t) <= 0 ? e : t;
}
function pe(e) {
	let t = le(e[0], e.at(-1)) ? e.slice(0, -1) : [...e];
	if (t.length === 0) return [];
	let n = 0;
	for (let e = 1; e < t.length; e++) ue(t[e], t[n]) < 0 && (n = e);
	let r = t.map((e, r) => t[(n + r) % t.length]), i = t.map((e, r) => t[(n - r + t.length) % t.length]), a = de(r, i) <= 0 ? r : i;
	return [...a, a[0]];
}
function me(e) {
	let t = [], n = (e) => {
		let n = t.find((t) => le(t.point, e));
		if (n) return ue(e, n.point) < 0 && (n.point = e), n;
		let r = {
			point: e,
			edges: [],
			order: -1
		};
		return t.push(r), r;
	}, r = [];
	for (let [t, i] of e) {
		if (le(t, i)) continue;
		let e = n(t), a = n(i);
		e !== a && r.push([e, a]);
	}
	t.sort((e, t) => ue(e.point, t.point)), t.forEach((e, t) => {
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
	for (let e of t) if (e.edges.length !== 2) for (let t of e.edges) o.has(t) || c.push(fe(s(e, t)));
	for (let e = 0; e < i.length; e++) {
		if (o.has(e)) continue;
		let t = i[e], n = t.first.order <= t.second.order ? t.first : t.second;
		c.push(pe(s(n, e)));
	}
	let l = t.filter((e) => e.edges.length > 2).map((e) => ({
		point: e.point,
		neighbours: e.edges.map((t) => {
			let n = i[t];
			return n.first === e ? n.second.point : n.first.point;
		}).sort(ue)
	}));
	return {
		paths: c.sort(de),
		junctions: l
	};
}
//#endregion
//#region packages/core/src/chart/three-d-renderer.ts
var X = [
	"4472C4",
	"ED7D31",
	"70AD47",
	"A5A5A5",
	"FFC000",
	"5B9BD5"
], he = new Set([
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
function ge(e, t) {
	let n = Number.isFinite(t) && t > 0 ? t / h : 1, r = Number.isFinite(e) && e >= 0 ? e / S : 0;
	return Math.max(.25, r) * n;
}
function _e(e, t) {
	let n = Number.isSafeInteger(t) && t > 0 ? t : 0, r = Array.from({ length: n }, () => []);
	for (let t of e) {
		let e = t.categoryIndex;
		Number.isSafeInteger(e) && e >= 0 && e < n && r[e].push(t);
	}
	return r;
}
var ve = (e, t) => `#${t?.color ?? X[e % X.length]}`;
function ye(e, t) {
	if (t?.lineHidden != null || t?.lineColor != null || t?.lineWidthEmu != null || t?.lineDash != null) return t.lineHidden !== !0;
	let n = e.chartexStyle;
	return (e.lineHidden != null || e.lineColor != null || e.lineWidthEmu != null || n?.lineHidden != null || n?.lineNoStyle != null || n?.lineColors != null || n?.lineWidthEmu != null || n?.lineDash != null || n?.lineCap != null || n?.lineJoin != null) && e.lineHidden !== !0 && n?.lineHidden !== !0;
}
function be(e, t) {
	let n = e.cameraNormal(t);
	if (!n) return 1;
	let r = {
		x: -.2,
		y: .25,
		z: 1
	}, i = Math.hypot(r.x, r.y, r.z), a = Math.max(0, (n.x * r.x + n.y * r.y + n.z * r.z) / i);
	return Math.max(.78, Math.min(1, .78 + .24 * a));
}
var xe = (e) => `"${e && !e.startsWith("+") ? e.replace(/["\\]/g, "") : "Arial"}"`, Z = (e, t, n = "minor") => xe((t?.startsWith("+mj-") ? e.themeMajorFontLatin : t?.startsWith("+mn-") ? e.themeMinorFontLatin : t) ?? (n === "major" ? e.themeMajorFontLatin : e.themeMinorFontLatin));
function Se(e, t) {
	if (t.length) {
		e.beginPath(), e.moveTo(t[0].x, t[0].y);
		for (let n = 1; n < t.length; n++) e.lineTo(t[n].x, t[n].y);
		e.closePath();
	}
}
var Ce = (e) => e === "transparent" || e === "#00000000" || e === "rgba(0,0,0,0)";
function we(e, t, n, r) {
	Ce(n) || (Se(e, t), e.fillStyle = n, e.fill(), r > 0 && (Se(e, t), e.fillStyle = `rgba(0,0,0,${r})`, e.fill()));
}
function Te(e, t, n, r, i, a, o, s, c, l, u, d) {
	return L({
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
	}).flatMap((t) => De(e, t, l).map((e) => ({
		...e,
		outline: !1,
		outlineSegments: void 0
	})));
}
function Ee(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m = !1, h = !1, g, _) {
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
	let v = F({
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
	return v ? De(e, v, d, g, _) : [];
}
function De(e, t, n, r, i, a = !1) {
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
				color: T(n, be(e, i)),
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
	let p = me([...c.values()].map(([e, n]) => [t.vertices[e], t.vertices[n]]));
	if (!r) return s;
	let m = (e, t) => Math.hypot(e.x - t.x, e.y - t.y, e.depth - t.depth) <= 1e-9, h = (e) => p.junctions.some((t) => m(t.point, e));
	for (let t of p.paths) {
		let n = t.map((t) => e.project(t.x, t.y, t.depth)), a = t.map((t) => e.cameraDepth(t.x, t.y, t.depth)), o = t.map((t) => e.cameraProjectionWeight(t.x, t.y, t.depth)), c = se(n.map((e, t) => ({
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
				shade: 0,
				cameraDepth: e.cameraDepth + t,
				cameraDepths: e.cameraDepths?.map((e) => e + t),
				cameraWeights: e.cameraWeights,
				outline: !1
			};
		}));
	}
	for (let t of p.junctions) {
		let n = ae({
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
			shade: 0,
			cameraDepth: n.cameraDepth + a,
			cameraDepths: n.cameraDepths?.map((e) => e + a),
			cameraWeights: n.cameraWeights,
			outline: !1
		});
	}
	return s;
}
function Oe(e, t, n, r, i, a, o) {
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
		let r = t[0], i = t.at(-1), s = Math.hypot(r.x - i.x, r.y - i.y, r.depth - i.depth) <= 1e-9, c = se((n && !s ? [...t, r] : [...t]).map((t) => ({
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
function ke(e, t) {
	we(e, t.points, t.color, t.shade), t.outline && (e.strokeStyle = t.outlineColor ?? "rgba(0,0,0,0.42)", e.lineWidth = t.outlineWidth ?? .75, e.setLineDash(y(t.outlineDash ?? "solid", e.lineWidth)), e.lineCap = t.outlineCap ?? "butt", e.lineJoin = t.outlineJoin ?? "miter", t.outline && (Se(e, t.points), e.stroke()), e.setLineDash([]));
}
function Ae(e, t, n) {
	t.points.length < 3 || Ce(n) || (Se(e, t.points), e.fillStyle = n, e.fill());
}
function je(e, t) {
	e.fillStyle = "#888", e.font = "12px sans-serif", e.textAlign = "center", e.textBaseline = "middle", e.fillText("(too many data points)", t.x + t.w / 2, t.y + t.h / 2);
}
function Me(e) {
	let t = e.catAxisLabelRotation;
	return t == null ? null : !Number.isFinite(t) || Math.abs(t) > 54e5 ? 0 : t / 6e4 * Math.PI / 180;
}
function Ne(e, t, n, r, i, a = 1, o = 6) {
	if (i || r === 0) {
		e.textAlign = i ? "right" : "center", e.textBaseline = i ? "middle" : a < 0 ? "bottom" : "top", e.fillText(t, n.x + (i ? -o : 0), n.y + (i ? 0 : a * o));
		return;
	}
	e.save(), e.translate(n.x, n.y + a * o), e.rotate(r), e.textAlign = a < 0 ? "left" : "right", e.textBaseline = "middle", e.fillText(t, 0, 0), e.restore();
}
function Pe(e, t, n, r, i, a, o) {
	if (!(r > 0) || !Number.isFinite(t.x) || !Number.isFinite(t.y)) return;
	let s = r / 2;
	switch (e.beginPath(), n) {
		case "square":
			e.rect(t.x - s, t.y - s, r, r);
			break;
		case "diamond":
			e.moveTo(t.x, t.y - s), e.lineTo(t.x + s, t.y), e.lineTo(t.x, t.y + s), e.lineTo(t.x - s, t.y), e.closePath();
			break;
		case "triangle":
			e.moveTo(t.x, t.y - s), e.lineTo(t.x + s, t.y + s), e.lineTo(t.x - s, t.y + s), e.closePath();
			break;
		case "x":
		case "plus":
		case "dash": {
			if (n === "dash") {
				e.moveTo(t.x - s, t.y), e.lineTo(t.x + s, t.y), e.strokeStyle = a, e.lineWidth = o, e.stroke();
				return;
			}
			let r = n === "x";
			e.moveTo(t.x - s, t.y + (r ? -s : 0)), e.lineTo(t.x + s, t.y + (r ? s : 0)), e.moveTo(t.x + (r ? -s : 0), t.y + s), e.lineTo(t.x + (r ? s : 0), t.y - s), e.strokeStyle = a, e.lineWidth = o, e.stroke();
			return;
		}
		case "star":
			for (let n = 0; n < 10; n++) {
				let r = -Math.PI / 2 + n * Math.PI / 5, i = n % 2 == 0 ? s : s * .4, a = t.x + Math.cos(r) * i, o = t.y + Math.sin(r) * i;
				n ? e.lineTo(a, o) : e.moveTo(a, o);
			}
			e.closePath();
			break;
		case "dot":
			e.arc(t.x, t.y, Math.max(1, s * .35), 0, Math.PI * 2);
			break;
		case "picture": return;
		default:
			e.arc(t.x, t.y, s, 0, Math.PI * 2);
			break;
	}
	i !== "transparent" && (e.fillStyle = i, e.fill()), e.strokeStyle = a, e.lineWidth = o, e.stroke();
}
function Fe(e, t, n, r, i, a, o, s, c, l = 0, u, d, p = "t", m = o, h = !0, g) {
	let y = d;
	if (y?.deleted) return;
	let x = n.seriesDataLabels, C = y?.showVal ?? x?.showVal ?? t.showDataLabels, w = y?.showCatName ?? x?.showCatName ?? !1, T = y?.showSerName ?? x?.showSerName ?? !1, E = y?.showPercent ?? x?.showPercent ?? !1, D = y?.text, O = ee({
		customText: D,
		showCategory: w,
		showSeries: T,
		showValue: C,
		showPercent: E,
		category: n.categories?.[i] ?? t.categories[i] ?? `${i + 1}`,
		seriesName: n.name || `Series ${r + 1}`,
		sourceValue: a,
		valueDivisor: g?.divisor,
		percentRatio: u != null && Number.isFinite(u) ? u : void 0,
		formatCode: y?.formatCode ?? x?.formatCode ?? t.dataLabelFormatCode ?? n.valFormatCode,
		percentFormatCode: y?.formatCode ?? x?.formatCode ?? t.dataLabelFormatCode ?? "0%",
		date1904: t.date1904,
		separator: y?.separator ?? x?.separator
	});
	if (!O) return;
	let A = f(y?.fontSizeHpt ?? x?.fontSizeHpt ?? t.dataLabelFontSizeHpt, c) ?? 9 * c, j = y?.fontBold ?? x?.fontBold ?? t.dataLabelFontBold ?? !1, M = Z(t, y?.fontFace ?? x?.fontFace ?? t.dataLabelFontFace);
	e.font = `${j ? "bold " : ""}${A}px ${M}`;
	let N = `#${y?.fontColor ?? x?.fontColor ?? n.labelColor ?? t.dataLabelFontColor ?? "111111"}`, P = D && y?.richRuns?.length ? k(e, {
		runs: y.richRuns,
		ptToPx: c,
		fontFamily: M,
		fallbackBold: j,
		fontFamilyForFace: (e) => Z(t, e)
	}, A, N) : null, F = P ? [] : b(O, Math.max(A, s.w * .45), Math.max(A * 1.2, s.h * .35), A * 1.2, (t) => e.measureText(t).width);
	if (!P && !F.length) return;
	let I = P?.width ?? Math.max(...F.map((t) => e.measureText(t).width)), L = P?.height ?? F.length * A * 1.2, R = _({
		kind: "point",
		x: o.x,
		y: o.y,
		position: y?.position ?? x?.position ?? t.dataLabelPosition ?? p,
		markerGap: l
	}, s, {
		w: I,
		h: L
	}, A, y?.manualLayout, s);
	if (!R) return;
	let z = y?.labelBox ?? x?.labelBox;
	if (x?.showLeaderLines && h && (e.beginPath(), e.moveTo(m.x, m.y), e.lineTo(Math.max(R.rect.x, Math.min(m.x, R.rect.x + R.rect.w)), Math.max(R.rect.y, Math.min(m.y, R.rect.y + R.rect.h))), e.strokeStyle = `#${x.leaderLineColor ?? "808080"}`, e.lineWidth = x.leaderLineWidthEmu == null ? .75 * c : Math.max(.25, x.leaderLineWidthEmu / S * c), e.stroke()), z && (z.fill && (e.fillStyle = `#${z.fill}`, e.fillRect(R.rect.x, R.rect.y, R.rect.w, R.rect.h)), z.borderColor && (e.strokeStyle = `#${z.borderColor}`, e.lineWidth = z.borderWidthEmu == null ? .75 * c : Math.max(.25, z.borderWidthEmu / S * c), e.strokeRect(R.rect.x, R.rect.y, R.rect.w, R.rect.h))), e.save(), e.beginPath(), e.rect(R.clip.x, R.clip.y, R.clip.w, R.clip.h), e.clip(), P) {
		v(e, P, R.x, R.y, R.textAlign, R.textBaseline), e.restore();
		return;
	}
	e.fillStyle = N, e.textAlign = R.textAlign, e.textBaseline = "middle";
	let B = A * 1.2, V = R.y - (F.length - 1) * B / 2;
	F.forEach((t, n) => e.fillText(t, R.x, V + n * B)), e.restore();
}
function Ie(e, t, n) {
	if (n?.deleted) return !1;
	if (n?.text) return !0;
	let r = t.seriesDataLabels;
	return (n?.showVal ?? r?.showVal ?? e.showDataLabels) || (n?.showCatName ?? r?.showCatName ?? !1) || (n?.showSerName ?? r?.showSerName ?? !1) || (n?.showPercent ?? r?.showPercent ?? !1);
}
function Le(t, r, s, c, l) {
	let p = i(r, s.h, c);
	if (r.title) {
		t.font = `${r.titleFontBold === !1 ? "" : "bold "}${p.fontPx}px ${xe(r.titleFontFace)}`, t.fillStyle = r.titleFontColor ? `#${r.titleFontColor}` : "#111111", t.textAlign = "center", t.textBaseline = "top";
		let n = t.measureText(r.title).width, i = {
			x: s.x + (s.w - n) / 2,
			y: s.y + p.topPad,
			w: n,
			h: Math.max(1, p.fontPx)
		}, a = r.titleManualLayout ? e({
			...r.titleManualLayout,
			w: void 0,
			h: void 0
		}, s, i) : null;
		t.fillText(r.title, a ? a.x + a.w / 2 : s.x + s.w / 2, a?.y ?? i.y);
	}
	let m = f(r.legendFontSizeHpt, c) ?? 9 * c;
	t.save(), t.font = `${r.legendFontBold ? "bold " : ""}${m}px ${xe(r.legendFontFace)}`;
	let h = r.chartType === "pie" ? r.series[0]?.categories?.length ? r.series[0].categories : r.categories : r.series.map((e, t) => e.name || `Series ${t + 1}`), g = n(r, s.w, s.h, .23, {
		itemWidths: h.map((e) => 7 * c + 4 + t.measureText(e).width),
		rowHeight: Math.max(m * 1.45, 12),
		itemGap: 12,
		horizontalPadding: 8,
		verticalPadding: 4
	});
	t.restore();
	let _ = a(g), v = o(r, s.w, s.h, c), y = l === "horizontal" ? r.catAxisTitle ? v.catFontPx + u(s.w) + 4 : 0 : l === "vertical" ? v.valBandW : 0, b = l === "horizontal" ? r.valAxisTitle ? v.valFontPx + u(s.h) + 4 : 0 : l === "vertical" ? v.catBandH : 0, x = d(r, s.x, s.y, s.w, s.h, c, {
		titleBand: p,
		legendSideReserveFrac: .23,
		legendReserve: g,
		pad: {
			t: p.bandH + _.legTopH + s.h * .04,
			r: _.legRightW + s.w * .05,
			b: _.legBottomH + s.h * .19 + b,
			l: _.legLeftW + s.w * .13 + y
		},
		honorPlotAreaManualLayout: !0,
		manualOuterInsets: {
			t: p.bandH,
			r: _.legRightW,
			b: _.legBottomH + b,
			l: _.legLeftW + y
		}
	}), S = {
		x: x.plotRect.px0,
		y: x.plotRect.py0,
		w: Math.max(1, x.plotRect.pw),
		h: Math.max(1, x.plotRect.ph)
	}, C = g ? g.side === "r" ? {
		x: s.x + s.w - g.reserveW,
		y: S.y,
		w: g.reserveW,
		h: S.h
	} : g.side === "l" ? {
		x: s.x,
		y: S.y,
		w: g.reserveW,
		h: S.h
	} : g.side === "t" ? {
		x: s.x + 4,
		y: s.y + p.bandH,
		w: Math.max(1, s.w - 8),
		h: g.reserveH
	} : {
		x: s.x + 4,
		y: s.y + s.h - g.reserveH,
		w: Math.max(1, s.w - 8),
		h: g.reserveH
	} : null;
	return {
		plot: S,
		legend: (C && r.legendManualLayout ? e(r.legendManualLayout, s, C) : null) ?? C
	};
}
function Re(t, n, i, a, o, s, c, l, u, d, f, p, m, h) {
	t.save(), t.font = `${d ? "italic " : ""}${u ? "bold " : ""}${s}px ${c}`, t.fillStyle = l ? `#${l}` : "#555";
	let g = m ? n : O(t, n, h), _ = r(o, f, p), v = a;
	if (m) {
		let n = t.measureText(g).width, r = Math.abs(Math.cos(_)), o = Math.abs(Math.sin(_)), c = {
			x: a.x - (n * r + s * o) / 2,
			y: a.y - (n * o + s * r) / 2,
			w: n * r + s * o,
			h: n * o + s * r
		}, l = e({
			...m,
			w: void 0,
			h: void 0
		}, i, c);
		l && (v = {
			x: l.x + l.w / 2,
			y: l.y + l.h / 2
		});
	}
	t.translate(v.x, v.y), _ && t.rotate(_), t.textAlign = "center", t.textBaseline = "middle", t.fillText(g, 0, 0), t.restore();
}
function ze(e, t, n, r, i, a) {
	if (t.valAxisTitle) {
		let o = s(t.valAxisTitleFontSizeHpt, a), c = i ? "horizontal" : "left";
		Re(e, t.valAxisTitle, n, i ? {
			x: r.x + r.w / 2,
			y: r.y + r.h + u(n.h) + o / 2
		} : {
			x: r.x - u(n.w) - o / 2,
			y: r.y + r.h / 2
		}, c, o, Z(t, t.valAxisTitleFontFace, "major"), t.valAxisTitleFontColor, t.valAxisTitleFontBold ?? !0, t.valAxisTitleFontItalic ?? !1, t.valAxisTitleRotation, t.valAxisTitleVerticalMode, t.valAxisTitleManualLayout, i ? r.w : r.h);
	}
	if (t.catAxisTitle) {
		let o = s(t.catAxisTitleFontSizeHpt, a), c = i ? "left" : "horizontal";
		Re(e, t.catAxisTitle, n, i ? {
			x: r.x - u(n.w) - o / 2,
			y: r.y + r.h / 2
		} : {
			x: r.x + r.w / 2,
			y: r.y + r.h + u(n.h) + o / 2
		}, c, o, Z(t, t.catAxisTitleFontFace, "major"), t.catAxisTitleFontColor, t.catAxisTitleFontBold ?? !0, t.catAxisTitleFontItalic ?? !1, t.catAxisTitleRotation, t.catAxisTitleVerticalMode, t.catAxisTitleManualLayout, i ? r.h : r.w);
	}
}
function Be(e, t, n, r, i, a, o, c, l, u) {
	let d = t.threeD?.seriesAxis;
	if (!d || d.hidden || t.threeD?.barGrouping !== "standard" || t.series.length === 0) return;
	let p = Qe(t, r, i, a, o, c, l), m = We(r), h = l === "vertical" ? m.seriesAxisX : p.axisX, g = l === "horizontal" ? m.floorY === r.front.y ? r.front.y + r.front.h : r.front.y : m.floorY, _ = r.project(h, g, r.topology.nearDepth), v = r.project(h, g, r.topology.farDepth), y = Math.hypot(v.x - _.x, v.y - _.y);
	if (!(y > 1e-6)) return;
	let b = {
		x: (v.x - _.x) / y,
		y: (v.y - _.y) / y
	}, x = {
		x: -b.y,
		y: b.x
	}, S = r.project(r.front.x + r.front.w / 2, r.front.y + r.front.h / 2, .5), C = {
		x: (_.x + v.x) / 2,
		y: (_.y + v.y) / 2
	};
	(C.x - S.x) * x.x + (C.y - S.y) * x.y < 0 && (x = {
		x: -x.x,
		y: -x.y
	}), (d.tickLabelPos === "low" && x.y < 0 || d.tickLabelPos === "high" && x.y > 0) && (x = {
		x: -x.x,
		y: -x.y
	}), d.lineHidden || ($(e, Q(d.lineColor, d.lineWidthEmu, null, u, "898989", 1)), e.beginPath(), e.moveTo(_.x, _.y), e.lineTo(v.x, v.y), e.stroke());
	let w = Math.max(1, Math.floor(d.tickMarkSkip ?? 1)), T = Math.max(1, Math.floor(d.tickLabelSkip ?? 1)), E = d.majorTickMark ?? "out", D = f(d.fontSizeHpt, u) ?? 9 * u;
	e.font = `${d.fontItalic ? "italic " : ""}${d.fontBold ? "bold " : ""}${D}px ${Z(t, d.fontFace)}`, e.fillStyle = d.fontColor ? `#${d.fontColor}` : "#595959", e.textAlign = Math.abs(x.x) < .2 ? "center" : x.x < 0 ? "right" : "left", e.textBaseline = Math.abs(x.y) < .2 ? "middle" : x.y < 0 ? "bottom" : "top";
	for (let n = 0; n < t.series.length; n++) {
		let i = r.seriesDepth(n, t.series.length, !1), a = d.orientation === "maxMin" ? 1 - i : i, o = r.project(h, g, a);
		if (!d.lineHidden && n % w === 0 && E !== "none") {
			let t = 6 * u, n = E === "cross" ? t / 2 : E === "out" ? t : 0, r = E === "cross" ? t / 2 : E === "in" ? t : 0;
			e.beginPath(), e.moveTo(o.x + x.x * n, o.y + x.y * n), e.lineTo(o.x - x.x * r, o.y - x.y * r), e.stroke();
		}
		d.tickLabelPos !== "none" && n % T === 0 && e.fillText(t.series[n].name || `Series ${n + 1}`, o.x + x.x * (6 * u + 3), o.y + x.y * (6 * u + 3));
	}
	if (e.setLineDash([]), d.title) {
		let i = s(d.titleFontSizeHpt, u);
		Re(e, d.title, n, {
			x: C.x + x.x * (D + i + 12),
			y: C.y + x.y * (D + i + 12)
		}, "horizontal", i, Z(t, d.titleFontFace, "major"), d.titleFontColor, d.titleFontBold ?? !0, d.titleFontItalic ?? !1, d.titleRotation, d.titleVerticalMode, d.titleManualLayout, Math.max(r.front.w, r.front.h));
	}
}
function Ve(e, n, r, i, a = !1) {
	if (!r) return;
	D(e, n, r, i);
	let o = new Map(n.series[0]?.dataPointOverrides?.map((e) => [e.idx, e]) ?? []), s = a ? (n.series[0]?.categories?.length ? n.series[0].categories : n.categories).map((e, t) => {
		let r = n.series[0]?.dataPointColors?.[t];
		return {
			label: e,
			color: r === "00000000" ? "transparent" : r ? `#${r}` : ve(t),
			series: n.series[0],
			point: o.get(t)
		};
	}) : n.series.map((e, t) => ({
		label: e.name || `Series ${t + 1}`,
		color: ve(t, e),
		series: e,
		point: void 0
	})), c = f(n.legendFontSizeHpt, i) ?? 9 * i;
	e.font = `${n.legendFontBold ? "bold " : ""}${c}px ${xe(n.legendFontFace)}`, e.textAlign = "left", e.textBaseline = "middle";
	let l = Math.max(c * 1.45, 12), u = Math.min(7 * i, l * .7);
	if (n.legendPos === "t" || n.legendPos === "b" || n.legendManualLayout != null && r.w >= r.h) {
		let o = s.map((t) => u + 4 + e.measureText(t.label).width), c = t(o, Math.max(1, r.w - 8), 12).slice(0, Math.max(0, Math.floor((r.h - 4 + 1e-6) / l))), d = r.y + 2 + l / 2;
		for (let t of c) {
			let c = t.map((e) => Math.min(r.w, o[e])), f = c.reduce((e, t) => e + t, 0) + Math.max(0, t.length - 1) * 12, p = r.x + Math.max(4, (r.w - f) / 2);
			for (let r = 0; r < t.length; r++) {
				let o = s[t[r]], l = Math.max(0, c[r] - u - 4);
				if (!a && n.chartType.toLowerCase().includes("line") && o.series?.lineHidden !== !0) {
					let t = o.series?.lineWidthEmu == null ? Math.max(1, 2 * i) : Math.max(.5, o.series.lineWidthEmu / S * i);
					e.beginPath(), e.moveTo(p, d), e.lineTo(p + u, d), e.strokeStyle = o.series?.lineColor ? `#${o.series.lineColor}` : T(o.color, .7), e.lineWidth = t, e.setLineDash(y(o.series?.chartexStyle?.lineDash ?? "solid", t)), e.stroke(), e.setLineDash([]);
				} else {
					o.color !== "transparent" && (e.fillStyle = o.color, e.fillRect(p, d - u / 2, u, u));
					let t = o.point?.lineHidden ?? o.series?.lineHidden, n = o.point?.lineColor ?? o.series?.lineColor;
					t !== !0 && n && (e.strokeStyle = `#${n}`, e.lineWidth = (o.point?.lineWidthEmu ?? o.series?.lineWidthEmu) == null ? .75 * i : Math.max(.25, (o.point?.lineWidthEmu ?? o.series?.lineWidthEmu ?? 0) / S * i), e.setLineDash(y(o.point?.lineDash ?? o.series?.chartexStyle?.lineDash ?? "solid", e.lineWidth)), e.strokeRect(p, d - u / 2, u, u), e.setLineDash([]));
				}
				e.fillStyle = n.legendFontColor ? `#${n.legendFontColor}` : "#595959", e.fillText(O(e, o.label, l), p + u + 4, d), p += c[r] + 12;
			}
			d += l;
		}
		return;
	}
	let d = r.y;
	for (let t = 0; t < s.length; t++) {
		let o = s[t], f = r.x + 8 + u, p = Math.max(0, r.x + r.w - 4 - f), m = Math.max(c * 1.2, 10), h = b(o.label, p, m * (a ? 1 : 2), m, (t) => e.measureText(t).width);
		if (h.length === 0) continue;
		let g = Math.max(l, h.length * m + 2);
		if (d + g > r.y + r.h + 1e-6) break;
		let _ = d + g / 2;
		if (!a && n.chartType.toLowerCase().includes("line")) {
			let t = o.series?.lineWidthEmu == null ? Math.max(1, 2 * i) : Math.max(.5, o.series.lineWidthEmu / S * i);
			o.series?.lineHidden !== !0 && (e.beginPath(), e.moveTo(r.x + 4, _), e.lineTo(r.x + 4 + u, _), e.strokeStyle = o.series?.lineColor ? `#${o.series.lineColor}` : T(o.color, .7), e.lineWidth = t, e.setLineDash(y(o.series?.chartexStyle?.lineDash ?? "solid", t)), e.stroke(), e.setLineDash([]));
		} else {
			o.color !== "transparent" && (e.fillStyle = o.color, e.fillRect(r.x + 4, _ - u / 2, u, u));
			let t = o.point?.lineHidden ?? o.series?.lineHidden, n = o.point?.lineColor ?? o.series?.lineColor;
			t !== !0 && n && (e.strokeStyle = `#${n}`, e.lineWidth = (o.point?.lineWidthEmu ?? o.series?.lineWidthEmu) == null ? .75 * i : Math.max(.25, (o.point?.lineWidthEmu ?? o.series?.lineWidthEmu ?? 0) / S * i), e.setLineDash(y(o.point?.lineDash ?? o.series?.chartexStyle?.lineDash ?? "solid", e.lineWidth)), e.strokeRect(r.x + 4, _ - u / 2, u, u), e.setLineDash([]));
		}
		e.fillStyle = n.legendFontColor ? `#${n.legendFontColor}` : "#595959";
		let v = _ - (h.length - 1) * m / 2;
		h.forEach((t, n) => e.fillText(t, f, v + n * m)), d += g;
	}
}
function He(e, t, n, r, i, a) {
	let o = i ? 100 : 1, s = e.valAxisMinorTickMark ?? "none";
	return p({
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
function Ue(e, t, n) {
	let r = e != null && Number.isFinite(e) ? (e % 360 + 360) % 360 : 0, i = Number.isFinite(t) ? Math.max(0, Math.min(1, t)) : 0, a = Number.isFinite(n) ? Math.max(0, Math.min(1 - i, n)) : 0, o = Math.PI / 2 - (r * Math.PI / 180 + i * Math.PI * 2), s = o - a * Math.PI * 2;
	return {
		start: Math.min(o, s),
		end: Math.max(o, s),
		middle: (o + s) / 2,
		leading: o
	};
}
function We(e) {
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
function Q(e, t, n, r, i = "A6A6A6", a = .75) {
	let o = t != null && Number.isFinite(t) && t >= 0 ? Math.max(.25, t / S * r) : a * r;
	return {
		color: `#${e ?? i}`,
		width: o,
		dash: y(n ?? "solid", o)
	};
}
function $(e, t) {
	e.strokeStyle = t.color, e.lineWidth = t.width, e.setLineDash(t.dash);
}
function Ge(e, t, n, r, i, a, o, s, c) {
	let { front: l } = n, u = l.x, d = l.x + l.w, f = We(n), { sideX: p, floorY: m, oppositeFloorY: h, nearDepth: _, farDepth: v } = f, y = (t, n) => {
		n?.fillHidden === !0 || !n?.fillColor || we(e, t, `#${n.fillColor}`, 0);
	};
	y(f.floor, t.threeD?.floor), y(f.sideWall, t.threeD?.sideWall), y(f.backWall, t.threeD?.backWall);
	let b = (t, a) => {
		$(e, a);
		for (let a of t) if (i === "horizontal") {
			let t = l.x + r.fraction(a) * l.w, i = n.project(t, m, v), o = n.project(t, h, v);
			e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(o.x, o.y), e.stroke();
		} else {
			let t = l.y + l.h - r.fraction(a) * l.h, i = n.project(p, t, _), o = n.project(p, t, v), s = n.project(p === u ? d : u, t, v);
			e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(o.x, o.y), e.stroke(), e.beginPath(), e.moveTo(o.x, o.y), e.lineTo(s.x, s.y), e.stroke();
		}
	};
	t.valAxisMinorGridlines === !0 && b(r.minorTicks, Q(t.valAxisMinorGridlineColor, t.valAxisMinorGridlineWidthEmu, t.valAxisMinorGridlineDash, c, "D9D9D9", .5)), t.valAxisMajorGridlines !== !1 && b(r.majorTicks, Q(t.valAxisGridlineColor, t.valAxisGridlineWidthEmu, t.valAxisGridlineDash, c, "898989", 1)), $(e, Q(null, null, null, c, "898989", 1));
	for (let t = 0; t < a; t++) if (i === "vertical") {
		let r = l.x + g(t, a, o, s) * l.w, i = n.project(r, m, _), c = n.project(r, m, v);
		e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(c.x, c.y), e.stroke();
	} else {
		let r = l.y + g(t, a, o, s) * l.h, i = n.project(p, r, _), c = n.project(p, r, v);
		e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(c.x, c.y), e.stroke();
	}
	let x = (t, n) => {
		if (!(n?.lineHidden === !0 || t.length < 2)) {
			$(e, Q(n?.lineColor, n?.lineWidthEmu, n?.lineDash, c, "898989", 1)), e.beginPath(), e.moveTo(t[0].x, t[0].y);
			for (let n = 1; n < t.length; n++) e.lineTo(t[n].x, t[n].y);
			e.lineTo(t[0].x, t[0].y), e.closePath(), e.stroke();
		}
	};
	x(f.floor, t.threeD?.floor), x(f.sideWall, t.threeD?.sideWall), x(f.backWall, t.threeD?.backWall), e.setLineDash([]);
}
function Ke(e, t, n, r, i, a, o, s, c) {
	let l = Qe(t, n, r, i, a, o, c), u = c === "vertical" ? !t.catAxisHidden && !t.catAxisLineHidden : !t.valAxisHidden && !t.valAxisLineHidden, d = c === "vertical" ? !t.valAxisHidden && !t.valAxisLineHidden : !t.catAxisHidden && !t.catAxisLineHidden;
	u && ($(e, Q(c === "vertical" ? t.catAxisLineColor : t.valAxisLineColor, c === "vertical" ? t.catAxisLineWidthEmu : t.valAxisLineWidthEmu, null, s, "898989", 1)), e.beginPath(), e.moveTo(l.horizontalStart.x, l.horizontalStart.y), e.lineTo(l.horizontalEnd.x, l.horizontalEnd.y), e.stroke()), d && ($(e, Q(c === "vertical" ? t.valAxisLineColor : t.catAxisLineColor, c === "vertical" ? t.valAxisLineWidthEmu : t.catAxisLineWidthEmu, null, s, "898989", 1)), e.beginPath(), e.moveTo(l.verticalStart.x, l.verticalStart.y), e.lineTo(l.verticalEnd.x, l.verticalEnd.y), e.stroke()), e.setLineDash([]);
}
function qe(e, t, n, r) {
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
function Je(e, t, n, r, i, a, o, s, c) {
	if (!t || t === "none") return;
	let l = qe(r, i, a, o), u = Ye(s, c), d = t === "cross" ? u / 2 : u, f = t === "out" || t === "cross" ? d : 0, p = t === "in" || t === "cross" ? d : 0;
	e.beginPath(), e.moveTo(n.x + l.x * f, n.y + l.y * f), e.lineTo(n.x - l.x * p, n.y - l.y * p), e.stroke();
}
function Ye(e, t) {
	return (e === "minor" ? 4 : 6) * t;
}
function Xe(e, t, n) {
	if (e !== "out" && e !== "cross") return 0;
	let r = Ye(t, n);
	return e === "cross" ? r / 2 : r;
}
function Ze(e, t, n, r) {
	if (t) return r;
	let i = Xe(e, "major", n);
	return Math.max(r, i + 3 * n);
}
function Qe(e, t, n, r, i, a, o) {
	let { front: s } = t, c = (e) => Math.max(0, Math.min(1, e)), l = t.topology.axisX === "min" ? s.x : s.x + s.w, u = t.topology.axisY === "min" ? s.y : s.y + s.h, d = () => {
		if (e.catAxisCrossesAt != null && Number.isFinite(e.catAxisCrossesAt)) {
			let t = e.chartType.endsWith("Pct") ? e.catAxisCrossesAt * 100 : e.catAxisCrossesAt;
			return c(n.fraction(t));
		}
		let t = e.catAxisCrosses ?? "autoZero";
		return c(t === "min" ? n.fraction(n.min) : t === "max" ? n.fraction(n.max) : n.fraction(0));
	}, f = () => {
		let t = e.valAxisCrossesAt;
		if (t != null && Number.isFinite(t)) return g(t - 1, r, i, a);
		let n = e.valAxisCrosses;
		if (n !== "min" && n !== "max") return null;
		let o = +(n === "max");
		return a ? 1 - o : o;
	}, p = d(), m = f(), h = o === "horizontal" ? s.x + p * s.w : m == null ? l : s.x + m * s.w, _ = o === "vertical" ? s.y + s.h - p * s.h : m == null ? u : s.y + m * s.h, v = t.topology.nearDepth;
	return {
		axisX: h,
		axisY: _,
		depth: v,
		horizontalStart: t.project(s.x, _, v),
		horizontalEnd: t.project(s.x + s.w, _, v),
		verticalStart: t.project(h, s.y + s.h, v),
		verticalEnd: t.project(h, s.y, v)
	};
}
function $e(e, t, n, r, i, a, o, s, c) {
	let { front: l } = n, u = Qe(t, n, r, i, a, o, s), { axisX: d, axisY: f, depth: p } = u, m = n.project(l.x + l.w / 2, l.y + l.h / 2, p), h = t.valAxisMinorTickMark ?? "none";
	if (!t.valAxisHidden && !t.valAxisLineHidden) {
		$(e, Q(t.valAxisLineColor, t.valAxisLineWidthEmu, null, c, "898989", 1));
		let i = (e) => s === "horizontal" ? n.project(l.x + r.fraction(e) * l.w, f, p) : n.project(d, l.y + l.h - r.fraction(e) * l.h, p), a = s === "horizontal" ? u.horizontalStart : u.verticalStart, o = s === "horizontal" ? u.horizontalEnd : u.verticalEnd;
		for (let n of r.majorTicks) Je(e, t.valAxisMajorTickMark, i(n), a, o, m, s === "vertical" ? "horizontal" : "vertical", "major", c);
		for (let t of r.minorTicks) Je(e, h, i(t), a, o, m, s === "vertical" ? "horizontal" : "vertical", "minor", c);
	}
	if (!t.catAxisHidden && !t.catAxisLineHidden) {
		$(e, Q(t.catAxisLineColor, t.catAxisLineWidthEmu, null, c, "898989", 1));
		let r = s === "vertical" ? u.horizontalStart : u.verticalStart, h = s === "vertical" ? u.horizontalEnd : u.verticalEnd, _ = Math.max(1, Math.floor(t.catAxisTickMarkSkip ?? 1));
		for (let u = 0; u < i; u += _) {
			let _ = g(u, i, a, o), v = s === "vertical" ? n.project(l.x + _ * l.w, f, p) : n.project(d, l.y + _ * l.h, p);
			Je(e, t.catAxisMajorTickMark, v, r, h, m, s === "vertical" ? "vertical" : "horizontal", "major", c);
		}
		let v = t.catAxisMinorUnit;
		if (t.catAxisMinorTickMark && t.catAxisMinorTickMark !== "none" && v != null && Number.isFinite(v) && v > 0) {
			let u = t.catAxisMajorUnit != null && Number.isFinite(t.catAxisMajorUnit) && t.catAxisMajorUnit > 0 ? t.catAxisMajorUnit : _, y = Math.min(512, Math.ceil(i / v));
			for (let _ = 1; _ < y; _++) {
				let y = _ * v;
				if (!(y < i)) break;
				if (Math.abs(y / u - Math.round(y / u)) < 1e-9) continue;
				let b = g(y, i, a, o), x = s === "vertical" ? n.project(l.x + b * l.w, f, p) : n.project(d, l.y + b * l.h, p);
				Je(e, t.catAxisMinorTickMark, x, r, h, m, s === "vertical" ? "vertical" : "horizontal", "minor", c);
			}
		}
	}
	e.setLineDash([]);
}
function et(e, t, n, r) {
	if (!t.threeD) return !1;
	let i = t.chartType === "clusteredBar" || t.chartType === "clusteredBarH" || t.chartType.startsWith("stackedBar"), a = t.chartType.endsWith("H") || t.chartType.includes("BarH"), o = t.chartType.startsWith("stacked"), s = i && !o && t.threeD.barGrouping === "standard", { plot: u, legend: d } = Le(e, t, n, r, a ? "horizontal" : "vertical"), p = C(t.threeD, u, {
		sceneDepthScale: i ? s ? .65 : .1 : .4,
		perspectiveTangentGain: s ? 1 : 2
	});
	if (!p) return !0;
	let _ = t.chartType.endsWith("Pct"), v = t.series.find((e) => (e.categories?.length ?? 0) > 0)?.categories ?? t.categories, b = Math.max(1, v.length, ...t.series.map((e) => e.values.length)), E = t.catAxisOrientation === "maxMin", D = t.catAxisCrossBetween === "between", O = t.dispBlanksAs ?? "gap", k = t.valAxisLogBase != null && Number.isFinite(t.valAxisLogBase) && t.valAxisLogBase >= 2, ee = (e, n) => {
		let r = t.series[e]?.values[n];
		return r != null && Number.isFinite(r) && (!k || r > 0) || r == null && (o || O === "zero");
	}, A = (e, n) => {
		let r = t.series[e]?.values[n] ?? 0;
		if (!Number.isFinite(r)) return 0;
		if (!_) return r;
		let i = 0;
		for (let e of t.series) {
			let t = e.values[n];
			t != null && Number.isFinite(t) && (i = Math.max(i, Math.abs(t)));
		}
		if (!(i > 0)) return 0;
		let a = 0;
		for (let e of t.series) {
			let t = e.values[n];
			t != null && Number.isFinite(t) && (a += Math.abs(t) / i);
		}
		return a > 0 ? r / i / a * 100 : 0;
	}, j = (e, t) => {
		let n = e + t;
		return Number.isFinite(n) ? n : t < 0 ? -Number.MAX_VALUE : Number.MAX_VALUE;
	}, M = 0, N = 0;
	if (o) {
		for (let e = 0; e < b; e++) {
			let n = 0, r = 0;
			for (let i = 0; i < t.series.length; i++) {
				let t = A(i, e);
				t >= 0 ? n = j(n, t) : r = j(r, t);
			}
			M = Math.min(M, r), N = Math.max(N, n);
		}
		_ && (M = M < 0 ? -100 : 0, N = N > 0 ? 100 : 0, M === 0 && N === 0 && (N = 1));
	} else {
		let e = m(t.series.flatMap((e) => e.values).filter((e) => e != null && Number.isFinite(e) && (!k || e > 0)), k ? {
			min: 1,
			max: 10
		} : {
			min: 0,
			max: 1
		});
		M = k ? e.min : Math.min(0, e.min), N = k ? e.max : Math.max(0, e.max);
	}
	let P = He(t, M, N, (a ? p.front.w : p.front.h) / r, _, a ? "horizontal" : "vertical"), F = (e) => Number.isFinite(e) ? Math.max(P.min, Math.min(P.max, e)) : P.min;
	Ge(e, t, p, P, a ? "horizontal" : "vertical", b, D, E, r);
	let { front: I } = p, L = Math.max(1, t.series.length), R = [], V = t.series.map((e) => new Map(e.dataPointOverrides?.map((e) => [e.idx, e]) ?? [])), H = t.series.map((e) => new Map(e.dataLabelOverrides?.map((e) => [e.idx, e]) ?? []));
	if (i) {
		let i = p.prismInterval(0, 1, !0), c = [], l = Array(b).fill(0), u = Array(b).fill(0), d = (a ? I.h : I.w) / b, f = t.barGapWidth != null && Number.isFinite(t.barGapWidth) && t.barGapWidth >= 0 ? t.barGapWidth : 150;
		for (let e = 0; e < t.series.length; e++) {
			let n = t.series[e], m = s ? p.prismInterval(e, L, !1) : i, g = w(d, f, s ? 0 : e, s ? 1 : L, o || s);
			for (let i = 0; i < b; i++) {
				if (!ee(e, i)) continue;
				let s = A(e, i), f = V[e].get(i), p = f?.fillHidden === !0 ? "transparent" : f?.color ?? n.dataPointColors?.[i], v = p === "00000000" ? "transparent" : p ? `#${p}` : n.color === "00000000" ? "transparent" : ve(e, n), y = ye(n, f), S = f?.lineColor ?? n.lineColor, C = f?.lineWidthEmu ?? n.lineWidthEmu, w = f?.lineDash ?? n.chartexStyle?.lineDash ?? "solid", T = n.chartexStyle?.lineCap === "rnd" ? "round" : n.chartexStyle?.lineCap === "sq" ? "square" : "butt", D = n.chartexStyle?.lineJoin === "round" || n.chartexStyle?.lineJoin === "bevel" ? n.chartexStyle.lineJoin : "miter", O = o ? s >= 0 ? l[i] : u[i] : 0, M = j(O, s);
				o && (s >= 0 ? l[i] = M : u[i] = M);
				let N = F(O), L = F(M), R = n.threeDShape ?? t.threeD.shape ?? "box", z = R === "cone" || R === "pyramid", B = R === "coneToMax" || R === "pyramidToMax", H = (e) => {
					if (!z) return 1;
					let t = k && !(O > 0) ? P.min : O, n = P.fraction(t), r = P.fraction(M), i = P.fraction(e), a = r - n;
					return a === 0 || !Number.isFinite(a) || !Number.isFinite(i - n) ? +(e === t) : Math.max(0, Math.min(1, 1 - (i - n) / a));
				}, U = (e) => {
					if (!B) return 1;
					let t = M >= O ? P.max : P.min, n = k ? P.min : 0, r = P.fraction(t), i = P.fraction(n), a = P.fraction(e), o = Math.abs(r - i);
					return !(o > 0) || ![
						r,
						i,
						a
					].every(Number.isFinite) ? x(e, P.min, P.max) : Math.max(0, Math.min(1, Math.abs(r - a) / o));
				}, W = B ? U(N) : H(N), G = B ? U(L) : H(L);
				if (a) {
					let t = I.x + P.fraction(N) * I.w, n = I.x + P.fraction(L) * I.w, a = E ? b - 1 - i : i, o = I.y + a * d + g.offset;
					c.push({
						x: Math.min(t, n),
						y: o,
						width: Math.abs(n - t),
						height: g.size,
						nearDepth: m.near,
						farDepth: m.far,
						categoryIndex: i,
						seriesIndex: e,
						color: v,
						shape: R,
						baseCoord: t,
						endCoord: n,
						baseScale: W,
						endScale: G,
						omitBaseCap: !1,
						omitEndCap: !1,
						outline: y,
						outlineColor: S ? `#${S}` : "rgba(0,0,0,0.42)",
						outlineWidth: C == null ? .75 * r / h : ge(C, r),
						outlineDash: w,
						outlineCap: T,
						outlineJoin: D,
						labelValue: _ ? s / 100 : s
					});
				} else {
					let t = I.y + I.h - P.fraction(N) * I.h, n = I.y + I.h - P.fraction(L) * I.h, a = E ? b - 1 - i : i, o = I.x + a * d + g.offset;
					c.push({
						x: o,
						y: Math.min(t, n),
						width: g.size,
						height: Math.abs(n - t),
						nearDepth: m.near,
						farDepth: m.far,
						categoryIndex: i,
						seriesIndex: e,
						color: v,
						shape: R,
						baseCoord: t,
						endCoord: n,
						baseScale: W,
						endScale: G,
						omitBaseCap: !1,
						omitEndCap: !1,
						outline: y,
						outlineColor: S ? `#${S}` : "rgba(0,0,0,0.42)",
						outlineWidth: C == null ? .75 * r / h : ge(C, r),
						outlineDash: w,
						outlineCap: T,
						outlineJoin: D,
						labelValue: _ ? s / 100 : s
					});
				}
			}
		}
		if (o) {
			let e = _e(c, b);
			for (let t = 0; t < b; t++) {
				let n = e[t];
				for (let e of [-1, 1]) {
					let t = n.filter((t) => Math.sign(t.labelValue) === e && !Ce(t.color) && Math.abs(t.endCoord - t.baseCoord) > 1e-9).sort((e, t) => e.seriesIndex - t.seriesIndex);
					for (let e = 0; e + 1 < t.length; e++) {
						let n = t[e], r = t[e + 1], i = 1e-8 * Math.max(1, Math.abs(n.endCoord), Math.abs(r.baseCoord));
						n.shape !== r.shape || Math.abs(n.endCoord - r.baseCoord) > i || Math.abs(n.endScale - r.baseScale) > 1e-9 || n.nearDepth !== r.nearDepth || n.farDepth !== r.farDepth || (n.omitEndCap = !0, r.omitBaseCap = !0);
					}
				}
				let r = n.find((e) => e.labelValue > 0 && !Ce(e.color)), i = n.find((e) => e.labelValue < 0 && !Ce(e.color));
				if (r && i) {
					let e = 1e-8 * Math.max(1, Math.abs(r.baseCoord), Math.abs(i.baseCoord));
					r.shape === i.shape && Math.abs(r.baseCoord - i.baseCoord) <= e && Math.abs(r.baseScale - i.baseScale) <= 1e-9 && r.nearDepth === i.nearDepth && r.farDepth === i.farDepth && (r.omitBaseCap = !0, i.omitBaseCap = !0);
				}
			}
		}
		let m = {
			remaining: te,
			exceeded: !1
		}, g = c.flatMap((e) => Ee(p, e.shape, a, e.x, e.y, e.width, e.height, e.baseCoord, e.endCoord, e.nearDepth, e.farDepth, e.color, e.baseScale, e.endScale, e.omitBaseCap, e.omitEndCap, e.outline && e.outlineColor ? {
			color: e.outlineColor,
			width: e.outlineWidth,
			dash: y(e.outlineDash, e.outlineWidth),
			cap: e.outlineCap,
			join: e.outlineJoin
		} : void 0, m));
		if (m.exceeded) return je(e, n), !0;
		for (let t of K(g)) ke(e, t);
		for (let i of c) {
			let o = t.series[i.seriesIndex], s = a ? p.project(i.endCoord, i.y + i.height / 2, (i.nearDepth + i.farDepth) / 2) : p.project(i.x + i.width / 2, i.endCoord, (i.nearDepth + i.farDepth) / 2), c = H[i.seriesIndex].get(i.categoryIndex);
			Ie(t, o, c) && R.push(() => Fe(e, t, o, i.seriesIndex, i.categoryIndex, i.labelValue, s, n, r, 0, void 0, c, "t", s, !0, t.valAxisDisplayUnits));
		}
	} else {
		let i = t.series.map(() => Array(b).fill(0)), a = t.series.map(() => Array(b).fill(0));
		if (o) {
			let e = Array(b).fill(0), n = Array(b).fill(0);
			for (let r = 0; r < t.series.length; r++) for (let t = 0; t < b; t++) {
				let o = A(r, t), s = o >= 0 ? e[t] : n[t];
				i[r][t] = s, a[r][t] = j(s, o), o >= 0 ? e[t] = j(e[t], o) : n[t] = j(n[t], o);
			}
		}
		let s = (e) => {
			let t = p.seriesDepth(e, L, o), n = 0, r = 0;
			for (let i = 0; i < b; i++) {
				if (!ee(e, i)) continue;
				let s = o ? a[e][i] : A(e, i), c = I.x + g(i, b, D, E) * I.w, l = I.y + I.h - P.fraction(F(s)) * I.h;
				n += p.cameraDepth(c, l, t), r++;
			}
			return r > 0 ? n / r : -Infinity;
		}, c = t.series.map((e, t) => t).sort((e, t) => s(e) - s(t) || t - e), l = [], u = [], d = !1;
		for (let s of c) {
			if (d) break;
			let c = t.series[s], f = ve(s, c), m = o ? p.prismInterval(0, 1, !0) : p.prismInterval(s, L, !1), h = I.x + I.w / 2, v = I.y + I.h / 2, x = p.cameraDepth(h, v, m.near) >= p.cameraDepth(h, v, m.far) ? m.near : m.far, C = [], w = [], k = [], j = [], M = [], N = [], F = [], U = [], W = [], G = [];
			for (let e = 0; e < b; e++) {
				if (!ee(s, e)) {
					C.push(null), w.push(null), k.push(null), j.push(null), M.push(null), N.push(null), F.push(null), U.push(null), W.push(null), G.push(null);
					continue;
				}
				let n = o ? a[s][e] : A(s, e), r = o ? i[s][e] : 0, c = I.x + g(e, b, D, E) * I.w, l = P.fraction(n), u = P.fraction(r), d = Number.isFinite(u) ? u : r <= P.min ? 0 : 1, f = Number.isFinite(l) && l >= 0 && l <= 1, m = Number.isFinite(l) ? Math.max(0, Math.min(1, l)) : n <= P.min ? 0 : 1, h = I.y + I.h - m * I.h, _ = I.y + I.h - Math.max(0, Math.min(1, d)) * I.h;
				C.push(t.chartType.toLowerCase().includes("area") || f ? p.project(c, h, x) : null), w.push(p.project(c, _, x)), k.push(f ? p.cameraDepth(c, h, x) : null), j.push(p.cameraDepth(c, _, x)), M.push(n), N.push(c), F.push(h), U.push(_), W.push(l), G.push(d);
			}
			let K = [], q = null;
			for (let e = 0; e < C.length; e++) {
				let t = C[e], n = w[e];
				if (!t || !n) {
					O === "gap" && (q && K.push(q), q = null);
					continue;
				}
				q ??= {
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
				}, q.upper.push(t), q.lower.push(n), q.upperDepths.push(k[e] ?? 0), q.lowerDepths.push(j[e] ?? 0), q.indices.push(e), q.sceneXs.push(N[e] ?? 0), q.upperYs.push(F[e] ?? 0), q.lowerYs.push(U[e] ?? 0), q.upperFractions.push(W[e] ?? 0), q.lowerFractions.push(G[e] ?? 0);
			}
			q && K.push(q);
			let te = [];
			if (t.chartType.toLowerCase().includes("area")) for (let t of K) {
				let n = null;
				for (let r = 0; r + 1 < t.upper.length; r++) {
					let i = B(t.lowerFractions[r], t.lowerFractions[r + 1], t.upperFractions[r], t.upperFractions[r + 1]);
					for (let a = 0; a < i.length; a++) {
						let o = i[a], s = t.sceneXs[r] + (t.sceneXs[r + 1] - t.sceneXs[r]) * o.startT, c = t.sceneXs[r] + (t.sceneXs[r + 1] - t.sceneXs[r]) * o.endT, u = I.y + I.h - o.lowerStart * I.h, h = I.y + I.h - o.lowerEnd * I.h, g = I.y + I.h - o.upperStart * I.h, _ = I.y + I.h - o.upperEnd * I.h, v = {
							...p.project(s, g, x),
							cameraDepth: p.cameraDepth(s, g, x),
							cameraWeight: p.cameraProjectionWeight(s, g, x)
						}, y = {
							...p.project(c, _, x),
							cameraDepth: p.cameraDepth(c, _, x),
							cameraWeight: p.cameraProjectionWeight(c, _, x)
						};
						n != null && Math.hypot(n.at(-1).x - v.x, n.at(-1).y - v.y) <= 1e-8 ? n.push(y) : (n && n.length >= 2 && te.push(n), n = [v, y]);
						let b = Te(p, s, c, u, h, g, _, m.near, m.far, f, r === 0 && a === 0 && o.startT === 0, r + 2 === t.upper.length && a + 1 === i.length && o.endT === 1);
						for (let t of b) {
							if (l.length >= 1e4) {
								d = !0;
								break;
							}
							l.push({
								points: t.points,
								cameraDepth: t.cameraDepth,
								cameraDepths: t.cameraDepths,
								cameraWeights: t.cameraWeights,
								layer: 0,
								paint: () => ke(e, t)
							});
						}
						if (d) break;
					}
					if (d) break;
				}
				if (n && n.length >= 2 && te.push(n), d) break;
			}
			let ne = [];
			if (!t.chartType.toLowerCase().includes("area")) {
				let e = [], t = null;
				for (let n = 0; n < b; n++) {
					let r = M[n], i = r == null ? NaN : P.fraction(r);
					if (r == null || !Number.isFinite(i)) {
						O === "gap" && t && (e.push(t), t = null);
						continue;
					}
					t ??= [], t.push({
						x: I.x + g(n, b, D, E) * I.w,
						fraction: i
					});
				}
				t && e.push(t);
				let n = (e) => {
					let t = Math.max(0, Math.min(1, e.fraction)), n = I.y + I.h - t * I.h;
					return {
						...p.project(e.x, n, x),
						cameraDepth: p.cameraDepth(e.x, n, x),
						cameraWeight: p.cameraProjectionWeight(e.x, n, x)
					};
				}, r = (e) => {
					e && e.path.length >= 2 && ne.push(e);
				};
				for (let t of e) {
					if (t.length < 2) continue;
					let e = [t[0]];
					for (let n = 0; n + 1 < t.length; n++) {
						let r = t[n - 1] ?? t[n], i = t[n], a = t[n + 1], o = t[n + 2] ?? a;
						if (c.smooth !== !0 || t.length < 3) {
							e.push(a);
							continue;
						}
						let s = {
							x: i.x + (a.x - r.x) / 6,
							fraction: i.fraction + (a.fraction - r.fraction) / 6
						}, l = {
							x: a.x - (o.x - i.x) / 6,
							fraction: a.fraction - (o.fraction - i.fraction) / 6
						};
						for (let t = 1; t <= 12; t++) {
							let n = t / 12, r = 1 - n;
							e.push({
								x: r * r * r * i.x + 3 * r * r * n * s.x + 3 * r * n * n * l.x + n * n * n * a.x,
								fraction: r * r * r * i.fraction + 3 * r * r * n * s.fraction + 3 * r * n * n * l.fraction + n * n * n * a.fraction
							});
						}
					}
					let i = null, a = 0;
					for (let t = 0; t + 1 < e.length; t++) {
						let o = e[t], s = e[t + 1], c = (e) => p.project(e.x, I.y + I.h - e.fraction * I.h, x), l = c(o), u = c(s), d = Math.hypot(u.x - l.x, u.y - l.y), f = Number.isFinite(d) ? d : Math.hypot(s.x - o.x, (s.fraction - o.fraction) * I.h), m = z(o.fraction, s.fraction);
						if (!m || m.endT - m.startT <= 1e-12) {
							r(i), i = null, a += f;
							continue;
						}
						let h = (e) => ({
							x: o.x + (s.x - o.x) * e,
							fraction: o.fraction + (s.fraction - o.fraction) * e
						}), g = c(h(m.startT)), _ = Math.hypot(g.x - l.x, g.y - l.y), v = n(h(m.startT)), y = n(h(m.endT));
						i != null && Math.hypot(i.path.at(-1).x - v.x, i.path.at(-1).y - v.y) <= 1e-8 ? (i.path.push(y), i.endClipped = t + 1 < e.length - 1 || m.endT < 1) : (r(i), i = {
							path: [v, y],
							startClipped: t > 0 || m.startT > 0,
							endClipped: t + 1 < e.length - 1 || m.endT < 1,
							dashOffset: a + (Number.isFinite(_) ? _ : f * m.startT)
						}), a += f;
					}
					r(i);
				}
			}
			let J = t.chartType.toLowerCase().includes("area"), re = c.lineHidden != null || c.lineColor != null || c.lineWidthEmu != null || c.chartexStyle?.lineHidden != null || c.chartexStyle?.lineColors?.some(Boolean) || c.chartexStyle?.lineWidthEmu != null || c.chartexStyle?.lineDash != null || c.chartexStyle?.lineCap != null || c.chartexStyle?.lineJoin != null;
			if (c.lineHidden !== !0 && (!J || re)) {
				let t = c.lineColor ? `#${c.lineColor}` : T(f, .7), n = c.lineWidthEmu ? Math.max(.5, c.lineWidthEmu / S) * r : J ? .75 * r : Math.max(1, 2 * r), i = y(c.chartexStyle?.lineDash ?? "solid", n), a = c.chartexStyle?.lineCap === "rnd" ? "round" : c.chartexStyle?.lineCap === "sq" ? "square" : "butt", o = c.chartexStyle?.lineJoin === "round" || c.chartexStyle?.lineJoin === "bevel" ? c.chartexStyle.lineJoin : "miter", s = (r, s, c = s, u = 0) => {
					let f = se(r, {
						width: n,
						dash: i,
						dashOffset: u,
						lineCap: a,
						startCap: s,
						endCap: c,
						lineJoin: o
					});
					if (f == null) {
						d = !0;
						return;
					}
					if (l.length + f.length > 1e4) {
						d = !0;
						return;
					}
					for (let n of f) l.push({
						points: n.points,
						cameraDepth: n.cameraDepth,
						cameraDepths: n.cameraDepths,
						cameraWeights: n.cameraWeights,
						layer: 1,
						paint: () => Ae(e, n, t)
					});
				};
				if (J) for (let e of te) s(e, a);
				else for (let e of ne) s(e.path, e.startClipped ? "butt" : a, e.endClipped ? "butt" : a, e.dashOffset);
			}
			let Y = c.dataPointOverrides?.some((e) => e.markerSymbol != null && e.markerSymbol !== "none") === !0;
			if (t.chartType.toLowerCase().includes("line") && (c.showMarker === !0 || Y)) for (let t = 0; t < C.length; t++) {
				let n = C[t];
				if (!n) continue;
				let i = V[s].get(t), a = i?.markerSymbol ?? (c.showMarker === !0 ? c.markerSymbol ?? "circle" : "none");
				if (a === "none") continue;
				let o = i?.markerSize ?? c.markerSize ?? 5, l = i?.markerFill ?? c.markerFill ?? c.color ?? X[s % X.length], d = i?.markerLine ?? c.markerLine ?? c.lineColor ?? c.color ?? X[s % X.length], f = (i?.markerLineWidthEmu ?? c.markerLineWidthEmu) == null ? Math.max(.75, c.lineWidthEmu == null ? r : c.lineWidthEmu / S * r) : Math.max(.25, (i?.markerLineWidthEmu ?? c.markerLineWidthEmu ?? 0) / S * r);
				u.push(() => Pe(e, n, a, Math.max(2, o) * r, l === "00000000" ? "transparent" : `#${l}`, `#${d}`, f));
			}
			for (let i = 0; i < C.length; i++) {
				let a = C[i];
				if (!a) continue;
				let o = A(s, i), l = V[s].get(i), u = l?.markerSize ?? c.markerSize ?? 5, d = H[s].get(i);
				Ie(t, c, d) && R.push(() => Fe(e, t, c, s, i, _ ? o / 100 : o, a, n, r, c.showMarker === !0 || l?.markerSymbol != null ? u * r / 2 : 0, void 0, d, "t", a, !0, t.valAxisDisplayUnits));
			}
		}
		if (d) return je(e, n), !0;
		for (let e of K(l)) e.paint();
		for (let e of u) e();
	}
	Ke(e, t, p, P, b, D, E, r, a ? "horizontal" : "vertical"), $e(e, t, p, P, b, D, E, a ? "horizontal" : "vertical", r), Be(e, t, n, p, P, b, D, E, a ? "horizontal" : "vertical", r);
	let U = Qe(t, p, P, b, D, E, a ? "horizontal" : "vertical"), W = (e, t) => {
		if (t !== "low" && t !== "high") return U;
		let n = p.topology.nearDepth, r = U.axisX, i = U.axisY;
		if (e === "value" === a) {
			let e = I.y, r = I.y + I.h, a = p.project(I.x + I.w / 2, e, n), o = p.project(I.x + I.w / 2, r, n), s = a.y >= o.y ? e : r;
			i = t === "low" ? s : s === e ? r : e;
		} else {
			let e = I.x, i = I.x + I.w, a = p.project(e, I.y + I.h / 2, n), o = p.project(i, I.y + I.h / 2, n), s = a.x <= o.x ? e : i;
			r = t === "low" ? s : s === e ? i : e;
		}
		return {
			axisX: r,
			axisY: i,
			depth: n,
			horizontalStart: p.project(I.x, i, n),
			horizontalEnd: p.project(I.x + I.w, i, n),
			verticalStart: p.project(r, I.y + I.h, n),
			verticalEnd: p.project(r, I.y, n)
		};
	}, G = W("value", t.valAxisTickLabelPos), q = W("category", t.catAxisTickLabelPos), ne = f(t.valAxisFontSizeHpt, r) ?? 9 * r;
	if (e.font = `${t.valAxisFontItalic ? "italic " : ""}${t.valAxisFontBold ? "bold " : ""}${ne}px ${xe(t.valAxisFontFace)}`, e.fillStyle = t.valAxisFontColor ? `#${t.valAxisFontColor}` : "#595959", e.textAlign = a ? "center" : "right", e.textBaseline = a ? "top" : "middle", !t.valAxisHidden && t.valAxisTickLabelPos !== "none") {
		let { axisX: n, axisY: i, depth: o } = G, s = p.project(I.x + I.w / 2, I.y + I.h / 2, o), l = qe(a ? G.horizontalStart : G.verticalStart, a ? G.horizontalEnd : G.verticalEnd, s, a ? "vertical" : "horizontal");
		e.textAlign = Math.abs(l.x) < .2 ? "center" : l.x < 0 ? "right" : "left", e.textBaseline = Math.abs(l.y) < .2 ? "middle" : l.y < 0 ? "bottom" : "top";
		let u = Ze(t.valAxisMajorTickMark, t.valAxisLineHidden, r, 5), d = t.valAxisDisplayUnits?.divisor;
		for (let r of P.majorTicks) {
			let s = a ? p.project(I.x + P.fraction(r) * I.w, i, o) : p.project(n, I.y + I.h - P.fraction(r) * I.h, o);
			e.fillText(c(_ ? r / 100 : d != null && Number.isFinite(d) && d > 0 ? r / d : r, _ ? t.valAxisFormatCode ?? "0%" : t.valAxisFormatCode, t.date1904), s.x + l.x * u, s.y + l.y * u);
		}
	}
	let J = f(t.catAxisFontSizeHpt, r) ?? 9 * r;
	if (e.font = `${t.catAxisFontItalic ? "italic " : ""}${t.catAxisFontBold ? "bold " : ""}${J}px ${xe(t.catAxisFontFace)}`, e.fillStyle = t.catAxisFontColor ? `#${t.catAxisFontColor}` : "#595959", !t.catAxisHidden && t.catAxisTickLabelPos !== "none") {
		let n = Ze(t.catAxisMajorTickMark, t.catAxisLineHidden, r, 6), i = Array.from({ length: b }, (e, n) => l(String(v[n] ?? n + 1), t.catAxisFormatCode, t.date1904)), o = Me(t);
		if (o == null && (o = 0, !a && b > 1)) {
			let t = Infinity, n = null, r = q.axisY;
			for (let e = 0; e < b; e++) {
				let i = g(e, b, D, E), a = p.project(I.x + i * I.w, r, p.topology.nearDepth);
				n && (t = Math.min(t, Math.hypot(a.x - n.x, a.y - n.y))), n = a;
			}
			Math.max(0, ...i.map((t) => e.measureText(t).width)) > t * .9 && (o = -Math.PI / 4);
		}
		let s = Math.max(1, Math.floor(t.catAxisTickLabelSkip ?? 1));
		for (let t = 0; t < b; t += s) {
			let r = g(t, b, D, E), { axisX: s, axisY: c, depth: l } = q, u = a ? p.project(s, I.y + g(t, b, D, E) * I.h, l) : p.project(I.x + r * I.w, c, l);
			if (a) {
				let r = p.project(s, I.y + I.h / 2, l), a = p.project(I.x + I.w / 2, I.y + I.h / 2, l), o = r.x <= a.x;
				e.textAlign = o ? "right" : "left", e.textBaseline = "middle", e.fillText(i[t], u.x + (o ? -n : n), u.y);
			} else {
				let r = p.project(I.x + I.w / 2, I.y + I.h / 2, l), s = qe(q.horizontalStart, q.horizontalEnd, r, "vertical");
				Ne(e, i[t], u, o, a, s.y < 0 ? -1 : 1, n);
			}
		}
	}
	ze(e, t, n, u, a, r);
	for (let e of R) e();
	return Ve(e, t, d, r), !0;
}
function tt(e, t, n, r) {
	if (!t.threeD || t.chartType !== "pie") return !1;
	let i = t.series[0];
	if (!i) return !0;
	let a = i.values.flatMap((e, t) => e != null && Number.isFinite(e) ? [{
		index: t,
		value: Math.abs(e)
	}] : []), o = 0;
	for (let e of a) o = Math.max(o, e.value);
	if (!(o > 0)) return !0;
	let s = a.reduce((e, t) => e + t.value / o, 0);
	if (!(s > 0) || !Number.isFinite(s)) return !0;
	let { plot: c, legend: l } = Le(e, t, n, r, "radial"), u = C({
		...t.threeD,
		rotationY: t.threeD.rotationY ?? 0,
		depthPercent: 100
	}, c, {
		sceneDepthScale: 1,
		sceneHeightScale: .15
	});
	if (!u) return !0;
	let d = new Map(i.dataPointOverrides?.map((e) => [e.idx, e]) ?? []), p = 0;
	for (let e of d.values()) e.explosion != null && Number.isFinite(e.explosion) && (p = Math.max(p, Math.max(0, Math.min(100, e.explosion)) / 100));
	let { scene: m } = u, h = Math.min(m.w * .45 / (1 + p), u.modelDepth * .45 / (1 + p), m.h / .45);
	if (!(h > 0)) return !0;
	let g = m.x + m.w / 2, _ = m.y + m.h / 2, v = .5, b = h * .3, x = 0, w = [], D = new Map(i.dataLabelOverrides?.map((e) => [e.idx, e]) ?? []), O = Math.max(48, Math.min(128, Math.ceil(Math.PI * 2 * h / 4)));
	for (let e of a) {
		let n = e.value / o / s, r = Ue(t.firstSliceAngle, x, n), a = d.get(e.index), c = a?.fillHidden === !0 ? "00000000" : a?.color ?? i.dataPointColors?.[e.index] ?? i.color, l = r.middle, f = a?.explosion != null && Number.isFinite(a.explosion) ? Math.max(0, Math.min(100, a.explosion)) / 100 : 0, p = g + Math.cos(l) * h * f, m = v + Math.sin(l) * h * f / u.modelDepth, y = Math.max(2, Math.ceil(O * n)), S = R({
			centerX: p,
			centerY: _,
			centerDepth: m,
			radius: h,
			modelDepth: u.modelDepth,
			thickness: b,
			startAngle: r.start,
			endAngle: r.end,
			segments: y
		});
		if (!S) {
			x += n;
			continue;
		}
		w.push({
			index: e.index,
			start: r.start,
			end: r.end,
			color: c === "00000000" ? "transparent" : c ? `#${c}` : ve(e.index),
			value: e.value,
			percentValue: n,
			centerX: p,
			centerDepth: m,
			segments: y,
			mesh: S,
			lineHidden: a?.lineHidden ?? i.lineHidden ?? !1,
			lineColor: a?.lineColor ?? i.lineColor ?? null,
			lineWidthEmu: a?.lineWidthEmu ?? i.lineWidthEmu ?? null,
			lineDash: a?.lineDash ?? i.chartexStyle?.lineDash ?? "solid",
			lineCap: i.chartexStyle?.lineCap === "rnd" ? "round" : i.chartexStyle?.lineCap === "sq" ? "square" : "butt",
			lineJoin: i.chartexStyle?.lineJoin === "round" || i.chartexStyle?.lineJoin === "bevel" ? i.chartexStyle.lineJoin : "miter"
		}), x += n;
	}
	u = E(u, w.flatMap((e) => e.mesh.vertices), c, .08);
	let A = [], j = {
		remaining: te,
		exceeded: !1
	}, M = (e) => {
		let t = e.lineWidthEmu == null ? .75 * r : Math.max(.25, e.lineWidthEmu / S * r);
		return !e.lineHidden && e.lineColor ? {
			color: `#${e.lineColor}`,
			width: t,
			dash: y(e.lineDash, t),
			cap: e.lineCap,
			join: e.lineJoin
		} : void 0;
	}, N = w.flatMap((e) => De(u, e.mesh, e.color, void 0, j)), P = [], F = w.map(M), I = F[0], L = (e) => e == null ? null : [
		e.color,
		e.width,
		e.dash.join(","),
		e.cap,
		e.join
	].join("|"), z = I != null && F.every((e) => L(e) === L(I)) && w.every((e) => Math.abs(e.centerX - g) < 1e-9 && Math.abs(e.centerDepth - v) < 1e-9);
	if (z) P.push(...Oe(u, w, _, h, b, I, j));
	else for (let e = 0; e < w.length; e++) {
		let t = F[e];
		t && P.push(...De(u, w[e].mesh, "transparent", t, j, !0));
	}
	if (j.exceeded) return je(e, n), !0;
	if (z) {
		for (let t of K(N)) ke(e, t);
		for (let t of K(P)) ke(e, t);
	} else for (let t of K([...N, ...P])) ke(e, t);
	for (let n of w) {
		let a = (n.start + n.end) / 2, o = D.get(n.index);
		if (Ie(t, i, o)) {
			let s = i.seriesDataLabels, l = f(o?.fontSizeHpt ?? s?.fontSizeHpt ?? t.dataLabelFontSizeHpt, r) ?? 9 * r;
			e.font = `${o?.fontBold ?? s?.fontBold ?? t.dataLabelFontBold ? "bold " : ""}${l}px ${Z(t, o?.fontFace ?? s?.fontFace ?? t.dataLabelFontFace)}`;
			let d = ee({
				customText: o?.text,
				showCategory: o?.showCatName ?? s?.showCatName ?? !1,
				showSeries: o?.showSerName ?? s?.showSerName ?? !1,
				showValue: o?.showVal ?? s?.showVal ?? t.showDataLabels,
				showPercent: o?.showPercent ?? s?.showPercent ?? !1,
				category: i.categories?.[n.index] ?? t.categories[n.index] ?? `${n.index + 1}`,
				seriesName: i.name || "Series 1",
				sourceValue: n.value,
				percentRatio: n.percentValue,
				formatCode: o?.formatCode ?? s?.formatCode ?? t.dataLabelFormatCode ?? i.valFormatCode,
				separator: o?.separator ?? s?.separator,
				date1904: t.date1904
			}), p = Z(t, o?.fontFace ?? s?.fontFace ?? t.dataLabelFontFace), m = o?.text && o.richRuns?.length ? k(e, {
				runs: o.richRuns,
				ptToPx: r,
				fontFamily: p,
				fallbackBold: o.fontBold ?? s?.fontBold ?? t.dataLabelFontBold ?? !1,
				fontFamilyForFace: (e) => Z(t, e)
			}, l, `#${o.fontColor ?? s?.fontColor ?? i.labelColor ?? t.dataLabelFontColor ?? "111111"}`) : null, g = o?.position ?? s?.position ?? t.dataLabelPosition, v = _ - b / 2, y = _ + b / 2, x = u.cameraDepth(n.centerX, v, n.centerDepth) >= u.cameraDepth(n.centerX, y, n.centerDepth) ? v : y, S = 0, C = null;
			for (let e = 0; e <= 12; e++) {
				let t = n.start + (n.end - n.start) * e / 12, r = u.project(n.centerX + Math.cos(t) * h * .64, x, n.centerDepth + Math.sin(t) * h * .64 / u.modelDepth);
				C && (S += Math.hypot(r.x - C.x, r.y - C.y)), C = r;
			}
			let w = (g == null || g === "bestFit") && (n.percentValue === 0 || S < (m?.width ?? e.measureText(d).width)) || g === "outEnd", T = h * (w ? 1.12 : .64), E = u.project(n.centerX + Math.cos(a) * T, x, n.centerDepth + Math.sin(a) * T / u.modelDepth), D = u.project(n.centerX + Math.cos(a) * h, x, n.centerDepth + Math.sin(a) * h / u.modelDepth);
			A.push(() => Fe(e, t, i, 0, n.index, n.value, E, c, r, 0, n.percentValue, o, "ctr", D, w));
		}
	}
	for (let e of A) e();
	let B = i.categories?.length ? i.categories : t.categories, V = Array.from({ length: B.length }, (e, t) => {
		let n = d.get(t), r = n?.fillHidden === !0 ? "00000000" : n?.color ?? i.dataPointColors?.[t] ?? i.color;
		return r === "00000000" ? "00000000" : T(r ? `#${r}` : ve(t), .8).replace(/^#/, "");
	});
	return Ve(e, {
		...t,
		categories: B,
		series: [{
			...i,
			categories: B,
			dataPointColors: V
		}]
	}, l, r, !0), !0;
}
function nt(e, t, n, r) {
	return t.threeD ? tt(e, t, n, r) ? !0 : he.has(t.chartType) ? et(e, t, n, r) : !1 : !1;
}
//#endregion
//#region src/three-d.ts
var rt = A({ render: nt }, "threeD");
//#endregion
export { rt as threeD };
