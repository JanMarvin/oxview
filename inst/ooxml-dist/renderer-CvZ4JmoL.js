import { Aa as e, An as t, Ao as n, Br as r, Co as i, Dn as a, Do as o, Dr as s, En as c, Eo as l, Kr as u, Mn as d, On as f, Oo as p, So as m, Tn as h, Vr as g, Zr as _, _o as v, ao as y, ar as b, cr as x, do as S, ei as C, fo as w, fr as T, go as E, ja as D, jn as O, kn as k, ko as A, lo as j, mo as M, nr as N, oo as P, or as F, po as ee, pr as te, qr as I, so as L, u as R, uo as z, wn as ne, xr as B, yo as V } from "./plot-area-frame-Bs_j4uu7.js";
import { $ as H, $t as U, C as W, En as G, Ft as re, Q as K, Qt as ie, X as ae, Z as oe, _ as q, at as se, b as J, bt as ce, cn as le, f as ue, g as de, gn as fe, h as pe, it as me, jt as he, o as ge, on as _e, p as ve, r as ye, rn as be, sn as xe, tn as Se, v as Ce, w as we, y as Te } from "./bounded-raw-part-cache-C3daknU-.js";
import { H as Ee, r as De } from "./renderer-BFWqhLEt.js";
import { r as Oe } from "./drawingml-shape-Bp0yEZHC.js";
import { _ as ke, v as Ae } from "./worksheet-pull-client-Cxzj6uuB.js";
import { _ as je, a as Me, c as Ne, d as Pe, g as Fe, h as Ie, i as Le, l as Re, m as ze, o as Be, p as Ve, s as He, u as Ue, v as We, y as Ge } from "./resource-measurement-DBiUwblM.js";
import { c as Ke, m as qe, p as Je, s as Ye, t as Xe } from "./grid-geometry-C3IG20ut.js";
//#region packages/core/src/sparkline/renderer.ts
function Ze(e, t, n) {
	let { values: r } = n;
	if (r.length === 0 || t.w <= 0 || t.h <= 0) return;
	let i = n.colorSeries ?? "#5B9BD5", a = Math.min(2, t.w * .08), o = Math.max(2, t.h * .2), s = t.x + a, c = t.y + o, l = Math.max(1, t.w - a * 2), u = Math.max(1, t.h - o * 2), d = r.filter((e) => typeof e == "number");
	if (d.length === 0) return;
	let f = Math.min(...d), p = Math.max(...d), m = n.min ?? f, h = n.max ?? p;
	m === h && (h = m + 1, --m);
	let g = h - m, _ = (e) => c + u - (e - m) / g * u;
	if (n.kind === "stem") {
		et(e, n, s, c, l, u);
		return;
	}
	if (n.kind === "column") {
		$e(e, n, r, s, c, l, u, m, h);
		return;
	}
	if (n.displayXAxis && m < 0 && h > 0) {
		e.save(), e.strokeStyle = n.colorAxis ?? "#000000", e.lineWidth = 1, e.beginPath();
		let t = _(0);
		e.moveTo(s, t), e.lineTo(s + l, t), e.stroke(), e.restore();
	}
	let v = r.length, y = (e) => v === 1 ? s + l / 2 : s + e / (v - 1) * l;
	e.save(), e.strokeStyle = i, e.lineCap = "round", e.lineJoin = "round", e.lineWidth = (n.lineWeight ?? .75) * D, e.beginPath();
	let b = !1, x = n.displayEmptyCellsAs ?? "gap";
	for (let t = 0; t < v; t++) {
		let n = r[t];
		if (n == null) {
			if (x === "zero") {
				let n = y(t), r = _(0);
				b ? e.lineTo(n, r) : (e.moveTo(n, r), b = !0);
			} else x === "gap" && (b = !1);
			continue;
		}
		let i = y(t), a = _(n);
		b ? e.lineTo(i, a) : (e.moveTo(i, a), b = !0);
	}
	e.stroke(), e.restore();
	let S = Math.max(1, Math.min(2.5, u * .12)), C = Qe(r, n);
	for (let t = 0; t < v; t++) {
		let a = r[t];
		if (a == null) continue;
		let o = C[t];
		(n.markers || o != null) && (e.save(), e.fillStyle = o ?? n.colorMarkers ?? i, e.beginPath(), e.arc(y(t), _(a), S, 0, Math.PI * 2), e.fill(), e.restore());
	}
}
function Qe(e, t) {
	let n = e.map(() => null), r = e.map((e) => typeof e == "number" ? e : null), i = r.findIndex((e) => e != null), a = -1;
	for (let e = r.length - 1; e >= 0; e--) if (r[e] != null) {
		a = e;
		break;
	}
	let o = r.filter((e) => e != null), s = NaN, c = NaN;
	if (o.length > 0 && (s = Math.max(...o), c = Math.min(...o)), t.negative && t.colorNegative) for (let e = 0; e < r.length; e++) {
		let i = r[e];
		i != null && i < 0 && (n[e] = t.colorNegative);
	}
	if (t.first && t.colorFirst && i >= 0 && (n[i] = t.colorFirst), t.last && t.colorLast && a >= 0 && (n[a] = t.colorLast), t.high && t.colorHigh && !Number.isNaN(s)) for (let e = 0; e < r.length; e++) r[e] === s && (n[e] = t.colorHigh);
	if (t.low && t.colorLow && !Number.isNaN(c)) for (let e = 0; e < r.length; e++) r[e] === c && (n[e] = t.colorLow);
	return n;
}
function $e(e, t, n, r, i, a, o, s, c) {
	let l = n.length;
	if (l === 0) return;
	let u = s < 0 && c > 0 ? 0 : s, d = c - s, f = (e) => i + o - (e - s) / d * o, p = f(u), m = a / l, h = Math.min(1.5, m * .15), g = Qe(n, t);
	for (let i = 0; i < l; i++) {
		let a = n[i];
		if (a == null) continue;
		let o = g[i] ?? (a < 0 && t.colorNegative ? t.colorNegative : t.colorSeries ?? "#5B9BD5"), s = f(a), c = r + m * i + h / 2, l = Math.max(1, m - h);
		e.save(), e.fillStyle = o, e.fillRect(c, Math.min(p, s), l, Math.abs(p - s)), e.restore();
	}
}
function et(e, t, n, r, i, a) {
	let o = t.values.length;
	if (o === 0) return;
	let s = r + a / 2, c = a / 2, l = i / o, u = Math.min(1.5, l * .15), d = Qe(t.values, t);
	for (let r = 0; r < o; r++) {
		let i = t.values[r];
		if (i == null || i === 0) continue;
		let a = i < 0, o = d[r] ?? (a && t.colorNegative ? t.colorNegative : t.colorSeries ?? "#5B9BD5"), f = n + l * r + u / 2, p = Math.max(1, l - u);
		e.save(), e.fillStyle = o, a ? e.fillRect(f, s, p, c) : e.fillRect(f, s - c, p, c), e.restore();
	}
}
//#endregion
//#region packages/core/src/text/bidi/segments.ts
function tt(e, t) {
	return e === !0 ? "rtl" : e === !1 ? "ltr" : I().computeLevels(t, "auto").paragraphLevel === 1 ? "rtl" : "ltr";
}
//#endregion
//#region packages/core/src/drawingml-text/paint.ts
function nt(e, t, n, r) {
	let i = t;
	for (let t of e) r(t, i, n), i += t.width;
	return i;
}
//#endregion
//#region packages/xlsx/src/internal/cell-font-language.ts
var rt = /* @__PURE__ */ new WeakMap();
function it() {
	return typeof navigator < "u" && (navigator.language || "").toLowerCase().startsWith("ja");
}
function at(e, t) {
	rt.set(e, t === !0);
}
function ot(e) {
	if (!e) return !1;
	let t = rt.get(e);
	return t === void 0 && (t = it(), rt.set(e, t)), t;
}
function st(e, t) {
	at(t, ot(e));
}
//#endregion
//#region packages/xlsx/src/shape-office-line.ts
function ct(e) {
	let t = e.fontFace?.trim();
	if (!t) return;
	let n = (e) => !e?.trim() || e.trim().toLocaleLowerCase("en-US") === t.toLocaleLowerCase("en-US");
	return n(e.fontFaceEa) && n(e.fontFaceCs) ? t : void 0;
}
function lt(e) {
	let t = [];
	for (let n of e.paragraphs) for (let e of n.runs) e.type === "text" && ct(e) && t.push(e);
	return t;
}
function ut(e) {
	return e && (e.type === "pts" ? {
		type: "pts",
		val: Math.floor(e.val + .5)
	} : {
		type: "pct",
		val: Math.floor(e.val / 1e3 + .5) * 1e3
	});
}
function dt(e) {
	let t = e.family.trim().toLowerCase(), n = e.weight ?? 400, r = e.style ?? "normal";
	return n === 400 && r === "normal" ? t : `${t}:${n}:${r}`;
}
function ft(e) {
	return dt({
		family: e.fontFace,
		weight: e.bold ? 700 : 400,
		style: e.italic ? "italic" : "normal"
	});
}
var pt = 1e3, mt = 2 / pt, ht = /* @__PURE__ */ new WeakMap();
function gt(e) {
	return (t) => {
		let n = ht.get(t);
		if (n !== void 0) return n ?? void 0;
		let r = e.font, i = null;
		try {
			e.font = `${t.style} ${t.weight} ${pt}px "${t.family}"`;
			let n = e.measureText("H"), r = n.fontBoundingBoxAscent, a = n.fontBoundingBoxDescent;
			Number.isFinite(r) && Number.isFinite(a) && r + a > 0 && (i = {
				ascent: r / pt,
				descent: a / pt
			});
		} finally {
			e.font = r;
		}
		return ht.set(t, i), i ?? void 0;
	};
}
var _t = (e) => e.source === "macos-system" || e.source === "macos-supplemental";
function vt(e) {
	if (e.source !== "published-open-font" && !(e.farEastCodePage == null || !e.win)) return ge({
		faceSource: _t(e) ? "system" : "office-bundle",
		unitsPerEm: e.unitsPerEm,
		hhea: e.hhea,
		win: e.win,
		typoMetrics: e.typoMetrics,
		farEastCodePage: e.farEastCodePage
	}) ?? void 0;
}
function yt(e) {
	let t;
	for (let n of e) {
		let e = vt(n);
		if (!e || t && (e.ascentRatio !== t.ascentRatio || e.descentRatio !== t.descentRatio)) return;
		t = e;
	}
	return t;
}
function bt(e, t) {
	let n = t.unitsPerEm, r = [[t.hhea[0], -t.hhea[1]]];
	return t.win && r.push(t.win), t.typoMetrics && r.push([t.typoMetrics[0], -t.typoMetrics[1]]), r.some(([t, r]) => Math.abs(e.ascent - t / n) <= mt && Math.abs(e.descent - r / n) <= mt);
}
function xt(e, t, n) {
	let r = ct(e);
	if (!r || !t || t.source !== "local" || t.metric.synthesized || !t.resourceIdentity.startsWith("office-local:") || t.requestedFamily.toLocaleLowerCase("en-US") !== r.toLocaleLowerCase("en-US") || t.weight !== (e.bold ? 700 : 400) || t.style !== (e.italic ? "italic" : "normal")) return;
	let i = v(r, {
		weight: t.weight,
		style: t.style
	});
	if (i.length === 0) return;
	let a = yt(i);
	if (a || i.length === 1) return a;
	let o = n?.(t);
	if (!o) return;
	let s = i.filter((e) => bt(o, e));
	if (s.length !== 0 && !(i.some(_t) && !s.every(_t))) return yt(s);
}
//#endregion
//#region packages/xlsx/src/google-fonts.ts
var St = {
	...l,
	...L
};
function* Ct(e) {
	for (let t of e?.sharedStrings ?? []) if (t.runs && t.runs.length > 0) for (let e of t.runs) yield e.text;
	else yield t.text;
}
function wt(e, t) {
	let r = /* @__PURE__ */ new Set(), i = null;
	for (let t of e?.styles?.fonts ?? []) if (t.name) {
		r.add(t.name);
		let e = /^(.*?)\s+Regular$/i.exec(t.name.trim());
		if (e) {
			let t = e[1].trim(), i = n(St, t.toLocaleLowerCase("en-US"));
			i && (!i.loadFamily || i.loadFamily.toLocaleLowerCase("en-US") === t.toLocaleLowerCase("en-US")) && r.add(t);
		}
		i ??= S(t.name);
	}
	for (let n of E(Ct(e), i ?? t ?? null)) r.add(n);
	return r;
}
function Tt(e, t) {
	for (let t of e?.styles?.fonts ?? []) {
		let n = S(t.name);
		if (n) return z(Ct(e), n);
	}
	return z(Ct(e), t);
}
function Et(e) {
	let t = /* @__PURE__ */ new Map(), n = (e, n, r) => {
		if ((e?.trim().toLowerCase() || "calibri") !== "calibri") return;
		let i = n ? 700 : 400, a = r ? "italic" : "normal";
		t.set(`${i}:${a}`, {
			family: "Calibri",
			weight: i,
			style: a
		});
	};
	for (let t of e?.styles?.fonts ?? []) n(t.name, t.bold, t.italic);
	for (let t of e?.sharedStrings ?? []) for (let e of t.runs ?? []) e.font && n(e.font.name, e.font.bold, e.font.italic);
	return [...t.values()];
}
function Dt(e) {
	let t = /* @__PURE__ */ new Map(), n = e.defaultFontFamily?.trim(), r = e.defaultFontBold ? 700 : 400, i = e.defaultFontItalic ? "italic" : "normal";
	if (n && v(n, {
		weight: r,
		style: i
	}).length) {
		let e = {
			family: n,
			weight: r,
			style: i
		};
		t.set(dt(e), e);
	}
	for (let n of e.rows) for (let e of n.cells) if (e.value.type === "text") for (let n of e.value.runs ?? []) {
		let e = n.font;
		if (!e || (e.name?.trim().toLowerCase() || "calibri") !== "calibri") continue;
		let r = {
			family: "Calibri",
			weight: e.bold ? 700 : 400,
			style: e.italic ? "italic" : "normal"
		};
		t.set(dt(r), r);
	}
	for (let n of e.shapeGroups ?? []) for (let e of n.shapes) if (e.text) for (let n of lt(e.text)) {
		let e = n.bold ? 700 : 400, r = n.italic ? "italic" : "normal";
		if (v(n.fontFace, {
			weight: e,
			style: r
		}).length === 0) continue;
		let i = {
			family: n.fontFace.trim(),
			weight: e,
			style: r
		};
		t.set(dt(i), i);
	}
	return [...t.values()];
}
//#endregion
//#region packages/xlsx/src/spreadsheet-cell.ts
function Ot(e, t) {
	if (e.length === 0 || t.length === 0) return 0;
	let n = [...e, ...t], r = e.length;
	return r - W(n, r, we, 1);
}
function kt(e, t) {
	let n = t;
	for (; n < e.length;) {
		let t = e[e.length - n - 1], r = e[e.length - n], i = t?.codePointAt(0), a = r?.codePointAt(0);
		if (i !== void 0 && a !== void 0 && le(i) && le(a)) n++;
		else break;
	}
	return n >= e.length ? t : n;
}
function At(e, t) {
	if (e.length === 0 || t.length === 0) return 0;
	let n = t[0].codePointAt(0), r = e.length - 1, i = e[r].codePointAt(0);
	if (i === void 0 || n === void 0 || i === 8203 || n === 8203 || !J(i, n)) return 0;
	for (; r > 0;) {
		let t = e[r - 1].codePointAt(0), n = e[r].codePointAt(0);
		if (t === void 0 || n === void 0 || !J(t, n)) break;
		r--;
	}
	return r === 0 ? 0 : e.length - r;
}
function jt(e, t, n) {
	let r = [], i = [], a = 0;
	for (; a < e.length;) {
		let t = e[a], n = t.codePointAt(0) ?? 0;
		if (xe(n)) i.push(t), a += n > 65535 ? 2 : 1;
		else if (t === " ") {
			let t = a;
			for (; t < e.length && e[t] === " ";) t++;
			i.push(e.slice(a, t)), a = t;
		} else {
			let t = a;
			for (; t < e.length;) {
				let n = e[t], r = n.codePointAt(0) ?? 0;
				if (n === " " || xe(r)) break;
				t += r > 65535 ? 2 : 1;
			}
			let n = e.slice(a, t), r = ie(n) ? _e(n) : null;
			if (r && r.length > 0) {
				let e = 0;
				for (let t of r) i.push(n.slice(e, t)), e = t;
				i.push(n.slice(e));
			} else i.push(n);
			a = t;
		}
	}
	let o = "";
	for (let e of i) {
		if (o === "") {
			o = e;
			continue;
		}
		let i = o + e;
		if (n(i) <= t) o = i;
		else {
			let t = e.replace(/^ +/, "");
			t === "" && (t = e);
			let n = [...o], i = Ot(n, [...t]);
			if (i > 0) {
				let e = n.length - i;
				r.push(n.slice(0, e).join("")), o = n.slice(e).join("") + t;
			} else r.push(o), o = t;
		}
	}
	return r.push(o), r;
}
function Mt(e, t, n, r, i, a, o) {
	let s = [], c = [], l = 0, u = 0, d = n.size, f = 0, p = () => {
		c.length !== 0 && (s.push({
			segments: c,
			maxFontSize: u,
			para: f
		}), c = [], l = 0, u = 0);
	}, m = () => {
		if (c.length === 0) {
			s.push({
				segments: [],
				maxFontSize: d || o,
				para: f
			});
			return;
		}
		p();
	}, h = (t, n) => {
		if (!t) return;
		d = n.size, a(n, t);
		let i = e.measureText(t).width;
		if (c.length > 0 && l + i > r) {
			let r = c.flatMap((e) => [...e.text]), i = Ot(r, [...t]);
			i > 0 ? i = kt(r, i) : !ie(t) && !ie(c[c.length - 1]?.text ?? "") && !/^\s/u.test(t) && !/\s$/u.test(r.at(-1) ?? "") && (i = At(r, [...t]));
			let o = c[c.length - 1], s = [...o.text];
			i > s.length && (i = s.length);
			let d = null;
			if (i > 0) {
				let t = s.slice(0, s.length - i), n = s.slice(s.length - i);
				if (t.length === 0) c.pop();
				else {
					let n = t.join("");
					a(o.font, n), o.text = n, o.width = e.measureText(n).width;
				}
				let r = n.join("");
				a(o.font, r), d = {
					text: r,
					font: o.font,
					width: e.measureText(r).width
				};
			}
			p(), d && (c.push(d), l += d.width, d.font.size > u && (u = d.font.size)), a(n, t);
		}
		c.push({
			text: t,
			font: n,
			width: i
		}), l += i, n.size > u && (u = n.size);
	}, g = (t, n) => {
		let i = _e(t);
		if (i.length === 0) {
			h(t, n);
			return;
		}
		a(n, t);
		let o = (t) => e.measureText(t).width, s = be(t), c = t.length, u = 0;
		for (; u < c;) {
			let e = r - l, a = U(t, i, u, e, o, s);
			if (a <= u) {
				if (l > 0) {
					p();
					continue;
				}
				let n = i.find((e) => e > u) ?? c, r = t.slice(u, n), d = Se(r), f = U(r, d, 0, e, o, s);
				f <= 0 && (f = d.length > 0 ? d[0] : r.length), a = u + f;
			}
			h(t.slice(u, a), n), u = a, u < c && p();
		}
	};
	for (let e of t) {
		let t = i(n, e), r = [], a = 0;
		for (; a < e.text.length;) {
			let t = e.text[a], n = t.codePointAt(0) ?? 0;
			if (n === 10) r.push("\n"), a += 1;
			else if (xe(n)) r.push(t), a += n > 65535 ? 2 : 1;
			else if (t === " ") {
				let t = a;
				for (; t < e.text.length && e.text[t] === " ";) t++;
				r.push(e.text.slice(a, t)), a = t;
			} else {
				let t = a;
				for (; t < e.text.length;) {
					let n = e.text[t], r = n.codePointAt(0) ?? 0;
					if (n === " " || n === "\n" || xe(r)) break;
					t += r > 65535 ? 2 : 1;
				}
				r.push(e.text.slice(a, t)), a = t;
			}
		}
		for (let e of r) e === "\n" ? (m(), f++) : ie(e) ? g(e, t) : h(e, t);
	}
	return (c.length > 0 || s.length > 0) && m(), s;
}
//#endregion
//#region packages/xlsx/src/shape-stacked-text.ts
function Nt(e, t, n, r, i, a, o) {
	let s = (t, n) => {
		e.font = n.font;
		let r = Ue(n.face ?? "", n.bold, n.italic), i = r ? void 0 : e.measureText("M"), a = r ? r.ascent * n.px : i?.fontBoundingBoxAscent ?? n.px, o = r ? r.descent * n.px : i?.fontBoundingBoxDescent ?? 0, s = Re * (a + o);
		return Be(t, {
			family: n.face ?? "",
			bold: n.bold,
			italic: n.italic
		}, {
			upright: s,
			verticalGlyph: n.px,
			rotated: (t) => e.measureText(t).width
		}).map(({ text: e, kind: t, advance: r, nominal: i }) => ({
			text: e,
			style: n,
			kind: t,
			advance: r + n.spacing,
			thickness: s,
			space: e === " ",
			cell: s,
			ascent: a,
			descent: o,
			...i ? { nominal: i } : {}
		}));
	}, c = (e, t) => !e.equation && !t.equation && e.font === t.font && e.color === t.color && e.spacing === t.spacing, l = Pe(t.paragraphs.map((e) => {
		let t = [], n, r = "", l = 11;
		for (let s of e.runs) {
			if (s.type === "break") {
				t.push({ type: "break" });
				continue;
			}
			if (s.type === "math") {
				let e = o(s, l);
				if (!e) continue;
				let n = {
					font: "",
					px: 0,
					color: s.color ?? "#000000",
					spacing: 0,
					bold: !1,
					italic: !1,
					equation: e
				};
				t.push({
					type: "object",
					width: e.height,
					style: n,
					display: s.display
				}), r = "";
				continue;
			}
			l = s.size > 0 ? s.size : 11;
			let e = "", u, d = () => {
				u && e && t.push({
					type: "text",
					text: e,
					style: u
				});
			};
			for (let t of s.text) {
				let n = /^[\p{M}\p{Cf}]$/u.test(t) && r ? r : t, o = a(s, n);
				r = n;
				let l = {
					...o,
					color: s.color ?? "#000000",
					spacing: (s.spacing ?? 0) * i,
					bold: s.bold,
					italic: s.italic
				};
				u && !c(u, l) && (d(), e = ""), u = l, e += t;
			}
			u ??= {
				...a(s, "M"),
				color: s.color ?? "#000000",
				spacing: (s.spacing ?? 0) * i,
				bold: s.bold,
				italic: s.italic
			}, n = u, d(), s.text === "" && t.push({
				type: "text",
				text: "",
				style: u
			});
		}
		let u = {
			font: `${11 * i}px sans-serif`,
			px: 11 * i,
			color: "#000000",
			spacing: 0,
			bold: !1,
			italic: !1
		};
		return {
			runs: t,
			alignment: e.align,
			lineSpacing: ut(e.spaceLine),
			spaceBefore: ut(e.spaceBefore),
			spaceAfter: ut(e.spaceAfter),
			emptyThickness: s("M", n ?? u)[0].thickness
		};
	}), {
		direction: n,
		rect: r,
		anchor: t.anchor,
		anchorCtr: t.anchorCtr,
		wrap: t.wrap !== "none",
		spcFirstLastPara: t.spcFirstLastPara,
		lnSpcReduction: t.autoFit === "norm" ? t.lnSpcReduction ?? 0 : 0,
		pxPerPt: i,
		glyphs: s,
		sameStyle: c,
		objectGlyph: ({ style: e }) => {
			let t = e.equation;
			return {
				text: "",
				style: e,
				kind: "upright",
				advance: t.height,
				thickness: t.width,
				space: !1,
				cell: t.height,
				ascent: 0,
				descent: 0
			};
		}
	});
	e.save();
	for (let t of l.glyphs) {
		if (t.style.equation) {
			t.style.equation.draw(t.axisX - t.thickness / 2, t.cellTop);
			continue;
		}
		if (!t.space) if (e.font = t.style.font, e.fillStyle = t.style.color, e.textAlign = "center", e.textBaseline = "alphabetic", t.kind === "upright") e.fillText(t.text, t.axisX, He(t.cellTop, t.cell, t, 1));
		else {
			let n = t.kind === "verticalGlyph" ? Ne(t) : null;
			n === null ? Le(e, t.text, t.axisX, t.cellTop, t, 1) : Me(e, n, t.axisX, t.cellTop, t, 1);
		}
	}
	e.restore();
}
//#endregion
//#region packages/xlsx/src/dxf-font.ts
var Pt = [
	"bold",
	"italic",
	"underline",
	"strike"
];
function Ft(e, t) {
	if (e.font) return e.fontToggles ? e.fontToggles[t] : e.font[t] || void 0;
}
//#endregion
//#region packages/xlsx/src/renderer-coordinate-index.ts
var It = fe, Lt = 2 ** 53 - 1 - 1;
function Rt(e) {
	let t = e.limit;
	if (t === void 0) return It;
	if (typeof t != "number") throw TypeError("coordinate index limit must be a number");
	if (!Number.isSafeInteger(t) || t <= 0 || t > Lt) throw RangeError(`coordinate index limit must be a positive safe integer no greater than ${Lt}`);
	return t;
}
function zt(e, t, n, r) {
	return new V(`XLSX renderer ${e.resource} exceeded its limit of ${t} entries`, {
		stage: "rendering",
		violation: {
			format: "xlsx",
			operation: e.operation,
			resource: e.resource,
			metric: "entry-count",
			limit: t,
			observed: Math.min(n, t + 1),
			configurable: r,
			usage: {
				archiveEntryCount: 0,
				declaredInflatedBytes: 0,
				distinctInflatedBytes: 0,
				operationInflatedBytes: 0
			}
		}
	});
}
function Bt(e, t, n = 0) {
	let r = Rt(t), { top: i, bottom: a, left: o, right: s } = e;
	if (!Number.isSafeInteger(i) || !Number.isSafeInteger(a) || !Number.isSafeInteger(o) || !Number.isSafeInteger(s) || !Number.isSafeInteger(n) || n < 0) throw zt(t, r, r + 1, !1);
	if (a < i || s < o) return 0;
	let c = a - i + 1, l = s - o + 1;
	if (!Number.isSafeInteger(c) || !Number.isSafeInteger(l)) throw zt(t, r, r + 1, !1);
	let u;
	if (l <= Math.floor((2 ** 53 - 1) / c)) {
		let e = c * l;
		if (n > e) throw zt(t, r, r + 1, !1);
		u = e - n;
	} else {
		let e = BigInt(c) * BigInt(l), i = BigInt(n);
		if (i > e) throw zt(t, r, r + 1, !1);
		let a = e - i;
		if (a > BigInt(2 ** 53 - 1)) throw zt(t, r, r + 1, !1);
		u = Number(a);
	}
	if (u > r) throw zt(t, r, u, !0);
	return u;
}
function Vt(e, t, n, r) {
	let i = Rt(r);
	if (!e.has(t) && e.size >= i) throw zt(r, i, e.size + 1, !0);
	e.set(t, n);
}
function Ht(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) for (let e of r.cells) Vt(n, `${e.row}:${e.col}`, e, t);
	return n;
}
function Ut(e, t, n) {
	let r = Rt(n);
	if (!e.has(t) && e.size >= r) throw zt(n, r, e.size + 1, !0);
	e.add(t);
}
//#endregion
//#region packages/xlsx/src/pivot-style.ts
var Wt = [
	"wholeTable",
	"pageFieldLabels",
	"pageFieldValues",
	"firstColumnStripe",
	"secondColumnStripe",
	"firstRowStripe",
	"secondRowStripe",
	"firstColumn",
	"headerRow",
	"firstHeaderCell",
	"firstSubtotalColumn",
	"secondSubtotalColumn",
	"thirdSubtotalColumn",
	"blankRow",
	"firstSubtotalRow",
	"secondSubtotalRow",
	"thirdSubtotalRow",
	"firstColumnSubheading",
	"secondColumnSubheading",
	"thirdColumnSubheading",
	"firstRowSubheading",
	"secondRowSubheading",
	"thirdRowSubheading",
	"lastColumn",
	"totalRow"
], Gt = new Set([
	"default",
	"sum",
	"countA",
	"avg",
	"max",
	"min",
	"product",
	"count",
	"stdDev",
	"stdDevP",
	"var",
	"varP"
]);
function Kt(e) {
	return e === 0 ? "first" : e % 2 == 1 ? "second" : "third";
}
function qt(e, t, n, r) {
	let i = {
		first: [],
		second: []
	}, a = e, o = !0;
	for (; a <= t;) {
		let e = Math.min(t, a + Math.max(1, o ? n : r) - 1);
		(o ? i.first : i.second).push({
			top: a,
			bottom: e,
			left: 0,
			right: 0
		}), a = e + 1, o = !o;
	}
	return i;
}
function Jt(e, t) {
	let n = e.style, { top: r, bottom: i, left: a, right: o, firstDataRow: s, firstDataCol: c } = e.location, l = r + s, u = a + c, d = /* @__PURE__ */ new Map(), f = (e, t) => {
		if (t.top > t.bottom || t.left > t.right) return;
		let n = d.get(e);
		n ? n.push(t) : d.set(e, [t]);
	};
	if (f("wholeTable", {
		top: r,
		bottom: i,
		left: a,
		right: o
	}), n.showColumnStripes) {
		let e = qt(u, o, t.get("firstColumnStripe") ?? 1, t.get("secondColumnStripe") ?? 1);
		for (let t of e.first) f("firstColumnStripe", {
			top: l,
			bottom: i,
			left: t.top,
			right: t.bottom
		});
		for (let t of e.second) f("secondColumnStripe", {
			top: l,
			bottom: i,
			left: t.top,
			right: t.bottom
		});
	}
	if (n.showRowStripes) {
		let e = qt(l, i, t.get("firstRowStripe") ?? 1, t.get("secondRowStripe") ?? 1);
		for (let t of e.first) f("firstRowStripe", {
			...t,
			left: a,
			right: o
		});
		for (let t of e.second) f("secondRowStripe", {
			...t,
			left: a,
			right: o
		});
	}
	n.showRowHeaders && f("firstColumn", {
		top: r,
		bottom: i,
		left: a,
		right: u - 1
	}), n.showColumnHeaders && f("headerRow", {
		top: r,
		bottom: l - 1,
		left: a,
		right: o
	}), f("firstHeaderCell", {
		top: r,
		bottom: l - 2,
		left: a,
		right: u - 1
	});
	let p = Math.max(0, e.rowFields.length - 1);
	return (e.rowItems ?? []).forEach((e, t) => {
		let r = l + t;
		if (r > i) return;
		let s = {
			top: r,
			bottom: r,
			left: a,
			right: o
		}, c = Kt(e.depth);
		e.kind === "blank" ? f("blankRow", s) : e.kind === "grand" ? f("totalRow", s) : Gt.has(e.kind) ? f(`${c}SubtotalRow`, s) : e.kind === "data" && e.depth < p && n.showRowHeaders && f(`${c}RowSubheading`, s);
	}), (e.columnItems ?? []).forEach((e, t) => {
		let a = u + t;
		if (a > o) return;
		let s = {
			top: r,
			bottom: i,
			left: a,
			right: a
		}, c = Kt(e.depth);
		e.kind === "grand" ? n.showLastColumn && f("lastColumn", s) : Gt.has(e.kind) && f(`${c}SubtotalColumn`, s);
	}), d;
}
function Yt(e) {
	return e.patternType === "solid" && e.bgColor && e.bgColor !== e.fgColor ? {
		...e,
		fgColor: e.bgColor
	} : e;
}
function Xt(e, t, n, r, i, a) {
	t.fill && (e.fill = Yt(t.fill));
	let o = t.font;
	if (o) {
		o.color ? (e.fontColor = o.color, delete e.fontColorAuto, a ? e.fontColorFromTable = !0 : delete e.fontColorFromTable) : t.fontToggles?.automaticColor && (delete e.fontColor, e.fontColorAuto = !0, a ? e.fontColorFromTable = !0 : delete e.fontColorFromTable);
		for (let n of Pt) {
			let r = Ft(t, n);
			r !== void 0 && (e[n] = r);
		}
	}
	let s = t.border;
	if (!s) return;
	let c = (e, t, n) => n ? e : t, l = c(s.top, s.horizontal, r === n.top), u = c(s.bottom, s.horizontal, r === n.bottom), d = c(s.left, s.vertical, i === n.left), f = c(s.right, s.vertical, i === n.right);
	l && (e.top = l), u && (e.bottom = u), d && (e.left = d), f && (e.right = f);
}
var Zt = [
	"wholeTable",
	"firstColumnStripe",
	"secondColumnStripe",
	"firstRowStripe",
	"secondRowStripe",
	"lastColumn",
	"firstColumn",
	"headerRow",
	"totalRow",
	"firstHeaderCell",
	"lastHeaderCell",
	"firstTotalCell",
	"lastTotalCell"
];
function Qt(e, t, n, r, i) {
	let a = {
		first: [],
		second: []
	}, o = !0, s = Math.max(1, n), c = null;
	for (let l = e; l <= t; l++) i(l) || (c || (c = {
		top: l,
		bottom: l,
		left: 0,
		right: 0
	}, (o ? a.first : a.second).push(c)), c.bottom = l, --s, s === 0 && (o = !o, s = Math.max(1, o ? n : r), c = null));
	return a;
}
function $t(e, t, n) {
	let { top: r, bottom: i, left: a, right: o } = e.range, s = Math.max(0, e.headerRowCount ?? 1), c = Math.max(0, e.totalsRowCount ?? 0), l = r + s, u = i - c, d = /* @__PURE__ */ new Map(), f = (e, t) => {
		if (t.top > t.bottom || t.left > t.right) return;
		let n = d.get(e);
		n ? n.push(t) : d.set(e, [t]);
	};
	if (f("wholeTable", {
		top: r,
		bottom: i,
		left: a,
		right: o
	}), e.showColumnStripes) {
		let e = qt(a, o, t.get("firstColumnStripe") ?? 1, t.get("secondColumnStripe") ?? 1);
		for (let t of e.first) f("firstColumnStripe", {
			top: l,
			bottom: u,
			left: t.top,
			right: t.bottom
		});
		for (let t of e.second) f("secondColumnStripe", {
			top: l,
			bottom: u,
			left: t.top,
			right: t.bottom
		});
	}
	if (e.showRowStripes) {
		let e = Qt(l, u, t.get("firstRowStripe") ?? 1, t.get("secondRowStripe") ?? 1, n);
		for (let t of e.first) f("firstRowStripe", {
			...t,
			left: a,
			right: o
		});
		for (let t of e.second) f("secondRowStripe", {
			...t,
			left: a,
			right: o
		});
	}
	return e.showLastColumn && f("lastColumn", {
		top: r,
		bottom: i,
		left: o,
		right: o
	}), e.showFirstColumn && f("firstColumn", {
		top: r,
		bottom: i,
		left: a,
		right: a
	}), s > 0 && (f("headerRow", {
		top: r,
		bottom: l - 1,
		left: a,
		right: o
	}), f("firstHeaderCell", {
		top: r,
		bottom: l - 1,
		left: a,
		right: a
	}), f("lastHeaderCell", {
		top: r,
		bottom: l - 1,
		left: o,
		right: o
	})), c > 0 && (f("totalRow", {
		top: u + 1,
		bottom: i,
		left: a,
		right: o
	}), f("firstTotalCell", {
		top: u + 1,
		bottom: i,
		left: a,
		right: a
	}), f("lastTotalCell", {
		top: u + 1,
		bottom: i,
		left: o,
		right: o
	})), d;
}
function en(e, t, n, r, i, a) {
	let o = new Map(r.map((e) => [e.kind, e]));
	for (let r of n) {
		let n = o.get(r), s = i.get(r);
		if (!(!n || !s)) for (let r of s) for (let i = r.top; i <= r.bottom; i++) for (let o = r.left; o <= r.right; o++) {
			let s = `${i}:${o}`, c = e.get(s);
			c || (c = {}, Vt(e, s, c, t)), Xt(c, n.dxf, r, i, o, a);
		}
	}
}
function tn(e, t) {
	return !t || e.styleError ? [] : [
		["wholeTable", e.wholeTableDxf],
		["headerRow", e.headerRowDxf],
		["totalRow", e.totalRowDxf],
		["firstColumn", e.firstColumnDxf],
		["lastColumn", e.lastColumnDxf],
		["firstRowStripe", e.band1HorizontalDxf],
		["secondRowStripe", e.band2HorizontalDxf]
	].flatMap(([e, n]) => {
		let r = n === void 0 ? void 0 : t[n];
		return r ? [{
			kind: e,
			size: 1,
			dxf: r
		}] : [];
	});
}
function nn(e, t) {
	let n = /* @__PURE__ */ new Map(), r = {
		resource: "worksheet-structured-style-index",
		operation: "expand-structured-style-coordinates",
		limit: ke(e).maxCoordinateIndexEntries
	}, i = new Set((e.rows ?? []).filter((e) => e.hidden).map((e) => e.index)), a = (e) => i.has(e);
	for (let i of e.tables ?? []) {
		let e = i.styleElements ?? tn(i, t);
		e.length !== 0 && (Bt(i.range, r), en(n, r, Zt, e, $t(i, new Map(e.map((e) => [e.kind, e.size])), a), !0));
	}
	for (let t of e.pivotTables ?? []) {
		let e = t.style;
		if (!e || e.elements.length === 0) continue;
		let i = new Map(e.elements.map((e) => [e.kind, e.size]));
		Bt(t.location, r), en(n, r, Wt, e.elements, Jt(t, i), !1);
	}
	return n;
}
//#endregion
//#region packages/xlsx/src/phonetic.ts
function rn(e) {
	return Array.from(e);
}
function an(e, t, n, r, i) {
	let a = rn(t), o = a.length, s = [];
	for (let t of e) {
		let e = t.sb, c = t.eb;
		if (!(e < c) || e >= o) continue;
		let l = Math.min(c, o), u = n + i(a.slice(0, e).join("")), d = i(a.slice(e, l).join("")), f = r === "center" ? "center" : r === "distributed" ? "distribute" : "start";
		s.push({
			text: t.text,
			x: u,
			width: d,
			spread: f
		});
	}
	return s;
}
//#endregion
//#region packages/xlsx/src/number-format.ts
function on(e) {
	switch (e.type) {
		case "empty": return "";
		case "text": return e.text;
		case "number": return String(e.number);
		case "bool": return e.bool ? "TRUE" : "FALSE";
		case "error": return e.error;
		case "shared": return "";
	}
}
function sn(e, t, n, r = !1) {
	return cn(e, t, n, r).text;
}
function cn(e, t, n, r = !1) {
	let i = t.cellXfs[e.styleIndex ?? 0]?.numFmtId ?? 0, a = t.numFmts?.find((e) => e.numFmtId === i)?.formatCode ?? null, o = n?.numFmtId ?? i, s = n ? n.formatCode : a;
	if (e.value.type !== "number") {
		let t = on(e.value);
		return { text: s ? ln(t, s) : t };
	}
	return _n(e.value.number, o, s, r);
}
function ln(e, t) {
	let n = f(t), r = k(n);
	if (r < 0) return e;
	let i = n[r];
	if (i === "") return "";
	let a = "", o = 0;
	for (; o < i.length;) {
		let t = i[o];
		if (t === "\"") {
			for (o++; o < i.length && i[o] !== "\"";) a += i[o++];
			o < i.length && o++;
		} else if (t === "\\") o + 1 < i.length && (a += i[o + 1]), o += 2;
		else if (t === "[") {
			for (; o < i.length && i[o] !== "]";) o++;
			o < i.length && o++;
		} else t === "@" ? (a += e, o++) : t === "_" || t === "*" ? o += 2 : (a += t, o++);
	}
	return a;
}
var un = {
	15: "d-mmm-yy",
	16: "d-mmm",
	17: "mmm-yy",
	18: "h:mm AM/PM",
	19: "h:mm:ss AM/PM",
	20: "h:mm",
	21: "h:mm:ss",
	22: "m/d/yyyy h:mm",
	27: "[$-411]ge.m.d",
	28: "[$-411]ggge\"年\"m\"月\"d\"日\"",
	29: "[$-411]ggge\"年\"m\"月\"d\"日\"",
	30: "m/d/yy",
	31: "yyyy\"年\"m\"月\"d\"日\"",
	45: "mm:ss",
	46: "[h]:mm:ss",
	47: "mm:ss.0",
	50: "[$-411]ge.m.d",
	51: "[$-411]ggge\"年\"m\"月\"d\"日\"",
	52: "yyyy\"年\"m\"月\"",
	53: "m\"月\"d\"日\"",
	54: "[$-411]ggge\"年\"m\"月\"d\"日\"",
	55: "yyyy\"年\"m\"月\"",
	56: "m\"月\"d\"日\"",
	57: "[$-411]ge.m.d",
	58: "[$-411]ggge\"年\"m\"月\"d\"日\""
}, dn = 11, fn = 6;
function pn(e) {
	return e.includes(".") ? e.replace(/0+$/, "").replace(/\.$/, "") : e;
}
function mn(e) {
	return `${e >= 0 ? "+" : "-"}${Math.abs(e).toString().padStart(2, "0")}`;
}
function hn(e) {
	let [t, n] = e.toExponential(fn - 1).split("e");
	return `${pn(t)}E${mn(Number(n))}`;
}
function gn(e) {
	if (!Number.isFinite(e)) return String(e);
	if (e === 0) return "0";
	let t = e < 0, n = Math.abs(e), r = Number(n.toExponential(dn - 1).split("e")[1]), i = r >= dn || r < -5 ? hn(n) : pn(n.toPrecision(dn));
	return t ? `-${i}` : i;
}
function _n(e, t, n, r = !1) {
	if (t === 14 && !n) return vn(ne(e, r), e, r);
	if (n && n.trim().toLowerCase() === "general") return { text: gn(e) };
	if (n) return An(e, n, r);
	let i = un[t];
	if (i) return vn(c(e, i, r), e, r);
	switch (t) {
		case 0: return { text: gn(e) };
		case 1: return An(e, "0");
		case 2: return An(e, "0.00");
		case 3: return An(e, "#,##0");
		case 4: return An(e, "#,##0.00");
		case 9: return An(e, "0%");
		case 10: return An(e, "0.00%");
		case 11: return An(e, "0.00E+00");
		case 37: return An(e, "#,##0 ;(#,##0)");
		case 38: return An(e, "#,##0 ;[Red](#,##0)");
		case 39: return An(e, "#,##0.00;(#,##0.00)");
		case 40: return An(e, "#,##0.00;[Red](#,##0.00)");
		case 48: return An(e, "##0.0E+0");
		case 49: return { text: String(e) };
		default: return { text: gn(e) };
	}
}
function vn(e, t, n) {
	return e === "#" && !O(t, n) ? {
		text: e,
		fill: !0
	} : { text: e };
}
var yn = {
	black: "#000000",
	blue: "#0000FF",
	cyan: "#00FFFF",
	green: "#008000",
	magenta: "#FF00FF",
	red: "#FF0000",
	white: "#FFFFFF",
	yellow: "#FFFF00"
}, bn = /* @__PURE__ */ "#000000.#FFFFFF.#FF0000.#00FF00.#0000FF.#FFFF00.#FF00FF.#00FFFF.#000000.#FFFFFF.#FF0000.#00FF00.#0000FF.#FFFF00.#FF00FF.#00FFFF.#800000.#008000.#000080.#808000.#800080.#008080.#C0C0C0.#808080.#9999FF.#993366.#FFFFCC.#CCFFFF.#660066.#FF8080.#0066CC.#CCCCFF.#000080.#FF00FF.#FFFF00.#00FFFF.#800080.#800000.#008080.#0000FF.#00CCFF.#CCFFFF.#CCFFCC.#FFFF99.#99CCFF.#FF99CC.#CC99FF.#FFCC99.#3366FF.#33CCCC.#99CC00.#FFCC00.#FF9900.#FF6600.#666699.#969696.#003366.#339966.#003300.#333300.#993300.#993366.#333399.#333333".split(".");
function xn(e) {
	let t = "", n, r, i = 0;
	for (; i < e.length;) {
		let a = e[i];
		if (a === "\"") {
			for (t += a, i++; i < e.length && e[i] !== "\"";) t += e[i++];
			i < e.length && (t += e[i++]);
		} else if (a === "\\" || a === "_" || a === "*") t += a, i + 1 < e.length && (t += e[i + 1]), i += 2;
		else if (a === "[") {
			let o = e.indexOf("]", i);
			if (o < 0) {
				t += a, i++;
				continue;
			}
			let s = e.slice(i + 1, o), c = s.toLowerCase(), l = c.match(/^color(\d{1,2})$/), u = s.match(/^(<=|>=|<>|<|>|=)\s*(-?[0-9.]+(?:[eE][-+]?\d+)?)$/);
			if (A(yn, c)) n = yn[c];
			else if (l) {
				let e = parseInt(l[1], 10);
				e >= 1 && e <= 56 && (n = bn[e + 7] ?? n);
			} else u ? r = {
				op: u[1],
				value: Number(u[2])
			} : t += e.slice(i, o + 1);
			i = o + 1;
		} else t += a, i++;
	}
	return {
		body: t,
		color: n,
		condition: r
	};
}
function Sn(e, t) {
	switch (e.op) {
		case "<": return t < e.value;
		case "<=": return t <= e.value;
		case ">": return t > e.value;
		case ">=": return t >= e.value;
		case "=": return t === e.value;
		case "<>": return t !== e.value;
	}
}
function Cn(e) {
	let t = [], n = "", r = "", i = !1, a = !1, o, s = !1, c = 0, l = 0, u = (e) => {
		if (!e) return;
		!a && !s && (c = n.replace(/,/g, "").length);
		let r = t[t.length - 1];
		r && r.kind === "lit" ? r.text += e : t.push({
			kind: "lit",
			text: e
		});
	}, d = 0;
	for (; d < e.length;) {
		let c = e[d];
		if (c === "\"") {
			d++;
			let t = "";
			for (; d < e.length && e[d] !== "\"";) t += e[d++];
			d < e.length && d++, u(t);
		} else if (c === "\\") d + 1 < e.length && u(e[d + 1]), d += 2;
		else if (c === "[") {
			let t = e.indexOf("]", d), n = t > d ? e.slice(d + 1, t) : "";
			if (n.startsWith("$")) {
				let e = n.slice(1), t = e.indexOf("-");
				u(t >= 0 ? e.slice(0, t) : e);
			}
			d = t < 0 ? e.length : t + 1;
		} else if (c === "_") u(" "), d += 2;
		else if (c === "*") u(e[d + 1] ?? ""), d += 2;
		else if (c === "#" || c === "0" || c === "?") a ? (r += c, t.push({
			kind: "fracph",
			ph: c
		})) : (n += c, t.push({
			kind: "intph",
			ph: c
		})), l = 0, d++;
		else if (c === ".") a = !0, t.push({ kind: "dot" }), d++;
		else if (c === ",") a || (n += ","), l++, d++;
		else if (c === "/" && n.replace(/,/g, "").length > 0) {
			s = !0, t.push({ kind: "fraction" }), d++;
			let n = "";
			for (; d < e.length && /[0-9#?]/.test(e[d]);) n += e[d++];
			t[t.length - 1].den = n;
		} else if (c === "%") i = !0, t.push({ kind: "percent" }), d++;
		else if ((c === "E" || c === "e") && (e[d + 1] === "+" || e[d + 1] === "-")) {
			let n = e[d + 1] === "+";
			d += 2;
			let r = 0;
			for (; d < e.length && (e[d] === "0" || e[d] === "#" || e[d] === "?");) r++, d++;
			o = {
				plus: n,
				width: Math.max(r, 1)
			}, t.push({ kind: "exp" });
		} else u(c), d++;
	}
	let f = l, p = /,(?=[#0?])/.test(n), m = n.replace(/,/g, ""), h;
	if (s) {
		let e = t.find((e) => e.kind === "fraction")?.den ?? "?", n = e.match(/[0-9]+/);
		h = {
			wholeSpec: m.slice(0, c),
			numSpec: m.slice(c) || "?",
			denSpec: e.replace(/[^0#?]/g, ""),
			fixedDen: n ? parseInt(n[0], 10) : null
		};
	}
	return {
		parts: t,
		intSpec: m,
		fracSpec: r,
		hasPercent: i,
		commaScale: f,
		grouping: p,
		exp: o,
		fraction: h
	};
}
function wn(e) {
	return e.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function Tn(e, t, n) {
	let r = t.split(""), i = e.split(""), a = [], o = i.length - 1, s = [];
	for (let e = r.length - 1; e >= 0; e--) o >= 0 ? (a.unshift(i[o]), s.unshift(i[o]), o--) : r[e] === "0" ? (a.unshift("0"), s.unshift("0")) : r[e] === "?" && a.unshift(" ");
	for (; o >= 0;) a.unshift(i[o]), s.unshift(i[o]), o--;
	if (n) {
		let e = wn(s.join(""));
		return (a.length - s.length > 0 ? a.slice(0, a.length - s.length).join("") : "") + e;
	}
	return a.join("");
}
function En(e, t) {
	let n = t.length;
	if (n === 0) return "";
	let r = e.padEnd(n, "0").slice(0, n).split("");
	for (let e = n - 1; e >= 0; e--) {
		let n = t[e] ?? "#";
		if (r[e] === "0" && n === "#") r[e] = "";
		else if (r[e] === "0" && n === "?") r[e] = " ";
		else break;
	}
	return r.join("");
}
function Dn(e, t, n) {
	if (n !== null) return [Math.round(e * n), n];
	let r = 10 ** Math.max(t, 1) - 1, i = 0, a = 1, o = Math.abs(e), s = [0, 1], c = [1, 1];
	for (let t = 0; t < 100; t++) {
		let t = s[0] + c[0], n = s[1] + c[1];
		if (n > r) break;
		let l = t / n, u = Math.abs(l - e);
		if (u < o && (o = u, i = t, a = n), l < e) s = [t, n];
		else if (l > e) c = [t, n];
		else break;
	}
	return [i, a];
}
function On(e, t, n) {
	let r = Cn(t), i = n ? Math.abs(e) : e;
	r.hasPercent && (i *= 100), r.commaScale > 0 && (i /= 1e3 ** r.commaScale);
	let a = i < 0 ? "-" : "", o = Math.abs(i);
	if (r.fraction) {
		let e = Math.floor(o), t = o - e, { wholeSpec: n, numSpec: i, denSpec: s, fixedDen: c } = r.fraction, l = n.length > 0, [u, d] = Dn(t, s.length, c), f = (e, t) => {
			let n = String(e), r = t.includes("0") ? "0" : " ";
			for (; n.length < t.length;) n = r + n;
			return n;
		}, p = (e, t) => {
			let n = String(e), r = t.includes("0") ? "0" : " ";
			for (; n.length < t.length;) n += r;
			return n;
		}, m = a;
		if (l) {
			let t = e > 0 ? String(e) : n.includes("0") ? "0" : "";
			if (u === 0) {
				let e = c === null ? s.length || 1 : String(c).length;
				m += t + " ".repeat(1 + i.length + 1 + e);
			} else {
				let e = c === null ? p(d, s) : String(c);
				m += t + " " + f(u, i) + "/" + e;
			}
		} else {
			let t = u + e * d, n = c === null ? p(d, s) : String(c);
			m += f(t, i) + "/" + n;
		}
		return m;
	}
	if (r.exp) {
		let e = Math.max(r.intSpec.length, 1), t = r.fracSpec.length, n = 0, i = 0;
		o !== 0 && (i = Math.floor(Math.log10(o)), i = Math.floor(i / e) * e, n = o / 10 ** i, parseFloat(h(n, t)) >= 10 ** e && (i += e, n = o / 10 ** i));
		let [s, c = ""] = h(n, t).split(".");
		return a + kn(r, Tn(s, r.intSpec, !1), En(c, r.fracSpec), "E" + (i < 0 ? "-" : r.exp.plus ? "+" : "") + String(Math.abs(i)).padStart(r.exp.width, "0"));
	}
	let s = r.fracSpec.length, [c, l = ""] = h(o, s).split("."), u = c.replace(/^0+/, ""), d = /[0]/.test(r.intSpec) || r.intSpec === "" && !1;
	return u === "" && d && (u = "0"), a + kn(r, Tn(u, r.intSpec, r.grouping), En(l, r.fracSpec), "");
}
function kn(e, t, n, r) {
	let i = t.split(""), a = [];
	e.parts.forEach((e, t) => {
		e.kind === "intph" && a.push(t);
	});
	let o = n.split(""), s = [];
	e.parts.forEach((e, t) => {
		e.kind === "fracph" && s.push(t);
	});
	let c = /* @__PURE__ */ new Map(), l = i.length - 1;
	for (let e = a.length - 1; e >= 0; e--) if (e === 0) {
		let t = "";
		for (; l >= 0;) t = i[l--] + t;
		c.set(a[e], t);
	} else l >= 0 ? c.set(a[e], i[l--]) : c.set(a[e], "");
	let u = /* @__PURE__ */ new Map();
	for (let e = 0; e < s.length; e++) u.set(s[e], o[e] ?? "");
	let d = e.fracSpec.length > 0 && (n.length > 0 || /[0?]/.test(e.fracSpec)), f = "";
	for (let t = 0; t < e.parts.length; t++) {
		let n = e.parts[t];
		n.kind === "lit" ? f += n.text : n.kind === "intph" ? f += c.get(t) ?? "" : n.kind === "fracph" ? f += u.get(t) ?? "" : n.kind === "dot" ? f += d ? "." : "" : n.kind === "percent" ? f += "%" : n.kind === "exp" && (f += r);
	}
	return f;
}
function An(e, t, n = !1) {
	let r = f(t), i = k(r), o = r.filter((e, t) => t !== i).map(xn);
	if (o.length === 0) return { text: gn(e) };
	let s = o.some((e) => e.condition), l, u = !1;
	if (s) {
		let t = !1;
		for (let n of o) if (n.condition) {
			if (Sn(n.condition, e)) {
				l = n, t = !0;
				break;
			}
		} else if (l ??= n, l === n) break;
		if (!l) return { text: "#" };
		u = t && e < 0;
	} else e > 0 ? l = o[0] : e < 0 ? o.length > 1 ? (l = o[1], u = !0) : l = o[0] : l = o.length > 2 ? o[2] : o[0];
	let d = u ? Math.abs(e) : e, p = a(l.body) ? vn(c(d, l.body, n), d, n) : { text: On(e, l.body, u) };
	return l.color ? {
		...p,
		color: l.color
	} : p;
}
//#endregion
//#region packages/xlsx/src/cf-operand.ts
var jn = Object.freeze({
	kind: "unsupported",
	reason: "syntax"
}), Mn = Object.freeze({
	kind: "unsupported",
	reason: "outOfGrid"
}), Nn = Object.freeze({
	kind: "unsupported",
	reason: "unresolvedValue"
}), Pn = Object.freeze({ kind: "error" }), Fn = Object.freeze({
	kind: "value",
	value: null
}), In = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/, Ln = /^"(?:[^"]|"")*"$/, Rn = /^(\$?)([A-Za-z]{1,3})(\$?)(\d{1,7})$/, zn = 1048576, Bn = 16384;
function Vn(e) {
	let t = e.trim();
	if (Ln.test(t)) return t.slice(1, -1).replace(/""/g, "\"");
	if (In.test(t)) {
		let e = Number(t);
		return Number.isFinite(e) ? e : void 0;
	}
}
function Hn(e, t) {
	let n = Vn(e);
	if (n !== void 0) return {
		kind: "value",
		value: n
	};
	let r = Rn.exec(e.trim());
	if (!r) return jn;
	let i = 0;
	for (let e of r[2].toUpperCase()) i = i * 26 + (e.charCodeAt(0) - 64);
	let a = Number(r[4]);
	if (a < 1 || a > zn || i > Bn) return jn;
	let o = r[3] === "$" ? a : a + (t.row - t.anchorRow), s = r[1] === "$" ? i : i + (t.col - t.anchorCol);
	if (o < 1 || o > zn || s < 1 || s > Bn) return Mn;
	let c = t.cellIndex.get(`${o}:${s}`)?.value;
	if (!c) return Fn;
	switch (c.type) {
		case "empty": return Fn;
		case "number": return {
			kind: "value",
			value: c.number
		};
		case "text": return {
			kind: "value",
			value: c.text
		};
		case "bool": return {
			kind: "value",
			value: c.bool
		};
		case "error": return Pn;
		default: return Nn;
	}
}
//#endregion
//#region packages/xlsx/src/formula.ts
var Un = 1048576, Wn = 16384, Gn = class {
	code;
	constructor(e) {
		this.code = e;
	}
}, Y = class extends Error {
	kind;
	code;
	constructor(e, t) {
		super(`CF formula ${e}`), this.kind = e, this.code = t;
	}
};
function Kn(e) {
	return Array.isArray(e) ? e : [e];
}
function qn(e) {
	return Array.isArray(e) ? e[0] ?? 0 : e;
}
function Jn(e) {
	let t = qn(e);
	if (t instanceof Gn) throw new Y("error", t.code);
	return t;
}
function Yn(e) {
	return e.flatMap(Kn).map((e) => Jn(e));
}
var Xn = 8, Zn = 128, Qn = 64 * 1024;
function $n(e) {
	if (e.kind !== "value") return !1;
	try {
		return tr(e.value);
	} catch (e) {
		if (e instanceof Y) return !1;
		throw e;
	}
}
function er(e, t) {
	try {
		let n = dr(e, t);
		return n instanceof Gn ? { kind: "error" } : {
			kind: "value",
			value: n
		};
	} catch (e) {
		if (e instanceof Y) return { kind: e.kind };
		throw e;
	}
}
function tr(e) {
	let t = Jn(e);
	return typeof t == "boolean" ? t : typeof t == "number" ? t !== 0 : typeof t == "string" ? t.length > 0 && t.toUpperCase() !== "FALSE" : !1;
}
function X(e) {
	let t = Jn(e);
	if (typeof t == "number") {
		if (!Number.isFinite(t)) throw new Y("error", "#NUM!");
		return t;
	}
	if (typeof t == "boolean") return +!!t;
	if (t == null) return 0;
	let n = nr(t);
	if (n === null) throw new Y("error", "#VALUE!");
	return n;
}
function nr(e) {
	if (!/^ *[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)? *$/u.test(e)) return null;
	let t = Number(e);
	return Number.isFinite(t) ? t : null;
}
function Z(e) {
	let t = Jn(e);
	return t == null ? "" : typeof t == "boolean" ? t ? "TRUE" : "FALSE" : String(t);
}
function Q(e) {
	return new Gn(e);
}
var rr = new Set([
	"<",
	">",
	"=",
	"+",
	"-",
	"*",
	"/",
	"&",
	"^",
	"%"
]);
function ir(e) {
	let t = [], n = 0, r = e;
	for (; n < r.length;) {
		let e = r[n];
		if (e === " " || e === "	" || e === "\n" || e === "\r") {
			n++;
			continue;
		}
		if (e === "(") {
			t.push({
				kind: "lparen",
				text: e
			}), n++;
			continue;
		}
		if (e === ")") {
			t.push({
				kind: "rparen",
				text: e
			}), n++;
			continue;
		}
		if (e === ",") {
			t.push({
				kind: "comma",
				text: e
			}), n++;
			continue;
		}
		if (e === ":") {
			t.push({
				kind: "colon",
				text: e
			}), n++;
			continue;
		}
		if (e === "\"") {
			let e = n + 1, i = "";
			for (; e < r.length;) {
				if (r[e] === "\"" && r[e + 1] === "\"") {
					i += "\"", e += 2;
					continue;
				}
				if (r[e] === "\"") break;
				i += r[e], e++;
			}
			if (e === r.length) throw new Y("invalid");
			t.push({
				kind: "str",
				text: i
			}), n = e + 1;
			continue;
		}
		if (e === "#") {
			let e = /^#(?:NULL!|DIV\/0!|VALUE!|REF!|NAME\?|NUM!|N\/A|GETTING_DATA)/u.exec(r.slice(n));
			if (!e) throw new Y("unsupported");
			t.push({
				kind: "error",
				text: e[0]
			}), n += e[0].length;
			continue;
		}
		if (e >= "0" && e <= "9" || e === "." && /[0-9]/u.test(r[n + 1] ?? "")) {
			let e = /^(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?/u.exec(r.slice(n));
			if (!e || !Number.isFinite(Number(e[0]))) throw new Y("invalid");
			t.push({
				kind: "num",
				text: e[0]
			}), n += e[0].length;
			continue;
		}
		if (rr.has(e)) {
			(e === "<" || e === ">") && (r[n + 1] === "=" || e === "<" && r[n + 1] === ">") ? (t.push({
				kind: "op",
				text: r.slice(n, n + 2)
			}), n += 2) : (t.push({
				kind: "op",
				text: e
			}), n++);
			continue;
		}
		if (e === "$" || ar(e)) {
			let e = n;
			for (; e < r.length && (r[e] === "$" || or(r[e]));) e++;
			let i = r.slice(n, e);
			n = e;
			let a = r[n] === "(" ? null : sr(i);
			if (a) t.push({
				kind: "ref",
				text: i,
				ref: a
			});
			else {
				let e = i.toUpperCase();
				(e === "TRUE" || e === "FALSE") && r[n] !== "(" ? t.push({
					kind: "bool",
					text: e
				}) : t.push({
					kind: "name",
					text: i
				});
			}
			continue;
		}
		throw new Y("unsupported");
	}
	return t;
}
function ar(e) {
	return e >= "A" && e <= "Z" || e >= "a" && e <= "z" || e === "_";
}
function or(e) {
	return ar(e) || e >= "0" && e <= "9" || e === ".";
}
function sr(e) {
	let t = 0, n = !1, r = !1;
	e[t] === "$" && (n = !0, t++);
	let i = t;
	for (; t < e.length && e[t] >= "A" && e[t].toUpperCase() <= "Z" && !(!(e[t] >= "A" && e[t] <= "Z") && !(e[t] >= "a" && e[t] <= "z"));) t++;
	if (t === i) return null;
	let a = e.slice(i, t).toUpperCase();
	e[t] === "$" && (r = !0, t++);
	let o = t;
	for (; t < e.length && e[t] >= "0" && e[t] <= "9";) t++;
	if (t === o || t !== e.length) return null;
	let s = parseInt(e.slice(o, t), 10), c = 0;
	for (let e = 0; e < a.length; e++) c = c * 26 + (a.charCodeAt(e) - 64);
	return s < 1 || s > Un || c > Wn ? null : {
		colAbs: n,
		col: c,
		rowAbs: r,
		row: s
	};
}
var cr = /* @__PURE__ */ new WeakMap();
function lr(e) {
	return e.replace(/[A-Z]+/gu, (e) => e.toLowerCase());
}
function ur(e, t) {
	let n = cr.get(e);
	if (!n || n.size !== e.size) {
		let t = /* @__PURE__ */ new Map();
		for (let n of e.keys()) t.set(lr(n), n);
		n = {
			size: e.size,
			keys: t
		}, cr.set(e, n);
	}
	let r = n.keys.get(lr(t));
	return r === void 0 ? void 0 : e.get(r);
}
function dr(e, t) {
	return Dr(fr(e, t.definedNames, t.depth, {
		depth: 0,
		remainingNameSourceUnits: Qn
	}), t);
}
function fr(e, t, n, r) {
	let i = e.trim(), a = ir(i.startsWith("=") ? i.slice(1) : i), o = {
		toks: a,
		pos: 0,
		budget: r,
		names: t,
		nameDepth: n
	}, s = hr(o);
	if (o.pos !== a.length) throw new Y("unsupported");
	return s;
}
function pr(e) {
	return e.toks[e.pos];
}
function mr(e) {
	return e.toks[e.pos++];
}
function hr(e) {
	if (e.budget.depth >= Zn) throw new Y("unsupported");
	e.budget.depth++;
	try {
		return gr(e);
	} finally {
		e.budget.depth--;
	}
}
function gr(e) {
	let t = vr(e), n = pr(e);
	return n && n.kind === "op" && (n.text === "<" || n.text === ">" || n.text === "<=" || n.text === ">=" || n.text === "=" || n.text === "<>") ? (mr(e), {
		t: "bin",
		op: n.text,
		l: t,
		r: vr(e)
	}) : t;
}
function _r(e, t, n) {
	let r = n(e), i = [];
	for (;;) {
		let r = pr(e);
		if (!r || r.kind !== "op" || !t.includes(r.text)) break;
		mr(e), i.push({
			op: r.text,
			r: n(e)
		});
	}
	return i.length ? {
		t: "chain",
		first: r,
		rest: i
	} : r;
}
function vr(e) {
	return _r(e, ["&"], yr);
}
function yr(e) {
	return _r(e, ["+", "-"], br);
}
function br(e) {
	return _r(e, ["*", "/"], Tr);
}
function xr(e) {
	return Number.isFinite(e) ? e : Q("#NUM!");
}
function Sr(e, t, n) {
	switch (e) {
		case "&": return Z(t) + Z(n);
		case "+": return xr(X(t) + X(n));
		case "-": return xr(X(t) - X(n));
		case "*": return xr(X(t) * X(n));
		case "/": {
			let e = X(t), r = X(n);
			return r === 0 ? Q("#DIV/0!") : xr(e / r);
		}
		default: return Cr(e, Jn(t), Jn(n));
	}
}
function Cr(e, t, n) {
	let r = typeof t == "string" && isNaN(parseFloat(t)) ? null : wr(t), i = typeof n == "string" && isNaN(parseFloat(n)) ? null : wr(n);
	if (r !== null && i !== null) switch (e) {
		case "<": return r < i;
		case ">": return r > i;
		case "<=": return r <= i;
		case ">=": return r >= i;
		case "=": return r === i;
		case "<>": return r !== i;
	}
	let a = String(t ?? ""), o = String(n ?? "");
	switch (e) {
		case "<": return a < o;
		case ">": return a > o;
		case "<=": return a <= o;
		case ">=": return a >= o;
		case "=": return a === o;
		case "<>": return a !== o;
	}
	return !1;
}
function wr(e) {
	let t = Jn(e);
	if (typeof t == "number") return t;
	if (typeof t == "boolean") return +!!t;
	if (t == null) return 0;
	let n = parseFloat(t);
	return isNaN(n) ? 0 : n;
}
function Tr(e) {
	if (e.budget.depth >= Zn) throw new Y("unsupported");
	e.budget.depth++;
	try {
		let t = pr(e);
		return t && t.kind === "op" && t.text === "-" ? (mr(e), {
			t: "neg",
			e: Tr(e)
		}) : t && t.kind === "op" && t.text === "+" ? (mr(e), {
			t: "pos",
			e: Tr(e)
		}) : Er(e);
	} finally {
		e.budget.depth--;
	}
}
function Er(e) {
	let t = mr(e);
	if (!t) throw new Y("invalid");
	if (t.kind === "num") return {
		t: "lit",
		v: parseFloat(t.text)
	};
	if (t.kind === "str") return {
		t: "lit",
		v: t.text
	};
	if (t.kind === "bool") return {
		t: "lit",
		v: t.text === "TRUE"
	};
	if (t.kind === "error") return {
		t: "lit",
		v: Q(t.text)
	};
	if (t.kind === "lparen") {
		let t = hr(e), n = mr(e);
		if (!n || n.kind !== "rparen") throw new Y("invalid");
		return t;
	}
	if (t.kind === "ref") {
		if (pr(e)?.kind === "colon") {
			mr(e);
			let n = mr(e);
			if (n?.kind !== "ref" || !n.ref) throw new Y("invalid");
			return {
				t: "range",
				a: t.ref,
				b: n.ref
			};
		}
		return {
			t: "ref",
			ref: t.ref
		};
	}
	if (t.kind === "name") {
		if (pr(e)?.kind === "lparen") {
			mr(e);
			let n = [];
			if (pr(e)?.kind !== "rparen") for (n.push(hr(e)); pr(e)?.kind === "comma";) mr(e), n.push(hr(e));
			let r = mr(e);
			if (!r || r.kind !== "rparen") throw new Y("invalid");
			let i = t.text.toUpperCase();
			return Ar(i, n.length), {
				t: "call",
				name: i,
				args: n
			};
		}
		let n = ur(e.names, t.text);
		if (!n || e.nameDepth >= Xn || n.formula.length > e.budget.remainingNameSourceUnits) throw new Y("unsupported");
		return e.budget.remainingNameSourceUnits -= n.formula.length, {
			t: "name",
			body: fr(jr(n.formula), e.names, e.nameDepth + 1, e.budget)
		};
	}
	throw new Y("invalid");
}
function Dr(e, t) {
	try {
		return Or(e, t);
	} catch (e) {
		if (e instanceof Y && e.kind === "error") return Q(e.code ?? "#VALUE!");
		throw e;
	}
}
function Or(e, t) {
	switch (e.t) {
		case "lit": return e.v;
		case "ref": return Nr(e.ref, t);
		case "range": return Lr(e.a, e.b, t);
		case "neg": return -X(Dr(e.e, t));
		case "pos": return X(Dr(e.e, t));
		case "bin": return Sr(e.op, Dr(e.l, t), Dr(e.r, t));
		case "chain": {
			let n = Dr(e.first, t);
			for (let { op: r, r: i } of e.rest) n = Sr(r, n, Dr(i, t));
			return n;
		}
		case "call": return Vr(e.name, e.args, t);
		case "name": return Dr(e.body, {
			...t,
			anchorRow: 1,
			anchorCol: 1
		});
	}
}
var kr = {
	AND: [1, 255],
	OR: [1, 255],
	NOT: [1, 1],
	IF: [2, 3],
	IFERROR: [2, 2],
	IFS: [2, 254],
	TRUE: [0, 0],
	FALSE: [0, 0],
	ISBLANK: [1, 1],
	ISNUMBER: [1, 1],
	ISTEXT: [1, 1],
	ISNONTEXT: [1, 1],
	ISERROR: [1, 1],
	ISERR: [1, 1],
	ISNA: [1, 1],
	ISLOGICAL: [1, 1],
	ROUNDDOWN: [2, 2],
	ROUNDUP: [2, 2],
	ROUND: [2, 2],
	INT: [1, 1],
	TRUNC: [1, 2],
	CEILING: [2, 2],
	FLOOR: [2, 2],
	MOD: [2, 2],
	POWER: [2, 2],
	SQRT: [1, 1],
	ABS: [1, 1],
	SIGN: [1, 1],
	EXP: [1, 1],
	LN: [1, 1],
	LOG10: [1, 1],
	MIN: [1, 255],
	MAX: [1, 255],
	SUM: [1, 255],
	AVERAGE: [1, 255],
	COUNT: [1, 255],
	COUNTA: [1, 255],
	COUNTBLANK: [1, 1],
	COUNTIF: [2, 2],
	SUMIF: [2, 3],
	AVERAGEIF: [2, 3],
	LEN: [1, 1],
	LEFT: [1, 2],
	RIGHT: [1, 2],
	MID: [3, 3],
	UPPER: [1, 1],
	LOWER: [1, 1],
	TRIM: [1, 1],
	EXACT: [2, 2],
	FIND: [2, 3],
	SEARCH: [2, 3],
	CONCATENATE: [1, 255],
	CONCAT: [1, 253],
	T: [1, 1],
	N: [1, 1],
	VALUE: [1, 1],
	ROW: [0, 1],
	COLUMN: [0, 1],
	TODAY: [0, 0],
	NOW: [0, 0],
	DATE: [3, 3],
	YEAR: [1, 1],
	MONTH: [1, 1],
	DAY: [1, 1],
	WEEKDAY: [1, 2]
};
function Ar(e, t) {
	let r = n(kr, e);
	if (!r) throw new Y("unsupported");
	if (t < r[0] || t > r[1] || e === "IFS" && t % 2 != 0) throw new Y("invalid");
}
function jr(e) {
	let t = e.match(/^(?:'[^']*'|[A-Za-z_][A-Za-z0-9_.]*)!(.*)$/);
	return t ? t[1] : e;
}
function Mr(e, t) {
	return {
		col: e.colAbs ? e.col : e.col + (t.col - t.anchorCol),
		row: e.rowAbs ? e.row : e.row + (t.row - t.anchorRow)
	};
}
function Nr(e, t) {
	let { row: n, col: r } = Mr(e, t);
	return Br(t.cellIndex.get(`${n}:${r}`));
}
var Pr = 4096;
function Fr(e, t, n) {
	let r = Mr(e, n), i = Mr(t, n);
	return {
		r1: Math.min(r.row, i.row),
		c1: Math.min(r.col, i.col),
		r2: Math.max(r.row, i.row),
		c2: Math.max(r.col, i.col)
	};
}
function Ir({ r1: e, c1: t, r2: n, c2: r }, i) {
	if ((n - e + 1) * (r - t + 1) > Pr) throw new Y("unsupported");
	let a = [];
	for (let o = e; o <= n; o++) for (let e = t; e <= r; e++) a.push(Br(i.cellIndex.get(`${o}:${e}`)));
	return a;
}
function Lr(e, t, n) {
	return Ir(Fr(e, t, n), n);
}
function Rr(e, t) {
	switch (e.t) {
		case "ref": {
			let { row: n, col: r } = Mr(e.ref, t);
			return {
				r1: n,
				c1: r,
				r2: n,
				c2: r
			};
		}
		case "range": return Fr(e.a, e.b, t);
		case "name": return Rr(e.body, {
			...t,
			anchorRow: 1,
			anchorCol: 1
		});
		default: return null;
	}
}
function zr(e, t, n) {
	let r = Rr(e, n), i = Rr(t, n);
	if (!r || !i) return null;
	let a = i.r1 + (r.r2 - r.r1), o = i.c1 + (r.c2 - r.c1);
	if (i.r1 < 1 || i.c1 < 1 || a > Un || o > Wn) throw new Y("unsupported");
	return Ir({
		r1: i.r1,
		c1: i.c1,
		r2: a,
		c2: o
	}, n);
}
function Br(e) {
	if (!e) return null;
	switch (e.value.type) {
		case "number": return e.value.number;
		case "bool": return e.value.bool;
		case "text": return e.value.text;
		case "error": return Q(e.value.error);
		default: return null;
	}
}
function Vr(e, t, n) {
	let r = (e) => Dr(t[e], n);
	switch (e) {
		case "IF": return tr(r(0)) ? r(1) : t.length > 2 ? r(2) : !1;
		case "IFERROR": {
			let e = qn(r(0));
			return (e instanceof Gn ? r(1) : e) ?? "";
		}
		case "ISERROR": return qn(r(0)) instanceof Gn;
		case "ISERR": {
			let e = qn(r(0));
			return e instanceof Gn && e.code !== "#N/A";
		}
		case "ISNA": {
			let e = qn(r(0));
			return e instanceof Gn && e.code === "#N/A";
		}
		case "ROW":
		case "COLUMN": {
			let r = t[0], i = r === void 0 ? n : r.t === "ref" ? Mr(r.ref, n) : null;
			if (!i) throw new Y("unsupported");
			return e === "ROW" ? i.row : i.col;
		}
		case "SUMIF":
		case "AVERAGEIF": {
			let i = Kn(r(0)), a = r(1), o = t.length > 2 ? zr(t[0], t[2], n) ?? Kn(r(2)) : null;
			return e === "SUMIF" ? Wr(i, a, o) : Gr(i, a, o);
		}
	}
	let i = t.map((e) => Dr(e, n));
	switch (e) {
		case "IFS":
			Yn(i);
			for (let e = 0; e < i.length; e += 2) if (tr(i[e])) return i[e + 1];
			return Q("#N/A");
		case "AND": return Yn(i).every((e) => tr(e));
		case "OR": return Yn(i).some((e) => tr(e));
		case "NOT": return !tr(i[0]);
		case "TRUE": return !0;
		case "FALSE": return !1;
		case "ISBLANK": return qn(i[0]) === null;
		case "ISNUMBER": return typeof qn(i[0]) == "number";
		case "ISTEXT": return typeof qn(i[0]) == "string";
		case "ISNONTEXT": return typeof qn(i[0]) != "string";
		case "ISLOGICAL": return typeof qn(i[0]) == "boolean";
		case "ROUNDDOWN": {
			let e = X(i[0]), t = 10 ** X(i[1]);
			return (e >= 0 ? Math.floor(e * t) : Math.ceil(e * t)) / t;
		}
		case "ROUNDUP": {
			let e = X(i[0]), t = 10 ** X(i[1]);
			return (e >= 0 ? Math.ceil(e * t) : Math.floor(e * t)) / t;
		}
		case "ROUND": return Hr(X(i[0]), X(i[1]));
		case "INT": return Math.floor(X(i[0]));
		case "TRUNC": {
			let e = X(i[0]), t = 10 ** X(i[1] ?? 0);
			return (e >= 0 ? Math.floor(e * t) : Math.ceil(e * t)) / t;
		}
		case "CEILING": {
			let e = X(i[0]), t = X(i[1]);
			return t === 0 ? 0 : Math.ceil(e / t) * t;
		}
		case "FLOOR": {
			let e = X(i[0]), t = X(i[1]);
			return e > 0 && t < 0 ? Q("#NUM!") : t === 0 ? 0 : Math.floor(e / t) * t;
		}
		case "MOD": {
			let e = X(i[0]), t = X(i[1]);
			return t === 0 ? Q("#DIV/0!") : e - Math.floor(e / t) * t;
		}
		case "POWER": {
			let e = X(i[0]), t = X(i[1]);
			return e === 0 && t <= 0 ? Q("#DIV/0!") : xr(e ** +t);
		}
		case "SQRT": {
			let e = X(i[0]);
			return e < 0 ? Q("#NUM!") : Math.sqrt(e);
		}
		case "ABS": return Math.abs(X(i[0]));
		case "SIGN": {
			let e = X(i[0]);
			return e > 0 ? 1 : e < 0 ? -1 : 0;
		}
		case "EXP": return xr(Math.exp(X(i[0])));
		case "LN": {
			let e = X(i[0]);
			return e <= 0 ? Q("#NUM!") : Math.log(e);
		}
		case "LOG10": {
			let e = X(i[0]);
			return e <= 0 ? Q("#NUM!") : Math.log10(e);
		}
		case "MIN": {
			let e = Yn(i).filter((e) => typeof e == "number");
			return e.length ? Math.min(...e) : 0;
		}
		case "MAX": {
			let e = Yn(i).filter((e) => typeof e == "number");
			return e.length ? Math.max(...e) : 0;
		}
		case "SUM": return Yn(i).reduce((e, t) => e + (typeof t == "number" ? t : 0), 0);
		case "AVERAGE": {
			let e = Yn(i).filter((e) => typeof e == "number");
			return e.length ? e.reduce((e, t) => e + t, 0) / e.length : Q("#DIV/0!");
		}
		case "COUNT": return i.flatMap(Kn).filter((e) => typeof e == "number").length;
		case "COUNTA": return i.flatMap(Kn).filter((e) => e != null).length;
		case "COUNTBLANK": return i.flatMap(Kn).filter((e) => e == null || e === "").length;
		case "COUNTIF": return Ur(Kn(i[0]), i[1]);
		case "LEN": return Z(i[0]).length;
		case "LEFT": {
			let e = Z(i[0]), t = X(i[1] ?? 1);
			return t < 0 ? Q("#VALUE!") : e.slice(0, t);
		}
		case "RIGHT": {
			let e = Z(i[0]), t = X(i[1] ?? 1);
			return t < 0 ? Q("#VALUE!") : t >= e.length ? e : e.slice(e.length - t);
		}
		case "MID": {
			let e = Z(i[0]), t = X(i[1]), n = X(i[2]);
			return t < 1 || n < 0 ? Q("#VALUE!") : e.slice(t - 1, t - 1 + n);
		}
		case "UPPER": return Z(i[0]).toUpperCase();
		case "LOWER": return Z(i[0]).toLowerCase();
		case "TRIM": {
			let e = Z(i[0]).replace(/ +/g, " ");
			return e.slice(+!!e.startsWith(" "), e.endsWith(" ") ? e.length - 1 : e.length);
		}
		case "EXACT": return Z(i[0]) === Z(i[1]);
		case "FIND": {
			let e = Z(i[0]), t = Z(i[1]), n = X(i[2] ?? 1);
			if (n < 1) return Q("#VALUE!");
			let r = t.indexOf(e, n - 1);
			return r < 0 ? Q("#VALUE!") : r + 1;
		}
		case "SEARCH": {
			let e = Z(i[0]).toLowerCase(), t = Z(i[1]), n = t.toLowerCase(), r = X(i[2] ?? 1);
			if (r < 1 || t.length > 0 && Number.isInteger(r) && r > t.length) return Q("#VALUE!");
			let a = n.indexOf(e, r - 1);
			return a < 0 ? Q("#VALUE!") : a + 1;
		}
		case "CONCATENATE":
		case "CONCAT": return i.flatMap(Kn).map((e) => Z(e)).join("");
		case "T": {
			let e = Jn(i[0]);
			return typeof e == "string" ? e : "";
		}
		case "N": {
			let e = Jn(i[0]);
			return typeof e == "number" ? e : typeof e == "boolean" ? +!!e : 0;
		}
		case "VALUE": return X(i[0]);
		case "TODAY": return qr();
		case "NOW": return Jr();
		case "DATE": return Yr(X(i[0]), X(i[1]), X(i[2]));
		case "YEAR": return Zr(X(i[0])).y;
		case "MONTH": return Zr(X(i[0])).m;
		case "DAY": return Zr(X(i[0])).d;
		case "WEEKDAY": {
			let e = Xr(X(i[0])).getUTCDay(), t = X(i[1] ?? 1);
			return t === 2 ? e === 0 ? 7 : e : t === 3 ? e === 0 ? 6 : e - 1 : e + 1;
		}
		default: throw new Y("unsupported");
	}
}
function Hr(e, t) {
	if (!Number.isInteger(t)) throw new Y("unsupported");
	if (e === 0) return 0;
	let n = Math.max(-400, Math.min(400, t)), [r, i = "0"] = String(Math.abs(e)).split("e"), a = r.indexOf("."), o = r.replace(".", ""), s = (a === -1 ? r.length : a) + Number(i) + n;
	if (s >= o.length) return e;
	if (s < 0) return 0;
	let c = (s === 0 ? 0n : BigInt(o.slice(0, s))) + (o[s] >= "5" ? 1n : 0n), l = Number(`${c}e${-n}`);
	if (!Number.isFinite(l)) throw new Y("error", "#NUM!");
	return l === 0 ? 0 : Math.sign(e) * l;
}
function Ur(e, t) {
	let n = Kr(t), r = 0;
	for (let t of e) n(t) && r++;
	return r;
}
function Wr(e, t, n) {
	let r = Kr(t), i = n ?? e, a = 0;
	for (let t = 0; t < e.length; t++) if (r(e[t])) {
		let e = i[t];
		typeof e == "number" && (a += e);
	}
	return a;
}
function Gr(e, t, n) {
	let r = Kr(t), i = n ?? e, a = 0, o = 0;
	for (let t = 0; t < e.length; t++) if (r(e[t])) {
		let e = i[t];
		if (e === null) continue;
		typeof e == "number" && (a += e), o++;
	}
	return o === 0 ? Q("#DIV/0!") : a / o;
}
function Kr(e) {
	let t = qn(e);
	if (t instanceof Gn) throw new Y("unsupported");
	if (typeof t != "string") {
		let e = typeof t == "number" ? t : null;
		return (n) => e !== null && typeof n == "number" ? n === e : n === t;
	}
	let n = t.match(/^(<=|>=|<>|<|>|=)(.*)$/), r = n ? n[1] : "=", i = n ? n[2] : t, a = i.trim() === "" ? NaN : parseFloat(i), o = !isNaN(a) && /^-?\d+(\.\d+)?$/.test(i.trim()), s = lr(i);
	return (e) => {
		if (o && typeof e == "number") switch (r) {
			case "<": return e < a;
			case ">": return e > a;
			case "<=": return e <= a;
			case ">=": return e >= a;
			case "<>": return e !== a;
			default: return e === a;
		}
		if (typeof e == "string" && (r === "=" || r === "<>")) {
			let t = lr(e) === s;
			return r === "=" ? t : !t;
		}
		let t = e == null ? "" : typeof e == "boolean" ? e ? "TRUE" : "FALSE" : e instanceof Gn ? e.code : String(e);
		switch (r) {
			case "<>": return t !== i;
			case "<": return t < i;
			case ">": return t > i;
			case "<=": return t <= i;
			case ">=": return t >= i;
			default: return t === i;
		}
	};
}
function qr() {
	let e = /* @__PURE__ */ new Date();
	return d(new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate())), !1);
}
function Jr() {
	return d(new Date(Date.now()), !1);
}
function Yr(e, t, n) {
	return Math.floor(d(new Date(Date.UTC(e, t - 1, n)), !1));
}
function Xr(e) {
	return t(Math.floor(e), !1);
}
function Zr(e) {
	let t = Xr(e);
	return {
		y: t.getUTCFullYear(),
		m: t.getUTCMonth() + 1,
		d: t.getUTCDate()
	};
}
//#endregion
//#region packages/xlsx/src/conditional-format.ts
function Qr(e, t, n) {
	for (let r of e) if (t >= r.top && t <= r.bottom && n >= r.left && n <= r.right) return !0;
	return !1;
}
function $r(e) {
	return e && e.value.type === "number" ? e.value.number : null;
}
function ei(e) {
	return e && e.value.type === "text" ? e.value.text : null;
}
function ti(e, t) {
	let n = [];
	for (let r of e.rows) for (let e of r.cells) e.value.type === "number" && Qr(t, e.row, e.col) && n.push(e.value.number);
	return n;
}
function ni(e) {
	let t = e.value;
	if (t == null || t.trim() === "") return e.kind === "formula" ? "invalid" : void 0;
	let n = Vn(t);
	return typeof n == "number" ? n : "unsupported";
}
function ri(e, t) {
	let n = t.length ? Infinity : 0, r = t.length ? -Infinity : 0;
	for (let e of t) e < n && (n = e), e > r && (r = e);
	if (e.kind === "min") return n;
	if (e.kind === "max") return r;
	if (![
		"num",
		"formula",
		"percent",
		"percentile"
	].includes(e.kind)) return "unsupported";
	let i = ni(e);
	if (typeof i == "string") return i;
	switch (e.kind) {
		case "percent": {
			let e = i ?? 50;
			return n + (r - n) * (e / 100);
		}
		case "percentile": {
			if (!t.length) return 0;
			let e = [...t].sort((e, t) => e - t), n = (i ?? 50) / 100;
			return e[Math.max(0, Math.min(e.length - 1, Math.round(n * (e.length - 1))))];
		}
		default: return i ?? 0;
	}
}
function ii(e, t) {
	let n = !0;
	for (let r of t) r === "unsupported" ? (e.thresholdUnsupported = !0, n = !1) : r === "invalid" && (e.thresholdInvalid = !0, n = !1);
	return n ? t : void 0;
}
function ai(e, t = oi(e)) {
	let n = [], r = /* @__PURE__ */ new Map();
	for (let t of e.definedNames ?? []) r.set(t.name, t);
	let i = e.conditionalFormats ?? [];
	for (let t of i) {
		let r = t.rules.some((e) => e.type !== "expression" && e.type !== "cellIs" && e.type !== "other" && !(e.type === "dataBar" && e.extThresholdFormula)) ? ti(e, t.sqref) : [];
		for (let e of t.rules) {
			let i = {
				rule: e,
				sqref: t.sqref
			};
			if (e.type === "colorScale") i.scaleStops = ii(i, e.stops.map((e) => ri(e, r)));
			else if (e.type === "dataBar") if (e.extThresholdFormula) i.thresholdUnsupported = !0;
			else {
				let t = ii(i, [ri(e.min, r), ri(e.max, r)]);
				t && (i.barMin = t[0], i.barMax = t[1]);
			}
			else if (e.type === "top10") {
				let t = [...r].sort((e, t) => e - t), n = t.length;
				if (n > 0) {
					let r = Math.min(e.rank, n);
					if (e.percent) {
						let a = e.top ? 1 - r / 100 : r / 100;
						i.top10Threshold = t[Math.max(0, Math.min(n - 1, Math.round(a * (n - 1))))];
					} else i.top10Threshold = e.top ? t[Math.max(0, n - r)] : t[Math.min(n - 1, r - 1)];
					i.top10IsTop = e.top;
				}
			} else if (e.type === "aboveAverage") {
				if (r.length > 0) {
					let t = r.reduce((e, t) => e + t, 0) / r.length;
					if (i.avgValue = t, i.avgIsAbove = e.aboveAverage, e.stdDev && e.stdDev > 0) {
						let e = r.reduce((e, n) => e + (n - t) * (n - t), 0) / r.length;
						i.avgStdDev = Math.sqrt(e);
					}
				}
			} else e.type === "iconSet" ? i.iconThresholds = ii(i, e.cfvos.map((e) => ri(e, r))) : e.type === "cellIs" && (i.cellIsOperands = e.formulas.map(li));
			n.push(i);
		}
	}
	return n.sort((e, t) => (e.rule.priority ?? 0) - (t.rule.priority ?? 0)), {
		compiled: n,
		worksheet: e,
		cellIndex: t,
		definedNames: r
	};
}
function oi(e) {
	return Ht(e.rows, {
		resource: "worksheet-cell-index",
		operation: "index-worksheet-cells",
		limit: ke(e).maxCoordinateIndexEntries
	});
}
var si = new Set([
	"lessThan",
	"lessThanOrEqual",
	"equal",
	"notEqual",
	"greaterThanOrEqual",
	"greaterThan",
	"between",
	"notBetween",
	"containsText",
	"notContains",
	"beginsWith",
	"endsWith"
]);
function ci(e, t, n) {
	switch (t) {
		case "greaterThan": return e > (n[0] ?? 0);
		case "greaterThanOrEqual": return e >= (n[0] ?? 0);
		case "lessThan": return e < (n[0] ?? 0);
		case "lessThanOrEqual": return e <= (n[0] ?? 0);
		case "equal": return e === (n[0] ?? 0);
		case "notEqual": return e !== (n[0] ?? 0);
		case "between": return e >= (n[0] ?? 0) && e <= (n[1] ?? 0);
		case "notBetween": return e < (n[0] ?? 0) || e > (n[1] ?? 0);
		default: return !1;
	}
}
function li(e) {
	let t = Vn(e);
	return t === void 0 ? { formula: e } : { literal: t };
}
function ui(e, t, n) {
	let r = n[0] ?? "", i = n[1] ?? "", a = (e) => e.toLowerCase();
	switch (t) {
		case "equal": return a(e) === a(r);
		case "notEqual": return a(e) !== a(r);
		case "containsText": return a(e).includes(a(r));
		case "notContains": return !a(e).includes(a(r));
		case "beginsWith": return a(e).startsWith(a(r));
		case "endsWith": return a(e).endsWith(a(r));
		case "between": return a(e) >= a(r) && a(e) <= a(i);
		case "notBetween": return a(e) < a(r) || a(e) > a(i);
		default: return !1;
	}
}
function di(e, t, n) {
	let r = e.replace("#", ""), i = t.replace("#", ""), a = parseInt(r.slice(0, 2), 16), o = parseInt(r.slice(2, 4), 16), s = parseInt(r.slice(4, 6), 16), c = parseInt(i.slice(0, 2), 16), l = parseInt(i.slice(2, 4), 16), u = parseInt(i.slice(4, 6), 16), d = Math.round(a + (c - a) * n), f = Math.round(o + (l - o) * n), p = Math.round(s + (u - s) * n);
	return `#${d.toString(16).padStart(2, "0").toUpperCase()}${f.toString(16).padStart(2, "0").toUpperCase()}${p.toString(16).padStart(2, "0").toUpperCase()}`;
}
function fi(e, t, n) {
	if (!t.length) return "#FFFFFF";
	if (e <= n[0]) return t[0].color;
	if (e >= n[n.length - 1]) return t[t.length - 1].color;
	for (let r = 1; r < n.length; r++) if (e <= n[r]) {
		let i = n[r - 1], a = n[r], o = a === i ? 0 : (e - i) / (a - i);
		return di(t[r - 1].color, t[r].color, o);
	}
	return t[t.length - 1].color;
}
function pi(e, t) {
	if (t && (t.fill && !e.fill && (e.fill = t.fill), t.font?.color && e.fontColor == null && (e.fontColor = t.font.color), e.fontBold ??= Ft(t, "bold"), e.fontItalic ??= Ft(t, "italic"), e.fontUnderline ??= Ft(t, "underline"), e.fontStrike ??= Ft(t, "strike"), t.numFmt && e.numFmt == null && (e.numFmt = {
		numFmtId: t.numFmt.numFmtId,
		formatCode: t.numFmt.formatCode || null
	}), t.border)) {
		let n = e.border ?? {};
		e.border = {
			left: n.left ?? t.border.left,
			right: n.right ?? t.border.right,
			top: n.top ?? t.border.top,
			bottom: n.bottom ?? t.border.bottom,
			diagonalUp: n.diagonalUp ?? t.border.diagonalUp,
			diagonalDown: n.diagonalDown ?? t.border.diagonalDown
		};
	}
}
function mi(e, t, n, r, i) {
	if (e == null) return "active";
	let a = t.sqref[0];
	if (!a) return "inactive";
	let o = Hn(e, {
		row: n,
		col: r,
		anchorRow: a.top,
		anchorCol: a.left,
		cellIndex: i.cellIndex
	});
	return o.kind === "unsupported" ? "unsupported" : o.kind === "error" ? "inactive" : typeof o.value == "number" && o.value !== 0 ? "active" : "inactive";
}
function hi(e) {
	return e.thresholdUnsupported === !0 || e.thresholdInvalid === !0;
}
function gi(e, t, n, r, i) {
	let a = mi(t, e, n, r, i);
	return a === "unsupported" || a === "inactive" ? !1 : !hi(e);
}
function _i(e, t, n, r, i) {
	let a = {};
	if (!r.compiled.length) return a;
	for (let o of r.compiled) {
		if (!Qr(o.sqref, t, n)) continue;
		let s = o.rule, c = $r(e), l = !1;
		if (s.type === "expression") {
			let e = o.sqref[0];
			if (!e) continue;
			l = $n(er(s.formula, {
				row: t,
				col: n,
				anchorRow: e.top,
				anchorCol: e.left,
				cellIndex: r.cellIndex,
				definedNames: r.definedNames,
				depth: 0
			})), l && pi(a, s.dxfId == null ? null : i[s.dxfId]);
		} else if (s.type === "cellIs") {
			let u = o.sqref[0];
			if (!u) continue;
			let d = o.cellIsOperands ?? [], f = s.operator === "between" || s.operator === "notBetween" ? 2 : 1;
			if (!(!si.has(s.operator) || d.length < f)) {
				let i = [], a = !0;
				for (let e of d) {
					if ("literal" in e) {
						i.push(e.literal);
						continue;
					}
					let o = Hn(e.formula, {
						row: t,
						col: n,
						anchorRow: u.top,
						anchorCol: u.left,
						cellIndex: r.cellIndex
					});
					if (o.kind === "value") {
						i.push(o.value);
						continue;
					}
					a = !1;
					break;
				}
				let o = ei(e);
				a && (c != null && i.every((e) => typeof e == "number") ? l = ci(c, s.operator, i) : o != null && i.every((e) => typeof e == "string") && (l = ui(o, s.operator, i)));
			}
			l && pi(a, s.dxfId == null ? null : i[s.dxfId]);
		} else if (s.type === "top10") {
			if (c == null || o.top10Threshold == null) continue;
			l = o.top10IsTop ? c >= o.top10Threshold : c <= o.top10Threshold, l && pi(a, s.dxfId == null ? null : i[s.dxfId]);
		} else if (s.type === "aboveAverage") {
			if (c == null || o.avgValue == null) continue;
			let e = o.avgStdDev == null ? 0 : o.avgStdDev * (s.stdDev ?? 1), t = o.avgIsAbove ? o.avgValue + e : o.avgValue - e, n = s.equalAverage === !0;
			l = o.avgIsAbove ? n ? c >= t : c > t : n ? c <= t : c < t, l && pi(a, s.dxfId == null ? null : i[s.dxfId]);
		} else if (s.type === "iconSet") {
			if (c == null || !hi(o) && !o.iconThresholds?.length || !gi(o, s.activeFormula, t, n, r)) continue;
			let e = o.iconThresholds;
			if (!e?.length) continue;
			l = !0;
			let i = e.length, u = 0;
			for (let t = 1; t < i; t++) c >= e[t] && (u = t);
			if (s.reverse && (u = i - 1 - u), s.customIcons && s.customIcons[u]) {
				let e = s.customIcons[u];
				e.iconSet !== "NoIcons" && (a.iconSet = {
					name: e.iconSet,
					index: e.iconId
				});
			} else a.iconSet = {
				name: s.iconSet,
				index: u
			};
		} else if (s.type === "colorScale") {
			if (c == null || !hi(o) && !o.scaleStops || !gi(o, s.activeFormula, t, n, r)) continue;
			let e = o.scaleStops;
			if (!e) continue;
			if (l = !0, !a.fill) {
				let t = fi(c, s.stops, e);
				a.fill = {
					patternType: "solid",
					fgColor: t,
					bgColor: t
				};
			}
		} else if (s.type === "dataBar") {
			if (c == null || !hi(o) && (o.barMin == null || o.barMax == null) || !gi(o, s.activeFormula, t, n, r)) continue;
			let e = o.barMin, i = o.barMax;
			if (e == null || i == null) continue;
			if (l = !0, !a.dataBar) {
				let t = i - e, n = t === 0 ? 0 : Math.max(0, Math.min(1, (c - e) / t));
				a.dataBar = {
					color: s.color,
					ratio: n,
					gradient: s.gradient
				};
			}
		}
		if (l && s.stopIfTrue) break;
	}
	return a;
}
//#endregion
//#region packages/xlsx/src/bidi-line.ts
function vi(e, t) {
	return e === 2 ? !0 : e === 1 ? !1 : tt(void 0, t) === "rtl";
}
function yi(e, t) {
	let n = e === 2 || u(t);
	return {
		needBidi: n,
		baseRtl: n && vi(e, t)
	};
}
var bi = (e, t) => ye(e, t);
//#endregion
//#region packages/xlsx/src/a1.ts
function xi(e) {
	let t = /^\$?([A-Z]+)\$?(\d+)$/.exec(e.trim());
	if (!t) return null;
	let n = t[1], r = 0;
	for (let e = 0; e < n.length; e++) r = r * 26 + (n.charCodeAt(e) - 64);
	let i = parseInt(t[2], 10);
	return i < 1 || i > 1048576 || r > 16384 ? null : {
		row: i,
		col: r
	};
}
function Si(e, t) {
	let n = "", r = t;
	for (; r > 0;) {
		let e = (r - 1) % 26;
		n = String.fromCharCode(65 + e) + n, r = Math.floor((r - 1) / 26);
	}
	return `${n}${e}`;
}
//#endregion
//#region packages/xlsx/src/vertical-text.ts
function Ci(e, t, n, r, i, a = !1, o = (t, n, r) => e.fillText(t, n, r)) {
	let s = t.codePointAt(0) ?? 0, c = q(s);
	if (a && Ce(s)) {
		e.save(), e.translate(n, r + i / 2), e.textAlign = "center", e.textBaseline = "middle", ve(e, () => o(t, 0, 0)), e.restore();
		return;
	}
	if (c === "Tr") {
		let a = pe(s);
		if (a !== null) {
			o(String.fromCodePoint(a), n, r);
			return;
		}
		if (Te(s)) {
			o(t, n, r);
			return;
		}
		e.save(), e.translate(n, r + i / 2), e.rotate(Math.PI / 2), e.textAlign = "center", e.textBaseline = "middle", o(t, 0, 0), e.restore();
		return;
	}
	let l = c === "Tu" ? de(s) : null;
	o(l === null ? t : String.fromCodePoint(l), n, r);
}
//#endregion
//#region packages/xlsx/src/internal/cell-anchor-geometry.ts
function wi(e) {
	return e.editAs === "oneCell" && (e.nativeExtCx ?? 0) > 0 && (e.nativeExtCy ?? 0) > 0;
}
function Ti(t, n, r, i, a) {
	let o = n.offsetOf(t.fromCol + 1) + t.fromColOff * i / e, s = r.offsetOf(t.fromRow + 1) + t.fromRowOff * i / e, c = Ei(t, a);
	if (c) return {
		x: o,
		y: s,
		width: c.cx * i / e,
		height: c.cy * i / e
	};
	let l = n.offsetOf(t.toCol + 1) + t.toColOff * i / e, u = r.offsetOf(t.toRow + 1) + t.toRowOff * i / e;
	return {
		x: o,
		y: s,
		width: l - o,
		height: u - s
	};
}
function Ei(e, t) {
	return e.anchorTag === void 0 ? wi(e) ? {
		cx: e.nativeExtCx,
		cy: e.nativeExtCy
	} : null : e.anchorTag === "oneCellAnchor" ? {
		cx: e.anchorExtCx ?? 0,
		cy: e.anchorExtCy ?? 0
	} : e.anchorTag === "twoCellAnchor" && e.editAs === "oneCell" && t !== void 0 ? {
		cx: t.cx,
		cy: t.cy
	} : null;
}
//#endregion
//#region packages/xlsx/src/internal/initial-anchor-sizes.ts
var Di = [
	"fromCol",
	"fromColOff",
	"fromRow",
	"fromRowOff",
	"toCol",
	"toColOff",
	"toRow",
	"toRowOff"
], Oi = Object.freeze([]), ki = Object.freeze({
	cx: 0,
	cy: 0
}), Ai = /* @__PURE__ */ new WeakMap(), ji = /* @__PURE__ */ new WeakSet();
function Mi(e) {
	return e.anchorTag === "twoCellAnchor" && e.editAs === "oneCell";
}
function Ni(e) {
	let t, n = [e.images, e.shapeGroups];
	for (let e of n) for (let n of e ?? []) {
		if (!Mi(n)) continue;
		let e = n, r = 0;
		for (let t of [e.fromRow, e.toRow]) typeof t == "number" && Number.isFinite(t) && t >= 0 && (r = Math.max(r, Math.floor(t) + 1));
		t = Math.max(t ?? 0, r);
	}
	return t;
}
function Pi(t) {
	let n = t * e;
	return Number.isFinite(n) && n > 0 ? n : 0;
}
function Fi(e) {
	throw Error(`XLSX initial anchor size reference does not match this worksheet projection: ${e}`);
}
function Ii(e, t, n = 1) {
	if (!Number.isFinite(n) || n <= 0) throw RangeError(`XLSX initial anchor size capture requires a finite positive scale: ${n}`);
	let r = e.images ?? Oi, i = e.shapeGroups ?? Oi, a, o;
	for (let e = 0; e < 2; e++) {
		let s = e === 0 ? "image" : "shape", c = e === 0 ? r : i;
		for (let e = 0; e < c.length; e++) {
			let r = c[e];
			if (!Mi(r)) continue;
			o ??= t.axesAtScale(n);
			let i = Ti(r, o.col, o.row, n);
			(a ??= []).push(Object.freeze({
				family: s,
				index: e,
				fromCol: r.fromCol,
				fromColOff: r.fromColOff,
				fromRow: r.fromRow,
				fromRowOff: r.fromRowOff,
				toCol: r.toCol,
				toColOff: r.toColOff,
				toRow: r.toRow,
				toRowOff: r.toRowOff,
				cx: Pi(i.width / n),
				cy: Pi(i.height / n)
			}));
		}
	}
	if (a) return Object.freeze({
		version: 1,
		imageCount: r.length,
		shapeGroupCount: i.length,
		entries: Object.freeze(a)
	});
}
function Li(e, t) {
	ji.has(t) && Fi("the reference was released");
	let n = Ai.get(e);
	if (n) {
		if (n.reference === t && e.images === n.images && e.shapeGroups === n.shapeGroups) return;
		Fi("the projection is already bound to another reference");
	}
	(t.version !== 1 || !Array.isArray(t.entries)) && Fi("unsupported reference shape");
	let r = e.images ?? Oi, i = e.shapeGroups ?? Oi;
	(r.length !== t.imageCount || i.length !== t.shapeGroupCount) && Fi("anchor counts differ");
	let a = /* @__PURE__ */ new WeakMap();
	for (let e of t.entries) {
		let t = e.family === "image" ? r : e.family === "shape" ? i : Oi, n = Number.isInteger(e.index) ? t[e.index] : void 0;
		(!n || !Mi(n) || a.has(n)) && Fi(`${e.family}[${e.index}] is not an eligible anchor`);
		for (let t of Di) Object.is(n[t], e[t]) || Fi(`${e.family}[${e.index}].${t} differs`);
		(!Number.isFinite(e.cx) || !Number.isFinite(e.cy) || e.cx < 0 || e.cy < 0) && Fi(`${e.family}[${e.index}] has an invalid EMU size`), a.set(n, e);
	}
	let o = 0;
	for (let e of r) Mi(e) && o++;
	for (let e of i) Mi(e) && o++;
	o !== t.entries.length && Fi("an eligible anchor has no captured initial size");
	for (let e of t.entries) Object.freeze(e);
	Object.freeze(t.entries), Object.freeze(t), Ai.set(e, {
		reference: t,
		images: e.images,
		shapeGroups: e.shapeGroups,
		sizes: a
	});
}
function Ri(e, t) {
	if (!Mi(t)) return;
	let n = Ai.get(e);
	if (n) return ji.has(n.reference) || e.images !== n.images || e.shapeGroups !== n.shapeGroups ? ki : n.sizes.get(t) ?? ki;
}
function zi(e, t, n, r, i) {
	return Ti(t, n, r, i, Ri(e, t));
}
function Bi(e) {
	ji.add(e);
}
//#endregion
//#region packages/xlsx/src/internal/optional-image-fallback.ts
var Vi = /* @__PURE__ */ new WeakMap();
function Hi(e) {
	Vi.delete(e);
}
function Ui(e, t, n) {
	let r = Vi.get(e);
	r || (r = /* @__PURE__ */ new Map(), Vi.set(e, r)), r.set(t, n);
}
function Wi(e, t, n) {
	return e !== void 0 && Vi.get(e)?.get(t) === n;
}
//#endregion
//#region packages/xlsx/src/internal/image-anchor-transform.ts
function Gi(e) {
	if (!Number.isFinite(e)) return [0, 1];
	let t = (e % 360 + 360) % 360;
	if (t === 0) return [0, 1];
	if (t === 90) return [1, 0];
	if (t === 180) return [0, -1];
	if (t === 270) return [-1, 0];
	let n = e * Math.PI / 180;
	return [Math.sin(n), Math.cos(n)];
}
function Ki(e, t = 0) {
	let [n, r] = Gi(t);
	if (n === 0 && Math.abs(r) === 1) return e;
	let i = Math.abs(e.width * r) + Math.abs(e.height * n), a = Math.abs(e.width * n) + Math.abs(e.height * r);
	return {
		x: e.x + (e.width - i) / 2,
		y: e.y + (e.height - a) / 2,
		width: i,
		height: a
	};
}
function qi(e, t, n = 0, r = !1, i = !1) {
	if (n === 0 && !r && !i) return e;
	let a = t.x + t.width / 2, o = t.y + t.height / 2, [s, c] = Gi(-n), l = e.x - a, u = e.y - o, d = a + l * c - u * s, f = o + l * s + u * c;
	return r && (d = 2 * a - d), i && (f = 2 * o - f), {
		x: d,
		y: f
	};
}
//#endregion
//#region packages/xlsx/src/renderer.ts
function Ji(e, t, n, r, i) {
	let a = C(e);
	if (!a || !(a.width > 0) || !(a.height > 0)) return null;
	let o = e, s = r / a.width, c = i / a.height;
	return {
		x: t - a.x * s,
		y: n - a.y * c,
		width: o.width * s,
		height: o.height * c
	};
}
function Yi(e, t, n, r, i, a) {
	let o = r * Math.PI / 180, s = Math.cos(o), c = Math.sin(o), l = Infinity, u = Infinity, d = -Infinity, f = -Infinity;
	for (let [r, o] of [
		[e.x, e.y],
		[e.x + e.width, e.y],
		[e.x, e.y + e.height],
		[e.x + e.width, e.y + e.height]
	]) {
		let e = (r - t) * (i ? -1 : 1), p = (o - n) * (a ? -1 : 1), m = t + e * s - p * c, h = n + e * c + p * s;
		l = Math.min(l, m), u = Math.min(u, h), d = Math.max(d, m), f = Math.max(f, h);
	}
	return {
		x: l,
		y: u,
		width: d - l,
		height: f - u
	};
}
function Xi(e, t, n) {
	if (!t) return e;
	if ("effects" in t) {
		let { widthPt: r, heightPt: i } = Zi(n);
		return JSON.stringify([
			"blip",
			e,
			se(t),
			r,
			i
		]);
	}
	return `${e}|duo:${t.clr1}:${t.clr2}`;
}
function Zi(e) {
	if (!(e && Number.isFinite(e.cx) && Number.isFinite(e.cy) && e.cx > 0 && e.cy > 0)) return {
		widthPt: 0,
		heightPt: 0
	};
	let t = s(e.cx / 12700, e.cy / 12700, e.srcRect, null);
	return {
		widthPt: t.width,
		heightPt: t.height
	};
}
function Qi(e) {
	let t = e.nativeExtCx > 0 && e.nativeExtCy > 0;
	return {
		cx: t ? e.nativeExtCx : e.anchorExtCx ?? 0,
		cy: t ? e.nativeExtCy : e.anchorExtCy ?? 0,
		srcRect: e.srcRect ?? null,
		rotation: e.rotation ?? 0,
		flipH: e.flipH ?? !1,
		flipV: e.flipV ?? !1
	};
}
function $i(e, t) {
	return {
		cx: e.nativeExtCx * t.w,
		cy: e.nativeExtCy * t.h,
		srcRect: t.geom.type === "image" ? t.geom.srcRect ?? null : null,
		rotation: t.rot,
		flipH: t.flipH,
		flipV: t.flipV
	};
}
function ea(e, t) {
	return e.blipEffects?.length ? {
		effects: e.blipEffects,
		duotone: e.duotone ?? null,
		hostRotation: t?.rotation ?? 0,
		hostFlipH: t?.flipH ?? !1,
		hostFlipV: t?.flipV ?? !1
	} : e.duotone ?? null;
}
var ta = y.map((e) => `"${e}"`).join(", "), na = P.map((e) => `"${e}"`).join(", "), ra = `"Calibri", Arial, ${ta}, sans-serif`, ia = `"Calibri", "Carlito", Arial, ${ta}, sans-serif`, aa = `Arial, Helvetica, "Liberation Sans", ${ta}, sans-serif`, oa = `"Times New Roman", "Liberation Serif", ${na}, serif`, sa = `"Carlito", ${aa}`, ca = `"Caladea", ${oa}`, la = /* @__PURE__ */ new WeakMap(), ua = /* @__PURE__ */ new WeakMap(), da = /* @__PURE__ */ new WeakMap(), fa = /* @__PURE__ */ new WeakMap(), pa = /* @__PURE__ */ new WeakMap(), ma = /* @__PURE__ */ new WeakMap(), ha = /* @__PURE__ */ new WeakMap(), ga = /* @__PURE__ */ new WeakMap(), _a = /* @__PURE__ */ new WeakMap();
function va(e, t) {
	let n = ot(t), r = _a.get(t);
	(!r || r.japanese !== n || r.themeJapaneseMajorFont !== t.themeJapaneseMajorFont || r.themeJapaneseMinorFont !== t.themeJapaneseMinorFont) && (r = {
		themeJapaneseMajorFont: t.themeJapaneseMajorFont,
		themeJapaneseMinorFont: t.themeJapaneseMinorFont,
		japanese: n,
		cache: /* @__PURE__ */ new Map()
	}, st(t, r), _a.set(t, r)), ga.set(e, r);
}
function ya(e, t, n, r, i, a = /* @__PURE__ */ new Map()) {
	let o = e.defaultFontFamily ? dt({
		family: e.defaultFontFamily,
		weight: e.defaultFontBold ? 700 : 400,
		style: e.defaultFontItalic ? "italic" : "normal"
	}) : null, s = o === null ? void 0 : t?.[o], c = {
		tupleKey: o,
		route: s,
		hasDeclaredFace: e.defaultFontFamily ? Pa(e.defaultFontFamily, n) : !1,
		canvasMdw: i && e.defaultFontFamily && e.defaultFontSize ? Ma(e.defaultFontFamily, e.defaultFontSize, s, r, e.defaultFontBold ? 700 : 400, e.defaultFontItalic ? "italic" : "normal", i, a.get(e.defaultFontFamily.trim().toLocaleLowerCase("en-US"))) : void 0
	}, l = da.get(e);
	(!l || l.tupleKey !== c.tupleKey || l.route !== c.route || l.hasDeclaredFace !== c.hasDeclaredFace || l.canvasMdw !== c.canvasMdw) && Xe.invalidate(e), da.set(e, c);
}
function ba(e, t, n, r = !1) {
	va(e, t), (ua.get(t) !== n || pa.get(t) !== r) && Xe.invalidate(t), fa.set(e, r);
	let i = (ae(e.canvas) ? e.canvas.ownerDocument?.fonts : void 0) ?? G(), a = r ? o(i, St) : /* @__PURE__ */ new Map();
	ma.set(e, a), ha.set(t, a), ya(t, n, i, r, e, a), pa.set(t, r), n ? (la.set(e, n), ua.set(t, n)) : (la.delete(e), ua.delete(t));
}
function xa(e, t) {
	return t ? ma.get(e)?.get(t.trim().toLocaleLowerCase("en-US")) : void 0;
}
function Sa(e, t, n = !1) {
	(ua.get(e) !== t || pa.get(e) !== n) && Xe.invalidate(e), t ? ua.set(e, t) : ua.delete(e), pa.set(e, n);
	let r = G(), i = n ? o(r, St) : /* @__PURE__ */ new Map();
	ha.set(e, i), ya(e, t, r, n, void 0, i);
}
function Ca(e, t, n = !1, r = !1) {
	let i = dt({
		family: t?.trim() || "Calibri",
		weight: n ? 700 : 400,
		style: r ? "italic" : "normal"
	});
	return la.get(e)?.[i];
}
function wa(e, t) {
	if (t !== void 0) {
		if (!Number.isFinite(t) || t <= 0) throw Error("XLSX maximum digit width must be a finite positive number");
		Xe.forWorksheet(e, t);
	}
}
var Ta = "\"Courier New\", \"Liberation Mono\", monospace";
function Ea(e, t, n = !1, r = "") {
	let a = e?.trim() || null, o = a ? S(a) : null, s = w(a), c = (e, n = !0) => {
		let a = [...n && t ? j(t, s === "serif" ? "serif" : "sans") : [], ...i(r) ? m(s === "serif") : []];
		if (a.length === 0) return e;
		let o = e.lastIndexOf(",");
		return `${e.slice(0, o)}, ${a.map((e) => `"${e}"`).join(", ")}${e.slice(o)}`;
	};
	if (!o) return c(a ? a.toLowerCase() === "calibri" ? n ? sa : aa : a.toLowerCase() === "cambria" ? n ? ca : oa : s === "serif" ? oa : s === "mono" ? Ta : aa : n ? ia : ra);
	let l = s === "serif", u = M(a), d = [...u ? [u] : [], ...j(o, l ? "serif" : "sans").filter((e) => e !== u)].map((e) => `"${e}"`).join(", ");
	return c(`${d ? `${d}, ` : ""}${l ? oa : aa}`, !1);
}
function Da(e, t, n = "", r, i = !1, a, o) {
	let s = e?.trim(), c = ee(n) ? t : void 0, l = r && (s?.toLocaleLowerCase("en-US") || "calibri") === r.requestedFamily.trim().toLocaleLowerCase("en-US") ? r : void 0, u = a && a.toLocaleLowerCase("en-US") !== s?.toLocaleLowerCase("en-US") ? `${p(a)}, ` : "", d = o && o.toLocaleLowerCase("en-US") !== s?.toLocaleLowerCase("en-US") ? `${p(o)}, ` : "";
	return l ? `${p(l.family)}, ${u}${d}${Ea(s, c, i, n)}` : s ? `${p(s)}, ${u}${d}${Ea(s, c, i, n)}` : Ea(null, c, i, n);
}
var Oa = 11;
function ka(e, t, n) {
	return n - e - t;
}
function Aa(e, t, n, r) {
	return r ? ka(e, t, n) : e;
}
var ja = "#7a7a7a";
function Ma(e, t, n, r = !1, i = 400, a = "normal", o, s) {
	let c = t * D, l = o ? null : typeof OffscreenCanvas < "u" ? new OffscreenCanvas(1, 1) : typeof document < "u" ? document.createElement("canvas") : null, u = o ?? l?.getContext("2d");
	if (!u) return 8;
	let d = i !== 400 || a !== "normal" ? `${a} ${i} ` : "";
	o && u.save();
	try {
		u.font = `${d}${c}px ${Da(e, void 0, "", n, r, void 0, s)}`;
		let t = 0;
		for (let e of "0123456789") {
			let n = u.measureText(e).width;
			n > t && (t = n);
		}
		return Na(t);
	} finally {
		o && u.restore();
	}
}
function Na(e) {
	return Math.round(e) || 8;
}
function Pa(e, t) {
	if (!t || typeof t[Symbol.iterator] != "function") return !1;
	let n = e.trim().toLocaleLowerCase("en-US");
	for (let e of t) if (e.family.trim().replace(/^(['"])(.*)\1$/u, "$2").toLocaleLowerCase("en-US") === n) return !0;
	return !1;
}
function Fa(e) {
	if (!e.defaultFontFamily || !e.defaultFontSize) return 8;
	let t = e.defaultFontBold ? 700 : 400, n = e.defaultFontItalic ? "italic" : "normal", r = dt({
		family: e.defaultFontFamily,
		weight: t,
		style: n
	}), i = ua.get(e)?.[r];
	return da.get(e)?.canvasMdw ?? Ma(e.defaultFontFamily, e.defaultFontSize, i, pa.get(e) === !0, t, n, void 0, ha.get(e)?.get(e.defaultFontFamily.trim().toLocaleLowerCase("en-US")));
}
function Ia(e) {
	return Xe.forWorksheetMeasured(e, () => Fa(e));
}
function La(e, t, n, r, i, a, o) {
	if (!(i <= 0 || a <= 0)) {
		if (o) {
			let a = e.createLinearGradient(n, r, n + i, r);
			a.addColorStop(0, b(t, .85)), a.addColorStop(1, b(t, .15)), e.fillStyle = a;
		} else e.fillStyle = b(t);
		e.fillRect(n, r, i, a);
	}
}
function Ra(e) {
	switch (e) {
		case "solid": return 1;
		case "darkGray": return .75;
		case "mediumGray": return .5;
		case "lightGray": return .25;
		case "gray125": return .125;
		case "gray0625": return .0625;
		case "darkHorizontal":
		case "darkVertical":
		case "darkDown":
		case "darkUp":
		case "darkGrid":
		case "darkTrellis": return .5;
		case "lightHorizontal":
		case "lightVertical":
		case "lightDown":
		case "lightUp":
		case "lightGrid":
		case "lightTrellis": return .25;
		default: return 1;
	}
}
var za = /* @__PURE__ */ new Map(), Ba = {
	gray0625: [
		128,
		0,
		8,
		0,
		128,
		0,
		8,
		0
	],
	gray125: [
		136,
		0,
		34,
		0,
		136,
		0,
		34,
		0
	],
	lightGray: [
		170,
		0,
		85,
		0,
		170,
		0,
		85,
		0
	],
	mediumGray: [
		170,
		85,
		170,
		85,
		170,
		85,
		170,
		85
	],
	darkGray: [
		119,
		221,
		119,
		221,
		119,
		221,
		119,
		221
	],
	darkHorizontal: [
		4095,
		4095,
		0,
		4095,
		4095,
		0,
		4095,
		4095,
		0,
		4095,
		4095,
		0
	],
	lightHorizontal: [
		4095,
		0,
		0,
		4095,
		0,
		0,
		4095,
		0,
		0,
		4095,
		0,
		0
	],
	darkVertical: Array(12).fill(3510),
	lightVertical: Array(12).fill(2340),
	darkGrid: [
		204,
		204,
		51,
		51,
		204,
		204,
		51,
		51
	],
	lightGrid: [
		255,
		136,
		136,
		136,
		255,
		136,
		136,
		136
	],
	darkDown: [
		204,
		102,
		51,
		153,
		204,
		102,
		51,
		153
	],
	lightDown: [
		136,
		68,
		34,
		17,
		136,
		68,
		34,
		17
	],
	darkUp: [
		51,
		102,
		204,
		153,
		51,
		102,
		204,
		153
	],
	lightUp: [
		17,
		34,
		68,
		136,
		17,
		34,
		68,
		136
	],
	darkTrellis: [
		255,
		102,
		255,
		153,
		255,
		102,
		255,
		153
	],
	lightTrellis: [
		153,
		102,
		102,
		153,
		153,
		102,
		102,
		153
	]
};
function Va(e, t, r, i) {
	let a = e.getTransform(), o = Math.max(1, Math.round(Math.hypot(a.a, a.b))), s = Math.max(1, Math.round(Math.hypot(a.c, a.d))), c = `${t}|${r}|${i}|${o}|${s}`;
	if (za.has(c)) return za.get(c);
	let l = n(Ba, t);
	if (!l) return za.set(c, null), null;
	let u = l.length, d = _(u, u);
	if (!d) return za.set(c, null), null;
	let f = d.getContext("2d");
	if (!f) return za.set(c, null), null;
	f.fillStyle = b(i), f.fillRect(0, 0, u, u), f.fillStyle = b(r);
	for (let e = 0; e < u; e++) {
		let t = l[e];
		for (let n = 0; n < u; n++) t & 1 << u - 1 - n && f.fillRect(n, e, 1, 1);
	}
	let p = e.createPattern(d, "repeat");
	if (p && typeof DOMMatrix < "u" && (o >= 2 || s >= 2)) {
		let e = new DOMMatrix();
		e.scaleSelf(1 / o, 1 / s), p.setTransform(e);
	}
	return za.set(c, p), p;
}
function Ha(e, t, n, r, i, a) {
	if (t.gradient && t.gradient.stops.length > 0) return e.fillStyle = Ua(e, t.gradient, n, r, i, a), e.fillRect(n, r, i, a), !0;
	let o = t.patternType;
	if (!o || o === "none") return !1;
	let s = t.fgColor ?? "000000", c = t.bgColor ?? "FFFFFF";
	if (o === "solid") return e.fillStyle = b(s), e.fillRect(n, r, i, a), !0;
	let l = Va(e, o, s, c);
	if (l) e.fillStyle = l;
	else {
		let t = Ra(o);
		e.fillStyle = t >= 1 ? b(s) : Ka(s, c, t);
	}
	return e.fillRect(n, r, i, a), !0;
}
function Ua(e, t, n, r, i, a) {
	let o;
	if (t.gradientType === "path") {
		let s = n + i * (t.left + (1 - t.right - t.left) / 2), c = r + a * (t.top + (1 - t.bottom - t.top) / 2), l = Math.hypot(Math.max(s - n, n + i - s), Math.max(c - r, r + a - c));
		o = e.createRadialGradient(s, c, 0, s, c, l);
	} else {
		let s = t.degree * Math.PI / 180, c = n + i / 2, l = r + a / 2, u = (Math.abs(Math.cos(s)) * i + Math.abs(Math.sin(s)) * a) / 2;
		o = e.createLinearGradient(c - Math.cos(s) * u, l - Math.sin(s) * u, c + Math.cos(s) * u, l + Math.sin(s) * u);
	}
	for (let e of t.stops) {
		let t = Math.min(1, Math.max(0, e.position));
		o.addColorStop(t, b(e.color));
	}
	return o;
}
var Wa = xi;
function Ga(e, t, n, r, i) {
	let a = Math.max(4, Math.min(8, Math.min(r, i) * .18));
	e.save(), e.fillStyle = "#D40000", e.beginPath(), e.moveTo(t + r - a, n), e.lineTo(t + r, n), e.lineTo(t + r, n + a), e.closePath(), e.fill(), e.restore();
}
function Ka(e, t, n) {
	let r = e.replace("#", ""), i = t.replace("#", ""), a = parseInt(r.slice(0, 2), 16), o = parseInt(r.slice(2, 4), 16), s = parseInt(r.slice(4, 6), 16), c = parseInt(i.slice(0, 2), 16), l = parseInt(i.slice(2, 4), 16), u = parseInt(i.slice(4, 6), 16), d = Math.min(1, Math.max(0, n));
	return `rgb(${Math.round(a * d + c * (1 - d))},${Math.round(o * d + l * (1 - d))},${Math.round(s * d + u * (1 - d))})`;
}
function $(e, t, n = 1) {
	return Math.round(e * D * n * t);
}
function qa(e, t) {
	let n = {
		family: e.name,
		weight: e.bold ? 700 : 400
	};
	if (!ot(t)) return n;
	let r = Ja(e, t);
	if (!r) return n;
	let i = v(r, { source: "office-mac" }), a = new Set(i.map((e) => e.weight)), o = a.size === 1 ? i[0].weight : 400, s = !i.length || a.has(n.weight) ? n.weight : o, c = i.filter((e) => e.weight === s), l = c.filter((t) => t.style === (e.italic ? "italic" : "normal")), u = l.length ? l : c, d = new Set(u.flatMap((e) => e.aliases).filter((e) => /-(?:Regular|Bold|Italic|BoldItalic|Light|Medium)$/i.test(e)).map((e) => e.replace(/-(?:Regular|Bold|Italic|BoldItalic|Light|Medium)$/i, ""))), f = new Set(u.map((e) => e.family)), p = d.size === 1 ? [...d][0] : f.size === 1 ? [...f][0] : void 0;
	return {
		family: r,
		weight: s,
		...e.bold && (s === 300 || s === 400) && i.length ? { syntheticBold: !0 } : {},
		...p && p.toLocaleLowerCase("en-US") !== r.toLocaleLowerCase("en-US") ? { fallbackAlias: p } : {}
	};
}
function Ja(e, t) {
	return e.scheme === "major" ? t?.themeJapaneseMajorFont : e.scheme === "minor" ? t?.themeJapaneseMinorFont : void 0;
}
function Ya(e, t) {
	let n = t?.japanese && Ja(e, t);
	if (!t || !n) return {
		family: e.name,
		weight: e.bold ? 700 : 400
	};
	let r = `${e.scheme}:${+!!e.bold}:${+!!e.italic}`, i = t.cache.get(r);
	return i || (i = qa(e, t), t.cache.size < 8 && t.cache.set(r, i)), i;
}
function Xa(e, t, n, r, i, a = 1) {
	if (e.fillText(t, n, r), !i.bold) return;
	let o = ga.get(e);
	!o?.japanese || !Ya(i, o).syntheticBold || (e.save(), e.strokeStyle = e.fillStyle, e.lineWidth = Math.max(1, Math.round(i.size * D * a)) / 35, e.setLineDash([]), e.lineJoin = "miter", e.miterLimit = 10, e.strokeText(t, n, r), e.restore());
}
function Za(e, t, n = 1, r, i = "") {
	let a = t.italic ? "italic " : "", o = Math.max(1, Math.round(t.size * D * n)), s = Ya(t, ga.get(e));
	return `${a}${s.weight === 400 ? "" : `${s.weight} `}${o}px ${Da(s.family, r, i, Ca(e, s.family, t.bold, t.italic), fa.get(e) === !0, s.fallbackAlias, xa(e, s.family))}`;
}
function Qa(e, t, n, r, i, a, o, s, c, l, u) {
	if (t.length === 0) return;
	let d = n?.fontId ?? 0, f = a.fonts[d] ?? a.fonts[0];
	if (!f) return;
	let p = n?.alignment ?? "left";
	e.save(), e.font = Za(e, f, c, u, t.map((e) => e.text).join("")), e.textBaseline = "top", e.textAlign = "left", e.fillStyle = l;
	let m = s + Math.round(2 * c);
	if (p === "noControl") {
		let n = o;
		for (let r of t) Xa(e, r.text, n, m, f, c), n += e.measureText(r.text).width;
		e.restore();
		return;
	}
	let h = an(t, r, o, p, (t) => $a(e, t, i));
	for (let t of h) {
		let n = e.measureText(t.text).width, r = [...t.text];
		if (t.spread === "distribute" && r.length > 1 && n < t.width) {
			let i = (t.width - n) / (r.length - 1);
			try {
				e.letterSpacing = `${i}px`;
			} catch {}
			Xa(e, t.text, t.x, m, f, c);
			try {
				e.letterSpacing = "0px";
			} catch {}
		} else t.spread === "center" ? Xa(e, t.text, t.x + (t.width - n) / 2, m, f, c) : Xa(e, t.text, t.x, m, f, c);
	}
	e.restore();
}
function $a(e, t, n) {
	let r = e.font;
	e.font = n;
	let i = e.measureText(t).width;
	return e.font = r, i;
}
function eo(e, t, n, r, i, a, o = 1) {
	if (e.save(), e.strokeStyle = i, e.lineWidth = .5, e.beginPath(), a) {
		let i = r - 1, a = r + 1, s = i + g(i, .5, o), c = a + g(a, .5, o);
		e.moveTo(t, s), e.lineTo(n, s), e.moveTo(t, c), e.lineTo(n, c);
	} else {
		let i = r + g(r, .5, o);
		e.moveTo(t, i), e.lineTo(n, i);
	}
	e.stroke(), e.restore();
}
function to(e, t) {
	let n = t.font;
	return n ? {
		bold: n.bold,
		italic: n.italic,
		underline: n.underline,
		underlineStyle: n.underlineStyle,
		strike: n.strike,
		size: n.size ?? e.size,
		color: n.color ?? null,
		name: n.name ?? e.name,
		vertAlign: n.vertAlign
	} : e;
}
function no(e, t) {
	let n = e.cellXfs[t] ?? e.cellXfs[0] ?? {
		fontId: 0,
		fillId: 0,
		borderId: 0,
		numFmtId: 0,
		alignH: null,
		alignV: null,
		wrapText: !1
	};
	return {
		font: e.fonts[n.fontId] ?? {
			bold: !1,
			italic: !1,
			underline: !1,
			strike: !1,
			size: Oa,
			color: null,
			name: null
		},
		fill: e.fills[n.fillId] ?? {
			patternType: "none",
			fgColor: null,
			bgColor: null
		},
		border: e.borders[n.borderId] ?? {
			left: null,
			right: null,
			top: null,
			bottom: null
		},
		xf: n
	};
}
function ro(e, t) {
	let n = e.colStyleRanges ?? [];
	for (let e = n.length - 1; e >= 0; e--) {
		let r = n[e];
		if (t >= r.min && t <= r.max) return r.styleIndex;
	}
	return 0;
}
function io(e, t, n) {
	return t?.styleIndex ?? ro(e, n);
}
function ao(e, t, n, r) {
	let i = [];
	for (let a of t.split("\n")) i.push(...oo(e, a, n, r));
	return i;
}
function oo(e, t, n, r = (t) => e.measureText(t).width) {
	return jt(t, n, r);
}
function so(e, t, n, r, i, a) {
	return Mt(e, t, n, i, to, (t, n) => {
		e.font = Za(e, fo(t), r, a, n);
	}, Oa);
}
function co(e) {
	return e === "number" ? "right" : e === "bool" ? "center" : "left";
}
function lo(e, t, n) {
	return e === "middle" ? {
		underline: t + Math.round(n * .55),
		strike: t
	} : e === "bottom" ? {
		underline: t + 1,
		strike: t - Math.round(n * .35)
	} : {
		underline: t + n + 1,
		strike: t + Math.round(n * .5)
	};
}
function uo(e) {
	let { alignV: t, cy: n, cellH: r, paddingY: i } = e;
	return t === "top" ? {
		baseline: "top",
		textY: n + i
	} : t === "center" ? {
		baseline: "middle",
		textY: n + r / 2
	} : {
		baseline: "bottom",
		textY: n + r - i
	};
}
function fo(e) {
	return e.vertAlign === "superscript" || e.vertAlign === "subscript" ? {
		...e,
		size: e.size * .65
	} : e;
}
function po(e, t, n, r, i, a, o, s, c) {
	e.textAlign = "left", e.textBaseline = i;
	let l = s.needBidi ? bi(t, s.baseRtl ?? !1) : null, u = e, d = n;
	for (let n = 0; n < t.length; n++) {
		let f = l ? l.order[n] : n;
		if (l) try {
			u.direction = l.rtl[f] ? "rtl" : "ltr";
		} catch {}
		let p = t[f], m = fo(p.font);
		e.font = Za(e, m, a, c, p.text);
		let h = s.fontColor ?? p.font.color;
		e.fillStyle = h ? b(h) : "#000000";
		let _ = $(p.font.size, a), v = 0;
		p.font.vertAlign === "superscript" ? v = -Math.round(_ * .35) : p.font.vertAlign === "subscript" && (v = Math.round(_ * .1)), Xa(e, p.text, d, r + v, m, a);
		let y = $(m.size, a);
		if (p.font.underline || p.font.strike) {
			let t = lo(i, r, y);
			if (p.font.underline) {
				let n = h ? b(h) : "#000000", r = p.font.underlineStyle === "double" || p.font.underlineStyle === "doubleAccounting";
				eo(e, d, d + p.width, t.underline + v, n, r, o);
			}
			if (p.font.strike) {
				let n = t.strike + v, r = n + g(n, .5, o);
				e.save(), e.strokeStyle = h ? b(h) : "#000000", e.lineWidth = .5, e.beginPath(), e.moveTo(d, r), e.lineTo(d + p.width, r), e.stroke(), e.restore();
			}
		}
		d += p.width;
	}
	if (l) try {
		u.direction = "ltr";
	} catch {}
}
function mo(e, t, n, r, i, a, o, s, c) {
	let { alignH: l, cx: u, cellW: d, leftPad: f, paddingX: p } = n, m = t.reduce((e, t) => e + t.width, 0), h;
	h = l === "right" ? u + d - p - m : l === "center" ? u + d / 2 - m / 2 : u + f;
	let { needBidi: g, baseRtl: _ } = yi(a.readingOrder, t.map((e) => e.text).join(""));
	po(e, t, h, o, s, r, i, {
		fontColor: a.fontColor,
		needBidi: g,
		baseRtl: _
	}, c);
}
function ho(e, t, n, r, i, a, o, s, c, l) {
	mo(e, t.map((t) => {
		let r = to(n, t);
		return e.font = Za(e, fo(r), i, l, t.text), {
			text: t.text,
			font: r,
			width: e.measureText(t.text).width
		};
	}), r, i, a, o, s, c, l);
}
function go(e, t, n, r, i, a, o = {}, s) {
	let { baseline: c, textY: l } = uo(r);
	ho(e, t, n, r, i, a, o, l, c, s);
}
function _o(e, t, n, r, i, a, o = {}, s) {
	let { alignV: c, cy: l, cellH: u, paddingY: d } = r, f = Bo(t, n, i), p = f.reduce((e, t) => e + t.heightPx, 0), m;
	m = c === "top" ? l + d : c === "center" ? l + (u - p) / 2 : l + u - p - d;
	for (let t of f) t.runs.length > 0 && ho(e, t.runs, n, r, i, a, o, m, "top", s), m += t.heightPx;
}
function vo(e, t, n, r, i, a, o, s) {
	let c = Math.max(0, t) + 3, l = Math.min(t + r, e.canvas.width) - 3 - c;
	if (l <= 0) return;
	let u = e.measureText("#").width, d = u > 0 ? Math.max(1, Math.floor(l / u)) : 1;
	e.textAlign = "left";
	let { baseline: f, textY: p } = uo({
		alignH: "left",
		alignV: a,
		cx: t,
		cy: n,
		cellW: r,
		cellH: i,
		leftPad: 3,
		paddingX: 3,
		paddingY: 2
	});
	e.textBaseline = f, Xa(e, "#".repeat(d), c, p, o, s);
}
function yo(e, t, n, r, i, a, o = {}, s) {
	t.some((e) => e.text.includes("\n")) ? _o(e, t, n, r, i, a, o, s) : go(e, t, n, r, i, a, o, s);
}
function bo(e, t, n, r, i, a) {
	let { alignV: o, cy: s, cellH: c, leftPad: l, paddingX: u, paddingY: d } = i, f = ao(e, t, i.cellW - l - u);
	if (f.length === 1) {
		let { baseline: t, textY: o } = uo(i);
		e.textBaseline = t, Xa(e, f[0], n, o, r, a);
		return;
	}
	let p = $(r.size, a, 1.2), m = f.length * p, h;
	h = o === "top" ? s + d : o === "center" ? s + (c - m) / 2 : s + c - m - d, e.textBaseline = "top";
	for (let t = 0; t < f.length; t++) Xa(e, f[t], n, h + t * p, r, a);
}
function xo(e, t, n, r, i, a, o = {}, s) {
	let { alignH: c, alignV: l, cx: u, cy: d, cellW: f, cellH: p, leftPad: m, paddingX: h, paddingY: g } = r, _ = so(e, t, n, i, f - m - h, s);
	if (_.length === 1) {
		let { baseline: t, textY: n } = uo(r);
		mo(e, _[0].segments, r, i, a, o, n, t, s);
		return;
	}
	let v = _.reduce((e, t) => e + $(t.maxFontSize, i, 1.2), 0), y;
	y = l === "top" ? d + g : l === "center" ? d + (p - v) / 2 : d + p - v - g;
	let b = t.map((e) => e.text).join("").split("\n").map((e) => yi(o.readingOrder, e));
	for (let t of _) {
		let n = t.segments.reduce((e, t) => e + t.width, 0), r;
		r = c === "right" ? u + f - h - n : c === "center" ? u + f / 2 - n / 2 : u + m;
		let { needBidi: l, baseRtl: d } = b[t.para];
		po(e, t.segments, r, y, "top", i, a, {
			fontColor: o.fontColor,
			needBidi: l,
			baseRtl: d
		}, s), y += $(t.maxFontSize, i, 1.2);
	}
}
function So(e) {
	let t = "";
	for (; e > 0;) {
		let n = (e - 1) % 26;
		t = String.fromCharCode(65 + n) + t, e = Math.floor((e - 1) / 26);
	}
	return t;
}
var Co = [
	"#FF0000",
	"#FFFF00",
	"#00B050"
], wo = [
	"#FF0000",
	"#FF6600",
	"#FFFF00",
	"#00B050"
], To = [
	"#FF0000",
	"#FF6600",
	"#FFFF00",
	"#92D050",
	"#00B050"
];
function Eo(e, t, n, r, i, a) {
	if (t === "NoIcons") return;
	let o = t || "3TrafficLights1", s = parseInt(o[0]) || 3, c = s === 5 ? To : s === 4 ? wo : Co, l = c[Math.max(0, Math.min(n, c.length - 1))];
	if (e.save(), e.fillStyle = l, o.includes("Arrow")) {
		let t = a / 2;
		e.beginPath(), n === s - 1 ? (e.moveTo(r + t, i), e.lineTo(r + a, i + a), e.lineTo(r, i + a)) : n === 0 ? (e.moveTo(r, i), e.lineTo(r + a, i), e.lineTo(r + t, i + a)) : (e.moveTo(r, i + a * .3), e.lineTo(r + a, i + t), e.lineTo(r, i + a * .7)), e.closePath(), e.fill();
	} else o === "3Signs" && n < 2 ? (e.beginPath(), n === 0 ? (e.moveTo(r + a / 2, i), e.lineTo(r + a, i + a / 2), e.lineTo(r + a / 2, i + a), e.lineTo(r, i + a / 2)) : (e.moveTo(r + a / 2, i), e.lineTo(r + a, i + a), e.lineTo(r, i + a)), e.closePath(), e.fill()) : o.includes("Flag") ? (e.beginPath(), e.moveTo(r, i), e.lineTo(r + a, i), e.lineTo(r, i + a), e.closePath(), e.fill()) : (e.beginPath(), e.arc(r + a / 2, i + a / 2, a / 2, 0, Math.PI * 2), e.fill());
	e.restore();
}
function Do(e, t, n, r, i) {
	let a = Math.max(6, Math.round(Math.min(r, i) * .45)), o = t + r - a - 1, s = n + i - a - 1;
	e.save(), e.fillStyle = "#D0D0D0", e.fillRect(o, s, a, a), e.fillStyle = "#444444";
	let c = a * .55, l = o + (a - c) / 2, u = s + (a - c * .5) / 2;
	e.beginPath(), e.moveTo(l, u), e.lineTo(l + c, u), e.lineTo(l + c / 2, u + c * .5), e.closePath(), e.fill(), e.restore();
}
function Oo(e) {
	let t = /* @__PURE__ */ new Map(), n = Mo(e, "worksheet-sparkline-index", "index-sparkline-coordinates");
	for (let r of e.sparklineGroups ?? []) {
		let e = Infinity, i = -Infinity;
		if (r.minAxisType === "group" || r.maxAxisType === "group") {
			for (let t of r.sparklines) for (let n of t.values) typeof n == "number" && (n < e && (e = n), n > i && (i = n));
			(!isFinite(e) || !isFinite(i)) && (e = 0, i = 1);
		}
		for (let a of r.sparklines) {
			let o = a.values.filter((e) => typeof e == "number"), s = o.length ? Math.min(...o) : 0, c = o.length ? Math.max(...o) : 1, l = r.minAxisType === "custom" && typeof r.manualMin == "number" ? r.manualMin : r.minAxisType === "group" ? e : s, u = r.maxAxisType === "custom" && typeof r.manualMax == "number" ? r.manualMax : r.maxAxisType === "group" ? i : c;
			Vt(t, `${a.row}:${a.col}`, {
				kind: r.kind,
				values: a.values,
				min: l,
				max: u,
				displayEmptyCellsAs: r.displayEmptyCellsAs === "zero" || r.displayEmptyCellsAs === "span" ? r.displayEmptyCellsAs : "gap",
				displayXAxis: r.displayXAxis,
				lineWeight: r.lineWeight,
				markers: r.markers,
				high: r.high,
				low: r.low,
				first: r.first,
				last: r.last,
				negative: r.negative,
				colorSeries: r.colorSeries,
				colorNegative: r.colorNegative,
				colorAxis: r.colorAxis,
				colorMarkers: r.colorMarkers,
				colorFirst: r.colorFirst,
				colorLast: r.colorLast,
				colorHigh: r.colorHigh,
				colorLow: r.colorLow
			}, n);
		}
	}
	return t;
}
function ko(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, _) {
	if (m <= 0 || h <= 0) return;
	let { styles: v, cellMap: y, mergeAnchorMap: x, mergeSkipSet: S, cfContext: C, cs: w, dpr: T } = t, E = i.length, D = a.length, O = new Set(s), k = new Set(o), A = (e, n) => t.rtl ? ka(e, n, t.canvasW) : e, j = [], M = -c;
	for (let e = 0; e < E; e++) j.push(M), M += i[e];
	let N = [], P = -l;
	for (let e = 0; e < D; e++) N.push(P), P += a[e];
	e.save(), e.beginPath(), e.rect(A(f, m), p, m, h), e.clip();
	let F = [], ee = [], te = [];
	for (let i of t.worksheet.mergeCells ?? []) {
		let a = i.top, f = i.left;
		if (O.has(a) && k.has(f) || !s.some((e) => e >= i.top && e <= i.bottom) || !o.some((e) => e >= i.left && e <= i.right)) continue;
		let p = t.mergeAnchorMap.get(`${a}:${f}`);
		if (!p) continue;
		let m = u - c + t.colAxis.offsetOf(f) - t.colAxis.offsetOf(r), h = d - l + t.rowAxis.offsetOf(a) - t.rowAxis.offsetOf(n), g = p.totalW, y = p.totalH;
		m = A(m, g);
		let x = `${a}:${f}`, S = t.cellMap.get(x), { font: E, fill: D, border: j, xf: M } = no(v, io(t.worksheet, S, f)), N = _i(S, a, f, C, v.dxfs ?? []), P = N.fill ?? D, F = t.structuredStyleMap.get(x);
		if (!Ha(e, P, m, h, g, y) && F?.fill && Ha(e, F.fill, m, h, g, y), N.dataBar && N.dataBar.ratio > 0) {
			let t = Math.max(0, (g - 4) * N.dataBar.ratio);
			La(e, N.dataBar.color, m + 2, h + 2, t, y - 4, N.dataBar.gradient);
		}
		let te = bs(ys(j, a, f, p.right, p.bottom, t.cellMap, v), N.border);
		if (ee.push(() => Ss(e, te, m, h, g, y, T)), !S) continue;
		let I = cn(S, v, N.numFmt, t.worksheet.date1904), L = I.text;
		if (!L || L === "0" && t.worksheet.showZeros === !1) continue;
		let R = zo(E, N, F);
		e.font = Za(e, R, w, _, L);
		let z = t.hyperlinkMap.get(x), ne = Lo(F, M), B = z ? "#0563C1" : N.fontColor ?? I.color ?? ne ?? E.color;
		e.fillStyle = B ? b(B) : "#000000";
		let V = M.alignH ?? co(S.value.type), H = M.alignV ?? "bottom", U = M.indent ? Math.round(M.indent * 3 * t.mdw) : 0, W = 3 + (V === "left" || !M.alignH ? U : 0);
		if (e.save(), e.beginPath(), e.rect(m, h, g, y), e.clip(), I.fill) {
			vo(e, m, h, g, y, H, R, w), e.restore();
			continue;
		}
		let G;
		V === "right" ? (G = m + g - 3, e.textAlign = "right") : V === "center" ? (G = m + g / 2, e.textAlign = "center") : (G = m + W, e.textAlign = "left");
		let re = Fo(F, M), K = S.value.type === "text" ? S.value.runs : void 0, ie = K && Ro(K, re), ae = re == null ? R : {
			...R,
			color: re
		}, oe = ie && ie.length > 0;
		if (M.wrapText && oe) xo(e, ie, ae, {
			alignH: V,
			alignV: H,
			cx: m,
			cy: h,
			cellW: g,
			cellH: y,
			leftPad: W,
			paddingX: 3,
			paddingY: 2
		}, w, T, {
			fontColor: N.fontColor,
			readingOrder: M.readingOrder
		}, _);
		else if (M.wrapText) bo(e, L, G, R, {
			alignH: V,
			alignV: H,
			cx: m,
			cy: h,
			cellW: g,
			cellH: y,
			leftPad: W,
			paddingX: 3,
			paddingY: 2
		}, w);
		else if (oe) yo(e, ie, ae, {
			alignH: V,
			alignV: H,
			cx: m,
			cy: h,
			cellW: g,
			cellH: y,
			leftPad: W,
			paddingX: 3,
			paddingY: 2
		}, w, T, {
			fontColor: N.fontColor,
			readingOrder: M.readingOrder
		}, _);
		else {
			let { baseline: t, textY: n } = uo({
				alignH: V,
				alignV: H,
				cx: m,
				cy: h,
				cellW: g,
				cellH: y,
				leftPad: W,
				paddingX: 3,
				paddingY: 2
			});
			e.textBaseline = t, Xa(e, L, G, n, R, w);
		}
		e.restore();
	}
	for (let n = 0; n < D; n++) {
		let r = s[n], c = d + N[n], l = a[n];
		if ((c + l <= p || c >= p + h) && !o.some((e) => {
			let t = x.get(`${r}:${e}`);
			return t != null && c + t.totalH > p && c < p + h;
		})) continue;
		let D = /* @__PURE__ */ new Set(), O = /* @__PURE__ */ new Set(), k = -1, M = (e) => {
			if (k >= 0 && e - k >= 2) {
				for (let t = k; t < e - 1; t++) D.add(t);
				for (let t = k + 1; t < e; t++) O.add(t);
			}
			k = -1;
		};
		for (let e = 0; e <= E; e++) {
			let n = !1, i = !1;
			if (e < E) {
				let a = `${r}:${o[e]}`;
				if (!S.has(a) && !x.has(a)) {
					let r = y.get(a);
					n = no(v, io(t.worksheet, r, o[e])).xf.alignH === "centerContinuous", i = !!(r && r.value && r.value.type !== "empty");
				}
			}
			n ? i && k >= 0 && e > k ? (M(e), k = e) : k < 0 && (k = e) : M(e);
		}
		for (let a = 0; a < E; a++) {
			let s = o[a], d = u + j[a], k = i[a], M = `${r}:${s}`;
			if (S.has(M)) continue;
			let N = x.get(M), P = N ? N.totalW : k, I = N ? N.totalH : l, L = d + P <= f || d >= f + m;
			if (c + I <= p || c >= p + h || L && !t.overflowTextAnchors.has(M)) continue;
			let R = A(d, P), z = y.get(M), { font: ne, fill: B, border: V, xf: H } = no(v, io(t.worksheet, z, s)), U = _i(z, r, s, C, v.dxfs ?? []), W = Ha(e, U.fill ?? B, R, c, P, I), G = t.structuredStyleMap.get(M);
			if (!W && G?.fill && (W = Ha(e, G.fill, R, c, P, I)), t.commentCells.has(M) && Ga(e, R, c, P, I), U.dataBar && U.dataBar.ratio > 0) {
				let t = Math.max(0, (P - 4) * U.dataBar.ratio);
				La(e, U.dataBar.color, R + 2, c + 2, t, I - 4, U.dataBar.gradient);
			}
			let re = t.sparklineMap.get(M);
			if (re && Ze(e, {
				x: R,
				y: c,
				w: P,
				h: I
			}, re), t.worksheet.isChartSheet !== !0 && t.worksheet.showGridlines !== !1 && !W) {
				if (e.strokeStyle = "#d0d0d0", e.lineWidth = .5, e.beginPath(), !D.has(a)) {
					let t = R + P + g(R + P, .5, T);
					e.moveTo(t, c), e.lineTo(t, c + I);
				}
				let t = c + I + g(c + I, .5, T);
				if (e.moveTo(R, t), e.lineTo(R + P, t), n === 0) {
					let t = c + g(c, .5, T);
					e.moveTo(R, t), e.lineTo(R + P, t);
				}
				if (a === 0) {
					let t = R + g(R, .5, T);
					e.moveTo(t, c), e.lineTo(t, c + I);
				}
				e.stroke();
			}
			let K = bs(N ? ys(V, r, s, N.right, N.bottom, y, v) : V, U.border);
			G && (K = {
				...K,
				top: K.top?.style ? K.top : G.top ?? K.top,
				bottom: K.bottom?.style ? K.bottom : G.bottom ?? K.bottom,
				left: K.left?.style ? K.left : G.left ?? K.left,
				right: K.right?.style ? K.right : G.right ?? K.right
			}), (D.has(a) || O.has(a)) && (K = {
				...K,
				left: O.has(a) ? null : K.left,
				right: D.has(a) ? null : K.right
			});
			let ie = y.get(`${r - 1}:${s}`), ae = ie ? no(v, io(t.worksheet, ie, s)).border.bottom : null;
			if (ae?.style && (n === 0 || K.top?.style) && (K = {
				...K,
				top: Es(K.top, ae)
			}), !O.has(a)) {
				let e = y.get(`${r}:${s - 1}`), n = e ? no(v, io(t.worksheet, e, s - 1)).border.right : null;
				n?.style && (a === 0 || K.left?.style) && (K = {
					...K,
					left: Es(K.left, n)
				});
			}
			let oe = t.autoFilterCells.has(M), q = () => {
				oe && Do(e, R, c, k, I);
			};
			if (N) {
				let t = K;
				ee.push(() => Ss(e, t, R, c, P, I, T)), q();
			} else {
				let t = K;
				te.push(() => {
					Ss(e, t, R, c, P, I, T), q();
				});
			}
			if (!z) continue;
			let se = cn(z, v, U.numFmt, t.worksheet.date1904), J = se.text;
			!J || J === "0" && t.worksheet.showZeros === !1 || F.push(() => {
				let n = zo(ne, U, G);
				e.font = Za(e, n, w, _, J);
				let l = t.hyperlinkMap.get(M), u = Lo(G, H), d = l ? "#0563C1" : U.fontColor ?? se.color ?? u ?? ne.color;
				e.fillStyle = d ? b(d) : "#000000";
				let f = z.value.type === "number", p = H.alignH ?? co(z.value.type), m = H.alignV ?? "bottom", h = H.indent ? Math.round(H.indent * 3 * t.mdw) : 0, C = U.iconSet ? Math.max(8, Math.round(Math.min(P, I) * .55)) : 0, D = C > 0 ? C + 4 : 0, O = 3 + (p === "left" || !H.alignH ? h : 0) + D, k = P, A = a;
				if (p === "centerContinuous" && !N) for (let e = a + 1; e < E; e++) {
					let n = `${r}:${o[e]}`;
					if (S.has(n) || x.has(n)) break;
					let a = y.get(n);
					if (a && a.value.type !== "empty" || no(v, io(t.worksheet, a, o[e])).xf.alignH !== "centerContinuous") break;
					k += i[e], A = e;
				}
				let j = t.rtl ? R - (k - P) : R, F = p === "centerContinuous" ? j : R, ee = p === "centerContinuous" ? k : P, te = J.includes("\n");
				if (!N && !H.wrapText && !H.textRotation && !f && !te) {
					let n = e.measureText(J).width, s = p === "centerContinuous", c = s ? n + 6 : n + O + 3, l = s ? k : P;
					if (c > l) {
						let e = c - l, n = 0, u = 0;
						p === "right" ? u = e : p === "center" || s ? (u = e / 2, n = e / 2) : n = e;
						let d = t.rtl ? -1 : 1, f = t.rtl ? a - 1 : A + 1, m = t.rtl ? 1 : -1, h = t.rtl ? A + 1 : a - 1;
						if (n > 0) {
							let e = n;
							for (let t = f; t >= 0 && t < E && e > 0; t += d) {
								let n = `${r}:${o[t]}`;
								if (S.has(n) || x.has(n)) break;
								let a = y.get(n);
								if (a && a.value.type !== "empty") break;
								ee += i[t], e -= i[t];
							}
						}
						if (u > 0) {
							let e = u;
							for (let t = h; t >= 0 && t < E && e > 0; t += m) {
								let n = `${r}:${o[t]}`;
								if (S.has(n) || x.has(n)) break;
								let a = y.get(n);
								if (a && a.value.type !== "empty") break;
								F -= i[t], ee += i[t], e -= i[t];
							}
						}
					}
				}
				let L = J, B = 0;
				if (p === "fill" && !f && J.length > 0) {
					let t = Math.max(1, P - 6), n = e.measureText(J).width;
					if (n > 0 && n < t) {
						let e = Math.max(1, Math.floor(t / n));
						L = J.repeat(e);
					}
				}
				if (p === "distributed" || p === "justify" && !H.wrapText && !te) {
					let t = Math.max(1, P - 6), n = e.measureText(L).width, r = Math.max(1, [...L].length - 1);
					n < t && (B = Math.max(0, (t - n) / r));
				}
				let V, W;
				p === "right" ? (V = R + P - 3, W = "right") : p === "center" ? (V = R + P / 2, W = "center") : p === "centerContinuous" ? (V = j + k / 2, W = "center") : p === "distributed" || p === "justify" && !H.wrapText && !te ? (V = R + 3, W = "left") : (V = R + O, W = "left");
				let re = H.textRotation ?? 0, K = re === 255, ie = re > 0 && re !== 255;
				if (U.iconSet && C > 0 && (e.save(), e.beginPath(), e.rect(R, c, P, I), e.clip(), Eo(e, U.iconSet.name, U.iconSet.index, R + 2, c + (I - C) / 2, C), e.restore()), e.save(), e.beginPath(), e.rect(F, c, ee, I), e.clip(), se.fill) {
					vo(e, R, c, P, I, m, n, w), e.restore();
					return;
				}
				if (K) {
					let t = $(ne.size, w, 1.1), r = [...J].length * t, i = m === "top" ? c + 2 : m === "center" ? c + (I - r) / 2 : c + I - r - 2;
					e.textAlign = "center", e.textBaseline = "top";
					let a = (t, r, i) => Xa(e, t, r, i, n, w);
					for (let n of J) {
						let r = n.codePointAt(0) ?? 0, o = Ce(r) && ue(e, r);
						Ci(e, n, R + P / 2, i, t, o, a), i += t;
					}
					e.restore();
					return;
				}
				if (ie) {
					let t = re <= 90 ? -(re * Math.PI / 180) : (re - 90) * Math.PI / 180;
					e.translate(R + P / 2, c + I / 2), e.rotate(t), e.textAlign = "center", e.textBaseline = "middle", Xa(e, J, 0, 0, n, w), e.restore();
					return;
				}
				if (H.shrinkToFit) {
					let t = e.measureText(J).width, n = P - O - 3;
					if (t > n && t > 0) {
						let r = n / t, i = p === "right" ? R + P - 3 : p === "center" ? R + P / 2 : R + O;
						e.transform(r, 0, 0, 1, i * (1 - r), 0);
					}
				}
				if (e.textAlign = W, B > 0) try {
					e.letterSpacing = `${B}px`;
				} catch {}
				try {
					e.direction = vi(H.readingOrder, J) ? "rtl" : "ltr";
				} catch {}
				let ae = Fo(G, H), oe = z.value.type === "text" ? z.value.runs : void 0, q = oe && Ro(oe, ae), ce = ae == null ? n : {
					...n,
					color: ae
				}, le = q && q.length > 0;
				if (H.wrapText && le) xo(e, q, ce, {
					alignH: p,
					alignV: m,
					cx: R,
					cy: c,
					cellW: P,
					cellH: I,
					leftPad: O,
					paddingX: 3,
					paddingY: 2
				}, w, T, {
					fontColor: U.fontColor,
					readingOrder: H.readingOrder
				}, _);
				else if (H.wrapText) bo(e, J, V, n, {
					alignH: p,
					alignV: m,
					cx: R,
					cy: c,
					cellW: P,
					cellH: I,
					leftPad: O,
					paddingX: 3,
					paddingY: 2
				}, w);
				else if (le) yo(e, q, ce, {
					alignH: p,
					alignV: m,
					cx: R,
					cy: c,
					cellW: P,
					cellH: I,
					leftPad: O,
					paddingX: 3,
					paddingY: 2
				}, w, T, {
					fontColor: U.fontColor,
					readingOrder: H.readingOrder
				}, _);
				else {
					let t = n.vertAlign, r = $(ne.size, w), i = 0;
					t === "superscript" ? i = -Math.round(r * .35) : t === "subscript" && (i = Math.round(r * .1));
					let a = t ? {
						...n,
						size: n.size * .65
					} : n;
					t && (e.font = Za(e, a, w, _, J));
					let o = null, s = () => o ??= e.measureText(J), u = () => {
						let e = Math.min(s().width, ee - O - 3);
						return {
							x: p === "right" ? R + P - 3 - e : p === "center" ? R + P / 2 - e / 2 : R + O,
							width: e
						};
					}, f = $(a.size, w);
					if (n.underline || l) {
						let { x: t, width: r } = u(), a = (m === "top" ? c + 2 + f + 1 : m === "center" ? c + I / 2 + Math.round(f * .55) : c + I - 2 + 1) + i, o = l ? "#0563C1" : d ? b(d) : "#000000", s = n.underlineStyle === "double" || n.underlineStyle === "doubleAccounting";
						eo(e, t, t + r, a, o, s, T);
					}
					if (n.strike) {
						let { x: t, width: n } = u(), r = (m === "top" ? c + 2 + Math.round(f * .5) : m === "center" ? c + I / 2 : c + I - 2 - Math.round(f * .35)) + i, a = r + g(r, .5, T);
						e.save(), e.strokeStyle = d ? b(d) : "#000000", e.lineWidth = .5, e.beginPath(), e.moveTo(t, a), e.lineTo(t + n, a), e.stroke(), e.restore();
					}
					if (J.includes("\n")) {
						let t = J.split("\n"), n = $(ne.size, w, 1.2), r = t.length * n, o;
						m === "top" ? (o = c + 2, e.textBaseline = "top") : m === "center" ? (o = c + (I - r) / 2, e.textBaseline = "top") : (o = c + I - r - 2, e.textBaseline = "top");
						for (let r = 0; r < t.length; r++) Xa(e, t[r], V, o + r * n + i, a, w);
					} else {
						let { baseline: t, textY: n } = uo({
							alignH: p,
							alignV: m,
							cx: R,
							cy: c,
							cellW: P,
							cellH: I,
							leftPad: O,
							paddingX: 3,
							paddingY: 2
						});
						e.textBaseline = t, Xa(e, L, V, n + i, a, w);
					}
				}
				let de = z.value.type === "text" ? z.value.phoneticRuns : void 0;
				if (z.showPhonetic && de && de.length > 0 && !J.includes("\n")) {
					let t = Za(e, n, w, _, J), r = $a(e, J, t), i;
					i = p === "right" ? R + P - 3 - r : p === "center" ? R + P / 2 - r / 2 : R + O;
					let a = d ? b(d) : "#000000";
					Qa(e, de, z.value.type === "text" ? z.value.phoneticPr : void 0, J, t, v, i, c, w, a, _);
				}
				e.restore(), J && t.onTextRun && t.onTextRun({
					sheetName: t.worksheet.name,
					cellRef: Si(r, s),
					text: J,
					x: R,
					y: c,
					width: P,
					height: I,
					row: r,
					col: s
				});
			});
		}
	}
	for (let e of te) e();
	for (let e of ee) e();
	for (let e of F) e();
	e.restore();
}
var Ao = /* @__PURE__ */ new WeakMap();
function jo(e) {
	Ao.delete(e);
}
function Mo(e, t, n) {
	return {
		resource: t,
		operation: n,
		limit: ke(e).maxCoordinateIndexEntries
	};
}
function No(e, t) {
	let n = ke(e).maxCoordinateIndexEntries, r = Ao.get(e);
	if (r && r.rowCount === e.rows.length && r.coordinateIndexLimit === n && (t === void 0 || r.styleDxfs === t.dxfs)) return r;
	r && Ao.delete(e);
	let i = Mo(e, "worksheet-cell-index", "index-worksheet-cells"), a = Ht(e.rows, i), o = /* @__PURE__ */ new Map();
	for (let t of e.rows) {
		let e = t.cells.filter((e) => e.value.type !== "empty").map((e) => e.col).sort((e, t) => e - t);
		e.length > 0 && o.set(t.index, e);
	}
	let s = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), l = Mo(e, "worksheet-merge-anchor-index", "index-merge-anchor-coordinates"), u = Mo(e, "worksheet-merge-skip-index", "expand-merged-cell-coordinates");
	for (let t of e.mergeCells ?? []) {
		Ut(c, `${t.top}:${t.left}`, l), Bt(t, u, 1);
		for (let e = t.top; e <= t.bottom; e++) for (let n = t.left; n <= t.right; n++) e === t.top && n === t.left || Ut(s, `${e}:${n}`, u);
	}
	let d = /* @__PURE__ */ new Set();
	if (e.autoFilter) {
		let t = e.autoFilter, n = Mo(e, "worksheet-auto-filter-index", "expand-auto-filter-coordinates");
		Bt({
			top: t.top,
			bottom: t.top,
			left: t.left,
			right: t.right
		}, n);
		for (let e = t.left; e <= t.right; e++) Ut(d, `${t.top}:${e}`, n);
	}
	let f = /* @__PURE__ */ new Map(), p = Mo(e, "worksheet-hyperlink-index", "index-hyperlink-coordinates");
	for (let t of e.hyperlinks ?? []) t.url && Vt(f, `${t.row}:${t.col}`, t.url, p);
	let m = /* @__PURE__ */ new Set(), h = Mo(e, "worksheet-comment-index", "index-comment-coordinates");
	for (let t of e.commentRefs ?? []) {
		let e = Wa(t);
		e && Ut(m, `${e.row}:${e.col}`, h);
	}
	let g = {
		rowCount: e.rows.length,
		coordinateIndexLimit: n,
		cellMap: a,
		nonEmptyColsByRow: o,
		cfContext: ai(e, a),
		mergeAnchorSet: c,
		mergeSkipSet: s,
		autoFilterCells: d,
		hyperlinkMap: f,
		commentCells: m,
		structuredStyleMap: nn(e, t?.dxfs),
		styleDxfs: t?.dxfs,
		sparklineMap: Oo(e)
	};
	return Ao.set(e, g), g;
}
var Po = /* @__PURE__ */ new WeakMap();
function Fo(e, t) {
	return t.ownFontColor || !e?.fontColorFromTable ? null : e.fontColorAuto ? Io : e.fontColor ?? null;
}
var Io = "#000000";
function Lo(e, t) {
	return t.ownFontColor ? null : e?.fontColorAuto ? Io : e?.fontColor ?? null;
}
function Ro(e, t) {
	return t == null ? e : e.map((e) => e.font?.normalColor ? {
		...e,
		font: {
			...e.font,
			color: t
		}
	} : e);
}
function zo(e, t, n) {
	let r = t.fontBold ?? (e.bold || !!n?.bold), i = t.fontItalic ?? (e.italic || !!n?.italic), a = t.fontUnderline ?? (e.underline || !!n?.underline), o = t.fontStrike ?? (e.strike || !!n?.strike);
	return r === e.bold && i === e.italic && a === e.underline && o === e.strike ? e : {
		...e,
		bold: r,
		italic: i,
		underline: a,
		strike: o
	};
}
function Bo(e, t, n) {
	let r = [[]];
	for (let t of e) {
		let e = t.text.split("\n");
		for (let n = 0; n < e.length; n++) n > 0 && r.push([]), e[n] !== "" && r[r.length - 1].push({
			...t,
			text: e[n]
		});
	}
	let i = t.size;
	return r.map((e) => {
		if (e.length === 0) return {
			runs: e,
			heightPx: $(i || Oa, n, 1.2)
		};
		let r = 0;
		for (let n of e) {
			let e = to(t, n);
			e.size > r && (r = e.size), i = e.size;
		}
		return {
			runs: e,
			heightPx: $(r, n, 1.2)
		};
	});
}
function Vo(e, t, n, r, i, a, o, s, c, l) {
	let u = i.alignH ?? co(t.value.type), d = i.indent ? Math.round(i.indent * 3 * o) : 0, f = s ? Math.max(8, Math.round(Math.min(a, c) * .55)) : 0, p = f > 0 ? f + 4 : 0, m = 3 + (u === "left" || !i.alignH ? d : 0) + p, h = Math.max(1, a - m - 3), g = t.value.type === "text" ? t.value.runs : void 0, _ = !!g?.length, v = i.textRotation ?? 0;
	if (e.font = Za(e, r, 1, l, n), v === 255) return [...n].length * $(r.size, 1, 1.1) + 4;
	if (v > 0) {
		let t = v <= 90 ? v * Math.PI / 180 : (v - 90) * Math.PI / 180, i = $(r.size, 1, 1.2), a = e.measureText(n.replace(/\n/g, " ")).width;
		return Math.abs(Math.sin(t)) * a + Math.abs(Math.cos(t)) * i + 4;
	}
	let y;
	if (i.wrapText && _) y = so(e, g, r, 1, h, l).map((e) => $(e.maxFontSize, 1, 1.2));
	else if (i.wrapText) {
		e.font = Za(e, r, 1, l, n);
		let t = $(r.size, 1, 1.2);
		y = ao(e, n, h).map(() => t);
	} else if (_) y = Bo(g, r, 1).map((e) => e.heightPx);
	else {
		let e = Math.max(1, n.split("\n").length), t = $(r.size, 1, 1.2);
		y = Array.from({ length: e }, () => t);
	}
	return y.reduce((e, t) => e + t, 0) + (y.length > 1 ? 4 : 2);
}
function Ho(e, t, n, r) {
	if (n.wrapText || (n.textRotation ?? 0) > 0) return !0;
	if (e.value.type === "text") {
		if (e.value.text.includes("\n")) return !0;
		for (let n of e.value.runs ?? []) if ($(to(t, n).size, 1, 1.2) > r) return !0;
	}
	return $(t.size, 1, 1.2) > r;
}
function Uo(e, t, n, r) {
	if (Po.has(t) || t.isChartSheet) return !1;
	if (t.defaultRowHeightCustom === !0) return Po.set(t, { derived: /* @__PURE__ */ new Map() }), !1;
	let i = Ia(t), a = qe(t.defaultRowHeight), o = $(t.normalFontSize ?? t.defaultFontSize ?? Oa, 1, 1.2), { cfContext: s, mergeAnchorSet: c, mergeSkipSet: l, structuredStyleMap: u } = No(t, n), d = /* @__PURE__ */ new Map(), f = !1;
	e.save();
	try {
		for (let p of t.rows) {
			if (p.hidden || p.customHeight === !0 || p.height !== null || Ye(Ke(t), p.index) || Object.hasOwn(t.rowHeights, p.index)) continue;
			let m = a, h = [];
			for (let a of p.cells) {
				let d = `${p.index}:${a.col}`;
				if (a.value.type === "empty" || c.has(d) || l.has(d)) continue;
				let { font: f, xf: g } = no(n, a.styleIndex ?? 0);
				if (!Ho(a, f, g, o)) continue;
				let _ = _i(a, p.index, a.col, s, n.dxfs ?? []), v = zo(f, _, u.get(d)), y = cn(a, n, _.numFmt, t.date1904).text;
				if (!y || y === "0" && t.showZeros === !1) continue;
				let b = i.col.sizeOf(a.col);
				m = Math.max(m, Vo(e, a, y, v, g, b, i.maximumDigitWidth, _.iconSet, Math.ceil(m), r)), _.iconSet && h.push({
					cell: a,
					text: y,
					font: v,
					xf: g,
					cellWidthPx: b,
					iconSet: _.iconSet
				});
			}
			let g = h.length === 0;
			for (let t = 0; !g && t < 32; t++) {
				let t = Math.ceil(m), n = m;
				for (let a of h) n = Math.max(n, Vo(e, a.cell, a.text, a.font, a.xf, a.cellWidthPx, i.maximumDigitWidth, a.iconSet, t, r));
				m = n, g = Math.ceil(m) === t;
			}
			if (!g) for (let t of h) m = Math.max(m, Vo(e, t.cell, t.text, t.font, t.xf, t.cellWidthPx, i.maximumDigitWidth, t.iconSet, t.cellWidthPx, r));
			let _ = Math.ceil(m);
			if (_ > a) {
				let e = Je(_);
				t.rowHeights[p.index] = e, d.set(p.index, e), f = !0;
			}
		}
	} finally {
		e.restore();
	}
	return Po.set(t, { derived: d }), f && Xe.invalidate(t), f;
}
function Wo(e) {
	return Po.has(e);
}
function Go(e) {
	return Po.get(e)?.derived ?? /* @__PURE__ */ new Map();
}
function Ko(e, t = []) {
	let n = Po.get(e);
	if (!n) return;
	let r = new Set(t), i = !1;
	for (let [t, a] of n.derived) Ye(Ke(e), t) || r.has(t) || e.rowHeights[t] === a && (delete e.rowHeights[t], i = !0);
	Po.delete(e), i && Xe.invalidate(e);
}
function qo(e, t) {
	let n = 0, r = e.length;
	for (; n < r;) {
		let i = n + r >> 1;
		e[i] < t ? n = i + 1 : r = i;
	}
	return n > 0 ? e[n - 1] : void 0;
}
function Jo(e, t) {
	let n = 0, r = e.length;
	for (; n < r;) {
		let i = n + r >> 1;
		e[i] <= t ? n = i + 1 : r = i;
	}
	return n < e.length ? e[n] : void 0;
}
function Yo(e, t, n, r) {
	return (e.mergeCells ?? []).some((e) => t >= e.top && t <= e.bottom && e.right >= n && e.left <= r);
}
function Xo(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _) {
	let v = d, y = f, b = /* @__PURE__ */ new Set(), x = (i, u, d, f) => {
		let p = `${i}:${u}`, v = r.get(p);
		if (!v || v.value.type === "empty" || s.has(p)) return !1;
		let { font: y, xf: b } = no(n, v.styleIndex ?? 0), x = _i(v, i, u, a, n.dxfs ?? []), S = cn(v, n, x.numFmt, t.date1904).text;
		if (!S || S === "0" && t.showZeros === !1 || v.value.type === "number" || b.wrapText || b.textRotation || S.includes("\n")) return !1;
		let C = o.get(p), w = x.fontBold ?? (y.bold || !!C?.bold), T = x.fontItalic ?? (y.italic || !!C?.italic);
		e.font = Za(e, w !== y.bold || T !== y.italic ? {
			...y,
			bold: w,
			italic: T
		} : y, m, _, S);
		let E = b.alignH ?? co(v.value.type), D = b.indent ? Math.round(b.indent * 3 * h) : 0, O = c.sizeOf(u), k = l.sizeOf(i), A = x.iconSet ? Math.max(8, Math.round(Math.min(O, k) * .55)) : 0, j = A > 0 ? A + 4 : 0, M = 3 + (E === "left" || !b.alignH ? D : 0) + j, N = e.measureText(S).width + M + 3, P = Math.max(0, N - O);
		return P <= 0 ? !1 : (E === "center" || E === "centerContinuous" ? P / 2 : ((g ? d === "higher" ? "left" : "right" : d === "higher" ? "right" : "left") == "left" ? E === "right" : E !== "right") ? P : 0) > f;
	};
	for (let e of u) {
		let n = i.get(e);
		if (!n) continue;
		let a = qo(n, d), o = r.get(`${e}:${d}`);
		a != null && a >= p && (!o || o.value.type === "empty") && !Yo(t, e, a + 1, d) && x(e, a, "higher", c.offsetOf(d) - c.offsetOf(a + 1)) && (v = Math.min(v, a), b.add(`${e}:${a}`));
		let s = Jo(n, f), l = r.get(`${e}:${f}`);
		s != null && s <= 16384 && (!l || l.value.type === "empty") && !Yo(t, e, f, s - 1) && x(e, s, "lower", c.offsetOf(s) - c.offsetOf(f + 1)) && (y = Math.max(y, s), b.add(`${e}:${s}`));
	}
	return {
		startCol: v,
		endCol: y,
		anchorKeys: b
	};
}
function Zo(e, t) {
	st(e, t), Ae(e, t), Ao.set(t, No(e));
}
function Qo(e, t, n, r, i = {}, a) {
	ba(e, t, i.officeFontRoutes, i.googleSubstitutes === !0), wa(t, i.authoritativeMdw);
	let o = i.dpr ?? 1, s = i.cellScale ?? 1, c = t.isChartSheet === !0, l = Ia(t), u = l.maximumDigitWidth, d = e.canvas.width / o, f = e.canvas.height / o;
	e.clearRect(0, 0, d, f), e.fillStyle = "#ffffff", e.fillRect(0, 0, d, f);
	let p = (e) => Math.round(e * s), m = c ? 0 : p(50), h = c ? 0 : p(22), { rows: _, cols: v } = r, y = Math.max(1, Math.trunc(r.row) || 1), b = Math.max(1, Math.trunc(r.col) || 1), x = (i.scrollOffsetX ?? 0) * s, S = (i.scrollOffsetY ?? 0) * s, { col: C, row: w } = l.axesAtScale(s), T = C.bandsToCover(1, c ? 0 : i.freezeCols ?? 0, Math.max(0, d - m)), E = w.bandsToCover(1, c ? 0 : i.freezeRows ?? 0, Math.max(0, f - h)), D = E.at(-1)?.index ?? 0, O = T.at(-1)?.index ?? 0, k = T.map(({ index: e }) => e), A = E.map(({ index: e }) => e), j = T.map(({ size: e }) => e), M = E.map(({ size: e }) => e), N = j.reduce((e, t) => e + t, 0), P = M.reduce((e, t) => e + t, 0), F = C.bandsToCover(b, Math.min(16384, b + v - 1)), ee = w.bandsToCover(y, Math.min(1048576, y + _ - 1)), te = F.map(({ index: e }) => e), I = ee.map(({ index: e }) => e), L = F.map(({ size: e }) => e), R = ee.map(({ size: e }) => e), { cellMap: z, cfContext: ne, mergeSkipSet: B, autoFilterCells: V, hyperlinkMap: H, commentCells: U, structuredStyleMap: W, sparklineMap: G, nonEmptyColsByRow: re } = No(t, n), K = /* @__PURE__ */ new Map(), ie = Mo(t, "worksheet-merge-anchor-index", "index-merge-anchor-coordinates");
	for (let e of t.mergeCells ?? []) {
		let t = C.offsetOf(e.right + 1) - C.offsetOf(e.left), n = w.offsetOf(e.bottom + 1) - w.offsetOf(e.top);
		Vt(K, `${e.top}:${e.left}`, {
			totalW: t,
			totalH: n,
			right: e.right,
			bottom: e.bottom
		}, ie);
	}
	let ae = te[0] ?? b, oe = te.at(-1) ?? Math.min(16384, b + v - 1), q = Xo(e, t, n, z, re, ne, W, K, C, w, [...new Set([...A, ...I])], ae, oe, O + 1, s, u, t.rightToLeft === !0, a), se = C.bandsToCover(q.startCol, q.endCol), J = se.map(({ index: e }) => e), ce = se.map(({ size: e }) => e), le = x + C.offsetOf(ae) - C.offsetOf(q.startCol), ue = {
		worksheet: t,
		styles: n,
		cellMap: z,
		mergeAnchorMap: K,
		mergeSkipSet: B,
		cfContext: ne,
		colWidths: ce,
		rowHeights: R,
		colAxis: C,
		rowAxis: w,
		frozenColWidths: j,
		frozenRowHeights: M,
		frozenW: N,
		frozenH: P,
		startRow: y,
		startCol: b,
		cs: s,
		dpr: o,
		autoFilterCells: V,
		hyperlinkMap: H,
		commentCells: U,
		structuredStyleMap: W,
		sparklineMap: G,
		overflowTextAnchors: q.anchorKeys,
		mdw: u,
		onTextRun: i.onTextRun,
		rtl: t.rightToLeft === !0,
		canvasW: d,
		threeD: i.threeD
	}, de = m, fe = h, pe = de + N, me = fe + P, he = Math.max(0, d - pe), ge = Math.max(0, f - me);
	D > 0 && O > 0 && ko(e, ue, 1, 1, j, M, k, A, 0, 0, de, fe, de, fe, N, P, a), D > 0 && ko(e, ue, 1, q.startCol, ce, M, J, A, le, 0, pe, fe, pe, fe, he, P, a), O > 0 && ko(e, ue, y, 1, j, R, k, I, 0, S, de, me, de, me, N, ge, a), c || ko(e, ue, y, q.startCol, ce, R, J, I, le, S, pe, me, pe, me, he, ge, a), es(e, t, C, w, i.loadedImages, s, y, b, x, S, pe, me, he, ge, t.rightToLeft === !0, d, i.threeD, i.regionMap, i.chartEx, a), !c && t.slicers && t.slicers.length > 0 && Bs(e, t, C, w, s, y, b, x, S, pe, me, he, ge, t.rightToLeft === !0, d), c || $o(e, d, f, y, b, _, v, L, R, te, I, x, S, j, M, k, A, N, P, m, h, s, o, i.selectedRowRange ?? null, i.selectedColRange ?? null, t.rightToLeft === !0, i.chromeColors);
	let _e = t.rightToLeft === !0;
	if (D > 0) {
		e.save(), e.strokeStyle = ja, e.lineWidth = .5, e.beginPath();
		let t = me + g(me, .5, o);
		e.moveTo(0, t), e.lineTo(d, t), e.stroke(), e.restore();
	}
	if (O > 0) {
		e.save(), e.strokeStyle = ja, e.lineWidth = .5, e.beginPath();
		let t = _e ? d - pe : pe, n = t + g(t, .5, o);
		e.moveTo(n, h), e.lineTo(n, f), e.stroke(), e.restore();
	}
}
function $o(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, _, v, y, b, x, S, C, w, T, E, D) {
	let O = D?.surface ?? "#f8f9fa", k = D?.mutedSurface ?? "#e8eaed", A = D?.selectedSurface ?? "#caddf6", j = D?.border ?? "#c8ccd0", M = D?.accent ?? "#5b9bd5", N = D?.text ?? "#444", P = (e) => !T || e < T.start || e > T.end ? O : T.strong ? A : k, F = (e) => !T || e < T.start || e > T.end ? j : T.strong ? M : j, ee = (e) => !w || e < w.start || e > w.end ? O : w.strong ? A : k, te = (e) => !w || e < w.start || e > w.end ? j : w.strong ? M : j, I = `${Math.max(1, Math.round(11 * S))}px ${ra}`, L = b + v, R = x + y, z = .5 / C, ne = (e, n) => E ? ka(e, n, t) : e, B = E ? t - b : 0;
	e.fillStyle = O, e.fillRect(B, 0, b, x), e.strokeStyle = j, e.lineWidth = .5, e.beginPath();
	let V = E ? B + g(B, .5, C) : B + b - z;
	e.moveTo(V, 0), e.lineTo(V, x), e.moveTo(B, x - z), e.lineTo(B + b, x - z), e.stroke(), e.font = I, e.fillStyle = N;
	let H = (t, n, r) => {
		let i = ne(n, r);
		e.fillStyle = P(t), e.fillRect(i, 0, r, x), e.strokeStyle = F(t), e.lineWidth = .5, e.beginPath();
		let a = i + g(i, .5, C);
		e.moveTo(a, 0), e.lineTo(a, x), e.moveTo(i, x - z), e.lineTo(i + r, x - z), e.stroke(), e.fillStyle = N, e.textAlign = "center", e.textBaseline = "middle", e.fillText(So(t), i + r / 2, x / 2);
	}, U = (t, n, r) => {
		let i = B;
		e.fillStyle = ee(t), e.fillRect(i, n, b, r), e.strokeStyle = te(t), e.lineWidth = .5, e.beginPath();
		let a = n + g(n, .5, C), o = E ? i + g(i, .5, C) : i + b - z;
		e.moveTo(o, n), e.lineTo(o, n + r), e.moveTo(i, a), e.lineTo(i + b, a), e.stroke(), e.fillStyle = N, e.textBaseline = "middle";
		let s = Math.max(2, Math.round(4 * S));
		E ? (e.textAlign = "left", e.fillText(String(t), i + s, n + r / 2)) : (e.textAlign = "right", e.fillText(String(t), i + b - s, n + r / 2));
	};
	if (p.length > 0) {
		e.save(), e.beginPath(), e.rect(ne(b, v), 0, v, x), e.clip();
		let t = b;
		for (let e = 0; e < p.length; e++) H(h[e], t, p[e]), t += p[e];
		e.restore();
	}
	e.save(), e.beginPath(), e.rect(ne(L, t - L), 0, t - L, x), e.clip();
	let W = L - d;
	for (let e = 0; e < s.length; e++) {
		let n = s[e];
		W + n > L && W < t && H(l[e], W, n), W += n;
	}
	if (e.restore(), m.length > 0) {
		e.save(), e.beginPath(), e.rect(B, x, b, y), e.clip();
		let t = x;
		for (let e = 0; e < m.length; e++) U(_[e], t, m[e]), t += m[e];
		e.restore();
	}
	e.save(), e.beginPath(), e.rect(B, R, b, n - R), e.clip();
	let G = R - f;
	for (let e = 0; e < c.length; e++) {
		let t = c[e];
		G + t > R && G < n && U(u[e], G, t), G += t;
	}
	e.restore();
}
function es(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y) {
	let b = [], x = 0;
	if (i) for (let e of t.images ?? []) b.push({
		kind: "image",
		zOrder: e.zOrder ?? 2 ** 53 - 1,
		fallbackOrder: x++,
		anchor: e
	});
	for (let e of t.shapeGroups ?? []) for (let t of e.shapes) b.push({
		kind: "shape",
		zOrder: t.zOrder ?? 2 ** 53 - 1,
		fallbackOrder: x++,
		anchor: e,
		shape: t
	});
	for (let e of t.charts ?? []) b.push({
		kind: "chart",
		zOrder: e.zOrder ?? 2 ** 53 - 1,
		fallbackOrder: x++,
		anchor: e
	});
	b.sort((e, t) => e.zOrder - t.zOrder || e.fallbackOrder - t.fallbackOrder);
	for (let x of b) x.kind === "image" ? rs(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, [x.anchor]) : x.kind === "shape" ? is(e, t, n, r, a, o, s, c, l, u, d, f, p, i, m, h, [x.anchor], y, x.shape) : Ds(e, t, n, r, a, o, s, c, l, u, d, f, p, m, h, i, [x.anchor], g, _, v);
}
function ts(e, t) {
	return e.offsetOf(t);
}
function ns(e, t) {
	return e.offsetOf(t);
}
function rs(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g = t.images) {
	if (f <= 0 || p <= 0) return;
	let _ = ts(n, s), v = ns(r, o);
	e.save(), e.beginPath();
	let y = Aa(u, f, h, m);
	e.rect(y, d, f, p), e.clip();
	for (let o of g) {
		let s = Qi(o), g = Xi(o.imagePath, ea(o, s), s), b = i.get(g), x = Wi(i, g, "tiff");
		if (!b && !x) continue;
		let { x: S, y: C, width: w, height: T } = zi(t, o, n, r, a);
		if (w <= 0 || T <= 0) continue;
		let E = Aa(u + (S - _) - c, w, h, m), D = d + (C - v) - l, O = b && !o.srcRect ? Ji(b, E, D, w, T) : null, k = O ? Yi(O, E + w / 2, D + T / 2, o.rotation ?? 0, o.flipH ?? !1, o.flipV ?? !1) : Ki({
			x: E,
			y: D,
			width: w,
			height: T
		}, o.rotation);
		if (k.x + k.width < y || k.x > y + f || k.y + k.height < d || k.y > d + p) continue;
		let A = () => {
			b ? B(e, b, o.srcRect, E, D, w, T) : Ee(e, "tiff", {
				x: E,
				y: D,
				width: w,
				height: T
			});
		}, j = () => {
			if (o.alpha != null && o.alpha < 1) {
				e.save();
				try {
					e.globalAlpha = o.alpha, A();
				} finally {
					e.restore();
				}
			} else A();
		}, M = o.rotation ?? 0, N = o.flipH ?? !1, P = o.flipV ?? !1;
		M === 0 && !N && !P ? j() : Oe(e, {
			rect: {
				x: E,
				y: D,
				w,
				h: T
			},
			geometry: {
				kind: "preset",
				name: "rect",
				adjustments: []
			},
			fill: null,
			stroke: null,
			transform: {
				rotationDeg: M,
				flipH: N,
				flipV: P
			}
		}, j);
	}
	e.restore();
}
function is(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g = t.shapeGroups ?? [], _, v) {
	if (d <= 0 || f <= 0 || g.length === 0) return;
	let y = ts(n, o), b = ns(r, a);
	e.save(), e.beginPath();
	let x = Aa(l, d, h, m);
	e.rect(x, u, d, f), e.clip();
	for (let a of g) {
		let { x: o, y: g, width: S, height: C } = zi(t, a, n, r, i);
		if (S <= 0 || C <= 0) continue;
		let w = Aa(l + (o - y) - s, S, h, m), T = u + (g - b) - c, E = v ? [v] : a.shapes, D = E.some((e) => e.geom?.type === "image" && me(e.geom.blipEffects ?? []));
		if (!(!D && (w + S < x || w > x + d)) && !(!D && (T + C < u || T > u + f))) for (let t of E) {
			let n = w + t.x * S, r = T + t.y * C, o = t.w * S, s = t.h * C;
			o <= 0 || s <= 0 || ss(e, t, n, r, o, s, i, p, _, a);
		}
	}
	e.restore();
}
function as(e, t, n, r, i, a) {
	if (t.w <= 0 || t.h <= 0) return;
	let o = i / t.w, s = a / t.h, c = n, l = r, u = n, d = r;
	for (let i of t.commands) switch (i.op) {
		case "moveTo": {
			let t = n + i.x * o, a = r + i.y * s;
			e.moveTo(t, a), c = u = t, l = d = a;
			break;
		}
		case "lineTo": {
			let t = n + i.x * o, a = r + i.y * s;
			e.lineTo(t, a), c = t, l = a;
			break;
		}
		case "cubicBezTo": {
			let t = n + i.x3 * o, a = r + i.y3 * s;
			e.bezierCurveTo(n + i.x1 * o, r + i.y1 * s, n + i.x2 * o, r + i.y2 * s, t, a), c = t, l = a;
			break;
		}
		case "quadBezTo": {
			let t = n + i.x2 * o, a = r + i.y2 * s;
			e.quadraticCurveTo(n + i.x1 * o, r + i.y1 * s, t, a), c = t, l = a;
			break;
		}
		case "arcTo": {
			let t = i.wr * o, n = i.hr * s;
			if (t <= 0 || n <= 0) break;
			let r = i.stAng / 6e4 * (Math.PI / 180), a = i.swAng / 6e4 * (Math.PI / 180), u = c - Math.cos(r) * t, d = l - Math.sin(r) * n, f = r + a;
			e.ellipse(u, d, t, n, 0, r, f, a < 0), c = u + Math.cos(f) * t, l = d + Math.sin(f) * n;
			break;
		}
		case "close":
			e.closePath(), c = u, l = d;
			break;
	}
}
function os(e, t, n, r, i, a) {
	if (t.geom.type === "custom") for (let o of t.geom.paths) o.fill !== "none" && as(e, o, n, r, i, a);
	else (t.geom.type !== "preset" || !he(e, t.geom.name, n, r, i, a, t.geom.adj ?? [])) && e.rect(n, r, i, a);
}
function ss(e, t, n, r, i, a, o, s, c, l) {
	if (x(t.strokeFill) && (e = te(e)), e.save(), t.rot !== 0 || t.flipH || t.flipV ? (e.translate(n + i / 2, r + a / 2), e.rotate(t.rot * Math.PI / 180), e.scale(t.flipH ? -1 : 1, t.flipV ? -1 : 1), e.translate(-i / 2, -a / 2)) : e.translate(n, r), t.geom.type === "custom") {
		let n = hs(e, t, i, a, o);
		for (let r of t.geom.paths) if (!(r.w <= 0 || r.h <= 0)) {
			if (e.beginPath(), as(e, r, 0, 0, i, a), r.fill !== "none" && gs(e, t, i, a, o, n)) {
				let t = re(r.fill);
				t && (e.fillStyle = t, e.fill());
			}
			r.stroke !== !1 && vs(e, t, i, a, o);
		}
	} else if (t.geom.type === "preset") {
		let n = hs(e, t, i, a, o), r = t.strokeColor && t.strokeWidth > 0 ? () => vs(e, t, i, a, o) : null;
		ce(e, t.geom.name, 0, 0, i, a, t.geom.adj ?? [], n, r, () => {}) || (e.beginPath(), e.rect(0, 0, i, a), ps(e, t, i, a, o));
	} else if (t.geom.type === "image") {
		let n = t.geom, r = l ? $i(l, t) : void 0, o = Xi(n.imagePath, ea(n, r), r), c = s?.get(o), u = Wi(s, o, "tiff");
		if (c || u) {
			let t = n.alpha, r = () => {
				c ? B(e, c, n.srcRect, 0, 0, i, a) : Ee(e, "tiff", {
					x: 0,
					y: 0,
					width: i,
					height: a
				});
			};
			t != null && t < 1 ? (e.save(), e.globalAlpha = t, r(), e.restore()) : r();
		}
	}
	t.text && ((t.text.vert === "wordArtVert" || t.text.vert === "wordArtVertRtl") && (t.flipH || t.flipV) ? (e.save(), e.translate(i / 2, a / 2), e.scale(t.flipH ? -1 : 1, t.flipV ? -1 : 1), t.flipV && e.rotate(Math.PI), e.translate(-i / 2, -a / 2), fs(e, t.text, i, a, o, c), e.restore()) : fs(e, t.text, i, a, o, c)), e.restore();
}
var cs = /* @__PURE__ */ new WeakMap();
function ls(e) {
	let t = [];
	for (let n of e.shapeGroups ?? []) for (let e of n.shapes) for (let n of e.text?.paragraphs ?? []) for (let e of n.runs) e.type === "math" && t.push({
		nodes: e.nodes,
		display: e.display
	});
	return t;
}
function us(e) {
	for (let t of e.shapeGroups ?? []) for (let e of t.shapes) for (let t of e.text?.paragraphs ?? []) for (let e of t.runs) if (e.type === "math" && !cs.has(e.nodes)) return !0;
	return !1;
}
async function ds(e, t) {
	let n = ls(e).filter((e) => !cs.has(e.nodes));
	if (n.length !== 0) {
		await t.loadMathJax();
		for (let e of n) if (!cs.has(e.nodes)) try {
			let n = await t.mathMLToSvg(H(e.nodes, e.display)), r = await K(n, "#000000");
			cs.set(e.nodes, {
				raster: r,
				widthEm: n.widthEm,
				ascentEm: n.ascentEm,
				descentEm: n.descentEm,
				tinted: /* @__PURE__ */ new Map()
			});
		} catch {}
	}
}
function fs(t, n, r, i, a, o) {
	if (r <= 0 || i <= 0 || n.paragraphs.length === 0) return;
	let s = We(r, i, {
		lIns: n.lIns,
		rIns: n.rIns,
		tIns: n.tIns,
		bIns: n.bIns
	}, a / e), c = s.left, l = s.width, u = s.height;
	if (l <= 0 || u <= 0) return;
	let d = (e, n = 1) => {
		let r = (e.size > 0 ? e.size : Oa) * D * a * n, i = Da(e.fontFace, o, e.text, Ca(t, e.fontFace, e.bold, e.italic), fa.get(t) === !0, void 0, xa(t, e.fontFace));
		return {
			font: `${e.italic ? "italic " : ""}${e.bold ? "bold " : ""}${r}px ${i}`,
			px: r
		};
	};
	if (n.vert === "wordArtVert" || n.vert === "wordArtVertRtl") {
		let e = n.autoFit === "norm" ? n.fontScale ?? 1 : 1;
		if (e === 0) return;
		Nt(t, n, n.vert, s, D * a, (t, n) => {
			let r = xe(n.codePointAt(0) ?? 0) ? t.fontFaceEa ?? t.fontFace : t.fontFace;
			return {
				...d({
					...t,
					text: n,
					fontFace: r
				}, e),
				face: r
			};
		}, (n, r) => {
			let i = cs.get(n.nodes);
			if (!i) return;
			let o = (n.fontSize ?? r) * D * a * e, s = i.widthEm * o, c = (i.ascentEm + i.descentEm) * o;
			return {
				width: s,
				height: c,
				draw: (e, r) => {
					s > 0 && c > 0 && t.drawImage(oe(i, n.color ?? "#000000"), e, r, s, c);
				}
			};
		});
		return;
	}
	let f = /* @__PURE__ */ new Map(), p = !n.paragraphs.some((e) => e.runs.some((e) => e.type === "math")), m = la.get(t), h = gt(t);
	for (let e of n.paragraphs) for (let t of e.runs) {
		if (!p) break;
		if (t.type !== "text") continue;
		let e = t.fontFace ? xt(t, m?.[ft(t)], h) : void 0;
		e ? f.set(t, e) : p = !1;
	}
	n.paragraphs.some((e) => e.runs.some((e) => e.type === "text")) || (p = !1);
	let g = (e, n) => {
		let r = t.font;
		t.font = e;
		let i = t.measureText("M").actualBoundingBoxAscent;
		return t.font = r, i > 0 ? i : n * .85;
	}, _ = n.wrap !== "none", v = [], y = [], b;
	for (let r of n.paragraphs) {
		let i = r.align || "l", o = (r.marL ?? 0) / e * a, s = (r.marR ?? 0) / e * a, c = Math.max(0, (r.indent ?? 0) / e * a), u = Math.max(0, l - o - s), m = [], h = 0;
		for (let e of r.runs) {
			if (e.type === "break") {
				m.push({ type: "break" });
				continue;
			}
			if (e.type === "math") {
				let t = cs.get(e.nodes);
				if (!t) continue;
				let n = (e.fontSize ?? (h || Oa)) * D * a, r = t.ascentEm * n, i = t.descentEm * n, o = {
					kind: "math",
					font: "",
					color: e.color ?? "#000000",
					pxSize: n,
					render: t,
					ascent: r,
					descent: i,
					display: e.display === !0
				};
				m.push({
					type: "object",
					width: t.widthEm * n,
					style: o,
					payload: o,
					display: e.display
				});
				continue;
			}
			h = e.size > 0 ? e.size : Oa;
			let { font: t, px: n } = d(e);
			m.push({
				type: "text",
				text: e.text,
				style: {
					kind: "text",
					font: t,
					color: e.color ?? "#000000",
					pxSize: n,
					face: e.fontFace,
					ratios: p ? f.get(e) : void 0
				}
			});
		}
		let x = Ge(m, {
			maxWidth: _ ? u : Infinity,
			firstLineIndent: c,
			measureText(e, n) {
				return t.font = n.font, t.measureText(e).width;
			},
			sameStyle: (e, t) => e.kind === t.kind && e.font === t.font && e.color === t.color && e.pxSize === t.pxSize,
			tabStops: r.tabStops?.map((t) => ({
				pos: t.pos / e * a,
				algn: t.algn
			})),
			defaultTabSize: (r.defTabSz ?? 914400) / e * a,
			tabStartPen: (e) => o + (e === 0 ? c : 0)
		}), S = [], C = !1;
		for (let e of m) {
			if (e.type === "break") {
				C = !1;
				continue;
			}
			if (e.type === "object") {
				e.display ? (S.push(!C), C = !1) : C = !0;
				continue;
			}
			if (e.text === "") {
				C = !0;
				continue;
			}
			e.text.split("\n").forEach((e, t) => {
				t > 0 && (C = !1), e.replace(/\r/gu, "") !== "" && (C = !0);
			});
		}
		let w = 0, T = /* @__PURE__ */ new Map();
		m.forEach((e, t) => {
			e.type === "text" && T.set(e.style, t);
		});
		let E, O = -1, k = (e) => {
			let t = T.get(e) ?? -1;
			t >= O && (E = e, O = t);
		}, A = () => {
			let e = E?.pxSize ?? Oa * 1.3333333333333333 * a, n = E?.face;
			return E?.ratios ? {
				height: e * (E.ratios.ascentRatio + E.ratios.descentRatio),
				ascent: e * E.ratios.ascentRatio
			} : {
				height: e * 1.2,
				ascent: g(`${e}px ${Da(n, void 0, "", Ca(t, n), fa.get(t) === !0, void 0, xa(t, n))}`, e)
			};
		}, j = n.autoFit === "norm" ? n.lnSpcReduction ?? 0 : 0, M = ut(r.spaceLine), N = (e) => Ie(e, M, D * a, j), P = (e, t) => {
			let n = je({
				ascent: e,
				descent: t
			}, M, D * a, j);
			return {
				height: n.ascent + n.descent,
				ascent: n.ascent
			};
		}, F = v.length;
		for (let [e, t] of x.entries()) {
			let n = [], r = 0, a = 0, s = 0, l = 0, d = !1, f = !1;
			for (let e of t.segments) {
				if (e.type === "tab") {
					n.push({
						kind: "tab",
						w: e.width
					});
					continue;
				}
				if (e.type === "object") {
					let t = e.style;
					if (!t.render) continue;
					let i = t.ascent ?? 0, o = t.descent ?? 0;
					n.push({
						kind: "math",
						render: t.render,
						color: t.color,
						w: e.width,
						ascent: i,
						descent: o
					}), r = Math.max(r, i + o), a = Math.max(a, i), d = !0, t.display && (f = !0);
					continue;
				}
				let t = e.style;
				n.push({
					kind: "text",
					text: e.text,
					font: t.font,
					color: t.color,
					w: e.width
				}), r = Math.max(r, t.pxSize * 1.2), a = Math.max(a, g(t.font, t.pxSize)), t.ratios && (s = Math.max(s, t.pxSize * t.ratios.ascentRatio), l = Math.max(l, t.pxSize * t.ratios.descentRatio)), k(t);
			}
			if (f && S[w++]) {
				let e = A();
				v.push({
					segs: [],
					align: i,
					height: N(e.height),
					ascent: e.ascent,
					hasMath: !1,
					leftInset: o,
					availW: u,
					gapBefore: 0
				}), y.push(e.height);
			}
			for (let e of t.hiddenRuns ?? []) {
				let t = m[e];
				t.type === "text" && (r = Math.max(r, t.style.pxSize * 1.2), a = Math.max(a, g(t.style.font, t.style.pxSize)), t.style.ratios && (s = Math.max(s, t.style.pxSize * t.style.ratios.ascentRatio), l = Math.max(l, t.style.pxSize * t.style.ratios.descentRatio)), k(t.style));
			}
			let h;
			if (p) {
				if (s + l === 0) {
					let e = A();
					s = e.ascent, l = e.height - e.ascent;
				}
				r = s + l, {height: h, ascent: a} = P(s, l);
			} else r === 0 && ({height: r, ascent: a} = A()), h = N(r);
			let _ = f;
			v.push({
				segs: n,
				align: i,
				height: h,
				ascent: a,
				hasMath: d,
				leftInset: _ ? o : o + (e === 0 ? c : 0),
				availW: _ ? u : u - (e === 0 ? c : 0),
				gapBefore: 0
			}), y.push(r);
		}
		v.length > F && (b && F > 0 && (v[F].gapBefore = Fe(ut(b.spaceAfter), b.lastNaturalHeight, D * a) + Fe(ut(r.spaceBefore), y[F], D * a)), b = {
			spaceAfter: r.spaceAfter,
			lastNaturalHeight: y[v.length - 1]
		});
	}
	let x = (e) => Number(/(\d+(?:\.\d+)?)px/u.exec(e)?.[1] ?? 0), S = (e) => {
		let n = t.font, r = t.textBaseline;
		t.font = e.font, t.textBaseline = "alphabetic";
		let i = t.measureText(e.text).actualBoundingBoxAscent;
		t.textBaseline = "middle";
		let a = t.measureText(e.text).actualBoundingBoxAscent;
		t.font = n, t.textBaseline = r;
		let o = i - a;
		return Number.isFinite(o) ? o : 0;
	}, C = v.reduce((e, t) => e + t.gapBefore + t.height, 0), w = ze(n.anchor, s, C);
	for (let e of v) {
		w += e.gapBefore;
		let n = e.segs.reduce((e, t) => e + t.w, 0), r = c + e.leftInset, i = Ve(e.align, r, e.availW, n), a = e.segs.map((e) => ({
			type: "object",
			style: e,
			width: e.w
		}));
		if (e.hasMath) {
			t.textBaseline = "alphabetic";
			let n = w + e.ascent;
			nt(a, i, n, (e, r) => {
				let i = e.style;
				if (i.kind === "text") t.font = i.font, t.fillStyle = i.color, t.fillText(i.text, r, n);
				else if (i.kind === "math") {
					let e = oe(i.render, i.color);
					t.drawImage(e, r, n - i.ascent, i.w, i.ascent + i.descent);
				}
			});
		} else if (p) {
			t.textBaseline = "alphabetic";
			let n = w + e.ascent;
			nt(a, i, n, (e, r) => {
				let i = e.style;
				i.kind === "text" && (t.font = i.font, t.fillStyle = i.color, t.fillText(i.text, r, n));
			});
		} else {
			let n = w + e.height / 2, r = e.segs.filter((e) => e.kind === "text"), o = r.reduce((e, t) => !e || x(t.font) > x(e.font) ? t : e, void 0), s = o && r.some((e) => e.font !== o.font) ? n + S(o) : void 0;
			t.textBaseline = s === void 0 ? "middle" : "alphabetic";
			let c = s ?? n;
			nt(a, i, c, (e, n) => {
				let r = e.style;
				r.kind === "text" && (t.font = r.font, t.fillStyle = r.color, t.fillText(r.text, n, c));
			});
		}
		w += e.height;
	}
}
function ps(e, t, n, r, i) {
	gs(e, t, n, r, i), vs(e, t, n, r, i);
}
function ms(e, t, n) {
	if (e.rot === 0 && !e.flipH && !e.flipV) return;
	let r = e.rot * Math.PI / 180, i = Math.cos(r), a = Math.sin(r), o = e.flipH ? -1 : 1, s = e.flipV ? -1 : 1, c = o * i, l = -s * a, u = o * a, d = s * i, f = t / 2, p = n / 2;
	return {
		a: c,
		b: l,
		c: u,
		d,
		e: f - c * f - u * p,
		f: p - l * f - d * p
	};
}
function hs(e, t, n, r, i) {
	return F(t.fill ?? (t.fillColor ? {
		fillType: "solid",
		color: t.fillColor
	} : null), e, 0, 0, n, r, t.rot, D * i, ms(t, n, r), (e, n, r, i, a) => os(e, t, n, r, i, a));
}
function gs(e, t, n, r, i, a = hs(e, t, n, r, i)) {
	return a ? (e.fillStyle = a, e.fill(), !0) : !1;
}
function _s(e) {
	return !e.strokeColor || e.strokeWidth <= 0 ? null : {
		color: e.strokeColor,
		width: e.strokeWidth,
		...e.strokeFill ? { fill: e.strokeFill } : {},
		...e.strokeDashStyle ? { dashStyle: e.strokeDashStyle } : {},
		...e.strokeCustomDash?.length ? { customDash: e.strokeCustomDash } : {},
		...e.strokeLineCap ? { lineCap: e.strokeLineCap } : {},
		...e.strokeLineJoin ? { lineJoin: e.strokeLineJoin } : {},
		...e.strokeMiterLimit === void 0 ? {} : { miterLimit: e.strokeMiterLimit },
		...e.strokeAlignment ? { alignment: e.strokeAlignment } : {},
		...e.strokeCmpd ? { cmpd: e.strokeCmpd } : {},
		...e.strokeHeadEnd ? { headEnd: e.strokeHeadEnd } : {},
		...e.strokeTailEnd ? { tailEnd: e.strokeTailEnd } : {}
	};
}
function vs(t, n, r, i, a) {
	let o = _s(n);
	if (o) {
		if (N(t, o, 1 / e), o.fill) {
			let e = F(o.fill, t, 0, 0, r, i, n.rot, D * a, ms(n, r, i), void 0, T(t));
			e && (t.strokeStyle = e);
		}
		t.stroke();
	}
}
function ys(e, t, n, r, i, a, o) {
	if (r === n && i === t) return e;
	let s = (e, r) => {
		if (e === t && r === n) return null;
		let i = a.get(`${e}:${r}`);
		return i ? no(o, i.styleIndex ?? 0).border : null;
	}, c = s(t, r), l = s(i, n), u = s(i, r), d = (e, ...t) => {
		if (e?.style) return e;
		for (let e of t) if (e?.style) return e;
		return e ?? null;
	};
	return {
		left: e.left,
		top: e.top,
		right: d(c?.right, u?.right, e.right),
		bottom: d(l?.bottom, u?.bottom, e.bottom),
		diagonalUp: e.diagonalUp ?? null,
		diagonalDown: e.diagonalDown ?? null
	};
}
function bs(e, t) {
	if (!t) return e;
	let n = (e, t) => t && t.style ? t : e ?? null;
	return {
		left: n(e.left, t.left),
		right: n(e.right, t.right),
		top: n(e.top, t.top),
		bottom: n(e.bottom, t.bottom),
		diagonalUp: n(e.diagonalUp, t.diagonalUp),
		diagonalDown: n(e.diagonalDown, t.diagonalDown)
	};
}
function xs(e, t, n, r, i = 1) {
	return {
		outerStart: n ? e - i : e,
		outerEnd: r ? t + i : t,
		innerStart: n ? e + i : e,
		innerEnd: r ? t - i : t
	};
}
function Ss(e, t, n, r, i, a, o = 1) {
	let s = [
		{
			edge: t.top,
			x1: n,
			y1: r,
			x2: n + i,
			y2: r,
			kind: "h"
		},
		{
			edge: t.bottom,
			x1: n,
			y1: r + a,
			x2: n + i,
			y2: r + a,
			kind: "h"
		},
		{
			edge: t.left,
			x1: n,
			y1: r,
			x2: n,
			y2: r + a,
			kind: "v"
		},
		{
			edge: t.right,
			x1: n + i,
			y1: r,
			x2: n + i,
			y2: r + a,
			kind: "v"
		},
		{
			edge: t.diagonalUp,
			x1: n,
			y1: r + a,
			x2: n + i,
			y2: r,
			kind: "d"
		},
		{
			edge: t.diagonalDown,
			x1: n,
			y1: r,
			x2: n + i,
			y2: r + a,
			kind: "d"
		}
	];
	for (let { edge: c, x1: l, y1: u, x2: d, y2: f, kind: p } of s) {
		if (!c || !c.style || c.style === "none") continue;
		let s = c.color ? b(c.color) : "#000000";
		if (c.style === "double" && p === "d") {
			e.strokeStyle = s, e.lineWidth = 1, e.setLineDash([]);
			let t = d - l, n = f - u, r = Math.hypot(t, n), i = -n / r * 1, a = t / r * 1;
			e.beginPath(), e.moveTo(l + i, u + a), e.lineTo(d + i, f + a), e.moveTo(l - i, u - a), e.lineTo(d - i, f - a), e.stroke();
			continue;
		}
		if (c.style === "double" && p !== "d") {
			if (e.strokeStyle = s, e.lineWidth = 1, e.setLineDash([]), e.beginPath(), p === "h") {
				let o = u === r, s = o ? r - 1 : r + a + 1, c = o ? r + 1 : r + a - 1, l = xs(n, n + i, !!t.left?.style && t.left.style !== "none", !!t.right?.style && t.right.style !== "none", 1);
				e.moveTo(l.outerStart, s), e.lineTo(l.outerEnd, s), e.moveTo(l.innerStart, c), e.lineTo(l.innerEnd, c);
			} else {
				let o = l === n, s = o ? n - 1 : n + i + 1, c = o ? n + 1 : n + i - 1, u = xs(r, r + a, !!t.top?.style && t.top.style !== "none", !!t.bottom?.style && t.bottom.style !== "none", 1);
				e.moveTo(s, u.outerStart), e.lineTo(s, u.outerEnd), e.moveTo(c, u.innerStart), e.lineTo(c, u.innerEnd);
			}
			e.stroke();
			continue;
		}
		e.beginPath(), e.strokeStyle = s;
		let m = Cs(c.style);
		e.lineWidth = m;
		let h = ws(c.style);
		e.setLineDash(h);
		let _ = p === "v" ? g(l, m, o) : 0, v = p === "h" ? g(u, m, o) : 0;
		e.moveTo(l + _, u + v), e.lineTo(d + _, f + v), e.stroke(), e.setLineDash([]);
	}
}
function Cs(e) {
	switch (e) {
		case "thick": return 3;
		case "medium":
		case "mediumDashed":
		case "mediumDashDot":
		case "mediumDashDotDot":
		case "slantDashDot": return 2;
		case "hair": return .5;
		default: return 1;
	}
}
function ws(e) {
	return r(e);
}
function Ts(e) {
	switch (e) {
		case "double": return 13;
		case "thick": return 12;
		case "medium": return 11;
		case "mediumDashed": return 10;
		case "mediumDashDot": return 9;
		case "slantDashDot": return 8;
		case "mediumDashDotDot": return 7;
		case "thin": return 6;
		case "dashed": return 5;
		case "dashDot": return 4;
		case "dashDotDot": return 3;
		case "dotted": return 2;
		case "hair": return 1;
		default: return 0;
	}
}
function Es(e, t) {
	let n = Ts(e?.style), r = Ts(t?.style);
	return n === 0 && r === 0 ? null : n >= r ? e ?? null : t ?? null;
}
function Ds(t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _ = n.charts, v, y, b) {
	if (f <= 0 || p <= 0) return;
	let x = ts(r, s), S = ns(i, o), C = Aa(u, f, h, m);
	for (let n of _) {
		let o = n.fromCol + 1, s = n.fromRow + 1, _ = n.toCol + 1, w = n.toRow + 1, T = ts(r, o) + n.fromColOff * a / e, E = ns(i, s) + n.fromRowOff * a / e, O = ts(r, _) + n.toColOff * a / e, k = ns(i, w) + n.toRowOff * a / e, A = O - T, j = k - E;
		if (A <= 0 || j <= 0) continue;
		let M = Aa(u + (T - x) - c, A, h, m), N = d + (E - S) - l;
		M + A < C || M > C + f || N + j < d || N > d + p || (t.save(), t.beginPath(), t.rect(C, d, f, p), t.clip(), t.save(), a !== 1 && t.scale(a, a), De(t, n.chart, a === 1 ? {
			x: M,
			y: N,
			w: A,
			h: j
		} : {
			x: M / a,
			y: N / a,
			w: A / a,
			h: j / a
		}, D, 0, v, y, g ? R(g) : void 0, b), t.restore(), t.restore());
	}
}
var Os = "600 12px \"Meiryo UI\", \"Segoe UI\", sans-serif", ks = "11px \"Meiryo UI\", \"Segoe UI\", sans-serif", As = "#FFFFFF", js = "#BFBFBF", Ms = "#F2F2F2", Ns = "#404040", Ps = "#FFFFFF", Fs = "#000000", Is = "#A5A5A5", Ls = "#E7E6E6", Rs = "#A6A6A6", zs = "#C6C6C6";
function Bs(t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
	if (f <= 0 || p <= 0) return;
	let g = n.slicers;
	if (!g) return;
	let _ = ts(r, s), v = ns(i, o), y = Aa(u, f, h, m);
	for (let n of g) {
		let o = n.fromCol + 1, s = n.fromRow + 1, g = n.toCol + 1, b = n.toRow + 1, x = ts(r, o) + n.fromColOff * a / e, S = ns(i, s) + n.fromRowOff * a / e, C = ts(r, g) + n.toColOff * a / e, w = ns(i, b) + n.toRowOff * a / e, T = C - x, E = w - S;
		if (T <= 0 || E <= 0) continue;
		let D = Aa(u + (x - _) - c, T, h, m), O = d + (S - v) - l;
		D + T < y || D > y + f || O + E < d || O > d + p || (t.save(), t.beginPath(), t.rect(y, d, f, p), t.clip(), Vs(t, n.caption, n.items, D, O, T, E, a, n.style), t.restore());
	}
}
function Vs(e, t, n, r, i, a, o, s, c) {
	let l = c != null;
	e.fillStyle = c?.whole?.fillColor ?? As, e.fillRect(r, i, a, o);
	let u = l ? c.whole?.borderColor : js;
	u && (e.strokeStyle = u, e.lineWidth = 1, e.strokeRect(r + .5, i + .5, a - 1, o - 1));
	let d = Math.max(20 * s, 14), f = l ? c.header?.fillColor : Ms;
	f && (e.fillStyle = f, e.fillRect(r + 1, i + 1, a - 2, d)), e.fillStyle = c?.header?.fontColor ?? Ns, e.font = Us(c?.header, Os, s), e.textBaseline = "middle", e.textAlign = "left";
	let p = 6 * s;
	if (Gs(e, t, r + p, i + d / 2 + 1, a - 2 * p), n.length === 0) return;
	let m = Math.max(1, Math.round(2 * s)), h = 4 * s, g = r + h, _ = i + d + h, v = a - 2 * h, y = o - d - 2 * h;
	if (v <= 0 || y <= 0) return;
	let b = Math.max(18 * s, 16), x = Math.max(1, Math.floor((y + m) / (b + m))), S = Math.min(n.length, x), C = Math.min(b, (y - m * (S - 1)) / S);
	if (C <= 0) return;
	e.font = Ws(ks, s);
	let w = 8 * s;
	for (let t = 0; t < S; t++) {
		let r = n[t], i = _ + t * (C + m), a = r.selected, o = a ? c?.selectedItemWithData : c?.unselectedItemWithData, u = o?.fillColor ?? (a ? Ps : Ls), d = l ? o?.borderColor : a ? Is : zs;
		e.fillStyle = u, l ? (Hs(e, g, i, v, C, Math.min(4 * s, C / 4)), e.fill(), d && (e.strokeStyle = d, e.lineWidth = 1, e.stroke())) : (e.fillRect(g, i, v, C), d && (e.strokeStyle = d, e.lineWidth = 1, e.strokeRect(g + .5, i + .5, v - 1, C - 1))), e.font = Us(o, ks, s), e.fillStyle = o?.fontColor ?? (a ? Fs : Rs), Gs(e, r.name, g + w, i + C / 2 + 1, v - 2 * w);
	}
}
function Hs(e, t, n, r, i, a) {
	let o = Math.max(0, Math.min(a, r / 2, i / 2));
	e.beginPath(), e.moveTo(t + o, n), e.lineTo(t + r - o, n), e.quadraticCurveTo(t + r, n, t + r, n + o), e.lineTo(t + r, n + i - o), e.quadraticCurveTo(t + r, n + i, t + r - o, n + i), e.lineTo(t + o, n + i), e.quadraticCurveTo(t, n + i, t, n + i - o), e.lineTo(t, n + o), e.quadraticCurveTo(t, n, t + o, n), e.closePath();
}
function Us(e, t, n) {
	if (!e) return Ws(t, n);
	let r = Math.round((e.fontSize ?? 11) * n);
	return `${e.fontBold ? "bold " : ""}${r}px ${e.fontFamily ? `"${e.fontFamily}", "Segoe UI", sans-serif` : "\"Meiryo UI\", \"Segoe UI\", sans-serif"}`;
}
function Ws(e, t) {
	return e.replace(/(\d+(?:\.\d+)?)px/, (e, n) => `${Math.round(Number(n) * t)}px`);
}
function Gs(e, t, n, r, i) {
	if (i <= 0) return;
	let a = t;
	if (e.measureText(a).width > i) {
		for (; a.length > 0 && e.measureText(a + "…").width > i;) a = a.slice(0, -1);
		a = a.length > 0 ? a + "…" : "";
	}
	e.fillText(a, n, r);
}
//#endregion
export { zi as A, at as B, Ki as C, Ii as D, Li as E, Tt as F, it as H, wt as I, Et as L, xi as M, sn as N, Ni as O, St as P, Dt as R, qi as S, Ui as T, st as V, ds as _, Ma as a, Aa as b, $i as c, Xi as d, ea as f, wa as g, jo as h, Zi as i, Si as j, Bi as k, Wo as l, Ko as m, ba as n, Go as o, Zo as p, Sa as r, Ia as s, Uo as t, Qi as u, Qo as v, Hi as w, us as x, ka as y, dt as z };
