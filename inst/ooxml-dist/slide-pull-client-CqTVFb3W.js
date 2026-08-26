import { A as e, At as t, Bt as n, C as r, D as i, Dt as a, Ft as o, Gt as s, Ht as c, It as l, K as u, Lt as d, M as f, Mt as p, N as m, O as h, Ot as g, Pt as _, Rt as v, S as y, St as b, Tt as x, Ut as S, Vt as C, Wt as w, _ as T, _t as E, c as D, ct as O, d as k, f as A, g as j, gt as M, h as N, ht as P, i as F, j as I, m as L, mt as R, n as z, p as B, pt as V, qt as H, r as U, s as W, u as G, vt as K, w as q, wt as J, xt as ee, y as te, yt as ne, zt as re } from "./line-metrics-B3syvDn2.js";
import { a as ie, c as ae, d as oe, i as se, l as ce, n as le, o as ue, r as de, s as fe, t as pe, u as me } from "./line-distribute-iXsUCIH-.js";
import { S as he, _ as ge, an as _e, h as ve, in as ye, k as be, ln as xe, nn as Se, un as Ce, v as we, w as Te } from "./plot-area-frame-DHV02PJU.js";
import { r as Y } from "./units-BzZ0gAxs.js";
import { A as Ee, F as De, I as Oe, L as ke, M as Ae, N as je, P as Me, j as Ne } from "./three-d-7MaVzQuZ.js";
import { k as Pe } from "./renderer-CYr9YTXM.js";
import { i as Fe } from "./resource-measurement-CsW4_eYt.js";
//#region packages/pptx/src/types.ts
function Ie(e) {
	return e;
}
var Le = {
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
}, Re = Math.PI * 2 / 216e5, ze = Le, Be = /* @__PURE__ */ new Map();
function Ve(e) {
	return e.toLowerCase() in ze;
}
function He(e) {
	let t = Be.get(e);
	if (t) return t;
	let n = ze[e];
	return n ? (t = {
		adj: n.adj.map(([e, t]) => [e, v(t)]),
		gd: n.gd.map(([e, t]) => [e, v(t)]),
		paths: n.paths
	}, Be.set(e, t), t) : null;
}
var Ue = 48;
function We(e, t, n, r) {
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
			for (let t = 1; t <= Ue; t++) {
				let n = t / Ue, o = 1 - n, s = o * o * o * l + 3 * o * o * n * e + 3 * o * n * n * i + n * n * n * d, p = o * o * o * u + 3 * o * o * n * r + 3 * o * n * n * a + n * n * n * f;
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
			for (let t = 1; t <= Ue; t++) {
				let n = t / Ue, o = 1 - n, s = o * o * l + 2 * o * n * e + n * n * i, d = o * o * u + 2 * o * n * r + n * n * a;
				c.push({
					x: s,
					y: d
				});
			}
			l = i, u = a;
			break;
		}
		case "a": {
			let e = t.resolve(n[1]), r = t.resolve(n[2]), o = e * i, s = r * a, d = t.resolve(n[3]) * Re, f = t.resolve(n[4]) * Re, p = (t) => Math.atan2(e * Math.sin(t), r * Math.cos(t)), m = Math.PI * 2, h = p(d), g = Math.trunc(f / m), _ = f - g * m, v = p(d + _) - h;
			_ > 0 && v < 0 ? v += m : _ < 0 && v > 0 && (v -= m);
			let y = v + g * m, b = l - o * Math.cos(h), x = u - s * Math.sin(h), S = Math.max(Ue, Math.ceil(Math.abs(y) / m * 96));
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
function Ge(e) {
	let t = [0];
	for (let n = 1; n < e.length; n++) {
		let r = e[n].x - e[n - 1].x, i = e[n].y - e[n - 1].y;
		t.push(t[n - 1] + Math.hypot(r, i));
	}
	return t;
}
function Ke(e, t, n, r) {
	let i = He(e.toLowerCase());
	if (!i || i.paths.length === 0) return null;
	let a = re({
		w: n,
		h: r,
		adj: t
	}, i.adj, i.gd), o = i.paths.length === 1, s = We(i.paths[0], a, n, r), c = o ? s : We(i.paths[i.paths.length - 1], a, n, r);
	return {
		top: s,
		bottom: c,
		topLen: Ge(s),
		bottomLen: Ge(c),
		singleEdge: o
	};
}
function qe(e, t, n) {
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
function Je(e) {
	return e.topLen[e.topLen.length - 1] ?? 0;
}
function Ye(e, t) {
	if (!e.singleEdge) return 1;
	let n = Je(e);
	return n <= 0 ? 1 : Math.max(0, Math.min(1, t / n));
}
function Xe(e, t, n, r) {
	if (e.singleEdge) {
		let i = qe(e.top, e.topLen, t), a = Math.atan2(i.ty, i.tx), o = i.ty, s = -i.tx, c = n * (1 - r);
		return {
			x: i.x - o * c,
			y: i.y - s * c,
			angle: a,
			vScale: 1,
			shear: 0
		};
	}
	let i = qe(e.top, e.topLen, t), a = qe(e.bottom, e.bottomLen, t), o = a.x - i.x, s = a.y - i.y, c = i.x + o * r, l = i.y + s * r, u = i.tx + a.tx, d = i.ty + a.ty, f = Math.atan2(d, u), p = Math.cos(f), m = Math.sin(f), h = (p * o + m * s) / (n > 0 ? n : 1), g = (-m * o + p * s) / (n > 0 ? n : 1);
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
var Ze = 26, Qe = {
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
		fovDeg: Ze
	},
	perspectiveRelaxed: {
		kind: "perspective",
		baseLat: 0,
		baseLon: 0,
		baseRev: 0,
		fovDeg: Ze
	},
	perspectiveRelaxedModerately: {
		kind: "perspective",
		baseLat: 0,
		baseLon: 0,
		baseRev: 0,
		fovDeg: Ze
	},
	perspectiveAbove: {
		kind: "perspective",
		baseLat: -20,
		baseLon: 0,
		baseRev: 0,
		fovDeg: Ze
	},
	perspectiveBelow: {
		kind: "perspective",
		baseLat: 20,
		baseLon: 0,
		baseRev: 0,
		fovDeg: Ze
	},
	perspectiveLeft: {
		kind: "perspective",
		baseLat: 0,
		baseLon: -20,
		baseRev: 0,
		fovDeg: Ze
	},
	perspectiveRight: {
		kind: "perspective",
		baseLat: 0,
		baseLon: 20,
		baseRev: 0,
		fovDeg: Ze
	}
};
function $e(e, t) {
	let n = Array(9).fill(0);
	for (let r = 0; r < 3; r++) for (let i = 0; i < 3; i++) {
		let a = 0;
		for (let n = 0; n < 3; n++) a += e[r * 3 + n] * t[n * 3 + i];
		n[r * 3 + i] = a;
	}
	return n;
}
function et(e) {
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
function tt(e) {
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
function nt(e) {
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
function rt(e, t, n, r) {
	return [
		e[0] * t + e[1] * n + e[2] * r,
		e[3] * t + e[4] * n + e[5] * r,
		e[6] * t + e[7] * n + e[8] * r
	];
}
function it(e, t) {
	let n = t ? t.lat : e.baseLat, r = t ? t.lon : e.baseLon;
	return $e(nt(-(t ? t.rev : e.baseRev)), $e(et(-n), tt(-r)));
}
function at(e) {
	return Qe[e] || (e.startsWith("perspective") ? Qe.perspectiveFront : Qe.orthographicFront);
}
function ot(e, t, n) {
	let r = at(e.prst), i = it(r, e.rot);
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
			let [n, r, o] = rt(i, e, t, 0), s = a - o, c = a / (Math.abs(s) < 1e-6 ? 1e-6 * Math.sign(s || 1) : s);
			return [n * c, r * c];
		});
	} else u = s.map(([e, t]) => {
		let [n, r] = rt(i, e, t, 0);
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
function st(e) {
	let { isIdentity: t } = ot(e, 1e3, 1e3);
	return !t;
}
function ct(e, t, n, r) {
	let i = at(e.prst), a = it(i, e.rot);
	if (t <= 0 || n <= 0 || r === 0) return {
		x: 0,
		y: 0
	};
	let o = t / 2, s = n / 2, c = Math.max(o, s), l = e.zoom ?? 1, u = (t) => {
		let [n, r, o] = rt(a, 0, 0, t);
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
function lt(e, t) {
	if (t <= 0) return () => 1;
	let n = (e) => Math.max(0, Math.min(1, e / t));
	switch (e) {
		case "hardEdge": {
			let e = _t;
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
function ut(e) {
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
function dt(e, t = 3) {
	if (e <= 0) return Array(t).fill(1);
	let n = Math.sqrt(12 * e * e / t + 1), r = Math.floor(n);
	r % 2 == 0 && r--;
	let i = r + 2, a = (12 * e * e - t * r * r - 4 * t * r - 3 * t) / (-4 * r - 4), o = Math.round(a), s = [];
	for (let e = 0; e < t; e++) s.push(e < o ? r : i);
	return s;
}
function ft(e, t, n, r, i, a) {
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
function pt(e, t, n, r) {
	let i = Float64Array.from(e);
	if (r <= 0 || t <= 0 || n <= 0) return i;
	let a = new Float64Array(t * n);
	for (let e of dt(r, 3)) {
		let r = Math.max(1, (e - 1) / 2);
		ft(i, a, t, n, r, !0), ft(a, i, t, n, r, !1);
	}
	return i;
}
function mt(e, t, n, r = 128) {
	let i = new Float64Array(t * n);
	for (let a = 0; a < t * n; a++) i[a] = (e[a] ?? 0) >= r ? 0x56bc75e2d63100000 : 0;
	let a = new Float64Array(n);
	for (let e = 0; e < t; e++) {
		for (let r = 0; r < n; r++) a[r] = i[r * t + e];
		let r = ut(a);
		for (let a = 0; a < n; a++) i[a * t + e] = r[a];
	}
	let o = new Float64Array(t);
	for (let e = 0; e < n; e++) {
		for (let n = 0; n < t; n++) o[n] = i[e * t + n];
		let n = ut(o);
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
var ht = .25, gt = .35, _t = .5;
function vt(e, t, n, r, i, a) {
	let o = new Float32Array(t * n * 3), s = new Uint8Array(t * n), c = new Float32Array(t * n);
	if (t <= 0 || n <= 0) return {
		normals: o,
		bandMask: s,
		bandWeight: c
	};
	let l = mt(e, t, n), u = lt(i, r), d = (n, r) => (e[r * t + n] ?? 0) >= 128, f = (r > 0 ? a / r : 0) * r, p = pt(l, t, n, Math.max(1, r * ht)), m = (e) => {
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
		let g = u / r, _ = 1 - gt, v = 1;
		if (g > _) {
			let e = Math.min(1, (g - _) / gt);
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
var yt = 35 * Math.PI / 180, bt = 12 * Math.PI / 180, xt = {
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
function St(e, t, n) {
	let r = n * Math.PI / 180, i = Math.cos(r), a = Math.sin(r);
	return {
		x: e * i - t * a,
		y: e * a + t * i
	};
}
function Ct(e, t, n) {
	let r = xt[t] ?? xt.t;
	return n && n.rev && (r = St(r.x, r.y, n.rev)), Tt(r.x, r.y, yt);
}
function wt(e) {
	let t = Math.hypot(e.x, e.y) || 1;
	return Tt(-e.x / t, -e.y / t, bt);
}
function Tt(e, t, n) {
	let r = Math.hypot(e, t) || 1, i = Math.cos(n), a = Math.sin(n), o = e / r * i, s = t / r * i, c = a, l = Math.hypot(o, s, c) || 1;
	return {
		x: o / l,
		y: s / l,
		z: c / l
	};
}
var Et = 2, Dt = {
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
}, Ot = .8;
function kt(e) {
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
function At(e, t, n = !0) {
	let r = Dt[e], i = {
		light: t,
		material: e,
		ambient: r.ambient,
		diffuse: r.diffuse,
		specular: r.specular,
		shininess: r.shininess
	};
	return n && (i.fillLight = wt(t), i.fillDiffuse = i.diffuse * Ot), i;
}
function jt(e, t) {
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
function Mt(e, t, n) {
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
function Nt(e, t, n) {
	let r = e.canvas.width, i = e.canvas.height;
	if (r <= 0 || i <= 0) return;
	let a = t.widthPx;
	if (a < .75) return;
	let { x: o, y: s, w: c, h: l } = Mt(n, r, i);
	if (c <= 0 || l <= 0) return;
	let u = e.getImageData(o, s, c, l), d = u.data, f = new Uint8ClampedArray(c * l);
	for (let e = 0; e < c * l; e++) f[e] = d[e * 4 + 3];
	let { bandMask: p, bandWeight: m, normals: h } = vt(f, c, l, a, t.prst, t.heightPx), g = At(t.material, t.light), _ = jt({
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
		let o = 1 + (jt({
			x: r,
			y: i,
			z: a
		}, g) / _ - 1) * n, s = e * 4;
		if (o >= 1) {
			let e = Math.min(1, (o - 1) * Et);
			for (let t = 0; t < 3; t++) {
				let n = Math.min(255, d[s + t] * o);
				d[s + t] = n + (255 - n) * e;
			}
		} else d[s] = Math.max(0, d[s] * o), d[s + 1] = Math.max(0, d[s + 1] * o), d[s + 2] = Math.max(0, d[s + 2] * o);
	}
	e.putImageData(u, o, s);
}
function Pt(e, t, n) {
	let r = e.canvas.width, i = e.canvas.height;
	if (r <= 0 || i <= 0) return;
	let a = t.offsetX, o = t.offsetY, s = Math.hypot(a, o);
	if (s < .75) return;
	let { x: c, y: l, w: u, h: d } = Mt(n, r, i);
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
function Ft(e, t, n, r, i, a, o, s = 1) {
	let c = Math.max(1, i * .05), l = o === "heavy" || (o?.endsWith("Heavy") ?? !1) ? c * 1.8 : c, u = n + Math.max(2, l), d = V(u, l, s);
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
		e.beginPath(), e.moveTo(t, i + V(i, l, s)), e.lineTo(t + r, i + V(i, l, s)), e.moveTo(t, a + V(a, l, s)), e.lineTo(t + r, a + V(a, l, s)), e.stroke();
		return;
	}
	e.setLineDash(he(o ?? "sng", l)), e.beginPath(), e.moveTo(t, u + d), e.lineTo(t + r, u + d), e.stroke(), e.setLineDash([]);
}
//#endregion
//#region packages/core/src/text/highlight-box.ts
function It(e, t) {
	return {
		top: e - t * .85,
		height: t * 1.1
	};
}
//#endregion
//#region packages/core/src/text/justify-positions.ts
function Lt(e, t, n, r, i = 0) {
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
var Rt = .5;
function zt(e, t) {
	if (!(t > 0) || !(e.h > 0)) return [{
		y: e.y,
		h: Math.max(0, e.h),
		radius: 0
	}];
	let n = Math.max(4, Math.min(24, Math.ceil(t / Rt) + 1)), r = e.y + e.h, i = [];
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
function Bt(e, t, n, r, i) {
	for (let a of zt(n, r)) e.save(), e.beginPath(), e.rect(0, a.y, i, a.h), e.clip(), e.filter = a.radius > 0 ? `blur(${a.radius}px)` : "none", e.drawImage(t, 0, 0), e.restore();
}
//#endregion
//#region packages/pptx/src/hyperlink.ts
function Vt(e, t) {
	let n = e !== void 0 && e !== "" ? e : void 0, r = t !== void 0 && t !== "" ? t : void 0;
	if (n === void 0 && r === void 0) return;
	if (r !== void 0) return {
		kind: "internal",
		ref: n ?? r
	};
	let i = n, a = F(i);
	return a !== null && U.includes(a) ? {
		kind: "external",
		url: i
	} : {
		kind: "internal",
		ref: i
	};
}
//#endregion
//#region packages/pptx/src/media-chrome.ts
function Ht(e, t, n, r, i, a) {
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
var Ut = (e) => {
	let t = e.text;
	return typeof t == "string" ? t : void 0;
}, Wt = (e) => "isTab" in e;
function Gt(e) {
	for (let t of e) {
		let e = Ut(t);
		if (e !== void 0 && I(e)) return !0;
	}
	return !1;
}
function Kt(t, n) {
	let r = t.length;
	if (r === 0) return {
		order: [],
		rtl: []
	};
	let i = "", a = Array(r), o;
	for (let e = 0; e < r; e++) {
		a[e] = i.length;
		let n = Ut(t[e]) ?? "";
		if (i += n.length > 0 ? n : "￼", Wt(t[e])) {
			for (o ??= []; o.length < i.length;) o.push(null);
			o[a[e]] = "S";
		}
	}
	if (o) for (; o.length < i.length;) o.push(null);
	let { levels: s, paragraphLevel: c } = f().computeLevels(i, n ? "rtl" : "ltr", o), { order: l, segLevels: u } = e(s, c, a), d = Array(r);
	for (let e = 0; e < r; e++) d[e] = (u[e] & 1) == 1;
	return {
		order: l,
		rtl: d
	};
}
//#endregion
//#region packages/pptx/src/cjk-wrap.ts
function qt(e, t, n, r, a = 0, o = !1) {
	if (e.length === 0) return 0;
	let s = t === 0, c = 0, l = t;
	for (let t of e) {
		let e = c > 0 || o ? a : 0;
		if (l + e + t.w > n) {
			if (c > 0 || !s) break;
			l += e + t.w, c++;
			break;
		}
		l += e + t.w, c++;
	}
	return c === 0 ? 0 : c >= e.length ? e.length : i(e.map((e) => e.ch), c, r, +!!s);
}
//#endregion
//#region packages/pptx/src/text-justify.ts
var Jt = (e) => /\s/.test(String.fromCodePoint(e));
function Yt(e, t, n, r, i) {
	if (r === "just" && i) return null;
	let a = t - n;
	if (a <= .5) return null;
	let o = pe(e, a, {
		firstContentSi: 0,
		lastDrawnSi: e.length,
		isGapChar: q,
		isWhitespace: Jt,
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
function Xt(e) {
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
function Zt(e) {
	let t = Xt(e);
	return .299 * t.r + .587 * t.g + .114 * t.b;
}
function Qt(e, t) {
	if (!e && !t) return null;
	if (!e) return t;
	if (!t) return e;
	if (e.width !== t.width) return e.width > t.width ? e : t;
	let n = Zt(e.color), r = Zt(t.color);
	return n === r || n < r ? e : t;
}
//#endregion
//#region packages/pptx/src/smartart-fallback-contrast.ts
function $t(e) {
	let t = ee(e.length === 8 ? e.slice(0, 6) : e);
	if (!t) return null;
	let n = b(t[0], t[1], t[2]);
	if (e.length !== 8) return n;
	let r = Number.parseInt(e.slice(6, 8), 16);
	if (Number.isNaN(r)) return null;
	let i = r / 255;
	return i * n + (1 - i);
}
function en(e) {
	if (!e) return null;
	if (e.fillType === "solid") return $t(e.color);
	if (e.fillType === "gradient") {
		let t = e.stops.map((e) => ({
			p: Math.min(1, Math.max(0, e.position)),
			l: $t(e.color)
		})).filter((e) => e.l !== null).sort((e, t) => e.p - t.p);
		if (t.length === 0) return null;
		let n = t[0], r = t[t.length - 1], i = n.l * n.p + r.l * (1 - r.p);
		for (let e = 0; e + 1 < t.length; e++) i += (t[e].l + t[e + 1].l) / 2 * (t[e + 1].p - t[e].p);
		return i;
	}
	return null;
}
function tn(e) {
	return e.name === "SmartArt" && e.id === void 0;
}
function nn(e, t) {
	let n = en(e);
	if (n === null || n >= .5) return null;
	let r = $t(t.replace(/^#/, ""));
	return r !== null && r >= .5 ? null : "#FFFFFF";
}
//#endregion
//#region packages/pptx/src/tab-layout.ts
function rn(e, t, n, r, i, a = 0) {
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
var an = () => !1;
function on(e, t, n) {
	let r = e.textBaseline;
	e.textBaseline = "alphabetic";
	let i = e.measureText(t);
	e.textBaseline = r;
	let a = i.fontBoundingBoxAscent, o = i.fontBoundingBoxDescent;
	return typeof a == "number" && typeof o == "number" && (a !== 0 || o !== 0) ? (a - o) / 2 : .38 * n;
}
function sn(e, t) {
	let n = e.textAlign, r = e.textBaseline;
	e.textAlign = "center", e.textBaseline = "middle";
	let i = e.measureText(t);
	e.textAlign = n, e.textBaseline = r;
	let a = i.actualBoundingBoxAscent, o = i.actualBoundingBoxDescent;
	return typeof a == "number" && typeof o == "number" ? (a - o) / 2 : 0;
}
function cn(e, t, n, r, i, a, o = "fill", s = an) {
	let c = e.textAlign, l = e.textBaseline, u = o === "stroke" ? e.strokeText.bind(e) : e.fillText.bind(e), d = r - on(e, t, i), f = 0;
	for (let o of t) {
		let t = o.codePointAt(0) ?? 0, l = A(t), p = e.measureText(o).width + a, m = l === "Tr" ? G(t) : null, h = l === "Tr" && m === null && L(t), g = l === "U" || l === "Tu" || m !== null || h;
		if (B(t) && s(t)) {
			let t = n + f + p / 2;
			e.save(), e.translate(t, d), e.rotate(-Math.PI / 2), e.textAlign = "center", e.textBaseline = "middle", D(e, () => u(o, 0, 0)), e.restore();
		} else if (g) {
			let r = m === null && l === "Tu" ? k(t) : null, a = m === null ? r : m, s = a === null ? o : String.fromCodePoint(a), c = n + f + p / 2, h = r === null ? sn(e, s) / i : 0;
			e.save(), e.translate(c, d), e.rotate(-Math.PI / 2), e.textAlign = "center", e.textBaseline = "middle", u(s, 0, h * i), e.restore();
		} else if (l === "Tr") {
			let t = n + f + p / 2;
			e.textAlign = "center", e.textBaseline = "middle", u(o, t, d);
		} else e.textAlign = c, e.textBaseline = "alphabetic", u(o, n + f, r);
		f += p;
	}
	e.textAlign = c, e.textBaseline = l;
}
function ln(e, t, n, r, i, a, o = "fill") {
	cn(e, t, n, r, i, a, o, (t) => W(e, t));
}
//#endregion
//#region packages/pptx/src/renderer.ts
function X(e, t) {
	return e * t;
}
var Z = ge;
function un(e, t, n, r, i, a, o) {
	let { top: s, height: c } = It(n, i);
	e.fillStyle = a, e.fillRect(t, s, r, c), e.fillStyle = o;
}
function dn(e, t, n, r, i, a, o = 0) {
	return we(e, t, n, r, i, a, o);
}
var fn = /* @__PURE__ */ new WeakMap();
function pn(e, t) {
	let n = e.tinted.get(t);
	if (n) return n;
	let r = E(e.raster, t);
	return e.tinted.set(t, r), r;
}
function mn(e) {
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
async function hn(e, t) {
	let n = mn(e);
	if (n.length !== 0) {
		await t.loadMathJax();
		for (let e of n) if (!fn.has(e.nodes)) try {
			let n = await t.mathMLToSvg(K(e.nodes, e.display)), r = await M(n, "#000000");
			fn.set(e.nodes, {
				raster: r,
				widthEm: n.widthEm,
				ascentEm: n.ascentEm,
				descentEm: n.descentEm,
				tinted: /* @__PURE__ */ new Map()
			});
		} catch {}
	}
}
function gn(e, t) {
	return e ? e.startsWith("+") ? e === "+mj-lt" || e === "+mj-ea" || e === "+mj-cs" ? t.themeMajorFont ?? "sans-serif" : t.themeMinorFont ?? "sans-serif" : e.split(",")[0].trim() || (t.themeMinorFont ?? "sans-serif") : t.themeMinorFont ?? "sans-serif";
}
var _n = new Set([
	"serif",
	"sans-serif",
	"monospace",
	"cursive",
	"fantasy",
	"system-ui"
]);
function vn(e) {
	let t = s(e);
	return t === "mono" ? "monospace" : t === "serif" ? "serif" : "sans-serif";
}
var yn = {
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
}, bn = "\"Noto Naskh Arabic\", \"Noto Sans Arabic\"";
function xn(e) {
	if (yn[e.toLowerCase()]?.includes("Arabic")) return !0;
	let t = e.toLowerCase();
	return /arabic|naskh|kufi|nastaliq|amiri|scheherazade|lateef|aldhabi|urdu|farsi|العرب|[؀-ۿ]/.test(t);
}
function Sn(e) {
	return e.map((e) => `"${e}"`).join(", ");
}
function Cn(e) {
	let t = vn(e), r = yn[e.toLowerCase()], i = r ? `"${r}", ` : "";
	if (xn(e)) return `"${e}", ${i}${bn}, ${t}`;
	let a = t === "serif" ? "serif" : "sans", o = w(e);
	return `"${e}", ${i}${o ? `${Sn(S(o, a))}, ` : ""}${`${Sn(a === "serif" ? C : n)}, `}${t}`;
}
function wn(e) {
	return e ? e.kind === "external" ? `e:${e.url}` : `i:${e.ref}` : "";
}
function Tn(e) {
	let t = e.toLowerCase();
	return /\b(thin|hairline)\b/.test(t) ? 100 : /\b(extra[- ]?light|ultra[- ]?light)\b/.test(t) ? 200 : /\blight\b/.test(t) ? 300 : /\b(black|heavy)\b/.test(t) ? 900 : /\b(extra[- ]?bold|ultra[- ]?bold)\b/.test(t) ? 800 : /\b(semi[- ]?bold|demi[- ]?bold)\b/.test(t) ? 600 : /\bbold\b/.test(t) ? 700 : /\bmedium\b/.test(t) ? 600 : null;
}
function En(e, t, n, r, i, a, o, s) {
	let c = Math.max(0, r.blur * i), l = Math.ceil(c * 3) + 2, u = Math.max(0, Math.floor(n.x - l)), d = Math.max(0, Math.floor(n.y - l)), f = Math.min(o, Math.ceil(n.x + n.w + l)), p = Math.min(s, Math.ceil(n.y + n.h + l)), m = Math.max(1, f - u), h = Math.max(1, p - d), g = Ce(m, h), _ = g?.getContext("2d");
	if (!g || !_) return;
	_.save(), _.setTransform(a.a, a.b, a.c, a.d, a.e - u, a.f - d), t(_), _.restore();
	let v = n.y - d, y = v + n.h, b = g, x = _;
	if (c > 0) {
		let e = Ce(m, h), t = e?.getContext("2d");
		e && t && (b = e, x = t);
	}
	b !== g && Bt(x, g, {
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
function Dn(e, t, n, r, i) {
	let a = t ? "italic " : "", o = gn(r, i), s = Tn(o), c = e ? "bold " : s ? `${s} ` : "";
	return _n.has(o) ? `${a}${c}${n}px ${o}` : `${a}${c}${n}px ${Cn(o)}`;
}
function On(e) {
	return e.bullet.type === "char" || e.bullet.type === "autoNum" || Ie(e.bullet).type === "blip";
}
function kn(e, t) {
	return e ? 0 : Math.max(0, t);
}
function An(e, t, n, r, i, a, o) {
	let s = (t.defaultFontSize ?? 18) * Y * a;
	for (let c of t.paragraphs) {
		let l = X(c.marL, a), u = X(c.marR, a), d = X(c.indent, a), f = kn(On(c), d), p = n - r - i - l - u - f, m = 0;
		for (let n of c.runs) {
			if (n.type !== "text") continue;
			let r = n.fontSize == null ? c.defFontSize == null ? s : c.defFontSize * Y * a : n.fontSize * Y * a, i = gn(n.fontFamily ?? c.defFontFamily ?? null, o);
			e.font = Dn(n.bold ?? c.defBold ?? t.defaultBold ?? !1, n.italic ?? c.defItalic ?? t.defaultItalic ?? !1, r, i, o);
			let l = (n.letterSpacing ?? 0) * Y * a;
			if (m += Q(e, n.text, l), m > p) return !0;
		}
	}
	return !1;
}
function jn(e) {
	for (let t of e) if (q(t.codePointAt(0) ?? 0)) return !0;
	return !1;
}
function Mn(e) {
	let t = 0;
	for (let n of e) t++;
	return t;
}
var Nn = /* @__PURE__ */ new WeakMap();
function Pn(e) {
	let t = Nn.get(e);
	if (t != null) return t;
	let n = e, r = n.letterSpacing;
	if (typeof r != "string") return Nn.set(e, !1), !1;
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
	return Nn.set(e, i), i;
}
function Q(e, t, n) {
	let r = e, i = r.letterSpacing;
	if (n !== 0 && Pn(e)) try {
		r.letterSpacing = `${n}px`;
		let i = e.measureText(t).width;
		if (Number.isFinite(i)) return t.length > 0 ? i - n : i;
	} finally {
		try {
			r.letterSpacing = i;
		} catch {}
	}
	let a = Math.max(0, Mn(t) - 1);
	return e.measureText(t).width + n * a;
}
function Fn(e, t, n, i, a, o, s, c = !1, l = !1, u = 1, d, f = {
	themeMajorFont: null,
	themeMinorFont: null,
	dpr: 1
}, p = 0) {
	let m = [], g = /* @__PURE__ */ new Map(), _ = !0;
	for (let e = t.runs.length - 1; e >= 0 && _; e--) {
		let n = t.runs[e];
		if (n.type === "break") continue;
		if (n.type === "math") break;
		let r = n.text.replace(/ +$/u, "");
		r !== n.text && g.set(n, r), (r.length > 0 || n.fieldType != null) && (_ = !1);
	}
	let v = () => n - (m.length === 0 ? p : 0), b = { segments: [] }, x = 0, S = !1, C = t.rtl === !0, w = X(t.marR, o), E = (t.tabStops ?? []).map((e) => ({
		pos: X(e.pos, o),
		algn: e.algn
	})), D = X(t.defTabSz ?? 914400, o), O = !1, k = [], A = 0, M = () => C ? w : s + (m.length === 0 ? p : 0), P = (e = 0) => {
		let t = rn(e > 0 ? [...k, {
			isTab: !1,
			width: e
		}] : k, E, M(), Infinity, A, D), n = 0;
		for (let e of t) n += e;
		return n;
	}, F = (e) => {
		let t = v();
		return Number.isFinite(t) ? O ? P(e) <= t : x + e <= t : !0;
	}, I = () => {
		let e = v();
		if (!O) return e - x;
		if (!Number.isFinite(e)) return Infinity;
		if (P(0) >= e) return 0;
		let t = 0, n = e;
		for (let r = 0; r < 40; r++) {
			let r = (t + n) / 2;
			P(r) <= e ? t = r : n = r;
		}
		return t;
	}, L = (e = !1) => {
		e && (b.endsWithBreak = !0), m.push(b), b = { segments: [] }, x = 0, O = !1, k = [], S = !1;
	}, R = (t, n, r, i) => {
		e.font = n;
		let a = Q(e, t, r), o = b.segments.at(-1);
		return !o || o.isTab || o.math || o.sourceRunId !== i ? a : o.font === n && (o.letterSpacingPx ?? 0) === r ? Q(e, o.text + t, r) - Q(e, o.text, r) : a + r;
	}, z = (t, n, r, i, a, o, s, c) => {
		if (!t) return;
		e.font = n;
		let l = c?.letterSpacingPx ?? 0, u = c?.sourceRunId, d = c?.strikeDouble, f = c?.underlineStyle, p = c?.underlineColor, m = c?.shadow, h = c?.reflection, g = c?.outline, _ = c?.highlight, v = c?.fontFamily, y = c?.hyperlink, S = (e) => !e.math && !e.isTab && e.font === n && e.color === i && e.underline === a && (e.underlineStyle ?? "") === (f ?? "") && (e.underlineColor ?? "") === (p ?? "") && e.strikethrough === o && (e.strikeDouble ?? !1) === (d ?? !1) && (e.letterSpacingPx ?? 0) === l && e.baseline === s && e.shadow === m && e.reflection === h && e.outline === g && (e.highlight ?? "") === (_ ?? "") && (e.fontFamily ?? "") === (v ?? "") && wn(e.hyperlink) === wn(y) && (l === 0 || e.sourceRunId === u), C = b.segments.at(-1), w = Q(e, t, l);
		if (C && S(C) ? w = Q(e, C.text + t, l) - Q(e, C.text, l) : C && !C.isTab && !C.math && u != null && C.sourceRunId === u && (w += l), x += w, k.push({
			isTab: !1,
			width: w
		}), C && S(C)) C.text += t;
		else {
			let e = C && !C.isTab && !C.math && u != null && C.sourceRunId === u ? l : 0;
			b.segments.push({
				text: t,
				font: n,
				fontFamily: v,
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
				hyperlink: y
			});
		}
	}, B = () => {
		let e = b.segments.at(-1);
		if (!e || e.math) return !1;
		let t = /^(.*\s)(\S+)$/s.exec(e.text), n;
		if (t) e.text = t[1], n = t[2];
		else if (b.segments.length > 1) b.segments.pop(), n = e.text;
		else return !1;
		return L(), z(n, e.font, e.sizePx, e.color, e.underline, e.strikethrough, e.baseline, {
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
			L(!0);
			continue;
		}
		if (s.type === "math") {
			let e = fn.get(s.nodes), t = s.fontSize == null ? i : s.fontSize * Y * o * u, n = e ? e.widthEm * t : 0, r = e ? e.ascentEm * t : 0, c = e ? e.descentEm * t : 0;
			(s.display && x > 0 || !F(n) && x > 0) && L(), k.push({
				isTab: !1,
				width: n
			}), b.segments.push({
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
					ascent: r,
					descent: c
				}
			}), x += n, s.display && L();
			continue;
		}
		let p = s.fontSize == null ? i : s.fontSize * Y * o * u, m = gn(s.fontFamily ?? t.defFontFamily ?? null, f), _ = s.fontFamilyEa ? gn(s.fontFamilyEa, f) : null, C = s.fontFamilySym ? gn(s.fontFamilySym, f) : null, w;
		w = s.color ? Z(s.color) : s.hyperlink && f.themeHlinkColor ? Z(f.themeHlinkColor) : a;
		let E = s.bold ?? t.defBold ?? c, D = s.italic ?? t.defItalic ?? l, M = Dn(E, D, p, m, f), P = _ ? Dn(E, D, p, _, f) : M;
		e.font = M;
		let V = s.caps, H = g.get(s) ?? s.text;
		(V === "all" || V === "small") && (H = H.toUpperCase());
		let U = s.fieldType === "slidenum" && d !== void 0 ? String(d) : H, W = s.underline || s.hyperlink !== void 0, G = s.strikeDouble === !0, K = s.letterSpacing == null ? 0 : s.letterSpacing * Y * o, J = {
			strikeDouble: G,
			letterSpacingPx: K,
			underlineStyle: s.underlineStyle,
			underlineColor: s.underlineColor ? Z(s.underlineColor) : void 0,
			shadow: s.shadow,
			reflection: s.reflection,
			outline: s.outline,
			fontFamily: m,
			highlight: s.highlight ? Z(s.highlight) : void 0,
			hyperlink: Vt(s.hyperlink),
			sourceRunId: n
		}, ee = U.split(/(\s+)/);
		for (let i of ee) {
			if (!i) continue;
			if (/^\t+$/.test(i)) {
				O || (e.font = M, A = e.measureText(" ").width);
				for (let e of i) b.segments.push({
					text: "",
					isTab: !0,
					font: M,
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
			e.font = M;
			let a = R(i, M, K, n), o = /^\s+$/.test(i), c = /[-]/;
			if (c.test(i) && (C != null || me(m))) {
				let t = C ?? m;
				for (let r of i) {
					let i = r, a = M;
					if (c.test(r)) {
						let e = oe(r, t);
						e === r ? a = Dn(E, D, p, t, f) : (i = e, a = Dn(E, D, p, "sans-serif", f));
					}
					e.font = a, !F(R(i, a, K, n)) && x > 0 && L(), z(i, a, p, w, W, s.strikethrough, s.baseline ?? void 0, J);
				}
				continue;
			}
			if (jn(i) && (!N(i) || t.eaLnBrk === !1)) {
				let r = [];
				for (let t of i) {
					let n = q(t.codePointAt(0) ?? 0) && _ != null, i = n ? P : M, a = n ? _ : m;
					e.font = i, r.push({
						ch: t,
						w: Q(e, t, 0),
						font: i,
						family: a
					});
				}
				if (t.eaLnBrk === !1) {
					let e = b.segments.at(-1), t = !!e && !e.isTab && !e.math && e.sourceRunId === n, i = r.reduce((e, t) => e + t.w, 0) + Math.max(0, r.length - 1) * K + (t && r.length > 0 ? K : 0);
					x > 0 && !F(i) && L();
					for (let e of r) z(e.ch, e.font, p, w, W, s.strikethrough, s.baseline ?? void 0, {
						...J,
						fontFamily: e.family
					});
					continue;
				}
				let a = r;
				for (; a.length > 0;) {
					let e = Number.isFinite(v()) ? v() - I() : x, t = b.segments.at(-1), r = !!t && !t.isTab && !t.math && t.sourceRunId === n, i = qt(a, e, v(), h, K, r);
					if (i === 0) {
						if (x > 0) {
							L();
							continue;
						}
						i = 1;
					}
					for (let e = 0; e < i; e++) {
						let t = a[e];
						z(t.ch, t.font, p, w, W, s.strikethrough, s.baseline ?? void 0, {
							...J,
							fontFamily: t.family
						});
					}
					a = a.slice(i), a.length > 0 && L();
				}
				continue;
			}
			if (N(i)) {
				let t = y(i, {
					cjk: !0,
					kinsoku: h
				}), r = _ != null && P !== M, a = (e) => r && q(e.codePointAt(0) ?? 0), o = (t) => {
					let r = 0, i = b.segments.at(-1), o = !!i && !i.isTab && !i.math && i.sourceRunId === n, s = "", c = null, l = () => {
						s !== "" && (e.font = c ? P : M, r += Q(e, s, K), o && (r += K), o = !0, s = "");
					};
					for (let e of t) {
						let t = a(e);
						c === null || t === c ? (s += e, c = t) : (l(), s = e, c = t);
					}
					return l(), r;
				}, c = (e) => {
					let t = "", n = null, r = () => {
						if (t === "") return;
						let e = n ? P : M, r = n ? _ : m;
						z(t, e, p, w, W, s.strikethrough, s.baseline ?? void 0, {
							...J,
							fontFamily: r
						}), t = "";
					};
					for (let i of e) {
						let e = a(i);
						n === null || e === n ? (t += i, n = e) : (r(), t = i, n = e);
					}
					r();
				}, l = te(i), u = i.length, d = 0;
				for (; d < u;) {
					let e = I(), n = j(i, t, d, e, o, l);
					if (n <= d) {
						if (x > 0) {
							L();
							continue;
						}
						let r = t.find((e) => e > d) ?? u, a = i.slice(d, r), s = T(a), c = j(a, s, 0, e, o, l);
						c <= 0 && (c = s.length > 0 ? s[0] : a.length), n = d + c;
					}
					c(i.slice(d, n)), d = n, d < u && L();
				}
				continue;
			}
			if (F(a)) z(i, M, p, w, W, s.strikethrough, s.baseline ?? void 0, J), o && (S = !0);
			else if (o) x > 0 && L();
			else if (a > v()) {
				x > 0 && L();
				for (let t of i) e.font = M, !F(R(t, M, K, n)) && x > 0 && L(), z(t, M, p, w, W, s.strikethrough, s.baseline ?? void 0, J);
			} else if (!S) z(i, M, p, w, W, s.strikethrough, s.baseline ?? void 0, J);
			else {
				let e = b.segments.at(-1)?.text ?? "", t = i.codePointAt(0), n = [...e].at(-1)?.codePointAt(0), a = /\S$/u.test(e) && /^\S/u.test(i) && n !== 8203 && t !== 8203, o = t !== void 0 && h.lineStartForbidden.has(t) && a, c = n !== void 0 && t !== void 0 && a && !N(e) && !N(i) && r(n, t);
				(o || c) && B() || L(), z(i, M, p, w, W, s.strikethrough, s.baseline ?? void 0, J);
			}
		}
	}
	return m.push(b), m;
}
async function In(e, t, n, r, i, a, o) {
	if (t && t.fillType === "image") {
		if (e.fillStyle = "#FFFFFF", e.fillRect(0, 0, n, r), !t.imagePath || !t.mimeType || !o) return;
		try {
			let s = await Fe(t.imagePath, t.mimeType, t.duotone, o, {
				widthPt: n / i / Y,
				heightPt: r / i / Y
			});
			if (a() || !s) return;
			if (e.save(), e.beginPath(), e.rect(0, 0, n, r), e.clip(), t.alpha != null && (e.globalAlpha = t.alpha), t.tile) zn(e, s, t.tile, n, r, i);
			else {
				let i = t.fillRect ?? {}, a = i.l ?? 0, o = i.t ?? 0, c = i.r ?? 0, l = i.b ?? 0, u = a * n, d = o * r, f = n * (1 - a - c), p = r * (1 - o - l);
				e.drawImage(s, u, d, f, p);
			}
			e.restore();
		} catch (e) {
			if (xe(e)) throw e;
		}
		return;
	}
	e.fillStyle = dn(t, e, 0, 0, n, r) ?? "#FFFFFF", e.fillRect(0, 0, n, r);
}
var Ln = 9525;
function Rn(e, t, n, r, i) {
	let a;
	a = e === "t" || e === "ctr" || e === "b" ? (t - r) / 2 : e === "tr" || e === "r" || e === "br" ? t - r : 0;
	let o;
	return o = e === "l" || e === "ctr" || e === "r" ? (n - i) / 2 : e === "bl" || e === "b" || e === "br" ? n - i : 0, {
		ax: a,
		ay: o
	};
}
function zn(e, t, n, r, i, a) {
	let o = t.width * Ln * (n.sx ?? 1) * a, s = t.height * Ln * (n.sy ?? 1) * a;
	if (!(o > 0) || !(s > 0)) return;
	let c = n.flip === "x" || n.flip === "xy", l = n.flip === "y" || n.flip === "xy", u = Ce(o * (c ? 2 : 1), s * (l ? 2 : 1));
	if (!u) return;
	let d = u.getContext("2d");
	if (!d) return;
	let f = (e, n, r, i) => {
		d.save(), d.translate(e + (r ? o : 0), n + (i ? s : 0)), d.scale(r ? -1 : 1, i ? -1 : 1), d.drawImage(t, 0, 0, o, s), d.restore();
	};
	f(0, 0, !1, !1), c && f(o, 0, !0, !1), l && f(0, s, !1, !0), c && l && f(o, s, !0, !0);
	let p = e.createPattern(u, "repeat");
	if (!p) return;
	let { ax: m, ay: h } = Rn(n.algn ?? "tl", r, i, o, s), g = m + X(n.tx ?? 0, a), _ = h + X(n.ty ?? 0, a);
	typeof p.setTransform == "function" && typeof DOMMatrix < "u" ? (p.setTransform(new DOMMatrix().translateSelf(g, _)), e.fillStyle = p, e.fillRect(0, 0, r, i)) : (e.save(), e.translate(g, _), e.fillStyle = p, e.fillRect(-g, -_, r, i), e.restore());
}
function Bn(e, t, n) {
	if (!t) return;
	let r = t.dir * Math.PI / 180, i = X(t.dist, n);
	e.shadowColor = Z(t.color, t.alpha), e.shadowBlur = 0, e.shadowOffsetX = Math.cos(r) * i, e.shadowOffsetY = Math.sin(r) * i;
}
function Vn(e, t, n) {
	t && (e.shadowColor = Z(t.color, t.alpha), e.shadowBlur = X(t.radius, n), e.shadowOffsetX = 0, e.shadowOffsetY = 0);
}
function Hn(e) {
	e.shadowColor = "transparent", e.shadowBlur = 0, e.shadowOffsetX = 0, e.shadowOffsetY = 0;
}
var Un = 8, Wn = 1, Gn = 1, Kn = 256;
function qn(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m) {
	if (r <= 0) return;
	let h = e.measureText(t), g = h.actualBoundingBoxAscent > 0 ? h.actualBoundingBoxAscent : r, _ = h.actualBoundingBoxDescent > 0 ? h.actualBoundingBoxDescent : r * .25, v = h.actualBoundingBoxLeft > 0 ? h.actualBoundingBoxLeft : 0, y = h.actualBoundingBoxRight > 0 ? h.actualBoundingBoxRight : r, b = r * l * i, x = Math.min(Kn, Math.max(1, Math.round(b / Un))), S = (e) => Xn(e, a, r, o, s, c, u, d), C = S(x), w = Qn(C, a, o, s, c, u, d, l, i, -g, _);
	for (; w > Gn && x < Kn;) {
		let e = Math.min(Kn, x * 2), t = S(e), n = Qn(t, a, o, s, c, u, d, l, i, -g, _);
		if (n >= w * .75) {
			C = t;
			break;
		}
		x = e, C = t, w = n;
	}
	let T = 1e4, E = Wn / (l * i), D = C.length - 1, O = (e, t, n) => e === 0 ? -T : t - n - E, k = (e, t, n) => e === D ? T : t - n + E, A = (e, r) => {
		e.fillStyle = r;
		for (let r = 0; r <= D; r++) {
			let { s0: i, s1: a, g: o } = C[r], s = (i + a) / 2;
			e.save(), e.translate(f + o.x, p + o.y), e.rotate(o.angle), o.shear !== 0 && e.transform(1, 0, o.shear, 1, 0, 0), (l !== 1 || o.vScale !== 1) && e.scale(l, o.vScale), e.beginPath();
			let c = O(r, i, s), u = k(r, a, s);
			e.rect(c, -T, u - c, 2 * T), e.clip(), e.fillText(t, -s + n / 2, 0), e.restore();
		}
	}, j = Jn(m), M = typeof e.globalAlpha == "number" ? e.globalAlpha : 1;
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
			let n = Zn(i, l, e, t), r = f + n.x, a = p + n.y, o = N.a * r + N.c * a + N.e, s = N.b * r + N.d * a + N.f;
			o < P && (P = o), o > I && (I = o), s < F && (F = s), s > L && (L = s);
		}
	}
	if (!(I > P && L > F)) return;
	let R = Math.floor(P - 2), z = Math.floor(F - 2), B = Ce(Math.ceil(I + 2) - R, Math.ceil(L + 2) - z), V = B ? B.getContext("2d") : null;
	if (!B || !V) {
		A(e, m);
		return;
	}
	V.font = e.font, V.textAlign = "left", V.textBaseline = "alphabetic", V.setTransform(N.a, N.b, N.c, N.d, N.e - R, N.f - z), A(V, Yn(m)), e.save(), e.setTransform(1, 0, 0, 1, 0, 0), e.globalAlpha = M * j, e.drawImage(B, R, z), e.restore();
}
function Jn(e) {
	let t = /^rgba?\(\s*[\d.]+\s*,\s*[\d.]+\s*,\s*[\d.]+\s*,\s*([\d.]+)\s*\)$/i.exec(e);
	if (!t) return 1;
	let n = parseFloat(t[1]);
	return Number.isFinite(n) ? Math.min(1, Math.max(0, n)) : 1;
}
function Yn(e) {
	let t = /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i.exec(e);
	return t ? `rgb(${t[1]}, ${t[2]}, ${t[3]})` : e;
}
function Xn(e, t, n, r, i, a, o, s) {
	let c = Array(e);
	for (let l = 0; l < e; l++) {
		let u = l / e * n, d = (l + 1) / e * n;
		c[l] = {
			s0: u,
			s1: d,
			g: Xe(t, (r + (u + d) / 2) / i * a, o, s)
		};
	}
	return c;
}
function Zn(e, t, n, r) {
	let i = n * t, a = r * e.vScale, o = i + e.shear * a, s = Math.cos(e.angle), c = Math.sin(e.angle);
	return {
		x: e.x + s * o - c * a,
		y: e.y + c * o + s * a
	};
}
function Qn(e, t, n, r, i, a, o, s, c, l, u) {
	let d = 0;
	for (let f of e) {
		let e = (f.s0 + f.s1) / 2;
		for (let p of [f.s0, f.s1]) {
			let m = Xe(t, (n + p) / r * i, a, o);
			for (let t of [l, u]) {
				let n = Zn(m, s, 0, t), r = Zn(f.g, s, p - e, t), i = Math.hypot(r.x - n.x, r.y - n.y) * c;
				i > d && (d = i);
			}
		}
	}
	return d;
}
function $n(e, t, n, r, i, a, o, s, c, l, u) {
	let d = i, f = a, p = Math.max(1, o), m = Math.max(1, s), h = Ke(n, r, p, m);
	if (!h) return;
	let g = t.defaultBold ?? !1, _ = t.defaultItalic ?? !1, v = (t.defaultFontSize ?? 18) * Y * c, y = [];
	for (let n of t.paragraphs) {
		let t = Fn(e, n, Infinity, n.defFontSize == null ? v : n.defFontSize * Y * c, n.defColor ? Z(n.defColor) : l, c, 0, g, _, 1, void 0, u, 0);
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
			a += r.width + n * Mn(t.text), o = Math.max(o, t.sizePx), r.actualBoundingBoxAscent > 0 && (s = Math.max(s, r.actualBoundingBoxAscent)), r.actualBoundingBoxDescent > 0 && (c = Math.max(c, r.actualBoundingBoxDescent));
		}
		if (a <= 0) continue;
		let l = s + c > 0 ? s + c : o, u = h.singleEdge ? .8 : l > 0 ? s / l : .8, g = h.singleEdge ? 1 : p / a, _ = h.singleEdge ? m : l / (i - r), v = Ye(h, a), b = 0;
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
					qn(e, s, n, o, x(), h, b, a, v, g, _, c, d, f, t.color), b += o;
					continue;
				}
				let l = Xe(h, (b + o / 2) / a * v, _, c);
				e.save(), e.translate(d + l.x, f + l.y), e.rotate(l.angle), l.shear !== 0 && e.transform(1, 0, l.shear, 1, 0, 0), (g !== 1 || l.vScale !== 1) && e.scale(g, l.vScale), e.fillText(s, -o / 2 + n / 2, 0), e.restore(), b += o;
			}
		}
	}
	e.restore();
}
function er(e, t, n, r, i, a, o) {
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
function tr(e, t) {
	return e.defaultTextColor ? Z(e.defaultTextColor) : t.smartArtFallbackTextColor != null && tn(e) ? t.smartArtFallbackTextColor : null;
}
function nr(e, t, n) {
	return {
		outerRotation: e,
		localFlipH: t,
		localFlipV: n
	};
}
function rr(e, t, n, r, i) {
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
var ir = {
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
function ar(e, t, n) {
	return [e.a * t + e.c * n + e.e, e.b * t + e.d * n + e.f];
}
function or(e, t, n, r, i, a) {
	let [o, s] = ir[a ?? "b"];
	return ar(e, t + o * r, n + s * i);
}
function sr(e, t, n, r, i, a, o, s) {
	let c = ot(e, i, a).corners, l = (o > 0 ? Ne(c, o / i, o / a) ?? c : c).map((e) => ar(t, n + e.x, r + e.y)), u = l.map(([e]) => e), d = l.map(([, e]) => e), f = Math.min(...u), p = Math.min(...d), m = Math.max(...u), h = Math.max(...d), [g, _] = ir[s ?? "b"], v = Ae(c, g, _);
	return {
		bbox: {
			x: f,
			y: p,
			w: m - f,
			h: h - p
		},
		anchor: v ? ar(t, n + v.x, r + v.y) : or(t, n, r, i, a, s)
	};
}
function cr(e, t, n, r) {
	let i = Math.floor(n.x) - 1, a = Math.floor(n.y) - 1, o = Math.max(1, Math.ceil(n.x + n.w) - i + 1), s = Math.max(1, Math.ceil(n.y + n.h) - a + 1);
	if (r && (i + o <= 0 || a + s <= 0 || i >= r.w || a >= r.h) || ke(o, s).clamped) return e;
	let c = null;
	try {
		c = Ce(o, s);
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
function lr(e, t, n, r, i, a, o, s, c, l = !0, u = r) {
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
	t.shadow && p ? (e.save(), e.setTransform(m), y = !Me(e, g, i, t.shadow, s, d, f, Math.atan2(c.b, c.a) * 180 / Math.PI, a), e.restore()) : t.shadow && (y = !0), t.reflection && p && (e.save(), e.setTransform(m), De(e, g, i, t.reflection, s, d, f), e.restore()), y ? Bn(e, t.shadow ?? null, o) : t.glow && Vn(e, t.glow, o), t.softEdge && p ? (e.save(), e.setTransform(m), Oe(e, g, i, t.softEdge, s, d, f, _), e.restore()) : n(e), (y || t.glow) && Hn(e), t.innerShadow && l && p && (e.save(), e.setTransform(m), je(e, v, i, t.innerShadow, s, d, f), e.restore());
}
function ur(e, t, n, r = "#000000", i, a = {
	themeMajorFont: null,
	themeMinorFont: null,
	dpr: 1
}, s, c) {
	let u = X(t.x, n), f = X(t.y, n), p = X(t.width, n), m = X(t.height, n), h = s && t.id !== void 0 ? (e) => s({
		...e,
		shapeId: t.id
	}) : s;
	if (m === 0 && t.textBody?.verticalAnchor === "b") {
		if (t.stroke && (e.save(), Dr(e, t.stroke, n, {
			x: u,
			y: f,
			w: p,
			h: 1
		}, t.rotation), e.beginPath(), e.moveTo(u, f), e.lineTo(u + p, f), e.stroke(), e.restore()), t.textBody) {
			let o = tr(t, a);
			gr(e, t.textBody, u, f, p, m, n, o, t.rotation, t.flipH, t.flipV, r, i, a, h, !1, c);
		}
		return;
	}
	let g = t.scene3d && st(t.scene3d.camera) ? t.scene3d : null;
	if (g && p > 0 && m > 0) {
		let o = e.getTransform(), s = Math.abs(o.a * o.d - o.b * o.c), c = s > 0 ? Math.sqrt(s) : 1, l = _r(t.sp3d, t.scene3d?.lightRig, t.sp3d?.prstMaterial, n, c), d = vr(t.sp3d, g.camera, p, m, n, c), h = nr(t.rotation, t.flipH, t.flipV);
		e.save(), h.outerRotation !== 0 && (e.translate(u + p / 2, f + m / 2), e.rotate(h.outerRotation * Math.PI / 180), e.translate(-(u + p / 2), -(f + m / 2)));
		let _ = {
			...t,
			x: 0,
			y: 0,
			rotation: 0,
			flipH: h.localFlipH,
			flipV: h.localFlipV,
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
		}, b = (t.stroke ? t.stroke.width * n / 2 : 0) + (t.sp3d?.contourW ? t.sp3d.contourW * n : 0) + (d ? Math.hypot(d.offsetX, d.offsetY) / c : 0) + 2, x = (e, t, o) => yr(e, g.camera, u, f, p, m, (e) => {
			ur(e, t, n, r, i, a, void 0);
		}, o ? {
			bevels: l,
			extrusion: d ?? void 0,
			edgePadCss: b
		} : {}), S = (e) => x(e, v, !0), C = (e) => !t.textBody || x(e, y, !1);
		if (t.shadow || t.innerShadow || t.glow || t.softEdge || t.reflection) {
			let r = e.getTransform(), i = Math.abs(r.a * r.d - r.b * r.c), a = i > 0 ? Math.sqrt(i) : 1, o = sr(g.camera, r, u, f, p, m, b, t.shadow?.algn), s = !1, c = cr((e) => {
				s = S(e) || s;
			}, r, o.bbox, {
				w: e.canvas.width || 0,
				h: e.canvas.height || 0
			});
			if (lr(e, t, c, c, o.bbox, o.anchor, n, n * a, r, !!t.fill), s) {
				C(e), e.restore();
				return;
			}
		} else if (x(e, _, !0)) {
			e.restore();
			return;
		}
		e.restore();
	}
	e.save(), (t.rotation !== 0 || t.flipH || t.flipV) && (e.translate(u + p / 2, f + m / 2), e.rotate(t.rotation * Math.PI / 180), t.flipH && e.scale(-1, 1), t.flipV && e.scale(1, -1), e.translate(-(u + p / 2), -(f + m / 2)));
	let v = t.geometry.toLowerCase(), y = dn(t.fill, e, u, f, p, m, t.rotation);
	t.shadow || Vn(e, t.glow ?? null, n);
	let b = new Set([
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
	]), x = new Set([
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
	]), S = (e) => x.has(e) || e === "line" || e === "straightconnector1" || e.startsWith("bentconnector"), C = !t.custGeom && l(v), w = (r, i, a = {
		x: u,
		y: f,
		w: p,
		h: m
	}) => {
		let { x: o, y: s, w: c, h: l } = a, h = i ?? (r === e && o === u && s === f && c === p && l === m ? y : dn(t.fill, r, o, s, c, l, t.rotation)), g = i ? null : t.stroke ? () => {
			Dr(r, t.stroke, n, {
				x: o,
				y: s,
				w: c,
				h: l
			}, t.rotation), r.stroke();
		} : null, _ = () => Hn(r);
		if (C && !i) {
			d(r, v, o, s, c, l, [
				t.adj,
				t.adj2,
				t.adj3,
				t.adj4,
				t.adj5,
				t.adj6,
				t.adj7,
				t.adj8
			], h, g, _, S(v) ? { skipTrailingStroke: !0 } : void 0);
			return;
		}
		r.beginPath(), t.custGeom && t.custGeom.length > 0 ? dr(r, t.custGeom, o, s, c, l) : ue(r, v, o, s, c, l, t.adj, t.adj2, t.adj3, t.adj4), h && v !== "arc" && (r.fillStyle = h, v === "donut" || v === "smileyface" || v === "frame" ? r.fill("evenodd") : r.fill(), i || _()), g && g();
	}, T = e.getTransform(), E = Math.abs(T.a * T.d - T.b * T.c), D = E > 0 ? Math.sqrt(E) : 1, O = (t.shadow || t.reflection || t.softEdge || t.innerShadow ? C ? o(v, u, f, p, m, [
		t.adj,
		t.adj2,
		t.adj3,
		t.adj4,
		t.adj5,
		t.adj6,
		t.adj7,
		t.adj8
	]) : t.custGeom && t.custGeom.length > 0 ? ce(t.custGeom, u, f, p, m) : null : null) ?? {
		x: u,
		y: f,
		w: p,
		h: m
	}, k = t.stroke ? t.stroke.width * n / 2 : 0, A = t.stroke ? Math.max(t.stroke.headEnd ? de(t.stroke.headEnd, t.stroke, n) : 0, t.stroke.tailEnd ? de(t.stroke.tailEnd, t.stroke, n) : 0) : 0, j = t.sp3d?.contourW ? t.sp3d.contourW * n : 0, M = Math.max(k, A, j), N = M > 0 ? {
		x: O.x - M,
		y: O.y - M,
		w: O.w + M * 2,
		h: O.h + M * 2
	} : O, P = rr(T, N.x, N.y, N.w, N.h), F = n * D, I = g ? [] : _r(t.sp3d, t.scene3d?.lightRig, t.sp3d?.prstMaterial, n, D), L = (t.stroke ? t.stroke.width * n / 2 : 0) + 2, R = (e) => {
		let r = t.stroke?.fill ? dn(t.stroke.fill, e, u, f, p, m, t.rotation) ?? void 0 : void 0;
		if (t.stroke && (b.has(v) || x.has(v))) {
			let i = _(v, u, f, p, m, [
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
			let a = t.stroke.cmpd, o = v === "line" || v === "straightconnector1";
			if (S(v) && i.vertices.length >= 2 && !(a && o)) {
				let r = i.vertices.map((e) => ({
					x: e.x,
					y: e.y
				}));
				if (t.stroke.tailEnd) {
					let e = se(t.stroke.tailEnd, t.stroke, n);
					r[r.length - 1] = ie(r[r.length - 1], r[r.length - 2], e);
				}
				if (t.stroke.headEnd) {
					let e = se(t.stroke.headEnd, t.stroke, n);
					r[0] = ie(r[0], r[1], e);
				}
				Dr(e, t.stroke, n, {
					x: u,
					y: f,
					w: p,
					h: m
				}, t.rotation), e.beginPath(), e.moveTo(r[0].x, r[0].y);
				for (let t = 1; t < r.length; t++) e.lineTo(r[t].x, r[t].y);
				e.stroke();
			}
			a && o && Er(e, i.start, i.end, t.stroke, a, n, t.rotation), t.stroke.tailEnd && le(e, i.end.x, i.end.y, i.end.angle, t.stroke.tailEnd, t.stroke, n, r), t.stroke.headEnd && le(e, i.start.x, i.start.y, i.start.angle, t.stroke.headEnd, t.stroke, n, r);
			return;
		}
		if (!t.stroke || !t.custGeom || t.custGeom.length === 0 || (!t.stroke.headEnd || t.stroke.headEnd.type === "none") && (!t.stroke.tailEnd || t.stroke.tailEnd.type === "none")) return;
		let { start: i, end: a } = fe(t.custGeom);
		i && t.stroke.headEnd && t.stroke.headEnd.type !== "none" && le(e, u + i.x * p, f + i.y * m, Math.atan2(i.dy * m, i.dx * p), t.stroke.headEnd, t.stroke, n, r), a && t.stroke.tailEnd && t.stroke.tailEnd.type !== "none" && le(e, u + a.x * p, f + a.y * m, Math.atan2(a.dy * m, a.dx * p), t.stroke.tailEnd, t.stroke, n, r);
	}, z = (e) => {
		if (I.length > 0 && br(e, u, f, p, m, I, (e, t, n, r, i) => w(e, void 0, {
			x: t,
			y: n,
			w: r,
			h: i
		}), void 0, L)) {
			R(e), Hn(e);
			return;
		}
		w(e), R(e);
	};
	if (lr(e, t, z, z, P, or(T, u, f, p, m, t.shadow?.algn), n, F, T, !!y, (e) => w(e, "#000")), t.textBody) {
		let o = tr(t, a);
		if (e.save(), t.flipH || t.flipV) {
			let n = u + p / 2, r = f + m / 2;
			e.translate(n, r), t.flipH && e.scale(-1, 1), t.flipV && e.scale(1, -1), e.translate(-n, -r);
		}
		let s = u, l = f, d = p, g = m;
		if (t.textRect) s = X(t.textRect.x, n), l = X(t.textRect.y, n), d = X(t.textRect.width, n), g = X(t.textRect.height, n);
		else if (v === "ellipse") {
			let e = p * (1 - 1 / Math.SQRT2) / 2, t = m * (1 - 1 / Math.SQRT2) / 2;
			s = u + e, l = f + t, d = p / Math.SQRT2, g = m / Math.SQRT2;
		} else {
			let e = er(v, u, f, p, m, t.adj, t.adj2);
			e && (s = e.tx, l = e.ty, d = e.tw, g = e.th);
		}
		gr(e, t.textBody, s, l, d, g, n, o, t.rotation, !1, !1, r, i, a, h, !1, c), e.restore();
	}
	e.restore();
}
var dr = ae;
function fr(e, t) {
	let n = `${e}`, r = e >= 1 && e <= 26 ? String.fromCharCode(96 + e) : n, i = e >= 1 && e <= 26 ? String.fromCharCode(64 + e) : n, a = pr(e).toLowerCase(), o = pr(e), s = n.replace(/[0-9]/g, (e) => String.fromCharCode(65296 + (e.charCodeAt(0) - 48)));
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
function pr(e) {
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
function mr(e) {
	for (let t of e.runs) if (t.type === "text" && t.text !== "" || t.type === "math") return !0;
	return !1;
}
function hr(e, t) {
	let n = mr(e);
	if (e.bullet.type === "char") return t.clear(), n ? oe(e.bullet.char, e.bullet.fontFamily ?? null) : "";
	if (e.bullet.type === "autoNum") {
		if (!n) return "";
		let r = e.lvl;
		return t.has(r) ? t.set(r, t.get(r) + 1) : t.set(r, e.bullet.startAt ?? 1), fr(t.get(r), e.bullet.numType);
	}
	return t.clear(), "";
}
function gr(e, n, r, i, a, o, s, c = null, l = 0, u = !1, d = !1, f = "#000000", p, m = {
	themeMajorFont: null,
	themeMinorFont: null,
	dpr: 1
}, h, g = !1, _, v = !1, y = g) {
	let b = n.vert === "vert" || n.vert === "eaVert", x = n.vert === "vert270";
	if (b || x) {
		let t = r + a / 2, u = i + o / 2, d = b ? 90 : -90, v = h ? (e) => h({
			...e,
			inShapeX: e.inShapeX - o / 2 + a / 2,
			inShapeY: e.inShapeY - a / 2 + o / 2,
			shapeX: r,
			shapeY: i,
			shapeW: a,
			shapeH: o,
			rotation: l,
			textBodyRotation: d
		}) : void 0;
		if (g) return a;
		e.save(), e.translate(t, u), e.rotate(x ? -Math.PI / 2 : Math.PI / 2), gr(e, {
			...n,
			vert: "horz"
		}, -o / 2, -a / 2, o, a, s, c, 0, !1, !1, f, p, m, v, !1, _, n.vert === "eaVert"), e.restore();
		return;
	}
	let S = n.textWarp;
	if (!g && S && Ve(S.preset)) {
		$n(e, n, S.preset, S.adj ?? [], r, i, a, o, s, c ?? f, m);
		return;
	}
	let C = X(n.lIns, s), w = X(n.rIns, s), T = X(n.tIns, s), E = X(n.bIns, s), D = n.wrap !== "none", O = n.autoFit === "sp" ? D && An(e, n, a, C, w, s, m) : D, k = Math.max(1, n.numCol ?? 1), A = X(n.spcCol ?? 0, s), j = n.defaultBold ?? !1, M = n.defaultItalic ?? !1, N = c ?? f, P = (t) => {
		let i = (n.defaultFontSize ?? 18) * Y * s * t, o = [], c = 0, l = /* @__PURE__ */ new Map();
		for (let u = 0; u < n.paragraphs.length; u++) {
			let d = n.paragraphs[u], f = X(d.marL, s), h = X(d.marR, s), _ = X(d.indent, s), v = d.defFontSize == null ? i : d.defFontSize * Y * s * t, b = d.defColor ? Z(d.defColor) : N, x = On(d), S = (() => {
				for (let e of d.runs) if (e.type === "text" && e.fontSize != null) return e.fontSize;
				return null;
			})(), T = S == null ? v : S * Y * s * t, E = (() => {
				for (let e of d.runs) if (e.type === "text" && e.color) return e.color;
				return null;
			})(), D = E ? Z(E) : b, P = (() => {
				for (let e of d.runs) if (e.type === "text" && e.fontFamily) return e.fontFamily;
				return d.defFontFamily ?? null;
			})(), F = "", I = Dn(!1, !1, T, "sans-serif", m), L = D, R = null;
			F = hr(d, l);
			let B = Ie(d.bullet);
			if (B.type === "char") {
				let e = B;
				I = Dn(!1, !1, e.sizePts == null ? e.sizePct == null ? T : T * (e.sizePct / 100) : e.sizePts * Y * s * t, F === e.char ? gn(e.fontFamily ?? null, m) : "sans-serif", m), L = e.color ? Z(e.color) : D;
			} else if (B.type === "autoNum") {
				let e = B;
				I = Dn(!1, !1, e.sizePts == null ? e.sizePct == null ? T : T * (e.sizePct / 100) : e.sizePts * Y * s * t, gn(e.fontFamily ?? P, m), m), L = B.color ? Z(B.color) : D;
			} else if (B.type === "blip") {
				let e = B, n = e.sizePts == null ? e.sizePct == null ? T : T * (e.sizePct / 100) : e.sizePts * Y * s * t;
				R = {
					imagePath: e.imagePath,
					mimeType: e.mimeType,
					sizePx: n
				};
			}
			let V = k > 1 ? (a - C - w - (k - 1) * A) / k : a - C - w, H = r + C + f, U = r + C + f + _, W = V - f - h, G = Fn(e, d, O ? W : Infinity, v, b, s, f, j, M, t, p, m, kn(x, _)), K = d.spaceBefore == null ? 0 : d.spaceBefore / 100 * Y * s * t, q = d.spaceAfter == null ? 0 : d.spaceAfter / 100 * Y * s * t;
			for (let t = 0; t < G.length; t++) {
				let r = G[t], i = t === 0, a = t === G.length - 1, l = 0, f = 0;
				for (let e of r.segments) {
					let t = e.math ? Math.max(e.sizePx, (e.math.ascent + e.math.descent) / 1.2) : e.sizePx;
					if (t > l && (l = t), !e.math) {
						let t = z(e.fontFamily, e.sizePx);
						t > f && (f = t);
					}
				}
				if (l === 0 && (l = v), i && F) {
					e.font = I;
					let t = e.measureText("M"), n = t.actualBoundingBoxAscent + t.actualBoundingBoxDescent;
					n > l && (l = n);
				}
				i && R && R.sizePx > l && (l = R.sizePx);
				let p = l * 1.2, m = Math.max(p, f), h;
				h = d.spaceLine ? d.spaceLine.type === "pct" ? (g ? l : p) * (d.spaceLine.val / 1e5) : d.spaceLine.val * Y * s : g ? y ? p : l : m, n.autoFit === "norm" && n.lnSpcReduction != null && d.spaceLine?.type !== "pts" && (h *= 1 - n.lnSpcReduction);
				let b = h + (a ? q : 0), S = i && u > 0 ? K : 0, C = i ? kn(x, _) : 0, w = r.segments.some((e) => e.text && e.text.length > 0 || e.math != null), T = i && w ? R : null;
				o.push({
					line: r,
					linePx: b,
					lineHeight: h,
					topGapPx: S,
					textXOffset: C,
					bulletLabel: i ? F : "",
					bulletFont: I,
					bulletColor: L,
					bulletX: U,
					bulletImage: T,
					textX: H,
					textMaxW: W,
					alignment: d.alignment,
					isLastLine: a,
					para: d
				}), c += b + S;
			}
		}
		return {
			allLines: o,
			totalHeight: c
		};
	}, { allLines: F, totalHeight: I } = P(1);
	if (n.autoFit === "norm") if (n.fontScale != null && n.fontScale > 0) n.fontScale < 1 && ({allLines: F, totalHeight: I} = P(n.fontScale));
	else {
		let e = o - T - E;
		if (I > e && e > 0) {
			let t = .1, n = 1;
			for (let r = 0; r < 6; r++) {
				let r = (t + n) / 2;
				P(r).totalHeight <= e ? t = r : n = r;
			}
			({allLines: F, totalHeight: I} = P(t));
		}
	}
	if (g) return T + I + E;
	let L = n.verticalAnchor ?? "t", R = i, B;
	o === 0 && L === "b" ? (B = T + I + E, R = i - B) : B = n.autoFit === "sp" ? Math.max(o, T + I + E) : o;
	let H, U = Math.max(0, B - T - E);
	H = L === "ctr" ? R + T + (U - I) / 2 : L === "b" ? R + B - E - I : R + T, e.save(), e.textAlign = "left", e.textBaseline = "alphabetic";
	let W = H, G = k > 1 ? (a - C - w - (k - 1) * A) / k + A : 0, K = Math.max(0, B - T - E), q = F[F.length - 1], J = q ? Math.max(0, q.linePx - q.lineHeight) : 0, ee = I - J, te = o === 0 || ee <= K + .5, ne = k > 1 && !te ? Math.ceil(F.length / k) : F.length, re = 0, ie = 0;
	for (let c of F) {
		let { line: u, linePx: d, lineHeight: f, topGapPx: p, textXOffset: g, bulletLabel: y, bulletFont: b, bulletColor: x, bulletImage: S, alignment: C, isLastLine: w } = c;
		k > 1 && re < k - 1 && ie >= ne && (re++, ie = 0, H = W), H += p, ie++;
		let T = (n.rtlCol ? k - 1 - re : re) * G, E = c.textX + T, D = c.bulletX + T, O = c.textMaxW, A = c.para.rtl === !0, j = A || Gt(u.segments), M = u.segments.some((e) => e.isTab);
		if (M) {
			let t = X(c.para.marL, s), n = X(c.para.marR, s), r = A ? n : t + g, i = O + t + n;
			e.font = u.segments.find((e) => e.isTab).font;
			let a = e.measureText(" ").width, o = rn(u.segments.map((t) => {
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
			}), (c.para.tabStops ?? []).map((e) => ({
				pos: X(e.pos, s),
				algn: e.algn
			})), r, i, a, X(c.para.defTabSz ?? 914400, s));
			for (let e = 0; e < u.segments.length; e++) u.segments[e].isTab && (u.segments[e].tabWidthPx = o[e]);
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
		let F = H + P, I = E + O, L = 0, R = null;
		if (j && A) {
			if (y) e.font = b, L = e.measureText(y).width;
			else if (S && _ && (R = t(S.imagePath, _), R)) {
				let e = S.sizePx;
				L = R.height > 0 ? e * (R.width / R.height) : e;
			}
		}
		if (y) if (e.font = b, e.fillStyle = x, j && A) {
			let t = e.direction;
			e.direction = "rtl", e.fillText(y, I - L, F), e.direction = t;
		} else e.fillText(y, D, F);
		if (S && _) {
			let n = t(S.imagePath, _);
			if (n) {
				let t = S.sizePx, r = n.height > 0 ? t * (n.width / n.height) : t, i = F - t;
				j && A ? e.drawImage(n, I - r, i, r, t) : e.drawImage(n, D, i, r, t);
			}
		}
		let z = E + g, B;
		B = M ? A ? E + O - L - N : z : C === "ctr" ? z + (O - g - N) / 2 : C === "r" ? E + O - L - N : z;
		let U = C === "just" || C === "justLow" ? "just" : C === "thaiDist" ? "thaiDist" : C === "dist" ? "dist" : null, K = w || (u.endsWithBreak ?? !1), q = (U && !j && !M ? Yt(u.segments, O - g, N, U, K) : null) ?? u.segments, J = j ? Kt(u.segments, A) : null, ee = (e, t) => {
			if (Math.abs(e - t) !== 1) return 0;
			let n = u.segments[Math.min(e, t)], r = u.segments[Math.max(e, t)];
			return n.isTab || n.math || r.isTab || r.math || n.sourceRunId == null || n.sourceRunId !== r.sourceRunId ? 0 : r.leadingLetterSpacingPx ?? 0;
		}, te = q.length;
		for (let t = 0; t < te; t++) {
			let n = J ? J.order[t] : t, c = q[n], u = J ? J.rtl[n] : !1;
			if (j && (e.direction = u ? "rtl" : "ltr"), t > 0) {
				let e = J ? J.order[t - 1] : t - 1;
				B += ee(e, n);
			}
			if (c.isTab) {
				B += c.tabWidthPx ?? 0;
				continue;
			}
			let d = c.jext ?? 0, p = c.splitBefore, g = c.perGap ?? 0, _ = p && p.length > 0 ? p.length * g : 0;
			if (c.math) {
				let t = fn.get(c.math.nodes), n = c.math.width, r = c.math.ascent + c.math.descent;
				if (t && n > 0 && r > 0) {
					let i = F - c.math.ascent, a = pn(t, c.color);
					e.drawImage(a, B, i, n, r);
				}
				B += n, B += d;
				continue;
			}
			e.font = c.font, e.fillStyle = c.color;
			let y = F + (c.baseline ? -(c.baseline / 1e5) * c.sizePx : 0), b = c.letterSpacingPx ?? 0;
			if (c.highlight && c.text) {
				let t = Q(e, c.text, b) + _ + d;
				un(e, B, y, t, c.sizePx, c.highlight, c.color);
			}
			let x = c.shadow, S = (e, t, n, r) => {
				let i = r === "fill" ? e.fillText.bind(e) : e.strokeText.bind(e);
				if (b !== 0 && Mn(t) > 1) {
					let r = e, a = r.letterSpacing;
					if (Pn(e)) {
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
			}, C = (t) => Q(e, t, b), w = p && p.length > 0 ? Lt([...c.text], p, g, C) : null, T = [...c.text], E = !!p && p.length === T.length - 1 && T.length > 1, D = (e, t) => {
				if (v) {
					let n = E ? b + g : b;
					ln(e, c.text, B, y, c.sizePx, n, t);
					return;
				}
				if (E) {
					let n = t === "fill" ? e.fillText.bind(e) : e.strokeText.bind(e), r = b + g;
					if (Pn(e)) {
						let t = e, i = t.letterSpacing;
						t.letterSpacing = `${r}px`, n(c.text, B, y);
						try {
							t.letterSpacing = i;
						} catch {}
					} else {
						let t = B;
						for (let i = 0; i < T.length; i++) {
							let a = T[i];
							n(a, t, y), i < T.length - 1 && (t += e.measureText(a).width + r);
						}
					}
				} else if (w) for (let { text: n, dx: r } of w) S(e, n, B + r, t);
				else S(e, c.text, B, t);
			}, O = c.reflection;
			if (O && c.text) {
				let t = e.canvas.width || 0, n = e.canvas.height || 0;
				if (t > 0 && n > 0) {
					e.font = c.font;
					let r = e.measureText(c.text), i = Number.isFinite(r.actualBoundingBoxAscent) ? r.actualBoundingBoxAscent : c.sizePx * .8, a = Number.isFinite(r.actualBoundingBoxDescent) ? r.actualBoundingBoxDescent : c.sizePx * .2, o = Number.isFinite(r.actualBoundingBoxLeft) ? r.actualBoundingBoxLeft : 0, l = Number.isFinite(r.actualBoundingBoxRight) ? r.actualBoundingBoxRight : r.width, u = e.getTransform(), d = Math.abs(u.a * u.d - u.b * u.c), f = d > 0 ? Math.sqrt(d) : 1;
					En(e, (e) => {
						e.font = c.font, e.fillStyle = c.color, D(e, "fill");
					}, {
						x: (B - o) * f,
						y: (y - i) * f,
						w: Math.max(1, o + l) * f,
						h: Math.max(1, i + a) * f
					}, O, s * f, u, t, n), e.font = c.font, e.fillStyle = c.color;
				}
			}
			if (x) {
				let t = x.dir * Math.PI / 180, n = X(x.dist, s);
				e.save(), e.shadowColor = Z(x.color, x.alpha), e.shadowBlur = X(x.blur, s), e.shadowOffsetX = Math.cos(t) * n, e.shadowOffsetY = Math.sin(t) * n;
			}
			D(e, "fill"), x && e.restore();
			let k = c.outline;
			k && k.width > 0 && (e.save(), e.lineWidth = Math.max(.5, X(k.width, s)), e.strokeStyle = k.color ? `#${k.color}` : c.color, e.lineJoin = "round", D(e, "stroke"), e.restore()), e.font = c.font;
			let A = Q(e, c.text, b) + _;
			if (h && c.text && h({
				text: c.text,
				inShapeX: B - r,
				inShapeY: H - i,
				w: A + d,
				h: f,
				fontSize: c.sizePx,
				font: c.font,
				shapeX: r,
				shapeY: i,
				shapeW: a,
				shapeH: o,
				rotation: l,
				hyperlink: c.hyperlink
			}), c.underline && Ft(e, B, y, A + d, c.sizePx, c.underlineColor ?? c.color, c.underlineStyle, m.dpr), c.strikethrough) {
				let t = Math.max(1, c.sizePx * .05);
				e.strokeStyle = c.color, e.lineWidth = t, e.setLineDash([]);
				let n = y - c.sizePx * .32;
				if (c.strikeDouble) {
					let r = t * .9, i = n - r, a = n + r;
					e.beginPath(), e.moveTo(B, i + V(i, t, m.dpr)), e.lineTo(B + A + d, i + V(i, t, m.dpr)), e.moveTo(B, a + V(a, t, m.dpr)), e.lineTo(B + A + d, a + V(a, t, m.dpr)), e.stroke();
				} else {
					let r = n + V(n, t, m.dpr);
					e.beginPath(), e.moveTo(B, r), e.lineTo(B + A + d, r), e.stroke();
				}
			}
			B += A, B += d;
		}
		j && (e.direction = "ltr"), H += d;
	}
	e.restore();
}
function _r(e, t, n, r, i) {
	if (!e) return [];
	let a = Ct(t?.rig ?? "threePt", t?.dir ?? "t", t?.rot), o = kt(n), s = r * i, c = [];
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
function vr(e, t, n, r, i, a) {
	if (!e || !e.extrusionH || e.extrusionH <= 0) return null;
	let o = e.extrusionH * i * a, s = ct(t, n * a, r * a, o);
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
function yr(e, t, n, r, i, a, o, s = {}) {
	if (i <= 0 || a <= 0) return !1;
	let c = e.getTransform(), l = Math.abs(c.a * c.d - c.b * c.c), u = l > 0 ? Math.sqrt(l) : 1, d = Math.max(0, Math.ceil((s.edgePadCss ?? 0) * u)), f = ot(t, i, a), p = f.corners;
	if (d > 0) {
		let e = d / u, t = Ne(f.corners, e / i, e / a);
		t ? p = t : d = 0;
	}
	let m = d / u, h = Math.max(1, Math.ceil(i * u) + 2 * d), g = Math.max(1, Math.ceil(a * u) + 2 * d), _ = Ce(h, g);
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
		Pt(v, s.extrusion, x(e));
	}
	if (s.bevels && s.bevels.length > 0) for (let e of s.bevels) Nt(v, e, x(Math.ceil(e.widthPx) + 2));
	return s.paintEdges && (v.save(), v.scale(u, u), v.translate(m, m), s.paintEdges(v, 0, 0, i, a), v.restore()), Ee(_, e, h, g, p.map((e) => ({
		x: n + e.x,
		y: r + e.y
	}))), !0;
}
function br(e, t, n, r, i, a, o, s, c = 0) {
	if (r <= 0 || i <= 0 || a.length === 0) return !1;
	let l = e.getTransform(), u = Math.abs(l.a * l.d - l.b * l.c), d = u > 0 ? Math.sqrt(u) : 1, f = Math.max(0, Math.ceil(c * d)), p = f / d, m = Math.max(1, Math.ceil(r * d) + 2 * f), h = Math.max(1, Math.ceil(i * d) + 2 * f), g = Ce(m, h);
	if (!g) return !1;
	let _ = g.getContext("2d");
	if (!_) return !1;
	_.save(), _.scale(d, d), _.translate(p, p), o(_, 0, 0, r, i), _.restore();
	let v = Math.ceil(r * d), y = Math.ceil(i * d);
	for (let e of a) {
		let t = Math.ceil(e.widthPx) + 2;
		Nt(_, e, {
			x: f - t,
			y: f - t,
			w: v + 2 * t,
			h: y + 2 * t
		});
	}
	return s && (_.save(), _.scale(d, d), _.translate(p, p), s(_, 0, 0, r, i), _.restore()), e.drawImage(g, t - p, n - p, m / d, h / d), !0;
}
var xr = /* @__PURE__ */ new WeakMap();
function Sr(e) {
	let t = xr.get(e);
	return t || (t = async (t, n) => {
		let r = await e(t);
		return r.type === n ? r : new Blob([r], { type: n });
	}, xr.set(e, t)), t;
}
function Cr(e, t, n = Sr(t)) {
	return g("base", e.posterPath, n, async () => {
		let n = await t(e.posterPath), r = e.posterMimeType || n.type || "application/octet-stream";
		return {
			bitmap: await _e(n.type === r ? n : new Blob([n], { type: r })),
			owned: !0
		};
	}).then((e) => {
		if (!e) throw Error("Media poster could not be decoded");
		return e;
	});
}
async function wr(e, t, n, r, i) {
	if (i) try {
		let a = t.mimeType === "image/svg+xml", s = ye(t.mimeType, t.srcRect, t.width / Y, t.height / Y);
		if (!s) return;
		let { widthPt: c, heightPt: u } = s, d;
		if (ne(t)) try {
			d = await J(t.svgImagePath, i);
		} catch {
			d = a ? await J(t.imagePath, i) : await Fe(t.imagePath, t.mimeType, t.duotone, i, {
				widthPt: c,
				heightPt: u
			});
		}
		else d = a ? await J(t.imagePath, i) : await Fe(t.imagePath, t.mimeType, t.duotone, i, {
			widthPt: c,
			heightPt: u
		});
		if (!d || r()) return;
		e.save(), t.alpha != null && (e.globalAlpha *= t.alpha);
		let f = X(t.x, n), m = X(t.y, n), h = X(t.width, n), g = X(t.height, n);
		(t.rotation !== 0 || t.flipH || t.flipV) && (e.translate(f + h / 2, m + g / 2), e.rotate(t.rotation * Math.PI / 180), t.flipH && e.scale(-1, 1), t.flipV && e.scale(1, -1), e.translate(-(f + h / 2), -(m + g / 2)));
		let _ = (e, n, r, i, a) => {
			t.custGeom && t.custGeom.length > 0 ? dr(e, t.custGeom, n, r, i, a) : t.prstGeom && p(e, t.prstGeom, n, r, i, a, t.prstAdjust ?? []) || e.rect(n, r, i, a);
		}, v = (e, t, n, r, i) => {
			e.beginPath(), _(e, t, n, r, i);
		}, y = (e, n, r, i, a) => {
			(t.prstGeom || t.custGeom && t.custGeom.length > 0) && (v(e, n, r, i, a), e.clip());
		}, b = (e, r, i, a, o) => {
			t.stroke && (e.save(), Dr(e, t.stroke, n, {
				x: r,
				y: i,
				w: a,
				h: o
			}, t.rotation), v(e, r, i, a, o), e.stroke(), e.restore());
		}, x = (e, r, i, a, o) => {
			let s = t.sp3d;
			if (s && (s.contourW ?? 0) > 0 && s.contourClr) {
				let t = Math.max(.5, s.contourW * n);
				e.save(), e.beginPath();
				let c = t * 2 + Math.max(a, o);
				e.rect(r - c, i - c, a + 2 * c, o + 2 * c), _(e, r, i, a, o), e.clip("evenodd"), e.beginPath(), v(e, r, i, a, o), e.strokeStyle = Z(s.contourClr), e.lineWidth = t * 2, e.setLineDash([]), e.stroke(), e.restore();
			}
		}, S = t.scene3d && st(t.scene3d.camera) ? t.scene3d : null, C = (e, n, r, i, a) => {
			e.save(), y(e, n, r, i, a), Se(e, d, t.srcRect, n, r, i, a), e.restore();
		}, w = (e, t, n, r, i) => {
			C(e, t, n, r, i), b(e, t, n, r, i), x(e, t, n, r, i);
		}, T = (e, t, n, r, i) => {
			C(e, t, n, r, i), b(e, t, n, r, i);
		}, E = e.getTransform(), D = Math.abs(E.a * E.d - E.b * E.c), O = D > 0 ? Math.sqrt(D) : 1, k = _r(t.sp3d, t.scene3d?.lightRig, t.sp3d ? t.sp3d.prstMaterial : void 0, n, O), A = S ? vr(t.sp3d, S.camera, h, g, n, O) : null, j = t.stroke ? t.stroke.width * n / 2 : 0, M = t.sp3d?.contourW ? t.sp3d.contourW * n : 0, N = A ? Math.hypot(A.offsetX, A.offsetY) / O : 0, P = j + M + N + 2, F = (e) => {
			if (S) {
				if (yr(e, S.camera, f, m, h, g, T, {
					bevels: k,
					extrusion: A ?? void 0,
					paintEdges: x,
					edgePadCss: P
				})) return;
			} else if (k.length > 0 && br(e, f, m, h, g, k, T, x, P)) return;
			w(e, f, m, h, g);
		}, I = (e, t, n, r, i, a) => {
			e.save(), y(e, n, r, i, a), e.fillStyle = t, e.fillRect(n, r, i, a), e.restore();
		}, L = (e, t) => {
			S && yr(e, S.camera, f, m, h, g, (e, n, r, i, a) => I(e, t, n, r, i, a)) || I(e, t, f, m, h, g);
		}, R = e.getTransform(), z = Math.abs(R.a * R.d - R.b * R.c), B = z > 0 ? Math.sqrt(z) : 1, V = j + M, H = (t.custGeom && t.custGeom.length > 0 ? ce(t.custGeom, f, m, h, g) : t.prstGeom && l(t.prstGeom.toLowerCase()) ? o(t.prstGeom.toLowerCase(), f, m, h, g, t.prstAdjust ?? []) : null) ?? {
			x: f,
			y: m,
			w: h,
			h: g
		}, U = S ? sr(S.camera, R, f, m, h, g, P, t.shadow?.algn) : {
			bbox: rr(R, H.x - V, H.y - V, H.w + V * 2, H.h + V * 2),
			anchor: or(R, f, m, h, g, t.shadow?.algn)
		}, W = n * B, G = !!(t.shadow || t.innerShadow || t.glow || t.softEdge || t.reflection), K = (e) => L(e, "#000");
		lr(e, t, S && G ? cr(F, R, U.bbox, {
			w: e.canvas.width || 0,
			h: e.canvas.height || 0
		}) : F, S && G ? cr(K, R, U.bbox, {
			w: e.canvas.width || 0,
			h: e.canvas.height || 0
		}) : K, U.bbox, U.anchor, n, W, R), e.restore();
	} catch (e) {
		if (xe(e)) throw e;
	}
}
async function Tr(e, t, n, r, i, a, o) {
	let s = X(t.x, n), c = X(t.y, n), l = X(t.width, n), u = X(t.height, n), d;
	if (t.posterPath && i) try {
		d = await Cr(t, i, o);
	} catch (e) {
		if (xe(e)) throw e;
	}
	r() || (e.save(), Or(e, t, n), d ? e.drawImage(d, s, c, l, u) : (e.fillStyle = t.mediaKind === "video" ? "#111" : "#f0f0f0", e.fillRect(s, c, l, u)), a || Ht(e, s + l / 2, c + u / 2, l, u, "paused"), e.restore());
}
function Er(e, t, n, r, i, a, o) {
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
	e.save(), e.globalCompositeOperation = "destination-out", e.strokeStyle = "#000", e.lineWidth = s + .5, e.setLineDash([]), e.beginPath(), e.moveTo(t.x, t.y), e.lineTo(n.x, n.y), e.stroke(), e.globalCompositeOperation = "source-over", e.strokeStyle = (r.fill ? dn(r.fill, e, Math.min(t.x, n.x), Math.min(t.y, n.y), Math.max(1, Math.abs(n.x - t.x)), Math.max(1, Math.abs(n.y - t.y)), o) : null) ?? Z(r.color);
	for (let r of p) {
		let i = d * (s * r.offset), a = f * (s * r.offset);
		e.lineWidth = Math.max(.5, s * r.widthFrac), e.beginPath(), e.moveTo(t.x + i, t.y + a), e.lineTo(n.x + i, n.y + a), e.stroke();
	}
	e.restore();
}
function Dr(e, t, n, r, i = 0) {
	if (ve(e, t, n), t?.fill && r) {
		let n = dn(t.fill, e, r.x, r.y, r.w, r.h, i);
		n && (e.strokeStyle = n);
	}
}
function Or(e, t, n) {
	if (t.rotation === 0 && !t.flipH && !t.flipV) return;
	let r = X(t.x, n), i = X(t.y, n), a = X(t.width, n), o = X(t.height, n);
	e.translate(r + a / 2, i + o / 2), e.rotate(t.rotation * Math.PI / 180), t.flipH && e.scale(-1, 1), t.flipV && e.scale(1, -1), e.translate(-(r + a / 2), -(i + o / 2));
}
function kr(e, t, n, r, i = {
	themeMajorFont: null,
	themeMinorFont: null,
	dpr: 1
}) {
	e.save(), Or(e, t, n);
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
			let c = l(t, s.gridSpan || 1), d = gr(e, s.textBody, 0, 0, c, 0, n, null, 0, !1, !1, "#000000", r, i, void 0, !0, void 0, !1, o.height === 0) || 0;
			d > u[a] && (u[a] = d);
		}
	}
	for (let a = 0; a < t.rows.length; a++) {
		let o = t.rows[a];
		for (let s = 0; s < o.cells.length; s++) {
			let c = o.cells[s];
			if (c.hMerge || c.vMerge) continue;
			let d = c.rowSpan || 1;
			if (d <= 1 || !c.textBody) continue;
			let f = l(s, c.gridSpan || 1), p = t.rows.slice(a, Math.min(t.rows.length, a + d)).some((e) => e.height === 0), m = gr(e, c.textBody, 0, 0, f, 0, n, null, 0, !1, !1, "#000000", r, i, void 0, !0, void 0, !1, p) || 0, h = 0;
			for (let e = 0; e < d && a + e < u.length; e++) h += u[a + e];
			if (m > h) {
				let e = (m - h) / d;
				for (let t = 0; t < d && a + t < u.length; t++) u[a + t] += e;
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
		let u = dn(a.fill, e, o, s, c, l, t.rotation);
		if (u && (e.fillStyle = u, e.fillRect(o, s, c, l)), a.textBody) {
			let t = a.textColor ? Z(a.textColor) : null;
			gr(e, a.textBody, o, s, c, l, n, t, 0, !1, !1, "#000000", r, i);
		}
	}
	let _ = i.dpr, v = (e, t) => {
		if (e < 0 || e >= g.length || t < 0 || t >= c) return null;
		let n = g[e][t];
		return n < 0 ? null : h[n];
	}, y = (r, i, a, o, s) => {
		Dr(e, r, n, {
			x: Math.min(i, o),
			y: Math.min(a, s),
			w: Math.max(1, Math.abs(o - i)),
			h: Math.max(1, Math.abs(s - a))
		}, t.rotation);
		let c = i === o ? V(i, e.lineWidth, _) : 0, l = a === s ? V(a, e.lineWidth, _) : 0;
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
				let s = v(e, a), c = Qt(i.borderB, s ? s.cell.borderT : null);
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
				let a = v(t, x), o = Qt(h, a ? S(a.cell) : null);
				o && y(o, e, m[t], e, m[i] + u[i]), t = i + 1;
			}
		}
		i.diagonalTL && (Dr(e, i.diagonalTL, n, {
			x: a,
			y: o,
			w: s,
			h: d
		}, t.rotation), e.beginPath(), e.moveTo(a, o), e.lineTo(a + s, o + d), e.stroke()), i.diagonalTR && (Dr(e, i.diagonalTR, n, {
			x: a,
			y: o,
			w: s,
			h: d
		}, t.rotation), e.beginPath(), e.moveTo(a + s, o), e.lineTo(a, o + d), e.stroke()), e.restore();
	}
	e.restore();
}
function Ar(e, t, n, r) {
	e.save(), e.globalAlpha = t.opacity, e.fillStyle = t.color, e.fillRect(0, 0, n, r), e.restore();
}
var jr = /* @__PURE__ */ new WeakMap();
function Mr(e) {
	jr.set(e, (jr.get(e) ?? 0) + 1);
}
function Nr(e, t, n, r, i) {
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
async function Pr(e, t, n, r, i = {}, a) {
	let o = i.fetchImage ?? (i.fetchMedia ? Sr(i.fetchMedia) : void 0), s = o ? x(o) : void 0;
	try {
		return await Fr(e, t, n, r, i, a, o);
	} finally {
		s?.();
	}
}
async function Fr(e, t, n, r, i = {}, o, s) {
	let c = (jr.get(e) ?? 0) + 1;
	jr.set(e, c);
	let l = () => jr.get(e) !== c, u = i.width ?? ((P(e) ? e.offsetWidth : 0) || 960), d = u / n, f = Math.round(u), p = Math.round(r * d), m = i.dpr ?? R(), h = ke(f * m, p * m), g = h.clamped ? m * h.scale : m;
	e.width = h.width, e.height = h.height, P(e) && (e.style.width = `${f}px`, e.style.display || (e.style.display = "block"));
	let _ = e.getContext("2d");
	if (!_) throw Error("Could not get 2D context");
	if (_.scale(g, g), t.parseError) return Nr(_, f, p, t.slideNumber, t.parseError), e;
	let v = i.defaultTextColor ? `#${i.defaultTextColor}` : "#000000", y = {
		themeMajorFont: i.majorFont ?? null,
		themeMinorFont: i.minorFont ?? null,
		themeHlinkColor: i.hlinkColor ?? null,
		dpr: g,
		smartArtFallbackTextColor: nn(t.background, v)
	};
	if (await In(_, t.background, f, p, d, l, i.fetchImage), l() || (i.math && await hn(t, i.math), l())) return e;
	let b = t.slideNumber;
	for (let e of t.elements) if (e.type === "picture" && i.fetchImage) {
		let t = e, n = t.mimeType === "image/svg+xml";
		if (ne(t)) J(t.svgImagePath, i.fetchImage).catch(() => void 0);
		else if (n) J(t.imagePath, i.fetchImage).catch(() => void 0);
		else {
			let e = ye(t.mimeType, t.srcRect, t.width / Y, t.height / Y);
			if (!e) continue;
			Fe(t.imagePath, t.mimeType, t.duotone, i.fetchImage, {
				widthPt: e.widthPt,
				heightPt: e.heightPt
			}).catch(() => void 0);
		}
	} else if (e.type === "media") {
		let t = e;
		t.posterPath && i.fetchMedia && Cr(t, i.fetchMedia, s).catch(() => void 0);
	}
	let x = /* @__PURE__ */ new Map();
	if (i.fetchImage) {
		let n = i.fetchImage, r = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
		for (let e of be(t.elements.filter((e) => e.type === "chart").map((e) => e.chart))) {
			let t = Te(e);
			o.has(t) || o.set(t, e);
		}
		for (let e of t.elements) if (!(e.type !== "shape" || !e.textBody)) for (let t of e.textBody.paragraphs) {
			let e = Ie(t.bullet);
			e.type === "blip" && r.add(`${e.imagePath} ${e.mimeType}`);
		}
		if (r.size > 0 || o.size > 0) {
			let t = [...r].map((e) => {
				let [t, r] = e.split(" ");
				return a(t, r, n).catch((e) => {
					if (xe(e)) throw e;
				});
			}), i = [...o].map(async ([e, t]) => {
				try {
					let r = ye(t.mimeType, t.srcRect, 72, 72);
					if (!r) {
						x.set(e, null);
						return;
					}
					let i = () => t.mimeType === "image/svg+xml" ? t.duotone ? Promise.resolve(null) : J(t.imagePath, n) : Fe(t.imagePath, t.mimeType, t.duotone, n, {
						widthPt: r.widthPt,
						heightPt: r.heightPt,
						failClosedOnDuotoneFailure: !0
					}), a;
					if (!t.duotone && ne(t)) try {
						a = await J(t.svgImagePath, n);
					} catch {
						a = await i();
					}
					else a = await i();
					x.set(e, a);
				} catch (t) {
					if (xe(t)) throw t;
					x.set(e, null);
				}
			});
			if (await Promise.all([...t, ...i]), l()) return e;
		}
	}
	for (let [n, r] of t.elements.entries()) {
		if (l()) return e;
		if (r.type === "shape") ur(_, r, d, v, b, y, o ? (e) => o({
			...e,
			elementIndex: n,
			origin: t.elementSources?.[n]?.origin ?? "slide"
		}) : void 0, i.fetchImage);
		else if (r.type === "picture") await wr(_, r, d, l, i.fetchImage);
		else if (r.type === "table") kr(_, r, d, b, y);
		else if (r.type === "media") await Tr(_, r, d, l, i.fetchMedia, i.skipMediaControls, i.fetchImage);
		else if (r.type === "chart") {
			let e = Y * d;
			_.save(), Or(_, r, d), Pe(_, r.chart, {
				x: X(r.x, d),
				y: X(r.y, d),
				w: X(r.width, d),
				h: X(r.height, d)
			}, e, r.rotation, i.threeD, i.regionMap, (e) => x.get(Te(e)), i.chartEx), _.restore();
		}
	}
	return l() || i.dim && Ar(_, i.dim, f, p), e;
}
//#endregion
//#region packages/pptx/src/google-fonts.ts
var Ir = {
	...H,
	...c
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
function Lr(e, t) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error(`invalid PPTX presentation bootstrap slide at ${t}`);
	let n = e;
	if (n.index !== t) throw Error(`invalid PPTX presentation bootstrap slide index ${n.index}`);
	if (n.partName !== void 0 && typeof n.partName != "string") throw Error(`invalid PPTX presentation bootstrap slide partName at ${t}`);
	return Object.freeze({
		index: n.index,
		...n.partName === void 0 ? {} : { partName: n.partName }
	});
}
function Rr(e) {
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
		slides: Object.freeze(t.slides.map(Lr))
	});
}
function zr(e) {
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
function Br(e) {
	return Object.freeze({
		...e.id === void 0 ? {} : { id: e.id },
		...e.authorId === void 0 ? {} : { authorId: e.authorId },
		...e.author === void 0 ? {} : { author: e.author },
		...e.date === void 0 ? {} : { date: e.date },
		...e.status === void 0 ? {} : { status: e.status },
		text: e.text
	});
}
function Vr(e) {
	return Object.freeze({ ...e });
}
function Hr(e) {
	return Object.freeze({
		...e.authorId === void 0 ? {} : { authorId: e.authorId },
		...e.modernAuthorId === void 0 ? {} : { modernAuthorId: e.modernAuthorId },
		...e.id === void 0 ? {} : { id: e.id },
		...e.index === void 0 ? {} : { index: e.index },
		...e.author === void 0 ? {} : { author: e.author },
		...e.date === void 0 ? {} : { date: e.date },
		...e.x === void 0 ? {} : { x: e.x },
		...e.y === void 0 ? {} : { y: e.y },
		...e.anchors?.length ? { anchors: Object.freeze(e.anchors.map(Vr)) } : {},
		...e.status === void 0 ? {} : { status: e.status },
		text: e.text,
		...e.replies?.length ? { replies: Object.freeze(e.replies.map(Br)) } : {}
	});
}
function Ur(e, t, n) {
	if (e !== void 0 && typeof e != "string") throw Error(`invalid PPTX presentation preflight comment ${t} at slide ${n}`);
}
function Wr(e, t) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error(`invalid PPTX presentation preflight comment reply at slide ${t}`);
	let n = e;
	for (let e of [
		"id",
		"authorId",
		"author",
		"date",
		"status"
	]) Ur(n[e], e, t);
	if (typeof n.text != "string") throw Error(`invalid PPTX presentation preflight comment reply text at slide ${t}`);
	if (n.status !== void 0 && ![
		"active",
		"resolved",
		"closed"
	].includes(n.status)) throw Error(`invalid PPTX presentation preflight comment reply status at slide ${t}`);
	return Br(n);
}
function Gr(e, t) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error(`invalid PPTX presentation preflight comment at slide ${t}`);
	let n = e;
	for (let e of [
		"modernAuthorId",
		"id",
		"author",
		"date",
		"status"
	]) Ur(n[e], e, t);
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
	return Hr({
		...n,
		...n.anchors?.length ? { anchors: n.anchors.map((e) => Kr(e, t)) } : {},
		...n.replies?.length ? { replies: n.replies.map((e) => Wr(e, t)) } : {}
	});
}
function Kr(e, t) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error(`invalid PPTX presentation preflight comment anchor at slide ${t}`);
	let n = e;
	if (n.type === "slide" || n.type === "unknown") return Object.freeze({ type: n.type });
	if (n.type === "drawingElement") return Ur(n.elementId, "anchor.elementId", t), Ur(n.creationId, "anchor.creationId", t), Object.freeze({
		type: "drawingElement",
		...n.elementId === void 0 ? {} : { elementId: n.elementId },
		...n.creationId === void 0 ? {} : { creationId: n.creationId }
	});
	if (n.type === "textRange") {
		Ur(n.elementId, "anchor.elementId", t);
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
function qr(e, t) {
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
	return zr(n);
}
function Jr(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error("invalid PPTX presentation preflight payload");
	let t = e;
	if (!Number.isSafeInteger(t.slideCount) || (t.slideCount ?? -1) < 0 || !Number.isSafeInteger(t.slideWidth) || (t.slideWidth ?? 0) <= 0 || !Number.isSafeInteger(t.slideHeight) || (t.slideHeight ?? 0) <= 0 || !Array.isArray(t.slides) || t.slides.length !== t.slideCount || !Array.isArray(t.fontPreloadNames)) throw Error("invalid PPTX presentation preflight dimensions or slide count");
	$(t.defaultTextColor, "defaultTextColor"), $(t.majorFont, "majorFont"), $(t.minorFont, "minorFont"), $(t.hlinkColor, "hlinkColor"), $(t.folHlinkColor, "folHlinkColor");
	let n = t.slides.map((e, t) => {
		if (!e || typeof e != "object" || Array.isArray(e)) throw Error(`invalid PPTX presentation preflight slide at ${t}`);
		let n = e;
		if (n.index !== t || n.partName !== void 0 && typeof n.partName != "string" || n.notes !== null && typeof n.notes != "string" || typeof n.hidden != "boolean" || !Array.isArray(n.mediaElements) || n.comments !== void 0 && !Array.isArray(n.comments)) throw Error(`invalid PPTX presentation preflight slide fields at ${t}`);
		return Object.freeze({
			index: t,
			...n.partName === void 0 ? {} : { partName: n.partName },
			notes: n.notes,
			hidden: n.hidden,
			mediaElements: Object.freeze(n.mediaElements.map((e) => qr(e, t))),
			...n.comments?.length ? { comments: Object.freeze(n.comments.map((e) => Gr(e, t))) } : {}
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
function Yr(e, t) {
	for (let n of e.slides) for (let e of n.mediaElements) {
		if (e.mediaPath === t) return e.mimeType;
		if (e.posterPath === t) return e.posterMimeType;
	}
	return "";
}
//#endregion
//#region packages/pptx/src/slide-pull-client.ts
var Xr = 1024 * 1024, Zr = class {
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
		}, a = new m(this.options.transport, {
			...i,
			maxByteCredit: u,
			timeoutMs: n
		});
		this.active.add(a);
		try {
			await this.options.open(e, i, n);
			let r = await $r(a);
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
function Qr(e) {
	return !!e && typeof e == "object" && e.protocol === "ooxml-pull-v1";
}
async function $r(e) {
	try {
		return await e.pull(Xr);
	} catch (t) {
		let n = ei(t);
		if (n === void 0) throw t;
		return e.pull(n);
	}
}
function ei(e) {
	return O(e, Xr, u);
}
//#endregion
export { Jr as a, Pr as c, Rr as i, Ht as l, Qr as n, Ir as o, Yr as r, Mr as s, Zr as t };
