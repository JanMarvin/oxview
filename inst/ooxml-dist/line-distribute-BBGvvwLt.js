import { Nt as e, b as t, w as n, x as r } from "./line-metrics-Baz31mML.js";
import { _ as i } from "./plot-area-frame-Dg1VIpUU.js";
//#region packages/core/src/fonts/symbol-font.ts
var a = {
	167: "♣",
	168: "♦",
	169: "♥",
	170: "♠",
	171: "↔",
	172: "←",
	173: "↑",
	174: "→",
	175: "↓",
	183: "•",
	184: "÷",
	185: "≠",
	180: "×",
	176: "°",
	177: "±",
	163: "≤",
	179: "≥"
}, o = {
	33: "✏",
	34: "✂",
	36: "👓",
	74: "☺",
	75: "😐",
	76: "☹",
	118: "❖",
	167: "▪",
	108: "●",
	110: "■",
	116: "◆",
	119: "◆",
	251: "✗",
	252: "✓",
	253: "☒",
	254: "☑",
	223: "←",
	224: "→",
	225: "↑",
	226: "↓",
	227: "↖",
	228: "↗",
	229: "↙",
	230: "↘"
};
function s(e) {
	let t = {};
	for (let n of Object.keys(e)) {
		let r = Number(n);
		t[r] = e[r], t[61440 + r] = e[r];
	}
	return t;
}
var c = s(a), l = s(o);
function u(e, t) {
	if (!t) return e;
	let n = t.trim().toLowerCase(), r = n === "wingdings" ? l : n === "symbol" ? c : null;
	return r ? r[e.charCodeAt(0)] ?? e : e;
}
function d(e) {
	if (!e) return !1;
	let t = e.toLowerCase();
	return t === "symbol" || t.includes("wingdings");
}
function f(e, t) {
	if (!d(t) || e.length === 0) return [{
		text: e,
		mapped: !1
	}];
	let n = [], r = "", i = null;
	for (let a of e) {
		let e = u(a, t), o = e !== a;
		i === null || o === i ? (i = o, r += e) : (n.push({
			text: r,
			mapped: i
		}), i = o, r = e);
	}
	return r.length > 0 && n.push({
		text: r,
		mapped: i ?? !1
	}), n;
}
//#endregion
//#region packages/core/src/shape/custGeom.ts
function p(e, t, n, r, i) {
	let a = Infinity, o = Infinity, s = -Infinity, c = -Infinity, l = (e, t) => {
		!Number.isFinite(e) || !Number.isFinite(t) || (a = Math.min(a, e), o = Math.min(o, t), s = Math.max(s, e), c = Math.max(c, t));
	};
	for (let a of e) {
		let e = 0, o = 0;
		for (let s of a) switch (s.cmd) {
			case "moveTo":
			case "lineTo":
				e = s.x, o = s.y, l(t + e * r, n + o * i);
				break;
			case "cubicBezTo":
				l(t + s.x1 * r, n + s.y1 * i), l(t + s.x2 * r, n + s.y2 * i), e = s.x, o = s.y, l(t + e * r, n + o * i);
				break;
			case "quadBezTo":
				l(t + s.x1 * r, n + s.y1 * i), e = s.x, o = s.y, l(t + e * r, n + o * i);
				break;
			case "arcTo": {
				let a = Math.abs(s.wr * r), c = Math.abs(s.hr * i);
				if (a <= 0 || c <= 0) break;
				let u = s.stAng * Math.PI / 180, d = s.swAng * Math.PI / 180, f = t + e * r, p = n + o * i, m = f - a * Math.cos(u), h = p - c * Math.sin(u);
				l(m - a, h - c), l(m + a, h + c);
				let g = u + d;
				e = (m + a * Math.cos(g) - t) / r, o = (h + c * Math.sin(g) - n) / i;
				break;
			}
			case "close": break;
		}
	}
	return Number.isFinite(a) ? {
		x: a,
		y: o,
		w: s - a,
		h: c - o
	} : null;
}
function m(e, t, n, r, i, a) {
	for (let o of t) {
		let t = 0, s = 0;
		for (let c of o) switch (c.cmd) {
			case "moveTo":
				e.moveTo(n + c.x * i, r + c.y * a), t = c.x, s = c.y;
				break;
			case "lineTo":
				e.lineTo(n + c.x * i, r + c.y * a), t = c.x, s = c.y;
				break;
			case "cubicBezTo":
				e.bezierCurveTo(n + c.x1 * i, r + c.y1 * a, n + c.x2 * i, r + c.y2 * a, n + c.x * i, r + c.y * a), t = c.x, s = c.y;
				break;
			case "quadBezTo":
				e.quadraticCurveTo(n + c.x1 * i, r + c.y1 * a, n + c.x * i, r + c.y * a), t = c.x, s = c.y;
				break;
			case "arcTo": {
				let o = c.wr * i, l = c.hr * a;
				if (o <= 0 || l <= 0) break;
				let u = c.stAng * Math.PI / 180, d = c.swAng * Math.PI / 180, f = n + t * i, p = r + s * a, m = f - o * Math.cos(u), h = p - l * Math.sin(u), g = u + d;
				e.ellipse(m, h, o, l, 0, u, g, d < 0), t = (m + o * Math.cos(g) - n) / i, s = (h + l * Math.sin(g) - r) / a;
				break;
			}
			case "close":
				e.closePath();
				break;
		}
	}
}
//#endregion
//#region packages/core/src/shape/custgeom-endpoints.ts
var h = 1e-9;
function g(e) {
	return e.cmd === "lineTo" || e.cmd === "cubicBezTo" || e.cmd === "quadBezTo" || e.cmd === "arcTo";
}
function _(e, t, n, r) {
	let i = n === 0 ? 0 : n, a = r === 0 ? 0 : r;
	return {
		x: e,
		y: t,
		dx: i,
		dy: a,
		angle: Math.atan2(a, i)
	};
}
function v(e, t, n) {
	switch (n.cmd) {
		case "lineTo": return {
			dx: n.x - e,
			dy: n.y - t
		};
		case "cubicBezTo": {
			let r = n.x1 - e, i = n.y1 - t;
			return Math.abs(r) < h && Math.abs(i) < h && (r = n.x2 - e, i = n.y2 - t), Math.abs(r) < h && Math.abs(i) < h && (r = n.x - e, i = n.y - t), {
				dx: r,
				dy: i
			};
		}
		case "quadBezTo": {
			let r = n.x1 - e, i = n.y1 - t;
			return Math.abs(r) < h && Math.abs(i) < h && (r = n.x - e, i = n.y - t), {
				dx: r,
				dy: i
			};
		}
		case "arcTo": {
			let e = n.stAng * Math.PI / 180, t = n.swAng < 0 ? -1 : 1;
			return {
				dx: -n.wr * Math.sin(e) * t,
				dy: n.hr * Math.cos(e) * t
			};
		}
		default: return {
			dx: 0,
			dy: 0
		};
	}
}
function y(e, t, n) {
	switch (n.cmd) {
		case "moveTo":
		case "lineTo":
		case "cubicBezTo":
		case "quadBezTo": return {
			x: n.x,
			y: n.y
		};
		case "arcTo": {
			if (n.wr <= 0 || n.hr <= 0) return {
				x: e,
				y: t
			};
			let r = n.stAng * Math.PI / 180, i = r + n.swAng * Math.PI / 180, a = e - n.wr * Math.cos(r), o = t - n.hr * Math.sin(r);
			return {
				x: a + n.wr * Math.cos(i),
				y: o + n.hr * Math.sin(i)
			};
		}
		default: return {
			x: e,
			y: t
		};
	}
}
function b(e, t, n) {
	let { x: r, y: i } = y(e, t, n);
	switch (n.cmd) {
		case "lineTo": return {
			dx: n.x - e,
			dy: n.y - t,
			x: r,
			y: i
		};
		case "cubicBezTo": {
			let a = n.x - n.x2, o = n.y - n.y2;
			return Math.abs(a) < h && Math.abs(o) < h && (a = n.x - n.x1, o = n.y - n.y1), Math.abs(a) < h && Math.abs(o) < h && (a = n.x - e, o = n.y - t), {
				dx: a,
				dy: o,
				x: r,
				y: i
			};
		}
		case "quadBezTo": {
			let a = n.x - n.x1, o = n.y - n.y1;
			return Math.abs(a) < h && Math.abs(o) < h && (a = n.x - e, o = n.y - t), {
				dx: a,
				dy: o,
				x: r,
				y: i
			};
		}
		case "arcTo": {
			if (n.wr <= 0 || n.hr <= 0) return {
				dx: 0,
				dy: 0,
				x: r,
				y: i
			};
			let e = n.stAng * Math.PI / 180 + n.swAng * Math.PI / 180, t = n.swAng < 0 ? -1 : 1;
			return {
				dx: -n.wr * Math.sin(e) * t,
				dy: n.hr * Math.cos(e) * t,
				x: r,
				y: i
			};
		}
		default: return {
			dx: 0,
			dy: 0,
			x: r,
			y: i
		};
	}
}
function x(e) {
	let t = 0, n = 0, r = !1;
	for (let i of e) i.cmd === "moveTo" && (r = !0), {x: t, y: n} = y(t, n, i);
	return r ? {
		x: t,
		y: n
	} : null;
}
function S(e) {
	if (e.some((e) => e.cmd === "close")) return !0;
	let t = e.find((e) => e.cmd === "moveTo");
	if (!t) return !1;
	let n = x(e);
	return !n || !e.some(g) ? !1 : Math.abs(n.x - t.x) < h && Math.abs(n.y - t.y) < h;
}
function C(e) {
	let t = {
		start: null,
		end: null
	};
	if (!e || e.length === 0) return t;
	let n = e[0];
	if (n && n.length > 0 && !S(n)) {
		let e = n.find((e) => e.cmd === "moveTo"), r = n.find(g);
		if (e && r) {
			let n = v(e.x, e.y, r);
			(Math.abs(n.dx) > h || Math.abs(n.dy) > h) && (t.start = _(e.x, e.y, -n.dx, -n.dy));
		}
	}
	let r = e[e.length - 1];
	if (r && r.length > 0 && !S(r)) {
		let e = 0, n = 0, i = -1;
		for (let e = 0; e < r.length; e++) g(r[e]) && (i = e);
		if (i >= 0) {
			for (let t = 0; t < i; t++) ({x: e, y: n} = y(e, n, r[t]));
			let a = b(e, n, r[i]);
			(Math.abs(a.dx) > h || Math.abs(a.dy) > h) && (t.end = _(a.x, a.y, a.dx, a.dy));
		}
	}
	return t;
}
//#endregion
//#region packages/core/src/shape/preset.ts
function w(e, t, n, r, i, a, o, s = -Math.PI / 2) {
	let c = a * 2;
	for (let l = 0; l < c; l++) {
		let c = s + l * Math.PI / a, u = l % 2 == 0 ? 1 : o, d = t + r * u * Math.cos(c), f = n + i * u * Math.sin(c);
		l === 0 ? e.moveTo(d, f) : e.lineTo(d, f);
	}
	e.closePath();
}
function T(e, t, n, r, i, a, o = -Math.PI / 2) {
	for (let s = 0; s < a; s++) {
		let c = o + s * 2 * Math.PI / a, l = t + r * Math.cos(c), u = n + i * Math.sin(c);
		s === 0 ? e.moveTo(l, u) : e.lineTo(l, u);
	}
	e.closePath();
}
function E(e, t, n, r, i, a, o) {
	let s = (e) => Math.atan2(r * Math.sin(e), i * Math.cos(e)), c = s(a), l = s(a + o), u = t - r * Math.cos(c), d = n - i * Math.sin(c);
	return e.ellipse(u, d, Math.abs(r), Math.abs(i), 0, c, l, o < 0), {
		x: u + r * Math.cos(l),
		y: d + i * Math.sin(l)
	};
}
var D = {
	oval: "ellipse",
	rtriangle: "rttriangle",
	roundrectangle: "roundrect",
	flowchartsumingjunction: "flowchartsummingjunction"
}, O = new Set(/* @__PURE__ */ "ellipse.rttriangle.triangle.diamond.trapezoid.roundrect.snip1rect.frame.irregularseal1.irregularseal2.star4.star8.star12.star16.star24.star32.line.straightconnector1.callout1.bordercallout1.leftuparrow.quadarrowcallout.mathequal.mathplus.mathminus.flowchartdecision.flowchartmanualinput.flowchartconnector.flowchartinputoutput.flowchartmerge.flowchartextract.flowchartpreparation.flowchartcollate".split(".")), k = new Set([
	"accentcallout1",
	"accentbordercallout1",
	"flowchartpredefinedprocess",
	"flowchartsort",
	"flowchartinternalstorage",
	"flowchartsummingjunction"
]), A = new Set([
	"round2samerect",
	"round2diagrect",
	"dodecagon",
	"star10"
]);
function j(t, n, r, i, a, o, s = null, c = null, l = null, u = null) {
	let d = r + a / 2, f = i + o / 2;
	{
		let d = n.toLowerCase(), f = D[d] ?? d;
		if ((O.has(f) || k.has(f) || A.has(f)) && e(t, f, r, i, a, o, [
			s,
			c,
			l,
			u
		])) return;
	}
	switch (n.toLowerCase()) {
		case "parallelogram": {
			let e = a * Math.min(.5, (s ?? 25e3) / 1e5);
			t.moveTo(r + e, i), t.lineTo(r + a, i), t.lineTo(r + a - e, i + o), t.lineTo(r, i + o), t.closePath();
			break;
		}
		case "pentagon":
			T(t, d, f, a / 2, o / 2, 5);
			break;
		case "hexagon":
			T(t, d, f, a / 2, o / 2, 6, 0);
			break;
		case "heptagon":
			T(t, d, f, a / 2, o / 2, 7);
			break;
		case "octagon":
			T(t, d, f, a / 2, o / 2, 8, -Math.PI / 8);
			break;
		case "decagon":
			T(t, d, f, a / 2, o / 2, 10);
			break;
		case "star5":
		case "star":
			w(t, d, f, a / 2, o / 2, 5, (s ?? 19098) / 5e4);
			break;
		case "star6":
			w(t, d, f, a / 2, o / 2, 6, (s ?? 28868) / 5e4, 0);
			break;
		case "star7":
			w(t, d, f, a / 2, o / 2, 7, (s ?? 34142) / 5e4);
			break;
		case "rightarrow": {
			let e = o * Math.min(1, (s ?? 5e4) / 1e5), n = a * Math.min(1, (c ?? 5e4) / 1e5), l = i + (o - e) / 2;
			t.moveTo(r, l), t.lineTo(r + a - n, l), t.lineTo(r + a - n, i), t.lineTo(r + a, f), t.lineTo(r + a - n, i + o), t.lineTo(r + a - n, l + e), t.lineTo(r, l + e), t.closePath();
			break;
		}
		case "leftarrow": {
			let e = o * Math.min(1, (s ?? 5e4) / 1e5), n = a * Math.min(1, (c ?? 5e4) / 1e5), l = i + (o - e) / 2;
			t.moveTo(r + a, l), t.lineTo(r + n, l), t.lineTo(r + n, i), t.lineTo(r, f), t.lineTo(r + n, i + o), t.lineTo(r + n, l + e), t.lineTo(r + a, l + e), t.closePath();
			break;
		}
		case "uparrow": {
			let e = a * Math.min(1, (s ?? 5e4) / 1e5), n = o * Math.min(1, (c ?? 5e4) / 1e5), l = r + (a - e) / 2;
			t.moveTo(d, i), t.lineTo(r + a, i + n), t.lineTo(l + e, i + n), t.lineTo(l + e, i + o), t.lineTo(l, i + o), t.lineTo(l, i + n), t.lineTo(r, i + n), t.closePath();
			break;
		}
		case "downarrow": {
			let e = a * Math.min(1, (s ?? 5e4) / 1e5), n = o * Math.min(1, (c ?? 5e4) / 1e5), l = r + (a - e) / 2;
			t.moveTo(d, i + o), t.lineTo(r + a, i + o - n), t.lineTo(l + e, i + o - n), t.lineTo(l + e, i), t.lineTo(l, i), t.lineTo(l, i + o - n), t.lineTo(r, i + o - n), t.closePath();
			break;
		}
		case "leftrightarrow": {
			let e = o * Math.min(1, (s ?? 5e4) / 1e5), n = a * Math.min(.5, (c ?? 25e3) / 1e5), l = i + (o - e) / 2;
			t.moveTo(r, f), t.lineTo(r + n, i), t.lineTo(r + n, l), t.lineTo(r + a - n, l), t.lineTo(r + a - n, i), t.lineTo(r + a, f), t.lineTo(r + a - n, i + o), t.lineTo(r + a - n, l + e), t.lineTo(r + n, l + e), t.lineTo(r + n, i + o), t.closePath();
			break;
		}
		case "updownarrow": {
			let e = a * Math.min(1, (s ?? 5e4) / 1e5), n = o * Math.min(.5, (c ?? 25e3) / 1e5), l = r + (a - e) / 2;
			t.moveTo(d, i), t.lineTo(r + a, i + n), t.lineTo(l + e, i + n), t.lineTo(l + e, i + o - n), t.lineTo(r + a, i + o - n), t.lineTo(d, i + o), t.lineTo(r, i + o - n), t.lineTo(l, i + o - n), t.lineTo(l, i + n), t.lineTo(r, i + n), t.closePath();
			break;
		}
		case "notchedrightarrow": {
			let e = o * Math.min(1, (s ?? 5e4) / 1e5), n = a * Math.min(1, (c ?? 35e3) / 1e5), l = i + (o - e) / 2, u = n * .43;
			t.moveTo(r, l), t.lineTo(r + a - n, l), t.lineTo(r + a - n, i), t.lineTo(r + a, f), t.lineTo(r + a - n, i + o), t.lineTo(r + a - n, l + e), t.lineTo(r, l + e), t.lineTo(r + u, f), t.closePath();
			break;
		}
		case "chevron": {
			let e = a * Math.min(1, Math.max(0, (s ?? 5e4) / 1e5));
			t.moveTo(r, i), t.lineTo(r + e, i), t.lineTo(r + a, f), t.lineTo(r + e, i + o), t.lineTo(r, i + o), e > 0 && t.lineTo(r + e, f), t.closePath();
			break;
		}
		case "homeplate": {
			let e = o * .4;
			t.moveTo(r, i), t.lineTo(r + a, i), t.lineTo(r + a, i + o - e), t.lineTo(d, i + o), t.lineTo(r, i + o - e), t.closePath();
			break;
		}
		case "leftbracket": {
			let e = Math.min(o * Math.min(5e4, Math.max(0, s ?? 8333)) / 1e5, o / 2);
			t.moveTo(r + a, i), t.quadraticCurveTo(r, i, r, i + e), o - 2 * e > .5 && t.lineTo(r, i + o - e), t.quadraticCurveTo(r, i + o, r + a, i + o);
			break;
		}
		case "rightbracket": {
			let e = Math.min(o * Math.min(5e4, Math.max(0, s ?? 8333)) / 1e5, o / 2);
			t.moveTo(r, i), t.quadraticCurveTo(r + a, i, r + a, i + e), o - 2 * e > .5 && t.lineTo(r + a, i + o - e), t.quadraticCurveTo(r + a, i + o, r, i + o);
			break;
		}
		case "leftbrace": {
			let e = f, n = a * .45;
			t.moveTo(r + a, i), t.bezierCurveTo(r + a - n, i, r + a - n, e - o * .08, r, e), t.bezierCurveTo(r + a - n, e + o * .08, r + a - n, i + o, r + a, i + o);
			break;
		}
		case "rightbrace": {
			let e = f, n = a * .45;
			t.moveTo(r, i), t.bezierCurveTo(r + n, i, r + n, e - o * .08, r + a, e), t.bezierCurveTo(r + n, e + o * .08, r + n, i + o, r, i + o);
			break;
		}
		case "wedgerectcallout": {
			t.rect(r, i, a, o * .8);
			let e = r + a * .2, n = i + o;
			t.moveTo(r + a * .1, i + o * .8), t.lineTo(e, n), t.lineTo(r + a * .3, i + o * .8), t.closePath();
			break;
		}
		case "wedgeellipsecallout": {
			let e = (s ?? -2e4) / 1e5 * a, n = (c ?? 12e4) / 1e5 * o, r = d + e, i = f + n;
			t.ellipse(d, f, a / 2, o / 2, 0, 0, Math.PI * 2);
			let l = Math.atan2(n, e), u = Math.PI / 10, p = a / 2, m = o / 2, h = d + p * Math.cos(l - u), g = f + m * Math.sin(l - u), _ = d + p * Math.cos(l + u), v = f + m * Math.sin(l + u);
			t.moveTo(h, g), t.lineTo(r, i), t.lineTo(_, v), t.closePath();
			break;
		}
		case "cloudcallout": {
			let e = Math.min(a, o) * .22, n = [
				[d - a * .25, i + o * .35],
				[d - a * .1, i + o * .15],
				[d + a * .1, i + o * .1],
				[d + a * .28, i + o * .2],
				[d + a * .35, i + o * .4]
			];
			t.moveTo(n[0][0] - e, n[0][1]);
			for (let [r, i] of n) t.arc(r, i, e, Math.PI, 0);
			t.arc(d, i + o * .65, a * .45, 0, Math.PI), t.closePath();
			let r = d + (s ?? -2e4) / 1e5 * a, l = f + (c ?? 12e4) / 1e5 * o;
			t.moveTo(d + a * .05, i + o * .8), t.arc(r, l, Math.min(a, o) * .07, 0, Math.PI * 2);
			break;
		}
		case "bentconnector2":
		case "bentconnector3":
		case "bentconnector4":
		case "bentconnector5":
		case "curvedconnector2":
		case "curvedconnector3":
		case "curvedconnector4":
		case "curvedconnector5":
			t.moveTo(r, i), t.lineTo(r + a, i + o);
			break;
		case "heart":
			t.moveTo(d, i + o * .32), t.bezierCurveTo(d, i, r + a * .05, i, r, i + o * .3), t.bezierCurveTo(r, i + o * .68, d - a * .05, i + o * .78, d, i + o), t.bezierCurveTo(d + a * .05, i + o * .78, r + a, i + o * .68, r + a, i + o * .3), t.bezierCurveTo(r + a - a * .05, i, d, i, d, i + o * .32);
			break;
		case "donut": {
			let e = a / 2, n = o / 2, r = Math.min(e, n) * (s ?? 25e3) / 1e5, i = e - r, c = n - r;
			t.ellipse(d, f, e, n, 0, 0, Math.PI * 2, !1), t.moveTo(d + i, f), t.ellipse(d, f, i, c, 0, 0, Math.PI * 2, !0);
			break;
		}
		case "nosmoking":
		case "nosmokingsign": {
			let e = (s ?? 18750) / 1e5, n = a / 2, r = o / 2, i = n * (1 - 2 * e), c = r * (1 - 2 * e);
			t.ellipse(d, f, n, r, 0, 0, Math.PI * 2, !1), t.moveTo(d + i, f), t.ellipse(d, f, i, c, 0, 0, Math.PI * 2, !0), t.moveTo(d + i, f), t.ellipse(d, f, i, c, 0, 0, Math.PI / 2, !1), t.lineTo(d - i, f), t.ellipse(d, f, i, c, 0, Math.PI, 3 * Math.PI / 2, !1), t.closePath();
			break;
		}
		case "pie": {
			let e = (s ?? 0) / 216e5 * Math.PI * 2, n = (c ?? 162e5) / 216e5 * Math.PI * 2;
			t.moveTo(d, f), t.arc(d, f, Math.min(a, o) / 2, e, n), t.closePath();
			break;
		}
		case "cloud": {
			let e = o * .28;
			t.arc(r + a * .25, i + o * .55, e, Math.PI, Math.PI * 1.8), t.arc(r + a * .45, i + o * .35, e * 1.1, Math.PI * 1.3, Math.PI * 1.9), t.arc(r + a * .65, i + o * .4, e, Math.PI * 1.5, Math.PI * 2), t.arc(r + a * .8, i + o * .6, e * .9, Math.PI * 1.6, Math.PI * .1), t.arc(r + a * .55, i + o * .75, e, 0, Math.PI * .7), t.arc(r + a * .25, i + o * .7, e * .9, 0, Math.PI), t.closePath();
			break;
		}
		case "funnel":
			t.moveTo(r, i), t.lineTo(r + a, i), t.lineTo(d + a * .15, i + o), t.lineTo(d - a * .15, i + o), t.closePath();
			break;
		case "smileyface": {
			t.ellipse(d, f, a / 2, o / 2, 0, 0, Math.PI * 2), t.closePath();
			let e = a * .05, n = o * .05, r = f - o * .12;
			t.moveTo(d - a * .2 + e, r), t.ellipse(d - a * .2, r, e, n, 0, 0, Math.PI * 2), t.moveTo(d + a * .2 + e, r), t.ellipse(d + a * .2, r, e, n, 0, 0, Math.PI * 2), t.moveTo(d - a * .25, f + o * .05), t.quadraticCurveTo(d, f + o * .3, d + a * .25, f + o * .05);
			break;
		}
		case "document":
		case "foldedcorner": {
			let e = Math.min(a, o) * .15;
			t.moveTo(r, i), t.lineTo(r + a - e, i), t.lineTo(r + a, i + e), t.lineTo(r + a, i + o), t.lineTo(r, i + o), t.closePath(), t.moveTo(r + a - e, i), t.lineTo(r + a - e, i + e), t.lineTo(r + a, i + e);
			break;
		}
		case "snip2samerect": {
			let e = Math.min(a, o) * Math.min(5e4, Math.max(0, s ?? 16667)) / 1e5;
			t.moveTo(r, i), t.lineTo(r + a - e, i), t.lineTo(r + a, i + e), t.lineTo(r + a, i + o), t.lineTo(r + e, i + o), t.lineTo(r, i + o - e), t.closePath();
			break;
		}
		case "snip2diagrect": {
			let e = Math.min(a, o) * Math.min(5e4, Math.max(0, s ?? 16667)) / 1e5;
			t.moveTo(r + e, i), t.lineTo(r + a - e, i), t.lineTo(r + a, i + e), t.lineTo(r + a, i + o - e), t.lineTo(r + a - e, i + o), t.lineTo(r + e, i + o), t.lineTo(r, i + o - e), t.lineTo(r, i + e), t.closePath();
			break;
		}
		case "sniproundrect": {
			let e = Math.min(a, o) * Math.min(5e4, Math.max(0, s ?? 16667)) / 1e5;
			t.moveTo(r + e, i), t.lineTo(r + a - e, i), t.lineTo(r + a, i + e), t.lineTo(r + a, i + o), t.lineTo(r, i + o), t.quadraticCurveTo(r, i, r + e, i), t.closePath();
			break;
		}
		case "round1rect": {
			let e = Math.min(a, o) * Math.min(5e4, Math.max(0, s ?? 16667)) / 1e5;
			t.moveTo(r + e, i), t.lineTo(r + a, i), t.lineTo(r + a, i + o), t.lineTo(r, i + o), t.lineTo(r, i + e), t.quadraticCurveTo(r, i, r + e, i), t.closePath();
			break;
		}
		case "plaque": {
			let e = Math.min(a, o) * .25;
			t.moveTo(r + e, i), t.lineTo(r + a - e, i), t.quadraticCurveTo(r + a, i, r + a, i + e), t.lineTo(r + a, i + o - e), t.quadraticCurveTo(r + a, i + o, r + a - e, i + o), t.lineTo(r + e, i + o), t.quadraticCurveTo(r, i + o, r, i + o - e), t.lineTo(r, i + e), t.quadraticCurveTo(r, i, r + e, i), t.closePath();
			break;
		}
		case "can": {
			let e = o * .1;
			t.ellipse(d, i + e, a / 2, e, 0, 0, Math.PI * 2), t.moveTo(r, i + e), t.lineTo(r, i + o - e), t.ellipse(d, i + o - e, a / 2, e, 0, Math.PI, 2 * Math.PI), t.lineTo(r + a, i + e);
			break;
		}
		case "cube": {
			let e = Math.min(a, o) * .2;
			t.moveTo(r + e, i), t.lineTo(r + a, i), t.lineTo(r + a, i + o - e), t.lineTo(r + a - e, i + o), t.lineTo(r, i + o), t.lineTo(r, i + e), t.closePath(), t.moveTo(r + e, i), t.lineTo(r + e, i + e), t.lineTo(r + a - e, i + e), t.moveTo(r + e, i + e), t.lineTo(r, i + e);
			break;
		}
		case "bevel": {
			let e = Math.min(a, o) * .1;
			t.rect(r, i, a, o), t.moveTo(r, i), t.lineTo(r + e, i + e), t.lineTo(r + a - e, i + e), t.lineTo(r + a, i), t.moveTo(r + a - e, i + e), t.lineTo(r + a - e, i + o - e), t.lineTo(r + a, i + o), t.moveTo(r + a - e, i + o - e), t.lineTo(r + e, i + o - e), t.lineTo(r, i + o), t.moveTo(r + e, i + o - e), t.lineTo(r + e, i + e);
			break;
		}
		case "halfframe": {
			let e = Math.min(a, o) * .25;
			t.moveTo(r, i), t.lineTo(r + a, i), t.lineTo(r + a, i + e), t.lineTo(r + e, i + e), t.lineTo(r + e, i + o), t.lineTo(r, i + o), t.closePath();
			break;
		}
		case "corner": {
			let e = Math.min(a, o) * .25;
			t.moveTo(r, i), t.lineTo(r + a, i), t.lineTo(r + a, i + e), t.lineTo(r + e, i + e), t.lineTo(r + e, i + o), t.lineTo(r, i + o), t.closePath();
			break;
		}
		case "flowchartalternateprocess":
		case "flowchartprocess": {
			let e = Math.min(a, o) * Math.min(5e4, Math.max(0, s ?? 16667)) / 1e5;
			t.roundRect(r, i, a, o, [{
				x: e,
				y: e
			}]);
			break;
		}
		case "flowchartterminator": {
			let e = Math.min(a, o) / 2;
			t.roundRect(r, i, a, o, [{
				x: e,
				y: e
			}]);
			break;
		}
		case "flowchartdocument": {
			let e = o * .1;
			t.moveTo(r, i), t.lineTo(r + a, i), t.lineTo(r + a, i + o - e), t.bezierCurveTo(r + a * .75, i + o, r + a * .25, i + o - e * 2, r, i + o - e), t.closePath();
			break;
		}
		case "moon":
			t.arc(d, f, Math.min(a, o) / 2, -Math.PI / 2, Math.PI / 2), t.arc(d - a * .2, f, Math.min(a, o) / 2, Math.PI / 2, -Math.PI / 2, !0), t.closePath();
			break;
		case "arc": {
			let e = 216e5, n = (s ?? 162e5) / e * Math.PI * 2, r = (c ?? 54e5) / e * Math.PI * 2;
			t.ellipse(d, f, a / 2, o / 2, 0, n, n + r, r < 0);
			break;
		}
		case "mathmultiply": {
			let e = Math.min(a, o) * Math.min(51965, Math.max(0, s ?? 23520)) / 1e5, n = Math.atan2(o, a), c = Math.sin(n), l = Math.cos(n), u = e / 2 * c, d = e / 2 * l;
			t.moveTo(r + u, i - d), t.lineTo(r - u, i + d), t.lineTo(r + a - u, i + o + d), t.lineTo(r + a + u, i + o - d), t.closePath(), t.moveTo(r + a - u, i - d), t.lineTo(r + a + u, i + d), t.lineTo(r + u, i + o + d), t.lineTo(r - u, i + o - d), t.closePath();
			break;
		}
		case "mathdivide": {
			let e = Math.min(36745, Math.max(1e3, s ?? 23520)), n = (73490 + -e) / 4, r = 36745 * a / o, u = Math.min(Math.min(n, r), Math.max(1e3, l ?? 11760)), p = 73490 + 4 * u - e, m = Math.min(p, Math.max(0, c ?? 5880)), h = o * e / 2e5, g = o * m / 1e5, _ = o * u / 1e5, v = a * 73490 / 2e5, y = f - h, b = f + h, x = y - (g + _) - _, S = i + o - x, C = d - v, w = d + v;
			t.rect(C, y, w - C, b - y), t.moveTo(d + _, x + _), t.arc(d, x + _, _, 0, Math.PI * 2), t.moveTo(d + _, S - _), t.arc(d, S - _, _, 0, Math.PI * 2);
			break;
		}
		case "quadarrow": {
			let e = a * (s ?? 23e3) / 1e5, n = a * (c ?? 3e4) / 1e5, l = r + (a - e) / 2, u = i + (o - e) / 2;
			t.moveTo(d, i), t.lineTo(r + a - n, i + n), t.lineTo(r + a - n, u), t.lineTo(l + e, u), t.lineTo(l + e, i + n), t.lineTo(r + n, i + n), t.lineTo(r + a, f), t.lineTo(r + a - n, i + o - n), t.lineTo(l + e, i + o - n), t.lineTo(l + e, u + e), t.lineTo(r + a - n, u + e), t.lineTo(r + a - n, i + o - n), t.lineTo(d, i + o), t.lineTo(r + n, i + o - n), t.lineTo(r + n, u + e), t.lineTo(l, u + e), t.lineTo(l, i + o - n), t.lineTo(r, f), t.lineTo(r + n, i + n), t.lineTo(l, i + n), t.lineTo(l, u), t.lineTo(r + n, u), t.closePath();
			break;
		}
		case "wave": {
			let e = o * (s ?? 12500) / 1e5, n = i + e, c = i + o - e;
			t.moveTo(r, n), t.bezierCurveTo(r + a * .25, i, r + a * .25, i + e * 2, r + a * .5, n), t.bezierCurveTo(r + a * .75, i + e * 2, r + a * .75, i, r + a, n), t.lineTo(r + a, c), t.bezierCurveTo(r + a * .75, i + o, r + a * .75, i + o - e * 2, r + a * .5, c), t.bezierCurveTo(r + a * .25, i + o - e * 2, r + a * .25, i + o, r, c), t.closePath();
			break;
		}
		case "doublewave": {
			let e = o * (s ?? 6250) / 1e5, n = i + e, c = i + o - e;
			t.moveTo(r, n), t.bezierCurveTo(r + a * .25, i, r + a * .25, i + e * 2, r + a * .5, n), t.bezierCurveTo(r + a * .75, i + e * 2, r + a * .75, i, r + a, n), t.lineTo(r + a, c), t.bezierCurveTo(r + a * .75, i + o, r + a * .75, i + o - e * 2, r + a * .5, c), t.bezierCurveTo(r + a * .25, i + o - e * 2, r + a * .25, i + o, r, c), t.closePath();
			break;
		}
		case "sun": {
			let e = Math.min(a, o) / 2, n = e * ((s ?? 25e3) / 1e5 + .5), r = Math.min(n, e * .9), i = Math.PI / 16;
			for (let n = 0; n < 8; n++) {
				let a = n / 8 * Math.PI * 2;
				t.moveTo(d + r * Math.cos(a - i), f + r * Math.sin(a - i)), t.lineTo(d + e * Math.cos(a), f + e * Math.sin(a)), t.lineTo(d + r * Math.cos(a + i), f + r * Math.sin(a + i)), t.closePath();
			}
			t.moveTo(d + r, f), t.arc(d, f, r, 0, Math.PI * 2);
			break;
		}
		case "lightningbolt":
			t.moveTo(d + a * .1, i), t.lineTo(r, f - o * .05), t.lineTo(d + a * .05, f - o * .05), t.lineTo(d - a * .1, i + o), t.lineTo(r + a, f + o * .05), t.lineTo(d - a * .05, f + o * .05), t.closePath();
			break;
		case "bracketpair": {
			let e = o * Math.min(5e4, Math.max(0, s ?? 8333)) / 1e5;
			t.moveTo(r + a * .4, i), t.quadraticCurveTo(r, i, r, i + e), o - 2 * e > 0 && t.lineTo(r, i + o - e), t.quadraticCurveTo(r, i + o, r + a * .4, i + o), t.moveTo(r + a * .6, i), t.quadraticCurveTo(r + a, i, r + a, i + e), o - 2 * e > 0 && t.lineTo(r + a, i + o - e), t.quadraticCurveTo(r + a, i + o, r + a * .6, i + o);
			break;
		}
		case "bracepair": {
			let e = a * .2;
			t.moveTo(r + a * .4, i), t.bezierCurveTo(r + a * .4 - e, i, r + a * .4 - e, f - o * .08, r, f), t.bezierCurveTo(r + a * .4 - e, f + o * .08, r + a * .4 - e, i + o, r + a * .4, i + o), t.moveTo(r + a * .6, i), t.bezierCurveTo(r + a * .6 + e, i, r + a * .6 + e, f - o * .08, r + a, f), t.bezierCurveTo(r + a * .6 + e, f + o * .08, r + a * .6 + e, i + o, r + a * .6, i + o);
			break;
		}
		case "chord": {
			let e = (s ?? 27e5) / 216e5 * Math.PI * 2, n = (c ?? 162e5) / 216e5 * Math.PI * 2;
			t.ellipse(d, f, a / 2, o / 2, 0, e, n), t.closePath();
			break;
		}
		case "blockarc": {
			let e = Math.min(a, o) / 2, n = s ?? 108e5, r = c ?? 0, i = e * (1 - (l ?? 25e3) / 1e5), u = n / 216e5 * Math.PI * 2, p = r / 216e5 * Math.PI * 2;
			t.arc(d, f, e, u, p, !1), t.arc(d, f, i, p, u, !0), t.closePath();
			break;
		}
		case "teardrop": {
			let e = Math.min(a, o) * .4, n = r + e, s = i + o - e;
			t.arc(n, s, e, 0, Math.PI * 2 * .75), t.bezierCurveTo(n - e * .1, s - e, r + a - e, i + e, r + a, i), t.bezierCurveTo(r + a - e * .2, i + e * .5, n + e, s - e * 1.1, n + e, s), t.closePath();
			break;
		}
		case "diagstripe": {
			let e = o * (s ?? 5e4) / 1e5 * a / o;
			t.moveTo(r + e, i), t.lineTo(r + a, i), t.lineTo(r + a - e, i + o), t.lineTo(r, i + o), t.closePath();
			break;
		}
		case "wedgeroundrectcallout": {
			let e = Math.min(a, o) * .1;
			t.roundRect(r, i, a, o * .85, e), t.moveTo(r + a * .1, i + o * .85), t.lineTo(r + a * .2, i + o), t.lineTo(r + a * .3, i + o * .85), t.closePath();
			break;
		}
		case "rightarrowcallout": {
			let e = o * (s ?? 5e4) / 1e5, n = a * (c ?? 5e4) / 1e5, l = i + (o - e) / 2;
			t.rect(r, l, n, e), t.moveTo(r + n, i), t.lineTo(r + a, f), t.lineTo(r + n, i + o), t.closePath();
			break;
		}
		case "leftarrowcallout": {
			let e = o * (s ?? 5e4) / 1e5, n = a * (c ?? 5e4) / 1e5, l = i + (o - e) / 2;
			t.rect(r + a - n, l, n, e), t.moveTo(r + a - n, i), t.lineTo(r, f), t.lineTo(r + a - n, i + o), t.closePath();
			break;
		}
		case "uparrowcallout": {
			let e = a * (s ?? 5e4) / 1e5, n = o * (c ?? 5e4) / 1e5, l = r + (a - e) / 2;
			t.rect(l, i + n, e, o - n), t.moveTo(r, i + n), t.lineTo(d, i), t.lineTo(r + a, i + n), t.closePath();
			break;
		}
		case "downarrowcallout": {
			let e = a * (s ?? 5e4) / 1e5, n = o * (c ?? 5e4) / 1e5, l = r + (a - e) / 2;
			t.rect(l, i, e, o - n), t.moveTo(r, i + o - n), t.lineTo(d, i + o), t.lineTo(r + a, i + o - n), t.closePath();
			break;
		}
		case "leftrightarrowcallout": {
			let e = o * (s ?? 5e4) / 1e5, n = a * (c ?? 25e3) / 1e5, l = i + (o - e) / 2;
			t.rect(r + n, l, a - 2 * n, e), t.moveTo(r + n, i), t.lineTo(r, f), t.lineTo(r + n, i + o), t.closePath(), t.moveTo(r + a - n, i), t.lineTo(r + a, f), t.lineTo(r + a - n, i + o), t.closePath();
			break;
		}
		case "leftrightuparrow": {
			let e = a * (s ?? 25e3) / 1e5, n = o * (c ?? 3e4) / 1e5, l = r + (a - e) / 2;
			t.moveTo(d, i), t.lineTo(r + a, i + n), t.lineTo(l + e, i + n), t.lineTo(l + e, i + o), t.lineTo(l, i + o), t.lineTo(l, i + n), t.lineTo(r, i + n), t.closePath();
			break;
		}
		case "uturnarrow": {
			let e = a * (s ?? 25e3) / 1e5, n = (a - e) / 2, c = Math.max(0, n - e), l = r + e + n, u = i + e + n, d = e * 2, f = i + o - e * 2.5;
			t.moveTo(r, i + o), t.lineTo(r, u), t.arc(l, u, n, Math.PI, 0), t.lineTo(r + a, f), t.lineTo(r + a + (d - e) / 2, f), t.lineTo(l + e / 2, i + o), t.lineTo(r + a - (d - e) / 2 - e, f), t.lineTo(r + a - e, f), t.lineTo(r + a - e, u), t.arc(l, u, c, 0, Math.PI, !0), t.lineTo(r + e, i + o), t.closePath();
			break;
		}
		case "bentarrow":
		case "bentuparrow": {
			let e = Math.min(a, o) * .25;
			t.moveTo(r, f - e / 2), t.lineTo(r + a - e * 2, f - e / 2), t.lineTo(r + a - e * 2, i + e), t.lineTo(r + a, f), t.lineTo(r + a - e * 2, i + o - e), t.lineTo(r + a - e * 2, f + e / 2), t.lineTo(r, f + e / 2), t.closePath();
			break;
		}
		case "plus": {
			let e = Math.min(a, o) * (s ?? 25e3) / 1e5;
			t.rect(d - e, i, 2 * e, o), t.rect(r, f - e, a, 2 * e);
			break;
		}
		case "mathnotequal": {
			let e = Math.min(5e4, Math.max(0, s ?? 23520)), n = Math.min(66e5, Math.max(42e5, c ?? 66e5)), r = Math.min(1e5 - 2 * e, Math.max(0, l ?? 11760)), u = o * e / 1e5, p = o * r / 2e5, m = a * 73490 / 2e5, h = o / 2, g = (n / 6e4 - 90) * Math.PI / 180, _ = h * Math.tan(g), v = Math.hypot(_, h) * u / h;
			t.rect(d - m, f - p - u, 2 * m, u), t.rect(d - m, f + p, 2 * m, u), t.moveTo(d + _ - v / 2, i), t.lineTo(d + _ + v / 2, i), t.lineTo(d - _ + v / 2, i + o), t.lineTo(d - _ - v / 2, i + o), t.closePath();
			break;
		}
		case "flowchartdelay": {
			let e = o / 2;
			t.moveTo(r, i), t.lineTo(r + a - e, i), t.arc(r + a - e, f, e, -Math.PI / 2, Math.PI / 2), t.lineTo(r, i + o), t.closePath();
			break;
		}
		case "flowchartdisplay": {
			let e = a * .2, n = a * .15;
			t.moveTo(r + e, i), t.lineTo(r + a - n, i), t.arc(r + a - n, f, o / 2, -Math.PI / 2, Math.PI / 2), t.lineTo(r + e, i + o), t.lineTo(r, f), t.closePath();
			break;
		}
		case "flowchartpunchedcard": {
			let e = a * .2;
			t.moveTo(r + e, i), t.lineTo(r + a, i), t.lineTo(r + a - e, i + o), t.lineTo(r, i + o), t.closePath();
			break;
		}
		case "flowchartoffpageconnector": {
			let e = o * .3;
			t.moveTo(r, i), t.lineTo(r + a, i), t.lineTo(r + a, i + o - e), t.lineTo(d, i + o), t.lineTo(r, i + o - e), t.closePath();
			break;
		}
		case "flowchartonlinestorage":
		case "flowchartmanuallabel":
		case "flowchartpuncheddisk":
			t.rect(r, i, a, o);
			break;
		case "horizontalscroll": {
			let e = Math.min(a, o) * .15;
			t.roundRect(r + e, i, a - e, o, e), t.moveTo(r + e, i + e * 2), t.arc(r + e, i + e, e, Math.PI / 2, Math.PI * 2.5);
			break;
		}
		case "verticalscroll": {
			let e = Math.min(a, o) * .15;
			t.roundRect(r, i + e, a, o - e, e), t.moveTo(r + e * 2, i + e), t.arc(r + e, i + e, e, 0, Math.PI * 2);
			break;
		}
		case "ribbon": {
			let e = Math.min(33333, Math.max(0, s ?? 16667)), n = a * Math.min(75e3, Math.max(25e3, c ?? 5e4)) / 2e5, l = a / 8, u = a / 32, d = a / 2 - n, f = a / 2 + n, p = d + u, m = f - u, h = d + l, g = f - l, _ = h - u, v = g + u, y = a - l, b = o * e / 2e5, x = o * e / 1e5, S = o - x, C = S / 2;
			t.moveTo(r, i), t.lineTo(r + _, i), t.lineTo(r + p, i + b), t.lineTo(r + m, i + x), t.lineTo(r + v, i + b), t.lineTo(r + a, i), t.lineTo(r + y, i + C), t.lineTo(r + a, i + S), t.lineTo(r + f, i + S), t.lineTo(r + f, i + o), t.lineTo(r + p, i + o), t.lineTo(r + d, i + S), t.lineTo(r, i + S), t.lineTo(r + l, i + C), t.closePath();
			break;
		}
		case "ribbon2": {
			let e = Math.min(33333, Math.max(0, s ?? 16667)), n = a * Math.min(75e3, Math.max(25e3, c ?? 5e4)) / 2e5, l = a / 8, u = a / 32, d = a / 2 - n, f = a / 2 + n, p = d + u, m = f - u, h = d + l, g = f - l, _ = h - u, v = g + u, y = a - l, b = o * e / 2e5, x = o * e / 1e5, S = o - b, C = o - x, w = x, T = (w + o) / 2;
			t.moveTo(r, i + o), t.lineTo(r + _, i + o), t.lineTo(r + p, i + S), t.lineTo(r + m, i + C), t.lineTo(r + v, i + S), t.lineTo(r + a, i + o), t.lineTo(r + y, i + T), t.lineTo(r + a, i + w), t.lineTo(r + f, i + w), t.lineTo(r + f, i), t.lineTo(r + p, i), t.lineTo(r + d, i + w), t.lineTo(r, i + w), t.lineTo(r + l, i + T), t.closePath();
			break;
		}
		case "ellipseribbon": {
			let e = Math.min(1e5, Math.max(0, s ?? 25e3)), n = Math.min(75e3, Math.max(25e3, c ?? 5e4)), u = Math.max(0, e - (1e5 - e) / 2), d = Math.min(e, Math.max(u, l ?? 12500)), f = a / 8, p = a * n / 2e5, m = a / 2 - p, h = m + f, g = a - h, _ = a - m, v = a - f, y = o * d / 1e5, b = 4 * y / a, x = b * (h - h * h / a), S = h / 2, C = b * S, w = a - S, T = o * e / 1e5, E = T - y, D = b * (m - m * m / a), O = D + E, k = y + E - O + y + E, A = o - T, j = (y * 14 / 16 + A) / 2, M = D + A, N = O + A, P = m / 2, F = b * P + A, I = a - P, L = k + A;
			t.moveTo(r, i), t.quadraticCurveTo(r + S, i + C, r + h, i + x), t.lineTo(r + m, i + O), t.quadraticCurveTo(r + a / 2, i + k, r + _, i + O), t.lineTo(r + g, i + x), t.quadraticCurveTo(r + w, i + C, r + a, i), t.lineTo(r + v, i + j), t.lineTo(r + a, i + A), t.quadraticCurveTo(r + I, i + F, r + _, i + M), t.lineTo(r + _, i + N), t.quadraticCurveTo(r + a / 2, i + L, r + m, i + N), t.lineTo(r + m, i + M), t.quadraticCurveTo(r + P, i + F, r, i + A), t.lineTo(r + f, i + j), t.closePath();
			break;
		}
		case "ellipseribbon2": {
			let e = Math.min(1e5, Math.max(0, s ?? 25e3)), n = Math.min(75e3, Math.max(25e3, c ?? 5e4)), u = Math.max(0, e - (1e5 - e) / 2), d = Math.min(e, Math.max(u, l ?? 12500)), f = a / 8, p = a * n / 2e5, m = a / 2 - p, h = m + f, g = a - h, _ = a - m, v = a - f, y = o * d / 1e5, b = 4 * y / a, x = o - b * (h - h * h / a), S = h / 2, C = o - b * S, w = a - S, T = o * e / 1e5, E = T - y, D = b * (m - m * m / a), O = D + E, k = o - O, A = y + E - O + y + E, j = o - A, M = o - T, N = o - (y * 14 / 16 + M) / 2, P = o - (D + M), F = o - (O + M), I = m / 2, L = o - (b * I + M), R = a - I, z = o - (A + M);
			t.moveTo(r, i + o), t.quadraticCurveTo(r + S, i + C, r + h, i + x), t.lineTo(r + m, i + k), t.quadraticCurveTo(r + a / 2, i + j, r + _, i + k), t.lineTo(r + g, i + x), t.quadraticCurveTo(r + w, i + C, r + a, i + o), t.lineTo(r + v, i + N), t.lineTo(r + a, i + T), t.quadraticCurveTo(r + R, i + L, r + _, i + P), t.lineTo(r + _, i + F), t.quadraticCurveTo(r + a / 2, i + z, r + m, i + F), t.lineTo(r + m, i + P), t.quadraticCurveTo(r + I, i + L, r, i + T), t.lineTo(r + f, i + N), t.closePath();
			break;
		}
		case "circulararrow": {
			let e = (c ?? 0) / 6e4 * Math.PI / 180, n = (s ?? 162e5) / 6e4 * Math.PI / 180, r = (l ?? 5e4) / 1e5, i = Math.min(a, o) / 2, u = i * (1 - r), p = (i + u) / 2, m = i - u, h = e + n;
			t.arc(d, f, i, e, h, !1), t.arc(d, f, u, h, e, !0), t.closePath();
			let g = Math.sin(h), _ = -Math.cos(h), v = m * 1.5, y = d + p * Math.cos(h) + v * g, b = f + p * Math.sin(h) + v * _;
			t.moveTo(y, b), t.lineTo(d + i * Math.cos(h), f + i * Math.sin(h)), t.lineTo(d + u * Math.cos(h), f + u * Math.sin(h)), t.closePath();
			break;
		}
		case "curvedrightarrow": {
			let e = Math.min(a, o), n = o / 2, u = 5e4 * o / e, d = Math.min(u, Math.max(0, c ?? 5e4)), f = e * Math.min(d, Math.max(0, s ?? 25e3)) / 1e5, p = e * d / 1e5, m = n - (f + p) / 4, h = (2 * m) ** 2 - f ** 2, g = 1e5 * (Math.sqrt(Math.max(0, h)) * a / (2 * m)) / e, _ = e * Math.min(g, Math.max(0, l ?? 25e3)) / 1e5, v = Math.sqrt(Math.max(0, a * a - _ * _)) * m / a, y = m + f, b = m + v, x = y + v, S = (p - f) / 2, C = b - S, w = x + S, T = o - p / 2, D = a - _, O = Math.atan2(_, v), k = -O, A = Math.PI - O;
			t.moveTo(r, i + m), E(t, r, i + m, a, m, Math.PI, k), t.lineTo(r + D, i + C), t.lineTo(r + a, i + T), t.lineTo(r + D, i + w), t.lineTo(r + D, i + x), E(t, r + D, i + x, a, m, A, O), t.closePath();
			break;
		}
		case "curvedleftarrow": {
			let e = Math.min(a, o), n = o / 2, u = 5e4 * o / e, d = Math.min(u, Math.max(0, c ?? 5e4)), f = e * Math.min(d, Math.max(0, s ?? 25e3)) / 1e5, p = e * d / 1e5, m = n - (f + p) / 4, h = (2 * m) ** 2 - f ** 2, g = Math.sqrt(Math.max(0, h)) * a / (2 * m), _ = 1e5 * g / e, v = e * Math.min(_, Math.max(0, l ?? 25e3)) / 1e5, y = Math.sqrt(Math.max(0, a * a - v * v)) * m / a, b = m + f, x = m + y, S = b + y, C = (p - f) / 2, w = x - C, T = S + C, D = o - p / 2, O = v, k = Math.atan2(v, y), A = f / 2, j = Math.atan2(A, g), M = j - k, N = k - j, P = -j;
			t.moveTo(r, i + D), t.lineTo(r + O, i + w), t.lineTo(r + O, i + x);
			let F = E(t, r + O, i + x, a, m, k, M);
			E(t, F.x, F.y, a, m, P, N), t.lineTo(r + O, i + T), t.closePath();
			break;
		}
		case "curveduparrow": {
			let e = Math.min(a, o), n = a / 2, u = 5e4 * a / e, d = Math.min(u, Math.max(0, c ?? 5e4)), f = e * Math.min(1e5, Math.max(0, s ?? 25e3)) / 1e5, p = e * d / 1e5, m = n - (f + p) / 4, h = (2 * m) ** 2 - f ** 2, g = Math.sqrt(Math.max(0, h)) * o / (2 * m), _ = 1e5 * g / e, v = e * Math.min(_, Math.max(0, l ?? 25e3)) / 1e5, y = Math.sqrt(Math.max(0, o * o - v * v)) * m / o, b = m + f, x = m + y, S = b + y, C = (p - f) / 2, w = x - C, T = S + C, D = a - p / 2, O = v, k = Math.atan2(v, y), A = f / 2, j = Math.atan2(A, g), M = j - k, N = k - j, P = Math.PI / 2 - k, F = Math.PI / 2 - j;
			t.moveTo(r + D, i), t.lineTo(r + T, i + O), t.lineTo(r + S, i + O);
			let I = E(t, r + S, i + O, m, o, P, N);
			E(t, I.x, I.y, m, o, F, M), t.lineTo(r + w, i + O), t.closePath();
			break;
		}
		case "curveddownarrow": {
			let e = Math.min(a, o), n = a / 2, u = 5e4 * a / e, d = Math.min(u, Math.max(0, c ?? 5e4)), f = e * Math.min(1e5, Math.max(0, s ?? 25e3)) / 1e5, p = e * d / 1e5, m = n - (f + p) / 4, h = (2 * m) ** 2 - f ** 2, g = Math.sqrt(Math.max(0, h)) * o / (2 * m), _ = 1e5 * g / e, v = e * Math.min(_, Math.max(0, l ?? 25e3)) / 1e5, y = Math.sqrt(Math.max(0, o * o - v * v)) * m / o, b = m + f, x = m + y, S = b + y, C = (p - f) / 2, w = x - C, T = S + C, D = a - p / 2, O = o - v, k = Math.atan2(v, y), A = f / 2, j = Math.atan2(A, g), M = 3 * Math.PI / 2 + k;
			3 * Math.PI / 2 - j, j - Math.PI / 2, Math.PI / 2 - j, t.moveTo(r + D, i + o), t.lineTo(r + w, i + O), t.lineTo(r + x, i + O), E(t, r + x, i + O, m, o, M, -k), t.lineTo(r + b, i), E(t, r + b, i, m, o, 3 * Math.PI / 2, k), t.lineTo(r + T, i + O), t.closePath();
			break;
		}
		case "stripedrightarrow": {
			let e = Math.min(a, o), n = e / 32, l = e / 16, u = e / 8, d = e * (s ?? 5e4) / 1e5, p = a * (c ?? 5e4) / 1e5, m = f - d / 2, h = f + d / 2, g = r + a - p;
			t.rect(r, m, n, d), t.rect(r + l, m, l, d), t.rect(r + u, m, u, d), t.moveTo(g, m), t.lineTo(g, i), t.lineTo(r + a, f), t.lineTo(g, i + o), t.lineTo(g, h), t.lineTo(r + u * 2, h), t.lineTo(r + u * 2, m), t.closePath();
			break;
		}
		case "flowchartmagneticdisk": {
			let e = o * .15;
			t.moveTo(r, i + e), t.ellipse(d, i + e, a / 2, e, 0, Math.PI, 0), t.lineTo(r + a, i + o - e), t.ellipse(d, i + o - e, a / 2, e, 0, 0, Math.PI), t.lineTo(r, i + e), t.closePath(), t.moveTo(r + a, i + e), t.ellipse(d, i + e, a / 2, e, 0, 0, Math.PI);
			break;
		}
		case "flowchartmagneticdrum": {
			let e = a * .15;
			t.moveTo(r + e, i), t.lineTo(r + a, i), t.lineTo(r + a, i + o), t.lineTo(r + e, i + o), t.ellipse(r + e, f, e, o / 2, 0, Math.PI / 2, -Math.PI / 2, !0), t.closePath(), t.moveTo(r + a, i), t.ellipse(r + a, f, e, o / 2, 0, -Math.PI / 2, Math.PI / 2);
			break;
		}
		case "flowchartmagnetictape": {
			let e = Math.min(a, o) / 2, n = d + e * .5;
			t.moveTo(d, i + o), t.arc(d, f, e, Math.PI / 2, Math.PI / 2 + Math.PI * 2 * .875), t.lineTo(n, f + e * .5), t.lineTo(n, i + o), t.closePath();
			break;
		}
		case "flowchartpunchedtape": {
			let e = o * .12;
			t.moveTo(r, i), t.lineTo(r + a, i), t.lineTo(r + a, i + o - e), t.bezierCurveTo(r + a * .75, i + o, r + a * .25, i + o - e * 2, r, i + o - e), t.closePath(), t.moveTo(r, i + e), t.bezierCurveTo(r + a * .25, i, r + a * .75, i + e * 2, r + a, i + e);
			break;
		}
		case "flowchartmanualoperation": {
			let e = a * .15;
			t.moveTo(r + e, i), t.lineTo(r + a - e, i), t.lineTo(r + a, i + o), t.lineTo(r, i + o), t.closePath();
			break;
		}
		case "flowchartmultidocument": {
			let e = o * .1, n = a * .04;
			t.rect(r + n * 2, i - o * .08, a - n * 2, o * .1), t.rect(r + n, i - o * .04, a - n, o * .06), t.moveTo(r, i), t.lineTo(r + a, i), t.lineTo(r + a, i + o - e), t.bezierCurveTo(r + a * .75, i + o, r + a * .25, i + o - e * 2, r, i + o - e), t.closePath();
			break;
		}
		case "rttriangle":
			t.moveTo(r, i), t.lineTo(r, i + o), t.lineTo(r + a, i + o), t.closePath();
			break;
		default:
			t.rect(r, i, a, o);
			break;
	}
}
//#endregion
//#region packages/core/src/shape/arrow.ts
function M(e, t, n) {
	let r = Math.max(.5, t.width * n), i = e.w === "sm" ? 4 : e.w === "lg" ? 8 : 6, a = e.len === "sm" ? 4 : e.len === "lg" ? 8 : 6;
	return {
		lw: r,
		halfW: r * i / 2,
		len: r * a
	};
}
var N = new Set([
	"triangle",
	"stealth",
	"diamond",
	"oval"
]);
function P(e, t, n) {
	return N.has(e.type) ? M(e, t, n).len : 0;
}
function F(e, t, n) {
	if (e.type === "none") return 0;
	let { lw: r, halfW: i, len: a } = M(e, t, n);
	return Math.max(a, i) + r / 2;
}
function I(e, t, n) {
	if (n <= 0) return {
		x: e.x,
		y: e.y
	};
	let r = t.x - e.x, i = t.y - e.y, a = Math.hypot(r, i);
	if (a < 1e-9) return {
		x: e.x,
		y: e.y
	};
	let o = Math.min(n, a) / a;
	return {
		x: e.x + r * o,
		y: e.y + i * o
	};
}
function L(e, t, n, r, a, o, s, c) {
	if (a.type === "none") return;
	let { lw: l, halfW: u, len: d } = M(a, o, s), f = c ?? i(o.color);
	switch (e.save(), e.translate(t, n), e.rotate(r), e.fillStyle = f, e.strokeStyle = f, e.lineWidth = l, e.setLineDash([]), e.beginPath(), a.type) {
		case "triangle":
		case "stealth":
			e.moveTo(0, 0), e.lineTo(-d, -u), e.lineTo(-d, u), e.closePath(), e.fill();
			break;
		case "arrow":
			e.lineCap = "round", e.lineJoin = "round", e.moveTo(-d, -u), e.lineTo(0, 0), e.lineTo(-d, u), e.stroke();
			break;
		case "diamond":
			e.moveTo(0, 0), e.lineTo(-d / 2, -u), e.lineTo(-d, 0), e.lineTo(-d / 2, u), e.closePath(), e.fill();
			break;
		case "oval":
			e.ellipse(-d / 2, 0, d / 2, u, 0, 0, Math.PI * 2), e.fill();
			break;
	}
	e.restore();
}
//#endregion
//#region packages/core/src/text/line-distribute.ts
var R = (e) => e === 32 || e === 12288;
function z(e, i, a = {}) {
	if (Math.abs(i) <= .5) return null;
	let o = a.firstContentSi ?? 0, s = a.lastDrawnSi ?? e.length - 1, c = a.minPerGap ?? -Infinity, l = a.isGapChar ?? n, u = a.isWhitespace ?? R, d = a.seaClusterGaps ?? !1, f = [];
	for (let t = o; t < e.length; t++) {
		let n = e[t];
		if (n === void 0) continue;
		if (n.text === void 0) {
			f.push({
				si: t,
				off: 0,
				ws: !1
			});
			continue;
		}
		let r = 0;
		for (let e of n.text) {
			let n = e.codePointAt(0);
			f.push({
				si: t,
				off: r,
				cp: n,
				ws: u(n)
			}), r++;
		}
	}
	let p = -1, m = -1;
	for (let e = 0; e < f.length; e++) f[e].ws || (p === -1 && (p = e), m = e);
	if (p === -1 || p === m) return null;
	let h = Array(f.length).fill(!1), g = 0;
	for (let e = p; e < m; e++) {
		let n = f[e];
		if (n.si === s) continue;
		if (n.ws) {
			h[e] = !0, g++;
			continue;
		}
		let i = f[e + 1];
		if (i.ws) continue;
		let a = n.cp, o = i.cp;
		(a !== void 0 && l(a) || o !== void 0 && l(o) || d && a !== void 0 && o !== void 0 && r(a) && r(o) && !t(o)) && (h[e] = !0, g++);
	}
	if (g === 0) return null;
	let _ = i / g;
	i < 0 && _ < c && (_ = c);
	let v = /* @__PURE__ */ new Map();
	for (let e of f) e.cp !== void 0 && v.set(e.si, (v.get(e.si) ?? 0) + 1);
	let y = /* @__PURE__ */ new Map();
	for (let e = 0; e < f.length; e++) {
		if (!h[e]) continue;
		let t = f[e], n = y.get(t.si);
		n || (n = {
			splitBefore: [],
			trailingGap: !1,
			internalStretch: 0
		}, y.set(t.si, n));
		let r = v.get(t.si) ?? 0;
		t.cp === void 0 || t.off === r - 1 ? n.trailingGap = !0 : (n.splitBefore.push(t.off + 1), n.internalStretch += _);
	}
	return {
		perGap: _,
		perSeg: y
	};
}
//#endregion
export { I as a, m as c, u as d, f, P as i, p as l, L as n, j as o, F as r, C as s, z as t, d as u };
