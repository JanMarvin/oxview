//#region packages/core/src/internal/bundled-asset-url.ts
function e(e, t) {
	if (e.startsWith("/") && globalThis.location?.href) {
		let n;
		try {
			n = new URL("/", t);
		} catch {}
		if (!n || n.protocol === "file:") try {
			return new URL(e, globalThis.location.href).href;
		} catch {}
	}
	return new URL(e, t).href;
}
//#endregion
export { e as t };
