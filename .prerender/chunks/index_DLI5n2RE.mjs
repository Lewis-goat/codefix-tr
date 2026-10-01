import { n as __exportAll } from "./site_B0-gNb8R.mjs";
import { S as createAstro, a as renderComponent, f as renderTemplate, h as addAttribute, o as Fragment, p as maybeRenderHead } from "./server_DZ0K03Gt.mjs";
import { r as createComponent, t as $$Base } from "./Base_BpJYVHYO.mjs";
import { a as entriesOf, l as modelsOf, r as brands } from "./catalog-loc_DFmFZQpW.mjs";
//#region src/pages/[brand]/index.astro
var _brand__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://tr.codefixcoffee.com");
function getStaticPaths() {
	return brands.map((b) => ({
		params: { brand: b.slug },
		props: { b }
	}));
}
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const PHOTOS = {
		breville: {
			file: "/img/breville.jpg",
			alt: "Breville Bambino espresso machine with a bottomless portafilter and a scale",
			author: "Weirdwiki64",
			license: "CC BY-SA 4.0",
			date: "6 Apr 2022",
			src: "https://commons.wikimedia.org/wiki/File:Breville_Bambino_with_bottomless_portafilter_and_scale..webp"
		},
		delonghi: {
			file: "/img/delonghi.png",
			alt: "De'Longhi espresso machines",
			author: "Angela CoffeeRank",
			license: "CC BY 2.0",
			date: "9 Dec 2020",
			src: "https://commons.wikimedia.org/wiki/File:De%27Longhi_espresso_machines.png"
		},
		"philips-saeco": {
			file: "/img/saeco.jpg",
			alt: "Saeco automatic coffee machine",
			author: "Matti Blume",
			license: "CC BY-SA 4.0",
			date: "19 Sep 2025",
			src: "https://commons.wikimedia.org/wiki/File:Saeco_(LRM_20250919_142532).jpg"
		},
		samsung: {
			file: "/img/samsung.jpg",
			alt: "Samsung Flex Duo range with dual-door oven",
			author: "Maurizio Pesce",
			license: "CC BY 2.0",
			date: "10 Jan 2015",
			src: "https://commons.wikimedia.org/wiki/File:Samsung_Flex_Duo_Range_with_Dual_Door_Oven_(16656139477).jpg"
		},
		ge: {
			file: "/img/ge.jpg",
			alt: "GE Hotpoint appliance",
			author: "Nitram242",
			license: "CC BY 2.0",
			date: "13 Jul 2012",
			src: "https://commons.wikimedia.org/wiki/File:GE_Hotpoint_(7568364868).jpg"
		},
		nespresso: {
			file: "/img/nespresso.jpg",
			alt: "Nespresso Vertuo Pop capsule coffee machine",
			author: "Tifa Zabat",
			license: "CC BY-SA 4.0",
			date: "14 Feb 2023",
			src: "https://commons.wikimedia.org/wiki/File:Nespresso_Vertuo_Pop.jpg"
		}
	};
	const { b } = Astro.props;
	const ms = modelsOf(b.slug);
	const crumbs = [{
		name: "Home",
		href: "/"
	}, {
		name: b.name,
		href: `/${b.slug}`
	}];
	const total = ms.reduce((n, m) => n + entriesOf(b.slug, m.slug).length, 0);
	const photo = PHOTOS[b.slug];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": `${b.name} error codes: full list and fixes`,
		"description": `${b.name} error codes for every model we cover (${total} codes), each with a fix-first page: meaning, part, cost, and whether to repair.`,
		"crumbs": crumbs
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<h1>${b.name} error codes</h1><p class="lead">${b.blurb}</p>${photo && renderTemplate`<figure class="brand-photo"><img${addAttribute(photo.file, "src")}${addAttribute(photo.alt, "alt")} loading="lazy" width="640"><figcaption>Photo: ${photo.author}, ${photo.license}, via <a${addAttribute(photo.src, "href")} rel="nofollow">Wikimedia Commons</a> (${photo.date})</figcaption></figure>`}<div class="grid">${ms.map((m) => renderTemplate`<a${addAttribute(`/${b.slug}/${m.slug}`, "href")}><strong>${b.name} ${m.name}</strong><small>${m.sku} · ${entriesOf(b.slug, m.slug).length} codes · shown as "${m.codeFormat}"</small></a>`)}</div>${ms.length === 1 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<h2>All ${b.name} codes</h2><div class="tablewrap"><table><tr><th>Code</th><th>Meaning</th><th>DIY</th></tr>${entriesOf(b.slug, ms[0].slug).map((e) => renderTemplate`<tr><td><a${addAttribute(`/${b.slug}/${ms[0].slug}/${e.slug}`, "href")}><code>${e.shown}</code></a></td><td>${e.meaning}</td><td>${e.diy}</td></tr>`)}</table></div>` })}`}` })}`;
}, "/Users/kinsey/niche-site-tr/src/pages/[brand]/index.astro", void 0);
var $$file = "/Users/kinsey/niche-site-tr/src/pages/[brand]/index.astro";
var $$url = "/[brand]";
//#endregion
//#region \0virtual:astro:page:src/pages/[brand]/index@_@astro
var page = () => _brand__exports;
//#endregion
export { page };
