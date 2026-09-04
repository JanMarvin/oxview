import { $t as e, M as t, N as n, P as r, Qt as i, V as a, W as o, an as s, en as c, in as l, j as u, nn as d, rn as f, sn as p, tn as m } from "./hyperlink-enyPbflR.js";
import { n as h, r as g, t as _ } from "./resource-measurement-Do07ZRcR.js";
import { t as v } from "./transfer-mIj7E7NB.js";
//#region packages/xlsx/src/worksheet-resource-limits.ts
var y = s, b = d, x = f, S = l, C = m, w = i, T = e, E = c, D = Object.freeze({
	archiveEntryCount: 0,
	declaredInflatedBytes: 0,
	distinctInflatedBytes: 0,
	operationInflatedBytes: 0
});
function O(e) {
	let t = e.reduce((e, t) => _(e, t.cells.length, b), 0);
	return {
		rows: e.length,
		cells: t,
		ownedUtf8Bytes: e.reduce((e, t) => t.cells.reduce((e, t) => {
			let n = h(t.value, x).stringValueUtf8Bytes;
			return _(e, _(n, t.formula === void 0 ? 0 : g(t.formula, x), x), x);
		}, e), 0)
	};
}
function k(e) {
	return A(e, O(e.rows));
}
function A(e, t) {
	let n = h(e, Math.max(x, S));
	return {
		...t,
		jsonBytes: n.jsonBytes
	};
}
function j(e, t) {
	return {
		rows: _(e.rows, t.rows, y),
		cells: _(e.cells, t.cells, b),
		ownedUtf8Bytes: _(e.ownedUtf8Bytes, t.ownedUtf8Bytes, x)
	};
}
function M(e, t, n = {}) {
	let r = e.rows - (n.rows ?? 0), i = e.cells - (n.cells ?? 0), a = e.ownedUtf8Bytes - (n.ownedUtf8Bytes ?? 0), o = e.jsonBytes - (n.jsonBytes ?? 0);
	if (r < 0 || i < 0 || a < 0 || o < 0) throw Error("worksheet cache accounting underflow");
	return {
		rows: _(r, t.rows, C),
		cells: _(i, t.cells, w),
		ownedUtf8Bytes: _(a, t.ownedUtf8Bytes, T),
		jsonBytes: _(o, t.jsonBytes, E)
	};
}
function N(e, t, n, r, i, a, o) {
	let s = n === "worksheet-json" ? "serialization" : "parsing";
	return new p(`OOXML resource limit exceeded${t ? ` for ${t}` : ""}: ${r} ${a} > ${i}`, {
		stage: s,
		violation: {
			format: "xlsx",
			operation: e,
			resource: n,
			metric: r,
			...t === void 0 ? {} : { part: t },
			limit: i,
			observed: Math.min(a, i + 1),
			configurable: !1,
			usage: o ?? D
		}
	});
}
function P(e, t, n, r) {
	let i = [
		[
			"rows",
			e.rows,
			y
		],
		[
			"cells",
			e.cells,
			b
		],
		[
			"owned-utf8-bytes",
			e.ownedUtf8Bytes,
			x
		]
	];
	for (let [e, a, o] of i) if (a > o) throw N(t, n, e === "owned-utf8-bytes" ? "worksheet-cell-content" : "worksheet-model", e, o, a, r);
}
function F(e, t, n, r) {
	if (e > S) throw N(t, n, "worksheet-json", "bytes", S, e, r);
}
function I(e, t, n, r) {
	if (e.rows > C) throw N(t, n, "worksheet-cache", "rows", C, e.rows, r);
	if (e.cells > w) throw N(t, n, "worksheet-cache", "cells", w, e.cells, r);
	if (e.ownedUtf8Bytes > T) throw N(t, n, "worksheet-cache", "owned-utf8-bytes", T, e.ownedUtf8Bytes, r);
	if (e.jsonBytes > E) throw N(t, n, "worksheet-cache", "bytes", E, e.jsonBytes, r);
}
//#endregion
//#region packages/xlsx/src/shared-strings.ts
function L(e, t) {
	return R(e.rows, t), e;
}
function R(e, t) {
	for (let n of e) for (let e of n.cells) {
		let n = e.value;
		if (n.type === "shared") {
			let r = t[n.si];
			if (r) {
				let t = {
					type: "text",
					text: r.text
				};
				r.runs !== void 0 && (t.runs = r.runs), r.phoneticRuns !== void 0 && (t.phoneticRuns = r.phoneticRuns), r.phoneticPr !== void 0 && (t.phoneticPr = r.phoneticPr), e.value = t;
			} else e.value = {
				type: "text",
				text: ""
			};
		}
	}
	return e;
}
//#endregion
//#region packages/xlsx/src/worksheet-pull-codec.ts
function z(e, t, n, r) {
	let i = e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength), a = JSON.parse(new TextDecoder().decode(i));
	if (!a || typeof a != "object" || !("kind" in a)) throw Error("worksheet cursor returned an invalid unit");
	let o = a;
	if (t !== (o.kind === "finished")) throw Error("worksheet cursor terminal marker mismatch");
	if (o.kind === "rows") {
		if (!Array.isArray(o.rows)) throw Error("worksheet row unit is missing rows");
		return n && R(o.rows, n), r?.(o.rows), {
			kind: "rows",
			rows: o.rows
		};
	}
	if (o.kind === "finished") {
		if (!o.worksheet || typeof o.worksheet != "object") throw Error("worksheet terminal unit is missing its worksheet");
		return o.worksheet.rows = [], {
			kind: "finished",
			worksheet: o.worksheet
		};
	}
	throw Error("worksheet cursor returned an unknown unit kind");
}
//#endregion
//#region packages/xlsx/src/worksheet-pull-worker.ts
var B = 64 * 1024 * 1024, V = class {
	coordinator = new r();
	sessions = /* @__PURE__ */ new Map();
	operationTail = Promise.resolve();
	pendingOpens = /* @__PURE__ */ new Map();
	resourceFailure;
	constructor(e, t, n = (e) => e(this.requireArchive()), r) {
		this.archive = e, this.acceptWorksheet = t, this.executeArchive = n, this.prepareRows = r;
	}
	reserveOpen(e) {
		this.pendingOpens.set(e.sessionId, {
			identity: e,
			canceled: !1
		});
	}
	abandonOpen(e) {
		this.pendingOpens.delete(e);
	}
	get pendingOpenCount() {
		return this.pendingOpens.size;
	}
	async open(e, t, r) {
		if (this.resourceFailure) throw this.resourceFailure;
		let i = this.pendingOpens.get(r.sessionId);
		if (!i || i.identity.operationId !== r.operationId || i.identity.generation !== r.generation) throw Error("worksheet pull session open reservation is stale or missing");
		let a, o = new Promise((e) => {
			a = e;
		}), s = this.operationTail.then(() => this.coordinator.enqueue(async () => {
			if (i.canceled) throw Error("worksheet pull session open was canceled");
			this.executeArchive((n) => n.open_sheet_cursor(e, t));
			let o = [], s = {
				rows: 0,
				cells: 0,
				ownedUtf8Bytes: 0
			}, c, l = !1, u = new n({
				...r,
				maxByteCredit: B,
				coordinator: this.coordinator,
				driver: {
					pull: () => {
						let e = this.executeArchive((e) => e.pull_sheet_cursor(128)), t = this.executeArchive((e) => e.sheet_cursor_pull_finished());
						if (this.acceptWorksheet) {
							let n = z(e, t, void 0, this.prepareRows);
							try {
								if (n.kind === "rows") {
									let e = j(s, O(n.rows));
									P(e, "get-worksheet-worker", void 0, this.readResourceUsage()), o.push(...n.rows), s = e;
								} else c = n.worksheet;
							} catch (e) {
								throw e instanceof p && (this.resourceFailure ??= e), e;
							}
						}
						l = t;
						let n = v(e);
						return {
							payload: n,
							byteLength: n.byteLength,
							done: t,
							transfer: [n]
						};
					},
					measureChunk: ({ payload: e }) => e.byteLength,
					acknowledge: () => {
						if (!l) return;
						let t, n;
						try {
							if (this.acceptWorksheet) {
								if (!c) throw Error("worksheet terminal payload is missing");
								c.rows = c.parseError ? [] : o;
								let r = c.parseError ? {
									rows: 0,
									cells: 0,
									ownedUtf8Bytes: 0
								} : s, i = A(c, r), a = this.readResourceUsage();
								P(i, "get-worksheet-worker", void 0, a), F(i.jsonBytes, "get-worksheet-worker", void 0, a);
								let l = this.acceptWorksheet(e, c, i, a);
								typeof l == "function" ? t = l : l && ({rollback: t, commit: n} = l);
							}
							this.executeArchive((e) => e.acknowledge_sheet_cursor_terminal()), n?.();
						} catch (e) {
							throw t?.(), e instanceof p && (this.resourceFailure ??= e), e;
						}
						l = !1, this.sessions.delete(r.sessionId), a();
					},
					cancel: () => {
						try {
							this.archive() && this.executeArchive((e) => e.cancel_sheet_cursor());
						} finally {
							this.sessions.delete(r.sessionId), a();
						}
					},
					close: () => {
						try {
							this.archive() && this.executeArchive((e) => e.close_sheet_cursor());
						} finally {
							this.sessions.delete(r.sessionId), a();
						}
					},
					resourceUsage: () => this.readResourceUsage()
				}
			});
			this.sessions.set(r.sessionId, {
				host: u,
				identity: r
			}), this.pendingOpens.delete(r.sessionId);
		}));
		this.operationTail = s.then(() => o, () => void 0);
		try {
			await s;
		} catch (e) {
			throw this.pendingOpens.delete(r.sessionId), a(), e;
		}
	}
	async postOpenedSafely(e, t, n) {
		try {
			t();
		} catch (t) {
			await this.closeIdentity(e);
			try {
				n(t);
			} catch {}
		}
	}
	dispatch(e, n) {
		let r = this.sessions.get(e.sessionId);
		if (r) return r.host.dispatch(e, n);
		let i = this.pendingOpens.get(e.sessionId);
		if (i && (e.kind === "cancel" || e.kind === "close")) {
			let r = i.identity.operationId === e.operationId && i.identity.generation === e.generation;
			return r && (i.canceled = !0), n(r ? {
				protocol: t,
				kind: "accepted",
				sessionId: e.sessionId,
				operationId: e.operationId,
				generation: e.generation,
				requestId: e.requestId,
				command: e.kind
			} : {
				protocol: t,
				kind: "error",
				sessionId: e.sessionId,
				operationId: e.operationId,
				generation: e.generation,
				requestId: e.requestId,
				error: {
					message: "stale lifecycle targets another pending worksheet operation",
					errorName: "PullSessionProtocolError",
					code: "ooxml-stale-lifecycle"
				}
			}), Promise.resolve();
		}
		return e.kind === "cancel" || e.kind === "close" ? (n({
			protocol: t,
			kind: "accepted",
			sessionId: e.sessionId,
			operationId: e.operationId,
			generation: e.generation,
			requestId: e.requestId,
			command: e.kind
		}), Promise.resolve()) : (n({
			protocol: t,
			kind: "error",
			sessionId: e.sessionId,
			operationId: e.operationId,
			generation: e.generation,
			requestId: e.requestId,
			error: o(/* @__PURE__ */ Error("worksheet pull session is not open"))
		}), Promise.resolve());
	}
	async dispatchSafely(e, n) {
		try {
			await this.dispatch(e, n);
		} catch (r) {
			try {
				n({
					protocol: t,
					kind: "error",
					sessionId: e.sessionId,
					operationId: e.operationId,
					generation: e.generation,
					requestId: e.requestId,
					error: o(r)
				});
			} catch {}
		}
	}
	run(e) {
		let t = this.operationTail.then(() => this.coordinator.enqueue(async () => {
			if (this.resourceFailure) throw this.resourceFailure;
			return e();
		})).catch((e) => {
			throw e instanceof p && (this.resourceFailure ??= e), e;
		});
		return this.operationTail = t.then(() => void 0, () => void 0), t;
	}
	async reset() {
		for (let e of this.pendingOpens.values()) e.canceled = !0;
		let e = 1;
		for (let { host: n, identity: r } of [...this.sessions.values()]) await n.dispatch({
			protocol: t,
			kind: "close",
			...r,
			requestId: e++
		}, () => void 0);
		this.sessions.clear(), await this.operationTail, this.pendingOpens.clear(), this.resourceFailure = void 0;
	}
	requireArchive() {
		let e = this.archive();
		if (!e) throw Error("Workbook not loaded");
		return e;
	}
	async closeIdentity(e) {
		let n = this.sessions.get(e.sessionId);
		if (n) {
			await n.host.dispatch({
				protocol: t,
				kind: "close",
				...e,
				requestId: 1
			}, () => void 0);
			return;
		}
		let r = this.pendingOpens.get(e.sessionId);
		r && r.identity.operationId === e.operationId && r.identity.generation === e.generation && (r.canceled = !0);
	}
	readResourceUsage() {
		try {
			return a(this.executeArchive((e) => e.sheet_cursor_resource_usage()));
		} catch (e) {
			if (String(e).includes("worksheet cursor usage is unavailable")) return;
			throw e;
		}
	}
}, H = class {
	active = /* @__PURE__ */ new Set();
	nextSessionId = 1;
	constructor(e) {
		if (this.options = e, e.generation !== void 0 && (!Number.isSafeInteger(e.generation) || e.generation <= 0)) throw TypeError("generation must be a positive safe integer");
	}
	async *stream(e, t, n) {
		if (!Number.isSafeInteger(e) || e < 0) throw RangeError("sheetIndex must be a non-negative safe integer");
		if (!t) throw TypeError("sheetName must be non-empty");
		G(n);
		let r = this.nextSessionId++, i = {
			sessionId: r,
			operationId: r,
			generation: this.options.generation ?? 1
		}, a = new u(this.options.transport, {
			...i,
			maxByteCredit: B,
			timeoutMs: this.options.timeoutMs,
			disposeTransferred: this.options.disposeTransferred
		});
		this.active.add(a);
		let o = !1, s;
		try {
			for (await this.options.open(e, t, i, this.options.timeoutMs);;) {
				G(n);
				let e = await a.pull(B, { signal: n });
				try {
					let t = e.usage ?? a.usageCheckpoint;
					t && this.options.onUsage?.(t);
					let r = z(e.payload, e.done, this.options.sharedStrings);
					if (yield r.kind === "rows" ? {
						kind: "rows",
						rows: r.rows,
						sequence: e.sequence,
						wireBytes: e.byteLength,
						usage: t
					} : {
						kind: "finished",
						worksheet: r.worksheet,
						sequence: e.sequence,
						wireBytes: e.byteLength,
						usage: t
					}, await e.ack({ signal: n }), r.kind === "finished") {
						o = !0;
						return;
					}
				} finally {
					e.disposeTransferred();
				}
			}
		} catch (e) {
			throw s = e, e;
		} finally {
			let e;
			try {
				o || await a.cancel(W(s));
			} catch (t) {
				e = t;
			} finally {
				this.active.delete(a);
			}
			if (s === void 0 && e !== void 0) throw e;
		}
	}
	async cancelAll(e = "closed") {
		let t = (await Promise.allSettled([...this.active].map((t) => t.cancel(e)))).find((e) => e.status === "rejected");
		if (t) throw t.reason;
	}
};
function U(e) {
	return !!e && typeof e == "object" && e.protocol === "ooxml-pull-v1";
}
function W(e) {
	return e && typeof e == "object" && "name" in e && e.name === "AbortError" ? "abort" : e === void 0 ? "closed" : "request-error";
}
function G(e) {
	if (!e?.aborted) return;
	let t = /* @__PURE__ */ Error("XLSX workbook session was aborted");
	throw t.name = "AbortError", t;
}
//#endregion
export { S as a, I as c, A as d, O as f, L as i, F as l, N as m, U as n, M as o, k as p, V as r, j as s, H as t, P as u };
