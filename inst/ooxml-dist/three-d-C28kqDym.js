import { C as e, r as t, y as n } from "./chart-number-format-qLhnk6hj.js";
//#region packages/core/src/chart/axis-scale.ts
function r(e, t = {
	min: 0,
	max: 1
}) {
	let n = Infinity, r = -Infinity;
	for (let t of e) t == null || !Number.isFinite(t) || (t < n && (n = t), t > r && (r = t));
	return Number.isFinite(n) && Number.isFinite(r) ? {
		min: n,
		max: r
	} : t;
}
function i(e, t = 5) {
	if (e === 0) return 1;
	let n = e / t, r = 10 ** Math.floor(Math.log10(n)), i = n / r;
	return (i < 1.5 ? 1 : i < 3.5 ? 2 : i < 7.5 ? 5 : 10) * r;
}
function a(e, t, n, r) {
	let i = Number.isFinite(e) ? e : 0, a = Number.isFinite(t) ? t : 100, o = a > i ? a - i : 100, s = i < 0 && a > 0, l = n === "horizontal" || r == null || !Number.isFinite(r) || r < 120 ? s ? 4 : 5 : 10;
	return c(a > i ? d(i, a, l) : o / l);
}
function o(e, t, n) {
	let r = Number.isFinite(e) ? e : 0, i = Number.isFinite(t) ? t : 1, a = i > r ? null : 1, o = n != null && Number.isFinite(n) ? n < 45 ? 4 : n < 90 ? 8 : 10 : 8;
	return c(i > r ? d(r, i, o) : (a ?? 1) / o);
}
function s(e, t, n) {
	let r = Number.isFinite(e) ? e : 0, i = Number.isFinite(t) ? t : 1;
	return c((i > r ? i - r : 1) / (n != null && Number.isFinite(n) && n > 0 ? Math.max(5, Math.round(n / 28)) : 5));
}
function c(e) {
	if (!(e > 0) || !isFinite(e)) return 1;
	let t = 10 ** Math.floor(Math.log10(e));
	if (!(t > 0) || !isFinite(t)) return e;
	let n = e / t, r = n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10;
	return Math.min(Number.MAX_VALUE, r * t);
}
function l(e) {
	return e != null && isFinite(e) ? e : null;
}
function u(e) {
	return e != null && isFinite(e) && e > 0 ? e : null;
}
function d(e, t, n) {
	let r = t - e, i = isFinite(r) ? r / n : t / n - e / n;
	return i > 0 && isFinite(i) ? i : r > 0 && isFinite(r) ? Number.MIN_VALUE : Number.MAX_VALUE;
}
function f(e, t, n) {
	if (!isFinite(e) || !isFinite(t) || !(t >= e) || !(n > 0) || !isFinite(n)) return 0;
	let r = t - e, i = isFinite(r) ? r / n : t / n - e / n;
	return !isFinite(i) || i > 2 ** 53 - 1 ? Infinity : Math.max(1, Math.floor(i + 1e-9) + 1);
}
function p(e, t, n, r, i) {
	let a = f(e, t, n);
	if (a === 0 || a > 512 && r === "skip") return [];
	let o = Math.min(a, 512), s = [], c = t - e, l = Math.max(Math.abs(n), isFinite(c) ? Math.abs(c) : Math.max(Math.abs(e), Math.abs(t))) * 1e-9, u = -Infinity;
	for (let r = 0; r < o; r++) {
		let a = r * n, o = e + a;
		if ((!isFinite(a) || !isFinite(o) || r > 0 && !(o > u)) && (o = (e / n + r) * n), !isFinite(o) || o > t + l || r > 0 && !(o > u)) break;
		if (u = o, i != null) {
			if (o >= t - l) break;
			let n = o - e, r = isFinite(n) ? n / i : o / i - e / i;
			if (isFinite(r) && Math.abs(r - Math.round(r)) <= 1e-8) continue;
		}
		s.push(o);
	}
	return s;
}
function m(e) {
	let t = isFinite(e.dataMin) ? e.dataMin : 0, n = isFinite(e.dataMax) ? e.dataMax : 1;
	t > n && ([t, n] = [n, t]);
	let r, a, o;
	if (t === 0 && n === 0) r = 0, a = 1, o = .1;
	else {
		t === n && (t = Math.min(0, t), n = Math.max(0, n));
		let e = t >= 0 && (t === 0 || n > 1.2 * t), i = n <= 0 && (n === 0 || Math.abs(t) > 1.2 * Math.abs(n)), s = e ? 0 : t, l = i ? 0 : n, u = l - s, d = isFinite(u) ? u * .05 : l * .05 - s * .05, f = e ? 0 : t - d, p = i ? 0 : n + d;
		o = c(p / 10 - f / 10), r = Math.floor(f / o) * o, a = Math.ceil(p / o) * o, (!isFinite(r) || !isFinite(a) || !(a > r)) && (r = Math.min(t, 0), a = Math.max(n, r + o));
	}
	let s = l(e.explicitMin), m = l(e.explicitMax), h = u(e.majorUnit), g = s ?? (h == null ? r : Math.floor(r / h) * h), _ = m ?? (h == null ? a : Math.ceil(a / h) * h), v = o;
	if (h == null && s != null && m != null && m > s) {
		if (e.axisOrientation === "horizontal") v = c(d(s, m, e.axisLenPt != null && isFinite(e.axisLenPt) && e.axisLenPt > 0 ? Math.max(5, Math.round(e.axisLenPt / 38)) : 8));
		else if (e.axisOrientation === "vertical") {
			let t = e.axisLenPt != null && isFinite(e.axisLenPt) && e.axisLenPt > 0 ? Math.max(5, Math.round(e.axisLenPt / 28)) : 7;
			v = Math.max(c(d(s, m, 10)), Math.min(Number.MAX_VALUE, i(d(s, m, t), 1)));
		}
	}
	let y = h ?? v;
	h == null && f(g, _, y) > 512 && (y = c(_ / 511 - g / 511));
	let b = u(e.minorUnit);
	e.needMinor && h == null && b == null && f(g, _, y / 5) > 512 && (y = c(_ / 102 - g / 102));
	let x = y / 5, S = e.needMinor ? b ?? (x > 0 && isFinite(x) ? x : y) : null, C = p(g, _, y, h == null ? "skip" : "truncate"), w = S == null ? [] : p(g, _, S, "skip", y);
	return {
		min: g,
		max: _,
		majorUnit: y,
		minorUnit: S,
		majorTicks: C,
		minorTicks: w
	};
}
function h(e, t, n, r) {
	let i, a = r?.logBase;
	if (a != null && isFinite(a) && a >= 2 && t > 0 && n > 0) {
		let r = Math.log(t), a = Math.log(n) - r;
		i = a === 0 ? 0 : (Math.log(Math.max(e, Number.MIN_VALUE)) - r) / a;
	} else {
		let r = n - t;
		if (r === 0) i = 0;
		else if (Number.isFinite(r) && Number.isFinite(e - t)) i = (e - t) / r;
		else {
			let r = Math.max(Math.abs(e), Math.abs(t), Math.abs(n)), a = n / r - t / r;
			i = a === 0 ? 0 : (e / r - t / r) / a;
		}
	}
	return r?.reversed ? 1 - i : i;
}
function g(e, t, n, r, i) {
	let a = isFinite(n) && n >= 2 ? n : 10, o = (e) => Math.log(e) / Math.log(a), s = t > 0 ? t : 1, c = Math.floor(o(e > 0 ? e : s)), l = Math.ceil(o(s)), u = (e) => {
		let t = a ** +e;
		return t === 0 ? Number.MIN_VALUE : isFinite(t) ? t : Number.MAX_VALUE;
	}, d = r ?? u(c), f = i ?? u(Math.max(l, c + 1)), p = [], m = Math.ceil(o(d) - 1e-9), h = Math.floor(o(f) + 1e-9);
	if (!isFinite(m) || !isFinite(h) || h < m) return {
		min: d,
		max: f,
		lines: p
	};
	let g = h - m + 1, _ = Math.max(1, Math.ceil((g - 1) / 511)), v = Math.min(512, Math.floor((g - 1) / _) + 1);
	for (let e = 0; e < v; e++) {
		let t = u(m + e * _);
		t >= d && t <= f && (p.length === 0 || t > p[p.length - 1]) && p.push(t);
	}
	let y = u(h);
	return p.length < 512 && y >= d && y <= f && y > (p[p.length - 1] ?? 0) && p.push(y), {
		min: d,
		max: f,
		lines: p
	};
}
function _(e) {
	let t = e.logBase;
	if (t != null && Number.isFinite(t) && t >= 2) {
		let { min: n, max: r, lines: i } = g(e.dataMin, e.dataMax, t, l(e.explicitMin), l(e.explicitMax));
		return {
			min: n,
			max: r,
			majorUnit: i.length > 1 ? i[1] - i[0] : r - n,
			minorUnit: null,
			majorTicks: i,
			minorTicks: [],
			fraction: (i) => h(i, n, r, {
				logBase: t,
				reversed: e.reversed
			})
		};
	}
	let n = m(e);
	return {
		...n,
		fraction: (t) => h(t, n.min, n.max, { reversed: e.reversed })
	};
}
function v(e, t, n) {
	let r = Math.min(e.length, t.length);
	if (r < 2) return null;
	let i = 0, a = 0, o = 0, s = 0;
	for (let n = 0; n < r; n++) i += e[n], a += t[n], o += e[n] * e[n], s += e[n] * t[n];
	let c, l;
	if (n != null && isFinite(n)) c = o === 0 ? 0 : (s - n * i) / o, l = n;
	else {
		let e = r * o - i * i;
		c = e === 0 ? 0 : (r * s - i * a) / e, l = (a - c * i) / r;
	}
	let u = a / r, d = 0, f = 0;
	for (let n = 0; n < r; n++) {
		let r = t[n] - (c * e[n] + l);
		d += r * r;
		let i = t[n] - u;
		f += i * i;
	}
	let p = f === 0 ? +(d === 0) : 1 - d / f;
	return {
		slope: c,
		intercept: l,
		rSquared: p
	};
}
function y(e, t, n, r) {
	let i = Math.min(e.length, t.length);
	if (i < 2) return {
		xs: [],
		ys: []
	};
	if (n === "linear") {
		let n = v(e, t, r?.intercept);
		if (!n) return {
			xs: [],
			ys: []
		};
		let a = e[0], o = e[i - 1];
		return {
			xs: [a, o],
			ys: [n.slope * a + n.intercept, n.slope * o + n.intercept]
		};
	}
	if (n === "movingAvg") {
		let n = Math.max(2, Math.round(r?.period ?? 2));
		if (i < n) return {
			xs: [],
			ys: []
		};
		let a = [], o = [];
		for (let r = n - 1; r < i; r++) {
			let i = 0;
			for (let e = 0; e < n; e++) i += t[r - e];
			a.push(e[r]), o.push(i / n);
		}
		return {
			xs: a,
			ys: o
		};
	}
	let a = [];
	for (let r = 0; r < i; r++) {
		let i = e[r], o = t[r];
		!Number.isFinite(i) || !Number.isFinite(o) || n === "log" && i <= 0 || n === "exp" && o <= 0 || n === "power" && (i <= 0 || o <= 0) || a.push({
			x: i,
			y: o
		});
	}
	if (a.length < 2) return {
		xs: [],
		ys: []
	};
	let o = Infinity, s = -Infinity;
	for (let e of a) o = Math.min(o, e.x), s = Math.max(s, e.x);
	if (!Number.isFinite(o) || !Number.isFinite(s) || s <= o) return {
		xs: [],
		ys: []
	};
	let c = Number.isFinite(r?.backward) ? Math.max(0, r?.backward ?? 0) : 0, l = Number.isFinite(r?.forward) ? Math.max(0, r?.forward ?? 0) : 0, u = o - c, d = s + l;
	if ((n === "log" || n === "power") && (u = Math.max(Number.MIN_VALUE, u)), !Number.isFinite(u) || !Number.isFinite(d) || d <= u) return {
		xs: [],
		ys: []
	};
	let f = (e) => {
		let t = [], n = [];
		for (let r = 0; r <= 64; r++) {
			let i = r / 64, a = u * (1 - i) + d * i, o = e(a);
			if (!Number.isFinite(a) || !Number.isFinite(o)) return {
				xs: [],
				ys: []
			};
			t.push(a), n.push(o);
		}
		return {
			xs: t,
			ys: n
		};
	};
	if (n === "exp" || n === "log" || n === "power") {
		let e = v(a.map((e) => n === "log" || n === "power" ? Math.log(e.x) : e.x), a.map((e) => n === "exp" || n === "power" ? Math.log(e.y) : e.y));
		if (!e || ![e.slope, e.intercept].every(Number.isFinite)) return {
			xs: [],
			ys: []
		};
		if (n === "exp") {
			let t = Math.exp(e.intercept);
			return f((n) => t * Math.exp(e.slope * n));
		}
		if (n === "log") return f((t) => e.slope * Math.log(t) + e.intercept);
		let t = Math.exp(e.intercept);
		return f((n) => t * n ** e.slope);
	}
	if (n === "poly") {
		let e = Math.min(6, a.length - 1, Math.max(2, Math.round(r?.order ?? 2)));
		if (e < 2) return {
			xs: [],
			ys: []
		};
		let t = o / 2 + s / 2, n = Math.max(Math.abs(o - t), Math.abs(s - t));
		if (!Number.isFinite(t) || !Number.isFinite(n) || n <= 0) return {
			xs: [],
			ys: []
		};
		let i = a.length, c = e + 1, l = Array.from({ length: c }, () => Array(i).fill(0));
		for (let e = 0; e < i; e++) {
			let r = (a[e].x - t) / n, i = 1;
			for (let t = 0; t < c; t++) l[t][e] = i, i *= r;
		}
		let u = [], d = Array.from({ length: c }, () => Array(c).fill(0)), p = Array(c).fill(0);
		for (let e = 0; e < c; e++) {
			let t = l[e].slice();
			for (let n = 0; n < e; n++) {
				let r = 0;
				for (let e = 0; e < i; e++) r += u[n][e] * t[e];
				d[n][e] = r;
				for (let e = 0; e < i; e++) t[e] -= r * u[n][e];
			}
			let n = 0;
			for (let e of t) n += e * e;
			let r = Math.sqrt(n);
			if (!Number.isFinite(r) || r <= 2 ** -52 * Math.sqrt(i)) return {
				xs: [],
				ys: []
			};
			d[e][e] = r;
			let o = t.map((e) => e / r);
			u.push(o);
			let s = 0;
			for (let e = 0; e < i; e++) s += o[e] * a[e].y;
			if (!Number.isFinite(s)) return {
				xs: [],
				ys: []
			};
			p[e] = s;
		}
		let m = Array(c).fill(0);
		for (let e = c - 1; e >= 0; e--) {
			let t = p[e];
			for (let n = e + 1; n < c; n++) t -= d[e][n] * m[n];
			if (m[e] = t / d[e][e], !Number.isFinite(m[e])) return {
				xs: [],
				ys: []
			};
		}
		return f((r) => {
			let i = (r - t) / n, a = m[e];
			for (let t = e - 1; t >= 0; t--) a = a * i + m[t];
			return a;
		});
	}
	return {
		xs: [],
		ys: []
	};
}
//#endregion
//#region packages/core/src/units.ts
var b = 12700, x = 9525, S = 4 / 3, C = 91440, w = 45720;
//#endregion
//#region packages/core/src/chart/axis-style.ts
function T(e, t) {
	return e ? Math.max(.5, e / b) * t : 1;
}
function ee(e, t, n) {
	return {
		color: e ? `#${e}` : "#aaa",
		width: T(t, n)
	};
}
function E(e, t, n) {
	return {
		color: e ? `#${e}` : "#e0e0e0",
		width: t ? T(t, n) : .5
	};
}
function te(e) {
	return e.catAxisCrossBetween !== "midCat";
}
//#endregion
//#region packages/core/src/chart/text-elide.ts
var D = "…";
function O(e, t, n) {
	if (t === "" || n <= 0) return "";
	if (e.measureText(t).width <= n) return t;
	if (e.measureText(D).width > n) return "";
	let r = 0, i = t.length - 1, a = 0;
	for (; r <= i;) {
		let o = r + i >> 1;
		e.measureText(t.slice(0, o) + D).width <= n ? (a = o, r = o + 1) : i = o - 1;
	}
	let o = a > 0 ? t.charCodeAt(a - 1) : 0;
	return o >= 55296 && o <= 56319 && a--, t.slice(0, a) + D;
}
//#endregion
//#region packages/core/src/chart/category-spacing.ts
function k(e, t, n, r = !1) {
	let i = Math.max(0, t - 1), a = Number.isFinite(e) ? Math.max(0, Math.min(i, e)) : 0, o = n ? (a + .5) / Math.max(1, t) : t === 1 ? .5 : a / i;
	return r ? 1 - o : o;
}
function A(e, t) {
	return e != null && Number.isFinite(e) ? Math.max(0, Math.min(500, e)) : t === "legacy" ? 150 : 33;
}
//#endregion
//#region packages/core/src/chart/rich-data-label.ts
var j = 4096, M = 4, N = j;
function ne(e, t, r, i) {
	let a = [[]], o = 0, s = (e) => {
		if (!e) return null;
		let t = e.startsWith("#") ? e.slice(1) : e;
		return /^[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?$/.test(t) ? `#${t}` : null;
	};
	outer: for (let c = 0; c < t.runs.length && c < N; c++) {
		let l = t.runs[c], u = n(l.fontSizeHpt, t.ptToPx) ?? r, d = l.fontFace?.trim().replaceAll("\"", ""), f = d && !d.startsWith("+") ? d : null, p = d && t.fontFamilyForFace ? t.fontFamilyForFace(d) : f ? `"${f}", Calibri, Arial, sans-serif` : t.fontFamily, m = `${l.bold ?? t.fallbackBold ? "bold " : ""}${u}px ${p}`, h = s(l.color) ?? i, g = "", _ = () => {
			g &&= (e.font = m, a[a.length - 1].push({
				text: g,
				font: m,
				fillStyle: h,
				width: e.measureText(g).width,
				fontSizePx: u
			}), "");
		}, v = !1;
		for (let e of l.text) {
			if (v && e === "\n") {
				v = !1;
				continue;
			}
			v = !1;
			let t = e === "\r" ? "\n" : e;
			if (e === "\r" && (v = !0), o >= j) {
				_();
				break outer;
			}
			if (o++, t === "\n") {
				if (_(), a.length >= M) break outer;
				a.push([]);
			} else g += t;
		}
		_();
	}
	if (!a.some((e) => e.length > 0)) return null;
	let c = a.map((e) => Math.max(r, ...e.map((e) => e.fontSizePx)) * 1.15), l = a.map((e) => e.reduce((e, t) => e + t.width, 0));
	return {
		lines: a,
		lineHeights: c,
		lineWidths: l,
		width: Math.max(0, ...l),
		height: c.reduce((e, t) => e + t, 0)
	};
}
function P(e, t, n, r, i = "center", a = "middle") {
	let o = a === "top" ? r : a === "bottom" ? r - t.height : r - t.height / 2;
	for (let r = 0; r < t.lines.length; r++) {
		let s = t.lines[r], c = t.lineWidths[r], l = i === "left" ? n : i === "right" ? n - c : n - c / 2, u = a === "top" ? o : a === "bottom" ? o + t.lineHeights[r] : o + t.lineHeights[r] / 2;
		for (let t of s) e.font = t.font, e.fillStyle = t.fillStyle, e.textAlign = "left", e.textBaseline = a, e.fillText(t.text, l, u), l += t.width;
		o += t.lineHeights[r];
	}
}
//#endregion
//#region packages/core/src/chart/data-label-content.ts
function re(e) {
	if (e.customText) return e.customText;
	let n = [];
	if (e.showCategory && e.category && n.push(e.category), e.showSeries && e.seriesName && n.push(e.seriesName), e.showValue && e.sourceValue != null) {
		let r = e.valueDivisor != null && Number.isFinite(e.valueDivisor) && e.valueDivisor > 0 ? e.valueDivisor : 1;
		n.push(t(e.sourceValue / r, e.formatCode ?? null, e.date1904));
	}
	return e.showPercent && e.percentRatio != null && n.push(t(e.percentRatio, e.percentFormatCode ?? e.formatCode ?? "0%", e.date1904)), n.filter((e) => e !== "").join(e.separator ?? e.defaultSeparator ?? " ");
}
//#endregion
//#region packages/core/src/chart/legend-frame.ts
function F(e, t, n, r) {
	if (!(!t.legendFillColor && !t.legendLineColor)) {
		if (e.save(), t.legendFillColor && (e.fillStyle = `#${t.legendFillColor}`, e.fillRect(n.x, n.y, n.w, n.h)), t.legendLineColor && n.w > 0 && n.h > 0) {
			let i = T(t.legendLineWidthEmu, r);
			e.strokeStyle = `#${t.legendLineColor}`, e.lineWidth = i, e.lineCap = "butt", e.lineJoin = "miter", e.setLineDash([]), e.strokeRect(n.x + i / 2, n.y + i / 2, Math.max(0, n.w - i), Math.max(0, n.h - i));
		}
		e.restore();
	}
}
//#endregion
//#region packages/core/src/chart/data-label-layout.ts
var I = (e) => [
	e.x,
	e.y,
	e.w,
	e.h
].every(Number.isFinite) && e.w > 0 && e.h > 0;
function L(e, t) {
	let n = Math.max(e.x, t.x), r = Math.max(e.y, t.y), i = Math.min(e.x + e.w, t.x + t.w), a = Math.min(e.y + e.h, t.y + t.h);
	return i > n && a > r ? {
		x: n,
		y: r,
		w: i - n,
		h: a - r
	} : null;
}
function R(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
function z(t, n, r, i, a, o = n) {
	if (!I(n) || !I(o) || !Number.isFinite(i) || i <= 0 || ![r.w, r.h].every(Number.isFinite) || r.w < 0 || r.h <= 0) return null;
	let s = i * .5, c = n, l, u, d = !1, f = "center", p = "middle";
	if (t.kind === "point") {
		if (![
			t.x,
			t.y,
			t.markerGap ?? 0
		].every(Number.isFinite)) return null;
		let e = s + Math.max(0, t.markerGap ?? 0);
		switch (l = t.x, u = t.y, t.position ?? "r") {
			case "l":
				l -= e + r.w / 2, f = "right";
				break;
			case "t":
				u -= e + r.h / 2, p = "bottom";
				break;
			case "b":
				u += e + r.h / 2, p = "top";
				break;
			case "ctr":
			case "inEnd":
			case "bestFit": break;
			default:
				l += e + r.w / 2, f = "left";
				break;
		}
	} else if (t.kind === "box") {
		if (![
			t.rect.x,
			t.rect.y,
			t.rect.w,
			t.rect.h
		].every(Number.isFinite) || t.rect.w <= 0 || t.rect.h <= 0) return null;
		let e = L(t.rect, n);
		if (!e) return null;
		let i = t.position ?? "ctr";
		l = e.x + e.w / 2, u = e.y + e.h / 2, i === "inBase" ? (c = {
			x: e.x + s,
			y: e.y + s,
			w: e.w - s,
			h: e.h - s
		}, l = c.x + r.w / 2, u = c.y + r.h / 2, f = "left", p = "top") : i === "inEnd" ? (c = {
			x: e.x + s,
			y: e.y,
			w: e.w - s,
			h: e.h - s
		}, l = c.x + r.w / 2, u = c.y + c.h - r.h / 2, f = "left", p = "bottom") : i === "l" ? (c = {
			x: e.x + s,
			y: e.y + s,
			w: e.w - s,
			h: e.h - s * 2
		}, l = c.x + r.w / 2, f = "left") : i === "r" || i === "outEnd" ? (c = {
			x: e.x,
			y: e.y + s,
			w: e.w - s,
			h: e.h - s * 2
		}, l = c.x + c.w - r.w / 2, f = "right") : i === "t" ? (c = {
			x: e.x + s,
			y: e.y + s,
			w: e.w - s * 2,
			h: e.h - s
		}, u = c.y + r.h / 2, p = "top") : i === "b" ? (c = {
			x: e.x + s,
			y: e.y,
			w: e.w - s * 2,
			h: e.h - s
		}, u = c.y + c.h - r.h / 2, p = "bottom") : c = {
			x: e.x + s,
			y: e.y + s,
			w: e.w - s * 2,
			h: e.h - s * 2
		};
	} else {
		if (![
			t.rect.x,
			t.rect.y,
			t.rect.w,
			t.rect.h
		].every(Number.isFinite) || t.rect.w < 0 || t.rect.h < 0) return null;
		let e = t.position ?? "outEnd", i = e === "inBase" || e === "inEnd" || e === "ctr";
		if (d = !i, i) {
			let e = L(t.rect, n);
			if (!e) return null;
			c = e;
		} else if (t.orientation === "vertical" && t.rect.w <= 0 || t.orientation === "horizontal" && t.rect.h <= 0) return null;
		let a = t.rect.x + t.rect.w / 2, o = t.rect.y + t.rect.h / 2;
		if (l = a, u = o, t.orientation === "vertical") {
			let n = t.negative ? t.rect.y + t.rect.h : t.rect.y, i = t.negative ? t.rect.y : t.rect.y + t.rect.h;
			e === "inBase" ? (u = i + (t.negative ? 1 : -1) * (s + r.h / 2), p = t.negative ? "top" : "bottom") : e === "inEnd" ? (u = n + (t.negative ? -1 : 1) * (s + r.h / 2), p = t.negative ? "bottom" : "top") : e !== "ctr" && (u = n + (t.negative ? 1 : -1) * (s + r.h / 2), p = t.negative ? "top" : "bottom");
		} else {
			let n = t.negative ? t.rect.x : t.rect.x + t.rect.w, i = t.negative ? t.rect.x + t.rect.w : t.rect.x;
			e === "inBase" ? (l = i + (t.negative ? -1 : 1) * (s + r.w / 2), f = t.negative ? "right" : "left") : e === "inEnd" ? (l = n + (t.negative ? 1 : -1) * (s + r.w / 2), f = t.negative ? "left" : "right") : e !== "ctr" && (l = n + (t.negative ? -1 : 1) * (s + r.w / 2), f = t.negative ? "right" : "left");
		}
	}
	let m = Math.max(2, i * .5), h = Math.max(2, i * .9);
	if (c.w < m || c.h < h) return null;
	let g = {
		x: l - Math.min(r.w, c.w) / 2,
		y: u - Math.min(r.h, c.h) / 2,
		w: Math.min(r.w, c.w),
		h: Math.min(r.h, c.h)
	};
	if (a) {
		let t = e(a, o, g);
		if (!t) return null;
		g = t, f = "center", p = "middle";
		let r = L(t, n);
		if (!r || (c = r, c.w < m || c.h < h)) return null;
	}
	let _ = Math.min(Math.max(m, g.w), c.w), v = Math.min(Math.max(h, g.h), c.h), y = _ / 2, b = v / 2, x = d || a ? g.x + g.w / 2 : R(g.x + g.w / 2, c.x + y, c.x + c.w - y), S = d || a ? g.y + g.h / 2 : R(g.y + g.h / 2, c.y + b, c.y + c.h - b);
	return [x, S].every(Number.isFinite) ? {
		x: f === "left" ? x - y : f === "right" ? x + y : x,
		y: p === "top" ? S - b : p === "bottom" ? S + b : S,
		textAlign: f,
		textBaseline: p,
		maxWidth: c.w,
		maxHeight: c.h,
		clip: c,
		rect: g
	} : null;
}
var B = 4096, V = 4;
function H(e, t, n) {
	if (n(e) <= t) return e;
	if (n("…") > t) return "";
	let r = 0, i = Array.from(e), a = i.length;
	for (; r < a;) {
		let e = Math.ceil((r + a) / 2);
		n(`${i.slice(0, e).join("")}…`) <= t ? r = e : a = e - 1;
	}
	return `${i.slice(0, r).join("")}…`;
}
function U(e) {
	let t = "", n = 0;
	for (let r of e) {
		if (n >= B) return {
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
function ie(e, t, n, r, i) {
	if (![
		t,
		n,
		r
	].every(Number.isFinite) || t <= 0 || n < r || r <= 0) return [];
	let a = Math.max(1, Math.min(V, Math.floor(n / r))), o = U(e), s = o.value.split(/\r?\n/), c = [], l = o.truncated, u = (e) => {
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
	return l && d.length > 0 && !d[d.length - 1].endsWith("…") && (d[d.length - 1] = H(`${d[d.length - 1]}…`, t, i)), d;
}
//#endregion
//#region packages/core/src/draw/dash.ts
function W(e, t) {
	return e.map((e) => e * t);
}
var G = {
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
function ae(e, t) {
	let n = G[e];
	return n ? W(n, t) : [];
}
var K = {
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
function q(e) {
	let t = K[e];
	return t ? W(t, 1) : [];
}
var oe = {
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
function J(e, t) {
	let n = oe[e];
	return n ? W(n, t) : [];
}
function Y(e, t) {
	let n = J(e, t);
	if (n.length > 0) return n;
	let r = e.trim().split(/[\s,]+/).map(Number);
	return r.length >= 2 && r.every((e) => Number.isFinite(e) && e >= 0) && r.some((e) => e > 0) ? (r.length % 2 != 0 && r.pop(), W(r, t)) : [];
}
var se = {
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
function ce(e, t) {
	let n = se[e];
	return n ? W(n, t) : [];
}
//#endregion
//#region packages/core/src/chart/material-color.ts
function X(e) {
	return e.rotationX === 15 && e.rotationY === 20 && e.rightAngleAxes === !1 && e.perspective === 30;
}
function Z(e) {
	return X(e) ? 2 : 1;
}
function le(e, t) {
	let n = e.replace(/^#/, "");
	if (!/^[0-9a-f]{6}$/i.test(n) || !Number.isFinite(t)) return e;
	let r = Math.max(0, t), i = (e) => Math.max(0, Math.min(255, Math.round(Number.parseInt(n.slice(e, e + 2), 16) * r))).toString(16).padStart(2, "0");
	return `#${i(0)}${i(2)}${i(4)}`.toUpperCase();
}
var ue = (e) => e <= .04045 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4, de = (e) => e <= .0031308 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - .055;
function fe(e, t) {
	let n = e.replace(/^#/, "");
	if (!/^[0-9a-f]{6}$/i.test(n) || !Number.isFinite(t)) return e;
	let r = Math.max(-1, Math.min(1, t)), i = (e) => {
		let t = ue(Number.parseInt(n.slice(e, e + 2), 16) / 255), i = r < 0 ? t * (1 + r) : t * (1 - r) + r;
		return Math.round(Math.max(0, Math.min(1, de(i))) * 255).toString(16).padStart(2, "0");
	};
	return `#${i(0)}${i(2)}${i(4)}`.toUpperCase();
}
function pe(e, t, n, r) {
	if (e.length < 6 || t < 0 || n <= 0) return null;
	let i = e[t % 6];
	if (!i) return null;
	if (![
		2,
		10,
		18,
		26,
		34,
		42
	].includes(r ?? -1)) return `#${i}`.toUpperCase();
	let a = Math.floor(n / 6);
	return fe(i, -.7 + 1.4 * ((Math.floor(t / 6) + 1) / (a + 2)));
}
function me(e) {
	if (!e) return 1;
	let t = e.z < 0 ? {
		x: -e.x,
		y: -e.y,
		z: -e.z
	} : e, n = {
		x: .24,
		y: .42,
		z: .88
	}, r = Math.hypot(n.x, n.y, n.z), i = Math.max(0, (t.x * n.x + t.y * n.y + t.z * n.z) / r);
	return Math.max(.48, Math.min(1.22, .48 + .78 * i));
}
//#endregion
//#region packages/core/src/chart/three-d.ts
function he(e, t, n, r, i) {
	let a = Number.isFinite(e) && e > 0 ? e : 0, o = Number.isFinite(t) ? $(t, 0, 500) : 150, s = Math.max(1, Math.trunc(r)), c = $(Math.trunc(n), 0, s - 1), l = i ? 1 : s, u = a / (l + o / 100);
	return {
		offset: (a - u * l) / 2 + (i ? 0 : c * u),
		size: u
	};
}
function ge(e, t, n) {
	if (![
		e,
		t,
		n
	].every(Number.isFinite)) return 1;
	let r = e >= 0 ? n : t;
	return 1 - Math.min(1, Math.abs(e) / Math.max(Number.MIN_VALUE, Math.abs(r)));
}
function _e(e, t, n, r = .06) {
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
	let d = $(Q(r, .06), 0, .45), f = n.w * (1 - 2 * d), p = n.h * (1 - 2 * d), m = Math.min(f / l, p / u);
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
var Q = (e, t) => typeof e == "number" && Number.isFinite(e) ? e : t, $ = (e, t, n) => Math.min(n, Math.max(t, e));
function ve(e, t, n = {}) {
	if (![
		t.x,
		t.y,
		t.w,
		t.h
	].every(Number.isFinite) || t.w <= 0 || t.h <= 0) return null;
	let r = $(Q(e.rotationX, 15), -90, 90), i = ($(Q(e.rotationY, 20), 0, 360) + 180) % 360 - 180, a = $(Q(e.depthPercent, 100), 20, 2e3), o = $(Q(e.perspective, 30), 0, 240), s = $(Q(e.gapDepthPercent, 150), 0, 500), c = e.heightPercent != null && Number.isFinite(e.heightPercent) ? $(e.heightPercent, 5, 500) : null, l = n.sceneHeightScale != null && Number.isFinite(n.sceneHeightScale) ? $(n.sceneHeightScale * 100, 5, 500) : null, u = c ?? l, d = t;
	if (u != null) {
		let e = u / 100, n = Math.min(t.w, t.h / e), r = n * e;
		d = {
			x: t.x + (t.w - n) / 2,
			y: t.y + (t.h - r) / 2,
			w: n,
			h: r
		};
	}
	let f = Math.PI / 180, p = $(Q(n.sceneDepthScale, .1), .01, 2), m = d.w * p * (a / 100), h = d.x + d.w / 2, g = d.y + d.h / 2, _ = -i * f, v = r * f, y = Math.cos(_), b = Math.sin(_), x = Math.cos(v), S = Math.sin(v), C = e.rightAngleAxes !== !0 && o > 0, w = $(o * .25, .25, 60) * f, T = $(Q(n.perspectiveTangentGain, 2), .25, 4), ee = Math.atan(T * Math.tan(w)), E = Math.hypot(d.w, d.h, m), te = C ? E * .5 / Math.tan(ee) : Infinity, D = (e, t, n) => {
		let r = e - h, i = g - t, a = (.5 - $(Number.isFinite(n) ? n : 0, 0, 1)) * m, o = y * r + b * a, s = -b * r + y * a;
		return {
			x: o,
			y: x * i - S * s,
			z: S * i + x * s
		};
	}, O = (e) => {
		if (e.length < 3) return null;
		let t = e.map((e) => D(e.x, e.y, e.depth)), n = t[0], r = null;
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
	}, k = -Infinity;
	for (let e of [d.x, d.x + d.w]) for (let t of [d.y, d.y + d.h]) for (let n of [0, 1]) k = Math.max(k, D(e, t, n).z);
	let A = C ? Math.max(te, k + E * .01) : Infinity, j = (e, t, n) => {
		let r = D(e, t, n);
		if (!C) return {
			x: r.x,
			y: -r.y
		};
		let i = A / Math.max(A * 1e-9, A - r.z);
		return {
			x: r.x * i,
			y: -r.y * i
		};
	}, M = [];
	for (let e of [d.x, d.x + d.w]) for (let t of [d.y, d.y + d.h]) for (let n of [0, 1]) M.push(j(e, t, n));
	let N = Math.min(...M.map((e) => e.x)), ne = Math.max(...M.map((e) => e.x)), P = Math.min(...M.map((e) => e.y)), re = Math.max(...M.map((e) => e.y)), F = Math.max(Number.MIN_VALUE, ne - N), I = Math.max(Number.MIN_VALUE, re - P), L = Math.min(t.w / F, t.h / I) * .94, R = t.x + (t.w - F * L) / 2 - N * L, z = t.y + (t.h - I * L) / 2 - P * L, B = (e, t, n) => {
		let r = j(e, t, n);
		return {
			x: R + r.x * L,
			y: z + r.y * L
		};
	}, V = { ...d }, H = B(h, g, 0), U = B(h, g, 1), ie = U.x - H.x, W = U.y - H.y, G = (e, t) => D(e === "x" ? t === "min" ? d.x : d.x + d.w : h, e === "y" ? t === "min" ? d.y : d.y + d.h : g, e === "depth" ? t === "min" ? 0 : 1 : .5).z, ae = G("x", "min") <= G("x", "max") ? "min" : "max", K = G("y", "min") <= G("y", "max") ? "min" : "max", q = G("depth", "min") >= G("depth", "max") ? 0 : 1, oe = +(q === 0), J = (e) => {
		let t = e === "min" ? d.x : d.x + d.w, n = B(t, d.y, q), r = B(t, d.y + d.h, q);
		return (n.x + r.x) / 2;
	}, Y = (e) => {
		let t = e === "min" ? d.y : d.y + d.h, n = B(d.x, t, q), r = B(d.x + d.w, t, q);
		return (n.y + r.y) / 2;
	}, se = J("min") <= J("max") ? "min" : "max", ce = Y("min") >= Y("max") ? "min" : "max", X = (e) => 1 / Math.max(1, Math.trunc(e)) / (1 + s / 100), Z = (e, t, n = !1) => n || t <= 1 ? .5 : ($(Math.trunc(e), 0, Math.max(0, t - 1)) + .5) / t;
	return {
		scene: d,
		front: V,
		depthX: ie,
		depthY: W,
		modelDepth: m,
		pieScaleY: $(Math.sin(Math.max(1, Math.abs(r)) * f) ** 1.15, .2, 1),
		pieThicknessFraction: .3 * Math.max(0, Math.cos(Math.abs(r) * f)),
		project: B,
		cameraDepth(e, t, n) {
			return D(e, t, n).z;
		},
		cameraProjectionWeight(e, t, n) {
			if (!C) return 1;
			let r = D(e, t, n).z;
			return 1 / Math.max(A * 1e-9, A - r);
		},
		cameraFacing(e) {
			let t = O(e);
			if (!t) return !1;
			let { normal: n, centroid: r } = t, i = C ? {
				x: -r.x,
				y: -r.y,
				z: A - r.z
			} : {
				x: 0,
				y: 0,
				z: 1
			}, a = n.x * i.x + n.y * i.y + n.z * i.z, o = Math.hypot(i.x, i.y, i.z);
			return o > 0 && a > o * 1e-10;
		},
		cameraNormal(e) {
			return O(e)?.normal ?? null;
		},
		topology: {
			farX: ae,
			farY: K,
			axisX: se,
			axisY: ce,
			nearDepth: q,
			farDepth: oe
		},
		seriesDepth: Z,
		prismDepth: X,
		prismInterval(e, t, n = !1) {
			let r = Z(e, t, n), i = X(n ? 1 : t) / 2;
			return {
				near: $(r - i, 0, 1),
				far: $(r + i, 0, 1)
			};
		}
	};
}
//#endregion
export { w as A, i as B, A as C, ee as D, te as E, o as F, _ as H, s as I, r as L, x as M, S as N, E as O, a as P, y as R, k as S, T, m as V, z as _, X as a, P as b, me as c, J as d, ce as f, ie as g, U as h, ge as i, b as j, C as k, Z as l, q as m, ve as n, pe as o, Y as p, he as r, le as s, _e as t, ae as u, F as v, O as w, ne as x, re as y, v as z };
