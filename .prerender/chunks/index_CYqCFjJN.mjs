import { n as __exportAll } from "./site_B0-gNb8R.mjs";
import { S as createAstro, a as renderComponent, f as renderTemplate, h as addAttribute, o as Fragment, p as maybeRenderHead } from "./server_DZ0K03Gt.mjs";
import { n as $$AdSlot, r as createComponent, t as $$Base } from "./Base_BpJYVHYO.mjs";
import { a as entriesOf, c as models, l as modelsOf, n as brandBySlug, r as brands } from "./catalog-loc_DFmFZQpW.mjs";
//#region src/pages/[brand]/[model]/index.astro
var _model__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://tr.codefixcoffee.com");
function getStaticPaths() {
	return models.map((m) => ({
		params: {
			brand: m.brandSlug,
			model: m.slug
		},
		props: { m }
	}));
}
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const { m } = Astro.props;
	const b = brandBySlug(m.brandSlug);
	const list = entriesOf(m.brandSlug, m.slug);
	const crumbs = [
		{
			name: "Home",
			href: "/"
		},
		{
			name: b.name,
			href: `/${b.slug}`
		},
		{
			name: m.name,
			href: `/${b.slug}/${m.slug}`
		}
	];
	const title = `${b.name} ${m.name} (${m.sku}) error codes: full list and fixes`;
	const desc = `All ${list.length} ${b.name} ${m.name} error codes with what each means, the part at fault and the fix.${m.logAccess ? " Plus how to read the stored error log." : ""}`;
	const others = modelsOf(b.slug).filter((x) => x.slug !== m.slug);
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": title,
		"description": desc,
		"crumbs": crumbs
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<h1>${b.name} ${m.name} error codes</h1><p class="lead">${m.blurb}</p>${m.notes && renderTemplate`<p class="note">${m.notes}</p>`}${m.logAccess && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<h2>How to read the stored error log</h2><div class="box">${m.logAccess}</div><p class="note">Service menus are intended for technicians. Reading the log is harmless; do not change calibration values.</p>` })}`}${renderComponent($$result, "AdSlot", $$AdSlot, {})}<h2>All codes</h2><div class="tablewrap"><table><tr><th>Code</th><th>Meaning</th><th>Fault</th><th>DIY</th></tr>${list.map((e) => renderTemplate`<tr><td><a${addAttribute(`/${b.slug}/${m.slug}/${e.slug}`, "href")}><code>${e.shown}</code></a></td><td>${e.meaning}</td><td>${e.faultTitle}</td><td>${e.diy}</td></tr>`)}</table></div>${others.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<h2>Other ${b.name} machines</h2><div class="grid">${others.map((x) => renderTemplate`<a${addAttribute(`/${b.slug}/${x.slug}`, "href")}><strong>${x.name}</strong><small>${x.sku}</small></a>`)}</div>` })}`}<h2>Other brands</h2><div class="grid">${brands.filter((x) => x.slug !== b.slug).map((x) => renderTemplate`<a${addAttribute(`/${x.slug}`, "href")}><strong>${x.name}</strong></a>`)}</div>` })}`;
}, "/Users/kinsey/niche-site-tr/src/pages/[brand]/[model]/index.astro", void 0);
var $$file = "/Users/kinsey/niche-site-tr/src/pages/[brand]/[model]/index.astro";
var $$url = "/[brand]/[model]";
//#endregion
//#region \0virtual:astro:page:src/pages/[brand]/[model]/index@_@astro
var page = () => _model__exports;
//#endregion
export { page };
