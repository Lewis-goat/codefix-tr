import { n as __exportAll } from "./site_B0-gNb8R.mjs";
import { S as createAstro, a as renderComponent, f as renderTemplate, h as addAttribute, o as Fragment, p as maybeRenderHead } from "./server_DZ0K03Gt.mjs";
import { n as $$AdSlot, r as createComponent, t as $$Base } from "./Base_BpJYVHYO.mjs";
import { a as entriesOf, i as entries, n as brandBySlug, s as modelBy, t as ANYTIME, u as href } from "./catalog-loc_DFmFZQpW.mjs";
//#region src/locale.ts
var L = {
	shortAnswer: "QUICK_ANSWER",
	severityLabel: (s) => ({
		low: "SEV_LOW",
		medium: "SEV_MEDIUM",
		high: "SEV_HIGH"
	})[s] ?? s,
	diyLabel: (d) => ({
		easy: "DIY_EASY",
		moderate: "DIY_MODERATE",
		hard: "DIY_HARD",
		"not recommended": "DIY_NOT_RECOMMENDED"
	})[d] ?? d
};
//#endregion
//#region src/pages/[brand]/[model]/[code].astro
var _code__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Code,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://tr.codefixcoffee.com");
function getStaticPaths() {
	return entries.map((e) => ({
		params: {
			brand: e.brandSlug,
			model: e.modelSlug,
			code: e.slug
		},
		props: { e }
	}));
}
var $$Code = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Code;
	const { e } = Astro.props;
	const b = brandBySlug(e.brandSlug);
	const m = modelBy(e.brandSlug, e.modelSlug);
	const siblings = entriesOf(e.brandSlug, e.modelSlug).filter((x) => x.component === e.component && x.slug !== e.slug).slice(0, 6);
	const elsewhere = entries.filter((x) => x.brandSlug === e.brandSlug && x.modelSlug !== e.modelSlug && x.meaning === e.meaning).slice(0, 4);
	const modelLabel = `${b.name} ${m.shortName ?? m.name}`.trim();
	const title = `${modelLabel} ${e.shown}: what it means and how to fix it`;
	const desc = `${e.shown} on the ${modelLabel} means: ${e.meaning}. The fix, the part (${e.component}), the cost, and whether it is worth repairing.`;
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
			name: m.shortName || m.name,
			href: `/${b.slug}/${m.slug}`
		},
		{
			name: e.shown,
			href: href(e)
		}
	];
	const faq = [
		{
			q: `What does ${e.shown} mean on the ${modelLabel}?`,
			a: `${e.meaning}. ${e.quick}`
		},
		{
			q: `Can I fix ${e.shown} myself?`,
			a: `DIY difficulty: ${e.diy}. ${e.steps.slice(0, 2).join(" ")}`
		},
		{
			q: `How much does it cost to fix ${e.shown}?`,
			a: `${e.partCost} ${e.serviceCost}`
		},
		{
			q: `Is it worth repairing?`,
			a: e.worth
		}
	];
	const phaseQ = [`${e.shown} during startup or during use?`, `When does ${e.shown} typically show up?`];
	const keepMap = {
		high: `Treat it as a stop-using signal: ${e.shown} marks a fault that can damage the machine (or worse) if you keep running it. Do the safe first steps below, then stop.`,
		medium: `Usually you can finish the drink you are making, but do not ignore it — the underlying fault rarely heals itself. Work through the cheap checks first.`,
		low: `Generally yes — ${e.shown} is more of an annoyance than an emergency. Fix it when convenient; just do not let the cause sit for months.`
	};
	const clearMap = {
		easy: `Often, yes. The first step (${e.steps[0].toLowerCase().replace(/\.$/, "")}) clears a share of cases on its own. If the code comes straight back, the part is genuinely at fault.`,
		moderate: `Sometimes. Try the reset and cleaning steps first — they cost nothing and clear the milder cases. A code that returns within a day or two needs the parts fix.`,
		hard: `Rarely. A reset or power cycle is worth one try, but ${e.shown} with a "hard" difficulty rating almost always means a failed component that has to be replaced.`
	};
	const timeMap = {
		easy: `Fifteen to thirty minutes with basic tools, once you have the part.`,
		moderate: `Thirty minutes to an hour if you are comfortable opening the case; budget an afternoon the first time.`,
		hard: `This one is a bench repair for most owners — the teardown, test and reassembly are the bulk of the work, not the part itself.`
	};
	const idx = entries.indexOf(e);
	faq.push({
		q: phaseQ[idx % 2],
		a: `${modelLabel}s report ${e.shown} ${e.phase}. ${e.phase === ANYTIME ? "There is no reliable pattern to when it appears — treat any occurrence as real." : "That timing is a useful clue when narrowing the cause."}`
	});
	faq.push({
		q: `Can I keep using the machine with ${e.shown} showing?`,
		a: keepMap[e.severity]
	});
	faq.push({
		q: `Will ${e.shown} clear on its own?`,
		a: clearMap[e.diy]
	});
	faq.push({
		q: `How long does the repair take?`,
		a: timeMap[e.diy]
	});
	const ld = [{
		"@context": "https://schema.org",
		"@type": "HowTo",
		name: `Fix ${e.shown} on the ${modelLabel}`,
		description: e.quick,
		step: e.steps.map((s, i) => ({
			"@type": "HowToStep",
			position: i + 1,
			text: s
		}))
	}, {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faq.slice(0, 6).map((f) => ({
			"@type": "Question",
			name: f.q,
			acceptedAnswer: {
				"@type": "Answer",
				text: f.a
			}
		}))
	}];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": title,
		"description": desc,
		"jsonLd": ld,
		"crumbs": crumbs
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<h1>${modelLabel} ${e.shown}: ${e.faultTitle.toLowerCase()}</h1><p class="lead"><strong>${e.shown} means:</strong> ${e.meaning}.</p><div class="box answer"><strong>Short answer.</strong> ${e.quick}</div><div class="facts"><div><b>Part at fault</b>${e.component}</div><div><b>Severity</b><span${addAttribute(`sev-${e.severity}`, "class")}>${L.severityLabel(e.severity)}</span></div><div><b>DIY difficulty</b>${L.diyLabel(e.diy)}</div><div><b>When it appears</b>${e.phase}</div></div><h2>How to fix ${e.shown}</h2><ol class="steps">${e.steps.map((s) => renderTemplate`<li>${s}</li>`)}</ol>${e.extra && e.extra.map((p) => renderTemplate`<p>${p}</p>`)}${renderComponent($$result, "AdSlot", $$AdSlot, {})}<h2>When to stop and call a repairer</h2><p>${e.stop}</p><h2>What it costs</h2><p><strong>Parts:</strong> ${e.partCost}</p><p><strong>Service:</strong> ${e.serviceCost}</p><p><strong>Worth repairing?</strong> ${e.worth}</p>${m.logAccess && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<h2>How to check the error log</h2><p>${m.logAccess}</p><p class="note">Clear the log after a repair so you can tell whether the fault has really gone.</p>` })}`}${siblings.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<h2>Related codes on the same part</h2><ul>${siblings.map((s) => renderTemplate`<li><a${addAttribute(href(s), "href")}>${s.shown}</a> — ${s.meaning}</li>`)}</ul>` })}`}${elsewhere.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<h2>Same fault on other ${b.name} machines</h2><ul>${elsewhere.map((s) => renderTemplate`<li><a${addAttribute(href(s), "href")}>${modelBy(s.brandSlug, s.modelSlug).shortName || modelBy(s.brandSlug, s.modelSlug).name} ${s.shown}</a></li>`)}</ul>` })}`}<h2>FAQ</h2>${faq.map((f) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<h3>${f.q}</h3><p>${f.a}</p>` })}`)}<p class="note">Code meanings are compiled from manufacturer service references and repair documentation for the ${m.sku}; fixes follow documented repairs and owner reports. Model revisions can differ. If your appliance is under warranty, contact the manufacturer before opening it.</p>` })}`;
}, "/Users/kinsey/niche-site-tr/src/pages/[brand]/[model]/[code].astro", void 0);
var $$file = "/Users/kinsey/niche-site-tr/src/pages/[brand]/[model]/[code].astro";
var $$url = "/[brand]/[model]/[code]";
//#endregion
//#region \0virtual:astro:page:src/pages/[brand]/[model]/[code]@_@astro
var page = () => _code__exports;
//#endregion
export { page };
