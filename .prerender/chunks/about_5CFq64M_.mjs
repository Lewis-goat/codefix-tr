import { n as __exportAll, t as SITE } from "./site_B0-gNb8R.mjs";
import { a as renderComponent, f as renderTemplate, p as maybeRenderHead } from "./server_DZ0K03Gt.mjs";
import { r as createComponent, t as $$Base } from "./Base_BpJYVHYO.mjs";
//#region src/pages/about.astro
var about_exports = /* @__PURE__ */ __exportAll({
	default: () => $$About,
	file: () => $$file,
	url: () => $$url
});
var $$About = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": `About ${SITE.name}`,
		"description": `What ${SITE.name} is, where the error-code data comes from, and how to contact us.`,
		"crumbs": [{
			name: "Home",
			href: "/"
		}, {
			name: "About",
			href: "/about"
		}]
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<h1>About ${SITE.name}</h1><p>Manufacturers rarely publish what their error codes mean, so owners end up in paywalled Q&A sites and scanned service manuals. ${SITE.name} collects the code tables for each machine and writes one page per code that leads with the fix, the part, and the cost, so you can decide in a minute whether to reach for a screwdriver or a repairer.</p><h2>Where the data comes from</h2><p>Code tables are compiled from manufacturer service documentation and established repair-shop references, then cross-checked against owner reports on repair forums. Fix steps follow documented repairs. Where a code has several possible causes, the page says so and orders the checks cheapest first.</p><h2>Independence</h2><p>${SITE.name} is independent and not affiliated with Breville, Sage or any manufacturer. Pages may carry advertising; that never affects what a page recommends.</p><h2>Corrections</h2><p>If a code meaning or fix on your machine differs from what we list, please <a href="/contact">tell us</a> with the model number and what you found. Corrections are credited on the page.</p>` })}`;
}, "/Users/kinsey/niche-site-tr/src/pages/about.astro", void 0);
var $$file = "/Users/kinsey/niche-site-tr/src/pages/about.astro";
var $$url = "/about";
//#endregion
//#region \0virtual:astro:page:src/pages/about@_@astro
var page = () => about_exports;
//#endregion
export { page };
