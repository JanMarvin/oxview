import { C as e, S as t, _ as n, b as r, c as i, d as a, f as o, g as s, h as c, l, m as u, n as d, p as f, r as p, s as m, t as h, u as g, v as _, x as v } from "./chart-number-format-tjYUR9eS.js";
import { C as y, S as b, T as x, _ as S, b as C, c as w, d as T, f as E, h as D, i as O, l as k, o as A, s as j, u as M, v as N, w as P, x as F, y as I } from "./dash-Cyc-sevN.js";
//#region packages/core/src/errors/ooxml-error.ts
var L = class e extends Error {
	code;
	constructor(t, n) {
		super(n), this.name = "OoxmlError", this.code = t, Object.setPrototypeOf(this, e.prototype);
	}
}, ee = class e extends Error {
	code = "ooxml-resource-limit";
	details;
	constructor(t, n) {
		super(t), this.name = "OoxmlResourceLimitError";
		let r = n.violation, i = Object.freeze({
			format: r.format,
			operation: r.operation,
			resource: r.resource,
			metric: r.metric,
			...r.part === void 0 ? {} : { part: r.part },
			limit: r.limit,
			observed: r.observed,
			configurable: r.configurable,
			usage: Object.freeze({
				archiveEntryCount: r.usage.archiveEntryCount,
				declaredInflatedBytes: r.usage.declaredInflatedBytes,
				...r.usage.largestInflatedEntryBytes === void 0 ? {} : { largestInflatedEntryBytes: r.usage.largestInflatedEntryBytes },
				distinctInflatedBytes: r.usage.distinctInflatedBytes,
				operationInflatedBytes: r.usage.operationInflatedBytes
			})
		});
		this.details = Object.freeze({
			stage: n.stage,
			violation: i
		}), Object.setPrototypeOf(this, e.prototype);
	}
}, R = "https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;700&display=swap", te = "https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;700&display=swap", ne = "https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap", re = {
	calibri: {
		url: "https://fonts.googleapis.com/css2?family=Carlito:ital,wght@0,400;0,700;1,400;1,700&display=swap",
		loadFamily: "Carlito"
	},
	"calibri light": {
		url: "https://fonts.googleapis.com/css2?family=Carlito:ital,wght@0,400;0,700;1,400;1,700&display=swap",
		loadFamily: "Carlito"
	},
	cambria: {
		url: "https://fonts.googleapis.com/css2?family=Caladea:ital,wght@0,400;0,700;1,400;1,700&display=swap",
		loadFamily: "Caladea"
	},
	"cambria math": {
		url: "https://fonts.googleapis.com/css2?family=Caladea:ital,wght@0,400;0,700;1,400;1,700&display=swap",
		loadFamily: "Caladea"
	},
	"franklin gothic book": {
		url: ne,
		loadFamily: "Libre Franklin"
	},
	"franklin gothic medium": {
		url: ne,
		loadFamily: "Libre Franklin"
	},
	"nunito sans": { url: "https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" },
	nunito: { url: "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400;1,700&display=swap" },
	"open sans": { url: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" },
	roboto: { url: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap" },
	lato: { url: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap" },
	montserrat: { url: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap" },
	poppins: { url: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap" },
	raleway: { url: "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,700;1,400;1,700&display=swap" },
	"playfair display": { url: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap" },
	ubuntu: { url: "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,700;1,400;1,700&display=swap" },
	"sakkal majalla": {
		url: R,
		loadFamily: "Noto Naskh Arabic"
	},
	"traditional arabic": {
		url: R,
		loadFamily: "Noto Naskh Arabic"
	},
	"simplified arabic": {
		url: R,
		loadFamily: "Noto Naskh Arabic"
	},
	"arabic typesetting": {
		url: R,
		loadFamily: "Noto Naskh Arabic"
	},
	"univers next arabic": {
		url: te,
		loadFamily: "Noto Sans Arabic"
	},
	"noto naskh arabic": {
		url: R,
		loadFamily: "Noto Naskh Arabic"
	},
	"noto sans arabic": {
		url: te,
		loadFamily: "Noto Sans Arabic"
	}
};
//#endregion
//#region packages/core/src/fonts/scripts.ts
function ie(e) {
	if (!e) return null;
	let t = e.toLowerCase();
	return /[ᄀ-ᇿ㄰-㆏가-힯]/.test(e) ? "kr" : /[぀-ヿ]/.test(e) ? "jp" : /jhenghei|微軟正黑|新細明|細明|pmingliu|mingliu|dfkai|標楷|華康|cns11643|kaiti tc|ming\s*liu/.test(t) || /新細明體|細明體|標楷體|微軟正黑體|華康/.test(e) ? "tc" : /simsun|nsimsun|simhei|simkai|simfang|yahei|dengxian|fangsong|kaiti|youyuan|lisu|stsong|stkaiti|stfangsong|stheiti|stxihei|stzhongsong|songti sc|heiti sc|微软雅黑/.test(t) || /宋体|黑体|楷体|仿宋|等线|微软雅黑|隶书|幼圆/.test(e) ? "sc" : /malgun|batang|gulim|dotum|gungsuh|nanum|new gulim|hancom|hy(gothic|graphic|namu)?/.test(t) ? "kr" : /\bmeiryo\b|\byu\s*(gothic|mincho)\b|yugothic|yumincho|hiragino|\bms\s*(gothic|mincho|pgothic|pmincho|ui\s*gothic)\b|\bms[pg]?(gothic|mincho)\b|ipa(ex)?(gothic|mincho)|noto\s+(sans|serif)\s+jp|游ゴシック|游明朝|ＭＳ|メイリオ|ヒラギノ/.test(t) || /游ゴシック|游明朝|ＭＳ ゴシック|ＭＳ 明朝|ＭＳ Ｐゴシック|メイリオ|ヒラギノ/.test(e) ? "jp" : null;
}
function ae(e) {
	if (!e) return "sans";
	let t = e.toLowerCase();
	return /mono|courier|consolas|等幅|gothic_m/.test(t) ? "mono" : /roman|times|cambria|caladea|georgia|garamond|century(?!\s*gothic)|palatino|antiqua|didot|bodoni|playfair|source serif|noto serif|min\s*cho|明朝体|明朝|song|sung|simsun|nsimsun|batang|gungsuh|ming\s*liu|mingliu|pmingliu|fang\s*song|fangsong|kai\s*ti|kaiti|simkai|simfang|stsong|stkaiti|stfangsong|stzhongsong|新細明|細明|宋体|楷体|楷體|仿宋|標楷|游明朝|ＭＳ 明朝|ms mincho|yu mincho|hiragino mincho|ヒラギノ明朝/.test(t) || /新細明體|細明體|宋体|明朝|楷体|楷體|仿宋|標楷體|游明朝|ＭＳ 明朝/.test(e) ? "serif" : "sans";
}
function oe(e, t) {
	let n = t === "serif" ? "Noto Serif" : "Noto Sans", r = {
		jp: [
			"jp",
			"sc",
			"tc",
			"kr"
		],
		sc: [
			"sc",
			"tc",
			"jp",
			"kr"
		],
		tc: [
			"tc",
			"sc",
			"jp",
			"kr"
		],
		kr: [
			"kr",
			"jp",
			"sc",
			"tc"
		]
	}, i = {
		kr: "KR",
		sc: "SC",
		tc: "TC",
		jp: "JP"
	};
	return r[e].map((e) => `${n} ${i[e]}`);
}
var se = [
	"Noto Sans",
	"Noto Sans Hebrew",
	"Noto Sans Thai",
	"Noto Sans Devanagari"
], z = ["Noto Serif", "Noto Serif Hebrew"], B = (e) => `https://fonts.googleapis.com/css2?family=${e}:wght@400;700&display=swap`, V = {
	"noto sans kr": { url: B("Noto+Sans+KR") },
	"noto sans sc": { url: B("Noto+Sans+SC") },
	"noto sans tc": { url: B("Noto+Sans+TC") },
	"noto sans jp": { url: B("Noto+Sans+JP") },
	"noto serif kr": { url: B("Noto+Serif+KR") },
	"noto serif sc": { url: B("Noto+Serif+SC") },
	"noto serif tc": { url: B("Noto+Serif+TC") },
	"noto serif jp": { url: B("Noto+Serif+JP") },
	"noto sans": { url: B("Noto+Sans") },
	"noto serif": { url: B("Noto+Serif") },
	"noto sans devanagari": { url: B("Noto+Sans+Devanagari") },
	"noto sans thai": { url: B("Noto+Sans+Thai") },
	"noto sans hebrew": { url: B("Noto+Sans+Hebrew") },
	"noto serif hebrew": { url: B("Noto+Serif+Hebrew") }
}, H = class e {
	hasHan = !1;
	hasHangul = !1;
	hasKana = !1;
	hasArabic = !1;
	hasThai = !1;
	hasHebrew = !1;
	hasDevanagari = !1;
	hasCyrGreek = !1;
	constructor(e) {
		this.cjkLang = e;
	}
	clone() {
		let t = new e(this.cjkLang);
		return t.hasHan = this.hasHan, t.hasHangul = this.hasHangul, t.hasKana = this.hasKana, t.hasArabic = this.hasArabic, t.hasThai = this.hasThai, t.hasHebrew = this.hasHebrew, t.hasDevanagari = this.hasDevanagari, t.hasCyrGreek = this.hasCyrGreek, t;
	}
	addText(e) {
		let t = () => this.hasHan && this.hasHangul && this.hasKana && this.hasArabic && this.hasThai && this.hasHebrew && this.hasDevanagari && this.hasCyrGreek;
		outer: for (let n of e) if (n) for (let e of n) {
			let n = e.codePointAt(0);
			if (n !== void 0 && !(n <= 591) && (n >= 4352 && n <= 4607 || n >= 12592 && n <= 12687 || n >= 44032 && n <= 55215 ? this.hasHangul = !0 : n >= 12352 && n <= 12543 ? this.hasKana = !0 : n >= 13312 && n <= 19903 || n >= 19968 && n <= 40959 || n >= 63744 && n <= 64255 || n >= 131072 && n <= 195103 ? this.hasHan = !0 : n >= 1536 && n <= 1791 || n >= 1872 && n <= 1919 || n >= 2208 && n <= 2303 || n >= 64336 && n <= 65023 || n >= 65136 && n <= 65279 ? this.hasArabic = !0 : n >= 3584 && n <= 3711 ? this.hasThai = !0 : n >= 1424 && n <= 1535 || n >= 64285 && n <= 64335 ? this.hasHebrew = !0 : n >= 2304 && n <= 2431 ? this.hasDevanagari = !0 : (n >= 1024 && n <= 1279 || n >= 880 && n <= 1023) && (this.hasCyrGreek = !0), t())) break outer;
		}
	}
	names() {
		let e = [], t = /* @__PURE__ */ new Set();
		this.hasHangul && t.add("kr"), this.hasKana && t.add("jp"), this.hasHan && t.size === 0 && t.add(this.cjkLang ?? "jp");
		for (let n of [
			"kr",
			"sc",
			"tc",
			"jp"
		]) if (t.has(n)) {
			let t = {
				kr: "KR",
				sc: "SC",
				tc: "TC",
				jp: "JP"
			}[n];
			e.push(`Noto Sans ${t}`, `Noto Serif ${t}`);
		}
		return this.hasCyrGreek && e.push("Noto Sans", "Noto Serif"), this.hasArabic && e.push("Noto Naskh Arabic", "Noto Sans Arabic"), this.hasThai && e.push("Noto Sans Thai"), this.hasHebrew && e.push("Noto Sans Hebrew", "Noto Serif Hebrew"), this.hasDevanagari && e.push("Noto Sans Devanagari"), e;
	}
};
function ce(e, t) {
	let n = new H(t);
	return n.addText(e), n.names();
}
//#endregion
//#region packages/core/src/chart/axis-style.ts
function le(e, t) {
	return e ? Math.max(.5, e / D) * t : 1;
}
function ue(e, t, n) {
	return {
		color: e ? `#${e}` : "#aaa",
		width: le(t, n)
	};
}
function de(e, t, n) {
	return {
		color: e ? `#${e}` : "#e0e0e0",
		width: t ? le(t, n) : .5
	};
}
function fe(e) {
	return e.catAxisCrossBetween !== "midCat";
}
//#endregion
//#region packages/core/src/chart/category-spacing.ts
function U(e, t) {
	return e ?? (t === "legacy" ? 150 : 33);
}
function pe(e) {
	return e != null && Number.isFinite(e) ? e : null;
}
function W(e) {
	return Object.is(e, -0) ? "0" : String(Number.isInteger(e) ? e : Number(e.toPrecision(6)));
}
function me(e, t) {
	if (e.length > 1048576) return { kind: "tooManyInputPoints" };
	let n = t.intervalClosed === "r" ? "r" : "l", r = pe(t.underflow), i = pe(t.overflow);
	r != null && i != null && r >= i && (r = null, i = null);
	let a = (e) => r != null && (n === "r" ? e <= r : e < r), o = (e) => i != null && (n === "r" ? e > i : e >= i), s = Infinity, c = -Infinity, l = 0, u = 0, d = 0;
	for (let t of e) {
		let e = pe(t);
		e != null && (a(e) ? u++ : o(e) ? d++ : (l++, s = Math.min(s, e), c = Math.max(c, e)));
	}
	if (l + u + d === 0) return {
		kind: "bins",
		categories: [],
		counts: []
	};
	let f = [], p = [];
	if (r != null && (f.push(`${n === "r" ? "≤" : "<"} ${W(r)}`), p.push(u)), l > 0) {
		let u = r ?? s, d = i ?? c, m = d - u;
		if (!Number.isFinite(m)) f.push(`${W(u)} – ${W(d)}`), p.push(l);
		else {
			let s = pe(t.binSize), c;
			c = s != null && s > 0 && m > 0 ? Math.max(1, Math.ceil(m / s)) : t.binCount != null && Number.isFinite(t.binCount) && t.binCount > 0 ? Math.max(1, Math.floor(t.binCount)) : Math.max(1, Math.ceil(Math.sqrt(l)));
			let d = m <= 0 ? 1 : Math.min(512, c), h = m > 0 && s != null && s > 0 && c <= 512, g = m === 0 ? 1 : h ? s : m / d, _ = Array(d).fill(0);
			for (let t of e) {
				let e = pe(t);
				if (e == null || a(e) || o(e)) continue;
				let r = h ? (e - u) / g : m === 0 ? 0 : (e - u) / m * d, i = n === "r" ? Math.ceil(r) - 1 : Math.floor(r), s = Math.max(0, Math.min(d - 1, i));
				_[s]++;
			}
			for (let e = 0; e < d; e++) {
				let t = h ? u + g * e : u + e / d * m, a = h ? t + g : u + m * ((e + 1) / d), o = i == null ? a : Math.min(a, i), s = n === "r" && (r != null || e > 0) ? ">" : "≥", c = n === "l" && (i != null || e < d - 1) ? "<" : "≤";
				f.push(`${s} ${W(t)} – ${c} ${W(o)}`), p.push(_[e]);
			}
		}
	}
	return i != null && (f.push(`${n === "r" ? ">" : "≥"} ${W(i)}`), p.push(d)), {
		kind: "bins",
		categories: f,
		counts: p
	};
}
//#endregion
//#region packages/core/src/chart/box-whisker.ts
var G = .06;
function he(e) {
	let t = Math.floor(e.length / 2);
	return e.length % 2 == 1 ? e[t] : e[t - 1] / 2 + e[t] / 2;
}
function ge(e) {
	let t = 0;
	for (let n of e) t = Math.max(t, Math.abs(n));
	if (t === 0) return 0;
	let n = 0;
	for (let r of e) n += r / t;
	return n / e.length * t;
}
function _e(e, t, n) {
	if (!Number.isFinite(t)) return n < 0 ? -Number.MAX_VALUE : Number.MAX_VALUE;
	let r = e + n * t;
	return Number.isFinite(r) ? r : n < 0 ? -Number.MAX_VALUE : Number.MAX_VALUE;
}
function ve(e, t) {
	let n = e.filter((e) => typeof e == "number" && Number.isFinite(e)).sort((e, t) => e - t);
	if (n.length === 0) return null;
	let r = Math.floor(n.length / 2), i = he(n), a = t === "inclusive" && n.length % 2 == 1, o = n.slice(0, r + +!!a), s = n.slice(r + +(n.length % 2 == 1 && !a)), c = he(o.length > 0 ? o : n), l = he(s.length > 0 ? s : n), u = (l - c) * 1.5, d = _e(c, u, -1), f = _e(l, u, 1), p = [], m = [];
	for (let e of n) e < d || e > f ? m.push(e) : p.push(e);
	return {
		q1: c,
		median: i,
		q3: l,
		lowerFence: d,
		upperFence: f,
		whiskerLo: p[0] ?? n[0],
		whiskerHi: p[p.length - 1] ?? n[n.length - 1],
		mean: ge(n),
		outliers: m,
		inner: p
	};
}
function K(e, t) {
	let n = 0;
	for (let r of e) for (let e of r) if (n += e.length, !Number.isSafeInteger(n) || n > t) return t + 1;
	return n;
}
function q(e, t, n, r, i, a, o) {
	if (!Number.isFinite(e) || !Number.isFinite(t) || t <= 0 || !Number.isInteger(n) || n <= 0 || !Number.isInteger(r) || r <= 0 || !Number.isInteger(i) || i < 0 || i >= n || !Number.isInteger(a) || a < 0 || a >= r || !Number.isFinite(o) || o < 0) return null;
	let s = t / n, c = s / (r + o / 100), l = c * r, u = c * G, d = c - u, f = e + s * (i + .5) - l / 2 + a * c + u / 2;
	return {
		boxX: f,
		boxWidth: d,
		centerX: f + d / 2
	};
}
//#endregion
//#region packages/core/src/chart/pareto-layout.ts
function J(e, t) {
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
function be(e, t) {
	let n = e.values.map((e, t) => ({
		value: e,
		sourceIndex: t
	})).filter((e) => e.value != null && Number.isFinite(e.value) && e.value >= 0).sort((e, t) => t.value - e.value || e.sourceIndex - t.sourceIndex), r = n[0]?.value ?? 0, i = r > 0 ? n.reduce((e, t) => e + t.value / r, 0) : 0, a = 0, o = n.map((n) => (r > 0 && (a += n.value / r), {
		sourceIndex: n.sourceIndex,
		category: e.categories?.[n.sourceIndex] ?? t[n.sourceIndex] ?? String(n.sourceIndex + 1),
		value: n.value,
		cumulativeFraction: i > 0 ? a >= i ? 1 : a / i : 0
	})), s = o.map((e) => e.sourceIndex), c = new Map(s.map((e, t) => [e, t])), l = o.map((e) => e.category), u = {
		...e,
		categories: l,
		catFormatCodes: ye(e.catFormatCodes, s),
		dataPointColors: ye(e.dataPointColors, s),
		dataLabelColors: ye(e.dataLabelColors, s),
		dataPointOverrides: J(e.dataPointOverrides, c),
		dataLabelOverrides: J(e.dataLabelOverrides, c)
	};
	return {
		points: o,
		categories: l,
		orderedSeries: {
			...u,
			values: o.map((e) => e.value)
		},
		series: {
			...u,
			values: o.map((e) => e.cumulativeFraction)
		}
	};
}
//#endregion
//#region packages/core/src/chart/trendline-label.ts
function xe(e, n, r, i, a, o) {
	if (![
		r,
		i,
		a
	].every(Number.isFinite) || r <= 0 || i <= 0 || n.w <= 0 || n.h <= 0) return null;
	let s = Math.max(4, a * .5), c = Math.min(r, Math.max(0, n.w - s * 2)), l = Math.min(i, n.h), u = {
		x: Math.max(n.x, n.x + n.w - s - c),
		y: Math.min(n.y + n.h - l, n.y + s),
		w: c,
		h: l
	};
	if (o) {
		let n = t(o, e, u);
		if (n) return {
			...n,
			automatic: !1
		};
	}
	return {
		...u,
		automatic: !0
	};
}
//#endregion
//#region packages/core/src/canvas/aux-canvas.ts
function Se(e, t) {
	return [Math.max(1, Math.ceil(e)), Math.max(1, Math.ceil(t))];
}
function Ce(e, t) {
	let [n, r] = Se(e, t);
	if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
	if (typeof document < "u") {
		let e = document.createElement("canvas");
		return e.width = n, e.height = r, e;
	}
	return null;
}
function we(e, t, n) {
	let [r, i] = Se(t, n);
	if (typeof OffscreenCanvas < "u") try {
		return new OffscreenCanvas(r, i);
	} catch {}
	if (typeof document < "u") try {
		let e = document.createElement("canvas");
		return e.width = r, e.height = i, e;
	} catch {}
	try {
		let t = e.canvas?.constructor;
		return typeof t == "function" ? new t(r, i) : null;
	} catch {
		return null;
	}
}
//#endregion
//#region packages/core/src/shape/pattern-bitmaps.ts
var Te = {
	pct5: [
		0,
		16,
		0,
		0,
		0,
		1,
		0,
		0
	],
	pct10: [
		136,
		0,
		34,
		0,
		136,
		0,
		34,
		0
	],
	pct20: [
		136,
		34,
		136,
		34,
		136,
		34,
		136,
		34
	],
	pct25: [
		136,
		85,
		34,
		85,
		136,
		85,
		34,
		85
	],
	pct30: [
		170,
		85,
		170,
		85,
		170,
		85,
		170,
		85
	],
	pct40: [
		170,
		119,
		170,
		221,
		170,
		119,
		170,
		221
	],
	pct50: [
		170,
		85,
		170,
		85,
		170,
		85,
		170,
		85
	],
	pct60: [
		221,
		85,
		119,
		85,
		221,
		85,
		119,
		85
	],
	pct70: [
		238,
		85,
		187,
		85,
		238,
		85,
		187,
		85
	],
	pct75: [
		238,
		170,
		187,
		170,
		238,
		170,
		187,
		170
	],
	pct80: [
		254,
		239,
		251,
		191,
		254,
		239,
		251,
		191
	],
	pct90: [
		255,
		239,
		255,
		251,
		255,
		239,
		255,
		251
	],
	horz: [
		255,
		0,
		0,
		0,
		255,
		0,
		0,
		0
	],
	vert: [
		136,
		136,
		136,
		136,
		136,
		136,
		136,
		136
	],
	ltHorz: [
		0,
		255,
		0,
		0,
		0,
		0,
		0,
		0
	],
	ltVert: [
		32,
		32,
		32,
		32,
		32,
		32,
		32,
		32
	],
	dkHorz: [
		255,
		255,
		0,
		0,
		255,
		255,
		0,
		0
	],
	dkVert: [
		204,
		204,
		204,
		204,
		204,
		204,
		204,
		204
	],
	narHorz: [
		255,
		0,
		255,
		0,
		255,
		0,
		255,
		0
	],
	narVert: [
		170,
		170,
		170,
		170,
		170,
		170,
		170,
		170
	],
	cross: [
		255,
		136,
		136,
		136,
		255,
		136,
		136,
		136
	],
	lgGrid: [
		255,
		128,
		128,
		128,
		128,
		128,
		128,
		128
	],
	smGrid: [
		255,
		136,
		136,
		136,
		255,
		136,
		136,
		136
	],
	dotGrid: [
		136,
		0,
		0,
		0,
		136,
		0,
		0,
		0
	],
	dnDiag: [
		128,
		64,
		32,
		16,
		8,
		4,
		2,
		1
	],
	upDiag: [
		1,
		2,
		4,
		8,
		16,
		32,
		64,
		128
	],
	ltDnDiag: [
		136,
		68,
		34,
		17,
		136,
		68,
		34,
		17
	],
	ltUpDiag: [
		17,
		34,
		68,
		136,
		17,
		34,
		68,
		136
	],
	dkDnDiag: [
		195,
		129,
		0,
		129,
		195,
		129,
		0,
		129
	],
	dkUpDiag: [
		195,
		129,
		0,
		129,
		195,
		129,
		0,
		129
	],
	wdDnDiag: [
		128,
		64,
		32,
		16,
		8,
		4,
		2,
		129
	],
	wdUpDiag: [
		1,
		2,
		4,
		8,
		16,
		32,
		64,
		129
	],
	diagCross: [
		129,
		66,
		36,
		24,
		24,
		36,
		66,
		129
	],
	horzBrick: [
		255,
		16,
		16,
		16,
		255,
		1,
		1,
		1
	],
	diagBrick: [
		129,
		66,
		36,
		24,
		36,
		66,
		129,
		0
	],
	lgCheck: [
		240,
		240,
		240,
		240,
		15,
		15,
		15,
		15
	],
	smCheck: [
		204,
		204,
		51,
		51,
		204,
		204,
		51,
		51
	],
	trellis: [
		165,
		90,
		165,
		90,
		165,
		90,
		165,
		90
	]
};
function Ee(e, t, n) {
	let r = Te[e];
	if (!r) return null;
	let i = Ce(8, 8);
	if (!i) return null;
	let a = i.getContext("2d");
	if (!a) return null;
	a.fillStyle = De(n), a.fillRect(0, 0, 8, 8), a.fillStyle = De(t);
	for (let e = 0; e < 8; e++) {
		let t = r[e];
		for (let n = 0; n < 8; n++) t & 1 << 7 - n && a.fillRect(n, e, 1, 1);
	}
	return i;
}
function De(e) {
	return `rgba(${parseInt(e.slice(0, 2), 16)},${parseInt(e.slice(2, 4), 16)},${parseInt(e.slice(4, 6), 16)},${e.length >= 8 ? parseInt(e.slice(6, 8), 16) / 255 : 1})`;
}
//#endregion
//#region packages/core/src/shape/paint.ts
var Oe = 512;
function ke(e, t, n, r, i, a, o) {
	let s = e.tileRect;
	if (!s || (s.l ?? 0) === 0 && (s.t ?? 0) === 0 && (s.r ?? 0) === 0 && (s.b ?? 0) === 0) return null;
	let c = n + i * (s.l ?? 0), l = r + a * (s.t ?? 0), u = i * (1 - (s.l ?? 0) - (s.r ?? 0)), d = a * (1 - (s.t ?? 0) - (s.b ?? 0));
	if (!Number.isFinite(u) || !Number.isFinite(d) || Math.abs(u) < 1e-9 || Math.abs(d) < 1e-9) return null;
	let f = Math.min(1, Oe / Math.abs(u), Oe / Math.abs(d)), p = Math.max(1, Math.ceil(Math.abs(u) * f)), m = Math.max(1, Math.ceil(Math.abs(d) * f)), h = we(t, p, m), g = h?.getContext("2d");
	if (!h || !g) return null;
	let _ = Ne({
		...e,
		tileRect: void 0,
		flip: void 0
	}, g, 0, 0, p, m, o);
	if (!_) return null;
	g.fillStyle = _, g.fillRect(0, 0, p, m);
	let v = e.flip === "x" || e.flip === "xy", y = e.flip === "y" || e.flip === "xy", b = h;
	if (v || y) {
		let e = we(t, p * (v ? 2 : 1), m * (y ? 2 : 1)), n = e?.getContext("2d");
		if (!e || !n) return null;
		for (let e = 0; e < (y ? 2 : 1); e += 1) for (let t = 0; t < (v ? 2 : 1); t += 1) n.save(), n.translate(t * p, e * m), n.scale(t === 1 ? -1 : 1, e === 1 ? -1 : 1), n.drawImage(h, t === 1 ? -p : 0, e === 1 ? -m : 0), n.restore();
		b = e;
	}
	let x = t.createPattern(b, "repeat");
	return !x || typeof x.setTransform != "function" ? null : (x.setTransform({
		a: u / p,
		b: 0,
		c: 0,
		d: d / m,
		e: c,
		f: l
	}), x);
}
function Ae(e, t = 1) {
	let n = e.charCodeAt(0) === 35 ? e.slice(1) : e;
	return `rgba(${parseInt(n.slice(0, 2), 16)},${parseInt(n.slice(2, 4), 16)},${parseInt(n.slice(4, 6), 16)},${n.length >= 8 ? parseInt(n.slice(6, 8), 16) / 255 : t})`;
}
function je(e) {
	let t = e.charCodeAt(0) === 35 ? e.slice(1) : e, n = parseInt(t.slice(0, 2), 16), r = parseInt(t.slice(2, 4), 16), i = parseInt(t.slice(4, 6), 16);
	return .299 * n + .587 * r + .114 * i;
}
function Me(e) {
	return e && je(e) < 128 ? "#FFFFFF" : "#000000";
}
function Ne(e, t, n, r, i, a, o = 0) {
	if (!e || e.fillType === "none") return null;
	if (e.fillType === "solid") return Ae(e.color);
	if (e.fillType === "pattern") return Fe(e, t);
	if (e.fillType === "gradient") {
		let s = e.stops;
		if (s.length === 0) return null;
		if (s.length === 1) return Ae(s[0].color);
		let c = ke(e, t, n, r, i, a, o);
		if (c) return c;
		let l, u = e.tileRect, d = n + i * (u?.l ?? 0), f = r + a * (u?.t ?? 0), p = i * (1 - (u?.l ?? 0) - (u?.r ?? 0)), m = a * (1 - (u?.t ?? 0) - (u?.b ?? 0));
		if (e.gradType === "radial") {
			let n = e.fillToRect, r = d + p * (n?.l ?? 0), i = f + m * (n?.t ?? 0), a = p * (1 - (n?.l ?? 0) - (n?.r ?? 0)), o = m * (1 - (n?.t ?? 0) - (n?.b ?? 0)), s = r + a / 2, c = i + o / 2, u = Math.max(Math.abs(s - d), Math.abs(d + p - s)), h = Math.max(Math.abs(c - f), Math.abs(f + m - c)), g = e.path === "rect" ? Math.max(u, h) : Math.sqrt(u * u + h * h);
			l = t.createRadialGradient(s, c, 0, s, c, Math.max(g, 1e-9));
		} else {
			let n = (e.rotWithShape === !1 ? e.angle - o : e.angle) * Math.PI / 180, r = Math.cos(n), i = Math.sin(n);
			if (e.scaled === !0) {
				r *= p, i *= m;
				let e = Math.hypot(r, i);
				e > 0 && (r /= e, i /= e);
			}
			let a = d + p / 2, s = f + m / 2, c = (Math.abs(r) * p + Math.abs(i) * m) / 2;
			l = t.createLinearGradient(a - r * c, s - i * c, a + r * c, s + i * c);
		}
		for (let e of s) l.addColorStop(Math.min(1, Math.max(0, e.position)), Ae(e.color));
		return l;
	}
	return null;
}
var Pe = /* @__PURE__ */ new WeakMap();
function Fe(e, t) {
	let n = `${e.preset}|${e.fg}|${e.bg}`, r = Pe.get(t);
	r || (r = /* @__PURE__ */ new Map(), Pe.set(t, r));
	let i = r.get(n);
	if (i) return i;
	let a = Ee(e.preset, e.fg, e.bg);
	if (!a) return Ae(e.fg);
	let o = t.createPattern(a, "repeat");
	return o ? (r.set(n, o), o) : Ae(e.fg);
}
function Ie(e, t, n) {
	if (!t) {
		e.strokeStyle = "transparent", e.lineWidth = 0, e.setLineDash([]), e.lineCap = "butt", e.lineJoin = "miter", e.miterLimit = 10;
		return;
	}
	e.strokeStyle = Ae(t.color);
	let r = Math.max(.5, t.width * n);
	e.lineWidth = r;
	let i = t.customDash ? t.customDash.flatMap((e) => [Math.max(0, e.dash) * r, Math.max(0, e.space) * r]) : t.dashStyle ? O(t.dashStyle, r) : [], a = t.lineCap ?? "butt", o = i.some((e, t) => t % 2 == 0 && e === 0);
	e.lineCap = a === "butt" && o ? "square" : a, e.lineJoin = t.lineJoin ?? "miter", e.miterLimit = t.miterLimit ?? 10, e.setLineDash(i);
}
//#endregion
//#region packages/core/src/chart/renderer.ts
var Y = [
	"4472C4",
	"ED7D31",
	"A9D18E",
	"FF0000",
	"70AD47",
	"4BACC6",
	"FFC000",
	"9E480E",
	"843C0C",
	"636363",
	"255E91",
	"967300"
], X = [
	"5B9BD5",
	"ED7D31",
	"A5A5A5",
	"FFC000",
	"4472C4",
	"70AD47"
];
function Le(e, t) {
	return t?.color ? `#${t.color}` : `#${Y[e % Y.length]}`;
}
function Re(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e ?? []) t.has(n.idx) || t.set(n.idx, n);
	return t;
}
function ze(e, t, n = !0) {
	let r = t.dataPointColors?.[e];
	return r ? `#${r}` : t.color === "00000000" ? "#00000000" : n ? `#${Y[e % Y.length]}` : Le(e, t);
}
function Z(e, t) {
	return t && (t.startsWith("+mj") ? e.themeMajorFontLatin ?? null : t.startsWith("+mn") ? e.themeMinorFontLatin ?? null : t);
}
function Q(e, t, n) {
	let r = n === "major" ? e.themeMajorFontLatin : e.themeMinorFontLatin, i = Z(e, t) ?? r;
	return i ? `"${i}", Calibri, Arial, sans-serif` : "sans-serif";
}
function Be(e, t, n = !1, r = !1) {
	return `${r ? "italic " : ""}${n ? "bold " : ""}${e}px ${t}`;
}
function Ve(e) {
	return e === "pie" || e === "doughnut";
}
function He(e) {
	return !!e.varyColors && e.series.length === 1 && typeof e.chartType == "string" && /Bar/.test(e.chartType);
}
function Ue(e, t, n, r = !1) {
	if (r || Ve(e)) {
		let e = t[0];
		return e ? ze(n, e) : `#${Y[n % Y.length]}`;
	}
	return Le(n, t[n]);
}
function We(e, n, r, i, a, o, s, c, l, u, d = "sans-serif", f, p, m, h) {
	e.save(), e.font = Be(o, d, s, c), e.fillStyle = l;
	let _ = m ? n : E(e, n, u), v = g(a, f, p), y = r, b = i;
	if (m && h) {
		let n = e.measureText(_).width, a = Math.abs(Math.cos(v)), s = Math.abs(Math.sin(v)), c = n * a + o * s, l = n * s + o * a, u = {
			x: r - c / 2,
			y: i - l / 2,
			w: c,
			h: l
		}, d = t({
			...m,
			w: void 0,
			h: void 0
		}, h, u);
		d && (y = d.x + d.w / 2, b = d.y + d.h / 2);
	}
	e.translate(y, b), v !== 0 && e.rotate(v), e.textAlign = "center", e.textBaseline = "middle", e.fillText(_, 0, 0), e.restore();
}
function Ge(e) {
	return e ? `#${e}` : "#555";
}
function Ke(e, t, n, r, i, a, o, s, c, u, d, f, p, m, h = !1) {
	let g = (t, p, m, h, g, _, v, y, b, x) => {
		if (p === "left") {
			We(e, t, n + d + l(i) + m / 2, s + u / 2, p, m, h, g, _, u, v, y, b, x, {
				x: n,
				y: r,
				w: i,
				h: a
			});
			return;
		}
		We(e, t, o + c / 2, r + a - f - l(a) - m / 2, p, m, h, g, _, c, v, y, b, x, {
			x: n,
			y: r,
			w: i,
			h: a
		});
	};
	t.valAxisTitle && g(t.valAxisTitle, h ? "horizontal" : "left", m, t.valAxisTitleFontBold ?? !0, t.valAxisTitleFontItalic ?? !1, Ge(t.valAxisTitleFontColor), Q(t, t.valAxisTitleFontFace, "major"), t.valAxisTitleRotation, t.valAxisTitleVerticalMode, t.valAxisTitleManualLayout), t.catAxisTitle && g(t.catAxisTitle, h ? "left" : "horizontal", p, t.catAxisTitleFontBold ?? !0, t.catAxisTitleFontItalic ?? !1, Ge(t.catAxisTitleFontColor), Q(t, t.catAxisTitleFontFace, "major"), t.catAxisTitleRotation, t.catAxisTitleVerticalMode, t.catAxisTitleManualLayout);
}
function qe(e) {
	return e && (e === "line" || e === "stackedLine" || e === "stackedLinePct" || e === "radar" || e === "scatter" || e === "stock") ? "line" : "fill";
}
function Je(e, t, n) {
	if (e !== "scatter") return !1;
	let r = t ?? "marker";
	return (r === "line" || r === "lineMarker" || r === "lineNoMarker" || r === "smooth" || r === "smoothMarker" || r === "smoothNoMarker") && n.lineHidden !== !0;
}
function Ye(e, t, n, r) {
	let i = n[r];
	if (!i) return null;
	let a = i.seriesType ?? e, o = a === "line" || a === "stackedLine" || a === "stackedLinePct", s = a === "scatter";
	if (!o && !s || s && (t === "lineNoMarker" || t === "smoothNoMarker")) return null;
	let c = i.markerSymbol ?? "circle";
	if (c === "none" || i.showMarker === !1) return null;
	let l = Le(r, i), u = i.markerFill ?? l.replace(/^#/, ""), d = s ? Je("scatter", t, i) : i.lineHidden !== !0;
	return {
		symbol: c,
		fill: u,
		line: i.markerLine ?? null,
		lineWidthEmu: i.markerLineWidthEmu ?? null,
		withLine: d
	};
}
function Xe(e, t, n, r, i, a, o, s = null, c = void 0, l = null, u = null, d = null, f = null, p = null, m = 1, h = 0) {
	if (s && !s.withLine) {
		Sn(e, r + a / 2, i + o / 2, s.symbol, o * .58, s.fill, s.line, 1, s.lineWidthEmu == null ? void 0 : le(s.lineWidthEmu, m));
		return;
	}
	if (e.fillStyle = n, t === "line") {
		if (!(l != null || u != null || d != null || f != null || p != null)) {
			e.strokeStyle = n;
			let t = e.lineWidth;
			e.lineWidth = Math.max(1.5, o * .15), e.beginPath();
			let c = i + o / 2;
			e.moveTo(r, c), e.lineTo(r + a, c), e.stroke(), e.lineWidth = t, s && Sn(e, r + a / 2, i + o / 2, s.symbol, o * .58, s.fill, s.line, 1, s.lineWidthEmu == null ? void 0 : le(s.lineWidthEmu, m));
			return;
		}
		e.save(), e.strokeStyle = l ? `#${l}` : n, e.lineWidth = u == null ? Math.max(1.5, o * .15) : le(u, m), e.setLineDash(An(d ?? void 0)), e.lineCap = f === "rnd" ? "round" : f === "sq" ? "square" : "butt", e.lineJoin = p === "round" || p === "bevel" ? p : "miter", e.beginPath();
		let t = i + o / 2;
		e.moveTo(r, t), e.lineTo(r + a, t), e.stroke(), s && Sn(e, r + a / 2, i + o / 2, s.symbol, o * .58, s.fill, s.line, 1, s.lineWidthEmu == null ? void 0 : le(s.lineWidthEmu, m)), e.restore();
	} else if (c !== null && (c && (e.fillStyle = c.fillType === "solid" ? c.color.startsWith("#") ? c.color : `#${c.color}` : Ne(c, e, r, i, a, o, h) ?? n), e.fillRect(r, i, a, o)), l) {
		let t = le(u, m);
		e.save(), e.strokeStyle = `#${l}`, e.lineWidth = t, e.setLineDash(An(d ?? void 0)), e.lineCap = f === "rnd" ? "round" : f === "sq" ? "square" : "butt", e.lineJoin = p === "round" || p === "bevel" ? p : "miter", e.strokeRect(r + t / 2, i + t / 2, Math.max(0, a - t), Math.max(0, o - t)), e.restore();
	}
}
function Ze(e, t, n, r = !1, i = [], a = [], o = !0) {
	if (r || Ve(t)) {
		let n = e[0], s = n ? n.values.length : 0, c = n?.categories ?? i, l = new Map(n?.dataPointOverrides?.map((e) => [e.idx, e]) ?? []);
		return Array.from({ length: s }, (i, s) => {
			let u = l.get(s), d = (u?.lineHidden ?? n?.lineHidden) !== !0;
			return {
				label: (c[s] ?? `Item ${s + 1}`).toString(),
				color: Ve(t) && n ? ze(s, n, o) : Ue(t, e, s, r),
				marker: null,
				swatchStyle: qe(t),
				fillPaint: u?.fillHidden === !0 ? null : s < a.length ? a[s] : void 0,
				outlineColor: d ? u?.lineColor ?? n?.lineColor ?? null : null,
				outlineWidthEmu: d ? u?.lineWidthEmu ?? n?.lineWidthEmu ?? null : null,
				outlineDash: d ? u?.lineDash ?? n?.chartexStyle?.lineDash ?? null : null,
				outlineCap: d ? n?.chartexStyle?.lineCap ?? null : null,
				outlineJoin: d ? n?.chartexStyle?.lineJoin ?? null : null
			};
		});
	}
	return e.map((r, i) => {
		let o = qe(r.seriesType ?? t), s = r.lineHidden !== !0, c = s ? r.lineColor ?? null : null;
		return {
			label: r.name || `Series ${i + 1}`,
			color: o === "line" && c ? `#${c}` : Ue(t, e, i),
			marker: Ye(t, n, e, i),
			swatchStyle: o,
			fillPaint: i < a.length ? a[i] : r.fillPattern ?? void 0,
			outlineColor: c,
			outlineWidthEmu: s ? r.lineWidthEmu ?? null : null,
			outlineDash: s ? r.chartexStyle?.lineDash ?? null : null,
			outlineCap: s ? r.chartexStyle?.lineCap ?? null : null,
			outlineJoin: s ? r.chartexStyle?.lineJoin ?? null : null
		};
	});
}
var Qe = {
	fontFamily: "sans-serif",
	color: "#333",
	bold: !1,
	sizePx: null
}, $e = 4, et = 12, tt = 4, nt = 4, rt = nt * 2, it = 4, at = 8, ot = .01, st = 7;
function ct(e, t) {
	return e.sizePx ?? 10 * t;
}
function lt(e, t, n) {
	return e.map((e) => e.swatchStyle === "line" ? t * 1.6 : st * n);
}
function ut(e, t, n) {
	return e.swatchStyle === "line" ? t : st * n;
}
function dt(e, t, n) {
	if (!(n > 0)) return [];
	let r = Lt(e, t, n);
	return r.length <= 2 ? r : [r[0], E(e, r.slice(1).join(" "), n)];
}
function ft(e, t, n, r, i, a) {
	if (!t.showLegend) return null;
	let o = mt(t, a), c = Ze(t.series, t.chartType, t.scatterStyle, He(t), t.categories, [], t.varyColors !== !1), l = ct(o, a), u = lt(c, l, a);
	e.save(), e.font = `${o.bold ? "bold " : ""}${l}px ${o.fontFamily}`;
	let d = c.map((t, n) => u[n] + $e + e.measureText(t.label).width);
	e.restore();
	let f = t.legendPos ?? "r", p = f === "t" || f === "b";
	return s(t, n, r, i, {
		itemWidths: d,
		rowHeight: l + tt,
		itemGap: et,
		horizontalPadding: p ? rt : at,
		verticalPadding: it
	});
}
function pt(e, t, n, r, i, a, o = "vertical", s, c = Qe, l, u = !1, d = [], f = 1, p = [], m = 0, h = !0) {
	let g = $e, _ = Ze(t, s, l, u, d, p, h), y = c.bold ? "bold " : "", b = ct(c, f);
	e.font = `${y}${b}px ${c.fontFamily}`, e.textBaseline = "middle";
	let x = b + tt, S = lt(_, b, f), C = _.map((t, n) => S[n] + g + e.measureText(t.label).width);
	if (o === "horizontal") {
		let t = v(C, i, et).slice(0, Math.max(0, Math.floor((a - it) / x))), o = r + it / 2;
		for (let r = 0; r < t.length; r++) {
			let a = t[r], s = a.map((e) => Math.min(i, C[e])), l = s.reduce((e, t) => e + t, 0) + et * Math.max(0, a.length - 1), u = n + Math.max(0, (i - l) / 2), d = o + r * x + x / 2;
			for (let t = 0; t < a.length; t++) {
				let n = a[t], r = S[n], i = s[t];
				if (i < r) {
					u += i + et;
					continue;
				}
				let o = Math.max(0, i - r - g + ot), l = E(e, _[n].label, o), p = ut(_[n], b, f);
				Xe(e, _[n].swatchStyle, _[n].color, u, d - p / 2, r, p, _[n].marker, _[n].fillPaint, _[n].outlineColor, _[n].outlineWidthEmu, _[n].outlineDash, _[n].outlineCap, _[n].outlineJoin, f, m), e.fillStyle = c.color, e.textAlign = "left", e.fillText(l, u + r + g, d), u += i + et;
			}
		}
		return;
	}
	let w = i - Math.max(...S, 0) - g, T = !u && !Ve(s), D = _.map((t) => T ? dt(e, t.label, w) : [E(e, t.label, w)]), O = D.map((e) => e.length * b + tt), k = 0, A = 0;
	for (; k < _.length && A + O[k] <= a;) A += O[k], k++;
	let j = k === _.length ? r + (a - A) / 2 : r;
	for (let t = 0; t < k; t++) {
		let r = S[t], a = O[t];
		if (i < r) {
			j += a;
			continue;
		}
		let o = ut(_[t], b, f);
		Xe(e, _[t].swatchStyle, _[t].color, n, j + (a - o) / 2, r, o, _[t].marker, _[t].fillPaint, _[t].outlineColor, _[t].outlineWidthEmu, _[t].outlineDash, _[t].outlineCap, _[t].outlineJoin, f, m), e.fillStyle = c.color, e.textAlign = "left", D[t].forEach((t, i) => e.fillText(t, n + r + g, j + b * (i + .5))), j += a;
	}
}
function mt(e, t) {
	let n = Z(e, e.legendFontFace) ?? e.themeMinorFontLatin;
	return {
		fontFamily: n ? `"${n}", Calibri, Arial, sans-serif` : "sans-serif",
		color: e.legendFontColor ? `#${e.legendFontColor}` : "#333",
		bold: e.legendFontBold ?? !1,
		sizePx: _(e.legendFontSizeHpt, t)
	};
}
function ht(e, n, r, i, a, o, s, c, l, u, d, f, p, m = [], h = 0) {
	if (!r) return;
	let g = mt(n, p), _ = He(n), v = Math.min(at / 2, Math.max(0, r.reserveW) / 2), y = Math.max(0, r.reserveW - v * 2), b = r.side === "r" ? {
		x: i + o - r.reserveW + v,
		y: l,
		w: y,
		h: d
	} : r.side === "l" ? {
		x: i + v,
		y: l,
		w: y,
		h: d
	} : r.side === "t" ? {
		x: i + nt,
		y: a + f,
		w: Math.max(0, o - rt),
		h: r.reserveH
	} : {
		x: i + nt,
		y: a + s - r.reserveH,
		w: Math.max(0, o - rt),
		h: r.reserveH
	}, x = r.side === "t" || r.side === "b" ? "horizontal" : "vertical", S = n.legendManualLayout, C = S && S.w > 0 && S.h > 0 ? t(S, {
		x: i,
		y: a,
		w: o,
		h: s
	}, b) : null;
	if (C) {
		let t = C.w >= C.h ? "horizontal" : "vertical";
		pt(e, n.series, C.x, C.y, C.w, C.h, t, n.chartType, g, n.scatterStyle, _, n.categories, p, m, h, n.varyColors !== !1);
		return;
	}
	pt(e, n.series, b.x, b.y, b.w, b.h, x, n.chartType, g, n.scatterStyle, _, n.categories, p, m, h, n.varyColors !== !1);
}
function gt(e, t, n, r, i, a, o, s = !1, c = !1, l = "major", u = 1) {
	if (c || t === "none" || !t) return;
	let d = (l === "minor" ? 4 : 6) * u, f = o ? Math.max(d, o + 2 * u) : d, p = t === "cross" ? f / 2 : f, m = e.strokeStyle, h = e.lineWidth;
	if (e.strokeStyle = a ?? "#888", e.lineWidth = o ?? 1, e.beginPath(), n === "val") {
		let n = r, a = i, o = s ? 1 : -1, c = t === "out" || t === "cross" ? o * p : 0, l = t === "in" || t === "cross" ? -o * p : 0;
		e.moveTo(n + c, a), e.lineTo(n + l, a);
	} else {
		let n = r, a = i, o = t === "out" || t === "cross" ? p : 0, s = t === "in" || t === "cross" ? -p : 0;
		e.moveTo(a, n + o), e.lineTo(a, n + s);
	}
	e.stroke(), e.strokeStyle = m, e.lineWidth = h;
}
function _t(e, t, n, r, i, a) {
	a && a.explicit ? (e.strokeStyle = a.color, e.lineWidth = a.width) : (e.strokeStyle = i ? "#aaa" : a?.color ?? "#e0e0e0", e.lineWidth = i ? 1 : a?.width ?? .5);
	let o = a?.dash ?? [], s = o.length > 0 && e.getLineDash ? e.getLineDash() : [];
	o.length > 0 && e.setLineDash(o), e.beginPath(), e.moveTo(t, r), e.lineTo(t + n, r), e.stroke(), o.length > 0 && e.setLineDash(s);
}
function vt(e, t) {
	let { color: n, width: r } = de(e.valAxisGridlineColor, e.valAxisGridlineWidthEmu, t);
	return {
		color: n,
		width: r,
		explicit: e.valAxisGridlineColor != null || e.valAxisGridlineWidthEmu != null || e.valAxisGridlineDash != null,
		dash: An(e.valAxisGridlineDash ?? void 0)
	};
}
function yt(e, t) {
	let { color: n, width: r } = de(e.valAxisMinorGridlineColor, e.valAxisMinorGridlineWidthEmu, t);
	return {
		color: n,
		width: r,
		explicit: e.valAxisMinorGridlineColor != null,
		dash: An(e.valAxisMinorGridlineDash ?? void 0)
	};
}
function bt(e, t) {
	let { color: n, width: r } = de(e.minorGridlineColor, e.minorGridlineWidthEmu, t);
	return {
		color: n,
		width: r,
		explicit: e.minorGridlineColor != null || e.minorGridlineWidthEmu != null || e.minorGridlineDash != null,
		dash: An(e.minorGridlineDash ?? void 0)
	};
}
function xt(e, t) {
	let { color: n, width: r } = de(e.majorGridlineColor, e.majorGridlineWidthEmu, t);
	return {
		color: n,
		width: r,
		explicit: e.majorGridlineColor != null || e.majorGridlineWidthEmu != null || e.majorGridlineDash != null,
		dash: An(e.majorGridlineDash ?? void 0)
	};
}
function St(e) {
	return e.catAxisMajorGridlines === !0;
}
function Ct(e, t) {
	return {
		...de(e.catAxisGridlineColor, e.catAxisGridlineWidthEmu, t),
		dash: An(e.catAxisGridlineDash ?? void 0)
	};
}
function wt(e, t) {
	return {
		...de(e.catAxisMinorGridlineColor, e.catAxisMinorGridlineWidthEmu, t),
		dash: An(e.catAxisMinorGridlineDash ?? void 0)
	};
}
function Tt(e, t) {
	if (t <= 0) return [];
	let n = fe(e), r = [], i = n ? t : t - 1;
	for (let e = 0; e <= i; e++) r.push(n ? e / t : t === 1 ? .5 : e / (t - 1));
	return r;
}
function Et(e) {
	return e.valAxisOrientation === "maxMin";
}
function Dt(e) {
	return e.catAxisOrientation === "maxMin";
}
function Ot(e) {
	return e.valAxisMajorGridlines !== !1;
}
function kt(e, t) {
	return e == null || !t ? e : e * 100;
}
function At(e, t, n) {
	return p(n ? t / 100 : t, n ? e.valAxisFormatCode ?? "0%" : e.valAxisFormatCode, e.date1904);
}
function jt(e, t, n, r, i = !1, a = "vertical") {
	let o = Et(e), s = e.valAxisLogBase, c = kt(e.valMin, i) ?? (i ? t : e.valMin), l = kt(e.valMax, i) ?? (i ? n : e.valMax), u = kt(e.valAxisMajorUnit, i), d = i && !(s != null && isFinite(s) && s >= 2) && !(u != null && isFinite(u) && u > 0) ? N(t, n, a, r) : u, f = e.valAxisMinorTickMark != null && e.valAxisMinorTickMark !== "none", p = x({
		dataMin: t,
		dataMax: n,
		explicitMin: c,
		explicitMax: l,
		axisLenPt: r,
		axisOrientation: a,
		majorUnit: d,
		minorUnit: kt(e.valAxisMinorUnit, i),
		needMinor: e.valAxisMinorGridlines === !0 || f,
		logBase: s,
		reversed: o
	}), { min: m, max: h, majorUnit: g, majorTicks: _ } = p;
	return {
		min: m,
		max: h,
		step: g,
		majorLines: _,
		minorLines: e.valAxisMinorGridlines ? p.minorTicks : [],
		minorTicks: p.minorTicks,
		frac: p.fraction
	};
}
function Mt(e) {
	return d(Number(e.toPrecision(6)));
}
function Nt(e, t) {
	if (e.labelText) return e.labelText.split(/\r?\n/);
	if (!t) return [];
	let n = [];
	if (e.dispEq) {
		let e = t.intercept < 0 ? "−" : "+";
		n.push(`y = ${Mt(t.slope)}x ${e} ${Mt(Math.abs(t.intercept))}`);
	}
	return e.dispRSqr && n.push(`R² = ${Mt(t.rSquared)}`), n;
}
function Pt(e, t, n, r, i) {
	if (!i) return;
	let a = Nt(t, n);
	if (a.length === 0) return;
	let { chart: o, chartRect: s, plotRect: c } = i, l = _(t.labelFontSizeHpt, r) ?? _(o.dataLabelFontSizeHpt, r) ?? 10 * r, u = Q(o, t.labelFontFace ?? o.dataLabelFontFace, "minor");
	e.font = `${t.labelFontBold ?? o.dataLabelFontBold ?? !1 ? "bold " : ""}${l}px ${u}`;
	let d = l * 1.2, f = xe(s, c, Math.max(...a.map((t) => e.measureText(t).width)), a.length * d, l, t.labelManualLayout);
	if (!f) return;
	e.save(), f.automatic && (e.beginPath(), e.rect(c.x, c.y, c.w, c.h), e.clip());
	let p = t.labelTextAlign;
	e.textAlign = p === "r" ? "right" : p === "ctr" ? "center" : "left", e.textBaseline = "top";
	let m = t.labelFontColor ?? o.dataLabelFontColor;
	e.fillStyle = m ? `#${m}` : "#595959";
	let h = e.textAlign === "right" ? f.x + f.w : e.textAlign === "center" ? f.x + f.w / 2 : f.x, g = f.automatic ? a.length : Math.min(a.length, Math.floor(f.h / d));
	for (let t = 0; t < g; t++) e.fillText(E(e, a[t], f.w), h, f.y + t * d);
	e.restore();
}
function Ft(e, t, n, r, i, a, o, s) {
	let c = t.trendLines;
	if (!c || c.length === 0) return;
	let l = [], u = [];
	for (let e = 0; e < t.values.length; e++) {
		let n = t.values[e], r = o ? o[e] : e;
		n != null && r != null && Number.isFinite(n) && Number.isFinite(r) && (l.push(r), u.push(n));
	}
	if (l.length < 2) return;
	let d = e.getLineDash ? e.getLineDash() : [];
	for (let t of c) {
		let o = F(l, u, t.trendlineType, {
			period: t.period,
			order: t.order,
			intercept: t.intercept,
			forward: t.forward,
			backward: t.backward
		});
		if (o.xs.length < 2 || ![...o.xs, ...o.ys].every(Number.isFinite)) continue;
		let c = t.trendlineType === "linear" ? b(l, u, t.intercept) : null, d = c && [
			c.slope,
			c.intercept,
			c.rSquared
		].every(Number.isFinite) ? c : null, f = o.xs, p = o.ys;
		if (t.trendlineType === "linear") {
			let e = (o.ys[1] - o.ys[0]) / (o.xs[1] - o.xs[0] || 1), n = t.backward ?? 0, r = t.forward ?? 0;
			f = [o.xs[0] - n, o.xs[1] + r], p = [o.ys[0] - e * n, o.ys[1] + e * r];
		}
		if ([...f, ...p].every(Number.isFinite)) {
			if (!t.lineHidden) {
				s?.clipLineToPlot && (e.save(), e.beginPath(), e.rect(s.plotRect.x, s.plotRect.y, s.plotRect.w, s.plotRect.h), e.clip()), e.strokeStyle = t.lineColor ? `#${t.lineColor}` : n, e.lineWidth = t.lineWidthEmu ? le(t.lineWidthEmu, a) : 1.5, e.setLineDash(An(t.lineDash ?? void 0)), e.beginPath();
				let o = f.map((e, t) => ({
					x: r(e),
					y: i(p[t])
				}));
				if (!o.every((e) => Number.isFinite(e.x) && Number.isFinite(e.y))) {
					s?.clipLineToPlot && e.restore();
					continue;
				}
				for (let t = 0; t < o.length; t++) {
					let { x: n, y: r } = o[t];
					t === 0 ? e.moveTo(n, r) : e.lineTo(n, r);
				}
				e.stroke(), s?.clipLineToPlot && e.restore();
			}
			Pt(e, t, d, a, s);
		}
	}
	e.setLineDash(d);
}
function It(e, t, n) {
	return _(e, n) ?? Math.max(8, t * .045);
}
function Lt(e, t, n, r = 0) {
	let i = t.trim().split(/\s+/).filter(Boolean);
	if (i.length === 0) return [""];
	let a = [], o = "", s = (t) => {
		let i = o ? `${o} ${t}` : t;
		if (e.measureText(i).width <= n) {
			o = i;
			return;
		}
		if (o &&= (a.push(o), ""), e.measureText(t).width <= n + r) {
			o = t;
			return;
		}
		let s = Array.from(t), c = 0;
		for (; c < s.length;) {
			let t = c + 1, r = s.length, i = c + 1;
			for (; t <= r;) {
				let a = Math.floor((t + r) / 2);
				e.measureText(s.slice(c, a).join("")).width <= n ? (i = a, t = a + 1) : r = a - 1;
			}
			let l = s.slice(c, i).join("");
			c = i, c < s.length ? a.push(l) : o = l;
		}
	};
	for (let e of i) s(e);
	return o && a.push(o), a.length ? a : [""];
}
function Rt(e, t) {
	return /^[+-]?(?:\d+(?:[.,]\d*)?|[.,]\d+)%?$/.test(e) ? t * .15 : 0;
}
function zt(e) {
	return e.catAxisTickLabelPos !== "none";
}
var Bt = 54e5;
function Vt(e) {
	let t = e.catAxisLabelRotation;
	return t == null || t === 0 || Math.abs(t) > Bt ? 0 : t / 6e4 * (Math.PI / 180);
}
function Ht(e, t, n, r, i) {
	if (i === 0) {
		e.fillText(t, n, r);
		return;
	}
	e.save(), e.translate(n, r), e.rotate(i), e.textAlign = "right", e.textBaseline = "middle", e.fillText(t, 0, 0), e.restore();
}
function Ut(e, t, n) {
	if (!e) return null;
	function* r() {
		for (let e of t) e.useSecondaryAxis === !0 && (yield* e.values);
	}
	let { min: i, max: a } = C(r()), o = x({
		dataMin: i,
		dataMax: a,
		explicitMin: e.min,
		explicitMax: e.max,
		axisLenPt: n,
		axisOrientation: "vertical",
		majorUnit: e.majorUnit,
		minorUnit: e.minorUnit,
		needMinor: e.minorGridlines === !0 || e.minorTickMark != null && e.minorTickMark !== "none",
		logBase: e.logBase,
		reversed: e.orientation === "maxMin"
	}), { min: s, max: c, majorUnit: l } = o;
	return {
		min: s,
		max: c,
		step: l,
		majorLines: o.majorTicks,
		minorTicks: o.minorTicks,
		makeToY: (e, t) => (n) => e + t - o.fraction(n) * t
	};
}
function Wt(e, t, n, r, i, a, o) {
	if (!t.hidden) {
		if (e.save(), t.minorGridlines) {
			let s = bt(t, o);
			for (let t of n.minorTicks) _t(e, i, a, r(t), !1, s);
		}
		if (t.majorGridlines) {
			let s = xt(t, o);
			for (let t of n.majorLines) _t(e, i, a, r(t), !1, s);
		}
		e.restore();
	}
}
function Gt(e, t, n, r, i, a, o, s, c, l, u, d, f, m, h) {
	let g = o + c, { color: _, width: v } = ue(n.lineColor, n.lineWidthEmu, u);
	if (n.lineHidden || (e.strokeStyle = _, e.lineWidth = v, e.beginPath(), e.moveTo(g, s), e.lineTo(g, s + l), e.stroke()), !n.hidden) {
		e.font = `${n.fontItalic ? "italic " : ""}${n.fontBold ? "bold " : ""}${d}px ${Q(t, n.fontFace, "minor")}`, e.fillStyle = n.fontColor ? `#${n.fontColor}` : m, e.textAlign = "left", e.textBaseline = "middle";
		for (let t of r.majorLines) {
			let r = i(t);
			gt(e, n.majorTickMark, "val", g, r, _, v, !0, n.lineHidden, "major", u), n.tickLabelPos !== "none" && e.fillText(p(t, n.formatCode ?? null, h), g + 14, r);
		}
		if (n.minorTickMark && n.minorTickMark !== "none") for (let t of r.minorTicks) gt(e, n.minorTickMark, "val", g, i(t), _, v, !0, n.lineHidden, "minor", u);
	}
	n.title && Kt(e, t, n, a, o, s, c, l, f, u);
}
function Kt(e, t, n, r, a, o, s, c, l, u) {
	if (!n.title) return;
	let d = i(n.titleFontSizeHpt, u), f = n.titleFontColor ? `#${n.titleFontColor}` : n.fontColor ? `#${n.fontColor}` : "#555";
	We(e, n.title, a + s + l + d * .6, o + c / 2, "right", d, n.titleFontBold ?? !0, n.titleFontItalic ?? !1, f, c, Q(t, n.titleFontFace, "major"), n.titleRotation, n.titleVerticalMode, n.titleManualLayout, r);
}
function qt(e, t, n, r, i, a) {
	if (!t.title) return;
	let o = Z(t, t.titleFontFace), s = o ? `"${o}", Calibri, Arial, sans-serif` : "Calibri, Arial, sans-serif";
	e.font = `${t.titleFontBold ?? !0 ? "bold " : ""}${a}px ${s}`, e.fillStyle = t.titleFontColor ? `#${t.titleFontColor}` : "#333", e.textAlign = "center", e.textBaseline = "top", e.fillText(t.title, n + i / 2, r);
}
function Jt(e, n, r, i, a, o, s, c) {
	if (!n.title) return;
	let l = n.titleManualLayout;
	if (l) {
		let u = Z(n, n.titleFontFace), d = u ? `"${u}", Calibri, Arial, sans-serif` : "Calibri, Arial, sans-serif";
		e.font = `${n.titleFontBold ?? !0 ? "bold " : ""}${c}px ${d}`;
		let f = e.measureText(n.title).width, p = {
			x: r + (a - f) / 2,
			y: s,
			w: f,
			h: c
		}, m = t({
			...l,
			w: void 0,
			h: void 0
		}, {
			x: r,
			y: i,
			w: a,
			h: o
		}, p);
		if (m) {
			qt(e, n, m.x, m.y, m.w, c);
			return;
		}
	}
	qt(e, n, r, s, a, c);
}
function Yt(e) {
	if (e.categories.length > 0) return e.categories;
	let t = e.series[0];
	if (t?.categories && t.categories.length > 0) return t.categories;
	let n = 0;
	for (let t of e.series) t.values.length > n && (n = t.values.length);
	return n > 0 ? Array.from({ length: n }, (e, t) => String(t + 1)) : [];
}
function Xt(e, t) {
	let n = Math.max(e.x, t.x), r = Math.max(e.y, t.y), i = Math.min(e.x + e.w, t.x + t.w), a = Math.min(e.y + e.h, t.y + t.h);
	return i > n && a > r ? {
		x: n,
		y: r,
		w: i - n,
		h: a - r
	} : null;
}
function Zt(e, t, n, r, i, a, o, s, c, l, u, d, f, p = !1, m) {
	Dn(e, t, {
		kind: "bar",
		rect: o === "vertical" ? {
			x: n,
			y: r,
			w: a,
			h: i
		} : {
			x: n,
			y: r,
			w: i,
			h: a
		},
		orientation: o,
		negative: p,
		position: s ?? "outEnd"
	}, u, l, c ? `#${c}` : "#333", f, d, m);
}
function Qt(t, s, d, g, v = {}) {
	let { x: y, y: b, w: S, h: w } = d, T = s.chartType === "clusteredBarH" || s.chartType === "stackedBarH" || s.chartType === "stackedBarHPct", D = s.chartType.startsWith("stacked"), O = s.chartType === "stackedBarPct" || s.chartType === "stackedBarHPct", k = s.series.filter((e) => e.seriesType !== "line" && e.seriesType !== "scatter"), A = s.series.filter((e) => e.seriesType === "line"), j = s.series.filter((e) => e.seriesType === "scatter"), M = new Map(s.series.map((e, t) => [e, t])), N = !T && s.secondaryValAxis && A.some((e) => e.useSecondaryAxis === !0) ? s.secondaryValAxis : null, P = Yt(s), F = P.length;
	if (F === 0) return;
	let I = He(s), L = k.map((e) => new Map((e.dataPointOverrides ?? []).map((e) => [e.idx, e]))), ee = k.map((e) => new Map((e.dataLabelOverrides ?? []).map((e) => [e.idx, e]))), R = k.map((e, t) => Pn(e, t)), te = s.chartexDataPointStyle != null || s.chartexColorPalette != null || k.some((e) => e.chartexStyle != null), ne = te ? {
		...s,
		series: k.map((e, t) => {
			let n = R[t], r = e.color ?? zn(s, n, k.length, e.chartexStyle);
			return qn(s, e.name, e, s.chartexDataPointStyle, n, k.length, r);
		})
	} : s, re = a(s, w, g), ie = re.fontPx, ae = re.topPad, oe = re.bandH, se = It(s.catAxisFontSizeHpt, w, g), z = It(s.valAxisFontSizeHpt, w, g), B = ft(t, ne, S, w, .22, g), { legRightW: V, legLeftW: H, legTopH: ce, legBottomH: de } = c(B), pe = u(s, S, w, g), W = pe.catFontPx, me = pe.valFontPx, G = T ? s.valAxisTitle ? me + l(w) + 4 : 0 : pe.catBandH, he = T ? s.catAxisTitle ? W + l(S) + 4 : 0 : pe.valBandW, ge = oe + ce + z / 2 + 2, _e = T ? (s.valAxisHidden ? w * .02 : o(z)) + G + de : o(se) + G + de, ve = w - ge - _e, K = 0;
	if (T && !s.catAxisHidden && zt(s)) {
		let n = s.catAxisFontSizeHpt == null ? Math.max(8, Math.min(11, ve / F * .5)) : se;
		t.save(), t.font = `${n}px ${Q(s, s.catAxisFontFace, "minor")}`;
		for (let e of P) K = Math.max(K, t.measureText(h(e, s.catAxisFormatCode, s.date1904)).width);
		t.restore(), K += (s.catAxisFontSizeHpt == null ? 4 : e(n)) + m * g;
	}
	let q = Math.min(K, Math.max(0, S / 2 - he - H)), J = T ? S - ((s.catAxisHidden ? S * .03 : q) + he + H) - (V + S * .03) : 0, ye = s.valAxisHidden ? void 0 : (T ? J : ve) / g, be = 0, xe = 0;
	for (let e = 0; e < F; e++) {
		let t = 0, n = 0;
		for (let r of k) {
			let i = r.values[e] ?? 0;
			D ? i >= 0 ? t += i : n += i : (be = Math.max(be, i), xe = Math.min(xe, i));
		}
		D && (be = Math.max(be, t), xe = Math.min(xe, n));
	}
	if (!O) {
		for (let e of A) if (!(N && e.useSecondaryAxis === !0)) for (let t = 0; t < F; t++) {
			let n = e.values[t];
			n != null && (be = Math.max(be, n), xe = Math.min(xe, n));
		}
	}
	O && (be = be > 0 ? 100 : 0, xe = xe < 0 ? -100 : 0), s.valMax != null && (be = O ? s.valMax * 100 : s.valMax), s.valMin != null && (xe = O ? s.valMin * 100 : s.valMin), be === 0 && xe === 0 && (be = 1);
	let Se = jt(s, xe, be, ye, O, T ? "horizontal" : "vertical"), { step: Ce } = Se, we = Ut(N, A, ve / g), Te = Math.max(8, Math.min(11, w / 20)), Ee = s.valAxisFontSizeHpt == null ? Math.max(8, Math.min(11, ve / 20)) : z, De = t.font, Oe = 0, ke = 0;
	if (!T && !s.valAxisHidden) {
		t.font = `${Ee}px ${Q(s, s.valAxisFontFace, "minor")}`;
		let e = 0;
		for (let n of Se.majorLines) {
			let r = At(s, n, O);
			e = Math.max(e, t.measureText(r).width);
		}
		Oe = e, ke = Oe + 16;
	}
	let Ae = _(N?.fontSizeHpt, g) ?? Te, je = 0;
	if (N && !N.hidden) {
		t.font = `${Ae}px ${Q(s, N.fontFace, "minor")}`;
		let e = 0;
		for (let n of we?.majorLines ?? []) e = Math.max(e, t.measureText(p(n, N.formatCode ?? null, s.date1904)).width);
		je = e + 18;
	}
	t.font = De;
	let Me = N && N.title ? i(N.titleFontSizeHpt, g) + 8 : 0, Pe = {
		t: ge,
		r: V + S * .03 + je + Me,
		b: _e,
		l: T ? (s.catAxisHidden ? S * .03 : q) + he + H : H + he + ke
	}, Fe = T ? {
		t: 0,
		r: s.valAxisHidden ? 0 : Ee / 2,
		b: s.valAxisHidden ? 0 : Ee + G,
		l: s.catAxisHidden ? 0 : K + he
	} : n({
		valAxisHidden: s.valAxisHidden,
		catAxisHidden: s.catAxisHidden,
		valLabelWidth: Oe,
		valLabelFontPx: Ee,
		catLabelFontPx: se,
		valLabelGapPx: s.valAxisFontSizeHpt == null ? 12 : e(Ee),
		catLabelGapPx: s.catAxisFontSizeHpt == null ? 3 : f(se),
		outerTextMarginPx: m * g,
		valTitleBandW: he,
		catTitleBandH: G,
		secondaryBandW: je + Me
	});
	Jt(t, s, y, b, S, w, b + ae, ie);
	let Ie = r(s, y, b, S, w, g, {
		titleBand: re,
		legendSideReserveFrac: .22,
		legendReserve: B,
		pad: Pe,
		honorPlotAreaManualLayout: !0,
		manualOuterInsets: Fe
	}), { px0: Y, py0: X, pw: Re } = Ie.plotRect, { ph: Z } = Ie.plotRect;
	if (Re <= 0 || Z <= 0) return;
	let Ve = Vt(s), Ue = [];
	if (!T && !s.catAxisHidden && zt(s) && Ve === 0) {
		let e = Re / F, n = s.catAxisFontSizeHpt == null ? Math.max(8, Math.min(11, e * .5)) : se;
		t.save(), t.font = Be(n, Q(s, s.catAxisFontFace, "minor"), s.catAxisFontBold ?? !1, s.catAxisFontItalic ?? !1);
		for (let r of P) {
			let i = h(r, s.catAxisFormatCode, s.date1904);
			Ue.push(Lt(t, i, Math.max(1, e), Rt(i, n)));
		}
		t.restore();
		let r = Math.max(1, ...Ue.map((e) => e.length));
		!(s.plotAreaManualLayout?.layoutTarget === "inner" && s.plotAreaManualLayout.w != null && s.plotAreaManualLayout.h != null) && r > 1 && (Z = Math.max(1, Z - (r - 1) * (n + 2)));
	}
	s.plotAreaBg && (t.fillStyle = `#${s.plotAreaBg}`, t.fillRect(Y, X, Re, Z));
	let We = (e) => X + Z - Se.frac(e) * Z, Ge = (e) => Y + Se.frac(e) * Re, qe = We(0), Je = Ge(0), Ye = We, Xe = we ? we.makeToY(X, Z) : We, Ze = vt(s, g);
	t.textBaseline = "middle";
	let Qe = s.valAxisFontSizeHpt == null ? Math.max(8, Math.min(11, Z / 20)) : z;
	t.font = `${Qe}px ${Q(s, s.valAxisFontFace, "minor")}`;
	let $e = s.valAxisFontColor ? `#${s.valAxisFontColor}` : "#555";
	if (t.fillStyle = $e, !s.valAxisHidden) {
		let n = yt(s, g);
		for (let e of Se.minorLines) if (!T) _t(t, Y, Re, We(e), !1, n);
		else {
			let r = Ge(e);
			t.strokeStyle = n.color, t.lineWidth = n.width;
			let i = n.dash.length > 0 && t.getLineDash ? t.getLineDash() : [];
			n.dash.length > 0 && t.setLineDash(n.dash), t.beginPath(), t.moveTo(r, X), t.lineTo(r, X + Z), t.stroke(), n.dash.length > 0 && t.setLineDash(i);
		}
		let r = Ot(s), i = s.valAxisTickLabelPos !== "none";
		for (let n of Se.majorLines) {
			let a = Math.abs(n) < Ce * 1e-9, o = At(s, n, O);
			if (T) {
				let e = Ge(n);
				if (r) {
					t.strokeStyle = Ze.explicit ? Ze.color : a ? "#aaa" : Ze.color, t.lineWidth = Ze.explicit ? Ze.width : a ? 1 : Ze.width;
					let n = Ze.dash.length > 0 && t.getLineDash ? t.getLineDash() : [];
					Ze.dash.length > 0 && t.setLineDash(Ze.dash), t.beginPath(), t.moveTo(e, X), t.lineTo(e, X + Z), t.stroke(), Ze.dash.length > 0 && t.setLineDash(n);
				}
				if (i) {
					t.textAlign = "center";
					let n = s.valAxisFontSizeHpt == null ? 10 : f(Qe);
					t.fillText(o, e, X + Z + n);
				}
			} else {
				let c = We(n);
				if (r && _t(t, Y, Re, c, a, Ze), i) {
					t.textAlign = "right";
					let n = s.valAxisFontSizeHpt == null ? 12 : e(Qe);
					t.fillText(o, Y - n, c);
				}
			}
		}
	}
	if (N && we && Wt(t, N, we, Xe, Y, Re, g), !s.catAxisHidden && St(s)) {
		let e = Ct(s, g);
		t.strokeStyle = e.color, t.lineWidth = e.width;
		let n = e.dash.length > 0 && t.getLineDash ? t.getLineDash() : [];
		e.dash.length > 0 && t.setLineDash(e.dash);
		for (let e of Tt(s, F)) {
			if (t.beginPath(), T) {
				let n = X + e * Z;
				t.moveTo(Y, n), t.lineTo(Y + Re, n);
			} else {
				let n = Y + e * Re;
				t.moveTo(n, X), t.lineTo(n, X + Z);
			}
			t.stroke();
		}
		e.dash.length > 0 && t.setLineDash(n);
	}
	let { color: et, width: tt } = ue(s.catAxisLineColor, s.catAxisLineWidthEmu, g), { color: nt, width: rt } = ue(s.valAxisLineColor, s.valAxisLineWidthEmu, g), it = (e, n, r, i, a, o) => {
		t.strokeStyle = a, t.lineWidth = o, t.beginPath(), t.moveTo(e, n), t.lineTo(r, i), t.stroke();
	}, at = !s.catAxisHidden && !s.catAxisLineHidden, ot = !s.valAxisHidden && !s.valAxisLineHidden && s.valAxisLineColor != null, st = () => {
		if (T ? (at && it(Y, X, Y, X + Z, et, tt), ot && it(Y, X + Z, Y + Re, X + Z, nt, rt)) : (at && it(Y, X + Z, Y + Re, X + Z, et, tt), ot && it(Y, X, Y, X + Z, nt, rt)), !s.valAxisHidden && s.valAxisMajorTickMark && s.valAxisMajorTickMark !== "none") for (let e of Se.majorLines) T ? gt(t, s.valAxisMajorTickMark, "cat", X + Z, Ge(e), nt, rt, !1, s.valAxisLineHidden, "major", g) : gt(t, s.valAxisMajorTickMark, "val", Y, We(e), nt, rt, !1, s.valAxisLineHidden, "major", g);
		if (!s.valAxisHidden && s.valAxisMinorTickMark && s.valAxisMinorTickMark !== "none") for (let e of Se.minorTicks) T ? gt(t, s.valAxisMinorTickMark, "cat", X + Z, Ge(e), nt, rt, !1, s.valAxisLineHidden, "minor", g) : gt(t, s.valAxisMinorTickMark, "val", Y, We(e), nt, rt, !1, s.valAxisLineHidden, "minor", g);
		if (!s.catAxisHidden && s.catAxisMajorTickMark && s.catAxisMajorTickMark !== "none") {
			let e = fe(s), n = e ? F : F - 1;
			for (let r = 0; r <= n; r++) {
				let n = e ? r / F : F === 1 ? .5 : r / (F - 1);
				T ? gt(t, s.catAxisMajorTickMark, "val", Y, X + n * Z, et, tt, !1, s.catAxisLineHidden, "major", g) : gt(t, s.catAxisMajorTickMark, "cat", X + Z, Y + n * Re, et, tt, !1, s.catAxisLineHidden, "major", g);
			}
		}
	}, ct = T ? Z / F : Re / F, lt = Dt(s), ut = (e) => T ? lt ? e : F - 1 - e : lt ? F - 1 - e : e, dt = D ? 1 : Math.max(1, k.length), pt = D ? 0 : s.barOverlap ?? 0, mt = U(s.barGapWidth, v.gapPolicy ?? "legacy"), bt = ct / (1 + (dt - 1) * (1 - pt / 100) + mt / 100), xt = D ? 0 : bt * (1 - pt / 100), wt = (ct - (bt + (dt - 1) * xt)) / 2;
	for (let e = 0; e < F; e++) {
		let n = 0, r = 0, i = 0;
		if (O) {
			for (let t of k) i += Math.abs(t.values[e] ?? 0);
			i === 0 && (i = 1);
		}
		for (let a = 0; a < k.length; a++) {
			let o = k[a], c = o.values[e] ?? 0, l = O ? c / i * 100 : c, u = l < 0, d = L[a].get(e), f = d?.color ?? o.dataPointColors?.[e], p = f ? `#${f}` : I ? ze(e, o) : Le(a, o), m = d?.fillHidden ? null : d?.color ? {
				fillType: "solid",
				color: d.color
			} : te ? Hn(s, R[a], k.length, o.chartexStyle, o.color) : void 0, h = () => {
				if (d?.lineHidden != null || d?.lineColor != null || d?.lineWidthEmu != null || d?.lineDash != null) {
					if (d?.lineHidden) return !1;
					let e = In(s, s.chartexDataPointStyle, "line", R[a], k.length) ?? o.lineColor ?? p;
					return t.strokeStyle = `#${d?.lineColor ?? e.replace(/^#/, "")}`, t.lineWidth = d?.lineWidthEmu == null ? o.lineWidthEmu == null ? 1 : le(o.lineWidthEmu, g) : le(d.lineWidthEmu, g), t.setLineDash(An(d?.lineDash)), !0;
				}
				return te ? Kn(t, s, s.chartexDataPointStyle, o, R[a], k.length, p, g) : !o.lineColor || o.lineHidden ? !1 : (t.strokeStyle = `#${o.lineColor}`, t.lineWidth = le(o.lineWidthEmu, g), t.setLineDash([]), !0);
			};
			if (T) {
				let i = a, d = D ? X + ut(e) * ct + wt : X + ut(e) * ct + wt + i * xt, f = D ? Ge(u ? r : n) : Je, v = Ge(D ? (u ? r : n) + l : l), x = On(Math.min(f, v), Y, Y + Re), C = On(Math.max(f, v), Y, Y + Re), T = Math.max(0, C - x);
				if (m !== null && (t.fillStyle = m ? Un(t, m, x, d, T, bt, p) : o.fillPattern ? Ne(o.fillPattern, t, x, d, T, bt) ?? p : p, t.fillRect(x, d, T, bt)), T > 0 && bt > 0 && h()) {
					let e = t.lineWidth;
					t.strokeRect(x + e / 2, d + e / 2, Math.max(0, T - e), Math.max(0, bt - e));
				}
				let E = o.seriesDataLabels, k = Fn(s, o, e, o.categories?.[e] ?? P[e] ?? "", c, {
					visible: s.showDataLabels,
					showVal: s.showDataLabels && !O,
					showPercent: s.showDataLabels && O,
					showCatName: !1
				}, ee[a], O ? l / 100 : void 0);
				if (k) {
					let n = _(k.fontSizeHpt ?? s.dataLabelFontSizeHpt, g) ?? Math.max(7, Math.min(11, bt * .6)), r = ee[a].get(e), i = k.fontBold || E?.fontBold == null && r?.fontBold == null;
					t.font = `${i ? "bold " : ""}${n}px ${Q(s, s.dataLabelFontFace, "minor")}`, Zt(t, k.text, x, d, T, bt, "horizontal", k.position ?? s.dataLabelPosition ?? (D ? "ctr" : null), o.dataLabelColors?.[e] ?? k.fontColor ?? o.labelColor ?? s.dataLabelFontColor ?? null, n, {
						x: Y,
						y: X,
						w: Re,
						h: Z
					}, {
						x: y,
						y: b,
						w: S,
						h: w
					}, r?.manualLayout, u, En(s, r, g, Q(s, s.dataLabelFontFace, "minor"), i));
				}
			} else {
				let i = D ? Y + ut(e) * ct + wt : Y + ut(e) * ct + wt + a * xt, d = D ? We(u ? r : n) : qe, f = We(D ? (u ? r : n) + l : l), v = On(Math.min(d, f), X, X + Z), x = On(Math.max(d, f), X, X + Z), C = Math.max(0, x - v);
				if (m !== null && (t.fillStyle = m ? Un(t, m, i, v, bt, C, p) : o.fillPattern ? Ne(o.fillPattern, t, i, v, bt, C) ?? p : p, t.fillRect(i, v, bt, C)), bt > 0 && C > 0 && h()) {
					let e = t.lineWidth;
					t.strokeRect(i + e / 2, v + e / 2, Math.max(0, bt - e), Math.max(0, C - e));
				}
				let T = o.seriesDataLabels, E = Fn(s, o, e, o.categories?.[e] ?? P[e] ?? "", c, {
					visible: s.showDataLabels,
					showVal: s.showDataLabels && !O,
					showPercent: s.showDataLabels && O,
					showCatName: !1
				}, ee[a], O ? l / 100 : void 0);
				if (E) {
					let n = _(E.fontSizeHpt ?? s.dataLabelFontSizeHpt, g) ?? Math.max(7, Math.min(11, bt * .6)), r = ee[a].get(e), c = E.fontBold || T?.fontBold == null && r?.fontBold == null;
					t.font = `${c ? "bold " : ""}${n}px ${Q(s, s.dataLabelFontFace, "minor")}`, Zt(t, E.text, i, v, C, bt, "vertical", E.position ?? s.dataLabelPosition ?? (D ? "ctr" : null), o.dataLabelColors?.[e] ?? E.fontColor ?? o.labelColor ?? s.dataLabelFontColor ?? null, n, {
						x: Y,
						y: X,
						w: Re,
						h: Z
					}, {
						x: y,
						y: b,
						w: S,
						h: w
					}, r?.manualLayout, u, En(s, r, g, Q(s, s.dataLabelFontFace, "minor"), c));
				}
			}
			D && (u ? r += l : n += l);
		}
	}
	if (!s.catAxisHidden && zt(s)) {
		t.fillStyle = s.catAxisFontColor ? `#${s.catAxisFontColor}` : "#555";
		let n = s.catAxisFontSizeHpt == null ? Math.max(8, Math.min(11, ct * .5)) : se;
		t.font = `${n}px ${Q(s, s.catAxisFontFace, "minor")}`;
		let r = ct - 4, i = Y - 4 - (y + H + he), a = Ve;
		for (let o = 0; o < F; o++) {
			let c = h((P[o] ?? "").toString(), s.catAxisFormatCode, s.date1904);
			if (T) {
				let r = X + ut(o) * ct + ct / 2;
				t.textAlign = "right", t.textBaseline = "middle";
				let a = s.catAxisFontSizeHpt == null ? 4 : e(n);
				t.fillText(E(t, c, i), Y - a, r);
			} else {
				let e = Y + ut(o) * ct + ct / 2;
				t.textAlign = "center", t.textBaseline = "top";
				let i = a === 0 ? r : Z * .4, l = s.catAxisFontSizeHpt == null ? 3 : f(n);
				a === 0 ? (Ue[o] ?? [c]).forEach((r, i) => {
					t.fillText(r, e, X + Z + l + i * (n + 2));
				}) : Ht(t, E(t, c, i), e, X + Z + l, a);
			}
		}
	}
	if (A.length > 0 && !T) for (let e = 0; e < A.length; e++) {
		let n = A[e], r = Le(k.length + e, n), i = N && n.useSecondaryAxis === !0 ? Xe : Ye, a = n.chartexStyle != null || n.lineHidden != null || n.lineColor != null || n.lineWidthEmu != null || s.chartexDataPointLineStyle != null, o = a ? Kn(t, s, s.chartexDataPointLineStyle, n, Pn(n, M.get(n) ?? e), A.length, r, g, { linkedNoStyleFallback: v.semanticLineNoStyleFallback }) : !0;
		a || (t.strokeStyle = r, t.lineWidth = 2, t.setLineDash([])), t.beginPath();
		let c = !1;
		for (let e = 0; e < F; e++) {
			let r = n.values[e];
			if (r == null) {
				c = !1;
				continue;
			}
			let a = Y + ut(e) * ct + ct / 2, o = i(r);
			c ? t.lineTo(a, o) : (t.moveTo(a, o), c = !0);
		}
		if (o && t.stroke(), n.showMarker !== !1) for (let e = 0; e < F; e++) {
			let a = n.values[e];
			if (a == null) continue;
			let o = Y + ut(e) * ct + ct / 2, s = i(a);
			t.fillStyle = r, t.beginPath(), t.arc(o, s, 3, 0, Math.PI * 2), t.fill();
		}
		Ft(t, n, r, (e) => Y + ut(e) * ct + ct / 2, i, g, void 0, {
			chart: s,
			chartRect: d,
			plotRect: {
				x: Y,
				y: X,
				w: Re,
				h: Z
			}
		});
	}
	if (j.length > 0) {
		let e = [], n = [];
		for (let t of j) {
			let r = t.categories ?? [];
			for (let i = 0; i < t.values.length; i++) {
				let a = mn(r, i, !1), o = t.values[i];
				a == null || o == null || (e.push(a), n.push(o));
			}
		}
		if (e.length && n.length) {
			let r = s.secondaryCatAxis, i = s.secondaryValAxis, a = C(e), o = C(n), c = (e) => e?.minorGridlines === !0 || e?.minorTickMark != null && e.minorTickMark !== "none", l = x({
				dataMin: a.min,
				dataMax: a.max,
				explicitMin: r?.min,
				explicitMax: r?.max,
				axisLenPt: Re / g,
				axisOrientation: "horizontal",
				majorUnit: r?.majorUnit,
				minorUnit: r?.minorUnit,
				needMinor: c(r),
				logBase: r?.logBase,
				reversed: r?.orientation === "maxMin"
			}), u = x({
				dataMin: o.min,
				dataMax: o.max,
				explicitMin: i?.min,
				explicitMax: i?.max,
				axisLenPt: Z / g,
				axisOrientation: "vertical",
				majorUnit: i?.majorUnit,
				minorUnit: i?.minorUnit,
				needMinor: c(i),
				logBase: i?.logBase,
				reversed: i?.orientation === "maxMin"
			});
			bn(t, s, j.map((e, t) => ({
				series: e,
				index: M.get(e) ?? t
			})), !1, (e) => Y + l.fraction(e) * Re, (e) => X + Z - u.fraction(e) * Z, d, Y, X, Re, Z, g, !1, s.scatterStyle ?? "marker", {
				x: y,
				y: b,
				w: S,
				h: w
			});
		}
	}
	st(), N && we && Gt(t, s, N, we, Xe, d, Y, X, Re, Z, g, Ae, je, $e, s.date1904);
	let Et = te ? k.map((e, t) => Hn(s, R[t], k.length, e.chartexStyle, e.color)) : [];
	ht(t, ne, B, y, b, S, w, Y, X, Re, Z, oe + 2, g, Et), Ke(t, s, y, b, S, w, Y, X, Re, Z, H, de, W, me, T);
}
function $t(t, s, l, g) {
	let { x: v, y, w: b, h: x } = l, S = Yt(s), C = S.length;
	if (C === 0) return;
	let w = s.chartType === "stackedLine" || s.chartType === "stackedLinePct", T = s.chartType === "stackedLinePct", E = T ? S.map((e, t) => {
		let n = 0;
		for (let e of s.series) n += Math.abs(e.values[t] ?? 0);
		return n || 1;
	}) : null, D = s.dispBlanksAs ?? "gap", O = (e, t) => {
		if (!w) return s.series[e].values[t] ?? 0;
		let n = 0;
		for (let r = 0; r <= e; r++) n += s.series[r].values[t] ?? 0;
		return T && E ? n / E[t] * 100 : n;
	}, k = !w && s.secondaryValAxis && s.series.some((e) => e.useSecondaryAxis === !0) ? s.secondaryValAxis : null, A = (e) => k != null && e.useSecondaryAxis === !0, j = Infinity, M = -Infinity;
	for (let e = 0; e < C; e++) for (let t = 0; t < s.series.length; t++) {
		if (A(s.series[t]) || !w && s.series[t].values[e] == null) continue;
		let n = O(t, e);
		j = Math.min(j, n), M = Math.max(M, n);
	}
	isFinite(j) || (j = 0, M = 1);
	let N = s.valAxisLogBase != null && s.valAxisLogBase >= 2;
	s.valMin == null ? T && j > 0 && !N && (j = 0) : j = T ? s.valMin * 100 : s.valMin, s.valMax == null ? T && M < 0 && (M = 0) : M = T ? s.valMax * 100 : s.valMax;
	let P = a(s, x, g), F = P.fontPx, I = P.topPad, L = P.bandH, ee = ft(t, s, b, x, .22, g), { legRightW: R, legLeftW: te, legTopH: ne, legBottomH: re } = c(ee), ie = It(s.catAxisFontSizeHpt, x, g), ae = It(s.valAxisFontSizeHpt, x, g), oe = u(s, b, x, g), se = oe.catFontPx, z = oe.valFontPx, B = oe.catBandH, V = oe.valBandW, H = L + ne + ae / 2 + 2, ce = o(ie) + B + re, de = x - H - ce, U = Ut(k, s.series, de / g), pe = Math.max(8, Math.min(11, x / 20)), W = _(k?.fontSizeHpt, g) ?? pe, me = 0;
	if (k && U && !k.hidden) {
		let e = t.font;
		t.font = Be(W, Q(s, k.fontFace, "minor"), !1, k.fontItalic ?? !1);
		let n = 0;
		for (let e of U.majorLines) n = Math.max(n, t.measureText(p(e, k.formatCode ?? null, s.date1904)).width);
		me = n + 18, t.font = e;
	}
	let G = k && k.title ? i(k.titleFontSizeHpt, g) + 8 : 0, he = jt(s, j, M, de / g, T), ge = 0;
	if (!s.valAxisHidden && s.valAxisTickLabelPos !== "none" && s.plotAreaManualLayout != null && s.plotAreaManualLayout.layoutTarget !== "inner") {
		let e = t.font;
		t.font = `${ae}px ${Q(s, s.valAxisFontFace, "minor")}`;
		for (let e of he.majorLines) ge = Math.max(ge, t.measureText(At(s, e, T)).width);
		t.font = e;
	}
	let _e = {
		t: H,
		r: R + b * .05 + me + G,
		b: ce,
		l: ae * 2.2 + 10 + V + te
	}, ve = n({
		valAxisHidden: s.valAxisHidden,
		catAxisHidden: s.catAxisHidden,
		valLabelWidth: ge,
		valLabelFontPx: ae,
		catLabelFontPx: ie,
		valLabelGapPx: s.valAxisFontSizeHpt == null ? 6 : e(ae),
		catLabelGapPx: s.catAxisFontSizeHpt == null ? 5 : f(ie),
		outerTextMarginPx: m * g,
		valTitleBandW: V,
		catTitleBandH: B,
		secondaryBandW: me + G
	});
	Jt(t, s, v, y, b, x, y + I, F);
	let { plotRect: { px0: K, py0: q, pw: J, ph: ye } } = r(s, v, y, b, x, g, {
		titleBand: P,
		legendSideReserveFrac: .22,
		legendReserve: ee,
		pad: _e,
		honorPlotAreaManualLayout: !0,
		manualOuterInsets: ve
	});
	if (J <= 0 || ye <= 0) return;
	s.plotAreaBg && (t.fillStyle = `#${s.plotAreaBg}`, t.fillRect(K, q, J, ye));
	let be = jt(s, j, M, ye / g, T);
	if (be.max - be.min === 0) return;
	let xe = (e) => q + ye - be.frac(e) * ye, Se = U ? U.makeToY(q, ye) : xe, Ce = (e) => A(e) ? Se : xe, we = ue(s.catAxisLineColor, s.catAxisLineWidthEmu, g), Te = ue(s.valAxisLineColor, s.valAxisLineWidthEmu, g), Ee = s.catAxisLineColor == null ? void 0 : we.color, De = s.catAxisLineWidthEmu == null ? void 0 : we.width, Oe = s.valAxisLineColor == null ? void 0 : Te.color, ke = s.valAxisLineWidthEmu == null ? void 0 : Te.width, Ae = fe(s), je = Dt(s), Me = Ae ? (e) => K + ((je ? C - 1 - e : e) + .5) / C * J : (e) => {
		let t = je ? C - 1 - e : e;
		return K + (C === 1 ? J / 2 : t / (C - 1) * J);
	};
	if (!s.valAxisHidden) {
		t.font = `${ae}px ${Q(s, s.valAxisFontFace, "minor")}`, t.textBaseline = "middle";
		let n = vt(s, g), r = yt(s, g);
		for (let e of be.minorLines) _t(t, K, J, xe(e), !1, r);
		let i = Ot(s), a = s.valAxisTickLabelPos !== "none";
		for (let r of be.majorLines) {
			let o = xe(r);
			if (i && _t(t, K, J, o, r === 0, n), gt(t, s.valAxisMajorTickMark, "val", K, o, Oe, ke, !1, s.valAxisLineHidden, "major", g), a) {
				t.fillStyle = s.valAxisFontColor ? `#${s.valAxisFontColor}` : "#555", t.textAlign = "right";
				let n = s.valAxisFontSizeHpt == null ? 6 : e(ae);
				t.fillText(At(s, r, T), K - n, o);
			}
		}
		if (s.valAxisMinorTickMark && s.valAxisMinorTickMark !== "none") for (let e of be.minorTicks) gt(t, s.valAxisMinorTickMark, "val", K, xe(e), Oe, ke, !1, s.valAxisLineHidden, "minor", g);
	}
	if (k && U && Wt(t, k, U, Se, K, J, g), !s.catAxisHidden && St(s)) {
		let e = Ct(s, g);
		t.strokeStyle = e.color, t.lineWidth = e.width;
		let n = e.dash.length > 0 && t.getLineDash ? t.getLineDash() : [];
		e.dash.length > 0 && t.setLineDash(e.dash);
		for (let e of Tt(s, C)) {
			let n = K + e * J;
			t.beginPath(), t.moveTo(n, q), t.lineTo(n, q + ye), t.stroke();
		}
		e.dash.length > 0 && t.setLineDash(n);
	}
	!s.catAxisHidden && !s.catAxisLineHidden && (t.strokeStyle = we.color, t.lineWidth = we.width, t.beginPath(), t.moveTo(K, q + ye), t.lineTo(K + J, q + ye), t.stroke()), !s.valAxisHidden && !s.valAxisLineHidden && (t.strokeStyle = Te.color, t.lineWidth = Te.width, t.beginPath(), t.moveTo(K, q), t.lineTo(K, q + ye), t.stroke());
	let Ne = Math.max(1, 2.25 * g), Pe = Math.max(2, 2.5 * g), Fe = It(s.dataLabelFontSizeHpt, x, g), Ie = [];
	for (let e = 0; e < s.series.length; e++) {
		let n = s.series[e], r = Re(n.dataPointOverrides), i = Le(e, n), a = Ce(n);
		t.strokeStyle = n.lineColor ? `#${n.lineColor}` : i, t.lineWidth = n.lineWidthEmu == null ? Ne : le(n.lineWidthEmu, g), t.setLineDash(An(n.chartexStyle?.lineDash ?? void 0)), t.lineCap = n.chartexStyle?.lineCap === "rnd" ? "round" : n.chartexStyle?.lineCap === "sq" ? "square" : "butt", t.lineJoin = n.chartexStyle?.lineJoin === "round" || n.chartexStyle?.lineJoin === "bevel" ? n.chartexStyle.lineJoin : "miter", t.beginPath();
		let o = n.smooth === !0, c = [], u = () => {
			c.length !== 0 && (t.moveTo(c[0].x, c[0].y), kn(t, c, o), c = []);
		};
		for (let t = 0; t < C; t++) {
			if (!w && n.values[t] == null) {
				if (D === "gap") {
					u();
					continue;
				}
				if (D === "span") continue;
			}
			c.push({
				x: Me(t),
				y: a(O(e, t))
			});
		}
		u(), n.lineHidden !== !0 && t.stroke();
		let f = (t) => O(e, t);
		for (let e of n.errBars ?? []) Mn(t, n, e, C, Me, a, f, i);
		t.fillStyle = i;
		let p = n.showMarker !== !1, m = jn(n), h = (n.dataLabelOverrides?.length ?? 0) > 0 || n.seriesDataLabels != null;
		h && Ie.push(() => {
			Nn(t, n, S, C, Me, a, f, ye, g, s.date1904 ?? !1, w || D === "zero", Q(s, s.dataLabelFontFace, "minor"), s.dataLabelPosition ?? "r", {
				x: v,
				y: q,
				w: b,
				h: ye
			}, {
				x: v,
				y,
				w: b,
				h: x
			}, T && E ? (e) => (n.values[e] ?? 0) / E[e] : void 0, (e) => {
				if (!p) return 0;
				if (!m) return Pe;
				let t = r.get(e);
				return (t?.markerSymbol ?? n.markerSymbol ?? "circle") === "none" ? 0 : (t?.markerSize ?? n.markerSize ?? 5) / 2 * g;
			}, (e) => Q(s, e, "minor"));
		});
		for (let o = 0; o < C; o++) {
			if (!w && n.values[o] == null && D !== "zero") continue;
			let s = O(e, o);
			if (p) if (m) {
				let e = r.get(o), c = e?.markerSymbol ?? n.markerSymbol ?? "circle";
				if (c !== "none") {
					let r = e?.markerSize ?? n.markerSize ?? 5, l = e?.markerFill ?? e?.color ?? n.markerFill ?? i, u = e?.markerLine ?? n.markerLine ?? null, d = e?.markerLineWidthEmu ?? n.markerLineWidthEmu;
					Sn(t, Me(o), a(s), c, r, l, u, g, d == null ? void 0 : le(d, g));
				}
			} else t.beginPath(), t.arc(Me(o), a(s), Pe, 0, Math.PI * 2), t.fill();
		}
		s.showDataLabels && !h && Ie.push(() => {
			for (let r = 0; r < C; r++) {
				if (!w && n.values[r] == null && D !== "zero") continue;
				let i = O(e, r);
				Tn(t, Me(r), a(i), d(n.values[r] ?? 0), s.dataLabelPosition ?? "r", Fe, void 0, !1, Q(s, s.dataLabelFontFace, "minor"), p ? Pe + 1 : 2, {
					x: K,
					y: q,
					w: J,
					h: ye
				});
			}
		}), Ft(t, n, i, Me, a, g, void 0, {
			chart: s,
			chartRect: l,
			plotRect: {
				x: K,
				y: q,
				w: J,
				h: ye
			}
		});
	}
	for (let e of Ie) e();
	if (!s.catAxisHidden) {
		let e = s.catAxisFontColor ? `#${s.catAxisFontColor}` : "#555";
		t.fillStyle = e, t.textAlign = "center", t.textBaseline = "top", t.font = `${ie}px ${Q(s, s.catAxisFontFace, "minor")}`;
		let n = Math.max(1, Math.floor(s.catAxisTickMarkSkip ?? 1));
		for (let e = 0; e < C; e += n) gt(t, s.catAxisMajorTickMark, "cat", q + ye, Me(e), Ee, De, !1, s.catAxisLineHidden, "major", g);
		let r = zt(s), i = Math.max(1, Math.floor(s.catAxisTickLabelSkip ?? 1)), a = Vt(s);
		for (let n = 0; n < C; n += i) {
			let i = Me(n);
			if (!r) continue;
			t.fillStyle = e;
			let o = h((S[n] ?? "").toString(), s.catAxisFormatCode, s.date1904);
			if (!o) continue;
			let c = s.catAxisFontSizeHpt == null ? 5 : f(ie);
			Ht(t, o, i, q + ye + c, a);
		}
	}
	if (k && U) {
		let e = s.valAxisFontColor ? `#${s.valAxisFontColor}` : "#555";
		Gt(t, s, k, U, Se, l, K, q, J, ye, g, W, me, e, s.date1904);
	}
	ht(t, s, ee, v, y, b, x, K, q, J, ye, L + 2, g), Ke(t, s, v, y, b, x, K, q, J, ye, te, re, se, z);
}
function en(e, t, n, i) {
	let { x: s, y: l, w: d, h: f } = n, m = Yt(t), g = m.length;
	if (g === 0) return;
	let _ = t.series, v = _.length >= 4, y = v ? 0 : -1, b = +!!v, x = v ? 2 : 1, S = v ? 3 : 2, C = _[b], w = _[x], T = _[S], D = y >= 0 ? _[y] : void 0, O = a(t, f, i), k = O.fontPx, A = O.topPad, j = O.bandH, M = ft(e, t, d, f, .22, i), { legRightW: N, legLeftW: P, legBottomH: F, legTopH: I } = c(M), L = It(t.catAxisFontSizeHpt, f, i), ee = It(t.valAxisFontSizeHpt, f, i), R = u(t, d, f, i), te = R.catFontPx, ne = R.valFontPx, re = R.catBandH, ie = R.valBandW, ae = j + I + ee / 2 + 2, oe = o(L) + re + F, se = {
		t: ae,
		r: N + d * .05,
		b: oe,
		l: ee * 2.2 + 10 + ie + P
	};
	Jt(e, t, s, l, d, f, l + A, k);
	let { plotRect: { px0: z, py0: B, pw: V, ph: H } } = r(t, s, l, d, f, i, {
		titleBand: O,
		legendSideReserveFrac: .22,
		legendReserve: M,
		pad: se,
		honorPlotAreaManualLayout: !0
	});
	if (V <= 0 || H <= 0) return;
	t.plotAreaBg && (e.fillStyle = `#${t.plotAreaBg}`, e.fillRect(z, B, V, H));
	let ce = Infinity, ue = -Infinity;
	for (let e of _) for (let t = 0; t < g; t++) {
		let n = e.values[t];
		n != null && (ce = Math.min(ce, n), ue = Math.max(ue, n));
	}
	isFinite(ce) || (ce = 0, ue = 1), t.valMin != null && (ce = t.valMin), t.valMax != null && (ue = t.valMax);
	let de = jt(t, ce, ue, H / i);
	if (de.max - de.min === 0) return;
	let U = (e) => B + H - de.frac(e) * H, pe = fe(t), W = Dt(t), me = pe ? (e) => z + ((W ? g - 1 - e : e) + .5) / g * V : (e) => {
		let t = W ? g - 1 - e : e;
		return z + (g === 1 ? V / 2 : t / (g - 1) * V);
	};
	if (!t.valAxisHidden) {
		e.font = `${ee}px ${Q(t, t.valAxisFontFace, "minor")}`, e.textBaseline = "middle";
		let n = vt(t, i), r = yt(t, i);
		for (let t of de.minorLines) _t(e, z, V, U(t), !1, r);
		let a = Ot(t), o = t.valAxisTickLabelPos !== "none";
		for (let r of de.majorLines) {
			let s = U(r);
			a && _t(e, z, V, s, r === 0, n), gt(e, t.valAxisMajorTickMark, "val", z, s, void 0, void 0, !1, t.valAxisLineHidden, "major", i), o && (e.fillStyle = t.valAxisFontColor ? `#${t.valAxisFontColor}` : "#555", e.textAlign = "right", e.fillText(p(r, t.valAxisFormatCode, t.date1904), z - 6, s));
		}
		for (let n of de.minorTicks) gt(e, t.valAxisMinorTickMark, "val", z, U(n), void 0, void 0, !1, t.valAxisLineHidden, "minor", i);
	}
	if (e.strokeStyle = "#aaa", e.lineWidth = 1, !t.catAxisHidden && !t.catAxisLineHidden && (e.beginPath(), e.moveTo(z, B + H), e.lineTo(z + V, B + H), e.stroke()), !t.valAxisHidden && !t.valAxisLineHidden && (e.beginPath(), e.moveTo(z, B), e.lineTo(z, B + H), e.stroke()), t.stockUpDownBars && D && T) {
		let n = t.stockUpDownBarStyle, r = n?.gapWidthPercent != null && Number.isFinite(n.gapWidthPercent) && n.gapWidthPercent >= 0 ? n.gapWidthPercent : 150, a = pe ? V / g : g > 1 ? V / (g - 1) : V, o = Math.max(0, a / (1 + r / 100));
		for (let t = 0; t < g; t++) {
			let r = D.values[t], a = T.values[t];
			if (r == null || a == null || !Number.isFinite(r) || !Number.isFinite(a)) continue;
			let s = U(r), c = U(a), l = Math.abs(c - s);
			if (!(o > 0) || !(l > 0) || !Number.isFinite(l)) continue;
			let u = a >= r ? n?.up : n?.down, d = a >= r ? "FFFFFF" : "000000", f = me(t) - o / 2, p = Math.min(s, c);
			u?.fillHidden || (e.fillStyle = `#${u?.fillColor ?? d}`, e.fillRect(f, p, o, l)), u?.lineHidden || (e.strokeStyle = `#${u?.lineColor ?? "000000"}`, e.lineWidth = u?.lineWidthEmu == null ? Math.max(1, .75 * i) : le(u.lineWidthEmu, i), e.setLineDash([]), e.strokeRect(f, p, o, l));
		}
	}
	if ((t.stockHiLowLines ?? !0) && C != null && w != null && C && w) {
		e.strokeStyle = t.stockHiLowLineColor ? `#${t.stockHiLowLineColor}` : "#595959", e.lineWidth = Math.max(1, .75 * i), e.setLineDash([]);
		for (let t = 0; t < g; t++) {
			let n = C.values[t], r = w.values[t];
			if (n == null || r == null) continue;
			let i = me(t);
			e.beginPath(), e.moveTo(i, U(n)), e.lineTo(i, U(r)), e.stroke();
		}
	}
	let G = (t, n, r) => {
		if (!t) return;
		let a = Le(n, t), o = t.markerSymbol ?? null, s = o != null && o !== "none" && jn(t), c = Math.max(3, V / g * .22);
		for (let n = 0; n < g; n++) {
			let l = t.values[n];
			if (l == null) continue;
			let u = me(n), d = U(l);
			if (s) {
				Sn(e, u, d, o, t.markerSize ?? 3, t.markerFill ?? a, t.markerLine ?? null, i, t.markerLineWidthEmu == null ? void 0 : le(t.markerLineWidthEmu, i));
				continue;
			}
			e.strokeStyle = a, e.lineWidth = Math.max(1, .75 * i), e.beginPath();
			let f = r === "right" ? u : r === "left" ? u - c : u - c / 2, p = r === "right" ? u + c : r === "left" ? u : u + c / 2;
			e.moveTo(f, d), e.lineTo(p, d), e.stroke();
		}
	};
	if (G(D, y, "left"), G(T, S, "right"), _.length < 3) for (let e = 0; e < _.length; e++) G(_[e], e, "both");
	if (!t.catAxisHidden) {
		let n = Math.max(1, Math.ceil(g / 8)), r = t.catAxisFontColor ? `#${t.catAxisFontColor}` : "#555";
		e.fillStyle = r, e.textAlign = "center", e.textBaseline = "top", e.font = `${L}px ${Q(t, t.catAxisFontFace, "minor")}`;
		let a = V / g * n - 4, o = zt(t), s = Vt(t);
		for (let c = 0; c < g; c += n) {
			let n = me(c);
			gt(e, t.catAxisMajorTickMark, "cat", B + H, n, void 0, void 0, !1, t.catAxisLineHidden, "major", i), o && (e.fillStyle = r, Ht(e, E(e, h((m[c] ?? "").toString(), t.catAxisFormatCode, t.date1904), s === 0 ? a : H * .4), n, B + H + 5, s));
		}
	}
	ht(e, t, M, s, l, d, f, z, B, V, H, j + 2, i), Ke(e, t, s, l, d, f, z, B, V, H, P, F, te, ne);
}
function tn(t, s, l, d) {
	let { x: g, y: v, w: y, h: b } = l, x = Yt(s), S = x.length;
	if (S === 0) return;
	let C = s.series.map((e, t) => ({
		series: e,
		chartIndex: t
	})).filter(({ series: e }) => e.seriesType == null || e.seriesType === "area"), w = s.series.map((e, t) => ({
		series: e,
		chartIndex: t
	})).filter(({ series: e }) => e.seriesType === "line");
	if (C.length === 0 && w.length === 0) return;
	let T = s.chartType === "stackedArea" || s.chartType === "stackedAreaPct", E = s.chartType === "stackedAreaPct", D = E ? x.map((e, t) => {
		let n = 0;
		for (let { series: e } of C) n += Math.abs(e.values[t] ?? 0);
		return n || 1;
	}) : null, O = (e, t) => {
		let n = C[e].series.values[t] ?? 0;
		return E && D ? n / D[t] * 100 : n;
	}, k = !T && s.secondaryValAxis && s.series.some((e) => e.useSecondaryAxis === !0) ? s.secondaryValAxis : null, A = (e) => k != null && e.useSecondaryAxis === !0, j = a(s, b, d), M = j.fontPx, N = j.topPad, P = j.bandH, F = It(s.catAxisFontSizeHpt, b, d), I = It(s.valAxisFontSizeHpt, b, d), L = ft(t, s, y, b, .22, d), { legRightW: ee, legLeftW: R, legTopH: te, legBottomH: ne } = c(L), re = u(s, y, b, d), ie = re.catFontPx, ae = re.valFontPx, oe = re.catBandH, se = re.valBandW, z = P + te + I / 2 + 2, B = o(F) + oe + ne, V = b - z - B, H = Ut(k, s.series, V / d), ce = Math.max(8, Math.min(11, b / 20)), de = _(k?.fontSizeHpt, d) ?? ce, U = 0;
	if (k && H && !k.hidden) {
		let e = t.font;
		t.font = `${de}px ${Q(s, k.fontFace, "minor")}`;
		let n = 0;
		for (let e of H.majorLines) n = Math.max(n, t.measureText(p(e, k.formatCode ?? null, s.date1904)).width);
		U = n + 18, t.font = e;
	}
	let pe = k && k.title ? i(k.titleFontSizeHpt, d) + 8 : 0, W = (() => {
		let e = Infinity, t = -Infinity;
		for (let n = 0; n < S; n++) {
			if (T) {
				let r = 0, i = 0;
				for (let e = 0; e < C.length; e++) {
					let t = O(e, n);
					t >= 0 ? r += t : i += t;
				}
				e = Math.min(e, i), t = Math.max(t, r);
			} else for (let { series: r } of C) {
				if (A(r)) continue;
				let i = r.values[n];
				i != null && (e = Math.min(e, i), t = Math.max(t, i));
			}
			for (let { series: r } of w) {
				if (A(r)) continue;
				let i = r.values[n];
				i != null && (e = Math.min(e, i), t = Math.max(t, i));
			}
		}
		return !isFinite(e) || !isFinite(t) ? {
			min: 0,
			max: 1
		} : E ? {
			min: e < 0 ? -100 : 0,
			max: t > 0 ? 100 : 0
		} : {
			min: e,
			max: t
		};
	})(), me = jt(s, W.min, W.max, V / d, E), G = s.valAxisFontSizeHpt == null ? Math.max(8, Math.min(11, V / 20)) : I, he = 0;
	if (!s.valAxisHidden && s.plotAreaManualLayout != null && s.plotAreaManualLayout.layoutTarget !== "inner") {
		let e = t.font;
		t.font = `${G}px ${Q(s, s.valAxisFontFace, "minor")}`;
		for (let e of me.majorLines) he = Math.max(he, t.measureText(At(s, e, E)).width);
		t.font = e;
	}
	let ge = n({
		valAxisHidden: s.valAxisHidden,
		catAxisHidden: s.catAxisHidden,
		valLabelWidth: he,
		valLabelFontPx: G,
		catLabelFontPx: F,
		valLabelGapPx: s.valAxisFontSizeHpt == null ? 6 : e(G),
		catLabelGapPx: s.catAxisFontSizeHpt == null ? 3 : f(F),
		outerTextMarginPx: m * d,
		valTitleBandW: se,
		catTitleBandH: oe,
		secondaryBandW: U + pe
	}), _e = {
		t: z,
		r: ee + y * .05 + U + pe,
		b: B,
		l: y * .12 + se + R
	};
	Jt(t, s, g, v, y, b, v + N, M);
	let { plotRect: { px0: ve, py0: K, pw: q, ph: J } } = r(s, g, v, y, b, d, {
		titleBand: j,
		legendSideReserveFrac: .22,
		legendReserve: L,
		pad: _e,
		honorPlotAreaManualLayout: !0,
		manualOuterInsets: ge
	});
	if (q <= 0 || J <= 0) return;
	s.plotAreaBg && (t.fillStyle = `#${s.plotAreaBg}`, t.fillRect(ve, K, q, J));
	let ye = jt(s, W.min, W.max, J / d, E), be = fe(s), xe = Dt(s), Se = be ? (e) => ve + ((xe ? S - 1 - e : e) + .5) / S * q : (e) => {
		let t = xe ? S - 1 - e : e;
		return ve + (S === 1 ? q / 2 : t / (S - 1) * q);
	}, Ce = (e) => K + J - ye.frac(e) * J, we = H ? H.makeToY(K, J) : Ce, Te = (e) => A(e) ? we : Ce, { color: Ee, width: De } = ue(s.catAxisLineColor, s.catAxisLineWidthEmu, d), { color: Oe, width: ke } = ue(s.valAxisLineColor, s.valAxisLineWidthEmu, d);
	if (!s.valAxisHidden) {
		let e = vt(s, d), n = yt(s, d);
		if (s.valAxisMinorGridlines) for (let e of ye.minorLines) _t(t, ve, q, Ce(e), !1, n);
		if (Ot(s)) for (let n of ye.majorLines) _t(t, ve, q, Ce(n), n === 0, e);
	}
	if (k && H && Wt(t, k, H, we, ve, q, d), !s.catAxisHidden && St(s)) {
		let e = Ct(s, d);
		t.strokeStyle = e.color, t.lineWidth = e.width;
		let n = e.dash.length > 0 && t.getLineDash ? t.getLineDash() : [];
		e.dash.length > 0 && t.setLineDash(e.dash);
		for (let e of Tt(s, S)) {
			let n = ve + e * q;
			t.beginPath(), t.moveTo(n, K), t.lineTo(n, K + J), t.stroke();
		}
		e.dash.length > 0 && t.setLineDash(n);
	}
	let Ae = T ? Array(S).fill(0) : null, je = T ? C.map((e, t) => t) : C.map((e, t) => C.length - 1 - t);
	for (let e of je) {
		let { series: n, chartIndex: r } = C[e], i = Le(r, n), a = K + J, o = Te(n), s = n.smooth === !0;
		if (t.beginPath(), T && Ae) {
			let n = [];
			for (let t = 0; t < S; t++) n.push({
				x: Se(t),
				y: Ce(O(e, t) + Ae[t])
			});
			t.moveTo(n[0].x, n[0].y), kn(t, n, s);
			for (let e = S - 1; e >= 0; e--) t.lineTo(Se(e), Ce(Ae[e]));
			for (let t = 0; t < S; t++) Ae[t] += O(e, t);
		} else {
			let e = [];
			for (let t = 0; t < S; t++) e.push({
				x: Se(t),
				y: o(n.values[t] ?? 0)
			});
			t.moveTo(Se(0), a), t.lineTo(e[0].x, e[0].y), kn(t, e, s), t.lineTo(Se(S - 1), a);
		}
		t.closePath(), t.fillStyle = i, t.fill(), n.lineHidden !== !0 && (t.strokeStyle = n.lineColor ? `#${n.lineColor}` : i, t.lineWidth = n.lineWidthEmu ? le(n.lineWidthEmu, d) : 1.5, t.setLineDash([]), t.stroke());
	}
	{
		let e = Math.max(2, 2.5 * d), n = (e, t) => {
			if (T) {
				let n = 0;
				for (let r = 0; r <= e; r++) n += O(r, t);
				return n;
			}
			return C[e].series.values[t] ?? 0;
		};
		for (let r = 0; r < C.length; r++) {
			let { series: i, chartIndex: a } = C[r], o = Re(i.dataPointOverrides), c = Le(a, i), l = Te(i), u = (e) => n(r, e);
			for (let e of i.errBars ?? []) Mn(t, i, e, S, Se, l, u, c);
			if (i.showMarker === !0 || jn(i)) for (let n = 0; n < S; n++) {
				if (i.values[n] == null) continue;
				let r = o.get(n), a = r?.markerSymbol ?? i.markerSymbol ?? "circle";
				if (a === "none") continue;
				let s = Se(n), f = l(u(n));
				if (jn(i)) {
					let e = r?.markerSize ?? i.markerSize ?? 5, n = r?.markerFill ?? r?.color ?? i.markerFill ?? c, o = r?.markerLine ?? i.markerLine ?? null, l = r?.markerLineWidthEmu ?? i.markerLineWidthEmu;
					Sn(t, s, f, a, e, n, o, d, l == null ? void 0 : le(l, d));
				} else t.fillStyle = c, t.beginPath(), t.arc(s, f, e, 0, Math.PI * 2), t.fill();
			}
			Nn(t, i, x, S, Se, l, u, J, d, s.date1904 ?? !1, !0, Q(s, s.dataLabelFontFace, "minor"), s.dataLabelPosition ?? "ctr", {
				x: ve,
				y: K,
				w: q,
				h: J
			}, {
				x: g,
				y: v,
				w: y,
				h: b
			}, E && D ? (e) => (i.values[e] ?? 0) / D[e] : void 0, void 0, (e) => Q(s, e, "minor"));
		}
	}
	for (let { series: e, chartIndex: n } of w) {
		let r = Re(e.dataPointOverrides), i = Le(n, e), a = e.lineColor ? `#${e.lineColor}` : i, o = Te(e);
		if (e.lineHidden !== !0) {
			t.strokeStyle = a, t.lineWidth = e.lineWidthEmu ? le(e.lineWidthEmu, d) : Math.max(1, 2.25 * d), t.setLineDash([]), t.beginPath();
			let n = [], r = () => {
				n.length !== 0 && (t.moveTo(n[0].x, n[0].y), kn(t, n, e.smooth === !0), n = []);
			};
			for (let t = 0; t < S; t++) {
				let i = e.values[t];
				i == null && ((s.dispBlanksAs ?? "gap") === "gap" && r(), (s.dispBlanksAs ?? "gap") !== "zero") || n.push({
					x: Se(t),
					y: o(i ?? 0)
				});
			}
			r(), t.stroke();
		}
		let c = (t) => e.values[t] ?? 0;
		for (let n of e.errBars ?? []) Mn(t, e, n, S, Se, o, c, a);
		if (e.showMarker === !0 || jn(e)) for (let n = 0; n < S; n++) {
			let i = e.values[n];
			if (i == null) continue;
			let s = r.get(n), c = s?.markerSymbol ?? e.markerSymbol ?? "circle";
			c !== "none" && Sn(t, Se(n), o(i), c, s?.markerSize ?? e.markerSize ?? 5, s?.markerFill ?? s?.color ?? e.markerFill ?? a, s?.markerLine ?? e.markerLine ?? null, d, (s?.markerLineWidthEmu ?? e.markerLineWidthEmu) == null ? void 0 : le(s?.markerLineWidthEmu ?? e.markerLineWidthEmu, d));
		}
		Nn(t, e, x, S, Se, o, c, J, d, s.date1904 ?? !1, !1, Q(s, s.dataLabelFontFace, "minor"), s.dataLabelPosition ?? "r", {
			x: ve,
			y: K,
			w: q,
			h: J
		}, {
			x: g,
			y: v,
			w: y,
			h: b
		}, void 0, void 0, (e) => Q(s, e, "minor")), Ft(t, e, a, Se, o, d, void 0, {
			chart: s,
			chartRect: l,
			plotRect: {
				x: ve,
				y: K,
				w: q,
				h: J
			}
		});
	}
	if (!s.valAxisHidden) {
		let n = s.valAxisFontSizeHpt == null ? Math.max(8, Math.min(11, J / 20)) : I;
		t.font = `${n}px ${Q(s, s.valAxisFontFace, "minor")}`, t.textBaseline = "middle";
		for (let r of ye.majorLines) {
			let i = Ce(r);
			gt(t, s.valAxisMajorTickMark, "val", ve, i, Oe, ke, !1, s.valAxisLineHidden, "major", d), t.fillStyle = s.valAxisFontColor ? `#${s.valAxisFontColor}` : "#555", t.textAlign = "right";
			let a = s.valAxisFontSizeHpt == null ? 6 : e(n);
			t.fillText(At(s, r, E), ve - a, i);
		}
		if (s.valAxisMinorTickMark && s.valAxisMinorTickMark !== "none") for (let e of ye.minorTicks) gt(t, s.valAxisMinorTickMark, "val", ve, Ce(e), Oe, ke, !1, s.valAxisLineHidden, "minor", d);
	}
	if (!s.catAxisHidden && !s.catAxisLineHidden && (t.strokeStyle = Ee, t.lineWidth = De, t.beginPath(), t.moveTo(ve, K + J), t.lineTo(ve + q, K + J), t.stroke()), !s.valAxisHidden && !s.valAxisLineHidden && s.valAxisLineColor != null && (t.strokeStyle = Oe, t.lineWidth = ke, t.beginPath(), t.moveTo(ve, K), t.lineTo(ve, K + J), t.stroke()), !s.catAxisHidden && s.catAxisMajorTickMark && s.catAxisMajorTickMark !== "none") {
		let e = Math.max(1, Math.floor(s.catAxisTickMarkSkip ?? 1));
		if (be) for (let n = 0; n <= S; n += e) gt(t, s.catAxisMajorTickMark, "cat", K + J, ve + n / S * q, Ee, De, !1, s.catAxisLineHidden, "major", d);
		else for (let n = 0; n < S; n += e) gt(t, s.catAxisMajorTickMark, "cat", K + J, Se(n), Ee, De, !1, s.catAxisLineHidden, "major", d);
	}
	if (!s.catAxisHidden) {
		let e = s.catAxisFontSizeHpt == null ? Math.max(8, Math.min(11, q / S * .8)) : F;
		t.fillStyle = s.catAxisFontColor ? `#${s.catAxisFontColor}` : "#555", t.textAlign = "center", t.textBaseline = "top", t.font = `${e}px ${Q(s, s.catAxisFontFace, "minor")}`;
		let n = x.map((e) => h((e ?? "").toString(), s.catAxisFormatCode, s.date1904)), r = Math.max(1, Math.floor(s.catAxisTickLabelSkip ?? 1));
		for (let i = 0; i < S; i += r) {
			let r = n[i] ?? "";
			if (!r) continue;
			let a = s.catAxisFontSizeHpt == null ? 3 : f(e);
			t.fillText(r, Se(i), K + J + a);
		}
	}
	if (k && H) {
		let e = s.valAxisFontColor ? `#${s.valAxisFontColor}` : "#555";
		Gt(t, s, k, H, we, l, ve, K, q, J, d, de, U, e, s.date1904);
	}
	ht(t, s, L, g, v, y, b, ve, K, q, J, P + 2, d), Ke(t, s, g, v, y, b, ve, K, q, J, R, ne, ie, ae);
}
var nn = .88;
function rn(e, t) {
	let n = e.ofPie, r = t.map((e, t) => ({
		value: e,
		sourceIndex: t
	})).filter((e) => Number.isFinite(e.value) && e.value > 0), i = /* @__PURE__ */ new Set();
	if (r.length < 2) return i;
	let a = n?.splitType ?? "auto", o = n?.splitPos;
	if (a === "cust") for (let e of n?.customSplitIndices ?? []) r.some((t) => t.sourceIndex === e) && i.add(e);
	else if (a === "val" && o != null && Number.isFinite(o)) for (let e of r) e.value <= o && i.add(e.sourceIndex);
	else if (a === "percent" && o != null && Number.isFinite(o)) {
		let e = r.reduce((e, t) => e + t.value, 0);
		for (let t of r) e > 0 && t.value / e * 100 <= o && i.add(t.sourceIndex);
	} else {
		let e = a === "pos" && o != null && Number.isFinite(o) ? Math.max(0, Math.floor(o)) : 3;
		for (let t of r.slice(-e)) i.add(t.sourceIndex);
	}
	return i.size >= r.length && i.delete(r[0].sourceIndex), i;
}
function an(e, t, n, i) {
	let a = t.series[0];
	if (!a) return;
	let o = a.values.map((e) => e == null ? 0 : Math.abs(e)), s = rn(t, o);
	if (s.size === 0) {
		on(e, {
			...t,
			chartType: "pie"
		}, n, !1, i);
		return;
	}
	let c = [], l = [];
	for (let e = 0; e < o.length; e++) {
		let t = o[e];
		!(t > 0) || !Number.isFinite(t) || (s.has(e) ? l : c).push({
			sourceIndex: e,
			value: t
		});
	}
	if (c.length === 0 || l.length === 0) return;
	let u = {
		...t,
		chartType: "pie"
	}, d = ft(e, u, n.w, n.h, .28, i), f = r(t, n.x, n.y, n.w, n.h, i, {
		titleTopPadFrac: .035,
		titleBottomPadFrac: .035,
		legendSideReserveFrac: .28,
		legendReserve: d,
		radialGapFrac: .02,
		honorPlotAreaManualLayout: !0
	});
	Jt(e, t, n.x, n.y, n.w, n.h, n.y + f.title.topPad, f.title.fontPx);
	let { px0: p, py0: m, pw: h, ph: g } = f.plotRect;
	if (!(h > 0) || !(g > 0)) return;
	let _ = t.ofPie, v = Math.max(.05, Math.min(2, (_?.secondPieSizePercent ?? 75) / 100)), y = Math.max(0, _?.gapWidthPercent ?? 150) / 100, b = Math.min(g * .44, h * .9 / (2 + 2 * v + y)), x = b * v;
	if (!(b > 0) || !(x > 0)) return;
	let S = p + (h - (2 * b + y * b + 2 * x)) / 2, C = S + b, w = S + 2 * b + y * b + x, T = m + g / 2, E = l.reduce((e, t) => e + t.value, 0), D = [...c, {
		sourceIndex: l[0].sourceIndex,
		value: E
	}], O = (n, r, i) => {
		let o = n.reduce((e, t) => e + t.value, 0), s = -Math.PI / 2, c = s, l = s;
		for (let u = 0; u < n.length; u++) {
			let d = n[u], f = o > 0 ? d.value / o * Math.PI * 2 : 0;
			e.beginPath(), e.moveTo(r, T), e.arc(r, T, i, s, s + f), e.closePath(), e.fillStyle = ze(d.sourceIndex, a, t.varyColors !== !1), e.fill(), e.strokeStyle = "#fff", e.lineWidth = 1, e.stroke(), u === n.length - 1 && (c = s, l = s + f), s += f;
		}
		return {
			aggregateStart: c,
			aggregateEnd: l
		};
	}, k = O(D, C, b), A = T - x, j = T + x;
	if ((_?.type ?? "pie") === "bar") {
		let n = T - x, r = x;
		for (let i of l) {
			let o = E > 0 ? 2 * x * i.value / E : 0;
			e.fillStyle = ze(i.sourceIndex, a, t.varyColors !== !1), e.fillRect(w - r / 2, n, r, o), e.strokeStyle = "#fff", e.lineWidth = 1, e.strokeRect(w - r / 2, n, r, o), n += o;
		}
		A = T - x, j = T + x;
	} else O(l, w, x);
	if (_?.seriesLines ?? !0) {
		e.strokeStyle = "#808080", e.lineWidth = Math.max(1, .75 * i), e.setLineDash([]);
		let t = {
			x: C + Math.cos(k.aggregateStart) * b,
			y: T + Math.sin(k.aggregateStart) * b
		}, n = {
			x: C + Math.cos(k.aggregateEnd) * b,
			y: T + Math.sin(k.aggregateEnd) * b
		};
		e.beginPath(), e.moveTo(t.x, t.y), e.lineTo(w - x, A), e.stroke(), e.beginPath(), e.moveTo(n.x, n.y), e.lineTo(w - x, j), e.stroke();
	}
	d && ht(e, u, d, n.x, n.y, n.w, n.h, p, m, h, g, f.title.bandH + 2, i);
}
function on(e, t, n, i, a) {
	let { x: o, y: s, w: c, h: l } = n, u = t.series[0];
	if (!u) return;
	let d = u.categories && u.categories.length > 0 ? u.categories : t.categories, f = u.values.map((e) => Math.abs(e ?? 0)), p = f.reduce((e, t) => e + t, 0);
	if (p === 0) return;
	let m = {
		...t,
		series: [{
			...u,
			categories: d
		}]
	}, h = ft(e, m, c, l, .28, a), g = r(t, o, s, c, l, a, {
		titleTopPadFrac: .035,
		titleBottomPadFrac: .035,
		legendSideReserveFrac: .28,
		legendReserve: h,
		radialGapFrac: .02,
		honorPlotAreaManualLayout: !0
	}), _ = g.title.fontPx, v = g.title.bandH;
	Jt(e, t, o, s, c, l, s + g.title.topPad, _);
	let { px0: y, py0: b, pw: x, ph: S } = g.plotRect, C = g.center.cx, w = g.center.cy, T = Math.min(x, S) * .42, E = -Math.PI / 2 + (t.firstSliceAngle ?? 0) * Math.PI / 180, D = i ? Math.max(1, Math.min(90, t.holeSize ?? 50)) : 0, O = i ? t.series : [u], k = new Map(O.map((e) => [e, Re(e.dataPointOverrides)])), A = (T - D / 100 * T) / O.length, j = (e, t) => {
		let n = k.get(e)?.get(t)?.explosion ?? 0;
		return n > 0 ? n / 100 * T : 0;
	}, M = u.seriesDataLabels ?? {
		showVal: !1,
		showCatName: !1,
		showSerName: !1,
		showPercent: !1
	}, N = u.seriesDataLabels != null || (u.dataLabelOverrides?.length ?? 0) > 0, P = t.showDataLabels && !N, F = Q(t, t.dataLabelFontFace, "minor");
	for (let n = 0; n < O.length; n++) {
		let r = O[n], o = r.values.map((e) => Math.abs(e ?? 0)), s = o.reduce((e, t) => e + t, 0);
		if (s === 0) continue;
		let c = T - n * A, l = c - A, u = E;
		for (let d = 0; d < o.length; d++) {
			let f = o[d] / s * Math.PI * 2, p = ze(d, r, t.varyColors !== !1), m = u + f / 2, h = j(r, d), g = h > 0 ? Math.cos(m) * h : 0, _ = h > 0 ? Math.sin(m) * h : 0;
			e.beginPath(), l > .01 ? (e.arc(C + g, w + _, c, u, u + f), e.arc(C + g, w + _, l, u + f, u, !0)) : (e.moveTo(C + g, w + _), e.arc(C + g, w + _, c, u, u + f)), e.closePath(), e.fillStyle = p, e.fill();
			let v = k.get(r)?.get(d), y = v?.lineHidden ?? r.lineHidden, b = v?.lineColor ?? r.lineColor;
			if (y !== !0 && b) {
				let t = v?.lineWidthEmu ?? r.lineWidthEmu, n = t == null ? Math.max(.5, a * .75) : le(t, a);
				e.save(), e.strokeStyle = `#${b}`, e.lineWidth = n, e.setLineDash(An(v?.lineDash ?? r.chartexStyle?.lineDash ?? void 0)), e.lineCap = r.chartexStyle?.lineCap === "rnd" ? "round" : r.chartexStyle?.lineCap === "sq" ? "square" : "butt", e.lineJoin = r.chartexStyle?.lineJoin === "round" || r.chartexStyle?.lineJoin === "bevel" ? r.chartexStyle.lineJoin : "miter", e.stroke(), e.restore();
			}
			if (P && n === 0 && f > .15) {
				let t = T * (i ? .75 : .6), n = C + g + Math.cos(m) * t, r = w + _ + Math.sin(m) * t, a = Math.round(o[d] / s * 100);
				e.font = `bold ${Math.max(8, T * .1)}px ${F}`, e.fillStyle = "#fff", e.textAlign = "center", e.textBaseline = "middle", e.fillText(`${a}%`, n, r);
			}
			u += f;
		}
	}
	N && sn(e, t, M, u, d, f, p, C, w, T, i ? T - A : 0, E, F, a, y, b, x, S, o, s, c, l), h && ht(e, m, h, o, s, c, l, y, b, x, S, v + 2, a);
}
function sn(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, v, y, b, x, S) {
	let C = Re(r.dataLabelOverrides ?? []), w = /* @__PURE__ */ new Set();
	for (let e = 0; e < a.length; e++) (C.get(e)?.labelBox || n.labelBox) && w.add(e);
	w.size > 0 && fn(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, g, h, v, y, b, x, S, w, C);
	let E = [], D = d;
	for (let d = 0; d < a.length; d++) {
		let O = a[d] / o * Math.PI * 2, A = D + O / 2;
		if (D += O, w.has(d)) continue;
		let M = C.get(d);
		if (M?.deleted) continue;
		let N = M?.showCatName ?? n.showCatName, P = M?.showSerName ?? n.showSerName, F = M?.showVal ?? n.showVal, I = M?.showPercent ?? n.showPercent, L = k({
			customText: M?.text,
			showCategory: N,
			showSeries: P,
			showValue: F,
			showPercent: I,
			category: (i[d] ?? "").toString(),
			seriesName: r.name,
			sourceValue: a[d],
			percentRatio: a[d] / o,
			formatCode: M?.formatCode ?? n.formatCode ?? r.valFormatCode ?? null,
			percentFormatCode: M?.formatCode ?? n.formatCode ?? "0%",
			date1904: t.date1904 ?? !1,
			separator: M?.separator ?? n.separator
		});
		if (!L) continue;
		let ee = (M?.position ?? n.position ?? "bestFit") === "outEnd", R = _(M?.fontSizeHpt ?? n.fontSizeHpt, p) ?? Math.max(8, l * .1), te = M?.fontBold ?? n.fontBold, ne = M?.fontColor ?? n.fontColor, re = En(t, M, p, f, te ?? !1), ie = u > .01 ? (u + l) / 2 : l * nn;
		if (M?.manualLayout) {
			e.font = `${te ? "bold " : ""}${R}px ${f}`, Dn(e, L, {
				kind: "point",
				x: s + Math.cos(A) * ie,
				y: c + Math.sin(A) * ie,
				position: "ctr"
			}, {
				x: m,
				y: h,
				w: g,
				h: v
			}, R, ne ? `#${ne}` : "#fff", M.manualLayout, {
				x: y,
				y: b,
				w: x,
				h: S
			}, re);
			continue;
		}
		if (ee) {
			e.font = `${te ? "bold " : ""}${R}px ${f}`;
			let t = re ? T(e, re, R, ne ? `#${ne}` : "#333") : null, n = R * 1.15, r = t ? [] : j(L, Math.max(0, x - R), Math.max(0, S - R), n, (t) => e.measureText(t).width);
			if (re && !t || !t && r.length === 0) continue;
			let i = t?.width ?? r.reduce((t, n) => Math.max(t, e.measureText(n).width), 0), a = t?.height ?? R + Math.max(0, r.length - 1) * n;
			E.push(un(r, A, s, c, l, Math.min(i, Math.max(0, x - R)), Math.min(a, Math.max(0, S - R)), n, R, te ?? !1, ne ? `#${ne}` : "#333", t ?? void 0));
			continue;
		}
		let ae = ie, oe = s + Math.cos(A) * ae, se = c + Math.sin(A) * ae;
		e.font = `${te ? "bold " : ""}${R}px ${f}`;
		let z = 2 * ae * Math.sin(Math.min(Math.PI, Math.abs(O)) / 2) - R, B = u > .01 ? l - u - R : l - R;
		if (!(z > 0) || !(B > 0)) continue;
		let V = Xt({
			x: oe - z / 2,
			y: se - B / 2,
			w: z,
			h: B
		}, {
			x: m,
			y: h,
			w: g,
			h: v
		});
		V && Dn(e, L, {
			kind: "point",
			x: oe,
			y: se,
			position: "ctr"
		}, V, R, ne ? `#${ne}` : "#fff", void 0, {
			x: y,
			y: b,
			w: x,
			h: S
		}, re);
	}
	dn(e, n, E, s, c, l, f, p, y, b, x, S);
}
function cn(e, t, n, r, i, a) {
	let o = Math.max(Math.abs(n - e) - i, 0), s = Math.max(Math.abs(r - t) - a, 0);
	return Math.hypot(o, s);
}
function ln(e, t, n, r, i) {
	let a = Math.cos(e), o = Math.sin(e), s = t + i, c = 0, l = s + Math.hypot(n, r);
	for (let e = 0; e < 32; e++) {
		let e = (c + l) / 2;
		cn(0, 0, a * e, o * e, n, r) >= s ? l = e : c = e;
	}
	return l;
}
function un(e, t, n, r, i, a, o, s, c, l, u, d) {
	let f = c * .5, p = ln(t, i, a / 2, o / 2, f), m = n + Math.cos(t) * p, h = r + Math.sin(t) * p;
	return {
		lines: e,
		rich: d,
		rimX: n + Math.cos(t) * i,
		rimY: r + Math.sin(t) * i,
		boxW: a,
		boxH: o,
		lineHeight: s,
		fontPx: c,
		bold: l,
		fontColor: u,
		cxBox: m,
		cyBox: h,
		initialCx: m,
		initialCy: h,
		leftSide: Math.cos(t) < 0
	};
}
function dn(e, t, n, r, i, a, o, s, c, l, u, d) {
	if (n.length === 0) return;
	let f = l, p = l + d, m = (e) => {
		e.sort((e, t) => e.cyBox - t.cyBox);
		for (let t = 1; t < e.length; t++) {
			let n = e[t - 1], r = e[t], i = n.cyBox + (n.boxH + r.boxH) / 2;
			r.cyBox < i && (r.cyBox = i);
		}
		if (e.length === 0) return;
		let t = e[e.length - 1].cyBox + e[e.length - 1].boxH / 2 - p;
		if (t > 0) for (let n of e) n.cyBox -= t;
		let n = f - (e[0].cyBox - e[0].boxH / 2);
		if (n > 0) for (let t of e) t.cyBox += n;
	};
	m(n.filter((e) => !e.leftSide)), m(n.filter((e) => e.leftSide));
	for (let e of n) {
		let t = a + e.fontPx * .5, n = e.boxW / 2, o = e.boxH / 2, s = Math.max(Math.abs(e.cyBox - i) - o, 0);
		if (s < t) {
			let i = Math.sqrt(Math.max(0, t * t - s * s));
			e.cxBox = e.leftSide ? Math.min(e.cxBox, r - i - n) : Math.max(e.cxBox, r + i + n);
		}
		let l = On(e.cxBox, c + n, c + u - n);
		cn(r, i, l, e.cyBox, n, o) >= t && (e.cxBox = l);
	}
	e.save(), e.beginPath(), e.rect(c, l, u, d), e.clip();
	let h = t.leaderLineColor ? `#${t.leaderLineColor}` : "#a6a6a6", g = t.leaderLineWidthEmu ? Math.max(.5, t.leaderLineWidthEmu / D * s) : 1;
	for (let r of n) {
		let n = Math.abs(r.cxBox - r.initialCx) > .5 || Math.abs(r.cyBox - r.initialCy) > .5;
		if (!t.showLeaderLines || !n) continue;
		let i = On(r.rimX, r.cxBox - r.boxW / 2, r.cxBox + r.boxW / 2), a = On(r.rimY, r.cyBox - r.boxH / 2, r.cyBox + r.boxH / 2);
		e.beginPath(), e.moveTo(r.rimX, r.rimY), e.lineTo(i, a), e.strokeStyle = h, e.lineWidth = g, e.stroke();
	}
	for (let t of n) {
		if (t.rich) {
			M(e, t.rich, t.cxBox, t.cyBox);
			continue;
		}
		e.font = `${t.bold ? "bold " : ""}${t.fontPx}px ${o}`, e.fillStyle = t.fontColor, e.textAlign = "center", e.textBaseline = "middle";
		let n = t.cyBox - (t.lines.length - 1) * t.lineHeight / 2;
		for (let r = 0; r < t.lines.length; r++) e.fillText(t.lines[r], t.cxBox, n + r * t.lineHeight);
	}
	e.restore();
}
function fn(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, v, y, b, x, S, C, E) {
	let O = (e) => E.get(e), A = _(n.fontSizeHpt, p) ?? Math.max(9, l * .09), N = n.labelBox, P = [], F = d;
	for (let d = 0; d < a.length; d++) {
		let E = a[d] / o * Math.PI * 2, M = F + E / 2;
		if (F += E, E <= 0 || !C.has(d)) continue;
		let I = O(d);
		if (I?.deleted) continue;
		let L = I?.showCatName ?? n.showCatName, ee = I?.showSerName ?? n.showSerName, R = I?.showVal ?? n.showVal, te = I?.showPercent ?? n.showPercent, ne = _(I?.fontSizeHpt, p) ?? A, re = I?.fontBold ?? n.fontBold ?? !1, ie = I?.fontColor ? `#${I.fontColor}` : n.fontColor ? `#${n.fontColor}` : "#000", ae = I?.labelBox ?? N, oe = ae?.fill ? `#${ae.fill}` : null, se = ae?.borderColor ? `#${ae.borderColor}` : null, z = ae?.borderWidthEmu ? Math.max(.75, ae.borderWidthEmu / D * p) : 1, B = I?.position ?? n.position ?? "bestFit", V = k({
			customText: I?.text,
			showCategory: L,
			showSeries: ee,
			showValue: R,
			showPercent: te,
			category: (i[d] ?? "").toString(),
			seriesName: r.name,
			sourceValue: a[d],
			percentRatio: a[d] / o,
			formatCode: I?.formatCode ?? n.formatCode ?? r.valFormatCode ?? null,
			percentFormatCode: I?.formatCode ?? n.formatCode ?? "0%",
			date1904: t.date1904 ?? !1,
			separator: I?.separator ?? n.separator,
			defaultSeparator: "\n"
		});
		if (!V) continue;
		let H = En(t, I, p, f, re), ce = Math.max(4, ne * .45), le = Math.max(2, ne * .28), ue = ne * .22, de = ne + ue;
		e.font = `${re ? "bold " : ""}${ne}px ${f}`;
		let fe = H ? T(e, H, ne, ie) : null;
		if (H && !fe) continue;
		let U = fe ? [] : j(V, Math.max(0, h - ce * 2), Math.max(0, v - le * 2), de, (t) => e.measureText(t).width);
		if (!fe && U.length === 0) continue;
		let pe = fe?.width ?? 0;
		if (!fe) for (let t of U) pe = Math.max(pe, e.measureText(t).width);
		let W = Math.min(pe + ce * 2, h), me = fe?.height ?? U.length * de - ue;
		me = Math.min(me + le * 2, v);
		let G = s + Math.cos(M) * l, he = c + Math.sin(M) * l, ge = Math.cos(M) < 0, _e = Math.max(W, me) * .55 + l * .06, ve = G + Math.cos(M) * _e, K = he + Math.sin(M) * _e, q, J = !1;
		if (I?.manualLayout) {
			let t = w({
				kind: "point",
				x: ve,
				y: K,
				position: "ctr"
			}, {
				x: m,
				y: g,
				w: h,
				h: v
			}, {
				w: W,
				h: me
			}, ne, I.manualLayout, {
				x: y,
				y: b,
				w: x,
				h: S
			});
			if (!t || (W = t.rect.w, me = t.rect.h, !fe && (U = j(V, Math.max(0, W - ce * 2), Math.max(0, me - le * 2), de, (t) => e.measureText(t).width), U.length === 0))) continue;
			ve = t.rect.x + t.rect.w / 2, K = t.rect.y + t.rect.h / 2, ge = ve < s, q = t.clip;
		} else if (B !== "bestFit" && B !== "outEnd") {
			let t = u > .01 ? (u + l) / 2 : l * nn, n = s + Math.cos(M) * t, r = c + Math.sin(M) * t, i = 2 * t * Math.sin(Math.min(Math.PI, Math.abs(E)) / 2) - ne, a = u > .01 ? l - u - ne : l - ne, o = Xt({
				x: n - i / 2,
				y: r - a / 2,
				w: i,
				h: a
			}, {
				x: m,
				y: g,
				w: h,
				h: v
			});
			if (!o) continue;
			if (fe) W = Math.min(W, o.w), me = Math.min(me, o.h);
			else {
				if (U = j(V, Math.max(0, o.w - ce * 2), Math.max(0, o.h - le * 2), de, (t) => e.measureText(t).width), U.length === 0) continue;
				pe = U.reduce((t, n) => Math.max(t, e.measureText(n).width), 0), W = pe + ce * 2, me = U.length * de - ue + le * 2;
			}
			let d = w({
				kind: "point",
				x: n,
				y: r,
				position: B === "inBase" || B === "inEnd" ? "ctr" : B
			}, o, {
				w: W,
				h: me
			}, ne);
			if (!d) continue;
			ve = d.textAlign === "left" ? d.x + W / 2 : d.textAlign === "right" ? d.x - W / 2 : d.x, K = d.textBaseline === "top" ? d.y + me / 2 : d.textBaseline === "bottom" ? d.y - me / 2 : d.y, ge = ve < s, q = d.clip, J = !0;
		}
		P.push({
			lines: U,
			rich: fe ?? void 0,
			lineHeight: de,
			midAngle: M,
			rimX: G,
			rimY: he,
			boxW: W,
			boxH: me,
			cxBox: ve,
			cyBox: K,
			leftSide: ge,
			fontColor: ie,
			boxFill: oe,
			boxBorder: se,
			boxBorderPx: z,
			fontPx: ne,
			bold: re,
			inside: J,
			manualClip: q
		});
	}
	let I = g + 2, L = g + v - 2, ee = L - I, R = (e) => {
		if (e.length === 0) return;
		e.sort((e, t) => e.cyBox - t.cyBox);
		let t = 0;
		for (let n of e) t += n.boxH;
		if (t += (e.length - 1) * 3, t > ee) {
			let t = e.reduce((e, t) => e + t.boxH, 0), n = e.length;
			if (n === 1) {
				e[0].cyBox = Math.min(Math.max(e[0].cyBox, I + e[0].boxH / 2), L - e[0].boxH / 2);
				return;
			}
			let r = (ee - t) / (n - 1), i = I;
			for (let t of e) t.cyBox = i + t.boxH / 2, i += t.boxH + r;
			return;
		}
		for (let t = 1; t < e.length; t++) {
			let n = e[t - 1], r = e[t], i = (n.boxH + r.boxH) / 2 + 3;
			r.cyBox - n.cyBox < i && (r.cyBox = n.cyBox + i);
		}
		let n = e[e.length - 1].cyBox + e[e.length - 1].boxH / 2 - L;
		if (n > 0) for (let t of e) t.cyBox -= n;
		let r = I - (e[0].cyBox - e[0].boxH / 2);
		if (r > 0) for (let t of e) t.cyBox += r;
	};
	R(P.filter((e) => !e.manualClip && !e.leftSide)), R(P.filter((e) => !e.manualClip && e.leftSide));
	for (let e of P) e.manualClip || (e.cyBox = Math.max(I + e.boxH / 2, e.cyBox), e.cyBox = Math.min(L - e.boxH / 2, e.cyBox));
	let te = m + 2, ne = m + h - 2;
	for (let e of P) {
		if (e.manualClip) continue;
		let t = e.boxW / 2;
		e.cxBox - t < te && (e.cxBox = te + t), e.cxBox + t > ne && (e.cxBox = ne - t);
	}
	e.save(), e.beginPath(), e.rect(m, g, h, v), e.clip();
	let re = n.leaderLineColor ? `#${n.leaderLineColor}` : "#a6a6a6", ie = n.leaderLineWidthEmu ? Math.max(.5, n.leaderLineWidthEmu / D * p) : 1;
	for (let t of P) {
		let r = t.cxBox + (t.leftSide ? t.boxW / 2 : -t.boxW / 2), i = t.cyBox, a = r - t.rimX, o = i - t.rimY, s = Math.hypot(a, o);
		!t.inside && n.showLeaderLines && s > t.fontPx * .9 && (e.beginPath(), e.moveTo(t.rimX, t.rimY), e.lineTo(r, i), e.strokeStyle = re, e.lineWidth = ie, e.stroke());
	}
	for (let t of P) {
		t.manualClip && (e.save(), e.beginPath(), e.rect(t.manualClip.x, t.manualClip.y, t.manualClip.w, t.manualClip.h), e.clip());
		let n = t.cxBox - t.boxW / 2, r = t.cyBox - t.boxH / 2;
		if (t.boxFill && (e.fillStyle = t.boxFill, e.fillRect(n, r, t.boxW, t.boxH)), t.boxBorder && (e.strokeStyle = t.boxBorder, e.lineWidth = t.boxBorderPx, e.strokeRect(n, r, t.boxW, t.boxH)), t.rich) {
			e.save(), e.beginPath(), e.rect(n, r, t.boxW, t.boxH), e.clip(), M(e, t.rich, t.cxBox, t.cyBox), e.restore(), t.manualClip && e.restore();
			continue;
		}
		e.font = `${t.bold ? "bold " : ""}${t.fontPx}px ${f}`, e.fillStyle = t.fontColor, e.textAlign = "center", e.textBaseline = "middle";
		let i = t.lineHeight - t.fontPx, a = t.cyBox - (t.lines.length * t.lineHeight - i) / 2 + t.fontPx / 2;
		for (let n = 0; n < t.lines.length; n++) e.fillText(t.lines[n], t.cxBox, a + n * t.lineHeight);
		t.manualClip && e.restore();
	}
	e.restore();
}
function pn(e, t, n, i) {
	let { x: a, y: o, w: s, h: c } = n, l = Yt(t), u = l.length;
	if (u < 3) return;
	let d = ft(e, t, s, c, .22, i), f = r(t, a, o, s, c, i, {
		titleTopPadFrac: .035,
		titleBottomPadFrac: .035,
		legendSideReserveFrac: .22,
		legendReserve: d,
		radialGapFrac: .02
	}), m = f.title.fontPx;
	Jt(e, t, a, o, s, c, o + f.title.topPad, m);
	let { px0: g, py0: _, pw: v, ph: y } = f.plotRect, b = f.center.cx, S = f.center.cy, C = Math.min(v, y) * .38, w = Infinity, T = -Infinity;
	for (let e of t.series) for (let t of e.values) t != null && (w = Math.min(w, t), T = Math.max(T, t));
	isFinite(w) || (w = 0, T = 1), T === 0 && (T = 1);
	let D = t.valAxisMinorTickMark != null && t.valAxisMinorTickMark !== "none", O = t.valAxisLogBase != null && Number.isFinite(t.valAxisLogBase) && t.valAxisLogBase >= 2, k = t.valAxisMajorUnit ?? (O ? null : I(t.valMin ?? w, t.valMax ?? T, C / i)), A = x({
		dataMin: w,
		dataMax: T,
		explicitMin: t.valMin,
		explicitMax: t.valMax,
		axisLenPt: C / i,
		axisOrientation: "vertical",
		majorUnit: k,
		minorUnit: t.valAxisMinorUnit,
		needMinor: t.valAxisMinorGridlines === !0 || D,
		logBase: t.valAxisLogBase,
		reversed: Et(t)
	}), j = (e) => On(A.fraction(e), 0, 1), M = -Math.PI / 2, N = (e) => M + e / u * Math.PI * 2, P = A.majorTicks.filter((e) => j(e) > 0), F = (t) => {
		let n = j(t) * C;
		e.beginPath();
		for (let t = 0; t < u; t++) {
			let r = N(t), i = b + Math.cos(r) * n, a = S + Math.sin(r) * n;
			t === 0 ? e.moveTo(i, a) : e.lineTo(i, a);
		}
		e.closePath(), e.stroke();
	};
	if (t.valAxisMinorGridlines) {
		let n = yt(t, i);
		e.strokeStyle = n.color, e.lineWidth = n.width;
		let r = n.dash.length > 0 && e.getLineDash ? e.getLineDash() : [];
		n.dash.length > 0 && e.setLineDash(n.dash);
		for (let e of A.minorTicks) F(e);
		n.dash.length > 0 && e.setLineDash(r);
	}
	if (!t.valAxisHidden && Ot(t)) {
		let n = vt(t, i);
		e.strokeStyle = n.color, e.lineWidth = n.width;
		let r = n.dash.length > 0 && e.getLineDash ? e.getLineDash() : [];
		n.dash.length > 0 && e.setLineDash(n.dash);
		for (let e of P) F(e);
		n.dash.length > 0 && e.setLineDash(r);
	}
	e.strokeStyle = "#bbb", e.lineWidth = .5;
	for (let t = 0; t < u; t++) {
		let n = N(t);
		e.beginPath(), e.moveTo(b, S), e.lineTo(b + Math.cos(n) * C, S + Math.sin(n) * C), e.stroke();
	}
	if (!t.valAxisHidden) {
		let n = It(t.valAxisFontSizeHpt, c, i);
		e.font = `${t.valAxisFontItalic ? "italic " : ""}${t.valAxisFontBold ? "bold " : ""}${n}px ${Q(t, t.valAxisFontFace, "minor")}`, e.fillStyle = t.valAxisFontColor ? `#${t.valAxisFontColor}` : "#555", e.textAlign = "right", e.textBaseline = "middle";
		for (let n of P) {
			let r = S - j(n) * C, a = ue(t.valAxisLineColor, t.valAxisLineWidthEmu, i);
			gt(e, t.valAxisMajorTickMark, "val", b, r, a.color, a.width, !1, t.valAxisLineHidden, "major", i), t.valAxisTickLabelPos !== "none" && e.fillText(p(n, t.valAxisFormatCode, t.date1904), b - 3, r);
		}
		if (D) {
			let n = ue(t.valAxisLineColor, t.valAxisLineWidthEmu, i);
			for (let r of A.minorTicks) gt(e, t.valAxisMinorTickMark, "val", b, S - j(r) * C, n.color, n.width, !1, t.valAxisLineHidden, "minor", i);
		}
	}
	let L = t.catAxisFontSizeHpt == null ? Math.max(8, Math.min(11, C * .2)) : It(t.catAxisFontSizeHpt, c, i);
	e.font = `${t.catAxisFontItalic ? "italic " : ""}${t.catAxisFontBold ? "bold " : ""}${L}px ${Q(t, t.catAxisFontFace, "minor")}`, e.fillStyle = t.catAxisFontColor ? `#${t.catAxisFontColor}` : "#444", e.textBaseline = "middle";
	let ee = b - v / 2, R = b + v / 2;
	if (!t.catAxisHidden && zt(t)) for (let n = 0; n < u; n++) {
		let r = N(n), i = b + Math.cos(r) * (C + 12), a = S + Math.sin(r) * (C + 12), o = Math.cos(r) < -.1 ? "right" : Math.cos(r) > .1 ? "left" : "center";
		e.textAlign = o;
		let s = o === "right" ? i - ee : o === "left" ? R - i : 2 * Math.min(R - i, i - ee), c = h((l[n] ?? "").toString(), t.catAxisFormatCode, t.date1904);
		e.fillText(E(e, c, s), i, a);
	}
	let te = t.radarStyle === "filled", ne = Math.max(2, C * .025);
	for (let n = 0; n < t.series.length; n++) {
		let r = t.series[n], a = Le(n, r), o = [];
		for (let e = 0; e < u; e++) {
			let t = r.values[e];
			if (t == null) {
				o.push(null);
				continue;
			}
			let n = j(t), i = N(e);
			o.push([b + Math.cos(i) * C * n, S + Math.sin(i) * C * n]);
		}
		e.beginPath();
		let s = !1;
		for (let t of o) {
			if (t == null) {
				s = !1;
				continue;
			}
			s ? e.lineTo(t[0], t[1]) : (e.moveTo(t[0], t[1]), s = !0);
		}
		let c = o.every((e) => e != null);
		if (te && c ? (e.closePath(), e.fillStyle = Ae(a, .25), e.fill()) : c && e.closePath(), r.lineHidden !== !0) {
			let t = e.getLineDash ? e.getLineDash() : [], n = e.lineCap, o = e.lineJoin;
			e.strokeStyle = r.lineColor ? `#${r.lineColor}` : a, e.lineWidth = r.lineWidthEmu == null ? 2 : le(r.lineWidthEmu, i), e.setLineDash(An(r.chartexStyle?.lineDash ?? void 0)), e.lineCap = r.chartexStyle?.lineCap === "rnd" ? "round" : r.chartexStyle?.lineCap === "sq" ? "square" : "butt", e.lineJoin = r.chartexStyle?.lineJoin === "round" || r.chartexStyle?.lineJoin === "bevel" ? r.chartexStyle.lineJoin : "miter", e.stroke(), e.setLineDash(t), e.lineCap = n, e.lineJoin = o;
		}
		if (!te && r.showMarker !== !1 && r.markerSymbol !== "none") {
			let t = Re(r.dataPointOverrides);
			for (let n = 0; n < o.length; n++) {
				let s = o[n];
				if (s == null) continue;
				let c = t.get(n), l = c?.markerSymbol ?? r.markerSymbol ?? "circle";
				if (l === "none") continue;
				let u = c?.markerSize ?? r.markerSize ?? Math.max(4, ne * 2 / i), d = c?.markerFill ?? r.markerFill ?? a, f = c?.markerLine ?? r.markerLine ?? null, p = c?.markerLineWidthEmu ?? r.markerLineWidthEmu;
				Sn(e, s[0], s[1], l, u, d, f, i, p == null ? 1 : le(p, i));
			}
		}
	}
	ht(e, t, d, a, o, s, c, g, _, v, y, f.title.bandH + 2, i);
}
function mn(e, t, n) {
	if (n) return t;
	let r = e[t];
	if (r == null) return null;
	let i = parseFloat(r);
	return Number.isNaN(i) ? null : i;
}
function hn(e, t) {
	return e.bubbleSizeRepresents === "w" ? t : Math.sqrt(t);
}
function gn(e, t) {
	return t == null || !Number.isFinite(t) || t === 0 || t < 0 && e.showNegativeBubbles !== !0 ? null : Math.abs(t);
}
function _n(e, t, n, r) {
	return t?.markerFill ?? t?.color ?? e.dataPointColors?.[n] ?? e.markerFill ?? r;
}
function vn(e, t, n) {
	return {
		series: t,
		fallbackColor: Le(n, t),
		cats: t.categories ?? e.categories,
		pointOverrides: new Map((t.dataPointOverrides ?? []).map((e) => [e.idx, e]))
	};
}
function yn(e, t, n, r, i) {
	let a = On(e.bubbleScale ?? 100, 0, 300);
	if (a <= 0) return 0;
	let o = 0;
	for (let { series: r, cats: i, pointOverrides: a } of t) if (!(r.showMarker === !1 || r.markerSymbol === "none")) for (let t = 0; t < r.values.length; t++) {
		if (r.values[t] == null || mn(i, t, n) == null || a.get(t)?.markerSymbol === "none") continue;
		let s = gn(e, r.bubbleSizes?.[t]);
		s != null && (o = Math.max(o, hn(e, s)));
	}
	return o <= 0 ? 0 : Math.min(r, i) * a / (300 + a) / o;
}
function bn(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m) {
	let h = p === "line" || p === "lineMarker" || p === "lineNoMarker", g = p === "smooth" || p === "smoothMarker" || p === "smoothNoMarker", _ = p === "lineNoMarker" || p === "smoothNoMarker", v = n.map(({ series: e, index: n }) => vn(t, e, n)), y = f ? yn(t, v, r, l, u) : 0;
	for (let { series: t, fallbackColor: n, cats: o } of v) for (let s of t.errBars ?? []) Cn(e, t, s, o, r, i, a, n);
	for (let { series: t, fallbackColor: n, cats: o } of v) if ((h || g) && t.lineHidden !== !0) {
		let s = [];
		for (let e = 0; e < t.values.length; e++) {
			let n = t.values[e];
			if (n == null) continue;
			let c = mn(o, e, r);
			c != null && s.push({
				x: i(c),
				y: a(n)
			});
		}
		if (s.length >= 2) {
			if (e.save(), e.strokeStyle = t.color ? `#${t.color}` : n, e.lineWidth = 1.5, e.beginPath(), e.moveTo(s[0].x, s[0].y), g && s.length >= 3) for (let t = 0; t < s.length - 1; t++) {
				let n = s[t - 1] ?? s[t], r = s[t], i = s[t + 1], a = s[t + 2] ?? i;
				e.bezierCurveTo(r.x + (i.x - n.x) / 6, r.y + (i.y - n.y) / 6, i.x - (a.x - r.x) / 6, i.y - (a.y - r.y) / 6, i.x, i.y);
			}
			else for (let t = 1; t < s.length; t++) e.lineTo(s[t].x, s[t].y);
			e.stroke(), e.restore();
		}
	}
	for (let { series: n, fallbackColor: o, cats: s, pointOverrides: c } of v) if (!(_ || n.showMarker === !1 || typeof n.markerSymbol == "string" && n.markerSymbol === "none")) for (let l = 0; l < n.values.length; l++) {
		let u = n.values[l];
		if (u == null) continue;
		let p = mn(s, l, r);
		if (p == null) continue;
		let m = c.get(l), h = m?.markerSymbol ?? n.markerSymbol ?? "circle";
		if (h === "none") continue;
		let g = m?.markerSize ?? n.markerSize ?? 5;
		if (f) {
			if (y <= 0) continue;
			let e = gn(t, n.bubbleSizes?.[l]);
			if (e == null) continue;
			g = hn(t, e) * y / d;
		}
		let _ = _n(n, m, l, o), v = m?.markerLine ?? n.markerLine ?? (f ? n.lineColor : null) ?? null, b = m?.markerLineWidthEmu ?? n.markerLineWidthEmu, x = m?.lineWidthEmu ?? n.lineWidthEmu, S = f ? x : b, C = S == null ? void 0 : le(S, d);
		Sn(e, i(p), a(u), h, g, _, v, d, C);
	}
	for (let { series: n, cats: o } of v) wn(e, n, o, r, i, a, u, d, t.date1904, Q(t, t.dataLabelFontFace, "minor"), t.dataLabelPosition ?? "r", {
		x: s,
		y: c,
		w: l,
		h: u
	}, m, (e) => Q(t, e, "minor"));
	for (let { series: n, fallbackColor: f, cats: p } of v) Ft(e, n, f, i, a, d, n.values.map((e, t) => mn(p, t, r)), {
		chart: t,
		chartRect: o,
		plotRect: {
			x: s,
			y: c,
			w: l,
			h: u
		}
	});
}
function xn(t, n, i, s) {
	let { x: l, y: d, w: m, h } = i, g = a(n, h, s), _ = g.fontPx, v = g.topPad, y = It(n.catAxisFontSizeHpt, h, s), b = It(n.valAxisFontSizeHpt, h, s), S = ft(t, n, m, h, .22, s), { legRightW: w, legLeftW: T, legTopH: E, legBottomH: D } = c(S), O = u(n, m, h, s), k = O.catFontPx, A = O.valFontPx, j = O.catBandH, M = O.valBandW;
	Jt(t, n, l, d, m, h, d + v, _);
	let { plotRect: { px0: N, py0: P, pw: F, ph: I } } = r(n, l, d, m, h, s, {
		titleBand: g,
		legendSideReserveFrac: .22,
		legendReserve: S,
		pad: {
			t: g.bandH + E + b / 2 + 2,
			r: w + m * .05,
			b: (n.catAxisHidden ? h * .04 : o(y)) + j + D,
			l: (n.valAxisHidden ? m * .04 : m * .12) + M + T
		},
		honorPlotAreaManualLayout: !0
	});
	if (F <= 0 || I <= 0) return;
	n.plotAreaBg && (t.fillStyle = `#${n.plotAreaBg}`, t.fillRect(N, P, F, I));
	let L = [], ee = [];
	for (let e of n.series) {
		let t = e.categories ?? n.categories;
		for (let e of t) {
			let t = parseFloat(e);
			isNaN(t) || L.push(t);
		}
	}
	let R = L.length === 0;
	if (R) {
		let e = 0;
		for (let t of n.series) e = Math.max(e, t.values.length);
		for (let t = 0; t < e; t++) L.push(t);
		for (let e of n.series) for (let t of e.values) t != null && ee.push(t);
	} else {
		L.length = 0;
		for (let e of n.series) {
			let t = e.categories ?? n.categories;
			for (let n = 0; n < e.values.length; n++) {
				let r = e.values[n];
				if (r == null) continue;
				let i = mn(t, n, !1);
				i != null && (L.push(i), ee.push(r));
			}
		}
	}
	let { min: te, max: ne } = C(L), { min: re, max: ie } = C(ee);
	n.valMin != null && (re = n.valMin), n.valMax != null && (ie = n.valMax);
	let ae = n.valAxisMinorGridlines === !0 || n.valAxisMinorTickMark != null && n.valAxisMinorTickMark !== "none", oe = x({
		dataMin: re,
		dataMax: ie,
		explicitMin: n.valMin,
		explicitMax: n.valMax,
		axisLenPt: I / s,
		axisOrientation: "vertical",
		majorUnit: n.valAxisMajorUnit,
		minorUnit: n.valAxisMinorUnit,
		needMinor: ae,
		logBase: n.valAxisLogBase,
		reversed: Et(n)
	});
	re = oe.min, ie = oe.max;
	let se = n.catAxisMinorGridlines === !0 || n.catAxisMinorTickMark != null && n.catAxisMinorTickMark !== "none", z = x({
		dataMin: te,
		dataMax: ne,
		explicitMin: n.catAxisMin,
		explicitMax: n.catAxisMax,
		axisLenPt: F / s,
		axisOrientation: "horizontal",
		majorUnit: n.catAxisMajorUnit,
		minorUnit: n.catAxisMinorUnit,
		needMinor: se,
		logBase: n.catAxisLogBase,
		reversed: Dt(n)
	});
	te = z.min, ne = z.max;
	let B = (e) => N + z.fraction(e) * F, V = (e) => P + I - oe.fraction(e) * I, H = z.majorUnit, ce = oe.majorTicks, ue = oe.minorTicks, de = z.majorTicks, fe = z.minorTicks, U = P + I;
	if (n.catAxisCrossesAt != null) U = On(V(n.catAxisCrossesAt), P, P + I);
	else {
		let e = n.catAxisCrosses ?? "autoZero";
		e === "autoZero" && re < 0 && ie > 0 ? U = On(V(0), P, P + I) : e === "max" && (U = P);
	}
	let pe = N;
	if (n.valAxisCrossesAt != null) pe = On(B(n.valAxisCrossesAt), N, N + F);
	else {
		let e = n.valAxisCrosses ?? "autoZero";
		e === "autoZero" && te < 0 && ne > 0 ? pe = On(B(0), N, N + F) : e === "max" && (pe = N + F);
	}
	let W = vt(n, s);
	if (!n.valAxisHidden) {
		let r = n.valAxisFontSizeHpt == null ? Math.max(8, Math.min(11, I / 20)) : It(n.valAxisFontSizeHpt, h, s), i = n.valAxisFontSizeHpt == null ? 4 : e(r);
		if (t.font = Be(r, Q(n, n.valAxisFontFace, "minor"), n.valAxisFontBold ?? !1, n.valAxisFontItalic ?? !1), n.valAxisMinorGridlines) {
			let e = yt(n, s);
			for (let n of ue) _t(t, N, F, V(n), !1, e);
		}
		for (let e of ce) {
			let r = V(e);
			if (t.strokeStyle = W.color, t.lineWidth = W.width, Ot(n)) {
				let e = W.dash.length > 0 && t.getLineDash ? t.getLineDash() : [];
				W.dash.length > 0 && t.setLineDash(W.dash), t.beginPath(), t.moveTo(N, r), t.lineTo(N + F, r), t.stroke(), W.dash.length > 0 && t.setLineDash(e);
			}
			if (n.valAxisTickLabelPos !== "none") {
				t.fillStyle = n.valAxisFontColor ? `#${n.valAxisFontColor}` : "#555";
				let a = n.valAxisTickLabelPos ?? "nextTo", o;
				a === "high" ? (t.textAlign = "left", o = N + F + i) : a === "low" ? (t.textAlign = "right", o = N - i) : (t.textAlign = "right", o = pe - i), t.textBaseline = "middle", t.fillText(p(e, n.valAxisFormatCode, n.date1904), o, r);
			}
			let a = n.valAxisLineColor ? `#${n.valAxisLineColor}` : void 0;
			gt(t, n.valAxisMajorTickMark, "val", pe, r, a, le(n.valAxisLineWidthEmu, s), !1, n.valAxisLineHidden, "major", s);
		}
		if (n.valAxisMinorTickMark && n.valAxisMinorTickMark !== "none") {
			let e = n.valAxisLineColor ? `#${n.valAxisLineColor}` : void 0;
			for (let r of ue) gt(t, n.valAxisMinorTickMark, "val", pe, V(r), e, le(n.valAxisLineWidthEmu, s), !1, n.valAxisLineHidden, "minor", s);
		}
	}
	if (!n.catAxisHidden && St(n) && H > 0) {
		let e = Ct(n, s);
		t.strokeStyle = e.color, t.lineWidth = e.width;
		let r = e.dash.length > 0 && t.getLineDash ? t.getLineDash() : [];
		e.dash.length > 0 && t.setLineDash(e.dash);
		for (let e of de) {
			let n = B(e);
			t.beginPath(), t.moveTo(n, P), t.lineTo(n, P + I), t.stroke();
		}
		e.dash.length > 0 && t.setLineDash(r);
	}
	if (!n.catAxisHidden && n.catAxisMinorGridlines && H > 0) {
		let e = wt(n, s), r = e.dash.length > 0 && t.getLineDash ? t.getLineDash() : [];
		t.strokeStyle = e.color, t.lineWidth = e.width, e.dash.length > 0 && t.setLineDash(e.dash);
		for (let e of fe) {
			let n = B(e);
			t.beginPath(), t.moveTo(n, P), t.lineTo(n, P + I), t.stroke();
		}
		e.dash.length > 0 && t.setLineDash(r);
	}
	if (!n.catAxisHidden && !n.catAxisLineHidden && (t.save(), t.strokeStyle = n.catAxisLineColor ? `#${n.catAxisLineColor}` : "#888", t.lineWidth = le(n.catAxisLineWidthEmu, s), t.lineCap = "butt", t.beginPath(), t.moveTo(N, U), t.lineTo(N + F, U), t.stroke(), t.restore()), !n.valAxisHidden && !n.valAxisLineHidden && (t.save(), t.strokeStyle = n.valAxisLineColor ? `#${n.valAxisLineColor}` : "#888", t.lineWidth = le(n.valAxisLineWidthEmu, s), t.beginPath(), t.moveTo(pe, P), t.lineTo(pe, P + I), t.stroke(), t.restore()), !n.catAxisHidden) {
		let e = n.catAxisFontSizeHpt == null ? Math.max(8, Math.min(11, I / 20)) : It(n.catAxisFontSizeHpt, h, s), r = n.catAxisFontSizeHpt == null ? 4 : f(e);
		t.font = Be(e, Q(n, n.catAxisFontFace, "minor"), n.catAxisFontBold ?? !1, n.catAxisFontItalic ?? !1), t.fillStyle = n.catAxisFontColor ? `#${n.catAxisFontColor}` : "#555", t.textAlign = "center";
		let i = n.catAxisTickLabelPos ?? "nextTo", a = i === "low" ? P + I + r : i === "high" ? P - r : U + r;
		t.textBaseline = i === "high" ? "bottom" : "top";
		for (let e of de) {
			let r = B(e);
			i !== "none" && t.fillText(p(e, n.catAxisFormatCode, n.date1904), r, a);
			let o = n.catAxisLineColor ? `#${n.catAxisLineColor}` : void 0;
			gt(t, n.catAxisMajorTickMark, "cat", U, r, o, le(n.catAxisLineWidthEmu, s), !1, n.catAxisLineHidden, "major", s);
		}
		if (n.catAxisMinorTickMark && n.catAxisMinorTickMark !== "none") {
			let e = n.catAxisLineColor ? `#${n.catAxisLineColor}` : void 0;
			for (let r of fe) gt(t, n.catAxisMinorTickMark, "cat", U, B(r), e, le(n.catAxisLineWidthEmu, s), !1, n.catAxisLineHidden, "minor", s);
		}
	}
	let me = n.chartType === "bubble", G = me ? "marker" : n.scatterStyle ?? "marker", he = G === "line" || G === "lineMarker" || G === "lineNoMarker", ge = G === "smooth" || G === "smoothMarker" || G === "smoothNoMarker", _e = G === "lineNoMarker" || G === "smoothNoMarker", ve = n.series.map((e, t) => vn(n, e, t)), K = me ? yn(n, ve, R, F, I) : 0;
	for (let { series: e, fallbackColor: r, cats: a, pointOverrides: o } of ve) {
		for (let n of e.errBars ?? []) Cn(t, e, n, a, R, B, V, r);
		if ((he || ge) && e.lineHidden !== !0) {
			let n = [];
			for (let t = 0; t < e.values.length; t++) {
				let r = e.values[t];
				if (r == null) continue;
				let i = mn(a, t, R);
				i != null && n.push({
					x: B(i),
					y: V(r)
				});
			}
			if (n.length >= 2) {
				if (t.save(), t.strokeStyle = e.color ? `#${e.color}` : r, t.lineWidth = 1.5, t.beginPath(), t.moveTo(n[0].x, n[0].y), ge && n.length >= 3) for (let e = 0; e < n.length - 1; e++) {
					let r = n[e - 1] ?? n[e], i = n[e], a = n[e + 1], o = n[e + 2] ?? a, s = i.x + (a.x - r.x) / 6, c = i.y + (a.y - r.y) / 6, l = a.x - (o.x - i.x) / 6, u = a.y - (o.y - i.y) / 6;
					t.bezierCurveTo(s, c, l, u, a.x, a.y);
				}
				else for (let e = 1; e < n.length; e++) t.lineTo(n[e].x, n[e].y);
				t.stroke(), t.restore();
			}
		}
		if (!(_e || e.showMarker === !1 || typeof e.markerSymbol == "string" && e.markerSymbol === "none")) for (let i = 0; i < e.values.length; i++) {
			let c = e.values[i];
			if (c == null) continue;
			let l = mn(a, i, R);
			if (l == null) continue;
			let u = o.get(i), d = u?.markerSymbol ?? e.markerSymbol ?? "circle";
			if (d === "none") continue;
			let f = u?.markerSize ?? e.markerSize ?? 5;
			if (me) {
				if (K <= 0) continue;
				let t = gn(n, e.bubbleSizes?.[i]);
				if (t == null) continue;
				f = hn(n, t) * K / s;
			}
			let p = _n(e, u, i, r), m = u?.markerLine ?? e.markerLine ?? (me ? e.lineColor : null) ?? null, h = u?.markerLineWidthEmu ?? e.markerLineWidthEmu, g = u?.lineWidthEmu ?? e.lineWidthEmu, _ = me ? g : h, v = _ == null ? void 0 : le(_, s);
			Sn(t, B(l), V(c), d, f, p, m, s, v);
		}
		wn(t, e, a, R, B, V, I, s, n.date1904, Q(n, n.dataLabelFontFace, "minor"), n.dataLabelPosition ?? "r", {
			x: N,
			y: P,
			w: F,
			h: I
		}, {
			x: l,
			y: d,
			w: m,
			h
		}, (e) => Q(n, e, "minor")), e.trendLines && e.trendLines.length > 0 && Ft(t, e, r, B, V, s, e.values.map((e, t) => mn(a, t, R)), {
			chart: n,
			chartRect: i,
			plotRect: {
				x: N,
				y: P,
				w: F,
				h: I
			},
			clipLineToPlot: !0
		});
	}
	ht(t, n, S, l, d, m, h, N, P, F, I, g.bandH + 2, s), Ke(t, n, l, d, m, h, N, P, F, I, T, D, k, A);
}
function Sn(e, t, n, r, i, a, o, s, c = 1) {
	let l = Math.max(2, i * s), u = l / 2, d = a.startsWith("#") ? a : `#${a}`, f = o ? o.startsWith("#") ? o : `#${o}` : null;
	switch (e.save(), e.fillStyle = d, f && (e.strokeStyle = f, e.lineWidth = c), r) {
		case "square":
			e.fillRect(t - u, n - u, l, l), o && e.strokeRect(t - u, n - u, l, l);
			break;
		case "diamond":
			e.beginPath(), e.moveTo(t, n - u), e.lineTo(t + u, n), e.lineTo(t, n + u), e.lineTo(t - u, n), e.closePath(), e.fill(), o && e.stroke();
			break;
		case "triangle":
			e.beginPath(), e.moveTo(t, n - u), e.lineTo(t + u, n + u), e.lineTo(t - u, n + u), e.closePath(), e.fill(), o && e.stroke();
			break;
		case "x":
			e.strokeStyle = d, e.lineWidth = Math.max(1, l * .18), e.beginPath(), e.moveTo(t - u, n - u), e.lineTo(t + u, n + u), e.moveTo(t - u, n + u), e.lineTo(t + u, n - u), e.stroke();
			break;
		case "plus":
			e.strokeStyle = d, e.lineWidth = Math.max(1, l * .18), e.beginPath(), e.moveTo(t - u, n), e.lineTo(t + u, n), e.moveTo(t, n - u), e.lineTo(t, n + u), e.stroke();
			break;
		case "star":
			e.beginPath();
			for (let r = 0; r < 10; r++) {
				let i = r % 2 == 0 ? u : u * .45, a = -Math.PI / 2 + r * Math.PI / 5, o = t + Math.cos(a) * i, s = n + Math.sin(a) * i;
				r === 0 ? e.moveTo(o, s) : e.lineTo(o, s);
			}
			e.closePath(), e.fill(), o && e.stroke();
			break;
		case "dot":
			e.beginPath(), e.arc(t, n, Math.max(1, l * .25), 0, Math.PI * 2), e.fill();
			break;
		case "dash": {
			let r = Math.max(1, l * .25);
			e.fillRect(t - u, n - r / 2, l, r);
			break;
		}
		default:
			e.beginPath(), e.arc(t, n, u, 0, Math.PI * 2), e.fill(), o && e.stroke();
			break;
	}
	e.restore();
}
function Cn(e, t, n, r, i, a, o, s) {
	e.save(), e.strokeStyle = n.color ? `#${n.color}` : s, e.lineWidth = n.lineWidthEmu ? Math.max(.5, n.lineWidthEmu / D) : 1, e.setLineDash(An(n.dash));
	let c = n.barType === "plus" || n.barType === "both", l = n.barType === "minus" || n.barType === "both", u = n.dir === "x", d = e.lineWidth / 2;
	for (let s = 0; s < t.values.length; s++) {
		let f = t.values[s];
		if (f == null) continue;
		let p = mn(r, s, i);
		if (p == null) continue;
		let m = a(p), h = o(f), g = (t) => {
			let r = m, i = h;
			u ? r = a(p + t) : i = o(f + t), e.beginPath(), e.moveTo(m, h), e.lineTo(r, i), e.stroke(), n.noEndCap || (e.save(), e.setLineDash([]), e.beginPath(), u ? (e.moveTo(r, i - d), e.lineTo(r, i + d)) : (e.moveTo(r - d, i), e.lineTo(r + d, i)), e.stroke(), e.restore());
		};
		if (c) {
			let e = n.plus[s];
			e != null && g(e);
		}
		if (l) {
			let e = n.minus[s];
			e != null && g(-e);
		}
	}
	e.restore();
}
function wn(e, t, n, r, i, a, o, s, c = !1, l = "sans-serif", u = "r", d = {
	x: -1e6,
	y: -1e6,
	w: 2e6,
	h: 2e6
}, f = d, m) {
	let h = t.dataLabelOverrides ?? [], g = Re(h);
	if (h.length === 0 && !t.seriesDataLabels) return;
	let v = t.seriesDataLabels;
	for (let h = 0; h < t.values.length; h++) {
		let y = t.values[h];
		if (y == null) continue;
		let b = mn(n, h, r);
		if (b == null) continue;
		let x = g.get(h);
		if (x?.deleted) continue;
		let S = x?.showCatName ?? v?.showCatName, C = x?.showSerName ?? v?.showSerName, w = x?.showVal ?? v?.showVal, T = k({
			customText: x?.text,
			showCategory: S && !r,
			showSeries: C,
			showValue: w,
			category: p(b, t.catFormatCodes?.[h] ?? t.catFormatCode ?? null, c),
			seriesName: t.name,
			sourceValue: y,
			formatCode: x?.formatCode ?? v?.formatCode ?? null,
			date1904: c,
			separator: x?.separator ?? v?.separator
		});
		if (!T) continue;
		let E = x?.position ?? v?.position ?? u, D = _(x?.fontSizeHpt ?? v?.fontSizeHpt, s) ?? Math.max(9, Math.min(11, o / 25)), O = x?.fontColor ?? v?.fontColor, A = x?.fontBold ?? v?.fontBold ?? !1;
		Tn(e, i(b), a(y), T, E, D, O, A, l, 0, d, x?.manualLayout, f, x?.richRuns, s, m);
	}
}
function Tn(e, t, n, r, i, a, o, s, c = "sans-serif", l = 0, u = {
	x: -1e6,
	y: -1e6,
	w: 2e6,
	h: 2e6
}, d, f = u, p, m = 1, h) {
	e.save(), e.font = `${s ? "bold " : ""}${a}px ${c}`, Dn(e, r, {
		kind: "point",
		x: t,
		y: n,
		position: i,
		markerGap: l
	}, u, a, o ? `#${o}` : "#333", d, f, p && p.length > 0 ? {
		runs: p,
		ptToPx: m,
		fontFamily: c,
		fallbackBold: s,
		fontFamilyForFace: h
	} : void 0), e.restore();
}
function En(e, t, n, r, i) {
	if (!(!t?.text || !t.richRuns || t.richRuns.length === 0)) return {
		runs: t.richRuns,
		ptToPx: n,
		fontFamily: r,
		fallbackBold: i,
		fontFamilyForFace: (t) => Q(e, t, "minor")
	};
}
function Dn(e, t, n, r, i, a, o, s = r, c) {
	if (!t || !Number.isFinite(i) || i <= 0) return;
	if (c) {
		let t = T(e, c, i, a);
		if (!t) return;
		let l = w(n, r, {
			w: t.width,
			h: t.height
		}, i, o, s);
		if (!l) return;
		e.save(), e.beginPath(), e.rect(l.clip.x, l.clip.y, l.clip.w, l.clip.h), e.clip(), M(e, t, l.x, l.y, l.textAlign, l.textBaseline), e.restore();
		return;
	}
	let l = i * 1.15, u = A(t).value.split(/\r?\n/), d = w(n, r, {
		w: u.reduce((t, n) => Math.max(t, e.measureText(n).width), 0),
		h: Math.max(l, u.length * l)
	}, i, o, s);
	if (!d) return;
	let f = (t) => e.measureText(t).width, p = j(t, d.maxWidth, d.maxHeight, l, f);
	if (p.length === 0 || (d = w(n, r, {
		w: p.reduce((e, t) => Math.max(e, f(t)), 0),
		h: p.length * l
	}, i, o, s), !d)) return;
	e.save(), e.beginPath(), e.rect(d.clip.x, d.clip.y, d.clip.w, d.clip.h), e.clip(), e.fillStyle = a, e.textAlign = d.textAlign, e.textBaseline = d.textBaseline;
	let m = d.textBaseline === "middle" ? d.y - (p.length - 1) * l / 2 : d.textBaseline === "bottom" ? d.y - (p.length - 1) * l : d.y;
	for (let t = 0; t < p.length; t++) e.fillText(p[t], d.x, m + t * l);
	e.restore();
}
function On(e, t, n) {
	return e < t ? t : e > n ? n : e;
}
function kn(e, t, n) {
	if (t.length !== 0) if (n && t.length >= 3) for (let n = 0; n < t.length - 1; n++) {
		let r = t[n - 1] ?? t[n], i = t[n], a = t[n + 1], o = t[n + 2] ?? a, s = i.x + (a.x - r.x) / 6, c = i.y + (a.y - r.y) / 6, l = a.x - (o.x - i.x) / 6, u = a.y - (o.y - i.y) / 6;
		e.bezierCurveTo(s, c, l, u, a.x, a.y);
	}
	else for (let n = 1; n < t.length; n++) e.lineTo(t[n].x, t[n].y);
}
function An(e) {
	if (!e) return [];
	switch (e) {
		case "solid": return [];
		case "dot":
		case "sysDot": return [1, 2];
		case "dash":
		case "sysDash": return [4, 2];
		case "lgDash": return [8, 3];
		case "dashDot":
		case "sysDashDot": return [
			4,
			2,
			1,
			2
		];
		case "lgDashDot": return [
			8,
			3,
			1,
			3
		];
		case "dashDotDot":
		case "sysDashDotDot":
		case "lgDashDotDot": return [
			4,
			2,
			1,
			2,
			1,
			2
		];
		default: return [];
	}
}
function jn(e) {
	return e.markerSymbol != null || e.markerSize != null || e.markerFill != null || e.markerLine != null || e.markerLineWidthEmu != null || e.dataPointOverrides != null && e.dataPointOverrides.length > 0;
}
function Mn(e, t, n, r, i, a, o, s) {
	if (n.dir === "x") return;
	let c = n.barType === "plus" || n.barType === "both", l = n.barType === "minus" || n.barType === "both";
	e.save(), e.strokeStyle = n.color ? `#${n.color}` : s, e.lineWidth = n.lineWidthEmu ? Math.max(.5, n.lineWidthEmu / D) : 1, e.setLineDash(An(n.dash));
	let u = e.lineWidth / 2;
	for (let s = 0; s < r; s++) {
		if (t.values[s] == null) continue;
		let r = o(s), d = i(s), f = a(r), p = (t) => {
			let i = a(r + t);
			e.beginPath(), e.moveTo(d, f), e.lineTo(d, i), e.stroke(), n.noEndCap || (e.save(), e.setLineDash([]), e.beginPath(), e.moveTo(d - u, i), e.lineTo(d + u, i), e.stroke(), e.restore());
		};
		if (c) {
			let e = n.plus[s];
			e != null && p(e);
		}
		if (l) {
			let e = n.minus[s];
			e != null && p(-e);
		}
	}
	e.restore();
}
function Nn(e, t, n, r, i, a, o, s, c, l, u, d = "sans-serif", f = "t", p = {
	x: -1e6,
	y: -1e6,
	w: 2e6,
	h: 2e6
}, m = p, h, g, v) {
	let y = t.dataLabelOverrides ?? [], b = Re(y), x = t.seriesDataLabels;
	if (y.length === 0 && !x) return !1;
	for (let y = 0; y < r; y++) {
		if (t.values[y] == null && !u) continue;
		let r = o(y), S = t.values[y] ?? 0, C = b.get(y);
		if (C?.deleted) continue;
		let w = C?.showCatName ?? x?.showCatName, T = C?.showSerName ?? x?.showSerName, E = C?.showVal ?? x?.showVal, D = C?.showPercent ?? x?.showPercent, O = k({
			customText: C?.text,
			showCategory: w,
			showSeries: T,
			showValue: E,
			showPercent: D,
			category: n[y] ?? "",
			seriesName: t.name,
			sourceValue: S,
			percentRatio: h?.(y),
			formatCode: C?.formatCode ?? x?.formatCode ?? null,
			date1904: l,
			separator: C?.separator ?? x?.separator
		});
		if (!O) continue;
		let A = C?.position ?? x?.position ?? f, j = _(C?.fontSizeHpt ?? x?.fontSizeHpt, c) ?? Math.max(9, Math.min(11, s / 25)), M = C?.fontColor ?? x?.fontColor, N = C?.fontBold ?? x?.fontBold ?? !1;
		Tn(e, i(y), a(r), O, A, j, M, N, d, g?.(y) ?? 0, p, C?.manualLayout, m, C?.richRuns, c, v);
	}
	return !0;
}
function Pn(e, t) {
	return e?.chartexFormatIdx ?? t;
}
function Fn(e, t, n, r, i, a, o, s) {
	if (!t) return null;
	let c = t.seriesDataLabels, l = o.get(n);
	if (l?.deleted || !c && !l && !a.visible) return null;
	let u = typeof s == "boolean" ? s : !1, d = typeof s == "number" ? s : void 0, f = !u && (l?.showVal ?? c?.showVal ?? a.showVal), p = l?.showCatName ?? c?.showCatName ?? a.showCatName, m = l?.showSerName ?? c?.showSerName ?? a.showSerName ?? !1, h = l?.showPercent ?? c?.showPercent ?? a.showPercent ?? !1, g = l?.formatCode ?? c?.formatCode ?? e.dataLabelFormatCode ?? null, _ = k({
		customText: l?.text,
		showCategory: p,
		showSeries: m,
		showValue: f,
		showPercent: h,
		category: r,
		seriesName: t.name,
		sourceValue: i,
		percentRatio: d,
		formatCode: g ?? t.valFormatCode ?? null,
		percentFormatCode: g ?? "0%",
		date1904: e.date1904,
		separator: l?.separator ?? c?.separator
	});
	return _ ? {
		text: _,
		position: l?.position ?? c?.position,
		fontColor: l?.fontColor ?? c?.fontColor,
		fontSizeHpt: l?.fontSizeHpt ?? c?.fontSizeHpt,
		fontBold: l?.fontBold ?? c?.fontBold,
		manualLayout: l?.manualLayout
	} : null;
}
function In(e, t, n, r, i) {
	let a = n === "fill" ? t?.fillColors : t?.lineColors;
	return a?.length ? a[((n === "fill" ? t?.fillColorIndex : t?.lineColorIndex) ?? r) % a.length] ?? null : null;
}
function Ln(e, t, n, r) {
	if (!t.length) return null;
	let i = e.chartexColorStyleMethod;
	return i === "withinLinear" || i === "acrossLinear" || i === "withinLinearReversed" || i === "acrossLinearReversed" ? t[i === "withinLinear" || i === "withinLinearReversed" ? 0 : n % t.length] ?? null : t[n % t.length] ?? null;
}
function Rn(e, t, n) {
	return (e.chartexColorPalette ? Ln(e, e.chartexColorPalette, t, n) : null) ?? e.chartexAccents?.[t % (e.chartexAccents.length || 1)] ?? X[t % X.length];
}
function zn(e, t, n, r) {
	return In(e, r, "fill", t, n) ?? In(e, e.chartexDataPointStyle, "fill", t, n) ?? Rn(e, t, n);
}
function Bn(e, t) {
	let n = e?.fillPaints;
	return n?.length ? n[(e?.fillColorIndex ?? t) % n.length] ?? null : null;
}
function Vn(e, t, n, r) {
	if (!t) return;
	if (t.fillHidden) return t.fillNoStyle ? void 0 : null;
	let i = Bn(t, n);
	if (i) return i;
	let a = In(e, t, "fill", n, r);
	return a ? {
		fillType: "solid",
		color: a
	} : void 0;
}
function Hn(e, t, n, r, i, a = e.chartexDataPointStyle) {
	let o = r?.fillHidden ? void 0 : Vn(e, r, t, n);
	if (o !== void 0) return o;
	if (r && i) return {
		fillType: "solid",
		color: i
	};
	let s = Vn(e, a, t, n);
	return s === void 0 ? i ? {
		fillType: "solid",
		color: i
	} : {
		fillType: "solid",
		color: Rn(e, t, n)
	} : s;
}
function Un(e, t, n, r, i, a, o, s = 0) {
	return t.fillType === "solid" ? t.color.startsWith("#") ? t.color : `#${t.color}` : Ne(t, e, n, r, i, a, s) ?? o;
}
function Wn(e, t, n, r, i, a, o = {}) {
	let s = (t, n) => ({
		visible: t?.lineHidden !== !0,
		color: In(e, t, "line", r, i) ?? n,
		widthEmu: t?.lineWidthEmu ?? null,
		dash: t?.lineDash ?? null,
		cap: t?.lineCap ?? null,
		join: t?.lineJoin ?? null
	}), c = n?.chartexStyle;
	return (c?.lineHidden != null || c?.lineColors?.some(Boolean) || c?.lineWidthEmu != null || c?.lineDash != null || c?.lineCap != null || c?.lineJoin != null) && !(c?.lineHidden && c.lineNoStyle) ? s(c, a) : n?.lineHidden != null || n?.lineColor != null || n?.lineWidthEmu != null ? {
		visible: n?.lineHidden !== !0,
		color: n?.lineColor ?? a,
		widthEmu: n?.lineWidthEmu ?? null,
		dash: null,
		cap: null,
		join: null
	} : t?.lineNoStyle && o.linkedNoStyleFallback ? s(null, a) : s(t, a);
}
function Gn(e, t, n) {
	return t.visible ? (e.strokeStyle = t.color.startsWith("#") ? t.color : `#${t.color}`, e.lineWidth = t.widthEmu == null ? 1 : le(t.widthEmu, n), e.setLineDash(An(t.dash ?? void 0)), e.lineCap = t.cap === "rnd" ? "round" : t.cap === "sq" ? "square" : "butt", e.lineJoin = t.join === "round" || t.join === "bevel" ? t.join : "miter", !0) : !1;
}
function Kn(e, t, n, r, i, a, o, s, c = {}) {
	return Gn(e, Wn(t, n, r, i, a, o, c), s);
}
function qn(e, t, n, r, i, a, o, s = !1, c = !0) {
	let l = Wn(e, r, n, i, a, o, { linkedNoStyleFallback: s });
	return {
		name: t,
		values: [],
		color: o.replace(/^#/, ""),
		lineHidden: !c || !l.visible,
		lineColor: c && l.visible ? l.color.replace(/^#/, "") : null,
		lineWidthEmu: c ? l.widthEmu : null,
		chartexStyle: {
			lineDash: c ? l.dash : null,
			lineCap: c ? l.cap : null,
			lineJoin: c ? l.join : null
		}
	};
}
var Jn = 1e4, Yn = 512, Xn = new Set([
	"clusteredBar",
	"clusteredBarH",
	"stackedBar",
	"stackedBarH",
	"stackedBarPct",
	"stackedBarHPct",
	"clusteredColumn",
	"line",
	"stackedLine",
	"stackedLinePct",
	"area",
	"stackedArea",
	"stackedAreaPct",
	"pie",
	"doughnut",
	"radar",
	"scatter",
	"bubble",
	"stock"
]);
function Zn(e) {
	if (!Xn.has(e.chartType)) return null;
	let t = 0;
	for (let n of e.series) {
		let r = 0;
		for (let e of n.errBars ?? []) r = Math.max(r, e.plus.length, e.minus.length);
		let i = Math.max(1, e.categories.length, n.categories?.length ?? 0, n.values.length, n.bubbleSizes?.length ?? 0, n.dataPointOverrides?.length ?? 0, n.dataLabelOverrides?.length ?? 0, n.trendLines?.length ?? 0, r);
		if (!Number.isSafeInteger(i) || i > Jn - t) return Jn + 1;
		t += i;
	}
	return t;
}
function Qn(e, t) {
	if (!e.threeD || !t || !new Set([
		"pie",
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
	]).has(e.chartType)) return null;
	let n = 0;
	for (let t of e.series) {
		let r = Math.max(1, t.values.length, t.categories?.length ?? 0), i = t.threeDShape ?? e.threeD.shape ?? "box", a = e.chartType === "pie" ? 36 : e.chartType.toLowerCase().includes("bar") ? i === "box" ? 4 : 36 : e.chartType.toLowerCase().includes("area") ? 4 : t.smooth === !0 ? 25 : 3;
		if (!Number.isSafeInteger(r) || r > Math.floor(Jn / a) || (n += r * a, n > Jn)) return Jn + 1;
	}
	return n;
}
function $n(e, t, n) {
	return n <= Jn ? !1 : (e.fillStyle = "#888", e.font = "12px sans-serif", e.textAlign = "center", e.textBaseline = "middle", e.fillText("(too many data points)", t.x + t.w / 2, t.y + t.h / 2), !0);
}
function er(e, t, n, r) {
	let i = t.series[0];
	if (!i) return;
	let a = me(i.values, t.chartexHistogramBinning ?? {});
	if (a.kind === "tooManyInputPoints") {
		$n(e, n, Jn + 1);
		return;
	}
	Qt(e, {
		...t,
		chartType: "clusteredBar",
		categories: a.categories,
		series: [{
			...i,
			categories: void 0,
			values: a.counts
		}]
	}, n, r, { gapPolicy: "chartex" });
}
function tr(e, t, n, i, o) {
	let { x: s, y: l, w: d, h: f } = n, m = t.series[0]?.values ?? [], g = t.categories, v = Math.max(m.length, g.length);
	if (v === 0 || $n(e, n, v)) return;
	let y = new Set(t.subtotalIndices), b = !1, x = (e, t) => {
		let n = e + t;
		return Number.isFinite(n) ? n : (b = !0, n < 0 ? -Number.MAX_VALUE : Number.MAX_VALUE);
	}, S = 0, C = [], w = -Infinity, T = 0;
	for (let e = 0; e < v; e++) {
		let t = m[e], n = t != null && Number.isFinite(t), r = t == null || n, i = n ? t : 0;
		if (y.has(e)) {
			let e = {
				start: 0,
				end: i,
				isSub: !0,
				isPos: !0,
				hasValue: n,
				paintSlot: r
			};
			C.push(e), r && (w = Math.max(w, e.start, e.end), T = Math.min(T, e.start, e.end)), n && (S = i);
		} else {
			let e = x(S, i), t = {
				start: i >= 0 ? S : e,
				end: i >= 0 ? e : S,
				isSub: !1,
				isPos: i >= 0,
				hasValue: n,
				paintSlot: r
			};
			C.push(t), r && (w = Math.max(w, t.start, t.end), T = Math.min(T, t.start, t.end)), n && (S = e);
		}
	}
	if (b) {
		e.fillStyle = "#888", e.font = "12px sans-serif", e.textAlign = "center", e.textBaseline = "middle", e.fillText("(chart values out of range)", s + d / 2, l + f / 2);
		return;
	}
	if (w <= T) return;
	let E = y.size === 0 && C.every((e, t) => !e.hasValue || m[t] >= 0), D = !t.valAxisHidden && t.valAxisTickLabelPos !== "none" && !E, O = a(t, f, i), k = u(t, d, f, i), A = It(t.valAxisFontSizeHpt, f, i), j = It(t.catAxisFontSizeHpt, f, i), M = Q(t, t.valAxisFontFace, "minor"), N = Q(t, t.catAxisFontFace, "minor"), P = jt(t, T, w, f / i);
	e.save();
	let F = 0;
	if (D) {
		e.font = Be(A, M, t.valAxisFontBold ?? !1, t.valAxisFontItalic ?? !1);
		let n = 0;
		for (let r of P.majorLines) n = Math.max(n, e.measureText(p(r, t.valAxisFormatCode, t.date1904)).width);
		F = n + 8;
	}
	let I = Math.max(1, d - k.valBandW - F - d * .02) / v;
	e.font = Be(j, N, t.catAxisFontBold ?? !1, t.catAxisFontItalic ?? !1);
	let L = g.slice(0, v).map((n) => Lt(e, h(n, t.catAxisFormatCode, t.date1904), Math.max(1, I - 8))), ee = 0;
	for (let e of L) e.some(Boolean) && (ee = Math.max(ee, e.length));
	let R = t.catAxisHidden || ee === 0 ? 0 : ee * (j + 2) + 4, te = t.series[0], ne = Re(te?.dataLabelOverrides), re = te?.chartexStyle, ie = `#${te?.color ?? zn(t, 0, 3, re)}`, ae = `#${zn(t, 1, 3, re)}`, oe = `#${zn(t, 2, 3, re)}`, se = Hn(t, 0, 3, re, te?.color), z = Hn(t, 1, 3, re), B = Hn(t, 2, 3, re), V = {
		...t,
		chartType: "clusteredBar",
		series: [
			qn(t, "Increase", te, t.chartexDataPointStyle, 0, 3, ie),
			qn(t, "Decrease", te, t.chartexDataPointStyle, 1, 3, ae),
			qn(t, "Total", te, t.chartexDataPointStyle, 2, 3, oe)
		]
	}, H = ft(e, V, d, f, .22, i), { legRightW: ce, legLeftW: le, legTopH: de, legBottomH: fe } = c(H), pe = r(t, s, l, d, f, i, {
		titleBand: O,
		legendSideReserveFrac: 0,
		legendReserve: H,
		pad: {
			t: O.bandH + de + A / 2 + 2,
			r: ce + d * .02,
			b: fe + k.catBandH + R,
			l: le + k.valBandW + (t.valAxisHidden ? d * .02 : Math.max(d * .03, F))
		}
	});
	Jt(e, t, s, l, d, f, l + pe.title.topPad, pe.title.fontPx);
	let { px0: W, py0: me, pw: G, ph: he } = pe.plotRect, ge = jt(t, T, w, he / i), _e = (e) => me + he - ge.frac(e) * he, ve = ue(t.valAxisLineColor, t.valAxisLineWidthEmu, i), K = ue(t.catAxisLineColor, t.catAxisLineWidthEmu, i), q = vt(t, i);
	if (!t.valAxisHidden) {
		e.font = Be(A, M, t.valAxisFontBold ?? !1, t.valAxisFontItalic ?? !1), e.fillStyle = t.valAxisFontColor ? `#${t.valAxisFontColor}` : "#595959", e.textAlign = "right", e.textBaseline = "middle";
		let n = yt(t, i);
		for (let t of ge.minorLines) _t(e, W, G, _e(t), !1, n);
		for (let n of ge.majorLines) {
			let r = _e(n);
			if (Ot(t)) {
				e.strokeStyle = q.color, e.lineWidth = q.width;
				let t = q.dash.length > 0 && e.getLineDash ? e.getLineDash() : [];
				q.dash.length > 0 && e.setLineDash(q.dash), e.beginPath(), e.moveTo(W, r), e.lineTo(W + G, r), e.stroke(), q.dash.length > 0 && e.setLineDash(t);
			}
			D && e.fillText(p(n, t.valAxisFormatCode, t.date1904), W - 4, r), gt(e, t.valAxisMajorTickMark, "val", W, r, ve.color, ve.width, !1, t.valAxisLineHidden, "major", i);
		}
		for (let n of ge.minorTicks) gt(e, t.valAxisMinorTickMark, "val", W, _e(n), ve.color, ve.width, !1, t.valAxisLineHidden, "minor", i);
	}
	let J = !t.valAxisHidden && !t.valAxisLineHidden, ye = !t.catAxisHidden && !t.catAxisLineHidden;
	J && (e.strokeStyle = ve.color, e.lineWidth = ve.width, e.beginPath(), e.moveTo(W, me), e.lineTo(W, me + he), e.stroke()), ye && (e.strokeStyle = K.color, e.lineWidth = K.width, e.beginPath(), e.moveTo(W, me + he), e.lineTo(W + G, me + he), e.stroke());
	let be = G / v, xe = be / (1 + U(t.barGapWidth, "chartex") / 100);
	C.forEach((n, r) => {
		let a = W + be * r + (be - xe) / 2, c = Math.min(_e(n.start), _e(n.end)), u = Math.max(_e(n.start), _e(n.end)), p = Math.max(1, u - c), h = n.isSub ? B : n.isPos ? se : z, y = n.isSub ? oe : n.isPos ? ie : ae;
		n.paintSlot && h && (e.fillStyle = Un(e, h, a, c, xe, p, y, o), e.fillRect(a, c, xe, p));
		let b = n.isSub ? 2 : +!n.isPos, x = In(t, t.chartexDataPointStyle, "line", b, 3);
		if (n.paintSlot && Kn(e, t, t.chartexDataPointStyle, te, b, 3, x ? `#${x}` : y, i) && e.strokeRect(a, c, xe, p), n.paintSlot && C[r + 1]?.paintSlot && r < v - 1 && t.chartexConnectorLines !== !1) {
			let o = W + be * (r + 1) + (be - xe) / 2, s = n.isPos ? c : u;
			e.save();
			let l = Wn(t, t.chartexSeriesLineStyle, te, b, 3, "#000000", { linkedNoStyleFallback: !0 });
			Gn(e, l, i) && (l.widthEmu ?? (e.lineWidth = .75 * i), e.beginPath(), e.moveTo(a + xe, s), e.lineTo(o, s), e.stroke()), e.restore();
		}
		let S = n.hasValue ? m[r] : 0, w = Fn(t, te, r, g[r] ?? "", S, {
			visible: t.showDataLabels,
			showVal: !0,
			showCatName: !1
		}, ne, !n.hasValue);
		if (w) {
			let n = te?.dataLabelColors?.[r] ?? w.fontColor ?? null, o = n ? `#${n}` : t.dataLabelFontColor ? `#${t.dataLabelFontColor}` : "#595959", u = _(w.fontSizeHpt, i) ?? It(t.dataLabelFontSizeHpt, f, i);
			e.font = `${w.fontBold ?? t.dataLabelFontBold ?? !1 ? "bold " : ""}${u}px ${Q(t, t.dataLabelFontFace, "minor")}`, Dn(e, w.text, {
				kind: "bar",
				rect: {
					x: a,
					y: c,
					w: xe,
					h: p
				},
				orientation: "vertical",
				negative: S < 0,
				position: w.position ?? "outEnd"
			}, {
				x: W,
				y: me,
				w: G,
				h: he
			}, u, o, w.manualLayout, {
				x: s,
				y: l,
				w: d,
				h: f
			});
		}
	}), e.textAlign = "center", e.textBaseline = "top", e.fillStyle = t.catAxisFontColor ? `#${t.catAxisFontColor}` : "#595959", e.font = Be(j, N, t.catAxisFontBold ?? !1, t.catAxisFontItalic ?? !1);
	let Se = me + he + 4;
	for (let n = 0; n < v && !t.catAxisHidden; n++) {
		let t = W + be * n + be / 2;
		(L[n] ?? []).forEach((n, r) => n && e.fillText(n, t, Se + r * (j + 2)));
	}
	Ke(e, t, s, l, d, f, W, me, G, he, le, fe, k.catFontPx, k.valFontPx), ht(e, V, H, s, l, d, f, W, me, G, he, O.bandH + 2, i, [
		se,
		z,
		B
	], o), e.restore();
}
function nr(e, t, n, i, o) {
	let s = t.series[0]?.values ?? [], l = Math.max(s.length, t.categories.length);
	if (l === 0 || $n(e, n, l)) return;
	let u = 0;
	for (let e = 0; e < l; e++) u = Math.max(u, s[e] ?? 0);
	if (!(u > 0)) return;
	let { x: d, y: f, w: p, h: m } = n, h = a(t, m, i), g = t.series[0], v = Re(g?.dataLabelOverrides), y = `#${g?.color ?? zn(t, 0, 1, g?.chartexStyle)}`, b = Hn(t, 0, 1, g?.chartexStyle, g?.color), x = {
		...t,
		series: [qn(t, g?.name ?? "", g, t.chartexDataPointStyle, 0, 1, y)]
	}, S = ft(e, x, p, m, .22, i), { legRightW: C, legLeftW: w, legTopH: T, legBottomH: E } = c(S), D = It(t.catAxisFontSizeHpt, m, i);
	e.save(), e.font = Be(D, Q(t, t.catAxisFontFace, "minor"), t.catAxisFontBold ?? !1, t.catAxisFontItalic ?? !1);
	let O = 0;
	if (!t.catAxisHidden) {
		for (let n = 0; n < Math.min(l, t.categories.length); n++) O = Math.max(O, e.measureText(t.categories[n]).width);
		t.categories.length > 0 && (O += 10);
	}
	let k = r(t, d, f, p, m, i, {
		titleBand: h,
		legendSideReserveFrac: .22,
		legendReserve: S,
		pad: {
			t: h.bandH + T + 2,
			r: C + p * .02,
			b: E + m * .02,
			l: w + O + p * .02
		}
	});
	Jt(e, t, d, f, p, m, f + k.title.topPad, k.title.fontPx);
	let { px0: A, py0: j, pw: M, ph: N } = k.plotRect, P = N / l, F = P / (1 + U(t.barGapWidth, "chartex") / 100);
	for (let n = 0; n < l; n++) {
		let r = Math.max(0, s[n] ?? 0), a = M * r / u, c = A + (M - a) / 2, l = j + P * n + (P - F) / 2;
		b && (e.fillStyle = Un(e, b, c, l, a, F, y, o), e.fillRect(c, l, a, F)), Kn(e, t, t.chartexDataPointStyle, g, 0, 1, y, i) && e.strokeRect(c, l, a, F);
		let h = t.categories[n];
		!t.catAxisHidden && h != null && (e.fillStyle = t.catAxisFontColor ? `#${t.catAxisFontColor}` : "#595959", e.textAlign = "right", e.textBaseline = "middle", e.fillText(h, A - 6, l + F / 2));
		let x = Fn(t, g, n, h ?? "", r, {
			visible: !1,
			showVal: !1,
			showCatName: !1
		}, v);
		if (x) {
			let n = _(x.fontSizeHpt, i) ?? It(t.dataLabelFontSizeHpt, m, i);
			e.font = `${x.fontBold ? "bold " : ""}${n}px ${Q(t, t.dataLabelFontFace, "minor")}`, Dn(e, x.text, {
				kind: "bar",
				rect: {
					x: c,
					y: l,
					w: a,
					h: F
				},
				orientation: "horizontal",
				negative: !1,
				position: x.position ?? "ctr"
			}, {
				x: A,
				y: j,
				w: M,
				h: N
			}, n, x.fontColor ? `#${x.fontColor}` : "#ffffff", x.manualLayout, {
				x: d,
				y: f,
				w: p,
				h: m
			});
		}
	}
	if (!t.catAxisHidden && !t.catAxisLineHidden) {
		let n = ue(t.catAxisLineColor, t.catAxisLineWidthEmu, i);
		e.strokeStyle = n.color, e.lineWidth = n.width, e.beginPath(), e.moveTo(A, j), e.lineTo(A, j + N), e.stroke();
	}
	ht(e, x, S, d, f, p, m, A, j, M, N, h.bandH + 2, i, [b], o), e.restore();
}
function rr(e, t, n, r) {
	let i = t.series[0];
	if (!i || $n(e, n, Math.max(t.categories.length, i.categories?.length ?? 0, i.values.length))) return;
	let a = be(i, t.categories);
	if (a.points.length === 0) return;
	let o = Pn(i, 0), s = Wn(t, t.chartexDataPointLineStyle, i, o, 1, Le(0, i), { linkedNoStyleFallback: !0 });
	$t(e, {
		...t,
		chartType: "line",
		categories: a.categories,
		series: [{
			...a.series,
			showMarker: !1,
			lineHidden: !s.visible,
			lineColor: s.color.replace(/^#/, ""),
			lineWidthEmu: s.widthEmu,
			chartexStyle: {
				lineDash: s.dash,
				lineCap: s.cap,
				lineJoin: s.join
			}
		}],
		catAxisHidden: !1,
		catAxisTickLabelPos: "none",
		showLegend: !1,
		valMin: t.valMin ?? 0,
		valMax: t.valMax ?? 1.2,
		valAxisMajorUnit: t.valAxisMajorUnit ?? .2
	}, n, r);
}
function ir(e, t, n, r) {
	let i = t.series[0];
	if (!i || $n(e, n, Math.max(t.categories.length, i.categories?.length ?? 0, i.values.length))) return;
	let a = be(i, t.categories);
	if (a.points.length === 0) return;
	let o = t.series.find((e) => e.seriesType === "line"), s = o?.chartexFormatIdx ?? i.chartexFormatIdx ?? 0, c = {
		...o ?? a.series,
		name: o?.name || "Cumulative %",
		values: a.series.values,
		categories: a.categories,
		color: o?.color ?? In(t, t.chartexDataPointLineStyle, "line", s, 1) ?? i.lineColor ?? i.color,
		seriesType: "line",
		useSecondaryAxis: !0,
		showMarker: !1
	}, l = {
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
	Qt(e, {
		...t,
		chartType: "clusteredBar",
		categories: a.categories,
		series: [{
			...a.orderedSeries,
			seriesType: null,
			useSecondaryAxis: !1
		}, c],
		secondaryValAxis: l
	}, n, r, {
		gapPolicy: "chartex",
		semanticLineNoStyleFallback: !0
	});
}
function ar(e, t, n, r) {
	let i = (r ?? t) - (n ?? e);
	if (!(i > 0) || !Number.isFinite(i)) return null;
	let a = y(i, 7);
	if (!(a > 0) || !Number.isFinite(a)) return null;
	let o = e - i * .05, s = t + i * .05;
	e >= 0 && (e === 0 || t > 1.2 * e) && (o = 0), t <= 0 && (t === 0 || Math.abs(e) > 1.2 * Math.abs(t)) && (s = 0);
	let c = n ?? Math.floor(o / a) * a, l = r ?? Math.ceil(s / a) * a;
	return ![c, l].every(Number.isFinite) || !(l > c) ? null : {
		min: c,
		max: l,
		majorUnit: a
	};
}
function or(t, n, i, s, l) {
	let d = 3 * s / 2, h = 3 * s, g = n.chartexBox;
	if (!g || g.categories.length === 0 || g.series.length === 0) return;
	let { x: _, y: v, w: y, h: b } = i;
	if ($n(t, i, K(g.series.map((e) => e.valuesByCategory), Jn))) return;
	let x = () => {
		t.fillStyle = "#888", t.font = "12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText("(chart values out of range)", _ + y / 2, v + b / 2);
	}, S = (e) => {
		let t = e.max - e.min, n = t / e.step;
		return Number.isFinite(e.min) && Number.isFinite(e.max) && Number.isFinite(e.step) && Number.isFinite(t) && Number.isFinite(n) && e.max > e.min && e.step > 0 && n <= 1e3 && e.min + e.step > e.min;
	}, C = Infinity, w = -Infinity;
	for (let e of g.series) for (let t of e.valuesByCategory) for (let e of t) Number.isFinite(e) && (e < C && (C = e), e > w && (w = e));
	if (!isFinite(C) || !isFinite(w)) return;
	if (!Number.isFinite(w - C)) {
		x();
		return;
	}
	let T = n.valAxisMajorUnit == null ? ar(C, w, n.valMin, n.valMax) : null, E = T ? {
		...n,
		valMin: T.min,
		valMax: T.max,
		valAxisMajorUnit: T.majorUnit
	} : n, D = Q(n, n.valAxisFontFace, "minor"), O = It(n.valAxisFontSizeHpt, b, s), k = e(O), A = P({
		dataMin: C,
		dataMax: w,
		explicitMin: E.valMin,
		explicitMax: E.valMax,
		axisLenPt: b / s,
		majorUnit: E.valAxisMajorUnit
	});
	if (!S({
		min: A.min,
		max: A.max,
		step: A.majorUnit
	})) {
		x();
		return;
	}
	let j = 0;
	if (!n.valAxisHidden) {
		let e = t.font;
		t.font = Be(O, D, n.valAxisFontBold ?? !1, n.valAxisFontItalic ?? !1);
		let r = 0;
		for (let e of A.majorTicks) {
			let i = p(e, n.valAxisFormatCode, n.date1904);
			r = Math.max(r, t.measureText(i).width);
		}
		t.font = e, j = r + k + m * s;
	}
	let M = a(n, b, s), N = It(n.catAxisFontSizeHpt, b, s), F = It(n.valAxisFontSizeHpt, b, s), I = u(n, y, b, s), L = g.series.length, ee = g.series.map((e, t) => Pn(e, t)), R = g.series.map((e, t) => {
		let r = ee[t], i = e.color ?? zn(n, r, L, e.chartexStyle);
		return qn(n, e.name, e, n.chartexDataPointStyle, r, L, i, !0);
	}), te = {
		...n,
		series: R
	}, ne = ft(t, te, y, b, .22, s), { legRightW: re, legLeftW: ie, legTopH: ae, legBottomH: oe } = c(ne), se = r(n, _, v, y, b, s, {
		titleBand: M,
		legendSideReserveFrac: .22,
		legendReserve: ne,
		pad: {
			t: M.bandH + ae + F / 2 + 2,
			r: re + y * .02,
			b: oe + I.catBandH + (n.catAxisHidden ? b * .02 : o(N)),
			l: ie + I.valBandW + (n.valAxisHidden ? y * .02 : j)
		}
	}), { px0: z, py0: B, pw: V, ph: H } = se.plotRect, ce = g.categories, de = ce.length, fe = jt(E, C, w, H / s);
	if (!S(fe)) {
		x();
		return;
	}
	Jt(t, n, _, v, y, b, v + se.title.topPad, se.title.fontPx);
	let { min: pe, max: W } = fe, me = W - pe, G = (e) => B + H * (1 - (e - pe) / me), he = ue(n.valAxisLineColor, n.valAxisLineWidthEmu, s), ge = vt(n, s);
	if (t.save(), !n.valAxisHidden) {
		if (t.font = Be(O, D, n.valAxisFontBold ?? !1, n.valAxisFontItalic ?? !1), t.textAlign = "right", t.textBaseline = "middle", n.valAxisMinorGridlines) {
			let e = yt(n, s);
			for (let n of fe.minorLines) _t(t, z, V, G(n), !1, e);
		}
		for (let e of fe.majorLines) {
			let r = G(e);
			if (n.valAxisMajorGridlines !== !1) {
				t.strokeStyle = ge.color, t.lineWidth = ge.width;
				let e = ge.dash.length > 0 && t.getLineDash ? t.getLineDash() : [];
				ge.dash.length > 0 && t.setLineDash(ge.dash), t.beginPath(), t.moveTo(z, r), t.lineTo(z + V, r), t.stroke(), ge.dash.length > 0 && t.setLineDash(e);
			}
			t.fillStyle = n.valAxisFontColor ? `#${n.valAxisFontColor}` : "#595959", t.fillText(p(e, n.valAxisFormatCode, n.date1904), z - k, r), gt(t, n.valAxisMajorTickMark, "val", z, r, he.color, he.width, !1, n.valAxisLineHidden, "major", s);
		}
		for (let e of fe.minorTicks) gt(t, n.valAxisMinorTickMark, "val", z, G(e), he.color, he.width, !1, n.valAxisLineHidden, "minor", s);
		n.valAxisLineHidden || (t.strokeStyle = he.color, t.lineWidth = he.width, t.beginPath(), t.moveTo(z, B), t.lineTo(z, B + H), t.stroke());
	}
	let _e = ue(n.catAxisLineColor, n.catAxisLineWidthEmu, s);
	!n.catAxisHidden && !n.catAxisLineHidden && (t.strokeStyle = _e.color, t.lineWidth = _e.width, t.beginPath(), t.moveTo(z, B + H), t.lineTo(z + V, B + H), t.stroke());
	let J = V / de, ye = U(n.barGapWidth, "chartex"), be = (e) => `#${g.series[e].color ?? zn(n, ee[e], L, g.series[e].chartexStyle)}`, xe = (e) => Hn(n, ee[e], L, g.series[e].chartexStyle, g.series[e].color), Se = g.series.map((e) => e.valuesByCategory.map((t) => ve(t, e.quartileMethod))), Ce = (e, t) => {
		let n = q(z, V, g.oneBoxPerSeries ? 1 : de, L, g.oneBoxPerSeries ? 0 : e, t, ye);
		return n ? {
			bx: n.boxX,
			boxW: n.boxWidth,
			cx: n.centerX
		} : {
			bx: z,
			boxW: 0,
			cx: z
		};
	};
	for (let e = 0; e < L; e++) {
		let r = g.series[e];
		if (!r.meanLine) continue;
		let i = n.chartexDataPointLineStyle ?? n.chartexDataPointStyle, a = r.lineColor ? `#${r.lineColor}` : be(e);
		if (t.save(), Kn(t, n, i, r, ee[e], L, a, s) || r.lineColor != null) {
			r.lineColor && (t.strokeStyle = a), r.lineWidthEmu && (t.lineWidth = le(r.lineWidthEmu, s));
			let n = !1;
			t.beginPath();
			for (let r = 0; r < de; r++) {
				let i = Se[e][r];
				if (!i) {
					n = !1;
					continue;
				}
				let { cx: a } = Ce(r, e), o = G(i.mean);
				n ? t.lineTo(a, o) : t.moveTo(a, o), n = !0;
			}
			t.stroke();
		}
		t.restore();
	}
	let we = It(n.catAxisFontSizeHpt, b, s), Te = f(we);
	for (let e = 0; e < de; e++) {
		let r = z + J * (e + .5);
		n.catAxisHidden || gt(t, n.catAxisMajorTickMark, "cat", B + H, r, _e.color, _e.width, !1, n.catAxisLineHidden, "major", s);
		for (let r = 0; r < L; r++) {
			let i = g.series[r], a = Se[r][e];
			if (!a) continue;
			let { bx: o, boxW: c, cx: u } = Ce(e, r), f = be(r), p = xe(r), m = n.chartexDataPointStyle, _ = n.chartexDataPointLineStyle ?? m, v = n.chartexDataPointMarkerStyle ?? m, y = ee[r], b = In(n, m, "line", y, L), x = i.lineColor ? `#${i.lineColor}` : b ? `#${b}` : f, S = i.lineWidthEmu ? le(i.lineWidthEmu, s) : m?.lineWidthEmu == null ? 1 : le(m.lineWidthEmu, s), C = In(n, _, "line", y, L), w = In(n, v, "fill", y, L), T = Hn(n, y, L, i.chartexStyle, i.color, v), E = In(n, v, "line", y, L), D = (e, r) => {
				let a = i.chartexStyle, o = a?.lineHidden != null || a?.lineColors?.some(Boolean) || a?.lineWidthEmu != null || a?.lineDash != null || a?.lineCap != null || a?.lineJoin != null, c = Kn(t, n, e, i, y, L, r, s), l = e?.lineNoStyle === !0 && !o && i.lineColor == null && i.lineWidthEmu == null;
				return !c && l && (t.strokeStyle = r, t.lineWidth = 1, t.setLineDash([])), i.lineColor && (t.strokeStyle = x), i.lineWidthEmu && (t.lineWidth = S), c || l || i.lineColor != null;
			}, O = G(a.q1), k = G(a.q3), A = Math.min(O, k), j = Math.max(1, Math.abs(O - k)), M = c * .4;
			D(_, C ?? x) && (t.beginPath(), t.moveTo(u, G(a.whiskerHi)), t.lineTo(u, k), t.moveTo(u, O), t.lineTo(u, G(a.whiskerLo)), t.moveTo(u - M / 2, G(a.whiskerHi)), t.lineTo(u + M / 2, G(a.whiskerHi)), t.moveTo(u - M / 2, G(a.whiskerLo)), t.lineTo(u + M / 2, G(a.whiskerLo)), t.stroke()), p && (t.fillStyle = Un(t, p, o, A, c, j, f, l), t.fillRect(o, A, c, j)), D(m, x) && t.strokeRect(o + S / 2, A + S / 2, c - S, j - S);
			let N = G(a.median);
			if (D(_, C ?? x) && (t.beginPath(), t.moveTo(o, N), t.lineTo(o + c, N), t.stroke()), i.showNonoutliers) {
				let e = d, r = n.chartexMarkerSymbol ?? "circle";
				for (let n of a.inner) {
					if (r === "none") continue;
					let i = D(v, E ?? x), a = G(n);
					T && (t.fillStyle = Un(t, T, u - e, a - e, e * 2, e * 2, w ? `#${w}` : f, l)), r === "circle" ? (t.beginPath(), t.arc(u, a, e, 0, Math.PI * 2), T && t.fill(), i && t.stroke()) : Sn(t, u, a, r, 3, T ? w ? `#${w}` : f : "transparent", i ? E ? `#${E}` : x : null, s, t.lineWidth);
				}
			}
			if (i.meanMarker) {
				let e = G(a.mean), n = h;
				D(v, E ?? x) && (t.beginPath(), t.moveTo(u - n, e - n), t.lineTo(u + n, e + n), t.moveTo(u + n, e - n), t.lineTo(u - n, e + n), t.stroke());
			}
			if (i.showOutliers) {
				let e = n.chartexMarkerSymbol ?? "circle", r = d;
				for (let n of a.outliers) {
					if (e === "none") continue;
					let i = D(v, E ?? x), a = G(n);
					T && (t.fillStyle = Un(t, T, u - r, a - r, r * 2, r * 2, w ? `#${w}` : f, l)), e === "circle" ? (t.beginPath(), t.arc(u, a, r, 0, Math.PI * 2), T && t.fill(), i && t.stroke()) : Sn(t, u, a, e, 3, T ? w ? `#${w}` : f : "transparent", i ? E ? `#${E}` : x : null, s, t.lineWidth);
				}
			}
		}
		if (!n.catAxisHidden) {
			t.font = `${we}px ${Q(n, n.catAxisFontFace, "minor")}`, t.fillStyle = n.catAxisFontColor ? `#${n.catAxisFontColor}` : "#595959", t.textAlign = "center", t.textBaseline = "top";
			let i = ce[e];
			t.fillText(i, r, B + H + Te);
		}
	}
	t.restore(), Ke(t, n, _, v, y, b, z, B, V, H, ie, oe, I.catFontPx, I.valFontPx), ht(t, te, ne, _, v, y, b, z, B, V, H, M.bandH + 2, s, g.series.map((e, t) => xe(t)), l);
}
function sr(e) {
	if (e.length > Jn) return !0;
	let t = 0;
	for (let n of e) {
		if (n.path.length > Yn || t > Jn - n.path.length) return !0;
		t += n.path.length;
	}
	return !1;
}
function cr(e, t = !1) {
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
function lr(e) {
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
function ur(e) {
	let t = e.depth, n = [e];
	for (; n.length > 0;) {
		let e = n.pop();
		t = Math.max(t, e.depth);
		for (let t = e.children.length - 1; t >= 0; t--) n.push(e.children[t]);
	}
	return t;
}
function dr(e, t, n, i, a) {
	let o = t.chartexSunburst;
	if (!o || o.rows.length === 0) return;
	let { x: s, y: c, w: l, h: u } = n;
	if (sr(o.rows)) {
		$n(e, n, Jn + 1);
		return;
	}
	let d = cr(o.rows);
	if (d.layoutWeight <= 0 || d.children.length === 0) return;
	let f = t.series[0], p = Re(f?.dataLabelOverrides), m = d.children.map((e, n) => Hn(t, n, d.children.length, f?.chartexStyle, f?.color)), h = {
		...t,
		chartType: "clusteredBar",
		series: d.children.map((e) => {
			let n = zn(t, e.branchIndex, d.children.length, f?.chartexStyle);
			return qn(t, e.label, f, t.chartexDataPointStyle, e.branchIndex, d.children.length, n, !1, !1);
		})
	}, g = r(t, s, c, l, u, i, {
		titleTopPadFrac: .035,
		titleBottomPadFrac: .035,
		legendSideReserveFrac: 0,
		legendReserve: ft(e, h, l, u, .22, i),
		radialGapFrac: .02
	});
	Jt(e, t, s, c, l, u, c + g.title.topPad, g.title.fontPx);
	let { px0: v, py0: y, pw: b, ph: x } = g.plotRect, S = v + b / 2, C = y + x / 2, w = Math.min(b, x) * .46;
	d.a0 = -Math.PI / 2, d.a1 = -Math.PI / 2 + Math.PI * 2, lr(d);
	let T = ur(d) + 1, E = w * .18, D = (w - E) / T, O = (e) => `#${zn(t, e, d.children.length, f?.chartexStyle)}`, k = (e) => Hn(t, e, d.children.length, f?.chartexStyle, f?.color), A = f?.seriesDataLabels, j = Q(t, t.dataLabelFontFace, "minor"), M = _(A?.fontSizeHpt, i) ?? Math.max(7, Math.min(13, w * .075)), N = A?.fontColor ? `#${A.fontColor}` : "#ffffff", P = Array.from({ length: T }, () => []), F = [d];
	for (; F.length > 0;) {
		let e = F.pop();
		e.depth >= 0 && P[e.depth].push(e);
		for (let t = e.children.length - 1; t >= 0; t--) F.push(e.children[t]);
	}
	e.save();
	for (let n = 0; n < T; n++) {
		let r = E + n * D, o = r + D;
		for (let m of P[n]) {
			let n = m.a1 - m.a0;
			if (n <= 1e-4) continue;
			e.beginPath(), e.arc(S, C, o, m.a0, m.a1), e.arc(S, C, r, m.a1, m.a0, !0), e.closePath();
			let h = k(m.branchIndex);
			h && (e.fillStyle = Un(e, h, S - o, C - o, o * 2, o * 2, O(m.branchIndex), a), e.fill()), Kn(e, t, t.chartexDataPointStyle, t.series[0], m.branchIndex, d.children.length, "#ffffff", i) && e.stroke();
			let g = Fn(t, f, m.labelIndex, m.label, m.value, {
				visible: !1,
				showVal: !1,
				showCatName: !1
			}, p);
			if (!g) continue;
			let w = g.text, T = _(g.fontSizeHpt, i) ?? M, E = g.fontColor ? `#${g.fontColor}` : N, A = (m.a0 + m.a1) / 2, P = (r + o) / 2, F = D - 4, I = n * P;
			if (!g.manualLayout && F < T * .9 && I < T * .9) continue;
			let L = S + Math.cos(A) * P, ee = C + Math.sin(A) * P;
			if (e.font = `${g.fontBold ? "bold " : ""}${T}px ${j}`, g.manualLayout) {
				Dn(e, w, {
					kind: "point",
					x: L,
					y: ee,
					position: g.position ?? "ctr"
				}, {
					x: v,
					y,
					w: b,
					h: x
				}, T, E, g.manualLayout, {
					x: s,
					y: c,
					w: l,
					h: u
				});
				continue;
			}
			e.save(), e.translate(L, ee);
			let R = A, te = R * 180 / Math.PI % 360;
			(te > 90 || te < -90) && (R += Math.PI), e.rotate(R), e.font = `${g.fontBold ? "bold " : ""}${T}px ${j}`, Dn(e, w, {
				kind: "point",
				x: 0,
				y: 0,
				position: g.position ?? "ctr"
			}, {
				x: -F / 2,
				y: -I / 2,
				w: F,
				h: I
			}, T, E), e.restore();
		}
	}
	e.restore(), ht(e, h, g.legend, s, c, l, u, v, y, b, x, g.title.bandH + 2, i, m, a);
}
function fr(e, t) {
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
function pr(e, t, n, i, a) {
	let o = t.chartexTreemap;
	if (!o || o.rows.length === 0) return;
	if (sr(o.rows)) {
		$n(e, n, Jn + 1);
		return;
	}
	let s = cr(o.rows, !0);
	if (s.layoutWeight <= 0 || s.children.length === 0) return;
	let c = t.series[0], l = s.children.map((e) => Hn(t, e.branchIndex, s.children.length, c?.chartexStyle, c?.color)), u = {
		...t,
		chartType: "clusteredBar",
		series: s.children.map((e) => {
			let n = zn(t, e.branchIndex, s.children.length, c?.chartexStyle);
			return qn(t, e.label, c, t.chartexDataPointStyle, e.branchIndex, s.children.length, n, !0, !1);
		})
	}, d = ft(e, u, n.w, n.h, .22, i), f = r(t, n.x, n.y, n.w, n.h, i, {
		titleTopPadFrac: .035,
		titleBottomPadFrac: .035,
		legendSideReserveFrac: 0,
		legendReserve: d,
		radialGapFrac: .015
	});
	Jt(e, t, n.x, n.y, n.w, n.h, n.y + f.title.topPad, f.title.fontPx);
	let { px0: p, py0: m, pw: h, ph: g } = f.plotRect, v = {
		x: p,
		y: m,
		w: h,
		h: g
	}, y = Q(t, t.dataLabelFontFace, "minor"), b = o.parentLabelLayout ?? "overlapping", x = t.series[0]?.seriesDataLabels, S = _(x?.fontSizeHpt, i) ?? Math.max(8, Math.min(13, f.plotRect.ph * .025)), C = x?.fontColor ? `#${x.fontColor}` : "#ffffff", w = new Map((t.series[0]?.dataLabelOverrides ?? []).map((e) => [e.idx, e])), T = t.chartBg ? t.chartBg.startsWith("#") ? t.chartBg : `#${t.chartBg}` : "#ffffff", E = (r, o) => {
		if (o.w < .5 || o.h < .5) return;
		let l = `#${zn(t, r.branchIndex, s.children.length, c?.chartexStyle)}`, u = Hn(t, r.branchIndex, s.children.length, c?.chartexStyle, c?.color), d = w.get(r.labelIndex), f = d?.fontColor ? `#${d.fontColor}` : C, p = _(d?.fontSizeHpt, i) ?? S, m = d?.fontBold ?? x?.fontBold ?? !1;
		if (r.children.length > 0) {
			let i = Fn(t, c, r.labelIndex, r.label, r.value, {
				visible: b !== "none",
				showVal: !1,
				showCatName: !0
			}, w), s = i != null && (b !== "overlapping" || r.depth === 0), h = p, g = b === "banner" && s ? Math.min(o.h * .28, h + 7) : 0;
			g > 0 && u && (e.fillStyle = Un(e, u, o.x, o.y, o.w, g, l, a), e.fillRect(o.x, o.y, o.w, g));
			let _ = {
				x: o.x,
				y: o.y + g,
				w: o.w,
				h: Math.max(0, o.h - g)
			};
			for (let e of fr(r.children, _)) E(e.node, e.rect);
			if (s && (i.manualLayout || o.w > h * 2 && o.h > h + 4)) {
				e.font = `${m ? "bold " : ""}${h}px ${y}`;
				let t = g > 0 ? {
					x: o.x,
					y: o.y,
					w: o.w,
					h: g
				} : o, r = d?.position ?? "inBase";
				Dn(e, i.text, i.manualLayout ? {
					kind: "point",
					x: o.x + o.w / 2,
					y: o.y + o.h / 2,
					position: r
				} : {
					kind: "box",
					rect: t,
					position: r
				}, i.manualLayout ? v : t, h, f, i.manualLayout, n);
			}
			return;
		}
		u && (e.fillStyle = Un(e, u, o.x, o.y, o.w, o.h, l, a), e.fillRect(o.x, o.y, o.w, o.h)), Kn(e, t, t.chartexDataPointStyle, t.series[0], r.branchIndex, s.children.length, T, i, { linkedNoStyleFallback: !0 }) && e.strokeRect(o.x, o.y, o.w, o.h);
		let h = Fn(t, c, r.labelIndex, r.label, r.value, {
			visible: !1,
			showVal: !1,
			showCatName: !1
		}, w);
		if (!h) return;
		let g = _(h.fontSizeHpt, i) ?? p;
		if (!h.manualLayout && (o.w <= g * 1.2 || o.h <= g * 1.2)) return;
		e.font = `${h.fontBold ? "bold " : ""}${g}px ${y}`;
		let D = o, O = h.position === "outEnd" ? "inEnd" : h.position ?? "ctr";
		Dn(e, h.text, h.manualLayout ? {
			kind: "point",
			x: o.x + o.w / 2,
			y: o.y + o.h / 2,
			position: O
		} : {
			kind: "box",
			rect: D,
			position: O
		}, h.manualLayout ? v : D, g, h.fontColor ? `#${h.fontColor}` : f, h.manualLayout, n);
	};
	e.save(), e.beginPath(), e.rect(p, m, h, g), e.clip();
	for (let e of fr(s.children, {
		x: p,
		y: m,
		w: h,
		h: g
	})) E(e.node, e.rect);
	e.restore(), ht(e, u, f.legend, n.x, n.y, n.w, n.h, p, m, h, g, f.title.bandH + 2, i, l, a);
}
function mr(e, t, n, r) {
	let i = t.chartTextBoxes;
	if (i?.length) for (let a of i) {
		let i = n.x + a.x * n.w, o = n.y + a.y * n.h, s = a.w * n.w, c = a.h * n.h;
		if (!(s > 0 && c > 0)) continue;
		let l = i + (a.lIns ?? 91440) / D * r, u = o + (a.tIns ?? 45720) / D * r, d = i + s - (a.rIns ?? 91440) / D * r, f = o + c - (a.bIns ?? 45720) / D * r, p = d - l, m = f - u;
		if (!(p > 0 && m > 0)) continue;
		let h = (e, t) => {
			let n = Math.max(1, ...t.map((e) => e.fontPx));
			return {
				paragraph: e,
				runs: t,
				width: t.reduce((e, t) => e + t.width, 0),
				height: n * 1.2,
				baseline: n * .9
			};
		}, g = a.paragraphs.flatMap((n) => {
			let i = n.runs.map((n) => {
				let i = Math.max(1, (n.fontSizeHpt ?? 1e3) / 100 * r), a = `${n.bold ? "bold " : ""}${i}px ${Q(t, n.fontFace, "minor")}`;
				return e.font = a, {
					run: n,
					text: n.text,
					fontPx: i,
					font: a,
					width: e.measureText(n.text).width
				};
			}), o = i.reduce((e, t) => e + t.width, 0);
			if (a.wrap === "none" || o <= p) return [h(n, i)];
			let s = [], c = [], l = 0, u = () => {
				c.length && (s.push(h(n, c)), c = [], l = 0);
			};
			for (let t of i) {
				let n = t.text.match(/\s+|\S+/g) ?? [];
				for (let r of n) {
					let n = /^\s+$/.test(r);
					e.font = t.font;
					let i = e.measureText(r).width;
					c.length && l + i > p && u(), !(n && !c.length) && (c.push({
						...t,
						text: r,
						width: i
					}), l += i);
				}
			}
			return u(), s.length ? s : [h(n, i)];
		}), _ = g.reduce((e, t) => e + t.height, 0), v = a.verticalAnchor === "b" ? f - _ : a.verticalAnchor === "ctr" ? u + (m - _) / 2 : u;
		e.save(), e.beginPath(), e.rect(i, o, s, c), e.clip(), e.textAlign = "left", e.textBaseline = "alphabetic";
		let y = v;
		for (let t of g) {
			let n = t.paragraph.align, r = n === "ctr" ? l + (p - t.width) / 2 : n === "r" ? d - t.width : l;
			for (let n of t.runs) e.font = n.font, e.fillStyle = n.run.color ? `#${n.run.color}` : "#000000", e.fillText(n.text, r, y + t.baseline), r += n.width;
			y += t.height;
		}
		e.restore();
	}
}
function hr(e, t, n, r = S, i = 0, a, o) {
	e.save();
	try {
		let { x: s, y: c, w: l, h: u } = n;
		if (t.chartBg && (e.fillStyle = `#${t.chartBg}`, e.fillRect(s, c, l, u)), t.chartBorderColor) {
			e.save(), e.strokeStyle = `#${t.chartBorderColor}`, e.lineWidth = t.chartBorderWidthEmu ? Math.max(.5, t.chartBorderWidthEmu / D) * r : 1;
			let n = e.lineWidth;
			e.strokeRect(s + n / 2, c + n / 2, l - n, u - n), e.restore();
		}
		let d = t.chartexBox != null || t.chartexSunburst != null || t.chartexTreemap != null || t.chartexRegionMap != null;
		if (t.series.length === 0 && !d) {
			e.fillStyle = "#888", e.font = "12px sans-serif", e.textAlign = "center", e.textBaseline = "middle", e.fillText("(no data)", s + l / 2, c + u / 2), mr(e, t, n, r);
			return;
		}
		let f = Zn(t), p = Qn(t, a);
		if ((f != null || p != null) && $n(e, n, Math.max(f ?? 0, p ?? 0))) {
			mr(e, t, n, r);
			return;
		}
		if (a?.render(e, t, n, r)) {
			mr(e, t, n, r);
			return;
		}
		if (o?.render(e, t, n, r)) {
			mr(e, t, n, r);
			return;
		}
		switch (t.chartType) {
			case "clusteredBar":
			case "clusteredBarH":
			case "stackedBar":
			case "stackedBarH":
			case "stackedBarPct":
			case "stackedBarHPct":
				Qt(e, t, n, r);
				break;
			case "line":
			case "stackedLine":
			case "stackedLinePct":
				$t(e, t, n, r);
				break;
			case "area":
			case "stackedArea":
			case "stackedAreaPct":
				tn(e, t, n, r);
				break;
			case "pie":
				on(e, t, n, !1, r);
				break;
			case "ofPie":
				an(e, t, n, r);
				break;
			case "doughnut":
				on(e, t, n, !0, r);
				break;
			case "radar":
				pn(e, t, n, r);
				break;
			case "scatter":
			case "bubble":
				xn(e, t, n, r);
				break;
			case "waterfall":
				tr(e, t, n, r, i);
				break;
			case "clusteredColumn":
				Qt(e, {
					...t,
					chartType: "clusteredBar"
				}, n, r, { gapPolicy: "chartex" });
				break;
			case "histogram":
				er(e, t, n, r);
				break;
			case "funnel":
				nr(e, t, n, r, i);
				break;
			case "paretoLine":
				rr(e, t, n, r);
				break;
			case "pareto":
				ir(e, t, n, r);
				break;
			case "stock":
				en(e, t, n, r);
				break;
			case "boxWhisker":
				or(e, t, n, r, i);
				break;
			case "sunburst":
				dr(e, t, n, r, i);
				break;
			case "treemap":
				pr(e, t, n, r, i);
				break;
			default: e.fillStyle = "#888", e.font = "11px sans-serif", e.textAlign = "center", e.textBaseline = "middle", e.fillText(`Chart: ${t.chartType}`, s + l / 2, c + u / 2);
		}
		mr(e, t, n, r);
	} finally {
		e.restore();
	}
}
var gr = {
	accentbordercallout1: {
		adj: [
			["adj1", "val 18750"],
			["adj2", "val -8333"],
			["adj3", "val 112500"],
			["adj4", "val -38333"]
		],
		gd: [
			["y1", "*/ h adj1 100000"],
			["x1", "*/ w adj2 100000"],
			["y2", "*/ h adj3 100000"],
			["x2", "*/ w adj4 100000"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"x1",
						"t"
					],
					["c"],
					[
						"l",
						"x1",
						"b"
					]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [[
					"m",
					"x1",
					"y1"
				], [
					"l",
					"x2",
					"y2"
				]]
			}
		]
	},
	accentbordercallout2: {
		adj: [
			["adj1", "val 18750"],
			["adj2", "val -8333"],
			["adj3", "val 18750"],
			["adj4", "val -16667"],
			["adj5", "val 112500"],
			["adj6", "val -46667"]
		],
		gd: [
			["y1", "*/ h adj1 100000"],
			["x1", "*/ w adj2 100000"],
			["y2", "*/ h adj3 100000"],
			["x2", "*/ w adj4 100000"],
			["y3", "*/ h adj5 100000"],
			["x3", "*/ w adj6 100000"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"x1",
						"t"
					],
					["c"],
					[
						"l",
						"x1",
						"b"
					]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"x1",
						"y1"
					],
					[
						"l",
						"x2",
						"y2"
					],
					[
						"l",
						"x3",
						"y3"
					]
				]
			}
		]
	},
	accentbordercallout3: {
		adj: [
			["adj1", "val 18750"],
			["adj2", "val -8333"],
			["adj3", "val 18750"],
			["adj4", "val -16667"],
			["adj5", "val 100000"],
			["adj6", "val -16667"],
			["adj7", "val 112963"],
			["adj8", "val -8333"]
		],
		gd: [
			["y1", "*/ h adj1 100000"],
			["x1", "*/ w adj2 100000"],
			["y2", "*/ h adj3 100000"],
			["x2", "*/ w adj4 100000"],
			["y3", "*/ h adj5 100000"],
			["x3", "*/ w adj6 100000"],
			["y4", "*/ h adj7 100000"],
			["x4", "*/ w adj8 100000"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"x1",
						"t"
					],
					["c"],
					[
						"l",
						"x1",
						"b"
					]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"x1",
						"y1"
					],
					[
						"l",
						"x2",
						"y2"
					],
					[
						"l",
						"x3",
						"y3"
					],
					[
						"l",
						"x4",
						"y4"
					]
				]
			}
		]
	},
	accentcallout1: {
		adj: [
			["adj1", "val 18750"],
			["adj2", "val -8333"],
			["adj3", "val 112500"],
			["adj4", "val -38333"]
		],
		gd: [
			["y1", "*/ h adj1 100000"],
			["x1", "*/ w adj2 100000"],
			["y2", "*/ h adj3 100000"],
			["x2", "*/ w adj4 100000"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"x1",
						"t"
					],
					["c"],
					[
						"l",
						"x1",
						"b"
					]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [[
					"m",
					"x1",
					"y1"
				], [
					"l",
					"x2",
					"y2"
				]]
			}
		]
	},
	accentcallout2: {
		adj: [
			["adj1", "val 18750"],
			["adj2", "val -8333"],
			["adj3", "val 18750"],
			["adj4", "val -16667"],
			["adj5", "val 112500"],
			["adj6", "val -46667"]
		],
		gd: [
			["y1", "*/ h adj1 100000"],
			["x1", "*/ w adj2 100000"],
			["y2", "*/ h adj3 100000"],
			["x2", "*/ w adj4 100000"],
			["y3", "*/ h adj5 100000"],
			["x3", "*/ w adj6 100000"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"x1",
						"t"
					],
					["c"],
					[
						"l",
						"x1",
						"b"
					]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"x1",
						"y1"
					],
					[
						"l",
						"x2",
						"y2"
					],
					[
						"l",
						"x3",
						"y3"
					]
				]
			}
		]
	},
	accentcallout3: {
		adj: [
			["adj1", "val 18750"],
			["adj2", "val -8333"],
			["adj3", "val 18750"],
			["adj4", "val -16667"],
			["adj5", "val 100000"],
			["adj6", "val -16667"],
			["adj7", "val 112963"],
			["adj8", "val -8333"]
		],
		gd: [
			["y1", "*/ h adj1 100000"],
			["x1", "*/ w adj2 100000"],
			["y2", "*/ h adj3 100000"],
			["x2", "*/ w adj4 100000"],
			["y3", "*/ h adj5 100000"],
			["x3", "*/ w adj6 100000"],
			["y4", "*/ h adj7 100000"],
			["x4", "*/ w adj8 100000"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"x1",
						"t"
					],
					["c"],
					[
						"l",
						"x1",
						"b"
					]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"x1",
						"y1"
					],
					[
						"l",
						"x2",
						"y2"
					],
					[
						"l",
						"x3",
						"y3"
					],
					[
						"l",
						"x4",
						"y4"
					]
				]
			}
		]
	},
	actionbuttonbackprevious: {
		adj: [],
		gd: [
			["dx2", "*/ ss 3 8"],
			["g9", "+- vc 0 dx2"],
			["g10", "+- vc dx2 0"],
			["g11", "+- hc 0 dx2"],
			["g12", "+- hc dx2 0"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"],
					[
						"m",
						"g11",
						"vc"
					],
					[
						"l",
						"g12",
						"g9"
					],
					[
						"l",
						"g12",
						"g10"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darken",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"g11",
						"vc"
					],
					[
						"l",
						"g12",
						"g9"
					],
					[
						"l",
						"g12",
						"g10"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"g11",
						"vc"
					],
					[
						"l",
						"g12",
						"g9"
					],
					[
						"l",
						"g12",
						"g10"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"]
				]
			}
		]
	},
	actionbuttonbeginning: {
		adj: [],
		gd: [
			["dx2", "*/ ss 3 8"],
			["g9", "+- vc 0 dx2"],
			["g10", "+- vc dx2 0"],
			["g11", "+- hc 0 dx2"],
			["g12", "+- hc dx2 0"],
			["g13", "*/ ss 3 4"],
			["g14", "*/ g13 1 8"],
			["g15", "*/ g13 1 4"],
			["g16", "+- g11 g14 0"],
			["g17", "+- g11 g15 0"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"],
					[
						"m",
						"g17",
						"vc"
					],
					[
						"l",
						"g12",
						"g9"
					],
					[
						"l",
						"g12",
						"g10"
					],
					["c"],
					[
						"m",
						"g16",
						"g9"
					],
					[
						"l",
						"g11",
						"g9"
					],
					[
						"l",
						"g11",
						"g10"
					],
					[
						"l",
						"g16",
						"g10"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darken",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"g17",
						"vc"
					],
					[
						"l",
						"g12",
						"g9"
					],
					[
						"l",
						"g12",
						"g10"
					],
					["c"],
					[
						"m",
						"g16",
						"g9"
					],
					[
						"l",
						"g11",
						"g9"
					],
					[
						"l",
						"g11",
						"g10"
					],
					[
						"l",
						"g16",
						"g10"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"g17",
						"vc"
					],
					[
						"l",
						"g12",
						"g9"
					],
					[
						"l",
						"g12",
						"g10"
					],
					["c"],
					[
						"m",
						"g16",
						"g9"
					],
					[
						"l",
						"g16",
						"g10"
					],
					[
						"l",
						"g11",
						"g10"
					],
					[
						"l",
						"g11",
						"g9"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"]
				]
			}
		]
	},
	actionbuttonblank: {
		adj: [],
		gd: [],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"l",
					"r",
					"t"
				],
				[
					"l",
					"r",
					"b"
				],
				[
					"l",
					"l",
					"b"
				],
				["c"]
			]
		}]
	},
	actionbuttondocument: {
		adj: [],
		gd: [
			["dx2", "*/ ss 3 8"],
			["g9", "+- vc 0 dx2"],
			["g10", "+- vc dx2 0"],
			["dx1", "*/ ss 9 32"],
			["g11", "+- hc 0 dx1"],
			["g12", "+- hc dx1 0"],
			["g13", "*/ ss 3 16"],
			["g14", "+- g12 0 g13"],
			["g15", "+- g9 g13 0"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"],
					[
						"m",
						"g11",
						"g9"
					],
					[
						"l",
						"g14",
						"g9"
					],
					[
						"l",
						"g12",
						"g15"
					],
					[
						"l",
						"g12",
						"g10"
					],
					[
						"l",
						"g11",
						"g10"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darkenLess",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"g11",
						"g9"
					],
					[
						"l",
						"g14",
						"g9"
					],
					[
						"l",
						"g14",
						"g15"
					],
					[
						"l",
						"g12",
						"g15"
					],
					[
						"l",
						"g12",
						"g10"
					],
					[
						"l",
						"g11",
						"g10"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darken",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"g14",
						"g9"
					],
					[
						"l",
						"g14",
						"g15"
					],
					[
						"l",
						"g12",
						"g15"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"g11",
						"g9"
					],
					[
						"l",
						"g14",
						"g9"
					],
					[
						"l",
						"g12",
						"g15"
					],
					[
						"l",
						"g12",
						"g10"
					],
					[
						"l",
						"g11",
						"g10"
					],
					["c"],
					[
						"m",
						"g12",
						"g15"
					],
					[
						"l",
						"g14",
						"g15"
					],
					[
						"l",
						"g14",
						"g9"
					]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"]
				]
			}
		]
	},
	actionbuttonend: {
		adj: [],
		gd: [
			["dx2", "*/ ss 3 8"],
			["g9", "+- vc 0 dx2"],
			["g10", "+- vc dx2 0"],
			["g11", "+- hc 0 dx2"],
			["g12", "+- hc dx2 0"],
			["g13", "*/ ss 3 4"],
			["g14", "*/ g13 3 4"],
			["g15", "*/ g13 7 8"],
			["g16", "+- g11 g14 0"],
			["g17", "+- g11 g15 0"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"],
					[
						"m",
						"g16",
						"vc"
					],
					[
						"l",
						"g11",
						"g9"
					],
					[
						"l",
						"g11",
						"g10"
					],
					["c"],
					[
						"m",
						"g17",
						"g9"
					],
					[
						"l",
						"g12",
						"g9"
					],
					[
						"l",
						"g12",
						"g10"
					],
					[
						"l",
						"g17",
						"g10"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darken",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"g16",
						"vc"
					],
					[
						"l",
						"g11",
						"g9"
					],
					[
						"l",
						"g11",
						"g10"
					],
					["c"],
					[
						"m",
						"g17",
						"g9"
					],
					[
						"l",
						"g12",
						"g9"
					],
					[
						"l",
						"g12",
						"g10"
					],
					[
						"l",
						"g17",
						"g10"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"g16",
						"vc"
					],
					[
						"l",
						"g11",
						"g10"
					],
					[
						"l",
						"g11",
						"g9"
					],
					["c"],
					[
						"m",
						"g17",
						"g9"
					],
					[
						"l",
						"g12",
						"g9"
					],
					[
						"l",
						"g12",
						"g10"
					],
					[
						"l",
						"g17",
						"g10"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"]
				]
			}
		]
	},
	actionbuttonforwardnext: {
		adj: [],
		gd: [
			["dx2", "*/ ss 3 8"],
			["g9", "+- vc 0 dx2"],
			["g10", "+- vc dx2 0"],
			["g11", "+- hc 0 dx2"],
			["g12", "+- hc dx2 0"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"],
					[
						"m",
						"g12",
						"vc"
					],
					[
						"l",
						"g11",
						"g9"
					],
					[
						"l",
						"g11",
						"g10"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darken",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"g12",
						"vc"
					],
					[
						"l",
						"g11",
						"g9"
					],
					[
						"l",
						"g11",
						"g10"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"g12",
						"vc"
					],
					[
						"l",
						"g11",
						"g10"
					],
					[
						"l",
						"g11",
						"g9"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"]
				]
			}
		]
	},
	actionbuttonhelp: {
		adj: [],
		gd: [
			["dx2", "*/ ss 3 8"],
			["g9", "+- vc 0 dx2"],
			["g11", "+- hc 0 dx2"],
			["g13", "*/ ss 3 4"],
			["g14", "*/ g13 1 7"],
			["g15", "*/ g13 3 14"],
			["g16", "*/ g13 2 7"],
			["g19", "*/ g13 3 7"],
			["g20", "*/ g13 4 7"],
			["g21", "*/ g13 17 28"],
			["g23", "*/ g13 21 28"],
			["g24", "*/ g13 11 14"],
			["g27", "+- g9 g16 0"],
			["g29", "+- g9 g21 0"],
			["g30", "+- g9 g23 0"],
			["g31", "+- g9 g24 0"],
			["g33", "+- g11 g15 0"],
			["g36", "+- g11 g19 0"],
			["g37", "+- g11 g20 0"],
			["g41", "*/ g13 1 14"],
			["g42", "*/ g13 3 28"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"],
					[
						"m",
						"g33",
						"g27"
					],
					[
						"a",
						"g16",
						"g16",
						"cd2",
						"cd2"
					],
					[
						"a",
						"g14",
						"g15",
						"0",
						"cd4"
					],
					[
						"a",
						"g41",
						"g42",
						"3cd4",
						"-5400000"
					],
					[
						"l",
						"g37",
						"g30"
					],
					[
						"l",
						"g36",
						"g30"
					],
					[
						"l",
						"g36",
						"g29"
					],
					[
						"a",
						"g14",
						"g15",
						"cd2",
						"cd4"
					],
					[
						"a",
						"g41",
						"g42",
						"cd4",
						"-5400000"
					],
					[
						"a",
						"g14",
						"g14",
						"0",
						"-10800000"
					],
					["c"],
					[
						"m",
						"hc",
						"g31"
					],
					[
						"a",
						"g42",
						"g42",
						"3cd4",
						"21600000"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darken",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"g33",
						"g27"
					],
					[
						"a",
						"g16",
						"g16",
						"cd2",
						"cd2"
					],
					[
						"a",
						"g14",
						"g15",
						"0",
						"cd4"
					],
					[
						"a",
						"g41",
						"g42",
						"3cd4",
						"-5400000"
					],
					[
						"l",
						"g37",
						"g30"
					],
					[
						"l",
						"g36",
						"g30"
					],
					[
						"l",
						"g36",
						"g29"
					],
					[
						"a",
						"g14",
						"g15",
						"cd2",
						"cd4"
					],
					[
						"a",
						"g41",
						"g42",
						"cd4",
						"-5400000"
					],
					[
						"a",
						"g14",
						"g14",
						"0",
						"-10800000"
					],
					["c"],
					[
						"m",
						"hc",
						"g31"
					],
					[
						"a",
						"g42",
						"g42",
						"3cd4",
						"21600000"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"g33",
						"g27"
					],
					[
						"a",
						"g16",
						"g16",
						"cd2",
						"cd2"
					],
					[
						"a",
						"g14",
						"g15",
						"0",
						"cd4"
					],
					[
						"a",
						"g41",
						"g42",
						"3cd4",
						"-5400000"
					],
					[
						"l",
						"g37",
						"g30"
					],
					[
						"l",
						"g36",
						"g30"
					],
					[
						"l",
						"g36",
						"g29"
					],
					[
						"a",
						"g14",
						"g15",
						"cd2",
						"cd4"
					],
					[
						"a",
						"g41",
						"g42",
						"cd4",
						"-5400000"
					],
					[
						"a",
						"g14",
						"g14",
						"0",
						"-10800000"
					],
					["c"],
					[
						"m",
						"hc",
						"g31"
					],
					[
						"a",
						"g42",
						"g42",
						"3cd4",
						"21600000"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"]
				]
			}
		]
	},
	actionbuttonhome: {
		adj: [],
		gd: [
			["dx2", "*/ ss 3 8"],
			["g9", "+- vc 0 dx2"],
			["g10", "+- vc dx2 0"],
			["g11", "+- hc 0 dx2"],
			["g12", "+- hc dx2 0"],
			["g13", "*/ ss 3 4"],
			["g14", "*/ g13 1 16"],
			["g15", "*/ g13 1 8"],
			["g16", "*/ g13 3 16"],
			["g17", "*/ g13 5 16"],
			["g18", "*/ g13 7 16"],
			["g19", "*/ g13 9 16"],
			["g20", "*/ g13 11 16"],
			["g21", "*/ g13 3 4"],
			["g22", "*/ g13 13 16"],
			["g23", "*/ g13 7 8"],
			["g24", "+- g9 g14 0"],
			["g25", "+- g9 g16 0"],
			["g26", "+- g9 g17 0"],
			["g27", "+- g9 g21 0"],
			["g28", "+- g11 g15 0"],
			["g29", "+- g11 g18 0"],
			["g30", "+- g11 g19 0"],
			["g31", "+- g11 g20 0"],
			["g32", "+- g11 g22 0"],
			["g33", "+- g11 g23 0"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"],
					[
						"m",
						"hc",
						"g9"
					],
					[
						"l",
						"g11",
						"vc"
					],
					[
						"l",
						"g28",
						"vc"
					],
					[
						"l",
						"g28",
						"g10"
					],
					[
						"l",
						"g33",
						"g10"
					],
					[
						"l",
						"g33",
						"vc"
					],
					[
						"l",
						"g12",
						"vc"
					],
					[
						"l",
						"g32",
						"g26"
					],
					[
						"l",
						"g32",
						"g24"
					],
					[
						"l",
						"g31",
						"g24"
					],
					[
						"l",
						"g31",
						"g25"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darkenLess",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"g32",
						"g26"
					],
					[
						"l",
						"g32",
						"g24"
					],
					[
						"l",
						"g31",
						"g24"
					],
					[
						"l",
						"g31",
						"g25"
					],
					["c"],
					[
						"m",
						"g28",
						"vc"
					],
					[
						"l",
						"g28",
						"g10"
					],
					[
						"l",
						"g29",
						"g10"
					],
					[
						"l",
						"g29",
						"g27"
					],
					[
						"l",
						"g30",
						"g27"
					],
					[
						"l",
						"g30",
						"g10"
					],
					[
						"l",
						"g33",
						"g10"
					],
					[
						"l",
						"g33",
						"vc"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darken",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"hc",
						"g9"
					],
					[
						"l",
						"g11",
						"vc"
					],
					[
						"l",
						"g12",
						"vc"
					],
					["c"],
					[
						"m",
						"g29",
						"g27"
					],
					[
						"l",
						"g30",
						"g27"
					],
					[
						"l",
						"g30",
						"g10"
					],
					[
						"l",
						"g29",
						"g10"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"hc",
						"g9"
					],
					[
						"l",
						"g31",
						"g25"
					],
					[
						"l",
						"g31",
						"g24"
					],
					[
						"l",
						"g32",
						"g24"
					],
					[
						"l",
						"g32",
						"g26"
					],
					[
						"l",
						"g12",
						"vc"
					],
					[
						"l",
						"g33",
						"vc"
					],
					[
						"l",
						"g33",
						"g10"
					],
					[
						"l",
						"g28",
						"g10"
					],
					[
						"l",
						"g28",
						"vc"
					],
					[
						"l",
						"g11",
						"vc"
					],
					["c"],
					[
						"m",
						"g31",
						"g25"
					],
					[
						"l",
						"g32",
						"g26"
					],
					[
						"m",
						"g33",
						"vc"
					],
					[
						"l",
						"g28",
						"vc"
					],
					[
						"m",
						"g29",
						"g10"
					],
					[
						"l",
						"g29",
						"g27"
					],
					[
						"l",
						"g30",
						"g27"
					],
					[
						"l",
						"g30",
						"g10"
					]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"]
				]
			}
		]
	},
	actionbuttoninformation: {
		adj: [],
		gd: [
			["dx2", "*/ ss 3 8"],
			["g9", "+- vc 0 dx2"],
			["g11", "+- hc 0 dx2"],
			["g13", "*/ ss 3 4"],
			["g14", "*/ g13 1 32"],
			["g17", "*/ g13 5 16"],
			["g18", "*/ g13 3 8"],
			["g19", "*/ g13 13 32"],
			["g20", "*/ g13 19 32"],
			["g22", "*/ g13 11 16"],
			["g23", "*/ g13 13 16"],
			["g24", "*/ g13 7 8"],
			["g25", "+- g9 g14 0"],
			["g28", "+- g9 g17 0"],
			["g29", "+- g9 g18 0"],
			["g30", "+- g9 g23 0"],
			["g31", "+- g9 g24 0"],
			["g32", "+- g11 g17 0"],
			["g34", "+- g11 g19 0"],
			["g35", "+- g11 g20 0"],
			["g37", "+- g11 g22 0"],
			["g38", "*/ g13 3 32"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"],
					[
						"m",
						"hc",
						"g9"
					],
					[
						"a",
						"dx2",
						"dx2",
						"3cd4",
						"21600000"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darken",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"hc",
						"g9"
					],
					[
						"a",
						"dx2",
						"dx2",
						"3cd4",
						"21600000"
					],
					["c"],
					[
						"m",
						"hc",
						"g25"
					],
					[
						"a",
						"g38",
						"g38",
						"3cd4",
						"21600000"
					],
					[
						"m",
						"g32",
						"g28"
					],
					[
						"l",
						"g32",
						"g29"
					],
					[
						"l",
						"g34",
						"g29"
					],
					[
						"l",
						"g34",
						"g30"
					],
					[
						"l",
						"g32",
						"g30"
					],
					[
						"l",
						"g32",
						"g31"
					],
					[
						"l",
						"g37",
						"g31"
					],
					[
						"l",
						"g37",
						"g30"
					],
					[
						"l",
						"g35",
						"g30"
					],
					[
						"l",
						"g35",
						"g28"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "lighten",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"hc",
						"g25"
					],
					[
						"a",
						"g38",
						"g38",
						"3cd4",
						"21600000"
					],
					[
						"m",
						"g32",
						"g28"
					],
					[
						"l",
						"g35",
						"g28"
					],
					[
						"l",
						"g35",
						"g30"
					],
					[
						"l",
						"g37",
						"g30"
					],
					[
						"l",
						"g37",
						"g31"
					],
					[
						"l",
						"g32",
						"g31"
					],
					[
						"l",
						"g32",
						"g30"
					],
					[
						"l",
						"g34",
						"g30"
					],
					[
						"l",
						"g34",
						"g29"
					],
					[
						"l",
						"g32",
						"g29"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"hc",
						"g9"
					],
					[
						"a",
						"dx2",
						"dx2",
						"3cd4",
						"21600000"
					],
					["c"],
					[
						"m",
						"hc",
						"g25"
					],
					[
						"a",
						"g38",
						"g38",
						"3cd4",
						"21600000"
					],
					[
						"m",
						"g32",
						"g28"
					],
					[
						"l",
						"g35",
						"g28"
					],
					[
						"l",
						"g35",
						"g30"
					],
					[
						"l",
						"g37",
						"g30"
					],
					[
						"l",
						"g37",
						"g31"
					],
					[
						"l",
						"g32",
						"g31"
					],
					[
						"l",
						"g32",
						"g30"
					],
					[
						"l",
						"g34",
						"g30"
					],
					[
						"l",
						"g34",
						"g29"
					],
					[
						"l",
						"g32",
						"g29"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"]
				]
			}
		]
	},
	actionbuttonmovie: {
		adj: [],
		gd: [
			["dx2", "*/ ss 3 8"],
			["g9", "+- vc 0 dx2"],
			["g10", "+- vc dx2 0"],
			["g11", "+- hc 0 dx2"],
			["g12", "+- hc dx2 0"],
			["g13", "*/ ss 3 4"],
			["g14", "*/ g13 1455 21600"],
			["g15", "*/ g13 1905 21600"],
			["g16", "*/ g13 2325 21600"],
			["g17", "*/ g13 16155 21600"],
			["g18", "*/ g13 17010 21600"],
			["g19", "*/ g13 19335 21600"],
			["g20", "*/ g13 19725 21600"],
			["g21", "*/ g13 20595 21600"],
			["g22", "*/ g13 5280 21600"],
			["g23", "*/ g13 5730 21600"],
			["g24", "*/ g13 6630 21600"],
			["g25", "*/ g13 7492 21600"],
			["g26", "*/ g13 9067 21600"],
			["g27", "*/ g13 9555 21600"],
			["g28", "*/ g13 13342 21600"],
			["g29", "*/ g13 14580 21600"],
			["g30", "*/ g13 15592 21600"],
			["g31", "+- g11 g14 0"],
			["g32", "+- g11 g15 0"],
			["g33", "+- g11 g16 0"],
			["g34", "+- g11 g17 0"],
			["g35", "+- g11 g18 0"],
			["g36", "+- g11 g19 0"],
			["g37", "+- g11 g20 0"],
			["g38", "+- g11 g21 0"],
			["g39", "+- g9 g22 0"],
			["g40", "+- g9 g23 0"],
			["g41", "+- g9 g24 0"],
			["g42", "+- g9 g25 0"],
			["g43", "+- g9 g26 0"],
			["g44", "+- g9 g27 0"],
			["g45", "+- g9 g28 0"],
			["g46", "+- g9 g29 0"],
			["g47", "+- g9 g30 0"],
			["g48", "+- g9 g31 0"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"],
					[
						"m",
						"g11",
						"g39"
					],
					[
						"l",
						"g11",
						"g44"
					],
					[
						"l",
						"g31",
						"g44"
					],
					[
						"l",
						"g32",
						"g43"
					],
					[
						"l",
						"g33",
						"g43"
					],
					[
						"l",
						"g33",
						"g47"
					],
					[
						"l",
						"g35",
						"g47"
					],
					[
						"l",
						"g35",
						"g45"
					],
					[
						"l",
						"g36",
						"g45"
					],
					[
						"l",
						"g38",
						"g46"
					],
					[
						"l",
						"g12",
						"g46"
					],
					[
						"l",
						"g12",
						"g41"
					],
					[
						"l",
						"g38",
						"g41"
					],
					[
						"l",
						"g37",
						"g42"
					],
					[
						"l",
						"g35",
						"g42"
					],
					[
						"l",
						"g35",
						"g41"
					],
					[
						"l",
						"g34",
						"g40"
					],
					[
						"l",
						"g32",
						"g40"
					],
					[
						"l",
						"g31",
						"g39"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darken",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"g11",
						"g39"
					],
					[
						"l",
						"g11",
						"g44"
					],
					[
						"l",
						"g31",
						"g44"
					],
					[
						"l",
						"g32",
						"g43"
					],
					[
						"l",
						"g33",
						"g43"
					],
					[
						"l",
						"g33",
						"g47"
					],
					[
						"l",
						"g35",
						"g47"
					],
					[
						"l",
						"g35",
						"g45"
					],
					[
						"l",
						"g36",
						"g45"
					],
					[
						"l",
						"g38",
						"g46"
					],
					[
						"l",
						"g12",
						"g46"
					],
					[
						"l",
						"g12",
						"g41"
					],
					[
						"l",
						"g38",
						"g41"
					],
					[
						"l",
						"g37",
						"g42"
					],
					[
						"l",
						"g35",
						"g42"
					],
					[
						"l",
						"g35",
						"g41"
					],
					[
						"l",
						"g34",
						"g40"
					],
					[
						"l",
						"g32",
						"g40"
					],
					[
						"l",
						"g31",
						"g39"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"g11",
						"g39"
					],
					[
						"l",
						"g31",
						"g39"
					],
					[
						"l",
						"g32",
						"g40"
					],
					[
						"l",
						"g34",
						"g40"
					],
					[
						"l",
						"g35",
						"g41"
					],
					[
						"l",
						"g35",
						"g42"
					],
					[
						"l",
						"g37",
						"g42"
					],
					[
						"l",
						"g38",
						"g41"
					],
					[
						"l",
						"g12",
						"g41"
					],
					[
						"l",
						"g12",
						"g46"
					],
					[
						"l",
						"g38",
						"g46"
					],
					[
						"l",
						"g36",
						"g45"
					],
					[
						"l",
						"g35",
						"g45"
					],
					[
						"l",
						"g35",
						"g47"
					],
					[
						"l",
						"g33",
						"g47"
					],
					[
						"l",
						"g33",
						"g43"
					],
					[
						"l",
						"g32",
						"g43"
					],
					[
						"l",
						"g31",
						"g44"
					],
					[
						"l",
						"g11",
						"g44"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"]
				]
			}
		]
	},
	actionbuttonreturn: {
		adj: [],
		gd: [
			["dx2", "*/ ss 3 8"],
			["g9", "+- vc 0 dx2"],
			["g10", "+- vc dx2 0"],
			["g11", "+- hc 0 dx2"],
			["g12", "+- hc dx2 0"],
			["g13", "*/ ss 3 4"],
			["g14", "*/ g13 7 8"],
			["g15", "*/ g13 3 4"],
			["g16", "*/ g13 5 8"],
			["g17", "*/ g13 3 8"],
			["g18", "*/ g13 1 4"],
			["g19", "+- g9 g15 0"],
			["g20", "+- g9 g16 0"],
			["g21", "+- g9 g18 0"],
			["g22", "+- g11 g14 0"],
			["g23", "+- g11 g15 0"],
			["g24", "+- g11 g16 0"],
			["g25", "+- g11 g17 0"],
			["g26", "+- g11 g18 0"],
			["g27", "*/ g13 1 8"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"],
					[
						"m",
						"g12",
						"g21"
					],
					[
						"l",
						"g23",
						"g9"
					],
					[
						"l",
						"hc",
						"g21"
					],
					[
						"l",
						"g24",
						"g21"
					],
					[
						"l",
						"g24",
						"g20"
					],
					[
						"a",
						"g27",
						"g27",
						"0",
						"cd4"
					],
					[
						"l",
						"g25",
						"g19"
					],
					[
						"a",
						"g27",
						"g27",
						"cd4",
						"cd4"
					],
					[
						"l",
						"g26",
						"g21"
					],
					[
						"l",
						"g11",
						"g21"
					],
					[
						"l",
						"g11",
						"g20"
					],
					[
						"a",
						"g17",
						"g17",
						"cd2",
						"-5400000"
					],
					[
						"l",
						"hc",
						"g10"
					],
					[
						"a",
						"g17",
						"g17",
						"cd4",
						"-5400000"
					],
					[
						"l",
						"g22",
						"g21"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darken",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"g12",
						"g21"
					],
					[
						"l",
						"g23",
						"g9"
					],
					[
						"l",
						"hc",
						"g21"
					],
					[
						"l",
						"g24",
						"g21"
					],
					[
						"l",
						"g24",
						"g20"
					],
					[
						"a",
						"g27",
						"g27",
						"0",
						"cd4"
					],
					[
						"l",
						"g25",
						"g19"
					],
					[
						"a",
						"g27",
						"g27",
						"cd4",
						"cd4"
					],
					[
						"l",
						"g26",
						"g21"
					],
					[
						"l",
						"g11",
						"g21"
					],
					[
						"l",
						"g11",
						"g20"
					],
					[
						"a",
						"g17",
						"g17",
						"cd2",
						"-5400000"
					],
					[
						"l",
						"hc",
						"g10"
					],
					[
						"a",
						"g17",
						"g17",
						"cd4",
						"-5400000"
					],
					[
						"l",
						"g22",
						"g21"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"g12",
						"g21"
					],
					[
						"l",
						"g22",
						"g21"
					],
					[
						"l",
						"g22",
						"g20"
					],
					[
						"a",
						"g17",
						"g17",
						"0",
						"cd4"
					],
					[
						"l",
						"g25",
						"g10"
					],
					[
						"a",
						"g17",
						"g17",
						"cd4",
						"cd4"
					],
					[
						"l",
						"g11",
						"g21"
					],
					[
						"l",
						"g26",
						"g21"
					],
					[
						"l",
						"g26",
						"g20"
					],
					[
						"a",
						"g27",
						"g27",
						"cd2",
						"-5400000"
					],
					[
						"l",
						"hc",
						"g19"
					],
					[
						"a",
						"g27",
						"g27",
						"cd4",
						"-5400000"
					],
					[
						"l",
						"g24",
						"g21"
					],
					[
						"l",
						"hc",
						"g21"
					],
					[
						"l",
						"g23",
						"g9"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"]
				]
			}
		]
	},
	actionbuttonsound: {
		adj: [],
		gd: [
			["dx2", "*/ ss 3 8"],
			["g9", "+- vc 0 dx2"],
			["g10", "+- vc dx2 0"],
			["g11", "+- hc 0 dx2"],
			["g12", "+- hc dx2 0"],
			["g13", "*/ ss 3 4"],
			["g14", "*/ g13 1 8"],
			["g15", "*/ g13 5 16"],
			["g16", "*/ g13 5 8"],
			["g17", "*/ g13 11 16"],
			["g18", "*/ g13 3 4"],
			["g19", "*/ g13 7 8"],
			["g20", "+- g9 g14 0"],
			["g21", "+- g9 g15 0"],
			["g22", "+- g9 g17 0"],
			["g23", "+- g9 g19 0"],
			["g24", "+- g11 g15 0"],
			["g25", "+- g11 g16 0"],
			["g26", "+- g11 g18 0"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"],
					[
						"m",
						"g11",
						"g21"
					],
					[
						"l",
						"g11",
						"g22"
					],
					[
						"l",
						"g24",
						"g22"
					],
					[
						"l",
						"g25",
						"g10"
					],
					[
						"l",
						"g25",
						"g9"
					],
					[
						"l",
						"g24",
						"g21"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darken",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"g11",
						"g21"
					],
					[
						"l",
						"g11",
						"g22"
					],
					[
						"l",
						"g24",
						"g22"
					],
					[
						"l",
						"g25",
						"g10"
					],
					[
						"l",
						"g25",
						"g9"
					],
					[
						"l",
						"g24",
						"g21"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"g11",
						"g21"
					],
					[
						"l",
						"g24",
						"g21"
					],
					[
						"l",
						"g25",
						"g9"
					],
					[
						"l",
						"g25",
						"g10"
					],
					[
						"l",
						"g24",
						"g22"
					],
					[
						"l",
						"g11",
						"g22"
					],
					["c"],
					[
						"m",
						"g26",
						"g21"
					],
					[
						"l",
						"g12",
						"g20"
					],
					[
						"m",
						"g26",
						"vc"
					],
					[
						"l",
						"g12",
						"vc"
					],
					[
						"m",
						"g26",
						"g22"
					],
					[
						"l",
						"g12",
						"g23"
					]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"]
				]
			}
		]
	},
	arc: {
		adj: [["adj1", "val 16200000"], ["adj2", "val 0"]],
		gd: [
			["stAng", "pin 0 adj1 21599999"],
			["enAng", "pin 0 adj2 21599999"],
			["sw11", "+- enAng 0 stAng"],
			["sw12", "+- sw11 21600000 0"],
			["swAng", "?: sw11 sw11 sw12"],
			["wt1", "sin wd2 stAng"],
			["ht1", "cos hd2 stAng"],
			["dx1", "cat2 wd2 ht1 wt1"],
			["dy1", "sat2 hd2 ht1 wt1"],
			["wt2", "sin wd2 enAng"],
			["ht2", "cos hd2 enAng"],
			["dx2", "cat2 wd2 ht2 wt2"],
			["dy2", "sat2 hd2 ht2 wt2"],
			["x1", "+- hc dx1 0"],
			["y1", "+- vc dy1 0"],
			["x2", "+- hc dx2 0"],
			["y2", "+- vc dy2 0"],
			["sw0", "+- 21600000 0 stAng"],
			["da1", "+- swAng 0 sw0"],
			["g1", "max x1 x2"],
			["ir", "?: da1 r g1"],
			["sw1", "+- cd4 0 stAng"],
			["sw2", "+- 27000000 0 stAng"],
			["sw3", "?: sw1 sw1 sw2"],
			["da2", "+- swAng 0 sw3"],
			["g5", "max y1 y2"],
			["ib", "?: da2 b g5"],
			["sw4", "+- cd2 0 stAng"],
			["sw5", "+- 32400000 0 stAng"],
			["sw6", "?: sw4 sw4 sw5"],
			["da3", "+- swAng 0 sw6"],
			["g9", "min x1 x2"],
			["il", "?: da3 l g9"],
			["sw7", "+- 3cd4 0 stAng"],
			["sw8", "+- 37800000 0 stAng"],
			["sw9", "?: sw7 sw7 sw8"],
			["da4", "+- swAng 0 sw9"],
			["g13", "min y1 y2"],
			["it", "?: da4 t g13"],
			["cang1", "+- stAng 0 cd4"],
			["cang2", "+- enAng cd4 0"],
			["cang3", "+/ cang1 cang2 2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !1,
			extrusionOk: !1,
			cmds: [
				[
					"m",
					"x1",
					"y1"
				],
				[
					"a",
					"wd2",
					"hd2",
					"stAng",
					"swAng"
				],
				[
					"l",
					"hc",
					"vc"
				],
				["c"]
			]
		}, {
			w: null,
			h: null,
			fill: "none",
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"x1",
				"y1"
			], [
				"a",
				"wd2",
				"hd2",
				"stAng",
				"swAng"
			]]
		}]
	},
	bentarrow: {
		adj: [
			["adj1", "val 25000"],
			["adj2", "val 25000"],
			["adj3", "val 25000"],
			["adj4", "val 43750"]
		],
		gd: [
			["a2", "pin 0 adj2 50000"],
			["maxAdj1", "*/ a2 2 1"],
			["a1", "pin 0 adj1 maxAdj1"],
			["a3", "pin 0 adj3 50000"],
			["th", "*/ ss a1 100000"],
			["aw2", "*/ ss a2 100000"],
			["th2", "*/ th 1 2"],
			["dh2", "+- aw2 0 th2"],
			["ah", "*/ ss a3 100000"],
			["bw", "+- r 0 ah"],
			["bh", "+- b 0 dh2"],
			["bs", "min bw bh"],
			["maxAdj4", "*/ 100000 bs ss"],
			["a4", "pin 0 adj4 maxAdj4"],
			["bd", "*/ ss a4 100000"],
			["bd3", "+- bd 0 th"],
			["bd2", "max bd3 0"],
			["x3", "+- th bd2 0"],
			["x4", "+- r 0 ah"],
			["y3", "+- dh2 th 0"],
			["y4", "+- y3 dh2 0"],
			["y5", "+- dh2 bd 0"],
			["y6", "+- y3 bd2 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"b"
				],
				[
					"l",
					"l",
					"y5"
				],
				[
					"a",
					"bd",
					"bd",
					"cd2",
					"cd4"
				],
				[
					"l",
					"x4",
					"dh2"
				],
				[
					"l",
					"x4",
					"t"
				],
				[
					"l",
					"r",
					"aw2"
				],
				[
					"l",
					"x4",
					"y4"
				],
				[
					"l",
					"x4",
					"y3"
				],
				[
					"l",
					"x3",
					"y3"
				],
				[
					"a",
					"bd2",
					"bd2",
					"3cd4",
					"-5400000"
				],
				[
					"l",
					"th",
					"b"
				],
				["c"]
			]
		}]
	},
	bentconnector2: {
		adj: [],
		gd: [],
		paths: [{
			w: null,
			h: null,
			fill: "none",
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"l",
					"r",
					"t"
				],
				[
					"l",
					"r",
					"b"
				]
			]
		}]
	},
	bentconnector3: {
		adj: [["adj1", "val 50000"]],
		gd: [["x1", "*/ w adj1 100000"]],
		paths: [{
			w: null,
			h: null,
			fill: "none",
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"l",
					"x1",
					"t"
				],
				[
					"l",
					"x1",
					"b"
				],
				[
					"l",
					"r",
					"b"
				]
			]
		}]
	},
	bentconnector4: {
		adj: [["adj1", "val 50000"], ["adj2", "val 50000"]],
		gd: [
			["x1", "*/ w adj1 100000"],
			["x2", "+/ x1 r 2"],
			["y2", "*/ h adj2 100000"],
			["y1", "+/ t y2 2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: "none",
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"l",
					"x1",
					"t"
				],
				[
					"l",
					"x1",
					"y2"
				],
				[
					"l",
					"r",
					"y2"
				],
				[
					"l",
					"r",
					"b"
				]
			]
		}]
	},
	bentconnector5: {
		adj: [
			["adj1", "val 50000"],
			["adj2", "val 50000"],
			["adj3", "val 50000"]
		],
		gd: [
			["x1", "*/ w adj1 100000"],
			["x3", "*/ w adj3 100000"],
			["x2", "+/ x1 x3 2"],
			["y2", "*/ h adj2 100000"],
			["y1", "+/ t y2 2"],
			["y3", "+/ b y2 2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: "none",
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"l",
					"x1",
					"t"
				],
				[
					"l",
					"x1",
					"y2"
				],
				[
					"l",
					"x3",
					"y2"
				],
				[
					"l",
					"x3",
					"b"
				],
				[
					"l",
					"r",
					"b"
				]
			]
		}]
	},
	bentuparrow: {
		adj: [
			["adj1", "val 25000"],
			["adj2", "val 25000"],
			["adj3", "val 25000"]
		],
		gd: [
			["a1", "pin 0 adj1 50000"],
			["a2", "pin 0 adj2 50000"],
			["a3", "pin 0 adj3 50000"],
			["y1", "*/ ss a3 100000"],
			["dx1", "*/ ss a2 50000"],
			["x1", "+- r 0 dx1"],
			["dx3", "*/ ss a2 100000"],
			["x3", "+- r 0 dx3"],
			["dx2", "*/ ss a1 200000"],
			["x2", "+- x3 0 dx2"],
			["x4", "+- x3 dx2 0"],
			["dy2", "*/ ss a1 100000"],
			["y2", "+- b 0 dy2"],
			["x0", "*/ x4 1 2"],
			["y3", "+/ y2 b 2"],
			["y15", "+/ y1 b 2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"y2"
				],
				[
					"l",
					"x2",
					"y2"
				],
				[
					"l",
					"x2",
					"y1"
				],
				[
					"l",
					"x1",
					"y1"
				],
				[
					"l",
					"x3",
					"t"
				],
				[
					"l",
					"r",
					"y1"
				],
				[
					"l",
					"x4",
					"y1"
				],
				[
					"l",
					"x4",
					"b"
				],
				[
					"l",
					"l",
					"b"
				],
				["c"]
			]
		}]
	},
	bevel: {
		adj: [["adj", "val 12500"]],
		gd: [
			["a", "pin 0 adj 50000"],
			["x1", "*/ ss a 100000"],
			["x2", "+- r 0 x1"],
			["y2", "+- b 0 x1"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"x1",
						"x1"
					],
					[
						"l",
						"x2",
						"x1"
					],
					[
						"l",
						"x2",
						"y2"
					],
					[
						"l",
						"x1",
						"y2"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "lightenLess",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"x2",
						"x1"
					],
					[
						"l",
						"x1",
						"x1"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darkenLess",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"b"
					],
					[
						"l",
						"x1",
						"y2"
					],
					[
						"l",
						"x2",
						"y2"
					],
					[
						"l",
						"r",
						"b"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "lighten",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"x1",
						"x1"
					],
					[
						"l",
						"x1",
						"y2"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darken",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"x2",
						"y2"
					],
					[
						"l",
						"x2",
						"x1"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"],
					[
						"m",
						"x1",
						"x1"
					],
					[
						"l",
						"x2",
						"x1"
					],
					[
						"l",
						"x2",
						"y2"
					],
					[
						"l",
						"x1",
						"y2"
					],
					["c"],
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"x1",
						"x1"
					],
					[
						"m",
						"l",
						"b"
					],
					[
						"l",
						"x1",
						"y2"
					],
					[
						"m",
						"r",
						"t"
					],
					[
						"l",
						"x2",
						"x1"
					],
					[
						"m",
						"r",
						"b"
					],
					[
						"l",
						"x2",
						"y2"
					]
				]
			}
		]
	},
	blockarc: {
		adj: [
			["adj1", "val 10800000"],
			["adj2", "val 0"],
			["adj3", "val 25000"]
		],
		gd: [
			["stAng", "pin 0 adj1 21599999"],
			["istAng", "pin 0 adj2 21599999"],
			["a3", "pin 0 adj3 50000"],
			["sw11", "+- istAng 0 stAng"],
			["sw12", "+- sw11 21600000 0"],
			["swAng", "?: sw11 sw11 sw12"],
			["iswAng", "+- 0 0 swAng"],
			["wt1", "sin wd2 stAng"],
			["ht1", "cos hd2 stAng"],
			["wt3", "sin wd2 istAng"],
			["ht3", "cos hd2 istAng"],
			["dx1", "cat2 wd2 ht1 wt1"],
			["dy1", "sat2 hd2 ht1 wt1"],
			["dx3", "cat2 wd2 ht3 wt3"],
			["dy3", "sat2 hd2 ht3 wt3"],
			["x1", "+- hc dx1 0"],
			["y1", "+- vc dy1 0"],
			["x3", "+- hc dx3 0"],
			["y3", "+- vc dy3 0"],
			["dr", "*/ ss a3 100000"],
			["iwd2", "+- wd2 0 dr"],
			["ihd2", "+- hd2 0 dr"],
			["wt2", "sin iwd2 istAng"],
			["ht2", "cos ihd2 istAng"],
			["wt4", "sin iwd2 stAng"],
			["ht4", "cos ihd2 stAng"],
			["dx2", "cat2 iwd2 ht2 wt2"],
			["dy2", "sat2 ihd2 ht2 wt2"],
			["dx4", "cat2 iwd2 ht4 wt4"],
			["dy4", "sat2 ihd2 ht4 wt4"],
			["x2", "+- hc dx2 0"],
			["y2", "+- vc dy2 0"],
			["x4", "+- hc dx4 0"],
			["y4", "+- vc dy4 0"],
			["sw0", "+- 21600000 0 stAng"],
			["da1", "+- swAng 0 sw0"],
			["g1", "max x1 x2"],
			["g2", "max x3 x4"],
			["g3", "max g1 g2"],
			["ir", "?: da1 r g3"],
			["sw1", "+- cd4 0 stAng"],
			["sw2", "+- 27000000 0 stAng"],
			["sw3", "?: sw1 sw1 sw2"],
			["da2", "+- swAng 0 sw3"],
			["g5", "max y1 y2"],
			["g6", "max y3 y4"],
			["g7", "max g5 g6"],
			["ib", "?: da2 b g7"],
			["sw4", "+- cd2 0 stAng"],
			["sw5", "+- 32400000 0 stAng"],
			["sw6", "?: sw4 sw4 sw5"],
			["da3", "+- swAng 0 sw6"],
			["g9", "min x1 x2"],
			["g10", "min x3 x4"],
			["g11", "min g9 g10"],
			["il", "?: da3 l g11"],
			["sw7", "+- 3cd4 0 stAng"],
			["sw8", "+- 37800000 0 stAng"],
			["sw9", "?: sw7 sw7 sw8"],
			["da4", "+- swAng 0 sw9"],
			["g13", "min y1 y2"],
			["g14", "min y3 y4"],
			["g15", "min g13 g14"],
			["it", "?: da4 t g15"],
			["x5", "+/ x1 x4 2"],
			["y5", "+/ y1 y4 2"],
			["x6", "+/ x3 x2 2"],
			["y6", "+/ y3 y2 2"],
			["cang1", "+- stAng 0 cd4"],
			["cang2", "+- istAng cd4 0"],
			["cang3", "+/ cang1 cang2 2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"x1",
					"y1"
				],
				[
					"a",
					"wd2",
					"hd2",
					"stAng",
					"swAng"
				],
				[
					"l",
					"x2",
					"y2"
				],
				[
					"a",
					"iwd2",
					"ihd2",
					"istAng",
					"iswAng"
				],
				["c"]
			]
		}]
	},
	bordercallout1: {
		adj: [
			["adj1", "val 18750"],
			["adj2", "val -8333"],
			["adj3", "val 112500"],
			["adj4", "val -38333"]
		],
		gd: [
			["y1", "*/ h adj1 100000"],
			["x1", "*/ w adj2 100000"],
			["y2", "*/ h adj3 100000"],
			["x2", "*/ w adj4 100000"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !1,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"l",
					"r",
					"t"
				],
				[
					"l",
					"r",
					"b"
				],
				[
					"l",
					"l",
					"b"
				],
				["c"]
			]
		}, {
			w: null,
			h: null,
			fill: "none",
			stroke: !0,
			extrusionOk: !1,
			cmds: [[
				"m",
				"x1",
				"y1"
			], [
				"l",
				"x2",
				"y2"
			]]
		}]
	},
	bordercallout2: {
		adj: [
			["adj1", "val 18750"],
			["adj2", "val -8333"],
			["adj3", "val 18750"],
			["adj4", "val -16667"],
			["adj5", "val 112500"],
			["adj6", "val -46667"]
		],
		gd: [
			["y1", "*/ h adj1 100000"],
			["x1", "*/ w adj2 100000"],
			["y2", "*/ h adj3 100000"],
			["x2", "*/ w adj4 100000"],
			["y3", "*/ h adj5 100000"],
			["x3", "*/ w adj6 100000"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !1,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"l",
					"r",
					"t"
				],
				[
					"l",
					"r",
					"b"
				],
				[
					"l",
					"l",
					"b"
				],
				["c"]
			]
		}, {
			w: null,
			h: null,
			fill: "none",
			stroke: !0,
			extrusionOk: !1,
			cmds: [
				[
					"m",
					"x1",
					"y1"
				],
				[
					"l",
					"x2",
					"y2"
				],
				[
					"l",
					"x3",
					"y3"
				]
			]
		}]
	},
	bordercallout3: {
		adj: [
			["adj1", "val 18750"],
			["adj2", "val -8333"],
			["adj3", "val 18750"],
			["adj4", "val -16667"],
			["adj5", "val 100000"],
			["adj6", "val -16667"],
			["adj7", "val 112963"],
			["adj8", "val -8333"]
		],
		gd: [
			["y1", "*/ h adj1 100000"],
			["x1", "*/ w adj2 100000"],
			["y2", "*/ h adj3 100000"],
			["x2", "*/ w adj4 100000"],
			["y3", "*/ h adj5 100000"],
			["x3", "*/ w adj6 100000"],
			["y4", "*/ h adj7 100000"],
			["x4", "*/ w adj8 100000"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !1,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"l",
					"r",
					"t"
				],
				[
					"l",
					"r",
					"b"
				],
				[
					"l",
					"l",
					"b"
				],
				["c"]
			]
		}, {
			w: null,
			h: null,
			fill: "none",
			stroke: !0,
			extrusionOk: !1,
			cmds: [
				[
					"m",
					"x1",
					"y1"
				],
				[
					"l",
					"x2",
					"y2"
				],
				[
					"l",
					"x3",
					"y3"
				],
				[
					"l",
					"x4",
					"y4"
				]
			]
		}]
	},
	bracepair: {
		adj: [["adj", "val 8333"]],
		gd: [
			["a", "pin 0 adj 25000"],
			["x1", "*/ ss a 100000"],
			["x2", "*/ ss a 50000"],
			["x3", "+- r 0 x2"],
			["x4", "+- r 0 x1"],
			["y2", "+- vc 0 x1"],
			["y3", "+- vc x1 0"],
			["y4", "+- b 0 x1"],
			["it", "*/ x1 29289 100000"],
			["il", "+- x1 it 0"],
			["ir", "+- r 0 il"],
			["ib", "+- b 0 it"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !1,
			extrusionOk: !1,
			cmds: [
				[
					"m",
					"x2",
					"b"
				],
				[
					"a",
					"x1",
					"x1",
					"cd4",
					"cd4"
				],
				[
					"l",
					"x1",
					"y3"
				],
				[
					"a",
					"x1",
					"x1",
					"0",
					"-5400000"
				],
				[
					"a",
					"x1",
					"x1",
					"cd4",
					"-5400000"
				],
				[
					"l",
					"x1",
					"x1"
				],
				[
					"a",
					"x1",
					"x1",
					"cd2",
					"cd4"
				],
				[
					"l",
					"x3",
					"t"
				],
				[
					"a",
					"x1",
					"x1",
					"3cd4",
					"cd4"
				],
				[
					"l",
					"x4",
					"y2"
				],
				[
					"a",
					"x1",
					"x1",
					"cd2",
					"-5400000"
				],
				[
					"a",
					"x1",
					"x1",
					"3cd4",
					"-5400000"
				],
				[
					"l",
					"x4",
					"y4"
				],
				[
					"a",
					"x1",
					"x1",
					"0",
					"cd4"
				],
				["c"]
			]
		}, {
			w: null,
			h: null,
			fill: "none",
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"x2",
					"b"
				],
				[
					"a",
					"x1",
					"x1",
					"cd4",
					"cd4"
				],
				[
					"l",
					"x1",
					"y3"
				],
				[
					"a",
					"x1",
					"x1",
					"0",
					"-5400000"
				],
				[
					"a",
					"x1",
					"x1",
					"cd4",
					"-5400000"
				],
				[
					"l",
					"x1",
					"x1"
				],
				[
					"a",
					"x1",
					"x1",
					"cd2",
					"cd4"
				],
				[
					"m",
					"x3",
					"t"
				],
				[
					"a",
					"x1",
					"x1",
					"3cd4",
					"cd4"
				],
				[
					"l",
					"x4",
					"y2"
				],
				[
					"a",
					"x1",
					"x1",
					"cd2",
					"-5400000"
				],
				[
					"a",
					"x1",
					"x1",
					"3cd4",
					"-5400000"
				],
				[
					"l",
					"x4",
					"y4"
				],
				[
					"a",
					"x1",
					"x1",
					"0",
					"cd4"
				]
			]
		}]
	},
	bracketpair: {
		adj: [["adj", "val 16667"]],
		gd: [
			["a", "pin 0 adj 50000"],
			["x1", "*/ ss a 100000"],
			["x2", "+- r 0 x1"],
			["y2", "+- b 0 x1"],
			["il", "*/ x1 29289 100000"],
			["ir", "+- r 0 il"],
			["ib", "+- b 0 il"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !1,
			extrusionOk: !1,
			cmds: [
				[
					"m",
					"l",
					"x1"
				],
				[
					"a",
					"x1",
					"x1",
					"cd2",
					"cd4"
				],
				[
					"l",
					"x2",
					"t"
				],
				[
					"a",
					"x1",
					"x1",
					"3cd4",
					"cd4"
				],
				[
					"l",
					"r",
					"y2"
				],
				[
					"a",
					"x1",
					"x1",
					"0",
					"cd4"
				],
				[
					"l",
					"x1",
					"b"
				],
				[
					"a",
					"x1",
					"x1",
					"cd4",
					"cd4"
				],
				["c"]
			]
		}, {
			w: null,
			h: null,
			fill: "none",
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"x1",
					"b"
				],
				[
					"a",
					"x1",
					"x1",
					"cd4",
					"cd4"
				],
				[
					"l",
					"l",
					"x1"
				],
				[
					"a",
					"x1",
					"x1",
					"cd2",
					"cd4"
				],
				[
					"m",
					"x2",
					"t"
				],
				[
					"a",
					"x1",
					"x1",
					"3cd4",
					"cd4"
				],
				[
					"l",
					"r",
					"y2"
				],
				[
					"a",
					"x1",
					"x1",
					"0",
					"cd4"
				]
			]
		}]
	},
	callout1: {
		adj: [
			["adj1", "val 18750"],
			["adj2", "val -8333"],
			["adj3", "val 112500"],
			["adj4", "val -38333"]
		],
		gd: [
			["y1", "*/ h adj1 100000"],
			["x1", "*/ w adj2 100000"],
			["y2", "*/ h adj3 100000"],
			["x2", "*/ w adj4 100000"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !1,
			extrusionOk: !1,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"l",
					"r",
					"t"
				],
				[
					"l",
					"r",
					"b"
				],
				[
					"l",
					"l",
					"b"
				],
				["c"]
			]
		}, {
			w: null,
			h: null,
			fill: "none",
			stroke: !0,
			extrusionOk: !1,
			cmds: [[
				"m",
				"x1",
				"y1"
			], [
				"l",
				"x2",
				"y2"
			]]
		}]
	},
	callout2: {
		adj: [
			["adj1", "val 18750"],
			["adj2", "val -8333"],
			["adj3", "val 18750"],
			["adj4", "val -16667"],
			["adj5", "val 112500"],
			["adj6", "val -46667"]
		],
		gd: [
			["y1", "*/ h adj1 100000"],
			["x1", "*/ w adj2 100000"],
			["y2", "*/ h adj3 100000"],
			["x2", "*/ w adj4 100000"],
			["y3", "*/ h adj5 100000"],
			["x3", "*/ w adj6 100000"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !1,
			extrusionOk: !1,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"l",
					"r",
					"t"
				],
				[
					"l",
					"r",
					"b"
				],
				[
					"l",
					"l",
					"b"
				],
				["c"]
			]
		}, {
			w: null,
			h: null,
			fill: "none",
			stroke: !0,
			extrusionOk: !1,
			cmds: [
				[
					"m",
					"x1",
					"y1"
				],
				[
					"l",
					"x2",
					"y2"
				],
				[
					"l",
					"x3",
					"y3"
				]
			]
		}]
	},
	callout3: {
		adj: [
			["adj1", "val 18750"],
			["adj2", "val -8333"],
			["adj3", "val 18750"],
			["adj4", "val -16667"],
			["adj5", "val 100000"],
			["adj6", "val -16667"],
			["adj7", "val 112963"],
			["adj8", "val -8333"]
		],
		gd: [
			["y1", "*/ h adj1 100000"],
			["x1", "*/ w adj2 100000"],
			["y2", "*/ h adj3 100000"],
			["x2", "*/ w adj4 100000"],
			["y3", "*/ h adj5 100000"],
			["x3", "*/ w adj6 100000"],
			["y4", "*/ h adj7 100000"],
			["x4", "*/ w adj8 100000"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !1,
			extrusionOk: !1,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"l",
					"r",
					"t"
				],
				[
					"l",
					"r",
					"b"
				],
				[
					"l",
					"l",
					"b"
				],
				["c"]
			]
		}, {
			w: null,
			h: null,
			fill: "none",
			stroke: !0,
			extrusionOk: !1,
			cmds: [
				[
					"m",
					"x1",
					"y1"
				],
				[
					"l",
					"x2",
					"y2"
				],
				[
					"l",
					"x3",
					"y3"
				],
				[
					"l",
					"x4",
					"y4"
				]
			]
		}]
	},
	can: {
		adj: [["adj", "val 25000"]],
		gd: [
			["maxAdj", "*/ 50000 h ss"],
			["a", "pin 0 adj maxAdj"],
			["y1", "*/ ss a 200000"],
			["y2", "+- y1 y1 0"],
			["y3", "+- b 0 y1"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"y1"
					],
					[
						"a",
						"wd2",
						"y1",
						"cd2",
						"-10800000"
					],
					[
						"l",
						"r",
						"y3"
					],
					[
						"a",
						"wd2",
						"y1",
						"0",
						"cd2"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "lighten",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"y1"
					],
					[
						"a",
						"wd2",
						"y1",
						"cd2",
						"cd2"
					],
					[
						"a",
						"wd2",
						"y1",
						"0",
						"cd2"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"r",
						"y1"
					],
					[
						"a",
						"wd2",
						"y1",
						"0",
						"cd2"
					],
					[
						"a",
						"wd2",
						"y1",
						"cd2",
						"cd2"
					],
					[
						"l",
						"r",
						"y3"
					],
					[
						"a",
						"wd2",
						"y1",
						"0",
						"cd2"
					],
					[
						"l",
						"l",
						"y1"
					]
				]
			}
		]
	},
	chartplus: {
		adj: [],
		gd: [],
		paths: [{
			w: 10,
			h: 10,
			fill: "none",
			stroke: !0,
			extrusionOk: !1,
			cmds: [
				[
					"m",
					"5",
					"0"
				],
				[
					"l",
					"5",
					"10"
				],
				[
					"m",
					"0",
					"5"
				],
				[
					"l",
					"10",
					"5"
				]
			]
		}, {
			w: 10,
			h: 10,
			fill: null,
			stroke: !1,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"0",
					"0"
				],
				[
					"l",
					"0",
					"10"
				],
				[
					"l",
					"10",
					"10"
				],
				[
					"l",
					"10",
					"0"
				],
				["c"]
			]
		}]
	},
	chartstar: {
		adj: [],
		gd: [],
		paths: [{
			w: 10,
			h: 10,
			fill: "none",
			stroke: !0,
			extrusionOk: !1,
			cmds: [
				[
					"m",
					"0",
					"0"
				],
				[
					"l",
					"10",
					"10"
				],
				[
					"m",
					"0",
					"10"
				],
				[
					"l",
					"10",
					"0"
				],
				[
					"m",
					"5",
					"0"
				],
				[
					"l",
					"5",
					"10"
				]
			]
		}, {
			w: 10,
			h: 10,
			fill: null,
			stroke: !1,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"0",
					"0"
				],
				[
					"l",
					"0",
					"10"
				],
				[
					"l",
					"10",
					"10"
				],
				[
					"l",
					"10",
					"0"
				],
				["c"]
			]
		}]
	},
	chartx: {
		adj: [],
		gd: [],
		paths: [{
			w: 10,
			h: 10,
			fill: "none",
			stroke: !0,
			extrusionOk: !1,
			cmds: [
				[
					"m",
					"0",
					"0"
				],
				[
					"l",
					"10",
					"10"
				],
				[
					"m",
					"0",
					"10"
				],
				[
					"l",
					"10",
					"0"
				]
			]
		}, {
			w: 10,
			h: 10,
			fill: null,
			stroke: !1,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"0",
					"0"
				],
				[
					"l",
					"0",
					"10"
				],
				[
					"l",
					"10",
					"10"
				],
				[
					"l",
					"10",
					"0"
				],
				["c"]
			]
		}]
	},
	chevron: {
		adj: [["adj", "val 50000"]],
		gd: [
			["maxAdj", "*/ 100000 w ss"],
			["a", "pin 0 adj maxAdj"],
			["x1", "*/ ss a 100000"],
			["x2", "+- r 0 x1"],
			["x3", "*/ x2 1 2"],
			["dx", "+- x2 0 x1"],
			["il", "?: dx x1 l"],
			["ir", "?: dx x2 r"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"l",
					"x2",
					"t"
				],
				[
					"l",
					"r",
					"vc"
				],
				[
					"l",
					"x2",
					"b"
				],
				[
					"l",
					"l",
					"b"
				],
				[
					"l",
					"x1",
					"vc"
				],
				["c"]
			]
		}]
	},
	chord: {
		adj: [["adj1", "val 2700000"], ["adj2", "val 16200000"]],
		gd: [
			["stAng", "pin 0 adj1 21599999"],
			["enAng", "pin 0 adj2 21599999"],
			["sw1", "+- enAng 0 stAng"],
			["sw2", "+- sw1 21600000 0"],
			["swAng", "?: sw1 sw1 sw2"],
			["wt1", "sin wd2 stAng"],
			["ht1", "cos hd2 stAng"],
			["dx1", "cat2 wd2 ht1 wt1"],
			["dy1", "sat2 hd2 ht1 wt1"],
			["wt2", "sin wd2 enAng"],
			["ht2", "cos hd2 enAng"],
			["dx2", "cat2 wd2 ht2 wt2"],
			["dy2", "sat2 hd2 ht2 wt2"],
			["x1", "+- hc dx1 0"],
			["y1", "+- vc dy1 0"],
			["x2", "+- hc dx2 0"],
			["y2", "+- vc dy2 0"],
			["x3", "+/ x1 x2 2"],
			["y3", "+/ y1 y2 2"],
			["midAng0", "*/ swAng 1 2"],
			["midAng", "+- stAng midAng0 cd2"],
			["idx", "cos wd2 2700000"],
			["idy", "sin hd2 2700000"],
			["il", "+- hc 0 idx"],
			["ir", "+- hc idx 0"],
			["it", "+- vc 0 idy"],
			["ib", "+- vc idy 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"x1",
					"y1"
				],
				[
					"a",
					"wd2",
					"hd2",
					"stAng",
					"swAng"
				],
				["c"]
			]
		}]
	},
	circulararrow: {
		adj: [
			["adj1", "val 12500"],
			["adj2", "val 1142319"],
			["adj3", "val 20457681"],
			["adj4", "val 10800000"],
			["adj5", "val 12500"]
		],
		gd: [
			["a5", "pin 0 adj5 25000"],
			["maxAdj1", "*/ a5 2 1"],
			["a1", "pin 0 adj1 maxAdj1"],
			["enAng", "pin 1 adj3 21599999"],
			["stAng", "pin 0 adj4 21599999"],
			["th", "*/ ss a1 100000"],
			["thh", "*/ ss a5 100000"],
			["th2", "*/ th 1 2"],
			["rw1", "+- wd2 th2 thh"],
			["rh1", "+- hd2 th2 thh"],
			["rw2", "+- rw1 0 th"],
			["rh2", "+- rh1 0 th"],
			["rw3", "+- rw2 th2 0"],
			["rh3", "+- rh2 th2 0"],
			["wtH", "sin rw3 enAng"],
			["htH", "cos rh3 enAng"],
			["dxH", "cat2 rw3 htH wtH"],
			["dyH", "sat2 rh3 htH wtH"],
			["xH", "+- hc dxH 0"],
			["yH", "+- vc dyH 0"],
			["rI", "min rw2 rh2"],
			["u1", "*/ dxH dxH 1"],
			["u2", "*/ dyH dyH 1"],
			["u3", "*/ rI rI 1"],
			["u4", "+- u1 0 u3"],
			["u5", "+- u2 0 u3"],
			["u6", "*/ u4 u5 u1"],
			["u7", "*/ u6 1 u2"],
			["u8", "+- 1 0 u7"],
			["u9", "sqrt u8"],
			["u10", "*/ u4 1 dxH"],
			["u11", "*/ u10 1 dyH"],
			["u12", "+/ 1 u9 u11"],
			["u13", "at2 1 u12"],
			["u14", "+- u13 21600000 0"],
			["u15", "?: u13 u13 u14"],
			["u16", "+- u15 0 enAng"],
			["u17", "+- u16 21600000 0"],
			["u18", "?: u16 u16 u17"],
			["u19", "+- u18 0 cd2"],
			["u20", "+- u18 0 21600000"],
			["u21", "?: u19 u20 u18"],
			["maxAng", "abs u21"],
			["aAng", "pin 0 adj2 maxAng"],
			["ptAng", "+- enAng aAng 0"],
			["wtA", "sin rw3 ptAng"],
			["htA", "cos rh3 ptAng"],
			["dxA", "cat2 rw3 htA wtA"],
			["dyA", "sat2 rh3 htA wtA"],
			["xA", "+- hc dxA 0"],
			["yA", "+- vc dyA 0"],
			["wtE", "sin rw1 stAng"],
			["htE", "cos rh1 stAng"],
			["dxE", "cat2 rw1 htE wtE"],
			["dyE", "sat2 rh1 htE wtE"],
			["xE", "+- hc dxE 0"],
			["yE", "+- vc dyE 0"],
			["dxG", "cos thh ptAng"],
			["dyG", "sin thh ptAng"],
			["xG", "+- xH dxG 0"],
			["yG", "+- yH dyG 0"],
			["dxB", "cos thh ptAng"],
			["dyB", "sin thh ptAng"],
			["xB", "+- xH 0 dxB 0"],
			["yB", "+- yH 0 dyB 0"],
			["sx1", "+- xB 0 hc"],
			["sy1", "+- yB 0 vc"],
			["sx2", "+- xG 0 hc"],
			["sy2", "+- yG 0 vc"],
			["rO", "min rw1 rh1"],
			["x1O", "*/ sx1 rO rw1"],
			["y1O", "*/ sy1 rO rh1"],
			["x2O", "*/ sx2 rO rw1"],
			["y2O", "*/ sy2 rO rh1"],
			["dxO", "+- x2O 0 x1O"],
			["dyO", "+- y2O 0 y1O"],
			["dO", "mod dxO dyO 0"],
			["q1", "*/ x1O y2O 1"],
			["q2", "*/ x2O y1O 1"],
			["DO", "+- q1 0 q2"],
			["q3", "*/ rO rO 1"],
			["q4", "*/ dO dO 1"],
			["q5", "*/ q3 q4 1"],
			["q6", "*/ DO DO 1"],
			["q7", "+- q5 0 q6"],
			["q8", "max q7 0"],
			["sdelO", "sqrt q8"],
			["ndyO", "*/ dyO -1 1"],
			["sdyO", "?: ndyO -1 1"],
			["q9", "*/ sdyO dxO 1"],
			["q10", "*/ q9 sdelO 1"],
			["q11", "*/ DO dyO 1"],
			["dxF1", "+/ q11 q10 q4"],
			["q12", "+- q11 0 q10"],
			["dxF2", "*/ q12 1 q4"],
			["adyO", "abs dyO"],
			["q13", "*/ adyO sdelO 1"],
			["q14", "*/ DO dxO -1"],
			["dyF1", "+/ q14 q13 q4"],
			["q15", "+- q14 0 q13"],
			["dyF2", "*/ q15 1 q4"],
			["q16", "+- x2O 0 dxF1"],
			["q17", "+- x2O 0 dxF2"],
			["q18", "+- y2O 0 dyF1"],
			["q19", "+- y2O 0 dyF2"],
			["q20", "mod q16 q18 0"],
			["q21", "mod q17 q19 0"],
			["q22", "+- q21 0 q20"],
			["dxF", "?: q22 dxF1 dxF2"],
			["dyF", "?: q22 dyF1 dyF2"],
			["sdxF", "*/ dxF rw1 rO"],
			["sdyF", "*/ dyF rh1 rO"],
			["xF", "+- hc sdxF 0"],
			["yF", "+- vc sdyF 0"],
			["x1I", "*/ sx1 rI rw2"],
			["y1I", "*/ sy1 rI rh2"],
			["x2I", "*/ sx2 rI rw2"],
			["y2I", "*/ sy2 rI rh2"],
			["dxI", "+- x2I 0 x1I"],
			["dyI", "+- y2I 0 y1I"],
			["dI", "mod dxI dyI 0"],
			["v1", "*/ x1I y2I 1"],
			["v2", "*/ x2I y1I 1"],
			["DI", "+- v1 0 v2"],
			["v3", "*/ rI rI 1"],
			["v4", "*/ dI dI 1"],
			["v5", "*/ v3 v4 1"],
			["v6", "*/ DI DI 1"],
			["v7", "+- v5 0 v6"],
			["v8", "max v7 0"],
			["sdelI", "sqrt v8"],
			["v9", "*/ sdyO dxI 1"],
			["v10", "*/ v9 sdelI 1"],
			["v11", "*/ DI dyI 1"],
			["dxC1", "+/ v11 v10 v4"],
			["v12", "+- v11 0 v10"],
			["dxC2", "*/ v12 1 v4"],
			["adyI", "abs dyI"],
			["v13", "*/ adyI sdelI 1"],
			["v14", "*/ DI dxI -1"],
			["dyC1", "+/ v14 v13 v4"],
			["v15", "+- v14 0 v13"],
			["dyC2", "*/ v15 1 v4"],
			["v16", "+- x1I 0 dxC1"],
			["v17", "+- x1I 0 dxC2"],
			["v18", "+- y1I 0 dyC1"],
			["v19", "+- y1I 0 dyC2"],
			["v20", "mod v16 v18 0"],
			["v21", "mod v17 v19 0"],
			["v22", "+- v21 0 v20"],
			["dxC", "?: v22 dxC1 dxC2"],
			["dyC", "?: v22 dyC1 dyC2"],
			["sdxC", "*/ dxC rw2 rI"],
			["sdyC", "*/ dyC rh2 rI"],
			["xC", "+- hc sdxC 0"],
			["yC", "+- vc sdyC 0"],
			["ist0", "at2 sdxC sdyC"],
			["ist1", "+- ist0 21600000 0"],
			["istAng", "?: ist0 ist0 ist1"],
			["isw1", "+- stAng 0 istAng"],
			["isw2", "+- isw1 0 21600000"],
			["iswAng", "?: isw1 isw2 isw1"],
			["p1", "+- xF 0 xC"],
			["p2", "+- yF 0 yC"],
			["p3", "mod p1 p2 0"],
			["p4", "*/ p3 1 2"],
			["p5", "+- p4 0 thh"],
			["xGp", "?: p5 xF xG"],
			["yGp", "?: p5 yF yG"],
			["xBp", "?: p5 xC xB"],
			["yBp", "?: p5 yC yB"],
			["en0", "at2 sdxF sdyF"],
			["en1", "+- en0 21600000 0"],
			["en2", "?: en0 en0 en1"],
			["sw0", "+- en2 0 stAng"],
			["sw1", "+- sw0 21600000 0"],
			["swAng", "?: sw0 sw0 sw1"],
			["wtI", "sin rw3 stAng"],
			["htI", "cos rh3 stAng"],
			["dxI", "cat2 rw3 htI wtI"],
			["dyI", "sat2 rh3 htI wtI"],
			["xI", "+- hc dxI 0"],
			["yI", "+- vc dyI 0"],
			["aI", "+- stAng 0 cd4"],
			["aA", "+- ptAng cd4 0"],
			["aB", "+- ptAng cd2 0"],
			["idx", "cos rw1 2700000"],
			["idy", "sin rh1 2700000"],
			["il", "+- hc 0 idx"],
			["ir", "+- hc idx 0"],
			["it", "+- vc 0 idy"],
			["ib", "+- vc idy 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"xE",
					"yE"
				],
				[
					"a",
					"rw1",
					"rh1",
					"stAng",
					"swAng"
				],
				[
					"l",
					"xGp",
					"yGp"
				],
				[
					"l",
					"xA",
					"yA"
				],
				[
					"l",
					"xBp",
					"yBp"
				],
				[
					"l",
					"xC",
					"yC"
				],
				[
					"a",
					"rw2",
					"rh2",
					"istAng",
					"iswAng"
				],
				["c"]
			]
		}]
	},
	cloud: {
		adj: [],
		gd: [
			["il", "*/ w 2977 21600"],
			["it", "*/ h 3262 21600"],
			["ir", "*/ w 17087 21600"],
			["ib", "*/ h 17337 21600"],
			["g27", "*/ w 67 21600"],
			["g28", "*/ h 21577 21600"],
			["g29", "*/ w 21582 21600"],
			["g30", "*/ h 1235 21600"]
		],
		paths: [{
			w: 43200,
			h: 43200,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"3900",
					"14370"
				],
				[
					"a",
					"6753",
					"9190",
					"-11429249",
					"7426832"
				],
				[
					"a",
					"5333",
					"7267",
					"-8646143",
					"5396714"
				],
				[
					"a",
					"4365",
					"5945",
					"-8748475",
					"5983381"
				],
				[
					"a",
					"4857",
					"6595",
					"-7859164",
					"7034504"
				],
				[
					"a",
					"5333",
					"7273",
					"-4722533",
					"6541615"
				],
				[
					"a",
					"6775",
					"9220",
					"-2776035",
					"7816140"
				],
				[
					"a",
					"5785",
					"7867",
					"37501",
					"6842000"
				],
				[
					"a",
					"6752",
					"9215",
					"1347096",
					"6910353"
				],
				[
					"a",
					"7720",
					"10543",
					"3974558",
					"4542661"
				],
				[
					"a",
					"4360",
					"5918",
					"-16496525",
					"8804134"
				],
				[
					"a",
					"4345",
					"5945",
					"-14809710",
					"9151131"
				],
				["c"]
			]
		}, {
			w: 43200,
			h: 43200,
			fill: "none",
			stroke: !0,
			extrusionOk: !1,
			cmds: [
				[
					"m",
					"4693",
					"26177"
				],
				[
					"a",
					"4345",
					"5945",
					"5204520",
					"1585770"
				],
				[
					"m",
					"6928",
					"34899"
				],
				[
					"a",
					"4360",
					"5918",
					"4416628",
					"686848"
				],
				[
					"m",
					"16478",
					"39090"
				],
				[
					"a",
					"6752",
					"9215",
					"8257449",
					"844866"
				],
				[
					"m",
					"28827",
					"34751"
				],
				[
					"a",
					"6752",
					"9215",
					"387196",
					"959901"
				],
				[
					"m",
					"34129",
					"22954"
				],
				[
					"a",
					"5785",
					"7867",
					"-4217541",
					"4255042"
				],
				[
					"m",
					"41798",
					"15354"
				],
				[
					"a",
					"5333",
					"7273",
					"1819082",
					"1665090"
				],
				[
					"m",
					"38324",
					"5426"
				],
				[
					"a",
					"4857",
					"6595",
					"-824660",
					"891534"
				],
				[
					"m",
					"29078",
					"3952"
				],
				[
					"a",
					"4857",
					"6595",
					"-8950887",
					"1091722"
				],
				[
					"m",
					"22141",
					"4720"
				],
				[
					"a",
					"4365",
					"5945",
					"-9809656",
					"1061181"
				],
				[
					"m",
					"14000",
					"5192"
				],
				[
					"a",
					"6753",
					"9190",
					"-4002417",
					"739161"
				],
				[
					"m",
					"4127",
					"15789"
				],
				[
					"a",
					"6753",
					"9190",
					"9459261",
					"711490"
				]
			]
		}]
	},
	cloudcallout: {
		adj: [["adj1", "val -20833"], ["adj2", "val 62500"]],
		gd: [
			["dxPos", "*/ w adj1 100000"],
			["dyPos", "*/ h adj2 100000"],
			["xPos", "+- hc dxPos 0"],
			["yPos", "+- vc dyPos 0"],
			["ht", "cat2 hd2 dxPos dyPos"],
			["wt", "sat2 wd2 dxPos dyPos"],
			["g2", "cat2 wd2 ht wt"],
			["g3", "sat2 hd2 ht wt"],
			["g4", "+- hc g2 0"],
			["g5", "+- vc g3 0"],
			["g6", "+- g4 0 xPos"],
			["g7", "+- g5 0 yPos"],
			["g8", "mod g6 g7 0"],
			["g9", "*/ ss 6600 21600"],
			["g10", "+- g8 0 g9"],
			["g11", "*/ g10 1 3"],
			["g12", "*/ ss 1800 21600"],
			["g13", "+- g11 g12 0"],
			["g14", "*/ g13 g6 g8"],
			["g15", "*/ g13 g7 g8"],
			["g16", "+- g14 xPos 0"],
			["g17", "+- g15 yPos 0"],
			["g18", "*/ ss 4800 21600"],
			["g19", "*/ g11 2 1"],
			["g20", "+- g18 g19 0"],
			["g21", "*/ g20 g6 g8"],
			["g22", "*/ g20 g7 g8"],
			["g23", "+- g21 xPos 0"],
			["g24", "+- g22 yPos 0"],
			["g25", "*/ ss 1200 21600"],
			["g26", "*/ ss 600 21600"],
			["x23", "+- xPos g26 0"],
			["x24", "+- g16 g25 0"],
			["x25", "+- g23 g12 0"],
			["il", "*/ w 2977 21600"],
			["it", "*/ h 3262 21600"],
			["ir", "*/ w 17087 21600"],
			["ib", "*/ h 17337 21600"],
			["g27", "*/ w 67 21600"],
			["g28", "*/ h 21577 21600"],
			["g29", "*/ w 21582 21600"],
			["g30", "*/ h 1235 21600"],
			["pang", "at2 dxPos dyPos"]
		],
		paths: [
			{
				w: 43200,
				h: 43200,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"3900",
						"14370"
					],
					[
						"a",
						"6753",
						"9190",
						"-11429249",
						"7426832"
					],
					[
						"a",
						"5333",
						"7267",
						"-8646143",
						"5396714"
					],
					[
						"a",
						"4365",
						"5945",
						"-8748475",
						"5983381"
					],
					[
						"a",
						"4857",
						"6595",
						"-7859164",
						"7034504"
					],
					[
						"a",
						"5333",
						"7273",
						"-4722533",
						"6541615"
					],
					[
						"a",
						"6775",
						"9220",
						"-2776035",
						"7816140"
					],
					[
						"a",
						"5785",
						"7867",
						"37501",
						"6842000"
					],
					[
						"a",
						"6752",
						"9215",
						"1347096",
						"6910353"
					],
					[
						"a",
						"7720",
						"10543",
						"3974558",
						"4542661"
					],
					[
						"a",
						"4360",
						"5918",
						"-16496525",
						"8804134"
					],
					[
						"a",
						"4345",
						"5945",
						"-14809710",
						"9151131"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"x23",
						"yPos"
					],
					[
						"a",
						"g26",
						"g26",
						"0",
						"21600000"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"x24",
						"g17"
					],
					[
						"a",
						"g25",
						"g25",
						"0",
						"21600000"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"x25",
						"g24"
					],
					[
						"a",
						"g12",
						"g12",
						"0",
						"21600000"
					],
					["c"]
				]
			},
			{
				w: 43200,
				h: 43200,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"4693",
						"26177"
					],
					[
						"a",
						"4345",
						"5945",
						"5204520",
						"1585770"
					],
					[
						"m",
						"6928",
						"34899"
					],
					[
						"a",
						"4360",
						"5918",
						"4416628",
						"686848"
					],
					[
						"m",
						"16478",
						"39090"
					],
					[
						"a",
						"6752",
						"9215",
						"8257449",
						"844866"
					],
					[
						"m",
						"28827",
						"34751"
					],
					[
						"a",
						"6752",
						"9215",
						"387196",
						"959901"
					],
					[
						"m",
						"34129",
						"22954"
					],
					[
						"a",
						"5785",
						"7867",
						"-4217541",
						"4255042"
					],
					[
						"m",
						"41798",
						"15354"
					],
					[
						"a",
						"5333",
						"7273",
						"1819082",
						"1665090"
					],
					[
						"m",
						"38324",
						"5426"
					],
					[
						"a",
						"4857",
						"6595",
						"-824660",
						"891534"
					],
					[
						"m",
						"29078",
						"3952"
					],
					[
						"a",
						"4857",
						"6595",
						"-8950887",
						"1091722"
					],
					[
						"m",
						"22141",
						"4720"
					],
					[
						"a",
						"4365",
						"5945",
						"-9809656",
						"1061181"
					],
					[
						"m",
						"14000",
						"5192"
					],
					[
						"a",
						"6753",
						"9190",
						"-4002417",
						"739161"
					],
					[
						"m",
						"4127",
						"15789"
					],
					[
						"a",
						"6753",
						"9190",
						"9459261",
						"711490"
					]
				]
			}
		]
	},
	corner: {
		adj: [["adj1", "val 50000"], ["adj2", "val 50000"]],
		gd: [
			["maxAdj1", "*/ 100000 h ss"],
			["maxAdj2", "*/ 100000 w ss"],
			["a1", "pin 0 adj1 maxAdj1"],
			["a2", "pin 0 adj2 maxAdj2"],
			["x1", "*/ ss a2 100000"],
			["dy1", "*/ ss a1 100000"],
			["y1", "+- b 0 dy1"],
			["cx1", "*/ x1 1 2"],
			["cy1", "+/ y1 b 2"],
			["d", "+- w 0 h"],
			["it", "?: d y1 t"],
			["ir", "?: d r x1"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"l",
					"x1",
					"t"
				],
				[
					"l",
					"x1",
					"y1"
				],
				[
					"l",
					"r",
					"y1"
				],
				[
					"l",
					"r",
					"b"
				],
				[
					"l",
					"l",
					"b"
				],
				["c"]
			]
		}]
	},
	cornertabs: {
		adj: [],
		gd: [
			["md", "mod w h 0"],
			["dx", "*/ 1 md 20"],
			["y1", "+- 0 b dx"],
			["x1", "+- 0 r dx"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"dx",
						"t"
					],
					[
						"l",
						"l",
						"dx"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"l",
						"y1"
					],
					[
						"l",
						"dx",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"x1",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"dx"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"r",
						"y1"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"x1",
						"b"
					],
					["c"]
				]
			}
		]
	},
	cube: {
		adj: [["adj", "val 25000"]],
		gd: [
			["a", "pin 0 adj 100000"],
			["y1", "*/ ss a 100000"],
			["y4", "+- b 0 y1"],
			["y2", "*/ y4 1 2"],
			["y3", "+/ y1 b 2"],
			["x4", "+- r 0 y1"],
			["x2", "*/ x4 1 2"],
			["x3", "+/ y1 r 2"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"y1"
					],
					[
						"l",
						"x4",
						"y1"
					],
					[
						"l",
						"x4",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darkenLess",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"x4",
						"y1"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"y4"
					],
					[
						"l",
						"x4",
						"b"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "lightenLess",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"y1"
					],
					[
						"l",
						"y1",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"x4",
						"y1"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"y1"
					],
					[
						"l",
						"y1",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"y4"
					],
					[
						"l",
						"x4",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"],
					[
						"m",
						"l",
						"y1"
					],
					[
						"l",
						"x4",
						"y1"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"m",
						"x4",
						"y1"
					],
					[
						"l",
						"x4",
						"b"
					]
				]
			}
		]
	},
	curvedconnector2: {
		adj: [],
		gd: [],
		paths: [{
			w: null,
			h: null,
			fill: "none",
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"t"
			], [
				"C",
				"wd2",
				"t",
				"r",
				"hd2",
				"r",
				"b"
			]]
		}]
	},
	curvedconnector3: {
		adj: [["adj1", "val 50000"]],
		gd: [
			["x2", "*/ w adj1 100000"],
			["x1", "+/ l x2 2"],
			["x3", "+/ r x2 2"],
			["y3", "*/ h 3 4"]
		],
		paths: [{
			w: null,
			h: null,
			fill: "none",
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"C",
					"x1",
					"t",
					"x2",
					"hd4",
					"x2",
					"vc"
				],
				[
					"C",
					"x2",
					"y3",
					"x3",
					"b",
					"r",
					"b"
				]
			]
		}]
	},
	curvedconnector4: {
		adj: [["adj1", "val 50000"], ["adj2", "val 50000"]],
		gd: [
			["x2", "*/ w adj1 100000"],
			["x1", "+/ l x2 2"],
			["x3", "+/ r x2 2"],
			["x4", "+/ x2 x3 2"],
			["x5", "+/ x3 r 2"],
			["y4", "*/ h adj2 100000"],
			["y1", "+/ t y4 2"],
			["y2", "+/ t y1 2"],
			["y3", "+/ y1 y4 2"],
			["y5", "+/ b y4 2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: "none",
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"C",
					"x1",
					"t",
					"x2",
					"y2",
					"x2",
					"y1"
				],
				[
					"C",
					"x2",
					"y3",
					"x4",
					"y4",
					"x3",
					"y4"
				],
				[
					"C",
					"x5",
					"y4",
					"r",
					"y5",
					"r",
					"b"
				]
			]
		}]
	},
	curvedconnector5: {
		adj: [
			["adj1", "val 50000"],
			["adj2", "val 50000"],
			["adj3", "val 50000"]
		],
		gd: [
			["x3", "*/ w adj1 100000"],
			["x6", "*/ w adj3 100000"],
			["x1", "+/ x3 x6 2"],
			["x2", "+/ l x3 2"],
			["x4", "+/ x3 x1 2"],
			["x5", "+/ x6 x1 2"],
			["x7", "+/ x6 r 2"],
			["y4", "*/ h adj2 100000"],
			["y1", "+/ t y4 2"],
			["y2", "+/ t y1 2"],
			["y3", "+/ y1 y4 2"],
			["y5", "+/ b y4 2"],
			["y6", "+/ y5 y4 2"],
			["y7", "+/ y5 b 2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: "none",
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"C",
					"x2",
					"t",
					"x3",
					"y2",
					"x3",
					"y1"
				],
				[
					"C",
					"x3",
					"y3",
					"x4",
					"y4",
					"x1",
					"y4"
				],
				[
					"C",
					"x5",
					"y4",
					"x6",
					"y6",
					"x6",
					"y5"
				],
				[
					"C",
					"x6",
					"y7",
					"x7",
					"b",
					"r",
					"b"
				]
			]
		}]
	},
	curveddownarrow: {
		adj: [
			["adj1", "val 25000"],
			["adj2", "val 50000"],
			["adj3", "val 25000"]
		],
		gd: [
			["maxAdj2", "*/ 50000 w ss"],
			["a2", "pin 0 adj2 maxAdj2"],
			["a1", "pin 0 adj1 100000"],
			["th", "*/ ss a1 100000"],
			["aw", "*/ ss a2 100000"],
			["q1", "+/ th aw 4"],
			["wR", "+- wd2 0 q1"],
			["q7", "*/ wR 2 1"],
			["q8", "*/ q7 q7 1"],
			["q9", "*/ th th 1"],
			["q10", "+- q8 0 q9"],
			["q11", "sqrt q10"],
			["idy", "*/ q11 h q7"],
			["maxAdj3", "*/ 100000 idy ss"],
			["a3", "pin 0 adj3 maxAdj3"],
			["ah", "*/ ss adj3 100000"],
			["x3", "+- wR th 0"],
			["q2", "*/ h h 1"],
			["q3", "*/ ah ah 1"],
			["q4", "+- q2 0 q3"],
			["q5", "sqrt q4"],
			["dx", "*/ q5 wR h"],
			["x5", "+- wR dx 0"],
			["x7", "+- x3 dx 0"],
			["q6", "+- aw 0 th"],
			["dh", "*/ q6 1 2"],
			["x4", "+- x5 0 dh"],
			["x8", "+- x7 dh 0"],
			["aw2", "*/ aw 1 2"],
			["x6", "+- r 0 aw2"],
			["y1", "+- b 0 ah"],
			["swAng", "at2 ah dx"],
			["mswAng", "+- 0 0 swAng"],
			["iy", "+- b 0 idy"],
			["ix", "+/ wR x3 2"],
			["q12", "*/ th 1 2"],
			["dang2", "at2 idy q12"],
			["stAng", "+- 3cd4 swAng 0"],
			["stAng2", "+- 3cd4 0 dang2"],
			["swAng2", "+- dang2 0 cd4"],
			["swAng3", "+- cd4 dang2 0"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"x6",
						"b"
					],
					[
						"l",
						"x4",
						"y1"
					],
					[
						"l",
						"x5",
						"y1"
					],
					[
						"a",
						"wR",
						"h",
						"stAng",
						"mswAng"
					],
					[
						"l",
						"x3",
						"t"
					],
					[
						"a",
						"wR",
						"h",
						"3cd4",
						"swAng"
					],
					[
						"l",
						"x8",
						"y1"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darkenLess",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"ix",
						"iy"
					],
					[
						"a",
						"wR",
						"h",
						"stAng2",
						"swAng2"
					],
					[
						"l",
						"l",
						"b"
					],
					[
						"a",
						"wR",
						"h",
						"cd2",
						"swAng3"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"ix",
						"iy"
					],
					[
						"a",
						"wR",
						"h",
						"stAng2",
						"swAng2"
					],
					[
						"l",
						"l",
						"b"
					],
					[
						"a",
						"wR",
						"h",
						"cd2",
						"cd4"
					],
					[
						"l",
						"x3",
						"t"
					],
					[
						"a",
						"wR",
						"h",
						"3cd4",
						"swAng"
					],
					[
						"l",
						"x8",
						"y1"
					],
					[
						"l",
						"x6",
						"b"
					],
					[
						"l",
						"x4",
						"y1"
					],
					[
						"l",
						"x5",
						"y1"
					],
					[
						"a",
						"wR",
						"h",
						"stAng",
						"mswAng"
					]
				]
			}
		]
	},
	curvedleftarrow: {
		adj: [
			["adj1", "val 25000"],
			["adj2", "val 50000"],
			["adj3", "val 25000"]
		],
		gd: [
			["maxAdj2", "*/ 50000 h ss"],
			["a2", "pin 0 adj2 maxAdj2"],
			["a1", "pin 0 adj1 a2"],
			["th", "*/ ss a1 100000"],
			["aw", "*/ ss a2 100000"],
			["q1", "+/ th aw 4"],
			["hR", "+- hd2 0 q1"],
			["q7", "*/ hR 2 1"],
			["q8", "*/ q7 q7 1"],
			["q9", "*/ th th 1"],
			["q10", "+- q8 0 q9"],
			["q11", "sqrt q10"],
			["idx", "*/ q11 w q7"],
			["maxAdj3", "*/ 100000 idx ss"],
			["a3", "pin 0 adj3 maxAdj3"],
			["ah", "*/ ss a3 100000"],
			["y3", "+- hR th 0"],
			["q2", "*/ w w 1"],
			["q3", "*/ ah ah 1"],
			["q4", "+- q2 0 q3"],
			["q5", "sqrt q4"],
			["dy", "*/ q5 hR w"],
			["y5", "+- hR dy 0"],
			["y7", "+- y3 dy 0"],
			["q6", "+- aw 0 th"],
			["dh", "*/ q6 1 2"],
			["y4", "+- y5 0 dh"],
			["y8", "+- y7 dh 0"],
			["aw2", "*/ aw 1 2"],
			["y6", "+- b 0 aw2"],
			["x1", "+- l ah 0"],
			["swAng", "at2 ah dy"],
			["mswAng", "+- 0 0 swAng"],
			["ix", "+- l idx 0"],
			["iy", "+/ hR y3 2"],
			["q12", "*/ th 1 2"],
			["dang2", "at2 idx q12"],
			["swAng2", "+- dang2 0 swAng"],
			["swAng3", "+- swAng dang2 0"],
			["stAng3", "+- 0 0 dang2"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"y6"
					],
					[
						"l",
						"x1",
						"y4"
					],
					[
						"l",
						"x1",
						"y5"
					],
					[
						"a",
						"w",
						"hR",
						"swAng",
						"swAng2"
					],
					[
						"a",
						"w",
						"hR",
						"stAng3",
						"swAng3"
					],
					[
						"l",
						"x1",
						"y8"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darkenLess",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"r",
						"y3"
					],
					[
						"a",
						"w",
						"hR",
						"0",
						"-5400000"
					],
					[
						"l",
						"l",
						"t"
					],
					[
						"a",
						"w",
						"hR",
						"3cd4",
						"cd4"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"r",
						"y3"
					],
					[
						"a",
						"w",
						"hR",
						"0",
						"-5400000"
					],
					[
						"l",
						"l",
						"t"
					],
					[
						"a",
						"w",
						"hR",
						"3cd4",
						"cd4"
					],
					[
						"l",
						"r",
						"y3"
					],
					[
						"a",
						"w",
						"hR",
						"0",
						"swAng"
					],
					[
						"l",
						"x1",
						"y8"
					],
					[
						"l",
						"l",
						"y6"
					],
					[
						"l",
						"x1",
						"y4"
					],
					[
						"l",
						"x1",
						"y5"
					],
					[
						"a",
						"w",
						"hR",
						"swAng",
						"swAng2"
					]
				]
			}
		]
	},
	curvedrightarrow: {
		adj: [
			["adj1", "val 25000"],
			["adj2", "val 50000"],
			["adj3", "val 25000"]
		],
		gd: [
			["maxAdj2", "*/ 50000 h ss"],
			["a2", "pin 0 adj2 maxAdj2"],
			["a1", "pin 0 adj1 a2"],
			["th", "*/ ss a1 100000"],
			["aw", "*/ ss a2 100000"],
			["q1", "+/ th aw 4"],
			["hR", "+- hd2 0 q1"],
			["q7", "*/ hR 2 1"],
			["q8", "*/ q7 q7 1"],
			["q9", "*/ th th 1"],
			["q10", "+- q8 0 q9"],
			["q11", "sqrt q10"],
			["idx", "*/ q11 w q7"],
			["maxAdj3", "*/ 100000 idx ss"],
			["a3", "pin 0 adj3 maxAdj3"],
			["ah", "*/ ss a3 100000"],
			["y3", "+- hR th 0"],
			["q2", "*/ w w 1"],
			["q3", "*/ ah ah 1"],
			["q4", "+- q2 0 q3"],
			["q5", "sqrt q4"],
			["dy", "*/ q5 hR w"],
			["y5", "+- hR dy 0"],
			["y7", "+- y3 dy 0"],
			["q6", "+- aw 0 th"],
			["dh", "*/ q6 1 2"],
			["y4", "+- y5 0 dh"],
			["y8", "+- y7 dh 0"],
			["aw2", "*/ aw 1 2"],
			["y6", "+- b 0 aw2"],
			["x1", "+- r 0 ah"],
			["swAng", "at2 ah dy"],
			["stAng", "+- cd2 0 swAng"],
			["mswAng", "+- 0 0 swAng"],
			["ix", "+- r 0 idx"],
			["iy", "+/ hR y3 2"],
			["q12", "*/ th 1 2"],
			["dang2", "at2 idx q12"],
			["swAng2", "+- dang2 0 cd4"],
			["swAng3", "+- cd4 dang2 0"],
			["stAng3", "+- cd2 0 dang2"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"hR"
					],
					[
						"a",
						"w",
						"hR",
						"cd2",
						"mswAng"
					],
					[
						"l",
						"x1",
						"y4"
					],
					[
						"l",
						"r",
						"y6"
					],
					[
						"l",
						"x1",
						"y8"
					],
					[
						"l",
						"x1",
						"y7"
					],
					[
						"a",
						"w",
						"hR",
						"stAng",
						"swAng"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darkenLess",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"r",
						"th"
					],
					[
						"a",
						"w",
						"hR",
						"3cd4",
						"swAng2"
					],
					[
						"a",
						"w",
						"hR",
						"stAng3",
						"swAng3"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"hR"
					],
					[
						"a",
						"w",
						"hR",
						"cd2",
						"mswAng"
					],
					[
						"l",
						"x1",
						"y4"
					],
					[
						"l",
						"r",
						"y6"
					],
					[
						"l",
						"x1",
						"y8"
					],
					[
						"l",
						"x1",
						"y7"
					],
					[
						"a",
						"w",
						"hR",
						"stAng",
						"swAng"
					],
					[
						"l",
						"l",
						"hR"
					],
					[
						"a",
						"w",
						"hR",
						"cd2",
						"cd4"
					],
					[
						"l",
						"r",
						"th"
					],
					[
						"a",
						"w",
						"hR",
						"3cd4",
						"swAng2"
					]
				]
			}
		]
	},
	curveduparrow: {
		adj: [
			["adj1", "val 25000"],
			["adj2", "val 50000"],
			["adj3", "val 25000"]
		],
		gd: [
			["maxAdj2", "*/ 50000 w ss"],
			["a2", "pin 0 adj2 maxAdj2"],
			["a1", "pin 0 adj1 100000"],
			["th", "*/ ss a1 100000"],
			["aw", "*/ ss a2 100000"],
			["q1", "+/ th aw 4"],
			["wR", "+- wd2 0 q1"],
			["q7", "*/ wR 2 1"],
			["q8", "*/ q7 q7 1"],
			["q9", "*/ th th 1"],
			["q10", "+- q8 0 q9"],
			["q11", "sqrt q10"],
			["idy", "*/ q11 h q7"],
			["maxAdj3", "*/ 100000 idy ss"],
			["a3", "pin 0 adj3 maxAdj3"],
			["ah", "*/ ss adj3 100000"],
			["x3", "+- wR th 0"],
			["q2", "*/ h h 1"],
			["q3", "*/ ah ah 1"],
			["q4", "+- q2 0 q3"],
			["q5", "sqrt q4"],
			["dx", "*/ q5 wR h"],
			["x5", "+- wR dx 0"],
			["x7", "+- x3 dx 0"],
			["q6", "+- aw 0 th"],
			["dh", "*/ q6 1 2"],
			["x4", "+- x5 0 dh"],
			["x8", "+- x7 dh 0"],
			["aw2", "*/ aw 1 2"],
			["x6", "+- r 0 aw2"],
			["y1", "+- t ah 0"],
			["swAng", "at2 ah dx"],
			["mswAng", "+- 0 0 swAng"],
			["iy", "+- t idy 0"],
			["ix", "+/ wR x3 2"],
			["q12", "*/ th 1 2"],
			["dang2", "at2 idy q12"],
			["swAng2", "+- dang2 0 swAng"],
			["mswAng2", "+- 0 0 swAng2"],
			["stAng3", "+- cd4 0 swAng"],
			["swAng3", "+- swAng dang2 0"],
			["stAng2", "+- cd4 0 dang2"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"x6",
						"t"
					],
					[
						"l",
						"x8",
						"y1"
					],
					[
						"l",
						"x7",
						"y1"
					],
					[
						"a",
						"wR",
						"h",
						"stAng3",
						"swAng3"
					],
					[
						"a",
						"wR",
						"h",
						"stAng2",
						"swAng2"
					],
					[
						"l",
						"x4",
						"y1"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darkenLess",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"wR",
						"b"
					],
					[
						"a",
						"wR",
						"h",
						"cd4",
						"cd4"
					],
					[
						"l",
						"th",
						"t"
					],
					[
						"a",
						"wR",
						"h",
						"cd2",
						"-5400000"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"ix",
						"iy"
					],
					[
						"a",
						"wR",
						"h",
						"stAng2",
						"swAng2"
					],
					[
						"l",
						"x4",
						"y1"
					],
					[
						"l",
						"x6",
						"t"
					],
					[
						"l",
						"x8",
						"y1"
					],
					[
						"l",
						"x7",
						"y1"
					],
					[
						"a",
						"wR",
						"h",
						"stAng3",
						"swAng"
					],
					[
						"l",
						"wR",
						"b"
					],
					[
						"a",
						"wR",
						"h",
						"cd4",
						"cd4"
					],
					[
						"l",
						"th",
						"t"
					],
					[
						"a",
						"wR",
						"h",
						"cd2",
						"-5400000"
					]
				]
			}
		]
	},
	decagon: {
		adj: [["vf", "val 105146"]],
		gd: [
			["shd2", "*/ hd2 vf 100000"],
			["dx1", "cos wd2 2160000"],
			["dx2", "cos wd2 4320000"],
			["x1", "+- hc 0 dx1"],
			["x2", "+- hc 0 dx2"],
			["x3", "+- hc dx2 0"],
			["x4", "+- hc dx1 0"],
			["dy1", "sin shd2 4320000"],
			["dy2", "sin shd2 2160000"],
			["y1", "+- vc 0 dy1"],
			["y2", "+- vc 0 dy2"],
			["y3", "+- vc dy2 0"],
			["y4", "+- vc dy1 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"vc"
				],
				[
					"l",
					"x1",
					"y2"
				],
				[
					"l",
					"x2",
					"y1"
				],
				[
					"l",
					"x3",
					"y1"
				],
				[
					"l",
					"x4",
					"y2"
				],
				[
					"l",
					"r",
					"vc"
				],
				[
					"l",
					"x4",
					"y3"
				],
				[
					"l",
					"x3",
					"y4"
				],
				[
					"l",
					"x2",
					"y4"
				],
				[
					"l",
					"x1",
					"y3"
				],
				["c"]
			]
		}]
	},
	diagstripe: {
		adj: [["adj", "val 50000"]],
		gd: [
			["a", "pin 0 adj 100000"],
			["x2", "*/ w a 100000"],
			["x1", "*/ x2 1 2"],
			["x3", "+/ x2 r 2"],
			["y2", "*/ h a 100000"],
			["y1", "*/ y2 1 2"],
			["y3", "+/ y2 b 2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"y2"
				],
				[
					"l",
					"x2",
					"t"
				],
				[
					"l",
					"r",
					"t"
				],
				[
					"l",
					"l",
					"b"
				],
				["c"]
			]
		}]
	},
	diamond: {
		adj: [],
		gd: [["ir", "*/ w 3 4"], ["ib", "*/ h 3 4"]],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"vc"
				],
				[
					"l",
					"hc",
					"t"
				],
				[
					"l",
					"r",
					"vc"
				],
				[
					"l",
					"hc",
					"b"
				],
				["c"]
			]
		}]
	},
	dodecagon: {
		adj: [],
		gd: [
			["x1", "*/ w 2894 21600"],
			["x2", "*/ w 7906 21600"],
			["x3", "*/ w 13694 21600"],
			["x4", "*/ w 18706 21600"],
			["y1", "*/ h 2894 21600"],
			["y2", "*/ h 7906 21600"],
			["y3", "*/ h 13694 21600"],
			["y4", "*/ h 18706 21600"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"y2"
				],
				[
					"l",
					"x1",
					"y1"
				],
				[
					"l",
					"x2",
					"t"
				],
				[
					"l",
					"x3",
					"t"
				],
				[
					"l",
					"x4",
					"y1"
				],
				[
					"l",
					"r",
					"y2"
				],
				[
					"l",
					"r",
					"y3"
				],
				[
					"l",
					"x4",
					"y4"
				],
				[
					"l",
					"x3",
					"b"
				],
				[
					"l",
					"x2",
					"b"
				],
				[
					"l",
					"x1",
					"y4"
				],
				[
					"l",
					"l",
					"y3"
				],
				["c"]
			]
		}]
	},
	donut: {
		adj: [["adj", "val 25000"]],
		gd: [
			["a", "pin 0 adj 50000"],
			["dr", "*/ ss a 100000"],
			["iwd2", "+- wd2 0 dr"],
			["ihd2", "+- hd2 0 dr"],
			["idx", "cos wd2 2700000"],
			["idy", "sin hd2 2700000"],
			["il", "+- hc 0 idx"],
			["ir", "+- hc idx 0"],
			["it", "+- vc 0 idy"],
			["ib", "+- vc idy 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"vc"
				],
				[
					"a",
					"wd2",
					"hd2",
					"cd2",
					"cd4"
				],
				[
					"a",
					"wd2",
					"hd2",
					"3cd4",
					"cd4"
				],
				[
					"a",
					"wd2",
					"hd2",
					"0",
					"cd4"
				],
				[
					"a",
					"wd2",
					"hd2",
					"cd4",
					"cd4"
				],
				["c"],
				[
					"m",
					"dr",
					"vc"
				],
				[
					"a",
					"iwd2",
					"ihd2",
					"cd2",
					"-5400000"
				],
				[
					"a",
					"iwd2",
					"ihd2",
					"cd4",
					"-5400000"
				],
				[
					"a",
					"iwd2",
					"ihd2",
					"0",
					"-5400000"
				],
				[
					"a",
					"iwd2",
					"ihd2",
					"3cd4",
					"-5400000"
				],
				["c"]
			]
		}]
	},
	doublewave: {
		adj: [["adj1", "val 6250"], ["adj2", "val 0"]],
		gd: [
			["a1", "pin 0 adj1 12500"],
			["a2", "pin -10000 adj2 10000"],
			["y1", "*/ h a1 100000"],
			["dy2", "*/ y1 10 3"],
			["y2", "+- y1 0 dy2"],
			["y3", "+- y1 dy2 0"],
			["y4", "+- b 0 y1"],
			["y5", "+- y4 0 dy2"],
			["y6", "+- y4 dy2 0"],
			["dx1", "*/ w a2 100000"],
			["of2", "*/ w a2 50000"],
			["x1", "abs dx1"],
			["dx2", "?: of2 0 of2"],
			["x2", "+- l 0 dx2"],
			["dx8", "?: of2 of2 0"],
			["x8", "+- r 0 dx8"],
			["dx3", "+/ dx2 x8 6"],
			["x3", "+- x2 dx3 0"],
			["dx4", "+/ dx2 x8 3"],
			["x4", "+- x2 dx4 0"],
			["x5", "+/ x2 x8 2"],
			["x6", "+- x5 dx3 0"],
			["x7", "+/ x6 x8 2"],
			["x9", "+- l dx8 0"],
			["x15", "+- r dx2 0"],
			["x10", "+- x9 dx3 0"],
			["x11", "+- x9 dx4 0"],
			["x12", "+/ x9 x15 2"],
			["x13", "+- x12 dx3 0"],
			["x14", "+/ x13 x15 2"],
			["x16", "+- r 0 x1"],
			["xAdj", "+- hc dx1 0"],
			["il", "max x2 x9"],
			["ir", "min x8 x15"],
			["it", "*/ h a1 50000"],
			["ib", "+- b 0 it"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"x2",
					"y1"
				],
				[
					"C",
					"x3",
					"y2",
					"x4",
					"y3",
					"x5",
					"y1"
				],
				[
					"C",
					"x6",
					"y2",
					"x7",
					"y3",
					"x8",
					"y1"
				],
				[
					"l",
					"x15",
					"y4"
				],
				[
					"C",
					"x14",
					"y6",
					"x13",
					"y5",
					"x12",
					"y4"
				],
				[
					"C",
					"x11",
					"y6",
					"x10",
					"y5",
					"x9",
					"y4"
				],
				["c"]
			]
		}]
	},
	downarrow: {
		adj: [["adj1", "val 50000"], ["adj2", "val 50000"]],
		gd: [
			["maxAdj2", "*/ 100000 h ss"],
			["a1", "pin 0 adj1 100000"],
			["a2", "pin 0 adj2 maxAdj2"],
			["dy1", "*/ ss a2 100000"],
			["y1", "+- b 0 dy1"],
			["dx1", "*/ w a1 200000"],
			["x1", "+- hc 0 dx1"],
			["x2", "+- hc dx1 0"],
			["dy2", "*/ x1 dy1 wd2"],
			["y2", "+- y1 dy2 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"y1"
				],
				[
					"l",
					"x1",
					"y1"
				],
				[
					"l",
					"x1",
					"t"
				],
				[
					"l",
					"x2",
					"t"
				],
				[
					"l",
					"x2",
					"y1"
				],
				[
					"l",
					"r",
					"y1"
				],
				[
					"l",
					"hc",
					"b"
				],
				["c"]
			]
		}]
	},
	downarrowcallout: {
		adj: [
			["adj1", "val 25000"],
			["adj2", "val 25000"],
			["adj3", "val 25000"],
			["adj4", "val 64977"]
		],
		gd: [
			["maxAdj2", "*/ 50000 w ss"],
			["a2", "pin 0 adj2 maxAdj2"],
			["maxAdj1", "*/ a2 2 1"],
			["a1", "pin 0 adj1 maxAdj1"],
			["maxAdj3", "*/ 100000 h ss"],
			["a3", "pin 0 adj3 maxAdj3"],
			["q2", "*/ a3 ss h"],
			["maxAdj4", "+- 100000 0 q2"],
			["a4", "pin 0 adj4 maxAdj4"],
			["dx1", "*/ ss a2 100000"],
			["dx2", "*/ ss a1 200000"],
			["x1", "+- hc 0 dx1"],
			["x2", "+- hc 0 dx2"],
			["x3", "+- hc dx2 0"],
			["x4", "+- hc dx1 0"],
			["dy3", "*/ ss a3 100000"],
			["y3", "+- b 0 dy3"],
			["y2", "*/ h a4 100000"],
			["y1", "*/ y2 1 2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"l",
					"r",
					"t"
				],
				[
					"l",
					"r",
					"y2"
				],
				[
					"l",
					"x3",
					"y2"
				],
				[
					"l",
					"x3",
					"y3"
				],
				[
					"l",
					"x4",
					"y3"
				],
				[
					"l",
					"hc",
					"b"
				],
				[
					"l",
					"x1",
					"y3"
				],
				[
					"l",
					"x2",
					"y3"
				],
				[
					"l",
					"x2",
					"y2"
				],
				[
					"l",
					"l",
					"y2"
				],
				["c"]
			]
		}]
	},
	ellipse: {
		adj: [],
		gd: [
			["idx", "cos wd2 2700000"],
			["idy", "sin hd2 2700000"],
			["il", "+- hc 0 idx"],
			["ir", "+- hc idx 0"],
			["it", "+- vc 0 idy"],
			["ib", "+- vc idy 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"vc"
				],
				[
					"a",
					"wd2",
					"hd2",
					"cd2",
					"cd4"
				],
				[
					"a",
					"wd2",
					"hd2",
					"3cd4",
					"cd4"
				],
				[
					"a",
					"wd2",
					"hd2",
					"0",
					"cd4"
				],
				[
					"a",
					"wd2",
					"hd2",
					"cd4",
					"cd4"
				],
				["c"]
			]
		}]
	},
	ellipseribbon: {
		adj: [
			["adj1", "val 25000"],
			["adj2", "val 50000"],
			["adj3", "val 12500"]
		],
		gd: [
			["a1", "pin 0 adj1 100000"],
			["a2", "pin 25000 adj2 75000"],
			["q10", "+- 100000 0 a1"],
			["q11", "*/ q10 1 2"],
			["q12", "+- a1 0 q11"],
			["minAdj3", "max 0 q12"],
			["a3", "pin minAdj3 adj3 a1"],
			["dx2", "*/ w a2 200000"],
			["x2", "+- hc 0 dx2"],
			["x3", "+- x2 wd8 0"],
			["x4", "+- r 0 x3"],
			["x5", "+- r 0 x2"],
			["x6", "+- r 0 wd8"],
			["dy1", "*/ h a3 100000"],
			["f1", "*/ 4 dy1 w"],
			["q1", "*/ x3 x3 w"],
			["q2", "+- x3 0 q1"],
			["y1", "*/ f1 q2 1"],
			["cx1", "*/ x3 1 2"],
			["cy1", "*/ f1 cx1 1"],
			["cx2", "+- r 0 cx1"],
			["q1", "*/ h a1 100000"],
			["dy3", "+- q1 0 dy1"],
			["q3", "*/ x2 x2 w"],
			["q4", "+- x2 0 q3"],
			["q5", "*/ f1 q4 1"],
			["y3", "+- q5 dy3 0"],
			["q6", "+- dy1 dy3 y3"],
			["q7", "+- q6 dy1 0"],
			["cy3", "+- q7 dy3 0"],
			["rh", "+- b 0 q1"],
			["q8", "*/ dy1 14 16"],
			["y2", "+/ q8 rh 2"],
			["y5", "+- q5 rh 0"],
			["y6", "+- y3 rh 0"],
			["cx4", "*/ x2 1 2"],
			["q9", "*/ f1 cx4 1"],
			["cy4", "+- q9 rh 0"],
			["cx5", "+- r 0 cx4"],
			["cy6", "+- cy3 rh 0"],
			["y7", "+- y1 dy3 0"],
			["cy7", "+- q1 q1 y7"],
			["y8", "+- b 0 dy1"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"Q",
						"cx1",
						"cy1",
						"x3",
						"y1"
					],
					[
						"l",
						"x2",
						"y3"
					],
					[
						"Q",
						"hc",
						"cy3",
						"x5",
						"y3"
					],
					[
						"l",
						"x4",
						"y1"
					],
					[
						"Q",
						"cx2",
						"cy1",
						"r",
						"t"
					],
					[
						"l",
						"x6",
						"y2"
					],
					[
						"l",
						"r",
						"rh"
					],
					[
						"Q",
						"cx5",
						"cy4",
						"x5",
						"y5"
					],
					[
						"l",
						"x5",
						"y6"
					],
					[
						"Q",
						"hc",
						"cy6",
						"x2",
						"y6"
					],
					[
						"l",
						"x2",
						"y5"
					],
					[
						"Q",
						"cx4",
						"cy4",
						"l",
						"rh"
					],
					[
						"l",
						"wd8",
						"y2"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darkenLess",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"x3",
						"y7"
					],
					[
						"l",
						"x3",
						"y1"
					],
					[
						"l",
						"x2",
						"y3"
					],
					[
						"Q",
						"hc",
						"cy3",
						"x5",
						"y3"
					],
					[
						"l",
						"x4",
						"y1"
					],
					[
						"l",
						"x4",
						"y7"
					],
					[
						"Q",
						"hc",
						"cy7",
						"x3",
						"y7"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"Q",
						"cx1",
						"cy1",
						"x3",
						"y1"
					],
					[
						"l",
						"x2",
						"y3"
					],
					[
						"Q",
						"hc",
						"cy3",
						"x5",
						"y3"
					],
					[
						"l",
						"x4",
						"y1"
					],
					[
						"Q",
						"cx2",
						"cy1",
						"r",
						"t"
					],
					[
						"l",
						"x6",
						"y2"
					],
					[
						"l",
						"r",
						"rh"
					],
					[
						"Q",
						"cx5",
						"cy4",
						"x5",
						"y5"
					],
					[
						"l",
						"x5",
						"y6"
					],
					[
						"Q",
						"hc",
						"cy6",
						"x2",
						"y6"
					],
					[
						"l",
						"x2",
						"y5"
					],
					[
						"Q",
						"cx4",
						"cy4",
						"l",
						"rh"
					],
					[
						"l",
						"wd8",
						"y2"
					],
					["c"],
					[
						"m",
						"x2",
						"y5"
					],
					[
						"l",
						"x2",
						"y3"
					],
					[
						"m",
						"x5",
						"y3"
					],
					[
						"l",
						"x5",
						"y5"
					],
					[
						"m",
						"x3",
						"y1"
					],
					[
						"l",
						"x3",
						"y7"
					],
					[
						"m",
						"x4",
						"y7"
					],
					[
						"l",
						"x4",
						"y1"
					]
				]
			}
		]
	},
	ellipseribbon2: {
		adj: [
			["adj1", "val 25000"],
			["adj2", "val 50000"],
			["adj3", "val 12500"]
		],
		gd: [
			["a1", "pin 0 adj1 100000"],
			["a2", "pin 25000 adj2 75000"],
			["q10", "+- 100000 0 a1"],
			["q11", "*/ q10 1 2"],
			["q12", "+- a1 0 q11"],
			["minAdj3", "max 0 q12"],
			["a3", "pin minAdj3 adj3 a1"],
			["dx2", "*/ w a2 200000"],
			["x2", "+- hc 0 dx2"],
			["x3", "+- x2 wd8 0"],
			["x4", "+- r 0 x3"],
			["x5", "+- r 0 x2"],
			["x6", "+- r 0 wd8"],
			["dy1", "*/ h a3 100000"],
			["f1", "*/ 4 dy1 w"],
			["q1", "*/ x3 x3 w"],
			["q2", "+- x3 0 q1"],
			["u1", "*/ f1 q2 1"],
			["y1", "+- b 0 u1"],
			["cx1", "*/ x3 1 2"],
			["cu1", "*/ f1 cx1 1"],
			["cy1", "+- b 0 cu1"],
			["cx2", "+- r 0 cx1"],
			["q1", "*/ h a1 100000"],
			["dy3", "+- q1 0 dy1"],
			["q3", "*/ x2 x2 w"],
			["q4", "+- x2 0 q3"],
			["q5", "*/ f1 q4 1"],
			["u3", "+- q5 dy3 0"],
			["y3", "+- b 0 u3"],
			["q6", "+- dy1 dy3 u3"],
			["q7", "+- q6 dy1 0"],
			["cu3", "+- q7 dy3 0"],
			["cy3", "+- b 0 cu3"],
			["rh", "+- b 0 q1"],
			["q8", "*/ dy1 14 16"],
			["u2", "+/ q8 rh 2"],
			["y2", "+- b 0 u2"],
			["u5", "+- q5 rh 0"],
			["y5", "+- b 0 u5"],
			["u6", "+- u3 rh 0"],
			["y6", "+- b 0 u6"],
			["cx4", "*/ x2 1 2"],
			["q9", "*/ f1 cx4 1"],
			["cu4", "+- q9 rh 0"],
			["cy4", "+- b 0 cu4"],
			["cx5", "+- r 0 cx4"],
			["cu6", "+- cu3 rh 0"],
			["cy6", "+- b 0 cu6"],
			["u7", "+- u1 dy3 0"],
			["y7", "+- b 0 u7"],
			["cu7", "+- q1 q1 u7"],
			["cy7", "+- b 0 cu7"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"b"
					],
					[
						"Q",
						"cx1",
						"cy1",
						"x3",
						"y1"
					],
					[
						"l",
						"x2",
						"y3"
					],
					[
						"Q",
						"hc",
						"cy3",
						"x5",
						"y3"
					],
					[
						"l",
						"x4",
						"y1"
					],
					[
						"Q",
						"cx2",
						"cy1",
						"r",
						"b"
					],
					[
						"l",
						"x6",
						"y2"
					],
					[
						"l",
						"r",
						"q1"
					],
					[
						"Q",
						"cx5",
						"cy4",
						"x5",
						"y5"
					],
					[
						"l",
						"x5",
						"y6"
					],
					[
						"Q",
						"hc",
						"cy6",
						"x2",
						"y6"
					],
					[
						"l",
						"x2",
						"y5"
					],
					[
						"Q",
						"cx4",
						"cy4",
						"l",
						"q1"
					],
					[
						"l",
						"wd8",
						"y2"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darkenLess",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"x3",
						"y7"
					],
					[
						"l",
						"x3",
						"y1"
					],
					[
						"l",
						"x2",
						"y3"
					],
					[
						"Q",
						"hc",
						"cy3",
						"x5",
						"y3"
					],
					[
						"l",
						"x4",
						"y1"
					],
					[
						"l",
						"x4",
						"y7"
					],
					[
						"Q",
						"hc",
						"cy7",
						"x3",
						"y7"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"b"
					],
					[
						"l",
						"wd8",
						"y2"
					],
					[
						"l",
						"l",
						"q1"
					],
					[
						"Q",
						"cx4",
						"cy4",
						"x2",
						"y5"
					],
					[
						"l",
						"x2",
						"y6"
					],
					[
						"Q",
						"hc",
						"cy6",
						"x5",
						"y6"
					],
					[
						"l",
						"x5",
						"y5"
					],
					[
						"Q",
						"cx5",
						"cy4",
						"r",
						"q1"
					],
					[
						"l",
						"x6",
						"y2"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"Q",
						"cx2",
						"cy1",
						"x4",
						"y1"
					],
					[
						"l",
						"x5",
						"y3"
					],
					[
						"Q",
						"hc",
						"cy3",
						"x2",
						"y3"
					],
					[
						"l",
						"x3",
						"y1"
					],
					[
						"Q",
						"cx1",
						"cy1",
						"l",
						"b"
					],
					["c"],
					[
						"m",
						"x2",
						"y3"
					],
					[
						"l",
						"x2",
						"y5"
					],
					[
						"m",
						"x5",
						"y5"
					],
					[
						"l",
						"x5",
						"y3"
					],
					[
						"m",
						"x3",
						"y7"
					],
					[
						"l",
						"x3",
						"y1"
					],
					[
						"m",
						"x4",
						"y1"
					],
					[
						"l",
						"x4",
						"y7"
					]
				]
			}
		]
	},
	flowchartalternateprocess: {
		adj: [],
		gd: [
			["x2", "+- r 0 ssd6"],
			["y2", "+- b 0 ssd6"],
			["il", "*/ ssd6 29289 100000"],
			["ir", "+- r 0 il"],
			["ib", "+- b 0 il"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"ssd6"
				],
				[
					"a",
					"ssd6",
					"ssd6",
					"cd2",
					"cd4"
				],
				[
					"l",
					"x2",
					"t"
				],
				[
					"a",
					"ssd6",
					"ssd6",
					"3cd4",
					"cd4"
				],
				[
					"l",
					"r",
					"y2"
				],
				[
					"a",
					"ssd6",
					"ssd6",
					"0",
					"cd4"
				],
				[
					"l",
					"ssd6",
					"b"
				],
				[
					"a",
					"ssd6",
					"ssd6",
					"cd4",
					"cd4"
				],
				["c"]
			]
		}]
	},
	flowchartcollate: {
		adj: [],
		gd: [["ir", "*/ w 3 4"], ["ib", "*/ h 3 4"]],
		paths: [{
			w: 2,
			h: 2,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"0",
					"0"
				],
				[
					"l",
					"2",
					"0"
				],
				[
					"l",
					"1",
					"1"
				],
				[
					"l",
					"2",
					"2"
				],
				[
					"l",
					"0",
					"2"
				],
				[
					"l",
					"1",
					"1"
				],
				["c"]
			]
		}]
	},
	flowchartconnector: {
		adj: [],
		gd: [
			["idx", "cos wd2 2700000"],
			["idy", "sin hd2 2700000"],
			["il", "+- hc 0 idx"],
			["ir", "+- hc idx 0"],
			["it", "+- vc 0 idy"],
			["ib", "+- vc idy 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"vc"
				],
				[
					"a",
					"wd2",
					"hd2",
					"cd2",
					"cd4"
				],
				[
					"a",
					"wd2",
					"hd2",
					"3cd4",
					"cd4"
				],
				[
					"a",
					"wd2",
					"hd2",
					"0",
					"cd4"
				],
				[
					"a",
					"wd2",
					"hd2",
					"cd4",
					"cd4"
				],
				["c"]
			]
		}]
	},
	flowchartdecision: {
		adj: [],
		gd: [["ir", "*/ w 3 4"], ["ib", "*/ h 3 4"]],
		paths: [{
			w: 2,
			h: 2,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"0",
					"1"
				],
				[
					"l",
					"1",
					"0"
				],
				[
					"l",
					"2",
					"1"
				],
				[
					"l",
					"1",
					"2"
				],
				["c"]
			]
		}]
	},
	flowchartdelay: {
		adj: [],
		gd: [
			["idx", "cos wd2 2700000"],
			["idy", "sin hd2 2700000"],
			["ir", "+- hc idx 0"],
			["it", "+- vc 0 idy"],
			["ib", "+- vc idy 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"l",
					"hc",
					"t"
				],
				[
					"a",
					"wd2",
					"hd2",
					"3cd4",
					"cd2"
				],
				[
					"l",
					"l",
					"b"
				],
				["c"]
			]
		}]
	},
	flowchartdisplay: {
		adj: [],
		gd: [["x2", "*/ w 5 6"]],
		paths: [{
			w: 6,
			h: 6,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"0",
					"3"
				],
				[
					"l",
					"1",
					"0"
				],
				[
					"l",
					"5",
					"0"
				],
				[
					"a",
					"1",
					"3",
					"3cd4",
					"cd2"
				],
				[
					"l",
					"1",
					"6"
				],
				["c"]
			]
		}]
	},
	flowchartdocument: {
		adj: [],
		gd: [["y1", "*/ h 17322 21600"], ["y2", "*/ h 20172 21600"]],
		paths: [{
			w: 21600,
			h: 21600,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"0",
					"0"
				],
				[
					"l",
					"21600",
					"0"
				],
				[
					"l",
					"21600",
					"17322"
				],
				[
					"C",
					"10800",
					"17322",
					"10800",
					"23922",
					"0",
					"20172"
				],
				["c"]
			]
		}]
	},
	flowchartextract: {
		adj: [],
		gd: [["x2", "*/ w 3 4"]],
		paths: [{
			w: 2,
			h: 2,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"0",
					"2"
				],
				[
					"l",
					"1",
					"0"
				],
				[
					"l",
					"2",
					"2"
				],
				["c"]
			]
		}]
	},
	flowchartinputoutput: {
		adj: [],
		gd: [
			["x3", "*/ w 2 5"],
			["x4", "*/ w 3 5"],
			["x5", "*/ w 4 5"],
			["x6", "*/ w 9 10"]
		],
		paths: [{
			w: 5,
			h: 5,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"0",
					"5"
				],
				[
					"l",
					"1",
					"0"
				],
				[
					"l",
					"5",
					"0"
				],
				[
					"l",
					"4",
					"5"
				],
				["c"]
			]
		}]
	},
	flowchartinternalstorage: {
		adj: [],
		gd: [],
		paths: [
			{
				w: 1,
				h: 1,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"0",
						"0"
					],
					[
						"l",
						"1",
						"0"
					],
					[
						"l",
						"1",
						"1"
					],
					[
						"l",
						"0",
						"1"
					],
					["c"]
				]
			},
			{
				w: 8,
				h: 8,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"1",
						"0"
					],
					[
						"l",
						"1",
						"8"
					],
					[
						"m",
						"0",
						"1"
					],
					[
						"l",
						"8",
						"1"
					]
				]
			},
			{
				w: 1,
				h: 1,
				fill: "none",
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"0",
						"0"
					],
					[
						"l",
						"1",
						"0"
					],
					[
						"l",
						"1",
						"1"
					],
					[
						"l",
						"0",
						"1"
					],
					["c"]
				]
			}
		]
	},
	flowchartmagneticdisk: {
		adj: [],
		gd: [["y3", "*/ h 5 6"]],
		paths: [
			{
				w: 6,
				h: 6,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"0",
						"1"
					],
					[
						"a",
						"3",
						"1",
						"cd2",
						"cd2"
					],
					[
						"l",
						"6",
						"5"
					],
					[
						"a",
						"3",
						"1",
						"0",
						"cd2"
					],
					["c"]
				]
			},
			{
				w: 6,
				h: 6,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [[
					"m",
					"6",
					"1"
				], [
					"a",
					"3",
					"1",
					"0",
					"cd2"
				]]
			},
			{
				w: 6,
				h: 6,
				fill: "none",
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"0",
						"1"
					],
					[
						"a",
						"3",
						"1",
						"cd2",
						"cd2"
					],
					[
						"l",
						"6",
						"5"
					],
					[
						"a",
						"3",
						"1",
						"0",
						"cd2"
					],
					["c"]
				]
			}
		]
	},
	flowchartmagneticdrum: {
		adj: [],
		gd: [["x2", "*/ w 2 3"]],
		paths: [
			{
				w: 6,
				h: 6,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"1",
						"0"
					],
					[
						"l",
						"5",
						"0"
					],
					[
						"a",
						"1",
						"3",
						"3cd4",
						"cd2"
					],
					[
						"l",
						"1",
						"6"
					],
					[
						"a",
						"1",
						"3",
						"cd4",
						"cd2"
					],
					["c"]
				]
			},
			{
				w: 6,
				h: 6,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [[
					"m",
					"5",
					"6"
				], [
					"a",
					"1",
					"3",
					"cd4",
					"cd2"
				]]
			},
			{
				w: 6,
				h: 6,
				fill: "none",
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"1",
						"0"
					],
					[
						"l",
						"5",
						"0"
					],
					[
						"a",
						"1",
						"3",
						"3cd4",
						"cd2"
					],
					[
						"l",
						"1",
						"6"
					],
					[
						"a",
						"1",
						"3",
						"cd4",
						"cd2"
					],
					["c"]
				]
			}
		]
	},
	flowchartmagnetictape: {
		adj: [],
		gd: [
			["idx", "cos wd2 2700000"],
			["idy", "sin hd2 2700000"],
			["il", "+- hc 0 idx"],
			["ir", "+- hc idx 0"],
			["it", "+- vc 0 idy"],
			["ib", "+- vc idy 0"],
			["ang1", "at2 w h"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"hc",
					"b"
				],
				[
					"a",
					"wd2",
					"hd2",
					"cd4",
					"cd4"
				],
				[
					"a",
					"wd2",
					"hd2",
					"cd2",
					"cd4"
				],
				[
					"a",
					"wd2",
					"hd2",
					"3cd4",
					"cd4"
				],
				[
					"a",
					"wd2",
					"hd2",
					"0",
					"ang1"
				],
				[
					"l",
					"r",
					"ib"
				],
				[
					"l",
					"r",
					"b"
				],
				["c"]
			]
		}]
	},
	flowchartmanualinput: {
		adj: [],
		gd: [],
		paths: [{
			w: 5,
			h: 5,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"0",
					"1"
				],
				[
					"l",
					"5",
					"0"
				],
				[
					"l",
					"5",
					"5"
				],
				[
					"l",
					"0",
					"5"
				],
				["c"]
			]
		}]
	},
	flowchartmanualoperation: {
		adj: [],
		gd: [["x3", "*/ w 4 5"], ["x4", "*/ w 9 10"]],
		paths: [{
			w: 5,
			h: 5,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"0",
					"0"
				],
				[
					"l",
					"5",
					"0"
				],
				[
					"l",
					"4",
					"5"
				],
				[
					"l",
					"1",
					"5"
				],
				["c"]
			]
		}]
	},
	flowchartmerge: {
		adj: [],
		gd: [["x2", "*/ w 3 4"]],
		paths: [{
			w: 2,
			h: 2,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"0",
					"0"
				],
				[
					"l",
					"2",
					"0"
				],
				[
					"l",
					"1",
					"2"
				],
				["c"]
			]
		}]
	},
	flowchartmultidocument: {
		adj: [],
		gd: [
			["y2", "*/ h 3675 21600"],
			["y8", "*/ h 20782 21600"],
			["x3", "*/ w 9298 21600"],
			["x4", "*/ w 12286 21600"],
			["x5", "*/ w 18595 21600"]
		],
		paths: [
			{
				w: 21600,
				h: 21600,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"0",
						"20782"
					],
					[
						"C",
						"9298",
						"23542",
						"9298",
						"18022",
						"18595",
						"18022"
					],
					[
						"l",
						"18595",
						"3675"
					],
					[
						"l",
						"0",
						"3675"
					],
					["c"],
					[
						"m",
						"1532",
						"3675"
					],
					[
						"l",
						"1532",
						"1815"
					],
					[
						"l",
						"20000",
						"1815"
					],
					[
						"l",
						"20000",
						"16252"
					],
					[
						"C",
						"19298",
						"16252",
						"18595",
						"16352",
						"18595",
						"16352"
					],
					[
						"l",
						"18595",
						"3675"
					],
					["c"],
					[
						"m",
						"2972",
						"1815"
					],
					[
						"l",
						"2972",
						"0"
					],
					[
						"l",
						"21600",
						"0"
					],
					[
						"l",
						"21600",
						"14392"
					],
					[
						"C",
						"20800",
						"14392",
						"20000",
						"14467",
						"20000",
						"14467"
					],
					[
						"l",
						"20000",
						"1815"
					],
					["c"]
				]
			},
			{
				w: 21600,
				h: 21600,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"0",
						"3675"
					],
					[
						"l",
						"18595",
						"3675"
					],
					[
						"l",
						"18595",
						"18022"
					],
					[
						"C",
						"9298",
						"18022",
						"9298",
						"23542",
						"0",
						"20782"
					],
					["c"],
					[
						"m",
						"1532",
						"3675"
					],
					[
						"l",
						"1532",
						"1815"
					],
					[
						"l",
						"20000",
						"1815"
					],
					[
						"l",
						"20000",
						"16252"
					],
					[
						"C",
						"19298",
						"16252",
						"18595",
						"16352",
						"18595",
						"16352"
					],
					[
						"m",
						"2972",
						"1815"
					],
					[
						"l",
						"2972",
						"0"
					],
					[
						"l",
						"21600",
						"0"
					],
					[
						"l",
						"21600",
						"14392"
					],
					[
						"C",
						"20800",
						"14392",
						"20000",
						"14467",
						"20000",
						"14467"
					]
				]
			},
			{
				w: 21600,
				h: 21600,
				fill: "none",
				stroke: !1,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"0",
						"20782"
					],
					[
						"C",
						"9298",
						"23542",
						"9298",
						"18022",
						"18595",
						"18022"
					],
					[
						"l",
						"18595",
						"16352"
					],
					[
						"C",
						"18595",
						"16352",
						"19298",
						"16252",
						"20000",
						"16252"
					],
					[
						"l",
						"20000",
						"14467"
					],
					[
						"C",
						"20000",
						"14467",
						"20800",
						"14392",
						"21600",
						"14392"
					],
					[
						"l",
						"21600",
						"0"
					],
					[
						"l",
						"2972",
						"0"
					],
					[
						"l",
						"2972",
						"1815"
					],
					[
						"l",
						"1532",
						"1815"
					],
					[
						"l",
						"1532",
						"3675"
					],
					[
						"l",
						"0",
						"3675"
					],
					["c"]
				]
			}
		]
	},
	flowchartofflinestorage: {
		adj: [],
		gd: [["x4", "*/ w 3 4"]],
		paths: [
			{
				w: 2,
				h: 2,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"0",
						"0"
					],
					[
						"l",
						"2",
						"0"
					],
					[
						"l",
						"1",
						"2"
					],
					["c"]
				]
			},
			{
				w: 5,
				h: 5,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [[
					"m",
					"2",
					"4"
				], [
					"l",
					"3",
					"4"
				]]
			},
			{
				w: 2,
				h: 2,
				fill: "none",
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"0",
						"0"
					],
					[
						"l",
						"2",
						"0"
					],
					[
						"l",
						"1",
						"2"
					],
					["c"]
				]
			}
		]
	},
	flowchartoffpageconnector: {
		adj: [],
		gd: [["y1", "*/ h 4 5"]],
		paths: [{
			w: 10,
			h: 10,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"0",
					"0"
				],
				[
					"l",
					"10",
					"0"
				],
				[
					"l",
					"10",
					"8"
				],
				[
					"l",
					"5",
					"10"
				],
				[
					"l",
					"0",
					"8"
				],
				["c"]
			]
		}]
	},
	flowchartonlinestorage: {
		adj: [],
		gd: [["x2", "*/ w 5 6"]],
		paths: [{
			w: 6,
			h: 6,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"1",
					"0"
				],
				[
					"l",
					"6",
					"0"
				],
				[
					"a",
					"1",
					"3",
					"3cd4",
					"-10800000"
				],
				[
					"l",
					"1",
					"6"
				],
				[
					"a",
					"1",
					"3",
					"cd4",
					"cd2"
				],
				["c"]
			]
		}]
	},
	flowchartor: {
		adj: [],
		gd: [
			["idx", "cos wd2 2700000"],
			["idy", "sin hd2 2700000"],
			["il", "+- hc 0 idx"],
			["ir", "+- hc idx 0"],
			["it", "+- vc 0 idy"],
			["ib", "+- vc idy 0"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"vc"
					],
					[
						"a",
						"wd2",
						"hd2",
						"cd2",
						"cd4"
					],
					[
						"a",
						"wd2",
						"hd2",
						"3cd4",
						"cd4"
					],
					[
						"a",
						"wd2",
						"hd2",
						"0",
						"cd4"
					],
					[
						"a",
						"wd2",
						"hd2",
						"cd4",
						"cd4"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"hc",
						"t"
					],
					[
						"l",
						"hc",
						"b"
					],
					[
						"m",
						"l",
						"vc"
					],
					[
						"l",
						"r",
						"vc"
					]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"l",
						"vc"
					],
					[
						"a",
						"wd2",
						"hd2",
						"cd2",
						"cd4"
					],
					[
						"a",
						"wd2",
						"hd2",
						"3cd4",
						"cd4"
					],
					[
						"a",
						"wd2",
						"hd2",
						"0",
						"cd4"
					],
					[
						"a",
						"wd2",
						"hd2",
						"cd4",
						"cd4"
					],
					["c"]
				]
			}
		]
	},
	flowchartpredefinedprocess: {
		adj: [],
		gd: [["x2", "*/ w 7 8"]],
		paths: [
			{
				w: 1,
				h: 1,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"0",
						"0"
					],
					[
						"l",
						"1",
						"0"
					],
					[
						"l",
						"1",
						"1"
					],
					[
						"l",
						"0",
						"1"
					],
					["c"]
				]
			},
			{
				w: 8,
				h: 8,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"1",
						"0"
					],
					[
						"l",
						"1",
						"8"
					],
					[
						"m",
						"7",
						"0"
					],
					[
						"l",
						"7",
						"8"
					]
				]
			},
			{
				w: 1,
				h: 1,
				fill: "none",
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"0",
						"0"
					],
					[
						"l",
						"1",
						"0"
					],
					[
						"l",
						"1",
						"1"
					],
					[
						"l",
						"0",
						"1"
					],
					["c"]
				]
			}
		]
	},
	flowchartpreparation: {
		adj: [],
		gd: [["x2", "*/ w 4 5"]],
		paths: [{
			w: 10,
			h: 10,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"0",
					"5"
				],
				[
					"l",
					"2",
					"0"
				],
				[
					"l",
					"8",
					"0"
				],
				[
					"l",
					"10",
					"5"
				],
				[
					"l",
					"8",
					"10"
				],
				[
					"l",
					"2",
					"10"
				],
				["c"]
			]
		}]
	},
	flowchartprocess: {
		adj: [],
		gd: [],
		paths: [{
			w: 1,
			h: 1,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"0",
					"0"
				],
				[
					"l",
					"1",
					"0"
				],
				[
					"l",
					"1",
					"1"
				],
				[
					"l",
					"0",
					"1"
				],
				["c"]
			]
		}]
	},
	flowchartpunchedcard: {
		adj: [],
		gd: [],
		paths: [{
			w: 5,
			h: 5,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"0",
					"1"
				],
				[
					"l",
					"1",
					"0"
				],
				[
					"l",
					"5",
					"0"
				],
				[
					"l",
					"5",
					"5"
				],
				[
					"l",
					"0",
					"5"
				],
				["c"]
			]
		}]
	},
	flowchartpunchedtape: {
		adj: [],
		gd: [["y2", "*/ h 9 10"], ["ib", "*/ h 4 5"]],
		paths: [{
			w: 20,
			h: 20,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"0",
					"2"
				],
				[
					"a",
					"5",
					"2",
					"cd2",
					"-10800000"
				],
				[
					"a",
					"5",
					"2",
					"cd2",
					"cd2"
				],
				[
					"l",
					"20",
					"18"
				],
				[
					"a",
					"5",
					"2",
					"0",
					"-10800000"
				],
				[
					"a",
					"5",
					"2",
					"0",
					"cd2"
				],
				["c"]
			]
		}]
	},
	flowchartsort: {
		adj: [],
		gd: [["ir", "*/ w 3 4"], ["ib", "*/ h 3 4"]],
		paths: [
			{
				w: 2,
				h: 2,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"0",
						"1"
					],
					[
						"l",
						"1",
						"0"
					],
					[
						"l",
						"2",
						"1"
					],
					[
						"l",
						"1",
						"2"
					],
					["c"]
				]
			},
			{
				w: 2,
				h: 2,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [[
					"m",
					"0",
					"1"
				], [
					"l",
					"2",
					"1"
				]]
			},
			{
				w: 2,
				h: 2,
				fill: "none",
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"0",
						"1"
					],
					[
						"l",
						"1",
						"0"
					],
					[
						"l",
						"2",
						"1"
					],
					[
						"l",
						"1",
						"2"
					],
					["c"]
				]
			}
		]
	},
	flowchartsummingjunction: {
		adj: [],
		gd: [
			["idx", "cos wd2 2700000"],
			["idy", "sin hd2 2700000"],
			["il", "+- hc 0 idx"],
			["ir", "+- hc idx 0"],
			["it", "+- vc 0 idy"],
			["ib", "+- vc idy 0"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"vc"
					],
					[
						"a",
						"wd2",
						"hd2",
						"cd2",
						"cd4"
					],
					[
						"a",
						"wd2",
						"hd2",
						"3cd4",
						"cd4"
					],
					[
						"a",
						"wd2",
						"hd2",
						"0",
						"cd4"
					],
					[
						"a",
						"wd2",
						"hd2",
						"cd4",
						"cd4"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"il",
						"it"
					],
					[
						"l",
						"ir",
						"ib"
					],
					[
						"m",
						"ir",
						"it"
					],
					[
						"l",
						"il",
						"ib"
					]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"l",
						"vc"
					],
					[
						"a",
						"wd2",
						"hd2",
						"cd2",
						"cd4"
					],
					[
						"a",
						"wd2",
						"hd2",
						"3cd4",
						"cd4"
					],
					[
						"a",
						"wd2",
						"hd2",
						"0",
						"cd4"
					],
					[
						"a",
						"wd2",
						"hd2",
						"cd4",
						"cd4"
					],
					["c"]
				]
			}
		]
	},
	flowchartterminator: {
		adj: [],
		gd: [
			["il", "*/ w 1018 21600"],
			["ir", "*/ w 20582 21600"],
			["it", "*/ h 3163 21600"],
			["ib", "*/ h 18437 21600"]
		],
		paths: [{
			w: 21600,
			h: 21600,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"3475",
					"0"
				],
				[
					"l",
					"18125",
					"0"
				],
				[
					"a",
					"3475",
					"10800",
					"3cd4",
					"cd2"
				],
				[
					"l",
					"3475",
					"21600"
				],
				[
					"a",
					"3475",
					"10800",
					"cd4",
					"cd2"
				],
				["c"]
			]
		}]
	},
	foldedcorner: {
		adj: [["adj", "val 16667"]],
		gd: [
			["a", "pin 0 adj 50000"],
			["dy2", "*/ ss a 100000"],
			["dy1", "*/ dy2 1 5"],
			["x1", "+- r 0 dy2"],
			["x2", "+- x1 dy1 0"],
			["y2", "+- b 0 dy2"],
			["y1", "+- y2 dy1 0"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"y2"
					],
					[
						"l",
						"x1",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darkenLess",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"x1",
						"b"
					],
					[
						"l",
						"x2",
						"y1"
					],
					[
						"l",
						"r",
						"y2"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"x1",
						"b"
					],
					[
						"l",
						"x2",
						"y1"
					],
					[
						"l",
						"r",
						"y2"
					],
					[
						"l",
						"x1",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					[
						"l",
						"l",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"y2"
					]
				]
			}
		]
	},
	frame: {
		adj: [["adj1", "val 12500"]],
		gd: [
			["a1", "pin 0 adj1 50000"],
			["x1", "*/ ss a1 100000"],
			["x4", "+- r 0 x1"],
			["y4", "+- b 0 x1"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"l",
					"r",
					"t"
				],
				[
					"l",
					"r",
					"b"
				],
				[
					"l",
					"l",
					"b"
				],
				["c"],
				[
					"m",
					"x1",
					"x1"
				],
				[
					"l",
					"x1",
					"y4"
				],
				[
					"l",
					"x4",
					"y4"
				],
				[
					"l",
					"x4",
					"x1"
				],
				["c"]
			]
		}]
	},
	funnel: {
		adj: [],
		gd: [
			["d", "*/ ss 1 20"],
			["rw2", "+- wd2 0 d"],
			["rh2", "+- hd4 0 d"],
			["t1", "cos wd2 480000"],
			["t2", "sin hd4 480000"],
			["da", "at2 t1 t2"],
			["2da", "*/ da 2 1"],
			["stAng1", "+- cd2 0 da"],
			["swAng1", "+- cd2 2da 0"],
			["swAng3", "+- cd2 0 2da"],
			["rw3", "*/ wd2 1 4"],
			["rh3", "*/ hd4 1 4"],
			["ct1", "cos hd4 stAng1"],
			["st1", "sin wd2 stAng1"],
			["m1", "mod ct1 st1 0"],
			["n1", "*/ wd2 hd4 m1"],
			["dx1", "cos n1 stAng1"],
			["dy1", "sin n1 stAng1"],
			["x1", "+- hc dx1 0"],
			["y1", "+- hd4 dy1 0"],
			["ct3", "cos rh3 da"],
			["st3", "sin rw3 da"],
			["m3", "mod ct3 st3 0"],
			["n3", "*/ rw3 rh3 m3"],
			["dx3", "cos n3 da"],
			["dy3", "sin n3 da"],
			["x3", "+- hc dx3 0"],
			["vc3", "+- b 0 rh3"],
			["y2", "+- vc3 dy3 0"],
			["x2", "+- wd2 0 rw2"],
			["cd", "*/ cd2 2 1"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"x1",
					"y1"
				],
				[
					"a",
					"wd2",
					"hd4",
					"stAng1",
					"swAng1"
				],
				[
					"l",
					"x3",
					"y2"
				],
				[
					"a",
					"rw3",
					"rh3",
					"da",
					"swAng3"
				],
				["c"],
				[
					"m",
					"x2",
					"hd4"
				],
				[
					"a",
					"rw2",
					"rh2",
					"cd2",
					"-21600000"
				],
				["c"]
			]
		}]
	},
	gear6: {
		adj: [["adj1", "val 15000"], ["adj2", "val 3526"]],
		gd: [
			["a1", "pin 0 adj1 20000"],
			["a2", "pin 0 adj2 5358"],
			["th", "*/ ss a1 100000"],
			["lFD", "*/ ss a2 100000"],
			["th2", "*/ th 1 2"],
			["l2", "*/ lFD 1 2"],
			["l3", "+- th2 l2 0"],
			["rh", "+- hd2 0 th"],
			["rw", "+- wd2 0 th"],
			["dr", "+- rw 0 rh"],
			["maxr", "?: dr rh rw"],
			["ha", "at2 maxr l3"],
			["aA1", "+- 19800000 0 ha"],
			["aD1", "+- 19800000 ha 0"],
			["ta11", "cos rw aA1"],
			["ta12", "sin rh aA1"],
			["bA1", "at2 ta11 ta12"],
			["cta1", "cos rh bA1"],
			["sta1", "sin rw bA1"],
			["ma1", "mod cta1 sta1 0"],
			["na1", "*/ rw rh ma1"],
			["dxa1", "cos na1 bA1"],
			["dya1", "sin na1 bA1"],
			["xA1", "+- hc dxa1 0"],
			["yA1", "+- vc dya1 0"],
			["td11", "cos rw aD1"],
			["td12", "sin rh aD1"],
			["bD1", "at2 td11 td12"],
			["ctd1", "cos rh bD1"],
			["std1", "sin rw bD1"],
			["md1", "mod ctd1 std1 0"],
			["nd1", "*/ rw rh md1"],
			["dxd1", "cos nd1 bD1"],
			["dyd1", "sin nd1 bD1"],
			["xD1", "+- hc dxd1 0"],
			["yD1", "+- vc dyd1 0"],
			["xAD1", "+- xA1 0 xD1"],
			["yAD1", "+- yA1 0 yD1"],
			["lAD1", "mod xAD1 yAD1 0"],
			["a1", "at2 yAD1 xAD1"],
			["dxF1", "sin lFD a1"],
			["dyF1", "cos lFD a1"],
			["xF1", "+- xD1 dxF1 0"],
			["yF1", "+- yD1 dyF1 0"],
			["xE1", "+- xA1 0 dxF1"],
			["yE1", "+- yA1 0 dyF1"],
			["yC1t", "sin th a1"],
			["xC1t", "cos th a1"],
			["yC1", "+- yF1 yC1t 0"],
			["xC1", "+- xF1 0 xC1t"],
			["yB1", "+- yE1 yC1t 0"],
			["xB1", "+- xE1 0 xC1t"],
			["aD6", "+- 3cd4 ha 0"],
			["td61", "cos rw aD6"],
			["td62", "sin rh aD6"],
			["bD6", "at2 td61 td62"],
			["ctd6", "cos rh bD6"],
			["std6", "sin rw bD6"],
			["md6", "mod ctd6 std6 0"],
			["nd6", "*/ rw rh md6"],
			["dxd6", "cos nd6 bD6"],
			["dyd6", "sin nd6 bD6"],
			["xD6", "+- hc dxd6 0"],
			["yD6", "+- vc dyd6 0"],
			["xA6", "+- hc 0 dxd6"],
			["xF6", "+- xD6 0 lFD"],
			["xE6", "+- xA6 lFD 0"],
			["yC6", "+- yD6 0 th"],
			["swAng1", "+- bA1 0 bD6"],
			["aA2", "+- 1800000 0 ha"],
			["aD2", "+- 1800000 ha 0"],
			["ta21", "cos rw aA2"],
			["ta22", "sin rh aA2"],
			["bA2", "at2 ta21 ta22"],
			["yA2", "+- h 0 yD1"],
			["td21", "cos rw aD2"],
			["td22", "sin rh aD2"],
			["bD2", "at2 td21 td22"],
			["yD2", "+- h 0 yA1"],
			["yC2", "+- h 0 yB1"],
			["yB2", "+- h 0 yC1"],
			["xB2", "val xC1"],
			["swAng2", "+- bA2 0 bD1"],
			["aD3", "+- cd4 ha 0"],
			["td31", "cos rw aD3"],
			["td32", "sin rh aD3"],
			["bD3", "at2 td31 td32"],
			["yD3", "+- h 0 yD6"],
			["yB3", "+- h 0 yC6"],
			["aD4", "+- 9000000 ha 0"],
			["td41", "cos rw aD4"],
			["td42", "sin rh aD4"],
			["bD4", "at2 td41 td42"],
			["xD4", "+- w 0 xD1"],
			["xC4", "+- w 0 xC1"],
			["xB4", "+- w 0 xB1"],
			["aD5", "+- 12600000 ha 0"],
			["td51", "cos rw aD5"],
			["td52", "sin rh aD5"],
			["bD5", "at2 td51 td52"],
			["xD5", "+- w 0 xA1"],
			["xC5", "+- w 0 xB1"],
			["xB5", "+- w 0 xC1"],
			["xCxn1", "+/ xB1 xC1 2"],
			["yCxn1", "+/ yB1 yC1 2"],
			["yCxn2", "+- b 0 yCxn1"],
			["xCxn4", "+/ r 0 xCxn1"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"xA1",
					"yA1"
				],
				[
					"l",
					"xB1",
					"yB1"
				],
				[
					"l",
					"xC1",
					"yC1"
				],
				[
					"l",
					"xD1",
					"yD1"
				],
				[
					"a",
					"rw",
					"rh",
					"bD1",
					"swAng2"
				],
				[
					"l",
					"xC1",
					"yB2"
				],
				[
					"l",
					"xB1",
					"yC2"
				],
				[
					"l",
					"xA1",
					"yD2"
				],
				[
					"a",
					"rw",
					"rh",
					"bD2",
					"swAng1"
				],
				[
					"l",
					"xF6",
					"yB3"
				],
				[
					"l",
					"xE6",
					"yB3"
				],
				[
					"l",
					"xA6",
					"yD3"
				],
				[
					"a",
					"rw",
					"rh",
					"bD3",
					"swAng1"
				],
				[
					"l",
					"xB4",
					"yC2"
				],
				[
					"l",
					"xC4",
					"yB2"
				],
				[
					"l",
					"xD4",
					"yA2"
				],
				[
					"a",
					"rw",
					"rh",
					"bD4",
					"swAng2"
				],
				[
					"l",
					"xB5",
					"yC1"
				],
				[
					"l",
					"xC5",
					"yB1"
				],
				[
					"l",
					"xD5",
					"yA1"
				],
				[
					"a",
					"rw",
					"rh",
					"bD5",
					"swAng1"
				],
				[
					"l",
					"xE6",
					"yC6"
				],
				[
					"l",
					"xF6",
					"yC6"
				],
				[
					"l",
					"xD6",
					"yD6"
				],
				[
					"a",
					"rw",
					"rh",
					"bD6",
					"swAng1"
				],
				["c"]
			]
		}]
	},
	gear9: {
		adj: [["adj1", "val 10000"], ["adj2", "val 1763"]],
		gd: [
			["a1", "pin 0 adj1 20000"],
			["a2", "pin 0 adj2 2679"],
			["th", "*/ ss a1 100000"],
			["lFD", "*/ ss a2 100000"],
			["th2", "*/ th 1 2"],
			["l2", "*/ lFD 1 2"],
			["l3", "+- th2 l2 0"],
			["rh", "+- hd2 0 th"],
			["rw", "+- wd2 0 th"],
			["dr", "+- rw 0 rh"],
			["maxr", "?: dr rh rw"],
			["ha", "at2 maxr l3"],
			["aA1", "+- 18600000 0 ha"],
			["aD1", "+- 18600000 ha 0"],
			["ta11", "cos rw aA1"],
			["ta12", "sin rh aA1"],
			["bA1", "at2 ta11 ta12"],
			["cta1", "cos rh bA1"],
			["sta1", "sin rw bA1"],
			["ma1", "mod cta1 sta1 0"],
			["na1", "*/ rw rh ma1"],
			["dxa1", "cos na1 bA1"],
			["dya1", "sin na1 bA1"],
			["xA1", "+- hc dxa1 0"],
			["yA1", "+- vc dya1 0"],
			["td11", "cos rw aD1"],
			["td12", "sin rh aD1"],
			["bD1", "at2 td11 td12"],
			["ctd1", "cos rh bD1"],
			["std1", "sin rw bD1"],
			["md1", "mod ctd1 std1 0"],
			["nd1", "*/ rw rh md1"],
			["dxd1", "cos nd1 bD1"],
			["dyd1", "sin nd1 bD1"],
			["xD1", "+- hc dxd1 0"],
			["yD1", "+- vc dyd1 0"],
			["xAD1", "+- xA1 0 xD1"],
			["yAD1", "+- yA1 0 yD1"],
			["lAD1", "mod xAD1 yAD1 0"],
			["a1", "at2 yAD1 xAD1"],
			["dxF1", "sin lFD a1"],
			["dyF1", "cos lFD a1"],
			["xF1", "+- xD1 dxF1 0"],
			["yF1", "+- yD1 dyF1 0"],
			["xE1", "+- xA1 0 dxF1"],
			["yE1", "+- yA1 0 dyF1"],
			["yC1t", "sin th a1"],
			["xC1t", "cos th a1"],
			["yC1", "+- yF1 yC1t 0"],
			["xC1", "+- xF1 0 xC1t"],
			["yB1", "+- yE1 yC1t 0"],
			["xB1", "+- xE1 0 xC1t"],
			["aA2", "+- 21000000 0 ha"],
			["aD2", "+- 21000000 ha 0"],
			["ta21", "cos rw aA2"],
			["ta22", "sin rh aA2"],
			["bA2", "at2 ta21 ta22"],
			["cta2", "cos rh bA2"],
			["sta2", "sin rw bA2"],
			["ma2", "mod cta2 sta2 0"],
			["na2", "*/ rw rh ma2"],
			["dxa2", "cos na2 bA2"],
			["dya2", "sin na2 bA2"],
			["xA2", "+- hc dxa2 0"],
			["yA2", "+- vc dya2 0"],
			["td21", "cos rw aD2"],
			["td22", "sin rh aD2"],
			["bD2", "at2 td21 td22"],
			["ctd2", "cos rh bD2"],
			["std2", "sin rw bD2"],
			["md2", "mod ctd2 std2 0"],
			["nd2", "*/ rw rh md2"],
			["dxd2", "cos nd2 bD2"],
			["dyd2", "sin nd2 bD2"],
			["xD2", "+- hc dxd2 0"],
			["yD2", "+- vc dyd2 0"],
			["xAD2", "+- xA2 0 xD2"],
			["yAD2", "+- yA2 0 yD2"],
			["lAD2", "mod xAD2 yAD2 0"],
			["a2", "at2 yAD2 xAD2"],
			["dxF2", "sin lFD a2"],
			["dyF2", "cos lFD a2"],
			["xF2", "+- xD2 dxF2 0"],
			["yF2", "+- yD2 dyF2 0"],
			["xE2", "+- xA2 0 dxF2"],
			["yE2", "+- yA2 0 dyF2"],
			["yC2t", "sin th a2"],
			["xC2t", "cos th a2"],
			["yC2", "+- yF2 yC2t 0"],
			["xC2", "+- xF2 0 xC2t"],
			["yB2", "+- yE2 yC2t 0"],
			["xB2", "+- xE2 0 xC2t"],
			["swAng1", "+- bA2 0 bD1"],
			["aA3", "+- 1800000 0 ha"],
			["aD3", "+- 1800000 ha 0"],
			["ta31", "cos rw aA3"],
			["ta32", "sin rh aA3"],
			["bA3", "at2 ta31 ta32"],
			["cta3", "cos rh bA3"],
			["sta3", "sin rw bA3"],
			["ma3", "mod cta3 sta3 0"],
			["na3", "*/ rw rh ma3"],
			["dxa3", "cos na3 bA3"],
			["dya3", "sin na3 bA3"],
			["xA3", "+- hc dxa3 0"],
			["yA3", "+- vc dya3 0"],
			["td31", "cos rw aD3"],
			["td32", "sin rh aD3"],
			["bD3", "at2 td31 td32"],
			["ctd3", "cos rh bD3"],
			["std3", "sin rw bD3"],
			["md3", "mod ctd3 std3 0"],
			["nd3", "*/ rw rh md3"],
			["dxd3", "cos nd3 bD3"],
			["dyd3", "sin nd3 bD3"],
			["xD3", "+- hc dxd3 0"],
			["yD3", "+- vc dyd3 0"],
			["xAD3", "+- xA3 0 xD3"],
			["yAD3", "+- yA3 0 yD3"],
			["lAD3", "mod xAD3 yAD3 0"],
			["a3", "at2 yAD3 xAD3"],
			["dxF3", "sin lFD a3"],
			["dyF3", "cos lFD a3"],
			["xF3", "+- xD3 dxF3 0"],
			["yF3", "+- yD3 dyF3 0"],
			["xE3", "+- xA3 0 dxF3"],
			["yE3", "+- yA3 0 dyF3"],
			["yC3t", "sin th a3"],
			["xC3t", "cos th a3"],
			["yC3", "+- yF3 yC3t 0"],
			["xC3", "+- xF3 0 xC3t"],
			["yB3", "+- yE3 yC3t 0"],
			["xB3", "+- xE3 0 xC3t"],
			["swAng2", "+- bA3 0 bD2"],
			["aA4", "+- 4200000 0 ha"],
			["aD4", "+- 4200000 ha 0"],
			["ta41", "cos rw aA4"],
			["ta42", "sin rh aA4"],
			["bA4", "at2 ta41 ta42"],
			["cta4", "cos rh bA4"],
			["sta4", "sin rw bA4"],
			["ma4", "mod cta4 sta4 0"],
			["na4", "*/ rw rh ma4"],
			["dxa4", "cos na4 bA4"],
			["dya4", "sin na4 bA4"],
			["xA4", "+- hc dxa4 0"],
			["yA4", "+- vc dya4 0"],
			["td41", "cos rw aD4"],
			["td42", "sin rh aD4"],
			["bD4", "at2 td41 td42"],
			["ctd4", "cos rh bD4"],
			["std4", "sin rw bD4"],
			["md4", "mod ctd4 std4 0"],
			["nd4", "*/ rw rh md4"],
			["dxd4", "cos nd4 bD4"],
			["dyd4", "sin nd4 bD4"],
			["xD4", "+- hc dxd4 0"],
			["yD4", "+- vc dyd4 0"],
			["xAD4", "+- xA4 0 xD4"],
			["yAD4", "+- yA4 0 yD4"],
			["lAD4", "mod xAD4 yAD4 0"],
			["a4", "at2 yAD4 xAD4"],
			["dxF4", "sin lFD a4"],
			["dyF4", "cos lFD a4"],
			["xF4", "+- xD4 dxF4 0"],
			["yF4", "+- yD4 dyF4 0"],
			["xE4", "+- xA4 0 dxF4"],
			["yE4", "+- yA4 0 dyF4"],
			["yC4t", "sin th a4"],
			["xC4t", "cos th a4"],
			["yC4", "+- yF4 yC4t 0"],
			["xC4", "+- xF4 0 xC4t"],
			["yB4", "+- yE4 yC4t 0"],
			["xB4", "+- xE4 0 xC4t"],
			["swAng3", "+- bA4 0 bD3"],
			["aA5", "+- 6600000 0 ha"],
			["aD5", "+- 6600000 ha 0"],
			["ta51", "cos rw aA5"],
			["ta52", "sin rh aA5"],
			["bA5", "at2 ta51 ta52"],
			["td51", "cos rw aD5"],
			["td52", "sin rh aD5"],
			["bD5", "at2 td51 td52"],
			["xD5", "+- w 0 xA4"],
			["xC5", "+- w 0 xB4"],
			["xB5", "+- w 0 xC4"],
			["swAng4", "+- bA5 0 bD4"],
			["aD6", "+- 9000000 ha 0"],
			["td61", "cos rw aD6"],
			["td62", "sin rh aD6"],
			["bD6", "at2 td61 td62"],
			["xD6", "+- w 0 xA3"],
			["xC6", "+- w 0 xB3"],
			["xB6", "+- w 0 xC3"],
			["aD7", "+- 11400000 ha 0"],
			["td71", "cos rw aD7"],
			["td72", "sin rh aD7"],
			["bD7", "at2 td71 td72"],
			["xD7", "+- w 0 xA2"],
			["xC7", "+- w 0 xB2"],
			["xB7", "+- w 0 xC2"],
			["aD8", "+- 13800000 ha 0"],
			["td81", "cos rw aD8"],
			["td82", "sin rh aD8"],
			["bD8", "at2 td81 td82"],
			["xA8", "+- w 0 xD1"],
			["xD8", "+- w 0 xA1"],
			["xC8", "+- w 0 xB1"],
			["xB8", "+- w 0 xC1"],
			["aA9", "+- 3cd4 0 ha"],
			["aD9", "+- 3cd4 ha 0"],
			["td91", "cos rw aD9"],
			["td92", "sin rh aD9"],
			["bD9", "at2 td91 td92"],
			["ctd9", "cos rh bD9"],
			["std9", "sin rw bD9"],
			["md9", "mod ctd9 std9 0"],
			["nd9", "*/ rw rh md9"],
			["dxd9", "cos nd9 bD9"],
			["dyd9", "sin nd9 bD9"],
			["xD9", "+- hc dxd9 0"],
			["yD9", "+- vc dyd9 0"],
			["ta91", "cos rw aA9"],
			["ta92", "sin rh aA9"],
			["bA9", "at2 ta91 ta92"],
			["xA9", "+- hc 0 dxd9"],
			["xF9", "+- xD9 0 lFD"],
			["xE9", "+- xA9 lFD 0"],
			["yC9", "+- yD9 0 th"],
			["swAng5", "+- bA9 0 bD8"],
			["xCxn1", "+/ xB1 xC1 2"],
			["yCxn1", "+/ yB1 yC1 2"],
			["xCxn2", "+/ xB2 xC2 2"],
			["yCxn2", "+/ yB2 yC2 2"],
			["xCxn3", "+/ xB3 xC3 2"],
			["yCxn3", "+/ yB3 yC3 2"],
			["xCxn4", "+/ xB4 xC4 2"],
			["yCxn4", "+/ yB4 yC4 2"],
			["xCxn5", "+/ r 0 xCxn4"],
			["xCxn6", "+/ r 0 xCxn3"],
			["xCxn7", "+/ r 0 xCxn2"],
			["xCxn8", "+/ r 0 xCxn1"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"xA1",
					"yA1"
				],
				[
					"l",
					"xB1",
					"yB1"
				],
				[
					"l",
					"xC1",
					"yC1"
				],
				[
					"l",
					"xD1",
					"yD1"
				],
				[
					"a",
					"rw",
					"rh",
					"bD1",
					"swAng1"
				],
				[
					"l",
					"xB2",
					"yB2"
				],
				[
					"l",
					"xC2",
					"yC2"
				],
				[
					"l",
					"xD2",
					"yD2"
				],
				[
					"a",
					"rw",
					"rh",
					"bD2",
					"swAng2"
				],
				[
					"l",
					"xB3",
					"yB3"
				],
				[
					"l",
					"xC3",
					"yC3"
				],
				[
					"l",
					"xD3",
					"yD3"
				],
				[
					"a",
					"rw",
					"rh",
					"bD3",
					"swAng3"
				],
				[
					"l",
					"xB4",
					"yB4"
				],
				[
					"l",
					"xC4",
					"yC4"
				],
				[
					"l",
					"xD4",
					"yD4"
				],
				[
					"a",
					"rw",
					"rh",
					"bD4",
					"swAng4"
				],
				[
					"l",
					"xB5",
					"yC4"
				],
				[
					"l",
					"xC5",
					"yB4"
				],
				[
					"l",
					"xD5",
					"yA4"
				],
				[
					"a",
					"rw",
					"rh",
					"bD5",
					"swAng3"
				],
				[
					"l",
					"xB6",
					"yC3"
				],
				[
					"l",
					"xC6",
					"yB3"
				],
				[
					"l",
					"xD6",
					"yA3"
				],
				[
					"a",
					"rw",
					"rh",
					"bD6",
					"swAng2"
				],
				[
					"l",
					"xB7",
					"yC2"
				],
				[
					"l",
					"xC7",
					"yB2"
				],
				[
					"l",
					"xD7",
					"yA2"
				],
				[
					"a",
					"rw",
					"rh",
					"bD7",
					"swAng1"
				],
				[
					"l",
					"xB8",
					"yC1"
				],
				[
					"l",
					"xC8",
					"yB1"
				],
				[
					"l",
					"xD8",
					"yA1"
				],
				[
					"a",
					"rw",
					"rh",
					"bD8",
					"swAng5"
				],
				[
					"l",
					"xE9",
					"yC9"
				],
				[
					"l",
					"xF9",
					"yC9"
				],
				[
					"l",
					"xD9",
					"yD9"
				],
				[
					"a",
					"rw",
					"rh",
					"bD9",
					"swAng5"
				],
				["c"]
			]
		}]
	},
	halfframe: {
		adj: [["adj1", "val 33333"], ["adj2", "val 33333"]],
		gd: [
			["maxAdj2", "*/ 100000 w ss"],
			["a2", "pin 0 adj2 maxAdj2"],
			["x1", "*/ ss a2 100000"],
			["g1", "*/ h x1 w"],
			["g2", "+- h 0 g1"],
			["maxAdj1", "*/ 100000 g2 ss"],
			["a1", "pin 0 adj1 maxAdj1"],
			["y1", "*/ ss a1 100000"],
			["dx2", "*/ y1 w h"],
			["x2", "+- r 0 dx2"],
			["dy2", "*/ x1 h w"],
			["y2", "+- b 0 dy2"],
			["cx1", "*/ x1 1 2"],
			["cy1", "+/ y2 b 2"],
			["cx2", "+/ x2 r 2"],
			["cy2", "*/ y1 1 2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"l",
					"r",
					"t"
				],
				[
					"l",
					"x2",
					"y1"
				],
				[
					"l",
					"x1",
					"y1"
				],
				[
					"l",
					"x1",
					"y2"
				],
				[
					"l",
					"l",
					"b"
				],
				["c"]
			]
		}]
	},
	heart: {
		adj: [],
		gd: [
			["dx1", "*/ w 49 48"],
			["dx2", "*/ w 10 48"],
			["x1", "+- hc 0 dx1"],
			["x2", "+- hc 0 dx2"],
			["x3", "+- hc dx2 0"],
			["x4", "+- hc dx1 0"],
			["y1", "+- t 0 hd3"],
			["il", "*/ w 1 6"],
			["ir", "*/ w 5 6"],
			["ib", "*/ h 2 3"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"hc",
					"hd4"
				],
				[
					"C",
					"x3",
					"y1",
					"x4",
					"hd4",
					"hc",
					"b"
				],
				[
					"C",
					"x1",
					"hd4",
					"x2",
					"y1",
					"hc",
					"hd4"
				],
				["c"]
			]
		}]
	},
	heptagon: {
		adj: [["hf", "val 102572"], ["vf", "val 105210"]],
		gd: [
			["swd2", "*/ wd2 hf 100000"],
			["shd2", "*/ hd2 vf 100000"],
			["svc", "*/ vc  vf 100000"],
			["dx1", "*/ swd2 97493 100000"],
			["dx2", "*/ swd2 78183 100000"],
			["dx3", "*/ swd2 43388 100000"],
			["dy1", "*/ shd2 62349 100000"],
			["dy2", "*/ shd2 22252 100000"],
			["dy3", "*/ shd2 90097 100000"],
			["x1", "+- hc 0 dx1"],
			["x2", "+- hc 0 dx2"],
			["x3", "+- hc 0 dx3"],
			["x4", "+- hc dx3 0"],
			["x5", "+- hc dx2 0"],
			["x6", "+- hc dx1 0"],
			["y1", "+- svc 0 dy1"],
			["y2", "+- svc dy2 0"],
			["y3", "+- svc dy3 0"],
			["ib", "+- b 0 y1"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"x1",
					"y2"
				],
				[
					"l",
					"x2",
					"y1"
				],
				[
					"l",
					"hc",
					"t"
				],
				[
					"l",
					"x5",
					"y1"
				],
				[
					"l",
					"x6",
					"y2"
				],
				[
					"l",
					"x4",
					"y3"
				],
				[
					"l",
					"x3",
					"y3"
				],
				["c"]
			]
		}]
	},
	hexagon: {
		adj: [["adj", "val 25000"], ["vf", "val 115470"]],
		gd: [
			["maxAdj", "*/ 50000 w ss"],
			["a", "pin 0 adj maxAdj"],
			["shd2", "*/ hd2 vf 100000"],
			["x1", "*/ ss a 100000"],
			["x2", "+- r 0 x1"],
			["dy1", "sin shd2 3600000"],
			["y1", "+- vc 0 dy1"],
			["y2", "+- vc dy1 0"],
			["q1", "*/ maxAdj -1 2"],
			["q2", "+- a q1 0"],
			["q3", "?: q2 4 2"],
			["q4", "?: q2 3 2"],
			["q5", "?: q2 q1 0"],
			["q6", "+/ a q5 q1"],
			["q7", "*/ q6 q4 -1"],
			["q8", "+- q3 q7 0"],
			["il", "*/ w q8 24"],
			["it", "*/ h q8 24"],
			["ir", "+- r 0 il"],
			["ib", "+- b 0 it"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"vc"
				],
				[
					"l",
					"x1",
					"y1"
				],
				[
					"l",
					"x2",
					"y1"
				],
				[
					"l",
					"r",
					"vc"
				],
				[
					"l",
					"x2",
					"y2"
				],
				[
					"l",
					"x1",
					"y2"
				],
				["c"]
			]
		}]
	},
	homeplate: {
		adj: [["adj", "val 50000"]],
		gd: [
			["maxAdj", "*/ 100000 w ss"],
			["a", "pin 0 adj maxAdj"],
			["dx1", "*/ ss a 100000"],
			["x1", "+- r 0 dx1"],
			["ir", "+/ x1 r 2"],
			["x2", "*/ x1 1 2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"l",
					"x1",
					"t"
				],
				[
					"l",
					"r",
					"vc"
				],
				[
					"l",
					"x1",
					"b"
				],
				[
					"l",
					"l",
					"b"
				],
				["c"]
			]
		}]
	},
	horizontalscroll: {
		adj: [["adj", "val 12500"]],
		gd: [
			["a", "pin 0 adj 25000"],
			["ch", "*/ ss a 100000"],
			["ch2", "*/ ch 1 2"],
			["ch4", "*/ ch 1 4"],
			["y3", "+- ch ch2 0"],
			["y4", "+- ch ch 0"],
			["y6", "+- b 0 ch"],
			["y7", "+- b 0 ch2"],
			["y5", "+- y6 0 ch2"],
			["x3", "+- r 0 ch"],
			["x4", "+- r 0 ch2"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"r",
						"ch2"
					],
					[
						"a",
						"ch2",
						"ch2",
						"0",
						"cd4"
					],
					[
						"l",
						"x4",
						"ch2"
					],
					[
						"a",
						"ch4",
						"ch4",
						"0",
						"cd2"
					],
					[
						"l",
						"x3",
						"ch"
					],
					[
						"l",
						"ch2",
						"ch"
					],
					[
						"a",
						"ch2",
						"ch2",
						"3cd4",
						"-5400000"
					],
					[
						"l",
						"l",
						"y7"
					],
					[
						"a",
						"ch2",
						"ch2",
						"cd2",
						"-10800000"
					],
					[
						"l",
						"ch",
						"y6"
					],
					[
						"l",
						"x4",
						"y6"
					],
					[
						"a",
						"ch2",
						"ch2",
						"cd4",
						"-5400000"
					],
					["c"],
					[
						"m",
						"ch2",
						"y4"
					],
					[
						"a",
						"ch2",
						"ch2",
						"cd4",
						"-5400000"
					],
					[
						"a",
						"ch4",
						"ch4",
						"0",
						"-10800000"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darkenLess",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"ch2",
						"y4"
					],
					[
						"a",
						"ch2",
						"ch2",
						"cd4",
						"-5400000"
					],
					[
						"a",
						"ch4",
						"ch4",
						"0",
						"-10800000"
					],
					["c"],
					[
						"m",
						"x4",
						"ch"
					],
					[
						"a",
						"ch2",
						"ch2",
						"cd4",
						"-16200000"
					],
					[
						"a",
						"ch4",
						"ch4",
						"cd2",
						"-10800000"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"y3"
					],
					[
						"a",
						"ch2",
						"ch2",
						"cd2",
						"cd4"
					],
					[
						"l",
						"x3",
						"ch"
					],
					[
						"l",
						"x3",
						"ch2"
					],
					[
						"a",
						"ch2",
						"ch2",
						"cd2",
						"cd2"
					],
					[
						"l",
						"r",
						"y5"
					],
					[
						"a",
						"ch2",
						"ch2",
						"0",
						"cd4"
					],
					[
						"l",
						"ch",
						"y6"
					],
					[
						"l",
						"ch",
						"y7"
					],
					[
						"a",
						"ch2",
						"ch2",
						"0",
						"cd2"
					],
					["c"],
					[
						"m",
						"x3",
						"ch"
					],
					[
						"l",
						"x4",
						"ch"
					],
					[
						"a",
						"ch2",
						"ch2",
						"cd4",
						"-5400000"
					],
					[
						"m",
						"x4",
						"ch"
					],
					[
						"l",
						"x4",
						"ch2"
					],
					[
						"a",
						"ch4",
						"ch4",
						"0",
						"cd2"
					],
					[
						"m",
						"ch2",
						"y4"
					],
					[
						"l",
						"ch2",
						"y3"
					],
					[
						"a",
						"ch4",
						"ch4",
						"cd2",
						"cd2"
					],
					[
						"a",
						"ch2",
						"ch2",
						"0",
						"cd2"
					],
					[
						"m",
						"ch",
						"y3"
					],
					[
						"l",
						"ch",
						"y6"
					]
				]
			}
		]
	},
	irregularseal1: {
		adj: [],
		gd: [
			["x5", "*/ w 4627 21600"],
			["x12", "*/ w 8485 21600"],
			["x21", "*/ w 16702 21600"],
			["x24", "*/ w 14522 21600"],
			["y3", "*/ h 6320 21600"],
			["y6", "*/ h 8615 21600"],
			["y9", "*/ h 13937 21600"],
			["y18", "*/ h 13290 21600"]
		],
		paths: [{
			w: 21600,
			h: 21600,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"10800",
					"5800"
				],
				[
					"l",
					"14522",
					"0"
				],
				[
					"l",
					"14155",
					"5325"
				],
				[
					"l",
					"18380",
					"4457"
				],
				[
					"l",
					"16702",
					"7315"
				],
				[
					"l",
					"21097",
					"8137"
				],
				[
					"l",
					"17607",
					"10475"
				],
				[
					"l",
					"21600",
					"13290"
				],
				[
					"l",
					"16837",
					"12942"
				],
				[
					"l",
					"18145",
					"18095"
				],
				[
					"l",
					"14020",
					"14457"
				],
				[
					"l",
					"13247",
					"19737"
				],
				[
					"l",
					"10532",
					"14935"
				],
				[
					"l",
					"8485",
					"21600"
				],
				[
					"l",
					"7715",
					"15627"
				],
				[
					"l",
					"4762",
					"17617"
				],
				[
					"l",
					"5667",
					"13937"
				],
				[
					"l",
					"135",
					"14587"
				],
				[
					"l",
					"3722",
					"11775"
				],
				[
					"l",
					"0",
					"8615"
				],
				[
					"l",
					"4627",
					"7617"
				],
				[
					"l",
					"370",
					"2295"
				],
				[
					"l",
					"7312",
					"6320"
				],
				[
					"l",
					"8352",
					"2295"
				],
				["c"]
			]
		}]
	},
	irregularseal2: {
		adj: [],
		gd: [
			["x2", "*/ w 9722 21600"],
			["x5", "*/ w 5372 21600"],
			["x16", "*/ w 11612 21600"],
			["x19", "*/ w 14640 21600"],
			["y2", "*/ h 1887 21600"],
			["y3", "*/ h 6382 21600"],
			["y8", "*/ h 12877 21600"],
			["y14", "*/ h 19712 21600"],
			["y16", "*/ h 18842 21600"],
			["y17", "*/ h 15935 21600"],
			["y24", "*/ h 6645 21600"]
		],
		paths: [{
			w: 21600,
			h: 21600,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"11462",
					"4342"
				],
				[
					"l",
					"14790",
					"0"
				],
				[
					"l",
					"14525",
					"5777"
				],
				[
					"l",
					"18007",
					"3172"
				],
				[
					"l",
					"16380",
					"6532"
				],
				[
					"l",
					"21600",
					"6645"
				],
				[
					"l",
					"16985",
					"9402"
				],
				[
					"l",
					"18270",
					"11290"
				],
				[
					"l",
					"16380",
					"12310"
				],
				[
					"l",
					"18877",
					"15632"
				],
				[
					"l",
					"14640",
					"14350"
				],
				[
					"l",
					"14942",
					"17370"
				],
				[
					"l",
					"12180",
					"15935"
				],
				[
					"l",
					"11612",
					"18842"
				],
				[
					"l",
					"9872",
					"17370"
				],
				[
					"l",
					"8700",
					"19712"
				],
				[
					"l",
					"7527",
					"18125"
				],
				[
					"l",
					"4917",
					"21600"
				],
				[
					"l",
					"4805",
					"18240"
				],
				[
					"l",
					"1285",
					"17825"
				],
				[
					"l",
					"3330",
					"15370"
				],
				[
					"l",
					"0",
					"12877"
				],
				[
					"l",
					"3935",
					"11592"
				],
				[
					"l",
					"1172",
					"8270"
				],
				[
					"l",
					"5372",
					"7817"
				],
				[
					"l",
					"4502",
					"3625"
				],
				[
					"l",
					"8550",
					"6382"
				],
				[
					"l",
					"9722",
					"1887"
				],
				["c"]
			]
		}]
	},
	leftarrow: {
		adj: [["adj1", "val 50000"], ["adj2", "val 50000"]],
		gd: [
			["maxAdj2", "*/ 100000 w ss"],
			["a1", "pin 0 adj1 100000"],
			["a2", "pin 0 adj2 maxAdj2"],
			["dx2", "*/ ss a2 100000"],
			["x2", "+- l dx2 0"],
			["dy1", "*/ h a1 200000"],
			["y1", "+- vc 0 dy1"],
			["y2", "+- vc dy1 0"],
			["dx1", "*/ y1 dx2 hd2"],
			["x1", "+- x2  0 dx1"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"vc"
				],
				[
					"l",
					"x2",
					"t"
				],
				[
					"l",
					"x2",
					"y1"
				],
				[
					"l",
					"r",
					"y1"
				],
				[
					"l",
					"r",
					"y2"
				],
				[
					"l",
					"x2",
					"y2"
				],
				[
					"l",
					"x2",
					"b"
				],
				["c"]
			]
		}]
	},
	leftarrowcallout: {
		adj: [
			["adj1", "val 25000"],
			["adj2", "val 25000"],
			["adj3", "val 25000"],
			["adj4", "val 64977"]
		],
		gd: [
			["maxAdj2", "*/ 50000 h ss"],
			["a2", "pin 0 adj2 maxAdj2"],
			["maxAdj1", "*/ a2 2 1"],
			["a1", "pin 0 adj1 maxAdj1"],
			["maxAdj3", "*/ 100000 w ss"],
			["a3", "pin 0 adj3 maxAdj3"],
			["q2", "*/ a3 ss w"],
			["maxAdj4", "+- 100000 0 q2"],
			["a4", "pin 0 adj4 maxAdj4"],
			["dy1", "*/ ss a2 100000"],
			["dy2", "*/ ss a1 200000"],
			["y1", "+- vc 0 dy1"],
			["y2", "+- vc 0 dy2"],
			["y3", "+- vc dy2 0"],
			["y4", "+- vc dy1 0"],
			["x1", "*/ ss a3 100000"],
			["dx2", "*/ w a4 100000"],
			["x2", "+- r 0 dx2"],
			["x3", "+/ x2 r 2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"vc"
				],
				[
					"l",
					"x1",
					"y1"
				],
				[
					"l",
					"x1",
					"y2"
				],
				[
					"l",
					"x2",
					"y2"
				],
				[
					"l",
					"x2",
					"t"
				],
				[
					"l",
					"r",
					"t"
				],
				[
					"l",
					"r",
					"b"
				],
				[
					"l",
					"x2",
					"b"
				],
				[
					"l",
					"x2",
					"y3"
				],
				[
					"l",
					"x1",
					"y3"
				],
				[
					"l",
					"x1",
					"y4"
				],
				["c"]
			]
		}]
	},
	leftbrace: {
		adj: [["adj1", "val 8333"], ["adj2", "val 50000"]],
		gd: [
			["a2", "pin 0 adj2 100000"],
			["q1", "+- 100000 0 a2"],
			["q2", "min q1 a2"],
			["q3", "*/ q2 1 2"],
			["maxAdj1", "*/ q3 h ss"],
			["a1", "pin 0 adj1 maxAdj1"],
			["y1", "*/ ss a1 100000"],
			["y3", "*/ h a2 100000"],
			["y4", "+- y3 y1 0"],
			["dx1", "cos wd2 2700000"],
			["dy1", "sin y1 2700000"],
			["il", "+- r 0 dx1"],
			["it", "+- y1 0 dy1"],
			["ib", "+- b dy1 y1"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !1,
			extrusionOk: !1,
			cmds: [
				[
					"m",
					"r",
					"b"
				],
				[
					"a",
					"wd2",
					"y1",
					"cd4",
					"cd4"
				],
				[
					"l",
					"hc",
					"y4"
				],
				[
					"a",
					"wd2",
					"y1",
					"0",
					"-5400000"
				],
				[
					"a",
					"wd2",
					"y1",
					"cd4",
					"-5400000"
				],
				[
					"l",
					"hc",
					"y1"
				],
				[
					"a",
					"wd2",
					"y1",
					"cd2",
					"cd4"
				],
				["c"]
			]
		}, {
			w: null,
			h: null,
			fill: "none",
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"r",
					"b"
				],
				[
					"a",
					"wd2",
					"y1",
					"cd4",
					"cd4"
				],
				[
					"l",
					"hc",
					"y4"
				],
				[
					"a",
					"wd2",
					"y1",
					"0",
					"-5400000"
				],
				[
					"a",
					"wd2",
					"y1",
					"cd4",
					"-5400000"
				],
				[
					"l",
					"hc",
					"y1"
				],
				[
					"a",
					"wd2",
					"y1",
					"cd2",
					"cd4"
				]
			]
		}]
	},
	leftbracket: {
		adj: [["adj", "val 8333"]],
		gd: [
			["maxAdj", "*/ 50000 h ss"],
			["a", "pin 0 adj maxAdj"],
			["y1", "*/ ss a 100000"],
			["y2", "+- b 0 y1"],
			["dx1", "cos w 2700000"],
			["dy1", "sin y1 2700000"],
			["il", "+- r 0 dx1"],
			["it", "+- y1 0 dy1"],
			["ib", "+- b dy1 y1"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !1,
			extrusionOk: !1,
			cmds: [
				[
					"m",
					"r",
					"b"
				],
				[
					"a",
					"w",
					"y1",
					"cd4",
					"cd4"
				],
				[
					"l",
					"l",
					"y1"
				],
				[
					"a",
					"w",
					"y1",
					"cd2",
					"cd4"
				],
				["c"]
			]
		}, {
			w: null,
			h: null,
			fill: "none",
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"r",
					"b"
				],
				[
					"a",
					"w",
					"y1",
					"cd4",
					"cd4"
				],
				[
					"l",
					"l",
					"y1"
				],
				[
					"a",
					"w",
					"y1",
					"cd2",
					"cd4"
				]
			]
		}]
	},
	leftcirculararrow: {
		adj: [
			["adj1", "val 12500"],
			["adj2", "val -1142319"],
			["adj3", "val 1142319"],
			["adj4", "val 10800000"],
			["adj5", "val 12500"]
		],
		gd: [
			["a5", "pin 0 adj5 25000"],
			["maxAdj1", "*/ a5 2 1"],
			["a1", "pin 0 adj1 maxAdj1"],
			["enAng", "pin 1 adj3 21599999"],
			["stAng", "pin 0 adj4 21599999"],
			["th", "*/ ss a1 100000"],
			["thh", "*/ ss a5 100000"],
			["th2", "*/ th 1 2"],
			["rw1", "+- wd2 th2 thh"],
			["rh1", "+- hd2 th2 thh"],
			["rw2", "+- rw1 0 th"],
			["rh2", "+- rh1 0 th"],
			["rw3", "+- rw2 th2 0"],
			["rh3", "+- rh2 th2 0"],
			["wtH", "sin rw3 enAng"],
			["htH", "cos rh3 enAng"],
			["dxH", "cat2 rw3 htH wtH"],
			["dyH", "sat2 rh3 htH wtH"],
			["xH", "+- hc dxH 0"],
			["yH", "+- vc dyH 0"],
			["rI", "min rw2 rh2"],
			["u1", "*/ dxH dxH 1"],
			["u2", "*/ dyH dyH 1"],
			["u3", "*/ rI rI 1"],
			["u4", "+- u1 0 u3"],
			["u5", "+- u2 0 u3"],
			["u6", "*/ u4 u5 u1"],
			["u7", "*/ u6 1 u2"],
			["u8", "+- 1 0 u7"],
			["u9", "sqrt u8"],
			["u10", "*/ u4 1 dxH"],
			["u11", "*/ u10 1 dyH"],
			["u12", "+/ 1 u9 u11"],
			["u13", "at2 1 u12"],
			["u14", "+- u13 21600000 0"],
			["u15", "?: u13 u13 u14"],
			["u16", "+- u15 0 enAng"],
			["u17", "+- u16 21600000 0"],
			["u18", "?: u16 u16 u17"],
			["u19", "+- u18 0 cd2"],
			["u20", "+- u18 0 21600000"],
			["u21", "?: u19 u20 u18"],
			["u22", "abs u21"],
			["minAng", "*/ u22 -1 1"],
			["u23", "abs adj2"],
			["a2", "*/ u23 -1 1"],
			["aAng", "pin minAng a2 0"],
			["ptAng", "+- enAng aAng 0"],
			["wtA", "sin rw3 ptAng"],
			["htA", "cos rh3 ptAng"],
			["dxA", "cat2 rw3 htA wtA"],
			["dyA", "sat2 rh3 htA wtA"],
			["xA", "+- hc dxA 0"],
			["yA", "+- vc dyA 0"],
			["wtE", "sin rw1 stAng"],
			["htE", "cos rh1 stAng"],
			["dxE", "cat2 rw1 htE wtE"],
			["dyE", "sat2 rh1 htE wtE"],
			["xE", "+- hc dxE 0"],
			["yE", "+- vc dyE 0"],
			["wtD", "sin rw2 stAng"],
			["htD", "cos rh2 stAng"],
			["dxD", "cat2 rw2 htD wtD"],
			["dyD", "sat2 rh2 htD wtD"],
			["xD", "+- hc dxD 0"],
			["yD", "+- vc dyD 0"],
			["dxG", "cos thh ptAng"],
			["dyG", "sin thh ptAng"],
			["xG", "+- xH dxG 0"],
			["yG", "+- yH dyG 0"],
			["dxB", "cos thh ptAng"],
			["dyB", "sin thh ptAng"],
			["xB", "+- xH 0 dxB 0"],
			["yB", "+- yH 0 dyB 0"],
			["sx1", "+- xB 0 hc"],
			["sy1", "+- yB 0 vc"],
			["sx2", "+- xG 0 hc"],
			["sy2", "+- yG 0 vc"],
			["rO", "min rw1 rh1"],
			["x1O", "*/ sx1 rO rw1"],
			["y1O", "*/ sy1 rO rh1"],
			["x2O", "*/ sx2 rO rw1"],
			["y2O", "*/ sy2 rO rh1"],
			["dxO", "+- x2O 0 x1O"],
			["dyO", "+- y2O 0 y1O"],
			["dO", "mod dxO dyO 0"],
			["q1", "*/ x1O y2O 1"],
			["q2", "*/ x2O y1O 1"],
			["DO", "+- q1 0 q2"],
			["q3", "*/ rO rO 1"],
			["q4", "*/ dO dO 1"],
			["q5", "*/ q3 q4 1"],
			["q6", "*/ DO DO 1"],
			["q7", "+- q5 0 q6"],
			["q8", "max q7 0"],
			["sdelO", "sqrt q8"],
			["ndyO", "*/ dyO -1 1"],
			["sdyO", "?: ndyO -1 1"],
			["q9", "*/ sdyO dxO 1"],
			["q10", "*/ q9 sdelO 1"],
			["q11", "*/ DO dyO 1"],
			["dxF1", "+/ q11 q10 q4"],
			["q12", "+- q11 0 q10"],
			["dxF2", "*/ q12 1 q4"],
			["adyO", "abs dyO"],
			["q13", "*/ adyO sdelO 1"],
			["q14", "*/ DO dxO -1"],
			["dyF1", "+/ q14 q13 q4"],
			["q15", "+- q14 0 q13"],
			["dyF2", "*/ q15 1 q4"],
			["q16", "+- x2O 0 dxF1"],
			["q17", "+- x2O 0 dxF2"],
			["q18", "+- y2O 0 dyF1"],
			["q19", "+- y2O 0 dyF2"],
			["q20", "mod q16 q18 0"],
			["q21", "mod q17 q19 0"],
			["q22", "+- q21 0 q20"],
			["dxF", "?: q22 dxF1 dxF2"],
			["dyF", "?: q22 dyF1 dyF2"],
			["sdxF", "*/ dxF rw1 rO"],
			["sdyF", "*/ dyF rh1 rO"],
			["xF", "+- hc sdxF 0"],
			["yF", "+- vc sdyF 0"],
			["x1I", "*/ sx1 rI rw2"],
			["y1I", "*/ sy1 rI rh2"],
			["x2I", "*/ sx2 rI rw2"],
			["y2I", "*/ sy2 rI rh2"],
			["dxI", "+- x2I 0 x1I"],
			["dyI", "+- y2I 0 y1I"],
			["dI", "mod dxI dyI 0"],
			["v1", "*/ x1I y2I 1"],
			["v2", "*/ x2I y1I 1"],
			["DI", "+- v1 0 v2"],
			["v3", "*/ rI rI 1"],
			["v4", "*/ dI dI 1"],
			["v5", "*/ v3 v4 1"],
			["v6", "*/ DI DI 1"],
			["v7", "+- v5 0 v6"],
			["v8", "max v7 0"],
			["sdelI", "sqrt v8"],
			["v9", "*/ sdyO dxI 1"],
			["v10", "*/ v9 sdelI 1"],
			["v11", "*/ DI dyI 1"],
			["dxC1", "+/ v11 v10 v4"],
			["v12", "+- v11 0 v10"],
			["dxC2", "*/ v12 1 v4"],
			["adyI", "abs dyI"],
			["v13", "*/ adyI sdelI 1"],
			["v14", "*/ DI dxI -1"],
			["dyC1", "+/ v14 v13 v4"],
			["v15", "+- v14 0 v13"],
			["dyC2", "*/ v15 1 v4"],
			["v16", "+- x1I 0 dxC1"],
			["v17", "+- x1I 0 dxC2"],
			["v18", "+- y1I 0 dyC1"],
			["v19", "+- y1I 0 dyC2"],
			["v20", "mod v16 v18 0"],
			["v21", "mod v17 v19 0"],
			["v22", "+- v21 0 v20"],
			["dxC", "?: v22 dxC1 dxC2"],
			["dyC", "?: v22 dyC1 dyC2"],
			["sdxC", "*/ dxC rw2 rI"],
			["sdyC", "*/ dyC rh2 rI"],
			["xC", "+- hc sdxC 0"],
			["yC", "+- vc sdyC 0"],
			["ist0", "at2 sdxC sdyC"],
			["ist1", "+- ist0 21600000 0"],
			["istAng0", "?: ist0 ist0 ist1"],
			["isw1", "+- stAng 0 istAng0"],
			["isw2", "+- isw1 21600000 0"],
			["iswAng0", "?: isw1 isw1 isw2"],
			["istAng", "+- istAng0 iswAng0 0"],
			["iswAng", "+- 0 0 iswAng0"],
			["p1", "+- xF 0 xC"],
			["p2", "+- yF 0 yC"],
			["p3", "mod p1 p2 0"],
			["p4", "*/ p3 1 2"],
			["p5", "+- p4 0 thh"],
			["xGp", "?: p5 xF xG"],
			["yGp", "?: p5 yF yG"],
			["xBp", "?: p5 xC xB"],
			["yBp", "?: p5 yC yB"],
			["en0", "at2 sdxF sdyF"],
			["en1", "+- en0 21600000 0"],
			["en2", "?: en0 en0 en1"],
			["sw0", "+- en2 0 stAng"],
			["sw1", "+- sw0 0 21600000"],
			["swAng", "?: sw0 sw1 sw0"],
			["stAng0", "+- stAng swAng 0"],
			["swAng0", "+- 0 0 swAng"],
			["wtI", "sin rw3 stAng"],
			["htI", "cos rh3 stAng"],
			["dxI", "cat2 rw3 htI wtI"],
			["dyI", "sat2 rh3 htI wtI"],
			["xI", "+- hc dxI 0"],
			["yI", "+- vc dyI 0"],
			["aI", "+- stAng cd4 0"],
			["aA", "+- ptAng 0 cd4"],
			["aB", "+- ptAng cd2 0"],
			["idx", "cos rw1 2700000"],
			["idy", "sin rh1 2700000"],
			["il", "+- hc 0 idx"],
			["ir", "+- hc idx 0"],
			["it", "+- vc 0 idy"],
			["ib", "+- vc idy 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"xE",
					"yE"
				],
				[
					"l",
					"xD",
					"yD"
				],
				[
					"a",
					"rw2",
					"rh2",
					"istAng",
					"iswAng"
				],
				[
					"l",
					"xBp",
					"yBp"
				],
				[
					"l",
					"xA",
					"yA"
				],
				[
					"l",
					"xGp",
					"yGp"
				],
				[
					"l",
					"xF",
					"yF"
				],
				[
					"a",
					"rw1",
					"rh1",
					"stAng0",
					"swAng0"
				],
				["c"]
			]
		}]
	},
	leftrightarrow: {
		adj: [["adj1", "val 50000"], ["adj2", "val 50000"]],
		gd: [
			["maxAdj2", "*/ 50000 w ss"],
			["a1", "pin 0 adj1 100000"],
			["a2", "pin 0 adj2 maxAdj2"],
			["x2", "*/ ss a2 100000"],
			["x3", "+- r 0 x2"],
			["dy", "*/ h a1 200000"],
			["y1", "+- vc 0 dy"],
			["y2", "+- vc dy 0"],
			["dx1", "*/ y1 x2 hd2"],
			["x1", "+- x2 0 dx1"],
			["x4", "+- x3 dx1 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"vc"
				],
				[
					"l",
					"x2",
					"t"
				],
				[
					"l",
					"x2",
					"y1"
				],
				[
					"l",
					"x3",
					"y1"
				],
				[
					"l",
					"x3",
					"t"
				],
				[
					"l",
					"r",
					"vc"
				],
				[
					"l",
					"x3",
					"b"
				],
				[
					"l",
					"x3",
					"y2"
				],
				[
					"l",
					"x2",
					"y2"
				],
				[
					"l",
					"x2",
					"b"
				],
				["c"]
			]
		}]
	},
	leftrightarrowcallout: {
		adj: [
			["adj1", "val 25000"],
			["adj2", "val 25000"],
			["adj3", "val 25000"],
			["adj4", "val 48123"]
		],
		gd: [
			["maxAdj2", "*/ 50000 h ss"],
			["a2", "pin 0 adj2 maxAdj2"],
			["maxAdj1", "*/ a2 2 1"],
			["a1", "pin 0 adj1 maxAdj1"],
			["maxAdj3", "*/ 50000 w ss"],
			["a3", "pin 0 adj3 maxAdj3"],
			["q2", "*/ a3 ss wd2"],
			["maxAdj4", "+- 100000 0 q2"],
			["a4", "pin 0 adj4 maxAdj4"],
			["dy1", "*/ ss a2 100000"],
			["dy2", "*/ ss a1 200000"],
			["y1", "+- vc 0 dy1"],
			["y2", "+- vc 0 dy2"],
			["y3", "+- vc dy2 0"],
			["y4", "+- vc dy1 0"],
			["x1", "*/ ss a3 100000"],
			["x4", "+- r 0 x1"],
			["dx2", "*/ w a4 200000"],
			["x2", "+- hc 0 dx2"],
			["x3", "+- hc dx2 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"vc"
				],
				[
					"l",
					"x1",
					"y1"
				],
				[
					"l",
					"x1",
					"y2"
				],
				[
					"l",
					"x2",
					"y2"
				],
				[
					"l",
					"x2",
					"t"
				],
				[
					"l",
					"x3",
					"t"
				],
				[
					"l",
					"x3",
					"y2"
				],
				[
					"l",
					"x4",
					"y2"
				],
				[
					"l",
					"x4",
					"y1"
				],
				[
					"l",
					"r",
					"vc"
				],
				[
					"l",
					"x4",
					"y4"
				],
				[
					"l",
					"x4",
					"y3"
				],
				[
					"l",
					"x3",
					"y3"
				],
				[
					"l",
					"x3",
					"b"
				],
				[
					"l",
					"x2",
					"b"
				],
				[
					"l",
					"x2",
					"y3"
				],
				[
					"l",
					"x1",
					"y3"
				],
				[
					"l",
					"x1",
					"y4"
				],
				["c"]
			]
		}]
	},
	leftrightcirculararrow: {
		adj: [
			["adj1", "val 12500"],
			["adj2", "val 1142319"],
			["adj3", "val 20457681"],
			["adj4", "val 11942319"],
			["adj5", "val 12500"]
		],
		gd: [
			["a5", "pin 0 adj5 25000"],
			["maxAdj1", "*/ a5 2 1"],
			["a1", "pin 0 adj1 maxAdj1"],
			["enAng", "pin 1 adj3 21599999"],
			["stAng", "pin 0 adj4 21599999"],
			["th", "*/ ss a1 100000"],
			["thh", "*/ ss a5 100000"],
			["th2", "*/ th 1 2"],
			["rw1", "+- wd2 th2 thh"],
			["rh1", "+- hd2 th2 thh"],
			["rw2", "+- rw1 0 th"],
			["rh2", "+- rh1 0 th"],
			["rw3", "+- rw2 th2 0"],
			["rh3", "+- rh2 th2 0"],
			["wtH", "sin rw3 enAng"],
			["htH", "cos rh3 enAng"],
			["dxH", "cat2 rw3 htH wtH"],
			["dyH", "sat2 rh3 htH wtH"],
			["xH", "+- hc dxH 0"],
			["yH", "+- vc dyH 0"],
			["rI", "min rw2 rh2"],
			["u1", "*/ dxH dxH 1"],
			["u2", "*/ dyH dyH 1"],
			["u3", "*/ rI rI 1"],
			["u4", "+- u1 0 u3"],
			["u5", "+- u2 0 u3"],
			["u6", "*/ u4 u5 u1"],
			["u7", "*/ u6 1 u2"],
			["u8", "+- 1 0 u7"],
			["u9", "sqrt u8"],
			["u10", "*/ u4 1 dxH"],
			["u11", "*/ u10 1 dyH"],
			["u12", "+/ 1 u9 u11"],
			["u13", "at2 1 u12"],
			["u14", "+- u13 21600000 0"],
			["u15", "?: u13 u13 u14"],
			["u16", "+- u15 0 enAng"],
			["u17", "+- u16 21600000 0"],
			["u18", "?: u16 u16 u17"],
			["u19", "+- u18 0 cd2"],
			["u20", "+- u18 0 21600000"],
			["u21", "?: u19 u20 u18"],
			["maxAng", "abs u21"],
			["aAng", "pin 0 adj2 maxAng"],
			["ptAng", "+- enAng aAng 0"],
			["wtA", "sin rw3 ptAng"],
			["htA", "cos rh3 ptAng"],
			["dxA", "cat2 rw3 htA wtA"],
			["dyA", "sat2 rh3 htA wtA"],
			["xA", "+- hc dxA 0"],
			["yA", "+- vc dyA 0"],
			["dxG", "cos thh ptAng"],
			["dyG", "sin thh ptAng"],
			["xG", "+- xH dxG 0"],
			["yG", "+- yH dyG 0"],
			["dxB", "cos thh ptAng"],
			["dyB", "sin thh ptAng"],
			["xB", "+- xH 0 dxB 0"],
			["yB", "+- yH 0 dyB 0"],
			["sx1", "+- xB 0 hc"],
			["sy1", "+- yB 0 vc"],
			["sx2", "+- xG 0 hc"],
			["sy2", "+- yG 0 vc"],
			["rO", "min rw1 rh1"],
			["x1O", "*/ sx1 rO rw1"],
			["y1O", "*/ sy1 rO rh1"],
			["x2O", "*/ sx2 rO rw1"],
			["y2O", "*/ sy2 rO rh1"],
			["dxO", "+- x2O 0 x1O"],
			["dyO", "+- y2O 0 y1O"],
			["dO", "mod dxO dyO 0"],
			["q1", "*/ x1O y2O 1"],
			["q2", "*/ x2O y1O 1"],
			["DO", "+- q1 0 q2"],
			["q3", "*/ rO rO 1"],
			["q4", "*/ dO dO 1"],
			["q5", "*/ q3 q4 1"],
			["q6", "*/ DO DO 1"],
			["q7", "+- q5 0 q6"],
			["q8", "max q7 0"],
			["sdelO", "sqrt q8"],
			["ndyO", "*/ dyO -1 1"],
			["sdyO", "?: ndyO -1 1"],
			["q9", "*/ sdyO dxO 1"],
			["q10", "*/ q9 sdelO 1"],
			["q11", "*/ DO dyO 1"],
			["dxF1", "+/ q11 q10 q4"],
			["q12", "+- q11 0 q10"],
			["dxF2", "*/ q12 1 q4"],
			["adyO", "abs dyO"],
			["q13", "*/ adyO sdelO 1"],
			["q14", "*/ DO dxO -1"],
			["dyF1", "+/ q14 q13 q4"],
			["q15", "+- q14 0 q13"],
			["dyF2", "*/ q15 1 q4"],
			["q16", "+- x2O 0 dxF1"],
			["q17", "+- x2O 0 dxF2"],
			["q18", "+- y2O 0 dyF1"],
			["q19", "+- y2O 0 dyF2"],
			["q20", "mod q16 q18 0"],
			["q21", "mod q17 q19 0"],
			["q22", "+- q21 0 q20"],
			["dxF", "?: q22 dxF1 dxF2"],
			["dyF", "?: q22 dyF1 dyF2"],
			["sdxF", "*/ dxF rw1 rO"],
			["sdyF", "*/ dyF rh1 rO"],
			["xF", "+- hc sdxF 0"],
			["yF", "+- vc sdyF 0"],
			["x1I", "*/ sx1 rI rw2"],
			["y1I", "*/ sy1 rI rh2"],
			["x2I", "*/ sx2 rI rw2"],
			["y2I", "*/ sy2 rI rh2"],
			["dxI", "+- x2I 0 x1I"],
			["dyI", "+- y2I 0 y1I"],
			["dI", "mod dxI dyI 0"],
			["v1", "*/ x1I y2I 1"],
			["v2", "*/ x2I y1I 1"],
			["DI", "+- v1 0 v2"],
			["v3", "*/ rI rI 1"],
			["v4", "*/ dI dI 1"],
			["v5", "*/ v3 v4 1"],
			["v6", "*/ DI DI 1"],
			["v7", "+- v5 0 v6"],
			["v8", "max v7 0"],
			["sdelI", "sqrt v8"],
			["v9", "*/ sdyO dxI 1"],
			["v10", "*/ v9 sdelI 1"],
			["v11", "*/ DI dyI 1"],
			["dxC1", "+/ v11 v10 v4"],
			["v12", "+- v11 0 v10"],
			["dxC2", "*/ v12 1 v4"],
			["adyI", "abs dyI"],
			["v13", "*/ adyI sdelI 1"],
			["v14", "*/ DI dxI -1"],
			["dyC1", "+/ v14 v13 v4"],
			["v15", "+- v14 0 v13"],
			["dyC2", "*/ v15 1 v4"],
			["v16", "+- x1I 0 dxC1"],
			["v17", "+- x1I 0 dxC2"],
			["v18", "+- y1I 0 dyC1"],
			["v19", "+- y1I 0 dyC2"],
			["v20", "mod v16 v18 0"],
			["v21", "mod v17 v19 0"],
			["v22", "+- v21 0 v20"],
			["dxC", "?: v22 dxC1 dxC2"],
			["dyC", "?: v22 dyC1 dyC2"],
			["sdxC", "*/ dxC rw2 rI"],
			["sdyC", "*/ dyC rh2 rI"],
			["xC", "+- hc sdxC 0"],
			["yC", "+- vc sdyC 0"],
			["wtI", "sin rw3 stAng"],
			["htI", "cos rh3 stAng"],
			["dxI", "cat2 rw3 htI wtI"],
			["dyI", "sat2 rh3 htI wtI"],
			["xI", "+- hc dxI 0"],
			["yI", "+- vc dyI 0"],
			["lptAng", "+- stAng 0 aAng"],
			["wtL", "sin rw3 lptAng"],
			["htL", "cos rh3 lptAng"],
			["dxL", "cat2 rw3 htL wtL"],
			["dyL", "sat2 rh3 htL wtL"],
			["xL", "+- hc dxL 0"],
			["yL", "+- vc dyL 0"],
			["dxK", "cos thh lptAng"],
			["dyK", "sin thh lptAng"],
			["xK", "+- xI dxK 0"],
			["yK", "+- yI dyK 0"],
			["dxJ", "cos thh lptAng"],
			["dyJ", "sin thh lptAng"],
			["xJ", "+- xI 0 dxJ 0"],
			["yJ", "+- yI 0 dyJ 0"],
			["p1", "+- xF 0 xC"],
			["p2", "+- yF 0 yC"],
			["p3", "mod p1 p2 0"],
			["p4", "*/ p3 1 2"],
			["p5", "+- p4 0 thh"],
			["xGp", "?: p5 xF xG"],
			["yGp", "?: p5 yF yG"],
			["xBp", "?: p5 xC xB"],
			["yBp", "?: p5 yC yB"],
			["en0", "at2 sdxF sdyF"],
			["en1", "+- en0 21600000 0"],
			["en2", "?: en0 en0 en1"],
			["od0", "+- en2 0 enAng"],
			["od1", "+- od0 21600000 0"],
			["od2", "?: od0 od0 od1"],
			["st0", "+- stAng 0 od2"],
			["st1", "+- st0 21600000 0"],
			["st2", "?: st0 st0 st1"],
			["sw0", "+- en2 0 st2"],
			["sw1", "+- sw0 21600000 0"],
			["swAng", "?: sw0 sw0 sw1"],
			["ist0", "at2 sdxC sdyC"],
			["ist1", "+- ist0 21600000 0"],
			["istAng", "?: ist0 ist0 ist1"],
			["id0", "+- istAng 0 enAng"],
			["id1", "+- id0 0 21600000"],
			["id2", "?: id0 id1 id0"],
			["ien0", "+- stAng 0 id2"],
			["ien1", "+- ien0 0 21600000"],
			["ien2", "?: ien1 ien1 ien0"],
			["isw1", "+- ien2 0 istAng"],
			["isw2", "+- isw1 0 21600000"],
			["iswAng", "?: isw1 isw2 isw1"],
			["wtE", "sin rw1 st2"],
			["htE", "cos rh1 st2"],
			["dxE", "cat2 rw1 htE wtE"],
			["dyE", "sat2 rh1 htE wtE"],
			["xE", "+- hc dxE 0"],
			["yE", "+- vc dyE 0"],
			["wtD", "sin rw2 ien2"],
			["htD", "cos rh2 ien2"],
			["dxD", "cat2 rw2 htD wtD"],
			["dyD", "sat2 rh2 htD wtD"],
			["xD", "+- hc dxD 0"],
			["yD", "+- vc dyD 0"],
			["xKp", "?: p5 xE xK"],
			["yKp", "?: p5 yE yK"],
			["xJp", "?: p5 xD xJ"],
			["yJp", "?: p5 yD yJ"],
			["aL", "+- lptAng 0 cd4"],
			["aA", "+- ptAng cd4 0"],
			["aB", "+- ptAng cd2 0"],
			["aJ", "+- lptAng cd2 0"],
			["idx", "cos rw1 2700000"],
			["idy", "sin rh1 2700000"],
			["il", "+- hc 0 idx"],
			["ir", "+- hc idx 0"],
			["it", "+- vc 0 idy"],
			["ib", "+- vc idy 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"xL",
					"yL"
				],
				[
					"l",
					"xKp",
					"yKp"
				],
				[
					"l",
					"xE",
					"yE"
				],
				[
					"a",
					"rw1",
					"rh1",
					"st2",
					"swAng"
				],
				[
					"l",
					"xGp",
					"yGp"
				],
				[
					"l",
					"xA",
					"yA"
				],
				[
					"l",
					"xBp",
					"yBp"
				],
				[
					"l",
					"xC",
					"yC"
				],
				[
					"a",
					"rw2",
					"rh2",
					"istAng",
					"iswAng"
				],
				[
					"l",
					"xJp",
					"yJp"
				],
				["c"]
			]
		}]
	},
	leftrightribbon: {
		adj: [
			["adj1", "val 50000"],
			["adj2", "val 50000"],
			["adj3", "val 16667"]
		],
		gd: [
			["a3", "pin 0 adj3 33333"],
			["maxAdj1", "+- 100000 0 a3"],
			["a1", "pin 0 adj1 maxAdj1"],
			["w1", "+- wd2 0 wd32"],
			["maxAdj2", "*/ 100000 w1 ss"],
			["a2", "pin 0 adj2 maxAdj2"],
			["x1", "*/ ss a2 100000"],
			["x4", "+- r 0 x1"],
			["dy1", "*/ h a1 200000"],
			["dy2", "*/ h a3 -200000"],
			["ly1", "+- vc dy2 dy1"],
			["ry4", "+- vc dy1 dy2"],
			["ly2", "+- ly1 dy1 0"],
			["ry3", "+- b 0 ly2"],
			["ly4", "*/ ly2 2 1"],
			["ry1", "+- b 0 ly4"],
			["ly3", "+- ly4 0 ly1"],
			["ry2", "+- b 0 ly3"],
			["hR", "*/ a3 ss 400000"],
			["x2", "+- hc 0 wd32"],
			["x3", "+- hc wd32 0"],
			["y1", "+- ly1 hR 0"],
			["y2", "+- ry2 0 hR"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"ly2"
					],
					[
						"l",
						"x1",
						"t"
					],
					[
						"l",
						"x1",
						"ly1"
					],
					[
						"l",
						"hc",
						"ly1"
					],
					[
						"a",
						"wd32",
						"hR",
						"3cd4",
						"cd2"
					],
					[
						"a",
						"wd32",
						"hR",
						"3cd4",
						"-10800000"
					],
					[
						"l",
						"x4",
						"ry2"
					],
					[
						"l",
						"x4",
						"ry1"
					],
					[
						"l",
						"r",
						"ry3"
					],
					[
						"l",
						"x4",
						"b"
					],
					[
						"l",
						"x4",
						"ry4"
					],
					[
						"l",
						"hc",
						"ry4"
					],
					[
						"a",
						"wd32",
						"hR",
						"cd4",
						"cd4"
					],
					[
						"l",
						"x2",
						"ly3"
					],
					[
						"l",
						"x1",
						"ly3"
					],
					[
						"l",
						"x1",
						"ly4"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darkenLess",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"x3",
						"y1"
					],
					[
						"a",
						"wd32",
						"hR",
						"0",
						"cd4"
					],
					[
						"a",
						"wd32",
						"hR",
						"3cd4",
						"-10800000"
					],
					[
						"l",
						"x3",
						"ry2"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"ly2"
					],
					[
						"l",
						"x1",
						"t"
					],
					[
						"l",
						"x1",
						"ly1"
					],
					[
						"l",
						"hc",
						"ly1"
					],
					[
						"a",
						"wd32",
						"hR",
						"3cd4",
						"cd2"
					],
					[
						"a",
						"wd32",
						"hR",
						"3cd4",
						"-10800000"
					],
					[
						"l",
						"x4",
						"ry2"
					],
					[
						"l",
						"x4",
						"ry1"
					],
					[
						"l",
						"r",
						"ry3"
					],
					[
						"l",
						"x4",
						"b"
					],
					[
						"l",
						"x4",
						"ry4"
					],
					[
						"l",
						"hc",
						"ry4"
					],
					[
						"a",
						"wd32",
						"hR",
						"cd4",
						"cd4"
					],
					[
						"l",
						"x2",
						"ly3"
					],
					[
						"l",
						"x1",
						"ly3"
					],
					[
						"l",
						"x1",
						"ly4"
					],
					["c"],
					[
						"m",
						"x3",
						"y1"
					],
					[
						"l",
						"x3",
						"ry2"
					],
					[
						"m",
						"x2",
						"y2"
					],
					[
						"l",
						"x2",
						"ly3"
					]
				]
			}
		]
	},
	leftrightuparrow: {
		adj: [
			["adj1", "val 25000"],
			["adj2", "val 25000"],
			["adj3", "val 25000"]
		],
		gd: [
			["a2", "pin 0 adj2 50000"],
			["maxAdj1", "*/ a2 2 1"],
			["a1", "pin 0 adj1 maxAdj1"],
			["q1", "+- 100000 0 maxAdj1"],
			["maxAdj3", "*/ q1 1 2"],
			["a3", "pin 0 adj3 maxAdj3"],
			["x1", "*/ ss a3 100000"],
			["dx2", "*/ ss a2 100000"],
			["x2", "+- hc 0 dx2"],
			["x5", "+- hc dx2 0"],
			["dx3", "*/ ss a1 200000"],
			["x3", "+- hc 0 dx3"],
			["x4", "+- hc dx3 0"],
			["x6", "+- r 0 x1"],
			["dy2", "*/ ss a2 50000"],
			["y2", "+- b 0 dy2"],
			["y4", "+- b 0 dx2"],
			["y3", "+- y4 0 dx3"],
			["y5", "+- y4 dx3 0"],
			["il", "*/ dx3 x1 dx2"],
			["ir", "+- r 0 il"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"y4"
				],
				[
					"l",
					"x1",
					"y2"
				],
				[
					"l",
					"x1",
					"y3"
				],
				[
					"l",
					"x3",
					"y3"
				],
				[
					"l",
					"x3",
					"x1"
				],
				[
					"l",
					"x2",
					"x1"
				],
				[
					"l",
					"hc",
					"t"
				],
				[
					"l",
					"x5",
					"x1"
				],
				[
					"l",
					"x4",
					"x1"
				],
				[
					"l",
					"x4",
					"y3"
				],
				[
					"l",
					"x6",
					"y3"
				],
				[
					"l",
					"x6",
					"y2"
				],
				[
					"l",
					"r",
					"y4"
				],
				[
					"l",
					"x6",
					"b"
				],
				[
					"l",
					"x6",
					"y5"
				],
				[
					"l",
					"x1",
					"y5"
				],
				[
					"l",
					"x1",
					"b"
				],
				["c"]
			]
		}]
	},
	leftuparrow: {
		adj: [
			["adj1", "val 25000"],
			["adj2", "val 25000"],
			["adj3", "val 25000"]
		],
		gd: [
			["a2", "pin 0 adj2 50000"],
			["maxAdj1", "*/ a2 2 1"],
			["a1", "pin 0 adj1 maxAdj1"],
			["maxAdj3", "+- 100000 0 maxAdj1"],
			["a3", "pin 0 adj3 maxAdj3"],
			["x1", "*/ ss a3 100000"],
			["dx2", "*/ ss a2 50000"],
			["x2", "+- r 0 dx2"],
			["y2", "+- b 0 dx2"],
			["dx4", "*/ ss a2 100000"],
			["x4", "+- r 0 dx4"],
			["y4", "+- b 0 dx4"],
			["dx3", "*/ ss a1 200000"],
			["x3", "+- x4 0 dx3"],
			["x5", "+- x4 dx3 0"],
			["y3", "+- y4 0 dx3"],
			["y5", "+- y4 dx3 0"],
			["il", "*/ dx3 x1 dx4"],
			["cx1", "+/ x1 x5 2"],
			["cy1", "+/ x1 y5 2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"y4"
				],
				[
					"l",
					"x1",
					"y2"
				],
				[
					"l",
					"x1",
					"y3"
				],
				[
					"l",
					"x3",
					"y3"
				],
				[
					"l",
					"x3",
					"x1"
				],
				[
					"l",
					"x2",
					"x1"
				],
				[
					"l",
					"x4",
					"t"
				],
				[
					"l",
					"r",
					"x1"
				],
				[
					"l",
					"x5",
					"x1"
				],
				[
					"l",
					"x5",
					"y5"
				],
				[
					"l",
					"x1",
					"y5"
				],
				[
					"l",
					"x1",
					"b"
				],
				["c"]
			]
		}]
	},
	lightningbolt: {
		adj: [],
		gd: [
			["x1", "*/ w 5022 21600"],
			["x3", "*/ w 8472 21600"],
			["x4", "*/ w 8757 21600"],
			["x5", "*/ w 10012 21600"],
			["x8", "*/ w 12860 21600"],
			["x9", "*/ w 13917 21600"],
			["x11", "*/ w 16577 21600"],
			["y1", "*/ h 3890 21600"],
			["y2", "*/ h 6080 21600"],
			["y4", "*/ h 7437 21600"],
			["y6", "*/ h 9705 21600"],
			["y7", "*/ h 12007 21600"],
			["y10", "*/ h 14277 21600"],
			["y11", "*/ h 14915 21600"]
		],
		paths: [{
			w: 21600,
			h: 21600,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"8472",
					"0"
				],
				[
					"l",
					"12860",
					"6080"
				],
				[
					"l",
					"11050",
					"6797"
				],
				[
					"l",
					"16577",
					"12007"
				],
				[
					"l",
					"14767",
					"12877"
				],
				[
					"l",
					"21600",
					"21600"
				],
				[
					"l",
					"10012",
					"14915"
				],
				[
					"l",
					"12222",
					"13987"
				],
				[
					"l",
					"5022",
					"9705"
				],
				[
					"l",
					"7602",
					"8382"
				],
				[
					"l",
					"0",
					"3890"
				],
				["c"]
			]
		}]
	},
	line: {
		adj: [],
		gd: [],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"t"
			], [
				"l",
				"r",
				"b"
			]]
		}]
	},
	lineinv: {
		adj: [],
		gd: [],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"b"
			], [
				"l",
				"r",
				"t"
			]]
		}]
	},
	mathdivide: {
		adj: [
			["adj1", "val 23520"],
			["adj2", "val 5880"],
			["adj3", "val 11760"]
		],
		gd: [
			["a1", "pin 1000 adj1 36745"],
			["ma1", "+- 0 0 a1"],
			["ma3h", "+/ 73490 ma1 4"],
			["ma3w", "*/ 36745 w h"],
			["maxAdj3", "min ma3h ma3w"],
			["a3", "pin 1000 adj3 maxAdj3"],
			["m4a3", "*/ -4 a3 1"],
			["maxAdj2", "+- 73490 m4a3 a1"],
			["a2", "pin 0 adj2 maxAdj2"],
			["dy1", "*/ h a1 200000"],
			["yg", "*/ h a2 100000"],
			["rad", "*/ h a3 100000"],
			["dx1", "*/ w 73490 200000"],
			["y3", "+- vc 0 dy1"],
			["y4", "+- vc dy1 0"],
			["a", "+- yg rad 0"],
			["y2", "+- y3 0 a"],
			["y1", "+- y2 0 rad"],
			["y5", "+- b 0 y1"],
			["x1", "+- hc 0 dx1"],
			["x3", "+- hc dx1 0"],
			["x2", "+- hc 0 rad"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"hc",
					"y1"
				],
				[
					"a",
					"rad",
					"rad",
					"3cd4",
					"21600000"
				],
				["c"],
				[
					"m",
					"hc",
					"y5"
				],
				[
					"a",
					"rad",
					"rad",
					"cd4",
					"21600000"
				],
				["c"],
				[
					"m",
					"x1",
					"y3"
				],
				[
					"l",
					"x3",
					"y3"
				],
				[
					"l",
					"x3",
					"y4"
				],
				[
					"l",
					"x1",
					"y4"
				],
				["c"]
			]
		}]
	},
	mathequal: {
		adj: [["adj1", "val 23520"], ["adj2", "val 11760"]],
		gd: [
			["a1", "pin 0 adj1 36745"],
			["2a1", "*/ a1 2 1"],
			["mAdj2", "+- 100000 0 2a1"],
			["a2", "pin 0 adj2 mAdj2"],
			["dy1", "*/ h a1 100000"],
			["dy2", "*/ h a2 200000"],
			["dx1", "*/ w 73490 200000"],
			["y2", "+- vc 0 dy2"],
			["y3", "+- vc dy2 0"],
			["y1", "+- y2 0 dy1"],
			["y4", "+- y3 dy1 0"],
			["x1", "+- hc 0 dx1"],
			["x2", "+- hc dx1 0"],
			["yC1", "+/ y1 y2 2"],
			["yC2", "+/ y3 y4 2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"x1",
					"y1"
				],
				[
					"l",
					"x2",
					"y1"
				],
				[
					"l",
					"x2",
					"y2"
				],
				[
					"l",
					"x1",
					"y2"
				],
				["c"],
				[
					"m",
					"x1",
					"y3"
				],
				[
					"l",
					"x2",
					"y3"
				],
				[
					"l",
					"x2",
					"y4"
				],
				[
					"l",
					"x1",
					"y4"
				],
				["c"]
			]
		}]
	},
	mathminus: {
		adj: [["adj1", "val 23520"]],
		gd: [
			["a1", "pin 0 adj1 100000"],
			["dy1", "*/ h a1 200000"],
			["dx1", "*/ w 73490 200000"],
			["y1", "+- vc 0 dy1"],
			["y2", "+- vc dy1 0"],
			["x1", "+- hc 0 dx1"],
			["x2", "+- hc dx1 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"x1",
					"y1"
				],
				[
					"l",
					"x2",
					"y1"
				],
				[
					"l",
					"x2",
					"y2"
				],
				[
					"l",
					"x1",
					"y2"
				],
				["c"]
			]
		}]
	},
	mathmultiply: {
		adj: [["adj1", "val 23520"]],
		gd: [
			["a1", "pin 0 adj1 51965"],
			["th", "*/ ss a1 100000"],
			["a", "at2 w h"],
			["sa", "sin 1 a"],
			["ca", "cos 1 a"],
			["ta", "tan 1 a"],
			["dl", "mod w h 0"],
			["rw", "*/ dl 51965 100000"],
			["lM", "+- dl 0 rw"],
			["xM", "*/ ca lM 2"],
			["yM", "*/ sa lM 2"],
			["dxAM", "*/ sa th 2"],
			["dyAM", "*/ ca th 2"],
			["xA", "+- xM 0 dxAM"],
			["yA", "+- yM dyAM 0"],
			["xB", "+- xM dxAM 0"],
			["yB", "+- yM 0 dyAM"],
			["xBC", "+- hc 0 xB"],
			["yBC", "*/ xBC ta 1"],
			["yC", "+- yBC yB 0"],
			["xD", "+- r 0 xB"],
			["xE", "+- r 0 xA"],
			["yFE", "+- vc 0 yA"],
			["xFE", "*/ yFE 1 ta"],
			["xF", "+- xE 0 xFE"],
			["xL", "+- xA xFE 0"],
			["yG", "+- b 0 yA"],
			["yH", "+- b 0 yB"],
			["yI", "+- b 0 yC"],
			["xC2", "+- r 0 xM"],
			["yC3", "+- b 0 yM"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"xA",
					"yA"
				],
				[
					"l",
					"xB",
					"yB"
				],
				[
					"l",
					"hc",
					"yC"
				],
				[
					"l",
					"xD",
					"yB"
				],
				[
					"l",
					"xE",
					"yA"
				],
				[
					"l",
					"xF",
					"vc"
				],
				[
					"l",
					"xE",
					"yG"
				],
				[
					"l",
					"xD",
					"yH"
				],
				[
					"l",
					"hc",
					"yI"
				],
				[
					"l",
					"xB",
					"yH"
				],
				[
					"l",
					"xA",
					"yG"
				],
				[
					"l",
					"xL",
					"vc"
				],
				["c"]
			]
		}]
	},
	mathnotequal: {
		adj: [
			["adj1", "val 23520"],
			["adj2", "val 6600000"],
			["adj3", "val 11760"]
		],
		gd: [
			["a1", "pin 0 adj1 50000"],
			["crAng", "pin 4200000 adj2 6600000"],
			["2a1", "*/ a1 2 1"],
			["maxAdj3", "+- 100000 0 2a1"],
			["a3", "pin 0 adj3 maxAdj3"],
			["dy1", "*/ h a1 100000"],
			["dy2", "*/ h a3 200000"],
			["dx1", "*/ w 73490 200000"],
			["x1", "+- hc 0 dx1"],
			["x8", "+- hc dx1 0"],
			["y2", "+- vc 0 dy2"],
			["y3", "+- vc dy2 0"],
			["y1", "+- y2 0 dy1"],
			["y4", "+- y3 dy1 0"],
			["cadj2", "+- crAng 0 cd4"],
			["xadj2", "tan hd2 cadj2"],
			["len", "mod xadj2 hd2 0"],
			["bhw", "*/ len dy1 hd2"],
			["bhw2", "*/ bhw 1 2"],
			["x7", "+- hc xadj2 bhw2"],
			["dx67", "*/ xadj2 y1 hd2"],
			["x6", "+- x7 0 dx67"],
			["dx57", "*/ xadj2 y2 hd2"],
			["x5", "+- x7 0 dx57"],
			["dx47", "*/ xadj2 y3 hd2"],
			["x4", "+- x7 0 dx47"],
			["dx37", "*/ xadj2 y4 hd2"],
			["x3", "+- x7 0 dx37"],
			["dx27", "*/ xadj2 2 1"],
			["x2", "+- x7 0 dx27"],
			["rx7", "+- x7 bhw 0"],
			["rx6", "+- x6 bhw 0"],
			["rx5", "+- x5 bhw 0"],
			["rx4", "+- x4 bhw 0"],
			["rx3", "+- x3 bhw 0"],
			["rx2", "+- x2 bhw 0"],
			["dx7", "*/ dy1 hd2 len"],
			["rxt", "+- x7 dx7 0"],
			["lxt", "+- rx7 0 dx7"],
			["rx", "?: cadj2 rxt rx7"],
			["lx", "?: cadj2 x7 lxt"],
			["dy3", "*/ dy1 xadj2 len"],
			["dy4", "+- 0 0 dy3"],
			["ry", "?: cadj2 dy3 t"],
			["ly", "?: cadj2 t dy4"],
			["dlx", "+- w 0 rx"],
			["drx", "+- w 0 lx"],
			["dly", "+- h 0 ry"],
			["dry", "+- h 0 ly"],
			["xC1", "+/ rx lx 2"],
			["xC2", "+/ drx dlx 2"],
			["yC1", "+/ ry ly 2"],
			["yC2", "+/ y1 y2 2"],
			["yC3", "+/ y3 y4 2"],
			["yC4", "+/ dry dly 2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"x1",
					"y1"
				],
				[
					"l",
					"x6",
					"y1"
				],
				[
					"l",
					"lx",
					"ly"
				],
				[
					"l",
					"rx",
					"ry"
				],
				[
					"l",
					"rx6",
					"y1"
				],
				[
					"l",
					"x8",
					"y1"
				],
				[
					"l",
					"x8",
					"y2"
				],
				[
					"l",
					"rx5",
					"y2"
				],
				[
					"l",
					"rx4",
					"y3"
				],
				[
					"l",
					"x8",
					"y3"
				],
				[
					"l",
					"x8",
					"y4"
				],
				[
					"l",
					"rx3",
					"y4"
				],
				[
					"l",
					"drx",
					"dry"
				],
				[
					"l",
					"dlx",
					"dly"
				],
				[
					"l",
					"x3",
					"y4"
				],
				[
					"l",
					"x1",
					"y4"
				],
				[
					"l",
					"x1",
					"y3"
				],
				[
					"l",
					"x4",
					"y3"
				],
				[
					"l",
					"x5",
					"y2"
				],
				[
					"l",
					"x1",
					"y2"
				],
				["c"]
			]
		}]
	},
	mathplus: {
		adj: [["adj1", "val 23520"]],
		gd: [
			["a1", "pin 0 adj1 73490"],
			["dx1", "*/ w 73490 200000"],
			["dy1", "*/ h 73490 200000"],
			["dx2", "*/ ss a1 200000"],
			["x1", "+- hc 0 dx1"],
			["x2", "+- hc 0 dx2"],
			["x3", "+- hc dx2 0"],
			["x4", "+- hc dx1 0"],
			["y1", "+- vc 0 dy1"],
			["y2", "+- vc 0 dx2"],
			["y3", "+- vc dx2 0"],
			["y4", "+- vc dy1 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"x1",
					"y2"
				],
				[
					"l",
					"x2",
					"y2"
				],
				[
					"l",
					"x2",
					"y1"
				],
				[
					"l",
					"x3",
					"y1"
				],
				[
					"l",
					"x3",
					"y2"
				],
				[
					"l",
					"x4",
					"y2"
				],
				[
					"l",
					"x4",
					"y3"
				],
				[
					"l",
					"x3",
					"y3"
				],
				[
					"l",
					"x3",
					"y4"
				],
				[
					"l",
					"x2",
					"y4"
				],
				[
					"l",
					"x2",
					"y3"
				],
				[
					"l",
					"x1",
					"y3"
				],
				["c"]
			]
		}]
	},
	moon: {
		adj: [["adj", "val 50000"]],
		gd: [
			["a", "pin 0 adj 87500"],
			["g0", "*/ ss a 100000"],
			["g0w", "*/ g0 w ss"],
			["g1", "+- ss 0 g0"],
			["g2", "*/ g0 g0 g1"],
			["g3", "*/ ss ss g1"],
			["g4", "*/ g3 2 1"],
			["g5", "+- g4 0 g2"],
			["g6", "+- g5 0 g0"],
			["g6w", "*/ g6 w ss"],
			["g7", "*/ g5 1 2"],
			["g8", "+- g7 0 g0"],
			["dy1", "*/ g8 hd2 ss"],
			["g10h", "+- vc 0 dy1"],
			["g11h", "+- vc dy1 0"],
			["g12", "*/ g0 9598 32768"],
			["g12w", "*/ g12 w ss"],
			["g13", "+- ss 0 g12"],
			["q1", "*/ ss ss 1"],
			["q2", "*/ g13 g13 1"],
			["q3", "+- q1 0 q2"],
			["q4", "sqrt q3"],
			["dy4", "*/ q4 hd2 ss"],
			["g15h", "+- vc 0 dy4"],
			["g16h", "+- vc dy4 0"],
			["g17w", "+- g6w 0 g0w"],
			["g18w", "*/ g17w 1 2"],
			["dx2p", "+- g0w g18w w"],
			["dx2", "*/ dx2p -1 1"],
			["dy2", "*/ hd2 -1 1"],
			["stAng1", "at2 dx2 dy2"],
			["enAngp1", "at2 dx2 hd2"],
			["enAng1", "+- enAngp1 0 21600000"],
			["swAng1", "+- enAng1 0 stAng1"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"r",
					"b"
				],
				[
					"a",
					"w",
					"hd2",
					"cd4",
					"cd2"
				],
				[
					"a",
					"g18w",
					"dy1",
					"stAng1",
					"swAng1"
				],
				["c"]
			]
		}]
	},
	nonisoscelestrapezoid: {
		adj: [["adj1", "val 25000"], ["adj2", "val 25000"]],
		gd: [
			["maxAdj", "*/ 50000 w ss"],
			["a1", "pin 0 adj1 maxAdj"],
			["a2", "pin 0 adj2 maxAdj"],
			["x1", "*/ ss a1 200000"],
			["x2", "*/ ss a1 100000"],
			["dx3", "*/ ss a2 100000"],
			["x3", "+- r 0 dx3"],
			["x4", "+/ r x3 2"],
			["il", "*/ wd3 a1 maxAdj"],
			["adjm", "max a1 a2"],
			["it", "*/ hd3 adjm maxAdj"],
			["irt", "*/ wd3 a2 maxAdj"],
			["ir", "+- r 0 irt"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"b"
				],
				[
					"l",
					"x2",
					"t"
				],
				[
					"l",
					"x3",
					"t"
				],
				[
					"l",
					"r",
					"b"
				],
				["c"]
			]
		}]
	},
	nosmoking: {
		adj: [["adj", "val 18750"]],
		gd: [
			["a", "pin 0 adj 50000"],
			["dr", "*/ ss a 100000"],
			["iwd2", "+- wd2 0 dr"],
			["ihd2", "+- hd2 0 dr"],
			["ang", "at2 w h"],
			["ct", "cos ihd2 ang"],
			["st", "sin iwd2 ang"],
			["m", "mod ct st 0"],
			["n", "*/ iwd2 ihd2 m"],
			["drd2", "*/ dr 1 2"],
			["dang", "at2 n drd2"],
			["dang2", "*/ dang 2 1"],
			["swAng", "+- -10800000 dang2 0"],
			["t3", "at2 w h"],
			["stAng1", "+- t3 0 dang"],
			["stAng2", "+- stAng1 0 cd2"],
			["ct1", "cos ihd2 stAng1"],
			["st1", "sin iwd2 stAng1"],
			["m1", "mod ct1 st1 0"],
			["n1", "*/ iwd2 ihd2 m1"],
			["dx1", "cos n1 stAng1"],
			["dy1", "sin n1 stAng1"],
			["x1", "+- hc dx1 0"],
			["y1", "+- vc dy1 0"],
			["x2", "+- hc 0 dx1"],
			["y2", "+- vc 0 dy1"],
			["idx", "cos wd2 2700000"],
			["idy", "sin hd2 2700000"],
			["il", "+- hc 0 idx"],
			["ir", "+- hc idx 0"],
			["it", "+- vc 0 idy"],
			["ib", "+- vc idy 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"vc"
				],
				[
					"a",
					"wd2",
					"hd2",
					"cd2",
					"cd4"
				],
				[
					"a",
					"wd2",
					"hd2",
					"3cd4",
					"cd4"
				],
				[
					"a",
					"wd2",
					"hd2",
					"0",
					"cd4"
				],
				[
					"a",
					"wd2",
					"hd2",
					"cd4",
					"cd4"
				],
				["c"],
				[
					"m",
					"x1",
					"y1"
				],
				[
					"a",
					"iwd2",
					"ihd2",
					"stAng1",
					"swAng"
				],
				["c"],
				[
					"m",
					"x2",
					"y2"
				],
				[
					"a",
					"iwd2",
					"ihd2",
					"stAng2",
					"swAng"
				],
				["c"]
			]
		}]
	},
	notchedrightarrow: {
		adj: [["adj1", "val 50000"], ["adj2", "val 50000"]],
		gd: [
			["maxAdj2", "*/ 100000 w ss"],
			["a1", "pin 0 adj1 100000"],
			["a2", "pin 0 adj2 maxAdj2"],
			["dx2", "*/ ss a2 100000"],
			["x2", "+- r 0 dx2"],
			["dy1", "*/ h a1 200000"],
			["y1", "+- vc 0 dy1"],
			["y2", "+- vc dy1 0"],
			["x1", "*/ dy1 dx2 hd2"],
			["x3", "+- r 0 x1"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"y1"
				],
				[
					"l",
					"x2",
					"y1"
				],
				[
					"l",
					"x2",
					"t"
				],
				[
					"l",
					"r",
					"vc"
				],
				[
					"l",
					"x2",
					"b"
				],
				[
					"l",
					"x2",
					"y2"
				],
				[
					"l",
					"l",
					"y2"
				],
				[
					"l",
					"x1",
					"vc"
				],
				["c"]
			]
		}]
	},
	octagon: {
		adj: [["adj", "val 29289"]],
		gd: [
			["a", "pin 0 adj 50000"],
			["x1", "*/ ss a 100000"],
			["x2", "+- r 0 x1"],
			["y2", "+- b 0 x1"],
			["il", "*/ x1 1 2"],
			["ir", "+- r 0 il"],
			["ib", "+- b 0 il"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"x1"
				],
				[
					"l",
					"x1",
					"t"
				],
				[
					"l",
					"x2",
					"t"
				],
				[
					"l",
					"r",
					"x1"
				],
				[
					"l",
					"r",
					"y2"
				],
				[
					"l",
					"x2",
					"b"
				],
				[
					"l",
					"x1",
					"b"
				],
				[
					"l",
					"l",
					"y2"
				],
				["c"]
			]
		}]
	},
	parallelogram: {
		adj: [["adj", "val 25000"]],
		gd: [
			["maxAdj", "*/ 100000 w ss"],
			["a", "pin 0 adj maxAdj"],
			["x1", "*/ ss a 200000"],
			["x2", "*/ ss a 100000"],
			["x6", "+- r 0 x1"],
			["x5", "+- r 0 x2"],
			["x3", "*/ x5 1 2"],
			["x4", "+- r 0 x3"],
			["il", "*/ wd2 a maxAdj"],
			["q1", "*/ 5 a maxAdj"],
			["q2", "+/ 1 q1 12"],
			["il", "*/ q2 w 1"],
			["it", "*/ q2 h 1"],
			["ir", "+- r 0 il"],
			["ib", "+- b 0 it"],
			["q3", "*/ h hc x2"],
			["y1", "pin 0 q3 h"],
			["y2", "+- b 0 y1"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"b"
				],
				[
					"l",
					"x2",
					"t"
				],
				[
					"l",
					"r",
					"t"
				],
				[
					"l",
					"x5",
					"b"
				],
				["c"]
			]
		}]
	},
	pentagon: {
		adj: [["hf", "val 105146"], ["vf", "val 110557"]],
		gd: [
			["swd2", "*/ wd2 hf 100000"],
			["shd2", "*/ hd2 vf 100000"],
			["svc", "*/ vc  vf 100000"],
			["dx1", "cos swd2 1080000"],
			["dx2", "cos swd2 18360000"],
			["dy1", "sin shd2 1080000"],
			["dy2", "sin shd2 18360000"],
			["x1", "+- hc 0 dx1"],
			["x2", "+- hc 0 dx2"],
			["x3", "+- hc dx2 0"],
			["x4", "+- hc dx1 0"],
			["y1", "+- svc 0 dy1"],
			["y2", "+- svc 0 dy2"],
			["it", "*/ y1 dx2 dx1"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"x1",
					"y1"
				],
				[
					"l",
					"hc",
					"t"
				],
				[
					"l",
					"x4",
					"y1"
				],
				[
					"l",
					"x3",
					"y2"
				],
				[
					"l",
					"x2",
					"y2"
				],
				["c"]
			]
		}]
	},
	pie: {
		adj: [["adj1", "val 0"], ["adj2", "val 16200000"]],
		gd: [
			["stAng", "pin 0 adj1 21599999"],
			["enAng", "pin 0 adj2 21599999"],
			["sw1", "+- enAng 0 stAng"],
			["sw2", "+- sw1 21600000 0"],
			["swAng", "?: sw1 sw1 sw2"],
			["wt1", "sin wd2 stAng"],
			["ht1", "cos hd2 stAng"],
			["dx1", "cat2 wd2 ht1 wt1"],
			["dy1", "sat2 hd2 ht1 wt1"],
			["x1", "+- hc dx1 0"],
			["y1", "+- vc dy1 0"],
			["wt2", "sin wd2 enAng"],
			["ht2", "cos hd2 enAng"],
			["dx2", "cat2 wd2 ht2 wt2"],
			["dy2", "sat2 hd2 ht2 wt2"],
			["x2", "+- hc dx2 0"],
			["y2", "+- vc dy2 0"],
			["idx", "cos wd2 2700000"],
			["idy", "sin hd2 2700000"],
			["il", "+- hc 0 idx"],
			["ir", "+- hc idx 0"],
			["it", "+- vc 0 idy"],
			["ib", "+- vc idy 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"x1",
					"y1"
				],
				[
					"a",
					"wd2",
					"hd2",
					"stAng",
					"swAng"
				],
				[
					"l",
					"hc",
					"vc"
				],
				["c"]
			]
		}]
	},
	piewedge: {
		adj: [],
		gd: [
			["g1", "cos w 13500000"],
			["g2", "sin h 13500000"],
			["x1", "+- r g1 0"],
			["y1", "+- b g2 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"b"
				],
				[
					"a",
					"w",
					"h",
					"cd2",
					"cd4"
				],
				[
					"l",
					"r",
					"b"
				],
				["c"]
			]
		}]
	},
	plaque: {
		adj: [["adj", "val 16667"]],
		gd: [
			["a", "pin 0 adj 50000"],
			["x1", "*/ ss a 100000"],
			["x2", "+- r 0 x1"],
			["y2", "+- b 0 x1"],
			["il", "*/ x1 70711 100000"],
			["ir", "+- r 0 il"],
			["ib", "+- b 0 il"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"x1"
				],
				[
					"a",
					"x1",
					"x1",
					"cd4",
					"-5400000"
				],
				[
					"l",
					"x2",
					"t"
				],
				[
					"a",
					"x1",
					"x1",
					"cd2",
					"-5400000"
				],
				[
					"l",
					"r",
					"y2"
				],
				[
					"a",
					"x1",
					"x1",
					"3cd4",
					"-5400000"
				],
				[
					"l",
					"x1",
					"b"
				],
				[
					"a",
					"x1",
					"x1",
					"0",
					"-5400000"
				],
				["c"]
			]
		}]
	},
	plaquetabs: {
		adj: [],
		gd: [
			["md", "mod w h 0"],
			["dx", "*/ 1 md 20"],
			["y1", "+- 0 b dx"],
			["x1", "+- 0 r dx"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"dx",
						"t"
					],
					[
						"a",
						"dx",
						"dx",
						"0",
						"cd4"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"l",
						"y1"
					],
					[
						"a",
						"dx",
						"dx",
						"3cd4",
						"cd4"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"dx"
					],
					[
						"a",
						"dx",
						"dx",
						"cd4",
						"cd4"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"x1",
						"b"
					],
					[
						"a",
						"dx",
						"dx",
						"cd2",
						"cd4"
					],
					[
						"l",
						"r",
						"b"
					],
					["c"]
				]
			}
		]
	},
	plus: {
		adj: [["adj", "val 25000"]],
		gd: [
			["a", "pin 0 adj 50000"],
			["x1", "*/ ss a 100000"],
			["x2", "+- r 0 x1"],
			["y2", "+- b 0 x1"],
			["d", "+- w 0 h"],
			["il", "?: d l x1"],
			["ir", "?: d r x2"],
			["it", "?: d x1 t"],
			["ib", "?: d y2 b"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"x1"
				],
				[
					"l",
					"x1",
					"x1"
				],
				[
					"l",
					"x1",
					"t"
				],
				[
					"l",
					"x2",
					"t"
				],
				[
					"l",
					"x2",
					"x1"
				],
				[
					"l",
					"r",
					"x1"
				],
				[
					"l",
					"r",
					"y2"
				],
				[
					"l",
					"x2",
					"y2"
				],
				[
					"l",
					"x2",
					"b"
				],
				[
					"l",
					"x1",
					"b"
				],
				[
					"l",
					"x1",
					"y2"
				],
				[
					"l",
					"l",
					"y2"
				],
				["c"]
			]
		}]
	},
	quadarrow: {
		adj: [
			["adj1", "val 22500"],
			["adj2", "val 22500"],
			["adj3", "val 22500"]
		],
		gd: [
			["a2", "pin 0 adj2 50000"],
			["maxAdj1", "*/ a2 2 1"],
			["a1", "pin 0 adj1 maxAdj1"],
			["q1", "+- 100000 0 maxAdj1"],
			["maxAdj3", "*/ q1 1 2"],
			["a3", "pin 0 adj3 maxAdj3"],
			["x1", "*/ ss a3 100000"],
			["dx2", "*/ ss a2 100000"],
			["x2", "+- hc 0 dx2"],
			["x5", "+- hc dx2 0"],
			["dx3", "*/ ss a1 200000"],
			["x3", "+- hc 0 dx3"],
			["x4", "+- hc dx3 0"],
			["x6", "+- r 0 x1"],
			["y2", "+- vc 0 dx2"],
			["y5", "+- vc dx2 0"],
			["y3", "+- vc 0 dx3"],
			["y4", "+- vc dx3 0"],
			["y6", "+- b 0 x1"],
			["il", "*/ dx3 x1 dx2"],
			["ir", "+- r 0 il"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"vc"
				],
				[
					"l",
					"x1",
					"y2"
				],
				[
					"l",
					"x1",
					"y3"
				],
				[
					"l",
					"x3",
					"y3"
				],
				[
					"l",
					"x3",
					"x1"
				],
				[
					"l",
					"x2",
					"x1"
				],
				[
					"l",
					"hc",
					"t"
				],
				[
					"l",
					"x5",
					"x1"
				],
				[
					"l",
					"x4",
					"x1"
				],
				[
					"l",
					"x4",
					"y3"
				],
				[
					"l",
					"x6",
					"y3"
				],
				[
					"l",
					"x6",
					"y2"
				],
				[
					"l",
					"r",
					"vc"
				],
				[
					"l",
					"x6",
					"y5"
				],
				[
					"l",
					"x6",
					"y4"
				],
				[
					"l",
					"x4",
					"y4"
				],
				[
					"l",
					"x4",
					"y6"
				],
				[
					"l",
					"x5",
					"y6"
				],
				[
					"l",
					"hc",
					"b"
				],
				[
					"l",
					"x2",
					"y6"
				],
				[
					"l",
					"x3",
					"y6"
				],
				[
					"l",
					"x3",
					"y4"
				],
				[
					"l",
					"x1",
					"y4"
				],
				[
					"l",
					"x1",
					"y5"
				],
				["c"]
			]
		}]
	},
	quadarrowcallout: {
		adj: [
			["adj1", "val 18515"],
			["adj2", "val 18515"],
			["adj3", "val 18515"],
			["adj4", "val 48123"]
		],
		gd: [
			["a2", "pin 0 adj2 50000"],
			["maxAdj1", "*/ a2 2 1"],
			["a1", "pin 0 adj1 maxAdj1"],
			["maxAdj3", "+- 50000 0 a2"],
			["a3", "pin 0 adj3 maxAdj3"],
			["q2", "*/ a3 2 1"],
			["maxAdj4", "+- 100000 0 q2"],
			["a4", "pin a1 adj4 maxAdj4"],
			["dx2", "*/ ss a2 100000"],
			["dx3", "*/ ss a1 200000"],
			["ah", "*/ ss a3 100000"],
			["dx1", "*/ w a4 200000"],
			["dy1", "*/ h a4 200000"],
			["x8", "+- r 0 ah"],
			["x2", "+- hc 0 dx1"],
			["x7", "+- hc dx1 0"],
			["x3", "+- hc 0 dx2"],
			["x6", "+- hc dx2 0"],
			["x4", "+- hc 0 dx3"],
			["x5", "+- hc dx3 0"],
			["y8", "+- b 0 ah"],
			["y2", "+- vc 0 dy1"],
			["y7", "+- vc dy1 0"],
			["y3", "+- vc 0 dx2"],
			["y6", "+- vc dx2 0"],
			["y4", "+- vc 0 dx3"],
			["y5", "+- vc dx3 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"vc"
				],
				[
					"l",
					"ah",
					"y3"
				],
				[
					"l",
					"ah",
					"y4"
				],
				[
					"l",
					"x2",
					"y4"
				],
				[
					"l",
					"x2",
					"y2"
				],
				[
					"l",
					"x4",
					"y2"
				],
				[
					"l",
					"x4",
					"ah"
				],
				[
					"l",
					"x3",
					"ah"
				],
				[
					"l",
					"hc",
					"t"
				],
				[
					"l",
					"x6",
					"ah"
				],
				[
					"l",
					"x5",
					"ah"
				],
				[
					"l",
					"x5",
					"y2"
				],
				[
					"l",
					"x7",
					"y2"
				],
				[
					"l",
					"x7",
					"y4"
				],
				[
					"l",
					"x8",
					"y4"
				],
				[
					"l",
					"x8",
					"y3"
				],
				[
					"l",
					"r",
					"vc"
				],
				[
					"l",
					"x8",
					"y6"
				],
				[
					"l",
					"x8",
					"y5"
				],
				[
					"l",
					"x7",
					"y5"
				],
				[
					"l",
					"x7",
					"y7"
				],
				[
					"l",
					"x5",
					"y7"
				],
				[
					"l",
					"x5",
					"y8"
				],
				[
					"l",
					"x6",
					"y8"
				],
				[
					"l",
					"hc",
					"b"
				],
				[
					"l",
					"x3",
					"y8"
				],
				[
					"l",
					"x4",
					"y8"
				],
				[
					"l",
					"x4",
					"y7"
				],
				[
					"l",
					"x2",
					"y7"
				],
				[
					"l",
					"x2",
					"y5"
				],
				[
					"l",
					"ah",
					"y5"
				],
				[
					"l",
					"ah",
					"y6"
				],
				["c"]
			]
		}]
	},
	ribbon: {
		adj: [["adj1", "val 16667"], ["adj2", "val 50000"]],
		gd: [
			["a1", "pin 0 adj1 33333"],
			["a2", "pin 25000 adj2 75000"],
			["x10", "+- r 0 wd8"],
			["dx2", "*/ w a2 200000"],
			["x2", "+- hc 0 dx2"],
			["x9", "+- hc dx2 0"],
			["x3", "+- x2 wd32 0"],
			["x8", "+- x9 0 wd32"],
			["x5", "+- x2 wd8 0"],
			["x6", "+- x9 0 wd8"],
			["x4", "+- x5 0 wd32"],
			["x7", "+- x6 wd32 0"],
			["y1", "*/ h a1 200000"],
			["y2", "*/ h a1 100000"],
			["y4", "+- b 0 y2"],
			["y3", "*/ y4 1 2"],
			["hR", "*/ h a1 400000"],
			["y5", "+- b 0 hR"],
			["y6", "+- y2 0 hR"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"x4",
						"t"
					],
					[
						"a",
						"wd32",
						"hR",
						"3cd4",
						"cd2"
					],
					[
						"l",
						"x3",
						"y1"
					],
					[
						"a",
						"wd32",
						"hR",
						"3cd4",
						"-10800000"
					],
					[
						"l",
						"x8",
						"y2"
					],
					[
						"a",
						"wd32",
						"hR",
						"cd4",
						"-10800000"
					],
					[
						"l",
						"x7",
						"y1"
					],
					[
						"a",
						"wd32",
						"hR",
						"cd4",
						"cd2"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"x10",
						"y3"
					],
					[
						"l",
						"r",
						"y4"
					],
					[
						"l",
						"x9",
						"y4"
					],
					[
						"l",
						"x9",
						"y5"
					],
					[
						"a",
						"wd32",
						"hR",
						"0",
						"cd4"
					],
					[
						"l",
						"x3",
						"b"
					],
					[
						"a",
						"wd32",
						"hR",
						"cd4",
						"cd4"
					],
					[
						"l",
						"x2",
						"y4"
					],
					[
						"l",
						"l",
						"y4"
					],
					[
						"l",
						"wd8",
						"y3"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darkenLess",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"x5",
						"hR"
					],
					[
						"a",
						"wd32",
						"hR",
						"0",
						"cd4"
					],
					[
						"l",
						"x3",
						"y1"
					],
					[
						"a",
						"wd32",
						"hR",
						"3cd4",
						"-10800000"
					],
					[
						"l",
						"x5",
						"y2"
					],
					["c"],
					[
						"m",
						"x6",
						"hR"
					],
					[
						"a",
						"wd32",
						"hR",
						"cd2",
						"-5400000"
					],
					[
						"l",
						"x8",
						"y1"
					],
					[
						"a",
						"wd32",
						"hR",
						"3cd4",
						"cd2"
					],
					[
						"l",
						"x6",
						"y2"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"x4",
						"t"
					],
					[
						"a",
						"wd32",
						"hR",
						"3cd4",
						"cd2"
					],
					[
						"l",
						"x3",
						"y1"
					],
					[
						"a",
						"wd32",
						"hR",
						"3cd4",
						"-10800000"
					],
					[
						"l",
						"x8",
						"y2"
					],
					[
						"a",
						"wd32",
						"hR",
						"cd4",
						"-10800000"
					],
					[
						"l",
						"x7",
						"y1"
					],
					[
						"a",
						"wd32",
						"hR",
						"cd4",
						"cd2"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"x10",
						"y3"
					],
					[
						"l",
						"r",
						"y4"
					],
					[
						"l",
						"x9",
						"y4"
					],
					[
						"l",
						"x9",
						"y5"
					],
					[
						"a",
						"wd32",
						"hR",
						"0",
						"cd4"
					],
					[
						"l",
						"x3",
						"b"
					],
					[
						"a",
						"wd32",
						"hR",
						"cd4",
						"cd4"
					],
					[
						"l",
						"x2",
						"y4"
					],
					[
						"l",
						"l",
						"y4"
					],
					[
						"l",
						"wd8",
						"y3"
					],
					["c"],
					[
						"m",
						"x5",
						"hR"
					],
					[
						"l",
						"x5",
						"y2"
					],
					[
						"m",
						"x6",
						"y2"
					],
					[
						"l",
						"x6",
						"hR"
					],
					[
						"m",
						"x2",
						"y4"
					],
					[
						"l",
						"x2",
						"y6"
					],
					[
						"m",
						"x9",
						"y6"
					],
					[
						"l",
						"x9",
						"y4"
					]
				]
			}
		]
	},
	ribbon2: {
		adj: [["adj1", "val 16667"], ["adj2", "val 50000"]],
		gd: [
			["a1", "pin 0 adj1 33333"],
			["a2", "pin 25000 adj2 75000"],
			["x10", "+- r 0 wd8"],
			["dx2", "*/ w a2 200000"],
			["x2", "+- hc 0 dx2"],
			["x9", "+- hc dx2 0"],
			["x3", "+- x2 wd32 0"],
			["x8", "+- x9 0 wd32"],
			["x5", "+- x2 wd8 0"],
			["x6", "+- x9 0 wd8"],
			["x4", "+- x5 0 wd32"],
			["x7", "+- x6 wd32 0"],
			["dy1", "*/ h a1 200000"],
			["y1", "+- b 0 dy1"],
			["dy2", "*/ h a1 100000"],
			["y2", "+- b 0 dy2"],
			["y4", "+- t dy2 0"],
			["y3", "+/ y4 b 2"],
			["hR", "*/ h a1 400000"],
			["y6", "+- b 0 hR"],
			["y7", "+- y1 0 hR"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"b"
					],
					[
						"l",
						"x4",
						"b"
					],
					[
						"a",
						"wd32",
						"hR",
						"cd4",
						"-10800000"
					],
					[
						"l",
						"x3",
						"y1"
					],
					[
						"a",
						"wd32",
						"hR",
						"cd4",
						"cd2"
					],
					[
						"l",
						"x8",
						"y2"
					],
					[
						"a",
						"wd32",
						"hR",
						"3cd4",
						"cd2"
					],
					[
						"l",
						"x7",
						"y1"
					],
					[
						"a",
						"wd32",
						"hR",
						"3cd4",
						"-10800000"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"x10",
						"y3"
					],
					[
						"l",
						"r",
						"y4"
					],
					[
						"l",
						"x9",
						"y4"
					],
					[
						"l",
						"x9",
						"hR"
					],
					[
						"a",
						"wd32",
						"hR",
						"0",
						"-5400000"
					],
					[
						"l",
						"x3",
						"t"
					],
					[
						"a",
						"wd32",
						"hR",
						"3cd4",
						"-5400000"
					],
					[
						"l",
						"x2",
						"y4"
					],
					[
						"l",
						"l",
						"y4"
					],
					[
						"l",
						"wd8",
						"y3"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darkenLess",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"x5",
						"y6"
					],
					[
						"a",
						"wd32",
						"hR",
						"0",
						"-5400000"
					],
					[
						"l",
						"x3",
						"y1"
					],
					[
						"a",
						"wd32",
						"hR",
						"cd4",
						"cd2"
					],
					[
						"l",
						"x5",
						"y2"
					],
					["c"],
					[
						"m",
						"x6",
						"y6"
					],
					[
						"a",
						"wd32",
						"hR",
						"cd2",
						"cd4"
					],
					[
						"l",
						"x8",
						"y1"
					],
					[
						"a",
						"wd32",
						"hR",
						"cd4",
						"-10800000"
					],
					[
						"l",
						"x6",
						"y2"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"b"
					],
					[
						"l",
						"wd8",
						"y3"
					],
					[
						"l",
						"l",
						"y4"
					],
					[
						"l",
						"x2",
						"y4"
					],
					[
						"l",
						"x2",
						"hR"
					],
					[
						"a",
						"wd32",
						"hR",
						"cd2",
						"cd4"
					],
					[
						"l",
						"x8",
						"t"
					],
					[
						"a",
						"wd32",
						"hR",
						"3cd4",
						"cd4"
					],
					[
						"l",
						"x9",
						"y4"
					],
					[
						"l",
						"x9",
						"y4"
					],
					[
						"l",
						"r",
						"y4"
					],
					[
						"l",
						"x10",
						"y3"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"x7",
						"b"
					],
					[
						"a",
						"wd32",
						"hR",
						"cd4",
						"cd2"
					],
					[
						"l",
						"x8",
						"y1"
					],
					[
						"a",
						"wd32",
						"hR",
						"cd4",
						"-10800000"
					],
					[
						"l",
						"x3",
						"y2"
					],
					[
						"a",
						"wd32",
						"hR",
						"3cd4",
						"-10800000"
					],
					[
						"l",
						"x4",
						"y1"
					],
					[
						"a",
						"wd32",
						"hR",
						"3cd4",
						"cd2"
					],
					["c"],
					[
						"m",
						"x5",
						"y2"
					],
					[
						"l",
						"x5",
						"y6"
					],
					[
						"m",
						"x6",
						"y6"
					],
					[
						"l",
						"x6",
						"y2"
					],
					[
						"m",
						"x2",
						"y7"
					],
					[
						"l",
						"x2",
						"y4"
					],
					[
						"m",
						"x9",
						"y4"
					],
					[
						"l",
						"x9",
						"y7"
					]
				]
			}
		]
	},
	rightarrow: {
		adj: [["adj1", "val 50000"], ["adj2", "val 50000"]],
		gd: [
			["maxAdj2", "*/ 100000 w ss"],
			["a1", "pin 0 adj1 100000"],
			["a2", "pin 0 adj2 maxAdj2"],
			["dx1", "*/ ss a2 100000"],
			["x1", "+- r 0 dx1"],
			["dy1", "*/ h a1 200000"],
			["y1", "+- vc 0 dy1"],
			["y2", "+- vc dy1 0"],
			["dx2", "*/ y1 dx1 hd2"],
			["x2", "+- x1 dx2 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"y1"
				],
				[
					"l",
					"x1",
					"y1"
				],
				[
					"l",
					"x1",
					"t"
				],
				[
					"l",
					"r",
					"vc"
				],
				[
					"l",
					"x1",
					"b"
				],
				[
					"l",
					"x1",
					"y2"
				],
				[
					"l",
					"l",
					"y2"
				],
				["c"]
			]
		}]
	},
	rightarrowcallout: {
		adj: [
			["adj1", "val 25000"],
			["adj2", "val 25000"],
			["adj3", "val 25000"],
			["adj4", "val 64977"]
		],
		gd: [
			["maxAdj2", "*/ 50000 h ss"],
			["a2", "pin 0 adj2 maxAdj2"],
			["maxAdj1", "*/ a2 2 1"],
			["a1", "pin 0 adj1 maxAdj1"],
			["maxAdj3", "*/ 100000 w ss"],
			["a3", "pin 0 adj3 maxAdj3"],
			["q2", "*/ a3 ss w"],
			["maxAdj4", "+- 100000 0 q2"],
			["a4", "pin 0 adj4 maxAdj4"],
			["dy1", "*/ ss a2 100000"],
			["dy2", "*/ ss a1 200000"],
			["y1", "+- vc 0 dy1"],
			["y2", "+- vc 0 dy2"],
			["y3", "+- vc dy2 0"],
			["y4", "+- vc dy1 0"],
			["dx3", "*/ ss a3 100000"],
			["x3", "+- r 0 dx3"],
			["x2", "*/ w a4 100000"],
			["x1", "*/ x2 1 2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"l",
					"x2",
					"t"
				],
				[
					"l",
					"x2",
					"y2"
				],
				[
					"l",
					"x3",
					"y2"
				],
				[
					"l",
					"x3",
					"y1"
				],
				[
					"l",
					"r",
					"vc"
				],
				[
					"l",
					"x3",
					"y4"
				],
				[
					"l",
					"x3",
					"y3"
				],
				[
					"l",
					"x2",
					"y3"
				],
				[
					"l",
					"x2",
					"b"
				],
				[
					"l",
					"l",
					"b"
				],
				["c"]
			]
		}]
	},
	rightbrace: {
		adj: [["adj1", "val 8333"], ["adj2", "val 50000"]],
		gd: [
			["a2", "pin 0 adj2 100000"],
			["q1", "+- 100000 0 a2"],
			["q2", "min q1 a2"],
			["q3", "*/ q2 1 2"],
			["maxAdj1", "*/ q3 h ss"],
			["a1", "pin 0 adj1 maxAdj1"],
			["y1", "*/ ss a1 100000"],
			["y3", "*/ h a2 100000"],
			["y2", "+- y3 0 y1"],
			["y4", "+- b 0 y1"],
			["dx1", "cos wd2 2700000"],
			["dy1", "sin y1 2700000"],
			["ir", "+- l dx1 0"],
			["it", "+- y1 0 dy1"],
			["ib", "+- b dy1 y1"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !1,
			extrusionOk: !1,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"a",
					"wd2",
					"y1",
					"3cd4",
					"cd4"
				],
				[
					"l",
					"hc",
					"y2"
				],
				[
					"a",
					"wd2",
					"y1",
					"cd2",
					"-5400000"
				],
				[
					"a",
					"wd2",
					"y1",
					"3cd4",
					"-5400000"
				],
				[
					"l",
					"hc",
					"y4"
				],
				[
					"a",
					"wd2",
					"y1",
					"0",
					"cd4"
				],
				["c"]
			]
		}, {
			w: null,
			h: null,
			fill: "none",
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"a",
					"wd2",
					"y1",
					"3cd4",
					"cd4"
				],
				[
					"l",
					"hc",
					"y2"
				],
				[
					"a",
					"wd2",
					"y1",
					"cd2",
					"-5400000"
				],
				[
					"a",
					"wd2",
					"y1",
					"3cd4",
					"-5400000"
				],
				[
					"l",
					"hc",
					"y4"
				],
				[
					"a",
					"wd2",
					"y1",
					"0",
					"cd4"
				]
			]
		}]
	},
	rightbracket: {
		adj: [["adj", "val 8333"]],
		gd: [
			["maxAdj", "*/ 50000 h ss"],
			["a", "pin 0 adj maxAdj"],
			["y1", "*/ ss a 100000"],
			["y2", "+- b 0 y1"],
			["dx1", "cos w 2700000"],
			["dy1", "sin y1 2700000"],
			["ir", "+- l dx1 0"],
			["it", "+- y1 0 dy1"],
			["ib", "+- b dy1 y1"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !1,
			extrusionOk: !1,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"a",
					"w",
					"y1",
					"3cd4",
					"cd4"
				],
				[
					"l",
					"r",
					"y2"
				],
				[
					"a",
					"w",
					"y1",
					"0",
					"cd4"
				],
				["c"]
			]
		}, {
			w: null,
			h: null,
			fill: "none",
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"a",
					"w",
					"y1",
					"3cd4",
					"cd4"
				],
				[
					"l",
					"r",
					"y2"
				],
				[
					"a",
					"w",
					"y1",
					"0",
					"cd4"
				]
			]
		}]
	},
	round1rect: {
		adj: [["adj", "val 16667"]],
		gd: [
			["a", "pin 0 adj 50000"],
			["dx1", "*/ ss a 100000"],
			["x1", "+- r 0 dx1"],
			["idx", "*/ dx1 29289 100000"],
			["ir", "+- r 0 idx"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"l",
					"x1",
					"t"
				],
				[
					"a",
					"dx1",
					"dx1",
					"3cd4",
					"cd4"
				],
				[
					"l",
					"r",
					"b"
				],
				[
					"l",
					"l",
					"b"
				],
				["c"]
			]
		}]
	},
	round2diagrect: {
		adj: [["adj1", "val 16667"], ["adj2", "val 0"]],
		gd: [
			["a1", "pin 0 adj1 50000"],
			["a2", "pin 0 adj2 50000"],
			["x1", "*/ ss a1 100000"],
			["y1", "+- b 0 x1"],
			["a", "*/ ss a2 100000"],
			["x2", "+- r 0 a"],
			["y2", "+- b 0 a"],
			["dx1", "*/ x1 29289 100000"],
			["dx2", "*/ a 29289 100000"],
			["d", "+- dx1 0 dx2"],
			["dx", "?: d dx1 dx2"],
			["ir", "+- r 0 dx"],
			["ib", "+- b 0 dx"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"x1",
					"t"
				],
				[
					"l",
					"x2",
					"t"
				],
				[
					"a",
					"a",
					"a",
					"3cd4",
					"cd4"
				],
				[
					"l",
					"r",
					"y1"
				],
				[
					"a",
					"x1",
					"x1",
					"0",
					"cd4"
				],
				[
					"l",
					"a",
					"b"
				],
				[
					"a",
					"a",
					"a",
					"cd4",
					"cd4"
				],
				[
					"l",
					"l",
					"x1"
				],
				[
					"a",
					"x1",
					"x1",
					"cd2",
					"cd4"
				],
				["c"]
			]
		}]
	},
	round2samerect: {
		adj: [["adj1", "val 16667"], ["adj2", "val 0"]],
		gd: [
			["a1", "pin 0 adj1 50000"],
			["a2", "pin 0 adj2 50000"],
			["tx1", "*/ ss a1 100000"],
			["tx2", "+- r 0 tx1"],
			["bx1", "*/ ss a2 100000"],
			["bx2", "+- r 0 bx1"],
			["by1", "+- b 0 bx1"],
			["d", "+- tx1 0 bx1"],
			["tdx", "*/ tx1 29289 100000"],
			["bdx", "*/ bx1 29289 100000"],
			["il", "?: d tdx bdx"],
			["ir", "+- r 0 il"],
			["ib", "+- b 0 bdx"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"tx1",
					"t"
				],
				[
					"l",
					"tx2",
					"t"
				],
				[
					"a",
					"tx1",
					"tx1",
					"3cd4",
					"cd4"
				],
				[
					"l",
					"r",
					"by1"
				],
				[
					"a",
					"bx1",
					"bx1",
					"0",
					"cd4"
				],
				[
					"l",
					"bx1",
					"b"
				],
				[
					"a",
					"bx1",
					"bx1",
					"cd4",
					"cd4"
				],
				[
					"l",
					"l",
					"tx1"
				],
				[
					"a",
					"tx1",
					"tx1",
					"cd2",
					"cd4"
				],
				["c"]
			]
		}]
	},
	roundrect: {
		adj: [["adj", "val 16667"]],
		gd: [
			["a", "pin 0 adj 50000"],
			["x1", "*/ ss a 100000"],
			["x2", "+- r 0 x1"],
			["y2", "+- b 0 x1"],
			["il", "*/ x1 29289 100000"],
			["ir", "+- r 0 il"],
			["ib", "+- b 0 il"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"x1"
				],
				[
					"a",
					"x1",
					"x1",
					"cd2",
					"cd4"
				],
				[
					"l",
					"x2",
					"t"
				],
				[
					"a",
					"x1",
					"x1",
					"3cd4",
					"cd4"
				],
				[
					"l",
					"r",
					"y2"
				],
				[
					"a",
					"x1",
					"x1",
					"0",
					"cd4"
				],
				[
					"l",
					"x1",
					"b"
				],
				[
					"a",
					"x1",
					"x1",
					"cd4",
					"cd4"
				],
				["c"]
			]
		}]
	},
	rttriangle: {
		adj: [],
		gd: [
			["it", "*/ h 7 12"],
			["ir", "*/ w 7 12"],
			["ib", "*/ h 11 12"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"b"
				],
				[
					"l",
					"l",
					"t"
				],
				[
					"l",
					"r",
					"b"
				],
				["c"]
			]
		}]
	},
	smileyface: {
		adj: [["adj", "val 4653"]],
		gd: [
			["a", "pin -4653 adj 4653"],
			["x1", "*/ w 4969 21699"],
			["x2", "*/ w 6215 21600"],
			["x3", "*/ w 13135 21600"],
			["x4", "*/ w 16640 21600"],
			["y1", "*/ h 7570 21600"],
			["y3", "*/ h 16515 21600"],
			["dy2", "*/ h a 100000"],
			["y2", "+- y3 0 dy2"],
			["y4", "+- y3 dy2 0"],
			["dy3", "*/ h a 50000"],
			["y5", "+- y4 dy3 0"],
			["idx", "cos wd2 2700000"],
			["idy", "sin hd2 2700000"],
			["il", "+- hc 0 idx"],
			["ir", "+- hc idx 0"],
			["it", "+- vc 0 idy"],
			["ib", "+- vc idy 0"],
			["wR", "*/ w 1125 21600"],
			["hR", "*/ h 1125 21600"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"l",
						"vc"
					],
					[
						"a",
						"wd2",
						"hd2",
						"cd2",
						"21600000"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darkenLess",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"x2",
						"y1"
					],
					[
						"a",
						"wR",
						"hR",
						"cd2",
						"21600000"
					],
					[
						"m",
						"x3",
						"y1"
					],
					[
						"a",
						"wR",
						"hR",
						"cd2",
						"21600000"
					]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [[
					"m",
					"x1",
					"y2"
				], [
					"Q",
					"hc",
					"y5",
					"x4",
					"y2"
				]]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"l",
						"vc"
					],
					[
						"a",
						"wd2",
						"hd2",
						"cd2",
						"21600000"
					],
					["c"]
				]
			}
		]
	},
	snip1rect: {
		adj: [["adj", "val 16667"]],
		gd: [
			["a", "pin 0 adj 50000"],
			["dx1", "*/ ss a 100000"],
			["x1", "+- r 0 dx1"],
			["it", "*/ dx1 1 2"],
			["ir", "+/ x1 r 2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"l",
					"x1",
					"t"
				],
				[
					"l",
					"r",
					"dx1"
				],
				[
					"l",
					"r",
					"b"
				],
				[
					"l",
					"l",
					"b"
				],
				["c"]
			]
		}]
	},
	snip2diagrect: {
		adj: [["adj1", "val 0"], ["adj2", "val 16667"]],
		gd: [
			["a1", "pin 0 adj1 50000"],
			["a2", "pin 0 adj2 50000"],
			["lx1", "*/ ss a1 100000"],
			["lx2", "+- r 0 lx1"],
			["ly1", "+- b 0 lx1"],
			["rx1", "*/ ss a2 100000"],
			["rx2", "+- r 0 rx1"],
			["ry1", "+- b 0 rx1"],
			["d", "+- lx1 0 rx1"],
			["dx", "?: d lx1 rx1"],
			["il", "*/ dx 1 2"],
			["ir", "+- r 0 il"],
			["ib", "+- b 0 il"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"lx1",
					"t"
				],
				[
					"l",
					"rx2",
					"t"
				],
				[
					"l",
					"r",
					"rx1"
				],
				[
					"l",
					"r",
					"ly1"
				],
				[
					"l",
					"lx2",
					"b"
				],
				[
					"l",
					"rx1",
					"b"
				],
				[
					"l",
					"l",
					"ry1"
				],
				[
					"l",
					"l",
					"lx1"
				],
				["c"]
			]
		}]
	},
	snip2samerect: {
		adj: [["adj1", "val 16667"], ["adj2", "val 0"]],
		gd: [
			["a1", "pin 0 adj1 50000"],
			["a2", "pin 0 adj2 50000"],
			["tx1", "*/ ss a1 100000"],
			["tx2", "+- r 0 tx1"],
			["bx1", "*/ ss a2 100000"],
			["bx2", "+- r 0 bx1"],
			["by1", "+- b 0 bx1"],
			["d", "+- tx1 0 bx1"],
			["dx", "?: d tx1 bx1"],
			["il", "*/ dx 1 2"],
			["ir", "+- r 0 il"],
			["it", "*/ tx1 1 2"],
			["ib", "+/ by1 b 2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"tx1",
					"t"
				],
				[
					"l",
					"tx2",
					"t"
				],
				[
					"l",
					"r",
					"tx1"
				],
				[
					"l",
					"r",
					"by1"
				],
				[
					"l",
					"bx2",
					"b"
				],
				[
					"l",
					"bx1",
					"b"
				],
				[
					"l",
					"l",
					"by1"
				],
				[
					"l",
					"l",
					"tx1"
				],
				["c"]
			]
		}]
	},
	sniproundrect: {
		adj: [["adj1", "val 16667"], ["adj2", "val 16667"]],
		gd: [
			["a1", "pin 0 adj1 50000"],
			["a2", "pin 0 adj2 50000"],
			["x1", "*/ ss a1 100000"],
			["dx2", "*/ ss a2 100000"],
			["x2", "+- r 0 dx2"],
			["il", "*/ x1 29289 100000"],
			["ir", "+/ x2 r 2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"x1",
					"t"
				],
				[
					"l",
					"x2",
					"t"
				],
				[
					"l",
					"r",
					"dx2"
				],
				[
					"l",
					"r",
					"b"
				],
				[
					"l",
					"l",
					"b"
				],
				[
					"l",
					"l",
					"x1"
				],
				[
					"a",
					"x1",
					"x1",
					"cd2",
					"cd4"
				],
				["c"]
			]
		}]
	},
	squaretabs: {
		adj: [],
		gd: [
			["md", "mod w h 0"],
			["dx", "*/ 1 md 20"],
			["y1", "+- 0 b dx"],
			["x1", "+- 0 r dx"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"l",
						"t"
					],
					[
						"l",
						"dx",
						"t"
					],
					[
						"l",
						"dx",
						"dx"
					],
					[
						"l",
						"l",
						"dx"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"l",
						"y1"
					],
					[
						"l",
						"dx",
						"y1"
					],
					[
						"l",
						"dx",
						"b"
					],
					[
						"l",
						"l",
						"b"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"x1",
						"t"
					],
					[
						"l",
						"r",
						"t"
					],
					[
						"l",
						"r",
						"dx"
					],
					[
						"l",
						"x1",
						"dx"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [
					[
						"m",
						"x1",
						"y1"
					],
					[
						"l",
						"r",
						"y1"
					],
					[
						"l",
						"r",
						"b"
					],
					[
						"l",
						"x1",
						"b"
					],
					["c"]
				]
			}
		]
	},
	star10: {
		adj: [["adj", "val 42533"], ["hf", "val 105146"]],
		gd: [
			["a", "pin 0 adj 50000"],
			["swd2", "*/ wd2 hf 100000"],
			["dx1", "*/ swd2 95106 100000"],
			["dx2", "*/ swd2 58779 100000"],
			["x1", "+- hc 0 dx1"],
			["x2", "+- hc 0 dx2"],
			["x3", "+- hc dx2 0"],
			["x4", "+- hc dx1 0"],
			["dy1", "*/ hd2 80902 100000"],
			["dy2", "*/ hd2 30902 100000"],
			["y1", "+- vc 0 dy1"],
			["y2", "+- vc 0 dy2"],
			["y3", "+- vc dy2 0"],
			["y4", "+- vc dy1 0"],
			["iwd2", "*/ swd2 a 50000"],
			["ihd2", "*/ hd2 a 50000"],
			["sdx1", "*/ iwd2 80902 100000"],
			["sdx2", "*/ iwd2 30902 100000"],
			["sdy1", "*/ ihd2 95106 100000"],
			["sdy2", "*/ ihd2 58779 100000"],
			["sx1", "+- hc 0 iwd2"],
			["sx2", "+- hc 0 sdx1"],
			["sx3", "+- hc 0 sdx2"],
			["sx4", "+- hc sdx2 0"],
			["sx5", "+- hc sdx1 0"],
			["sx6", "+- hc iwd2 0"],
			["sy1", "+- vc 0 sdy1"],
			["sy2", "+- vc 0 sdy2"],
			["sy3", "+- vc sdy2 0"],
			["sy4", "+- vc sdy1 0"],
			["yAdj", "+- vc 0 ihd2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"x1",
					"y2"
				],
				[
					"l",
					"sx2",
					"sy2"
				],
				[
					"l",
					"x2",
					"y1"
				],
				[
					"l",
					"sx3",
					"sy1"
				],
				[
					"l",
					"hc",
					"t"
				],
				[
					"l",
					"sx4",
					"sy1"
				],
				[
					"l",
					"x3",
					"y1"
				],
				[
					"l",
					"sx5",
					"sy2"
				],
				[
					"l",
					"x4",
					"y2"
				],
				[
					"l",
					"sx6",
					"vc"
				],
				[
					"l",
					"x4",
					"y3"
				],
				[
					"l",
					"sx5",
					"sy3"
				],
				[
					"l",
					"x3",
					"y4"
				],
				[
					"l",
					"sx4",
					"sy4"
				],
				[
					"l",
					"hc",
					"b"
				],
				[
					"l",
					"sx3",
					"sy4"
				],
				[
					"l",
					"x2",
					"y4"
				],
				[
					"l",
					"sx2",
					"sy3"
				],
				[
					"l",
					"x1",
					"y3"
				],
				[
					"l",
					"sx1",
					"vc"
				],
				["c"]
			]
		}]
	},
	star12: {
		adj: [["adj", "val 37500"]],
		gd: [
			["a", "pin 0 adj 50000"],
			["dx1", "cos wd2 1800000"],
			["dy1", "sin hd2 3600000"],
			["x1", "+- hc 0 dx1"],
			["x3", "*/ w 3 4"],
			["x4", "+- hc dx1 0"],
			["y1", "+- vc 0 dy1"],
			["y3", "*/ h 3 4"],
			["y4", "+- vc dy1 0"],
			["iwd2", "*/ wd2 a 50000"],
			["ihd2", "*/ hd2 a 50000"],
			["sdx1", "cos iwd2 900000"],
			["sdx2", "cos iwd2 2700000"],
			["sdx3", "cos iwd2 4500000"],
			["sdy1", "sin ihd2 4500000"],
			["sdy2", "sin ihd2 2700000"],
			["sdy3", "sin ihd2 900000"],
			["sx1", "+- hc 0 sdx1"],
			["sx2", "+- hc 0 sdx2"],
			["sx3", "+- hc 0 sdx3"],
			["sx4", "+- hc sdx3 0"],
			["sx5", "+- hc sdx2 0"],
			["sx6", "+- hc sdx1 0"],
			["sy1", "+- vc 0 sdy1"],
			["sy2", "+- vc 0 sdy2"],
			["sy3", "+- vc 0 sdy3"],
			["sy4", "+- vc sdy3 0"],
			["sy5", "+- vc sdy2 0"],
			["sy6", "+- vc sdy1 0"],
			["yAdj", "+- vc 0 ihd2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"vc"
				],
				[
					"l",
					"sx1",
					"sy3"
				],
				[
					"l",
					"x1",
					"hd4"
				],
				[
					"l",
					"sx2",
					"sy2"
				],
				[
					"l",
					"wd4",
					"y1"
				],
				[
					"l",
					"sx3",
					"sy1"
				],
				[
					"l",
					"hc",
					"t"
				],
				[
					"l",
					"sx4",
					"sy1"
				],
				[
					"l",
					"x3",
					"y1"
				],
				[
					"l",
					"sx5",
					"sy2"
				],
				[
					"l",
					"x4",
					"hd4"
				],
				[
					"l",
					"sx6",
					"sy3"
				],
				[
					"l",
					"r",
					"vc"
				],
				[
					"l",
					"sx6",
					"sy4"
				],
				[
					"l",
					"x4",
					"y3"
				],
				[
					"l",
					"sx5",
					"sy5"
				],
				[
					"l",
					"x3",
					"y4"
				],
				[
					"l",
					"sx4",
					"sy6"
				],
				[
					"l",
					"hc",
					"b"
				],
				[
					"l",
					"sx3",
					"sy6"
				],
				[
					"l",
					"wd4",
					"y4"
				],
				[
					"l",
					"sx2",
					"sy5"
				],
				[
					"l",
					"x1",
					"y3"
				],
				[
					"l",
					"sx1",
					"sy4"
				],
				["c"]
			]
		}]
	},
	star16: {
		adj: [["adj", "val 37500"]],
		gd: [
			["a", "pin 0 adj 50000"],
			["dx1", "*/ wd2 92388 100000"],
			["dx2", "*/ wd2 70711 100000"],
			["dx3", "*/ wd2 38268 100000"],
			["dy1", "*/ hd2 92388 100000"],
			["dy2", "*/ hd2 70711 100000"],
			["dy3", "*/ hd2 38268 100000"],
			["x1", "+- hc 0 dx1"],
			["x2", "+- hc 0 dx2"],
			["x3", "+- hc 0 dx3"],
			["x4", "+- hc dx3 0"],
			["x5", "+- hc dx2 0"],
			["x6", "+- hc dx1 0"],
			["y1", "+- vc 0 dy1"],
			["y2", "+- vc 0 dy2"],
			["y3", "+- vc 0 dy3"],
			["y4", "+- vc dy3 0"],
			["y5", "+- vc dy2 0"],
			["y6", "+- vc dy1 0"],
			["iwd2", "*/ wd2 a 50000"],
			["ihd2", "*/ hd2 a 50000"],
			["sdx1", "*/ iwd2 98079 100000"],
			["sdx2", "*/ iwd2 83147 100000"],
			["sdx3", "*/ iwd2 55557 100000"],
			["sdx4", "*/ iwd2 19509 100000"],
			["sdy1", "*/ ihd2 98079 100000"],
			["sdy2", "*/ ihd2 83147 100000"],
			["sdy3", "*/ ihd2 55557 100000"],
			["sdy4", "*/ ihd2 19509 100000"],
			["sx1", "+- hc 0 sdx1"],
			["sx2", "+- hc 0 sdx2"],
			["sx3", "+- hc 0 sdx3"],
			["sx4", "+- hc 0 sdx4"],
			["sx5", "+- hc sdx4 0"],
			["sx6", "+- hc sdx3 0"],
			["sx7", "+- hc sdx2 0"],
			["sx8", "+- hc sdx1 0"],
			["sy1", "+- vc 0 sdy1"],
			["sy2", "+- vc 0 sdy2"],
			["sy3", "+- vc 0 sdy3"],
			["sy4", "+- vc 0 sdy4"],
			["sy5", "+- vc sdy4 0"],
			["sy6", "+- vc sdy3 0"],
			["sy7", "+- vc sdy2 0"],
			["sy8", "+- vc sdy1 0"],
			["idx", "cos iwd2 2700000"],
			["idy", "sin ihd2 2700000"],
			["il", "+- hc 0 idx"],
			["it", "+- vc 0 idy"],
			["ir", "+- hc idx 0"],
			["ib", "+- vc idy 0"],
			["yAdj", "+- vc 0 ihd2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"vc"
				],
				[
					"l",
					"sx1",
					"sy4"
				],
				[
					"l",
					"x1",
					"y3"
				],
				[
					"l",
					"sx2",
					"sy3"
				],
				[
					"l",
					"x2",
					"y2"
				],
				[
					"l",
					"sx3",
					"sy2"
				],
				[
					"l",
					"x3",
					"y1"
				],
				[
					"l",
					"sx4",
					"sy1"
				],
				[
					"l",
					"hc",
					"t"
				],
				[
					"l",
					"sx5",
					"sy1"
				],
				[
					"l",
					"x4",
					"y1"
				],
				[
					"l",
					"sx6",
					"sy2"
				],
				[
					"l",
					"x5",
					"y2"
				],
				[
					"l",
					"sx7",
					"sy3"
				],
				[
					"l",
					"x6",
					"y3"
				],
				[
					"l",
					"sx8",
					"sy4"
				],
				[
					"l",
					"r",
					"vc"
				],
				[
					"l",
					"sx8",
					"sy5"
				],
				[
					"l",
					"x6",
					"y4"
				],
				[
					"l",
					"sx7",
					"sy6"
				],
				[
					"l",
					"x5",
					"y5"
				],
				[
					"l",
					"sx6",
					"sy7"
				],
				[
					"l",
					"x4",
					"y6"
				],
				[
					"l",
					"sx5",
					"sy8"
				],
				[
					"l",
					"hc",
					"b"
				],
				[
					"l",
					"sx4",
					"sy8"
				],
				[
					"l",
					"x3",
					"y6"
				],
				[
					"l",
					"sx3",
					"sy7"
				],
				[
					"l",
					"x2",
					"y5"
				],
				[
					"l",
					"sx2",
					"sy6"
				],
				[
					"l",
					"x1",
					"y4"
				],
				[
					"l",
					"sx1",
					"sy5"
				],
				["c"]
			]
		}]
	},
	star24: {
		adj: [["adj", "val 37500"]],
		gd: [
			["a", "pin 0 adj 50000"],
			["dx1", "cos wd2 900000"],
			["dx2", "cos wd2 1800000"],
			["dx3", "cos wd2 2700000"],
			["dx4", "val wd4"],
			["dx5", "cos wd2 4500000"],
			["dy1", "sin hd2 4500000"],
			["dy2", "sin hd2 3600000"],
			["dy3", "sin hd2 2700000"],
			["dy4", "val hd4"],
			["dy5", "sin hd2 900000"],
			["x1", "+- hc 0 dx1"],
			["x2", "+- hc 0 dx2"],
			["x3", "+- hc 0 dx3"],
			["x4", "+- hc 0 dx4"],
			["x5", "+- hc 0 dx5"],
			["x6", "+- hc dx5 0"],
			["x7", "+- hc dx4 0"],
			["x8", "+- hc dx3 0"],
			["x9", "+- hc dx2 0"],
			["x10", "+- hc dx1 0"],
			["y1", "+- vc 0 dy1"],
			["y2", "+- vc 0 dy2"],
			["y3", "+- vc 0 dy3"],
			["y4", "+- vc 0 dy4"],
			["y5", "+- vc 0 dy5"],
			["y6", "+- vc dy5 0"],
			["y7", "+- vc dy4 0"],
			["y8", "+- vc dy3 0"],
			["y9", "+- vc dy2 0"],
			["y10", "+- vc dy1 0"],
			["iwd2", "*/ wd2 a 50000"],
			["ihd2", "*/ hd2 a 50000"],
			["sdx1", "*/ iwd2 99144 100000"],
			["sdx2", "*/ iwd2 92388 100000"],
			["sdx3", "*/ iwd2 79335 100000"],
			["sdx4", "*/ iwd2 60876 100000"],
			["sdx5", "*/ iwd2 38268 100000"],
			["sdx6", "*/ iwd2 13053 100000"],
			["sdy1", "*/ ihd2 99144 100000"],
			["sdy2", "*/ ihd2 92388 100000"],
			["sdy3", "*/ ihd2 79335 100000"],
			["sdy4", "*/ ihd2 60876 100000"],
			["sdy5", "*/ ihd2 38268 100000"],
			["sdy6", "*/ ihd2 13053 100000"],
			["sx1", "+- hc 0 sdx1"],
			["sx2", "+- hc 0 sdx2"],
			["sx3", "+- hc 0 sdx3"],
			["sx4", "+- hc 0 sdx4"],
			["sx5", "+- hc 0 sdx5"],
			["sx6", "+- hc 0 sdx6"],
			["sx7", "+- hc sdx6 0"],
			["sx8", "+- hc sdx5 0"],
			["sx9", "+- hc sdx4 0"],
			["sx10", "+- hc sdx3 0"],
			["sx11", "+- hc sdx2 0"],
			["sx12", "+- hc sdx1 0"],
			["sy1", "+- vc 0 sdy1"],
			["sy2", "+- vc 0 sdy2"],
			["sy3", "+- vc 0 sdy3"],
			["sy4", "+- vc 0 sdy4"],
			["sy5", "+- vc 0 sdy5"],
			["sy6", "+- vc 0 sdy6"],
			["sy7", "+- vc sdy6 0"],
			["sy8", "+- vc sdy5 0"],
			["sy9", "+- vc sdy4 0"],
			["sy10", "+- vc sdy3 0"],
			["sy11", "+- vc sdy2 0"],
			["sy12", "+- vc sdy1 0"],
			["idx", "cos iwd2 2700000"],
			["idy", "sin ihd2 2700000"],
			["il", "+- hc 0 idx"],
			["it", "+- vc 0 idy"],
			["ir", "+- hc idx 0"],
			["ib", "+- vc idy 0"],
			["yAdj", "+- vc 0 ihd2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"vc"
				],
				[
					"l",
					"sx1",
					"sy6"
				],
				[
					"l",
					"x1",
					"y5"
				],
				[
					"l",
					"sx2",
					"sy5"
				],
				[
					"l",
					"x2",
					"y4"
				],
				[
					"l",
					"sx3",
					"sy4"
				],
				[
					"l",
					"x3",
					"y3"
				],
				[
					"l",
					"sx4",
					"sy3"
				],
				[
					"l",
					"x4",
					"y2"
				],
				[
					"l",
					"sx5",
					"sy2"
				],
				[
					"l",
					"x5",
					"y1"
				],
				[
					"l",
					"sx6",
					"sy1"
				],
				[
					"l",
					"hc",
					"t"
				],
				[
					"l",
					"sx7",
					"sy1"
				],
				[
					"l",
					"x6",
					"y1"
				],
				[
					"l",
					"sx8",
					"sy2"
				],
				[
					"l",
					"x7",
					"y2"
				],
				[
					"l",
					"sx9",
					"sy3"
				],
				[
					"l",
					"x8",
					"y3"
				],
				[
					"l",
					"sx10",
					"sy4"
				],
				[
					"l",
					"x9",
					"y4"
				],
				[
					"l",
					"sx11",
					"sy5"
				],
				[
					"l",
					"x10",
					"y5"
				],
				[
					"l",
					"sx12",
					"sy6"
				],
				[
					"l",
					"r",
					"vc"
				],
				[
					"l",
					"sx12",
					"sy7"
				],
				[
					"l",
					"x10",
					"y6"
				],
				[
					"l",
					"sx11",
					"sy8"
				],
				[
					"l",
					"x9",
					"y7"
				],
				[
					"l",
					"sx10",
					"sy9"
				],
				[
					"l",
					"x8",
					"y8"
				],
				[
					"l",
					"sx9",
					"sy10"
				],
				[
					"l",
					"x7",
					"y9"
				],
				[
					"l",
					"sx8",
					"sy11"
				],
				[
					"l",
					"x6",
					"y10"
				],
				[
					"l",
					"sx7",
					"sy12"
				],
				[
					"l",
					"hc",
					"b"
				],
				[
					"l",
					"sx6",
					"sy12"
				],
				[
					"l",
					"x5",
					"y10"
				],
				[
					"l",
					"sx5",
					"sy11"
				],
				[
					"l",
					"x4",
					"y9"
				],
				[
					"l",
					"sx4",
					"sy10"
				],
				[
					"l",
					"x3",
					"y8"
				],
				[
					"l",
					"sx3",
					"sy9"
				],
				[
					"l",
					"x2",
					"y7"
				],
				[
					"l",
					"sx2",
					"sy8"
				],
				[
					"l",
					"x1",
					"y6"
				],
				[
					"l",
					"sx1",
					"sy7"
				],
				["c"]
			]
		}]
	},
	star32: {
		adj: [["adj", "val 37500"]],
		gd: [
			["a", "pin 0 adj 50000"],
			["dx1", "*/ wd2 98079 100000"],
			["dx2", "*/ wd2 92388 100000"],
			["dx3", "*/ wd2 83147 100000"],
			["dx4", "cos wd2 2700000"],
			["dx5", "*/ wd2 55557 100000"],
			["dx6", "*/ wd2 38268 100000"],
			["dx7", "*/ wd2 19509 100000"],
			["dy1", "*/ hd2 98079 100000"],
			["dy2", "*/ hd2 92388 100000"],
			["dy3", "*/ hd2 83147 100000"],
			["dy4", "sin hd2 2700000"],
			["dy5", "*/ hd2 55557 100000"],
			["dy6", "*/ hd2 38268 100000"],
			["dy7", "*/ hd2 19509 100000"],
			["x1", "+- hc 0 dx1"],
			["x2", "+- hc 0 dx2"],
			["x3", "+- hc 0 dx3"],
			["x4", "+- hc 0 dx4"],
			["x5", "+- hc 0 dx5"],
			["x6", "+- hc 0 dx6"],
			["x7", "+- hc 0 dx7"],
			["x8", "+- hc dx7 0"],
			["x9", "+- hc dx6 0"],
			["x10", "+- hc dx5 0"],
			["x11", "+- hc dx4 0"],
			["x12", "+- hc dx3 0"],
			["x13", "+- hc dx2 0"],
			["x14", "+- hc dx1 0"],
			["y1", "+- vc 0 dy1"],
			["y2", "+- vc 0 dy2"],
			["y3", "+- vc 0 dy3"],
			["y4", "+- vc 0 dy4"],
			["y5", "+- vc 0 dy5"],
			["y6", "+- vc 0 dy6"],
			["y7", "+- vc 0 dy7"],
			["y8", "+- vc dy7 0"],
			["y9", "+- vc dy6 0"],
			["y10", "+- vc dy5 0"],
			["y11", "+- vc dy4 0"],
			["y12", "+- vc dy3 0"],
			["y13", "+- vc dy2 0"],
			["y14", "+- vc dy1 0"],
			["iwd2", "*/ wd2 a 50000"],
			["ihd2", "*/ hd2 a 50000"],
			["sdx1", "*/ iwd2 99518 100000"],
			["sdx2", "*/ iwd2 95694 100000"],
			["sdx3", "*/ iwd2 88192 100000"],
			["sdx4", "*/ iwd2 77301 100000"],
			["sdx5", "*/ iwd2 63439 100000"],
			["sdx6", "*/ iwd2 47140 100000"],
			["sdx7", "*/ iwd2 29028 100000"],
			["sdx8", "*/ iwd2 9802 100000"],
			["sdy1", "*/ ihd2 99518 100000"],
			["sdy2", "*/ ihd2 95694 100000"],
			["sdy3", "*/ ihd2 88192 100000"],
			["sdy4", "*/ ihd2 77301 100000"],
			["sdy5", "*/ ihd2 63439 100000"],
			["sdy6", "*/ ihd2 47140 100000"],
			["sdy7", "*/ ihd2 29028 100000"],
			["sdy8", "*/ ihd2 9802 100000"],
			["sx1", "+- hc 0 sdx1"],
			["sx2", "+- hc 0 sdx2"],
			["sx3", "+- hc 0 sdx3"],
			["sx4", "+- hc 0 sdx4"],
			["sx5", "+- hc 0 sdx5"],
			["sx6", "+- hc 0 sdx6"],
			["sx7", "+- hc 0 sdx7"],
			["sx8", "+- hc 0 sdx8"],
			["sx9", "+- hc sdx8 0"],
			["sx10", "+- hc sdx7 0"],
			["sx11", "+- hc sdx6 0"],
			["sx12", "+- hc sdx5 0"],
			["sx13", "+- hc sdx4 0"],
			["sx14", "+- hc sdx3 0"],
			["sx15", "+- hc sdx2 0"],
			["sx16", "+- hc sdx1 0"],
			["sy1", "+- vc 0 sdy1"],
			["sy2", "+- vc 0 sdy2"],
			["sy3", "+- vc 0 sdy3"],
			["sy4", "+- vc 0 sdy4"],
			["sy5", "+- vc 0 sdy5"],
			["sy6", "+- vc 0 sdy6"],
			["sy7", "+- vc 0 sdy7"],
			["sy8", "+- vc 0 sdy8"],
			["sy9", "+- vc sdy8 0"],
			["sy10", "+- vc sdy7 0"],
			["sy11", "+- vc sdy6 0"],
			["sy12", "+- vc sdy5 0"],
			["sy13", "+- vc sdy4 0"],
			["sy14", "+- vc sdy3 0"],
			["sy15", "+- vc sdy2 0"],
			["sy16", "+- vc sdy1 0"],
			["idx", "cos iwd2 2700000"],
			["idy", "sin ihd2 2700000"],
			["il", "+- hc 0 idx"],
			["it", "+- vc 0 idy"],
			["ir", "+- hc idx 0"],
			["ib", "+- vc idy 0"],
			["yAdj", "+- vc 0 ihd2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"vc"
				],
				[
					"l",
					"sx1",
					"sy8"
				],
				[
					"l",
					"x1",
					"y7"
				],
				[
					"l",
					"sx2",
					"sy7"
				],
				[
					"l",
					"x2",
					"y6"
				],
				[
					"l",
					"sx3",
					"sy6"
				],
				[
					"l",
					"x3",
					"y5"
				],
				[
					"l",
					"sx4",
					"sy5"
				],
				[
					"l",
					"x4",
					"y4"
				],
				[
					"l",
					"sx5",
					"sy4"
				],
				[
					"l",
					"x5",
					"y3"
				],
				[
					"l",
					"sx6",
					"sy3"
				],
				[
					"l",
					"x6",
					"y2"
				],
				[
					"l",
					"sx7",
					"sy2"
				],
				[
					"l",
					"x7",
					"y1"
				],
				[
					"l",
					"sx8",
					"sy1"
				],
				[
					"l",
					"hc",
					"t"
				],
				[
					"l",
					"sx9",
					"sy1"
				],
				[
					"l",
					"x8",
					"y1"
				],
				[
					"l",
					"sx10",
					"sy2"
				],
				[
					"l",
					"x9",
					"y2"
				],
				[
					"l",
					"sx11",
					"sy3"
				],
				[
					"l",
					"x10",
					"y3"
				],
				[
					"l",
					"sx12",
					"sy4"
				],
				[
					"l",
					"x11",
					"y4"
				],
				[
					"l",
					"sx13",
					"sy5"
				],
				[
					"l",
					"x12",
					"y5"
				],
				[
					"l",
					"sx14",
					"sy6"
				],
				[
					"l",
					"x13",
					"y6"
				],
				[
					"l",
					"sx15",
					"sy7"
				],
				[
					"l",
					"x14",
					"y7"
				],
				[
					"l",
					"sx16",
					"sy8"
				],
				[
					"l",
					"r",
					"vc"
				],
				[
					"l",
					"sx16",
					"sy9"
				],
				[
					"l",
					"x14",
					"y8"
				],
				[
					"l",
					"sx15",
					"sy10"
				],
				[
					"l",
					"x13",
					"y9"
				],
				[
					"l",
					"sx14",
					"sy11"
				],
				[
					"l",
					"x12",
					"y10"
				],
				[
					"l",
					"sx13",
					"sy12"
				],
				[
					"l",
					"x11",
					"y11"
				],
				[
					"l",
					"sx12",
					"sy13"
				],
				[
					"l",
					"x10",
					"y12"
				],
				[
					"l",
					"sx11",
					"sy14"
				],
				[
					"l",
					"x9",
					"y13"
				],
				[
					"l",
					"sx10",
					"sy15"
				],
				[
					"l",
					"x8",
					"y14"
				],
				[
					"l",
					"sx9",
					"sy16"
				],
				[
					"l",
					"hc",
					"b"
				],
				[
					"l",
					"sx8",
					"sy16"
				],
				[
					"l",
					"x7",
					"y14"
				],
				[
					"l",
					"sx7",
					"sy15"
				],
				[
					"l",
					"x6",
					"y13"
				],
				[
					"l",
					"sx6",
					"sy14"
				],
				[
					"l",
					"x5",
					"y12"
				],
				[
					"l",
					"sx5",
					"sy13"
				],
				[
					"l",
					"x4",
					"y11"
				],
				[
					"l",
					"sx4",
					"sy12"
				],
				[
					"l",
					"x3",
					"y10"
				],
				[
					"l",
					"sx3",
					"sy11"
				],
				[
					"l",
					"x2",
					"y9"
				],
				[
					"l",
					"sx2",
					"sy10"
				],
				[
					"l",
					"x1",
					"y8"
				],
				[
					"l",
					"sx1",
					"sy9"
				],
				["c"]
			]
		}]
	},
	star4: {
		adj: [["adj", "val 12500"]],
		gd: [
			["a", "pin 0 adj 50000"],
			["iwd2", "*/ wd2 a 50000"],
			["ihd2", "*/ hd2 a 50000"],
			["sdx", "cos iwd2 2700000"],
			["sdy", "sin ihd2 2700000"],
			["sx1", "+- hc 0 sdx"],
			["sx2", "+- hc sdx 0"],
			["sy1", "+- vc 0 sdy"],
			["sy2", "+- vc sdy 0"],
			["yAdj", "+- vc 0 ihd2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"vc"
				],
				[
					"l",
					"sx1",
					"sy1"
				],
				[
					"l",
					"hc",
					"t"
				],
				[
					"l",
					"sx2",
					"sy1"
				],
				[
					"l",
					"r",
					"vc"
				],
				[
					"l",
					"sx2",
					"sy2"
				],
				[
					"l",
					"hc",
					"b"
				],
				[
					"l",
					"sx1",
					"sy2"
				],
				["c"]
			]
		}]
	},
	star5: {
		adj: [
			["adj", "val 19098"],
			["hf", "val 105146"],
			["vf", "val 110557"]
		],
		gd: [
			["a", "pin 0 adj 50000"],
			["swd2", "*/ wd2 hf 100000"],
			["shd2", "*/ hd2 vf 100000"],
			["svc", "*/ vc  vf 100000"],
			["dx1", "cos swd2 1080000"],
			["dx2", "cos swd2 18360000"],
			["dy1", "sin shd2 1080000"],
			["dy2", "sin shd2 18360000"],
			["x1", "+- hc 0 dx1"],
			["x2", "+- hc 0 dx2"],
			["x3", "+- hc dx2 0"],
			["x4", "+- hc dx1 0"],
			["y1", "+- svc 0 dy1"],
			["y2", "+- svc 0 dy2"],
			["iwd2", "*/ swd2 a 50000"],
			["ihd2", "*/ shd2 a 50000"],
			["sdx1", "cos iwd2 20520000"],
			["sdx2", "cos iwd2 3240000"],
			["sdy1", "sin ihd2 3240000"],
			["sdy2", "sin ihd2 20520000"],
			["sx1", "+- hc 0 sdx1"],
			["sx2", "+- hc 0 sdx2"],
			["sx3", "+- hc sdx2 0"],
			["sx4", "+- hc sdx1 0"],
			["sy1", "+- svc 0 sdy1"],
			["sy2", "+- svc 0 sdy2"],
			["sy3", "+- svc ihd2 0"],
			["yAdj", "+- svc 0 ihd2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"x1",
					"y1"
				],
				[
					"l",
					"sx2",
					"sy1"
				],
				[
					"l",
					"hc",
					"t"
				],
				[
					"l",
					"sx3",
					"sy1"
				],
				[
					"l",
					"x4",
					"y1"
				],
				[
					"l",
					"sx4",
					"sy2"
				],
				[
					"l",
					"x3",
					"y2"
				],
				[
					"l",
					"hc",
					"sy3"
				],
				[
					"l",
					"x2",
					"y2"
				],
				[
					"l",
					"sx1",
					"sy2"
				],
				["c"]
			]
		}]
	},
	star6: {
		adj: [["adj", "val 28868"], ["hf", "val 115470"]],
		gd: [
			["a", "pin 0 adj 50000"],
			["swd2", "*/ wd2 hf 100000"],
			["dx1", "cos swd2 1800000"],
			["x1", "+- hc 0 dx1"],
			["x2", "+- hc dx1 0"],
			["y2", "+- vc hd4 0"],
			["iwd2", "*/ swd2 a 50000"],
			["ihd2", "*/ hd2 a 50000"],
			["sdx2", "*/ iwd2 1 2"],
			["sx1", "+- hc 0 iwd2"],
			["sx2", "+- hc 0 sdx2"],
			["sx3", "+- hc sdx2 0"],
			["sx4", "+- hc iwd2 0"],
			["sdy1", "sin ihd2 3600000"],
			["sy1", "+- vc 0 sdy1"],
			["sy2", "+- vc sdy1 0"],
			["yAdj", "+- vc 0 ihd2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"x1",
					"hd4"
				],
				[
					"l",
					"sx2",
					"sy1"
				],
				[
					"l",
					"hc",
					"t"
				],
				[
					"l",
					"sx3",
					"sy1"
				],
				[
					"l",
					"x2",
					"hd4"
				],
				[
					"l",
					"sx4",
					"vc"
				],
				[
					"l",
					"x2",
					"y2"
				],
				[
					"l",
					"sx3",
					"sy2"
				],
				[
					"l",
					"hc",
					"b"
				],
				[
					"l",
					"sx2",
					"sy2"
				],
				[
					"l",
					"x1",
					"y2"
				],
				[
					"l",
					"sx1",
					"vc"
				],
				["c"]
			]
		}]
	},
	star7: {
		adj: [
			["adj", "val 34601"],
			["hf", "val 102572"],
			["vf", "val 105210"]
		],
		gd: [
			["a", "pin 0 adj 50000"],
			["swd2", "*/ wd2 hf 100000"],
			["shd2", "*/ hd2 vf 100000"],
			["svc", "*/ vc  vf 100000"],
			["dx1", "*/ swd2 97493 100000"],
			["dx2", "*/ swd2 78183 100000"],
			["dx3", "*/ swd2 43388 100000"],
			["dy1", "*/ shd2 62349 100000"],
			["dy2", "*/ shd2 22252 100000"],
			["dy3", "*/ shd2 90097 100000"],
			["x1", "+- hc 0 dx1"],
			["x2", "+- hc 0 dx2"],
			["x3", "+- hc 0 dx3"],
			["x4", "+- hc dx3 0"],
			["x5", "+- hc dx2 0"],
			["x6", "+- hc dx1 0"],
			["y1", "+- svc 0 dy1"],
			["y2", "+- svc dy2 0"],
			["y3", "+- svc dy3 0"],
			["iwd2", "*/ swd2 a 50000"],
			["ihd2", "*/ shd2 a 50000"],
			["sdx1", "*/ iwd2 97493 100000"],
			["sdx2", "*/ iwd2 78183 100000"],
			["sdx3", "*/ iwd2 43388 100000"],
			["sx1", "+- hc 0 sdx1"],
			["sx2", "+- hc 0 sdx2"],
			["sx3", "+- hc 0 sdx3"],
			["sx4", "+- hc sdx3 0"],
			["sx5", "+- hc sdx2 0"],
			["sx6", "+- hc sdx1 0"],
			["sdy1", "*/ ihd2 90097 100000"],
			["sdy2", "*/ ihd2 22252 100000"],
			["sdy3", "*/ ihd2 62349 100000"],
			["sy1", "+- svc 0 sdy1"],
			["sy2", "+- svc 0 sdy2"],
			["sy3", "+- svc sdy3 0"],
			["sy4", "+- svc ihd2 0"],
			["yAdj", "+- svc 0 ihd2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"x1",
					"y2"
				],
				[
					"l",
					"sx1",
					"sy2"
				],
				[
					"l",
					"x2",
					"y1"
				],
				[
					"l",
					"sx3",
					"sy1"
				],
				[
					"l",
					"hc",
					"t"
				],
				[
					"l",
					"sx4",
					"sy1"
				],
				[
					"l",
					"x5",
					"y1"
				],
				[
					"l",
					"sx6",
					"sy2"
				],
				[
					"l",
					"x6",
					"y2"
				],
				[
					"l",
					"sx5",
					"sy3"
				],
				[
					"l",
					"x4",
					"y3"
				],
				[
					"l",
					"hc",
					"sy4"
				],
				[
					"l",
					"x3",
					"y3"
				],
				[
					"l",
					"sx2",
					"sy3"
				],
				["c"]
			]
		}]
	},
	star8: {
		adj: [["adj", "val 37500"]],
		gd: [
			["a", "pin 0 adj 50000"],
			["dx1", "cos wd2 2700000"],
			["x1", "+- hc 0 dx1"],
			["x2", "+- hc dx1 0"],
			["dy1", "sin hd2 2700000"],
			["y1", "+- vc 0 dy1"],
			["y2", "+- vc dy1 0"],
			["iwd2", "*/ wd2 a 50000"],
			["ihd2", "*/ hd2 a 50000"],
			["sdx1", "*/ iwd2 92388 100000"],
			["sdx2", "*/ iwd2 38268 100000"],
			["sdy1", "*/ ihd2 92388 100000"],
			["sdy2", "*/ ihd2 38268 100000"],
			["sx1", "+- hc 0 sdx1"],
			["sx2", "+- hc 0 sdx2"],
			["sx3", "+- hc sdx2 0"],
			["sx4", "+- hc sdx1 0"],
			["sy1", "+- vc 0 sdy1"],
			["sy2", "+- vc 0 sdy2"],
			["sy3", "+- vc sdy2 0"],
			["sy4", "+- vc sdy1 0"],
			["yAdj", "+- vc 0 ihd2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"vc"
				],
				[
					"l",
					"sx1",
					"sy2"
				],
				[
					"l",
					"x1",
					"y1"
				],
				[
					"l",
					"sx2",
					"sy1"
				],
				[
					"l",
					"hc",
					"t"
				],
				[
					"l",
					"sx3",
					"sy1"
				],
				[
					"l",
					"x2",
					"y1"
				],
				[
					"l",
					"sx4",
					"sy2"
				],
				[
					"l",
					"r",
					"vc"
				],
				[
					"l",
					"sx4",
					"sy3"
				],
				[
					"l",
					"x2",
					"y2"
				],
				[
					"l",
					"sx3",
					"sy4"
				],
				[
					"l",
					"hc",
					"b"
				],
				[
					"l",
					"sx2",
					"sy4"
				],
				[
					"l",
					"x1",
					"y2"
				],
				[
					"l",
					"sx1",
					"sy3"
				],
				["c"]
			]
		}]
	},
	straightconnector1: {
		adj: [],
		gd: [],
		paths: [{
			w: null,
			h: null,
			fill: "none",
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"t"
			], [
				"l",
				"r",
				"b"
			]]
		}]
	},
	stripedrightarrow: {
		adj: [["adj1", "val 50000"], ["adj2", "val 50000"]],
		gd: [
			["maxAdj2", "*/ 84375 w ss"],
			["a1", "pin 0 adj1 100000"],
			["a2", "pin 0 adj2 maxAdj2"],
			["x4", "*/ ss 5 32"],
			["dx5", "*/ ss a2 100000"],
			["x5", "+- r 0 dx5"],
			["dy1", "*/ h a1 200000"],
			["y1", "+- vc 0 dy1"],
			["y2", "+- vc dy1 0"],
			["dx6", "*/ dy1 dx5 hd2"],
			["x6", "+- r 0 dx6"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"y1"
				],
				[
					"l",
					"ssd32",
					"y1"
				],
				[
					"l",
					"ssd32",
					"y2"
				],
				[
					"l",
					"l",
					"y2"
				],
				["c"],
				[
					"m",
					"ssd16",
					"y1"
				],
				[
					"l",
					"ssd8",
					"y1"
				],
				[
					"l",
					"ssd8",
					"y2"
				],
				[
					"l",
					"ssd16",
					"y2"
				],
				["c"],
				[
					"m",
					"x4",
					"y1"
				],
				[
					"l",
					"x5",
					"y1"
				],
				[
					"l",
					"x5",
					"t"
				],
				[
					"l",
					"r",
					"vc"
				],
				[
					"l",
					"x5",
					"b"
				],
				[
					"l",
					"x5",
					"y2"
				],
				[
					"l",
					"x4",
					"y2"
				],
				["c"]
			]
		}]
	},
	sun: {
		adj: [["adj", "val 25000"]],
		gd: [
			["a", "pin 12500 adj 46875"],
			["g0", "+- 50000 0 a"],
			["g1", "*/ g0 30274 32768"],
			["g2", "*/ g0 12540 32768"],
			["g3", "+- g1 50000 0"],
			["g4", "+- g2 50000 0"],
			["g5", "+- 50000 0 g1"],
			["g6", "+- 50000 0 g2"],
			["g7", "*/ g0 23170 32768"],
			["g8", "+- 50000 g7 0"],
			["g9", "+- 50000 0 g7"],
			["g10", "*/ g5 3 4"],
			["g11", "*/ g6 3 4"],
			["g12", "+- g10 3662 0"],
			["g13", "+- g11 3662 0"],
			["g14", "+- g11 12500 0"],
			["g15", "+- 100000 0 g10"],
			["g16", "+- 100000 0 g12"],
			["g17", "+- 100000 0 g13"],
			["g18", "+- 100000 0 g14"],
			["ox1", "*/ w 18436 21600"],
			["oy1", "*/ h 3163 21600"],
			["ox2", "*/ w 3163 21600"],
			["oy2", "*/ h 18436 21600"],
			["x8", "*/ w g8 100000"],
			["x9", "*/ w g9 100000"],
			["x10", "*/ w g10 100000"],
			["x12", "*/ w g12 100000"],
			["x13", "*/ w g13 100000"],
			["x14", "*/ w g14 100000"],
			["x15", "*/ w g15 100000"],
			["x16", "*/ w g16 100000"],
			["x17", "*/ w g17 100000"],
			["x18", "*/ w g18 100000"],
			["x19", "*/ w a 100000"],
			["wR", "*/ w g0 100000"],
			["hR", "*/ h g0 100000"],
			["y8", "*/ h g8 100000"],
			["y9", "*/ h g9 100000"],
			["y10", "*/ h g10 100000"],
			["y12", "*/ h g12 100000"],
			["y13", "*/ h g13 100000"],
			["y14", "*/ h g14 100000"],
			["y15", "*/ h g15 100000"],
			["y16", "*/ h g16 100000"],
			["y17", "*/ h g17 100000"],
			["y18", "*/ h g18 100000"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"r",
					"vc"
				],
				[
					"l",
					"x15",
					"y18"
				],
				[
					"l",
					"x15",
					"y14"
				],
				["c"],
				[
					"m",
					"ox1",
					"oy1"
				],
				[
					"l",
					"x16",
					"y13"
				],
				[
					"l",
					"x17",
					"y12"
				],
				["c"],
				[
					"m",
					"hc",
					"t"
				],
				[
					"l",
					"x18",
					"y10"
				],
				[
					"l",
					"x14",
					"y10"
				],
				["c"],
				[
					"m",
					"ox2",
					"oy1"
				],
				[
					"l",
					"x13",
					"y12"
				],
				[
					"l",
					"x12",
					"y13"
				],
				["c"],
				[
					"m",
					"l",
					"vc"
				],
				[
					"l",
					"x10",
					"y14"
				],
				[
					"l",
					"x10",
					"y18"
				],
				["c"],
				[
					"m",
					"ox2",
					"oy2"
				],
				[
					"l",
					"x12",
					"y17"
				],
				[
					"l",
					"x13",
					"y16"
				],
				["c"],
				[
					"m",
					"hc",
					"b"
				],
				[
					"l",
					"x14",
					"y15"
				],
				[
					"l",
					"x18",
					"y15"
				],
				["c"],
				[
					"m",
					"ox1",
					"oy2"
				],
				[
					"l",
					"x17",
					"y16"
				],
				[
					"l",
					"x16",
					"y17"
				],
				["c"],
				[
					"m",
					"x19",
					"vc"
				],
				[
					"a",
					"wR",
					"hR",
					"cd2",
					"21600000"
				],
				["c"]
			]
		}]
	},
	swoosharrow: {
		adj: [["adj1", "val 25000"], ["adj2", "val 16667"]],
		gd: [
			["a1", "pin 1 adj1 75000"],
			["maxAdj2", "*/ 70000 w ss"],
			["a2", "pin 0 adj2 maxAdj2"],
			["ad1", "*/ h a1 100000"],
			["ad2", "*/ ss a2 100000"],
			["xB", "+- r 0 ad2"],
			["yB", "+- t ssd8 0"],
			["alfa", "*/ cd4 1 14"],
			["dx0", "tan ssd8 alfa"],
			["xC", "+- xB 0 dx0"],
			["dx1", "tan ad1 alfa"],
			["yF", "+- yB ad1 0"],
			["xF", "+- xB dx1 0"],
			["xE", "+- xF dx0 0"],
			["yE", "+- yF ssd8 0"],
			["dy2", "+- yE 0 t"],
			["dy22", "*/ dy2 1 2"],
			["dy3", "*/ h 1 20"],
			["yD", "+- t dy22 dy3"],
			["dy4", "*/ hd6 1 1"],
			["yP1", "+- hd6 dy4 0"],
			["xP1", "val wd6"],
			["dy5", "*/ hd6 1 2"],
			["yP2", "+- yF dy5 0"],
			["xP2", "val wd4"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"b"
				],
				[
					"Q",
					"xP1",
					"yP1",
					"xB",
					"yB"
				],
				[
					"l",
					"xC",
					"t"
				],
				[
					"l",
					"r",
					"yD"
				],
				[
					"l",
					"xE",
					"yE"
				],
				[
					"l",
					"xF",
					"yF"
				],
				[
					"Q",
					"xP2",
					"yP2",
					"l",
					"b"
				],
				["c"]
			]
		}]
	},
	teardrop: {
		adj: [["adj", "val 100000"]],
		gd: [
			["a", "pin 0 adj 200000"],
			["r2", "sqrt 2"],
			["tw", "*/ wd2 r2 1"],
			["th", "*/ hd2 r2 1"],
			["sw", "*/ tw a 100000"],
			["sh", "*/ th a 100000"],
			["dx1", "cos sw 2700000"],
			["dy1", "sin sh 2700000"],
			["x1", "+- hc dx1 0"],
			["y1", "+- vc 0 dy1"],
			["x2", "+/ hc x1 2"],
			["y2", "+/ vc y1 2"],
			["idx", "cos wd2 2700000"],
			["idy", "sin hd2 2700000"],
			["il", "+- hc 0 idx"],
			["ir", "+- hc idx 0"],
			["it", "+- vc 0 idy"],
			["ib", "+- vc idy 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"vc"
				],
				[
					"a",
					"wd2",
					"hd2",
					"cd2",
					"cd4"
				],
				[
					"Q",
					"x2",
					"t",
					"x1",
					"y1"
				],
				[
					"Q",
					"r",
					"y2",
					"r",
					"vc"
				],
				[
					"a",
					"wd2",
					"hd2",
					"0",
					"cd4"
				],
				[
					"a",
					"wd2",
					"hd2",
					"cd4",
					"cd4"
				],
				["c"]
			]
		}]
	},
	trapezoid: {
		adj: [["adj", "val 25000"]],
		gd: [
			["maxAdj", "*/ 50000 w ss"],
			["a", "pin 0 adj maxAdj"],
			["x1", "*/ ss a 200000"],
			["x2", "*/ ss a 100000"],
			["x3", "+- r 0 x2"],
			["x4", "+- r 0 x1"],
			["il", "*/ wd3 a maxAdj"],
			["it", "*/ hd3 a maxAdj"],
			["ir", "+- r 0 il"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"b"
				],
				[
					"l",
					"x2",
					"t"
				],
				[
					"l",
					"x3",
					"t"
				],
				[
					"l",
					"r",
					"b"
				],
				["c"]
			]
		}]
	},
	triangle: {
		adj: [["adj", "val 50000"]],
		gd: [
			["a", "pin 0 adj 100000"],
			["x1", "*/ w a 200000"],
			["x2", "*/ w a 100000"],
			["x3", "+- x1 wd2 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"b"
				],
				[
					"l",
					"x2",
					"t"
				],
				[
					"l",
					"r",
					"b"
				],
				["c"]
			]
		}]
	},
	uparrowcallout: {
		adj: [
			["adj1", "val 25000"],
			["adj2", "val 25000"],
			["adj3", "val 25000"],
			["adj4", "val 64977"]
		],
		gd: [
			["maxAdj2", "*/ 50000 w ss"],
			["a2", "pin 0 adj2 maxAdj2"],
			["maxAdj1", "*/ a2 2 1"],
			["a1", "pin 0 adj1 maxAdj1"],
			["maxAdj3", "*/ 100000 h ss"],
			["a3", "pin 0 adj3 maxAdj3"],
			["q2", "*/ a3 ss h"],
			["maxAdj4", "+- 100000 0 q2"],
			["a4", "pin 0 adj4 maxAdj4"],
			["dx1", "*/ ss a2 100000"],
			["dx2", "*/ ss a1 200000"],
			["x1", "+- hc 0 dx1"],
			["x2", "+- hc 0 dx2"],
			["x3", "+- hc dx2 0"],
			["x4", "+- hc dx1 0"],
			["y1", "*/ ss a3 100000"],
			["dy2", "*/ h a4 100000"],
			["y2", "+- b 0 dy2"],
			["y3", "+/ y2 b 2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"y2"
				],
				[
					"l",
					"x2",
					"y2"
				],
				[
					"l",
					"x2",
					"y1"
				],
				[
					"l",
					"x1",
					"y1"
				],
				[
					"l",
					"hc",
					"t"
				],
				[
					"l",
					"x4",
					"y1"
				],
				[
					"l",
					"x3",
					"y1"
				],
				[
					"l",
					"x3",
					"y2"
				],
				[
					"l",
					"r",
					"y2"
				],
				[
					"l",
					"r",
					"b"
				],
				[
					"l",
					"l",
					"b"
				],
				["c"]
			]
		}]
	},
	updownarrow: {
		adj: [["adj1", "val 50000"], ["adj2", "val 50000"]],
		gd: [
			["maxAdj2", "*/ 50000 h ss"],
			["a1", "pin 0 adj1 100000"],
			["a2", "pin 0 adj2 maxAdj2"],
			["y2", "*/ ss a2 100000"],
			["y3", "+- b 0 y2"],
			["dx1", "*/ w a1 200000"],
			["x1", "+- hc 0 dx1"],
			["x2", "+- hc dx1 0"],
			["dy1", "*/ x1 y2 wd2"],
			["y1", "+- y2 0 dy1"],
			["y4", "+- y3 dy1 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"y2"
				],
				[
					"l",
					"hc",
					"t"
				],
				[
					"l",
					"r",
					"y2"
				],
				[
					"l",
					"x2",
					"y2"
				],
				[
					"l",
					"x2",
					"y3"
				],
				[
					"l",
					"r",
					"y3"
				],
				[
					"l",
					"hc",
					"b"
				],
				[
					"l",
					"l",
					"y3"
				],
				[
					"l",
					"x1",
					"y3"
				],
				[
					"l",
					"x1",
					"y2"
				],
				["c"]
			]
		}]
	},
	uparrow: {
		adj: [["adj1", "val 50000"], ["adj2", "val 50000"]],
		gd: [
			["maxAdj2", "*/ 100000 h ss"],
			["a1", "pin 0 adj1 100000"],
			["a2", "pin 0 adj2 maxAdj2"],
			["dy2", "*/ ss a2 100000"],
			["y2", "+- t dy2 0"],
			["dx1", "*/ w a1 200000"],
			["x1", "+- hc 0 dx1"],
			["x2", "+- hc dx1 0"],
			["dy1", "*/ x1 dy2 wd2"],
			["y1", "+- y2  0 dy1"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"y2"
				],
				[
					"l",
					"hc",
					"t"
				],
				[
					"l",
					"r",
					"y2"
				],
				[
					"l",
					"x2",
					"y2"
				],
				[
					"l",
					"x2",
					"b"
				],
				[
					"l",
					"x1",
					"b"
				],
				[
					"l",
					"x1",
					"y2"
				],
				["c"]
			]
		}]
	},
	updownarrowcallout: {
		adj: [
			["adj1", "val 25000"],
			["adj2", "val 25000"],
			["adj3", "val 25000"],
			["adj4", "val 48123"]
		],
		gd: [
			["maxAdj2", "*/ 50000 w ss"],
			["a2", "pin 0 adj2 maxAdj2"],
			["maxAdj1", "*/ a2 2 1"],
			["a1", "pin 0 adj1 maxAdj1"],
			["maxAdj3", "*/ 50000 h ss"],
			["a3", "pin 0 adj3 maxAdj3"],
			["q2", "*/ a3 ss hd2"],
			["maxAdj4", "+- 100000 0 q2"],
			["a4", "pin 0 adj4 maxAdj4"],
			["dx1", "*/ ss a2 100000"],
			["dx2", "*/ ss a1 200000"],
			["x1", "+- hc 0 dx1"],
			["x2", "+- hc 0 dx2"],
			["x3", "+- hc dx2 0"],
			["x4", "+- hc dx1 0"],
			["y1", "*/ ss a3 100000"],
			["y4", "+- b 0 y1"],
			["dy2", "*/ h a4 200000"],
			["y2", "+- vc 0 dy2"],
			["y3", "+- vc dy2 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"y2"
				],
				[
					"l",
					"x2",
					"y2"
				],
				[
					"l",
					"x2",
					"y1"
				],
				[
					"l",
					"x1",
					"y1"
				],
				[
					"l",
					"hc",
					"t"
				],
				[
					"l",
					"x4",
					"y1"
				],
				[
					"l",
					"x3",
					"y1"
				],
				[
					"l",
					"x3",
					"y2"
				],
				[
					"l",
					"r",
					"y2"
				],
				[
					"l",
					"r",
					"y3"
				],
				[
					"l",
					"x3",
					"y3"
				],
				[
					"l",
					"x3",
					"y4"
				],
				[
					"l",
					"x4",
					"y4"
				],
				[
					"l",
					"hc",
					"b"
				],
				[
					"l",
					"x1",
					"y4"
				],
				[
					"l",
					"x2",
					"y4"
				],
				[
					"l",
					"x2",
					"y3"
				],
				[
					"l",
					"l",
					"y3"
				],
				["c"]
			]
		}]
	},
	uturnarrow: {
		adj: [
			["adj1", "val 25000"],
			["adj2", "val 25000"],
			["adj3", "val 25000"],
			["adj4", "val 43750"],
			["adj5", "val 75000"]
		],
		gd: [
			["a2", "pin 0 adj2 25000"],
			["maxAdj1", "*/ a2 2 1"],
			["a1", "pin 0 adj1 maxAdj1"],
			["q2", "*/ a1 ss h"],
			["q3", "+- 100000 0 q2"],
			["maxAdj3", "*/ q3 h ss"],
			["a3", "pin 0 adj3 maxAdj3"],
			["q1", "+- a3 a1 0"],
			["minAdj5", "*/ q1 ss h"],
			["a5", "pin minAdj5 adj5 100000"],
			["th", "*/ ss a1 100000"],
			["aw2", "*/ ss a2 100000"],
			["th2", "*/ th 1 2"],
			["dh2", "+- aw2 0 th2"],
			["y5", "*/ h a5 100000"],
			["ah", "*/ ss a3 100000"],
			["y4", "+- y5 0 ah"],
			["x9", "+- r 0 dh2"],
			["bw", "*/ x9 1 2"],
			["bs", "min bw y4"],
			["maxAdj4", "*/ bs 100000 ss"],
			["a4", "pin 0 adj4 maxAdj4"],
			["bd", "*/ ss a4 100000"],
			["bd3", "+- bd 0 th"],
			["bd2", "max bd3 0"],
			["x3", "+- th bd2 0"],
			["x8", "+- r 0 aw2"],
			["x6", "+- x8 0 aw2"],
			["x7", "+- x6 dh2 0"],
			["x4", "+- x9 0 bd"],
			["x5", "+- x7 0 bd2"],
			["cx", "+/ th x7 2"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"b"
				],
				[
					"l",
					"l",
					"bd"
				],
				[
					"a",
					"bd",
					"bd",
					"cd2",
					"cd4"
				],
				[
					"l",
					"x4",
					"t"
				],
				[
					"a",
					"bd",
					"bd",
					"3cd4",
					"cd4"
				],
				[
					"l",
					"x9",
					"y4"
				],
				[
					"l",
					"r",
					"y4"
				],
				[
					"l",
					"x8",
					"y5"
				],
				[
					"l",
					"x6",
					"y4"
				],
				[
					"l",
					"x7",
					"y4"
				],
				[
					"l",
					"x7",
					"x3"
				],
				[
					"a",
					"bd2",
					"bd2",
					"0",
					"-5400000"
				],
				[
					"l",
					"x3",
					"th"
				],
				[
					"a",
					"bd2",
					"bd2",
					"3cd4",
					"-5400000"
				],
				[
					"l",
					"th",
					"b"
				],
				["c"]
			]
		}]
	},
	verticalscroll: {
		adj: [["adj", "val 12500"]],
		gd: [
			["a", "pin 0 adj 25000"],
			["ch", "*/ ss a 100000"],
			["ch2", "*/ ch 1 2"],
			["ch4", "*/ ch 1 4"],
			["x3", "+- ch ch2 0"],
			["x4", "+- ch ch 0"],
			["x6", "+- r 0 ch"],
			["x7", "+- r 0 ch2"],
			["x5", "+- x6 0 ch2"],
			["y3", "+- b 0 ch"],
			["y4", "+- b 0 ch2"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"ch2",
						"b"
					],
					[
						"a",
						"ch2",
						"ch2",
						"cd4",
						"-5400000"
					],
					[
						"l",
						"ch2",
						"y4"
					],
					[
						"a",
						"ch4",
						"ch4",
						"cd4",
						"-10800000"
					],
					[
						"l",
						"ch",
						"y3"
					],
					[
						"l",
						"ch",
						"ch2"
					],
					[
						"a",
						"ch2",
						"ch2",
						"cd2",
						"cd4"
					],
					[
						"l",
						"x7",
						"t"
					],
					[
						"a",
						"ch2",
						"ch2",
						"3cd4",
						"cd2"
					],
					[
						"l",
						"x6",
						"ch"
					],
					[
						"l",
						"x6",
						"y4"
					],
					[
						"a",
						"ch2",
						"ch2",
						"0",
						"cd4"
					],
					["c"],
					[
						"m",
						"x4",
						"ch2"
					],
					[
						"a",
						"ch2",
						"ch2",
						"0",
						"cd4"
					],
					[
						"a",
						"ch4",
						"ch4",
						"cd4",
						"cd2"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "darkenLess",
				stroke: !1,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"x4",
						"ch2"
					],
					[
						"a",
						"ch2",
						"ch2",
						"0",
						"cd4"
					],
					[
						"a",
						"ch4",
						"ch4",
						"cd4",
						"cd2"
					],
					["c"],
					[
						"m",
						"ch",
						"y4"
					],
					[
						"a",
						"ch2",
						"ch2",
						"0",
						"3cd4"
					],
					[
						"a",
						"ch4",
						"ch4",
						"3cd4",
						"cd2"
					],
					["c"]
				]
			},
			{
				w: null,
				h: null,
				fill: "none",
				stroke: !0,
				extrusionOk: !1,
				cmds: [
					[
						"m",
						"ch",
						"y3"
					],
					[
						"l",
						"ch",
						"ch2"
					],
					[
						"a",
						"ch2",
						"ch2",
						"cd2",
						"cd4"
					],
					[
						"l",
						"x7",
						"t"
					],
					[
						"a",
						"ch2",
						"ch2",
						"3cd4",
						"cd2"
					],
					[
						"l",
						"x6",
						"ch"
					],
					[
						"l",
						"x6",
						"y4"
					],
					[
						"a",
						"ch2",
						"ch2",
						"0",
						"cd4"
					],
					[
						"l",
						"ch2",
						"b"
					],
					[
						"a",
						"ch2",
						"ch2",
						"cd4",
						"cd2"
					],
					["c"],
					[
						"m",
						"x3",
						"t"
					],
					[
						"a",
						"ch2",
						"ch2",
						"3cd4",
						"cd2"
					],
					[
						"a",
						"ch4",
						"ch4",
						"cd4",
						"cd2"
					],
					[
						"l",
						"x4",
						"ch2"
					],
					[
						"m",
						"x6",
						"ch"
					],
					[
						"l",
						"x3",
						"ch"
					],
					[
						"m",
						"ch2",
						"y3"
					],
					[
						"a",
						"ch4",
						"ch4",
						"3cd4",
						"cd2"
					],
					[
						"l",
						"ch",
						"y4"
					],
					[
						"m",
						"ch2",
						"b"
					],
					[
						"a",
						"ch2",
						"ch2",
						"cd4",
						"-5400000"
					],
					[
						"l",
						"ch",
						"y3"
					]
				]
			}
		]
	},
	wave: {
		adj: [["adj1", "val 12500"], ["adj2", "val 0"]],
		gd: [
			["a1", "pin 0 adj1 20000"],
			["a2", "pin -10000 adj2 10000"],
			["y1", "*/ h a1 100000"],
			["dy2", "*/ y1 10 3"],
			["y2", "+- y1 0 dy2"],
			["y3", "+- y1 dy2 0"],
			["y4", "+- b 0 y1"],
			["y5", "+- y4 0 dy2"],
			["y6", "+- y4 dy2 0"],
			["dx1", "*/ w a2 100000"],
			["of2", "*/ w a2 50000"],
			["x1", "abs dx1"],
			["dx2", "?: of2 0 of2"],
			["x2", "+- l 0 dx2"],
			["dx5", "?: of2 of2 0"],
			["x5", "+- r 0 dx5"],
			["dx3", "+/ dx2 x5 3"],
			["x3", "+- x2 dx3 0"],
			["x4", "+/ x3 x5 2"],
			["x6", "+- l dx5 0"],
			["x10", "+- r dx2 0"],
			["x7", "+- x6 dx3 0"],
			["x8", "+/ x7 x10 2"],
			["x9", "+- r 0 x1"],
			["xAdj", "+- hc dx1 0"],
			["xAdj2", "+- hc 0 dx1"],
			["il", "max x2 x6"],
			["ir", "min x5 x10"],
			["it", "*/ h a1 50000"],
			["ib", "+- b 0 it"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"x2",
					"y1"
				],
				[
					"C",
					"x3",
					"y2",
					"x4",
					"y3",
					"x5",
					"y1"
				],
				[
					"l",
					"x10",
					"y4"
				],
				[
					"C",
					"x8",
					"y6",
					"x7",
					"y5",
					"x6",
					"y4"
				],
				["c"]
			]
		}]
	},
	wedgeellipsecallout: {
		adj: [["adj1", "val -20833"], ["adj2", "val 62500"]],
		gd: [
			["dxPos", "*/ w adj1 100000"],
			["dyPos", "*/ h adj2 100000"],
			["xPos", "+- hc dxPos 0"],
			["yPos", "+- vc dyPos 0"],
			["sdx", "*/ dxPos h 1"],
			["sdy", "*/ dyPos w 1"],
			["pang", "at2 sdx sdy"],
			["stAng", "+- pang 660000 0"],
			["enAng", "+- pang 0 660000"],
			["dx1", "cos wd2 stAng"],
			["dy1", "sin hd2 stAng"],
			["x1", "+- hc dx1 0"],
			["y1", "+- vc dy1 0"],
			["dx2", "cos wd2 enAng"],
			["dy2", "sin hd2 enAng"],
			["x2", "+- hc dx2 0"],
			["y2", "+- vc dy2 0"],
			["stAng1", "at2 dx1 dy1"],
			["enAng1", "at2 dx2 dy2"],
			["swAng1", "+- enAng1 0 stAng1"],
			["swAng2", "+- swAng1 21600000 0"],
			["swAng", "?: swAng1 swAng1 swAng2"],
			["idx", "cos wd2 2700000"],
			["idy", "sin hd2 2700000"],
			["il", "+- hc 0 idx"],
			["ir", "+- hc idx 0"],
			["it", "+- vc 0 idy"],
			["ib", "+- vc idy 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"xPos",
					"yPos"
				],
				[
					"l",
					"x1",
					"y1"
				],
				[
					"a",
					"wd2",
					"hd2",
					"stAng1",
					"swAng"
				],
				["c"]
			]
		}]
	},
	wedgerectcallout: {
		adj: [["adj1", "val -20833"], ["adj2", "val 62500"]],
		gd: [
			["dxPos", "*/ w adj1 100000"],
			["dyPos", "*/ h adj2 100000"],
			["xPos", "+- hc dxPos 0"],
			["yPos", "+- vc dyPos 0"],
			["dx", "+- xPos 0 hc"],
			["dy", "+- yPos 0 vc"],
			["dq", "*/ dxPos h w"],
			["ady", "abs dyPos"],
			["adq", "abs dq"],
			["dz", "+- ady 0 adq"],
			["xg1", "?: dxPos 7 2"],
			["xg2", "?: dxPos 10 5"],
			["x1", "*/ w xg1 12"],
			["x2", "*/ w xg2 12"],
			["yg1", "?: dyPos 7 2"],
			["yg2", "?: dyPos 10 5"],
			["y1", "*/ h yg1 12"],
			["y2", "*/ h yg2 12"],
			["t1", "?: dxPos l xPos"],
			["xl", "?: dz l t1"],
			["t2", "?: dyPos x1 xPos"],
			["xt", "?: dz t2 x1"],
			["t3", "?: dxPos xPos r"],
			["xr", "?: dz r t3"],
			["t4", "?: dyPos xPos x1"],
			["xb", "?: dz t4 x1"],
			["t5", "?: dxPos y1 yPos"],
			["yl", "?: dz y1 t5"],
			["t6", "?: dyPos t yPos"],
			["yt", "?: dz t6 t"],
			["t7", "?: dxPos yPos y1"],
			["yr", "?: dz y1 t7"],
			["t8", "?: dyPos yPos b"],
			["yb", "?: dz t8 b"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"t"
				],
				[
					"l",
					"x1",
					"t"
				],
				[
					"l",
					"xt",
					"yt"
				],
				[
					"l",
					"x2",
					"t"
				],
				[
					"l",
					"r",
					"t"
				],
				[
					"l",
					"r",
					"y1"
				],
				[
					"l",
					"xr",
					"yr"
				],
				[
					"l",
					"r",
					"y2"
				],
				[
					"l",
					"r",
					"b"
				],
				[
					"l",
					"x2",
					"b"
				],
				[
					"l",
					"xb",
					"yb"
				],
				[
					"l",
					"x1",
					"b"
				],
				[
					"l",
					"l",
					"b"
				],
				[
					"l",
					"l",
					"y2"
				],
				[
					"l",
					"xl",
					"yl"
				],
				[
					"l",
					"l",
					"y1"
				],
				["c"]
			]
		}]
	},
	wedgeroundrectcallout: {
		adj: [
			["adj1", "val -20833"],
			["adj2", "val 62500"],
			["adj3", "val 16667"]
		],
		gd: [
			["dxPos", "*/ w adj1 100000"],
			["dyPos", "*/ h adj2 100000"],
			["xPos", "+- hc dxPos 0"],
			["yPos", "+- vc dyPos 0"],
			["dq", "*/ dxPos h w"],
			["ady", "abs dyPos"],
			["adq", "abs dq"],
			["dz", "+- ady 0 adq"],
			["xg1", "?: dxPos 7 2"],
			["xg2", "?: dxPos 10 5"],
			["x1", "*/ w xg1 12"],
			["x2", "*/ w xg2 12"],
			["yg1", "?: dyPos 7 2"],
			["yg2", "?: dyPos 10 5"],
			["y1", "*/ h yg1 12"],
			["y2", "*/ h yg2 12"],
			["t1", "?: dxPos l xPos"],
			["xl", "?: dz l t1"],
			["t2", "?: dyPos x1 xPos"],
			["xt", "?: dz t2 x1"],
			["t3", "?: dxPos xPos r"],
			["xr", "?: dz r t3"],
			["t4", "?: dyPos xPos x1"],
			["xb", "?: dz t4 x1"],
			["t5", "?: dxPos y1 yPos"],
			["yl", "?: dz y1 t5"],
			["t6", "?: dyPos t yPos"],
			["yt", "?: dz t6 t"],
			["t7", "?: dxPos yPos y1"],
			["yr", "?: dz y1 t7"],
			["t8", "?: dyPos yPos b"],
			["yb", "?: dz t8 b"],
			["u1", "*/ ss adj3 100000"],
			["u2", "+- r 0 u1"],
			["v2", "+- b 0 u1"],
			["il", "*/ u1 29289 100000"],
			["ir", "+- r 0 il"],
			["ib", "+- b 0 il"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"u1"
				],
				[
					"a",
					"u1",
					"u1",
					"cd2",
					"cd4"
				],
				[
					"l",
					"x1",
					"t"
				],
				[
					"l",
					"xt",
					"yt"
				],
				[
					"l",
					"x2",
					"t"
				],
				[
					"l",
					"u2",
					"t"
				],
				[
					"a",
					"u1",
					"u1",
					"3cd4",
					"cd4"
				],
				[
					"l",
					"r",
					"y1"
				],
				[
					"l",
					"xr",
					"yr"
				],
				[
					"l",
					"r",
					"y2"
				],
				[
					"l",
					"r",
					"v2"
				],
				[
					"a",
					"u1",
					"u1",
					"0",
					"cd4"
				],
				[
					"l",
					"x2",
					"b"
				],
				[
					"l",
					"xb",
					"yb"
				],
				[
					"l",
					"x1",
					"b"
				],
				[
					"l",
					"u1",
					"b"
				],
				[
					"a",
					"u1",
					"u1",
					"cd4",
					"cd4"
				],
				[
					"l",
					"l",
					"y2"
				],
				[
					"l",
					"xl",
					"yl"
				],
				[
					"l",
					"l",
					"y1"
				],
				["c"]
			]
		}]
	}
}, _r = 216e5, vr = Math.PI * 2 / _r;
function yr(e) {
	let t = e.trim().split(/\s+/);
	return {
		op: t[0],
		argTokens: t.slice(1)
	};
}
function br(e, t, n) {
	let { w: r, h: i, adj: a } = e, o = Math.min(r, i), s = Math.max(r, i), c = Object.create(null);
	Object.assign(c, {
		w: r,
		h: i,
		l: 0,
		t: 0,
		r,
		b: i,
		hc: r / 2,
		vc: i / 2,
		wd2: r / 2,
		wd3: r / 3,
		wd4: r / 4,
		wd5: r / 5,
		wd6: r / 6,
		wd8: r / 8,
		wd10: r / 10,
		wd12: r / 12,
		wd16: r / 16,
		wd32: r / 32,
		hd2: i / 2,
		hd3: i / 3,
		hd4: i / 4,
		hd5: i / 5,
		hd6: i / 6,
		hd8: i / 8,
		hd10: i / 10,
		hd12: i / 12,
		hd16: i / 16,
		hd32: i / 32,
		ss: o,
		ssd2: o / 2,
		ssd4: o / 4,
		ssd6: o / 6,
		ssd8: o / 8,
		ssd16: o / 16,
		ssd32: o / 32,
		ls: s,
		lsd2: s / 2,
		lsd4: s / 4,
		lsd6: s / 6,
		lsd8: s / 8,
		lsd16: s / 16,
		lsd32: s / 32,
		cd: _r,
		cd2: _r / 2,
		cd4: _r / 4,
		cd8: _r / 8,
		"3cd4": 3 * _r / 4,
		"3cd8": 3 * _r / 8,
		"5cd8": 5 * _r / 8,
		"7cd8": 7 * _r / 8
	}), t.forEach(([e, t], n) => {
		let r = a[n];
		c[e] = typeof r == "number" ? r : u(t), e === "adj" && (c.adj1 = c.adj), e === "adj1" && (c.adj = c.adj1);
	});
	for (let [e, t] of n) c[e] = u(t);
	return {
		v: (e) => {
			if (e in c) return c[e];
			throw Error(`preset-shape: unknown name "${e}"`);
		},
		fmla: u,
		resolve: l
	};
	function l(e) {
		if (e in c) return c[e];
		let t = Number(e);
		if (Number.isFinite(t)) return t;
		throw Error(`preset-shape: cannot resolve "${e}"`);
	}
	function u(e) {
		let t = e.argTokens.map(l);
		return d(e.op, t, e);
	}
	function d(e, t, n) {
		switch (e) {
			case "val": return t[0];
			case "*/": return t[0] * t[1] / t[2];
			case "+-": return t[0] + t[1] - t[2];
			case "+/": return (t[0] + t[1]) / t[2];
			case "?:": return t[0] > 0 ? t[1] : t[2];
			case "abs": return Math.abs(t[0]);
			case "min": return Math.min(t[0], t[1]);
			case "max": return Math.max(t[0], t[1]);
			case "pin": return t[1] < t[0] ? t[0] : t[1] > t[2] ? t[2] : t[1];
			case "sqrt": return Math.sqrt(Math.max(0, t[0]));
			case "mod": return Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
			case "sin": return t[0] * Math.sin(t[1] * vr);
			case "cos": return t[0] * Math.cos(t[1] * vr);
			case "tan": return t[0] * Math.tan(t[1] * vr);
			case "at2": return Math.atan2(t[1], t[0]) / vr;
			case "cat2": return t[0] * Math.cos(Math.atan2(t[2], t[1]));
			case "sat2": return t[0] * Math.sin(Math.atan2(t[2], t[1]));
			default: throw Error(`preset-shape: unknown operator "${e}" in "${[n.op, ...n.argTokens].join(" ")}"`);
		}
	}
}
//#endregion
//#region packages/core/src/shape/preset-geometry/path-executor.ts
var xr = Math.PI * 2 / 216e5;
function Sr(e, t, n, r, i, a, o) {
	let s = t.w == null ? 1 : a / t.w, c = t.h == null ? 1 : o / t.h, l = (e) => r + e * s, u = (e) => i + e * c, d = 0, f = 0;
	for (let r of t.cmds) switch (r[0]) {
		case "m": {
			let t = l(n.resolve(r[1])), i = u(n.resolve(r[2]));
			e.moveTo(t, i), d = t, f = i;
			break;
		}
		case "l": {
			let t = l(n.resolve(r[1])), i = u(n.resolve(r[2]));
			e.lineTo(t, i), d = t, f = i;
			break;
		}
		case "C": {
			let t = l(n.resolve(r[1])), i = u(n.resolve(r[2])), a = l(n.resolve(r[3])), o = u(n.resolve(r[4])), s = l(n.resolve(r[5])), c = u(n.resolve(r[6]));
			e.bezierCurveTo(t, i, a, o, s, c), d = s, f = c;
			break;
		}
		case "Q": {
			let t = l(n.resolve(r[1])), i = u(n.resolve(r[2])), a = l(n.resolve(r[3])), o = u(n.resolve(r[4]));
			e.quadraticCurveTo(t, i, a, o), d = a, f = o;
			break;
		}
		case "a": {
			let t = n.resolve(r[1]), i = n.resolve(r[2]), a = t * s, o = i * c, l = n.resolve(r[3]) * xr, u = n.resolve(r[4]) * xr, p = Math.PI * 2, m = (e) => Math.atan2(t * Math.sin(e), i * Math.cos(e)), h = m(l), g = Math.trunc(u / p), _ = u - g * p, v = m(l + _) - h;
			_ > 0 && v < 0 ? v += p : _ < 0 && v > 0 && (v -= p);
			let y = h + v + g * p, b = d - a * Math.cos(h), x = f - o * Math.sin(h);
			Math.abs(a) > 1e-6 && Math.abs(o) > 1e-6 && (e.ellipse(b, x, Math.abs(a), Math.abs(o), 0, h, y, u < 0), d = b + a * Math.cos(y), f = x + o * Math.sin(y));
			break;
		}
		case "c":
			e.closePath();
			break;
	}
}
//#endregion
//#region packages/core/src/shape/preset-geometry/index.ts
var Cr = gr, wr = /* @__PURE__ */ new WeakMap();
function Tr(e) {
	let t = wr.get(e);
	return t || (t = {
		adj: e.adj.map(([e, t]) => [e, yr(t)]),
		gd: e.gd.map(([e, t]) => [e, yr(t)])
	}, wr.set(e, t)), t;
}
function Er(e, t, n, r) {
	let i = Tr(e);
	return br({
		w: t,
		h: n,
		adj: r
	}, i.adj, i.gd);
}
function Dr(e) {
	return e.toLowerCase() in Cr;
}
function Or(e, t, n, r, i, a, o = []) {
	let s = Cr[t.toLowerCase()];
	if (!s) return !1;
	let c = Er(s, i, a, o);
	for (let t of s.paths) Sr(e, t, c, n, r, i, a);
	return !0;
}
function kr(e, t, n, r, i, a, o = []) {
	let s = Cr[t.toLowerCase()];
	if (!s) return !1;
	let c = Er(s, i, a, o);
	for (let t of s.paths) t.fill !== "none" && Sr(e, t, c, n, r, i, a);
	return !0;
}
var Ar = {
	wedgeroundrectcallout: "roundrect",
	wedgeellipsecallout: "ellipse",
	wedgerectcallout: null
}, jr = {
	adj: [],
	gd: [],
	paths: [{
		w: null,
		h: null,
		fill: null,
		stroke: !0,
		extrusionOk: !1,
		cmds: [
			[
				"m",
				"l",
				"t"
			],
			[
				"l",
				"r",
				"t"
			],
			[
				"l",
				"r",
				"b"
			],
			[
				"l",
				"l",
				"b"
			],
			["c"]
		]
	}]
};
function Mr(e, t, n) {
	let r = e[n];
	if (typeof r == "number") return r;
	let i = t.adj[n];
	return i && Number(i[1].replace(/^val\s+/, "")) || 0;
}
function Nr(e, t, n, r) {
	let i = Cr[e];
	if (!i) return null;
	if (e in Ar) {
		let a = Mr(r, i, 0), o = Mr(r, i, 1), s = t / 2 + t * a / 1e5, c = n / 2 + n * o / 1e5;
		if (s >= 0 && s <= t && c >= 0 && c <= n) {
			let t = Ar[e];
			t === "roundrect" ? (i = Cr.roundrect, r = [Mr(r, Cr[e], 2)]) : t && Cr[t] ? (i = Cr[t], r = []) : (i = jr, r = []);
		}
	}
	return {
		def: i,
		adj: r
	};
}
function Pr(e, t, n, r, i, a = []) {
	let o = Nr(e.toLowerCase(), r, i, a);
	if (!o) return null;
	let s = Infinity, c = Infinity, l = -Infinity, u = -Infinity, d = (e, t) => {
		!Number.isFinite(e) || !Number.isFinite(t) || (s = Math.min(s, e), c = Math.min(c, t), l = Math.max(l, e), u = Math.max(u, t));
	}, f = {
		moveTo: d,
		lineTo: d,
		bezierCurveTo(e, t, n, r, i, a) {
			d(e, t), d(n, r), d(i, a);
		},
		quadraticCurveTo(e, t, n, r) {
			d(e, t), d(n, r);
		},
		ellipse(e, t, n, r) {
			d(e - Math.abs(n), t - Math.abs(r)), d(e + Math.abs(n), t + Math.abs(r));
		},
		closePath() {}
	}, p = Er(o.def, r, i, o.adj);
	for (let e of o.def.paths) Sr(f, e, p, t, n, r, i);
	return Number.isFinite(s) ? {
		x: s,
		y: c,
		w: l - s,
		h: u - c
	} : {
		x: t,
		y: n,
		w: r,
		h: i
	};
}
function Fr(e, t, n, r, i, a, o, s, c, l, u) {
	let d = Nr(t.toLowerCase(), i, a, o);
	if (!d) return !1;
	let { def: f } = d;
	o = d.adj;
	let p = Er(f, i, a, o), m = !1, h = f.paths.length - 1;
	for (let t = 0; t < f.paths.length; t++) {
		let o = f.paths[t];
		e.beginPath(), Sr(e, o, p, n, r, i, a);
		let d = o.fill;
		if (d !== "none" && s != null) {
			e.save(), e.fillStyle = s, e.fill();
			let t = Lr(d);
			t && (e.fillStyle = t, e.fill()), e.restore(), m ||= (l(), !0);
		}
		if (o.stroke && c) {
			let e = t === h && (o.fill === "none" || o.fill == null);
			u?.skipTrailingStroke && e || c();
		}
	}
	return !0;
}
function Ir(e, t, n, r, i, a) {
	let o = Cr[e.toLowerCase()];
	if (!o || o.paths.length === 0) return null;
	let s = o.paths[o.paths.length - 1], c = Er(o, r, i, a), l = s.w == null ? 1 : r / s.w, u = s.h == null ? 1 : i / s.h, d = (e) => t + e * l, f = (e) => n + e * u, p = 0, m = 0, h = 0, g = 0, _ = 0, v = 0, y = !1, b = 0, x = 0, S = [];
	for (let e of s.cmds) switch (e[0]) {
		case "m":
			h = d(c.resolve(e[1])), g = f(c.resolve(e[2])), p = h, m = g, S.push({
				x: h,
				y: g
			});
			break;
		case "l": {
			let t = d(c.resolve(e[1])), n = f(c.resolve(e[2]));
			y ||= (_ = t - h, v = n - g, !0), b = t - h, x = n - g, h = t, g = n, S.push({
				x: h,
				y: g
			});
			break;
		}
		case "C": {
			let t = d(c.resolve(e[1])), n = f(c.resolve(e[2])), r = d(c.resolve(e[3])), i = f(c.resolve(e[4])), a = d(c.resolve(e[5])), o = f(c.resolve(e[6]));
			y ||= (_ = t - h, v = n - g, !0), b = a - r, x = o - i, h = a, g = o, S.push({
				x: h,
				y: g
			});
			break;
		}
	}
	let C = Math.atan2(v, _) + Math.PI;
	return {
		start: {
			x: p,
			y: m,
			angle: C
		},
		end: {
			x: h,
			y: g,
			angle: Math.atan2(x, b)
		},
		vertices: S
	};
}
function Lr(e) {
	switch (e) {
		case "lighten": return "rgba(255,255,255,0.30)";
		case "lightenLess": return "rgba(255,255,255,0.15)";
		case "darken": return "rgba(0,0,0,0.30)";
		case "darkenLess": return "rgba(0,0,0,0.15)";
		default: return null;
	}
}
//#endregion
//#region packages/core/src/image/pixel-budget.ts
var Rr = 32767, zr = 1 << 25, Br = zr * 4, Vr = class e extends RangeError {
	code = "ooxml-decoded-image-limit";
	constructor(t, n, r) {
		super(`OOXML decoded image limit exceeded: ${t} ${r} > ${n}`), this.metric = t, this.limit = n, this.observed = r, this.name = "OoxmlDecodedImageLimitError", Object.setPrototypeOf(this, e.prototype);
	}
};
function Hr(e) {
	return e instanceof Vr || !!e && typeof e == "object" && e.code === "ooxml-decoded-image-limit";
}
//#endregion
//#region packages/core/src/image/dib.ts
var Ur = Rr, Wr = zr;
function Gr(e, t, n, r, i) {
	if (n < 40 || t + 40 > e.byteLength) return null;
	let a = e.getUint32(t, !0);
	if (a < 40) return null;
	let o = e.getInt32(t + 4, !0), s = e.getInt32(t + 8, !0), c = e.getUint16(t + 14, !0);
	if (e.getUint32(t + 16, !0) !== 0) return null;
	let l = s < 0, u = Math.abs(o), d = Math.abs(s);
	if (u <= 0 || d <= 0 || u > Ur || d > Ur || u * d > Wr) return null;
	let f = new Uint8ClampedArray(u * d * 4), p = u * c + 31 >> 5 << 2 >>> 0;
	if (r + p * d > r + i + p && r + p * d > e.byteLength) return null;
	let m = null;
	if (c <= 8) {
		let n = e.getUint32(t + 32, !0);
		n === 0 && (n = 1 << c);
		let r = t + a;
		m = [];
		for (let t = 0; t < n; t++) {
			let n = r + t * 4;
			if (n + 4 > e.byteLength) break;
			let i = e.getUint8(n), a = e.getUint8(n + 1), o = e.getUint8(n + 2);
			m.push(o << 16 | a << 8 | i);
		}
	}
	let h = (e, t, n, r, i, a) => {
		let o = (e * u + t) * 4;
		f[o] = n, f[o + 1] = r, f[o + 2] = i, f[o + 3] = a;
	}, g = !1;
	for (let t = 0; t < d; t++) {
		let n = l ? t : d - 1 - t, i = t, a = r + n * p;
		if (a + p > e.byteLength) break;
		if (c === 32) for (let t = 0; t < u; t++) {
			let n = a + t * 4, r = e.getUint8(n), o = e.getUint8(n + 1), s = e.getUint8(n + 2), c = e.getUint8(n + 3);
			c !== 0 && (g = !0), h(i, t, s, o, r, c);
		}
		else if (c === 24) {
			for (let t = 0; t < u; t++) {
				let n = a + t * 3;
				h(i, t, e.getUint8(n + 2), e.getUint8(n + 1), e.getUint8(n), 255);
			}
			g = !0;
		} else if (c === 8 && m) {
			for (let t = 0; t < u; t++) {
				let n = e.getUint8(a + t), r = m[n] ?? 0;
				h(i, t, r >> 16 & 255, r >> 8 & 255, r & 255, 255);
			}
			g = !0;
		} else if (c === 4 && m) {
			for (let t = 0; t < u; t++) {
				let n = e.getUint8(a + (t >> 1)), r = t & 1 ? n & 15 : n >> 4 & 15, o = m[r] ?? 0;
				h(i, t, o >> 16 & 255, o >> 8 & 255, o & 255, 255);
			}
			g = !0;
		} else if (c === 1 && m) {
			for (let t = 0; t < u; t++) {
				let n = e.getUint8(a + (t >> 3)) >> 7 - (t & 7) & 1, r = m[n] ?? 0;
				h(i, t, r >> 16 & 255, r >> 8 & 255, r & 255, 255);
			}
			g = !0;
		} else return null;
	}
	if (c === 32 && !g) for (let e = 3; e < f.length; e += 4) f[e] = 255;
	return {
		width: u,
		height: d,
		data: f
	};
}
function Kr(e, t, n) {
	if (n < 40 || t + 40 > e.byteLength) return null;
	let r = e.getUint32(t, !0);
	if (r < 40) return null;
	let i = e.getUint16(t + 14, !0), a = 0;
	if (i <= 8) {
		let n = e.getUint32(t + 32, !0);
		n === 0 && (n = 1 << i), a = n;
	} else a = e.getUint32(t + 32, !0);
	let o = r + a * 4, s = t + o, c = n - o;
	return c <= 0 ? null : Gr(e, t, o, s, c);
}
function qr(e, t, n, r, i, a) {
	try {
		let o = Ce(t.width, t.height);
		if (!o) return !1;
		let s = o.getContext("2d");
		if (!s) return !1;
		let c = s.createImageData(t.width, t.height);
		c.data.set(t.data), s.putImageData(c, 0, 0);
		let l = Math.min(n, i), u = Math.min(r, a), d = Math.abs(i - n), f = Math.abs(a - r);
		return e.drawImage(o, l, u, d, f), !0;
	} catch {
		return !1;
	}
}
//#endregion
//#region packages/core/src/image/emf.ts
var $ = {
	HEADER: 1,
	POLYBEZIER: 2,
	POLYGON: 3,
	POLYLINE: 4,
	POLYBEZIERTO: 5,
	POLYLINETO: 6,
	POLYPOLYLINE: 7,
	POLYPOLYGON: 8,
	SETWINDOWEXTEX: 9,
	SETWINDOWORGEX: 10,
	SETVIEWPORTEXTEX: 11,
	SETVIEWPORTORGEX: 12,
	EOF: 14,
	SETMAPMODE: 17,
	SETPOLYFILLMODE: 19,
	SETBKMODE: 18,
	SETTEXTALIGN: 22,
	SETTEXTCOLOR: 24,
	MOVETOEX: 27,
	SCALEVIEWPORTEXTEX: 31,
	SCALEWINDOWEXTEX: 32,
	SAVEDC: 33,
	RESTOREDC: 34,
	SETWORLDTRANSFORM: 35,
	MODIFYWORLDTRANSFORM: 36,
	SELECTOBJECT: 37,
	CREATEPEN: 38,
	CREATEBRUSHINDIRECT: 39,
	DELETEOBJECT: 40,
	ELLIPSE: 42,
	RECTANGLE: 43,
	LINETO: 54,
	BEGINPATH: 59,
	ENDPATH: 60,
	CLOSEFIGURE: 61,
	SELECTCLIPPATH: 67,
	EXTCREATEFONTINDIRECTW: 82,
	EXTTEXTOUTW: 84,
	POLYBEZIER16: 85,
	POLYGON16: 86,
	POLYLINE16: 87,
	POLYBEZIERTO16: 88,
	POLYLINETO16: 89,
	POLYPOLYLINE16: 90,
	POLYPOLYGON16: 91,
	CREATEMONOBRUSH: 93,
	CREATEDIBPATTERNBRUSHPT: 94,
	EXTCREATEPEN: 95,
	BITBLT: 76,
	STRETCHDIBITS: 81
}, Jr = {
	WHITE_BRUSH: 2147483648,
	LTGRAY_BRUSH: 2147483649,
	GRAY_BRUSH: 2147483650,
	DKGRAY_BRUSH: 2147483651,
	BLACK_BRUSH: 2147483652,
	NULL_BRUSH: 2147483653,
	WHITE_PEN: 2147483654,
	BLACK_PEN: 2147483655,
	NULL_PEN: 2147483656,
	DC_BRUSH: 2147483666,
	DC_PEN: 2147483662
}, Yr = {
	TEXT: 1,
	LOMETRIC: 2,
	HIMETRIC: 3,
	LOENGLISH: 4,
	HIENGLISH: 5,
	TWIPS: 6,
	ISOTROPIC: 7,
	ANISOTROPIC: 8
}, Xr = () => ({
	m11: 1,
	m12: 0,
	m21: 0,
	m22: 1,
	dx: 0,
	dy: 0
});
function Zr(e, t) {
	return {
		m11: e.m11 * t.m11 + e.m21 * t.m12,
		m12: e.m12 * t.m11 + e.m22 * t.m12,
		m21: e.m11 * t.m21 + e.m21 * t.m22,
		m22: e.m12 * t.m21 + e.m22 * t.m22,
		dx: e.m11 * t.dx + e.m21 * t.dy + e.dx,
		dy: e.m12 * t.dx + e.m22 * t.dy + e.dy
	};
}
var Qr = class {
	p;
	constructor(e, t, n) {
		this.dv = e, this.end = n, this.p = t;
	}
	get pos() {
		return this.p;
	}
	set pos(e) {
		this.p = e;
	}
	get remaining() {
		return this.end - this.p;
	}
	i16() {
		let e = this.dv.getInt16(this.p, !0);
		return this.p += 2, e;
	}
	i32() {
		let e = this.dv.getInt32(this.p, !0);
		return this.p += 4, e;
	}
	u32() {
		let e = this.dv.getUint32(this.p, !0);
		return this.p += 4, e;
	}
	f32() {
		let e = this.dv.getFloat32(this.p, !0);
		return this.p += 4, e;
	}
	xform() {
		return {
			m11: this.f32(),
			m12: this.f32(),
			m21: this.f32(),
			m22: this.f32(),
			dx: this.f32(),
			dy: this.f32()
		};
	}
	skip(e) {
		this.p += e;
	}
};
function $r(e, t, n) {
	return e.wt.m11 * t + e.wt.m21 * n + e.wt.dx;
}
function ei(e, t, n) {
	return e.wt.m12 * t + e.wt.m22 * n + e.wt.dy;
}
function ti(e) {
	return e.winExtX === 0 ? 1 : e.vpExtX / e.winExtX;
}
function ni(e) {
	return e.winExtY === 0 ? 1 : e.vpExtY / e.winExtY;
}
function ri(e) {
	return Math.min(Math.abs(ti(e)), Math.abs(ni(e)));
}
function ii(e) {
	return e.mapMode === Yr.ISOTROPIC ? ti(e) < 0 ? -ri(e) : ri(e) : ti(e);
}
function ai(e) {
	return e.mapMode === Yr.ISOTROPIC ? ni(e) < 0 ? -ri(e) : ri(e) : ni(e);
}
function oi(e, t) {
	return (t - e.winOrgX) * ii(e) + e.vpOrgX;
}
function si(e, t) {
	return (t - e.winOrgY) * ai(e) + e.vpOrgY;
}
function ci(e, t, n) {
	let r = oi(e, $r(e, t, n)), i = si(e, ei(e, t, n));
	return [(r - e.left) * e.W / e.boundsW, (i - e.top) * e.H / e.boundsH];
}
function li(e) {
	return (Math.hypot(e.wt.m11, e.wt.m12) + Math.hypot(e.wt.m21, e.wt.m22)) / 2;
}
function ui(e) {
	return (Math.abs(ii(e)) + Math.abs(ai(e))) / 2;
}
function di(e) {
	return (e.W / e.boundsW + e.H / e.boundsH) / 2;
}
function fi(e) {
	return Math.hypot(e.wt.m21, e.wt.m22);
}
function pi(e) {
	return e.H / e.boundsH;
}
function mi(e, t) {
	let n = t * li(e) * ui(e) * di(e);
	return Math.max(.75, n);
}
function hi(e, t) {
	if (e.mapMode = t, t === Yr.TEXT) {
		e.winOrgX = 0, e.winOrgY = 0, e.vpOrgX = 0, e.vpOrgY = 0, e.winExtX = 1, e.winExtY = 1, e.vpExtX = 1, e.vpExtY = 1;
		return;
	}
	if (t === Yr.ANISOTROPIC || t === Yr.ISOTROPIC || e.devPxPerMmX <= 0 || e.devPxPerMmY <= 0) return;
	let n = 25.4, r = t === Yr.LOMETRIC ? .1 : t === Yr.HIMETRIC ? .01 : t === Yr.LOENGLISH ? .01 * n : t === Yr.HIENGLISH ? .001 * n : t === Yr.TWIPS ? n / 1440 : 0;
	r <= 0 || (e.winOrgX = 0, e.winOrgY = 0, e.vpOrgX = 0, e.vpOrgY = 0, e.winExtX = 1, e.winExtY = 1, e.vpExtX = r * e.devPxPerMmX, e.vpExtY = -(r * e.devPxPerMmY));
}
var gi = {
	[Jr.WHITE_BRUSH]: {
		kind: "brush",
		fill: "#ffffff"
	},
	[Jr.LTGRAY_BRUSH]: {
		kind: "brush",
		fill: "#c0c0c0"
	},
	[Jr.GRAY_BRUSH]: {
		kind: "brush",
		fill: "#808080"
	},
	[Jr.DKGRAY_BRUSH]: {
		kind: "brush",
		fill: "#404040"
	},
	[Jr.BLACK_BRUSH]: {
		kind: "brush",
		fill: "#000000"
	},
	[Jr.NULL_BRUSH]: {
		kind: "brush",
		fill: null
	}
}, _i = {
	[Jr.WHITE_PEN]: {
		kind: "pen",
		stroke: "#ffffff",
		width: 1
	},
	[Jr.BLACK_PEN]: {
		kind: "pen",
		stroke: "#000000",
		width: 1
	},
	[Jr.NULL_PEN]: {
		kind: "pen",
		stroke: null,
		width: 1
	},
	[Jr.DC_PEN]: {
		kind: "pen",
		stroke: "#000000",
		width: 1
	}
};
function vi(e, t) {
	let n = gi[t];
	if (n) {
		e.curBrush = n;
		return;
	}
	let r = _i[t];
	if (r) {
		e.curPen = r;
		return;
	}
	t === Jr.DC_BRUSH && (e.curBrush = e.curBrush ?? {
		kind: "brush",
		fill: "#000000"
	});
}
function yi(e) {
	let t = 0, n = 0, r = 0, i = 0;
	for (let a = 0; a < e.data.length; a += 4) e.data[a + 3] !== 0 && (t += e.data[a], n += e.data[a + 1], r += e.data[a + 2], i++);
	if (i === 0) return "#808080";
	let a = (e) => Math.round(e / i).toString(16).padStart(2, "0");
	return `#${a(t)}${a(n)}${a(r)}`;
}
var bi = (e) => [e.i16(), e.i16()], xi = (e) => [e.i32(), e.i32()];
function Si(e, t, n) {
	t.skip(16);
	let r = t.u32();
	if (r < 2 || r > 1048576 || !e.curPen || e.curPen.stroke == null) return;
	let { ctx: i } = e;
	i.beginPath();
	let a = 0, o = 0;
	for (let s = 0; s < r && !(t.remaining < 4); s++) {
		let [r, c] = n(t), [l, u] = ci(e, r, c);
		s === 0 ? i.moveTo(l, u) : i.lineTo(l, u), a = r, o = c;
	}
	i.strokeStyle = e.curPen.stroke, i.lineWidth = mi(e, e.curPen.width), i.stroke(), e.drew = !0, e.curX = a, e.curY = o;
}
function Ci(e, t, n) {
	t.skip(16);
	let r = t.u32();
	if (r < 1 || r > 1048576) return;
	let { ctx: i } = e, a = e.curPen != null && e.curPen.stroke != null;
	if (a) {
		i.beginPath();
		let [t, n] = ci(e, e.curX, e.curY);
		i.moveTo(t, n);
	}
	for (let o = 0; o < r && !(t.remaining < 4); o++) {
		let [r, o] = n(t);
		if (a) {
			let [t, n] = ci(e, r, o);
			i.lineTo(t, n);
		}
		e.curX = r, e.curY = o;
	}
	a && e.curPen && (i.strokeStyle = e.curPen.stroke, i.lineWidth = mi(e, e.curPen.width), i.stroke(), e.drew = !0);
}
function wi(e, t, n) {
	t.skip(16);
	let r = t.u32();
	if (r < 2 || r > 1048576) return;
	let { ctx: i } = e;
	e.inPath || i.beginPath();
	let a = !1;
	for (let o = 0; o < r && !(t.remaining < 4); o++) {
		let [r, o] = n(t), [s, c] = ci(e, r, o);
		a ? i.lineTo(s, c) : (i.moveTo(s, c), a = !0);
	}
	a && (i.closePath(), !e.inPath && (e.curBrush && e.curBrush.fill != null && (i.fillStyle = e.curBrush.fill, i.fill(e.fillRule), e.drew = !0), e.curPen && e.curPen.stroke != null && (i.strokeStyle = e.curPen.stroke, i.lineWidth = mi(e, e.curPen.width), i.stroke(), e.drew = !0)));
}
function Ti(e, t, n, r) {
	t.skip(16);
	let i = t.u32();
	if (i < 1 || i > 1048576) return;
	let a = [];
	for (let e = 0; e < i && !(t.remaining < 4); e++) a.push(n(t));
	if (a.length < (r ? 3 : 4)) {
		a.length && (e.curX = a[a.length - 1][0], e.curY = a[a.length - 1][1]);
		return;
	}
	let o = e.curPen != null && e.curPen.stroke != null, { ctx: s } = e;
	if (o) {
		s.beginPath();
		let t = r ? ci(e, e.curX, e.curY) : ci(e, a[0][0], a[0][1]);
		s.moveTo(t[0], t[1]);
	}
	let c = +!r;
	for (; c + 2 < a.length + +!!r; c += 3) {
		let t = a[c], n = a[c + 1], r = a[c + 2];
		if (!t || !n || !r) break;
		if (o) {
			let i = ci(e, t[0], t[1]), a = ci(e, n[0], n[1]), o = ci(e, r[0], r[1]);
			s.bezierCurveTo(i[0], i[1], a[0], a[1], o[0], o[1]);
		}
		e.curX = r[0], e.curY = r[1];
	}
	o && e.curPen && (s.strokeStyle = e.curPen.stroke, s.lineWidth = mi(e, e.curPen.width), s.stroke(), e.drew = !0);
}
function Ei(e, t, n, r) {
	t.skip(16);
	let i = t.u32(), a = t.u32();
	if (i <= 0 || i > 65536 || a <= 0 || a > 2097152) return;
	let o = [];
	for (let e = 0; e < i; e++) {
		if (t.remaining < 4) return;
		o.push(t.u32());
	}
	let { ctx: s } = e;
	e.inPath || s.beginPath();
	let c = !1;
	for (let i of o) {
		if (i < 2) {
			for (let e = 0; e < i && t.remaining >= 4; e++) n(t);
			continue;
		}
		for (let r = 0; r < i && !(t.remaining < 4); r++) {
			let [i, a] = n(t), [o, c] = ci(e, i, a);
			r === 0 ? s.moveTo(o, c) : s.lineTo(o, c);
		}
		r && s.closePath(), c = !0;
	}
	!c || e.inPath || (r && e.curBrush && e.curBrush.fill != null && (s.fillStyle = e.curBrush.fill, s.fill(e.fillRule), e.drew = !0), e.curPen && e.curPen.stroke != null && (s.strokeStyle = e.curPen.stroke, s.lineWidth = mi(e, e.curPen.width), s.stroke(), e.drew = !0));
}
function Di(e, t, n, r, i) {
	let { ctx: a } = e, o = ci(e, t, n), s = ci(e, r, n), c = ci(e, r, i), l = ci(e, t, i);
	e.inPath || a.beginPath(), a.moveTo(o[0], o[1]), a.lineTo(s[0], s[1]), a.lineTo(c[0], c[1]), a.lineTo(l[0], l[1]), a.closePath(), !e.inPath && (e.curBrush && e.curBrush.fill != null && (a.fillStyle = e.curBrush.fill, a.fill(e.fillRule), e.drew = !0), e.curPen && e.curPen.stroke != null && (a.strokeStyle = e.curPen.stroke, a.lineWidth = mi(e, e.curPen.width), a.stroke(), e.drew = !0));
}
function Oi(e) {
	let t = e.u32(), n = e.u32(), r = e.i32();
	e.i32();
	let i = e.u32();
	return [t, {
		kind: "pen",
		stroke: (n & 255) == 5 ? null : ia(i),
		width: Math.abs(r)
	}];
}
function ki(e) {
	let t = e.u32();
	e.skip(16);
	let n = e.u32(), r = e.u32();
	e.u32();
	let i = e.u32();
	return [t, {
		kind: "pen",
		stroke: (n & 255) == 5 ? null : ia(i),
		width: Math.abs(r)
	}];
}
function Ai(e) {
	let t = e.u32(), n = e.u32(), r = e.u32();
	return e.u32(), [t, {
		kind: "brush",
		fill: n === 1 ? null : ia(r)
	}];
}
function ji(e, t, n) {
	let r = e.u32();
	e.u32();
	let i = e.u32(), a = e.u32(), o = e.u32(), s = e.u32(), c = "#808080";
	try {
		let e = Gr(t, n + i, a, n + o, s);
		e && (c = yi(e));
	} catch {}
	return [r, {
		kind: "brush",
		fill: c
	}];
}
function Mi(e, t, n) {
	let r = e.u32(), i = n + 12, a = t.getInt32(i, !0), o = t.getInt32(i + 8, !0), s = t.getInt32(i + 16, !0), c = t.getUint8(i + 20), l = "";
	for (let e = 0; e < 32; e++) {
		let n = i + 28 + e * 2;
		if (n + 2 > t.byteLength) break;
		let r = t.getUint16(n, !0);
		if (r === 0) break;
		l += String.fromCharCode(r);
	}
	return [r, {
		kind: "font",
		height: Math.abs(a),
		weight: s,
		italic: c !== 0,
		face: l,
		escapement: o
	}];
}
function Ni(e, t, n, r) {
	t.skip(16), t.u32(), t.f32(), t.f32();
	let i = t.i32(), a = t.i32(), o = t.u32(), s = t.u32();
	if (t.u32(), o <= 0 || o > 65536) return;
	let c = "";
	for (let e = 0; e < o; e++) {
		let t = r + s + e * 2;
		if (t + 2 > n.byteLength) break;
		c += String.fromCharCode(n.getUint16(t, !0));
	}
	if (c.length === 0) return;
	let l = e.curFont, u = Math.abs(l?.height ?? 0) * fi(e) * Math.abs(ai(e)) * pi(e);
	if (!Number.isFinite(u) || u < 1) return;
	let { ctx: d } = e, [f, p] = ci(e, i, a);
	d.fillStyle = e.textColor;
	let m = l && l.weight >= 700 ? "bold " : "";
	d.font = `${l?.italic ? "italic " : ""}${m}${u}px ${l?.face || "sans-serif"}`;
	let h = e.textAlign & 6;
	d.textAlign = h === 2 ? "right" : h === 6 ? "center" : "left", d.textBaseline = (e.textAlign & 24) == 24 ? "alphabetic" : "top";
	let g = l?.escapement ?? 0;
	try {
		if (g !== 0) {
			d.save();
			try {
				d.translate(f, p), d.rotate(-g / 10 * (Math.PI / 180)), d.fillText(c, 0, 0);
			} finally {
				d.restore();
			}
		} else d.fillText(c, f, p);
		e.drew = !0;
	} catch {}
}
function Pi(e, t, n, r, i, a, o, s, c, l, u) {
	if (i === 0 || o === 0) return;
	let d = Gr(t, n + r, i, n + a, o);
	if (!d) return;
	let [f, p] = ci(e, s, c), [m, h] = ci(e, l, u);
	qr(e.ctx, d, f, p, m, h) && (e.drew = !0);
}
function Fi(e, t, n, r) {
	t.skip(16);
	let i = t.i32(), a = t.i32(), o = t.i32(), s = t.i32();
	t.u32(), t.i32(), t.i32(), t.skip(24), t.u32(), t.u32(), Pi(e, n, r, t.u32(), t.u32(), t.u32(), t.u32(), i, a, i + o, a + s);
}
function Ii(e, t, n, r) {
	t.skip(16);
	let i = t.i32(), a = t.i32();
	t.i32(), t.i32(), t.i32(), t.i32();
	let o = t.u32(), s = t.u32(), c = t.u32(), l = t.u32();
	t.u32(), t.u32();
	let u = t.i32(), d = t.i32();
	Pi(e, n, r, o, s, c, l, i, a, i + u, a + d);
}
function Li(e, t, n, r) {
	if (!na(e) || n <= 0 || r <= 0) return !1;
	let i = new DataView(e.buffer, e.byteOffset, e.byteLength), a = {
		ctx: t,
		W: n,
		H: r,
		left: 0,
		top: 0,
		boundsW: n,
		boundsH: r,
		wt: Xr(),
		mapMode: Yr.TEXT,
		winOrgX: 0,
		winOrgY: 0,
		winExtX: 1,
		winExtY: 1,
		vpOrgX: 0,
		vpOrgY: 0,
		vpExtX: 1,
		vpExtY: 1,
		devPxPerMmX: 0,
		devPxPerMmY: 0,
		objects: /* @__PURE__ */ new Map(),
		curPen: null,
		curBrush: null,
		curFont: null,
		textColor: "#000000",
		bkMode: 1,
		textAlign: 0,
		fillRule: "nonzero",
		curX: 0,
		curY: 0,
		stack: [],
		drew: !1,
		inPath: !1
	}, o = 0;
	for (; o + 8 <= e.length;) {
		let n = i.getUint32(o, !0), r = i.getUint32(o + 4, !0);
		if (r < 8 || r & 3) break;
		let s = o + r;
		if (s > e.length || n === $.EOF) break;
		let c = new Qr(i, o + 8, s);
		try {
			switch (n) {
				case $.HEADER: {
					let e = i.getInt32(o + 8, !0), t = i.getInt32(o + 12, !0), n = i.getInt32(o + 16, !0), r = i.getInt32(o + 20, !0);
					if (a.left = e, a.top = t, a.boundsW = Math.max(1, n - e), a.boundsH = Math.max(1, r - t), s >= o + 88) {
						let e = i.getInt32(o + 24, !0), t = i.getInt32(o + 28, !0), n = i.getInt32(o + 32, !0), r = i.getInt32(o + 36, !0), s = i.getInt32(o + 72, !0), c = i.getInt32(o + 76, !0), l = i.getInt32(o + 80, !0), u = i.getInt32(o + 84, !0), d = n - e, f = r - t;
						if (d > 0 && f > 0 && s > 0 && c > 0 && l > 0 && u > 0) {
							let n = s / (l * 100), r = c / (u * 100);
							a.left = e * n, a.top = t * r, a.boundsW = Math.max(1, d * n), a.boundsH = Math.max(1, f * r), a.devPxPerMmX = s / l, a.devPxPerMmY = c / u;
						}
					}
					break;
				}
				case $.SETWORLDTRANSFORM:
					a.wt = c.xform();
					break;
				case $.MODIFYWORLDTRANSFORM: {
					let e = c.xform(), t = c.u32();
					t === 1 ? a.wt = Xr() : t === 2 ? a.wt = Zr(e, a.wt) : t === 3 ? a.wt = Zr(a.wt, e) : t === 4 && (a.wt = e);
					break;
				}
				case $.SETMAPMODE:
					hi(a, c.u32());
					break;
				case $.SETWINDOWORGEX:
					a.winOrgX = c.i32(), a.winOrgY = c.i32();
					break;
				case $.SETWINDOWEXTEX: {
					let e = c.i32(), t = c.i32();
					e !== 0 && (a.winExtX = e), t !== 0 && (a.winExtY = t);
					break;
				}
				case $.SETVIEWPORTORGEX:
					a.vpOrgX = c.i32(), a.vpOrgY = c.i32();
					break;
				case $.SETVIEWPORTEXTEX: {
					let e = c.i32(), t = c.i32();
					e !== 0 && (a.vpExtX = e), t !== 0 && (a.vpExtY = t);
					break;
				}
				case $.SCALEWINDOWEXTEX: {
					let e = c.i32(), t = c.i32(), n = c.i32(), r = c.i32();
					t !== 0 && (a.winExtX = a.winExtX * e / t), r !== 0 && (a.winExtY = a.winExtY * n / r);
					break;
				}
				case $.SCALEVIEWPORTEXTEX: {
					let e = c.i32(), t = c.i32(), n = c.i32(), r = c.i32();
					t !== 0 && (a.vpExtX = a.vpExtX * e / t), r !== 0 && (a.vpExtY = a.vpExtY * n / r);
					break;
				}
				case $.SAVEDC:
					a.ctx.save(), a.stack.push({
						wt: { ...a.wt },
						mapMode: a.mapMode,
						winOrgX: a.winOrgX,
						winOrgY: a.winOrgY,
						winExtX: a.winExtX,
						winExtY: a.winExtY,
						vpOrgX: a.vpOrgX,
						vpOrgY: a.vpOrgY,
						vpExtX: a.vpExtX,
						vpExtY: a.vpExtY,
						curPen: a.curPen,
						curBrush: a.curBrush,
						curFont: a.curFont,
						textColor: a.textColor,
						bkMode: a.bkMode,
						textAlign: a.textAlign,
						fillRule: a.fillRule,
						curX: a.curX,
						curY: a.curY
					});
					break;
				case $.RESTOREDC: {
					let e = c.i32(), t = Math.min(Math.abs(e) || 1, a.stack.length), n;
					for (let e = 0; e < t; e++) n = a.stack.pop(), a.ctx.restore();
					n && (a.wt = n.wt, a.mapMode = n.mapMode, a.winOrgX = n.winOrgX, a.winOrgY = n.winOrgY, a.winExtX = n.winExtX, a.winExtY = n.winExtY, a.vpOrgX = n.vpOrgX, a.vpOrgY = n.vpOrgY, a.vpExtX = n.vpExtX, a.vpExtY = n.vpExtY, a.curPen = n.curPen, a.curBrush = n.curBrush, a.curFont = n.curFont, a.textColor = n.textColor, a.bkMode = n.bkMode, a.textAlign = n.textAlign, a.fillRule = n.fillRule, a.curX = n.curX, a.curY = n.curY);
					break;
				}
				case $.BEGINPATH:
					a.ctx.beginPath(), a.inPath = !0;
					break;
				case $.CLOSEFIGURE:
					a.inPath && a.ctx.closePath();
					break;
				case $.ENDPATH:
					a.inPath = !1;
					break;
				case $.SELECTCLIPPATH:
					try {
						a.ctx.clip(a.fillRule);
					} catch {}
					break;
				case $.SELECTOBJECT: {
					let e = c.u32();
					if (e & 2147483648) vi(a, e >>> 0);
					else {
						let t = a.objects.get(e);
						t?.kind === "pen" ? a.curPen = t : t?.kind === "brush" ? a.curBrush = t : t?.kind === "font" && (a.curFont = t);
					}
					break;
				}
				case $.DELETEOBJECT: {
					let e = c.u32(), t = a.objects.get(e);
					t && (t === a.curPen && (a.curPen = null), t === a.curBrush && (a.curBrush = null), t === a.curFont && (a.curFont = null), a.objects.delete(e));
					break;
				}
				case $.CREATEPEN: {
					let [e, t] = Oi(c);
					a.objects.set(e, t);
					break;
				}
				case $.EXTCREATEPEN: {
					let [e, t] = ki(c);
					a.objects.set(e, t);
					break;
				}
				case $.CREATEBRUSHINDIRECT: {
					let [e, t] = Ai(c);
					a.objects.set(e, t);
					break;
				}
				case $.CREATEMONOBRUSH:
				case $.CREATEDIBPATTERNBRUSHPT: {
					let [e, t] = ji(c, i, o);
					a.objects.set(e, t);
					break;
				}
				case $.EXTCREATEFONTINDIRECTW: {
					let [e, t] = Mi(c, i, o);
					a.objects.set(e, t);
					break;
				}
				case $.POLYLINE16:
					Si(a, c, bi);
					break;
				case $.POLYLINE:
					Si(a, c, xi);
					break;
				case $.POLYLINETO16:
					Ci(a, c, bi);
					break;
				case $.POLYLINETO:
					Ci(a, c, xi);
					break;
				case $.POLYGON16:
					wi(a, c, bi);
					break;
				case $.POLYGON:
					wi(a, c, xi);
					break;
				case $.POLYBEZIER16:
					Ti(a, c, bi, !1);
					break;
				case $.POLYBEZIER:
					Ti(a, c, xi, !1);
					break;
				case $.POLYBEZIERTO16:
					Ti(a, c, bi, !0);
					break;
				case $.POLYBEZIERTO:
					Ti(a, c, xi, !0);
					break;
				case $.POLYPOLYGON16:
					Ei(a, c, bi, !0);
					break;
				case $.POLYPOLYGON:
					Ei(a, c, xi, !0);
					break;
				case $.POLYPOLYLINE16:
					Ei(a, c, bi, !1);
					break;
				case $.POLYPOLYLINE:
					Ei(a, c, xi, !1);
					break;
				case $.MOVETOEX:
					a.curX = c.i32(), a.curY = c.i32();
					break;
				case $.LINETO: {
					let e = c.i32(), n = c.i32();
					if (a.curPen && a.curPen.stroke != null) {
						let [r, i] = ci(a, a.curX, a.curY), [o, s] = ci(a, e, n);
						t.beginPath(), t.moveTo(r, i), t.lineTo(o, s), t.strokeStyle = a.curPen.stroke, t.lineWidth = mi(a, a.curPen.width), t.stroke(), a.drew = !0;
					}
					a.curX = e, a.curY = n;
					break;
				}
				case $.RECTANGLE:
					Di(a, c.i32(), c.i32(), c.i32(), c.i32());
					break;
				case $.ELLIPSE: {
					let e = c.i32(), n = c.i32(), r = c.i32(), i = c.i32(), [o, s] = [(e + r) / 2, (n + i) / 2], [l, u] = ci(a, o, s), [d] = ci(a, r, s), [, f] = ci(a, o, i), p = Math.abs(d - l), m = Math.abs(f - u);
					t.beginPath(), t.ellipse(l, u, p, m, 0, 0, Math.PI * 2), a.curBrush && a.curBrush.fill != null && (t.fillStyle = a.curBrush.fill, t.fill(a.fillRule), a.drew = !0), a.curPen && a.curPen.stroke != null && (t.strokeStyle = a.curPen.stroke, t.lineWidth = mi(a, a.curPen.width), t.stroke(), a.drew = !0);
					break;
				}
				case $.SETPOLYFILLMODE:
					a.fillRule = c.u32() === 1 ? "evenodd" : "nonzero";
					break;
				case $.SETTEXTCOLOR:
					a.textColor = ia(c.u32());
					break;
				case $.SETTEXTALIGN:
					a.textAlign = c.u32();
					break;
				case $.SETBKMODE:
					a.bkMode = c.u32();
					break;
				case $.EXTTEXTOUTW:
					Ni(a, c, i, o);
					break;
				case $.BITBLT:
					Fi(a, c, i, o);
					break;
				case $.STRETCHDIBITS:
					Ii(a, c, i, o);
					break;
				default: break;
			}
		} catch {}
		o = s;
	}
	return a.drew;
}
async function Ri(e, t, n) {
	if (!na(e) || t <= 0 || n <= 0) return null;
	let r = Ce(t, n);
	if (!r) return null;
	let i = r.getContext("2d");
	return !i || (i.lineJoin = "round", i.lineCap = "round", !Li(e, i, t, n)) ? null : createImageBitmap(r);
}
//#endregion
//#region packages/core/src/image/raster-dimensions.ts
function zi(e, t) {
	return e[t] << 8 | e[t + 1];
}
function Bi(e, t) {
	return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
}
function Vi(e, t) {
	return e[t] | e[t + 1] << 8;
}
function Hi(e, t) {
	return e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24 | 0;
}
function Ui(e) {
	let t = e.length;
	return t >= 24 && e[0] === 137 && e[1] === 80 && e[2] === 78 && e[3] === 71 && e[4] === 13 && e[5] === 10 && e[6] === 26 && e[7] === 10 ? e[12] === 73 && e[13] === 72 && e[14] === 68 && e[15] === 82 ? {
		width: Bi(e, 16),
		height: Bi(e, 20)
	} : null : t >= 10 && e[0] === 71 && e[1] === 73 && e[2] === 70 && e[3] === 56 && (e[4] === 55 || e[4] === 57) && e[5] === 97 ? {
		width: Vi(e, 6),
		height: Vi(e, 8)
	} : t >= 26 && e[0] === 66 && e[1] === 77 ? Wi(e, 14) === 12 ? {
		width: Vi(e, 18),
		height: Vi(e, 20)
	} : {
		width: Math.abs(Hi(e, 18)),
		height: Math.abs(Hi(e, 22))
	} : t >= 16 && e[0] === 82 && e[1] === 73 && e[2] === 70 && e[3] === 70 && e[8] === 87 && e[9] === 69 && e[10] === 66 && e[11] === 80 ? Gi(e) : t >= 4 && e[0] === 255 && e[1] === 216 ? Ki(e) : null;
}
function Wi(e, t) {
	return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0;
}
function Gi(e) {
	let t = e.length, n = e[12], r = e[13], i = e[14], a = e[15];
	if (n === 86 && r === 80 && i === 56 && a === 32) return t < 30 ? null : {
		width: Vi(e, 26) & 16383,
		height: Vi(e, 28) & 16383
	};
	if (n === 86 && r === 80 && i === 56 && a === 76) {
		if (t < 25 || e[20] !== 47) return null;
		let n = Wi(e, 21);
		return {
			width: (n & 16383) + 1,
			height: (n >>> 14 & 16383) + 1
		};
	}
	return n === 86 && r === 80 && i === 56 && a === 88 ? t < 30 ? null : {
		width: (e[24] | e[25] << 8 | e[26] << 16) + 1,
		height: (e[27] | e[28] << 8 | e[29] << 16) + 1
	} : null;
}
function Ki(e) {
	let t = e.length, n = 2;
	for (; n + 1 < t;) {
		if (e[n] !== 255) {
			n += 1;
			continue;
		}
		let r = e[n + 1];
		if (r === 255) {
			n += 1;
			continue;
		}
		if (r === 216 || r === 1 || r >= 208 && r <= 215) {
			n += 2;
			continue;
		}
		if (r === 217 || n + 3 >= t) return null;
		let i = zi(e, n + 2);
		if (r >= 192 && r <= 207 && r !== 196 && r !== 200 && r !== 204) {
			if (n + 8 >= t) return null;
			let r = zi(e, n + 5);
			return {
				width: zi(e, n + 7),
				height: r
			};
		}
		if (i < 2) return null;
		n += 2 + i;
	}
	return null;
}
function qi(e) {
	let { width: t, height: n } = e;
	return !Number.isFinite(t) || !Number.isFinite(n) || t <= 0 || n <= 0 || t > 32767 || n > 32767 ? !0 : t * n > zr;
}
//#endregion
//#region packages/core/src/image/image-bitmap-lifecycle.ts
function Ji(e) {
	let t = e.close;
	typeof t == "function" && t.call(e);
}
//#endregion
//#region packages/core/src/image/wmf.ts
var Yi = {
	EOF: 0,
	SETBKMODE: 258,
	SETTEXTALIGN: 302,
	SETTEXTCOLOR: 521,
	SETPOLYFILLMODE: 262,
	SETWINDOWORG: 523,
	SETWINDOWEXT: 524,
	SELECTOBJECT: 301,
	DELETEOBJECT: 496,
	TEXTOUT: 1313,
	POLYGON: 804,
	POLYLINE: 805,
	POLYPOLYGON: 1336,
	RECTANGLE: 1051,
	CREATEPENINDIRECT: 762,
	CREATEFONTINDIRECT: 763,
	CREATEBRUSHINDIRECT: 764,
	DIBBITBLT: 2368,
	DIBSTRETCHBLT: 2881,
	STRETCHDIBITS: 3907
}, Xi = 2596720087, Zi = 22, Qi = 18, $i = 1179469088;
function ea(e, t) {
	if (e.length < t + Qi) return !1;
	let n = e[t] | e[t + 1] << 8, r = e[t + 2] | e[t + 3] << 8;
	return (n === 1 || n === 2) && r === 9;
}
function ta(e) {
	return e.length < 4 ? !1 : (e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24) >>> 0 === Xi ? !0 : ea(e, 0);
}
function na(e) {
	if (e.length < 44) return !1;
	let t = new DataView(e.buffer, e.byteOffset, e.byteLength);
	return t.getUint32(0, !0) === 1 && t.getUint32(40, !0) === $i;
}
function ra(e) {
	return e === "image/wmf" || e === "image/emf";
}
function ia(e) {
	let t = e & 255, n = e >>> 8 & 255, r = e >>> 16 & 255, i = (e) => e.toString(16).padStart(2, "0");
	return `#${i(t)}${i(n)}${i(r)}`;
}
function aa(e, t) {
	for (let n = 0; n < e.length; n++) if (e[n] == null) {
		e[n] = t;
		return;
	}
	e.push(t);
}
var oa = class {
	p = 0;
	constructor(e, t, n) {
		this.b = e, this.end = n, this.p = t;
	}
	get remaining() {
		return this.end - this.p;
	}
	i16() {
		let e = this.u16();
		return e >= 32768 ? e - 65536 : e;
	}
	u16() {
		let e = this.b[this.p] | this.b[this.p + 1] << 8;
		return this.p += 2, e;
	}
	u8() {
		return this.b[this.p++];
	}
	u32() {
		let e = (this.b[this.p] | this.b[this.p + 1] << 8 | this.b[this.p + 2] << 16 | this.b[this.p + 3] << 24) >>> 0;
		return this.p += 4, e;
	}
	bytes(e) {
		let t = Math.min(this.p + Math.max(0, e), this.end), n = this.b.subarray(this.p, t);
		return this.p = t, n;
	}
	skip(e) {
		this.p = Math.min(this.p + Math.max(0, e), this.end);
	}
};
function sa(e, t) {
	return (t - e.orgX) * (e.W / e.extX);
}
function ca(e, t) {
	return (t - e.orgY) * (e.H / e.extY);
}
function la(e, t) {
	let n = t * Math.abs(e.W / e.extX);
	return n >= 1 ? n : 1;
}
var ua = .001;
function da(e, t, n) {
	return Math.abs(e - t) <= ua || Math.abs(e - n) <= ua;
}
function fa(e, t, n) {
	let r = [], i = n ? t.length : t.length - 1;
	for (let n = 0; n < i; n++) {
		let i = t[n], a = t[(n + 1) % t.length], o = Math.abs(i[0] - a[0]) <= ua && da(i[0], 0, e.W) && da(a[0], 0, e.W), s = Math.abs(i[1] - a[1]) <= ua && da(i[1], 0, e.H) && da(a[1], 0, e.H);
		o || s || r.push([i, a]);
	}
	return r;
}
function pa(e, t, n) {
	if (!e.curPen || e.curPen.stroke == null || t.length < 2) return;
	let { ctx: r } = e;
	if (r.strokeStyle = e.curPen.stroke, r.lineWidth = la(e, e.curPen.width), !e.suppressBoundaryFrame) {
		r.beginPath(), r.moveTo(t[0][0], t[0][1]);
		for (let e = 1; e < t.length; e++) r.lineTo(t[e][0], t[e][1]);
		n && r.closePath(), r.stroke(), e.drew = !0;
		return;
	}
	let i = fa(e, t, n);
	if (i.length === 0) return;
	r.beginPath();
	let a = null;
	for (let [e, t] of i) (!a || a[0] !== e[0] || a[1] !== e[1]) && r.moveTo(e[0], e[1]), r.lineTo(t[0], t[1]), a = t;
	r.stroke(), e.drew = !0;
}
function ma(e, t, n) {
	let r = [];
	for (let i = 0; i < n && !(t.remaining < 4); i++) {
		let n = t.i16(), i = t.i16();
		r.push([sa(e, n), ca(e, i)]);
	}
	return r;
}
function ha(e, t) {
	t.length < 2 || !e.curPen || e.curPen.stroke == null || pa(e, t, !1);
}
function ga(e, t) {
	if (t.length < 2) return;
	let { ctx: n } = e;
	if (e.curBrush && e.curBrush.fill != null) {
		n.beginPath(), n.moveTo(t[0][0], t[0][1]);
		for (let e = 1; e < t.length; e++) n.lineTo(t[e][0], t[e][1]);
		n.closePath(), n.fillStyle = e.curBrush.fill, n.fill(e.fillRule), e.drew = !0;
	}
	pa(e, t, !0);
}
function _a(e, t) {
	let n = t.u16();
	if (n <= 0 || n > 65536) return;
	let r = [];
	for (let e = 0; e < n; e++) {
		if (t.remaining < 2) return;
		r.push(t.u16());
	}
	let { ctx: i } = e;
	i.beginPath();
	let a = !1;
	for (let n of r) {
		if (n < 2) {
			for (let e = 0; e < n && t.remaining >= 4; e++) t.i16(), t.i16();
			continue;
		}
		let r = ma(e, t, n);
		if (!(r.length < 2)) {
			i.moveTo(r[0][0], r[0][1]);
			for (let e = 1; e < r.length; e++) i.lineTo(r[e][0], r[e][1]);
			i.closePath(), a = !0;
		}
	}
	a && (e.curBrush && e.curBrush.fill != null && (i.fillStyle = e.curBrush.fill, i.fill(e.fillRule), e.drew = !0), e.curPen && e.curPen.stroke != null && (i.strokeStyle = e.curPen.stroke, i.lineWidth = la(e, e.curPen.width), i.stroke(), e.drew = !0));
}
function va(e) {
	let t = e.u16(), n = e.i16();
	e.i16();
	let r = e.u32();
	return {
		kind: "pen",
		stroke: (t & 255) == 5 ? null : ia(r),
		width: Math.abs(n)
	};
}
function ya(e) {
	let t = e.u16(), n = e.u32();
	return e.u16(), {
		kind: "brush",
		fill: t === 1 ? null : ia(n)
	};
}
function ba(e) {
	let t = e.indexOf(0), n = t >= 0 ? e.subarray(0, t) : e;
	if (n.length === 0) return "";
	try {
		return new TextDecoder("shift_jis").decode(n);
	} catch {
		return String.fromCharCode(...n);
	}
}
function xa(e) {
	let t = Math.abs(e.i16());
	e.i16(), e.i16(), e.i16();
	let n = e.i16(), r = e.u8() !== 0;
	return e.u8(), e.u8(), e.u8(), e.u8(), e.u8(), e.u8(), e.u8(), {
		kind: "font",
		height: t,
		weight: n,
		italic: r,
		face: ba(e.bytes(Math.min(32, e.remaining)))
	};
}
function Sa(e, t, n, r) {
	if (t.length === 0) return;
	let i = e.curFont, a = i?.height || 12, o = Math.abs(ca(e, e.orgY + a) - ca(e, e.orgY));
	if (!Number.isFinite(o) || o < 1) return;
	let { ctx: s } = e;
	try {
		s.fillStyle = e.textColor;
		let a = i && i.weight >= 700 ? "bold " : "";
		s.font = `${i?.italic ? "italic " : ""}${a}${o}px ${i?.face || "sans-serif"}`;
		let c = e.textAlign & 6;
		s.textAlign = c === 2 ? "right" : c === 6 ? "center" : "left", s.textBaseline = (e.textAlign & 24) == 24 ? "alphabetic" : "top", s.fillText(t, sa(e, n), ca(e, r)), e.drew = !0;
	} catch {}
}
function Ca(e, t, n, r, i = !1) {
	if (!ta(e)) return !1;
	let a = 0;
	(e.length >= 4 ? (e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24) >>> 0 : 0) === Xi && (a = Zi);
	let o = a + Qi;
	if (o > e.length) return !1;
	let s = {
		ctx: t,
		W: n,
		H: r,
		orgX: 0,
		orgY: 0,
		extX: n || 1,
		extY: r || 1,
		haveExt: !1,
		objects: [],
		curPen: null,
		curBrush: null,
		curFont: null,
		textColor: "#000000",
		textAlign: 0,
		fillRule: "nonzero",
		drew: !1,
		suppressBoundaryFrame: i
	}, c = new DataView(e.buffer, e.byteOffset, e.byteLength);
	for (; o + 6 <= e.length;) {
		let t = c.getUint32(o, !0), n = c.getUint16(o + 4, !0);
		if (t < 3) break;
		let r = t * 2, i = o + r;
		if (i > e.length || n === Yi.EOF) break;
		let a = o + 6, l = new oa(e, a, i);
		switch (n) {
			case Yi.SETWINDOWORG:
				s.orgY = l.i16(), s.orgX = l.i16();
				break;
			case Yi.SETWINDOWEXT: {
				let e = l.i16(), t = l.i16();
				s.extY = e || 1, s.extX = t || 1, s.haveExt = !0;
				break;
			}
			case Yi.SETPOLYFILLMODE:
				s.fillRule = l.u16() === 1 ? "evenodd" : "nonzero";
				break;
			case Yi.SETTEXTCOLOR:
				s.textColor = ia(l.u32());
				break;
			case Yi.SETTEXTALIGN:
				s.textAlign = l.u16();
				break;
			case Yi.CREATEPENINDIRECT:
				aa(s.objects, va(l));
				break;
			case Yi.CREATEBRUSHINDIRECT:
				aa(s.objects, ya(l));
				break;
			case Yi.CREATEFONTINDIRECT:
				aa(s.objects, xa(l));
				break;
			case Yi.SELECTOBJECT: {
				let e = l.u16(), t = s.objects[e];
				t?.kind === "pen" ? s.curPen = t : t?.kind === "brush" ? s.curBrush = t : t?.kind === "font" && (s.curFont = t);
				break;
			}
			case Yi.DELETEOBJECT: {
				let e = l.u16(), t = s.objects[e];
				t && (t === s.curPen && (s.curPen = null), t === s.curBrush && (s.curBrush = null), t === s.curFont && (s.curFont = null), s.objects[e] = null);
				break;
			}
			case Yi.POLYLINE:
				ha(s, ma(s, l, l.i16()));
				break;
			case Yi.POLYGON:
				ga(s, ma(s, l, l.i16()));
				break;
			case Yi.POLYPOLYGON:
				_a(s, l);
				break;
			case Yi.RECTANGLE: {
				let e = l.i16(), t = l.i16(), n = l.i16(), r = l.i16();
				ga(s, [
					[sa(s, r), ca(s, n)],
					[sa(s, t), ca(s, n)],
					[sa(s, t), ca(s, e)],
					[sa(s, r), ca(s, e)]
				]);
				break;
			}
			case Yi.TEXTOUT: {
				let e = l.u16(), t = ba(l.bytes(e));
				e % 2 != 0 && l.skip(1);
				let n = l.i16();
				Sa(s, t, l.i16(), n);
				break;
			}
			case Yi.STRETCHDIBITS: {
				l.u32(), l.i16(), l.i16(), l.i16(), l.i16(), l.u16();
				let e = l.i16(), t = l.i16(), n = l.i16(), r = l.i16(), o = a + 22, u = Kr(c, o, i - o);
				if (u) {
					let i = sa(s, r), a = ca(s, n), o = sa(s, r + t), c = ca(s, n + e);
					qr(s.ctx, u, i, a, o, c) && (s.drew = !0);
				}
				break;
			}
			case Yi.DIBSTRETCHBLT:
			case Yi.DIBBITBLT:
			case Yi.SETBKMODE: break;
			default: break;
		}
		o = i;
	}
	return s.drew;
}
var wa = 2e3, Ta = 2;
function Ea(e, t) {
	let n = e > 0 ? e : 300, r = t > 0 ? t : 300, i = (e) => Math.max(1, Math.min(wa, Math.round(e)));
	return {
		w: i(n * Ta),
		h: i(r * Ta)
	};
}
async function Da(e, t, n, r = !1) {
	if (!ta(e) || t <= 0 || n <= 0) return null;
	let i = Ce(t, n);
	if (!i) return null;
	let a = i.getContext("2d");
	return !a || (a.lineJoin = "round", a.lineCap = "round", !Ca(e, a, t, n, r)) ? null : createImageBitmap(i);
}
async function Oa(e, t = {}) {
	let { widthPt: n = 0, heightPt: r = 0, suppressBoundaryFrame: i = !1 } = t, a = new Uint8Array(await e.slice(0, 64 * 1024).arrayBuffer());
	if (ta(a)) {
		let { w: t, h: a } = Ea(n, r);
		return ka(await Da(new Uint8Array(await e.arrayBuffer()), t, a, i));
	}
	if (na(a)) {
		let { w: t, h: i } = Ea(n, r);
		return ka(await Ri(new Uint8Array(await e.arrayBuffer()), t, i));
	}
	let o = Ui(a);
	if (o && qi(o)) throw new Vr("image-pixels", zr, o.width * o.height);
	return ka(await createImageBitmap(e));
}
function ka(e) {
	if (!e) return null;
	let t = Number(e.width), n = Number(e.height);
	if (!qi({
		width: t,
		height: n
	})) return e;
	let r = t * n;
	throw Ji(e), new Vr("image-pixels", zr, Number.isSafeInteger(r) && r >= 0 ? r : 2 ** 53 - 1);
}
//#endregion
//#region packages/core/src/image/decode-gate.ts
var Aa = /* @__PURE__ */ new WeakMap();
async function ja(e, t) {
	let n = Aa.get(e);
	n || (n = {
		active: 0,
		waiters: []
	}, Aa.set(e, n)), n.active >= 2 || n.waiters.length > 0 ? await new Promise((e) => n.waiters.push(e)) : n.active++;
	try {
		return await Promise.resolve(), await t();
	} finally {
		let t = n.waiters.shift();
		t ? t() : (n.active--, n.active === 0 && Aa.delete(e));
	}
}
//#endregion
//#region packages/core/src/image/bitmap-image-by-path.ts
var Ma = 256, Na = /* @__PURE__ */ new WeakMap();
function Pa(e) {
	let t = Na.get(e);
	return t || (t = {
		entries: /* @__PURE__ */ new Map(),
		retainedBytes: 0
	}, Na.set(e, t)), t;
}
var Fa = /* @__PURE__ */ new WeakMap(), Ia = /* @__PURE__ */ new WeakSet();
function La(e) {
	!e || Ia.has(e) || (Ia.add(e), Ji(e));
}
function Ra(e) {
	La(e);
}
function za(e) {
	let t = Fa.get(e);
	t || (t = {
		count: 0,
		deferred: [],
		activeBytes: 0,
		activeBitmaps: /* @__PURE__ */ new WeakSet()
	}, Fa.set(e, t));
	let n = t;
	n.count++;
	let r = !1;
	return () => {
		if (!r && (r = !0, n.count--, !(n.count > 0))) {
			for (let e of n.deferred) e.then((e) => La(e)).catch(() => {});
			n.deferred = [], n.activeBytes = 0, n.activeBitmaps = /* @__PURE__ */ new WeakSet(), Fa.delete(e);
		}
	};
}
function Ba(e) {
	if (!e) return 0;
	let t = Number(e.width), n = Number(e.height);
	return Number.isSafeInteger(t) && t > 0 && Number.isSafeInteger(n) && n > 0 ? t * n * 4 : 0;
}
function Va(e, t) {
	if (!t) return;
	let n = Fa.get(e);
	if (!n || n.count === 0 || n.activeBitmaps.has(t)) return;
	let r = n.activeBytes + Ba(t);
	if (r > 134217728) throw new Vr("active-decoded-bytes", Br, r);
	n.activeBitmaps.add(t), n.activeBytes = r;
}
function Ha(e, t, n) {
	let r = [...t.entries].find(([e]) => e !== n);
	if (!r) return !1;
	let [i, a] = r;
	return t.entries.delete(i), t.retainedBytes -= a.weight, Ua(e, a.ownedPromise), !0;
}
function Ua(e, t) {
	let n = Fa.get(e);
	if (n && n.count > 0) {
		n.deferred.push(t);
		return;
	}
	t.then((e) => La(e)).catch(() => {});
}
function Wa(e, t, n) {
	let r = Pa(t), i = r.entries, a = i.get(e);
	if (a) return i.delete(e), i.set(e, a), a.promise.then((e) => (Va(t, e), e));
	let o = ja(t, n), s = o.then(({ bitmap: e, owned: t }) => t ? e : null), c = o.then(({ bitmap: e, owned: n }) => {
		try {
			return Va(t, e), e;
		} catch (t) {
			throw n && La(e), t;
		}
	}), l = {
		promise: c,
		ownedPromise: s,
		weight: 0
	};
	for (o.then(({ bitmap: n, owned: a }) => {
		if (i.get(e) === l) {
			if (l.bitmap = n, !a) {
				i.delete(e);
				return;
			}
			for (l.weight = Ba(n), r.retainedBytes += l.weight; r.retainedBytes > Br && Ha(t, r, e););
		}
	}).catch(() => {}), c.catch(() => {
		i.get(e) === l && (i.delete(e), r.retainedBytes -= l.weight, Ua(t, s));
	}), i.set(e, l); i.size > Ma && Ha(t, r, e););
	return c;
}
var Ga = "base", Ka = `${Ga}:`, qa = "derived:";
function Ja(e, t, n, r) {
	return Wa(`${e}:${t}`, n, r);
}
function Ya(e, t, n, r) {
	return Ja(`${qa}${e}`, t, n, r);
}
function Xa(e, t, n, r = {}) {
	let { widthPt: i = 0, heightPt: a = 0, suppressBoundaryFrame: o = !1 } = r;
	return Ja(Ga, e, n, async () => ({
		bitmap: await Oa(await n(e, t), {
			widthPt: i,
			heightPt: a,
			suppressBoundaryFrame: o
		}),
		owned: !0
	}));
}
function Za(e, t) {
	return Na.get(t)?.entries.get(`${Ka}${e}`)?.bitmap;
}
function Qa(e) {
	let t = Na.get(e);
	if (t) {
		for (let n of t.entries.values()) Ua(e, n.ownedPromise);
		t.entries.clear(), t.retainedBytes = 0, Na.delete(e);
	}
}
//#endregion
//#region packages/core/src/image/svg-image-by-path.ts
var $a = /* @__PURE__ */ new WeakMap(), eo = 256;
function to(e) {
	let t = $a.get(e);
	return t || (t = { imgs: /* @__PURE__ */ new Map() }, $a.set(e, t)), t;
}
function no(e, t) {
	if (typeof Image > "u") return Xa(e, "image/svg+xml", t).then((t) => {
		if (!t) throw Error(`svg decode failed: ${e}`);
		return t;
	});
	let n = to(t), r = n.imgs.get(e);
	if (r) return n.imgs.delete(e), n.imgs.set(e, r), r.promise;
	let i = {};
	if (i.promise = ja(t, async () => {
		if (n.imgs.get(e) !== i) throw Error("SVG decode was superseded before it started");
		let r = await t(e, "image/svg+xml"), a = URL.createObjectURL(r);
		try {
			let t = new Image();
			return await new Promise((n, r) => {
				t.onload = () => {
					typeof t.decode == "function" ? t.decode().then(n).catch(n) : n();
				}, t.onerror = () => r(/* @__PURE__ */ Error(`svg load failed: ${e}`)), t.src = a;
			}), t;
		} finally {
			URL.revokeObjectURL(a);
		}
	}), i.promise.catch(() => {
		n.imgs.get(e) === i && n.imgs.delete(e);
	}), n.imgs.set(e, i), n.imgs.size > eo) {
		let e = n.imgs.keys().next().value;
		n.imgs.delete(e);
	}
	return i.promise;
}
function ro(e) {
	let t = $a.get(e);
	t && (t.imgs.clear(), $a.delete(e));
}
//#endregion
//#region packages/core/src/image/crop.ts
function io(e) {
	let t = e;
	return {
		w: t.naturalWidth || (typeof t.width == "number" ? t.width : 0) || 0,
		h: t.naturalHeight || (typeof t.height == "number" ? t.height : 0) || 0
	};
}
function ao(e, t) {
	if (!t || !(t.l || t.t || t.r || t.b)) return null;
	let { w: n, h: r } = io(e);
	if (n <= 0 || r <= 0) return null;
	let i = (e) => Math.max(0, Math.min(1, e)), a = i(t.l) * n, o = i(t.t) * r;
	return {
		sx: a,
		sy: o,
		sw: Math.max(1, n - a - i(t.r) * n),
		sh: Math.max(1, r - o - i(t.b) * r)
	};
}
function oo(e, t, n, r, i, a, o) {
	let s = ao(t, n);
	s ? e.drawImage(t, s.sx, s.sy, s.sw, s.sh, r, i, a, o) : e.drawImage(t, r, i, a, o);
}
function so(e, t, n, r) {
	if (!t || !ra(e)) return {
		widthPt: n,
		heightPt: r
	};
	let i = Math.max(.01, 1 - t.l - t.r), a = Math.max(.01, 1 - t.t - t.b);
	return {
		widthPt: n / i,
		heightPt: r / a
	};
}
//#endregion
//#region packages/core/src/image/duotone.ts
function co(e) {
	return /^[0-9a-fA-F]{6}$/.test(e) ? [
		parseInt(e.slice(0, 2), 16),
		parseInt(e.slice(2, 4), 16),
		parseInt(e.slice(4, 6), 16)
	] : null;
}
function lo(e, t, n) {
	return (.299 * e + .587 * t + .114 * n) / 255;
}
function uo(e, t, n) {
	let r = co(t), i = co(n);
	if (!r || !i) return e;
	let [a, o, s] = r, [c, l, u] = i, d = e.data;
	for (let e = 0; e < d.length; e += 4) {
		if (d[e + 3] === 0) continue;
		let t = lo(d[e], d[e + 1], d[e + 2]);
		d[e] = Math.round(a + (c - a) * t), d[e + 1] = Math.round(o + (l - o) * t), d[e + 2] = Math.round(s + (u - s) * t);
	}
	return e;
}
var fo = (e, t) => typeof OffscreenCanvas > "u" ? null : new OffscreenCanvas(e, t);
async function po(e, t, n) {
	let { width: r, height: i } = n;
	if (r <= 0 || i <= 0 || typeof createImageBitmap > "u") return e;
	let a = (n.offscreenFactory ?? fo)(r, i);
	if (!a) return e;
	let o = a.getContext("2d");
	if (!o) return e;
	o.drawImage(e, 0, 0);
	let s;
	try {
		s = o.getImageData(0, 0, r, i);
	} catch {
		return e;
	}
	return uo(s, t.clr1, t.clr2), o.putImageData(s, 0, 0), createImageBitmap(a);
}
//#endregion
//#region packages/core/src/image/blip-gate.ts
function mo(e) {
	return e.svgImagePath != null && e.srcRect == null;
}
//#endregion
//#region packages/core/src/math/mathml.ts
var ho = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;"
}, go = (e) => e.replace(/[&<>"]/g, (e) => ho[e]);
function _o(e, t = "roman") {
	if (t === "double-struck" || t === "monospace") return t;
	if (t === "fraktur") return e === "bold" || e === "boldItalic" ? "bold-fraktur" : "fraktur";
	if (t === "script") return e === "bold" || e === "boldItalic" ? "bold-script" : "script";
	if (t === "sans-serif") switch (e) {
		case "roman": return "sans-serif";
		case "italic": return "sans-serif-italic";
		case "bold": return "bold-sans-serif";
		case "boldItalic": return "sans-serif-bold-italic";
	}
	switch (e) {
		case "roman": return "normal";
		case "bold": return "bold";
		case "boldItalic": return "bold-italic";
		case "italic": return null;
	}
}
var vo = new Set([..."⏞⏟⎴⎵︷︸⏜⏝{}[]()¯_‾"]), yo = "+−±∓×÷·∗⋅∘∙*/", bo = "=≠<>≤≥≈≡∼≅≃→←↔⇒∈∉⊂⊆⊃⊇∝≪≫⊥≔", xo = "([{⟨⌈⌊", So = ")]}⟩⌉⌋", Co = ",;";
function wo(e, t, n) {
	let r = _o(t, n), i = r ? ` mathvariant="${r}"` : "", a = "", o = "", s = () => {
		o &&= (a += `<mn${i}>${go(o)}</mn>`, "");
	};
	for (let t of e) {
		if (t === " ") {
			s();
			continue;
		}
		if (t >= "0" && t <= "9") {
			o += t;
			continue;
		}
		s(), yo.includes(t) || bo.includes(t) || Co.includes(t) ? a += `<mo>${go(t)}</mo>` : xo.includes(t) || So.includes(t) ? a += `<mo fence="true" stretchy="false">${go(t)}</mo>` : a += `<mi${i}>${go(t)}</mi>`;
	}
	return s(), a;
}
function To(e) {
	return e.map(Do).join("");
}
function Eo(e) {
	return `<mrow>${To(e)}</mrow>`;
}
function Do(e) {
	switch (e.kind) {
		case "run": return wo(e.text, e.style, e.__script);
		case "group": return Eo(e.items);
		case "fraction": return `<mfrac${e.bar === !1 ? " linethickness=\"0\"" : ""}>${Eo(e.num)}${Eo(e.den)}</mfrac>`;
		case "sup": return `<msup>${Eo(e.base)}${Eo(e.sup ?? [])}</msup>`;
		case "sub": return `<msub>${Eo(e.base)}${Eo(e.sub ?? [])}</msub>`;
		case "subSup": return `<msubsup>${Eo(e.base)}${Eo(e.sub ?? [])}${Eo(e.sup ?? [])}</msubsup>`;
		case "nary": return Io(e);
		case "delimiter": return Lo(e);
		case "radical": return e.index && e.index.length ? `<mroot>${Eo(e.radicand)}${Eo(e.index)}</mroot>` : `<msqrt>${To(e.radicand)}</msqrt>`;
		case "limit": return No(e);
		case "array": return Po(e);
		case "groupChr": {
			let t = Eo(e.base), n = vo.has(e.char), r = e.pos === "top" ? "mover" : "munder", i = `<mo stretchy="${n}">${go(e.char)}</mo>`;
			return n ? `<${r}>${t}${i}</${r}>` : `<${r} accent="true">${t}${i}</${r}>`;
		}
		case "bar": {
			let t = Eo(e.base), n = "<mo stretchy=\"true\">&#x2015;</mo>";
			return e.pos === "bot" ? `<munder>${t}${n}</munder>` : `<mover>${t}${n}</mover>`;
		}
		case "accent": return Mo(e);
		case "func": return `<mrow>${Eo(e.name)}<mo>&#x2061;</mo>${Eo(e.arg)}</mrow>`;
		case "phant": return Oo(e);
		case "sPre": return `<mmultiscripts>${Eo(e.base)}<mprescripts/>${Eo(e.sub)}${Eo(e.sup)}</mmultiscripts>`;
		case "box": return Eo(e.base);
		case "borderBox": return ko(e);
	}
}
function Oo(e) {
	let t = e.show ? To(e.base) : `<mphantom>${To(e.base)}</mphantom>`, n = [];
	return e.zeroWid && n.push("width=\"0\""), e.zeroAsc && n.push("height=\"0\""), e.zeroDesc && n.push("depth=\"0\""), n.length ? `<mpadded ${n.join(" ")}>${t}</mpadded>` : `<mrow>${t}</mrow>`;
}
function ko(e) {
	let t = [], n = !e.hideTop, r = !e.hideBot, i = !e.hideLeft, a = !e.hideRight;
	n && r && i && a ? t.push("box") : (n && t.push("top"), r && t.push("bottom"), i && t.push("left"), a && t.push("right")), e.strikeH && t.push("horizontalstrike"), e.strikeV && t.push("verticalstrike"), e.strikeBltr && t.push("updiagonalstrike"), e.strikeTlbr && t.push("downdiagonalstrike");
	let o = To(e.base);
	return t.length ? `<menclose notation="${t.join(" ")}">${o}</menclose>` : `<mrow>${o}</mrow>`;
}
var Ao = {
	"̀": "`",
	"́": "´",
	"̂": "^",
	"̃": "~",
	"̆": "˘",
	"̇": "˙",
	"̈": "¨",
	"̌": "ˇ",
	"⃗": "→",
	"⃖": "←"
}, jo = new Set([
	"̅",
	"̄",
	"¯",
	"‾",
	"̲",
	"̳"
]);
function Mo(e) {
	let t = Eo(e.base);
	if (jo.has(e.char)) return `<mover>${t}<mo stretchy="true">&#x2015;</mo></mover>`;
	let n = Ao[e.char] ?? e.char;
	return `<mover accent="true">${t}<mo stretchy="${n === "→" || n === "←" ? "true" : "false"}">${go(n)}</mo></mover>`;
}
function No(e) {
	let t = Eo(e.base), n = e.lower && e.lower.length ? Eo(e.lower) : null, r = e.upper && e.upper.length ? Eo(e.upper) : null;
	return n && r ? `<munderover>${t}${n}${r}</munderover>` : n ? `<munder>${t}${n}</munder>` : r ? `<mover>${t}${r}</mover>` : t;
}
function Po(e) {
	let t = Math.max(1, ...e.rows.map((e) => e.length)), n;
	n = e.align === "eq" ? Array.from({ length: t }, (e, t) => t % 2 == 0 ? "right" : "left").join(" ") : e.align === "left" ? "left" : "center";
	let r = e.rows.map((e) => `<mtr>${e.map((e) => `<mtd>${To(e)}</mtd>`).join("")}</mtr>`).join("");
	return `<mtable columnalign="${n}" rowspacing="0.2em" columnspacing="0.3em">${r}</mtable>`;
}
var Fo = new Set([..."∫∬∭∮∯∰∱∲∳⨌⨍⨎⨏⨐⨑⨒⨓⨔⨕⨖⨗"]);
function Io(e) {
	let t = e.limLoc === "subSup" ? !0 : e.limLoc === "undOvr" ? !1 : Fo.has(e.op), n = `<mo largeop="true">${go(e.op)}</mo>`, r = e.sub ?? [], i = e.sup ?? [], a;
	return a = t ? r.length && i.length ? `<msubsup>${n}${Eo(r)}${Eo(i)}</msubsup>` : r.length ? `<msub>${n}${Eo(r)}</msub>` : i.length ? `<msup>${n}${Eo(i)}</msup>` : n : r.length && i.length ? `<munderover>${n}${Eo(r)}${Eo(i)}</munderover>` : r.length ? `<munder>${n}${Eo(r)}</munder>` : i.length ? `<mover>${n}${Eo(i)}</mover>` : n, `<mrow>${a}${To(e.body)}</mrow>`;
}
function Lo(e) {
	let t = (e) => `<mo fence="true" stretchy="true">${go(e)}</mo>`, n = e.items.map((e) => Eo(e)).join("<mo separator=\"true\">,</mo>");
	return `<mrow>${t(e.begChar)}${n}${t(e.endChar)}</mrow>`;
}
function Ro(e, t) {
	return `<math xmlns="http://www.w3.org/1998/Math/MathML" display="${t ? "block" : "inline"}">${To(e)}</math>`;
}
//#endregion
//#region packages/core/src/canvas/env.ts
function zo(e) {
	return typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement;
}
function Bo(e = 1) {
	return typeof window < "u" && window.devicePixelRatio || e;
}
//#endregion
//#region packages/core/src/canvas/crisp.ts
function Vo(e, t, n) {
	let r = Math.round(t * n) % 2 == 1 ? .5 : 0, i = e * n;
	return (Math.round(i - r) + r) / n - e;
}
//#endregion
//#region packages/core/src/canvas/clamp.ts
var Ho = 32767, Uo = 1 << 24;
function Wo(e, t) {
	let n = Number.isFinite(e) && e > 0 ? Math.max(1, Math.round(e)) : 1, r = Number.isFinite(t) && t > 0 ? Math.max(1, Math.round(t)) : 1, i = Math.min(1, Ho / n, Ho / r), a = n * r, o = a > 16777216 ? Math.sqrt(Uo / a) : 1, s = Math.min(i, o);
	return s >= 1 ? {
		width: n,
		height: r,
		scale: 1,
		clamped: !1
	} : {
		width: Math.max(1, Math.floor(n * s)),
		height: Math.max(1, Math.floor(r * s)),
		scale: s,
		clamped: !0
	};
}
//#endregion
//#region packages/core/src/internal/runtime-generation.ts
var Go = class {
	state = "uninitialized";
	generationValue = 0;
	readiness;
	poisonListeners = /* @__PURE__ */ new Set();
	constructor(e, t, n) {
		this.initialize = e, this.reinitialize = t, this.normalizeFailure = n;
	}
	get generation() {
		return this.generationValue;
	}
	get poisoned() {
		return this.state === "poisoned";
	}
	onPoison(e) {
		return this.poisonListeners.add(e), () => this.poisonListeners.delete(e);
	}
	async ensureReady() {
		if (this.state !== "ready") {
			if (!this.readiness) {
				let e = this.state === "uninitialized" ? this.initialize : this.reinitialize;
				this.readiness = Promise.resolve().then(e).then(() => {
					this.generationValue += 1, this.state = "ready", this.readiness = void 0;
				}, (e) => {
					throw this.readiness = void 0, e;
				});
			}
			await this.readiness;
		}
	}
	run(e) {
		try {
			return e();
		} catch (e) {
			let t = this.normalizeFailure(e);
			throw t ? (this.poison(t), t) : e;
		}
	}
	tryRunReady(e) {
		if (this.state !== "ready") return { current: !1 };
		let t = this.generationValue, n = this.run(e);
		return this.state !== "ready" || t !== this.generationValue ? { current: !1 } : {
			current: !0,
			generation: t,
			value: n
		};
	}
	poison(e) {
		this.state = "poisoned", this.readiness = void 0;
		for (let t of this.poisonListeners) t(e);
	}
	assertCurrent(e) {
		if (this.state !== "ready" || e !== this.generationValue) throw Error("WASM archive session belongs to a discarded runtime generation");
	}
}, Ko = class e extends Error {
	code = "parser-crashed";
	constructor(t) {
		super(t), this.name = "WasmTrapError", Object.setPrototypeOf(this, e.prototype);
	}
};
function qo(e) {
	let t = globalThis.WebAssembly?.RuntimeError;
	return t && e instanceof t || e instanceof RangeError ? !0 : e instanceof Error ? e.name === "RuntimeError" || e.name === "CompileError" || e.name === "LinkError" || e.name === "InternalError" || e.name === "OOMError" : !1;
}
function Jo(e) {
	try {
		if ((typeof e != "object" || !e) && typeof e != "function") return;
		let t = Reflect.get(e, "__destroy_into_raw");
		typeof t == "function" && Reflect.apply(t, e, []);
	} catch {}
}
//#endregion
//#region packages/core/src/worker/pull-credit-error.ts
var Yo = "ooxml-insufficient-credit", Xo = "OOXML_INSUFFICIENT_CREDIT:";
function Zo(e) {
	return typeof e == "number" && Number.isSafeInteger(e) && e > 0;
}
function Qo(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return !1;
	let t = e;
	return Zo(t.requiredBytes) && Zo(t.offeredBytes) && t.requiredBytes > t.offeredBytes;
}
var $o = class e extends RangeError {
	code = Yo;
	requiredBytes;
	offeredBytes;
	constructor(t) {
		super(`Pull unit requires ${t.requiredBytes} bytes but credit is ${t.offeredBytes}`), this.name = "PullSessionInsufficientCreditError", this.requiredBytes = t.requiredBytes, this.offeredBytes = t.offeredBytes, Object.setPrototypeOf(this, e.prototype);
	}
};
function es(e) {
	if (e instanceof $o) return e;
	let t = e instanceof Error ? e.message : String(e);
	if (!t.startsWith(Xo)) return;
	let n;
	try {
		n = JSON.parse(t.slice(26));
	} catch {
		return;
	}
	if (!n || typeof n != "object" || Array.isArray(n)) return;
	let r = n;
	if (!(r.code !== "ooxml-insufficient-credit" || !Qo(r))) return new $o(r);
}
function ts(e, t, n) {
	let r = es(e);
	if (!(!r || r.offeredBytes !== t || r.requiredBytes > n)) return r;
}
function ns(e, t, n) {
	if (rs(e)) return e.offeredBytes === t && e.requiredBytes <= n ? e.requiredBytes : void 0;
}
function rs(e) {
	return e instanceof $o || !!e && typeof e == "object" && e.code === "ooxml-insufficient-credit" && Qo(e);
}
//#endregion
//#region packages/core/src/worker/error-wire.ts
var is = "OOXML_RESOURCE_LIMIT:", as = 128, os = 256, ss = 4096;
function cs(e) {
	return typeof e == "number" && Number.isSafeInteger(e) && e >= 0;
}
function ls(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return !1;
	let t = e;
	return cs(t.archiveEntryCount) && cs(t.declaredInflatedBytes) && (t.largestInflatedEntryBytes === void 0 || cs(t.largestInflatedEntryBytes)) && cs(t.distinctInflatedBytes) && cs(t.operationInflatedBytes);
}
function us(e) {
	let t;
	try {
		t = JSON.parse(new TextDecoder().decode(e));
	} catch {
		throw TypeError("OOXML resource usage checkpoint is not valid JSON");
	}
	if (!ls(t)) throw TypeError("OOXML resource usage checkpoint is invalid");
	return t;
}
function ds(e) {
	return e === "docx" || e === "xlsx" || e === "pptx";
}
function fs(e) {
	return e === "container" || e === "decompression" || e === "parsing" || e === "serialization" || e === "layout" || e === "rendering" || e === "worker";
}
function ps(e, t) {
	return typeof e == "string" && e.length > 0 && e.length <= t && !/[\u0000-\u001f\u007f]/u.test(e);
}
function ms(e) {
	return ps(e, as) && /^[a-z0-9][a-z0-9-]*$/u.test(e);
}
function hs(e) {
	return !ps(e, ss) || e.startsWith("/") || e.startsWith("\\") || e.includes("\\") || e.includes("?") || e.includes("#") || e.includes("://") || /^[a-z]:/iu.test(e) ? !1 : e.split("/").every((e) => e !== "" && e !== "." && e !== "..");
}
var gs = new Map([
	["archive-entry:declared-inflated-bytes", {
		stage: "container",
		part: "required"
	}],
	["archive-entry:actual-inflated-bytes", {
		stage: "decompression",
		part: "required"
	}],
	["archive:entry-count", {
		stage: "container",
		part: "forbidden"
	}],
	["archive:central-directory-bytes", {
		stage: "container",
		part: "forbidden",
		configurable: !1
	}],
	["archive:distinct-inflated-bytes", {
		stage: "decompression",
		part: "required"
	}],
	["xml-event:bytes", {
		stage: "parsing",
		part: "optional",
		configurable: !1
	}],
	["xml-context:bytes", {
		stage: "parsing",
		part: "optional",
		configurable: !1
	}],
	["xml-tree:depth", {
		stage: "parsing",
		part: "optional",
		configurable: !1
	}],
	["worksheet-row:projected-bytes", {
		stage: "parsing",
		part: "optional",
		configurable: !1
	}],
	["worksheet-shell:projected-bytes", {
		stage: "parsing",
		part: "optional",
		configurable: !1
	}]
]), _s = new Set([...gs.keys()].map((e) => e.slice(0, e.indexOf(":")))), vs = new Set([...gs.keys()].map((e) => e.slice(e.indexOf(":") + 1)));
function ys(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return !1;
	let t = e;
	return !ds(t.format) || !ps(t.operation, os) || !ms(t.resource) || !ms(t.metric) || !cs(t.limit) || !cs(t.observed) || typeof t.configurable != "boolean" || !ls(t.usage) ? !1 : !("part" in t) || hs(t.part);
}
function bs(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) return !1;
	let t = e;
	if (!fs(t.stage) || !ys(t.violation)) return !1;
	let n = t.violation, r = gs.get(`${n.resource}:${n.metric}`);
	return r ? t.stage !== r.stage || r.configurable === !1 && n.configurable !== !1 ? !1 : r.part === "required" ? n.part !== void 0 : r.part === "forbidden" ? n.part === void 0 : !0 : !(_s.has(n.resource) && vs.has(n.metric));
}
function xs(e) {
	return {
		archiveEntryCount: e.archiveEntryCount,
		declaredInflatedBytes: e.declaredInflatedBytes,
		...e.largestInflatedEntryBytes === void 0 ? {} : { largestInflatedEntryBytes: e.largestInflatedEntryBytes },
		distinctInflatedBytes: e.distinctInflatedBytes,
		operationInflatedBytes: e.operationInflatedBytes
	};
}
function Ss(e) {
	if (!bs(e)) return;
	let t = e.violation, n = {
		stage: e.stage,
		violation: {
			format: t.format,
			operation: t.operation,
			resource: t.resource,
			metric: t.metric,
			...t.part === void 0 ? {} : { part: t.part },
			limit: t.limit,
			observed: t.observed,
			configurable: t.configurable,
			usage: xs(t.usage)
		}
	};
	return bs(n) ? n : void 0;
}
function Cs(e) {
	let t = e.violation;
	return `OOXML resource limit exceeded${t.part ? ` for ${t.part}` : ""}: ${t.metric} ${t.observed} > ${t.limit}`;
}
function ws(e) {
	let t = e instanceof Error ? e.message : String(e);
	if (!t.startsWith(is)) return;
	let n;
	try {
		n = JSON.parse(t.slice(21));
	} catch {
		return;
	}
	if (!n || typeof n != "object") return;
	let r = n;
	if (!(r.code !== "ooxml-resource-limit" || !bs(r.details))) return new ee(Cs(r.details), r.details);
}
function Ts(e) {
	if (e instanceof Vr) return {
		message: e.message,
		errorName: e.name,
		code: e.code,
		decodedImage: {
			metric: e.metric,
			limit: e.limit,
			observed: e.observed
		}
	};
	let t = es(e);
	if (t) return {
		message: t.message,
		errorName: t.name,
		code: t.code,
		insufficientCredit: {
			requiredBytes: t.requiredBytes,
			offeredBytes: t.offeredBytes
		}
	};
	let n = e instanceof L || e instanceof ee ? e : ws(e);
	if (n instanceof ee) {
		let e = Ss(n.details);
		return e ? {
			message: typeof n.message == "string" ? n.message : Cs(e),
			errorName: "OoxmlResourceLimitError",
			code: "ooxml-resource-limit",
			resourceLimit: e
		} : {
			message: "Invalid OOXML resource-limit error payload",
			errorName: "Error"
		};
	}
	if (n instanceof L) return {
		message: typeof n.message == "string" ? n.message : String(n.message),
		errorName: ps(n.name, as) ? n.name : "OoxmlError",
		...ms(n.code) ? { code: n.code } : {}
	};
	let r = e instanceof Error ? e.message : String(e);
	if (typeof r == "string" && r.startsWith(is)) return {
		message: "Invalid OOXML resource-limit payload",
		errorName: "Error"
	};
	let i = e instanceof Error ? e : Error(r), a = i;
	return {
		message: typeof i.message == "string" ? i.message : String(i.message),
		errorName: ps(i.name, as) ? i.name : "Error",
		...typeof a.code == "string" ? { code: a.code } : {}
	};
}
function Es(e) {
	try {
		return Ts(e);
	} catch {
		return {
			message: "Worker operation failed with an unreadable error",
			errorName: "Error"
		};
	}
}
var Ds = new Set([
	"encrypted",
	"invalid-password",
	"unsupported-encryption",
	"legacy-binary-format",
	"not-ooxml"
]);
function Os(e) {
	if (e.code === "ooxml-decoded-image-limit" && e.decodedImage && (e.decodedImage.metric === "image-pixels" || e.decodedImage.metric === "active-decoded-bytes") && cs(e.decodedImage.limit) && cs(e.decodedImage.observed) && e.decodedImage.observed > e.decodedImage.limit) return new Vr(e.decodedImage.metric, e.decodedImage.limit, e.decodedImage.observed);
	if (e.code === "ooxml-insufficient-credit" && Qo(e.insufficientCredit)) return new $o(e.insufficientCredit);
	if (e.code === "ooxml-resource-limit" && bs(e.resourceLimit)) return new ee(e.message, e.resourceLimit);
	if (e.code && Ds.has(e.code)) return new L(e.code, e.message);
	let t = e.errorName === "TypeError" ? TypeError(e.message) : e.errorName === "RangeError" ? RangeError(e.message) : Error(e.message);
	return e.errorName && (t.name = e.errorName), e.code !== void 0 && Object.assign(t, { code: e.code }), t;
}
//#endregion
//#region packages/core/src/worker/resource-policy.generated.ts
var ks = 134217728, As = 268435456, js = 4096, Ms = 2e4, Ns = 67108864, Ps = 67108864, Fs = 67108864, Is = 134217728, Ls = 134217728, Rs = 1e5, zs = 25e4, Bs = 33554432, Vs = 67108864, Hs = 2e5, Us = 5e5, Ws = 67108864, Gs = 134217728, Ks = 25e4, qs = Object.freeze({
	maxArchiveEntryBytes: ks,
	maxTotalInflatedBytes: As,
	maxArchiveEntries: js
});
function Js(e, t, n) {
	if (t === void 0) return n;
	if (t === null) return null;
	if (!Number.isSafeInteger(t) || t <= 0) throw RangeError(`resourceLimits.${e} must be null or a positive safe integer number of bytes`);
	return t;
}
function Ys(e) {
	if (e === void 0) return qs.maxArchiveEntries;
	if (e === null) return null;
	if (!Number.isSafeInteger(e) || e <= 0) throw RangeError("resourceLimits.maxArchiveEntries must be null or a positive safe integer");
	if (e > 2e4) throw RangeError(`resourceLimits.maxArchiveEntries must not exceed the internal hard ceiling of ${Ms}`);
	return e;
}
function Xs(e) {
	if (!(e === void 0 || !(e > 0))) {
		if (!Number.isSafeInteger(e)) throw RangeError("maxZipEntryBytes must be a positive safe integer number of bytes");
		return e;
	}
}
function Zs(e) {
	let t = e.resourceLimits;
	if (t !== void 0 && (typeof t != "object" || !t || Array.isArray(t))) throw TypeError("resourceLimits must be an object when provided");
	let n = Xs(e.maxZipEntryBytes), r = t?.maxArchiveEntryBytes;
	if (n !== void 0 && r !== void 0 && n !== r) throw RangeError("maxZipEntryBytes conflicts with resourceLimits.maxArchiveEntryBytes");
	return Object.freeze({
		maxArchiveEntryBytes: Js("maxArchiveEntryBytes", r === void 0 ? n : r, qs.maxArchiveEntryBytes),
		maxTotalInflatedBytes: Js("maxTotalInflatedBytes", t?.maxTotalInflatedBytes, qs.maxTotalInflatedBytes),
		maxArchiveEntries: Ys(t?.maxArchiveEntries)
	});
}
function Qs(e) {
	if (e.debug !== void 0 && typeof e.debug != "boolean") throw TypeError("debug must be a boolean when provided");
	if (e.onResourceMetrics !== void 0 && typeof e.onResourceMetrics != "function") throw TypeError("onResourceMetrics must be a function when provided");
	return Object.freeze({
		policy: Zs(e),
		debug: e.debug ?? !1,
		...e.onResourceMetrics ? { onResourceMetrics: e.onResourceMetrics } : {}
	});
}
function $s(e) {
	return [
		e.maxArchiveEntryBytes === null ? 0n : BigInt(e.maxArchiveEntryBytes),
		e.maxTotalInflatedBytes === null ? 0n : BigInt(e.maxTotalInflatedBytes),
		e.maxArchiveEntries === null ? 0n : BigInt(e.maxArchiveEntries)
	];
}
//#endregion
//#region packages/core/src/internal/console-tui.ts
var ec = [
	"font-family: \"SFMono-Regular\", Menlo, Monaco, Consolas, monospace",
	"font-size: 12px",
	"line-height: 1.35",
	"font-variant-ligatures: none",
	"letter-spacing: 0",
	"white-space: pre"
].join(";");
function tc(e) {
	if (nc()) {
		console.log(`%c${e}`, ec);
		return;
	}
	console.log(e);
}
function nc() {
	return typeof window < "u" && globalThis.process?.release?.name !== "node";
}
//#endregion
//#region packages/core/src/worker/resource-debug-view.ts
function rc(e) {
	let t = e.scope === "session" ? "SESSION" : "LOAD", n = e.status === "ok" ? e.scope === "session" ? "COMPLETE" : "READY" : "FAILED", r = [cc(` OOXML ${t}  ${e.format.toUpperCase()}  ${n} `, 68)];
	if (r.push(uc(`mode ${e.mode.padEnd(8)}  elapsed ${oc(e.elapsedMs)}`, 68)), e.sourceBytes !== void 0 && r.push(uc(`source ${ac(e.sourceBytes)}`, 68)), r.push(lc(" admission ", 68)), r.push(dc("largest entry", e.usage?.largestInflatedEntryBytes, e.policy.maxArchiveEntryBytes, 68)), r.push(dc("total inflated", e.usage?.distinctInflatedBytes, e.policy.maxTotalInflatedBytes, 68)), r.push(uc(`entry count ${e.usage ? sc(e.usage.archiveEntryCount) : "—"} / ${e.policy.maxArchiveEntries === null ? "public off" : sc(e.policy.maxArchiveEntries)}`, 68)), e.usage ? r.push(uc(`declared inflated ${ac(e.usage.declaredInflatedBytes)}`, 68)) : r.push(uc("usage unavailable for this report", 68)), e.checkpoints.length > 0) {
		r.push(lc(" checkpoints ", 68));
		for (let t of e.checkpoints) {
			let e = t.usage ? ac(t.usage.distinctInflatedBytes) : "—";
			r.push(uc(`${oc(t.elapsedMs).padStart(8)}  ${t.name.padEnd(25)} ${e.padStart(12)}`, 68));
		}
	}
	if (e.outcome && Object.keys(e.outcome).length > 0 && (r.push(lc(" result ", 68)), r.push(uc(Object.entries(e.outcome).map(([e, t]) => `${e} ${sc(t)}`).join("  "), 68))), e.error) {
		r.push(lc(" failure ", 68));
		let t = [
			e.error.code,
			e.error.stage,
			e.error.resource,
			e.error.metric
		].filter((e) => !!e).join(" · ");
		r.push(uc(t || "unclassified error", 68));
	}
	return r.push(`└${"─".repeat(68)}┘`), r.join("\n");
}
function ic(e) {
	tc(rc(e));
}
function ac(e) {
	if (!Number.isFinite(e) || e < 0) return "—";
	let t = [
		"B",
		"KiB",
		"MiB",
		"GiB",
		"TiB"
	], n = e, r = 0;
	for (; n >= 1024 && r < t.length - 1;) n /= 1024, r += 1;
	let i = r === 0 || n >= 100 ? 0 : n >= 10 ? 1 : 2;
	return `${n.toFixed(i)} ${t[r]}`;
}
function oc(e) {
	return e < 1e3 ? `${Math.round(e)} ms` : `${(e / 1e3).toFixed(2)} s`;
}
function sc(e) {
	return Number.isSafeInteger(e) ? e.toLocaleString("en-US") : "—";
}
function cc(e, t) {
	let n = e.slice(0, t);
	return `┌${n}${"─".repeat(t - n.length)}┐`;
}
function lc(e, t) {
	let n = e.slice(0, t);
	return `├${n}${"─".repeat(t - n.length)}┤`;
}
function uc(e, t) {
	let n = e.slice(0, t - 2);
	return `│ ${n}${" ".repeat(t - n.length - 2)} │`;
}
function dc(e, t, n, r) {
	let i = t === void 0 || n === null || n <= 0 ? 0 : Math.min(1, t / n), a = Math.round(i * 16), o = `${"█".repeat(a)}${"░".repeat(16 - a)}`, s = `${t === void 0 ? "—" : ac(t)} / ${n === null ? "public off" : ac(n)}`;
	return uc(`${e.padEnd(14)} ${o}  ${s}`, r);
}
//#endregion
//#region packages/core/src/worker/resource-debug.ts
var fc = 1e3;
async function pc(e, t) {
	e.observeUsage(await t(fc));
	let n = e.current();
	if (!n) throw Error("OOXML resource metrics are not ready");
	return n;
}
var mc = class {
	now;
	startedAt;
	policy;
	checkpoints = [];
	sourceBytes;
	lastUsage;
	mode;
	finished = !1;
	terminalStatus;
	terminalError;
	terminalOutcome;
	terminalElapsedMs;
	constructor(e) {
		this.options = e, this.now = e.now ?? _c, this.startedAt = this.now(), this.policy = Object.freeze({
			maxArchiveEntryBytes: e.policy.maxArchiveEntryBytes,
			maxTotalInflatedBytes: e.policy.maxTotalInflatedBytes,
			maxArchiveEntries: e.policy.maxArchiveEntries
		}), this.mode = e.mode;
	}
	setMode(e) {
		!this.options.enabled || this.finished || (this.mode = e);
	}
	setSourceBytes(e) {
		this.options.enabled && (!Number.isSafeInteger(e) || e < 0 || (this.sourceBytes = e));
	}
	checkpoint(e, t) {
		if (!this.options.enabled || this.finished) return;
		t && (this.lastUsage = vc(t));
		let n = this.lastUsage;
		this.checkpoints.push(Object.freeze({
			name: xc(e),
			elapsedMs: bc(this.startedAt, this.now()),
			...n ? { usage: n } : {}
		}));
	}
	observeUsage(e) {
		!this.options.enabled || !e || (this.lastUsage = vc(e));
	}
	current() {
		if (!(!this.options.enabled || !this.terminalStatus)) return this.report(this.terminalStatus, this.terminalError, this.terminalOutcome);
	}
	succeed(e) {
		return this.finish("ok", void 0, e);
	}
	fail(e) {
		return this.finish("error", e);
	}
	finish(e, t, n) {
		if (!this.options.enabled || this.finished) return;
		this.finished = !0, this.terminalStatus = e, this.terminalError = t, this.terminalOutcome = n, this.terminalElapsedMs = bc(this.startedAt, this.now());
		let r = this.report(e, t, n);
		return this.options.onMetrics && hc(this.options.onMetrics, r), (this.options.emitToConsole ?? this.options.onMetrics === void 0) && hc(ic, r), r;
	}
	report(e, t, n) {
		let r = yc(t) ?? this.lastUsage;
		return Object.freeze({
			schemaVersion: 1,
			scope: this.options.scope ?? "load",
			format: this.options.format,
			mode: this.mode,
			status: e,
			...this.sourceBytes === void 0 ? {} : { sourceBytes: this.sourceBytes },
			elapsedMs: this.terminalElapsedMs ?? bc(this.startedAt, this.now()),
			policy: this.policy,
			...r ? { usage: r } : {},
			checkpoints: Object.freeze([...this.checkpoints]),
			...n ? { outcome: Sc(n) } : {},
			...e === "error" ? { error: Cc(t) } : {}
		});
	}
};
function hc(e, t) {
	try {
		let n = e(t);
		gc(n) && Promise.resolve(n).catch(() => void 0);
	} catch {}
}
function gc(e) {
	return (typeof e == "object" && !!e || typeof e == "function") && typeof e.then == "function";
}
function _c() {
	return typeof performance > "u" ? Date.now() : performance.now();
}
function vc(e) {
	return Object.freeze({
		archiveEntryCount: e.archiveEntryCount,
		declaredInflatedBytes: e.declaredInflatedBytes,
		...e.largestInflatedEntryBytes === void 0 ? {} : { largestInflatedEntryBytes: e.largestInflatedEntryBytes },
		distinctInflatedBytes: e.distinctInflatedBytes,
		operationInflatedBytes: e.operationInflatedBytes
	});
}
function yc(e) {
	try {
		return e instanceof ee ? vc(e.details.violation.usage) : void 0;
	} catch {
		return;
	}
}
function bc(e, t) {
	return Math.max(0, Math.round((t - e) * 10) / 10);
}
function xc(e) {
	return e.replace(/[^a-z0-9 -]/giu, "").trim().slice(0, 32) || "checkpoint";
}
function Sc(e) {
	return Object.freeze(Object.fromEntries(Object.entries(e).filter(([e, t]) => /^[a-z][a-z0-9-]{0,31}$/u.test(e) && Number.isSafeInteger(t) && t >= 0)));
}
function Cc(e) {
	try {
		if (e instanceof ee) {
			let t = e.details.violation;
			return Object.freeze({
				code: e.code,
				stage: e.details.stage,
				resource: t.resource,
				metric: t.metric
			});
		}
		if (e instanceof L || e instanceof Vr) return Object.freeze({ code: e.code });
		if (e instanceof Ko || typeof e == "object" && e && e.code === "parser-crashed") return Object.freeze({ code: "parser-crashed" });
	} catch {}
	return Object.freeze({});
}
var wc = "ooxml-pull-v1";
function Tc(e, t) {
	if (!Number.isSafeInteger(e) || e <= 0) throw RangeError(`${t} must be a positive safe integer`);
}
function Ec(e) {
	if (!(typeof e == "string" && e.length > 0 || typeof e == "number" && Number.isSafeInteger(e) && e > 0)) throw RangeError("session id must be a non-empty string or positive safe integer");
}
var Dc = class {
	bridge;
	options;
	sequence = 0;
	pulling = !1;
	outstanding = !1;
	ending = !1;
	completed = !1;
	lifecyclePromise;
	usage;
	orphanedRequestIds = /* @__PURE__ */ new Set();
	transferDisposers = /* @__PURE__ */ new Set();
	constructor(e, t) {
		Ec(t.sessionId), Tc(t.operationId, "operation id"), Tc(t.generation, "generation"), Tc(t.maxByteCredit, "max byte credit"), t.cancelGraceMs !== void 0 && Tc(t.cancelGraceMs, "cancel grace"), this.bridge = e, this.options = t;
	}
	async pull(e, t) {
		if (this.validateCredit(e), this.ending || this.completed) throw Error("pull session is closed");
		if (this.pulling) throw Error("a pull request is already in flight");
		if (this.outstanding) throw Error("acknowledge the current chunk before the next pull");
		this.pulling = !0;
		let n = this.sequence;
		try {
			let r = await this.request((t) => ({
				protocol: wc,
				kind: "pull",
				...this.identity(),
				requestId: t,
				sequence: n,
				byteCredit: e
			}), t);
			if (this.validateResponseIdentity(r), r.usage && (this.usage = r.usage), r.kind === "error") throw Os(r.error);
			if (r.kind !== "chunk") throw Error(`expected chunk response, received ${r.kind}`);
			if (this.ending) throw this.disposePayload(r.payload), Error("pull session is closed");
			try {
				this.validateChunk(r, n, e);
			} catch (e) {
				throw this.disposePayload(r.payload), e;
			}
			return this.outstanding = !0, this.makeChunk(r);
		} catch (e) {
			throw !rs(e) && !this.ending && !this.completed && this.cancel("protocol-error").catch(() => void 0), e;
		} finally {
			this.pulling = !1;
		}
	}
	cancel(e = "closed", t) {
		return this.lifecyclePromise ? this.lifecyclePromise : (this.ending = !0, this.disposeAllTransferred(), this.lifecyclePromise = this.lifecycleControl(this.control("cancel", t, (t) => ({
			protocol: wc,
			kind: "cancel",
			...this.identity(),
			requestId: t,
			reason: e
		}))), this.lifecyclePromise);
	}
	close(e) {
		return this.lifecyclePromise ? this.lifecyclePromise : (this.ending = !0, this.disposeAllTransferred(), this.lifecyclePromise = this.lifecycleControl(this.control("close", e, (e) => ({
			protocol: wc,
			kind: "close",
			...this.identity(),
			requestId: e
		}))), this.lifecyclePromise);
	}
	get usageCheckpoint() {
		return this.usage;
	}
	makeChunk(e) {
		let t = !1, n, r, i = () => {
			t || (t = !0, this.transferDisposers.delete(i), this.disposePayload(e.payload));
		};
		return this.transferDisposers.add(i), {
			done: e.done,
			sequence: e.sequence,
			byteLength: e.byteLength,
			payload: e.payload,
			leaseId: e.leaseId,
			usage: e.usage,
			disposeTransferred: i,
			ack: (t) => n || (this.ending ? Promise.resolve() : (n = this.control("ack", t, (t) => ({
				protocol: wc,
				kind: "ack",
				...this.identity(),
				requestId: t,
				sequence: e.sequence
			})).then(() => {
				this.outstanding = !1, this.sequence++, e.done && (this.completed = !0);
			}).catch((e) => {
				throw this.ending || this.cancel("request-error").catch(() => void 0), e;
			}), n)),
			release: (t) => r || (e.leaseId === void 0 || this.ending ? Promise.resolve() : (r = this.control("release", t, (t) => ({
				protocol: wc,
				kind: "release",
				...this.identity(),
				requestId: t,
				leaseId: e.leaseId
			})).catch((e) => {
				throw this.ending || this.cancel("request-error").catch(() => void 0), e;
			}), r))
		};
	}
	async control(e, t, n) {
		let r = await this.request(n, t, e !== "cancel" && e !== "close");
		if (this.validateResponseIdentity(r), r.usage && (this.usage = r.usage), r.kind === "error") {
			if (r.error.code === "ooxml-stale-lifecycle" && (e === "cancel" || e === "close")) {
				this.forgetLifecycleOrphans();
				return;
			}
			throw Os(r.error);
		}
		if (r.kind !== "accepted" || r.command !== e) throw Error(`expected ${e} acceptance`);
		(e === "cancel" || e === "close") && this.forgetLifecycleOrphans();
	}
	request(e, t, n = !0) {
		return this.bridge.request(e, void 0, {
			timeoutMs: n ? t?.timeoutMs ?? this.options.timeoutMs : !1,
			signal: t?.signal,
			onOrphanedResponse: (e) => {
				e.kind === "chunk" && this.disposePayload(e.payload);
			},
			onCancel: (e, n) => {
				this.orphanedRequestIds.add(e);
				try {
					t?.onCancel?.(e, n);
				} finally {
					!this.ending && !this.completed && this.cancel(n).catch(() => void 0);
				}
			}
		});
	}
	identity() {
		return {
			sessionId: this.options.sessionId,
			operationId: this.options.operationId,
			generation: this.options.generation
		};
	}
	validateResponseIdentity(e) {
		if (e.protocol !== "ooxml-pull-v1" || e.sessionId !== this.options.sessionId || e.operationId !== this.options.operationId || e.generation !== this.options.generation) throw e.kind === "chunk" && this.disposePayload(e.payload), Error("stale or mismatched pull session response");
	}
	validateCredit(e) {
		if (Tc(e, "byte credit"), e > this.options.maxByteCredit) throw RangeError(`byte credit exceeds session maximum ${this.options.maxByteCredit}`);
	}
	validateChunk(e, t, n) {
		if (e.sequence !== t) throw Error("pull response sequence mismatch");
		if (!Number.isSafeInteger(e.byteLength) || e.byteLength < 0) throw RangeError("chunk byte length must be a non-negative safe integer");
		if (e.byteLength > n) throw RangeError("chunk exceeds byte credit");
		e.leaseId !== void 0 && Tc(e.leaseId, "lease id");
	}
	disposeAllTransferred() {
		for (let e of [...this.transferDisposers]) e();
	}
	lifecycleControl(e) {
		let t = this.options.cancelGraceMs ?? 1e3, n, r = new Promise((e, r) => {
			n = setTimeout(() => {
				this.bridge.terminate(), r(/* @__PURE__ */ Error(`worker did not accept lifecycle command within ${t}ms`));
			}, t);
		});
		return Promise.race([e, r]).catch((e) => {
			throw this.bridge.terminate(), e;
		}).finally(() => {
			n !== void 0 && clearTimeout(n);
		});
	}
	forgetLifecycleOrphans() {
		this.bridge.forgetOrphaned(this.orphanedRequestIds), this.orphanedRequestIds.clear();
	}
	disposePayload(e) {
		try {
			this.options.disposeTransferred?.(e);
		} catch {}
	}
}, Oc = class {
	owner;
	queue = Promise.resolve();
	leases = /* @__PURE__ */ new Map();
	retainedBytes = 0;
	retainedCount = 0;
	maxRetainedBytes;
	maxRetainedCount;
	cleanups = /* @__PURE__ */ new Set();
	pendingFatalCleanups = [];
	poisonRunning = !1;
	fatal;
	constructor(e) {
		this.maxRetainedBytes = e?.maxRetainedBytes ?? 64 * 1024 * 1024, this.maxRetainedCount = e?.maxRetainedCount ?? 256, Tc(this.maxRetainedBytes, "max retained lease bytes"), Tc(this.maxRetainedCount, "max retained lease count");
	}
	enqueue(e) {
		let t = this.queue.then(e, e);
		return this.queue = t.then(() => void 0, () => void 0), t;
	}
	acquire(e) {
		return this.owner === void 0 ? (this.owner = e, !0) : this.owner === e;
	}
	release(e) {
		this.owner === e && (this.owner = void 0);
	}
	retainLease(e, t, n) {
		if (!Number.isSafeInteger(n) || n < 0) throw RangeError("retained lease bytes are invalid");
		let r = this.leases.get(e) ?? /* @__PURE__ */ new Map();
		if (r.has(t)) throw Error("driver returned a duplicate lease id");
		if (this.retainedCount + 1 > this.maxRetainedCount) throw RangeError("retained lease count exceeds limit");
		if (this.retainedBytes + n > this.maxRetainedBytes) throw RangeError("retained lease bytes exceed limit");
		r.set(t, n), this.leases.set(e, r), this.retainedCount++, this.retainedBytes += n;
	}
	releaseLease(e, t) {
		let n = this.leases.get(e), r = n?.get(t);
		r !== void 0 && (n?.delete(t), n?.size === 0 && this.leases.delete(e), this.retainedCount--, this.retainedBytes -= r);
	}
	registerCleanup(e) {
		return this.fatal ? (this.poisonRunning ? this.pendingFatalCleanups.push(e) : this.enqueue(e).catch(() => void 0), () => void 0) : (this.cleanups.add(e), () => this.cleanups.delete(e));
	}
	get fatalError() {
		return this.fatal;
	}
	get registeredHostCount() {
		return this.cleanups.size;
	}
	async poison(e) {
		if (this.fatal ??= e, this.poisonRunning) return this.fatal;
		this.poisonRunning = !0, this.pendingFatalCleanups.push(...this.cleanups);
		try {
			let e;
			for (; (e = this.pendingFatalCleanups.shift()) !== void 0;) await e().catch(() => void 0);
		} finally {
			this.poisonRunning = !1;
		}
		return this.fatal;
	}
}, kc = class {
	options;
	coordinator;
	coordinatorOwner = Symbol("pull-session-host");
	unregisterCleanup;
	sequence = 0;
	unacked;
	leases = /* @__PURE__ */ new Map();
	activeDriverLeases = /* @__PURE__ */ new Set();
	nextWireLeaseId;
	cancelRequested = !1;
	cancelComplete = !1;
	closeRequested = !1;
	closeComplete = !1;
	driverCancelComplete = !1;
	driverCloseComplete = !1;
	completed = !1;
	constructor(e) {
		Ec(e.sessionId), Tc(e.operationId, "operation id"), Tc(e.generation, "generation"), Tc(e.maxByteCredit, "max byte credit"), e.wireLeaseIdStart !== void 0 && Tc(e.wireLeaseIdStart, "wire lease id start"), this.options = e, this.coordinator = e.coordinator, this.nextWireLeaseId = e.wireLeaseIdStart ?? 1, this.unregisterCleanup = this.coordinator.registerCleanup(() => this.forceFatalCleanup());
	}
	dispatch(e, t) {
		return this.coordinator.enqueue(async () => {
			let n = await this.execute(e);
			try {
				t(n.response, n.transfer);
			} catch (e) {
				throw await this.rollbackFailedPost(n), e;
			}
		});
	}
	async rollbackFailedPost(e) {
		let t = e.response;
		if (t.kind === "chunk") {
			let n = t.leaseId === void 0 ? void 0 : this.leases.get(t.leaseId);
			try {
				await this.options.driver.disposeInvalidChunk?.({
					payload: t.payload,
					byteLength: t.byteLength,
					done: t.done,
					leaseId: n?.driverLeaseId,
					retainedBytes: n?.retainedBytes,
					transfer: e.transfer
				});
			} catch {}
		}
		this.unacked = void 0, this.coordinator.release(this.coordinatorOwner);
		for (let [e, t] of [...this.leases]) try {
			await this.options.driver.releaseLease?.(t.driverLeaseId);
		} catch {} finally {
			this.leases.delete(e), this.activeDriverLeases.delete(t.driverLeaseId), this.coordinator.releaseLease(this.coordinatorOwner, e);
		}
		if (this.cancelRequested = !0, !this.driverCancelComplete) try {
			await this.options.driver.cancel?.(), this.driverCancelComplete = !0;
		} catch {}
		this.unregisterCleanup();
	}
	async execute(e) {
		try {
			if (this.isStaleLifecycle(e)) {
				let t = e.kind === "cancel" ? "cancel" : "close";
				return this.sameOperationIdentity(e) ? { response: this.accepted(e, t, !0) } : { response: this.errorResponse(e, {
					message: "stale lifecycle targets another session or operation",
					errorName: "PullSessionProtocolError",
					code: "ooxml-stale-lifecycle"
				}) };
			}
			this.validateCommandIdentity(e);
			let t = this.coordinator.fatalError;
			if (t) return e.kind === "pull" ? { response: this.errorResponse(e, t) } : (e.kind === "cancel" ? await this.cancel() : e.kind === "close" ? await this.close() : e.kind === "release" && await this.release(e.leaseId), { response: this.accepted(e, e.kind) });
			switch (e.kind) {
				case "pull": return await this.pull(e);
				case "ack": return await this.ack(e.sequence), { response: this.accepted(e, "ack") };
				case "release": return await this.release(e.leaseId), { response: this.accepted(e, "release") };
				case "cancel": return await this.cancel(), { response: this.accepted(e, "cancel") };
				case "close": return await this.close(), { response: this.accepted(e, "close") };
			}
		} catch (t) {
			let n = Es(t);
			return n.code === "ooxml-resource-limit" && (n = await this.coordinator.poison(n)), { response: this.errorResponse(e, n) };
		}
	}
	async pull(e) {
		if (this.closeRequested || this.cancelRequested || this.completed) throw Error("pull session is closed");
		if (this.unacked) throw Error("previous chunk is not acknowledged");
		if (!Number.isSafeInteger(e.sequence) || e.sequence < 0 || e.sequence !== this.sequence) throw Error("pull command sequence mismatch");
		if (this.validateHostCredit(e.byteCredit), !this.coordinator.acquire(this.coordinatorOwner)) throw Error("another operation has an unacknowledged package chunk");
		let t;
		try {
			t = await this.options.driver.pull(e.byteCredit);
		} catch (e) {
			throw this.coordinator.release(this.coordinatorOwner), e;
		}
		let n = !1, r = !1, i, a;
		try {
			let o = this.options.driver.measureChunk(t), s = this.arrayBufferTransferBytes(t.transfer);
			if (o < s) throw RangeError("measured chunk bytes are below ArrayBuffer transfer bytes");
			if (a = Math.max(o, s), t.leaseId !== void 0) {
				if (Tc(t.leaseId, "lease id"), t.retainedBytes === void 0) throw Error("retained lease bytes are required");
				if (this.activeDriverLeases.has(t.leaseId)) throw r = !0, Error("driver returned an active duplicate lease id");
				i = this.allocateWireLeaseId(), this.coordinator.retainLease(this.coordinatorOwner, i, t.retainedBytes), this.leases.set(i, {
					driverLeaseId: t.leaseId,
					retainedBytes: t.retainedBytes
				}), this.activeDriverLeases.add(t.leaseId), n = !0;
			} else if (t.retainedBytes !== void 0) throw Error("retained lease bytes require a lease id");
			if (!Number.isSafeInteger(a) || a < 0) throw RangeError("host chunk byte length must be a non-negative safe integer");
			if (a > e.byteCredit) throw RangeError("host chunk exceeds byte credit");
		} catch (e) {
			let a;
			try {
				await this.options.driver.disposeInvalidChunk?.(t);
			} catch (e) {
				a = e;
			}
			if (n && i !== void 0) try {
				await this.release(i);
			} catch (e) {
				a ??= e;
			}
			else if (t.leaseId !== void 0 && !r) try {
				await this.options.driver.releaseLease?.(t.leaseId);
			} catch (e) {
				a ??= e;
			}
			if (r) try {
				await this.cancel();
			} catch (e) {
				a ??= e;
			}
			throw this.coordinator.release(this.coordinatorOwner), a || e;
		}
		return this.unacked = {
			sequence: this.sequence,
			done: t.done
		}, {
			response: {
				kind: "chunk",
				protocol: wc,
				...this.identity(),
				requestId: e.requestId,
				sequence: this.sequence,
				byteLength: a,
				done: t.done,
				payload: t.payload,
				leaseId: i,
				usage: this.resourceUsage()
			},
			transfer: t.transfer
		};
	}
	async ack(e) {
		if (!Number.isSafeInteger(e) || e < 0) throw RangeError("invalid ack sequence");
		if (e < this.sequence) return;
		if (!this.unacked || e !== this.sequence) throw Error("ack sequence mismatch");
		let t = this.unacked.done;
		await this.options.driver.acknowledge?.(e), this.unacked = void 0, this.coordinator.release(this.coordinatorOwner), this.sequence++, t && (this.completed = !0, this.maybeUnregisterCompleted());
	}
	async release(e) {
		Tc(e, "wire lease id");
		let t = this.leases.get(e);
		t && (await this.options.driver.releaseLease?.(t.driverLeaseId), this.leases.delete(e), this.activeDriverLeases.delete(t.driverLeaseId), this.coordinator.releaseLease(this.coordinatorOwner, e), this.maybeUnregisterCompleted());
	}
	async cancel() {
		if (this.cancelComplete) return;
		this.cancelRequested = !0, this.unacked = void 0, this.coordinator.release(this.coordinatorOwner);
		let e;
		try {
			await this.releaseAllLeases();
		} catch (t) {
			e = t;
		}
		if (!this.driverCancelComplete) try {
			await this.options.driver.cancel?.(), this.driverCancelComplete = !0;
		} catch (t) {
			e ??= t;
		}
		if (e) throw e;
		this.cancelComplete = !0, this.unregisterCleanup();
	}
	async close() {
		if (this.closeComplete) return;
		this.closeRequested = !0, this.unacked = void 0, this.coordinator.release(this.coordinatorOwner);
		let e;
		try {
			await this.releaseAllLeases();
		} catch (t) {
			e = t;
		}
		if (!this.driverCloseComplete) try {
			await this.options.driver.close?.(), this.driverCloseComplete = !0;
		} catch (t) {
			e ??= t;
		}
		if (e) throw e;
		this.closeComplete = !0, this.unregisterCleanup();
	}
	async releaseAllLeases() {
		let e;
		for (let t of [...this.leases.keys()]) try {
			await this.release(t);
		} catch (t) {
			e ??= t;
		}
		if (e) throw e;
	}
	validateCommandIdentity(e) {
		if (e.protocol !== "ooxml-pull-v1" || e.sessionId !== this.options.sessionId || e.operationId !== this.options.operationId || e.generation !== this.options.generation || !Number.isSafeInteger(e.requestId) || e.requestId <= 0) throw Error("stale or mismatched pull session command");
	}
	validateHostCredit(e) {
		if (Tc(e, "byte credit"), e > this.options.maxByteCredit) throw RangeError("byte credit exceeds host maximum");
	}
	accepted(e, t, n = !1) {
		return {
			kind: "accepted",
			protocol: wc,
			...n ? {
				sessionId: e.sessionId,
				operationId: e.operationId,
				generation: e.generation
			} : this.identity(),
			requestId: e.requestId,
			command: t,
			usage: this.resourceUsage()
		};
	}
	identity() {
		return {
			sessionId: this.options.sessionId,
			operationId: this.options.operationId,
			generation: this.options.generation
		};
	}
	isStaleLifecycle(e) {
		return (e.kind === "cancel" || e.kind === "close") && e.protocol === "ooxml-pull-v1" && Number.isSafeInteger(e.requestId) && e.requestId > 0 && Number.isSafeInteger(e.generation) && e.generation > 0 && e.generation < this.options.generation;
	}
	sameOperationIdentity(e) {
		return e.sessionId === this.options.sessionId && e.operationId === this.options.operationId;
	}
	errorResponse(e, t) {
		return {
			kind: "error",
			protocol: wc,
			sessionId: e.sessionId,
			operationId: e.operationId,
			generation: e.generation,
			requestId: e.requestId,
			error: t,
			usage: this.errorResourceUsage()
		};
	}
	async forceFatalCleanup() {
		this.cancelRequested = !0, this.unacked = void 0, this.coordinator.release(this.coordinatorOwner);
		let e;
		for (let t of [...this.leases.keys()]) try {
			await this.release(t);
		} catch (t) {
			e ??= t;
		}
		if (!this.driverCancelComplete) try {
			await this.options.driver.cancel?.(), this.driverCancelComplete = !0;
		} catch (t) {
			e ??= t;
		}
		if (e) throw e;
		this.unregisterCleanup();
	}
	allocateWireLeaseId() {
		if (!Number.isSafeInteger(this.nextWireLeaseId) || this.nextWireLeaseId <= 0) throw RangeError("wire lease id space exhausted");
		return this.nextWireLeaseId++;
	}
	arrayBufferTransferBytes(e) {
		let t = 0;
		for (let n of e ?? []) if (n instanceof ArrayBuffer && (t += n.byteLength, !Number.isSafeInteger(t))) throw RangeError("ArrayBuffer transfer bytes overflow");
		return t;
	}
	maybeUnregisterCompleted() {
		this.completed && this.leases.size === 0 && this.unregisterCleanup();
	}
	resourceUsage() {
		return this.options.driver.resourceUsage?.();
	}
	errorResourceUsage() {
		try {
			return this.resourceUsage();
		} catch {
			return;
		}
	}
}, Ac = [
	"L",
	"R",
	"AL",
	"EN",
	"ES",
	"ET",
	"AN",
	"CS",
	"NSM",
	"BN",
	"B",
	"S",
	"WS",
	"ON",
	"LRE",
	"LRO",
	"RLE",
	"RLO",
	"PDF",
	"LRI",
	"RLI",
	"FSI",
	"PDI"
], jc = [
	0,
	9,
	10,
	11,
	12,
	13,
	14,
	28,
	31,
	32,
	33,
	35,
	38,
	43,
	44,
	45,
	46,
	48,
	58,
	59,
	65,
	91,
	97,
	123,
	127,
	133,
	134,
	160,
	161,
	162,
	166,
	170,
	171,
	173,
	174,
	176,
	178,
	180,
	181,
	182,
	185,
	186,
	187,
	192,
	215,
	216,
	247,
	248,
	697,
	699,
	706,
	720,
	722,
	736,
	741,
	750,
	751,
	768,
	880,
	884,
	886,
	894,
	895,
	900,
	902,
	903,
	904,
	1014,
	1015,
	1155,
	1162,
	1418,
	1419,
	1421,
	1423,
	1424,
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
	1536,
	1542,
	1544,
	1545,
	1547,
	1548,
	1549,
	1550,
	1552,
	1563,
	1611,
	1632,
	1642,
	1643,
	1645,
	1648,
	1649,
	1750,
	1757,
	1758,
	1759,
	1765,
	1767,
	1769,
	1770,
	1774,
	1776,
	1786,
	1809,
	1810,
	1840,
	1867,
	1958,
	1969,
	1984,
	2027,
	2036,
	2038,
	2042,
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
	2137,
	2140,
	2144,
	2192,
	2194,
	2199,
	2208,
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
	2546,
	2548,
	2555,
	2556,
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
	2801,
	2802,
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
	3059,
	3065,
	3066,
	3067,
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
	3192,
	3199,
	3201,
	3202,
	3260,
	3261,
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
	3647,
	3648,
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
	3902,
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
	5008,
	5018,
	5120,
	5121,
	5760,
	5761,
	5787,
	5789,
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
	6107,
	6108,
	6109,
	6110,
	6128,
	6138,
	6144,
	6155,
	6158,
	6159,
	6160,
	6277,
	6279,
	6313,
	6314,
	6432,
	6435,
	6439,
	6441,
	6450,
	6451,
	6457,
	6460,
	6464,
	6465,
	6468,
	6470,
	6622,
	6656,
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
	8125,
	8126,
	8127,
	8130,
	8141,
	8144,
	8157,
	8160,
	8173,
	8176,
	8189,
	8191,
	8192,
	8203,
	8206,
	8207,
	8208,
	8232,
	8233,
	8234,
	8235,
	8236,
	8237,
	8238,
	8239,
	8240,
	8245,
	8260,
	8261,
	8287,
	8288,
	8294,
	8295,
	8296,
	8297,
	8298,
	8304,
	8305,
	8308,
	8314,
	8316,
	8319,
	8320,
	8330,
	8332,
	8335,
	8352,
	8400,
	8433,
	8448,
	8450,
	8451,
	8455,
	8456,
	8458,
	8468,
	8469,
	8470,
	8473,
	8478,
	8484,
	8485,
	8486,
	8487,
	8488,
	8489,
	8490,
	8494,
	8495,
	8506,
	8508,
	8512,
	8517,
	8522,
	8526,
	8528,
	8544,
	8585,
	8588,
	8592,
	8722,
	8723,
	8724,
	9014,
	9083,
	9109,
	9110,
	9258,
	9280,
	9291,
	9312,
	9352,
	9372,
	9450,
	9900,
	9901,
	10240,
	10496,
	11124,
	11126,
	11264,
	11493,
	11499,
	11503,
	11506,
	11513,
	11520,
	11647,
	11648,
	11744,
	11776,
	11870,
	11904,
	11930,
	11931,
	12020,
	12032,
	12246,
	12272,
	12288,
	12289,
	12293,
	12296,
	12321,
	12330,
	12334,
	12336,
	12337,
	12342,
	12344,
	12349,
	12352,
	12441,
	12443,
	12445,
	12448,
	12449,
	12539,
	12540,
	12736,
	12774,
	12783,
	12784,
	12829,
	12831,
	12880,
	12896,
	12924,
	12927,
	12977,
	12992,
	13004,
	13008,
	13175,
	13179,
	13278,
	13280,
	13311,
	13312,
	19904,
	19968,
	42128,
	42183,
	42509,
	42512,
	42607,
	42611,
	42612,
	42622,
	42624,
	42654,
	42656,
	42736,
	42738,
	42752,
	42786,
	42888,
	42889,
	43010,
	43011,
	43014,
	43015,
	43019,
	43020,
	43045,
	43047,
	43048,
	43052,
	43053,
	43064,
	43066,
	43124,
	43128,
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
	43882,
	43884,
	44005,
	44006,
	44008,
	44009,
	44013,
	44014,
	64285,
	64286,
	64287,
	64297,
	64298,
	64336,
	64451,
	64467,
	64830,
	64848,
	64912,
	64914,
	64968,
	64976,
	65008,
	65021,
	65024,
	65040,
	65050,
	65056,
	65072,
	65104,
	65105,
	65106,
	65107,
	65108,
	65109,
	65110,
	65119,
	65120,
	65122,
	65124,
	65127,
	65128,
	65129,
	65131,
	65132,
	65136,
	65279,
	65280,
	65281,
	65283,
	65286,
	65291,
	65292,
	65293,
	65294,
	65296,
	65306,
	65307,
	65313,
	65339,
	65345,
	65371,
	65382,
	65504,
	65506,
	65509,
	65511,
	65512,
	65519,
	65520,
	65529,
	65534,
	65536,
	65793,
	65794,
	65856,
	65933,
	65936,
	65949,
	65952,
	65953,
	66045,
	66046,
	66272,
	66273,
	66300,
	66422,
	66427,
	67584,
	67871,
	67872,
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
	68325,
	68327,
	68409,
	68416,
	68864,
	68900,
	68904,
	68912,
	68922,
	68928,
	68938,
	68969,
	68974,
	68975,
	69216,
	69247,
	69291,
	69293,
	69312,
	69328,
	69337,
	69370,
	69376,
	69424,
	69446,
	69457,
	69488,
	69506,
	69510,
	69632,
	69633,
	69634,
	69688,
	69703,
	69714,
	69734,
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
	71264,
	71277,
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
	72199,
	72201,
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
	73685,
	73693,
	73697,
	73714,
	78912,
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
	94178,
	94179,
	94180,
	94181,
	113821,
	113823,
	113824,
	113828,
	117760,
	117974,
	118e3,
	118010,
	118013,
	118016,
	118452,
	118458,
	118481,
	118496,
	118513,
	118528,
	118574,
	118576,
	118599,
	119143,
	119146,
	119155,
	119163,
	119171,
	119173,
	119180,
	119210,
	119214,
	119273,
	119275,
	119296,
	119362,
	119365,
	119366,
	119552,
	119639,
	120513,
	120514,
	120539,
	120540,
	120571,
	120572,
	120597,
	120598,
	120629,
	120630,
	120655,
	120656,
	120687,
	120688,
	120713,
	120714,
	120745,
	120746,
	120771,
	120772,
	120782,
	120832,
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
	123647,
	123648,
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
	124928,
	125136,
	125143,
	125252,
	125259,
	126064,
	126144,
	126208,
	126288,
	126464,
	126704,
	126706,
	126720,
	126976,
	127020,
	127024,
	127124,
	127136,
	127151,
	127153,
	127168,
	127169,
	127184,
	127185,
	127222,
	127232,
	127243,
	127248,
	127279,
	127280,
	127338,
	127344,
	127405,
	127406,
	127584,
	127590,
	127744,
	128729,
	128732,
	128749,
	128752,
	128765,
	128768,
	128986,
	128992,
	129004,
	129008,
	129009,
	129024,
	129036,
	129040,
	129096,
	129104,
	129114,
	129120,
	129160,
	129168,
	129198,
	129200,
	129212,
	129216,
	129218,
	129232,
	129241,
	129280,
	129624,
	129632,
	129646,
	129648,
	129661,
	129664,
	129675,
	129678,
	129735,
	129736,
	129737,
	129741,
	129757,
	129759,
	129771,
	129775,
	129785,
	129792,
	129939,
	129940,
	130032,
	130042,
	130043,
	131070,
	131072,
	196606,
	196608,
	262142,
	262144,
	327678,
	327680,
	393214,
	393216,
	458750,
	458752,
	524286,
	524288,
	589822,
	589824,
	655358,
	655360,
	720894,
	720896,
	786430,
	786432,
	851966,
	851968,
	917502,
	917760,
	918e3,
	921600,
	983038,
	983040,
	1048574,
	1048576,
	1114110
], Mc = [
	9,
	11,
	10,
	11,
	12,
	10,
	9,
	10,
	11,
	12,
	13,
	5,
	13,
	4,
	7,
	4,
	7,
	3,
	7,
	13,
	0,
	13,
	0,
	13,
	9,
	10,
	9,
	7,
	13,
	5,
	13,
	0,
	13,
	9,
	13,
	5,
	3,
	13,
	0,
	13,
	3,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	8,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	8,
	0,
	13,
	0,
	13,
	5,
	1,
	8,
	1,
	8,
	1,
	8,
	1,
	8,
	1,
	8,
	1,
	6,
	13,
	2,
	5,
	2,
	7,
	2,
	13,
	8,
	2,
	8,
	6,
	5,
	6,
	2,
	8,
	2,
	8,
	6,
	13,
	8,
	2,
	8,
	13,
	8,
	2,
	3,
	2,
	8,
	2,
	8,
	2,
	8,
	2,
	1,
	8,
	1,
	13,
	1,
	8,
	1,
	8,
	1,
	8,
	1,
	8,
	1,
	8,
	1,
	8,
	1,
	2,
	6,
	2,
	8,
	2,
	8,
	6,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	5,
	0,
	5,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	5,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	13,
	5,
	13,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	13,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	5,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	13,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	13,
	0,
	13,
	0,
	12,
	0,
	13,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	5,
	0,
	8,
	0,
	13,
	0,
	13,
	8,
	9,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	12,
	9,
	0,
	1,
	13,
	12,
	10,
	14,
	16,
	18,
	15,
	17,
	7,
	5,
	13,
	7,
	13,
	12,
	9,
	19,
	20,
	21,
	22,
	9,
	3,
	0,
	3,
	4,
	13,
	0,
	3,
	4,
	13,
	0,
	5,
	8,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	5,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	4,
	5,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	3,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	8,
	0,
	13,
	0,
	8,
	0,
	8,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	12,
	13,
	0,
	13,
	0,
	8,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	8,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	8,
	13,
	8,
	13,
	0,
	8,
	0,
	8,
	0,
	13,
	0,
	13,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	13,
	8,
	0,
	5,
	0,
	13,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	13,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	1,
	8,
	1,
	4,
	1,
	2,
	13,
	2,
	13,
	2,
	13,
	2,
	13,
	9,
	2,
	13,
	8,
	13,
	0,
	8,
	13,
	7,
	13,
	7,
	0,
	13,
	7,
	13,
	5,
	13,
	4,
	13,
	0,
	13,
	5,
	13,
	0,
	2,
	9,
	0,
	13,
	5,
	13,
	4,
	7,
	4,
	7,
	3,
	7,
	13,
	0,
	13,
	0,
	13,
	0,
	5,
	13,
	5,
	0,
	13,
	0,
	9,
	13,
	9,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	8,
	0,
	8,
	3,
	0,
	8,
	0,
	1,
	13,
	1,
	8,
	1,
	8,
	1,
	8,
	1,
	8,
	1,
	8,
	1,
	8,
	1,
	13,
	1,
	2,
	8,
	2,
	6,
	2,
	6,
	1,
	8,
	13,
	1,
	6,
	1,
	8,
	1,
	2,
	13,
	2,
	8,
	1,
	2,
	8,
	2,
	1,
	8,
	1,
	0,
	8,
	0,
	8,
	0,
	13,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	13,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	13,
	5,
	13,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	13,
	0,
	8,
	0,
	8,
	0,
	9,
	0,
	13,
	0,
	3,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	9,
	8,
	0,
	8,
	0,
	8,
	0,
	13,
	0,
	13,
	8,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	3,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	5,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	8,
	0,
	1,
	8,
	1,
	8,
	1,
	2,
	1,
	2,
	1,
	2,
	13,
	2,
	1,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	3,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	0,
	13,
	3,
	13,
	0,
	9,
	0,
	9,
	0,
	9,
	0,
	9,
	0,
	9,
	0,
	9,
	0,
	9,
	0,
	9,
	0,
	9,
	0,
	9,
	0,
	9,
	0,
	9,
	0,
	9,
	8,
	9,
	0,
	9,
	0,
	9,
	0,
	9
], Nc = [
	40,
	41,
	41,
	40,
	60,
	62,
	62,
	60,
	91,
	93,
	93,
	91,
	123,
	125,
	125,
	123,
	171,
	187,
	187,
	171,
	3898,
	3899,
	3899,
	3898,
	3900,
	3901,
	3901,
	3900,
	5787,
	5788,
	5788,
	5787,
	8249,
	8250,
	8250,
	8249,
	8261,
	8262,
	8262,
	8261,
	8317,
	8318,
	8318,
	8317,
	8333,
	8334,
	8334,
	8333,
	8712,
	8715,
	8713,
	8716,
	8714,
	8717,
	8715,
	8712,
	8716,
	8713,
	8717,
	8714,
	8725,
	10741,
	8735,
	11262,
	8736,
	10659,
	8737,
	10651,
	8738,
	10656,
	8740,
	10990,
	8764,
	8765,
	8765,
	8764,
	8771,
	8909,
	8773,
	8780,
	8780,
	8773,
	8786,
	8787,
	8787,
	8786,
	8788,
	8789,
	8789,
	8788,
	8804,
	8805,
	8805,
	8804,
	8806,
	8807,
	8807,
	8806,
	8808,
	8809,
	8809,
	8808,
	8810,
	8811,
	8811,
	8810,
	8814,
	8815,
	8815,
	8814,
	8816,
	8817,
	8817,
	8816,
	8818,
	8819,
	8819,
	8818,
	8820,
	8821,
	8821,
	8820,
	8822,
	8823,
	8823,
	8822,
	8824,
	8825,
	8825,
	8824,
	8826,
	8827,
	8827,
	8826,
	8828,
	8829,
	8829,
	8828,
	8830,
	8831,
	8831,
	8830,
	8832,
	8833,
	8833,
	8832,
	8834,
	8835,
	8835,
	8834,
	8836,
	8837,
	8837,
	8836,
	8838,
	8839,
	8839,
	8838,
	8840,
	8841,
	8841,
	8840,
	8842,
	8843,
	8843,
	8842,
	8847,
	8848,
	8848,
	8847,
	8849,
	8850,
	8850,
	8849,
	8856,
	10680,
	8866,
	8867,
	8867,
	8866,
	8870,
	10974,
	8872,
	10980,
	8873,
	10979,
	8875,
	10981,
	8880,
	8881,
	8881,
	8880,
	8882,
	8883,
	8883,
	8882,
	8884,
	8885,
	8885,
	8884,
	8886,
	8887,
	8887,
	8886,
	8888,
	10204,
	8905,
	8906,
	8906,
	8905,
	8907,
	8908,
	8908,
	8907,
	8909,
	8771,
	8912,
	8913,
	8913,
	8912,
	8918,
	8919,
	8919,
	8918,
	8920,
	8921,
	8921,
	8920,
	8922,
	8923,
	8923,
	8922,
	8924,
	8925,
	8925,
	8924,
	8926,
	8927,
	8927,
	8926,
	8928,
	8929,
	8929,
	8928,
	8930,
	8931,
	8931,
	8930,
	8932,
	8933,
	8933,
	8932,
	8934,
	8935,
	8935,
	8934,
	8936,
	8937,
	8937,
	8936,
	8938,
	8939,
	8939,
	8938,
	8940,
	8941,
	8941,
	8940,
	8944,
	8945,
	8945,
	8944,
	8946,
	8954,
	8947,
	8955,
	8948,
	8956,
	8950,
	8957,
	8951,
	8958,
	8954,
	8946,
	8955,
	8947,
	8956,
	8948,
	8957,
	8950,
	8958,
	8951,
	8968,
	8969,
	8969,
	8968,
	8970,
	8971,
	8971,
	8970,
	9001,
	9002,
	9002,
	9001,
	10088,
	10089,
	10089,
	10088,
	10090,
	10091,
	10091,
	10090,
	10092,
	10093,
	10093,
	10092,
	10094,
	10095,
	10095,
	10094,
	10096,
	10097,
	10097,
	10096,
	10098,
	10099,
	10099,
	10098,
	10100,
	10101,
	10101,
	10100,
	10179,
	10180,
	10180,
	10179,
	10181,
	10182,
	10182,
	10181,
	10184,
	10185,
	10185,
	10184,
	10187,
	10189,
	10189,
	10187,
	10197,
	10198,
	10198,
	10197,
	10204,
	8888,
	10205,
	10206,
	10206,
	10205,
	10210,
	10211,
	10211,
	10210,
	10212,
	10213,
	10213,
	10212,
	10214,
	10215,
	10215,
	10214,
	10216,
	10217,
	10217,
	10216,
	10218,
	10219,
	10219,
	10218,
	10220,
	10221,
	10221,
	10220,
	10222,
	10223,
	10223,
	10222,
	10627,
	10628,
	10628,
	10627,
	10629,
	10630,
	10630,
	10629,
	10631,
	10632,
	10632,
	10631,
	10633,
	10634,
	10634,
	10633,
	10635,
	10636,
	10636,
	10635,
	10637,
	10640,
	10638,
	10639,
	10639,
	10638,
	10640,
	10637,
	10641,
	10642,
	10642,
	10641,
	10643,
	10644,
	10644,
	10643,
	10645,
	10646,
	10646,
	10645,
	10647,
	10648,
	10648,
	10647,
	10651,
	8737,
	10656,
	8738,
	10659,
	8736,
	10660,
	10661,
	10661,
	10660,
	10664,
	10665,
	10665,
	10664,
	10666,
	10667,
	10667,
	10666,
	10668,
	10669,
	10669,
	10668,
	10670,
	10671,
	10671,
	10670,
	10680,
	8856,
	10688,
	10689,
	10689,
	10688,
	10692,
	10693,
	10693,
	10692,
	10703,
	10704,
	10704,
	10703,
	10705,
	10706,
	10706,
	10705,
	10708,
	10709,
	10709,
	10708,
	10712,
	10713,
	10713,
	10712,
	10714,
	10715,
	10715,
	10714,
	10728,
	10729,
	10729,
	10728,
	10741,
	8725,
	10744,
	10745,
	10745,
	10744,
	10748,
	10749,
	10749,
	10748,
	10795,
	10796,
	10796,
	10795,
	10797,
	10798,
	10798,
	10797,
	10804,
	10805,
	10805,
	10804,
	10812,
	10813,
	10813,
	10812,
	10852,
	10853,
	10853,
	10852,
	10873,
	10874,
	10874,
	10873,
	10875,
	10876,
	10876,
	10875,
	10877,
	10878,
	10878,
	10877,
	10879,
	10880,
	10880,
	10879,
	10881,
	10882,
	10882,
	10881,
	10883,
	10884,
	10884,
	10883,
	10885,
	10886,
	10886,
	10885,
	10887,
	10888,
	10888,
	10887,
	10889,
	10890,
	10890,
	10889,
	10891,
	10892,
	10892,
	10891,
	10893,
	10894,
	10894,
	10893,
	10895,
	10896,
	10896,
	10895,
	10897,
	10898,
	10898,
	10897,
	10899,
	10900,
	10900,
	10899,
	10901,
	10902,
	10902,
	10901,
	10903,
	10904,
	10904,
	10903,
	10905,
	10906,
	10906,
	10905,
	10907,
	10908,
	10908,
	10907,
	10909,
	10910,
	10910,
	10909,
	10911,
	10912,
	10912,
	10911,
	10913,
	10914,
	10914,
	10913,
	10918,
	10919,
	10919,
	10918,
	10920,
	10921,
	10921,
	10920,
	10922,
	10923,
	10923,
	10922,
	10924,
	10925,
	10925,
	10924,
	10927,
	10928,
	10928,
	10927,
	10929,
	10930,
	10930,
	10929,
	10931,
	10932,
	10932,
	10931,
	10933,
	10934,
	10934,
	10933,
	10935,
	10936,
	10936,
	10935,
	10937,
	10938,
	10938,
	10937,
	10939,
	10940,
	10940,
	10939,
	10941,
	10942,
	10942,
	10941,
	10943,
	10944,
	10944,
	10943,
	10945,
	10946,
	10946,
	10945,
	10947,
	10948,
	10948,
	10947,
	10949,
	10950,
	10950,
	10949,
	10951,
	10952,
	10952,
	10951,
	10953,
	10954,
	10954,
	10953,
	10955,
	10956,
	10956,
	10955,
	10957,
	10958,
	10958,
	10957,
	10959,
	10960,
	10960,
	10959,
	10961,
	10962,
	10962,
	10961,
	10963,
	10964,
	10964,
	10963,
	10965,
	10966,
	10966,
	10965,
	10974,
	8870,
	10979,
	8873,
	10980,
	8872,
	10981,
	8875,
	10988,
	10989,
	10989,
	10988,
	10990,
	8740,
	10999,
	11e3,
	11e3,
	10999,
	11001,
	11002,
	11002,
	11001,
	11262,
	8735,
	11778,
	11779,
	11779,
	11778,
	11780,
	11781,
	11781,
	11780,
	11785,
	11786,
	11786,
	11785,
	11788,
	11789,
	11789,
	11788,
	11804,
	11805,
	11805,
	11804,
	11808,
	11809,
	11809,
	11808,
	11810,
	11811,
	11811,
	11810,
	11812,
	11813,
	11813,
	11812,
	11814,
	11815,
	11815,
	11814,
	11816,
	11817,
	11817,
	11816,
	11861,
	11862,
	11862,
	11861,
	11863,
	11864,
	11864,
	11863,
	11865,
	11866,
	11866,
	11865,
	11867,
	11868,
	11868,
	11867,
	12296,
	12297,
	12297,
	12296,
	12298,
	12299,
	12299,
	12298,
	12300,
	12301,
	12301,
	12300,
	12302,
	12303,
	12303,
	12302,
	12304,
	12305,
	12305,
	12304,
	12308,
	12309,
	12309,
	12308,
	12310,
	12311,
	12311,
	12310,
	12312,
	12313,
	12313,
	12312,
	12314,
	12315,
	12315,
	12314,
	65113,
	65114,
	65114,
	65113,
	65115,
	65116,
	65116,
	65115,
	65117,
	65118,
	65118,
	65117,
	65124,
	65125,
	65125,
	65124,
	65288,
	65289,
	65289,
	65288,
	65308,
	65310,
	65310,
	65308,
	65339,
	65341,
	65341,
	65339,
	65371,
	65373,
	65373,
	65371,
	65375,
	65376,
	65376,
	65375,
	65378,
	65379,
	65379,
	65378
], Pc = [
	40,
	41,
	0,
	41,
	40,
	1,
	91,
	93,
	0,
	93,
	91,
	1,
	123,
	125,
	0,
	125,
	123,
	1,
	3898,
	3899,
	0,
	3899,
	3898,
	1,
	3900,
	3901,
	0,
	3901,
	3900,
	1,
	5787,
	5788,
	0,
	5788,
	5787,
	1,
	8261,
	8262,
	0,
	8262,
	8261,
	1,
	8317,
	8318,
	0,
	8318,
	8317,
	1,
	8333,
	8334,
	0,
	8334,
	8333,
	1,
	8968,
	8969,
	0,
	8969,
	8968,
	1,
	8970,
	8971,
	0,
	8971,
	8970,
	1,
	9001,
	9002,
	0,
	9002,
	9001,
	1,
	10088,
	10089,
	0,
	10089,
	10088,
	1,
	10090,
	10091,
	0,
	10091,
	10090,
	1,
	10092,
	10093,
	0,
	10093,
	10092,
	1,
	10094,
	10095,
	0,
	10095,
	10094,
	1,
	10096,
	10097,
	0,
	10097,
	10096,
	1,
	10098,
	10099,
	0,
	10099,
	10098,
	1,
	10100,
	10101,
	0,
	10101,
	10100,
	1,
	10181,
	10182,
	0,
	10182,
	10181,
	1,
	10214,
	10215,
	0,
	10215,
	10214,
	1,
	10216,
	10217,
	0,
	10217,
	10216,
	1,
	10218,
	10219,
	0,
	10219,
	10218,
	1,
	10220,
	10221,
	0,
	10221,
	10220,
	1,
	10222,
	10223,
	0,
	10223,
	10222,
	1,
	10627,
	10628,
	0,
	10628,
	10627,
	1,
	10629,
	10630,
	0,
	10630,
	10629,
	1,
	10631,
	10632,
	0,
	10632,
	10631,
	1,
	10633,
	10634,
	0,
	10634,
	10633,
	1,
	10635,
	10636,
	0,
	10636,
	10635,
	1,
	10637,
	10640,
	0,
	10638,
	10639,
	1,
	10639,
	10638,
	0,
	10640,
	10637,
	1,
	10641,
	10642,
	0,
	10642,
	10641,
	1,
	10643,
	10644,
	0,
	10644,
	10643,
	1,
	10645,
	10646,
	0,
	10646,
	10645,
	1,
	10647,
	10648,
	0,
	10648,
	10647,
	1,
	10712,
	10713,
	0,
	10713,
	10712,
	1,
	10714,
	10715,
	0,
	10715,
	10714,
	1,
	10748,
	10749,
	0,
	10749,
	10748,
	1,
	11810,
	11811,
	0,
	11811,
	11810,
	1,
	11812,
	11813,
	0,
	11813,
	11812,
	1,
	11814,
	11815,
	0,
	11815,
	11814,
	1,
	11816,
	11817,
	0,
	11817,
	11816,
	1,
	11861,
	11862,
	0,
	11862,
	11861,
	1,
	11863,
	11864,
	0,
	11864,
	11863,
	1,
	11865,
	11866,
	0,
	11866,
	11865,
	1,
	11867,
	11868,
	0,
	11868,
	11867,
	1,
	12296,
	12297,
	0,
	12297,
	12296,
	1,
	12298,
	12299,
	0,
	12299,
	12298,
	1,
	12300,
	12301,
	0,
	12301,
	12300,
	1,
	12302,
	12303,
	0,
	12303,
	12302,
	1,
	12304,
	12305,
	0,
	12305,
	12304,
	1,
	12308,
	12309,
	0,
	12309,
	12308,
	1,
	12310,
	12311,
	0,
	12311,
	12310,
	1,
	12312,
	12313,
	0,
	12313,
	12312,
	1,
	12314,
	12315,
	0,
	12315,
	12314,
	1,
	65113,
	65114,
	0,
	65114,
	65113,
	1,
	65115,
	65116,
	0,
	65116,
	65115,
	1,
	65117,
	65118,
	0,
	65118,
	65117,
	1,
	65288,
	65289,
	0,
	65289,
	65288,
	1,
	65339,
	65341,
	0,
	65341,
	65339,
	1,
	65371,
	65373,
	0,
	65373,
	65371,
	1,
	65375,
	65376,
	0,
	65376,
	65375,
	1,
	65378,
	65379,
	0,
	65379,
	65378,
	1
];
//#endregion
//#region packages/core/src/text/bidi/char-data.ts
function Fc(e) {
	let t = 0, n = jc.length - 1;
	for (; t < n;) {
		let r = t + n + 1 >> 1;
		jc[r] <= e ? t = r : n = r - 1;
	}
	return Mc[t];
}
function Ic(e) {
	return Ac[Fc(e)];
}
var Lc = (() => {
	let e = /* @__PURE__ */ new Map();
	for (let t = 0; t < Nc.length; t += 2) e.set(Nc[t], Nc[t + 1]);
	return e;
})();
function Rc(e) {
	return Lc.get(e) ?? null;
}
var zc = (() => {
	let e = /* @__PURE__ */ new Map();
	for (let t = 0; t < Pc.length; t += 3) e.set(Pc[t], {
		pair: Pc[t + 1],
		type: Pc[t + 2] === 0 ? "o" : "c"
	});
	return e;
})();
function Bc(e) {
	return zc.get(e) ?? null;
}
var Vc = (e) => e === "RLE" || e === "LRE" || e === "RLO" || e === "LRO" || e === "PDF" || e === "BN", Hc = (e) => e === "LRI" || e === "RLI" || e === "FSI", Uc = (e) => e === "B" || e === "S" || e === "WS" || e === "ON" || e === "FSI" || e === "LRI" || e === "RLI" || e === "PDI", Wc = (e) => e & 1 ? e + 2 : e + 1, Gc = (e) => e & 1 ? e + 1 : e + 2;
function Kc(e, t, n) {
	let r = 0;
	for (let i = t; i < n; i++) {
		let t = e[i];
		if (Hc(t)) r++;
		else if (t === "PDI") r > 0 && r--;
		else if (r === 0) {
			if (t === "L") return 0;
			if (t === "R" || t === "AL") return 1;
		}
	}
	return 0;
}
function qc(e) {
	let t = e.length, n = new Int32Array(t).fill(t), r = new Int32Array(t).fill(-1), i = [];
	for (let a = 0; a < t; a++) {
		let t = e[a];
		if (Hc(t)) i.push(a);
		else if (t === "PDI" && i.length) {
			let e = i.pop();
			n[e] = a, r[a] = e;
		}
	}
	return {
		pdiOf: n,
		initOf: r
	};
}
function Jc(e, t, n) {
	let r = e.length, i = Array(r).fill(t), a = e.slice(), o = [{
		level: t,
		override: "neutral",
		isolate: !1
	}], s = 0, c = 0, l = 0, u = () => o[o.length - 1];
	for (let d = 0; d < r; d++) {
		let r = e[d];
		switch (r) {
			case "RLE":
			case "LRE":
			case "RLO":
			case "LRO": {
				i[d] = u().level;
				let e = r === "RLE" || r === "RLO" ? Wc(u().level) : Gc(u().level);
				e <= 125 && s === 0 && c === 0 ? o.push({
					level: e,
					override: r === "RLO" ? "R" : r === "LRO" ? "L" : "neutral",
					isolate: !1
				}) : s === 0 && c++;
				break;
			}
			case "RLI":
			case "LRI":
			case "FSI": {
				i[d] = u().level;
				let t = u().override;
				t !== "neutral" && (a[d] = t);
				let f;
				f = r === "RLI" ? "R" : r === "LRI" ? "L" : Kc(e, d + 1, n[d]) === 1 ? "R" : "L";
				let p = f === "R" ? Wc(u().level) : Gc(u().level);
				p <= 125 && s === 0 && c === 0 ? (l++, o.push({
					level: p,
					override: "neutral",
					isolate: !0
				})) : s++;
				break;
			}
			case "PDI":
				if (s > 0) s--;
				else if (l > 0) {
					for (c = 0; !u().isolate;) o.pop();
					o.pop(), l--;
				}
				{
					i[d] = u().level;
					let e = u().override;
					e !== "neutral" && (a[d] = e);
				}
				break;
			case "PDF":
				i[d] = u().level, s > 0 || (c > 0 ? c-- : !u().isolate && o.length >= 2 && o.pop());
				break;
			case "B":
				o.length = 1, s = 0, c = 0, l = 0, i[d] = t;
				break;
			case "BN":
				i[d] = u().level;
				break;
			default: {
				i[d] = u().level;
				let e = u().override;
				e !== "neutral" && (a[d] = e);
				break;
			}
		}
	}
	return {
		levels: i,
		types: a
	};
}
function Yc(e) {
	return e === 9001 ? 12296 : e === 9002 ? 12297 : e;
}
function Xc(e, t, n, r, i, a) {
	let o = e.length, s = [];
	for (let e = 0; e < o; e++) n[e] || s.push(e);
	let c = [];
	for (let e = 0; e < s.length; e++) {
		let n = s[e];
		e === 0 || t[n] !== t[s[e - 1]] ? c.push([n]) : c[c.length - 1].push(n);
	}
	let l = /* @__PURE__ */ new Map();
	for (let e of c) l.set(e[0], e);
	let u = (e) => e & 1 ? "R" : "L", d = [];
	for (let s of c) {
		let c = s[0];
		if (e[c] === "PDI" && a[c] !== -1) continue;
		let f = [], p = s;
		for (;;) {
			for (let e of p) f.push(e);
			let t = p[p.length - 1];
			if (Hc(e[t]) && i[t] !== o) {
				let e = l.get(i[t]);
				if (e) {
					p = e;
					continue;
				}
			}
			break;
		}
		let m = t[f[0]], h = r;
		for (let e = f[0] - 1; e >= 0; e--) if (!n[e]) {
			h = t[e];
			break;
		}
		let g = u(Math.max(m, h)), _ = f[f.length - 1], v = r;
		if (!(Hc(e[_]) && i[_] === o)) {
			for (let e = _ + 1; e < o; e++) if (!n[e]) {
				v = t[e];
				break;
			}
		}
		let y = u(Math.max(m, v));
		d.push({
			indices: f,
			level: m,
			sos: g,
			eos: y
		});
	}
	return d;
}
var Zc = (e) => e === "L" ? "L" : e === "R" || e === "EN" || e === "AN" ? "R" : null;
function Qc(e, t, n, r, i) {
	let a = e.indices, o = a.length, { sos: s, eos: c, level: l } = e;
	for (let e = 0; e < o; e++) {
		let t = a[e];
		if (r[t] === "NSM") if (e === 0) r[t] = s;
		else {
			let n = r[a[e - 1]];
			r[t] = n === "LRI" || n === "RLI" || n === "FSI" || n === "PDI" ? "ON" : n;
		}
	}
	{
		let e = s;
		for (let t = 0; t < o; t++) {
			let n = r[a[t]];
			n === "R" || n === "L" || n === "AL" ? e = n : n === "EN" && e === "AL" && (r[a[t]] = "AN");
		}
	}
	for (let e = 0; e < o; e++) r[a[e]] === "AL" && (r[a[e]] = "R");
	for (let e = 1; e < o - 1; e++) {
		let t = r[a[e]], n = r[a[e - 1]], i = r[a[e + 1]];
		t === "ES" && n === "EN" && i === "EN" || t === "CS" && n === "EN" && i === "EN" ? r[a[e]] = "EN" : t === "CS" && n === "AN" && i === "AN" && (r[a[e]] = "AN");
	}
	for (let e = 0; e < o; e++) {
		if (r[a[e]] !== "ET") continue;
		let t = e;
		for (; t < o && r[a[t]] === "ET";) t++;
		let n = e > 0 ? r[a[e - 1]] : s, i = t < o ? r[a[t]] : c;
		if (n === "EN" || i === "EN") for (let n = e; n < t; n++) r[a[n]] = "EN";
		e = t - 1;
	}
	for (let e = 0; e < o; e++) {
		let t = r[a[e]];
		(t === "ES" || t === "ET" || t === "CS") && (r[a[e]] = "ON");
	}
	{
		let e = s;
		for (let t = 0; t < o; t++) {
			let n = r[a[t]];
			n === "R" || n === "L" ? e = n : n === "EN" && e === "L" && (r[a[t]] = "L");
		}
	}
	let u = l & 1 ? "R" : "L", d = u === "R" ? "L" : "R", f = [];
	{
		let e = [];
		outer: for (let n = 0; n < o; n++) {
			let i = a[n];
			if (r[i] !== "ON") continue;
			let o = Bc(t[i]);
			if (o) if (o.type === "o") {
				if (e.length === 63) break outer;
				e.push({
					expect: Yc(o.pair),
					pos: n
				});
			} else {
				let r = Yc(t[i]);
				for (let t = e.length - 1; t >= 0; t--) if (e[t].expect === r) {
					f.push({
						open: e[t].pos,
						close: n
					}), e.length = t;
					break;
				}
			}
		}
		f.sort((e, t) => e.open - t.open);
	}
	let p = (e, t) => {
		for (let i = e + 1; i < o && n[a[i]] === "NSM"; i++) r[a[i]] = t;
	};
	for (let { open: e, close: t } of f) {
		let n = !1, i = !1;
		for (let o = e + 1; o < t; o++) {
			let e = Zc(r[a[o]]);
			e === u ? n = !0 : e === d && (i = !0);
		}
		let o = null;
		if (n) o = u;
		else if (i) {
			let t = s;
			for (let n = e - 1; n >= 0; n--) {
				let e = Zc(r[a[n]]);
				if (e) {
					t = e;
					break;
				}
			}
			o = t === d ? d : u;
		}
		o && (r[a[e]] = o, r[a[t]] = o, p(e, o), p(t, o));
	}
	for (let e = 0; e < o; e++) {
		if (!Uc(r[a[e]])) continue;
		let t = e;
		for (; t < o && Uc(r[a[t]]);) t++;
		let n = e > 0 ? Zc(r[a[e - 1]]) : s, i = t < o ? Zc(r[a[t]]) : c;
		if (n && i && n === i) for (let i = e; i < t; i++) r[a[i]] = n;
		e = t - 1;
	}
	for (let e = 0; e < o; e++) Uc(r[a[e]]) && (r[a[e]] = u);
	for (let e = 0; e < o; e++) {
		let t = a[e], n = r[t];
		l & 1 ? (n === "L" || n === "EN" || n === "AN") && (i[t] += 1) : n === "R" ? i[t] += 1 : (n === "AN" || n === "EN") && (i[t] += 2);
	}
}
function $c(e, t, n) {
	let r = e.length, i = Array(r);
	for (let t = 0; t < r; t++) i[t] = n?.[t] ?? Ic(e[t]);
	let a = t === "rtl" ? 1 : t === "ltr" ? 0 : Kc(i, 0, r), { pdiOf: o, initOf: s } = qc(i), { levels: c, types: l } = Jc(i, a, o), u = Array(r);
	for (let e = 0; e < r; e++) u[e] = Vc(i[e]);
	let d = Xc(i, c, u, a, o, s), f = l.slice();
	for (let t of d) Qc(t, e, i, f, c);
	let p = (e) => {
		let t = i[e];
		return t === "WS" || Hc(t) || t === "PDI" || u[e];
	};
	for (let e = 0; e < r; e++) {
		let t = i[e];
		if (t === "B" || t === "S") {
			c[e] = a;
			for (let t = e - 1; t >= 0 && p(t); t--) u[t] || (c[t] = a);
		}
	}
	for (let e = r - 1; e >= 0 && p(e); e--) u[e] || (c[e] = a);
	for (let e = 0; e < r; e++) u[e] && (c[e] = -1);
	return {
		levels: c,
		paragraphLevel: a
	};
}
function el(e, t, n) {
	let r = [];
	for (let i = t; i < n; i++) {
		let t = e[i];
		t >= 0 && t <= 126 && r.push(i);
	}
	if (r.length === 0) return r;
	let i = 0, a = 127;
	for (let t of r) {
		let n = e[t];
		n > i && (i = n), n & 1 && n < a && (a = n);
	}
	for (let t = i; t >= a; t--) {
		let n = 0;
		for (; n < r.length;) if (e[r[n]] >= t) {
			let i = n + 1;
			for (; i < r.length && e[r[i]] >= t;) i++;
			for (let e = n, t = i - 1; e < t; e++, t--) {
				let n = r[e];
				r[e] = r[t], r[t] = n;
			}
			n = i;
		} else n++;
	}
	return r;
}
//#endregion
//#region packages/core/src/text/bidi/uax9/index.ts
function tl(e) {
	let t = [], n = [], r = [];
	for (let i = 0; i < e.length;) {
		let a = e.codePointAt(i), o = a > 65535 ? 2 : 1;
		t.push(a), n.push(o), r.push(i), i += o;
	}
	return {
		cps: t,
		units: n,
		starts: r
	};
}
var nl = class {
	computeLevels(e, t, n) {
		let { cps: r, units: i, starts: a } = tl(e), { levels: o, paragraphLevel: s } = $c(r, t, n ? r.map((e, t) => n[a[t]] ?? null) : void 0), c = new Uint8Array(e.length), l = 0;
		for (let e = 0; e < o.length; e++) {
			let t = o[e] === -1 ? 255 : o[e];
			for (let n = 0; n < i[e]; n++) c[l++] = t;
		}
		return {
			levels: c,
			paragraphLevel: s
		};
	}
	reorderVisual(e, t, n) {
		return el(e, t, n);
	}
	getMirror(e) {
		return Rc(e);
	}
};
function rl() {
	return new nl();
}
//#endregion
//#region packages/core/src/text/bidi/engine.ts
var il = null;
function al() {
	return il === null && (il = rl()), il;
}
//#endregion
//#region packages/core/src/text/bidi/line-order.ts
var ol = /[\u0590-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFF\u200F\u202B\u202E\u2067]|[\u{10800}-\u{10FFF}\u{1E800}-\u{1EFFF}]/u;
function sl(e) {
	return ol.test(e);
}
function cl(e, t, n) {
	let r = n.length, i = new Uint8Array(r);
	for (let a = 0; a < r; a++) {
		let r = e[n[a]];
		i[a] = r === 255 ? t : r;
	}
	return {
		order: al().reorderVisual(i, 0, r),
		segLevels: i
	};
}
//#endregion
//#region packages/core/src/text/kinsoku/rules.ts
var ll = "”’）〕］｝〉》」』】〙〗〟｠»、。，．・：；／？！‐ー゠–〜～ぁぃぅぇぉっゃゅょゎゕゖァィゥェォッャュョヮヵヶㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ々〻ゝゞヽヾ゛゜％‰℃°′″｡｣､･ｰﾞﾟ!),.:;?]}｠", ul = "“‘（〔［｛〈《「『【〘〖〝｟«＄￥＃￡￠([{｟";
function dl(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) t.add(n.codePointAt(0));
	return t;
}
function fl(e) {
	return {
		enabled: e?.kinsoku !== !1,
		lineStartForbidden: dl(e?.noLineBreaksBefore ?? ll),
		lineEndForbidden: dl(e?.noLineBreaksAfter ?? ul)
	};
}
var pl = fl();
//#endregion
//#region packages/core/src/text/kinsoku/split.ts
function ml(e, t, n, r = 1) {
	if (!n.enabled || t <= 0 || t >= e.length) return t;
	let i = (t) => t < e.length && n.lineStartForbidden.has(e[t].codePointAt(0)), a = (t) => t >= 0 && n.lineEndForbidden.has(e[t].codePointAt(0)), o = t;
	for (; o > r && (i(o) || a(o - 1));) o--;
	return o <= r && (i(o) || a(o - 1)) ? t : o;
}
function hl(e, t, n) {
	if (!t.enabled) return 0;
	let r = e.length - n;
	for (let n = 1; n <= r; n++) {
		let r = e[e.length - n];
		if (/\s/.test(r) || t.lineStartForbidden.has(r.codePointAt(0))) continue;
		let i = e[e.length - n - 1];
		if (!(i && t.lineEndForbidden.has(i.codePointAt(0)))) return n;
	}
	return 0;
}
//#endregion
//#region packages/core/src/text/cjk-ranges.ts
function gl(e) {
	return e >= 12288 && e <= 40959 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65280 && e <= 65519;
}
function _l(e) {
	return e === 32 || e === 9 || e === 10 || e === 13 ? !1 : !gl(e);
}
//#endregion
//#region packages/core/src/text/line-break-class.generated.ts
var vl = /* @__PURE__ */ "BK.CM.CR.GL.LF.NL.SP.WJ.ZW.ZWJ.AK.AL.AP.AS.B2.BA.BB.CB.CL.CP.EB.EM.EX.H2.H3.HL.HH.HY.ID.IN.IS.JL.JT.JV.NS.NU.OP.PO.PR.QU.RI.SY.VF.VI".split("."), yl = [
	0,
	9,
	10,
	11,
	13,
	14,
	32,
	33,
	34,
	35,
	36,
	37,
	38,
	39,
	40,
	41,
	42,
	43,
	44,
	45,
	46,
	47,
	48,
	58,
	60,
	63,
	64,
	91,
	92,
	93,
	94,
	123,
	124,
	125,
	126,
	127,
	133,
	134,
	160,
	161,
	162,
	163,
	166,
	171,
	172,
	173,
	174,
	176,
	177,
	178,
	180,
	181,
	187,
	188,
	191,
	192,
	712,
	713,
	716,
	717,
	735,
	736,
	768,
	860,
	867,
	880,
	894,
	895,
	1155,
	1162,
	1417,
	1418,
	1419,
	1423,
	1424,
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
	1488,
	1515,
	1519,
	1523,
	1536,
	1542,
	1545,
	1548,
	1550,
	1552,
	1563,
	1564,
	1565,
	1568,
	1611,
	1632,
	1642,
	1643,
	1645,
	1648,
	1649,
	1748,
	1749,
	1750,
	1757,
	1758,
	1759,
	1765,
	1767,
	1769,
	1770,
	1774,
	1776,
	1786,
	1809,
	1810,
	1840,
	1867,
	1958,
	1969,
	1984,
	1994,
	2027,
	2036,
	2040,
	2041,
	2042,
	2045,
	2046,
	2048,
	2070,
	2074,
	2075,
	2084,
	2085,
	2088,
	2089,
	2094,
	2137,
	2140,
	2192,
	2194,
	2199,
	2208,
	2250,
	2274,
	2275,
	2308,
	2362,
	2365,
	2366,
	2384,
	2385,
	2392,
	2402,
	2404,
	2406,
	2416,
	2433,
	2436,
	2492,
	2493,
	2494,
	2501,
	2503,
	2505,
	2507,
	2510,
	2519,
	2520,
	2530,
	2532,
	2534,
	2544,
	2546,
	2548,
	2553,
	2554,
	2555,
	2556,
	2558,
	2559,
	2561,
	2564,
	2620,
	2621,
	2622,
	2627,
	2631,
	2633,
	2635,
	2638,
	2641,
	2642,
	2662,
	2672,
	2674,
	2677,
	2678,
	2689,
	2692,
	2748,
	2749,
	2750,
	2758,
	2759,
	2762,
	2763,
	2766,
	2786,
	2788,
	2790,
	2800,
	2801,
	2802,
	2810,
	2816,
	2817,
	2820,
	2876,
	2877,
	2878,
	2885,
	2887,
	2889,
	2891,
	2894,
	2901,
	2904,
	2914,
	2916,
	2918,
	2928,
	2946,
	2947,
	3006,
	3011,
	3014,
	3017,
	3018,
	3022,
	3031,
	3032,
	3046,
	3056,
	3065,
	3066,
	3072,
	3077,
	3132,
	3133,
	3134,
	3141,
	3142,
	3145,
	3146,
	3150,
	3157,
	3159,
	3170,
	3172,
	3174,
	3184,
	3191,
	3192,
	3201,
	3204,
	3205,
	3260,
	3261,
	3262,
	3269,
	3270,
	3273,
	3274,
	3278,
	3285,
	3287,
	3298,
	3300,
	3302,
	3312,
	3315,
	3316,
	3328,
	3332,
	3387,
	3389,
	3390,
	3397,
	3398,
	3401,
	3402,
	3406,
	3415,
	3416,
	3426,
	3428,
	3430,
	3440,
	3449,
	3450,
	3457,
	3460,
	3530,
	3531,
	3535,
	3541,
	3542,
	3543,
	3544,
	3552,
	3558,
	3568,
	3570,
	3572,
	3633,
	3634,
	3636,
	3643,
	3647,
	3648,
	3655,
	3663,
	3664,
	3674,
	3676,
	3761,
	3762,
	3764,
	3773,
	3784,
	3791,
	3792,
	3802,
	3841,
	3845,
	3846,
	3848,
	3849,
	3851,
	3852,
	3853,
	3858,
	3859,
	3860,
	3861,
	3864,
	3866,
	3872,
	3882,
	3892,
	3893,
	3894,
	3895,
	3896,
	3897,
	3898,
	3899,
	3900,
	3901,
	3902,
	3904,
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
	4030,
	4032,
	4038,
	4039,
	4048,
	4050,
	4051,
	4052,
	4057,
	4059,
	4139,
	4159,
	4160,
	4170,
	4172,
	4182,
	4186,
	4190,
	4193,
	4194,
	4197,
	4199,
	4206,
	4209,
	4213,
	4226,
	4238,
	4239,
	4240,
	4250,
	4254,
	4352,
	4448,
	4520,
	4608,
	4957,
	4960,
	4961,
	4962,
	5120,
	5121,
	5760,
	5761,
	5787,
	5788,
	5789,
	5867,
	5870,
	5906,
	5910,
	5938,
	5941,
	5943,
	5970,
	5972,
	6002,
	6004,
	6068,
	6100,
	6102,
	6103,
	6104,
	6105,
	6106,
	6107,
	6108,
	6109,
	6110,
	6112,
	6122,
	6146,
	6148,
	6150,
	6151,
	6152,
	6154,
	6155,
	6158,
	6159,
	6160,
	6170,
	6277,
	6279,
	6313,
	6314,
	6432,
	6444,
	6448,
	6460,
	6468,
	6470,
	6480,
	6608,
	6619,
	6679,
	6684,
	6741,
	6751,
	6752,
	6781,
	6783,
	6784,
	6794,
	6800,
	6810,
	6832,
	6878,
	6880,
	6891,
	6892,
	6912,
	6917,
	6964,
	6980,
	6981,
	6989,
	6990,
	6992,
	7002,
	7004,
	7005,
	7009,
	7019,
	7028,
	7037,
	7040,
	7043,
	7073,
	7086,
	7088,
	7098,
	7104,
	7142,
	7154,
	7156,
	7204,
	7224,
	7227,
	7232,
	7242,
	7248,
	7258,
	7294,
	7296,
	7376,
	7379,
	7380,
	7401,
	7405,
	7406,
	7412,
	7413,
	7415,
	7418,
	7616,
	7629,
	7630,
	7676,
	7677,
	7680,
	8189,
	8190,
	8192,
	8199,
	8200,
	8203,
	8204,
	8205,
	8206,
	8208,
	8209,
	8210,
	8212,
	8213,
	8216,
	8218,
	8219,
	8222,
	8223,
	8224,
	8228,
	8231,
	8232,
	8234,
	8239,
	8240,
	8248,
	8249,
	8251,
	8252,
	8254,
	8260,
	8261,
	8262,
	8263,
	8266,
	8278,
	8279,
	8280,
	8284,
	8285,
	8288,
	8289,
	8294,
	8304,
	8317,
	8318,
	8319,
	8333,
	8334,
	8335,
	8352,
	8359,
	8360,
	8374,
	8375,
	8379,
	8380,
	8382,
	8383,
	8384,
	8385,
	8400,
	8433,
	8451,
	8452,
	8457,
	8458,
	8470,
	8471,
	8722,
	8724,
	8943,
	8944,
	8968,
	8969,
	8970,
	8971,
	8972,
	8986,
	8988,
	9001,
	9002,
	9003,
	9200,
	9204,
	9728,
	9732,
	9748,
	9750,
	9752,
	9753,
	9754,
	9757,
	9758,
	9760,
	9785,
	9788,
	9832,
	9833,
	9855,
	9856,
	9917,
	9929,
	9933,
	9934,
	9935,
	9938,
	9939,
	9941,
	9944,
	9946,
	9948,
	9949,
	9951,
	9954,
	9962,
	9963,
	9969,
	9974,
	9975,
	9977,
	9978,
	9979,
	9981,
	9989,
	9992,
	9994,
	9998,
	10075,
	10081,
	10082,
	10084,
	10085,
	10088,
	10089,
	10090,
	10091,
	10092,
	10093,
	10094,
	10095,
	10096,
	10097,
	10098,
	10099,
	10100,
	10101,
	10102,
	10181,
	10182,
	10183,
	10214,
	10215,
	10216,
	10217,
	10218,
	10219,
	10220,
	10221,
	10222,
	10223,
	10224,
	10240,
	10241,
	10627,
	10628,
	10629,
	10630,
	10631,
	10632,
	10633,
	10634,
	10635,
	10636,
	10637,
	10638,
	10639,
	10640,
	10641,
	10642,
	10643,
	10644,
	10645,
	10646,
	10647,
	10648,
	10649,
	10712,
	10713,
	10714,
	10715,
	10716,
	10748,
	10749,
	10750,
	11503,
	11506,
	11513,
	11514,
	11517,
	11518,
	11519,
	11520,
	11632,
	11633,
	11647,
	11648,
	11744,
	11776,
	11790,
	11798,
	11799,
	11800,
	11801,
	11802,
	11804,
	11806,
	11808,
	11810,
	11811,
	11812,
	11813,
	11814,
	11815,
	11816,
	11817,
	11818,
	11822,
	11823,
	11824,
	11826,
	11827,
	11829,
	11834,
	11836,
	11839,
	11840,
	11841,
	11842,
	11843,
	11851,
	11852,
	11853,
	11854,
	11856,
	11859,
	11861,
	11862,
	11863,
	11864,
	11865,
	11866,
	11867,
	11868,
	11869,
	11870,
	11904,
	11930,
	11931,
	12020,
	12032,
	12246,
	12272,
	12288,
	12289,
	12291,
	12293,
	12294,
	12296,
	12297,
	12298,
	12299,
	12300,
	12301,
	12302,
	12303,
	12304,
	12305,
	12306,
	12308,
	12309,
	12310,
	12311,
	12312,
	12313,
	12314,
	12315,
	12316,
	12317,
	12318,
	12320,
	12330,
	12336,
	12341,
	12342,
	12347,
	12349,
	12352,
	12353,
	12354,
	12355,
	12356,
	12357,
	12358,
	12359,
	12360,
	12361,
	12362,
	12387,
	12388,
	12419,
	12420,
	12421,
	12422,
	12423,
	12424,
	12430,
	12431,
	12437,
	12439,
	12441,
	12443,
	12447,
	12448,
	12450,
	12451,
	12452,
	12453,
	12454,
	12455,
	12456,
	12457,
	12458,
	12483,
	12484,
	12515,
	12516,
	12517,
	12518,
	12519,
	12520,
	12526,
	12527,
	12533,
	12535,
	12539,
	12543,
	12544,
	12549,
	12592,
	12593,
	12687,
	12688,
	12774,
	12783,
	12784,
	12800,
	12831,
	12832,
	12872,
	12880,
	19904,
	19968,
	40981,
	40982,
	42125,
	42128,
	42183,
	42238,
	42240,
	42509,
	42510,
	42511,
	42512,
	42528,
	42538,
	42607,
	42611,
	42612,
	42622,
	42654,
	42656,
	42736,
	42738,
	42739,
	42744,
	43010,
	43011,
	43014,
	43015,
	43019,
	43020,
	43043,
	43048,
	43052,
	43053,
	43064,
	43065,
	43124,
	43126,
	43128,
	43136,
	43138,
	43188,
	43206,
	43214,
	43216,
	43226,
	43232,
	43250,
	43260,
	43261,
	43263,
	43264,
	43274,
	43302,
	43310,
	43312,
	43335,
	43348,
	43360,
	43389,
	43392,
	43396,
	43443,
	43456,
	43457,
	43463,
	43466,
	43470,
	43471,
	43472,
	43482,
	43486,
	43488,
	43493,
	43494,
	43504,
	43514,
	43520,
	43561,
	43575,
	43584,
	43587,
	43588,
	43596,
	43598,
	43600,
	43610,
	43612,
	43613,
	43616,
	43643,
	43646,
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
	43755,
	43760,
	43762,
	43765,
	43767,
	44003,
	44011,
	44012,
	44014,
	44016,
	44026,
	44032,
	44033,
	44060,
	44061,
	44088,
	44089,
	44116,
	44117,
	44144,
	44145,
	44172,
	44173,
	44200,
	44201,
	44228,
	44229,
	44256,
	44257,
	44284,
	44285,
	44312,
	44313,
	44340,
	44341,
	44368,
	44369,
	44396,
	44397,
	44424,
	44425,
	44452,
	44453,
	44480,
	44481,
	44508,
	44509,
	44536,
	44537,
	44564,
	44565,
	44592,
	44593,
	44620,
	44621,
	44648,
	44649,
	44676,
	44677,
	44704,
	44705,
	44732,
	44733,
	44760,
	44761,
	44788,
	44789,
	44816,
	44817,
	44844,
	44845,
	44872,
	44873,
	44900,
	44901,
	44928,
	44929,
	44956,
	44957,
	44984,
	44985,
	45012,
	45013,
	45040,
	45041,
	45068,
	45069,
	45096,
	45097,
	45124,
	45125,
	45152,
	45153,
	45180,
	45181,
	45208,
	45209,
	45236,
	45237,
	45264,
	45265,
	45292,
	45293,
	45320,
	45321,
	45348,
	45349,
	45376,
	45377,
	45404,
	45405,
	45432,
	45433,
	45460,
	45461,
	45488,
	45489,
	45516,
	45517,
	45544,
	45545,
	45572,
	45573,
	45600,
	45601,
	45628,
	45629,
	45656,
	45657,
	45684,
	45685,
	45712,
	45713,
	45740,
	45741,
	45768,
	45769,
	45796,
	45797,
	45824,
	45825,
	45852,
	45853,
	45880,
	45881,
	45908,
	45909,
	45936,
	45937,
	45964,
	45965,
	45992,
	45993,
	46020,
	46021,
	46048,
	46049,
	46076,
	46077,
	46104,
	46105,
	46132,
	46133,
	46160,
	46161,
	46188,
	46189,
	46216,
	46217,
	46244,
	46245,
	46272,
	46273,
	46300,
	46301,
	46328,
	46329,
	46356,
	46357,
	46384,
	46385,
	46412,
	46413,
	46440,
	46441,
	46468,
	46469,
	46496,
	46497,
	46524,
	46525,
	46552,
	46553,
	46580,
	46581,
	46608,
	46609,
	46636,
	46637,
	46664,
	46665,
	46692,
	46693,
	46720,
	46721,
	46748,
	46749,
	46776,
	46777,
	46804,
	46805,
	46832,
	46833,
	46860,
	46861,
	46888,
	46889,
	46916,
	46917,
	46944,
	46945,
	46972,
	46973,
	47e3,
	47001,
	47028,
	47029,
	47056,
	47057,
	47084,
	47085,
	47112,
	47113,
	47140,
	47141,
	47168,
	47169,
	47196,
	47197,
	47224,
	47225,
	47252,
	47253,
	47280,
	47281,
	47308,
	47309,
	47336,
	47337,
	47364,
	47365,
	47392,
	47393,
	47420,
	47421,
	47448,
	47449,
	47476,
	47477,
	47504,
	47505,
	47532,
	47533,
	47560,
	47561,
	47588,
	47589,
	47616,
	47617,
	47644,
	47645,
	47672,
	47673,
	47700,
	47701,
	47728,
	47729,
	47756,
	47757,
	47784,
	47785,
	47812,
	47813,
	47840,
	47841,
	47868,
	47869,
	47896,
	47897,
	47924,
	47925,
	47952,
	47953,
	47980,
	47981,
	48008,
	48009,
	48036,
	48037,
	48064,
	48065,
	48092,
	48093,
	48120,
	48121,
	48148,
	48149,
	48176,
	48177,
	48204,
	48205,
	48232,
	48233,
	48260,
	48261,
	48288,
	48289,
	48316,
	48317,
	48344,
	48345,
	48372,
	48373,
	48400,
	48401,
	48428,
	48429,
	48456,
	48457,
	48484,
	48485,
	48512,
	48513,
	48540,
	48541,
	48568,
	48569,
	48596,
	48597,
	48624,
	48625,
	48652,
	48653,
	48680,
	48681,
	48708,
	48709,
	48736,
	48737,
	48764,
	48765,
	48792,
	48793,
	48820,
	48821,
	48848,
	48849,
	48876,
	48877,
	48904,
	48905,
	48932,
	48933,
	48960,
	48961,
	48988,
	48989,
	49016,
	49017,
	49044,
	49045,
	49072,
	49073,
	49100,
	49101,
	49128,
	49129,
	49156,
	49157,
	49184,
	49185,
	49212,
	49213,
	49240,
	49241,
	49268,
	49269,
	49296,
	49297,
	49324,
	49325,
	49352,
	49353,
	49380,
	49381,
	49408,
	49409,
	49436,
	49437,
	49464,
	49465,
	49492,
	49493,
	49520,
	49521,
	49548,
	49549,
	49576,
	49577,
	49604,
	49605,
	49632,
	49633,
	49660,
	49661,
	49688,
	49689,
	49716,
	49717,
	49744,
	49745,
	49772,
	49773,
	49800,
	49801,
	49828,
	49829,
	49856,
	49857,
	49884,
	49885,
	49912,
	49913,
	49940,
	49941,
	49968,
	49969,
	49996,
	49997,
	50024,
	50025,
	50052,
	50053,
	50080,
	50081,
	50108,
	50109,
	50136,
	50137,
	50164,
	50165,
	50192,
	50193,
	50220,
	50221,
	50248,
	50249,
	50276,
	50277,
	50304,
	50305,
	50332,
	50333,
	50360,
	50361,
	50388,
	50389,
	50416,
	50417,
	50444,
	50445,
	50472,
	50473,
	50500,
	50501,
	50528,
	50529,
	50556,
	50557,
	50584,
	50585,
	50612,
	50613,
	50640,
	50641,
	50668,
	50669,
	50696,
	50697,
	50724,
	50725,
	50752,
	50753,
	50780,
	50781,
	50808,
	50809,
	50836,
	50837,
	50864,
	50865,
	50892,
	50893,
	50920,
	50921,
	50948,
	50949,
	50976,
	50977,
	51004,
	51005,
	51032,
	51033,
	51060,
	51061,
	51088,
	51089,
	51116,
	51117,
	51144,
	51145,
	51172,
	51173,
	51200,
	51201,
	51228,
	51229,
	51256,
	51257,
	51284,
	51285,
	51312,
	51313,
	51340,
	51341,
	51368,
	51369,
	51396,
	51397,
	51424,
	51425,
	51452,
	51453,
	51480,
	51481,
	51508,
	51509,
	51536,
	51537,
	51564,
	51565,
	51592,
	51593,
	51620,
	51621,
	51648,
	51649,
	51676,
	51677,
	51704,
	51705,
	51732,
	51733,
	51760,
	51761,
	51788,
	51789,
	51816,
	51817,
	51844,
	51845,
	51872,
	51873,
	51900,
	51901,
	51928,
	51929,
	51956,
	51957,
	51984,
	51985,
	52012,
	52013,
	52040,
	52041,
	52068,
	52069,
	52096,
	52097,
	52124,
	52125,
	52152,
	52153,
	52180,
	52181,
	52208,
	52209,
	52236,
	52237,
	52264,
	52265,
	52292,
	52293,
	52320,
	52321,
	52348,
	52349,
	52376,
	52377,
	52404,
	52405,
	52432,
	52433,
	52460,
	52461,
	52488,
	52489,
	52516,
	52517,
	52544,
	52545,
	52572,
	52573,
	52600,
	52601,
	52628,
	52629,
	52656,
	52657,
	52684,
	52685,
	52712,
	52713,
	52740,
	52741,
	52768,
	52769,
	52796,
	52797,
	52824,
	52825,
	52852,
	52853,
	52880,
	52881,
	52908,
	52909,
	52936,
	52937,
	52964,
	52965,
	52992,
	52993,
	53020,
	53021,
	53048,
	53049,
	53076,
	53077,
	53104,
	53105,
	53132,
	53133,
	53160,
	53161,
	53188,
	53189,
	53216,
	53217,
	53244,
	53245,
	53272,
	53273,
	53300,
	53301,
	53328,
	53329,
	53356,
	53357,
	53384,
	53385,
	53412,
	53413,
	53440,
	53441,
	53468,
	53469,
	53496,
	53497,
	53524,
	53525,
	53552,
	53553,
	53580,
	53581,
	53608,
	53609,
	53636,
	53637,
	53664,
	53665,
	53692,
	53693,
	53720,
	53721,
	53748,
	53749,
	53776,
	53777,
	53804,
	53805,
	53832,
	53833,
	53860,
	53861,
	53888,
	53889,
	53916,
	53917,
	53944,
	53945,
	53972,
	53973,
	54e3,
	54001,
	54028,
	54029,
	54056,
	54057,
	54084,
	54085,
	54112,
	54113,
	54140,
	54141,
	54168,
	54169,
	54196,
	54197,
	54224,
	54225,
	54252,
	54253,
	54280,
	54281,
	54308,
	54309,
	54336,
	54337,
	54364,
	54365,
	54392,
	54393,
	54420,
	54421,
	54448,
	54449,
	54476,
	54477,
	54504,
	54505,
	54532,
	54533,
	54560,
	54561,
	54588,
	54589,
	54616,
	54617,
	54644,
	54645,
	54672,
	54673,
	54700,
	54701,
	54728,
	54729,
	54756,
	54757,
	54784,
	54785,
	54812,
	54813,
	54840,
	54841,
	54868,
	54869,
	54896,
	54897,
	54924,
	54925,
	54952,
	54953,
	54980,
	54981,
	55008,
	55009,
	55036,
	55037,
	55064,
	55065,
	55092,
	55093,
	55120,
	55121,
	55148,
	55149,
	55176,
	55177,
	55204,
	55216,
	55239,
	55243,
	55292,
	63744,
	64256,
	64285,
	64286,
	64287,
	64297,
	64298,
	64311,
	64312,
	64317,
	64318,
	64319,
	64320,
	64322,
	64323,
	64325,
	64326,
	64336,
	64830,
	64831,
	64832,
	65020,
	65021,
	65024,
	65040,
	65043,
	65045,
	65047,
	65048,
	65049,
	65050,
	65056,
	65057,
	65058,
	65059,
	65060,
	65061,
	65062,
	65064,
	65065,
	65066,
	65067,
	65068,
	65069,
	65071,
	65072,
	65077,
	65078,
	65079,
	65080,
	65081,
	65082,
	65083,
	65084,
	65085,
	65086,
	65087,
	65088,
	65089,
	65090,
	65091,
	65092,
	65093,
	65095,
	65096,
	65097,
	65104,
	65105,
	65106,
	65107,
	65108,
	65110,
	65112,
	65113,
	65114,
	65115,
	65116,
	65117,
	65118,
	65119,
	65127,
	65128,
	65129,
	65130,
	65131,
	65132,
	65279,
	65280,
	65281,
	65282,
	65284,
	65285,
	65286,
	65288,
	65289,
	65290,
	65292,
	65293,
	65294,
	65295,
	65306,
	65308,
	65311,
	65312,
	65339,
	65340,
	65341,
	65342,
	65371,
	65372,
	65373,
	65374,
	65375,
	65376,
	65378,
	65379,
	65381,
	65382,
	65383,
	65393,
	65438,
	65440,
	65471,
	65474,
	65480,
	65482,
	65488,
	65490,
	65496,
	65498,
	65501,
	65504,
	65505,
	65506,
	65509,
	65511,
	65529,
	65532,
	65533,
	65792,
	65795,
	66045,
	66046,
	66272,
	66273,
	66422,
	66427,
	66463,
	66464,
	66512,
	66513,
	66720,
	66730,
	67671,
	67672,
	67871,
	67872,
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
	68176,
	68184,
	68325,
	68327,
	68336,
	68342,
	68343,
	68409,
	68416,
	68900,
	68904,
	68912,
	68922,
	68928,
	68938,
	68969,
	68974,
	68975,
	69291,
	69293,
	69294,
	69328,
	69329,
	69370,
	69376,
	69446,
	69457,
	69506,
	69510,
	69632,
	69635,
	69637,
	69688,
	69702,
	69703,
	69705,
	69710,
	69714,
	69734,
	69744,
	69745,
	69747,
	69749,
	69750,
	69759,
	69760,
	69763,
	69808,
	69819,
	69821,
	69822,
	69826,
	69827,
	69837,
	69838,
	69872,
	69882,
	69888,
	69891,
	69927,
	69941,
	69942,
	69952,
	69956,
	69957,
	69959,
	70003,
	70004,
	70005,
	70006,
	70016,
	70019,
	70067,
	70081,
	70085,
	70087,
	70088,
	70089,
	70093,
	70094,
	70096,
	70106,
	70107,
	70108,
	70109,
	70112,
	70188,
	70200,
	70202,
	70203,
	70205,
	70206,
	70207,
	70209,
	70210,
	70313,
	70314,
	70367,
	70379,
	70384,
	70394,
	70400,
	70404,
	70405,
	70413,
	70415,
	70417,
	70419,
	70441,
	70442,
	70449,
	70450,
	70452,
	70453,
	70458,
	70459,
	70461,
	70462,
	70469,
	70471,
	70473,
	70475,
	70477,
	70478,
	70480,
	70481,
	70487,
	70488,
	70493,
	70494,
	70496,
	70498,
	70500,
	70502,
	70509,
	70512,
	70517,
	70528,
	70538,
	70539,
	70540,
	70542,
	70543,
	70544,
	70546,
	70582,
	70583,
	70584,
	70593,
	70594,
	70595,
	70597,
	70598,
	70599,
	70603,
	70604,
	70608,
	70609,
	70610,
	70611,
	70614,
	70615,
	70617,
	70625,
	70627,
	70709,
	70727,
	70731,
	70735,
	70736,
	70746,
	70748,
	70750,
	70751,
	70832,
	70852,
	70864,
	70874,
	71087,
	71094,
	71096,
	71105,
	71106,
	71108,
	71110,
	71113,
	71128,
	71132,
	71134,
	71216,
	71233,
	71235,
	71248,
	71258,
	71264,
	71277,
	71339,
	71352,
	71360,
	71370,
	71376,
	71396,
	71453,
	71468,
	71472,
	71482,
	71484,
	71487,
	71724,
	71739,
	71904,
	71914,
	71936,
	71943,
	71945,
	71946,
	71948,
	71956,
	71957,
	71959,
	71960,
	71984,
	71990,
	71991,
	71993,
	71995,
	71998,
	71999,
	72e3,
	72001,
	72002,
	72004,
	72007,
	72016,
	72026,
	72145,
	72152,
	72154,
	72161,
	72162,
	72163,
	72164,
	72165,
	72193,
	72203,
	72243,
	72250,
	72251,
	72255,
	72256,
	72257,
	72261,
	72262,
	72263,
	72264,
	72273,
	72284,
	72330,
	72346,
	72349,
	72350,
	72353,
	72355,
	72448,
	72458,
	72544,
	72552,
	72688,
	72698,
	72751,
	72759,
	72760,
	72768,
	72769,
	72774,
	72784,
	72794,
	72816,
	72817,
	72818,
	72850,
	72872,
	72873,
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
	73040,
	73050,
	73098,
	73103,
	73104,
	73106,
	73107,
	73112,
	73120,
	73130,
	73184,
	73194,
	73440,
	73458,
	73459,
	73463,
	73465,
	73472,
	73474,
	73475,
	73476,
	73489,
	73490,
	73524,
	73531,
	73534,
	73538,
	73539,
	73541,
	73552,
	73562,
	73563,
	73693,
	73697,
	73727,
	73728,
	74864,
	74869,
	78424,
	78427,
	78430,
	78466,
	78467,
	78470,
	78471,
	78472,
	78473,
	78474,
	78713,
	78714,
	78716,
	78895,
	78896,
	78903,
	78904,
	78905,
	78908,
	78909,
	78910,
	78911,
	78912,
	78913,
	78919,
	78934,
	83406,
	83407,
	83408,
	90368,
	90398,
	90416,
	90426,
	92768,
	92778,
	92782,
	92784,
	92864,
	92874,
	92912,
	92917,
	92918,
	92976,
	92983,
	92986,
	92996,
	92997,
	93008,
	93018,
	93550,
	93552,
	93562,
	93847,
	93849,
	94031,
	94032,
	94033,
	94088,
	94095,
	94099,
	94176,
	94180,
	94181,
	94192,
	94194,
	94196,
	94199,
	94208,
	101120,
	101632,
	101663,
	101760,
	101875,
	110592,
	110883,
	110898,
	110899,
	110928,
	110931,
	110933,
	110934,
	110948,
	110952,
	110960,
	111356,
	113821,
	113823,
	113824,
	113828,
	118e3,
	118010,
	118528,
	118574,
	118576,
	118599,
	119141,
	119146,
	119149,
	119171,
	119173,
	119180,
	119210,
	119214,
	119362,
	119365,
	120782,
	120832,
	121344,
	121399,
	121403,
	121453,
	121461,
	121462,
	121476,
	121477,
	121479,
	121483,
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
	123200,
	123210,
	123566,
	123567,
	123628,
	123632,
	123642,
	123647,
	123648,
	124140,
	124144,
	124154,
	124398,
	124400,
	124401,
	124411,
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
	125252,
	125259,
	125264,
	125274,
	125278,
	125280,
	126124,
	126125,
	126128,
	126129,
	126976,
	127232,
	127406,
	127462,
	127488,
	127877,
	127878,
	127900,
	127902,
	127925,
	127927,
	127932,
	127933,
	127938,
	127941,
	127943,
	127944,
	127946,
	127949,
	127995,
	128e3,
	128066,
	128068,
	128070,
	128081,
	128102,
	128121,
	128124,
	128125,
	128129,
	128132,
	128133,
	128136,
	128143,
	128144,
	128145,
	128146,
	128160,
	128161,
	128162,
	128163,
	128164,
	128165,
	128170,
	128171,
	128175,
	128176,
	128177,
	128179,
	128256,
	128263,
	128279,
	128293,
	128306,
	128330,
	128372,
	128374,
	128378,
	128379,
	128400,
	128401,
	128405,
	128407,
	128468,
	128476,
	128500,
	128506,
	128581,
	128584,
	128587,
	128592,
	128630,
	128633,
	128636,
	128640,
	128675,
	128676,
	128692,
	128695,
	128704,
	128705,
	128716,
	128717,
	128768,
	128884,
	128887,
	128891,
	128896,
	128981,
	129024,
	129292,
	129293,
	129295,
	129296,
	129304,
	129312,
	129318,
	129319,
	129328,
	129338,
	129340,
	129343,
	129399,
	129400,
	129461,
	129463,
	129464,
	129466,
	129467,
	129468,
	129485,
	129488,
	129489,
	129502,
	129536,
	129624,
	129731,
	129734,
	129776,
	129785,
	129792,
	130032,
	130042,
	130048,
	131070,
	131072,
	196606,
	196608,
	262142,
	917505,
	917506,
	917536,
	917632,
	917760,
	918e3
], bl = [
	1,
	15,
	4,
	0,
	2,
	1,
	6,
	22,
	39,
	11,
	38,
	37,
	11,
	39,
	36,
	19,
	11,
	38,
	30,
	27,
	30,
	41,
	35,
	30,
	11,
	22,
	11,
	36,
	38,
	19,
	11,
	36,
	15,
	18,
	11,
	1,
	5,
	1,
	3,
	36,
	37,
	38,
	11,
	39,
	11,
	15,
	11,
	37,
	38,
	11,
	16,
	11,
	39,
	11,
	36,
	11,
	16,
	11,
	16,
	11,
	16,
	11,
	1,
	3,
	1,
	11,
	30,
	11,
	1,
	11,
	30,
	26,
	11,
	38,
	11,
	1,
	26,
	1,
	11,
	1,
	11,
	1,
	22,
	1,
	11,
	25,
	11,
	25,
	11,
	35,
	11,
	37,
	30,
	11,
	1,
	22,
	1,
	22,
	11,
	1,
	35,
	37,
	35,
	11,
	1,
	11,
	22,
	11,
	1,
	35,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	35,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	35,
	11,
	1,
	11,
	30,
	22,
	11,
	1,
	38,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	35,
	11,
	1,
	11,
	1,
	35,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	15,
	35,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	35,
	11,
	37,
	11,
	37,
	11,
	38,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	35,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	35,
	11,
	38,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	35,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	35,
	11,
	38,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	35,
	11,
	16,
	11,
	1,
	16,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	35,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	35,
	11,
	37,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	35,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	38,
	11,
	1,
	11,
	35,
	15,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	35,
	11,
	16,
	11,
	16,
	3,
	16,
	15,
	3,
	22,
	3,
	11,
	22,
	11,
	1,
	11,
	35,
	11,
	15,
	1,
	11,
	1,
	11,
	1,
	36,
	18,
	36,
	18,
	1,
	11,
	1,
	15,
	1,
	15,
	1,
	11,
	1,
	11,
	1,
	11,
	15,
	11,
	1,
	11,
	16,
	15,
	16,
	11,
	3,
	11,
	1,
	11,
	35,
	15,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	35,
	1,
	11,
	31,
	33,
	32,
	11,
	1,
	11,
	15,
	11,
	26,
	11,
	15,
	11,
	36,
	18,
	11,
	15,
	11,
	1,
	11,
	1,
	15,
	11,
	1,
	11,
	1,
	11,
	1,
	15,
	34,
	11,
	15,
	11,
	15,
	38,
	11,
	1,
	11,
	35,
	11,
	22,
	15,
	16,
	11,
	22,
	11,
	1,
	3,
	1,
	35,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	22,
	35,
	11,
	35,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	35,
	11,
	35,
	11,
	1,
	11,
	1,
	3,
	11,
	1,
	10,
	1,
	43,
	10,
	11,
	15,
	13,
	15,
	28,
	15,
	28,
	1,
	28,
	15,
	1,
	11,
	1,
	11,
	35,
	11,
	13,
	1,
	42,
	11,
	1,
	11,
	15,
	35,
	11,
	35,
	11,
	15,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	3,
	1,
	3,
	1,
	11,
	16,
	11,
	15,
	3,
	15,
	8,
	1,
	9,
	1,
	26,
	3,
	26,
	14,
	11,
	39,
	36,
	39,
	36,
	39,
	11,
	29,
	15,
	0,
	1,
	3,
	37,
	11,
	39,
	11,
	34,
	11,
	30,
	36,
	18,
	34,
	11,
	15,
	37,
	15,
	11,
	15,
	7,
	11,
	1,
	11,
	36,
	18,
	11,
	36,
	18,
	11,
	38,
	37,
	38,
	37,
	38,
	37,
	38,
	37,
	38,
	37,
	38,
	1,
	11,
	37,
	11,
	37,
	11,
	38,
	11,
	38,
	11,
	29,
	11,
	36,
	18,
	36,
	18,
	11,
	28,
	11,
	36,
	18,
	11,
	28,
	11,
	28,
	11,
	28,
	11,
	28,
	11,
	28,
	20,
	28,
	11,
	28,
	11,
	28,
	11,
	28,
	11,
	28,
	11,
	28,
	11,
	28,
	11,
	28,
	11,
	28,
	11,
	28,
	11,
	28,
	11,
	28,
	11,
	28,
	11,
	28,
	20,
	28,
	11,
	28,
	11,
	28,
	20,
	11,
	39,
	11,
	22,
	28,
	11,
	36,
	18,
	36,
	18,
	36,
	18,
	36,
	18,
	36,
	18,
	36,
	18,
	36,
	18,
	11,
	36,
	18,
	11,
	36,
	18,
	36,
	18,
	36,
	18,
	36,
	18,
	36,
	18,
	11,
	15,
	11,
	36,
	18,
	36,
	18,
	36,
	18,
	36,
	18,
	36,
	18,
	36,
	18,
	36,
	18,
	36,
	18,
	36,
	18,
	36,
	18,
	36,
	18,
	11,
	36,
	18,
	36,
	18,
	11,
	36,
	18,
	11,
	1,
	11,
	22,
	15,
	11,
	22,
	15,
	11,
	15,
	11,
	1,
	11,
	1,
	39,
	15,
	11,
	26,
	36,
	15,
	11,
	39,
	11,
	39,
	36,
	18,
	36,
	18,
	36,
	18,
	36,
	18,
	15,
	22,
	11,
	15,
	11,
	15,
	11,
	14,
	15,
	11,
	26,
	15,
	36,
	15,
	11,
	15,
	11,
	15,
	11,
	22,
	36,
	19,
	36,
	19,
	36,
	19,
	36,
	19,
	26,
	11,
	28,
	11,
	28,
	11,
	28,
	11,
	28,
	15,
	18,
	28,
	34,
	28,
	36,
	18,
	36,
	18,
	36,
	18,
	36,
	18,
	36,
	18,
	28,
	36,
	18,
	36,
	18,
	36,
	18,
	36,
	18,
	34,
	36,
	18,
	28,
	1,
	28,
	1,
	28,
	34,
	28,
	11,
	34,
	28,
	34,
	28,
	34,
	28,
	34,
	28,
	34,
	28,
	34,
	28,
	34,
	28,
	34,
	28,
	34,
	28,
	34,
	28,
	34,
	11,
	1,
	34,
	28,
	34,
	28,
	34,
	28,
	34,
	28,
	34,
	28,
	34,
	28,
	34,
	28,
	34,
	28,
	34,
	28,
	34,
	28,
	34,
	28,
	34,
	28,
	34,
	28,
	11,
	28,
	11,
	28,
	11,
	28,
	11,
	28,
	34,
	28,
	11,
	28,
	11,
	28,
	11,
	28,
	34,
	28,
	11,
	28,
	11,
	15,
	11,
	15,
	22,
	15,
	11,
	35,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	15,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	37,
	11,
	16,
	22,
	11,
	1,
	11,
	1,
	11,
	15,
	35,
	11,
	1,
	11,
	16,
	11,
	1,
	35,
	11,
	1,
	15,
	11,
	1,
	11,
	31,
	11,
	1,
	10,
	1,
	43,
	28,
	15,
	28,
	11,
	15,
	13,
	11,
	28,
	11,
	1,
	11,
	35,
	11,
	13,
	1,
	11,
	15,
	1,
	15,
	1,
	11,
	13,
	11,
	28,
	15,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	15,
	11,
	1,
	11,
	1,
	15,
	1,
	11,
	35,
	11,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	23,
	24,
	11,
	33,
	11,
	32,
	11,
	28,
	11,
	25,
	1,
	25,
	11,
	25,
	11,
	25,
	11,
	25,
	11,
	25,
	11,
	25,
	11,
	25,
	11,
	18,
	36,
	11,
	37,
	11,
	1,
	18,
	34,
	22,
	36,
	18,
	29,
	11,
	3,
	1,
	3,
	1,
	3,
	1,
	3,
	1,
	3,
	1,
	3,
	1,
	3,
	1,
	28,
	36,
	18,
	36,
	18,
	36,
	18,
	36,
	18,
	36,
	18,
	36,
	18,
	36,
	18,
	36,
	18,
	28,
	36,
	18,
	28,
	18,
	28,
	18,
	11,
	34,
	22,
	28,
	36,
	18,
	36,
	18,
	36,
	18,
	28,
	11,
	28,
	38,
	37,
	28,
	11,
	7,
	11,
	22,
	28,
	38,
	37,
	28,
	36,
	18,
	28,
	18,
	28,
	18,
	28,
	34,
	28,
	22,
	28,
	36,
	28,
	18,
	28,
	36,
	28,
	18,
	28,
	36,
	18,
	36,
	18,
	34,
	28,
	34,
	28,
	34,
	28,
	11,
	28,
	11,
	28,
	11,
	28,
	11,
	28,
	11,
	37,
	38,
	28,
	38,
	11,
	1,
	17,
	11,
	15,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	15,
	11,
	15,
	11,
	35,
	11,
	15,
	11,
	15,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	15,
	11,
	1,
	11,
	15,
	29,
	11,
	15,
	11,
	1,
	11,
	35,
	11,
	35,
	11,
	1,
	26,
	11,
	1,
	26,
	11,
	15,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	12,
	10,
	1,
	43,
	15,
	28,
	11,
	28,
	13,
	1,
	10,
	1,
	10,
	11,
	3,
	1,
	11,
	1,
	11,
	35,
	15,
	1,
	11,
	35,
	11,
	35,
	11,
	1,
	11,
	1,
	11,
	35,
	15,
	11,
	1,
	11,
	1,
	11,
	16,
	11,
	1,
	11,
	1,
	11,
	15,
	11,
	15,
	1,
	11,
	1,
	35,
	11,
	16,
	11,
	15,
	11,
	1,
	15,
	11,
	15,
	11,
	1,
	11,
	1,
	11,
	15,
	11,
	1,
	11,
	35,
	11,
	1,
	11,
	10,
	11,
	10,
	11,
	10,
	11,
	10,
	11,
	10,
	11,
	10,
	11,
	1,
	15,
	1,
	11,
	1,
	11,
	1,
	43,
	11,
	13,
	11,
	1,
	11,
	15,
	13,
	10,
	1,
	11,
	1,
	11,
	1,
	11,
	13,
	11,
	13,
	11,
	13,
	11,
	13,
	10,
	11,
	28,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	43,
	12,
	1,
	28,
	11,
	28,
	11,
	1,
	11,
	1,
	11,
	15,
	11,
	35,
	15,
	11,
	1,
	11,
	1,
	11,
	35,
	11,
	1,
	11,
	1,
	16,
	15,
	22,
	11,
	15,
	11,
	1,
	11,
	1,
	15,
	11,
	35,
	11,
	16,
	11,
	1,
	11,
	35,
	11,
	35,
	11,
	1,
	11,
	35,
	11,
	15,
	11,
	1,
	11,
	35,
	11,
	10,
	11,
	10,
	11,
	10,
	11,
	10,
	11,
	10,
	1,
	11,
	1,
	11,
	1,
	43,
	12,
	1,
	12,
	1,
	15,
	11,
	13,
	11,
	1,
	11,
	1,
	11,
	16,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	16,
	11,
	15,
	16,
	11,
	1,
	11,
	1,
	11,
	1,
	15,
	11,
	16,
	15,
	11,
	16,
	11,
	1,
	11,
	35,
	11,
	1,
	11,
	1,
	11,
	15,
	11,
	35,
	11,
	16,
	22,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	35,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	35,
	11,
	35,
	11,
	13,
	15,
	1,
	15,
	11,
	1,
	12,
	1,
	10,
	11,
	10,
	1,
	11,
	1,
	43,
	15,
	28,
	13,
	1,
	11,
	37,
	11,
	15,
	11,
	15,
	11,
	36,
	18,
	11,
	18,
	11,
	36,
	18,
	36,
	18,
	11,
	36,
	18,
	11,
	36,
	3,
	36,
	18,
	3,
	36,
	18,
	36,
	18,
	1,
	11,
	1,
	11,
	36,
	18,
	11,
	13,
	1,
	13,
	11,
	35,
	11,
	15,
	11,
	35,
	11,
	1,
	15,
	11,
	1,
	15,
	11,
	15,
	11,
	35,
	11,
	15,
	35,
	11,
	15,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	34,
	3,
	11,
	1,
	34,
	28,
	11,
	28,
	11,
	28,
	11,
	28,
	11,
	28,
	11,
	34,
	11,
	34,
	11,
	34,
	11,
	34,
	11,
	28,
	11,
	1,
	15,
	1,
	11,
	35,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	35,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	15,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	35,
	11,
	1,
	11,
	1,
	35,
	11,
	38,
	11,
	1,
	35,
	11,
	1,
	11,
	35,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	1,
	11,
	35,
	11,
	36,
	11,
	37,
	11,
	37,
	11,
	28,
	11,
	28,
	40,
	28,
	20,
	28,
	11,
	28,
	11,
	28,
	11,
	28,
	20,
	28,
	20,
	28,
	20,
	28,
	21,
	28,
	20,
	28,
	20,
	28,
	20,
	28,
	20,
	28,
	20,
	28,
	20,
	28,
	20,
	28,
	20,
	28,
	11,
	28,
	11,
	28,
	11,
	28,
	20,
	28,
	11,
	28,
	11,
	28,
	11,
	28,
	11,
	28,
	11,
	28,
	20,
	28,
	20,
	28,
	20,
	28,
	20,
	28,
	11,
	28,
	11,
	28,
	20,
	28,
	20,
	11,
	39,
	34,
	11,
	28,
	20,
	28,
	20,
	28,
	20,
	28,
	20,
	28,
	11,
	28,
	11,
	28,
	11,
	28,
	11,
	20,
	28,
	20,
	28,
	20,
	28,
	20,
	28,
	20,
	28,
	20,
	28,
	20,
	28,
	20,
	28,
	20,
	28,
	20,
	28,
	20,
	28,
	20,
	28,
	11,
	28,
	20,
	28,
	20,
	28,
	11,
	35,
	11,
	28,
	11,
	28,
	11,
	28,
	11,
	1,
	11,
	1,
	11,
	1,
	11
], xl = [
	4352,
	8361,
	8986,
	9001,
	9193,
	9200,
	9203,
	9725,
	9748,
	9776,
	9800,
	9855,
	9866,
	9875,
	9889,
	9898,
	9917,
	9924,
	9934,
	9940,
	9962,
	9970,
	9973,
	9978,
	9981,
	9989,
	9994,
	10024,
	10060,
	10062,
	10067,
	10071,
	10133,
	10160,
	10175,
	11035,
	11088,
	11093,
	11904,
	11931,
	12032,
	12272,
	12353,
	12441,
	12549,
	12593,
	12688,
	12783,
	12832,
	12880,
	42128,
	43360,
	44032,
	63744,
	65040,
	65072,
	65108,
	65128,
	65281,
	65474,
	65482,
	65490,
	65498,
	65504,
	65512,
	94176,
	94192,
	94208,
	101631,
	101760,
	110576,
	110581,
	110589,
	110592,
	110898,
	110928,
	110933,
	110948,
	110960,
	119552,
	119648,
	126980,
	127183,
	127374,
	127377,
	127488,
	127504,
	127552,
	127568,
	127584,
	127744,
	127789,
	127799,
	127870,
	127904,
	127951,
	127968,
	127988,
	127992,
	128064,
	128066,
	128255,
	128331,
	128336,
	128378,
	128405,
	128420,
	128507,
	128640,
	128716,
	128720,
	128725,
	128732,
	128747,
	128756,
	128992,
	129008,
	129292,
	129340,
	129351,
	129648,
	129664,
	129678,
	129736,
	129741,
	129759,
	129775,
	131072,
	196608
], Sl = [
	4448,
	8362,
	8988,
	9003,
	9197,
	9201,
	9204,
	9727,
	9750,
	9784,
	9812,
	9856,
	9872,
	9876,
	9890,
	9900,
	9919,
	9926,
	9935,
	9941,
	9963,
	9972,
	9974,
	9979,
	9982,
	9990,
	9996,
	10025,
	10061,
	10063,
	10070,
	10072,
	10136,
	10161,
	10176,
	11037,
	11089,
	11094,
	11930,
	12020,
	12246,
	12351,
	12439,
	12544,
	12592,
	12687,
	12774,
	12831,
	12872,
	42125,
	42183,
	43389,
	55204,
	64256,
	65050,
	65107,
	65127,
	65132,
	65471,
	65480,
	65488,
	65496,
	65501,
	65511,
	65519,
	94181,
	94199,
	101590,
	101663,
	101875,
	110580,
	110588,
	110591,
	110883,
	110899,
	110931,
	110934,
	110952,
	111356,
	119639,
	119671,
	126981,
	127184,
	127375,
	127387,
	127491,
	127548,
	127561,
	127570,
	127590,
	127777,
	127798,
	127869,
	127892,
	127947,
	127956,
	127985,
	127989,
	128063,
	128065,
	128253,
	128318,
	128335,
	128360,
	128379,
	128407,
	128421,
	128592,
	128710,
	128717,
	128723,
	128729,
	128736,
	128749,
	128765,
	129004,
	129009,
	129339,
	129350,
	129536,
	129661,
	129675,
	129735,
	129737,
	129757,
	129771,
	129785,
	196606,
	262142
];
//#endregion
//#region packages/core/src/text/line-break.ts
function Cl(e) {
	let t = 0, n = yl.length - 1;
	for (; t < n;) {
		let r = t + n + 1 >> 1;
		yl[r] <= e ? t = r : n = r - 1;
	}
	return vl[bl[t]];
}
function wl(e) {
	let t = 0, n = xl.length - 1;
	if (n < 0 || e < xl[0]) return !1;
	for (; t < n;) {
		let r = t + n + 1 >> 1;
		xl[r] <= e ? t = r : n = r - 1;
	}
	return e < Sl[t];
}
function Tl(e, t) {
	let n = Cl(e);
	if (n === "OP") return !0;
	let r = Cl(t), i = n === "AL" || n === "HL", a = r === "AL" || r === "HL";
	return !!(i && (a || r === "NU" || r === "PR" || r === "PO") || a && (n === "NU" || n === "PR" || n === "PO") || n === "PR" && (r === "ID" || r === "EB" || r === "EM") || (n === "ID" || n === "EB" || n === "EM") && r === "PO" || n === "NU" && (r === "NU" || r === "PO" || r === "PR") || r === "NU" && (n === "PO" || n === "PR" || n === "HY" || n === "IS") || (i || n === "NU") && r === "OP" && !wl(t) || n === "CP" && !wl(e) && (a || r === "NU"));
}
//#endregion
//#region packages/core/src/text/sea-break.ts
function El(e) {
	return e === "my" || e === "bo";
}
function Dl(e) {
	return e >= 3584 && e <= 3711 || e >= 3712 && e <= 3839 || e >= 6016 && e <= 6143 || e >= 4096 && e <= 4255 || e >= 43616 && e <= 43647 || e >= 43488 && e <= 43519 || e >= 3840 && e <= 4095;
}
function Ol(e) {
	return e === 3633 || e >= 3635 && e <= 3642 || e >= 3655 && e <= 3662 || e === 3761 || e >= 3763 && e <= 3772 || e >= 3784 && e <= 3790 || e >= 6068 && e <= 6099 || e === 6109;
}
function kl(e) {
	return e <= 3711 ? "th" : e <= 3839 ? "lo" : e <= 4095 ? "bo" : e <= 4255 ? "my" : e <= 6143 ? "km" : "my";
}
function Al(e) {
	for (let t of e) if (Dl(t.codePointAt(0))) return !0;
	return !1;
}
function jl(e) {
	for (let t of e) {
		let e = t.codePointAt(0);
		if (Dl(e)) return El(kl(e));
	}
	return !1;
}
function Ml(e) {
	let t = !1;
	for (let n of e) {
		let e = n.codePointAt(0);
		if (Dl(e)) {
			if (El(kl(e))) return !1;
			t = !0;
		}
	}
	return t;
}
var Nl, Pl = /* @__PURE__ */ new Map();
function Fl(e) {
	let t = Pl.get(e);
	if (t !== void 0) return t;
	let n = null;
	try {
		typeof Intl < "u" && typeof Intl.Segmenter == "function" && (n = new Intl.Segmenter(e, { granularity: "word" }));
	} catch {
		n = null;
	}
	return Pl.set(e, n), n;
}
function Il(e) {
	if (Nl === null) return null;
	if (typeof Nl == "function") {
		let t = Nl;
		return (n) => t(n, e);
	}
	let t = Fl(e);
	return t ? (e) => t.segment(e) : null;
}
function Ll(e) {
	if (!Al(e)) return [];
	let t = [], n = e.length, r = 0;
	for (; r < n;) {
		let i = e.codePointAt(r), a = i > 65535 ? 2 : 1;
		if (!Dl(i)) {
			r += a;
			continue;
		}
		let o = kl(i), s = El(o), c = r + a;
		for (; c < n;) {
			let t = e.codePointAt(c);
			if (!Dl(t) || El(kl(t)) !== s) break;
			c += t > 65535 ? 2 : 1;
		}
		let l = e.slice(r, c);
		if (s) for (let e of Gl(l)) t.push(r + e);
		else {
			let e = Il(o);
			if (e) {
				let n = [];
				try {
					for (let t of e(l)) t.index > 0 && (t.isWordLike ?? !0) && n.push(r + t.index);
					for (let e of n) t.push(e);
				} catch {}
			}
		}
		r = c;
	}
	return t;
}
function Rl(e) {
	if (!Al(e)) return [];
	let t = [], n = e.length, r = e.codePointAt(0), i = r > 65535 ? 2 : 1;
	for (; i < n;) {
		let n = e.codePointAt(i), a = n > 65535 ? 2 : 1;
		Dl(r) !== Dl(n) && !zl(r) && !zl(n) && t.push(i), r = n, i += a;
	}
	return t;
}
function zl(e) {
	return e === 32 || e === 9 || e === 10 || e === 13 || e === 12288 || e === 160 || e === 8199 || e === 8239 || e === 8288 || e === 65279;
}
function Bl(e, t) {
	if (!Al(e)) return [];
	let n = e.length, r = new Set(Ll(e)), i = new Set(Gl(e)), a = (e) => {
		i.has(e) && r.add(e);
	};
	for (let t of Rl(e)) a(t);
	if (t?.cjk) {
		let t = e.codePointAt(0), r = t > 65535 ? 2 : 1;
		for (; r < n;) {
			let n = e.codePointAt(r);
			(gl(n) || gl(t)) && a(r), t = n, r += n > 65535 ? 2 : 1;
		}
	}
	let o = t?.kinsoku, s = o != null && o.enabled !== !1, c = [];
	for (let t of r) if (!(t <= 0 || t >= n)) {
		if (s) {
			let n = e.codePointAt(t), r = Vl(e, t);
			if (r !== void 0 && o.lineEndForbidden.has(r) || o.lineStartForbidden.has(n)) continue;
		}
		c.push(t);
	}
	return c.sort((e, t) => e - t), c;
}
function Vl(e, t) {
	if (t <= 0) return;
	let n = e.charCodeAt(t - 1);
	if (n >= 56320 && n <= 57343 && t >= 2) {
		let n = e.charCodeAt(t - 2);
		if (n >= 55296 && n <= 56319) return e.codePointAt(t - 2);
	}
	return n;
}
function Hl(e, t, n, r, i, a = !1) {
	let o = e.length;
	if (n >= o) return n;
	if (a) {
		if (i(e.slice(n, o)) <= r) return o;
		let a = 0, s = t.length - 1, c = n;
		for (; a <= s;) {
			let l = a + s >> 1, u = t[l];
			u <= n ? a = l + 1 : u >= o ? s = l - 1 : i(e.slice(n, u)) <= r ? (c = u, a = l + 1) : s = l - 1;
		}
		return c;
	}
	let s = n;
	for (let a of t) a <= n || a >= o || i(e.slice(n, a)) <= r && (s = a);
	return i(e.slice(n, o)) <= r && (s = o), s;
}
var Ul;
function Wl() {
	if (Ul !== void 0) return Ul;
	let e = null;
	try {
		typeof Intl < "u" && typeof Intl.Segmenter == "function" && (e = new Intl.Segmenter(void 0, { granularity: "grapheme" }));
	} catch {
		e = null;
	}
	return Ul = e, e;
}
function Gl(e) {
	let t = Wl();
	if (t) try {
		let n = [];
		for (let r of t.segment(e)) r.index > 0 && n.push(r.index);
		return n;
	} catch {}
	let n = [];
	for (let t = 0; t < e.length;) {
		let r = e.codePointAt(t);
		t += r > 65535 ? 2 : 1, t < e.length && n.push(t);
	}
	return n;
}
//#endregion
//#region packages/core/src/text/vertical-orientation.generated.ts
var Kl = [
	"U",
	"R",
	"Tu",
	"Tr"
], ql = [
	0,
	167,
	168,
	169,
	170,
	174,
	175,
	177,
	178,
	188,
	191,
	215,
	216,
	247,
	248,
	746,
	748,
	4352,
	4608,
	5121,
	5760,
	6320,
	6400,
	8214,
	8215,
	8216,
	8218,
	8220,
	8222,
	8224,
	8226,
	8240,
	8242,
	8251,
	8253,
	8258,
	8259,
	8263,
	8266,
	8273,
	8274,
	8293,
	8294,
	8413,
	8417,
	8418,
	8421,
	8448,
	8450,
	8451,
	8458,
	8463,
	8464,
	8467,
	8469,
	8470,
	8472,
	8478,
	8484,
	8485,
	8486,
	8487,
	8488,
	8489,
	8490,
	8494,
	8495,
	8501,
	8512,
	8517,
	8523,
	8524,
	8526,
	8527,
	8586,
	8588,
	8592,
	8734,
	8735,
	8756,
	8758,
	8960,
	8968,
	8972,
	8992,
	8996,
	9001,
	9003,
	9004,
	9085,
	9115,
	9150,
	9166,
	9167,
	9168,
	9169,
	9180,
	9186,
	9251,
	9252,
	9472,
	9632,
	9754,
	9760,
	10088,
	10102,
	10132,
	11026,
	11056,
	11088,
	11098,
	11159,
	11160,
	11192,
	11218,
	11219,
	11244,
	11248,
	11264,
	11856,
	11858,
	11904,
	12289,
	12291,
	12296,
	12306,
	12308,
	12320,
	12336,
	12337,
	12353,
	12354,
	12355,
	12356,
	12357,
	12358,
	12359,
	12360,
	12361,
	12362,
	12387,
	12388,
	12419,
	12420,
	12421,
	12422,
	12423,
	12424,
	12430,
	12431,
	12437,
	12439,
	12443,
	12445,
	12448,
	12449,
	12450,
	12451,
	12452,
	12453,
	12454,
	12455,
	12456,
	12457,
	12458,
	12483,
	12484,
	12515,
	12516,
	12517,
	12518,
	12519,
	12520,
	12526,
	12527,
	12533,
	12535,
	12540,
	12541,
	12583,
	12584,
	12724,
	12728,
	12731,
	12732,
	12784,
	12800,
	13055,
	13144,
	13179,
	13184,
	42192,
	43360,
	43392,
	44032,
	55296,
	57344,
	64256,
	65040,
	65056,
	65072,
	65097,
	65104,
	65107,
	65112,
	65113,
	65119,
	65123,
	65127,
	65136,
	65281,
	65282,
	65288,
	65290,
	65292,
	65293,
	65294,
	65295,
	65306,
	65308,
	65311,
	65312,
	65339,
	65340,
	65341,
	65342,
	65343,
	65344,
	65371,
	65377,
	65504,
	65507,
	65508,
	65512,
	65520,
	65529,
	65532,
	65534,
	67968,
	68e3,
	71040,
	71168,
	72192,
	72384,
	77824,
	83584,
	94176,
	101888,
	110576,
	110898,
	110899,
	110928,
	110931,
	110933,
	110934,
	110948,
	110952,
	111360,
	118464,
	118736,
	118784,
	119296,
	119520,
	119680,
	120832,
	121520,
	126976,
	127488,
	127490,
	129024,
	129280,
	129792,
	131072,
	196606,
	196608,
	262142,
	983040,
	1048574,
	1048576,
	1114110
], Jl = [
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	3,
	1,
	3,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	3,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	2,
	0,
	3,
	0,
	3,
	0,
	3,
	0,
	2,
	0,
	2,
	0,
	2,
	0,
	2,
	0,
	2,
	0,
	2,
	0,
	2,
	0,
	2,
	0,
	2,
	0,
	2,
	0,
	2,
	0,
	2,
	0,
	3,
	2,
	0,
	2,
	0,
	2,
	0,
	2,
	0,
	2,
	0,
	2,
	0,
	2,
	0,
	2,
	0,
	2,
	0,
	2,
	0,
	2,
	0,
	3,
	0,
	2,
	0,
	2,
	0,
	2,
	0,
	2,
	0,
	2,
	0,
	2,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	2,
	0,
	1,
	3,
	0,
	1,
	0,
	1,
	2,
	0,
	3,
	0,
	2,
	1,
	2,
	0,
	3,
	1,
	2,
	0,
	3,
	0,
	3,
	0,
	3,
	0,
	3,
	1,
	0,
	3,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	2,
	0,
	2,
	0,
	2,
	0,
	2,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	2,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1
];
//#endregion
//#region packages/core/src/text/vertical-orientation.ts
function Yl(e) {
	let t = 0, n = ql.length - 1;
	for (; t < n;) {
		let r = t + n + 1 >> 1;
		ql[r] <= e ? t = r : n = r - 1;
	}
	return Jl[t];
}
function Xl(e) {
	return Kl[Yl(e)];
}
function Zl(e) {
	return Ql.get(e) ?? null;
}
var Ql = new Map([
	[65292, 65040],
	[12289, 65041],
	[12290, 65042]
]);
function $l(e) {
	return eu.get(e) ?? null;
}
var eu = new Map([
	[65288, 65077],
	[65289, 65078],
	[65371, 65079],
	[65373, 65080],
	[12308, 65081],
	[12309, 65082],
	[12304, 65083],
	[12305, 65084],
	[12298, 65085],
	[12299, 65086],
	[12296, 65087],
	[12297, 65088],
	[12300, 65089],
	[12301, 65090],
	[12302, 65091],
	[12303, 65092],
	[12310, 65047],
	[12311, 65048]
]), tu = new Set([65307]);
function nu(e) {
	return tu.has(e);
}
var ru = new Set([
	12540,
	12316,
	65374
]);
function iu(e) {
	return ru.has(e);
}
//#endregion
//#region packages/core/src/text/vertical-vert-feature.ts
var au = 256, ou = 200, su = /* @__PURE__ */ new WeakMap();
function cu(e) {
	let t = e.canvas, n = t?.ownerDocument?.defaultView?.HTMLCanvasElement;
	return typeof n == "function" && t instanceof n || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement ? t : null;
}
function lu(e, t) {
	return e.replace(/(^|\s)\d*\.?\d+(?:px|pt|pc|in|cm|mm|q|em|rem|%)(?:\/[^\s]+)?(?=\s)/i, `$1${t}`);
}
function uu(e, t = !0) {
	let n = e.trim();
	return [...n === "" || n.toLowerCase() === "normal" ? [] : n.split(",").map((e) => e.trim()).filter((e) => !/^(["'])vert\1(?:\s+(?:on|off|\d+))?$/i.test(e)), `"vert" ${+!!t}`].join(", ");
}
function du(e) {
	try {
		let t = e.ownerDocument?.defaultView, n = t?.getComputedStyle ? t.getComputedStyle(e) : typeof getComputedStyle == "function" ? getComputedStyle(e) : null;
		if (n?.fontFeatureSettings) return n.fontFeatureSettings;
	} catch {}
	return e.style.fontFeatureSettings;
}
function fu(e, t) {
	if (e.isConnected) return t();
	let n = e.ownerDocument ?? (typeof document > "u" ? null : document), r = n?.body ?? n?.documentElement;
	if (!r) return t();
	let i = e.parentNode, a = e.nextSibling, o = e.style, s = {
		position: o.position,
		left: o.left,
		top: o.top,
		opacity: o.opacity,
		pointerEvents: o.pointerEvents
	};
	Object.assign(o, {
		position: "fixed",
		left: "-99999px",
		top: "0",
		opacity: "0",
		pointerEvents: "none"
	}), r.appendChild(e);
	let c = !1;
	try {
		return t();
	} catch (e) {
		throw c = !0, e;
	} finally {
		let t;
		try {
			if (i) {
				let t = a?.parentNode === i ? a : null;
				i.insertBefore(e, t);
			} else e.remove();
		} catch (n) {
			t = n;
			try {
				e.remove();
			} catch {}
		} finally {
			Object.assign(o, s);
		}
		if (t !== void 0 && !c) throw t;
	}
}
function pu(e, t) {
	let n = cu(e);
	return n === null ? t() : fu(n, t);
}
function mu(e) {
	let t = su.get(e);
	if (t) return t;
	let n = e.createElement("canvas");
	n.width = au, n.height = au, n.setAttribute("aria-hidden", "true"), Object.assign(n.style, {
		position: "fixed",
		left: "-99999px",
		top: "0",
		opacity: "0",
		pointerEvents: "none"
	});
	let r = {
		canvas: n,
		cache: /* @__PURE__ */ new Map(),
		epoch: 0
	}, i = () => {
		r.epoch += 1, r.cache.clear();
	};
	return e.fonts?.addEventListener?.("loadingdone", i), e.fonts?.addEventListener?.("loadingerror", i), su.set(e, r), r;
}
function hu(e, t) {
	let { width: n, height: r } = e.canvas, i = e.getImageData(0, 0, n, r).data, a = new Uint8ClampedArray(n * r), o = n, s = r, c = -1, l = -1, u = 0, d = 0, f = 0;
	for (let e = 0; e < r; e += 1) for (let t = 0; t < n; t += 1) {
		let r = i[(e * n + t) * 4 + 3];
		a[e * n + t] = r, r !== 0 && (o = Math.min(o, t), s = Math.min(s, e), c = Math.max(c, t), l = Math.max(l, e), u += r, d += t * r, f += e * r);
	}
	if (c < o || l < s || u === 0) return null;
	let p = e.measureText(t), m = (e) => typeof e == "number" && Number.isFinite(e) ? e : 0;
	return {
		alpha: a,
		geometry: [
			o,
			s,
			c,
			l,
			d / u,
			f / u
		],
		metrics: [
			m(p.width),
			m(p.actualBoundingBoxLeft),
			m(p.actualBoundingBoxRight),
			m(p.actualBoundingBoxAscent),
			m(p.actualBoundingBoxDescent)
		]
	};
}
function gu(e, t, n) {
	let r = e.canvas;
	r.style.fontFeatureSettings = n, e.font = e.font, e.clearRect(0, 0, r.width, r.height);
	let i = String.fromCodePoint(t);
	return e.fillText(i, r.width / 2, r.height / 2), hu(e, i);
}
function _u(e, t) {
	let n = 0, r = Math.min(e.length, t.length);
	for (let i = 0; i < r; i += 1) n += Math.abs(e[i] - t[i]);
	return n;
}
function vu(e, t, n, r) {
	let i = (e, t, n, r) => {
		let i = Math.max(_u(e, t), _u(n, r));
		return Math.min(_u(e, n), _u(e, r), _u(t, n), _u(t, r)) > i;
	};
	return i(e.alpha, t.alpha, n.alpha, r.alpha) || i(e.geometry, t.geometry, n.geometry, r.geometry) || i(e.metrics, t.metrics, n.metrics, r.metrics);
}
function yu(e, t) {
	let n = cu(e);
	if (n === null || typeof document > "u") return !1;
	let r = n.ownerDocument ?? document, i = mu(r), a = du(n), o = `${i.epoch}:${lu(e.font, "<size>")}:${a}:${t}`, s = i.cache.get(o);
	if (s !== void 0) return s;
	let c = !1, l = r.body ?? r.documentElement;
	if (!l) return !1;
	let u = i.canvas.isConnected;
	u || l.appendChild(i.canvas);
	let d = i.canvas.getContext("2d", { willReadFrequently: !0 });
	if (d !== null) {
		let n = i.canvas.style.fontFeatureSettings;
		try {
			d.font = lu(e.font, `${ou}px`), d.fillStyle = "#000", d.textAlign = "center", d.textBaseline = "middle";
			let n = uu(a, !1), r = uu(a, !0), i = gu(d, t, n), o = gu(d, t, n), s = gu(d, t, r), l = gu(d, t, r);
			c = i !== null && o !== null && s !== null && l !== null && vu(i, o, s, l);
		} catch {
			c = !1;
		} finally {
			i.canvas.style.fontFeatureSettings = n, d.font = d.font, d.clearRect(0, 0, i.canvas.width, i.canvas.height), u || i.canvas.remove();
		}
	}
	return i.cache.set(o, c), c;
}
function bu(e, t) {
	let n = e.canvas;
	return n?.style ? pu(e, () => {
		let r = n.style, i = r.fontFeatureSettings;
		r.fontFeatureSettings = uu(du(n)), e.font = e.font;
		try {
			return t();
		} finally {
			r.fontFeatureSettings = i, e.font = e.font;
		}
	}) : t();
}
function xu(e, t) {
	return bu(e, () => {
		let n = e.textAlign, r = e.textBaseline;
		e.textAlign = "center", e.textBaseline = "middle";
		try {
			let n = e.measureText(t), r = Number.isFinite(n.width) ? Math.max(0, n.width) : 0, i = typeof n.actualBoundingBoxAscent == "number" && Number.isFinite(n.actualBoundingBoxAscent) && typeof n.actualBoundingBoxDescent == "number" && Number.isFinite(n.actualBoundingBoxDescent);
			return {
				advancePx: r,
				inkBeforePx: i ? n.actualBoundingBoxAscent : 0,
				inkAfterPx: i ? n.actualBoundingBoxDescent : 0,
				cellAdvancePx: r,
				originInCellPx: r / 2
			};
		} finally {
			e.textAlign = n, e.textBaseline = r;
		}
	});
}
//#endregion
//#region packages/core/src/interaction/hyperlink.ts
var Su = [
	"http",
	"https",
	"mailto",
	"tel"
];
function Cu(e) {
	let t = "";
	for (let n of e) {
		let e = n.codePointAt(0);
		e !== void 0 && e > 32 && (t += n);
	}
	let n = /^([a-zA-Z][a-zA-Z0-9+.-]*):/.exec(t);
	return n ? n[1].toLowerCase() : null;
}
function wu(e, t = Su) {
	if (e === "") return null;
	let n = Cu(e);
	return n === null || t.includes(n) ? e : null;
}
function Tu(e, t = Su, n = typeof window < "u" ? window : void 0) {
	let r = wu(e, t);
	return r === null || !n ? !1 : (n.open(r, "_blank", "noopener,noreferrer"), !0);
}
//#endregion
//#region packages/core/src/text/line-metrics.ts
var Eu = [
	[(e) => e.includes("meiryo ui") || e.includes("meiryoui") || e.includes("メイリオ") && e.includes("ui"), {
		asc: 2171 * 1.3 / 2048,
		desc: 430 * 1.3 / 2048,
		eaOnly: !0
	}],
	[(e) => e.includes("meiryo") || e.includes("メイリオ"), {
		asc: 2210 / 2048,
		desc: 1059 / 2048
	}],
	[(e) => !e.includes("ui") && (e.includes("yu mincho") || e.includes("yumincho") || e.includes("游明朝") || e.includes("yu gothic") || e.includes("yugothic") || e.includes("游ゴシック")), {
		asc: 1802 * 1.3 / 2048,
		desc: 455 * 1.3 / 2048,
		eaOnly: !0
	}],
	[(e) => e.includes("sakkal majalla") || e.includes("majalla"), {
		asc: 1810 / 2048,
		desc: 1050 / 2048
	}],
	[(e) => e === "times new roman", {
		asc: 1825 / 2048,
		desc: 530 / 2048
	}],
	[(e) => e === "arial", {
		asc: 1854 / 2048,
		desc: 501 / 2048
	}]
];
function Du(e, t) {
	if (!e) return null;
	let n = e.toLowerCase();
	for (let [e, r] of Eu) if (e(n) && (t || !r.eaOnly)) return r;
	return null;
}
function Ou(e, t = !1) {
	let n = Du(e, t);
	return n === null ? null : n.asc + n.desc;
}
function ku(e, t, n = !1) {
	let r = Ou(e, n);
	return r === null ? 0 : r * t;
}
function Au(e, t, n, r, i = !1) {
	let a = Du(e, i);
	if (a === null) return {
		ascent: n,
		descent: r
	};
	let o = (a.asc + a.desc) * t;
	return n + r <= o ? {
		ascent: n,
		descent: r
	} : {
		ascent: a.asc * t,
		descent: a.desc * t
	};
}
//#endregion
export { zs as $, z as $t, cl as A, Xa as At, Qs as B, Ir as Bt, Tl as C, oo as Ct, ml as D, no as Dt, hl as E, ro as Et, kc as F, Oa as Ft, Is as G, br as Gt, $s as H, Dr as Ht, Oc as I, Vr as It, Ks as J, Me as Jt, Fs as K, hr as Kt, fc as L, Hr as Lt, al as M, Ya as Mt, Dc as N, Za as Nt, pl as O, za as Ot, wc as P, Ra as Pt, Hs as Q, se as Qt, mc as R, kr as Rt, Bl as S, ao as St, _l as T, so as Tt, Ns as U, Fr as Ut, Zs as V, Pr as Vt, Ps as W, yr as Wt, Ws as X, Ne as Xt, Us as Y, Ae as Yt, Gs as Z, Ce as Zt, Gl as _, Ro as _t, Tu as a, re as an, ws as at, Ol as b, co as bt, bu as c, ns as ct, Zl as d, qo as dt, V as en, Bs as et, Xl as f, Go as ft, Hl as g, zo as gt, Al as h, Bo as ht, Cu as i, ce as in, Os as it, sl as j, Ja as jt, fl as k, Qa as kt, pu as l, Ko as lt, nu as m, Vo as mt, ku as n, ie as nn, Rs as nt, xu as o, L as on, Es as ot, iu as p, Wo as pt, Ls as q, Ie as qt, Su as r, ae as rn, us as rt, yu as s, ee as sn, ts as st, Au as t, oe as tn, Vs as tt, $l as u, Jo as ut, Ml as v, mo as vt, gl as w, io as wt, Dl as x, lo as xt, jl as y, po as yt, pc as z, Or as zt };
