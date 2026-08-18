import { $t as e, A as t, At as n, Bt as r, C as i, Ct as a, D as o, Dt as s, Ft as c, Gt as l, Ht as u, Jt as d, K as f, Kt as p, Lt as m, M as h, Mt as g, N as _, Nt as v, O as y, Qt as b, S as x, St as S, Ut as C, Wt as w, Yt as T, Zt as E, _ as D, _t as O, an as k, bt as A, c as j, ct as M, d as N, en as P, f as F, g as I, gt as L, h as R, ht as z, i as B, in as V, j as H, kt as U, m as W, mt as G, n as K, nn as q, p as ee, pt as J, qt as te, r as ne, rn as re, s as ie, sn as ae, tn as oe, u as se, vt as ce, w as le, wt as ue, y as de, yt as fe, zt as pe } from "./line-metrics-DdEJYxjx.js";
import { a as me, c as he, d as ge, i as _e, l as ve, n as ye, o as be, r as xe, s as Se, t as Ce, u as we } from "./line-distribute-Bvtp0Gt6.js";
import { f as Te, j as Y } from "./three-d-C28kqDym.js";
import { i as Ee } from "./resource-measurement-CgMubiAI.js";
//#region packages/pptx/src/types.ts
function De(e) {
	return e;
}
var Oe = {
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
}, ke = Math.PI * 2 / 216e5, Ae = Oe, je = /* @__PURE__ */ new Map();
function Me(e) {
	return e.toLowerCase() in Ae;
}
function Ne(e) {
	let t = je.get(e);
	if (t) return t;
	let n = Ae[e];
	return n ? (t = {
		adj: n.adj.map(([e, t]) => [e, p(t)]),
		gd: n.gd.map(([e, t]) => [e, p(t)]),
		paths: n.paths
	}, je.set(e, t), t) : null;
}
var Pe = 48;
function Fe(e, t, n, r) {
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
			for (let t = 1; t <= Pe; t++) {
				let n = t / Pe, o = 1 - n, s = o * o * o * l + 3 * o * o * n * e + 3 * o * n * n * i + n * n * n * d, p = o * o * o * u + 3 * o * o * n * r + 3 * o * n * n * a + n * n * n * f;
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
			for (let t = 1; t <= Pe; t++) {
				let n = t / Pe, o = 1 - n, s = o * o * l + 2 * o * n * e + n * n * i, d = o * o * u + 2 * o * n * r + n * n * a;
				c.push({
					x: s,
					y: d
				});
			}
			l = i, u = a;
			break;
		}
		case "a": {
			let e = t.resolve(n[1]), r = t.resolve(n[2]), o = e * i, s = r * a, d = t.resolve(n[3]) * ke, f = t.resolve(n[4]) * ke, p = (t) => Math.atan2(e * Math.sin(t), r * Math.cos(t)), m = Math.PI * 2, h = p(d), g = Math.trunc(f / m), _ = f - g * m, v = p(d + _) - h;
			_ > 0 && v < 0 ? v += m : _ < 0 && v > 0 && (v -= m);
			let y = v + g * m, b = l - o * Math.cos(h), x = u - s * Math.sin(h), S = Math.max(Pe, Math.ceil(Math.abs(y) / m * 96));
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
function Ie(e) {
	let t = [0];
	for (let n = 1; n < e.length; n++) {
		let r = e[n].x - e[n - 1].x, i = e[n].y - e[n - 1].y;
		t.push(t[n - 1] + Math.hypot(r, i));
	}
	return t;
}
function Le(e, t, n, r) {
	let i = Ne(e.toLowerCase());
	if (!i || i.paths.length === 0) return null;
	let a = te({
		w: n,
		h: r,
		adj: t
	}, i.adj, i.gd), o = i.paths.length === 1, s = Fe(i.paths[0], a, n, r), c = o ? s : Fe(i.paths[i.paths.length - 1], a, n, r);
	return {
		top: s,
		bottom: c,
		topLen: Ie(s),
		bottomLen: Ie(c),
		singleEdge: o
	};
}
function Re(e, t, n) {
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
function ze(e) {
	return e.topLen[e.topLen.length - 1] ?? 0;
}
function Be(e, t) {
	if (!e.singleEdge) return 1;
	let n = ze(e);
	return n <= 0 ? 1 : Math.max(0, Math.min(1, t / n));
}
function Ve(e, t, n, r) {
	if (e.singleEdge) {
		let i = Re(e.top, e.topLen, t), a = Math.atan2(i.ty, i.tx), o = i.ty, s = -i.tx, c = n * (1 - r);
		return {
			x: i.x - o * c,
			y: i.y - s * c,
			angle: a,
			vScale: 1,
			shear: 0
		};
	}
	let i = Re(e.top, e.topLen, t), a = Re(e.bottom, e.bottomLen, t), o = a.x - i.x, s = a.y - i.y, c = i.x + o * r, l = i.y + s * r, u = i.tx + a.tx, d = i.ty + a.ty, f = Math.atan2(d, u), p = Math.cos(f), m = Math.sin(f), h = (p * o + m * s) / (n > 0 ? n : 1), g = (-m * o + p * s) / (n > 0 ? n : 1);
	return {
		x: c,
		y: l,
		angle: f,
		vScale: g === 0 ? n > 0 ? Math.hypot(o, s) / n : 1 : g,
		shear: g === 0 ? 0 : h / g
	};
}
//#endregion
//#region packages/core/src/shape/effects.ts
function He(e, t) {
	return [t === "tl" || t === "l" || t === "bl" ? e.x : t === "tr" || t === "r" || t === "br" ? e.x + e.w : e.x + e.w / 2, t === "tl" || t === "t" || t === "tr" ? e.y : t === "l" || t === "ctr" || t === "r" ? e.y + e.h / 2 : e.y + e.h];
}
function Ue(e, t) {
	return e * t;
}
function We(e) {
	return e.getContext("2d") ?? null;
}
function Ge(e, t, n, r) {
	let i = Math.max(0, Math.floor(e.x - t)), a = Math.max(0, Math.floor(e.y - t)), o = Math.min(n, Math.ceil(e.x + e.w + t)), s = Math.min(r, Math.ceil(e.y + e.h + t));
	return {
		x: i,
		y: a,
		w: Math.max(1, o - i),
		h: Math.max(1, s - a)
	};
}
function Ke(e, t) {
	if (t.x === 0 && t.y === 0) return e;
	let n = t.x, r = t.y;
	return new Proxy(e, {
		get(e, t) {
			if (t === "setTransform") return (t) => {
				e.setTransform(t.a, t.b, t.c, t.d, t.e - n, t.f - r);
			};
			let i = Reflect.get(e, t);
			return typeof i == "function" ? i.bind(e) : i;
		},
		set(e, t, n) {
			return e[t] = n, !0;
		}
	});
}
function qe(t, n, r, i, a, o, s, c = 0, l) {
	let u = Math.max(0, Ue(i.blur, a)), d = Ue(i.dist, a), f = i.rotWithShape === !1 ? 0 : c, p = (i.dir + f) * Math.PI / 180, m = Math.cos(p) * d, h = Math.sin(p) * d, g = Ge(r, Math.ceil(u * 3 + Math.max(Math.abs(m), Math.abs(h))) + 2, o, s), _ = e(g.w, g.h);
	if (!_) return !1;
	let v = We(_);
	if (!v) return !1;
	n(Ke(v, g)), v.save(), v.setTransform(1, 0, 0, 1, 0, 0), v.globalCompositeOperation = "source-in", v.fillStyle = E(i.color, i.alpha), v.fillRect(0, 0, g.w, g.h), v.restore(), t.save(), u > 0 && (t.filter = `blur(${u}px)`);
	let [y, b] = l ?? He(r, i.algn ?? "b"), x = i.sx ?? 1, S = i.sy ?? 1, C = Math.tan((i.kx ?? 0) * Math.PI / 180), w = Math.tan((i.ky ?? 0) * Math.PI / 180);
	return t.translate(m, h), t.translate(y, b), f !== 0 && t.rotate(f * Math.PI / 180), t.transform(x, w, C, S, 0, 0), f !== 0 && t.rotate(-f * Math.PI / 180), t.translate(-y, -b), t.drawImage(_, g.x, g.y), t.restore(), !0;
}
function Je(t, n, r, i, a, o, s) {
	let c = Ue(i.blur, a), l = Ue(i.dist, a), u = i.dir * Math.PI / 180, d = Math.cos(u) * l, f = Math.sin(u) * l, p = Ge(r, Math.ceil(3 * c + Math.abs(l)) + 2, o, s), m = e(p.w, p.h);
	if (!m) return;
	let h = We(m);
	if (!h) return;
	let g = Ke(h, p);
	g.save(), g.fillStyle = E(i.color, i.alpha), n(g), g.restore(), g.save(), g.globalCompositeOperation = "destination-out", g.filter = c > 0 ? `blur(${c}px)` : "none", g.translate(d, f), g.fillStyle = "#000", n(g), g.restore(), g.save(), g.globalCompositeOperation = "destination-in", g.filter = "none", g.fillStyle = "#000", n(g), g.restore(), t.save(), t.drawImage(m, p.x, p.y), t.restore();
}
function Ye(t, n, r, i, a, o, s, c) {
	let l = Ue(i.radius, a);
	if (l <= 0) {
		n(t);
		return;
	}
	let u = Ge(r, Math.ceil(l) + 2, o, s), d = r.x - u.x, f = r.y - u.y, p = e(u.w, u.h);
	if (!p) {
		n(t);
		return;
	}
	let m = We(p);
	if (!m) {
		n(t);
		return;
	}
	let h = Ke(m, u), g = c ?? n;
	n(h);
	let _ = e(u.w, u.h), v = e(u.w, u.h), y = _ ? We(_) : null, b = v ? We(v) : null;
	if (_ && y && v && b) {
		let e = Ke(y, u);
		e.fillStyle = "#000", g(e), b.drawImage(p, d, f, r.w, r.h, d - l, f - l, r.w + l * 2, r.h + l * 2), b.drawImage(p, 0, 0), b.globalCompositeOperation = "destination-in", b.filter = `blur(${l / 3}px)`, b.drawImage(_, 0, 0), b.filter = "none", b.globalCompositeOperation = "source-over", t.save(), t.drawImage(v, u.x, u.y), t.restore();
		return;
	}
	t.save(), t.drawImage(p, 0, 0), t.restore();
}
function Xe(t, n, r, i, a, o, s) {
	let c = e(o, s);
	if (!c) return;
	let l = We(c);
	if (!l) return;
	let u = Ue(i.blur, a);
	l.save(), u > 0 && (l.filter = `blur(${u}px)`), n(l), l.restore(), l.save(), l.globalCompositeOperation = "destination-in";
	let d = r.y, f = r.y + r.h, p = l.createLinearGradient(0, f, 0, d), m = Ze(i.stPos), h = Ze(i.endPos);
	p.addColorStop(0, `rgba(0,0,0,${i.stA})`), m > 0 && p.addColorStop(m, `rgba(0,0,0,${i.stA})`), h < 1 && h > m && p.addColorStop(h, `rgba(0,0,0,${i.endA})`), p.addColorStop(1, `rgba(0,0,0,${i.endA})`), l.fillStyle = p, l.fillRect(0, 0, o, s), l.restore();
	let g = Ue(i.dist, a), _ = i.dir * Math.PI / 180, v = Math.cos(_) * g, y = Math.sin(_) * g;
	t.save(), t.translate(r.x + v, f + y), t.scale(i.sx, i.sy), t.translate(-r.x, -f), t.drawImage(c, 0, 0), t.restore();
}
function Ze(e) {
	return e < 0 ? 0 : e > 1 ? 1 : e;
}
//#endregion
//#region packages/core/src/shape/scene3d-camera.ts
var Qe = 26, $e = {
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
		fovDeg: Qe
	},
	perspectiveRelaxed: {
		kind: "perspective",
		baseLat: 0,
		baseLon: 0,
		baseRev: 0,
		fovDeg: Qe
	},
	perspectiveRelaxedModerately: {
		kind: "perspective",
		baseLat: 0,
		baseLon: 0,
		baseRev: 0,
		fovDeg: Qe
	},
	perspectiveAbove: {
		kind: "perspective",
		baseLat: -20,
		baseLon: 0,
		baseRev: 0,
		fovDeg: Qe
	},
	perspectiveBelow: {
		kind: "perspective",
		baseLat: 20,
		baseLon: 0,
		baseRev: 0,
		fovDeg: Qe
	},
	perspectiveLeft: {
		kind: "perspective",
		baseLat: 0,
		baseLon: -20,
		baseRev: 0,
		fovDeg: Qe
	},
	perspectiveRight: {
		kind: "perspective",
		baseLat: 0,
		baseLon: 20,
		baseRev: 0,
		fovDeg: Qe
	}
};
function et(e, t) {
	let n = Array(9).fill(0);
	for (let r = 0; r < 3; r++) for (let i = 0; i < 3; i++) {
		let a = 0;
		for (let n = 0; n < 3; n++) a += e[r * 3 + n] * t[n * 3 + i];
		n[r * 3 + i] = a;
	}
	return n;
}
function tt(e) {
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
function nt(e) {
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
function rt(e) {
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
function it(e, t, n, r) {
	return [
		e[0] * t + e[1] * n + e[2] * r,
		e[3] * t + e[4] * n + e[5] * r,
		e[6] * t + e[7] * n + e[8] * r
	];
}
function at(e, t) {
	let n = t ? t.lat : e.baseLat, r = t ? t.lon : e.baseLon;
	return et(rt(-(t ? t.rev : e.baseRev)), et(tt(-n), nt(-r)));
}
function ot(e) {
	return $e[e] || (e.startsWith("perspective") ? $e.perspectiveFront : $e.orthographicFront);
}
function st(e, t, n) {
	let r = ot(e.prst), i = at(r, e.rot);
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
			let [n, r, o] = it(i, e, t, 0), s = a - o, c = a / (Math.abs(s) < 1e-6 ? 1e-6 * Math.sign(s || 1) : s);
			return [n * c, r * c];
		});
	} else u = s.map(([e, t]) => {
		let [n, r] = it(i, e, t, 0);
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
function ct(e) {
	let { isIdentity: t } = st(e, 1e3, 1e3);
	return !t;
}
function lt(e, t, n, r) {
	let i = ot(e.prst), a = at(i, e.rot);
	if (t <= 0 || n <= 0 || r === 0) return {
		x: 0,
		y: 0
	};
	let o = t / 2, s = n / 2, c = Math.max(o, s), l = e.zoom ?? 1, u = (t) => {
		let [n, r, o] = it(a, 0, 0, t);
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
//#region packages/core/src/shape/scene3d-draw.ts
function ut(e, t, n, r) {
	let i = e.x, a = e.y, o = t.x, s = t.y, c = n.x, l = n.y, u = r.x, d = r.y, f = o - c, p = u - c, m = i - o + c - u, h = s - l, g = d - l, _ = a - s + l - d, v, y;
	if (Math.abs(m) < 1e-12 && Math.abs(_) < 1e-12) v = 0, y = 0;
	else {
		let e = f * g - p * h;
		if (Math.abs(e) < 1e-12) return null;
		v = (m * g - p * _) / e, y = (f * _ - m * h) / e;
	}
	return [
		o - i + v * o,
		u - i + y * u,
		i,
		s - a + v * s,
		d - a + y * d,
		a,
		v,
		y,
		1
	];
}
function dt(e, t, n) {
	let r = e[6] * t + e[7] * n + e[8];
	return {
		x: (e[0] * t + e[1] * n + e[2]) / r,
		y: (e[3] * t + e[4] * n + e[5]) / r
	};
}
var ft = 1;
function pt(e, t) {
	let [n, r, i, a, o, s] = e, [c, l, u, d, f, p] = t;
	return [
		n * c + i * l,
		r * c + a * l,
		n * u + i * d,
		r * u + a * d,
		n * f + i * p + o,
		r * f + a * p + s
	];
}
function mt(e, t, n, r, i, a, o, s, c, l, u, d, f) {
	let p = c - o, m = l - s;
	if (p <= 0 || m <= 0) return;
	let h = (d.x - u.x) / p, g = (d.y - u.y) / p, _ = (f.x - u.x) / m, v = (f.y - u.y) / m, y = (Math.hypot(d.x - u.x, d.y - u.y) || 1) * a, b = (Math.hypot(f.x - u.x, f.y - u.y) || 1) * a, x = ft * p / y, S = ft * m / b, C = Math.max(0, o - x), w = Math.max(0, s - S), T = Math.min(n, c + x), E = Math.min(r, l + S), D = T - C, O = E - w;
	if (D <= 0 || O <= 0) return;
	e.save();
	let [k, A, j, M, N, P] = pt(i, [
		h,
		g,
		_,
		v,
		u.x - o * h - s * _,
		u.y - o * g - s * v
	]);
	e.setTransform(k, A, j, M, N, P), e.drawImage(t, C, w, D, O, C, w, D, O), e.restore();
}
function ht(e, t, n, r, i, a, o, s, c, l, u, d, f) {
	let p = dt(o, s, c), m = dt(o, l, c), h = dt(o, s, u), g = dt(o, l, u), _ = (s + l) / 2, v = (c + u) / 2, y = dt(o, _, v), b = {
		x: (p.x + m.x + h.x + g.x) / 4,
		y: (p.y + m.y + h.y + g.y) / 4
	}, x = _t(i), S = Math.hypot(y.x - b.x, y.y - b.y) * x;
	if (f <= 0 || S <= d) {
		mt(e, t, n, r, i, a, s * n, c * r, l * n, u * r, p, m, h);
		return;
	}
	l - s >= u - c ? (ht(e, t, n, r, i, a, o, s, c, _, u, d, f - 1), ht(e, t, n, r, i, a, o, _, c, l, u, d, f - 1)) : (ht(e, t, n, r, i, a, o, s, c, l, v, d, f - 1), ht(e, t, n, r, i, a, o, s, v, l, u, d, f - 1));
}
function gt(e, t, n, r, i, a = .5) {
	if (n <= 0 || r <= 0) return;
	let [o, s, c, l] = i;
	if (Math.abs(o.x * s.y - s.x * o.y + s.x * c.y - c.x * s.y + c.x * l.y - l.x * c.y + l.x * o.y - o.x * l.y) / 2 < 1e-6) return;
	let u = ut(i[0], i[1], i[2], i[3]);
	if (!u) return;
	let d = t.getTransform(), f = [
		d.a,
		d.b,
		d.c,
		d.d,
		d.e,
		d.f
	], p = _t(f);
	Ct(e, t, n, r, i, f, p, u, a, 14) || (xt(), t.save(), t.beginPath(), t.moveTo(i[0].x, i[0].y), t.lineTo(i[1].x, i[1].y), t.lineTo(i[2].x, i[2].y), t.lineTo(i[3].x, i[3].y), t.closePath(), t.clip(), ht(t, e, n, r, f, p, u, 0, 0, 1, 1, a, 14), t.restore());
}
function _t(e) {
	return Math.sqrt(Math.abs(e[0] * e[3] - e[1] * e[2])) || 1;
}
function vt(e, t, n) {
	let r = ut(e[0], e[1], e[2], e[3]);
	if (!r) return null;
	let i = [
		[-t, -n],
		[1 + t, -n],
		[1 + t, 1 + n],
		[-t, 1 + n]
	], a = [];
	for (let [e, t] of i) {
		if (!(r[6] * e + r[7] * t + r[8] > 1e-9)) return null;
		a.push(dt(r, e, t));
	}
	return a;
}
function yt(e, t, n) {
	let r = ut(e[0], e[1], e[2], e[3]);
	return r && r[6] * t + r[7] * n + r[8] > 1e-9 ? dt(r, t, n) : null;
}
var bt = !1;
function xt() {
	bt || (bt = !0, typeof console < "u" && typeof console.warn == "function" && console.warn("[ooxml] scene3d: no offscreen canvas available — using the direct warp fallback (per-cell bleed only, no supersample). Textured-source seams may be faintly visible; the silhouette and geometry are unaffected."));
}
var St = 2;
function Ct(t, n, r, i, a, o, s, c, l, u) {
	let d = a.map((e) => ({
		x: o[0] * e.x + o[2] * e.y + o[4],
		y: o[1] * e.x + o[3] * e.y + o[5]
	})), f = Infinity, p = Infinity, m = -Infinity, h = -Infinity;
	for (let e of d) e.x < f && (f = e.x), e.y < p && (p = e.y), e.x > m && (m = e.x), e.y > h && (h = e.y);
	f = Math.floor(f) - 1, p = Math.floor(p) - 1, m = Math.ceil(m) + 1, h = Math.ceil(h) + 1;
	let g = m - f, _ = h - p;
	if (g <= 0 || _ <= 0) return !1;
	let v = Math.max(1, Math.ceil(g * St)), y = Math.max(1, Math.ceil(_ * St)), b = e(v, y);
	if (!b || b.width !== v || b.height !== y) return !1;
	let x = b.getContext("2d") ?? null;
	if (!x) return !1;
	let S = St, C = [
		o[0] * S,
		o[1] * S,
		o[2] * S,
		o[3] * S,
		(o[4] - f) * S,
		(o[5] - p) * S
	];
	x.save(), x.setTransform(C[0], C[1], C[2], C[3], C[4], C[5]), x.beginPath(), x.moveTo(a[0].x, a[0].y), x.lineTo(a[1].x, a[1].y), x.lineTo(a[2].x, a[2].y), x.lineTo(a[3].x, a[3].y), x.closePath(), x.clip(), ht(x, t, r, i, C, s, c, 0, 0, 1, 1, l * S, u), x.restore(), n.save(), n.setTransform(1, 0, 0, 1, 0, 0);
	let w = n.imageSmoothingEnabled, T = n.imageSmoothingQuality;
	return n.imageSmoothingEnabled = !0, n.imageSmoothingQuality = "high", n.drawImage(b, 0, 0, g * S, _ * S, f, p, g, _), n.imageSmoothingEnabled = w, n.imageSmoothingQuality = T, n.restore(), !0;
}
//#endregion
//#region packages/core/src/shape/bevel-shading.ts
function wt(e, t) {
	if (t <= 0) return () => 1;
	let n = (e) => Math.max(0, Math.min(1, e / t));
	switch (e) {
		case "hardEdge": {
			let e = Mt;
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
function Tt(e) {
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
function Et(e, t = 3) {
	if (e <= 0) return Array(t).fill(1);
	let n = Math.sqrt(12 * e * e / t + 1), r = Math.floor(n);
	r % 2 == 0 && r--;
	let i = r + 2, a = (12 * e * e - t * r * r - 4 * t * r - 3 * t) / (-4 * r - 4), o = Math.round(a), s = [];
	for (let e = 0; e < t; e++) s.push(e < o ? r : i);
	return s;
}
function Dt(e, t, n, r, i, a) {
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
function Ot(e, t, n, r) {
	let i = Float64Array.from(e);
	if (r <= 0 || t <= 0 || n <= 0) return i;
	let a = new Float64Array(t * n);
	for (let e of Et(r, 3)) {
		let r = Math.max(1, (e - 1) / 2);
		Dt(i, a, t, n, r, !0), Dt(a, i, t, n, r, !1);
	}
	return i;
}
function kt(e, t, n, r = 128) {
	let i = new Float64Array(t * n);
	for (let a = 0; a < t * n; a++) i[a] = (e[a] ?? 0) >= r ? 0x56bc75e2d63100000 : 0;
	let a = new Float64Array(n);
	for (let e = 0; e < t; e++) {
		for (let r = 0; r < n; r++) a[r] = i[r * t + e];
		let r = Tt(a);
		for (let a = 0; a < n; a++) i[a * t + e] = r[a];
	}
	let o = new Float64Array(t);
	for (let e = 0; e < n; e++) {
		for (let n = 0; n < t; n++) o[n] = i[e * t + n];
		let n = Tt(o);
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
var At = .25, jt = .35, Mt = .5;
function Nt(e, t, n, r, i, a) {
	let o = new Float32Array(t * n * 3), s = new Uint8Array(t * n), c = new Float32Array(t * n);
	if (t <= 0 || n <= 0) return {
		normals: o,
		bandMask: s,
		bandWeight: c
	};
	let l = kt(e, t, n), u = wt(i, r), d = (n, r) => (e[r * t + n] ?? 0) >= 128, f = (r > 0 ? a / r : 0) * r, p = Ot(l, t, n, Math.max(1, r * At)), m = (e) => {
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
		let g = u / r, _ = 1 - jt, v = 1;
		if (g > _) {
			let e = Math.min(1, (g - _) / jt);
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
var Pt = 35 * Math.PI / 180, Ft = 12 * Math.PI / 180, It = {
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
function Lt(e, t, n) {
	let r = n * Math.PI / 180, i = Math.cos(r), a = Math.sin(r);
	return {
		x: e * i - t * a,
		y: e * a + t * i
	};
}
function Rt(e, t, n) {
	let r = It[t] ?? It.t;
	return n && n.rev && (r = Lt(r.x, r.y, n.rev)), Bt(r.x, r.y, Pt);
}
function zt(e) {
	let t = Math.hypot(e.x, e.y) || 1;
	return Bt(-e.x / t, -e.y / t, Ft);
}
function Bt(e, t, n) {
	let r = Math.hypot(e, t) || 1, i = Math.cos(n), a = Math.sin(n), o = e / r * i, s = t / r * i, c = a, l = Math.hypot(o, s, c) || 1;
	return {
		x: o / l,
		y: s / l,
		z: c / l
	};
}
var Vt = 2, Ht = {
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
}, Ut = .8;
function Wt(e) {
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
function Gt(e, t, n = !0) {
	let r = Ht[e], i = {
		light: t,
		material: e,
		ambient: r.ambient,
		diffuse: r.diffuse,
		specular: r.specular,
		shininess: r.shininess
	};
	return n && (i.fillLight = zt(t), i.fillDiffuse = i.diffuse * Ut), i;
}
function Kt(e, t) {
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
function qt(e, t, n) {
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
function Jt(e, t, n) {
	let r = e.canvas.width, i = e.canvas.height;
	if (r <= 0 || i <= 0) return;
	let a = t.widthPx;
	if (a < .75) return;
	let { x: o, y: s, w: c, h: l } = qt(n, r, i);
	if (c <= 0 || l <= 0) return;
	let u = e.getImageData(o, s, c, l), d = u.data, f = new Uint8ClampedArray(c * l);
	for (let e = 0; e < c * l; e++) f[e] = d[e * 4 + 3];
	let { bandMask: p, bandWeight: m, normals: h } = Nt(f, c, l, a, t.prst, t.heightPx), g = Gt(t.material, t.light), _ = Kt({
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
		let o = 1 + (Kt({
			x: r,
			y: i,
			z: a
		}, g) / _ - 1) * n, s = e * 4;
		if (o >= 1) {
			let e = Math.min(1, (o - 1) * Vt);
			for (let t = 0; t < 3; t++) {
				let n = Math.min(255, d[s + t] * o);
				d[s + t] = n + (255 - n) * e;
			}
		} else d[s] = Math.max(0, d[s] * o), d[s + 1] = Math.max(0, d[s + 1] * o), d[s + 2] = Math.max(0, d[s + 2] * o);
	}
	e.putImageData(u, o, s);
}
function Yt(e, t, n) {
	let r = e.canvas.width, i = e.canvas.height;
	if (r <= 0 || i <= 0) return;
	let a = t.offsetX, o = t.offsetY, s = Math.hypot(a, o);
	if (s < .75) return;
	let { x: c, y: l, w: u, h: d } = qt(n, r, i);
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
function Xt(e, t, n, r, i, a, o, s = 1) {
	let c = Math.max(1, i * .05), l = o === "heavy" || (o?.endsWith("Heavy") ?? !1) ? c * 1.8 : c, u = n + Math.max(2, l), d = J(u, l, s);
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
		e.beginPath(), e.moveTo(t, i + J(i, l, s)), e.lineTo(t + r, i + J(i, l, s)), e.moveTo(t, a + J(a, l, s)), e.lineTo(t + r, a + J(a, l, s)), e.stroke();
		return;
	}
	e.setLineDash(Te(o ?? "sng", l)), e.beginPath(), e.moveTo(t, u + d), e.lineTo(t + r, u + d), e.stroke(), e.setLineDash([]);
}
//#endregion
//#region packages/core/src/text/highlight-box.ts
function Zt(e, t) {
	return {
		top: e - t * .85,
		height: t * 1.1
	};
}
//#endregion
//#region packages/core/src/text/justify-positions.ts
function Qt(e, t, n, r, i = 0) {
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
var $t = .5;
function en(e, t) {
	if (!(t > 0) || !(e.h > 0)) return [{
		y: e.y,
		h: Math.max(0, e.h),
		radius: 0
	}];
	let n = Math.max(4, Math.min(24, Math.ceil(t / $t) + 1)), r = e.y + e.h, i = [];
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
function tn(e, t, n, r, i) {
	for (let a of en(n, r)) e.save(), e.beginPath(), e.rect(0, a.y, i, a.h), e.clip(), e.filter = a.radius > 0 ? `blur(${a.radius}px)` : "none", e.drawImage(t, 0, 0), e.restore();
}
//#endregion
//#region packages/pptx/src/hyperlink.ts
function nn(e, t) {
	let n = e !== void 0 && e !== "" ? e : void 0, r = t !== void 0 && t !== "" ? t : void 0;
	if (n === void 0 && r === void 0) return;
	if (r !== void 0) return {
		kind: "internal",
		ref: n ?? r
	};
	let i = n, a = B(i);
	return a !== null && ne.includes(a) ? {
		kind: "external",
		url: i
	} : {
		kind: "internal",
		ref: i
	};
}
//#endregion
//#region packages/pptx/src/media-chrome.ts
function rn(e, t, n, r, i, a) {
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
var an = (e) => {
	let t = e.text;
	return typeof t == "string" ? t : void 0;
}, on = (e) => "isTab" in e;
function sn(e) {
	for (let t of e) {
		let e = an(t);
		if (e !== void 0 && H(e)) return !0;
	}
	return !1;
}
function cn(e, n) {
	let r = e.length;
	if (r === 0) return {
		order: [],
		rtl: []
	};
	let i = "", a = Array(r), o;
	for (let t = 0; t < r; t++) {
		a[t] = i.length;
		let n = an(e[t]) ?? "";
		if (i += n.length > 0 ? n : "￼", on(e[t])) {
			for (o ??= []; o.length < i.length;) o.push(null);
			o[a[t]] = "S";
		}
	}
	if (o) for (; o.length < i.length;) o.push(null);
	let { levels: s, paragraphLevel: c } = h().computeLevels(i, n ? "rtl" : "ltr", o), { order: l, segLevels: u } = t(s, c, a), d = Array(r);
	for (let e = 0; e < r; e++) d[e] = (u[e] & 1) == 1;
	return {
		order: l,
		rtl: d
	};
}
//#endregion
//#region packages/pptx/src/cjk-wrap.ts
function ln(e, t, n, r, i = 0, a = !1) {
	if (e.length === 0) return 0;
	let s = t === 0, c = 0, l = t;
	for (let t of e) {
		let e = c > 0 || a ? i : 0;
		if (l + e + t.w > n) {
			if (c > 0 || !s) break;
			l += e + t.w, c++;
			break;
		}
		l += e + t.w, c++;
	}
	return c === 0 ? 0 : c >= e.length ? e.length : o(e.map((e) => e.ch), c, r, +!!s);
}
//#endregion
//#region packages/pptx/src/text-justify.ts
var un = (e) => /\s/.test(String.fromCodePoint(e));
function dn(e, t, n, r, i) {
	if (r === "just" && i) return null;
	let a = t - n;
	if (a <= .5) return null;
	let o = Ce(e, a, {
		firstContentSi: 0,
		lastDrawnSi: e.length,
		isGapChar: le,
		isWhitespace: un,
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
function fn(e) {
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
function pn(e) {
	let t = fn(e);
	return .299 * t.r + .587 * t.g + .114 * t.b;
}
function mn(e, t) {
	if (!e && !t) return null;
	if (!e) return t;
	if (!t) return e;
	if (e.width !== t.width) return e.width > t.width ? e : t;
	let n = pn(e.color), r = pn(t.color);
	return n === r || n < r ? e : t;
}
//#endregion
//#region packages/pptx/src/smartart-fallback-contrast.ts
function hn(e) {
	let t = S(e.length === 8 ? e.slice(0, 6) : e);
	if (!t) return null;
	let n = a(t[0], t[1], t[2]);
	if (e.length !== 8) return n;
	let r = Number.parseInt(e.slice(6, 8), 16);
	if (Number.isNaN(r)) return null;
	let i = r / 255;
	return i * n + (1 - i);
}
function gn(e) {
	if (!e) return null;
	if (e.fillType === "solid") return hn(e.color);
	if (e.fillType === "gradient") {
		let t = e.stops.map((e) => ({
			p: Math.min(1, Math.max(0, e.position)),
			l: hn(e.color)
		})).filter((e) => e.l !== null).sort((e, t) => e.p - t.p);
		if (t.length === 0) return null;
		let n = t[0], r = t[t.length - 1], i = n.l * n.p + r.l * (1 - r.p);
		for (let e = 0; e + 1 < t.length; e++) i += (t[e].l + t[e + 1].l) / 2 * (t[e + 1].p - t[e].p);
		return i;
	}
	return null;
}
function _n(e) {
	return e.name === "SmartArt" && e.id === void 0;
}
function vn(e, t) {
	let n = gn(e);
	if (n === null || n >= .5) return null;
	let r = hn(t.replace(/^#/, ""));
	return r !== null && r >= .5 ? null : "#FFFFFF";
}
//#endregion
//#region packages/pptx/src/tab-layout.ts
function yn(e, t, n, r, i, a = 0) {
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
var bn = () => !1;
function xn(e, t, n) {
	let r = e.textBaseline;
	e.textBaseline = "alphabetic";
	let i = e.measureText(t);
	e.textBaseline = r;
	let a = i.fontBoundingBoxAscent, o = i.fontBoundingBoxDescent;
	return typeof a == "number" && typeof o == "number" && (a !== 0 || o !== 0) ? (a - o) / 2 : .38 * n;
}
function Sn(e, t) {
	let n = e.textAlign, r = e.textBaseline;
	e.textAlign = "center", e.textBaseline = "middle";
	let i = e.measureText(t);
	e.textAlign = n, e.textBaseline = r;
	let a = i.actualBoundingBoxAscent, o = i.actualBoundingBoxDescent;
	return typeof a == "number" && typeof o == "number" ? (a - o) / 2 : 0;
}
function Cn(e, t, n, r, i, a, o = "fill", s = bn) {
	let c = e.textAlign, l = e.textBaseline, u = o === "stroke" ? e.strokeText.bind(e) : e.fillText.bind(e), d = r - xn(e, t, i), f = 0;
	for (let o of t) {
		let t = o.codePointAt(0) ?? 0, l = F(t), p = e.measureText(o).width + a, m = l === "Tr" ? se(t) : null, h = l === "Tr" && m === null && W(t), g = l === "U" || l === "Tu" || m !== null || h;
		if (ee(t) && s(t)) {
			let t = n + f + p / 2;
			e.save(), e.translate(t, d), e.rotate(-Math.PI / 2), e.textAlign = "center", e.textBaseline = "middle", j(e, () => u(o, 0, 0)), e.restore();
		} else if (g) {
			let r = m === null && l === "Tu" ? N(t) : null, a = m === null ? r : m, s = a === null ? o : String.fromCodePoint(a), c = n + f + p / 2, h = r === null ? Sn(e, s) / i : 0;
			e.save(), e.translate(c, d), e.rotate(-Math.PI / 2), e.textAlign = "center", e.textBaseline = "middle", u(s, 0, h * i), e.restore();
		} else if (l === "Tr") {
			let t = n + f + p / 2;
			e.textAlign = "center", e.textBaseline = "middle", u(o, t, d);
		} else e.textAlign = c, e.textBaseline = "alphabetic", u(o, n + f, r);
		f += p;
	}
	e.textAlign = c, e.textBaseline = l;
}
function wn(e, t, n, r, i, a, o = "fill") {
	Cn(e, t, n, r, i, a, o, (t) => ie(e, t));
}
//#endregion
//#region packages/pptx/src/renderer.ts
function X(e, t) {
	return e * t;
}
var Z = E;
function Tn(e, t, n, r, i, a, o) {
	let { top: s, height: c } = Zt(n, i);
	e.fillStyle = a, e.fillRect(t, s, r, c), e.fillStyle = o;
}
function En(e, t, n, r, i, a, o = 0) {
	return b(e, t, n, r, i, a, o);
}
var Dn = /* @__PURE__ */ new WeakMap();
function On(e, t) {
	let n = e.tinted.get(t);
	if (n) return n;
	let r = O(e.raster, t);
	return e.tinted.set(t, r), r;
}
function kn(e) {
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
async function An(e, t) {
	let n = kn(e);
	if (n.length !== 0) {
		await t.loadMathJax();
		for (let e of n) if (!Dn.has(e.nodes)) try {
			let n = await t.mathMLToSvg(fe(e.nodes, e.display)), r = await L(n, "#000000");
			Dn.set(e.nodes, {
				raster: r,
				widthEm: n.widthEm,
				ascentEm: n.ascentEm,
				descentEm: n.descentEm,
				tinted: /* @__PURE__ */ new Map()
			});
		} catch {}
	}
}
function jn(e, t) {
	return e ? e.startsWith("+") ? e === "+mj-lt" || e === "+mj-ea" || e === "+mj-cs" ? t.themeMajorFont ?? "sans-serif" : t.themeMinorFont ?? "sans-serif" : e.split(",")[0].trim() || (t.themeMinorFont ?? "sans-serif") : t.themeMinorFont ?? "sans-serif";
}
var Mn = new Set([
	"serif",
	"sans-serif",
	"monospace",
	"cursive",
	"fantasy",
	"system-ui"
]);
function Nn(e) {
	let t = k(e);
	return t === "mono" ? "monospace" : t === "serif" ? "serif" : "sans-serif";
}
var Pn = {
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
}, Fn = "\"Noto Naskh Arabic\", \"Noto Sans Arabic\"";
function In(e) {
	if (Pn[e.toLowerCase()]?.includes("Arabic")) return !0;
	let t = e.toLowerCase();
	return /arabic|naskh|kufi|nastaliq|amiri|scheherazade|lateef|aldhabi|urdu|farsi|العرب|[؀-ۿ]/.test(t);
}
function Ln(e) {
	return e.map((e) => `"${e}"`).join(", ");
}
function Rn(e) {
	let t = Nn(e), n = Pn[e.toLowerCase()], r = n ? `"${n}", ` : "";
	if (In(e)) return `"${e}", ${r}${Fn}, ${t}`;
	let i = t === "serif" ? "serif" : "sans", a = V(e);
	return `"${e}", ${r}${a ? `${Ln(re(a, i))}, ` : ""}${`${Ln(i === "serif" ? oe : P)}, `}${t}`;
}
function zn(e) {
	return e ? e.kind === "external" ? `e:${e.url}` : `i:${e.ref}` : "";
}
function Bn(e) {
	let t = e.toLowerCase();
	return /\b(thin|hairline)\b/.test(t) ? 100 : /\b(extra[- ]?light|ultra[- ]?light)\b/.test(t) ? 200 : /\blight\b/.test(t) ? 300 : /\b(black|heavy)\b/.test(t) ? 900 : /\b(extra[- ]?bold|ultra[- ]?bold)\b/.test(t) ? 800 : /\b(semi[- ]?bold|demi[- ]?bold)\b/.test(t) ? 600 : /\bbold\b/.test(t) ? 700 : /\bmedium\b/.test(t) ? 600 : null;
}
function Vn(t, n, r, i, a, o, s, c) {
	let l = Math.max(0, i.blur * a), u = Math.ceil(l * 3) + 2, d = Math.max(0, Math.floor(r.x - u)), f = Math.max(0, Math.floor(r.y - u)), p = Math.min(s, Math.ceil(r.x + r.w + u)), m = Math.min(c, Math.ceil(r.y + r.h + u)), h = Math.max(1, p - d), g = Math.max(1, m - f), _ = e(h, g), v = _?.getContext("2d");
	if (!_ || !v) return;
	v.save(), v.setTransform(o.a, o.b, o.c, o.d, o.e - d, o.f - f), n(v), v.restore();
	let y = r.y - f, b = y + r.h, x = _, S = v;
	if (l > 0) {
		let t = e(h, g), n = t?.getContext("2d");
		t && n && (x = t, S = n);
	}
	x !== _ && tn(S, _, {
		x: r.x - d,
		y,
		w: r.w,
		h: r.h
	}, l, h);
	let C = Math.max(0, Math.min(1, i.stPos)), w = Math.max(0, Math.min(1, i.endPos)), T = Math.max(1, b - y);
	try {
		let e = S.getImageData(0, 0, h, g);
		for (let t = 0; t < g; t++) {
			let n = Math.max(0, Math.min(1, (b - (t + .5)) / T)), r;
			if (n <= C) r = i.stA;
			else if (n >= w || w <= C) r = i.endA;
			else {
				let e = (n - C) / (w - C);
				r = i.stA + (i.endA - i.stA) * e;
			}
			let a = Math.max(0, Math.min(1, r));
			for (let n = t * h * 4 + 3; n < (t + 1) * h * 4; n += 4) e.data[n] = Math.round(e.data[n] * a);
		}
		S.putImageData(e, 0, 0);
	} catch {
		S.save(), S.globalCompositeOperation = "destination-in", S.fillStyle = `rgba(0,0,0,${Math.max(0, Math.min(1, i.stA))})`, S.fillRect(0, 0, h, g), S.restore();
	}
	let E = i.dist * a, D = i.dir * Math.PI / 180, O = r.y + r.h;
	t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.translate(r.x + Math.cos(D) * E, O + Math.sin(D) * E), t.scale(i.sx, i.sy), t.translate(-r.x, -O), t.drawImage(x, d, f), t.restore();
}
function Hn(e, t, n, r, i) {
	let a = t ? "italic " : "", o = jn(r, i), s = Bn(o), c = e ? "bold " : s ? `${s} ` : "";
	return Mn.has(o) ? `${a}${c}${n}px ${o}` : `${a}${c}${n}px ${Rn(o)}`;
}
function Un(e) {
	return e.bullet.type === "char" || e.bullet.type === "autoNum" || De(e.bullet).type === "blip";
}
function Wn(e, t) {
	return e ? 0 : Math.max(0, t);
}
function Gn(e, t, n, r, i, a, o) {
	let s = (t.defaultFontSize ?? 18) * Y * a;
	for (let c of t.paragraphs) {
		let l = X(c.marL, a), u = X(c.marR, a), d = X(c.indent, a), f = Wn(Un(c), d), p = n - r - i - l - u - f, m = 0;
		for (let n of c.runs) {
			if (n.type !== "text") continue;
			let r = n.fontSize == null ? c.defFontSize == null ? s : c.defFontSize * Y * a : n.fontSize * Y * a, i = jn(n.fontFamily ?? c.defFontFamily ?? null, o);
			e.font = Hn(n.bold ?? c.defBold ?? t.defaultBold ?? !1, n.italic ?? c.defItalic ?? t.defaultItalic ?? !1, r, i, o);
			let l = (n.letterSpacing ?? 0) * Y * a;
			if (m += Q(e, n.text, l), m > p) return !0;
		}
	}
	return !1;
}
function Kn(e) {
	for (let t of e) if (le(t.codePointAt(0) ?? 0)) return !0;
	return !1;
}
function qn(e) {
	let t = 0;
	for (let n of e) t++;
	return t;
}
var Jn = /* @__PURE__ */ new WeakMap();
function Yn(e) {
	let t = Jn.get(e);
	if (t != null) return t;
	let n = e, r = n.letterSpacing;
	if (typeof r != "string") return Jn.set(e, !1), !1;
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
	return Jn.set(e, i), i;
}
function Q(e, t, n) {
	let r = e, i = r.letterSpacing;
	if (n !== 0 && Yn(e)) try {
		r.letterSpacing = `${n}px`;
		let i = e.measureText(t).width;
		if (Number.isFinite(i)) return t.length > 0 ? i - n : i;
	} finally {
		try {
			r.letterSpacing = i;
		} catch {}
	}
	let a = Math.max(0, qn(t) - 1);
	return e.measureText(t).width + n * a;
}
function Xn(e, t, n, r, a, o, s, c = !1, l = !1, u = 1, d, f = {
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
	let _ = () => n - (m.length === 0 ? p : 0), v = { segments: [] }, b = 0, S = !1, C = t.rtl === !0, w = X(t.marR, o), T = (t.tabStops ?? []).map((e) => ({
		pos: X(e.pos, o),
		algn: e.algn
	})), E = X(t.defTabSz ?? 914400, o), O = !1, k = [], A = 0, j = () => C ? w : s + (m.length === 0 ? p : 0), M = (e = 0) => {
		let t = yn(e > 0 ? [...k, {
			isTab: !1,
			width: e
		}] : k, T, j(), Infinity, A, E), n = 0;
		for (let e of t) n += e;
		return n;
	}, N = (e) => {
		let t = _();
		return Number.isFinite(t) ? O ? M(e) <= t : b + e <= t : !0;
	}, P = () => {
		let e = _();
		if (!O) return e - b;
		if (!Number.isFinite(e)) return Infinity;
		if (M(0) >= e) return 0;
		let t = 0, n = e;
		for (let r = 0; r < 40; r++) {
			let r = (t + n) / 2;
			M(r) <= e ? t = r : n = r;
		}
		return t;
	}, F = (e = !1) => {
		e && (v.endsWithBreak = !0), m.push(v), v = { segments: [] }, b = 0, O = !1, k = [], S = !1;
	}, L = (t, n, r, i) => {
		e.font = n;
		let a = Q(e, t, r), o = v.segments.at(-1);
		return !o || o.isTab || o.math || o.sourceRunId !== i ? a : o.font === n && (o.letterSpacingPx ?? 0) === r ? Q(e, o.text + t, r) - Q(e, o.text, r) : a + r;
	}, z = (t, n, r, i, a, o, s, c) => {
		if (!t) return;
		e.font = n;
		let l = c?.letterSpacingPx ?? 0, u = c?.sourceRunId, d = c?.strikeDouble, f = c?.underlineStyle, p = c?.underlineColor, m = c?.shadow, h = c?.reflection, g = c?.outline, _ = c?.highlight, y = c?.fontFamily, x = c?.hyperlink, S = (e) => !e.math && !e.isTab && e.font === n && e.color === i && e.underline === a && (e.underlineStyle ?? "") === (f ?? "") && (e.underlineColor ?? "") === (p ?? "") && e.strikethrough === o && (e.strikeDouble ?? !1) === (d ?? !1) && (e.letterSpacingPx ?? 0) === l && e.baseline === s && e.shadow === m && e.reflection === h && e.outline === g && (e.highlight ?? "") === (_ ?? "") && (e.fontFamily ?? "") === (y ?? "") && zn(e.hyperlink) === zn(x) && (l === 0 || e.sourceRunId === u), C = v.segments.at(-1), w = Q(e, t, l);
		if (C && S(C) ? w = Q(e, C.text + t, l) - Q(e, C.text, l) : C && !C.isTab && !C.math && u != null && C.sourceRunId === u && (w += l), b += w, k.push({
			isTab: !1,
			width: w
		}), C && S(C)) C.text += t;
		else {
			let e = C && !C.isTab && !C.math && u != null && C.sourceRunId === u ? l : 0;
			v.segments.push({
				text: t,
				font: n,
				fontFamily: y,
				sizePx: r,
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
				hyperlink: x
			});
		}
	}, B = () => {
		let e = v.segments.at(-1);
		if (!e || e.math) return !1;
		let t = /^(.*\s)(\S+)$/s.exec(e.text), n;
		if (t) e.text = t[1], n = t[2];
		else if (v.segments.length > 1) v.segments.pop(), n = e.text;
		else return !1;
		return F(), z(n, e.font, e.sizePx, e.color, e.underline, e.strikethrough, e.baseline, {
			strikeDouble: e.strikeDouble,
			letterSpacingPx: e.letterSpacingPx,
			underlineStyle: e.underlineStyle,
			underlineColor: e.underlineColor,
			shadow: e.shadow,
			reflection: e.reflection,
			outline: e.outline,
			highlight: e.highlight,
			fontFamily: e.fontFamily,
			sourceRunId: e.sourceRunId
		}), !0;
	};
	for (let [n, s] of t.runs.entries()) {
		if (s.type === "break") {
			F(!0);
			continue;
		}
		if (s.type === "math") {
			let e = Dn.get(s.nodes), t = s.fontSize == null ? r : s.fontSize * Y * o * u, n = e ? e.widthEm * t : 0, i = e ? e.ascentEm * t : 0, c = e ? e.descentEm * t : 0;
			(s.display && b > 0 || !N(n) && b > 0) && F(), k.push({
				isTab: !1,
				width: n
			}), v.segments.push({
				text: "",
				font: `${t}px sans-serif`,
				sizePx: t,
				color: s.color ? Z(s.color) : a,
				underline: !1,
				strikethrough: !1,
				math: {
					nodes: s.nodes,
					display: s.display,
					width: n,
					ascent: i,
					descent: c
				}
			}), b += n, s.display && F();
			continue;
		}
		let p = s.fontSize == null ? r : s.fontSize * Y * o * u, m = jn(s.fontFamily ?? t.defFontFamily ?? null, f), g = s.fontFamilyEa ? jn(s.fontFamilyEa, f) : null, C = s.fontFamilySym ? jn(s.fontFamilySym, f) : null, w;
		w = s.color ? Z(s.color) : s.hyperlink && f.themeHlinkColor ? Z(f.themeHlinkColor) : a;
		let T = s.bold ?? t.defBold ?? c, E = s.italic ?? t.defItalic ?? l, j = Hn(T, E, p, m, f), M = g ? Hn(T, E, p, g, f) : j;
		e.font = j;
		let V = s.caps, H = h.get(s) ?? s.text;
		(V === "all" || V === "small") && (H = H.toUpperCase());
		let U = s.fieldType === "slidenum" && d !== void 0 ? String(d) : H, W = s.underline || s.hyperlink !== void 0, G = s.strikeDouble === !0, K = s.letterSpacing == null ? 0 : s.letterSpacing * Y * o, q = {
			strikeDouble: G,
			letterSpacingPx: K,
			underlineStyle: s.underlineStyle,
			underlineColor: s.underlineColor ? Z(s.underlineColor) : void 0,
			shadow: s.shadow,
			reflection: s.reflection,
			outline: s.outline,
			fontFamily: m,
			highlight: s.highlight ? Z(s.highlight) : void 0,
			hyperlink: nn(s.hyperlink),
			sourceRunId: n
		}, ee = U.split(/(\s+)/);
		for (let r of ee) {
			if (!r) continue;
			if (/^\t+$/.test(r)) {
				O || (e.font = j, A = e.measureText(" ").width);
				for (let e of r) v.segments.push({
					text: "",
					isTab: !0,
					font: j,
					fontFamily: m,
					sizePx: p,
					color: w,
					underline: !1,
					strikethrough: !1
				}), k.push({
					isTab: !0,
					width: 0
				});
				O = !0;
				continue;
			}
			e.font = j;
			let a = L(r, j, K, n), o = /^\s+$/.test(r), c = /[-]/;
			if (c.test(r) && (C != null || we(m))) {
				let t = C ?? m;
				for (let i of r) {
					let r = i, a = j;
					if (c.test(i)) {
						let e = ge(i, t);
						e === i ? a = Hn(T, E, p, t, f) : (r = e, a = Hn(T, E, p, "sans-serif", f));
					}
					e.font = a, !N(L(r, a, K, n)) && b > 0 && F(), z(r, a, p, w, W, s.strikethrough, s.baseline ?? void 0, q);
				}
				continue;
			}
			if (Kn(r) && (!R(r) || t.eaLnBrk === !1)) {
				let i = [];
				for (let t of r) {
					let n = le(t.codePointAt(0) ?? 0) && g != null, r = n ? M : j, a = n ? g : m;
					e.font = r, i.push({
						ch: t,
						w: Q(e, t, 0),
						font: r,
						family: a
					});
				}
				if (t.eaLnBrk === !1) {
					let e = v.segments.at(-1), t = !!e && !e.isTab && !e.math && e.sourceRunId === n, r = i.reduce((e, t) => e + t.w, 0) + Math.max(0, i.length - 1) * K + (t && i.length > 0 ? K : 0);
					b > 0 && !N(r) && F();
					for (let e of i) z(e.ch, e.font, p, w, W, s.strikethrough, s.baseline ?? void 0, {
						...q,
						fontFamily: e.family
					});
					continue;
				}
				let a = i;
				for (; a.length > 0;) {
					let e = Number.isFinite(_()) ? _() - P() : b, t = v.segments.at(-1), r = !!t && !t.isTab && !t.math && t.sourceRunId === n, i = ln(a, e, _(), y, K, r);
					if (i === 0) {
						if (b > 0) {
							F();
							continue;
						}
						i = 1;
					}
					for (let e = 0; e < i; e++) {
						let t = a[e];
						z(t.ch, t.font, p, w, W, s.strikethrough, s.baseline ?? void 0, {
							...q,
							fontFamily: t.family
						});
					}
					a = a.slice(i), a.length > 0 && F();
				}
				continue;
			}
			if (R(r)) {
				let t = x(r, {
					cjk: !0,
					kinsoku: y
				}), i = g != null && M !== j, a = (e) => i && le(e.codePointAt(0) ?? 0), o = (t) => {
					let r = 0, i = v.segments.at(-1), o = !!i && !i.isTab && !i.math && i.sourceRunId === n, s = "", c = null, l = () => {
						s !== "" && (e.font = c ? M : j, r += Q(e, s, K), o && (r += K), o = !0, s = "");
					};
					for (let e of t) {
						let t = a(e);
						c === null || t === c ? (s += e, c = t) : (l(), s = e, c = t);
					}
					return l(), r;
				}, c = (e) => {
					let t = "", n = null, r = () => {
						if (t === "") return;
						let e = n ? M : j, r = n ? g : m;
						z(t, e, p, w, W, s.strikethrough, s.baseline ?? void 0, {
							...q,
							fontFamily: r
						}), t = "";
					};
					for (let i of e) {
						let e = a(i);
						n === null || e === n ? (t += i, n = e) : (r(), t = i, n = e);
					}
					r();
				}, l = de(r), u = r.length, d = 0;
				for (; d < u;) {
					let e = P(), n = I(r, t, d, e, o, l);
					if (n <= d) {
						if (b > 0) {
							F();
							continue;
						}
						let i = t.find((e) => e > d) ?? u, a = r.slice(d, i), s = D(a), c = I(a, s, 0, e, o, l);
						c <= 0 && (c = s.length > 0 ? s[0] : a.length), n = d + c;
					}
					c(r.slice(d, n)), d = n, d < u && F();
				}
				continue;
			}
			if (N(a)) z(r, j, p, w, W, s.strikethrough, s.baseline ?? void 0, q), o && (S = !0);
			else if (o) b > 0 && F();
			else if (a > _()) {
				b > 0 && F();
				for (let t of r) e.font = j, !N(L(t, j, K, n)) && b > 0 && F(), z(t, j, p, w, W, s.strikethrough, s.baseline ?? void 0, q);
			} else if (!S) z(r, j, p, w, W, s.strikethrough, s.baseline ?? void 0, q);
			else {
				let e = v.segments.at(-1)?.text ?? "", t = r.codePointAt(0), n = [...e].at(-1)?.codePointAt(0), a = /\S$/u.test(e) && /^\S/u.test(r) && n !== 8203 && t !== 8203, o = t !== void 0 && y.lineStartForbidden.has(t) && a, c = n !== void 0 && t !== void 0 && a && !R(e) && !R(r) && i(n, t);
				(o || c) && B() || F(), z(r, j, p, w, W, s.strikethrough, s.baseline ?? void 0, q);
			}
		}
	}
	return m.push(v), m;
}
async function Zn(e, t, n, r, i, a, o) {
	if (t && t.fillType === "image") {
		if (e.fillStyle = "#FFFFFF", e.fillRect(0, 0, n, r), !t.imagePath || !t.mimeType || !o) return;
		try {
			let s = await Ee(t.imagePath, t.mimeType, t.duotone, o, {
				widthPt: n / i / Y,
				heightPt: r / i / Y
			});
			if (a() || !s) return;
			if (e.save(), e.beginPath(), e.rect(0, 0, n, r), e.clip(), t.alpha != null && (e.globalAlpha = t.alpha), t.tile) er(e, s, t.tile, n, r, i);
			else {
				let i = t.fillRect ?? {}, a = i.l ?? 0, o = i.t ?? 0, c = i.r ?? 0, l = i.b ?? 0, u = a * n, d = o * r, f = n * (1 - a - c), p = r * (1 - o - l);
				e.drawImage(s, u, d, f, p);
			}
			e.restore();
		} catch (e) {
			if (pe(e)) throw e;
		}
		return;
	}
	e.fillStyle = En(t, e, 0, 0, n, r) ?? "#FFFFFF", e.fillRect(0, 0, n, r);
}
var Qn = 9525;
function $n(e, t, n, r, i) {
	let a;
	a = e === "t" || e === "ctr" || e === "b" ? (t - r) / 2 : e === "tr" || e === "r" || e === "br" ? t - r : 0;
	let o;
	return o = e === "l" || e === "ctr" || e === "r" ? (n - i) / 2 : e === "bl" || e === "b" || e === "br" ? n - i : 0, {
		ax: a,
		ay: o
	};
}
function er(t, n, r, i, a, o) {
	let s = n.width * Qn * r.sx * o, c = n.height * Qn * r.sy * o;
	if (!(s > 0) || !(c > 0)) return;
	let l = r.flip === "x" || r.flip === "xy", u = r.flip === "y" || r.flip === "xy", d = e(s * (l ? 2 : 1), c * (u ? 2 : 1));
	if (!d) return;
	let f = d.getContext("2d");
	if (!f) return;
	let p = (e, t, r, i) => {
		f.save(), f.translate(e + (r ? s : 0), t + (i ? c : 0)), f.scale(r ? -1 : 1, i ? -1 : 1), f.drawImage(n, 0, 0, s, c), f.restore();
	};
	p(0, 0, !1, !1), l && p(s, 0, !0, !1), u && p(0, c, !1, !0), l && u && p(s, c, !0, !0);
	let m = t.createPattern(d, "repeat");
	if (!m) return;
	let { ax: h, ay: g } = $n(r.algn ?? "tl", i, a, s, c), _ = h + X(r.tx, o), v = g + X(r.ty, o);
	typeof m.setTransform == "function" && typeof DOMMatrix < "u" ? (m.setTransform(new DOMMatrix().translateSelf(_, v)), t.fillStyle = m, t.fillRect(0, 0, i, a)) : (t.save(), t.translate(_, v), t.fillStyle = m, t.fillRect(-_, -v, i, a), t.restore());
}
function tr(e, t, n) {
	if (!t) return;
	let r = t.dir * Math.PI / 180, i = X(t.dist, n);
	e.shadowColor = Z(t.color, t.alpha), e.shadowBlur = 0, e.shadowOffsetX = Math.cos(r) * i, e.shadowOffsetY = Math.sin(r) * i;
}
function nr(e, t, n) {
	t && (e.shadowColor = Z(t.color, t.alpha), e.shadowBlur = X(t.radius, n), e.shadowOffsetX = 0, e.shadowOffsetY = 0);
}
function rr(e) {
	e.shadowColor = "transparent", e.shadowBlur = 0, e.shadowOffsetX = 0, e.shadowOffsetY = 0;
}
var ir = 8, ar = 1, or = 1, sr = 256;
function cr(t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
	if (i <= 0) return;
	let g = t.measureText(n), _ = g.actualBoundingBoxAscent > 0 ? g.actualBoundingBoxAscent : i, v = g.actualBoundingBoxDescent > 0 ? g.actualBoundingBoxDescent : i * .25, y = g.actualBoundingBoxLeft > 0 ? g.actualBoundingBoxLeft : 0, b = g.actualBoundingBoxRight > 0 ? g.actualBoundingBoxRight : i, x = i * u * a, S = Math.min(sr, Math.max(1, Math.round(x / ir))), C = (e) => dr(e, o, i, s, c, l, d, f), w = C(S), T = pr(w, o, s, c, l, d, f, u, a, -_, v);
	for (; T > or && S < sr;) {
		let e = Math.min(sr, S * 2), t = C(e), n = pr(t, o, s, c, l, d, f, u, a, -_, v);
		if (n >= T * .75) {
			w = t;
			break;
		}
		S = e, w = t, T = n;
	}
	let E = 1e4, D = ar / (u * a), O = w.length - 1, k = (e, t, n) => e === 0 ? -E : t - n - D, A = (e, t, n) => e === O ? E : t - n + D, j = (e, t) => {
		e.fillStyle = t;
		for (let t = 0; t <= O; t++) {
			let { s0: i, s1: a, g: o } = w[t], s = (i + a) / 2;
			e.save(), e.translate(p + o.x, m + o.y), e.rotate(o.angle), o.shear !== 0 && e.transform(1, 0, o.shear, 1, 0, 0), (u !== 1 || o.vScale !== 1) && e.scale(u, o.vScale), e.beginPath();
			let c = k(t, i, s), l = A(t, a, s);
			e.rect(c, -E, l - c, 2 * E), e.clip(), e.fillText(n, -s + r / 2, 0), e.restore();
		}
	}, M = lr(h), N = typeof t.globalAlpha == "number" ? t.globalAlpha : 1;
	if (M >= 1 && N >= 1) {
		j(t, h);
		return;
	}
	if (M <= 0 || N <= 0) return;
	let P = typeof t.getTransform == "function" ? t.getTransform() : null;
	if (!P) {
		j(t, h);
		return;
	}
	let F = Infinity, I = Infinity, L = -Infinity, R = -Infinity;
	for (let e = 0; e <= O; e++) {
		let { s0: t, s1: n, g: i } = w[e], a = (t + n) / 2, o = -a + r / 2, s = Math.max(k(e, t, a), o - y), c = Math.min(A(e, n, a), o + b);
		if (!(c <= s)) for (let [e, t] of [
			[s, -_],
			[c, -_],
			[s, v],
			[c, v]
		]) {
			let n = fr(i, u, e, t), r = p + n.x, a = m + n.y, o = P.a * r + P.c * a + P.e, s = P.b * r + P.d * a + P.f;
			o < F && (F = o), o > L && (L = o), s < I && (I = s), s > R && (R = s);
		}
	}
	if (!(L > F && R > I)) return;
	let z = Math.floor(F - 2), B = Math.floor(I - 2), V = e(Math.ceil(L + 2) - z, Math.ceil(R + 2) - B), H = V ? V.getContext("2d") : null;
	if (!V || !H) {
		j(t, h);
		return;
	}
	H.font = t.font, H.textAlign = "left", H.textBaseline = "alphabetic", H.setTransform(P.a, P.b, P.c, P.d, P.e - z, P.f - B), j(H, ur(h)), t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.globalAlpha = N * M, t.drawImage(V, z, B), t.restore();
}
function lr(e) {
	let t = /^rgba?\(\s*[\d.]+\s*,\s*[\d.]+\s*,\s*[\d.]+\s*,\s*([\d.]+)\s*\)$/i.exec(e);
	if (!t) return 1;
	let n = parseFloat(t[1]);
	return Number.isFinite(n) ? Math.min(1, Math.max(0, n)) : 1;
}
function ur(e) {
	let t = /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i.exec(e);
	return t ? `rgb(${t[1]}, ${t[2]}, ${t[3]})` : e;
}
function dr(e, t, n, r, i, a, o, s) {
	let c = Array(e);
	for (let l = 0; l < e; l++) {
		let u = l / e * n, d = (l + 1) / e * n;
		c[l] = {
			s0: u,
			s1: d,
			g: Ve(t, (r + (u + d) / 2) / i * a, o, s)
		};
	}
	return c;
}
function fr(e, t, n, r) {
	let i = n * t, a = r * e.vScale, o = i + e.shear * a, s = Math.cos(e.angle), c = Math.sin(e.angle);
	return {
		x: e.x + s * o - c * a,
		y: e.y + c * o + s * a
	};
}
function pr(e, t, n, r, i, a, o, s, c, l, u) {
	let d = 0;
	for (let f of e) {
		let e = (f.s0 + f.s1) / 2;
		for (let p of [f.s0, f.s1]) {
			let m = Ve(t, (n + p) / r * i, a, o);
			for (let t of [l, u]) {
				let n = fr(m, s, 0, t), r = fr(f.g, s, p - e, t), i = Math.hypot(r.x - n.x, r.y - n.y) * c;
				i > d && (d = i);
			}
		}
	}
	return d;
}
function mr(e, t, n, r, i, a, o, s, c, l, u) {
	let d = i, f = a, p = Math.max(1, o), m = Math.max(1, s), h = Le(n, r, p, m);
	if (!h) return;
	let g = t.defaultBold ?? !1, _ = t.defaultItalic ?? !1, v = (t.defaultFontSize ?? 18) * Y * c, y = [];
	for (let n of t.paragraphs) {
		let t = Xn(e, n, Infinity, n.defFontSize == null ? v : n.defFontSize * Y * c, n.defColor ? Z(n.defColor) : l, c, 0, g, _, 1, void 0, u, 0);
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
			a += r.width + n * qn(t.text), o = Math.max(o, t.sizePx), r.actualBoundingBoxAscent > 0 && (s = Math.max(s, r.actualBoundingBoxAscent)), r.actualBoundingBoxDescent > 0 && (c = Math.max(c, r.actualBoundingBoxDescent));
		}
		if (a <= 0) continue;
		let l = s + c > 0 ? s + c : o, u = h.singleEdge ? .8 : l > 0 ? s / l : .8, g = h.singleEdge ? 1 : p / a, _ = h.singleEdge ? m : l / (i - r), v = Be(h, a), b = 0;
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
					cr(e, s, n, o, x(), h, b, a, v, g, _, c, d, f, t.color), b += o;
					continue;
				}
				let l = Ve(h, (b + o / 2) / a * v, _, c);
				e.save(), e.translate(d + l.x, f + l.y), e.rotate(l.angle), l.shear !== 0 && e.transform(1, 0, l.shear, 1, 0, 0), (g !== 1 || l.vScale !== 1) && e.scale(g, l.vScale), e.fillText(s, -o / 2 + n / 2, 0), e.restore(), b += o;
			}
		}
	}
	e.restore();
}
function hr(e, t, n, r, i, a, o) {
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
function gr(e, t) {
	return e.defaultTextColor ? Z(e.defaultTextColor) : t.smartArtFallbackTextColor != null && _n(e) ? t.smartArtFallbackTextColor : null;
}
function _r(e, t, n) {
	return {
		outerRotation: e,
		localFlipH: t,
		localFlipV: n
	};
}
function vr(e, t, n, r, i) {
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
var yr = {
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
function br(e, t, n) {
	return [e.a * t + e.c * n + e.e, e.b * t + e.d * n + e.f];
}
function xr(e, t, n, r, i, a) {
	let [o, s] = yr[a ?? "b"];
	return br(e, t + o * r, n + s * i);
}
function Sr(e, t, n, r, i, a, o, s) {
	let c = st(e, i, a).corners, l = (o > 0 ? vt(c, o / i, o / a) ?? c : c).map((e) => br(t, n + e.x, r + e.y)), u = l.map(([e]) => e), d = l.map(([, e]) => e), f = Math.min(...u), p = Math.min(...d), m = Math.max(...u), h = Math.max(...d), [g, _] = yr[s ?? "b"], v = yt(c, g, _);
	return {
		bbox: {
			x: f,
			y: p,
			w: m - f,
			h: h - p
		},
		anchor: v ? br(t, n + v.x, r + v.y) : xr(t, n, r, i, a, s)
	};
}
function Cr(t, n, r, i) {
	let a = Math.floor(r.x) - 1, o = Math.floor(r.y) - 1, s = Math.max(1, Math.ceil(r.x + r.w) - a + 1), c = Math.max(1, Math.ceil(r.y + r.h) - o + 1);
	if (i && (a + s <= 0 || o + c <= 0 || a >= i.w || o >= i.h) || ce(s, c).clamped) return t;
	let l = null;
	try {
		l = e(s, c);
	} catch {
		return t;
	}
	let u = l?.getContext("2d");
	if (!l || !u) return t;
	u.setTransform(n.a, n.b, n.c, n.d, n.e - a, n.f - o), t(u);
	let d = {
		a: 1,
		b: 0,
		c: 0,
		d: 1,
		e: 0,
		f: 0
	};
	return (e) => {
		e.save(), e.setTransform(d), e.drawImage(l, a, o), e.restore();
	};
}
function wr(e, t, n, r, i, a, o, s, c, l = !0, u = r) {
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
	t.shadow && p ? (e.save(), e.setTransform(m), y = !qe(e, g, i, t.shadow, s, d, f, Math.atan2(c.b, c.a) * 180 / Math.PI, a), e.restore()) : t.shadow && (y = !0), t.reflection && p && (e.save(), e.setTransform(m), Xe(e, g, i, t.reflection, s, d, f), e.restore()), y ? tr(e, t.shadow ?? null, o) : t.glow && nr(e, t.glow, o), t.softEdge && p ? (e.save(), e.setTransform(m), Ye(e, g, i, t.softEdge, s, d, f, _), e.restore()) : n(e), (y || t.glow) && rr(e), t.innerShadow && l && p && (e.save(), e.setTransform(m), Je(e, v, i, t.innerShadow, s, d, f), e.restore());
}
function Tr(e, t, n, r = "#000000", i, a = {
	themeMajorFont: null,
	themeMinorFont: null,
	dpr: 1
}, o, s) {
	let c = X(t.x, n), d = X(t.y, n), f = X(t.width, n), p = X(t.height, n), m = o && t.id !== void 0 ? (e) => o({
		...e,
		shapeId: t.id
	}) : o;
	if (p === 0 && t.textBody?.verticalAnchor === "b") {
		if (t.stroke && (e.save(), Hr(e, t.stroke, n, {
			x: c,
			y: d,
			w: f,
			h: 1
		}, t.rotation), e.beginPath(), e.moveTo(c, d), e.lineTo(c + f, d), e.stroke(), e.restore()), t.textBody) {
			let o = gr(t, a);
			jr(e, t.textBody, c, d, f, p, n, o, t.rotation, t.flipH, t.flipV, r, i, a, m, !1, s);
		}
		return;
	}
	let h = t.scene3d && ct(t.scene3d.camera) ? t.scene3d : null;
	if (h && f > 0 && p > 0) {
		let o = e.getTransform(), s = Math.abs(o.a * o.d - o.b * o.c), l = s > 0 ? Math.sqrt(s) : 1, u = Mr(t.sp3d, t.scene3d?.lightRig, t.sp3d?.prstMaterial, n, l), m = Nr(t.sp3d, h.camera, f, p, n, l), g = _r(t.rotation, t.flipH, t.flipV);
		e.save(), g.outerRotation !== 0 && (e.translate(c + f / 2, d + p / 2), e.rotate(g.outerRotation * Math.PI / 180), e.translate(-(c + f / 2), -(d + p / 2)));
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
		}, b = (t.stroke ? t.stroke.width * n / 2 : 0) + (t.sp3d?.contourW ? t.sp3d.contourW * n : 0) + (m ? Math.hypot(m.offsetX, m.offsetY) / l : 0) + 2, x = (e, t, o) => Pr(e, h.camera, c, d, f, p, (e) => {
			Tr(e, t, n, r, i, a, void 0);
		}, o ? {
			bevels: u,
			extrusion: m ?? void 0,
			edgePadCss: b
		} : {}), S = (e) => x(e, v, !0), C = (e) => !t.textBody || x(e, y, !1);
		if (t.shadow || t.innerShadow || t.glow || t.softEdge || t.reflection) {
			let r = e.getTransform(), i = Math.abs(r.a * r.d - r.b * r.c), a = i > 0 ? Math.sqrt(i) : 1, o = Sr(h.camera, r, c, d, f, p, b, t.shadow?.algn), s = !1, l = Cr((e) => {
				s = S(e) || s;
			}, r, o.bbox, {
				w: e.canvas.width || 0,
				h: e.canvas.height || 0
			});
			if (wr(e, t, l, l, o.bbox, o.anchor, n, n * a, r, !!t.fill), s) {
				C(e), e.restore();
				return;
			}
		} else if (x(e, _, !0)) {
			e.restore();
			return;
		}
		e.restore();
	}
	e.save(), (t.rotation !== 0 || t.flipH || t.flipV) && (e.translate(c + f / 2, d + p / 2), e.rotate(t.rotation * Math.PI / 180), t.flipH && e.scale(-1, 1), t.flipV && e.scale(1, -1), e.translate(-(c + f / 2), -(d + p / 2)));
	let g = t.geometry.toLowerCase(), _ = En(t.fill, e, c, d, f, p, t.rotation);
	t.shadow || nr(e, t.glow ?? null, n);
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
	]), b = (e) => y.has(e) || e === "line" || e === "straightconnector1" || e.startsWith("bentconnector"), x = !t.custGeom && w(g), S = (r, i, a = {
		x: c,
		y: d,
		w: f,
		h: p
	}) => {
		let { x: o, y: s, w: u, h: m } = a, h = i ?? (r === e && o === c && s === d && u === f && m === p ? _ : En(t.fill, r, o, s, u, m, t.rotation)), v = i ? null : t.stroke ? () => {
			Hr(r, t.stroke, n, {
				x: o,
				y: s,
				w: u,
				h: m
			}, t.rotation), r.stroke();
		} : null, y = () => rr(r);
		if (x && !i) {
			l(r, g, o, s, u, m, [
				t.adj,
				t.adj2,
				t.adj3,
				t.adj4,
				t.adj5,
				t.adj6,
				t.adj7,
				t.adj8
			], h, v, y, b(g) ? { skipTrailingStroke: !0 } : void 0);
			return;
		}
		r.beginPath(), t.custGeom && t.custGeom.length > 0 ? Er(r, t.custGeom, o, s, u, m) : be(r, g, o, s, u, m, t.adj, t.adj2, t.adj3, t.adj4), h && g !== "arc" && (r.fillStyle = h, g === "donut" || g === "smileyface" || g === "frame" ? r.fill("evenodd") : r.fill(), i || y()), v && v();
	}, T = e.getTransform(), E = Math.abs(T.a * T.d - T.b * T.c), D = E > 0 ? Math.sqrt(E) : 1, O = (t.shadow || t.reflection || t.softEdge || t.innerShadow ? x ? C(g, c, d, f, p, [
		t.adj,
		t.adj2,
		t.adj3,
		t.adj4,
		t.adj5,
		t.adj6,
		t.adj7,
		t.adj8
	]) : t.custGeom && t.custGeom.length > 0 ? ve(t.custGeom, c, d, f, p) : null : null) ?? {
		x: c,
		y: d,
		w: f,
		h: p
	}, k = t.stroke ? t.stroke.width * n / 2 : 0, A = t.stroke ? Math.max(t.stroke.headEnd ? xe(t.stroke.headEnd, t.stroke, n) : 0, t.stroke.tailEnd ? xe(t.stroke.tailEnd, t.stroke, n) : 0) : 0, j = t.sp3d?.contourW ? t.sp3d.contourW * n : 0, M = Math.max(k, A, j), N = M > 0 ? {
		x: O.x - M,
		y: O.y - M,
		w: O.w + M * 2,
		h: O.h + M * 2
	} : O, P = vr(T, N.x, N.y, N.w, N.h), F = n * D, I = h ? [] : Mr(t.sp3d, t.scene3d?.lightRig, t.sp3d?.prstMaterial, n, D), L = (t.stroke ? t.stroke.width * n / 2 : 0) + 2, R = (e) => {
		let r = t.stroke?.fill ? En(t.stroke.fill, e, c, d, f, p, t.rotation) ?? void 0 : void 0;
		if (t.stroke && (v.has(g) || y.has(g))) {
			let i = u(g, c, d, f, p, [
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
				let r = i.vertices.map((e) => ({
					x: e.x,
					y: e.y
				}));
				if (t.stroke.tailEnd) {
					let e = _e(t.stroke.tailEnd, t.stroke, n);
					r[r.length - 1] = me(r[r.length - 1], r[r.length - 2], e);
				}
				if (t.stroke.headEnd) {
					let e = _e(t.stroke.headEnd, t.stroke, n);
					r[0] = me(r[0], r[1], e);
				}
				Hr(e, t.stroke, n, {
					x: c,
					y: d,
					w: f,
					h: p
				}, t.rotation), e.beginPath(), e.moveTo(r[0].x, r[0].y);
				for (let t = 1; t < r.length; t++) e.lineTo(r[t].x, r[t].y);
				e.stroke();
			}
			a && o && Vr(e, i.start, i.end, t.stroke, a, n, t.rotation), t.stroke.tailEnd && ye(e, i.end.x, i.end.y, i.end.angle, t.stroke.tailEnd, t.stroke, n, r), t.stroke.headEnd && ye(e, i.start.x, i.start.y, i.start.angle, t.stroke.headEnd, t.stroke, n, r);
			return;
		}
		if (!t.stroke || !t.custGeom || t.custGeom.length === 0 || (!t.stroke.headEnd || t.stroke.headEnd.type === "none") && (!t.stroke.tailEnd || t.stroke.tailEnd.type === "none")) return;
		let { start: i, end: a } = Se(t.custGeom);
		i && t.stroke.headEnd && t.stroke.headEnd.type !== "none" && ye(e, c + i.x * f, d + i.y * p, Math.atan2(i.dy * p, i.dx * f), t.stroke.headEnd, t.stroke, n, r), a && t.stroke.tailEnd && t.stroke.tailEnd.type !== "none" && ye(e, c + a.x * f, d + a.y * p, Math.atan2(a.dy * p, a.dx * f), t.stroke.tailEnd, t.stroke, n, r);
	}, z = (e) => {
		if (I.length > 0 && Fr(e, c, d, f, p, I, (e, t, n, r, i) => S(e, void 0, {
			x: t,
			y: n,
			w: r,
			h: i
		}), void 0, L)) {
			R(e), rr(e);
			return;
		}
		S(e), R(e);
	};
	if (wr(e, t, z, z, P, xr(T, c, d, f, p, t.shadow?.algn), n, F, T, !!_, (e) => S(e, "#000")), t.textBody) {
		let o = gr(t, a);
		if (e.save(), t.flipH || t.flipV) {
			let n = c + f / 2, r = d + p / 2;
			e.translate(n, r), t.flipH && e.scale(-1, 1), t.flipV && e.scale(1, -1), e.translate(-n, -r);
		}
		let l = c, u = d, h = f, _ = p;
		if (t.textRect) l = X(t.textRect.x, n), u = X(t.textRect.y, n), h = X(t.textRect.width, n), _ = X(t.textRect.height, n);
		else if (g === "ellipse") {
			let e = f * (1 - 1 / Math.SQRT2) / 2, t = p * (1 - 1 / Math.SQRT2) / 2;
			l = c + e, u = d + t, h = f / Math.SQRT2, _ = p / Math.SQRT2;
		} else {
			let e = hr(g, c, d, f, p, t.adj, t.adj2);
			e && (l = e.tx, u = e.ty, h = e.tw, _ = e.th);
		}
		jr(e, t.textBody, l, u, h, _, n, o, t.rotation, !1, !1, r, i, a, m, !1, s), e.restore();
	}
	e.restore();
}
var Er = he;
function Dr(e, t) {
	let n = `${e}`, r = e >= 1 && e <= 26 ? String.fromCharCode(96 + e) : n, i = e >= 1 && e <= 26 ? String.fromCharCode(64 + e) : n, a = Or(e).toLowerCase(), o = Or(e), s = n.replace(/[0-9]/g, (e) => String.fromCharCode(65296 + (e.charCodeAt(0) - 48)));
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
function Or(e) {
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
function kr(e) {
	for (let t of e.runs) if (t.type === "text" && t.text !== "" || t.type === "math") return !0;
	return !1;
}
function Ar(e, t) {
	let n = kr(e);
	if (e.bullet.type === "char") return t.clear(), n ? ge(e.bullet.char, e.bullet.fontFamily ?? null) : "";
	if (e.bullet.type === "autoNum") {
		if (!n) return "";
		let r = e.lvl;
		return t.has(r) ? t.set(r, t.get(r) + 1) : t.set(r, e.bullet.startAt ?? 1), Dr(t.get(r), e.bullet.numType);
	}
	return t.clear(), "";
}
function jr(e, t, n, r, i, a, o, s = null, l = 0, u = !1, d = !1, f = "#000000", p, m = {
	themeMajorFont: null,
	themeMinorFont: null,
	dpr: 1
}, h, g = !1, _, v = !1) {
	let y = t.vert === "vert" || t.vert === "eaVert", b = t.vert === "vert270";
	if (y || b) {
		let c = n + i / 2, u = r + a / 2, d = y ? 90 : -90, v = h ? (e) => h({
			...e,
			inShapeX: e.inShapeX - a / 2 + i / 2,
			inShapeY: e.inShapeY - i / 2 + a / 2,
			shapeX: n,
			shapeY: r,
			shapeW: i,
			shapeH: a,
			rotation: l,
			textBodyRotation: d
		}) : void 0;
		if (g) return i;
		e.save(), e.translate(c, u), e.rotate(b ? -Math.PI / 2 : Math.PI / 2), jr(e, {
			...t,
			vert: "horz"
		}, -a / 2, -i / 2, a, i, o, s, 0, !1, !1, f, p, m, v, !1, _, t.vert === "eaVert"), e.restore();
		return;
	}
	let x = t.textWarp;
	if (!g && x && Me(x.preset)) {
		mr(e, t, x.preset, x.adj ?? [], n, r, i, a, o, s ?? f, m);
		return;
	}
	let S = X(t.lIns, o), C = X(t.rIns, o), w = X(t.tIns, o), T = X(t.bIns, o), E = t.wrap !== "none", D = t.autoFit === "sp" ? E && Gn(e, t, i, S, C, o, m) : E, O = Math.max(1, t.numCol ?? 1), k = X(t.spcCol ?? 0, o), A = t.defaultBold ?? !1, j = t.defaultItalic ?? !1, M = s ?? f, N = (r) => {
		let a = (t.defaultFontSize ?? 18) * Y * o * r, s = [], c = 0, l = /* @__PURE__ */ new Map();
		for (let u = 0; u < t.paragraphs.length; u++) {
			let d = t.paragraphs[u], f = X(d.marL, o), h = X(d.marR, o), g = X(d.indent, o), _ = d.defFontSize == null ? a : d.defFontSize * Y * o * r, v = d.defColor ? Z(d.defColor) : M, y = Un(d), b = (() => {
				for (let e of d.runs) if (e.type === "text" && e.fontSize != null) return e.fontSize;
				return null;
			})(), x = b == null ? _ : b * Y * o * r, w = (() => {
				for (let e of d.runs) if (e.type === "text" && e.color) return e.color;
				return null;
			})(), T = w ? Z(w) : v, E = (() => {
				for (let e of d.runs) if (e.type === "text" && e.fontFamily) return e.fontFamily;
				return d.defFontFamily ?? null;
			})(), N = "", P = Hn(!1, !1, x, "sans-serif", m), F = T, I = null;
			N = Ar(d, l);
			let L = De(d.bullet);
			if (L.type === "char") {
				let e = L;
				P = Hn(!1, !1, e.sizePts == null ? e.sizePct == null ? x : x * (e.sizePct / 100) : e.sizePts * Y * o * r, N === e.char ? jn(e.fontFamily ?? null, m) : "sans-serif", m), F = e.color ? Z(e.color) : T;
			} else if (L.type === "autoNum") {
				let e = L;
				P = Hn(!1, !1, e.sizePts == null ? e.sizePct == null ? x : x * (e.sizePct / 100) : e.sizePts * Y * o * r, jn(e.fontFamily ?? E, m), m), F = L.color ? Z(L.color) : T;
			} else if (L.type === "blip") {
				let e = L, t = e.sizePts == null ? e.sizePct == null ? x : x * (e.sizePct / 100) : e.sizePts * Y * o * r;
				I = {
					imagePath: e.imagePath,
					mimeType: e.mimeType,
					sizePx: t
				};
			}
			let R = O > 1 ? (i - S - C - (O - 1) * k) / O : i - S - C, z = n + S + f, B = n + S + f + g, V = R - f - h, H = Xn(e, d, D ? V : Infinity, _, v, o, f, A, j, r, p, m, Wn(y, g)), U = d.spaceBefore == null ? 0 : d.spaceBefore / 100 * Y * o * r, W = d.spaceAfter == null ? 0 : d.spaceAfter / 100 * Y * o * r;
			for (let n = 0; n < H.length; n++) {
				let r = H[n], i = n === 0, a = n === H.length - 1, l = 0, f = 0;
				for (let e of r.segments) {
					let t = e.math ? Math.max(e.sizePx, (e.math.ascent + e.math.descent) / 1.2) : e.sizePx;
					if (t > l && (l = t), !e.math) {
						let t = K(e.fontFamily, e.sizePx);
						t > f && (f = t);
					}
				}
				if (l === 0 && (l = _), i && N) {
					e.font = P;
					let t = e.measureText("M"), n = t.actualBoundingBoxAscent + t.actualBoundingBoxDescent;
					n > l && (l = n);
				}
				i && I && I.sizePx > l && (l = I.sizePx);
				let p = l * 1.2, m = Math.max(p, f), h;
				h = d.spaceLine ? d.spaceLine.type === "pct" ? p * (d.spaceLine.val / 1e5) : d.spaceLine.val * Y * o : m, t.autoFit === "norm" && t.lnSpcReduction != null && d.spaceLine?.type !== "pts" && (h *= 1 - t.lnSpcReduction);
				let v = h + (a ? W : 0), b = i && u > 0 ? U : 0, x = i ? Wn(y, g) : 0, S = r.segments.some((e) => e.text && e.text.length > 0 || e.math != null), C = i && S ? I : null;
				s.push({
					line: r,
					linePx: v,
					lineHeight: h,
					topGapPx: b,
					textXOffset: x,
					bulletLabel: i ? N : "",
					bulletFont: P,
					bulletColor: F,
					bulletX: B,
					bulletImage: C,
					textX: z,
					textMaxW: V,
					alignment: d.alignment,
					isLastLine: a,
					para: d
				}), c += v + b;
			}
		}
		return {
			allLines: s,
			totalHeight: c
		};
	}, { allLines: P, totalHeight: F } = N(1);
	if (t.autoFit === "norm") if (t.fontScale != null && t.fontScale > 0) t.fontScale < 1 && ({allLines: P, totalHeight: F} = N(t.fontScale));
	else {
		let e = a - w - T;
		if (F > e && e > 0) {
			let t = .1, n = 1;
			for (let r = 0; r < 6; r++) {
				let r = (t + n) / 2;
				N(r).totalHeight <= e ? t = r : n = r;
			}
			({allLines: P, totalHeight: F} = N(t));
		}
	}
	if (g) return w + F + T;
	let I = t.verticalAnchor ?? "t", L = r, R;
	a === 0 && I === "b" ? (R = w + F + T, L = r - R) : R = t.autoFit === "sp" ? Math.max(a, w + F + T) : a;
	let z, B = Math.max(0, R - w - T);
	z = I === "ctr" ? L + w + (B - F) / 2 : I === "b" ? L + R - T - F : L + w, e.save(), e.textAlign = "left", e.textBaseline = "alphabetic";
	let V = z, H = O > 1 ? (i - S - C - (O - 1) * k) / O + k : 0, U = Math.max(0, R - w - T), W = P[P.length - 1], G = W ? Math.max(0, W.linePx - W.lineHeight) : 0, q = F - G, ee = a === 0 || q <= U + .5, te = O > 1 && !ee ? Math.ceil(P.length / O) : P.length, ne = 0, re = 0;
	for (let s of P) {
		let { line: u, linePx: d, lineHeight: f, topGapPx: p, textXOffset: g, bulletLabel: y, bulletFont: b, bulletColor: x, bulletImage: S, alignment: C, isLastLine: w } = s;
		O > 1 && ne < O - 1 && re >= te && (ne++, re = 0, z = V), z += p, re++;
		let T = (t.rtlCol ? O - 1 - ne : ne) * H, E = s.textX + T, D = s.bulletX + T, k = s.textMaxW, A = s.para.rtl === !0, j = A || sn(u.segments), M = u.segments.some((e) => e.isTab);
		if (M) {
			let t = X(s.para.marL, o), n = X(s.para.marR, o), r = A ? n : t + g, i = k + t + n;
			e.font = u.segments.find((e) => e.isTab).font;
			let a = e.measureText(" ").width, c = yn(u.segments.map((t) => {
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
					width: t.text ? (t.leadingLetterSpacingPx ?? 0) + Q(e, t.text, n) : 0
				};
			}), (s.para.tabStops ?? []).map((e) => ({
				pos: X(e.pos, o),
				algn: e.algn
			})), r, i, a, X(s.para.defTabSz ?? 914400, o));
			for (let e = 0; e < u.segments.length; e++) u.segments[e].isTab && (u.segments[e].tabWidthPx = c[e]);
		}
		let N = 0, P = f * .8;
		for (let t of u.segments) {
			if (t.isTab) {
				N += t.tabWidthPx ?? 0;
				continue;
			}
			if (t.math) {
				N += t.math.width, P = Math.max(P, t.math.ascent);
				continue;
			}
			e.font = t.font;
			let n = e.measureText(t.text || "M"), r = t.letterSpacingPx ?? 0;
			N += t.leadingLetterSpacingPx ?? 0, N += t.text ? Q(e, t.text, r) : 0, n.actualBoundingBoxAscent > 0 && (P = Math.max(P, n.actualBoundingBoxAscent));
		}
		let F = z + P, I = E + k, L = 0, R = null;
		if (j && A) {
			if (y) e.font = b, L = e.measureText(y).width;
			else if (S && _ && (R = c(S.imagePath, _), R)) {
				let e = S.sizePx;
				L = R.height > 0 ? e * (R.width / R.height) : e;
			}
		}
		if (y) if (e.font = b, e.fillStyle = x, j && A) {
			let t = e.direction;
			e.direction = "rtl", e.fillText(y, I - L, F), e.direction = t;
		} else e.fillText(y, D, F);
		if (S && _) {
			let t = c(S.imagePath, _);
			if (t) {
				let n = S.sizePx, r = t.height > 0 ? n * (t.width / t.height) : n, i = F - n;
				j && A ? e.drawImage(t, I - r, i, r, n) : e.drawImage(t, D, i, r, n);
			}
		}
		let B = E + g, U;
		U = M ? A ? E + k - L - N : B : C === "ctr" ? B + (k - g - N) / 2 : C === "r" ? E + k - L - N : B;
		let W = C === "just" || C === "justLow" ? "just" : C === "thaiDist" ? "thaiDist" : C === "dist" ? "dist" : null, G = w || (u.endsWithBreak ?? !1), K = (W && !j && !M ? dn(u.segments, k - g, N, W, G) : null) ?? u.segments, q = j ? cn(u.segments, A) : null, ee = (e, t) => {
			if (Math.abs(e - t) !== 1) return 0;
			let n = u.segments[Math.min(e, t)], r = u.segments[Math.max(e, t)];
			return n.isTab || n.math || r.isTab || r.math || n.sourceRunId == null || n.sourceRunId !== r.sourceRunId ? 0 : r.leadingLetterSpacingPx ?? 0;
		}, ie = K.length;
		for (let t = 0; t < ie; t++) {
			let s = q ? q.order[t] : t, c = K[s], u = q ? q.rtl[s] : !1;
			if (j && (e.direction = u ? "rtl" : "ltr"), t > 0) {
				let e = q ? q.order[t - 1] : t - 1;
				U += ee(e, s);
			}
			if (c.isTab) {
				U += c.tabWidthPx ?? 0;
				continue;
			}
			let d = c.jext ?? 0, p = c.splitBefore, g = c.perGap ?? 0, _ = p && p.length > 0 ? p.length * g : 0;
			if (c.math) {
				let t = Dn.get(c.math.nodes), n = c.math.width, r = c.math.ascent + c.math.descent;
				if (t && n > 0 && r > 0) {
					let i = F - c.math.ascent, a = On(t, c.color);
					e.drawImage(a, U, i, n, r);
				}
				U += n, U += d;
				continue;
			}
			e.font = c.font, e.fillStyle = c.color;
			let y = F + (c.baseline ? -(c.baseline / 1e5) * c.sizePx : 0), b = c.letterSpacingPx ?? 0;
			if (c.highlight && c.text) {
				let t = Q(e, c.text, b) + _ + d;
				Tn(e, U, y, t, c.sizePx, c.highlight, c.color);
			}
			let x = c.shadow, S = (e, t, n, r) => {
				let i = r === "fill" ? e.fillText.bind(e) : e.strokeText.bind(e);
				if (b !== 0 && qn(t) > 1) {
					let r = e, a = r.letterSpacing;
					if (Yn(e)) {
						r.letterSpacing = `${b}px`, i(t, n, y);
						try {
							r.letterSpacing = a;
						} catch {}
					} else {
						let r = n, a = [...t];
						for (let t = 0; t < a.length; t++) {
							let n = a[t];
							i(n, r, y), t < a.length - 1 && (r += e.measureText(n).width + b);
						}
					}
				} else i(t, n, y);
			}, C = (t) => Q(e, t, b), w = p && p.length > 0 ? Qt([...c.text], p, g, C) : null, T = [...c.text], E = !!p && p.length === T.length - 1 && T.length > 1, D = (e, t) => {
				if (v) {
					let n = E ? b + g : b;
					wn(e, c.text, U, y, c.sizePx, n, t);
					return;
				}
				if (E) {
					let n = t === "fill" ? e.fillText.bind(e) : e.strokeText.bind(e), r = b + g;
					if (Yn(e)) {
						let t = e, i = t.letterSpacing;
						t.letterSpacing = `${r}px`, n(c.text, U, y);
						try {
							t.letterSpacing = i;
						} catch {}
					} else {
						let t = U;
						for (let i = 0; i < T.length; i++) {
							let a = T[i];
							n(a, t, y), i < T.length - 1 && (t += e.measureText(a).width + r);
						}
					}
				} else if (w) for (let { text: n, dx: r } of w) S(e, n, U + r, t);
				else S(e, c.text, U, t);
			}, O = c.reflection;
			if (O && c.text) {
				let t = e.canvas.width || 0, n = e.canvas.height || 0;
				if (t > 0 && n > 0) {
					e.font = c.font;
					let r = e.measureText(c.text), i = Number.isFinite(r.actualBoundingBoxAscent) ? r.actualBoundingBoxAscent : c.sizePx * .8, a = Number.isFinite(r.actualBoundingBoxDescent) ? r.actualBoundingBoxDescent : c.sizePx * .2, s = Number.isFinite(r.actualBoundingBoxLeft) ? r.actualBoundingBoxLeft : 0, l = Number.isFinite(r.actualBoundingBoxRight) ? r.actualBoundingBoxRight : r.width, u = e.getTransform(), d = Math.abs(u.a * u.d - u.b * u.c), f = d > 0 ? Math.sqrt(d) : 1;
					Vn(e, (e) => {
						e.font = c.font, e.fillStyle = c.color, D(e, "fill");
					}, {
						x: (U - s) * f,
						y: (y - i) * f,
						w: Math.max(1, s + l) * f,
						h: Math.max(1, i + a) * f
					}, O, o * f, u, t, n), e.font = c.font, e.fillStyle = c.color;
				}
			}
			if (x) {
				let t = x.dir * Math.PI / 180, n = X(x.dist, o);
				e.save(), e.shadowColor = Z(x.color, x.alpha), e.shadowBlur = X(x.blur, o), e.shadowOffsetX = Math.cos(t) * n, e.shadowOffsetY = Math.sin(t) * n;
			}
			D(e, "fill"), x && e.restore();
			let k = c.outline;
			k && k.width > 0 && (e.save(), e.lineWidth = Math.max(.5, X(k.width, o)), e.strokeStyle = k.color ? `#${k.color}` : c.color, e.lineJoin = "round", D(e, "stroke"), e.restore()), e.font = c.font;
			let A = Q(e, c.text, b) + _;
			if (h && c.text && h({
				text: c.text,
				inShapeX: U - n,
				inShapeY: z - r,
				w: A + d,
				h: f,
				fontSize: c.sizePx,
				font: c.font,
				shapeX: n,
				shapeY: r,
				shapeW: i,
				shapeH: a,
				rotation: l,
				hyperlink: c.hyperlink
			}), c.underline && Xt(e, U, y, A + d, c.sizePx, c.underlineColor ?? c.color, c.underlineStyle, m.dpr), c.strikethrough) {
				let t = Math.max(1, c.sizePx * .05);
				e.strokeStyle = c.color, e.lineWidth = t, e.setLineDash([]);
				let n = y - c.sizePx * .32;
				if (c.strikeDouble) {
					let r = t * .9, i = n - r, a = n + r;
					e.beginPath(), e.moveTo(U, i + J(i, t, m.dpr)), e.lineTo(U + A + d, i + J(i, t, m.dpr)), e.moveTo(U, a + J(a, t, m.dpr)), e.lineTo(U + A + d, a + J(a, t, m.dpr)), e.stroke();
				} else {
					let r = n + J(n, t, m.dpr);
					e.beginPath(), e.moveTo(U, r), e.lineTo(U + A + d, r), e.stroke();
				}
			}
			U += A, U += d;
		}
		j && (e.direction = "ltr"), z += d;
	}
	e.restore();
}
function Mr(e, t, n, r, i) {
	if (!e) return [];
	let a = Rt(t?.rig ?? "threePt", t?.dir ?? "t", t?.rot), o = Wt(n), s = r * i, c = [];
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
function Nr(e, t, n, r, i, a) {
	if (!e || !e.extrusionH || e.extrusionH <= 0) return null;
	let o = e.extrusionH * i * a, s = lt(t, n * a, r * a, o);
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
function Pr(t, n, r, i, a, o, s, c = {}) {
	if (a <= 0 || o <= 0) return !1;
	let l = t.getTransform(), u = Math.abs(l.a * l.d - l.b * l.c), d = u > 0 ? Math.sqrt(u) : 1, f = Math.max(0, Math.ceil((c.edgePadCss ?? 0) * d)), p = st(n, a, o), m = p.corners;
	if (f > 0) {
		let e = f / d, t = vt(p.corners, e / a, e / o);
		t ? m = t : f = 0;
	}
	let h = f / d, g = Math.max(1, Math.ceil(a * d) + 2 * f), _ = Math.max(1, Math.ceil(o * d) + 2 * f), v = e(g, _);
	if (!v) return !1;
	let y = v.getContext("2d");
	if (!y) return !1;
	y.save(), y.scale(d, d), y.translate(h, h), s(y, 0, 0, a, o), y.restore();
	let b = Math.ceil(a * d), x = Math.ceil(o * d), S = (e) => ({
		x: f - e,
		y: f - e,
		w: b + 2 * e,
		h: x + 2 * e
	});
	if (c.extrusion) {
		let e = Math.ceil(Math.hypot(c.extrusion.offsetX, c.extrusion.offsetY)) + 2;
		Yt(y, c.extrusion, S(e));
	}
	if (c.bevels && c.bevels.length > 0) for (let e of c.bevels) Jt(y, e, S(Math.ceil(e.widthPx) + 2));
	return c.paintEdges && (y.save(), y.scale(d, d), y.translate(h, h), c.paintEdges(y, 0, 0, a, o), y.restore()), gt(v, t, g, _, m.map((e) => ({
		x: r + e.x,
		y: i + e.y
	}))), !0;
}
function Fr(t, n, r, i, a, o, s, c, l = 0) {
	if (i <= 0 || a <= 0 || o.length === 0) return !1;
	let u = t.getTransform(), d = Math.abs(u.a * u.d - u.b * u.c), f = d > 0 ? Math.sqrt(d) : 1, p = Math.max(0, Math.ceil(l * f)), m = p / f, h = Math.max(1, Math.ceil(i * f) + 2 * p), g = Math.max(1, Math.ceil(a * f) + 2 * p), _ = e(h, g);
	if (!_) return !1;
	let v = _.getContext("2d");
	if (!v) return !1;
	v.save(), v.scale(f, f), v.translate(m, m), s(v, 0, 0, i, a), v.restore();
	let y = Math.ceil(i * f), b = Math.ceil(a * f);
	for (let e of o) {
		let t = Math.ceil(e.widthPx) + 2;
		Jt(v, e, {
			x: p - t,
			y: p - t,
			w: y + 2 * t,
			h: b + 2 * t
		});
	}
	return c && (v.save(), v.scale(f, f), v.translate(m, m), c(v, 0, 0, i, a), v.restore()), t.drawImage(_, n - m, r - m, h / f, g / f), !0;
}
var Ir = /* @__PURE__ */ new WeakMap();
function Lr(e) {
	let t = Ir.get(e);
	return t || (t = async (t, n) => {
		let r = await e(t);
		return r.type === n ? r : new Blob([r], { type: n });
	}, Ir.set(e, t)), t;
}
function Rr(e, t, n = Lr(t)) {
	return v("base", e.posterPath, n, async () => {
		let n = await t(e.posterPath), r = e.posterMimeType || n.type || "application/octet-stream";
		return {
			bitmap: await m(n.type === r ? n : new Blob([n], { type: r })),
			owned: !0
		};
	}).then((e) => {
		if (!e) throw Error("Media poster could not be decoded");
		return e;
	});
}
async function zr(e, t, n, i, a) {
	if (a) try {
		let o = t.mimeType === "image/svg+xml", { widthPt: c, heightPt: l } = s(t.mimeType, t.srcRect, t.width / Y, t.height / Y), u;
		if (A(t)) try {
			u = await U(t.svgImagePath, a);
		} catch {
			u = o ? await U(t.imagePath, a) : await Ee(t.imagePath, t.mimeType, t.duotone, a, {
				widthPt: c,
				heightPt: l
			});
		}
		else u = o ? await U(t.imagePath, a) : await Ee(t.imagePath, t.mimeType, t.duotone, a, {
			widthPt: c,
			heightPt: l
		});
		if (!u || i()) return;
		e.save(), t.alpha != null && (e.globalAlpha *= t.alpha);
		let d = X(t.x, n), f = X(t.y, n), p = X(t.width, n), m = X(t.height, n);
		(t.rotation !== 0 || t.flipH || t.flipV) && (e.translate(d + p / 2, f + m / 2), e.rotate(t.rotation * Math.PI / 180), t.flipH && e.scale(-1, 1), t.flipV && e.scale(1, -1), e.translate(-(d + p / 2), -(f + m / 2)));
		let h = ue(u, t.srcRect), g = (e, n, i, a, o) => {
			t.custGeom && t.custGeom.length > 0 ? Er(e, t.custGeom, n, i, a, o) : t.prstGeom && r(e, t.prstGeom, n, i, a, o, t.prstAdjust ?? []) || e.rect(n, i, a, o);
		}, _ = (e, t, n, r, i) => {
			e.beginPath(), g(e, t, n, r, i);
		}, v = (e, n, r, i, a) => {
			(t.prstGeom || t.custGeom && t.custGeom.length > 0) && (_(e, n, r, i, a), e.clip());
		}, y = (e, r, i, a, o) => {
			t.stroke && (e.save(), Hr(e, t.stroke, n, {
				x: r,
				y: i,
				w: a,
				h: o
			}, t.rotation), _(e, r, i, a, o), e.stroke(), e.restore());
		}, b = (e, r, i, a, o) => {
			let s = t.sp3d;
			if (s && (s.contourW ?? 0) > 0 && s.contourClr) {
				let t = Math.max(.5, s.contourW * n);
				e.save(), e.beginPath();
				let c = t * 2 + Math.max(a, o);
				e.rect(r - c, i - c, a + 2 * c, o + 2 * c), g(e, r, i, a, o), e.clip("evenodd"), e.beginPath(), _(e, r, i, a, o), e.strokeStyle = Z(s.contourClr), e.lineWidth = t * 2, e.setLineDash([]), e.stroke(), e.restore();
			}
		}, x = t.scene3d && ct(t.scene3d.camera) ? t.scene3d : null, S = (e, t, n, r, i) => {
			e.save(), v(e, t, n, r, i), h ? e.drawImage(u, h.sx, h.sy, h.sw, h.sh, t, n, r, i) : e.drawImage(u, t, n, r, i), e.restore();
		}, T = (e, t, n, r, i) => {
			S(e, t, n, r, i), y(e, t, n, r, i), b(e, t, n, r, i);
		}, E = (e, t, n, r, i) => {
			S(e, t, n, r, i), y(e, t, n, r, i);
		}, D = e.getTransform(), O = Math.abs(D.a * D.d - D.b * D.c), k = O > 0 ? Math.sqrt(O) : 1, j = Mr(t.sp3d, t.scene3d?.lightRig, t.sp3d ? t.sp3d.prstMaterial : void 0, n, k), M = x ? Nr(t.sp3d, x.camera, p, m, n, k) : null, N = t.stroke ? t.stroke.width * n / 2 : 0, P = t.sp3d?.contourW ? t.sp3d.contourW * n : 0, F = M ? Math.hypot(M.offsetX, M.offsetY) / k : 0, I = N + P + F + 2, L = (e) => {
			if (x) {
				if (Pr(e, x.camera, d, f, p, m, E, {
					bevels: j,
					extrusion: M ?? void 0,
					paintEdges: b,
					edgePadCss: I
				})) return;
			} else if (j.length > 0 && Fr(e, d, f, p, m, j, E, b, I)) return;
			T(e, d, f, p, m);
		}, R = (e, t, n, r, i, a) => {
			e.save(), v(e, n, r, i, a), e.fillStyle = t, e.fillRect(n, r, i, a), e.restore();
		}, z = (e, t) => {
			x && Pr(e, x.camera, d, f, p, m, (e, n, r, i, a) => R(e, t, n, r, i, a)) || R(e, t, d, f, p, m);
		}, B = e.getTransform(), V = Math.abs(B.a * B.d - B.b * B.c), H = V > 0 ? Math.sqrt(V) : 1, W = N + P, G = (t.custGeom && t.custGeom.length > 0 ? ve(t.custGeom, d, f, p, m) : t.prstGeom && w(t.prstGeom.toLowerCase()) ? C(t.prstGeom.toLowerCase(), d, f, p, m, t.prstAdjust ?? []) : null) ?? {
			x: d,
			y: f,
			w: p,
			h: m
		}, K = x ? Sr(x.camera, B, d, f, p, m, I, t.shadow?.algn) : {
			bbox: vr(B, G.x - W, G.y - W, G.w + W * 2, G.h + W * 2),
			anchor: xr(B, d, f, p, m, t.shadow?.algn)
		}, q = n * H, ee = !!(t.shadow || t.innerShadow || t.glow || t.softEdge || t.reflection), J = (e) => z(e, "#000");
		wr(e, t, x && ee ? Cr(L, B, K.bbox, {
			w: e.canvas.width || 0,
			h: e.canvas.height || 0
		}) : L, x && ee ? Cr(J, B, K.bbox, {
			w: e.canvas.width || 0,
			h: e.canvas.height || 0
		}) : J, K.bbox, K.anchor, n, q, B), e.restore();
	} catch (e) {
		if (pe(e)) throw e;
	}
}
async function Br(e, t, n, r, i, a, o) {
	let s = X(t.x, n), c = X(t.y, n), l = X(t.width, n), u = X(t.height, n), d;
	if (t.posterPath && i) try {
		d = await Rr(t, i, o);
	} catch (e) {
		if (pe(e)) throw e;
	}
	r() || (e.save(), Ur(e, t, n), d ? e.drawImage(d, s, c, l, u) : (e.fillStyle = t.mediaKind === "video" ? "#111" : "#f0f0f0", e.fillRect(s, c, l, u)), a || rn(e, s + l / 2, c + u / 2, l, u, "paused"), e.restore());
}
function Vr(e, t, n, r, i, a, o) {
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
	e.save(), e.globalCompositeOperation = "destination-out", e.strokeStyle = "#000", e.lineWidth = s + .5, e.setLineDash([]), e.beginPath(), e.moveTo(t.x, t.y), e.lineTo(n.x, n.y), e.stroke(), e.globalCompositeOperation = "source-over", e.strokeStyle = (r.fill ? En(r.fill, e, Math.min(t.x, n.x), Math.min(t.y, n.y), Math.max(1, Math.abs(n.x - t.x)), Math.max(1, Math.abs(n.y - t.y)), o) : null) ?? Z(r.color);
	for (let r of p) {
		let i = d * (s * r.offset), a = f * (s * r.offset);
		e.lineWidth = Math.max(.5, s * r.widthFrac), e.beginPath(), e.moveTo(t.x + i, t.y + a), e.lineTo(n.x + i, n.y + a), e.stroke();
	}
	e.restore();
}
function Hr(e, t, n, r, i = 0) {
	if (T(e, t, n), t?.fill && r) {
		let n = En(t.fill, e, r.x, r.y, r.w, r.h, i);
		n && (e.strokeStyle = n);
	}
}
function Ur(e, t, n) {
	if (t.rotation === 0 && !t.flipH && !t.flipV) return;
	let r = X(t.x, n), i = X(t.y, n), a = X(t.width, n), o = X(t.height, n);
	e.translate(r + a / 2, i + o / 2), e.rotate(t.rotation * Math.PI / 180), t.flipH && e.scale(-1, 1), t.flipV && e.scale(1, -1), e.translate(-(r + a / 2), -(i + o / 2));
}
function Wr(e, t, n, r, i = {
	themeMajorFont: null,
	themeMinorFont: null,
	dpr: 1
}) {
	e.save(), Ur(e, t, n);
	let a = X(t.x, n), o = X(t.y, n), s = t.cols.map((e) => X(e, n)), c = s.length, l = (e, t) => {
		let n = 0;
		for (let r = 0; r < t; r++) n += s[e + r] ?? 0;
		return n;
	}, u = t.rows.map((e) => X(e.height, n));
	for (let a = 0; a < t.rows.length; a++) {
		let o = t.rows[a];
		for (let t = 0; t < o.cells.length; t++) {
			let s = o.cells[t];
			if (s.hMerge || s.vMerge || (s.rowSpan || 1) > 1 || !s.textBody) continue;
			let c = l(t, s.gridSpan || 1), d = jr(e, s.textBody, 0, 0, c, 0, n, null, 0, !1, !1, "#000000", r, i, void 0, !0) || 0;
			d > u[a] && (u[a] = d);
		}
	}
	for (let a = 0; a < t.rows.length; a++) {
		let o = t.rows[a];
		for (let t = 0; t < o.cells.length; t++) {
			let s = o.cells[t];
			if (s.hMerge || s.vMerge) continue;
			let c = s.rowSpan || 1;
			if (c <= 1 || !s.textBody) continue;
			let d = l(t, s.gridSpan || 1), f = jr(e, s.textBody, 0, 0, d, 0, n, null, 0, !1, !1, "#000000", r, i, void 0, !0) || 0, p = 0;
			for (let e = 0; e < c && a + e < u.length; e++) p += u[a + e];
			if (f > p) {
				let e = (f - p) / c;
				for (let t = 0; t < c && a + t < u.length; t++) u[a + t] += e;
			}
		}
	}
	let d = s.reduce((e, t) => e + t, 0), f = Array(c);
	if (t.rtl) {
		let e = a + d;
		for (let t = 0; t < c; t++) e -= s[t], f[t] = e;
	} else {
		let e = a;
		for (let t = 0; t < c; t++) f[t] = e, e += s[t];
	}
	let p = (e, n) => t.rtl ? f[e + n - 1] : f[e], m = Array(t.rows.length);
	{
		let e = o;
		for (let n = 0; n < t.rows.length; n++) m[n] = e, e += u[n];
	}
	let h = [], g = t.rows.map(() => Array(c).fill(-1));
	for (let e = 0; e < t.rows.length; e++) {
		let n = t.rows[e], r = m[e];
		for (let i = 0; i < n.cells.length; i++) {
			let a = n.cells[i];
			if (a.hMerge || a.vMerge) continue;
			let o = a.gridSpan || 1, s = a.rowSpan || 1, d = l(i, o), f = 0;
			for (let t = 0; t < s; t++) f += u[e + t] ?? 0;
			let m = p(i, o), _ = Math.min(e + s - 1, t.rows.length - 1), v = h.length;
			h.push({
				cell: a,
				colX: m,
				rowY: r,
				cellW: d,
				cellH: f,
				ci: i,
				ri: e,
				span: o,
				lastRi: _
			});
			for (let t = e; t <= _; t++) for (let e = i; e < i + o && e < c; e++) g[t][e] = v;
		}
	}
	for (let { cell: a, colX: o, rowY: s, cellW: c, cellH: l } of h) {
		let u = En(a.fill, e, o, s, c, l, t.rotation);
		if (u && (e.fillStyle = u, e.fillRect(o, s, c, l)), a.textBody) {
			let t = a.textColor ? Z(a.textColor) : null;
			jr(e, a.textBody, o, s, c, l, n, t, 0, !1, !1, "#000000", r, i);
		}
	}
	let _ = i.dpr, v = (e, t) => {
		if (e < 0 || e >= g.length || t < 0 || t >= c) return null;
		let n = g[e][t];
		return n < 0 ? null : h[n];
	}, y = (r, i, a, o, s) => {
		Hr(e, r, n, {
			x: Math.min(i, o),
			y: Math.min(a, s),
			w: Math.max(1, Math.abs(o - i)),
			h: Math.max(1, Math.abs(s - a))
		}, t.rotation);
		let c = i === o ? J(i, e.lineWidth, _) : 0, l = a === s ? J(a, e.lineWidth, _) : 0;
		e.beginPath(), e.moveTo(i + c, a + l), e.lineTo(o + c, s + l), e.stroke();
	};
	for (let r of h) {
		let { cell: i, colX: a, rowY: o, cellW: s, cellH: d } = r;
		e.save();
		let f = t.rtl ? i.borderR : i.borderL, h = t.rtl ? i.borderL : i.borderR, _ = t.rtl ? r.ci + r.span === c : r.ci === 0, b = t.rtl ? r.ci === 0 : r.ci + r.span === c, x = t.rtl ? r.ci - 1 : r.ci + r.span, S = (e) => t.rtl ? e.borderR : e.borderL;
		if (r.ri === 0 && i.borderT && y(i.borderT, a, o, a + s, o), _ && f && y(f, a, o, a, o + d), r.lastRi === t.rows.length - 1) {
			let e = i.borderB;
			e && y(e, a, o + d, a + s, o + d);
		} else {
			let e = r.lastRi + 1, t = o + d, n = Math.min(r.ci + r.span, c), a = r.ci;
			for (; a < n;) {
				let r = g[e][a], o = a + 1;
				for (; o < n && g[e][o] === r;) o++;
				let s = v(e, a), c = mn(i.borderB, s ? s.cell.borderT : null);
				if (c) {
					let e = p(a, o - a);
					y(c, e, t, e + l(a, o - a), t);
				}
				a = o;
			}
		}
		if (b) {
			let e = h;
			e && y(e, a + s, o, a + s, o + d);
		} else {
			let e = a + s, t = r.ri;
			for (; t <= r.lastRi;) {
				let n = g[t][x], i = t;
				for (; i + 1 <= r.lastRi && g[i + 1][x] === n;) i++;
				let a = v(t, x), o = mn(h, a ? S(a.cell) : null);
				o && y(o, e, m[t], e, m[i] + u[i]), t = i + 1;
			}
		}
		i.diagonalTL && (Hr(e, i.diagonalTL, n, {
			x: a,
			y: o,
			w: s,
			h: d
		}, t.rotation), e.beginPath(), e.moveTo(a, o), e.lineTo(a + s, o + d), e.stroke()), i.diagonalTR && (Hr(e, i.diagonalTR, n, {
			x: a,
			y: o,
			w: s,
			h: d
		}, t.rotation), e.beginPath(), e.moveTo(a + s, o), e.lineTo(a, o + d), e.stroke()), e.restore();
	}
	e.restore();
}
function Gr(e, t, n, r) {
	e.save(), e.globalAlpha = t.opacity, e.fillStyle = t.color, e.fillRect(0, 0, n, r), e.restore();
}
var Kr = /* @__PURE__ */ new WeakMap();
function qr(e) {
	Kr.set(e, (Kr.get(e) ?? 0) + 1);
}
function Jr(e, t, n, r, i) {
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
async function Yr(e, t, r, i, a = {}, o) {
	let s = a.fetchImage ?? (a.fetchMedia ? Lr(a.fetchMedia) : void 0), c = s ? n(s) : void 0;
	try {
		return await Xr(e, t, r, i, a, o, s);
	} finally {
		c?.();
	}
}
async function Xr(e, t, n, r, i = {}, a, o) {
	let c = (Kr.get(e) ?? 0) + 1;
	Kr.set(e, c);
	let l = () => Kr.get(e) !== c, u = i.width ?? ((z(e) ? e.offsetWidth : 0) || 960), f = u / n, p = Math.round(u), m = Math.round(r * f), h = i.dpr ?? G(), _ = ce(p * h, m * h), v = _.clamped ? h * _.scale : h;
	e.width = _.width, e.height = _.height, z(e) && (e.style.width = `${p}px`, e.style.display || (e.style.display = "block"));
	let y = e.getContext("2d");
	if (!y) throw Error("Could not get 2D context");
	if (y.scale(v, v), t.parseError) return Jr(y, p, m, t.slideNumber, t.parseError), e;
	let b = i.defaultTextColor ? `#${i.defaultTextColor}` : "#000000", x = {
		themeMajorFont: i.majorFont ?? null,
		themeMinorFont: i.minorFont ?? null,
		themeHlinkColor: i.hlinkColor ?? null,
		dpr: v,
		smartArtFallbackTextColor: vn(t.background, b)
	};
	if (await Zn(y, t.background, p, m, f, l, i.fetchImage), l() || (i.math && await An(t, i.math), l())) return e;
	let S = t.slideNumber;
	for (let e of t.elements) if (e.type === "picture" && i.fetchImage) {
		let t = e, n = t.mimeType === "image/svg+xml";
		if (A(t)) U(t.svgImagePath, i.fetchImage).catch(() => void 0);
		else if (n) U(t.imagePath, i.fetchImage).catch(() => void 0);
		else {
			let e = s(t.mimeType, t.srcRect, t.width / Y, t.height / Y);
			Ee(t.imagePath, t.mimeType, t.duotone, i.fetchImage, {
				widthPt: e.widthPt,
				heightPt: e.heightPt
			}).catch(() => void 0);
		}
	} else if (e.type === "media") {
		let t = e;
		t.posterPath && i.fetchMedia && Rr(t, i.fetchMedia, o).catch(() => void 0);
	}
	if (i.fetchImage) {
		let n = i.fetchImage, r = /* @__PURE__ */ new Set();
		for (let e of t.elements) if (!(e.type !== "shape" || !e.textBody)) for (let t of e.textBody.paragraphs) {
			let e = De(t.bullet);
			e.type === "blip" && r.add(`${e.imagePath} ${e.mimeType}`);
		}
		if (r.size > 0 && (await Promise.all([...r].map((e) => {
			let [t, r] = e.split(" ");
			return g(t, r, n).catch((e) => {
				if (pe(e)) throw e;
			});
		})), l())) return e;
	}
	for (let [n, r] of t.elements.entries()) {
		if (l()) return e;
		if (r.type === "shape") Tr(y, r, f, b, S, x, a ? (e) => a({
			...e,
			elementIndex: n,
			origin: t.elementSources?.[n]?.origin ?? "slide"
		}) : void 0, i.fetchImage);
		else if (r.type === "picture") await zr(y, r, f, l, i.fetchImage);
		else if (r.type === "table") Wr(y, r, f, S, x);
		else if (r.type === "media") await Br(y, r, f, l, i.fetchMedia, i.skipMediaControls, i.fetchImage);
		else if (r.type === "chart") {
			let e = Y * f;
			y.save(), Ur(y, r, f), d(y, r.chart, {
				x: X(r.x, f),
				y: X(r.y, f),
				w: X(r.width, f),
				h: X(r.height, f)
			}, e, r.rotation, i.threeD, i.regionMap), y.restore();
		}
	}
	return l() || i.dim && Gr(y, i.dim, p, m), e;
}
//#endregion
//#region packages/pptx/src/google-fonts.ts
var Zr = {
	...ae,
	...q
};
Object.freeze({
	archiveEntryCount: 0,
	declaredInflatedBytes: 0,
	distinctInflatedBytes: 0,
	operationInflatedBytes: 0
});
function $(e, t) {
	if (e !== null && typeof e != "string") throw Error(`invalid PPTX presentation bootstrap ${t}`);
}
function Qr(e, t) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error(`invalid PPTX presentation bootstrap slide at ${t}`);
	let n = e;
	if (n.index !== t) throw Error(`invalid PPTX presentation bootstrap slide index ${n.index}`);
	if (n.partName !== void 0 && typeof n.partName != "string") throw Error(`invalid PPTX presentation bootstrap slide partName at ${t}`);
	return Object.freeze({
		index: n.index,
		...n.partName === void 0 ? {} : { partName: n.partName }
	});
}
function $r(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error("invalid PPTX presentation bootstrap payload");
	let t = e;
	if (!Number.isSafeInteger(t.slideCount) || (t.slideCount ?? -1) < 0 || !Number.isSafeInteger(t.slideWidth) || (t.slideWidth ?? 0) <= 0 || !Number.isSafeInteger(t.slideHeight) || (t.slideHeight ?? 0) <= 0 || !Array.isArray(t.slides) || t.slides.length !== t.slideCount) throw Error("invalid PPTX presentation bootstrap dimensions or slide count");
	return $(t.defaultTextColor, "defaultTextColor"), $(t.majorFont, "majorFont"), $(t.minorFont, "minorFont"), $(t.hlinkColor, "hlinkColor"), $(t.folHlinkColor, "folHlinkColor"), Object.freeze({
		slideCount: t.slideCount,
		slideWidth: t.slideWidth,
		slideHeight: t.slideHeight,
		defaultTextColor: t.defaultTextColor,
		majorFont: t.majorFont,
		minorFont: t.minorFont,
		hlinkColor: t.hlinkColor,
		folHlinkColor: t.folHlinkColor,
		slides: Object.freeze(t.slides.map(Qr))
	});
}
function ei(e) {
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
function ti(e, t) {
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
	return ei(n);
}
function ni(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error("invalid PPTX presentation preflight payload");
	let t = e;
	if (!Number.isSafeInteger(t.slideCount) || (t.slideCount ?? -1) < 0 || !Number.isSafeInteger(t.slideWidth) || (t.slideWidth ?? 0) <= 0 || !Number.isSafeInteger(t.slideHeight) || (t.slideHeight ?? 0) <= 0 || !Array.isArray(t.slides) || t.slides.length !== t.slideCount || !Array.isArray(t.fontPreloadNames)) throw Error("invalid PPTX presentation preflight dimensions or slide count");
	$(t.defaultTextColor, "defaultTextColor"), $(t.majorFont, "majorFont"), $(t.minorFont, "minorFont"), $(t.hlinkColor, "hlinkColor"), $(t.folHlinkColor, "folHlinkColor");
	let n = t.slides.map((e, t) => {
		if (!e || typeof e != "object" || Array.isArray(e)) throw Error(`invalid PPTX presentation preflight slide at ${t}`);
		let n = e;
		if (n.index !== t || n.partName !== void 0 && typeof n.partName != "string" || n.notes !== null && typeof n.notes != "string" || typeof n.hidden != "boolean" || !Array.isArray(n.mediaElements)) throw Error(`invalid PPTX presentation preflight slide fields at ${t}`);
		return Object.freeze({
			index: t,
			...n.partName === void 0 ? {} : { partName: n.partName },
			notes: n.notes,
			hidden: n.hidden,
			mediaElements: Object.freeze(n.mediaElements.map((e) => ti(e, t)))
		});
	}), r = t.fontPreloadNames.map((e, t) => {
		if (e !== null && typeof e != "string") throw Error(`invalid PPTX presentation preflight font at ${t}`);
		return e;
	});
	return Object.freeze({
		slideCount: t.slideCount,
		slideWidth: t.slideWidth,
		slideHeight: t.slideHeight,
		defaultTextColor: t.defaultTextColor,
		majorFont: t.majorFont,
		minorFont: t.minorFont,
		hlinkColor: t.hlinkColor,
		folHlinkColor: t.folHlinkColor,
		slides: Object.freeze(n),
		fontPreloadNames: Object.freeze(r)
	});
}
function ri(e, t) {
	for (let n of e.slides) for (let e of n.mediaElements) {
		if (e.mediaPath === t) return e.mimeType;
		if (e.posterPath === t) return e.posterMimeType;
	}
	return "";
}
//#endregion
//#region packages/pptx/src/slide-pull-client.ts
var ii = 1024 * 1024, ai = class {
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
		}, a = new _(this.options.transport, {
			...i,
			maxByteCredit: f,
			timeoutMs: n
		});
		this.active.add(a);
		try {
			await this.options.open(e, i, n);
			let r = await si(a);
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
function oi(e) {
	return !!e && typeof e == "object" && e.protocol === "ooxml-pull-v1";
}
async function si(e) {
	try {
		return await e.pull(ii);
	} catch (t) {
		let n = ci(t);
		if (n === void 0) throw t;
		return e.pull(n);
	}
}
function ci(e) {
	return M(e, ii, f);
}
//#endregion
export { ni as a, Yr as c, $r as i, rn as l, oi as n, Zr as o, ri as r, qr as s, ai as t };
