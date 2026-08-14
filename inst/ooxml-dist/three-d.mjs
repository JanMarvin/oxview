import { S as e, b as t, c as n, d as r, g as i, h as a, l as o, m as s, r as c, t as l, u, v as d, x as f } from "./chart-number-format-tjYUR9eS.js";
import { T as p, b as m, c as h, d as g, f as _, h as v, l as y, n as b, s as x, u as S } from "./dash-Cyc-sevN.js";
//#region packages/core/src/chart/three-d.ts
function C(e, t, n, r, i) {
	let a = Number.isFinite(e) && e > 0 ? e : 0, o = Number.isFinite(t) ? D(t, 0, 500) : 150, s = Math.max(1, Math.trunc(r)), c = D(Math.trunc(n), 0, s - 1), l = i ? 1 : s, u = a / (l + o / 100);
	return {
		offset: (a - u * l) / 2 + (i ? 0 : c * u),
		size: u
	};
}
function w(e, t, n) {
	if (![
		e,
		t,
		n
	].every(Number.isFinite)) return 1;
	let r = e >= 0 ? n : t;
	return 1 - Math.min(1, Math.abs(e) / Math.max(Number.MIN_VALUE, Math.abs(r)));
}
function T(e, t, n, r = .06) {
	if (!t.length || t.length > 1e5 || ![
		n.x,
		n.y,
		n.w,
		n.h
	].every(Number.isFinite) || n.w <= 0 || n.h <= 0) return e;
	let i = t.map((t) => e.project(t.x, t.y, t.depth));
	if (!i.every((e) => Number.isFinite(e.x) && Number.isFinite(e.y))) return e;
	let a = Infinity, o = -Infinity, s = Infinity, c = -Infinity;
	for (let e of i) a = Math.min(a, e.x), o = Math.max(o, e.x), s = Math.min(s, e.y), c = Math.max(c, e.y);
	let l = o - a, u = c - s;
	if (!(l > 2 ** -52) || !(u > 2 ** -52)) return e;
	let d = D(E(r, .06), 0, .45), f = n.w * (1 - 2 * d), p = n.h * (1 - 2 * d), m = Math.min(f / l, p / u);
	if (!(m > 0) || !Number.isFinite(m)) return e;
	let h = {
		x: (a + o) / 2,
		y: (s + c) / 2
	}, g = {
		x: n.x + n.w / 2,
		y: n.y + n.h / 2
	}, _ = e.project, v = (e, t, n) => {
		let r = _(e, t, n);
		return {
			x: g.x + (r.x - h.x) * m,
			y: g.y + (r.y - h.y) * m
		};
	};
	return {
		...e,
		project: v,
		depthX: e.depthX * m,
		depthY: e.depthY * m
	};
}
var E = (e, t) => typeof e == "number" && Number.isFinite(e) ? e : t, D = (e, t, n) => Math.min(n, Math.max(t, e));
function O(e, t, n = {}) {
	if (![
		t.x,
		t.y,
		t.w,
		t.h
	].every(Number.isFinite) || t.w <= 0 || t.h <= 0) return null;
	let r = D(E(e.rotationX, 15), -90, 90), i = (D(E(e.rotationY, 20), 0, 360) + 180) % 360 - 180, a = D(E(e.depthPercent, 100), 20, 2e3), o = D(E(e.perspective, 30), 0, 240), s = D(E(e.gapDepthPercent, 150), 0, 500), c = e.heightPercent != null && Number.isFinite(e.heightPercent) ? D(e.heightPercent, 5, 500) : null, l = n.sceneHeightScale != null && Number.isFinite(n.sceneHeightScale) ? D(n.sceneHeightScale * 100, 5, 500) : null, u = c ?? l, d = t;
	if (u != null) {
		let e = u / 100, n = Math.min(t.w, t.h / e), r = n * e;
		d = {
			x: t.x + (t.w - n) / 2,
			y: t.y + (t.h - r) / 2,
			w: n,
			h: r
		};
	}
	let f = Math.PI / 180, p = D(E(n.sceneDepthScale, .1), .01, 2), m = d.w * p * (a / 100), h = d.x + d.w / 2, g = d.y + d.h / 2, _ = -i * f, v = r * f, y = Math.cos(_), b = Math.sin(_), x = Math.cos(v), S = Math.sin(v), C = e.rightAngleAxes !== !0 && o > 0, w = D(o * .25, .25, 60) * f, T = Math.atan(2 * Math.tan(w)), O = Math.hypot(d.w, d.h, m), k = C ? O * .5 / Math.tan(T) : Infinity, A = (e, t, n) => {
		let r = e - h, i = g - t, a = (.5 - D(Number.isFinite(n) ? n : 0, 0, 1)) * m, o = y * r + b * a, s = -b * r + y * a;
		return {
			x: o,
			y: x * i - S * s,
			z: S * i + x * s
		};
	}, j = (e) => {
		if (e.length < 3) return null;
		let t = e.map((e) => A(e.x, e.y, e.depth)), n = t[0], r = null;
		for (let e = 1; e + 1 < t.length && !r; e++) for (let i = e + 1; i < t.length; i++) {
			let a = t[e], o = t[i], s = {
				x: a.x - n.x,
				y: a.y - n.y,
				z: a.z - n.z
			}, c = {
				x: o.x - n.x,
				y: o.y - n.y,
				z: o.z - n.z
			}, l = {
				x: s.y * c.z - s.z * c.y,
				y: s.z * c.x - s.x * c.z,
				z: s.x * c.y - s.y * c.x
			}, u = Math.hypot(l.x, l.y, l.z);
			if (u > 2 ** -52) {
				r = {
					x: l.x / u,
					y: l.y / u,
					z: l.z / u
				};
				break;
			}
		}
		return r ? {
			normal: r,
			centroid: t.reduce((e, n) => ({
				x: e.x + n.x / t.length,
				y: e.y + n.y / t.length,
				z: e.z + n.z / t.length
			}), {
				x: 0,
				y: 0,
				z: 0
			})
		} : null;
	}, M = -Infinity;
	for (let e of [d.x, d.x + d.w]) for (let t of [d.y, d.y + d.h]) for (let n of [0, 1]) M = Math.max(M, A(e, t, n).z);
	let N = C ? Math.max(k, M + O * .01) : Infinity, P = (e, t, n) => {
		let r = A(e, t, n);
		if (!C) return {
			x: r.x,
			y: -r.y
		};
		let i = N / Math.max(N * 1e-9, N - r.z);
		return {
			x: r.x * i,
			y: -r.y * i
		};
	}, F = [];
	for (let e of [d.x, d.x + d.w]) for (let t of [d.y, d.y + d.h]) for (let n of [0, 1]) F.push(P(e, t, n));
	let I = Math.min(...F.map((e) => e.x)), L = Math.max(...F.map((e) => e.x)), R = Math.min(...F.map((e) => e.y)), z = Math.max(...F.map((e) => e.y)), B = Math.max(Number.MIN_VALUE, L - I), V = Math.max(Number.MIN_VALUE, z - R), H = Math.min(t.w / B, t.h / V) * .94, U = t.x + (t.w - B * H) / 2 - I * H, W = t.y + (t.h - V * H) / 2 - R * H, G = (e, t, n) => {
		let r = P(e, t, n);
		return {
			x: U + r.x * H,
			y: W + r.y * H
		};
	}, K = { ...d }, q = G(h, g, 0), J = G(h, g, 1), ee = J.x - q.x, te = J.y - q.y, Y = (e, t) => A(e === "x" ? t === "min" ? d.x : d.x + d.w : h, e === "y" ? t === "min" ? d.y : d.y + d.h : g, e === "depth" ? t === "min" ? 0 : 1 : .5).z, ne = Y("x", "min") <= Y("x", "max") ? "min" : "max", re = Y("y", "min") <= Y("y", "max") ? "min" : "max", X = Y("depth", "min") >= Y("depth", "max") ? 0 : 1, ie = +(X === 0), ae = (e) => {
		let t = e === "min" ? d.x : d.x + d.w, n = G(t, d.y, X), r = G(t, d.y + d.h, X);
		return (n.x + r.x) / 2;
	}, oe = (e) => {
		let t = e === "min" ? d.y : d.y + d.h, n = G(d.x, t, X), r = G(d.x + d.w, t, X);
		return (n.y + r.y) / 2;
	}, se = ae("min") <= ae("max") ? "min" : "max", ce = oe("min") >= oe("max") ? "min" : "max", le = (e) => 1 / Math.max(1, Math.trunc(e)) / (1 + s / 100), Z = (e, t, n = !1) => n || t <= 1 ? .5 : (D(Math.trunc(e), 0, Math.max(0, t - 1)) + .5) / t;
	return {
		scene: d,
		front: K,
		depthX: ee,
		depthY: te,
		modelDepth: m,
		pieScaleY: D(Math.sin(Math.max(1, Math.abs(r)) * f) ** 1.15, .2, 1),
		pieThicknessFraction: .3 * Math.max(0, Math.cos(Math.abs(r) * f)),
		project: G,
		cameraDepth(e, t, n) {
			return A(e, t, n).z;
		},
		cameraProjectionWeight(e, t, n) {
			if (!C) return 1;
			let r = A(e, t, n).z;
			return 1 / Math.max(N * 1e-9, N - r);
		},
		cameraFacing(e) {
			let t = j(e);
			if (!t) return !1;
			let { normal: n, centroid: r } = t, i = C ? {
				x: -r.x,
				y: -r.y,
				z: N - r.z
			} : {
				x: 0,
				y: 0,
				z: 1
			}, a = n.x * i.x + n.y * i.y + n.z * i.z, o = Math.hypot(i.x, i.y, i.z);
			return o > 0 && a > o * 1e-10;
		},
		cameraNormal(e) {
			return j(e)?.normal ?? null;
		},
		topology: {
			farX: ne,
			farY: re,
			axisX: se,
			axisY: ce,
			nearDepth: X,
			farDepth: ie
		},
		seriesDepth: Z,
		prismDepth: le,
		prismInterval(e, t, n = !1) {
			let r = Z(e, t, n), i = le(n ? 1 : t) / 2;
			return {
				near: D(r - i, 0, 1),
				far: D(r + i, 0, 1)
			};
		}
	};
}
function k(e) {
	switch (e) {
		case "cylinder":
		case "cone":
		case "coneToMax":
		case "pyramid":
		case "pyramidToMax": return e;
		default: return "box";
	}
}
var A = (e) => Math.max(0, Math.min(1, e));
function j(e, t) {
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
function M(e, t) {
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
		let r = j(e, t.indices);
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
function N(e) {
	let { horizontal: t, crossStart: n, crossSize: r, baseCoord: i, endCoord: a, nearDepth: o, farDepth: s } = e;
	if (![
		n,
		r,
		i,
		a,
		o,
		s
	].every(Number.isFinite) || r <= 0 || i === a || o === s) return null;
	let c = k(e.shape), l = c === "cylinder" || c === "cone" || c === "coneToMax", u = c !== "box" && c !== "cylinder", d = c === "coneToMax" || c === "pyramidToMax", f = l ? Math.max(8, Math.min(64, Math.trunc(e.roundSegments ?? 32))) : 4, p = A(e.baseScale ?? (d ? e.toMaxBaseScale ?? 1 : 1)), m = A(e.endScale ?? (u ? d ? e.toMaxEndScale ?? 0 : 0 : 1));
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
		faces: M(y, w),
		silhouetteEdges: T
	};
}
function P(e) {
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
		faces: M(_, [
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
function F(e) {
	let t = e.upper0 - e.lower0, n = e.upper1 - e.lower1;
	if (Number.isFinite(t) && Number.isFinite(n) && t * n < 0) {
		let r = t / (t - n), i = e.x0 + (e.x1 - e.x0) * r, a = e.lower0 + (e.lower1 - e.lower0) * r;
		return [P({
			...e,
			x1: i,
			lower1: a,
			upper1: a,
			capEnd: !1
		}), P({
			...e,
			x0: i,
			lower0: a,
			upper0: a,
			capStart: !1
		})].filter((e) => e != null);
	}
	let r = P(e);
	return r ? [r] : [];
}
function I(e) {
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
	let l = Math.min(Math.PI * 2, c - s), u = l >= Math.PI * 2 - 1e-9, d = Math.max(2, Math.min(64, Math.trunc(e.segments ?? Math.ceil(32 * l / (Math.PI * 2))))), f = n - o / 2, p = n + o / 2, m = [{
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
		faces: M(m, v),
		silhouetteEdges: h.slice(0, u ? void 0 : -1).map((e, t) => [e, g[t]])
	};
}
//#endregion
//#region packages/core/src/chart/three-d-scene.ts
function L(e, t) {
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
function R(e, t, n, r) {
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
var z = (e) => ({
	minX: Math.min(...e.map((e) => e.x)),
	maxX: Math.max(...e.map((e) => e.x)),
	minY: Math.min(...e.map((e) => e.y)),
	maxY: Math.max(...e.map((e) => e.y))
}), B = (e, t) => {
	let n = !1;
	for (let r = 0, i = e.length - 1; r < e.length; i = r++) {
		let a = e[r], o = e[i], s = (a.x - t.x) * (o.y - t.y) - (a.y - t.y) * (o.x - t.x), c = Math.max(1, Math.abs(a.x), Math.abs(a.y), Math.abs(o.x), Math.abs(o.y));
		if (Math.abs(s) <= c * 1e-9 && t.x >= Math.min(a.x, o.x) - 1e-9 && t.x <= Math.max(a.x, o.x) + 1e-9 && t.y >= Math.min(a.y, o.y) - 1e-9 && t.y <= Math.max(a.y, o.y) + 1e-9) return !0;
		a.y > t.y != o.y > t.y && t.x < (o.x - a.x) * (t.y - a.y) / (o.y - a.y) + a.x && (n = !n);
	}
	return n;
}, V = (e, t, n, r) => {
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
function H(e, t, n, r) {
	let i = [], a = (e) => {
		i.length >= 12 || i.some((t) => Math.hypot(t.x - e.x, t.y - e.y) < 1e-7) || i.push(e);
	}, o = {
		x: (Math.max(n.minX, r.minX) + Math.min(n.maxX, r.maxX)) / 2,
		y: (Math.max(n.minY, r.minY) + Math.min(n.maxY, r.maxY)) / 2
	};
	B(e, o) && B(t, o) && a(o);
	for (let n of e) B(t, n) && a(n);
	for (let n of t) B(e, n) && a(n);
	for (let n = 0; n < e.length && i.length < 12; n++) for (let r = 0; r < t.length && i.length < 12; r++) {
		let i = V(e[n], e[(n + 1) % e.length], t[r], t[(r + 1) % t.length]);
		i && a(i);
	}
	return i;
}
function U(e, t) {
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
function W(e) {
	if (e.length < 2) return [...e];
	let t = [...e.keys()].sort((t, n) => e[t].cameraDepth - e[n].cameraDepth || t - n), n = e.map((e) => z(e.points)), r = [...e.keys()].sort((e, t) => n[e].minX - n[t].minX || e - t), i = e.map(() => /* @__PURE__ */ new Set()), a = e.map(() => 0), o = [], s = 0;
	for (let c of r) {
		for (let e = o.length - 1; e >= 0; e--) n[o[e]].maxX < n[c].minX - 1e-9 && o.splice(e, 1);
		for (let r of o) {
			if (++s > 2e5) return t.map((t) => e[t]);
			if (n[r].maxY < n[c].minY - 1e-9 || n[c].maxY < n[r].minY - 1e-9) continue;
			let o = H(e[r].points, e[c].points, n[r], n[c]), l = 0;
			for (let t of o) {
				let n = U(e[r], t) - U(e[c], t), i = 1e-8 * Math.max(1, Math.abs(e[r].cameraDepth), Math.abs(e[c].cameraDepth));
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
var G = 1e-9, K = 1e4, q = (e, t, n) => ({
	x: e.x + (t.x - e.x) * n,
	y: e.y + (t.y - e.y) * n,
	cameraDepth: e.cameraDepth + (t.cameraDepth - e.cameraDepth) * n,
	cameraWeight: (e.cameraWeight ?? 1) + ((t.cameraWeight ?? 1) - (e.cameraWeight ?? 1)) * n
}), J = (e, t) => Math.hypot(e.x - t.x, e.y - t.y) <= G;
function ee(e, t, n = 0) {
	let r = t.filter((e) => Number.isFinite(e) && e > G);
	if (r.length === 0) return e.length >= 2 ? [[...e]] : [];
	r.length % 2 == 1 && r.push(...r);
	let i = [], a = 0, o = r[0], s = !0, c = r.reduce((e, t) => e + t, 0), l = c > G && Number.isFinite(n) ? (n % c + c) % c : 0;
	for (; l > G;) {
		let e = Math.min(l, o);
		l -= e, o -= e, o <= G && (a = (a + 1) % r.length, o = r[a], s = a % 2 == 0);
	}
	let u = null;
	for (let t = 0; t + 1 < e.length; t++) {
		let n = e[t], c = e[t + 1], l = Math.hypot(c.x - n.x, c.y - n.y);
		if (!(l > G)) continue;
		let d = 0;
		for (; d < l - G;) {
			let e = Math.min(o, l - d), t = q(n, c, d / l), f = q(n, c, (d + e) / l);
			if (s && (u ??= [], (u.length === 0 || !J(u.at(-1), t)) && u.push(t), u.push(f)), d += e, o -= e, o <= G) {
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
var te = (e, t) => ({
	kind: e,
	points: t.map(({ x: e, y: t }) => ({
		x: e,
		y: t
	})),
	cameraDepths: t.map((e) => e.cameraDepth),
	cameraWeights: t.map((e) => e.cameraWeight ?? 1),
	cameraDepth: t.reduce((e, t) => e + t.cameraDepth, 0) / t.length
}), Y = (e, t, n) => {
	let r = [];
	for (let n = 0; n < 12; n++) {
		let i = Math.PI * 2 * n / 12;
		r.push({
			...e,
			x: e.x + Math.cos(i) * t,
			y: e.y + Math.sin(i) * t
		});
	}
	return te(n, r);
}, ne = (e, t, n, r) => {
	let i = t.x * r.y - t.y * r.x;
	if (Math.abs(i) <= G) return null;
	let a = {
		x: n.x - e.x,
		y: n.y - e.y
	}, o = (a.x * r.y - a.y * r.x) / i;
	return {
		x: e.x + t.x * o,
		y: e.y + t.y * o
	};
};
function re(e, t) {
	let n = Number.isFinite(t.width) ? Math.max(0, t.width) : 0;
	if (!(n > G) || e.length < 2) return [];
	let r = n / 2, i = t.lineCap ?? "butt", a = t.lineJoin ?? "miter", o = Math.max(1, t.miterLimit ?? 10), s = [], c = ee(e, t.dash ?? [], t.dashOffset);
	if (c == null) return null;
	let l = (e) => s.length >= 1e4 ? !1 : (s.push(e), !0);
	for (let n = 0; n < c.length; n++) {
		let s = c[n], u = s.length > 2 && J(s[0], s.at(-1)), d = n === 0 && J(s[0], e[0]) ? t.startCap ?? i : i, f = n + 1 === c.length && J(s.at(-1), e.at(-1)) ? t.endCap ?? i : i, p = [];
		for (let e = 0; e + 1 < s.length; e++) {
			let t = s[e], n = s[e + 1], r = Math.hypot(n.x - t.x, n.y - t.y);
			p.push(r > G ? {
				x: (n.x - t.x) / r,
				y: (n.y - t.y) / r
			} : null);
		}
		for (let e = 0; e + 1 < s.length; e++) {
			let t = p[e];
			if (!t) continue;
			let n = {
				x: -t.y * r,
				y: t.x * r
			}, i = e === 0, a = e + 2 === s.length, o = !u && i && d === "square" ? r : 0, c = !u && a && f === "square" ? r : 0, m = {
				...s[e],
				x: s[e].x - t.x * o,
				y: s[e].y - t.y * o
			}, h = {
				...s[e + 1],
				x: s[e + 1].x + t.x * c,
				y: s[e + 1].y + t.y * c
			};
			if (!l(te("segment", [
				{
					...m,
					x: m.x + n.x,
					y: m.y + n.y
				},
				{
					...h,
					x: h.x + n.x,
					y: h.y + n.y
				},
				{
					...h,
					x: h.x - n.x,
					y: h.y - n.y
				},
				{
					...m,
					x: m.x - n.x,
					y: m.y - n.y
				}
			]))) return null;
		}
		if (!u && d === "round" && !l(Y(s[0], r, "cap")) || !u && f === "round" && !l(Y(s.at(-1), r, "cap"))) return null;
		let m = (e, t, n) => {
			if (!t || !n) return !0;
			let i = t.x * n.y - t.y * n.x;
			if (Math.abs(i) <= G) return !0;
			if (a === "round") return l(Y(e, r, "join"));
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
				let i = ne(c, t, u, n);
				if (i && Math.hypot(i.x - e.x, i.y - e.y) <= r * o) return !!l(te("join", [
					c,
					{
						...e,
						...i
					},
					u
				]));
			}
			return l(te("join", [
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
var X = 1e-9, ie = (e, t) => Math.hypot(e.x - t.x, e.y - t.y, e.depth - t.depth) <= X, ae = (e, t) => e.x - t.x || e.y - t.y || e.depth - t.depth, oe = (e, t) => {
	let n = Math.min(e.length, t.length);
	for (let r = 0; r < n; r++) {
		let n = ae(e[r], t[r]);
		if (n !== 0) return n;
	}
	return e.length - t.length;
};
function se(e) {
	let t = [...e].reverse();
	return oe(e, t) <= 0 ? e : t;
}
function ce(e) {
	let t = ie(e[0], e.at(-1)) ? e.slice(0, -1) : [...e];
	if (t.length === 0) return [];
	let n = 0;
	for (let e = 1; e < t.length; e++) ae(t[e], t[n]) < 0 && (n = e);
	let r = t.map((e, r) => t[(n + r) % t.length]), i = t.map((e, r) => t[(n - r + t.length) % t.length]), a = oe(r, i) <= 0 ? r : i;
	return [...a, a[0]];
}
function le(e) {
	let t = [], n = (e) => {
		let n = t.find((t) => ie(t.point, e));
		if (n) return ae(e, n.point) < 0 && (n.point = e), n;
		let r = {
			point: e,
			edges: [],
			order: -1
		};
		return t.push(r), r;
	}, r = [];
	for (let [t, i] of e) {
		if (ie(t, i)) continue;
		let e = n(t), a = n(i);
		e !== a && r.push([e, a]);
	}
	t.sort((e, t) => ae(e.point, t.point)), t.forEach((e, t) => {
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
	for (let e of t) if (e.edges.length !== 2) for (let t of e.edges) o.has(t) || c.push(se(s(e, t)));
	for (let e = 0; e < i.length; e++) {
		if (o.has(e)) continue;
		let t = i[e], n = t.first.order <= t.second.order ? t.first : t.second;
		c.push(ce(s(n, e)));
	}
	return c.sort(oe);
}
//#endregion
//#region packages/core/src/chart/three-d-renderer.ts
var Z = [
	"4472C4",
	"ED7D31",
	"70AD47",
	"A5A5A5",
	"FFC000",
	"5B9BD5"
], ue = new Set([
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
function de(e, t) {
	let n = Number.isSafeInteger(t) && t > 0 ? t : 0, r = Array.from({ length: n }, () => []);
	for (let t of e) {
		let e = t.categoryIndex;
		Number.isSafeInteger(e) && e >= 0 && e < n && r[e].push(t);
	}
	return r;
}
var fe = (e, t) => `#${t?.color ?? Z[e % Z.length]}`;
function pe(e, t) {
	if (t?.lineHidden != null || t?.lineColor != null || t?.lineWidthEmu != null || t?.lineDash != null) return t.lineHidden !== !0;
	let n = e.chartexStyle;
	return (e.lineHidden != null || e.lineColor != null || e.lineWidthEmu != null || n?.lineHidden != null || n?.lineNoStyle != null || n?.lineColors != null || n?.lineWidthEmu != null || n?.lineDash != null || n?.lineCap != null || n?.lineJoin != null) && e.lineHidden !== !0 && n?.lineHidden !== !0;
}
function me(e, t) {
	let n = e.replace(/^#/, "");
	if (!/^[0-9a-f]{6}$/i.test(n)) return e;
	let r = (e) => Math.max(0, Math.min(255, Math.round(parseInt(n.slice(e, e + 2), 16) * t))).toString(16).padStart(2, "0");
	return `#${r(0)}${r(2)}${r(4)}`;
}
function he(e, t) {
	let n = e.cameraNormal(t);
	if (!n) return 1;
	let r = {
		x: -.2,
		y: .25,
		z: 1
	}, i = Math.hypot(r.x, r.y, r.z), a = Math.max(0, (n.x * r.x + n.y * r.y + n.z * r.z) / i);
	return Math.max(.78, Math.min(1, .78 + .24 * a));
}
var ge = (e) => `"${e && !e.startsWith("+") ? e.replace(/["\\]/g, "") : "Arial"}"`, Q = (e, t, n = "minor") => ge((t?.startsWith("+mj-") ? e.themeMajorFontLatin : t?.startsWith("+mn-") ? e.themeMinorFontLatin : t) ?? (n === "major" ? e.themeMajorFontLatin : e.themeMinorFontLatin));
function _e(e, t) {
	if (t.length) {
		e.beginPath(), e.moveTo(t[0].x, t[0].y);
		for (let n = 1; n < t.length; n++) e.lineTo(t[n].x, t[n].y);
		e.closePath();
	}
}
var ve = (e) => e === "transparent" || e === "#00000000" || e === "rgba(0,0,0,0)";
function ye(e, t, n, r) {
	ve(n) || (_e(e, t), e.fillStyle = n, e.fill(), r > 0 && (_e(e, t), e.fillStyle = `rgba(0,0,0,${r})`, e.fill()));
}
function be(e, t, n, r, i, a, o, s, c, l, u, d) {
	return F({
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
	}).flatMap((t) => Se(e, t, l).map((e) => ({
		...e,
		outline: !1,
		outlineSegments: void 0
	})));
}
function xe(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m = !1, h = !1, g, _) {
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
	let v = N({
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
	return v ? Se(e, v, d, g, _) : [];
}
function Se(e, t, n, r, i) {
	if (i?.exceeded) return [];
	let a = t.faces.map((r) => {
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
				color: me(n, he(e, i)),
				shade: 0,
				cameraDepth: i.reduce((t, n) => t + e.cameraDepth(n.x, n.y, n.depth), 0) / i.length,
				cameraDepths: i.map((t) => e.cameraDepth(t.x, t.y, t.depth)),
				cameraWeights: i.map((t) => e.cameraProjectionWeight(t.x, t.y, t.depth)),
				outline: !1
			}
		};
	}), o = a.map((e) => e.face).filter((e) => e != null);
	if (i) {
		if (o.length > i.remaining) return i.exceeded = !0, [];
		i.remaining -= o.length;
	}
	let s = /* @__PURE__ */ new Map(), c = (e, t) => {
		if (e === t) return;
		let n = e < t ? `${e}:${t}` : `${t}:${e}`;
		s.has(n) || s.set(n, [e, t]);
	};
	for (let e of a) {
		if (!e.facing || !e.face) continue;
		let { indices: t, smoothSurface: n, role: r } = e.meshFace;
		if (!(n && r === "side")) for (let e = 0; e < t.length; e++) c(t[e], t[(e + 1) % t.length]);
	}
	let l = a.filter((e) => e.meshFace.role === "side").sort((e, t) => (e.meshFace.segmentIndex ?? 0) - (t.meshFace.segmentIndex ?? 0));
	if (t.silhouetteEdges.length === l.length && l.length > 0) for (let e = 0; e < l.length; e++) {
		let n = l[(e + l.length - 1) % l.length], r = l[e];
		if (n.facing === r.facing || !(r.facing ? r.face : n.face)) continue;
		let [i, a] = t.silhouetteEdges[e];
		c(i, a);
	}
	let u = a.some((e) => e.meshFace.role === "baseCap" && e.facing && e.face != null), d = a.some((e) => e.meshFace.role === "endCap" && e.facing && e.face != null);
	for (let e of l) {
		if (!e.facing || !e.face) continue;
		let t = [u ? void 0 : e.meshFace.baseRimEdge, d ? void 0 : e.meshFace.endRimEdge].filter((e) => e != null);
		for (let [e, n] of t) c(e, n);
	}
	let f = le([...s.values()].map(([e, n]) => [t.vertices[e], t.vertices[n]]));
	if (!r) return o;
	for (let t of f) {
		let n = t.map((t) => e.project(t.x, t.y, t.depth)), a = t.map((t) => e.cameraDepth(t.x, t.y, t.depth)), s = t.map((t) => e.cameraProjectionWeight(t.x, t.y, t.depth)), c = re(n.map((e, t) => ({
			...e,
			cameraDepth: a[t],
			cameraWeight: s[t]
		})), {
			width: r.width,
			dash: r.dash,
			lineCap: r.cap,
			lineJoin: r.join
		});
		if (!c || i && c.length > i.remaining) return i && (i.exceeded = !0), [];
		i && (i.remaining -= c.length), o.push(...c.map((e) => ({
			points: e.points,
			color: r.color,
			shade: 0,
			cameraDepth: e.cameraDepth,
			cameraDepths: e.cameraDepths,
			cameraWeights: e.cameraWeights,
			outline: !1
		})));
	}
	return o;
}
function Ce(e, t) {
	ye(e, t.points, t.color, t.shade), t.outline && (e.strokeStyle = t.outlineColor ?? "rgba(0,0,0,0.42)", e.lineWidth = t.outlineWidth ?? .75, e.setLineDash(b(t.outlineDash ?? "solid", e.lineWidth)), e.lineCap = t.outlineCap ?? "butt", e.lineJoin = t.outlineJoin ?? "miter", t.outline && (_e(e, t.points), e.stroke()), e.setLineDash([]));
}
function we(e, t, n) {
	t.points.length < 3 || ve(n) || (_e(e, t.points), e.fillStyle = n, e.fill());
}
function Te(e, t) {
	e.fillStyle = "#888", e.font = "12px sans-serif", e.textAlign = "center", e.textBaseline = "middle", e.fillText("(too many data points)", t.x + t.w / 2, t.y + t.h / 2);
}
function $(e, t, n, r = !1) {
	let i = Math.max(0, t - 1), a = Number.isFinite(e) ? Math.max(0, Math.min(i, e)) : 0, o = n ? (a + .5) / Math.max(1, t) : t === 1 ? .5 : a / i;
	return r ? 1 - o : o;
}
function Ee(e) {
	let t = e.catAxisLabelRotation;
	return t == null ? null : !Number.isFinite(t) || Math.abs(t) > 54e5 ? 0 : t / 6e4 * Math.PI / 180;
}
function De(e, t, n, r, i, a = 1) {
	if (i || r === 0) {
		e.textAlign = i ? "right" : "center", e.textBaseline = i ? "middle" : a < 0 ? "bottom" : "top", e.fillText(t, n.x + (i ? -6 : 0), n.y + (i ? 0 : a * 6));
		return;
	}
	e.save(), e.translate(n.x, n.y + a * 6), e.rotate(r), e.textAlign = a < 0 ? "left" : "right", e.textBaseline = "middle", e.fillText(t, 0, 0), e.restore();
}
function Oe(e, t, n, r, i, a, o) {
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
function ke(e, t, n, r, i, a, o, s, c, l = 0, u, f, p = "t", m = o, _ = !0) {
	let b = f;
	if (b?.deleted) return;
	let C = n.seriesDataLabels, w = b?.showVal ?? C?.showVal ?? t.showDataLabels, T = b?.showCatName ?? C?.showCatName ?? !1, E = b?.showSerName ?? C?.showSerName ?? !1, D = b?.showPercent ?? C?.showPercent ?? !1, O = b?.text, k = y({
		customText: O,
		showCategory: T,
		showSeries: E,
		showValue: w,
		showPercent: D,
		category: n.categories?.[i] ?? t.categories[i] ?? `${i + 1}`,
		seriesName: n.name || `Series ${r + 1}`,
		sourceValue: a,
		percentRatio: u != null && Number.isFinite(u) ? u : void 0,
		formatCode: b?.formatCode ?? C?.formatCode ?? t.dataLabelFormatCode ?? n.valFormatCode,
		percentFormatCode: b?.formatCode ?? C?.formatCode ?? t.dataLabelFormatCode ?? "0%",
		date1904: t.date1904,
		separator: b?.separator ?? C?.separator
	});
	if (!k) return;
	let A = d(b?.fontSizeHpt ?? C?.fontSizeHpt ?? t.dataLabelFontSizeHpt, c) ?? 9 * c, j = b?.fontBold ?? C?.fontBold ?? t.dataLabelFontBold ?? !1, M = Q(t, t.dataLabelFontFace);
	e.font = `${j ? "bold " : ""}${A}px ${M}`;
	let N = `#${b?.fontColor ?? C?.fontColor ?? n.labelColor ?? t.dataLabelFontColor ?? "111111"}`, P = O && b?.richRuns?.length ? g(e, {
		runs: b.richRuns,
		ptToPx: c,
		fontFamily: M,
		fallbackBold: j,
		fontFamilyForFace: (e) => Q(t, e)
	}, A, N) : null, F = P ? [] : x(k, Math.max(A, s.w * .45), Math.max(A * 1.2, s.h * .35), A * 1.2, (t) => e.measureText(t).width);
	if (!P && !F.length) return;
	let I = P?.width ?? Math.max(...F.map((t) => e.measureText(t).width)), L = P?.height ?? F.length * A * 1.2, R = h({
		kind: "point",
		x: o.x,
		y: o.y,
		position: b?.position ?? C?.position ?? t.dataLabelPosition ?? p,
		markerGap: l
	}, s, {
		w: I,
		h: L
	}, A, b?.manualLayout, s);
	if (!R) return;
	let z = b?.labelBox ?? C?.labelBox;
	if (C?.showLeaderLines && _ && (e.beginPath(), e.moveTo(m.x, m.y), e.lineTo(Math.max(R.rect.x, Math.min(m.x, R.rect.x + R.rect.w)), Math.max(R.rect.y, Math.min(m.y, R.rect.y + R.rect.h))), e.strokeStyle = `#${C.leaderLineColor ?? "808080"}`, e.lineWidth = C.leaderLineWidthEmu == null ? .75 * c : Math.max(.25, C.leaderLineWidthEmu / v * c), e.stroke()), z && (z.fill && (e.fillStyle = `#${z.fill}`, e.fillRect(R.rect.x, R.rect.y, R.rect.w, R.rect.h)), z.borderColor && (e.strokeStyle = `#${z.borderColor}`, e.lineWidth = z.borderWidthEmu == null ? .75 * c : Math.max(.25, z.borderWidthEmu / v * c), e.strokeRect(R.rect.x, R.rect.y, R.rect.w, R.rect.h))), e.save(), e.beginPath(), e.rect(R.clip.x, R.clip.y, R.clip.w, R.clip.h), e.clip(), P) {
		S(e, P, R.x, R.y, R.textAlign, R.textBaseline), e.restore();
		return;
	}
	e.fillStyle = N, e.textAlign = R.textAlign, e.textBaseline = "middle";
	let B = A * 1.2, V = R.y - (F.length - 1) * B / 2;
	F.forEach((t, n) => e.fillText(t, R.x, V + n * B)), e.restore();
}
function Ae(e, t, n) {
	if (n?.deleted) return !1;
	if (n?.text) return !0;
	let r = t.seriesDataLabels;
	return (n?.showVal ?? r?.showVal ?? e.showDataLabels) || (n?.showCatName ?? r?.showCatName ?? !1) || (n?.showSerName ?? r?.showSerName ?? !1) || (n?.showPercent ?? r?.showPercent ?? !1);
}
function je(n, c, l, u, f) {
	let p = r(c, l.h, u);
	if (c.title) {
		n.font = `${c.titleFontBold === !1 ? "" : "bold "}${p.fontPx}px ${ge(c.titleFontFace)}`, n.fillStyle = c.titleFontColor ? `#${c.titleFontColor}` : "#111111", n.textAlign = "center", n.textBaseline = "top";
		let t = n.measureText(c.title).width, r = {
			x: l.x + (l.w - t) / 2,
			y: l.y + p.topPad,
			w: t,
			h: Math.max(1, p.fontPx)
		}, i = c.titleManualLayout ? e({
			...c.titleManualLayout,
			w: void 0,
			h: void 0
		}, l, r) : null;
		n.fillText(c.title, i ? i.x + i.w / 2 : l.x + l.w / 2, i?.y ?? r.y);
	}
	let m = d(c.legendFontSizeHpt, u) ?? 9 * u;
	n.save(), n.font = `${c.legendFontBold ? "bold " : ""}${m}px ${ge(c.legendFontFace)}`;
	let h = c.chartType === "pie" ? c.series[0]?.categories?.length ? c.series[0].categories : c.categories : c.series.map((e, t) => e.name || `Series ${t + 1}`), g = i(c, l.w, l.h, .23, {
		itemWidths: h.map((e) => 7 * u + 4 + n.measureText(e).width),
		rowHeight: Math.max(m * 1.45, 12),
		itemGap: 12,
		horizontalPadding: 8,
		verticalPadding: 4
	});
	n.restore();
	let _ = a(g), v = s(c, l.w, l.h, u), y = f === "horizontal" ? c.catAxisTitle ? v.catFontPx + o(l.w) + 4 : 0 : f === "vertical" ? v.valBandW : 0, b = f === "horizontal" ? c.valAxisTitle ? v.valFontPx + o(l.h) + 4 : 0 : f === "vertical" ? v.catBandH : 0, x = t(c, l.x, l.y, l.w, l.h, u, {
		titleBand: p,
		legendSideReserveFrac: .23,
		legendReserve: g,
		pad: {
			t: p.bandH + _.legTopH + l.h * .04,
			r: _.legRightW + l.w * .05,
			b: _.legBottomH + l.h * .19 + b,
			l: _.legLeftW + l.w * .13 + y
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
		x: l.x + l.w - g.reserveW,
		y: S.y,
		w: g.reserveW,
		h: S.h
	} : g.side === "l" ? {
		x: l.x,
		y: S.y,
		w: g.reserveW,
		h: S.h
	} : g.side === "t" ? {
		x: l.x + 4,
		y: l.y + p.bandH,
		w: Math.max(1, l.w - 8),
		h: g.reserveH
	} : {
		x: l.x + 4,
		y: l.y + l.h - g.reserveH,
		w: Math.max(1, l.w - 8),
		h: g.reserveH
	} : null;
	return {
		plot: S,
		legend: (C && c.legendManualLayout ? e(c.legendManualLayout, l, C) : null) ?? C
	};
}
function Me(t, n, r, i, a, o, s, c, l, d, f, p, m, h) {
	t.save(), t.font = `${d ? "italic " : ""}${l ? "bold " : ""}${o}px ${s}`, t.fillStyle = c ? `#${c}` : "#555";
	let g = m ? n : _(t, n, h), v = u(a, f, p), y = i;
	if (m) {
		let n = t.measureText(g).width, a = Math.abs(Math.cos(v)), s = Math.abs(Math.sin(v)), c = {
			x: i.x - (n * a + o * s) / 2,
			y: i.y - (n * s + o * a) / 2,
			w: n * a + o * s,
			h: n * s + o * a
		}, l = e({
			...m,
			w: void 0,
			h: void 0
		}, r, c);
		l && (y = {
			x: l.x + l.w / 2,
			y: l.y + l.h / 2
		});
	}
	t.translate(y.x, y.y), v && t.rotate(v), t.textAlign = "center", t.textBaseline = "middle", t.fillText(g, 0, 0), t.restore();
}
function Ne(e, t, r, i, a, s) {
	if (t.valAxisTitle) {
		let c = n(t.valAxisTitleFontSizeHpt, s), l = a ? "horizontal" : "left";
		Me(e, t.valAxisTitle, r, a ? {
			x: i.x + i.w / 2,
			y: i.y + i.h + o(r.h) + c / 2
		} : {
			x: i.x - o(r.w) - c / 2,
			y: i.y + i.h / 2
		}, l, c, Q(t, t.valAxisTitleFontFace, "major"), t.valAxisTitleFontColor, t.valAxisTitleFontBold ?? !0, t.valAxisTitleFontItalic ?? !1, t.valAxisTitleRotation, t.valAxisTitleVerticalMode, t.valAxisTitleManualLayout, a ? i.w : i.h);
	}
	if (t.catAxisTitle) {
		let c = n(t.catAxisTitleFontSizeHpt, s), l = a ? "left" : "horizontal";
		Me(e, t.catAxisTitle, r, a ? {
			x: i.x - o(r.w) - c / 2,
			y: i.y + i.h / 2
		} : {
			x: i.x + i.w / 2,
			y: i.y + i.h + o(r.h) + c / 2
		}, l, c, Q(t, t.catAxisTitleFontFace, "major"), t.catAxisTitleFontColor, t.catAxisTitleFontBold ?? !0, t.catAxisTitleFontItalic ?? !1, t.catAxisTitleRotation, t.catAxisTitleVerticalMode, t.catAxisTitleManualLayout, a ? i.h : i.w);
	}
}
function Pe(e, t, n, r, i = !1) {
	if (!n) return;
	let a = new Map(t.series[0]?.dataPointOverrides?.map((e) => [e.idx, e]) ?? []), o = i ? (t.series[0]?.categories?.length ? t.series[0].categories : t.categories).map((e, n) => {
		let r = t.series[0]?.dataPointColors?.[n];
		return {
			label: e,
			color: r === "00000000" ? "transparent" : r ? `#${r}` : fe(n),
			series: t.series[0],
			point: a.get(n)
		};
	}) : t.series.map((e, t) => ({
		label: e.name || `Series ${t + 1}`,
		color: fe(t, e),
		series: e,
		point: void 0
	})), s = d(t.legendFontSizeHpt, r) ?? 9 * r;
	e.font = `${t.legendFontBold ? "bold " : ""}${s}px ${ge(t.legendFontFace)}`, e.textAlign = "left", e.textBaseline = "middle";
	let c = Math.max(s * 1.45, 12), l = Math.min(7 * r, c * .7);
	if (t.legendPos === "t" || t.legendPos === "b" || t.legendManualLayout != null && n.w >= n.h) {
		let a = o.map((t) => l + 4 + e.measureText(t.label).width), s = f(a, Math.max(1, n.w - 8), 12).slice(0, Math.max(0, Math.floor((n.h - 4 + 1e-6) / c))), u = n.y + 2 + c / 2;
		for (let d of s) {
			let s = d.map((e) => Math.min(n.w, a[e])), f = s.reduce((e, t) => e + t, 0) + Math.max(0, d.length - 1) * 12, p = n.x + Math.max(4, (n.w - f) / 2);
			for (let n = 0; n < d.length; n++) {
				let a = o[d[n]], c = Math.max(0, s[n] - l - 4);
				if (!i && t.chartType.toLowerCase().includes("line") && a.series?.lineHidden !== !0) {
					let t = a.series?.lineWidthEmu == null ? Math.max(1, 2 * r) : Math.max(.5, a.series.lineWidthEmu / v * r);
					e.beginPath(), e.moveTo(p, u), e.lineTo(p + l, u), e.strokeStyle = a.series?.lineColor ? `#${a.series.lineColor}` : me(a.color, .7), e.lineWidth = t, e.setLineDash(b(a.series?.chartexStyle?.lineDash ?? "solid", t)), e.stroke(), e.setLineDash([]);
				} else {
					a.color !== "transparent" && (e.fillStyle = a.color, e.fillRect(p, u - l / 2, l, l));
					let t = a.point?.lineHidden ?? a.series?.lineHidden, n = a.point?.lineColor ?? a.series?.lineColor;
					t !== !0 && n && (e.strokeStyle = `#${n}`, e.lineWidth = (a.point?.lineWidthEmu ?? a.series?.lineWidthEmu) == null ? .75 * r : Math.max(.25, (a.point?.lineWidthEmu ?? a.series?.lineWidthEmu ?? 0) / v * r), e.setLineDash(b(a.point?.lineDash ?? a.series?.chartexStyle?.lineDash ?? "solid", e.lineWidth)), e.strokeRect(p, u - l / 2, l, l), e.setLineDash([]));
				}
				e.fillStyle = t.legendFontColor ? `#${t.legendFontColor}` : "#595959", e.fillText(_(e, a.label, c), p + l + 4, u), p += s[n] + 12;
			}
			u += c;
		}
		return;
	}
	let u = n.y;
	for (let a = 0; a < o.length; a++) {
		let d = o[a], f = n.x + 8 + l, p = Math.max(0, n.x + n.w - 4 - f), m = Math.max(s * 1.2, 10), h = x(d.label, p, m * (i ? 1 : 2), m, (t) => e.measureText(t).width);
		if (h.length === 0) continue;
		let g = Math.max(c, h.length * m + 2);
		if (u + g > n.y + n.h + 1e-6) break;
		let _ = u + g / 2;
		if (!i && t.chartType.toLowerCase().includes("line")) {
			let t = d.series?.lineWidthEmu == null ? Math.max(1, 2 * r) : Math.max(.5, d.series.lineWidthEmu / v * r);
			d.series?.lineHidden !== !0 && (e.beginPath(), e.moveTo(n.x + 4, _), e.lineTo(n.x + 4 + l, _), e.strokeStyle = d.series?.lineColor ? `#${d.series.lineColor}` : me(d.color, .7), e.lineWidth = t, e.setLineDash(b(d.series?.chartexStyle?.lineDash ?? "solid", t)), e.stroke(), e.setLineDash([]));
		} else {
			d.color !== "transparent" && (e.fillStyle = d.color, e.fillRect(n.x + 4, _ - l / 2, l, l));
			let t = d.point?.lineHidden ?? d.series?.lineHidden, i = d.point?.lineColor ?? d.series?.lineColor;
			t !== !0 && i && (e.strokeStyle = `#${i}`, e.lineWidth = (d.point?.lineWidthEmu ?? d.series?.lineWidthEmu) == null ? .75 * r : Math.max(.25, (d.point?.lineWidthEmu ?? d.series?.lineWidthEmu ?? 0) / v * r), e.setLineDash(b(d.point?.lineDash ?? d.series?.chartexStyle?.lineDash ?? "solid", e.lineWidth)), e.strokeRect(n.x + 4, _ - l / 2, l, l), e.setLineDash([]));
		}
		e.fillStyle = t.legendFontColor ? `#${t.legendFontColor}` : "#595959";
		let y = _ - (h.length - 1) * m / 2;
		h.forEach((t, n) => e.fillText(t, f, y + n * m)), u += g;
	}
}
function Fe(e, t, n, r, i, a) {
	let o = i ? 100 : 1;
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
		needMinor: e.valAxisMinorGridlines === !0 || e.valAxisMinorTickMark != null && e.valAxisMinorTickMark !== "none"
	});
}
function Ie(e, t, n, r, i = "A6A6A6", a = .75) {
	let o = t != null && Number.isFinite(t) && t >= 0 ? Math.max(.25, t / v * r) : a * r;
	return {
		color: `#${e ?? i}`,
		width: o,
		dash: b(n ?? "solid", o)
	};
}
function Le(e, t) {
	e.strokeStyle = t.color, e.lineWidth = t.width, e.setLineDash(t.dash);
}
function Re(e, t, n, r, i, a, o, s, c) {
	let { front: l } = n, u = n.topology.farX === "min" ? l.x : l.x + l.w, d = n.topology.axisY === "min" ? l.y : l.y + l.h, f = d === l.y ? l.y + l.h : l.y, p = l.x, m = l.x + l.w, h = n.topology.farDepth, g = n.topology.nearDepth, _ = n.project(p, d, g), v = n.project(m, d, g), y = n.project(m, d, h), b = n.project(p, d, h), x = n.project(p, f, h), S = n.project(m, f, h);
	ye(e, [
		_,
		v,
		y,
		b
	], "#F2F2F2", 0), ye(e, [
		b,
		y,
		S,
		x
	], "#F7F7F7", 0);
	let C = (t, a) => {
		Le(e, a);
		for (let a of t) if (i === "horizontal") {
			let t = l.x + r.fraction(a) * l.w, i = n.project(t, d, h), o = n.project(t, f, h);
			e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(o.x, o.y), e.stroke();
		} else {
			let t = l.y + l.h - r.fraction(a) * l.h, i = n.project(u, t, g), o = n.project(u, t, h), s = n.project(u === p ? m : p, t, h);
			e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(o.x, o.y), e.stroke(), e.beginPath(), e.moveTo(o.x, o.y), e.lineTo(s.x, s.y), e.stroke();
		}
	};
	t.valAxisMinorGridlines === !0 && C(r.minorTicks, Ie(t.valAxisMinorGridlineColor, t.valAxisMinorGridlineWidthEmu, t.valAxisMinorGridlineDash, c, "D9D9D9", .5)), t.valAxisMajorGridlines !== !1 && C(r.majorTicks, Ie(t.valAxisGridlineColor, t.valAxisGridlineWidthEmu, t.valAxisGridlineDash, c, "898989", 1)), Le(e, Ie(null, null, null, c, "898989", 1));
	for (let t = 0; t < a; t++) if (i === "vertical") {
		let r = l.x + $(t, a, o, s) * l.w, i = n.project(r, d, g), c = n.project(r, d, h);
		e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(c.x, c.y), e.stroke();
	} else {
		let r = l.y + $(t, a, o, s) * l.h, i = n.project(u, r, g), c = n.project(u, r, h);
		e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(c.x, c.y), e.stroke();
	}
	for (let [t, n] of [
		[_, v],
		[v, y],
		[y, S],
		[S, x],
		[x, b],
		[b, _]
	]) e.beginPath(), e.moveTo(t.x, t.y), e.lineTo(n.x, n.y), e.stroke();
	e.setLineDash([]);
}
function ze(e, t, n, r, i, a, o, s, c) {
	let l = He(t, n, r, i, a, o, c), u = c === "vertical" ? !t.catAxisHidden && !t.catAxisLineHidden : !t.valAxisHidden && !t.valAxisLineHidden, d = c === "vertical" ? !t.valAxisHidden && !t.valAxisLineHidden : !t.catAxisHidden && !t.catAxisLineHidden;
	u && (Le(e, Ie(c === "vertical" ? t.catAxisLineColor : t.valAxisLineColor, c === "vertical" ? t.catAxisLineWidthEmu : t.valAxisLineWidthEmu, null, s, "898989", 1)), e.beginPath(), e.moveTo(l.horizontalStart.x, l.horizontalStart.y), e.lineTo(l.horizontalEnd.x, l.horizontalEnd.y), e.stroke()), d && (Le(e, Ie(c === "vertical" ? t.valAxisLineColor : t.catAxisLineColor, c === "vertical" ? t.valAxisLineWidthEmu : t.catAxisLineWidthEmu, null, s, "898989", 1)), e.beginPath(), e.moveTo(l.verticalStart.x, l.verticalStart.y), e.lineTo(l.verticalEnd.x, l.verticalEnd.y), e.stroke()), e.setLineDash([]);
}
function Be(e, t, n, r) {
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
function Ve(e, t, n, r, i, a, o, s, c) {
	if (!t || t === "none") return;
	let l = Be(r, i, a, o), u = (s === "minor" ? 4 : 6) * c, d = t === "cross" ? u / 2 : u, f = t === "out" || t === "cross" ? d : 0, p = t === "in" || t === "cross" ? d : 0;
	e.beginPath(), e.moveTo(n.x + l.x * f, n.y + l.y * f), e.lineTo(n.x - l.x * p, n.y - l.y * p), e.stroke();
}
function He(e, t, n, r, i, a, o) {
	let { front: s } = t, c = (e) => Math.max(0, Math.min(1, e)), l = t.topology.axisX === "min" ? s.x : s.x + s.w, u = t.topology.axisY === "min" ? s.y : s.y + s.h, d = () => {
		if (e.catAxisCrossesAt != null && Number.isFinite(e.catAxisCrossesAt)) {
			let t = e.chartType.endsWith("Pct") ? e.catAxisCrossesAt * 100 : e.catAxisCrossesAt;
			return c(n.fraction(t));
		}
		let t = e.catAxisCrosses ?? "autoZero";
		return c(t === "min" ? n.fraction(n.min) : t === "max" ? n.fraction(n.max) : n.fraction(0));
	}, f = () => {
		let t = e.valAxisCrossesAt;
		if (t != null && Number.isFinite(t)) return $(t - 1, r, i, a);
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
function Ue(e, t, n, r, i, a, o, s, c) {
	let { front: l } = n, u = He(t, n, r, i, a, o, s), { axisX: d, axisY: f, depth: p } = u, m = n.project(l.x + l.w / 2, l.y + l.h / 2, p);
	if (!t.valAxisHidden && !t.valAxisLineHidden) {
		Le(e, Ie(t.valAxisLineColor, t.valAxisLineWidthEmu, null, c, "898989", 1));
		let i = (e) => s === "horizontal" ? n.project(l.x + r.fraction(e) * l.w, f, p) : n.project(d, l.y + l.h - r.fraction(e) * l.h, p), a = s === "horizontal" ? u.horizontalStart : u.verticalStart, o = s === "horizontal" ? u.horizontalEnd : u.verticalEnd;
		for (let n of r.majorTicks) Ve(e, t.valAxisMajorTickMark, i(n), a, o, m, s === "vertical" ? "horizontal" : "vertical", "major", c);
		for (let n of r.minorTicks) Ve(e, t.valAxisMinorTickMark, i(n), a, o, m, s === "vertical" ? "horizontal" : "vertical", "minor", c);
	}
	if (!t.catAxisHidden && !t.catAxisLineHidden) {
		Le(e, Ie(t.catAxisLineColor, t.catAxisLineWidthEmu, null, c, "898989", 1));
		let r = s === "vertical" ? u.horizontalStart : u.verticalStart, h = s === "vertical" ? u.horizontalEnd : u.verticalEnd, g = Math.max(1, Math.floor(t.catAxisTickMarkSkip ?? 1));
		for (let u = 0; u < i; u += g) {
			let g = $(u, i, a, o), _ = s === "vertical" ? n.project(l.x + g * l.w, f, p) : n.project(d, l.y + g * l.h, p);
			Ve(e, t.catAxisMajorTickMark, _, r, h, m, s === "vertical" ? "vertical" : "horizontal", "major", c);
		}
		let _ = t.catAxisMinorUnit;
		if (t.catAxisMinorTickMark && t.catAxisMinorTickMark !== "none" && _ != null && Number.isFinite(_) && _ > 0) {
			let u = t.catAxisMajorUnit != null && Number.isFinite(t.catAxisMajorUnit) && t.catAxisMajorUnit > 0 ? t.catAxisMajorUnit : g, v = Math.min(512, Math.ceil(i / _));
			for (let g = 1; g < v; g++) {
				let v = g * _;
				if (!(v < i)) break;
				if (Math.abs(v / u - Math.round(v / u)) < 1e-9) continue;
				let y = $(v, i, a, o), b = s === "vertical" ? n.project(l.x + y * l.w, f, p) : n.project(d, l.y + y * l.h, p);
				Ve(e, t.catAxisMinorTickMark, b, r, h, m, s === "vertical" ? "vertical" : "horizontal", "minor", c);
			}
		}
	}
	e.setLineDash([]);
}
function We(e, t, n, r) {
	if (!t.threeD) return !1;
	let i = t.chartType === "clusteredBar" || t.chartType === "clusteredBarH" || t.chartType.startsWith("stackedBar"), a = t.chartType.endsWith("H") || t.chartType.includes("BarH"), { plot: o, legend: s } = je(e, t, n, r, a ? "horizontal" : "vertical"), u = O(t.threeD, o, { sceneDepthScale: i ? .1 : .4 });
	if (!u) return !0;
	let f = t.chartType.startsWith("stacked"), p = t.chartType.endsWith("Pct"), h = t.series.find((e) => (e.categories?.length ?? 0) > 0)?.categories ?? t.categories, g = Math.max(1, h.length, ...t.series.map((e) => e.values.length)), _ = t.catAxisOrientation === "maxMin", y = t.catAxisCrossBetween === "between", x = t.dispBlanksAs ?? "gap", S = t.valAxisLogBase != null && Number.isFinite(t.valAxisLogBase) && t.valAxisLogBase >= 2, T = (e, n) => {
		let r = t.series[e]?.values[n];
		return r != null && Number.isFinite(r) && (!S || r > 0) || r == null && (f || x === "zero");
	}, E = (e, n) => {
		let r = t.series[e]?.values[n] ?? 0;
		if (!Number.isFinite(r)) return 0;
		if (!p) return r;
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
	}, D = (e, t) => {
		let n = e + t;
		return Number.isFinite(n) ? n : t < 0 ? -Number.MAX_VALUE : Number.MAX_VALUE;
	}, k = 0, A = 0;
	if (f) {
		for (let e = 0; e < g; e++) {
			let n = 0, r = 0;
			for (let i = 0; i < t.series.length; i++) {
				let t = E(i, e);
				t >= 0 ? n = D(n, t) : r = D(r, t);
			}
			k = Math.min(k, r), A = Math.max(A, n);
		}
		p && (k = k < 0 ? -100 : 0, A = A > 0 ? 100 : 0, k === 0 && A === 0 && (A = 1));
	} else {
		let e = m(t.series.flatMap((e) => e.values).filter((e) => e != null && Number.isFinite(e) && (!S || e > 0)), S ? {
			min: 1,
			max: 10
		} : {
			min: 0,
			max: 1
		});
		k = S ? e.min : Math.min(0, e.min), A = S ? e.max : Math.max(0, e.max);
	}
	let j = Fe(t, k, A, (a ? u.front.w : u.front.h) / r, p, a ? "horizontal" : "vertical"), M = (e) => Number.isFinite(e) ? Math.max(j.min, Math.min(j.max, e)) : j.min;
	Re(e, t, u, j, a ? "horizontal" : "vertical", g, y, _, r);
	let { front: N } = u, P = Math.max(1, t.series.length), F = [], I = t.series.map((e) => new Map(e.dataPointOverrides?.map((e) => [e.idx, e]) ?? [])), z = t.series.map((e) => new Map(e.dataLabelOverrides?.map((e) => [e.idx, e]) ?? []));
	if (i) {
		let i = u.prismInterval(0, 1, !0), o = [], s = Array(g).fill(0), c = Array(g).fill(0), l = (a ? N.h : N.w) / g, d = t.barGapWidth != null && Number.isFinite(t.barGapWidth) && t.barGapWidth >= 0 ? t.barGapWidth : 150;
		for (let e = 0; e < t.series.length; e++) {
			let n = t.series[e], u = i, m = C(l, d, e, P, f);
			for (let i = 0; i < g; i++) {
				if (!T(e, i)) continue;
				let d = E(e, i), h = I[e].get(i), y = h?.fillHidden === !0 ? "transparent" : h?.color ?? n.dataPointColors?.[i], b = y === "00000000" ? "transparent" : y ? `#${y}` : n.color === "00000000" ? "transparent" : fe(e, n), x = pe(n, h), C = h?.lineColor ?? n.lineColor, O = h?.lineWidthEmu ?? n.lineWidthEmu, k = h?.lineDash ?? n.chartexStyle?.lineDash ?? "solid", A = n.chartexStyle?.lineCap === "rnd" ? "round" : n.chartexStyle?.lineCap === "sq" ? "square" : "butt", P = n.chartexStyle?.lineJoin === "round" || n.chartexStyle?.lineJoin === "bevel" ? n.chartexStyle.lineJoin : "miter", F = f ? d >= 0 ? s[i] : c[i] : 0, L = D(F, d);
				f && (d >= 0 ? s[i] = L : c[i] = L);
				let R = M(F), z = M(L), B = n.threeDShape ?? t.threeD.shape ?? "box", V = B === "cone" || B === "pyramid", H = B === "coneToMax" || B === "pyramidToMax", U = (e) => {
					if (!V) return 1;
					let t = S && !(F > 0) ? j.min : F, n = j.fraction(t), r = j.fraction(L), i = j.fraction(e), a = r - n;
					return a === 0 || !Number.isFinite(a) || !Number.isFinite(i - n) ? +(e === t) : Math.max(0, Math.min(1, 1 - (i - n) / a));
				}, W = (e) => {
					if (!H) return 1;
					let t = L >= F ? j.max : j.min, n = S ? j.min : 0, r = j.fraction(t), i = j.fraction(n), a = j.fraction(e), o = Math.abs(r - i);
					return !(o > 0) || ![
						r,
						i,
						a
					].every(Number.isFinite) ? w(e, j.min, j.max) : Math.max(0, Math.min(1, Math.abs(r - a) / o));
				}, G = H ? W(R) : U(R), K = H ? W(z) : U(z);
				if (a) {
					let t = N.x + j.fraction(R) * N.w, n = N.x + j.fraction(z) * N.w, a = _ ? g - 1 - i : i, s = N.y + a * l + m.offset;
					o.push({
						x: Math.min(t, n),
						y: s,
						width: Math.abs(n - t),
						height: m.size,
						nearDepth: u.near,
						farDepth: u.far,
						categoryIndex: i,
						seriesIndex: e,
						color: b,
						shape: B,
						baseCoord: t,
						endCoord: n,
						baseScale: G,
						endScale: K,
						omitBaseCap: !1,
						omitEndCap: !1,
						outline: x,
						outlineColor: C ? `#${C}` : "rgba(0,0,0,0.42)",
						outlineWidth: O == null ? .75 : Math.max(.25, O / v * r),
						outlineDash: k,
						outlineCap: A,
						outlineJoin: P,
						labelValue: p ? d / 100 : d
					});
				} else {
					let t = N.y + N.h - j.fraction(R) * N.h, n = N.y + N.h - j.fraction(z) * N.h, a = _ ? g - 1 - i : i, s = N.x + a * l + m.offset;
					o.push({
						x: s,
						y: Math.min(t, n),
						width: m.size,
						height: Math.abs(n - t),
						nearDepth: u.near,
						farDepth: u.far,
						categoryIndex: i,
						seriesIndex: e,
						color: b,
						shape: B,
						baseCoord: t,
						endCoord: n,
						baseScale: G,
						endScale: K,
						omitBaseCap: !1,
						omitEndCap: !1,
						outline: x,
						outlineColor: C ? `#${C}` : "rgba(0,0,0,0.42)",
						outlineWidth: O == null ? .75 : Math.max(.25, O / v * r),
						outlineDash: k,
						outlineCap: A,
						outlineJoin: P,
						labelValue: p ? d / 100 : d
					});
				}
			}
		}
		if (f) {
			let e = de(o, g);
			for (let t = 0; t < g; t++) {
				let n = e[t];
				for (let e of [-1, 1]) {
					let t = n.filter((t) => Math.sign(t.labelValue) === e && !ve(t.color) && Math.abs(t.endCoord - t.baseCoord) > 1e-9).sort((e, t) => e.seriesIndex - t.seriesIndex);
					for (let e = 0; e + 1 < t.length; e++) {
						let n = t[e], r = t[e + 1], i = 1e-8 * Math.max(1, Math.abs(n.endCoord), Math.abs(r.baseCoord));
						n.shape !== r.shape || Math.abs(n.endCoord - r.baseCoord) > i || Math.abs(n.endScale - r.baseScale) > 1e-9 || n.nearDepth !== r.nearDepth || n.farDepth !== r.farDepth || (n.omitEndCap = !0, r.omitBaseCap = !0);
					}
				}
				let r = n.find((e) => e.labelValue > 0 && !ve(e.color)), i = n.find((e) => e.labelValue < 0 && !ve(e.color));
				if (r && i) {
					let e = 1e-8 * Math.max(1, Math.abs(r.baseCoord), Math.abs(i.baseCoord));
					r.shape === i.shape && Math.abs(r.baseCoord - i.baseCoord) <= e && Math.abs(r.baseScale - i.baseScale) <= 1e-9 && r.nearDepth === i.nearDepth && r.farDepth === i.farDepth && (r.omitBaseCap = !0, i.omitBaseCap = !0);
				}
			}
		}
		let m = {
			remaining: K,
			exceeded: !1
		}, h = o.flatMap((e) => xe(u, e.shape, a, e.x, e.y, e.width, e.height, e.baseCoord, e.endCoord, e.nearDepth, e.farDepth, e.color, e.baseScale, e.endScale, e.omitBaseCap, e.omitEndCap, e.outline && e.outlineColor ? {
			color: e.outlineColor,
			width: e.outlineWidth,
			dash: b(e.outlineDash, e.outlineWidth),
			cap: e.outlineCap,
			join: e.outlineJoin
		} : void 0, m));
		if (m.exceeded) return Te(e, n), !0;
		for (let t of W(h)) Ce(e, t);
		for (let i of o) {
			let o = t.series[i.seriesIndex], s = a ? u.project(i.endCoord, i.y + i.height / 2, (i.nearDepth + i.farDepth) / 2) : u.project(i.x + i.width / 2, i.endCoord, (i.nearDepth + i.farDepth) / 2), c = z[i.seriesIndex].get(i.categoryIndex);
			Ae(t, o, c) && F.push(() => ke(e, t, o, i.seriesIndex, i.categoryIndex, i.labelValue, s, n, r, 0, void 0, c));
		}
	} else {
		let i = t.series.map(() => Array(g).fill(0)), a = t.series.map(() => Array(g).fill(0));
		if (f) {
			let e = Array(g).fill(0), n = Array(g).fill(0);
			for (let r = 0; r < t.series.length; r++) for (let t = 0; t < g; t++) {
				let o = E(r, t), s = o >= 0 ? e[t] : n[t];
				i[r][t] = s, a[r][t] = D(s, o), o >= 0 ? e[t] = D(e[t], o) : n[t] = D(n[t], o);
			}
		}
		let o = (e) => {
			let t = u.seriesDepth(e, P, f), n = 0, r = 0;
			for (let i = 0; i < g; i++) {
				if (!T(e, i)) continue;
				let o = f ? a[e][i] : E(e, i), s = N.x + $(i, g, y, _) * N.w, c = N.y + N.h - j.fraction(M(o)) * N.h;
				n += u.cameraDepth(s, c, t), r++;
			}
			return r > 0 ? n / r : -Infinity;
		}, s = t.series.map((e, t) => t).sort((e, t) => o(e) - o(t) || t - e), c = [], l = [], d = !1;
		for (let o of s) {
			if (d) break;
			let s = t.series[o], m = fe(o, s), h = f ? u.prismInterval(0, 1, !0) : u.prismInterval(o, P, !1), S = N.x + N.w / 2, C = N.y + N.h / 2, w = u.cameraDepth(S, C, h.near) >= u.cameraDepth(S, C, h.far) ? h.near : h.far, D = [], O = [], k = [], A = [], M = [], B = [], V = [], H = [], U = [], W = [];
			for (let e = 0; e < g; e++) {
				if (!T(o, e)) {
					D.push(null), O.push(null), k.push(null), A.push(null), M.push(null), B.push(null), V.push(null), H.push(null), U.push(null), W.push(null);
					continue;
				}
				let n = f ? a[o][e] : E(o, e), r = f ? i[o][e] : 0, s = N.x + $(e, g, y, _) * N.w, c = j.fraction(n), l = j.fraction(r), d = Number.isFinite(l) ? l : r <= j.min ? 0 : 1, p = Number.isFinite(c) && c >= 0 && c <= 1, m = Number.isFinite(c) ? Math.max(0, Math.min(1, c)) : n <= j.min ? 0 : 1, h = N.y + N.h - m * N.h, v = N.y + N.h - Math.max(0, Math.min(1, d)) * N.h;
				D.push(t.chartType.toLowerCase().includes("area") || p ? u.project(s, h, w) : null), O.push(u.project(s, v, w)), k.push(p ? u.cameraDepth(s, h, w) : null), A.push(u.cameraDepth(s, v, w)), M.push(n), B.push(s), V.push(h), H.push(v), U.push(c), W.push(d);
			}
			let G = [], K = null;
			for (let e = 0; e < D.length; e++) {
				let t = D[e], n = O[e];
				if (!t || !n) {
					x === "gap" && (K && G.push(K), K = null);
					continue;
				}
				K ??= {
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
				}, K.upper.push(t), K.lower.push(n), K.upperDepths.push(k[e] ?? 0), K.lowerDepths.push(A[e] ?? 0), K.indices.push(e), K.sceneXs.push(B[e] ?? 0), K.upperYs.push(V[e] ?? 0), K.lowerYs.push(H[e] ?? 0), K.upperFractions.push(U[e] ?? 0), K.lowerFractions.push(W[e] ?? 0);
			}
			K && G.push(K);
			let q = [];
			if (t.chartType.toLowerCase().includes("area")) for (let t of G) {
				let n = null;
				for (let r = 0; r + 1 < t.upper.length; r++) {
					let i = R(t.lowerFractions[r], t.lowerFractions[r + 1], t.upperFractions[r], t.upperFractions[r + 1]);
					for (let a = 0; a < i.length; a++) {
						let o = i[a], s = t.sceneXs[r] + (t.sceneXs[r + 1] - t.sceneXs[r]) * o.startT, l = t.sceneXs[r] + (t.sceneXs[r + 1] - t.sceneXs[r]) * o.endT, f = N.y + N.h - o.lowerStart * N.h, p = N.y + N.h - o.lowerEnd * N.h, g = N.y + N.h - o.upperStart * N.h, _ = N.y + N.h - o.upperEnd * N.h, v = {
							...u.project(s, g, w),
							cameraDepth: u.cameraDepth(s, g, w),
							cameraWeight: u.cameraProjectionWeight(s, g, w)
						}, y = {
							...u.project(l, _, w),
							cameraDepth: u.cameraDepth(l, _, w),
							cameraWeight: u.cameraProjectionWeight(l, _, w)
						};
						n != null && Math.hypot(n.at(-1).x - v.x, n.at(-1).y - v.y) <= 1e-8 ? n.push(y) : (n && n.length >= 2 && q.push(n), n = [v, y]);
						let b = be(u, s, l, f, p, g, _, h.near, h.far, m, r === 0 && a === 0 && o.startT === 0, r + 2 === t.upper.length && a + 1 === i.length && o.endT === 1);
						for (let t of b) {
							if (c.length >= 1e4) {
								d = !0;
								break;
							}
							c.push({
								points: t.points,
								cameraDepth: t.cameraDepth,
								cameraDepths: t.cameraDepths,
								cameraWeights: t.cameraWeights,
								layer: 0,
								paint: () => Ce(e, t)
							});
						}
						if (d) break;
					}
					if (d) break;
				}
				if (n && n.length >= 2 && q.push(n), d) break;
			}
			let J = [];
			if (!t.chartType.toLowerCase().includes("area")) {
				let e = [], t = null;
				for (let n = 0; n < g; n++) {
					let r = M[n], i = r == null ? NaN : j.fraction(r);
					if (r == null || !Number.isFinite(i)) {
						x === "gap" && t && (e.push(t), t = null);
						continue;
					}
					t ??= [], t.push({
						x: N.x + $(n, g, y, _) * N.w,
						fraction: i
					});
				}
				t && e.push(t);
				let n = (e) => {
					let t = Math.max(0, Math.min(1, e.fraction)), n = N.y + N.h - t * N.h;
					return {
						...u.project(e.x, n, w),
						cameraDepth: u.cameraDepth(e.x, n, w),
						cameraWeight: u.cameraProjectionWeight(e.x, n, w)
					};
				}, r = (e) => {
					e && e.path.length >= 2 && J.push(e);
				};
				for (let t of e) {
					if (t.length < 2) continue;
					let e = [t[0]];
					for (let n = 0; n + 1 < t.length; n++) {
						let r = t[n - 1] ?? t[n], i = t[n], a = t[n + 1], o = t[n + 2] ?? a;
						if (s.smooth !== !0 || t.length < 3) {
							e.push(a);
							continue;
						}
						let c = {
							x: i.x + (a.x - r.x) / 6,
							fraction: i.fraction + (a.fraction - r.fraction) / 6
						}, l = {
							x: a.x - (o.x - i.x) / 6,
							fraction: a.fraction - (o.fraction - i.fraction) / 6
						};
						for (let t = 1; t <= 12; t++) {
							let n = t / 12, r = 1 - n;
							e.push({
								x: r * r * r * i.x + 3 * r * r * n * c.x + 3 * r * n * n * l.x + n * n * n * a.x,
								fraction: r * r * r * i.fraction + 3 * r * r * n * c.fraction + 3 * r * n * n * l.fraction + n * n * n * a.fraction
							});
						}
					}
					let i = null, a = 0;
					for (let t = 0; t + 1 < e.length; t++) {
						let o = e[t], s = e[t + 1], c = (e) => u.project(e.x, N.y + N.h - e.fraction * N.h, w), l = c(o), d = c(s), f = Math.hypot(d.x - l.x, d.y - l.y), p = Number.isFinite(f) ? f : Math.hypot(s.x - o.x, (s.fraction - o.fraction) * N.h), m = L(o.fraction, s.fraction);
						if (!m || m.endT - m.startT <= 1e-12) {
							r(i), i = null, a += p;
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
							dashOffset: a + (Number.isFinite(_) ? _ : p * m.startT)
						}), a += p;
					}
					r(i);
				}
			}
			let ee = t.chartType.toLowerCase().includes("area"), te = s.lineHidden != null || s.lineColor != null || s.lineWidthEmu != null || s.chartexStyle?.lineHidden != null || s.chartexStyle?.lineColors?.some(Boolean) || s.chartexStyle?.lineWidthEmu != null || s.chartexStyle?.lineDash != null || s.chartexStyle?.lineCap != null || s.chartexStyle?.lineJoin != null;
			if (s.lineHidden !== !0 && (!ee || te)) {
				let t = s.lineColor ? `#${s.lineColor}` : me(m, .7), n = s.lineWidthEmu ? Math.max(.5, s.lineWidthEmu / v) * r : ee ? .75 * r : Math.max(1, 2 * r), i = b(s.chartexStyle?.lineDash ?? "solid", n), a = s.chartexStyle?.lineCap === "rnd" ? "round" : s.chartexStyle?.lineCap === "sq" ? "square" : "butt", o = s.chartexStyle?.lineJoin === "round" || s.chartexStyle?.lineJoin === "bevel" ? s.chartexStyle.lineJoin : "miter", l = (r, s, l = s, u = 0) => {
					let f = re(r, {
						width: n,
						dash: i,
						dashOffset: u,
						lineCap: a,
						startCap: s,
						endCap: l,
						lineJoin: o
					});
					if (f == null) {
						d = !0;
						return;
					}
					if (c.length + f.length > 1e4) {
						d = !0;
						return;
					}
					for (let n of f) c.push({
						points: n.points,
						cameraDepth: n.cameraDepth,
						cameraDepths: n.cameraDepths,
						cameraWeights: n.cameraWeights,
						layer: 1,
						paint: () => we(e, n, t)
					});
				};
				if (ee) for (let e of q) l(e, a);
				else for (let e of J) l(e.path, e.startClipped ? "butt" : a, e.endClipped ? "butt" : a, e.dashOffset);
			}
			let Y = s.dataPointOverrides?.some((e) => e.markerSymbol != null && e.markerSymbol !== "none") === !0;
			if (t.chartType.toLowerCase().includes("line") && (s.showMarker === !0 || Y)) for (let t = 0; t < D.length; t++) {
				let n = D[t];
				if (!n) continue;
				let i = I[o].get(t), a = i?.markerSymbol ?? (s.showMarker === !0 ? s.markerSymbol ?? "circle" : "none");
				if (a === "none") continue;
				let c = i?.markerSize ?? s.markerSize ?? 5, u = i?.markerFill ?? s.markerFill ?? s.color ?? Z[o % Z.length], d = i?.markerLine ?? s.markerLine ?? s.lineColor ?? s.color ?? Z[o % Z.length], f = (i?.markerLineWidthEmu ?? s.markerLineWidthEmu) == null ? Math.max(.75, s.lineWidthEmu == null ? r : s.lineWidthEmu / v * r) : Math.max(.25, (i?.markerLineWidthEmu ?? s.markerLineWidthEmu ?? 0) / v * r);
				l.push(() => Oe(e, n, a, Math.max(2, c) * r, u === "00000000" ? "transparent" : `#${u}`, `#${d}`, f));
			}
			for (let i = 0; i < D.length; i++) {
				let a = D[i];
				if (!a) continue;
				let c = E(o, i), l = I[o].get(i), u = l?.markerSize ?? s.markerSize ?? 5, d = z[o].get(i);
				Ae(t, s, d) && F.push(() => ke(e, t, s, o, i, p ? c / 100 : c, a, n, r, s.showMarker === !0 || l?.markerSymbol != null ? u * r / 2 : 0, void 0, d));
			}
		}
		if (d) return Te(e, n), !0;
		for (let e of W(c)) e.paint();
		for (let e of l) e();
	}
	ze(e, t, u, j, g, y, _, r, a ? "horizontal" : "vertical"), Ue(e, t, u, j, g, y, _, a ? "horizontal" : "vertical", r);
	let B = He(t, u, j, g, y, _, a ? "horizontal" : "vertical"), V = (e, t) => {
		if (t !== "low" && t !== "high") return B;
		let n = u.topology.nearDepth, r = B.axisX, i = B.axisY;
		if (e === "value" === a) {
			let e = N.y, r = N.y + N.h, a = u.project(N.x + N.w / 2, e, n), o = u.project(N.x + N.w / 2, r, n), s = a.y >= o.y ? e : r;
			i = t === "low" ? s : s === e ? r : e;
		} else {
			let e = N.x, i = N.x + N.w, a = u.project(e, N.y + N.h / 2, n), o = u.project(i, N.y + N.h / 2, n), s = a.x <= o.x ? e : i;
			r = t === "low" ? s : s === e ? i : e;
		}
		return {
			axisX: r,
			axisY: i,
			depth: n,
			horizontalStart: u.project(N.x, i, n),
			horizontalEnd: u.project(N.x + N.w, i, n),
			verticalStart: u.project(r, N.y + N.h, n),
			verticalEnd: u.project(r, N.y, n)
		};
	}, H = V("value", t.valAxisTickLabelPos), U = V("category", t.catAxisTickLabelPos), G = d(t.valAxisFontSizeHpt, r) ?? 9 * r;
	if (e.font = `${t.valAxisFontItalic ? "italic " : ""}${t.valAxisFontBold ? "bold " : ""}${G}px ${ge(t.valAxisFontFace)}`, e.fillStyle = t.valAxisFontColor ? `#${t.valAxisFontColor}` : "#595959", e.textAlign = a ? "center" : "right", e.textBaseline = a ? "top" : "middle", !t.valAxisHidden && t.valAxisTickLabelPos !== "none") {
		let { axisX: n, axisY: r, depth: i } = H, o = u.project(N.x + N.w / 2, N.y + N.h / 2, i), s = Be(a ? H.horizontalStart : H.verticalStart, a ? H.horizontalEnd : H.verticalEnd, o, a ? "vertical" : "horizontal");
		e.textAlign = Math.abs(s.x) < .2 ? "center" : s.x < 0 ? "right" : "left", e.textBaseline = Math.abs(s.y) < .2 ? "middle" : s.y < 0 ? "bottom" : "top";
		for (let o of j.majorTicks) {
			let l = a ? u.project(N.x + j.fraction(o) * N.w, r, i) : u.project(n, N.y + N.h - j.fraction(o) * N.h, i);
			e.fillText(c(p ? o / 100 : o, p ? t.valAxisFormatCode ?? "0%" : t.valAxisFormatCode, t.date1904), l.x + s.x * 5, l.y + s.y * 5);
		}
	}
	let q = d(t.catAxisFontSizeHpt, r) ?? 9 * r;
	if (e.font = `${t.catAxisFontItalic ? "italic " : ""}${t.catAxisFontBold ? "bold " : ""}${q}px ${ge(t.catAxisFontFace)}`, e.fillStyle = t.catAxisFontColor ? `#${t.catAxisFontColor}` : "#595959", !t.catAxisHidden && t.catAxisTickLabelPos !== "none") {
		let n = Array.from({ length: g }, (e, n) => l(String(h[n] ?? n + 1), t.catAxisFormatCode, t.date1904)), r = Ee(t);
		if (r == null && (r = 0, !a && g > 1)) {
			let t = Infinity, i = null, a = U.axisY;
			for (let e = 0; e < g; e++) {
				let n = $(e, g, y, _), r = u.project(N.x + n * N.w, a, u.topology.nearDepth);
				i && (t = Math.min(t, Math.hypot(r.x - i.x, r.y - i.y))), i = r;
			}
			Math.max(0, ...n.map((t) => e.measureText(t).width)) > t * .9 && (r = -Math.PI / 4);
		}
		let i = Math.max(1, Math.floor(t.catAxisTickLabelSkip ?? 1));
		for (let t = 0; t < g; t += i) {
			let i = $(t, g, y, _), { axisX: o, axisY: s, depth: c } = U, l = a ? u.project(o, N.y + $(t, g, y, _) * N.h, c) : u.project(N.x + i * N.w, s, c);
			if (a) {
				let r = u.project(o, N.y + N.h / 2, c), i = u.project(N.x + N.w / 2, N.y + N.h / 2, c), a = r.x <= i.x;
				e.textAlign = a ? "right" : "left", e.textBaseline = "middle", e.fillText(n[t], l.x + (a ? -6 : 6), l.y);
			} else {
				let i = u.project(N.x + N.w / 2, N.y + N.h / 2, c), o = Be(U.horizontalStart, U.horizontalEnd, i, "vertical");
				De(e, n[t], l, r, a, o.y < 0 ? -1 : 1);
			}
		}
	}
	Ne(e, t, n, o, a, r);
	for (let e of F) e();
	return Pe(e, t, s, r), !0;
}
function Ge(e, t, n, r) {
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
	let { plot: c, legend: l } = je(e, t, n, r, "radial"), u = O({
		...t.threeD,
		depthPercent: 100
	}, c, {
		sceneDepthScale: 1,
		sceneHeightScale: .15
	});
	if (!u) return !0;
	let f = new Map(i.dataPointOverrides?.map((e) => [e.idx, e]) ?? []), p = 0;
	for (let e of f.values()) e.explosion != null && Number.isFinite(e.explosion) && (p = Math.max(p, Math.max(0, Math.min(100, e.explosion)) / 100));
	let { scene: m } = u, h = Math.min(m.w * .45 / (1 + p), u.modelDepth * .45 / (1 + p), m.h / .45);
	if (!(h > 0)) return !0;
	let _ = m.x + m.w / 2, x = m.y + m.h / 2, S = h * .3, C = -Math.PI / 2 + ((t.firstSliceAngle != null && Number.isFinite(t.firstSliceAngle) ? t.firstSliceAngle : 0) % 360 + 360) % 360 * Math.PI / 180, w = [], E = new Map(i.dataLabelOverrides?.map((e) => [e.idx, e]) ?? []);
	for (let e of a) {
		let t = e.value / o / s, n = C + t * Math.PI * 2, r = f.get(e.index), a = r?.fillHidden === !0 ? "00000000" : r?.color ?? i.dataPointColors?.[e.index] ?? i.color, c = (C + n) / 2, l = r?.explosion != null && Number.isFinite(r.explosion) ? Math.max(0, Math.min(100, r.explosion)) / 100 : 0, d = _ + Math.cos(c) * h * l, p = .5 + Math.sin(c) * h * l / u.modelDepth, m = I({
			centerX: d,
			centerY: x,
			centerDepth: p,
			radius: h,
			modelDepth: u.modelDepth,
			thickness: S,
			startAngle: C,
			endAngle: n
		});
		if (!m) {
			C = n;
			continue;
		}
		w.push({
			index: e.index,
			start: C,
			end: n,
			color: a === "00000000" ? "transparent" : a ? `#${a}` : fe(e.index),
			value: e.value,
			percentValue: t,
			centerX: d,
			centerDepth: p,
			mesh: m,
			lineHidden: r?.lineHidden ?? i.lineHidden ?? !1,
			lineColor: r?.lineColor ?? i.lineColor ?? null,
			lineWidthEmu: r?.lineWidthEmu ?? i.lineWidthEmu ?? null,
			lineDash: r?.lineDash ?? i.chartexStyle?.lineDash ?? "solid",
			lineCap: i.chartexStyle?.lineCap === "rnd" ? "round" : i.chartexStyle?.lineCap === "sq" ? "square" : "butt",
			lineJoin: i.chartexStyle?.lineJoin === "round" || i.chartexStyle?.lineJoin === "bevel" ? i.chartexStyle.lineJoin : "miter"
		}), C = n;
	}
	u = T(u, w.flatMap((e) => e.mesh.vertices), c, .08);
	let D = [], k = {
		remaining: K,
		exceeded: !1
	}, A = w.flatMap((e) => {
		let t = e.lineWidthEmu == null ? .75 * r : Math.max(.25, e.lineWidthEmu / v * r);
		return Se(u, e.mesh, e.color, !e.lineHidden && e.lineColor ? {
			color: `#${e.lineColor}`,
			width: t,
			dash: b(e.lineDash, t),
			cap: e.lineCap,
			join: e.lineJoin
		} : void 0, k);
	});
	if (k.exceeded) return Te(e, n), !0;
	for (let t of W(A)) Ce(e, t);
	for (let n of w) {
		let a = (n.start + n.end) / 2, o = E.get(n.index);
		if (Ae(t, i, o)) {
			let s = i.seriesDataLabels, l = d(o?.fontSizeHpt ?? s?.fontSizeHpt ?? t.dataLabelFontSizeHpt, r) ?? 9 * r;
			e.font = `${o?.fontBold ?? s?.fontBold ?? t.dataLabelFontBold ? "bold " : ""}${l}px ${Q(t, t.dataLabelFontFace)}`;
			let f = y({
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
			}), p = Q(t, t.dataLabelFontFace), m = o?.text && o.richRuns?.length ? g(e, {
				runs: o.richRuns,
				ptToPx: r,
				fontFamily: p,
				fallbackBold: o.fontBold ?? s?.fontBold ?? t.dataLabelFontBold ?? !1,
				fontFamilyForFace: (e) => Q(t, e)
			}, l, `#${o.fontColor ?? s?.fontColor ?? i.labelColor ?? t.dataLabelFontColor ?? "111111"}`) : null, _ = o?.position ?? s?.position ?? t.dataLabelPosition, v = x - S / 2, b = x + S / 2, C = u.cameraDepth(n.centerX, v, n.centerDepth) >= u.cameraDepth(n.centerX, b, n.centerDepth) ? v : b, w = 0, T = null;
			for (let e = 0; e <= 12; e++) {
				let t = n.start + (n.end - n.start) * e / 12, r = u.project(n.centerX + Math.cos(t) * h * .64, C, n.centerDepth + Math.sin(t) * h * .64 / u.modelDepth);
				T && (w += Math.hypot(r.x - T.x, r.y - T.y)), T = r;
			}
			let E = (_ == null || _ === "bestFit") && (n.percentValue === 0 || w < (m?.width ?? e.measureText(f).width)) || _ === "outEnd", O = h * (E ? 1.12 : .64), k = u.project(n.centerX + Math.cos(a) * O, C, n.centerDepth + Math.sin(a) * O / u.modelDepth), A = u.project(n.centerX + Math.cos(a) * h, C, n.centerDepth + Math.sin(a) * h / u.modelDepth);
			D.push(() => ke(e, t, i, 0, n.index, n.value, k, c, r, 0, n.percentValue, o, "ctr", A, E));
		}
	}
	for (let e of D) e();
	let j = i.categories?.length ? i.categories : t.categories, M = Array.from({ length: j.length }, (e, t) => {
		let n = f.get(t), r = n?.fillHidden === !0 ? "00000000" : n?.color ?? i.dataPointColors?.[t] ?? i.color;
		return r === "00000000" ? "00000000" : me(r ? `#${r}` : fe(t), .8).replace(/^#/, "");
	});
	return Pe(e, {
		...t,
		categories: j,
		series: [{
			...i,
			categories: j,
			dataPointColors: M
		}]
	}, l, r, !0), !0;
}
function Ke(e, t, n, r) {
	return t.threeD ? Ge(e, t, n, r) ? !0 : ue.has(t.chartType) ? We(e, t, n, r) : !1 : !1;
}
//#endregion
//#region src/three-d.ts
var qe = { render: Ke };
//#endregion
export { qe as threeD };
