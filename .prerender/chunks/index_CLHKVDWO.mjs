import { n as __exportAll, t as SITE } from "./site_B0-gNb8R.mjs";
import { S as createAstro, a as renderComponent, f as renderTemplate, h as addAttribute, p as maybeRenderHead } from "./server_DZ0K03Gt.mjs";
import { r as createComponent, t as $$Base } from "./Base_BpJYVHYO.mjs";
import { c as models, i as entries, n as brandBySlug, o as featured, r as brands, s as modelBy, u as href } from "./catalog-loc_DFmFZQpW.mjs";
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
createAstro("https://tr.codefixcoffee.com");
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const popular = featured.map((f) => entries.find((e) => e.brandSlug === f.brandSlug && e.modelSlug === f.modelSlug && e.slug === f.slug)).filter(Boolean);
	const ld = [{
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: SITE.name,
		url: Astro.site?.toString(),
		description: SITE.description
	}];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": `${SITE.name}: appliance error codes and how to fix them`,
		"description": SITE.description,
		"jsonLd": ld
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<h1>Appliance error codes, with the fix first</h1><p class="lead">${entries.length} codes across ${models.length} machine families from ${brands.length} brands. Every page tells you what the code means, what part is at fault, what it costs, and whether it is worth repairing.</p><h2>Pick your brand</h2><div class="grid">${brands.map((b) => renderTemplate`<a${addAttribute(`/${b.slug}`, "href")}><strong>${b.name}</strong><small>${entries.filter((e) => e.brandSlug === b.slug).length} codes</small></a>`)}</div><h2>Browse by appliance</h2><div class="grid"><a href="/samsung-oven-error-codes/"><strong>Samsung oven error codes</strong><small>Every C-code, E-code and panel code in one table</small></a></div><h2>Most-searched codes</h2><div class="grid">${popular.map((e) => renderTemplate`<a${addAttribute(href(e), "href")}><strong>${brandBySlug(e.brandSlug).name} ${modelBy(e.brandSlug, e.modelSlug).shortName ?? modelBy(e.brandSlug, e.modelSlug).name} ${e.shown}</strong><small>${e.meaning}</small></a>`)}</div><h2>How to use this site</h2><p>Find the code on the display (or in the hidden error log; each machine page explains how to open it), open the matching page and work down the steps in order. Each step is cheapest-first. Stop where the page tells you to stop.</p><p class="note">Sage is the Breville brand name in the UK and Europe; Saeco machines are made by Philips. The codes are identical across those brand names.</p>` })}`;
}, "/Users/kinsey/niche-site-tr/src/pages/index.astro", void 0);
var $$file = "/Users/kinsey/niche-site-tr/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
