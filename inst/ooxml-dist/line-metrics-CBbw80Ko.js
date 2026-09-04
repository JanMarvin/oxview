//#region packages/core/src/text/line-metrics.ts
var e = [
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
function t(t, n) {
	if (!t) return null;
	let r = t.toLowerCase();
	for (let [t, i] of e) if (t(r) && (n || !i.eaOnly)) return i;
	return null;
}
function n(e, n = !1) {
	let r = t(e, n);
	return r === null ? null : r.asc + r.desc;
}
function r(e, t, r = !1) {
	let i = n(e, r);
	return i === null ? 0 : i * t;
}
function i(e, n, r, i, a = !1) {
	let o = t(e, a);
	if (o === null) return {
		ascent: r,
		descent: i
	};
	let s = (o.asc + o.desc) * n;
	return r + i <= s ? {
		ascent: r,
		descent: i
	} : {
		ascent: o.asc * n,
		descent: o.desc * n
	};
}
//#endregion
export { r as n, i as t };
