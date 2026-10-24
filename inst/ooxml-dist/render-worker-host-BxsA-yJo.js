var e = "" + new URL("assets/render-worker-BUa1gyCE.js", import.meta.url).href;
function t() {
	return new Worker(e, { type: "module" });
}
export { t as createRenderWorker };
