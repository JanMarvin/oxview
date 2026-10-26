var e = "" + new URL("assets/render-worker-ph4iY7VS.js", import.meta.url).href;
function t() {
	return new Worker(e, { type: "module" });
}
export { t as createRenderWorker };
