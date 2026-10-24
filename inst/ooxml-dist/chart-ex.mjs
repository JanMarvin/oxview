// optional-renderer: packages/core/src/chart/chart-ex-renderer.ts
import { $ as e, $i as t, $n as n, Fn as r, Ga as i, Gi as a, In as o, J as s, Ln as c, Mt as l, Nn as u, Pn as d, Qi as f, Qn as p, R as m, Rn as h, Rt as g, S as _, Ta as v, Ut as y, Va as b, Wt as x, Y as S, Ya as C, Yt as w, Zn as T, Zt as E, _a as D, _n as O, b as k, bt as A, ct as j, da as M, ea as N, er as P, fn as F, gn as I, ha as ee, hn as te, ia as ne, in as L, it as R, jt as re, ma as ie, mn as ae, no as z, nt as oe, oa as se, on as ce, ot as le, pn as ue, rt as de, s as fe, st as pe, t as me, ta as he, tt as ge, ua as _e, vi as ve, x as B, xn as V, yt as ye, za as be, zt as H } from "./plot-area-frame-D3JtHvov.js";
import { A as xe, C as Se, D as Ce, E as we, O as Te, S as Ee, T as De, _ as U, a as Oe, b as ke, c as Ae, d as je, f as Me, g as Ne, i as Pe, j as Fe, k as Ie, l as Le, m as Re, o as ze, p as Be, s as Ve, u as He, v as Ue, w as We, x as Ge, y as W } from "./renderer-xdugdcMd.js";
import { t as G } from "./renderer-module-contract-BuTx2FWJ.js";
function Ke(e, t, n, r = 1) {
	let a = 0, o = Math.max(1, n?.w ?? 32 * r), s = Math.max(1, n?.h ?? 16 * r), c = ae(e, ({ label: n, linkedStyleIndex: c }) => {
		let l = n.labelBox, u = I(l), d = u ? e.chartStyleRoles?.dataLabelCallout ?? e.chartStyleRoles?.dataLabel : e.chartStyleRoles?.dataLabel, f = u ? z(e, "dataLabelCallout") ?? z(e, "dataLabel") : z(e, "dataLabel"), p = O(l, d, f, d != null, 0, c)?.fillPaint, m = be(l?.style, f, 0), h = l?.borderHidden === !0 ? b(f) : void 0, g = l?.borderColor != null || l?.borderFill != null || m !== void 0 || h !== void 0 || l?.borderPaintAuthored === !0 && l?.borderHidden !== !0, _ = m === void 0 ? h === void 0 ? l?.borderFill ?? (l?.borderColor ? {
			fillType: "solid",
			color: l.borderColor
		} : g ? null : i(d, c)) : h : m;
		for (let e of [p, _]) {
			if (!e) continue;
			let n = e.fillType === "image" ? fe(e, t, o, s, r) ?? 1048577 : ve(e);
			if (e.fillType === "gradient" && n > 4096 || n > 1048576 - a) {
				a = ce + 1;
				return;
			}
			a += n;
		}
	});
	return c === "not-hierarchy" ? null : c === "too-large" ? ce + 1 : a;
}
function K(e, t, n, r) {
	if (!e.chartexParetoOutlineOwner) return t;
	let i = t.chartexFormatIdx ?? n, a = t.lineColor ?? U(e, i, r, t.chartexStyle);
	return {
		...t,
		chartexStyle: {
			...t.chartexStyle,
			fillHidden: !0,
			fillPaintAuthored: !0
		},
		lineColor: a,
		lineHidden: !1
	};
}
function qe(e, t, n = 1) {
	if (e.chartexSuppressGeometry) return 0;
	if (![
		"waterfall",
		"funnel",
		"boxWhisker",
		"sunburst",
		"treemap",
		"clusteredColumn",
		"histogram",
		"pareto",
		"paretoLine"
	].includes(e.chartType)) return null;
	let r = 0, i = (e) => {
		if (!e || r > 1048576) return;
		let i = e.fillType === "image" ? fe(e, void 0, Math.max(1, t.w), Math.max(1, t.h), n) : ve(e);
		e.fillType === "gradient" && i > 4096 || i > 1048576 - r ? r = ce + 1 : r += i;
	}, a = (t, n, r, a) => {
		let o = Fe(e, t, n, r, a, "#000000", { linkedNoStyleFallback: !0 });
		o.visible && i(o.paint ?? {
			fillType: "solid",
			color: "000000"
		});
	}, o = (t, n, a, o) => {
		i(Ie(e, t, n, a, o));
		let s = xe(e, t, n, a, o, "#000000");
		if (s.visible && !Ge(s) && i(s.paint ?? {
			fillType: "solid",
			color: "000000"
		}), r > 1048576) return !1;
	}, s = (t, n) => {
		let r = [e.chartexDataPointStyle, e.chartexDataPointLineStyle];
		Te(e, Se(t, n), r, r, n, 1, "#000000", { linkedNoStyleFallback: !0 }).visible && i({
			fillType: "solid",
			color: "000000"
		});
	}, c = k(e, (t, n, r) => n === 0 ? K(e, t, n, r) : t);
	if (c) {
		if (c.kind === "tooManyInputPoints") return ce + 1;
		if (_(c, o), r > 1048576 || (B(c, o), r > 1048576)) return r;
		if (e.chartType === "pareto" && c.series.length > 0) {
			let t = e.chartexParetoOwnerIndex ?? 0, n = c.series[t], r = e.series.find((e) => e.seriesType === "line");
			s(r ?? n, r?.chartexFormatIdx ?? n?.chartexFormatIdx ?? 0);
		}
	} else if (e.chartType === "paretoLine") {
		let t = e.series[0];
		t && y(t, e.categories, { sortDescending: e.chartexParetoSortDescending ?? !1 }).points.length > 0 && s(t, g(t, 0));
	} else if (e.chartType === "waterfall") {
		let t = e.series[0], n = t?.values ?? [], r = H(t?.dataPointOverrides), a = F(n, e.categories.length, e.subtotalIndices);
		if (a.cumulativeOverflow || a.rawMax <= a.rawMin) return 0;
		for (let n = 0; n < a.bars.length; n++) {
			let o = a.bars[n];
			if (!o.paintSlot) continue;
			let s = o.semanticIndex, c = r.get(n);
			i(Ie(e, t, c, s, 3));
			let l = xe(e, t, c, s, 3, "#000000");
			l.visible && !Ge(l) && i(l.paint ?? {
				fillType: "solid",
				color: "000000"
			});
		}
	} else if (e.chartType === "funnel") {
		let t = e.series[0], n = t?.values ?? [], r = Math.max(n.length, e.categories.length);
		if (n.some((e) => e != null && e > 0)) {
			let a = H(t?.dataPointOverrides);
			for (let o = 0; o < r; o++) {
				if (!((n[o] ?? 0) > 0)) continue;
				let r = a.get(o);
				i(Ie(e, t, r, 0, 1));
				let s = xe(e, t, r, 0, 1, "#000000");
				s.visible && i(s.paint ?? {
					fillType: "solid",
					color: "000000"
				});
			}
		}
	} else if (e.chartType === "boxWhisker") {
		let t = e.chartexBox, n = t?.series.length ?? 0;
		for (let r = 0; r < n; r++) {
			let o = t.series[r], s = o.chartexFormatIdx ?? r, c = Ue(e, s, n, o.chartexStyle, o.color);
			for (let t of o.valuesByCategory) P(t, o.quartileMethod) && (i(c), a(e.chartexDataPointStyle, Se(o, s), s, n));
		}
	} else {
		let t = e.series[0], n = 1;
		ue(e, ({ node: e }) => {
			n = Math.max(n, e.branchIndex + 1);
		});
		let r = H(t?.dataPointOverrides);
		if (ue(e, ({ node: a, paintsBody: o }) => {
			if (!o) return;
			let s = r.get(a.labelIndex);
			i(Ie(e, t, s, a.branchIndex, n));
			let c = xe(e, t, s, a.branchIndex, n, "#000000", e.chartexDataPointStyle, { linkedNoStyleFallback: e.chartType === "treemap" });
			c.visible && i(c.paint ?? {
				fillType: "solid",
				color: "000000"
			});
		}) === "too-large") return ce + 1;
	}
	return r;
}
function Je(e, t, n, r, i = 0) {
	let a = t.series[0];
	if (!a) return;
	let o = x(a.values, t.chartexHistogramBinning ?? {}, a.valFormatCode, t.date1904 === !0);
	if (o.kind === "tooManyInputPoints") {
		Le(e, n, L + 1);
		return;
	}
	ze(e, C(t, {
		chartType: "clusteredBar",
		categories: o.categories,
		series: [{
			...a,
			categories: void 0,
			values: o.counts,
			valFormatCode: null
		}]
	}), n, r, { gapPolicy: "chartex" }, i);
}
function Ye(t, n, r, i, a) {
	let { x: o, y: l, w: u, h: d } = r, f = n.series[0]?.values ?? [], p = n.categories, g = Math.max(f.length, p.length);
	if (g === 0 || Le(t, r, g)) return;
	let { bars: _, rawMax: y, rawMin: b, cumulativeOverflow: x } = F(f, p.length, n.subtotalIndices);
	if (x) {
		t.fillStyle = "#888", t.font = "12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText("(chart values out of range)", o + u / 2, l + d / 2);
		return;
	}
	if (y <= b) return;
	let w = n.subtotalIndices.length === 0 && _.every((e, t) => !e.hasValue || f[t] >= 0), T = !n.valAxisHidden && n.valAxisTickLabelPos !== "none" && !w, O = Ae(t, n, u, d, i), k = N(n, u, d, i), P = m(n.valAxisFontSizeHpt, d, i), I = m(n.catAxisFontSizeHpt, d, i), L = A(n, n.valAxisFontFace, "minor"), re = A(n, n.catAxisFontFace, "minor"), ae = oe(n, b, y, d / i);
	t.save();
	let z = 0;
	if (T) {
		t.font = ye(P, L, n.valAxisFontBold ?? !1, n.valAxisFontItalic ?? !1);
		let e = 0;
		for (let r of ae.majorLines) e = Math.max(e, D(t, ge(n, r, !1)));
		z = e + 8;
	}
	let ce = T ? M(ae.majorLines.map((e) => ge(n, e, !1)), ie(P)) / 2 : 0, ue = Math.max(1, u - k.valBandW - z - u * .02) / g;
	t.font = ye(I, re, n.catAxisFontBold ?? !1, n.catAxisFontItalic ?? !1);
	let fe = p.slice(0, g).map((e) => j(t, V(e, n.catAxisFormatCode, n.date1904), Math.max(1, ue - 8))), _e = 0;
	for (let e of fe) e.some(Boolean) && (_e = Math.max(_e, e.length));
	let ve = n.catAxisHidden || _e === 0 ? 0 : _e * (I + 2) + 4, B = n.series[0], be = H(B?.dataLabelOverrides), Ce = H(B?.dataPointOverrides), Ee = B?.chartexStyle, De = `#${B?.color ?? U(n, 0, 3, Ee)}`, Oe = `#${U(n, 1, 3, Ee)}`, Pe = `#${U(n, 2, 3, Ee)}`, Fe = Ue(n, 0, 3, Ee, B?.color), Re = Ue(n, 1, 3, Ee), ze = Ue(n, 2, 3, Ee), W = C(n, {
		chartType: "clusteredBar",
		series: [
			ke(n, "Increase", B, n.chartexDataPointStyle, 0, 3, De, !1, !0, !0),
			ke(n, "Decrease", B, n.chartexDataPointStyle, 1, 3, Oe, !1, !0, !0),
			ke(n, "Total", B, n.chartexDataPointStyle, 2, 3, Pe, !1, !0, !0)
		]
	}), G = Be(t, W, u, d, i), { legRightW: Ke, legLeftW: K, legTopH: qe, legBottomH: Je } = he(G, n.legendOverlay === !0), Ye = se(n, o, l, u, d, i, {
		titleBand: O,
		legendReserve: G,
		pad: {
			t: O.bandH + qe + P / 2 + 2 + ce,
			r: Ke + u * .02,
			b: Je + k.catBandH + ve,
			l: K + k.valBandW + (n.valAxisHidden ? u * .02 : Math.max(u * .03, z))
		},
		honorPlotAreaManualLayout: !0
	});
	Ve(t, n, o, l, u, d, l + Ye.title.topPad, Ye.title.fontPx);
	let { px0: q, py0: J, pw: Y, ph: X } = Ye.plotRect;
	if (Y <= 0 || X <= 0) return;
	me(t, n, q, J, Y, X, i, a);
	let Xe = oe(n, b, y, X / i), Z = (e) => J + X - Xe.frac(e) * X, Q = E(n.valAxisLineColor, n.valAxisLineWidthEmu, i), Ze = E(n.catAxisLineColor, n.catAxisLineWidthEmu, i), Qe = le(n, i);
	if (!n.valAxisHidden) {
		t.font = ye(P, L, n.valAxisFontBold ?? !1, n.valAxisFontItalic ?? !1), t.fillStyle = n.valAxisFontColor ? `#${n.valAxisFontColor}` : "#595959", t.textAlign = "right", t.textBaseline = "middle";
		let r = pe(n, i);
		for (let e of Xe.minorLines) R(t, q, Y, Z(e), !1, r);
		for (let r of Xe.majorLines) {
			let a = Z(r);
			if (e(n)) {
				t.strokeStyle = Qe.color, t.lineWidth = Qe.width;
				let e = Qe.dash.length > 0 && t.getLineDash ? t.getLineDash() : [];
				Qe.dash.length > 0 && t.setLineDash(Qe.dash), t.beginPath(), t.moveTo(q, a), t.lineTo(q + Y, a), t.stroke(), Qe.dash.length > 0 && t.setLineDash(e);
			}
			T && ee(t, ge(n, r, !1), q - 4, a, ie(P)), s(t, n.valAxisMajorTickMark, "val", q, a, Q.color, Q.width, !1, n.valAxisLineHidden, "major", i, n.valAxisLineDash);
		}
		for (let e of Xe.minorTicks) s(t, n.valAxisMinorTickMark, "val", q, Z(e), Q.color, Q.width, !1, n.valAxisLineHidden, "minor", i, n.valAxisLineDash);
	}
	let $e = !n.valAxisHidden && !n.valAxisLineHidden, et = !n.catAxisHidden && !n.catAxisLineHidden;
	$e && de(t, q, J, q, J + X, Q.color, Q.width, n.valAxisLineDash), et && de(t, q, J + X, q + Y, J + X, Ze.color, Ze.width, n.catAxisLineDash);
	let tt = Y / g, $ = tt / (1 + v(n.barGapWidth, "chartex") / 100);
	_.forEach((e, r) => {
		let s = q + tt * r + (tt - $) / 2, v = Math.min(Z(e.start), Z(e.end)), y = Math.max(Z(e.start), Z(e.end)), b = Math.max(1, y - v), x = e.semanticIndex, S = Ce.get(r), C = Ie(n, B, S, x, 3), w = S?.color ? `#${S.color}` : e.isSub ? Pe : e.isPos ? De : Oe, T = We(n, n.chartexDataPointStyle, "line", x, 3), E = xe(n, B, S, x, 3, T ? `#${T}` : w);
		if (e.paintSlot && h(t, c(S?.chartexStyle, B?.chartexStyle), n.chartexDataPointStyle, x, {
			x: s,
			y: v,
			w: $,
			h: b
		}, i, (e) => {
			C && we(e, C, {
				x: s,
				y: v,
				w: $,
				h: b
			}, w, i, a), !Ge(E) && Ne(e, E, i, {
				x: s,
				y: v,
				w: $,
				h: b
			}, a) && e.strokeRect(s, v, $, b);
		}), e.paintSlot && _[r + 1]?.paintSlot && r < g - 1 && n.chartexConnectorLines !== !1) {
			let a = q + tt * (r + 1) + (tt - $) / 2, o = e.isPos ? v : y;
			t.save();
			let c = [n.chartexSeriesLineStyle, n.chartexDataPointLineStyle], l = Te(n, Se(B, x), c, c, x, 3, "#000000", { linkedNoStyleFallback: !0 });
			Ne(t, l, i) && (l.widthEmu ?? (t.lineWidth = .75 * i), t.beginPath(), t.moveTo(s + $, o), t.lineTo(a, o), t.stroke()), t.restore();
		}
		let D = e.hasValue ? f[r] : 0, O = te(n, B, r, p[r] ?? "", D, {
			visible: n.showDataLabels,
			showVal: !0,
			showCatName: !1
		}, be, !e.hasValue);
		if (O) {
			let e = B?.dataLabelColors?.[r] ?? O.fontColor ?? null, c = e ? `#${e}` : n.dataLabelFontColor ? `#${n.dataLabelFontColor}` : "#595959", f = ne(O.fontSizeHpt, i) ?? m(n.dataLabelFontSizeHpt, d, i), p = O.fontBold ?? n.dataLabelFontBold ?? !1, h = A(n, O.fontFace ?? n.dataLabelFontFace, "minor");
			t.font = `${O.textStyle.fontItalic ? "italic " : ""}${p ? "bold " : ""}${f}px ${h}`, He(t, O.text, {
				kind: "bar",
				rect: {
					x: s,
					y: v,
					w: $,
					h: b
				},
				orientation: "vertical",
				negative: D < 0,
				position: O.position ?? "outEnd"
			}, {
				x: q,
				y: J,
				w: Y,
				h: X
			}, f, c, O.manualLayout, {
				x: o,
				y: l,
				w: u,
				h: d
			}, je(n, O.richRuns, i, h, p, O.textStyle), void 0, O.textStyle, i, O.labelBox, a);
		}
	}), t.textAlign = "center", t.textBaseline = "top", t.fillStyle = n.catAxisFontColor ? `#${n.catAxisFontColor}` : "#595959", t.font = ye(I, re, n.catAxisFontBold ?? !1, n.catAxisFontItalic ?? !1);
	let nt = J + X + 4;
	for (let e = 0; e < g && !n.catAxisHidden; e++) {
		let n = q + tt * e + tt / 2;
		(fe[e] ?? []).forEach((e, r) => e && t.fillText(e, n, nt + r * (I + 2)));
	}
	S(t, n, o, l, u, d, q, J, Y, X, K, Je, k.catFontPx, k.valFontPx), Me(t, W, G, o, l, u, d, q, J, Y, X, O.bandH + 2, i, [
		Fe,
		Re,
		ze
	], a), t.restore();
}
function q(e, t, n, r, i) {
	let a = t.series[0]?.values ?? [], o = Math.max(a.length, t.categories.length);
	if (o === 0 || Le(e, n, o)) return;
	let s = 0;
	for (let e = 0; e < o; e++) s = Math.max(s, a[e] ?? 0);
	if (!(s > 0)) return;
	let { x: l, y: u, w: d, h: f } = n, p = Ae(e, t, d, f, r), g = t.series[0], _ = H(g?.dataLabelOverrides), y = `#${g?.color ?? U(t, 0, 1, g?.chartexStyle)}`, b = Ue(t, 0, 1, g?.chartexStyle, g?.color), x = {
		...t,
		series: [ke(t, g?.name ?? "", g, t.chartexDataPointStyle, 0, 1, y)]
	}, S = Be(e, x, d, f, r), { legRightW: C, legLeftW: w, legTopH: T, legBottomH: O } = he(S, t.legendOverlay === !0), k = m(t.catAxisFontSizeHpt, f, r);
	e.save(), e.font = ye(k, A(t, t.catAxisFontFace, "minor"), t.catAxisFontBold ?? !1, t.catAxisFontItalic ?? !1);
	let j = 0;
	if (!t.catAxisHidden) {
		for (let n = 0; n < Math.min(o, t.categories.length); n++) j = Math.max(j, D(e, t.categories[n]));
		t.categories.length > 0 && (j += 10);
	}
	let M = se(t, l, u, d, f, r, {
		titleBand: p,
		legendReserve: S,
		pad: {
			t: p.bandH + T + 2,
			r: C + d * .02,
			b: O + f * .02,
			l: w + j + d * .02
		},
		honorPlotAreaManualLayout: !0
	});
	Ve(e, t, l, u, d, f, u + M.title.topPad, M.title.fontPx);
	let { px0: N, py0: P, pw: F, ph: I } = M.plotRect;
	if (F <= 0 || I <= 0) return;
	me(e, t, N, P, F, I, r, i);
	let L = I / o, R = L / (1 + v(t.barGapWidth, "chartex") / 100), re = H(g?.dataPointOverrides);
	for (let n = 0; n < o; n++) {
		let o = Math.max(0, a[n] ?? 0), p = F * o / s, v = N + (F - p) / 2, b = P + L * n + (L - R) / 2, x = re.get(n), S = Ie(t, g, x, 0, 1), C = xe(t, g, x, 0, 1, y), w = (e) => {
			S && p > 0 ? we(e, S, {
				x: v,
				y: b,
				w: p,
				h: R
			}, y, r, i) : S && (e.fillStyle = W(e, S, v, b, p, R, y, i), e.fillRect(v, b, p, R)), Ne(e, C, r, p > 0 ? {
				x: v,
				y: b,
				w: p,
				h: R
			} : void 0, i) && e.strokeRect(v, b, p, R);
		};
		p > 0 ? h(e, c(x?.chartexStyle, g?.chartexStyle), t.chartexDataPointStyle, 0, {
			x: v,
			y: b,
			w: p,
			h: R
		}, r, w) : w(e);
		let T = t.categories[n];
		!t.catAxisHidden && T != null && (e.fillStyle = t.catAxisFontColor ? `#${t.catAxisFontColor}` : "#595959", e.textAlign = "right", e.textBaseline = "middle", ee(e, T, N - 6, b + R / 2, ie(k)));
		let E = te(t, g, n, T ?? "", o, {
			visible: !1,
			showVal: !1,
			showCatName: !1
		}, _);
		if (E) {
			let n = ne(E.fontSizeHpt, r) ?? m(t.dataLabelFontSizeHpt, f, r), a = A(t, E.fontFace ?? t.dataLabelFontFace, "minor");
			e.font = `${E.textStyle.fontItalic ? "italic " : ""}${E.fontBold ? "bold " : ""}${n}px ${a}`, He(e, E.text, {
				kind: "bar",
				rect: {
					x: v,
					y: b,
					w: p,
					h: R
				},
				orientation: "horizontal",
				negative: !1,
				position: E.position ?? "ctr"
			}, {
				x: N,
				y: P,
				w: F,
				h: I
			}, n, E.fontColor ? `#${E.fontColor}` : "#ffffff", E.manualLayout, {
				x: l,
				y: u,
				w: d,
				h: f
			}, je(t, E.richRuns, r, a, E.fontBold ?? !1, E.textStyle), void 0, E.textStyle, r, E.labelBox, i);
		}
	}
	if (!t.catAxisHidden && !t.catAxisLineHidden) {
		let n = E(t.catAxisLineColor, t.catAxisLineWidthEmu, r);
		e.strokeStyle = n.color, e.lineWidth = n.width, e.beginPath(), e.moveTo(N, P), e.lineTo(N, P + I), e.stroke();
	}
	Me(e, x, S, l, u, d, f, N, P, F, I, p.bandH + 2, r, [b], i), e.restore();
}
function J(e, t, n, r, i = 0) {
	let a = t.series[0];
	if (!a || Le(e, n, Math.max(t.categories.length, a.categories?.length ?? 0, a.values.length))) return;
	let o = y(a, t.categories, { sortDescending: t.chartexParetoSortDescending ?? !1 });
	if (o.points.length === 0) return;
	let s = g(a, 0), c = [t.chartexDataPointStyle, t.chartexDataPointLineStyle], l = Te(t, Se(a, s), c, c, s, 1, `#${U(t, s, 1, a.chartexStyle)}`, { linkedNoStyleFallback: !0 });
	Pe(e, C(t, {
		chartType: "line",
		categories: t.chartexParetoFlatEndpoint ? [...o.categories, ""] : o.categories,
		series: [{
			...o.series,
			values: t.chartexParetoFlatEndpoint ? [...o.series.values, 1] : o.series.values,
			showMarker: !1,
			lineHidden: !l.visible,
			lineColor: l.color.replace(/^#/, ""),
			lineWidthEmu: l.widthEmu ?? 9525,
			chartexStyle: {
				lineDash: l.dash,
				lineCap: l.cap,
				lineJoin: l.join
			}
		}],
		catAxisHidden: !1,
		catAxisTickLabelPos: t.chartexParetoSortDescending == null || !(a.categories ?? t.categories).some((e) => e != null && e !== "") ? "none" : "nextTo",
		showLegend: !1,
		valMin: t.valMin ?? 0,
		valMax: t.valMax ?? (t.valAxisFormatCode === "0%" ? 1 : 1.2),
		valAxisMajorUnit: t.valAxisMajorUnit ?? (t.valAxisFormatCode === "0%" ? .1 : .2)
	}), n, r, i);
}
function Y(e) {
	return {
		min: e.secondaryValAxis?.min ?? 0,
		max: e.secondaryValAxis?.max ?? 1,
		title: e.secondaryValAxis?.title ?? null,
		hidden: e.secondaryValAxis?.hidden ?? !1,
		formatCode: e.secondaryValAxis?.formatCode ?? "0%",
		fontColor: e.secondaryValAxis?.fontColor ?? null,
		fontSizeHpt: e.secondaryValAxis?.fontSizeHpt ?? null,
		fontFace: e.secondaryValAxis?.fontFace ?? null,
		lineColor: e.secondaryValAxis?.lineColor ?? null,
		lineWidthEmu: e.secondaryValAxis?.lineWidthEmu ?? null,
		lineHidden: e.secondaryValAxis?.lineHidden ?? !1,
		majorTickMark: e.secondaryValAxis?.majorTickMark ?? "out",
		minorTickMark: e.secondaryValAxis?.minorTickMark ?? null,
		majorUnit: e.secondaryValAxis?.majorUnit ?? null,
		minorUnit: e.secondaryValAxis?.minorUnit ?? null,
		titleFontSizeHpt: e.secondaryValAxis?.titleFontSizeHpt ?? null,
		titleFontBold: e.secondaryValAxis?.titleFontBold ?? null,
		titleFontColor: e.secondaryValAxis?.titleFontColor ?? null,
		titleFontFace: e.secondaryValAxis?.titleFontFace ?? null
	};
}
function X(e, t, n, r, i = 0) {
	let a = t.series.filter((e) => e.seriesType !== "line"), o = t.chartexParetoOwnerIndex ?? 0, s = a[o];
	if (!s || a.length === 0 || Le(e, n, Math.max(t.categories.length, ...a.map((e) => e.values.length)))) return;
	let c = a.map((e, n) => y(n === 0 ? K(t, e, n, a.length) : e, t.categories, {
		sortDescending: t.chartexParetoSortDescending ?? !0,
		keepUnvaluedCategories: !0
	})), l = c[o], u = c[0];
	if (l.points.length === 0 || u.points.length === 0) return;
	let d = t.chartexParetoFlatEndpoint === !0 && u.categories.length === u.points.length, f = t.series.find((e) => e.seriesType === "line"), p = f?.chartexFormatIdx ?? s.chartexFormatIdx ?? 0, m = {
		...f ?? l.series,
		name: f?.name || "Cumulative %",
		values: l.series.values,
		categories: u.categories,
		color: f?.color ?? We(t, t.chartexDataPointLineStyle, "line", p, 1) ?? s.lineColor ?? s.color,
		seriesType: "line",
		useSecondaryAxis: !0,
		showMarker: !1
	}, h = Y(t);
	ze(e, C(t, {
		chartType: "clusteredBar",
		categories: d ? [...u.categories, ""] : u.categories,
		series: [...c.map((e) => ({
			...e.orderedSeries,
			values: d ? [...e.orderedSeries.values, null] : e.orderedSeries.values,
			seriesType: null,
			useSecondaryAxis: !1
		})), d ? {
			...m,
			values: [...m.values, 1]
		} : m],
		secondaryValAxis: h
	}), n, r, {
		gapPolicy: "chartex",
		semanticLineNoStyleFallback: !0
	}, i);
}
var Xe = 7, Z = .05, Q = 1.2;
function Ze(e, t, n, r) {
	let i = (r ?? t) - (n ?? e);
	if (!(i > 0) || !Number.isFinite(i)) return null;
	let a = re(i, Xe);
	if (!(a > 0) || !Number.isFinite(a)) return null;
	let o = e - i * Z, s = t + i * Z;
	e >= 0 && (e === 0 || t > Q * e) && (o = 0), t <= 0 && (t === 0 || Math.abs(e) > Q * Math.abs(t)) && (s = 0);
	let c = n ?? Math.floor(o / a) * a, l = r ?? Math.ceil(s / a) * a;
	return ![c, l].every(Number.isFinite) || !(l > c) ? null : {
		min: c,
		max: l,
		majorUnit: a
	};
}
function Qe(e, r, i, o, u) {
	let d = 3 * o, _ = r.chartexBox;
	if (!_ || _.categories.length === 0 || _.series.length === 0) return;
	let { x: y, y: b, w: x, h: C } = i;
	if (Le(e, i, n(_.series.map((e) => e.valuesByCategory), 1e4))) return;
	let O = () => {
		e.fillStyle = "#888", e.font = "12px sans-serif", e.textAlign = "center", e.textBaseline = "middle", e.fillText("(chart values out of range)", y + x / 2, b + C / 2);
	}, k = (e) => {
		let t = e.max - e.min, n = t / e.step;
		return Number.isFinite(e.min) && Number.isFinite(e.max) && Number.isFinite(e.step) && Number.isFinite(t) && Number.isFinite(n) && e.max > e.min && e.step > 0 && n <= 1e3 && e.min + e.step > e.min;
	}, j = Infinity, F = -Infinity;
	for (let e of _.series) for (let t of e.valuesByCategory) for (let e of t) Number.isFinite(e) && (e < j && (j = e), e > F && (F = e));
	if (!isFinite(j) || !isFinite(F)) return;
	if (!Number.isFinite(F - j)) {
		O();
		return;
	}
	let I = r.valAxisMajorUnit == null ? Ze(j, F, r.valMin, r.valMax) : null, te = I ? {
		...r,
		valMin: I.min,
		valMax: I.max,
		valAxisMajorUnit: I.majorUnit
	} : r, ne = A(r, r.valAxisFontFace, "minor"), L = m(r.valAxisFontSizeHpt, C, o), re = _e(L), ae = Oe(o), z = l({
		dataMin: j,
		dataMax: F,
		explicitMin: te.valMin,
		explicitMax: te.valMax,
		axisLenPt: C / o,
		majorUnit: te.valAxisMajorUnit
	});
	if (!k({
		min: z.min,
		max: z.max,
		step: z.majorUnit
	})) {
		O();
		return;
	}
	let ce = 0;
	if (!r.valAxisHidden) {
		let t = e.font;
		e.font = ye(L, ne, r.valAxisFontBold ?? !1, r.valAxisFontItalic ?? !1);
		let n = 0;
		for (let t of z.majorTicks) {
			let i = ge(r, t, !1);
			n = Math.max(n, D(e, i));
		}
		e.font = t, ce = n + re + a * o;
	}
	let ue = Ae(e, r, x, C, o), fe = m(r.catAxisFontSizeHpt, C, o), ve = m(r.valAxisFontSizeHpt, C, o), B = N(r, x, C, o), V = _.series.length, be = _.series.map((e, t) => g(e, t)), H = _.series.map((e, t) => {
		let n = be[t], i = e.color ?? U(r, n, V, e.chartexStyle), a = ke(r, e.name, Se(e, n) ?? e, r.chartexDataPointStyle, n, V, i, !0), o = Ce(r, e, n, V, i);
		return o.darkened && a.lineColor != null ? {
			...a,
			lineColor: o.line.color.replace(/^#/, "")
		} : a;
	}), xe = {
		...r,
		series: H
	}, Te = Be(e, xe, x, C, o), { legRightW: De, legLeftW: je, legTopH: Pe, legBottomH: Ie } = he(Te, r.legendOverlay === !0), ze = r.valAxisHidden ? 0 : M(z.majorTicks.map((e) => ge(r, e, !1)), ie(L)) / 2, He = r.catAxisHidden ? 0 : M(_.categories, ie(fe)), Ge = se(r, y, b, x, C, o, {
		titleBand: ue,
		legendReserve: Te,
		pad: {
			t: ue.bandH + Pe + ve / 2 + 2 + ze,
			r: De + x * .02,
			b: Ie + B.catBandH + (r.catAxisHidden ? C * .02 : f(fe) + He),
			l: je + B.valBandW + (r.valAxisHidden ? x * .02 : ce)
		},
		honorPlotAreaManualLayout: !0
	}), { px0: W, py0: G, pw: Ke, ph: K } = Ge.plotRect;
	if (Ke <= 0 || K <= 0) {
		Ve(e, r, y, b, x, C, b + Ge.title.topPad, Ge.title.fontPx);
		return;
	}
	me(e, r, W, G, Ke, K, o, u);
	let qe = _.categories, Je = qe.length, Ye = oe(te, j, F, K / o);
	if (!k(Ye)) {
		O();
		return;
	}
	Ve(e, r, y, b, x, C, b + Ge.title.topPad, Ge.title.fontPx);
	let { min: q, max: J } = Ye, Y = J - q, X = (e) => G + K * (1 - (e - q) / Y), Xe = E(r.valAxisLineColor, r.valAxisLineWidthEmu, o), Z = le(r, o);
	if (e.save(), !r.valAxisHidden) {
		if (e.font = ye(L, ne, r.valAxisFontBold ?? !1, r.valAxisFontItalic ?? !1), e.textAlign = "right", e.textBaseline = "middle", r.valAxisMinorGridlines) {
			let t = pe(r, o);
			for (let n of Ye.minorLines) R(e, W, Ke, X(n), !1, t);
		}
		for (let t of Ye.majorLines) {
			let n = X(t);
			if (r.valAxisMajorGridlines !== !1) {
				e.strokeStyle = Z.color, e.lineWidth = Z.width;
				let t = Z.dash.length > 0 && e.getLineDash ? e.getLineDash() : [];
				Z.dash.length > 0 && e.setLineDash(Z.dash), e.beginPath(), e.moveTo(W, n), e.lineTo(W + Ke, n), e.stroke(), Z.dash.length > 0 && e.setLineDash(t);
			}
			e.fillStyle = r.valAxisFontColor ? `#${r.valAxisFontColor}` : "#595959", ee(e, ge(r, t, !1), W - ae, n, ie(L)), s(e, r.valAxisMajorTickMark, "val", W, n, Xe.color, Xe.width, !1, r.valAxisLineHidden, "major", o, r.valAxisLineDash);
		}
		for (let t of Ye.minorTicks) s(e, r.valAxisMinorTickMark, "val", W, X(t), Xe.color, Xe.width, !1, r.valAxisLineHidden, "minor", o, r.valAxisLineDash);
		r.valAxisLineHidden || de(e, W, G, W, G + K, Xe.color, Xe.width, r.valAxisLineDash);
	}
	let Q = E(r.catAxisLineColor, r.catAxisLineWidthEmu, o);
	!r.catAxisHidden && !r.catAxisLineHidden && de(e, W, G + K, W + Ke, G + K, Q.color, Q.width, r.catAxisLineDash);
	let Qe = Ke / Je, $e = v(r.barGapWidth, "chartex"), et = (e) => `#${_.series[e].color ?? U(r, be[e], V, _.series[e].chartexStyle)}`, tt = (e) => Ue(r, be[e], V, _.series[e].chartexStyle, _.series[e].color), $ = _.series.map((e) => e.valuesByCategory.map((t) => P(t, e.quartileMethod))), nt = r.chartStyleMarkerSymbol ?? r.chartexMarkerSymbol ?? "circle", rt = _.series.map((e, t) => nt === "none" ? $[t].map(() => []) : p($[t], e.showNonoutliers, e.showOutliers, X, 3 * o)), it = (e, t) => {
		let n = T(W, Ke, _.oneBoxPerSeries ? 1 : Je, V, _.oneBoxPerSeries ? 0 : e, t, $e);
		return n ? {
			bx: n.boxX,
			boxW: n.boxWidth,
			cx: n.centerX
		} : {
			bx: W,
			boxW: 0,
			cx: W
		};
	}, at = (t, n) => {
		let i = _.series[t], a = $[t][n];
		if (!a) return;
		let { bx: s, boxW: l, cx: f } = it(n, t), p = et(t), m = tt(t), g = r.chartexDataPointStyle, v = r.chartexDataPointMarkerStyle ?? g, y = be[t], b = Se(i, y) ?? i, x = We(r, g, "line", y, V), S = b.lineColor ? `#${b.lineColor}` : x ? `#${x}` : p, C = Ce(r, i, y, V, S).line, T = We(r, v, "fill", y, V), E = Ee(r, y, V, i.chartexStyle, i.color, v), D = Fe(r, v, b, y, V, We(r, v, "line", y, V) ?? S, { linkedNoStyleFallback: !0 }), O = c(i.chartexStyle), k = X(a.q1), A = X(a.q3), j = Math.min(k, A), M = Math.max(1, Math.abs(k - A)), N = l * .4;
		if (Ne(e, C, o)) {
			let t = X(a.whiskerHi), n = X(a.whiskerLo);
			e.beginPath(), a.whiskerHi > a.q3 && (e.moveTo(f, t), e.lineTo(f, A)), a.whiskerLo < a.q1 && (e.moveTo(f, k), e.lineTo(f, n)), a.whiskerHi >= a.q3 && (e.moveTo(f - N / 2, t), e.lineTo(f + N / 2, t)), a.whiskerLo <= a.q1 && (e.moveTo(f - N / 2, n), e.lineTo(f + N / 2, n)), e.stroke();
		}
		h(e, i.chartexStyle, g, y, {
			x: s,
			y: j,
			w: l,
			h: M
		}, o, (e) => {
			if (m && we(e, m, {
				x: s,
				y: j,
				w: l,
				h: M
			}, p, o, u), Ne(e, C, o, {
				x: s,
				y: j,
				w: l,
				h: M
			}, u)) {
				let t = e.lineWidth;
				e.strokeRect(s + t / 2, j + t / 2, l - t, M - t);
			}
		});
		let P = X(a.median);
		Ne(e, C, o) && (e.beginPath(), e.moveTo(s, P), e.lineTo(s + l, P), e.stroke());
		for (let r of rt[t][n]) Re(e, f, X(r), nt, 3, E ? T ? `#${T}` : p : "transparent", D.visible ? D.color : null, o, D.widthEmu == null ? 1 : w(D.widthEmu, o), E, u, D.visible ? D.paint : null, D.dash, D.customDash, D.cap, D.join, !1, O, v, y, y);
		if (i.meanMarker) {
			let t = X(a.mean), n = d;
			Ne(e, C, o) && (e.beginPath(), e.moveTo(f - n, t - n), e.lineTo(f + n, t + n), e.moveTo(f + n, t - n), e.lineTo(f - n, t + n), e.stroke());
		}
	}, ot = (t) => {
		let n = _.series[t];
		if (!n.meanLine) return;
		let i = Ce(r, n, be[t], V, et(t)).line;
		if (e.save(), Ne(e, i, o)) {
			let n = !1;
			e.beginPath();
			for (let r = 0; r < Je; r++) {
				let i = $[t][r];
				if (!i) {
					n = !1;
					continue;
				}
				let { cx: a } = it(r, t), o = X(i.mean);
				n ? e.lineTo(a, o) : e.moveTo(a, o), n = !0;
			}
			e.stroke();
		}
		e.restore();
	};
	for (let e = 0; e < V; e++) {
		for (let t = 0; t < Je; t++) at(e, t);
		ot(e);
	}
	let st = m(r.catAxisFontSizeHpt, C, o), ct = t(st);
	for (let t = 0; t < Je; t++) {
		let n = W + Qe * (t + .5);
		if (r.catAxisHidden || s(e, r.catAxisMajorTickMark, "cat", G + K, n, Q.color, Q.width, !1, r.catAxisLineHidden, "major", o, r.catAxisLineDash), !r.catAxisHidden) {
			e.font = ye(st, A(r, r.catAxisFontFace, "minor"), r.catAxisFontBold ?? !1, r.catAxisFontItalic ?? !1), e.fillStyle = r.catAxisFontColor ? `#${r.catAxisFontColor}` : "#595959", e.textAlign = "center", e.textBaseline = "top";
			let i = qe[t];
			ee(e, i, n, G + K + ct, ie(st));
		}
	}
	e.restore(), S(e, r, y, b, x, C, W, G, Ke, K, je, Ie, B.catFontPx, B.valFontPx), Me(e, xe, Te, y, b, x, C, W, G, Ke, K, ue.bandH + 2, o, _.series.map((e, t) => tt(t)), u);
}
var $e = .18;
function et(e, t, n, i, a) {
	let s = t.chartexSunburst;
	if (!s || s.rows.length === 0) return;
	let { x: l, y: f, w: p, h: m } = n;
	if (d(s.rows)) {
		Le(e, n, L + 1);
		return;
	}
	let g = u(s.rows);
	if (g.layoutWeight <= 0 || g.children.length === 0) return;
	let _ = t.series[0], v = H(_?.dataLabelOverrides), y = g.children.map((e, n) => Ue(t, n, g.children.length, _?.chartexStyle, _?.color)), b = C(t, {
		chartType: "clusteredBar",
		series: g.children.map((e) => {
			let n = U(t, e.branchIndex, g.children.length, _?.chartexStyle);
			return ke(t, e.label, _, t.chartexDataPointStyle, e.branchIndex, g.children.length, n, !1, !1);
		})
	}), x = Be(e, b, p, m, i), S = se(t, l, f, p, m, i, {
		titleTopPadFrac: .035,
		titleBottomPadFrac: .035,
		legendReserve: x,
		radialGapFrac: .02,
		honorPlotAreaManualLayout: !0
	});
	Ve(e, t, l, f, p, m, f + S.title.topPad, S.title.fontPx);
	let { px0: w, py0: T, pw: E, ph: D } = S.plotRect;
	if (!(E > 0) || !(D > 0)) return;
	me(e, t, w, T, E, D, i, a);
	let O = w + E / 2, k = T + D / 2, j = Math.min(E, D) * .46;
	g.a0 = -Math.PI / 2, g.a1 = -Math.PI / 2 + Math.PI * 2, r(g);
	let M = o(g) + 1, N = j * $e, P = (j - N) / M, F = (e) => `#${U(t, e, g.children.length, _?.chartexStyle)}`, I = H(_?.dataPointOverrides), ee = _?.seriesDataLabels, R = A(t, ee?.fontFace ?? t.dataLabelFontFace, "minor"), re = ne(ee?.fontSizeHpt, i) ?? Math.max(7, Math.min(13, j * .075)), ie = ee?.fontColor ? `#${ee.fontColor}` : "#ffffff", ae = Array.from({ length: M }, () => []), z = [g];
	for (; z.length > 0;) {
		let e = z.pop();
		e.depth >= 0 && ae[e.depth].push(e);
		for (let t = e.children.length - 1; t >= 0; t--) z.push(e.children[t]);
	}
	e.save();
	for (let n = 0; n < M; n++) {
		let r = N + n * P, o = r + P;
		for (let s of ae[n]) {
			let n = s.a1 - s.a0;
			if (n <= 1e-4) continue;
			let u = I.get(s.labelIndex), d = Ie(t, _, u, s.branchIndex, g.children.length), y = xe(t, _, u, s.branchIndex, g.children.length, "#ffffff"), b = {
				x: O - o,
				y: k - o,
				w: o * 2,
				h: o * 2
			};
			h(e, c(u?.chartexStyle, _?.chartexStyle), t.chartexDataPointStyle, _?.chartexFormatIdx ?? 0, b, i, (e) => {
				e.beginPath(), e.arc(O, k, o, s.a0, s.a1), e.arc(O, k, r, s.a1, s.a0, !0), e.closePath(), d && De(e, d, b, F(s.branchIndex), i, a), Ne(e, y, i, b, a) && e.stroke();
			}, s.branchIndex);
			let x = te(t, _, s.labelIndex, s.label, s.value, {
				visible: !1,
				showVal: !1,
				showCatName: !1
			}, v);
			if (!x) continue;
			let S = x.text, C = ne(x.fontSizeHpt, i) ?? re, j = x.fontColor ? `#${x.fontColor}` : ie, M = x.fontFace ? A(t, x.fontFace, "minor") : R, N = (s.a0 + s.a1) / 2, ee = (r + o) / 2, L = P - 4, ae = n * ee;
			if (!x.manualLayout && L < C * .9 && ae < C * .9) continue;
			let z = O + Math.cos(N) * ee, oe = k + Math.sin(N) * ee;
			if (e.font = `${x.textStyle.fontItalic ? "italic " : ""}${x.fontBold ? "bold " : ""}${C}px ${M}`, x.manualLayout) {
				He(e, S, {
					kind: "point",
					x: z,
					y: oe,
					position: x.position ?? "ctr"
				}, {
					x: w,
					y: T,
					w: E,
					h: D
				}, C, j, x.manualLayout, {
					x: l,
					y: f,
					w: p,
					h: m
				}, je(t, x.richRuns, i, M, x.fontBold ?? !1, x.textStyle), void 0, x.textStyle, i, x.labelBox, a);
				continue;
			}
			e.save(), e.translate(z, oe);
			let se = N, ce = se * 180 / Math.PI % 360;
			(ce > 90 || ce < -90) && (se += Math.PI), e.rotate(se), e.font = `${x.textStyle.fontItalic ? "italic " : ""}${x.fontBold ? "bold " : ""}${C}px ${M}`, He(e, S, {
				kind: "point",
				x: 0,
				y: 0,
				position: x.position ?? "ctr"
			}, {
				x: -L / 2,
				y: -ae / 2,
				w: L,
				h: ae
			}, C, j, void 0, {
				x: -L / 2,
				y: -ae / 2,
				w: L,
				h: ae
			}, je(t, x.richRuns, i, M, x.fontBold ?? !1, x.textStyle), void 0, x.textStyle, i, x.labelBox, a), e.restore();
		}
	}
	e.restore(), Me(e, b, x, l, f, p, m, w, T, E, D, S.title.bandH + 2, i, y, a);
}
function tt(e, t) {
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
function $(e, t, n, r, i) {
	let a = t.chartexTreemap;
	if (!a || a.rows.length === 0) return;
	if (d(a.rows)) {
		Le(e, n, L + 1);
		return;
	}
	let o = u(a.rows, !0);
	if (o.layoutWeight <= 0 || o.children.length === 0) return;
	let s = t.series[0], l = o.children.map((e) => Ue(t, e.branchIndex, o.children.length, s?.chartexStyle, s?.color)), f = C(t, {
		chartType: "clusteredBar",
		series: o.children.map((e) => {
			let n = U(t, e.branchIndex, o.children.length, s?.chartexStyle);
			return ke(t, e.label, s, t.chartexDataPointStyle, e.branchIndex, o.children.length, n);
		})
	}), p = Be(e, f, n.w, n.h, r), m = se(t, n.x, n.y, n.w, n.h, r, {
		titleTopPadFrac: .035,
		titleBottomPadFrac: .035,
		legendReserve: p,
		radialGapFrac: .015,
		honorPlotAreaManualLayout: !0
	});
	Ve(e, t, n.x, n.y, n.w, n.h, n.y + m.title.topPad, m.title.fontPx);
	let { px0: g, py0: _, pw: v, ph: y } = m.plotRect;
	if (!(v > 0) || !(y > 0)) return;
	me(e, t, g, _, v, y, r, i);
	let b = {
		x: g,
		y: _,
		w: v,
		h: y
	}, x = a.parentLabelLayout ?? "overlapping", S = t.series[0]?.seriesDataLabels, w = A(t, S?.fontFace ?? t.dataLabelFontFace, "minor"), T = ne(S?.fontSizeHpt, r) ?? Math.max(8, Math.min(13, m.plotRect.ph * .025)), E = S?.fontColor ? `#${S.fontColor}` : "#ffffff", D = new Map((t.series[0]?.dataLabelOverrides ?? []).map((e) => [e.idx, e])), O = t.chartBg ? t.chartBg.startsWith("#") ? t.chartBg : `#${t.chartBg}` : "#ffffff", k = H(s?.dataPointOverrides), j = (a, l) => {
		if (l.w < .5 || l.h < .5) return;
		let u = `#${U(t, a.branchIndex, o.children.length, s?.chartexStyle)}`, d = k.get(a.labelIndex), f = Ie(t, s, d, a.branchIndex, o.children.length), p = c(d?.chartexStyle, s?.chartexStyle), m = D.get(a.labelIndex), g = m?.fontColor ? `#${m.fontColor}` : E, _ = ne(m?.fontSizeHpt, r) ?? T, v = m?.fontBold ?? S?.fontBold ?? !1;
		if (a.children.length > 0) {
			let o = te(t, s, a.labelIndex, a.label, a.value, {
				visible: x !== "none",
				showVal: !1,
				showCatName: !0
			}, D, !0), c = o != null && (x !== "overlapping" || a.depth === 0), d = _, y = o?.fontFace ? A(t, o.fontFace, "minor") : w, S = x === "banner" && c ? Math.min(l.h * .28, d + 7) : 0;
			S > 0 && h(e, p, t.chartexDataPointStyle, s?.chartexFormatIdx ?? 0, {
				x: l.x,
				y: l.y,
				w: l.w,
				h: S
			}, r, (e) => {
				f && we(e, f, {
					x: l.x,
					y: l.y,
					w: l.w,
					h: S
				}, u, r, i);
			}, a.branchIndex);
			let C = {
				x: l.x,
				y: l.y + S,
				w: l.w,
				h: Math.max(0, l.h - S)
			};
			for (let e of tt(a.children, C)) j(e.node, e.rect);
			if (c && (o.manualLayout || l.w > d * 2 && l.h > d + 4)) {
				e.font = `${v ? "bold " : ""}${d}px ${y}`;
				let a = S > 0 ? {
					x: l.x,
					y: l.y,
					w: l.w,
					h: S
				} : l, s = m?.position ?? "inBase";
				He(e, o.text, o.manualLayout ? {
					kind: "point",
					x: l.x + l.w / 2,
					y: l.y + l.h / 2,
					position: s
				} : {
					kind: "box",
					rect: a,
					position: s
				}, o.manualLayout ? b : a, d, g, o.manualLayout, n, je(t, o.richRuns, r, y, v, o.textStyle), void 0, o.textStyle, r, o.labelBox, i);
			}
			return;
		}
		h(e, p, t.chartexDataPointStyle, s?.chartexFormatIdx ?? 0, l, r, (e) => {
			f && we(e, f, l, u, r, i), Ne(e, xe(t, s, d, a.branchIndex, o.children.length, O, t.chartexDataPointStyle, { linkedNoStyleFallback: !0 }), r, l, i) && e.strokeRect(l.x, l.y, l.w, l.h);
		}, a.branchIndex);
		let y = te(t, s, a.labelIndex, a.label, a.value, {
			visible: !1,
			showVal: !1,
			showCatName: !1
		}, D);
		if (!y) return;
		let C = ne(y.fontSizeHpt, r) ?? _;
		if (!y.manualLayout && (l.w <= C * 1.2 || l.h <= C * 1.2)) return;
		let M = y.fontFace ? A(t, y.fontFace, "minor") : w;
		e.font = `${y.fontBold ? "bold " : ""}${C}px ${M}`;
		let N = l, P = y.position === "outEnd" ? "inEnd" : y.position ?? "ctr";
		He(e, y.text, y.manualLayout ? {
			kind: "point",
			x: l.x + l.w / 2,
			y: l.y + l.h / 2,
			position: P
		} : {
			kind: "box",
			rect: N,
			position: P
		}, y.manualLayout ? b : N, C, y.fontColor ? `#${y.fontColor}` : g, y.manualLayout, n, je(t, y.richRuns, r, M, y.fontBold ?? !1, y.textStyle), void 0, y.textStyle, r, y.labelBox, i);
	};
	e.save(), e.beginPath(), e.rect(g, _, v, y), e.clip();
	for (let e of tt(o.children, {
		x: g,
		y: _,
		w: v,
		h: y
	})) j(e.node, e.rect);
	e.restore(), Me(e, f, p, n.x, n.y, n.w, n.h, g, _, v, y, m.title.bandH + 2, r, l, i);
}
function nt(e, t, n, r, i = 0) {
	let a = Ke(t, void 0, n, r), o = qe(t, n, r);
	if (a != null && a > 1048576 || o != null && o > 1048576 || a != null && o != null && a > 1048576 - o) return Le(e, n, L + 1), !0;
	if (t.chartexSuppressGeometry) {
		let i = Ae(e, t, n.w, n.h, r);
		return Ve(e, t, n.x, n.y, n.w, n.h, n.y + i.topPad, i.fontPx), !0;
	}
	switch (t.chartType) {
		case "waterfall": return Ye(e, t, n, r, i), !0;
		case "clusteredColumn": {
			let a = t.series.map((e, n) => n === 0 ? K(t, e, n, t.series.length) : e), o = t.chartexParetoSortDescending ? a.map((e) => y(e, t.categories, {
				sortDescending: !0,
				keepUnvaluedCategories: !0
			}).orderedSeries) : a, s = t.chartexShowUnpairedPercentageAxis && o[0] ? [{
				...o[0],
				name: "",
				values: [],
				seriesType: "line",
				useSecondaryAxis: !0,
				lineHidden: !0,
				showMarker: !1
			}] : [];
			return ze(e, C(t, {
				chartType: "clusteredBar",
				categories: o[0]?.categories ?? t.categories,
				series: [...o, ...s],
				secondaryValAxis: s.length > 0 ? Y(t) : t.secondaryValAxis
			}), n, r, { gapPolicy: "chartex" }, i), !0;
		}
		case "histogram": return Je(e, t, n, r, i), !0;
		case "funnel": return q(e, t, n, r, i), !0;
		case "paretoLine": return J(e, t, n, r, i), !0;
		case "pareto": return X(e, t, n, r, i), !0;
		case "boxWhisker": return Qe(e, t, n, r, i), !0;
		case "sunburst": return et(e, t, n, r, i), !0;
		case "treemap": return $(e, t, n, r, i), !0;
		default: return !1;
	}
}
var rt = G({ render: nt }, "chartEx");
export { rt as chartEx };
