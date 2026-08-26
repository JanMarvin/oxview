//#region packages/core/src/layout/virtual-scroll.ts
function e(e, t, n) {
	return e < t ? t : e > n ? n : e;
}
function t(e, t, n) {
	let r = e.length;
	if (r === 0) return {
		offsets: [],
		totalHeight: 0
	};
	let i = n?.leading ?? 0, a = n?.trailing ?? 0, o = Array(r), s = 0;
	for (let n = 0; n < r; n++) o[n] = i + s + n * t, s += e[n];
	return {
		offsets: o,
		totalHeight: i + s + (r - 1) * t + a
	};
}
function n(t, n, r, i) {
	let a = t.offsets, o = a.length;
	if (o === 0) return {
		start: 0,
		end: -1,
		topIndex: 0,
		offsets: a,
		totalHeight: 0
	};
	let s = 0, c = o;
	for (; s < c;) {
		let e = s + c >>> 1;
		a[e] <= n ? s = e + 1 : c = e;
	}
	let l = e(s - 1, 0, o - 1), u = n + r;
	for (s = 0, c = o; s < c;) {
		let e = s + c >>> 1;
		a[e] < u ? s = e + 1 : c = e;
	}
	let d = e(s - 1, 0, o - 1);
	return {
		start: e(l - i, 0, o - 1),
		end: e(d + i, 0, o - 1),
		topIndex: l,
		offsets: a,
		totalHeight: t.totalHeight
	};
}
function r(t, n, r, i, a, o, s) {
	if (t === 0) return {
		start: 0,
		end: -1,
		topIndex: 0,
		totalHeight: 0
	};
	let c = s?.leading ?? 0, l = s?.trailing ?? 0, u = n + r, d = e(i < c ? 0 : u > 0 ? Math.floor((i - c) / u) : t - 1, 0, t - 1), f = i + a, p = e(f <= c ? 0 : u > 0 ? Math.ceil((f - c) / u) - 1 : t - 1, 0, t - 1);
	return {
		start: e(d - o, 0, t - 1),
		end: e(p + o, 0, t - 1),
		topIndex: d,
		totalHeight: c + t * n + (t - 1) * r + l
	};
}
//#endregion
//#region packages/core/src/internal/comment-context.ts
var i = 65536;
function a(e, t) {
	let n = Math.min(e.length, t);
	if (n > 0 && n < e.length) {
		let t = e.charCodeAt(n - 1), r = e.charCodeAt(n);
		t >= 55296 && t <= 56319 && r >= 56320 && r <= 57343 && n--;
	}
	return e.slice(0, n);
}
function o(e) {
	if (e !== void 0 && (!Number.isFinite(e) || e < 0)) throw RangeError("maxTextCharacters must be a finite non-negative number.");
	return Math.min(i, Math.floor(e ?? 65536));
}
function s(e, t, n) {
	let r = o(n), i = 0, s = !1, c = (e) => {
		let t = a(e.text, Math.max(0, r - i));
		return i += t.length, t.length < e.text.length && (s = !0), {
			...e,
			text: t
		};
	}, l = Object.freeze({
		root: Object.freeze(c(e)),
		replies: Object.freeze(t.map((e) => Object.freeze(c(e))))
	});
	return Object.freeze({
		thread: l,
		truncated: s,
		textCharacters: i,
		maxTextCharacters: r
	});
}
//#endregion
//#region packages/core/src/internal/dom-interaction-boundary.ts
function c(e, t) {
	return e.dataset?.[t] !== void 0;
}
function l(e, t, n) {
	let r = typeof e.composedPath == "function" ? e.composedPath() : [];
	if (r.length > 0) {
		let e = !1;
		for (let i of r) {
			if (i === t) return e;
			c(i, n) && (e = !0);
		}
	}
	let i = e.target;
	if (!i || !t.contains(i)) return !1;
	let a = i;
	for (; a;) {
		if (c(a, n)) return !0;
		if (a === t) break;
		a = a.parentElement;
	}
	return !1;
}
//#endregion
export { t as a, n as i, s as n, r, l as t };
