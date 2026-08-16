import { S as e, b as t, c as n, d as r, g as i, h as a, l as o, m as s, r as c, t as l, u, v as d, x as f } from "./chart-number-format-tjYUR9eS.js";
import { A as p, S as m, T as h, b as g, c as _, d as v, f as y, l as b, n as x, p as S, s as C, u as w } from "./dash-CMzZIDz_.js";
import { t as T } from "./renderer-module-contract-BNGz8HvO.js";
//#region packages/core/src/chart/three-d.ts
function E(e, t, n, r, i) {
	let a = Number.isFinite(e) && e > 0 ? e : 0, o = Number.isFinite(t) ? A(t, 0, 500) : 150, s = Math.max(1, Math.trunc(r)), c = A(Math.trunc(n), 0, s - 1), l = i ? 1 : s, u = a / (l + o / 100);
	return {
		offset: (a - u * l) / 2 + (i ? 0 : c * u),
		size: u
	};
}
function D(e, t, n) {
	if (![
		e,
		t,
		n
	].every(Number.isFinite)) return 1;
	let r = e >= 0 ? n : t;
	return 1 - Math.min(1, Math.abs(e) / Math.max(Number.MIN_VALUE, Math.abs(r)));
}
function O(e, t, n, r = .06) {
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
	let d = A(k(r, .06), 0, .45), f = n.w * (1 - 2 * d), p = n.h * (1 - 2 * d), m = Math.min(f / l, p / u);
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
var k = (e, t) => typeof e == "number" && Number.isFinite(e) ? e : t, A = (e, t, n) => Math.min(n, Math.max(t, e));
function j(e, t, n = {}) {
	if (![
		t.x,
		t.y,
		t.w,
		t.h
	].every(Number.isFinite) || t.w <= 0 || t.h <= 0) return null;
	let r = A(k(e.rotationX, 15), -90, 90), i = (A(k(e.rotationY, 20), 0, 360) + 180) % 360 - 180, a = A(k(e.depthPercent, 100), 20, 2e3), o = A(k(e.perspective, 30), 0, 240), s = A(k(e.gapDepthPercent, 150), 0, 500), c = e.heightPercent != null && Number.isFinite(e.heightPercent) ? A(e.heightPercent, 5, 500) : null, l = n.sceneHeightScale != null && Number.isFinite(n.sceneHeightScale) ? A(n.sceneHeightScale * 100, 5, 500) : null, u = c ?? l, d = t;
	if (u != null) {
		let e = u / 100, n = Math.min(t.w, t.h / e), r = n * e;
		d = {
			x: t.x + (t.w - n) / 2,
			y: t.y + (t.h - r) / 2,
			w: n,
			h: r
		};
	}
	let f = Math.PI / 180, p = A(k(n.sceneDepthScale, .1), .01, 2), m = d.w * p * (a / 100), h = d.x + d.w / 2, g = d.y + d.h / 2, _ = -i * f, v = r * f, y = Math.cos(_), b = Math.sin(_), x = Math.cos(v), S = Math.sin(v), C = e.rightAngleAxes !== !0 && o > 0, w = A(o * .25, .25, 60) * f, T = A(k(n.perspectiveTangentGain, 2), .25, 4), E = Math.atan(T * Math.tan(w)), D = Math.hypot(d.w, d.h, m), O = C ? D * .5 / Math.tan(E) : Infinity, j = (e, t, n) => {
		let r = e - h, i = g - t, a = (.5 - A(Number.isFinite(n) ? n : 0, 0, 1)) * m, o = y * r + b * a, s = -b * r + y * a;
		return {
			x: o,
			y: x * i - S * s,
			z: S * i + x * s
		};
	}, M = (e) => {
		if (e.length < 3) return null;
		let t = e.map((e) => j(e.x, e.y, e.depth)), n = t[0], r = null;
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
	}, N = -Infinity;
	for (let e of [d.x, d.x + d.w]) for (let t of [d.y, d.y + d.h]) for (let n of [0, 1]) N = Math.max(N, j(e, t, n).z);
	let P = C ? Math.max(O, N + D * .01) : Infinity, F = (e, t, n) => {
		let r = j(e, t, n);
		if (!C) return {
			x: r.x,
			y: -r.y
		};
		let i = P / Math.max(P * 1e-9, P - r.z);
		return {
			x: r.x * i,
			y: -r.y * i
		};
	}, I = [];
	for (let e of [d.x, d.x + d.w]) for (let t of [d.y, d.y + d.h]) for (let n of [0, 1]) I.push(F(e, t, n));
	let L = Math.min(...I.map((e) => e.x)), R = Math.max(...I.map((e) => e.x)), z = Math.min(...I.map((e) => e.y)), B = Math.max(...I.map((e) => e.y)), V = Math.max(Number.MIN_VALUE, R - L), H = Math.max(Number.MIN_VALUE, B - z), U = Math.min(t.w / V, t.h / H) * .94, W = t.x + (t.w - V * U) / 2 - L * U, G = t.y + (t.h - H * U) / 2 - z * U, K = (e, t, n) => {
		let r = F(e, t, n);
		return {
			x: W + r.x * U,
			y: G + r.y * U
		};
	}, q = { ...d }, J = K(h, g, 0), ee = K(h, g, 1), te = ee.x - J.x, Y = ee.y - J.y, ne = (e, t) => j(e === "x" ? t === "min" ? d.x : d.x + d.w : h, e === "y" ? t === "min" ? d.y : d.y + d.h : g, e === "depth" ? t === "min" ? 0 : 1 : .5).z, re = ne("x", "min") <= ne("x", "max") ? "min" : "max", ie = ne("y", "min") <= ne("y", "max") ? "min" : "max", ae = ne("depth", "min") >= ne("depth", "max") ? 0 : 1, oe = +(ae === 0), se = (e) => {
		let t = e === "min" ? d.x : d.x + d.w, n = K(t, d.y, ae), r = K(t, d.y + d.h, ae);
		return (n.x + r.x) / 2;
	}, ce = (e) => {
		let t = e === "min" ? d.y : d.y + d.h, n = K(d.x, t, ae), r = K(d.x + d.w, t, ae);
		return (n.y + r.y) / 2;
	}, le = se("min") <= se("max") ? "min" : "max", ue = ce("min") >= ce("max") ? "min" : "max", de = (e) => 1 / Math.max(1, Math.trunc(e)) / (1 + s / 100), fe = (e, t, n = !1) => n || t <= 1 ? .5 : (A(Math.trunc(e), 0, Math.max(0, t - 1)) + .5) / t;
	return {
		scene: d,
		front: q,
		depthX: te,
		depthY: Y,
		modelDepth: m,
		pieScaleY: A(Math.sin(Math.max(1, Math.abs(r)) * f) ** 1.15, .2, 1),
		pieThicknessFraction: .3 * Math.max(0, Math.cos(Math.abs(r) * f)),
		project: K,
		cameraDepth(e, t, n) {
			return j(e, t, n).z;
		},
		cameraProjectionWeight(e, t, n) {
			if (!C) return 1;
			let r = j(e, t, n).z;
			return 1 / Math.max(P * 1e-9, P - r);
		},
		cameraFacing(e) {
			let t = M(e);
			if (!t) return !1;
			let { normal: n, centroid: r } = t, i = C ? {
				x: -r.x,
				y: -r.y,
				z: P - r.z
			} : {
				x: 0,
				y: 0,
				z: 1
			}, a = n.x * i.x + n.y * i.y + n.z * i.z, o = Math.hypot(i.x, i.y, i.z);
			return o > 0 && a > o * 1e-10;
		},
		cameraNormal(e) {
			return M(e)?.normal ?? null;
		},
		topology: {
			farX: re,
			farY: ie,
			axisX: le,
			axisY: ue,
			nearDepth: ae,
			farDepth: oe
		},
		seriesDepth: fe,
		prismDepth: de,
		prismInterval(e, t, n = !1) {
			let r = fe(e, t, n), i = de(n ? 1 : t) / 2;
			return {
				near: A(r - i, 0, 1),
				far: A(r + i, 0, 1)
			};
		}
	};
}
function M(e) {
	switch (e) {
		case "cylinder":
		case "cone":
		case "coneToMax":
		case "pyramid":
		case "pyramidToMax": return e;
		default: return "box";
	}
}
var N = (e) => Math.max(0, Math.min(1, e));
function P(e, t) {
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
function F(e, t) {
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
		let r = P(e, t.indices);
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
function I(e) {
	let { horizontal: t, crossStart: n, crossSize: r, baseCoord: i, endCoord: a, nearDepth: o, farDepth: s } = e;
	if (![
		n,
		r,
		i,
		a,
		o,
		s
	].every(Number.isFinite) || r <= 0 || i === a || o === s) return null;
	let c = M(e.shape), l = c === "cylinder" || c === "cone" || c === "coneToMax", u = c !== "box" && c !== "cylinder", d = c === "coneToMax" || c === "pyramidToMax", f = l ? Math.max(8, Math.min(64, Math.trunc(e.roundSegments ?? 32))) : 4, p = N(e.baseScale ?? (d ? e.toMaxBaseScale ?? 1 : 1)), m = N(e.endScale ?? (u ? d ? e.toMaxEndScale ?? 0 : 0 : 1));
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
		faces: F(y, w),
		silhouetteEdges: T
	};
}
function L(e) {
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
		faces: F(_, [
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
function R(e) {
	let t = e.upper0 - e.lower0, n = e.upper1 - e.lower1;
	if (Number.isFinite(t) && Number.isFinite(n) && t * n < 0) {
		let r = t / (t - n), i = e.x0 + (e.x1 - e.x0) * r, a = e.lower0 + (e.lower1 - e.lower0) * r;
		return [L({
			...e,
			x1: i,
			lower1: a,
			upper1: a,
			capEnd: !1
		}), L({
			...e,
			x0: i,
			lower0: a,
			upper0: a,
			capStart: !1
		})].filter((e) => e != null);
	}
	let r = L(e);
	return r ? [r] : [];
}
function z(e) {
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
		faces: F(m, v),
		silhouetteEdges: h.slice(0, u ? void 0 : -1).map((e, t) => [e, g[t]])
	};
}
//#endregion
//#region packages/core/src/chart/three-d-scene.ts
function B(e, t) {
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
function V(e, t, n, r) {
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
var H = (e) => ({
	minX: Math.min(...e.map((e) => e.x)),
	maxX: Math.max(...e.map((e) => e.x)),
	minY: Math.min(...e.map((e) => e.y)),
	maxY: Math.max(...e.map((e) => e.y))
}), U = (e, t) => {
	let n = !1;
	for (let r = 0, i = e.length - 1; r < e.length; i = r++) {
		let a = e[r], o = e[i], s = (a.x - t.x) * (o.y - t.y) - (a.y - t.y) * (o.x - t.x), c = Math.max(1, Math.abs(a.x), Math.abs(a.y), Math.abs(o.x), Math.abs(o.y));
		if (Math.abs(s) <= c * 1e-9 && t.x >= Math.min(a.x, o.x) - 1e-9 && t.x <= Math.max(a.x, o.x) + 1e-9 && t.y >= Math.min(a.y, o.y) - 1e-9 && t.y <= Math.max(a.y, o.y) + 1e-9) return !0;
		a.y > t.y != o.y > t.y && t.x < (o.x - a.x) * (t.y - a.y) / (o.y - a.y) + a.x && (n = !n);
	}
	return n;
}, W = (e, t, n, r) => {
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
function G(e, t, n, r) {
	let i = [], a = (e) => {
		i.length >= 12 || i.some((t) => Math.hypot(t.x - e.x, t.y - e.y) < 1e-7) || i.push(e);
	}, o = {
		x: (Math.max(n.minX, r.minX) + Math.min(n.maxX, r.maxX)) / 2,
		y: (Math.max(n.minY, r.minY) + Math.min(n.maxY, r.maxY)) / 2
	};
	U(e, o) && U(t, o) && a(o);
	for (let n of e) U(t, n) && a(n);
	for (let n of t) U(e, n) && a(n);
	for (let n = 0; n < e.length && i.length < 12; n++) for (let r = 0; r < t.length && i.length < 12; r++) {
		let i = W(e[n], e[(n + 1) % e.length], t[r], t[(r + 1) % t.length]);
		i && a(i);
	}
	return i;
}
function K(e, t) {
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
function q(e) {
	if (e.length < 2) return [...e];
	let t = [...e.keys()].sort((t, n) => e[t].cameraDepth - e[n].cameraDepth || t - n), n = e.map((e) => H(e.points)), r = [...e.keys()].sort((e, t) => n[e].minX - n[t].minX || e - t), i = e.map(() => /* @__PURE__ */ new Set()), a = e.map(() => 0), o = [], s = 0;
	for (let c of r) {
		for (let e = o.length - 1; e >= 0; e--) n[o[e]].maxX < n[c].minX - 1e-9 && o.splice(e, 1);
		for (let r of o) {
			if (++s > 2e5) return t.map((t) => e[t]);
			if (n[r].maxY < n[c].minY - 1e-9 || n[c].maxY < n[r].minY - 1e-9) continue;
			let o = G(e[r].points, e[c].points, n[r], n[c]), l = 0;
			for (let t of o) {
				let n = K(e[r], t) - K(e[c], t), i = 1e-8 * Math.max(1, Math.abs(e[r].cameraDepth), Math.abs(e[c].cameraDepth));
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
var J = 1e-9, ee = 1e4, te = (e, t, n) => ({
	x: e.x + (t.x - e.x) * n,
	y: e.y + (t.y - e.y) * n,
	cameraDepth: e.cameraDepth + (t.cameraDepth - e.cameraDepth) * n,
	cameraWeight: (e.cameraWeight ?? 1) + ((t.cameraWeight ?? 1) - (e.cameraWeight ?? 1)) * n
}), Y = (e, t) => Math.hypot(e.x - t.x, e.y - t.y) <= J;
function ne(e, t, n = 0) {
	let r = t.filter((e) => Number.isFinite(e) && e > J);
	if (r.length === 0) return e.length >= 2 ? [[...e]] : [];
	r.length % 2 == 1 && r.push(...r);
	let i = [], a = 0, o = r[0], s = !0, c = r.reduce((e, t) => e + t, 0), l = c > J && Number.isFinite(n) ? (n % c + c) % c : 0;
	for (; l > J;) {
		let e = Math.min(l, o);
		l -= e, o -= e, o <= J && (a = (a + 1) % r.length, o = r[a], s = a % 2 == 0);
	}
	let u = null;
	for (let t = 0; t + 1 < e.length; t++) {
		let n = e[t], c = e[t + 1], l = Math.hypot(c.x - n.x, c.y - n.y);
		if (!(l > J)) continue;
		let d = 0;
		for (; d < l - J;) {
			let e = Math.min(o, l - d), t = te(n, c, d / l), f = te(n, c, (d + e) / l);
			if (s && (u ??= [], (u.length === 0 || !Y(u.at(-1), t)) && u.push(t), u.push(f)), d += e, o -= e, o <= J) {
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
	if (i.length > 1 && Y(e[0], e.at(-1)) && Y(i[0][0], e[0]) && Y(i.at(-1).at(-1), e.at(-1))) {
		let e = i.shift(), t = i.pop();
		i.unshift([...t, ...e.slice(1)]);
	}
	return i;
}
var re = (e, t) => ({
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
	return re(n, r);
};
function ae(e, t, n) {
	let r = Number.isFinite(n.width) ? Math.max(0, n.width) : 0;
	if (!(r > J) || t.length < 3) return null;
	let i = r / 2;
	if ((n.lineJoin ?? "miter") === "round") return ie(e, i, "join");
	let a = [];
	for (let n of t) {
		let t = n.x - e.x, r = n.y - e.y, o = Math.hypot(t, r);
		if (!(o > J)) continue;
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
		for (; s.length >= 2 && o(s.at(-2), s.at(-1), e) <= J;) s.pop();
		s.push(e);
	}
	let c = [];
	for (let e of [...a].reverse()) {
		for (; c.length >= 2 && o(c.at(-2), c.at(-1), e) <= J;) c.pop();
		c.push(e);
	}
	let l = [...s.slice(0, -1), ...c.slice(0, -1)];
	return l.length >= 3 ? re("join", l) : null;
}
var oe = (e, t, n, r) => {
	let i = t.x * r.y - t.y * r.x;
	if (Math.abs(i) <= J) return null;
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
	if (!(n > J) || e.length < 2) return [];
	let r = n / 2, i = t.lineCap ?? "butt", a = t.lineJoin ?? "miter", o = Math.max(1, t.miterLimit ?? 10), s = [], c = ne(e, t.dash ?? [], t.dashOffset);
	if (c == null) return null;
	let l = (e) => s.length >= 1e4 ? !1 : (s.push(e), !0);
	for (let n = 0; n < c.length; n++) {
		let s = c[n], u = s.length > 2 && Y(s[0], s.at(-1)), d = n === 0 && Y(s[0], e[0]) ? t.startCap ?? i : i, f = n + 1 === c.length && Y(s.at(-1), e.at(-1)) ? t.endCap ?? i : i, p = [];
		for (let e = 0; e + 1 < s.length; e++) {
			let t = s[e], n = s[e + 1], r = Math.hypot(n.x - t.x, n.y - t.y);
			p.push(r > J ? {
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
			if (!l(re("segment", [
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
			if (Math.abs(i) <= J) return !0;
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
				if (i && Math.hypot(i.x - e.x, i.y - e.y) <= r * o) return !!l(re("join", [
					c,
					{
						...e,
						...i
					},
					u
				]));
			}
			return l(re("join", [
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
var he = [
	"4472C4",
	"ED7D31",
	"70AD47",
	"A5A5A5",
	"FFC000",
	"5B9BD5"
], ge = new Set([
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
function _e(e, t) {
	let n = Number.isFinite(t) && t > 0 ? t / m : 1, r = Number.isFinite(e) && e >= 0 ? e / g : 0;
	return Math.max(.25, r) * n;
}
function ve(e, t) {
	let n = Number.isSafeInteger(t) && t > 0 ? t : 0, r = Array.from({ length: n }, () => []);
	for (let t of e) {
		let e = t.categoryIndex;
		Number.isSafeInteger(e) && e >= 0 && e < n && r[e].push(t);
	}
	return r;
}
var ye = (e, t) => `#${t?.color ?? he[e % he.length]}`;
function be(e, t) {
	if (t?.lineHidden != null || t?.lineColor != null || t?.lineWidthEmu != null || t?.lineDash != null) return t.lineHidden !== !0;
	let n = e.chartexStyle;
	return (e.lineHidden != null || e.lineColor != null || e.lineWidthEmu != null || n?.lineHidden != null || n?.lineNoStyle != null || n?.lineColors != null || n?.lineWidthEmu != null || n?.lineDash != null || n?.lineCap != null || n?.lineJoin != null) && e.lineHidden !== !0 && n?.lineHidden !== !0;
}
function xe(e, t) {
	let n = e.replace(/^#/, "");
	if (!/^[0-9a-f]{6}$/i.test(n)) return e;
	let r = (e) => Math.max(0, Math.min(255, Math.round(parseInt(n.slice(e, e + 2), 16) * t))).toString(16).padStart(2, "0");
	return `#${r(0)}${r(2)}${r(4)}`;
}
function Se(e, t) {
	let n = e.cameraNormal(t);
	if (!n) return 1;
	let r = {
		x: -.2,
		y: .25,
		z: 1
	}, i = Math.hypot(r.x, r.y, r.z), a = Math.max(0, (n.x * r.x + n.y * r.y + n.z * r.z) / i);
	return Math.max(.78, Math.min(1, .78 + .24 * a));
}
var Ce = (e) => `"${e && !e.startsWith("+") ? e.replace(/["\\]/g, "") : "Arial"}"`, X = (e, t, n = "minor") => Ce((t?.startsWith("+mj-") ? e.themeMajorFontLatin : t?.startsWith("+mn-") ? e.themeMinorFontLatin : t) ?? (n === "major" ? e.themeMajorFontLatin : e.themeMinorFontLatin));
function we(e, t) {
	if (t.length) {
		e.beginPath(), e.moveTo(t[0].x, t[0].y);
		for (let n = 1; n < t.length; n++) e.lineTo(t[n].x, t[n].y);
		e.closePath();
	}
}
var Te = (e) => e === "transparent" || e === "#00000000" || e === "rgba(0,0,0,0)";
function Ee(e, t, n, r) {
	Te(n) || (we(e, t), e.fillStyle = n, e.fill(), r > 0 && (we(e, t), e.fillStyle = `rgba(0,0,0,${r})`, e.fill()));
}
function De(e, t, n, r, i, a, o, s, c, l, u, d) {
	return R({
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
	}).flatMap((t) => ke(e, t, l).map((e) => ({
		...e,
		outline: !1,
		outlineSegments: void 0
	})));
}
function Oe(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m = !1, h = !1, g, _) {
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
	let v = I({
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
	return v ? ke(e, v, d, g, _) : [];
}
function ke(e, t, n, r, i, a = !1) {
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
				color: xe(n, Se(e, i)),
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
function Ae(e, t, n, r, i, a, o) {
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
function je(e, t) {
	Ee(e, t.points, t.color, t.shade), t.outline && (e.strokeStyle = t.outlineColor ?? "rgba(0,0,0,0.42)", e.lineWidth = t.outlineWidth ?? .75, e.setLineDash(x(t.outlineDash ?? "solid", e.lineWidth)), e.lineCap = t.outlineCap ?? "butt", e.lineJoin = t.outlineJoin ?? "miter", t.outline && (we(e, t.points), e.stroke()), e.setLineDash([]));
}
function Me(e, t, n) {
	t.points.length < 3 || Te(n) || (we(e, t.points), e.fillStyle = n, e.fill());
}
function Ne(e, t) {
	e.fillStyle = "#888", e.font = "12px sans-serif", e.textAlign = "center", e.textBaseline = "middle", e.fillText("(too many data points)", t.x + t.w / 2, t.y + t.h / 2);
}
function Z(e, t, n, r = !1) {
	let i = Math.max(0, t - 1), a = Number.isFinite(e) ? Math.max(0, Math.min(i, e)) : 0, o = n ? (a + .5) / Math.max(1, t) : t === 1 ? .5 : a / i;
	return r ? 1 - o : o;
}
function Pe(e) {
	let t = e.catAxisLabelRotation;
	return t == null ? null : !Number.isFinite(t) || Math.abs(t) > 54e5 ? 0 : t / 6e4 * Math.PI / 180;
}
function Fe(e, t, n, r, i, a = 1, o = 6) {
	if (i || r === 0) {
		e.textAlign = i ? "right" : "center", e.textBaseline = i ? "middle" : a < 0 ? "bottom" : "top", e.fillText(t, n.x + (i ? -o : 0), n.y + (i ? 0 : a * o));
		return;
	}
	e.save(), e.translate(n.x, n.y + a * o), e.rotate(r), e.textAlign = a < 0 ? "left" : "right", e.textBaseline = "middle", e.fillText(t, 0, 0), e.restore();
}
function Ie(e, t, n, r, i, a, o) {
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
function Le(e, t, n, r, i, a, o, s, c, l = 0, u, f, p = "t", m = o, h = !0, b) {
	let x = f;
	if (x?.deleted) return;
	let S = n.seriesDataLabels, T = x?.showVal ?? S?.showVal ?? t.showDataLabels, E = x?.showCatName ?? S?.showCatName ?? !1, D = x?.showSerName ?? S?.showSerName ?? !1, O = x?.showPercent ?? S?.showPercent ?? !1, k = x?.text, A = w({
		customText: k,
		showCategory: E,
		showSeries: D,
		showValue: T,
		showPercent: O,
		category: n.categories?.[i] ?? t.categories[i] ?? `${i + 1}`,
		seriesName: n.name || `Series ${r + 1}`,
		sourceValue: a,
		valueDivisor: b?.divisor,
		percentRatio: u != null && Number.isFinite(u) ? u : void 0,
		formatCode: x?.formatCode ?? S?.formatCode ?? t.dataLabelFormatCode ?? n.valFormatCode,
		percentFormatCode: x?.formatCode ?? S?.formatCode ?? t.dataLabelFormatCode ?? "0%",
		date1904: t.date1904,
		separator: x?.separator ?? S?.separator
	});
	if (!A) return;
	let j = d(x?.fontSizeHpt ?? S?.fontSizeHpt ?? t.dataLabelFontSizeHpt, c) ?? 9 * c, M = x?.fontBold ?? S?.fontBold ?? t.dataLabelFontBold ?? !1, N = X(t, x?.fontFace ?? S?.fontFace ?? t.dataLabelFontFace);
	e.font = `${M ? "bold " : ""}${j}px ${N}`;
	let P = `#${x?.fontColor ?? S?.fontColor ?? n.labelColor ?? t.dataLabelFontColor ?? "111111"}`, F = k && x?.richRuns?.length ? y(e, {
		runs: x.richRuns,
		ptToPx: c,
		fontFamily: N,
		fallbackBold: M,
		fontFamilyForFace: (e) => X(t, e)
	}, j, P) : null, I = F ? [] : C(A, Math.max(j, s.w * .45), Math.max(j * 1.2, s.h * .35), j * 1.2, (t) => e.measureText(t).width);
	if (!F && !I.length) return;
	let L = F?.width ?? Math.max(...I.map((t) => e.measureText(t).width)), R = F?.height ?? I.length * j * 1.2, z = _({
		kind: "point",
		x: o.x,
		y: o.y,
		position: x?.position ?? S?.position ?? t.dataLabelPosition ?? p,
		markerGap: l
	}, s, {
		w: L,
		h: R
	}, j, x?.manualLayout, s);
	if (!z) return;
	let B = x?.labelBox ?? S?.labelBox;
	if (S?.showLeaderLines && h && (e.beginPath(), e.moveTo(m.x, m.y), e.lineTo(Math.max(z.rect.x, Math.min(m.x, z.rect.x + z.rect.w)), Math.max(z.rect.y, Math.min(m.y, z.rect.y + z.rect.h))), e.strokeStyle = `#${S.leaderLineColor ?? "808080"}`, e.lineWidth = S.leaderLineWidthEmu == null ? .75 * c : Math.max(.25, S.leaderLineWidthEmu / g * c), e.stroke()), B && (B.fill && (e.fillStyle = `#${B.fill}`, e.fillRect(z.rect.x, z.rect.y, z.rect.w, z.rect.h)), B.borderColor && (e.strokeStyle = `#${B.borderColor}`, e.lineWidth = B.borderWidthEmu == null ? .75 * c : Math.max(.25, B.borderWidthEmu / g * c), e.strokeRect(z.rect.x, z.rect.y, z.rect.w, z.rect.h))), e.save(), e.beginPath(), e.rect(z.clip.x, z.clip.y, z.clip.w, z.clip.h), e.clip(), F) {
		v(e, F, z.x, z.y, z.textAlign, z.textBaseline), e.restore();
		return;
	}
	e.fillStyle = P, e.textAlign = z.textAlign, e.textBaseline = "middle";
	let V = j * 1.2, H = z.y - (I.length - 1) * V / 2;
	I.forEach((t, n) => e.fillText(t, z.x, H + n * V)), e.restore();
}
function Re(e, t, n) {
	if (n?.deleted) return !1;
	if (n?.text) return !0;
	let r = t.seriesDataLabels;
	return (n?.showVal ?? r?.showVal ?? e.showDataLabels) || (n?.showCatName ?? r?.showCatName ?? !1) || (n?.showSerName ?? r?.showSerName ?? !1) || (n?.showPercent ?? r?.showPercent ?? !1);
}
function ze(n, c, l, u, f) {
	let p = r(c, l.h, u);
	if (c.title) {
		n.font = `${c.titleFontBold === !1 ? "" : "bold "}${p.fontPx}px ${Ce(c.titleFontFace)}`, n.fillStyle = c.titleFontColor ? `#${c.titleFontColor}` : "#111111", n.textAlign = "center", n.textBaseline = "top";
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
	n.save(), n.font = `${c.legendFontBold ? "bold " : ""}${m}px ${Ce(c.legendFontFace)}`;
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
function Be(t, n, r, i, a, o, s, c, l, d, f, p, m, h) {
	t.save(), t.font = `${d ? "italic " : ""}${l ? "bold " : ""}${o}px ${s}`, t.fillStyle = c ? `#${c}` : "#555";
	let g = m ? n : S(t, n, h), _ = u(a, f, p), v = i;
	if (m) {
		let n = t.measureText(g).width, a = Math.abs(Math.cos(_)), s = Math.abs(Math.sin(_)), c = {
			x: i.x - (n * a + o * s) / 2,
			y: i.y - (n * s + o * a) / 2,
			w: n * a + o * s,
			h: n * s + o * a
		}, l = e({
			...m,
			w: void 0,
			h: void 0
		}, r, c);
		l && (v = {
			x: l.x + l.w / 2,
			y: l.y + l.h / 2
		});
	}
	t.translate(v.x, v.y), _ && t.rotate(_), t.textAlign = "center", t.textBaseline = "middle", t.fillText(g, 0, 0), t.restore();
}
function Ve(e, t, r, i, a, s) {
	if (t.valAxisTitle) {
		let c = n(t.valAxisTitleFontSizeHpt, s), l = a ? "horizontal" : "left";
		Be(e, t.valAxisTitle, r, a ? {
			x: i.x + i.w / 2,
			y: i.y + i.h + o(r.h) + c / 2
		} : {
			x: i.x - o(r.w) - c / 2,
			y: i.y + i.h / 2
		}, l, c, X(t, t.valAxisTitleFontFace, "major"), t.valAxisTitleFontColor, t.valAxisTitleFontBold ?? !0, t.valAxisTitleFontItalic ?? !1, t.valAxisTitleRotation, t.valAxisTitleVerticalMode, t.valAxisTitleManualLayout, a ? i.w : i.h);
	}
	if (t.catAxisTitle) {
		let c = n(t.catAxisTitleFontSizeHpt, s), l = a ? "left" : "horizontal";
		Be(e, t.catAxisTitle, r, a ? {
			x: i.x - o(r.w) - c / 2,
			y: i.y + i.h / 2
		} : {
			x: i.x + i.w / 2,
			y: i.y + i.h + o(r.h) + c / 2
		}, l, c, X(t, t.catAxisTitleFontFace, "major"), t.catAxisTitleFontColor, t.catAxisTitleFontBold ?? !0, t.catAxisTitleFontItalic ?? !1, t.catAxisTitleRotation, t.catAxisTitleVerticalMode, t.catAxisTitleManualLayout, a ? i.h : i.w);
	}
}
function He(e, t, r, i, a, o, s, c, l, u) {
	let f = t.threeD?.seriesAxis;
	if (!f || f.hidden || t.threeD?.barGrouping !== "standard" || t.series.length === 0) return;
	let p = et(t, i, a, o, s, c, l), m = Ke(i), h = l === "vertical" ? m.seriesAxisX : p.axisX, g = l === "horizontal" ? m.floorY === i.front.y ? i.front.y + i.front.h : i.front.y : m.floorY, _ = i.project(h, g, i.topology.nearDepth), v = i.project(h, g, i.topology.farDepth), y = Math.hypot(v.x - _.x, v.y - _.y);
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
	}), f.lineHidden || ($(e, Q(f.lineColor, f.lineWidthEmu, null, u, "898989", 1)), e.beginPath(), e.moveTo(_.x, _.y), e.lineTo(v.x, v.y), e.stroke());
	let w = Math.max(1, Math.floor(f.tickMarkSkip ?? 1)), T = Math.max(1, Math.floor(f.tickLabelSkip ?? 1)), E = f.majorTickMark ?? "out", D = d(f.fontSizeHpt, u) ?? 9 * u;
	e.font = `${f.fontItalic ? "italic " : ""}${f.fontBold ? "bold " : ""}${D}px ${X(t, f.fontFace)}`, e.fillStyle = f.fontColor ? `#${f.fontColor}` : "#595959", e.textAlign = Math.abs(x.x) < .2 ? "center" : x.x < 0 ? "right" : "left", e.textBaseline = Math.abs(x.y) < .2 ? "middle" : x.y < 0 ? "bottom" : "top";
	for (let n = 0; n < t.series.length; n++) {
		let r = i.seriesDepth(n, t.series.length, !1), a = f.orientation === "maxMin" ? 1 - r : r, o = i.project(h, g, a);
		if (!f.lineHidden && n % w === 0 && E !== "none") {
			let t = 6 * u, n = E === "cross" ? t / 2 : E === "out" ? t : 0, r = E === "cross" ? t / 2 : E === "in" ? t : 0;
			e.beginPath(), e.moveTo(o.x + x.x * n, o.y + x.y * n), e.lineTo(o.x - x.x * r, o.y - x.y * r), e.stroke();
		}
		f.tickLabelPos !== "none" && n % T === 0 && e.fillText(t.series[n].name || `Series ${n + 1}`, o.x + x.x * (6 * u + 3), o.y + x.y * (6 * u + 3));
	}
	if (e.setLineDash([]), f.title) {
		let a = n(f.titleFontSizeHpt, u);
		Be(e, f.title, r, {
			x: C.x + x.x * (D + a + 12),
			y: C.y + x.y * (D + a + 12)
		}, "horizontal", a, X(t, f.titleFontFace, "major"), f.titleFontColor, f.titleFontBold ?? !0, f.titleFontItalic ?? !1, f.titleRotation, f.titleVerticalMode, f.titleManualLayout, Math.max(i.front.w, i.front.h));
	}
}
function Ue(e, t, n, r, i = !1) {
	if (!n) return;
	b(e, t, n, r);
	let a = new Map(t.series[0]?.dataPointOverrides?.map((e) => [e.idx, e]) ?? []), o = i ? (t.series[0]?.categories?.length ? t.series[0].categories : t.categories).map((e, n) => {
		let r = t.series[0]?.dataPointColors?.[n];
		return {
			label: e,
			color: r === "00000000" ? "transparent" : r ? `#${r}` : ye(n),
			series: t.series[0],
			point: a.get(n)
		};
	}) : t.series.map((e, t) => ({
		label: e.name || `Series ${t + 1}`,
		color: ye(t, e),
		series: e,
		point: void 0
	})), s = d(t.legendFontSizeHpt, r) ?? 9 * r;
	e.font = `${t.legendFontBold ? "bold " : ""}${s}px ${Ce(t.legendFontFace)}`, e.textAlign = "left", e.textBaseline = "middle";
	let c = Math.max(s * 1.45, 12), l = Math.min(7 * r, c * .7);
	if (t.legendPos === "t" || t.legendPos === "b" || t.legendManualLayout != null && n.w >= n.h) {
		let a = o.map((t) => l + 4 + e.measureText(t.label).width), s = f(a, Math.max(1, n.w - 8), 12).slice(0, Math.max(0, Math.floor((n.h - 4 + 1e-6) / c))), u = n.y + 2 + c / 2;
		for (let d of s) {
			let s = d.map((e) => Math.min(n.w, a[e])), f = s.reduce((e, t) => e + t, 0) + Math.max(0, d.length - 1) * 12, p = n.x + Math.max(4, (n.w - f) / 2);
			for (let n = 0; n < d.length; n++) {
				let a = o[d[n]], c = Math.max(0, s[n] - l - 4);
				if (!i && t.chartType.toLowerCase().includes("line") && a.series?.lineHidden !== !0) {
					let t = a.series?.lineWidthEmu == null ? Math.max(1, 2 * r) : Math.max(.5, a.series.lineWidthEmu / g * r);
					e.beginPath(), e.moveTo(p, u), e.lineTo(p + l, u), e.strokeStyle = a.series?.lineColor ? `#${a.series.lineColor}` : xe(a.color, .7), e.lineWidth = t, e.setLineDash(x(a.series?.chartexStyle?.lineDash ?? "solid", t)), e.stroke(), e.setLineDash([]);
				} else {
					a.color !== "transparent" && (e.fillStyle = a.color, e.fillRect(p, u - l / 2, l, l));
					let t = a.point?.lineHidden ?? a.series?.lineHidden, n = a.point?.lineColor ?? a.series?.lineColor;
					t !== !0 && n && (e.strokeStyle = `#${n}`, e.lineWidth = (a.point?.lineWidthEmu ?? a.series?.lineWidthEmu) == null ? .75 * r : Math.max(.25, (a.point?.lineWidthEmu ?? a.series?.lineWidthEmu ?? 0) / g * r), e.setLineDash(x(a.point?.lineDash ?? a.series?.chartexStyle?.lineDash ?? "solid", e.lineWidth)), e.strokeRect(p, u - l / 2, l, l), e.setLineDash([]));
				}
				e.fillStyle = t.legendFontColor ? `#${t.legendFontColor}` : "#595959", e.fillText(S(e, a.label, c), p + l + 4, u), p += s[n] + 12;
			}
			u += c;
		}
		return;
	}
	let u = n.y;
	for (let a = 0; a < o.length; a++) {
		let d = o[a], f = n.x + 8 + l, p = Math.max(0, n.x + n.w - 4 - f), m = Math.max(s * 1.2, 10), h = C(d.label, p, m * (i ? 1 : 2), m, (t) => e.measureText(t).width);
		if (h.length === 0) continue;
		let _ = Math.max(c, h.length * m + 2);
		if (u + _ > n.y + n.h + 1e-6) break;
		let v = u + _ / 2;
		if (!i && t.chartType.toLowerCase().includes("line")) {
			let t = d.series?.lineWidthEmu == null ? Math.max(1, 2 * r) : Math.max(.5, d.series.lineWidthEmu / g * r);
			d.series?.lineHidden !== !0 && (e.beginPath(), e.moveTo(n.x + 4, v), e.lineTo(n.x + 4 + l, v), e.strokeStyle = d.series?.lineColor ? `#${d.series.lineColor}` : xe(d.color, .7), e.lineWidth = t, e.setLineDash(x(d.series?.chartexStyle?.lineDash ?? "solid", t)), e.stroke(), e.setLineDash([]));
		} else {
			d.color !== "transparent" && (e.fillStyle = d.color, e.fillRect(n.x + 4, v - l / 2, l, l));
			let t = d.point?.lineHidden ?? d.series?.lineHidden, i = d.point?.lineColor ?? d.series?.lineColor;
			t !== !0 && i && (e.strokeStyle = `#${i}`, e.lineWidth = (d.point?.lineWidthEmu ?? d.series?.lineWidthEmu) == null ? .75 * r : Math.max(.25, (d.point?.lineWidthEmu ?? d.series?.lineWidthEmu ?? 0) / g * r), e.setLineDash(x(d.point?.lineDash ?? d.series?.chartexStyle?.lineDash ?? "solid", e.lineWidth)), e.strokeRect(n.x + 4, v - l / 2, l, l), e.setLineDash([]));
		}
		e.fillStyle = t.legendFontColor ? `#${t.legendFontColor}` : "#595959";
		let y = v - (h.length - 1) * m / 2;
		h.forEach((t, n) => e.fillText(t, f, y + n * m)), u += _;
	}
}
function We(e, t, n, r, i, a) {
	let o = i ? 100 : 1, s = e.valAxisMinorTickMark ?? "cross";
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
function Ge(e, t, n) {
	let r = e != null && Number.isFinite(e) ? (e % 360 + 360) % 360 : 0, i = Number.isFinite(t) ? Math.max(0, Math.min(1, t)) : 0, a = Number.isFinite(n) ? Math.max(0, Math.min(1 - i, n)) : 0, o = Math.PI / 2 - (r * Math.PI / 180 + i * Math.PI * 2), s = o - a * Math.PI * 2;
	return {
		start: Math.min(o, s),
		end: Math.max(o, s),
		middle: (o + s) / 2,
		leading: o
	};
}
function Ke(e) {
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
	let o = t != null && Number.isFinite(t) && t >= 0 ? Math.max(.25, t / g * r) : a * r;
	return {
		color: `#${e ?? i}`,
		width: o,
		dash: x(n ?? "solid", o)
	};
}
function $(e, t) {
	e.strokeStyle = t.color, e.lineWidth = t.width, e.setLineDash(t.dash);
}
function qe(e, t, n, r, i, a, o, s, c) {
	let { front: l } = n, u = l.x, d = l.x + l.w, f = Ke(n), { sideX: p, floorY: m, oppositeFloorY: h, nearDepth: g, farDepth: _ } = f, v = (t, n) => {
		n?.fillHidden === !0 || !n?.fillColor || Ee(e, t, `#${n.fillColor}`, 0);
	};
	v(f.floor, t.threeD?.floor), v(f.sideWall, t.threeD?.sideWall), v(f.backWall, t.threeD?.backWall);
	let y = (t, a) => {
		$(e, a);
		for (let a of t) if (i === "horizontal") {
			let t = l.x + r.fraction(a) * l.w, i = n.project(t, m, _), o = n.project(t, h, _);
			e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(o.x, o.y), e.stroke();
		} else {
			let t = l.y + l.h - r.fraction(a) * l.h, i = n.project(p, t, g), o = n.project(p, t, _), s = n.project(p === u ? d : u, t, _);
			e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(o.x, o.y), e.stroke(), e.beginPath(), e.moveTo(o.x, o.y), e.lineTo(s.x, s.y), e.stroke();
		}
	};
	t.valAxisMinorGridlines === !0 && y(r.minorTicks, Q(t.valAxisMinorGridlineColor, t.valAxisMinorGridlineWidthEmu, t.valAxisMinorGridlineDash, c, "D9D9D9", .5)), t.valAxisMajorGridlines !== !1 && y(r.majorTicks, Q(t.valAxisGridlineColor, t.valAxisGridlineWidthEmu, t.valAxisGridlineDash, c, "898989", 1)), $(e, Q(null, null, null, c, "898989", 1));
	for (let t = 0; t < a; t++) if (i === "vertical") {
		let r = l.x + Z(t, a, o, s) * l.w, i = n.project(r, m, g), c = n.project(r, m, _);
		e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(c.x, c.y), e.stroke();
	} else {
		let r = l.y + Z(t, a, o, s) * l.h, i = n.project(p, r, g), c = n.project(p, r, _);
		e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(c.x, c.y), e.stroke();
	}
	let b = (t, n) => {
		if (!(n?.lineHidden === !0 || t.length < 2)) {
			$(e, Q(n?.lineColor, n?.lineWidthEmu, n?.lineDash, c, "898989", 1)), e.beginPath(), e.moveTo(t[0].x, t[0].y);
			for (let n = 1; n < t.length; n++) e.lineTo(t[n].x, t[n].y);
			e.lineTo(t[0].x, t[0].y), e.closePath(), e.stroke();
		}
	};
	b(f.floor, t.threeD?.floor), b(f.sideWall, t.threeD?.sideWall), b(f.backWall, t.threeD?.backWall), e.setLineDash([]);
}
function Je(e, t, n, r, i, a, o, s, c) {
	let l = et(t, n, r, i, a, o, c), u = c === "vertical" ? !t.catAxisHidden && !t.catAxisLineHidden : !t.valAxisHidden && !t.valAxisLineHidden, d = c === "vertical" ? !t.valAxisHidden && !t.valAxisLineHidden : !t.catAxisHidden && !t.catAxisLineHidden;
	u && ($(e, Q(c === "vertical" ? t.catAxisLineColor : t.valAxisLineColor, c === "vertical" ? t.catAxisLineWidthEmu : t.valAxisLineWidthEmu, null, s, "898989", 1)), e.beginPath(), e.moveTo(l.horizontalStart.x, l.horizontalStart.y), e.lineTo(l.horizontalEnd.x, l.horizontalEnd.y), e.stroke()), d && ($(e, Q(c === "vertical" ? t.valAxisLineColor : t.catAxisLineColor, c === "vertical" ? t.valAxisLineWidthEmu : t.catAxisLineWidthEmu, null, s, "898989", 1)), e.beginPath(), e.moveTo(l.verticalStart.x, l.verticalStart.y), e.lineTo(l.verticalEnd.x, l.verticalEnd.y), e.stroke()), e.setLineDash([]);
}
function Ye(e, t, n, r) {
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
function Xe(e, t, n, r, i, a, o, s, c) {
	if (!t || t === "none") return;
	let l = Ye(r, i, a, o), u = Ze(s, c), d = t === "cross" ? u / 2 : u, f = t === "out" || t === "cross" ? d : 0, p = t === "in" || t === "cross" ? d : 0;
	e.beginPath(), e.moveTo(n.x + l.x * f, n.y + l.y * f), e.lineTo(n.x - l.x * p, n.y - l.y * p), e.stroke();
}
function Ze(e, t) {
	return (e === "minor" ? 4 : 6) * t;
}
function Qe(e, t, n) {
	if (e !== "out" && e !== "cross") return 0;
	let r = Ze(t, n);
	return e === "cross" ? r / 2 : r;
}
function $e(e, t, n, r) {
	if (t) return r;
	let i = Qe(e, "major", n);
	return Math.max(r, i + 3 * n);
}
function et(e, t, n, r, i, a, o) {
	let { front: s } = t, c = (e) => Math.max(0, Math.min(1, e)), l = t.topology.axisX === "min" ? s.x : s.x + s.w, u = t.topology.axisY === "min" ? s.y : s.y + s.h, d = () => {
		if (e.catAxisCrossesAt != null && Number.isFinite(e.catAxisCrossesAt)) {
			let t = e.chartType.endsWith("Pct") ? e.catAxisCrossesAt * 100 : e.catAxisCrossesAt;
			return c(n.fraction(t));
		}
		let t = e.catAxisCrosses ?? "autoZero";
		return c(t === "min" ? n.fraction(n.min) : t === "max" ? n.fraction(n.max) : n.fraction(0));
	}, f = () => {
		let t = e.valAxisCrossesAt;
		if (t != null && Number.isFinite(t)) return Z(t - 1, r, i, a);
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
function tt(e, t, n, r, i, a, o, s, c) {
	let { front: l } = n, u = et(t, n, r, i, a, o, s), { axisX: d, axisY: f, depth: p } = u, m = n.project(l.x + l.w / 2, l.y + l.h / 2, p), h = t.valAxisMinorTickMark ?? "cross";
	if (!t.valAxisHidden && !t.valAxisLineHidden) {
		$(e, Q(t.valAxisLineColor, t.valAxisLineWidthEmu, null, c, "898989", 1));
		let i = (e) => s === "horizontal" ? n.project(l.x + r.fraction(e) * l.w, f, p) : n.project(d, l.y + l.h - r.fraction(e) * l.h, p), a = s === "horizontal" ? u.horizontalStart : u.verticalStart, o = s === "horizontal" ? u.horizontalEnd : u.verticalEnd;
		for (let n of r.majorTicks) Xe(e, t.valAxisMajorTickMark, i(n), a, o, m, s === "vertical" ? "horizontal" : "vertical", "major", c);
		for (let t of r.minorTicks) Xe(e, h, i(t), a, o, m, s === "vertical" ? "horizontal" : "vertical", "minor", c);
	}
	if (!t.catAxisHidden && !t.catAxisLineHidden) {
		$(e, Q(t.catAxisLineColor, t.catAxisLineWidthEmu, null, c, "898989", 1));
		let r = s === "vertical" ? u.horizontalStart : u.verticalStart, h = s === "vertical" ? u.horizontalEnd : u.verticalEnd, g = Math.max(1, Math.floor(t.catAxisTickMarkSkip ?? 1));
		for (let u = 0; u < i; u += g) {
			let g = Z(u, i, a, o), _ = s === "vertical" ? n.project(l.x + g * l.w, f, p) : n.project(d, l.y + g * l.h, p);
			Xe(e, t.catAxisMajorTickMark, _, r, h, m, s === "vertical" ? "vertical" : "horizontal", "major", c);
		}
		let _ = t.catAxisMinorUnit;
		if (t.catAxisMinorTickMark && t.catAxisMinorTickMark !== "none" && _ != null && Number.isFinite(_) && _ > 0) {
			let u = t.catAxisMajorUnit != null && Number.isFinite(t.catAxisMajorUnit) && t.catAxisMajorUnit > 0 ? t.catAxisMajorUnit : g, v = Math.min(512, Math.ceil(i / _));
			for (let g = 1; g < v; g++) {
				let v = g * _;
				if (!(v < i)) break;
				if (Math.abs(v / u - Math.round(v / u)) < 1e-9) continue;
				let y = Z(v, i, a, o), b = s === "vertical" ? n.project(l.x + y * l.w, f, p) : n.project(d, l.y + y * l.h, p);
				Xe(e, t.catAxisMinorTickMark, b, r, h, m, s === "vertical" ? "vertical" : "horizontal", "minor", c);
			}
		}
	}
	e.setLineDash([]);
}
function nt(e, t, n, r) {
	if (!t.threeD) return !1;
	let i = t.chartType === "clusteredBar" || t.chartType === "clusteredBarH" || t.chartType.startsWith("stackedBar"), a = t.chartType.endsWith("H") || t.chartType.includes("BarH"), o = t.chartType.startsWith("stacked"), s = i && !o && t.threeD.barGrouping === "standard", { plot: u, legend: f } = ze(e, t, n, r, a ? "horizontal" : "vertical"), p = j(t.threeD, u, {
		sceneDepthScale: i ? s ? .65 : .1 : .4,
		perspectiveTangentGain: s ? 1 : 2
	});
	if (!p) return !0;
	let _ = t.chartType.endsWith("Pct"), v = t.series.find((e) => (e.categories?.length ?? 0) > 0)?.categories ?? t.categories, y = Math.max(1, v.length, ...t.series.map((e) => e.values.length)), b = t.catAxisOrientation === "maxMin", S = t.catAxisCrossBetween === "between", C = t.dispBlanksAs ?? "gap", w = t.valAxisLogBase != null && Number.isFinite(t.valAxisLogBase) && t.valAxisLogBase >= 2, T = (e, n) => {
		let r = t.series[e]?.values[n];
		return r != null && Number.isFinite(r) && (!w || r > 0) || r == null && (o || C === "zero");
	}, O = (e, n) => {
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
	}, k = (e, t) => {
		let n = e + t;
		return Number.isFinite(n) ? n : t < 0 ? -Number.MAX_VALUE : Number.MAX_VALUE;
	}, A = 0, M = 0;
	if (o) {
		for (let e = 0; e < y; e++) {
			let n = 0, r = 0;
			for (let i = 0; i < t.series.length; i++) {
				let t = O(i, e);
				t >= 0 ? n = k(n, t) : r = k(r, t);
			}
			A = Math.min(A, r), M = Math.max(M, n);
		}
		_ && (A = A < 0 ? -100 : 0, M = M > 0 ? 100 : 0, A === 0 && M === 0 && (M = 1));
	} else {
		let e = h(t.series.flatMap((e) => e.values).filter((e) => e != null && Number.isFinite(e) && (!w || e > 0)), w ? {
			min: 1,
			max: 10
		} : {
			min: 0,
			max: 1
		});
		A = w ? e.min : Math.min(0, e.min), M = w ? e.max : Math.max(0, e.max);
	}
	let N = We(t, A, M, (a ? p.front.w : p.front.h) / r, _, a ? "horizontal" : "vertical"), P = (e) => Number.isFinite(e) ? Math.max(N.min, Math.min(N.max, e)) : N.min;
	qe(e, t, p, N, a ? "horizontal" : "vertical", y, S, b, r);
	let { front: F } = p, I = Math.max(1, t.series.length), L = [], R = t.series.map((e) => new Map(e.dataPointOverrides?.map((e) => [e.idx, e]) ?? [])), z = t.series.map((e) => new Map(e.dataLabelOverrides?.map((e) => [e.idx, e]) ?? []));
	if (i) {
		let i = p.prismInterval(0, 1, !0), c = [], l = Array(y).fill(0), u = Array(y).fill(0), d = (a ? F.h : F.w) / y, f = t.barGapWidth != null && Number.isFinite(t.barGapWidth) && t.barGapWidth >= 0 ? t.barGapWidth : 150;
		for (let e = 0; e < t.series.length; e++) {
			let n = t.series[e], h = s ? p.prismInterval(e, I, !1) : i, g = E(d, f, s ? 0 : e, s ? 1 : I, o || s);
			for (let i = 0; i < y; i++) {
				if (!T(e, i)) continue;
				let s = O(e, i), f = R[e].get(i), p = f?.fillHidden === !0 ? "transparent" : f?.color ?? n.dataPointColors?.[i], v = p === "00000000" ? "transparent" : p ? `#${p}` : n.color === "00000000" ? "transparent" : ye(e, n), x = be(n, f), S = f?.lineColor ?? n.lineColor, C = f?.lineWidthEmu ?? n.lineWidthEmu, E = f?.lineDash ?? n.chartexStyle?.lineDash ?? "solid", A = n.chartexStyle?.lineCap === "rnd" ? "round" : n.chartexStyle?.lineCap === "sq" ? "square" : "butt", j = n.chartexStyle?.lineJoin === "round" || n.chartexStyle?.lineJoin === "bevel" ? n.chartexStyle.lineJoin : "miter", M = o ? s >= 0 ? l[i] : u[i] : 0, I = k(M, s);
				o && (s >= 0 ? l[i] = I : u[i] = I);
				let L = P(M), z = P(I), B = n.threeDShape ?? t.threeD.shape ?? "box", V = B === "cone" || B === "pyramid", H = B === "coneToMax" || B === "pyramidToMax", U = (e) => {
					if (!V) return 1;
					let t = w && !(M > 0) ? N.min : M, n = N.fraction(t), r = N.fraction(I), i = N.fraction(e), a = r - n;
					return a === 0 || !Number.isFinite(a) || !Number.isFinite(i - n) ? +(e === t) : Math.max(0, Math.min(1, 1 - (i - n) / a));
				}, W = (e) => {
					if (!H) return 1;
					let t = I >= M ? N.max : N.min, n = w ? N.min : 0, r = N.fraction(t), i = N.fraction(n), a = N.fraction(e), o = Math.abs(r - i);
					return !(o > 0) || ![
						r,
						i,
						a
					].every(Number.isFinite) ? D(e, N.min, N.max) : Math.max(0, Math.min(1, Math.abs(r - a) / o));
				}, G = H ? W(L) : U(L), K = H ? W(z) : U(z);
				if (a) {
					let t = F.x + N.fraction(L) * F.w, n = F.x + N.fraction(z) * F.w, a = b ? y - 1 - i : i, o = F.y + a * d + g.offset;
					c.push({
						x: Math.min(t, n),
						y: o,
						width: Math.abs(n - t),
						height: g.size,
						nearDepth: h.near,
						farDepth: h.far,
						categoryIndex: i,
						seriesIndex: e,
						color: v,
						shape: B,
						baseCoord: t,
						endCoord: n,
						baseScale: G,
						endScale: K,
						omitBaseCap: !1,
						omitEndCap: !1,
						outline: x,
						outlineColor: S ? `#${S}` : "rgba(0,0,0,0.42)",
						outlineWidth: C == null ? .75 * r / m : _e(C, r),
						outlineDash: E,
						outlineCap: A,
						outlineJoin: j,
						labelValue: _ ? s / 100 : s
					});
				} else {
					let t = F.y + F.h - N.fraction(L) * F.h, n = F.y + F.h - N.fraction(z) * F.h, a = b ? y - 1 - i : i, o = F.x + a * d + g.offset;
					c.push({
						x: o,
						y: Math.min(t, n),
						width: g.size,
						height: Math.abs(n - t),
						nearDepth: h.near,
						farDepth: h.far,
						categoryIndex: i,
						seriesIndex: e,
						color: v,
						shape: B,
						baseCoord: t,
						endCoord: n,
						baseScale: G,
						endScale: K,
						omitBaseCap: !1,
						omitEndCap: !1,
						outline: x,
						outlineColor: S ? `#${S}` : "rgba(0,0,0,0.42)",
						outlineWidth: C == null ? .75 * r / m : _e(C, r),
						outlineDash: E,
						outlineCap: A,
						outlineJoin: j,
						labelValue: _ ? s / 100 : s
					});
				}
			}
		}
		if (o) {
			let e = ve(c, y);
			for (let t = 0; t < y; t++) {
				let n = e[t];
				for (let e of [-1, 1]) {
					let t = n.filter((t) => Math.sign(t.labelValue) === e && !Te(t.color) && Math.abs(t.endCoord - t.baseCoord) > 1e-9).sort((e, t) => e.seriesIndex - t.seriesIndex);
					for (let e = 0; e + 1 < t.length; e++) {
						let n = t[e], r = t[e + 1], i = 1e-8 * Math.max(1, Math.abs(n.endCoord), Math.abs(r.baseCoord));
						n.shape !== r.shape || Math.abs(n.endCoord - r.baseCoord) > i || Math.abs(n.endScale - r.baseScale) > 1e-9 || n.nearDepth !== r.nearDepth || n.farDepth !== r.farDepth || (n.omitEndCap = !0, r.omitBaseCap = !0);
					}
				}
				let r = n.find((e) => e.labelValue > 0 && !Te(e.color)), i = n.find((e) => e.labelValue < 0 && !Te(e.color));
				if (r && i) {
					let e = 1e-8 * Math.max(1, Math.abs(r.baseCoord), Math.abs(i.baseCoord));
					r.shape === i.shape && Math.abs(r.baseCoord - i.baseCoord) <= e && Math.abs(r.baseScale - i.baseScale) <= 1e-9 && r.nearDepth === i.nearDepth && r.farDepth === i.farDepth && (r.omitBaseCap = !0, i.omitBaseCap = !0);
				}
			}
		}
		let h = {
			remaining: ee,
			exceeded: !1
		}, g = c.flatMap((e) => Oe(p, e.shape, a, e.x, e.y, e.width, e.height, e.baseCoord, e.endCoord, e.nearDepth, e.farDepth, e.color, e.baseScale, e.endScale, e.omitBaseCap, e.omitEndCap, e.outline && e.outlineColor ? {
			color: e.outlineColor,
			width: e.outlineWidth,
			dash: x(e.outlineDash, e.outlineWidth),
			cap: e.outlineCap,
			join: e.outlineJoin
		} : void 0, h));
		if (h.exceeded) return Ne(e, n), !0;
		for (let t of q(g)) je(e, t);
		for (let i of c) {
			let o = t.series[i.seriesIndex], s = a ? p.project(i.endCoord, i.y + i.height / 2, (i.nearDepth + i.farDepth) / 2) : p.project(i.x + i.width / 2, i.endCoord, (i.nearDepth + i.farDepth) / 2), c = z[i.seriesIndex].get(i.categoryIndex);
			Re(t, o, c) && L.push(() => Le(e, t, o, i.seriesIndex, i.categoryIndex, i.labelValue, s, n, r, 0, void 0, c, "t", s, !0, t.valAxisDisplayUnits));
		}
	} else {
		let i = t.series.map(() => Array(y).fill(0)), a = t.series.map(() => Array(y).fill(0));
		if (o) {
			let e = Array(y).fill(0), n = Array(y).fill(0);
			for (let r = 0; r < t.series.length; r++) for (let t = 0; t < y; t++) {
				let o = O(r, t), s = o >= 0 ? e[t] : n[t];
				i[r][t] = s, a[r][t] = k(s, o), o >= 0 ? e[t] = k(e[t], o) : n[t] = k(n[t], o);
			}
		}
		let s = (e) => {
			let t = p.seriesDepth(e, I, o), n = 0, r = 0;
			for (let i = 0; i < y; i++) {
				if (!T(e, i)) continue;
				let s = o ? a[e][i] : O(e, i), c = F.x + Z(i, y, S, b) * F.w, l = F.y + F.h - N.fraction(P(s)) * F.h;
				n += p.cameraDepth(c, l, t), r++;
			}
			return r > 0 ? n / r : -Infinity;
		}, c = t.series.map((e, t) => t).sort((e, t) => s(e) - s(t) || t - e), l = [], u = [], d = !1;
		for (let s of c) {
			if (d) break;
			let c = t.series[s], f = ye(s, c), m = o ? p.prismInterval(0, 1, !0) : p.prismInterval(s, I, !1), h = F.x + F.w / 2, v = F.y + F.h / 2, w = p.cameraDepth(h, v, m.near) >= p.cameraDepth(h, v, m.far) ? m.near : m.far, E = [], D = [], k = [], A = [], j = [], M = [], P = [], H = [], U = [], W = [];
			for (let e = 0; e < y; e++) {
				if (!T(s, e)) {
					E.push(null), D.push(null), k.push(null), A.push(null), j.push(null), M.push(null), P.push(null), H.push(null), U.push(null), W.push(null);
					continue;
				}
				let n = o ? a[s][e] : O(s, e), r = o ? i[s][e] : 0, c = F.x + Z(e, y, S, b) * F.w, l = N.fraction(n), u = N.fraction(r), d = Number.isFinite(u) ? u : r <= N.min ? 0 : 1, f = Number.isFinite(l) && l >= 0 && l <= 1, m = Number.isFinite(l) ? Math.max(0, Math.min(1, l)) : n <= N.min ? 0 : 1, h = F.y + F.h - m * F.h, g = F.y + F.h - Math.max(0, Math.min(1, d)) * F.h;
				E.push(t.chartType.toLowerCase().includes("area") || f ? p.project(c, h, w) : null), D.push(p.project(c, g, w)), k.push(f ? p.cameraDepth(c, h, w) : null), A.push(p.cameraDepth(c, g, w)), j.push(n), M.push(c), P.push(h), H.push(g), U.push(l), W.push(d);
			}
			let G = [], K = null;
			for (let e = 0; e < E.length; e++) {
				let t = E[e], n = D[e];
				if (!t || !n) {
					C === "gap" && (K && G.push(K), K = null);
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
				}, K.upper.push(t), K.lower.push(n), K.upperDepths.push(k[e] ?? 0), K.lowerDepths.push(A[e] ?? 0), K.indices.push(e), K.sceneXs.push(M[e] ?? 0), K.upperYs.push(P[e] ?? 0), K.lowerYs.push(H[e] ?? 0), K.upperFractions.push(U[e] ?? 0), K.lowerFractions.push(W[e] ?? 0);
			}
			K && G.push(K);
			let q = [];
			if (t.chartType.toLowerCase().includes("area")) for (let t of G) {
				let n = null;
				for (let r = 0; r + 1 < t.upper.length; r++) {
					let i = V(t.lowerFractions[r], t.lowerFractions[r + 1], t.upperFractions[r], t.upperFractions[r + 1]);
					for (let a = 0; a < i.length; a++) {
						let o = i[a], s = t.sceneXs[r] + (t.sceneXs[r + 1] - t.sceneXs[r]) * o.startT, c = t.sceneXs[r] + (t.sceneXs[r + 1] - t.sceneXs[r]) * o.endT, u = F.y + F.h - o.lowerStart * F.h, h = F.y + F.h - o.lowerEnd * F.h, g = F.y + F.h - o.upperStart * F.h, _ = F.y + F.h - o.upperEnd * F.h, v = {
							...p.project(s, g, w),
							cameraDepth: p.cameraDepth(s, g, w),
							cameraWeight: p.cameraProjectionWeight(s, g, w)
						}, y = {
							...p.project(c, _, w),
							cameraDepth: p.cameraDepth(c, _, w),
							cameraWeight: p.cameraProjectionWeight(c, _, w)
						};
						n != null && Math.hypot(n.at(-1).x - v.x, n.at(-1).y - v.y) <= 1e-8 ? n.push(y) : (n && n.length >= 2 && q.push(n), n = [v, y]);
						let b = De(p, s, c, u, h, g, _, m.near, m.far, f, r === 0 && a === 0 && o.startT === 0, r + 2 === t.upper.length && a + 1 === i.length && o.endT === 1);
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
								paint: () => je(e, t)
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
				for (let n = 0; n < y; n++) {
					let r = j[n], i = r == null ? NaN : N.fraction(r);
					if (r == null || !Number.isFinite(i)) {
						C === "gap" && t && (e.push(t), t = null);
						continue;
					}
					t ??= [], t.push({
						x: F.x + Z(n, y, S, b) * F.w,
						fraction: i
					});
				}
				t && e.push(t);
				let n = (e) => {
					let t = Math.max(0, Math.min(1, e.fraction)), n = F.y + F.h - t * F.h;
					return {
						...p.project(e.x, n, w),
						cameraDepth: p.cameraDepth(e.x, n, w),
						cameraWeight: p.cameraProjectionWeight(e.x, n, w)
					};
				}, r = (e) => {
					e && e.path.length >= 2 && J.push(e);
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
						let o = e[t], s = e[t + 1], c = (e) => p.project(e.x, F.y + F.h - e.fraction * F.h, w), l = c(o), u = c(s), d = Math.hypot(u.x - l.x, u.y - l.y), f = Number.isFinite(d) ? d : Math.hypot(s.x - o.x, (s.fraction - o.fraction) * F.h), m = B(o.fraction, s.fraction);
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
			let ee = t.chartType.toLowerCase().includes("area"), te = c.lineHidden != null || c.lineColor != null || c.lineWidthEmu != null || c.chartexStyle?.lineHidden != null || c.chartexStyle?.lineColors?.some(Boolean) || c.chartexStyle?.lineWidthEmu != null || c.chartexStyle?.lineDash != null || c.chartexStyle?.lineCap != null || c.chartexStyle?.lineJoin != null;
			if (c.lineHidden !== !0 && (!ee || te)) {
				let t = c.lineColor ? `#${c.lineColor}` : xe(f, .7), n = c.lineWidthEmu ? Math.max(.5, c.lineWidthEmu / g) * r : ee ? .75 * r : Math.max(1, 2 * r), i = x(c.chartexStyle?.lineDash ?? "solid", n), a = c.chartexStyle?.lineCap === "rnd" ? "round" : c.chartexStyle?.lineCap === "sq" ? "square" : "butt", o = c.chartexStyle?.lineJoin === "round" || c.chartexStyle?.lineJoin === "bevel" ? c.chartexStyle.lineJoin : "miter", s = (r, s, c = s, u = 0) => {
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
						paint: () => Me(e, n, t)
					});
				};
				if (ee) for (let e of q) s(e, a);
				else for (let e of J) s(e.path, e.startClipped ? "butt" : a, e.endClipped ? "butt" : a, e.dashOffset);
			}
			let Y = c.dataPointOverrides?.some((e) => e.markerSymbol != null && e.markerSymbol !== "none") === !0;
			if (t.chartType.toLowerCase().includes("line") && (c.showMarker === !0 || Y)) for (let t = 0; t < E.length; t++) {
				let n = E[t];
				if (!n) continue;
				let i = R[s].get(t), a = i?.markerSymbol ?? (c.showMarker === !0 ? c.markerSymbol ?? "circle" : "none");
				if (a === "none") continue;
				let o = i?.markerSize ?? c.markerSize ?? 5, l = i?.markerFill ?? c.markerFill ?? c.color ?? he[s % he.length], d = i?.markerLine ?? c.markerLine ?? c.lineColor ?? c.color ?? he[s % he.length], f = (i?.markerLineWidthEmu ?? c.markerLineWidthEmu) == null ? Math.max(.75, c.lineWidthEmu == null ? r : c.lineWidthEmu / g * r) : Math.max(.25, (i?.markerLineWidthEmu ?? c.markerLineWidthEmu ?? 0) / g * r);
				u.push(() => Ie(e, n, a, Math.max(2, o) * r, l === "00000000" ? "transparent" : `#${l}`, `#${d}`, f));
			}
			for (let i = 0; i < E.length; i++) {
				let a = E[i];
				if (!a) continue;
				let o = O(s, i), l = R[s].get(i), u = l?.markerSize ?? c.markerSize ?? 5, d = z[s].get(i);
				Re(t, c, d) && L.push(() => Le(e, t, c, s, i, _ ? o / 100 : o, a, n, r, c.showMarker === !0 || l?.markerSymbol != null ? u * r / 2 : 0, void 0, d, "t", a, !0, t.valAxisDisplayUnits));
			}
		}
		if (d) return Ne(e, n), !0;
		for (let e of q(l)) e.paint();
		for (let e of u) e();
	}
	Je(e, t, p, N, y, S, b, r, a ? "horizontal" : "vertical"), tt(e, t, p, N, y, S, b, a ? "horizontal" : "vertical", r), He(e, t, n, p, N, y, S, b, a ? "horizontal" : "vertical", r);
	let H = et(t, p, N, y, S, b, a ? "horizontal" : "vertical"), U = (e, t) => {
		if (t !== "low" && t !== "high") return H;
		let n = p.topology.nearDepth, r = H.axisX, i = H.axisY;
		if (e === "value" === a) {
			let e = F.y, r = F.y + F.h, a = p.project(F.x + F.w / 2, e, n), o = p.project(F.x + F.w / 2, r, n), s = a.y >= o.y ? e : r;
			i = t === "low" ? s : s === e ? r : e;
		} else {
			let e = F.x, i = F.x + F.w, a = p.project(e, F.y + F.h / 2, n), o = p.project(i, F.y + F.h / 2, n), s = a.x <= o.x ? e : i;
			r = t === "low" ? s : s === e ? i : e;
		}
		return {
			axisX: r,
			axisY: i,
			depth: n,
			horizontalStart: p.project(F.x, i, n),
			horizontalEnd: p.project(F.x + F.w, i, n),
			verticalStart: p.project(r, F.y + F.h, n),
			verticalEnd: p.project(r, F.y, n)
		};
	}, W = U("value", t.valAxisTickLabelPos), G = U("category", t.catAxisTickLabelPos), K = d(t.valAxisFontSizeHpt, r) ?? 9 * r;
	if (e.font = `${t.valAxisFontItalic ? "italic " : ""}${t.valAxisFontBold ? "bold " : ""}${K}px ${Ce(t.valAxisFontFace)}`, e.fillStyle = t.valAxisFontColor ? `#${t.valAxisFontColor}` : "#595959", e.textAlign = a ? "center" : "right", e.textBaseline = a ? "top" : "middle", !t.valAxisHidden && t.valAxisTickLabelPos !== "none") {
		let { axisX: n, axisY: i, depth: o } = W, s = p.project(F.x + F.w / 2, F.y + F.h / 2, o), l = Ye(a ? W.horizontalStart : W.verticalStart, a ? W.horizontalEnd : W.verticalEnd, s, a ? "vertical" : "horizontal");
		e.textAlign = Math.abs(l.x) < .2 ? "center" : l.x < 0 ? "right" : "left", e.textBaseline = Math.abs(l.y) < .2 ? "middle" : l.y < 0 ? "bottom" : "top";
		let u = $e(t.valAxisMajorTickMark, t.valAxisLineHidden, r, 5), d = t.valAxisDisplayUnits?.divisor;
		for (let r of N.majorTicks) {
			let s = a ? p.project(F.x + N.fraction(r) * F.w, i, o) : p.project(n, F.y + F.h - N.fraction(r) * F.h, o);
			e.fillText(c(_ ? r / 100 : d != null && Number.isFinite(d) && d > 0 ? r / d : r, _ ? t.valAxisFormatCode ?? "0%" : t.valAxisFormatCode, t.date1904), s.x + l.x * u, s.y + l.y * u);
		}
	}
	let J = d(t.catAxisFontSizeHpt, r) ?? 9 * r;
	if (e.font = `${t.catAxisFontItalic ? "italic " : ""}${t.catAxisFontBold ? "bold " : ""}${J}px ${Ce(t.catAxisFontFace)}`, e.fillStyle = t.catAxisFontColor ? `#${t.catAxisFontColor}` : "#595959", !t.catAxisHidden && t.catAxisTickLabelPos !== "none") {
		let n = $e(t.catAxisMajorTickMark, t.catAxisLineHidden, r, 6), i = Array.from({ length: y }, (e, n) => l(String(v[n] ?? n + 1), t.catAxisFormatCode, t.date1904)), o = Pe(t);
		if (o == null && (o = 0, !a && y > 1)) {
			let t = Infinity, n = null, r = G.axisY;
			for (let e = 0; e < y; e++) {
				let i = Z(e, y, S, b), a = p.project(F.x + i * F.w, r, p.topology.nearDepth);
				n && (t = Math.min(t, Math.hypot(a.x - n.x, a.y - n.y))), n = a;
			}
			Math.max(0, ...i.map((t) => e.measureText(t).width)) > t * .9 && (o = -Math.PI / 4);
		}
		let s = Math.max(1, Math.floor(t.catAxisTickLabelSkip ?? 1));
		for (let t = 0; t < y; t += s) {
			let r = Z(t, y, S, b), { axisX: s, axisY: c, depth: l } = G, u = a ? p.project(s, F.y + Z(t, y, S, b) * F.h, l) : p.project(F.x + r * F.w, c, l);
			if (a) {
				let r = p.project(s, F.y + F.h / 2, l), a = p.project(F.x + F.w / 2, F.y + F.h / 2, l), o = r.x <= a.x;
				e.textAlign = o ? "right" : "left", e.textBaseline = "middle", e.fillText(i[t], u.x + (o ? -n : n), u.y);
			} else {
				let r = p.project(F.x + F.w / 2, F.y + F.h / 2, l), s = Ye(G.horizontalStart, G.horizontalEnd, r, "vertical");
				Fe(e, i[t], u, o, a, s.y < 0 ? -1 : 1, n);
			}
		}
	}
	Ve(e, t, n, u, a, r);
	for (let e of L) e();
	return Ue(e, t, f, r), !0;
}
function rt(e, t, n, r) {
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
	let { plot: c, legend: l } = ze(e, t, n, r, "radial"), u = j({
		...t.threeD,
		rotationY: t.threeD.rotationY ?? 0,
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
	let _ = m.x + m.w / 2, v = m.y + m.h / 2, b = .5, S = h * .3, C = 0, T = [], E = new Map(i.dataLabelOverrides?.map((e) => [e.idx, e]) ?? []), D = Math.max(48, Math.min(128, Math.ceil(Math.PI * 2 * h / 4)));
	for (let e of a) {
		let n = e.value / o / s, r = Ge(t.firstSliceAngle, C, n), a = f.get(e.index), c = a?.fillHidden === !0 ? "00000000" : a?.color ?? i.dataPointColors?.[e.index] ?? i.color, l = r.middle, d = a?.explosion != null && Number.isFinite(a.explosion) ? Math.max(0, Math.min(100, a.explosion)) / 100 : 0, p = _ + Math.cos(l) * h * d, m = b + Math.sin(l) * h * d / u.modelDepth, g = Math.max(2, Math.ceil(D * n)), y = z({
			centerX: p,
			centerY: v,
			centerDepth: m,
			radius: h,
			modelDepth: u.modelDepth,
			thickness: S,
			startAngle: r.start,
			endAngle: r.end,
			segments: g
		});
		if (!y) {
			C += n;
			continue;
		}
		T.push({
			index: e.index,
			start: r.start,
			end: r.end,
			color: c === "00000000" ? "transparent" : c ? `#${c}` : ye(e.index),
			value: e.value,
			percentValue: n,
			centerX: p,
			centerDepth: m,
			segments: g,
			mesh: y,
			lineHidden: a?.lineHidden ?? i.lineHidden ?? !1,
			lineColor: a?.lineColor ?? i.lineColor ?? null,
			lineWidthEmu: a?.lineWidthEmu ?? i.lineWidthEmu ?? null,
			lineDash: a?.lineDash ?? i.chartexStyle?.lineDash ?? "solid",
			lineCap: i.chartexStyle?.lineCap === "rnd" ? "round" : i.chartexStyle?.lineCap === "sq" ? "square" : "butt",
			lineJoin: i.chartexStyle?.lineJoin === "round" || i.chartexStyle?.lineJoin === "bevel" ? i.chartexStyle.lineJoin : "miter"
		}), C += n;
	}
	u = O(u, T.flatMap((e) => e.mesh.vertices), c, .08);
	let k = [], A = {
		remaining: ee,
		exceeded: !1
	}, M = (e) => {
		let t = e.lineWidthEmu == null ? .75 * r : Math.max(.25, e.lineWidthEmu / g * r);
		return !e.lineHidden && e.lineColor ? {
			color: `#${e.lineColor}`,
			width: t,
			dash: x(e.lineDash, t),
			cap: e.lineCap,
			join: e.lineJoin
		} : void 0;
	}, N = T.flatMap((e) => ke(u, e.mesh, e.color, void 0, A)), P = [], F = T.map(M), I = F[0], L = (e) => e == null ? null : [
		e.color,
		e.width,
		e.dash.join(","),
		e.cap,
		e.join
	].join("|"), R = I != null && F.every((e) => L(e) === L(I)) && T.every((e) => Math.abs(e.centerX - _) < 1e-9 && Math.abs(e.centerDepth - b) < 1e-9);
	if (R) P.push(...Ae(u, T, v, h, S, I, A));
	else for (let e = 0; e < T.length; e++) {
		let t = F[e];
		t && P.push(...ke(u, T[e].mesh, "transparent", t, A, !0));
	}
	if (A.exceeded) return Ne(e, n), !0;
	if (R) {
		for (let t of q(N)) je(e, t);
		for (let t of q(P)) je(e, t);
	} else for (let t of q([...N, ...P])) je(e, t);
	for (let n of T) {
		let a = (n.start + n.end) / 2, o = E.get(n.index);
		if (Re(t, i, o)) {
			let s = i.seriesDataLabels, l = d(o?.fontSizeHpt ?? s?.fontSizeHpt ?? t.dataLabelFontSizeHpt, r) ?? 9 * r;
			e.font = `${o?.fontBold ?? s?.fontBold ?? t.dataLabelFontBold ? "bold " : ""}${l}px ${X(t, o?.fontFace ?? s?.fontFace ?? t.dataLabelFontFace)}`;
			let f = w({
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
			}), p = X(t, o?.fontFace ?? s?.fontFace ?? t.dataLabelFontFace), m = o?.text && o.richRuns?.length ? y(e, {
				runs: o.richRuns,
				ptToPx: r,
				fontFamily: p,
				fallbackBold: o.fontBold ?? s?.fontBold ?? t.dataLabelFontBold ?? !1,
				fontFamilyForFace: (e) => X(t, e)
			}, l, `#${o.fontColor ?? s?.fontColor ?? i.labelColor ?? t.dataLabelFontColor ?? "111111"}`) : null, g = o?.position ?? s?.position ?? t.dataLabelPosition, _ = v - S / 2, b = v + S / 2, x = u.cameraDepth(n.centerX, _, n.centerDepth) >= u.cameraDepth(n.centerX, b, n.centerDepth) ? _ : b, C = 0, T = null;
			for (let e = 0; e <= 12; e++) {
				let t = n.start + (n.end - n.start) * e / 12, r = u.project(n.centerX + Math.cos(t) * h * .64, x, n.centerDepth + Math.sin(t) * h * .64 / u.modelDepth);
				T && (C += Math.hypot(r.x - T.x, r.y - T.y)), T = r;
			}
			let E = (g == null || g === "bestFit") && (n.percentValue === 0 || C < (m?.width ?? e.measureText(f).width)) || g === "outEnd", D = h * (E ? 1.12 : .64), O = u.project(n.centerX + Math.cos(a) * D, x, n.centerDepth + Math.sin(a) * D / u.modelDepth), A = u.project(n.centerX + Math.cos(a) * h, x, n.centerDepth + Math.sin(a) * h / u.modelDepth);
			k.push(() => Le(e, t, i, 0, n.index, n.value, O, c, r, 0, n.percentValue, o, "ctr", A, E));
		}
	}
	for (let e of k) e();
	let B = i.categories?.length ? i.categories : t.categories, V = Array.from({ length: B.length }, (e, t) => {
		let n = f.get(t), r = n?.fillHidden === !0 ? "00000000" : n?.color ?? i.dataPointColors?.[t] ?? i.color;
		return r === "00000000" ? "00000000" : xe(r ? `#${r}` : ye(t), .8).replace(/^#/, "");
	});
	return Ue(e, {
		...t,
		categories: B,
		series: [{
			...i,
			categories: B,
			dataPointColors: V
		}]
	}, l, r, !0), !0;
}
function it(e, t, n, r) {
	return t.threeD ? rt(e, t, n, r) ? !0 : ge.has(t.chartType) ? nt(e, t, n, r) : !1 : !1;
}
//#endregion
//#region src/three-d.ts
var at = T({ render: it }, "threeD");
//#endregion
export { at as threeD };
