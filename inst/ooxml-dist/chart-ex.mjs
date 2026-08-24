import { $t as e, Bt as t, Ft as n, Gt as r, Ht as i, It as a, J as o, K as s, Lt as c, Ot as l, Pt as u, Qt as d, Zt as f, ct as p, en as m, f as h, r as g, t as _, u as v } from "./plot-area-frame-Dg1VIpUU.js";
import { T as y, w as b } from "./three-d-BYiWCNlz.js";
import { A as x, C as S, D as C, E as w, F as T, I as E, L as D, M as O, N as k, O as A, P as j, R as M, S as N, T as ee, _ as te, a as P, b as ne, c as re, d as F, f as I, g as ie, h as L, i as R, j as z, l as B, m as V, n as ae, o as oe, p as se, r as ce, s as le, t as ue, u as de, v as fe, w as pe, x as me, y as he } from "./renderer-DuopJE1K.js";
import { t as ge } from "./renderer-module-contract-0bO_5SC0.js";
function H(e) {
	return e != null && Number.isFinite(e) ? e : null;
}
function U(e) {
	return Object.is(e, -0) ? "0" : String(Number.isInteger(e) ? e : Number(e.toPrecision(6)));
}
function _e(e, t) {
	if (e.length > 1048576) return { kind: "tooManyInputPoints" };
	let n = t.intervalClosed === "r" ? "r" : "l", r = H(t.underflow), i = H(t.overflow);
	r != null && i != null && r >= i && (r = null, i = null);
	let a = (e) => r != null && (n === "r" ? e <= r : e < r), o = (e) => i != null && (n === "r" ? e > i : e >= i), s = Infinity, c = -Infinity, l = 0, u = 0, d = 0;
	for (let t of e) {
		let e = H(t);
		e != null && (a(e) ? u++ : o(e) ? d++ : (l++, s = Math.min(s, e), c = Math.max(c, e)));
	}
	if (l + u + d === 0) return {
		kind: "bins",
		categories: [],
		counts: []
	};
	let f = [], p = [];
	if (r != null && (f.push(`${n === "r" ? "≤" : "<"} ${U(r)}`), p.push(u)), l > 0) {
		let u = r ?? s, d = i ?? c, m = d - u;
		if (!Number.isFinite(m)) f.push(`${U(u)} – ${U(d)}`), p.push(l);
		else {
			let s = H(t.binSize), c;
			c = s != null && s > 0 && m > 0 ? Math.max(1, Math.ceil(m / s)) : t.binCount != null && Number.isFinite(t.binCount) && t.binCount > 0 ? Math.max(1, Math.floor(t.binCount)) : Math.max(1, Math.ceil(Math.sqrt(l)));
			let d = m <= 0 ? 1 : Math.min(512, c), h = m > 0 && s != null && s > 0 && c <= 512, g = m === 0 ? 1 : h ? s : m / d, _ = Array(d).fill(0);
			for (let t of e) {
				let e = H(t);
				if (e == null || a(e) || o(e)) continue;
				let r = h ? (e - u) / g : m === 0 ? 0 : (e - u) / m * d, i = n === "r" ? Math.ceil(r) - 1 : Math.floor(r), s = Math.max(0, Math.min(d - 1, i));
				_[s]++;
			}
			for (let e = 0; e < d; e++) {
				let t = h ? u + g * e : u + e / d * m, a = h ? t + g : u + m * ((e + 1) / d), o = i == null ? a : Math.min(a, i), s = n === "r" && (r != null || e > 0) ? ">" : "≥", c = n === "l" && (i != null || e < d - 1) ? "<" : "≤";
				f.push(`${s} ${U(t)} – ${c} ${U(o)}`), p.push(_[e]);
			}
		}
	}
	return i != null && (f.push(`${n === "r" ? ">" : "≥"} ${U(i)}`), p.push(d)), {
		kind: "bins",
		categories: f,
		counts: p
	};
}
//#endregion
//#region packages/core/src/chart/pareto-layout.ts
function ve(e, t) {
	return e == null ? e : e.flatMap((e) => {
		let n = t.get(e.idx);
		return n == null ? [] : [{
			...e,
			idx: n
		}];
	});
}
function ye(e, t) {
	return e == null ? e : t.map((t) => e[t] ?? null);
}
function be(e, t, n = {}) {
	let r = e.values.map((e, t) => ({
		value: e,
		sourceIndex: t
	})).filter((e) => e.value != null && Number.isFinite(e.value) && e.value >= 0);
	n.sortDescending !== !1 && r.sort((e, t) => t.value - e.value || e.sourceIndex - t.sourceIndex);
	let i = r[0]?.value ?? 0, a = i > 0 ? r.reduce((e, t) => e + t.value / i, 0) : 0, o = 0, s = r.map((n) => (i > 0 && (o += n.value / i), {
		sourceIndex: n.sourceIndex,
		category: e.categories?.[n.sourceIndex] ?? t[n.sourceIndex] ?? String(n.sourceIndex + 1),
		value: n.value,
		cumulativeFraction: a > 0 ? o >= a ? 1 : o / a : 0
	})), c = s.map((e) => e.sourceIndex), l = new Map(c.map((e, t) => [e, t])), u = s.map((e) => e.category), d = {
		...e,
		categories: u,
		catFormatCodes: ye(e.catFormatCodes, c),
		dataPointColors: ye(e.dataPointColors, c),
		dataLabelColors: ye(e.dataLabelColors, c),
		dataPointOverrides: ve(e.dataPointOverrides, l),
		dataLabelOverrides: ve(e.dataLabelOverrides, l)
	};
	return {
		points: s,
		categories: u,
		orderedSeries: {
			...d,
			values: s.map((e) => e.value)
		},
		series: {
			...d,
			values: s.map((e) => e.cumulativeFraction)
		}
	};
}
function xe(e) {
	if (e.length > 1e4) return !0;
	let t = 0;
	for (let n of e) {
		if (n.path.length > 512 || t > 1e4 - n.path.length) return !0;
		t += n.path.length;
	}
	return !1;
}
function Se(e, t = !1) {
	let n = {
		label: "",
		layoutWeight: 0,
		value: 0,
		depth: -1,
		children: [],
		branchIndex: -1,
		labelIndex: -1,
		a0: 0,
		a1: 0
	}, r = e.reduce((e, t) => Number.isFinite(t.size) && t.size > e ? t.size : e, 0), i = (e, t) => e > Number.MAX_VALUE - t ? Number.MAX_VALUE : e + t, a = /* @__PURE__ */ new WeakMap();
	for (let o of e) {
		let e = Number.isFinite(o.size) && o.size > 0 ? o.size : 0, s = r > 0 ? e / r : 0, c = n;
		for (let n = 0; n < o.path.length; n++) {
			let r = o.path[n], l = a.get(c);
			l || (l = /* @__PURE__ */ new Map(), a.set(c, l));
			let u = t && n === o.path.length - 1, d = u ? void 0 : l.get(r);
			d || (d = {
				label: r,
				layoutWeight: 0,
				value: 0,
				depth: n,
				children: [],
				branchIndex: n === 0 ? c.children.length : c.branchIndex,
				labelIndex: -1,
				a0: 0,
				a1: 0
			}, c.children.push(d), u || l.set(r, d)), d.layoutWeight += s, d.value = i(d.value, e), c = d;
		}
	}
	n.layoutWeight = n.children.reduce((e, t) => e + t.layoutWeight, 0), n.value = n.children.reduce((e, t) => i(e, t.value), 0);
	let o = 0, s = [...n.children].reverse();
	for (; s.length > 0;) {
		let e = s.pop();
		e.labelIndex = o++;
		for (let t = e.children.length - 1; t >= 0; t--) s.push(e.children[t]);
	}
	return n;
}
function Ce(e) {
	let t = [e];
	for (; t.length > 0;) {
		let e = t.pop(), n = 0;
		for (let t of e.children) n += t.layoutWeight;
		if (n <= 0) continue;
		let r = e.a0;
		for (let i of e.children) {
			let a = (e.a1 - e.a0) * i.layoutWeight / n;
			i.a0 = r, i.a1 = r + a, r = i.a1, t.push(i);
		}
	}
}
function W(e) {
	let t = e.depth, n = [e];
	for (; n.length > 0;) {
		let e = n.pop();
		t = Math.max(t, e.depth);
		for (let t = e.children.length - 1; t >= 0; t--) n.push(e.children[t]);
	}
	return t;
}
//#endregion
//#region packages/core/src/chart/chart-ex-renderer.ts
function we(e) {
	return !e || e.fillNoStyle === !0 ? !1 : e.fillPaintAuthored === !0 || e.fillHidden === !0 || e.fillColors?.some((e) => e != null) === !0 || e.fillPaints?.some((e) => e != null) === !0;
}
function Te(e, t, n, r) {
	return t?.fillHidden === !0 || t?.color != null || we(t?.chartexStyle) ? B(e, r, 3, t?.fillHidden === !0 ? {
		...t.chartexStyle,
		fillHidden: !0,
		fillPaintAuthored: !0
	} : t?.chartexStyle, t?.color, {
		fillHidden: !0,
		fillPaintAuthored: !0
	}) : n?.chartexStyle?.fillPaintAuthored === !0 ? B(e, r, 3, n.chartexStyle, n.color, {
		fillHidden: !0,
		fillPaintAuthored: !0
	}) : oe(e, r, 3, n?.chartexStyle, n?.color);
}
function Ee(e) {
	let t = e?.chartexStyle;
	return e?.lineHidden != null || e?.lineColor != null || e?.lineWidthEmu != null || e?.lineDash != null || t?.linePaintAuthored === !0 || t?.lineHidden != null || t?.lineColors?.some((e) => e != null) === !0 || t?.linePaints?.some((e) => e != null) === !0 || t?.lineWidthEmu != null || t?.lineDash != null || t?.lineCustomDash != null || t?.lineCap != null || t?.lineJoin != null;
}
function De(e) {
	let t = e.chartexSunburst ? {
		rows: e.chartexSunburst.rows,
		kind: "sunburst"
	} : e.chartexTreemap ? {
		rows: e.chartexTreemap.rows,
		kind: "treemap"
	} : void 0;
	if (!t) return null;
	if (t.rows.length === 0) return 0;
	if (xe(t.rows)) return o + 1;
	let n = Se(t.rows, t.kind === "treemap");
	if (n.layoutWeight <= 0 || n.children.length === 0) return 0;
	t.kind === "sunburst" && (n.a0 = -Math.PI / 2, n.a1 = n.a0 + Math.PI * 2, Ce(n));
	let r = e.series[0], i = S(r?.dataLabelOverrides), a = e.chartexTreemap?.parentLabelLayout ?? "overlapping", s = 0, c = [...n.children];
	for (; c.length > 0;) {
		let n = c.pop();
		for (let e of n.children) c.push(e);
		if (n.layoutWeight <= 0 || t.kind === "sunburst" && n.a1 - n.a0 <= 1e-4) continue;
		let l;
		t.kind === "sunburst" ? l = z(e, r, n.labelIndex, n.label, n.value, {
			visible: !1,
			showVal: !1,
			showCatName: !1
		}, i) : n.children.length > 0 ? (l = z(e, r, n.labelIndex, n.label, n.value, {
			visible: a !== "none",
			showVal: !1,
			showCatName: !0
		}, i), a === "overlapping" && n.depth !== 0 && (l = null)) : l = z(e, r, n.labelIndex, n.label, n.value, {
			visible: !1,
			showVal: !1,
			showCatName: !1
		}, i);
		for (let e of [l?.labelBox?.fillPaint, l?.labelBox?.borderFill]) {
			if (!e) continue;
			let t = p(e);
			if (e.fillType === "gradient" && t > 4096 || t > 1048576 - s) return o + 1;
			s += t;
		}
	}
	return s;
}
function G(e, t, n, r, i = 0) {
	let a = t.series[0];
	if (!a) return;
	let o = _e(a.values, t.chartexHistogramBinning ?? {});
	if (o.kind === "tooManyInputPoints") {
		C(e, n, s + 1);
		return;
	}
	A(e, {
		...t,
		chartType: "clusteredBar",
		categories: o.categories,
		series: [{
			...a,
			categories: void 0,
			values: o.counts
		}]
	}, n, r, { gapPolicy: "chartex" }, i);
}
function Oe(e, n, r, o, s) {
	let { x: l, y: u, w: d, h: p } = r, m = n.series[0]?.values ?? [], v = n.categories, y = Math.max(m.length, v.length);
	if (y === 0 || C(e, r, y)) return;
	let b = new Set(n.subtotalIndices), x = !1, A = (e, t) => {
		let n = e + t;
		return Number.isFinite(n) ? n : (x = !0, n < 0 ? -Number.MAX_VALUE : Number.MAX_VALUE);
	}, ne = 0, I = [], R = -Infinity, B = 0;
	for (let e = 0; e < y; e++) {
		let t = m[e], n = t != null && Number.isFinite(t), r = t == null || n, i = n ? t : 0;
		if (b.has(e)) {
			let e = {
				start: 0,
				end: i,
				isSub: !0,
				isPos: !0,
				hasValue: n,
				paintSlot: r
			};
			I.push(e), r && (R = Math.max(R, e.start, e.end), B = Math.min(B, e.start, e.end)), n && (ne = i);
		} else {
			let e = A(ne, i), t = {
				start: i >= 0 ? ne : e,
				end: i >= 0 ? e : ne,
				isSub: !1,
				isPos: i >= 0,
				hasValue: n,
				paintSlot: r
			};
			I.push(t), r && (R = Math.max(R, t.start, t.end), B = Math.min(B, t.start, t.end)), n && (ne = e);
		}
	}
	if (x) {
		e.fillStyle = "#888", e.font = "12px sans-serif", e.textAlign = "center", e.textBaseline = "middle", e.fillText("(chart values out of range)", l + d / 2, u + p / 2);
		return;
	}
	if (R <= B) return;
	let de = b.size === 0 && I.every((e, t) => !e.hasValue || m[t] >= 0), ge = !n.valAxisHidden && n.valAxisTickLabelPos !== "none" && !de, H = pe(e, n, d, p, o), U = a(n, d, p, o), _e = ce(n.valAxisFontSizeHpt, p, o), ve = ce(n.catAxisFontSizeHpt, p, o), ye = V(n, n.valAxisFontFace, "minor"), be = V(n, n.catAxisFontFace, "minor"), xe = w(n, B, R, p / o);
	e.save();
	let Se = 0;
	if (ge) {
		e.font = se(_e, ye, n.valAxisFontBold ?? !1, n.valAxisFontItalic ?? !1);
		let t = 0;
		for (let r of xe.majorLines) t = Math.max(t, e.measureText(N(n, r, !1)).width);
		Se = t + 8;
	}
	let Ce = Math.max(1, d - U.valBandW - Se - d * .02) / y;
	e.font = se(ve, be, n.catAxisFontBold ?? !1, n.catAxisFontItalic ?? !1);
	let W = v.slice(0, y).map((t) => M(e, g(t, n.catAxisFormatCode, n.date1904), Math.max(1, Ce - 8))), we = 0;
	for (let e of W) e.some(Boolean) && (we = Math.max(we, e.length));
	let De = n.catAxisHidden || we === 0 ? 0 : we * (ve + 2) + 4, G = n.series[0], Oe = S(G?.dataLabelOverrides), ke = S(G?.dataPointOverrides), Ae = G?.chartexStyle, je = `#${G?.color ?? P(n, 0, 3, Ae)}`, K = `#${P(n, 1, 3, Ae)}`, q = `#${P(n, 2, 3, Ae)}`, Me = oe(n, 0, 3, Ae, G?.color), Ne = oe(n, 1, 3, Ae), J = oe(n, 2, 3, Ae), Pe = {
		...n,
		chartType: "clusteredBar",
		series: [
			re(n, "Increase", G, n.chartexDataPointStyle, 0, 3, je),
			re(n, "Decrease", G, n.chartexDataPointStyle, 1, 3, K),
			re(n, "Total", G, n.chartexDataPointStyle, 2, 3, q)
		]
	}, Fe = ee(e, Pe, d, p, .22, o), { legRightW: Ie, legLeftW: Le, legTopH: Re, legBottomH: ze } = c(Fe, n.legendOverlay === !0), Y = i(n, l, u, d, p, o, {
		titleBand: H,
		legendSideReserveFrac: 0,
		legendReserve: Fe,
		pad: {
			t: H.bandH + Re + _e / 2 + 2,
			r: Ie + d * .02,
			b: ze + U.catBandH + De,
			l: Le + U.valBandW + (n.valAxisHidden ? d * .02 : Math.max(d * .03, Se))
		},
		honorPlotAreaManualLayout: !0
	});
	fe(e, n, l, u, d, p, u + Y.title.topPad, Y.title.fontPx);
	let { px0: X, py0: Z, pw: Q, ph: $ } = Y.plotRect;
	_(e, n, X, Z, Q, $, o, s);
	let Be = w(n, B, R, $ / o), Ve = (e) => Z + $ - Be.frac(e) * $, He = h(n.valAxisLineColor, n.valAxisLineWidthEmu, o), Ue = h(n.catAxisLineColor, n.catAxisLineWidthEmu, o), We = E(n, o);
	if (!n.valAxisHidden) {
		e.font = se(_e, ye, n.valAxisFontBold ?? !1, n.valAxisFontItalic ?? !1), e.fillStyle = n.valAxisFontColor ? `#${n.valAxisFontColor}` : "#595959", e.textAlign = "right", e.textBaseline = "middle";
		let t = D(n, o);
		for (let n of Be.minorLines) T(e, X, Q, Ve(n), !1, t);
		for (let t of Be.majorLines) {
			let r = Ve(t);
			if (me(n)) {
				e.strokeStyle = We.color, e.lineWidth = We.width;
				let t = We.dash.length > 0 && e.getLineDash ? e.getLineDash() : [];
				We.dash.length > 0 && e.setLineDash(We.dash), e.beginPath(), e.moveTo(X, r), e.lineTo(X + Q, r), e.stroke(), We.dash.length > 0 && e.setLineDash(t);
			}
			ge && e.fillText(N(n, t, !1), X - 4, r), L(e, n.valAxisMajorTickMark, "val", X, r, He.color, He.width, !1, n.valAxisLineHidden, "major", o, n.valAxisLineDash);
		}
		for (let t of Be.minorTicks) L(e, n.valAxisMinorTickMark, "val", X, Ve(t), He.color, He.width, !1, n.valAxisLineHidden, "minor", o, n.valAxisLineDash);
	}
	let Ge = !n.valAxisHidden && !n.valAxisLineHidden, Ke = !n.catAxisHidden && !n.catAxisLineHidden;
	Ge && j(e, X, Z, X, Z + $, He.color, He.width, n.valAxisLineDash), Ke && j(e, X, Z + $, X + Q, Z + $, Ue.color, Ue.width, n.catAxisLineDash);
	let qe = Q / y, Je = qe / (1 + f(n.barGapWidth, "chartex") / 100);
	I.forEach((r, i) => {
		let a = X + qe * i + (qe - Je) / 2, c = Math.min(Ve(r.start), Ve(r.end)), f = Math.max(Ve(r.start), Ve(r.end)), h = Math.max(1, f - c), g = r.isSub ? 2 : +!r.isPos, _ = ke.get(i), b = Te(n, _, G, g), x = _?.color ? `#${_.color}` : r.isSub ? q : r.isPos ? je : K;
		r.paintSlot && b && (e.fillStyle = le(e, b, a, c, Je, h, x, s), e.fillRect(a, c, Je, h));
		let S = F(n, n.chartexDataPointStyle, "line", g, 3), C = Ee(_) ? _ : G;
		if (r.paintSlot && ue(e, n, n.chartexDataPointStyle, C, g, 3, S ? `#${S}` : x, o) && e.strokeRect(a, c, Je, h), r.paintSlot && I[i + 1]?.paintSlot && i < y - 1 && n.chartexConnectorLines !== !1) {
			let t = X + qe * (i + 1) + (qe - Je) / 2, s = r.isPos ? c : f;
			e.save();
			let l = O(n, n.chartexSeriesLineStyle, G, g, 3, "#000000", { linkedNoStyleFallback: !0 });
			ae(e, l, o) && (l.widthEmu ?? (e.lineWidth = .75 * o), e.beginPath(), e.moveTo(a + Je, s), e.lineTo(t, s), e.stroke()), e.restore();
		}
		let w = r.hasValue ? m[i] : 0, T = z(n, G, i, v[i] ?? "", w, {
			visible: n.showDataLabels,
			showVal: !0,
			showCatName: !1
		}, Oe, !r.hasValue);
		if (T) {
			let r = G?.dataLabelColors?.[i] ?? T.fontColor ?? null, f = r ? `#${r}` : n.dataLabelFontColor ? `#${n.dataLabelFontColor}` : "#595959", m = t(T.fontSizeHpt, o) ?? ce(n.dataLabelFontSizeHpt, p, o), g = T.fontBold ?? n.dataLabelFontBold ?? !1, _ = V(n, T.fontFace ?? n.dataLabelFontFace, "minor");
			e.font = `${T.textStyle.fontItalic ? "italic " : ""}${g ? "bold " : ""}${m}px ${_}`, te(e, T.text, {
				kind: "bar",
				rect: {
					x: a,
					y: c,
					w: Je,
					h
				},
				orientation: "vertical",
				negative: w < 0,
				position: T.position ?? "outEnd"
			}, {
				x: X,
				y: Z,
				w: Q,
				h: $
			}, m, f, T.manualLayout, {
				x: l,
				y: u,
				w: d,
				h: p
			}, k(n, T.richRuns, o, _, g, T.textStyle), void 0, T.textStyle, o, T.labelBox, s);
		}
	}), e.textAlign = "center", e.textBaseline = "top", e.fillStyle = n.catAxisFontColor ? `#${n.catAxisFontColor}` : "#595959", e.font = se(ve, be, n.catAxisFontBold ?? !1, n.catAxisFontItalic ?? !1);
	let Ye = Z + $ + 4;
	for (let t = 0; t < y && !n.catAxisHidden; t++) {
		let n = X + qe * t + qe / 2;
		(W[t] ?? []).forEach((t, r) => t && e.fillText(t, n, Ye + r * (ve + 2)));
	}
	ie(e, n, l, u, d, p, X, Z, Q, $, Le, ze, U.catFontPx, U.valFontPx), he(e, Pe, Fe, l, u, d, p, X, Z, Q, $, H.bandH + 2, o, [
		Me,
		Ne,
		J
	], s), e.restore();
}
function ke(e, n, r, a, o) {
	let s = n.series[0]?.values ?? [], l = Math.max(s.length, n.categories.length);
	if (l === 0 || C(e, r, l)) return;
	let u = 0;
	for (let e = 0; e < l; e++) u = Math.max(u, s[e] ?? 0);
	if (!(u > 0)) return;
	let { x: d, y: p, w: m, h: g } = r, v = pe(e, n, m, g, a), y = n.series[0], b = S(y?.dataLabelOverrides), x = `#${y?.color ?? P(n, 0, 1, y?.chartexStyle)}`, w = oe(n, 0, 1, y?.chartexStyle, y?.color), T = {
		...n,
		series: [re(n, y?.name ?? "", y, n.chartexDataPointStyle, 0, 1, x)]
	}, E = ee(e, T, m, g, .22, a), { legRightW: D, legLeftW: O, legTopH: A, legBottomH: j } = c(E, n.legendOverlay === !0), M = ce(n.catAxisFontSizeHpt, g, a);
	e.save(), e.font = se(M, V(n, n.catAxisFontFace, "minor"), n.catAxisFontBold ?? !1, n.catAxisFontItalic ?? !1);
	let N = 0;
	if (!n.catAxisHidden) {
		for (let t = 0; t < Math.min(l, n.categories.length); t++) N = Math.max(N, e.measureText(n.categories[t]).width);
		n.categories.length > 0 && (N += 10);
	}
	let ne = i(n, d, p, m, g, a, {
		titleBand: v,
		legendSideReserveFrac: .22,
		legendReserve: E,
		pad: {
			t: v.bandH + A + 2,
			r: D + m * .02,
			b: j + g * .02,
			l: O + N + m * .02
		},
		honorPlotAreaManualLayout: !0
	});
	fe(e, n, d, p, m, g, p + ne.title.topPad, ne.title.fontPx);
	let { px0: F, py0: I, pw: ie, ph: L } = ne.plotRect;
	_(e, n, F, I, ie, L, a, o);
	let R = L / l, B = R / (1 + f(n.barGapWidth, "chartex") / 100);
	for (let r = 0; r < l; r++) {
		let i = Math.max(0, s[r] ?? 0), c = ie * i / u, l = F + (ie - c) / 2, f = I + R * r + (R - B) / 2;
		w && (e.fillStyle = le(e, w, l, f, c, B, x, o), e.fillRect(l, f, c, B)), ue(e, n, n.chartexDataPointStyle, y, 0, 1, x, a) && e.strokeRect(l, f, c, B);
		let h = n.categories[r];
		!n.catAxisHidden && h != null && (e.fillStyle = n.catAxisFontColor ? `#${n.catAxisFontColor}` : "#595959", e.textAlign = "right", e.textBaseline = "middle", e.fillText(h, F - 6, f + B / 2));
		let _ = z(n, y, r, h ?? "", i, {
			visible: !1,
			showVal: !1,
			showCatName: !1
		}, b);
		if (_) {
			let r = t(_.fontSizeHpt, a) ?? ce(n.dataLabelFontSizeHpt, g, a), i = V(n, _.fontFace ?? n.dataLabelFontFace, "minor");
			e.font = `${_.textStyle.fontItalic ? "italic " : ""}${_.fontBold ? "bold " : ""}${r}px ${i}`, te(e, _.text, {
				kind: "bar",
				rect: {
					x: l,
					y: f,
					w: c,
					h: B
				},
				orientation: "horizontal",
				negative: !1,
				position: _.position ?? "ctr"
			}, {
				x: F,
				y: I,
				w: ie,
				h: L
			}, r, _.fontColor ? `#${_.fontColor}` : "#ffffff", _.manualLayout, {
				x: d,
				y: p,
				w: m,
				h: g
			}, k(n, _.richRuns, a, i, _.fontBold ?? !1, _.textStyle), void 0, _.textStyle, a, _.labelBox, o);
		}
	}
	if (!n.catAxisHidden && !n.catAxisLineHidden) {
		let t = h(n.catAxisLineColor, n.catAxisLineWidthEmu, a);
		e.strokeStyle = t.color, e.lineWidth = t.width, e.beginPath(), e.moveTo(F, I), e.lineTo(F, I + L), e.stroke();
	}
	he(e, T, E, d, p, m, g, F, I, ie, L, v.bandH + 2, a, [w], o), e.restore();
}
function Ae(e, t, n, r, i = 0) {
	let a = t.series[0];
	if (!a || C(e, n, Math.max(t.categories.length, a.categories?.length ?? 0, a.values.length))) return;
	let o = be(a, t.categories, { sortDescending: !1 });
	if (o.points.length === 0) return;
	let s = de(a, 0), c = O(t, t.chartexDataPointLineStyle, a, s, 1, R(0, a), { linkedNoStyleFallback: !0 });
	x(e, {
		...t,
		chartType: "line",
		categories: o.categories,
		series: [{
			...o.series,
			showMarker: !1,
			lineHidden: !c.visible,
			lineColor: c.color.replace(/^#/, ""),
			lineWidthEmu: c.widthEmu,
			chartexStyle: {
				lineDash: c.dash,
				lineCap: c.cap,
				lineJoin: c.join
			}
		}],
		catAxisHidden: !1,
		catAxisTickLabelPos: "none",
		showLegend: !1,
		valMin: t.valMin ?? 0,
		valMax: t.valMax ?? 1.2,
		valAxisMajorUnit: t.valAxisMajorUnit ?? .2
	}, n, r, i);
}
function je(e, t, n, r, i = 0) {
	let a = t.series[0];
	if (!a || C(e, n, Math.max(t.categories.length, a.categories?.length ?? 0, a.values.length))) return;
	let o = be(a, t.categories);
	if (o.points.length === 0) return;
	let s = t.series.find((e) => e.seriesType === "line"), c = s?.chartexFormatIdx ?? a.chartexFormatIdx ?? 0, l = {
		...s ?? o.series,
		name: s?.name || "Cumulative %",
		values: o.series.values,
		categories: o.categories,
		color: s?.color ?? F(t, t.chartexDataPointLineStyle, "line", c, 1) ?? a.lineColor ?? a.color,
		seriesType: "line",
		useSecondaryAxis: !0,
		showMarker: !1
	}, u = {
		min: t.secondaryValAxis?.min ?? 0,
		max: t.secondaryValAxis?.max ?? 1,
		title: t.secondaryValAxis?.title ?? null,
		hidden: t.secondaryValAxis?.hidden ?? !1,
		formatCode: t.secondaryValAxis?.formatCode ?? "0%",
		fontColor: t.secondaryValAxis?.fontColor ?? null,
		fontSizeHpt: t.secondaryValAxis?.fontSizeHpt ?? null,
		fontFace: t.secondaryValAxis?.fontFace ?? null,
		lineColor: t.secondaryValAxis?.lineColor ?? null,
		lineWidthEmu: t.secondaryValAxis?.lineWidthEmu ?? null,
		lineHidden: t.secondaryValAxis?.lineHidden ?? !1,
		majorTickMark: t.secondaryValAxis?.majorTickMark ?? "out",
		minorTickMark: t.secondaryValAxis?.minorTickMark ?? null,
		majorUnit: t.secondaryValAxis?.majorUnit ?? null,
		minorUnit: t.secondaryValAxis?.minorUnit ?? null,
		titleFontSizeHpt: t.secondaryValAxis?.titleFontSizeHpt ?? null,
		titleFontBold: t.secondaryValAxis?.titleFontBold ?? null,
		titleFontColor: t.secondaryValAxis?.titleFontColor ?? null,
		titleFontFace: t.secondaryValAxis?.titleFontFace ?? null
	};
	A(e, {
		...t,
		chartType: "clusteredBar",
		categories: o.categories,
		series: [{
			...o.orderedSeries,
			seriesType: null,
			useSecondaryAxis: !1
		}, l],
		secondaryValAxis: u
	}, n, r, {
		gapPolicy: "chartex",
		semanticLineNoStyleFallback: !0
	}, i);
}
var K = 7, q = .05, Me = 1.2;
function Ne(e, t, n, r) {
	let i = (r ?? t) - (n ?? e);
	if (!(i > 0) || !Number.isFinite(i)) return null;
	let a = b(i, K);
	if (!(a > 0) || !Number.isFinite(a)) return null;
	let o = e - i * q, s = t + i * q;
	e >= 0 && (e === 0 || t > Me * e) && (o = 0), t <= 0 && (t === 0 || Math.abs(e) > Me * Math.abs(t)) && (s = 0);
	let c = n ?? Math.floor(o / a) * a, l = r ?? Math.ceil(s / a) * a;
	return ![c, l].every(Number.isFinite) || !(l > c) ? null : {
		min: c,
		max: l,
		majorUnit: a
	};
}
function J(t, o, s, p, g) {
	let b = 3 * p, x = o.chartexBox;
	if (!x || x.categories.length === 0 || x.series.length === 0) return;
	let { x: S, y: O, w: k, h: A } = s;
	if (C(t, s, e(x.series.map((e) => e.valuesByCategory), 1e4))) return;
	let M = () => {
		t.fillStyle = "#888", t.font = "12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText("(chart values out of range)", S + k / 2, O + A / 2);
	}, te = (e) => {
		let t = e.max - e.min, n = t / e.step;
		return Number.isFinite(e.min) && Number.isFinite(e.max) && Number.isFinite(e.step) && Number.isFinite(t) && Number.isFinite(n) && e.max > e.min && e.step > 0 && n <= 1e3 && e.min + e.step > e.min;
	}, R = Infinity, z = -Infinity;
	for (let e of x.series) for (let t of e.valuesByCategory) for (let e of t) Number.isFinite(e) && (e < R && (R = e), e > z && (z = e));
	if (!isFinite(R) || !isFinite(z)) return;
	if (!Number.isFinite(z - R)) {
		M();
		return;
	}
	let ae = o.valAxisMajorUnit == null ? Ne(R, z, o.valMin, o.valMax) : null, me = ae ? {
		...o,
		valMin: ae.min,
		valMax: ae.max,
		valAxisMajorUnit: ae.majorUnit
	} : o, ge = V(o, o.valAxisFontFace, "minor"), H = ce(o.valAxisFontSizeHpt, A, p), U = r(H), _e = I(p), ve = y({
		dataMin: R,
		dataMax: z,
		explicitMin: me.valMin,
		explicitMax: me.valMax,
		axisLenPt: A / p,
		majorUnit: me.valAxisMajorUnit
	});
	if (!te({
		min: ve.min,
		max: ve.max,
		step: ve.majorUnit
	})) {
		M();
		return;
	}
	let ye = 0;
	if (!o.valAxisHidden) {
		let e = t.font;
		t.font = se(H, ge, o.valAxisFontBold ?? !1, o.valAxisFontItalic ?? !1);
		let n = 0;
		for (let e of ve.majorTicks) {
			let r = N(o, e, !1);
			n = Math.max(n, t.measureText(r).width);
		}
		t.font = e, ye = n + U + l * p;
	}
	let be = pe(t, o, k, A, p), xe = ce(o.catAxisFontSizeHpt, A, p), Se = ce(o.valAxisFontSizeHpt, A, p), Ce = a(o, k, A, p), W = x.series.length, we = x.series.map((e, t) => de(e, t)), Te = x.series.map((e, t) => {
		let n = we[t], r = e.color ?? P(o, n, W, e.chartexStyle);
		return re(o, e.name, e, o.chartexDataPointStyle, n, W, r, !0);
	}), Ee = {
		...o,
		series: Te
	}, De = ee(t, Ee, k, A, .22, p), { legRightW: G, legLeftW: Oe, legTopH: ke, legBottomH: Ae } = c(De, o.legendOverlay === !0), je = i(o, S, O, k, A, p, {
		titleBand: be,
		legendSideReserveFrac: .22,
		legendReserve: De,
		pad: {
			t: be.bandH + ke + Se / 2 + 2,
			r: G + k * .02,
			b: Ae + Ce.catBandH + (o.catAxisHidden ? A * .02 : u(xe)),
			l: Oe + Ce.valBandW + (o.valAxisHidden ? k * .02 : ye)
		},
		honorPlotAreaManualLayout: !0
	}), { px0: K, py0: q, pw: Me, ph: J } = je.plotRect;
	_(t, o, K, q, Me, J, p, g);
	let Pe = x.categories, Fe = Pe.length, Ie = w(me, R, z, J / p);
	if (!te(Ie)) {
		M();
		return;
	}
	fe(t, o, S, O, k, A, O + je.title.topPad, je.title.fontPx);
	let { min: Le, max: Re } = Ie, ze = Re - Le, Y = (e) => q + J * (1 - (e - Le) / ze), X = h(o.valAxisLineColor, o.valAxisLineWidthEmu, p), Z = E(o, p);
	if (t.save(), !o.valAxisHidden) {
		if (t.font = se(H, ge, o.valAxisFontBold ?? !1, o.valAxisFontItalic ?? !1), t.textAlign = "right", t.textBaseline = "middle", o.valAxisMinorGridlines) {
			let e = D(o, p);
			for (let n of Ie.minorLines) T(t, K, Me, Y(n), !1, e);
		}
		for (let e of Ie.majorLines) {
			let n = Y(e);
			if (o.valAxisMajorGridlines !== !1) {
				t.strokeStyle = Z.color, t.lineWidth = Z.width;
				let e = Z.dash.length > 0 && t.getLineDash ? t.getLineDash() : [];
				Z.dash.length > 0 && t.setLineDash(Z.dash), t.beginPath(), t.moveTo(K, n), t.lineTo(K + Me, n), t.stroke(), Z.dash.length > 0 && t.setLineDash(e);
			}
			t.fillStyle = o.valAxisFontColor ? `#${o.valAxisFontColor}` : "#595959", t.fillText(N(o, e, !1), K - _e, n), L(t, o.valAxisMajorTickMark, "val", K, n, X.color, X.width, !1, o.valAxisLineHidden, "major", p, o.valAxisLineDash);
		}
		for (let e of Ie.minorTicks) L(t, o.valAxisMinorTickMark, "val", K, Y(e), X.color, X.width, !1, o.valAxisLineHidden, "minor", p, o.valAxisLineDash);
		o.valAxisLineHidden || j(t, K, q, K, q + J, X.color, X.width, o.valAxisLineDash);
	}
	let Q = h(o.catAxisLineColor, o.catAxisLineWidthEmu, p);
	!o.catAxisHidden && !o.catAxisLineHidden && j(t, K, q + J, K + Me, q + J, Q.color, Q.width, o.catAxisLineDash);
	let $ = Me / Fe, Be = f(o.barGapWidth, "chartex"), Ve = (e) => `#${x.series[e].color ?? P(o, we[e], W, x.series[e].chartexStyle)}`, He = (e) => oe(o, we[e], W, x.series[e].chartexStyle, x.series[e].color), Ue = x.series.map((e) => e.valuesByCategory.map((t) => m(t, e.quartileMethod))), We = (e, t) => {
		let n = d(K, Me, x.oneBoxPerSeries ? 1 : Fe, W, x.oneBoxPerSeries ? 0 : e, t, Be);
		return n ? {
			bx: n.boxX,
			boxW: n.boxWidth,
			cx: n.centerX
		} : {
			bx: K,
			boxW: 0,
			cx: K
		};
	};
	for (let e = 0; e < W; e++) {
		let n = x.series[e];
		if (!n.meanLine) continue;
		let r = o.chartexDataPointLineStyle ?? o.chartexDataPointStyle, i = n.lineColor ? `#${n.lineColor}` : Ve(e);
		if (t.save(), ue(t, o, r, n, we[e], W, i, p) || n.lineColor != null) {
			n.lineColor && (t.strokeStyle = i), n.lineWidthEmu && (t.lineWidth = v(n.lineWidthEmu, p));
			let r = !1;
			t.beginPath();
			for (let n = 0; n < Fe; n++) {
				let i = Ue[e][n];
				if (!i) {
					r = !1;
					continue;
				}
				let { cx: a } = We(n, e), o = Y(i.mean);
				r ? t.lineTo(a, o) : t.moveTo(a, o), r = !0;
			}
			t.stroke();
		}
		t.restore();
	}
	let Ge = ce(o.catAxisFontSizeHpt, A, p), Ke = n(Ge);
	for (let e = 0; e < Fe; e++) {
		let n = K + $ * (e + .5);
		o.catAxisHidden || L(t, o.catAxisMajorTickMark, "cat", q + J, n, Q.color, Q.width, !1, o.catAxisLineHidden, "major", p, o.catAxisLineDash);
		for (let n = 0; n < W; n++) {
			let r = x.series[n], i = Ue[n][e];
			if (!i) continue;
			let { bx: a, boxW: s, cx: c } = We(e, n), l = Ve(n), u = He(n), d = o.chartexDataPointStyle, f = o.chartexDataPointLineStyle ?? d, m = o.chartexDataPointMarkerStyle ?? d, h = we[n], _ = F(o, d, "line", h, W), y = r.lineColor ? `#${r.lineColor}` : _ ? `#${_}` : l, S = r.lineWidthEmu ? v(r.lineWidthEmu, p) : d?.lineWidthEmu == null ? 1 : v(d.lineWidthEmu, p), C = F(o, f, "line", h, W), w = F(o, m, "fill", h, W), T = B(o, h, W, r.chartexStyle, r.color, m), E = F(o, m, "line", h, W), D = (e, n) => {
				let i = r.chartexStyle, a = i?.lineHidden != null || i?.lineColors?.some(Boolean) || i?.lineWidthEmu != null || i?.lineDash != null || i?.lineCap != null || i?.lineJoin != null, s = ue(t, o, e, r, h, W, n, p), c = e?.lineNoStyle === !0 && !a && r.lineColor == null && r.lineWidthEmu == null;
				return !s && c && (t.strokeStyle = n, t.lineWidth = 1, t.setLineDash([])), r.lineColor && (t.strokeStyle = y), r.lineWidthEmu && (t.lineWidth = S), s || c || r.lineColor != null;
			}, O = Y(i.q1), k = Y(i.q3), A = Math.min(O, k), j = Math.max(1, Math.abs(O - k)), M = s * .4;
			D(f, C ?? y) && (t.beginPath(), t.moveTo(c, Y(i.whiskerHi)), t.lineTo(c, k), t.moveTo(c, O), t.lineTo(c, Y(i.whiskerLo)), t.moveTo(c - M / 2, Y(i.whiskerHi)), t.lineTo(c + M / 2, Y(i.whiskerHi)), t.moveTo(c - M / 2, Y(i.whiskerLo)), t.lineTo(c + M / 2, Y(i.whiskerLo)), t.stroke()), u && (t.fillStyle = le(t, u, a, A, s, j, l, g), t.fillRect(a, A, s, j)), D(d, y) && t.strokeRect(a + S / 2, A + S / 2, s - S, j - S);
			let N = Y(i.median);
			if (D(f, C ?? y) && (t.beginPath(), t.moveTo(a, N), t.lineTo(a + s, N), t.stroke()), r.showNonoutliers) {
				let e = o.chartStyleMarkerSymbol ?? o.chartexMarkerSymbol ?? "circle";
				for (let n of i.inner) {
					if (e === "none") continue;
					let r = D(m, E ?? y);
					ne(t, c, Y(n), e, 3, T ? w ? `#${w}` : l : "transparent", r ? y : null, p, t.lineWidth, T, g);
				}
			}
			if (r.meanMarker) {
				let e = Y(i.mean), n = b;
				D(m, E ?? y) && (t.beginPath(), t.moveTo(c - n, e - n), t.lineTo(c + n, e + n), t.moveTo(c + n, e - n), t.lineTo(c - n, e + n), t.stroke());
			}
			if (r.showOutliers) {
				let e = o.chartStyleMarkerSymbol ?? o.chartexMarkerSymbol ?? "circle";
				for (let n of i.outliers) {
					if (e === "none") continue;
					let r = D(m, E ?? y);
					ne(t, c, Y(n), e, 3, T ? w ? `#${w}` : l : "transparent", r ? y : null, p, t.lineWidth, T, g);
				}
			}
		}
		if (!o.catAxisHidden) {
			t.font = se(Ge, V(o, o.catAxisFontFace, "minor"), o.catAxisFontBold ?? !1, o.catAxisFontItalic ?? !1), t.fillStyle = o.catAxisFontColor ? `#${o.catAxisFontColor}` : "#595959", t.textAlign = "center", t.textBaseline = "top";
			let r = Pe[e];
			t.fillText(r, n, q + J + Ke);
		}
	}
	t.restore(), ie(t, o, S, O, k, A, K, q, Me, J, Oe, Ae, Ce.catFontPx, Ce.valFontPx), he(t, Ee, De, S, O, k, A, K, q, Me, J, be.bandH + 2, p, x.series.map((e, t) => He(t)), g);
}
var Pe = .18;
function Fe(e, n, r, a, o) {
	let c = n.chartexSunburst;
	if (!c || c.rows.length === 0) return;
	let { x: l, y: u, w: d, h: f } = r;
	if (xe(c.rows)) {
		C(e, r, s + 1);
		return;
	}
	let p = Se(c.rows);
	if (p.layoutWeight <= 0 || p.children.length === 0) return;
	let m = n.series[0], h = S(m?.dataLabelOverrides), g = p.children.map((e, t) => oe(n, t, p.children.length, m?.chartexStyle, m?.color)), v = {
		...n,
		chartType: "clusteredBar",
		series: p.children.map((e) => {
			let t = P(n, e.branchIndex, p.children.length, m?.chartexStyle);
			return re(n, e.label, m, n.chartexDataPointStyle, e.branchIndex, p.children.length, t, !1, !1);
		})
	}, y = ee(e, v, d, f, .22, a), b = i(n, l, u, d, f, a, {
		titleTopPadFrac: .035,
		titleBottomPadFrac: .035,
		legendSideReserveFrac: 0,
		legendReserve: y,
		radialGapFrac: .02,
		honorPlotAreaManualLayout: !0
	});
	fe(e, n, l, u, d, f, u + b.title.topPad, b.title.fontPx);
	let { px0: x, py0: w, pw: T, ph: E } = b.plotRect;
	_(e, n, x, w, T, E, a, o);
	let D = x + T / 2, O = w + E / 2, A = Math.min(T, E) * .46;
	p.a0 = -Math.PI / 2, p.a1 = -Math.PI / 2 + Math.PI * 2, Ce(p);
	let j = W(p) + 1, M = A * Pe, N = (A - M) / j, ne = (e) => `#${P(n, e, p.children.length, m?.chartexStyle)}`, F = (e) => oe(n, e, p.children.length, m?.chartexStyle, m?.color), I = m?.seriesDataLabels, ie = V(n, I?.fontFace ?? n.dataLabelFontFace, "minor"), L = t(I?.fontSizeHpt, a) ?? Math.max(7, Math.min(13, A * .075)), R = I?.fontColor ? `#${I.fontColor}` : "#ffffff", B = Array.from({ length: j }, () => []), ae = [p];
	for (; ae.length > 0;) {
		let e = ae.pop();
		e.depth >= 0 && B[e.depth].push(e);
		for (let t = e.children.length - 1; t >= 0; t--) ae.push(e.children[t]);
	}
	e.save();
	for (let r = 0; r < j; r++) {
		let i = M + r * N, s = i + N;
		for (let c of B[r]) {
			let r = c.a1 - c.a0;
			if (r <= 1e-4) continue;
			e.beginPath(), e.arc(D, O, s, c.a0, c.a1), e.arc(D, O, i, c.a1, c.a0, !0), e.closePath();
			let g = F(c.branchIndex);
			g && (e.fillStyle = le(e, g, D - s, O - s, s * 2, s * 2, ne(c.branchIndex), o), e.fill()), ue(e, n, n.chartexDataPointStyle, n.series[0], c.branchIndex, p.children.length, "#ffffff", a) && e.stroke();
			let _ = z(n, m, c.labelIndex, c.label, c.value, {
				visible: !1,
				showVal: !1,
				showCatName: !1
			}, h);
			if (!_) continue;
			let v = _.text, y = t(_.fontSizeHpt, a) ?? L, b = _.fontColor ? `#${_.fontColor}` : R, S = _.fontFace ? V(n, _.fontFace, "minor") : ie, C = (c.a0 + c.a1) / 2, A = (i + s) / 2, j = N - 4, M = r * A;
			if (!_.manualLayout && j < y * .9 && M < y * .9) continue;
			let ee = D + Math.cos(C) * A, P = O + Math.sin(C) * A;
			if (e.font = `${_.textStyle.fontItalic ? "italic " : ""}${_.fontBold ? "bold " : ""}${y}px ${S}`, _.manualLayout) {
				te(e, v, {
					kind: "point",
					x: ee,
					y: P,
					position: _.position ?? "ctr"
				}, {
					x,
					y: w,
					w: T,
					h: E
				}, y, b, _.manualLayout, {
					x: l,
					y: u,
					w: d,
					h: f
				}, k(n, _.richRuns, a, S, _.fontBold ?? !1, _.textStyle), void 0, _.textStyle, a, _.labelBox, o);
				continue;
			}
			e.save(), e.translate(ee, P);
			let re = C, I = re * 180 / Math.PI % 360;
			(I > 90 || I < -90) && (re += Math.PI), e.rotate(re), e.font = `${_.textStyle.fontItalic ? "italic " : ""}${_.fontBold ? "bold " : ""}${y}px ${S}`, te(e, v, {
				kind: "point",
				x: 0,
				y: 0,
				position: _.position ?? "ctr"
			}, {
				x: -j / 2,
				y: -M / 2,
				w: j,
				h: M
			}, y, b, void 0, {
				x: -j / 2,
				y: -M / 2,
				w: j,
				h: M
			}, k(n, _.richRuns, a, S, _.fontBold ?? !1, _.textStyle), void 0, _.textStyle, a, _.labelBox, o), e.restore();
		}
	}
	e.restore(), he(e, v, y, l, u, d, f, x, w, T, E, b.title.bandH + 2, a, g, o);
}
function Ie(e, t) {
	let n = e.map((e, t) => ({
		node: e,
		index: t,
		value: e.layoutWeight
	})).filter((e) => e.value > 0).sort((e, t) => t.value - e.value || e.index - t.index), r = n.reduce((e, t) => e + t.value, 0);
	if (r <= 0 || t.w <= 0 || t.h <= 0) return [];
	let i = t.w * t.h / r, a = n.map((e) => ({
		...e,
		area: e.value * i
	})), o = [], s = { ...t }, c = [], l = 0, u = Infinity, d = 0, f = (e, t, n, r) => {
		if (e <= 0 || t <= 0 || r <= 0) return Infinity;
		let i = r * r;
		return Math.max(i * n / (e * e), e * e / (i * t));
	}, p = (e, t) => {
		if (e.length !== 0) if (s.w >= s.h) {
			let n = s.h > 0 ? t / s.h : 0, r = s.y;
			for (let t = 0; t < e.length; t++) {
				let i = t === e.length - 1 ? s.y + s.h - r : e[t].area / n;
				o.push({
					node: e[t].node,
					rect: {
						x: s.x,
						y: r,
						w: n,
						h: i
					}
				}), r += i;
			}
			s = {
				x: s.x + n,
				y: s.y,
				w: Math.max(0, s.w - n),
				h: s.h
			};
		} else {
			let n = s.w > 0 ? t / s.w : 0, r = s.x;
			for (let t = 0; t < e.length; t++) {
				let i = t === e.length - 1 ? s.x + s.w - r : e[t].area / n;
				o.push({
					node: e[t].node,
					rect: {
						x: r,
						y: s.y,
						w: i,
						h: n
					}
				}), r += i;
			}
			s = {
				x: s.x,
				y: s.y + n,
				w: s.w,
				h: Math.max(0, s.h - n)
			};
		}
	}, m = 0;
	for (; m < a.length;) {
		let e = a[m], t = Math.min(s.w, s.h), n = l + e.area, r = Math.min(u, e.area), i = Math.max(d, e.area);
		c.length === 0 || f(n, r, i, t) <= f(l, u, d, t) ? (c.push(e), l = n, u = r, d = i, m++) : (p(c, l), c = [], l = 0, u = Infinity, d = 0);
	}
	return p(c, l), o;
}
function Le(e, n, r, a, o) {
	let c = n.chartexTreemap;
	if (!c || c.rows.length === 0) return;
	if (xe(c.rows)) {
		C(e, r, s + 1);
		return;
	}
	let l = Se(c.rows, !0);
	if (l.layoutWeight <= 0 || l.children.length === 0) return;
	let u = n.series[0], d = l.children.map((e) => oe(n, e.branchIndex, l.children.length, u?.chartexStyle, u?.color)), f = {
		...n,
		chartType: "clusteredBar",
		series: l.children.map((e) => {
			let t = P(n, e.branchIndex, l.children.length, u?.chartexStyle);
			return re(n, e.label, u, n.chartexDataPointStyle, e.branchIndex, l.children.length, t, !0, !1);
		})
	}, p = ee(e, f, r.w, r.h, .22, a), m = i(n, r.x, r.y, r.w, r.h, a, {
		titleTopPadFrac: .035,
		titleBottomPadFrac: .035,
		legendSideReserveFrac: 0,
		legendReserve: p,
		radialGapFrac: .015,
		honorPlotAreaManualLayout: !0
	});
	fe(e, n, r.x, r.y, r.w, r.h, r.y + m.title.topPad, m.title.fontPx);
	let { px0: h, py0: g, pw: v, ph: y } = m.plotRect;
	_(e, n, h, g, v, y, a, o);
	let b = {
		x: h,
		y: g,
		w: v,
		h: y
	}, x = c.parentLabelLayout ?? "overlapping", S = n.series[0]?.seriesDataLabels, w = V(n, S?.fontFace ?? n.dataLabelFontFace, "minor"), T = t(S?.fontSizeHpt, a) ?? Math.max(8, Math.min(13, m.plotRect.ph * .025)), E = S?.fontColor ? `#${S.fontColor}` : "#ffffff", D = new Map((n.series[0]?.dataLabelOverrides ?? []).map((e) => [e.idx, e])), O = n.chartBg ? n.chartBg.startsWith("#") ? n.chartBg : `#${n.chartBg}` : "#ffffff", A = (i, s) => {
		if (s.w < .5 || s.h < .5) return;
		let c = `#${P(n, i.branchIndex, l.children.length, u?.chartexStyle)}`, d = oe(n, i.branchIndex, l.children.length, u?.chartexStyle, u?.color), f = D.get(i.labelIndex), p = f?.fontColor ? `#${f.fontColor}` : E, m = t(f?.fontSizeHpt, a) ?? T, h = f?.fontBold ?? S?.fontBold ?? !1;
		if (i.children.length > 0) {
			let t = z(n, u, i.labelIndex, i.label, i.value, {
				visible: x !== "none",
				showVal: !1,
				showCatName: !0
			}, D, !0), l = t != null && (x !== "overlapping" || i.depth === 0), g = m, _ = t?.fontFace ? V(n, t.fontFace, "minor") : w, v = x === "banner" && l ? Math.min(s.h * .28, g + 7) : 0;
			v > 0 && d && (e.fillStyle = le(e, d, s.x, s.y, s.w, v, c, o), e.fillRect(s.x, s.y, s.w, v));
			let y = {
				x: s.x,
				y: s.y + v,
				w: s.w,
				h: Math.max(0, s.h - v)
			};
			for (let e of Ie(i.children, y)) A(e.node, e.rect);
			if (l && (t.manualLayout || s.w > g * 2 && s.h > g + 4)) {
				e.font = `${h ? "bold " : ""}${g}px ${_}`;
				let i = v > 0 ? {
					x: s.x,
					y: s.y,
					w: s.w,
					h: v
				} : s, c = f?.position ?? "inBase";
				te(e, t.text, t.manualLayout ? {
					kind: "point",
					x: s.x + s.w / 2,
					y: s.y + s.h / 2,
					position: c
				} : {
					kind: "box",
					rect: i,
					position: c
				}, t.manualLayout ? b : i, g, p, t.manualLayout, r, k(n, t.richRuns, a, _, h, t.textStyle), void 0, t.textStyle, a, t.labelBox, o);
			}
			return;
		}
		d && (e.fillStyle = le(e, d, s.x, s.y, s.w, s.h, c, o), e.fillRect(s.x, s.y, s.w, s.h)), ue(e, n, n.chartexDataPointStyle, n.series[0], i.branchIndex, l.children.length, O, a, { linkedNoStyleFallback: !0 }) && e.strokeRect(s.x, s.y, s.w, s.h);
		let g = z(n, u, i.labelIndex, i.label, i.value, {
			visible: !1,
			showVal: !1,
			showCatName: !1
		}, D);
		if (!g) return;
		let _ = t(g.fontSizeHpt, a) ?? m;
		if (!g.manualLayout && (s.w <= _ * 1.2 || s.h <= _ * 1.2)) return;
		let v = g.fontFace ? V(n, g.fontFace, "minor") : w;
		e.font = `${g.fontBold ? "bold " : ""}${_}px ${v}`;
		let y = s, C = g.position === "outEnd" ? "inEnd" : g.position ?? "ctr";
		te(e, g.text, g.manualLayout ? {
			kind: "point",
			x: s.x + s.w / 2,
			y: s.y + s.h / 2,
			position: C
		} : {
			kind: "box",
			rect: y,
			position: C
		}, g.manualLayout ? b : y, _, g.fontColor ? `#${g.fontColor}` : p, g.manualLayout, r, k(n, g.richRuns, a, v, g.fontBold ?? !1, g.textStyle), void 0, g.textStyle, a, g.labelBox, o);
	};
	e.save(), e.beginPath(), e.rect(h, g, v, y), e.clip();
	for (let e of Ie(l.children, {
		x: h,
		y: g,
		w: v,
		h: y
	})) A(e.node, e.rect);
	e.restore(), he(e, f, p, r.x, r.y, r.w, r.h, h, g, v, y, m.title.bandH + 2, a, d, o);
}
function Re(e, t, n, r, i = 0) {
	let a = De(t);
	if (a != null && a > 1048576) return C(e, n, s + 1), !0;
	switch (t.chartType) {
		case "waterfall": return Oe(e, t, n, r, i), !0;
		case "clusteredColumn": return A(e, {
			...t,
			chartType: "clusteredBar"
		}, n, r, { gapPolicy: "chartex" }, i), !0;
		case "histogram": return G(e, t, n, r, i), !0;
		case "funnel": return ke(e, t, n, r, i), !0;
		case "paretoLine": return Ae(e, t, n, r, i), !0;
		case "pareto": return je(e, t, n, r, i), !0;
		case "boxWhisker": return J(e, t, n, r, i), !0;
		case "sunburst": return Fe(e, t, n, r, i), !0;
		case "treemap": return Le(e, t, n, r, i), !0;
		default: return !1;
	}
}
//#endregion
//#region src/chart-ex.ts
var ze = ge({ render: Re }, "chartEx");
//#endregion
export { ze as chartEx };
