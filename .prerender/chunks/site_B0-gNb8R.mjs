//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region src/site.ts
var env = (k) => Object.assign({
	"ASSETS_PREFIX": void 0,
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SITE": "https://tr.codefixcoffee.com",
	"SSR": true
}, { _: "/Users/kinsey/niche-site-tr/node_modules/.bin/astro" })?.[k] || process.env[k] || "";
var SITE = {
	name: "CodeFix",
	tagline: "Appliance error codes, explained with the fix first.",
	description: "Look up any espresso machine, dishwasher, dryer or oven error code. Each page gives the fix, the part, the cost and whether it is worth repairing.",
	contactEmail: env("CONTACT_EMAIL") || "hello@example.com",
	updated: "2026-09-02",
	adsenseClient: env("ADSENSE_CLIENT"),
	adSlotInContent: env("ADSENSE_SLOT_INCONTENT"),
	adSlotFooter: env("ADSENSE_SLOT_FOOTER"),
	cfAnalyticsToken: env("CF_ANALYTICS_TOKEN")
};
//#endregion
export { __exportAll as n, SITE as t };
