import { n as __exportAll, t as SITE } from "./site_B0-gNb8R.mjs";
import { a as renderComponent, f as renderTemplate, h as addAttribute, p as maybeRenderHead } from "./server_DZ0K03Gt.mjs";
import { r as createComponent, t as $$Base } from "./Base_BpJYVHYO.mjs";
//#region src/pages/contact.astro
var contact_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Contact,
	file: () => $$file,
	url: () => $$url
});
var $$Contact = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": `Contact ${SITE.name}`,
		"description": "Send a correction or a question about an espresso machine error code.",
		"crumbs": [{
			name: "Home",
			href: "/"
		}, {
			name: "Contact",
			href: "/contact"
		}]
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<h1>Contact</h1><p>Email <a${addAttribute(`mailto:${SITE.contactEmail}`, "href")}>${SITE.contactEmail}</a>. Include the machine model number (on the base plate) and the exact code shown.</p><p>We read everything but cannot diagnose individual machines by email.</p>` })}`;
}, "/Users/kinsey/niche-site-tr/src/pages/contact.astro", void 0);
var $$file = "/Users/kinsey/niche-site-tr/src/pages/contact.astro";
var $$url = "/contact";
//#endregion
//#region \0virtual:astro:page:src/pages/contact@_@astro
var page = () => contact_exports;
//#endregion
export { page };
