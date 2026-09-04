//#region packages/pptx/src/render-worker.ts?worker&url
var e = "" + new URL("assets/render-worker-CHW0F0n6.js", import.meta.url).href;
//#endregion
//#region packages/pptx/src/render-worker-host.ts
function t() {
	return new Worker(e, { type: "module" });
}
//#endregion
export { t as createRenderWorker };
