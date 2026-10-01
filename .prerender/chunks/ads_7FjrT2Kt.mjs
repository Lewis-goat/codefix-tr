import { n as __exportAll, t as SITE } from "./site_B0-gNb8R.mjs";
//#region src/pages/ads.txt.ts
var ads_txt_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var GET = () => {
	const pub = SITE.adsenseClient.replace(/^ca-/, "");
	const body = pub ? `google.com, ${pub}, DIRECT, f08c47fec0942fa0\n` : "# Set ADSENSE_CLIENT to populate this file\n";
	return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
//#endregion
//#region \0virtual:astro:page:src/pages/ads.txt@_@ts
var page = () => ads_txt_exports;
//#endregion
export { page };
