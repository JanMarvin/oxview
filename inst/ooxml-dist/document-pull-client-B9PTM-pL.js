import { $ as e, A as t, C as n, Ct as r, D as i, Dt as a, E as o, Ft as s, Gt as c, Ht as l, It as u, Jt as d, Kt as f, Lt as p, M as m, Mt as h, O as g, Q as _, Rt as v, St as y, T as b, Tt as x, Ut as S, Vt as C, _ as w, a as T, b as E, bt as D, c as O, dt as k, et as A, f as j, g as M, h as N, ht as P, i as ee, it as F, j as I, jt as te, k as ne, kt as re, l as ie, m as ae, mt as oe, o as se, ot as ce, p as le, pt as ue, q as de, qt as fe, rt as pe, s as me, tt as he, u as ge, ut as _e, vt as ve, wt as ye, x as be, xt as xe, yt as Se, zt as Ce } from "./hyperlink-Cxzhet30.js";
import { t as we } from "./cjk-fallback-bLI3z70h.js";
import { c as Te, f as Ee, i as De, l as Oe, m as ke, n as Ae, o as je, p as Me, s as Ne, t as L, u as Pe } from "./line-distribute-D1WNHKz_.js";
import { Ct as Fe, Et as Ie, Tt as Le, _t as Re, a as ze, c as Be, gt as Ve, l as He, lt as R, mt as Ue, n as We, pt as Ge } from "./plot-area-frame-DLTYKHNP.js";
import "./units-BzZ0gAxs.js";
import { i as Ke, l as qe } from "./pixel-budget-9P63Bsk5.js";
import { j as Je } from "./renderer-B4GZb5We.js";
import { r as Ye, s as Xe } from "./raster-target-ojDdQizC.js";
import { n as Ze, t as Qe } from "./line-metrics-B60C86uh.js";
import { a as $e, i as et, n as tt, o as z, r as nt, s as rt, t as it } from "./source-key-DIJG8BA0.js";
//#region packages/core/src/fonts/canvas-route.ts
function at(e, t) {
	let n = e.trim();
	if (!n) throw TypeError("Canvas font route requires a family list");
	return Object.freeze({
		familyList: n,
		scope: t,
		fingerprint: `canvas-font-route-v1:${encodeURIComponent(t)}:${encodeURIComponent(n)}`
	});
}
function ot(e, t, n, r) {
	if (!Number.isFinite(t) || t < 0) throw RangeError("Canvas font size must be finite and non-negative");
	if (!Number.isFinite(n) || n < 1 || n > 1e3) throw RangeError("Canvas font weight must be finite and between 1 and 1000");
	if (!e.familyList.trim()) throw TypeError("Canvas font route requires a family list");
	return `${r} ${n} ${t}px ${e.familyList}`;
}
//#endregion
//#region packages/core/src/fonts/canvas-font-box.ts
var st = "__ooxml_missing_font_control_6f33c9b4__";
function ct(e) {
	let t = "";
	for (let n of e) {
		let e = n.codePointAt(0) ?? 0;
		n === "\"" || n === "\\" || e <= 31 || e === 127 ? t += `\\${e.toString(16)} ` : t += n;
	}
	return `"${t}"`;
}
function lt(e, t, n, r) {
	return `${r} ${n} ${t}px ${ct(e)}, ${ct(st)}, serif`;
}
function ut(e) {
	return [
		e.width,
		e.actualBoundingBoxAscent,
		e.actualBoundingBoxDescent
	];
}
function dt(e, t, n) {
	let r = t.trim(), i = n.text, a = n.emPx ?? 100, o = n.weight ?? 400, s = n.style ?? "normal";
	if (!r || r === st || !i || !Number.isFinite(a) || a <= 0 || !Number.isInteger(o) || o < 1 || o > 1e3) return null;
	let c = e.font;
	try {
		e.font = lt(r, a, o, s);
		let t = e.measureText(i);
		e.font = lt(st, a, o, s);
		let n = e.measureText(i), c = ut(t), l = ut(n);
		if (c.every((e, t) => Object.is(e, l[t]))) return null;
		let u = t.fontBoundingBoxAscent, d = t.fontBoundingBoxDescent;
		return Number.isFinite(u) && Number.isFinite(d) && u + d > 0 ? (u + d) / a : null;
	} finally {
		e.font = c;
	}
}
//#endregion
//#region packages/core/src/shape/drawingml-shape.ts
function ft(e, t, n) {
	let { x: r, y: i, w: a, h: o } = t.rect, { rotationDeg: s, flipH: c, flipV: l } = t.transform;
	e.save();
	try {
		(s !== 0 || c || l) && (e.translate(r + a / 2, i + o / 2), s !== 0 && e.rotate(s * Math.PI / 180), e.scale(c ? -1 : 1, l ? -1 : 1), e.translate(-(r + a / 2), -(i + o / 2))), n();
	} finally {
		e.restore();
	}
}
function pt(e, t) {
	let { x: n, y: r, w: i, h: o } = t.rect;
	if (e.beginPath(), t.geometry.kind === "preset") {
		let s = [...t.geometry.adjustments];
		a(e, t.geometry.name, n, r, i, o, s) || Te(e, t.geometry.name, n, r, i, o, s[0], s[1], s[2], s[3]);
	} else Pe(e, t.geometry.subpaths, n, r, i, o);
	e.clip();
}
var mt = new Set([
	"line",
	"straightconnector1",
	"bentconnector2",
	"bentconnector3",
	"bentconnector4",
	"bentconnector5",
	"curvedconnector2",
	"curvedconnector3",
	"curvedconnector4",
	"curvedconnector5"
]), ht = new Set([
	"callout1",
	"callout2",
	"callout3",
	"bordercallout1",
	"bordercallout2",
	"bordercallout3",
	"accentcallout1",
	"accentcallout2",
	"accentcallout3",
	"accentbordercallout1",
	"accentbordercallout2",
	"accentbordercallout3"
]);
function gt(e) {
	return ht.has(e) || e === "line" || e === "straightconnector1" || e.startsWith("bentconnector");
}
function _t(e, t, n, r, i) {
	if (Ge(e, t, n), t.fill) {
		let n = Ve(t.fill, e, r.x, r.y, r.w, r.h, i);
		n && (e.strokeStyle = n);
	}
}
function vt(e, t, n, r) {
	let i = t.stroke;
	if (!i || !mt.has(n) && !ht.has(n)) return;
	let { x: a, y: o, w: s, h: c } = t.rect, l = i.fill ? Ve(i.fill, e, a, o, s, c, t.transform.rotationDeg) ?? void 0 : void 0, u = re(n, a, o, s, c, [...t.geometry.kind === "preset" ? t.geometry.adjustments : []]);
	if (u) {
		if (gt(n) && u.vertices.length >= 2 && (i.headEnd || i.tailEnd)) {
			let n = u.vertices.map((e) => ({
				x: e.x,
				y: e.y
			}));
			i.tailEnd && (n[n.length - 1] = Ne(n[n.length - 1], n[n.length - 2], je(i.tailEnd, i, r))), i.headEnd && (n[0] = Ne(n[0], n[1], je(i.headEnd, i, r))), _t(e, i, r, t.rect, t.transform.rotationDeg), e.beginPath(), e.moveTo(n[0].x, n[0].y);
			for (let t = 1; t < n.length; t++) e.lineTo(n[t].x, n[t].y);
			e.stroke();
		}
		i.tailEnd && De(e, u.end.x, u.end.y, u.end.angle, i.tailEnd, i, r, l), i.headEnd && De(e, u.start.x, u.start.y, u.start.angle, i.headEnd, i, r, l);
	}
}
function yt(e, t, n) {
	if (t.geometry.kind !== "custom") return;
	let r = t.stroke;
	if (!r || !r.headEnd && !r.tailEnd) return;
	let i = Oe(t.geometry.subpaths), { x: a, y: o, w: s, h: c } = t.rect, l = r.fill ? Ve(r.fill, e, a, o, s, c, t.transform.rotationDeg) ?? void 0 : void 0;
	i.start && r.headEnd && De(e, a + i.start.x * s, o + i.start.y * c, Math.atan2(i.start.dy * c, i.start.dx * s), r.headEnd, r, n, l), i.end && r.tailEnd && De(e, a + i.end.x * s, o + i.end.y * c, Math.atan2(i.end.dy * c, i.end.dx * s), r.tailEnd, r, n, l);
}
function bt(e, t, n) {
	let { x: r, y: i, w: a, h: o } = t.rect;
	ft(e, t, () => {
		let s = Ve(t.fill, e, r, i, a, o, t.transform.rotationDeg), c = t.stroke, l = c ? () => {
			_t(e, c, n, t.rect, t.transform.rotationDeg), e.stroke();
		} : null;
		if (t.geometry.kind === "preset") {
			let u = t.geometry.name.toLowerCase(), d = [...t.geometry.adjustments], f = gt(u) && !!(c?.headEnd || c?.tailEnd);
			te(u) && h(e, u, r, i, a, o, d, s, l, () => {}, f ? { skipTrailingStroke: !0 } : void 0) || (e.beginPath(), Te(e, u, r, i, a, o, d[0], d[1], d[2], d[3]), s && u !== "arc" && (e.fillStyle = s, u === "donut" || u === "smileyface" || u === "frame" ? e.fill("evenodd") : e.fill()), l && l()), vt(e, t, u, n);
		} else e.beginPath(), Pe(e, t.geometry.subpaths, r, i, a, o), s && (e.fillStyle = s, e.fill()), l && l(), yt(e, t, n);
	});
}
//#endregion
//#region packages/core/src/text/number-format.ts
var xt = [
	[1e3, "M"],
	[900, "CM"],
	[500, "D"],
	[400, "CD"],
	[100, "C"],
	[90, "XC"],
	[50, "L"],
	[40, "XL"],
	[10, "X"],
	[9, "IX"],
	[5, "V"],
	[4, "IV"],
	[1, "I"]
];
function St(e) {
	let t = "", n = e;
	for (let [e, r] of xt) for (; n >= e;) t += r, n -= e;
	return t;
}
function Ct(e, t) {
	let n = t.length, r = Math.floor((e - 1) / n) + 1;
	return t[(e - 1) % n].repeat(r);
}
var wt = Array.from({ length: 26 }, (e, t) => String.fromCharCode(65 + t)), Tt = /* @__PURE__ */ "أ.ب.ت.ث.ج.ح.خ.د.ذ.ر.ز.س.ش.ص.ض.ط.ظ.ع.غ.ف.ق.ك.ل.م.ن.ه.و.ي".split("."), Et = /* @__PURE__ */ "أ.ب.ج.د.ه.و.ز.ح.ط.ي.ك.ل.م.ن.س.ع.ف.ص.ق.ر.ش.ت.ث.خ.ذ.ض.غ.ظ".split("."), Dt = [
	"א",
	"ב",
	"ג",
	"ד",
	"ה",
	"ו",
	"ז",
	"ח",
	"ט",
	"י",
	"כ",
	"ל",
	"מ",
	"נ",
	"ס",
	"ע",
	"פ",
	"צ",
	"ק",
	"ר",
	"ש",
	"ת"
], Ot = [
	...Ft(1072, 1080),
	...Ft(1082, 1087),
	...Ft(1088, 1097),
	"ы",
	"э",
	"ю",
	"я"
], kt = [
	...Ft(1040, 1048),
	...Ft(1050, 1055),
	...Ft(1056, 1065),
	"Ы",
	"Э",
	"Ю",
	"Я"
], At = [
	"ก",
	"ข",
	"ค",
	...Ft(3591, 3619),
	"ล",
	...Ft(3623, 3630)
], jt = [
	"ㄱ",
	"ㄴ",
	"ㄷ",
	"ㄹ",
	"ㅁ",
	"ㅂ",
	"ㅅ",
	"ㅇ",
	"ㅈ",
	"ㅊ",
	"ㅋ",
	"ㅌ",
	"ㅍ",
	"ㅎ"
], Mt = [
	"가",
	"나",
	"다",
	"라",
	"마",
	"바",
	"사",
	"아",
	"자",
	"차",
	"카",
	"타",
	"파",
	"하"
], Nt = Ft(2325, 2361), Pt = [
	...Ft(2309, 2324),
	"अं",
	"अः"
];
function Ft(e, t) {
	let n = [];
	for (let r = e; r <= t; r++) n.push(String.fromCodePoint(r));
	return n;
}
var It = /* @__PURE__ */ "ア.イ.ウ.エ.オ.カ.キ.ク.ケ.コ.サ.シ.ス.セ.ソ.タ.チ.ツ.テ.ト.ナ.ニ.ヌ.ネ.ノ.ハ.ヒ.フ.ヘ.ホ.マ.ミ.ム.メ.モ.ヤ.ユ.ヨ.ラ.リ.ル.レ.ロ.ワ.ヰ.ヱ.ヲ.ン".split("."), Lt = [
	...Ft(65393, 65436),
	"ｦ",
	"ﾝ"
];
function Rt(e) {
	return e <= 20 ? String.fromCodePoint(9312 + (e - 1)) : String(e);
}
function zt(e, t) {
	return String(e).split("").map((e) => t[e.charCodeAt(0) - 48]).join("");
}
var Bt = Ft(65296, 65305), Vt = Ft(3664, 3673), Ht = Ft(2406, 2415), Ut = [
	"〇",
	"一",
	"二",
	"三",
	"四",
	"五",
	"六",
	"七",
	"八",
	"九"
], Wt = [
	"영",
	"일",
	"이",
	"삼",
	"사",
	"오",
	"육",
	"칠",
	"팔",
	"구"
], Gt = [
	"零",
	"一",
	"二",
	"三",
	"四",
	"五",
	"六",
	"七",
	"八",
	"九"
], Kt = [
	"○",
	"一",
	"二",
	"三",
	"四",
	"五",
	"六",
	"七",
	"八",
	"九"
];
function qt(e, t) {
	if (e < 10) return t[e];
	if (e < 100) {
		let n = Math.floor(e / 10), r = e % 10, i = n === 1 ? "十" : t[n] + "十";
		return r === 0 ? i : i + t[r];
	}
	return zt(e, t);
}
function Jt(e, t) {
	switch (t) {
		case "upperRoman": return e >= 1 ? St(e) : String(e);
		case "lowerRoman": return e >= 1 ? St(e).toLowerCase() : String(e);
		case "upperLetter": return e >= 1 ? Ct(e, wt) : String(e);
		case "lowerLetter": return e >= 1 ? Ct(e, wt).toLowerCase() : String(e);
		case "arabicAlpha": return e >= 1 ? Ct(e, Tt) : String(e);
		case "arabicAbjad": return e >= 1 ? Ct(e, Et) : String(e);
		case "russianLower": return e >= 1 ? Ct(e, Ot) : String(e);
		case "russianUpper": return e >= 1 ? Ct(e, kt) : String(e);
		case "thaiLetters": return e >= 1 ? Ct(e, At) : String(e);
		case "chosung": return e >= 1 ? Ct(e, jt) : String(e);
		case "ganada": return e >= 1 ? Ct(e, Mt) : String(e);
		case "hindiVowels": return e >= 1 ? Ct(e, Nt) : String(e);
		case "hindiConsonants": return e >= 1 ? Ct(e, Pt) : String(e);
		case "aiueoFullWidth": return e >= 1 ? Ct(e, It) : String(e);
		case "aiueo": return e >= 1 ? Ct(e, Lt) : String(e);
		case "decimalEnclosedCircle": return e >= 1 ? Rt(e) : String(e);
		case "hebrew1": return e >= 1 ? Qt(e) : String(e);
		case "hebrew2": return e >= 1 ? $t(e) : String(e);
		case "hex": return e >= 1 ? e.toString(16).toUpperCase() : String(e);
		case "numberInDash": return e >= 1 ? `- ${e} -` : String(e);
		case "decimalZero": return e >= 1 && e <= 9 ? `0${e}` : String(e);
		case "decimalFullWidth": return e >= 1 ? zt(e, Bt) : String(e);
		case "decimalHalfWidth": return String(e);
		case "thaiNumbers": return e >= 1 ? zt(e, Vt) : String(e);
		case "hindiNumbers": return e >= 1 ? zt(e, Ht) : String(e);
		case "ideographDigital":
		case "japaneseDigitalTenThousand": return e >= 1 ? zt(e, Ut) : String(e);
		case "koreanDigital": return e >= 1 ? zt(e, Wt) : String(e);
		case "koreanDigital2": return e >= 1 ? zt(e, Gt) : String(e);
		case "taiwaneseDigital": return e >= 1 ? zt(e, Kt) : String(e);
		case "chineseCounting": return e >= 1 ? qt(e, Ut) : String(e);
		case "taiwaneseCounting": return e >= 1 ? qt(e, Kt) : String(e);
		case "chineseCountingThousand": return e >= 1 ? ln(e, tn) : String(e);
		case "taiwaneseCountingThousand": return e >= 1 ? ln(e, nn) : String(e);
		case "chineseLegalSimplified": return e >= 1 ? ln(e, an) : String(e);
		case "ideographLegalTraditional": return e >= 1 ? ln(e, sn) : String(e);
		case "japaneseCounting": return e >= 1 ? ln(e, en) : String(e);
		case "japaneseLegal": return e >= 1 ? ln(e, on) : String(e);
		case "koreanCounting": return e >= 1 ? ln(e, rn) : String(e);
		case "koreanLegal": return e >= 1 ? fn(e) : String(e);
		default: return String(e);
	}
}
var Yt = [
	"",
	"א",
	"ב",
	"ג",
	"ד",
	"ה",
	"ו",
	"ז",
	"ח",
	"ט"
], Xt = [
	"",
	"י",
	"כ",
	"ל",
	"מ",
	"נ",
	"ס",
	"ע",
	"פ",
	"צ"
], Zt = [
	"",
	"ק",
	"ר",
	"ש",
	"ת",
	"ך",
	"ם",
	"ן",
	"ף",
	"ץ"
];
function Qt(e) {
	let t = "", n = e, r = Math.floor(n / 1e3);
	n %= 1e3;
	let i = Math.floor(n / 100);
	if (n %= 100, r > 0 && (t += Yt[r % 10]), t += Zt[i], n === 15) return t + "טו";
	if (n === 16) return t + "טז";
	let a = Math.floor(n / 10), o = n % 10;
	return t += Xt[a], t += Yt[o], t;
}
function $t(e) {
	let t = Dt.length, n = Math.floor((e - 1) / t);
	return Dt[e - t * n - 1] + "ת".repeat(n);
}
var en = {
	digits: Gt,
	ten: "十",
	hundred: "百",
	thousand: "千",
	myriad: "万",
	elideOne: !0,
	insertZero: !1
}, tn = {
	...en,
	elideOne: !1,
	insertZero: !0
}, nn = { ...tn }, rn = {
	digits: [
		"영",
		"일",
		"이",
		"삼",
		"사",
		"오",
		"육",
		"칠",
		"팔",
		"구"
	],
	ten: "십",
	hundred: "백",
	thousand: "천",
	myriad: "만",
	elideOne: !0,
	insertZero: !1
}, an = {
	digits: [
		"零",
		"壹",
		"贰",
		"叁",
		"肆",
		"伍",
		"陆",
		"柒",
		"捌",
		"玖"
	],
	ten: "拾",
	hundred: "佰",
	thousand: "仟",
	myriad: "万",
	elideOne: !1,
	insertZero: !0
}, on = {
	digits: [
		"零",
		"壱",
		"弐",
		"参",
		"四",
		"伍",
		"六",
		"七",
		"八",
		"九"
	],
	ten: "拾",
	hundred: "百",
	thousand: "阡",
	myriad: "萬",
	elideOne: !1,
	insertZero: !1
}, sn = {
	digits: [
		"零",
		"壹",
		"貳",
		"參",
		"肆",
		"伍",
		"陸",
		"柒",
		"捌",
		"玖"
	],
	ten: "拾",
	hundred: "佰",
	thousand: "仟",
	myriad: "萬",
	elideOne: !1,
	insertZero: !1
};
function cn(e, t, n) {
	let r = Math.floor(e / 1e3) % 10, i = Math.floor(e / 100) % 10, a = Math.floor(e / 10) % 10, o = e % 10, s = [
		{
			digit: r,
			unit: t.thousand
		},
		{
			digit: i,
			unit: t.hundred
		},
		{
			digit: a,
			unit: t.ten
		},
		{
			digit: o,
			unit: ""
		}
	], c = "", l = !1, u = !1;
	for (let { digit: e, unit: r } of s) {
		if (e === 0) {
			l && (u = !0);
			continue;
		}
		u &&= (t.insertZero && (c += t.digits[0]), !1), n && e === 1 && r ? c += r : c += t.digits[e] + r, l = !0;
	}
	return c;
}
function ln(e, t) {
	if (e >= 1e8) {
		let n = Math.floor(e / 1e8), r = e % 1e8, i = ln(n, t) + "億";
		return r === 0 ? i : i + (t.insertZero && r < 1e7 ? t.digits[0] : "") + ln(r, t);
	}
	let n = Math.floor(e / 1e4), r = e % 1e4, i = "";
	return n > 0 && (i += cn(n, t, t.elideOne) + t.myriad), r > 0 && (t.insertZero && n > 0 && r < 1e3 && (i += t.digits[0]), i += cn(r, t, t.elideOne)), i;
}
var un = [
	"",
	"하나",
	"둘",
	"셋",
	"넷",
	"다섯",
	"여섯",
	"일곱",
	"여덟",
	"아홉"
], dn = [
	"",
	"열",
	"스물",
	"서른",
	"마흔",
	"쉰",
	"예순",
	"일흔",
	"여든",
	"아흔"
];
function fn(e) {
	if (e >= 100) return String(e);
	let t = Math.floor(e / 10), n = e % 10;
	return dn[t] + un[n];
}
//#endregion
//#region packages/core/src/text/field-format-switch.ts
var pn = {
	Arabic: "decimal",
	ArabicDash: "numberInDash",
	Hex: "hex",
	Roman: "upperRoman",
	roman: "lowerRoman",
	ALPHABETIC: "upperLetter",
	alphabetic: "lowerLetter",
	ARABICABJAD: "arabicAbjad",
	ARABICALPHA: "arabicAlpha",
	HEBREW1: "hebrew1",
	HEBREW2: "hebrew2",
	HINDIARABIC: "hindiNumbers",
	HINDILETTER1: "hindiVowels",
	HINDILETTER2: "hindiConsonants",
	THAIARABIC: "thaiNumbers",
	THAILETTER: "thaiLetters",
	CHOSUNG: "chosung",
	GANADA: "ganada",
	DBCHAR: "decimalFullWidth",
	SBCHAR: "decimalHalfWidth"
};
function mn(e) {
	let t = /\\\*\s+(\S+)/g, n;
	for (; (n = t.exec(e)) !== null;) {
		let e = pn[n[1]];
		if (e) return e;
	}
	return null;
}
//#endregion
//#region packages/core/src/text/date-time-picture.ts
var hn = [
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
], gn = [
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
], _n = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
], vn = [
	"Sun",
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat"
], yn = (e) => e < 10 ? `0${e}` : `${e}`;
function bn(e) {
	let t = /\\@\s*"([^"]*)"/.exec(e);
	if (t) return t[1];
	let n = /\\@\s*(\S+)/.exec(e);
	return n ? n[1] : null;
}
function xn(e, t) {
	let n = t.getFullYear(), r = t.getMonth(), i = t.getDate(), a = t.getDay(), o = t.getHours(), s = o % 12 == 0 ? 12 : o % 12, c = t.getMinutes(), l = t.getSeconds(), u = o >= 12, d = "", f = 0, p = e.length;
	for (; f < p;) {
		let t = e[f];
		if (t === "'") {
			f++;
			let t = "";
			for (; f < p;) {
				if (e[f] === "'") {
					if (e[f + 1] === "'") {
						t += "'", f += 2;
						continue;
					}
					f++;
					break;
				}
				t += e[f++];
			}
			d += t;
			continue;
		}
		if (/[A-Za-z]/.test(t)) {
			let u = f;
			for (; u < p && e[u] === t;) u++;
			let m = e.slice(f, u).length, h = t.toLowerCase(), g = null;
			if (t === "y" || t === "Y" ? g = m >= 4 ? String(n).padStart(4, "0") : yn(n % 100) : t === "M" ? g = m >= 4 ? hn[r] : m === 3 ? gn[r] : m === 2 ? yn(r + 1) : String(r + 1) : h === "d" ? g = m >= 4 ? _n[a] : m === 3 ? vn[a] : m === 2 ? yn(i) : String(i) : t === "H" ? g = m >= 2 ? yn(o) : String(o) : t === "h" ? g = m >= 2 ? yn(s) : String(s) : t === "m" ? g = m >= 2 ? yn(c) : String(c) : t === "s" ? g = m >= 2 ? yn(l) : String(l) : (h === "a" || h === "p") && (g = null), g !== null) {
				d += g, f = u;
				continue;
			}
			if (!(h === "a" || h === "p")) return null;
		}
		let m = /^([AaPp])([Mm])?\/([AaPp])([Mm])?/.exec(e.slice(f));
		if (m) {
			let e = m[2] !== void 0;
			d += e ? u ? "PM" : "AM" : u ? "P" : "A", f += m[0].length;
			continue;
		}
		d += t, f++;
	}
	return d;
}
//#endregion
//#region packages/core/src/fonts/resource-metrics.ts
function Sn(e) {
	return e.trim().toLowerCase();
}
//#endregion
//#region packages/core/src/text/font-advance-metrics.ts
var Cn = [{
	test: (e) => e === "georgia",
	biasEm: .0105
}];
function wn(e) {
	return (e ?? "").trim().replace(/^["']|["']$/g, "").replace(/\s+/g, " ").toLowerCase();
}
function Tn(e) {
	let t = wn(e);
	for (let e of Cn) if (e.test(t)) return e.biasEm;
	return 0;
}
//#endregion
//#region packages/docx/src/layout/validation-policy.ts
function En() {
	let e = globalThis.process?.env;
	return e ? e.VITEST !== void 0 || e.NODE_ENV === "test" : !1;
}
var Dn = En();
function On() {
	return Dn;
}
//#endregion
//#region packages/docx/src/layout/plain-data.ts
var kn = class extends TypeError {}, An = /* @__PURE__ */ new WeakSet(), jn = /* @__PURE__ */ new WeakSet();
function Mn(e, t, n = /* @__PURE__ */ new WeakSet(), r = /* @__PURE__ */ new WeakSet()) {
	if (e == null || typeof e == "string" || typeof e == "boolean") return;
	if (typeof e == "number") {
		if (!Number.isFinite(e)) throw TypeError(`${t} must contain finite numbers`);
		return;
	}
	if (typeof e != "object" || n.has(e)) throw TypeError(`${t} must be structured-clone-safe plain data`);
	if (r.has(e) || An.has(e)) return;
	let i = Object.getPrototypeOf(e);
	if (!Array.isArray(e) && i !== Object.prototype && i !== null) throw TypeError(`${t} must be structured-clone-safe plain data`);
	if (Object.getOwnPropertySymbols(e).length !== 0) throw TypeError(`${t} must contain only enumerable string data properties`);
	n.add(e);
	try {
		for (let i of Object.getOwnPropertyNames(e)) {
			if (Array.isArray(e) && i === "length") continue;
			if (Array.isArray(e) && String(Number(i)) !== i) throw TypeError(`${t}.${i} must be an array index`);
			let a = Object.getOwnPropertyDescriptor(e, i);
			if (!a || !a.enumerable || !("value" in a)) throw TypeError(`${t}.${i} must be an enumerable data property`);
			Mn(a.value, `${t}.${i}`, n, r);
		}
	} finally {
		n.delete(e);
	}
	r.add(e);
}
function Nn(e, t = /* @__PURE__ */ new WeakSet()) {
	if (typeof e != "object" || !e || t.has(e)) {
		if (typeof e == "number" && !Number.isFinite(e)) throw new kn("must contain finite numbers");
		return e;
	}
	if (An.has(e) || jn.has(e)) return e;
	if (t.add(e), Array.isArray(e)) {
		for (let n = 0; n < e.length; n += 1) Nn(e[n], t);
		for (let n in e) String(Number(n)) !== n && Object.prototype.hasOwnProperty.call(e, n) && Nn(e[n], t);
	} else for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && Nn(e[n], t);
	return Object.freeze(e), jn.add(e), e;
}
function Pn(e, t) {
	if (typeof e != "object" || !e) {
		if (typeof e == "function" || typeof e == "symbol") throw TypeError("value must be structured-clone-safe plain data");
		if (typeof e == "number" && !Number.isFinite(e)) throw new kn("must contain finite numbers");
		return e;
	}
	if (Object.isFrozen(e) && An.has(e)) return e;
	let n = t.get(e);
	if (n !== void 0) return n;
	if (Array.isArray(e)) {
		let n = Array(e.length);
		t.set(e, n);
		for (let r = 0; r < e.length; r += 1) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = Pn(e[r], t));
		return Object.freeze(n), n;
	}
	let r = Object.getPrototypeOf(e);
	if (r !== Object.prototype && r !== null) throw TypeError("value must be structured-clone-safe plain data");
	let i = {};
	t.set(e, i);
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
		let r = Pn(e[n], t);
		n === "__proto__" ? Object.defineProperty(i, n, {
			value: r,
			enumerable: !0,
			writable: !0,
			configurable: !0
		}) : i[n] = r;
	}
	return Object.freeze(i), i;
}
function B(e, t) {
	if (typeof e == "object" && e && An.has(e)) return e;
	On() && In(e, t);
	try {
		let t = Pn(e, /* @__PURE__ */ new Map());
		return typeof t == "object" && t && An.add(t), t;
	} catch (e) {
		let n = e instanceof kn ? e.message : "must be structured-clone-safe plain data";
		throw TypeError(`${t} ${n}`);
	}
}
function Fn(e, t) {
	return On() && In(e, t), Ln(e, /* @__PURE__ */ new WeakSet());
}
function In(e, t) {
	try {
		structuredClone(e);
	} catch {
		throw TypeError(`${t} must be structured-clone-safe plain data`);
	}
	Mn(e, t);
}
function Ln(e, t) {
	if (typeof e != "object" || !e || t.has(e)) {
		if (typeof e == "number" && !Number.isFinite(e)) throw new kn("must contain finite numbers");
		return e;
	}
	if (An.has(e)) return e;
	if (t.add(e), Array.isArray(e)) {
		for (let n = 0; n < e.length; n += 1) Ln(e[n], t);
		for (let n in e) String(Number(n)) !== n && Object.prototype.hasOwnProperty.call(e, n) && Ln(e[n], t);
	} else for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && Ln(e[n], t);
	return Object.freeze(e), An.add(e), e;
}
//#endregion
//#region packages/docx/src/layout/paint-resources.ts
function Rn(e, t) {
	if (typeof e != "string" || e.trim().length === 0) throw TypeError(`${t} must be a non-empty string`);
}
function zn(e, t) {
	if (!Number.isFinite(e) || e < 0) throw TypeError(`${t} must be finite and non-negative`);
}
function Bn(e, t) {
	if (!Number.isFinite(e)) throw TypeError(`${t} must be finite`);
}
function Vn(e, t) {
	if (!Number.isFinite(e) || e < 0 || e > 1) throw TypeError(`${t} must be between 0 and 1`);
}
function Hn(e, t) {
	zn(e.widthPt, `${t}.widthPt`), zn(e.heightPt, `${t}.heightPt`);
}
function Un(e) {
	switch (Rn(e.resourceKey, "resourceKey"), e.kind) {
		case "image":
		case "picture-bullet":
			if (e.documentOrder !== void 0 && (!Number.isSafeInteger(e.documentOrder) || e.documentOrder < 0)) throw TypeError("documentOrder must be a non-negative safe integer");
			if (Rn(e.partPath, "partPath"), Rn(e.mimeType, "mimeType"), e.svgImagePath !== void 0 && Rn(e.svgImagePath, "svgImagePath"), Hn(e.intrinsicSize, "intrinsicSize"), e.alpha !== void 0 && Vn(e.alpha, "alpha"), e.rotation !== void 0 && !Number.isFinite(e.rotation)) throw TypeError("rotation must be finite");
			e.srcRect !== void 0 && (Bn(e.srcRect.l, "srcRect.l"), Bn(e.srcRect.t, "srcRect.t"), Bn(e.srcRect.r, "srcRect.r"), Bn(e.srcRect.b, "srcRect.b"));
			break;
		case "chart":
			Hn(e.intrinsicSize, "intrinsicSize");
			break;
		case "math": break;
		default: throw TypeError(`Unknown paint resource kind: ${String(e)}`);
	}
}
function Wn(e) {
	return Un(e), B(e, `paint resource ${e.resourceKey}`);
}
function Gn(e, t, n) {
	return /* @__PURE__ */ Error(`Paint resource kind mismatch for ${e}: expected ${t}, got ${n}`);
}
function Kn(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) {
		if (t.has(n.resourceKey)) throw Error(`Duplicate paint resource key: ${n.resourceKey}`);
		t.add(n.resourceKey);
	}
	let n = e.map(Wn).sort((e, t) => e.resourceKey.localeCompare(t.resourceKey));
	return qn(Object.freeze(n));
}
function qn(e) {
	if (!Object.isFrozen(e)) throw TypeError("Owned paint descriptors must be sealed");
	let t = null;
	for (let n of e) {
		if (Un(n), !Object.isFrozen(n)) throw TypeError(`Owned paint descriptor must be sealed: ${n.resourceKey}`);
		if (t !== null && n.resourceKey.localeCompare(t) <= 0) throw Error(`Owned paint descriptors must have unique sorted keys: ${n.resourceKey}`);
		t = n.resourceKey;
	}
	let n = e, r = new Map(n.map((e) => [e.resourceKey, e])), i = Object.freeze(n.map((e) => e.resourceKey));
	return Object.freeze({
		keys: i,
		descriptors: n,
		resolve(e, t) {
			let n = r.get(e);
			if (!n) throw Error(`Unknown paint resource: ${e}`);
			if (n.kind !== t) throw Gn(e, t, n.kind);
			return n;
		}
	});
}
//#endregion
//#region packages/docx/src/layout/production-paint-resources.ts
function Jn(e) {
	return nt(e);
}
function Yn(e, t, n, r = {}) {
	return {
		kind: e,
		resourceKey: t,
		partPath: n,
		...r.svgImagePath === void 0 ? {} : { svgImagePath: r.svgImagePath },
		...r.srcRect == null ? {} : { srcRect: { ...r.srcRect } },
		...r.rotation === void 0 ? {} : { rotation: r.rotation },
		...r.flipH === void 0 ? {} : { flipH: r.flipH },
		...r.flipV === void 0 ? {} : { flipV: r.flipV },
		...r.alpha === void 0 ? {} : { alpha: r.alpha },
		...r.colorReplaceFrom === void 0 ? {} : { colorReplaceFrom: r.colorReplaceFrom },
		...r.duotone === void 0 ? {} : { duotone: { ...r.duotone } }
	};
}
function Xn(e, t, n, r) {
	let i = [], a = [], o = [], s = (e, t, n, r, o, s, c = {}) => {
		let l = et(t, n);
		i.push(Yn(e, l, n, c)), a.push({
			resourceKey: l,
			mimeType: r,
			widthPt: o,
			heightPt: s
		});
	}, c = (e, t) => {
		if (e.type === "image") {
			s("image", t, e.imagePath, e.mimeType, e.widthPt, e.heightPt, e);
			return;
		}
		if (e.type === "chart") {
			o.push({
				kind: "chart",
				resourceKey: Jn(t),
				intrinsicSize: {
					widthPt: e.widthPt,
					heightPt: e.heightPt
				},
				model: e.chart
			});
			return;
		}
		if (e.type !== "shape") return;
		let n = e;
		n.fill?.fillType === "image" && s("image", t, n.fill.imagePath, n.fill.mimeType, n.widthPt, n.heightPt, {
			...n.fill.svgImagePath === void 0 ? {} : { svgImagePath: n.fill.svgImagePath },
			...n.fill.srcRect === void 0 ? {} : { srcRect: { ...n.fill.srcRect } },
			...n.fill.alpha === void 0 ? {} : { alpha: n.fill.alpha },
			...n.fill.duotone === void 0 ? {} : { duotone: n.fill.duotone }
		});
		let r = `${t.story}:${t.storyInstance}:${t.path.join(".")}`;
		if (n.textBoxContent !== void 0) {
			f(n.textBoxContent, "textbox", r);
			return;
		}
		n.textBlocks?.forEach((e, t) => {
			if (e.imagePath) {
				if (!e.mimeType || e.imageWidthPt == null || e.imageHeightPt == null) throw Error("Text-box compatibility image requires complete metadata");
				s("image", {
					story: "textbox",
					storyInstance: r,
					path: [t, 0]
				}, e.imagePath, e.mimeType, e.imageWidthPt, e.imageHeightPt, { svgImagePath: e.svgImagePath });
			}
		});
	}, l = (e, t, n, r) => {
		e.rows.forEach((e, i) => e.cells.forEach((e, a) => {
			f(e.content, t, n, [
				...r,
				i,
				a
			]);
		}));
	}, u = (e, t, n) => {
		if (e) for (let r of [
			"default",
			"first",
			"even"
		]) {
			let i = e[r];
			i && f(i.body, t, n ? `${n}:${r}` : r);
		}
	}, d = (e, n) => {
		let i = e.numbering;
		if (i?.picBulletImagePath) {
			let t = r?.(e), a = i.picBulletWidthPt ?? t?.widthPt, o = i.picBulletHeightPt ?? t?.heightPt;
			if (!i.picBulletMimeType || a == null || o == null) throw Error("Picture bullet requires complete metadata");
			s("picture-bullet", n, i.picBulletImagePath, i.picBulletMimeType, a, o);
		}
		let a = t?.paragraphAcquisitionInput(e, n).runs ?? e.runs, o = 0;
		a.forEach((t, r) => {
			if (t.type === "unavailableDrawing") return;
			let i = e.runs[o++];
			i && (i.type === "image" || i.type === "chart" || i.type === "shape") && c(i, {
				...n,
				path: [...n.path, r]
			});
		});
	}, f = (e, t, n, r = []) => {
		e.forEach((e, i) => {
			let a = [...r, i];
			e.type === "paragraph" ? d(e, {
				story: t,
				storyInstance: n,
				path: a
			}) : e.type === "table" ? l(e, t, n, a) : e.type === "sectionBreak" && (u(e.headers, "header", `section:${i}`), u(e.footers, "footer", `section:${i}`));
		});
	};
	f(e.body, "body", "body"), u(e.headers, "header"), u(e.footers, "footer");
	for (let t of e.footnotes ?? []) f(t.content, "footnote", t.id);
	for (let t of e.endnotes ?? []) f(t.content, "endnote", t.id);
	let p = new Map(a.map((e) => [e.resourceKey, e]));
	if (p.size !== a.length) throw Error("Duplicate image resource key");
	for (let [e, t] of i.entries()) {
		let n = p.get(t.resourceKey);
		if (!n) throw Error(`Missing layout image metadata: ${t.resourceKey}`);
		o.push({
			...t,
			documentOrder: e,
			mimeType: n.mimeType,
			intrinsicSize: {
				widthPt: n.widthPt,
				heightPt: n.heightPt
			}
		});
	}
	for (let e of n) o.push({
		kind: "math",
		resourceKey: e.resourceKey
	});
	return {
		imageMetadata: a,
		descriptors: o
	};
}
function Zn(e, t, n, r) {
	let i = Xn(e, t, n, r);
	return Object.freeze({
		imageMetadata: Object.freeze(i.imageMetadata.map((e) => Object.freeze({ ...e }))),
		paintResources: Kn(i.descriptors)
	});
}
//#endregion
//#region packages/docx/src/layout/resources.ts
function Qn(e, t = "body", n = "body") {
	let r = [], i = (e, a = []) => {
		e.forEach((e, o) => {
			let s = [...a, o];
			e.type === "paragraph" ? e.runs.forEach((e, i) => {
				e.type === "math" && r.push({
					nodes: e.nodes,
					display: e.display,
					source: {
						story: t,
						storyInstance: n,
						path: [...s, i]
					},
					resourceKey: $e({
						story: t,
						storyInstance: n,
						path: [...s, i]
					}, e.display ? "display" : "inline")
				});
			}) : e.type === "table" && e.rows.forEach((e, t) => e.cells.forEach((e, n) => {
				i(e.content, [
					...s,
					t,
					n
				]);
			}));
		});
	};
	return i(e), r;
}
function $n(e, t) {
	if (!Number.isFinite(e) || e < 0) throw RangeError(`${t} must be finite and non-negative`);
	return e;
}
function er(e) {
	let t = [...e].map((e) => Object.freeze({
		resourceKey: e.resourceKey,
		widthPt: $n(e.widthPt, "widthPt"),
		heightPt: $n(e.heightPt, "heightPt"),
		mimeType: e.mimeType
	})).sort((e, t) => e.resourceKey.localeCompare(t.resourceKey)), n = new Map(t.map(({ resourceKey: e, ...t }) => [e, Object.freeze(t)]));
	if (n.size !== t.length) throw Error("Duplicate image resource key");
	return Object.freeze({
		fingerprint: rt("images", t),
		resolve(e) {
			let t = n.get(e);
			if (!t) throw Error(`Unknown image resource: ${e}`);
			return t;
		}
	});
}
function tr(e) {
	let t = [...e].map((e) => Object.freeze({
		resourceKey: e.resourceKey,
		widthEm: $n(e.widthEm, "widthEm"),
		ascentEm: $n(e.ascentEm, "ascentEm"),
		descentEm: $n(e.descentEm, "descentEm"),
		diagnostics: Object.freeze(e.diagnostics.map((e) => Object.freeze({ ...e }))),
		...e.available === !1 ? { available: !1 } : {}
	})).sort((e, t) => e.resourceKey.localeCompare(t.resourceKey)), n = new Map(t.map((e) => [e.resourceKey, e]));
	if (n.size !== t.length) throw Error("Duplicate math resource key");
	return Object.freeze({
		fingerprint: rt("math", t),
		resolve(e) {
			let t = n.get(e);
			if (!t) throw Error(`Unknown math resource: ${e}`);
			return t;
		}
	});
}
//#endregion
//#region packages/docx/src/layout/diagnostics.ts
var nr = Object.freeze({
	UNSUPPORTED_TEXT_EFFECT: Object.freeze({
		severity: "warning",
		layoutCode: "UNSUPPORTED_FEATURE",
		message: "WordprocessingML text effects are not rendered"
	}),
	INVALID_TEXT_EFFECT_VALUE: Object.freeze({
		severity: "warning",
		layoutCode: "INVALID_VALUE",
		message: "An invalid WordprocessingML text-effect value was ignored"
	}),
	MISSING_DRAWING_EXTENT: Object.freeze({
		severity: "error",
		layoutCode: "INVALID_GEOMETRY",
		message: "A drawing with a missing required extent was omitted"
	}),
	INVALID_DRAWING_EXTENT: Object.freeze({
		severity: "error",
		layoutCode: "INVALID_GEOMETRY",
		message: "A drawing with an invalid extent was omitted"
	}),
	DEGENERATE_DRAWING_EXTENT: Object.freeze({
		severity: "warning",
		layoutCode: "INVALID_GEOMETRY",
		message: "A drawing has a schema-valid zero-area extent"
	})
}), rr = Object.freeze({
	code: "INVALID_VALUE",
	severity: "warning",
	message: "The parser diagnostic contract did not match this renderer build"
});
function ir(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function ar(e, t) {
	if (!Array.isArray(e) || !e.every((e) => Number.isSafeInteger(e) && e >= 0)) return !1;
	let [n] = e;
	return n === void 0 || n < t;
}
function or(e) {
	return Object.freeze({
		story: "body",
		storyInstance: "body",
		path: Object.freeze([...e])
	});
}
function sr(e, t) {
	if (e === void 0) return Object.freeze([]);
	if (!Array.isArray(e)) return Object.freeze([rr]);
	let n = [], r = !1;
	for (let i of e) {
		if (!ir(i) || typeof i.code != "string" || !Object.hasOwn(nr, i.code) || i.part !== "word/document.xml" || !ar(i.path, t)) {
			r = !0;
			continue;
		}
		let e = nr[i.code];
		if (i.severity !== e.severity) {
			r = !0;
			continue;
		}
		n.push(Object.freeze({
			code: e.layoutCode,
			severity: e.severity,
			source: or(i.path),
			message: e.message
		}));
	}
	return r && n.push(rr), Object.freeze(n);
}
var V = class extends Error {
	code;
	constructor(e, t) {
		super(`${e}: ${t}`), this.name = "LayoutInvariantError", this.code = e;
	}
}, cr = Symbol("document-layout-runtime");
function lr(e, t) {
	Object.defineProperty(e, cr, {
		configurable: !1,
		enumerable: !1,
		writable: !1,
		value: {
			services: null,
			defaultCurrentDateMs: t,
			activeLayoutOptions: null
		}
	});
}
function ur(e) {
	let t = e[cr];
	if (t) return t;
	throw Error("Document layout runtime is not initialized; attach it explicitly");
}
function dr(e) {
	let t = new Map(e), n = Object.freeze([...t.keys()].sort());
	return Object.freeze({
		keys: n,
		resolve(e) {
			let n = t.get(e);
			if (n === void 0) throw Error(`Unknown runtime resource: ${e}`);
			return n;
		}
	});
}
var fr = /* @__PURE__ */ new WeakMap(), pr = /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap(), gr = /* @__PURE__ */ new WeakMap(), _r = /* @__PURE__ */ new WeakMap(), vr = 25e3, yr = /* @__PURE__ */ new WeakMap();
function br() {
	let e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), n = 1, r = 0;
	return Object.freeze({
		objectIdentity(t) {
			let r = e.get(t);
			return r === void 0 && (r = n, n += 1, e.set(t, r)), r;
		},
		get(e, n) {
			let r = t.get(e);
			if (!r?.has(n)) return;
			let i = r.get(n);
			return r.delete(n), r.set(n, i), i;
		},
		set(e, n, r) {
			let i = t.get(e);
			for (i || (i = /* @__PURE__ */ new Map(), t.set(e, i)), i.set(n, r); i.size > 2;) i.delete(i.keys().next().value);
		},
		noteMiss() {
			if (r += 1, r > 25e3) throw new V("NON_CONVERGENCE", `paragraph acquisition exceeded the operational miss budget ${vr}`);
		}
	});
}
function xr(e, t) {
	let n = [
		e.text,
		e.images,
		e.math
	], r = new Set(n.flatMap((e) => {
		let t = pr.get(e);
		return t ? [t] : [];
	}));
	if (r.size > 1) throw Error("Layout services combine foreign runtime owners");
	let i = r.values().next().value, a = n.filter((e) => !pr.has(e));
	if (i && a.length > 1) throw Error("Layout services are missing service lineage for multiple components");
	if (!i && !t) return;
	let o = i ?? {};
	for (let e of n) {
		let t = pr.get(e);
		if (t && t !== o) throw Error("Layout services combine foreign runtime owners");
		pr.set(e, o);
	}
	return o;
}
function Sr(e, t) {
	let n = xr(e, !0);
	if (mr.has(n)) throw Error("Body layout kernel is already attached");
	mr.set(n, t);
}
function Cr(e) {
	let t = xr(e, !1);
	return t ? mr.get(t) : void 0;
}
function wr(e, t) {
	let n = xr(e, !0);
	if (hr.has(n)) throw Error("Layout source store is already attached");
	hr.set(n, t);
}
function Tr(e) {
	let t = xr(e, !1);
	return t ? hr.get(t) : void 0;
}
function Er(e, t) {
	let n = xr(e, !0);
	if (gr.has(n)) throw Error("Vertical glyph measurement service is already attached");
	gr.set(n, t);
}
function Dr(e) {
	let t = xr(e, !1), n = t ? gr.get(t) : void 0;
	if (!n) throw Error("Vertical glyph measurement service is not attached");
	return n;
}
function Or(e, t) {
	if (_r.has(e)) throw Error("Layout variant store is already attached");
	_r.set(e, t);
}
function kr(e) {
	return _r.get(e);
}
function Ar(e, t, n = t.keys()) {
	if (fr.has(e)) throw Error("Private resource lookup is already attached");
	let r = new Set(t.keys()), i = new Set(n), a = [...i].filter((e) => !r.has(e)).sort(), o = [...r].filter((e) => !i.has(e)).sort();
	if (a.length > 0 || o.length > 0) throw Error(`Runtime resource membership mismatch: missing [${a.join(", ")}]; extra [${o.join(", ")}]`);
	fr.set(e, dr(t));
}
function jr(e) {
	return fr.get(e);
}
var Mr = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap();
function Pr(e, t = {}) {
	let n = Object.freeze({
		...e,
		...t
	}), r = Cr(e);
	if (!r) throw Error("Body layout kernel is not attached to the supplied services");
	if (Cr(n) !== r) throw Error("Layout service view did not retain its body layout kernel owner");
	let i = fr.get(e);
	i && fr.set(n, i);
	let a = Mr.get(e);
	a && Mr.set(n, a);
	let o = yr.get(e);
	return o && yr.set(n, o), n;
}
function Fr(e) {
	let t = Pr(e);
	return yr.set(t, br()), t;
}
function Ir(e) {
	return yr.get(e);
}
function Lr(e, t) {
	if (!Number.isInteger(t.totalPages) || t.totalPages < 1) throw RangeError("Field acquisition totalPages must be a positive integer");
	let n = Pr(e);
	return Nr.set(n, Object.freeze({ ...t })), n;
}
function Rr(e) {
	return Nr.get(e) ?? Object.freeze({ totalPages: 1 });
}
function zr(e, t) {
	if (Mr.has(e)) throw Error("Paint resource registry is already attached");
	Mr.set(e, t);
}
function Br(e) {
	let t = Mr.get(e);
	if (!t) throw Error("Paint resource registry is not attached");
	return t;
}
//#endregion
//#region packages/docx/src/layout/page-layers.ts
var Vr = [
	"background",
	"behindText",
	"header",
	"body",
	"notes",
	"front",
	"footer"
], Hr = Object.freeze({
	a: 1,
	b: 0,
	c: 0,
	d: 1,
	e: 0,
	f: 0
});
function Ur(e) {
	return Object.freeze({
		kind: "clip",
		clip: e
	});
}
function Wr(e, t) {
	return Object.freeze({
		kind: "transform",
		transform: Object.freeze({
			...Hr,
			e,
			f: t
		})
	});
}
function Gr(e, t) {
	if (!t.textBoxIds?.length) return Object.freeze([]);
	let n = new Map(e.textBoxes.map((e) => [e.id, e]));
	return Object.freeze(t.textBoxIds.flatMap((e) => {
		let t = n.get(e);
		return t ? [t] : [];
	}));
}
function Kr(e, t, n, r, i) {
	if (e.kind === "drawing") {
		if (!e.anchorLayer) return;
		i.push(Object.freeze({
			drawing: e,
			textBoxes: Object.freeze([]),
			frames: Object.freeze([...n]),
			layoutTranslationPt: Object.freeze({ ...r }),
			encounterOrder: i.length,
			root: t
		}));
		return;
	}
	if (e.kind !== "textbox") {
		if (e.kind === "note") {
			let a = e.story.clipBounds ? Object.freeze([...n, Ur(e.story.clipBounds)]) : n;
			for (let n of e.story.blocks) Kr(n, t, a, r, i);
			return;
		}
		if (e.kind === "paragraph") {
			let a = e.clipBounds ? Object.freeze([...n, Ur(e.clipBounds)]) : n;
			for (let n of e.drawings) n.anchorLayer && i.push(Object.freeze({
				drawing: n,
				owner: e,
				textBoxes: Gr(e, n),
				frames: Object.freeze([...a]),
				layoutTranslationPt: Object.freeze({ ...r }),
				encounterOrder: i.length,
				root: t
			}));
			return;
		}
		Yr(e, t, n, r, i);
	}
}
function qr(e, t, n, r, i, a) {
	let o = t.xPt - e.flowBounds.xPt, s = t.yPt - e.flowBounds.yPt;
	Kr(e, n, Object.freeze([...r, Wr(o, s)]), Object.freeze({
		xPt: i.xPt + o,
		yPt: i.yPt + s
	}), a);
}
function Jr(e, t, n, r, i) {
	qr(e.child, {
		xPt: e.xPt - r.xPt,
		yPt: e.yPt - r.yPt
	}, t, n, r, i);
}
function Yr(e, t, n, r, i) {
	let a = e.clipBounds ? Object.freeze([...n, Ur(e.clipBounds)]) : n;
	for (let n of e.rows) for (let e of n.cells) {
		let n = "visualMergeOwnership" in e && e.visualMergeOwnership === "continuation";
		if (e.verticalMerge === "continue" && !n) continue;
		let o = e.clipBounds ? Object.freeze([...a, Ur(e.clipBounds)]) : a;
		for (let n of e.blocks) qr(n.layout, {
			xPt: e.contentBounds.xPt + (n.layout.kind === "table" ? n.layout.flowBounds.xPt : 0),
			yPt: e.flowBounds.yPt + n.offsetPt + (n.layout.kind === "table" ? n.layout.flowBounds.yPt : 0)
		}, t, o, r, i);
	}
	for (let n of e.resolvedFloatingTables ?? []) Jr(n, t, a, r, i);
}
function Xr(e) {
	let t = e.drawing.anchorLayer;
	return Object.freeze({
		kind: "drawing",
		layer: t.behindDoc ? "behindText" : "front",
		sourceLayer: e.root.layer,
		rootNodeId: e.root.node.id,
		coordinateSpace: e.root.coordinateSpace,
		flowDomainId: e.root.node.flowDomainId,
		node: e.drawing,
		...e.owner ? { ownerNodeId: e.owner.id } : {},
		textBoxes: e.textBoxes,
		frames: e.frames,
		layoutTranslationPt: e.layoutTranslationPt
	});
}
function Zr(e, t) {
	return Object.freeze({
		kind: "node",
		layer: e.layer,
		sourceLayer: e.layer,
		rootNodeId: e.node.id,
		coordinateSpace: e.coordinateSpace,
		flowDomainId: e.node.flowDomainId,
		node: e.node,
		omitAnchoredDrawings: t
	});
}
function Qr(e, t) {
	return e.drawing.anchorLayer.relativeHeight - t.drawing.anchorLayer.relativeHeight || e.drawing.anchorLayer.sourceOrder - t.drawing.anchorLayer.sourceOrder || e.encounterOrder - t.encounterOrder;
}
function $r(e) {
	let t = [];
	for (let n of e) Kr(n.node, n, Object.freeze([]), Object.freeze({
		xPt: 0,
		yPt: 0
	}), t);
	let n = t.filter(({ drawing: e }) => e.anchorLayer.behindDoc).sort(Qr).map(Xr), r = t.filter(({ drawing: e }) => !e.anchorLayer.behindDoc).sort(Qr).map(Xr), i = new Set(t.map(({ root: e }) => e.node)), a = e.flatMap((e) => e.node.kind === "drawing" && e.node.anchorLayer ? [] : [Zr(e, i.has(e.node))]);
	return Object.freeze([
		...n,
		...a,
		...r
	]);
}
function ei(e, t) {
	return t.has(e) || (t.add(e), e.kind === "drawing") ? !1 : e.kind === "paragraph" ? e.lines.some((e) => e.placements.some((e) => e.kind === "text" && e.paintOps?.some((e) => e.verticalFeature === !0) === !0)) || e.textBoxes.some((e) => ei(e, t)) : e.kind === "textbox" || e.kind === "note" ? e.story.blocks.some((e) => ei(e, t)) : e.rows.some((e) => e.cells.some((e) => e.blocks.some((e) => ei(e.layout, t)))) || (e.resolvedFloatingTables ?? []).some((e) => ei(e.child, t));
}
function ti(e, t, n) {
	if (!n.has(e)) {
		if (n.add(e), e.kind === "drawing") {
			for (let n of e.commands) (n.kind === "resource" || n.kind === "drawingml-image-fill") && t.add(n.resourceKey);
			return;
		}
		if (e.kind === "paragraph") {
			for (let n of e.resources) t.add(n.resourceKey);
			for (let r of e.drawings) ti(r, t, n);
			for (let r of e.textBoxes) ti(r, t, n);
			return;
		}
		if (e.kind === "textbox" || e.kind === "note") {
			for (let r of e.story.blocks) ti(r, t, n);
			return;
		}
		for (let r of e.rows) for (let e of r.cells) for (let r of e.blocks) ti(r.layout, t, n);
		for (let r of e.resolvedFloatingTables ?? []) ti(r.child, t, n);
	}
}
function ni(e) {
	let t = Object.freeze(e.map(({ layer: e, node: t, coordinateSpace: n }) => Object.freeze({
		layer: e,
		node: t,
		coordinateSpace: n ?? "section-logical"
	}))), n = new Map(Vr.map((e) => [e, []]));
	for (let e of t) n.get(e.layer).push(e.node);
	let r = [];
	for (let e = 0; e < t.length;) {
		let n = t[e].layer, i = e + 1;
		for (; t[i]?.layer === n;) i += 1;
		let a = t.slice(e, i);
		n === "header" || n === "body" || n === "notes" || n === "footer" ? r.push(...$r(a)) : r.push(...a.map((e) => Zr(e, !1))), e = i;
	}
	let i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
	for (let { node: e } of t) ti(e, a, o);
	return Object.freeze({
		roots: t,
		paintOrder: Object.freeze(r),
		capabilities: Object.freeze({
			requiresElementBackedVerticalGlyphPaint: t.some(({ node: e }) => ei(e, i)),
			resourceKeys: Object.freeze([...a])
		}),
		background: Object.freeze(n.get("background")),
		behindText: Object.freeze(n.get("behindText")),
		header: Object.freeze(n.get("header")),
		body: Object.freeze(n.get("body")),
		notes: Object.freeze(n.get("notes")),
		front: Object.freeze(n.get("front")),
		footer: Object.freeze(n.get("footer"))
	});
}
//#endregion
//#region packages/docx/src/layout/page-graph.ts
var ri = class extends Error {
	constructor(e) {
		super(e), this.name = "PageGraphError";
	}
}, ii = ni;
function ai(e, t, n) {
	let r = new Map(n.map((e) => [e.id, e]));
	if (r.size !== n.length || n.length !== e[t].length) throw new ri(`Replacement ${t} layer must preserve unique paint node identities`);
	return ii(e.roots.map((e) => {
		if (e.layer !== t) return e;
		let n = r.get(e.node.id);
		if (!n) throw new ri(`Missing replacement paint node ${e.node.id}`);
		return {
			...e,
			node: n
		};
	}));
}
function oi(e) {
	return e.layers.roots;
}
function si(e) {
	let t = !1, n = !1;
	for (let r of e.layers.roots) if (r.layer === "body") {
		if (n) throw new ri(`Paint sequence must contain one contiguous body paint run; re-entered at ${r.node.id}`);
		t = !0;
	} else t && (n = !0);
	let r = /* @__PURE__ */ new Map();
	for (let t of e.layers.roots) {
		if (r.has(t.node.id)) throw new ri(`Duplicate paint node ${t.node.id}`);
		r.set(t.node.id, t);
	}
	let i = /* @__PURE__ */ new Map();
	for (let t of Vr) for (let n of e.layers[t]) {
		if (i.has(n.id)) throw new ri(`Duplicate semantic page node ${n.id}`);
		i.set(n.id, {
			layer: t,
			node: n
		});
	}
	if (i.size !== r.size) throw new ri("Semantic page layers do not match retained roots");
	for (let [e, t] of r) {
		let n = i.get(e);
		if (!n || n.layer !== t.layer || n.node !== t.node) throw new ri(`Paint root ${e} is not the retained ${t.layer} node`);
	}
	let a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
	for (let t of e.layers.paintOrder) {
		let e = r.get(t.rootNodeId);
		if (!e) throw new ri(`Missing paint root ${t.rootNodeId}`);
		if (e.layer !== t.sourceLayer) throw new ri(`Paint root ${t.rootNodeId} belongs to ${e.layer}, not ${t.sourceLayer}`);
		if (a.add(t.rootNodeId), t.kind === "node") {
			if (t.node !== e.node || t.node.id !== t.rootNodeId) throw new ri(`Paint root ${t.rootNodeId} is not the retained ${t.sourceLayer} node`);
			continue;
		}
		if (!t.node.anchorLayer) throw new ri(`Drawing paint entry ${t.node.id} is not anchored`);
		if (o.has(t.node.id)) throw new ri(`Duplicate drawing paint reference ${t.node.id}`);
		o.add(t.node.id);
	}
	if (a.size !== r.size) throw new ri(`Missing paint-order reference for ${[...r.keys()].find((e) => !a.has(e)) ?? "<unknown>"}`);
	return e.layers.roots.map(({ node: e }) => e);
}
//#endregion
//#region packages/docx/src/layout/error-page.ts
var ci = Object.freeze({
	story: "body",
	storyInstance: "parse-error",
	path: Object.freeze([])
});
function li(e, t, n, r, i) {
	let a = e.trim().split(/\s+/).filter(Boolean), o = [], s = "", c = (e) => r.shape({
		text: e,
		fontSizePt: n,
		fonts: {},
		genericFamily: "sans-serif"
	}).advancePt, l = (e) => {
		let n = [
			0,
			...N(e),
			e.length
		].filter((e, t, n) => t === 0 || e !== n[t - 1]), r = n.length - 1;
		for (; r > 0 && c(`${e.slice(0, n[r])}…`) > t;) --r;
		return `${e.slice(0, n[r] ?? 0)}…`;
	}, u = () => {
		o.length === 0 ? o.push(l("")) : o[o.length - 1] = l(o[o.length - 1]);
	}, d = (e) => {
		let n = [
			0,
			...N(e),
			e.length
		].filter((e, t, n) => t === 0 || e !== n[t - 1]), r = 0;
		for (; r < n.length - 1;) {
			if (o.length >= i) return u(), !0;
			let a = r + 1;
			for (; a < n.length && c(e.slice(n[r], n[a])) <= t;) a += 1;
			let s = Math.max(r + 1, a - 1), d = e.slice(n[r], n[s]);
			if (o.length >= i - 1 && s < n.length - 1) return o.push(l(d)), !0;
			o.push(d), r = s;
		}
		return !1;
	};
	for (let e = 0; e < a.length; e += 1) {
		let n = a[e], r = s ? `${s} ${n}` : n, l = c(r);
		if (s && l > t) {
			if (o.push(s), s = "", o.length >= i) {
				u();
				break;
			}
			if (c(n) > t) {
				if (d(n)) break;
			} else s = n;
		} else if (!s && l > t) {
			if (d(n)) break;
		} else s = r;
		if (e < a.length - 1 && o.length >= i && !s) {
			u();
			break;
		}
	}
	return s && o.length < i && o.push(s), o;
}
function ui(e, t, n) {
	if (!(t.widthPt > 0 && t.heightPt > 0)) throw RangeError("Error page size must be positive");
	let r = Math.max(18, Math.min(t.widthPt, t.heightPt) * .06), i = {
		xPt: r,
		yPt: r,
		widthPt: t.widthPt - r * 2,
		heightPt: t.heightPt - r * 2
	}, a = Math.max(8, Math.min(t.widthPt, t.heightPt) * .02), o = n.resolve({
		fonts: {},
		slot: "ascii",
		genericFamily: "sans-serif"
	}).route, s = li(e, t.widthPt - r * 4, a, n, 4), c = a * 1.4, l = [
		{
			kind: "fill-rect",
			rect: {
				xPt: 0,
				yPt: 0,
				widthPt: t.widthPt,
				heightPt: t.heightPt
			},
			fill: "#ffffff"
		},
		{
			kind: "stroke-rect",
			rect: i,
			stroke: "#c8ccd2",
			lineWidthPt: 1,
			dashPt: [6, 5]
		},
		{
			kind: "text",
			rect: {
				xPt: 0,
				yPt: t.heightPt * .27,
				widthPt: t.widthPt,
				heightPt: 36
			},
			text: "⚠",
			fill: "#b23b3b",
			fontRoute: o,
			fontSizePt: 28,
			fontWeight: 400,
			fontStyle: "normal",
			align: "center",
			baseline: "middle"
		},
		{
			kind: "text",
			rect: {
				xPt: r * 2,
				yPt: t.heightPt * .4,
				widthPt: t.widthPt - r * 4,
				heightPt: 24
			},
			text: "This document could not be displayed",
			fill: "#333333",
			fontRoute: o,
			fontSizePt: 13,
			fontWeight: 600,
			fontStyle: "normal",
			align: "center",
			baseline: "middle"
		},
		...s.map((e, n) => ({
			kind: "text",
			rect: {
				xPt: r * 2,
				yPt: t.heightPt * .5 + c * n,
				widthPt: t.widthPt - r * 4,
				heightPt: c
			},
			text: e,
			fill: "#666666",
			fontRoute: o,
			fontSizePt: a,
			fontWeight: 400,
			fontStyle: "normal",
			align: "center",
			baseline: "middle"
		}))
	], u = {
		kind: "drawing",
		id: "parse-error-page",
		source: ci,
		flowDomainId: "parse-error",
		flowBounds: i,
		inkBounds: i,
		advancePt: i.heightPt,
		ordinaryFlow: !1,
		commands: l
	}, d = {
		geometry: {
			pageWidth: t.widthPt,
			pageHeight: t.heightPt,
			marginTop: r,
			marginRight: r,
			marginBottom: r,
			marginLeft: r,
			headerDistance: 0,
			footerDistance: 0
		},
		columns: [{
			xPt: r,
			wPt: i.widthPt
		}],
		columnSeparator: !1,
		grid: {
			kind: "none",
			linePitchPt: null,
			charSpacePt: null
		},
		textDirection: "lrTb",
		verticalAlignment: "top"
	};
	return {
		pages: [{
			pageIndex: 0,
			geometry: {
				xPt: 0,
				yPt: 0,
				widthPt: t.widthPt,
				heightPt: t.heightPt,
				contentTopPt: r,
				contentBottomPt: t.heightPt - r
			},
			flowDomains: [{
				id: "parse-error",
				kind: "body",
				logicalBounds: i,
				physicalBounds: i
			}],
			section: d,
			sectionOccurrenceId: "parse-error-section",
			pageBorder: null,
			parityBlank: !1,
			bookmarkStarts: [],
			pageNumber: {
				displayNumber: 1,
				format: "decimal",
				sectionOccurrenceId: "parse-error-section"
			},
			columnSeparators: [],
			sectionRegions: [{
				id: "parse-error-region",
				sectionOccurrenceId: "parse-error-section",
				coordinateSpace: {
					writingMode: "horizontal-tb",
					logicalToPhysical: {
						a: 1,
						b: 0,
						c: 0,
						d: 1,
						e: 0,
						f: 0
					},
					physicalToLogical: {
						a: 1,
						b: 0,
						c: 0,
						d: 1,
						e: 0,
						f: 0
					}
				},
				blockStartPt: r,
				blockEndPt: t.heightPt - r,
				columnFlowDirection: "ltr",
				columnIndexes: [0],
				flowDomainIds: ["parse-error"],
				section: d
			}],
			layers: ii([{
				layer: "body",
				node: u
			}]),
			readingOrder: [u.id]
		}],
		diagnostics: [{
			code: "UNSUPPORTED_FEATURE",
			severity: "error",
			source: ci,
			message: e
		}]
	};
}
//#endregion
//#region packages/docx/src/layout/options.ts
function di(e, t, n = !1) {
	let r = e == null ? t : typeof e == "number" ? e : e.getTime();
	if (!Number.isFinite(r)) throw RangeError("currentDate must resolve to finite epoch milliseconds");
	return Object.freeze({
		currentDateMs: r,
		...n === !0 ? { showTrackedChanges: !0 } : {}
	});
}
function fi(e) {
	return di(e.currentDate, e.defaultCurrentDateMs, e.showTrackedChanges);
}
function pi(e, t) {
	return rt("layout", {
		currentDateMs: e.currentDateMs,
		showTrackedChanges: e.showTrackedChanges === !0,
		text: t.text.fingerprint,
		images: t.images.fingerprint,
		math: t.math.fingerprint,
		verticalGlyphs: t.verticalGlyphFingerprint ?? null
	});
}
//#endregion
//#region packages/docx/src/layout/coordinate-space.ts
function mi(e) {
	switch (e) {
		case "tb":
		case "tbV":
		case "lrTb":
		case "lrTbV": return "horizontal-tb";
		case "rl":
		case "rlV":
		case "tbRl":
		case "tbRlV": return "vertical-rl";
		case "btLr": return "vertical-rl";
		case "lr":
		case "lrV":
		case "tbLrV": return "vertical-lr";
		default: throw RangeError(`Unsupported Transitional text direction ${JSON.stringify(e)}`);
	}
}
function hi(e) {
	if (!Number.isFinite(e.widthPt) || !Number.isFinite(e.heightPt) || e.widthPt <= 0 || e.heightPt <= 0) throw RangeError("Physical page extents must be positive and finite");
}
function gi(e) {
	if (!Number.isFinite(e.xPt) || !Number.isFinite(e.yPt)) throw RangeError("Point coordinates must be finite");
}
function _i(e) {
	if (![
		e.a,
		e.b,
		e.c,
		e.d,
		e.e,
		e.f
	].every(Number.isFinite)) throw RangeError("Matrix coefficients must be finite");
}
function vi(e) {
	if (gi(e), !Number.isFinite(e.widthPt) || !Number.isFinite(e.heightPt) || e.widthPt < 0 || e.heightPt < 0) throw RangeError("Rectangle extents must be finite and non-negative");
}
function yi(e, t) {
	switch (hi(e), t) {
		case "horizontal-tb": return {
			widthPt: e.widthPt,
			heightPt: e.heightPt
		};
		case "vertical-rl":
		case "vertical-lr": return {
			widthPt: e.heightPt,
			heightPt: e.widthPt
		};
		default: throw RangeError(`Unsupported writing mode ${String(t)}`);
	}
}
function bi(e, t) {
	switch (hi(e), t) {
		case "horizontal-tb": return {
			widthPt: e.widthPt,
			heightPt: e.heightPt
		};
		case "vertical-rl":
		case "vertical-lr": return {
			widthPt: e.heightPt,
			heightPt: e.widthPt
		};
		default: throw RangeError(`Unsupported writing mode ${String(t)}`);
	}
}
function xi(e, t) {
	switch (hi(t), e) {
		case "horizontal-tb": return {
			a: 1,
			b: 0,
			c: 0,
			d: 1,
			e: 0,
			f: 0
		};
		case "vertical-rl": return {
			a: 0,
			b: 1,
			c: -1,
			d: 0,
			e: t.widthPt,
			f: 0
		};
		case "vertical-lr": return {
			a: 0,
			b: 1,
			c: 1,
			d: 0,
			e: 0,
			f: 0
		};
		default: throw RangeError(`Unsupported writing mode ${String(e)}`);
	}
}
function Si(e, t) {
	switch (hi(t), e) {
		case "horizontal-tb": return {
			a: 1,
			b: 0,
			c: 0,
			d: 1,
			e: 0,
			f: 0
		};
		case "vertical-rl": return {
			a: 0,
			b: -1,
			c: 1,
			d: 0,
			e: 0,
			f: t.widthPt
		};
		case "vertical-lr": return {
			a: 0,
			b: 1,
			c: 1,
			d: 0,
			e: 0,
			f: 0
		};
		default: throw RangeError(`Unsupported writing mode ${String(e)}`);
	}
}
function Ci(e, t) {
	return _i(e), gi(t), {
		xPt: e.a * t.xPt + e.c * t.yPt + e.e,
		yPt: e.b * t.xPt + e.d * t.yPt + e.f
	};
}
function wi(e, t) {
	vi(t);
	let n = [
		Ci(e, t),
		Ci(e, {
			xPt: t.xPt + t.widthPt,
			yPt: t.yPt
		}),
		Ci(e, {
			xPt: t.xPt,
			yPt: t.yPt + t.heightPt
		}),
		Ci(e, {
			xPt: t.xPt + t.widthPt,
			yPt: t.yPt + t.heightPt
		})
	], r = n.map(({ xPt: e }) => e), i = n.map(({ yPt: e }) => e), a = Math.min(...r), o = Math.min(...i);
	return {
		xPt: a,
		yPt: o,
		widthPt: Math.max(...r) - a,
		heightPt: Math.max(...i) - o
	};
}
function Ti(e, t) {
	_i(e);
	let n = Ci(e, {
		xPt: 0,
		yPt: 0
	}), r = {
		top: {
			xPt: 0,
			yPt: -1
		},
		right: {
			xPt: 1,
			yPt: 0
		},
		bottom: {
			xPt: 0,
			yPt: 1
		},
		left: {
			xPt: -1,
			yPt: 0
		}
	}, i = {}, a = /* @__PURE__ */ new Set();
	for (let o of [
		"top",
		"right",
		"bottom",
		"left"
	]) {
		let s = Ci(e, r[o]), c = s.xPt - n.xPt, l = s.yPt - n.yPt, u = l === 0 && c !== 0 ? c > 0 ? "right" : "left" : c === 0 && l !== 0 ? l > 0 ? "bottom" : "top" : null;
		if (u === null || a.has(u)) throw RangeError("Edge transforms require a non-degenerate axis-aligned matrix");
		i[u] = t[o], a.add(u);
	}
	if (a.size !== 4) throw RangeError("Edge transform must map every physical edge exactly once");
	return i;
}
function Ei(e, t) {
	return {
		writingMode: e,
		logicalToPhysical: xi(e, t),
		physicalToLogical: Si(e, t)
	};
}
//#endregion
//#region packages/docx/src/layout/column-separators.ts
function Di(e) {
	return Object.freeze(e);
}
function Oi(e) {
	let t = [];
	for (let n of e) {
		let { columns: e, columnSeparator: r } = n.section;
		if (!r || e.length < 2 || n.blockEndPt <= n.blockStartPt) continue;
		let i = new Set(n.columnIndexes), a = n.columnFlowDirection === "rtl" ? e.map((e, t) => t).reverse() : e.map((e, t) => t);
		for (let r = 0; r < a.length - 1; r += 1) {
			let o = a[r];
			if (!i.has(o)) continue;
			let s = a[r + 1], c = Math.min(o, s), l = Math.max(o, s), u = e[c], d = e[l], f = (u.xPt + u.wPt + d.xPt) / 2;
			t.push(Object.freeze({
				start: Di(Ci(n.coordinateSpace.logicalToPhysical, {
					xPt: f,
					yPt: n.blockStartPt
				})),
				end: Di(Ci(n.coordinateSpace.logicalToPhysical, {
					xPt: f,
					yPt: n.blockEndPt
				}))
			}));
		}
	}
	return Object.freeze(t);
}
//#endregion
//#region packages/docx/src/layout/border-treatment.ts
function ki(e, t) {
	let n = Re(e, t), r = e === "triple" || /^(?:thinThick|thickThin|thinThickThin)(?:Small|Medium|Large)Gap$/.test(e);
	return Object.freeze({
		authoredStyle: e,
		style: e === "double" ? "double" : r ? "compound" : n.length > 0 ? "dashed" : e.includes("wave") ? "wavy" : "solid",
		dashPatternPt: Object.freeze(n)
	});
}
//#endregion
//#region packages/docx/src/layout/text.ts
function Ai(e, t) {
	let n = (e.smallCaps ? Math.max(e.fontSize - 2, 1) : e.fontSize) * t;
	return e.vertAlign && (n *= .65), n;
}
var ji = /[ᄀ-ᇿ⺀-⿟　-〿぀-ヿ㄰-㆏㐀-䶿一-鿿ꥠ-꥿가-퟿豈-﫿＀-￯]/u;
function Mi(e, t, n) {
	let r = null, i = 0;
	for (let n of t) n.alignment !== "bar" && (n.pos > i && (i = n.pos), n.pos > e && (r === null || n.pos < r.pos) && (r = n));
	let a = null;
	if (n > 0) {
		let t = Math.ceil((Math.max(e, i) + 1e-6) / n) * n;
		t <= e && (t += n), a = {
			pos: t,
			alignment: "left"
		};
	}
	return r && a ? r.pos <= a.pos ? r : a : r ?? a;
}
function Ni(e, t, n) {
	return Mi(e, t, n);
}
function Pi(e, t) {
	let n = t === "vert" || t === "vert270" || t === "eaVert" || t === "mongolianVert";
	return {
		type: "text",
		text: e.text,
		bold: e.bold ?? !1,
		italic: e.italic ?? !1,
		underline: !1,
		strikethrough: !1,
		fontSize: e.fontSizePt,
		color: e.color ?? null,
		fontFamily: e.fontFamily ?? null,
		fontFamilyEastAsia: e.fontFamilyEastAsia ?? null,
		isLink: !1,
		background: null,
		vertAlign: null,
		hyperlink: null,
		ruby: e.ruby ?? void 0,
		textBoxLineFloor: !0,
		textBoxVertical: n
	};
}
function Fi(e, t = {}, n = {}) {
	if (!e) return "sans-serif";
	let r = t[e];
	if (r === "roman") return "serif";
	if (r === "swiss") return "sans-serif";
	if (r === "modern" && n[e] === "fixed") return "monospace";
	let i = l(e);
	return i === "mono" ? "monospace" : i === "serif" ? "serif" : "sans-serif";
}
function Ii(e) {
	return e === "eastAsia" ? "sans-serif" : "serif";
}
var Li = Symbol("docx.fontMetricSnapshot");
function Ri(e = {}) {
	if (e[Li]) return e;
	let t = Object.entries(e).map(([e, t]) => {
		if (!t.family?.trim()) throw TypeError(`Font metric ${e} requires a family`);
		if (t.lineHeightRatio !== void 0 && (!Number.isFinite(t.lineHeightRatio) || t.lineHeightRatio < 0)) throw RangeError(`Font metric ${e} lineHeightRatio must be finite and non-negative`);
		if (t.eastAsianLineHeightRatio !== void 0 && (!Number.isFinite(t.eastAsianLineHeightRatio) || t.eastAsianLineHeightRatio < 0)) throw RangeError(`Font metric ${e} eastAsianLineHeightRatio must be finite and non-negative`);
		if (t.fontBoxRatio !== void 0 && (!Number.isFinite(t.fontBoxRatio) || t.fontBoxRatio <= 0)) throw RangeError(`Font metric ${e} fontBoxRatio must be finite and positive`);
		if (t.weight !== void 0 && (!Number.isFinite(t.weight) || t.weight < 1 || t.weight > 1e3)) throw RangeError(`Font metric ${e} weight must be finite and between 1 and 1000`);
		let n = {
			family: t.family,
			...t.lineHeightRatio === void 0 ? {} : { lineHeightRatio: t.lineHeightRatio },
			...t.eastAsianLineHeightRatio === void 0 ? {} : { eastAsianLineHeightRatio: t.eastAsianLineHeightRatio },
			...t.fontBoxRatio === void 0 ? {} : { fontBoxRatio: t.fontBoxRatio },
			...t.requestedFamily === void 0 ? {} : { requestedFamily: t.requestedFamily },
			...t.weight === void 0 ? {} : { weight: t.weight },
			...t.style === void 0 ? {} : { style: t.style },
			...t.sourceIdentity === void 0 ? {} : { sourceIdentity: t.sourceIdentity },
			...t.synthesized === void 0 ? {} : { synthesized: t.synthesized }
		};
		return [Sn(e), Object.freeze(n)];
	}).sort(([e], [t]) => e.localeCompare(t)), n = Object.fromEntries(t);
	return Object.defineProperty(n, Li, { value: !0 }), Object.freeze(n);
}
var zi = new Set([
	161,
	164,
	167,
	168,
	170,
	173,
	175,
	176,
	177,
	178,
	179,
	180,
	182,
	183,
	184,
	185,
	186,
	188,
	189,
	190,
	191,
	215,
	247
]), Bi = new Set([
	224,
	225,
	232,
	233,
	234,
	236,
	237,
	242,
	243,
	249,
	250,
	252
]);
function Vi(e, t, n, r, i) {
	let a = n === "eastAsia", o = r?.split(/[-_]/, 1)[0]?.toLowerCase() === "zh", s = /^(?:86|88)$/i.test(i?.trim() ?? ""), c = "highAnsi";
	return e <= 127 ? c = "ascii" : e <= 255 ? c = a && (zi.has(e) || o && Bi.has(e)) ? "eastAsia" : "highAnsi" : e >= 256 && e <= 687 ? c = a && (o || s) ? "eastAsia" : "highAnsi" : e >= 688 && e <= 767 || e >= 768 && e <= 879 || e >= 880 && e <= 975 || e >= 1024 && e <= 1279 ? c = a ? "eastAsia" : "highAnsi" : e >= 1424 && e <= 1983 || e >= 64285 && e <= 65023 || e >= 65136 && e <= 65278 ? c = "ascii" : e >= 4352 && e <= 4607 || e >= 11904 && e <= 12031 || e >= 12032 && e <= 12255 || e >= 12272 && e <= 12687 || e >= 12688 && e <= 12703 || e >= 12800 && e <= 19903 || e >= 19968 && e <= 40879 || e >= 40960 && e <= 42127 || e >= 42128 && e <= 42191 || e >= 44032 && e <= 55215 || e >= 63744 && e <= 64255 || e >= 65072 && e <= 65103 || e >= 65104 && e <= 65135 || e >= 65280 && e <= 65519 || e >= 65536 && e <= 1114111 ? c = "eastAsia" : e >= 7680 && e <= 7935 ? c = a && o ? "eastAsia" : "highAnsi" : (e >= 8192 && e <= 10175 || e >= 57344 && e <= 63743 || e >= 64256 && e <= 64284) && (c = a ? "eastAsia" : "highAnsi"), c === "eastAsia" && a ? c : t ? "complexScript" : c;
}
function Hi(e, t) {
	return e.themeFontPresence?.[t] ?? e.themeFonts?.[t] != null ? e.themeFonts?.[t] : e.fonts[t] ?? (e.themeFontPresence?.ascii ?? e.themeFonts?.ascii != null ? e.themeFonts?.ascii : e.fonts.ascii);
}
function Ui(e) {
	let t = Ri({
		...e.localMetrics,
		...e.fontMetrics
	}), n = Object.freeze(Object.fromEntries(Object.entries(e.genericFamilies ?? {}).map(([e, t]) => [e.trim().toLocaleLowerCase("en-US"), t]).sort(([e], [t]) => e.localeCompare(t)))), r = Object.freeze(Object.fromEntries(Object.entries(e.eastAsiaFontCharsets ?? {}).map(([e, t]) => [e.trim().toLocaleLowerCase("en-US"), t.trim()]).sort(([e], [t]) => e.localeCompare(t)))), i = rt("text", {
		fonts: e.fonts.fingerprint,
		measurer: e.measurer.fingerprint,
		cjkFallback: e.cjkFallback ?? null,
		fontMetrics: t,
		eastAsiaFontCharsets: r,
		genericFamilies: n
	}), a = (t) => {
		let r = Hi(t, t.slot), i = r ? n[r.trim().toLocaleLowerCase("en-US")] ?? t.genericFamily ?? "sans-serif" : t.genericFamily ?? Ii(t.slot), a = S(t.text ?? "");
		return e.fonts.resolve({
			requestedFamily: r,
			cjkFallback: a ? e.cjkFallback : void 0,
			language: t.slot === "eastAsia" && a ? t.eastAsiaLanguage : void 0,
			genericFamily: i,
			weight: t.weight,
			style: t.style
		});
	}, o = /* @__PURE__ */ new Map(), s = (t) => {
		let n = JSON.stringify([
			t.text,
			t.fontRoute.familyList,
			t.fontRoute.scope,
			t.fontRoute.fingerprint,
			t.fontSizePt,
			t.weight,
			t.style,
			t.letterSpacingPt,
			t.kerning ?? null
		]), r = o.get(n);
		if (r) return r;
		let i = e.measurer.measure(t), a = Object.freeze({
			...i,
			...i.inkBounds ? { inkBounds: Object.freeze({ ...i.inkBounds }) } : {}
		});
		return o.set(n, a), a;
	}, c = (t) => e.measurer.measure(t).advancePt, l = /* @__PURE__ */ new Map();
	return Object.freeze({
		fingerprint: i,
		fontMetrics: t,
		localMetrics: t,
		resolve: a,
		shape(e) {
			if (!Number.isFinite(e.fontSizePt) || e.fontSizePt < 0) throw RangeError("fontSizePt must be a finite non-negative number");
			let t = JSON.stringify([
				e.text,
				e.fontSizePt,
				[
					e.fonts.ascii ?? null,
					e.fonts.highAnsi ?? null,
					e.fonts.eastAsia ?? null,
					e.fonts.complexScript ?? null
				],
				[
					e.themeFonts?.ascii ?? null,
					e.themeFonts?.highAnsi ?? null,
					e.themeFonts?.eastAsia ?? null,
					e.themeFonts?.complexScript ?? null
				],
				[
					e.themeFontPresence?.ascii ?? null,
					e.themeFontPresence?.highAnsi ?? null,
					e.themeFontPresence?.eastAsia ?? null,
					e.themeFontPresence?.complexScript ?? null
				],
				e.weight ?? null,
				e.style ?? null,
				e.complexScript ?? null,
				e.fontHint ?? null,
				e.eastAsiaLanguage ?? null,
				e.eastAsiaFontCharset ?? null,
				e.genericFamily ?? null,
				e.letterSpacingPt ?? null,
				e.kerning ?? null,
				e.measure ?? null,
				e.clusterGeometry ?? null
			]), n = l.get(t);
			if (n) return n;
			let i = [], o = Object.freeze([...new Set([
				0,
				...N(e.text),
				e.text.length
			])].sort((e, t) => e - t)), u = new Set(o), d = 0;
			for (let t of e.text) {
				let n = d + t.length, a = Hi(e, "eastAsia"), o = e.eastAsiaFontCharset ?? (a ? r[a.trim().toLocaleLowerCase("en-US")] : void 0), s = Vi(t.codePointAt(0) ?? 0, e.complexScript ?? !1, e.fontHint, e.eastAsiaLanguage, o), c = i.at(-1);
				c?.script === s ? (c.text += t, c.end = n) : i.push({
					text: t,
					start: d,
					end: n,
					script: s,
					breakBefore: u.has(d)
				}), d = n;
			}
			let f = i.map((t) => {
				let n = a({
					fonts: e.fonts,
					themeFonts: e.themeFonts,
					themeFontPresence: e.themeFontPresence,
					slot: t.script,
					text: t.text,
					eastAsiaLanguage: e.eastAsiaLanguage,
					weight: e.weight,
					style: e.style,
					genericFamily: e.genericFamily
				}), r = e.measure === !1 ? {
					advancePt: 0,
					ascentPt: 0,
					descentPt: 0
				} : s({
					text: t.text,
					fontRoute: n.route,
					fontSizePt: e.fontSizePt,
					weight: n.weight,
					style: n.style,
					letterSpacingPt: e.letterSpacingPt ?? 0,
					kerning: e.kerning
				});
				return Object.freeze({
					...t,
					...r,
					font: n,
					fontRoute: n.route
				});
			}), p = f.flatMap((e) => e.font.diagnostics), m = f.length > 0 && f.every((e) => e.inkBounds !== void 0) ? (() => {
				let e = 0, t = Infinity, n = -Infinity, r = 0, i = 0;
				for (let a of f) {
					let o = a.inkBounds;
					t = Math.min(t, e + o.xMinPt), n = Math.max(n, e + o.xMaxPt), r = Math.max(r, o.ascentPt), i = Math.max(i, o.descentPt), e += a.advancePt;
				}
				return Object.freeze({
					xMinPt: t,
					xMaxPt: n,
					ascentPt: r,
					descentPt: i
				});
			})() : void 0, h = f.reduce((e, t) => e + t.advancePt, 0), g = e.clusterGeometry === !1 ? void 0 : (() => {
				let t = new Map([[0, 0], [e.text.length, h]]), n = (n) => {
					if (e.measure === !1 || n <= 0) return 0;
					let r = t.get(n);
					if (r !== void 0) return r;
					let i = 0;
					for (let t of f) {
						if (n >= t.end) {
							i += t.advancePt;
							continue;
						}
						if (n <= t.start) break;
						i += c({
							text: t.text.slice(0, n - t.start),
							fontRoute: t.fontRoute,
							fontSizePt: e.fontSizePt,
							weight: t.font.weight,
							style: t.font.style,
							letterSpacingPt: e.letterSpacingPt ?? 0,
							kerning: e.kerning
						});
						break;
					}
					return t.set(n, i), i;
				};
				return Object.freeze(o.slice(0, -1).map((e, t) => {
					let r = o[t + 1] ?? e, i = n(e);
					return Object.freeze({
						range: Object.freeze({
							start: e,
							end: r
						}),
						offsetPt: i,
						advancePt: n(r) - i
					});
				}));
			})(), _ = Object.freeze({
				advancePt: h,
				ascentPt: Math.max(0, ...f.map((e) => e.ascentPt)),
				descentPt: Math.max(0, ...f.map((e) => e.descentPt)),
				...m ? { inkBounds: m } : {},
				...m && f.every((e) => e.horizontalInkBoundsAreTight === !0) ? { horizontalInkBoundsAreTight: !0 } : {},
				spans: Object.freeze(f),
				graphemeBoundaries: o,
				...g ? { clusters: g } : {},
				diagnostics: Object.freeze(p)
			});
			return l.set(t, _), _;
		}
	});
}
//#endregion
//#region packages/docx/src/fit-text.ts
function Wi(e, t) {
	let n = [];
	for (let r = 0; r < e.length;) {
		let i = e[r];
		if (i.fitTextValTwips === void 0) {
			r += 1;
			continue;
		}
		let a = r + 1;
		if (i.fitTextId !== void 0) for (; a < e.length && e[a].fitTextValTwips !== void 0 && e[a].fitTextId === i.fitTextId;) a += 1;
		let o = 0, s = 0;
		for (let t = r; t < a; t += 1) {
			let n = e[t];
			o += n.naturalWidthPx * (n.charScale ?? 1), s += n.charCount;
		}
		let c = i.fitTextValTwips / 20 * t, l = s > 1 ? (c - o) / (s - 1) : 0, u = c - o - Math.max(0, s - 1) * l;
		n.push({
			start: r,
			end: a,
			targetPx: c,
			naturalPx: o,
			charCount: s,
			perGapPx: l,
			trailingPadPx: u
		}), r = a;
	}
	return n;
}
//#endregion
//#region packages/docx/src/layout/exact-geometry.ts
function Gi(e) {
	return e < 0n ? -e : e;
}
function Ki(e, t) {
	let n = Gi(e), r = Gi(t);
	for (; r !== 0n;) {
		let e = n % r;
		n = r, r = e;
	}
	return n;
}
function qi(e, t) {
	if (t === 0n) throw Error("Exact rational denominator must be nonzero");
	if (e === 0n) return Object.freeze({
		numerator: 0n,
		denominator: 1n
	});
	let n = t < 0n ? -1n : 1n, r = Ki(e, t);
	return Object.freeze({
		numerator: n * e / r,
		denominator: n * t / r
	});
}
function H(e, t) {
	let n = e.numerator * t.denominator - t.numerator * e.denominator;
	return n < 0n ? -1 : +(n > 0n);
}
function Ji(e, t) {
	return qi(e.numerator * t.denominator - t.numerator * e.denominator, e.denominator * t.denominator);
}
function Yi(e, t) {
	return qi(e.numerator * t.denominator + t.numerator * e.denominator, 2n * e.denominator * t.denominator);
}
function Xi(e) {
	return `${e.numerator}/${e.denominator}`;
}
var Zi = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));
function Qi(e) {
	if (!Number.isFinite(e)) throw Error("Exact geometry requires a finite binary64 value");
	if (e === 0) return Object.freeze({
		coefficient: 0n,
		exponent: 0
	});
	Zi.setFloat64(0, e, !1);
	let t = Zi.getBigUint64(0, !1), n = t >> 63n != 0n, r = Number(t >> 52n & 2047n), i = t & (1n << 52n) - 1n, a = r === 0 ? i : 1n << 52n | i, o = r === 0 ? -1074 : r - 1023 - 52;
	for (; (a & 1n) == 0n;) a >>= 1n, o += 1;
	return Object.freeze({
		coefficient: n ? -a : a,
		exponent: o
	});
}
function $i(e) {
	return e === 0n ? 0 : e.toString(2).length;
}
function ea(e, t, n) {
	let r = n >= 0 ? e : e << BigInt(-n), i = n >= 0 ? t << BigInt(n) : t;
	return r < i ? -1 : +(r > i);
}
function ta(e, t, n) {
	let r = n >= 0 ? e << BigInt(n) : e, i = n >= 0 ? t : t << BigInt(-n), a = r / i, o = r % i * 2n;
	return (o > i || o === i && (a & 1n) != 0n) && (a += 1n), a;
}
function na(e) {
	return Zi.setBigUint64(0, e, !1), Zi.getFloat64(0, !1);
}
function ra(e) {
	if (e.numerator === 0n) return 0;
	let t = e.numerator < 0n, n = Gi(e.numerator), r = e.denominator, i = $i(n) - $i(r);
	ea(n, r, i) < 0 && --i;
	let a = t ? 1n << 63n : 0n;
	if (i < -1022) {
		let e = ta(n, r, 1074);
		return na(e === 0n ? a : e >= 1n << 52n ? a | 1n << 52n : a | e);
	}
	let o = ta(n, r, 52 - i);
	if (o === 1n << 53n && (o >>= 1n, i += 1), i > 1023) return t ? -Infinity : Infinity;
	let s = BigInt(i + 1023) << 52n, c = o - (1n << 52n);
	return na(a | s | c);
}
function ia(e) {
	if (e === Infinity) return e;
	if (Object.is(e, -0) || e === 0) return Number.MIN_VALUE;
	Zi.setFloat64(0, e, !1);
	let t = Zi.getBigUint64(0, !1);
	return na(e > 0 ? t + 1n : t - 1n);
}
function aa(e) {
	let t = ra(e);
	if (t === Infinity) return t;
	if (t === -Infinity) return -Number.MAX_VALUE;
	let n = Qi(t);
	return H(n.exponent >= 0 ? {
		numerator: n.coefficient << BigInt(n.exponent),
		denominator: 1n
	} : {
		numerator: n.coefficient,
		denominator: 1n << BigInt(-n.exponent)
	}, e) >= 0 ? t : ia(t);
}
function oa(e) {
	return -aa({
		numerator: -e.numerator,
		denominator: e.denominator
	});
}
//#endregion
//#region packages/docx/src/layout/polygon-wrap.ts
function sa(e) {
	if (!e.points || e.points.length < 3 || e.points.some((e) => !Number.isFinite(e.xPt) || !Number.isFinite(e.yPt))) throw Error(`Invalid ${e.kind} wrapPolygon for ${e.imageKey}`);
	if (![
		e.xLeftPt,
		e.xRightPt,
		e.yTopPt,
		e.yBottomPt
	].every(Number.isFinite) || e.xRightPt < e.xLeftPt || e.yBottomPt < e.yTopPt) throw Error(`Invalid finite wrap bounds for ${e.imageKey}`);
}
var ca = /* @__PURE__ */ new WeakMap();
function la(e, t) {
	return e.x === t.x && e.y === t.y;
}
function ua(e, t, n, r) {
	return e * r - t * n;
}
function da(e, t) {
	return t > 0n ? e >= 0n && e <= t : e <= 0n && e >= t;
}
function fa(e, t) {
	let n = la(e.from, t.from) || la(e.from, t.to) ? e.from : la(e.to, t.from) || la(e.to, t.to) ? e.to : null;
	if (n) return Object.freeze({
		y: qi(n.y, 1n),
		contact: "shared-endpoint"
	});
	let r = e.to.x - e.from.x, i = e.to.y - e.from.y, a = t.to.x - t.from.x, o = t.to.y - t.from.y, s = ua(r, i, a, o);
	if (s === 0n) return null;
	let c = t.from.x - e.from.x, l = t.from.y - e.from.y, u = ua(c, l, a, o), d = ua(c, l, r, i);
	return !da(u, s) || !da(d, s) ? null : Object.freeze({
		y: qi(e.from.y * s + i * u, s),
		contact: i === 0n || o === 0n ? "horizontal" : "active-crossing"
	});
}
function pa(e, t) {
	return `${e}:${t}`;
}
function ma(e, t, n) {
	let r = /* @__PURE__ */ new Set();
	for (let i of t) {
		if (i < 0 || i >= Math.floor(e.length / 2)) continue;
		n();
		let t = e[i * 2], a = e[i * 2 + 1];
		r.add(pa(t, a));
	}
	return r;
}
function ha(e) {
	let t = (e) => {
		if (e.length === 0) return null;
		let n = e[Math.floor(e.length / 2)].yTopPt, r = [], i = [], a = [];
		for (let t of e) t.yBottomPt <= n ? r.push(t) : t.yTopPt > n ? i.push(t) : a.push(t);
		return Object.freeze({
			centerYPt: n,
			crossingByTop: Object.freeze(a),
			crossingByBottom: Object.freeze(a.slice().sort((e, t) => t.yBottomPt - e.yBottomPt)),
			below: t(r),
			above: t(i)
		});
	};
	return t(e.slice().sort((e, t) => e.yTopPt - t.yTopPt || e.yBottomPt - t.yBottomPt));
}
function ga(e, t) {
	return ra(t >= 0 ? {
		numerator: e.numerator << BigInt(t),
		denominator: e.denominator
	} : {
		numerator: e.numerator,
		denominator: e.denominator << BigInt(-t)
	});
}
function _a(e, t) {
	return aa(t >= 0 ? {
		numerator: e.numerator << BigInt(t),
		denominator: e.denominator
	} : {
		numerator: e.numerator,
		denominator: e.denominator << BigInt(-t)
	});
}
function va(e, t) {
	let n = Qi(e), r = n.exponent - t;
	return r >= 0 ? {
		numerator: n.coefficient << BigInt(r),
		denominator: 1n
	} : {
		numerator: n.coefficient,
		denominator: 1n << BigInt(-r)
	};
}
function ya(e, t, n) {
	let r = e.dx * n.numerator - e.c * n.denominator, i = t.dx * n.numerator - t.c * n.denominator, a = r * t.dy - i * e.dy;
	return a < 0n ? -1 : +(a > 0n);
}
function ba(e) {
	let t = (e) => {
		if (e.length === 0) return null;
		let n = e[Math.floor(e.length / 2)].yTop, r = [], i = [], a = [];
		for (let t of e) H(t.yBottom, n) <= 0 ? r.push(t) : H(t.yTop, n) > 0 ? i.push(t) : a.push(t);
		return Object.freeze({
			centerY: n,
			crossingByTop: Object.freeze(a),
			crossingByBottom: Object.freeze(a.slice().sort((e, t) => H(t.yBottom, e.yBottom))),
			below: t(r),
			above: t(i)
		});
	};
	return t(e.slice().sort((e, t) => H(e.yTop, t.yTop) || H(e.yBottom, t.yBottom)));
}
function xa(e, t, n, r) {
	if (!(!e || H(n, t) <= 0)) {
		if (H(n, e.centerY) <= 0) {
			for (let t of e.crossingByTop) {
				if (H(t.yTop, n) >= 0) break;
				r.push(t);
			}
			xa(e.below, t, n, r);
			return;
		}
		if (H(t, e.centerY) >= 0) {
			for (let n of e.crossingByBottom) {
				if (H(n.yBottom, t) <= 0) break;
				r.push(n);
			}
			xa(e.above, t, n, r);
			return;
		}
		r.push(...e.crossingByTop), xa(e.below, t, n, r), xa(e.above, t, n, r);
	}
}
function Sa(e, t, n, r, i) {
	let a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
	t.forEach((e, t) => {
		if (e.minY === e.maxY) return;
		let n = Xi(qi(e.minY, 1n)), r = Xi(qi(e.maxY, 1n)), i = a.get(n);
		i ? i.push(t) : a.set(n, [t]);
		let s = o.get(r);
		s ? s.push(t) : o.set(r, [t]);
	});
	let s = /* @__PURE__ */ new Map();
	for (let e of i) {
		if (e.contact !== "active-crossing") continue;
		let t = Xi(e.y), n = s.get(t);
		n || s.set(t, n = /* @__PURE__ */ new Set()), n.add(e.leftEdge), n.add(e.rightEdge);
	}
	let c = [], l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map(), d = [], f = [], p = 0, m = 0, h = (t, n, i) => {
		for (let a of t) {
			if (n.has(a)) continue;
			let t = u.get(a);
			if (t && H(i, t.yTop) > 0) {
				let n = Object.freeze({
					yTop: t.yTop,
					yBottom: i,
					leftEdge: t.leftEdge,
					rightEdge: t.rightEdge
				});
				d.push(n);
				let a = ga(t.yTop, r), o = ga(i, r);
				o > a && f.push(Object.freeze({
					yTopPt: a,
					yBottomPt: o,
					left: e[t.leftEdge],
					right: e[t.rightEdge]
				}));
			}
			u.delete(a);
		}
		for (let e of n) {
			if (t.has(e)) continue;
			let n = e.indexOf(":");
			u.set(e, {
				leftEdge: Number(e.slice(0, n)),
				rightEdge: Number(e.slice(n + 1)),
				yTop: i
			});
		}
	}, g = /* @__PURE__ */ new Map(), _ = (e, t) => {
		e.add(Math.floor((t - 1) / 2)), e.add(Math.floor(t / 2)), e.add(Math.floor((t + 1) / 2));
	}, v = (e) => ma(c, e, () => {
		m += 2;
	}), y = () => {
		let e = /* @__PURE__ */ new Set();
		for (let t = 0; t + 1 < c.length; t += 2) m += 2, e.add(pa(c[t], c[t + 1]));
		return e;
	};
	for (let e = 0; e < n.length; e += 1) {
		let r = n[e], i = n[e + 1], u = i ? Yi(r, i) : r, d = (e, n) => (p += 1, ya(t[e], t[n], u) || e - n), f = (e) => {
			let t = 0, n = c.length;
			for (; t < n;) {
				let r = t + n >>> 1;
				d(c[r], e) <= 0 ? t = r + 1 : n = r;
			}
			c.splice(t, 0, e);
			for (let e = t; e < c.length; e += 1) g.set(c[e], e);
		}, m = (e) => {
			let t = g.get(e);
			if (t !== void 0) {
				c.splice(t, 1), g.delete(e);
				for (let e = t; e < c.length; e += 1) g.set(c[e], e);
			}
		}, b = (e) => {
			let n = [...e].filter((e) => g.has(e) && H(qi(t[e].minY, 1n), r) <= 0 && H(r, qi(t[e].maxY, 1n)) < 0), i = n.map((e) => g.get(e)).sort((e, t) => e - t);
			n.sort(d);
			for (let e = 0; e < i.length; e += 1) {
				let t = i[e], r = n[e];
				c[t] = r, g.set(r, t);
			}
		}, x = Xi(r), S = o.get(x) ?? [], C = a.get(x) ?? [], w = s.get(x) ?? l;
		if (S.length === 0 && C.length === 0 && (w.size === 0 || i === void 0)) continue;
		let T = S.length > 0 || C.length > 0, E = /* @__PURE__ */ new Set();
		if (!T) for (let e of w) {
			let t = g.get(e);
			t !== void 0 && _(E, t);
		}
		let D = T ? y() : v(E);
		for (let e of S) m(e);
		for (let e of C) f(e);
		if (w.size > 0 && i !== void 0 && b(w), c.length % 2 != 0) throw Error("Compiled wrapPolygon produced an odd open-slab crossing count");
		if (T) h(D, y(), r);
		else {
			let e = /* @__PURE__ */ new Set();
			for (let t of w) {
				let n = g.get(t);
				n !== void 0 && _(e, n);
			}
			h(D, v(e), r);
		}
	}
	return Object.freeze({
		spans: Object.freeze(f),
		exactSpans: Object.freeze(d),
		orderComparisonCount: p,
		pairMembershipVisitCount: m
	});
}
function Ca(e) {
	sa(e);
	let t = e.points, n = Object.freeze(t.map((e) => Object.freeze({ ...e }))), r = [
		...n.flatMap((e) => [e.xPt, e.yPt]),
		e.xLeftPt,
		e.xRightPt,
		e.yTopPt,
		e.yBottomPt
	].map(Qi).filter(({ coefficient: e }) => e !== 0n), i = r.length === 0 ? 0 : Math.min(...r.map(({ exponent: e }) => e)), a = (e) => {
		let t = Qi(e);
		return t.coefficient === 0n ? 0n : t.coefficient << BigInt(t.exponent - i);
	}, o = n.map((e) => Object.freeze({
		x: a(e.xPt),
		y: a(e.yPt)
	})), s = n.map((e, t) => {
		let r = n[(t + 1) % n.length], i = r.yPt - e.yPt, a = i === 0 ? 0 : (r.xPt - e.xPt) / i;
		return Object.freeze({
			from: e,
			to: r,
			minYPt: Math.min(e.yPt, r.yPt),
			maxYPt: Math.max(e.yPt, r.yPt),
			slopeXPerY: a,
			interceptX: i === 0 ? e.xPt : e.xPt - a * e.yPt
		});
	}), c = o.map((e, t) => {
		let n = o[(t + 1) % o.length], r = e.y <= n.y ? e : n, i = e.y <= n.y ? n : e, a = i.x - r.x, s = i.y - r.y;
		return Object.freeze({
			index: t,
			from: e,
			to: n,
			minY: r.y,
			maxY: i.y,
			dx: a,
			dy: s,
			c: a * r.y - s * r.x
		});
	}), l = [];
	for (let e = 0; e < c.length; e += 1) for (let t = e + 1; t < c.length; t += 1) {
		let n = fa(c[e], c[t]);
		n && l.push(Object.freeze({
			y: n.y,
			contact: n.contact,
			leftEdge: e,
			rightEdge: t
		}));
	}
	let u = Infinity, d = -Infinity, f = Infinity, p = -Infinity;
	for (let e of n) u = Math.min(u, e.xPt), d = Math.max(d, e.xPt), f = Math.min(f, e.yPt), p = Math.max(p, e.yPt);
	let m = /* @__PURE__ */ new Map();
	for (let e of o) {
		let t = qi(e.y, 1n);
		m.set(Xi(t), t);
	}
	for (let e of l) m.set(Xi(e.y), e.y);
	let h = Object.freeze([...m.values()].sort(H)), g = Object.freeze([...new Set(h.map((e) => ga(e, i)))].sort((e, t) => e - t)), _ = Sa(s, c, h, i, l), v = qi(o.reduce((e, t) => t.x < e ? t.x : e, o[0].x), 1n), y = qi(o.reduce((e, t) => t.x > e ? t.x : e, o[0].x), 1n), b = qi(o.reduce((e, t) => t.y < e ? t.y : e, o[0].y), 1n), x = qi(o.reduce((e, t) => t.y > e ? t.y : e, o[0].y), 1n), S = qi(0n, 1n), C = (e, t) => {
		let n = Ji(e, t);
		return H(n, S) > 0 ? n : S;
	}, w = Object.freeze({
		scaleExponent: i,
		edges: Object.freeze(c),
		eventYs: h,
		spans: _.exactSpans,
		spanIndex: ba(_.exactSpans),
		polygonLeft: v,
		polygonRight: y,
		polygonTop: b,
		polygonBottom: x,
		padLeft: C(v, qi(a(e.xLeftPt), 1n)),
		padRight: C(qi(a(e.xRightPt), 1n), y),
		padTop: C(b, qi(a(e.yTopPt), 1n)),
		padBottom: C(qi(a(e.yBottomPt), 1n), x)
	}), T = Object.freeze({
		kind: e.kind,
		edges: Object.freeze(s),
		eventYPts: g,
		contourSpans: _.spans,
		contourSpanIndex: ha(_.spans),
		intersectionCount: l.length,
		compileOrderComparisonCount: _.orderComparisonCount,
		compilePairMembershipVisitCount: _.pairMembershipVisitCount,
		polygonLeftPt: u,
		polygonRightPt: d,
		polygonTopPt: f,
		polygonBottomPt: p,
		padLeftPt: Math.max(0, u - e.xLeftPt),
		padRightPt: Math.max(0, e.xRightPt - d),
		padTopPt: Math.max(0, f - e.yTopPt),
		padBottomPt: Math.max(0, e.yBottomPt - p)
	});
	return ca.set(T, w), T;
}
function wa(e, t) {
	return {
		numerator: e.dx * t.numerator - e.c * t.denominator,
		denominator: e.dy * t.denominator
	};
}
function Ta(e, t) {
	return e.dx * t.dy === t.dx * e.dy && e.c * t.dy === t.c * e.dy;
}
function Ea(e) {
	let t = e.filter((e) => H(e.r, e.l) > 0).slice().sort((e, t) => H(e.l, t.l) || H(e.r, t.r)), n = [];
	for (let e of t) {
		let t = n.at(-1);
		!t || H(e.l, t.r) > 0 ? n.push({ ...e }) : H(e.r, t.r) > 0 && (n[n.length - 1] = {
			l: t.l,
			r: e.r
		});
	}
	return n;
}
function Da(e, t) {
	return {
		numerator: e.numerator * t.denominator + t.numerator * e.denominator,
		denominator: e.denominator * t.denominator
	};
}
function Oa(e, t) {
	return {
		numerator: e.numerator * t.denominator - t.numerator * e.denominator,
		denominator: e.denominator * t.denominator
	};
}
function ka(e, t, n) {
	let r = ca.get(e);
	if (!r) throw Error("Compiled polygon omitted its exact geometry authority");
	let i = Oa(t, r.padBottom), a = Da(n, r.padTop), o = H(r.polygonTop, i) >= 0 ? r.polygonTop : i, s = H(r.polygonBottom, a) <= 0 ? r.polygonBottom : a;
	if (H(s, o) <= 0) return [];
	let c = [], l = [];
	xa(r.spanIndex, o, s, l);
	for (let e of l) {
		let t = H(o, e.yTop) >= 0 ? o : e.yTop, n = H(s, e.yBottom) <= 0 ? s : e.yBottom;
		if (H(n, t) <= 0) continue;
		let i = r.edges[e.leftEdge], a = r.edges[e.rightEdge];
		if (Ta(i, a)) continue;
		let l = wa(i, t), u = wa(i, n), d = wa(a, t), f = wa(a, n);
		c.push({
			l: Oa(H(l, u) <= 0 ? l : u, r.padLeft),
			r: Da(H(d, f) >= 0 ? d : f, r.padRight)
		});
	}
	let u = Ea(c);
	return e.kind === "through" || u.length === 0 ? u : [{
		l: u[0].l,
		r: u.at(-1).r
	}];
}
function Aa(e, t, n) {
	let r = ca.get(e);
	if (!r) throw Error("Compiled polygon omitted its exact geometry authority");
	let i = va(t, r.scaleExponent), a = Da(i, va(n, r.scaleExponent)), o = (e) => r.scaleExponent >= 0 ? {
		numerator: e.numerator << BigInt(r.scaleExponent),
		denominator: e.denominator
	} : {
		numerator: e.numerator,
		denominator: e.denominator << BigInt(-r.scaleExponent)
	};
	return Object.freeze(ka(e, i, a).map((e) => Object.freeze({
		l: o(e.l),
		r: o(e.r)
	})));
}
function ja(e, t) {
	let n = ca.get(e);
	if (!n) throw Error("Compiled polygon omitted its exact geometry authority");
	let r = va(t, n.scaleExponent), i = /* @__PURE__ */ new Set();
	for (let e of n.eventYs) i.add(_a(Da(e, n.padBottom), n.scaleExponent)), i.add(_a(Oa(Oa(e, r), n.padTop), n.scaleExponent));
	return Object.freeze([...i].filter(Number.isFinite).sort((e, t) => e - t));
}
function Ma(e, t, n, r) {
	let i = ca.get(e);
	if (!i) throw Error("Compiled polygon omitted its exact geometry authority");
	let a = Yi(va(n, i.scaleExponent), va(r, i.scaleExponent)), o = va(t, i.scaleExponent), s = Oa(a, i.padBottom), c = Da(o, i.padTop), l = Da(a, c), u = H(i.polygonTop, s) >= 0 ? i.polygonTop : s, d = H(i.polygonBottom, l) <= 0 ? i.polygonBottom : l, f = [], p = [];
	xa(i.spanIndex, u, d, p);
	for (let e of p) {
		let t = H(u, e.yTop) >= 0 ? u : e.yTop;
		if (H(H(d, e.yBottom) <= 0 ? d : e.yBottom, t) <= 0) continue;
		let n = i.edges[e.leftEdge], r = i.edges[e.rightEdge];
		if (Ta(n, r)) continue;
		let a = H(s, e.yTop) > 0, o = H(l, e.yBottom) < 0, p = (e, t, n, r) => {
			let a = t ? n : r, o = {
				numerator: e.dx * a.numerator - e.c * a.denominator,
				denominator: e.dy * a.denominator
			};
			return {
				slope: t ? {
					numerator: e.dx,
					denominator: e.dy
				} : {
					numerator: 0n,
					denominator: 1n
				},
				intercept: i.scaleExponent >= 0 ? {
					numerator: o.numerator << BigInt(i.scaleExponent),
					denominator: o.denominator
				} : {
					numerator: o.numerator,
					denominator: o.denominator << BigInt(-i.scaleExponent)
				}
			};
		}, m = p(n, a, {
			numerator: -i.padBottom.numerator,
			denominator: i.padBottom.denominator
		}, e.yTop), h = p(n, o, c, e.yBottom), g = p(r, a, {
			numerator: -i.padBottom.numerator,
			denominator: i.padBottom.denominator
		}, e.yTop), _ = p(r, o, c, e.yBottom), v = n.dx >= 0n ? m : h, y = r.dx >= 0n ? _ : g, b = Object.freeze({
			left: Object.freeze({
				slope: v.slope,
				intercept: Oa(v.intercept, i.scaleExponent >= 0 ? {
					numerator: i.padLeft.numerator << BigInt(i.scaleExponent),
					denominator: i.padLeft.denominator
				} : {
					numerator: i.padLeft.numerator,
					denominator: i.padLeft.denominator << BigInt(-i.scaleExponent)
				})
			}),
			right: Object.freeze({
				slope: y.slope,
				intercept: Da(y.intercept, i.scaleExponent >= 0 ? {
					numerator: i.padRight.numerator << BigInt(i.scaleExponent),
					denominator: i.padRight.denominator
				} : {
					numerator: i.padRight.numerator,
					denominator: i.padRight.denominator << BigInt(-i.scaleExponent)
				})
			})
		});
		f.push(b);
	}
	return Object.freeze(f);
}
//#endregion
//#region packages/docx/src/layout/axis-aligned-overlap.ts
function Na(e, t, n) {
	return e.left < t.right - n && e.right > t.left + n && e.top < t.bottom - n && e.bottom > t.top + n;
}
function Pa(e, t, n) {
	let r = e.right - e.left, i = e.bottom - e.top;
	if (r < 0 || i < 0) throw RangeError("Overlap rectangle has negative extent");
	let a = e.left, o = e.top;
	for (let e = 0; e <= t.length; e += 1) {
		let s = {
			left: a,
			right: a + r,
			top: o,
			bottom: o + i
		}, c = t.map((e) => ({
			left: e.left,
			right: e.right,
			top: e.top,
			bottom: e.bottom
		})).filter((e) => Na(s, e, n.overlapEpsilon));
		if (c.length === 0) return Object.freeze({
			left: a,
			top: o
		});
		if (e === t.length) throw Error("Axis-aligned overlap resolution did not converge");
		let l = Math.max(...c.map((e) => e.right));
		if (l + r <= n.rightBoundary + n.rightBoundarySlack) {
			a = l;
			continue;
		}
		o = Math.max(...c.map((e) => e.bottom));
	}
	throw Error("Axis-aligned overlap resolution did not converge");
}
//#endregion
//#region packages/docx/src/layout/compatibility.ts
function Fa(e, t) {
	if (e.trim() === "") throw Error(`CompatibilityRule.${t} must not be empty`);
}
function U(e) {
	if (Fa(e.id, "id"), Fa(e.description, "description"), !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(e.id)) throw Error("CompatibilityRule.id must be a stable kebab-case identifier");
	if (e.evidence.kind === "microsoft-note") {
		if (Fa(e.evidence.reference, "evidence.reference"), !/^\[MS-[A-Z0-9]+\] §§?\d/.test(e.evidence.reference)) throw Error("CompatibilityRule.evidence.reference must identify a Microsoft specification section");
	} else if (e.evidence.kind === "regression-test") {
		if (Fa(e.evidence.reference, "evidence.reference"), !/^packages\/docx\/src\/.+\.(?:test|spec)\.tsx?#[^#]+$/.test(e.evidence.reference)) throw Error("CompatibilityRule.evidence.reference must use DOCX path#test-title");
	} else if (Fa(e.evidence.syntheticFixtureId, "evidence.syntheticFixtureId"), Fa(e.evidence.application, "evidence.application"), Fa(e.evidence.version, "evidence.version"), Fa(e.evidence.platform, "evidence.platform"), !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(e.evidence.syntheticFixtureId)) throw Error("CompatibilityRule.evidence.syntheticFixtureId must be kebab-case");
	return Object.freeze(e.evidence), Object.freeze(e);
}
U({
	id: "word-section-btlr-tbrl-page-frame",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/layout/coordinate-space.test.ts#maps Transitional text direction %s to %s"
	},
	description: "Issue #988 comment 4950296007 records that, unlike the normative ECMA-376 Part 4 §14.11.7 equivalence to lr, Word uses the tbRl page frame for section-level btLr; this rule covers only the page frame, while glyph orientation is paint-owned."
}), U({
	id: "word-square-line-start-one-inch",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/float-line-start-one-inch.test.ts#(e) the boundary is identical across scales (absolute pt width)"
	},
	description: "Issue #676 records that Word starts a content line beside a square-wrapped object only when the free side gap is at least one inch; tight and through polygon openings and empty paragraph marks are outside this rule."
});
var Ia = U({
	id: "word-float-different-paragraph-displacement",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/layout/floats.test.ts#keeps observed different-paragraph displacement on exclusion bounds"
	},
	description: "Preserve the established Word-compatible policy that an overlap-permitted float is displaced by exclusion geometry from floats anchored in other paragraphs, while same-paragraph floats may overlap."
}), La = U({
	id: "word-page-anchored-table-collision-deferral",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/float-table-page-fit.test.ts#(g) DEFERS a page-anchored floating table when its raw band intersects an existing table float"
	},
	description: "Preserve the established Word-compatible pagination behavior that defers an absolute page- or margin-anchored floating table when its authored object band intersects an existing floating-table text-exclusion band on the page."
});
U({
	id: "word-empty-mark-float-side-gap",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/float-line-start-one-inch.test.ts#keeps an anchor-host metric-only line on the paragraph-mark threshold"
	},
	description: "An empty or anchor-only paragraph-mark line may start beside a square-wrapped object when the available side gap can hold the paragraph mark em; the one-inch content-line threshold does not apply."
});
var Ra = .05;
function za(e) {
	return (72 - Ra) * e;
}
function Ba(e, t) {
	return e * t;
}
//#endregion
//#region packages/docx/src/layout/floats.ts
var Va = .01, Ha = .5;
function Ua(e, t) {
	return Object.freeze(e === "overlap" ? {
		kind: "word-different-paragraph",
		paragraphId: t
	} : { kind: "none" });
}
function Wa(e, t) {
	return Object.freeze(e ? {
		kind: "word-different-paragraph",
		paragraphId: t
	} : { kind: "drawingml-normative" });
}
function Ga(e) {
	let t = {
		occurrenceId: e.occurrenceId,
		paragraphId: e.paragraphId,
		bounds: e.bounds,
		exclusionBounds: e.exclusionBounds
	};
	return e.kind === "table" ? {
		...t,
		kind: "table",
		tableOverlap: e.overlap
	} : {
		...t,
		kind: e.kind === "shape" ? "drawingml" : "frame"
	};
}
function Ka(e, t) {
	let n = e.imageX, r = e.imageY, i = e.imageW, a = e.imageH, o = e.xLeft, s = e.xRight, c = e.yTop, l = e.yBottom, u = {
		occurrenceId: e.anchorOccurrenceId ?? e.acquisitionOccurrenceId ?? `display-float:${t}`,
		paragraphId: e.paraId,
		bounds: {
			xPt: n,
			yPt: r,
			widthPt: i,
			heightPt: a
		},
		exclusionBounds: {
			xPt: o,
			yPt: c,
			widthPt: s - o,
			heightPt: l - c
		}
	};
	return e.kind === "table" ? {
		...u,
		kind: "table",
		tableOverlap: e.tableOverlap
	} : {
		...u,
		kind: e.kind === "shape" ? "drawingml" : "frame"
	};
}
function qa(e) {
	let t = e.xPt, n = e.yPt, r = e.widthPt, i = e.heightPt;
	return {
		left: t,
		right: t + r,
		top: n,
		bottom: n + i
	};
}
function Ja(e, t, n) {
	return t === 0 && n === 0 ? e : Object.freeze({
		xPt: e.xPt + t,
		yPt: e.yPt + n,
		widthPt: e.widthPt,
		heightPt: e.heightPt
	});
}
function Ya(e, t, n, r) {
	return Object.freeze({
		bounds: Ja(e.bounds, t, n),
		exclusionBounds: Ja(e.exclusionBounds, t, n),
		displacement: Object.freeze({
			xPt: t,
			yPt: n
		}),
		appliedCompatibilityRuleIds: Object.freeze([...r])
	});
}
function Xa(e, t) {
	let n = e.bounds.xPt - e.exclusionBounds.xPt, r = e.bounds.yPt - e.exclusionBounds.yPt, i = e.exclusionBounds.xPt + e.exclusionBounds.widthPt - e.bounds.xPt - e.bounds.widthPt, a = e.exclusionBounds.yPt + e.exclusionBounds.heightPt - e.bounds.yPt - e.bounds.heightPt, o = qa(t.exclusionBounds);
	return {
		left: o.left - i,
		right: o.right + n,
		top: o.top - a,
		bottom: o.bottom + r
	};
}
function Za(e, t, n = e.rightBoundaryPt) {
	let r = qa(e.moving.bounds);
	return t.length === 0 ? Object.freeze({
		left: r.left,
		top: r.top
	}) : Pa(r, t, {
		overlapEpsilon: e.overlapEpsilonPt ?? 0,
		rightBoundary: n,
		rightBoundarySlack: e.rightBoundarySlackPt ?? 0
	});
}
function Qa(e) {
	let { moving: t, avoidance: n } = e, r = e.blockers.flatMap((e) => t.kind === "table" && e.kind === "table" && (t.tableOverlap === "never" || e.tableOverlap === "never") || n.kind === "drawingml-normative" && e.kind === "drawingml" ? [qa(e.bounds)] : []), i = n.kind === "word-different-paragraph" ? e.blockers.flatMap((e) => e.paragraphId === n.paragraphId ? [] : [Xa(t, e)]) : [], a = t.exclusionBounds.xPt + t.exclusionBounds.widthPt - t.bounds.xPt - t.bounds.widthPt, o = n.kind === "word-different-paragraph" ? e.rightBoundaryPt - a : e.rightBoundaryPt, s = Za(e, r, o), c = i.length === 0 ? s : Za(e, [...r, ...i], o);
	return Ya(t, c.left - t.bounds.xPt, c.top - t.bounds.yPt, c.left !== s.left || c.top !== s.top ? [Ia.id] : []);
}
function $a(e) {
	if (e.inlineEndPt < e.inlineStartPt || e.blockExtentPt < 0) throw RangeError("Block-flow admission received a negative extent");
	let t = e.blockers.filter((t) => {
		let n = t.exclusionBounds;
		return t.kind === "table" && e.inlineEndPt - n.xPt > e.overlapEpsilonPt && n.xPt + n.widthPt - e.inlineStartPt > e.overlapEpsilonPt;
	}), n = e.blockStartPt;
	for (let r = 0; r <= t.length; r += 1) {
		let i = t.filter((t) => {
			let r = t.exclusionBounds;
			return n + e.blockExtentPt - r.yPt > e.overlapEpsilonPt && r.yPt + r.heightPt - n > e.overlapEpsilonPt;
		});
		if (i.length === 0) return Object.freeze({ blockStartPt: n });
		if (r === t.length) throw Error("Block-flow float admission did not converge");
		n = Math.max(...i.map((e) => e.exclusionBounds.yPt + e.exclusionBounds.heightPt));
	}
	throw Error("Block-flow float admission did not converge");
}
function eo(e) {
	let t = qa(e.bounds), n = e.blockers.some((n) => n.kind === "table" && Na(t, qa(n.exclusionBounds), e.overlapEpsilonPt));
	return Object.freeze({
		defer: n,
		appliedCompatibilityRuleIds: Object.freeze(n ? [La.id] : [])
	});
}
//#endregion
//#region packages/docx/src/layout/float-wrap.ts
function W(e) {
	let t = Qi(e);
	return t.exponent >= 0 ? {
		numerator: t.coefficient << BigInt(t.exponent),
		denominator: 1n
	} : {
		numerator: t.coefficient,
		denominator: 1n << BigInt(-t.exponent)
	};
}
function to(e, t) {
	return {
		numerator: e.numerator * t.denominator + t.numerator * e.denominator,
		denominator: e.denominator * t.denominator
	};
}
function no(e, t) {
	return {
		numerator: e.numerator * t.denominator - t.numerator * e.denominator,
		denominator: e.denominator * t.denominator
	};
}
function ro(e, t) {
	return {
		numerator: e.numerator * t.numerator,
		denominator: e.denominator * t.denominator
	};
}
function io(e, t) {
	let n = t.numerator < 0n;
	return {
		numerator: (n ? -e.numerator : e.numerator) * t.denominator,
		denominator: e.denominator * (n ? -t.numerator : t.numerator)
	};
}
function ao(e, t) {
	let n = W(e), r = W(t);
	return ra({
		numerator: n.numerator * r.denominator + r.numerator * n.denominator,
		denominator: 2n * n.denominator * r.denominator
	});
}
function oo(e) {
	switch (e) {
		case "left":
		case "right":
		case "largest":
		case "bothSides": return e;
		default: return "bothSides";
	}
}
function so(e) {
	return e === "square" || e === "topAndBottom" || e === "tight" || e === "through";
}
function co(e, t, n) {
	return e.xRight > t + .01 && e.xLeft < n - .01;
}
var lo = /* @__PURE__ */ new WeakMap(), uo = 4, fo = /* @__PURE__ */ new WeakMap();
function po(e) {
	return Object.isFrozen(e) && e.every((e) => Object.isFrozen(e));
}
function mo(e, t, n, r, i, a) {
	return e.kind === t && Object.is(e.xLeftPt, n) && Object.is(e.xRightPt, r) && Object.is(e.yTopPt, i) && Object.is(e.yBottomPt, a);
}
function ho(e, t, n) {
	let r = e.authoredWrap;
	if (r !== "tight" && r !== "through") throw Error("Polygon compilation requires tight or through wrap");
	let i = {
		kind: r,
		imageKey: e.imageKey,
		points: e.wrapPolygon,
		xLeftPt: e.xLeft,
		xRightPt: e.xRight,
		yTopPt: e.yTop,
		yBottomPt: e.yBottom
	};
	sa(i);
	let a = po(t);
	if (a) {
		let i = fo.get(t)?.find((t) => mo(t, r, e.xLeft, e.xRight, e.yTop, e.yBottom));
		if (i) return n && (n.polygonCacheHitCount += 1), i.compiled;
	}
	n && (n.polygonCompileCount += 1);
	let o = Ca(i);
	if (a) {
		let n = Object.freeze({
			kind: r,
			xLeftPt: e.xLeft,
			xRightPt: e.xRight,
			yTopPt: e.yTop,
			yBottomPt: e.yBottom,
			compiled: o
		});
		fo.set(t, Object.freeze([n, ...(fo.get(t) ?? []).slice(0, uo - 1)]));
	}
	return o;
}
function go(e, t) {
	let n = e.map((e) => {
		let n = e.wrapPolygon;
		t && n && (t.polygonSnapshotPointCount += n.length);
		let r = Object.freeze({
			...e,
			...n ? { wrapPolygon: Object.freeze(n.map((e) => Object.freeze({ ...e }))) } : {}
		}), i = r.authoredWrap === "tight" || r.authoredWrap === "through" ? ho(r, n ?? [], t) : null;
		return Object.freeze({
			rect: r,
			polygon: i,
			wrapMaximumLeftPt: i ? Math.min(r.xLeft, i.polygonLeftPt) : r.xLeft,
			wrapMaximumRightPt: i ? Math.max(r.xRight, i.polygonRightPt) : r.xRight
		});
	}), r = Object.freeze({ floats: Object.freeze(n) });
	return lo.set(r, /* @__PURE__ */ new Map()), r;
}
function _o(e, t) {
	let n = oo(e.rect.side);
	if (n !== "largest") return n;
	let r = H(no(W(e.wrapMaximumLeftPt), W(t.xLeftPt)), no(W(t.xRightPt), W(e.wrapMaximumRightPt)));
	return r === 0 ? t.readingDirection === "ltr" ? "left" : "right" : r > 0 ? "left" : "right";
}
function vo(e, t, n, r, i, a) {
	let { rect: o, polygon: s } = e, c = s ? Aa(s, t, n) : [{
		l: W(o.xLeft),
		r: W(o.xRight)
	}];
	if (c.length === 0) return [];
	let l = s === null, u = c.reduce((e, t) => H(t.l, e) < 0 ? t.l : e, c[0].l), d = c.reduce((e, t) => H(t.r, e) > 0 ? t.r : e, c[0].r);
	switch (_o(e, a)) {
		case "left": return [{
			l: u,
			r: W(i),
			leftSquareBoundary: l,
			rightSquareBoundary: !1
		}];
		case "right": return [{
			l: W(r),
			r: d,
			leftSquareBoundary: !1,
			rightSquareBoundary: l
		}];
		case "bothSides": return c.map((e) => ({
			...e,
			leftSquareBoundary: l,
			rightSquareBoundary: l
		}));
	}
}
function yo(e, t) {
	let n = lo.get(t);
	if (!n) throw Error("Prepared float geometry omitted its sweep cache");
	let r = n.get(e);
	if (r) return r;
	let i = /* @__PURE__ */ new Set(), a = (e) => {
		Number.isFinite(e) && i.add(e);
	};
	for (let { rect: n, polygon: r } of t.floats) if (a(aa(no(W(n.yTop), W(e)))), a(n.yBottom), r) for (let t of ja(r, e)) a(t);
	let o = Object.freeze([...i].sort((e, t) => e - t));
	return n.set(e, o), o;
}
function bo(e) {
	let t = e.filter((e) => H(e.r, e.l) > 0).slice().sort((e, t) => H(e.l, t.l) || H(e.r, t.r)), n = [];
	for (let e of t) {
		let t = n.at(-1);
		if (!t || H(e.l, t.r) > 0) {
			n.push({ ...e });
			continue;
		}
		H(e.l, t.l) === 0 && (t.leftSquareBoundary = t.leftSquareBoundary && e.leftSquareBoundary);
		let r = H(e.r, t.r);
		r > 0 ? (t.r = e.r, t.rightSquareBoundary = e.rightSquareBoundary) : r === 0 && (t.rightSquareBoundary = t.rightSquareBoundary && e.rightSquareBoundary);
	}
	return n;
}
function xo(e, t, n, r, i) {
	let a = bo(e), o = W(t), s = W(n), c = [], l = (e, t, n) => {
		let r = H(o, e) >= 0 ? o : e, i = H(s, t) <= 0 ? s : t;
		H(i, r) > 0 && c.push({
			l: r,
			r: i,
			squareConstrained: n
		});
	}, u = o, d = !1;
	for (let e of a) {
		if (H(e.r, o) <= 0) {
			d = e.rightSquareBoundary;
			continue;
		}
		if (H(e.l, s) >= 0) {
			l(u, s, d), u = s;
			break;
		}
		H(e.l, u) > 0 && l(u, e.l, d || e.leftSquareBoundary);
		let t = H(e.r, u);
		if (t > 0 ? (u = e.r, d = e.rightSquareBoundary) : t === 0 && (d &&= e.rightSquareBoundary), H(u, s) >= 0) break;
	}
	H(u, s) < 0 && l(u, s, d);
	let f = {
		numerator: 0n,
		denominator: 1n
	};
	for (let e of c) {
		let t = no(e.r, e.l);
		H(t, f) > 0 && (f = t);
	}
	for (let e of c) {
		let t = no(e.r, e.l);
		if (H(t, f) === 0 && H(t, W(Math.max(1, e.squareConstrained ? i : r))) >= 0) return {
			l: e.l,
			r: e.r,
			squareConstrained: e.squareConstrained
		};
	}
	return null;
}
function So(e, t, n, r, i, a, o, s, c, l, u) {
	let d = W(e), f = to(d, W(t)), p = (e) => W(e);
	if (a.floats.some(({ rect: e }) => e.mode === "topAndBottom" && co(e, o, s) && H(f, p(e.yTop)) > 0 && H(d, p(e.yBottom)) < 0)) return null;
	let m = [];
	for (let i of a.floats) {
		let { rect: a } = i;
		if (a.mode !== "square" || H(f, p(a.yTop)) <= 0 || H(d, p(a.yBottom)) >= 0 || !co(a, n, r)) continue;
		let o = vo(i, e, t, n, r, c);
		o.length !== 0 && m.push(...o);
	}
	if (m.length === 0) return {
		topY: e,
		xOffset: 0,
		maxWidth: i
	};
	let h = xo(m, n, r, l, u);
	if (!h) return null;
	let g = {
		numerator: 0n,
		denominator: 1n
	}, _ = no(h.l, W(n)), v = H(_, g) > 0 ? _ : g, y = W(n), b = aa(v), x = n + b, S = W(x);
	if (H(S, h.l) < 0 && (b = aa(no(W(aa(h.l)), y)), x = n + b, S = W(x)), H(S, h.l) < 0) throw Error("Exact float window could not represent a contained start");
	let C = W(r), w = H(h.r, C) <= 0 ? h.r : C, T = no(W(oa(w)), S), E = oa(H(T, g) > 0 ? T : g);
	if (H(W(x + E), w) > 0) throw Error("Exact float window could not represent a contained end");
	return {
		topY: e,
		xOffset: b,
		maxWidth: E
	};
}
function Co(e, t) {
	return to(ro(e.exact.slope, W(t)), e.exact.intercept);
}
function wo(e, t) {
	return H(e.exact.slope, t.exact.slope) === 0 && H(e.exact.intercept, t.exact.intercept) === 0;
}
function To(e, t, n) {
	return H(Co(e, n), Co(t, n)) || H(e.exact.slope, t.exact.slope);
}
function Eo(e, t, n) {
	let r = no(e.slope, t.slope);
	if (r.numerator === 0n) return null;
	let i = no(e.intercept, t.intercept);
	return io(no(W(n), i), r);
}
function Do(e, t, n, r, i) {
	t === null || H(t, W(n)) <= 0 || H(t, W(r)) >= 0 || (e.push(aa(t)), i && (i.localRootCandidateCount += 1));
}
function Oo(e, t, n, r, i, a) {
	let o = e[0];
	for (let r of e.slice(1)) {
		let e = To(r, o, n);
		(t === "min" && e < 0 || t === "max" && e > 0) && (o = r);
	}
	let s = o.square;
	for (let c of e) if (c !== o) {
		if (wo(c, o)) {
			s &&= c.square;
			continue;
		}
		(t === "min" ? H(c.exact.slope, o.exact.slope) < 0 : H(c.exact.slope, o.exact.slope) > 0) && Do(i, Eo(c.exact, o.exact, 0), n, r, a);
	}
	return {
		exact: o.exact,
		square: s
	};
}
function ko(e, t = !1) {
	return {
		exact: {
			slope: {
				numerator: 0n,
				denominator: 1n
			},
			intercept: W(e)
		},
		square: t
	};
}
function Ao(e, t, n, r, i, a, o, s, c) {
	let { rect: l, polygon: u } = e, d = W(ao(n, r));
	if (H(to(d, W(t)), W(l.yTop)) <= 0 || H(d, W(l.yBottom)) >= 0) return [];
	let f = u ? Ma(u, t, n, r).map((e) => ({
		left: {
			exact: e.left,
			square: !1
		},
		right: {
			exact: e.right,
			square: !1
		}
	})) : [{
		left: ko(l.xLeft, !0),
		right: ko(l.xRight, !0)
	}];
	if (f.length === 0) return [];
	let p = Oo(f.map((e) => e.left), "min", n, r, s, c), m = Oo(f.map((e) => e.right), "max", n, r, s, c);
	switch (u?.kind === "tight" && (f = [{
		left: p,
		right: m
	}]), _o(e, o)) {
		case "left": return [{
			left: p,
			right: ko(a)
		}];
		case "right": return [{
			left: ko(i),
			right: m
		}];
		case "bothSides": return f;
	}
}
function jo(e, t, n, r, i) {
	let a = e.slice().sort((e, n) => To(e.left, n.left, t) || To(e.right, n.right, t));
	for (let e = 0; e + 1 < a.length; e += 1) Do(r, Eo(a[e].left.exact, a[e + 1].left.exact, 0), t, n, i);
	let o = [];
	for (let e of a) {
		let a = o.at(-1);
		if (!a) {
			o.push(e);
			continue;
		}
		if (Do(r, Eo(e.left.exact, a.right.exact, 0), t, n, i), To(e.left, a.right, t) > 0) {
			o.push(e);
			continue;
		}
		let s = Oo([a.right, e.right], "max", t, n, r, i), c = wo(a.left, e.left) ? {
			exact: a.left.exact,
			square: a.left.square && e.left.square
		} : a.left;
		o[o.length - 1] = {
			left: c,
			right: s
		};
	}
	return o;
}
function Mo(e, t, n, r, i, a, o, s, c, l, u, d) {
	let f = W(ao(e, t)), p = to(f, W(n));
	if (a.floats.some(({ rect: e }) => e.mode === "topAndBottom" && co(e, o, s) && H(p, W(e.yTop)) > 0 && H(f, W(e.yBottom)) < 0)) return null;
	let m = [], h = [];
	for (let o of a.floats) {
		let { rect: a } = o;
		a.mode === "square" && co(a, r, i) && h.push(...Ao(o, n, e, t, r, i, c, m, d));
	}
	if (h.length === 0) return null;
	let g = jo(h, e, t, m, d), _ = ko(r), v = ko(i), y = [], b = (n, r, i) => {
		let a = {
			slope: no(r.exact.slope, n.exact.slope),
			intercept: no(r.exact.intercept, n.exact.intercept)
		};
		y.push({ exactWidth: a });
		let o = Math.max(1, i ? u : l);
		H(to(ro(a.slope, W(e)), a.intercept), W(o)) < 0 && a.slope.numerator > 0n && Do(m, Eo(r.exact, n.exact, o), e, t, d);
	}, x = _;
	for (let e of g) b(x, e.left, x.square || e.left.square), x = e.right;
	b(x, v, x.square);
	let S = y[0];
	for (let t of y.slice(1)) (H(to(ro(t.exactWidth.slope, W(e)), t.exactWidth.intercept), to(ro(S.exactWidth.slope, W(e)), S.exactWidth.intercept)) || H(t.exactWidth.slope, S.exactWidth.slope)) > 0 && (S = t);
	if (S) for (let n of y) n === S || H(n.exactWidth.slope, S.exactWidth.slope) <= 0 || Do(m, Eo(n.exactWidth, S.exactWidth, 0), e, t, d);
	return m.length === 0 ? null : Math.min(...m);
}
function No(e, t, n, r, i, a, o = r, s = r + i, c = {
	xLeftPt: r,
	xRightPt: r + i,
	readingDirection: "ltr"
}, l = t, u = null) {
	let d = r, f = r + i, p = yo(n, a);
	if (u) {
		u.structuralEventCount = p.length;
		for (let { polygon: e } of a.floats) e && (u.compiledIntersectionCount += e.intersectionCount, u.compiledContourSpanCount += e.contourSpans.length, u.compileOrderComparisonCount += e.compileOrderComparisonCount, u.compilePairMembershipVisitCount += e.compilePairMembershipVisitCount);
	}
	let m = (e) => (u && (u.evaluatedYCount += 1), So(e, n, d, f, i, a, o, s, c, t, l)), h = m(e);
	if (h) return h;
	let g = e, _ = p.findIndex((e) => e > g);
	for (; _ >= 0 && _ < p.length;) {
		let e = p[_], r = Mo(g, e, n, d, f, a, o, s, c, t, l, u);
		if (r !== null) {
			u && (u.localRootEventCount += 1);
			let e = m(r);
			if (e) return e;
			g = r;
			continue;
		}
		let i = m(e);
		if (i) return i;
		g = e;
		do
			_ += 1;
		while (_ < p.length && p[_] <= g);
	}
	throw Error("Finite float line-window event sweep found no usable terminal Y");
}
function Po(e, t, n, r, i, a, o = r, s = r + i, c = {
	xLeftPt: r,
	xRightPt: r + i,
	readingDirection: "ltr"
}, l = t) {
	return No(e, t, n, r, i, a, o, s, c, l);
}
function Fo(e, t, n, r) {
	let i = /* @__PURE__ */ new Set();
	for (;;) {
		let a = e;
		for (let i of t) i.mode === "topAndBottom" && co(i, n, r) && e >= i.yTop && e < i.yBottom && (a = Math.max(a, i.yBottom));
		if (a === e) return e;
		if (!Number.isFinite(a) || a < e || i.has(a)) throw Error("Top-and-bottom solver violated strictly increasing finite-bottom progress");
		i.add(a), e = a;
	}
}
//#endregion
//#region packages/docx/src/layout/math-fallback-text.ts
var Io = new Set([
	"+",
	"-",
	"−",
	"=",
	"±",
	"×",
	"÷"
]);
function Lo(e) {
	return Io.has(e) ? ` ${e} ` : e;
}
function G(e) {
	return e.map((e) => {
		switch (e.kind) {
			case "run": return Lo(e.text);
			case "fraction": return `${G(e.num)}/${G(e.den)}`;
			case "sup": return `${G(e.base)}^${G(e.sup ?? [])}`;
			case "sub": return `${G(e.base)}_${G(e.sub ?? [])}`;
			case "subSup": return `${G(e.base)}_${G(e.sub ?? [])}^${G(e.sup ?? [])}`;
			case "nary": return `${e.op}${G(e.sub ?? [])}${G(e.sup ?? [])}${G(e.body)}`;
			case "delimiter": return `${e.begChar}${e.items.map(G).join(",")}${e.endChar}`;
			case "radical": return `${e.index?.length ? G(e.index) : ""}√${G(e.radicand)}`;
			case "limit": return `${G(e.base)}${G(e.lower ?? [])}${G(e.upper ?? [])}`;
			case "array": return e.rows.map((e) => e.map(G).join(" ")).join(" ");
			case "groupChr": return `${e.char}${G(e.base)}`;
			case "bar":
			case "box":
			case "borderBox": return G(e.base);
			case "accent": return `${e.char}${G(e.base)}`;
			case "func": return `${G(e.name)}(${G(e.arg)})`;
			case "group": return G(e.items);
			case "phant": return e.show ? G(e.base) : "";
			case "sPre": return `${G(e.sub)}${G(e.sup)}${G(e.base)}`;
		}
	}).join("").replace(/[ \t]{2,}/g, " ");
}
//#endregion
//#region packages/docx/src/layout/convergence.ts
var Ro = class extends V {
	reason;
	states;
	passes;
	constructor(e, t, n) {
		super("NON_CONVERGENCE", e === "cycle" ? `repeated exact-state cycle at ${t.at(-1) ?? "<missing>"}` : `hard exact-state pass limit ${n} reached`), this.name = "ExactConvergenceError", this.reason = e, this.states = Object.freeze([...t]), this.passes = n;
	}
};
function zo(e) {
	let t = Bo({
		...e,
		step: function* (t, n) {
			return e.step(t, n);
		}
	}), n = t.next();
	for (; !n.done;) n = t.next();
	return n.value;
}
function* Bo(e) {
	let { seedState: t, step: n, stateOf: r, limit: i } = e, a = t === void 0 ? 2 : 1;
	if (!Number.isInteger(i) || i < a) throw RangeError(`Exact convergence limit must be an integer >= ${a}`);
	let o = t === void 0 ? [] : [t], s = new Set(o), c = null;
	for (let e = 1; e <= i; e += 1) {
		let t = yield* n(c, e), a = r(t), l = o.at(-1);
		if (o.push(a), l === a) return Object.freeze({
			value: t,
			passes: e
		});
		if (s.has(a)) throw new Ro("cycle", o, e);
		if (s.add(a), e === i) throw new Ro("limit", o, e);
		c = t;
	}
	throw new Ro("limit", o, i);
}
function* Vo(e, t, n) {
	if (!Number.isInteger(n) || n < 1) throw new V("NON_CONVERGENCE", "limit must be a positive integer");
	try {
		return (yield* Bo({
			seedState: e.fingerprint,
			step: function* (n) {
				return yield* t(n ?? e);
			},
			stateOf: (e) => e.fingerprint,
			limit: n
		})).value;
	} catch (e) {
		throw e instanceof Ro ? new V("NON_CONVERGENCE", e.reason === "cycle" ? `repeated geometry fingerprint cycle at ${e.states.at(-1) ?? "<missing>"}` : `hard iteration limit ${n} reached`) : e;
	}
}
//#endregion
//#region packages/docx/src/layout/line-wrap-convergence.ts
var Ho = class extends V {
	reason;
	states;
	constructor(e, t) {
		super("NON_CONVERGENCE", e === "cycle" ? `line wrap measure/resolve cycle did not converge (${t.length} states)` : `line wrap measure/resolve pass limit did not converge (${t.length} states)`), this.name = "LineWrapNonConvergenceError", this.reason = e, this.states = Object.freeze([...t]);
	}
};
function Uo(e) {
	return e.map((e) => ({ ...e }));
}
function Wo(e, t) {
	return JSON.stringify(e.map((e, n) => ({
		end: e.consumedEnd,
		topY: e.topY,
		xOffset: e.xOffset,
		availableWidth: e.availWidth,
		probeHeight: t[n],
		segments: e.segments.map((e) => ({
			source: e.src,
			...e.text === void 0 ? {} : { text: e.text }
		}))
	})));
}
var Go = 16;
function Ko(e, t) {
	try {
		return zo({
			step: (n) => {
				let r = e(n?.probeHeights ?? null), i = Object.freeze(r.map(t));
				return Object.freeze({
					lines: r,
					probeHeights: i,
					state: Wo(r, i)
				});
			},
			stateOf: (e) => e.state,
			limit: Go
		}).value.lines;
	} catch (e) {
		throw e instanceof Ro ? new Ho(e.reason, e.states) : e;
	}
}
U({
	id: "word-east-asian-grid-line-allocation",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "word-font-metrics-resource-matrix",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "Across eight East-Asian font resources, six sizes, and no-grid/grid/useFELayout variants, Word allocates single lines as 1.3 times the selected face hhea ascent-plus-descent box. The matrix observed that ratio for East-Asian text and for Latin text when the same East-Asian resource actually won every rFonts slot. Mixed-slot Office documents provide counterexamples to a family-wide Latin override, so Latin receives the ratio only when its own ASCII/high-ANSI slot selects that proven resource. Resource identity and glyph coverage are required; a family name alone carries no metric."
}), U({
	id: "word-table-cell-ignores-grid-right-indent-adjustment",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "table-cell-adjust-right-indent-width-position-matrix",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "In the observed linesAndChars matrix, paragraphs inside fixed-width table cells retain the same line breaks for omitted (default true) and explicit-false w:adjustRightInd across four boundary widths and both left/right cell positions. Scope this Word-only exception to table-cell containers; ordinary body paragraphs retain the ECMA-376 §17.3.1.1 adjustment."
}), U({
	id: "word-snap-to-chars-east-asian-cell-fit",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "snap-to-chars-east-asian-cell-fit-matrix",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "For snapToChars, Word centers each East-Asian grapheme independently in the smallest whole number of character-pitch units that contains its natural advance. A grapheme that fits uses the one-unit placement described by [MS-OI29500] §2.1.534; an undersized authored pitch expands only that grapheme to additional units."
}), U({
	id: "word-snap-to-chars-script-block-allocation",
	evidence: {
		kind: "microsoft-note",
		reference: "[MS-OI29500] §2.1.534"
	},
	description: "Allocate snapToChars Latin text in contiguous blocks centered across the required grid units, complex-script blocks from their leading edge, and East-Asian graphemes independently by character cell."
});
function qo(e, t) {
	return !(t > 0) || !Number.isFinite(e) ? 1 : Math.max(1, Math.ceil(Math.max(0, e) / t - 1e-9));
}
function Jo(e) {
	return !e;
}
U({
	id: "word-grid-right-indent-pitch-alignment",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "grid-right-indent-character-pitch-boundary-matrix",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "For body paragraphs whose ECMA-376 §17.3.1.1 adjustment is enabled on a linesAndChars character grid, Word reduces the physical line width to the greatest whole character-pitch multiple not exceeding the available width. The observed matrix covers exact and non-exact widths, zero and negative charSpace, explicit opt-out, line-only control, both physical indent sides, and the separately registered table-cell exception."
});
function Yo(e, t) {
	if (!(t > 0) || !Number.isFinite(e) || e <= 0) return 0;
	let n = (e % t + t) % t, r = 1e-9;
	return n <= r || t - n <= r ? 0 : n;
}
U({
	id: "word-hanging-tab-same-position-precedence",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "hanging-indent-authored-tab-collision-matrix",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "When the implicit tab created by a hanging indent shares its coordinate with an authored center, end, or start stop, Word resolves one advancing stop at that coordinate using the authored alignment. An authored bar remains an independent drawing rule, so the implicit advancing stop survives beside it. If center/end alignment would place following text before the current pen, the tab contributes zero advance."
});
function Xo(e) {
	return e !== "bar" && e !== "clear";
}
U({
	id: "word-rtl-decimal-tab-physical-alignment",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "rtl-decimal-tab-run-boundary-matrix",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "For LTR numeric cells embedded in a bidi paragraph, Word aligns the physical left edge of the first halfwidth period to the decimal stop across source-run boundaries. When no period exists, it aligns the numeric cell's physical right edge to the stop."
}), U({
	id: "word-decimal-tab-separator-resolution",
	evidence: {
		kind: "microsoft-note",
		reference: "[MS-OI29500] §2.1.556"
	},
	description: "Use the first explicit halfwidth period as the decimal-tab alignment point; when absent, use the implicit separator after the final digit of the first Unicode decimal-number sequence."
}), U({
	id: "word-use-fe-layout-inherited-grid-minimum",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "use-fe-layout-visible-script-grid-matrix",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "With useFELayout enabled, a visible Latin line with a resolved eastAsia font axis participates in Far East grid metrics even when w:rFonts@hint is absent; inherited automatic spacing keeps the larger of its whole-cell design allocation and one grid pitch multiplied by the inherited spacing value."
}), U({
	id: "word-use-fe-layout-empty-mark-grid-allocation",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "use-fe-layout-empty-mark-grid-matrix",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "With useFELayout enabled, a content-less paragraph mark participates in Far East whole-cell document-grid allocation even when the document contains no literal East Asian text. Its face-specific Far East design height governs the cell count; exact spacing and snapToGrid=false remain the document-grid overrides named by ECMA-376 §17.6.5. Observed Word output gives signed atLeast spacing a discontinuous boundary on an active grid: negative values use their absolute magnitude as the mark advance, zero keeps the ordinary atLeast-zero advance regardless of inheritance source, and positive values retain whole-cell allocation."
});
function Zo(e) {
	let { ordinaryAdvancePx: t, allocatedGridAdvancePx: n, atLeastZeroAdvancePx: r, lineSpacing: i, gridAllocationActive: a, scale: o } = e;
	return a ? i?.rule === "atLeast" && i.value < 0 ? Math.abs(i.value) * o : i?.rule === "atLeast" && i.value === 0 ? r : i?.rule === "exact" ? t : Math.max(t, n) : t;
}
U({
	id: "word-contiguous-underline-geometry",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/layout/paragraph.test.ts#keeps a solid underline continuous across floating-precision retained run seams"
	},
	description: "Adjacent compatible underlined source runs share one safe baseline and continuous authored cadence while style, color, and thickness boundaries remain distinct."
}), U({
	id: "word-grid-at-least-tall-line-unsnapped",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/line-box-height.test.ts#does not round tall East Asian content up to an additional grid cell"
	},
	description: "An explicitly authored atLeast line on an active document grid keeps the maximum of its natural height, authored minimum, and one pitch instead of rounding tall content to another whole cell."
}), U({
	id: "word-degenerate-line-spacing-single",
	evidence: {
		kind: "microsoft-note",
		reference: "[MS-DOC] §2.9.146"
	},
	description: "Preserve a non-collapsing single-line fallback for exact or automatic line spacing at or below zero, consistent with the native LSPD representation."
}), U({
	id: "word-auto-multiple-baseline-pin",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "auto-multiple-baseline-pin",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "Paint a positive automatic line-spacing multiplier with its glyph baseline pinned inside the single design line, placing extra leading or compressed overflow toward block-end; this is draw-only and does not replace the centered trailing-mark pagination metric."
}), U({
	id: "word-mixed-anchor-visible-line-metrics",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/anchor-host-metrics.test.ts#reserves host line height without using its zero-ink box for a visible run baseline"
	},
	description: "A zero-ink drawing anchor host reserves its line and grid height while visible neighboring glyphs retain their own ascent, descent, and design-line baseline."
}), U({
	id: "word-justification-leading-indent-exclusion",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/text-distribute.test.ts#forwards (segs, slack, firstContentSi, lastDrawnSi) positionally"
	},
	description: "Keep leading whitespace used as a first-line text indent fixed while distributing justified-line slack across content in a left-to-right line."
}), U({
	id: "word-justified-candidate-separator-fit",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/justify-shrink-overshoot.test.ts#counts a candidate trailing space when the prospective line will justify"
	},
	description: "On a full paragraph-width line that will be fully justified, include the candidate word separator in its wrap-fit width; lines narrowed by DrawingML wrap exclusions retain collapsible line-end separator fit behavior."
}), U({
	id: "word-overflow-punctuation-language-sets",
	evidence: {
		kind: "microsoft-note",
		reference: "[MS-OE376] §2.1.56"
	},
	description: "Apply the language-specific punctuation sets documented for Word in [MS-OE376] §2.1.56 to Chinese, Japanese, and Korean language runs, and let overflowPunct override kinsoku when both rules affect the same character. When an effective East Asian language is absent, content that actually selects the East Asian script path retains the union as a bounded fallback."
}), U({
	id: "word-overflow-punctuation-latin-parent-run",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "overflow-punctuation-latin-parent-run-boundary-matrix",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "Although [MS-OE376] §2.1.56 presents concrete punctuation sets by CJK language, Word also applies the union's ASCII closing punctuation to Latin parent runs and to complex-script segments whose parent run has no explicit RTL-primary bidi language. The observed Latin matrix covers `.`, `,`, and `}` at 9, 10, 11, and 14 points; production controls cover `.`, `:`, `)`, and `>` with absent bidi language. An explicit `ar-SA` bidi language is the counterexample."
}), U({
	id: "word-full-width-character-spacing-scope",
	evidence: {
		kind: "microsoft-note",
		reference: "[MS-OE376] §2.1.562"
	},
	description: "Interpret ST_CharacterSpacing as applying whitespace compression to full-width punctuation characters. This rule establishes only which characters are eligible; it does not define a universal compression amount."
}), U({
	id: "word-japanese-punctuation-compression-cell",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "japanese-fullwidth-punctuation-compression-cell",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "In the observed Japanese compatibility matrix, 、。 ，． and the closing forms 」』】）］｝ on a full ideographic-cell advance retain at least half of that cell. U+3017 and full-width !/? remain full-cell. A fontTable w:pitch value classifies the authored face for font selection; it is not a switch for document-level characterSpacingControl. Punctuation that the selected face already exposes on a smaller proportional advance is retained as measured rather than compressed a second time. Tight adjacent glyph ink can require a larger retained extent to prevent collision. This is an Office-observed compression amount, not a normative interpretation of ST_CharacterSpacing."
}), U({
	id: "word-authored-character-spacing-pitch-priority",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "authored-character-spacing-punctuation-pitch",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "When a run authors a positive w:spacing character pitch, Word preserves that expanded pitch instead of additionally applying the document-level punctuation whitespace compression. Omitted, zero, or overlapping run spacing leaves characterSpacingControl active."
}), U({
	id: "word-source-run-space-sequence",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "source-run-space-sequence-wrap-matrix",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "At a source-run boundary, Word keeps a space-only continuation attached when the preceding run already ends in a space. A single leading space in a distinct run without a preceding space remains a break opportunity. This isolates source-boundary compatibility from the ordinary UAX #14 LB7 handling within one authored run."
}), U({
	id: "word-consecutive-space-natural-advance",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "consecutive-space-wrap-grid-matrix",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "When visible text follows two or more authored consecutive spaces, Word preserves the sequence at natural advance instead of using it as Knuth-Plass inter-word shrink capacity. The result is invariant across linesAndChars with negative/zero charSpace and a line-only grid; source-run boundaries remain governed separately by the source-space-sequence rule."
}), U({
	id: "word-balanced-consecutive-space-cell",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "single-double-byte-width-space-grid-matrix",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "With ECMA-376 §17.15.3.3 balanceSingleByteDoubleByteWidth enabled, Word retains one ordinary inter-word U+0020 at its proportional natural advance, while a sequence of two or more authored U+0020 spaces advances each space by half of the selected East-Asian ideographic cell. The observed matrix covers one, two, four, and eight spaces; same-run and source-run boundaries; proportional and fixed-pitch faces; linesAndChars with negative/zero charSpace; and a line-only grid."
});
function Qo(e) {
	return Number.isInteger(e) && e >= 2;
}
function $o(e) {
	return e !== "snapToChars";
}
U({
	id: "word-balanced-lines-and-chars-grid-delta",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "single-double-byte-width-grid-observation-matrix",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "With balanceSingleByteDoubleByteWidth enabled on linesAndChars, Word applies half of the authored charSpace delta to ASCII SBCS text and to U+0020/U+3000 space characters, while applying the full delta to CJK ideographs and full-width ASCII forms. The Word-output evidence covers ASCII digits, letters, punctuation, spaces, CJK, full-width ASCII, mixed text, proportional/fixed-pitch faces, negative/zero/positive charSpace, and line-only controls. Non-ASCII high-ANSI and complex-script text are outside the observed matrix and retain the preexisting grid behavior."
}), U({
	id: "word-ideographic-space-line-end-allowance",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "ideographic-space-line-end-count-and-run-boundary-matrix",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "Word keeps a single U+3000 immediately following visible East-Asian text on that line when the visible glyph is force-fitted into a narrow table cell. A paragraph-final sequence of two or more U+3000 characters remains authored width-bearing content and may form blank continuation lines. The observed matrix covers single and trailing multiple spaces, linesAndChars with negative/positive charSpace, line-only grids, and snapToGrid opt-out."
});
function es(e, t) {
	return e && t === 1 ? 1 : 0;
}
function ts(e, t) {
	if (t !== "complexScript") return e.length > 0 && [...e].every((e) => e === " " || e === "　") ? .5 : t === "eastAsia" ? 1 : [...e].every((e) => (e.codePointAt(0) ?? 128) <= 127) ? .5 : void 0;
}
U({
	id: "word-ms-mincho-empty-east-asian-mark-height",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "ms-mincho-empty-east-asian-paragraph-mark",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "In the observed compatibility fixture, an empty 12-point East-Asian paragraph mark routed to MS Mincho occupies a 15.6-point single-line box. Scope this 1.3-em floor to empty East-Asian paragraph marks; ordinary MS Mincho text lines and Latin marks retain their independently measured metrics."
});
function ns(e) {
	let t = Math.max(0, e.punctuationAdvancePt), n = Math.max(0, e.ideographicCellAdvancePt);
	return t < n ? t : Math.min(t, Math.max(0, e.punctuationInkEndPt, n / 2));
}
function rs(e) {
	return e === void 0 || e <= 0;
}
function is(e, t) {
	return e.endsWith(" ") && t.startsWith(" ");
}
var as = {
	ja: new Set([...",.’”、。」』】），．］｝｡､"]),
	zhHans: new Set([..."!%),.:;>?]}¢°·ˇ’”‰′″℃∶、。〃〉》」』】〗〕〞﹚﹜﹞！＂％＇），．：；？］｝￠"]),
	zhHant: new Set([..."!),.:;?]}’”′、。〉》」』】〕〞﹚﹜﹞！），．：；？］｝"]),
	ko: new Set([..."!%),.:;?]}¢°’”′″℃〉》」』】〕！％），．：；？］｝￠"])
}, os = new Set([
	...as.ja,
	...as.zhHans,
	...as.zhHant,
	...as.ko
]), ss = new Set([
	"ar",
	"fa",
	"ur",
	"he",
	"iw",
	"yi",
	"ji",
	"ps",
	"sd",
	"ug",
	"dv",
	"syr",
	"ckb"
]);
function cs(e, t, n = !1, r = !1, i = !1, a) {
	let o = t?.toLowerCase();
	if (o?.startsWith("ja")) return as.ja.has(e);
	if (o?.startsWith("ko")) return as.ko.has(e);
	if (o?.startsWith("zh")) return (/(?:^|-)(?:tw|hk|mo)(?:-|$)|hant/u.test(o) ? as.zhHant : as.zhHans).has(e);
	let s = a?.split("-")[0].toLowerCase(), c = s != null && ss.has(s);
	return (n || r || i && !c) && os.has(e);
}
function ls(e) {
	return e.lineWillJustify && e.wrapNarrowed !== !0 ? e.widthPx : e.widthPx - e.trailingSpacePx;
}
function us(e) {
	return e.resolvedMeasurementRouteCount === 1 ? e.biasBudgetPx : 0;
}
U({
	id: "word-ruby-paragraph-uniform-line-advance",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/paragraph-measure.test.ts#uses one uniform snapped advance for every line in a ruby paragraph"
	},
	description: "Every line in a ruby-bearing paragraph uses the paragraph-wide maximum snapped line advance so its baseline rhythm remains uniform."
}), U({
	id: "word-fit-text-inter-character-expansion",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/fit-text.test.ts#distributes (val − Σnatural)/(n−1) as the inter-character gap, no trailing gap"
	},
	description: "Expand a multi-character fitText region to its authored width by distributing the residual evenly across interior character gaps."
}), U({
	id: "word-cjk-both-inter-character-expansion",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/text-distribute.test.ts#§17.18.44: fills a wrapped pure-CJK line via inter-CJK pitch (expansion default)"
	},
	description: "Treat inter-CJK boundaries as eligible inter-word gaps when expanding a non-final both-justified line that contains no spaces."
}), U({
	id: "word-thai-distribute-cluster-policy",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/thai-distribute.test.ts#fills non-final lines to the right margin under thaiDistribute"
	},
	description: "Expand non-final thaiDistribute lines at Thai grapheme-cluster boundaries while retaining a natural-width final line."
}), U({
	id: "word-numeric-decimal-tab-inference",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/decimal-tab-autoalign.test.ts#right-aligns numbers of different digit counts at the decimal tab"
	},
	description: "Right-align an otherwise tab-less numeric paragraph at its leading decimal tab while leaving non-numeric and no-decimal-tab paragraphs unchanged."
}), U({
	id: "word-numbering-marker-overflow-tab-advance",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/numbered-marker-tab-advance.test.ts#advances the body past the marker to the next tab stop, not onto indentLeft"
	},
	description: "When a numbering marker overruns its hanging-indent budget, advance the body to the next reachable tab stop beyond the marker edge."
}), U({
	id: "word-numbering-suffix-coincident-list-tab",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/layout/numbering-marker.test.ts#keeps a suffix tab on the list stop coincident with the marker end"
	},
	description: "For the tab synthesized by a numbering suffix, accept an authored numeric list tab coincident with the shaped marker end instead of advancing to the next automatic tab stop."
}), U({
	id: "word-numbering-marker-paragraph-mark-fallback",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "numbering-marker-paragraph-mark-formatting",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "When numbering-level rPr omits a marker formatting axis, Word takes that axis from the effective paragraph-mark rPr rather than a content run. A numbering-level concrete value or explicit auto remains authoritative, and body and text-box stories use the same cascade."
});
function ds(e, t) {
	return t.alignment === "num" && Math.abs(t.pos - e) <= 1e-6;
}
U({
	id: "word-tab-stop-page-edge-clamp",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/rtl-tab-stops.test.ts#pins a page number to the left text margin when the stop is past it"
	},
	description: "Clamp content assigned to a tab stop beyond the trailing text edge back onto that edge instead of placing ink outside the page content band."
}), U({
	id: "word-dictionary-sea-natural-fit",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/sea-justified-fit.test.ts#Rule 1: wraps the paragraph-final Thai word on a thaiDistribute closing line (zero space-shrink)"
	},
	description: "Do not admit a dictionary Southeast-Asian word by compressing preceding inter-word spaces when its natural advance exceeds the remaining line width."
}), U({
	id: "word-dictionary-sea-atomic-chunk",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/sea-justified-fit.test.ts#Rule 2: a no-space chunk that fits a full line moves whole instead of splitting"
	},
	description: "Move a glued dictionary Southeast-Asian chunk to a fresh line whole when it fits that full line, using dictionary breaks only when the chunk itself is overlong."
}), U({
	id: "word-overlong-token-emergency-break",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/run-inline-formatting.test.ts#breaks a no-space token wider than the line at the character level"
	},
	description: "Emergency-break an overlong token at grapheme-safe character boundaries on an empty line so the complete token remains inside the content band."
}), U({
	id: "word-external-link-syntax-breaks",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "external-link-syntax-formatting-seam-matrix",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "Treat readable separators in the path and query of displayed external URLs as line-break opportunities, while keeping the scheme and authority intact and preserving authored no-break hyphens and grapheme clusters."
});
function fs(e, t, n) {
	let r = /^[A-Za-z][A-Za-z0-9+.-]*:\/\//u.exec(e);
	if (!r) return [];
	let i = r[0].length, a = e.slice(i).search(/[/?#]/u), o = a < 0 ? e.length : i + a, s = [];
	for (let r = o; r < e.length; r += 1) {
		let i = e[r], a = r + 1;
		(i === "/" && r > o || i === "-" || i === "?" || i === "&") && t.has(a) && !n.has(a) && s.push(a);
	}
	return s;
}
U({
	id: "word-run-vertical-align-baseline-shift",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/run-char-metrics-render.test.ts#w:vertAlign raises superscript, lowers subscript, and leaves ordinary baselines unchanged"
	},
	description: "Retain the established run-level baseline displacement for vertically aligned text: superscript rises by 0.35 of its authored font size and subscript falls by 0.15, while the separately authored w:position remains additive."
}), U({
	id: "word-uniform-run-position-leading",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "uniform-run-position-leading",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "When every metric-bearing item on a line has the same non-zero w:position, Word preserves the enlarged line extent but shares the resulting surplus above and below the glyphs. A line containing a differently-positioned item retains the full relative displacement."
});
function ps(e, t) {
	return t === 0 ? e : e - t / 2;
}
function ms(e, t) {
	return e === "super" ? t * .35 : e === "sub" ? -t * .15 : 0;
}
var hs = 1.3;
function gs(e) {
	if (!(e.unitsPerEm > 0)) return 0;
	let t = Math.max(0, e.hheaAscent) + Math.max(0, -e.hheaDescent);
	return t > 0 ? t / e.unitsPerEm * hs : 0;
}
function _s(e) {
	return !Number.isFinite(e) || !(e > 0) ? 0 : e * hs;
}
function vs(e, t, n) {
	if (!n || !e) return 0;
	let r = e.trim().toLowerCase();
	return r === "ms mincho" || r === "ｍｓ 明朝" ? t * hs : 0;
}
function ys(e, t) {
	return t > 0 ? Math.max(1, Math.ceil(e / t)) : 1;
}
function bs(e, t) {
	return e > 0 ? e : t * hs;
}
function xs(e, t, n) {
	return Math.max(e, t * n);
}
function Ss(e, t, n) {
	return Math.max(e, t, n);
}
function Cs(e, t) {
	return (e === "exact" || e === "auto") && t <= 0;
}
U({
	id: "word-neutral-script-attachment",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/layout/compatibility.test.ts#keeps neutral characters attached to the active script slice"
	},
	description: "Weak and neutral non-letter characters stay with the active complex-script slice instead of opening additional formatting segments."
}), U({
	id: "word-rtl-run-ambiguous-class-override",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/bidi-line.test.ts#keeps LTR word order for English text in rtl-marked runs"
	},
	description: "Model an rtl-marked run as a higher-level UAX #9 override for punctuation and symbols only, leaving whitespace and strong letters at their ordinary classes."
}), U({
	id: "word-rtl-complex-script-european-digits-an",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/bidi-line.test.ts#orders an AN-classified date as 2026-02-28"
	},
	description: "Classify European digits as Arabic Number within an Arabic or Hebrew complex-script run so UAX #9 preserves the compatible visual ordering of digit groups and separators."
}), U({
	id: "word-kashida-final-form-priority",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/kashida-priority.test.ts#uses the BaRa join (Beh->Yeh) over the final-letter join in بين"
	},
	description: "Apply the measured kashida final-letter priority classes only at a word-final following letter instead of copying the broader Qt final-form conditions."
}), U({
	id: "word-vertical-tu-corner-placement",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/vertical-text.test.ts#does NOT ink-centre a substituted Tu comma even when ink metrics are present"
	},
	description: "Keep a substituted vertical Tu comma or full stop at the font-designed upper-right cell position rather than ink-centering it geometrically."
});
var ws = /[\p{P}\p{S}]/u;
function Ts(e) {
	return ws.test(e);
}
function Es(e, t) {
	return e === t;
}
function Ds(e) {
	return e !== null;
}
//#endregion
//#region packages/docx/src/line-layout.ts
var K = {
	shapedClusters: void 0,
	selectedFaceInkBounds: void 0,
	selectedFaceFontBox: void 0,
	snapGridClass: void 0,
	snapGridNaturalWidthPx: void 0,
	snapGridLeadingPadPx: void 0,
	snapGridTrailingPadPx: void 0,
	snapGridCellPitchPx: void 0
};
function Os(e, t, n, r, i, a = {}) {
	if (t != null) return t * n;
	if (!r?.ruby || !i) throw Error(`Ruby at ${e}pt without hpsRaise requires retained base and guide ink`);
	if (r.textLayoutService && r.textShapeRequest) {
		let e = r.textLayoutService.shape({
			...r.textShapeRequest,
			text: r.text,
			fontSizePt: Ai(r, n),
			measure: !0,
			clusterGeometry: !1
		}), t = r.textLayoutService.shape({
			...r.textShapeRequest,
			text: r.ruby.text,
			fontSizePt: r.ruby.fontSizePt * n,
			measure: !0,
			clusterGeometry: !1
		});
		if (e.inkBounds && t.inkBounds) return e.inkBounds.ascentPt + t.inkBounds.descentPt;
	}
	let o = i.font;
	try {
		i.font = Vs(r.bold, r.italic, Ai(r, n), r.fontFamily, a, r.fontRoute);
		let t = i.measureText(r.text);
		i.font = Vs(r.bold, r.italic, e * n, r.fontFamily, a, r.fontRoute);
		let o = i.measureText(r.ruby.text);
		if (Number.isFinite(t.actualBoundingBoxAscent) && Number.isFinite(o.actualBoundingBoxDescent)) return t.actualBoundingBoxAscent + o.actualBoundingBoxDescent;
	} finally {
		i.font = o;
	}
	throw Error("Ruby without hpsRaise requires retained base and guide ink");
}
var ks = new Set([
	"sakkal majalla",
	"traditional arabic",
	"simplified arabic",
	"arabic typesetting",
	"univers next arabic",
	"noto naskh arabic",
	"noto sans arabic"
]), As = new Set([
	"sakkal majalla",
	"traditional arabic",
	"simplified arabic",
	"arabic typesetting",
	"noto naskh arabic"
]);
function js(e) {
	return ks.has(e.toLowerCase());
}
function Ms(e) {
	return e.map((e) => `"${e}"`).join(", ");
}
var Ns = ["Noto Naskh Arabic", "Noto Sans Arabic"];
function Ps(e, t) {
	let n = (e ?? t) && (e ?? t) !== "jp" ? Ce(e ?? t, "sans") : [
		"Noto Sans JP",
		"Hiragino Sans",
		"Meiryo",
		...Ce("jp", "sans").slice(1)
	];
	return e == null ? `${Ms([
		...s,
		"Arial",
		"Helvetica",
		"Liberation Sans",
		...n,
		...Ns
	])}, sans-serif` : `${Ms([
		...n,
		...Ns,
		...s
	])}, sans-serif`;
}
function Fs(e, t) {
	let n = (e ?? t) && (e ?? t) !== "jp" ? Ce(e ?? t, "serif") : [
		"Yu Mincho",
		"YuMincho",
		"Hiragino Mincho ProN",
		"MS Mincho",
		"Noto Serif JP",
		...Ce("jp", "serif").slice(1)
	];
	return e == null ? `${Ms([
		...u,
		"Times New Roman",
		"Cambria",
		"Liberation Serif",
		...n,
		...Ns
	])}, serif` : `${Ms([
		...n,
		...Ns,
		...u
	])}, serif`;
}
var Is = /* @__PURE__ */ new WeakMap(), Ls = /* @__PURE__ */ new WeakMap();
function Rs(e, t) {
	let n = e ?? {};
	return t && Object.keys(t).length > 0 && Ls.set(n, t), n;
}
function zs(e, t = {}) {
	let n = Is.get(t) ?? (() => {
		let e = /* @__PURE__ */ new Map();
		return Is.set(t, e), e;
	})(), r = e ?? "\0null", i = n.get(r);
	if (i !== void 0) return i;
	let a = Bs(e, t, Ls.get(t));
	return n.set(r, a), a;
}
function Bs(e, t, n = {}, r) {
	if (!e || e === "sans-serif") return Ps(null, r);
	if (e === "serif") return Fs(null, r);
	let i = r ? `"Courier New", ${Ms(Ce(r, "sans"))}, monospace` : "\"Courier New\", monospace";
	if (e === "monospace") return i;
	let a = `"${((e) => e.replace(/"/g, "\\\""))(e)}"`, o = e.toLowerCase(), c = C(e);
	if (js(e)) return As.has(o) ? r ? `${a}, "Noto Naskh Arabic", "Noto Sans Arabic", "Noto Serif", ${Ps(null, r).replace(/sans-serif$/, "serif")}` : `${a}, "Noto Naskh Arabic", "Noto Sans Arabic", "Noto Serif", "Noto Sans JP", "Hiragino Sans", serif` : r ? `${a}, "Noto Sans Arabic", "Noto Naskh Arabic", ${Ps(null, r)}` : `${a}, "Noto Sans Arabic", "Noto Naskh Arabic", "Noto Sans JP", "Hiragino Sans", sans-serif`;
	let u = t[e];
	if (u && u !== "auto") switch (u) {
		case "roman": return `${a}, ${Fs(c, r)}`;
		case "swiss": return `${a}, ${Ps(c, r)}`;
		case "modern":
			if (n[e] === "fixed") return c == null ? `${a}, ${i}` : `${a}, ${Ms([...c === "jp" ? [
				"Yu Gothic",
				"YuGothic",
				"Hiragino Sans",
				"Meiryo",
				"Noto Sans JP"
			] : Ce(c, "sans"), "Courier New"])}, monospace`;
			break;
		default: break;
	}
	let d = l(e);
	if (d === "serif") return `${a}, ${Fs(c, r)}`;
	if (d === "mono") return `${a}, ${i}`;
	if (c == null || c === "jp") {
		if (o.includes("meiryo") || e.includes("メイリオ")) return `${a}, "Meiryo UI", "Meiryo", ${Ps(c, r)}`;
		if (e.includes("游ゴシック") || /\byu\s*gothic\b/i.test(e) || o.includes("yugothic")) return `${a}, "Yu Gothic", "YuGothic", ${Ps(c, r)}`;
		if (o.includes("ipa")) return `${a}, "IPAexGothic", ${Ps(c, r)}`;
		if (o.includes("segoe")) return r ? `${a}, "Segoe UI", ${Ps(null, r)}` : `${a}, "Segoe UI", ${Ms([...Ns, ...s])}, sans-serif`;
	}
	return `${a}, ${Ps(c, r)}`;
}
function Vs(e, t, n, r, i = {}, a) {
	return a ? ot(a, n, e ? 700 : 400, t ? "italic" : "normal") : `${t ? "italic" : "normal"} ${e ? "bold" : "normal"} ${n}px ${zs(r, i)}`;
}
function Hs(e, t, n = !1) {
	let r = n ? e.resolvedEastAsianLineHeightRatio ?? e.resolvedLineHeightRatio ?? 0 : e.resolvedLineHeightRatio ?? 0;
	return Math.max(Ze(e.fontFamily, t, n), r * t);
}
function Us(e, t, n = !1) {
	let r = n ? e.resolvedEaFloorEastAsianLineHeightRatio ?? e.resolvedEaFloorLineHeightRatio ?? 0 : e.resolvedEaFloorLineHeightRatio ?? 0;
	return Math.max(Ze(e.eaFloorFamily, t, n), r * t);
}
function Ws(e) {
	for (let t of e.runs) if (t.type === "text" || t.type === "field") return t.fontSize;
	return typeof e.defaultFontSize == "number" ? e.defaultFontSize : 10;
}
function Gs(e, t = !1) {
	for (let t of e.runs) if (t.type === "text" || t.type === "field") return t.fontFamily;
	return t && e.defaultFontFamilyEastAsia ? e.defaultFontFamilyEastAsia : e.defaultFontFamily ?? null;
}
function Ks(e, t, n) {
	return Ze(Gs(e, n), Ws(e) * t, n);
}
function qs(e, t) {
	return !e || e.charSpacePt == null || e.type !== "linesAndChars" && e.type !== "snapToChars" ? 0 : e.charSpacePt * t;
}
function Js(e) {
	let t = 0;
	for (let n of e) ji.test(n) && t++;
	return t;
}
function Ys(e, t, n) {
	let r = qs(t, n);
	if (r === 0 || e.length === 0) return 0;
	let i = [...e];
	return t?.type === "linesAndChars" || Js(e) === i.length ? i.length * r : 0;
}
function Xs(e, t, n) {
	return e.snapToCharacterGrid === !1 || t?.type === "snapToChars" ? 0 : t?.type === "linesAndChars" && e.widthBalanceGridDeltaFactor !== void 0 ? qs(t, n) * e.widthBalanceGridDeltaFactor : Ys(e.text, t, n) === 0 ? 0 : qs(t, n);
}
function Zs(e, t) {
	return e.fitTextPerGapPx === void 0 ? Qs(e) * t : e.fitTextPerGapPx;
}
function Qs(e) {
	return e.charSpacing ?? 0;
}
function $s(e) {
	return e.punctuationCompressions?.reduce((e, t) => e + t.adjustmentPt, 0) ?? 0;
}
function ec(e, t) {
	return tc(e, e.text, t);
}
function tc(e, t, n) {
	if (e.fitTextPerGapPx !== void 0 || e.tateChuYoko || !$o(n?.type) || !e.widthBalanceSpaceSequence || e.widthBalanceSpaceAdjustmentPt === void 0) return 0;
	let r = 0;
	for (let e of t) e === " " && (r += 1);
	return r * e.widthBalanceSpaceAdjustmentPt;
}
function nc(e, t, n) {
	let r = e.punctuationCompressions?.filter((e) => e.end > t && e.end <= n).map((e) => Object.freeze({
		end: e.end - t,
		adjustmentPt: e.adjustmentPt
	}));
	return r && r.length > 0 ? Object.freeze(r) : void 0;
}
function rc(e, t, n) {
	let r = e.noBreakRanges?.filter((e) => e.start >= t && e.end <= n).map((e) => Object.freeze({
		start: e.start - t,
		end: e.end - t
	}));
	return r && r.length > 0 ? Object.freeze(r) : void 0;
}
function ic(e) {
	return new Set(e.noBreakRanges?.flatMap((e) => [e.start, e.end]) ?? []);
}
function ac(e, t, n = 0) {
	let r = ic(e);
	return [
		0,
		...N(e.text),
		e.text.length
	].filter((e, t, n) => n.indexOf(e) === t).filter((e) => e >= n && e <= t && !r.has(e)).at(-1) ?? 0;
}
function oc(e) {
	if (e.hardJoinPrev !== !0 || e.text.length === 0) return;
	let t = ic(e);
	return [...N(e.text), e.text.length].find((e) => e > 0 && !t.has(e)) ?? e.text.length;
}
function q(e, t, n) {
	return {
		punctuationCompressions: nc(e, t, n),
		noBreakRanges: rc(e, t, n),
		externalLinkBreakOffsets: sc(e, t, n)
	};
}
function sc(e, t, n) {
	let r = e.externalLinkBreakOffsets?.filter((e) => e > t && e < n).map((e) => e - t);
	return r && r.length > 0 ? Object.freeze(r) : void 0;
}
function cc(e, t) {
	if (!e.textLayoutService || !e.textShapeRequest || t.length === 0) return;
	let n = e.textLayoutService.shape({
		...e.textShapeRequest,
		text: t,
		measure: !0,
		clusterGeometry: !1
	});
	if (n.horizontalInkBoundsAreTight !== !0 || !n.inkBounds || !Number.isFinite(n.advancePt) || !Number.isFinite(n.inkBounds.xMinPt) || !Number.isFinite(n.inkBounds.xMaxPt)) return;
	let r = e.charScale ?? 1;
	return {
		advancePt: n.advancePt * r,
		xMinPt: n.inkBounds.xMinPt * r,
		xMaxPt: n.inkBounds.xMaxPt * r
	};
}
function lc(e) {
	if (!e.textLayoutService || !e.textShapeRequest || e.text.length === 0) return;
	let t = e.textLayoutService.shape({
		...e.textShapeRequest,
		text: e.text,
		measure: !0,
		clusterGeometry: !0
	});
	if (!t.clusters?.length) return;
	let n = e.charScale ?? 1, r = /* @__PURE__ */ new Map();
	for (let e of t.clusters) {
		if (!Number.isFinite(e.advancePt)) return;
		r.set(e.range.end, e.advancePt * n);
	}
	return r;
}
function uc(e) {
	let t, n = /* @__PURE__ */ new Map();
	for (let r of e) {
		if (!("text" in r) || r.verticalRun) {
			t = void 0;
			continue;
		}
		let e = r, i = e.punctuationCompressions ?? [], a = new Map(i.map((e, t) => [e.end, t])), o = i.length > 0 ? lc(e) : void 0, s = [
			0,
			...N(e.text),
			e.text.length
		];
		for (let r = 0; r < s.length - 1; r += 1) {
			let i = s[r], c = s[r + 1];
			if (c <= i) continue;
			let l = a.get(c), u = t || l !== void 0 ? cc(e, e.text.slice(i, c)) : void 0;
			if (t && u) {
				let e = n.get(t.segment) ?? t.segment.punctuationCompressions.map((e) => ({ ...e })), r = e[t.compressionIndex], i = Math.max(0, t.ink.advancePt + r.adjustmentPt), a = Math.min(0, i - t.contextualAdvancePt), o = Math.min(0, t.ink.xMaxPt - u.xMinPt - t.contextualAdvancePt), s = Math.max(r.adjustmentPt, a, o);
				s !== r.adjustmentPt && (e[t.compressionIndex] = {
					end: r.end,
					adjustmentPt: s
				}, n.set(t.segment, e));
			}
			t = l !== void 0 && u ? {
				segment: e,
				compressionIndex: l,
				ink: u,
				contextualAdvancePt: o?.get(c) ?? u.advancePt
			} : void 0;
		}
	}
	for (let [e, t] of n) e.punctuationCompressions = Object.freeze(t.map((e) => Object.freeze(e)));
}
function dc(e) {
	return e.charScale ?? 1;
}
function fc(e, t, n, r, i) {
	return e * r + [...t].length * n + [...t].length * i;
}
function pc(e, t, n) {
	return e.fitTextPerGapPx === void 0 ? Xs(e, t, n) + Zs(e, n) : e.fitTextPerGapPx;
}
function mc(e, t, n, r) {
	if (e.fitTextPerGapPx !== void 0) {
		let n = [...e.text].length, r = e.fitTextRegionEnd ? Math.max(0, n - 1) : n;
		return t * dc(e) + r * e.fitTextPerGapPx + (e.fitTextTrailingPadPx ?? 0);
	}
	if (e.tateChuYoko) return e.fontSize * r;
	let i = Xs(e, n, r);
	return fc(t, e.text, i, dc(e), Zs(e, r)) + ec(e, n) * r * dc(e) + $s(e) * r;
}
function hc(e, t) {
	return t?.type !== "snapToChars" || !t.characterPitchPt || t.characterPitchPt <= 0 || e.snapToCharacterGrid === !1 || e.metricOnly || e.fitTextRegionIndex !== void 0 || e.tateChuYoko ? null : e.script === "eastAsia" ? "eastAsia" : e.script === "complexScript" ? "complexScript" : "latin";
}
function gc(e, t, n, r = 1) {
	return !(n > 0) || !Number.isFinite(e) ? e : t === "eastAsia" ? Math.max(1, r) * n : Math.max(1, Math.ceil(Math.max(0, e) / n - 1e-9)) * n;
}
function _c(e) {
	return !e || !e.linePitchPt || e.linePitchPt <= 0 ? !1 : e.type === "lines" || e.type === "linesAndChars" || e.type === "snapToChars";
}
function vc(e, t) {
	return ys(e, t);
}
function yc(e, t) {
	return bs(e, t);
}
function bc(e, t, n, r, i, a, o = 0, s = !1, c, l) {
	let u = t + n, d = Math.max(u, o), f = _c(i), p = f ? i.linePitchPt * r : 0, m = () => s ? a ? Math.max(p, Math.ceil(u / p) * p) : vc(c ?? (o > 0 ? o : l === void 0 ? p : yc(0, l)), p) * p : Math.max(u, p), h = e !== null && e.explicit !== !0;
	if (!e || Cs(e.rule, e.value)) return f ? m() : d;
	if (e.rule === "auto") {
		if (f) {
			if (h) {
				let t = m();
				return s ? xs(t, p, e.value) : t;
			}
			return Math.max(u, p * e.value);
		}
		return d * e.value;
	}
	if (e.rule === "exact") return e.value * r;
	if (e.rule === "atLeast") {
		let t = f ? a || h ? m() : p : 0;
		return Ss(d, e.value * r, t);
	}
	return d;
}
function xc(e, t) {
	return {
		asc: e * t * .8,
		desc: e * t * .2
	};
}
function Sc(e, t, n, r, i = !1) {
	return Qe(t, r, e.fontBoundingBoxAscent ?? e.actualBoundingBoxAscent ?? n * .8, e.fontBoundingBoxDescent ?? e.actualBoundingBoxDescent ?? n * .2, i);
}
function Cc(e, t, n, r, i = !1, a, o = {}, s = e.lineSpacing, c = {}, l, u, d = !1) {
	let f = u, p = i || f?.fontHint === "eastAsia", m = f?.complexScript === !0, h = f?.fontSizePt ?? Ws(e), g = Gs(e, p), _ = f?.weight ?? 400, v = f?.style ?? "normal", y = g ? Sn(g) : null, b = y ? c[`${y}:${_}:${v}`] ?? (_ === 400 && v === "normal" ? c[y] : void 0) : void 0, x = b?.family ?? g, S, C;
	if (l) {
		let n = _ >= 600, r = v === "italic", i = f?.fonts.ascii ?? e.defaultFontFamily ?? g, a = l.shape({
			text: p ? "あ" : "x",
			fontSizePt: h * t,
			fonts: f?.fonts ?? {
				ascii: i,
				highAnsi: i,
				eastAsia: e.defaultFontFamilyEastAsia ?? i,
				complexScript: i
			},
			themeFonts: f?.themeFonts,
			themeFontPresence: f?.themeFontPresence,
			weight: n ? 700 : 400,
			style: r ? "italic" : "normal",
			complexScript: m,
			fontHint: f?.fontHint,
			eastAsiaLanguage: f?.eastAsiaLanguage,
			kerning: f?.kerning,
			measure: !0
		}), o = a.spans[0]?.font.resolvedFamily ?? g;
		({ascent: S, descent: C} = Sc({
			width: a.advancePt,
			actualBoundingBoxAscent: a.ascentPt,
			actualBoundingBoxDescent: a.descentPt,
			fontBoundingBoxAscent: a.ascentPt,
			fontBoundingBoxDescent: a.descentPt
		}, o, h * t, h * t, p));
	} else if (a) {
		let e = a.font;
		a.font = Vs(!1, !1, h * t, x, o);
		let n = a.measureText(p ? "あ" : "x");
		a.font = e, {ascent: S, descent: C} = Sc(n, x, h * t, h * t, p);
	} else ({asc: S, desc: C} = xc(h, t));
	let w = p ? b?.eastAsianLineHeightRatio ?? b?.lineHeightRatio : b?.lineHeightRatio, T = Math.max((w ?? 0) * h * t, Ks(e, t, p), vs(g, h * t, p)), E = i ? yc(T, h * t) : void 0, D = bc(s, S, C, t, n, r, T, i, E), O = d && i && _c(n), k = O ? bc(null, S, C, t, n, r, T, i, E) : D, A = O ? bc({
		rule: "atLeast",
		value: 0,
		explicit: !0
	}, S, C, t, n, r, T, i, E) : D;
	return {
		advancePx: d ? Zo({
			ordinaryAdvancePx: D,
			allocatedGridAdvancePx: k,
			atLeastZeroAdvancePx: A,
			lineSpacing: s,
			gridAllocationActive: O,
			scale: t
		}) : D,
		ascentPx: S,
		descentPx: C
	};
}
function wc(e, t, n, r, i = !1, a, o = {}, s = e.lineSpacing, c = {}, l, u, d = !1) {
	return Cc(e, t, n, r, i, a, o, s, c, l, u, d).advancePx;
}
function Tc(e, t, n) {
	return Math.max(0, (e - t + n) / 2);
}
function Ec(e, t, n, r, i, a, o, s = {}, c, l, u = !1) {
	let d = Cc(e, 1, t, n, r, i, a, o, s, c, l, u);
	return Tc(d.advancePx, d.ascentPx, d.descentPx);
}
function Dc(e) {
	let t = [];
	for (let n of e) {
		let e = n.toLowerCase() === n && n.toUpperCase() !== n, r = /\s/.test(n) ? t[t.length - 1]?.reduced ?? !1 : e, i = t[t.length - 1];
		i && i.reduced === r ? i.text += n : t.push({
			text: n,
			reduced: r
		});
	}
	return t.length ? t : [{
		text: e,
		reduced: !1
	}];
}
function Oc(e, t) {
	for (let n = t - 1; n >= 0; n--) {
		let t = e[n];
		if (t.type === "text" || t.type === "field") return t.fontSize;
	}
	for (let n = t + 1; n < e.length; n++) {
		let t = e[n];
		if (t.type === "text" || t.type === "field") return t.fontSize;
	}
	return 10;
}
function kc(e, t) {
	if (e.fieldType === "page") return Jt(t.displayPageNumber ?? t.pageIndex + 1, mn(e.instruction) ?? t.pageNumberFormat ?? "decimal");
	if (e.fieldType === "numPages") {
		let n = mn(e.instruction) ?? "decimal";
		return Jt(t.totalPages, n);
	}
	if (e.fieldType === "date" || e.fieldType === "time") {
		let n = bn(e.instruction);
		if (n) {
			let e = xn(n, new Date(t.currentDateMs ?? Date.now()));
			if (e !== null) return e;
		}
		return e.fallbackText;
	}
	return e.fallbackText;
}
function Ac(e) {
	for (let t = 0; t < e.length;) {
		let r = e.codePointAt(t);
		if (n(r)) return !0;
		t += r > 65535 ? 2 : 1;
	}
	return !1;
}
var jc = new Set([
	"、",
	"。",
	"，",
	"．",
	"」",
	"』",
	"】",
	"）",
	"］",
	"｝"
]);
function Mc(e) {
	let t = e.codePointAt(0);
	return t === void 0 ? !1 : t >= 12353 && t <= 12438 || t >= 12445 && t <= 12447 || t >= 12449 && t <= 12538 || t === 12540 || t >= 12541 && t <= 12543 || t >= 12784 && t <= 12799 || t >= 110576 && t <= 110591 || t >= 110592 && t <= 110959;
}
function Nc(e, t) {
	switch (t) {
		case "compressPunctuation": return jc.has(e);
		case "compressPunctuationAndJapaneseKana": return jc.has(e) || Mc(e);
		default: return !1;
	}
}
function Pc(e, t) {
	if (e === void 0) return;
	let n = [];
	for (let r of e) r > t && n.push(r - t);
	return n;
}
function Fc(e, t, n = Infinity) {
	if (t <= 0 || n <= 0 || Number.isFinite(n) && e[t - 1] === "　") return t;
	let r = t, i = n;
	for (; r < e.length && e[r] === "　" && i > 0;) r++, i--;
	return r;
}
function Ic(e) {
	let t = [...e];
	for (let e = t.length - 1; e >= 0; --e) if (t[e] !== "　") return ji.test(t[e]);
	return !1;
}
function Lc(e, t, n, r = 0, i = 1, a = 0, o = !1, s, c, l = Infinity) {
	let u = [...t], d = (t) => c?.(t) ?? (() => {
		let n = 0;
		if (o) {
			if (!s) throw Error("Vertical glyph measurement capability is required for vertical text");
			n = s.measureRunInkExtra(t);
		}
		return fc(e.measureText(t).width + n, t, r, i, a);
	})(), f = (e) => {
		let t = e, r = l;
		if (r > 0) {
			for (; t > 0 && u[t - 1] === "　";) t--;
			let n = e - t;
			t += Math.max(0, n - r);
		}
		return d(u.slice(0, t).join("")) <= n;
	}, p = 0, m = u.length;
	for (; p < m;) {
		let e = p + m + 1 >> 1;
		f(e) ? p = e : m = e - 1;
	}
	return u.slice(0, p).join("");
}
function Rc(e, t) {
	if (e) {
		let t = e.split("-")[0].toLowerCase();
		if (ss.has(t)) return !0;
	}
	return t;
}
function zc(e) {
	let t = [], r = null, i = "";
	for (let a of e) {
		let e = n(a.codePointAt(0));
		r === null || e === r ? (r = e, i += a) : (t.push({
			text: i,
			ea: r
		}), r = e, i = a);
	}
	return i.length > 0 && t.push({
		text: i,
		ea: r ?? !1
	}), t;
}
function Bc(e) {
	let t = (e) => e >= 48 && e <= 57, n = (e) => e === "." || e === "," || e === ":" || e === "/" || e === "\xA0", r = [], i = "", a = null;
	for (let o = 0; o < e.length; o++) {
		let s = e[o], c = t(s.charCodeAt(0));
		!c && a === !0 && n(s) && t(e.charCodeAt(o + 1)) && (c = !0), a === null || c === a ? i += s : (r.push(i), i = s), a = c;
	}
	return i.length > 0 && r.push(i), r.length ? r : [e];
}
function Vc(e) {
	let t = [], n = 0;
	for (; n < e.length;) {
		let r = n;
		for (; r < e.length && e[r] !== " ";) r++;
		for (; r < e.length && e[r] === " ";) r++;
		r > n && t.push(e.slice(n, r)), n = r;
	}
	return t.length ? t : [e];
}
var Hc = .25;
function Uc(e) {
	let t = e?.defaultTabStop;
	return t != null && t > 0 ? t : 36;
}
function Wc(e) {
	return e === "center" ? "center" : e === "decimal" ? "decimal" : e === "right" || e === "end" ? "trailing" : "leading";
}
function Gc(e, t, n, r, i) {
	let a = e.length, o = e.map((e) => e.width), s = Array(a).fill(void 0), c = (t, n) => {
		let r = 0, i;
		for (let n = t; n < a && !e[n].isTab; n++) i === void 0 && e[n].decimalOffset !== void 0 && (i = r + e[n].decimalOffset), r += o[n];
		return {
			total: r,
			alignment: n === "center" ? r / 2 : n === "trailing" ? r : n === "decimal" ? i === void 0 ? 0 : r - i : 0
		};
	}, l = n;
	for (let n = 0; n < a; n++) {
		if (!e[n].isTab) {
			l += o[n];
			continue;
		}
		let a = Ni(l, t, i);
		if (!a) {
			o[n] = 0;
			continue;
		}
		let u = Wc(a.alignment), d = c(n + 1, u), f = d.total, p;
		p = u === "leading" ? a.pos : a.pos - d.alignment, p + f > r && (p = r - f), p < l && (p = l), o[n] = p - l, s[n] = a.leader, l = p;
	}
	return e.map((e, t) => ({
		width: o[t],
		leader: s[t]
	}));
}
function Kc(e, t, n) {
	let r = /* @__PURE__ */ new Map();
	for (let t of e) {
		if (t.fitTextRegionIndex === void 0) continue;
		let e = r.get(t.fitTextRegionIndex) ?? [];
		e.push(t), r.set(t.fitTextRegionIndex, e);
	}
	for (let e of r.values()) {
		let r = e.find((e) => e.fitTextVal !== void 0);
		if (!r || r.fitTextVal === void 0) continue;
		let i = 0, a = 0;
		for (let t of e) i += n(t) * dc(t), a += [...t.text].length;
		let o = Wi([{
			fitTextValTwips: r.fitTextVal,
			charCount: a,
			naturalWidthPx: i
		}], t)[0];
		o && e.forEach((t, n) => {
			t.fitTextPerGapPx = o.perGapPx, t.fitTextTrailingPadPx = n === e.length - 1 ? o.trailingPadPx : void 0, t.fitTextRegionStart = n === 0 ? !0 : void 0, t.fitTextRegionEnd = n === e.length - 1 ? !0 : void 0;
		});
	}
}
function qc(e, t) {
	let n = [], r = (e, n = 400, r = "normal") => {
		if (!e) return;
		let i = Sn(e), a = t.resolvedLocalFonts;
		if (!a) return;
		let o = a[`${i}:${n}:${r}`];
		if (o) return o;
		let s = a[i];
		return n === 400 && r === "normal" && s ? s : Object.values(a).find((e) => Sn(e.requestedFamily ?? "") === i && (e.weight ?? 400) === n && (e.style ?? "normal") === r);
	}, a = /* @__PURE__ */ new Map(), o = [];
	for (let [t, n] of e.entries()) {
		if (n.type !== "text") {
			o.push({
				charCount: 0,
				naturalWidthPx: 0
			});
			continue;
		}
		let e = n.text.split("	");
		for (let r = 0; r < e.length; r += 1) a.set(`${t}:${r}`, o.length), o.push({
			fitTextValTwips: n.fitTextVal,
			fitTextId: n.fitTextId,
			charCount: [...e[r]].length,
			naturalWidthPx: 0,
			charScale: n.charScale
		}), r < e.length - 1 && o.push({
			charCount: 0,
			naturalWidthPx: 0
		});
	}
	let s = /* @__PURE__ */ new Map();
	Wi(o, 1).forEach((e, t) => {
		for (let n = e.start; n < e.end; n += 1) s.set(n, t);
	});
	let c = (e, i, o, c, l, u = !1) => {
		let d = i, f = ji.test(e) ? !0 : void 0, p = d.typographyInput, m = (e, t) => e?.status === "valid" && e.value !== null ? e.value : t, h = m(p?.verticalAlign, o ?? void 0) ?? null, g = m(p?.positionPt, d.position), _ = p?.characterSpacingPt ?? d.charSpacing, v = rs(_), y = p?.characterScale ?? d.charScale, b = p?.kerningThresholdPt ?? d.kerning, x = p?.snapToGrid ?? d.snapToGrid, S = !1, C = d.ruby, w = C ? {
			text: C.text,
			fontSizePt: C.fontSizePt,
			...C.hpsRaisePt == null ? {} : { hpsRaisePt: C.hpsRaisePt }
		} : void 0, T = d.revision, E = d.rtl === !0 ? !0 : void 0, D = l === void 0 ? void 0 : a.get(`${c}:${l}`), O = D === void 0 ? void 0 : s.get(D), k = d.hyperlink ? {
			kind: "external",
			url: d.hyperlink
		} : d.hyperlinkAnchor ? {
			kind: "internal",
			ref: d.hyperlinkAnchor
		} : void 0, A = d.rtl === !0 || d.cs === !0, j = d.fontSizeCs ?? i.fontSize, M = d.fontFamilyCs ?? i.fontFamily, P = d.fontFamilyHighAnsi ?? i.fontFamily, ee = d.boldCs ?? !1, F = d.italicCs ?? !1, I = d.fontFamilyEastAsia ?? i.fontFamily, te = (A || !!d.rtl) && Rc(d.langBidi, !!d.rtl), ne = !0, re = !1, ie = (e, a, o, s, c = !1, l = !1) => {
			if (t.balanceSingleByteDoubleByteWidth && !a && e.includes("　") && [...e].some((e) => e !== "　")) {
				for (let t of e.split(/(\u3000+)/u).filter(Boolean)) ie(t, a, o, void 0, c, l);
				return;
			}
			if (!c && v && O === void 0) {
				let n = [
					0,
					...N(e),
					e.length
				];
				if (n.slice(0, -1).map((t, r) => e.slice(t, n[r + 1])).some((e) => Nc(e, t.characterSpacingControl))) {
					ie(e, a, o, void 0, !0, l);
					return;
				}
			}
			let p = a ? ee : i.bold, m = a ? F : i.italic, C = p ? 700 : 400, A = m ? "italic" : "normal", ae = Object.freeze({
				text: e,
				fontSizePt: a ? j : i.fontSize,
				fonts: l ? {
					ascii: null,
					highAnsi: null,
					eastAsia: null,
					complexScript: null
				} : d.fontSlots?.direct ?? {
					ascii: i.fontFamily,
					highAnsi: P,
					eastAsia: I,
					complexScript: M
				},
				themeFonts: l ? void 0 : d.fontSlots?.theme,
				themeFontPresence: l ? void 0 : d.fontSlots?.themePresent,
				weight: C,
				style: A,
				complexScript: a,
				fontHint: d.fontHint,
				eastAsiaLanguage: d.langEastAsia,
				kerning: b == null ? void 0 : (a ? j : i.fontSize) >= b,
				measure: !1
			}), oe = s ? { spans: [s] } : t.layoutServices?.text.shape(ae), se = c && v ? (() => {
				let n = [
					0,
					...N(e),
					e.length
				], r = [];
				for (let i = 0; i < n.length - 1; i += 1) {
					let a = n[i], o = n[i + 1], s = e.slice(a, o);
					if (!Nc(s, t.characterSpacingControl)) continue;
					let c = t.layoutServices?.text.shape({
						...ae,
						text: s,
						measure: !0,
						clusterGeometry: !1
					}), l = (c?.inkBounds && c.horizontalInkBoundsAreTight === !0 ? (() => {
						let e = Math.max(0, Math.min(c.advancePt, c.advancePt - c.inkBounds.xMaxPt));
						if (!jc.has(s)) return e;
						let n = c.spans[0]?.fontRoute.fingerprint, r = t.layoutServices?.text.shape({
							...ae,
							text: "一",
							fontHint: "eastAsia",
							measure: !0,
							clusterGeometry: !1
						}), i = r?.spans[0]?.fontRoute.fingerprint, a = r?.advancePt;
						if (!n || i !== n || a === void 0 || !Number.isFinite(a) || a <= 0) return 0;
						let o = ns({
							punctuationAdvancePt: c.advancePt,
							punctuationInkEndPt: c.inkBounds.xMaxPt,
							ideographicCellAdvancePt: a
						});
						return Math.max(0, Math.min(e, c.advancePt - o));
					})() : 0) * (y ?? 1);
					l > 0 && r.push({
						end: o,
						adjustmentPt: -l
					});
				}
				return r.length === 0 ? void 0 : Object.freeze(r.map((e) => Object.freeze(e)));
			})() : void 0, ce = oe?.spans.some((e) => e.script === "complexScript" !== a) ?? !1;
			if (oe && (oe.spans.length > 1 || ce)) {
				for (let e = 0; e < oe.spans.length; e += 1) {
					let n = oe.spans[e], r = n.script === "complexScript", a = r ? M : n.script === "eastAsia" ? I : n.script === "highAnsi" ? P : i.fontFamily, o = v && c && [...n.text].some((e) => Nc(e, t.characterSpacingControl));
					ie(n.text, r, a, n, o);
				}
				return;
			}
			let le = oe?.spans[0], ue = (e, n) => {
				if (!e) return;
				let r = Object.values(t.layoutServices?.text.fontMetrics ?? t.layoutServices?.text.localMetrics ?? {}).filter((t) => Sn(t.family) === Sn(e) && (t.weight ?? 400) === C && (t.style ?? "normal") === A);
				return r.find((e) => n && Sn(e.requestedFamily ?? "") === Sn(n)) ?? r[0];
			}, de = le ? ue(le.font.resolvedFamily, le.font.requestedFamily) : r(o, C, A), fe = t.layoutServices?.text.resolve({
				fonts: ae.fonts,
				themeFonts: ae.themeFonts,
				themeFontPresence: ae.themeFontPresence,
				slot: "eastAsia",
				weight: C,
				style: A
			}), pe = fe ? ue(fe.resolvedFamily, fe.requestedFamily) : r(I, C, A), me = de ?? r(o, C, A), he = pe ?? r(I, C, A), ge = fe?.resolvedFamily ?? pe?.family ?? I, _e = t.useFeLayout && (d.fontHint === "eastAsia" || !!ge?.trim()), ve = le?.script ?? s?.script ?? (a ? "complexScript" : ji.test(e) ? "eastAsia" : "ascii"), ye = t.balanceSingleByteDoubleByteWidth ? ts(e, ve) : void 0;
			n.push({
				text: e,
				script: ve,
				...ye === void 0 ? {} : { widthBalanceGridDeltaFactor: ye },
				..._e ? { metricEastAsian: !0 } : {},
				bold: p,
				italic: m,
				underline: i.underline,
				underlineStyle: d.underlineStyle,
				underlineColor: d.underlineColor,
				strikethrough: i.strikethrough,
				fontSize: a ? j : i.fontSize,
				color: i.color,
				fontFamily: le?.font.resolvedFamily ?? de?.family ?? o,
				fontRoute: le?.fontRoute,
				resolvedLineHeightRatio: me?.lineHeightRatio,
				resolvedEastAsianLineHeightRatio: me?.eastAsianLineHeightRatio,
				vertAlign: h,
				measuredWidth: 0,
				textLayoutService: t.layoutServices?.text,
				textShapeRequest: ae,
				breakBefore: le?.breakBefore ?? s?.breakBefore ?? !0,
				smallCaps: S,
				joinPrev: ne && (d.noBreakBefore === !0 || u) || re || s?.breakBefore === !1 ? !0 : void 0,
				hardJoinPrev: ne && (d.noBreakBefore === !0 || u) ? !0 : void 0,
				doubleStrikethrough: i.doubleStrikethrough ?? !1,
				highlight: i.highlight ?? null,
				emphasisMark: i.emphasisMark,
				background: i.background ?? null,
				colorAuto: d.colorAuto ?? !1,
				border: d.border ?? null,
				ruby: ne ? w : void 0,
				revision: T,
				...T && t.showTrackedChanges === !0 ? { trackChangesMarkup: {
					kind: T.kind,
					authorColor: t.revisionAuthorColor?.(T.author) ?? "#C00000"
				} } : {},
				rtl: E,
				digitsAsAN: te ? !0 : void 0,
				eaFloorFamily: ge,
				eaFloorRoute: fe?.route,
				resolvedEaFloorLineHeightRatio: he?.lineHeightRatio,
				resolvedEaFloorEastAsianLineHeightRatio: he?.eastAsianLineHeightRatio,
				textBoxLineFloor: d.textBoxLineFloor,
				textBoxVertical: d.textBoxVertical,
				hyperlink: k,
				snapToCharacterGrid: x !== !1,
				charSpacing: _,
				punctuationCompressions: se,
				eastAsiaLanguage: d.langEastAsia,
				overflowPunctuationEastAsianRun: f,
				overflowPunctuationBidiLanguage: d.langBidi,
				charScale: y,
				fitTextVal: O === void 0 ? void 0 : d.fitTextVal,
				fitTextId: O === void 0 ? void 0 : d.fitTextId,
				fitTextRegionIndex: O,
				fitTextRunIndex: O === void 0 ? void 0 : D,
				position: g,
				positionExtendsLineBox: t.positionExtendsLineBox !== !1,
				kerning: b,
				tateChuYoko: t.verticalCJK && d.eastAsianVert === !0 ? !0 : void 0,
				tateChuYokoCompress: t.verticalCJK && d.eastAsianVert === !0 && d.eastAsianVertCompress === !0 ? !0 : void 0,
				verticalRun: t.verticalCJK && d.eastAsianVert !== !0 ? !0 : void 0
			}), ne = !1, re = !1;
		}, ae = (e, t) => {
			let n = t === "cs", r = t === "cs" ? M : t === "ea" ? I : i.fontFamily;
			if (Ee(r)) {
				for (let t of ke(e, r)) ie(t.text, n, t.mapped ? null : r, void 0, !1, t.mapped);
				return;
			}
			ie(e, n, r);
		}, oe = (e) => {
			if (t.layoutServices?.text) {
				if (Ee(i.fontFamily)) {
					ae(e, "latin");
					return;
				}
				ie(e, !1, i.fontFamily);
				return;
			}
			for (let t of zc(e)) ae(t.text, t.ea ? "ea" : "latin");
		}, se = i.smallCaps ? Dc(e) : [{
			text: e,
			reduced: !1
		}], ce = "";
		for (let e of se) {
			S = e.reduced, re = ce.length > 0 && !/\s$/.test(ce), ce = e.text;
			let t = i.allCaps || i.smallCaps ? e.text.toUpperCase() : e.text;
			for (let e of Vc(t)) if (A) if (te) for (let t of Bc(e)) ae(t, "cs");
			else ae(e, "cs");
			else oe(e);
		}
	}, l = !1;
	for (let [i, a] of e.entries()) {
		let o = a.revision?.kind;
		if (t.showTrackedChanges !== !0 && (o === "deletion" || o === "moveFrom")) continue;
		let s = l;
		l = a.type === "text" && a.noBreakAfter === !0;
		let u = n.length;
		if (a.type === "text") {
			let e = a, r = e.noteRef ? e.noteRef.id ? t.noteNumbers?.get(`${e.noteRef.kind}:${e.noteRef.id}`) : t.noteReferenceNumber : void 0;
			if (e.noteRef) {
				let t = r == null ? e.text || "" : String(r);
				t.length > 0 && c(t, e, e.vertAlign ?? "super", i, 0, s);
				for (let e = u; e < n.length; e += 1) n[e].sourceRunIndex = i;
				continue;
			}
			let o = e.text.split("	");
			for (let t = 0; t < o.length; t++) o[t].length > 0 && c(o[t], e, e.vertAlign, i, t, t === 0 && s), t < o.length - 1 && n.push({
				isTab: !0,
				fontSize: e.fontSize,
				measuredWidth: 0,
				bold: e.bold,
				italic: e.italic,
				sourceRunIndex: i
			});
		} else if (a.type === "image") {
			let e = a;
			n.push({
				imagePath: e.imagePath,
				mimeType: e.mimeType,
				widthPt: e.widthPt,
				heightPt: e.heightPt,
				rotation: e.rotation,
				flipH: e.flipH,
				flipV: e.flipV,
				anchor: e.anchor ?? !1,
				anchorXPt: e.anchorXPt ?? 0,
				anchorYPt: e.anchorYPt ?? 0,
				anchorXFromMargin: e.anchorXFromMargin ?? !1,
				anchorYFromPara: e.anchorYFromPara ?? !1,
				colorReplaceFrom: e.colorReplaceFrom,
				duotone: e.duotone,
				alpha: e.alpha,
				srcRect: e.srcRect ?? void 0,
				measuredWidth: 0
			});
		} else if (a.type === "chart") {
			let e = a;
			n.push({
				imagePath: "",
				mimeType: "",
				widthPt: e.widthPt,
				heightPt: e.heightPt,
				anchor: e.anchor ?? !1,
				anchorXPt: e.anchorXPt ?? 0,
				anchorYPt: e.anchorYPt ?? 0,
				anchorXFromMargin: e.anchorXFromMargin ?? !1,
				anchorYFromPara: e.anchorYFromPara ?? !1,
				chart: !0,
				chartResourceKey: e.resourceKey,
				measuredWidth: 0
			});
		} else if (a.type === "shape" && a.inline === !0) n.push({
			imagePath: "",
			mimeType: "",
			widthPt: a.widthPt,
			heightPt: a.heightPt,
			anchor: !1,
			anchorXPt: 0,
			anchorYPt: 0,
			anchorXFromMargin: !1,
			anchorYFromPara: !1,
			inlineShape: !0,
			measuredWidth: 0
		});
		else if (a.type === "unavailableDrawing") {
			let e = "anchorAcquisitionInput" in a ? a.anchorAcquisitionInput : void 0;
			n.push({
				imagePath: "",
				mimeType: "",
				widthPt: a.widthPt,
				heightPt: a.heightPt,
				anchor: e !== void 0,
				anchorXPt: 0,
				anchorYPt: 0,
				anchorXFromMargin: !1,
				anchorYFromPara: !1,
				unavailableResourceKind: a.resourceKind,
				measuredWidth: 0
			});
		} else if (a.type === "break") {
			if (a.breakType === "line") {
				let t = Oc(e, e.indexOf(a));
				n.push({
					lineBreak: !0,
					fontSize: t,
					measuredWidth: 0
				});
			}
		} else if (a.type === "field") {
			let e = a, n = kc(e, t);
			n && c(n, e, e.vertAlign, i, void 0, s);
		} else if (a.type === "math") {
			let r = a.fontSize || Oc(e, e.indexOf(a)), i = "resourceKey" in a ? a.resourceKey : void 0;
			if (t.layoutServices && !i) throw Error("Service-backed math layout requires a normalized structural resource key");
			let o = i ? t.layoutServices?.math.resolve(i) : void 0;
			n.push({
				math: !0,
				mathResourceKey: i ?? "",
				mathMetadata: o,
				display: a.display,
				fontSize: r,
				color: null,
				fallbackText: "fallbackText" in a ? a.fallbackText : G(a.nodes),
				measuredWidth: 0,
				mathAscent: 0,
				mathDescent: 0,
				jc: a.jc
			});
		} else if (a.type === "ptab") n.push({
			isTab: !0,
			fontSize: a.fontSize || Oc(e, e.indexOf(a)),
			measuredWidth: 0,
			leader: a.leader,
			ptab: {
				alignment: a.alignment,
				relativeTo: a.relativeTo
			}
		});
		else if (a.type === "anchorHost") {
			let e = a.fontFamilyEastAsia != null, i = a.bold ?? !1, o = a.italic ?? !1, s = a.fontFamilyEastAsia ?? a.fontFamily ?? null, c = i ? 700 : 400, l = o ? "italic" : "normal", u = r(s, c, l), d = r(a.fontFamilyEastAsia ?? null, c, l), f = u ?? (s ? t.resolvedLocalFonts?.[Sn(s)] : void 0), p = d ?? (a.fontFamilyEastAsia ? t.resolvedLocalFonts?.[Sn(a.fontFamilyEastAsia)] : void 0);
			n.push({
				text: "",
				metricOnly: !0,
				...e ? { metricEastAsian: !0 } : {},
				bold: i,
				italic: o,
				underline: !1,
				strikethrough: !1,
				fontSize: a.fontSize,
				color: null,
				fontFamily: u?.family ?? s,
				resolvedLineHeightRatio: f?.lineHeightRatio,
				resolvedEastAsianLineHeightRatio: f?.eastAsianLineHeightRatio,
				vertAlign: null,
				measuredWidth: 0,
				eaFloorFamily: d?.family ?? a.fontFamilyEastAsia ?? null,
				resolvedEaFloorLineHeightRatio: p?.lineHeightRatio,
				resolvedEaFloorEastAsianLineHeightRatio: p?.eastAsianLineHeightRatio,
				snapToCharacterGrid: !1
			});
		}
		for (let e = u; e < n.length; e += 1) n[e].sourceRunIndex = i;
	}
	for (let [t, r] of e.entries()) {
		if (r.type !== "text") continue;
		let e = r, i = e.noBreakRanges;
		if (!i || i.length === 0) continue;
		let a = i.map((t) => {
			let n = (t) => {
				let n = e.text.slice(0, t);
				return e.allCaps || e.smallCaps ? n.toUpperCase().length : n.length;
			};
			return {
				start: n(t.start),
				end: n(t.end)
			};
		}), o = 0;
		for (let e of n) {
			if (e.sourceRunIndex !== t) continue;
			if (!("text" in e)) {
				"isTab" in e && (o += 1);
				continue;
			}
			let n = o + e.text.length;
			o > 0 && a.some((e) => e.start === o || e.end === o) && (e.joinPrev = !0, e.hardJoinPrev = !0);
			let r = a.filter((e) => e.start >= o && e.end <= n).map((e) => Object.freeze({
				start: e.start - o,
				end: e.end - o
			}));
			r.length > 0 && (e.noBreakRanges = Object.freeze(r)), o = n;
		}
	}
	for (let e = 0; e < n.length;) {
		let t = n[e];
		if (!("text" in t) || t.hyperlink?.kind !== "external") {
			e += 1;
			continue;
		}
		let r = t.hyperlink.url, i = e, a = [];
		for (; i < n.length;) {
			let e = n[i];
			if (!("text" in e) || e.hyperlink?.kind !== "external" || e.hyperlink.url !== r) break;
			a.push(e), i += 1;
		}
		let o = a.map((e) => e.text).join(""), s = /* @__PURE__ */ new Set(), c = 0;
		for (let e of a) {
			for (let t of e.noBreakRanges ?? []) {
				let e = [t.start, t.end];
				for (let t of e) s.add(c + t);
			}
			c += e.text.length;
		}
		let l = /* @__PURE__ */ new Set();
		for (let e of o.matchAll(/\S+/gu)) {
			let t = e[0], n = e.index, r = new Set(N(t).map((e) => n + e)), i = new Set([...s].filter((e) => e > n && e <= n + t.length).map((e) => e - n)), a = new Set([...r].map((e) => e - n));
			for (let e of fs(t, a, i)) l.add(n + e);
		}
		if (l.size === 0) {
			e = i;
			continue;
		}
		c = 0;
		for (let e = 0; e < a.length; e += 1) {
			let t = a[e], n = c, r = n + t.text.length, i = [...l].filter((e) => e > n && e < r).map((e) => e - n).sort((e, t) => e - t);
			i.length > 0 && (t.externalLinkBreakOffsets = Object.freeze(i)), e > 0 && l.has(n) && (t.joinPrev = void 0, t.externalLinkBreakBefore = !0), c = r;
		}
		e = i;
	}
	if (t.balanceSingleByteDoubleByteWidth) {
		let e = /* @__PURE__ */ new Map(), t = (t) => {
			let n = t.textLayoutService, r = t.textShapeRequest;
			if (!n || !r) return;
			let i = Ai(t, 1), a = [
				n.fingerprint,
				t.fontRoute?.fingerprint ?? "implicit-latin",
				t.eaFloorRoute?.fingerprint ?? "implicit-east-asia",
				i,
				t.bold ? 700 : 400,
				t.italic ? "italic" : "normal",
				t.kerning ?? "auto"
			].join("|"), o = e.get(a);
			if (o !== void 0) return o;
			let s = n.shape({
				...r,
				text: " ",
				fontSizePt: i,
				measure: !0,
				clusterGeometry: !1
			}).advancePt, c = n.shape({
				...r,
				text: "一",
				fontSizePt: i,
				fontHint: "eastAsia",
				measure: !0,
				clusterGeometry: !1
			}).advancePt;
			if (!Number.isFinite(s) || !Number.isFinite(c) || s < 0 || c <= 0) return;
			let l = c / 2 - s;
			return e.set(a, l), l;
		}, r = [], i = 0, a = () => {
			if (Qo(i)) for (let e of r) {
				e.widthBalanceSpaceSequence = !0;
				let n = t(e);
				n !== void 0 && (e.widthBalanceSpaceAdjustmentPt = n);
			}
			r = [], i = 0;
		};
		for (let e of n) {
			if (!("text" in e) || e.script === "complexScript") {
				a();
				continue;
			}
			let t = e.text.length - e.text.replace(/ +$/u, "").length;
			t > 0 && t === e.text.length || a(), t > 0 ? (r.push(e), i += t) : a();
		}
		a();
	}
	for (let e = 1; e < n.length; e++) {
		let t = n[e];
		if (!("text" in t) || t.joinPrev) continue;
		let r = t.text.codePointAt(0);
		if (r === void 0 || !i.lineStartForbidden.has(r)) continue;
		let a = n[e - 1];
		!("text" in a) || /\s$/.test(a.text) || (t.joinPrev = !0);
	}
	for (let e = 1; e < n.length; e++) {
		let t = n[e];
		if (!("text" in t) || t.joinPrev || t.text[0] !== " " && t.text[0] !== "　") continue;
		let r = n[e - 1];
		if (!("text" in r)) continue;
		let i = t.sourceRunIndex === r.sourceRunIndex, a = is(r.text, t.text);
		!i && !a || (t.joinPrev = !0);
	}
	for (let e = 1; e < n.length; e++) {
		let t = n[e];
		if (!("text" in t) || t.joinPrev || t.externalLinkBreakBefore || t.text.length === 0) continue;
		let r = n[e - 1];
		if (!("text" in r) || r.text.length === 0 || /\s$/u.test(r.text) || /^\s/u.test(t.text)) continue;
		let i = [...r.text].at(-1), a = [...t.text][0], o = i?.codePointAt(0), s = a?.codePointAt(0);
		o === void 0 || s === void 0 || o === 8203 || s === 8203 || le(r.text) || le(t.text) || Ac(r.text) || Ac(t.text) || be(o, s) && (t.joinPrev = !0);
	}
	let u = /* @__PURE__ */ new Set();
	for (let e of n) !("text" in e) || e.fitTextRegionIndex === void 0 || (u.has(e.fitTextRegionIndex) ? e.joinPrev = !0 : (e.fitTextRegionStart = !0, u.add(e.fitTextRegionIndex)));
	return uc(n), n;
}
function Jc(e, t, n, r, a, s = [], c, l = {}, u = 0, d = i, f = void 0, p = 36, m = n, h = !1, g = !1, _ = !1, v, y = "bounded", x, S = !1, C) {
	if (C === void 0) {
		let i = (i, o) => Jc(e, Uo(t), n, r, a, s, c, l, u, d, f, p, m, h, g, _, v, y, x, S, {
			probeHeights: i,
			preparedFloatWrap: o
		});
		if (!c || y === "intrinsic") return i(null);
		let o = c.lineWindow ? void 0 : go(c.floats);
		return Ko((e) => i(e, o), (e) => c.lineBoxH(e.ascent, e.descent, e.hasRuby, e.intendedSingle, e.eastAsian, e.gridCountSingle));
	}
	let { probeHeights: T, preparedFloatWrap: D } = C, O = [], k = [], A = 0, j = f?.type === "snapToChars" && f.characterPitchPt != null && f.characterPitchPt > 0 ? f.characterPitchPt * a : null, P = null, ee = 0, F = 0, I = 0, te = 0, ne = /* @__PURE__ */ new Set(), re = 0, ie = 0, oe = 0, se = 0, ce = 0, ue = 0, de = 0, fe = 0, pe = !1, me = !0, he = n, ge = 0, _e = c?.startPageY ?? 0, ve = () => za(a), ye = t.length > 0 && t.every((e) => "text" in e && e.metricOnly === !0 || "imagePath" in e && !!e.anchor), be = (e = 0) => {
		if (P = null, te = 0, ne.clear(), ge = 0, he = n, !c) return;
		let t = T?.[O.length];
		if (t === void 0) return;
		let r = {
			xLeftPt: c.referenceXPt ?? c.paraX,
			xRightPt: (c.referenceXPt ?? c.paraX) + (c.referenceWidthPt ?? n),
			readingDirection: c.readingDirection ?? (h ? "rtl" : "ltr")
		};
		if (c.lineWindow) {
			let r = c.lineWindow({
				topYPt: _e,
				minimumStartWidthPt: 1,
				squareMinimumStartWidthPt: e,
				probeHeightPt: t,
				paragraphXPt: c.paraX,
				maximumWidthPt: n,
				columnXPt: c.columnXPt,
				columnWidthPt: c.columnWidthPt
			});
			_e = r.topYPt, ge = r.xOffsetPt, he = r.maximumWidthPt;
		} else {
			let i = Po(_e, 1, t, c.paraX, n, D ?? go(c.floats), c.columnXPt, c.columnXPt + c.columnWidthPt, r, e);
			_e = i.topY, ge = i.xOffset, he = i.maxWidth;
		}
	}, xe = () => y === "intrinsic" ? Infinity : he - (me ? r : 0), Se = h ? s.map((e) => ({
		pos: e.pos * a,
		alignment: e.alignment,
		leader: e.leader
	})) : [], Ce = p * a, we = () => {
		if (!h || !k.some((e) => "isTab" in e)) return;
		let e = k.map((e) => ({
			isTab: "isTab" in e,
			width: e.measuredWidth
		}));
		for (let t = 0; t < k.length; t += 1) {
			if (!("isTab" in k[t])) continue;
			let n = t + 1;
			for (; n < k.length && !("isTab" in k[n]);) n += 1;
			let r = tt(k.slice(t + 1, n));
			if (!r) continue;
			let i = t + 1 + r.segmentIndex, a = k[i];
			"text" in a && (e[i].decimalOffset = Ze(a, a.text.slice(0, r.charOffset)));
		}
		let t = Gc(e, Se, m - (ge + he) + (me ? r : 0), m + u, Ce), n = 0;
		for (let e = 0; e < k.length; e++) {
			let r = k[e];
			"isTab" in r && (n += t[e].width - r.measuredWidth, r.measuredWidth = t[e].width, r.leader = t[e].leader);
		}
		A += n;
	}, Te = !1, Ee = !1, De = !1, Oe = (e, t = !1, n) => {
		we();
		let r, i = !1;
		for (let e of k) {
			if ("isTab" in e) continue;
			let t = "text" in e ? e.position ?? 0 : 0;
			if ("text" in e && e.positionExtendsLineBox === !1) {
				r = 0, i = !0;
				break;
			}
			if (!i) r = t, i = !0;
			else if (r !== t) {
				r = 0;
				break;
			}
		}
		let o = i ? r ?? 0 : 0;
		if (o !== 0) for (let e of k) "text" in e && (e.lineRelativePosition = ps(e.position ?? 0, o));
		let s = e === void 0 ? re || 10 : Math.max(re, e), l = ie > 0 || oe > 0, u = l ? ie : s * a * .8, d = l ? oe : s * a * .2, f = pe ? ue : u, p = pe ? de : d, m = pe ? fe : se, h = ce || (Ee ? yc(se, s * a) : u + d);
		O.push({
			segments: k,
			height: s,
			ascent: u,
			descent: d,
			visibleAscent: f,
			visibleDescent: p,
			visibleIntendedSingle: m,
			intendedSingle: se,
			gridCountSingle: h,
			xOffset: ge,
			availWidth: he,
			topY: c ? _e : void 0,
			hasRuby: Te,
			eastAsian: Ee,
			endsWithBreak: t,
			consumedEnd: n ?? R[0]?.src ?? Ve
		}), c && (_e += c.lineBoxH(u, d, Te, se, Ee, h)), k = [], A = 0, ee = 0, F = 0, I = 0, te = 0, ne.clear(), re = 0, ie = 0, oe = 0, se = 0, ce = 0, ue = 0, de = 0, fe = 0, pe = !1, Te = !1, Ee = !1, De = !1, me = !1, be(ve());
	}, ke = (e, t = e.text) => Tn(e.fontFamily) * Ai(e, a) * dc(e) * [...t].length, Ae = (e) => {
		let t = e.bold ? 700 : 400, n = e.italic ? "italic" : "normal";
		return e.fontRoute ? `${e.fontRoute.fingerprint}|${t}|${n}` : `implicit|${Vs(e.bold, e.italic, 1, e.fontFamily, l)}`;
	}, je = (e, t, n = t.text) => {
		/\S/.test(n) && e.add(Ae(t));
	}, Me = (e) => {
		let t = ne.size;
		for (let n of e) ne.has(n) || (t += 1);
		return t;
	}, Ne = (e, t) => {
		let n = hc(e, f);
		return !n || j == null ? t : n === "eastAsia" ? gc(t, n, j, Xe(e)) : P?.kind === n ? gc(P.naturalWidthPx + t, n, j) - P.allocatedWidthPx : gc(t, n, j);
	}, L = (e, t, n, r, i, o = 0) => {
		let s = t;
		if ("text" in e) {
			let n = hc(e, f), r = e.snapGridNaturalWidthPx ?? t;
			if (n && j != null) if (e.snapGridClass = n, e.snapGridNaturalWidthPx = r, e.snapGridCellPitchPx = j, n === "eastAsia") s = gc(r, n, j, Xe(e)), e.snapGridLeadingPadPx = 0, e.snapGridTrailingPadPx = s - r, e.measuredWidth = s, P = null;
			else if (P?.kind === n) {
				let t = P.first.snapGridLeadingPadPx ?? 0, i = P.last.snapGridTrailingPadPx ?? 0, a = P.naturalWidthPx + r, o = gc(a, n, j), c = o - a, l = n === "latin" ? c / 2 : 0, u = c - l;
				P.first.measuredWidth -= t, P.first.snapGridLeadingPadPx = l, P.first.measuredWidth += l, P.last.measuredWidth -= i, e.snapGridLeadingPadPx = 0, e.snapGridTrailingPadPx = u, e.measuredWidth = r + u, s = o - P.allocatedWidthPx, P = {
					kind: n,
					first: P.first,
					last: e,
					naturalWidthPx: a,
					allocatedWidthPx: o
				};
			} else {
				let t = gc(r, n, j), i = t - r, a = n === "latin" ? i / 2 : 0, o = i - a;
				e.snapGridLeadingPadPx = a, e.snapGridTrailingPadPx = o, e.measuredWidth = t, s = t, P = {
					kind: n,
					first: e,
					last: e,
					naturalWidthPx: r,
					allocatedWidthPx: t
				};
			}
			else e.snapGridClass = void 0, e.snapGridLeadingPadPx = void 0, e.snapGridTrailingPadPx = void 0, e.snapGridCellPitchPx = void 0, e.measuredWidth = t, P = null;
		} else P = null;
		if (k.push(e), A += s, "text" in e) {
			let t = e.text.length - e.text.replace(/ +$/, "").length, n = t > 0 && t === e.text.length;
			if (n && F > 0) ee -= I, F += t, I = 0;
			else {
				F = 0, I = 0;
				let e = k[k.length - 2], r = e !== void 0 && "text" in e && /\S$/u.test(e.text);
				(n && r || t > 0 && !n) && (F = t, I = t === 1 ? o : 0, ee += I);
			}
			te += ke(e), je(ne, e);
		}
		n > re && (re = n), r > ie && (ie = r), i > oe && (oe = i);
		let c = !("text" in e) || e.metricOnly !== !0;
		c && (pe = !0, r > ue && (ue = r), i > de && (de = i));
		let l = 0;
		if (!("isTab" in e) && !("imagePath" in e) && !("math" in e)) {
			let t = e;
			t.ruby && (Te = !0), t.seaBreaks !== void 0 && M(t.text) && (De = !0);
			let n = t.metricEastAsian === !0 || ji.test(t.text);
			!Ee && n && (Ee = !0);
			let r = t.smallCaps && !t.vertAlign ? t.fontSize * a : Pe(t), i = n && !t.ruby, o = t.textBoxLineFloor && t.ruby ? 0 : Math.max(Hs(t, r, i), t.textBoxLineFloor || t.metricEastAsian === !0 ? Us(t, r, i) : 0);
			o > se && (se = o), c && o > fe && (fe = o), i && (l = yc(o, r));
		} else "isTab" in e || (l = r + i);
		l > ce && (ce = l);
	}, Pe = (e) => Ai(e, a), Fe = null, Ie = (t) => {
		t !== Fe && (e.font = t, Fe = t);
	}, Le = (t) => {
		if (t.kerning == null) return null;
		let n = e.fontKerning;
		return e.fontKerning = t.fontSize >= t.kerning ? "normal" : "none", n;
	}, Re = (t) => {
		t != null && (e.fontKerning = t);
	}, ze = (t, n = !1) => {
		if (t.textLayoutService && t.textShapeRequest) {
			let e = t.textLayoutService.shape({
				...t.textShapeRequest,
				text: t.text,
				fontSizePt: Pe(t),
				measure: !0,
				clusterGeometry: n
			});
			return n && (t.shapedClusters = e.clusters, t.selectedFaceFontBox = {
				ascentPt: e.ascentPt,
				descentPt: e.descentPt
			}, t.selectedFaceInkBounds = e.inkBounds ?? {
				xMinPt: 0,
				xMaxPt: e.advancePt,
				ascentPt: e.ascentPt,
				descentPt: e.descentPt
			}), {
				width: e.advancePt,
				actualBoundingBoxAscent: e.ascentPt,
				actualBoundingBoxDescent: e.descentPt,
				fontBoundingBoxAscent: e.ascentPt,
				fontBoundingBoxDescent: e.descentPt
			};
		}
		Ie(Vs(t.bold, t.italic, Pe(t), t.fontFamily, l, t.fontRoute));
		let r = Le(t), i = e.measureText(t.text);
		return Re(r), i;
	}, Be = (e, t) => {
		if (!e.verticalRun) return 0;
		if (!x) throw Error("Vertical glyph measurement capability is required for vertical text");
		Ie(Vs(e.bold, e.italic, Pe(e), e.fontFamily, l, e.fontRoute));
		let n = Le(e);
		try {
			return x.measureRunInkExtra(t);
		} finally {
			Re(n);
		}
	}, Ve = {
		segIndex: t.length,
		charOffset: 0
	}, He = t.map((e, t) => {
		if (e.src = {
			segIndex: t,
			charOffset: 0
		}, "text" in e && le(e.text)) {
			let t = ic(e);
			e.seaBreaks = E(e.text, {
				cjk: !0,
				kinsoku: d
			}).filter((e) => !t.has(e));
		}
		return e;
	}), R;
	if (!v) R = He;
	else if (v.segIndex >= He.length) R = [];
	else {
		let e = He[v.segIndex];
		if (v.charOffset > 0) if (!("text" in e) || v.charOffset > e.text.length) R = [];
		else {
			let t = e.text.slice(v.charOffset);
			R = t ? [{
				...e,
				text: t,
				measuredWidth: 0,
				src: { ...v },
				joinPrev: void 0,
				hardJoinPrev: void 0,
				...q(e, v.charOffset, e.text.length),
				seaBreaks: Pc(e.seaBreaks, v.charOffset)
			}, ...He.slice(v.segIndex + 1)] : He.slice(v.segIndex + 1);
		}
		else R = He.slice(v.segIndex);
	}
	let Ue = 0, We = -1, Ge = [];
	for (let e = R.length - 1; e >= 0; --e) {
		let t = R[e];
		if (!t || !("text" in t) || t.text.length === 0) break;
		if (t.fitTextRegionIndex !== void 0 || t.tateChuYoko === !0 || t.ruby !== void 0) {
			if (t.sourceRunIndex !== void 0) {
				for (let e = Ge.length - 1; e >= 0; --e) {
					let n = Ge[e];
					n.segment.sourceRunIndex === t.sourceRunIndex && (n.segment.paragraphFinalIdeographicSpaceTail = void 0, n.segment.paragraphFinalIdeographicSpaceLocalCount = void 0, n.segment.paragraphFinalIdeographicSpaceCount = void 0, n.segment.paragraphFinalIdeographicSpaceTailStart = void 0, Ge.splice(e, 1));
				}
				We = Ge.at(-1)?.index ?? -1;
			}
			break;
		}
		let n = /^\u3000+$/u.test(t.text), r = /[^\u3000]\u3000+$/u.test(t.text);
		if (!n && !r) break;
		let i = n ? [...t.text].length : [...t.text].reverse().findIndex((e) => e !== "　");
		if (Ue += i, t.paragraphFinalIdeographicSpaceTail = !0, t.paragraphFinalIdeographicSpaceLocalCount = i, t.paragraphFinalIdeographicSpaceCount = Ue, We = e, Ge.push({
			index: e,
			segment: t
		}), r) break;
	}
	if (We >= 0) {
		let e = R[We];
		e && "text" in e && (e.paragraphFinalIdeographicSpaceTailStart = !0);
	}
	Kc(R.filter((e) => "text" in e), a, (e) => ze(e).width + Be(e, e.text));
	let Ke = (e) => mc(e, ze(e).width + Be(e, e.text), f, a), qe = (e, t) => {
		let n = hc(e, f);
		return !n || j == null || e.text.length === 0 ? t : gc(t, n, j, n === "eastAsia" ? Xe(e) : 1);
	}, Je = (e) => qe(e, Ke(e)), Ye = (t, n, r = !1) => {
		let i = r ? t.text.length - n.length : 0, o = {
			...t,
			text: n,
			punctuationCompressions: nc(t, Math.max(0, i), Math.max(0, i) + n.length)
		};
		if (t.textLayoutService && t.textShapeRequest) return mc(o, t.textLayoutService.shape({
			...t.textShapeRequest,
			text: n,
			fontSizePt: Pe(t),
			measure: !0,
			clusterGeometry: !1
		}).advancePt + Be(t, n), f, a);
		Ie(Vs(t.bold, t.italic, Pe(t), t.fontFamily, l, t.fontRoute));
		let s = Le(t), c = e.measureText(n).width;
		return Re(s), mc(o, c + Be(t, n), f, a);
	}, Xe = (t) => {
		if (j == null) return 1;
		t.textLayoutService && t.textShapeRequest && !t.shapedClusters && ze(t, !0);
		let n = t.shapedClusters?.length ? t.shapedClusters : null, r = n == null ? [...new Set([
			0,
			...N(t.text),
			t.text.length
		])].sort((e, t) => e - t) : null, i = n?.map((e) => ({
			start: e.range.start,
			end: e.range.end,
			advancePx: e.advancePt
		})) ?? r.slice(0, -1).map((e, t) => ({
			start: e,
			end: r[t + 1],
			advancePx: void 0
		})), o = 0;
		for (let n of i) {
			let { start: r, end: i } = n;
			if (i <= r) continue;
			let s = t.text.slice(r, i), c = {
				...t,
				text: s,
				punctuationCompressions: nc(t, r, i)
			}, u;
			if (n.advancePx != null) u = mc(c, n.advancePx + Be(t, s), f, a);
			else {
				Ie(Vs(t.bold, t.italic, Pe(t), t.fontFamily, l, t.fontRoute));
				let n = Le(t), r = e.measureText(s).width;
				Re(n), u = mc(c, r + Be(t, s), f, a);
			}
			o += qo(u, j);
		}
		return Math.max(1, o);
	}, Ze = (e, t, n = !1) => qe({
		...e,
		text: t,
		shapedClusters: t === e.text ? e.shapedClusters : void 0
	}, Ye(e, t, n)), Qe = (t) => {
		let n = ze(t, hc(t, f) === "eastAsia"), r = mc(t, n.width + Be(t, t.text), f, a);
		t.snapGridNaturalWidthPx = r;
		let i = t.fontSize * a, o = n, s = Pe(t);
		if (t.smallCaps && !t.vertAlign && s !== i) {
			if (t.textLayoutService && t.textShapeRequest) {
				let e = t.textLayoutService.shape({
					...t.textShapeRequest,
					text: t.text || "X",
					fontSizePt: i,
					measure: !0,
					clusterGeometry: !1
				});
				o = {
					width: e.advancePt,
					actualBoundingBoxAscent: e.ascentPt,
					actualBoundingBoxDescent: e.descentPt,
					fontBoundingBoxAscent: e.ascentPt,
					fontBoundingBoxDescent: e.descentPt
				};
			} else {
				let n = e.font;
				e.font = Vs(t.bold, t.italic, i, t.fontFamily, l, t.fontRoute), o = e.measureText(t.text || "X"), e.font = n;
			}
			s = i;
		}
		let c = Sc(o, t.fontFamily, i, s, (t.metricEastAsian === !0 || ji.test(t.text)) && !t.ruby), u = c.ascent, d = c.descent;
		if (t.positionExtendsLineBox !== !1) {
			let e = (t.position ?? 0) * a;
			e > 0 ? u += e : e < 0 && (d -= e);
		}
		return t.ruby && (!t.textBoxLineFloor || t.textBoxVertical) && (u += Os(t.ruby.fontSizePt, t.ruby.hpsRaisePt, a, t, e, l)), {
			width: r,
			height: t.fontSize,
			ascent: u,
			descent: d
		};
	}, $e = (e) => {
		if (/\s$/u.test(e.text) || e.ruby !== void 0 || e.tateChuYoko === !0 || e.fitTextRegionIndex !== void 0) return;
		let t = R[0];
		if (!t || !("text" in t) || t.joinPrev !== !0 || t.text.length === 0 || [...t.text].some((e) => e !== "　")) return;
		R.shift();
		let n = es(Ic(e.text), t.paragraphFinalIdeographicSpaceCount ?? [...t.text].length);
		if (n === 0) {
			R.unshift(t);
			return;
		}
		let r = t.text.slice(0, n), i = {
			...t,
			...K,
			text: r,
			measuredWidth: 0,
			...q(t, 0, r.length)
		}, a = Qe(i);
		i.measuredWidth = a.width, L(i, a.width, a.height, a.ascent, a.descent);
		let o = t.text.slice(r.length);
		o.length > 0 && R.unshift({
			...t,
			...K,
			text: o,
			measuredWidth: 0,
			joinPrev: void 0,
			hardJoinPrev: void 0,
			...q(t, r.length, t.text.length),
			src: t.src ? {
				segIndex: t.src.segIndex,
				charOffset: t.src.charOffset + r.length
			} : void 0
		});
	}, et = (e) => "isTab" in e ? e.measuredWidth || 0 : "imagePath" in e ? e.widthPt * a : "math" in e ? e.measuredWidth || 0 : "lineBreak" in e ? 0 : Je(e), tt = (e) => {
		for (let t = 0; t < e.length; t += 1) {
			let n = e[t];
			if (!("text" in n)) continue;
			let r = n.text.indexOf(".");
			if (r >= 0) return {
				segmentIndex: t,
				charOffset: r
			};
		}
		let t = null, n = !1;
		for (let r = 0; r < e.length; r += 1) {
			let i = e[r];
			if (!("text" in i)) {
				if (n) return t;
				continue;
			}
			let a = 0;
			for (let e of i.text) if (a += e.length, /\p{Decimal_Number}/u.test(e)) n = !0, t = {
				segmentIndex: r,
				charOffset: a
			};
			else if (n) return t;
		}
		return t;
	}, z = (e) => {
		let t = tt(e);
		if (!t) return;
		let n = 0;
		for (let r = 0; r < t.segmentIndex; r += 1) n += et(e[r]);
		let r = e[t.segmentIndex];
		return "text" in r ? n + Ze(r, r.text.slice(0, t.charOffset)) : n;
	}, nt = () => {
		let e = [], t = 0;
		for (let n of R) {
			if ("isTab" in n || "lineBreak" in n) break;
			e.push(n), t += et(n);
		}
		let n = z(e);
		return n === void 0 ? { totalWidth: t } : {
			totalWidth: t,
			decimalPrefixWidth: n
		};
	}, rt = null;
	be(ye ? c?.paragraphMarkLineStartWidth ?? ve() : ve());
	let it = (t, n, r = !0) => {
		let i = ic(t), o = [
			0,
			...N(t.text),
			t.text.length
		].filter((e, t, n) => n.indexOf(e) === t), s = 0;
		if (n > 0) if (Zs(t, a) >= 0 && hc(t, f) !== "latin") {
			Ie(Vs(t.bold, t.italic, Pe(t), t.fontFamily, l, t.fontRoute));
			let r = Le(t);
			try {
				let r = Lc(e, t.text, n, Xs(t, f, a), dc(t), Zs(t, a), t.verticalRun === !0, x, (e) => Ze(t, e)).length;
				s = o.filter((e) => e <= r && !i.has(e)).at(-1) ?? 0;
			} finally {
				Re(r);
			}
		} else for (let e of o) e <= 0 || i.has(e) || Ne(t, Ye(t, t.text.slice(0, e))) <= n + 1e-9 && (s = e);
		for (s <= 0 && r && (s = o.find((e) => e > 0 && !i.has(e)) ?? t.text.length); t.text.startsWith("　", s);) s += 1;
		return s;
	}, at = (e, t) => {
		if (!(t > 0) || !e.externalLinkBreakOffsets?.length) return 0;
		let n = 0;
		for (let r of e.externalLinkBreakOffsets) r <= 0 || r >= e.text.length || Ne(e, Ye(e, e.text.slice(0, r))) <= t + 1e-9 && (n = r);
		return n;
	}, ot = (e, t) => {
		R.unshift({
			...e,
			...K,
			text: e.text.slice(t),
			...q(e, t, e.text.length),
			seaBreaks: Pc(e.seaBreaks, t),
			measuredWidth: 0,
			joinPrev: void 0,
			hardJoinPrev: void 0,
			src: {
				segIndex: e.src.segIndex,
				charOffset: e.src.charOffset + t
			}
		});
	}, st = (e) => {
		let t = e.text.codePointAt(0), n = k[k.length - 1];
		if (t === void 0 || !d.lineStartForbidden.has(t) || n === void 0 || !("text" in n)) return { kind: "none" };
		let r = n, i = [...r.text], a = b(i, d, k.length > 1 ? 0 : 1);
		if (a <= 0) return { kind: "none" };
		let o = i.slice(0, i.length - a).join(""), s = o.length;
		if (s === 0 && r.hardJoinPrev === !0 || ic(r).has(s)) return { kind: "blocked" };
		let c = r.text.slice(s), l = {
			...r,
			...K,
			text: c,
			...q(r, s, r.text.length),
			measuredWidth: Ze(r, c, !0),
			joinPrev: void 0,
			hardJoinPrev: void 0,
			src: {
				segIndex: r.src.segIndex,
				charOffset: r.src.charOffset + s
			},
			seaBreaks: Pc(r.seaBreaks, s)
		};
		if (o) {
			let e = Ze(r, o);
			A -= r.measuredWidth - e, k[k.length - 1] = {
				...r,
				...K,
				text: o,
				measuredWidth: e,
				...q(r, 0, s)
			};
		} else A -= r.measuredWidth, k.pop();
		return {
			kind: "retracted",
			tail: l
		};
	}, ct = (e, t, n, r) => {
		let i = N(e.text)[0] ?? e.text.length;
		if (i <= 0) return !1;
		let a = e.text.slice(0, i), o = Ye(e, a);
		return L({
			...e,
			...K,
			text: a,
			measuredWidth: o,
			...q(e, 0, i)
		}, o, t, n, r), i < e.text.length && ot(e, i), !0;
	};
	for (; R.length > 0;) {
		let t = R.shift();
		if ("lineBreak" in t) {
			Oe(t.fontSize, !0), rt = t.fontSize;
			continue;
		}
		if (rt = null, "isTab" in t) {
			if (h && !t.ptab) {
				t.measuredWidth = 0, L(t, 0, t.fontSize, t.fontSize * a * .8, t.fontSize * a * .2);
				continue;
			}
			let e = A + (me ? r : 0);
			if (t.ptab) {
				t.resolvedAlignment = t.ptab.alignment;
				let r = t.ptab.relativeTo === "indent" ? 0 : -u, i = t.ptab.relativeTo === "indent" ? n : m, o = t.ptab.alignment === "left" ? r : t.ptab.alignment === "center" ? (r + i) / 2 : i, s = 0;
				for (let e of R) {
					if ("isTab" in e || "lineBreak" in e) break;
					s += et(e);
				}
				let c = t.ptab.alignment === "center" ? .5 : +(t.ptab.alignment === "right"), l = o - e - s * c;
				if (l <= 0) {
					if (k.length > 0) {
						Oe(void 0, !1, t.src), R.unshift(t);
						continue;
					}
					l = 0;
				}
				if (t.measuredWidth = l, L(t, l, t.fontSize, t.fontSize * a * .8, t.fontSize * a * .2), t.ptab.alignment !== "left") for (; R.length > 0;) {
					let e = R[0];
					if ("isTab" in e || "lineBreak" in e) break;
					if (R.shift(), "imagePath" in e) {
						let t = e.widthPt * a;
						e.measuredWidth = t, L(e, t, e.heightPt, e.heightPt * a, 0);
					} else if ("math" in e) L(e, e.measuredWidth || 0, e.fontSize, e.mathAscent || 0, e.mathDescent || 0);
					else {
						let t = ze(e), n = mc(e, t.width + Be(e, e.text), f, a);
						e.measuredWidth = n;
						let r = t.fontBoundingBoxAscent ?? t.actualBoundingBoxAscent ?? e.fontSize * a * .8, i = t.fontBoundingBoxDescent ?? t.actualBoundingBoxDescent ?? e.fontSize * a * .2;
						L(e, n, e.fontSize, r, i);
					}
				}
				continue;
			}
			let i = Mi(e + u, s.map((e) => ({
				pos: e.pos * a,
				alignment: e.alignment,
				leader: e.leader
			})), p * a);
			t.resolvedAlignment = i?.alignment ?? "left";
			let o = i ? i.pos - u : e, c = i ? Wc(i.alignment) : "leading";
			if (i && c !== "leading") {
				let n = o;
				t.leader = i.leader;
				let r = nt(), s = c === "center" ? r.totalWidth / 2 : c === "decimal" ? r.decimalPrefixWidth ?? r.totalWidth : r.totalWidth, l = n - e - s;
				for (l <= 0 && (l = 0), t.measuredWidth = l, L(t, l, t.fontSize, t.fontSize * a * .8, t.fontSize * a * .2); R.length > 0;) {
					let e = R[0];
					if ("isTab" in e || "lineBreak" in e) break;
					if (R.shift(), "imagePath" in e) {
						let t = e.widthPt * a;
						e.measuredWidth = t, L(e, t, e.heightPt, e.heightPt * a, 0);
					} else if ("math" in e) L(e, e.measuredWidth || 0, e.fontSize, e.mathAscent || 0, e.mathDescent || 0);
					else {
						let t = ze(e), n = mc(e, t.width + Be(e, e.text), f, a);
						e.measuredWidth = n;
						let r = t.fontBoundingBoxAscent ?? t.actualBoundingBoxAscent ?? e.fontSize * a * .8, i = t.fontBoundingBoxDescent ?? t.actualBoundingBoxDescent ?? e.fontSize * a * .2;
						L(e, n, e.fontSize, r, i);
					}
				}
				continue;
			}
			let l = o - e;
			if (i && (t.leader = i.leader), l <= 0) {
				Oe(void 0, !1, t.src), R.unshift(t);
				continue;
			}
			if (A + l > xe() && k.length > 0) {
				Oe(void 0, !1, t.src), R.unshift(t);
				continue;
			}
			t.measuredWidth = l, L(t, l, t.fontSize, t.fontSize * a * .8, t.fontSize * a * .2);
			continue;
		}
		if ("imagePath" in t) {
			if (t.anchor) {
				t.measuredWidth = 0;
				continue;
			}
			let e = t.widthPt * a, n = t.heightPt, r = t.heightPt * a;
			t.measuredWidth = e, k.length > 0 && A + e > xe() && Oe(void 0, !1, t.src), L(t, e, n, r, 0);
			continue;
		}
		if ("math" in t) {
			let n = t.mathMetadata;
			if (!n || n.available === !1) {
				let n = t.fontSize * a;
				Ie(Vs(!1, !1, n, null, l));
				let r = e.measureText(t.fallbackText), i = r.width, o = r.fontBoundingBoxAscent ?? r.actualBoundingBoxAscent ?? n * .8, s = r.fontBoundingBoxDescent ?? r.actualBoundingBoxDescent ?? n * .2;
				t.measuredWidth = i, t.mathAscent = o, t.mathDescent = s, k.length > 0 && A + i > xe() && Oe(void 0, !1, t.src), L(t, i, t.fontSize, Math.max(o, n * .8), Math.max(s, n * .2));
				continue;
			}
			let r = t.fontSize * a, i = n.widthEm * r, o = n.ascentEm * r, s = n.descentEm * r;
			t.measuredWidth = i, t.mathAscent = o, t.mathDescent = s;
			let c = Math.max(o, r * .8), u = Math.max(s, r * .2);
			k.length > 0 && A + i > xe() && Oe(void 0, !1, t.src), L(t, i, t.fontSize, c, u);
			continue;
		}
		let c = t, v = Qe(c), y = v.width, b = Ne(c, y), C = v.height, T = v.ascent, E = v.descent, D = c.paragraphFinalIdeographicSpaceTail === !0, O = c.paragraphFinalIdeographicSpaceCount ?? 0, j = c.paragraphFinalIdeographicSpaceLocalCount ?? 0, P = D ? c.text.slice(0, Math.max(0, c.text.length - j)) : c.text;
		if (D && O > 1 && P.length > 0) {
			let e = {
				...c,
				...K,
				text: P,
				paragraphFinalIdeographicSpaceTail: void 0,
				paragraphFinalIdeographicSpaceLocalCount: void 0,
				paragraphFinalIdeographicSpaceCount: void 0,
				paragraphFinalIdeographicSpaceTailStart: void 0,
				measuredWidth: 0,
				...q(c, 0, P.length)
			}, t = {
				...c,
				...K,
				text: c.text.slice(P.length),
				paragraphFinalIdeographicSpaceLocalCount: j,
				joinPrev: void 0,
				hardJoinPrev: void 0,
				paragraphFinalIdeographicSpaceTailStart: !0,
				measuredWidth: 0,
				...q(c, P.length, c.text.length),
				src: c.src ? {
					segIndex: c.src.segIndex,
					charOffset: c.src.charOffset + P.length
				} : void 0
			};
			R.unshift(t), R.unshift(e);
			continue;
		}
		if (D && /^\u3000+$/u.test(c.text) && c.paragraphFinalIdeographicSpaceTailStart === !0 && k.some((e) => "text" in e && /[^\u3000]/u.test(e.text))) {
			let e = y;
			for (let t of R) {
				if (!("text" in t) || t.paragraphFinalIdeographicSpaceTail !== !0) break;
				e += Je(t);
			}
			if (A + e > xe()) {
				Oe(void 0, !1, c.src), R.unshift(c);
				continue;
			}
		}
		if (c.fitTextRegionIndex !== void 0) {
			if (c.fitTextRegionStart) {
				let e = y;
				for (let t of R) {
					if (!("text" in t) || t.fitTextRegionIndex !== c.fitTextRegionIndex) break;
					e += Je(t);
				}
				k.length > 0 && A + e > xe() && Oe(void 0, !1, c.src);
			}
			c.measuredWidth = y, L(c, y, C, T, E);
			continue;
		}
		let F = c.text.replace(/ +$/, ""), I = hc(c, f) ? 0 : c.text.endsWith(" ") ? y - Ze(c, F) : 0, ne = (e) => {
			let t = e === void 0 || "lineBreak" in e;
			return g && (!t || _);
		}, re = (e, t, r) => ls({
			widthPx: e,
			trailingSpacePx: t,
			lineWillJustify: ne(r),
			wrapNarrowed: he !== n || ge !== 0
		}), ie = re(b, I, R[0]), oe = c.seaBreaks !== void 0 && M(c.text), se = /* @__PURE__ */ new Set();
		je(se, c, F);
		let ce = (e, t, n) => ne(e) ? us({
			biasBudgetPx: t,
			resolvedMeasurementRouteCount: Me(n)
		}) : De || oe ? 0 : ee * Hc;
		if (!c.joinPrev && k.length > 0 && R[0]?.joinPrev && (R[0]?.hardJoinPrev === !0 || !Ac(c.text)) && (R[0]?.hardJoinPrev === !0 || !(c.seaBreaks && c.seaBreaks.length > 0))) {
			let e = y, t = I, n = 0, r = te, a = new Set(se), o = c, s = c.text, l = (e, t = e.text) => {
				r += ke(o, s), o = e, s = t;
			};
			for (; n < R.length && R[n].joinPrev; n++) {
				let r = R[n], o = oc(r);
				if (o !== void 0) {
					let n = r.text.slice(0, o), i = Ze(r, n);
					if (e += i, l(r, n), je(a, r, n), t = n.endsWith(" ") ? i - Ze(r, n.replace(/ +$/, "")) : 0, o < r.text.length) break;
					continue;
				}
				let s = r.externalLinkBreakOffsets?.[0];
				if (s !== void 0) {
					let n = r.text.slice(0, s), i = Ze(r, n);
					e += i, l(r, n), je(a, r, n), t = 0;
					break;
				}
				if (Ac(r.text)) {
					let n = [...r.text], o = 0;
					for (; o < n.length && i.lineStartForbidden.has(n[o].codePointAt(0));) o++;
					if (o < n.length) {
						let i = n.slice(0, o).join(""), s = Ze(r, i);
						e += s, i.length > 0 && (l(r, i), je(a, r, i)), t = 0;
						break;
					}
				}
				let c = Je(r);
				e += c, l(r), je(a, r);
				let u = r.text.replace(/ +$/, ""), d = r.text.endsWith(" ") ? c - Ze(r, u) : 0;
				t = u.length === 0 && t > 0 ? t + d : d;
			}
			r += ke(o, s.replace(/ +$/, "")), A + re(e, t, R[n]) > xe() + ce(R[n], r, a) && Oe(void 0, !1, c.src);
		}
		if (oe && k.length > 0 && (() => {
			let e = k[k.length - 1];
			return !("text" in e) || e.text.endsWith(" ");
		})()) {
			let e = y, t = I, n = 0, r = te + ke(c, F), i = new Set(se);
			if (!c.text.endsWith(" ")) for (; n < R.length; n++) {
				let a = R[n];
				if (!("text" in a) || a.seaBreaks === void 0 || !M(a.text)) break;
				let o = a, s = Je(o), c = o.text.replace(/ +$/, "");
				if (e += s, t = o.text.endsWith(" ") ? s - Ze(o, c) : 0, r += ke(o, c), je(i, o, c), o.text.endsWith(" ")) {
					n++;
					break;
				}
			}
			let a = re(e, t, R[n]);
			A + a > xe() + ce(R[n], r, i) && a <= he && Oe(void 0, !1, c.src);
		}
		let le = ce(R[0], te + ke(c, F), se), ue = [...F], de = ue.at(-1), fe = ue.slice(0, -1).join(""), pe = S && de !== void 0 && (k.length > 0 || fe.length > 0) && cs(de, c.eastAsiaLanguage, c.overflowPunctuationEastAsianRun === !0, c.script === "ascii" || c.script === "highAnsi", c.script === "complexScript", c.overflowPunctuationBidiLanguage) && A + Ze(c, fe) <= xe() + le;
		if (A + ie <= xe() + le) c.measuredWidth = y, L(c, y, C, T, E, I), $e(c);
		else if (pe) c.measuredWidth = y, L(c, y, C, T, E, I), $e(c);
		else if (Ac(c.text) && c.seaBreaks === void 0 && c.hardJoinPrev !== !0) {
			let t = xe() - A, n = "", r = D ? es(Ic(c.text), c.paragraphFinalIdeographicSpaceCount ?? 0) : Infinity;
			if (t > 0) if (Zs(c, a) < 0 || hc(c, f) === "latin") n = c.text.slice(0, it(c, t, !1));
			else {
				Ie(Vs(c.bold, c.italic, Pe(c), c.fontFamily, l, c.fontRoute));
				let i = Le(c);
				try {
					n = Lc(e, c.text, t, Xs(c, f, a), dc(c), Zs(c, a), c.verticalRun === !0, x, (e) => Ze(c, e), r);
				} finally {
					Re(i);
				}
			}
			let i = [...c.text], s = [...n].length, u = k.length > 0 ? 0 : 1, p = Fc(i, (S && s < i.length && (k.length > 0 || s > 0) && cs(i[s], c.eastAsiaLanguage, c.overflowPunctuationEastAsianRun === !0, c.script === "ascii" || c.script === "highAnsi", c.script === "complexScript", c.overflowPunctuationBidiLanguage) ? s + 1 : null) ?? o(i, s, d, u), D && r === 0 ? 0 : r), m = i.slice(0, p).join("").length, h = ac(c, m, +(u > 0)), g = c.text.slice(0, h);
			if (g.length > 0) {
				let e = Ye(c, g);
				L({
					...c,
					...K,
					text: g,
					measuredWidth: e,
					...q(c, 0, g.length)
				}, e, C, T, E);
				let t = c.text.slice(g.length);
				t ? R.unshift({
					...c,
					...K,
					text: t,
					...q(c, g.length, c.text.length),
					measuredWidth: 0,
					src: {
						segIndex: c.src.segIndex,
						charOffset: c.src.charOffset + g.length
					}
				}) : $e(c);
			} else if (k.length > 0) {
				let e = st(c);
				if (e.kind === "blocked") {
					ct(c, C, T, E);
					continue;
				}
				Oe(void 0, !1, e.kind === "retracted" ? e.tail.src : c.src), R.unshift(c), e.kind === "retracted" && R.unshift(e.tail);
			} else {
				let e = [...c.text], t = e.length > 0 ? Fc(e, 1, c.paragraphFinalIdeographicSpaceTail === !0 ? es(ji.test(e[0] ?? ""), c.paragraphFinalIdeographicSpaceCount ?? 0) : Infinity) : 0, n = e.slice(0, t).join("").length, r = ac(c, n) || it(c, xe(), !0), i = c.text.slice(0, r);
				if (i) {
					let e = Ye(c, i);
					L({
						...c,
						...K,
						text: i,
						measuredWidth: e,
						...q(c, 0, i.length)
					}, e, C, T, E);
					let t = c.text.slice(i.length);
					t ? R.unshift({
						...c,
						...K,
						text: t,
						...q(c, i.length, c.text.length),
						measuredWidth: 0,
						src: {
							segIndex: c.src.segIndex,
							charOffset: c.src.charOffset + i.length
						}
					}) : $e(c);
				}
			}
		} else if (c.seaBreaks !== void 0 && c.hardJoinPrev !== !0) {
			let e = xe() - A, t = (e) => Ze(c, e), n = w(c.text) && Zs(c, a) >= 0 && hc(c, f) !== "latin", r = ae(c.text, c.seaBreaks, 0, e, t, n);
			if (r > 0) {
				let e = c.text.slice(0, r), t = Ye(c, e);
				L({
					...c,
					...K,
					text: e,
					measuredWidth: t,
					...q(c, 0, e.length)
				}, t, C, T, E);
				let n = c.text.slice(r);
				n && R.unshift({
					...c,
					...K,
					text: n,
					...q(c, r, c.text.length),
					measuredWidth: 0,
					src: {
						segIndex: c.src.segIndex,
						charOffset: c.src.charOffset + r
					},
					seaBreaks: Pc(c.seaBreaks, r)
				});
			} else if (k.length > 0) {
				let e = st(c);
				if (e.kind === "blocked") {
					ct(c, C, T, E);
					continue;
				}
				Oe(void 0, !1, e.kind === "retracted" ? e.tail.src : c.src), R.unshift(c), e.kind === "retracted" && R.unshift(e.tail);
			} else {
				let r = c.seaBreaks[0] ?? c.text.length, i = c.text.slice(0, r), a = N(i), o = ae(i, a, 0, e, t, n);
				o <= 0 && (o = a.length > 0 ? a[0] : i.length), o = ac(c, o) || it(c, e, !0);
				let s = c.text.slice(0, o), l = Ye(c, s);
				L({
					...c,
					...K,
					text: s,
					measuredWidth: l,
					...q(c, 0, s.length)
				}, l, C, T, E);
				let u = c.text.slice(o);
				u && R.unshift({
					...c,
					...K,
					text: u,
					...q(c, o, c.text.length),
					measuredWidth: 0,
					src: {
						segIndex: c.src.segIndex,
						charOffset: c.src.charOffset + o
					},
					seaBreaks: Pc(c.seaBreaks, o)
				});
			}
		} else if (k.length === 0) {
			let e = at(c, xe()) || it(c, xe());
			if (e >= c.text.length) c.measuredWidth = y, L(c, y, C, T, E);
			else {
				let t = c.text.slice(0, e), n = Ye(c, t);
				L({
					...c,
					...K,
					text: t,
					measuredWidth: n,
					...q(c, 0, t.length)
				}, n, C, T, E), ot(c, e);
			}
		} else {
			let e = at(c, xe() + le - A);
			if (e > 0 && e < c.text.length) {
				let t = c.text.slice(0, e), n = Ye(c, t);
				L({
					...c,
					...K,
					text: t,
					measuredWidth: n,
					...q(c, 0, t.length)
				}, n, C, T, E), ot(c, e);
				continue;
			}
			if (c.joinPrev) {
				let e = xe() - A, t = it(c, e, !0);
				if ((e > 0 || c.hardJoinPrev === !0) && t > 0 && t < c.text.length) {
					let e = c.text.slice(0, t), n = Ye(c, e);
					L({
						...c,
						...K,
						text: e,
						measuredWidth: n,
						...q(c, 0, e.length)
					}, n, C, T, E), ot(c, t);
					continue;
				}
				c.measuredWidth = y, L(c, y, C, T, E, I);
				continue;
			}
			Oe(void 0, !1, c.src), R.unshift(c);
		}
	}
	if (k.length > 0 ? Oe() : rt !== null && Oe(rt), y === "bounded") for (let e of O) for (let t of e.segments) !("text" in t) || t.metricOnly || t.text.length === 0 || (t.shapedClusters = void 0, t.textLayoutService && t.textShapeRequest && ze(t, !0));
	return O;
}
//#endregion
//#region packages/docx/src/bidi-line.ts
var Yc = (e) => {
	let t = e.text;
	return typeof t == "string" ? t : void 0;
}, Xc = (e) => e.rtl === !0, Zc = (e) => e.digitsAsAN === !0, Qc = (e) => "isTab" in e;
function $c(e) {
	for (let n of e) {
		if (Xc(n)) return !0;
		let e = Yc(n);
		if (e !== void 0 && t(e)) return !0;
	}
	return !1;
}
function el(e, t) {
	let n = e.length;
	if (n === 0) return {
		order: [],
		rtl: []
	};
	let r = "", i = Array(n), a = Array(n), o, s = () => {
		for (o ||= []; o.length < r.length;) o.push(null);
		return o;
	};
	for (let t = 0; t < n; t++) {
		let n = Yc(e[t]) ?? "";
		if (i[t] = r.length, r += n.length > 0 ? n : "￼", a[t] = r.length, Qc(e[t])) s()[i[t]] = "S";
		else if (n.length > 0 && (Zc(e[t]) || Xc(e[t]))) {
			let n = s(), o = Zc(e[t]), c = Xc(e[t]);
			for (let e = i[t]; e < a[t]; e++) {
				let t = r.charCodeAt(e);
				o && t >= 48 && t <= 57 ? n[e] = "AN" : c && Ts(r[e]) && (n[e] = "R");
			}
		}
	}
	if (o) for (; o.length < r.length;) o.push(null);
	let { levels: c, paragraphLevel: l } = I().computeLevels(r, t ? "rtl" : "ltr", o), u = Array(n), d = Array(n);
	for (let e = 0; e < n; e++) {
		let t = a[e];
		for (; t > i[e] && r[t - 1] === " ";) t--;
		let n = !1;
		for (let r = i[e]; r < t; r++) {
			let e = c[r];
			if (e !== 255 && (e & 1) == 1) {
				n = !0;
				break;
			}
		}
		u[e] = n, d[e] = i[e];
		for (let r = i[e]; r < t; r++) {
			let t = c[r];
			if (t !== 255 && (t & 1) == 1 === n) {
				d[e] = r;
				break;
			}
		}
	}
	let { order: f } = ne(c, l, d);
	return {
		order: f,
		rtl: u
	};
}
function tl(e, t) {
	switch (e) {
		case "center": return "center";
		case "both":
		case "justify":
		case "distribute":
		case "lowKashida":
		case "mediumKashida":
		case "highKashida":
		case "thaiDistribute": return "justify";
		case "end":
		case "right": return t ? "left" : "right";
		case "start":
		case "left":
		case void 0:
		default: return t ? "right" : "left";
	}
}
function nl(e) {
	switch (e) {
		case "both":
		case "justify":
		case "distribute":
		case "lowKashida":
		case "mediumKashida":
		case "highKashida":
		case "thaiDistribute": return !0;
		default: return !1;
	}
}
function rl(e) {
	return e === "distribute";
}
//#endregion
//#region packages/docx/src/layout/float-wrap-oracle.ts
function il(e, t) {
	let n = e.map((e) => Object.freeze({ ...e })), r = go(n);
	return {
		lineWindow: ({ topYPt: e, minimumStartWidthPt: n, squareMinimumStartWidthPt: i, probeHeightPt: a, paragraphXPt: o, maximumWidthPt: s, columnXPt: c, columnWidthPt: l }) => {
			let u = Po(e, n, a, o, s, r, c, c + l, t ?? {
				xLeftPt: o,
				xRightPt: o + s,
				readingDirection: "ltr"
			}, i ?? n);
			return {
				topYPt: u.topY,
				xOffsetPt: u.xOffset,
				maximumWidthPt: u.maxWidth
			};
		},
		skipTopAndBottomBands: ({ yPt: e, columnXPt: t, columnWidthPt: r }) => Fo(e, n, t, t + r)
	};
}
//#endregion
//#region packages/docx/src/paragraph-measure.ts
function al(e) {
	if (e.characterGrid.active) return {
		type: e.characterGrid.kind,
		linePitchPt: null,
		characterPitchPt: e.characterGrid.pitchPt,
		charSpacePt: e.characterGrid.deltaPt
	};
}
function ol(e) {
	let t = al(e);
	return {
		type: t ? t.type : e.lineGrid.active ? "lines" : null,
		linePitchPt: e.lineGrid.active ? e.lineGrid.pitchPt : null,
		characterPitchPt: e.characterGrid.active ? e.characterGrid.pitchPt : null,
		charSpacePt: e.characterGrid.active ? e.characterGrid.deltaPt : null
	};
}
function sl(e, t) {
	if (!_c(t)) return e;
	let n = t.linePitchPt;
	return n <= 0 ? e : e <= n ? n : Math.ceil(e / n) * n;
}
function cl(e, t, n, r, i, a) {
	let o = ol(t), s = du(t, n.availableWidthPt), c = Math.max(1, n.availableWidthPt - t.physicalIndentLeftPt - t.physicalIndentRightPt - s), l = n.paragraphXPt + t.physicalIndentLeftPt, u = t.spaceBeforePt, d = t.spaceAfterPt, f = Object.freeze({ ...n }), p = r.fontFamilyClasses, m = i.documentHasEastAsianText === !0 || i.useFeLayout === !0, h = n.startYPt + (n.suppressSpaceBefore ? 0 : u);
	n.wrap && (h = n.wrap.skipTopAndBottomBands({
		yPt: h,
		columnXPt: n.paragraphXPt,
		columnWidthPt: n.availableWidthPt
	}));
	let g = () => {
		let a = h, s = wc(e, 1, o, t.hasRuby, m, r.context, p, t.lineSpacing, i.resolvedLocalFonts, i.layoutServices?.text, i.paragraphMarkShapeInput, i.useFeLayout === !0);
		return n.wrap && (a = n.wrap.lineWindow({
			topYPt: a,
			minimumStartWidthPt: Ws(e),
			squareMinimumStartWidthPt: Ba(Ws(e), 1),
			probeHeightPt: s,
			paragraphXPt: l,
			maximumWidthPt: c,
			columnXPt: n.paragraphXPt,
			columnWidthPt: n.availableWidthPt
		}).topYPt), {
			lines: [],
			markOnly: !0,
			requestedSpaceBeforePt: u,
			requestedSpaceAfterPt: d,
			uniformRubyAdvancePt: 0,
			contentStartYPt: a,
			contentEndYPt: a + s,
			lastLineBelowBaselinePt: Ec(e, o, t.hasRuby, m, r.context, p, t.lineSpacing, i.resolvedLocalFonts, i.layoutServices?.text, i.paragraphMarkShapeInput, i.useFeLayout === !0),
			placement: f
		};
	}, _ = qc(e.runs, i);
	if (_.length === 0) return g();
	let v = n.wrap ? {
		startPageY: h,
		paraX: l,
		columnXPt: n.paragraphXPt,
		columnWidthPt: n.availableWidthPt,
		floats: [],
		paragraphMarkLineStartWidth: Ba(Ws(e), 1),
		lineWindow: (e) => n.wrap.lineWindow(e),
		lineBoxH: (e, n, r, i, a, s) => bc(t.lineSpacing, e, n, 1, o, t.hasRuby, i ?? 0, t.hasRuby ? t.hasEastAsianText : a ?? !1, s),
		pageH: n.maximumYPt
	} : void 0, y = Jc(r.context, _, c, a ? 0 : t.firstIndentPt, 1, [...t.tabStops], v, p, t.physicalIndentLeftPt, t.kinsoku, o, t.defaultTabPt, c + t.physicalIndentRightPt + s, t.baseRtl, t.isJustified, t.stretchLastLine, a?.boundary, void 0, i.verticalGlyphMeasurement, t.overflowPunct !== !1);
	if (y.length === 0) return g();
	let b = t.hasRuby ? sl(Math.max(0, ...y.map((e) => bc(t.lineSpacing, e.ascent, e.descent, 1, o, !0, e.intendedSingle, t.hasEastAsianText))), o) : 0;
	t.hasRuby && a?.uniformRubyAdvancePt !== void 0 && (b = Math.max(b, a.uniformRubyAdvancePt));
	let x = [];
	for (let e of y) {
		let n = e.topY !== void 0 && e.topY > h ? e.topY : h, r = t.hasRuby ? b : bc(t.lineSpacing, e.ascent, e.descent, 1, o, !1, e.intendedSingle, e.eastAsian ?? !1, e.gridCountSingle);
		x.push({
			layout: e,
			topYPt: n,
			advancePt: r
		}), h = n + r;
	}
	let S = x[x.length - 1];
	return {
		lines: x,
		markOnly: !1,
		requestedSpaceBeforePt: u,
		requestedSpaceAfterPt: d,
		uniformRubyAdvancePt: b,
		contentStartYPt: x[0].topYPt,
		contentEndYPt: h,
		lastLineBelowBaselinePt: Tc(S.advancePt, S.layout.ascent, S.layout.descent),
		placement: f
	};
}
//#endregion
//#region packages/docx/src/layout/numbering-marker.ts
function ll(e) {
	let t = e.leadingIndentPt + e.authoredFirstIndentPt + e.markerShiftPt;
	return {
		startPt: t,
		endPt: t + e.markerWidthPt
	};
}
function ul(e) {
	let t = e.authoredFirstIndentPt + e.markerShiftPt;
	return e.baseRtl ? e.alignedLeadingEdgePt - t - e.markerWidthPt : e.alignedLeadingEdgePt + t;
}
function dl(e, t) {
	let { numbering: n, markerInput: r, service: i } = t, a = n != null && (n.text !== "" || n.picBulletImagePath != null) && (!e.baseRtl || (n?.suff || "tab") === "tab" && t.authoredFirstIndentPt < 0);
	if (!n || !r || !i || !a) return e;
	let o = ml(n, r, {
		authoredFirstIndentPt: t.authoredFirstIndentPt,
		physicalIndentLeftPt: e.physicalIndentLeftPt,
		tabStops: t.tabStops,
		defaultTabPt: t.defaultTabPt ?? e.defaultTabPt
	}, i, t.clusterGeometry ?? !0);
	return {
		...e,
		firstIndentPt: o.bodyOffsetPt,
		numberingMarkerGeometry: o
	};
}
function fl(e, t, n, r, i = !0) {
	return r ? {
		shape: r.shape({
			text: t,
			fontSizePt: e.fontSizePt * n,
			fonts: e.fonts,
			themeFonts: e.themeFonts,
			themeFontPresence: e.themeFontPresence,
			weight: e.weight,
			style: e.style,
			complexScript: e.complexScript,
			fontHint: e.fontHint,
			eastAsiaLanguage: e.eastAsiaLanguage,
			kerning: e.kerning,
			measure: !0,
			clusterGeometry: i
		}),
		fontSizePx: e.fontSizePt * n
	} : null;
}
function pl(e, t, n) {
	return t.find((t) => ds(e, t)) ?? Mi(e, [...t], n);
}
function ml(e, t, n, r, i = !0) {
	let a = e.picBulletImagePath ? "" : Me(e.text, e.fontFamily ?? null), o = a ? fl(t, a, 1, r, i)?.shape ?? null : null, s = e.picBulletImagePath ? e.picBulletWidthPt ?? t.fontSizePt : o?.advancePt ?? 0, c = e.jc === "right" ? -s : e.jc === "center" ? -s / 2 : 0, l = n.authoredFirstIndentPt + c + s, u = e.suff || "tab", d = l;
	if (u === "space") d += fl(t, " ", 1, r, i)?.shape.advancePt ?? 0;
	else if (u === "tab" && (d = 0, l > 0)) {
		let e = pl(n.physicalIndentLeftPt + l, n.tabStops, n.defaultTabPt);
		d = e ? e.pos - n.physicalIndentLeftPt : l;
	}
	return d = Math.max(0, d), {
		bodyOffsetPt: d,
		markerText: a,
		markerWidthPt: s,
		markerShiftPt: c,
		shape: o
	};
}
U({
	id: "word-autofit-empty-paragraph-content-width",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "autofit-empty-paragraph-boundary-matrix",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "For table AutoFit content width, Word gives an empty unnumbered paragraph no intrinsic content width regardless of effective right, left, first-line, or hanging indentation. Cell margins still contribute, while whitespace, non-breaking space, visible text, and numbering remain content-bearing controls."
});
function hl(e) {
	return e.runs.length === 0 && e.numbering == null;
}
U({
	id: "word-exact-row-height-bottom-padding",
	evidence: {
		kind: "microsoft-note",
		reference: "[MS-OI29500] §2.1.180(d)"
	},
	description: "Word adds the largest bottom cell margin to an exact trHeight instead of treating that margin as part of the authored height."
}), U({
	id: "word-table-border-layer-cascade",
	evidence: {
		kind: "microsoft-note",
		reference: "[MS-OI29500] §2.1.169"
	},
	description: "During per-side border acquisition, none falls through to a lower-precedence layer while nil remains authored and blocks fallback only on that side."
}), U({
	id: "word-spaced-cell-inside-border-conflict",
	evidence: {
		kind: "microsoft-note",
		reference: "[MS-OI29500] §§2.1.136, 2.1.138"
	},
	description: "With non-zero cell spacing, Word retains the narrow conditional tcBorders insideH/insideV conflict against the corresponding table inside border."
}), U({
	id: "word-table-indent-all-alignments",
	evidence: {
		kind: "microsoft-note",
		reference: "[MS-OI29500] §2.1.155"
	},
	description: "Word applies tblInd as a signed leading-edge translation for every table alignment, reversing the translation for bidi visual order."
}), U({
	id: "word-exact-row-vertical-clip-only",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/layout/table.test.ts#clips an overflowing merged owner when every row in its span is exact"
	},
	description: "Preserve the established exact-row overflow behavior that clips the owned vertical interval without clipping nested table ink horizontally to the cell box."
}), U({
	id: "word-over-page-cant-split-clip",
	evidence: {
		kind: "microsoft-note",
		reference: "[MS-OI29500] §2.1.120"
	},
	description: "Word starts an over-page cantSplit row on a fresh page and clips its overflow instead of synthesizing a row continuation."
}), U({
	id: "word-parallel-paragraph-row-cut",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "parallel-paragraph-row-cut-boundary-matrix",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "When a page cut crosses a row containing parallel paragraph content, Word emits no cell content unless every unfinished paragraph cell can reach at least its first legal line or block boundary in that page band. The observed rule does not cover nested-table child boundaries."
}), U({
	id: "word-positioned-table-adjacency-exclusion",
	evidence: {
		kind: "microsoft-note",
		reference: "[MS-OI29500] §2.1.149(a)"
	},
	description: "Word excludes effectively positioned tables from the logical adjacent-table sequence before retained layout consumes the parser-owned sequence identity."
}), U({
	id: "word-table-border-weight-precedence",
	evidence: {
		kind: "microsoft-note",
		reference: "[MS-OI29500] §2.1.169"
	},
	description: "Use the documented Word border numbers for shared-cell conflict weight and force dotted and dashed borders to a complete weight of one."
}), U({
	id: "word-omitted-row-height-rule-at-least",
	evidence: {
		kind: "microsoft-note",
		reference: "[MS-OI29500] §2.1.180"
	},
	description: "Treat an omitted trHeight hRule as atLeast while retaining an explicitly authored auto rule as authored input."
}), U({
	id: "word-authored-auto-row-height-floor",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/table-row-height.test.ts#auto with @val — @val is honored as a lower bound"
	},
	description: "Preserve the established legacy-model behavior that an auto row with an authored height value uses that value as a lower bound."
}), U({
	id: "word-collapsed-border-row-track-footprint",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "collapsed-border-row-track-matrix",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "For automatic and at-least table rows with collapsed cell boundaries, Word includes half of the winning top and bottom rule widths in each row track. Exact rows retain their authored complete height, and cell spacing keeps independent edges out of the collapsed footprint."
}), U({
	id: "word-effective-floating-table-positioning",
	evidence: {
		kind: "microsoft-note",
		reference: "[MS-OI29500] §2.1.162"
	},
	description: "Use parser-retained effective positioning status rather than lexical tblpPr presence to decide whether a table leaves ordinary flow."
}), U({
	id: "word-table-cell-spacing-scope-shadow",
	evidence: {
		kind: "microsoft-note",
		reference: "[MS-OI29500] §§2.1.152, 2.1.153, 2.1.154"
	},
	description: "At each table-cell-spacing precedence scope, pct, auto, and nil resolve to zero and shadow lower scopes instead of being treated as absent."
}), U({
	id: "word-table-margin-scope-shadow",
	evidence: {
		kind: "microsoft-note",
		reference: "[MS-OI29500] §§2.1.116, 2.1.125, 2.1.146, 2.1.177"
	},
	description: "Preserve the documented scope-specific treatment of non-dxa table cell margins: leading/trailing defaults may resolve to zero while cell/exception and nil top/bottom values remain ignored."
}), U({
	id: "word-first-row-table-exception-scope",
	evidence: {
		kind: "microsoft-note",
		reference: "[MS-OI29500] §§2.1.156, 2.1.158, 2.1.167"
	},
	description: "Apply the supported first-row table-property exception facts at table scope, including authored preferred-width shadowing."
}), U({
	id: "word-trailing-structural-cell-marker",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/layout/compatibility.test.ts#drops only an empty trailing paragraph after a non-paragraph cell block"
	},
	description: "Exclude the required empty trailing cell paragraph from row-height and vertical-alignment measurements when it follows a visible non-paragraph block."
}), U({
	id: "word-cell-vertical-alignment-ink-block",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/cell-valign-leading-spacing.test.ts#inked block is vertically centred in the cell (midpoint = cell midpoint)"
	},
	description: "Center or bottom-align the visible cell ink block without charging the first paragraph spaceBefore or final paragraph spaceAfter at the cell edges."
}), U({
	id: "word-vertical-merge-terminal-border",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/cell-border-conflict-render.test.ts#uses the final continuation cell border at the bottom of a vertical merge"
	},
	description: "Resolve the bottom edge of a vertically merged cell from its terminal continuation cell before applying shared-edge conflict rules."
}), U({
	id: "word-vertical-section-upright-block-table",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/vertical-table-upright.test.ts#the table advances the flow by its PHYSICAL WIDTH; body text stays vertical"
	},
	description: "Paint a block table in an upright physical frame within a vertical section and charge its physical width as the body-flow advance."
});
function gl(e, t) {
	return Math.max(0, e ?? 0) + Math.max(0, ...t);
}
function _l(e, t) {
	return (Math.max(0, e) + Math.max(0, t)) / 2;
}
function vl(e) {
	return e != null && e !== "none";
}
function yl(e, t, n) {
	return n ? e - t : e + t;
}
function bl(e) {
	return e.spacingPt > 0 && !vl(e.directStyle) && vl(e.conditionalInsideStyle);
}
function xl(e, t) {
	let n = Math.min(e.xPt, t.xPt), r = Math.max(e.xPt + e.widthPt, t.xPt + t.widthPt);
	return Object.freeze({
		xPt: n,
		yPt: e.yPt,
		widthPt: r - n,
		heightPt: e.heightPt
	});
}
function Sl(e) {
	return e.compatibility === "word" && e.availableHeightPt + e.epsilonPt >= e.freshPageHeightPt;
}
function Cl(e) {
	return e.compatibility === "word" && e.hasUnfinishedParagraphWithoutProgress;
}
var wl = Object.freeze([
	"single",
	"thick",
	"double",
	"dotted",
	"dashed",
	"dotDash",
	"dotDotDash",
	"triple",
	"thinThickSmallGap",
	"thickThinSmallGap",
	"thinThickThinSmallGap",
	"thinThickMediumGap",
	"thickThinMediumGap",
	"thinThickThinMediumGap",
	"thinThickLargeGap",
	"thickThinLargeGap",
	"thinThickThinLargeGap",
	"wave",
	"doubleWave",
	"dashSmallGap",
	"dashDotStroked",
	"threeDEmboss",
	"threeDEngrave",
	"outset",
	"inset"
]), Tl = Object.freeze({
	single: 1,
	thick: 2,
	double: 3,
	dotDash: 8,
	dotDotDash: 9,
	triple: 10,
	thinThickSmallGap: 11,
	thickThinSmallGap: 12,
	thinThickThinSmallGap: 13,
	thinThickMediumGap: 14,
	thickThinMediumGap: 15,
	thinThickThinMediumGap: 16,
	thinThickLargeGap: 17,
	thickThinLargeGap: 18,
	thinThickThinLargeGap: 19,
	wave: 20,
	doubleWave: 21,
	dashSmallGap: 22,
	dashDotStroked: 23,
	threeDEmboss: 24,
	threeDEngrave: 25,
	outset: 26,
	inset: 27
});
function El(e, t) {
	return e === "dotted" || e === "dashed" ? 1 : Math.max(0, t) * 8 * (Tl[e] ?? 0);
}
function Dl(e, t) {
	return t ? e : "atLeast";
}
function Ol(e, t) {
	return e === "pct" || e === "auto" || e === "nil" ? 0 : t;
}
function kl(e) {
	return e.kind === "dxa" ? e.dxaValuePt : e.scope === "cell" || e.scope === "exception" ? null : (e.edge === "start" || e.edge === "end") && (e.kind === "pct" || e.kind === "auto" || e.kind === "nil") ? 0 : null;
}
//#endregion
//#region packages/docx/src/layout/intrinsic-width.ts
function Al(e, t, n) {
	let r = 0, i = 0;
	for (let t of e.content) {
		let e = t.type === "paragraph" && hl(t), a = t.type === "paragraph" ? e ? {
			minWidthPt: 0,
			maxWidthPt: 0
		} : n.paragraph(t) : n.nestedTable(t);
		r = Math.max(r, a.minWidthPt), i = Math.max(i, a.maxWidthPt);
	}
	let a = Math.max(0, t.left) + Math.max(0, t.right);
	return {
		minWidthPt: r + a,
		maxWidthPt: Math.max(r, i) + a
	};
}
function jl(e) {
	let t = e.textShapeRequest, n = (e) => e ? [
		e.ascii ?? null,
		e.highAnsi ?? null,
		e.eastAsia ?? null,
		e.complexScript ?? null
	] : null;
	return rt("paragraph-intrinsic-text", [
		e.textLayoutService?.fingerprint ?? null,
		t ? [
			n(t.fonts),
			n(t.themeFonts),
			t.themeFontPresence ? [
				t.themeFontPresence.ascii ?? !1,
				t.themeFontPresence.highAnsi ?? !1,
				t.themeFontPresence.eastAsia ?? !1,
				t.themeFontPresence.complexScript ?? !1
			] : null,
			t.fontHint ?? null,
			t.fontSizePt,
			t.weight ?? null,
			t.style ?? null,
			t.complexScript ?? !1,
			t.eastAsiaLanguage ?? null,
			t.eastAsiaFontCharset ?? null,
			t.genericFamily ?? null,
			t.letterSpacingPt ?? null,
			t.kerning ?? null
		] : null,
		e.bold,
		e.italic,
		Ai(e, 1),
		e.fontFamily,
		e.fontRoute ?? null,
		e.charScale ?? 1,
		e.charSpacing ?? 0,
		e.fitTextPerGapPx ?? null,
		e.fitTextTrailingPadPx ?? null,
		e.fitTextRegionIndex ?? null,
		e.snapToCharacterGrid !== !1,
		e.widthBalanceGridDeltaFactor ?? null,
		e.widthBalanceSpaceSequence ?? !1,
		e.widthBalanceSpaceAdjustmentPt ?? null,
		e.script ?? null,
		e.tateChuYoko ?? !1,
		e.tateChuYoko ? e.sourceRunIndex ?? null : null,
		e.ruby ? [
			e.sourceRunIndex ?? null,
			e.ruby.text,
			e.ruby.fontSizePt,
			e.ruby.hpsRaisePt ?? null
		] : null,
		e.verticalRun ?? !1
	]);
}
function Ml(e) {
	let t = [];
	for (let n of e) {
		let e = t.at(-1);
		if (e && "text" in e && "text" in n && jl(e) === jl(n)) {
			let r = e.text.length, i = e.text + n.text, a = [...e.punctuationCompressions ?? [], ...(n.punctuationCompressions ?? []).map((e) => ({
				end: r + e.end,
				adjustmentPt: e.adjustmentPt
			}))];
			t[t.length - 1] = {
				...e,
				text: i,
				punctuationCompressions: a.length > 0 ? a : void 0,
				textShapeRequest: e.textShapeRequest ? {
					...e.textShapeRequest,
					text: i
				} : void 0
			};
			continue;
		}
		t.push({ ...n });
	}
	return t;
}
function Nl(e, t, n, r, i, a) {
	let o = 0, s = null, c = a?.type === "snapToChars" && a.characterPitchPt != null && a.characterPitchPt > 0 ? a.characterPitchPt : null, l = () => {
		!s || c == null || (o += gc(s.naturalWidthPt, s.kind, c), s = null);
	};
	for (let u of e) {
		let e = Math.max(n, u.start), d = Math.min(r, u.end);
		if (e >= d) continue;
		let f = t.slice(e, d), p = e - u.start, m = d - u.start, h = {
			...u.segment,
			text: f,
			punctuationCompressions: nc(u.segment, p, m)
		}, g = (e) => e.textLayoutService && e.textShapeRequest ? mc(e, e.textLayoutService.shape({
			...e.textShapeRequest,
			text: e.text,
			fontSizePt: Ai(e, 1),
			measure: !0,
			clusterGeometry: !1
		}).advancePt, a, 1) : (i.context.font = Vs(e.bold, e.italic, Ai(e, 1), e.fontFamily, i.fontFamilyClasses, e.fontRoute), mc(e, i.context.measureText(e.text).width, a, 1)), _ = hc(h, a);
		if (_ === "eastAsia" && c != null) {
			l();
			let e = h.textLayoutService && h.textShapeRequest ? h.textLayoutService.shape({
				...h.textShapeRequest,
				text: f,
				fontSizePt: Ai(h, 1),
				measure: !0,
				clusterGeometry: !0
			}).clusters : void 0, t = e?.length ? null : [...new Set([
				0,
				...N(f),
				f.length
			])].sort((e, t) => e - t), n = e?.map((e) => ({
				start: e.range.start,
				end: e.range.end,
				naturalWidthPt: mc({
					...h,
					text: f.slice(e.range.start, e.range.end),
					punctuationCompressions: nc(h, e.range.start, e.range.end)
				}, e.advancePt, a, 1)
			})) ?? t.slice(0, -1).map((e, n) => {
				let r = t[n + 1];
				return {
					start: e,
					end: r,
					naturalWidthPt: g({
						...h,
						text: f.slice(e, r),
						punctuationCompressions: nc(h, e, r)
					})
				};
			}), r = 0;
			for (let e of n) e.end <= e.start || (r += qo(e.naturalWidthPt, c));
			o += gc(n.reduce((e, t) => e + t.naturalWidthPt, 0), _, c, Math.max(1, r));
		} else {
			let e = g(h);
			if ((_ === "latin" || _ === "complexScript") && c != null) {
				let t = s;
				t?.kind === _ ? s = {
					kind: _,
					naturalWidthPt: t.naturalWidthPt + e
				} : (l(), s = {
					kind: _,
					naturalWidthPt: e
				});
			} else l(), o += e;
		}
	}
	return l(), o;
}
function Pl(e, t, n) {
	let r = al(t), i = 0;
	for (let a = 0; a < e.length; a += 1) {
		let o = e[a];
		if (!("text" in o) || o.text.length === 0) continue;
		let s = [], c = "", l = (e) => {
			let t = c.length;
			c += e.text, s.push({
				segment: e,
				start: t,
				end: c.length
			});
		};
		for (l(o); a + 1 < e.length;) {
			let t = e[a + 1];
			if (!("text" in t) || t.joinPrev !== !0) break;
			l(t), a += 1;
		}
		let u = 0;
		for (let e of Vc(c)) {
			let a = e.replace(/\s+$/u, ""), o = u, l = u + a.length;
			if (u += e.length, !a) continue;
			if (!Ac(a)) {
				i = Math.max(i, Nl(s, c, o, l, n, r));
				continue;
			}
			let d = [
				0,
				...N(a),
				a.length
			], f = [];
			for (let e = 1; e < d.length; e += 1) f.push({
				text: a.slice(d[e - 1], d[e]),
				start: o + d[e - 1],
				end: o + d[e]
			});
			let p = [], m = f[0];
			for (let e = 1; e < f.length; e += 1) {
				let n = [...m.text].at(-1)?.codePointAt(0), r = f[e].text.codePointAt(0);
				n !== void 0 && r !== void 0 && !t.kinsoku.lineEndForbidden.has(n) && !t.kinsoku.lineStartForbidden.has(r) ? (p.push(m), m = f[e]) : m = {
					text: m.text + f[e].text,
					start: m.start,
					end: f[e].end
				};
			}
			m && p.push(m);
			for (let e of p) i = Math.max(i, Nl(s, c, e.start, e.end, n, r));
		}
	}
	return i;
}
function Fl(e, t, n) {
	let r = (n.baseRtl ? n.physicalIndentRightPt : n.physicalIndentLeftPt) + (t === 0 ? n.firstIndentPt : 0) + e.xOffset;
	return {
		startPt: r,
		endPt: r + e.segments.reduce((e, t) => e + t.measuredWidth, 0)
	};
}
function Il(e, t, n, r, i, a, o = {}) {
	if (!Number.isFinite(n) || n < 0) throw RangeError("maximumWidthPt must be finite and non-negative");
	if (n === 0) return {
		minWidthPt: 0,
		maxWidthPt: 0
	};
	let s = Ml(qc(e.runs, i)), c = Math.max(1, n - t.physicalIndentLeftPt - t.physicalIndentRightPt), l = s.length === 0 ? [] : Jc(r.context, s, c, t.firstIndentPt, 1, [...t.tabStops], void 0, r.fontFamilyClasses, t.physicalIndentLeftPt, t.kinsoku, al(t), t.defaultTabPt, c + t.physicalIndentRightPt, t.baseRtl, t.isJustified, t.stretchLastLine, void 0, "intrinsic", i.verticalGlyphMeasurement, t.overflowPunct !== !1), u = t.baseRtl ? t.physicalIndentLeftPt : t.physicalIndentRightPt, d = 0, f = 0;
	l.forEach((e, n) => {
		let r = Fl(e, n, t);
		d = Math.min(d, r.startPt), f = Math.max(f, r.endPt);
	});
	let p = a ? ll({
		leadingIndentPt: t.baseRtl ? t.physicalIndentRightPt : t.physicalIndentLeftPt,
		authoredFirstIndentPt: e.indentFirst,
		markerShiftPt: a.markerShiftPt,
		markerWidthPt: a.markerWidthPt
	}) : void 0;
	p && (d = Math.min(d, p.startPt), f = Math.max(f, p.endPt));
	let m = Pl(s, t, r);
	for (let e of l) {
		let t = 0, n = e.segments.reduce((e, t) => e + t.measuredWidth, 0);
		for (let r of e.segments) t += r.measuredWidth, "imagePath" in r && !r.anchor || "math" in r ? m = Math.max(m, r.measuredWidth) : "isTab" in r && (m = Math.max(m, r.resolvedAlignment === "left" ? t : n));
	}
	let h = t.baseRtl ? t.physicalIndentRightPt : t.physicalIndentLeftPt, g = o.preserveWhitespaceOnlyContent && s.length > 0 && s.every((e) => "text" in e && /^[\s\u00a0]+$/u.test(e.text)) ? s : null, _ = g ? (() => {
		let e = "";
		return Nl(g.map((t) => {
			let n = e.length;
			return e += t.text, {
				segment: t,
				start: n,
				end: e.length
			};
		}), e, 0, e.length, r, al(t));
	})() : 0;
	if (_ > 0) {
		let e = h + t.firstIndentPt;
		d = Math.min(d, e), f = Math.max(f, e + _);
	}
	let v = Math.min(n, Math.max(0, f - d + u)), y = h, b = Math.min(0, y);
	m = Math.max(m, _);
	let x = Math.max(0, y + m), S = h + t.firstIndentPt;
	return b = Math.min(b, S), x = Math.max(x, S + m), p && (b = Math.min(b, p.startPt), x = Math.max(x, p.endPt)), {
		minWidthPt: Math.min(n, Math.max(0, x - b + u)),
		maxWidthPt: v
	};
}
//#endregion
//#region packages/docx/src/layout/paragraph-border-adjacency.ts
function Ll(e, t) {
	if (!e || t?.suppressBottom) return 0;
	let n = e.bottom;
	return !n || n.style === "none" ? 0 : (n.space ?? 0) + (n.width ?? 0) / 2;
}
function Rl(e) {
	return e == null || e.style === "none" ? null : e;
}
function zl(e, t) {
	let n = Rl(e), r = Rl(t);
	return n == null || r == null ? n == null && r == null : n.style === r.style && n.width === r.width && (n.space ?? 0) === (r.space ?? 0) && (n.color ?? null) === (r.color ?? null);
}
function Bl(e, t) {
	return !e || !t ? !1 : zl(e.top, t.top) && zl(e.bottom, t.bottom) && zl(e.left, t.left) && zl(e.right, t.right) && zl(e.between, t.between);
}
function Vl(e) {
	return e ? [
		e.top,
		e.right,
		e.bottom,
		e.left,
		e.between
	].some((e) => e != null && e.style !== "none") : !1;
}
function Hl(e, t) {
	return !e || !t || e.framePr || t.framePr ? !1 : Vl(e.borders) && Vl(t.borders) && Bl(e.borders, t.borders);
}
function Ul(e, t, n, r = !1) {
	let i = (e, t) => r ? !!e && !!t && !!e.framePr && !!t.framePr && Vl(e.borders) && Vl(t.borders) && Bl(e.borders, t.borders) : Hl(e, t), a = i(e, t), o = i(t, n), s = t.borders?.between;
	return Object.freeze({
		top: a ? s && s.style !== "none" ? "between" : "none" : "top",
		bottom: o ? "none" : "bottom"
	});
}
//#endregion
//#region packages/docx/src/layout/frame.ts
function Wl(e, t, n, r, i, a) {
	return Il(e, t, n, r, i, a).maxWidthPt;
}
function Gl(e) {
	let t = e;
	return rt("w:framePr", [
		t.dropCap,
		t.lines,
		t.wrap,
		t.hAnchor,
		t.vAnchor,
		t.hRule,
		t.hSpace,
		t.vSpace,
		t.w ?? null,
		t.h ?? null,
		t.x ?? null,
		t.y ?? null,
		t.xAlign ?? null,
		t.yAlign ?? null,
		t.__anchorLock === !0
	]);
}
function Kl(e) {
	let t = /* @__PURE__ */ new WeakMap();
	for (let n = 0; n < e.length;) {
		let r = e[n];
		if (r?.type !== "paragraph" || !r.framePr) {
			n += 1;
			continue;
		}
		let i = Gl(r.framePr), a = [r], o = [n], s = n + 1;
		for (; s < e.length;) {
			let t = e[s];
			if (t?.type !== "paragraph" || !t.framePr || Gl(t.framePr) !== i) break;
			a.push(t), o.push(s), s += 1;
		}
		let c = Object.freeze({
			id: `${i}:${n}`,
			owner: r,
			members: Object.freeze(a),
			sourceIndices: Object.freeze(o),
			framePr: r.framePr
		});
		for (let e of a) t.set(e, c);
		n = s;
	}
	return t;
}
var ql = /* @__PURE__ */ new WeakMap(), Jl = /* @__PURE__ */ new WeakMap();
function Yl(e) {
	let t = Kl(e);
	for (let n = 0; n < e.length; n += 1) {
		let r = e[n];
		if (r.type !== "paragraph") continue;
		let i = t.get(r);
		i && ql.set(r, i);
		let a = e[n - 1], o = e[n + 1], s = a?.type === "paragraph" && t.get(a) === i ? a : null, c = o?.type === "paragraph" && t.get(o) === i ? o : null;
		Jl.set(r, Ul(i ? s : a?.type === "paragraph" ? a : null, r, i ? c : o?.type === "paragraph" ? o : null, i !== void 0));
	}
}
var Xl = (e) => ql.get(e), Zl = (e) => Jl.get(e);
//#endregion
//#region packages/docx/src/layout-context.ts
function Ql(e) {
	return {
		story: e.story,
		containers: [...e.containers, { kind: "tableCell" }],
		lineNumberingEligible: !1
	};
}
function $l(e) {
	return e.runs.some((e) => e.type === "text" && !!e.ruby);
}
function eu(e) {
	return e.runs.some((e) => e.type === "text" && ji.test(e.text));
}
function tu(e) {
	for (let t of e) {
		if (t.type === "paragraph") {
			if (eu(t)) return !0;
			continue;
		}
		if (t.type === "table") {
			for (let e of t.rows) for (let t of e.cells) if (tu(t.content)) return !0;
		}
	}
	return !1;
}
function nu(e, t = { normalStyleFontSizePt: 10 }) {
	return Yl(e.body), {
		kinsoku: g(e.settings),
		defaultTabPt: Uc(e.settings),
		characterSpacingControl: e.settings?.characterSpacingControl,
		mathDefJc: e.settings?.mathDefJc,
		documentHasEastAsianText: tu(e.body),
		normalStyleFontSizePt: t.normalStyleFontSizePt,
		compat: {
			adjustLineHeightInTable: e.settings?.adjustLineHeightInTable ?? !1,
			useFeLayout: e.settings?.useFeLayout ?? !1,
			balanceSingleByteDoubleByteWidth: e.settings?.balanceSingleByteDoubleByteWidth ?? !1
		}
	};
}
function ru(e) {
	let t = e.pageWidth - e.marginLeft - e.marginRight, n = e.columns;
	if (!n || n.count <= 1) return [{
		xPt: e.marginLeft,
		wPt: Math.max(1, t)
	}];
	if (!n.equalWidth && n.cols.length > 0) {
		let t = [], r = e.marginLeft;
		for (let e of n.cols) t.push({
			xPt: r,
			wPt: Math.max(1, e.widthPt)
		}), r += e.widthPt + e.spacePt;
		return t;
	}
	let r = Math.max(1, (t - (n.count - 1) * n.spacePt) / n.count);
	return Array.from({ length: n.count }, (t, i) => ({
		xPt: e.marginLeft + i * (r + n.spacePt),
		wPt: r
	}));
}
function iu(e) {
	switch (e) {
		case "lines":
		case "linesAndChars":
		case "snapToChars": return e;
		default: return "none";
	}
}
function au(e) {
	return e === "lines" || e === "linesAndChars" || e === "snapToChars";
}
function ou(e) {
	return e === "linesAndChars" || e === "snapToChars";
}
function su(e, t) {
	return {
		geometry: {
			pageWidth: t.pageWidth,
			pageHeight: t.pageHeight,
			marginTop: t.marginTop,
			marginRight: t.marginRight,
			marginBottom: t.marginBottom,
			marginLeft: t.marginLeft,
			headerDistance: t.headerDistance,
			footerDistance: t.footerDistance
		},
		columns: ru(t),
		columnSeparator: t.columns?.sep === !0,
		grid: {
			kind: iu(t.docGridType),
			linePitchPt: t.docGridLinePitch ?? null,
			charSpacePt: t.docGridCharSpace == null ? null : t.docGridCharSpace / 4096
		},
		textDirection: t.textDirection ?? "lrTb",
		sectionBidi: !1,
		verticalAlignment: t.vAlign ?? "top",
		lineNumbering: t.lineNumbering ?? void 0
	};
}
function cu(e) {
	return e.containers.some((e) => e.kind === "tableCell");
}
function lu(e, t, n, r) {
	let i = au(t.grid.kind) && t.grid.linePitchPt != null && t.grid.linePitchPt > 0 && r.snapToGrid !== !1 && r.lineSpacing?.rule !== "exact" && (!cu(n) || e.compat.adjustLineHeightInTable), a = ou(t.grid.kind), o = r.bidi === !0, s = cu(n), c = a ? e.normalStyleFontSizePt + (t.grid.charSpacePt ?? 0) : null, l = t.grid.kind === "linesAndChars" ? c : null, u = r.numbering, d = u != null && (u.text !== "" || u.picBulletImagePath != null), f = o && d && (u.suff || "tab") === "tab" && r.indentFirst < 0;
	return {
		lineGrid: {
			active: i,
			pitchPt: i ? t.grid.linePitchPt : null
		},
		characterGrid: {
			active: a,
			kind: a ? t.grid.kind : null,
			deltaPt: a ? t.grid.charSpacePt ?? 0 : 0,
			pitchPt: c != null && c > 0 ? c : null
		},
		rightIndentGrid: {
			pitchPt: l != null && l > 0 ? l : null,
			paragraphAllowsAdjustment: r.adjustRightInd !== !1 && Jo(s)
		},
		physicalIndentLeftPt: o ? r.indentRight : r.indentLeft,
		physicalIndentRightPt: o ? r.indentLeft : r.indentRight,
		firstIndentPt: f ? 0 : r.indentFirst,
		lineSpacing: r.lineSpacing,
		spaceBeforePt: r.spaceBefore,
		spaceAfterPt: r.spaceAfter,
		baseRtl: o,
		isJustified: nl(r.alignment),
		stretchLastLine: rl(r.alignment),
		tabStops: uu(r),
		hasRuby: $l(r),
		hasEastAsianText: eu(r),
		kinsoku: e.kinsoku,
		defaultTabPt: e.defaultTabPt,
		overflowPunct: r.overflowPunct !== !1,
		mathDefJc: e.mathDefJc
	};
}
function uu(e) {
	let t = e.tabStops.filter((e) => e.alignment !== "clear").map((e) => ({ ...e })), n = e.indentLeft, r = t.some((e) => e.pos === n && Xo(e.alignment));
	return (e.indentFirst < 0 && !r ? [{
		pos: n,
		alignment: "left",
		leader: "none"
	}, ...t] : t).sort((e, t) => e.pos - t.pos);
}
function du(e, t) {
	let { pitchPt: n, paragraphAllowsAdjustment: r } = e.rightIndentGrid;
	return !r || n == null ? 0 : Yo(t, n);
}
U({
	id: "word-default-line-number-distance",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/layout/compatibility.test.ts#uses Word's observed 18pt line-number distance only when omitted"
	},
	description: "ECMA-376 §17.6.8 leaves an omitted line-number distance implementation-defined. Preserve Word-compatible 18pt placement only when the authored distance is absent."
}), U({
	id: "word-continuous-section-page-number-restart",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/page-number-field-render.test.ts#restarts a spilling continuous section after its shared first page"
	},
	description: "Issue #804 records that Word anchors a continuous section page-number restart to the first physical page containing that section body content, even when another section owns the page top. An empty same-page region does not consume the restart."
}), U({
	id: "word-trailing-empty-mark-baseline-admission",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/paginate-trailing-empty-mark-fit.test.ts#KEEPS an inkless empty paragraph on the page when ink-bearing content follows and only its below-baseline whitespace overflows"
	},
	description: "At the unreserved physical body edge, Word admits an undecorated non-terminal empty paragraph mark by its baseline when later ink follows in the same flow."
}), U({
	id: "word-section-mark-blank-page-suppression",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "next-page-section-mark-bottom-edge-admission",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "For the observed nextPage boundary, Word consumes an undecorated inkless paragraph that carries the section boundary on the outgoing page instead of creating an otherwise empty intermediate page solely for that non-painting mark. The following section still starts its requested page. Other section-start kinds remain outside this observation."
}), U({
	id: "word-book-fold-gutter-right-edge",
	evidence: {
		kind: "microsoft-note",
		reference: "[MS-OI29500] §§2.1.389, 2.1.391"
	},
	description: "For book-fold printing Word places the automatic gutter at the right-margin bisector edge, including reverse book-fold mode."
});
function fu(e) {
	return e ?? 18;
}
function pu(e, t, n) {
	return e + t - n;
}
function mu(e) {
	return !e.hasContinuationBoundary && e.inkless && e.undecorated && !e.keepNext && e.markReservePt === 0 && e.pageBottomIsUnreserved && e.physicalRegionBottomIsActive ? e.followsNextPageSectionBoundary ? Math.max(0, e.markExtentPt) : e.hasFollowingInk ? e.markBelowBaselinePt : 0 : 0;
}
function hu() {
	return "right";
}
//#endregion
//#region packages/docx/src/layout/context.ts
function gu(e) {
	if (e.sectionOccurrenceId.length === 0) throw RangeError("Section occurrence id must not be empty");
	if (e.columns.length === 0) throw RangeError("A page-flow section requires at least one column");
	return Object.freeze({
		sectionOccurrenceId: e.sectionOccurrenceId,
		geometry: Object.freeze({ ...e.geometry }),
		columns: Object.freeze(e.columns.map((e) => Object.freeze({ ...e }))),
		textDirection: e.textDirection,
		sectionBidi: e.sectionBidi ?? !1,
		grid: Object.freeze(e.grid ?? {
			kind: "none",
			linePitchPt: null,
			charSpacePt: null
		})
	});
}
function _u(e) {
	return yu(e.geometry.marginTop);
}
function vu(e) {
	return e.geometry.pageHeight - yu(e.geometry.marginBottom);
}
function yu(e) {
	return Math.abs(e);
}
function bu(e) {
	return {
		pageWidth: e.pageHeight,
		pageHeight: e.pageWidth,
		marginLeft: e.marginTop,
		marginTop: e.marginRight,
		marginRight: e.marginBottom,
		marginBottom: e.marginLeft,
		headerDistance: e.headerDistance,
		footerDistance: e.footerDistance
	};
}
function xu(e) {
	return {
		pageWidth: e.pageHeight,
		pageHeight: e.pageWidth,
		marginTop: e.marginLeft,
		marginRight: e.marginTop,
		marginBottom: e.marginRight,
		marginLeft: e.marginBottom,
		headerDistance: e.headerDistance,
		footerDistance: e.footerDistance
	};
}
function Su(e) {
	return e === "tbRl" || e === "tbRlV" || e === "tbLrV" || e === "btLr";
}
function Cu(e, t) {
	if (!Number.isInteger(t) || t < 0) throw RangeError("Physical page index must be a non-negative integer");
	let { pageWidth: n, pageHeight: r } = e.physicalGeometry, { marginTop: i, marginRight: a, marginBottom: o, marginLeft: s } = e.physicalGeometry, c = e.bookFoldPrinting || e.bookFoldRevPrinting;
	return c ? (n /= 2, hu() === "right" && (a += e.gutterPt)) : e.printTwoOnOne ? (r /= 2, i += e.gutterPt) : e.gutterAtTop && !e.mirrorMargins ? i += e.gutterPt : e.rtlGutter ? a += e.gutterPt : s += e.gutterPt, !c && !e.printTwoOnOne && e.mirrorMargins && t % 2 == 1 && ([s, a] = [a, s]), {
		...e.physicalGeometry,
		pageWidth: n,
		pageHeight: r,
		marginTop: i,
		marginRight: a,
		marginBottom: o,
		marginLeft: s
	};
}
function wu(e, t, n) {
	let r = Cu(t, n), i = Su(t.textDirection) ? bu(r) : r;
	return Object.freeze({
		...e,
		geometry: Object.freeze(i),
		columns: Object.freeze(ru({
			...i,
			titlePage: !1,
			evenAndOddHeaders: !1,
			columns: t.columns
		}).map((e) => Object.freeze(e)))
	});
}
function Tu(e) {
	return {
		pageWidth: e.pageWidth,
		pageHeight: e.pageHeight,
		marginTop: e.marginTop,
		marginRight: e.marginRight,
		marginBottom: e.marginBottom,
		marginLeft: e.marginLeft,
		headerDistance: e.headerDistance,
		footerDistance: e.footerDistance
	};
}
function Eu() {
	return {
		pageWidth: 612,
		pageHeight: 792,
		marginTop: 72,
		marginRight: 72,
		marginBottom: 72,
		marginLeft: 72,
		headerDistance: 36,
		footerDistance: 36
	};
}
function Du(e, t = !1) {
	let n = e.docGridType === "lines" || e.docGridType === "linesAndChars" || e.docGridType === "snapToChars" ? e.docGridType : "none";
	return Object.freeze({
		geometry: Object.freeze(Tu(e)),
		columns: Object.freeze(ru(e).map((e) => Object.freeze(e))),
		columnSeparator: e.columns?.sep === !0,
		grid: Object.freeze({
			kind: n,
			linePitchPt: e.docGridLinePitch ?? null,
			charSpacePt: e.docGridCharSpace == null ? null : e.docGridCharSpace / 4096
		}),
		textDirection: e.textDirection ?? "lrTb",
		sectionBidi: t,
		verticalAlignment: e.vAlign ?? "top",
		...e.lineNumbering === null || e.lineNumbering === void 0 ? {} : { lineNumbering: Object.freeze({ ...e.lineNumbering }) }
	});
}
//#endregion
//#region packages/docx/src/layout/page-border.ts
function Ou(e, t) {
	switch (e.display) {
		case "firstPage": return t;
		case "notFirstPage": return !t;
		default: return !0;
	}
}
function ku(e) {
	return e !== void 0 && /^[0-9a-fA-F]{6}$/.test(e) ? `#${e}` : "#000000";
}
function Au(e) {
	return e !== void 0 && Number.isFinite(e.space) ? e.space : 0;
}
function ju(e, t, n, r) {
	let i = Number.isFinite(e.width) ? e.width : .5;
	return Object.freeze({
		edge: t,
		from: Object.freeze(n),
		to: Object.freeze(r),
		color: ku(e.color),
		widthPt: i,
		...ki(e.style, i)
	});
}
function Mu(e, t, n, r) {
	if (!e || !Ou(e, r)) return null;
	let { geometry: i } = t, a = e.offsetFrom === "text", o = a ? i.marginLeft : 0, s = a ? i.pageWidth - i.marginRight : i.pageWidth, c = a ? yu(i.marginTop) : 0, l = a ? i.pageHeight - yu(i.marginBottom) : i.pageHeight, u = c + Au(e.top), d = l - Au(e.bottom), f = o + Au(e.left), p = s - Au(e.right), m = [];
	if (e.top && m.push(ju(e.top, "top", {
		xPt: f,
		yPt: u
	}, {
		xPt: p,
		yPt: u
	})), e.bottom && m.push(ju(e.bottom, "bottom", {
		xPt: f,
		yPt: d
	}, {
		xPt: p,
		yPt: d
	})), e.left && m.push(ju(e.left, "left", {
		xPt: f,
		yPt: u
	}, {
		xPt: f,
		yPt: d
	})), e.right && m.push(ju(e.right, "right", {
		xPt: p,
		yPt: u
	}, {
		xPt: p,
		yPt: d
	})), m.length === 0) return null;
	let h = Ei(mi(t.textDirection), n);
	return Object.freeze({
		zOrder: e.zOrder === "back" ? "back" : "front",
		logicalToPhysical: Object.freeze({ ...h.logicalToPhysical }),
		segments: Object.freeze(m)
	});
}
//#endregion
//#region packages/docx/src/layout/page-factory.ts
function Nu(e, t, n) {
	return `page:${e}:region:${encodeURIComponent(t)}:column:${n}`;
}
function Pu(e) {
	return Fu(e), {
		xPt: 0,
		yPt: 0,
		widthPt: e.widthPt,
		heightPt: e.heightPt,
		contentTopPt: e.contentTopPt,
		contentBottomPt: e.contentBottomPt
	};
}
function Fu(e) {
	if (!Number.isFinite(e.widthPt) || !Number.isFinite(e.heightPt) || !Number.isFinite(e.contentTopPt) || !Number.isFinite(e.contentBottomPt) || e.widthPt <= 0 || e.heightPt <= 0 || e.contentTopPt < 0 || e.contentTopPt > e.contentBottomPt || e.contentBottomPt > e.heightPt) throw RangeError("Effective page edges must satisfy 0 <= contentTopPt <= contentBottomPt <= heightPt");
}
function Iu(e, t) {
	if (e.length === 0) throw RangeError(`${t} must not be empty`);
}
function Lu(e, t) {
	if (e && t === void 0) throw RangeError("Page-border finalization requires explicit section-owned page identity");
	return t ?? !1;
}
function Ru(e, t) {
	return e.length === t.length && e.every((e, n) => {
		let r = t[n];
		return r !== void 0 && e.xPt === r.xPt && e.wPt === r.wPt;
	});
}
function zu(e, t) {
	return e === t || e !== void 0 && t !== void 0 && e.start === t.start && e.countBy === t.countBy && e.distance === t.distance && e.restart === t.restart;
}
function Bu(e, t) {
	return e.geometry.pageWidth === t.geometry.pageWidth && e.geometry.pageHeight === t.geometry.pageHeight && e.geometry.marginTop === t.geometry.marginTop && e.geometry.marginRight === t.geometry.marginRight && e.geometry.marginBottom === t.geometry.marginBottom && e.geometry.marginLeft === t.geometry.marginLeft && e.geometry.headerDistance === t.geometry.headerDistance && e.geometry.footerDistance === t.geometry.footerDistance && Ru(e.columns, t.columns) && e.columnSeparator === t.columnSeparator && e.textDirection === t.textDirection && e.sectionBidi === !0 == (t.sectionBidi === !0) && e.grid.kind === t.grid.kind && e.grid.linePitchPt === t.grid.linePitchPt && e.grid.charSpacePt === t.grid.charSpacePt && e.verticalAlignment === t.verticalAlignment && zu(e.lineNumbering, t.lineNumbering);
}
function Vu(e) {
	if (mi(e.section.textDirection) !== e.writingMode) throw RangeError("Section region writing mode must agree with its section text direction");
	let t = e.section.sectionBidi === !0 ? "rtl" : "ltr";
	if (e.columnFlowDirection !== void 0 && e.columnFlowDirection !== t) throw RangeError("Section region column flow direction must agree with sectPr bidi");
	let n = e.columnIndexes ?? e.section.columns.map((e, t) => t);
	if (e.columns.length !== n.length || n.some((t, r) => !Number.isInteger(t) || t < 0 || t >= e.section.columns.length || r > 0 && t <= n[r - 1]) || e.columns.some((t, r) => {
		let i = e.section.columns[n[r]];
		return i === void 0 || t.inlineStartPt !== i.xPt || t.inlineExtentPt !== i.wPt;
	})) throw RangeError("Section region columns must equal its normalized section columns");
}
function Hu(e) {
	if (!Number.isInteger(e) || e < 0) throw RangeError("Layout page index must be a non-negative integer");
}
function Uu(e, t, n) {
	let r = [], i = [], a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), c, l = [];
	for (let u of n) {
		if (Iu(u.id, "Section region id"), Iu(u.sectionOccurrenceId, "Section occurrence id"), o.has(u.id) || s.has(u.sectionOccurrenceId)) throw RangeError("Section region and occurrence identities must be unique");
		if (o.add(u.id), s.add(u.sectionOccurrenceId), c !== void 0 && c !== u.writingMode) throw RangeError("One physical page cannot mix writing modes");
		c = u.writingMode, Vu(u);
		let n = bi({
			widthPt: u.section.geometry.pageWidth,
			heightPt: u.section.geometry.pageHeight
		}, u.writingMode);
		if (n.widthPt !== t.widthPt || n.heightPt !== t.heightPt) throw RangeError(`Section regions on one physical page must use the same page box: expected ${n.widthPt}x${n.heightPt}, got ${t.widthPt}x${t.heightPt}`);
		let d = yi(t, u.writingMode), f = d.widthPt, p = d.heightPt;
		if (!Number.isFinite(u.blockStartPt) || !Number.isFinite(u.blockEndPt) || u.blockStartPt < 0 || u.blockEndPt < u.blockStartPt || u.blockEndPt > p) throw RangeError("Section regions must be inside the logical page");
		if (u.columns.length === 0) throw RangeError("Section region must contain a column");
		let m = u.columnIndexes ?? u.section.columns.map((e, t) => t), h = 0, g = Ei(u.writingMode, t), _ = u.columns.map((t, n) => {
			let r = m[n];
			if (!Number.isFinite(t.inlineStartPt) || !Number.isFinite(t.inlineExtentPt) || t.inlineStartPt < 0 || t.inlineExtentPt <= 0 || t.inlineStartPt + t.inlineExtentPt > f || t.inlineStartPt < h) throw RangeError("Columns must be ordered, disjoint, and inside the logical page");
			h = t.inlineStartPt + t.inlineExtentPt;
			let o = Nu(e, u.id, r);
			if (a.has(o)) throw RangeError(`Duplicate flow domain ${o}`);
			let s = {
				xPt: t.inlineStartPt,
				yPt: u.blockStartPt,
				widthPt: t.inlineExtentPt,
				heightPt: u.blockEndPt - u.blockStartPt
			}, c = wi(g.logicalToPhysical, s);
			if (l.some((e) => c.xPt < e.xPt + e.widthPt && e.xPt < c.xPt + c.widthPt && c.yPt < e.yPt + e.heightPt && e.yPt < c.yPt + c.heightPt)) throw RangeError("Section flow domains on one page must be physically disjoint");
			return l.push(c), i.push({
				id: o,
				kind: "body",
				logicalBounds: s,
				physicalBounds: c
			}), a.set(o, u.sectionOccurrenceId), o;
		});
		r.push({
			id: u.id,
			sectionOccurrenceId: u.sectionOccurrenceId,
			coordinateSpace: g,
			blockStartPt: u.blockStartPt,
			blockEndPt: u.blockEndPt,
			columnFlowDirection: u.columnFlowDirection ?? (u.section.sectionBidi === !0 ? "rtl" : "ltr"),
			columnIndexes: Object.freeze([...m]),
			flowDomainIds: _,
			section: u.section
		});
	}
	return {
		regions: r,
		domains: i,
		sectionByDomain: a
	};
}
function Wu(e, t) {
	if (e.kind === "paragraph") {
		t(e), e.drawings.forEach((e) => Wu(e, t)), e.textBoxes.forEach((e) => Wu(e, t));
		return;
	}
	if (e.kind === "table") {
		Gu(e, t);
		return;
	}
	e.kind === "textbox" && Ku(e, t);
}
function Gu(e, t) {
	for (let n of e.rows) for (let e of n.cells) for (let n of e.blocks) Wu(n.layout, t);
}
function Ku(e, t) {
	e.story.blocks.forEach((e) => Wu(e, t));
}
function qu(e, t, n) {
	let r = [], i = /* @__PURE__ */ new Set();
	for (let a of e) {
		let e = n.get(a.flowDomainId) ?? t;
		Wu(a, (t) => {
			for (let n of t.bookmarkStarts ?? []) !n || i.has(n) || (i.add(n), r.push({
				name: n,
				nodeId: t.id,
				sectionOccurrenceId: e
			}));
		});
	}
	return r;
}
function Ju(e) {
	let t = e.sectionRegions ?? [], n = new Map(t.map((e) => [e.id, e])), r = /* @__PURE__ */ new Map();
	for (let e of t) for (let t of e.flowDomainIds) r.set(t, e.sectionOccurrenceId);
	for (let i of e.flowDomains) {
		if (i.kind !== "footnote" && i.kind !== "endnote") continue;
		let e = i.sectionRegionId ? n.get(i.sectionRegionId) : t[0];
		e && r.set(i.id, e.sectionOccurrenceId);
	}
	return r;
}
function Yu(e, t = Ju(e)) {
	return qu(si(e), e.sectionOccurrenceId ?? "", t);
}
function Xu(e) {
	return e.parityBlank ? e : Object.freeze({
		...e,
		bookmarkStarts: Object.freeze([...Yu(e)])
	});
}
function Zu(e) {
	Hu(e.pageIndex), Iu(e.sectionOccurrenceId, "Page-start section occurrence id");
	let { regions: t, domains: n, sectionByDomain: r } = Uu(e.pageIndex, e.physicalPage, e.sectionRegions), i = e.sectionRegions[0], a = i?.pageBorders ?? e.pageBorders;
	if (i !== void 0 && (e.sectionOccurrenceId !== i.sectionOccurrenceId || !Bu(e.section, i.section))) throw RangeError("Page-start section context must equal the first section region");
	return {
		pageIndex: e.pageIndex,
		geometry: Pu(e.physicalPage),
		flowDomains: n,
		section: e.section,
		sectionOccurrenceId: e.sectionOccurrenceId,
		parityBlank: !1,
		bookmarkStarts: qu(e.paint.map(({ node: e }) => e), e.sectionOccurrenceId, r),
		pageNumber: e.pageNumber,
		sectionRegions: t,
		columnSeparators: Oi(t),
		pageBorder: Mu(a, e.section, e.physicalPage, Lu(a, e.firstSectionOwnedPage)),
		layers: ii(e.paint),
		readingOrder: e.readingOrder.map((e) => e.id)
	};
}
function Qu(e) {
	return Hu(e.pageIndex), Iu(e.sectionOccurrenceId, "Page-start section occurrence id"), Fu(e.physicalPage), Object.freeze({
		...e,
		sectionRegions: Object.freeze([]),
		paint: Object.freeze([]),
		readingOrder: Object.freeze([])
	});
}
function $u(e, t) {
	return Object.freeze({
		...e,
		sectionRegions: Object.freeze([...e.sectionRegions, t])
	});
}
function ed(e, t, n) {
	return Object.freeze({
		...e,
		paint: Object.freeze([...e.paint, t]),
		readingOrder: n ? Object.freeze([...e.readingOrder, t.node]) : e.readingOrder
	});
}
function td(e, t, n) {
	return Zu({
		...e,
		pageNumber: t,
		firstSectionOwnedPage: n
	});
}
function nd(e) {
	return Hu(e.pageIndex), Iu(e.sectionOccurrenceId, "Page-start section occurrence id"), {
		pageIndex: e.pageIndex,
		geometry: Pu(e.physicalPage),
		flowDomains: [],
		section: e.section,
		sectionOccurrenceId: e.sectionOccurrenceId,
		parityBlank: !0,
		bookmarkStarts: [],
		pageNumber: e.pageNumber,
		sectionRegions: [],
		columnSeparators: [],
		pageBorder: Mu(e.pageBorders, e.section, e.physicalPage, Lu(e.pageBorders, e.firstSectionOwnedPage)),
		layers: ii([]),
		readingOrder: []
	};
}
//#endregion
//#region packages/docx/src/layout/rect-union.ts
function rd(e) {
	if (e.length === 0) return null;
	let t = Math.min(...e.map((e) => e.xPt)), n = Math.min(...e.map((e) => e.yPt)), r = Math.max(...e.map((e) => e.xPt + e.widthPt)), i = Math.max(...e.map((e) => e.yPt + e.heightPt));
	return {
		xPt: t,
		yPt: n,
		widthPt: r - t,
		heightPt: i - n
	};
}
//#endregion
//#region packages/docx/src/layout/invariants.ts
var id = {
	FLOW_OVERLAP: !0,
	BOTTOM_MARGIN_INVASION: !0,
	FLOW_DOMAIN_INVASION: !0,
	INVALID_REFERENCE: !0,
	INVALID_GEOMETRY: !0,
	INVALID_VALUE: !0,
	MISSING_RESOURCE: !0,
	NON_CONVERGENCE: !0,
	UNSUPPORTED_FEATURE: !0
}, ad = {
	body: !0,
	header: !0,
	footer: !0,
	footnote: !0,
	endnote: !0,
	textbox: !0
}, od = new Set(Object.keys(id)), sd = new Set(Object.keys(ad));
function cd(e, t, n = /* @__PURE__ */ new WeakSet()) {
	if (!(e === null || typeof e == "string" || typeof e == "boolean")) {
		if (typeof e == "number") {
			if (!Number.isFinite(e)) throw new V("INVALID_GEOMETRY", `${t} is not finite`);
			return;
		}
		if (typeof e != "object") throw new V("INVALID_GEOMETRY", `${t} contains ${typeof e}`);
		if (n.has(e)) throw new V("INVALID_GEOMETRY", `${t} contains a cycle`);
		n.add(e);
		try {
			if (Array.isArray(e)) {
				let r = 0;
				for (let i of Reflect.ownKeys(e)) {
					if (i === "length") continue;
					if (typeof i != "string") throw new V("INVALID_GEOMETRY", `${t} has a symbol key`);
					let a = Number(i);
					if (!Number.isInteger(a) || a < 0 || String(a) !== i || a >= e.length) throw new V("INVALID_GEOMETRY", `${t}.${i} is not an array index`);
					let o = Object.getOwnPropertyDescriptor(e, i);
					if (!o?.enumerable || !("value" in o)) throw new V("INVALID_GEOMETRY", `${t}[${i}] is not plain data`);
					cd(o.value, `${t}[${i}]`, n), r += 1;
				}
				if (r !== e.length) throw new V("INVALID_GEOMETRY", `${t} is sparse`);
				return;
			}
			let r = Object.getPrototypeOf(e);
			if (r !== Object.prototype && r !== null) throw new V("INVALID_GEOMETRY", `${t} is not a plain record`);
			for (let r of Reflect.ownKeys(e)) {
				if (typeof r != "string") throw new V("INVALID_GEOMETRY", `${t} has a symbol key`);
				let i = Object.getOwnPropertyDescriptor(e, r);
				if (!i?.enumerable || !("value" in i)) throw new V("INVALID_GEOMETRY", `${t}.${r} is not plain data`);
				cd(i.value, `${t}.${r}`, n);
			}
		} finally {
			n.delete(e);
		}
	}
}
function J(e, t) {
	if (!Number.isFinite(e)) throw new V("INVALID_GEOMETRY", `${t} is not finite`);
}
function ld(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function ud(e, t) {
	if (!ld(e)) throw new V("INVALID_GEOMETRY", `${t} is not a point`);
	J(e.xPt, `${t}.xPt`), J(e.yPt, `${t}.yPt`);
}
function dd(e, t) {
	if (ud(e, t), J(e.widthPt, `${t}.widthPt`), J(e.heightPt, `${t}.heightPt`), e.widthPt < 0 || e.heightPt < 0) throw new V("INVALID_GEOMETRY", `${t} has a negative extent`);
}
function fd(e, t) {
	if (!ld(e)) throw new V("INVALID_GEOMETRY", `${t} is not a matrix`);
	for (let n of [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f"
	]) J(e[n], `${t}.${n}`);
}
function pd(e, t) {
	if (e !== "horizontal-tb" && e !== "vertical-rl" && e !== "vertical-lr") throw new V("INVALID_GEOMETRY", `${t} is unsupported`);
}
function md(e, t) {
	if (!ld(e)) throw new V("INVALID_GEOMETRY", `${t} is not a coordinate space`);
	pd(e.writingMode, `${t}.writingMode`), fd(e.logicalToPhysical, `${t}.logicalToPhysical`), fd(e.physicalToLogical, `${t}.physicalToLogical`);
}
function hd(e, t) {
	let { plan: n } = e;
	if (cd(n, `${t}.plan`), J(n.rect.x, `${t}.plan.rect.x`), J(n.rect.y, `${t}.plan.rect.y`), J(n.rect.w, `${t}.plan.rect.w`), J(n.rect.h, `${t}.plan.rect.h`), n.rect.w < 0 || n.rect.h < 0) throw new V("INVALID_GEOMETRY", `${t}.plan.rect has a negative extent`);
	if (J(n.transform.rotationDeg, `${t}.plan.transform.rotationDeg`), n.geometry.kind === "preset") {
		if (n.geometry.name.length === 0) throw new V("INVALID_GEOMETRY", `${t}.plan.geometry.name is empty`);
		n.geometry.adjustments.forEach((e, n) => {
			e !== null && J(e, `${t}.plan.geometry.adjustments[${n}]`);
		});
	} else n.geometry.subpaths.forEach((e, n) => {
		e.forEach((e, r) => {
			if (e.cmd.length === 0) throw new V("INVALID_GEOMETRY", `${t}.plan.geometry.subpaths[${n}][${r}].cmd is empty`);
		});
	});
	if (n.stroke && (J(n.stroke.width, `${t}.plan.stroke.width`), n.stroke.width < 0)) throw new V("INVALID_GEOMETRY", `${t}.plan.stroke.width is negative`);
}
function gd(e, t) {
	if (e <= t) return !0;
	let n = 2 ** -52 * Math.max(1, Math.abs(e), Math.abs(t));
	return e - t <= n;
}
function _d(e, t) {
	return e < t && !gd(t, e);
}
function vd(e, t) {
	return _d(e.xPt, t.xPt + t.widthPt) && _d(t.xPt, e.xPt + e.widthPt) && _d(e.yPt, t.yPt + t.heightPt) && _d(t.yPt, e.yPt + e.heightPt);
}
function yd(e, t) {
	return gd(e.xPt, t.xPt) && gd(e.yPt, t.yPt) && gd(t.xPt + t.widthPt, e.xPt + e.widthPt) && gd(t.yPt + t.heightPt, e.yPt + e.heightPt);
}
function bd(e, t) {
	return gd(e.xPt, t.xPt) && gd(t.xPt + t.widthPt, e.xPt + e.widthPt);
}
function xd(e, t, n) {
	return gd(e, n.yPt) && gd(n.yPt + n.heightPt, t);
}
function Sd(e, t) {
	return gd(e.yPt, t.yPt) && gd(t.yPt + t.heightPt, e.yPt + e.heightPt);
}
function Cd(e, t) {
	return e.xPt === t.xPt && e.yPt === t.yPt && e.widthPt === t.widthPt && e.heightPt === t.heightPt;
}
function wd(e, t) {
	return e.a === t.a && e.b === t.b && e.c === t.c && e.d === t.d && e.e === t.e && e.f === t.f;
}
function Td(e, t) {
	let n = e.pageBorder;
	if (n === null) return;
	if (n.zOrder !== "front" && n.zOrder !== "back") throw new V("INVALID_REFERENCE", `${t}.zOrder is invalid`);
	fd(n.logicalToPhysical, `${t}.logicalToPhysical`);
	let r = Ei(mi(e.section.textDirection), e.geometry).logicalToPhysical;
	if (!wd(n.logicalToPhysical, r)) throw new V("INVALID_GEOMETRY", `${t}.logicalToPhysical contradicts the page-start section`);
	if (!Array.isArray(n.segments) || n.segments.length === 0) throw new V("INVALID_GEOMETRY", `${t}.segments is empty`);
	n.segments.forEach((e, n) => {
		let r = `${t}.segments[${n}]`;
		if (ud(e.from, `${r}.from`), ud(e.to, `${r}.to`), J(e.widthPt, `${r}.widthPt`), e.from.xPt !== e.to.xPt && e.from.yPt !== e.to.yPt) throw new V("INVALID_GEOMETRY", `${r} is not an axis-aligned page edge`);
		if (!/^#[0-9a-fA-F]{6}$/.test(e.color)) throw new V("INVALID_REFERENCE", `${r}.color is invalid`);
	});
}
function Ed(e, t, n) {
	if (n.has(e)) throw new V("INVALID_REFERENCE", `duplicate retained node id ${e}`);
	n.add(e), t.add(e);
}
function Dd(e, t, n) {
	if (Ed(e.id, t, n), e.kind === "paragraph") {
		e.drawings.forEach((e) => Dd(e, t, n)), e.textBoxes.forEach((e) => Dd(e, t, n));
		return;
	}
	if (e.kind === "table") {
		e.rows.forEach((e) => {
			Ed(e.id, t, n), e.cells.forEach((e) => {
				Ed(e.id, t, n), e.blocks.forEach((e) => Dd(e.layout, t, n));
			});
		});
		return;
	}
	if (e.kind === "note") {
		e.story.blocks.forEach((e) => Dd(e, t, n));
		return;
	}
	e.kind === "textbox" && e.story.blocks.forEach((e) => Dd(e, t, n));
}
function Od(e, t) {
	if (e.kind === "paragraph") {
		let n = rd(e.drawings.filter((e) => e.anchorLayer?.cellContainment === !0).map((e) => e.flowBounds));
		if (e.cellContainmentBounds && dd(e.cellContainmentBounds, `${t}.cellContainmentBounds`), n === null != (e.cellContainmentBounds === void 0) || n && e.cellContainmentBounds && !Cd(n, e.cellContainmentBounds)) throw new V("INVALID_GEOMETRY", `${t}.cellContainmentBounds does not match its retained layoutInCell drawings`);
		let r = /* @__PURE__ */ new Set();
		(e.anchorCollisions ?? []).forEach((e, n) => {
			let i = `${t}.anchorCollisions[${n}]`;
			if (e.occurrenceId.length === 0 || r.has(e.occurrenceId)) throw new V("INVALID_REFERENCE", `${i}.occurrenceId is empty or duplicated`);
			if (r.add(e.occurrenceId), dd(e.bounds, `${i}.bounds`), e.horizontalOwnership !== "page" && e.horizontalOwnership !== "host" || e.verticalOwnership !== "page" && e.verticalOwnership !== "host") throw new V("INVALID_REFERENCE", `${i} has invalid axis ownership`);
		}), e.textBoxes.forEach((e, n) => Od(e, `${t}.textBoxes[${n}]`));
		return;
	}
	if (e.kind === "table") {
		e.rows.forEach((e, n) => e.cells.forEach((e, r) => e.blocks.forEach((e, i) => Od(e.layout, `${t}.rows[${n}].cells[${r}].blocks[${i}]`))));
		return;
	}
	e.kind === "textbox" && e.story.blocks.forEach((e, n) => Od(e, `${t}.story.blocks[${n}]`));
}
function kd(e, t) {
	if (e.orientation === "upright-physical" && !e.transform) throw new V("INVALID_GEOMETRY", `${t} upright physical drawing is missing its logical transform`);
	if (e.transform) for (let n of [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f"
	]) J(e.transform[n], `${t}.transform.${n}`);
	e.clip?.kind === "rect" && dd(e.clip.rect, `${t}.clip.rect`), e.clip?.kind === "polygon" && e.clip.points.forEach((e, n) => ud(e, `${t}.clip.points[${n}]`)), e.commands.forEach((e, n) => {
		let r = `${t}.commands[${n}]`;
		if (e.kind !== "noop") {
			if (e.kind === "drawingml-shape") {
				hd(e, r);
				return;
			}
			if (e.kind === "drawingml-image-fill") {
				if (hd(e, r), e.resourceKey.length === 0) throw new V("INVALID_GEOMETRY", `${r}.resourceKey is empty`);
				if (e.fillRect) for (let t of [
					"l",
					"t",
					"r",
					"b"
				]) J(e.fillRect[t], `${r}.fillRect.${t}`);
				return;
			}
			if (dd(e.rect, `${r}.rect`), e.kind === "stroke-rect" && (J(e.lineWidthPt, `${r}.lineWidthPt`), e.dashPt.forEach((e, t) => J(e, `${r}.dashPt[${t}]`))), e.kind === "text" && (J(e.fontSizePt, `${r}.fontSizePt`), J(e.fontWeight, `${r}.fontWeight`)), e.kind === "watermark-text") {
				if (dd(e.sourceBounds, `${r}.sourceBounds`), e.sourceBounds.widthPt <= 0 || e.sourceBounds.heightPt <= 0) throw new V("INVALID_GEOMETRY", `${r}.sourceBounds must have positive extents`);
				if (J(e.opacity, `${r}.opacity`), J(e.rotationDeg, `${r}.rotationDeg`), J(e.fontSizePt, `${r}.fontSizePt`), e.opacity < 0 || e.opacity > 1 || e.fontSizePt <= 0) throw new V("INVALID_GEOMETRY", `${r} has invalid textPath paint metrics`);
				e.spans.forEach((e, t) => {
					J(e.advancePt, `${r}.spans[${t}].advancePt`), J(e.fontWeight, `${r}.spans[${t}].fontWeight`);
				});
			}
		}
	});
}
function Ad(e) {
	cd(e, "layout"), e.diagnostics.forEach((e, t) => {
		let n = `diagnostics[${t}]`;
		if (!od.has(e.code)) throw new V("INVALID_REFERENCE", `${n}.code is unknown`);
		if (e.severity !== "warning" && e.severity !== "error") throw new V("INVALID_REFERENCE", `${n}.severity is unknown`);
		if (typeof e.message != "string" || e.message.length === 0) throw new V("INVALID_REFERENCE", `${n}.message is empty`);
		if (e.source !== void 0 && (!sd.has(e.source.story) || typeof e.source.storyInstance != "string" || e.source.storyInstance.length === 0 || !Array.isArray(e.source.path) || e.source.path.some((e) => !Number.isSafeInteger(e) || e < 0))) throw new V("INVALID_REFERENCE", `${n}.source is invalid`);
	});
	let t = /* @__PURE__ */ new Set();
	e.pages.forEach((e, n) => {
		if (!Number.isInteger(e.pageIndex) || e.pageIndex !== n) throw new V("INVALID_REFERENCE", `pages[${n}] has invalid page index ${e.pageIndex}`);
		if (dd(e.geometry, `pages[${n}].geometry`), J(e.geometry.contentTopPt, `pages[${n}].geometry.contentTopPt`), J(e.geometry.contentBottomPt, `pages[${n}].geometry.contentBottomPt`), e.geometry.widthPt <= 0 || e.geometry.heightPt <= 0 || e.geometry.contentTopPt < 0 || e.geometry.contentTopPt > e.geometry.contentBottomPt || e.geometry.contentBottomPt > e.geometry.heightPt) throw new V("INVALID_GEOMETRY", `pages[${n}] has invalid effective page edges`);
		Td(e, `pages[${n}].pageBorder`);
		let r = /* @__PURE__ */ new Map();
		if (e.flowDomains.forEach((e, t) => {
			if (dd(e.logicalBounds, `pages[${n}].flowDomains[${t}].logicalBounds`), dd(e.physicalBounds, `pages[${n}].flowDomains[${t}].physicalBounds`), r.has(e.id)) throw new V("INVALID_REFERENCE", `duplicate flow domain ${e.id}`);
			r.set(e.id, e);
		}), e.parityBlank && (e.flowDomains.length > 0 || (e.sectionRegions?.length ?? 0) > 0 || (e.columnSeparators?.length ?? 0) > 0 || oi(e).length > 0 || e.layers.roots.length > 0 || e.readingOrder.length > 0 || (e.bookmarkStarts?.length ?? 0) > 0)) throw new V("INVALID_REFERENCE", `pages[${n}] parity blank retains page content`);
		let i = /* @__PURE__ */ new Set();
		if (e.sectionOccurrenceId !== void 0) {
			if (e.sectionOccurrenceId.length === 0) throw new V("INVALID_REFERENCE", `pages[${n}] has an empty section occurrence id`);
			i.add(e.sectionOccurrenceId);
		}
		let a = /* @__PURE__ */ new Map();
		if (e.sectionRegions) {
			let t = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map(), c = [], l;
			if (e.sectionRegions.forEach((u, d) => {
				let f = `pages[${n}].sectionRegions[${d}]`;
				if (u.id.length === 0 || t.has(u.id)) throw new V("INVALID_REFERENCE", `${f} has an invalid region id`);
				if (t.add(u.id), u.sectionOccurrenceId.length === 0) throw new V("INVALID_REFERENCE", `${f} has an empty section occurrence id`);
				if (o.has(u.sectionOccurrenceId)) throw new V("INVALID_REFERENCE", `${f} has a duplicate section occurrence id`);
				o.add(u.sectionOccurrenceId), i.add(u.sectionOccurrenceId), md(u.coordinateSpace, `${f}.coordinateSpace`);
				let p = u.coordinateSpace.writingMode;
				if (l !== void 0 && l !== p) throw new V("INVALID_GEOMETRY", `${f} mixes coordinate systems on one physical page`);
				l = p;
				let m;
				try {
					m = mi(u.section.textDirection);
				} catch (e) {
					throw new V("INVALID_GEOMETRY", `${f}.section.textDirection is unsupported: ${e.message}`);
				}
				if (p !== m) throw new V("INVALID_GEOMETRY", `${f} writing mode contradicts its section text direction`);
				let h = yi(e.geometry, p), g = bi({
					widthPt: u.section.geometry.pageWidth,
					heightPt: u.section.geometry.pageHeight
				}, p);
				if (g.widthPt !== e.geometry.widthPt || g.heightPt !== e.geometry.heightPt) throw new V("INVALID_GEOMETRY", `${f} section geometry does not match the upright physical page`);
				if (J(u.blockStartPt, `${f}.blockStartPt`), J(u.blockEndPt, `${f}.blockEndPt`), u.columnFlowDirection !== "ltr" && u.columnFlowDirection !== "rtl") throw new V("INVALID_GEOMETRY", `${f} has an invalid column flow direction`);
				let _ = u.section.sectionBidi === !0 ? "rtl" : "ltr";
				if (u.columnFlowDirection !== _) throw new V("INVALID_GEOMETRY", `${f} column flow direction contradicts its section bidi`);
				if (u.blockStartPt < 0 || u.blockEndPt < u.blockStartPt || u.blockEndPt > h.heightPt) throw new V("INVALID_GEOMETRY", `${f} has an invalid block interval`);
				let v = Ei(u.coordinateSpace.writingMode, e.geometry);
				if (!wd(u.coordinateSpace.logicalToPhysical, v.logicalToPhysical) || !wd(u.coordinateSpace.physicalToLogical, v.physicalToLogical)) throw new V("INVALID_GEOMETRY", `${f} has an invalid coordinate transform`);
				let y = u.columnIndexes;
				if (u.flowDomainIds.length !== y.length || y.some((e, t) => !Number.isInteger(e) || e < 0 || e >= u.section.columns.length || t > 0 && e <= y[t - 1])) throw new V("INVALID_GEOMETRY", `${f} columns contradict its section`);
				let b = 0;
				u.flowDomainIds.forEach((t, n) => {
					let i = r.get(t);
					if (!i) throw new V("INVALID_REFERENCE", `${f} references missing flow domain ${t}`);
					if (i.kind !== "body") throw new V("INVALID_REFERENCE", `${f} owns non-body flow domain ${t}`);
					s.set(t, (s.get(t) ?? 0) + 1), a.set(t, u);
					let o = i.logicalBounds, l = u.section.columns[y[n]];
					if (o.widthPt <= 0 || o.heightPt < 0 || o.yPt !== u.blockStartPt || o.heightPt !== u.blockEndPt - u.blockStartPt || o.xPt < 0 || o.xPt < b || o.xPt + o.widthPt > h.widthPt || l === void 0 || o.xPt !== l.xPt || o.widthPt !== l.wPt) throw new V("INVALID_GEOMETRY", `${t} is not the section column's non-negative logical region`);
					if (b = o.xPt + o.widthPt, !Cd(wi(u.coordinateSpace.logicalToPhysical, i.logicalBounds), i.physicalBounds)) throw new V("INVALID_GEOMETRY", `${t} physical bounds do not match its section region transform`);
					if (!yd(e.geometry, i.physicalBounds)) throw new V("INVALID_GEOMETRY", `${t} physical bounds leave the upright physical page`);
					if (c.some((e) => e.regionId !== u.id && vd(e.bounds, i.physicalBounds))) throw new V("INVALID_GEOMETRY", `${t} overlaps a body flow domain owned by another section region`);
					c.push({
						regionId: u.id,
						bounds: i.physicalBounds
					});
				});
			}), e.flowDomains.filter((e) => e.kind === "body").forEach((e) => {
				if (s.get(e.id) !== 1) throw new V("INVALID_REFERENCE", `${e.id} has invalid section region ownership`);
			}), !e.parityBlank && e.sectionRegions.length > 0) {
				let t = e.sectionRegions[0];
				if (e.sectionOccurrenceId !== t.sectionOccurrenceId) throw new V("INVALID_REFERENCE", `pages[${n}] page-start section occurrence does not match its first region`);
				if (!Bu(e.section, t.section)) throw new V("INVALID_GEOMETRY", `pages[${n}] page-start section facts do not match its first region`);
			}
		}
		let o = Oi(e.sectionRegions ?? []);
		if (!Array.isArray(e.columnSeparators) || e.columnSeparators.length !== o.length || e.columnSeparators.some((e, t) => {
			let n = o[t];
			return n === void 0 || e.start.xPt !== n.start.xPt || e.start.yPt !== n.start.yPt || e.end.xPt !== n.end.xPt || e.end.yPt !== n.end.yPt;
		})) throw new V("INVALID_GEOMETRY", `pages[${n}].columnSeparators contradict the retained section regions`);
		let s = new Map(e.sectionRegions.map((e) => [e.id, e]));
		for (let t of e.flowDomains) {
			if (t.kind !== "footnote" && t.kind !== "endnote") continue;
			let n = t.sectionRegionId ? s.get(t.sectionRegionId) : e.sectionRegions[0];
			if (!n) throw new V("INVALID_REFERENCE", `${t.id} references missing page story region ${t.sectionRegionId ?? "<default>"}`);
			if (!Cd(wi(n.coordinateSpace.logicalToPhysical, t.logicalBounds), t.physicalBounds)) throw new V("INVALID_GEOMETRY", `${t.id} physical bounds do not match the page story transform`);
			a.set(t.id, n);
		}
		for (let t of e.flowDomains) if (!a.has(t.id) && !Cd(t.logicalBounds, t.physicalBounds)) throw new V("INVALID_GEOMETRY", `${t.id} has unequal logical and physical bounds without a section region`);
		if (e.pageNumber) {
			if (J(e.pageNumber.displayNumber, `pages[${n}].pageNumber.displayNumber`), !Number.isInteger(e.pageNumber.displayNumber)) throw new V("INVALID_GEOMETRY", `pages[${n}] page number is not an integer`);
			if (e.pageNumber.format.length === 0 || !i.has(e.pageNumber.sectionOccurrenceId)) throw new V("INVALID_REFERENCE", `pages[${n}] has an invalid page number section owner`);
		}
		let c = [];
		try {
			si(e);
		} catch (e) {
			throw e instanceof ri ? new V("INVALID_REFERENCE", e.message) : e;
		}
		let l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Set();
		oi(e).forEach(({ node: e }, i) => {
			let o = `pages[${n}].nodes[${i}]`;
			l.set(e.id, e), Dd(e, u, t), Od(e, o), dd(e.flowBounds, `${o}.flowBounds`), dd(e.inkBounds, `${o}.inkBounds`), e.clipBounds && dd(e.clipBounds, `${o}.clipBounds`), J(e.advancePt, `${o}.advancePt`), e.kind === "drawing" && kd(e, o);
			let s = r.get(e.flowDomainId);
			if (!s) throw new V("INVALID_REFERENCE", `${e.id} references missing flow domain ${e.flowDomainId}`);
			if (e.ordinaryFlow && s.kind === "body" && s.logicalBounds.heightPt === 0) throw new V("FLOW_DOMAIN_INVASION", `${e.id} claims ordinary flow in an empty body domain`);
			if (!e.ordinaryFlow) return;
			let d = s.kind === "body" ? a.get(s.id) : void 0;
			if (s.kind === "body") {
				if (!d) throw new V("INVALID_REFERENCE", `${e.id} references a body flow domain without a section region`);
				if (!gd(e.flowBounds.yPt + e.flowBounds.heightPt, d.blockEndPt)) throw new V("BOTTOM_MARGIN_INVASION", `${e.id} crosses logical block end`);
			}
			if (!(d ? xd(d.blockStartPt, d.blockEndPt, e.flowBounds) && (e.kind === "table" || bd(s.logicalBounds, e.flowBounds)) : e.kind === "table" ? Sd(s.logicalBounds, e.flowBounds) : yd(s.logicalBounds, e.flowBounds))) throw new V("FLOW_DOMAIN_INVASION", `${e.id} crosses flow domain ${s.id}`);
			c.push(e);
		});
		let d = /* @__PURE__ */ new Set();
		if (e.readingOrder.forEach((e) => {
			if (!l.has(e) || d.has(e)) throw new V("INVALID_REFERENCE", `invalid reading-order reference ${e}`);
			d.add(e);
		}), e.bookmarkStarts !== void 0) {
			let t = Yu(e, new Map([...a].map(([e, t]) => [e, t.sectionOccurrenceId]))), r = t.every((e) => e.sectionOccurrenceId.length > 0 && i.has(e.sectionOccurrenceId)), o = e.bookmarkStarts.length === t.length && e.bookmarkStarts.every((e, n) => {
				let r = t[n];
				return r !== void 0 && e.name === r.name && e.nodeId === r.nodeId && e.sectionOccurrenceId === r.sectionOccurrenceId;
			});
			if (!r || !o) throw new V("INVALID_REFERENCE", `pages[${n}] bookmark metadata does not match its retained graph (invalid bookmark node or ownership)`);
		}
		for (let e = 0; e < c.length; e += 1) for (let t = e + 1; t < c.length; t += 1) {
			let n = c[e], i = c[t];
			if (!n || !i) continue;
			let a = r.get(n.flowDomainId), o = r.get(i.flowDomainId), s = n.flowDomainId === i.flowDomainId, l = a?.kind === "body" && (o?.kind === "footnote" || o?.kind === "endnote") || o?.kind === "body" && (a?.kind === "footnote" || a?.kind === "endnote"), u = a?.id !== o?.id && (a?.kind === "footnote" || a?.kind === "endnote") && (o?.kind === "footnote" || o?.kind === "endnote");
			if ((s || l || u) && vd(n.flowBounds, i.flowBounds)) throw new V("FLOW_OVERLAP", `${n.id} overlaps ${i.id}`);
		}
	});
}
function jd(e) {
	try {
		Ad(e);
	} catch (e) {
		throw e instanceof V ? e : e instanceof TypeError || e instanceof RangeError ? new V("INVALID_GEOMETRY", e.message) : e;
	}
}
function Md(e, t) {
	if (typeof e != "object" || !e) {
		if (typeof e == "number" && !Number.isFinite(e)) throw new V("INVALID_GEOMETRY", "retained layout contains a non-finite number");
		return e;
	}
	if (t.has(e)) return e;
	t.add(e);
	for (let n of Object.values(e)) Md(n, t);
	return Object.freeze(e);
}
var Nd = /* @__PURE__ */ new WeakSet(), Pd = /* @__PURE__ */ new WeakSet();
function Fd(e) {
	if (Nd.has(e)) return e;
	let t = Md(e, /* @__PURE__ */ new WeakSet());
	return Nd.add(t), t;
}
function Id(e) {
	return Nd.has(e) ? e : (On() && cd(e, "layout"), Fd(e));
}
function Ld(e) {
	if (Pd.has(e)) return e;
	jd(e);
	let t = Fd(e);
	return Pd.add(t), t;
}
//#endregion
//#region packages/docx/src/layout/variant-store.ts
function Rd(e, t) {
	if (!Number.isInteger(t) || t < 0 || t >= e.pages.length) throw RangeError(`Page index ${t} out of range (count: ${e.pages.length})`);
	return e.pages[t];
}
var zd = class {
	#e;
	#t;
	#n = /* @__PURE__ */ new Map();
	#r;
	#i;
	#a = null;
	#o = /* @__PURE__ */ new Set();
	constructor(e, t, n) {
		this.#e = e, this.#r = Object.freeze({ ...t }), this.#i = pi(this.#r, this.#e), this.#t = n;
	}
	get defaultLayout() {
		return this.layoutFor(this.#r);
	}
	layoutFor(e) {
		return this.select(e).layout;
	}
	select(e) {
		let t = Object.isFrozen(e) ? e : Object.freeze({ ...e }), n = pi(t, this.#e), r = this.#n.get(n);
		return r || (this.#c(n, t), r = Id(this.#t(t)), this.#n.set(n, r)), Object.freeze({
			key: n,
			options: t,
			layout: r
		});
	}
	selectPage(e, t) {
		let n = this.select(e);
		return Object.freeze({
			...n,
			page: Rd(n.layout, t)
		});
	}
	prime(e, t) {
		let n = Object.isFrozen(e) ? e : Object.freeze({ ...e }), r = pi(n, this.#e);
		return this.#n.get(r) || this.#s(r, n, t);
	}
	replaceIfCurrent(e, t, n) {
		let r = Object.isFrozen(e) ? e : Object.freeze({ ...e }), i = pi(r, this.#e);
		return (this.#n.get(i) ?? null) === t ? this.#s(i, r, n) : null;
	}
	#s(e, t, n) {
		this.#c(e, t);
		let r = Id(n);
		return this.#n.set(e, r), r;
	}
	#c(e, t) {
		if (e !== this.#i) {
			if (this.#a !== t.currentDateMs) {
				for (let e of this.#o) this.#n.delete(e);
				this.#o.clear(), this.#a = t.currentDateMs;
			}
			this.#o.add(e);
		}
	}
	hasLayoutFor(e) {
		return this.#n.has(pi(e, this.#e));
	}
	isDefault(e) {
		return pi(e, this.#e) === this.#i;
	}
};
//#endregion
//#region packages/docx/src/layout/document-layout-variants.ts
function Bd(e) {
	let { services: t, defaultCurrentDateMs: n, buildLayout: r } = e, i = fi({ defaultCurrentDateMs: n }), a = e.source.fatalParse, o = a === null ? null : ui(a.message, a.pageSize, t.text), s = new zd(t, i, o === null ? r : () => o);
	return Or(t, s), Object.freeze({
		store: s,
		defaultOptions: i
	});
}
function Vd(e, t, n) {
	let r = kr(e);
	if (!r) throw Error("Document layout variant store is not attached to the supplied services");
	return r.selectPage(fi(t), n);
}
//#endregion
//#region packages/docx/src/layout/affine.ts
function Hd(e, t) {
	return Object.freeze({
		a: e.a * t.a + e.c * t.b,
		b: e.b * t.a + e.d * t.b,
		c: e.a * t.c + e.c * t.d,
		d: e.b * t.c + e.d * t.d,
		e: e.a * t.e + e.c * t.f + e.e,
		f: e.b * t.e + e.d * t.f + e.f
	});
}
function Ud(e) {
	return Object.freeze({
		a: e,
		b: 0,
		c: 0,
		d: e,
		e: 0,
		f: 0
	});
}
function Wd(e, t) {
	return Object.freeze({
		a: 1,
		b: 0,
		c: 0,
		d: 1,
		e,
		f: t
	});
}
function Gd(e) {
	return Object.freeze(e === 1 ? {
		a: 0,
		b: 1,
		c: -1,
		d: 0,
		e: 0,
		f: 0
	} : {
		a: 0,
		b: -1,
		c: 1,
		d: 0,
		e: 0,
		f: 0
	});
}
function Kd(e, t) {
	return {
		xPt: e.a * t.xPt + e.c * t.yPt + e.e,
		yPt: e.b * t.xPt + e.d * t.yPt + e.f
	};
}
function qd(e, t) {
	let n = e.a * e.d - e.b * e.c;
	if (!Number.isFinite(n) || n === 0) return null;
	let r = t.xPt - e.e, i = t.yPt - e.f, a = {
		xPt: (e.d * r - e.c * i) / n,
		yPt: (-e.b * r + e.a * i) / n
	};
	return Number.isFinite(a.xPt) && Number.isFinite(a.yPt) ? a : null;
}
function Jd(e, t) {
	let n = e.a * e.d - e.b * e.c;
	if (!Number.isFinite(n) || n === 0) return null;
	let r = {
		xPt: (e.d * t.xPt - e.c * t.yPt) / n,
		yPt: (-e.b * t.xPt + e.a * t.yPt) / n
	};
	return Number.isFinite(r.xPt) && Number.isFinite(r.yPt) ? r : null;
}
//#endregion
//#region packages/docx/src/layout/text-index.ts
var Yd = Object.freeze({
	a: 1,
	b: 0,
	c: 0,
	d: 1,
	e: 0,
	f: 0
}), Xd = Object.freeze([]), Zd = Gd(1), Qd = Gd(-1);
function $d(e, t, n, r, i, a = {}) {
	if (!e.collectRasterPaintOccurrences) return;
	let o = i, s = r.widthPt, c = r.heightPt;
	a.textBoxVerticalMode && (o = Hd(o, a.textBoxVerticalMode === "vert270" ? Zd : Qd), [s, c] = [c, s]), a.orientation === "upright-physical" && (o = Hd(o, Qd), [s, c] = [c, s]);
	let l = s * Math.hypot(o.a, o.b), u = c * Math.hypot(o.c, o.d);
	!Number.isFinite(l) || !Number.isFinite(u) || !(l > 0) || !(u > 0) || e.rasterPaintOccurrences.push(Object.freeze({
		resourceKey: t,
		resourceKind: n,
		widthPt: l,
		heightPt: u
	}));
}
function ef(e, t, n) {
	if (!(!n.collectRasterPaintOccurrences || n.emittedRasterDrawings.has(e.id))) {
		n.emittedRasterDrawings.add(e.id);
		for (let r of e.commands) {
			if (r.kind === "resource" && r.resourceKind !== "math") {
				$d(n, r.resourceKey, r.resourceKind, r.rect, t.pointToPage, { orientation: r.orientation });
				continue;
			}
			if (r.kind !== "drawingml-image-fill") continue;
			let { x: e, y: i, w: a, h: o } = r.plan.rect, s = r.fillRect ?? {
				l: 0,
				t: 0,
				r: 0,
				b: 0
			};
			$d(n, r.resourceKey, "image", {
				xPt: e + s.l * a,
				yPt: i + s.t * o,
				widthPt: a * (1 - s.l - s.r),
				heightPt: o * (1 - s.t - s.b)
			}, t.pointToPage);
		}
	}
}
function tf(e) {
	let t = new Map(e.sectionRegions.map((e) => [e.id, e])), n = /* @__PURE__ */ new Map();
	for (let t of e.sectionRegions) for (let e of t.flowDomainIds) n.set(e, t);
	for (let r of e.flowDomains) {
		if (r.kind !== "footnote" && r.kind !== "endnote") continue;
		let i = r.sectionRegionId ? t.get(r.sectionRegionId) : e.sectionRegions[0];
		if (!i) throw Error(`${r.id} references missing page story region ${r.sectionRegionId ?? "<default>"}`);
		n.set(r.id, i);
	}
	return n;
}
function nf(e, t) {
	return t.coordinateSpace === "upright-physical" ? Yd : e.get(t.node.flowDomainId)?.coordinateSpace.logicalToPhysical ?? Yd;
}
function rf(e, t) {
	let n = e.rootPointToPage.get(t.rootNodeId);
	if (!n) throw Error(`Drawing entry ${t.node.id} references missing root ${t.rootNodeId}`);
	let r = n, i = [];
	for (let e of t.frames) e.kind === "transform" ? r = Hd(r, e.transform) : i.push(Object.freeze({
		bounds: e.clip,
		pointToPage: r
	}));
	return {
		pointToPage: r,
		layoutTranslationPt: t.layoutTranslationPt,
		rootNodeId: t.rootNodeId,
		paintOrderIndex: e.drawingPaintOrder.get(t.node.id) ?? -1,
		clips: Object.freeze(i)
	};
}
function af(e, t) {
	return t ? {
		...e,
		clips: Object.freeze([...e.clips, Object.freeze({
			bounds: t,
			pointToPage: e.pointToPage
		})])
	} : e;
}
function of(e, t, n) {
	let r = t.xPt - e.flowBounds.xPt, i = t.yPt - e.flowBounds.yPt;
	return {
		...n,
		pointToPage: Hd(n.pointToPage, Wd(r, i)),
		layoutTranslationPt: {
			xPt: n.layoutTranslationPt.xPt + r,
			yPt: n.layoutTranslationPt.yPt + i
		}
	};
}
function sf(e, t) {
	return (t.textBoxIds ?? []).flatMap((t) => {
		let n = e.get(t);
		return n ? [n] : [];
	});
}
function cf(e, t, n) {
	if (n.emittedTextBoxes.has(e.id)) return;
	n.emittedTextBoxes.add(e.id);
	let r = af({
		...t,
		pointToPage: Hd(t.pointToPage, e.transform),
		textBoxVerticalMode: e.verticalMode ?? t.textBoxVerticalMode
	}, e.clipBounds);
	for (let t of e.story.blocks) pf(t, r, n);
}
function lf(e, t, n, r) {
	let i = sf(e, t), a = uf(t, n, r);
	ef(t, a, r), r.collectDrawings && !r.emittedDrawings.has(t.id) && (r.emittedDrawings.add(t.id), r.drawings.push(Object.freeze({
		drawing: t,
		textBoxes: i,
		pointToPage: a.pointToPage,
		clips: a.clips,
		paintOrderIndex: a.paintOrderIndex,
		sourceOrder: r.drawingSourceOrder++
	})));
	for (let e of i) cf(e, a, r);
}
function uf(e, t, n) {
	let r = n.drawingEntries.get(e.id), i = t;
	r && r.rootNodeId === t.rootNodeId && (i = rf(n, r));
	let a = i.layoutTranslationPt, o = e.anchorLayer?.horizontalOwnership === "page" ? -a.xPt : 0, s = e.anchorLayer?.verticalOwnership === "page" ? -a.yPt : 0, c = o === 0 && s === 0 ? i : {
		...i,
		pointToPage: Hd(i.pointToPage, Wd(o, s))
	};
	if (e.orientation === "upright-physical") {
		if (!e.transform) throw Error(`Upright physical drawing ${e.id} is missing its logical transform`);
		c = {
			...c,
			pointToPage: Hd(c.pointToPage, e.transform)
		};
	}
	return c;
}
function df(e, t, n) {
	let r = af(t, e.clipBounds);
	if (n.collectCompletedParagraphSources && e.continuation?.continuesOnNext !== !0 && n.completedParagraphSources.add(z(e.source)), n.collectTextRuns || n.collectTextRunSources) {
		for (let r of e.lines) for (let i of r.placements) if (i.kind === "text" && (n.collectTextRuns && n.runs.push(Object.freeze({
			placement: i,
			pointToPage: t.pointToPage,
			source: e.source,
			...e.paragraphId === void 0 ? {} : { paragraphId: e.paragraphId }
		})), n.collectTextRunSources && i.sourceRunIndex !== void 0 && i.text.length > 0)) {
			let t = z(e.source), r = n.sourceRuns.get(t) ?? /* @__PURE__ */ new Set();
			n.sourceRuns.has(t) || n.sourceRuns.set(t, r), r.add(i.sourceRunIndex);
		}
	}
	if (n.collectRasterPaintOccurrences) for (let t of e.lines) for (let e of t.placements) e.kind !== "resource" || e.resourceKind === "math" || $d(n, e.resourceKey, e.resourceKind, e.bounds, r.pointToPage, {
		orientation: e.orientation,
		textBoxVerticalMode: r.textBoxVerticalMode
	});
	let i = new Map(e.textBoxes.map((e) => [e.id, e])), a = /* @__PURE__ */ new Set(), o = e.drawings.map((e, t) => {
		let n = e.source.path.at(-1);
		if (n === void 0 || !Number.isSafeInteger(n) || n < 0) throw Error(`Drawing ${e.id} has no retained paragraph run index`);
		return {
			drawing: e,
			index: t,
			runIndex: n
		};
	}).sort((e, t) => e.runIndex - t.runIndex || e.index - t.index), s = n.collectDrawings ? e.lines.flatMap((e) => e.placements.flatMap((e, t) => e.kind !== "resource" || e.resourceKind !== "image" && e.resourceKind !== "chart" || e.sourceRunIndex === void 0 ? [] : [{
		placement: e,
		index: t,
		runIndex: e.sourceRunIndex
	}])) : [];
	for (let { drawing: e } of o) for (let t of e.textBoxIds ?? []) a.add(t);
	let c = [...o.map((e) => ({
		kind: "drawing",
		...e
	})), ...s.map((e) => ({
		kind: "resource",
		...e
	}))].sort((e, t) => e.runIndex - t.runIndex || e.index - t.index);
	for (let t of c) {
		if (t.kind === "drawing") {
			lf(i, t.drawing, r, n);
			continue;
		}
		n.collectDrawings && n.inlineResources.push(Object.freeze({
			placement: t.placement,
			source: Object.freeze({
				...e.source,
				path: Object.freeze([...e.source.path, t.runIndex])
			}),
			pointToPage: r.pointToPage,
			clips: r.clips,
			paintOrderIndex: r.paintOrderIndex,
			sourceOrder: n.drawingSourceOrder++
		}));
	}
	for (let t of e.textBoxes) a.has(t.id) || cf(t, r, n);
}
function ff(e, t, n) {
	let r = af(t, e.clipBounds);
	for (let t of e.rows) for (let e of t.cells) {
		let t = "visualMergeOwnership" in e && e.visualMergeOwnership === "continuation";
		if (e.verticalMerge === "continue" && !t) continue;
		let i = af(r, e.clipBounds);
		for (let t of e.blocks) {
			let r = t.layout;
			pf(r, of(r, {
				xPt: e.contentBounds.xPt + (r.kind === "table" ? r.flowBounds.xPt : 0),
				yPt: e.flowBounds.yPt + t.offsetPt + (r.kind === "table" ? r.flowBounds.yPt : 0)
			}, i), n);
		}
	}
	for (let i of e.resolvedFloatingTables ?? []) pf(i.child, of(i.child, {
		xPt: i.xPt - t.layoutTranslationPt.xPt,
		yPt: i.yPt - t.layoutTranslationPt.yPt
	}, r), n);
}
function pf(e, t, n) {
	switch (e.kind) {
		case "paragraph":
			df(e, t, n);
			return;
		case "table":
			ff(e, t, n);
			return;
		case "note":
			for (let r of e.story.blocks) pf(r, af(t, e.story.clipBounds), n);
			return;
		case "textbox":
			cf(e, t, n);
			return;
		case "drawing": {
			let r = n.drawingEntries.get(e.id);
			lf(new Map((r?.textBoxes ?? []).map((e) => [e.id, e])), e, t, n);
			return;
		}
		default: throw Error(`Unknown text-index node: ${String(e)}`);
	}
}
function mf(e, t, n) {
	let r = e.pages[t];
	if (!r) throw RangeError(`Page index ${t} is out of range`);
	let i = new Map(r.layers.roots.map((e) => [e.node.id, e])), a = tf(r), o = new Map(r.layers.roots.map((e) => [e.node.id, nf(a, e)])), s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
	for (let [e, t] of r.layers.paintOrder.entries()) t.kind === "drawing" && s.set(t.node.id, t), t.kind === "drawing" ? c.set(t.node.id, e) : l.set(t.node.id, e);
	let u = {
		...n,
		collectCompletedParagraphSources: n.collectCompletedParagraphSources === !0,
		collectRasterPaintOccurrences: n.collectRasterPaintOccurrences === !0,
		drawingEntries: s,
		rootPointToPage: o,
		rootPaintOrder: l,
		drawingPaintOrder: c,
		emittedTextBoxes: /* @__PURE__ */ new Set(),
		emittedDrawings: /* @__PURE__ */ new Set(),
		runs: [],
		sourceRuns: /* @__PURE__ */ new Map(),
		completedParagraphSources: /* @__PURE__ */ new Set(),
		drawings: [],
		inlineResources: [],
		rasterPaintOccurrences: [],
		emittedRasterDrawings: /* @__PURE__ */ new Set(),
		drawingSourceOrder: 0
	}, d = u.collectRasterPaintOccurrences ? r.layers.roots.map(({ node: e }) => e.id) : r.readingOrder;
	for (let e of d) {
		let t = i.get(e);
		if (!t) throw Error(`Reading-order node ${e} is not a page root`);
		let n = o.get(e);
		if (!n) throw Error(`Reading-order node ${e} has no page projection`);
		pf(t.node, {
			pointToPage: n,
			layoutTranslationPt: {
				xPt: 0,
				yPt: 0
			},
			rootNodeId: t.node.id,
			paintOrderIndex: l.get(t.node.id) ?? -1,
			clips: Xd
		}, u);
	}
	return u;
}
function hf(e, t) {
	return Object.freeze(mf(e, t, {
		collectTextRuns: !0,
		collectTextRunSources: !1,
		collectDrawings: !1
	}).runs);
}
function gf(e) {
	let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set();
	for (let r = 0; r < e.pages.length; r += 1) {
		let i = mf(e, r, {
			collectTextRuns: !1,
			collectTextRunSources: !0,
			collectCompletedParagraphSources: !0,
			collectDrawings: !1
		});
		for (let [e, n] of i.sourceRuns) {
			let r = t.get(e) ?? /* @__PURE__ */ new Set();
			t.has(e) || t.set(e, r);
			for (let e of n) r.add(e);
		}
		for (let e of i.completedParagraphSources) n.add(e);
	}
	return Object.freeze({
		renderedRunIndex: t,
		completedSourceKeys: n
	});
}
function _f(e, t) {
	let n = mf(e, t, {
		collectTextRuns: !1,
		collectTextRunSources: !1,
		collectDrawings: !0
	}), r = [...n.drawings, ...n.inlineResources];
	return r.sort((e, t) => e.paintOrderIndex - t.paintOrderIndex || e.sourceOrder - t.sourceOrder), Object.freeze(r);
}
function vf(e, t) {
	return Object.freeze(mf(e, t, {
		collectTextRuns: !1,
		collectTextRunSources: !1,
		collectDrawings: !1,
		collectRasterPaintOccurrences: !0
	}).rasterPaintOccurrences);
}
//#endregion
//#region packages/docx/src/paint/affine.ts
function yf(e) {
	let t = Math.hypot(e.a, e.b), n = Math.hypot(e.c, e.d), r = e.a / t, i = e.b / t, a = e.c / n, o = e.d / n;
	if (!(r === 1 && i === 0 && a === 0 && o === 1)) return r === 0 && i === 1 && a === -1 && o === 0 ? "rotate(90deg)" : r === 0 && i === -1 && a === 1 && o === 0 ? "rotate(-90deg)" : `matrix(${r}, ${i}, ${a}, ${o}, 0, 0)`;
}
//#endregion
//#region packages/docx/src/text-run-projection.ts
function bf(e, t) {
	let { placement: n } = e, r = Kd(t, n.bounds), i = n.highlightBounds ? Kd(t, n.highlightBounds) : void 0, a = Math.hypot(t.a, t.b), o = Math.hypot(t.c, t.d), s = yf(t), c = n.paintOps[0]?.letterSpacingPt ?? 0;
	return {
		source: {
			story: e.source.story,
			storyInstance: e.source.storyInstance,
			path: [...e.source.path]
		},
		...e.paragraphId === void 0 ? {} : { paragraphId: e.paragraphId },
		...n.sourceRunIndex === void 0 ? {} : { sourceRunIndex: n.sourceRunIndex },
		direction: n.direction,
		text: n.text,
		x: r.xPt,
		y: r.yPt,
		w: n.bounds.widthPt * a,
		h: n.bounds.heightPt * o,
		...n.highlightBounds && i ? { highlightBounds: Object.freeze({
			x: i.xPt,
			y: i.yPt,
			width: n.highlightBounds.widthPt * a,
			height: n.highlightBounds.heightPt * o
		}) } : {},
		fontSize: n.fontSizePt * o,
		font: ot(n.fontRoute, n.fontSizePt * o, n.fontWeight, n.fontStyle),
		...c === 0 ? {} : { letterSpacingPx: c * a },
		...s ? { transform: s } : {},
		...n.hyperlink ? { hyperlink: n.hyperlink } : {},
		...n.tateChuYoko ? { eastAsianVert: !0 } : {}
	};
}
function xf(e, t, n) {
	if (!Number.isFinite(n.scale) || n.scale <= 0) throw RangeError(`Text projection scale must be positive: ${n.scale}`);
	let r = Ud(n.scale);
	return hf(e, t).map((e) => bf(e, Hd(r, e.pointToPage)));
}
function Sf(e, t, n) {
	let r = Vd(e, {
		currentDate: n.currentDate,
		defaultCurrentDateMs: n.defaultCurrentDateMs,
		showTrackedChanges: n.showTrackedChanges
	}, t), i = (n.width ?? r.page.geometry.widthPt * 1.3333333333333333) / r.page.geometry.widthPt;
	return xf(r.layout, t, { scale: i });
}
//#endregion
//#region packages/docx/src/paint/browser-images.ts
function Cf(e, t, n) {
	return `${e}${t ? `|clr:${t}` : ""}${n ? `|duo:${n.clr1}:${n.clr2}` : ""}`;
}
function wf(e) {
	return e.cacheKey ?? Cf(e.imagePath, e.colorReplaceFrom, e.duotone);
}
var Tf = "docx-color-effects";
function Ef(e, t) {
	let n = parseInt(t.slice(0, 2), 16), r = parseInt(t.slice(2, 4), 16), i = parseInt(t.slice(4, 6), 16);
	for (let t = 0; t < e.data.length; t += 4) e.data[t] === n && e.data[t + 1] === r && e.data[t + 2] === i && (e.data[t + 3] = 0);
}
async function Df(e, t, n, r, i) {
	let a = async (n) => {
		if (t) throw n instanceof Error ? n : /* @__PURE__ */ Error("2D canvas is unavailable for image color effects");
		if (r) return null;
		let a = Ye(e.width, e.height, i?.targetWidthPx, i?.targetHeightPx);
		if (!a) return e;
		if (typeof createImageBitmap > "u") throw Error("createImageBitmap is unavailable for duotone fallback resampling");
		return createImageBitmap(e, a);
	};
	if (typeof OffscreenCanvas > "u") return a();
	let o, s;
	try {
		o = new OffscreenCanvas(e.width, e.height), s = o.getContext("2d");
	} catch (e) {
		return a(e);
	}
	if (!s) return a();
	s.drawImage(e, 0, 0);
	let c;
	try {
		c = s.getImageData(0, 0, e.width, e.height);
	} catch (e) {
		return a(e);
	}
	if (t && Ef(c, t), n) try {
		ce(c, n.clr1, n.clr2);
	} catch {
		if (r) return null;
	}
	s.putImageData(c, 0, 0);
	let l = Ye(e.width, e.height, i?.targetWidthPx, i?.targetHeightPx);
	return l ? createImageBitmap(o, l) : createImageBitmap(o);
}
async function Of(e, t, n, r, i = 0, a = 0, o, s = !1, c, l, u) {
	let d = Math.floor(Ke / (n || o ? 4 : 1)), f = Number.isSafeInteger(u) && (u ?? 0) > 0 ? Math.min(d, u) : d, p = n || o ? k(r, Tf) : void 0, m = {
		widthPt: i,
		heightPt: a,
		suppressBoundaryFrame: !0,
		tiff: c,
		maxRetainedPixels: f,
		...l ?? {}
	}, h = await ue(e, t, r, { ...m });
	if (!h) return null;
	if (!n && !o) return h;
	let g = await ve(e, t, r, m, p, h), _ = Ye(h.width, h.height, l?.targetWidthPx, l?.targetHeightPx), v = _ ? `|resize:${_.resizeWidth}x${_.resizeHeight}` : "";
	return oe(Tf, `${Cf(g, n, o)}${v}${s ? "|strict" : ""}`, r, async () => {
		let e = await Df(h, n, o, s, l);
		return {
			bitmap: e,
			owned: e !== null && e !== h
		};
	}, p);
}
function kf(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
	for (let e of t) {
		if (e.resourceKind !== "image" && e.resourceKind !== "picture-bullet" || !Number.isFinite(e.widthPt) || e.widthPt <= 0 || !Number.isFinite(e.heightPt) || e.heightPt <= 0) continue;
		let t = `${e.resourceKind}:${e.resourceKey}`, n = i.get(t);
		i.set(t, {
			widthPt: Math.max(n?.widthPt ?? 0, e.widthPt),
			heightPt: Math.max(n?.heightPt ?? 0, e.heightPt)
		});
	}
	let a = e.filter((e) => e.kind === "image" || e.kind === "picture-bullet").sort((e, t) => (e.documentOrder ?? 2 ** 53 - 1) - (t.documentOrder ?? 2 ** 53 - 1));
	for (let e of a) {
		let t = i.get(`${e.kind}:${e.resourceKey}`);
		if (!t) continue;
		let a = Le(e.mimeType, e.srcRect, t.widthPt, t.heightPt);
		if (!a) continue;
		let o = {
			imagePath: e.partPath,
			mimeType: e.mimeType,
			...e.svgImagePath === void 0 ? {} : { svgImagePath: e.svgImagePath },
			...e.colorReplaceFrom === void 0 ? {} : { colorReplaceFrom: e.colorReplaceFrom },
			...e.duotone === void 0 ? {} : { duotone: e.duotone },
			widthPt: a.widthPt,
			heightPt: a.heightPt,
			hasCrop: e.srcRect != null
		}, s = n === void 0 ? null : Ie(t.widthPt * n, t.heightPt * n, e.srcRect);
		s && (o.targetWidthPx = s.width, o.targetHeightPx = s.height);
		let c = wf(o), l = r.get(c);
		l ? (l.widthPt = Math.max(l.widthPt, o.widthPt), l.heightPt = Math.max(l.heightPt, o.heightPt), l.hasCrop ||= o.hasCrop, l.targetWidthPx = Math.max(l.targetWidthPx ?? 0, o.targetWidthPx ?? 0) || void 0, l.targetHeightPx = Math.max(l.targetHeightPx ?? 0, o.targetHeightPx ?? 0) || void 0) : r.set(c, o);
	}
	let o = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
	for (let e of t) {
		if (e.resourceKind !== "chart") continue;
		let t = s.get(e.resourceKey) ?? [];
		s.has(e.resourceKey) || s.set(e.resourceKey, t), t.push(e);
	}
	for (let t of e) if (t.kind === "chart") for (let e of s.get(t.resourceKey) ?? []) {
		if (!Number.isFinite(e.widthPt) || e.widthPt <= 0 || !Number.isFinite(e.heightPt) || e.heightPt <= 0) continue;
		let i = {
			widthPt: e.widthPt,
			heightPt: e.heightPt,
			targetWidthPx: n === void 0 ? void 0 : e.widthPt * n,
			targetHeightPx: n === void 0 ? void 0 : e.heightPt * n
		}, a = Be(t.model).map((e) => ({
			usage: e,
			size: ze(e, i)
		}));
		if (!a.some(({ size: e }) => e === null)) for (let { usage: e, size: t } of a) {
			if (!t) continue;
			let n = e.fill, i = Le(n.mimeType, n.srcRect, t.widthPt, t.heightPt);
			if (!i) continue;
			let a = {
				cacheKey: We(n),
				imagePath: n.imagePath,
				mimeType: n.mimeType,
				...n.svgImagePath === void 0 ? {} : { svgImagePath: n.svgImagePath },
				...n.duotone === void 0 ? {} : { duotone: n.duotone },
				widthPt: i.widthPt,
				heightPt: i.heightPt,
				hasCrop: n.srcRect != null,
				failClosedOnDuotoneFailure: !0,
				...!e.preserveNaturalSize && t.targetWidthPx && t.targetHeightPx ? {
					targetWidthPx: t.targetWidthPx,
					targetHeightPx: t.targetHeightPx
				} : {}
			}, s = wf(a), c = r.get(s);
			c ? (c.widthPt = Math.max(c.widthPt, a.widthPt), c.heightPt = Math.max(c.heightPt, a.heightPt), c.hasCrop ||= a.hasCrop) : r.set(s, a), e.preserveNaturalSize && o.add(s);
			let l = r.get(s);
			o.has(s) ? (l.targetWidthPx = void 0, l.targetHeightPx = void 0) : (l.targetWidthPx = Math.max(l.targetWidthPx ?? 0, a.targetWidthPx ?? 0) || void 0, l.targetHeightPx = Math.max(l.targetHeightPx ?? 0, a.targetHeightPx ?? 0) || void 0);
		}
	}
	return [...r.values()];
}
async function Af(e, t, n, r, i, a, o) {
	if (!n) return /* @__PURE__ */ new Map();
	let s = D(o), c = (e, t) => a ? _e(e, n, {
		targetWidthPx: t.targetWidthPx,
		targetHeightPx: t.targetHeightPx,
		maxRetainedPixels: t.targetWidthPx && t.targetHeightPx ? t.targetWidthPx * t.targetHeightPx : void 0,
		workerDecoder: a
	}) : _e(e, n), l = kf(e, t, i), u = xe((await Promise.all(l.map(async (e) => {
		if (!e.targetWidthPx || !e.targetHeightPx || e.colorReplaceFrom || e.duotone) return null;
		let t = e.mimeType === "image/svg+xml", i = {
			svgImagePath: e.svgImagePath,
			srcRect: e.hasCrop || null
		};
		if (t || F(i)) return null;
		if (ye(e.mimeType) && (s.resolution === "display" || s.strategy === "adaptive")) return {
			key: wf(e),
			targetWidthPx: e.targetWidthPx,
			targetHeightPx: e.targetHeightPx,
			retainedSurfaceCount: 1
		};
		let a = await P(e.imagePath, e.mimeType, n).catch(() => null);
		return !a?.dimensions || !x(a.format, r !== void 0) ? null : {
			key: wf(e),
			targetWidthPx: e.targetWidthPx,
			targetHeightPx: e.targetHeightPx,
			sourceWidthPx: a.dimensions.width,
			sourceHeightPx: a.dimensions.height,
			retainedSurfaceCount: 1
		};
	}))).filter((e) => e !== null), s);
	for (let e of l) {
		if (e.mimeType === "image/svg+xml" || !e.colorReplaceFrom && !e.duotone && F({
			svgImagePath: e.svgImagePath,
			srcRect: e.hasCrop || null
		})) continue;
		let t = u.targets.get(wf(e));
		e.targetWidthPx = t?.width, e.targetHeightPx = t?.height, e.plannedPixelLimit = t?.maxRetainedPixels;
	}
	let d = await Promise.all(l.map(async (e) => {
		try {
			let t = e.mimeType === "image/svg+xml", i = {
				svgImagePath: e.svgImagePath,
				srcRect: e.hasCrop || null
			}, a;
			if (F(i)) try {
				a = await c(i.svgImagePath, e);
			} catch (i) {
				let o = t ? await c(e.imagePath, e) : await Of(e.imagePath, e.mimeType, e.colorReplaceFrom, n, e.widthPt, e.heightPt, e.duotone, e.failClosedOnDuotoneFailure ?? !1, r, e.targetWidthPx && e.targetHeightPx ? {
					targetWidthPx: e.targetWidthPx,
					targetHeightPx: e.targetHeightPx
				} : void 0, e.plannedPixelLimit);
				if (!o) throw i;
				a = o;
			}
			else a = t ? await c(e.imagePath, e) : await Of(e.imagePath, e.mimeType, e.colorReplaceFrom, n, e.widthPt, e.heightPt, e.duotone, e.failClosedOnDuotoneFailure ?? !1, r, e.targetWidthPx && e.targetHeightPx ? {
				targetWidthPx: e.targetWidthPx,
				targetHeightPx: e.targetHeightPx
			} : void 0, e.plannedPixelLimit);
			return a == null ? null : [wf(e), a];
		} catch (t) {
			if (y(t, "tiff")) return [wf(e), t];
			throw t;
		}
	})), f = /* @__PURE__ */ new Map();
	for (let e of d) e && f.set(e[0], e[1]);
	return f;
}
//#endregion
//#region packages/docx/src/paint/column-separator-raster.ts
function jf(e, t) {
	return Math.round(e * t) / t;
}
function Mf(e, t, n) {
	let r = e * t;
	return (n % 2 == 0 ? Math.round(r) : Math.round(r - .5) + .5) / t;
}
function Nf(e, t, n) {
	let r = t * n, i = Math.max(1, Math.round(.5 * t)), a = Math.max(1, Math.round(i * n)), o = a / r;
	if (e.start.xPt === e.end.xPt) {
		let t = Mf(e.start.xPt, r, a);
		return {
			segment: {
				start: {
					xPt: t,
					yPt: jf(e.start.yPt, r)
				},
				end: {
					xPt: t,
					yPt: jf(e.end.yPt, r)
				}
			},
			widthPt: o
		};
	}
	if (e.start.yPt === e.end.yPt) {
		let t = Mf(e.start.yPt, r, a);
		return {
			segment: {
				start: {
					xPt: jf(e.start.xPt, r),
					yPt: t
				},
				end: {
					xPt: jf(e.end.xPt, r),
					yPt: t
				}
			},
			widthPt: o
		};
	}
	return {
		segment: e,
		widthPt: o
	};
}
//#endregion
//#region packages/docx/src/paint/canvas-resource.ts
function Pf(e, t, n, r, i) {
	if (r !== "upright-physical") {
		i.resources.paint(e, t, n, i.ctx);
		return;
	}
	let { ctx: a } = i;
	a.save(), a.translate(n.xPt + n.widthPt / 2, n.yPt + n.heightPt / 2), a.rotate(-Math.PI / 2), i.resources.paint(e, t, {
		xPt: -n.heightPt / 2,
		yPt: -n.widthPt / 2,
		widthPt: n.heightPt,
		heightPt: n.widthPt
	}, a), a.restore();
}
//#endregion
//#region packages/docx/src/paint/canvas-drawing.ts
function Ff(e, t) {
	for (let n of e.commands) {
		if (n.kind === "noop") continue;
		if (n.kind === "drawingml-shape") {
			bt(t.ctx, n.plan, 1);
			continue;
		}
		if (n.kind === "drawingml-image-fill") {
			if (!t.resources) throw Error(`Missing retained resource painter for ${n.resourceKey}`);
			let { x: e, y: r, w: i, h: a } = n.plan.rect, o = n.fillRect ?? {
				l: 0,
				t: 0,
				r: 0,
				b: 0
			}, s = {
				xPt: e + o.l * i,
				yPt: r + o.t * a,
				widthPt: i * (1 - o.l - o.r),
				heightPt: a * (1 - o.t - o.b)
			};
			s.widthPt > 0 && s.heightPt > 0 && ft(t.ctx, n.plan, () => {
				pt(t.ctx, n.plan), Pf(n.resourceKey, "image", s, void 0, t);
			}), bt(t.ctx, n.plan, 1);
			continue;
		}
		if (n.kind === "resource") {
			if (!t.resources) throw Error(`Missing retained resource painter for ${n.resourceKey}`);
			Pf(n.resourceKey, n.resourceKind, n.rect, n.orientation, t);
			continue;
		}
		if (n.kind === "fill-rect") {
			t.ctx.fillStyle = n.fill, t.ctx.fillRect(n.rect.xPt, n.rect.yPt, n.rect.widthPt, n.rect.heightPt);
			continue;
		}
		if (n.kind === "stroke-rect") {
			t.ctx.strokeStyle = n.stroke, t.ctx.lineWidth = n.lineWidthPt, t.ctx.setLineDash([...n.dashPt]), t.ctx.strokeRect(n.rect.xPt, n.rect.yPt, n.rect.widthPt, n.rect.heightPt), t.ctx.setLineDash([]);
			continue;
		}
		if (n.kind === "watermark-text") {
			let e = Ve(n.fill, t.ctx, n.rect.xPt, n.rect.yPt, n.rect.widthPt, n.rect.heightPt);
			if (e === null) continue;
			t.ctx.save();
			let r = n.rect.xPt + n.rect.widthPt / 2, i = n.rect.yPt + n.rect.heightPt / 2;
			t.ctx.translate(r, i), n.rotationDeg !== 0 && t.ctx.rotate(n.rotationDeg * Math.PI / 180), n.fitShape ? (t.ctx.scale(n.rect.widthPt / n.sourceBounds.widthPt, n.rect.heightPt / n.sourceBounds.heightPt), t.ctx.translate(-(n.sourceBounds.xPt + n.sourceBounds.widthPt / 2), -(n.sourceBounds.yPt + n.sourceBounds.heightPt / 2))) : t.ctx.translate(n.rect.xPt - r - n.sourceBounds.xPt, n.rect.yPt - i - n.sourceBounds.yPt), t.ctx.globalAlpha *= n.opacity, t.ctx.fillStyle = e, t.ctx.textAlign = "left", t.ctx.textBaseline = "alphabetic";
			let a = 0;
			for (let e of n.spans) t.ctx.font = ot(e.fontRoute, n.fontSizePt, e.fontWeight, e.fontStyle), t.ctx.fillText(e.text, a, 0), a += e.advancePt;
			t.ctx.restore();
			continue;
		}
		t.ctx.fillStyle = n.fill, t.ctx.font = ot(n.fontRoute, n.fontSizePt, n.fontWeight, n.fontStyle), t.ctx.textAlign = n.align === "start" ? "left" : n.align === "end" ? "right" : "center", t.ctx.textBaseline = n.baseline;
		let e = n.align === "start" ? n.rect.xPt : n.align === "end" ? n.rect.xPt + n.rect.widthPt : n.rect.xPt + n.rect.widthPt / 2, r = n.baseline === "top" ? n.rect.yPt : n.baseline === "bottom" ? n.rect.yPt + n.rect.heightPt : n.rect.yPt + n.rect.heightPt / 2;
		t.ctx.fillText(n.text, e, r);
	}
}
//#endregion
//#region packages/docx/src/paint/canvas-border.ts
function If(e, t, n) {
	let r = e === "triple", i = /^(thinThick|thickThin|thinThickThin)(Small|Medium|Large)Gap$/.exec(e);
	if (!r && !i) return null;
	let a = r ? [
		1,
		1,
		1
	] : i?.[1] === "thinThick" ? [1, 2] : i?.[1] === "thickThin" ? [2, 1] : [
		1,
		2,
		1
	], o = r || i?.[2] === "Small" ? 1 : i?.[2] === "Medium" ? 2 : 3, s = t / (a.reduce((e, t) => e + t, 0) + o * (a.length - 1)), c = a.map((e) => Math.max(1, Math.round(s * e * n))), l = Math.max(1, Math.round(s * o * n)), u = 0;
	return {
		bands: c.map((e, t) => {
			let n = {
				offsetDev: u,
				widthDev: e
			};
			return u += e + (t < c.length - 1 ? l : 0), n;
		}),
		spanDev: u
	};
}
function Lf(e) {
	return [...e.bands].reverse().map((t) => ({
		offsetDev: e.spanDev - t.offsetDev - t.widthDev,
		widthDev: t.widthDev
	}));
}
function Rf(e, t, n) {
	if (t.style !== "compound") return !1;
	let r = n.pointToCss ?? Ud(n.scale);
	if (r.b !== 0 || r.c !== 0 || r.a <= 0 || r.d <= 0) return !1;
	let i = Kd(r, {
		xPt: e.xPt,
		yPt: e.yPt
	}), a = Kd(r, {
		xPt: e.xPt + e.widthPt,
		yPt: e.yPt + e.heightPt
	}), o = If(t.authoredStyle, t.widthPt * r.d, n.dpr), s = If(t.authoredStyle, t.widthPt * r.a, n.dpr);
	if (!o || !s || o.bands.length !== s.bands.length) return !1;
	let c = Lf(o), l = Lf(s), u = (e, t, i, a) => {
		let o = [
			{
				xPt: e,
				yPt: t
			},
			{
				xPt: e + i,
				yPt: t
			},
			{
				xPt: e,
				yPt: t + a
			},
			{
				xPt: e + i,
				yPt: t + a
			}
		].map((e) => qd(r, e));
		if (o.some((e) => e === null)) return !1;
		let s = o.filter((e) => e !== null), c = s.map((e) => e.xPt), l = s.map((e) => e.yPt);
		return n.ctx.fillRect(Math.min(...c), Math.min(...l), Math.max(...c) - Math.min(...c), Math.max(...l) - Math.min(...l)), !0;
	}, d = Math.round(i.xPt * n.dpr - s.spanDev / 2), f = Math.round(a.xPt * n.dpr + s.spanDev / 2), p = Math.round(i.yPt * n.dpr - o.spanDev / 2), m = Math.round(a.yPt * n.dpr + o.spanDev / 2);
	n.ctx.fillStyle = t.color;
	for (let e = 0; e < c.length; e += 1) {
		let t = c[e], r = l[e], i = d + r.offsetDev, a = f - r.offsetDev, o = p + t.offsetDev, s = m - t.offsetDev, h = i / n.dpr, g = a / n.dpr, _ = o / n.dpr, v = s / n.dpr, y = r.widthDev / n.dpr, b = t.widthDev / n.dpr;
		if (!u(h, _, g - h, b) || !u(h, v - b, g - h, b) || !u(h, _, y, v - _) || !u(g - y, _, y, v - _)) return !1;
	}
	return n.ctx.setLineDash([]), !0;
}
function zf(e) {
	return 1 / e.dpr;
}
function Bf(e, t, n = 0) {
	let r = n / t.scale, i = r > e.widthPt ? {
		...e,
		widthPt: r,
		...typeof e.authoredStyle == "string" ? { dashPatternPt: Object.freeze(Re(e.authoredStyle, r)) } : {}
	} : e, { ctx: a } = t;
	a.strokeStyle = i.color, a.lineWidth = i.widthPt, a.setLineDash("dashPatternPt" in i && i.dashPatternPt ? [...i.dashPatternPt] : []), a.beginPath();
	let o = "path" in i && i.path?.length ? i.path : [i.from, i.to], s = o.length === 2 && (o[0].xPt === o[1].xPt || o[0].yPt === o[1].yPt), c = s && o[0].yPt === o[1].yPt, l = s && o[0].xPt === o[1].xPt, u = t.pointToCss ?? Ud(t.scale), d = o.map((e) => Kd(u, e)), f = s ? o[1].xPt - o[0].xPt : 0, p = s ? o[1].yPt - o[0].yPt : 0, m = u.a * f + u.c * p, h = u.b * f + u.d * p, g = s && h === 0, v = s && m === 0, y = c ? Math.hypot(u.c, u.d) : l ? Math.hypot(u.a, u.b) : 0, b = i.style === "compound" && s && y > 0 ? If(i.authoredStyle, i.widthPt * y, t.dpr) : null;
	if (b) {
		a.fillStyle = i.color;
		let e = (e, t, n, r) => {
			let i = [
				{
					xPt: e,
					yPt: t
				},
				{
					xPt: e + n,
					yPt: t
				},
				{
					xPt: e,
					yPt: t + r
				},
				{
					xPt: e + n,
					yPt: t + r
				}
			].map((e) => qd(u, e));
			if (i.some((e) => e === null)) return;
			let o = i.filter((e) => e !== null), s = o.map((e) => e.xPt), c = o.map((e) => e.yPt);
			a.fillRect(Math.min(...s), Math.min(...c), Math.max(...s) - Math.min(...s), Math.max(...c) - Math.min(...c));
		}, n = Math.round((g ? d[0].yPt : d[0].xPt) * t.dpr - b.spanDev / 2);
		for (let r of b.bands) {
			let i = (n + r.offsetDev) / t.dpr, s = r.widthDev / t.dpr;
			if (g) e(Math.min(d[0].xPt, d[1].xPt), i, Math.abs(m), s);
			else if (v) e(i, Math.min(d[0].yPt, d[1].yPt), s, Math.abs(h));
			else {
				let e = (r.offsetDev - b.spanDev / 2) / t.dpr / y, n = r.widthDev / t.dpr / y;
				c ? a.fillRect(Math.min(o[0].xPt, o[1].xPt), o[0].yPt + e, Math.abs(o[1].xPt - o[0].xPt), n) : a.fillRect(o[0].xPt + e, Math.min(o[0].yPt, o[1].yPt), n, Math.abs(o[1].yPt - o[0].yPt));
			}
		}
		a.setLineDash([]);
		return;
	}
	if (i.style === "double" && s && y > 0) {
		if (a.fillStyle = i.color, g || v) {
			let e = (e, t, n, r) => {
				let i = [
					{
						xPt: e,
						yPt: t
					},
					{
						xPt: e + n,
						yPt: t
					},
					{
						xPt: e,
						yPt: t + r
					},
					{
						xPt: e + n,
						yPt: t + r
					}
				].map((e) => qd(u, e));
				if (i.some((e) => e === null)) return;
				let o = i.filter((e) => e !== null), s = o.map((e) => e.xPt), c = o.map((e) => e.yPt);
				a.fillRect(Math.min(...s), Math.min(...c), Math.max(...s) - Math.min(...s), Math.max(...c) - Math.min(...c));
			}, { railDev: n, gapDev: r, spanDev: o } = Ae(i.widthPt * y, t.dpr), s = n / t.dpr;
			if (g) {
				let i = Math.round(d[0].yPt * t.dpr - o / 2), a = Math.min(d[0].xPt, d[1].xPt), c = Math.abs(d[1].xPt - d[0].xPt);
				e(a, i / t.dpr, c, s), e(a, (i + n + r) / t.dpr, c, s);
			} else {
				let i = Math.round(d[0].xPt * t.dpr - o / 2), a = Math.min(d[0].yPt, d[1].yPt), c = Math.abs(d[1].yPt - d[0].yPt);
				e(i / t.dpr, a, s, c), e((i + n + r) / t.dpr, a, s, c);
			}
		} else {
			let { railDev: e, gapDev: n, spanDev: r } = Ae(i.widthPt * y, t.dpr), s = e / t.dpr / y, l = n / t.dpr / y, u = r / t.dpr / y;
			if (c) {
				let e = Math.min(o[0].xPt, o[1].xPt), t = Math.abs(o[1].xPt - o[0].xPt);
				a.fillRect(e, o[0].yPt - u / 2, t, s), a.fillRect(e, o[0].yPt - u / 2 + s + l, t, s);
			} else {
				let e = Math.min(o[0].yPt, o[1].yPt), t = Math.abs(o[1].yPt - o[0].yPt);
				a.fillRect(o[0].xPt - u / 2, e, s, t), a.fillRect(o[0].xPt - u / 2 + s + l, e, s, t);
			}
		}
		a.setLineDash([]);
		return;
	}
	let x = Jd(u, v && y > 0 ? {
		xPt: _(d[0].xPt, i.widthPt * y, t.dpr),
		yPt: 0
	} : g && y > 0 ? {
		xPt: 0,
		yPt: _(d[0].yPt, i.widthPt * y, t.dpr)
	} : {
		xPt: 0,
		yPt: 0
	}) ?? {
		xPt: 0,
		yPt: 0
	}, S = o[0];
	a.moveTo(S.xPt + x.xPt, S.yPt + x.yPt);
	for (let e of o.slice(1)) a.lineTo(e.xPt + x.xPt, e.yPt + x.yPt);
	let C = i.style === "wavy" && o.length > 2;
	C && (a.save(), a.lineJoin = "bevel"), a.stroke(), C && a.restore(), a.setLineDash([]);
}
//#endregion
//#region packages/docx/src/paint/deferred-paint-frame.ts
function Vf(e, t) {
	return (n) => () => {
		e.save();
		try {
			t(), n();
		} finally {
			e.restore();
		}
	};
}
//#endregion
//#region packages/docx/src/paint/canvas-table.ts
function Hf(e, t) {
	let n = t.pointToCss ?? Ud(t.scale);
	if (n.b !== 0 || n.c !== 0) return e;
	let r = [
		{
			xPt: e.xPt,
			yPt: e.yPt
		},
		{
			xPt: e.xPt + e.widthPt,
			yPt: e.yPt
		},
		{
			xPt: e.xPt,
			yPt: e.yPt + e.heightPt
		},
		{
			xPt: e.xPt + e.widthPt,
			yPt: e.yPt + e.heightPt
		}
	].map((e) => Kd(n, e)), i = r.map((e) => e.xPt), a = r.map((e) => e.yPt), o = Math.floor(Math.min(...i) * t.dpr) / t.dpr, s = Math.floor(Math.min(...a) * t.dpr) / t.dpr, c = Math.ceil(Math.max(...i) * t.dpr) / t.dpr, l = Math.ceil(Math.max(...a) * t.dpr) / t.dpr, u = [
		{
			xPt: o,
			yPt: s
		},
		{
			xPt: c,
			yPt: s
		},
		{
			xPt: o,
			yPt: l
		},
		{
			xPt: c,
			yPt: l
		}
	].map((e) => qd(n, e));
	if (u.some((e) => e === null)) return e;
	let d = u.filter((e) => e !== null), f = d.map((e) => e.xPt), p = d.map((e) => e.yPt);
	return {
		xPt: Math.min(...f),
		yPt: Math.min(...p),
		widthPt: Math.max(...f) - Math.min(...f),
		heightPt: Math.max(...p) - Math.min(...p)
	};
}
function Uf(e, t, n, r = !0) {
	let i = t.xPt - e.flowBounds.xPt, a = t.yPt - e.flowBounds.yPt, o = n.layoutTranslationPt ?? {
		xPt: 0,
		yPt: 0
	}, s = Hd(n.pointToCss ?? Ud(n.scale), Wd(i, a)), c = Vf(n.ctx, () => n.ctx.translate(i, a)), l = {
		...n,
		pointToCss: s,
		layoutTranslationPt: {
			xPt: o.xPt + i,
			yPt: o.yPt + a
		}
	};
	c(() => {
		e.kind === "paragraph" ? op(e, l) : qf(e, l, e.resolvedFloatingTables ?? [], r);
	})();
}
function Wf(e, t) {
	let n = zf(t), r = /* @__PURE__ */ new Set();
	for (let n of e.compoundBorderFrames ?? []) Rf(n.bounds, n.border, t) && n.segmentIndexes.forEach((e) => r.add(e));
	e.borders.forEach((e, i) => {
		r.has(i) || Bf(e, t, n);
	});
}
function Gf(e, t, n) {
	let r = t.xPt - e.flowBounds.xPt, i = t.yPt - e.flowBounds.yPt, a = n.layoutTranslationPt ?? {
		xPt: 0,
		yPt: 0
	}, o = Hd(n.pointToCss ?? Ud(n.scale), Wd(r, i)), s = Vf(n.ctx, () => n.ctx.translate(r, i)), c = {
		...n,
		pointToCss: o,
		layoutTranslationPt: {
			xPt: a.xPt + r,
			yPt: a.yPt + i
		}
	};
	s(() => {
		let t = () => Wf(e, c);
		if (!e.clipBounds) {
			t();
			return;
		}
		Vf(n.ctx, () => {
			n.ctx.beginPath(), n.ctx.rect(e.clipBounds.xPt, e.clipBounds.yPt, e.clipBounds.widthPt, e.clipBounds.heightPt), n.ctx.clip();
		})(t)();
	})();
}
function Kf(e, t, n, r) {
	for (let n of e.rows) for (let e of n.cells) {
		let n = "visualMergeOwnership" in e && e.visualMergeOwnership === "continuation";
		if (e.verticalMerge === "continue" && !n) continue;
		e.background && (t.ctx.fillStyle = e.background.color, t.ctx.fillRect(e.flowBounds.xPt, e.flowBounds.yPt, e.flowBounds.widthPt, e.flowBounds.heightPt));
		let r = (t, n = !0) => {
			for (let r of e.blocks) Uf(r.layout, {
				xPt: e.contentBounds.xPt + (r.layout.kind === "table" ? r.layout.flowBounds.xPt : 0),
				yPt: e.flowBounds.yPt + r.offsetPt + (r.layout.kind === "table" ? r.layout.flowBounds.yPt : 0)
			}, t, r.layout.kind !== "table" || n);
		};
		if (!e.clipBounds) {
			r(t);
			continue;
		}
		if (Vf(t.ctx, () => {
			t.ctx.beginPath(), t.ctx.rect(e.clipBounds.xPt, e.clipBounds.yPt, e.clipBounds.widthPt, e.clipBounds.heightPt), t.ctx.clip();
		})(() => r(t, !1))(), e.blocks.some((e) => e.layout.kind === "table")) {
			let n = Hf(e.clipBounds, t);
			Vf(t.ctx, () => {
				t.ctx.beginPath(), t.ctx.rect(n.xPt, n.yPt, n.widthPt, n.heightPt), t.ctx.clip();
			})(() => {
				for (let n of e.blocks) n.layout.kind === "table" && Gf(n.layout, {
					xPt: e.contentBounds.xPt + n.layout.flowBounds.xPt,
					yPt: e.flowBounds.yPt + n.offsetPt + n.layout.flowBounds.yPt
				}, t);
			})();
		}
	}
	Yf(n, t), r && Wf(e, t);
}
function qf(e, t, n, r) {
	if (!e.clipBounds) {
		Kf(e, t, n, r);
		return;
	}
	let i = e.clipBounds;
	Vf(t.ctx, () => {
		t.ctx.beginPath(), t.ctx.rect(i.xPt, i.yPt, i.widthPt, i.heightPt), t.ctx.clip();
	})(() => Kf(e, t, n, r))();
}
function Jf(e, t, n) {
	qf(e, t, n ?? e.resolvedFloatingTables ?? [], !0);
}
function Yf(e, t) {
	let n = t.layoutTranslationPt ?? {
		xPt: 0,
		yPt: 0
	};
	for (let r of e) Uf(r.child, {
		xPt: r.xPt - n.xPt,
		yPt: r.yPt - n.yPt
	}, t);
}
//#endregion
//#region packages/docx/src/paint/canvas-transform.ts
function Xf(e, t) {
	let n = e.transform;
	if (n) {
		n.call(e, t.a, t.b, t.c, t.d, t.e, t.f);
		return;
	}
	if (e.translate(t.e, t.f), t.a === 0 && t.b === 1 && t.c === -1 && t.d === 0) e.rotate(Math.PI / 2);
	else if (t.a === 0 && t.b === -1 && t.c === 1 && t.d === 0) e.rotate(-Math.PI / 2);
	else if (t.b === 0 && t.c === 0) e.scale(t.a, t.d);
	else throw Error("Canvas context cannot apply the retained point-space transform");
}
//#endregion
//#region packages/docx/src/paint/canvas-text.ts
function Zf(e) {
	if (e.text.length !== e.range.end - e.range.start) throw Error("UTF-16 text range is inconsistent");
	if (e.clusters.length === 0) throw Error("Retained glyph slices are incomplete (clusters)");
	let t = e.range.start;
	for (let n of e.clusters) {
		let { advancePt: r, offset: i, range: a } = n;
		if (!Number.isFinite(r) || !Number.isFinite(i.xPt) || !Number.isFinite(i.yPt) || a.start !== t || a.end <= a.start || a.end > e.range.end) throw Error(`Retained glyph slices are incomplete (cluster range ${t}:${a.start}-${a.end}/${e.range.end}; advance ${r}; offset ${i.xPt},${i.yPt})`);
		t = a.end;
	}
	if (t !== e.range.end) throw Error(`Retained glyph slices are incomplete (cluster end ${t}/${e.range.end})`);
	if (e.paintOps.length === 0) throw Error("Retained glyph slices are incomplete (paint ops)");
	let n = e.range.start;
	for (let t of e.paintOps) {
		let r = t.sourceMapping !== "kashida" && t.text.length !== t.range.end - t.range.start, i = !Number.isFinite(t.offset.xPt) || !Number.isFinite(t.offset.yPt) || t.glyphOffsetPt !== void 0 && (!Number.isFinite(t.glyphOffsetPt.xPt) || !Number.isFinite(t.glyphOffsetPt.yPt)) || t.blockAxisInkBounds !== void 0 && (!Number.isFinite(t.blockAxisInkBounds.startPt) || !Number.isFinite(t.blockAxisInkBounds.endPt) || t.blockAxisInkBounds.endPt < t.blockAxisInkBounds.startPt) || !Number.isFinite(t.letterSpacingPt) || !Number.isFinite(t.scaleX) || t.scaleX <= 0 || t.scaleY !== void 0 && (!Number.isFinite(t.scaleY) || t.scaleY <= 0), a = t.range.start !== n || t.range.end <= t.range.start || t.range.end > e.range.end;
		if (r || i || a) throw Error(`Retained glyph slices are incomplete (${r ? "text" : i ? "geometry" : `range ${n}:${t.range.start}-${t.range.end}/${e.range.end}`})`);
		n = t.range.end;
	}
	let r = e.text.slice(n - e.range.start);
	if (r !== "" && !/^\s+$/u.test(r)) throw Error(`Retained glyph slices are incomplete (paint end ${n}/${e.range.end})`);
}
function Qf(e, t) {
	return e.kind === "explicit" ? e.color : e.kind === "auto" ? Ue(e.background ?? "#FFFFFF") : t.defaultTextColor ?? "#000000";
}
function $f(e, t) {
	return Qf(e.color, t);
}
function ep(e, t, n = !1) {
	let { ctx: r } = t;
	r.fillStyle = Qf(e.color, t), r.font = ot(e.fontRoute, e.fontSizePt, e.fontWeight, e.fontStyle), n ? (r.save(), r.translate(e.origin.xPt, e.origin.yPt), r.rotate(-Math.PI / 2), r.fillText(e.text, 0, 0), r.restore()) : r.fillText(e.text, e.origin.xPt, e.origin.yPt);
}
function tp(e, t) {
	let { ctx: n } = t;
	if (n.beginPath(), e.points.length > 0) {
		let t = e.points[0];
		n.moveTo(t.xPt, t.yPt);
		for (let t of e.points.slice(1)) n.lineTo(t.xPt, t.yPt);
	}
	e.stroke !== null && (n.strokeStyle = e.stroke, n.lineWidth = e.strokeWidthPt, n.stroke()), e.fill !== null && (n.fillStyle = e.fill, n.fill());
}
function np(e, t) {
	let n = new Map(e.textBoxes.map((e) => [e.id, e]));
	return (t.textBoxIds ?? []).flatMap((e) => {
		let t = n.get(e);
		return t ? [t] : [];
	});
}
function rp(e, t, n) {
	let r = n.layoutTranslationPt, i = e.anchorLayer?.horizontalOwnership === "page" ? -(r?.xPt ?? 0) : 0, a = e.anchorLayer?.verticalOwnership === "page" ? -(r?.yPt ?? 0) : 0;
	(i !== 0 || a !== 0) && (n.ctx.save(), n.ctx.translate(i, a));
	let o = (n) => {
		Ff(e, n);
		for (let e of t) sp(e, {
			...n,
			omitAnchoredDrawings: !1
		});
	};
	try {
		if (e.orientation === "upright-physical") {
			if (!e.transform) throw Error("Upright physical drawing requires its retained logical transform");
			let t = Hd(n.pointToCss ?? Ud(n.scale), e.transform);
			Vf(n.ctx, () => {
				Xf(n.ctx, e.transform);
			})(() => o({
				...n,
				pointToCss: t
			}))();
		} else o(n);
	} finally {
		(i !== 0 || a !== 0) && n.ctx.restore();
	}
}
function ip(e, t, n) {
	rp(t, np(e, t), n);
}
function ap(e, t) {
	let { ctx: n } = t, r = new Set(e.drawings.flatMap((e) => e.textBoxIds ?? [])), i = (n) => ip(e, n, t), a = e.drawings.filter((e) => e.anchorLayer?.behindDoc === !0).sort((e, t) => e.anchorLayer.relativeHeight - t.anchorLayer.relativeHeight || e.anchorLayer.sourceOrder - t.anchorLayer.sourceOrder);
	if (!t.omitAnchoredDrawings) for (let e of a) i(e);
	for (let t of e.lineNumbers ?? []) for (let e of t.paintOps) n.fillStyle = e.color, n.font = e.font, n.textAlign = e.textAlign, n.textBaseline = "alphabetic", n.fillText(e.text, e.origin.xPt, e.origin.yPt);
	e.shading && (n.fillStyle = e.shading.color, n.fillRect(e.inkBounds.xPt, e.inkBounds.yPt, e.inkBounds.widthPt, e.inkBounds.heightPt));
	for (let r of e.lines) {
		for (let e of r.barTabRules ?? []) Bf(e, t, zf(t));
		for (let e of r.placements) {
			if (e.kind === "resource") {
				if (!t.resources) throw Error(`Missing retained resource painter for ${e.resourceKey}`);
				if (t.textBoxVerticalMode) {
					let r = t.textBoxVerticalMode === "vert270" ? Math.PI / 2 : -Math.PI / 2;
					n.save(), n.translate(e.bounds.xPt + e.bounds.widthPt / 2, e.bounds.yPt + e.bounds.heightPt / 2), n.rotate(r), Pf(e.resourceKey, e.resourceKind, {
						xPt: -e.bounds.heightPt / 2,
						yPt: -e.bounds.widthPt / 2,
						widthPt: e.bounds.heightPt,
						heightPt: e.bounds.widthPt
					}, e.orientation, t), n.restore();
				} else Pf(e.resourceKey, e.resourceKind, e.bounds, e.orientation, t);
				continue;
			}
			if (e.kind === "tab") {
				if (e.leader !== "none") {
					if (!e.leaderGlyphs) throw Error("Retained tab leader geometry is missing");
					for (let n of e.leaderGlyphs) ep(n, t);
				}
				for (let n of e.decorations ?? []) Bf(n, t);
				continue;
			}
			if (e.kind !== "text") continue;
			if (Zf(e), e.unsupportedGeometry?.length) throw Error(`Unsupported retained typography geometry: ${e.unsupportedGeometry.join(", ")}`);
			if (e.highlightFragments) for (let t of e.highlightFragments) n.fillStyle = t.color, n.fillRect(t.rect.xPt, t.rect.yPt, t.rect.widthPt, t.rect.heightPt);
			else (e.background || e.highlight) && (n.fillStyle = e.highlight ?? e.background ?? "#000000", n.fillRect(e.bounds.xPt, e.bounds.yPt, e.bounds.widthPt, e.bounds.heightPt));
			n.fillStyle = $f(e, t), n.font = ot(e.fontRoute, e.fontSizePt, e.fontWeight, e.fontStyle), n.textAlign = "left", n.textBaseline = "alphabetic";
			let r = n.letterSpacing, i = n.fontKerning;
			for (let t of e.paintOps) {
				n.direction = t.direction, n.fontKerning = t.kerning;
				let r = e.origin.xPt + t.offset.xPt, i = e.origin.yPt + t.offset.yPt, a = t.glyphOffsetPt?.xPt ?? 0, o = t.glyphOffsetPt?.yPt ?? 0;
				if (t.glyphOrientation === "upright") {
					n.save(), n.translate(r, i), n.rotate(-Math.PI / 2), (t.scaleX !== 1 || t.scaleY !== void 0) && (t.writingMode === "vertical-rl" ? n.scale(1, t.scaleX) : n.scale(t.scaleX, t.scaleY ?? 1)), n.textAlign = "center", n.textBaseline = "middle", n.letterSpacing = `${t.letterSpacingPt}px`;
					let e = () => n.fillText(t.text, a, o);
					t.verticalFeature ? se(n, e) : e(), n.restore();
				} else t.glyphOrientation === "rotate" ? (n.save(), n.translate(r, i), t.scaleX !== 1 && n.scale(t.scaleX, 1), n.textAlign = "center", n.textBaseline = "middle", n.letterSpacing = `${t.letterSpacingPt / t.scaleX}px`, n.fillText(t.text, a, o), n.restore()) : t.scaleX === 1 ? (n.letterSpacing = `${t.letterSpacingPt}px`, n.fillText(t.text, r + a, i + o)) : (n.save(), n.translate(r + a, i + o), n.scale(t.scaleX, 1), n.letterSpacing = `${t.letterSpacingPt / t.scaleX}px`, n.fillText(t.text, 0, 0), n.restore());
			}
			if (n.letterSpacing = r, n.fontKerning = i, e.ruby) {
				let n = t.textBoxVerticalMode === "eaVert" || t.textBoxVerticalMode === "mongolianVert";
				for (let r of e.ruby.paintOps) ep(r, t, n);
			}
			for (let n of e.emphasis?.glyphs ?? []) ep(n, t);
			for (let n of e.emphasis?.paths ?? []) tp(n, t);
			for (let n of e.decorations) Bf(n, t);
			for (let n of e.runBorderFragments ?? []) Bf(n, t);
		}
	}
	let o = zf(t);
	for (let n of e.borders) Bf(n, t, o);
	for (let t of e.drawings.filter((e) => !e.anchorLayer)) i(t);
	let s = e.drawings.filter((e) => e.anchorLayer && !e.anchorLayer.behindDoc).sort((e, t) => e.anchorLayer.relativeHeight - t.anchorLayer.relativeHeight || e.anchorLayer.sourceOrder - t.anchorLayer.sourceOrder);
	if (!t.omitAnchoredDrawings) for (let e of s) i(e);
	for (let n of e.textBoxes) r.has(n.id) || sp(n, {
		...t,
		omitAnchoredDrawings: !1
	});
}
function op(e, t) {
	if (!e.clipBounds) {
		ap(e, t);
		return;
	}
	let n = e.clipBounds;
	Vf(t.ctx, () => {
		t.ctx.beginPath(), t.ctx.rect(n.xPt, n.yPt, n.widthPt, n.heightPt), t.ctx.clip();
	})(() => ap(e, t))();
}
function sp(e, t) {
	let n = (t) => {
		for (let n of e.story.blocks) if (n.kind === "paragraph") op(n, t);
		else if (n.kind === "table") Jf(n, t, n.resolvedFloatingTables ?? []);
		else throw Error(`Text-box story contains unsupported retained node: ${n.kind}`);
	}, r = Hd(t.pointToCss ?? Ud(t.scale), e.transform), i = e.transform.a !== 1 || e.transform.b !== 0 || e.transform.c !== 0 || e.transform.d !== 1 || e.transform.e !== 0 || e.transform.f !== 0, a = Vf(t.ctx, () => {
		i && (e.verticalMode ? (t.ctx.translate(e.transform.e, e.transform.f), t.ctx.rotate(e.verticalMode === "vert270" ? -Math.PI / 2 : Math.PI / 2)) : t.ctx.transform(e.transform.a, e.transform.b, e.transform.c, e.transform.d, e.transform.e, e.transform.f));
	}), o = e.clipBounds ? Vf(t.ctx, () => {
		t.ctx.beginPath(), t.ctx.rect(e.clipBounds.xPt, e.clipBounds.yPt, e.clipBounds.widthPt, e.clipBounds.heightPt), t.ctx.clip();
	}) : null, s = t.documentDefaultTextColor ?? t.defaultTextColor ?? "#000000", c = {
		...t,
		pointToCss: r,
		documentDefaultTextColor: s,
		defaultTextColor: e.defaultTextColor ?? s,
		...e.verticalMode ? { textBoxVerticalMode: e.verticalMode } : {}
	};
	a(() => {
		o ? o(() => n(c))() : n(c);
	})();
}
//#endregion
//#region packages/docx/src/paint/page-border.ts
function cp(e, t) {
	let n = Hd(t.pointToCss ?? Ud(t.scale), e.logicalToPhysical), r = {
		...t,
		pointToCss: n
	};
	Vf(t.ctx, () => {
		Xf(t.ctx, e.logicalToPhysical);
	})(() => {
		for (let t of e.segments) Bf(t, r, .5);
	})();
}
//#endregion
//#region packages/docx/src/paint/canvas-page.ts
var lp = Object.freeze({ paint(e, t) {
	throw Error(`Missing retained resource painter for ${e}: expected ${t}`);
} });
function up(e, t) {
	return Object.freeze({ paint(n, r, i, a) {
		switch (r) {
			case "image":
				t.image(e.resolve(n, r), i, a);
				return;
			case "chart":
				t.chart(e.resolve(n, r), i, a);
				return;
			case "math":
				t.math(e.resolve(n, r), i, a);
				return;
			case "picture-bullet":
				t["picture-bullet"](e.resolve(n, r), i, a);
				return;
			default: throw Error(`Unknown retained resource kind: ${String(r)}`);
		}
	} });
}
function dp(e, t) {
	switch (e.kind) {
		case "drawing":
			Ff(e, t);
			return;
		case "paragraph":
			op(e, t);
			return;
		case "table":
			Jf(e, t, e.resolvedFloatingTables ?? []);
			return;
		case "note": {
			e.separator.forEach((e) => Bf(e, t));
			let n = () => e.story.blocks.forEach((e) => dp(e, t));
			if (!e.story.clipBounds) {
				n();
				return;
			}
			let r = e.story.clipBounds;
			t.ctx.save();
			try {
				t.ctx.beginPath(), t.ctx.rect(r.xPt, r.yPt, r.widthPt, r.heightPt), t.ctx.clip(), n();
			} finally {
				t.ctx.restore();
			}
			return;
		}
		case "textbox": throw Error(`Unsupported page paint node kind: ${e.kind}`);
		default: throw Error(`Unknown page paint node kind: ${String(e)}`);
	}
}
function fp(e, t) {
	let n = e.columnSeparators;
	if (n.length === 0) return;
	let { ctx: r } = t;
	r.save(), r.strokeStyle = "#000000";
	for (let e of n) {
		let n = Nf(e, t.scale, t.dpr);
		r.lineWidth = n.widthPt, r.beginPath(), r.moveTo(n.segment.start.xPt, n.segment.start.yPt), r.lineTo(n.segment.end.xPt, n.segment.end.yPt), r.stroke();
	}
	r.restore();
}
function pp(e, t, n, r) {
	let i = n.get(e.flowDomainId), a = e.coordinateSpace === "upright-physical" ? void 0 : i?.coordinateSpace.logicalToPhysical, o = Vf(t.ctx, () => {
		a && (a.a !== 1 || a.b !== 0 || a.c !== 0 || a.d !== 1 || a.e !== 0 || a.f !== 0) && Xf(t.ctx, a);
	}), s = {
		...t,
		...a ? { pointToCss: {
			a: a.a * t.scale,
			b: a.b * t.scale,
			c: a.c * t.scale,
			d: a.d * t.scale,
			e: a.e * t.scale,
			f: a.f * t.scale
		} } : {}
	};
	o(() => r(s))();
}
function mp(e, t) {
	if (e.kind === "transform") {
		let n = t.transform;
		if (n) n.call(t, e.transform.a, e.transform.b, e.transform.c, e.transform.d, e.transform.e, e.transform.f);
		else if (e.transform.a === 1 && e.transform.b === 0 && e.transform.c === 0 && e.transform.d === 1) t.translate(e.transform.e, e.transform.f);
		else throw Error("Canvas context cannot apply the retained page paint transform");
		return;
	}
	t.beginPath(), t.rect(e.clip.xPt, e.clip.yPt, e.clip.widthPt, e.clip.heightPt), t.clip();
}
function hp(e, t) {
	let n = t.pointToCss ?? Ud(t.scale);
	for (let t of e.frames) t.kind === "transform" && (n = Hd(n, t.transform));
	let r = {
		...t,
		pointToCss: n,
		layoutTranslationPt: e.layoutTranslationPt,
		omitAnchoredDrawings: !1
	}, i = 0;
	try {
		for (let n of e.frames) t.ctx.save(), i += 1, mp(n, t.ctx);
		rp(e.node, e.textBoxes, r);
	} finally {
		for (; i > 0;) t.ctx.restore(), --i;
	}
}
function gp(e, t) {
	let n = new Map(e.sectionRegions.flatMap((e) => e.flowDomainIds.map((t) => [t, e]))), r = new Map(e.sectionRegions.map((e) => [e.id, e]));
	for (let t of e.flowDomains) if (t.kind === "footnote" || t.kind === "endnote") {
		let i = t.sectionRegionId ? r.get(t.sectionRegionId) : e.sectionRegions[0];
		if (!i) throw Error(`${t.id} references missing page story region ${t.sectionRegionId ?? "<default>"}`);
		n.set(t.id, i);
	}
	let i = e.layers.paintOrder, a = i.findIndex((e) => e.sourceLayer !== "background" && e.sourceLayer !== "behindText" && e.sourceLayer !== "header"), o = a === -1 ? i.length : a, s = (e) => {
		for (let r of e) pp(r, t, n, (e) => {
			r.kind === "drawing" ? hp(r, e) : dp(r.node, {
				...e,
				omitAnchoredDrawings: r.omitAnchoredDrawings
			});
		});
	};
	e.pageBorder?.zOrder === "back" && cp(e.pageBorder, t), s(i.slice(0, o)), fp(e, t), s(i.slice(o));
	for (let n of e.changeBars ?? []) t.ctx.fillStyle = "#000000", t.ctx.fillRect(n.bounds.xPt, n.bounds.yPt, n.bounds.widthPt, n.bounds.heightPt);
	e.pageBorder?.zOrder !== "back" && e.pageBorder && cp(e.pageBorder, t);
}
async function _p(e, t, n, r, i = lp) {
	let a = e.pages[t];
	if (!a) throw RangeError(`Page ${t} is outside the layout`);
	let o = n.getContext("2d");
	if (!o) throw Error("Canvas 2D context is unavailable");
	let s = r.scale * r.dpr;
	n.width = Math.ceil(a.geometry.widthPt * s), n.height = Math.ceil(a.geometry.heightPt * s), o.save();
	try {
		o.setTransform(1, 0, 0, 1, 0, 0), o.clearRect(0, 0, n.width, n.height), o.setTransform(s, 0, 0, s, 0, 0), gp(a, {
			ctx: o,
			scale: r.scale,
			dpr: r.dpr,
			resources: i
		});
	} finally {
		o.restore();
	}
}
//#endregion
//#region packages/docx/src/paint/resource-session.ts
function vp(e, t) {
	if (typeof e != "string" || e.trim().length === 0) throw TypeError(`${t} must be a non-empty string`);
}
function yp(e, t = {}) {
	return vp(e, "unavailable paint resource reason"), Object.freeze({
		status: "unavailable",
		reason: e,
		...t
	});
}
function bp(e) {
	return typeof e == "object" && !!e && e.status === "unavailable" && typeof e.reason == "string" && e.reason.trim().length > 0 && (e.placeholder === void 0 || e.placeholder === "tiff");
}
function xp(e) {
	if (typeof e != "object" || !e || e.status !== "unavailable") return;
	vp(e.reason, "unavailable paint resource reason");
	let t = e.placeholder;
	if (t !== void 0 && t !== "tiff") throw TypeError("unavailable paint resource placeholder must be tiff when supplied");
}
function Sp(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of t) {
		if (n.has(r.resourceKey)) throw Error(`Duplicate paint resource handle: ${r.resourceKey}`);
		xp(r.handle), e.resolve(r.resourceKey, r.kind), n.set(r.resourceKey, Object.freeze({
			kind: r.kind,
			handle: r.handle
		}));
	}
	let r = Object.freeze([...n.keys()].sort());
	return Object.freeze({
		keys: r,
		resolve(t, r) {
			let i = e.resolve(t, r), a = n.get(t);
			if (!a) throw Error(`Missing paint resource handle for ${t}: expected ${r}`);
			if (a.kind !== r) throw Error(`Paint resource kind mismatch for ${t}: expected ${r}, got ${a.kind}`);
			return Object.freeze({
				descriptor: i,
				handle: a.handle
			});
		}
	});
}
function Cp(e, t) {
	return Sp(e, e.descriptors.map((e) => {
		if (e.kind === "chart") return {
			resourceKey: e.resourceKey,
			kind: e.kind,
			handle: null
		};
		let n = t(e);
		if (n == null) throw Error(`Missing ${e.kind} paint handle for ${e.resourceKey}`);
		return {
			resourceKey: e.resourceKey,
			kind: e.kind,
			handle: n
		};
	}));
}
//#endregion
//#region packages/docx/src/paint/canonical-resource-handlers.ts
function wp(e) {
	if (!bp(e.handle)) {
		if (e.handle === void 0 || e.handle === null) throw Error(`Missing ${e.descriptor.kind} drawable for ${e.descriptor.resourceKey}`);
		return e.handle;
	}
}
function Tp(e, t, n) {
	let i = e.descriptor, a = wp(e), o = bp(e.handle) ? e.handle.placeholder : void 0;
	if (!a && !o) return;
	let s = (e, s) => {
		a ? Fe(n, a, i.srcRect, e, s, t.widthPt, t.heightPt) : o === "tiff" && r(n, "tiff", {
			x: e,
			y: s,
			width: t.widthPt,
			height: t.heightPt
		});
	}, c = i.alpha !== void 0 && i.alpha < 1;
	c && (n.save(), n.globalAlpha *= i.alpha);
	let l = i.rotation ?? 0;
	l === 0 && !i.flipH && !i.flipV ? s(t.xPt, t.yPt) : (n.save(), n.translate(t.xPt + t.widthPt / 2, t.yPt + t.heightPt / 2), n.rotate(l * Math.PI / 180), n.scale(i.flipH ? -1 : 1, i.flipV ? -1 : 1), s(-t.widthPt / 2, -t.heightPt / 2), n.restore()), c && n.restore();
}
function Ep(e, t, n) {
	let i = wp(e);
	if (!i) {
		bp(e.handle) && e.handle.placeholder === "tiff" && r(n, "tiff", {
			x: t.xPt,
			y: t.yPt,
			width: t.widthPt,
			height: t.heightPt
		});
		return;
	}
	n.drawImage(i, t.xPt, t.yPt, t.widthPt, t.heightPt);
}
function Dp(e, t, n, r) {
	return Object.freeze({
		image(e, t, n) {
			Tp(e, t, n);
		},
		chart(i, a, o) {
			Je(o, i.descriptor.model, {
				x: a.xPt,
				y: a.yPt,
				w: a.widthPt,
				h: a.heightPt
			}, 1, 0, e, t, n, r);
		},
		math(e, t, n) {
			Ep(e, t, n);
		},
		"picture-bullet"(e, t, n) {
			Ep(e, t, n);
		}
	});
}
var Op = Dp(), kp = /* @__PURE__ */ new WeakMap();
function Ap(e) {
	kp.set(e, (kp.get(e) ?? 0) + 1);
}
function jp(e, t) {
	return (t ?? e.geometry.widthPt * 1.3333333333333333) / e.geometry.widthPt;
}
function Mp(e) {
	if (A(e)) return e.ownerDocument ?? (typeof document > "u" ? null : document);
	let t = e.ownerDocument, n = t?.defaultView?.HTMLCanvasElement;
	return n && e instanceof n ? t : null;
}
function Np(e) {
	return Mp(e) !== null;
}
function Pp(e, t) {
	let n = Mp(e);
	if (!t || n && e.isConnected) return { canvas: e };
	let r = n ?? (typeof document > "u" ? void 0 : document);
	if (!r) throw Error("OpenType vertical glyph paint requires an element-backed document surface");
	let i = r.body ?? r.documentElement;
	if (!i) throw Error("OpenType vertical glyph paint requires an attached document surface");
	let a = r.createElement("canvas");
	return a.setAttribute("aria-hidden", "true"), Object.assign(a.style, {
		position: "fixed",
		left: "-99999px",
		top: "0",
		opacity: "0",
		pointerEvents: "none"
	}), i.appendChild(a), {
		canvas: a,
		release: () => a.remove()
	};
}
async function Fp(e, t, n, r) {
	let i = (kp.get(n) ?? 0) + 1;
	kp.set(n, i);
	let a = () => kp.get(n) !== i, o = t.layers.capabilities.resourceKeys, s = new Map(r.registry.descriptors.map((e) => [e.resourceKey, e])), c = o ? o.map((e) => {
		let t = s.get(e);
		if (!t) throw Error(`Missing retained paint resource descriptor: ${e}`);
		return t;
	}) : r.registry.descriptors, l = c.some((e) => e.kind === "image" || e.kind === "picture-bullet" || e.kind === "chart" && Be(e.model).length > 0), u = () => a() ? Promise.resolve() : Ip(e, t, n, r, c, a);
	return r.fetchImage && l ? Se(r.fetchImage, r.imageResources, u) : u();
}
async function Ip(t, n, r, i, a, o) {
	let s;
	try {
		let c = i.dpr ?? e(), l = Pp(r, !i.parseError && n.layers.capabilities.requiresElementBackedVerticalGlyphPaint), u = l.canvas;
		s = l.release;
		let d = u.getContext("2d");
		if (!d) throw Error("2D canvas is unavailable for DOCX paint");
		let f = jp(n, i.width), p = n.geometry.widthPt * f, m = n.geometry.heightPt * f, h = R(p * c, m * c), g = h.clamped ? c * h.scale : c;
		if (r.width = h.width, r.height = h.height, u !== r && (u.width = h.width, u.height = h.height), Np(r) && (r.style.width = `${p}px`, r.style.height = `${m}px`, r.style.display || (r.style.display = "block")), Np(u) && u !== r && (u.style.width = `${p}px`, u.style.height = `${m}px`), d.scale(g, g), d.fillStyle = "#ffffff", d.fillRect(0, 0, p, m), i.parseError) {
			await _p(t, 0, r, {
				scale: f,
				dpr: g
			});
			return;
		}
		let _;
		try {
			_ = await Af(a, i.rasterPaintOccurrences, i.fetchImage, i.tiff, f * g, i.svgDecoder, i.imageResources);
		} catch (e) {
			if (o()) return;
			throw e;
		}
		if (o()) return;
		let v = /* @__PURE__ */ new Map();
		if (i.fetchImage) {
			let e = i.fetchImage, t = /* @__PURE__ */ new Map();
			for (let e of i.rasterPaintOccurrences) {
				if (e.resourceKind !== "chart") continue;
				let n = t.get(e.resourceKey) ?? [];
				t.has(e.resourceKey) || t.set(e.resourceKey, n), n.push(e);
			}
			let n = [];
			for (let e of a) if (e.kind === "chart") for (let r of t.get(e.resourceKey) ?? []) {
				if (!Number.isFinite(r.widthPt) || r.widthPt <= 0 || !Number.isFinite(r.heightPt) || r.heightPt <= 0) continue;
				let t = {
					widthPt: r.widthPt,
					heightPt: r.heightPt,
					targetWidthPx: r.widthPt * f * g,
					targetHeightPx: r.heightPt * f * g
				}, i = [], a = !0;
				for (let n of Be(e.model)) {
					let e = ze(n, t);
					if (!e) {
						a = !1;
						break;
					}
					i.push({
						usage: n,
						size: e
					});
				}
				a && n.push({
					descriptor: e,
					frame: t,
					usages: i
				});
			}
			let r = /* @__PURE__ */ new Map();
			for (let e of He(n.map(({ descriptor: e }) => e.model), (e, t) => ze(e, n[t].frame) != null)) {
				let { fill: t } = e, n = We(t);
				r.has(n) || r.set(n, {
					fill: t,
					widthPt: 0,
					heightPt: 0,
					preserveNaturalSize: e.preserveNaturalSize,
					hasSourceCrop: e.hasSourceCrop
				});
			}
			for (let { usages: e } of n) for (let { usage: t, size: n } of e) {
				let { fill: e } = t, i = We(e), a = r.get(i);
				if (!a) continue;
				let o = a.preserveNaturalSize || t.preserveNaturalSize;
				r.set(i, {
					...a,
					widthPt: Math.max(a.widthPt, n.widthPt),
					heightPt: Math.max(a.heightPt, n.heightPt),
					targetWidthPx: o ? void 0 : Math.max(a.targetWidthPx ?? 0, n.targetWidthPx ?? 0) || void 0,
					targetHeightPx: o ? void 0 : Math.max(a.targetHeightPx ?? 0, n.targetHeightPx ?? 0) || void 0,
					preserveNaturalSize: o,
					hasSourceCrop: a.hasSourceCrop || t.hasSourceCrop
				});
			}
			await Promise.all([...r].map(async ([t, n]) => {
				if (_.has(t)) {
					let e = _.get(t);
					v.set(t, y(e, "tiff") ? null : e ?? null);
					return;
				}
				let { fill: r, widthPt: a, heightPt: o, targetWidthPx: s, targetHeightPx: c, hasSourceCrop: l } = n, u = s && c ? {
					targetWidthPx: s,
					targetHeightPx: c
				} : void 0;
				try {
					let n = (t) => i.svgDecoder ? _e(t, e, {
						...u ?? {},
						workerDecoder: i.svgDecoder
					}) : _e(t, e), s = () => r.mimeType === "image/svg+xml" ? r.duotone ? Promise.resolve(null) : n(r.imagePath) : Of(r.imagePath, r.mimeType, void 0, e, a, o, r.duotone, !0, i.tiff, u), c, d = {
						svgImagePath: r.svgImagePath,
						srcRect: l ? !0 : null
					};
					if (!r.duotone && F(d)) try {
						c = await n(d.svgImagePath);
					} catch {
						c = await s();
					}
					else c = await s();
					v.set(t, c);
				} catch (e) {
					if (y(e, "tiff")) {
						v.set(t, null);
						return;
					}
					if (qe(e) || Xe(e)) throw e;
					v.set(t, null);
				}
			}));
		}
		if (o()) return;
		let b = up(Cp(i.registry, (e) => {
			if (e.kind === "math") return i.privateResources?.keys.includes(e.resourceKey) ? i.privateResources.resolve(e.resourceKey) : yp("optional math renderer unavailable");
			if (e.kind === "image" || e.kind === "picture-bullet") {
				let t = _.get(Cf(e.partPath, e.colorReplaceFrom, e.duotone));
				return y(t, "tiff") ? yp("optional TIFF codec unavailable", { placeholder: "tiff" }) : t ?? yp(i.fetchImage ? "unsupported image format produced no drawable output" : "image byte source unavailable");
			}
		}), i.threeD || i.regionMap || i.chartEx || v.size > 0 ? Dp(i.threeD, i.regionMap, (e) => v.get(We(e)), i.chartEx) : Op);
		d.save();
		try {
			d.scale(f, f), gp(n, {
				ctx: d,
				scale: f,
				dpr: g,
				resources: b,
				documentDefaultTextColor: i.defaultTextColor ?? "#000000",
				defaultTextColor: i.defaultTextColor ?? "#000000"
			});
		} finally {
			d.restore();
		}
		if (u !== r) {
			if (o()) return;
			let e = r.getContext("2d");
			if (!e) throw Error("2D canvas is unavailable for DOCX paint projection");
			e.drawImage(u, 0, 0);
		}
		if (i.onTextRun) for (let e of i.textRuns) i.onTextRun(e);
	} finally {
		s?.();
	}
}
//#endregion
//#region packages/docx/src/layout/body-layout-kernel.ts
var Lp = class extends Error {
	code = "NOTE_CAPACITY_EXCEEDED";
	constructor(e, t, n) {
		super(`${e} story exceeds ${n} on page ${t}`), this.kind = e, this.pageIndex = t, this.containerId = n, this.name = "NoteCapacityExceededError";
	}
};
//#endregion
//#region packages/docx/src/layout/body-pagination.ts
function Rp(e) {
	return Object.freeze({
		...e,
		pages: Object.freeze([...e.pages])
	});
}
function zp(e) {
	let { kind: t, region: n, ...r } = e, i = Qu(r);
	if (n && (i = $u(i, n)), t === "content" && i.sectionRegions.length === 0) throw RangeError("A content page draft requires an initial section region");
	if (t === "parity-blank" && i.sectionRegions.length !== 0) throw RangeError("A parity blank cannot retain a section region");
	return Object.freeze({
		kind: t,
		accumulator: i
	});
}
function Bp(e, t) {
	if (t.kind !== "content" || t.accumulator.pageIndex !== e.pageIndex) throw Error("The initial body page must be owned by the active flow");
	return Rp({
		flow: e,
		pages: [t],
		footnoteReservePt: 0,
		balanceTargetPt: null
	});
}
function Vp(e, t) {
	if (t !== null && (!Number.isFinite(t) || t < 0)) throw RangeError("A body balance target must be finite and non-negative");
	return Rp({
		...e,
		balanceTargetPt: t
	});
}
function Hp(e, t) {
	if (!Number.isFinite(t) || t < 0) throw RangeError("A footnote reserve increment must be finite and non-negative");
	return t === 0 ? e : Rp({
		...e,
		footnoteReservePt: e.footnoteReservePt + t
	});
}
function Up(e, t, n) {
	let r = [...e.pages], i = t.state, a = !1;
	for (let e of t.events) {
		if (e.type === "place") throw Error("Occurrence acceptance owns place events");
		if (e.type !== "next-column") {
			if (e.type === "next-page") {
				if (e.parityBlank) r.push(n.openParityBlankPage(e));
				else {
					let a = n.openContentPage(e, t.state);
					r.push(a.page), i = a.flow;
				}
				a = !0;
				continue;
			}
			if (!a) {
				let t = r.at(-1);
				if (!t || t.kind !== "content") throw Error("A continuous section requires an active content page");
				r[r.length - 1] = n.openSamePageSectionRegion(t, e, i);
			}
		}
	}
	let o = r.at(-1);
	if (!o || o.kind !== "content" || o.accumulator.pageIndex !== i.pageIndex) throw Error("A page transition must end on the active content page");
	return Rp({
		...e,
		flow: i,
		pages: r,
		footnoteReservePt: a ? 0 : e.footnoteReservePt,
		balanceTargetPt: a ? null : e.balanceTargetPt
	});
}
//#endregion
//#region packages/docx/src/layout/retained-geometry-translation.ts
function Wp(e) {
	if (e.length === 0) return null;
	let t = Math.min(...e.map((e) => e.xPt)), n = Math.min(...e.map((e) => e.yPt)), r = Math.max(...e.map((e) => e.xPt + e.widthPt)), i = Math.max(...e.map((e) => e.yPt + e.heightPt));
	return {
		xPt: t,
		yPt: n,
		widthPt: r - t,
		heightPt: i - n
	};
}
function Gp(e) {
	return {
		x: !e.horzSpecified || e.horzAnchor !== "page" && e.horzAnchor !== "margin",
		y: e.vertAnchor !== "page" && e.vertAnchor !== "margin"
	};
}
function Y(e, t) {
	return {
		...e,
		xPt: e.xPt + t.xPt,
		yPt: e.yPt + t.yPt
	};
}
function X(e, t) {
	return {
		...e,
		xPt: e.xPt + t.xPt,
		yPt: e.yPt + t.yPt
	};
}
function Kp(e, t) {
	return {
		...e,
		from: Y(e.from, t),
		to: Y(e.to, t)
	};
}
function qp(e, t) {
	return e.kind === "rect" ? {
		...e,
		rect: X(e.rect, t)
	} : {
		...e,
		points: e.points.map((e) => Y(e, t))
	};
}
function Jp(e, t) {
	return e.kind === "noop" ? e : e.kind === "drawingml-shape" || e.kind === "drawingml-image-fill" ? {
		...e,
		plan: {
			...e.plan,
			rect: {
				...e.plan.rect,
				x: e.plan.rect.x + t.xPt,
				y: e.plan.rect.y + t.yPt
			}
		}
	} : {
		...e,
		rect: X(e.rect, t)
	};
}
function Yp(e, t) {
	let n = e.orientation === "upright-physical" ? {
		xPt: 0,
		yPt: 0
	} : t;
	return {
		...e,
		flowBounds: X(e.flowBounds, t),
		inkBounds: X(e.inkBounds, t),
		...e.clipBounds ? { clipBounds: X(e.clipBounds, t) } : {},
		...e.transform ? { transform: {
			...e.transform,
			e: e.transform.e + t.xPt,
			f: e.transform.f + t.yPt
		} } : {},
		...e.clip ? { clip: qp(e.clip, t) } : {},
		commands: e.commands.map((e) => Jp(e, n))
	};
}
function Xp(e, t, n) {
	let r = `${t.xPt}\u0000${t.yPt}`, i = n.drawingMemo.get(e);
	if (i) {
		if (i.key !== r) throw Error("incompatible projection ownership");
		return i.value;
	}
	let a = Yp(e, t);
	return n.drawingMemo.set(e, {
		key: r,
		value: a
	}), a;
}
function Zp(e, t, n) {
	return e.kind === "text" ? {
		...e,
		origin: Y(e.origin, t),
		bounds: X(e.bounds, t),
		decorations: e.decorations.map((e) => ({
			...e,
			from: Y(e.from, t),
			to: Y(e.to, t),
			...e.path ? { path: e.path.map((e) => Y(e, t)) } : {}
		})),
		...e.highlightFragments ? { highlightFragments: e.highlightFragments.map((e) => ({
			...e,
			rect: X(e.rect, t)
		})) } : {},
		...e.ruby ? { ruby: {
			...e.ruby,
			paintOps: e.ruby.paintOps.map((e) => ({
				...e,
				origin: Y(e.origin, t)
			}))
		} } : {},
		...e.emphasis ? { emphasis: {
			...e.emphasis,
			...e.emphasis.glyphs ? { glyphs: e.emphasis.glyphs.map((e) => ({
				...e,
				origin: Y(e.origin, t)
			})) } : {},
			...e.emphasis.paths ? { paths: e.emphasis.paths.map((e) => ({
				...e,
				points: e.points.map((e) => Y(e, t))
			})) } : {}
		} } : {},
		...e.runBorderFragments ? { runBorderFragments: e.runBorderFragments.map((e) => Kp(e, t)) } : {}
	} : e.kind === "anchor-host" ? {
		...e,
		bounds: X(e.bounds, t),
		baselinePt: e.baselinePt + t.yPt
	} : e.kind === "drawing" ? {
		...e,
		bounds: X(e.bounds, n?.get(e.drawingId) ?? t)
	} : e.kind === "tab" && (e.leaderGlyphs || e.decorations) ? {
		...e,
		...e.bounds ? { bounds: X(e.bounds, t) } : {},
		...e.leaderGlyphs ? { leaderGlyphs: e.leaderGlyphs.map((e) => ({
			...e,
			origin: Y(e.origin, t)
		})) } : {},
		...e.decorations ? { decorations: e.decorations.map((e) => ({
			...e,
			from: Y(e.from, t),
			to: Y(e.to, t),
			...e.path ? { path: e.path.map((e) => Y(e, t)) } : {}
		})) } : {}
	} : e.bounds ? {
		...e,
		bounds: X(e.bounds, t)
	} : e;
}
function Qp(e, t, n) {
	return {
		...e,
		bounds: X(e.bounds, t),
		baselinePt: e.baselinePt + t.yPt,
		placements: e.placements.map((e) => Zp(e, t, n)),
		...e.barTabRules ? { barTabRules: e.barTabRules.map((e) => ({
			...e,
			from: Y(e.from, t),
			to: Y(e.to, t)
		})) } : {}
	};
}
function $p(e, t) {
	let n = e.axes[t];
	return n.status === "resolved" && [
		"page",
		"margin",
		"leftMargin",
		"rightMargin",
		"topMargin",
		"bottomMargin"
	].includes(n.referenceFrame);
}
function em(e, t) {
	let n = $p(e, "horizontal") ? 0 : t.xPt, r = $p(e, "vertical") ? 0 : t.yPt, i = {
		xPt: n,
		yPt: r
	}, a = {
		horizontal: e.axes.horizontal.status === "resolved" ? {
			...e.axes.horizontal,
			baseStartPt: e.axes.horizontal.baseStartPt + n,
			baseEndPt: e.axes.horizontal.baseEndPt + n,
			resolvedOriginPt: e.axes.horizontal.resolvedOriginPt + n
		} : e.axes.horizontal,
		vertical: e.axes.vertical.status === "resolved" ? {
			...e.axes.vertical,
			baseStartPt: e.axes.vertical.baseStartPt + r,
			baseEndPt: e.axes.vertical.baseEndPt + r,
			resolvedOriginPt: e.axes.vertical.resolvedOriginPt + r
		} : e.axes.vertical
	};
	return e.status === "unsupported" ? {
		...e,
		axes: a
	} : {
		...e,
		axes: a,
		geometry: {
			...e.geometry,
			objectFrame: X(e.geometry.objectFrame, i),
			inkBounds: X(e.geometry.inkBounds, i),
			wrapBounds: e.geometry.wrapBounds ? X(e.geometry.wrapBounds, i) : null,
			wrap: {
				...e.geometry.wrap,
				polygon: e.geometry.wrap.polygon ? {
					...e.geometry.wrap.polygon,
					points: e.geometry.wrap.polygon.points.map((e) => Y(e, i))
				} : null
			}
		}
	};
}
function tm(e, t) {
	return nm(e, t, {
		memo: /* @__PURE__ */ new WeakMap(),
		drawingMemo: /* @__PURE__ */ new WeakMap()
	});
}
function nm(e, t, n) {
	let r = `${t.xPt}\u0000${t.yPt}`, i = n.memo.get(e);
	if (i) {
		if (i.key !== r) throw Error("incompatible projection ownership");
		return i.value;
	}
	let a = new Map(e.drawings.flatMap((e) => e.anchorLayer ? [[e.anchorLayer.occurrenceId, e.anchorLayer]] : [])), o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
	for (let n of e.drawings) {
		let e = {
			xPt: n.anchorLayer?.horizontalOwnership === "page" ? 0 : t.xPt,
			yPt: n.anchorLayer?.verticalOwnership === "page" ? 0 : t.yPt
		};
		s.set(n.id, e), n.textBoxIds?.forEach((t) => o.set(t, n.orientation === "upright-physical" ? {
			xPt: 0,
			yPt: 0
		} : e));
	}
	let c = e.drawings.map((e) => Xp(e, s.get(e.id) ?? t, n)), l = Wp(c.filter((e) => e.anchorLayer?.cellContainment === !0).map((e) => e.flowBounds)), u = {
		...e,
		flowBounds: X(e.flowBounds, t),
		inkBounds: X(e.inkBounds, t),
		...e.clipBounds ? { clipBounds: X(e.clipBounds, t) } : {},
		lines: e.lines.map((e) => Qp(e, t, s)),
		borders: e.borders.map((e) => Kp(e, t)),
		drawings: c,
		...l ? { cellContainmentBounds: l } : {},
		textBoxes: e.textBoxes.map((e) => im(e, o.get(e.id) ?? t, n)),
		exclusions: e.exclusions.map((e) => {
			let n = e.anchorOccurrenceId ? a.get(e.anchorOccurrenceId) : void 0, r = {
				xPt: n?.horizontalOwnership === "page" ? 0 : t.xPt,
				yPt: e.verticalOwnership === "page" || n?.verticalOwnership === "page" ? 0 : t.yPt
			};
			return {
				...e,
				bounds: X(e.bounds, r),
				polygon: e.polygon.map((e) => Y(e, r))
			};
		}),
		...e.anchorCollisions ? { anchorCollisions: e.anchorCollisions.map((e) => ({
			...e,
			bounds: X(e.bounds, {
				xPt: e.horizontalOwnership === "page" ? 0 : t.xPt,
				yPt: e.verticalOwnership === "page" ? 0 : t.yPt
			})
		})) } : {},
		...e.anchorFrames ? { anchorFrames: e.anchorFrames.map((e) => em(e, t)) } : {},
		...e.paragraphMark ? { paragraphMark: {
			...e.paragraphMark,
			bounds: X(e.paragraphMark.bounds, t)
		} } : {},
		...e.lineNumbers ? { lineNumbers: e.lineNumbers.map((e) => ({
			...e,
			bounds: X(e.bounds, t),
			paintOps: e.paintOps.map((e) => ({
				...e,
				origin: Y(e.origin, t)
			}))
		})) } : {}
	};
	return n.memo.set(e, {
		key: r,
		value: u
	}), u;
}
function rm(e, t) {
	return im(e, t, {
		memo: /* @__PURE__ */ new WeakMap(),
		drawingMemo: /* @__PURE__ */ new WeakMap()
	});
}
function im(e, t, n) {
	let r = e.verticalMode === void 0;
	return {
		...e,
		flowBounds: X(e.flowBounds, t),
		inkBounds: X(e.inkBounds, t),
		...e.clipBounds ? { clipBounds: r ? X(e.clipBounds, t) : e.clipBounds } : {},
		...e.contentBounds ? { contentBounds: r ? X(e.contentBounds, t) : e.contentBounds } : {},
		transform: r ? e.transform : {
			...e.transform,
			e: e.transform.e + t.xPt,
			f: e.transform.f + t.yPt
		},
		story: r ? {
			...e.story,
			flowBounds: X(e.story.flowBounds, t),
			inkBounds: X(e.story.inkBounds, t),
			...e.story.clipBounds ? { clipBounds: X(e.story.clipBounds, t) } : {},
			blocks: e.story.blocks.map((e) => {
				if (e.kind === "paragraph") return nm(e, t, n);
				if (e.kind === "table") return om(e, t);
				throw Error(`Text-box story contains unsupported retained node: ${e.kind}`);
			})
		} : e.story
	};
}
function am(e, t) {
	return tm(e, t);
}
function om(e, t) {
	return {
		...e,
		flowBounds: X(e.flowBounds, t),
		inkBounds: X(e.inkBounds, t),
		...e.clipBounds ? { clipBounds: X(e.clipBounds, t) } : {},
		borders: e.borders.map((e) => Kp(e, t)),
		...e.compoundBorderFrames ? { compoundBorderFrames: e.compoundBorderFrames.map((e) => ({
			...e,
			bounds: X(e.bounds, t)
		})) } : {},
		rows: e.rows.map((e) => ({
			...e,
			flowBounds: X(e.flowBounds, t),
			inkBounds: X(e.inkBounds, t),
			...e.clipBounds ? { clipBounds: X(e.clipBounds, t) } : {},
			cells: e.cells.map((e) => ({
				...e,
				flowBounds: X(e.flowBounds, t),
				inkBounds: X(e.inkBounds, t),
				...e.clipBounds ? { clipBounds: X(e.clipBounds, t) } : {},
				contentBounds: X(e.contentBounds, t),
				blocks: e.blocks
			}))
		}))
	};
}
//#endregion
//#region packages/docx/src/layout/occurrence-projection.ts
function sm(e, t) {
	return `${e}/occurrence/${encodeURIComponent(t).replaceAll("%3A", ":")}`;
}
function cm(e) {
	if (!Number.isFinite(e.xPt) || !Number.isFinite(e.yPt)) throw RangeError("body occurrence translation must be finite");
}
function lm(e) {
	if (e.occurrenceId.length === 0) throw RangeError("occurrenceId must not be empty");
	if (e.destination.flowDomainId.length === 0) throw RangeError("flowDomainId must not be empty");
	cm(e.destination.translation);
}
function um(e, t) {
	let n = Gp(e.positioning);
	return {
		xPt: n.x ? t.xPt : 0,
		yPt: n.y ? t.yPt : 0
	};
}
function dm(e) {
	let t = /* @__PURE__ */ new WeakSet(), n = /* @__PURE__ */ new WeakSet(), r = (e) => {
		if (t.has(e)) throw TypeError("body occurrence layout graph must be acyclic");
		if (!n.has(e)) {
			if (t.add(e), e.kind === "paragraph") for (let t of e.textBoxes) for (let e of t.story.blocks) (e.kind === "paragraph" || e.kind === "table") && r(e);
			else {
				for (let t of e.rows) for (let e of t.cells) for (let t of e.blocks) r(t.layout);
				for (let t of e.floatingTables ?? []) r(t.child);
				for (let t of e.resolvedFloatingTables ?? []) r(t.source.child), r(t.child);
			}
			t.delete(e), n.add(e);
		}
	};
	r(e);
}
function fm(e, t) {
	dm(e);
	let n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap(), i = (e) => `${e.xPt}\u0000${e.yPt}`, a = (e, t) => {
		let n = i(t), a = r.get(e);
		if (a) {
			if (a.key !== n) throw Error("incompatible projection ownership");
			return a.value;
		}
		let o = am(e, t), s = Object.freeze({
			...o,
			...e.sectionFlowOwnership === void 0 ? {} : { sectionFlowOwnership: e.sectionFlowOwnership }
		});
		return r.set(e, {
			key: n,
			value: s
		}), s;
	}, o = (e, t) => {
		let r = i(t), a = n.get(e);
		if (a) {
			if (a.key !== r) throw Error("incompatible projection ownership");
			return a.value;
		}
		let s = {
			...om(e, t),
			...e.sectionFlowOwnership === void 0 ? {} : { sectionFlowOwnership: e.sectionFlowOwnership }
		};
		n.set(e, {
			key: r,
			value: s
		});
		let c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Set();
		for (let n of e.resolvedFloatingTables ?? []) {
			let r = e.resolvedFloatingTableCoordinateSpace !== void 0;
			c.set(n.source, r ? {
				xPt: 0,
				yPt: 0
			} : um(n.source, t)), r && l.add(n.source);
		}
		let u = /* @__PURE__ */ new Map(), d = (e) => {
			let n = u.get(e);
			if (n) return n;
			let r = c.get(e) ?? t, i = l.has(e) ? {
				xPt: 0,
				yPt: 0
			} : t, a = {
				...e,
				anchorBounds: X(e.anchorBounds, i),
				...e.columnBounds ? { columnBounds: X(e.columnBounds, i) } : {},
				child: o(e.child, r)
			};
			return u.set(e, a), a;
		}, f = (e.floatingTables ?? []).map(d), p = (e.resolvedFloatingTables ?? []).map((e) => {
			let n = d(e.source), r = c.get(e.source) ?? um(e.source, t);
			return {
				...e,
				xPt: e.xPt + r.xPt,
				yPt: e.yPt + r.yPt,
				bounds: X(e.bounds, r),
				exclusionBounds: X(e.exclusionBounds, r),
				child: n.child,
				source: n
			};
		});
		return (e.floatingTables || e.resolvedFloatingTables) && Object.assign(s, {
			floatingTables: f,
			resolvedFloatingTables: p
		}), s;
	};
	return e.kind === "paragraph" ? a(e, t) : o(e, t);
}
function pm(e, t) {
	return cm(t), fm(e, t);
}
function mm(e, t) {
	lm(t);
	let n = fm(e, t.destination.translation), r = encodeURIComponent(t.occurrenceId), i = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = (e) => `${t.occurrenceId}/node/${encodeURIComponent(e)}`, u = (e) => `${t.occurrenceId}/anchor/${encodeURIComponent(e)}`, d = (e) => sm(t.occurrenceId, e), f = (e, n) => `${t.destination.flowDomainId}/occurrence/${r}/${e}/${encodeURIComponent(n)}`, p = (e) => e.kind === "drawing" ? {
		...e,
		drawingId: l(e.drawingId)
	} : e.kind === "anchor-host" && e.anchorOccurrenceId ? {
		...e,
		anchorOccurrenceId: u(e.anchorOccurrenceId)
	} : e, m = (e, t) => {
		let n = o.get(e);
		if (n) {
			if (n.domain !== t) throw Error("incompatible projection ownership");
			return n.value;
		}
		if (e.anchorLayer) {
			let t = s.get(e.anchorLayer.occurrenceId);
			if (t && t !== e) throw Error("duplicate anchor occurrence owner");
			s.set(e.anchorLayer.occurrenceId, e);
		}
		let r = {
			...e,
			id: l(e.id),
			flowDomainId: t,
			...e.textBoxIds ? { textBoxIds: e.textBoxIds.map(l) } : {},
			...e.anchorLayer ? { anchorLayer: {
				...e.anchorLayer,
				occurrenceId: u(e.anchorLayer.occurrenceId),
				acquisitionOccurrenceId: e.anchorLayer.acquisitionOccurrenceId ?? e.anchorLayer.occurrenceId
			} } : {}
		};
		return o.set(e, {
			domain: t,
			value: r
		}), r;
	}, h = (e) => {
		let t = f("textbox", e.id);
		return {
			...e,
			id: l(e.id),
			flowDomainId: t,
			story: {
				...e.story,
				blocks: e.story.blocks.map((e) => {
					if (e.kind === "paragraph") return g(e, t);
					if (e.kind === "table") return b(e, t);
					throw Error(`Text-box story contains unsupported retained node: ${e.kind}`);
				})
			}
		};
	}, g = (e, t) => {
		let n = a.get(e);
		if (n) {
			if (n.domain !== t) throw Error("incompatible projection ownership");
			return n.value;
		}
		let r = {
			...e,
			id: l(e.id),
			flowDomainId: t,
			lines: e.lines.map((e) => ({
				...e,
				placements: e.placements.map(p)
			})),
			drawings: e.drawings.map((e) => m(e, t)),
			textBoxes: e.textBoxes.map(h),
			exclusions: e.exclusions.map((e) => ({
				...e,
				id: e.verticalOwnership === "page" && !e.anchorOccurrenceId ? e.id : l(e.id),
				...e.anchorOccurrenceId ? { anchorOccurrenceId: u(e.anchorOccurrenceId) } : {}
			})),
			...e.anchorCollisions ? { anchorCollisions: e.anchorCollisions.map((e) => ({
				...e,
				occurrenceId: u(e.occurrenceId)
			})) } : {},
			...e.anchorFrames ? { anchorFrames: e.anchorFrames.map((e) => ({
				...e,
				occurrenceId: u(e.occurrenceId)
			})) } : {}
		};
		return a.set(e, {
			domain: t,
			value: r
		}), r;
	}, _ = (e) => {
		let t = f("cell", e.id);
		return {
			...e,
			id: l(e.id),
			flowDomainId: t,
			blocks: e.blocks.map((e) => ({
				...e,
				layout: x(e.layout, t)
			}))
		};
	}, v = (e, t) => ({
		...e,
		id: l(e.id),
		flowDomainId: t,
		..."occurrenceId" in e && typeof e.occurrenceId == "string" ? { occurrenceId: d(e.occurrenceId) } : {},
		cells: e.cells.map(_)
	}), y = (e) => {
		let t = f("cell", e.hostCellId);
		return {
			...e,
			occurrenceId: d(e.occurrenceId),
			hostCellId: l(e.hostCellId),
			tableId: l(e.tableId),
			child: b(e.child, t)
		};
	}, b = (e, t) => {
		let n = i.get(e);
		if (n) {
			if (n.domain !== t) throw Error("incompatible projection ownership");
			return n.value;
		}
		let r = {
			...e,
			id: l(e.id),
			flowDomainId: t,
			rows: e.rows.map((e) => v(e, t))
		};
		i.set(e, {
			domain: t,
			value: r
		});
		let a = /* @__PURE__ */ new Map(), o = (e) => {
			let t = a.get(e);
			if (t) return t;
			let n = c.get(e.occurrenceId);
			if (n && n !== e) throw Error("duplicate floating placement occurrence owner");
			c.set(e.occurrenceId, e);
			let r = y(e);
			return a.set(e, r), r;
		}, s = (e.floatingTables ?? []).map(o), u = (e.resolvedFloatingTables ?? []).map((e) => {
			let t = o(e.source);
			return {
				...e,
				occurrenceId: d(e.occurrenceId),
				child: t.child,
				source: t
			};
		});
		return (e.floatingTables || e.resolvedFloatingTables) && Object.assign(r, {
			floatingTables: s,
			resolvedFloatingTables: u
		}), r;
	};
	function x(e, t) {
		return e.kind === "paragraph" ? g(e, t) : b(e, t);
	}
	let S = B(x(n, t.destination.flowDomainId), "DOCX body occurrence projection");
	if (S.kind !== "table" || e.kind !== "table") return S;
	let C = Object.isFrozen(e.columnWidthsPt) ? e.columnWidthsPt : Object.freeze([...e.columnWidthsPt]);
	return Object.freeze({
		...S,
		columnWidthsPt: C
	});
}
//#endregion
//#region packages/docx/src/layout/paginator.ts
var hm = class extends Error {
	code = "NEXT_COLUMN_DESTINATION_UNAVAILABLE";
	constructor(e, t, n, r) {
		super(`nextColumn requires a following column on the current page, but column ${e + 1} is unavailable (outgoing columns: ${t}, incoming columns: ${n}, reason: ${r})`), this.outgoingColumnIndex = e, this.outgoingColumnCount = t, this.incomingColumnCount = n, this.reason = r, this.name = "UnsupportedPageFlowTransitionError";
	}
};
function gm(e, t) {
	return e.sectionBidi ? [...t].reverse() : [...t];
}
function _m(e) {
	let t = gm(e.section, e.columnSubset);
	return t[t.indexOf(e.columnIndex) + 1];
}
function vm(e, t = {}) {
	let n = _u(e), r = vu(e), i = t.pageContentStartBlockPt ?? n, a = t.pageContentEndBlockPt ?? r, o = t.regionStartBlockPt ?? i, s = t.regionEndBlockPt ?? a, c = t.cursorBlockPt ?? o, l = t.deepestColumnBlockPt ?? c, u = t.pageIndex ?? 0, d = Object.freeze([...t.columnSubset ?? e.columns.map((e, t) => t)]), f = gm(e, d), p = t.columnIndex ?? f[0] ?? -1;
	if (!Number.isInteger(u) || u < 0) throw RangeError("Page index must be a non-negative integer");
	if (!Number.isInteger(p) || p < 0 || p >= e.columns.length) throw RangeError("Column index must identify a column in the active section");
	if (d.length === 0 || d.some((t, n) => !Number.isInteger(t) || t < 0 || t >= e.columns.length || n > 0 && t <= d[n - 1]) || !d.includes(p)) throw RangeError("Column subset must be ordered, unique, and contain the active column");
	if (![
		i,
		a,
		o,
		s,
		c,
		l
	].every(Number.isFinite)) throw RangeError("Page-flow cursors and bounds must be finite");
	if (i > o || o > s || s > a || o > c || c > s || c > l) throw RangeError("Page-flow bounds must contain the region and live cursor");
	return Object.freeze({
		pageIndex: u,
		columnIndex: p,
		pageHasContent: t.pageHasContent ?? !1,
		cursorBlockPt: c,
		pageContentStartBlockPt: i,
		pageContentEndBlockPt: a,
		regionStartBlockPt: o,
		regionEndBlockPt: s,
		columnSubset: d,
		deepestColumnBlockPt: l,
		section: e
	});
}
function ym(e, t) {
	return Object.freeze({
		state: e,
		events: Object.freeze(t.map((e) => Object.freeze({ ...e })))
	});
}
function bm(e, t, n) {
	if (!Number.isFinite(n) || n < 0) throw RangeError("A flow node charge must be a finite non-negative value");
	let r = e.cursorBlockPt, i = r + n;
	return ym(Object.freeze({
		...e,
		pageHasContent: !0,
		cursorBlockPt: i,
		deepestColumnBlockPt: Math.max(e.deepestColumnBlockPt, i)
	}), [{
		type: "place",
		node: t,
		blockStartPt: r,
		blockEndPt: i
	}]);
}
function xm(e, t) {
	let n = Math.max(e.deepestColumnBlockPt, e.cursorBlockPt), r = _m(e);
	if (r !== void 0) return ym(Object.freeze({
		...e,
		columnIndex: r,
		cursorBlockPt: e.regionStartBlockPt,
		deepestColumnBlockPt: n
	}), [{ type: "next-column" }]);
	let i = e.pageIndex + 1;
	return ym(vm(e.section, { pageIndex: i }), [{
		type: "next-page",
		reason: t,
		pageIndex: i,
		sectionOccurrenceId: e.section.sectionOccurrenceId,
		parityBlank: !1
	}]);
}
function Sm(e, t) {
	return e.kind === t.kind && e.linePitchPt === t.linePitchPt && e.charSpacePt === t.charSpacePt;
}
function Cm(e, t) {
	return e.xPt === t.xPt && e.yPt === t.yPt && e.widthPt === t.widthPt && e.heightPt === t.heightPt;
}
function wm(e, t) {
	return e.xPt < t.xPt + t.widthPt && t.xPt < e.xPt + e.widthPt && e.yPt < t.yPt + t.heightPt && t.yPt < e.yPt + e.heightPt;
}
function Tm(e, t, n) {
	let r = (n) => {
		throw new hm(e.columnIndex, e.section.columns.length, t.columns.length, n);
	}, i = mi(e.section.textDirection), a = mi(t.textDirection);
	i !== a && r("writing-mode");
	let o = bi({
		widthPt: e.section.geometry.pageWidth,
		heightPt: e.section.geometry.pageHeight
	}, i), s = bi({
		widthPt: t.geometry.pageWidth,
		heightPt: t.geometry.pageHeight
	}, a);
	(o.widthPt !== s.widthPt || o.heightPt !== s.heightPt) && r("page-extent");
	let c = n.incomingPageContentStartBlockPt ?? _u(t), l = n.incomingPageContentEndBlockPt ?? vu(t);
	(c !== e.pageContentStartBlockPt || l !== e.pageContentEndBlockPt) && r("block-band"), Sm(e.section.grid, t.grid) || r("grid");
	let u = gm(e.section, e.columnSubset), d = u.indexOf(e.columnIndex), f = u[d + 1];
	if (f === void 0) throw Error("nextColumn destination resolution requires a same-page successor");
	let p = Ei(i, o), m = e.section.columns[f], h = wi(p.logicalToPhysical, {
		xPt: m.xPt,
		yPt: e.regionStartBlockPt,
		widthPt: m.wPt,
		heightPt: e.regionEndBlockPt - e.regionStartBlockPt
	}), g = t.columns.findIndex((t) => Cm(h, wi(p.logicalToPhysical, {
		xPt: t.xPt,
		yPt: e.regionStartBlockPt,
		widthPt: t.wPt,
		heightPt: e.regionEndBlockPt - e.regionStartBlockPt
	})));
	g < 0 && r("physical-column");
	let _ = gm(t, t.columns.map((e, t) => t)), v = _.indexOf(g);
	v < 0 && r("physical-column");
	let y = Object.freeze(_.slice(v).sort((e, t) => e - t)), b = Object.freeze(u.slice(0, d + 1).sort((e, t) => e - t)), x = (t, n) => {
		let r = t.columns[n];
		return wi(p.logicalToPhysical, {
			xPt: r.xPt,
			yPt: e.regionStartBlockPt,
			widthPt: r.wPt,
			heightPt: e.regionEndBlockPt - e.regionStartBlockPt
		});
	}, S = b.map((t) => x(e.section, t));
	return y.some((e) => {
		let n = x(t, e);
		return S.some((e) => wm(e, n));
	}) && r("physical-overlap"), Object.freeze({
		targetColumnIndex: g,
		targetColumnOrdinal: v,
		columnSubset: y,
		outgoingColumnSubset: b
	});
}
function Em(e, t, n) {
	let r = e.pageIndex + 1;
	return ym(vm(t, { pageIndex: r }), [{
		type: "next-page",
		reason: n,
		pageIndex: r,
		sectionOccurrenceId: t.sectionOccurrenceId,
		parityBlank: !1
	}]);
}
function Dm(e, t) {
	let n = e % 2 == 0;
	return t === "odd" ? n : !n;
}
function Om(e, t, n, r) {
	let i = e.pageIndex + 1, a = [];
	return r !== void 0 && !Dm(i, r) && (a.push({
		type: "next-page",
		reason: "parity",
		pageIndex: i,
		sectionOccurrenceId: e.section.sectionOccurrenceId,
		parityBlank: !0
	}), i += 1), a.push({
		type: "next-page",
		reason: n,
		pageIndex: i,
		sectionOccurrenceId: t.sectionOccurrenceId,
		parityBlank: !1
	}), ym(vm(t, { pageIndex: i }), a);
}
function km(e, t, n) {
	return t === "lastRenderedPageBreak" ? ym(e, []) : t === "column" ? xm(e, "explicit-break") : t === "pageBreakBefore" && !e.pageHasContent && e.columnIndex === gm(e.section, e.columnSubset)[0] && e.cursorBlockPt === e.pageContentStartBlockPt ? ym(e, []) : t === "page" ? Om(e, e.section, "explicit-break", n) : Em(e, e.section, "page-break-before");
}
function Am(e, t, n, r = {}) {
	if (n === "continuous" && !r.hasFootnoteReferenceOnCurrentPage) {
		let n = e.section.columns.length > 1 ? Math.max(e.cursorBlockPt, e.deepestColumnBlockPt) : e.cursorBlockPt;
		return ym(vm(t, {
			pageIndex: e.pageIndex,
			pageContentStartBlockPt: e.pageContentStartBlockPt,
			pageContentEndBlockPt: e.pageContentEndBlockPt,
			cursorBlockPt: n,
			regionStartBlockPt: n,
			regionEndBlockPt: e.pageContentEndBlockPt,
			deepestColumnBlockPt: n,
			pageHasContent: e.pageHasContent
		}), [{
			type: "begin-section",
			placement: "same-page-block",
			section: t,
			targetColumnOrdinal: 0,
			columnSubset: t.columns.map((e, t) => t)
		}]);
	}
	if (n === "nextColumn") {
		if (_m(e) === void 0) {
			let n = Em(e, t, "section-break");
			return ym(n.state, [...n.events, {
				type: "begin-section",
				section: t
			}]);
		}
		let n = Tm(e, t, r);
		return ym(Object.freeze({
			...e,
			columnIndex: n.targetColumnIndex,
			columnSubset: n.columnSubset,
			cursorBlockPt: e.regionStartBlockPt,
			deepestColumnBlockPt: Math.max(e.deepestColumnBlockPt, e.cursorBlockPt),
			section: t
		}), [{ type: "next-column" }, {
			type: "begin-section",
			placement: "same-page-column",
			section: t,
			targetColumnOrdinal: n.targetColumnOrdinal,
			columnSubset: n.columnSubset,
			outgoingColumnSubset: n.outgoingColumnSubset
		}]);
	}
	if (n === "continuous") {
		let n = Em(e, t, "section-break");
		return ym(n.state, [...n.events, {
			type: "begin-section",
			section: t
		}]);
	}
	let i = Om(e, t, "section-break", n === "oddPage" ? "odd" : n === "evenPage" ? "even" : void 0);
	return ym(i.state, [...i.events, {
		type: "begin-section",
		section: t
	}]);
}
//#endregion
//#region packages/docx/src/line-fit-policy.ts
function jm(e, t, n, r) {
	let i = e, a = 0;
	for (let o = e + 1; o <= t; o++) {
		let e = r(o);
		if (!(e <= n)) break;
		i = o, a = e;
	}
	return {
		end: i,
		fitValue: a
	};
}
function Mm(e) {
	return !e.widowControl || e.end >= e.totalLines ? { kind: "keep" } : e.totalLines - e.end === 1 && e.end - e.start >= 2 ? { kind: "dropLastLine" } : e.start === 0 && e.end - e.start === 1 && e.canRelocate ? { kind: "relocate" } : { kind: "keep" };
}
U({
	id: "word-terminal-column-break",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/pagination.test.ts#ignores a terminal last-column break before a hard page boundary"
	},
	description: "The established pagination regression contract does not materialize a column transition when no body flow content occurs before the next forced page or non-continuous section boundary."
}), U({
	id: "word-pre-break-anchor-paragraph",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/pagination.test.ts#does not push an anchor-only pre-break paragraph to a new page just for its empty mark"
	},
	description: "The established pagination regression contract keeps an anchor-only paragraph immediately before an authored page break in the pre-break flow region without charging its otherwise visible paragraph mark."
}), U({
	id: "word-pre-break-inline-drawing-group",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/pagination.test.ts#moves a preceding image with its pre-break callout when the pair only fits fresh"
	},
	description: "The established pagination regression contract relocates a preceding inline DrawingML resource with an immediately following host-owned anchor paragraph before an authored page break when the pair fits only in a fresh flow region."
}), U({
	id: "word-continuous-section-mark-spacing",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/body-layout-input.test.ts#projects mutually exclusive collapsed-mark and drop-previous-after roles"
	},
	description: "The retained body input projects the established continuous-section empty-mark spacing behavior into one mutually exclusive role before pagination."
}), U({
	id: "word-contextual-spacing-per-side",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/contextual-spacing-body-paint.test.ts#paints the adjudicated six-case gap table"
	},
	description: "For same-style adjacent paragraphs, contextualSpacing removes only the contribution owned by each toggling side; a current-only toggle preserves the previous paragraph spaceAfter contribution."
}), U({
	id: "word-empty-keep-next-bridge",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/layout/body-paginator-production.test.ts#bridges an undecorated empty keepNext mark through the following paragraph"
	},
	description: "Word print pagination treats an undecorated empty keep-with-next paragraph as a bridge: the following paragraph is admitted completely with the first indivisible content of its successor."
}), U({
	id: "word-automatic-keep-next-start-spacing",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/layout/body-paginator-production.test.ts#suppresses leading spacing when a keepNext unit moves to an automatic page"
	},
	description: "When automatic overflow relocates a keep-with-next unit to a fresh physical page, suppress the leading paragraph space-before for that grouped relocation without changing ordinary overflow or authored-break spacing."
}), U({
	id: "word-trailing-space-after-fit-admission",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/layout/paragraph-pagination.test.ts#admits final visible content when only authored spaceAfter crosses the region edge"
	},
	description: "Admit the final visible paragraph content at a flow-region edge when only its authored trailing space crosses the edge, while retaining that space for placement and paint."
}), U({
	id: "word-vertical-rl-final-line-baseline-admission",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "vertical-rl-final-line-baseline-admission",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "In a vertical-rl section, Word admits the final visible text column when its transformed baseline and retained visible ink remain inside the block-end edge even if the complete logical line box crosses that edge. The complete retained advance remains authoritative after admission."
}), U({
	id: "word-lowered-drop-cap-anchor-leading",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "lowered-drop-cap-anchor-leading",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "Word keeps the following anchor text below a baseline-lowered drop-cap glyph while preserving the drop cap exclusion height authored by framePr lines. ECMA-376 specifies those two inputs independently but does not prescribe this interaction."
});
function Nm(e) {
	return Math.max(0, e);
}
function Pm(e) {
	return e === "none";
}
function Fm(e) {
	return Math.max(0, e.advancePt - Math.min(e.authoredSpaceAfterPt, e.retainedSpaceAfterPt));
}
function Im(e) {
	return e.origin.yPt + (e.inkBounds?.descentPt ?? 0);
}
function Lm(e) {
	if (e.kind === "resource" || e.kind === "drawing") return e.bounds.yPt + e.bounds.heightPt;
	if (e.kind === "anchor-host") return null;
	if (e.kind === "tab") {
		let t = e.leaderGlyphs ?? [];
		return t.length > 0 ? Math.max(...t.map(Im)) : null;
	}
	let t = e.paintOps ?? [], n = t.length > 0 ? t.map((t) => e.origin.yPt + t.offset.yPt + (t.blockAxisInkBounds?.endPt ?? t.inkBounds?.descentPt ?? 0)) : [e.origin.yPt];
	for (let t of e.decorations) {
		let e = t.widthPt / 2;
		n.push(t.from.yPt + e, t.to.yPt + e);
		for (let r of t.path ?? []) n.push(r.yPt + e);
	}
	for (let t of e.highlightFragments ?? []) n.push(t.rect.yPt + t.rect.heightPt);
	for (let t of e.runBorderFragments ?? []) {
		let e = t.widthPt / 2;
		n.push(t.from.yPt + e, t.to.yPt + e);
	}
	for (let t of e.emphasis?.glyphs ?? []) n.push(Im(t));
	for (let t of e.ruby?.paintOps ?? []) n.push(Im(t));
	for (let t of e.emphasis?.paths ?? []) {
		let e = t.stroke === null ? 0 : t.strokeWidthPt / 2;
		for (let r of t.points) n.push(r.yPt + e);
	}
	return Math.max(...n);
}
function Rm(e) {
	if (e.writingMode !== "vertical-rl" || e.logicalLineBoxExtentPt <= e.availableBlockExtentPt) return e.logicalLineBoxExtentPt;
	let t = e.paragraph.lines.at(-1);
	if (!t || t.placements.some((e) => e.kind === "text" && (e.paintOps ?? []).some((e) => e.glyphOrientation !== void 0 && e.blockAxisInkBounds === void 0))) return e.logicalLineBoxExtentPt;
	let n = t.placements.flatMap((e) => {
		let t = Lm(e);
		return t === null ? [] : [t];
	});
	if (n.length === 0 || e.paragraph.shading) return e.logicalLineBoxExtentPt;
	for (let t of e.paragraph.borders) {
		let e = t.widthPt / 2;
		n.push(t.from.yPt + e, t.to.yPt + e);
	}
	if (e.paragraph.paragraphMark && !e.paragraph.paragraphMark.hidden) {
		let t = e.paragraph.paragraphMark.bounds;
		n.push(t.yPt + t.heightPt);
	}
	return Math.max(0, Math.max(...n) - e.paragraph.flowBounds.yPt);
}
function zm(e) {
	return e.keepNext && e.inkless && e.undecoratedMark;
}
function Bm(e, t) {
	let n = e[t];
	if (n?.kind !== "body-block" || n.block.kind !== "paragraph") return;
	let r = e[t + 1], i = e[t + 2], a = n.block.inkless === !0 && r?.kind === "begin-section" && r.section.startType === "continuous";
	return a && n.block.spaceBeforePt === 0 ? "collapse-mark" : a ? "suppress-before" : n.block.inkless === !0 && r?.kind === "body-block" && r.block.kind === "paragraph" && r.block.inkless === !0 && r.block.spaceBeforePt === 0 && i?.kind === "begin-section" && i.section.startType === "continuous" ? "drop-previous-after" : void 0;
}
function Vm(e) {
	return e.drawings.length > 0 && e.lines.every((e) => e.placements.every((e) => e.kind === "drawing" || e.kind === "anchor-host"));
}
function Hm(e) {
	return e.lines.some((e) => e.placements.some((e) => (e.kind === "resource" && (e.resourceKind === "image" || e.resourceKind === "chart") || e.kind === "drawing") && e.advancePt > 0 && e.bounds !== void 0 && e.bounds.widthPt > 0 && e.bounds.heightPt > 0));
}
function Um(e, t) {
	if (!Vm(e)) return null;
	let n = e.drawings.filter((e) => e.anchorLayer?.verticalOwnership === "host" && Number.isFinite(e.flowBounds.xPt) && Number.isFinite(e.flowBounds.yPt) && Number.isFinite(e.flowBounds.widthPt) && Number.isFinite(e.flowBounds.heightPt) && e.flowBounds.widthPt > 0 && e.flowBounds.heightPt > 0);
	if (n.length !== e.drawings.length) return null;
	let r = Math.max(...n.map((e) => e.flowBounds.yPt + e.flowBounds.heightPt));
	return Math.max(0, r - t);
}
function Wm(e) {
	if (!Vm(e)) return null;
	let { paragraphMark: t, ...n } = e;
	return Object.freeze({
		...n,
		advancePt: 0,
		flowBounds: Object.freeze({
			...e.flowBounds,
			heightPt: 0
		})
	});
}
function Gm(e) {
	let t = /* @__PURE__ */ new Set(), n = !1;
	for (let r = e.length - 1; r >= 0; --r) {
		let i = e[r];
		if (i.kind === "body-block") {
			n = i.block.kind !== "paragraph" || !i.block.pageBreakBefore;
			continue;
		}
		if (i.kind === "adjacent-table-group") {
			n = !0;
			continue;
		}
		if (i.kind === "authored-break") {
			i.break === "column" ? n && t.add(r) : n = !1;
			continue;
		}
		i.kind === "begin-section" && i.section.startType !== "continuous" && (n = !1);
	}
	return t;
}
U({
	id: "word-classic-chart-space-frame",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "classic-chart-space-frame-style-matrix",
		application: "Microsoft Word",
		version: "16.112.4",
		platform: "macOS 26.6.2"
	},
	description: "For classic DOCX charts with omitted direct frame properties, the complete ST_Style 1..48 matrix uses 10pt rounded chart-space corners; omitted style and styles 1..40 use a 0.5pt #898989 outline, while styles 41..48 use no outline. Direct roundedCorners and line paint remain authoritative, followed by a linked chartStyle chartArea role."
}), U({
	id: "word-track-change-author-palette",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/layout/compatibility.test.ts#pins the eight track-change author colors independently of author indexing"
	},
	description: "Use the established eight-color revision-author palette while keeping the renderer deterministic author-index policy outside this compatibility claim."
}), U({
	id: "word-track-change-decoration",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/layout/compatibility.test.ts#maps visible track-change kinds to their revision decorations"
	},
	description: "When revision markup is visible, underline inserted text and strike through deleted text in the selected revision-author color."
}), U({
	id: "word-paragraph-shading-border-box",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/layout/paragraph.test.ts#extends paragraph shading through visible border spacing"
	},
	description: "Extend paragraph shading through each visible paragraph-border spacing interval so the fill reaches the painted border box."
}), U({
	id: "word-auto-text-contrast-effective-background",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/cell-shading-auto-contrast.test.ts#paints a color-less run white inside a near-black cell"
	},
	description: "Resolve automatic or never-authored text color against the nearest effective run, paragraph, or cell background before applying the deterministic contrast picker."
}), U({
	id: "word-run-decoration-justified-advance",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/run-inline-formatting.test.ts#extends the border frame across justified inter-word slack"
	},
	description: "Extend run shading, borders, underline, and strike decoration through the justification pitch owned by that run, including widened spaces."
}), U({
	id: "word-snap-to-chars-terminal-underline",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "snap-to-chars-terminal-underline-boundaries",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "In the observed horizontal LTR snapToChars matrix, retain trailing character-cell slack in line advance while ending a terminal underline at the retained final-glyph ink extent. Authored trailing spaces remain content, and RTL/vertical text stays outside this rule."
}), U({
	id: "word-paragraph-border-flow-reservation",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/para-bottom-border-flow.test.ts#a bottom border drops the following paragraph by exactly space + width/2"
	},
	description: "Reserve a visible bottom paragraph border through its spacing interval and half stroke width so following flow begins below its painted outer edge."
});
var Km = Object.freeze([
	"#C00000",
	"#0070C0",
	"#00B050",
	"#7030A0",
	"#E97132",
	"#196B24",
	"#9E480E",
	"#525252"
]);
U({
	id: "word-track-change-bar",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/track-changes-markup-layout.test.ts#emits one margin change bar per line containing revision text in the markup view"
	},
	description: "In the markup view, draw a vertical change bar in the margin beside every line that contains tracked-change content, matching the Word reviewing-pane convention (an app convention; ECMA-376 defines no bar geometry)."
});
var qm = Object.freeze({
	underline: !1,
	strike: !1
}), Jm = Object.freeze({
	underline: !0,
	strike: !1
}), Ym = Object.freeze({
	underline: !1,
	strike: !0
});
function Xm(e) {
	return e === "insertion" || e === "moveTo" ? Jm : e === "deletion" || e === "moveFrom" ? Ym : qm;
}
//#endregion
//#region packages/docx/src/text-distribute.ts
function Zm(e, t, n, r, i = -Infinity, a = !0, o = !1) {
	return L(e, t, {
		firstContentSi: n,
		lastDrawnSi: r,
		minPerGap: i,
		seaClusterGaps: o,
		...a ? {} : { isGapChar: () => !1 }
	});
}
function Qm(e) {
	if (!e) return 0;
	let t = 0;
	for (let n of e.perSeg.values()) t += n.splitBefore.length + +!!n.trailingGap;
	return e.perGap * t;
}
function $m(e, t, n, r, i) {
	return t >= 0 ? null : Zm(e, t, n, r, -i * .25, !1);
}
//#endregion
//#region packages/docx/src/arabic-joining.generated.ts
var eh = [
	"U",
	"C",
	"D",
	"L",
	"R",
	"T"
], th = [
	0,
	173,
	174,
	768,
	880,
	1155,
	1162,
	1425,
	1470,
	1471,
	1472,
	1473,
	1475,
	1476,
	1478,
	1479,
	1480,
	1552,
	1563,
	1564,
	1565,
	1568,
	1569,
	1570,
	1574,
	1575,
	1576,
	1577,
	1578,
	1583,
	1587,
	1600,
	1601,
	1608,
	1609,
	1611,
	1632,
	1646,
	1648,
	1649,
	1652,
	1653,
	1656,
	1672,
	1690,
	1728,
	1729,
	1731,
	1740,
	1741,
	1742,
	1743,
	1744,
	1746,
	1748,
	1749,
	1750,
	1757,
	1759,
	1765,
	1767,
	1769,
	1770,
	1774,
	1776,
	1786,
	1789,
	1791,
	1792,
	1807,
	1808,
	1809,
	1810,
	1813,
	1818,
	1822,
	1823,
	1832,
	1833,
	1834,
	1835,
	1836,
	1837,
	1839,
	1840,
	1867,
	1869,
	1870,
	1881,
	1884,
	1899,
	1901,
	1905,
	1906,
	1907,
	1909,
	1912,
	1914,
	1920,
	1958,
	1969,
	1994,
	2027,
	2036,
	2042,
	2043,
	2045,
	2046,
	2070,
	2074,
	2075,
	2084,
	2085,
	2088,
	2089,
	2094,
	2112,
	2113,
	2118,
	2120,
	2121,
	2122,
	2132,
	2133,
	2134,
	2137,
	2140,
	2144,
	2145,
	2146,
	2150,
	2151,
	2152,
	2153,
	2155,
	2160,
	2179,
	2182,
	2183,
	2185,
	2190,
	2191,
	2192,
	2199,
	2208,
	2218,
	2221,
	2222,
	2223,
	2225,
	2227,
	2233,
	2234,
	2249,
	2250,
	2274,
	2275,
	2307,
	2362,
	2363,
	2364,
	2365,
	2369,
	2377,
	2381,
	2382,
	2385,
	2392,
	2402,
	2404,
	2433,
	2434,
	2492,
	2493,
	2497,
	2501,
	2509,
	2510,
	2530,
	2532,
	2558,
	2559,
	2561,
	2563,
	2620,
	2621,
	2625,
	2627,
	2631,
	2633,
	2635,
	2638,
	2641,
	2642,
	2672,
	2674,
	2677,
	2678,
	2689,
	2691,
	2748,
	2749,
	2753,
	2758,
	2759,
	2761,
	2765,
	2766,
	2786,
	2788,
	2810,
	2816,
	2817,
	2818,
	2876,
	2877,
	2879,
	2880,
	2881,
	2885,
	2893,
	2894,
	2901,
	2903,
	2914,
	2916,
	2946,
	2947,
	3008,
	3009,
	3021,
	3022,
	3072,
	3073,
	3076,
	3077,
	3132,
	3133,
	3134,
	3137,
	3142,
	3145,
	3146,
	3150,
	3157,
	3159,
	3170,
	3172,
	3201,
	3202,
	3260,
	3261,
	3263,
	3264,
	3270,
	3271,
	3276,
	3278,
	3298,
	3300,
	3328,
	3330,
	3387,
	3389,
	3393,
	3397,
	3405,
	3406,
	3426,
	3428,
	3457,
	3458,
	3530,
	3531,
	3538,
	3541,
	3542,
	3543,
	3633,
	3634,
	3636,
	3643,
	3655,
	3663,
	3761,
	3762,
	3764,
	3773,
	3784,
	3791,
	3864,
	3866,
	3893,
	3894,
	3895,
	3896,
	3897,
	3898,
	3953,
	3967,
	3968,
	3973,
	3974,
	3976,
	3981,
	3992,
	3993,
	4029,
	4038,
	4039,
	4141,
	4145,
	4146,
	4152,
	4153,
	4155,
	4157,
	4159,
	4184,
	4186,
	4190,
	4193,
	4209,
	4213,
	4226,
	4227,
	4229,
	4231,
	4237,
	4238,
	4253,
	4254,
	4957,
	4960,
	5906,
	5909,
	5938,
	5940,
	5970,
	5972,
	6002,
	6004,
	6068,
	6070,
	6071,
	6078,
	6086,
	6087,
	6089,
	6100,
	6109,
	6110,
	6151,
	6152,
	6154,
	6155,
	6158,
	6159,
	6160,
	6176,
	6265,
	6277,
	6279,
	6313,
	6314,
	6315,
	6432,
	6435,
	6439,
	6441,
	6450,
	6451,
	6457,
	6460,
	6679,
	6681,
	6683,
	6684,
	6742,
	6743,
	6744,
	6751,
	6752,
	6753,
	6754,
	6755,
	6757,
	6765,
	6771,
	6781,
	6783,
	6784,
	6832,
	6878,
	6880,
	6892,
	6912,
	6916,
	6964,
	6965,
	6966,
	6971,
	6972,
	6973,
	6978,
	6979,
	7019,
	7028,
	7040,
	7042,
	7074,
	7078,
	7080,
	7082,
	7083,
	7086,
	7142,
	7143,
	7144,
	7146,
	7149,
	7150,
	7151,
	7154,
	7212,
	7220,
	7222,
	7224,
	7376,
	7379,
	7380,
	7393,
	7394,
	7401,
	7405,
	7406,
	7412,
	7413,
	7416,
	7418,
	7616,
	7680,
	8203,
	8204,
	8205,
	8206,
	8208,
	8234,
	8239,
	8288,
	8293,
	8298,
	8304,
	8400,
	8433,
	11503,
	11506,
	11647,
	11648,
	11744,
	11776,
	12330,
	12334,
	12441,
	12443,
	42607,
	42611,
	42612,
	42622,
	42654,
	42656,
	42736,
	42738,
	43010,
	43011,
	43014,
	43015,
	43019,
	43020,
	43045,
	43047,
	43052,
	43053,
	43072,
	43122,
	43123,
	43204,
	43206,
	43232,
	43250,
	43263,
	43264,
	43302,
	43310,
	43335,
	43346,
	43392,
	43395,
	43443,
	43444,
	43446,
	43450,
	43452,
	43454,
	43493,
	43494,
	43561,
	43567,
	43569,
	43571,
	43573,
	43575,
	43587,
	43588,
	43596,
	43597,
	43644,
	43645,
	43696,
	43697,
	43698,
	43701,
	43703,
	43705,
	43710,
	43712,
	43713,
	43714,
	43756,
	43758,
	43766,
	43767,
	44005,
	44006,
	44008,
	44009,
	44013,
	44014,
	64286,
	64287,
	65024,
	65040,
	65056,
	65072,
	65279,
	65280,
	65529,
	65532,
	66045,
	66046,
	66272,
	66273,
	66422,
	66427,
	68097,
	68100,
	68101,
	68103,
	68108,
	68112,
	68152,
	68155,
	68159,
	68160,
	68288,
	68293,
	68294,
	68295,
	68296,
	68297,
	68299,
	68301,
	68302,
	68307,
	68311,
	68312,
	68317,
	68318,
	68321,
	68322,
	68324,
	68325,
	68327,
	68331,
	68335,
	68336,
	68480,
	68481,
	68482,
	68483,
	68486,
	68489,
	68490,
	68492,
	68493,
	68494,
	68496,
	68497,
	68498,
	68521,
	68525,
	68527,
	68864,
	68865,
	68898,
	68899,
	68900,
	68904,
	68969,
	68974,
	69291,
	69293,
	69314,
	69315,
	69317,
	69318,
	69320,
	69370,
	69376,
	69424,
	69427,
	69428,
	69445,
	69446,
	69457,
	69460,
	69461,
	69488,
	69492,
	69494,
	69506,
	69510,
	69552,
	69553,
	69554,
	69556,
	69559,
	69560,
	69561,
	69563,
	69565,
	69566,
	69568,
	69569,
	69570,
	69572,
	69573,
	69577,
	69578,
	69579,
	69580,
	69633,
	69634,
	69688,
	69703,
	69744,
	69745,
	69747,
	69749,
	69759,
	69762,
	69811,
	69815,
	69817,
	69819,
	69826,
	69827,
	69888,
	69891,
	69927,
	69932,
	69933,
	69941,
	70003,
	70004,
	70016,
	70018,
	70070,
	70079,
	70089,
	70093,
	70095,
	70096,
	70191,
	70194,
	70196,
	70197,
	70198,
	70200,
	70206,
	70207,
	70209,
	70210,
	70367,
	70368,
	70371,
	70379,
	70400,
	70402,
	70459,
	70461,
	70464,
	70465,
	70502,
	70509,
	70512,
	70517,
	70587,
	70593,
	70606,
	70607,
	70608,
	70609,
	70610,
	70611,
	70625,
	70627,
	70712,
	70720,
	70722,
	70725,
	70726,
	70727,
	70750,
	70751,
	70835,
	70841,
	70842,
	70843,
	70847,
	70849,
	70850,
	70852,
	71090,
	71094,
	71100,
	71102,
	71103,
	71105,
	71132,
	71134,
	71219,
	71227,
	71229,
	71230,
	71231,
	71233,
	71339,
	71340,
	71341,
	71342,
	71344,
	71350,
	71351,
	71352,
	71453,
	71454,
	71455,
	71456,
	71458,
	71462,
	71463,
	71468,
	71727,
	71736,
	71737,
	71739,
	71995,
	71997,
	71998,
	71999,
	72003,
	72004,
	72148,
	72152,
	72154,
	72156,
	72160,
	72161,
	72193,
	72203,
	72243,
	72249,
	72251,
	72255,
	72263,
	72264,
	72273,
	72279,
	72281,
	72284,
	72330,
	72343,
	72344,
	72346,
	72544,
	72545,
	72546,
	72549,
	72550,
	72551,
	72752,
	72759,
	72760,
	72766,
	72767,
	72768,
	72850,
	72872,
	72874,
	72881,
	72882,
	72884,
	72885,
	72887,
	73009,
	73015,
	73018,
	73019,
	73020,
	73022,
	73023,
	73030,
	73031,
	73032,
	73104,
	73106,
	73109,
	73110,
	73111,
	73112,
	73459,
	73461,
	73472,
	73474,
	73526,
	73531,
	73536,
	73537,
	73538,
	73539,
	73562,
	73563,
	78896,
	78913,
	78919,
	78934,
	90398,
	90410,
	90413,
	90416,
	92912,
	92917,
	92976,
	92983,
	94031,
	94032,
	94095,
	94099,
	94180,
	94181,
	113821,
	113823,
	113824,
	113828,
	118528,
	118574,
	118576,
	118599,
	119143,
	119146,
	119155,
	119171,
	119173,
	119180,
	119210,
	119214,
	119362,
	119365,
	121344,
	121399,
	121403,
	121453,
	121461,
	121462,
	121476,
	121477,
	121499,
	121504,
	121505,
	121520,
	122880,
	122887,
	122888,
	122905,
	122907,
	122914,
	122915,
	122917,
	122918,
	122923,
	123023,
	123024,
	123184,
	123191,
	123566,
	123567,
	123628,
	123632,
	124140,
	124144,
	124398,
	124400,
	124643,
	124644,
	124646,
	124647,
	124654,
	124656,
	124661,
	124662,
	125136,
	125143,
	125184,
	125252,
	125260,
	917505,
	917506,
	917536,
	917632,
	917760,
	918e3
], nh = [
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	2,
	0,
	4,
	2,
	4,
	2,
	4,
	2,
	4,
	2,
	1,
	2,
	4,
	2,
	5,
	0,
	2,
	5,
	4,
	0,
	4,
	2,
	4,
	2,
	4,
	2,
	4,
	2,
	4,
	2,
	4,
	2,
	4,
	0,
	4,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	4,
	0,
	2,
	0,
	2,
	0,
	5,
	4,
	5,
	2,
	4,
	2,
	4,
	2,
	4,
	2,
	4,
	2,
	4,
	2,
	4,
	5,
	0,
	4,
	2,
	4,
	2,
	4,
	2,
	4,
	2,
	4,
	2,
	4,
	2,
	0,
	5,
	0,
	2,
	5,
	0,
	1,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	4,
	2,
	4,
	2,
	4,
	2,
	4,
	2,
	4,
	5,
	0,
	2,
	0,
	2,
	0,
	4,
	2,
	4,
	0,
	4,
	1,
	2,
	0,
	2,
	4,
	2,
	0,
	5,
	2,
	4,
	0,
	4,
	2,
	4,
	2,
	4,
	2,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	2,
	0,
	1,
	5,
	0,
	5,
	0,
	2,
	0,
	5,
	2,
	5,
	2,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	1,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	2,
	3,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	2,
	4,
	0,
	4,
	0,
	4,
	0,
	3,
	4,
	2,
	3,
	2,
	4,
	2,
	4,
	0,
	4,
	5,
	0,
	2,
	4,
	0,
	2,
	4,
	2,
	4,
	2,
	4,
	2,
	4,
	2,
	4,
	2,
	4,
	0,
	4,
	2,
	0,
	3,
	2,
	4,
	2,
	5,
	0,
	5,
	0,
	5,
	0,
	4,
	2,
	0,
	2,
	0,
	5,
	0,
	2,
	4,
	2,
	0,
	5,
	2,
	4,
	0,
	2,
	4,
	2,
	5,
	0,
	2,
	0,
	2,
	4,
	0,
	2,
	4,
	2,
	4,
	2,
	0,
	2,
	4,
	2,
	0,
	4,
	2,
	3,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0,
	2,
	5,
	0,
	5,
	0,
	5,
	0,
	5,
	0
], rh = [
	1587,
	1588,
	1589,
	1590,
	1690,
	1691,
	1692,
	1693,
	1694,
	1786,
	1787,
	1884,
	1901,
	1904,
	1917,
	1918,
	2223
], ih = [
	1580,
	1581,
	1582,
	1665,
	1666,
	1667,
	1668,
	1669,
	1670,
	1671,
	1727,
	1879,
	1880,
	1902,
	1903,
	1906,
	1916,
	2186,
	2210,
	2241,
	2245,
	2246
], ah = [
	1576,
	1578,
	1579,
	1646,
	1657,
	1658,
	1659,
	1660,
	1661,
	1662,
	1663,
	1664,
	1872,
	1873,
	1874,
	1875,
	1876,
	1877,
	1878,
	2208,
	2209,
	2230,
	2231,
	2232,
	2238,
	2239,
	2240
], oh = [
	1574,
	1585,
	1586,
	1597,
	1598,
	1599,
	1609,
	1610,
	1656,
	1681,
	1682,
	1683,
	1684,
	1685,
	1686,
	1687,
	1688,
	1689,
	1740,
	1742,
	1744,
	1745,
	1775,
	1883,
	1899,
	1900,
	1905,
	1909,
	1910,
	1911,
	2216,
	2217,
	2218,
	2226,
	2233,
	2234,
	69319
], sh = [
	1570,
	1571,
	1573,
	1575,
	1591,
	1592,
	1595,
	1596,
	1603,
	1604,
	1649,
	1650,
	1651,
	1653,
	1695,
	1705,
	1707,
	1708,
	1709,
	1710,
	1711,
	1712,
	1713,
	1714,
	1715,
	1716,
	1717,
	1718,
	1719,
	1720,
	1890,
	1891,
	1892,
	1898,
	1907,
	1908,
	1919,
	2160,
	2161,
	2162,
	2163,
	2164,
	2165,
	2166,
	2167,
	2168,
	2169,
	2170,
	2171,
	2172,
	2173,
	2174,
	2175,
	2176,
	2177,
	2178,
	2187,
	2188,
	2189,
	2211,
	2214,
	2224,
	2228,
	2242,
	2247,
	2248,
	69315,
	69316
], ch = [
	1572,
	1593,
	1594,
	1601,
	1602,
	1608,
	1647,
	1654,
	1655,
	1696,
	1697,
	1698,
	1699,
	1700,
	1701,
	1702,
	1703,
	1704,
	1732,
	1733,
	1734,
	1735,
	1736,
	1737,
	1738,
	1739,
	1743,
	1788,
	1885,
	1886,
	1887,
	1888,
	1889,
	1912,
	1913,
	2212,
	2213,
	2219,
	2227,
	2229,
	2243
];
//#endregion
//#region packages/docx/src/arabic-joining.ts
function lh(e) {
	let t = 0, n = th.length - 1, r = -1;
	for (; t <= n;) {
		let i = t + (n - t >> 1);
		th[i] <= e ? (r = i, t = i + 1) : n = i - 1;
	}
	return r < 0 ? "U" : eh[nh[r]] ?? "U";
}
function uh(e) {
	let t = lh(e);
	return t === "D" || t === "L" || t === "C";
}
function dh(e) {
	let t = lh(e);
	return t === "D" || t === "R" || t === "C";
}
var fh = 1604, ph = new Set([
	1575,
	1570,
	1571,
	1573,
	1649
]), mh = 1600, hh = new Set(rh), gh = new Set(ih), _h = new Set(ah), vh = new Set(oh), yh = new Set(sh), bh = new Set(ch), xh = /* @__PURE__ */ function(e) {
	return e[e.Normal = 7] = "Normal", e[e.Waw = 8] = "Waw", e[e.BaRa = 9] = "BaRa", e[e.Alef = 10] = "Alef", e[e.HahDal = 11] = "HahDal", e[e.Seen = 12] = "Seen", e[e.Kashida = 13] = "Kashida", e;
}(xh || {});
function Sh(e) {
	let t = [...e].map((e) => e.codePointAt(0)), n = [], r = t.length > 0 && lh(t[0]) !== "T" ? 0 : -1;
	for (let e = 1; e < t.length; e++) {
		let i = t[e];
		if (lh(i) !== "T") {
			if (r >= 0) {
				let a = t[r];
				!(a === fh && ph.has(i)) && uh(a) && dh(i) && n.push(e);
			}
			r = e;
		}
	}
	return n;
}
function Ch(e, t, n) {
	let r = t - 1;
	for (; r >= 0 && lh(e[r]) === "T";) r--;
	let i = e[r], a = e[t];
	return i === mh ? xh.Kashida : hh.has(i) ? xh.Seen : gh.has(i) ? xh.HahDal : Es(t, n) && yh.has(a) ? xh.Alef : _h.has(i) && vh.has(a) ? xh.BaRa : Es(t, n) && bh.has(a) ? xh.Waw : xh.Normal;
}
function wh(e) {
	let t = [...e], n = [];
	for (let e = 0; e < t.length;) {
		for (; e < t.length && /\s/u.test(t[e]);) e++;
		if (e >= t.length) break;
		let r = e + 1;
		for (; r < t.length && !/\s/u.test(t[r]);) r++;
		let i = t.slice(e, r), a = i.map((e) => e.codePointAt(0)), o = a.length - 1;
		for (; o >= 0 && lh(a[o]) === "T";) o--;
		let s = -1, c = -1;
		for (let e of Sh(i.join(""))) {
			let t = Ch(a, e, o);
			t >= c && (s = e, c = t);
		}
		s >= 0 && n.push({
			beforeCp: e + s,
			priority: c
		}), e = r;
	}
	return n;
}
//#endregion
//#region packages/docx/src/kashida-justify.ts
var Th = "ـ";
function Eh(e, t) {
	let n = [...e], r = "";
	for (let e = 0; e < n.length; e++) {
		let i = t.get(e) ?? 0;
		i > 0 && (r += Th.repeat(i)), r += n[e];
	}
	return r;
}
function Dh(e, t, n, r) {
	if (t <= .5) return null;
	let i = [];
	for (let t = 0; t < e.length; t++) {
		let n = e[t].text;
		if (n !== void 0) for (let { beforeCp: e, priority: r } of wh(n)) i.push({
			si: t,
			beforeCp: e,
			priority: r,
			textOrder: i.length
		});
	}
	if (i.length === 0) return null;
	i.sort((e, t) => t.priority - e.priority || e.textOrder - t.textOrder);
	let a = n === "low" ? 1 : n === "medium" ? 2 : Infinity, o = a, s = i.length * 64, c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
	for (let { si: t } of i) {
		if (u.has(t)) continue;
		let n = r(t, e[t].text);
		l.set(t, n), u.set(t, n);
	}
	let d = t, f = 0;
	for (let t = 0; t < o && d > .5 && f < s; t++) {
		let t = !1;
		for (let { si: n, beforeCp: o } of i) {
			if (d <= .5 || f >= s) break;
			let i = c.get(n);
			i || (i = /* @__PURE__ */ new Map(), c.set(n, i));
			let l = i.get(o) ?? 0;
			if (l >= a) continue;
			i.set(o, l + 1);
			let p = r(n, Eh(e[n].text, i)), m = p - u.get(n);
			m > 0 && m <= d + 1e-6 ? (u.set(n, p), d -= m, f++, t = !0) : l === 0 ? i.delete(o) : i.set(o, l);
		}
		if (!t) break;
	}
	let p = /* @__PURE__ */ new Map();
	for (let [t, n] of c) {
		let r = [...n.entries()].filter(([, e]) => e > 0).sort(([e], [t]) => e - t).map(([e, t]) => ({
			beforeCp: e,
			count: t
		}));
		r.length !== 0 && p.set(t, {
			text: Eh(e[t].text, n),
			insertions: r,
			advanceDeltaPx: u.get(t) - l.get(t)
		});
	}
	if (p.size === 0) return null;
	let m = [...p.values()].reduce((e, t) => e + t.advanceDeltaPx, 0);
	return {
		perSeg: p,
		appliedPx: m,
		residualPx: t - m
	};
}
//#endregion
//#region packages/docx/src/layout/shape-drawing-plan.ts
var Oh = 1;
function kh(e) {
	return Object.freeze({
		status: "unsupported",
		command: Object.freeze({ kind: "noop" }),
		diagnostics: Object.freeze([Object.freeze({
			code: "UNSUPPORTED_FEATURE",
			severity: "error",
			message: e
		})])
	});
}
function Ah(e) {
	return e ? {
		type: e.type,
		w: e.w,
		len: e.len
	} : void 0;
}
function jh(e) {
	if (e) return e.fillType === "gradient" ? {
		fillType: "gradient",
		stops: e.stops.map((e) => ({
			position: e.position,
			color: e.color
		})),
		angle: e.angle,
		gradType: e.gradType,
		...e.scaled === void 0 ? {} : { scaled: e.scaled },
		...e.path === void 0 ? {} : { path: e.path },
		...e.fillToRect === void 0 ? {} : { fillToRect: { ...e.fillToRect } },
		...e.tileRect === void 0 ? {} : { tileRect: { ...e.tileRect } },
		...e.flip === void 0 ? {} : { flip: e.flip },
		...e.rotWithShape === void 0 ? {} : { rotWithShape: e.rotWithShape }
	} : {
		fillType: "pattern",
		fg: e.fg,
		bg: e.bg,
		preset: e.preset
	};
}
function Mh(e) {
	if (!e.stroke || !e.strokeWidth || e.strokeWidth <= 0) return null;
	let t = jh(e.strokeFill);
	return {
		color: e.stroke,
		width: e.strokeWidth,
		...t ? { fill: t } : {},
		...e.strokeDash ? { dashStyle: e.strokeDash } : {},
		...e.strokeCustomDash?.length ? { customDash: e.strokeCustomDash } : {},
		...e.strokeCap ? { lineCap: e.strokeCap } : {},
		...e.strokeJoin ? { lineJoin: e.strokeJoin } : {},
		...e.strokeMiterLimit !== void 0 && e.strokeMiterLimit !== null ? { miterLimit: e.strokeMiterLimit } : {},
		...e.strokeAlignment ? { alignment: e.strokeAlignment } : {},
		...e.strokeCompound ? { cmpd: e.strokeCompound } : {},
		...Ah(e.headEnd) ? { headEnd: Ah(e.headEnd) } : {},
		...Ah(e.tailEnd) ? { tailEnd: Ah(e.tailEnd) } : {}
	};
}
function Nh(e, t, n, r, i) {
	let a = r !== void 0 && (r.textPathOk !== void 0 || r.on !== void 0 || r.fitShape !== void 0 || r.fitPath !== void 0 || r.trim !== void 0 || r.xScale !== void 0);
	if (r !== void 0 && (!a || r.textPathOk === !0 && r.on === !0)) {
		if (e.fill?.fillType === "image") return kh("VML textPath with a DrawingML image fill is not rendered");
		if (r.fitPath === !0) return kh("VML textPath fitPath=true is not rendered");
		if (r.xScale === !0) return kh("VML textPath xScale=true is not rendered");
		if (r.string.trim().length === 0) return Object.freeze({
			status: "planned",
			command: Object.freeze({ kind: "noop" })
		});
		if (!n) throw Error("Shape textPath acquisition requires TextLayoutService");
		let i = a ? r.fitShape === !0 : !0;
		if (r.fontSizePt !== void 0 && (!Number.isFinite(r.fontSizePt) || r.fontSizePt < 0)) throw RangeError("VML textPath fontSizePt must be finite and non-negative");
		if (!i && r.fontSizePt === void 0) return kh("VML textPath fitShape=false requires an authored font-size");
		if (r.fontSizePt === 0) return Object.freeze({
			status: "planned",
			command: Object.freeze({ kind: "noop" })
		});
		let o = r.fontSizePt ?? Oh, s = r.fontFamily ?? void 0, c = n.shape({
			text: r.string,
			fontSizePt: o,
			fonts: {
				ascii: s,
				highAnsi: s,
				eastAsia: s,
				complexScript: s
			},
			weight: r.bold ? 700 : 400,
			style: r.italic ? "italic" : "normal",
			measure: !0
		});
		if (r.trim === !0 && !c.inkBounds) return kh("VML textPath trim=true requires glyph ink bounds");
		let l = r.trim === !0 ? c.inkBounds?.xMinPt ?? 0 : 0, u = r.trim === !0 ? c.inkBounds?.xMaxPt ?? 0 : c.advancePt, d = r.trim === !0 ? c.inkBounds?.ascentPt ?? 0 : c.ascentPt, f = r.trim === !0 ? c.inkBounds?.descentPt ?? 0 : c.descentPt, p = {
			xPt: l,
			yPt: -d,
			widthPt: u - l,
			heightPt: d + f
		};
		if (!Number.isFinite(c.advancePt) || Object.values(p).some((e) => !Number.isFinite(e)) || c.spans.some((e) => !Number.isFinite(e.advancePt))) throw Error("Shape textPath acquisition produced non-finite metrics");
		return p.widthPt <= 0 || p.heightPt <= 0 || c.spans.length === 0 ? kh("VML textPath produced empty glyph metrics") : Object.freeze({
			status: "planned",
			command: B({
				kind: "watermark-text",
				rect: { ...t },
				text: r.string,
				fill: e.fill ? {
					...e.fill,
					...e.fill.fillType === "gradient" ? { stops: e.fill.stops.map((e) => ({ ...e })) } : {}
				} : null,
				opacity: Math.max(0, Math.min(1, e.fillOpacity ?? 1)),
				rotationDeg: e.rotation ?? 0,
				fitShape: i,
				fontSizePt: o,
				sourceBounds: p,
				spans: c.spans.map((e) => ({
					text: e.text,
					advancePt: e.advancePt,
					fontRoute: e.fontRoute,
					fontWeight: e.font.weight,
					fontStyle: e.font.style
				}))
			}, "VML textPath command")
		});
	}
	let o = {
		rect: {
			x: t.xPt,
			y: t.yPt,
			w: t.widthPt,
			h: t.heightPt
		},
		geometry: e.presetGeometry ? {
			kind: "preset",
			name: e.presetGeometry,
			adjustments: [...e.adjValues ?? []]
		} : {
			kind: "custom",
			subpaths: e.subpaths.map((e) => e.map((e) => ({ ...e })))
		},
		fill: e.fill && e.fill.fillType !== "image" ? {
			...e.fill,
			...e.fill.fillType === "gradient" ? { stops: e.fill.stops.map((e) => ({ ...e })) } : {}
		} : null,
		stroke: Mh(e),
		transform: {
			rotationDeg: e.rotation ?? 0,
			flipH: e.flipH ?? !1,
			flipV: e.flipV ?? !1
		}
	};
	if (e.fill?.fillType === "image") {
		if (e.fill.tile !== void 0) return Object.freeze({
			status: "unsupported",
			command: Object.freeze({ kind: "noop" }),
			diagnostics: Object.freeze([Object.freeze({
				code: "UNSUPPORTED_FEATURE",
				severity: "error",
				message: "Tiled DrawingML shape image fills are not rendered"
			})])
		});
		if (!i) throw Error("DrawingML shape image fill requires a retained image resource key");
		return Object.freeze({
			status: "planned",
			command: B({
				kind: "drawingml-image-fill",
				plan: o,
				resourceKey: i,
				...e.fill.fillRect === void 0 ? {} : { fillRect: {
					l: e.fill.fillRect.l ?? 0,
					t: e.fill.fillRect.t ?? 0,
					r: e.fill.fillRect.r ?? 0,
					b: e.fill.fillRect.b ?? 0
				} }
			}, "DrawingML shape image-fill command")
		});
	}
	return Object.freeze({
		status: "planned",
		command: B({
			kind: "drawingml-shape",
			plan: o
		}, "DrawingML shape command")
	});
}
//#endregion
//#region packages/docx/src/layout/textbox-input.ts
function Ph(e, t) {
	let n = e.fontFamily ?? null;
	return {
		fontSizePt: t,
		fonts: {
			ascii: n,
			highAnsi: n,
			eastAsia: e.fontFamilyEastAsia ?? n,
			complexScript: n
		},
		weight: 400,
		style: "normal",
		complexScript: !1
	};
}
function Fh(e, t = {
	story: "textbox",
	storyInstance: "shape",
	path: []
}, n = Ph) {
	return B((e.textBlocks ?? []).map((e, r) => {
		let i = {
			story: "textbox",
			storyInstance: t.storyInstance,
			path: [...t.path, r]
		}, a = e.runs?.length ? e.runs : [{
			text: e.text,
			fontSizePt: e.fontSizePt,
			color: e.color,
			fontFamily: e.fontFamily,
			bold: e.bold,
			italic: e.italic
		}], o = e.paragraphMarkColor === void 0 ? e.color ?? a[0]?.color : e.paragraphMarkColor ?? void 0, s = e.numbering ? {
			...e.numbering,
			...e.numbering.color == null && !e.numbering.colorAuto && o ? { color: o } : {}
		} : null;
		return {
			source: i,
			spacing: {
				beforePt: e.spaceBefore ?? 0,
				afterPt: e.spaceAfter ?? 0
			},
			runs: a.map((t) => ({
				text: t.text,
				fontSizePt: t.fontSizePt,
				...t.color ?? e.color ? { color: `#${t.color ?? e.color}` } : {},
				...t.fontFamily || e.fontFamily ? { fontFamily: t.fontFamily ?? e.fontFamily ?? void 0 } : {},
				...t.fontFamilyEastAsia ? { fontFamilyEastAsia: t.fontFamilyEastAsia } : {},
				bold: t.bold ?? e.bold ?? !1,
				italic: t.italic ?? e.italic ?? !1,
				...t.ruby ? { ruby: t.ruby } : {}
			})),
			alignment: e.alignment ?? "left",
			indentLeftPt: e.indentLeft ?? 0,
			indentRightPt: e.indentRight ?? 0,
			indentFirstPt: e.indentFirst ?? 0,
			lineSpacing: e.lineSpacingVal == null ? null : {
				value: e.lineSpacingVal,
				rule: e.lineSpacingRule === "exact" || e.lineSpacingRule === "atLeast" ? e.lineSpacingRule : "auto",
				explicit: !0
			},
			tabStops: (e.tabStops ?? []).map((e) => ({ ...e })),
			...e.bidi === void 0 ? {} : { bidi: e.bidi },
			contextualSpacing: e.contextualSpacing ?? !1,
			...e.styleId === void 0 ? {} : { styleId: e.styleId },
			...s ? {
				numbering: s,
				numberingMarkerShapeInput: n(s, e.fontSizePt)
			} : {},
			...e.imagePath ? { image: {
				imagePath: e.imagePath,
				mimeType: e.mimeType ?? "application/octet-stream",
				...e.svgImagePath ? { svgImagePath: e.svgImagePath } : {},
				widthPt: e.imageWidthPt ?? 0,
				heightPt: e.imageHeightPt ?? 0
			} } : {}
		};
	}), "DOCX text box acquisition input");
}
//#endregion
//#region packages/docx/src/layout/retained-typography.ts
function Ih(e) {
	if (!Number.isFinite(e.advancePt) || e.advancePt <= 0) throw RangeError("Tab leader glyph advance must be finite and positive");
	let t = Math.floor(e.interval.widthPt / e.advancePt), n = e.interval.widthPt - t * e.advancePt;
	return Array.from({ length: t }, (t, r) => ({
		text: e.glyph,
		origin: {
			xPt: e.interval.xPt + n / 2 + r * e.advancePt,
			yPt: e.baselinePt
		},
		fontRoute: e.fontRoute,
		fontSizePt: e.fontSizePt,
		fontWeight: e.fontWeight,
		fontStyle: e.fontStyle,
		color: e.color
	}));
}
function Lh(e) {
	let t;
	if (e.raisePt !== void 0) t = e.baseOrigin.yPt - e.raisePt;
	else if (e.baseInkTopPt !== void 0 && e.guideInkBottomFromBaselinePt !== void 0) t = e.baseInkTopPt - e.guideInkBottomFromBaselinePt;
	else throw Error("Ruby geometry requires authored w:hpsRaise or retained base/guide ink bounds");
	let n = e.baseOrigin.xPt + (e.baseAdvancePt - e.guideAdvancePt) / 2;
	return e.spans.map((e) => ({
		text: e.text,
		origin: {
			xPt: n + e.offsetPt,
			yPt: t
		},
		fontRoute: e.fontRoute,
		fontSizePt: e.fontSizePt,
		fontWeight: e.fontWeight,
		fontStyle: e.fontStyle,
		color: e.color
	}));
}
function Rh(e) {
	return -(e.inkBounds?.ascentPt ?? e.ascentPt);
}
function zh(e) {
	return e.inkBounds?.descentPt ?? e.descentPt;
}
function Bh(e) {
	let t = e.inkBounds ? e.inkBounds.ascentPt + e.inkBounds.descentPt : Math.min(e.ascentPt, e.descentPt);
	if (!Number.isFinite(t) || t <= 0) throw Error("Retained decoration probe requires positive selected-face ink");
	return t;
}
function Vh(e) {
	return e === "double" || e === "dbl" ? "double" : e?.includes("dot") ? "dotted" : e?.includes("dash") ? "dashed" : e?.includes("wave") ? "wavy" : "solid";
}
function Hh(e, t, n) {
	let r = Math.max(0, t.xPt - e.xPt), i = n * 2, a = Math.max(1, Math.ceil(r / i));
	return Array.from({ length: a + 1 }, (t, i) => ({
		xPt: e.xPt + r * i / a,
		yPt: e.yPt + (i % 2 == 0 ? -n / 2 : n / 2)
	}));
}
function Uh(e) {
	let t = [], n = e.origin.xPt + e.advancePt;
	if (e.underline) {
		let r = Bh(e.underline.probe), i = e.origin.yPt + (Rh(e.underline.probe) + zh(e.underline.probe)) / 2, a = e.origin.yPt + zh(e.base) + r / 2, o = Math.max(i, a), s = Vh(e.underline.authoredStyle), c = {
			kind: "underline",
			...e.underline.authoredStyle === void 0 ? {} : { authoredStyle: e.underline.authoredStyle },
			color: e.underline.color,
			widthPt: r
		};
		if (s === "double") {
			let i = o + r * 2;
			t.push({
				...c,
				style: "solid",
				from: {
					xPt: e.origin.xPt,
					yPt: o
				},
				to: {
					xPt: n,
					yPt: o
				}
			}, {
				...c,
				style: "solid",
				from: {
					xPt: e.origin.xPt,
					yPt: i
				},
				to: {
					xPt: n,
					yPt: i
				}
			});
		} else {
			let i = {
				xPt: e.origin.xPt,
				yPt: o
			}, a = {
				xPt: n,
				yPt: o
			};
			t.push({
				...c,
				style: s,
				from: i,
				to: a,
				...s === "wavy" ? { path: Hh(i, a, r) } : {},
				...s === "dotted" ? { dashPatternPt: [r, r * 2] } : {},
				...s === "dashed" ? { dashPatternPt: [r * 4, r * 3] } : {}
			});
		}
	}
	if (e.strike) {
		let r = Bh(e.strike.probe), i = e.strike.color ?? e.color;
		if (e.strike.double && e.strike.doubleProbe) {
			let a = e.origin.yPt + Rh(e.strike.doubleProbe) + r / 2, o = e.origin.yPt + zh(e.strike.doubleProbe) - r / 2;
			for (let s of [a, o]) t.push({
				kind: "strikethrough",
				color: i,
				widthPt: r,
				style: "solid",
				from: {
					xPt: e.origin.xPt,
					yPt: s
				},
				to: {
					xPt: n,
					yPt: s
				}
			});
		} else {
			let a = e.origin.yPt + (Rh(e.strike.probe) + zh(e.strike.probe)) / 2;
			t.push({
				kind: "strikethrough",
				color: i,
				widthPt: r,
				style: "solid",
				from: {
					xPt: e.origin.xPt,
					yPt: a
				},
				to: {
					xPt: n,
					yPt: a
				}
			});
		}
	}
	return t;
}
function Wh(e) {
	let t = e.mark.inkBounds.xMaxPt - e.mark.inkBounds.xMinPt, n = e.mark.inkBounds.ascentPt + e.mark.inkBounds.descentPt;
	if (!(t > 0) || !(n > 0)) throw Error("Retained emphasis glyph requires positive selected-face ink bounds");
	let r = [];
	for (let t of e.clusterInk) {
		if (/^\s+$/u.test(t.text)) continue;
		let n = e.clusters.find((e) => e.range.start === t.range.start && e.range.end === t.range.end);
		if (!n) throw Error("Retained emphasis cluster ink does not match shaped cluster geometry");
		let i = (e.origin.xPt + n.offset.xPt + t.ink.xMinPt * e.scaleX + (e.origin.xPt + n.offset.xPt + t.ink.xMaxPt * e.scaleX)) / 2 - (e.mark.inkBounds.xMinPt + e.mark.inkBounds.xMaxPt) / 2, a = e.authored === "underDot" ? e.origin.yPt + t.ink.descentPt + e.mark.inkBounds.ascentPt : e.origin.yPt - t.ink.ascentPt - e.mark.inkBounds.descentPt;
		r.push({
			text: e.glyph,
			origin: {
				xPt: i,
				yPt: a
			},
			fontRoute: e.mark.fontRoute,
			fontSizePt: e.mark.fontSizePt,
			fontWeight: e.mark.fontWeight,
			fontStyle: e.mark.fontStyle,
			color: e.mark.color,
			inkBounds: e.mark.inkBounds
		});
	}
	return r;
}
function Gh(e, t) {
	return e.val === t.val && e.color === t.color && e.widthPt === t.widthPt && e.spacePt === t.spacePt && e.themeColor === t.themeColor && e.themeTint === t.themeTint && e.themeShade === t.themeShade && e.shadow === t.shadow && e.frame === t.frame;
}
function Kh(e) {
	let t = [], n = 0;
	for (; n < e.length;) {
		let r = e[n], i = n + 1, a = r.bounds.xPt + r.bounds.widthPt + r.trailingSlackPt;
		for (; i < e.length;) {
			let t = e[i];
			if (!Gh(r.border, t.border) || Math.abs(t.bounds.xPt - a) > 1e-6 || t.bounds.yPt !== r.bounds.yPt || t.bounds.heightPt !== r.bounds.heightPt) break;
			a = t.bounds.xPt + t.bounds.widthPt + t.trailingSlackPt, i += 1;
		}
		let o = r.bounds.xPt - r.border.spacePt, s = r.bounds.yPt - r.border.spacePt, c = a + r.border.spacePt, l = r.bounds.yPt + r.bounds.heightPt + r.border.spacePt, u = {
			color: r.border.color,
			widthPt: r.border.widthPt,
			...ki(r.border.val, r.border.widthPt)
		};
		t.push({
			...u,
			edge: "top",
			from: {
				xPt: o,
				yPt: s
			},
			to: {
				xPt: c,
				yPt: s
			}
		}, {
			...u,
			edge: "right",
			from: {
				xPt: c,
				yPt: s
			},
			to: {
				xPt: c,
				yPt: l
			}
		}, {
			...u,
			edge: "bottom",
			from: {
				xPt: o,
				yPt: l
			},
			to: {
				xPt: c,
				yPt: l
			}
		}, {
			...u,
			edge: "left",
			from: {
				xPt: o,
				yPt: s
			},
			to: {
				xPt: o,
				yPt: l
			}
		}), n = i;
	}
	return t;
}
//#endregion
//#region packages/docx/src/layout/anchor-compatibility.ts
var qh = U({
	id: "word-zero-relative-size",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/layout/anchor-frame.test.ts#uses wp:extent when Word does not support an exact-zero relative size"
	},
	description: "Word 2010 accepts only positive wp14:pctWidth and wp14:pctHeight values under [MS-ODRAWXML] notes 125/126. Preserve an authored zero as acquisition evidence while resolving the object from wp:extent."
});
U({
	id: "word-vertical-section-physical-drawing-layer",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/anchor-vertical-physical.test.ts#lands an upright-section anchor at the recorded physical centroid"
	},
	description: "Resolve anchored drawings in an upright vertical section against the physical page frame independently of the rotated text-flow coordinate space."
}), U({
	id: "word-page-level-float-prescan",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/page-anchor-prescan.test.ts#pre-scan REGISTERS a page-level (relativeFrom=\"margin\") wrap float on an earlier-scanned paragraph"
	},
	description: "A wrapping drawing whose vertical reference is page-level participates from page start so source-earlier paragraphs on that page see its exclusion."
}), U({
	id: "word-paragraph-anchor-pre-spacing-origin",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/anchor-paragraph-spacebefore.test.ts#anchors a wrapSquare paragraph float at the pre-spaceBefore paragraph top"
	},
	description: "Resolve a paragraph-relative anchored drawing from the paragraph top before applying the paragraph spaceBefore contribution."
}), U({
	id: "word-vertical-section-physical-header-footer",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/vertical-header-footer.test.ts#recovers the physical page box + margins from the logical (swapped) section"
	},
	description: "Paint a vertical section header and footer in the unrotated physical page frame rather than rotating them with the body text flow."
}), U({
	id: "word-frame-auto-wrap-around",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/frame-geometry.test.ts#wrap=\"around\" and \"auto\" → square float (auto ≡ around in Word)"
	},
	description: "Resolve an authored frame wrap value of auto through the same square side-wrap path as around."
}), U({
	id: "word-lower-layer-same-paragraph-anchor-composition",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "lower-layer-same-paragraph-anchor-composition",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "Word preserves a source-later, lower-z, page-owned drawing at its authored position when it belongs to the same anchor paragraph as already composed higher layers. This is a Word-observed compatibility override to ECMA-376 §20.4.2.3, not a normative OOXML rule."
}), U({
	id: "word-textbox-visible-anchor-extent",
	evidence: {
		kind: "office-observation",
		syntheticFixtureId: "textbox-visible-anchor-extent",
		application: "Microsoft Word",
		version: "16.111.1",
		platform: "macOS 26.5.2"
	},
	description: "For DrawingML middle and bottom text anchoring, derive the positioned extent through the last visible retained block while preserving structural trailing empty paragraphs and terminal paragraph spacing in the complete story."
}), U({
	id: "word-overlapping-layout-in-cell-overlay",
	evidence: {
		kind: "regression-test",
		reference: "packages/docx/src/table-cell-anchor-reflow.test.ts#does not grow an automatic row for an overlapping layoutInCell wrapNone object"
	},
	description: "Word leaves an overlap-permitted, non-wrapping layoutInCell drawing as an overlay instead of growing its automatic table row. This is an Office compatibility exception to the general resize behavior in ECMA-376 §20.4.2.3 layoutInCell; non-overlap drawings retain normative cell containment."
});
function Jh(e, t) {
	return !e || t !== "none";
}
function Yh(e) {
	return e.shading || e.borders.length > 0 || e.resources.length > 0 || e.drawings.length > 0 || e.textBoxes.length > 0 || e.lineNumbers?.some((e) => e.paintOps.length > 0) ? !0 : e.lines.some((e) => e.placements.some((e) => e.kind === "text" || e.kind === "resource" || e.kind === "drawing" ? !0 : e.kind === "tab" && (e.leaderGlyphs?.length ?? 0) > 0));
}
function Xh(e) {
	let t = e.flowBounds.yPt, n;
	for (let r of e.blocks) {
		if (r.kind === "table") {
			n = Math.max(n ?? t, r.flowBounds.yPt + r.advancePt);
			continue;
		}
		r.kind !== "paragraph" || !Yh(r) || (n = Math.max(n ?? t, r.flowBounds.yPt + Math.max(0, r.advancePt - r.spacing.afterPt)));
	}
	return n === void 0 ? 0 : Math.max(0, n - t);
}
function Zh(e) {
	return e === 0;
}
function Qh(e, t) {
	return e == null ? !t : e !== "paragraph" && e !== "line" && e !== "character";
}
function $h(e, t, n) {
	return e === "page" && t !== null && n !== void 0 && t < n;
}
//#endregion
//#region packages/docx/src/layout/anchor-frame.ts
var eg = 21600;
function Z(e, t, n) {
	return {
		code: e,
		path: t,
		message: n
	};
}
function tg(e) {
	return typeof e == "number" && Number.isFinite(e);
}
function ng(e) {
	return tg(e.xPt) && tg(e.yPt) && tg(e.widthPt) && tg(e.heightPt) && e.widthPt >= 0 && e.heightPt >= 0;
}
function rg(e) {
	return e.kind === "align" ? e.value : e.kind === "offset" ? e.valuePt : e.kind === "percent" ? e.fraction : null;
}
function Q(e, t, n, r = !1) {
	let i = t[e];
	return {
		axis: e,
		status: "unsupported",
		relativeFrom: r ? "page" : i.relativeFrom,
		choiceKind: r ? "simple-position" : i.choice.kind,
		choiceValue: r ? e === "horizontal" ? t.simplePosition.xPt : t.simplePosition.yPt : rg(i.choice),
		issueCode: n.code
	};
}
function ig(e, t, n, r) {
	let i = n[e];
	return i === null ? { problem: Z("missing-reference-frame", r, `${e} frame is required`) } : ng(i) ? { base: {
		startPt: t === "horizontal" ? i.xPt : i.yPt,
		endPt: t === "horizontal" ? i.xPt + i.widthPt : i.yPt + i.heightPt,
		referenceFrame: e
	} } : { problem: Z("invalid-reference-frame", r, `${e} frame must be finite and non-negative`) };
}
function ag(e, t, n, r) {
	let i = ig("page", t, n, r);
	if (!i.base) return i;
	let a = ig("margin", t, n, r);
	if (!a.base) return a;
	let o = n.page, s = n.margin, c = e === "leftMargin" || e === "rightMargin";
	if (c !== (t === "horizontal")) return { problem: Z("unsupported-relative-from", r, `${e} is not valid for the ${t} axis`) };
	let l = c ? o.xPt : o.yPt, u = c ? o.xPt + o.widthPt : o.yPt + o.heightPt, d = c ? s.xPt : s.yPt, f = c ? s.xPt + s.widthPt : s.yPt + s.heightPt;
	if (d < l || f > u) return { problem: Z("invalid-reference-frame", r, "margin frame must be contained by the page frame") };
	let p = e === "leftMargin" || e === "topMargin";
	return { base: {
		startPt: p ? l : f,
		endPt: p ? d : u,
		referenceFrame: e
	} };
}
function og(e, t, n, r) {
	if (t === "page" || t === "margin" || e === "horizontal" && (t === "column" || t === "character") || e === "vertical" && (t === "paragraph" || t === "line")) return ig(t, e, n, r);
	if (e === "horizontal" && (t === "leftMargin" || t === "rightMargin") || e === "vertical" && (t === "topMargin" || t === "bottomMargin")) return ag(t, e, n, r);
	if (t === "insideMargin" || t === "outsideMargin") {
		if (n.pageParity === null) return { problem: Z("missing-page-parity", r, `${t} requires explicit page parity`) };
		let i = t === "insideMargin" == (n.pageParity === "odd");
		return {
			...ag(e === "horizontal" ? i ? "leftMargin" : "rightMargin" : i ? "topMargin" : "bottomMargin", e, n, r),
			parityRequired: !0
		};
	}
	return { problem: Z("unsupported-relative-from", r, `${t} is not a valid ${e} reference`) };
}
function sg(e, t, n) {
	let r = t.relativeSize[e], i = e === "horizontal" ? "width" : "height", a = (n = null) => {
		let r = e === "horizontal" ? t.extent.widthStatus : t.extent.heightStatus, a = e === "horizontal" ? t.extent.widthPt : t.extent.heightPt;
		return r === "missing" ? { problem: Z("missing-size", `extent.${i}`, `${i} is required`) } : r !== "valid" || !tg(a) || a <= 0 ? { problem: Z("invalid-size", `extent.${i}`, `${i} extent must be finite and positive`) } : { resolved: {
			valuePt: a,
			diagnostic: {
				source: "extent",
				valuePt: a,
				relativeFrom: n?.relativeFrom ?? null,
				referenceFrame: null,
				fraction: n?.fraction ?? null,
				...n === null ? {} : { compatibilityFallback: qh.id }
			}
		} };
	};
	if (r === null) return a();
	let o = `relativeSize.${e}`;
	if (r.fractionStatus === "missing" || r.fraction === null) return { problem: Z("missing-relative-size-fraction", `${o}.fraction`, "relative size fraction is required") };
	if (r.fractionStatus !== "valid" || !tg(r.fraction)) return { problem: Z("invalid-relative-size-fraction", `${o}.fraction`, "relative size fraction must be finite") };
	if (r.fraction < 0) return { problem: Z("invalid-relative-size-fraction", `${o}.fraction`, "relative size fraction must be non-negative") };
	if (Zh(r.fraction)) return a({
		relativeFrom: r.relativeFrom,
		fraction: r.fraction
	});
	if (r.relativeFromStatus === "missing" || r.relativeFrom === null) return { problem: Z("missing-relative-size-reference", `${o}.relativeFrom`, "relative size reference is required") };
	if (r.relativeFromStatus !== "valid") return { problem: Z("invalid-relative-size-reference", `${o}.relativeFrom`, "relative size reference is invalid") };
	let s = og(e, r.relativeFrom, n, `${o}.relativeFrom`);
	if (!s.base) return { problem: Z(s.problem?.code === "missing-reference-frame" ? "missing-relative-size-reference" : "invalid-relative-size-reference", `${o}.relativeFrom`, s.problem?.message ?? "relative size reference cannot be resolved") };
	let c = (s.base.endPt - s.base.startPt) * r.fraction;
	return !tg(c) || c < 0 ? { problem: Z("invalid-relative-size-fraction", `${o}.fraction`, "relative size result must be finite and non-negative") } : { resolved: {
		valuePt: c,
		diagnostic: {
			source: "relative",
			valuePt: c,
			relativeFrom: r.relativeFrom,
			referenceFrame: s.base.referenceFrame,
			fraction: r.fraction
		}
	} };
}
function cg(e, t, n, r) {
	let i = n[e], a = e;
	if (i.relativeFromStatus === "missing" || i.relativeFrom === null) {
		let t = Z("missing-relative-from", `${a}.relativeFrom`, `${e} relativeFrom is required`);
		return {
			diagnostic: Q(e, n, t),
			problem: t
		};
	}
	if (i.relativeFromStatus !== "valid") {
		let t = Z("invalid-relative-from", `${a}.relativeFrom`, `${e} relativeFrom is invalid`);
		return {
			diagnostic: Q(e, n, t),
			problem: t
		};
	}
	let o = og(e, i.relativeFrom, r, `${a}.relativeFrom`);
	if (!o.base) {
		let t = o.problem;
		return {
			diagnostic: Q(e, n, t),
			problem: t
		};
	}
	let s = i.choice;
	if (s.kind === "missing") {
		let t = Z("missing-axis-choice", `${a}.choice`, `${e} choice is required`);
		return {
			diagnostic: Q(e, n, t),
			problem: t
		};
	}
	if (s.kind === "invalid") {
		let t = Z("invalid-axis-choice", `${a}.choice`, `${e} choice is invalid`);
		return {
			diagnostic: Q(e, n, t),
			problem: t
		};
	}
	let c = o.base.endPt - o.base.startPt, l, u;
	if (s.kind === "offset") {
		if (!tg(s.valuePt)) {
			let t = Z("invalid-axis-value", `${a}.choice`, "offset must be finite");
			return {
				diagnostic: Q(e, n, t),
				problem: t
			};
		}
		l = o.base.startPt + s.valuePt, u = s.valuePt;
	} else if (s.kind === "percent") {
		if (!tg(s.fraction)) {
			let t = Z("invalid-axis-value", `${a}.choice`, "percentage must be finite");
			return {
				diagnostic: Q(e, n, t),
				problem: t
			};
		}
		l = o.base.startPt + c * s.fraction, u = s.fraction;
	} else if (s.kind === "align") {
		if (!(e === "horizontal" ? [
			"left",
			"center",
			"right",
			"inside",
			"outside"
		].includes(s.value) : [
			"top",
			"center",
			"bottom",
			"inside",
			"outside"
		].includes(s.value))) {
			let t = Z("invalid-axis-value", `${a}.choice`, `${s.value} is invalid`);
			return {
				diagnostic: Q(e, n, t),
				problem: t
			};
		}
		if ((s.value === "inside" || s.value === "outside") && r.pageParity === null) {
			let t = Z("missing-page-parity", "frames.pageParity", `${s.value} alignment requires explicit page parity`);
			return {
				diagnostic: Q(e, n, t),
				problem: t
			};
		}
		let i = e === "horizontal" ? "left" : "top", d = e === "horizontal" ? "right" : "bottom", f = s.value === "inside", p = r.pageParity === "odd", m = s.value === i || f && p || s.value === "outside" && !p, h = s.value === d || f && !p || s.value === "outside" && p;
		l = m ? o.base.startPt : h ? o.base.endPt - t : o.base.startPt + (c - t) / 2, u = s.value;
	} else {
		let t = Z("invalid-axis-choice", `${a}.choice`, `${e} choice is invalid`);
		return {
			diagnostic: Q(e, n, t),
			problem: t
		};
	}
	if (!tg(l)) {
		let t = Z("invalid-axis-value", `${a}.choice`, "resolved origin is not finite");
		return {
			diagnostic: Q(e, n, t),
			problem: t
		};
	}
	return {
		valuePt: l,
		diagnostic: {
			axis: e,
			status: "resolved",
			relativeFrom: i.relativeFrom,
			referenceFrame: o.base.referenceFrame,
			choiceKind: s.kind,
			choiceValue: u,
			baseStartPt: o.base.startPt,
			baseEndPt: o.base.endPt,
			resolvedOriginPt: l,
			pageParity: s.kind === "align" && (s.value === "inside" || s.value === "outside") ? r.pageParity : null
		}
	};
}
function lg(e, t, n) {
	let r = e === "horizontal" ? n.xPt : n.yPt, i = e === "horizontal" ? n.xPt + n.widthPt : n.yPt + n.heightPt, a = r + t;
	return {
		valuePt: a,
		diagnostic: {
			axis: e,
			status: "resolved",
			relativeFrom: "page",
			referenceFrame: "page",
			choiceKind: "simple-position",
			choiceValue: t,
			baseStartPt: r,
			baseEndPt: i,
			resolvedOriginPt: a,
			pageParity: null
		}
	};
}
var ug = [
	"top",
	"right",
	"bottom",
	"left"
];
function dg(e, t) {
	return e[`${t}Status`];
}
function fg(e, t) {
	return e[`${t}Pt`];
}
function pg(e, t, n) {
	let r = ug.some((t) => dg(e, t) !== "missing");
	if (!n && !r) return { values: {
		topPt: 0,
		rightPt: 0,
		bottomPt: 0,
		leftPt: 0
	} };
	let i = {
		topPt: 0,
		rightPt: 0,
		bottomPt: 0,
		leftPt: 0
	};
	for (let n of ug) {
		let r = dg(e, n), a = fg(e, n);
		if (r !== "valid" || !tg(a)) return { problem: Z("invalid-effect-extent", `${t}.${n}`, "present effectExtent requires four finite edge values") };
		i[`${n}Pt`] = a;
	}
	return { values: i };
}
function mg(e, t) {
	let n = {
		topPt: 0,
		rightPt: 0,
		bottomPt: 0,
		leftPt: 0
	}, r = {};
	for (let i of ug) {
		let a = dg(t, i), o = dg(e, i), s = a === "valid" || a === "invalid" ? {
			status: a,
			value: fg(t, i),
			source: "wrap"
		} : o === "valid" || o === "invalid" ? {
			status: o,
			value: fg(e, i),
			source: "anchor"
		} : {
			status: "missing",
			value: null,
			source: "implicit-zero"
		};
		if (s.status === "invalid" || s.status === "valid" && (!tg(s.value) || s.value < 0)) return { problem: Z("invalid-distance", `${s.source === "wrap" ? "wrap.distances" : "anchorDistances"}.${i}`, "wrap distance must be finite and non-negative") };
		n[`${i}Pt`] = s.status === "missing" ? 0 : s.value, r[i] = s.source;
	}
	return { resolved: {
		values: n,
		sources: r
	} };
}
function hg(e, t) {
	let n = {
		xPt: e.xPt - t.leftPt,
		yPt: e.yPt - t.topPt,
		widthPt: e.widthPt + t.leftPt + t.rightPt,
		heightPt: e.heightPt + t.topPt + t.bottomPt
	};
	return ng(n) ? n : null;
}
function gg(e, t) {
	let n = e.wrap.polygon;
	if (n === null || n.invalidPointCount !== 0 || n.coordinateSpace.width !== eg || n.coordinateSpace.height !== eg || n.points.length < 3) return { problem: Z("invalid-wrap-polygon", "wrap.polygon", "tight and through wrapping require a valid fixed 21600 by 21600 polygon") };
	let r = [];
	for (let [e, i] of n.points.entries()) {
		if (!tg(i.x) || !tg(i.y)) return { problem: Z("invalid-wrap-polygon", `wrap.polygon.points.${e}`, "polygon coordinates must be finite") };
		r.push({
			xPt: t.xPt + i.x / eg * t.widthPt,
			yPt: t.yPt + i.y / eg * t.heightPt
		});
	}
	let i = r.map((e) => e.xPt), a = r.map((e) => e.yPt), o = Math.min(...i), s = Math.max(...i), c = Math.min(...a), l = Math.max(...a);
	return {
		polygon: {
			edited: n.edited,
			points: r
		},
		bounds: {
			xPt: o,
			yPt: c,
			widthPt: s - o,
			heightPt: l - c
		}
	};
}
function _g(e) {
	return {
		coordinateSpace: "anchor-frame",
		groupApplication: "parser-resolved-child-frame",
		group: e === null ? null : {
			childSourceId: e.childSourceId,
			sourceIndex: e.sourceIndex,
			sourceCount: e.sourceCount,
			transformChain: e.transformChain.map((e) => ({ ...e })),
			childTransform: e.childTransform === null ? null : { ...e.childTransform },
			resolvedChildFrame: { ...e.resolvedChildFrame }
		}
	};
}
function vg(e) {
	return B(e, "anchor frame result");
}
function yg(e) {
	let { acquisition: t, frames: n } = e;
	for (let e of [
		"relativeHeight",
		"behindDoc",
		"locked",
		"layoutInCell",
		"allowOverlap"
	]) {
		let n = t.behavior[`${e}Status`], r = t.behavior[e];
		if (n === "valid" && r !== null) continue;
		let i = Z(n === "missing" ? "missing-required-behavior" : "invalid-required-behavior", `behavior.${e}`, `CT_Anchor requires a ${e} value`);
		return vg({
			status: "unsupported",
			occurrenceId: t.occurrenceId,
			axes: {
				horizontal: Q("horizontal", t, i),
				vertical: Q("vertical", t, i)
			},
			issues: [i]
		});
	}
	let r = [], i = sg("horizontal", t, n), a = sg("vertical", t, n);
	i.problem && r.push(i.problem), a.problem && r.push(a.problem);
	let o, s, c = i.problem ?? a.problem;
	if (c || !i.resolved || !a.resolved) {
		let e = c;
		o = { diagnostic: Q("horizontal", t, e) }, s = { diagnostic: Q("vertical", t, e) };
	} else if (t.simplePosition.status === "invalid") {
		let e = Z("invalid-simple-position", "simplePosition.enabled", "simplePos enablement is invalid");
		r.push(e), o = {
			diagnostic: Q("horizontal", t, e, !0),
			problem: e
		}, s = {
			diagnostic: Q("vertical", t, e, !0),
			problem: e
		};
	} else if (t.simplePosition.status === "valid" && t.simplePosition.enabled === !0) {
		let e = ig("page", "horizontal", n, "frames.page"), i = t.simplePosition.xPt, a = t.simplePosition.yPt;
		if (!e.base || n.page === null || !ng(n.page)) {
			let n = e.problem ?? Z("invalid-reference-frame", "frames.page", "simple positioning requires a valid page frame");
			r.push(n), o = {
				diagnostic: Q("horizontal", t, n, !0),
				problem: n
			}, s = {
				diagnostic: Q("vertical", t, n, !0),
				problem: n
			};
		} else if (t.simplePosition.xStatus !== "valid" || !tg(i)) {
			let e = t.simplePosition.xStatus === "invalid", n = Z(e ? "invalid-simple-position" : "missing-simple-coordinate", "simplePosition.x", e ? "simple position x is lexically invalid" : "simple position x is required");
			r.push(n), o = {
				diagnostic: Q("horizontal", t, n, !0),
				problem: n
			}, s = {
				diagnostic: Q("vertical", t, n, !0),
				problem: n
			};
		} else if (t.simplePosition.yStatus !== "valid" || !tg(a)) {
			let e = t.simplePosition.yStatus === "invalid", n = Z(e ? "invalid-simple-position" : "missing-simple-coordinate", "simplePosition.y", e ? "simple position y is lexically invalid" : "simple position y is required");
			r.push(n), o = {
				diagnostic: Q("horizontal", t, n, !0),
				problem: n
			}, s = {
				diagnostic: Q("vertical", t, n, !0),
				problem: n
			};
		} else o = lg("horizontal", i, n.page), s = lg("vertical", a, n.page);
	} else {
		let e = cg("horizontal", i.resolved.valuePt, t, n), c = cg("vertical", a.resolved.valuePt, t, n);
		o = {
			...e,
			diagnostic: e.diagnostic
		}, s = {
			...c,
			diagnostic: c.diagnostic
		}, e.problem && r.push(e.problem), c.problem && r.push(c.problem);
	}
	if (r.length > 0 || !i.resolved || !a.resolved || o.valuePt === void 0 || s.valuePt === void 0) return vg({
		status: "unsupported",
		occurrenceId: t.occurrenceId,
		axes: {
			horizontal: o.diagnostic,
			vertical: s.diagnostic
		},
		issues: r
	});
	let l = {
		xPt: o.valuePt,
		yPt: s.valuePt,
		widthPt: i.resolved.valuePt,
		heightPt: a.resolved.valuePt
	}, u = pg(t.parentEffectExtent, "parentEffectExtent", !1);
	if (u.problem || !u.values) {
		let e = u.problem;
		return vg({
			status: "unsupported",
			occurrenceId: t.occurrenceId,
			axes: {
				horizontal: o.diagnostic,
				vertical: s.diagnostic
			},
			issues: [e]
		});
	}
	let d = hg(l, u.values);
	if (d === null) {
		let e = Z("invalid-effect-extent", "parentEffectExtent", "parent effect extents produce invalid ink bounds");
		return vg({
			status: "unsupported",
			occurrenceId: t.occurrenceId,
			axes: {
				horizontal: o.diagnostic,
				vertical: s.diagnostic
			},
			issues: [e]
		});
	}
	if (t.wrap.kind === "missing" || t.wrap.kind === "invalid") {
		let e = Z(t.wrap.kind === "missing" ? "missing-wrap-kind" : "invalid-wrap-kind", "wrap.kind", "exactly one valid wrap kind is required");
		return vg({
			status: "unsupported",
			occurrenceId: t.occurrenceId,
			axes: {
				horizontal: o.diagnostic,
				vertical: s.diagnostic
			},
			issues: [e]
		});
	}
	let f = mg(t.anchorDistances, t.wrap.distances);
	if (f.problem || !f.resolved) return vg({
		status: "unsupported",
		occurrenceId: t.occurrenceId,
		axes: {
			horizontal: o.diagnostic,
			vertical: s.diagnostic
		},
		issues: [f.problem]
	});
	let p = t.wrap.kind === "square" || t.wrap.kind === "tight" || t.wrap.kind === "through", m = p && [
		"bothSides",
		"left",
		"right",
		"largest"
	].includes(t.wrap.side ?? "") ? t.wrap.side : null;
	if (p && m === null) {
		let e = Z("invalid-wrap-side", "wrap.side", "square, tight, and through wrapping require an authored wrap side");
		return vg({
			status: "unsupported",
			occurrenceId: t.occurrenceId,
			axes: {
				horizontal: o.diagnostic,
				vertical: s.diagnostic
			},
			issues: [e]
		});
	}
	let h = u.values, g = ug.some((e) => dg(t.parentEffectExtent, e) !== "missing") ? "parent" : "none";
	if (t.wrap.effectExtent !== null) {
		let e = pg(t.wrap.effectExtent, "wrap.effectExtent", !0);
		if (e.problem || !e.values) return vg({
			status: "unsupported",
			occurrenceId: t.occurrenceId,
			axes: {
				horizontal: o.diagnostic,
				vertical: s.diagnostic
			},
			issues: [e.problem]
		});
		h = e.values, g = "wrap-child";
	}
	let _ = null, v = null, y = null;
	if (t.wrap.kind === "tight" || t.wrap.kind === "through") {
		let e = gg(t, l);
		if (e.problem || !e.polygon || !e.bounds) return vg({
			status: "unsupported",
			occurrenceId: t.occurrenceId,
			axes: {
				horizontal: o.diagnostic,
				vertical: s.diagnostic
			},
			issues: [e.problem]
		});
		_ = e.polygon, v = {
			width: 21600,
			height: 21600
		}, y = e.bounds, h = {
			topPt: 0,
			rightPt: 0,
			bottomPt: 0,
			leftPt: 0
		}, g = "none";
	} else if (t.wrap.kind !== "none" && (y = hg(l, h), y === null)) {
		let e = Z("invalid-effect-extent", "wrap.effectExtent", "wrapping effect extents produce invalid bounds");
		return vg({
			status: "unsupported",
			occurrenceId: t.occurrenceId,
			axes: {
				horizontal: o.diagnostic,
				vertical: s.diagnostic
			},
			issues: [e]
		});
	}
	let b = y === null ? null : hg(y, f.resolved.values);
	if (y !== null && b === null) {
		let e = Z("invalid-distance", "wrap.distances", "distances produce invalid bounds");
		return vg({
			status: "unsupported",
			occurrenceId: t.occurrenceId,
			axes: {
				horizontal: o.diagnostic,
				vertical: s.diagnostic
			},
			issues: [e]
		});
	}
	return vg({
		status: "resolved",
		occurrenceId: t.occurrenceId,
		axes: {
			horizontal: o.diagnostic,
			vertical: s.diagnostic
		},
		issues: [],
		geometry: {
			objectFrame: l,
			inkBounds: d,
			wrapBounds: b,
			size: {
				horizontal: i.resolved.diagnostic,
				vertical: a.resolved.diagnostic
			},
			parentEffectExtent: u.values,
			wrap: {
				kind: t.wrap.kind,
				side: m,
				distances: f.resolved.values,
				distanceSources: f.resolved.sources,
				effectExtent: h,
				effectExtentSource: g,
				coordinateSpace: v,
				polygon: _
			},
			transform: _g(t.group)
		}
	});
}
//#endregion
//#region packages/docx/src/layout/paragraph-spacing.ts
function bg(e, t, n, r) {
	if (!e) return r;
	let i = !!(e.styleId && e.styleId === t.styleId), a = !!(i && e.contextualSpacing), o = !!(i && t.contextualSpacing);
	return a && o ? 0 : o ? n : a ? Math.max(r - n, 0) : Math.max(n, r);
}
function xg(e, t, n, r) {
	let i = bg(e, t, n, r), a = i <= n;
	return {
		suppressBefore: a,
		overlap: n + (a ? 0 : r) - i
	};
}
//#endregion
//#region packages/docx/src/layout/pagination-fields.ts
function Sg(e) {
	return Object.freeze(e.pages.map((e) => Object.freeze({
		pageIndex: e.pageIndex,
		displayPageNumber: e.pageNumber.displayNumber,
		pageNumberFormat: e.pageNumber.format
	})));
}
function Cg(e) {
	if (e.fieldType === "page") return "page";
	if (/numPages/i.test(e.fieldType) || /NUMPAGES/i.test(e.instruction)) return "total-pages";
}
function wg(e) {
	return e.some((e) => e.type === "paragraph" ? e.runs.some((e) => e.type === "field" ? Cg(e) !== void 0 : !1) : e.type === "table" ? e.rows.some((e) => e.cells.some((e) => wg(e.content))) : !1);
}
function Tg(e, t = [], n = []) {
	return wg(e) || t.some((e) => wg(e.content)) || n.some((e) => wg(e));
}
//#endregion
//#region packages/docx/src/layout/paragraph-wrap-registry.ts
var Eg = /* @__PURE__ */ new WeakMap(), Dg = "table-final-frame:";
function Og(e) {
	let t = new Set(e.drawings.flatMap((e) => {
		let t = e.anchorLayer?.acquisitionOccurrenceId ?? e.anchorLayer?.occurrenceId;
		return t === void 0 ? [] : [t];
	}));
	return Object.freeze({
		exclusions: Object.freeze(e.exclusions.filter((e) => !e.id.startsWith("table-final-frame:") && (e.anchorOccurrenceId === void 0 || !t.has(e.anchorOccurrenceId)))),
		collisions: Object.freeze((e.anchorCollisions ?? []).filter((e) => !t.has(e.occurrenceId)))
	});
}
function kg(e) {
	return new Set((e.anchorFrames ?? []).flatMap((e) => e.status === "resolved" ? [e.occurrenceId] : []));
}
function Ag(e) {
	let t = kg(e), n = (e.anchorCollisions ?? []).filter((e) => t.has(e.occurrenceId)), r = new Set(n.map((e) => e.occurrenceId));
	for (let e of t) if (!r.has(e)) throw Error(`Paragraph anchor omitted collision geometry: ${e}`);
	return Object.freeze(n);
}
function jg(e) {
	let t = kg(e);
	return Object.freeze(e.exclusions.filter((e) => e.anchorOccurrenceId !== void 0 && t.has(e.anchorOccurrenceId)));
}
function Mg(e) {
	return Object.freeze({
		flowDomainId: e,
		collisions: Object.freeze([]),
		exclusions: Object.freeze([])
	});
}
function Ng(e, t) {
	let n = Eg.get(e);
	n || (n = /* @__PURE__ */ new Map(), Eg.set(e, n));
	let r = n.get(t);
	if (r) return r;
	let i = Mg(t);
	return n.set(t, i), i;
}
function Pg(e, t, n) {
	let r = Eg.get(e);
	if (!r || r.get(t.flowDomainId) !== t) throw Error("Paragraph wrap registry transaction is stale");
	r.set(t.flowDomainId, Fg(t, n));
}
function Fg(e, t) {
	if (t.flowDomainId !== e.flowDomainId) throw Error("Paragraph wrap registry cannot cross flow domains");
	let n = new Set(e.collisions.map((e) => e.occurrenceId)), r = Ag(t);
	for (let e of r) {
		if (n.has(e.occurrenceId)) throw Error(`Paragraph wrap occurrence committed twice: ${e.occurrenceId}`);
		n.add(e.occurrenceId);
	}
	let i = jg(t), a = new Set(r.map((e) => e.occurrenceId)), o = /* @__PURE__ */ new Set();
	for (let e of i) {
		let t = e.anchorOccurrenceId;
		if (t === void 0 || !a.has(t)) throw Error("Owned paragraph wrap exclusion omitted its collision occurrence");
		if (o.has(t)) throw Error(`Paragraph wrap occurrence produced duplicate exclusions: ${t}`);
		o.add(t);
	}
	return Object.freeze({
		flowDomainId: e.flowDomainId,
		collisions: Object.freeze([...e.collisions, ...r]),
		exclusions: Object.freeze([...e.exclusions, ...i])
	});
}
//#endregion
//#region packages/docx/src/layout/paragraph.ts
function Ig(e, t) {
	if (!Number.isFinite(e) || e < 0) throw RangeError(`${t} must be finite and non-negative`);
	return e;
}
function Lg(e) {
	if (!(!e || e.type !== "text" && e.type !== "field")) return e.typographyInput;
}
function Rg(e) {
	switch (e) {
		case "left": return "left";
		case "right": return "right";
		default: return "center";
	}
}
function zg(e) {
	return Ig(e.measuredWidthPt, "segment.measuredWidthPt");
}
function Bg(e) {
	return e.map((e) => e.kind === "text" && !e.fixedPitch ? { text: e.text } : {});
}
function Vg(e) {
	return e === "lowKashida" ? "low" : e === "mediumKashida" ? "medium" : e === "highKashida" ? "high" : null;
}
function Hg(e, t) {
	if (!e.textLayoutService || !e.textShapeRequest) throw Error("Kashida acquisition requires the retained TextLayoutService authority");
	let n = e.textLayoutService.shape({
		...e.textShapeRequest,
		text: t,
		measure: !0
	}), r = e.basePaintOps[0]?.scaleX ?? 1, i = e.basePaintOps[0]?.letterSpacingPt ?? 0;
	return n.advancePt * r + [...t].length * i;
}
function Ug(e, t) {
	if (!e) return null;
	let n = Qm(e), r = /* @__PURE__ */ new Map(), i = 0;
	for (let [n, a] of e.perSeg) {
		let e = t[n], o = a.splitBefore;
		if (e?.kind === "text") {
			let t = new Set(e.clusters.slice(1).map((t) => t.range.start - e.range.start)), n = [...e.text], r = [0];
			for (let e of n) r.push((r.at(-1) ?? 0) + e.length);
			o = o.filter((e) => t.has(r[e] ?? -1));
		}
		let s = t[n + 1], c = a.trailingGap && !(s?.kind === "text" && s.breakBefore === !1);
		i += o.length + +!!c, r.set(n, {
			splitBefore: [...o],
			trailingGap: c,
			internalStretch: 0
		});
	}
	if (i === 0) return null;
	let a = n / i;
	for (let e of r.values()) e.internalStretch = e.splitBefore.length * a;
	return {
		perGap: a,
		perSeg: r
	};
}
function Wg(e, t, n) {
	if (!t || t.splitBefore.length === 0) return {
		clusters: e.clusters,
		paintOps: e.basePaintOps
	};
	let r = [...e.text], i = [...t.splitBefore];
	if (i.some((e, t) => e <= 0 || e >= r.length || t > 0 && e <= (i[t - 1] ?? 0))) throw Error("Internal paragraph justification contains an invalid code-point cut");
	let a = [0];
	for (let e of r) a.push((a.at(-1) ?? 0) + e.length);
	let o = i.map((e) => a[e] ?? -1), s = new Set(e.clusters.map((t) => t.range.start - e.range.start));
	if (o.some((e) => !s.has(e))) throw Error("Internal paragraph justification must split at shaped cluster boundaries");
	let c = [
		0,
		...i,
		r.length
	], l = [];
	for (let t = 0; t < c.length - 1; t += 1) {
		let r = c[t] ?? 0, i = c[t + 1] ?? r, o = e.range.start + (a[r] ?? 0), s = e.clusters.find((e) => e.range.start === o);
		if (!s) throw Error("Internal paragraph justification is missing shaped cluster geometry");
		l.push({
			range: {
				start: o,
				end: e.range.start + (a[i] ?? 0)
			},
			offset: {
				xPt: s.offset.xPt + t * n,
				yPt: s.offset.yPt
			}
		});
	}
	let u = e.clusters.map((t) => {
		let r = t.range.start - e.range.start, i = o.filter((e) => e <= r).length;
		return {
			...t,
			offset: {
				...t.offset,
				xPt: t.offset.xPt + i * n
			}
		};
	});
	if (e.basePaintOps.length > 1) {
		let t = e.range.start;
		for (let n of e.basePaintOps) {
			if (n.range.start !== t || n.range.end <= n.range.start) throw Error("Internal paragraph justification has incomplete retained paint operations");
			t = n.range.end;
		}
		if (t !== e.range.end) throw Error("Internal paragraph justification has incomplete retained paint operations");
		let r = o.map((t) => e.range.start + t), i = [...new Set([
			e.range.start,
			e.range.end,
			...r,
			...e.basePaintOps.flatMap((e) => [e.range.start, e.range.end])
		])].sort((e, t) => e - t), a = [];
		for (let t = 0; t < i.length - 1; t += 1) {
			let o = i[t] ?? e.range.start, s = i[t + 1] ?? o, c = e.basePaintOps.find((e) => e.range.start <= o && e.range.end >= s);
			if (!c) throw Error("Internal paragraph justification lost a retained paint slice");
			let l = r.filter((e) => e <= o).length, d = u.find((e) => e.range.start === o);
			if (!d) throw Error("Internal paragraph justification is missing retained slice geometry");
			a.push({
				...c,
				text: c.text.slice(o - c.range.start, s - c.range.start),
				range: {
					start: o,
					end: s
				},
				offset: o === c.range.start ? {
					...c.offset,
					xPt: c.offset.xPt + l * n
				} : d.offset
			});
		}
		return {
			clusters: u,
			paintOps: a
		};
	}
	let d = e.basePaintOps.length === 1 ? e.basePaintOps[0] : void 0;
	if (!d) throw Error("Internal paragraph justification requires one contextual paint op");
	return i.length === r.length - 1 && i.every((e, t) => e === t + 1) ? {
		clusters: u,
		paintOps: [{
			...d,
			letterSpacingPt: d.letterSpacingPt + n
		}]
	} : {
		clusters: u,
		paintOps: l.map((t) => ({
			...d,
			text: e.text.slice(t.range.start - e.range.start, t.range.end - e.range.start),
			range: t.range,
			offset: t.offset
		}))
	};
}
function Gg(e, t) {
	return e.flatMap((e) => {
		let n = e.text.trimEnd();
		if (n === "" || n.length === e.text.length) return [e];
		if (e.sourceMapping === "kashida") return [{
			...e,
			text: n
		}];
		let r = e.range.start + n.length, i = t.find((e) => e.range.start === r), { inkBounds: a, blockAxisInkBounds: o, ...s } = e;
		return [{
			...e,
			text: n,
			range: {
				...e.range,
				end: r
			}
		}, {
			...s,
			text: e.text.slice(n.length),
			range: {
				start: r,
				end: e.range.end
			},
			offset: i?.offset ?? e.offset
		}];
	});
}
function Kg(e, t) {
	return e === void 0 || t === void 0 ? e === t : e.length === t.length && e.every((e, n) => e === t[n]);
}
function qg(e, t) {
	if (e === t) return !0;
	let n = 2 ** -52 * Math.max(1, Math.abs(e) + Math.abs(t));
	return Math.abs(e - t) <= n;
}
function Jg(e, t) {
	return e.kind === "underline" && e.kind === t.kind && e.authoredStyle === t.authoredStyle && e.style === t.style && e.color === t.color && e.widthPt === t.widthPt && qg(e.to.xPt, t.from.xPt) && Kg(e.dashPatternPt, t.dashPatternPt);
}
function Yg(e, t) {
	let n = Math.max(e.from.yPt, t.from.yPt), r = {
		xPt: e.from.xPt,
		yPt: n
	}, i = {
		xPt: t.to.xPt,
		yPt: n
	}, { path: a, ...o } = e;
	return {
		...o,
		from: r,
		to: i,
		...e.style === "wavy" ? { path: Hh(r, i, e.widthPt) } : {}
	};
}
function Xg(e, t) {
	let n = Math.min(t, Math.max(0, e.to.xPt - e.from.xPt)), r = e.from, i = {
		...e.to,
		xPt: e.to.xPt - n
	}, { path: a, ...o } = e;
	return {
		...o,
		from: r,
		to: i,
		...e.style === "wavy" ? { path: Hh(r, i, e.widthPt) } : {}
	};
}
function Zg(e) {
	let t = [];
	e.forEach((n, r) => {
		if (n.kind !== "text" && n.kind !== "tab" || !n.decorations) {
			t = [];
			return;
		}
		let i = [], a = [], o = /* @__PURE__ */ new Set();
		for (let s of n.decorations) {
			let n = t.filter((e) => !o.has(e) && Jg(e.decoration, s)).sort((e, t) => Math.abs(e.decoration.from.yPt - s.from.yPt) - Math.abs(t.decoration.from.yPt - s.from.yPt))[0];
			if (n) {
				o.add(n);
				let t = e[n.placementIndex];
				if (!t || t.kind !== "text" && t.kind !== "tab" || !t.decorations) throw Error("Continuous decoration owner left the retained line");
				let r = [...t.decorations], i = Yg(n.decoration, s);
				r[n.decorationIndex] = i, e[n.placementIndex] = {
					...t,
					decorations: r
				}, a.push({
					...n,
					decoration: i
				});
			} else {
				let e = i.length;
				i.push(s), a.push({
					placementIndex: r,
					decorationIndex: e,
					decoration: s
				});
			}
		}
		e[r] = {
			...n,
			decorations: i
		}, t = a;
	});
}
function Qg(e) {
	let { line: t } = e, n = t.segments, r = e.baseRtl || $c(n), i = el(n.map((e) => e.kind === "tab" ? { isTab: !0 } : e.kind === "text" ? {
		text: e.text,
		rtl: e.rtl,
		digitsAsAN: e.digitsAsAN
	} : {}), e.baseRtl), a = n.reduce((e, t) => e + zg(t), 0), o = e.paragraphXPt + t.xOffsetPt, s = Math.min(e.availableWidthPt, t.availableWidthPt), c = e.isFirstLine ? e.numbering ? Ig(e.numbering.bodyOffsetPt, "numbering.bodyOffsetPt") : e.firstLineIndentPt ?? 0 : 0, l = e.baseRtl ? 0 : c, u = (e.baseRtl ? s - c : s) - l - a, d = e.isLastLine || t.endsWithBreak, f = e.displayMathJustification === void 0 ? tl(e.alignment, e.baseRtl) : Rg(e.displayMathJustification), p = f === "justify" && (!d || e.stretchLastLine), m = p ? Vg(e.alignment) : null;
	if (m && u > 0) {
		let e = Dh(n.map((e) => e.kind === "text" ? { text: e.text } : {}), u, m, (e, t) => {
			let r = n[e];
			return r?.kind === "text" ? Hg(r, t) : 0;
		});
		e && (n = n.map((t, n) => {
			if (t.kind !== "text") return t;
			let r = e.perSeg.get(n);
			if (!r) return t;
			let i = t.basePaintOps[0];
			if (!i) throw Error("Kashida acquisition requires a contextual text paint operation");
			return {
				...t,
				measuredWidthPt: t.measuredWidthPt + r.advanceDeltaPx,
				basePaintOps: [{
					...i,
					text: r.text,
					sourceMapping: "kashida"
				}]
			};
		}), a += e.appliedPx, u = e.residualPx);
	}
	let h = i.order.at(-1) ?? -1, g = 0;
	if (!r) {
		let e = n.findIndex((e) => e.kind !== "text" || /\S/.test(e.text));
		g = e < 0 ? 0 : e;
	}
	let _ = null, v = 0, y = 0, b = Bg(n);
	if (p) {
		let i = Ug(Zm(b, u, g, r ? h : n.length, -(t.baselinePt - t.topPt) * .25, u > 0, e.alignment === "thaiDistribute" && u > 0), n);
		_ = i?.perSeg ?? null, v = i?.perGap ?? 0, y = Qm(i);
	} else if (u < 0) {
		let e = Ug($m(b, u, g, r ? h : n.length, t.baselinePt - t.topPt), n);
		_ = e?.perSeg ?? null, v = e?.perGap ?? 0, y = Qm(e);
	}
	let x = a + y, S = u - y, C = f === "right" ? S : f === "center" ? S / 2 : f === "justify" && e.baseRtl && !p ? S : 0, w = o + l, T = e.decimalAutoTabPt === void 0 ? C : Math.max(0, e.paragraphXPt + e.decimalAutoTabPt - x - w), E = w + T, D = [], O = /* @__PURE__ */ new Map();
	for (let e of i.order) {
		let r = n[e];
		if (!r) continue;
		let a = _?.get(e), o = a?.internalStretch ?? 0, s = zg(r) + o;
		if (r.kind === "tab") {
			let e = {
				xPt: E,
				yPt: t.topPt,
				widthPt: r.measuredWidthPt,
				heightPt: t.advancePt
			}, n = r.underline ? Uh({
				origin: {
					xPt: E,
					yPt: t.baselinePt
				},
				advancePt: r.measuredWidthPt,
				base: r.underline.base,
				color: r.underline.color,
				underline: r.underline
			}) : void 0;
			D.push({
				kind: "tab",
				range: r.range,
				bounds: e,
				advancePt: r.measuredWidthPt,
				leader: r.leader,
				...n?.length ? { decorations: n } : {},
				...r.leader === "none" ? {} : r.leaderShape ? { leaderGlyphs: Ih({
					interval: e,
					baselinePt: t.baselinePt,
					...r.leaderShape
				}) } : {}
			});
		} else if (r.kind === "resource") D.push({
			kind: "resource",
			range: r.range,
			...r.sourceRunIndex === void 0 ? {} : { sourceRunIndex: r.sourceRunIndex },
			resourceKey: r.resourceKey,
			resourceKind: r.resourceKind,
			...r.orientation ? { orientation: r.orientation } : {},
			bounds: {
				xPt: E,
				yPt: t.baselinePt + r.topOffsetPt,
				widthPt: r.widthPt,
				heightPt: r.heightPt
			},
			advancePt: r.measuredWidthPt
		});
		else if (r.kind === "unavailable-resource" || r.kind === "inline-drawing") D.push({
			kind: "drawing",
			range: r.range,
			drawingId: r.drawingId,
			bounds: {
				xPt: E,
				yPt: t.baselinePt + r.topOffsetPt,
				widthPt: r.widthPt,
				heightPt: r.heightPt
			},
			advancePt: r.measuredWidthPt
		});
		else if (r.kind === "anchor-host") D.push({
			kind: "anchor-host",
			range: r.range,
			bounds: {
				xPt: E,
				yPt: t.topPt,
				widthPt: 0,
				heightPt: t.advancePt
			},
			baselinePt: t.baselinePt,
			...r.sourceMetrics ? { sourceMetrics: r.sourceMetrics } : {},
			...r.anchorOccurrenceId ? { anchorOccurrenceId: r.anchorOccurrenceId } : {}
		});
		else {
			let { measuredWidthPt: n, breakBefore: o, rtl: c, digitsAsAN: l, fixedPitch: u, decorationTerminalAdvancePt: d, textLayoutService: f, textShapeRequest: p, selectedFaceFontBox: m, retainedGeometry: h, direction: g, ..._ } = r, y = Wg(r, a, v), b = i.rtl[e] ? "rtl" : "ltr", x = b === "rtl" ? Gg(y.paintOps, y.clusters) : y.paintOps, S = r.text.trimEnd().length, C = b === "rtl" ? (_.fitText?.trailingPadPt ?? 0) + r.clusters.filter((e) => e.range.start >= r.range.start + S).reduce((e, t) => e + t.advancePt, 0) : 0, w = a?.trailingGap ? v : 0, T = {
				xPt: E + C,
				yPt: t.baselinePt
			}, k = y.paintOps[0]?.offset.yPt ?? 0, A = {
				xPt: E,
				yPt: t.baselinePt + k
			}, j = h ? Uh({
				origin: A,
				advancePt: s + w,
				base: h.base,
				color: x_(_.color),
				...h.underline ? { underline: h.underline } : {},
				...h.strike ? { strike: h.strike } : {}
			}) : _.decorations, M = h?.emphasis ? {
				authored: h.emphasis.authored,
				glyphs: Wh({
					authored: h.emphasis.authored,
					glyph: h.emphasis.glyph,
					origin: {
						xPt: T.xPt,
						yPt: t.baselinePt + k
					},
					clusters: y.clusters,
					clusterInk: h.emphasis.clusterInk,
					mark: h.emphasis.mark,
					scaleX: r.basePaintOps[0]?.scaleX ?? 1
				})
			} : void 0, N = m ?? h?.base, P = N ? {
				xPt: E,
				yPt: t.baselinePt + k - N.ascentPt,
				widthPt: s + w,
				heightPt: N.ascentPt + N.descentPt
			} : {
				xPt: E,
				yPt: t.topPt,
				widthPt: s + w,
				heightPt: t.advancePt
			}, ee = {
				..._,
				kind: "text",
				origin: T,
				bounds: {
					xPt: E,
					yPt: t.topPt,
					widthPt: s,
					heightPt: t.advancePt
				},
				highlightBounds: P,
				advancePt: s,
				clusters: y.clusters,
				paintOps: x.map((e) => ({
					...e,
					direction: b
				})),
				decorations: j,
				...M ? { emphasis: M } : {},
				direction: b,
				...w === 0 ? {} : { ownedTrailingSlackPt: w },
				..._.highlight || _.background ? { highlightFragments: [{
					rect: _.highlight ? P : {
						xPt: E,
						yPt: t.topPt,
						widthPt: s + w,
						heightPt: t.advancePt
					},
					color: _.highlight ?? _.background
				}] } : {},
				..._.ruby ? { ruby: {
					..._.ruby,
					paintOps: _.ruby.paintOps.map((e) => ({
						...e,
						origin: {
							xPt: e.origin.xPt + E + (s - r.measuredWidthPt) / 2,
							yPt: e.origin.yPt + t.baselinePt
						}
					}))
				} } : {}
			}, F = d === void 0 ? 0 : Math.max(0, s + w - d);
			b === "ltr" && F > 0 && O.set(D.length, F), D.push(ee);
		}
		E += s, a?.trailingGap && (E += v);
	}
	for (let [e, t] of O) {
		let n = D[e];
		if (n?.kind !== "text" || !n.decorations) continue;
		let r = D[e + 1], i = n.decorations.map((e) => e.kind === "underline" ? (r?.kind === "text" || r?.kind === "tab") && r.decorations?.some((t) => Jg(e, t)) ? e : Xg(e, t) : e);
		D[e] = {
			...n,
			decorations: i
		};
	}
	for (let e = 0; e < D.length;) {
		let t = D[e];
		if (t?.kind !== "text" || !t.runBorder) {
			e += 1;
			continue;
		}
		let n = e + 1;
		for (; n < D.length;) {
			let e = D[n];
			if (e?.kind !== "text" || !e.runBorder) break;
			n += 1;
		}
		let r = Kh(D.slice(e, n).map((e) => ({
			bounds: e.bounds,
			trailingSlackPt: e.ownedTrailingSlackPt ?? 0,
			border: e.runBorder
		})));
		D[e] = {
			...t,
			runBorderFragments: r
		}, e = n;
	}
	return Zg(D), Nn({
		range: t.range,
		bounds: {
			xPt: w + T,
			yPt: t.topPt,
			widthPt: x,
			heightPt: t.advancePt
		},
		baselinePt: t.baselinePt,
		advancePt: t.advancePt,
		placements: D
	});
}
function $g(e) {
	let t = e.continuation, n = t?.lineStart ?? 0, r = t?.lineEnd ?? e.lines.length;
	if (n < 0 || r < n || r > e.lines.length) throw RangeError("Paragraph continuation line range is outside the retained lines");
	let i = t?.continuesFromPrevious ? 0 : e.spacing.beforePt;
	for (let a = n; a < r; a += 1) {
		let r = e.lines[a];
		if (r) {
			if (a === 0 && !t?.continuesFromPrevious) i += Math.max(0, r.bounds.yPt - (e.flowBounds.yPt + e.spacing.beforePt));
			else if (a > n) {
				let t = e.lines[a - 1];
				i += Math.max(0, r.bounds.yPt - ((t?.bounds.yPt ?? r.bounds.yPt) + (t?.advancePt ?? 0)));
			}
			i += Ig(r.advancePt, "line.advancePt");
		}
	}
	return e.lines.length === 0 && e.paragraphMark && (i += Ig(e.paragraphMark.bounds.heightPt, "paragraphMark.heightPt")), t?.continuesOnNext || (i += e.spacing.afterPt), i;
}
function e_(e) {
	let t = e.continuation?.lineStart ?? 0, n = e.continuation?.lineEnd ?? e.lines.length, r = e.lines.slice(t, n), i = e.continuation ? $g(e) : Ig(e.flowBounds.heightPt, "flowBounds.heightPt");
	return Nn({
		kind: "paragraph",
		id: e.id,
		source: e.source,
		...e.paragraphId === void 0 ? {} : { paragraphId: e.paragraphId },
		flowDomainId: e.flowDomainId,
		ordinaryFlow: e.ordinaryFlow,
		...e.styleId === void 0 ? {} : { styleId: e.styleId },
		...e.bookmarkStarts?.length ? { bookmarkStarts: e.bookmarkStarts } : {},
		flowBounds: {
			...e.flowBounds,
			heightPt: i
		},
		inkBounds: e.inkBounds,
		...e.clipBounds ? { clipBounds: e.clipBounds } : {},
		advancePt: i,
		spacing: e.spacing,
		contextualSpacing: e.contextualSpacing ?? !1,
		lines: r,
		borders: e.borders,
		...e.shading ? { shading: e.shading } : {},
		resources: e.resources,
		drawings: e.drawings,
		textBoxes: e.textBoxes,
		events: e.events,
		exclusions: e.exclusions,
		...e.cellContainmentBounds ? { cellContainmentBounds: e.cellContainmentBounds } : {},
		...e.anchorCollisions?.length ? { anchorCollisions: e.anchorCollisions } : {},
		...e.anchorFrames ? { anchorFrames: e.anchorFrames } : {},
		...e.paragraphMark ? { paragraphMark: e.paragraphMark } : {},
		...e.continuation ? { continuation: e.continuation } : {}
	});
}
function t_(e, t) {
	return {
		...e,
		path: [...e.path, t]
	};
}
function n_(e, t) {
	if (e.status === "planned") return Object.freeze([]);
	let n = Object.freeze({
		...t,
		path: Object.freeze([...t.path])
	});
	return Object.freeze(e.diagnostics.map((e) => Object.freeze({
		...e,
		source: n
	})));
}
function r_(e) {
	return nt(e);
}
function i_(e, t) {
	return rt("unavailable-drawing", t_(e, t));
}
function a_(e, t) {
	return Object.freeze({
		code: "MISSING_RESOURCE",
		severity: "warning",
		source: Object.freeze({
			...t,
			path: Object.freeze([...t.path])
		}),
		message: `Drawing ${e} resource is unavailable`
	});
}
function o_(e) {
	return Cg(e) || (/^date$/i.test(e.fieldType) ? "date" : /^time$/i.test(e.fieldType) ? "time" : "document");
}
function s_(e) {
	return e.sourceRunIndex;
}
function c_(e) {
	if (!e.textLayoutService || !e.textShapeRequest) return;
	let t = e.textLayoutService.shape({
		...e.textShapeRequest,
		text: e.text,
		measure: !0
	});
	return {
		ascentPt: t.ascentPt,
		descentPt: t.descentPt
	};
}
var l_ = Object.freeze({
	yellow: "#FFFF00",
	cyan: "#00FFFF",
	green: "#00FF00",
	magenta: "#FF00FF",
	blue: "#0000FF",
	red: "#FF0000",
	darkBlue: "#000080",
	darkCyan: "#008080",
	darkGreen: "#008000",
	darkMagenta: "#800080",
	darkRed: "#800000",
	darkYellow: "#808000",
	darkGray: "#808080",
	lightGray: "#C0C0C0",
	black: "#000000",
	white: "#FFFFFF"
});
function u_(e) {
	return e.startsWith("#") ? e : l_[e] ?? "#FFFF00";
}
function d_(e) {
	let t = ms(e.vertAlign, e.fontSize) + (e.lineRelativePosition ?? e.position ?? 0);
	return t === 0 ? 0 : -t;
}
function f_(e, t, n, r, i, a, o) {
	let s = s_(e), c = s === void 0 ? void 0 : t.runs[s], l = Lg(c);
	if (e.metricOnly) {
		let t = c_(e);
		return {
			kind: "anchor-host",
			range: {
				start: n,
				end: n
			},
			bounds: {
				xPt: r,
				yPt: a,
				widthPt: 0,
				heightPt: o
			},
			baselinePt: i,
			...t ? { sourceMetrics: t } : {}
		};
	}
	let u = e.color ? {
		kind: "explicit",
		color: `#${e.color}`
	} : e.colorAuto ? {
		kind: "auto",
		...e.background ? { background: `#${e.background}` } : {}
	} : { kind: "default" }, d = e.fontRoute ?? at(e.fontFamily ? `"${e.fontFamily.replaceAll("\"", "\\\"")}"` : "sans-serif", e.fontFamily ? "native" : "generic"), f = e.ruby && e.textLayoutService && e.textShapeRequest ? e.textLayoutService.shape({
		...e.textShapeRequest,
		text: e.text,
		measure: !0
	}) : void 0, p = e.ruby && e.textLayoutService && e.textShapeRequest ? e.textLayoutService.shape({
		...e.textShapeRequest,
		text: e.ruby.text,
		fontSizePt: e.ruby.fontSizePt,
		measure: !0
	}) : void 0, m = e.ruby && p ? (p.clusters ?? []).map((t) => {
		let n = p.spans.find((e) => e.start <= t.range.start && e.end >= t.range.end) ?? p.spans[0];
		if (!n) throw Error("Ruby shaping produced no selected-face span");
		return {
			text: e.ruby.text.slice(t.range.start, t.range.end),
			offsetPt: t.offsetPt,
			fontRoute: n.fontRoute,
			fontSizePt: e.ruby.fontSizePt,
			fontWeight: n.font.weight,
			fontStyle: n.font.style,
			color: u
		};
	}) : [], h = l?.ruby?.raisePt.status === "valid" ? l.ruby.raisePt.value ?? void 0 : e.ruby?.hpsRaisePt, g = e.ruby && p ? Lh({
		baseOrigin: {
			xPt: 0,
			yPt: 0
		},
		baseAdvancePt: e.measuredWidth,
		guideAdvancePt: p.advancePt,
		...h === void 0 ? {} : { raisePt: h },
		...f?.inkBounds && p.inkBounds ? {
			baseInkTopPt: -f.inkBounds.ascentPt,
			guideInkBottomFromBaselinePt: p.inkBounds.descentPt
		} : {},
		spans: m
	}) : [], _ = d_(e);
	return {
		kind: "text",
		text: e.text,
		...s === void 0 ? {} : { sourceRunIndex: s },
		...c?.type === "field" ? {
			role: "field-result",
			dependency: o_(c)
		} : {},
		...c?.type === "text" && (c.noteRef?.kind === "footnote" || c.noteRef?.kind === "endnote") ? { noteReference: {
			kind: c.noteRef.kind,
			id: c.noteRef.id
		} } : {},
		range: {
			start: n,
			end: n + e.text.length
		},
		origin: {
			xPt: r,
			yPt: i + _
		},
		bounds: {
			xPt: r,
			yPt: a,
			widthPt: e.measuredWidth,
			heightPt: o
		},
		advancePt: e.measuredWidth,
		clusters: [{
			range: {
				start: n,
				end: n + e.text.length
			},
			offset: {
				xPt: 0,
				yPt: 0
			},
			advancePt: e.measuredWidth
		}],
		color: u,
		fontRoute: d,
		fontSizePt: Ai(e, 1),
		fontWeight: e.bold ? 700 : 400,
		fontStyle: e.italic ? "italic" : "normal",
		direction: e.rtl ? "rtl" : "ltr",
		...e.verticalRun ? { writingMode: "vertical-rl" } : {},
		...e.charSpacing === void 0 ? {} : { characterSpacingPt: e.charSpacing },
		...e.charScale === void 0 ? {} : { characterScale: e.charScale },
		...e.fitTextRegionIndex === void 0 ? {} : { fitText: {
			regionIndex: e.fitTextRegionIndex,
			perGapPt: e.fitTextPerGapPx ?? 0,
			trailingPadPt: e.fitTextTrailingPadPx ?? 0
		} },
		...e.kerning === void 0 ? {} : { kerning: e.fontSize >= e.kerning },
		...e.position === void 0 ? {} : { positionPt: e.position },
		...e.vertAlign ? { verticalAlign: e.vertAlign } : {},
		...e.tateChuYoko ? { tateChuYoko: !0 } : {},
		...e.tateChuYokoCompress ? { tateChuYokoCompress: !0 } : {},
		...e.ruby && p ? { ruby: {
			text: e.ruby.text,
			advancePt: p.advancePt,
			authored: {
				...l?.ruby?.align.status === "valid" && l.ruby.align.value ? { align: l.ruby.align.value } : {},
				...l?.ruby?.baseFontSizePt.status === "valid" && l.ruby.baseFontSizePt.value !== null ? { baseFontSizePt: l.ruby.baseFontSizePt.value } : {},
				...h === void 0 ? {} : { raisePt: h },
				...l?.ruby?.language.status === "valid" && l.ruby.language.value ? { language: l.ruby.language.value } : {}
			},
			paintOps: g
		} } : {},
		...e.emphasisMark ? { emphasisMark: e.emphasisMark } : {},
		...e.highlight ? { highlight: u_(e.highlight) } : {},
		...e.background ? { background: `#${e.background}` } : {},
		...e.border ? { runBorder: {
			val: l?.border?.val.value ?? e.border.style,
			color: e.border.color ? `#${e.border.color}` : "#000000",
			widthPt: e.border.width,
			spacePt: e.border.space ?? 0,
			...l?.border?.themeColor.value ? { themeColor: l.border.themeColor.value } : {},
			...l?.border?.themeTint.value ? { themeTint: l.border.themeTint.value } : {},
			...l?.border?.themeShade.value ? { themeShade: l.border.themeShade.value } : {},
			...l?.border?.shadow.status === "valid" && l.border.shadow.value !== null ? { shadow: l.border.shadow.value } : {},
			...l?.border?.frame.status === "valid" && l.border.frame.value !== null ? { frame: l.border.frame.value } : {}
		} } : {},
		...e.revision ? { revision: e.revision } : {},
		typography: {
			caps: l?.caps ?? !1,
			smallCaps: l?.smallCaps ?? e.smallCaps === !0,
			strike: l?.strike ?? e.strikethrough,
			doubleStrike: l?.doubleStrike ?? e.doubleStrikethrough === !0,
			verticalAlign: l?.verticalAlign ?? {
				status: e.vertAlign ? "valid" : "missing",
				raw: e.vertAlign ?? null,
				value: e.vertAlign ?? null
			},
			positionPt: l?.positionPt ?? {
				status: e.position === void 0 ? "missing" : "valid",
				raw: e.position === void 0 ? null : String(e.position * 2),
				value: e.position ?? null
			},
			emphasis: l?.emphasis ?? {
				status: e.emphasisMark ? "valid" : "missing",
				raw: e.emphasisMark ?? null,
				value: e.emphasisMark ?? null
			},
			...l?.underline ? { underline: l.underline } : {}
		},
		decorations: [],
		paintOps: [{
			text: e.text,
			range: {
				start: n,
				end: n + e.text.length
			},
			offset: {
				xPt: 0,
				yPt: _
			},
			letterSpacingPt: Qs(e),
			scaleX: e.charScale ?? 1,
			direction: e.rtl ? "rtl" : "ltr",
			kerning: e.kerning === void 0 ? "auto" : e.fontSize >= e.kerning ? "normal" : "none",
			writingMode: e.verticalRun ? "vertical-rl" : "horizontal-tb"
		}],
		...e.hyperlink ? { hyperlink: e.hyperlink } : {}
	};
}
function p_(e, t) {
	let n = e.layout, r = n.visibleAscent ?? n.ascent, i = r + (n.visibleDescent ?? n.descent), a = t.lineSpacing?.rule === "auto" && !t.hasRuby && !t.lineGrid.active, o = a && (t.lineSpacing?.value ?? 1) < 1, s = a && !o ? Math.max(i, n.visibleIntendedSingle ?? n.intendedSingle) : e.advancePt;
	return e.topYPt + (s - i) / 2 + r;
}
function m_(e, t, n) {
	let r = e.numbering;
	if (!r) return;
	if (t.numberingMarkerGeometry) return t.numberingMarkerGeometry;
	let i = e.numberingMarkerShapeInput, a = n.environment.layoutServices?.text;
	if (!(!i || !a)) return ml(r, i, {
		authoredFirstIndentPt: e.indentFirst,
		physicalIndentLeftPt: t.physicalIndentLeftPt,
		tabStops: e.tabStops,
		defaultTabPt: t.defaultTabPt
	}, a);
}
function h_(e, t, n, r, i) {
	return i.bounds.widthPt <= 0 ? t.baseRtl ? n + r : n : t.baseRtl ? i.bounds.xPt + i.bounds.widthPt + e.bodyOffsetPt : i.bounds.xPt - e.bodyOffsetPt;
}
function g_(e, t, n, r, i, a) {
	if (!e.shape || e.markerText === "") return [];
	let o = e.shape, s = ul({
		baseRtl: n.baseRtl,
		alignedLeadingEdgePt: h_(e, n, r, i, a),
		authoredFirstIndentPt: t.indentFirst,
		markerShiftPt: e.markerShiftPt,
		markerWidthPt: e.markerWidthPt
	}), c = -e.markerText.length, l = t.numbering?.color ? {
		kind: "explicit",
		color: `#${t.numbering.color}`
	} : t.numbering?.colorAuto ? { kind: "auto" } : t.paragraphMarkColor ? {
		kind: "explicit",
		color: `#${t.paragraphMarkColor}`
	} : { kind: "default" }, u = 0;
	return o.spans.map((e) => {
		let r = u;
		u += e.advancePt;
		let i = o.clusters ? o.clusters.filter((t) => t.range.start >= e.start && t.range.end <= e.end).map((e) => ({
			range: {
				start: c + e.range.start,
				end: c + e.range.end
			},
			offset: {
				xPt: e.offsetPt - r,
				yPt: 0
			},
			advancePt: e.advancePt
		})) : [{
			range: {
				start: c + e.start,
				end: c + e.end
			},
			offset: {
				xPt: 0,
				yPt: 0
			},
			advancePt: e.advancePt
		}], d = s + r;
		return {
			kind: "text",
			role: "numbering-marker",
			text: e.text,
			range: {
				start: c + e.start,
				end: c + e.end
			},
			origin: {
				xPt: d,
				yPt: a.baselinePt
			},
			bounds: {
				xPt: d,
				yPt: a.baselinePt - e.ascentPt,
				widthPt: e.advancePt,
				heightPt: e.ascentPt + e.descentPt
			},
			advancePt: e.advancePt,
			clusters: i,
			paintOps: [{
				text: e.text,
				range: {
					start: c + e.start,
					end: c + e.end
				},
				offset: {
					xPt: 0,
					yPt: 0
				},
				letterSpacingPt: 0,
				scaleX: 1,
				direction: n.baseRtl ? "rtl" : "ltr",
				kerning: "auto",
				writingMode: "horizontal-tb"
			}],
			color: l,
			fontRoute: e.fontRoute,
			fontSizePt: t.numberingMarkerShapeInput?.fontSizePt ?? e.ascentPt + e.descentPt,
			fontWeight: e.font.weight,
			fontStyle: e.font.style,
			direction: n.baseRtl ? "rtl" : "ltr",
			decorations: []
		};
	});
}
function __(e) {
	if (e) return e.startsWith("#") ? e : `#${e}`;
}
function v_(e, t, n) {
	let r = __(t), i = __(n);
	return e.map((e) => ({
		...e,
		placements: e.placements.map((e) => {
			if (e.kind !== "text") return e;
			let t = e.background ?? r ?? i;
			return !t || e.color.kind === "explicit" ? e : {
				...e,
				color: {
					kind: "auto",
					background: t
				}
			};
		})
	}));
}
function y_(e) {
	return e != null && e.style !== "none";
}
function b_(e, t, n, r, i, a, o) {
	let s = n, c = n + r;
	e.indentFirst < 0 && (e.bidi ? c -= e.indentFirst : s += e.indentFirst);
	for (let e of t.flatMap((e) => e.placements)) !(e.kind === "text" && e.role === "numbering-marker" || e.kind === "resource" && e.resourceKind === "picture-bullet") || !e.bounds || (s = Math.min(s, e.bounds.xPt), c = Math.max(c, e.bounds.xPt + e.bounds.widthPt));
	let l = e.borders, u = o.top === "none" ? null : l?.[o.top] ?? null, d = o.bottom === "none" ? null : l?.bottom ?? null, f = y_(l?.left ?? null) ? l.left.space ?? 0 : 0, p = y_(l?.right ?? null) ? l.right.space ?? 0 : 0, m = y_(u) ? u.space ?? 0 : 0, h = y_(d) ? d.space ?? 0 : 0;
	return {
		xPt: s - f,
		yPt: i - m,
		widthPt: c - s + f + p,
		heightPt: a + m + h
	};
}
function x_(e) {
	return e.kind === "explicit" ? e.color : e.kind === "auto" ? Ue(e.background ?? "#FFFFFF") : "#000000";
}
function S_(e) {
	return e.inkBounds ?? {
		xMinPt: 0,
		xMaxPt: e.advancePt,
		ascentPt: e.ascentPt,
		descentPt: e.descentPt
	};
}
function C_(e) {
	return e === "circle" ? "○" : e === "comma" ? "﹅" : "•";
}
function w_(e, t, n) {
	let r = e.trackChangesMarkup, i = Xm(r?.kind);
	if (!(e.highlight || e.underline || e.strikethrough || e.doubleStrikethrough || e.emphasisMark || i.underline || i.strike)) return;
	let a = e.textLayoutService, o = e.textShapeRequest;
	if (!a || !o) throw Error("Retained typography geometry requires TextLayoutService");
	let s = (e) => a.shape({
		...o,
		text: e,
		measure: !0
	}), c = (e) => {
		let t = s(e), n = t.spans[0];
		if (!n || t.spans.length !== 1 || n.start !== 0 || n.end !== e.length) throw Error("Retained decoration probe requires one selected-face span");
		return {
			ascentPt: n.ascentPt,
			descentPt: n.descentPt,
			...n.inkBounds ? { inkBounds: n.inkBounds } : {}
		};
	}, l = e.selectedFaceFontBox;
	if (!l || !e.selectedFaceInkBounds) throw Error("Retained typography geometry requires authoritative selected-face metrics");
	let u = {
		ascentPt: l.ascentPt,
		descentPt: l.descentPt,
		inkBounds: e.selectedFaceInkBounds
	}, d = x_(n), f = e.underline ? {
		...e.underlineStyle ? { authoredStyle: e.underlineStyle } : {},
		color: e.underlineColor && e.underlineColor !== "auto" ? `#${e.underlineColor}` : d,
		probe: c("_")
	} : r && i.underline ? {
		color: r.authorColor,
		probe: c("_")
	} : void 0, p = e.strikethrough || e.doubleStrikethrough ? {
		double: e.doubleStrikethrough === !0,
		probe: c("-"),
		...e.doubleStrikethrough ? { doubleProbe: c("=") } : {}
	} : r && i.strike ? {
		double: !1,
		probe: c("-"),
		color: r.authorColor
	} : void 0, m = e.emphasisMark ? (() => {
		let r = C_(e.emphasisMark), i = s(r), a = i.spans[0];
		if (!a) throw Error("Emphasis shaping produced no selected-face span");
		let c = (e.shapedClusters ?? []).map((n) => {
			let r = e.text.slice(n.range.start, n.range.end);
			return {
				text: r,
				range: {
					start: t + n.range.start,
					end: t + n.range.end
				},
				ink: S_(s(r))
			};
		});
		return {
			authored: e.emphasisMark,
			glyph: r,
			mark: {
				inkBounds: S_(i),
				fontRoute: a.fontRoute,
				fontSizePt: o.fontSizePt,
				fontWeight: a.font.weight,
				fontStyle: a.font.style,
				color: n
			},
			clusterInk: c
		};
	})() : void 0;
	return {
		base: u,
		...f ? { underline: f } : {},
		...p ? { strike: p } : {},
		...m ? { emphasis: m } : {}
	};
}
function T_(e, t, n, r, i, a) {
	if (e.metricOnly) {
		let t = c_(e);
		return {
			kind: "anchor-host",
			measuredWidthPt: 0,
			range: {
				start: n,
				end: n
			},
			...t ? { sourceMetrics: t } : {},
			...i?.type === "anchorHost" && i.anchorOccurrenceId ? { anchorOccurrenceId: i.anchorOccurrenceId } : {}
		};
	}
	let o = f_(e, t, n, 0, 0, 0, 0);
	if (o.kind !== "text") throw Error("Visible text segment projected as anchor host");
	let s = pc(e, r, 1), c = e.charScale ?? 1, l = d_(e), u = w_(e, n, o.color), d = e.shapedClusters, f = d?.length && d[0]?.range.start === 0 && d.at(-1)?.range.end === e.text.length && d.every((e, t) => t === 0 || d[t - 1]?.range.end === e.range.start) && d.every((e) => e.range.start < e.range.end && Number.isFinite(e.offsetPt) && Number.isFinite(e.advancePt)) ? d : void 0;
	if (e.text.length > 0 && !f) throw Error("Visible text acquisition requires complete authoritative grapheme clusters from TextLayoutService");
	let p = (f ?? []).map((t, i) => {
		let a = e.text.slice(0, t.range.start), o = e.text.slice(t.range.start, t.range.end), u = [...a].length, d = [...o].length, p = i === (f?.length ?? 0) - 1 ? e.fitTextTrailingPadPx ?? 0 : 0, m = e.punctuationCompressions?.filter((e) => e.end <= t.range.start).reduce((e, t) => e + t.adjustmentPt, 0) ?? 0, h = e.punctuationCompressions?.filter((e) => e.end > t.range.start && e.end <= t.range.end).reduce((e, t) => e + t.adjustmentPt, 0) ?? 0, g = tc(e, a, r) * c, _ = tc(e, o, r) * c;
		return {
			range: {
				start: n + t.range.start,
				end: n + t.range.end
			},
			offset: {
				xPt: t.offsetPt * c + u * s + g + m,
				yPt: l
			},
			advancePt: t.advancePt * c + d * s + _ + p + h
		};
	}), m = e.snapGridLeadingPadPx ?? 0, h = e.measuredWidth - (e.snapGridTrailingPadPx ?? 0), g;
	if (e.snapGridClass === "eastAsia" && e.snapGridCellPitchPx) {
		let t = e.snapGridCellPitchPx, r = 0;
		p = p.map((i, a) => {
			e.text.slice(i.range.start - n, i.range.end - n);
			let o = qo(i.advancePt, t), s = o * t, l = r * t + (s - i.advancePt) / 2;
			if (a === p.length - 1) {
				h = l + i.advancePt;
				let t = f?.[a]?.offsetPt;
				e.selectedFaceInkBounds && t !== void 0 && !/\s$/u.test(e.text) && (g = l + Math.max(0, (e.selectedFaceInkBounds.xMaxPt - t) * c));
			}
			let u = {
				...i,
				offset: {
					xPt: l,
					yPt: i.offset.yPt
				},
				advancePt: s
			};
			return r += o, u;
		});
	} else m !== 0 && (p = p.map((e) => ({
		...e,
		offset: {
			xPt: e.offset.xPt + m,
			yPt: e.offset.yPt
		}
	})));
	let { origin: _, bounds: v, advancePt: y, paintOps: b, clusters: x, ...S } = o, C = e.tateChuYoko && e.tateChuYokoCompress ? (() => {
		if (!e.textLayoutService || !e.textShapeRequest) throw Error("Tate-chu-yoko compression requires TextLayoutService");
		let t = e.textLayoutService.shape({
			...e.textShapeRequest,
			text: e.text,
			fontSizePt: o.fontSizePt,
			measure: !0,
			clusterGeometry: !1
		}), n = t.ascentPt + t.descentPt;
		return n > o.fontSizePt && n > 0 ? o.fontSizePt / n : 1;
	})() : 1, w = e.punctuationCompressions?.some((t) => t.end < e.text.length) ?? !1, T = e.verticalRun ? (() => {
		if (!a) throw Error("Vertical glyph planning capability is required for vertical text");
		let t = b[0];
		return a.planRun({
			text: e.text,
			font: ot(o.fontRoute, o.fontSizePt, o.fontWeight, o.fontStyle),
			fontKerning: t.kerning,
			fontSizePt: o.fontSizePt,
			letterSpacingPt: s,
			charScale: c,
			growTrRotateInk: !0,
			writingMode: t.writingMode
		}).map((r) => ({
			...t,
			text: r.text,
			range: {
				start: n + r.range.start,
				end: n + r.range.end
			},
			offset: {
				xPt: r.originPt + (e.punctuationCompressions?.filter((e) => e.end <= r.range.start).reduce((e, t) => e + t.adjustmentPt, 0) ?? 0),
				yPt: l
			},
			letterSpacingPt: s,
			glyphOrientation: r.orientation,
			...r.verticalFeature ? { verticalFeature: !0 } : {},
			...r.blockAxisInkBounds ? { blockAxisInkBounds: r.blockAxisInkBounds } : {},
			...r.drawOffsetPt.xPt !== 0 || r.drawOffsetPt.yPt !== 0 ? { glyphOffsetPt: r.drawOffsetPt } : {}
		}));
	})() : e.tateChuYoko ? b.map((t) => ({
		...t,
		offset: {
			xPt: t.offset.xPt + e.measuredWidth / 2,
			yPt: t.offset.yPt
		},
		glyphOrientation: "upright",
		...C === 1 ? {} : { scaleY: C }
	})) : w ? (() => {
		let t = b[0], r = [];
		for (let t of p) {
			let i = t.range.end - n, a = e.punctuationCompressions?.find((e) => e.end === i)?.adjustmentPt ?? null, o = r.at(-1);
			o && o.adjustmentPt === a ? o.end = t.range.end : r.push({
				start: t.range.start,
				end: t.range.end,
				offset: t.offset,
				adjustmentPt: a
			});
		}
		return r.map((r) => ({
			...t,
			text: e.text.slice(r.start - n, r.end - n),
			range: {
				start: r.start,
				end: r.end
			},
			offset: r.offset,
			letterSpacingPt: s + (r.adjustmentPt ?? 0)
		}));
	})() : b, E = e.snapGridClass === "eastAsia" ? (() => {
		let t = T[0];
		return t ? p.map((r) => ({
			...t,
			text: e.text.slice(r.range.start - n, r.range.end - n),
			range: r.range,
			offset: r.offset
		})) : T;
	})() : m === 0 ? T : T.map((e) => ({
		...e,
		offset: {
			xPt: e.offset.xPt + m,
			yPt: e.offset.yPt
		}
	})), D = r?.type === "snapToChars" && e.underline && !e.verticalRun && t.bidi !== !0 && e.selectedFaceInkBounds ? g ?? (E.length === 1 ? E[0].offset.xPt + (E[0].glyphOffsetPt?.xPt ?? 0) + e.selectedFaceInkBounds.xMaxPt * (E[0].scaleX ?? 1) : h) : h;
	return {
		...S,
		kind: "text",
		measuredWidthPt: e.measuredWidth,
		clusters: p,
		basePaintOps: E.map((t) => ({
			...t,
			letterSpacingPt: e.verticalRun && t.glyphOrientation !== "sideways" ? 0 : w ? t.letterSpacingPt : s,
			...!e.verticalRun && e.selectedFaceInkBounds ? { inkBounds: e.selectedFaceInkBounds } : {},
			...!e.verticalRun && e.selectedFaceInkBounds && t.glyphOrientation === void 0 ? { blockAxisInkBounds: {
				startPt: (t.glyphOffsetPt?.yPt ?? 0) - e.selectedFaceInkBounds.ascentPt,
				endPt: (t.glyphOffsetPt?.yPt ?? 0) + e.selectedFaceInkBounds.descentPt
			} } : {}
		})),
		breakBefore: e.breakBefore !== !1 && !e.joinPrev,
		rtl: e.rtl,
		digitsAsAN: e.digitsAsAN,
		fixedPitch: e.fitTextRegionIndex !== void 0 || e.snapGridClass !== void 0,
		...r?.type === "snapToChars" && e.underline ? { decorationTerminalAdvancePt: D } : {},
		...u ? { retainedGeometry: u } : {},
		...e.selectedFaceFontBox ? { selectedFaceFontBox: e.selectedFaceFontBox } : {},
		...e.textLayoutService ? { textLayoutService: e.textLayoutService } : {},
		...e.textShapeRequest ? { textShapeRequest: e.textShapeRequest } : {}
	};
}
function E_(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let e of t.lines) for (let t of e.layout.segments) {
		let e = s_(t);
		if (e === void 0) continue;
		let r = "text" in t ? t.metricOnly ? 0 : t.text.length : "math" in t ? t.fallbackText.length : +("isTab" in t || "imagePath" in t);
		n.set(e, (n.get(e) ?? 0) + r);
	}
	let r = e.runs.map((e, t) => {
		let r = n.get(t);
		return r === void 0 ? e.type === "text" ? e.text.length : e.type === "field" ? e.fallbackText.length : e.type === "anchorHost" ? 0 : 1 : r;
	}), i = 0;
	return {
		runStarts: r.map((e) => {
			let t = i;
			return i += e, t;
		}),
		runLengths: r
	};
}
function D_(e) {
	return "text" in e ? e.metricOnly ? 0 : e.text.length : "math" in e ? e.fallbackText.length : 1;
}
function O_(e, t, n, r, i, a, o, s, c, l, u, d = !1) {
	let f = 0, p = /* @__PURE__ */ new Map(), m = e.lines.some((e) => e.layout.segments.some((e) => "isTab" in e)), h = t.tabStops?.reduce((e, t) => !e || t.pos < e.pos ? t : e, void 0), g = e.lines.flatMap((e) => e.layout.segments.flatMap((e) => "text" in e && !e.metricOnly ? [e.text] : [])).join("").trim(), _ = !m && h?.alignment === "decimal" && g !== "" && /^[+\-(]?[\d., ]+\)?%?$/u.test(g) ? h.pos - o.physicalIndentLeftPt : void 0;
	return e.lines.map((m, h) => {
		let g = m.layout, v = p_(m, o), y = Infinity, b = f, x = [];
		for (let e of g.segments) {
			let n = s_(e), r = n === void 0 ? void 0 : t.runs[n], c = D_(e), m = n === void 0 ? f : (s.runStarts[n] ?? f) + (p.get(n) ?? 0);
			if (n !== void 0 && p.set(n, (p.get(n) ?? 0) + c), y = Math.min(y, m), b = Math.max(b, m + c), "isTab" in e) {
				let t = e, n = t.leader ?? "none", i, a, o = r?.type === "text" || r?.type === "field" ? r : void 0, s = o, u = (e) => {
					if (!l) throw Error("Formatted tab acquisition requires TextLayoutService");
					return l.shape({
						text: e,
						fontSizePt: t.fontSize,
						fonts: s?.fontSlots?.direct ?? (o?.fontFamily ? { ascii: o.fontFamily } : {}),
						themeFonts: s?.fontSlots?.theme,
						themeFontPresence: s?.fontSlots?.themePresent,
						weight: t.bold ? 700 : 400,
						style: t.italic ? "italic" : "normal",
						measure: !0
					});
				}, d = (e) => {
					let t = u(e), n = t.spans[0];
					if (!n || t.spans.length !== 1 || n.start !== 0 || n.end !== e.length) throw Error("Formatted tab probe requires one selected-face span");
					return {
						ascentPt: n.ascentPt,
						descentPt: n.descentPt,
						...n.inkBounds ? { inkBounds: n.inkBounds } : {}
					};
				};
				if (o?.underline) {
					let e = o.color ? `#${o.color}` : "#000000";
					a = {
						base: d("M"),
						probe: d("_"),
						color: s?.underlineColor && s.underlineColor !== "auto" ? `#${s.underlineColor}` : e,
						...s?.underlineStyle ? { authoredStyle: s.underlineStyle } : {}
					};
				}
				if (n !== "none") {
					if (!l) throw Error("Tab leader acquisition requires TextLayoutService");
					let e = n === "hyphen" ? "-" : n === "underscore" || n === "heavy" ? "_" : n === "middleDot" ? "·" : ".", r = u(e), a = r.spans[0];
					if (!a || !Number.isFinite(r.advancePt) || r.advancePt <= 0) throw Error("Tab leader acquisition produced no shaped glyph advance");
					i = {
						glyph: e,
						advancePt: r.advancePt,
						fontRoute: a.fontRoute,
						fontSizePt: t.fontSize,
						fontWeight: a.font.weight,
						fontStyle: a.font.style,
						color: o?.color ? {
							kind: "explicit",
							color: `#${o.color}`
						} : s?.colorAuto ? { kind: "auto" } : { kind: "default" }
					};
				}
				x.push({
					kind: "tab",
					range: {
						start: m,
						end: m + c
					},
					measuredWidthPt: t.measuredWidth,
					leader: n,
					fontSizePt: t.fontSize,
					bold: t.bold,
					italic: t.italic,
					...a ? { underline: a } : {},
					...i ? { leaderShape: i } : {}
				});
			} else if ("imagePath" in e) {
				let t = e;
				if (t.anchor) continue;
				let n = s_(e), r = t_(i, n ?? 0);
				if (t.inlineShape) {
					x.push({
						kind: "inline-drawing",
						range: {
							start: m,
							end: m + c
						},
						drawingId: `${a}:drawing:${n ?? 0}`,
						measuredWidthPt: t.measuredWidth,
						widthPt: t.widthPt,
						heightPt: t.heightPt,
						topOffsetPt: -t.heightPt
					}), f = Math.max(f, m + c);
					continue;
				}
				if (t.unavailableResourceKind) {
					x.push({
						kind: "unavailable-resource",
						range: {
							start: m,
							end: m + c
						},
						resourceKind: t.unavailableResourceKind,
						measuredWidthPt: t.measuredWidth,
						widthPt: t.widthPt,
						heightPt: t.heightPt,
						topOffsetPt: -t.heightPt,
						drawingId: i_(i, n ?? 0)
					}), f = Math.max(f, m + c);
					continue;
				}
				let o = t.chart ? "chart" : "image", s = t.chartResourceKey ?? (t.chart ? r_(r) : et(r, t.imagePath));
				x.push({
					kind: "resource",
					range: {
						start: m,
						end: m + c
					},
					...n === void 0 ? {} : { sourceRunIndex: n },
					resourceKey: s,
					resourceKind: o,
					measuredWidthPt: t.measuredWidth,
					widthPt: t.widthPt,
					heightPt: t.heightPt,
					topOffsetPt: -t.heightPt,
					...d ? { orientation: "upright-physical" } : {}
				});
			} else if ("math" in e) {
				let t = e;
				x.push({
					kind: "resource",
					range: {
						start: m,
						end: m + c
					},
					...s_(e) === void 0 ? {} : { sourceRunIndex: s_(e) },
					resourceKey: t.mathResourceKey,
					resourceKind: "math",
					measuredWidthPt: t.measuredWidth,
					widthPt: t.measuredWidth,
					heightPt: t.mathAscent + t.mathDescent,
					topOffsetPt: -t.mathAscent
				});
			} else x.push(T_(e, t, m, al(o), r, u));
			f = Math.max(f, m + c);
		}
		let S = g.segments.length === 1 && "math" in (g.segments[0] ?? {}) ? g.segments[0] : void 0;
		return Qg({
			paragraphXPt: n,
			availableWidthPt: r,
			alignment: t.alignment,
			baseRtl: o.baseRtl,
			isFirstLine: h === 0,
			isLastLine: h === e.lines.length - 1,
			stretchLastLine: o.stretchLastLine,
			firstLineIndentPt: o.firstIndentPt,
			...h === 0 && c ? { numbering: { bodyOffsetPt: c.bodyOffsetPt } } : {},
			..._ === void 0 ? {} : { decimalAutoTabPt: _ },
			...S?.display ? { displayMathJustification: S.jc ?? o.mathDefJc ?? "centerGroup" } : {},
			line: {
				range: {
					start: Number.isFinite(y) ? y : f,
					end: b
				},
				topPt: m.topYPt,
				baselinePt: v,
				advancePt: m.advancePt,
				xOffsetPt: g.xOffset,
				availableWidthPt: g.availWidth,
				endsWithBreak: g.endsWithBreak ?? !1,
				segments: x
			}
		});
	});
}
function k_(e, t, n, r, i) {
	let a = i.filter((e) => e.alignment === "bar");
	return a.length === 0 ? e : e.map((e) => ({
		...e,
		barTabRules: a.map((i) => {
			let a = r ? t + n - i.pos : t + i.pos;
			return {
				from: {
					xPt: a,
					yPt: e.bounds.yPt
				},
				to: {
					xPt: a,
					yPt: e.bounds.yPt + e.bounds.heightPt
				},
				color: "#000000",
				widthPt: 0,
				authoredStyle: "single",
				style: "solid"
			};
		})
	}));
}
function A_(e, t) {
	return {
		start: e.start + t,
		end: e.end + t
	};
}
function j_(e, t) {
	if (!Number.isFinite(t) || t < 0) throw RangeError("Paragraph continuation source range must be finite and non-negative");
	let n = e[0];
	if (!n) return e;
	let r = t - n.range.start;
	return r === 0 ? e : e.map((e) => ({
		...e,
		range: A_(e.range, r),
		placements: e.placements.map((e) => {
			let t = A_(e.range, r);
			return e.kind === "text" ? {
				...e,
				range: t,
				clusters: e.clusters.map((e) => ({
					...e,
					range: A_(e.range, r)
				})),
				paintOps: e.paintOps.map((e) => ({
					...e,
					range: A_(e.range, r)
				}))
			} : {
				...e,
				range: t
			};
		})
	}));
}
function M_(e, t, n, r, i) {
	let a = e.contentEndYPt - e.contentStartYPt;
	return Qg({
		paragraphXPt: n,
		availableWidthPt: r,
		alignment: t.alignment,
		baseRtl: i.baseRtl,
		isFirstLine: !0,
		isLastLine: !0,
		stretchLastLine: i.stretchLastLine,
		line: {
			range: {
				start: 0,
				end: 0
			},
			topPt: e.contentStartYPt,
			baselinePt: e.contentEndYPt - e.lastLineBelowBaselinePt,
			advancePt: a,
			xOffsetPt: 0,
			availableWidthPt: r,
			endsWithBreak: !1,
			segments: []
		}
	});
}
function N_(e, t) {
	let n = t.anchorFrames, r = e.anchorXRelativeFrom ?? (e.anchorXFromMargin ? "margin" : "page"), i = e.anchorYRelativeFrom ?? (e.anchorYFromPara ? "paragraph" : "page"), a = n?.page, o = n?.margin, s = a && o ? {
		xPt: a.xPt,
		yPt: a.yPt,
		widthPt: Math.max(0, o.xPt - a.xPt),
		heightPt: a.heightPt
	} : null, c = a && o ? {
		xPt: o.xPt + o.widthPt,
		yPt: a.yPt,
		widthPt: Math.max(0, a.xPt + a.widthPt - o.xPt - o.widthPt),
		heightPt: a.heightPt
	} : null, l = a && o ? {
		xPt: a.xPt,
		yPt: a.yPt,
		widthPt: a.widthPt,
		heightPt: Math.max(0, o.yPt - a.yPt)
	} : null, u = a && o ? {
		xPt: a.xPt,
		yPt: o.yPt + o.heightPt,
		widthPt: a.widthPt,
		heightPt: Math.max(0, a.yPt + a.heightPt - o.yPt - o.heightPt)
	} : null, d = n?.pageParity === "even", f = r === "page" ? a : r === "column" || r === "character" ? n?.column : r === "leftMargin" ? s : r === "rightMargin" ? c : r === "insideMargin" ? d ? c : s : r === "outsideMargin" ? d ? s : c : o, p = i === "paragraph" || i === "line" || i === "character" ? {
		xPt: t.placement.paragraphXPt,
		yPt: t.placement.startYPt,
		widthPt: t.placement.availableWidthPt,
		heightPt: 0
	} : i === "page" ? a : i === "column" ? n?.column : i === "topMargin" ? l : i === "bottomMargin" ? u : i === "insideMargin" ? d ? u : l : i === "outsideMargin" ? d ? l : u : o;
	if (!f || !p) return null;
	let m = e.widthPt, h = e.heightPt, g = e.anchorXPt ?? 0, _ = e.anchorYPt ?? 0, v = e.type === "shape" ? e.pctPosH : null, y = e.type === "shape" ? e.pctPosV : null;
	return {
		xPt: v == null ? e.anchorXAlign === "center" ? f.xPt + (f.widthPt - m) / 2 : e.anchorXAlign === "right" || e.anchorXAlign === "outside" && !d || e.anchorXAlign === "inside" && d ? f.xPt + f.widthPt - m : f.xPt + g : f.xPt + f.widthPt * v + g,
		yPt: y == null ? e.anchorYAlign === "center" ? p.yPt + (p.heightPt - h) / 2 : e.anchorYAlign === "bottom" || e.anchorYAlign === "outside" && !d || e.anchorYAlign === "inside" && d ? p.yPt + p.heightPt - h : p.yPt + _ : p.yPt + p.heightPt * y + _,
		widthPt: m,
		heightPt: h
	};
}
function P_(e, t) {
	return N_(e, t) ?? {
		xPt: e.anchorXPt + (e.anchorXFromMargin ? t.placement.paragraphXPt : 0),
		yPt: e.anchorYPt + (e.anchorYFromPara ? t.placement.startYPt : 0),
		widthPt: e.widthPt,
		heightPt: e.heightPt
	};
}
function F_(e, t, n, r, i = !1) {
	let a = t_(n.source, r), o = Nh(e, t, n.environment.layoutServices?.text, e.vmlTextPathInput, e.fill?.fillType === "image" ? et(a, e.fill.imagePath) : void 0), s = [o.command], c = n_(o, a);
	return {
		kind: "drawing",
		id: `${n.id}:drawing:${r}`,
		source: a,
		flowDomainId: n.flowDomainId,
		flowBounds: t,
		inkBounds: t,
		advancePt: 0,
		ordinaryFlow: !1,
		commands: s,
		...c.length === 0 ? {} : { diagnostics: c },
		...i ? {} : { anchorLayer: {
			occurrenceId: `public-shape:${n.id}:${r}`,
			behindDoc: e.behindDoc === !0,
			relativeHeight: Number.isFinite(e.zOrder) ? e.zOrder : r,
			sourceOrder: r,
			horizontalOwnership: e.anchorXRelativeFrom === "character" || e.anchorXRelativeFrom === "column" ? "host" : "page",
			verticalOwnership: e.anchorYRelativeFrom === "paragraph" || e.anchorYRelativeFrom === "line" || e.anchorYRelativeFrom === "character" || !e.anchorYRelativeFrom && e.anchorYFromPara ? "host" : "page"
		} }
	};
}
function I_(e, t, n) {
	if (!e.anchor || e.anchorAcquisitionInput) return null;
	let r = N_(e, t);
	if (!r) return null;
	let i = e.anchorYRelativeFrom ?? (e.anchorYFromPara ? "paragraph" : "page"), a = t_(t.source, n);
	return {
		kind: "drawing",
		id: `${t.id}:public-anchor-drawing:${n}`,
		source: a,
		flowDomainId: t.flowDomainId,
		flowBounds: r,
		inkBounds: r,
		advancePt: 0,
		ordinaryFlow: !1,
		commands: [{
			kind: "resource",
			resourceKind: e.type,
			resourceKey: e.type === "image" ? et(a, e.imagePath) : r_(a),
			rect: r,
			...t.environment.verticalPageFrame ? { orientation: "upright-physical" } : {}
		}],
		anchorLayer: {
			occurrenceId: `public-anchor:${t.id}:${n}`,
			behindDoc: !1,
			relativeHeight: n,
			sourceOrder: n,
			horizontalOwnership: "page",
			verticalOwnership: i === "paragraph" ? "host" : "page"
		}
	};
}
function L_(e) {
	return (e.type === "image" || e.type === "chart" || e.type === "shape" || e.type === "unavailableDrawing") && e.anchorAcquisitionInput !== void 0;
}
function R_(e) {
	return [
		{
			xPt: e.xPt,
			yPt: e.yPt
		},
		{
			xPt: e.xPt + e.widthPt,
			yPt: e.yPt
		},
		{
			xPt: e.xPt + e.widthPt,
			yPt: e.yPt + e.heightPt
		},
		{
			xPt: e.xPt,
			yPt: e.yPt + e.heightPt
		}
	];
}
function z_(e, t, n) {
	let r = t.xPt - e.xPt, i = t.yPt - e.yPt, a = e.xPt + e.widthPt - t.xPt - t.widthPt, o = e.yPt + e.heightPt - t.yPt - t.heightPt;
	return {
		xPt: n.xPt - r,
		yPt: n.yPt - i,
		widthPt: Math.max(0, n.widthPt + r + a),
		heightPt: Math.max(0, n.heightPt + i + o)
	};
}
function B_(e, t) {
	return {
		a: t.a,
		b: t.b,
		c: t.c,
		d: t.d,
		e: e.xPt + e.widthPt / 2,
		f: e.yPt + e.heightPt / 2
	};
}
function V_(e, t) {
	let n = [
		qd(t, e),
		qd(t, {
			xPt: e.xPt + e.widthPt,
			yPt: e.yPt
		}),
		qd(t, {
			xPt: e.xPt,
			yPt: e.yPt + e.heightPt
		}),
		qd(t, {
			xPt: e.xPt + e.widthPt,
			yPt: e.yPt + e.heightPt
		})
	];
	if (n.some((e) => e === null)) throw Error("Upright drawing transform must be invertible");
	let r = n, i = Math.min(...r.map((e) => e.xPt)), a = Math.min(...r.map((e) => e.yPt));
	return {
		xPt: i,
		yPt: a,
		widthPt: Math.max(...r.map((e) => e.xPt)) - i,
		heightPt: Math.max(...r.map((e) => e.yPt)) - a
	};
}
function H_(e, t) {
	return wi(t, e);
}
function U_(e, t) {
	let n = (e) => {
		let n = Ti(t, {
			top: e.topPt,
			right: e.rightPt,
			bottom: e.bottomPt,
			left: e.leftPt
		});
		return {
			topPt: n.top,
			rightPt: n.right,
			bottomPt: n.bottom,
			leftPt: n.left
		};
	};
	return {
		...e,
		axes: {
			horizontal: e.axes.vertical,
			vertical: e.axes.horizontal
		},
		geometry: {
			...e.geometry,
			objectFrame: wi(t, e.geometry.objectFrame),
			inkBounds: wi(t, e.geometry.inkBounds),
			wrapBounds: e.geometry.wrapBounds ? wi(t, e.geometry.wrapBounds) : null,
			size: {
				horizontal: e.geometry.size.vertical,
				vertical: e.geometry.size.horizontal
			},
			parentEffectExtent: n(e.geometry.parentEffectExtent),
			wrap: {
				...e.geometry.wrap,
				distances: n(e.geometry.wrap.distances),
				distanceSources: Ti(t, e.geometry.wrap.distanceSources),
				effectExtent: n(e.geometry.wrap.effectExtent),
				...e.geometry.wrap.polygon ? { polygon: {
					...e.geometry.wrap.polygon,
					points: e.geometry.wrap.polygon.points.map((e) => Ci(t, e))
				} } : {}
			}
		}
	};
}
function W_(e, t) {
	let n = e.geometry.objectFrame;
	if (n.xPt === t.xPt && n.yPt === t.yPt && n.widthPt === t.widthPt && n.heightPt === t.heightPt) return e;
	let r = n.widthPt === 0 ? 1 : t.widthPt / n.widthPt, i = n.heightPt === 0 ? 1 : t.heightPt / n.heightPt, a = e.geometry.wrap.polygon;
	return {
		...e,
		geometry: {
			...e.geometry,
			objectFrame: t,
			inkBounds: z_(e.geometry.inkBounds, n, t),
			wrapBounds: e.geometry.wrapBounds ? z_(e.geometry.wrapBounds, n, t) : null,
			wrap: {
				...e.geometry.wrap,
				polygon: a ? {
					...a,
					points: a.points.map((e) => ({
						xPt: t.xPt + (e.xPt - n.xPt) * r,
						yPt: t.yPt + (e.yPt - n.yPt) * i
					}))
				} : null
			}
		}
	};
}
function G_(e, t, n) {
	let r = e.group?.resolvedChildFrame;
	if (!r) return t;
	let i = e.extent.widthPt, a = e.extent.heightPt;
	if (e.extent.widthStatus !== "valid" || e.extent.heightStatus !== "valid" || i === null || a === null || i <= 0 || a <= 0) throw Error("resolved grouped anchor requires its authored wp:extent");
	let o = n === void 0 ? t : wi(n.logicalToPhysical, t), s = o.widthPt / i, c = o.heightPt / a, l = {
		xPt: o.xPt + r.offsetXPt * s,
		yPt: o.yPt + r.offsetYPt * c,
		widthPt: r.widthPt * s,
		heightPt: r.heightPt * c
	};
	return n === void 0 ? l : wi(n.physicalToLogical, l);
}
function K_(e, t, n = !1) {
	let r = e.axes[t];
	return r.status !== "resolved" || n || r.referenceFrame === "paragraph" || r.referenceFrame === "line" || r.referenceFrame === "character" ? "host" : "page";
}
function q_(e, t, n, r, i, a, o, s, c, l) {
	let u = -1, d;
	for (let t = 0; t < n.length; t += 1) {
		let r = n[t]?.placements.find((t) => t.kind === "anchor-host" && t.anchorOccurrenceId === e);
		if (r?.kind === "anchor-host") {
			u = t, d = r;
			break;
		}
	}
	if (!d || u < 0) return null;
	let f = [...t].sort((e, t) => (e.run.anchorAcquisitionInput?.group?.sourceIndex ?? 0) - (t.run.anchorAcquisitionInput?.group?.sourceIndex ?? 0) || e.runIndex - t.runIndex), p = f[0];
	if (!p?.run.anchorAcquisitionInput) return null;
	let m = n[u], h = i.anchorFrames, g = p.run.anchorAcquisitionInput.behavior, _ = g.layoutInCellStatus === "valid" && g.layoutInCell === !0 && i.anchorCellBounds !== void 0 ? i.anchorCellBounds : null, v = yg({
		acquisition: p.run.anchorAcquisitionInput,
		frames: {
			page: h?.page ? _ ? {
				...h.page,
				..._
			} : h.page : null,
			margin: h?.margin ? _ ? {
				...h.margin,
				..._
			} : h.margin : null,
			column: h?.column ? _ ? {
				...h.column,
				..._
			} : h.column : null,
			paragraph: {
				xPt: i.placement.paragraphXPt,
				yPt: i.placement.startYPt,
				widthPt: i.placement.availableWidthPt,
				heightPt: Math.max(0, a)
			},
			line: m.bounds,
			character: d.bounds,
			pageParity: h?.pageParity ?? null
		}
	});
	if (v.status !== "resolved") return {
		result: v,
		textBoxes: [],
		hostLineIndex: u,
		hostRange: d.range
	};
	let y = i.environment.verticalPageFrame && h?.page ? bi(h.page, i.environment.pageWritingMode) : void 0, b = y === void 0 ? void 0 : Ei(i.environment.pageWritingMode, y), x = y === void 0 ? v : U_(v, b.physicalToLogical);
	if (g.behindDocStatus !== "valid" || g.relativeHeightStatus !== "valid" || g.behindDoc === null || g.relativeHeight === null) throw Error("resolved anchor frame must retain required CT_Anchor behavior");
	let S = x.geometry.objectFrame, C = y === void 0 ? void 0 : B_(S, b.physicalToLogical), w = C ? {
		...i.environment,
		verticalCJK: !1,
		verticalPageFrame: !1
	} : i.environment, T = [], E = [], D = [], O = [], k = /* @__PURE__ */ new Map(), A = S;
	if (p.run.type === "shape" && p.run.anchorAcquisitionInput.group === null) {
		let t = t_(i.source, p.runIndex), n = C ? V_(S, C) : S, r = nv(p.run, n, {
			id: `${i.id}:anchor-textbox:${e}:${p.runIndex}`,
			source: t,
			flowDomainId: i.flowDomainId,
			context: i.context,
			measurer: i.measurer,
			environment: w,
			input: p.run.textBoxInput,
			acquireCompleteStory: i.acquireCompleteStory,
			...C ? { coordinateSpace: "upright-physical" } : {}
		});
		r && (k.set(p.runIndex, r), A = C ? H_(r.flowBounds, C) : r.flowBounds);
	}
	let j = W_(x, A);
	if (g.allowOverlapStatus !== "valid" || g.allowOverlap === null || g.layoutInCellStatus !== "valid" || g.layoutInCell === null) throw Error("resolved anchor frame must retain overlap and cell behavior");
	let M = j.geometry.wrapBounds, N = !g.allowOverlap, P = g.allowOverlap && i.ordinaryFlow && M !== null;
	if (N || P) {
		let t = K_(j, "vertical", g.layoutInCell && i.anchorCellBounds !== void 0), n = l.filter((e) => !$h(t, g.relativeHeight, e.relativeHeight)), r = (N ? [...c, ...n].filter((t) => t.occurrenceId !== e).map((e) => ({
			occurrenceId: e.occurrenceId,
			bounds: e.bounds
		})) : o.filter((t) => t.anchorOccurrenceId !== e).map((e) => ({
			occurrenceId: e.anchorOccurrenceId ?? e.id,
			bounds: e.bounds
		}))).map((e) => ({
			occurrenceId: e.occurrenceId,
			kind: "drawingml",
			paragraphId: 0,
			bounds: e.bounds,
			exclusionBounds: e.bounds
		})), a = i.anchorFrames?.page, s = N && g.layoutInCell && i.anchorCellBounds ? i.anchorCellBounds.xPt + i.anchorCellBounds.widthPt : a ? a.xPt + a.widthPt : Infinity, u = Qa({
			moving: {
				occurrenceId: e,
				kind: "drawingml",
				paragraphId: 1,
				bounds: A,
				exclusionBounds: M ?? A
			},
			blockers: r,
			avoidance: N ? { kind: "drawingml-normative" } : {
				kind: "word-different-paragraph",
				paragraphId: 1
			},
			rightBoundaryPt: s
		}).displacement;
		if (u.xPt !== 0 || u.yPt !== 0) {
			if (A = X(A, u), C) C = {
				...C,
				e: C.e + u.xPt,
				f: C.f + u.yPt
			};
			else {
				let e = k.get(p.runIndex);
				e && k.set(p.runIndex, rm(e, u));
			}
			j = W_(x, A);
		}
	}
	for (let { run: t, runIndex: n } of f) {
		let r = t_(i.source, n), a = t.anchorAcquisitionInput, o = G_(a, A, b), s = C ? V_(o, C) : o;
		if (t.type === "image") T.push({
			kind: "resource",
			resourceKind: "image",
			resourceKey: et(r, t.imagePath),
			rect: s
		});
		else if (t.type === "chart") T.push({
			kind: "resource",
			resourceKind: "chart",
			resourceKey: r_(r),
			rect: s
		});
		else if (t.type === "unavailableDrawing") T.push({ kind: "noop" }), E.push(a_(t.resourceKind, r));
		else {
			let o = a.group?.resolvedChildFrame, c = Nh(o ? {
				...t,
				rotation: o.rotationDeg,
				flipH: o.flipH,
				flipV: o.flipV
			} : t, s, i.environment.layoutServices?.text, t.vmlTextPathInput, t.fill?.fillType === "image" ? et(r, t.fill.imagePath) : void 0);
			T.push(c.command), E.push(...n_(c, r));
			let l = `${i.id}:anchor-textbox:${e}:${n}`, u = k.get(n) ?? nv(t, s, {
				id: l,
				source: r,
				flowDomainId: i.flowDomainId,
				context: i.context,
				measurer: i.measurer,
				environment: w,
				input: t.textBoxInput,
				acquireCompleteStory: i.acquireCompleteStory,
				...C ? { coordinateSpace: "upright-physical" } : {}
			});
			u && (D.push(u), O.push(l));
		}
	}
	let ee = {
		kind: "drawing",
		id: `${i.id}:anchor-drawing:${e}`,
		source: t_(i.source, p.runIndex),
		flowDomainId: i.flowDomainId,
		flowBounds: A,
		inkBounds: j.geometry.inkBounds,
		advancePt: 0,
		ordinaryFlow: !1,
		...C ? {
			orientation: "upright-physical",
			transform: C
		} : {},
		commands: T,
		...E.length === 0 ? {} : { diagnostics: Object.freeze(E) },
		anchorLayer: {
			occurrenceId: e,
			behindDoc: g.behindDoc,
			relativeHeight: g.relativeHeight,
			sourceOrder: p.runIndex,
			horizontalOwnership: K_(j, "horizontal", g.layoutInCell && i.anchorCellBounds !== void 0),
			verticalOwnership: K_(j, "vertical", g.layoutInCell && i.anchorCellBounds !== void 0),
			...g.layoutInCell && Jh(g.allowOverlap, j.geometry.wrap.kind) && i.anchorCellBounds ? { cellContainment: !0 } : {}
		},
		...O.length ? { textBoxIds: O } : {}
	}, F = j.geometry.wrapBounds, I = F && j.geometry.wrap.kind !== "none" ? {
		id: `${i.id}:anchor-exclusion:${e}`,
		wrap: j.geometry.wrap.kind,
		...j.geometry.wrap.side ? { wrapSide: j.geometry.wrap.side } : {},
		bounds: F,
		polygon: j.geometry.wrap.polygon?.points ?? R_(F),
		anchorOccurrenceId: e,
		verticalOwnership: K_(j, "vertical", g.layoutInCell && i.anchorCellBounds !== void 0)
	} : void 0, te = {
		occurrenceId: e,
		bounds: A,
		horizontalOwnership: K_(j, "horizontal", g.layoutInCell && i.anchorCellBounds !== void 0),
		verticalOwnership: K_(j, "vertical", g.layoutInCell && i.anchorCellBounds !== void 0),
		...g.relativeHeight === null ? {} : { relativeHeight: g.relativeHeight }
	};
	return {
		result: j,
		drawing: ee,
		exclusion: I,
		collision: te,
		textBoxes: D,
		...g.layoutInCell && Jh(g.allowOverlap, j.geometry.wrap.kind) && i.anchorCellBounds ? { cellContainmentBounds: A } : {},
		hostLineIndex: u,
		hostRange: d.range
	};
}
function J_(e, t) {
	let n = t.bidi === !0, r = t.runs.some((e) => e.type === "text" && !!e.ruby), i = t.runs.some((e) => e.type === "text" && ji.test(e.text));
	return {
		...e,
		rightIndentGrid: {
			...e.rightIndentGrid,
			paragraphAllowsAdjustment: t.adjustRightInd !== !1
		},
		physicalIndentLeftPt: n ? t.indentRight : t.indentLeft,
		physicalIndentRightPt: n ? t.indentLeft : t.indentRight,
		firstIndentPt: t.indentFirst,
		lineSpacing: t.lineSpacing,
		spaceBeforePt: t.spaceBefore,
		spaceAfterPt: t.spaceAfter,
		baseRtl: n,
		isJustified: nl(t.alignment),
		stretchLastLine: rl(t.alignment),
		tabStops: uu(t),
		hasRuby: r,
		hasEastAsianText: i
	};
}
function Y_(e) {
	return e === "vert" || e === "vert270" || e === "eaVert" || e === "mongolianVert" ? e : void 0;
}
function X_(e, t, n) {
	let r = Math.max(0, t - n);
	return e === "b" ? r : e === "ctr" ? r / 2 : 0;
}
function Z_(e, t, n, r) {
	let i = t === "eaVert" || t === "mongolianVert", a = e.lines.map((e) => {
		let a = t === "mongolianVert" ? e.placements.reduce((t, n) => n.kind === "text" && n.ruby ? Math.max(t, e.baselinePt - Math.min(e.baselinePt, ...n.ruby.paintOps.map((e) => e.origin.yPt))) : t, 0) : 0, o = (t === "mongolianVert" ? 2 * n.yPt + n.heightPt - e.baselinePt + r.bottomPt - r.leftPt + a : e.baselinePt) - e.baselinePt, s = e.bounds.yPt + o, c = e.placements.map((e) => {
			if (e.kind !== "text") return "bounds" in e && e.bounds ? {
				...e,
				bounds: {
					...e.bounds,
					yPt: e.bounds.yPt + o
				}
			} : e;
			let t = i ? e.clusters.map((t) => {
				let n = e.text.slice(t.range.start - e.range.start, t.range.end - e.range.start), r = e.paintOps.find((e) => e.range.start <= t.range.start && e.range.end >= t.range.end) ?? e.paintOps[0], i = ji.test(n);
				return {
					...r,
					text: n,
					range: t.range,
					offset: i ? {
						xPt: t.offset.xPt + t.advancePt / 2,
						yPt: t.offset.yPt
					} : t.offset,
					glyphOrientation: i ? "upright" : "sideways"
				};
			}) : e.paintOps;
			return Cv({
				...e,
				paintOps: t
			}, o);
		});
		return {
			...e,
			bounds: {
				...e.bounds,
				yPt: s
			},
			baselinePt: e.baselinePt + o,
			placements: c
		};
	});
	return {
		...e,
		lines: a
	};
}
function Q_(e, t) {
	let n = (e, n) => e.kind === "paragraph" ? Z_(e, t === "mongolianVert" ? "eaVert" : t, n, {
		topPt: 0,
		rightPt: 0,
		bottomPt: 0,
		leftPt: 0
	}) : Q_(e, t), r = {
		...e,
		rows: e.rows.map((e) => ({
			...e,
			cells: e.cells.map((e) => ({
				...e,
				blocks: e.blocks.map((t) => ({
					...t,
					layout: n(t.layout, e.contentBounds)
				}))
			}))
		}))
	}, i = /* @__PURE__ */ new Map(), a = (e) => {
		let n = i.get(e);
		if (n) return n;
		let r = {
			...e,
			child: Q_(e.child, t)
		};
		return i.set(e, r), r;
	}, o = e.floatingTables?.map(a), s = e.resolvedFloatingTables?.map((e) => {
		let t = a(e.source);
		return {
			...e,
			source: t,
			child: t.child
		};
	});
	return {
		...r,
		...o ? { floatingTables: o } : {},
		...s ? { resolvedFloatingTables: s } : {}
	};
}
function $_(e, t, n, r) {
	return {
		...e,
		blocks: e.blocks.map((e) => {
			if (e.kind === "paragraph") return Z_(e, t, n, r);
			if (e.kind === "table") return Q_(e, t);
			throw Error(`Text-box story contains unsupported retained node: ${e.kind}`);
		})
	};
}
function ev(e, t, n = !0) {
	if (t === 0) return e;
	let r = {
		xPt: 0,
		yPt: t
	};
	return {
		...e,
		flowBounds: X(e.flowBounds, r),
		inkBounds: X(e.inkBounds, r),
		...e.clipBounds ? { clipBounds: n ? X(e.clipBounds, r) : e.clipBounds } : {},
		blocks: e.blocks.map((e) => {
			if (e.kind === "paragraph") return tm(e, r);
			if (e.kind === "table") return tv(e, r);
			throw Error(`Text-box story contains unsupported retained node: ${e.kind}`);
		})
	};
}
function tv(e, t) {
	let n = om(e, t), r = /* @__PURE__ */ new Map(), i = (e) => {
		let n = r.get(e);
		if (n) return n;
		let i = {
			...e,
			anchorBounds: X(e.anchorBounds, t),
			...e.columnBounds ? { columnBounds: X(e.columnBounds, t) } : {},
			child: tv(e.child, t)
		};
		return r.set(e, i), i;
	}, a = e.floatingTables?.map(i), o = e.resolvedFloatingTables?.map((e) => {
		let n = i(e.source);
		return {
			...e,
			xPt: e.xPt + t.xPt,
			yPt: e.yPt + t.yPt,
			bounds: X(e.bounds, t),
			exclusionBounds: X(e.exclusionBounds, t),
			source: n,
			child: n.child
		};
	});
	return {
		...n,
		...a ? { floatingTables: a } : {},
		...o ? { resolvedFloatingTables: o } : {}
	};
}
function nv(e, t, n) {
	let r = n.source, i = n.input ?? {
		kind: "compatibility",
		source: {
			story: "textbox",
			storyInstance: `${r.story}:${r.storyInstance}:${r.path.join(".")}`,
			path: []
		},
		paragraphs: Fh(e, {
			story: "textbox",
			storyInstance: `${r.story}:${r.storyInstance}:${r.path.join(".")}`,
			path: []
		})
	}, a = i.source, o = i.kind === "complete" ? i.blockCount : i.paragraphs.length;
	if (o === 0) return;
	let s = Y_(e.textVert), c = s ? {
		xPt: -t.heightPt / 2,
		yPt: -t.widthPt / 2,
		widthPt: t.heightPt,
		heightPt: t.widthPt
	} : t, l = i.kind === "compatibility" ? i.paragraphs : Object.freeze([]), u = {
		topPt: e.textInsetT ?? 0,
		rightPt: e.textInsetR ?? 0,
		bottomPt: e.textInsetB ?? 0,
		leftPt: e.textInsetL ?? 0
	}, d = {
		xPt: c.xPt + u.leftPt,
		yPt: c.yPt + u.topPt,
		widthPt: Math.max(0, c.widthPt - u.leftPt - u.rightPt),
		heightPt: Math.max(0, c.heightPt - u.topPt - u.bottomPt)
	}, f;
	if (i.kind === "complete") {
		if (!n.acquireCompleteStory) throw Error("Complete text-box content requires the shared story acquisition adapter");
		f = n.acquireCompleteStory({
			source: a,
			container: {
				id: `${n.id}:story`,
				kind: "textbox",
				bounds: d,
				capacity: "unbounded"
			},
			coordinateSpace: n.coordinateSpace ?? "section-logical"
		});
	}
	let p = c.yPt + u.topPt, m = null, h = l.map((t, r) => {
		let i = t.runs.map((t) => Pi({
			text: t.text,
			fontSizePt: t.fontSizePt,
			color: t.color?.slice(1) ?? null,
			fontFamily: t.fontFamily ?? null,
			fontFamilyEastAsia: t.fontFamilyEastAsia ?? null,
			bold: t.bold,
			italic: t.italic,
			ruby: t.ruby
		}, e.textVert)), a = Math.max(0, c.widthPt - u.leftPt - u.rightPt - t.indentLeftPt - t.indentRightPt - Math.max(0, t.indentFirstPt)), o = s ? t.image?.heightPt ?? 0 : t.image?.widthPt ?? 0, l = s ? t.image?.widthPt ?? 0 : t.image?.heightPt ?? 0, f = o > a && o > 0 ? a / o : 1, h = t.image ? [{
			type: "image",
			imagePath: t.image.imagePath,
			mimeType: t.image.mimeType,
			...t.image.svgImagePath ? { svgImagePath: t.image.svgImagePath } : {},
			widthPt: o > 0 ? o * f : a,
			heightPt: l > 0 ? l * f : a,
			anchor: !1
		}] : i, g = {
			alignment: t.alignment,
			indentLeft: t.indentLeftPt,
			indentRight: t.indentRightPt,
			indentFirst: t.indentFirstPt,
			spaceBefore: t.spacing.beforePt,
			spaceAfter: t.spacing.afterPt,
			lineSpacing: t.lineSpacing,
			numbering: t.numbering ?? null,
			numberingMarkerShapeInput: t.numberingMarkerShapeInput,
			tabStops: [...t.tabStops],
			bidi: t.bidi,
			contextualSpacing: t.contextualSpacing,
			styleId: t.styleId,
			runs: h
		}, _ = J_(n.context, g), v = bg(m, t, m?.spacing.afterPt ?? 0, t.spacing.beforePt);
		p += v;
		let y = mv(g, {
			id: `${n.id}:paragraph:${r}`,
			source: t.source,
			flowDomainId: `${n.flowDomainId}:textbox`,
			ordinaryFlow: !0,
			context: _,
			placement: {
				startYPt: p,
				paragraphXPt: c.xPt + u.leftPt,
				availableWidthPt: Math.max(0, c.widthPt - u.leftPt - u.rightPt),
				maximumYPt: c.yPt + c.heightPt - u.bottomPt,
				suppressSpaceBefore: !0
			},
			measurer: n.measurer,
			environment: n.environment,
			exclusions: []
		});
		return p += y.advancePt - y.spacing.afterPt, m = t, s ? Z_(y, s, d, u) : y;
	}), g = f ? Math.max(0, f.advancePt + u.topPt + u.bottomPt) : Math.max(0, p - c.yPt + u.bottomPt), _ = e.textAutofit === "sp" && o > 0 && (!s || l.every((e) => e.image === void 0)) && Number.isFinite(g) && g > 0 ? s ? {
		...t,
		widthPt: g
	} : {
		...t,
		heightPt: g
	} : t, v = s ? {
		xPt: -_.heightPt / 2,
		yPt: -_.widthPt / 2,
		widthPt: _.heightPt,
		heightPt: _.widthPt
	} : _;
	if (s && _.widthPt !== t.widthPt && s !== "mongolianVert") {
		let e = v.yPt - c.yPt;
		h = h.map((t) => Tv(t, e));
	}
	let y = {
		xPt: v.xPt + u.leftPt,
		yPt: v.yPt + u.topPt,
		widthPt: Math.max(0, v.widthPt - u.leftPt - u.rightPt),
		heightPt: Math.max(0, v.heightPt - u.topPt - u.bottomPt)
	}, b = rd(h.map((e) => e.flowBounds)) ?? {
		xPt: y.xPt,
		yPt: y.yPt,
		widthPt: 0,
		heightPt: 0
	}, x = rd(h.map((e) => e.inkBounds)) ?? {
		xPt: y.xPt,
		yPt: y.yPt,
		widthPt: 0,
		heightPt: 0
	}, S = f ?? {
		story: "textbox",
		flowBounds: b,
		inkBounds: x,
		clipBounds: y,
		blocks: h,
		advancePt: Math.max(0, g - u.topPt - u.bottomPt),
		diagnostics: []
	}, C = Xh(S);
	return f && s && (S = $_(ev(S, v.yPt - c.yPt), s, y, u)), S = ev(S, X_(e.textAnchor, y.heightPt, C), !1), Nn({
		kind: "textbox",
		id: n.id,
		source: l[0]?.source ?? a,
		flowDomainId: `${n.flowDomainId}:textbox`,
		flowBounds: _,
		inkBounds: _,
		...e.defaultTextColor ? { defaultTextColor: `#${e.defaultTextColor.replace(/^#/u, "")}` } : {},
		...e.textAutofit === "none" ? { clipBounds: y } : {},
		advancePt: 0,
		ordinaryFlow: !1,
		story: S,
		transform: s ? {
			a: 0,
			b: s === "vert270" ? -1 : 1,
			c: s === "vert270" ? 1 : -1,
			d: 0,
			e: _.xPt + _.widthPt / 2,
			f: _.yPt + _.heightPt / 2
		} : {
			a: 1,
			b: 0,
			c: 0,
			d: 1,
			e: 0,
			f: 0
		},
		writingMode: e.textVert === "vert270" ? "vertical-lr" : e.textVert ? "vertical-rl" : "horizontal-tb",
		insets: u,
		contentBounds: v,
		...s ? { verticalMode: s } : {}
	});
}
var rv = class extends V {
	reason;
	states;
	occurrenceCapacity;
	constructor(e, t, n) {
		super("NON_CONVERGENCE", `parser-owned paragraph anchor reflow did not converge (${e}; ${n} occurrences; ${t.length} states)`), this.name = "ParagraphAnchorReflowNonConvergenceError", this.reason = e, this.states = Object.freeze([...t]), this.occurrenceCapacity = n;
	}
};
function iv(e, t) {
	if (t.length === 0) return e.placement;
	if (e.placement.wrap) throw Error("Conflicting paragraph wrap authorities: placement.wrap and effective exclusions");
	let n = e.anchorFrames?.page, r = il(t.map((e, t) => ({
		kind: "shape",
		mode: e.wrap === "topAndBottom" ? "topAndBottom" : "square",
		authoredWrap: e.wrap,
		wrapPolygon: e.polygon,
		imageKey: e.id,
		imageX: e.bounds.xPt,
		imageY: e.bounds.yPt,
		imageW: e.bounds.widthPt,
		imageH: e.bounds.heightPt,
		xLeft: e.bounds.xPt,
		xRight: e.bounds.xPt + e.bounds.widthPt,
		yTop: e.bounds.yPt,
		yBottom: e.bounds.yPt + e.bounds.heightPt,
		side: e.wrapSide ?? "bothSides",
		distLeft: 0,
		distRight: 0,
		distTop: 0,
		distBottom: 0,
		paraId: t
	})), {
		xLeftPt: n?.xPt ?? e.placement.paragraphXPt,
		xRightPt: n ? n.xPt + n.widthPt : e.placement.paragraphXPt + e.placement.availableWidthPt,
		readingDirection: e.context.baseRtl ? "rtl" : "ltr"
	});
	return {
		...e.placement,
		wrap: r
	};
}
function av(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e.exclusions) {
		let e = r.anchorOccurrenceId;
		if (!(!e || !t.has(e))) {
			if (n.has(e)) throw Error(`Paragraph anchor occurrence produced duplicate exclusions: ${e}`);
			n.set(e, r);
		}
	}
	return Object.freeze([...n.values()]);
}
function ov(e) {
	return rt("paragraph-effective-wrap-exclusions", e.map((e) => ({
		id: e.id,
		...e.anchorOccurrenceId === void 0 ? {} : { occurrenceId: e.anchorOccurrenceId },
		wrap: e.wrap,
		...e.wrapSide === void 0 ? {} : { wrapSide: e.wrapSide },
		bounds: e.bounds,
		polygon: e.polygon,
		...e.verticalOwnership === void 0 ? {} : { verticalOwnership: e.verticalOwnership }
	})));
}
function sv(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) {
		let e = n.anchorOccurrenceId;
		if (e) {
			if (t.has(e)) throw Error(`Duplicate external paragraph exclusion occurrence: ${e}`);
			t.add(e);
		}
	}
	return t;
}
function cv(e, t) {
	let n = sv(e);
	return Object.freeze([...e, ...t.filter((e) => !e.anchorOccurrenceId || !n.has(e.anchorOccurrenceId))]);
}
function lv(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let t of e) {
		if (n.has(t.occurrenceId)) throw Error(`Duplicate external anchor collision occurrence: ${t.occurrenceId}`);
		n.add(t.occurrenceId);
	}
	return Object.freeze([...e, ...t.filter((e) => !n.has(e.occurrenceId))]);
}
function uv(e, t, n, r) {
	let i = n.environment.layoutServices, a = n.environment.verticalGlyphMeasurement, o = n.anchorFrames, s = t.runs.some(L_), c = t.runs.some((e) => e.type === "shape" && e.textBoxInput?.kind === "complete"), { wrap: l, ...u } = n.placement, d = n.context, f = n.environment;
	return `paragraph-acquisition-v1:${JSON.stringify([
		n.id,
		[
			n.source.story,
			n.source.storyInstance,
			n.source.path
		],
		n.flowDomainId,
		n.ordinaryFlow,
		[
			u.startYPt,
			u.paragraphXPt,
			u.availableWidthPt,
			u.maximumYPt,
			u.suppressSpaceBefore,
			l ? e.objectIdentity(l) : null
		],
		[
			d.lineGrid.active,
			d.lineGrid.pitchPt,
			d.characterGrid.active,
			d.characterGrid.kind,
			d.characterGrid.deltaPt,
			d.rightIndentGrid.pitchPt,
			d.rightIndentGrid.paragraphAllowsAdjustment,
			d.physicalIndentLeftPt,
			d.physicalIndentRightPt,
			d.firstIndentPt,
			d.lineSpacing ? [
				d.lineSpacing.value,
				d.lineSpacing.rule,
				d.lineSpacing.explicit ?? null
			] : null,
			d.spaceBeforePt,
			d.spaceAfterPt,
			d.baseRtl,
			d.isJustified,
			d.stretchLastLine,
			d.tabStops.map((e) => [
				e.pos,
				e.alignment,
				e.leader
			]),
			d.hasRuby,
			d.hasEastAsianText,
			[
				d.kinsoku.enabled,
				[...d.kinsoku.lineStartForbidden].sort((e, t) => e - t),
				[...d.kinsoku.lineEndForbidden].sort((e, t) => e - t)
			],
			d.defaultTabPt,
			d.overflowPunct !== !1,
			d.numberingMarkerGeometry ? JSON.stringify(d.numberingMarkerGeometry) : null,
			d.mathDefJc ?? null
		],
		[e.objectIdentity(n.measurer.context), e.objectIdentity(n.measurer.fontFamilyClasses)],
		[
			f.pageIndex,
			f.totalPages,
			f.displayPageNumber ?? null,
			f.pageNumberFormat ?? null,
			f.currentDateMs ?? null,
			f.noteNumbers ? [...f.noteNumbers.entries()].sort(([e], [t]) => e.localeCompare(t)) : null,
			f.noteReferenceNumber ?? null,
			f.pageWritingMode,
			f.verticalCJK ?? null,
			f.verticalPageFrame ?? null,
			f.documentHasEastAsianText,
			f.useFeLayout ?? null,
			f.balanceSingleByteDoubleByteWidth ?? null,
			f.characterSpacingControl ?? null,
			f.resolvedLocalFonts ? e.objectIdentity(f.resolvedLocalFonts) : null,
			i?.text.fingerprint ?? null,
			i?.images.fingerprint ?? null,
			i?.math.fingerprint ?? null,
			i?.verticalGlyphFingerprint ?? null,
			a?.fingerprint ?? null
		],
		JSON.stringify(n.exclusions),
		s ? JSON.stringify(n.anchorCollisions ?? []) : null,
		r ? JSON.stringify(r) : null,
		n.paragraphBorderEdges ? [n.paragraphBorderEdges.top, n.paragraphBorderEdges.bottom] : null,
		n.trailingExtentPt ?? null,
		n.containerShading ?? null,
		n.continuesFromPrevious ?? null,
		n.sourceRangeStart ?? null,
		o ? [
			o.page ? [
				o.page.xPt,
				o.page.yPt,
				o.page.widthPt,
				o.page.heightPt
			] : null,
			o.margin ? [
				o.margin.xPt,
				o.margin.yPt,
				o.margin.widthPt,
				o.margin.heightPt
			] : null,
			o.column ? [
				o.column.xPt,
				o.column.yPt,
				o.column.widthPt,
				o.column.heightPt
			] : null,
			o.pageParity
		] : null,
		s ? JSON.stringify(n.anchorCellBounds ?? null) : null,
		c && n.acquireCompleteStory ? e.objectIdentity(n.acquireCompleteStory) : null
	])}`;
}
function dv(e) {
	let t = e.src ? Object.freeze({ ...e.src }) : void 0;
	return "text" in e ? Object.freeze({
		...e,
		...t ? { src: t } : {},
		...e.shapedClusters ? { shapedClusters: Object.freeze(e.shapedClusters.map((e) => Object.freeze({
			...e,
			range: Object.freeze({ ...e.range })
		}))) } : {},
		...e.selectedFaceInkBounds ? { selectedFaceInkBounds: Object.freeze({ ...e.selectedFaceInkBounds }) } : {},
		...e.selectedFaceFontBox ? { selectedFaceFontBox: Object.freeze({ ...e.selectedFaceFontBox }) } : {},
		...e.ruby ? { ruby: Object.freeze({ ...e.ruby }) } : {},
		...e.border ? { border: Object.freeze({ ...e.border }) } : {},
		...e.revision ? { revision: Object.freeze({ ...e.revision }) } : {},
		...e.hyperlink ? { hyperlink: Object.freeze({ ...e.hyperlink }) } : {},
		...e.seaBreaks ? { seaBreaks: Object.freeze([...e.seaBreaks]) } : {}
	}) : "imagePath" in e ? Object.freeze({
		...e,
		...t ? { src: t } : {},
		...e.srcRect ? { srcRect: Object.freeze({ ...e.srcRect }) } : {},
		...e.duotone ? { duotone: Object.freeze({ ...e.duotone }) } : {}
	}) : "isTab" in e ? Object.freeze({
		...e,
		...t ? { src: t } : {},
		...e.ptab ? { ptab: Object.freeze({ ...e.ptab }) } : {}
	}) : Object.freeze({
		...e,
		...t ? { src: t } : {}
	});
}
function fv(e) {
	return Object.freeze({
		...e,
		layout: Object.freeze({
			...e.layout,
			segments: Object.freeze(e.layout.segments.map(dv)),
			...e.layout.consumedEnd ? { consumedEnd: Object.freeze({ ...e.layout.consumedEnd }) } : {}
		})
	});
}
function pv(e, t, n) {
	let r = t.environment.layoutServices ? Ir(t.environment.layoutServices) : void 0, i = r ? uv(r, e, t, n) : void 0, a = i === void 0 ? void 0 : r.get(e, i);
	if (a) return a;
	r?.noteMiss();
	let o = sv(t.exclusions), s = new Set(e.runs.flatMap((e) => L_(e) ? [e.anchorAcquisitionInput.occurrenceId] : []));
	for (let e of o) s.delete(e);
	let c = s.size, l = Object.freeze([]), u = cv(t.exclusions, l);
	try {
		let a = zo({
			seedState: ov(u),
			step: (r) => {
				let i = cv(t.exclusions, r?.ownedExclusions ?? l), a = cl(e, t.context, iv(t, i), t.measurer, {
					...t.environment,
					paragraphMarkShapeInput: e.paragraphMarkShapeInput
				}, n), o = yv(e, t, a), c = av(o, s), u = ov(cv(t.exclusions, c));
				if (ov(o.exclusions) !== u) throw Error("Paragraph retained exclusions differ from the measured exclusion authority");
				return Object.freeze({
					measured: a,
					layout: o,
					ownedExclusions: c,
					state: u
				});
			},
			stateOf: (e) => e.state,
			limit: 16
		}).value, o = Object.freeze({
			...a.measured,
			lines: Object.freeze(a.measured.lines.map(fv)),
			placement: Object.freeze({ ...a.measured.placement })
		}), c = Object.freeze({
			measured: o,
			layout: a.layout
		});
		return i !== void 0 && r.set(e, i, c), c;
	} catch (e) {
		throw e instanceof Ro ? new rv(e.reason, e.states, c) : e;
	}
}
function mv(e, t) {
	return pv(e, t).layout;
}
function hv(e) {
	let t = 0;
	for (let n of e.members) for (let e of n.fragment.lines) for (let n of e.placements) n.kind === "text" && (t = Math.max(t, -(n.positionPt ?? 0)));
	return t;
}
var gv = /* @__PURE__ */ new WeakMap();
function _v(e) {
	return e === void 0 ? null : e instanceof Date ? { date: e.toISOString() } : e instanceof Set ? { set: [...e].map(_v).sort((e, t) => JSON.stringify(e).localeCompare(JSON.stringify(t))) } : e instanceof Map ? { map: [...e.entries()].map(([e, t]) => [_v(e), _v(t)]).sort((e, t) => JSON.stringify(e[0]).localeCompare(JSON.stringify(t[0]))) } : Array.isArray(e) ? e.map(_v) : e && typeof e == "object" ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, _v(t)])) : e;
}
function vv(e, t) {
	if (t.contexts.length !== e.members.length || t.inputs.length !== e.members.length || t.borderEdges.length !== e.members.length || t.borderExtentsPt.length !== e.members.length) throw Error("Frame acquisition metadata must align with every group member");
	if (!Number.isFinite(t.maximumWidthPt) || t.maximumWidthPt < 0) throw RangeError("Frame maximumWidthPt must be finite and non-negative");
	let n = gv.get(t.acquisitionSession);
	n || (n = /* @__PURE__ */ new Map(), gv.set(t.acquisitionSession, n));
	let r = rt("w:frame-acquisition", [
		e.id,
		t.placementSignature,
		t.maximumWidthPt,
		t.environment.pageIndex,
		t.environment.totalPages,
		t.environment.displayPageNumber ?? null,
		t.environment.pageNumberFormat ?? null,
		t.environment.currentDateMs ?? null,
		t.environment.documentHasEastAsianText,
		t.environment.layoutServices?.text.fingerprint ?? null,
		t.environment.layoutServices?.images.fingerprint ?? null,
		t.environment.layoutServices?.math.fingerprint ?? null,
		t.environment.layoutServices?.verticalGlyphFingerprint ?? null,
		_v(t.contexts),
		_v(t.inputs),
		_v(t.borderEdges),
		_v(t.borderExtentsPt),
		t.containerShading ?? null,
		_v(t.anchorFrames)
	]), i = n.get(r);
	if (i) return i;
	let a = e.framePr, o = a.w == null ? Math.max(0, ...e.members.map((e, n) => Wl(e, t.contexts[n], t.maximumWidthPt, t.measurer, t.environment, m_(t.inputs[n], t.contexts[n], t)))) : Math.max(0, a.w), s = Math.max(1, o), c = (() => {
		let n = Mg(`body-frame:${e.id}`), r = 0, i = null, a = 0, o = 0, c = [];
		return e.members.forEach((l, u) => {
			let d = t.contexts[u], f = Math.max(bg(i, l, a, d.spaceBeforePt), o), p = {
				startYPt: r + f,
				paragraphXPt: 0,
				availableWidthPt: s,
				maximumYPt: Infinity,
				suppressSpaceBefore: !0
			}, m = t.borderExtentsPt[u] ?? 0, h = {
				story: "body",
				storyInstance: "body",
				path: [e.sourceIndices[u]]
			}, { measured: g, layout: _ } = pv(t.inputs[u], {
				id: `body-frame:${e.id}:${u}`,
				source: h,
				flowDomainId: `body-frame:${e.id}`,
				ordinaryFlow: !1,
				context: d,
				placement: p,
				measurer: t.measurer,
				environment: {
					...t.environment,
					positionExtendsLineBox: Pm(e.framePr.dropCap)
				},
				exclusions: n.exclusions,
				anchorCollisions: n.collisions,
				containerShading: t.containerShading,
				paragraphBorderEdges: t.borderEdges[u],
				trailingExtentPt: Math.max(d.spaceAfterPt, m),
				anchorFrames: t.anchorFrames
			});
			n = Fg(n, _), c.push({
				paragraph: l,
				fragment: _,
				source: h
			}), r = g.contentEndYPt, i = l, a = g.requestedSpaceAfterPt, o = m;
		}), {
			heightPt: Math.max(0, r + Math.max(a, o)),
			members: c
		};
	})(), l = t.place(o, c.heightPt), u = Object.freeze(c.members.map((e) => {
		let t = tm(e.fragment, {
			xPt: l.bounds.xPt,
			yPt: l.bounds.yPt
		}), n = e_(a.hRule === "exact" && a.h != null ? {
			...t,
			clipBounds: l.bounds
		} : t), r = Object.freeze({
			...n,
			advancePt: 0
		});
		return Object.freeze({
			...e,
			fragment: r
		});
	})), d = Object.freeze({
		box: Object.freeze({
			bounds: l.bounds,
			exclusionBounds: l.exclusionBounds,
			exclusionId: `frame:${e.id}`
		}),
		members: u
	});
	return n.set(r, d), d;
}
function yv(e, t, n) {
	let r = t.continuesFromPrevious ? {
		...t.context,
		firstIndentPt: 0
	} : t.context, i = t.placement.paragraphXPt + r.physicalIndentLeftPt, a = du(r, t.placement.availableWidthPt), o = t.placement.availableWidthPt - r.physicalIndentLeftPt - r.physicalIndentRightPt - a, s = E_(e, n), c = t.continuesFromPrevious ? void 0 : m_(e, r, t), l = O_(n, e, i, o, t.source, t.id, r, s, c, t.environment.layoutServices?.text, t.environment.verticalGlyphMeasurement, t.environment.verticalPageFrame);
	t.sourceRangeStart !== void 0 && (l = j_(l, t.sourceRangeStart)), l = k_(l, t.placement.paragraphXPt, t.placement.availableWidthPt, r.baseRtl, r.tabStops), c && n.markOnly && l.length === 0 && (c.markerText !== "" || e.numbering?.picBulletImagePath) && (l = [M_(n, e, i, o, r)]);
	let u = [], d = [], f = [], p = [], m = [], h = [], g = [], _ = e.runs.map((e, t) => e.type === "break" ? {
		kind: "break",
		breakKind: e.breakType,
		offset: s.runStarts[t] ?? 0
	} : void 0).filter((e) => e !== void 0), v = /* @__PURE__ */ new Map();
	e.runs.forEach((e, t) => {
		if (!L_(e)) return;
		let n = v.get(e.anchorAcquisitionInput.occurrenceId) ?? [];
		n.push({
			run: e,
			runIndex: t
		}), v.set(e.anchorAcquisitionInput.occurrenceId, n);
	});
	for (let [r, i] of v) {
		let a = q_(r, i, l, e, t, n.contentEndYPt - t.placement.startYPt, t.exclusions, m, t.anchorCollisions ?? [], h);
		a && (p.push(a.result), a.cellContainmentBounds && g.push(a.cellContainmentBounds), a.drawing && (d.push(a.drawing), f.push(...a.textBoxes), a.exclusion && m.push(a.exclusion), a.collision && h.push(a.collision), l[a.hostLineIndex] && (l = l.map((e, t) => t === a.hostLineIndex ? {
			...e,
			placements: [...e.placements, {
				kind: "drawing",
				range: a.hostRange,
				drawingId: a.drawing.id,
				bounds: a.drawing.inkBounds,
				advancePt: 0
			}]
		} : e))));
	}
	if (c && l[0]) {
		let n = g_(c, e, t.context, i, o, l[0]);
		n.length > 0 && (l = [{
			...l[0],
			placements: [...n, ...l[0].placements]
		}, ...l.slice(1)]);
	}
	if (e.runs.forEach((e, n) => {
		let r = t_(t.source, n);
		if (e.type === "unavailableDrawing" && e.anchorAcquisitionInput === void 0) {
			let i = i_(t.source, n), a = l.flatMap((e) => e.placements).find((e) => e.kind === "drawing" && e.drawingId === i);
			a?.kind === "drawing" && d.push({
				kind: "drawing",
				id: i,
				source: r,
				flowDomainId: t.flowDomainId,
				flowBounds: a.bounds,
				inkBounds: a.bounds,
				advancePt: 0,
				ordinaryFlow: !1,
				commands: Object.freeze([{ kind: "noop" }]),
				diagnostics: Object.freeze([a_(e.resourceKind, r)])
			});
		}
		if (e.type === "image" && u.push({
			kind: "image",
			resourceKey: et(r, e.imagePath),
			intrinsicSize: {
				widthPt: e.widthPt,
				heightPt: e.heightPt
			}
		}), e.type === "chart" && u.push({
			kind: "chart",
			resourceKey: r_(r),
			intrinsicSize: {
				widthPt: e.widthPt,
				heightPt: e.heightPt
			}
		}), e.type === "math" && u.push({
			kind: "math",
			resourceKey: e.resourceKey ?? rt("math-resource", r),
			intrinsicSize: {
				widthPt: l.flatMap((e) => e.placements).find((e) => e.kind === "resource" && e.resourceKind === "math")?.bounds?.widthPt ?? 0,
				heightPt: e.fontSize
			}
		}), (e.type === "image" || e.type === "chart") && !t.continuesFromPrevious) {
			let r = I_(e, t, n);
			if (r) {
				d.push(r);
				let e = l[0];
				e && (l = [{
					...e,
					placements: [...e.placements, {
						kind: "drawing",
						range: {
							start: s.runStarts[n] ?? 0,
							end: (s.runStarts[n] ?? 0) + (s.runLengths[n] ?? 1)
						},
						drawingId: r.id,
						bounds: r.inkBounds,
						advancePt: 0
					}]
				}, ...l.slice(1)]);
			}
		}
		if (e.type === "shape" && !e.anchorAcquisitionInput && !t.continuesFromPrevious) {
			let i = `${t.id}:drawing:${n}`, a = e.inline === !0 ? l.flatMap((e) => e.placements).find((e) => e.kind === "drawing" && e.drawingId === i) : void 0;
			if (e.inline === !0 && !a) throw Error(`Inline shape ${i} has no retained line placement`);
			let o = a?.bounds ?? P_(e, t), c = `${t.id}:textbox:${n}`, u = nv(e, o, {
				id: c,
				source: r,
				flowDomainId: t.flowDomainId,
				context: t.context,
				measurer: t.measurer,
				environment: t.environment,
				input: e.textBoxInput,
				acquireCompleteStory: t.acquireCompleteStory
			}), p = F_(e, e.inline === !0 ? o : u?.flowBounds ?? o, t, n, e.inline === !0);
			u && (f.push(u), p = {
				...p,
				textBoxIds: [c]
			}), d.push(p);
			let m = e.inline === !0 ? void 0 : l[0];
			m && (l = [{
				...m,
				placements: [...m.placements, {
					kind: "drawing",
					range: {
						start: s.runStarts[n] ?? 0,
						end: (s.runStarts[n] ?? 0) + (s.runLengths[n] ?? 1)
					},
					drawingId: p.id,
					bounds: p.inkBounds,
					advancePt: 0
				}]
			}, ...l.slice(1)]);
		}
	}), e.numbering?.picBulletImagePath && !t.continuesFromPrevious && u.push({
		kind: "picture-bullet",
		resourceKey: et(t.source, e.numbering.picBulletImagePath),
		intrinsicSize: {
			widthPt: e.numbering.picBulletWidthPt ?? e.numberingMarkerShapeInput?.fontSizePt ?? 0,
			heightPt: e.numbering.picBulletHeightPt ?? e.numberingMarkerShapeInput?.fontSizePt ?? 0
		}
	}), e.numbering?.picBulletImagePath && l[0] && !t.continuesFromPrevious) {
		if (!c) throw Error("Picture-bullet acquisition requires resolved marker font geometry");
		let n = e.numbering.picBulletWidthPt ?? c.markerWidthPt, r = e.numbering.picBulletHeightPt ?? e.numberingMarkerShapeInput?.fontSizePt;
		if (r === void 0) throw Error("Picture-bullet acquisition requires resolved marker height");
		let a = ul({
			baseRtl: t.context.baseRtl,
			alignedLeadingEdgePt: h_(c, t.context, i, o, l[0]),
			authoredFirstIndentPt: e.indentFirst,
			markerShiftPt: c.markerShiftPt,
			markerWidthPt: n
		});
		l = [{
			...l[0],
			placements: [{
				kind: "resource",
				resourceKind: "picture-bullet",
				range: {
					start: -1,
					end: 0
				},
				resourceKey: et(t.source, e.numbering.picBulletImagePath),
				bounds: {
					xPt: a,
					yPt: l[0].baselinePt - r,
					widthPt: n,
					heightPt: r
				},
				advancePt: 0
			}, ...l[0].placements]
		}, ...l.slice(1)];
	}
	l = v_(l, e.shading, t.containerShading);
	let y = n.contentEndYPt - n.contentStartYPt, b = t.paragraphBorderEdges ?? {
		top: "top",
		bottom: "bottom"
	}, x = b_(e, l, i, o, n.contentStartYPt, y, b), S = e.borders ? [
		...b.top === "none" ? [] : [[b.top, e.borders[b.top]]],
		["right", e.borders.right],
		...b.bottom === "none" ? [] : [["bottom", e.borders.bottom]],
		["left", e.borders.left]
	] : [], C = e.borders ? S.flatMap(([e, t]) => {
		if (!y_(t)) return [];
		let n = e === "top" || e === "between" || e === "bottom", r = e === "right" || e === "bottom", i = n ? x.yPt + (r ? x.heightPt : 0) : x.xPt + (r ? x.widthPt : 0);
		return [{
			edge: e,
			from: n ? {
				xPt: x.xPt,
				yPt: i
			} : {
				xPt: i,
				yPt: x.yPt
			},
			to: n ? {
				xPt: x.xPt + x.widthPt,
				yPt: i
			} : {
				xPt: i,
				yPt: x.yPt + x.heightPt
			},
			color: t.color ? `#${t.color}` : "#000000",
			widthPt: t.width,
			...ki(t.style, t.width)
		}];
	}) : [], w = t.trailingExtentPt ?? n.requestedSpaceAfterPt, T = rd(g);
	return e_({
		kind: "paragraph",
		id: t.id,
		source: t.source,
		...e.paragraphId === void 0 ? {} : { paragraphId: e.paragraphId },
		flowDomainId: t.flowDomainId,
		ordinaryFlow: t.ordinaryFlow,
		...e.styleId === void 0 ? {} : { styleId: e.styleId },
		...!t.continuesFromPrevious && e.bookmarks?.length ? { bookmarkStarts: e.bookmarks } : {},
		flowBounds: {
			xPt: t.placement.paragraphXPt,
			yPt: t.placement.startYPt,
			widthPt: t.placement.availableWidthPt,
			heightPt: n.contentEndYPt - t.placement.startYPt + w
		},
		inkBounds: { ...e.shading || e.borders ? x : {
			xPt: i,
			yPt: n.contentStartYPt,
			widthPt: Math.max(0, ...l.map((e) => e.bounds.widthPt)),
			heightPt: y
		} },
		spacing: {
			beforePt: t.placement.suppressSpaceBefore ? 0 : n.requestedSpaceBeforePt,
			afterPt: w
		},
		contextualSpacing: e.contextualSpacing ?? !1,
		lines: l,
		borders: C,
		shading: e.shading ? { color: `#${e.shading}` } : void 0,
		resources: u,
		drawings: d,
		textBoxes: f,
		events: _,
		exclusions: cv(t.exclusions, m),
		...T ? { cellContainmentBounds: T } : {},
		anchorCollisions: lv(t.anchorCollisions ?? [], h),
		...p.length ? { anchorFrames: p } : {},
		paragraphMark: n.markOnly ? {
			hidden: e.markVanish === !0,
			bounds: {
				xPt: i,
				yPt: n.contentStartYPt,
				widthPt: 0,
				heightPt: y
			}
		} : void 0
	});
}
var bv = (e, t) => Y(e, {
	xPt: 0,
	yPt: t
}), xv = (e, t) => X(e, {
	xPt: 0,
	yPt: t
}), Sv = (e, t) => Yp(e, {
	xPt: 0,
	yPt: t
}), Cv = (e, t) => Zp(e, {
	xPt: 0,
	yPt: t
}), wv = (e, t) => Qp(e, {
	xPt: 0,
	yPt: t
}), Tv = (e, t) => tm(e, {
	xPt: 0,
	yPt: t
}), Ev = (e, t) => rm(e, {
	xPt: 0,
	yPt: t
});
function Dv(e, t, n, r) {
	if (!e.shading && e.borders.length === 0) return null;
	let i = t[0], a = t.at(-1);
	if (!i || !a) return {
		box: xv(e.inkBounds, n),
		borders: []
	};
	let o = e.inkBounds.yPt, s = o + e.inkBounds.heightPt, c = r.continuesFromPrevious ? Math.max(o, i.bounds.yPt) : o, l = r.continuesOnNext ? Math.min(s, a.bounds.yPt + a.advancePt) : s, u = {
		xPt: e.inkBounds.xPt,
		yPt: c + n,
		widthPt: e.inkBounds.widthPt,
		heightPt: Math.max(0, l - c)
	}, d = u.xPt, f = d + u.widthPt, p = u.yPt, m = p + u.heightPt;
	return {
		box: u,
		borders: e.borders.flatMap((e) => (e.edge === "top" || e.edge === "between") && r.continuesFromPrevious || e.edge === "bottom" && r.continuesOnNext ? [] : e.edge === "top" || e.edge === "between" ? [{
			...e,
			from: {
				xPt: d,
				yPt: p
			},
			to: {
				xPt: f,
				yPt: p
			}
		}] : e.edge === "bottom" ? [{
			...e,
			from: {
				xPt: d,
				yPt: m
			},
			to: {
				xPt: f,
				yPt: m
			}
		}] : e.edge === "left" ? [{
			...e,
			from: {
				xPt: d,
				yPt: p
			},
			to: {
				xPt: d,
				yPt: m
			}
		}] : e.edge === "right" ? [{
			...e,
			from: {
				xPt: f,
				yPt: p
			},
			to: {
				xPt: f,
				yPt: m
			}
		}] : [{
			...e,
			from: bv(e.from, n),
			to: bv(e.to, n)
		}])
	};
}
function Ov(e, t, n = `${e.id}:${t.lineStart}-${t.lineEnd}`) {
	let r = e.lines.slice(t.lineStart, t.lineEnd), i = r[0], a = r.at(-1), o = t.continuesFromPrevious && i ? e.flowBounds.yPt - i.bounds.yPt : 0, s = o === 0 ? r : r.map((e) => wv(e, o)), c = s[0], l = s.at(-1), u = e.lines.map((e, n) => n >= t.lineStart && n < t.lineEnd ? s[n - t.lineStart] : e), d = c && l ? {
		xPt: Math.min(...s.map((e) => e.bounds.xPt)),
		yPt: c.bounds.yPt,
		widthPt: Math.max(...s.map((e) => e.bounds.xPt + e.bounds.widthPt)) - Math.min(...s.map((e) => e.bounds.xPt)),
		heightPt: l.bounds.yPt + l.bounds.heightPt - c.bounds.yPt
	} : e.inkBounds, f = Dv(e, r, o, t), p = new Set(r.flatMap((e) => e.placements.flatMap((e) => e.kind === "drawing" ? [e.drawingId] : []))), m = e.drawings.filter((e) => p.has(e.id)).map((e) => e.anchorLayer?.verticalOwnership === "page" ? e : Sv(e, o)), h = rd(m.filter((e) => e.anchorLayer?.cellContainment === !0).map((e) => e.flowBounds)), g = new Set(e.drawings.flatMap((e) => {
		if (e.anchorLayer?.verticalOwnership !== "host") return [];
		let t = e.anchorLayer.acquisitionOccurrenceId ?? e.anchorLayer.occurrenceId;
		return t === void 0 ? [] : [t];
	})), _ = new Set(m.flatMap((e) => {
		if (e.anchorLayer?.verticalOwnership !== "host") return [];
		let t = e.anchorLayer.acquisitionOccurrenceId ?? e.anchorLayer.occurrenceId;
		return t === void 0 ? [] : [t];
	})), v = new Set(r.flatMap((e) => e.placements.flatMap((e) => e.kind === "resource" ? [e.resourceKey] : [])));
	for (let e of m) for (let t of e.commands) t.kind === "resource" && v.add(t.resourceKey);
	let y = new Set(m.flatMap((e) => [e.id.replace(":drawing:", ":textbox:"), ...e.textBoxIds ?? []])), b = new Set(m.filter((e) => e.anchorLayer?.verticalOwnership === "page" || e.orientation === "upright-physical").flatMap((e) => e.textBoxIds ?? [])), x = new Set(m.map((e) => rt("source-occurrence", e.source))), S = i?.range.start, C = a?.range.end, { bookmarkStarts: w, ...T } = e;
	return e_({
		...T,
		kind: "paragraph",
		id: n,
		...!t.continuesFromPrevious && w?.length ? { bookmarkStarts: w } : {},
		lines: u,
		flowBounds: {
			...e.flowBounds,
			yPt: e.flowBounds.yPt
		},
		...e.clipBounds ? { clipBounds: xv(e.clipBounds, o) } : {},
		spacing: {
			beforePt: t.continuesFromPrevious ? 0 : e.spacing.beforePt,
			afterPt: t.continuesOnNext ? 0 : e.spacing.afterPt
		},
		inkBounds: f?.box ?? d,
		borders: f?.borders ?? e.borders.map((e) => ({
			...e,
			from: bv(e.from, o),
			to: bv(e.to, o)
		})),
		resources: e.resources.filter((e) => v.has(e.resourceKey)),
		drawings: m,
		cellContainmentBounds: h ?? void 0,
		textBoxes: e.textBoxes.filter((e) => y.has(e.id) || x.has(rt("source-occurrence", e.source))).map((e) => b.has(e.id) ? e : Ev(e, o)),
		events: S === void 0 || C === void 0 ? [] : e.events.filter((e) => e.offset >= S && (e.offset < C || !t.continuesOnNext && e.offset === C)),
		exclusions: e.exclusions.filter((e) => e.verticalOwnership === "page" || e.anchorOccurrenceId === void 0 || !g.has(e.anchorOccurrenceId) || _.has(e.anchorOccurrenceId)).map((e) => ({
			...e,
			bounds: e.verticalOwnership === "page" ? e.bounds : xv(e.bounds, o),
			polygon: e.verticalOwnership === "page" ? e.polygon : e.polygon.map((e) => bv(e, o))
		})),
		anchorCollisions: (e.anchorCollisions ?? []).filter((e) => e.verticalOwnership === "page" || !g.has(e.occurrenceId) || _.has(e.occurrenceId)).map((e) => ({
			...e,
			bounds: e.verticalOwnership === "page" ? e.bounds : xv(e.bounds, o)
		})),
		...t.continuesOnNext ? { paragraphMark: void 0 } : e.paragraphMark ? { paragraphMark: {
			...e.paragraphMark,
			bounds: xv(e.paragraphMark.bounds, o)
		} } : {},
		continuation: t
	});
}
//#endregion
//#region packages/docx/src/layout/paragraph-pagination.ts
function kv(e, t) {
	return e.segIndex - t.segIndex || e.charOffset - t.charOffset;
}
function Av(e, t, n, r, i, a, o, s, c, l) {
	if (![r, i].every((e) => Number.isFinite(e) && e >= 0)) throw RangeError("Paragraph fragment extents must be finite and non-negative");
	if (n.kind === "splittable" && n.lineEndBoundaries.length !== e.lines.length) throw RangeError("Splittable paragraph source boundaries must align with retained lines");
	if (n.kind === "indivisible" && t.boundary !== null) throw RangeError("Indivisible paragraph cannot carry a continuation boundary");
	let u = o.authoredSpaceAfterPt ?? 0;
	if (!Number.isFinite(u) || u < 0) throw RangeError("Authored paragraph spaceAfter must be finite and non-negative");
	let d = e.lines.length, f = (n) => Ov(e, {
		lineStart: 0,
		lineEnd: n,
		continuesFromPrevious: t.boundary !== null,
		continuesOnNext: n < d
	}), p = (e) => {
		let t = s?.(e) ?? 0;
		if (!Number.isFinite(t) || t < 0) throw RangeError("Paragraph page-local reserve must be finite and non-negative");
		return t;
	}, m = (e) => l?.(e) ?? !0, h = (e, t) => {
		if (!t) return e.advancePt;
		let n = Fm({
			advancePt: e.advancePt,
			retainedSpaceAfterPt: e.spacing.afterPt,
			authoredSpaceAfterPt: u
		});
		return Rm({
			paragraph: e,
			writingMode: o.writingMode ?? "horizontal-tb",
			logicalLineBoxExtentPt: n,
			availableBlockExtentPt: r
		});
	};
	if (n.kind === "indivisible") {
		let n = p(e), o = h(e, !0);
		return a && (o + n > r || !m(n)) && o + n <= i ? {
			fragment: null,
			nextCursor: t,
			requiresFreshFlowRegion: !0,
			additionalReservePt: 0,
			admittedBlockExtentPt: 0
		} : {
			fragment: e,
			nextCursor: null,
			requiresFreshFlowRegion: !1,
			additionalReservePt: n,
			admittedBlockExtentPt: Math.min(e.advancePt, r)
		};
	}
	if (d === 0) {
		let n = p(e), o = h(e, !0);
		return a && (o + n > r || !m(n)) && o + n <= i ? {
			fragment: null,
			nextCursor: t,
			requiresFreshFlowRegion: !0,
			additionalReservePt: 0,
			admittedBlockExtentPt: 0
		} : {
			fragment: e,
			nextCursor: null,
			requiresFreshFlowRegion: !1,
			additionalReservePt: n,
			admittedBlockExtentPt: Math.min(e.advancePt, r)
		};
	}
	let g = p(e), _ = h(e, !0);
	if (t.boundary === null && o.keepLines && a && (_ + g > r || !m(g)) && _ + g <= i) return {
		fragment: null,
		nextCursor: t,
		requiresFreshFlowRegion: !0,
		additionalReservePt: 0,
		admittedBlockExtentPt: 0
	};
	let v = jm(0, d, r, (e) => (() => {
		let t = f(e), n = p(t);
		return m(n) ? h(t, e === d) + n : r + 1;
	})()).end;
	if (v === 0) {
		if (a) return {
			fragment: null,
			nextCursor: t,
			requiresFreshFlowRegion: !0,
			additionalReservePt: 0,
			admittedBlockExtentPt: 0
		};
		v = 1;
	}
	for (;;) {
		let e = Mm({
			widowControl: o.widowControl,
			start: 0,
			end: v,
			totalLines: d,
			canRelocate: a
		});
		if (e.kind === "relocate") return {
			fragment: null,
			nextCursor: t,
			requiresFreshFlowRegion: !0,
			additionalReservePt: 0,
			admittedBlockExtentPt: 0
		};
		if (e.kind !== "dropLastLine") break;
		--v;
	}
	let y = f(v), b = v < d ? n.lineEndBoundaries[v - 1] : null;
	if (b !== null && t.boundary !== null && kv(b, t.boundary) <= 0) throw Error("Paragraph continuation source boundary did not advance");
	return {
		fragment: y,
		nextCursor: b === null ? null : Object.freeze({
			boundary: b,
			sourceRangeStart: y.lines.at(-1).range.end,
			...c === void 0 ? {} : { uniformRubyAdvancePt: c }
		}),
		requiresFreshFlowRegion: !1,
		additionalReservePt: p(y),
		admittedBlockExtentPt: Math.min(y.advancePt, r)
	};
}
//#endregion
//#region packages/docx/src/layout/note-reference-ownership.ts
function jv(e, t) {
	let n = /* @__PURE__ */ new Map();
	if (!e) return n;
	let r = new Set(e.map((e) => e.id));
	return t.forEach((e) => {
		r.has(e) && !n.has(e) && n.set(e, n.size + 1);
	}), n;
}
function Mv(e) {
	let t = /* @__PURE__ */ new Map();
	if (!e) return t;
	for (let n of e) t.set(n.id, n);
	return t;
}
function Nv(e, t) {
	let n = [], r = /* @__PURE__ */ new Set();
	for (let i of e) if (i.type === "paragraph" && "runs" in i) for (let e of i.runs) e.type !== "text" || e.noteRef?.kind !== t || e.noteRef.id.length === 0 || r.has(e.noteRef.id) || (r.add(e.noteRef.id), n.push(e.noteRef.id));
	else if (i.type === "table" && "rows" in i) for (let e of i.rows) for (let i of e.cells) for (let e of Nv(i.content, t)) r.has(e) || (r.add(e), n.push(e));
	return Object.freeze(n);
}
function Pv(e, t) {
	return Object.freeze([...new Set(e.flatMap((e) => e.placements.flatMap((e) => e.kind === "text" && e.noteReference?.kind === t ? [e.noteReference.id] : [])))]);
}
function Fv(e, t) {
	return e.rows.flatMap((e) => e.cells.flatMap((e) => e.blocks.flatMap((e) => Iv(e.layout, t))));
}
function Iv(e, t) {
	let n = e.kind === "paragraph" ? Pv(e.lines, t) : Fv(e, t);
	return Object.freeze([...new Set(n)]);
}
function Lv(e) {
	return Pv(e, "footnote");
}
function Rv(e) {
	return Iv(e, "footnote");
}
function zv(e) {
	return Iv(e, "endnote");
}
//#endregion
//#region packages/docx/src/layout/column-balancing.ts
function Bv(e) {
	if (!Number.isInteger(e.columnCount) || e.columnCount <= 0) throw RangeError("Column count must be a positive integer");
	for (let t of e.fragments) if (!Number.isFinite(t.extentPt) || t.extentPt < 0) throw RangeError("Column balance fragment extents must be finite and non-negative");
	if (e.fragments.length === 0) return Object.freeze({
		targetPt: 0,
		cutIndexes: Object.freeze([]),
		transitionExpansions: 0
	});
	let t = [0], n = [0], r = [];
	e.fragments.forEach((i, a) => {
		t.push(t[a] + i.extentPt);
		let o = a + 1;
		(i.breakAfter !== "forbidden" || o === e.fragments.length) && n.push(o), i.breakAfter === "forced" && o < e.fragments.length && r.push(o);
	});
	let i = Math.min(e.columnCount, n.length - 1), a = Array.from({ length: i + 1 }, () => Array(n.length).fill(Infinity)), o = Array.from({ length: i + 1 }, () => Array(n.length).fill(-1));
	a[0][0] = 0;
	let s = 0;
	for (let e = 1; e <= i; e += 1) {
		let i = a[e - 1], c = a[e], l = i.flatMap((e, t) => Number.isFinite(e) ? [t] : []), u = 0, d = 0, f = 0, p = 0;
		for (let a = 1; a < n.length; a += 1) {
			let m = n[a];
			for (; d < r.length && r[d] < m;) f = r[d], d += 1;
			for (; n[p] < f;) p += 1;
			for (; u < l.length && l[u] < p;) u += 1;
			let h = l[u];
			if (h === void 0 || h >= a) continue;
			let g = (e) => {
				s += 1;
				let r = n[e];
				return Math.max(i[e], t[m] - t[r]);
			}, _ = h, v = g(_);
			for (; u + 1 < l.length;) {
				let e = l[u + 1];
				if (e >= a) break;
				let t = g(e);
				if (t > v) break;
				u += 1, _ = e, v = t;
			}
			c[a] = v, o[e][a] = _;
		}
	}
	let c = n.length - 1, l = -1, u = Infinity;
	for (let e = 1; e <= i; e += 1) {
		let t = a[e][c];
		t <= u && (u = t, l = e);
	}
	if (l < 0 || !Number.isFinite(u)) throw Error("Authored column breaks exceed the available column frontier");
	let d = [], f = c;
	for (let e = l; e > 0; --e) if (d.push(n[f]), f = o[e][f], f < 0) throw Error("Column balance frontier omitted a predecessor");
	return d.reverse(), Object.freeze({
		targetPt: u,
		cutIndexes: Object.freeze(d),
		transitionExpansions: s
	});
}
//#endregion
//#region packages/docx/src/layout/column-balance-frontier.ts
function Vv(e) {
	let t = /* @__PURE__ */ new Map();
	return e.sequence.forEach((e, n) => {
		if (e.kind === "body-block") {
			let r = e.block;
			t.set(z(r.source), Object.freeze({
				sequenceIndex: n,
				keepLines: r.kind === "paragraph" && r.keepLines,
				keepNext: r.kind === "paragraph" && r.keepNext,
				widowControl: r.kind === "paragraph" && r.widowControl
			}));
			return;
		}
		e.kind === "adjacent-table-group" && e.tables.forEach((e) => t.set(z(e.source), Object.freeze({
			sequenceIndex: n,
			keepLines: !1,
			keepNext: !1,
			widowControl: !1
		})));
	}), t;
}
function Hv(e, t, n) {
	let r = t - e;
	if (n.length <= 1) return Object.freeze([r]);
	let i = [], a = e;
	for (let e of n) {
		if (!Number.isFinite(e) || e < a || e > t) return Object.freeze([r]);
		i.push(e - a), a = e;
	}
	return i[i.length - 1] = i.at(-1) + t - a, Object.freeze(i);
}
function Uv(e, t, n, r) {
	let i = new Set(r.flowDomainIds), a = new Map(n.layers.body.map((e) => [e.id, e])), o = Vv(e), s = [];
	for (let e of t) {
		if (!i.has(e.flowDomainId)) continue;
		let t = a.get(e.nodeId);
		if (!t || !t.ordinaryFlow) continue;
		let n = z(t.source), r = o.get(n);
		if (!r) continue;
		let c = t.kind === "paragraph" && !r.keepLines && t.lines.length > 1 ? t.lines.map((e) => e.bounds.yPt + e.advancePt) : t.kind === "table" && t.rows.length > 1 ? t.rows.map((e) => e.flowBounds.yPt + e.advancePt) : [e.blockEndPt];
		Hv(e.blockStartPt, e.blockEndPt, c).forEach((e) => s.push({
			extentPt: e,
			breakAfter: "allowed",
			sequenceIndex: r.sequenceIndex,
			sourceIdentity: n,
			paragraphLine: t.kind === "paragraph" && !r.keepLines && t.lines.length > 0
		}));
	}
	let c = /* @__PURE__ */ new Map();
	s.forEach((e, t) => {
		let n = c.get(e.sourceIdentity) ?? [];
		n.push(t), c.set(e.sourceIdentity, n);
	});
	for (let [e, t] of c) {
		let n = o.get(e);
		if (!n) continue;
		let r = t.filter((e) => s[e].paragraphLine);
		n.keepLines && t.slice(0, -1).forEach((e) => {
			s[e].breakAfter = "forbidden";
		});
		for (let e = 0; e + 1 < r.length; e += 1) Mm({
			widowControl: n.widowControl,
			start: 0,
			end: e + 1,
			totalLines: r.length,
			canRelocate: !0
		}).kind !== "keep" && (s[r[e]].breakAfter = "forbidden");
		n.keepNext && (s[t.at(-1)].breakAfter = "forbidden");
	}
	let l = e.initialSection.sectionOccurrenceId;
	return e.sequence.forEach((e, t) => {
		if (e.kind === "begin-section") {
			l = e.section.sectionOccurrenceId;
			return;
		}
		if (!(l !== r.sectionOccurrenceId || e.kind !== "authored-break" || e.break !== "column")) {
			for (let e = s.length - 1; e >= 0; --e) if (!(s[e].sequenceIndex >= t)) {
				s[e].breakAfter = "forced";
				break;
			}
		}
	}), Object.freeze(s.map((e) => Object.freeze(e)));
}
function Wv(e, t, n, r, i) {
	let a = Uv(e, t, r, i), o = n.get(r.pageIndex) ?? 0;
	return Bv({
		columnCount: i.flowDomainIds.length,
		fragments: a
	}).targetPt + o;
}
//#endregion
//#region packages/docx/src/layout/section-flow-composition.ts
function Gv(e, t, n, r, i) {
	let a = t, o = e.lines.map((t, o) => {
		let s = a++, c = String(s), l = i.measureLineNumberGlyph(c), u = Object.freeze({
			xPt: e.flowBounds.xPt - r,
			yPt: t.baselinePt
		});
		return Object.freeze({
			lineIndex: o,
			counterValue: s,
			bounds: Object.freeze({
				xPt: u.xPt - l.widthPt,
				yPt: u.yPt - l.ascentPt,
				widthPt: l.widthPt,
				heightPt: l.ascentPt + l.descentPt
			}),
			paintOps: s % n === 0 ? Object.freeze([Object.freeze({
				kind: "text",
				text: c,
				origin: u,
				font: l.font ?? "",
				color: "#000000",
				textAlign: "right"
			})]) : Object.freeze([])
		});
	});
	return Object.freeze({
		paragraph: Object.freeze({
			...e,
			lineNumbers: Object.freeze(o)
		}),
		counterEnd: a
	});
}
function Kv(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i, a = e.pages.map((e) => {
		if (e.parityBlank) return e;
		let a = [...e.layers.body];
		for (let o = 0; o < e.sectionRegions.length; o += 1) {
			let s = e.sectionRegions[o], c = new Set(s.flowDomainIds), l = a.flatMap((e, t) => c.has(e.flowDomainId) ? [t] : []), u = new Map(l.map((e) => [a[e].id, a[e]])), d = n.filter((e) => {
				let t = u.get(e.nodeId);
				return c.has(e.flowDomainId) && e.blockEndPt > e.blockStartPt && t !== void 0 && (t.ordinaryFlow || t.sectionFlowOwnership === "host-flow");
			}), f = d.length === 0 ? s.blockStartPt : Math.min(...d.map((e) => e.blockStartPt)), p = d.length === 0 ? f : Math.max(...d.map((e) => e.blockEndPt)), m = s.blockEndPt, h = Math.max(0, m - s.blockStartPt), g = Math.max(0, p - f), _ = s.section.verticalAlignment, v = d.length > 0 && g < h ? _ === "center" ? s.blockStartPt + (h - g) / 2 - f : _ === "bottom" ? m - g - f : 0 : 0, y = s.section.lineNumbering, b = y?.restart === "newPage" ? y.start : y?.restart === "newSection" ? r.get(s.sectionOccurrenceId) ?? y.start : r.get(s.sectionOccurrenceId) ?? i ?? y?.start ?? 1;
			b ??= 1;
			for (let e of l) {
				let n = a[e];
				if (n.kind === "paragraph" && n.ordinaryFlow && y) {
					let e = Gv(n, b, Math.max(1, y.countBy), fu(y.distance), t);
					n = e.paragraph, b = e.counterEnd;
				}
				v !== 0 && (n.ordinaryFlow || n.sectionFlowOwnership === "host-flow") && (n.kind === "paragraph" || n.kind === "table") && (n = pm(n, {
					xPt: 0,
					yPt: v
				})), a[e] = n;
			}
			y && (r.set(s.sectionOccurrenceId, b), i = b);
		}
		return Object.freeze({
			...e,
			layers: ai(e.layers, "body", a)
		});
	});
	return Object.freeze({
		...e,
		pages: Object.freeze(a)
	});
}
//#endregion
//#region packages/docx/src/layout/track-changes.ts
function qv(e) {
	let t = /* @__PURE__ */ new Map(), n = (e) => {
		t.has(e) || t.set(e, t.size);
	}, r = (e) => {
		for (let t of e) if (t.type === "paragraph" && t.runs) for (let e of t.runs) e.revision?.kind && n(e.revision.author ?? "");
		else if (t.type === "table" && t.rows) for (let e of t.rows) for (let t of e.cells) r(t.content);
	};
	return r(e), (e) => {
		let r = e ?? "";
		return n(r), Km[(t.get(r) ?? 0) % Km.length];
	};
}
var Jv = .75;
function Yv(e) {
	return e.placements.some((e) => e.kind === "text" && e.revision !== void 0);
}
function Xv(e) {
	return e.kind === "paragraph" ? e.lines.filter(Yv) : e.rows.flatMap((e) => e.cells.flatMap((e) => e.blocks.flatMap((e) => Xv(e.layout))));
}
function Zv(e) {
	let t = !1, n = e.pages.map((e) => {
		let n = e.layers.body.flatMap((e) => e.kind === "paragraph" || e.kind === "table" ? Xv(e) : []);
		if (n.length === 0) return e;
		t = !0;
		let r = Math.max(0, e.section.geometry.marginLeft / 2 - Jv / 2), i = Object.freeze(n.map((e) => Object.freeze({ bounds: Object.freeze({
			xPt: r,
			yPt: e.bounds.yPt,
			widthPt: Jv,
			heightPt: e.bounds.heightPt
		}) })));
		return Object.freeze({
			...e,
			changeBars: i
		});
	});
	return t ? Object.freeze({
		...e,
		pages: Object.freeze(n)
	}) : e;
}
//#endregion
//#region packages/docx/src/layout/section-page-identity.ts
function Qv(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = new Set(n.contentFlowDomainIds);
		for (let r of n.sectionRegions) !t.has(r.sectionOccurrenceId) && r.flowDomainIds.some((t) => e.has(t)) && t.set(r.sectionOccurrenceId, n.pageIndex);
	}
	return t;
}
function $v(e, t) {
	let n = e[t];
	return n ? t === 0 || e[t - 1]?.sectionOccurrenceId !== n.sectionOccurrenceId : !1;
}
//#endregion
//#region packages/docx/src/layout/header-footer-reserve.ts
function ey(e, t) {
	return t.titlePage && t.firstPageOfSection ? e.first : t.evenAndOddHeaders && t.displayPageNumber % 2 == 0 ? e.even : e.default;
}
function ty(e, t) {
	if (![
		e.pageHeight,
		e.marginTop,
		e.marginBottom,
		t.top,
		t.bottom
	].every(Number.isFinite)) throw RangeError("Reserved body interval inputs must be finite");
	if (e.pageHeight <= 0 || t.top < 0 || t.bottom < 0) throw RangeError("Reserved body interval requires a positive page and non-negative reserves");
	let n = Math.min(e.pageHeight, Math.abs(e.marginTop) + t.top), r = e.pageHeight - Math.abs(e.marginBottom) - t.bottom;
	return Object.freeze({
		blockStartPt: n,
		blockEndPt: Math.max(n, Math.min(e.pageHeight, r))
	});
}
function ny(e, t, n) {
	if (![
		e,
		t,
		n
	].every(Number.isFinite)) throw RangeError("Header/footer reserve inputs must be finite");
	if (e < 0) throw RangeError("Story extent must be non-negative");
	return e === 0 || t < 0 ? 0 : Math.max(0, e - (t - n));
}
function* ry(e) {
	let t = (t) => {
		let n = Object.freeze(e.measure(t).map((e) => Object.freeze({ ...e })));
		return Object.freeze({
			result: t,
			reserves: n,
			pageCount: n.length,
			fingerprint: rt("header-footer-reserve-v1", {
				identity: e.identity(t),
				reserves: n
			})
		});
	}, n = t(e.seed);
	return !e.requiresConvergence && n.reserves.every((e) => e.top === 0 && e.bottom === 0) ? n : yield* Vo(n, function* (n) {
		return t(yield* e.repaginate(n.reserves, n.result));
	}, e.limit ?? 16);
}
//#endregion
//#region packages/docx/src/layout/flow.ts
var iy = class extends V {
	constructor(e, t) {
		super("INVALID_GEOMETRY", `${t} exceeds the available flow capacity`), this.containerId = e, this.layoutId = t, this.name = "FlowCapacityExceededError";
	}
};
function ay(e, t) {
	if (e.length === 0) return {
		xPt: t.xPt,
		yPt: t.yPt,
		widthPt: 0,
		heightPt: 0
	};
	let n = Math.min(...e.map((e) => e.xPt)), r = Math.min(...e.map((e) => e.yPt)), i = Math.max(...e.map((e) => e.xPt + e.widthPt)), a = Math.max(...e.map((e) => e.yPt + e.heightPt));
	return {
		xPt: n,
		yPt: r,
		widthPt: i - n,
		heightPt: a - r
	};
}
function oy(e, t, n) {
	let r = [], i = e.cursor, a = e.container.bounds;
	if (![
		a.xPt,
		a.yPt,
		a.widthPt,
		a.heightPt
	].every(Number.isFinite) || a.widthPt < 0 || a.heightPt < 0) throw new V("INVALID_GEOMETRY", `${e.container.id} has invalid bounds`);
	let o = e.container.bounds.yPt + e.container.bounds.heightPt, s = e.container.capacity === "unbounded" ? 2 ** 53 - 1 : o, c = e.container.bounds.xPt + e.container.bounds.widthPt;
	if (!Number.isFinite(i.xPt) || !Number.isFinite(i.yPt) || i.xPt < a.xPt || i.xPt > c || i.yPt < a.yPt || i.yPt > o) throw new V("INVALID_GEOMETRY", `${e.container.id} has an invalid initial flow cursor`);
	for (let a of e.blocks) {
		let l = {
			container: e.container,
			cursor: i,
			availableBounds: {
				xPt: e.container.bounds.xPt,
				yPt: i.yPt,
				widthPt: e.container.bounds.widthPt,
				heightPt: Math.max(0, s - i.yPt)
			}
		}, u = a.kind === "paragraph" ? n.layoutParagraph(a, l, t) : n.layoutTable(a, l, t);
		if (u.layout.flowDomainId !== e.container.id) throw new V("INVALID_REFERENCE", `${u.layout.id} belongs to ${u.layout.flowDomainId}, not ${e.container.id}`);
		if (e.container.capacity !== "unbounded" && Number.isFinite(u.nextCursor.yPt) && u.nextCursor.yPt > o) throw new iy(e.container.id, u.layout.id);
		if (!Number.isFinite(u.nextCursor.xPt) || !Number.isFinite(u.nextCursor.yPt) || u.nextCursor.xPt < e.container.bounds.xPt || u.nextCursor.xPt > c || u.nextCursor.yPt < i.yPt) throw new V("INVALID_GEOMETRY", `${u.layout.id} returned an invalid flow cursor`);
		r.push(u.layout), i = u.nextCursor;
	}
	return {
		source: e.source,
		container: e.container,
		blocks: r,
		nextCursor: i,
		flowDomainId: e.container.id,
		flowBounds: ay(r.map((e) => e.flowBounds), e.container.bounds),
		inkBounds: ay(r.map((e) => e.inkBounds), e.container.bounds),
		...e.container.capacity === "unbounded" ? {} : { clipBounds: e.container.bounds },
		advancePt: i.yPt - e.cursor.yPt,
		ordinaryFlow: !0
	};
}
//#endregion
//#region packages/docx/src/layout/stories.ts
var sy = /* @__PURE__ */ new WeakMap(), cy = (e) => "type" in e && e.type === "unsupportedTextBoxBlock";
function ly(e, t) {
	if (sy.has(e)) throw Error("Story block layout algorithms are already attached");
	sy.set(e, Object.freeze({ ...t }));
}
function uy(e, t) {
	return Object.freeze({
		...e,
		flowBounds: X(e.flowBounds, t),
		inkBounds: X(e.inkBounds, t),
		...e.clipBounds ? { clipBounds: X(e.clipBounds, t) } : {},
		blocks: Object.freeze(e.blocks.map((e) => {
			if (e.kind === "paragraph") return am(e, t);
			if (e.kind === "table") return om(e, t);
			throw Error(`Story contains unsupported retained node: ${e.kind}`);
		}))
	});
}
function dy(e, t) {
	return Object.freeze({
		...e,
		flowBounds: X(e.flowBounds, t),
		inkBounds: X(e.inkBounds, t),
		...e.clipBounds ? { clipBounds: X(e.clipBounds, t) } : {},
		separator: Object.freeze(e.separator.map((e) => Kp(e, t))),
		story: uy(e.story, t)
	});
}
function fy(e, t) {
	for (let t of e.blocks) if (!cy(t) && (t.source.story !== e.source.story || t.source.storyInstance !== e.source.storyInstance)) throw new V("INVALID_REFERENCE", `Story block ${t.source.story}:${t.source.storyInstance} is not owned by ${e.source.story}:${e.source.storyInstance}`);
	let n = sy.get(t);
	if (!n) throw Error("Story block layout algorithms are not attached to the supplied services");
	let r = e.blocks.filter(cy), i = oy({
		blocks: e.blocks.filter((e) => !cy(e)),
		container: e.container,
		cursor: {
			xPt: e.container.bounds.xPt,
			yPt: e.container.bounds.yPt
		},
		source: e.source
	}, t, n);
	return Object.freeze({
		story: e.source.story,
		flowBounds: i.flowBounds,
		inkBounds: i.inkBounds,
		...i.clipBounds ? { clipBounds: i.clipBounds } : {},
		blocks: Object.freeze([...i.blocks]),
		advancePt: i.advancePt,
		diagnostics: Object.freeze(r.map((t) => Object.freeze({
			code: "UNSUPPORTED_FEATURE",
			severity: "warning",
			source: Object.freeze({
				story: e.source.story,
				storyInstance: e.source.storyInstance,
				path: Object.freeze([...t.sourcePath])
			}),
			message: `Unsupported text-box block ${t.qName}`
		})))
	});
}
//#endregion
//#region packages/docx/src/layout/body-paginator.ts
var py = class extends Error {
	code = "FOOTNOTE_RESERVE_EXCEEDS_FRESH_PAGE";
	constructor(e, t, n) {
		super(`Body footnote admission cannot fit a fresh physical page (reserve: ${e}, charge: ${t}, fresh page: ${n})`), this.reservePt = e, this.admissionChargePt = t, this.freshPageExtentPt = n, this.name = "FootnoteAdmissionOverflowError";
	}
};
function my(e, t) {
	if (t.has(e)) return [];
	t.add(e);
	let n = e.diagnostics ?? [];
	return e.kind === "paragraph" ? [
		...n,
		...e.drawings.flatMap((e) => my(e, t)),
		...e.textBoxes.flatMap((e) => my(e, t))
	] : e.kind === "table" ? [
		...n,
		...e.rows.flatMap((e) => e.cells.flatMap((e) => e.blocks.flatMap((e) => my(e.layout, t)))),
		...(e.floatingTables ?? []).flatMap((e) => my(e.child, t)),
		...(e.resolvedFloatingTables ?? []).flatMap((e) => my(e.child, t))
	] : e.kind === "textbox" || e.kind === "note" ? [
		...n,
		...e.story.diagnostics,
		...e.story.blocks.flatMap((e) => my(e, t))
	] : n;
}
function hy(e, t, n) {
	if (e > 0 && t > n) throw new py(e, t, n);
}
function gy(e) {
	let t = /* @__PURE__ */ new Set(), n = (e) => {
		for (let r of e.resolvedFloatingTables ?? []) t.add(r.occurrenceId), n(r.child);
	};
	return n(e), t;
}
function _y(e, t, n) {
	if (!e.floats) throw Error("Accepted floating table omitted its float registry delta");
	let r = gy(t);
	return Object.freeze({
		...e,
		floats: Object.freeze({
			...e.floats,
			entries: Object.freeze(e.floats.entries.map((e) => {
				let i = r.has(e.occurrenceId) ? sm(n, e.occurrenceId) : t.ordinaryFlow ? null : n;
				return i === null ? e : Object.freeze({
					...e,
					occurrenceId: i,
					exclusionId: i
				});
			}))
		})
	});
}
function vy(e, t) {
	let n = new Set(t.drawings.flatMap((e) => {
		let t = e.anchorLayer?.acquisitionOccurrenceId ?? e.anchorLayer?.occurrenceId;
		return t === void 0 ? [] : [t];
	})), r = e.floats?.entries.filter((e) => n.has(e.occurrenceId)) ?? [], i = e.drawingCollisions?.entries.filter((e) => n.has(e.occurrenceId)) ?? [];
	return r.length === 0 && i.length === 0 ? null : Object.freeze({
		...e.floats && r.length > 0 ? { floats: Object.freeze({
			...e.floats,
			entries: Object.freeze(r),
			nextParagraphId: e.floats.baseNextParagraphId + r.length
		}) } : {},
		...e.drawingCollisions && i.length > 0 ? { drawingCollisions: Object.freeze({
			...e.drawingCollisions,
			entries: Object.freeze(i)
		}) } : {}
	});
}
function yy(e) {
	let t = new Map([[e.initialSection.sectionOccurrenceId, e.initialSection]]);
	for (let n = 0; n < e.sequence.length; n += 1) {
		let r = e.sequence[n];
		r.kind === "begin-section" && t.set(r.section.sectionOccurrenceId, r.section);
	}
	return t;
}
function by(e, t) {
	return wu(e.context, e.pageLayout, t);
}
function xy(e, t) {
	let n = by(e, t);
	return gu({
		sectionOccurrenceId: e.sectionOccurrenceId,
		geometry: n.geometry,
		columns: n.columns,
		textDirection: n.textDirection,
		sectionBidi: n.sectionBidi === !0,
		grid: n.grid
	});
}
function Sy(e, t, n, r = n.blockStartPt, i = by(e, t).columns.map((e, t) => t)) {
	let a = by(e, t);
	return Object.freeze({
		id: `page:${t}:section:${encodeURIComponent(e.sectionOccurrenceId)}`,
		sectionOccurrenceId: e.sectionOccurrenceId,
		section: a,
		pageBorders: e.pageBordersAuthored ? e.pageBorders : null,
		writingMode: mi(a.textDirection),
		blockStartPt: r,
		blockEndPt: n.blockEndPt,
		columnFlowDirection: a.sectionBidi === !0 ? "rtl" : "ltr",
		columnIndexes: Object.freeze([...i]),
		columns: Object.freeze(i.map((e) => {
			let t = a.columns[e];
			if (!t) throw Error("Missing authored section column");
			return Object.freeze({
				inlineStartPt: t.xPt,
				inlineExtentPt: t.wPt
			});
		}))
	});
}
function Cy(e, t) {
	let n = mi(e.textDirection), r = bi({
		widthPt: e.geometry.pageWidth,
		heightPt: e.geometry.pageHeight
	}, n);
	return Object.freeze(n === "horizontal-tb" ? {
		...r,
		contentTopPt: t.blockStartPt,
		contentBottomPt: t.blockEndPt
	} : {
		...r,
		contentTopPt: 0,
		contentBottomPt: r.heightPt
	});
}
function wy(e, t, n) {
	return ty(by(e, t).geometry, n);
}
function Ty(e, t, n) {
	let r = by(e, t);
	return zp({
		kind: "content",
		pageIndex: t,
		physicalPage: Cy(r, n),
		sectionOccurrenceId: e.sectionOccurrenceId,
		section: r,
		region: Sy(e, t, n)
	});
}
function Ey(e) {
	let t = e.pages.at(-1), n = t?.accumulator.sectionRegions.at(-1);
	if (!t || t.kind !== "content" || !n) throw Error("Missing active body region");
	return n;
}
function Dy(e) {
	let t = Ey(e), n = t.columnIndexes ?? t.section.columns.map((e, t) => t), r = (t.columnFlowDirection === "rtl" ? [...n].reverse() : [...n]).at(-1) === e.flow.columnIndex;
	return e.balanceTargetPt === null || r ? t.blockEndPt : Math.min(t.blockEndPt, t.blockStartPt + e.balanceTargetPt);
}
function Oy(e) {
	let t = Ey(e), n = t.columnIndexes ?? t.section.columns.map((e, t) => t), r = t.columns[n.indexOf(e.flow.columnIndex)];
	if (!r) throw Error("Missing active body column");
	return Object.freeze({
		pageIndex: e.flow.pageIndex,
		columnIndex: e.flow.columnIndex,
		flowDomainId: Nu(e.flow.pageIndex, t.id, e.flow.columnIndex),
		section: t.section,
		cursorPt: Object.freeze({
			xPt: r.inlineStartPt,
			yPt: e.flow.cursorBlockPt
		}),
		availableBounds: Object.freeze({
			xPt: r.inlineStartPt,
			yPt: e.flow.cursorBlockPt,
			widthPt: r.inlineExtentPt,
			heightPt: Math.max(0, Dy(e) - e.footnoteReservePt - e.flow.cursorBlockPt)
		})
	});
}
function ky(e, t) {
	let n = (t) => {
		let n = e.get(t);
		if (!n) throw Error(`Unknown body section ${t}`);
		return n;
	};
	return {
		openContentPage(e) {
			let r = n(e.sectionOccurrenceId), i = t[e.pageIndex] ?? {
				top: 0,
				bottom: 0
			}, a = wy(r, e.pageIndex, i), o = vm(xy(r, e.pageIndex), {
				pageIndex: e.pageIndex,
				pageContentStartBlockPt: a.blockStartPt,
				pageContentEndBlockPt: a.blockEndPt
			});
			return {
				page: Ty(r, e.pageIndex, a),
				flow: o
			};
		},
		openParityBlankPage(e) {
			let r = n(e.sectionOccurrenceId), i = by(r, e.pageIndex), a = wy(r, e.pageIndex, t[e.pageIndex] ?? {
				top: 0,
				bottom: 0
			});
			return zp({
				kind: "parity-blank",
				pageIndex: e.pageIndex,
				physicalPage: Cy(i, a),
				sectionOccurrenceId: r.sectionOccurrenceId,
				section: i,
				pageBorders: r.pageBordersAuthored ? r.pageBorders : null
			});
		},
		openSamePageSectionRegion(e, t, r) {
			let i = n(t.section.sectionOccurrenceId), a = e.accumulator.sectionRegions, o = a.at(-1);
			if (!o || !("placement" in t)) throw Error("A same-page section requires explicit retained placement");
			let s = Object.freeze({
				blockStartPt: e.accumulator.sectionRegions[0].blockStartPt,
				blockEndPt: o.blockEndPt
			}), c = t.placement === "same-page-block" ? Object.freeze({
				...o,
				blockEndPt: r.regionStartBlockPt
			}) : (() => {
				let e = t.outgoingColumnSubset;
				if (!e || e.length === 0) throw Error("A same-page-column transition requires outgoing column ownership");
				return Object.freeze({
					...o,
					columnIndexes: Object.freeze([...e]),
					columns: Object.freeze(e.map((e) => {
						let t = o.section.columns[e];
						if (!t) throw Error("Missing outgoing authored column");
						return Object.freeze({
							inlineStartPt: t.xPt,
							inlineExtentPt: t.wPt
						});
					}))
				});
			})(), l = Object.freeze([...a.slice(0, -1), c]);
			return Object.freeze({
				...e,
				accumulator: $u(Object.freeze({
					...e.accumulator,
					sectionRegions: l
				}), Sy(i, r.pageIndex, s, r.regionStartBlockPt, t.columnSubset))
			});
		}
	};
}
function Ay(e, t, n, r, i, a, o, s) {
	let c = e.pages.at(-1);
	if (!c || c.kind !== "content") throw Error("Body content requires an active page");
	let l = Ey(e), u = l.columnIndexes ?? l.section.columns.map((e, t) => t), d = l.columns[u.indexOf(e.flow.columnIndex)], f = Nu(e.flow.pageIndex, l.id, e.flow.columnIndex), p = tt(n, f, i);
	if (a.has(p)) throw Error(`Duplicate body occurrence acceptance: ${p}`);
	a.add(p);
	let m = mm(t, {
		occurrenceId: p,
		destination: {
			coordinateSpace: "logical-page-points",
			flowDomainId: f,
			translation: {
				xPt: s ? s.xPt - t.flowBounds.xPt : t.kind === "table" ? d.inlineStartPt : d.inlineStartPt - t.flowBounds.xPt,
				yPt: (s?.yPt ?? e.flow.cursorBlockPt) - t.flowBounds.yPt
			}
		}
	}), h = s?.sectionFlowOwnership === void 0 ? m : Object.freeze({
		...m,
		sectionFlowOwnership: s.sectionFlowOwnership
	}), g = s?.yPt ?? e.flow.cursorBlockPt, _ = h.kind === "paragraph" && h.ordinaryFlow ? (() => {
		let e = g + h.spacing.beforePt, t = g + r - h.spacing.afterPt;
		return Object.freeze({
			...h,
			flowBounds: Object.freeze({
				...h.flowBounds,
				yPt: e,
				heightPt: Math.max(0, t - e)
			})
		});
	})() : h, v = s?.coordinateSpace === "upright-physical" ? {
		..._,
		ordinaryFlow: !1,
		flowBounds: Object.freeze({
			..._.flowBounds,
			heightPt: r
		})
	} : _, y = bm(e.flow, v, r), b = y.events[0];
	if (!b || b.type !== "place") throw Error("Flow placement did not emit an allocation");
	o.push(Object.freeze({
		nodeId: v.id,
		flowDomainId: v.flowDomainId,
		blockStartPt: b.blockStartPt,
		blockEndPt: b.blockEndPt
	}));
	let x = ed(c.accumulator, {
		layer: "body",
		node: v,
		...s?.coordinateSpace === "upright-physical" ? { coordinateSpace: "upright-physical" } : {}
	}, !0), S = [...e.pages];
	return S[S.length - 1] = Object.freeze({
		...c,
		accumulator: x
	}), Object.freeze({
		...e,
		flow: y.state,
		pages: Object.freeze(S)
	});
}
function jy(e) {
	return e.boundary === null ? "root" : `paragraph:${e.boundary.segIndex}:${e.boundary.charOffset}`;
}
function My(e, t) {
	for (let n = t; n < e.sequence.length; n += 1) {
		let t = e.sequence[n];
		if (t.kind === "consume-source") continue;
		if (t.kind === "authored-break") {
			if (t.break !== "lastRenderedPageBreak") return !1;
			continue;
		}
		if (t.kind === "begin-section") {
			if (t.section.startType !== "continuous") return !1;
			continue;
		}
		let r = t.kind === "adjacent-table-group" ? t : t.block;
		if (r.kind !== "paragraph") return !0;
		if (r.pageBreakBefore) return !1;
		if (r.inkless !== !0) return !0;
	}
	return !1;
}
function Ny(e) {
	return e.paragraphMark !== void 0 && e.lines.length === 0 && e.shading === void 0 && e.borders.length === 0 && e.resources.length === 0 && e.drawings.length === 0 && e.textBoxes.length === 0;
}
function Py(e) {
	return [
		e.rowIndex,
		e.rowFragmentIndex,
		e.cells.map((e) => [
			e.blockIndex,
			e.paragraphLineStart,
			e.nestedFragmentIndex,
			e.nestedCursor === null ? null : Py(e.nestedCursor)
		])
	];
}
function Fy(e) {
	if (e === void 0) return "root";
	if (e.kind === "table") return `table:${JSON.stringify(Py(e.cursor))}`;
	let t = e.cursor.tableCursor;
	return `adjacent-table:${e.cursor.tableIndex}:${e.cursor.sourceRowIndex}:${JSON.stringify(t === void 0 ? null : Py(t))}`;
}
function Iy(e, t) {
	let n = e.cursorPt.yPt + t, r = e.availableBounds.yPt + e.availableBounds.heightPt;
	return Object.freeze({
		...e,
		cursorPt: Object.freeze({
			...e.cursorPt,
			yPt: n
		}),
		availableBounds: Object.freeze({
			...e.availableBounds,
			yPt: n,
			heightPt: Math.max(0, r - n)
		})
	});
}
function Ly(e, t) {
	let n = Qv(e.pages.map((e) => ({
		pageIndex: e.accumulator.pageIndex,
		sectionRegions: e.accumulator.sectionRegions.map((t) => ({
			sectionOccurrenceId: t.sectionOccurrenceId,
			flowDomainIds: (t.columnIndexes ?? t.section.columns.map((e, t) => t)).map((n) => Nu(e.accumulator.pageIndex, t.id, n))
		})),
		contentFlowDomainIds: e.accumulator.readingOrder.map((e) => e.flowDomainId)
	}))), r = 0, i = null, a = e.pages.map((e) => {
		let a = t.get(e.accumulator.sectionOccurrenceId), o = a.sectionOccurrenceId !== i;
		a.sectionOccurrenceId !== i && a.pageNumbering.start !== null ? r = pu(a.pageNumbering.start, e.accumulator.pageIndex, n.get(a.sectionOccurrenceId) ?? e.accumulator.pageIndex) : r += 1, i = a.sectionOccurrenceId;
		let s = {
			displayNumber: r,
			format: a.pageNumbering.format ?? "decimal",
			sectionOccurrenceId: a.sectionOccurrenceId
		};
		return e.kind === "parity-blank" ? nd({
			pageIndex: e.accumulator.pageIndex,
			physicalPage: e.accumulator.physicalPage,
			sectionOccurrenceId: e.accumulator.sectionOccurrenceId,
			section: e.accumulator.section,
			pageBorders: e.accumulator.pageBorders,
			firstSectionOwnedPage: o,
			pageNumber: s
		}) : td(e.accumulator, s, o);
	}), o = /* @__PURE__ */ new WeakSet();
	return {
		pages: a,
		diagnostics: a.flatMap((e) => oi(e).flatMap(({ node: e }) => my(e, o)))
	};
}
function Ry(e, t, n, r, i, a, o) {
	let s = Ly(e, t), c = new Set(s.pages.map((e) => e.pageIndex)), l = new Set(s.pages.flatMap((e) => oi(e).map(({ node: e }) => e.id)));
	return Object.freeze({
		layout: s,
		session: n,
		allocations: Object.freeze(r.filter((e) => l.has(e.nodeId))),
		footnoteReserveByPage: new Map([...i].filter(([e]) => c.has(e))),
		footnoteLayoutsByPage: new Map([...a].filter(([e]) => c.has(e))),
		terminalDiagnostic: o
	});
}
function zy(e) {
	let t = e.next();
	for (; !t.done;) t = e.next();
	return t.value;
}
function* By(e, t, n, r, i, a, o) {
	let s = Cr(t);
	if (!s) throw Error("Body layout kernel is not attached to the supplied services");
	let c = yy(e), l = /* @__PURE__ */ new Set(), u = [], d = r[0] ?? {
		top: 0,
		bottom: 0
	}, f = wy(e.initialSection, 0, d), p = Bp(vm(xy(e.initialSection, 0), {
		pageContentStartBlockPt: f.blockStartPt,
		pageContentEndBlockPt: f.blockEndPt
	}), Ty(e.initialSection, 0, f)), m = (e) => {
		let t = a.get(e.flow.section.sectionOccurrenceId);
		return t?.pageIndex === e.flow.pageIndex ? t.targetPt : null;
	};
	p = Vp(p, m(p));
	let h = ky(c, r), g = null, _ = s.openBodyLayoutSession({
		source: e.source,
		section: e.initialSection.context,
		initialLocation: Oy(p)
	}, t, n), v = (e) => {
		let t = c.get(e.flow.section.sectionOccurrenceId);
		if (!t) throw Error(`Unknown body section ${e.flow.section.sectionOccurrenceId}`);
		let n = e.flow.pageIndex + 1, i = wy(t, n, r[n] ?? {
			top: 0,
			bottom: 0
		});
		return i.blockEndPt - i.blockStartPt;
	}, y = (t, n) => {
		if (i !== null) {
			let e = Oy(t);
			return Object.freeze([...i.values()].filter((t) => t.pageIndex === e.pageIndex && t.flowDomainId === e.flowDomainId).map(({ occurrenceId: e, paragraphSource: t }) => Object.freeze({
				occurrenceId: e,
				paragraphSource: t
			})));
		}
		let r = [];
		for (let t = n; t < e.sequence.length; t += 1) {
			let i = e.sequence[t];
			if (i.kind === "authored-break" && i.break !== "column" || i.kind === "begin-section" && i.section.startType !== "continuous") break;
			if (!(i.kind !== "body-block" || i.block.kind !== "paragraph")) {
				if (t > n && i.block.pageBreakBefore) break;
				i.block.pageOwnedAnchorOccurrenceIds?.forEach((e) => r.push(Object.freeze({
					occurrenceId: e,
					paragraphSource: i.block.source
				})));
			}
		}
		return Object.freeze(r);
	}, b = (e, t) => {
		let n = y(e, t);
		if (n.length === 0) return;
		if (!_.prescanPageAnchors) throw Error("Page-owned anchors require canonical prescan acquisition");
		let r = Oy(e), i = _.prescanPageAnchors({
			anchors: n,
			location: r,
			availableInlineExtentPt: r.availableBounds.widthPt
		});
		i && _.commitFlowRegistryDelta(i);
	};
	b(p, 0);
	let x = (e, t, n = !1) => {
		let r = p.flow.pageIndex, i = e.events.some((e) => e.type === "next-page" && e.reason === "overflow"), a = e.events.some((e) => e.type === "begin-section" && "placement" in e && e.placement === "same-page-column");
		p = Up(p, e, h), p = Vp(p, m(p));
		let o = Oy(p);
		p.flow.pageIndex === r ? (_.moveAcquisitionCursor(o), a && b(p, t)) : (g = i && n ? t : null, _.resetPageAcquisition(o), b(p, t));
	}, S = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), T = (e) => (S.get(e)?.size ?? 0) > 0, E = (e, t, n) => D(n ?? Rv(e), t), D = (e, t) => {
		let n = S.get(p.flow.pageIndex) ?? /* @__PURE__ */ new Set(), r = [...new Set(e)].filter((e) => !n.has(e)), i = Oy(p);
		if (r.length > 0 && !_.layoutNotes) throw Error("Footnote layout requires a note-capable layout session");
		let a = r.length === 0 ? Object.freeze([]) : _.layoutNotes({
			kind: "footnote",
			referenceIds: Object.freeze(r),
			pageIndex: p.flow.pageIndex,
			section: i.section,
			container: {
				id: `notes:page:${p.flow.pageIndex}`,
				kind: "footnote",
				bounds: {
					xPt: i.availableBounds.xPt,
					yPt: 0,
					widthPt: t,
					heightPt: i.section.geometry.pageHeight
				}
			},
			firstOnPage: n.size === 0
		});
		return Object.freeze({
			ids: Object.freeze(r),
			layouts: a,
			reservePt: a.reduce((e, t) => e + t.advancePt, 0)
		});
	}, O = (e, t, n) => {
		let r = S.get(p.flow.pageIndex);
		r || (r = /* @__PURE__ */ new Set(), S.set(p.flow.pageIndex, r)), e.forEach((e) => r.add(e));
		let i = w.get(p.flow.pageIndex) ?? [];
		i.push(...t), w.set(p.flow.pageIndex, i), C.set(p.flow.pageIndex, (C.get(p.flow.pageIndex) ?? 0) + n), p = Hp(p, n);
	}, k = () => Math.max(0, Dy(p) - p.footnoteReservePt - p.flow.deepestColumnBlockPt), A = (e) => e > k(), j = null, M = Gm(e.sequence), N = null;
	bodyEntries: for (let t = 0; t < e.sequence.length; t += 1) {
		yield p.pages.length, o?.shouldPublish(p.pages.length) && o.publish(Ry(p, c, _, u, C, w, N), t);
		let n = e.sequence[t];
		if (n.kind === "consume-source") continue;
		if (n.kind === "authored-break") {
			if (j = null, n.break === "column" && !M.has(t)) continue;
			x(km(p.flow, n.break, n.parity), t + 1);
			continue;
		}
		if (n.kind === "begin-section") {
			j = null;
			let e = mi(Ey(p).section.textDirection), i = mi(by(n.section, p.flow.pageIndex).textDirection), a = bi({
				widthPt: Ey(p).section.geometry.pageWidth,
				heightPt: Ey(p).section.geometry.pageHeight
			}, e), o = by(n.section, p.flow.pageIndex), s = bi({
				widthPt: o.geometry.pageWidth,
				heightPt: o.geometry.pageHeight
			}, i), c = n.section.startType === "continuous" && (e !== i || a.widthPt !== s.widthPt || a.heightPt !== s.heightPt) ? "nextPage" : n.section.startType, l = wy(n.section, p.flow.pageIndex, r[p.flow.pageIndex] ?? {
				top: 0,
				bottom: 0
			});
			try {
				x(Am(p.flow, xy(n.section, p.flow.pageIndex), c, {
					hasFootnoteReferenceOnCurrentPage: T(p.flow.pageIndex),
					incomingPageContentStartBlockPt: l.blockStartPt,
					incomingPageContentEndBlockPt: l.blockEndPt
				}), t + 1);
			} catch (e) {
				if (!(e instanceof hm) || p.flow.pageIndex === 0) throw e;
				let t = p.flow.pageIndex;
				p = Object.freeze({
					...p,
					pages: Object.freeze(p.pages.filter((e) => e.accumulator.pageIndex < t))
				}), N = Object.freeze({
					code: "UNSUPPORTED_FEATURE",
					severity: "error",
					source: n.source,
					message: `Document layout stopped after the last complete page because a nextColumn section could not be placed safely (${e.reason})`
				});
				break bodyEntries;
			}
			continue;
		}
		let i = n.kind === "adjacent-table-group" ? n : n.block;
		if (i.kind === "paragraph") {
			if (i.continuousSectionRole === "collapse-mark") continue;
			i.pageBreakBefore && x(km(p.flow, "pageBreakBefore"), t);
			let n = j?.spaceAfterPt ?? 0, a = xg(j, i, n, i.continuousSectionRole === "suppress-before" ? 0 : i.spaceBeforePt), o = i.continuousSectionRole === "drop-previous-after" ? n : a.overlap;
			o > 0 && (p = Object.freeze({
				...p,
				flow: Object.freeze({
					...p.flow,
					cursorBlockPt: Math.max(p.flow.regionStartBlockPt, p.flow.cursorBlockPt - o)
				})
			}));
			let s = Object.freeze({ boundary: null });
			for (; s;) {
				let n = jy(s), o = Oy(p), c = _.measureParagraph({
					input: i,
					location: o,
					availableInlineExtentPt: o.availableBounds.widthPt,
					suppressSpaceBefore: s.boundary !== null || i.continuousSectionRole === "suppress-before" || a.suppressBefore || s.boundary === null && !p.flow.pageHasContent && g === t,
					continuation: s
				});
				if (c.placement) {
					let e = E(c.layout, o.availableBounds.widthPt, c.retainedFootnoteReferenceIds), r = c.relocationBlockExtentPt, a = c.placement.sectionFlowOwnership === "page" ? e.reservePt : (r ?? c.blockExtentPt) + e.reservePt, d = v(p), f = A(e.reservePt);
					if (hy(e.reservePt, a, d), (a > o.availableBounds.heightPt || f) && a <= d && p.flow.pageHasContent) {
						x(f ? Em(p.flow, p.flow.section, "overflow") : xm(p.flow, "overflow"), t);
						continue;
					}
					p = Ay(p, c.layout, i.source, c.blockExtentPt, n, l, u, c.placement), O(e.ids, e.layouts, e.reservePt), c.flowRegistryDelta && _.commitFlowRegistryDelta(c.flowRegistryDelta), s = null, _.moveAcquisitionCursor(Oy(p));
					continue;
				}
				if (s.boundary === null && i.keepNext && p.flow.pageHasContent) {
					let n = c.blockExtentPt, r = new Set(Rv(c.layout)), a = !1, s = zm({
						keepNext: i.keepNext,
						inkless: i.inkless === !0,
						undecoratedMark: Ny(c.layout)
					});
					for (let i = t + 1; i < e.sequence.length; i += 1) {
						let t = e.sequence[i];
						if (t.kind === "consume-source") continue;
						if (t.kind === "authored-break" || t.kind === "begin-section") break;
						let c = t.kind === "adjacent-table-group" ? t : t.block;
						if (c.kind === "paragraph" && c.pageBreakBefore) break;
						let l = _.measureFollowingBlock({
							input: c,
							location: o,
							availableInlineExtentPt: o.availableBounds.widthPt
						}), u = c.kind === "paragraph" && (c.keepNext || s);
						if (s = !1, n += u ? l.fullExtentPt : l.leadContentExtentPt, (u ? l.fullFootnoteReferenceIds : l.leadFootnoteReferenceIds)?.forEach((e) => r.add(e)), !u) {
							a = !0;
							break;
						}
						if (n > v(p)) break;
					}
					let l = D([...r], o.availableBounds.widthPt).reservePt, u = n + l;
					if (a && u > o.availableBounds.heightPt && u <= v(p)) {
						x(xm(p.flow, "overflow"), t, !0);
						continue;
					}
				}
				let d = e.sequence[t + 1], f = e.sequence[t + 2], m = d?.kind === "body-block" && d.block.kind === "paragraph" && f?.kind === "authored-break" && f.break === "page" && f.sameSourceParagraphAsPrevious !== !0, h = Hm(c.layout);
				if (s.boundary === null && h && m && p.flow.pageHasContent) {
					let e = Iy(o, c.blockExtentPt), n = _.measureParagraph({
						input: d.block,
						location: e,
						availableInlineExtentPt: e.availableBounds.widthPt,
						suppressSpaceBefore: !1,
						continuation: Object.freeze({ boundary: null })
					});
					_.moveAcquisitionCursor(o);
					let r = Um(n.layout, e.cursorPt.yPt);
					if (r !== null) {
						let e = c.blockExtentPt + r;
						if (e > o.availableBounds.heightPt && e <= v(p)) {
							x(xm(p.flow, "overflow"), t);
							continue;
						}
					}
				}
				let y = e.sequence[t + 1], b = y?.kind === "authored-break" && y.break === "page";
				if (s.boundary === null && b) {
					let e = Wm(c.layout);
					if (e !== null) {
						p = Ay(p, e, i.source, 0, n, l, u), c.flowRegistryDelta && _.commitFlowRegistryDelta(c.flowRegistryDelta), s = null, _.moveAcquisitionCursor(Oy(p));
						continue;
					}
				}
				let S = E(c.layout, o.availableBounds.widthPt).reservePt, C = (r[p.flow.pageIndex]?.bottom ?? 0) === 0 && p.footnoteReservePt === 0, w = Dy(p) === Ey(p).blockEndPt, T = y?.kind === "begin-section" && y.section.startType === "nextPage", k = mu({
					hasContinuationBoundary: s.boundary !== null,
					inkless: i.inkless === !0,
					undecorated: Ny(c.layout),
					keepNext: i.keepNext,
					markReservePt: S,
					pageBottomIsUnreserved: C,
					physicalRegionBottomIsActive: w,
					hasFollowingInk: My(e, t + 1),
					followsNextPageSectionBoundary: T,
					markExtentPt: c.blockExtentPt,
					markBelowBaselinePt: c.markBelowBaselinePt ?? 0
				}), j = Av(c.layout, s, c.fragmentation, o.availableBounds.heightPt + k, v(p), p.flow.pageHasContent, {
					keepLines: i.keepLines,
					widowControl: i.widowControl,
					authoredSpaceAfterPt: i.spaceAfterPt,
					writingMode: Ey(p).writingMode
				}, (e) => E(e, o.availableBounds.widthPt).reservePt, c.uniformRubyAdvancePt, (e) => !A(e));
				if (j.requiresFreshFlowRegion) {
					x(xm(p.flow, "overflow"), t);
					continue;
				}
				if (!j.fragment) throw Error("Paragraph acquisition made no progress");
				p = Ay(p, j.fragment, i.source, Math.min(j.admittedBlockExtentPt, o.availableBounds.heightPt), n, l, u, c.placement);
				let M = E(j.fragment, o.availableBounds.widthPt);
				if (hy(M.reservePt, j.fragment.advancePt + M.reservePt, v(p)), O(M.ids, M.layouts, M.reservePt), c.flowRegistryDelta) {
					let e = vy(c.flowRegistryDelta, j.fragment);
					e && _.commitFlowRegistryDelta(e);
				}
				s = j.nextCursor, s && x(xm(p.flow, "overflow"), t), o = Oy(p), _.moveAcquisitionCursor(o);
			}
			j = i;
		} else {
			j = null;
			let e, n = !1;
			for (; !n;) {
				let r = Fy(e), a = Oy(p), o = (t) => _.measureTable({
					input: i,
					location: a,
					availableInlineExtentPt: a.availableBounds.widthPt,
					availableBlockExtentPt: t,
					freshPageBlockExtentPt: v(p),
					...e ? { cursor: e } : {}
				}), s = a.availableBounds.heightPt, c = o(s);
				if (c.retryAtBlockStartPt !== void 0) {
					if (!Number.isFinite(c.retryAtBlockStartPt) || c.retryAtBlockStartPt <= p.flow.cursorBlockPt) throw Error("Table repositioning must advance the block cursor");
					p = Object.freeze({
						...p,
						flow: Object.freeze({
							...p.flow,
							cursorBlockPt: c.retryAtBlockStartPt
						})
					}), _.moveAcquisitionCursor(Oy(p));
					continue;
				}
				let d = c.requiresFreshFlowRegion ? Object.freeze({
					ids: Object.freeze([]),
					layouts: Object.freeze([]),
					reservePt: 0
				}) : E(c.layout, a.availableBounds.widthPt), f = Object.freeze({
					reservePt: d.reservePt,
					chargePt: c.blockExtentPt + d.reservePt
				}), m = /* @__PURE__ */ new Set(), h = (e, t) => e <= t || e - t <= 2 ** -52 * Math.max(1, Math.abs(e), Math.abs(t));
				for (; !c.requiresFreshFlowRegion && !h(c.blockExtentPt + d.reservePt, a.availableBounds.heightPt);) {
					let e = JSON.stringify({
						advancePt: c.blockExtentPt,
						nextCursor: c.nextCursor ?? null,
						noteIds: d.ids,
						reservePt: d.reservePt
					});
					if (m.has(e)) throw hy(f.reservePt, f.chargePt, v(p)), Error("Table footnote admission did not converge");
					m.add(e), s = Math.max(0, a.availableBounds.heightPt - d.reservePt), c = o(s), d = c.requiresFreshFlowRegion ? Object.freeze({
						ids: Object.freeze([]),
						layouts: Object.freeze([]),
						reservePt: 0
					}) : E(c.layout, a.availableBounds.widthPt), c.requiresFreshFlowRegion || (f = Object.freeze({
						reservePt: d.reservePt,
						chargePt: c.blockExtentPt + d.reservePt
					}));
				}
				if (c.requiresFreshFlowRegion) {
					hy(f.reservePt, f.chargePt, v(p));
					let n = !p.flow.pageHasContent && c.nextCursor?.kind === "table" && c.nextCursor.floatingContinuationFrame === "fresh-text" && !(e?.kind === "table" && e.floatingContinuationFrame !== void 0);
					if (c.nextCursor?.kind === "table" && c.nextCursor.floatingContinuationFrame !== void 0 && (e = c.nextCursor), n) continue;
					x(xm(p.flow, "overflow"), t);
					continue;
				}
				if (A(d.reservePt) && p.flow.pageHasContent) {
					x(Em(p.flow, p.flow.section, "overflow"), t);
					continue;
				}
				p = Ay(p, c.layout, i.source, c.blockExtentPt, r, l, u, c.placement), O(d.ids, d.layouts, d.reservePt), c.flowRegistryDelta && _.commitFlowRegistryDelta(_y(c.flowRegistryDelta, c.layout, tt(i.source, a.flowDomainId, r))), e = c.nextCursor ?? void 0, n = e === void 0, e && x(xm(p.flow, "overflow"), t);
			}
		}
		_.moveAcquisitionCursor(Oy(p));
	}
	let P = new Set([...C.keys(), ...w.keys()]);
	for (let e of P) {
		let t = C.get(e) ?? 0, n = (w.get(e) ?? []).reduce((e, t) => e + t.advancePt, 0);
		if (t !== n) throw new V("INVALID_GEOMETRY", `Page ${e} footnote reserve ${t} does not equal retained advance ${n}`);
	}
	return Ry(p, c, _, u, C, w, N);
}
function Vy(e, t) {
	return Object.freeze(e.layout.pages.map((n, r) => {
		if (n.parityBlank || mi(n.section.textDirection) !== "horizontal-tb") return Object.freeze({
			top: 0,
			bottom: 0
		});
		let i = t.get(n.sectionOccurrenceId);
		if (!i) throw Error(`Unknown body section ${n.sectionOccurrenceId}`);
		let a = Math.max(0, n.section.geometry.pageWidth - Math.abs(n.section.geometry.marginLeft) - Math.abs(n.section.geometry.marginRight)), o = (t) => {
			let o = ey(t === "header" ? i.headers : i.footers, {
				titlePage: i.titlePage,
				firstPageOfSection: $v(e.layout.pages, r),
				evenAndOddHeaders: i.evenAndOddHeaders,
				displayPageNumber: n.pageNumber.displayNumber
			});
			if (o === null) return 0;
			if (!e.session.layoutStory) throw Error("Header/footer story layout requires a story-capable layout session");
			return e.session.layoutStory({
				source: o,
				pageIndex: n.pageIndex,
				section: n.section,
				container: {
					id: `story:${t}:page:${n.pageIndex}`,
					kind: t,
					bounds: {
						xPt: Math.abs(n.section.geometry.marginLeft),
						yPt: 0,
						widthPt: a,
						heightPt: n.section.geometry.pageHeight
					}
				}
			}).advancePt;
		};
		return Object.freeze({
			top: ny(o("header"), n.section.geometry.marginTop, n.section.geometry.headerDistance),
			bottom: ny(o("footer"), n.section.geometry.marginBottom, n.section.geometry.footerDistance)
		});
	}));
}
function Hy(e, t, n, r) {
	let i = e.pages.map((i, a) => {
		if (i.parityBlank) return i;
		let o = n.get(i.sectionOccurrenceId);
		if (!o) throw Error(`Unknown body section ${i.sectionOccurrenceId}`);
		if (!t.layoutStory) {
			if (!(Object.values(o.headers).some((e) => e !== null) || Object.values(o.footers).some((e) => e !== null) || (r.get(i.pageIndex)?.length ?? 0) > 0)) return i;
			throw Error("Page-story composition requires a story-capable layout session");
		}
		let s = mi(i.section.textDirection) !== "horizontal-tb", c = s ? xu(i.section.geometry) : i.section.geometry, l = Math.abs(c.marginLeft), u = Math.max(0, c.pageWidth - Math.abs(c.marginLeft) - Math.abs(c.marginRight)), d = s ? "upright-physical" : "section-logical", f = s ? Object.freeze({
			...i.section,
			geometry: Object.freeze({ ...c }),
			columns: Object.freeze([Object.freeze({
				xPt: l,
				wPt: u
			})]),
			textDirection: "lrTb"
		}) : i.section, p = (t) => ey(t === "header" ? o.headers : o.footers, {
			titlePage: o.titlePage,
			firstPageOfSection: $v(e.pages, a),
			evenAndOddHeaders: o.evenAndOddHeaders,
			displayPageNumber: i.pageNumber.displayNumber
		}), m = (e) => {
			let n = p(e);
			if (n === null) return null;
			let r = t.layoutStory({
				source: n,
				pageIndex: i.pageIndex,
				section: f,
				container: {
					id: `story:${e}:page:${i.pageIndex}`,
					kind: e,
					bounds: {
						xPt: l,
						yPt: 0,
						widthPt: u,
						heightPt: c.pageHeight
					}
				}
			});
			return uy(r, {
				xPt: 0,
				yPt: (e === "header" ? c.headerDistance : c.pageHeight - c.footerDistance - r.advancePt) - r.flowBounds.yPt
			});
		}, h = m("header"), g = m("footer"), _ = r.get(i.pageIndex) ?? [], v = _.reduce((e, t) => e + t.advancePt, 0), y = i.sectionRegions[0], b = (y?.blockEndPt ?? Math.max(0, i.section.geometry.pageHeight - Math.abs(i.section.geometry.marginBottom))) - v, x = b, S = _.map((e) => {
			let t = dy(e, {
				xPt: 0,
				yPt: x - e.flowBounds.yPt
			});
			return x += e.advancePt, t;
		}), C = S.length === 0 ? 0 : Math.min(...S.map((e) => e.flowBounds.xPt)), w = S.length === 0 ? 0 : Math.max(...S.map((e) => e.flowBounds.xPt + e.flowBounds.widthPt)), T = Object.freeze({
			xPt: C,
			yPt: b,
			widthPt: w - C,
			heightPt: v
		}), E = y ? Object.freeze(wi(y.coordinateSpace.logicalToPhysical, T)) : T, D = [
			...h ? [Object.freeze({
				id: `story:header:page:${i.pageIndex}`,
				kind: "header",
				logicalBounds: Object.freeze({
					xPt: l,
					yPt: h.flowBounds.yPt,
					widthPt: u,
					heightPt: h.advancePt
				}),
				physicalBounds: Object.freeze({
					xPt: l,
					yPt: h.flowBounds.yPt,
					widthPt: u,
					heightPt: h.advancePt
				})
			})] : [],
			...S.length > 0 ? [Object.freeze({
				id: `notes:page:${i.pageIndex}`,
				kind: "footnote",
				...y ? { sectionRegionId: y.id } : {},
				logicalBounds: T,
				physicalBounds: E
			})] : [],
			...g ? [Object.freeze({
				id: `story:footer:page:${i.pageIndex}`,
				kind: "footer",
				logicalBounds: Object.freeze({
					xPt: l,
					yPt: g.flowBounds.yPt,
					widthPt: u,
					heightPt: g.advancePt
				}),
				physicalBounds: Object.freeze({
					xPt: l,
					yPt: g.flowBounds.yPt,
					widthPt: u,
					heightPt: g.advancePt
				})
			})] : []
		], O = i.layers.roots.map((e) => e), k = O.findIndex((e) => e.layer !== "background" && e.layer !== "behindText"), A = k < 0 ? O.length : k, j = [
			...O.slice(0, A),
			...h?.blocks.map((e) => ({
				layer: "header",
				node: e,
				coordinateSpace: d
			})) ?? [],
			...O.slice(A)
		], M = -1;
		for (let e = 0; e < j.length; e += 1) j[e].layer === "body" && (M = e);
		let N = M < 0 ? j.length : M + 1, P = [
			...j.slice(0, N),
			...S.map((e) => ({
				layer: "notes",
				node: e,
				coordinateSpace: "section-logical"
			})),
			...j.slice(N),
			...g?.blocks.map((e) => ({
				layer: "footer",
				node: e,
				coordinateSpace: d
			})) ?? []
		];
		return Object.freeze({
			...i,
			flowDomains: Object.freeze([...i.flowDomains, ...D]),
			layers: ii(P),
			readingOrder: Object.freeze([
				...h?.blocks.map((e) => e.id) ?? [],
				...i.readingOrder,
				...S.map((e) => e.id),
				...g?.blocks.map((e) => e.id) ?? []
			])
		});
	});
	return Object.freeze({
		...e,
		pages: Object.freeze(i)
	});
}
function Uy(e, t, n) {
	if (n.length === 0) return e;
	let r = -1;
	for (let t = e.pages.length - 1; t >= 0; --t) if (!e.pages[t].parityBlank) {
		r = t;
		break;
	}
	if (r < 0) return e;
	let i = e.pages[r];
	if (!t.layoutNotes) return Object.freeze({
		...e,
		diagnostics: Object.freeze([...e.diagnostics, Object.freeze({
			code: "UNSUPPORTED_FEATURE",
			severity: "error",
			source: Object.freeze({
				story: "endnote",
				storyInstance: n[0],
				path: Object.freeze([])
			}),
			message: "Document-end notes require a note-capable layout session"
		})])
	});
	let a = new Map(i.flowDomains.map((e) => [e.id, e])), o = i.layers.body.filter((e) => e.ordinaryFlow && a.get(e.flowDomainId)?.kind === "body").reduce((e, t) => e === null || t.flowBounds.yPt + t.flowBounds.heightPt > e.flowBounds.yPt + e.flowBounds.heightPt ? t : e, null), s = o ? a.get(o.flowDomainId) : [...i.flowDomains].reverse().find((e) => e.kind === "body");
	if (!s) return Object.freeze({
		...e,
		diagnostics: Object.freeze([...e.diagnostics, Object.freeze({
			code: "UNSUPPORTED_FEATURE",
			severity: "error",
			message: "Document-end notes require a retained body flow domain"
		})])
	});
	let c = i.sectionRegions.find((e) => e.flowDomainIds.includes(s.id)) ?? i.sectionRegions[0], l = o ? o.flowBounds.yPt + o.flowBounds.heightPt : s.logicalBounds.yPt, u = i.layers.notes.filter((e) => e.kind === "note" && e.source.story === "footnote").reduce((e, t) => Math.min(e, t.flowBounds.yPt), s.logicalBounds.yPt + s.logicalBounds.heightPt), d = Math.min(s.logicalBounds.yPt + s.logicalBounds.heightPt, u), f = `endnotes:page:${i.pageIndex}`;
	try {
		let a = t.layoutNotes({
			kind: "endnote",
			referenceIds: Object.freeze([...n]),
			pageIndex: i.pageIndex,
			section: c?.section ?? i.section,
			container: {
				id: f,
				kind: "endnote",
				bounds: {
					xPt: s.logicalBounds.xPt,
					yPt: l,
					widthPt: s.logicalBounds.widthPt,
					heightPt: Math.max(0, d - l)
				}
			},
			firstOnPage: !0
		});
		if (a.length === 0) return e;
		let o = a.reduce((e, t) => e + t.advancePt, 0), u = Object.freeze({
			xPt: s.logicalBounds.xPt,
			yPt: l,
			widthPt: s.logicalBounds.widthPt,
			heightPt: o
		}), p = Object.freeze({
			id: f,
			kind: "endnote",
			...c ? { sectionRegionId: c.id } : {},
			logicalBounds: u,
			physicalBounds: c ? Object.freeze(wi(c.coordinateSpace.logicalToPhysical, u)) : u
		}), m = i.layers.roots.map((e) => e), h = -1;
		for (let e = 0; e < m.length; e += 1) m[e].layer === "body" && (h = e);
		h += 1, m.splice(h, 0, ...a.map((e) => ({
			layer: "notes",
			node: e,
			coordinateSpace: "section-logical"
		})));
		let g = new Set(i.layers.body.map((e) => e.id)), _ = -1;
		for (let e = 0; e < i.readingOrder.length; e += 1) g.has(i.readingOrder[e]) && (_ = e);
		_ += 1;
		let v = [...i.readingOrder];
		v.splice(_, 0, ...a.map((e) => e.id));
		let y = [...e.pages];
		return y[r] = Object.freeze({
			...i,
			flowDomains: Object.freeze([...i.flowDomains, p]),
			layers: ii(m),
			readingOrder: Object.freeze(v)
		}), Object.freeze({
			...e,
			pages: Object.freeze(y)
		});
	} catch (t) {
		if (!(t instanceof Lp) || t.kind !== "endnote" || t.pageIndex !== i.pageIndex || t.containerId !== f) throw t;
		return Object.freeze({
			...e,
			diagnostics: Object.freeze([...e.diagnostics, Object.freeze({
				code: "UNSUPPORTED_FEATURE",
				severity: "error",
				source: Object.freeze({
					story: "endnote",
					storyInstance: n[0],
					path: Object.freeze([])
				}),
				message: `Document-end notes do not fit the retained terminal flow region: ${t instanceof Error ? t.message : String(t)}`
			})])
		});
	}
}
function Wy(e, t, n, r) {
	return Object.freeze({
		...e,
		diagnostics: Object.freeze([...e.diagnostics, Object.freeze({
			code: "UNSUPPORTED_FEATURE",
			severity: "error",
			message: `Unsupported ${t} position ${JSON.stringify(n)}; retained layout uses the ${r} fallback`
		})])
	});
}
function Gy(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.pages) for (let e of n.layers.body) if (e.kind === "paragraph") for (let r of e.drawings) {
		let i = r.anchorLayer;
		if (!i || i.horizontalOwnership !== "page" || i.verticalOwnership !== "page") continue;
		let a = i.acquisitionOccurrenceId ?? i.occurrenceId;
		t.set(a, Object.freeze({
			occurrenceId: a,
			paragraphSource: e.source,
			pageIndex: n.pageIndex,
			flowDomainId: e.flowDomainId
		}));
	}
	return t;
}
function Ky(e) {
	return JSON.stringify([...e].sort(([e], [t]) => e.localeCompare(t)));
}
function* qy(e, t, n, r, i, a) {
	if (!e.sequence.some((e) => e.kind === "body-block" && e.block.kind === "paragraph" && (e.block.pageOwnedAnchorOccurrenceIds?.length ?? 0) > 0)) return yield* By(e, t, n, r, null, i, a);
	try {
		return (yield* Bo({
			step: function* (o) {
				let s = yield* By(e, t, n, r, o?.plan ?? null, i, o === void 0 ? a : void 0);
				return Object.freeze({
					pass: s,
					plan: Gy(s.layout)
				});
			},
			stateOf: (e) => Ky(e.plan),
			limit: 16
		})).value.pass;
	} catch (e) {
		throw e instanceof Ro ? new V("NON_CONVERGENCE", e.reason === "cycle" ? "Page-anchor destination acquisition repeated an exact-state cycle" : "Page-anchor destination acquisition reached the operational pass limit 16") : e;
	}
}
function Jy(e) {
	let t = [], n = e.initialSection;
	for (let r of e.sequence) r.kind === "begin-section" && (r.section.startType === "continuous" && t.push(Object.freeze({
		outgoingSectionOccurrenceId: n.sectionOccurrenceId,
		incomingSectionOccurrenceId: r.section.sectionOccurrenceId
	})), n = r.section);
	return Object.freeze(t);
}
function Yy(e, t, n) {
	for (let r of e.pages) for (let e = 0; e + 1 < r.sectionRegions.length; e += 1) {
		let i = r.sectionRegions[e], a = r.sectionRegions[e + 1];
		if (i.sectionOccurrenceId === t && a.sectionOccurrenceId === n) return Object.freeze({
			page: r,
			outgoing: i
		});
	}
	return null;
}
function* Xy(e, t, n, r, i) {
	let a = /* @__PURE__ */ new Map(), o = yield* qy(e, t, n, r, a, i);
	if (o.terminalDiagnostic !== null) return o;
	for (let i of Jy(e)) {
		let s = Yy(o.layout, i.outgoingSectionOccurrenceId, i.incomingSectionOccurrenceId);
		if (s === null || s.outgoing.flowDomainIds.length < 2) continue;
		let c = s.page.pageIndex, l = Wv(e, o.allocations, o.footnoteReserveByPage, s.page, s.outgoing), u = new Map(a);
		if (u.set(i.outgoingSectionOccurrenceId, Object.freeze({
			pageIndex: c,
			targetPt: l
		})), a = u, o = yield* qy(e, t, n, r, a), o.terminalDiagnostic !== null) return o;
	}
	return o;
}
function Zy(e, t, n, r, i) {
	let a = Kv(e.layout, e.session, e.allocations), o = t.noteLayoutSettings ?? Object.freeze({
		footnotePosition: "pageBottom",
		endnotePosition: "docEnd"
	}), s = Hy(a, e.session, n, e.footnoteLayoutsByPage), c = s.pages.some((e) => e.layers.notes.some((e) => e.source.story === "footnote")) && o.footnotePosition !== "pageBottom" ? Wy(s, "footnote", o.footnotePosition, "pageBottom") : s, l = i ? new Set(a.pages.flatMap((e) => e.layers.body.flatMap((e) => e.kind === "paragraph" || e.kind === "table" ? zv(e) : []))) : /* @__PURE__ */ new Set(), u = (t.endnoteIds ?? []).filter((e) => l.has(e)), d = Uy(c, e.session, u), f = u.length > 0 && o.endnotePosition !== "docEnd" ? Wy(d, "endnote", o.endnotePosition, "docEnd") : d, p = [...t.parserDiagnostics ?? [], ...e.terminalDiagnostic === null ? [] : [e.terminalDiagnostic]], m = p.length === 0 ? f : Object.freeze({
		...f,
		diagnostics: Object.freeze([...p, ...f.diagnostics])
	}), h = Object.freeze({
		...m,
		pages: Object.freeze(m.pages.map(Xu))
	});
	return r.showTrackedChanges === !0 ? Zv(h) : h;
}
function* Qy(e, t, n, r) {
	t = Fr(t);
	let i = yy(e), a = 1, o = !1, s = yield* Xy(e, t, n, [], r ? {
		shouldPublish: (e) => !o && e >= a,
		publish: (t, s) => {
			try {
				let o = Zy(t, e, i, n, !1), c = Object.freeze({
					...o,
					pages: Object.freeze(o.pages.slice(0, -1))
				});
				c.pages.length > 0 && r.onPages(c, s), a = Math.max(t.layout.pages.length + 1, t.layout.pages.length * 2);
			} catch {
				o = !0;
			}
		}
	} : void 0), c = (yield* ry({
		seed: s,
		measure: (e) => Vy(e, i),
		repaginate: function* (r, i) {
			let a = Sg(i.layout);
			return yield* Xy(e, Lr(t, {
				totalPages: i.layout.pages.length,
				resolveDestinationPage: (e) => a[e]
			}), n, r);
		},
		identity: (e) => Sg(e.layout),
		requiresConvergence: s.session.hasPaginationFields
	})).result;
	return Ld(Zy(c, e, i, n, !0));
}
function $y(e, t, n) {
	return zy(Qy(e, t, n));
}
//#endregion
//#region packages/docx/src/layout/pagination-scheduler.ts
var eb = 16;
function tb() {
	let e = globalThis.performance?.now;
	return e ? e.call(globalThis.performance) : Date.now();
}
function nb() {
	let e = globalThis.MessageChannel;
	return e ? new Promise((t) => {
		let n = new e();
		n.port1.onmessage = () => {
			n.port1.close(), n.port2.close(), t();
		}, n.port2.postMessage(null);
	}) : new Promise((e) => {
		setTimeout(e, 0);
	});
}
var rb = class extends Error {
	constructor() {
		super("Pagination was aborted"), this.name = "PaginationAbortError";
	}
};
async function ib(e, t = {}) {
	let n = t.sliceMs ?? eb, r = t.now ?? tb, i = t.yieldToHost ?? nb, { signal: a, onProgress: o } = t, s = r(), c = e.next();
	for (; !c.done;) {
		if (o?.(c.value), a?.aborted) throw e.return(void 0), new rb();
		r() - s >= n && (await i(), s = r()), c = e.next();
	}
	return c.value;
}
//#endregion
//#region packages/docx/src/layout/document.ts
function ab(e, t, n = di(void 0, Date.now())) {
	return $y(e, t, n);
}
function ob(e, t, n = di(void 0, Date.now()), r) {
	return ib(Qy(e, t, n), r);
}
function sb(e, t, n) {
	if (kr(e)) return;
	let r = n();
	Bd({
		source: r,
		services: e,
		defaultCurrentDateMs: t,
		buildLayout: (t) => ab(r.bodyLayoutInput, e, t)
	});
}
//#endregion
//#region packages/docx/src/paint/math-resources.ts
async function cb(e, t) {
	if (e.length === 0) return {
		records: [],
		drawables: /* @__PURE__ */ new Map()
	};
	await t.loadMathJax();
	let n = [], r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set();
	for (let a of e) {
		if (i.has(a.resourceKey)) throw Error(`Duplicate math occurrence: ${a.resourceKey}`);
		i.add(a.resourceKey);
		try {
			let e = await t.mathMLToSvg(pe(a.nodes, a.display)), i = await he(e, "#000000");
			n.push({
				resourceKey: a.resourceKey,
				widthEm: e.widthEm,
				ascentEm: e.ascentEm,
				descentEm: e.descentEm,
				diagnostics: []
			}), r.set(a.resourceKey, i.source);
		} catch {
			n.push({
				resourceKey: a.resourceKey,
				widthEm: 0,
				ascentEm: 0,
				descentEm: 0,
				available: !1,
				diagnostics: [{
					code: "UNSUPPORTED_FEATURE",
					severity: "warning",
					message: "Math conversion failed; using the deterministic text fallback"
				}]
			});
		}
	}
	return {
		records: n,
		drawables: r
	};
}
//#endregion
//#region packages/docx/src/frame-geometry.ts
function lb(e, t) {
	switch (e) {
		case "margin": return {
			left: t.marginLeft,
			right: t.pageWidth - t.marginRight
		};
		case "page": return {
			left: 0,
			right: t.pageWidth
		};
		default: return {
			left: t.contentX,
			right: t.contentX + t.contentW
		};
	}
}
function ub(e, t, n, r) {
	switch (e) {
		case "margin": return {
			start: r.marginTop,
			end: r.pageH - r.marginBottom
		};
		case "page": return {
			start: 0,
			end: r.pageH
		};
		default: return {
			start: t,
			end: t + n
		};
	}
}
function db(e, t, n, r) {
	switch (e) {
		case "center": return t + (n - t - r) / 2;
		case "right":
		case "outside": return n - r;
		default: return t;
	}
}
function fb(e, t, n) {
	switch (e) {
		case "center": return t.start + (t.end - t.start - n) / 2;
		case "bottom":
		case "outside": return t.end - n;
		default: return t.start;
	}
}
function pb(e, t, n) {
	return e + t <= n.end ? e : Math.max(n.start, n.end - t);
}
function mb(e, t, n, r, i, a) {
	let o = e.dropCap === "drop" || e.dropCap === "margin", s = lb(e.hAnchor, t), c = ub(e.vAnchor, n, i, t), l = e.w == null ? r : e.w, u;
	if (o) u = Math.max(1, e.lines) * a;
	else {
		let t = e.h ?? 0;
		u = e.hRule === "exact" ? t : e.hRule === "atLeast" ? Math.max(t, i) : i;
	}
	let d;
	d = e.dropCap === "drop" ? s.left : e.dropCap === "margin" ? s.left - l : e.xAlign ? db(e.xAlign, s.left, s.right, l) : s.left + (e.x ?? 0);
	let f;
	f = o ? c.start : e.yAlign && e.vAnchor !== "text" ? fb(e.yAlign, c, u) : c.start + (e.y ?? 0), (e.vAnchor === "page" || e.vAnchor === "margin") && (f = pb(f, u, c));
	let p = e.wrap === "around" || e.wrap === "auto" ? e.hSpace : 0, m = e.vSpace;
	return {
		x: d,
		y: f,
		w: l,
		h: u,
		exLeft: d - p,
		exRight: d + l + p,
		exTop: f - m,
		exBottom: f + u + m
	};
}
function hb(e, t) {
	if (t.kind === "table" && t.tableOverlap === void 0) throw Error("Floating-table transport omitted tblOverlap");
	let n = t.x, r = t.y;
	if (t.avoidOverlap) {
		let i = {
			occurrenceId: "display-moving-float",
			paragraphId: t.paraId,
			bounds: {
				xPt: n,
				yPt: r,
				widthPt: t.w,
				heightPt: t.h
			},
			exclusionBounds: {
				xPt: n - t.dl,
				yPt: r - t.dt,
				widthPt: t.w + t.dl + t.dr,
				heightPt: t.h + t.dt + t.db
			}
		}, a = Qa({
			moving: t.kind === "table" ? {
				...i,
				kind: "table",
				tableOverlap: t.tableOverlap
			} : {
				...i,
				kind: t.kind === "frame" ? "frame" : "drawingml"
			},
			blockers: e.floats.map(Ka),
			avoidance: t.kind === "table" ? Ua(t.tableOverlap, t.paraId) : Wa(t.allowOverlap ?? !0, t.paraId),
			rightBoundaryPt: e.pageWidth,
			overlapEpsilonPt: Va,
			rightBoundarySlackPt: Ha
		});
		n = a.bounds.xPt, r = a.bounds.yPt;
	}
	let i = {
		mode: t.mode,
		imageKey: t.imageKey,
		imageX: n,
		imageY: r,
		imageW: t.w,
		imageH: t.h,
		xLeft: n - t.dl,
		xRight: n + t.w + t.dr,
		yTop: r - t.dt,
		yBottom: r + t.h + t.db,
		side: t.side,
		distLeft: t.dl,
		distRight: t.dr,
		distTop: t.dt,
		distBottom: t.db,
		paraId: t.paraId
	}, a = t.kind === "table" ? {
		...i,
		kind: "table",
		tableOverlap: t.tableOverlap
	} : {
		...i,
		kind: t.kind
	};
	return e.floats.push(a), a;
}
//#endregion
//#region packages/docx/src/layout/floating-table-transaction.ts
function gb(e) {
	return e.xPt + e.widthPt;
}
function _b(e) {
	return e.yPt + e.heightPt;
}
function vb(e, t, n, r) {
	return e === "center" ? t + (n - t - r) / 2 : e === "right" || e === "outside" ? n - r : t;
}
function yb(e, t, n, r) {
	return e === "center" ? t + (n - t - r) / 2 : e === "bottom" || e === "outside" ? n - r : t;
}
function bb(e, t, n, r, i = !1) {
	let a = e.horzSpecified ? e.horzAnchor === "page" ? t.page : e.horzAnchor === "margin" ? t.margin : t.text : t.text, o = e.vertAnchor === "page" ? t.page : e.vertAnchor === "margin" ? t.margin : t.text, s = e.xAlign ? vb(e.xAlign, a.xPt, gb(a), n) : a.xPt + e.xPt, c = e.yAlign && e.vertAnchor !== "text" ? yb(e.yAlign, o.yPt, _b(o), r) : o.yPt + e.yPt;
	return !i && (e.vertAnchor === "page" || e.vertAnchor === "margin") && c + r > _b(o) && (c = Math.max(o.yPt, _b(o) - r)), Object.freeze({
		x: s,
		y: c,
		w: n,
		h: r
	});
}
function xb(e, t, n, r) {
	return bb(e, t, n, r);
}
function Sb(e, t, n) {
	let r = e.child.columnWidthsPt.reduce((e, t) => e + t, 0), i = e.child.advancePt, a = e.positioning, o = Object.freeze({
		xPt: t,
		yPt: n,
		widthPt: r,
		heightPt: i
	}), s = Object.freeze({
		xPt: t - a.leftFromTextPt,
		yPt: n - a.topFromTextPt,
		widthPt: r + a.leftFromTextPt + a.rightFromTextPt,
		heightPt: i + a.topFromTextPt + a.bottomFromTextPt
	});
	return Object.freeze({
		kind: "resolved-floating-table-placement",
		occurrenceId: e.occurrenceId,
		xPt: t,
		yPt: n,
		bounds: o,
		exclusionBounds: s,
		overlap: e.overlap,
		child: e.child,
		source: e
	});
}
function Cb(e, t) {
	let n = e.child.columnWidthsPt.reduce((e, t) => e + t, 0), r = e.child.advancePt, i = xb(e.positioning, t, n, r), a = Gp(e.positioning);
	return Sb(e, a.x && e.acquiredTextOffsetPt ? t.text.xPt + e.acquiredTextOffsetPt.xPt : i.x, a.y && e.acquiredTextOffsetPt ? t.text.yPt + e.acquiredTextOffsetPt.yPt : i.y);
}
function wb(e, t, n) {
	return Object.freeze({
		coordinateSpace: e.coordinateSpace,
		flowDomainId: e.flowDomainId,
		baseEntries: e.entries,
		baseNextParagraphId: e.nextParagraphId,
		nextParagraphId: n,
		entries: Object.freeze([...t])
	});
}
function Tb(e, t) {
	if (t.coordinateSpace !== e.coordinateSpace || t.flowDomainId !== e.flowDomainId || t.entries !== e.baseEntries || t.nextParagraphId !== e.baseNextParagraphId) throw Error("Floating table registry delta base/domain mismatch");
	let n = new Set(t.entries.map((e) => e.occurrenceId));
	if (e.entries.some((e) => n.has(e.occurrenceId))) throw Error("Floating table registry delta was already committed");
	if (e.nextParagraphId !== e.baseNextParagraphId + e.entries.length) throw Error("Floating table registry delta sequence mismatch");
}
function Eb(e, t, n = "logical-page-points", r = "logical-page") {
	let i = /* @__PURE__ */ new Set();
	for (let t of e) {
		if (i.has(t.occurrenceId)) throw Error(`Duplicate float registry occurrence: ${t.occurrenceId}`);
		i.add(t.occurrenceId);
	}
	return Object.freeze({
		coordinateSpace: n,
		flowDomainId: r,
		base: Object.freeze([...e]),
		delta: Object.freeze([]),
		nextParagraphId: t
	});
}
function Db(e, t, n) {
	let r = [...n.base, ...n.delta], i = r.find((t) => t.occurrenceId === e.occurrenceId);
	if (i) return Object.freeze({
		placement: Object.freeze({
			...Sb(e, i.bounds.xPt, i.bounds.yPt),
			bounds: i.bounds,
			exclusionBounds: i.exclusionBounds
		}),
		transaction: n
	});
	let a = Cb(e, t), o = Qa({
		moving: {
			occurrenceId: e.occurrenceId,
			kind: "table",
			tableOverlap: e.overlap,
			paragraphId: n.nextParagraphId,
			bounds: a.bounds,
			exclusionBounds: a.exclusionBounds
		},
		blockers: r.filter((e) => e.kind !== "shape" || e.wrap !== void 0).map(Ga),
		avoidance: Ua(e.overlap, n.nextParagraphId),
		rightBoundaryPt: gb(t.page),
		overlapEpsilonPt: Va,
		rightBoundarySlackPt: Ha
	}), s = Sb(e, o.bounds.xPt, o.bounds.yPt), c = Object.freeze({
		kind: "table",
		occurrenceId: e.occurrenceId,
		overlap: e.overlap,
		paragraphId: n.nextParagraphId,
		bounds: s.bounds,
		exclusionBounds: s.exclusionBounds
	});
	return Object.freeze({
		placement: s,
		transaction: Object.freeze({
			coordinateSpace: n.coordinateSpace,
			flowDomainId: n.flowDomainId,
			base: n.base,
			delta: Object.freeze([...n.delta, c]),
			nextParagraphId: n.nextParagraphId + 1
		})
	});
}
//#endregion
//#region packages/docx/src/anchor-geometry.ts
function Ob(e, t, n) {
	let r = n.pageWidth, i = n.marginLeft, a = n.marginRight;
	switch (e ?? (t ? "margin" : "page")) {
		case "page": return {
			start: 0,
			end: r
		};
		case "leftMargin": return {
			start: 0,
			end: i
		};
		case "rightMargin": return {
			start: r - a,
			end: r
		};
		case "insideMargin": return {
			start: 0,
			end: i
		};
		case "outsideMargin": return {
			start: r - a,
			end: r
		};
		case "character":
		case "column": return {
			start: n.contentX,
			end: n.contentX + n.contentW
		};
		default: return {
			start: i,
			end: r - a
		};
	}
}
function kb(e, t, n, r) {
	let i = r.marginTop, a = r.marginBottom;
	switch (e ?? (t ? "paragraph" : "page")) {
		case "page": return {
			start: 0,
			end: r.pageH
		};
		case "topMargin": return {
			start: 0,
			end: i
		};
		case "bottomMargin": return {
			start: r.pageH - a,
			end: r.pageH
		};
		case "paragraph":
		case "line": return {
			start: n,
			end: r.pageH
		};
		default: return {
			start: i,
			end: r.pageH - a
		};
	}
}
function Ab(e, t, n, r, i, a, o, s) {
	let c = Ob(a, t, i);
	if (o != null) return c.start + (c.end - c.start) * o + n;
	if (!e) return c.start + n;
	let l = c.end - c.start, u = s ?? r, d = s == null ? 0 : n;
	switch (e) {
		case "center": return c.start + (l - u) / 2 + d;
		case "right":
		case "outside": return c.end - u + d;
		default: return c.start + d;
	}
}
function jb(e, t, n, r, i, a, o, s, c) {
	let l = kb(o, t, i, a);
	if (s != null) return l.start + (l.end - l.start) * s + n;
	if (!e) return l.start + n;
	let u = l.end - l.start, d = c ?? r, f = c == null ? 0 : n;
	switch (e) {
		case "center": return l.start + (u - d) / 2 + f;
		case "bottom":
		case "outside": return l.end - d + f;
		default: return l.start + f;
	}
}
//#endregion
//#region packages/docx/src/layout/section-orientation.ts
function Mb(e) {
	return Nb(e.textDirection);
}
function Nb(e) {
	return typeof e == "string" && Su(e);
}
function Pb(e) {
	return e === "btLr";
}
function Fb(e) {
	return {
		...e,
		...bu(e)
	};
}
function Ib(e) {
	return {
		...e,
		...xu(e)
	};
}
//#endregion
//#region packages/docx/src/layout/measurement-environment.ts
function Lb(e) {
	for (let t of e.body) {
		if (t.type !== "paragraph") continue;
		let e = t;
		if (typeof e.defaultFontSize == "number") return e.defaultFontSize;
		for (let t of e.runs) if (t.type === "text") return t.fontSize;
	}
	return 10;
}
function Rb(e) {
	return {
		pageIndex: e.pageIndex,
		totalPages: e.totalPages,
		displayPageNumber: e.displayPageNumber,
		pageNumberFormat: e.pageNumberFormat,
		currentDateMs: e.currentDateMs,
		showTrackedChanges: e.showTrackedChanges,
		revisionAuthorColor: e.revisionAuthorColor,
		noteNumbers: e.noteNumbers,
		noteReferenceNumber: e.noteReferenceNumber,
		pageWritingMode: mi(e.sectionLayout.textDirection),
		verticalCJK: e.verticalCJK && !e.verticalAllRotated,
		verticalPageFrame: e.verticalCJK === !0,
		documentHasEastAsianText: e.docEastAsian,
		useFeLayout: e.layoutSettings.compat.useFeLayout,
		balanceSingleByteDoubleByteWidth: e.layoutSettings.compat.balanceSingleByteDoubleByteWidth,
		characterSpacingControl: e.layoutSettings.characterSpacingControl,
		resolvedLocalFonts: e.resolvedLocalFonts,
		layoutServices: e.layoutServices,
		verticalGlyphMeasurement: e.verticalGlyphMeasurement
	};
}
function zb(e, t) {
	let n = al(t);
	return {
		type: n ? n.type : t.lineGrid.active ? e.sectionLayout.grid.kind : null,
		linePitchPt: t.lineGrid.active ? t.lineGrid.pitchPt : null,
		characterPitchPt: n?.characterPitchPt ?? null,
		charSpacePt: n?.charSpacePt ?? null
	};
}
//#endregion
//#region packages/docx/src/layout/acquisition-state.ts
var Bb = Object.freeze({
	story: "body",
	containers: Object.freeze([]),
	lineNumberingEligible: !0
});
function Vb(e) {
	let t = Math.max(0, e.pageH - e.marginTop - e.marginBottom);
	return {
		page: {
			xPt: 0,
			yPt: 0,
			widthPt: e.pageWidth,
			heightPt: e.pageH
		},
		margin: {
			xPt: e.marginLeft,
			yPt: e.marginTop,
			widthPt: Math.max(0, e.pageWidth - e.marginLeft - e.marginRight),
			heightPt: t
		},
		column: {
			xPt: e.contentX,
			yPt: e.marginTop,
			widthPt: e.contentW,
			heightPt: t
		},
		pageParity: e.pageIndex % 2 == 0 ? "odd" : "even"
	};
}
function Hb(e, t, n) {
	return dl(n, {
		numbering: t.numbering,
		...t.numbering ? { markerInput: e.acquisitionInputs.numberingMarkerShapeInput(t.numbering, Ws(t)) } : {},
		authoredFirstIndentPt: t.indentFirst,
		tabStops: t.tabStops,
		defaultTabPt: e.defaultTabPt,
		service: e.layoutServices?.text
	});
}
function Ub(e, t) {
	return Hb(e, t, lu(e.layoutSettings, e.sectionLayout, Bb, t));
}
function Wb(e, t) {
	return Hb(e, t, lu(e.layoutSettings, e.sectionLayout, e.storyContext ?? Bb, t));
}
function Gb(e) {
	return {
		...e,
		storyContext: Ql(e.storyContext ?? Bb)
	};
}
function Kb(e, t) {
	let n = e.retainedTablesBySourceIndex?.get(t);
	if (!n) throw Error("Table placement requires retained table acquisition");
	return n;
}
//#endregion
//#region packages/docx/src/layout/exact-length.ts
function qb(e, t) {
	let n = e < 0n ? -e : e, r = t < 0n ? -t : t;
	for (; r !== 0n;) [n, r] = [r, n % r];
	return n === 0n ? 1n : n;
}
function Jb(e, t) {
	if (t === 0n) throw RangeError("Exact length denominator must not be zero");
	let n = t < 0n ? -1n : 1n, r = qb(e, t);
	return Object.freeze({
		numerator: n * e / r,
		denominator: n * t / r
	});
}
var Yb = 768, Xb = 1100;
function Zb(e) {
	let t = /^([+-]?)(?:(\d+)(?:\.(\d*))?|\.(\d+))(?:[eE]([+-]?\d+))?$/.exec(e);
	if (!t) return null;
	let n = t[1] === "-", r = t[2] ?? "", i = t[3] ?? t[4] ?? "", a = Number(t[5] ?? "0");
	if (!Number.isSafeInteger(a)) return null;
	let o = `${r}${i}`, s = 0;
	for (; s < o.length && o.charCodeAt(s) === 48;) s += 1;
	if (s === o.length) return Jb(0n, 1n);
	let c = o.length - 1;
	for (; c > s && o.charCodeAt(c) === 48;) --c;
	let l = o.slice(s, c + 1), u = o.length - 1 - c, d = a - i.length + u, f = d + l.length - 1;
	if (l.length > Yb || Math.abs(f) > Xb) return null;
	let p = BigInt(l), m = 1n;
	return d >= 0 ? p *= 10n ** BigInt(d) : m = 10n ** BigInt(-d), n && (p = -p), Jb(p, m);
}
function Qb(e) {
	let t = /^(-?\d+)\/([1-9]\d*)$/.exec(e);
	if (!t) throw RangeError(`Invalid exact length key: ${e}`);
	return Jb(BigInt(t[1]), BigInt(t[2]));
}
function $b(e) {
	let t = Jb(e.numerator, e.denominator);
	return `${t.numerator}/${t.denominator}`;
}
function ex(e) {
	let t = Zb(e);
	return t ? $b(t) : null;
}
function tx(e) {
	if (!Number.isFinite(e) || e < 0) return null;
	let t = Zb(e.toString());
	return t ? $b(t) : null;
}
function nx(e, t) {
	let n = e.toString(2).length - t.toString(2).length;
	return (n >= 0 ? e < t << BigInt(n) : e << BigInt(-n) < t) && --n, n;
}
function rx(e, t, n) {
	let r = n >= 0 ? e << BigInt(n) : e, i = n < 0 ? t << BigInt(-n) : t, a = r / i, o = r % i * 2n - i;
	return o > 0n || o === 0n && a % 2n != 0n ? a + 1n : a;
}
function ix(e) {
	let t = Qb(e);
	if (t.numerator === 0n) return 0;
	let n = t.numerator < 0n, r = n ? -t.numerator : t.numerator, i = nx(r, t.denominator), a;
	if (i < -1022) {
		let e = rx(r, t.denominator, 1074);
		a = Number(e) * Number.MIN_VALUE;
	} else {
		let e = rx(r, t.denominator, 52 - i);
		e === 1n << 53n && (e >>= 1n, i += 1), a = i > 1023 ? Infinity : Number(e) * 2 ** (i - 52);
	}
	return n ? -a : a;
}
function ax(e, t) {
	let n = Qb(e), r = Qb(t);
	return $b(Jb(n.numerator * r.denominator + r.numerator * n.denominator, n.denominator * r.denominator));
}
function ox(e, t) {
	let n = Qb(e), r = Qb(t);
	return $b(Jb(n.numerator * r.numerator, n.denominator * r.denominator));
}
function sx(e, t) {
	let n = Qb(e), r = Qb(t);
	return $b(Jb(n.numerator * r.denominator - r.numerator * n.denominator, n.denominator * r.denominator));
}
function cx(e, t) {
	if (t === 0n) throw RangeError("Exact length divisor must not be zero");
	let n = Qb(e);
	return $b(Jb(n.numerator, n.denominator * t));
}
function lx(e, t) {
	let n = Qb(e), r = Qb(t), i = n.numerator * r.denominator - r.numerator * n.denominator;
	return i < 0n ? -1 : +(i > 0n);
}
//#endregion
//#region packages/docx/src/layout/table-columns.ts
var $ = 1e-9;
function ux(e, t, n, r) {
	let i = Number.isFinite(e) ? Math.max(0, e) : 0, a = Math.max(0, t), o = a + Math.max(1, n);
	return {
		startPt: a === 0 ? i : i / 2,
		endPt: o >= Math.max(0, r) ? i : i / 2
	};
}
function dx(e) {
	return typeof e == "number" && Number.isFinite(e) ? Math.max(0, e) : 0;
}
function fx(e) {
	return e.map((e) => Math.abs(e) <= $ ? 0 : e);
}
function px(e) {
	let t = e.gridWidthsPt.length;
	for (let n of e.rows) {
		for (let e of n.cells) t = Math.max(t, e.columnStart + Math.max(1, e.columnSpan));
		let e = n.cells.reduce((e, t) => Math.max(e, t.columnStart + Math.max(1, t.columnSpan)), n.before?.columnSpan ?? 0);
		t = Math.max(t, e + (n.after?.columnSpan ?? 0));
	}
	return t;
}
function mx(e, t, n) {
	let r = 0, i = Math.min(e.length, t + Math.max(1, n));
	for (let n = Math.max(0, t); n < i; n += 1) r += e[n] ?? 0;
	return r;
}
function hx(e, t) {
	return e ? e.kind === "pct" ? dx(e.value) * t : dx(e.value) : null;
}
function gx(e, t, n, r) {
	let i = Math.max(0, t), a = Math.max(1, Math.min(n, e.length - i));
	if (a <= 0) return;
	let o = mx(e, i, a);
	if (o <= $) {
		e[i + a - 1] = r;
		return;
	}
	let s = r / o;
	for (let t = i; t < i + a; t += 1) e[t] = (e[t] ?? 0) * s;
}
function _x(e, t, n, r) {
	let i = Math.max(0, t), a = Math.max(1, Math.min(n, e.length - i));
	if (a <= 0) return;
	let o = mx(e, i, a);
	r <= o + $ || (e[i + a - 1] += r - o);
}
function vx(e, t) {
	let n = [];
	e.before && e.before.columnSpan > 0 && n.push({
		start: 0,
		span: e.before.columnSpan,
		preferred: e.before.preferredWidth
	});
	for (let t of e.cells) n.push({
		start: t.columnStart,
		span: t.columnSpan,
		preferred: t.preferredWidth
	});
	return e.after && e.after.columnSpan > 0 && n.push({
		start: Math.max(0, t - e.after.columnSpan),
		span: e.after.columnSpan,
		preferred: e.after.preferredWidth
	}), n;
}
function yx(e, t) {
	let n = Array.from({ length: t }, (t, n) => dx(e.gridWidthsPt[n] ?? 0)), r = n.reduce((e, t) => e + t, 0), i = e.tablePreferredWidthPt ?? (r > 0 ? r : dx(e.availableWidthPt));
	e.rows.forEach((e, r) => {
		for (let a of vx(e, t)) {
			let e = hx(a.preferred, i);
			e !== null && (r === 0 ? gx(n, a.start, a.span, e) : _x(n, a.start, a.span, e));
		}
	}), e.tablePreferredWidthPt === null && bx(n, e.rows);
	let a = e.tablePreferredWidthPt, o = n.reduce((e, t) => e + t, 0);
	if (a !== null && a >= 0 && o <= $ && n.length > 0) return n.map(() => a / n.length);
	if (a !== null && a >= 0 && o > $) {
		let e = a / o;
		return n.map((t) => t * e);
	}
	return n;
}
function bx(e, t) {
	let n = Array(e.length).fill(0);
	for (let r of t) for (let t of r.cells) {
		if (t.columnSpan !== 1 || t.preferredWidth?.kind !== "pct") continue;
		let r = t.columnStart;
		r < 0 || r >= e.length || (n[r] = Math.max(n[r] ?? 0, dx(t.preferredWidth.value)));
	}
	let r = e.reduce((e, t) => e + t, 0), i = n.map((t, n) => t * r > e[n] + $), a = /* @__PURE__ */ new Set();
	for (; i.some(Boolean);) {
		let t = i.map((e) => e ? "1" : "0").join("");
		if (a.has(t)) return;
		a.add(t);
		let o = 0, s = 0;
		for (let t = 0; t < e.length; t += 1) i[t] ? s += n[t] ?? 0 : o += e[t] ?? 0;
		if (s >= 1 - $) return;
		r = o / (1 - s);
		let c = n.map((t, n) => t * r > e[n] + $);
		if (c.every((e, t) => e === i[t])) {
			for (let t = 0; t < e.length; t += 1) i[t] && (e[t] = n[t] * r);
			return;
		}
		i = c;
	}
}
function xx(e, t, n) {
	let r = Array(t).fill(0), i = Array(t).fill(0);
	for (let n of e) for (let e of n.cells) e.columnSpan !== 1 || e.columnStart < 0 || e.columnStart >= t || (r[e.columnStart] = Math.max(r[e.columnStart] ?? 0, dx(e.minContentWidthPt)), i[e.columnStart] = Math.max(i[e.columnStart] ?? 0, dx(e.maxContentWidthPt)));
	let a = Array(t).fill(!1);
	for (let o of e) for (let e of o.cells) {
		let o = e.columnStart;
		if (e.columnSpan !== 1 || o < 0 || o >= t || a[o] || e.preferredWidth === null) continue;
		let s = hx(e.preferredWidth, n);
		s !== null && (i[o] = Math.max(r[o] ?? 0, s), a[o] = !0);
	}
	for (let e = 0; e < t; e += 1) i[e] = Math.max(r[e] ?? 0, i[e] ?? 0);
	return {
		minimums: r,
		maximums: i
	};
}
function Sx(e, t, n, r, i) {
	let a = Math.min(e.length, n + r), o = e.map((e, t) => t).filter((e) => e < n || e >= a), s = o.map((n) => Math.max(0, e[n] - (t[n] ?? 0))), c = s.reduce((e, t) => e + t, 0), l = Math.min(i, c);
	return l <= $ || c <= $ ? 0 : (o.forEach((t, n) => {
		e[t] -= l * ((s[n] ?? 0) / c);
	}), l);
}
function Cx(e, t, n, r) {
	if (r <= $ || n <= 0) return;
	let i = mx(e, t, n);
	for (let a = 0; a < n; a += 1) {
		let o = t + a, s = i > $ ? (e[o] ?? 0) / i : 1 / n;
		e[o] += r * s;
	}
}
function wx(e) {
	let t = px(e);
	if (e.layout === "fixed") {
		let n = yx(e, t).reduce((e, t) => e + t, 0);
		return Object.freeze({
			minWidthPt: n,
			maxWidthPt: n
		});
	}
	let n = Array(t).fill(0), r = Array(t).fill(0), i = e.rows.flatMap((e) => e.cells).sort((e, t) => e.columnSpan - t.columnSpan), a = (e, t, n) => {
		let r = Math.max(0, t.columnStart), i = Math.max(1, Math.min(t.columnSpan, e.length - r));
		if (i <= 0) return;
		let a = dx(n) - mx(e, r, i);
		a > $ && Cx(e, r, i, a);
	};
	for (let e of i) a(n, e, e.minContentWidthPt), a(r, e, Math.max(e.minContentWidthPt, e.maxContentWidthPt));
	let o = n.reduce((e, t) => e + t, 0), s = Math.max(o, r.reduce((e, t) => e + t, 0));
	return Object.freeze({
		minWidthPt: o,
		maxWidthPt: s
	});
}
function Tx(e, t, n, r) {
	let i = Math.max(0, r.columnStart), a = Math.max(1, Math.min(r.columnSpan, e.length - i));
	if (a <= 0) return;
	let o = dx(r.minContentWidthPt), s = mx(e, i, a);
	if (o <= s + $) return;
	let c = a === 1 ? n[i] ?? o : Math.max(o, dx(r.maxContentWidthPt));
	Cx(e, i, a, Sx(e, t, i, a, Math.max(0, c - s)));
	let l = mx(e, i, a);
	l < o - $ && Cx(e, i, a, o - l);
}
function Ex(e, t, n, r) {
	let i = e.reduce((e, t) => e + t, 0);
	if (i <= r + $ || i <= $) return e;
	let a = [...e], o = a.map((e, n) => Math.max(0, e - (t[n] ?? 0))), s = o.reduce((e, t) => e + t, 0), c = Math.min(i - r, s);
	c > $ && s > $ && a.forEach((e, t) => {
		a[t] -= c * ((o[t] ?? 0) / s);
	});
	for (let e of n) {
		if (e.columnSpan <= 1) continue;
		let n = Math.max(0, e.columnStart), r = Math.max(1, Math.min(e.columnSpan, a.length - n)), i = dx(e.minContentWidthPt) - mx(a, n, r);
		if (i <= $) continue;
		let o = Sx(a, t, n, r, i);
		Cx(a, n, r, o), o < i - $ && Cx(a, n, r, i - o);
	}
	let l = a.reduce((e, t) => e + t, 0);
	if (l <= r + $ || l <= $) return fx(a);
	let u = Math.max(0, r) / l;
	return fx(a.map((e) => e * u));
}
function Dx(e) {
	let t = px(e);
	if (t === 0) return Object.freeze([]);
	let n = yx(e, t);
	if (e.layout === "fixed") {
		if (e.availableWidthPt === null) return Object.freeze(n);
		let t = n.reduce((e, t) => e + t, 0), r = dx(e.availableWidthPt);
		if (t <= r + $ || t <= $) return Object.freeze(n);
		let i = r / t;
		return Object.freeze(fx(n.map((e) => e * i)));
	}
	let r = n.reduce((e, t) => e + t, 0), { minimums: i, maximums: a } = xx(e.rows, t, r), o = e.rows.flatMap((e) => e.cells);
	o.sort((e, t) => e.columnSpan - t.columnSpan);
	for (let e of o) Tx(n, i, a, e);
	return Object.freeze(Ex(n, i, o, dx(e.availableWidthPt)));
}
function Ox(e) {
	let t = Dx(e), n = t.map((t, n) => {
		let r = t !== e.gridWidthsPt[n];
		return !r && e.gridWidthKeys?.[n] === null ? null : !r && e.gridWidthKeys?.[n] !== void 0 ? e.gridWidthKeys[n] : tx(t) ?? "0/1";
	});
	return Object.freeze({
		widthsPt: Object.freeze([...t]),
		widthKeys: Object.freeze(n)
	});
}
function kx(e) {
	return Ox(e).widthsPt;
}
//#endregion
//#region packages/docx/src/layout/table-cell-blocks.ts
function Ax(e, t) {
	if (t !== e.length - 1 || t === 0) return !1;
	let n = e[t], r = e[t - 1];
	return n?.type === "paragraph" && r?.type === "table" && n.runs.length === 0;
}
function jx(e, t) {
	let { cell: n, table: r, cellTotalWidthPt: i, outerState: a, sourcePath: o } = e, s = t.resolveContentWidthPt(n, r, i), c = t.createCellState(a, s, n), l = [];
	for (let e = 0; e < n.content.length; e += 1) {
		let r = n.content[e];
		if (!r) continue;
		let i = [...o, e];
		if (r.type === "paragraph") {
			let a = n.content[e - 1], o = n.content[e + 1], u = r, d = t.acquireParagraph(c, u, s, i, Ul(a?.type === "paragraph" ? a : null, u, o?.type === "paragraph" ? o : null));
			l.push(d), t.advanceState(c, d.advancePt);
			continue;
		}
		let a = r, u = r;
		l.push(t.acquireNestedTable(c, a, s, i, {
			fromPrevious: u.nestedSliceContinuesFromPrevious ?? !1,
			onNext: u.nestedSliceContinuesOnNext ?? !1
		}, (e, n, r, i, a) => jx({
			cell: e,
			table: n,
			cellTotalWidthPt: r,
			outerState: i,
			sourcePath: a
		}, t)));
	}
	return l;
}
//#endregion
//#region packages/docx/src/cell-border-conflict.ts
function Mx(e) {
	return El(e.style, e.width);
}
function Nx(e) {
	let t = wl.indexOf(e);
	return t === -1 ? wl.length : t;
}
function Px(e) {
	if (!e) return {
		r: 0,
		g: 0,
		b: 0
	};
	let t = e.replace(/^#/, "");
	return t.length !== 6 || /[^0-9a-fA-F]/.test(t) ? {
		r: 0,
		g: 0,
		b: 0
	} : {
		r: parseInt(t.slice(0, 2), 16),
		g: parseInt(t.slice(2, 4), 16),
		b: parseInt(t.slice(4, 6), 16)
	};
}
function Fx(e, t) {
	let n = Px(e), r = Px(t), i = (e) => e.r + e.b + 2 * e.g, a = (e) => e.b + 2 * e.g, o = (e) => e.g;
	for (let e of [
		i,
		a,
		o
	]) {
		let t = e(n) - e(r);
		if (t !== 0) return t;
	}
	return 0;
}
function Ix(e, t) {
	let n = (e) => e && e.spec.style !== "nil" && e.spec.style !== "none" ? e : null, r = n(e), i = n(t);
	if (!r && !i) return null;
	if (!r) return i;
	if (!i || r.source === "cell" && i.source === "table") return r;
	if (i.source === "cell" && r.source === "table") return i;
	let a = Mx(r.spec), o = Mx(i.spec);
	if (a !== o) return a > o ? r : i;
	let s = Nx(r.spec.style), c = Nx(i.spec.style);
	if (s !== c) return s < c ? r : i;
	let l = Fx(r.spec.color, i.spec.color);
	return l === 0 || l < 0 ? r : i;
}
//#endregion
//#region packages/docx/src/layout/table-border-layer.ts
function Lx(...e) {
	for (let t of e) if (t && vl(t.authoredStyle)) return t;
	return null;
}
//#endregion
//#region packages/docx/src/layout/table.ts
function Rx(e) {
	return Math.max(0, e.advancePt - e.spacing.beforePt - e.spacing.afterPt);
}
function zx(e) {
	let t = [], n = 0, r = null, i = 0, a, o = 0, s = null, c = null;
	for (let l of e) {
		let e = l.layout;
		if (e.kind === "paragraph") {
			let u = e.spacing.beforePt, d = e.spacing.afterPt, f = r ? bg(r, e, i, u) : u, p = l.structuralTrailing ? 0 : Rx(e), m = n + (l.structuralTrailing ? 0 : f);
			if (t.push({
				layout: e,
				offsetPt: m,
				advancePt: p
			}), l.structuralTrailing || (n = m + p, a ??= m, o = Math.max(o, n), r = e, i = d), e.cellContainmentBounds) {
				let t = m + e.cellContainmentBounds.yPt - e.flowBounds.yPt, n = t + e.cellContainmentBounds.heightPt;
				a = a === void 0 ? t : Math.min(a, t), o = Math.max(o, n), s = s === null ? t : Math.min(s, t), c = c === null ? n : Math.max(c, n);
			}
			continue;
		}
		r && (n += i);
		let u = e.advancePt;
		t.push({
			layout: e,
			offsetPt: n,
			advancePt: u
		}), a ??= n, n += u, o = n, r = null, i = 0;
	}
	let l = n + (r ? i : 0), u = a ?? 0;
	return {
		blocks: t,
		flowHeightPt: l,
		inkTopPt: u,
		inkHeightPt: Math.max(0, o - u),
		cellContainmentTopPt: s,
		cellContainmentBottomPt: c
	};
}
function Bx(e) {
	let t = e.cellContainmentTopPt ?? 0, n = e.cellContainmentBottomPt ?? 0;
	return Math.max(e.flowHeightPt, n) - Math.min(0, t);
}
function Vx(e) {
	return Bx(zx(e));
}
function Hx(e) {
	return Number.isFinite(e?.cellSpacingPt) ? Math.max(0, e?.cellSpacingPt ?? 0) : 0;
}
function Ux(e, t) {
	let n = Hx(e[t]), r = Hx(e[t - 1]), i = Hx(e[t + 1]);
	return {
		topPt: t === 0 ? n : Math.max(r, n) / 2,
		bottomPt: t === e.length - 1 ? n : Math.max(n, i) / 2
	};
}
function Wx(e, t, n) {
	return n.topPt + e.margins.topPt + Bx(t) + e.margins.bottomPt + n.bottomPt;
}
function Gx(e, t, n, r) {
	let i = t;
	for (let a = t + 1; a < e.length && e[a]?.cells.find((e) => e.columnStart === n && e.columnSpan === r && e.verticalMerge === "continue"); a += 1) i = a;
	return i;
}
function Kx(e) {
	return e.heightRule === "exact" ? gl(e.heightPt, e.cells.map((e) => e.margins.bottomPt)) : e.heightRule === "atLeast" ? Math.max(0, e.heightPt ?? 0) : 0;
}
function qx(e, t, n) {
	let r = e.map((e) => Kx(e)), i = e.map((n, r) => Math.max(0, ...n.cells.filter((e) => e.verticalMerge !== "continue").map((n) => {
		let i = n.verticalMerge === "restart" ? Gx(e, r, n.columnStart, n.columnSpan) : r, a = Ux(e, r), o = Ux(e, i);
		return Wx(n, t.get(n.id) ?? zx([]), {
			topPt: a.topPt,
			bottomPt: o.bottomPt
		});
	})));
	e.forEach((n, i) => {
		let a = Ux(e, i);
		for (let e of n.cells) {
			if (e.verticalMerge !== "none") continue;
			let o = Wx(e, t.get(e.id) ?? zx([]), a);
			n.heightRule !== "exact" && (r[i] = Math.max(r[i] ?? 0, o));
		}
	});
	let a = [];
	e.forEach((n, r) => {
		for (let i of n.cells) i.verticalMerge === "restart" && a.push({
			start: r,
			end: Gx(e, r, i.columnStart, i.columnSpan),
			requiredPt: Wx(i, t.get(i.id) ?? zx([]), {
				topPt: Ux(e, r).topPt,
				bottomPt: Ux(e, Gx(e, r, i.columnStart, i.columnSpan)).bottomPt
			})
		});
	}), a.sort((e, t) => e.end - t.end || e.start - t.start);
	for (let t of a) {
		let n = 0;
		for (let e = t.start; e <= t.end; e += 1) n += r[e] ?? 0;
		let i = t.requiredPt - n;
		if (!(i <= 0)) {
			for (let n = t.end; n >= t.start; --n) if (e[n]?.heightRule !== "exact") {
				r[n] = (r[n] ?? 0) + i;
				break;
			}
		}
	}
	return e.forEach((e, t) => {
		e.heightRule !== "exact" && (r[t] = (r[t] ?? 0) + (n[t] ?? 0));
	}), {
		heights: r,
		contentHeights: i
	};
}
function Jx(e, t) {
	return e ? {
		source: t,
		spec: {
			width: e.widthPt,
			color: e.color,
			style: e.authoredStyle
		}
	} : null;
}
function Yx(e, t, n, r, i, a, o, s) {
	let c = (e, t, n, r, i, a, o) => {
		let s = Lx(e, o ? t : null);
		return s ? Jx(s, "cell") : Jx(o ? Lx(r, a) : Lx(n, i), "table");
	}, l = c(e.borders.top, e.borders.insideH, n?.top ?? null, n?.insideH ?? null, t.top, t.insideH, r !== 0), u = c(e.borders.bottom, e.borders.insideH, n?.bottom ?? null, n?.insideH ?? null, t.bottom, t.insideH, i !== a - 1), d = c(e.borders.left, e.borders.insideV, n?.left ?? null, n?.insideV ?? null, t.left, t.insideV, e.columnStart !== 0), f = c(e.borders.right, e.borders.insideV, n?.right ?? null, n?.insideV ?? null, t.right, t.insideV, e.columnStart + e.columnSpan !== o);
	return s ? {
		top: l,
		right: d,
		bottom: u,
		left: f
	} : {
		top: l,
		right: f,
		bottom: u,
		left: d
	};
}
function Xx(e) {
	return e ? {
		widthPt: e.spec.width,
		color: e.spec.color ?? "#000000",
		authoredStyle: e.spec.style
	} : null;
}
function Zx(e, t, n) {
	let r = Xx(Ix(e, t));
	return r ? {
		border: r,
		edge: n
	} : null;
}
function Qx(e) {
	let t = e.columnWidthsPt.length, n = [], r = e.rows.map(() => Array(t).fill(-1));
	return e.rows.forEach((i, a) => {
		for (let o of i.cells) {
			if (o.verticalMerge === "continue") continue;
			let i = o.verticalMerge === "restart" ? Gx(e.rows, a, o.columnStart, o.columnSpan) : a, s = n.length;
			n.push({
				input: o,
				rowIndex: a,
				lastRowIndex: i
			});
			let c = Math.min(t, o.columnStart + o.columnSpan);
			for (let e = a; e <= i; e += 1) for (let t = Math.max(0, o.columnStart); t < c; t += 1) r[e][t] = s;
		}
	}), {
		owners: n,
		occupancy: r
	};
}
function $x(e, t) {
	return t.lastRowIndex === t.rowIndex ? t.input : e.rows[t.lastRowIndex]?.cells.find((e) => e.columnStart === t.input.columnStart && e.columnSpan === t.input.columnSpan && e.verticalMerge === "continue") ?? t.input;
}
function eS(e) {
	let t = e.rows.length, n = e.columnWidthsPt.length, { owners: r, occupancy: i } = Qx(e), a = (i, a = !1) => {
		let o = r[i];
		if (!o) return null;
		let s = a ? $x(e, o) : o.input, c = a && s !== o.input ? o.lastRowIndex : o.rowIndex;
		return Yx(s, e.borders, e.rows[c]?.exceptionBorders ?? null, o.rowIndex, o.lastRowIndex, t, n, e.bidiVisual);
	};
	return {
		horizontal: Array.from({ length: t + 1 }, (e, o) => Array.from({ length: n }, (e, n) => {
			let s = o > 0 ? i[o - 1]?.[n] ?? -1 : -1, c = o < t ? i[o]?.[n] ?? -1 : -1;
			if (s >= 0 && s === c) return null;
			let l = a(c), u = o === 0 ? "top" : o === t ? "bottom" : "between";
			return {
				above: {
					owner: r[s] ?? null,
					border: a(s, !0)?.bottom ?? null
				},
				below: {
					owner: r[c] ?? null,
					border: l?.top ?? null
				},
				edge: u
			};
		})),
		vertical: Array.from({ length: n + 1 }, (r, o) => Array.from({ length: t }, (t, r) => {
			let s = o > 0 ? i[r]?.[o - 1] ?? -1 : -1, c = o < n ? i[r]?.[o] ?? -1 : -1, l = e.bidiVisual ? c : s, u = e.bidiVisual ? s : c;
			return l >= 0 && l === u ? null : Zx(a(l)?.right ?? null, a(u)?.left ?? null, o === 0 ? e.bidiVisual ? "right" : "left" : o === n ? e.bidiVisual ? "left" : "right" : "between");
		})),
		occupancy: i
	};
}
function tS(e, t) {
	return t.horizontal.map((t, n) => Hx(e.rows[n - 1]) > 0 || Hx(e.rows[n]) > 0 ? 0 : t.reduce((e, t) => {
		if (!t) return e;
		let n = Zx(t.above.border, t.below.border, t.edge);
		return Math.max(e, n?.border.widthPt ?? 0);
	}, 0));
}
function nS(e, t) {
	let n = tS(e, t);
	return e.rows.map((e, t) => e.heightRule === "exact" ? 0 : _l(n[t] ?? 0, n[t + 1] ?? 0));
}
function rS(e) {
	return nS(e, eS(e));
}
function iS(e, t, n) {
	return {
		edge: e.edge,
		from: t,
		to: n,
		color: e.border.color,
		widthPt: e.border.widthPt,
		...ki(e.border.authoredStyle, e.border.widthPt)
	};
}
var aS = Object.freeze({
	top: null,
	right: null,
	bottom: null,
	left: null,
	insideH: null,
	insideV: null
});
function oS(e) {
	let t = Xx(e);
	return t && t.authoredStyle !== "nil" && t.authoredStyle !== "none" ? t : null;
}
function sS(e, t, n, r, i) {
	let a = [0];
	for (let t of e.columnWidthsPt) a.push((a.at(-1) ?? 0) + t);
	let o = [0];
	for (let e of r) o.push((o.at(-1) ?? 0) + e);
	let s = a.at(-1) ?? 0, c = (n, r) => (t[n] ?? 0) + (e.bidiVisual ? s - (a[r] ?? 0) : a[r] ?? 0), l = (e) => n + (o[e] ?? 0), u = [], d = (e, t, n, r) => {
		!e || e.authoredStyle === "nil" || e.authoredStyle === "none" || u.push(iS({
			border: e,
			edge: t
		}, n, r));
	}, f = /* @__PURE__ */ new Set(), p = (t, n, r, i) => {
		let a = t.owner;
		if (!a) return;
		let o = `${n}:${r}:${a.input.id}`;
		if (f.has(o)) return;
		f.add(o);
		let s = e.rows[a.rowIndex];
		if (!s) return;
		let u = Hx(s), p = c(a.rowIndex, a.input.columnStart), m = c(a.rowIndex, Math.min(e.columnWidthsPt.length, a.input.columnStart + a.input.columnSpan)), { startPt: h, endPt: g } = ux(u, a.input.columnStart, a.input.columnSpan, e.columnWidthsPt.length), _ = Math.min(p, m) + (e.bidiVisual ? g : h), v = Math.max(p, m) - (e.bidiVisual ? h : g), y = l(a.rowIndex) + Ux(e.rows, a.rowIndex).topPt, b = l(a.lastRowIndex + 1) - Ux(e.rows, a.lastRowIndex).bottomPt, x = Yx(a.input, aS, null, a.rowIndex, a.lastRowIndex, e.rows.length, e.columnWidthsPt.length, e.bidiVisual), S = r === "top" ? x.top : x.bottom, C = r === "top" ? y : b;
		d(oS(S), i, {
			xPt: _,
			yPt: C
		}, {
			xPt: v,
			yPt: C
		});
	};
	return i.horizontal.forEach((n, r) => {
		let a = r > 0 && Hx(e.rows[r - 1]) > 0, o = r < e.rows.length && Hx(e.rows[r]) > 0;
		if (a || o) {
			let a = Math.max(Hx(e.rows[r - 1]), Hx(e.rows[r])), u = o ? r : r - 1, f = t[u] ?? 0, m = r === 0 ? "top" : r === e.rows.length ? "bottom" : "between";
			r === 0 || r === e.rows.length ? d(Lx(r === 0 ? e.rows[0]?.exceptionBorders?.top ?? null : e.rows.at(-1)?.exceptionBorders?.bottom ?? null, r === 0 ? e.borders.top : e.borders.bottom), m, {
				xPt: f,
				yPt: l(r)
			}, {
				xPt: f + s,
				yPt: l(r)
			}) : n.forEach((t, n) => {
				let o = i.occupancy[r - 1]?.[n] ?? -1, s = i.occupancy[r]?.[n] ?? -1;
				if (!t || !(o !== s && (o >= 0 || s >= 0)) || [{
					side: t.above,
					directEdge: "bottom"
				}, {
					side: t.below,
					directEdge: "top"
				}].some(({ side: e, directEdge: t }) => {
					let n = e.owner;
					return n ? bl({
						spacingPt: a,
						directStyle: n.input.borders[t]?.authoredStyle,
						conditionalInsideStyle: n.input.borders.insideH?.authoredStyle
					}) : !1;
				})) return;
				let f = c(u, n), p = c(u, n + 1), h = Lx(e.rows[r - 1]?.exceptionBorders?.insideH ?? null, e.borders.insideH), g = Lx(e.rows[r]?.exceptionBorders?.insideH ?? null, e.borders.insideH);
				d(Zx(Jx(h, "table"), Jx(g, "table"), m)?.border ?? null, m, {
					xPt: Math.min(f, p),
					yPt: l(r)
				}, {
					xPt: Math.max(f, p),
					yPt: l(r)
				});
			}), n.forEach((e) => {
				e && (p(e.above, r, "bottom", e.edge), p(e.below, r, "top", e.edge));
			});
			return;
		}
		let f = [], m = /* @__PURE__ */ new Map();
		n.forEach((t) => {
			if (!t) return;
			let n = (t, n) => {
				if (!n.owner || !n.border) return;
				let r = `${t}:${n.owner.input.id}`;
				if (m.has(r)) return;
				let i = c(n.owner.rowIndex, n.owner.input.columnStart), a = c(n.owner.rowIndex, Math.min(e.columnWidthsPt.length, n.owner.input.columnStart + n.owner.input.columnSpan));
				m.set(r, {
					side: t,
					border: n.border,
					leftPt: Math.min(i, a),
					rightPt: Math.max(i, a)
				});
			};
			n("above", t.above), n("below", t.below);
		});
		let h = [...m.values()], g = [...new Set(h.flatMap((e) => [e.leftPt, e.rightPt]))].sort((e, t) => e - t), _ = r === 0 ? "top" : r === e.rows.length ? "bottom" : "between";
		for (let e = 1; e < g.length; e += 1) {
			let t = g[e - 1] ?? 0, n = g[e] ?? t;
			if (n <= t) continue;
			let r = (t + n) / 2, i = h.filter((e) => r > e.leftPt && r < e.rightPt), a = Zx(i.find((e) => e.side === "above")?.border ?? null, i.find((e) => e.side === "below")?.border ?? null, _);
			a && f.push({
				resolved: a,
				leftPt: t,
				rightPt: n
			});
		}
		f.sort((e, t) => e.leftPt - t.leftPt);
		let v = [];
		for (let e of f) {
			let t = v.at(-1);
			t && t.rightPt === e.leftPt && t.resolved.edge === e.resolved.edge && t.resolved.border.widthPt === e.resolved.border.widthPt && t.resolved.border.color === e.resolved.border.color && t.resolved.border.authoredStyle === e.resolved.border.authoredStyle ? t.rightPt = e.rightPt : v.push({ ...e });
		}
		for (let e of v) u.push(iS(e.resolved, {
			xPt: e.leftPt,
			yPt: l(r)
		}, {
			xPt: e.rightPt,
			yPt: l(r)
		}));
	}), i.vertical.forEach((t, n) => {
		t.forEach((t, r) => {
			Hx(e.rows[r]) > 0 || t && u.push(iS(t, {
				xPt: c(r, n),
				yPt: l(r)
			}, {
				xPt: c(r, n),
				yPt: l(r + 1)
			}));
		});
	}), e.rows.forEach((n, r) => {
		let a = Hx(n);
		if (a <= 0) return;
		let o = l(r), u = l(r + 1), f = t[r] ?? 0;
		d(Lx(n.exceptionBorders?.left ?? null, e.borders.left), "left", {
			xPt: f,
			yPt: o
		}, {
			xPt: f,
			yPt: u
		}), d(Lx(n.exceptionBorders?.right ?? null, e.borders.right), "right", {
			xPt: f + s,
			yPt: o
		}, {
			xPt: f + s,
			yPt: u
		});
		let p = /* @__PURE__ */ new Set();
		for (let e of n.cells) bl({
			spacingPt: a,
			directStyle: e.borders.left?.authoredStyle,
			conditionalInsideStyle: e.borders.insideV?.authoredStyle
		}) && p.add(e.columnStart), bl({
			spacingPt: a,
			directStyle: e.borders.right?.authoredStyle,
			conditionalInsideStyle: e.borders.insideV?.authoredStyle
		}) && p.add(e.columnStart + e.columnSpan);
		for (let t = 1; t < e.columnWidthsPt.length; t += 1) {
			let a = i.occupancy[r]?.[t - 1] ?? -1, s = i.occupancy[r]?.[t] ?? -1;
			if (!(a !== s && (a >= 0 || s >= 0))) continue;
			let l = c(r, t);
			p.has(t) || d(Lx(n.exceptionBorders?.insideV ?? null, e.borders.insideV), "between", {
				xPt: l,
				yPt: o
			}, {
				xPt: l,
				yPt: u
			});
		}
		for (let t of n.cells) {
			if (t.verticalMerge === "continue") continue;
			let n = t.verticalMerge === "restart" ? Gx(e.rows, r, t.columnStart, t.columnSpan) : r, i = c(r, t.columnStart), o = c(r, Math.min(e.columnWidthsPt.length, t.columnStart + t.columnSpan)), { startPt: s, endPt: u } = ux(a, t.columnStart, t.columnSpan, e.columnWidthsPt.length), f = Math.min(i, o) + (e.bidiVisual ? u : s), p = Math.max(i, o) - (e.bidiVisual ? s : u), m = l(r) + Ux(e.rows, r).topPt, h = l(n + 1) - Ux(e.rows, n).bottomPt, g = Yx(t, aS, null, r, n, e.rows.length, e.columnWidthsPt.length, e.bidiVisual);
			d(oS(g.right), "right", {
				xPt: p,
				yPt: m
			}, {
				xPt: p,
				yPt: h
			}), d(oS(g.left), "left", {
				xPt: f,
				yPt: m
			}, {
				xPt: f,
				yPt: h
			});
		}
	}), u;
}
function cS(e, t, n, r, i) {
	let a = r.availableBounds, o = e === "center" ? a.xPt + (a.widthPt - i) / 2 : e === "right" ? a.xPt + a.widthPt - i : a.xPt;
	return t === 0 ? o : yl(o, t, n);
}
function lS(e, t) {
	if (t.length === 0) return e;
	let n = Math.min(e.xPt, ...t.map((e) => Math.min(e.from.xPt, e.to.xPt) - e.widthPt / 2)), r = Math.min(e.yPt, ...t.map((e) => Math.min(e.from.yPt, e.to.yPt) - e.widthPt / 2)), i = Math.max(e.xPt + e.widthPt, ...t.map((e) => Math.max(e.from.xPt, e.to.xPt) + e.widthPt / 2)), a = Math.max(e.yPt + e.heightPt, ...t.map((e) => Math.max(e.from.yPt, e.to.yPt) + e.widthPt / 2));
	return {
		xPt: n,
		yPt: r,
		widthPt: i - n,
		heightPt: a - r
	};
}
function uS(e) {
	let t = /* @__PURE__ */ new Map();
	e.forEach((e, n) => {
		if (e.style !== "compound" || !e.edge || e.edge === "between") return;
		let r = `${e.authoredStyle}\u0000${e.color}\u0000${e.widthPt}`, i = t.get(r) ?? [];
		i.push({
			border: e,
			index: n
		}), t.set(r, i);
	});
	let n = [];
	for (let e of t.values()) {
		let t = (t) => e.filter((e) => e.border.edge === t), r = t("top"), i = t("right"), a = t("bottom"), o = t("left");
		if (!r.length || !i.length || !a.length || !o.length) continue;
		let s = Math.min(...r.flatMap(({ border: e }) => [e.from.xPt, e.to.xPt])), c = Math.max(...r.flatMap(({ border: e }) => [e.from.xPt, e.to.xPt])), l = r[0].border.from.yPt, u = a[0].border.from.yPt, d = (e, t, n, r) => {
			let i = e.map(({ border: e }) => r(e)).map(([e, t]) => [Math.min(e, t), Math.max(e, t)]).sort((e, t) => e[0] - t[0]);
			if (i[0]?.[0] !== t) return !1;
			let a = t;
			for (let e of i) {
				if (e[0] > a) return !1;
				a = Math.max(a, e[1]);
			}
			return a === n;
		};
		if (!(r.every(({ border: e }) => e.from.yPt === l && e.to.yPt === l) && a.every(({ border: e }) => e.from.yPt === u && e.to.yPt === u) && o.every(({ border: e }) => e.from.xPt === s && e.to.xPt === s) && i.every(({ border: e }) => e.from.xPt === c && e.to.xPt === c) && d(r, s, c, (e) => [e.from.xPt, e.to.xPt]) && d(a, s, c, (e) => [e.from.xPt, e.to.xPt]) && d(o, l, u, (e) => [e.from.yPt, e.to.yPt]) && d(i, l, u, (e) => [e.from.yPt, e.to.yPt]))) continue;
		let f = e[0].border;
		n.push({
			bounds: {
				xPt: s,
				yPt: l,
				widthPt: c - s,
				heightPt: u - l
			},
			border: {
				authoredStyle: f.authoredStyle,
				color: f.color,
				widthPt: f.widthPt,
				style: f.style
			},
			segmentIndexes: e.map(({ index: e }) => e)
		});
	}
	return n;
}
function dS(e, t) {
	let n = Math.max(e.xPt, t.xPt), r = Math.max(e.yPt, t.yPt), i = Math.min(e.xPt + e.widthPt, t.xPt + t.widthPt), a = Math.min(e.yPt + e.heightPt, t.yPt + t.heightPt);
	return i > n && a > r ? {
		xPt: n,
		yPt: r,
		widthPt: i - n,
		heightPt: a - r
	} : null;
}
function fS(e, t, n) {
	let r = e.layout, i = t + (r.kind === "table" ? r.flowBounds.xPt : 0), a = n + e.offsetPt + (r.kind === "table" ? r.flowBounds.yPt : 0), o = i - r.flowBounds.xPt, s = a - r.flowBounds.yPt;
	return {
		xPt: r.inkBounds.xPt + o,
		yPt: r.inkBounds.yPt + s,
		widthPt: r.inkBounds.widthPt,
		heightPt: r.inkBounds.heightPt
	};
}
function pS(e, t, n) {
	let r = B(e, "TableLayoutInput");
	if (r.columnWidthsPt.some((e) => !Number.isFinite(e) || e < 0)) throw TypeError("TableLayoutInput.columnWidthsPt must contain finite non-negative widths");
	let i = /* @__PURE__ */ new Map();
	r.rows.forEach((e) => e.cells.forEach((e) => {
		i.set(e.id, zx(e.verticalMerge === "continue" ? [] : e.blocks));
	}));
	let a = eS(r), o = qx(r.rows, i, nS(r, a)), s = o.heights, c = r.columnWidthsPt.reduce((e, t) => e + t, 0), l = s.reduce((e, t) => e + t, 0), u = t.cursor.yPt, d = r.rows.map((e) => cS(e.alignment ?? r.alignment, Number.isFinite(e.indentPt) ? e.indentPt : r.indentPt, r.bidiVisual, t, c)), f = d[0] ?? cS(r.alignment, r.indentPt, r.bidiVisual, t, c), p = sS(r, d, u, s, a), m = uS(p), h = [0];
	for (let e of r.columnWidthsPt) h.push((h.at(-1) ?? 0) + e);
	let g = [0];
	for (let e of s) g.push((g.at(-1) ?? 0) + e);
	let _ = (e, t) => (d[e] ?? f) + (r.bidiVisual ? c - (h[t] ?? 0) : h[t] ?? 0), v = r.rows.map((e, n) => {
		let a = u + (g[n] ?? 0), l = s[n] ?? 0, p = d[n] ?? f, m = Ux(r.rows, n), h = Hx(e), v = e.cells.map((e) => {
			let o = e.verticalMerge === "restart" ? Gx(r.rows, n, e.columnStart, e.columnSpan) : n, s = Ux(r.rows, o), c = u + (g[o + 1] ?? g[n + 1] ?? 0) - s.bottomPt, d = _(n, e.columnStart), f = _(n, Math.min(r.columnWidthsPt.length, e.columnStart + e.columnSpan)), p = Math.min(d, f), v = Math.max(d, f), { startPt: y, endPt: b } = ux(h, e.columnStart, e.columnSpan, r.columnWidthsPt.length), x = p + (r.bidiVisual ? b : y), S = v - (r.bidiVisual ? y : b), C = Math.max(0, S - x), w = a + m.topPt, T = e.verticalMerge === "restart" ? Math.max(0, c - w) : Math.max(0, l - m.topPt - m.bottomPt), E = i.get(e.id) ?? zx([]), D = Math.max(0, T - e.margins.topPt - e.margins.bottomPt), O = e.margins.topPt - Math.min(0, E.inkTopPt), k = E.inkHeightPt >= D ? O : e.vAlign === "center" ? e.margins.topPt + (D - E.inkHeightPt) / 2 - E.inkTopPt : e.vAlign === "bottom" ? T - e.margins.bottomPt - E.inkHeightPt - E.inkTopPt : O, A = {
				xPt: x + e.margins.leftPt,
				yPt: w + k,
				widthPt: Math.max(0, C - e.margins.leftPt - e.margins.rightPt),
				heightPt: D
			}, j = {
				xPt: x,
				yPt: w,
				widthPt: C,
				heightPt: T
			}, M = e.verticalMerge !== "continue" && r.rows.slice(n, o + 1).every((e) => e.heightRule === "exact") ? xl(j, t.availableBounds) : void 0, N = e.verticalMerge === "continue" ? [] : E.blocks.map((e) => ({
				...e,
				offsetPt: k + e.offsetPt
			})), P = rd([j, ...N.map((e) => fS(e, A.xPt, j.yPt)).map((e) => M ? dS(e, M) : e).filter((e) => e !== null)]) ?? j;
			return {
				kind: "table-cell",
				id: e.id,
				source: e.source,
				flowDomainId: r.flowDomainId,
				ordinaryFlow: r.ordinaryFlow,
				flowBounds: j,
				inkBounds: P,
				...M ? { clipBounds: M } : {},
				contentBounds: A,
				advancePt: T,
				verticalMerge: e.verticalMerge,
				vAlign: e.vAlign,
				...e.background ? { background: e.background } : {},
				blocks: N
			};
		}), y = {
			xPt: p,
			yPt: a,
			widthPt: c,
			heightPt: l
		}, b = rd([y, ...v.map((e) => e.inkBounds)]) ?? y;
		return {
			kind: "table-row",
			id: e.id,
			source: e.source,
			flowDomainId: r.flowDomainId,
			ordinaryFlow: r.ordinaryFlow,
			flowBounds: y,
			inkBounds: b,
			advancePt: l,
			heightPt: l,
			contentHeightPt: o.contentHeights[n] ?? 0,
			...e.repeatedHeader ? { repeatedHeader: !0 } : {},
			cells: v
		};
	}), y = d.length > 0 ? Math.min(...d) : f, b = d.length > 0 ? Math.max(...d.map((e) => e + c)) : f + c, x = {
		xPt: y,
		yPt: u,
		widthPt: Math.max(0, b - y),
		heightPt: l
	}, S = rd([x, ...v.map((e) => e.inkBounds)]) ?? x;
	return B({
		layout: {
			kind: "table",
			id: r.id,
			source: r.source,
			flowDomainId: r.flowDomainId,
			ordinaryFlow: r.ordinaryFlow,
			flowBounds: x,
			inkBounds: lS(S, p),
			advancePt: l,
			columnWidthsPt: r.columnWidthsPt,
			rows: v,
			borders: p,
			...m.length ? { compoundBorderFrames: m } : {}
		},
		nextCursor: {
			xPt: t.cursor.xPt,
			yPt: t.cursor.yPt + l
		}
	}, "TableLayoutResult");
}
//#endregion
//#region packages/docx/src/layout/table-acquisition.ts
function mS(e, t) {
	return t.has(e) ? !0 : (t.add(e), e.kind === "drawing" ? e.anchorLayer === void 0 : e.kind === "paragraph" ? e.lines.every((e) => e.placements.every((e) => e.kind !== "text" || e.dependency !== "page")) && e.drawings.every((e) => mS(e, t)) && e.textBoxes.every((e) => mS(e, t)) : e.kind === "textbox" || e.kind === "note" ? e.story.blocks.every((e) => mS(e, t)) : e.rows.every((e) => e.cells.every((e) => e.blocks.every((e) => mS(e.layout, t)))) && (e.floatingTables ?? []).every((e) => mS(e.child, t)) && (e.resolvedFloatingTables ?? []).every((e) => mS(e.child, t)));
}
function hS(e, t) {
	return e.input.rows.every((e) => e.cells.every((e) => e.blocks.every((e) => e.pageDependent !== !0 && mS(e.layout, t)))) && Object.values(e.nestedById).every((e) => hS(e, t));
}
function gS(e) {
	return hS(e, /* @__PURE__ */ new Set());
}
function _S(e, t) {
	let n = e.findIndex((e, n) => n > t && e.type === "paragraph" && e.framePr == null);
	if (n < 0) throw Error("A nested floating table requires a following regular paragraph anchor");
	return n;
}
function vS(e) {
	if (!e) return null;
	let t = e.color ?? "000000";
	return Object.freeze({
		widthPt: e.width,
		color: t.startsWith("#") ? t : `#${t}`,
		authoredStyle: e.style
	});
}
function yS(e) {
	return Object.freeze({
		top: vS(e.top),
		right: vS(e.right),
		bottom: vS(e.bottom),
		left: vS(e.left),
		insideH: vS(e.insideH),
		insideV: vS(e.insideV)
	});
}
function bS(e, t) {
	if (e === "center") return "center";
	let n = e === "right" || e === "end";
	return (t ? !n : n) ? "right" : "left";
}
function xS(e) {
	return e.lines.some((e) => e.placements.some((e) => e.kind === "text" && e.dependency === "page"));
}
function SS(e, t, n, r, i, a) {
	let o = Array.isArray(i) ? {
		story: "body",
		storyInstance: "body",
		path: i
	} : i, s = o.path, c = (e) => ({
		story: o.story,
		storyInstance: o.storyInstance,
		path: e
	}), l = a.layoutServices(r);
	if (!l) throw Error("Retained table acquisition requires layout services");
	let u = o.story === "body" && o.storyInstance === "body" ? `table:${s.join(".")}` : `${o.story}:${o.storyInstance}:table:${s.join(".")}`, d = a.tableFormat(e), f = e.bidiVisual === !0, p = d.firstRowException, m = p?.indentAuthored ? p.indentPt ?? 0 : e.tblInd ?? 0, h = {}, g = [], _ = e.rows.map((n, i) => {
		let o = d.rows[i], l = Math.max(0, Math.min(t.length, n.gridBefore ?? 0)), p = n.cells.map((n, d) => {
			let f = o?.cells[d]?.marginsPt ?? {
				top: n.marginTop ?? e.cellMarginTop,
				right: n.marginRight ?? e.cellMarginRight,
				bottom: n.marginBottom ?? e.cellMarginBottom,
				left: n.marginLeft ?? e.cellMarginLeft
			}, p = l, m = Math.min(Math.max(1, n.colSpan), Math.max(0, t.length - p));
			l += m;
			let _ = t.slice(p, p + m).reduce((e, t) => e + t, 0), v = ux(o?.cellSpacingPt ?? 0, p, m, t.length), y = [
				...s,
				i,
				d
			], b = `${u}:cell:${i}.${d}`, x = n.vMerge === !1 ? [] : jx({
				cell: n,
				table: e,
				cellTotalWidthPt: _,
				outerState: r,
				sourcePath: y
			}, {
				resolveContentWidthPt: (e, t, n) => Math.max(0, n - v.startPt - v.endPt - f.left - f.right),
				createCellState: a.createCellState,
				acquireParagraph: (e, t, n, r, o) => a.acquireParagraph(e, t, n, r, `${u}:cell:${i}.${d}`, o, void 0, c(r)),
				acquireNestedTable: (e, t, r, i) => {
					let o = SS(t, a.resolveColumns(t, r, e), r, e, c(i), a);
					h[o.layout.id] = o;
					let s = a.tableFormat(t).positioning;
					if (s) {
						let r = i[i.length - 1], c = s, l = t.overlap === "never" ? "never" : "overlap", u = a.registerFloatingTable(e, {
							child: o.layout,
							positioning: c,
							overlap: l
						}), d = {
							hostCellId: b,
							sourceBlockIndex: r,
							anchorBlockIndex: _S(n.content, r),
							tableId: o.layout.id,
							overlap: l,
							positioning: c,
							...u == null ? {} : { acquiredTextOffsetPt: Object.freeze({ ...u }) }
						};
						g.push(d);
					}
					return o.layout;
				},
				advanceState: a.advanceState
			});
			return {
				id: b,
				source: c(y),
				columnStart: p,
				columnSpan: m,
				verticalMerge: n.vMerge === !0 ? "restart" : n.vMerge === !1 ? "continue" : "none",
				margins: {
					topPt: f.top,
					rightPt: f.right,
					bottomPt: f.bottom,
					leftPt: f.left
				},
				vAlign: n.vAlign,
				...n.background ? { background: { color: n.background.startsWith("#") ? n.background : `#${n.background}` } } : {},
				borders: yS(n.borders),
				blocks: x.flatMap((e, t) => {
					let r = n.content[t];
					return r?.type === "table" && a.tableFormat(r).ordinaryFlow === !1 ? [] : [{
						layout: e,
						sourceBlockIndex: t,
						...e.kind === "paragraph" && xS(e) ? { pageDependent: !0 } : {},
						...Ax(n.content, t) ? { structuralTrailing: !0 } : {}
					}];
				})
			};
		}), _ = o?.height?.rule ?? "auto";
		return {
			id: `${u}:row:${i}`,
			source: c([...s, i]),
			logicalRowIndex: i,
			cantSplit: o?.cantSplit ?? n.cantSplit === !0,
			heightPt: o?.height?.valuePt ?? null,
			heightRule: _,
			cellSpacingPt: o?.cellSpacingPt ?? 0,
			exceptionBorders: o?.exception?.borders ? yS(o.exception.borders) : null,
			alignment: bS(o?.justification ?? e.jc, f),
			indentPt: m,
			cells: p,
			repeatedHeader: o?.repeatedHeader ?? n.isHeader === !0
		};
	}), v = B({
		kind: "table",
		id: u,
		source: c([...s]),
		flowDomainId: u,
		ordinaryFlow: d.ordinaryFlow,
		alignment: bS(e.jc, f),
		indentPt: m,
		bidiVisual: f,
		columnWidthsPt: t,
		borders: yS(e.borders),
		rows: _
	}, "RetainedTableAcquisition.input"), y = {
		xPt: 0,
		yPt: 0,
		widthPt: n,
		heightPt: 1
	}, b = pS(v, {
		container: {
			id: u,
			kind: "tableCell",
			bounds: y
		},
		cursor: {
			xPt: 0,
			yPt: 0
		},
		availableBounds: y
	}, l).layout;
	return Object.freeze({
		input: v,
		layout: b,
		nestedById: Object.freeze(h),
		floatingTables: B(g, "RetainedTableAcquisition.floatingTables")
	});
}
//#endregion
//#region packages/docx/src/layout/adjacent-table-layout-input.ts
function CS(e, t, n) {
	return t === n ? e : Object.freeze({
		...e,
		left: e.right,
		right: e.left
	});
}
function wS(e, t, n) {
	let r = CS(e.borders, e.bidiVisual, n), i = t.exceptionBorders == null ? null : CS(t.exceptionBorders, e.bidiVisual, n);
	return i ? Object.freeze({
		top: Lx(i.top, r.top),
		right: Lx(i.right, r.right),
		bottom: Lx(i.bottom, r.bottom),
		left: Lx(i.left, r.left),
		insideH: Lx(i.insideH, r.insideH),
		insideV: Lx(i.insideV, r.insideV)
	}) : r;
}
var TS = class {
	nodes = [Object.freeze({ kind: "zero" })];
	interned = new Map([["Z", 0]]);
	intern(e, t) {
		let n = this.interned.get(e);
		if (n !== void 0) return n;
		let r = this.nodes.length;
		return this.nodes.push(Object.freeze(t)), this.interned.set(e, r), r;
	}
	token(e, t) {
		return this.intern(`T:${e}:${t}`, { kind: "token" });
	}
	add(e, t) {
		if (e === 0) return t;
		if (t === 0) return e;
		let n = this.nodes[e], r = this.nodes[t];
		return n.kind === "sub" && n.right === t ? n.left : r.kind === "sub" && r.right === e ? r.left : this.intern(`A:${e}:${t}`, {
			kind: "add",
			left: e,
			right: t
		});
	}
	subtract(e, t) {
		if (e === t) return 0;
		if (t === 0) return e;
		let n = this.nodes[t];
		return n.kind === "sub" && n.left === e ? n.right : this.intern(`S:${e}:${t}`, {
			kind: "sub",
			left: e,
			right: t
		});
	}
	divide(e, t) {
		return e === 0 ? 0 : this.intern(`D:${e}:${t}`, {
			kind: "div",
			value: e,
			divisor: t
		});
	}
};
function ES(e, t = 0) {
	return Object.freeze({
		position: e,
		sym: t,
		identity: `${e}|${t}`
	});
}
function DS(e, t, n) {
	return ES(ax(t.position, n.position), e.add(t.sym, n.sym));
}
function OS(e, t, n) {
	return ES(sx(t.position, n.position), e.subtract(t.sym, n.sym));
}
function kS(e, t, n) {
	return ES(cx(t.position, n), e.divide(t.sym, n));
}
function AS(e, t, n) {
	let r = [ES("0/1")];
	return t.columnWidthsPt.forEach((i, a) => {
		let o = t.columnWidthKeys?.[a], s = tx(i) ?? "0/1", c = o === null ? ES(s, e.token(n, a)) : ES(o ?? s);
		r.push(DS(e, r.at(-1), c));
	}), Object.freeze(r);
}
function jS(e, t, n, r) {
	let i = OS(e, r, n);
	return t.alignment === "right" ? i : t.alignment === "center" ? kS(e, i, 2n) : ES("0/1");
}
function MS(e, t, n, r, i) {
	return DS(e, i, r ? OS(e, n, t) : t);
}
function NS(e, t) {
	if (e.length === 0) throw RangeError("Adjacent table group id must not be empty");
	if (t.length === 0) throw RangeError("Adjacent table group requires at least one table");
	if (t.some((e) => !e.ordinaryFlow)) throw Error("An absolutely positioned table cannot join an adjacent table group");
	let n = t[0], r = n.bidiVisual, i = new TS(), a = ES("0/1"), o = t.map((e, t) => AS(i, e, t)), s = o.map((e) => e.at(-1) ?? a), c = s.reduce((e, t) => lx(t.position, e.position) > 0 ? t : e, a), l = (e, t, n, a) => {
		let o = MS(i, e, t, n, a);
		return r ? OS(i, c, o) : o;
	}, u = [];
	t.forEach((e, t) => {
		let n = o[t], a = s[t], d = e.bidiVisual !== r;
		e.rows.forEach((t) => {
			let r = jS(i, t, a, c), o = n.map((t) => l(t, a, e.bidiVisual, r));
			u.push({
				input: e,
				row: t,
				groupBoundaries: o,
				descending: d
			});
		});
	});
	let d = /* @__PURE__ */ new Map();
	for (let e of [a, c]) d.set(e.identity, {
		boundary: e,
		count: 1
	});
	for (let e of u) {
		let t = /* @__PURE__ */ new Map();
		for (let n of e.groupBoundaries) {
			let e = t.get(n.identity);
			t.set(n.identity, {
				boundary: n,
				count: (e?.count ?? 0) + 1
			});
		}
		for (let [e, n] of t) {
			let t = d.get(e);
			n.count > (t?.count ?? 0) && d.set(e, n);
		}
	}
	let f = /* @__PURE__ */ new Map(), p = (e) => {
		let t = f.get(e);
		return t || (t = {
			position: e,
			identities: /* @__PURE__ */ new Map(),
			edges: /* @__PURE__ */ new Map(),
			firstSeen: /* @__PURE__ */ new Map()
		}, f.set(e, t)), t;
	};
	for (let [e, t] of d) p(t.boundary.position).identities.set(e, t);
	let m = 0;
	for (let e of u) {
		let t = e.descending ? [...e.groupBoundaries].reverse() : e.groupBoundaries, n = null, r = null;
		for (let e of t) {
			let t = p(e.position);
			if (t.firstSeen.has(e.identity) || t.firstSeen.set(e.identity, m++), n !== e.position && (n = e.position, r = null), r !== null && r !== e.identity) {
				let n = t.edges.get(r);
				n || (n = /* @__PURE__ */ new Set(), t.edges.set(r, n)), n.add(e.identity);
			}
			r = e.identity;
		}
	}
	for (let e of f.values()) for (let t of e.identities.keys()) e.firstSeen.has(t) || e.firstSeen.set(t, m++);
	let h = [...f.values()].sort((e, t) => lx(e.position, t.position)), g = [], _ = /* @__PURE__ */ new Map();
	for (let e of h) {
		let t = new Map([...e.identities.keys()].map((e) => [e, 0]));
		for (let n of e.edges.values()) for (let e of n) t.set(e, (t.get(e) ?? 0) + 1);
		let n = [], r = (t) => {
			n.push(t);
			let r = n.length - 1;
			for (; r > 0;) {
				let t = Math.floor((r - 1) / 2);
				if (e.firstSeen.get(n[t]) <= e.firstSeen.get(n[r])) break;
				[n[t], n[r]] = [n[r], n[t]], r = t;
			}
		}, i = () => {
			let t = n[0], r = n.pop();
			if (n.length > 0) {
				n[0] = r;
				let t = 0;
				for (;;) {
					let r = t * 2 + 1, i = r + 1;
					if (r >= n.length) break;
					let a = r;
					if (i < n.length && e.firstSeen.get(n[i]) < e.firstSeen.get(n[r]) && (a = i), e.firstSeen.get(n[t]) <= e.firstSeen.get(n[a])) break;
					[n[t], n[a]] = [n[a], n[t]], t = a;
				}
			}
			return t;
		};
		for (let n of e.identities.keys()) t.get(n) === 0 && r(n);
		let a = [];
		for (; n.length > 0;) {
			let n = i();
			a.push(n);
			for (let i of e.edges.get(n) ?? []) {
				let e = t.get(i) - 1;
				t.set(i, e), e === 0 && r(i);
			}
		}
		if (a.length !== e.identities.size) throw Error(`Adjacent table symbolic boundary ordering cycle at ${e.position}`);
		for (let t of a) {
			let { boundary: n, count: r } = e.identities.get(t);
			_.set(t, g.length);
			for (let e = 0; e < r; e += 1) g.push(n);
		}
	}
	let v = g.slice(1).map((e, t) => {
		let n = g[t];
		return e.sym === n.sym ? sx(e.position, n.position) : null;
	}), y = g.slice(1).map((e, t) => ix(sx(e.position, g[t].position))), b = (e, t) => {
		let n = /* @__PURE__ */ new Map(), r = Array(e.length);
		return e.forEach((e, i) => {
			let a = n.get(e.identity) ?? 0;
			n.set(e.identity, a + 1);
			let o = _.get(e.identity), s = d.get(e.identity).count;
			r[i] = t ? o + (s - 1 - a) : o + a;
		}), r;
	}, x = 0, S = u.map((e) => {
		let { input: t, row: n, groupBoundaries: i, descending: a } = e, o = b(i, a), s = o[0], c = o[i.length - 1], l = n.cells.map((e) => {
			let n = o[e.columnStart], i = o[e.columnStart + e.columnSpan];
			if (n == null || i == null) throw RangeError(`Table cell ${e.id} exceeds its authored grid`);
			let a = Math.min(n, i), s = Math.max(n, i);
			if (s <= a) throw Error(`Table cell ${e.id} cannot be mapped into the logical group grid`);
			let c = CS(e.borders, t.bidiVisual, r);
			return Object.freeze({
				...e,
				columnStart: a,
				columnSpan: s - a,
				borders: c
			});
		});
		return Object.freeze({
			...n,
			logicalRowIndex: x++,
			exceptionBorders: null,
			sourceTableEdges: wS(t, n, r),
			indentPt: t.bidiVisual === r ? n.indentPt : -n.indentPt,
			sourceOuterColumnStart: Math.min(s, c),
			sourceOuterColumnEnd: Math.max(s, c),
			cells: Object.freeze(l)
		});
	});
	return i.nodes.length, Object.freeze({
		kind: "adjacent-table-group-grid",
		id: e,
		source: n.source,
		flowDomainId: `${n.flowDomainId}:adjacent-group:${e}`,
		alignment: n.alignment,
		indentPt: n.indentPt,
		bidiVisual: r,
		columnWidthsPt: Object.freeze(y),
		columnWidthKeys: Object.freeze(v),
		rows: Object.freeze(S)
	});
}
//#endregion
//#region packages/docx/src/layout/table-pagination.ts
var PS = 1e-4;
function FS() {
	return Object.freeze({
		blockIndex: 0,
		paragraphLineStart: 0,
		nestedCursor: null,
		nestedFragmentIndex: 0
	});
}
function IS() {
	return Object.freeze({
		rowIndex: 0,
		rowFragmentIndex: 0,
		cells: Object.freeze([])
	});
}
function LS(e) {
	let t = 0;
	for (; e.rows[t]?.repeatedHeader === !0;) t += 1;
	return t;
}
function RS(e, t) {
	let n = e.layout.rows[t];
	return n ? e.input.rows[t]?.heightRule === "exact" ? Math.max(0, n.heightPt) : Math.max(0, n.heightPt, n.contentHeightPt) : 0;
}
function zS(e, t, n, r) {
	let i = e.layout.rows.flatMap((e) => e.cells).find((e) => e.id === t.id);
	if (!i) throw new V("INVALID_REFERENCE", `nested table fragment lost parent cell geometry: ${t.id}`);
	let a = Object.freeze({
		xPt: 0,
		yPt: 0,
		widthPt: i.contentBounds.widthPt,
		heightPt: Math.max(0, r)
	});
	return Object.freeze({
		...n,
		availableHeightPt: a.heightPt,
		placement: Object.freeze({
			...n.placement,
			container: Object.freeze({
				...n.placement.container,
				bounds: a
			}),
			cursor: Object.freeze({
				xPt: 0,
				yPt: 0
			}),
			availableBounds: a
		})
	});
}
function BS(e, t, n, r) {
	if (t === e.input.rows[n]) return RS(e, n);
	let i = pS({
		...e.input,
		id: `${e.input.id}:row-occurrence:${r.page.occurrenceId}:${t.logicalRowIndex}`,
		rows: [t]
	}, r.placement, r.services).layout;
	return Math.max(0, i.rows[0]?.heightPt ?? i.advancePt);
}
function VS(e, t, n, r) {
	return t === e.input.rows[n] ? Math.max(0, e.layout.rows[n]?.heightPt ?? 0) : BS(e, t, n, r);
}
function HS(e, t, n) {
	let r = n;
	for (let i = n; i <= r && i < t.length; i += 1) {
		let a = i === n ? e.cells : t[i].cells;
		for (let e of a) e.verticalMerge === "restart" && (r = Math.max(r, Gx(t, i, e.columnStart, e.columnSpan)));
	}
	return r;
}
function US(e, t, n, r) {
	let i = e.input.rows, a = HS(t, i, n), o = Math.min(i.length, a + 2), s = pS({
		...e.input,
		id: `${e.input.id}:completed-partial:${r.page.occurrenceId}:${t.logicalRowIndex}`,
		rows: [t, ...i.slice(n + 1, o)]
	}, r.placement, r.services).layout;
	return Math.max(0, s.rows[0]?.heightPt ?? 0);
}
function WS(e) {
	return e.cells.map((e) => e.blocks.map((e) => ({
		kind: "whole",
		blockIndex: e.sourceBlockIndex
	})));
}
function GS(e, t, n, r) {
	let i = r.reacquirePageDependentBlock;
	return !i || !t.cells.some((e) => e.blocks.some((e) => e.pageDependent === !0)) ? t : {
		...t,
		cells: t.cells.map((e, a) => ({
			...e,
			blocks: e.blocks.map((e) => e.pageDependent === !0 ? {
				...e,
				layout: i({
					logicalRowIndex: t.logicalRowIndex,
					logicalCellIndex: a,
					sourceBlockIndex: e.sourceBlockIndex,
					ownership: n,
					page: r.page,
					acquired: e.layout
				})
			} : e)
		}))
	};
}
function KS(e) {
	let t = e.positioning.horzSpecified && (e.positioning.horzAnchor === "page" || e.positioning.horzAnchor === "margin"), n = e.positioning.vertAnchor === "page" || e.positioning.vertAnchor === "margin";
	return t || n;
}
function qS(e, t, n, r, i) {
	return {
		...t,
		heightPt: null,
		heightRule: "auto",
		cells: t.cells.map((t, a) => {
			let o = n.cells[a] ?? FS();
			return {
				...t,
				blocks: t.blocks.slice(o.blockIndex).map((n, a) => {
					if (a === 0 && o.nestedCursor && n.layout.kind === "table") {
						let a = e.nestedById[n.layout.id];
						if (a) {
							let s = aC(a, o.nestedCursor, zS(e, t, r, r.freshPageHeightPt)), c = i.get(t.id);
							if (s.nextCursor && c !== void 0 && n.sourceBlockIndex < c) throw Error("Floating table anchor cannot follow an incomplete nested-table candidate");
							if (s.fragment) return {
								...n,
								layout: s.fragment
							};
						}
					}
					return a !== 0 || o.paragraphLineStart === 0 || n.layout.kind !== "paragraph" ? n : {
						...n,
						layout: eC(n.layout, o.paragraphLineStart, n.layout.lines.length)
					};
				})
			};
		})
	};
}
function JS(e, t, n, r, i, a, o, s, c) {
	let l = i.floatingTableFrames, u = i.reacquirePageDependentBlock, d = e.input.rows[t.logicalRowIndex];
	if (!l || !u || !d) return {
		row: t,
		resolved: [],
		registry: a,
		nextParagraphId: o
	};
	let f = e.floatingTables.filter((e) => d.cells.some((t) => t.id === e.hostCellId) && c(e));
	if (f.length === 0) return {
		row: t,
		resolved: [],
		registry: a,
		nextParagraphId: o
	};
	let p = /* @__PURE__ */ new Map();
	for (let e of f) p.set(e.hostCellId, Math.min(p.get(e.hostCellId) ?? Infinity, e.anchorBlockIndex));
	let m = {
		...i.placement,
		cursor: {
			...i.placement.cursor,
			yPt: i.placement.cursor.yPt + r
		}
	}, h = qS(e, t, s, i, p), g = pS({
		...e.input,
		id: `${e.input.id}:float-probe:${i.page.occurrenceId}:${t.logicalRowIndex}`,
		rows: [h]
	}, m, i.services).layout, _ = i.finalPlacementTranslationPt ?? {
		xPt: 0,
		yPt: 0
	}, v = (t, r, a) => {
		let o = a.cells.findIndex((e) => e.id === t.hostCellId), s = r.rows[0]?.cells[o], c = a.cells[o]?.blocks.findIndex((e) => e.sourceBlockIndex === t.anchorBlockIndex) ?? -1, l = c < 0 ? void 0 : s?.blocks[c], u = e.nestedById[t.tableId]?.layout;
		return !s || !l || !u ? null : Object.freeze({
			kind: "floating-table-placement",
			occurrenceId: [
				i.page.occurrenceId,
				t.hostCellId,
				t.sourceBlockIndex,
				t.tableId
			].join(":"),
			ownership: n,
			physicalPageIndex: i.page.physicalPageIndex,
			displayPageNumber: i.page.displayPageNumber,
			...t,
			columnBounds: Object.freeze({
				xPt: s.contentBounds.xPt + _.xPt,
				yPt: s.contentBounds.yPt + _.yPt,
				widthPt: s.contentBounds.widthPt,
				heightPt: s.contentBounds.heightPt
			}),
			anchorBounds: Object.freeze({
				xPt: s.contentBounds.xPt + _.xPt,
				yPt: s.flowBounds.yPt + l.offsetPt + _.yPt,
				widthPt: l.layout.flowBounds.widthPt,
				heightPt: l.layout.flowBounds.heightPt
			}),
			child: u
		});
	}, y = (n) => {
		let r = qS(e, n, s, i, p), c = n === t ? g : pS({
			...e.input,
			id: `${e.input.id}:float-converge:${i.page.occurrenceId}:${t.logicalRowIndex}`,
			rows: [r]
		}, m, i.services).layout, u = Eb(a, o, i.floatingTableRegistry?.coordinateSpace ?? "logical-page-points", i.floatingTableRegistry?.flowDomainId ?? e.input.flowDomainId), d = [];
		for (let e of f) {
			let t = v(e, c, r);
			if (!t || i.floatingTableRegistry?.coordinateSpace !== "upright-physical-page-points" && !KS(t)) continue;
			let n = Db(t, {
				page: l.page,
				margin: l.margin,
				text: {
					xPt: t.columnBounds?.xPt ?? t.anchorBounds.xPt,
					yPt: t.anchorBounds.yPt,
					widthPt: t.columnBounds?.widthPt ?? t.anchorBounds.widthPt,
					heightPt: t.anchorBounds.heightPt
				}
			}, u);
			d.push(n.placement), u = n.transaction;
		}
		return {
			resolved: Object.freeze(d),
			transaction: u
		};
	}, b = (e) => ({
		...t,
		cells: t.cells.map((r, a) => ({
			...r,
			blocks: r.blocks.map((o) => {
				let s = e.filter((e) => e.source.hostCellId === r.id && e.source.anchorBlockIndex === o.sourceBlockIndex).map((e) => Object.freeze({
					xPt: e.exclusionBounds.xPt - e.source.anchorBounds.xPt,
					yPt: e.exclusionBounds.yPt - e.source.anchorBounds.yPt,
					widthPt: e.exclusionBounds.widthPt,
					heightPt: e.exclusionBounds.heightPt
				}));
				return s.length === 0 || o.layout.kind !== "paragraph" ? o : {
					...o,
					layout: u({
						logicalRowIndex: t.logicalRowIndex,
						logicalCellIndex: a,
						sourceBlockIndex: o.sourceBlockIndex,
						ownership: n,
						page: i.page,
						acquired: o.layout,
						floatingTableExclusions: Object.freeze(s)
					})
				};
			})
		}))
	}), x = (e, t) => JSON.stringify({
		blocks: e.cells.map((e) => e.blocks.map((e) => ({
			sourceBlockIndex: e.sourceBlockIndex,
			layout: e.layout
		}))),
		placements: t
	}), S = y(t);
	if (S.resolved.length === 0) return {
		row: t,
		resolved: [],
		registry: a,
		nextParagraphId: o
	};
	try {
		let e = zo({
			seedState: x(t, S.resolved),
			step: (e) => {
				let t = b(e?.resolution.resolved ?? S.resolved), n = y(t);
				return Object.freeze({
					candidate: t,
					resolution: n,
					state: x(t, n.resolved)
				});
			},
			stateOf: (e) => e.state,
			limit: 16
		}).value;
		return {
			row: e.candidate,
			resolved: e.resolution.resolved,
			registry: Object.freeze([...e.resolution.transaction.base, ...e.resolution.transaction.delta]),
			nextParagraphId: e.resolution.transaction.nextParagraphId
		};
	} catch (e) {
		throw e instanceof Ro ? new V("NON_CONVERGENCE", `floating table final-frame reflow did not converge (${e.reason}; ${e.states.length} states)`) : e;
	}
}
function YS(e, t, n) {
	let r = e.input.rows[t.logicalRowIndex]?.cells.findIndex((e) => e.id === n.hostCellId) ?? -1;
	return r >= 0 && (t.ranges[r]?.some((e) => e.blockIndex === n.anchorBlockIndex && (e.kind === "whole" || e.kind === "paragraph" && e.lineStart === 0 || e.kind === "nested-table" && e.childFragmentIndex === 0)) ?? !1);
}
function XS(e) {
	return `${e.hostCellId}:${e.sourceBlockIndex}:${e.tableId}`;
}
function ZS(e, t) {
	return new Set(e.floatingTables.filter((n) => YS(e, t, n)).map(XS));
}
function QS(e, t) {
	return e.size === t.size && [...e].every((e) => t.has(e));
}
function $S(e, t, n = 0, r = !1, i = []) {
	return {
		input: e,
		logicalRowIndex: e.logicalRowIndex,
		fragmentIndex: n,
		ownership: t,
		ranges: WS(e),
		...r ? { clipAtPageEnd: !0 } : {},
		...i.length ? { resolvedFloatingTables: i } : {}
	};
}
function eC(e, t, n) {
	return Ov(e, {
		lineStart: t,
		lineEnd: n,
		continuesFromPrevious: t > 0,
		continuesOnNext: n < e.lines.length
	});
}
function tC(e, t, n, r, i) {
	let a = null, o = n;
	for (let s = n + 1; s <= e.lines.length; s += 1) {
		let c = eC(e, n, s), l = {
			layout: c,
			sourceBlockIndex: t
		};
		if (Vx([...r, l]) > i + PS) break;
		a = c, o = s;
	}
	return a ? {
		block: {
			layout: a,
			sourceBlockIndex: t
		},
		range: {
			kind: "paragraph",
			blockIndex: t,
			lineStart: n,
			lineEnd: o
		},
		lineEnd: o,
		advancePt: a.advancePt
	} : {
		block: null,
		range: null,
		lineEnd: n,
		advancePt: 0
	};
}
function nC(e, t, n, r, i) {
	if (t.verticalMerge === "continue") return {
		input: t,
		range: [],
		next: n,
		complete: !0
	};
	let a = [], o = [], s = n.blockIndex, c = n.paragraphLineStart, l = n.nestedCursor, u = n.nestedFragmentIndex;
	for (; s < t.blocks.length;) {
		let n = t.blocks[s], d = n.layout;
		if (d.kind === "paragraph") {
			if (n.structuralTrailing) {
				a.push(n), o.push({
					kind: "whole",
					blockIndex: n.sourceBlockIndex
				}), s += 1, c = 0;
				continue;
			}
			if (d.lines.length === 0) {
				if (Vx([...a, n]) > r + PS) break;
				a.push(n), o.push({
					kind: "whole",
					blockIndex: n.sourceBlockIndex
				}), s += 1, c = 0;
				continue;
			}
			let e = tC(d, n.sourceBlockIndex, c, a, r);
			if (!e.block || !e.range) break;
			if (a.push({
				...e.block,
				...n.structuralTrailing ? { structuralTrailing: !0 } : {}
			}), o.push(e.range), e.lineEnd < d.lines.length) {
				c = e.lineEnd;
				break;
			}
			s += 1, c = 0;
			continue;
		}
		let f = e.nestedById[d.id];
		if (f) {
			let c = Math.max(0, r - Vx(a)), d = aC(f, l ?? IS(), zS(e, t, i, c));
			if (!d.fragment) break;
			if (a.push({
				layout: d.fragment,
				sourceBlockIndex: n.sourceBlockIndex
			}), o.push({
				kind: "nested-table",
				blockIndex: n.sourceBlockIndex,
				childFragmentIndex: u
			}), d.nextCursor) {
				l = d.nextCursor, u += 1;
				break;
			}
			s += 1, l = null, u = 0;
			continue;
		}
		if (Vx([...a, n]) > r + PS) break;
		a.push(n), o.push({
			kind: "whole",
			blockIndex: n.sourceBlockIndex
		}), s += 1;
	}
	let d = s >= t.blocks.length;
	return {
		input: {
			...t,
			blocks: a
		},
		range: o,
		next: Object.freeze({
			blockIndex: s,
			paragraphLineStart: c,
			nestedCursor: l,
			nestedFragmentIndex: u
		}),
		complete: d
	};
}
function rC(e, t, n, r, i) {
	let a = t.cells.map((e, t) => n.cells[t] ?? FS()), o = Math.max(0, ...t.cells.map((e) => e.margins.topPt + e.margins.bottomPt)), s = Math.max(0, t.cellSpacingPt) * 2, c = {
		...t,
		heightPt: null,
		heightRule: "auto"
	}, l = rS({
		...e.input,
		rows: [c]
	})[0] ?? 0, u = Math.max(0, r - o - s - l), d = t.cells.map((t, n) => nC(e, t, a[n], u, i)), f = (e, t) => e.next.blockIndex !== a[t]?.blockIndex || e.next.paragraphLineStart !== a[t]?.paragraphLineStart || e.next.nestedFragmentIndex !== a[t]?.nestedFragmentIndex, p = d.some((e, n) => !e.complete && !f(e, n) && t.cells[n]?.blocks[a[n]?.blockIndex ?? 0]?.layout.kind === "paragraph");
	if (Cl({
		compatibility: i.compatibility,
		hasUnfinishedParagraphWithoutProgress: p
	}) || !d.some(f)) return {
		selected: null,
		next: n,
		complete: !1
	};
	let m = d.every((e) => e.complete);
	return m && n.rowFragmentIndex === 0 ? {
		selected: $S(t, "source"),
		next: Object.freeze({
			rowIndex: n.rowIndex + 1,
			rowFragmentIndex: 0,
			cells: Object.freeze([])
		}),
		complete: !0
	} : {
		selected: {
			input: {
				...c,
				id: `${t.id}:fragment:${n.rowFragmentIndex}`,
				heightPt: null,
				heightRule: "auto",
				cells: d.map((e, t) => ({
					...e.input,
					id: `${e.input.id}:fragment:${n.rowFragmentIndex}:${t}`
				}))
			},
			logicalRowIndex: t.logicalRowIndex,
			fragmentIndex: n.rowFragmentIndex,
			ownership: "source",
			ranges: d.map((e) => e.range)
		},
		next: Object.freeze({
			rowIndex: m ? n.rowIndex + 1 : n.rowIndex,
			rowFragmentIndex: m ? 0 : n.rowFragmentIndex + 1,
			cells: Object.freeze(m ? [] : d.map((e) => e.next))
		}),
		complete: m
	};
}
function iC(e, t, n) {
	let r = pS({
		...e.input,
		id: `${e.input.id}:fragment:${n.page.occurrenceId}`,
		rows: t.map((e) => e.input)
	}, n.placement, n.services).layout, i = r.rows.map((e, r) => {
		let i = t[r];
		return Object.freeze({
			...e,
			logicalRowIndex: i.logicalRowIndex,
			fragmentIndex: i.fragmentIndex,
			ownership: i.ownership,
			occurrenceId: n.page.occurrenceId,
			physicalPageIndex: n.page.physicalPageIndex,
			displayPageNumber: n.page.displayPageNumber,
			cells: Object.freeze(e.cells.map((e, n) => {
				let a = i.input.cells[n]?.verticalMerge ?? "none", o = i.input.cells[n], s = a === "continue" && t.slice(0, r).some((e) => e.input.cells.some((e) => e.verticalMerge === "restart" && e.columnStart === o?.columnStart && e.columnSpan === o?.columnSpan));
				return Object.freeze({
					...e,
					contentRanges: Object.freeze([...i.ranges[n] ?? []]),
					...a === "continue" && !s ? { visualMergeOwnership: "continuation" } : {}
				});
			}))
		});
	}), a = t.flatMap((t, r) => {
		let a = e.input.rows[t.logicalRowIndex];
		return a ? e.floatingTables.flatMap((o) => {
			let s = a.cells.findIndex((e) => e.id === o.hostCellId);
			if (s < 0 || !(t.ranges[s]?.some((e) => e.blockIndex === o.anchorBlockIndex && (e.kind === "whole" || e.kind === "paragraph" && e.lineStart === 0)) ?? !1)) return [];
			let c = t.input.cells[s], l = i[r]?.cells[s], u = c?.blocks.findIndex((e) => e.sourceBlockIndex === o.anchorBlockIndex) ?? -1, d = u < 0 ? void 0 : l?.blocks[u], f = e.nestedById[o.tableId]?.layout;
			if (!l || !d || !f) throw Error("Floating table occurrence references missing retained layout data");
			let p = Object.freeze({
				xPt: l.contentBounds.xPt,
				yPt: l.flowBounds.yPt + d.offsetPt,
				widthPt: d.layout.flowBounds.widthPt,
				heightPt: d.layout.flowBounds.heightPt
			});
			return [Object.freeze({
				kind: "floating-table-placement",
				occurrenceId: [
					n.page.occurrenceId,
					o.hostCellId,
					o.sourceBlockIndex,
					o.tableId
				].join(":"),
				ownership: t.ownership,
				physicalPageIndex: n.page.physicalPageIndex,
				displayPageNumber: n.page.displayPageNumber,
				...o,
				anchorBounds: p,
				child: f
			})];
		}) : [];
	}), o = Object.freeze(t.flatMap((e) => e.resolvedFloatingTables ?? [])), s = new Set(o.map((e) => e.occurrenceId)), c = t.some((e) => e.clipAtPageEnd === !0), l = c ? Math.min(r.advancePt, n.availableHeightPt) : r.advancePt, u = c ? {
		...r.flowBounds,
		heightPt: l
	} : r.flowBounds;
	return Object.freeze({
		...r,
		flowBounds: u,
		...c ? {
			inkBounds: u,
			clipBounds: u,
			advancePt: l
		} : {},
		columnWidthsPt: e.layout.columnWidthsPt,
		rows: Object.freeze(i),
		floatingTables: Object.freeze(a.filter((e) => !s.has(e.occurrenceId))),
		resolvedFloatingTables: o,
		...n.floatingTableRegistry ? { resolvedFloatingTableCoordinateSpace: n.floatingTableRegistry.coordinateSpace } : {}
	});
}
function aC(e, t, n) {
	if (t.rowIndex >= e.input.rows.length) return {
		fragment: null,
		nextCursor: null,
		requiresFreshPage: !1
	};
	let r = [], i = n.floatingTableRegistry;
	if (i && i.flowDomainId.length === 0) throw Error("Floating table registry coordinate/domain mismatch");
	let a = Object.freeze([...i?.entries ?? []]), o = i?.nextParagraphId ?? 0, s = Math.max(0, n.availableHeightPt), c = LS(e.input);
	if (t.rowIndex >= c && t.rowIndex > 0 && c > 0) for (let i = 0; i < c; i += 1) {
		let c = JS(e, GS(e, e.input.rows[i], "repeated-header", n), "repeated-header", n.availableHeightPt - s, n, a, o, IS(), () => !0), l = c.row, u = BS(e, l, i, n);
		if (u > s + PS) return {
			fragment: null,
			nextCursor: t,
			requiresFreshPage: !0
		};
		r.push($S(l, "repeated-header", 0, !1, c.resolved)), a = c.registry, o = c.nextParagraphId, s -= u;
	}
	let l = t, u = t.rowIndex, d = t.rowFragmentIndex === 0 && t.cells.length === 0 && e.layout.rows.slice(t.rowIndex).reduce((e, t) => e + Math.max(0, t.heightPt), 0) <= s + PS, f = !1;
	for (; u < e.input.rows.length;) {
		let i = "source", c = GS(e, e.input.rows[u], i, n), p = u === t.rowIndex ? t : Object.freeze({
			rowIndex: u,
			rowFragmentIndex: 0,
			cells: Object.freeze([])
		}), m = u !== t.rowIndex || t.rowFragmentIndex === 0, h = m ? JS(e, c, i, n.availableHeightPt - s, n, a, o, p, (e) => {
			let t = c.cells.findIndex((t) => t.id === e.hostCellId), n = c.cells[t]?.blocks.findIndex((t) => t.sourceBlockIndex === e.anchorBlockIndex) ?? -1;
			if (n < 0) return !1;
			let r = p.cells[t] ?? FS();
			return r.blockIndex < n || r.blockIndex === n && r.paragraphLineStart === 0;
		}) : {
			row: c,
			resolved: Object.freeze([]),
			registry: a,
			nextParagraphId: o
		}, g = h.row, _ = d || f ? VS(e, g, u, n) : BS(e, g, u, n);
		if (m && _ <= s + PS) {
			r.push($S(g, "source", 0, !1, h.resolved)), a = h.registry, o = h.nextParagraphId, s -= _, u += 1, l = u < e.input.rows.length ? Object.freeze({
				rowIndex: u,
				rowFragmentIndex: 0,
				cells: Object.freeze([])
			}) : null;
			continue;
		}
		if (g.cantSplit) {
			if (r.some((e) => e.ownership === "source")) break;
			if (_ + (n.availableHeightPt - s) <= n.freshPageHeightPt + PS || n.availableHeightPt + PS < n.freshPageHeightPt) return {
				fragment: null,
				nextCursor: t,
				requiresFreshPage: !0
			};
			if (Sl({
				compatibility: n.compatibility,
				availableHeightPt: n.availableHeightPt,
				freshPageHeightPt: n.freshPageHeightPt,
				epsilonPt: PS
			})) {
				r.push($S(g, "source", 0, !0, h.resolved)), a = h.registry, o = h.nextParagraphId, l = u + 1 < e.input.rows.length ? Object.freeze({
					rowIndex: u + 1,
					rowFragmentIndex: 0,
					cells: Object.freeze([])
				}) : null;
				break;
			}
		}
		if (n.oversizedRowPolicy === "atomic" && r.every((e) => e.ownership === "repeated-header") && n.availableHeightPt + PS >= n.freshPageHeightPt && _ > n.freshPageHeightPt + PS) {
			r.push($S(g, "source", 0, !1, h.resolved)), a = h.registry, o = h.nextParagraphId, l = u + 1 < e.input.rows.length ? Object.freeze({
				rowIndex: u + 1,
				rowFragmentIndex: 0,
				cells: Object.freeze([])
			}) : null;
			break;
		}
		let v = rC(e, c, p, s, n), y = null, b = /* @__PURE__ */ new Set();
		for (; v.selected;) {
			let t = ZS(e, v.selected), r = JSON.stringify([...t].sort());
			if (b.has(r)) throw Error("Floating table selected ownership did not converge");
			b.add(r), y = JS(e, c, i, n.availableHeightPt - s, n, a, o, p, (e) => t.has(XS(e)));
			let l = rC(e, y.row, p, s, n);
			if (!l.selected) {
				v = l;
				break;
			}
			let u = ZS(e, l.selected);
			if (v = l, QS(t, u)) break;
			y = null;
		}
		if (v.selected && y === null) throw Error("Floating table selected ownership did not converge");
		if (v.selected) {
			let t = y?.resolved ?? [];
			if (t.some((t) => !YS(e, v.selected, t.source))) throw Error("Floating table transaction included an unowned occurrence");
			let i = a.length, c = (y?.registry ?? a).slice(i);
			if (r.push({
				...v.selected,
				...t.length ? { resolvedFloatingTables: Object.freeze(t) } : {}
			}), a = Object.freeze([...a, ...c]), o += c.length, l = v.next.rowIndex >= e.input.rows.length ? null : v.next, v.complete && v.next.rowIndex < e.input.rows.length) {
				s = Math.max(0, s - US(e, v.selected.input, u, n)), f = !0, u = v.next.rowIndex;
				continue;
			}
		}
		break;
	}
	if (r.filter((e) => e.ownership === "source").length === 0) {
		if (!(n.availableHeightPt + PS < n.freshPageHeightPt)) throw new V("NON_CONVERGENCE", "Table pagination cannot advance from a fresh page");
		return {
			fragment: null,
			nextCursor: t,
			requiresFreshPage: !0
		};
	}
	let p = iC(e, r, n);
	for (; p.advancePt > n.availableHeightPt + PS;) {
		let t = r.at(-1), i = r.filter((e) => e.ownership === "source").length;
		if (!(t?.ownership === "source" && t.fragmentIndex === 0) || i <= 1) break;
		r.pop(), l = Object.freeze({
			rowIndex: t.logicalRowIndex,
			rowFragmentIndex: 0,
			cells: Object.freeze([])
		}), p = iC(e, r, n);
	}
	return p.advancePt > n.availableHeightPt + PS && n.availableHeightPt + PS < n.freshPageHeightPt && p.advancePt <= n.freshPageHeightPt + PS ? {
		fragment: null,
		nextCursor: t,
		requiresFreshPage: !0
	} : {
		fragment: p,
		nextCursor: l,
		requiresFreshPage: !1,
		floatingTablePlacements: p.resolvedFloatingTables,
		...i ? { floatingTableRegistryDelta: (() => {
			let e = a.slice(i.entries.length).filter((e) => p.resolvedFloatingTables.some((t) => t.occurrenceId === e.occurrenceId));
			return wb(i, e, i.nextParagraphId + e.length);
		})() } : {}
	};
}
//#endregion
//#region packages/docx/src/layout/registered-paragraph-acquisition.ts
function oC(e, t, n, r) {
	let i = Ng(e, n.flowDomainId), a = pv(t, {
		...n,
		exclusions: Object.freeze([
			...n.exclusions,
			...i.exclusions,
			...r?.exclusions ?? []
		]),
		anchorCollisions: Object.freeze([
			...n.anchorCollisions ?? [],
			...i.collisions,
			...r?.collisions ?? []
		])
	});
	return Pg(e, i, a.layout), a;
}
//#endregion
//#region packages/docx/src/layout/paragraph-float-authority.ts
function sC(e, t) {
	return e.flatMap((e, n) => e.kind === "shape" && e.anchorOccurrenceId && e.authoredWrap === void 0 ? [] : [{
		id: e.imageKey || `${t}:float:${n}`,
		wrap: e.authoredWrap ?? (e.mode === "topAndBottom" ? "topAndBottom" : "square"),
		wrapSide: oo(e.side),
		bounds: {
			xPt: e.xLeft,
			yPt: e.yTop,
			widthPt: Math.max(0, e.xRight - e.xLeft),
			heightPt: Math.max(0, e.yBottom - e.yTop)
		},
		polygon: e.wrapPolygon ?? [
			{
				xPt: e.xLeft,
				yPt: e.yTop
			},
			{
				xPt: e.xRight,
				yPt: e.yTop
			},
			{
				xPt: e.xRight,
				yPt: e.yBottom
			},
			{
				xPt: e.xLeft,
				yPt: e.yBottom
			}
		],
		...e.kind === "table" && !e.anchorOccurrenceId ? { verticalOwnership: "page" } : {},
		...e.anchorOccurrenceId ? {
			anchorOccurrenceId: e.anchorOccurrenceId,
			verticalOwnership: "page"
		} : {}
	}]);
}
function cC(e) {
	return e.flatMap((e) => e.kind !== "shape" || !e.anchorOccurrenceId ? [] : [{
		occurrenceId: e.anchorOccurrenceId,
		bounds: {
			xPt: e.imageX,
			yPt: e.imageY,
			widthPt: e.imageW,
			heightPt: e.imageH
		},
		horizontalOwnership: "page",
		verticalOwnership: "page"
	}]);
}
//#endregion
//#region packages/docx/src/layout/drawingml-collision-registry.ts
function lC(e) {
	if (e.occurrenceId.length === 0) throw Error("DrawingML collision occurrence ID must not be empty");
	let { xPt: t, yPt: n, widthPt: r, heightPt: i } = e.bounds;
	if (![
		t,
		n,
		r,
		i
	].every(Number.isFinite) || r < 0 || i < 0) throw Error(`DrawingML collision bounds are invalid: ${e.occurrenceId}`);
	if (e.horizontalOwnership !== "page" && e.horizontalOwnership !== "host" || e.verticalOwnership !== "page" && e.verticalOwnership !== "host") throw Error(`DrawingML collision ownership is invalid: ${e.occurrenceId}`);
}
function uC(e) {
	return lC(e), Object.freeze({
		occurrenceId: e.occurrenceId,
		bounds: Object.freeze({ ...e.bounds }),
		horizontalOwnership: e.horizontalOwnership,
		verticalOwnership: e.verticalOwnership,
		...e.relativeHeight === void 0 ? {} : { relativeHeight: e.relativeHeight }
	});
}
function dC(e, t) {
	return Object.freeze({
		coordinateSpace: t,
		flowDomainId: e,
		entries: Object.freeze([])
	});
}
function fC(e, t) {
	return Object.freeze({
		coordinateSpace: e.coordinateSpace,
		flowDomainId: e.flowDomainId,
		baseEntries: e.entries,
		baseEntryCount: e.entries.length,
		entries: Object.freeze(t.map(uC))
	});
}
function pC(e, t) {
	if (t.coordinateSpace !== e.coordinateSpace) throw Error("DrawingML collision registry coordinate space mismatch");
	if (t.flowDomainId !== e.flowDomainId) throw Error("DrawingML collision registry flow domain mismatch");
	if (t.baseEntries !== e.entries || t.baseEntryCount !== e.entries.length) throw Error("DrawingML collision registry delta is stale");
	let n = new Set(e.entries.map((e) => e.occurrenceId));
	for (let e of t.entries) {
		if (lC(e), n.has(e.occurrenceId)) throw Error(`DrawingML collision occurrence committed twice: ${e.occurrenceId}`);
		n.add(e.occurrenceId);
	}
}
function mC(e, t) {
	return pC(e, t), Object.freeze({
		coordinateSpace: e.coordinateSpace,
		flowDomainId: e.flowDomainId,
		entries: Object.freeze([...e.entries, ...t.entries])
	});
}
//#endregion
//#region packages/docx/src/layout/anchor-classification.ts
function hC(e, t) {
	return Qh(e, t);
}
function gC(e) {
	return so(e.wrapMode) && hC(e.anchorYRelativeFrom ?? null, e.anchorYFromPara ?? !1);
}
//#endregion
//#region packages/docx/src/vertical-text.ts
function _C(e) {
	let t = ge(e);
	return t === "U" || t === "Tu" ? "upright" : t === "Tr" ? "rotate" : "sideways";
}
var vC = new Set([65294]);
function yC(e) {
	return vC.has(e) ? {
		dx: .4,
		dy: -.4
	} : {
		dx: 0,
		dy: 0
	};
}
function bC(e) {
	let t = [], n = "", r = null;
	for (let i of e) {
		let e = _C(i.codePointAt(0) ?? 0);
		r === null ? (r = e, n = i) : e === r ? n += i : (t.push({
			text: n,
			mode: r
		}), n = i, r = e);
	}
	return n !== "" && r !== null && t.push({
		text: n,
		mode: r
	}), t;
}
var xC = () => !1;
function SC(e, t, n) {
	let r = e.textBaseline;
	e.textBaseline = "alphabetic";
	let i = e.measureText(t);
	e.textBaseline = r;
	let a = i.fontBoundingBoxAscent, o = i.fontBoundingBoxDescent;
	return typeof a == "number" && typeof o == "number" && (a !== 0 || o !== 0) ? (a - o) / 2 : .38 * n;
}
function CC(e, t) {
	let n = e.textAlign, r = e.textBaseline;
	e.textAlign = "center", e.textBaseline = "middle";
	let i = e.measureText(t);
	e.textAlign = n, e.textBaseline = r;
	let a = i.actualBoundingBoxAscent, o = i.actualBoundingBoxDescent;
	return typeof a == "number" && typeof o == "number" ? (a - o) / 2 : 0;
}
function wC(e) {
	return _C(e) === "rotate" && O(e) === null && !j(e);
}
function TC(e) {
	let t = ge(e);
	return t === "Tu" || t === "Tr";
}
function EC(e, t) {
	let n = e.textAlign, r = e.textBaseline;
	e.textAlign = "center", e.textBaseline = "middle";
	let i = e.measureText(t);
	e.textAlign = n, e.textBaseline = r;
	let a = i.actualBoundingBoxLeft, o = i.actualBoundingBoxRight;
	return typeof a != "number" || typeof o != "number" || !Number.isFinite(a) || !Number.isFinite(o) ? null : {
		extentPx: a + o,
		shiftPx: (a - o) / 2
	};
}
function DC(e, t, n, r, i, a, o) {
	let s = e.textAlign, c = e.textBaseline, l = () => (e.textAlign = n === "sideways" ? "left" : "center", e.textBaseline = n === "sideways" ? "alphabetic" : "middle", e.measureText(t)), u;
	try {
		u = o ? se(e, l) : l();
	} finally {
		e.textAlign = s, e.textBaseline = c;
	}
	if (n === "upright") {
		if (!Number.isFinite(u.actualBoundingBoxLeft) || !Number.isFinite(u.actualBoundingBoxRight)) return;
		let e = u.actualBoundingBoxLeft, t = u.actualBoundingBoxRight, n = a === "vertical-rl" ? 1 : i, o = -(r.xPt - e) * n, s = -(r.xPt + t) * n;
		return Object.freeze({
			startPt: Math.min(o, s),
			endPt: Math.max(o, s)
		});
	}
	if (!Number.isFinite(u.actualBoundingBoxAscent) || !Number.isFinite(u.actualBoundingBoxDescent)) return;
	let d = u.actualBoundingBoxAscent, f = u.actualBoundingBoxDescent, p = r.yPt - d, m = r.yPt + f;
	return Object.freeze({
		startPt: Math.min(p, m),
		endPt: Math.max(p, m)
	});
}
function OC(e, t, n, r, i) {
	let a = e.measureText(t).width;
	if (TC(n) && r(n)) {
		let n = ee(e, t);
		return {
			naturalPx: n.cellAdvancePx,
			vert: n,
			rotateInkShiftPx: 0
		};
	}
	if (i && wC(n)) {
		let n = EC(e, t);
		if (n !== null && n.extentPx > a) return {
			naturalPx: n.extentPx,
			vert: null,
			rotateInkShiftPx: n.shiftPx
		};
	}
	return {
		naturalPx: a,
		vert: null,
		rotateInkShiftPx: 0
	};
}
function kC(e, t, n, r, i = 1, a = !1, o = xC, s = "vertical-rl") {
	let c = [], l = SC(e, t, n), u = 0, d = 0;
	for (let f of bC(t)) {
		if (f.mode === "sideways") {
			let t = [...f.text].length, n = e.measureText(f.text).width * i + r * t, a = {
				xPt: 0,
				yPt: l
			}, o = DC(e, f.text, "sideways", a, i, s, !1);
			c.push({
				range: {
					start: d,
					end: d + f.text.length
				},
				text: f.text,
				orientation: "sideways",
				originPt: u,
				advancePt: n,
				drawOffsetPt: a,
				verticalFeature: !1,
				...o ? { blockAxisInkBounds: o } : {}
			}), u += n, d += f.text.length;
			continue;
		}
		for (let t of f.text) {
			let l = t.codePointAt(0) ?? 0, f = _C(l), p = f === "rotate" ? O(l) : null, m = f === "rotate" && p === null && j(l), h = OC(e, t, l, o, a), g = h.naturalPx * i + r, _ = {
				start: d,
				end: d + t.length
			};
			if (h.vert !== null) {
				let n = {
					xPt: 0,
					yPt: 0
				}, r = DC(e, t, "upright", n, i, s, !0);
				c.push({
					range: _,
					text: t,
					orientation: "upright",
					originPt: u + h.vert.originInCellPx * i,
					advancePt: g,
					drawOffsetPt: n,
					verticalFeature: !0,
					...r ? { blockAxisInkBounds: r } : {}
				});
			} else if (f === "upright" || p !== null || m) {
				let r = p === null ? ie(l) : null, a = p ?? r, o = a === null ? t : String.fromCodePoint(a), d = a === null ? yC(l) : {
					dx: 0,
					dy: 0
				}, f = Ds(r), m = d.dy === 0 && !f ? CC(e, o) / n : 0, h = {
					xPt: d.dx * n,
					yPt: (m + d.dy) * n
				}, v = DC(e, o, "upright", h, i, s, !1);
				c.push({
					range: _,
					text: o,
					orientation: "upright",
					originPt: u + g / 2,
					advancePt: g,
					drawOffsetPt: h,
					verticalFeature: !1,
					...v ? { blockAxisInkBounds: v } : {}
				});
			} else {
				let n = {
					xPt: 0,
					yPt: 0
				}, r = DC(e, t, "rotate", n, i, s, !1);
				c.push({
					range: _,
					text: t,
					orientation: "rotate",
					originPt: u + g / 2 + i * h.rotateInkShiftPx,
					advancePt: g,
					drawOffsetPt: n,
					verticalFeature: !1,
					...r ? { blockAxisInkBounds: r } : {}
				});
			}
			u += g, d += t.length;
		}
	}
	return c;
}
function AC(e, t, n) {
	let r = 0;
	for (let i of bC(t)) {
		if (i.mode === "sideways") {
			r += e.measureText(i.text).width;
			continue;
		}
		for (let t of i.text) {
			let i = OC(e, t, t.codePointAt(0) ?? 0, n, !0);
			r += i.naturalPx;
		}
	}
	return r - e.measureText(t).width;
}
function jC(e, t) {
	return AC(e, t, (t) => T(e, t));
}
function MC(e, t, n, r, i) {
	return {
		x: t,
		y: i - (e + n),
		w: r,
		h: n
	};
}
//#endregion
//#region packages/docx/src/layout/production-body-layout.ts
function NC(e, t, n, r) {
	Yl(e.blocks.body);
	let i = e.acquisition, a = i.acquisitionInputs, o = i.effectiveTablePositioning, s = i.publicAnchorBridge, c = Rs(e.fonts.familyClasses, e.fonts.familyPitches), l = (e, t, n) => `${e}${t ? `|clr:${t}` : ""}${n ? `|duo:${n.clr1}:${n.clr2}` : ""}`;
	function u(e, t, n = {}, r, i = {}, o, c) {
		let l = su(r, t), u = o;
		return {
			ctx: e,
			verticalGlyphMeasurement: Dr(u),
			acquisitionInputs: a,
			contentX: t.marginLeft,
			contentW: t.pageWidth - t.marginLeft - t.marginRight,
			y: 0,
			pageH: t.pageHeight,
			pageIndex: 0,
			totalPages: Rr(u).totalPages,
			marginLeft: t.marginLeft,
			marginRight: t.marginRight,
			marginTop: yu(t.marginTop),
			marginBottom: yu(t.marginBottom),
			pageWidth: t.pageWidth,
			floats: [],
			floatParaSeq: 0,
			layoutSettings: r,
			sectionLayout: l,
			storyContext: Bb,
			docEastAsian: r.documentHasEastAsianText,
			fontFamilyClasses: n,
			resolvedLocalFonts: i,
			layoutServices: u,
			retainedTableAcquisition: {
				layoutServices: (e) => e.layoutServices,
				tableFormat: a.tableFormatInput,
				resolveColumns: m,
				createCellState: (e, t, n) => ({
					...Gb(e),
					contentX: 0,
					contentW: t,
					y: 0,
					containerShading: n.background ?? e.containerShading,
					floats: [],
					floatParaSeq: 0,
					pageAnchorPrescanned: /* @__PURE__ */ new Set()
				}),
				acquireParagraph: (e, t, n, r, i, a, o, c) => {
					let l = c ?? {
						story: "body",
						storyInstance: "body",
						path: [...r]
					}, u = t.runs.filter((e, t) => s(l, t) !== null);
					u.length > 0 && E({
						...t,
						runs: u
					}, e, e.y);
					let d = Wb(e, t), f = oC(e, e.acquisitionInputs.paragraphAcquisitionInput(t, l), {
						id: `${l.story}:${l.storyInstance}:${l.path.join(".")}`,
						source: l,
						flowDomainId: i,
						ordinaryFlow: !0,
						context: d,
						placement: {
							startYPt: e.y,
							paragraphXPt: 0,
							availableWidthPt: n,
							maximumYPt: e.pageH,
							suppressSpaceBefore: !0
						},
						measurer: {
							context: e.ctx,
							fontFamilyClasses: e.fontFamilyClasses
						},
						environment: Rb(e),
						exclusions: sC(e.floats, i),
						anchorCollisions: cC(e.floats),
						anchorCellBounds: {
							xPt: 0,
							yPt: 0,
							widthPt: n,
							heightPt: e.pageH
						},
						containerShading: e.containerShading,
						...a ? { paragraphBorderEdges: a } : {},
						trailingExtentPt: Math.max(d.spaceAfterPt, a?.bottom === "none" ? 0 : Ll(t.borders)),
						continuesFromPrevious: !1,
						anchorFrames: Vb(e),
						acquireCompleteStory: e.acquireCompleteTextBoxStory
					}, o).layout;
					return t.spaceBefore === 0 ? f : Object.freeze({
						...f,
						flowBounds: Object.freeze({
							...f.flowBounds,
							heightPt: f.flowBounds.heightPt + t.spaceBefore
						}),
						advancePt: f.advancePt + t.spaceBefore,
						spacing: Object.freeze({
							...f.spacing,
							beforePt: t.spaceBefore
						})
					});
				},
				registerFloatingTable: (e, t) => {
					let n = !t.positioning.horzSpecified || t.positioning.horzAnchor !== "page" && t.positioning.horzAnchor !== "margin", r = t.positioning.vertAnchor !== "page" && t.positioning.vertAnchor !== "margin";
					if (!n || !r) return null;
					let i = e.pageH, a = {
						xPt: e.contentX,
						yPt: e.y,
						widthPt: e.contentW,
						heightPt: t.child.advancePt
					}, o = xb(t.positioning, {
						page: {
							xPt: 0,
							yPt: 0,
							widthPt: e.pageWidth,
							heightPt: i
						},
						margin: {
							xPt: e.marginLeft,
							yPt: e.marginTop,
							widthPt: Math.max(0, e.pageWidth - e.marginLeft - e.marginRight),
							heightPt: Math.max(0, i - e.marginTop - e.marginBottom)
						},
						text: a
					}, t.child.columnWidthsPt.reduce((e, t) => e + t, 0), t.child.advancePt), s = hb(e, {
						x: o.x,
						y: o.y,
						w: o.w,
						h: o.h,
						dl: t.positioning.leftFromTextPt,
						dr: t.positioning.rightFromTextPt,
						dt: t.positioning.topFromTextPt,
						db: t.positioning.bottomFromTextPt,
						kind: "table",
						mode: "square",
						side: "bothSides",
						imageKey: "",
						paraId: e.floatParaSeq++,
						avoidOverlap: !0,
						tableOverlap: t.overlap
					});
					return Object.freeze({
						xPt: s.imageX - a.xPt,
						yPt: s.imageY - a.yPt
					});
				},
				advanceState: (e, t) => {
					e.y += t;
				}
			},
			retainedTablesBySourceIndex: /* @__PURE__ */ new Map(),
			currentDateMs: c?.currentDateMs,
			showTrackedChanges: c?.showTrackedChanges,
			kinsoku: r.kinsoku,
			defaultTabPt: r.defaultTabPt,
			get verticalCJK() {
				return Nb(this.sectionLayout.textDirection);
			},
			get verticalAllRotated() {
				return Nb(this.sectionLayout.textDirection) && Pb(this.sectionLayout.textDirection);
			},
			verticalPhys: Mb(t) ? (() => {
				let e = Ib(t);
				return {
					pageWidth: e.pageWidth,
					pageHeight: e.pageHeight,
					marginLeft: e.marginLeft,
					marginRight: e.marginRight,
					marginTop: yu(e.marginTop),
					marginBottom: yu(e.marginBottom),
					physicalPageWidthPt: e.pageWidth
				};
			})() : void 0
		};
	}
	function d(e, t, n) {
		let r = (e) => {
			let t = Object.freeze({
				top: null,
				right: null,
				bottom: null,
				left: null,
				insideH: null,
				insideV: null
			});
			return Object.freeze({
				kind: "table",
				id: e.id,
				source: e.source,
				flowDomainId: e.flowDomainId,
				ordinaryFlow: !0,
				alignment: e.alignment,
				indentPt: e.indentPt,
				bidiVisual: e.bidiVisual,
				columnWidthsPt: e.columnWidthsPt,
				columnWidthKeys: e.columnWidthKeys,
				borders: t,
				rows: Object.freeze(e.rows.map((e) => Object.freeze({
					...e,
					exceptionBorders: e.sourceTableEdges
				})))
			});
		}, i = (t) => {
			if (t.story !== "body" || t.storyInstance !== "body" || t.path.length !== 1) throw Error("Body acquisition requires a top-level body source");
			let n = e.blocks.resolve(t);
			if (!n || n.type !== "paragraph" && n.type !== "table") throw Error(`Body source does not identify a flow block: ${t.path.join(".")}`);
			return n;
		}, a = (t) => e.blocks.resolve(t), l = (e, t, n, r, i, a, o = Object.freeze({ boundary: null }), s) => {
			let c = Zl(t) ?? {
				top: "top",
				bottom: "bottom"
			}, l = Ub(e, t);
			return pv(t, {
				id: `${n.story}:${n.storyInstance}:${n.path.join(".")}`,
				source: n,
				flowDomainId: r.flowDomainId,
				ordinaryFlow: !0,
				context: l,
				placement: {
					startYPt: e.y,
					paragraphXPt: r.availableBounds.xPt,
					availableWidthPt: i,
					maximumYPt: e.pageH,
					suppressSpaceBefore: a
				},
				measurer: {
					context: e.ctx,
					fontFamilyClasses: e.fontFamilyClasses
				},
				environment: Rb(e),
				exclusions: sC(e.floats, r.flowDomainId),
				anchorCollisions: s ?? cC(e.floats),
				containerShading: e.containerShading,
				paragraphBorderEdges: c,
				trailingExtentPt: Math.max(l.spaceAfterPt, c.bottom === "none" ? 0 : Ll(t.borders)),
				continuesFromPrevious: o.boundary !== null,
				...o.sourceRangeStart === void 0 ? {} : { sourceRangeStart: o.sourceRangeStart },
				anchorFrames: Vb(e),
				acquireCompleteStory: e.acquireCompleteTextBoxStory
			}, o.boundary === null ? void 0 : {
				boundary: o.boundary,
				...o.uniformRubyAdvancePt === void 0 ? {} : { uniformRubyAdvancePt: o.uniformRubyAdvancePt }
			});
		};
		return Object.freeze({ openBodyLayoutSession(d, f, _) {
			if (!t) throw Error("Body layout acquisition requires a measurement context");
			let v = {
				...e.section,
				...d.section.geometry,
				textDirection: d.section.textDirection,
				vAlign: d.section.verticalAlignment
			}, y = u(t, Nb(v.textDirection) ? Fb(v) : v, c, e.documentLayoutSettings, n, f, _);
			_.showTrackedChanges === !0 && (y.revisionAuthorColor = qv(e.blocks.body));
			let b = e.blocks.footnotes, x = e.blocks.endnotes, S = Mv(b);
			y.noteNumbers = new Map([...[...jv(b, Nv(e.blocks.body, "footnote"))].map(([e, t]) => [`footnote:${e}`, t]), ...[...jv(x, Nv(e.blocks.body, "endnote"))].map(([e, t]) => [`endnote:${e}`, t])]);
			let C = d.initialLocation, w = (e) => `body:page:${e}:registry`, T = Object.freeze({
				coordinateSpace: "logical-page-points",
				flowDomainId: w(C.pageIndex),
				entries: Object.freeze([]),
				nextParagraphId: 0
			}), O = dC(w(C.pageIndex), "logical-page-points"), k = (e, t) => {
				let n = t.section.geometry;
				e.sectionLayout = t.section, e.pageIndex = t.pageIndex;
				let r = Rr(f).resolveDestinationPage?.(t.pageIndex);
				e.displayPageNumber = r?.displayPageNumber ?? t.pageIndex + 1, e.pageNumberFormat = r?.pageNumberFormat ?? e.pageNumberFormat, e.pageWidth = n.pageWidth, e.pageH = n.pageHeight, e.marginLeft = n.marginLeft, e.marginRight = n.marginRight, e.marginTop = yu(n.marginTop), e.marginBottom = yu(n.marginBottom), e.contentX = t.availableBounds.xPt, e.contentW = t.availableBounds.widthPt, e.y = t.cursorPt.yPt;
			}, A = (e) => {
				C = e, k(y, e);
			};
			A(C);
			let j = (e, t, n, r, i = T.nextParagraphId) => {
				let a = new Set(T.entries.map((e) => e.occurrenceId)), o = e.runs.flatMap((i, o) => {
					if (i.type !== "shape" && i.type !== "image" && i.type !== "chart") return [];
					let c = s(t, o);
					return !c || r && !r.has(c.occurrenceId) || a.has(c.occurrenceId) || c.pageOwned && n.pageAnchorPrescanned?.has(e) ? [] : [{
						run: i,
						occurrenceId: c.occurrenceId
					}];
				});
				if (o.length === 0) return Object.freeze([]);
				let c = n.floats.length;
				E({
					...e,
					runs: o.map(({ run: e }) => e)
				}, n, n.y);
				let l = n.floats.slice(c);
				if (l.length !== o.length) throw Error("Public paragraph anchor acquisition did not retain every wrap float");
				return Object.freeze(l.map((e, t) => {
					let n = o[t].occurrenceId;
					return Object.freeze({
						kind: "shape",
						occurrenceId: n,
						exclusionId: n,
						paragraphId: i,
						bounds: Object.freeze({
							xPt: e.imageX,
							yPt: e.imageY,
							widthPt: e.imageW,
							heightPt: e.imageH
						}),
						exclusionBounds: Object.freeze({
							xPt: e.xLeft,
							yPt: e.yTop,
							widthPt: e.xRight - e.xLeft,
							heightPt: e.yBottom - e.yTop
						}),
						wrap: o[t].run.wrapMode,
						wrapSide: e.side,
						wrapDistances: Object.freeze({
							topPt: e.distTop,
							rightPt: e.distRight,
							bottomPt: e.distBottom,
							leftPt: e.distLeft
						}),
						...e.wrapPolygon ? { wrapPolygon: Object.freeze([...e.wrapPolygon]) } : {}
					});
				}));
			}, M = (e) => {
				let t = new Map((e.anchorFrames ?? []).flatMap((e) => {
					if (e.status !== "resolved") return [];
					let t = (e) => e.status === "resolved" && (e.referenceFrame === "paragraph" || e.referenceFrame === "line" || e.referenceFrame === "character");
					return t(e.axes.horizontal) || t(e.axes.vertical) ? [[e.occurrenceId, e]] : [];
				}));
				if (t.size === 0) return Object.freeze([]);
				let n = new Map(e.exclusions.flatMap((e) => e.anchorOccurrenceId ? [[e.anchorOccurrenceId, e]] : []));
				return Object.freeze((e.anchorCollisions ?? []).flatMap((e) => {
					let r = t.get(e.occurrenceId);
					if (!r || r.geometry.wrap.kind === "none") return [];
					let i = n.get(e.occurrenceId);
					if (!i) throw Error(`Wrapped anchor omitted exclusion geometry: ${e.occurrenceId}`);
					return [Object.freeze({
						kind: "shape",
						occurrenceId: e.occurrenceId,
						exclusionId: e.occurrenceId,
						paragraphId: T.nextParagraphId,
						bounds: e.bounds,
						exclusionBounds: i.bounds,
						horizontalOwnership: e.horizontalOwnership,
						verticalOwnership: e.verticalOwnership,
						wrap: r.geometry.wrap.kind,
						wrapSide: r.geometry.wrap.side,
						wrapDistances: r.geometry.wrap.distances,
						...r.geometry.wrap.polygon ? { wrapPolygon: r.geometry.wrap.polygon.points } : {}
					})];
				}));
			}, N = (e) => {
				if (e.acquired.kind !== "paragraph") return e.acquired;
				let t = a(e.acquired.source);
				if (t.type !== "paragraph") throw Error("Table paragraph re-acquisition source kind mismatch");
				let n = {
					...Gb(y),
					contentX: 0,
					contentW: e.acquired.flowBounds.widthPt,
					y: e.acquired.flowBounds.yPt,
					floats: (e.floatingTableExclusions ?? []).map((e, t) => ({
						kind: "table",
						tableOverlap: "never",
						mode: "square",
						imageKey: `${Dg}${t}`,
						imageX: e.xPt,
						imageY: e.yPt,
						imageW: e.widthPt,
						imageH: e.heightPt,
						xLeft: e.xPt,
						xRight: e.xPt + e.widthPt,
						yTop: e.yPt,
						yBottom: e.yPt + e.heightPt,
						side: "bothSides",
						distLeft: 0,
						distRight: 0,
						distTop: 0,
						distBottom: 0,
						paraId: t
					})),
					floatParaSeq: e.floatingTableExclusions?.length ?? 0,
					pageAnchorPrescanned: /* @__PURE__ */ new Set()
				}, r = Og(e.acquired);
				return y.retainedTableAcquisition.acquireParagraph(n, t, e.acquired.flowBounds.widthPt, e.acquired.source.path, e.acquired.flowDomainId, void 0, r);
			}, P = Mv(e.blocks.endnotes), ee = /* @__PURE__ */ new Map(), F = (t) => {
				if (t.path.length !== 0) throw Error("Story acquisition requires a story-root source");
				return e.blocks.storyRoot(t);
			}, I = (t) => {
				if (t.path.length === 0 || (t.path.length - 1) % 3 != 0) throw Error("Story block acquisition requires a canonical source path");
				return e.blocks.resolve(t);
			}, te = (e) => {
				let t = JSON.stringify({
					source: e.source,
					pageIndex: e.pageIndex,
					section: e.section,
					container: e.container
				}), n = ee.get(t);
				if (n) return n;
				let r = F(e.source), i = e.source.story === "footnote" || e.source.story === "endnote" ? y.noteNumbers?.get(`${e.source.story}:${e.source.storyInstance}`) : void 0, a = Rr(f), o = a.resolveDestinationPage?.(e.pageIndex), c = Nb(e.section.textDirection), l = {
					...y,
					sectionLayout: e.section,
					pageIndex: e.pageIndex,
					totalPages: a.totalPages,
					displayPageNumber: o?.displayPageNumber ?? e.pageIndex + 1,
					pageNumberFormat: o?.pageNumberFormat ?? y.pageNumberFormat,
					pageWidth: e.section.geometry.pageWidth,
					pageH: e.container.capacity === "unbounded" ? 2 ** 53 - 1 : e.section.geometry.pageHeight,
					marginLeft: e.section.geometry.marginLeft,
					marginRight: e.section.geometry.marginRight,
					marginTop: yu(e.section.geometry.marginTop),
					marginBottom: yu(e.section.geometry.marginBottom),
					contentX: e.container.bounds.xPt,
					contentW: e.container.bounds.widthPt,
					y: e.container.bounds.yPt,
					floats: [],
					floatParaSeq: 0,
					retainedTablesBySourceIndex: /* @__PURE__ */ new Map(),
					pageAnchorPrescanned: /* @__PURE__ */ new Set(),
					noteReferenceNumber: i,
					verticalCJK: c,
					verticalAllRotated: c && Pb(e.section.textDirection),
					...c ? {} : { verticalPhys: void 0 },
					storyContext: {
						story: e.source.story,
						containers: [],
						lineNumberingEligible: !1
					}
				};
				D(r, 0, l);
				let u = Pr(f);
				l.layoutServices = u;
				let d = r.flatMap((t, n) => {
					let r = {
						story: e.source.story,
						storyInstance: e.source.storyInstance,
						path: [n]
					};
					if (t.type === "unsupportedTextBoxBlock") return [{
						type: "unsupportedTextBoxBlock",
						qName: t.qName,
						sourcePath: t.sourcePath
					}];
					if (t.type === "paragraph") return [{
						kind: "paragraph",
						source: r
					}];
					if (t.type !== "table") throw Error(`Unsupported ${e.source.story} story block: ${t.type}`);
					let i = l.retainedTableAcquisition, a = t;
					return [SS(a, m(a, e.container.bounds.widthPt, l), e.container.bounds.widthPt, l, r, i).input];
				}), p = null;
				ly(u, {
					layoutParagraph(e, t) {
						let n = I(e.source);
						if (n.type !== "paragraph") throw Error("Story paragraph source kind mismatch");
						let i = e.source.path[0], a = i > 0 ? r[i - 1] : void 0, o = a?.type === "paragraph" ? a : null, c = r[i + 1], u = c?.type === "paragraph" ? c : null, d = p?.spaceAfter ?? 0, f = xg(p, n, d, n.spaceBefore), m = Math.max(t.container.bounds.yPt, t.cursor.yPt - f.overlap);
						l.y = m, l.contentX = t.container.bounds.xPt, l.contentW = t.container.bounds.widthPt;
						let h = n.runs.filter((t, n) => s(e.source, n) !== null);
						h.length > 0 && E(Object.freeze({
							...n,
							runs: Object.freeze(h)
						}), l, l.y);
						let g = Wb(l, n), _ = Ul(o, n, u), v = oC(l, n, {
							id: `${e.source.story}:${e.source.storyInstance}:${e.source.path.join(".")}`,
							source: e.source,
							flowDomainId: t.container.id,
							ordinaryFlow: !0,
							context: g,
							placement: {
								startYPt: m,
								paragraphXPt: t.container.bounds.xPt,
								availableWidthPt: t.container.bounds.widthPt,
								maximumYPt: t.availableBounds.yPt + t.availableBounds.heightPt,
								suppressSpaceBefore: f.suppressBefore
							},
							measurer: {
								context: l.ctx,
								fontFamilyClasses: l.fontFamilyClasses
							},
							environment: Rb(l),
							exclusions: sC(l.floats, t.container.id),
							anchorCollisions: cC(l.floats),
							containerShading: l.containerShading,
							paragraphBorderEdges: _,
							trailingExtentPt: Math.max(g.spaceAfterPt, _.bottom === "none" ? 0 : Ll(n.borders)),
							continuesFromPrevious: !1,
							anchorFrames: Vb(l),
							acquireCompleteStory: l.acquireCompleteTextBoxStory
						});
						p = n;
						let y = {
							xPt: t.cursor.xPt,
							yPt: m + v.layout.advancePt
						};
						return l.y = y.yPt, {
							layout: v.layout,
							nextCursor: y
						};
					},
					layoutTable(e, t) {
						p = null;
						let n = pS({
							...e,
							flowDomainId: t.container.id
						}, t, u);
						return l.y = n.nextCursor.yPt, n;
					}
				});
				let h = fy({
					source: e.source,
					container: e.container,
					blocks: Object.freeze(d)
				}, u), g = Object.freeze({
					...h,
					blocks: Object.freeze(h.blocks.map((t, n) => {
						if (t.kind !== "paragraph" && t.kind !== "table") throw Error(`Shared story emitted unsupported node: ${t.kind}`);
						return mm(t, {
							occurrenceId: `${e.container.id}:block:${n}`,
							destination: {
								coordinateSpace: "logical-page-points",
								flowDomainId: e.container.id,
								translation: {
									xPt: 0,
									yPt: 0
								}
							}
						});
					}))
				});
				return ee.set(t, g), g;
			};
			y.acquireCompleteTextBoxStory = (e) => {
				let t = e.coordinateSpace === "upright-physical" ? {
					...y.sectionLayout,
					geometry: xu(y.sectionLayout.geometry),
					textDirection: "lrTb"
				} : y.sectionLayout;
				return te({
					source: e.source,
					pageIndex: y.pageIndex,
					section: t,
					container: e.container
				});
			};
			let ne = {
				hasPaginationFields: e.hasPaginationFields,
				measureParagraph(t) {
					A(t.location);
					let n = i(t.input.source);
					if (n.type !== "paragraph") throw Error("Paragraph source kind mismatch");
					if (n.framePr) {
						if (t.continuation.boundary !== null) throw Error("Body frame acquisition cannot continue across flow regions");
						let r, i = Xl(n);
						if (!i) throw Error("Body frame acquisition requires an indexed adjacency group");
						let a = g(n, i, y, h(e.blocks.body, n, y), (e) => {
							r = e;
						});
						if (!r) throw Error("Body frame acquisition omitted its retained group");
						let o = r.members.find((e) => e.paragraph === n);
						if (!o) throw Error("Body frame acquisition omitted its retained member");
						let s = n === i.members.at(-1) && i.framePr.dropCap !== "none" ? Nm(hv(r)) : 0, c = n.framePr.vAnchor === "page" || n.framePr.vAnchor === "margin", l = a.exclusionId ?? `frame:${t.input.source.path.join(":")}`, u = Object.freeze({
							kind: "frame",
							occurrenceId: l,
							exclusionId: l,
							paragraphId: T.nextParagraphId,
							bounds: Object.freeze({
								xPt: a.x,
								yPt: a.y,
								widthPt: a.w,
								heightPt: a.h
							}),
							exclusionBounds: Object.freeze({
								xPt: a.exLeft,
								yPt: a.exTop,
								widthPt: a.exRight - a.exLeft,
								heightPt: a.exBottom - a.exTop
							})
						});
						return Object.freeze({
							layout: o.fragment,
							blockExtentPt: s,
							fragmentation: Object.freeze({ kind: "indivisible" }),
							placement: Object.freeze({
								coordinateSpace: "logical-body",
								xPt: o.fragment.flowBounds.xPt,
								yPt: o.fragment.flowBounds.yPt,
								sectionFlowOwnership: c ? "page" : "host-flow"
							}),
							...n === i.owner ? { retainedFootnoteReferenceIds: Object.freeze([...new Set(r.members.flatMap((e) => Rv(e.fragment)))]) } : {},
							...c ? {} : { relocationBlockExtentPt: Math.max(0, a.y + a.h - t.location.cursorPt.yPt) },
							...a.registerExclusion === !1 ? {} : { flowRegistryDelta: Object.freeze({ floats: wb(T, Object.freeze([u]), T.nextParagraphId + 1) }) }
						});
					}
					let r = {
						...y,
						floats: [...y.floats],
						pageAnchorPrescanned: new Set(y.pageAnchorPrescanned)
					};
					k(r, t.location);
					let a = t.continuation.boundary === null ? j(n, t.input.source, r) : Object.freeze([]), { measured: o, layout: s } = l(r, n, t.input.source, t.location, t.availableInlineExtentPt, t.suppressSpaceBefore, t.continuation, O.entries), c = o.lines.map((e) => {
						let t = e.layout.consumedEnd;
						if (!t) throw Error("Measured line omitted its source boundary");
						return t;
					}), u = M(s), d = Object.freeze([...a, ...u]), f = Ag(s);
					return Object.freeze({
						layout: s,
						blockExtentPt: s.advancePt,
						fragmentation: o.markOnly ? Object.freeze({ kind: "indivisible" }) : Object.freeze({
							kind: "splittable",
							lineEndBoundaries: Object.freeze(c)
						}),
						...o.markOnly ? { markBelowBaselinePt: o.lastLineBelowBaselinePt } : {},
						...o.uniformRubyAdvancePt == null ? {} : { uniformRubyAdvancePt: o.uniformRubyAdvancePt },
						...d.length === 0 && f.length === 0 ? {} : { flowRegistryDelta: Object.freeze({
							...d.length === 0 ? {} : { floats: wb(T, d, T.nextParagraphId + d.length) },
							...f.length === 0 ? {} : { drawingCollisions: fC(O, f) }
						}) }
					});
				},
				measureTable(e) {
					if (A(e.location), e.input.kind === "adjacent-table-group") {
						if (e.cursor && e.cursor.kind !== "adjacent-table-group") throw Error("Adjacent table group acquisition received an ordinary table cursor");
						let t = e.input.tables.map((t) => {
							let n = i(t.source);
							if (n.type !== "table") throw Error("Table source kind mismatch");
							let r = t.source.path[0];
							return p(y, n, e.availableInlineExtentPt, r), Kb(y, r).acquisition;
						}), n = r(NS(e.input.logicalSequenceId, t.map((e) => e.input))), a = {
							container: {
								id: e.location.flowDomainId,
								kind: "body",
								bounds: {
									xPt: 0,
									yPt: 0,
									widthPt: e.availableInlineExtentPt,
									heightPt: e.freshPageBlockExtentPt
								}
							},
							cursor: {
								xPt: 0,
								yPt: 0
							},
							availableBounds: {
								xPt: 0,
								yPt: 0,
								widthPt: e.availableInlineExtentPt,
								heightPt: e.freshPageBlockExtentPt
							}
						}, o = pS(n, a, f).layout, s = {};
						t.forEach((e) => Object.entries(e.nestedById).forEach(([e, t]) => {
							if (s[e] && s[e] !== t) throw Error(`Adjacent table group has duplicate nested table id: ${e}`);
							s[e] = t;
						}));
						let c = Object.freeze({
							input: n,
							layout: o,
							nestedById: Object.freeze(s),
							floatingTables: Object.freeze(t.flatMap((e) => e.floatingTables))
						}), l = e.cursor?.cursor ?? Object.freeze({
							tableIndex: 0,
							sourceRowIndex: 0
						}), u = e.input.tables.slice(0, l.tableIndex).reduce((e, t) => e + (t.rowCount ?? 0), 0) + l.sourceRowIndex, d = l.tableCursor ?? Object.freeze({
							...IS(),
							rowIndex: u
						});
						if (d.rowIndex !== u) throw Error("Adjacent-table group and table-fragment cursors disagree");
						let m = aC(c, d, {
							availableHeightPt: e.availableBlockExtentPt,
							freshPageHeightPt: e.freshPageBlockExtentPt,
							placement: a,
							services: f,
							compatibility: "word",
							page: {
								physicalPageIndex: e.location.pageIndex,
								displayPageNumber: e.location.pageIndex + 1,
								occurrenceId: `${n.id}:body:${e.location.pageIndex}`
							}
						});
						if (!m.fragment || m.requiresFreshPage) return Object.freeze({
							layout: c.layout,
							blockExtentPt: 0,
							nextCursor: Object.freeze({
								kind: "adjacent-table-group",
								cursor: l
							}),
							requiresFreshFlowRegion: !0
						});
						let h = m.nextCursor ? (() => {
							let t = 0, n = 0;
							for (; t < e.input.tables.length;) {
								let r = e.input.tables[t].rowCount ?? 0;
								if (m.nextCursor.rowIndex < n + r) break;
								n += r, t += 1;
							}
							return t >= e.input.tables.length ? null : Object.freeze({
								tableIndex: t,
								sourceRowIndex: m.nextCursor.rowIndex - n,
								tableCursor: m.nextCursor
							});
						})() : null;
						return Object.freeze({
							layout: m.fragment,
							blockExtentPt: m.fragment.advancePt,
							nextCursor: h ? Object.freeze({
								kind: "adjacent-table-group",
								cursor: h
							}) : null,
							...m.floatingTableRegistryDelta ? { flowRegistryDelta: Object.freeze({ floats: m.floatingTableRegistryDelta }) } : {}
						});
					}
					let t = i(e.input.source);
					if (t.type !== "table") throw Error("Table source kind mismatch");
					let n = e.input.source.path[0];
					p(y, t, e.availableInlineExtentPt, n);
					let a = Kb(y, n).acquisition;
					if (e.cursor && e.cursor.kind !== "table") throw Error("Ordinary table acquisition received an adjacent-group cursor");
					let s = e.cursor?.cursor ?? IS(), c = y.pageH, l = y.acquisitionInputs.tableFormatInput(t).positioning;
					if (l) {
						let n = e.cursor?.kind === "table" && e.cursor.floatingContinuationFrame === "fresh-text" ? Object.freeze({
							...l,
							vertAnchor: "text",
							yPt: 0,
							yAlign: void 0
						}) : l, r = a.layout.columnWidthsPt.reduce((e, t) => e + t, 0), i = Object.freeze({
							page: Object.freeze({
								xPt: 0,
								yPt: 0,
								widthPt: y.pageWidth,
								heightPt: c
							}),
							margin: Object.freeze({
								xPt: y.marginLeft,
								yPt: y.marginTop,
								widthPt: Math.max(0, y.pageWidth - y.marginLeft - y.marginRight),
								heightPt: Math.max(0, c - y.marginTop - y.marginBottom)
							}),
							text: Object.freeze({
								xPt: e.location.cursorPt.xPt,
								yPt: e.location.cursorPt.yPt,
								widthPt: e.availableInlineExtentPt,
								heightPt: a.layout.advancePt
							})
						}), o = xb(n, i, r, a.layout.advancePt);
						if (e.cursor?.kind !== "table" && (n.vertAnchor === "page" || n.vertAnchor === "margin") && eo({
							bounds: {
								xPt: o.x,
								yPt: o.y,
								widthPt: o.w,
								heightPt: o.h
							},
							blockers: T.entries.map(Ga),
							overlapEpsilonPt: .01
						}).defer) return Object.freeze({
							layout: a.layout,
							blockExtentPt: 0,
							nextCursor: Object.freeze({
								kind: "table",
								cursor: s,
								floatingContinuationFrame: "authored"
							}),
							requiresFreshFlowRegion: !0
						});
						let u = (n.vertAnchor === "page" || n.vertAnchor === "margin") && a.layout.advancePt > e.freshPageBlockExtentPt, d = u ? e.location.availableBounds.yPt + e.location.availableBounds.heightPt : n.vertAnchor === "page" ? i.page.yPt + i.page.heightPt : n.vertAnchor === "margin" ? i.margin.yPt + i.margin.heightPt : e.location.availableBounds.yPt + e.location.availableBounds.heightPt, p = u ? e.freshPageBlockExtentPt : n.vertAnchor === "page" ? i.page.heightPt : n.vertAnchor === "margin" ? i.margin.heightPt : e.freshPageBlockExtentPt, m;
						try {
							m = zo({
								step: (r) => {
									if (r?.kind === "fresh-flow-region" || r?.kind === "candidate" && r.resolved.placement.xPt === r.parentFrame.xPt && r.resolved.placement.yPt === r.parentFrame.yPt) return r;
									let c = r?.resolved.placement ?? {
										xPt: o.x,
										yPt: o.y
									}, l = Math.max(0, d - c.yPt), u = aC(a, s, {
										availableHeightPt: l,
										freshPageHeightPt: p,
										placement: {
											container: {
												id: `${e.location.flowDomainId}:floating-table`,
												kind: "body",
												bounds: {
													xPt: 0,
													yPt: 0,
													widthPt: e.availableInlineExtentPt,
													heightPt: l
												}
											},
											cursor: {
												xPt: 0,
												yPt: 0
											},
											availableBounds: {
												xPt: 0,
												yPt: 0,
												widthPt: e.availableInlineExtentPt,
												heightPt: l
											}
										},
										services: f,
										compatibility: "word",
										oversizedRowPolicy: "atomic",
										page: {
											physicalPageIndex: e.location.pageIndex,
											displayPageNumber: y.displayPageNumber ?? e.location.pageIndex + 1,
											occurrenceId: `${a.input.id}:fitting-outer:${e.location.pageIndex}:${s.rowIndex}:${s.rowFragmentIndex}`
										},
										floatingTableFrames: {
											page: i.page,
											margin: i.margin,
											column: i.text
										},
										floatingTableRegistry: T,
										finalPlacementTranslationPt: c,
										reacquirePageDependentBlock: N
									});
									if (!u.fragment || u.requiresFreshPage) return Object.freeze({
										kind: "fresh-flow-region",
										result: u
									});
									let m = Object.freeze({
										kind: "floating-table-placement",
										occurrenceId: `${a.input.id}:root:${e.location.pageIndex}:${s.rowIndex}:${s.rowFragmentIndex}`,
										ownership: "source",
										physicalPageIndex: e.location.pageIndex,
										displayPageNumber: y.displayPageNumber ?? e.location.pageIndex + 1,
										hostCellId: e.location.flowDomainId,
										sourceBlockIndex: e.input.source.path[0],
										anchorBlockIndex: e.input.source.path[0],
										tableId: u.fragment.id,
										overlap: t.overlap === "never" ? "never" : "overlap",
										positioning: n,
										anchorBounds: i.text,
										child: u.fragment
									}), h = u.floatingTableRegistryDelta?.entries ?? [], g = u.floatingTableRegistryDelta?.nextParagraphId ?? T.nextParagraphId, _ = Db(m, i, Eb(T.entries, g, T.coordinateSpace, T.flowDomainId)), v = JSON.stringify({
										parentFrame: {
											xPt: _.placement.xPt,
											yPt: _.placement.yPt
										},
										fragment: u.fragment,
										nestedEntries: h,
										resolvedBounds: _.placement.bounds
									});
									return Object.freeze({
										kind: "candidate",
										parentFrame: Object.freeze({
											xPt: c.xPt,
											yPt: c.yPt
										}),
										result: u,
										fragment: u.fragment,
										resolved: _,
										nestedEntries: h,
										fingerprint: v
									});
								},
								stateOf: (e) => e.kind === "fresh-flow-region" ? "fresh-flow-region" : e.fingerprint,
								limit: 16
							}).value;
						} catch (e) {
							throw e instanceof Ro ? new V("NON_CONVERGENCE", e.reason === "cycle" ? "Floating table parent/child transaction repeated an exact-state cycle" : "Floating table parent/child transaction reached the operational pass limit 16") : e;
						}
						if (m.kind === "fresh-flow-region") return Object.freeze({
							layout: a.layout,
							blockExtentPt: 0,
							nextCursor: Object.freeze({
								kind: "table",
								cursor: s,
								floatingContinuationFrame: "fresh-text"
							}),
							requiresFreshFlowRegion: !0
						});
						let { result: h, fragment: g, resolved: _, nestedEntries: v } = m, b = e.cursor?.kind === "table" && e.cursor.floatingContinuationFrame !== void 0, x = e.location.availableBounds.yPt + e.location.availableBounds.heightPt, S = [...g.resolvedFloatingTables ?? [], _.placement].filter((e) => e.source.positioning.vertAnchor === "text");
						return !b && S.some((e) => e.exclusionBounds.yPt + e.exclusionBounds.heightPt > x) ? Object.freeze({
							layout: g,
							blockExtentPt: 0,
							nextCursor: Object.freeze({
								kind: "table",
								cursor: s,
								floatingContinuationFrame: "fresh-text"
							}),
							requiresFreshFlowRegion: !0
						}) : Object.freeze({
							layout: g,
							blockExtentPt: 0,
							nextCursor: h.nextCursor ? Object.freeze({
								kind: "table",
								cursor: h.nextCursor,
								floatingContinuationFrame: "fresh-text"
							}) : null,
							flowRegistryDelta: Object.freeze({ floats: wb(T, Object.freeze([...v, ..._.transaction.delta]), _.transaction.nextParagraphId) }),
							placement: Object.freeze({
								coordinateSpace: "logical-body",
								xPt: _.placement.xPt,
								yPt: _.placement.yPt,
								sectionFlowOwnership: n.vertAnchor === "page" || n.vertAnchor === "margin" ? "page" : "host-flow"
							})
						});
					}
					if (y.verticalPhys && !o(t)) {
						if (e.cursor) throw Error("An upright physical table must remain atomic");
						let t = y.verticalPhys, n = a.layout.columnWidthsPt.reduce((e, t) => e + t, 0);
						if (n > e.availableBlockExtentPt && e.availableBlockExtentPt < e.freshPageBlockExtentPt) return Object.freeze({
							layout: a.layout,
							blockExtentPt: 0,
							nextCursor: Object.freeze({
								kind: "table",
								cursor: s
							}),
							requiresFreshFlowRegion: !0
						});
						let r = t.physicalPageWidthPt - e.location.cursorPt.yPt - n, i = e.location.cursorPt.xPt, o = Math.max(a.layout.advancePt, t.pageHeight - t.marginTop - t.marginBottom), c = `upright-physical-page:${e.location.pageIndex}`, l = aC(a, IS(), {
							availableHeightPt: o,
							freshPageHeightPt: o,
							placement: {
								container: {
									id: c,
									kind: "body",
									bounds: {
										xPt: 0,
										yPt: 0,
										widthPt: n,
										heightPt: o
									}
								},
								cursor: {
									xPt: 0,
									yPt: 0
								},
								availableBounds: {
									xPt: 0,
									yPt: 0,
									widthPt: n,
									heightPt: o
								}
							},
							services: f,
							compatibility: "word",
							oversizedRowPolicy: "atomic",
							page: {
								physicalPageIndex: e.location.pageIndex,
								displayPageNumber: y.displayPageNumber ?? e.location.pageIndex + 1,
								occurrenceId: `${a.input.id}:upright-page:${e.location.pageIndex}`
							},
							floatingTableFrames: {
								page: {
									xPt: 0,
									yPt: 0,
									widthPt: t.pageWidth,
									heightPt: t.pageHeight
								},
								margin: {
									xPt: t.marginLeft,
									yPt: t.marginTop,
									widthPt: Math.max(0, t.pageWidth - t.marginLeft - t.marginRight),
									heightPt: Math.max(0, t.pageHeight - t.marginTop - t.marginBottom)
								},
								column: {
									xPt: t.marginLeft,
									yPt: t.marginTop,
									widthPt: Math.max(0, t.pageWidth - t.marginLeft - t.marginRight),
									heightPt: Math.max(0, t.pageHeight - t.marginTop - t.marginBottom)
								}
							},
							floatingTableRegistry: Object.freeze({
								coordinateSpace: "upright-physical-page-points",
								flowDomainId: c,
								entries: Object.freeze([]),
								nextParagraphId: 0
							}),
							finalPlacementTranslationPt: {
								xPt: r,
								yPt: i
							},
							reacquirePageDependentBlock: N
						});
						if (!l.fragment || l.nextCursor || l.requiresFreshPage) throw Error("Upright table final-frame layout must remain atomic");
						return Object.freeze({
							layout: l.fragment,
							blockExtentPt: n,
							nextCursor: null,
							placement: Object.freeze({
								coordinateSpace: "upright-physical",
								xPt: r + l.fragment.flowBounds.xPt,
								yPt: i + l.fragment.flowBounds.yPt,
								sectionFlowOwnership: "host-flow"
							})
						});
					}
					let u = aC(a, s, {
						availableHeightPt: e.availableBlockExtentPt,
						freshPageHeightPt: e.freshPageBlockExtentPt,
						placement: {
							container: {
								id: e.location.flowDomainId,
								kind: "body",
								bounds: {
									xPt: 0,
									yPt: 0,
									widthPt: e.availableInlineExtentPt,
									heightPt: e.availableBlockExtentPt
								}
							},
							cursor: {
								xPt: 0,
								yPt: 0
							},
							availableBounds: {
								xPt: 0,
								yPt: 0,
								widthPt: e.availableInlineExtentPt,
								heightPt: e.availableBlockExtentPt
							}
						},
						services: f,
						compatibility: "word",
						page: {
							physicalPageIndex: e.location.pageIndex,
							displayPageNumber: e.location.pageIndex + 1,
							occurrenceId: `${a.input.id}:body:${e.location.pageIndex}`
						},
						floatingTableFrames: {
							page: {
								xPt: 0,
								yPt: 0,
								widthPt: y.pageWidth,
								heightPt: c
							},
							margin: {
								xPt: y.marginLeft,
								yPt: y.marginTop,
								widthPt: Math.max(0, y.pageWidth - y.marginLeft - y.marginRight),
								heightPt: Math.max(0, c - y.marginTop - y.marginBottom)
							},
							column: e.location.availableBounds
						},
						floatingTableRegistry: T,
						finalPlacementTranslationPt: {
							xPt: e.location.availableBounds.xPt,
							yPt: e.location.cursorPt.yPt
						},
						reacquirePageDependentBlock: N
					}), d = e.location.availableBounds.xPt + a.layout.flowBounds.xPt, m = d + a.layout.flowBounds.widthPt, h = u.fragment?.advancePt ?? 0, g = $a({
						inlineStartPt: d,
						inlineEndPt: m,
						blockStartPt: e.location.cursorPt.yPt,
						blockExtentPt: h,
						blockers: T.entries.map(Ga),
						overlapEpsilonPt: Va
					}).blockStartPt;
					return g > e.location.cursorPt.yPt ? Object.freeze({
						layout: a.layout,
						blockExtentPt: 0,
						nextCursor: e.cursor ?? null,
						retryAtBlockStartPt: g
					}) : !u.fragment || u.requiresFreshPage ? Object.freeze({
						layout: a.layout,
						blockExtentPt: 0,
						nextCursor: Object.freeze({
							kind: "table",
							cursor: s
						}),
						requiresFreshFlowRegion: !0
					}) : Object.freeze({
						layout: u.fragment,
						blockExtentPt: u.fragment.advancePt,
						nextCursor: u.nextCursor ? Object.freeze({
							kind: "table",
							cursor: u.nextCursor
						}) : null,
						...u.floatingTableRegistryDelta ? { flowRegistryDelta: Object.freeze({ floats: u.floatingTableRegistryDelta }) } : {}
					});
				},
				layoutStory: te,
				layoutNotes(e) {
					let t = [], n = e.container.bounds.yPt, r = e.firstOnPage;
					for (let i of e.referenceIds) {
						if (!(e.kind === "footnote" ? S : P).has(i)) continue;
						let a = {
							story: e.kind,
							storyInstance: i,
							path: []
						}, o = r ? 6 : 0, s = {
							...e.container,
							id: `${e.container.id}:${e.kind}:${i}`,
							bounds: {
								...e.container.bounds,
								yPt: n + o,
								heightPt: Math.max(0, e.container.bounds.yPt + e.container.bounds.heightPt - n - o)
							}
						}, c;
						try {
							c = te({
								source: a,
								pageIndex: e.pageIndex,
								section: e.section,
								container: s
							});
						} catch (t) {
							throw t instanceof iy && t.containerId === s.id ? new Lp(e.kind, e.pageIndex, e.container.id) : t;
						}
						let l = Object.freeze(r ? [Object.freeze({
							edge: "top",
							from: Object.freeze({
								xPt: e.container.bounds.xPt,
								yPt: n + o / 2
							}),
							to: Object.freeze({
								xPt: e.container.bounds.xPt + e.container.bounds.widthPt / 3,
								yPt: n + o / 2
							}),
							color: "#000000",
							widthPt: .5,
							authoredStyle: "single",
							style: "solid"
						})] : []), u = o + c.advancePt, d = Object.freeze({
							xPt: e.container.bounds.xPt,
							yPt: n,
							widthPt: e.container.bounds.widthPt,
							heightPt: u
						}), f = Object.freeze({
							kind: "note",
							id: `${e.kind}:${i}:page:${e.pageIndex}`,
							source: a,
							flowDomainId: e.container.id,
							ordinaryFlow: !0,
							flowBounds: d,
							inkBounds: Object.freeze({
								xPt: Math.min(d.xPt, c.inkBounds.xPt),
								yPt: Math.min(d.yPt, c.inkBounds.yPt),
								widthPt: Math.max(d.xPt + d.widthPt, c.inkBounds.xPt + c.inkBounds.widthPt) - Math.min(d.xPt, c.inkBounds.xPt),
								heightPt: Math.max(d.yPt + d.heightPt, c.inkBounds.yPt + c.inkBounds.heightPt) - Math.min(d.yPt, c.inkBounds.yPt)
							}),
							clipBounds: e.container.bounds,
							advancePt: u,
							separator: l,
							story: c
						});
						t.push(f), n += u, r = !1;
					}
					return Object.freeze(t);
				},
				measureFollowingBlock(e) {
					let t = {
						...y,
						floats: [...y.floats],
						retainedTablesBySourceIndex: new Map(y.retainedTablesBySourceIndex)
					};
					if (k(t, e.location), e.input.kind === "adjacent-table-group") {
						let n = e.input.tables.map((n) => {
							let r = i(n.source);
							if (r.type !== "table") throw Error("Following table source kind mismatch");
							let a = n.source.path[0];
							return p(t, r, e.availableInlineExtentPt, a), Kb(t, a).acquisition;
						}), a = pS(r(NS(e.input.logicalSequenceId, n.map((e) => e.input))), {
							container: {
								id: e.location.flowDomainId,
								kind: "body",
								bounds: e.location.availableBounds
							},
							cursor: e.location.cursorPt,
							availableBounds: e.location.availableBounds
						}, f).layout;
						return Object.freeze({
							fullExtentPt: a.advancePt,
							leadContentExtentPt: a.rows[0]?.advancePt ?? a.advancePt,
							fullFootnoteReferenceIds: Rv(a),
							leadFootnoteReferenceIds: Rv({
								...a,
								rows: a.rows.slice(0, 1)
							})
						});
					}
					let n = i(e.input.source);
					if (e.input.kind === "paragraph") {
						if (n.type !== "paragraph") throw Error("Following paragraph source kind mismatch");
						let { layout: r } = l(t, n, e.input.source, e.location, e.availableInlineExtentPt, !1, void 0, O.entries), i = r.lines[0];
						return Object.freeze({
							fullExtentPt: r.advancePt,
							leadContentExtentPt: i ? i.bounds.yPt + i.advancePt - r.flowBounds.yPt : r.advancePt,
							fullFootnoteReferenceIds: Rv(r),
							leadFootnoteReferenceIds: i ? Lv([i]) : []
						});
					}
					if (n.type !== "table") throw Error("Following table source kind mismatch");
					let a = e.input.source.path[0];
					p(t, n, e.availableInlineExtentPt, a);
					let o = Kb(t, a).acquisition.layout;
					return Object.freeze({
						fullExtentPt: o.advancePt,
						leadContentExtentPt: o.rows[0]?.advancePt ?? o.advancePt,
						fullFootnoteReferenceIds: Rv(o),
						leadFootnoteReferenceIds: Rv({
							...o,
							rows: o.rows.slice(0, 1)
						})
					});
				},
				prescanPageAnchors(e) {
					let t = e.location.section.geometry, n = yu(t.marginTop), r = yu(t.marginBottom), a = Object.freeze({
						page: Object.freeze({
							xPt: 0,
							yPt: 0,
							widthPt: t.pageWidth,
							heightPt: t.pageHeight
						}),
						margin: Object.freeze({
							xPt: t.marginLeft,
							yPt: n,
							widthPt: Math.max(0, t.pageWidth - t.marginLeft - t.marginRight),
							heightPt: Math.max(0, t.pageHeight - n - r)
						}),
						column: Object.freeze({
							xPt: e.location.availableBounds.xPt,
							yPt: n,
							widthPt: e.availableInlineExtentPt,
							heightPt: Math.max(0, t.pageHeight - n - r)
						}),
						paragraph: null,
						line: null,
						character: null,
						pageParity: e.location.pageIndex % 2 == 0 ? "odd" : "even"
					}), o = /* @__PURE__ */ new Set(), c = (e) => `${e.story}:${e.storyInstance}:${e.path.join(".")}`, l = /* @__PURE__ */ new Map(), u = (e) => {
						let t = c(e);
						return l.has(t) || l.set(t, T.nextParagraphId + l.size), l.get(t);
					}, d = e.anchors.flatMap((t) => {
						let n = i(t.paragraphSource);
						if (n.type !== "paragraph") throw Error("Page-anchor prescan source kind mismatch");
						let r = n, c = r.runs.filter((e) => e.type === "anchorHost" && e.anchorOccurrenceId === t.occurrenceId), l = r.runs.map((e, t) => ({
							run: e,
							runIndex: t
						})).filter((e) => (e.run.type === "image" || e.run.type === "chart" || e.run.type === "shape" || e.run.type === "unavailableDrawing") && e.run.anchorAcquisitionInput?.occurrenceId === t.occurrenceId).sort((e, t) => (e.run.anchorAcquisitionInput.group?.sourceIndex ?? 0) - (t.run.anchorAcquisitionInput.group?.sourceIndex ?? 0) || e.runIndex - t.runIndex);
						if (c.length !== 1 || l.length === 0) {
							let r = n.runs.find((e, n) => s(t.paragraphSource, n)?.occurrenceId === t.occurrenceId);
							if (r) {
								if ((r.type === "image" || r.type === "chart" || r.type === "shape") && r.wrapMode === "none") return [];
								let i = {
									...y,
									floats: [...y.floats],
									pageAnchorPrescanned: new Set(y.pageAnchorPrescanned)
								};
								k(i, e.location);
								let a = j(n, t.paragraphSource, i, new Set([t.occurrenceId]), u(t.paragraphSource));
								if (a.length !== 1) throw Error(`Public page-anchor prescan occurrence mismatch: ${t.occurrenceId}`);
								return o.add(n), a;
							}
							throw Error(`Page-anchor prescan occurrence acquisition mismatch: ${t.occurrenceId}`);
						}
						let d = yg({
							acquisition: l[0].run.anchorAcquisitionInput,
							frames: a
						});
						if (d.status !== "resolved") throw Error(`Page-anchor prescan could not resolve occurrence: ${t.occurrenceId}`);
						let f = Nb(e.location.section.textDirection) ? (() => {
							let t = mi(e.location.section.textDirection);
							return U_(d, Si(t, bi({
								widthPt: a.page.widthPt,
								heightPt: a.page.heightPt
							}, t)));
						})() : d, p = f.geometry.wrapBounds;
						if (p === null || f.geometry.wrap.kind === "none") return [];
						let m = f.geometry.wrap.polygon?.points ?? Object.freeze([
							Object.freeze({
								xPt: p.xPt,
								yPt: p.yPt
							}),
							Object.freeze({
								xPt: p.xPt + p.widthPt,
								yPt: p.yPt
							}),
							Object.freeze({
								xPt: p.xPt + p.widthPt,
								yPt: p.yPt + p.heightPt
							}),
							Object.freeze({
								xPt: p.xPt,
								yPt: p.yPt + p.heightPt
							})
						]);
						return [Object.freeze({
							kind: "shape",
							occurrenceId: t.occurrenceId,
							paragraphId: u(t.paragraphSource),
							bounds: f.geometry.objectFrame,
							exclusionBounds: p,
							wrap: f.geometry.wrap.kind,
							wrapSide: f.geometry.wrap.side,
							wrapDistances: f.geometry.wrap.distances,
							wrapPolygon: Object.freeze([...m])
						})];
					});
					return o.forEach((e) => y.pageAnchorPrescanned?.add(e)), d.length === 0 ? null : Object.freeze({ floats: Object.freeze({
						coordinateSpace: "logical-page-points",
						flowDomainId: T.flowDomainId,
						baseEntries: T.entries,
						baseNextParagraphId: T.nextParagraphId,
						nextParagraphId: T.nextParagraphId + d.length,
						entries: Object.freeze(d)
					}) });
				},
				measureLineNumberGlyph(n) {
					let r = t.font;
					try {
						let r = e.fonts.defaultBodyFontSizePt, i = Vs(!1, !1, r, null, {});
						t.font = i;
						let a = t.measureText(n);
						return Object.freeze({
							widthPt: a.width,
							ascentPt: a.fontBoundingBoxAscent ?? a.actualBoundingBoxAscent ?? r * .8,
							descentPt: a.fontBoundingBoxDescent ?? a.actualBoundingBoxDescent ?? r * .2,
							font: i
						});
					} finally {
						t.font = r;
					}
				},
				resetPageAcquisition(e) {
					y.floats = [], y.floatParaSeq = 0, y.pageAnchorPrescanned = /* @__PURE__ */ new Set(), T = Object.freeze({
						coordinateSpace: "logical-page-points",
						flowDomainId: w(e.pageIndex),
						entries: Object.freeze([]),
						nextParagraphId: 0
					}), O = dC(w(e.pageIndex), "logical-page-points"), A(e);
				},
				moveAcquisitionCursor: A,
				flowRegistrySnapshot() {
					return Object.freeze({
						floats: T,
						drawingCollisions: O
					});
				},
				commitFlowRegistryDelta(e) {
					if (!e.floats && !e.drawingCollisions) throw Error("Body flow registry delta must update at least one registry");
					e.floats && Tb(e.floats, {
						coordinateSpace: T.coordinateSpace,
						flowDomainId: T.flowDomainId,
						entries: T.entries,
						nextParagraphId: T.nextParagraphId
					}), e.drawingCollisions && pC(O, e.drawingCollisions);
					let t = e.drawingCollisions ? mC(O, e.drawingCollisions) : O, n = (e.floats?.entries ?? []).map((e) => {
						let t = e.wrapDistances?.leftPt ?? e.bounds.xPt - e.exclusionBounds.xPt, n = e.wrapDistances?.topPt ?? e.bounds.yPt - e.exclusionBounds.yPt, r = e.wrapDistances?.rightPt ?? e.exclusionBounds.xPt + e.exclusionBounds.widthPt - e.bounds.xPt - e.bounds.widthPt, i = e.wrapDistances?.bottomPt ?? e.exclusionBounds.yPt + e.exclusionBounds.heightPt - e.bounds.yPt - e.bounds.heightPt, a = {
							mode: e.wrap === "topAndBottom" ? "topAndBottom" : "square",
							...e.kind === "shape" ? {
								anchorOccurrenceId: e.occurrenceId,
								acquisitionOccurrenceId: e.occurrenceId
							} : {},
							...e.wrap ? {
								authoredWrap: e.wrap,
								wrapPolygon: e.wrapPolygon
							} : {},
							imageKey: e.exclusionId ?? (e.kind === "table" ? `body:float:${e.paragraphId}` : ""),
							imageX: e.bounds.xPt,
							imageY: e.bounds.yPt,
							imageW: e.bounds.widthPt,
							imageH: e.bounds.heightPt,
							xLeft: e.exclusionBounds.xPt,
							xRight: e.exclusionBounds.xPt + e.exclusionBounds.widthPt,
							yTop: e.exclusionBounds.yPt,
							yBottom: e.exclusionBounds.yPt + e.exclusionBounds.heightPt,
							side: e.wrapSide ?? "bothSides",
							distLeft: t,
							distRight: r,
							distTop: n,
							distBottom: i,
							paraId: e.paragraphId
						};
						return e.kind === "table" ? {
							...a,
							kind: "table",
							tableOverlap: e.overlap
						} : {
							...a,
							kind: e.kind
						};
					});
					e.floats && (y.floats.push(...n), T = Object.freeze({
						...T,
						entries: Object.freeze([...T.entries, ...e.floats.entries]),
						nextParagraphId: e.floats.nextParagraphId
					}), y.floatParaSeq = e.floats.nextParagraphId), O = t;
				}
			};
			return Object.freeze(ne);
		} });
	}
	function f(e, t) {
		return zb(t, Wb(t, e));
	}
	function p(e, t, n, r) {
		let i = e.retainedTablesBySourceIndex.get(r);
		if (i?.contentWidthPt === n && i.reusableAcrossPages) {
			let e = i.acquisition.layout.rows.map((e) => e.advancePt);
			return {
				colWidthsPt: [...i.acquisition.layout.columnWidthsPt],
				rowContentHeightsPt: e,
				rowHeightsPt: e
			};
		}
		let a = m(t, n, e), o = e.retainedTableAcquisition, s = SS(t, a, n, e, [r], o), c = i?.contentWidthPt === n ? Object.freeze({
			...s,
			layout: Object.freeze({
				...s.layout,
				columnWidthsPt: i.acquisition.layout.columnWidthsPt
			})
		}) : s;
		e.retainedTablesBySourceIndex.set(r, Object.freeze({
			sourceIndex: r,
			acquisition: c,
			contentWidthPt: n,
			reusableAcrossPages: gS(c),
			anchorYPt: e.y
		}));
		let l = c.layout.rows.map((e) => e.advancePt);
		return {
			colWidthsPt: a,
			rowContentHeightsPt: l,
			rowHeightsPt: l
		};
	}
	function m(e, t, n) {
		let r = n.acquisitionInputs.tableFormatInput(e), i = Number.isFinite(e.tblInd) ? e.tblInd ?? 0 : 0, a = r.rows.map((e) => {
			let t = e.exception;
			return t?.indentAuthored ? t.indentPt ?? 0 : i;
		}), o = n.storyContext?.story, s = n.storyContext?.containers.length === 0 && (o === "header" || o === "footer" || o === "body" && n.sectionLayout?.columns.length === 1), c = r.ordinaryFlow && s && !Nb(n.sectionLayout.textDirection) && [i, ...a].some((e) => e < 0), l = r.rows.length === 0 ? [{
			justification: e.jc,
			indentPt: i
		}] : r.rows.map((t, n) => ({
			justification: t.justification ?? e.jc,
			indentPt: a[n] ?? i
		})), u = e.bidiVisual === !0, d = Math.min(n.pageWidth, ...l.map(({ justification: e, indentPt: r }) => {
			let i = e === "right" || e === "end", a = e === "center" ? "center" : (u ? !i : i) ? "right" : "left", o = u ? -r : r;
			if (a === "left") {
				let e = n.contentX + o;
				return n.pageWidth - e;
			}
			if (a === "right") return n.contentX + t + o;
			let s = n.contentX + t / 2 + o;
			return 2 * Math.min(s, n.pageWidth - s);
		})), f = c ? Math.max(t, d) : t, p = (r.firstRowException?.layout === "fixed" ? "fixed" : e.layout) === "fixed" && n.storyContext?.containers.some((e) => e.kind === "tableCell"), m = (e, r = n.acquisitionInputs.tableFormatInput(e)) => {
			let i = /* @__PURE__ */ new WeakMap();
			return e.rows.forEach((t, n) => t.cells.forEach((t, a) => {
				let o = r.rows[n]?.cells[a]?.marginsPt;
				i.set(t, o ?? j(t, e));
			})), (r) => Al(r, i.get(r) ?? j(r, e), {
				paragraph: (e) => {
					let r = lu(n.layoutSettings, n.sectionLayout, n.storyContext ?? Bb, e), i = e.numbering ? n.acquisitionInputs.numberingMarkerShapeInput(e.numbering, Ws(e)) : void 0, a = dl(r, {
						numbering: e.numbering,
						...i ? { markerInput: i } : {},
						authoredFirstIndentPt: e.indentFirst,
						tabStops: e.tabStops,
						defaultTabPt: n.defaultTabPt,
						service: n.layoutServices?.text,
						clusterGeometry: !1
					}), o = a.numberingMarkerGeometry ?? (e.numbering && i && n.layoutServices?.text ? ml(e.numbering, i, {
						authoredFirstIndentPt: e.indentFirst,
						physicalIndentLeftPt: a.physicalIndentLeftPt,
						tabStops: e.tabStops,
						defaultTabPt: n.defaultTabPt
					}, n.layoutServices.text, !1) : void 0);
					return Il(e, a, t, {
						context: n.ctx,
						fontFamilyClasses: n.fontFamilyClasses
					}, Rb(n), o, { preserveWhitespaceOnlyContent: !0 });
				},
				nestedTable: (e) => wx(n.acquisitionInputs.tableColumnLayoutInput(e, t, m(e), t))
			});
		};
		return [...kx(n.acquisitionInputs.tableColumnLayoutInput(e, t, m(e, r), p ? null : n.acquisitionInputs.tableParticipatesInOrdinaryFlow(e) ? f : Math.max(t, n.pageWidth)))];
	}
	function h(e, t, n) {
		let r = e.indexOf(t);
		for (let t = r + 1; t < e.length; t++) {
			let r = e[t];
			if (r.type !== "paragraph") continue;
			let i = r;
			if (!i.framePr) return wc(i, 1, f(i, n), Ub(n, i).hasRuby, n.docEastAsian, n.ctx, n.fontFamilyClasses, i.lineSpacing, n.resolvedLocalFonts, n.layoutServices?.text, n.acquisitionInputs.paragraphMarkShapeInput(i), n.layoutSettings.compat.useFeLayout);
		}
		let i = t;
		return wc(i, 1, f(i, n), Ub(n, i).hasRuby, n.docEastAsian, n.ctx, n.fontFamilyClasses, i.lineSpacing, n.resolvedLocalFonts, n.layoutServices?.text, n.acquisitionInputs.paragraphMarkShapeInput(i), n.layoutSettings.compat.useFeLayout);
	}
	function g(e, t, n, r, i) {
		let a = {
			context: n.ctx,
			fontFamilyClasses: n.fontFamilyClasses
		}, o = Rb(n), s = t.members.map(Zl), c = lb(t.framePr.hAnchor, n), l = {
			contentXPt: n.contentX,
			contentWidthPt: n.contentW,
			pageHeightPt: n.pageH,
			yPt: n.y,
			anchorLineHeightPt: r
		}, u = vv(t, {
			contexts: t.members.map((e) => Ub(n, e)),
			inputs: t.members,
			borderEdges: s,
			borderExtentsPt: t.members.map((e, t) => s[t]?.bottom === "none" ? 0 : Ll(e.borders)),
			measurer: a,
			environment: o,
			containerShading: n.containerShading,
			maximumWidthPt: Math.max(0, c.right - c.left),
			acquisitionSession: n,
			placementSignature: [
				l.contentXPt,
				l.contentWidthPt,
				l.pageHeightPt,
				l.yPt,
				l.anchorLineHeightPt,
				n.pageWidth,
				n.marginLeft,
				n.marginRight,
				n.marginTop,
				n.marginBottom
			].join("|"),
			place: (e, r) => {
				let i = mb(t.framePr, n, l.yPt, e, r, l.anchorLineHeightPt);
				return Object.freeze({
					bounds: Object.freeze({
						xPt: i.x,
						yPt: i.y,
						widthPt: i.w,
						heightPt: i.h
					}),
					exclusionBounds: Object.freeze({
						xPt: i.exLeft,
						yPt: i.exTop,
						widthPt: i.exRight - i.exLeft,
						heightPt: i.exBottom - i.exTop
					})
				});
			},
			anchorFrames: Vb(n)
		});
		i?.(u);
		let d = {
			x: u.box.bounds.xPt,
			y: u.box.bounds.yPt,
			w: u.box.bounds.widthPt,
			h: u.box.bounds.heightPt,
			exLeft: u.box.exclusionBounds.xPt,
			exTop: u.box.exclusionBounds.yPt,
			exRight: u.box.exclusionBounds.xPt + u.box.exclusionBounds.widthPt,
			exBottom: u.box.exclusionBounds.yPt + u.box.exclusionBounds.heightPt,
			registerExclusion: !0,
			exclusionId: u.box.exclusionId
		};
		return e === t.owner ? d : {
			...d,
			registerExclusion: !1
		};
	}
	function _(e, t, n) {
		if (t.verticalPhys) {
			let n = _(e, w(t), t.contentX);
			return MC(n.x, n.y, n.w, n.h, t.verticalPhys.physicalPageWidthPt);
		}
		let r = e.widthPt, i = e.heightPt, a = e.anchorXPt, o = e.anchorYPt, s = e.groupWidthPt ?? null, c = e.groupHeightPt ?? null;
		if (e.widthPct != null) {
			let n = Ob(e.widthRelativeFrom, !1, t), i = (n.end - n.start) * e.widthPct;
			if (e.groupWidthPt != null && e.groupWidthPt > 0) {
				let t = i / e.groupWidthPt;
				r = e.widthPt * t, a = e.anchorXPt * t;
			} else r = i;
			s = i;
		}
		if (e.heightPct != null) {
			let r = kb(e.heightRelativeFrom, !1, n, t), a = (r.end - r.start) * e.heightPct;
			if (e.groupHeightPt != null && e.groupHeightPt > 0) {
				let t = a / e.groupHeightPt;
				i = e.heightPt * t, o = e.anchorYPt * t;
			} else i = a;
			c = a;
		}
		return {
			x: Ab(e.anchorXAlign, e.anchorXFromMargin, a, r, t, e.anchorXRelativeFrom, e.pctPosH, s),
			y: jb(e.anchorYAlign, e.anchorYFromPara, o, i, n, t, e.anchorYRelativeFrom, e.pctPosV, c),
			w: r,
			h: i
		};
	}
	let v = (e, t, n) => T(e, t, n), y = (e, t, n) => _(e, t, n), b = (e) => Ib(e), x = (e) => Fb(e), S = (e, t, n) => D(e, t, n);
	function C(e) {
		let t = e.verticalPhys;
		return t ? {
			...e,
			pageWidth: t.pageWidth,
			marginLeft: t.marginLeft,
			marginRight: t.marginRight,
			marginTop: t.marginTop,
			marginBottom: t.marginBottom,
			pageH: t.pageHeight
		} : e;
	}
	function w(e) {
		let t = e.verticalPhys;
		return t ? {
			...C(e),
			contentX: t.marginLeft,
			contentW: t.pageWidth - t.marginLeft - t.marginRight,
			verticalCJK: !1,
			verticalAllRotated: !1,
			verticalPhys: void 0,
			floats: []
		} : e;
	}
	function T(e, t, n) {
		let r = e.widthPt, i = e.heightPt, a = e.distLeft ?? 0, o = e.distRight ?? 0, s = e.distTop ?? 0, c = e.distBottom ?? 0;
		if (t.verticalPhys) {
			let n = C(t), l = MC(Ab(e.anchorXAlign, e.anchorXFromMargin ?? !1, e.anchorXPt ?? 0, r, n, e.anchorXRelativeFrom ?? null, null, null), jb(e.anchorYAlign, e.anchorYFromPara ?? !1, e.anchorYPt ?? 0, i, t.contentX, n, e.anchorYRelativeFrom ?? null, null, null), r, i, t.verticalPhys.physicalPageWidthPt);
			return {
				x: l.x,
				y: l.y,
				w: l.w,
				h: l.h,
				dl: s,
				dr: c,
				dt: o,
				db: a
			};
		}
		return {
			x: Ab(e.anchorXAlign, e.anchorXFromMargin ?? !1, e.anchorXPt ?? 0, r, t, e.anchorXRelativeFrom ?? null, null, null),
			y: jb(e.anchorYAlign, e.anchorYFromPara ?? !1, e.anchorYPt ?? 0, i, n, t, e.anchorYRelativeFrom ?? null, null, null),
			w: r,
			h: i,
			dl: a,
			dr: o,
			dt: s,
			db: c
		};
	}
	function E(e, t, n) {
		let r = t.floatParaSeq++, i = t.pageAnchorPrescanned?.has(e) ?? !1;
		for (let a of e.runs) if (a.type === "image") {
			let e = a;
			if (i && gC(e)) continue;
			O(e, t, n, r);
		} else if (a.type === "chart") {
			let e = a;
			if (i && gC(e)) continue;
			k(e, t, n, r);
		} else if (a.type === "shape") {
			let e = a;
			if (i && gC(e)) continue;
			A(e, t, n, r);
		}
	}
	function D(e, t, n) {
		n.pageAnchorPrescanned ||= /* @__PURE__ */ new Set();
		for (let r = t; r < e.length; r++) {
			let t = e[r];
			if (!t) continue;
			if (t.type === "pageBreak") break;
			if (t.type === "sectionBreak") {
				let e = t;
				if (e.kind && e.kind !== "continuous") break;
				continue;
			}
			if (t.type !== "paragraph") continue;
			let i = t;
			if (n.pageAnchorPrescanned.has(i)) continue;
			let a = !1;
			for (let e of i.runs) if (e.type === "image") {
				if (gC(e)) {
					a = !0;
					break;
				}
			} else if (e.type === "chart") {
				if (gC(e)) {
					a = !0;
					break;
				}
			} else if (e.type === "shape" && gC(e)) {
				a = !0;
				break;
			}
			if (!a) continue;
			let o = n.floatParaSeq++;
			for (let e of i.runs) if (e.type === "image") {
				let t = e;
				if (!gC(t)) continue;
				O(t, n, 0, o);
			} else if (e.type === "chart") {
				let t = e;
				if (!gC(t)) continue;
				k(t, n, 0, o);
			} else if (e.type === "shape") {
				let t = e;
				if (!gC(t)) continue;
				A(t, n, 0, o);
			}
			n.pageAnchorPrescanned.add(i);
		}
	}
	function O(e, t, n, r) {
		if (!e.anchor || !so(e.wrapMode)) return;
		let i = e.wrapMode === "topAndBottom" ? "topAndBottom" : "square", a = T(e, t, n), { w: o, h: s, dl: c, dr: u, dt: d, db: f } = a, p = e.allowOverlap ?? !0, m = l(e.imagePath, e.colorReplaceFrom, e.duotone);
		hb(t, {
			x: a.x,
			y: a.y,
			w: o,
			h: s,
			dl: c,
			dr: u,
			dt: d,
			db: f,
			kind: "shape",
			mode: i,
			side: e.wrapSide ?? "bothSides",
			imageKey: m,
			paraId: r,
			avoidOverlap: !0,
			allowOverlap: p
		});
	}
	function k(e, t, n, r) {
		if (!e.anchor || !so(e.wrapMode)) return;
		let i = T(e, t, n), { w: a, h: o, dl: s, dr: c, dt: l, db: u } = i;
		a <= 0 || o <= 0 || hb(t, {
			x: i.x,
			y: i.y,
			w: a,
			h: o,
			dl: s,
			dr: c,
			dt: l,
			db: u,
			kind: "shape",
			mode: e.wrapMode === "topAndBottom" ? "topAndBottom" : "square",
			side: e.wrapSide ?? "bothSides",
			allowOverlap: e.allowOverlap ?? !0,
			avoidOverlap: !0,
			paraId: r,
			imageKey: ""
		});
	}
	function A(e, t, n, r) {
		if (!so(e.wrapMode)) return;
		let { x: i, y: a, w: o, h: s } = _(e, t, n);
		if (o <= 0 || s <= 0) return;
		let c = e.wrapMode === "topAndBottom" ? "topAndBottom" : "square", l = e.distLeft ?? 0, u = e.distRight ?? 0, d = e.distTop ?? 0, f = e.distBottom ?? 0, p = !!t.verticalPhys;
		hb(t, {
			x: i,
			y: a,
			w: o,
			h: s,
			dl: p ? d : l,
			dr: p ? f : u,
			dt: p ? u : d,
			db: p ? l : f,
			kind: "shape",
			mode: c,
			side: e.wrapSide ?? "bothSides",
			imageKey: "",
			paraId: r,
			avoidOverlap: !0,
			allowOverlap: !0
		});
	}
	function j(e, t) {
		return {
			top: e.marginTop ?? t.cellMarginTop,
			bottom: e.marginBottom ?? t.cellMarginBottom,
			left: e.marginLeft ?? t.cellMarginLeft,
			right: e.marginRight ?? t.cellMarginRight
		};
	}
	let M = d(e, t, n);
	return Object.freeze({
		kernel: M,
		internals: Object.freeze({
			resolveColumnWidths: m,
			resolveAnchorBox: v,
			resolveShapeBox: y,
			physicalLayoutSection: b,
			verticalLayoutSection: x,
			preRegisterPageFloats: S
		})
	});
}
//#endregion
//#region packages/docx/src/document-content.ts
function* PC(e) {
	e.textPath && (yield {
		text: e.textPath.string,
		fontFamilies: [e.textPath.fontFamily],
		latinFontFamilies: [e.textPath.fontFamily],
		eastAsianFontFamilies: [e.textPath.fontFamily],
		bold: e.textPath.bold,
		italic: e.textPath.italic
	});
	for (let t of e.textBlocks ?? []) yield* FC(t);
}
function* FC(e) {
	if (e.numbering && (yield {
		text: e.numbering.text,
		fontFamilies: [e.numbering.fontFamily, e.numbering.fontFamilyEastAsia],
		latinFontFamilies: [e.numbering.fontFamily],
		eastAsianFontFamilies: [e.numbering.fontFamilyEastAsia ?? e.numbering.fontFamily],
		bold: !1,
		italic: !1
	}), e.runs?.length) for (let t of e.runs) yield {
		text: t.text,
		fontFamilies: [
			t.fontFamily,
			t.fontFamilyEastAsia,
			e.fontFamily
		],
		latinFontFamilies: [t.fontFamily, e.fontFamily],
		eastAsianFontFamilies: [t.fontFamilyEastAsia ?? t.fontFamily ?? e.fontFamily],
		bold: t.bold ?? e.bold,
		italic: t.italic ?? e.italic
	};
	else yield {
		text: e.text,
		fontFamilies: [e.fontFamily],
		latinFontFamilies: [e.fontFamily],
		eastAsianFontFamilies: [e.fontFamily],
		bold: e.bold,
		italic: e.italic
	};
}
function* IC(e) {
	if (e.type === "text") {
		let t = e;
		yield {
			text: e.text,
			eastAsiaLanguage: t.langEastAsia,
			fontFamilies: [
				e.fontFamily,
				t.fontFamilyHighAnsi,
				e.fontFamilyEastAsia
			],
			latinFontFamilies: [e.fontFamily, t.fontFamilyHighAnsi],
			eastAsianFontFamilies: [e.fontFamilyEastAsia ?? e.fontFamily],
			bold: e.bold,
			italic: e.italic
		}, yield {
			text: e.text,
			eastAsiaLanguage: t.langEastAsia,
			fontFamilies: [e.fontFamilyCs],
			bold: e.boldCs ?? !1,
			italic: e.italicCs ?? !1
		};
	} else if (e.type === "field") {
		let t = e;
		yield {
			text: t.fallbackText,
			eastAsiaLanguage: t.langEastAsia,
			fontFamilies: [
				t.fontFamily,
				t.fontFamilyHighAnsi,
				t.fontFamilyEastAsia
			],
			latinFontFamilies: [t.fontFamily, t.fontFamilyHighAnsi],
			eastAsianFontFamilies: [t.fontFamilyEastAsia ?? t.fontFamily],
			bold: t.bold,
			italic: t.italic
		}, yield {
			text: t.fallbackText,
			eastAsiaLanguage: t.langEastAsia,
			fontFamilies: [t.fontFamilyCs],
			bold: t.boldCs ?? !1,
			italic: t.italicCs ?? !1
		};
	} else e.type === "shape" ? yield* PC(e) : e.type === "anchorHost" && (yield {
		text: "",
		fontFamilies: [e.fontFamily, e.fontFamilyEastAsia],
		latinFontFamilies: [e.fontFamily],
		eastAsianFontFamilies: [e.fontFamilyEastAsia ?? e.fontFamily],
		bold: e.bold,
		italic: e.italic
	});
}
function* LC(e) {
	yield {
		text: "",
		fontFamilies: [e.defaultFontFamily, e.defaultFontFamilyEastAsia]
	}, e.numbering && (yield {
		text: e.numbering.text,
		fontFamilies: [e.numbering.fontFamily, e.numbering.fontFamilyEastAsia],
		latinFontFamilies: [e.numbering.fontFamily],
		eastAsianFontFamilies: [e.numbering.fontFamilyEastAsia ?? e.numbering.fontFamily]
	});
	for (let t of e.runs) yield* IC(t);
}
function* RC(e) {
	for (let t of e.rows) for (let e of t.cells) yield* BC(e.content);
}
function* zC(e) {
	if (e) for (let t of [
		e.default,
		e.first,
		e.even
	]) t && (yield* BC(t.body));
}
function* BC(e) {
	for (let t of e) t.type === "paragraph" ? yield* LC(t) : t.type === "table" ? yield* RC(t) : t.type === "sectionBreak" && (yield* zC(t.headers), yield* zC(t.footers));
}
function* VC(e) {
	yield* BC(e.body ?? []), yield* zC(e.headers), yield* zC(e.footers);
	for (let t of [...e.footnotes ?? [], ...e.endnotes ?? []]) yield* BC(t.content);
}
function HC(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of VC(e)) for (let e of n.fontFamilies) {
		let n = e?.trim();
		n && t.add(n);
	}
	return [...t];
}
var UC = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}\p{Script=Bopomofo}\p{Script=Yi}]/u, WC = /[0-9\p{Script=Latin}]/u;
function GC(e, t) {
	for (let n of e) if (t.test(n)) return n;
}
function KC(e) {
	switch (e?.trim().toLowerCase()) {
		case "80":
		case "86": return "国";
		case "81":
		case "82": return "가";
		case "88": return "國";
		default: return;
	}
}
function qC(e, t = {}) {
	let n = Object.fromEntries(Object.entries(t).map(([e, t]) => [e.trim().toLocaleLowerCase("en-US"), t])), r = /* @__PURE__ */ new Map(), i = (e, t, n) => {
		let i = e?.trim();
		if (!i || !t) return;
		let a = i.toLocaleLowerCase("en-US"), o = r.get(a);
		r.set(a, {
			family: o?.family ?? i,
			probeText: o?.probeText ?? t,
			appliesToLatin: (o?.appliesToLatin ?? !1) || n
		});
	};
	for (let t of VC(e)) {
		if (t.bold || t.italic) continue;
		let e = GC(t.text, UC);
		if (e) for (let n of t.eastAsianFontFamilies ?? []) i(n, e, !1);
		if (GC(t.text, WC)) for (let e of t.latinFontFamilies ?? []) {
			let t = e?.trim();
			t && i(t, KC(n[t.toLocaleLowerCase("en-US")]), !0);
		}
	}
	return [...r.values()];
}
//#endregion
//#region packages/docx/src/google-fonts.ts
var JC = {
	...f,
	...p
};
function* YC(e) {
	for (let t of VC(e)) yield t.text;
}
function XC(e, t) {
	let n = new v(C(e.majorFont) ?? C(e.minorFont) ?? t ?? null), r = /* @__PURE__ */ new Set();
	for (let t of VC(e)) {
		let e = we(t.eastAsiaLanguage);
		if (e) for (let n of c([t.text], e, !0)) r.add(n);
		else n.addText([t.text]);
	}
	return [
		e.majorFont,
		e.minorFont,
		...new Set([...n.names(), ...r])
	];
}
function ZC(e) {
	let t = new v(null);
	return t.addText(YC(e)), t.scriptCjkLanguage();
}
//#endregion
//#region packages/docx/src/layout/font-service.ts
function QC(e) {
	return e.trim().toLocaleLowerCase("en-US");
}
function $C(e) {
	return e == null || !Number.isFinite(e) ? 400 : Math.min(900, Math.max(100, Math.round(e / 100) * 100));
}
function ew(e) {
	return Object.freeze({
		...e,
		diagnostics: Object.freeze([...e.diagnostics])
	});
}
function tw(e) {
	return `"${e.replaceAll("\\", "\\\\").replaceAll("\"", "\\\"")}"`;
}
function nw(e, t) {
	return `${tw(e)}, ${t}`;
}
function rw(e, t = {}) {
	let n = {
		embedded: 0,
		local: 1,
		google: 2,
		substitute: 3
	}, r = e.filter((e) => e.requestedFamily.trim() && e.resolvedFamily.trim()).map((e) => Object.freeze({
		...e,
		weight: $C(e.weight),
		style: e.style ?? "normal"
	})).sort((e, t) => QC(e.requestedFamily).localeCompare(QC(t.requestedFamily)) || n[e.source] - n[t.source] || e.resolvedFamily.localeCompare(t.resolvedFamily) || e.weight - t.weight || e.style.localeCompare(t.style)), i = /* @__PURE__ */ new Map();
	for (let e of r) {
		let t = QC(e.requestedFamily);
		i.set(t, [...i.get(t) ?? [], e]);
	}
	let a = Object.freeze(Object.fromEntries(Object.entries(t.nativeFamilyLists ?? {}).filter(([e, t]) => e.trim() && t.trim()).map(([e, t]) => [QC(e), t]).sort(([e], [t]) => e.localeCompare(t)))), o = Object.freeze(Object.fromEntries(Object.entries(t.regionalFamilyLists ?? {}).map(([e, t]) => [e, Object.freeze(Object.fromEntries(Object.entries(t).map(([e, t]) => [QC(e), t]).sort(([e], [t]) => e.localeCompare(t))))]).sort(([e], [t]) => String(e).localeCompare(String(t))))), s = (e, t, n) => {
		let r = we(t) ?? n;
		return (r ? o[r]?.[QC(e)] : void 0) ?? a[QC(e)];
	}, c = rt("fonts", {
		faces: r,
		nativeFamilyLists: a,
		regionalFamilyLists: o
	});
	return Object.freeze({
		fingerprint: c,
		resolve(e) {
			let t = e.requestedFamily?.trim() || e.genericFamily || "sans-serif", n = $C(e.weight), r = e.style ?? "normal", a = (i.get(QC(t)) ?? []).find((e) => e.weight === n && e.style === r);
			if (a) {
				let i = a.source === "substitute" ? [{
					code: "UNSUPPORTED_FEATURE",
					severity: "warning",
					message: `ECMA-376 §17.8.2 implementation-dependent font substitution: ${t} resolved to ${a.resolvedFamily}`
				}] : [], o = s(t, e.language, e.cjkFallback), c = o ? `${tw(a.resolvedFamily)}, ${o}` : nw(a.resolvedFamily, e.genericFamily ?? "sans-serif");
				return ew({
					requestedFamily: t,
					resolvedFamily: a.resolvedFamily,
					route: at(c, "registered"),
					source: a.source,
					weight: n,
					style: r,
					diagnostics: i,
					genericFamily: e.genericFamily ?? "sans-serif"
				});
			}
			let o = e.genericFamily ?? "sans-serif", c = e.requestedFamily?.trim();
			return ew(c ? {
				requestedFamily: t,
				resolvedFamily: c,
				route: at(s(c, e.language, e.cjkFallback) ?? nw(c, o), "native"),
				source: "native",
				weight: n,
				style: r,
				diagnostics: [],
				genericFamily: o
			} : {
				requestedFamily: t,
				resolvedFamily: o,
				route: at(s(o, e.language, e.cjkFallback) ?? o, "generic"),
				source: "generic",
				weight: n,
				style: r,
				diagnostics: [],
				genericFamily: o
			});
		}
	});
}
//#endregion
//#region packages/docx/src/layout/production-services.ts
function iw(e, t) {
	if (!t) return {};
	let n = {};
	for (let r of e) {
		let e = r.family.trim();
		if (!e) continue;
		let i = Sn(e);
		if (n[i]) continue;
		let a = dt(t, e, {
			text: r.probeText,
			emPx: 100
		});
		if (!(a != null && a > 0)) continue;
		let o = _s(a);
		o > 0 && (n[i] = Object.freeze({
			family: e,
			requestedFamily: e,
			weight: 400,
			style: "normal",
			sourceIdentity: `canvas-resolved:${e}`,
			synthesized: !1,
			fontBoxRatio: a,
			...r.appliesToLatin ? { lineHeightRatio: o } : {},
			eastAsianLineHeightRatio: o
		}));
	}
	return Object.freeze(n);
}
function aw(e, t) {
	let n = t.measureResolvedFontMetrics ? iw(t.resolvedFontMetricCandidates ?? [], t.measureContext) : {}, r = Object.freeze(Object.fromEntries(Object.entries(e.fontFamilyCharsets).map(([e, t]) => [e.trim().toLowerCase(), t]))), i = (e) => e.trim().replace(/^(['"])(.*)\1$/, "$2"), a = (e) => i(e).toLocaleLowerCase("en-US"), o = (e) => {
		let t = e.style.trim().toLocaleLowerCase("en-US");
		return t === "normal" || t === "italic" ? t : null;
	}, s = (e) => {
		let t = e.weight.trim().toLocaleLowerCase("en-US");
		if (t === "normal") return 400;
		if (t === "bold") return 700;
		if (!/^\d+$/.test(t)) return null;
		let n = Number(t);
		return n >= 100 && n <= 900 ? n : null;
	}, c = (e) => e.flatMap((e) => {
		if (e.status !== "loaded") return [];
		let t = s(e), n = o(e);
		return t == null || n == null ? [] : [{
			family: a(e.family),
			displayFamily: i(e.family),
			weight: t,
			style: n
		}];
	}), l = new Map(c(t.embeddedFaces ?? []).map((e) => [`${e.family}:${e.weight}:${e.style}`, e])), u = e.fonts.embeddedFonts.flatMap((e) => {
		let t = e.style === "bold" || e.style === "boldItalic" ? 700 : 400, n = e.style === "italic" || e.style === "boldItalic" ? "italic" : "normal", r = l.get(`${a(e.fontName)}:${t}:${n}`);
		return r ? [{
			requestedFamily: e.fontName,
			resolvedFamily: r.displayFamily,
			source: "embedded",
			weight: t,
			style: n
		}] : [];
	}), d = new Set(u.map((e) => `${a(e.requestedFamily)}:${e.weight}:${e.style}`)), f = (e = {}) => Object.fromEntries(Object.entries(e).filter(([e, t]) => !t.sourceIdentity?.startsWith("provided-sfnt:") || !d.has(`${a(t.requestedFamily ?? e)}:${t.weight ?? 400}:${t.style ?? "normal"}`))), p = Ri(f(t.localMetrics)), m = Ri({
		...n,
		...p,
		...f(t.fontMetrics)
	});
	for (let [e, t] of Object.entries(p)) u.push({
		requestedFamily: t.requestedFamily ?? e,
		resolvedFamily: t.family,
		source: "local",
		weight: t.weight ?? 400,
		style: t.style ?? "normal"
	});
	if (t.useGoogleFonts) {
		let n = c(t.googleFaces ?? []), r = /* @__PURE__ */ new Set();
		for (let t of e.fonts.preloadNames) {
			if (!t) continue;
			let e = t.toLocaleLowerCase("en-US");
			if (r.has(e)) continue;
			r.add(e);
			let i = JC[e], o = i?.loadFamily ?? t;
			if (i) for (let e of n.filter((e) => e.family === a(o))) u.push({
				requestedFamily: t,
				resolvedFamily: e.displayFamily,
				source: a(o) === a(t) ? "google" : "substitute",
				weight: e.weight,
				style: e.style
			});
		}
	}
	let h = t.measureContext, g = [...new Set([
		...Object.keys(e.fonts.familyClasses),
		...Object.keys(e.fonts.familyPitches),
		...e.fonts.renderedFamilies,
		...e.fonts.majorFamily ? [e.fonts.majorFamily] : [],
		...e.fonts.minorFamily ? [e.fonts.minorFamily] : []
	])], _ = Ui({
		fonts: rw(u, {
			regionalFamilyLists: Object.fromEntries([
				"sc",
				"tc",
				"hk",
				"jp",
				"kr"
			].map((t) => [t, Object.fromEntries([...new Set([
				...g,
				"sans-serif",
				"serif",
				"monospace"
			])].map((n) => [n, Bs(n, e.fonts.familyClasses, e.fonts.familyPitches, t)]))])),
			nativeFamilyLists: Object.fromEntries(g.map((t) => [t, Bs(t, e.fonts.familyClasses, e.fonts.familyPitches)]))
		}),
		cjkFallback: t.cjkFallback,
		fontMetrics: m,
		eastAsiaFontCharsets: r,
		genericFamilies: Object.fromEntries(g.map((t) => [t, Fi(t, e.fonts.familyClasses, e.fonts.familyPitches)])),
		measurer: {
			fingerprint: h ? "canvas-text-metrics-v1" : "deterministic-text-metrics-v1",
			measure(e) {
				if (!h) return {
					advancePt: [...e.text].length * e.fontSizePt * .5,
					ascentPt: e.fontSizePt * .8,
					descentPt: e.fontSizePt * .2
				};
				let t = h.font, n = h.letterSpacing, r = h.fontKerning;
				try {
					h.font = ot(e.fontRoute, e.fontSizePt, e.weight, e.style), h.letterSpacing = `${e.letterSpacingPt}px`, e.kerning != null && (h.fontKerning = e.kerning ? "normal" : "none");
					let t = h.measureText(e.text), n = Number.isFinite(t.actualBoundingBoxLeft) && Number.isFinite(t.actualBoundingBoxRight), r = {
						xMinPt: n ? -t.actualBoundingBoxLeft : 0,
						xMaxPt: n ? t.actualBoundingBoxRight : t.width,
						ascentPt: t.actualBoundingBoxAscent,
						descentPt: t.actualBoundingBoxDescent
					};
					return {
						advancePt: t.width,
						ascentPt: t.fontBoundingBoxAscent ?? t.actualBoundingBoxAscent ?? 0,
						descentPt: t.fontBoundingBoxDescent ?? t.actualBoundingBoxDescent ?? 0,
						...Object.values(r).every(Number.isFinite) ? {
							inkBounds: r,
							...n ? { horizontalInkBoundsAreTight: !0 } : {}
						} : {}
					};
				} finally {
					h.font = t, h.letterSpacing = n, e.kerning != null && (h.fontKerning = r);
				}
			}
		}
	}), v = t.mathResources ?? e.mathOccurrences.map(({ display: e, source: t }) => ({
		resourceKey: $e(t, e ? "display" : "inline"),
		widthEm: 0,
		ascentEm: 0,
		descentEm: 0,
		available: !1,
		diagnostics: [{
			code: "UNSUPPORTED_FEATURE",
			severity: "warning",
			message: "The optional math renderer is unavailable; using the deterministic text fallback"
		}]
	})), y = e.imageMetadata, b = Object.freeze({
		text: _,
		images: er(y),
		math: tr(v),
		verticalGlyphFingerprint: t.verticalGlyphMeasurement.fingerprint
	}), x = e.mathOccurrences.map(({ source: e, display: t }) => $e(e, t ? "display" : "inline")), S = v.map((e) => e.resourceKey), C = x.filter((e) => !S.includes(e)), w = S.filter((e) => !x.includes(e));
	if (C.length || w.length) throw Error(`Math metadata membership mismatch: missing [${C.join(", ")}]; extra [${w.join(", ")}]`);
	return Ar(b, t.mathDrawables ?? /* @__PURE__ */ new Map(), v.filter((e) => e.available !== !1).map((e) => e.resourceKey)), zr(b, e.paintResources), Er(b, t.verticalGlyphMeasurement), b;
}
//#endregion
//#region packages/docx/src/layout/table-source-acquisition.ts
function ow(e, t) {
	if (e === null) return null;
	let n = e.trim(), r = t && n.endsWith("%") ? n.slice(0, -1) : n;
	if (r.length === 0) return null;
	let i = Number(r);
	return Number.isFinite(i) ? i : null;
}
function sw(e) {
	return e.value?.trim().endsWith("%") ? "pct" : e.kind ?? "dxa";
}
function cw(e) {
	if (!e) return null;
	let t = e.value?.trim() ?? "", n = sw(e);
	if (n === "dxa") {
		let t = ow(e.value ?? "0", !1);
		return t === null ? null : {
			kind: "dxa",
			value: t / 20
		};
	}
	if (n !== "pct") return null;
	let r = ow(e.value ?? "0", !0);
	return r === null ? null : {
		kind: "pct",
		value: t.endsWith("%") ? r / 100 : r / 5e3
	};
}
function lw(e) {
	let t = cw(e);
	return t?.kind === "dxa" ? t.value : null;
}
function uw(e) {
	return e.widthPt == null ? e.widthPct == null ? null : {
		kind: "pct",
		value: e.widthPct / 5e3
	} : {
		kind: "dxa",
		value: e.widthPt
	};
}
function dw(e, t) {
	let n = e.format.firstRowException?.preferredWidth ?? null;
	if (e.format.firstRowException?.preferredWidthAuthored) return n?.kind === "dxa" ? n.value > 0 ? n.value : null : n?.kind === "pct" && n.value > 0 ? n.value * t : null;
	let r = cw(e.lexical.table?.preferredWidth);
	return r?.kind === "dxa" ? r.value > 0 ? r.value : null : r?.kind === "pct" ? r.value > 0 ? r.value * t : null : e.semantic.widthPt != null && e.semantic.widthPt > 0 ? e.semantic.widthPt : e.semantic.widthPct != null && e.semantic.widthPct > 0 ? e.semantic.widthPct / 5e3 * t : null;
}
var fw = Object.freeze({
	pt: "1/1",
	in: "72/1",
	cm: "3600/127",
	mm: "360/127",
	pc: "12/1",
	pi: "12/1"
}), pw = "18446744073709551615";
function mw(e) {
	let t = e.replace(/[\u0009\u000a\u000d\u0020]+/g, " ").replace(/^ | $/g, ""), n = /^([+-]?)([0-9]+)$/.exec(t);
	if (!n) return null;
	let [, r, i] = n;
	if (r === "-" && /[1-9]/.test(i)) return null;
	let a = i.replace(/^0+/, "") || "0";
	return a.length > 20 || a.length === 20 && a > pw ? null : t;
}
var hw = {
	key: "0/1",
	widthPt: 0
};
function gw(e) {
	let t = ix(e);
	return Number.isFinite(t) ? {
		key: e,
		widthPt: t
	} : hw;
}
function _w(e, t) {
	let n = Number(e);
	if (!Number.isFinite(n)) return hw;
	let r = tx(n), i = r === null ? 0 : ix(ox(r, t));
	return Number.isFinite(i) ? {
		key: null,
		widthPt: i
	} : hw;
}
function vw(e) {
	if (e == null) return hw;
	let t = mw(e);
	if (t !== null) {
		let e = ex(t);
		return e === null ? hw : gw(cx(e, 20n));
	}
	let n = /^([0-9]+(?:\.[0-9]+)?)(mm|cm|in|pt|pc|pi)$/.exec(e);
	if (!n) return hw;
	let r = fw[n[2]], i = ex(n[1]);
	return i === null ? _w(n[1], r) : gw(ox(i, r));
}
function yw(e) {
	let t = e.lexical.table?.grid;
	if (!t) {
		let t = e.semantic.colWidths.map((e) => Number.isFinite(e) && e >= 0 ? {
			widthPt: e,
			key: tx(e) ?? "0/1"
		} : hw);
		return {
			widthsPt: t.map((e) => e.widthPt),
			widthKeys: t.map((e) => e.key)
		};
	}
	let n = Math.max(t.requiredColumnCount, t.columns.length), r = Array.from({ length: n }, (e, n) => vw(t.columns[n]?.width ?? null));
	return {
		widthsPt: r.map((e) => e.widthPt),
		widthKeys: r.map((e) => e.key)
	};
}
function bw(e, t) {
	let n = cw(e);
	return n?.kind === "pct" ? {
		kind: "dxa",
		value: Math.max(0, n.value) * Math.max(0, t)
	} : n;
}
function xw(e, t, n, r = t) {
	let i = e.semantic, { widthsPt: a, widthKeys: o } = yw(e), s = e.format.firstRowException?.layout === "fixed" ? "fixed" : e.lexical.table?.layout?.kind ?? i.layout, c = e.lexical.table?.grid.authored ? e.lexical.table.grid.columns.length : null, l = i.rows.map((e) => {
		let t = Math.max(0, e.gridBefore ?? 0);
		return c !== null && t > c ? 0 : t;
	}), u = Math.max(c ?? 0, e.lexical.table?.grid.requiredColumnCount ?? 0, ...i.rows.map((e, t) => (l[t] ?? 0) + e.cells.reduce((e, t) => e + Math.max(1, t.colSpan), 0)));
	return {
		layout: s === "fixed" ? "fixed" : "autofit",
		availableWidthPt: r === null ? null : Math.max(0, r),
		gridWidthsPt: a,
		gridWidthKeys: o,
		tablePreferredWidthPt: dw(e, t),
		rows: i.rows.map((r, i) => {
			let o = e.lexical.rows[i], d = l[i] ?? 0, f = Math.max(0, r.gridAfter ?? 0), p = d + r.cells.reduce((e, t) => e + Math.max(1, t.colSpan), 0), m = c !== null && p + f > u ? 0 : f, h = d;
			return {
				before: d > 0 ? {
					columnSpan: d,
					preferredWidth: bw(o?.row?.beforeWidth, t)
				} : null,
				after: m > 0 ? {
					columnSpan: m,
					preferredWidth: bw(o?.row?.afterWidth, t)
				} : null,
				cells: r.cells.map((t, r) => {
					let c = o?.cells[r] ?? null, l = Math.max(1, t.colSpan), u = s === "fixed" ? {
						minWidthPt: 0,
						maxWidthPt: 0
					} : n(i, r), d = ux(e.format.rows[i]?.cellSpacingPt ?? 0, h, l, a.length), f = d.startPt + d.endPt, p = {
						columnStart: h,
						columnSpan: l,
						preferredWidth: cw(c?.preferredWidth) ?? uw(t),
						minContentWidthPt: Math.max(0, u.minWidthPt) + f,
						maxContentWidthPt: Math.max(u.minWidthPt, u.maxWidthPt) + f
					};
					return h += l, p;
				})
			};
		})
	};
}
//#endregion
//#region packages/docx/src/layout/layout-source-store.ts
var Sw = /* @__PURE__ */ new WeakSet();
function Cw(e) {
	return typeof e == "object" && !!e && Sw.has(e);
}
function ww(e, t, n) {
	let r = Object.keys(e).sort(), i = [...t].sort();
	if (r.length !== i.length || r.some((e, t) => e !== i[t])) throw TypeError(`${n} has unexpected fields: ${r.join(",")}`);
}
function Tw(e, t, n) {
	let r = [...t].filter((t) => !e.has(t)), i = [...e].filter((e) => !t.has(e));
	if (r.length !== 0 || i.length !== 0) throw TypeError(`${n} membership mismatch; missing=${r.join(",")} extra=${i.join(",")}`);
}
function Ew(e, t) {
	let n = (e) => {
		e && t.storyRoot(e);
	}, r = (e) => {
		if (e.story !== "body" || e.storyInstance !== "body" || e.path.length !== 1 || t.body[e.path[0]] === void 0) throw TypeError(`Unknown body layout occurrence source: ${z(e)}`);
	}, i = (e) => {
		for (let t of [
			e.headers.default,
			e.headers.first,
			e.headers.even,
			e.footers.default,
			e.footers.first,
			e.footers.even
		]) n(t);
	};
	if (e.source.story !== "body" || e.source.storyInstance !== "body" || e.source.path.length !== 0) throw TypeError("Body layout input requires the canonical body root");
	i(e.initialSection);
	for (let n of e.sequence) if (r(n.kind === "body-block" ? n.block.source : n.source), n.kind === "body-block") {
		if (t.resolve(n.block.source).type !== n.block.kind) throw TypeError("Body layout block source kind mismatch");
	} else if (n.kind === "adjacent-table-group") {
		for (let e of n.tables) if (t.resolve(e.source).type !== "table") throw TypeError("Adjacent table source kind mismatch");
	} else n.kind === "begin-section" && i(n.section);
}
function Dw(e, t, n, r, i) {
	let a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), u = (e, t = "image") => {
		if (a.has(e)) throw TypeError(`Duplicate canonical image resource: ${e}`);
		a.add(e), o.set(e, t);
	};
	for (let n of t.paragraphs) {
		let t = e.resolve(n.source);
		if (t.type === "paragraph") {
			if (n.publicAnchorBridges.length !== t.runs.length) throw TypeError(`Paragraph anchor bridge cardinality mismatch: ${z(n.source)}`);
			t.numbering?.picBulletImagePath && u(et(n.source, t.numbering.picBulletImagePath), "picture-bullet"), t.runs.forEach((e, t) => {
				let r = {
					...n.source,
					path: [...n.source.path, t]
				};
				if (e.type === "image" && u(et(r, e.imagePath)), e.type === "chart") {
					if (s.has(e.resourceKey)) throw TypeError(`Duplicate canonical chart resource: ${e.resourceKey}`);
					s.add(e.resourceKey);
				}
				if (e.type === "math") {
					if (c.has(e.resourceKey)) throw TypeError(`Duplicate canonical math resource: ${e.resourceKey}`);
					c.add(e.resourceKey), l.set(e.resourceKey, z(e.source));
				}
				if (e.type === "shape" && e.textBoxInput?.kind === "compatibility") for (let t of e.textBoxInput.paragraphs) t.image && u(et({
					...t.source,
					path: [...t.source.path, 0]
				}, t.image.imagePath));
				e.type === "shape" && e.fill?.fillType === "image" && u(et(r, e.fill.imagePath));
			});
		}
	}
	let d = new Set(r.map((e) => e.resourceKey));
	if (d.size !== r.length) throw TypeError("Duplicate image metadata resource");
	Tw(d, a, "Image metadata");
	let f = /* @__PURE__ */ new Set();
	for (let e of n) {
		if (f.has(e.resourceKey)) throw TypeError("Duplicate math occurrence resource");
		if (f.add(e.resourceKey), l.get(e.resourceKey) !== z(e.source)) throw TypeError(`Math occurrence source mismatch: ${e.resourceKey}`);
	}
	Tw(f, c, "Math occurrence");
	let p = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set();
	for (let e of i) {
		if (p.has(e.resourceKey)) throw TypeError("Duplicate paint resource descriptor");
		if (p.add(e.resourceKey), e.kind === "image" || e.kind === "picture-bullet") {
			if (m.add(e.resourceKey), o.get(e.resourceKey) !== e.kind) throw TypeError(`Image paint resource kind mismatch: ${e.resourceKey}`);
		} else e.kind === "chart" ? h.add(e.resourceKey) : g.add(e.resourceKey);
	}
	Tw(p, new Set([
		...a,
		...s,
		...c
	]), "Paint resource"), Tw(m, a, "Image paint resource"), Tw(h, s, "Chart paint resource"), Tw(g, c, "Math paint resource");
}
function Ow(e, t) {
	let n = jw(e.blockRepository);
	Ew(t, n), Fn(e.acquisitionFacts, "layout source acquisition facts"), Fn(e.section, "layout source section"), Fn(e.documentLayoutFacts, "layout source document facts"), Fn(e.fonts, "layout source font facts"), Fn(e.fontFamilyCharsets, "layout source font charsets"), Fn(e.mathOccurrences, "layout source math facts"), Fn(e.imageMetadata, "layout source image facts"), Fn(e.paintDescriptors, "layout source paint descriptors"), e.fatalParse && Fn(e.fatalParse, "layout source fatal parse fact");
	for (let [t, r] of [
		["block repository", n],
		["body blocks", n.body],
		["footnotes", n.footnotes],
		["endnotes", n.endnotes],
		["acquisition facts", e.acquisitionFacts],
		["paragraph facts", e.acquisitionFacts.paragraphs],
		["table facts", e.acquisitionFacts.tables],
		["section", e.section],
		["document facts", e.documentLayoutFacts],
		["font facts", e.fonts],
		["math facts", e.mathOccurrences],
		["image facts", e.imageMetadata],
		["paint descriptors", e.paintDescriptors]
	]) if (!Object.isFrozen(r)) throw TypeError(`Layout source ${t} must be sealed`);
	let r = /* @__PURE__ */ new Map();
	for (let t of e.acquisitionFacts.paragraphs) {
		ww(t, [
			"source",
			"publicAnchorBridges",
			"numberingMarkerFallbackFontSizePt"
		], "Paragraph acquisition fact");
		let e = z(t.source);
		if (r.has(e)) throw TypeError(`Duplicate paragraph acquisition source: ${e}`);
		r.set(e, t);
	}
	let i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new WeakMap();
	for (let t of e.acquisitionFacts.tables) {
		ww(t, ["source", "input"], "Table acquisition fact");
		let e = z(t.source);
		if (i.has(e)) throw TypeError(`Duplicate table acquisition source: ${e}`);
		i.add(e);
		let r = n.resolve(t.source);
		if (r.type !== "table") throw TypeError("Table acquisition fact must identify a table");
		a.set(r, t);
	}
	for (let e of n.sources) {
		let t = n.resolve(e), a = z(e);
		if (t.type === "paragraph" && !r.has(a)) throw TypeError(`Missing paragraph acquisition source: ${a}`);
		if (t.type === "table" && !i.has(a)) throw TypeError(`Missing table acquisition source: ${a}`);
	}
	Dw(n, e.acquisitionFacts, e.mathOccurrences, e.imageMetadata, e.paintDescriptors);
	let o = /* @__PURE__ */ new WeakMap();
	for (let t of e.acquisitionFacts.paragraphs) {
		let e = n.resolve(t.source);
		if (e.type !== "paragraph") throw TypeError("Paragraph acquisition fact must identify a paragraph");
		for (let t of e.runs) {
			if (t.type !== "shape" || t.textBoxInput?.kind !== "complete") continue;
			let e;
			try {
				e = n.storyRoot(t.textBoxInput.source);
			} catch (e) {
				throw TypeError(`Missing complete text-box story source: ${z(t.textBoxInput.source)}`, { cause: e });
			}
			if (e.length !== t.textBoxInput.blockCount) throw TypeError(`Complete text-box block count mismatch: ${z(t.textBoxInput.source)}`);
		}
		if (e.numbering && e.numberingMarkerShapeInput && t.numberingMarkerFallbackFontSizePt !== null) {
			let n = o.get(e.numbering);
			n || (n = /* @__PURE__ */ new Map(), o.set(e.numbering, n)), n.set(t.numberingMarkerFallbackFontSizePt, e.numberingMarkerShapeInput);
		}
	}
	let s = Object.freeze({
		numberingMarkerShapeInput(e, t) {
			let n = o.get(e)?.get(t);
			if (n) return n;
			throw Error("Unknown numbering marker acquisition input");
		},
		paragraphMarkShapeInput(e) {
			return e.paragraphMarkShapeInput;
		},
		tableFormatInput(e) {
			let t = a.get(e);
			if (!t) throw Error("Unknown table acquisition input");
			return t.input.format;
		},
		tableColumnLayoutInput(e, t, n, r) {
			let i = a.get(e);
			if (!i) throw Error("Unknown table acquisition input");
			return xw(i.input, t, (t, r) => n(e.rows[t].cells[r]), r);
		},
		tableParticipatesInOrdinaryFlow(e) {
			let t = a.get(e);
			if (!t) throw Error("Unknown table acquisition input");
			return t.input.format.ordinaryFlow;
		},
		paragraphAcquisitionInput(e, t) {
			if (!r.get(z(t))) throw Error(`Unknown paragraph acquisition source: ${z(t)}`);
			let i = n.resolve(t);
			if (i.type !== "paragraph") throw Error(`Paragraph source kind mismatch: ${z(t)}`);
			return i;
		}
	}), c = Object.freeze({
		acquisitionInputs: s,
		effectiveTablePositioning(e) {
			let t = a.get(e);
			if (!t) throw Error("Unknown table acquisition input");
			return t.input.format.positioning === null ? null : e.tblpPr ?? null;
		},
		publicAnchorBridge(e, t) {
			let n = r.get(z(e));
			if (!n) throw Error(`Unknown paragraph acquisition source: ${z(e)}`);
			if (!Number.isSafeInteger(t) || t < 0 || t >= n.publicAnchorBridges.length) throw RangeError(`Unknown paragraph anchor bridge index: ${t}`);
			return n.publicAnchorBridges[t] ?? null;
		}
	}), l = (e) => {
		let t = new Set(e), n = Object.create(null);
		return Object.defineProperties(n, {
			size: { get: () => t.size },
			has: { value: (e) => t.has(e) },
			entries: { value: () => t.entries() },
			keys: { value: () => t.keys() },
			values: { value: () => t.values() },
			forEach: { value: (e, r) => {
				t.forEach((t) => e.call(r, t, t, n));
			} },
			[Symbol.iterator]: { value: () => t[Symbol.iterator]() },
			[Symbol.toStringTag]: { value: "Set" }
		}), Object.freeze(n);
	}, u = Object.freeze({
		...e.documentLayoutFacts,
		kinsoku: Object.freeze({
			enabled: e.documentLayoutFacts.kinsoku.enabled,
			lineStartForbidden: l(e.documentLayoutFacts.kinsoku.lineStartForbidden),
			lineEndForbidden: l(e.documentLayoutFacts.kinsoku.lineEndForbidden)
		})
	}), d = Object.freeze({
		blocks: n,
		bodyLayoutInput: t,
		section: e.section,
		documentLayoutSettings: u,
		fonts: e.fonts,
		fontFamilyCharsets: e.fontFamilyCharsets,
		mathOccurrences: e.mathOccurrences,
		imageMetadata: e.imageMetadata,
		hasPaginationFields: e.hasPaginationFields,
		requiresDomVerticalGlyphLayout: e.requiresDomVerticalGlyphLayout,
		fatalParse: e.fatalParse,
		acquisition: c,
		paintResources: qn(e.paintDescriptors)
	});
	return Sw.add(d), d;
}
function kw(e) {
	let { bodyLayoutInput: t, ...n } = e;
	return Ow(n, Fn(t, "layout source body input"));
}
function Aw(e) {
	return `${e.story}:${e.storyInstance}`;
}
function jw(e) {
	Fn(e.body, "layout source body blocks"), Fn(e.stories, "layout source story blocks"), Fn(e.footnotes, "layout source footnotes"), Fn(e.endnotes, "layout source endnotes");
	let t = /* @__PURE__ */ new Map();
	for (let { source: n, body: r } of e.stories) {
		if (n.path.length !== 0) throw TypeError("Story repository roots require an empty source path");
		if (n.story !== "header" && n.story !== "footer" && n.story !== "textbox") throw TypeError(`Unsupported repository story kind: ${n.story}`);
		let e = Aw(n);
		if (t.has(e)) throw TypeError(`Duplicate story source: ${e}`);
		t.set(e, r);
	}
	let n = (e, t) => {
		let n = /* @__PURE__ */ new Map();
		for (let r of e) {
			if (n.has(r.id)) throw TypeError(`Duplicate ${t} story source: ${r.id}`);
			n.set(r.id, r.content);
		}
		return n;
	}, r = n(e.footnotes, "footnote"), i = n(e.endnotes, "endnote"), a = (n) => {
		if (n.path.length !== 0) throw Error("Story lookup requires a root-only source");
		if (n.story === "body" && n.storyInstance === "body") return e.body;
		if (n.story === "footnote") {
			let e = r.get(n.storyInstance);
			if (e) return e;
		}
		if (n.story === "endnote") {
			let e = i.get(n.storyInstance);
			if (e) return e;
		}
		let a = t.get(Aw(n));
		if (a) return a;
		throw Error(`Unknown ${n.story} story source: ${n.storyInstance}`);
	}, o = /* @__PURE__ */ new Map(), s = [], c = (e, t, n = []) => {
		e.forEach((e, r) => {
			let i = [...n, r];
			if (e.type !== "paragraph" && e.type !== "table") return;
			let a = {
				...t,
				path: i
			}, l = z(a);
			if (o.has(l)) throw TypeError(`Duplicate block source: ${l}`);
			o.set(l, e), s.push(Object.freeze({
				...a,
				path: Object.freeze([...i])
			})), e.type === "table" && e.rows.forEach((e, n) => e.cells.forEach((e, r) => {
				c(e.content, t, [
					...i,
					n,
					r
				]);
			}));
		});
	};
	c(e.body, {
		story: "body",
		storyInstance: "body",
		path: []
	});
	for (let { source: t, body: n } of e.stories) c(n, t);
	for (let t of e.footnotes) c(t.content, {
		story: "footnote",
		storyInstance: t.id,
		path: []
	});
	for (let t of e.endnotes) c(t.content, {
		story: "endnote",
		storyInstance: t.id,
		path: []
	});
	return Object.freeze({
		body: e.body,
		footnotes: e.footnotes,
		endnotes: e.endnotes,
		sources: Object.freeze(s),
		resolve(e) {
			let t = o.get(z(e));
			if (!t) throw Error(`Unknown block source: ${z(e)}`);
			return t;
		},
		storyRoot: a
	});
}
//#endregion
//#region packages/docx/src/layout/typography-input.ts
function Mw(e) {
	let t = e.__typographyAcquisition;
	if (t !== void 0) return B({
		sourceText: "text" in e ? e.text : e.fallbackText,
		...t
	}, "DOCX run typography acquisition input");
}
function Nw(e) {
	let t = e.__paragraphTypographyAcquisition;
	if (t !== void 0) return B(t, "DOCX paragraph typography acquisition input");
}
//#endregion
//#region packages/docx/src/layout/adjacent-tables.ts
function Pw(e, t) {
	let n = t[0].logicalTotalRows, r = 0;
	for (let i of t) {
		if (i.logicalTotalRows !== n || !Number.isInteger(i.rowCount) || i.rowCount < 0 || i.logicalRowOffset !== r) throw Error(`Parser-owned adjacent table sequence ${e} is inconsistent`);
		r += i.rowCount;
	}
	if (r !== n) throw Error(`Parser-owned adjacent table sequence ${e} is incomplete`);
}
function Fw(e) {
	let t = [], n = null, r = [], i = () => {
		r.length > 0 && Pw(n, r), r.length === 1 ? t.push(Object.freeze({
			kind: "body-element",
			element: r[0].element
		})) : r.length > 1 && t.push(Object.freeze({
			kind: "adjacent-table-group",
			logicalSequenceId: n,
			tables: Object.freeze(r.map((e) => e.element))
		})), n = null, r = [];
	};
	for (let { element: a, table: o } of e) {
		if (a.type === "table" && o !== null) {
			r.length > 0 && n !== o.logicalSequenceId && i(), n = o.logicalSequenceId, r.push(Object.freeze({
				element: a,
				logicalRowOffset: o.logicalRowOffset,
				logicalTotalRows: o.logicalTotalRows,
				rowCount: o.rowCount
			}));
			continue;
		}
		i(), t.push(Object.freeze({
			kind: "body-element",
			element: a
		}));
	}
	return i(), Object.freeze(t);
}
//#endregion
//#region packages/docx/src/layout/body-layout-input.ts
function Iw(e) {
	switch (e) {
		case "continuous":
		case "nextColumn":
		case "nextPage":
		case "oddPage":
		case "evenPage": return e;
		default: return "nextPage";
	}
}
function Lw(e, t, n) {
	let r = n === null ? null : `section:${n}`, i = (n) => e[n] === null ? null : {
		story: t,
		storyInstance: r === null ? n : `${r}:${n}`,
		path: []
	};
	return Object.freeze({
		default: i("default"),
		first: i("first"),
		even: i("even")
	});
}
function Rw(e) {
	return {
		...e.geometry,
		titlePage: e.titlePage,
		evenAndOddHeaders: !1,
		sectionStart: e.startType,
		columns: e.columns,
		textDirection: e.textDirection,
		docGridType: e.docGridType,
		docGridLinePitch: e.docGridLinePitch,
		docGridCharSpace: e.docGridCharSpace,
		pageNumType: e.pageNumType,
		vAlign: e.vAlign,
		lineNumbering: e.lineNumbering
	};
}
function zw(e, t) {
	let n = e.markerBodyIndex;
	return Object.freeze({
		sectionOccurrenceId: e.sectionOccurrenceId,
		source: Object.freeze(n === null ? {
			story: "body",
			storyInstance: "body",
			path: Object.freeze([])
		} : {
			story: "body",
			storyInstance: "body",
			path: Object.freeze([n])
		}),
		startType: Iw(e.startType),
		context: Object.freeze(Du(Rw(e), e.sectionBidi)),
		pageNumbering: Object.freeze({
			start: e.pageNumType?.start ?? null,
			format: e.pageNumType?.fmt ?? null
		}),
		titlePage: e.titlePage,
		evenAndOddHeaders: t.evenAndOddHeaders,
		headers: Lw(e.headers, "header", n),
		footers: Lw(e.footers, "footer", n),
		pageBordersAuthored: e.pageBordersAuthored,
		pageBorders: e.pageBorders,
		pageLayout: Object.freeze({
			physicalGeometry: Object.freeze({ ...e.geometry }),
			columns: e.columns,
			textDirection: e.textDirection ?? "lrTb",
			gutterPt: e.gutterPt,
			rtlGutter: e.rtlGutter,
			...t.pageLayoutSettings
		})
	});
}
function Bw(e) {
	let t = new Map(e.sectionIndex.occurrences.map((t) => [t.sectionOccurrenceId, zw(t, e)])), n = e.sectionIndex.occurrences[0];
	if (!n) throw Error("DOCX body requires a final section owner");
	let r = t.get(n.sectionOccurrenceId), i = e.sequence.map((e) => {
		if (e.kind !== "begin-section") return e;
		let n = t.get(e.section.sectionOccurrenceId);
		if (!n) throw Error(`Missing body section owner: ${e.section.sectionOccurrenceId}`);
		return Object.freeze({
			...e,
			section: n
		});
	});
	return B({
		source: {
			story: "body",
			storyInstance: "body",
			path: []
		},
		initialSection: r,
		sequence: i.map((e, t) => {
			if (e.kind !== "body-block" || e.block.kind !== "paragraph") return e;
			let n = Bm(i, t);
			return n === void 0 ? e : Object.freeze({
				...e,
				block: Object.freeze({
					...e.block,
					continuousSectionRole: n
				})
			});
		}),
		parserDiagnostics: e.parserDiagnostics ?? [],
		endnoteIds: e.endnoteIds ?? [],
		noteLayoutSettings: e.noteLayoutSettings
	}, "DOCX body layout input");
}
//#endregion
//#region packages/docx/src/layout/paragraph-visibility.ts
function Vw(e) {
	return !(e.runs ?? []).some((e) => e.type === "text" ? e.text.length > 0 : !0);
}
//#endregion
//#region packages/docx/src/parser-model.ts
var Hw = /* @__PURE__ */ new WeakMap();
function Uw(e) {
	return Hw.get(e) ?? [];
}
function Ww(e) {
	let t = Uw(e);
	if (t.length === 0) return e.runs;
	let n = [], r = 0;
	for (let i = 0; i <= e.runs.length; i += 1) {
		for (; t[r]?.publicRunIndex === i;) n.push(t[r].run), r += 1;
		i < e.runs.length && n.push(e.runs[i]);
	}
	return n;
}
function Gw(e) {
	return Uw(e).length > 0;
}
function Kw(e) {
	let t = e.__documentTypographySettings?.normalStyleFontSizePt;
	return B({ normalStyleFontSizePt: typeof t == "number" && Number.isFinite(t) && t > 0 ? t : 10 }, "DOCX document typography settings input");
}
function qw(e) {
	let t = e.__pageLayoutSettings;
	return B({
		mirrorMargins: t?.mirrorMargins === !0,
		gutterAtTop: t?.gutterAtTop === !0,
		bookFoldPrinting: t?.bookFoldPrinting === !0,
		bookFoldRevPrinting: t?.bookFoldRevPrinting === !0,
		printTwoOnOne: t?.printTwoOnOne === !0
	}, "DOCX page layout settings input");
}
function Jw(e) {
	let t = e.__noteLayoutSettings;
	return B({
		footnotePosition: t?.footnotePosition ?? "pageBottom",
		endnotePosition: t?.endnotePosition ?? "docEnd"
	}, "DOCX note layout settings input");
}
function Yw(e) {
	return Object.freeze(e ? Object.fromEntries(Object.entries(e).filter((e) => typeof e[1] == "number")) : {});
}
function Xw(e) {
	return Object.freeze({
		...e,
		pageGeometry: Yw(e.pageGeometry)
	});
}
var Zw = /* @__PURE__ */ new WeakMap(), Qw = /* @__PURE__ */ new WeakMap(), $w = /* @__PURE__ */ new WeakMap(), eT = /* @__PURE__ */ new WeakMap(), tT = /* @__PURE__ */ new WeakMap();
function nT(e) {
	let t = $w.get(e);
	if (t) return t;
	let n = B({
		table: e.__tableLayout ?? null,
		rows: e.rows.map((e) => ({
			row: e.__tableRowLayout ?? null,
			cells: e.cells.map((e) => e.__tableCellLayout ?? null)
		}))
	}, "DOCX table acquisition input");
	return $w.set(e, n), n;
}
var rT = (e) => e != null && Number.isFinite(e) ? e : null;
function iT(e) {
	return B({
		colWidths: (e.colWidths ?? []).map((e) => Number.isFinite(e) && e >= 0 ? e : 0),
		layout: e.layout ?? null,
		widthPt: rT(e.widthPt),
		widthPct: rT(e.widthPct),
		rows: e.rows.map((e) => ({
			gridBefore: rT(e.gridBefore) ?? 0,
			gridAfter: rT(e.gridAfter) ?? 0,
			cells: e.cells.map((e) => ({
				colSpan: rT(e.colSpan) ?? 1,
				widthPt: rT(e.widthPt),
				widthPct: rT(e.widthPct)
			}))
		}))
	}, "DOCX table column semantic input");
}
function aT(e) {
	let t = tT.get(e);
	if (t) return t;
	let n = Nn({
		semantic: iT(e),
		lexical: nT(e),
		format: vT(e)
	});
	return tT.set(e, n), n;
}
function oT(e) {
	return aT(e).format.ordinaryFlow;
}
function sT(e) {
	return aT(e).format.positioning === null ? null : e.tblpPr ?? null;
}
function cT(e) {
	return {
		leftFromTextPt: e.leftFromText,
		rightFromTextPt: e.rightFromText,
		topFromTextPt: e.topFromText,
		bottomFromTextPt: e.bottomFromText,
		horzAnchor: e.horzAnchor,
		horzSpecified: e.horzSpecified,
		vertAnchor: e.vertAnchor,
		xPt: e.tblpX,
		yPt: e.tblpY,
		...e.tblpXSpec == null ? {} : { xAlign: e.tblpXSpec },
		...e.tblpYSpec == null ? {} : { yAlign: e.tblpYSpec }
	};
}
function lT(e, t) {
	if (e === null) return null;
	let n = e.trim(), r = t && n.endsWith("%") ? n.slice(0, -1) : n;
	if (r.length === 0) return null;
	let i = Number(r);
	return Number.isFinite(i) ? i : null;
}
function uT(e) {
	let t = lT(e ?? null, !1);
	return t === null ? null : t / 20;
}
function dT(e) {
	return e === "exact" || e === "atLeast" ? e : "auto";
}
function fT(e) {
	return {
		rule: Dl(dT(e.rule), e.ruleAuthored),
		valuePt: uT(e.value)
	};
}
function pT(e) {
	if (e.rowHeight === null || !Number.isFinite(e.rowHeight)) return null;
	let t = dT(e.rowHeightRule);
	return {
		rule: t === "auto" ? "atLeast" : t,
		valuePt: e.rowHeight
	};
}
function mT(...e) {
	for (let t of e) {
		if (!t) continue;
		let e = Ol(sw(t), lw(t));
		if (e !== null) return e;
	}
	return null;
}
function hT(e, t, n) {
	if (!e) return null;
	let r = sw(e);
	return kl({
		kind: r,
		dxaValuePt: r === "dxa" ? uT(e.value ?? "0") : null,
		scope: t,
		edge: n
	});
}
function gT(e, t, n, r, i, a, o) {
	let s = e.bidiVisual === !0, c = (e, t) => {
		let n = t === "left" ? s ? "end" : "start" : s ? "start" : "end";
		return {
			width: e?.[t] ?? e?.[n],
			edge: n
		};
	}, l = (e, ...t) => {
		for (let n of t) {
			let t = hT(n.width, n.scope, n.edge ?? e);
			if (t !== null) return t;
		}
		return null;
	}, u = c(r, "left"), d = c(i, "left"), f = c(a, "left"), p = c(o, "left"), m = c(r, "right"), h = c(i, "right"), g = c(a, "right"), _ = c(o, "right"), v = (e) => !n && e != null && Number.isFinite(e) ? e : null;
	return {
		top: l("top", {
			width: r?.top,
			scope: "cell"
		}) ?? v(t.marginTop) ?? l("top", {
			width: i?.top,
			scope: "exception"
		}, {
			width: a?.top,
			scope: "table"
		}, {
			width: o?.top,
			scope: "style"
		}) ?? e.cellMarginTop,
		bottom: l("bottom", {
			width: r?.bottom,
			scope: "cell"
		}) ?? v(t.marginBottom) ?? l("bottom", {
			width: i?.bottom,
			scope: "exception"
		}, {
			width: a?.bottom,
			scope: "table"
		}, {
			width: o?.bottom,
			scope: "style"
		}) ?? e.cellMarginBottom,
		left: l(u.edge, {
			...u,
			scope: "cell"
		}) ?? v(t.marginLeft) ?? l(d.edge, {
			...d,
			scope: "exception"
		}, {
			...f,
			scope: "table"
		}, {
			...p,
			scope: "style"
		}) ?? e.cellMarginLeft,
		right: l(m.edge, {
			...m,
			scope: "cell"
		}) ?? v(t.marginRight) ?? l(h.edge, {
			...h,
			scope: "exception"
		}, {
			...g,
			scope: "table"
		}, {
			..._,
			scope: "style"
		}) ?? e.cellMarginRight
	};
}
function _T(e) {
	if (!e) return null;
	let t = e.indent ? sw(e.indent) : null;
	return {
		preferredWidthAuthored: e.preferredWidth != null,
		preferredWidth: cw(e.preferredWidth),
		layout: e.layout?.kind === "fixed" || e.layout?.kind === "autofit" ? e.layout.kind : null,
		justification: e.justification,
		indentAuthored: e.indent != null && (t === "dxa" || t === "nil"),
		indentPt: t === "nil" ? 0 : lw(e.indent),
		borders: e.borders
	};
}
function vT(e) {
	let t = eT.get(e);
	if (t) return t;
	let n = nT(e), r = n.table?.ordinaryFlow ?? e.tblpPr == null, i = e.rows.map((t, r) => {
		let i = n.rows[r]?.row ?? null, a = i?.exception ?? null;
		return {
			height: i?.height ? fT(i.height) : pT(t),
			cantSplit: t.cantSplit === !0,
			repeatedHeader: t.isHeader === !0,
			cellSpacingPt: mT(i?.cellSpacing, a?.cellSpacing, n.table?.cellSpacing, i?.styleCellSpacing) ?? 0,
			justification: i?.justification ?? a?.justification ?? null,
			exception: _T(a),
			cells: t.cells.map((t, o) => ({ marginsPt: gT(e, t, n.rows[r]?.cells[o] !== null && n.rows[r]?.cells[o] !== void 0, n.rows[r]?.cells[o]?.margins, a?.cellMargins, n.table?.cellMargins, i?.styleCellMargins) }))
		};
	}), a = B({
		effectiveStyleId: n.table?.effectiveStyleId ?? null,
		ordinaryFlow: r,
		logicalSequenceId: n.table?.logicalSequenceId ?? null,
		logicalRowOffset: n.table?.logicalRowOffset ?? 0,
		logicalTotalRows: n.table?.logicalTotalRows ?? 0,
		positioning: r || e.tblpPr == null ? null : cT(e.tblpPr),
		rows: i,
		firstRowException: i[0]?.exception ?? null
	}, "DOCX table format input");
	return eT.set(e, a), a;
}
function yT(e) {
	return Object.freeze(e.map((e) => {
		if (e.type !== "table") return Object.freeze({
			element: e,
			table: null
		});
		let t = vT(e);
		return t.logicalSequenceId == null ? Object.freeze({
			element: e,
			table: null
		}) : Object.freeze({
			element: e,
			table: Object.freeze({
				logicalSequenceId: t.logicalSequenceId,
				logicalRowOffset: t.logicalRowOffset ?? 0,
				logicalTotalRows: t.logicalTotalRows ?? 0,
				rowCount: e.rows.length
			})
		});
	}));
}
var bT = (e) => Object.freeze({
	story: "body",
	storyInstance: "body",
	path: Object.freeze([e])
}), xT = new Set([
	"paragraph",
	"line",
	"character"
]);
function ST(e, t, n) {
	if (e.type !== "shape" && e.type !== "image" && e.type !== "chart" || NT(e) !== void 0 || !so(e.wrapMode) || e.type !== "shape" && !e.anchor || e.widthPt <= 0 || e.heightPt <= 0) return null;
	let r = e.anchorXRelativeFrom ?? (e.anchorXFromMargin ? "margin" : "page"), i = e.anchorYRelativeFrom ?? (e.anchorYFromPara ? "paragraph" : "page"), a = `${t.story}:${t.storyInstance}:${t.path.join(".")}`;
	return Object.freeze({
		occurrenceId: e.type === "shape" ? `public-shape:${a}:${n}` : `public-anchor:${a}:${n}`,
		pageOwned: !xT.has(r) && !xT.has(i)
	});
}
function CT(e, t) {
	let n = new Set([
		"paragraph",
		"line",
		"character"
	]), r = Object.freeze([...new Set(Ww(e).flatMap((e, r) => {
		let i = e;
		if (e.type !== "shape" && e.type !== "image" && e.type !== "chart" && i.type !== "unavailableDrawing") return [];
		let a = NT(i);
		if (!a) {
			let e = i.type === "unavailableDrawing" ? null : ST(i, t, r);
			return e?.pageOwned ? [e.occurrenceId] : [];
		}
		return a.horizontal.relativeFromStatus !== "valid" || a.vertical.relativeFromStatus !== "valid" || a.horizontal.relativeFrom === null || a.vertical.relativeFrom === null || a.wrap.kind === "none" || n.has(a.horizontal.relativeFrom) || n.has(a.vertical.relativeFrom) ? [] : [it(t, a.occurrenceId)];
	}))]);
	return Object.freeze({
		kind: "paragraph",
		source: t,
		pageBreakBefore: e.pageBreakBefore === !0,
		keepLines: e.keepLines === !0,
		keepNext: e.keepNext === !0,
		widowControl: e.widowControl !== !1,
		spaceBeforePt: e.spaceBefore ?? 0,
		spaceAfterPt: e.spaceAfter ?? 0,
		contextualSpacing: e.contextualSpacing === !0,
		styleId: e.styleId ?? null,
		inkless: !Gw(e) && Vw(e),
		...r.length === 0 ? {} : { pageOwnedAnchorOccurrenceIds: r }
	});
}
function wT(e) {
	return Object.freeze({
		kind: "table",
		source: e
	});
}
function TT(e, t) {
	let n = 0;
	return Object.freeze(Fw(yT(e)).map((e) => {
		if (e.kind === "adjacent-table-group") {
			let t = n;
			return n += e.tables.length, Object.freeze({
				kind: "adjacent-table-group",
				logicalSequenceId: e.logicalSequenceId,
				source: bT(t),
				tables: Object.freeze(e.tables.map((e, n) => Object.freeze({
					...wT(bT(t + n)),
					rowCount: e.rows.length
				})))
			});
		}
		let r = e.element, i = n, a = bT(i);
		if (n += 1, r.type === "paragraph") return r.markVanish === !0 && !Gw(r) && Vw(r) ? Object.freeze({
			kind: "consume-source",
			source: a,
			reason: "hidden-paragraph"
		}) : Object.freeze({
			kind: "body-block",
			block: CT(r, a)
		});
		if (r.type === "table") return Object.freeze({
			kind: "body-block",
			block: wT(a)
		});
		if (r.type === "pageBreak" || r.type === "columnBreak") return Object.freeze({
			kind: "authored-break",
			source: a,
			break: r.type === "pageBreak" ? "page" : "column",
			...r.type === "pageBreak" && r.parity !== void 0 ? { parity: r.parity } : {},
			...r.type === "pageBreak" && r.sameParagraphAsPrevious === !0 ? { sameSourceParagraphAsPrevious: !0 } : {}
		});
		if (r.type === "sectionBreak") return Object.freeze({
			kind: "begin-section",
			source: a,
			section: t(i)
		});
		throw Error(`Unsupported body layout source at ${i}`);
	}));
}
function ET(e, t, n, r = t) {
	return xw(aT(e), t, (t, r) => n(e.rows[t].cells[r]), r);
}
function DT(e, t, n) {
	if (!t || typeof t != "object") return;
	let r = Qw.get(e);
	r || (r = /* @__PURE__ */ new WeakMap(), Qw.set(e, r)), r.set(t, n);
}
function OT(e) {
	let t = /* @__PURE__ */ new Map(), n = 0;
	e.body.forEach((e, r) => {
		if (e.type !== "sectionBreak") return;
		let i = e.__sectionPlacement;
		t.set(r, B({
			sectionId: i?.sectionId ?? `section:${n}`,
			sectionBidi: i?.sectionBidi === !0,
			vAlign: i?.vAlign ?? null,
			lineNumbering: i?.lineNumbering ?? null,
			docGridType: i?.docGridType ?? null,
			docGridLinePitch: i?.docGridLinePitch ?? null,
			docGridCharSpace: i?.docGridCharSpace ?? null,
			gutterPt: i?.gutterPt ?? null,
			rtlGutter: i?.rtlGutter ?? null,
			pageBordersAuthored: i?.pageBordersAuthored ?? !1,
			pageBorders: i?.pageBorders ?? null,
			pageGeometry: i?.pageGeometry ?? e.geom ?? {}
		}, "DOCX ending-section placement input")), n += 1;
	});
	let r = e.section?.__sectionPlacement;
	return Object.freeze({
		endingSections: t,
		finalSection: B({
			sectionId: r?.sectionId ?? `section:${n}`,
			sectionBidi: r?.sectionBidi === !0,
			vAlign: r?.vAlign ?? e.section?.vAlign ?? null,
			lineNumbering: r?.lineNumbering ?? e.section?.lineNumbering ?? null,
			docGridType: r?.docGridType ?? e.section?.docGridType ?? null,
			docGridLinePitch: r?.docGridLinePitch ?? e.section?.docGridLinePitch ?? null,
			docGridCharSpace: r?.docGridCharSpace ?? e.section?.docGridCharSpace ?? null,
			gutterPt: r?.gutterPt ?? null,
			rtlGutter: r?.rtlGutter ?? null,
			pageBordersAuthored: r?.pageBordersAuthored ?? e.section?.pageBorders != null,
			pageBorders: r?.pageBorders ?? e.section?.pageBorders ?? null,
			pageGeometry: r?.pageGeometry ?? (e.section ? Tu(e.section) : {})
		}, "DOCX final-section placement input")
	});
}
var kT = Object.freeze({
	default: null,
	first: null,
	even: null
});
function AT(e) {
	let t = [], n = OT(e), r = 0;
	e.body.forEach((e, i) => {
		if (e.type !== "sectionBreak") return;
		let a = n.endingSections.get(i) ?? n.finalSection, o = t.length;
		t.push({
			sectionOccurrenceId: a.sectionId,
			ordinal: o,
			startBodyIndex: r,
			endBodyIndex: i,
			markerBodyIndex: i,
			final: !1,
			startType: e.kind ?? "nextPage",
			columns: e.columns ?? null,
			authoredGeometry: Yw(a.pageGeometry),
			textDirection: e.textDirection ?? null,
			pageNumType: e.pageNumType ?? null,
			headers: e.headers ?? kT,
			footers: e.footers ?? kT,
			titlePage: e.titlePage ?? !1,
			sectionBidi: a.sectionBidi,
			vAlign: a.vAlign,
			lineNumbering: a.lineNumbering,
			docGridType: a.docGridType,
			docGridLinePitch: a.docGridLinePitch,
			docGridCharSpace: a.docGridCharSpace,
			authoredGutterPt: a.gutterPt,
			rtlGutter: a.rtlGutter === !0,
			pageBordersAuthored: a.pageBordersAuthored,
			pageBorders: a.pageBorders,
			placement: Xw(a)
		}), r = i + 1;
	});
	let i = n.finalSection;
	t.push({
		sectionOccurrenceId: i.sectionId,
		ordinal: t.length,
		startBodyIndex: r,
		endBodyIndex: e.body.length - 1,
		markerBodyIndex: null,
		final: !0,
		startType: e.section.sectionStart ?? "nextPage",
		columns: e.section.columns ?? null,
		authoredGeometry: i.pageGeometry == null ? Tu(e.section) : Yw(i.pageGeometry),
		textDirection: e.section.textDirection ?? null,
		pageNumType: e.section.pageNumType ?? null,
		headers: e.headers ?? kT,
		footers: e.footers ?? kT,
		titlePage: e.section.titlePage,
		sectionBidi: i.sectionBidi,
		vAlign: i.vAlign,
		lineNumbering: i.lineNumbering,
		docGridType: i.docGridType,
		docGridLinePitch: i.docGridLinePitch,
		docGridCharSpace: i.docGridCharSpace,
		authoredGutterPt: i.gutterPt,
		rtlGutter: i.rtlGutter === !0,
		pageBordersAuthored: i.pageBordersAuthored,
		pageBorders: i.pageBorders,
		placement: Xw(i)
	});
	let a = Array(t.length), o = Tu(e.section), s = null, c = null;
	for (let e = t.length - 1; e >= 0; --e) {
		let n = t[e], r = n.startType === "continuous" && s !== null ? s : o, i = n.authoredGeometry, l = {
			pageWidth: i.pageWidth ?? r.pageWidth,
			pageHeight: i.pageHeight ?? r.pageHeight,
			marginTop: i.marginTop ?? r.marginTop,
			marginRight: i.marginRight ?? r.marginRight,
			marginBottom: i.marginBottom ?? r.marginBottom,
			marginLeft: i.marginLeft ?? r.marginLeft,
			headerDistance: i.headerDistance ?? r.headerDistance,
			footerDistance: i.footerDistance ?? r.footerDistance
		}, u = n.authoredGutterPt ?? (n.startType === "continuous" ? c : null) ?? 0, { authoredGeometry: d, authoredGutterPt: f, ...p } = n;
		a[e] = {
			...p,
			geometry: l,
			gutterPt: u
		}, s = l, c = u;
	}
	return B({
		bodyLength: e.body.length,
		occurrences: a
	}, "DOCX body section index input");
}
function jT(e) {
	let t = AT(e), n = /* @__PURE__ */ new Map();
	for (let e of t.occurrences) e.startBodyIndex !== 0 && n.set(e.startBodyIndex - 1, e);
	let r = TT(e.body, (e) => {
		let t = n.get(e);
		if (!t) throw Error(`Missing incoming body section at ${e}`);
		return Object.freeze({
			sectionOccurrenceId: t.sectionOccurrenceId,
			startType: t.startType
		});
	});
	return B({
		sectionIndex: t,
		evenAndOddHeaders: e.section.evenAndOddHeaders,
		endnoteIds: (e.endnotes ?? []).map((e) => e.id),
		noteLayoutSettings: Jw(e),
		pageLayoutSettings: qw(e),
		parserDiagnostics: sr(e.diagnostics, e.body.length),
		sequence: r
	}, "DOCX body layout acquisition input");
}
function MT(e) {
	let t = e.textPath;
	if (t) return B({
		string: t.string,
		...t.fontFamily === void 0 ? {} : { fontFamily: t.fontFamily },
		bold: t.bold ?? !1,
		italic: t.italic ?? !1,
		...t.textPathOk === void 0 ? {} : { textPathOk: t.textPathOk },
		...t.on === void 0 ? {} : { on: t.on },
		...t.fitShape === void 0 ? {} : { fitShape: t.fitShape },
		...t.fitPath === void 0 ? {} : { fitPath: t.fitPath },
		...t.trim === void 0 ? {} : { trim: t.trim },
		...t.xScale === void 0 ? {} : { xScale: t.xScale },
		...t.fontSizePt === void 0 ? {} : { fontSizePt: t.fontSizePt }
	}, "DOCX VML text path acquisition input");
}
function NT(e) {
	let t = e.__anchorAcquisition;
	if (t !== void 0) return B(t, "DOCX anchor acquisition input");
}
function PT(e, t) {
	let n = HT(e).fontFacts, r = n?.rtl === !0 || n?.cs === !0, i = r ? n?.fontSizeCs ?? n?.fontSize ?? t : n?.fontSize ?? t, a = n?.fontFamily ?? e.fontFamily ?? null, o = {
		ascii: a,
		highAnsi: n?.fontFamilyHighAnsi ?? a,
		eastAsia: n?.fontFamilyEastAsia ?? e.fontFamilyEastAsia ?? a,
		complexScript: n?.fontFamilyCs ?? a
	}, s = n?.fontSlots;
	return Object.freeze({
		fontSizePt: i,
		fonts: Object.freeze({ ...s?.direct ?? o }),
		themeFonts: s?.theme ? Object.freeze({ ...s.theme }) : void 0,
		themeFontPresence: s?.themePresent ? Object.freeze({ ...s.themePresent }) : void 0,
		weight: (r ? n?.boldCs ?? !1 : n?.bold ?? !1) ? 700 : 400,
		style: (r ? n?.italicCs ?? !1 : n?.italic ?? !1) ? "italic" : "normal",
		complexScript: r,
		fontHint: n?.fontHint,
		eastAsiaLanguage: n?.langEastAsia,
		kerning: n?.kerning == null ? void 0 : i >= n.kerning
	});
}
function FT(e, t) {
	let n = e.textBoxContent;
	return n === void 0 ? B({
		kind: "compatibility",
		source: t,
		paragraphs: Fh(e, t, PT)
	}, "DOCX public text box acquisition input") : B({
		kind: "complete",
		source: t,
		blockCount: n.length
	}, "DOCX complete text box acquisition input");
}
function IT(e) {
	let t = UT(e).paragraphMarkFontFacts;
	if (!t) return;
	let n = t.rtl === !0 || t.cs === !0, r = e.runs.find((e) => e.type === "text" || e.type === "field")?.fontSize ?? e.defaultFontSize ?? 10, i = n ? t.fontSizeCs ?? t.fontSize ?? r : t.fontSize ?? r, a = t.fontFamily ?? e.defaultFontFamily ?? null, o = {
		ascii: a,
		highAnsi: t.fontFamilyHighAnsi ?? a,
		eastAsia: t.fontFamilyEastAsia ?? e.defaultFontFamilyEastAsia ?? a,
		complexScript: t.fontFamilyCs ?? a
	};
	return Object.freeze({
		fontSizePt: i,
		fonts: Object.freeze({ ...t.fontSlots?.direct ?? o }),
		themeFonts: t.fontSlots?.theme ? Object.freeze({ ...t.fontSlots.theme }) : void 0,
		themeFontPresence: t.fontSlots?.themePresent ? Object.freeze({ ...t.fontSlots.themePresent }) : void 0,
		weight: (n ? t.boldCs ?? !1 : t.bold ?? !1) ? 700 : 400,
		style: (n ? t.italicCs ?? !1 : t.italic ?? !1) ? "italic" : "normal",
		complexScript: n,
		fontHint: t.fontHint,
		eastAsiaLanguage: t.langEastAsia,
		kerning: t.kerning == null ? void 0 : i >= t.kerning
	});
}
function LT(e, t) {
	let n = e, { layoutLines: r, lineSlice: i, runs: a, paragraphMarkFontFacts: o, __paragraphTypographyAcquisition: s, __complexFieldBoundaries: c, __runRevisions: l, ...u } = e, d = Nw(n), f = e.__complexFieldBoundaries?.map((e) => ({
		occurrenceKey: [
			"complex-field",
			t.story,
			t.storyInstance,
			t.path.slice(0, -1).join("."),
			String(e.occurrenceId)
		].join(":"),
		boundary: e.boundary,
		runIndex: e.runIndex,
		fieldType: e.fieldType,
		instruction: e.instruction,
		...e.hyperlinkAnchor === void 0 ? {} : { hyperlinkAnchor: e.hyperlinkAnchor }
	})), p = u.numbering, m = p == null ? null : (({ fontFacts: e, ...t }) => t)(p), h = structuredClone({
		...u,
		numbering: m
	}), g = Uw(n), _ = [];
	if (g.length === 0) n.runs.forEach((e, t) => {
		_.push({
			run: e,
			originalRun: n.runs[t]
		});
	});
	else {
		let e = 0;
		for (let t = 0; t <= n.runs.length; t += 1) {
			for (; g[e]?.publicRunIndex === t;) {
				let t = g[e].run;
				_.push({
					run: t,
					originalRun: t
				}), e += 1;
			}
			t < n.runs.length && _.push({
				run: n.runs[t],
				originalRun: n.runs[t]
			});
		}
	}
	let v = _.map(({ run: e, originalRun: n }, r) => {
		let i = e;
		if (i.type === "unavailableDrawing") {
			let e = NT(n), r = e === void 0 ? void 0 : B({
				...e,
				occurrenceId: it(t, e.occurrenceId)
			}, "DOCX scoped unavailable drawing anchor acquisition input"), { __anchorAcquisition: a, ...o } = i;
			return Object.freeze({
				...o,
				...r === void 0 ? {} : { anchorAcquisitionInput: r }
			});
		}
		if (e.type === "math") {
			let n = Object.freeze({
				...t,
				path: Object.freeze([...t.path, r])
			}), i = e;
			return Object.freeze({
				type: "math",
				display: e.display,
				fontSize: e.fontSize,
				...e.jc === void 0 ? {} : { jc: e.jc },
				source: i.source ?? n,
				resourceKey: i.resourceKey ?? $e(n, e.display ? "display" : "inline"),
				fallbackText: G(e.nodes)
			});
		}
		if (e.type === "anchorHost") {
			let { __anchorOccurrenceId: n, ...r } = e;
			return Object.freeze({
				...r,
				...n === void 0 ? {} : { anchorOccurrenceId: it(t, n) }
			});
		}
		if (e.type === "shape" || e.type === "image" || e.type === "chart") {
			let i = NT(n), a = i === void 0 ? void 0 : B({
				...i,
				occurrenceId: it(t, i.occurrenceId)
			}, "DOCX scoped anchor acquisition input"), { __anchorAcquisition: o, ...s } = e;
			if (e.type !== "shape") {
				let n = e.type === "chart" ? (({ chart: e, ...n }) => ({
					...n,
					resourceKey: nt({
						...t,
						path: [...t.path, r]
					})
				}))(s) : s;
				return Object.freeze({
					...structuredClone(n),
					...a === void 0 ? {} : { anchorAcquisitionInput: a }
				});
			}
			let c = n, l = MT(c), u = Object.freeze({
				...t,
				path: Object.freeze([...t.path, r])
			}), d = FT(c, {
				story: "textbox",
				storyInstance: `${u.story}:${u.storyInstance}:${u.path.join(".")}`,
				path: []
			}), { textBoxContent: f, textBlocks: p, textPath: m, ...h } = s;
			return Object.freeze({
				type: "shape",
				...structuredClone(h),
				...l === void 0 ? {} : { vmlTextPathInput: l },
				...(d.kind === "complete" ? d.blockCount : d.paragraphs.length) === 0 ? {} : { textBoxInput: d },
				...a === void 0 ? {} : { anchorAcquisitionInput: a }
			});
		}
		if (e.type === "text" || e.type === "field") {
			let t = Mw(n), { __typographyAcquisition: r, __noBreakBefore: i, __noBreakAfter: a, __noBreakHyphenOffsets: o, ...s } = e, c = e.type === "text" ? o?.filter((t) => Number.isInteger(t) && t > 0 && t <= e.text.length).map((e) => Object.freeze({
				start: e - 1,
				end: e
			})) : void 0;
			return Object.freeze({
				...structuredClone(s),
				...i === !0 ? { noBreakBefore: !0 } : {},
				...a === !0 ? { noBreakAfter: !0 } : {},
				...c?.length ? { noBreakRanges: Object.freeze(c) } : {},
				...t === void 0 ? {} : { typographyInput: t }
			});
		}
		return Object.freeze(structuredClone(e));
	});
	return Nn({
		...h,
		runs: v,
		...f?.length ? { complexFieldBoundaries: f } : {},
		numberingMarkerShapeInput: e.numbering ? PT(e.numbering, n.runs.find((e) => e.type === "text" || e.type === "field")?.fontSize ?? e.defaultFontSize ?? 10) : void 0,
		paragraphMarkShapeInput: IT(e),
		...d === void 0 ? {} : { typographyInput: d }
	});
}
function RT(e) {
	return BT(e, !1);
}
function zT(e) {
	return BT(e, !0);
}
function BT(e, t) {
	let n = [], r = (e, a, o, s) => {
		if (e.type === "paragraph") {
			let i = e, c = i.__runRevisions ?? [], l = i.__runRevisions !== void 0, u = [], d = [], f = e.runs.some((e) => e.type === "unavailableDrawing");
			Ww(e).forEach((e, i) => {
				let p = c[i] ?? void 0, m = e.revision, h = p === void 0 || m !== void 0 ? e : {
					...e,
					revision: p
				};
				if (h !== e && (l = !0), h.type === "unavailableDrawing") {
					d.push(Object.freeze({
						publicRunIndex: u.length,
						run: B(h, "DOCX unavailable drawing parser sidecar")
					})), f && (l = !0);
					return;
				}
				if (h.type === "math") {
					l = !0;
					let e = Object.freeze({
						story: a,
						storyInstance: o,
						path: Object.freeze([...s, i])
					}), t = $e(e, h.display ? "display" : "inline");
					n.push(Object.freeze({
						nodes: h.nodes,
						display: h.display,
						source: e,
						resourceKey: t
					})), u.push(Object.freeze({
						...h,
						source: e,
						resourceKey: t
					}));
					return;
				}
				if (h.type !== "shape") {
					u.push(h);
					return;
				}
				let g = h, _ = g.textBoxContent;
				if (_ === void 0) {
					u.push(h);
					return;
				}
				let v = {
					story: a,
					storyInstance: o,
					path: [...s, i]
				}, y = `${v.story}:${v.storyInstance}:${v.path.join(".")}`, b = !1, x = t ? _ : Array(_.length);
				if (_.forEach((e, t) => {
					if (e.type === "unsupportedTextBoxBlock") {
						x[t] = e;
						return;
					}
					let n = r(e, "textbox", y, [t]);
					n !== e && (b = !0), x[t] = n;
				}), !b) {
					u.push(h);
					return;
				}
				l = !0, t ? (g.textBoxContent = x, u.push(h)) : u.push({
					...h,
					textBoxContent: x
				});
			});
			let p;
			if (t) l && Object.assign(e, { runs: u }), delete e.__runRevisions, p = e;
			else if (l) {
				let { __runRevisions: e, ...t } = i;
				p = {
					...t,
					runs: u
				};
			} else p = e;
			return d.length > 0 && Hw.set(p, Object.freeze(d)), p;
		}
		if (e.type === "table") {
			if (t) return e.rows.forEach((e, t) => e.cells.forEach((e, n) => {
				e.content = i(e.content, a, o, [
					...s,
					t,
					n
				]);
			})), e;
			let n = !1, r = e.rows.map((e, t) => {
				let r = !1, c = e.cells.map((e, n) => {
					let c = i(e.content, a, o, [
						...s,
						t,
						n
					]);
					return c === e.content ? e : (r = !0, {
						...e,
						content: c
					});
				});
				return r ? (n = !0, {
					...e,
					cells: c
				}) : e;
			});
			return n ? {
				...e,
				rows: r
			} : e;
		}
		if (e.type !== "sectionBreak") return e;
		let c = s.at(-1) ?? 0, l = !1, u = (e, t) => {
			if (!e) return e;
			let n = e;
			for (let r of [
				"default",
				"first",
				"even"
			]) {
				let a = e[r];
				if (!a) continue;
				let o = i(a.body, t, `section:${c}:${r}`);
				o !== a.body && (n === e && (n = { ...e }), n[r] = {
					...a,
					body: o
				}, l = !0);
			}
			return n;
		}, d = u(e.headers, "header"), f = u(e.footers, "footer");
		return l ? {
			...e,
			headers: d,
			footers: f
		} : e;
	}, i = (e, n, i, a = []) => {
		if (t) {
			for (let t = 0; t < e.length; t += 1) e[t] = r(e[t], n, i, [...a, t]);
			return e;
		}
		let o = !1, s = e.map((e, t) => {
			let s = r(e, n, i, [...a, t]);
			return s !== e && (o = !0), s;
		});
		return o ? s : e;
	}, a = (e, t) => {
		if (!e) return {
			default: null,
			first: null,
			even: null
		};
		let n = e;
		for (let r of [
			"default",
			"first",
			"even"
		]) {
			let a = e[r];
			if (!a) continue;
			let o = i(a.body, t, r);
			o !== a.body && (n === e && (n = { ...e }), n[r] = {
				...a,
				body: o
			});
		}
		return n;
	}, o = i(e.body, "body", "body"), s = a(e.headers, "header"), c = a(e.footers, "footer"), l = (e, n) => {
		if (!e) return e;
		if (t) {
			for (let t of e) t.content = i(t.content, n, t.id);
			return e;
		}
		let r = !1, a = e.map((e) => {
			let t = i(e.content, n, e.id);
			return t === e.content ? e : (r = !0, {
				...e,
				content: t
			});
		});
		return r ? a : e;
	}, u = l(e.footnotes, "footnote"), d = l(e.endnotes, "endnote"), f = o !== e.body || s !== e.headers || c !== e.footers || u !== e.footnotes || d !== e.endnotes ? {
		...e,
		body: o,
		headers: s,
		footers: c,
		footnotes: u,
		endnotes: d
	} : e, p = OT(f);
	Zw.set(f, p), DT(f.body, f.section, p);
	let m, h = () => m ??= jT(f), g = KT();
	return Object.freeze({
		document: f,
		mathOccurrences: Object.freeze(n),
		fontFamilyCharsets: Object.freeze({ ...WT(f).fontFamilyCharsets ?? {} }),
		get bodyLayoutInput() {
			return Bw(h());
		},
		bodyModelGateway: Object.freeze({
			acquisitionInputs: g,
			get bodySectionIndex() {
				return h().sectionIndex;
			},
			effectiveTablePositioning: sT,
			publicAnchorBridge: ST
		})
	});
}
function VT(e) {
	return RT(e).document;
}
function HT(e) {
	return e;
}
function UT(e) {
	return e;
}
function WT(e) {
	return e;
}
var GT = Object.freeze({
	numberingMarkerShapeInput: PT,
	paragraphMarkShapeInput: IT,
	tableFormatInput: vT,
	tableColumnLayoutInput: ET,
	tableParticipatesInOrdinaryFlow: oT,
	paragraphAcquisitionInput: LT
});
function KT() {
	let e = /* @__PURE__ */ new WeakMap(), t = (t, n) => {
		let r = e.get(t);
		r || (r = /* @__PURE__ */ new Map(), e.set(t, r));
		let i = z(n), a = r.get(i);
		if (a) return a;
		let o = LT(t, n);
		return r.set(i, o), o;
	};
	return Object.freeze({
		...GT,
		paragraphAcquisitionInput: t
	});
}
//#endregion
//#region packages/docx/src/vertical-render-capability.ts
var qT = new Set([
	"tbRl",
	"tbRlV",
	"tbLrV"
]);
function JT(e) {
	let t = [e], n = /* @__PURE__ */ new Set();
	for (; t.length > 0;) {
		let e = t.pop();
		if (!(typeof e != "object" || !e || n.has(e))) {
			if (n.add(e), !Array.isArray(e)) {
				let t = e;
				if (typeof t.textDirection == "string" && qT.has(t.textDirection)) return !0;
			}
			t.push(...Object.values(e));
		}
	}
	return !1;
}
//#endregion
//#region packages/docx/src/layout-source-model-adapter.ts
var YT = /* @__PURE__ */ new WeakMap();
function XT(e) {
	let t = Eu(), n = e.section ?? {}, r = (e, t) => Number.isFinite(e) ? e : t, i = (e) => ({
		default: e?.default ?? null,
		first: e?.first ?? null,
		even: e?.even ?? null
	});
	return {
		...e,
		body: e.body ?? [],
		section: {
			...t,
			...n,
			pageWidth: r(n.pageWidth, t.pageWidth),
			pageHeight: r(n.pageHeight, t.pageHeight),
			marginTop: r(n.marginTop, t.marginTop),
			marginRight: r(n.marginRight, t.marginRight),
			marginBottom: r(n.marginBottom, t.marginBottom),
			marginLeft: r(n.marginLeft, t.marginLeft),
			headerDistance: r(n.headerDistance, t.headerDistance),
			footerDistance: r(n.footerDistance, t.footerDistance)
		},
		headers: i(e.headers),
		footers: i(e.footers)
	};
}
function ZT(e, t, n, r) {
	if (e) for (let i of [
		"default",
		"first",
		"even"
	]) {
		let a = e[i];
		a && r(a.body, {
			story: t,
			storyInstance: n === null ? i : `${n}:${i}`,
			path: []
		});
	}
}
function QT(e, t, n, r = () => {}, i = () => {}) {
	let a = (e, o, s = []) => {
		e.forEach((c, l) => {
			let u = [...s, l];
			if (c.type === "paragraph") {
				let r = {
					...o,
					path: u
				}, s = t.paragraphAcquisitionInput(c, r), d = n(c, r, s);
				d && (e[l] = d);
				let f = 0;
				s.runs.forEach((e, t) => {
					if (e.type === "unavailableDrawing") return;
					let n = c.runs[f++];
					if (e.type !== "shape" || n?.type !== "shape") return;
					let r = n.textBoxContent;
					if (!r) return;
					let s = {
						story: "textbox",
						storyInstance: `${o.story}:${o.storyInstance}:${u.join(".")}.${t}`,
						path: []
					};
					i(r, s), a(r, s);
				});
			} else c.type === "table" ? (r(c, {
				...o,
				path: u
			}), c.rows.forEach((e, t) => e.cells.forEach((e, n) => {
				a(e.content, o, [
					...u,
					t,
					n
				]);
			}))) : c.type === "sectionBreak" && (ZT(c.headers, "header", `section:${l}`, a), ZT(c.footers, "footer", `section:${l}`, a));
		});
	};
	a(e.body, {
		story: "body",
		storyInstance: "body",
		path: []
	}), ZT(e.headers, "header", null, a), ZT(e.footers, "footer", null, a);
	for (let t of e.footnotes ?? []) a(t.content, {
		story: "footnote",
		storyInstance: t.id,
		path: []
	});
	for (let t of e.endnotes ?? []) a(t.content, {
		story: "endnote",
		storyInstance: t.id,
		path: []
	});
}
function $T(e) {
	let t = [], n = (e, n) => {
		t.push({
			source: n,
			body: e
		});
	};
	return ZT(e.headers, "header", null, n), ZT(e.footers, "footer", null, n), e.body.forEach((e, t) => {
		e.type === "sectionBreak" && (ZT(e.headers, "header", `section:${t}`, n), ZT(e.footers, "footer", `section:${t}`, n));
	}), t;
}
function eE(e) {
	return $T(e).map(({ body: e }) => e);
}
function tE(e) {
	return e ?? Object.freeze([]);
}
function nE(e, t, n, r = []) {
	let i = (e, t, r) => e && Object.fromEntries([
		"default",
		"first",
		"even"
	].map((i) => {
		let a = e[i];
		return [i, a ? {
			...structuredClone(Object.fromEntries(Object.entries(a).filter(([e]) => e !== "body"))),
			body: nE(a.body, {
				story: t,
				storyInstance: `${r}:${i}`,
				path: []
			}, n)
		} : null];
	}));
	return e.map((e, a) => {
		let o = [...r, a];
		if (e.type === "paragraph") {
			let e = n.get(z({
				...t,
				path: o
			}));
			if (!e) throw Error(`Missing canonical paragraph source: ${z({
				...t,
				path: o
			})}`);
			return e;
		}
		if (e.type === "table") {
			let r = structuredClone(e), { __tableLayout: i, ...a } = r;
			return {
				...a,
				rows: r.rows.map((e, r) => {
					let { __tableRowLayout: i, ...a } = e;
					return {
						...a,
						cells: e.cells.map((e, i) => {
							let { __tableCellLayout: a, ...s } = e;
							return {
								...s,
								content: nE(e.content, t, n, [
									...o,
									r,
									i
								])
							};
						})
					};
				})
			};
		}
		if (e.type !== "sectionBreak") return structuredClone(e);
		let { __sectionPlacement: s, headers: c, footers: l, ...u } = e;
		return {
			...structuredClone(u),
			headers: i(e.headers, "header", `section:${a}`),
			footers: i(e.footers, "footer", `section:${a}`)
		};
	});
}
function rE(e) {
	let { __sectionPlacement: t, ...n } = e;
	return structuredClone(n);
}
function iE(e) {
	let t = e;
	return delete t.__sectionPlacement, t;
}
function aE(e, t, n) {
	return Object.fromEntries([
		"default",
		"first",
		"even"
	].map((r) => {
		let i = e[r];
		return [r, i ? {
			...structuredClone(Object.fromEntries(Object.entries(i).filter(([e]) => e !== "body"))),
			body: nE(i.body, {
				story: t,
				storyInstance: r,
				path: []
			}, n)
		} : null];
	}));
}
function oE(e, t, n, r = []) {
	let i = (e, t, r) => {
		if (!e) return e;
		for (let i of [
			"default",
			"first",
			"even"
		]) {
			let a = e[i];
			a && (a.body = oE(a.body, {
				story: t,
				storyInstance: `${r}:${i}`,
				path: []
			}, n));
		}
		return e;
	}, a = e;
	for (let e = 0; e < a.length; e += 1) {
		let o = a[e], s = [...r, e];
		if (o.type === "paragraph") {
			let r = n.get(z({
				...t,
				path: s
			}));
			if (!r) throw Error(`Missing canonical paragraph source: ${z({
				...t,
				path: s
			})}`);
			a[e] = r;
			continue;
		}
		if (o.type === "table") {
			let r = o;
			delete r.__tableLayout, r.rows.forEach((e, r) => {
				let i = e;
				delete i.__tableRowLayout, i.cells.forEach((e, i) => {
					let a = e;
					delete a.__tableCellLayout, a.content = oE(a.content, t, n, [
						...s,
						r,
						i
					]);
				});
			}), a[e] = r;
			continue;
		}
		if (o.type !== "sectionBreak") continue;
		let c = o;
		delete c.__sectionPlacement, c.headers = i(c.headers, "header", `section:${e}`), c.footers = i(c.footers, "footer", `section:${e}`);
	}
	return a;
}
function sE(e, t, n) {
	for (let r of [
		"default",
		"first",
		"even"
	]) {
		let i = e[r];
		i && (i.body = oE(i.body, {
			story: t,
			storyInstance: r,
			path: []
		}, n));
	}
	return e;
}
function cE(e) {
	let t = YT.get(e);
	if (t) return t;
	let n = RT(XT(e));
	return dE(n, n, !1, e);
}
function lE(e, t) {
	return YT.get(e) || dE(zT(XT(e)), zT(XT(t)), !0, e);
}
function uE(e) {
	let t = zT(XT(e));
	return dE(t, t, !0, e).source;
}
function dE(e, t, n, r) {
	let i = t.document, a = t.bodyModelGateway.acquisitionInputs, o = t.bodyLayoutInput, s = nu(i, Kw(i)), c = Zn(i, a, t.mathOccurrences, (e) => {
		let t = e.numbering;
		if (!t) throw Error("Picture-bullet metadata requires numbering");
		let n = a.numberingMarkerShapeInput(t, Ws(e));
		return {
			widthPt: t.picBulletWidthPt ?? n.fontSizePt,
			heightPt: t.picBulletHeightPt ?? n.fontSizePt
		};
	}), l = tE(i.footnotes), u = tE(i.endnotes), d = Tg(i.body, l, [...eE(i), ...u.map((e) => e.content)]), f = JT(i), p = i.parseError === void 0 ? null : {
		message: i.parseError,
		pageSize: {
			widthPt: i.section.pageWidth,
			heightPt: i.section.pageHeight
		}
	}, m = {
		familyClasses: { ...i.fontFamilyClasses ?? {} },
		familyPitches: { ...i.fontFamilyPitches ?? {} },
		majorFamily: i.majorFont ?? null,
		minorFamily: i.minorFont ?? null,
		embeddedFonts: [...i.embeddedFonts ?? []],
		renderedFamilies: HC(i),
		preloadNames: XC(i),
		scriptCjkLanguage: ZC(i),
		defaultBodyFontSizePt: Lb(i)
	}, h = /* @__PURE__ */ new Map(), g = [], _ = [], v = [];
	QT(i, a, (e, r, i) => {
		let a = z(r);
		if (h.has(a)) throw Error(`Duplicate paragraph source: ${a}`);
		h.set(a, i);
		let o = 0, s = i.runs.map((n, i) => {
			if (n.type === "unavailableDrawing") return null;
			let a = e.runs[o++];
			return a ? t.bodyModelGateway.publicAnchorBridge(a, r, i) : null;
		});
		return g.push(Object.freeze({
			source: Nn({
				...r,
				path: [...r.path]
			}),
			publicAnchorBridges: Object.freeze(s),
			numberingMarkerFallbackFontSizePt: e.numbering ? Ws(e) : null
		})), n ? i : void 0;
	}, (e, t) => {
		_.push(Object.freeze({
			source: Nn({
				...t,
				path: [...t.path]
			}),
			input: aT(e)
		}));
	}, (e, t) => {
		v.push({
			body: e,
			source: t
		});
	}), Object.freeze({
		...a,
		paragraphAcquisitionInput(e, t) {
			let n = h.get(z(t));
			if (!n) throw Error(`Unknown paragraph acquisition source: ${z(t)}`);
			return n;
		}
	});
	let y = n ? oE : nE, b = n ? sE : aE, x = {
		...i,
		body: y(i.body, {
			story: "body",
			storyInstance: "body",
			path: []
		}, h),
		headers: b(i.headers, "header", h),
		footers: b(i.footers, "footer", h),
		footnotes: l.map(({ content: e, ...t }) => ({
			...structuredClone(t),
			content: y(e, {
				story: "footnote",
				storyInstance: t.id,
				path: []
			}, h)
		})),
		endnotes: u.map(({ content: e, ...t }) => ({
			...structuredClone(t),
			content: y(e, {
				story: "endnote",
				storyInstance: t.id,
				path: []
			}, h)
		}))
	}, S = v.map(({ source: e, body: t }) => ({
		source: e,
		body: y(t, e, h)
	}));
	Nn(h);
	let C = kw({
		bodyLayoutInput: o,
		blockRepository: {
			body: x.body,
			stories: [...$T(x).map(({ source: e, body: t }) => ({
				source: e,
				body: t
			})), ...S],
			footnotes: x.footnotes ?? [],
			endnotes: x.endnotes ?? []
		},
		section: n ? iE(i.section) : rE(i.section),
		documentLayoutFacts: Nn({
			...s,
			kinsoku: {
				enabled: s.kinsoku.enabled,
				lineStartForbidden: [...s.kinsoku.lineStartForbidden].sort((e, t) => e - t),
				lineEndForbidden: [...s.kinsoku.lineEndForbidden].sort((e, t) => e - t)
			}
		}),
		fonts: Nn(m),
		fontFamilyCharsets: t.fontFamilyCharsets,
		acquisitionFacts: Object.freeze({
			paragraphs: Object.freeze(g),
			tables: Object.freeze(_)
		}),
		mathOccurrences: t.mathOccurrences,
		imageMetadata: c.imageMetadata,
		paintDescriptors: c.paintResources.descriptors,
		hasPaginationFields: d,
		requiresDomVerticalGlyphLayout: f,
		fatalParse: p === null ? null : Nn(p)
	}), w = Object.freeze({
		document: e.document,
		source: C
	});
	return YT.set(r, w), YT.set(e.document, w), w;
}
function fE(e) {
	return cE(e).source;
}
//#endregion
//#region packages/docx/src/layout-runtime.ts
function pE(e, t, n, r) {
	return NC(e, t, n, r).kernel;
}
function mE(e, t = {}) {
	let n = Cw(e) ? e : fE(e), r = t.resolvedFontMetricCandidates ?? (Cw(e) ? [] : qC(e, n.fontFamilyCharsets)), i = t.measureContext ?? (() => {
		if (typeof document < "u") {
			let e = document.createElement("canvas").getContext("2d");
			if (e !== null) return e;
		}
		return typeof OffscreenCanvas < "u" ? new OffscreenCanvas(1, 1).getContext("2d") : null;
	})(), a = i === null ? null : Object.freeze({
		get font() {
			return i.font;
		},
		set font(e) {
			i.font = e;
		},
		get letterSpacing() {
			return i.letterSpacing;
		},
		set letterSpacing(e) {
			i.letterSpacing = e;
		},
		get fontKerning() {
			return i.fontKerning;
		},
		set fontKerning(e) {
			i.fontKerning = e;
		},
		measureText(e) {
			return i.measureText(e);
		}
	}), o = i?.canvas, s = o?.ownerDocument?.defaultView?.HTMLCanvasElement, c = i !== null && (typeof s == "function" && o instanceof s || typeof HTMLCanvasElement < "u" && o instanceof HTMLCanvasElement), l = Object.freeze({
		fingerprint: i === null ? "vertical-glyph-measurement:deterministic-v1" : c ? "vertical-glyph-measurement:dom-vert-probe-v2" : "vertical-glyph-measurement:no-dom-vert-probe-v1",
		measureRunInkExtra(e) {
			if (i === null) throw Error("Vertical glyph measurement requires a concrete text context");
			return me(i, () => jC(i, e));
		},
		planRun(e) {
			if (i === null) throw Error("Vertical glyph planning requires a concrete text context");
			return me(i, () => {
				let t = i.font, n = i.fontKerning;
				i.font = e.font, i.fontKerning = e.fontKerning;
				try {
					return kC(i, e.text, e.fontSizePt, e.letterSpacingPt, e.charScale, e.growTrRotateInk, (e) => T(i, e), e.writingMode);
				} finally {
					i.font = t, i.fontKerning = n;
				}
			});
		}
	}), u = Ri(t.localMetrics), d = Ri({
		...u,
		...t.fontMetrics
	}), f = n.fonts.scriptCjkLanguage ?? C(n.fonts.majorFamily) ?? C(n.fonts.minorFamily) ?? t.cjkFallback, p = aw(n, {
		...t,
		cjkFallback: f,
		resolvedFontMetricCandidates: r,
		localMetrics: u,
		fontMetrics: d,
		measureContext: a,
		verticalGlyphMeasurement: l
	}), m = p.text.fontMetrics ?? d;
	return wr(p, n), Sr(p, pE(n, a, m, f)), p;
}
//#endregion
//#region packages/docx/src/renderer.ts
function hE(e) {
	return (Array.isArray(e) ? Qn(e) : fE(e).mathOccurrences).length > 0;
}
async function gE(e, t) {
	if (Array.isArray(e)) throw TypeError("prepareMathRuns requires a document model so every story has an explicit structural source");
	return cb(fE(e).mathOccurrences, t);
}
function _E(e, t, n, r) {
	let i = r.layoutServices ?? mE(e, e.fatalParse === null ? { measureContext: t.getContext("2d") } : {}), a = Tr(i);
	if (a && a !== e) throw Error("Layout services belong to a different document source");
	let o = r.defaultCurrentDateMs ?? Date.now();
	sb(i, o, () => e);
	let s = Vd(i, {
		currentDate: r.currentDate,
		defaultCurrentDateMs: o,
		showTrackedChanges: r.showTrackedChanges
	}, n), c = jp(s.page, r.width);
	return {
		selection: s,
		paintOptions: {
			width: r.width,
			dpr: r.dpr,
			defaultTextColor: r.defaultTextColor,
			fetchImage: r.fetchImage,
			svgDecoder: r.svgDecoder,
			parseError: e.fatalParse !== null,
			registry: Br(i),
			rasterPaintOccurrences: vf(s.layout, n),
			privateResources: jr(i),
			textRuns: r.onTextRun ? xf(s.layout, n, { scale: c }) : [],
			onTextRun: r.onTextRun,
			threeD: r.threeD,
			regionMap: r.regionMap,
			chartEx: r.chartEx,
			tiff: r.tiff,
			imageResources: r.imageResources
		}
	};
}
async function vE(e, t, n, r = {}) {
	let i = _E(e, t, n, r);
	return Fp(i.selection.layout, i.selection.page, t, i.paintOptions);
}
//#endregion
//#region packages/docx/src/document-layout.ts
function yE(e, t = mE(e), n) {
	let r = Cw(e) ? e : fE(e), i = Tr(t);
	if (i && i !== r) throw Error("Layout services belong to a different document source");
	return ab(r.bodyLayoutInput, t, n);
}
//#endregion
//#region packages/docx/src/render-worker-layout.ts
function bE(e, t, n) {
	let r = Tr(t);
	if (r && r !== e) throw Error("Layout services belong to a different document source");
	let i = Bd({
		source: e,
		services: t,
		defaultCurrentDateMs: n,
		buildLayout: (n) => yE(e, t, n)
	});
	return Object.freeze({
		layoutServices: t,
		layoutVariants: i.store,
		defaultCurrentDateMs: n
	});
}
//#endregion
//#region packages/docx/src/document-pull-client.ts
var xE = 1024 * 1024, SE = Math.max(fe, d);
async function CE(e, t, n = {}) {
	let r = [];
	return DE(e, t, n, {
		acceptBody: (e) => {
			r.push(...e);
		},
		complete: (e) => (e.body = r, e)
	});
}
async function wE(e, t, n = {}) {
	let r = [];
	return DE(e, t, n, {
		acceptBody: (e) => {
			r.push(...e);
		},
		complete: (e) => (e.body = r, uE(e))
	});
}
async function TE(e, t, n = {}) {
	let r = await EE(e, t, n);
	return lE(r.document, r.ownedLayoutDocument);
}
async function EE(e, t, n = {}) {
	let r = [], i = [];
	return DE(e, t, n, {
		acceptBody: (e) => {
			let t = structuredClone(e);
			for (let t of e) r.push(t);
			for (let e of t) i.push(e);
		},
		complete: (e) => {
			let t = structuredClone(e);
			return e.body = r, t.body = i, Object.freeze({
				document: e,
				ownedLayoutDocument: t
			});
		}
	});
}
async function DE(e, t, n, r) {
	let i = new m(e, {
		...t,
		maxByteCredit: SE,
		timeoutMs: n.timeoutMs
	});
	try {
		for (;;) {
			let e = await AE(i, n.signal);
			try {
				let t = e.usage ?? i.usageCheckpoint;
				t && n.onUsage?.(t);
				let a = kE(e.payload);
				if (e.done !== (a.kind === "complete")) throw TypeError("DOCX document unit terminal flag does not match its payload");
				if (a.kind === "body") {
					r.acceptBody(a.body), await e.ack({ signal: n.signal });
					continue;
				}
				if (!Array.isArray(a.document.body) || a.document.body.length !== 0) throw TypeError("DOCX terminal document must not duplicate streamed body blocks");
				let o = r.complete(a.document);
				return await e.ack({ signal: n.signal }), o;
			} finally {
				e.disposeTransferred();
			}
		}
	} catch (e) {
		throw await i.cancel("request-error").catch(() => void 0), e;
	}
}
function OE(e) {
	return !!e && typeof e == "object" && e.protocol === "ooxml-pull-v1";
}
function kE(e) {
	let t = JSON.parse(new TextDecoder().decode(new Uint8Array(e)));
	if (!t || typeof t != "object") throw TypeError("DOCX document unit must be an object");
	let n = t;
	if (n.kind === "body" && Array.isArray(n.body) || n.kind === "complete" && n.document && typeof n.document == "object") return n;
	throw TypeError("DOCX document unit has an unknown shape");
}
async function AE(e, t) {
	try {
		return await e.pull(xE, { signal: t });
	} catch (n) {
		let r = jE(n);
		if (r === void 0) throw n;
		return e.pull(r, { signal: t });
	}
}
function jE(e) {
	return de(e, xE, SE);
}
//#endregion
export { Br as A, Kd as C, lr as D, di as E, Sn as M, ur as O, qd as S, gs as T, Qy as _, bE as a, _f as b, vE as c, JC as d, XC as f, ib as g, rb as h, CE as i, B as j, kr as k, mE as l, ob as m, TE as n, hE as o, qC as p, wE as r, gE as s, OE as t, VT as u, Ap as v, Vd as w, gf as x, Sf as y };
