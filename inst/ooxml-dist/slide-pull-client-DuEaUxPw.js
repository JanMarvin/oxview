import { $ as e, A as t, At as n, Bt as r, Ct as i, E as a, Et as o, Ft as s, It as c, Jt as l, K as u, Lt as d, Mt as f, Nt as p, O as m, Ot as h, Pt as g, Q as _, Rt as v, S as y, St as b, T as x, Ut as S, Vt as C, Yt as w, Z as T, _ as E, a as D, b as O, bt as k, c as A, d as j, et as M, f as N, ft as P, h as F, ht as I, j as L, jt as R, k as z, kt as B, l as V, lt as H, m as ee, mt as U, n as W, nt as te, o as G, ot as K, p as q, rt as J, sn as ne, st as re, t as ie, tt as ae, u as oe, vt as se, wt as ce, x as le, xt as ue, yt as de, zt as fe } from "./hyperlink-enyPbflR.js";
import { a as pe, c as me, d as he, f as ge, i as _e, l as ve, o as ye, p as be, r as xe, s as Se, t as Ce, u as we } from "./line-distribute-BFB575d6.js";
import { A as Te, D as Ee, S as De, _ as Oe, h as ke, hn as Ae, in as je, j as Me, on as Ne, sn as Pe, v as Fe, w as Ie } from "./plot-area-frame-D5hEOgkJ.js";
import { l as Le } from "./pixel-budget-Dgjw269h.js";
import { r as Y } from "./units-EJdC96r6.js";
import { A as Re, F as ze, I as Be, L as Ve, M as He, N as Ue, P as We, j as Ge } from "./three-d-YYghQndN.js";
import { k as Ke } from "./renderer-XFSCOT6m.js";
import { s as qe } from "./raster-target-ojDdQizC.js";
import { a as Je, i as Ye, n as Xe, t as Ze } from "./resource-measurement-Do07ZRcR.js";
//#region packages/pptx/src/types.ts
function Qe(e) {
	return e;
}
var $e = {
	textarchdown: {
		adj: [["adj", "val 0"]],
		gd: [
			["adval", "pin 0 adj 21599999"],
			["v1", "+- 10800000 0 adval"],
			["v2", "+- 32400000 0 adval"],
			["nv1", "+- 0 0 v1"],
			["stAng", "?: nv1 v2 v1"],
			["w1", "+- 5400000 0 adval"],
			["w2", "+- 16200000 0 adval"],
			["d1", "+- adval 0 stAng"],
			["d2", "+- d1 0 21600000"],
			["v3", "+- 0 0 10800000"],
			["c2", "?: w2 d1 d2"],
			["c1", "?: v1 d2 c2"],
			["c0", "?: w1 d1 c1"],
			["swAng", "?: stAng c0 v3"],
			["wt1", "sin wd2 adj"],
			["ht1", "cos hd2 adj"],
			["dx1", "cat2 wd2 ht1 wt1"],
			["dy1", "sat2 hd2 ht1 wt1"],
			["x1", "+- hc dx1 0"],
			["y1", "+- vc dy1 0"],
			["wt2", "sin wd2 stAng"],
			["ht2", "cos hd2 stAng"],
			["dx2", "cat2 wd2 ht2 wt2"],
			["dy2", "sat2 hd2 ht2 wt2"],
			["x2", "+- hc dx2 0"],
			["y2", "+- vc dy2 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"x2",
				"y2"
			], [
				"a",
				"wd2",
				"hd2",
				"stAng",
				"swAng"
			]]
		}]
	},
	textarchdownpour: {
		adj: [["adj1", "val 0"], ["adj2", "val 25000"]],
		gd: [
			["adval", "pin 0 adj1 21599999"],
			["v1", "+- 10800000 0 adval"],
			["v2", "+- 32400000 0 adval"],
			["nv1", "+- 0 0 v1"],
			["stAng", "?: nv1 v2 v1"],
			["w1", "+- 5400000 0 adval"],
			["w2", "+- 16200000 0 adval"],
			["d1", "+- adval 0 stAng"],
			["d2", "+- d1 0 21600000"],
			["v3", "+- 0 0 10800000"],
			["c2", "?: w2 d1 d2"],
			["c1", "?: v1 d2 c2"],
			["c0", "?: w1 d1 c1"],
			["swAng", "?: stAng c0 v3"],
			["wt1", "sin wd2 stAng"],
			["ht1", "cos hd2 stAng"],
			["dx1", "cat2 wd2 ht1 wt1"],
			["dy1", "sat2 hd2 ht1 wt1"],
			["x1", "+- hc dx1 0"],
			["y1", "+- vc dy1 0"],
			["adval2", "pin 0 adj2 99000"],
			["ratio", "*/ adval2 1 100000"],
			["iwd2", "*/ wd2 ratio 1"],
			["ihd2", "*/ hd2 ratio 1"],
			["wt2", "sin iwd2 adval"],
			["ht2", "cos ihd2 adval"],
			["dx2", "cat2 iwd2 ht2 wt2"],
			["dy2", "sat2 ihd2 ht2 wt2"],
			["x2", "+- hc dx2 0"],
			["y2", "+- vc dy2 0"],
			["wt3", "sin iwd2 stAng"],
			["ht3", "cos ihd2 stAng"],
			["dx3", "cat2 iwd2 ht3 wt3"],
			["dy3", "sat2 ihd2 ht3 wt3"],
			["x3", "+- hc dx3 0"],
			["y3", "+- vc dy3 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"x3",
				"y3"
			], [
				"a",
				"iwd2",
				"ihd2",
				"stAng",
				"swAng"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
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
	textarchup: {
		adj: [["adj", "val cd2"]],
		gd: [
			["adval", "pin 0 adj 21599999"],
			["v1", "+- 10800000 0 adval"],
			["v2", "+- 32400000 0 adval"],
			["end", "?: v1 v1 v2"],
			["w1", "+- 5400000 0 adval"],
			["w2", "+- 16200000 0 adval"],
			["d1", "+- end 0 adval"],
			["d2", "+- 21600000 d1 0"],
			["c2", "?: w2 d1 d2"],
			["c1", "?: v1 d2 c2"],
			["swAng", "?: w1 d1 c1"],
			["wt1", "sin wd2 adj"],
			["ht1", "cos hd2 adj"],
			["dx1", "cat2 wd2 ht1 wt1"],
			["dy1", "sat2 hd2 ht1 wt1"],
			["x1", "+- hc dx1 0"],
			["y1", "+- vc dy1 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
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
				"adval",
				"swAng"
			]]
		}]
	},
	textarchuppour: {
		adj: [["adj1", "val cd2"], ["adj2", "val 50000"]],
		gd: [
			["adval", "pin 0 adj1 21599999"],
			["v1", "+- 10800000 0 adval"],
			["v2", "+- 32400000 0 adval"],
			["end", "?: v1 v1 v2"],
			["w1", "+- 5400000 0 adval"],
			["w2", "+- 16200000 0 adval"],
			["d1", "+- end 0 adval"],
			["d2", "+- 21600000 d1 0"],
			["c2", "?: w2 d1 d2"],
			["c1", "?: v1 d2 c2"],
			["swAng", "?: w1 d1 c1"],
			["wt1", "sin wd2 adval"],
			["ht1", "cos hd2 adval"],
			["dx1", "cat2 wd2 ht1 wt1"],
			["dy1", "sat2 hd2 ht1 wt1"],
			["x1", "+- hc dx1 0"],
			["y1", "+- vc dy1 0"],
			["adval2", "pin 0 adj2 99000"],
			["ratio", "*/ adval2 1 100000"],
			["iwd2", "*/ wd2 ratio 1"],
			["ihd2", "*/ hd2 ratio 1"],
			["wt2", "sin iwd2 adval"],
			["ht2", "cos ihd2 adval"],
			["dx2", "cat2 iwd2 ht2 wt2"],
			["dy2", "sat2 ihd2 ht2 wt2"],
			["x2", "+- hc dx2 0"],
			["y2", "+- vc dy2 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
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
				"adval",
				"swAng"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"x2",
				"y2"
			], [
				"a",
				"iwd2",
				"ihd2",
				"adval",
				"swAng"
			]]
		}]
	},
	textbutton: {
		adj: [["adj", "val 10800000"]],
		gd: [
			["adval", "pin 0 adj 21599999"],
			["bot", "+- 5400000 0 adval"],
			["lef", "+- 10800000 0 adval"],
			["top", "+- 16200000 0 adval"],
			["rig", "+- 21600000 0 adval"],
			["c3", "?: top adval 0"],
			["c2", "?: lef 10800000 c3"],
			["c1", "?: bot rig c2"],
			["stAng", "?: adval c1 0"],
			["w1", "+- 21600000 0 stAng"],
			["stAngB", "?: stAng w1 0"],
			["td1", "*/ bot 2 1"],
			["td2", "*/ top 2 1"],
			["ntd2", "+- 0 0 td2"],
			["w2", "+- 0 0 10800000"],
			["c6", "?: top ntd2 w2"],
			["c5", "?: lef 10800000 c6"],
			["c4", "?: bot td1 c5"],
			["v1", "?: adval c4 10800000"],
			["swAngT", "+- 0 0 v1"],
			["stT", "?: lef stAngB stAng"],
			["stB", "?: lef stAng stAngB"],
			["swT", "?: lef v1 swAngT"],
			["swB", "?: lef swAngT v1"],
			["wt1", "sin wd2 stT"],
			["ht1", "cos hd2 stT"],
			["dx1", "cat2 wd2 ht1 wt1"],
			["dy1", "sat2 hd2 ht1 wt1"],
			["x1", "+- hc dx1 0"],
			["y1", "+- vc dy1 0"],
			["wt2", "sin wd2 stB"],
			["ht2", "cos hd2 stB"],
			["dx2", "cat2 wd2 ht2 wt2"],
			["dy2", "sat2 hd2 ht2 wt2"],
			["x2", "+- hc dx2 0"],
			["y2", "+- vc dy2 0"],
			["wt3", "sin wd2 adj"],
			["ht3", "cos hd2 adj"],
			["dx3", "cat2 wd2 ht3 wt3"],
			["dy3", "sat2 hd2 ht3 wt3"],
			["x3", "+- hc dx3 0"],
			["y3", "+- vc dy3 0"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
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
					"stT",
					"swT"
				]]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"l",
					"vc"
				], [
					"l",
					"r",
					"vc"
				]]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"x2",
					"y2"
				], [
					"a",
					"wd2",
					"hd2",
					"stB",
					"swB"
				]]
			}
		]
	},
	textbuttonpour: {
		adj: [["adj1", "val cd2"], ["adj2", "val 50000"]],
		gd: [
			["adval", "pin 0 adj1 21599999"],
			["bot", "+- 5400000 0 adval"],
			["lef", "+- 10800000 0 adval"],
			["top", "+- 16200000 0 adval"],
			["rig", "+- 21600000 0 adval"],
			["c3", "?: top adval 0"],
			["c2", "?: lef 10800000 c3"],
			["c1", "?: bot rig c2"],
			["stAng", "?: adval c1 0"],
			["w1", "+- 21600000 0 stAng"],
			["stAngB", "?: stAng w1 0"],
			["td1", "*/ bot 2 1"],
			["td2", "*/ top 2 1"],
			["ntd2", "+- 0 0 td2"],
			["w2", "+- 0 0 10800000"],
			["c6", "?: top ntd2 w2"],
			["c5", "?: lef 10800000 c6"],
			["c4", "?: bot td1 c5"],
			["v1", "?: adval c4 10800000"],
			["swAngT", "+- 0 0 v1"],
			["stT", "?: lef stAngB stAng"],
			["stB", "?: lef stAng stAngB"],
			["swT", "?: lef v1 swAngT"],
			["swB", "?: lef swAngT v1"],
			["wt1", "sin wd2 stT"],
			["ht1", "cos hd2 stT"],
			["dx1", "cat2 wd2 ht1 wt1"],
			["dy1", "sat2 hd2 ht1 wt1"],
			["x1", "+- hc dx1 0"],
			["y1", "+- vc dy1 0"],
			["wt6", "sin wd2 stB"],
			["ht6", "cos hd2 stB"],
			["dx6", "cat2 wd2 ht6 wt6"],
			["dy6", "sat2 hd2 ht6 wt6"],
			["x6", "+- hc dx6 0"],
			["y6", "+- vc dy6 0"],
			["adval2", "pin 40000 adj2 99000"],
			["ratio", "*/ adval2 1 100000"],
			["iwd2", "*/ wd2 ratio 1"],
			["ihd2", "*/ hd2 ratio 1"],
			["wt2", "sin iwd2 stT"],
			["ht2", "cos ihd2 stT"],
			["dx2", "cat2 iwd2 ht2 wt2"],
			["dy2", "sat2 ihd2 ht2 wt2"],
			["x2", "+- hc dx2 0"],
			["y2", "+- vc dy2 0"],
			["wt5", "sin iwd2 stB"],
			["ht5", "cos ihd2 stB"],
			["dx5", "cat2 iwd2 ht5 wt5"],
			["dy5", "sat2 ihd2 ht5 wt5"],
			["x5", "+- hc dx5 0"],
			["y5", "+- vc dy5 0"],
			["d1", "+- hd2 0 ihd2"],
			["d12", "*/ d1 1 2"],
			["yu", "+- vc 0 d12"],
			["yd", "+- vc d12 0"],
			["v1", "*/ d12 d12 1"],
			["v2", "*/ ihd2 ihd2 1"],
			["v3", "*/ v1 1 v2"],
			["v4", "+- 1 0 v3"],
			["v5", "*/ iwd2 iwd2 1"],
			["v6", "*/ v4 v5 1"],
			["v7", "sqrt v6"],
			["xl", "+- hc 0 v7"],
			["xr", "+- hc v7 0"],
			["wtadj", "sin iwd2 adj1"],
			["htadj", "cos ihd2 adj1"],
			["dxadj", "cat2 iwd2 htadj wtadj"],
			["dyadj", "sat2 ihd2 htadj wtadj"],
			["xadj", "+- hc dxadj 0"],
			["yadj", "+- vc dyadj 0"]
		],
		paths: [
			{
				w: null,
				h: null,
				fill: null,
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
					"stT",
					"swT"
				]]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"x2",
					"y2"
				], [
					"a",
					"iwd2",
					"ihd2",
					"stT",
					"swT"
				]]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"xl",
					"yu"
				], [
					"l",
					"xr",
					"yu"
				]]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"xl",
					"yd"
				], [
					"l",
					"xr",
					"yd"
				]]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"x5",
					"y5"
				], [
					"a",
					"iwd2",
					"ihd2",
					"stB",
					"swB"
				]]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"x6",
					"y6"
				], [
					"a",
					"wd2",
					"hd2",
					"stB",
					"swB"
				]]
			}
		]
	},
	textcandown: {
		adj: [["adj", "val 14286"]],
		gd: [
			["a", "pin 0 adj 33333"],
			["dy", "*/ a h 100000"],
			["y0", "+- t dy 0"],
			["y1", "+- b 0 dy"],
			["ncd2", "*/ cd2 -1 1"]
		],
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
				"a",
				"wd2",
				"dy",
				"cd2",
				"ncd2"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y1"
			], [
				"a",
				"wd2",
				"dy",
				"cd2",
				"ncd2"
			]]
		}]
	},
	textcanup: {
		adj: [["adj", "val 85714"]],
		gd: [
			["a", "pin 66667 adj 100000"],
			["dy1", "*/ a h 100000"],
			["dy", "+- h 0 dy1"],
			["y0", "+- t dy1 0"],
			["y1", "+- t dy 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y1"
			], [
				"a",
				"wd2",
				"dy",
				"cd2",
				"cd2"
			]]
		}, {
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
				"a",
				"wd2",
				"dy",
				"cd2",
				"cd2"
			]]
		}]
	},
	textcascadedown: {
		adj: [["adj", "val 44444"]],
		gd: [
			["a", "pin 28570 adj 100000"],
			["dy", "*/ a h 100000"],
			["y1", "+- t dy 0"],
			["dy2", "+- h 0 dy"],
			["dy3", "*/ dy2 1 4"],
			["y2", "+- t dy3 0"]
		],
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
				"y2"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y1"
			], [
				"l",
				"r",
				"b"
			]]
		}]
	},
	textcascadeup: {
		adj: [["adj", "val 44444"]],
		gd: [
			["a", "pin 28570 adj 100000"],
			["dy", "*/ a h 100000"],
			["y1", "+- t dy 0"],
			["dy2", "+- h 0 dy"],
			["dy3", "*/ dy2 1 4"],
			["y2", "+- t dy3 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y2"
			], [
				"l",
				"r",
				"t"
			]]
		}, {
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
				"y1"
			]]
		}]
	},
	textchevron: {
		adj: [["adj", "val 25000"]],
		gd: [
			["a", "pin 0 adj 50000"],
			["y", "*/ a h 100000"],
			["y1", "+- t b y"]
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
					"y"
				],
				[
					"l",
					"hc",
					"t"
				],
				[
					"l",
					"r",
					"y"
				]
			]
		}, {
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
					"hc",
					"y1"
				],
				[
					"l",
					"r",
					"b"
				]
			]
		}]
	},
	textchevroninverted: {
		adj: [["adj", "val 75000"]],
		gd: [
			["a", "pin 50000 adj 100000"],
			["y", "*/ a h 100000"],
			["y1", "+- b 0 y"]
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
					"y1"
				],
				[
					"l",
					"r",
					"t"
				]
			]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"y"
				],
				[
					"l",
					"hc",
					"b"
				],
				[
					"l",
					"r",
					"y"
				]
			]
		}]
	},
	textcircle: {
		adj: [["adj", "val 10800000"]],
		gd: [
			["adval", "pin 0 adj 21599999"],
			["d0", "+- adval 0 10800000"],
			["d1", "+- 10800000 0 adval"],
			["d2", "+- 21600000 0 adval"],
			["d3", "?: d1 d1 10799999"],
			["d4", "?: d0 d2 d3"],
			["swAng", "*/ d4 2 1"],
			["wt1", "sin wd2 adj"],
			["ht1", "cos hd2 adj"],
			["dx1", "cat2 wd2 ht1 wt1"],
			["dy1", "sat2 hd2 ht1 wt1"],
			["x1", "+- hc dx1 0"],
			["y1", "+- vc dy1 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
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
				"adval",
				"swAng"
			]]
		}]
	},
	textcirclepour: {
		adj: [["adj1", "val cd2"], ["adj2", "val 50000"]],
		gd: [
			["adval", "pin 0 adj1 21599999"],
			["d0", "+- adval 0 10800000"],
			["d1", "+- 10800000 0 adval"],
			["d2", "+- 21600000 0 adval"],
			["d3", "?: d1 d1 10799999"],
			["d4", "?: d0 d2 d3"],
			["swAng", "*/ d4 2 1"],
			["wt1", "sin wd2 adval"],
			["ht1", "cos hd2 adval"],
			["dx1", "cat2 wd2 ht1 wt1"],
			["dy1", "sat2 hd2 ht1 wt1"],
			["x1", "+- hc dx1 0"],
			["y1", "+- vc dy1 0"],
			["adval2", "pin 0 adj2 99000"],
			["ratio", "*/ adval2 1 100000"],
			["iwd2", "*/ wd2 ratio 1"],
			["ihd2", "*/ hd2 ratio 1"],
			["wt2", "sin iwd2 adval"],
			["ht2", "cos ihd2 adval"],
			["dx2", "cat2 iwd2 ht2 wt2"],
			["dy2", "sat2 ihd2 ht2 wt2"],
			["x2", "+- hc dx2 0"],
			["y2", "+- vc dy2 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
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
				"adval",
				"swAng"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"x2",
				"y2"
			], [
				"a",
				"iwd2",
				"ihd2",
				"adval",
				"swAng"
			]]
		}]
	},
	textcurvedown: {
		adj: [["adj", "val 45977"]],
		gd: [
			["a", "pin 0 adj 56338"],
			["dy", "*/ a h 100000"],
			["gd1", "*/ dy 3 4"],
			["gd2", "*/ dy 5 4"],
			["gd3", "*/ dy 3 8"],
			["gd4", "*/ dy 1 8"],
			["gd5", "+- h 0 gd3"],
			["gd6", "+- gd4 h 0"],
			["y0", "+- t dy 0"],
			["y1", "+- t gd1 0"],
			["y2", "+- t gd2 0"],
			["y3", "+- t gd3 0"],
			["y4", "+- t gd4 0"],
			["y5", "+- t gd5 0"],
			["y6", "+- t gd6 0"],
			["x1", "+- l wd3 0"],
			["x2", "+- r 0 wd3"]
		],
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
				"C",
				"x1",
				"y1",
				"x2",
				"y2",
				"r",
				"y0"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y5"
			], [
				"C",
				"x1",
				"y6",
				"x2",
				"y6",
				"r",
				"y5"
			]]
		}]
	},
	textcurveup: {
		adj: [["adj", "val 45977"]],
		gd: [
			["a", "pin 0 adj 56338"],
			["dy", "*/ a h 100000"],
			["gd1", "*/ dy 3 4"],
			["gd2", "*/ dy 5 4"],
			["gd3", "*/ dy 3 8"],
			["gd4", "*/ dy 1 8"],
			["gd5", "+- h 0 gd3"],
			["gd6", "+- gd4 h 0"],
			["y0", "+- t dy 0"],
			["y1", "+- t gd1 0"],
			["y2", "+- t gd2 0"],
			["y3", "+- t gd3 0"],
			["y4", "+- t gd4 0"],
			["y5", "+- t gd5 0"],
			["y6", "+- t gd6 0"],
			["x1", "+- l wd3 0"],
			["x2", "+- r 0 wd3"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y0"
			], [
				"C",
				"x1",
				"y2",
				"x2",
				"y1",
				"r",
				"t"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y5"
			], [
				"C",
				"x1",
				"y6",
				"x2",
				"y6",
				"r",
				"y5"
			]]
		}]
	},
	textdeflate: {
		adj: [["adj", "val 18750"]],
		gd: [
			["a", "pin 0 adj 37500"],
			["dy", "*/ a ss 100000"],
			["gd0", "*/ dy 4 3"],
			["gd1", "+- h 0 gd0"],
			["adjY", "+- t dy 0"],
			["y0", "+- t gd0 0"],
			["y1", "+- t gd1 0"],
			["x0", "+- l wd3 0"],
			["x1", "+- r 0 wd3"]
		],
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
				"C",
				"x0",
				"y0",
				"x1",
				"y0",
				"r",
				"t"
			]]
		}, {
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
				"C",
				"x0",
				"y1",
				"x1",
				"y1",
				"r",
				"b"
			]]
		}]
	},
	textdeflatebottom: {
		adj: [["adj", "val 50000"]],
		gd: [
			["a", "pin 6250 adj 100000"],
			["dy", "*/ a ss 100000"],
			["dy2", "+- h 0 dy"],
			["y1", "+- t dy 0"],
			["cp", "+- y1 0 dy2"]
		],
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
				"t"
			]]
		}, {
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
				"Q",
				"hc",
				"cp",
				"r",
				"b"
			]]
		}]
	},
	textdeflateinflate: {
		adj: [["adj", "val 35000"]],
		gd: [
			["a", "pin 5000 adj 95000"],
			["dy", "*/ a h 100000"],
			["del", "*/ h 5 100"],
			["dh1", "*/ h 45 100"],
			["dh2", "*/ h 55 100"],
			["yh", "+- dy 0 del"],
			["yl", "+- dy del 0"],
			["y3", "+- yh yh dh1"],
			["y4", "+- yl yl dh2"]
		],
		paths: [
			{
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
					"t"
				]]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"l",
					"dh1"
				], [
					"Q",
					"hc",
					"y3",
					"r",
					"dh1"
				]]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"l",
					"dh2"
				], [
					"Q",
					"hc",
					"y4",
					"r",
					"dh2"
				]]
			},
			{
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
					"b"
				]]
			}
		]
	},
	textdeflateinflatedeflate: {
		adj: [["adj", "val 25000"]],
		gd: [
			["a", "pin 3000 adj 47000"],
			["dy", "*/ a h 100000"],
			["del", "*/ h 3 100"],
			["ey1", "*/ h 30 100"],
			["ey2", "*/ h 36 100"],
			["ey3", "*/ h 63 100"],
			["ey4", "*/ h 70 100"],
			["by", "+- b 0 dy"],
			["yh1", "+- dy 0 del"],
			["yl1", "+- dy del 0"],
			["yh2", "+- by 0 del"],
			["yl2", "+- by del 0"],
			["y1", "+- yh1 yh1 ey1"],
			["y2", "+- yl1 yl1 ey2"],
			["y3", "+- yh2 yh2 ey3"],
			["y4", "+- yl2 yl2 ey4"]
		],
		paths: [
			{
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
					"t"
				]]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"l",
					"ey1"
				], [
					"Q",
					"hc",
					"y1",
					"r",
					"ey1"
				]]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"l",
					"ey2"
				], [
					"Q",
					"hc",
					"y2",
					"r",
					"ey2"
				]]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"l",
					"ey3"
				], [
					"Q",
					"hc",
					"y3",
					"r",
					"ey3"
				]]
			},
			{
				w: null,
				h: null,
				fill: null,
				stroke: !0,
				extrusionOk: !0,
				cmds: [[
					"m",
					"l",
					"ey4"
				], [
					"Q",
					"hc",
					"y4",
					"r",
					"ey4"
				]]
			},
			{
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
					"b"
				]]
			}
		]
	},
	textdeflatetop: {
		adj: [["adj", "val 50000"]],
		gd: [
			["a", "pin 0 adj 93750"],
			["dy", "*/ a h 100000"],
			["y1", "+- t dy 0"],
			["cp", "+- y1 dy 0"]
		],
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
				"Q",
				"hc",
				"cp",
				"r",
				"t"
			]]
		}, {
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
				"b"
			]]
		}]
	},
	textdoublewave1: {
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
			["of", "*/ w a2 100000"],
			["of2", "*/ w a2 50000"],
			["x1", "abs of"],
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
			["xAdj", "+- hc of 0"]
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
				]
			]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"x9",
					"y4"
				],
				[
					"C",
					"x10",
					"y5",
					"x11",
					"y6",
					"x12",
					"y4"
				],
				[
					"C",
					"x13",
					"y5",
					"x14",
					"y6",
					"x15",
					"y4"
				]
			]
		}]
	},
	textfadedown: {
		adj: [["adj", "val 33333"]],
		gd: [
			["a", "pin 0 adj 49999"],
			["dx", "*/ a w 100000"],
			["x1", "+- l dx 0"],
			["x2", "+- r 0 dx"]
		],
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
				"t"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"x1",
				"b"
			], [
				"l",
				"x2",
				"b"
			]]
		}]
	},
	textfadeleft: {
		adj: [["adj", "val 33333"]],
		gd: [
			["a", "pin 0 adj 49999"],
			["dy", "*/ a h 100000"],
			["y1", "+- t dy 0"],
			["y2", "+- b 0 dy"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y1"
			], [
				"l",
				"r",
				"t"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y2"
			], [
				"l",
				"r",
				"b"
			]]
		}]
	},
	textfaderight: {
		adj: [["adj", "val 33333"]],
		gd: [
			["a", "pin 0 adj 49999"],
			["dy", "*/ a h 100000"],
			["y1", "+- t dy 0"],
			["y2", "+- b 0 dy"]
		],
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
				"y1"
			]]
		}, {
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
				"y2"
			]]
		}]
	},
	textfadeup: {
		adj: [["adj", "val 33333"]],
		gd: [
			["a", "pin 0 adj 49999"],
			["dx", "*/ a w 100000"],
			["x1", "+- l dx 0"],
			["x2", "+- r 0 dx"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"x1",
				"t"
			], [
				"l",
				"x2",
				"t"
			]]
		}, {
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
				"b"
			]]
		}]
	},
	textinflate: {
		adj: [["adj", "val 18750"]],
		gd: [
			["a", "pin 0 adj 20000"],
			["dy", "*/ a h 100000"],
			["gd", "*/ dy 1 3"],
			["gd0", "+- 0 0 gd"],
			["gd1", "+- h 0 gd0"],
			["ty", "+- t dy 0"],
			["by", "+- b 0 dy"],
			["y0", "+- t gd0 0"],
			["y1", "+- t gd1 0"],
			["x0", "+- l wd3 0"],
			["x1", "+- r 0 wd3"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"ty"
			], [
				"C",
				"x0",
				"y0",
				"x1",
				"y0",
				"r",
				"ty"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"by"
			], [
				"C",
				"x0",
				"y1",
				"x1",
				"y1",
				"r",
				"by"
			]]
		}]
	},
	textinflatebottom: {
		adj: [["adj", "val 60000"]],
		gd: [
			["a", "pin 60000 adj 100000"],
			["dy", "*/ a h 100000"],
			["ty", "+- t dy 0"]
		],
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
				"t"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"ty"
			], [
				"Q",
				"hc",
				"b",
				"r",
				"ty"
			]]
		}]
	},
	textinflatetop: {
		adj: [["adj", "val 40000"]],
		gd: [
			["a", "pin 0 adj 50000"],
			["dy", "*/ a h 100000"],
			["ty", "+- t dy 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"ty"
			], [
				"Q",
				"hc",
				"t",
				"r",
				"ty"
			]]
		}, {
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
				"b"
			]]
		}]
	},
	textplain: {
		adj: [["adj", "val 50000"]],
		gd: [
			["a", "pin 30000 adj 70000"],
			["mid", "*/ a w 100000"],
			["midDir", "+- mid 0 hc"],
			["dl", "+- mid 0 l"],
			["dr", "+- r 0 mid"],
			["dl2", "*/ dl 2 1"],
			["dr2", "*/ dr 2 1"],
			["dx", "?: midDir dr2 dl2"],
			["xr", "+- l dx 0"],
			["xl", "+- r 0 dx"],
			["tlx", "?: midDir l xl"],
			["trx", "?: midDir xr r"],
			["blx", "?: midDir xl l"],
			["brx", "?: midDir r xr"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"tlx",
				"t"
			], [
				"l",
				"trx",
				"t"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"blx",
				"b"
			], [
				"l",
				"brx",
				"b"
			]]
		}]
	},
	textringinside: {
		adj: [["adj", "val 60000"]],
		gd: [
			["a", "pin 50000 adj 99000"],
			["dy", "*/ a h 100000"],
			["y", "+- t dy 0"],
			["r", "*/ dy 1 2"],
			["y1", "+- t r 0"],
			["y2", "+- b 0 r"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y1"
			], [
				"a",
				"wd2",
				"r",
				"10800000",
				"21599999"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y2"
			], [
				"a",
				"wd2",
				"r",
				"10800000",
				"21599999"
			]]
		}]
	},
	textringoutside: {
		adj: [["adj", "val 60000"]],
		gd: [
			["a", "pin 50000 adj 99000"],
			["dy", "*/ a h 100000"],
			["y", "+- t dy 0"],
			["r", "*/ dy 1 2"],
			["y1", "+- t r 0"],
			["y2", "+- b 0 r"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y1"
			], [
				"a",
				"wd2",
				"r",
				"10800000",
				"-21599999"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y2"
			], [
				"a",
				"wd2",
				"r",
				"10800000",
				"-21599999"
			]]
		}]
	},
	textslantdown: {
		adj: [["adj", "val 44445"]],
		gd: [
			["a", "pin 28569 adj 100000"],
			["dy", "*/ a h 100000"],
			["y1", "+- t dy 0"],
			["y2", "+- b 0 dy"]
		],
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
				"y2"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y1"
			], [
				"l",
				"r",
				"b"
			]]
		}]
	},
	textslantup: {
		adj: [["adj", "val 55555"]],
		gd: [
			["a", "pin 0 adj 71431"],
			["dy", "*/ a h 100000"],
			["y1", "+- t dy 0"],
			["y2", "+- b 0 dy"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"l",
				"y1"
			], [
				"l",
				"r",
				"t"
			]]
		}, {
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
				"y2"
			]]
		}]
	},
	textstop: {
		adj: [["adj", "val 25000"]],
		gd: [
			["a", "pin 14286 adj 50000"],
			["dx", "*/ w 1 3"],
			["dy", "*/ a h 100000"],
			["x1", "+- l dx 0"],
			["x2", "+- r 0 dx"],
			["y1", "+- t dy 0"],
			["y2", "+- b 0 dy"]
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
					"y1"
				]
			]
		}, {
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
					"b"
				],
				[
					"l",
					"x2",
					"b"
				],
				[
					"l",
					"r",
					"y2"
				]
			]
		}]
	},
	texttriangle: {
		adj: [["adj", "val 50000"]],
		gd: [["a", "pin 0 adj 100000"], ["y", "*/ a h 100000"]],
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
					"y"
				],
				[
					"l",
					"hc",
					"t"
				],
				[
					"l",
					"r",
					"y"
				]
			]
		}, {
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
				"b"
			]]
		}]
	},
	texttriangleinverted: {
		adj: [["adj", "val 50000"]],
		gd: [["a", "pin 0 adj 100000"], ["y", "*/ a h 100000"]],
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
				"t"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"l",
					"y"
				],
				[
					"l",
					"hc",
					"b"
				],
				[
					"l",
					"r",
					"y"
				]
			]
		}]
	},
	textwave1: {
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
			["of", "*/ w a2 100000"],
			["of2", "*/ w a2 50000"],
			["x1", "abs of"],
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
			["xAdj", "+- hc of 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"x2",
				"y1"
			], [
				"C",
				"x3",
				"y2",
				"x4",
				"y3",
				"x5",
				"y1"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"x6",
				"y4"
			], [
				"C",
				"x7",
				"y5",
				"x8",
				"y6",
				"x10",
				"y4"
			]]
		}]
	},
	textwave2: {
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
			["of", "*/ w a2 100000"],
			["of2", "*/ w a2 50000"],
			["x1", "abs of"],
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
			["xAdj", "+- hc of 0"]
		],
		paths: [{
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"x2",
				"y1"
			], [
				"C",
				"x3",
				"y3",
				"x4",
				"y2",
				"x5",
				"y1"
			]]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [[
				"m",
				"x6",
				"y4"
			], [
				"C",
				"x7",
				"y6",
				"x8",
				"y5",
				"x10",
				"y4"
			]]
		}]
	},
	textwave4: {
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
			["of", "*/ w a2 100000"],
			["of2", "*/ w a2 50000"],
			["x1", "abs of"],
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
			["xAdj", "+- hc of 0"]
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
					"y3",
					"x4",
					"y2",
					"x5",
					"y1"
				],
				[
					"C",
					"x6",
					"y3",
					"x7",
					"y2",
					"x8",
					"y1"
				]
			]
		}, {
			w: null,
			h: null,
			fill: null,
			stroke: !0,
			extrusionOk: !0,
			cmds: [
				[
					"m",
					"x9",
					"y4"
				],
				[
					"C",
					"x10",
					"y6",
					"x11",
					"y5",
					"x12",
					"y4"
				],
				[
					"C",
					"x13",
					"y6",
					"x14",
					"y5",
					"x15",
					"y4"
				]
			]
		}]
	}
}, et = Math.PI * 2 / 216e5, tt = $e, nt = /* @__PURE__ */ new Map();
function rt(e) {
	return e.toLowerCase() in tt;
}
function it(e) {
	let t = nt.get(e);
	if (t) return t;
	let n = tt[e];
	return n ? (t = {
		adj: n.adj.map(([e, t]) => [e, f(t)]),
		gd: n.gd.map(([e, t]) => [e, f(t)]),
		paths: n.paths
	}, nt.set(e, t), t) : null;
}
var at = 48;
function ot(e, t, n, r) {
	let i = e.w == null ? 1 : n / e.w, a = e.h == null ? 1 : r / e.h, o = (e) => e * i, s = (e) => e * a, c = [], l = 0, u = 0;
	for (let n of e.cmds) switch (n[0]) {
		case "m":
			l = o(t.resolve(n[1])), u = s(t.resolve(n[2])), c.push({
				x: l,
				y: u
			});
			break;
		case "l":
			l = o(t.resolve(n[1])), u = s(t.resolve(n[2])), c.push({
				x: l,
				y: u
			});
			break;
		case "C": {
			let e = o(t.resolve(n[1])), r = s(t.resolve(n[2])), i = o(t.resolve(n[3])), a = s(t.resolve(n[4])), d = o(t.resolve(n[5])), f = s(t.resolve(n[6]));
			for (let t = 1; t <= at; t++) {
				let n = t / at, o = 1 - n, s = o * o * o * l + 3 * o * o * n * e + 3 * o * n * n * i + n * n * n * d, p = o * o * o * u + 3 * o * o * n * r + 3 * o * n * n * a + n * n * n * f;
				c.push({
					x: s,
					y: p
				});
			}
			l = d, u = f;
			break;
		}
		case "Q": {
			let e = o(t.resolve(n[1])), r = s(t.resolve(n[2])), i = o(t.resolve(n[3])), a = s(t.resolve(n[4]));
			for (let t = 1; t <= at; t++) {
				let n = t / at, o = 1 - n, s = o * o * l + 2 * o * n * e + n * n * i, d = o * o * u + 2 * o * n * r + n * n * a;
				c.push({
					x: s,
					y: d
				});
			}
			l = i, u = a;
			break;
		}
		case "a": {
			let e = t.resolve(n[1]), r = t.resolve(n[2]), o = e * i, s = r * a, d = t.resolve(n[3]) * et, f = t.resolve(n[4]) * et, p = (t) => Math.atan2(e * Math.sin(t), r * Math.cos(t)), m = Math.PI * 2, h = p(d), g = Math.trunc(f / m), _ = f - g * m, v = p(d + _) - h;
			_ > 0 && v < 0 ? v += m : _ < 0 && v > 0 && (v -= m);
			let y = v + g * m, b = l - o * Math.cos(h), x = u - s * Math.sin(h), S = Math.max(at, Math.ceil(Math.abs(y) / m * 96));
			for (let e = 1; e <= S; e++) {
				let t = h + y * e / S;
				c.push({
					x: b + o * Math.cos(t),
					y: x + s * Math.sin(t)
				});
			}
			l = b + o * Math.cos(h + y), u = x + s * Math.sin(h + y);
			break;
		}
		case "c": break;
	}
	return c;
}
function st(e) {
	let t = [0];
	for (let n = 1; n < e.length; n++) {
		let r = e[n].x - e[n - 1].x, i = e[n].y - e[n - 1].y;
		t.push(t[n - 1] + Math.hypot(r, i));
	}
	return t;
}
function ct(e, t, n, r) {
	let i = it(e.toLowerCase());
	if (!i || i.paths.length === 0) return null;
	let a = p({
		w: n,
		h: r,
		adj: t
	}, i.adj, i.gd), o = i.paths.length === 1, s = ot(i.paths[0], a, n, r), c = o ? s : ot(i.paths[i.paths.length - 1], a, n, r);
	return {
		top: s,
		bottom: c,
		topLen: st(s),
		bottomLen: st(c),
		singleEdge: o
	};
}
function lt(e, t, n) {
	let r = t[t.length - 1];
	if (e.length === 1 || r === 0) return {
		x: e[0].x,
		y: e[0].y,
		tx: 1,
		ty: 0
	};
	let i = Math.max(0, Math.min(1, n)) * r, a = 0, o = t.length - 1;
	for (; a < o - 1;) {
		let e = a + o >> 1;
		t[e] <= i ? a = e : o = e;
	}
	let s = t[o] - t[a] || 1, c = (i - t[a]) / s, l = e[a], u = e[o], d = u.x - l.x, f = u.y - l.y, p = Math.hypot(d, f) || 1;
	return {
		x: l.x + d * c,
		y: l.y + f * c,
		tx: d / p,
		ty: f / p
	};
}
function ut(e) {
	return e.topLen[e.topLen.length - 1] ?? 0;
}
function dt(e, t) {
	if (!e.singleEdge) return 1;
	let n = ut(e);
	return n <= 0 ? 1 : Math.max(0, Math.min(1, t / n));
}
function ft(e, t, n, r) {
	if (e.singleEdge) {
		let i = lt(e.top, e.topLen, t), a = Math.atan2(i.ty, i.tx), o = i.ty, s = -i.tx, c = n * (1 - r);
		return {
			x: i.x - o * c,
			y: i.y - s * c,
			angle: a,
			vScale: 1,
			shear: 0
		};
	}
	let i = lt(e.top, e.topLen, t), a = lt(e.bottom, e.bottomLen, t), o = a.x - i.x, s = a.y - i.y, c = i.x + o * r, l = i.y + s * r, u = i.tx + a.tx, d = i.ty + a.ty, f = Math.atan2(d, u), p = Math.cos(f), m = Math.sin(f), h = (p * o + m * s) / (n > 0 ? n : 1), g = (-m * o + p * s) / (n > 0 ? n : 1);
	return {
		x: c,
		y: l,
		angle: f,
		vScale: g === 0 ? n > 0 ? Math.hypot(o, s) / n : 1 : g,
		shear: g === 0 ? 0 : h / g
	};
}
//#endregion
//#region packages/core/src/shape/scene3d-camera.ts
var pt = 26, mt = {
	orthographicFront: {
		kind: "orthographic",
		baseLat: 0,
		baseLon: 0,
		baseRev: 0,
		fovDeg: 0
	},
	perspectiveFront: {
		kind: "perspective",
		baseLat: 0,
		baseLon: 0,
		baseRev: 0,
		fovDeg: pt
	},
	perspectiveRelaxed: {
		kind: "perspective",
		baseLat: 0,
		baseLon: 0,
		baseRev: 0,
		fovDeg: pt
	},
	perspectiveRelaxedModerately: {
		kind: "perspective",
		baseLat: 0,
		baseLon: 0,
		baseRev: 0,
		fovDeg: pt
	},
	perspectiveAbove: {
		kind: "perspective",
		baseLat: -20,
		baseLon: 0,
		baseRev: 0,
		fovDeg: pt
	},
	perspectiveBelow: {
		kind: "perspective",
		baseLat: 20,
		baseLon: 0,
		baseRev: 0,
		fovDeg: pt
	},
	perspectiveLeft: {
		kind: "perspective",
		baseLat: 0,
		baseLon: -20,
		baseRev: 0,
		fovDeg: pt
	},
	perspectiveRight: {
		kind: "perspective",
		baseLat: 0,
		baseLon: 20,
		baseRev: 0,
		fovDeg: pt
	}
};
function ht(e, t) {
	let n = Array(9).fill(0);
	for (let r = 0; r < 3; r++) for (let i = 0; i < 3; i++) {
		let a = 0;
		for (let n = 0; n < 3; n++) a += e[r * 3 + n] * t[n * 3 + i];
		n[r * 3 + i] = a;
	}
	return n;
}
function gt(e) {
	let t = e * Math.PI / 180, n = Math.cos(t), r = Math.sin(t);
	return [
		1,
		0,
		0,
		0,
		n,
		-r,
		0,
		r,
		n
	];
}
function _t(e) {
	let t = e * Math.PI / 180, n = Math.cos(t), r = Math.sin(t);
	return [
		n,
		0,
		r,
		0,
		1,
		0,
		-r,
		0,
		n
	];
}
function vt(e) {
	let t = e * Math.PI / 180, n = Math.cos(t), r = Math.sin(t);
	return [
		n,
		-r,
		0,
		r,
		n,
		0,
		0,
		0,
		1
	];
}
function yt(e, t, n, r) {
	return [
		e[0] * t + e[1] * n + e[2] * r,
		e[3] * t + e[4] * n + e[5] * r,
		e[6] * t + e[7] * n + e[8] * r
	];
}
function bt(e, t) {
	let n = t ? t.lat : e.baseLat, r = t ? t.lon : e.baseLon;
	return ht(vt(-(t ? t.rev : e.baseRev)), ht(gt(-n), _t(-r)));
}
function xt(e) {
	return mt[e] || (e.startsWith("perspective") ? mt.perspectiveFront : mt.orthographicFront);
}
function St(e, t, n) {
	let r = xt(e.prst), i = bt(r, e.rot);
	if (t <= 0 || n <= 0) return {
		corners: [
			{
				x: 0,
				y: 0
			},
			{
				x: t,
				y: 0
			},
			{
				x: t,
				y: n
			},
			{
				x: 0,
				y: n
			}
		],
		isAffine: !0,
		isIdentity: !0
	};
	let a = t / 2, o = n / 2, s = [
		[-a, -o],
		[a, -o],
		[a, o],
		[-a, o]
	], c = e.zoom ?? 1, l = Math.max(a, o), u;
	if (r.kind === "perspective") {
		let t = e.fov ?? r.fovDeg, n = Math.max(1, Math.min(179, t)) * Math.PI / 180, a = l / Math.tan(n / 2);
		u = s.map(([e, t]) => {
			let [n, r, o] = yt(i, e, t, 0), s = a - o, c = a / (Math.abs(s) < 1e-6 ? 1e-6 * Math.sign(s || 1) : s);
			return [n * c, r * c];
		});
	} else u = s.map(([e, t]) => {
		let [n, r] = yt(i, e, t, 0);
		return [n, r];
	});
	u = u.map(([e, t]) => [e * c, t * c]);
	let d = u.map(([e, r]) => ({
		x: t / 2 + e,
		y: n / 2 + r
	})), f = .001 * Math.max(t, n), p = d[0].x + d[2].x - (d[1].x + d[3].x), m = d[0].y + d[2].y - (d[1].y + d[3].y), h = Math.abs(p) < f && Math.abs(m) < f, g = [
		[0, 0],
		[t, 0],
		[t, n],
		[0, n]
	], _ = !0;
	for (let e = 0; e < 4; e++) if (Math.abs(d[e].x - g[e][0]) > f || Math.abs(d[e].y - g[e][1]) > f) {
		_ = !1;
		break;
	}
	return {
		corners: d,
		isAffine: h,
		isIdentity: _
	};
}
function Ct(e) {
	let { isIdentity: t } = St(e, 1e3, 1e3);
	return !t;
}
function wt(e, t, n, r) {
	let i = xt(e.prst), a = bt(i, e.rot);
	if (t <= 0 || n <= 0 || r === 0) return {
		x: 0,
		y: 0
	};
	let o = t / 2, s = n / 2, c = Math.max(o, s), l = e.zoom ?? 1, u = (t) => {
		let [n, r, o] = yt(a, 0, 0, t);
		if (i.kind === "perspective") {
			let t = e.fov ?? i.fovDeg, a = Math.max(1, Math.min(179, t)) * Math.PI / 180, s = c / Math.tan(a / 2), u = s - o, d = s / (Math.abs(u) < 1e-6 ? 1e-6 * Math.sign(u || 1) : u);
			return [n * d * l, r * d * l];
		}
		return [n * l, r * l];
	}, [d, f] = u(0), [p, m] = u(-r);
	return {
		x: p - d,
		y: m - f
	};
}
//#endregion
//#region packages/core/src/shape/bevel-shading.ts
function Tt(e, t) {
	if (t <= 0) return () => 1;
	let n = (e) => Math.max(0, Math.min(1, e / t));
	switch (e) {
		case "hardEdge": {
			let e = Nt;
			return (t) => {
				let r = Math.min(1, n(t) / e);
				return r * r * (3 - 2 * r);
			};
		}
		case "angle":
		case "slope": return (e) => n(e);
		case "circle":
		case "convex":
		case "softRound": return (e) => {
			let t = 1 - n(e);
			return Math.sqrt(Math.max(0, 1 - t * t));
		};
		default: return (e) => {
			let t = n(e);
			return t * t * (3 - 2 * t);
		};
	}
}
function Et(e) {
	let t = e.length, n = new Float64Array(t);
	if (t === 0) return n;
	let r = new Int32Array(t), i = new Float64Array(t + 1), a = 0;
	r[0] = 0, i[0] = -Infinity, i[1] = Infinity;
	for (let n = 1; n < t; n++) {
		let t = (e[n] + n * n - (e[r[a]] + r[a] * r[a])) / (2 * n - 2 * r[a]);
		for (; t <= i[a];) a--, t = (e[n] + n * n - (e[r[a]] + r[a] * r[a])) / (2 * n - 2 * r[a]);
		a++, r[a] = n, i[a] = t, i[a + 1] = Infinity;
	}
	a = 0;
	for (let o = 0; o < t; o++) {
		for (; i[a + 1] < o;) a++;
		let t = o - r[a];
		n[o] = t * t + e[r[a]];
	}
	return n;
}
function Dt(e, t = 3) {
	if (e <= 0) return Array(t).fill(1);
	let n = Math.sqrt(12 * e * e / t + 1), r = Math.floor(n);
	r % 2 == 0 && r--;
	let i = r + 2, a = (12 * e * e - t * r * r - 4 * t * r - 3 * t) / (-4 * r - 4), o = Math.round(a), s = [];
	for (let e = 0; e < t; e++) s.push(e < o ? r : i);
	return s;
}
function Ot(e, t, n, r, i, a) {
	let o = 1 / (2 * i + 1);
	if (a) for (let a = 0; a < r; a++) {
		let r = a * n, s = 0;
		for (let t = 0; t <= i; t++) t < n && (s += e[r + t]);
		for (let a = 0; a < n; a++) {
			t[r + a] = s * o;
			let c = a + i + 1, l = a - i;
			c < n && (s += e[r + c]), l >= 0 && (s -= e[r + l]);
		}
	}
	else for (let a = 0; a < n; a++) {
		let s = 0;
		for (let t = 0; t <= i; t++) t < r && (s += e[t * n + a]);
		for (let c = 0; c < r; c++) {
			t[c * n + a] = s * o;
			let l = c + i + 1, u = c - i;
			l < r && (s += e[l * n + a]), u >= 0 && (s -= e[u * n + a]);
		}
	}
}
function kt(e, t, n, r) {
	let i = Float64Array.from(e);
	if (r <= 0 || t <= 0 || n <= 0) return i;
	let a = new Float64Array(t * n);
	for (let e of Dt(r, 3)) {
		let r = Math.max(1, (e - 1) / 2);
		Ot(i, a, t, n, r, !0), Ot(a, i, t, n, r, !1);
	}
	return i;
}
function At(e, t, n, r = 128) {
	let i = new Float64Array(t * n);
	for (let a = 0; a < t * n; a++) i[a] = (e[a] ?? 0) >= r ? 0x56bc75e2d63100000 : 0;
	let a = new Float64Array(n);
	for (let e = 0; e < t; e++) {
		for (let r = 0; r < n; r++) a[r] = i[r * t + e];
		let r = Et(a);
		for (let a = 0; a < n; a++) i[a * t + e] = r[a];
	}
	let o = new Float64Array(t);
	for (let e = 0; e < n; e++) {
		for (let n = 0; n < t; n++) o[n] = i[e * t + n];
		let n = Et(o);
		for (let r = 0; r < t; r++) i[e * t + r] = n[r];
	}
	for (let e = 0; e < n; e++) for (let r = 0; r < t; r++) {
		let a = e * t + r;
		if (i[a] === 0) continue;
		let o = (e + 1) * (e + 1), s = (n - e) * (n - e), c = (r + 1) * (r + 1), l = (t - r) * (t - r), u = Math.min(o, s, c, l);
		u < i[a] && (i[a] = u);
	}
	for (let e = 0; e < t * n; e++) i[e] = Math.sqrt(i[e]);
	return i;
}
var jt = .25, Mt = .35, Nt = .5;
function Pt(e, t, n, r, i, a) {
	let o = new Float32Array(t * n * 3), s = new Uint8Array(t * n), c = new Float32Array(t * n);
	if (t <= 0 || n <= 0) return {
		normals: o,
		bandMask: s,
		bandWeight: c
	};
	let l = At(e, t, n), u = Tt(i, r), d = (n, r) => (e[r * t + n] ?? 0) >= 128, f = (r > 0 ? a / r : 0) * r, p = kt(l, t, n, Math.max(1, r * jt)), m = (e) => {
		let t = u(Math.max(0, e - .5));
		return u(e + .5) - t;
	};
	for (let e = 0; e < n; e++) for (let i = 0; i < t; i++) {
		let a = e * t + i;
		if (!d(i, e)) {
			o[a * 3 + 2] = 1;
			continue;
		}
		let u = l[a], h = u > 0 && u < r;
		if (s[a] = +!!h, !h) {
			o[a * 3 + 2] = 1;
			continue;
		}
		let g = u / r, _ = 1 - Mt, v = 1;
		if (g > _) {
			let e = Math.min(1, (g - _) / Mt);
			v = 1 - e * e * (3 - 2 * e);
		}
		c[a] = v;
		let y = i > 0 ? i - 1 : i, b = i < t - 1 ? i + 1 : i, x = e > 0 ? e - 1 : e, S = e < n - 1 ? e + 1 : e, C = (p[e * t + b] - p[e * t + y]) / (b - y || 1), w = (p[S * t + i] - p[x * t + i]) / (S - x || 1), T = Math.hypot(C, w), E = 0, D = 0;
		T > 1e-9 && (E = -C / T, D = -w / T);
		let O = m(u) * f, k = O * E, A = O * D, j = 1, M = Math.hypot(k, A, j) || 1;
		k /= M, A /= M, j /= M, o[a * 3] = k, o[a * 3 + 1] = A, o[a * 3 + 2] = j;
	}
	return {
		normals: o,
		bandMask: s,
		bandWeight: c
	};
}
var Ft = 35 * Math.PI / 180, It = 12 * Math.PI / 180, Lt = {
	t: {
		x: 0,
		y: -1
	},
	b: {
		x: 0,
		y: 1
	},
	l: {
		x: -1,
		y: 0
	},
	r: {
		x: 1,
		y: 0
	},
	tl: {
		x: -1,
		y: -1
	},
	tr: {
		x: 1,
		y: -1
	},
	bl: {
		x: -1,
		y: 1
	},
	br: {
		x: 1,
		y: 1
	}
};
function Rt(e, t, n) {
	let r = n * Math.PI / 180, i = Math.cos(r), a = Math.sin(r);
	return {
		x: e * i - t * a,
		y: e * a + t * i
	};
}
function zt(e, t, n) {
	let r = Lt[t] ?? Lt.t;
	return n && n.rev && (r = Rt(r.x, r.y, n.rev)), Vt(r.x, r.y, Ft);
}
function Bt(e) {
	let t = Math.hypot(e.x, e.y) || 1;
	return Vt(-e.x / t, -e.y / t, It);
}
function Vt(e, t, n) {
	let r = Math.hypot(e, t) || 1, i = Math.cos(n), a = Math.sin(n), o = e / r * i, s = t / r * i, c = a, l = Math.hypot(o, s, c) || 1;
	return {
		x: o / l,
		y: s / l,
		z: c / l
	};
}
var Ht = 2, Ut = {
	matte: {
		ambient: .62,
		diffuse: .45,
		specular: 0,
		shininess: 8
	},
	plastic: {
		ambient: .55,
		diffuse: .5,
		specular: .35,
		shininess: 22
	}
}, Wt = .8;
function Gt(e) {
	switch (e) {
		case "plastic":
		case "metal":
		case "clear":
		case "softEdge":
		case "shiny":
		case "softmetal": return "plastic";
		default: return "matte";
	}
}
function Kt(e, t, n = !0) {
	let r = Ut[e], i = {
		light: t,
		material: e,
		ambient: r.ambient,
		diffuse: r.diffuse,
		specular: r.specular,
		shininess: r.shininess
	};
	return n && (i.fillLight = Bt(t), i.fillDiffuse = i.diffuse * Wt), i;
}
function qt(e, t) {
	let n = e.x * t.light.x + e.y * t.light.y + e.z * t.light.z, r = t.diffuse * Math.max(0, n), i = 0;
	if (t.fillLight && t.fillDiffuse) {
		let n = e.x * t.fillLight.x + e.y * t.fillLight.y + e.z * t.fillLight.z;
		i = t.fillDiffuse * Math.max(0, n);
	}
	let a = 0;
	if (t.specular > 0) {
		let n = t.light.x, r = t.light.y, i = t.light.z + 1, o = Math.hypot(n, r, i) || 1, s = (e.x * n + e.y * r + e.z * i) / o;
		a = t.specular * Math.max(0, s) ** +t.shininess;
	}
	return Math.max(0, t.ambient + r + i + a);
}
function Jt(e, t, n) {
	if (!e) return {
		x: 0,
		y: 0,
		w: t,
		h: n
	};
	let r = Math.max(0, Math.floor(e.x)), i = Math.max(0, Math.floor(e.y)), a = Math.min(t, Math.ceil(e.x + e.w)), o = Math.min(n, Math.ceil(e.y + e.h));
	return {
		x: r,
		y: i,
		w: Math.max(0, a - r),
		h: Math.max(0, o - i)
	};
}
function Yt(e, t, n) {
	let r = e.canvas.width, i = e.canvas.height;
	if (r <= 0 || i <= 0) return;
	let a = t.widthPx;
	if (a < .75) return;
	let { x: o, y: s, w: c, h: l } = Jt(n, r, i);
	if (c <= 0 || l <= 0) return;
	let u = e.getImageData(o, s, c, l), d = u.data, f = new Uint8ClampedArray(c * l);
	for (let e = 0; e < c * l; e++) f[e] = d[e * 4 + 3];
	let { bandMask: p, bandWeight: m, normals: h } = Pt(f, c, l, a, t.prst, t.heightPx), g = Kt(t.material, t.light), _ = qt({
		x: 0,
		y: 0,
		z: 1
	}, g) || 1;
	for (let e = 0; e < c * l; e++) {
		if (p[e] === 0) continue;
		let n = m[e];
		if (n <= 0) continue;
		let r = h[e * 3], i = h[e * 3 + 1], a = h[e * 3 + 2];
		t.bottom && (r = -r, i = -i);
		let o = 1 + (qt({
			x: r,
			y: i,
			z: a
		}, g) / _ - 1) * n, s = e * 4;
		if (o >= 1) {
			let e = Math.min(1, (o - 1) * Ht);
			for (let t = 0; t < 3; t++) {
				let n = Math.min(255, d[s + t] * o);
				d[s + t] = n + (255 - n) * e;
			}
		} else d[s] = Math.max(0, d[s] * o), d[s + 1] = Math.max(0, d[s + 1] * o), d[s + 2] = Math.max(0, d[s + 2] * o);
	}
	e.putImageData(u, o, s);
}
function Xt(e, t, n) {
	let r = e.canvas.width, i = e.canvas.height;
	if (r <= 0 || i <= 0) return;
	let a = t.offsetX, o = t.offsetY, s = Math.hypot(a, o);
	if (s < .75) return;
	let { x: c, y: l, w: u, h: d } = Jt(n, r, i);
	if (u <= 0 || d <= 0) return;
	let f = e.getImageData(c, l, u, d), p = f.data, m = new Uint8ClampedArray(u * d);
	for (let e = 0; e < u * d; e++) m[e] = p[e * 4 + 3];
	let h = Math.max(1, Math.ceil(s)), [g, _, v] = t.rgb;
	for (let e = 0; e < d; e++) for (let t = 0; t < u; t++) {
		let n = e * u + t;
		if (m[n] >= 128) continue;
		let r = !1;
		for (let n = 1; n <= h; n++) {
			let i = n / h, s = Math.round(t - a * i), c = Math.round(e - o * i);
			if (!(s < 0 || c < 0 || s >= u || c >= d) && m[c * u + s] >= 128) {
				r = !0;
				break;
			}
		}
		if (!r) continue;
		let i = n * 4;
		p[i] = g, p[i + 1] = _, p[i + 2] = v, p[i + 3] = 255;
	}
	e.putImageData(f, c, l);
}
//#endregion
//#region packages/core/src/text/underline.ts
function Zt(e, t, n, r, i, a, o, s = 1) {
	let c = Math.max(1, i * .05), l = o === "heavy" || (o?.endsWith("Heavy") ?? !1) ? c * 1.8 : c, u = n + Math.max(2, l), d = T(u, l, s);
	if (e.strokeStyle = a, e.lineWidth = l, e.setLineDash([]), o && o.startsWith("wavy")) {
		let n = l, i = l * 6;
		e.beginPath(), e.moveTo(t, u);
		let a = Math.max(1, l * .5);
		for (let o = 0; o <= r; o += a) {
			let r = u + Math.sin(o / i * Math.PI * 2) * n;
			e.lineTo(t + o, r);
		}
		if (e.stroke(), o === "wavyDbl") {
			e.beginPath(), e.moveTo(t, u + n * 2.5);
			for (let o = 0; o <= r; o += a) {
				let r = u + n * 2.5 + Math.sin(o / i * Math.PI * 2) * n;
				e.lineTo(t + o, r);
			}
			e.stroke();
		}
		return;
	}
	if (o === "dbl") {
		let n = l * 1.4, i = u - n / 2, a = u + n / 2;
		e.beginPath(), e.moveTo(t, i + T(i, l, s)), e.lineTo(t + r, i + T(i, l, s)), e.moveTo(t, a + T(a, l, s)), e.lineTo(t + r, a + T(a, l, s)), e.stroke();
		return;
	}
	e.setLineDash(De(o ?? "sng", l)), e.beginPath(), e.moveTo(t, u + d), e.lineTo(t + r, u + d), e.stroke(), e.setLineDash([]);
}
//#endregion
//#region packages/core/src/text/highlight-box.ts
function Qt(e, t) {
	return {
		top: e - t * .85,
		height: t * 1.1
	};
}
//#endregion
//#region packages/core/src/text/justify-positions.ts
function $t(e, t, n, r, i = 0) {
	let a = [], o = 0, s = 0;
	for (let c of t) a.push({
		text: e.slice(o, c).join(""),
		dx: r(e.slice(0, o).join("")) + o * i + s * n
	}), o = c, s++;
	return a.push({
		text: e.slice(o).join(""),
		dx: r(e.slice(0, o).join("")) + o * i + s * n
	}), a;
}
//#endregion
//#region packages/pptx/src/reflection-blur.ts
var en = .5;
function tn(e, t) {
	if (!(t > 0) || !(e.h > 0)) return [{
		y: e.y,
		h: Math.max(0, e.h),
		radius: 0
	}];
	let n = Math.max(4, Math.min(24, Math.ceil(t / en) + 1)), r = e.y + e.h, i = [];
	for (let a = 0; a < n; a++) {
		let o = Math.sqrt(a / (n - 1)), s = a === 0 ? 0 : Math.sqrt((a - 1) / (n - 1)), c = a === n - 1 ? 1 : Math.sqrt((a + 1) / (n - 1)), l = a === 0 ? 0 : (s + o) / 2, u = a === n - 1 ? 1 : (o + c) / 2, d = r - u * e.h;
		i.push({
			y: d,
			h: (u - l) * e.h,
			radius: t * a / (n - 1)
		});
	}
	return i;
}
function nn(e, t, n, r, i) {
	for (let a of tn(n, r)) e.save(), e.beginPath(), e.rect(0, a.y, i, a.h), e.clip(), e.filter = a.radius > 0 ? `blur(${a.radius}px)` : "none", e.drawImage(t, 0, 0), e.restore();
}
//#endregion
//#region packages/pptx/src/hyperlink.ts
function rn(e, t) {
	let n = e !== void 0 && e !== "" ? e : void 0, r = t !== void 0 && t !== "" ? t : void 0;
	if (n === void 0 && r === void 0) return;
	if (r !== void 0) return {
		kind: "internal",
		ref: n ?? r
	};
	let i = n, a = W(i);
	return a !== null && ie.includes(a) ? {
		kind: "external",
		url: i
	} : {
		kind: "internal",
		ref: i
	};
}
//#endregion
//#region packages/pptx/src/media-chrome.ts
function an(e, t, n, r, i, a) {
	let o = Math.max(18, Math.min(32, Math.min(r, i) * .25));
	if (e.save(), e.shadowColor = "rgba(0, 0, 0, 0.3)", e.shadowBlur = o * .35, e.fillStyle = "rgba(20, 20, 20, 0.7)", e.beginPath(), e.arc(t, n, o, 0, Math.PI * 2), e.fill(), e.shadowColor = "transparent", e.shadowBlur = 0, e.fillStyle = "#fff", a === "paused") {
		e.beginPath();
		let r = o * .48;
		e.moveTo(t - r * .4, n - r), e.lineTo(t - r * .4, n + r), e.lineTo(t + r * .75, n), e.closePath(), e.fill();
	} else {
		let r = o * .2, i = o * .8, a = o * .15;
		e.fillRect(t - a - r, n - i / 2, r, i), e.fillRect(t + a, n - i / 2, r, i);
	}
	e.restore();
}
//#endregion
//#region packages/pptx/src/bidi-line.ts
var on = (e) => {
	let t = e.text;
	return typeof t == "string" ? t : void 0;
}, sn = (e) => "isTab" in e;
function cn(e) {
	for (let t of e) {
		let e = on(t);
		if (e !== void 0 && z(e)) return !0;
	}
	return !1;
}
function ln(e, n) {
	let r = e.length;
	if (r === 0) return {
		order: [],
		rtl: []
	};
	let i = "", a = Array(r), o;
	for (let t = 0; t < r; t++) {
		a[t] = i.length;
		let n = on(e[t]) ?? "";
		if (i += n.length > 0 ? n : "￼", sn(e[t])) {
			for (o ??= []; o.length < i.length;) o.push(null);
			o[a[t]] = "S";
		}
	}
	if (o) for (; o.length < i.length;) o.push(null);
	let { levels: s, paragraphLevel: c } = t().computeLevels(i, n ? "rtl" : "ltr", o), { order: l, segLevels: u } = m(s, c, a), d = Array(r);
	for (let e = 0; e < r; e++) d[e] = (u[e] & 1) == 1;
	return {
		order: l,
		rtl: d
	};
}
//#endregion
//#region packages/pptx/src/cjk-wrap.ts
function un(e, t, n, r, i = 0, a = !1) {
	if (e.length === 0) return 0;
	let o = t === 0, s = 0, c = t;
	for (let t of e) {
		let e = s > 0 || a ? i : 0;
		if (c + e + t.w > n) {
			if (s > 0 || !o) break;
			c += e + t.w, s++;
			break;
		}
		c += e + t.w, s++;
	}
	return s === 0 ? 0 : s >= e.length ? e.length : x(e.map((e) => e.ch), s, r, +!!o);
}
//#endregion
//#region packages/pptx/src/text-justify.ts
var dn = (e) => /\s/.test(String.fromCodePoint(e));
function fn(e, t, n, r, i) {
	if (r === "just" && i) return null;
	let a = t - n;
	if (a <= .5) return null;
	let o = Ce(e, a, {
		firstContentSi: 0,
		lastDrawnSi: e.length,
		isGapChar: y,
		isWhitespace: dn,
		seaClusterGaps: r === "thaiDist"
	});
	if (!o) return null;
	let { perGap: s, perSeg: c } = o, l = [];
	for (let t = 0; t < e.length; t++) {
		let n = e[t], r = c.get(t), i = r?.trailingGap ? s : 0, a = r?.splitBefore;
		a && a.length > 0 ? l.push({
			...n,
			jext: i,
			splitBefore: [...a],
			perGap: s
		}) : l.push({
			...n,
			jext: i
		});
	}
	return l;
}
//#endregion
//#region packages/pptx/src/table-border-conflict.ts
function pn(e) {
	if (!e) return {
		r: 0,
		g: 0,
		b: 0
	};
	let t = e.replace(/^#/, "");
	return t.length < 6 || /[^0-9a-fA-F]/.test(t.slice(0, 6)) ? {
		r: 0,
		g: 0,
		b: 0
	} : {
		r: parseInt(t.slice(0, 2), 16),
		g: parseInt(t.slice(2, 4), 16),
		b: parseInt(t.slice(4, 6), 16)
	};
}
function mn(e) {
	let t = pn(e);
	return .299 * t.r + .587 * t.g + .114 * t.b;
}
function hn(e, t) {
	if (!e && !t) return null;
	if (!e) return t;
	if (!t) return e;
	if (e.width !== t.width) return e.width > t.width ? e : t;
	let n = mn(e.color), r = mn(t.color);
	return n === r || n < r ? e : t;
}
//#endregion
//#region packages/pptx/src/smartart-fallback-contrast.ts
function gn(e) {
	let t = K(e.length === 8 ? e.slice(0, 6) : e);
	if (!t) return null;
	let n = re(t[0], t[1], t[2]);
	if (e.length !== 8) return n;
	let r = Number.parseInt(e.slice(6, 8), 16);
	if (Number.isNaN(r)) return null;
	let i = r / 255;
	return i * n + (1 - i);
}
function _n(e) {
	if (!e) return null;
	if (e.fillType === "solid") return gn(e.color);
	if (e.fillType === "gradient") {
		let t = e.stops.map((e) => ({
			p: Math.min(1, Math.max(0, e.position)),
			l: gn(e.color)
		})).filter((e) => e.l !== null).sort((e, t) => e.p - t.p);
		if (t.length === 0) return null;
		let n = t[0], r = t[t.length - 1], i = n.l * n.p + r.l * (1 - r.p);
		for (let e = 0; e + 1 < t.length; e++) i += (t[e].l + t[e + 1].l) / 2 * (t[e + 1].p - t[e].p);
		return i;
	}
	return null;
}
function vn(e) {
	return e.name === "SmartArt" && e.id === void 0;
}
function yn(e, t) {
	let n = _n(e);
	if (n === null || n >= .5) return null;
	let r = gn(t.replace(/^#/, ""));
	return r !== null && r >= .5 ? null : "#FFFFFF";
}
//#endregion
//#region packages/pptx/src/tab-layout.ts
function bn(e, t, n, r, i, a = 0) {
	let o = e.map((e) => e.width), s = (t) => {
		let n = 0;
		for (let r = t; r < e.length && !e[r].isTab; r++) n += o[r];
		return n;
	}, c = n;
	for (let n = 0; n < e.length; n++) {
		if (!e[n].isTab) {
			c += o[n];
			continue;
		}
		let l = null;
		for (let e of t) e.pos > c && (l === null || e.pos < l.pos) && (l = e);
		if (l === null) if (a > 0) l = {
			pos: (Math.floor(c / a) + 1) * a,
			algn: "l"
		};
		else {
			o[n] = i, c += i;
			continue;
		}
		let u = s(n + 1), d = l.algn === "ctr" ? .5 : +(l.algn === "r" || l.algn === "dec"), f = l.pos - u * d;
		f + u > r && (f = r - u), f < c && (f = c), o[n] = f - c, c = f;
	}
	return o;
}
//#endregion
//#region packages/pptx/src/vertical-text.ts
var xn = () => !1;
function Sn(e, t, n) {
	let r = e.textBaseline;
	e.textBaseline = "alphabetic";
	let i = e.measureText(t);
	e.textBaseline = r;
	let a = i.fontBoundingBoxAscent, o = i.fontBoundingBoxDescent;
	return typeof a == "number" && typeof o == "number" && (a !== 0 || o !== 0) ? (a - o) / 2 : .38 * n;
}
function Cn(e, t) {
	let n = e.textAlign, r = e.textBaseline;
	e.textAlign = "center", e.textBaseline = "middle";
	let i = e.measureText(t);
	e.textAlign = n, e.textBaseline = r;
	let a = i.actualBoundingBoxAscent, o = i.actualBoundingBoxDescent;
	return typeof a == "number" && typeof o == "number" ? (a - o) / 2 : 0;
}
function wn(e, t, n, r, i, a, o = "fill", s = xn) {
	let c = e.textAlign, l = e.textBaseline, u = o === "stroke" ? e.strokeText.bind(e) : e.fillText.bind(e), d = r - Sn(e, t, i), f = 0;
	for (let o of t) {
		let t = o.codePointAt(0) ?? 0, l = oe(t), p = e.measureText(o).width + a, m = l === "Tr" ? A(t) : null, h = l === "Tr" && m === null && N(t), g = l === "U" || l === "Tu" || m !== null || h;
		if (j(t) && s(t)) {
			let t = n + f + p / 2;
			e.save(), e.translate(t, d), e.rotate(-Math.PI / 2), e.textAlign = "center", e.textBaseline = "middle", G(e, () => u(o, 0, 0)), e.restore();
		} else if (g) {
			let r = m === null && l === "Tu" ? V(t) : null, a = m === null ? r : m, s = a === null ? o : String.fromCodePoint(a), c = n + f + p / 2, h = r === null ? Cn(e, s) / i : 0;
			e.save(), e.translate(c, d), e.rotate(-Math.PI / 2), e.textAlign = "center", e.textBaseline = "middle", u(s, 0, h * i), e.restore();
		} else if (l === "Tr") {
			let t = n + f + p / 2;
			e.textAlign = "center", e.textBaseline = "middle", u(o, t, d);
		} else e.textAlign = c, e.textBaseline = "alphabetic", u(o, n + f, r);
		f += p;
	}
	e.textAlign = c, e.textBaseline = l;
}
function Tn(e, t, n, r, i, a, o = "fill") {
	wn(e, t, n, r, i, a, o, (t) => D(e, t));
}
//#endregion
//#region packages/pptx/src/renderer.ts
function X(e, t) {
	return e * t;
}
function En(e, t, n, r) {
	let i = Pe(Math.abs(e * n), Math.abs(t * n), r);
	return i ? {
		targetWidthPx: i.width,
		targetHeightPx: i.height
	} : void 0;
}
function Z(e, t) {
	return Ye(e, t);
}
function Dn(e, t) {
	let n = e.targets.get(t);
	return n ? {
		targetWidthPx: n.width,
		targetHeightPx: n.height,
		maxRetainedPixels: n.maxRetainedPixels
	} : void 0;
}
function On(e) {
	return J(e) ? e.svgImagePath : e.imagePath;
}
function kn(e, t, n, r) {
	let i = Qe(t.bullet);
	if (i.type !== "blip") return;
	let a;
	for (let e of t.runs) if (e.type === "text" && e.fontSize != null) {
		a = e.fontSize;
		break;
	}
	let o = a ?? t.defFontSize ?? e.defaultFontSize ?? 18, s = i.sizePts == null ? o * ((i.sizePct ?? 100) / 100) : i.sizePts;
	return Math.max(1, s * Y * n * r);
}
async function An(e, t, n, r, a, o, s, c, l, u) {
	let d = de(o), f = [], p = [], m = (e, t, n, r, a, o = 1, s = a) => {
		if (!(!t || !a)) {
			if (i(r) && (d.resolution === "display" || d.strategy === "adaptive")) {
				f.push({
					key: e,
					...t,
					retainedSurfaceCount: o
				});
				return;
			}
			p.push(U(n, r, a, s).then((n) => n.dimensions && ce(n.format, u !== void 0) ? {
				key: e,
				...t,
				sourceWidthPx: n.dimensions.width,
				sourceHeightPx: n.dimensions.height,
				retainedSurfaceCount: o
			} : null).catch(() => null));
		}
	}, h = e.background;
	if (h?.fillType === "image" && h.imagePath && !h.tile && !h.duotone) {
		let e = h.fillRect ?? {}, r = t * (1 - (e.l ?? 0) - (e.r ?? 0)), i = n * (1 - (e.t ?? 0) - (e.b ?? 0));
		m(Z(h.imagePath, h.duotone), En(r, i, a, h.srcRect), h.imagePath, h.mimeType, s, 1);
	}
	for (let t of e.elements) if (t.type === "picture") !(J(t) || t.mimeType === "image/svg+xml") && !t.duotone && m(Z(t.imagePath, t.duotone), En(X(t.width, r), X(t.height, r), a, t.srcRect), t.imagePath, t.mimeType, s, 1);
	else if (t.type === "media" && t.posterPath) {
		let e = c ? qr(c) : void 0;
		m(Z(t.posterPath), En(X(t.width, r), X(t.height, r), a), t.posterPath, t.posterMimeType || "application/octet-stream", e, 1, l ?? e);
	} else if (t.type === "chart") {
		let e = {
			widthPt: t.width / Y,
			heightPt: t.height / Y,
			targetWidthPx: X(t.width, r) * a,
			targetHeightPx: X(t.height, r) * a
		};
		for (let n of Te(t.chart)) {
			let t = n.fill, r = Ee(n, e);
			!(t.mimeType === "image/svg+xml" || J({
				svgImagePath: t.svgImagePath,
				srcRect: n.hasSourceCrop ? !0 : null
			})) && !t.duotone && !n.preserveNaturalSize && r?.targetWidthPx && r.targetHeightPx && m(Z(t.imagePath, t.duotone), {
				targetWidthPx: r.targetWidthPx,
				targetHeightPx: r.targetHeightPx
			}, t.imagePath, t.mimeType, s, 1);
		}
	} else if (t.type === "shape" && t.textBody) for (let e of t.textBody.paragraphs) {
		let n = Qe(e.bullet);
		if (n.type !== "blip") continue;
		let i = kn(t.textBody, e, r, a);
		!i || !s || p.push(U(n.imagePath, n.mimeType, s).then((e) => e.dimensions && e.dimensions.width > 0 && e.dimensions.height > 0 && ce(e.format, u !== void 0) ? {
			key: Z(n.imagePath),
			targetWidthPx: i * e.dimensions.width / e.dimensions.height,
			targetHeightPx: i,
			sourceWidthPx: e.dimensions.width,
			sourceHeightPx: e.dimensions.height
		} : null).catch(() => null));
	}
	return f.push(...(await Promise.all(p)).filter((e) => e !== null)), k(f, d);
}
function jn(e) {
	return e.background?.fillType === "image" ? !0 : e.elements.some((e) => e.type === "picture" ? !0 : e.type === "media" ? !!e.posterPath : e.type === "chart" ? Te(e.chart).length > 0 : e.type === "shape" && !!e.textBody?.paragraphs.some((e) => Qe(e.bullet).type === "blip"));
}
var Q = Oe;
function Mn(e, t, n, r, i, a, o) {
	let { top: s, height: c } = Qt(n, i);
	e.fillStyle = a, e.fillRect(t, s, r, c), e.fillStyle = o;
}
function Nn(e, t, n, r, i, a, o = 0) {
	return Fe(e, t, n, r, i, a, o);
}
var Pn = /* @__PURE__ */ new WeakMap();
function Fn(e, t) {
	let n = e.tinted.get(t);
	if (n) return n;
	let r = ae(e.raster, t);
	return e.tinted.set(t, r), r;
}
function In(e) {
	let t = [], n = (e) => {
		if (e) for (let n of e.paragraphs) for (let e of n.runs) e.type === "math" && t.push({
			nodes: e.nodes,
			display: e.display
		});
	};
	for (let t of e.elements) if (t.type === "shape") n(t.textBody);
	else if (t.type === "table") for (let e of t.rows) for (let t of e.cells) n(t.textBody);
	return t;
}
async function Ln(e, t) {
	let n = In(e);
	if (n.length !== 0) {
		await t.loadMathJax();
		for (let e of n) if (!Pn.has(e.nodes)) try {
			let n = await t.mathMLToSvg(te(e.nodes, e.display)), r = await M(n, "#000000");
			Pn.set(e.nodes, {
				raster: r,
				widthEm: n.widthEm,
				ascentEm: n.ascentEm,
				descentEm: n.descentEm,
				tinted: /* @__PURE__ */ new Map()
			});
		} catch {}
	}
}
function Rn(e, t) {
	let n = (e) => t.embeddedFontAliases?.get(e.trim().toLowerCase()) ?? e;
	if (!e) return n(t.themeMinorFont ?? "sans-serif");
	if (e.startsWith("+")) return n(e === "+mj-lt" || e === "+mj-ea" || e === "+mj-cs" ? t.themeMajorFont ?? "sans-serif" : t.themeMinorFont ?? "sans-serif");
	let r = e.split(",")[0].trim();
	return r ? n(r) : t.themeMinorFont ?? "sans-serif";
}
var zn = new Set([
	"serif",
	"sans-serif",
	"monospace",
	"cursive",
	"fantasy",
	"system-ui"
]);
function Bn(e) {
	let t = r(e);
	return t === "mono" ? "monospace" : t === "serif" ? "serif" : "sans-serif";
}
var Vn = {
	calibri: "Carlito",
	"calibri light": "Carlito",
	cambria: "Caladea",
	"cambria math": "Caladea",
	"franklin gothic book": "Libre Franklin",
	"franklin gothic medium": "Libre Franklin",
	"sakkal majalla": "Noto Naskh Arabic",
	"traditional arabic": "Noto Naskh Arabic",
	"simplified arabic": "Noto Naskh Arabic",
	"arabic typesetting": "Noto Naskh Arabic",
	"univers next arabic": "Noto Sans Arabic"
}, Hn = "\"Noto Naskh Arabic\", \"Noto Sans Arabic\"";
function Un(e) {
	if (Vn[e.toLowerCase()]?.includes("Arabic")) return !0;
	let t = e.toLowerCase();
	return /arabic|naskh|kufi|nastaliq|amiri|scheherazade|lateef|aldhabi|urdu|farsi|العرب|[؀-ۿ]/.test(t);
}
function Wn(e) {
	return e.map((e) => `"${e}"`).join(", ");
}
function Gn(e, t = e) {
	let n = Bn(t), r = Vn[t.toLowerCase()], i = r ? `"${r}", ` : "", a = C(t), o = a ? `"${a}", ` : "";
	if (Un(t)) return `"${e}", ${i}${Hn}, ${n}`;
	let c = n === "serif" ? "serif" : "sans", l = fe(t), u = l ? v(l, c).filter((e) => e !== a) : [];
	return `"${e}", ${i}${o}${u.length > 0 ? `${Wn(u)}, ` : ""}${`${Wn(c === "serif" ? s : g)}, `}${n}`;
}
function Kn(e) {
	return e ? e.kind === "external" ? `e:${e.url}` : `i:${e.ref}` : "";
}
function qn(e) {
	let t = e.toLowerCase();
	return /\b(thin|hairline)\b/.test(t) ? 100 : /\b(extra[- ]?light|ultra[- ]?light)\b/.test(t) ? 200 : /\blight\b/.test(t) ? 300 : /\b(black|heavy)\b/.test(t) ? 900 : /\b(extra[- ]?bold|ultra[- ]?bold)\b/.test(t) ? 800 : /\b(semi[- ]?bold|demi[- ]?bold)\b/.test(t) ? 600 : /\bbold\b/.test(t) ? 700 : /\bmedium\b/.test(t) ? 600 : null;
}
function Jn(e, t, n, r, i, a, o, s) {
	let c = Math.max(0, r.blur * i), l = Math.ceil(c * 3) + 2, u = Math.max(0, Math.floor(n.x - l)), d = Math.max(0, Math.floor(n.y - l)), f = Math.min(o, Math.ceil(n.x + n.w + l)), p = Math.min(s, Math.ceil(n.y + n.h + l)), m = Math.max(1, f - u), h = Math.max(1, p - d), g = Ae(m, h), _ = g?.getContext("2d");
	if (!g || !_) return;
	_.save(), _.setTransform(a.a, a.b, a.c, a.d, a.e - u, a.f - d), t(_), _.restore();
	let v = n.y - d, y = v + n.h, b = g, x = _;
	if (c > 0) {
		let e = Ae(m, h), t = e?.getContext("2d");
		e && t && (b = e, x = t);
	}
	b !== g && nn(x, g, {
		x: n.x - u,
		y: v,
		w: n.w,
		h: n.h
	}, c, m);
	let S = Math.max(0, Math.min(1, r.stPos)), C = Math.max(0, Math.min(1, r.endPos)), w = Math.max(1, y - v);
	try {
		let e = x.getImageData(0, 0, m, h);
		for (let t = 0; t < h; t++) {
			let n = Math.max(0, Math.min(1, (y - (t + .5)) / w)), i;
			if (n <= S) i = r.stA;
			else if (n >= C || C <= S) i = r.endA;
			else {
				let e = (n - S) / (C - S);
				i = r.stA + (r.endA - r.stA) * e;
			}
			let a = Math.max(0, Math.min(1, i));
			for (let n = t * m * 4 + 3; n < (t + 1) * m * 4; n += 4) e.data[n] = Math.round(e.data[n] * a);
		}
		x.putImageData(e, 0, 0);
	} catch {
		x.save(), x.globalCompositeOperation = "destination-in", x.fillStyle = `rgba(0,0,0,${Math.max(0, Math.min(1, r.stA))})`, x.fillRect(0, 0, m, h), x.restore();
	}
	let T = r.dist * i, E = r.dir * Math.PI / 180, D = n.y + n.h;
	e.save(), e.setTransform(1, 0, 0, 1, 0, 0), e.translate(n.x + Math.cos(E) * T, D + Math.sin(E) * T), e.scale(r.sx, r.sy), e.translate(-n.x, -D), e.drawImage(b, u, d), e.restore();
}
function Yn(e, t, n, r, i) {
	let a = t ? "italic " : "", o = Rn(r, i), s = i.embeddedFontAuthoredFamilies?.get(o) ?? o, c = qn(s), l = e ? "bold " : c ? `${c} ` : "";
	return zn.has(o) ? `${a}${l}${n}px ${o}` : `${a}${l}${n}px ${Gn(o, s)}`;
}
function Xn(e) {
	return e.bullet.type === "char" || e.bullet.type === "autoNum" || Qe(e.bullet).type === "blip";
}
function Zn(e, t, n) {
	let r = null;
	for (let e of t.runs) if (e.type === "text" && e.fontSize != null) {
		r = e.fontSize;
		break;
	}
	let i = r ?? t.defFontSize ?? e.defaultFontSize ?? 18;
	return n.sizePts == null ? i * ((n.sizePct ?? 100) / 100) : n.sizePts;
}
function Qn(e, t) {
	return e ? 0 : Math.max(0, t);
}
function $n(e, t) {
	return t != null && t !== 0 ? e * .65 : e;
}
function er(e, t, n, r, i, a, o) {
	let s = (t.defaultFontSize ?? 18) * Y * a;
	for (let c of t.paragraphs) {
		let l = X(c.marL, a), u = X(c.marR, a), d = X(c.indent, a), f = Qn(Xn(c), d), p = n - r - i - l - u - f, m = 0;
		for (let n of c.runs) {
			if (n.type !== "text") continue;
			let r = n.fontSize == null ? c.defFontSize == null ? s : c.defFontSize * Y * a : n.fontSize * Y * a, i = Rn(n.fontFamily ?? c.defFontFamily ?? null, o);
			e.font = Yn(n.bold ?? c.defBold ?? t.defaultBold ?? !1, n.italic ?? c.defItalic ?? t.defaultItalic ?? !1, $n(r, n.baseline ?? void 0), i, o);
			let l = (n.letterSpacing ?? 0) * Y * a;
			if (m += $(e, n.text, l), m > p) return !0;
		}
	}
	return !1;
}
function tr(e) {
	for (let t of e) if (y(t.codePointAt(0) ?? 0)) return !0;
	return !1;
}
function nr(e) {
	let t = 0;
	for (let n of e) t++;
	return t;
}
var rr = /* @__PURE__ */ new WeakMap();
function ir(e) {
	let t = rr.get(e);
	if (t != null) return t;
	let n = e, r = n.letterSpacing;
	if (typeof r != "string") return rr.set(e, !1), !1;
	let i = !1;
	try {
		n.letterSpacing = "0px";
		let t = e.measureText("ii").width;
		n.letterSpacing = "1px";
		let r = e.measureText("ii").width;
		i = Number.isFinite(t) && Number.isFinite(r) && r !== t;
	} catch {
		i = !1;
	} finally {
		try {
			n.letterSpacing = r;
		} catch {}
	}
	return rr.set(e, i), i;
}
function $(e, t, n) {
	let r = e, i = r.letterSpacing;
	if (n !== 0 && ir(e)) try {
		r.letterSpacing = `${n}px`;
		let i = e.measureText(t).width;
		if (Number.isFinite(i)) return t.length > 0 ? i - n : i;
	} finally {
		try {
			r.letterSpacing = i;
		} catch {}
	}
	let a = Math.max(0, nr(t) - 1);
	return e.measureText(t).width + n * a;
}
function ar(e, t, n, r, i, o, s, c = !1, l = !1, u = 1, d, f = {
	themeMajorFont: null,
	themeMinorFont: null,
	dpr: 1
}, p = 0) {
	let m = [], h = /* @__PURE__ */ new Map(), g = !0;
	for (let e = t.runs.length - 1; e >= 0 && g; e--) {
		let n = t.runs[e];
		if (n.type === "break") continue;
		if (n.type === "math") break;
		let r = n.text.replace(/ +$/u, "");
		r !== n.text && h.set(n, r), (r.length > 0 || n.fieldType != null) && (g = !1);
	}
	let _ = () => n - (m.length === 0 ? p : 0), v = { segments: [] }, b = 0, x = !1, S = t.rtl === !0, C = X(t.marR, o), w = (t.tabStops ?? []).map((e) => ({
		pos: X(e.pos, o),
		algn: e.algn
	})), T = X(t.defTabSz ?? 914400, o), D = !1, k = [], A = 0, j = () => S ? C : s + (m.length === 0 ? p : 0), M = (e = 0) => {
		let t = bn(e > 0 ? [...k, {
			isTab: !1,
			width: e
		}] : k, w, j(), Infinity, A, T), n = 0;
		for (let e of t) n += e;
		return n;
	}, N = (e) => {
		let t = _();
		return Number.isFinite(t) ? D ? M(e) <= t : b + e <= t : !0;
	}, P = () => {
		let e = _();
		if (!D) return e - b;
		if (!Number.isFinite(e)) return Infinity;
		if (M(0) >= e) return 0;
		let t = 0, n = e;
		for (let r = 0; r < 40; r++) {
			let r = (t + n) / 2;
			M(r) <= e ? t = r : n = r;
		}
		return t;
	}, I = (e = !1) => {
		e && (v.endsWithBreak = !0), m.push(v), v = { segments: [] }, b = 0, D = !1, k = [], x = !1;
	}, L = (t, n, r, i) => {
		e.font = n;
		let a = $(e, t, r), o = v.segments.at(-1);
		return !o || o.isTab || o.math || o.sourceRunId !== i ? a : o.font === n && (o.letterSpacingPx ?? 0) === r ? $(e, o.text + t, r) - $(e, o.text, r) : a + r;
	}, R = (t, n, r, i, a, o, s, c) => {
		if (!t) return;
		e.font = n;
		let l = c?.letterSpacingPx ?? 0, u = c?.sourceRunId, d = c?.strikeDouble, f = c?.underlineStyle, p = c?.underlineColor, m = c?.shadow, h = c?.reflection, g = c?.outline, _ = c?.highlight, y = c?.hyperlink, x = c?.drawSizePx ?? r, S = (e) => !e.math && !e.isTab && e.font === n && e.color === i && e.underline === a && (e.underlineStyle ?? "") === (f ?? "") && (e.underlineColor ?? "") === (p ?? "") && e.strikethrough === o && (e.strikeDouble ?? !1) === (d ?? !1) && (e.letterSpacingPx ?? 0) === l && e.baseline === s && e.shadow === m && e.reflection === h && e.outline === g && (e.highlight ?? "") === (_ ?? "") && (e.drawSizePx ?? e.sizePx) === x && Kn(e.hyperlink) === Kn(y) && (l === 0 || e.sourceRunId === u), C = v.segments.at(-1), w = $(e, t, l);
		if (C && S(C) ? w = $(e, C.text + t, l) - $(e, C.text, l) : C && !C.isTab && !C.math && u != null && C.sourceRunId === u && (w += l), b += w, k.push({
			isTab: !1,
			width: w
		}), C && S(C)) C.text += t;
		else {
			let e = C && !C.isTab && !C.math && u != null && C.sourceRunId === u ? l : 0;
			v.segments.push({
				text: t,
				font: n,
				sizePx: r,
				drawSizePx: x,
				color: i,
				underline: a,
				underlineStyle: f,
				underlineColor: p,
				strikethrough: o,
				strikeDouble: d,
				letterSpacingPx: l || void 0,
				sourceRunId: u,
				leadingLetterSpacingPx: e || void 0,
				baseline: s,
				shadow: m,
				reflection: h,
				outline: g,
				highlight: _,
				hyperlink: y
			});
		}
	}, z = () => {
		let e = v.segments.at(-1);
		if (!e || e.math) return !1;
		let t = /^(.*\s)(\S+)$/s.exec(e.text), n;
		if (t) e.text = t[1], n = t[2];
		else if (v.segments.length > 1) v.segments.pop(), n = e.text;
		else return !1;
		return I(), R(n, e.font, e.sizePx, e.color, e.underline, e.strikethrough, e.baseline, {
			strikeDouble: e.strikeDouble,
			letterSpacingPx: e.letterSpacingPx,
			underlineStyle: e.underlineStyle,
			underlineColor: e.underlineColor,
			shadow: e.shadow,
			reflection: e.reflection,
			outline: e.outline,
			highlight: e.highlight,
			sourceRunId: e.sourceRunId,
			drawSizePx: e.drawSizePx
		}), !0;
	};
	for (let [n, s] of t.runs.entries()) {
		if (s.type === "break") {
			I(!0);
			continue;
		}
		if (s.type === "math") {
			let e = Pn.get(s.nodes), t = s.fontSize == null ? r : s.fontSize * Y * o * u, n = e ? e.widthEm * t : 0, a = e ? e.ascentEm * t : 0, c = e ? e.descentEm * t : 0;
			(s.display && b > 0 || !N(n) && b > 0) && I(), k.push({
				isTab: !1,
				width: n
			}), v.segments.push({
				text: "",
				font: `${t}px sans-serif`,
				sizePx: t,
				color: s.color ? Q(s.color) : i,
				underline: !1,
				strikethrough: !1,
				math: {
					nodes: s.nodes,
					display: s.display,
					width: n,
					ascent: a,
					descent: c
				}
			}), b += n, s.display && I();
			continue;
		}
		let p = s.fontSize == null ? r : s.fontSize * Y * o * u, m = $n(p, s.baseline ?? void 0), g = Rn(s.fontFamily ?? t.defFontFamily ?? null, f), S = s.fontFamilyEa ? Rn(s.fontFamilyEa, f) : null, C = s.fontFamilySym ? Rn(s.fontFamilySym, f) : null, w;
		w = s.color ? Q(s.color) : s.hyperlink && f.themeHlinkColor ? Q(f.themeHlinkColor) : i;
		let T = s.bold ?? t.defBold ?? c, j = s.italic ?? t.defItalic ?? l, M = Yn(T, j, m, g, f), B = S ? Yn(T, j, m, S, f) : M;
		e.font = M;
		let V = s.caps, H = h.get(s) ?? s.text;
		(V === "all" || V === "small") && (H = H.toUpperCase());
		let U = s.fieldType === "slidenum" && d !== void 0 ? String(d) : H, W = s.underline || s.hyperlink !== void 0, te = s.strikeDouble === !0, G = s.letterSpacing == null ? 0 : s.letterSpacing * Y * o, K = {
			strikeDouble: te,
			letterSpacingPx: G,
			underlineStyle: s.underlineStyle,
			underlineColor: s.underlineColor ? Q(s.underlineColor) : void 0,
			shadow: s.shadow,
			reflection: s.reflection,
			outline: s.outline,
			highlight: s.highlight ? Q(s.highlight) : void 0,
			hyperlink: rn(s.hyperlink),
			sourceRunId: n,
			drawSizePx: m
		}, J = U.split(/(\s+)/);
		for (let r of J) {
			if (!r) continue;
			if (/^\t+$/.test(r)) {
				D || (e.font = M, A = e.measureText(" ").width);
				for (let e of r) v.segments.push({
					text: "",
					isTab: !0,
					font: M,
					sizePx: p,
					color: w,
					underline: !1,
					strikethrough: !1
				}), k.push({
					isTab: !0,
					width: 0
				});
				D = !0;
				continue;
			}
			e.font = M;
			let i = L(r, M, G, n), o = /^\s+$/.test(r), c = /[-]/;
			if (c.test(r) && (C != null || ge(g))) {
				let t = C ?? g;
				for (let i of r) {
					let r = i, a = M;
					if (c.test(i)) {
						let e = be(i, t);
						e === i ? a = Yn(T, j, m, t, f) : (r = e, a = Yn(T, j, m, "sans-serif", f));
					}
					e.font = a, !N(L(r, a, G, n)) && b > 0 && I(), R(r, a, p, w, W, s.strikethrough, s.baseline ?? void 0, K);
				}
				continue;
			}
			if (tr(r) && (!q(r) || t.eaLnBrk === !1)) {
				let i = [], o = "", c = () => {
					o !== "" && (e.font = M, i.push({
						ch: o,
						w: $(e, o, G),
						font: M
					}), o = "");
				};
				for (let t of r) {
					if (!y(t.codePointAt(0) ?? 0)) {
						o += t;
						continue;
					}
					c();
					let n = S == null ? M : B;
					e.font = n, i.push({
						ch: t,
						w: $(e, t, 0),
						font: n
					});
				}
				if (c(), t.eaLnBrk === !1) {
					let e = v.segments.at(-1), t = !!e && !e.isTab && !e.math && e.sourceRunId === n, r = i.reduce((e, t) => e + t.w, 0) + Math.max(0, i.length - 1) * G + (t && i.length > 0 ? G : 0);
					b > 0 && !N(r) && I();
					for (let e of i) R(e.ch, e.font, p, w, W, s.strikethrough, s.baseline ?? void 0, K);
					continue;
				}
				let l = i;
				for (; l.length > 0;) {
					let e = Number.isFinite(_()) ? _() - P() : b, t = v.segments.at(-1), r = !!t && !t.isTab && !t.math && t.sourceRunId === n, i = un(l, e, _(), a, G, r);
					if (i === 0) {
						if (b > 0) {
							I();
							continue;
						}
						i = 1;
					}
					for (let e = 0; e < i; e++) {
						let t = l[e];
						R(t.ch, t.font, p, w, W, s.strikethrough, s.baseline ?? void 0, K);
					}
					l = l.slice(i), l.length > 0 && I();
				}
				continue;
			}
			if (q(r)) {
				let t = O(r, {
					cjk: !0,
					kinsoku: a
				}), i = S != null && B !== M, o = (e) => i && y(e.codePointAt(0) ?? 0), c = (t) => {
					let r = 0, i = v.segments.at(-1), a = !!i && !i.isTab && !i.math && i.sourceRunId === n, s = "", c = null, l = () => {
						s !== "" && (e.font = c ? B : M, r += $(e, s, G), a && (r += G), a = !0, s = "");
					};
					for (let e of t) {
						let t = o(e);
						c === null || t === c ? (s += e, c = t) : (l(), s = e, c = t);
					}
					return l(), r;
				}, l = (e) => {
					let t = "", n = null, r = () => {
						t !== "" && (R(t, n ? B : M, p, w, W, s.strikethrough, s.baseline ?? void 0, K), t = "");
					};
					for (let i of e) {
						let e = o(i);
						n === null || e === n ? (t += i, n = e) : (r(), t = i, n = e);
					}
					r();
				}, u = E(r), d = r.length, f = 0;
				for (; f < d;) {
					let e = P(), n = ee(r, t, f, e, c, u);
					if (n <= f) {
						if (b > 0) {
							I();
							continue;
						}
						let i = t.find((e) => e > f) ?? d, a = r.slice(f, i), o = F(a), s = ee(a, o, 0, e, c, u);
						s <= 0 && (s = o.length > 0 ? o[0] : a.length), n = f + s;
					}
					l(r.slice(f, n)), f = n, f < d && I();
				}
				continue;
			}
			if (N(i)) R(r, M, p, w, W, s.strikethrough, s.baseline ?? void 0, K), o && (x = !0);
			else if (o) b > 0 && I();
			else if (i > _()) {
				b > 0 && I();
				for (let t of r) e.font = M, !N(L(t, M, G, n)) && b > 0 && I(), R(t, M, p, w, W, s.strikethrough, s.baseline ?? void 0, K);
			} else if (x) {
				let e = v.segments.at(-1)?.text ?? "", t = r.codePointAt(0), n = [...e].at(-1)?.codePointAt(0), i = /\S$/u.test(e) && /^\S/u.test(r) && n !== 8203 && t !== 8203, o = t !== void 0 && a.lineStartForbidden.has(t) && i, c = n !== void 0 && t !== void 0 && i && !q(e) && !q(r) && le(n, t);
				(o || c) && z() || I(), R(r, M, p, w, W, s.strikethrough, s.baseline ?? void 0, K);
			} else {
				let e = [...v.segments.at(-1)?.text ?? ""].at(-1)?.codePointAt(0), t = r.codePointAt(0);
				e !== void 0 && t !== void 0 && y(e) !== y(t) && !le(e, t) && b > 0 && I(), R(r, M, p, w, W, s.strikethrough, s.baseline ?? void 0, K);
			}
		}
	}
	return m.push(v), m;
}
async function or(e, t, n, r, i, a, o, s, c, l) {
	if (t && t.fillType === "image") {
		if (e.fillStyle = "#FFFFFF", e.fillRect(0, 0, n, r), !t.imagePath || !t.mimeType || !o) return;
		try {
			let u = t.fillRect ?? {}, d = u.l ?? 0, f = u.t ?? 0, p = u.r ?? 0, m = u.b ?? 0, h = d * n, g = f * r, _ = n * (1 - d - p), v = r * (1 - f - m), y = l && !t.duotone ? Dn(l, Z(t.imagePath, t.duotone)) : void 0, b = t.tile ? await U(t.imagePath, t.mimeType, o) : void 0, x = await Je(t.imagePath, t.mimeType, t.duotone, o, {
				widthPt: n / i / Y,
				heightPt: r / i / Y,
				...y ?? {},
				tiff: s,
				svgDecoder: c
			});
			if (a() || !x) return;
			e.save(), e.beginPath(), e.rect(0, 0, n, r), e.clip(), t.alpha != null && (e.globalAlpha = t.alpha), t.tile ? ur(e, x, t.tile, n, r, i, t.srcRect, b?.dimensions ?? void 0) : je(e, x, t.srcRect, h, g, _, v), e.restore();
		} catch (t) {
			if (ue(t, "tiff")) {
				b(e, "tiff", {
					x: 0,
					y: 0,
					width: n,
					height: r
				});
				return;
			}
			if (Le(t) || qe(t)) throw t;
		}
		return;
	}
	e.fillStyle = Nn(t, e, 0, 0, n, r) ?? "#FFFFFF", e.fillRect(0, 0, n, r);
}
var sr = 9525;
function cr(e, t, n, r, i) {
	let a;
	a = e === "t" || e === "ctr" || e === "b" ? (t - r) / 2 : e === "tr" || e === "r" || e === "br" ? t - r : 0;
	let o;
	return o = e === "l" || e === "ctr" || e === "r" ? (n - i) / 2 : e === "bl" || e === "b" || e === "br" ? n - i : 0, {
		ax: a,
		ay: o
	};
}
function lr(e, t, n) {
	return {
		width: e * (n ? 1 - n.l - n.r : 1),
		height: t * (n ? 1 - n.t - n.b : 1)
	};
}
function ur(e, t, n, r, i, a, o, s) {
	let c = lr(s?.width ?? t.width, s?.height ?? t.height, o), l = c.width * sr * (n.sx ?? 1) * a, u = c.height * sr * (n.sy ?? 1) * a;
	if (!(l > 0) || !(u > 0)) return;
	let d = n.flip === "x" || n.flip === "xy", f = n.flip === "y" || n.flip === "xy", p = Ae(l * (d ? 2 : 1), u * (f ? 2 : 1));
	if (!p) return;
	let m = p.getContext("2d");
	if (!m) return;
	let h = (e, n, r, i) => {
		m.save(), m.translate(e + (r ? l : 0), n + (i ? u : 0)), m.scale(r ? -1 : 1, i ? -1 : 1), je(m, t, o, 0, 0, l, u), m.restore();
	};
	h(0, 0, !1, !1), d && h(l, 0, !0, !1), f && h(0, u, !1, !0), d && f && h(l, u, !0, !0);
	let g = e.createPattern(p, "repeat");
	if (!g) return;
	let { ax: _, ay: v } = cr(n.algn ?? "tl", r, i, l, u), y = _ + X(n.tx ?? 0, a), b = v + X(n.ty ?? 0, a);
	typeof g.setTransform == "function" && typeof DOMMatrix < "u" ? (g.setTransform(new DOMMatrix().translateSelf(y, b)), e.fillStyle = g, e.fillRect(0, 0, r, i)) : (e.save(), e.translate(y, b), e.fillStyle = g, e.fillRect(-y, -b, r, i), e.restore());
}
function dr(e, t, n) {
	if (!t) return;
	let r = t.dir * Math.PI / 180, i = X(t.dist, n);
	e.shadowColor = Q(t.color, t.alpha), e.shadowBlur = 0, e.shadowOffsetX = Math.cos(r) * i, e.shadowOffsetY = Math.sin(r) * i;
}
function fr(e, t, n) {
	t && (e.shadowColor = Q(t.color, t.alpha), e.shadowBlur = X(t.radius, n), e.shadowOffsetX = 0, e.shadowOffsetY = 0);
}
function pr(e) {
	e.shadowColor = "transparent", e.shadowBlur = 0, e.shadowOffsetX = 0, e.shadowOffsetY = 0;
}
var mr = 8, hr = 1, gr = 1, _r = 256;
function vr(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m) {
	if (r <= 0) return;
	let h = e.measureText(t), g = h.actualBoundingBoxAscent > 0 ? h.actualBoundingBoxAscent : r, _ = h.actualBoundingBoxDescent > 0 ? h.actualBoundingBoxDescent : r * .25, v = h.actualBoundingBoxLeft > 0 ? h.actualBoundingBoxLeft : 0, y = h.actualBoundingBoxRight > 0 ? h.actualBoundingBoxRight : r, b = r * l * i, x = Math.min(_r, Math.max(1, Math.round(b / mr))), S = (e) => xr(e, a, r, o, s, c, u, d), C = S(x), w = Cr(C, a, o, s, c, u, d, l, i, -g, _);
	for (; w > gr && x < _r;) {
		let e = Math.min(_r, x * 2), t = S(e), n = Cr(t, a, o, s, c, u, d, l, i, -g, _);
		if (n >= w * .75) {
			C = t;
			break;
		}
		x = e, C = t, w = n;
	}
	let T = 1e4, E = hr / (l * i), D = C.length - 1, O = (e, t, n) => e === 0 ? -T : t - n - E, k = (e, t, n) => e === D ? T : t - n + E, A = (e, r) => {
		e.fillStyle = r;
		for (let r = 0; r <= D; r++) {
			let { s0: i, s1: a, g: o } = C[r], s = (i + a) / 2;
			e.save(), e.translate(f + o.x, p + o.y), e.rotate(o.angle), o.shear !== 0 && e.transform(1, 0, o.shear, 1, 0, 0), (l !== 1 || o.vScale !== 1) && e.scale(l, o.vScale), e.beginPath();
			let c = O(r, i, s), u = k(r, a, s);
			e.rect(c, -T, u - c, 2 * T), e.clip(), e.fillText(t, -s + n / 2, 0), e.restore();
		}
	}, j = yr(m), M = typeof e.globalAlpha == "number" ? e.globalAlpha : 1;
	if (j >= 1 && M >= 1) {
		A(e, m);
		return;
	}
	if (j <= 0 || M <= 0) return;
	let N = typeof e.getTransform == "function" ? e.getTransform() : null;
	if (!N) {
		A(e, m);
		return;
	}
	let P = Infinity, F = Infinity, I = -Infinity, L = -Infinity;
	for (let e = 0; e <= D; e++) {
		let { s0: t, s1: r, g: i } = C[e], a = (t + r) / 2, o = -a + n / 2, s = Math.max(O(e, t, a), o - v), c = Math.min(k(e, r, a), o + y);
		if (!(c <= s)) for (let [e, t] of [
			[s, -g],
			[c, -g],
			[s, _],
			[c, _]
		]) {
			let n = Sr(i, l, e, t), r = f + n.x, a = p + n.y, o = N.a * r + N.c * a + N.e, s = N.b * r + N.d * a + N.f;
			o < P && (P = o), o > I && (I = o), s < F && (F = s), s > L && (L = s);
		}
	}
	if (!(I > P && L > F)) return;
	let R = Math.floor(P - 2), z = Math.floor(F - 2), B = Ae(Math.ceil(I + 2) - R, Math.ceil(L + 2) - z), V = B ? B.getContext("2d") : null;
	if (!B || !V) {
		A(e, m);
		return;
	}
	V.font = e.font, V.textAlign = "left", V.textBaseline = "alphabetic", V.setTransform(N.a, N.b, N.c, N.d, N.e - R, N.f - z), A(V, br(m)), e.save(), e.setTransform(1, 0, 0, 1, 0, 0), e.globalAlpha = M * j, e.drawImage(B, R, z), e.restore();
}
function yr(e) {
	let t = /^rgba?\(\s*[\d.]+\s*,\s*[\d.]+\s*,\s*[\d.]+\s*,\s*([\d.]+)\s*\)$/i.exec(e);
	if (!t) return 1;
	let n = parseFloat(t[1]);
	return Number.isFinite(n) ? Math.min(1, Math.max(0, n)) : 1;
}
function br(e) {
	let t = /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i.exec(e);
	return t ? `rgb(${t[1]}, ${t[2]}, ${t[3]})` : e;
}
function xr(e, t, n, r, i, a, o, s) {
	let c = Array(e);
	for (let l = 0; l < e; l++) {
		let u = l / e * n, d = (l + 1) / e * n;
		c[l] = {
			s0: u,
			s1: d,
			g: ft(t, (r + (u + d) / 2) / i * a, o, s)
		};
	}
	return c;
}
function Sr(e, t, n, r) {
	let i = n * t, a = r * e.vScale, o = i + e.shear * a, s = Math.cos(e.angle), c = Math.sin(e.angle);
	return {
		x: e.x + s * o - c * a,
		y: e.y + c * o + s * a
	};
}
function Cr(e, t, n, r, i, a, o, s, c, l, u) {
	let d = 0;
	for (let f of e) {
		let e = (f.s0 + f.s1) / 2;
		for (let p of [f.s0, f.s1]) {
			let m = ft(t, (n + p) / r * i, a, o);
			for (let t of [l, u]) {
				let n = Sr(m, s, 0, t), r = Sr(f.g, s, p - e, t), i = Math.hypot(r.x - n.x, r.y - n.y) * c;
				i > d && (d = i);
			}
		}
	}
	return d;
}
function wr(e, t, n, r, i, a, o, s, c, l, u) {
	let d = i, f = a, p = Math.max(1, o), m = Math.max(1, s), h = ct(n, r, p, m);
	if (!h) return;
	let g = t.defaultBold ?? !1, _ = t.defaultItalic ?? !1, v = (t.defaultFontSize ?? 18) * Y * c, y = [];
	for (let n of t.paragraphs) {
		let t = ar(e, n, Infinity, n.defFontSize == null ? v : n.defFontSize * Y * c, n.defColor ? Q(n.defColor) : l, c, 0, g, _, 1, void 0, u, 0);
		for (let e of t) y.push(e);
	}
	if (y.length === 0) return;
	e.save(), e.textAlign = "left", e.textBaseline = "alphabetic";
	let b = -1, x = () => {
		if (b >= 0) return b;
		let t = typeof e.getTransform == "function" ? e.getTransform() : null, n = t ? Math.abs(t.a * t.d - t.b * t.c) : 1;
		return b = n > 0 ? Math.sqrt(n) : 1, b;
	}, S = y.length;
	for (let t = 0; t < S; t++) {
		let n = y[t], r = t / S, i = (t + 1) / S, a = 0, o = 0, s = 0, c = 0;
		for (let t of n.segments) {
			if (t.math) {
				a += t.math.width, o = Math.max(o, t.sizePx), s = Math.max(s, t.math.ascent), c = Math.max(c, t.math.descent);
				continue;
			}
			e.font = t.font;
			let n = t.letterSpacingPx ?? 0, r = e.measureText(t.text);
			a += r.width + n * nr(t.text), o = Math.max(o, t.sizePx), r.actualBoundingBoxAscent > 0 && (s = Math.max(s, r.actualBoundingBoxAscent)), r.actualBoundingBoxDescent > 0 && (c = Math.max(c, r.actualBoundingBoxDescent));
		}
		if (a <= 0) continue;
		let l = s + c > 0 ? s + c : o, u = h.singleEdge ? .8 : l > 0 ? s / l : .8, g = h.singleEdge ? 1 : p / a, _ = h.singleEdge ? m : l / (i - r), v = dt(h, a), b = 0;
		for (let t of n.segments) {
			if (t.math) {
				b += t.math.width;
				continue;
			}
			e.font = t.font, e.fillStyle = t.color;
			let n = t.letterSpacingPx ?? 0, o = [...t.text];
			for (let s of o) {
				let o = e.measureText(s).width + n, c = r + u * (i - r);
				if (!h.singleEdge && o > 0) {
					vr(e, s, n, o, x(), h, b, a, v, g, _, c, d, f, t.color), b += o;
					continue;
				}
				let l = ft(h, (b + o / 2) / a * v, _, c);
				e.save(), e.translate(d + l.x, f + l.y), e.rotate(l.angle), l.shear !== 0 && e.transform(1, 0, l.shear, 1, 0, 0), (g !== 1 || l.vScale !== 1) && e.scale(g, l.vScale), e.fillText(s, -o / 2 + n / 2, 0), e.restore(), b += o;
			}
		}
	}
	e.restore();
}
function Tr(e, t, n, r, i, a, o) {
	let s = Math.min(r, i);
	switch (e) {
		case "rightarrow":
		case "leftarrow": {
			let c = Math.min(Math.max(a ?? 5e4, 0), 1e5), l = s * Math.min(Math.max(o ?? 5e4, 0), 1e5) / 1e5, u = i * c / 2e5, d = n + i / 2 - u, f = 2 * u, p = Math.max(0, r - l);
			return e === "rightarrow" ? {
				tx: t,
				ty: d,
				tw: p,
				th: f
			} : {
				tx: t + l,
				ty: d,
				tw: p,
				th: f
			};
		}
		case "roundrect": {
			let e = s * Math.min(Math.max(a ?? 16667, 0), 1e5) / 1e5 * (1 - 1 / Math.SQRT2);
			return {
				tx: t + e,
				ty: n + e,
				tw: Math.max(0, r - 2 * e),
				th: Math.max(0, i - 2 * e)
			};
		}
		default: return null;
	}
}
function Er(e, t) {
	return e.defaultTextColor ? Q(e.defaultTextColor) : t.smartArtFallbackTextColor != null && vn(e) ? t.smartArtFallbackTextColor : null;
}
function Dr(e, t, n) {
	return {
		outerRotation: e,
		localFlipH: t,
		localFlipV: n
	};
}
function Or(e, t, n, r, i) {
	let a = [
		{
			x: t,
			y: n
		},
		{
			x: t + r,
			y: n
		},
		{
			x: t,
			y: n + i
		},
		{
			x: t + r,
			y: n + i
		}
	].map((t) => ({
		x: e.a * t.x + e.c * t.y + e.e,
		y: e.b * t.x + e.d * t.y + e.f
	})), o = Math.min(...a.map((e) => e.x)), s = Math.min(...a.map((e) => e.y)), c = Math.max(...a.map((e) => e.x)), l = Math.max(...a.map((e) => e.y));
	return {
		x: o,
		y: s,
		w: c - o,
		h: l - s
	};
}
var kr = {
	tl: [0, 0],
	t: [.5, 0],
	tr: [1, 0],
	l: [0, .5],
	ctr: [.5, .5],
	r: [1, .5],
	bl: [0, 1],
	b: [.5, 1],
	br: [1, 1]
};
function Ar(e, t, n) {
	return [e.a * t + e.c * n + e.e, e.b * t + e.d * n + e.f];
}
function jr(e, t, n, r, i, a) {
	let [o, s] = kr[a ?? "b"];
	return Ar(e, t + o * r, n + s * i);
}
function Mr(e, t, n, r, i, a, o, s) {
	let c = St(e, i, a).corners, l = (o > 0 ? Ge(c, o / i, o / a) ?? c : c).map((e) => Ar(t, n + e.x, r + e.y)), u = l.map(([e]) => e), d = l.map(([, e]) => e), f = Math.min(...u), p = Math.min(...d), m = Math.max(...u), h = Math.max(...d), [g, _] = kr[s ?? "b"], v = He(c, g, _);
	return {
		bbox: {
			x: f,
			y: p,
			w: m - f,
			h: h - p
		},
		anchor: v ? Ar(t, n + v.x, r + v.y) : jr(t, n, r, i, a, s)
	};
}
function Nr(e, t, n, r) {
	let i = Math.floor(n.x) - 1, a = Math.floor(n.y) - 1, o = Math.max(1, Math.ceil(n.x + n.w) - i + 1), s = Math.max(1, Math.ceil(n.y + n.h) - a + 1);
	if (r && (i + o <= 0 || a + s <= 0 || i >= r.w || a >= r.h) || Ve(o, s).clamped) return e;
	let c = null;
	try {
		c = Ae(o, s);
	} catch {
		return e;
	}
	let l = c?.getContext("2d");
	if (!c || !l) return e;
	l.setTransform(t.a, t.b, t.c, t.d, t.e - i, t.f - a), e(l);
	let u = {
		a: 1,
		b: 0,
		c: 0,
		d: 1,
		e: 0,
		f: 0
	};
	return (e) => {
		e.save(), e.setTransform(u), e.drawImage(c, i, a), e.restore();
	};
}
function Pr(e, t, n, r, i, a, o, s, c, l = !0, u = r) {
	let d = e.canvas.width || 0, f = e.canvas.height || 0, p = d > 0 && f > 0, m = {
		a: 1,
		b: 0,
		c: 0,
		d: 1,
		e: 0,
		f: 0
	}, h = (e) => e.setTransform(c), g = (e) => {
		h(e), n(e);
	}, _ = (e) => {
		h(e), r(e);
	}, v = (e) => {
		h(e), u(e);
	}, y = !1;
	t.shadow && p ? (e.save(), e.setTransform(m), y = !We(e, g, i, t.shadow, s, d, f, Math.atan2(c.b, c.a) * 180 / Math.PI, a), e.restore()) : t.shadow && (y = !0), t.reflection && p && (e.save(), e.setTransform(m), ze(e, g, i, t.reflection, s, d, f), e.restore()), y ? dr(e, t.shadow ?? null, o) : t.glow && fr(e, t.glow, o), t.softEdge && p ? (e.save(), e.setTransform(m), Be(e, g, i, t.softEdge, s, d, f, _), e.restore()) : n(e), (y || t.glow) && pr(e), t.innerShadow && l && p && (e.save(), e.setTransform(m), Ue(e, v, i, t.innerShadow, s, d, f), e.restore());
}
function Fr(e, t, r, i = "#000000", a, o = {
	themeMajorFont: null,
	themeMinorFont: null,
	dpr: 1
}, s, c) {
	let l = X(t.x, r), u = X(t.y, r), d = X(t.width, r), f = X(t.height, r), p = s && t.id !== void 0 ? (e) => s({
		...e,
		shapeId: t.id
	}) : s;
	if (f === 0 && t.textBody?.verticalAnchor === "b") {
		if (t.stroke && (e.save(), $r(e, t.stroke, r, {
			x: l,
			y: u,
			w: d,
			h: 1
		}, t.rotation), e.beginPath(), e.moveTo(l, u), e.lineTo(l + d, u), e.stroke(), e.restore()), t.textBody) {
			let n = Er(t, o);
			Vr(e, t.textBody, l, u, d, f, r, n, t.rotation, t.flipH, t.flipV, i, a, o, p, !1, c);
		}
		return;
	}
	let m = t.scene3d && Ct(t.scene3d.camera) ? t.scene3d : null;
	if (m && d > 0 && f > 0) {
		let n = e.getTransform(), s = Math.abs(n.a * n.d - n.b * n.c), c = s > 0 ? Math.sqrt(s) : 1, p = Hr(t.sp3d, t.scene3d?.lightRig, t.sp3d?.prstMaterial, r, c), h = Ur(t.sp3d, m.camera, d, f, r, c), g = Dr(t.rotation, t.flipH, t.flipV);
		e.save(), g.outerRotation !== 0 && (e.translate(l + d / 2, u + f / 2), e.rotate(g.outerRotation * Math.PI / 180), e.translate(-(l + d / 2), -(u + f / 2)));
		let _ = {
			...t,
			x: 0,
			y: 0,
			rotation: 0,
			flipH: g.localFlipH,
			flipV: g.localFlipV,
			scene3d: void 0,
			sp3d: void 0,
			shadow: null,
			innerShadow: void 0,
			glow: void 0,
			softEdge: void 0,
			reflection: void 0
		}, v = {
			..._,
			textBody: null
		}, y = {
			..._,
			fill: null,
			stroke: null
		}, b = (t.stroke ? t.stroke.width * r / 2 : 0) + (t.sp3d?.contourW ? t.sp3d.contourW * r : 0) + (h ? Math.hypot(h.offsetX, h.offsetY) / c : 0) + 2, x = (e, t, n) => Wr(e, m.camera, l, u, d, f, (e) => {
			Fr(e, t, r, i, a, o, void 0);
		}, n ? {
			bevels: p,
			extrusion: h ?? void 0,
			edgePadCss: b
		} : {}), S = (e) => x(e, v, !0), C = (e) => !t.textBody || x(e, y, !1);
		if (t.shadow || t.innerShadow || t.glow || t.softEdge || t.reflection) {
			let n = e.getTransform(), i = Math.abs(n.a * n.d - n.b * n.c), a = i > 0 ? Math.sqrt(i) : 1, o = Mr(m.camera, n, l, u, d, f, b, t.shadow?.algn), s = !1, c = Nr((e) => {
				s = S(e) || s;
			}, n, o.bbox, {
				w: e.canvas.width || 0,
				h: e.canvas.height || 0
			});
			if (Pr(e, t, c, c, o.bbox, o.anchor, r, r * a, n, !!t.fill), s) {
				C(e), e.restore();
				return;
			}
		} else if (x(e, _, !0)) {
			e.restore();
			return;
		}
		e.restore();
	}
	e.save(), (t.rotation !== 0 || t.flipH || t.flipV) && (e.translate(l + d / 2, u + f / 2), e.rotate(t.rotation * Math.PI / 180), t.flipH && e.scale(-1, 1), t.flipV && e.scale(1, -1), e.translate(-(l + d / 2), -(u + f / 2)));
	let g = t.geometry.toLowerCase(), _ = Nn(t.fill, e, l, u, d, f, t.rotation);
	t.shadow || fr(e, t.glow ?? null, r);
	let v = new Set([
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
	]), y = new Set([
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
	]), b = (e) => y.has(e) || e === "line" || e === "straightconnector1" || e.startsWith("bentconnector"), x = !t.custGeom && n(g), S = (n, i, a = {
		x: l,
		y: u,
		w: d,
		h: f
	}) => {
		let { x: o, y: s, w: c, h: p } = a, m = i ?? (n === e && o === l && s === u && c === d && p === f ? _ : Nn(t.fill, n, o, s, c, p, t.rotation)), h = i ? null : t.stroke ? () => {
			$r(n, t.stroke, r, {
				x: o,
				y: s,
				w: c,
				h: p
			}, t.rotation), n.stroke();
		} : null, v = () => pr(n);
		if (x && !i) {
			R(n, g, o, s, c, p, [
				t.adj,
				t.adj2,
				t.adj3,
				t.adj4,
				t.adj5,
				t.adj6,
				t.adj7,
				t.adj8
			], m, h, v, b(g) ? { skipTrailingStroke: !0 } : void 0);
			return;
		}
		n.beginPath(), t.custGeom && t.custGeom.length > 0 ? Ir(n, t.custGeom, o, s, c, p) : me(n, g, o, s, c, p, t.adj, t.adj2, t.adj3, t.adj4), m && g !== "arc" && (n.fillStyle = m, g === "donut" || g === "smileyface" || g === "frame" ? n.fill("evenodd") : n.fill(), i || v()), h && h();
	}, C = e.getTransform(), w = Math.abs(C.a * C.d - C.b * C.c), T = w > 0 ? Math.sqrt(w) : 1, E = (t.shadow || t.reflection || t.softEdge || t.innerShadow ? x ? B(g, l, u, d, f, [
		t.adj,
		t.adj2,
		t.adj3,
		t.adj4,
		t.adj5,
		t.adj6,
		t.adj7,
		t.adj8
	]) : t.custGeom && t.custGeom.length > 0 ? he(t.custGeom, l, u, d, f) : null : null) ?? {
		x: l,
		y: u,
		w: d,
		h: f
	}, D = t.stroke ? t.stroke.width * r / 2 : 0, O = t.stroke ? Math.max(t.stroke.headEnd ? pe(t.stroke.headEnd, t.stroke, r) : 0, t.stroke.tailEnd ? pe(t.stroke.tailEnd, t.stroke, r) : 0) : 0, k = t.sp3d?.contourW ? t.sp3d.contourW * r : 0, A = Math.max(D, O, k), j = A > 0 ? {
		x: E.x - A,
		y: E.y - A,
		w: E.w + A * 2,
		h: E.h + A * 2
	} : E, M = Or(C, j.x, j.y, j.w, j.h), N = r * T, P = m ? [] : Hr(t.sp3d, t.scene3d?.lightRig, t.sp3d?.prstMaterial, r, T), F = (t.stroke ? t.stroke.width * r / 2 : 0) + 2, I = (e) => {
		let n = t.stroke?.fill ? Nn(t.stroke.fill, e, l, u, d, f, t.rotation) ?? void 0 : void 0;
		if (t.stroke && (v.has(g) || y.has(g))) {
			let i = h(g, l, u, d, f, [
				t.adj,
				t.adj2,
				t.adj3,
				t.adj4,
				t.adj5,
				t.adj6,
				t.adj7,
				t.adj8
			]);
			if (!i) return;
			let a = t.stroke.cmpd, o = g === "line" || g === "straightconnector1";
			if (b(g) && i.vertices.length >= 2 && !(a && o)) {
				let n = i.vertices.map((e) => ({
					x: e.x,
					y: e.y
				}));
				if (t.stroke.tailEnd) {
					let e = ye(t.stroke.tailEnd, t.stroke, r);
					n[n.length - 1] = Se(n[n.length - 1], n[n.length - 2], e);
				}
				if (t.stroke.headEnd) {
					let e = ye(t.stroke.headEnd, t.stroke, r);
					n[0] = Se(n[0], n[1], e);
				}
				$r(e, t.stroke, r, {
					x: l,
					y: u,
					w: d,
					h: f
				}, t.rotation), e.beginPath(), e.moveTo(n[0].x, n[0].y);
				for (let t = 1; t < n.length; t++) e.lineTo(n[t].x, n[t].y);
				e.stroke();
			}
			a && o && Qr(e, i.start, i.end, t.stroke, a, r, t.rotation), t.stroke.tailEnd && _e(e, i.end.x, i.end.y, i.end.angle, t.stroke.tailEnd, t.stroke, r, n), t.stroke.headEnd && _e(e, i.start.x, i.start.y, i.start.angle, t.stroke.headEnd, t.stroke, r, n);
			return;
		}
		if (!t.stroke || !t.custGeom || t.custGeom.length === 0 || (!t.stroke.headEnd || t.stroke.headEnd.type === "none") && (!t.stroke.tailEnd || t.stroke.tailEnd.type === "none")) return;
		let { start: i, end: a } = ve(t.custGeom);
		i && t.stroke.headEnd && t.stroke.headEnd.type !== "none" && _e(e, l + i.x * d, u + i.y * f, Math.atan2(i.dy * f, i.dx * d), t.stroke.headEnd, t.stroke, r, n), a && t.stroke.tailEnd && t.stroke.tailEnd.type !== "none" && _e(e, l + a.x * d, u + a.y * f, Math.atan2(a.dy * f, a.dx * d), t.stroke.tailEnd, t.stroke, r, n);
	}, L = (e) => {
		if (P.length > 0 && Gr(e, l, u, d, f, P, (e, t, n, r, i) => S(e, void 0, {
			x: t,
			y: n,
			w: r,
			h: i
		}), void 0, F)) {
			I(e), pr(e);
			return;
		}
		S(e), I(e);
	};
	if (Pr(e, t, L, L, M, jr(C, l, u, d, f, t.shadow?.algn), r, N, C, !!_, (e) => S(e, "#000")), t.textBody) {
		let n = Er(t, o);
		if (e.save(), t.flipH || t.flipV) {
			let n = l + d / 2, r = u + f / 2;
			e.translate(n, r), t.flipH && e.scale(-1, 1), t.flipV && e.scale(1, -1), e.translate(-n, -r);
		}
		let s = l, m = u, h = d, _ = f;
		if (t.textRect) s = X(t.textRect.x, r), m = X(t.textRect.y, r), h = X(t.textRect.width, r), _ = X(t.textRect.height, r);
		else if (g === "ellipse") {
			let e = d * (1 - 1 / Math.SQRT2) / 2, t = f * (1 - 1 / Math.SQRT2) / 2;
			s = l + e, m = u + t, h = d / Math.SQRT2, _ = f / Math.SQRT2;
		} else {
			let e = Tr(g, l, u, d, f, t.adj, t.adj2);
			e && (s = e.tx, m = e.ty, h = e.tw, _ = e.th);
		}
		Vr(e, t.textBody, s, m, h, _, r, n, t.rotation, !1, !1, i, a, o, p, !1, c), e.restore();
	}
	e.restore();
}
var Ir = we;
function Lr(e, t) {
	let n = `${e}`, r = e >= 1 && e <= 26 ? String.fromCharCode(96 + e) : n, i = e >= 1 && e <= 26 ? String.fromCharCode(64 + e) : n, a = Rr(e).toLowerCase(), o = Rr(e), s = n.replace(/[0-9]/g, (e) => String.fromCharCode(65296 + (e.charCodeAt(0) - 48)));
	switch (t) {
		case "arabicPlain": return n;
		case "arabicPeriod": return `${n}.`;
		case "arabicParenR": return `${n})`;
		case "arabicParenBoth": return `(${n})`;
		case "arabicDbPlain": return s;
		case "arabicDbPeriod": return `${s}.`;
		case "alphaLcPlain": return r;
		case "alphaLcPeriod": return `${r}.`;
		case "alphaLcParenR": return `${r})`;
		case "alphaLcParenBoth": return `(${r})`;
		case "alphaUcPlain": return i;
		case "alphaUcPeriod": return `${i}.`;
		case "alphaUcParenR": return `${i})`;
		case "alphaUcParenBoth": return `(${i})`;
		case "romanLcPlain": return a;
		case "romanLcPeriod": return `${a}.`;
		case "romanLcParenR": return `${a})`;
		case "romanLcParenBoth": return `(${a})`;
		case "romanUcPlain": return o;
		case "romanUcPeriod": return `${o}.`;
		case "romanUcParenR": return `${o})`;
		case "romanUcParenBoth": return `(${o})`;
		default: return `${n}.`;
	}
}
function Rr(e) {
	let t = [
		1e3,
		900,
		500,
		400,
		100,
		90,
		50,
		40,
		10,
		9,
		5,
		4,
		1
	], n = [
		"M",
		"CM",
		"D",
		"CD",
		"C",
		"XC",
		"L",
		"XL",
		"X",
		"IX",
		"V",
		"IV",
		"I"
	], r = "";
	for (let i = 0; i < t.length; i++) for (; e >= t[i];) r += n[i], e -= t[i];
	return r;
}
function zr(e) {
	for (let t of e.runs) if (t.type === "text" && t.text !== "" || t.type === "math") return !0;
	return !1;
}
function Br(e, t) {
	let n = zr(e);
	if (e.bullet.type === "char") return t.clear(), n ? be(e.bullet.char, e.bullet.fontFamily ?? null) : "";
	if (e.bullet.type === "autoNum") {
		if (!n) return "";
		let r = e.lvl;
		return t.has(r) ? t.set(r, t.get(r) + 1) : t.set(r, e.bullet.startAt ?? 1), Lr(t.get(r), e.bullet.numType);
	}
	return t.clear(), "";
}
function Vr(e, t, n, r, i, a, o, s = null, c = 0, l = !1, u = !1, d = "#000000", f, p = {
	themeMajorFont: null,
	themeMinorFont: null,
	dpr: 1
}, m, h = !1, g, _ = !1, v = h) {
	let y = t.vert === "vert" || t.vert === "eaVert", b = t.vert === "vert270";
	if (y || b) {
		let l = n + i / 2, u = r + a / 2, _ = y ? 90 : -90, v = m ? (e) => m({
			...e,
			inShapeX: e.inShapeX - a / 2 + i / 2,
			inShapeY: e.inShapeY - i / 2 + a / 2,
			shapeX: n,
			shapeY: r,
			shapeW: i,
			shapeH: a,
			rotation: c,
			textBodyRotation: _
		}) : void 0;
		if (h) return i;
		e.save(), e.translate(l, u), e.rotate(b ? -Math.PI / 2 : Math.PI / 2), Vr(e, {
			...t,
			vert: "horz"
		}, -a / 2, -i / 2, a, i, o, s, 0, !1, !1, d, f, p, v, !1, g, t.vert === "eaVert"), e.restore();
		return;
	}
	let x = t.textWarp;
	if (!h && x && rt(x.preset)) {
		wr(e, t, x.preset, x.adj ?? [], n, r, i, a, o, s ?? d, p);
		return;
	}
	let S = X(t.lIns, o), C = X(t.rIns, o), w = X(t.tIns, o), E = X(t.bIns, o), D = t.wrap !== "none", O = t.autoFit === "sp", k = O ? D && er(e, t, i, S, C, o, p) : D, A = Math.max(1, t.numCol ?? 1), j = X(t.spcCol ?? 0, o), M = t.defaultBold ?? !1, N = t.defaultItalic ?? !1, P = s ?? d, F = (r) => {
		let a = (t.defaultFontSize ?? 18) * Y * o * r, s = [], c = 0, l = 0, u = /* @__PURE__ */ new Map();
		for (let d = 0; d < t.paragraphs.length; d++) {
			let m = t.paragraphs[d], g = X(m.marL, o), _ = X(m.marR, o), y = X(m.indent, o), b = m.defFontSize == null ? a : m.defFontSize * Y * o * r, x = m.defColor ? Q(m.defColor) : P, w = Xn(m), T = (() => {
				for (let e of m.runs) if (e.type === "text" && e.fontSize != null) return e.fontSize;
				return m.defFontSize ?? t.defaultFontSize ?? 18;
			})() * Y * o * r, E = (() => {
				for (let e of m.runs) if (e.type === "text" && e.color) return e.color;
				return null;
			})(), D = E ? Q(E) : x, F = (() => {
				for (let e of m.runs) if (e.type === "text" && e.fontFamily) return e.fontFamily;
				return m.defFontFamily ?? null;
			})(), I = "", L = Yn(!1, !1, T, "sans-serif", p), R = D, z = null;
			I = Br(m, u);
			let B = Qe(m.bullet);
			if (B.type === "char") {
				let e = B;
				L = Yn(!1, !1, e.sizePts == null ? e.sizePct == null ? T : T * (e.sizePct / 100) : e.sizePts * Y * o * r, I === e.char ? Rn(e.fontFamily ?? null, p) : "sans-serif", p), R = e.color ? Q(e.color) : D;
			} else if (B.type === "autoNum") {
				let e = B;
				L = Yn(!1, !1, e.sizePts == null ? e.sizePct == null ? T : T * (e.sizePct / 100) : e.sizePts * Y * o * r, Rn(e.fontFamily ?? F, p), p), R = B.color ? Q(B.color) : D;
			} else if (B.type === "blip") {
				let e = B, n = Zn(t, m, e) * Y * o * r;
				z = {
					imagePath: e.imagePath,
					mimeType: e.mimeType,
					sizePx: n
				};
			}
			let V = A > 1 ? (i - S - C - (A - 1) * j) / A : i - S - C, H = n + S + g, ee = n + S + g + y, U = V - g - _, W = ar(e, m, k ? U : Infinity, b, x, o, g, M, N, r, f, p, Qn(w, y)), te = m.spaceBefore == null ? 0 : m.spaceBefore / 100 * Y * o * r, G = m.spaceAfter == null ? 0 : m.spaceAfter / 100 * Y * o * r;
			for (let n = 0; n < W.length; n++) {
				let r = W[n], i = n === 0, a = n === W.length - 1, u = 0, f = 0;
				for (let t of r.segments) {
					let n = t.math ? Math.max(t.sizePx, (t.math.ascent + t.math.descent) / 1.2) : t.sizePx;
					if (n > u && (u = n), !t.math && O) {
						e.font = t.font;
						let n = e.measureText(t.text || "M"), r = (n.fontBoundingBoxAscent ?? 0) + (n.fontBoundingBoxDescent ?? 0);
						r > f && (f = r);
					}
				}
				if (u === 0 && (u = b), i && I) {
					e.font = L;
					let t = e.measureText("M"), n = t.actualBoundingBoxAscent + t.actualBoundingBoxDescent;
					n > u && (u = n);
				}
				i && z && z.sizePx > u && (u = z.sizePx);
				let p = u * 1.2, g = O && f > p, _ = p, x;
				x = m.spaceLine ? m.spaceLine.type === "pct" ? (h ? u : p) * (m.spaceLine.val / 1e5) : m.spaceLine.val * Y * o : h && !O ? v ? p : u : _;
				let S = m.spaceLine?.type === "pct" ? u * (m.spaceLine.val / 1e5) : x;
				t.autoFit === "norm" && t.lnSpcReduction != null && m.spaceLine?.type !== "pts" && (x *= 1 - t.lnSpcReduction);
				let C = x + (a ? G : 0), T = i && d > 0 ? te : 0, E = i ? Qn(w, y) : 0, D = r.segments.some((e) => e.text && e.text.length > 0 || e.math != null), k = i && D ? z : null;
				s.push({
					line: r,
					linePx: C,
					lineHeight: x,
					baselineLineHeight: S,
					topGapPx: T,
					textXOffset: E,
					bulletLabel: i ? I : "",
					bulletFont: L,
					bulletColor: R,
					bulletX: ee,
					bulletImage: k,
					textX: H,
					textMaxW: U,
					alignment: m.alignment,
					isLastLine: a,
					para: m,
					useResolvedFontMetrics: g
				});
				let A = c + T;
				c += C + T, l = Math.max(l, c, A + (g ? Math.max(x, f) : x) + (a ? G : 0));
			}
		}
		return {
			allLines: s,
			totalHeight: c,
			requiredHeight: l
		};
	}, { allLines: L, totalHeight: R, requiredHeight: z } = F(1);
	if (t.autoFit === "norm") if (t.fontScale != null && t.fontScale > 0) t.fontScale < 1 && ({allLines: L, totalHeight: R, requiredHeight: z} = F(t.fontScale));
	else {
		let e = a - w - E;
		if (z > e && e > 0) {
			let t = .1, n = 1;
			for (let r = 0; r < 6; r++) {
				let r = (t + n) / 2;
				F(r).requiredHeight <= e ? t = r : n = r;
			}
			({allLines: L, totalHeight: R, requiredHeight: z} = F(t));
		}
	}
	if (h) return w + z + E;
	let B = t.verticalAnchor ?? "t", V = r, H;
	a === 0 && B === "b" ? (H = w + z + E, V = r - H) : H = t.autoFit === "sp" ? Math.max(a, w + z + E) : a;
	let ee, U = Math.max(0, H - w - E);
	ee = B === "ctr" ? V + w + (U - z) / 2 : B === "b" ? V + H - E - z : V + w, e.save(), e.textAlign = "left", e.textBaseline = "alphabetic";
	let W = ee, te = A > 1 ? (i - S - C - (A - 1) * j) / A + j : 0, G = Math.max(0, H - w - E), K = L[L.length - 1], q = K ? Math.max(0, K.linePx - K.lineHeight) : 0, J = z - q, ne = a === 0 || J <= G + .5, re = A > 1 && !ne ? Math.ceil(L.length / A) : L.length, ie = 0, ae = 0;
	for (let s of L) {
		let { line: l, linePx: u, lineHeight: d, topGapPx: f, textXOffset: h, bulletLabel: v, bulletFont: y, bulletColor: b, bulletImage: x, alignment: S, isLastLine: C, useResolvedFontMetrics: w } = s;
		A > 1 && ie < A - 1 && ae >= re && (ie++, ae = 0, ee = W), ee += f, ae++;
		let E = (t.rtlCol ? A - 1 - ie : ie) * te, D = s.textX + E, O = s.bulletX + E, k = s.textMaxW, j = s.para.rtl === !0, M = j || cn(l.segments), N = l.segments.some((e) => e.isTab);
		if (N) {
			let t = X(s.para.marL, o), n = X(s.para.marR, o), r = j ? n : t + h, i = k + t + n;
			e.font = l.segments.find((e) => e.isTab).font;
			let a = e.measureText(" ").width, c = bn(l.segments.map((t) => {
				if (t.isTab) return {
					isTab: !0,
					width: 0
				};
				if (t.math) return {
					isTab: !1,
					width: t.math.width
				};
				e.font = t.font;
				let n = t.letterSpacingPx ?? 0;
				return {
					isTab: !1,
					width: t.text ? (t.leadingLetterSpacingPx ?? 0) + $(e, t.text, n) : 0
				};
			}), (s.para.tabStops ?? []).map((e) => ({
				pos: X(e.pos, o),
				algn: e.algn
			})), r, i, a, X(s.para.defTabSz ?? 914400, o));
			for (let e = 0; e < l.segments.length; e++) l.segments[e].isTab && (l.segments[e].tabWidthPx = c[e]);
		}
		let P = 0, F = 0, L = 0, R = 0;
		for (let t of l.segments) {
			if (t.isTab) {
				P += t.tabWidthPx ?? 0;
				continue;
			}
			if (t.math) {
				P += t.math.width, F = Math.max(F, t.math.ascent);
				continue;
			}
			e.font = t.font;
			let n = e.measureText(t.text || "M"), r = t.letterSpacingPx ?? 0;
			if (P += t.leadingLetterSpacingPx ?? 0, P += t.text ? $(e, t.text, r) : 0, n.actualBoundingBoxAscent > 0 && (F = Math.max(F, n.actualBoundingBoxAscent)), w) {
				let e = n.fontBoundingBoxAscent ?? 0, t = e + (n.fontBoundingBoxDescent ?? 0);
				t > R && (R = t, L = e);
			}
		}
		let z = w && R > 0 ? B === "t" && F > 0 ? s.para.spaceLine?.type === "pct" ? Math.max(F, L + (s.baselineLineHeight - R) / 2) : F : Math.max(F, L + Math.max(0, d - R) / 2) : Math.max(d * .8, F), V = ee + z, H = D + k, U = x && g ? p.pictureBulletImages?.has(x.imagePath) ? p.pictureBulletImages.get(x.imagePath) : I(x.imagePath, g) : void 0, G = 0;
		if (M && j) {
			if (v) e.font = y, G = e.measureText(v).width;
			else if (x && U) {
				let e = x.sizePx;
				G = U.height > 0 ? e * (U.width / U.height) : e;
			}
		}
		if (v) if (e.font = y, e.fillStyle = b, M && j) {
			let t = e.direction;
			e.direction = "rtl", e.fillText(v, H - G, V), e.direction = t;
		} else e.fillText(v, O, V);
		if (x && g && U) {
			let t = x.sizePx, n = U.height > 0 ? t * (U.width / U.height) : t, r = V - t;
			M && j ? e.drawImage(U, H - n, r, n, t) : e.drawImage(U, O, r, n, t);
		}
		let K = D + h, q;
		q = N ? j ? D + k - G - P : K : S === "ctr" ? K + (k - h - P) / 2 : S === "r" ? D + k - G - P : K;
		let J = S === "just" || S === "justLow" ? "just" : S === "thaiDist" ? "thaiDist" : S === "dist" ? "dist" : null, ne = C || (l.endsWithBreak ?? !1), oe = (J && !M && !N ? fn(l.segments, k - h, P, J, ne) : null) ?? l.segments, se = M ? ln(l.segments, j) : null, ce = (e, t) => {
			if (Math.abs(e - t) !== 1) return 0;
			let n = l.segments[Math.min(e, t)], r = l.segments[Math.max(e, t)];
			return n.isTab || n.math || r.isTab || r.math || n.sourceRunId == null || n.sourceRunId !== r.sourceRunId ? 0 : r.leadingLetterSpacingPx ?? 0;
		}, le = oe.length;
		for (let t = 0; t < le; t++) {
			let s = se ? se.order[t] : t, l = oe[s], u = se ? se.rtl[s] : !1;
			if (M && (e.direction = u ? "rtl" : "ltr"), t > 0) {
				let e = se ? se.order[t - 1] : t - 1;
				q += ce(e, s);
			}
			if (l.isTab) {
				q += l.tabWidthPx ?? 0;
				continue;
			}
			let f = l.jext ?? 0, h = l.splitBefore, g = l.perGap ?? 0, v = h && h.length > 0 ? h.length * g : 0;
			if (l.math) {
				let t = Pn.get(l.math.nodes), n = l.math.width, r = l.math.ascent + l.math.descent;
				if (t && n > 0 && r > 0) {
					let i = V - l.math.ascent, a = Fn(t, l.color);
					e.drawImage(a, q, i, n, r);
				}
				q += n, q += f;
				continue;
			}
			e.font = l.font, e.fillStyle = l.color;
			let y = l.drawSizePx ?? l.sizePx, b = V + (l.baseline ? -(l.baseline / 1e5) * l.sizePx : 0), x = l.letterSpacingPx ?? 0;
			if (l.highlight && l.text) {
				let t = $(e, l.text, x) + v + f;
				Mn(e, q, b, t, y, l.highlight, l.color);
			}
			let S = l.shadow, C = (e, t, n, r) => {
				let i = r === "fill" ? e.fillText.bind(e) : e.strokeText.bind(e);
				if (x !== 0 && nr(t) > 1) {
					let r = e, a = r.letterSpacing;
					if (ir(e)) {
						r.letterSpacing = `${x}px`, i(t, n, b);
						try {
							r.letterSpacing = a;
						} catch {}
					} else {
						let r = n, a = [...t];
						for (let t = 0; t < a.length; t++) {
							let n = a[t];
							i(n, r, b), t < a.length - 1 && (r += e.measureText(n).width + x);
						}
					}
				} else i(t, n, b);
			}, w = (t) => $(e, t, x), E = h && h.length > 0 ? $t([...l.text], h, g, w) : null, D = [...l.text], O = !!h && h.length === D.length - 1 && D.length > 1, k = (e, t) => {
				if (_) {
					let n = O ? x + g : x;
					Tn(e, l.text, q, b, y, n, t);
					return;
				}
				if (O) {
					let n = t === "fill" ? e.fillText.bind(e) : e.strokeText.bind(e), r = x + g;
					if (ir(e)) {
						let t = e, i = t.letterSpacing;
						t.letterSpacing = `${r}px`, n(l.text, q, b);
						try {
							t.letterSpacing = i;
						} catch {}
					} else {
						let t = q;
						for (let i = 0; i < D.length; i++) {
							let a = D[i];
							n(a, t, b), i < D.length - 1 && (t += e.measureText(a).width + r);
						}
					}
				} else if (E) for (let { text: n, dx: r } of E) C(e, n, q + r, t);
				else C(e, l.text, q, t);
			}, A = l.reflection;
			if (A && l.text) {
				let t = e.canvas.width || 0, n = e.canvas.height || 0;
				if (t > 0 && n > 0) {
					e.font = l.font;
					let r = e.measureText(l.text), i = Number.isFinite(r.actualBoundingBoxAscent) ? r.actualBoundingBoxAscent : y * .8, a = Number.isFinite(r.actualBoundingBoxDescent) ? r.actualBoundingBoxDescent : y * .2, s = Number.isFinite(r.actualBoundingBoxLeft) ? r.actualBoundingBoxLeft : 0, c = Number.isFinite(r.actualBoundingBoxRight) ? r.actualBoundingBoxRight : r.width, u = e.getTransform(), d = Math.abs(u.a * u.d - u.b * u.c), f = d > 0 ? Math.sqrt(d) : 1;
					Jn(e, (e) => {
						e.font = l.font, e.fillStyle = l.color, k(e, "fill");
					}, {
						x: (q - s) * f,
						y: (b - i) * f,
						w: Math.max(1, s + c) * f,
						h: Math.max(1, i + a) * f
					}, A, o * f, u, t, n), e.font = l.font, e.fillStyle = l.color;
				}
			}
			if (S) {
				let t = S.dir * Math.PI / 180, n = X(S.dist, o);
				e.save(), e.shadowColor = Q(S.color, S.alpha), e.shadowBlur = X(S.blur, o), e.shadowOffsetX = Math.cos(t) * n, e.shadowOffsetY = Math.sin(t) * n;
			}
			k(e, "fill"), S && e.restore();
			let j = l.outline;
			j && j.width > 0 && (e.save(), e.lineWidth = Math.max(.5, X(j.width, o)), e.strokeStyle = j.color ? `#${j.color}` : l.color, e.lineJoin = "round", k(e, "stroke"), e.restore()), e.font = l.font;
			let N = $(e, l.text, x) + v;
			if (m && l.text && m({
				text: l.text,
				inShapeX: q - n,
				inShapeY: ee - r,
				w: N + f,
				h: d,
				fontSize: y,
				font: l.font,
				shapeX: n,
				shapeY: r,
				shapeW: i,
				shapeH: a,
				rotation: c,
				hyperlink: l.hyperlink
			}), l.underline && Zt(e, q, b, N + f, y, l.underlineColor ?? l.color, l.underlineStyle, p.dpr), l.strikethrough) {
				let t = Math.max(1, y * .05);
				e.strokeStyle = l.color, e.lineWidth = t, e.setLineDash([]);
				let n = b - y * .32;
				if (l.strikeDouble) {
					let r = t * .9, i = n - r, a = n + r;
					e.beginPath(), e.moveTo(q, i + T(i, t, p.dpr)), e.lineTo(q + N + f, i + T(i, t, p.dpr)), e.moveTo(q, a + T(a, t, p.dpr)), e.lineTo(q + N + f, a + T(a, t, p.dpr)), e.stroke();
				} else {
					let r = n + T(n, t, p.dpr);
					e.beginPath(), e.moveTo(q, r), e.lineTo(q + N + f, r), e.stroke();
				}
			}
			q += N, q += f;
		}
		M && (e.direction = "ltr"), ee += u;
	}
	e.restore();
}
function Hr(e, t, n, r, i) {
	if (!e) return [];
	let a = zt(t?.rig ?? "threePt", t?.dir ?? "t", t?.rot), o = Gt(n), s = r * i, c = [];
	return e.bevelT && e.bevelT.w > 0 && e.bevelT.h > 0 && c.push({
		widthPx: e.bevelT.w * s,
		heightPx: e.bevelT.h * s,
		prst: e.bevelT.prst || "circle",
		material: o,
		light: a
	}), e.bevelB && e.bevelB.w > 0 && e.bevelB.h > 0 && c.push({
		widthPx: e.bevelB.w * s,
		heightPx: e.bevelB.h * s,
		prst: e.bevelB.prst || "circle",
		material: o,
		light: a,
		bottom: !0
	}), c;
}
function Ur(e, t, n, r, i, a) {
	if (!e || !e.extrusionH || e.extrusionH <= 0) return null;
	let o = e.extrusionH * i * a, s = wt(t, n * a, r * a, o);
	if (Math.hypot(s.x, s.y) < .75) return null;
	let c = [
		64,
		64,
		64
	];
	if (e.extrusionClr) {
		let t = e.extrusionClr.replace("#", "");
		t.length >= 6 && (c = [
			parseInt(t.slice(0, 2), 16),
			parseInt(t.slice(2, 4), 16),
			parseInt(t.slice(4, 6), 16)
		]);
	}
	return {
		offsetX: s.x,
		offsetY: s.y,
		rgb: c
	};
}
function Wr(e, t, n, r, i, a, o, s = {}) {
	if (i <= 0 || a <= 0) return !1;
	let c = e.getTransform(), l = Math.abs(c.a * c.d - c.b * c.c), u = l > 0 ? Math.sqrt(l) : 1, d = Math.max(0, Math.ceil((s.edgePadCss ?? 0) * u)), f = St(t, i, a), p = f.corners;
	if (d > 0) {
		let e = d / u, t = Ge(f.corners, e / i, e / a);
		t ? p = t : d = 0;
	}
	let m = d / u, h = Math.max(1, Math.ceil(i * u) + 2 * d), g = Math.max(1, Math.ceil(a * u) + 2 * d), _ = Ae(h, g);
	if (!_) return !1;
	let v = _.getContext("2d");
	if (!v) return !1;
	v.save(), v.scale(u, u), v.translate(m, m), o(v, 0, 0, i, a), v.restore();
	let y = Math.ceil(i * u), b = Math.ceil(a * u), x = (e) => ({
		x: d - e,
		y: d - e,
		w: y + 2 * e,
		h: b + 2 * e
	});
	if (s.extrusion) {
		let e = Math.ceil(Math.hypot(s.extrusion.offsetX, s.extrusion.offsetY)) + 2;
		Xt(v, s.extrusion, x(e));
	}
	if (s.bevels && s.bevels.length > 0) for (let e of s.bevels) Yt(v, e, x(Math.ceil(e.widthPx) + 2));
	return s.paintEdges && (v.save(), v.scale(u, u), v.translate(m, m), s.paintEdges(v, 0, 0, i, a), v.restore()), Re(_, e, h, g, p.map((e) => ({
		x: n + e.x,
		y: r + e.y
	}))), !0;
}
function Gr(e, t, n, r, i, a, o, s, c = 0) {
	if (r <= 0 || i <= 0 || a.length === 0) return !1;
	let l = e.getTransform(), u = Math.abs(l.a * l.d - l.b * l.c), d = u > 0 ? Math.sqrt(u) : 1, f = Math.max(0, Math.ceil(c * d)), p = f / d, m = Math.max(1, Math.ceil(r * d) + 2 * f), h = Math.max(1, Math.ceil(i * d) + 2 * f), g = Ae(m, h);
	if (!g) return !1;
	let _ = g.getContext("2d");
	if (!_) return !1;
	_.save(), _.scale(d, d), _.translate(p, p), o(_, 0, 0, r, i), _.restore();
	let v = Math.ceil(r * d), y = Math.ceil(i * d);
	for (let e of a) {
		let t = Math.ceil(e.widthPx) + 2;
		Yt(_, e, {
			x: f - t,
			y: f - t,
			w: v + 2 * t,
			h: y + 2 * t
		});
	}
	return s && (_.save(), _.scale(d, d), _.translate(p, p), s(_, 0, 0, r, i), _.restore()), e.drawImage(g, t - p, n - p, m / d, h / d), !0;
}
var Kr = /* @__PURE__ */ new WeakMap();
function qr(e) {
	let t = Kr.get(e);
	return t || (t = async (t, n) => {
		let r = await e(t);
		return r.type === n ? r : new Blob([r], { type: n });
	}, Kr.set(e, t)), t;
}
function Jr(e, t, n = qr(t), r, i, a) {
	let o = qr(t);
	return P(e.posterPath, e.posterMimeType || "application/octet-stream", o, {
		tiff: r,
		svgDecoder: a,
		...i ?? {}
	}, n).then((e) => {
		if (!e) throw Error("Media poster could not be decoded");
		return e;
	});
}
function Yr(e, t, n) {
	let r = X(t.x, n), i = X(t.y, n), a = X(t.width, n), o = X(t.height, n);
	e.save();
	try {
		t.alpha != null && (e.globalAlpha *= t.alpha), (t.rotation !== 0 || t.flipH || t.flipV) && (e.translate(r + a / 2, i + o / 2), e.rotate(t.rotation * Math.PI / 180), e.scale(t.flipH ? -1 : 1, t.flipV ? -1 : 1), e.translate(-(r + a / 2), -(i + o / 2))), b(e, "tiff", {
			x: r,
			y: i,
			width: a,
			height: o
		});
	} finally {
		e.restore();
	}
}
async function Xr(e, t, r, i, a, s, c = 1, l, u) {
	if (a) try {
		let d = t.mimeType === "image/svg+xml", f = Ne(t.mimeType, t.srcRect, t.width / Y, t.height / Y);
		if (!f) return;
		let { widthPt: p, heightPt: m } = f, h = En(X(t.width, r), X(t.height, r), c, t.srcRect), g = J(t) || d, _ = g ? h : u && !t.duotone ? Dn(u, Z(On(t), g ? void 0 : t.duotone)) : void 0, v = _ && "maxRetainedPixels" in _ ? _.maxRetainedPixels : void 0, y = {
			..._ ? {
				targetWidthPx: _.targetWidthPx,
				targetHeightPx: _.targetHeightPx,
				...v === void 0 ? {} : { maxRetainedPixels: v }
			} : {},
			workerDecoder: l
		}, b;
		if (J(t)) try {
			b = await H(t.svgImagePath, a, y);
		} catch {
			b = d ? await H(t.imagePath, a, y) : await Je(t.imagePath, t.mimeType, t.duotone, a, {
				widthPt: p,
				heightPt: m,
				..._ ?? {},
				tiff: s
			});
		}
		else b = d ? await H(t.imagePath, a, y) : await Je(t.imagePath, t.mimeType, t.duotone, a, {
			widthPt: p,
			heightPt: m,
			..._ ?? {},
			tiff: s
		});
		if (!b || i()) return;
		e.save(), t.alpha != null && (e.globalAlpha *= t.alpha);
		let x = X(t.x, r), S = X(t.y, r), C = X(t.width, r), w = X(t.height, r);
		(t.rotation !== 0 || t.flipH || t.flipV) && (e.translate(x + C / 2, S + w / 2), e.rotate(t.rotation * Math.PI / 180), t.flipH && e.scale(-1, 1), t.flipV && e.scale(1, -1), e.translate(-(x + C / 2), -(S + w / 2)));
		let T = (e, n, r, i, a) => {
			t.custGeom && t.custGeom.length > 0 ? Ir(e, t.custGeom, n, r, i, a) : t.prstGeom && o(e, t.prstGeom, n, r, i, a, t.prstAdjust ?? []) || e.rect(n, r, i, a);
		}, E = (e, t, n, r, i) => {
			e.beginPath(), T(e, t, n, r, i);
		}, D = (e, n, r, i, a) => {
			(t.prstGeom || t.custGeom && t.custGeom.length > 0) && (E(e, n, r, i, a), e.clip());
		}, O = (e, n, i, a, o) => {
			t.stroke && (e.save(), $r(e, t.stroke, r, {
				x: n,
				y: i,
				w: a,
				h: o
			}, t.rotation), E(e, n, i, a, o), e.stroke(), e.restore());
		}, k = (e, n, i, a, o) => {
			let s = t.sp3d;
			if (s && (s.contourW ?? 0) > 0 && s.contourClr) {
				let t = Math.max(.5, s.contourW * r);
				e.save(), e.beginPath();
				let c = t * 2 + Math.max(a, o);
				e.rect(n - c, i - c, a + 2 * c, o + 2 * c), T(e, n, i, a, o), e.clip("evenodd"), e.beginPath(), E(e, n, i, a, o), e.strokeStyle = Q(s.contourClr), e.lineWidth = t * 2, e.setLineDash([]), e.stroke(), e.restore();
			}
		}, A = t.scene3d && Ct(t.scene3d.camera) ? t.scene3d : null, j = (e, n, r, i, a) => {
			e.save(), D(e, n, r, i, a), je(e, b, t.srcRect, n, r, i, a), e.restore();
		}, M = (e, t, n, r, i) => {
			j(e, t, n, r, i), O(e, t, n, r, i), k(e, t, n, r, i);
		}, N = (e, t, n, r, i) => {
			j(e, t, n, r, i), O(e, t, n, r, i);
		}, P = e.getTransform(), F = Math.abs(P.a * P.d - P.b * P.c), I = F > 0 ? Math.sqrt(F) : 1, L = Hr(t.sp3d, t.scene3d?.lightRig, t.sp3d ? t.sp3d.prstMaterial : void 0, r, I), R = A ? Ur(t.sp3d, A.camera, C, w, r, I) : null, z = t.stroke ? t.stroke.width * r / 2 : 0, V = t.sp3d?.contourW ? t.sp3d.contourW * r : 0, ee = R ? Math.hypot(R.offsetX, R.offsetY) / I : 0, U = z + V + ee + 2, W = (e) => {
			if (A) {
				if (Wr(e, A.camera, x, S, C, w, N, {
					bevels: L,
					extrusion: R ?? void 0,
					paintEdges: k,
					edgePadCss: U
				})) return;
			} else if (L.length > 0 && Gr(e, x, S, C, w, L, N, k, U)) return;
			M(e, x, S, C, w);
		}, te = (e, t, n, r, i, a) => {
			e.save(), D(e, n, r, i, a), e.fillStyle = t, e.fillRect(n, r, i, a), e.restore();
		}, G = (e, t) => {
			A && Wr(e, A.camera, x, S, C, w, (e, n, r, i, a) => te(e, t, n, r, i, a)) || te(e, t, x, S, C, w);
		}, K = e.getTransform(), q = Math.abs(K.a * K.d - K.b * K.c), ne = q > 0 ? Math.sqrt(q) : 1, re = z + V, ie = (t.custGeom && t.custGeom.length > 0 ? he(t.custGeom, x, S, C, w) : t.prstGeom && n(t.prstGeom.toLowerCase()) ? B(t.prstGeom.toLowerCase(), x, S, C, w, t.prstAdjust ?? []) : null) ?? {
			x,
			y: S,
			w: C,
			h: w
		}, ae = A ? Mr(A.camera, K, x, S, C, w, U, t.shadow?.algn) : {
			bbox: Or(K, ie.x - re, ie.y - re, ie.w + re * 2, ie.h + re * 2),
			anchor: jr(K, x, S, C, w, t.shadow?.algn)
		}, oe = r * ne, se = !!(t.shadow || t.innerShadow || t.glow || t.softEdge || t.reflection), ce = (e) => G(e, "#000");
		Pr(e, t, A && se ? Nr(W, K, ae.bbox, {
			w: e.canvas.width || 0,
			h: e.canvas.height || 0
		}) : W, A && se ? Nr(ce, K, ae.bbox, {
			w: e.canvas.width || 0,
			h: e.canvas.height || 0
		}) : ce, ae.bbox, ae.anchor, r, oe, K), e.restore();
	} catch (n) {
		if (ue(n, "tiff")) {
			i() || Yr(e, t, r);
			return;
		}
		if (Le(n) || qe(n)) throw n;
	}
}
async function Zr(e, t, n, r, i, a, o, s, c = 1, l, u) {
	let d = X(t.x, n), f = X(t.y, n), p = X(t.width, n), m = X(t.height, n), h, g = !1;
	if (t.posterPath && i) try {
		h = await Jr(t, i, o, s, t.posterMimeType === "image/svg+xml" ? En(p, m, c) : u ? Dn(u, Z(t.posterPath)) : void 0, l);
	} catch (e) {
		if (ue(e, "tiff")) g = !0;
		else if (Le(e) || qe(e)) throw e;
	}
	r() || (e.save(), ei(e, t, n), h ? e.drawImage(h, d, f, p, m) : (e.fillStyle = t.mediaKind === "video" ? "#111" : "#f0f0f0", e.fillRect(d, f, p, m), g && b(e, "tiff", {
		x: d,
		y: f,
		width: p,
		height: m
	})), a || an(e, d + p / 2, f + m / 2, p, m, "paused"), e.restore());
}
function Qr(e, t, n, r, i, a, o) {
	let s = Math.max(.5, X(r.width, a)), c = n.x - t.x, l = n.y - t.y, u = Math.hypot(c, l);
	if (u === 0) return;
	let d = -l / u, f = c / u, p;
	switch (i) {
		case "dbl":
			p = [{
				offset: -1 / 3,
				widthFrac: 1 / 3
			}, {
				offset: 1 / 3,
				widthFrac: 1 / 3
			}];
			break;
		case "thinThick":
			p = [{
				offset: -3 / 8,
				widthFrac: 1 / 4
			}, {
				offset: 1 / 4,
				widthFrac: 1 / 2
			}];
			break;
		case "thickThin":
			p = [{
				offset: -1 / 4,
				widthFrac: 1 / 2
			}, {
				offset: 3 / 8,
				widthFrac: 1 / 4
			}];
			break;
		case "tri":
			p = [
				{
					offset: -2 / 5,
					widthFrac: 1 / 5
				},
				{
					offset: 0,
					widthFrac: 3 / 5
				},
				{
					offset: 2 / 5,
					widthFrac: 1 / 5
				}
			];
			break;
		default: return;
	}
	e.save(), e.globalCompositeOperation = "destination-out", e.strokeStyle = "#000", e.lineWidth = s + .5, e.setLineDash([]), e.beginPath(), e.moveTo(t.x, t.y), e.lineTo(n.x, n.y), e.stroke(), e.globalCompositeOperation = "source-over", e.strokeStyle = (r.fill ? Nn(r.fill, e, Math.min(t.x, n.x), Math.min(t.y, n.y), Math.max(1, Math.abs(n.x - t.x)), Math.max(1, Math.abs(n.y - t.y)), o) : null) ?? Q(r.color);
	for (let r of p) {
		let i = d * (s * r.offset), a = f * (s * r.offset);
		e.lineWidth = Math.max(.5, s * r.widthFrac), e.beginPath(), e.moveTo(t.x + i, t.y + a), e.lineTo(n.x + i, n.y + a), e.stroke();
	}
	e.restore();
}
function $r(e, t, n, r, i = 0) {
	if (ke(e, t, n), t?.fill && r) {
		let n = Nn(t.fill, e, r.x, r.y, r.w, r.h, i);
		n && (e.strokeStyle = n);
	}
}
function ei(e, t, n) {
	if (t.rotation === 0 && !t.flipH && !t.flipV) return;
	let r = X(t.x, n), i = X(t.y, n), a = X(t.width, n), o = X(t.height, n);
	e.translate(r + a / 2, i + o / 2), e.rotate(t.rotation * Math.PI / 180), t.flipH && e.scale(-1, 1), t.flipV && e.scale(1, -1), e.translate(-(r + a / 2), -(i + o / 2));
}
function ti(e, t, n, r, i = {
	themeMajorFont: null,
	themeMinorFont: null,
	dpr: 1
}, a) {
	e.save(), ei(e, t, n);
	let o = X(t.x, n), s = X(t.y, n), c = t.cols.map((e) => X(e, n)), l = c.length, u = (e, t) => {
		let n = 0;
		for (let r = 0; r < t; r++) n += c[e + r] ?? 0;
		return n;
	}, d = t.rows.map((e) => X(e.height, n));
	for (let a = 0; a < t.rows.length; a++) {
		let o = t.rows[a];
		for (let t = 0; t < o.cells.length; t++) {
			let s = o.cells[t];
			if (s.hMerge || s.vMerge || (s.rowSpan || 1) > 1 || !s.textBody) continue;
			let c = u(t, s.gridSpan || 1), l = Vr(e, s.textBody, 0, 0, c, 0, n, null, 0, !1, !1, "#000000", r, i, void 0, !0, void 0, !1, o.height === 0) || 0;
			l > d[a] && (d[a] = l);
		}
	}
	for (let a = 0; a < t.rows.length; a++) {
		let o = t.rows[a];
		for (let s = 0; s < o.cells.length; s++) {
			let c = o.cells[s];
			if (c.hMerge || c.vMerge) continue;
			let l = c.rowSpan || 1;
			if (l <= 1 || !c.textBody) continue;
			let f = u(s, c.gridSpan || 1), p = t.rows.slice(a, Math.min(t.rows.length, a + l)).some((e) => e.height === 0), m = Vr(e, c.textBody, 0, 0, f, 0, n, null, 0, !1, !1, "#000000", r, i, void 0, !0, void 0, !1, p) || 0, h = 0;
			for (let e = 0; e < l && a + e < d.length; e++) h += d[a + e];
			if (m > h) {
				let e = (m - h) / l;
				for (let t = 0; t < l && a + t < d.length; t++) d[a + t] += e;
			}
		}
	}
	let f = c.reduce((e, t) => e + t, 0), p = Array(l);
	if (t.rtl) {
		let e = o + f;
		for (let t = 0; t < l; t++) e -= c[t], p[t] = e;
	} else {
		let e = o;
		for (let t = 0; t < l; t++) p[t] = e, e += c[t];
	}
	let m = (e, n) => t.rtl ? p[e + n - 1] : p[e], h = Array(t.rows.length);
	{
		let e = s;
		for (let n = 0; n < t.rows.length; n++) h[n] = e, e += d[n];
	}
	let g, _ = {
		row: 0,
		column: 0
	};
	if (a) {
		let e = X(t.width, n), r = X(t.height, n), i = o + e / 2, c = s + r / 2, l = t.rotation * Math.PI / 180, u = Math.cos(l), d = Math.sin(l);
		g = (e) => {
			let n = e.shapeX + e.shapeW / 2 - i, r = e.shapeY + e.shapeH / 2 - c;
			t.flipH && (n = -n), t.flipV && (r = -r);
			let o = i + u * n - d * r, s = c + d * n + u * r;
			a({
				...e,
				...t.id === void 0 ? {} : { shapeId: t.id },
				shapeX: o - e.shapeW / 2,
				shapeY: s - e.shapeH / 2,
				rotation: t.rotation,
				...t.flipH ? { shapeFlipH: !0 } : {},
				...t.flipV ? { shapeFlipV: !0 } : {},
				tableCell: _
			});
		};
	}
	let v = [], y = t.rows.map(() => Array(l).fill(-1));
	for (let e = 0; e < t.rows.length; e++) {
		let n = t.rows[e], r = h[e];
		for (let i = 0; i < n.cells.length; i++) {
			let a = n.cells[i];
			if (a.hMerge || a.vMerge) continue;
			let o = a.gridSpan || 1, s = a.rowSpan || 1, c = u(i, o), f = 0;
			for (let t = 0; t < s; t++) f += d[e + t] ?? 0;
			let p = m(i, o), h = Math.min(e + s - 1, t.rows.length - 1), g = v.length;
			v.push({
				cell: a,
				colX: p,
				rowY: r,
				cellW: c,
				cellH: f,
				ci: i,
				ri: e,
				span: o,
				lastRi: h
			});
			for (let t = e; t <= h; t++) for (let e = i; e < i + o && e < l; e++) y[t][e] = g;
		}
	}
	for (let { cell: a, colX: o, rowY: s, cellW: c, cellH: l, ci: u, ri: d } of v) {
		let f = Nn(a.fill, e, o, s, c, l, t.rotation);
		if (f && (e.fillStyle = f, e.fillRect(o, s, c, l)), a.textBody) {
			g && (_ = {
				row: d,
				column: u
			});
			let t = a.textColor ? Q(a.textColor) : null;
			Vr(e, a.textBody, o, s, c, l, n, t, 0, !1, !1, "#000000", r, i, g);
		}
	}
	let b = i.dpr, x = (e, t) => {
		if (e < 0 || e >= y.length || t < 0 || t >= l) return null;
		let n = y[e][t];
		return n < 0 ? null : v[n];
	}, S = (r, i, a, o, s) => {
		if ($r(e, r, n, {
			x: Math.min(i, o),
			y: Math.min(a, s),
			w: Math.max(1, Math.abs(o - i)),
			h: Math.max(1, Math.abs(s - a))
		}, t.rotation), r.cmpd === "dbl" && !r.dashStyle && !r.customDash?.length && (i === o || a === s)) {
			e.fillStyle = e.strokeStyle, xe(e, i, a, o, s, Math.max(.5, X(r.width, n)), b);
			return;
		}
		let c = i === o ? T(i, e.lineWidth, b) : 0, l = a === s ? T(a, e.lineWidth, b) : 0;
		e.beginPath(), e.moveTo(i + c, a + l), e.lineTo(o + c, s + l), e.stroke();
	};
	for (let r of v) {
		let { cell: i, colX: a, rowY: o, cellW: s, cellH: c } = r;
		e.save();
		let f = t.rtl ? i.borderR : i.borderL, p = t.rtl ? i.borderL : i.borderR, g = t.rtl ? r.ci + r.span === l : r.ci === 0, _ = t.rtl ? r.ci === 0 : r.ci + r.span === l, v = t.rtl ? r.ci - 1 : r.ci + r.span, b = (e) => t.rtl ? e.borderR : e.borderL;
		if (r.ri === 0 && i.borderT && S(i.borderT, a, o, a + s, o), g && f && S(f, a, o, a, o + c), r.lastRi === t.rows.length - 1) {
			let e = i.borderB;
			e && S(e, a, o + c, a + s, o + c);
		} else {
			let e = r.lastRi + 1, t = o + c, n = Math.min(r.ci + r.span, l), a = r.ci;
			for (; a < n;) {
				let r = y[e][a], o = a + 1;
				for (; o < n && y[e][o] === r;) o++;
				let s = x(e, a), c = hn(i.borderB, s ? s.cell.borderT : null);
				if (c) {
					let e = m(a, o - a);
					S(c, e, t, e + u(a, o - a), t);
				}
				a = o;
			}
		}
		if (_) {
			let e = p;
			e && S(e, a + s, o, a + s, o + c);
		} else {
			let e = a + s, t = r.ri;
			for (; t <= r.lastRi;) {
				let n = y[t][v], i = t;
				for (; i + 1 <= r.lastRi && y[i + 1][v] === n;) i++;
				let a = x(t, v), o = hn(p, a ? b(a.cell) : null);
				o && S(o, e, h[t], e, h[i] + d[i]), t = i + 1;
			}
		}
		i.diagonalTL && ($r(e, i.diagonalTL, n, {
			x: a,
			y: o,
			w: s,
			h: c
		}, t.rotation), e.beginPath(), e.moveTo(a, o), e.lineTo(a + s, o + c), e.stroke()), i.diagonalTR && ($r(e, i.diagonalTR, n, {
			x: a,
			y: o,
			w: s,
			h: c
		}, t.rotation), e.beginPath(), e.moveTo(a + s, o), e.lineTo(a, o + c), e.stroke()), e.restore();
	}
	e.restore();
}
function ni(e, t, n, r) {
	e.save(), e.globalAlpha = t.opacity, e.fillStyle = t.color, e.fillRect(0, 0, n, r), e.restore();
}
var ri = /* @__PURE__ */ new WeakMap();
function ii(e) {
	ri.set(e, (ri.get(e) ?? 0) + 1);
}
function ai(e, t, n, r, i) {
	e.save(), e.fillStyle = "#f7f7f8", e.fillRect(0, 0, t, n);
	let a = Math.max(12, Math.min(t, n) * .04);
	e.strokeStyle = "#c8ccd2", e.lineWidth = Math.max(1, Math.min(t, n) * .004), e.setLineDash([e.lineWidth * 6, e.lineWidth * 5]), e.strokeRect(a, a, t - a * 2, n - a * 2), e.setLineDash([]);
	let o = t / 2, s = Math.max(18, Math.min(t, n) * .14);
	e.fillStyle = "#b23b3b", e.textAlign = "center", e.textBaseline = "middle", e.font = `${s}px sans-serif`, e.fillText("⚠", o, n * .34);
	let c = Math.max(11, Math.min(t, n) * .045);
	e.fillStyle = "#333333", e.font = `600 ${c}px sans-serif`, e.fillText(`Slide ${r} could not be displayed`, o, n * .52);
	let l = Math.max(9, Math.min(t, n) * .028);
	e.fillStyle = "#666666", e.font = `${l}px sans-serif`;
	let u = t - a * 4, d = i.split(/\s+/), f = [], p = "";
	for (let t of d) {
		let n = p ? `${p} ${t}` : t;
		if (e.measureText(n).width > u && p ? (f.push(p), p = t) : p = n, f.length >= 4) break;
	}
	p && f.length < 4 && f.push(p);
	let m = l * 1.35, h = n * .6 + m;
	for (let t of f.slice(0, 4)) e.fillText(t, o, h), h += m;
	e.restore();
}
async function oi(e, t, n, r, i = {}, a) {
	return si(e, t, n, r, i, a);
}
async function si(e, t, n, r, i = {}, a) {
	let o = i.fetchImage ?? (i.fetchMedia ? qr(i.fetchMedia) : void 0), s = (ri.get(e) ?? 0) + 1;
	ri.set(e, s);
	let c = () => ri.get(e) !== s, l = () => c() ? Promise.resolve(e) : ci(e, t, n, r, i, a, o, c);
	return o && jn(t) ? se(o, i.imageResources, l) : l();
}
async function ci(t, n, r, i, a = {}, o, s, c = () => !1) {
	let l = a.width ?? ((e(t) ? t.offsetWidth : 0) || 960), u = l / r, d = Math.round(l), f = Math.round(i * u), p = a.dpr ?? _(), m = Ve(d * p, f * p), h = m.clamped ? p * m.scale : p, g = await An(n, d, f, u, h, a.imageResources, a.fetchImage, a.fetchMedia, s, a.tiff);
	t.width = m.width, t.height = m.height, e(t) && (t.style.width = `${d}px`, t.style.display || (t.style.display = "block"));
	let v = t.getContext("2d");
	if (!v) throw Error("Could not get 2D context");
	if (v.scale(h, h), n.parseError) return ai(v, d, f, n.slideNumber, n.parseError), t;
	let y = a.defaultTextColor ? `#${a.defaultTextColor}` : "#000000", b = /* @__PURE__ */ new Map(), x = {
		themeMajorFont: a.majorFont ?? null,
		themeMinorFont: a.minorFont ?? null,
		themeHlinkColor: a.hlinkColor ?? null,
		embeddedFontAliases: a.embeddedFontAliases,
		embeddedFontAuthoredFamilies: a.embeddedFontAuthoredFamilies,
		dpr: h,
		smartArtFallbackTextColor: yn(n.background, y),
		pictureBulletImages: b
	};
	if (await or(v, n.background, d, f, u, c, a.fetchImage, a.tiff, a.svgDecoder, g), c() || (a.math && await Ln(n, a.math), c())) return t;
	let S = n.slideNumber;
	for (let e of n.elements) if (e.type === "picture" && a.fetchImage) {
		let t = e, n = t.mimeType === "image/svg+xml", r = J(t) || n, i = !r && !t.duotone ? Dn(g, Z(On(t), t.duotone)) : void 0, o = En(X(t.width, u), X(t.height, u), h, t.srcRect), s = r ? o : i, c = s && "maxRetainedPixels" in s ? s.maxRetainedPixels : void 0, l = {
			...s ? {
				targetWidthPx: s.targetWidthPx,
				targetHeightPx: s.targetHeightPx,
				...c === void 0 ? {} : { maxRetainedPixels: c }
			} : {},
			workerDecoder: a.svgDecoder
		};
		if (J(t)) H(t.svgImagePath, a.fetchImage, l).catch(() => void 0);
		else if (n) H(t.imagePath, a.fetchImage, l).catch(() => void 0);
		else {
			let e = Ne(t.mimeType, t.srcRect, t.width / Y, t.height / Y);
			if (!e) continue;
			Je(t.imagePath, t.mimeType, t.duotone, a.fetchImage, {
				widthPt: e.widthPt,
				heightPt: e.heightPt,
				...s ?? {},
				tiff: a.tiff,
				svgDecoder: a.svgDecoder
			}).catch(() => void 0);
		}
	} else if (e.type === "media") {
		let t = e;
		t.posterPath && a.fetchMedia && Jr(t, a.fetchMedia, s, a.tiff, t.posterMimeType === "image/svg+xml" ? En(X(t.width, u), X(t.height, u), h) : Dn(g, Z(t.posterPath)), a.svgDecoder).catch(() => void 0);
	}
	let C = /* @__PURE__ */ new Map();
	if (a.fetchImage) {
		let e = a.fetchImage, r = /* @__PURE__ */ new Map(), i = [];
		for (let e of n.elements) {
			if (e.type !== "chart" || !Number.isFinite(e.width) || e.width <= 0 || !Number.isFinite(e.height) || e.height <= 0) continue;
			let t = {
				widthPt: e.width / Y,
				heightPt: e.height / Y,
				targetWidthPx: X(e.width, u) * h,
				targetHeightPx: X(e.height, u) * h
			}, n = [], r = !0;
			for (let i of Te(e.chart)) {
				let e = Ee(i, t);
				if (!e) {
					r = !1;
					break;
				}
				n.push({
					usage: i,
					size: e
				});
			}
			r && i.push({
				element: e,
				frame: t,
				usages: n
			});
		}
		let o = /* @__PURE__ */ new Map();
		for (let e of Me(i.map(({ element: e }) => e.chart), (e, t) => Ee(e, i[t].frame) != null)) {
			let { fill: t } = e, n = Ie(t);
			o.has(n) || o.set(n, {
				fill: t,
				widthPt: 0,
				heightPt: 0,
				preserveNaturalSize: e.preserveNaturalSize,
				hasSourceCrop: e.hasSourceCrop
			});
		}
		for (let { usages: e } of i) for (let { usage: t, size: n } of e) {
			let { fill: e } = t, r = Ie(e), i = o.get(r);
			if (!i) continue;
			let a = i.preserveNaturalSize || t.preserveNaturalSize, s = i.hasSourceCrop || t.hasSourceCrop, c = a || e.duotone ? void 0 : Dn(g, Z(e.imagePath, e.duotone)), l = !e.duotone && (e.mimeType === "image/svg+xml" || J({
				svgImagePath: e.svgImagePath,
				srcRect: s ? !0 : null
			}));
			o.set(r, {
				...i,
				widthPt: Math.max(i.widthPt, n.widthPt),
				heightPt: Math.max(i.heightPt, n.heightPt),
				targetWidthPx: a ? void 0 : c?.targetWidthPx ?? (l && Math.max(i.targetWidthPx ?? 0, n.targetWidthPx ?? 0) || void 0),
				targetHeightPx: a ? void 0 : c?.targetHeightPx ?? (l && Math.max(i.targetHeightPx ?? 0, n.targetHeightPx ?? 0) || void 0),
				maxRetainedPixels: c?.maxRetainedPixels,
				preserveNaturalSize: a,
				hasSourceCrop: s
			});
		}
		for (let e of n.elements) if (!(e.type !== "shape" || !e.textBody)) for (let t of e.textBody.paragraphs) {
			let n = Qe(t.bullet);
			if (n.type === "blip") {
				let i = Zn(e.textBody, t, n) * Y * u * h, a = r.get(n.imagePath);
				a ? Number.isFinite(i) && i > 0 && (a.targetHeightPx = Math.max(a.targetHeightPx ?? 0, i)) : r.set(n.imagePath, {
					mimeType: n.mimeType,
					...Number.isFinite(i) && i > 0 ? { targetHeightPx: i } : {}
				});
			}
		}
		if (r.size > 0 || o.size > 0) {
			let n = [...r].map(async ([t, { mimeType: n, targetHeightPx: r }]) => {
				try {
					let i = n === "image/svg+xml" ? r === void 0 ? {} : {
						targetWidthPx: 1,
						targetHeightPx: r
					} : Dn(g, Z(t)) ?? {}, o = n === "image/svg+xml" ? await H(t, e, {
						...i,
						workerDecoder: a.svgDecoder
					}) : await P(t, n, e, {
						tiff: a.tiff,
						...i
					});
					b.set(t, o);
				} catch (e) {
					if (ue(e, "tiff")) {
						b.set(t, null);
						return;
					}
					if (Le(e) || qe(e)) throw e;
					b.set(t, null);
				}
			}), i = [...o].map(async ([t, n]) => {
				let { fill: r, widthPt: i, heightPt: o, targetWidthPx: s, targetHeightPx: c, maxRetainedPixels: l, hasSourceCrop: u } = n, d = s && c ? {
					targetWidthPx: s,
					targetHeightPx: c,
					...l === void 0 ? {} : { maxRetainedPixels: l }
				} : void 0;
				try {
					let n = () => r.mimeType === "image/svg+xml" ? r.duotone ? Promise.resolve(null) : H(r.imagePath, e, {
						...d ?? {},
						workerDecoder: a.svgDecoder
					}) : Je(r.imagePath, r.mimeType, r.duotone, e, {
						widthPt: i,
						heightPt: o,
						...d ?? {},
						failClosedOnDuotoneFailure: !0,
						tiff: a.tiff
					}), s, c = {
						svgImagePath: r.svgImagePath,
						srcRect: u ? !0 : null
					};
					if (!r.duotone && J(c)) try {
						s = await H(c.svgImagePath, e, {
							...d ?? {},
							workerDecoder: a.svgDecoder
						});
					} catch {
						s = await n();
					}
					else s = await n();
					C.set(t, s);
				} catch (e) {
					if (ue(e, "tiff")) {
						C.set(t, null);
						return;
					}
					if (Le(e) || qe(e)) throw e;
					C.set(t, null);
				}
			});
			if (await Promise.all([...n, ...i]), c()) return t;
		}
	}
	for (let [e, r] of n.elements.entries()) {
		if (c()) return t;
		if (r.type === "shape") Fr(v, r, u, y, S, x, o ? (t) => o({
			...t,
			elementIndex: e,
			origin: n.elementSources?.[e]?.origin ?? "slide"
		}) : void 0, a.fetchImage);
		else if (r.type === "picture") await Xr(v, r, u, c, a.fetchImage, a.tiff, h, a.svgDecoder, g);
		else if (r.type === "table") ti(v, r, u, S, x, o ? (t) => o({
			...t,
			elementIndex: e,
			origin: n.elementSources?.[e]?.origin ?? "slide"
		}) : void 0);
		else if (r.type === "media") await Zr(v, r, u, c, a.fetchMedia, a.skipMediaControls, a.fetchImage, a.tiff, h, a.svgDecoder, g);
		else if (r.type === "chart") {
			let e = Y * u;
			v.save(), ei(v, r, u), Ke(v, r.chart, {
				x: X(r.x, u),
				y: X(r.y, u),
				w: X(r.width, u),
				h: X(r.height, u)
			}, e, r.rotation, a.threeD, a.regionMap, (e) => C.get(Ie(e)), a.chartEx), v.restore();
		}
	}
	return c() || a.dim && ni(v, a.dim, d, f), t;
}
//#endregion
//#region packages/pptx/src/google-fonts.ts
var li = {
	...S,
	...c
};
function* ui(e) {
	for (let t of e?.paragraphs ?? []) for (let e of t.runs) e.type === "text" && (yield e.text);
}
function* di(e) {
	for (let t of e?.paragraphs ?? []) {
		t.defFontFamily && (yield t.defFontFamily);
		for (let e of t.runs) e.type === "text" && (e.fontFamily && (yield e.fontFamily), e.fontFamilyEa && (yield e.fontFamilyEa), e.fontFamilySym && (yield e.fontFamilySym));
	}
}
function* fi(e) {
	for (let t of e.elements) if (t.type === "shape") yield* ui(t.textBody);
	else if (t.type === "table") for (let e of t.rows) for (let t of e.cells) yield* ui(t.textBody);
	else if (t.type === "chart") {
		t.chart.title && (yield t.chart.title);
		for (let e of t.chart.categories) yield e;
		for (let e of t.chart.series) e.name && (yield e.name);
	}
}
var pi = class e {
	scripts;
	families;
	constructor(e, t, n, r) {
		this.majorFont = e, this.minorFont = t;
		let i = fe(e) ?? fe(t) ?? null;
		this.scripts = n ?? new d(i), this.families = r ?? /* @__PURE__ */ new Set(), e && this.families.add(e), t && this.families.add(t);
	}
	addSlide(e) {
		this.scripts.addText(fi(e));
		for (let t of e.elements) if (t.type === "shape") for (let e of di(t.textBody)) this.families.add(e);
		else if (t.type === "table") for (let e of t.rows) for (let t of e.cells) for (let e of di(t.textBody)) this.families.add(e);
	}
	names() {
		return [...this.families, ...this.scripts.names()];
	}
	withSlide(t) {
		let n = new e(this.majorFont, this.minorFont, this.scripts.clone(), new Set(this.families));
		return n.addSlide(t), n;
	}
}, mi = Object.freeze({
	archiveEntryCount: 0,
	declaredInflatedBytes: 0,
	distinctInflatedBytes: 0,
	operationInflatedBytes: 0
}), hi = l;
function gi(e, t) {
	if (e !== null && typeof e != "string") throw Error(`invalid PPTX presentation bootstrap ${t}`);
}
function _i(e, t) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error(`invalid PPTX presentation bootstrap slide at ${t}`);
	let n = e;
	if (n.index !== t) throw Error(`invalid PPTX presentation bootstrap slide index ${n.index}`);
	if (n.partName !== void 0 && typeof n.partName != "string") throw Error(`invalid PPTX presentation bootstrap slide partName at ${t}`);
	return Object.freeze({
		index: n.index,
		...n.partName === void 0 ? {} : { partName: n.partName }
	});
}
function vi(e, t) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error(`invalid PPTX presentation bootstrap embedded font at ${t}`);
	let n = e;
	if (typeof n.fontName != "string" || n.fontName.length === 0 || ![
		"regular",
		"bold",
		"italic",
		"boldItalic"
	].includes(n.style ?? "") || typeof n.partPath != "string" || n.partPath.length === 0 || n.partPath.startsWith("/") || n.partPath.split("/").includes("..") || !["application/x-font-ttf", "application/x-fontdata"].includes(n.contentType ?? "")) throw Error(`invalid PPTX presentation bootstrap embedded font fields at ${t}`);
	return Object.freeze({
		fontName: n.fontName,
		style: n.style,
		partPath: n.partPath,
		contentType: n.contentType
	});
}
function yi(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error("invalid PPTX presentation bootstrap payload");
	let t = e;
	if (!Number.isSafeInteger(t.slideCount) || (t.slideCount ?? -1) < 0 || !Number.isSafeInteger(t.slideWidth) || (t.slideWidth ?? 0) <= 0 || !Number.isSafeInteger(t.slideHeight) || (t.slideHeight ?? 0) <= 0 || !Array.isArray(t.embeddedFonts) || !Array.isArray(t.slides) || t.slides.length !== t.slideCount) throw Error("invalid PPTX presentation bootstrap dimensions or slide count");
	return gi(t.defaultTextColor, "defaultTextColor"), gi(t.majorFont, "majorFont"), gi(t.minorFont, "minorFont"), gi(t.hlinkColor, "hlinkColor"), gi(t.folHlinkColor, "folHlinkColor"), Object.freeze({
		slideCount: t.slideCount,
		slideWidth: t.slideWidth,
		slideHeight: t.slideHeight,
		defaultTextColor: t.defaultTextColor,
		majorFont: t.majorFont,
		minorFont: t.minorFont,
		hlinkColor: t.hlinkColor,
		folHlinkColor: t.folHlinkColor,
		embeddedFonts: Object.freeze(t.embeddedFonts.map(vi)),
		slides: Object.freeze(t.slides.map(_i))
	});
}
function bi(e) {
	return Object.freeze({
		type: "media",
		x: e.x,
		y: e.y,
		width: e.width,
		height: e.height,
		rotation: e.rotation,
		flipH: e.flipH,
		flipV: e.flipV,
		mediaKind: e.mediaKind,
		posterPath: e.posterPath,
		posterMimeType: e.posterMimeType,
		mediaPath: e.mediaPath,
		mimeType: e.mimeType
	});
}
function xi(e) {
	return Object.freeze({
		...e.id === void 0 ? {} : { id: e.id },
		...e.authorId === void 0 ? {} : { authorId: e.authorId },
		...e.author === void 0 ? {} : { author: e.author },
		...e.date === void 0 ? {} : { date: e.date },
		...e.status === void 0 ? {} : { status: e.status },
		text: e.text
	});
}
function Si(e) {
	return Object.freeze({ ...e });
}
function Ci(e) {
	return Object.freeze({
		...e.authorId === void 0 ? {} : { authorId: e.authorId },
		...e.modernAuthorId === void 0 ? {} : { modernAuthorId: e.modernAuthorId },
		...e.id === void 0 ? {} : { id: e.id },
		...e.index === void 0 ? {} : { index: e.index },
		...e.author === void 0 ? {} : { author: e.author },
		...e.date === void 0 ? {} : { date: e.date },
		...e.x === void 0 ? {} : { x: e.x },
		...e.y === void 0 ? {} : { y: e.y },
		...e.anchors?.length ? { anchors: Object.freeze(e.anchors.map(Si)) } : {},
		...e.status === void 0 ? {} : { status: e.status },
		text: e.text,
		...e.replies?.length ? { replies: Object.freeze(e.replies.map(xi)) } : {}
	});
}
function wi(e, t, n) {
	if (e !== void 0 && typeof e != "string") throw Error(`invalid PPTX presentation preflight comment ${t} at slide ${n}`);
}
function Ti(e, t) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error(`invalid PPTX presentation preflight comment reply at slide ${t}`);
	let n = e;
	for (let e of [
		"id",
		"authorId",
		"author",
		"date",
		"status"
	]) wi(n[e], e, t);
	if (typeof n.text != "string") throw Error(`invalid PPTX presentation preflight comment reply text at slide ${t}`);
	if (n.status !== void 0 && ![
		"active",
		"resolved",
		"closed"
	].includes(n.status)) throw Error(`invalid PPTX presentation preflight comment reply status at slide ${t}`);
	return xi(n);
}
function Ei(e, t) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error(`invalid PPTX presentation preflight comment at slide ${t}`);
	let n = e;
	for (let e of [
		"modernAuthorId",
		"id",
		"author",
		"date",
		"status"
	]) wi(n[e], e, t);
	for (let e of [
		"authorId",
		"index",
		"x",
		"y"
	]) {
		let r = n[e];
		if (r !== void 0 && (typeof r != "number" || !Number.isSafeInteger(r))) throw Error(`invalid PPTX presentation preflight comment ${e} at slide ${t}`);
	}
	if (typeof n.text != "string" || n.replies !== void 0 && !Array.isArray(n.replies) || n.anchors !== void 0 && !Array.isArray(n.anchors)) throw Error(`invalid PPTX presentation preflight comment fields at slide ${t}`);
	if (n.status !== void 0 && ![
		"active",
		"resolved",
		"closed"
	].includes(n.status)) throw Error(`invalid PPTX presentation preflight comment status at slide ${t}`);
	return Ci({
		...n,
		...n.anchors?.length ? { anchors: n.anchors.map((e) => Di(e, t)) } : {},
		...n.replies?.length ? { replies: n.replies.map((e) => Ti(e, t)) } : {}
	});
}
function Di(e, t) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error(`invalid PPTX presentation preflight comment anchor at slide ${t}`);
	let n = e;
	if (n.type === "slide" || n.type === "unknown") return Object.freeze({ type: n.type });
	if (n.type === "drawingElement") return wi(n.elementId, "anchor.elementId", t), wi(n.creationId, "anchor.creationId", t), Object.freeze({
		type: "drawingElement",
		...n.elementId === void 0 ? {} : { elementId: n.elementId },
		...n.creationId === void 0 ? {} : { creationId: n.creationId }
	});
	if (n.type === "textRange") {
		wi(n.elementId, "anchor.elementId", t);
		for (let e of ["start", "length"]) {
			let r = n[e];
			if (r !== void 0 && (typeof r != "number" || !Number.isSafeInteger(r))) throw Error(`invalid PPTX presentation preflight comment anchor.${e} at slide ${t}`);
		}
		return Object.freeze({
			type: "textRange",
			...n.elementId === void 0 ? {} : { elementId: n.elementId },
			...n.start === void 0 ? {} : { start: n.start },
			...n.length === void 0 ? {} : { length: n.length }
		});
	}
	throw Error(`invalid PPTX presentation preflight comment anchor type at slide ${t}`);
}
function Oi(e, t) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error(`invalid PPTX presentation preflight media at slide ${t}`);
	let n = e;
	for (let e of [
		"x",
		"y",
		"width",
		"height",
		"rotation"
	]) if (typeof n[e] != "number" || !Number.isFinite(n[e])) throw Error(`invalid PPTX presentation preflight media ${e} at slide ${t}`);
	if (n.type !== "media" || typeof n.flipH != "boolean" || typeof n.flipV != "boolean" || n.mediaKind !== "audio" && n.mediaKind !== "video" || typeof n.posterPath != "string" || typeof n.posterMimeType != "string" || typeof n.mediaPath != "string" || typeof n.mimeType != "string") throw Error(`invalid PPTX presentation preflight media fields at slide ${t}`);
	return bi(n);
}
function ki(e, t) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error("invalid PPTX presentation preflight payload");
	let n = e;
	if (!Number.isSafeInteger(n.slideCount) || (n.slideCount ?? -1) < 0 || !Number.isSafeInteger(n.slideWidth) || (n.slideWidth ?? 0) <= 0 || !Number.isSafeInteger(n.slideHeight) || (n.slideHeight ?? 0) <= 0 || !Array.isArray(n.embeddedFonts) || !Array.isArray(n.slides) || (t ? n.slides.length > (n.slideCount ?? -1) : n.slides.length !== n.slideCount) || !Array.isArray(n.fontPreloadNames)) throw Error("invalid PPTX presentation preflight dimensions or slide count");
	gi(n.defaultTextColor, "defaultTextColor"), gi(n.majorFont, "majorFont"), gi(n.minorFont, "minorFont"), gi(n.hlinkColor, "hlinkColor"), gi(n.folHlinkColor, "folHlinkColor");
	let r = n.slides.map((e, t) => {
		if (!e || typeof e != "object" || Array.isArray(e)) throw Error(`invalid PPTX presentation preflight slide at ${t}`);
		let n = e;
		if (n.index !== t || n.partName !== void 0 && typeof n.partName != "string" || n.notes !== null && typeof n.notes != "string" || typeof n.hidden != "boolean" || !Array.isArray(n.mediaElements) || n.comments !== void 0 && !Array.isArray(n.comments)) throw Error(`invalid PPTX presentation preflight slide fields at ${t}`);
		return Object.freeze({
			index: t,
			...n.partName === void 0 ? {} : { partName: n.partName },
			notes: n.notes,
			hidden: n.hidden,
			mediaElements: Object.freeze(n.mediaElements.map((e) => Oi(e, t))),
			...n.comments?.length ? { comments: Object.freeze(n.comments.map((e) => Ei(e, t))) } : {}
		});
	}), i = n.fontPreloadNames.map((e, t) => {
		if (e !== null && typeof e != "string") throw Error(`invalid PPTX presentation preflight font at ${t}`);
		return e;
	});
	return Object.freeze({
		slideCount: n.slideCount,
		slideWidth: n.slideWidth,
		slideHeight: n.slideHeight,
		defaultTextColor: n.defaultTextColor,
		majorFont: n.majorFont,
		minorFont: n.minorFont,
		hlinkColor: n.hlinkColor,
		folHlinkColor: n.folHlinkColor,
		embeddedFonts: Object.freeze(n.embeddedFonts.map(vi)),
		slides: Object.freeze(r),
		fontPreloadNames: Object.freeze(i)
	});
}
function Ai(e) {
	return ki(e, !1);
}
function ji(e) {
	return ki(e, !0);
}
function Mi(e, t) {
	for (let n of e.slides) for (let e of n.mediaElements) {
		if (e.mediaPath === t) return e.mimeType;
		if (e.posterPath === t) return e.posterMimeType;
	}
	return "";
}
function Ni(e, t) {
	if (e.index !== t.index || e.partName !== t.partName) throw Error(`PPTX pulled slide identity does not match bootstrap index ${t.index}`);
	return Object.freeze({
		index: t.index,
		...t.partName === void 0 ? {} : { partName: t.partName },
		notes: e.notes ?? null,
		hidden: e.hidden ?? !1,
		mediaElements: Object.freeze(e.elements.filter((e) => e.type === "media").map(bi)),
		...e.comments?.length ? { comments: Object.freeze(e.comments.map(Ci)) } : {}
	});
}
function Pi(e, t, n) {
	if (!(e <= t)) throw new ne(`PPTX presentation preflight exceeded its hard limit of ${t} projected bytes`, {
		stage: "parsing",
		violation: {
			format: "pptx",
			operation: "presentation-preflight",
			resource: "presentation-preflight",
			metric: "projected-bytes",
			limit: t,
			observed: Math.min(e, t + 1),
			configurable: !1,
			usage: n
		}
	});
}
var Fi = class {
	slideCountValue;
	slideWidthValue;
	slideHeightValue;
	defaultTextColorValue;
	majorFontValue;
	minorFontValue;
	hlinkColorValue;
	folHlinkColorValue;
	embeddedFontsValue;
	descriptors;
	slides = [];
	fonts;
	fontPreloadNames;
	fontProjectionBytes;
	projectionBytesValue;
	limit;
	pending = null;
	finished = null;
	constructor(e, t = {}) {
		let n = yi(e), r = t.hardLimitForTesting ?? hi;
		if (!Number.isSafeInteger(r) || r <= 0 || r > hi) throw Error("invalid PPTX presentation preflight test limit");
		this.limit = r, this.slideCountValue = n.slideCount, this.slideWidthValue = n.slideWidth, this.slideHeightValue = n.slideHeight, this.defaultTextColorValue = n.defaultTextColor, this.majorFontValue = n.majorFont, this.minorFontValue = n.minorFont, this.hlinkColorValue = n.hlinkColor, this.folHlinkColorValue = n.folHlinkColor, this.embeddedFontsValue = n.embeddedFonts, this.descriptors = [...n.slides], this.fonts = new pi(this.majorFontValue, this.minorFontValue), this.fontPreloadNames = Object.freeze(this.fonts.names()), this.fontProjectionBytes = Xe(this.fontPreloadNames, this.limit).jsonBytes, this.projectionBytesValue = Xe({
			slideCount: this.slideCountValue,
			slideWidth: this.slideWidthValue,
			slideHeight: this.slideHeightValue,
			defaultTextColor: this.defaultTextColorValue,
			majorFont: this.majorFontValue,
			minorFont: this.minorFontValue,
			hlinkColor: this.hlinkColorValue,
			folHlinkColor: this.folHlinkColorValue,
			embeddedFonts: this.embeddedFontsValue,
			remainingSlides: this.descriptors,
			slides: [],
			fontPreloadNames: this.fontPreloadNames
		}, this.limit).jsonBytes, Pi(this.projectionBytesValue, this.limit, mi);
	}
	get acceptedSlideCount() {
		return this.finished?.slideCount ?? this.slides.length;
	}
	get projectedBytes() {
		return this.projectionBytesValue;
	}
	get remainingDescriptorCount() {
		return this.descriptors.reduce((e, t) => e + Number(t !== void 0), 0);
	}
	get latestSlide() {
		return this.slides[this.slides.length - 1];
	}
	get currentFontPreloadNames() {
		return this.fontPreloadNames;
	}
	snapshot() {
		if (this.finished) return this.finished;
		if (this.pending) throw Error("PPTX presentation preflight has an uncommitted slide");
		return Object.freeze({
			slideCount: this.slideCountValue,
			slideWidth: this.slideWidthValue,
			slideHeight: this.slideHeightValue,
			defaultTextColor: this.defaultTextColorValue,
			majorFont: this.majorFontValue,
			minorFont: this.minorFontValue,
			hlinkColor: this.hlinkColorValue,
			folHlinkColor: this.folHlinkColorValue,
			embeddedFonts: this.embeddedFontsValue,
			slides: Object.freeze([...this.slides]),
			fontPreloadNames: this.fontPreloadNames
		});
	}
	addSlide(e, t = mi) {
		this.prepareSlide(e, t).commit();
	}
	prepareSlide(e, t = mi) {
		if (this.finished) throw Error("PPTX presentation preflight is already finished");
		if (this.pending) throw Error("PPTX presentation preflight already has a prepared slide");
		let n = this.slides.length, r = this.descriptors[n];
		if (!r) throw Error("PPTX presentation preflight received an extra slide");
		let i = Ni(e, r), a = this.fonts.withSlide(e), o = Object.freeze(a.names()), s = Xe(o, this.limit).jsonBytes, c = Xe(i, this.limit).jsonBytes, l = this.projectionBytesValue - this.fontProjectionBytes - Xe(r, this.limit).jsonBytes + 4;
		l = Ze(l, s, this.limit), l = Ze(l, c, this.limit), this.slides.length !== 0 && (l = Ze(l, 1, this.limit));
		let u = Xe({
			slide: i,
			fontPreloadNames: o
		}, this.limit).jsonBytes, d = Ze(this.projectionBytesValue, u, this.limit);
		Pi(Math.max(d, l), this.limit, t);
		let f = {
			state: "prepared",
			fact: i,
			fonts: a,
			fontNames: o,
			fontBytes: s,
			committedBytes: l
		};
		return this.pending = f, {
			projectedBytes: d,
			commit: () => {
				if (f.state !== "committed") {
					if (f.state === "rolled-back") throw Error("PPTX presentation preflight cannot commit a rolled-back slide");
					if (this.pending !== f) throw Error("PPTX presentation preflight prepared slide is stale");
					this.descriptors[n] = void 0, this.slides.push(f.fact), this.fonts = f.fonts, this.fontPreloadNames = f.fontNames, this.fontProjectionBytes = f.fontBytes, this.projectionBytesValue = f.committedBytes, f.state = "committed", this.pending = null;
				}
			},
			rollback: () => {
				if (f.state !== "rolled-back") {
					if (f.state === "committed") throw Error("PPTX presentation preflight cannot roll back a committed slide");
					if (this.pending !== f) throw Error("PPTX presentation preflight prepared slide is stale");
					f.state = "rolled-back", this.pending = null;
				}
			}
		};
	}
	finish() {
		if (this.finished) return this.finished;
		if (this.pending) throw Error("PPTX presentation preflight has an uncommitted slide");
		if (this.slides.length !== this.slideCountValue) throw Error(`PPTX presentation preflight is incomplete: ${this.slides.length}/${this.slideCountValue} slides`);
		return this.finished = Object.freeze({
			slideCount: this.slideCountValue,
			slideWidth: this.slideWidthValue,
			slideHeight: this.slideHeightValue,
			defaultTextColor: this.defaultTextColorValue,
			majorFont: this.majorFontValue,
			minorFont: this.minorFontValue,
			hlinkColor: this.hlinkColorValue,
			folHlinkColor: this.folHlinkColorValue,
			embeddedFonts: this.embeddedFontsValue,
			slides: Object.freeze([...this.slides]),
			fontPreloadNames: this.fontPreloadNames
		}), this.descriptors = [], this.slides = [], this.projectionBytesValue = Xe(this.finished, this.limit).jsonBytes, this.finished;
	}
}, Ii = 1024 * 1024, Li = class {
	active = /* @__PURE__ */ new Set();
	nextSessionId = 1;
	constructor(e) {
		if (this.options = e, !Number.isSafeInteger(e.slideCount) || e.slideCount < 0) throw TypeError("slideCount must be a non-negative safe integer");
		if (e.generation !== void 0 && (!Number.isSafeInteger(e.generation) || e.generation <= 0)) throw TypeError("generation must be a positive safe integer");
	}
	async load(e, t = !0, n) {
		this.assertSlideIndex(e);
		let r = this.nextSessionId++, i = {
			sessionId: r,
			operationId: r,
			generation: this.options.generation ?? 1
		}, a = new L(this.options.transport, {
			...i,
			maxByteCredit: w,
			timeoutMs: n
		});
		this.active.add(a);
		try {
			await this.options.open(e, i, n);
			let r = await zi(a);
			try {
				let e = r.usage ?? a.usageCheckpoint;
				e && this.options.onUsage?.(e);
				let n = t ? JSON.parse(new TextDecoder().decode(new Uint8Array(r.payload))) : void 0;
				return await r.ack(), n;
			} finally {
				r.disposeTransferred();
			}
		} catch (e) {
			throw await a.cancel("request-error").catch(() => void 0), e;
		} finally {
			this.active.delete(a);
		}
	}
	cancelAll() {
		for (let e of this.active) e.cancel("closed").catch(() => void 0);
		this.active.clear();
	}
	assertSlideIndex(e) {
		if (!Number.isSafeInteger(e) || e < 0 || e >= this.options.slideCount) throw RangeError(`Slide index ${e} out of range (count: ${this.options.slideCount})`);
	}
};
function Ri(e) {
	return !!e && typeof e == "object" && e.protocol === "ooxml-pull-v1";
}
async function zi(e) {
	try {
		return await e.pull(Ii);
	} catch (t) {
		let n = Bi(t);
		if (n === void 0) throw t;
		return e.pull(n);
	}
}
function Bi(e) {
	return u(e, Ii, w);
}
//#endregion
export { yi as a, li as c, si as d, an as f, Mi as i, ii as l, Ri as n, Ai as o, Fi as r, ji as s, Li as t, oi as u };
