import type { Plugin } from "vite";

import { DEFAULT_LANG, LANGS, dictionaries, type Lang } from "../src/lang";

/** Comment in `index.html` replaced by the localized `<title>` and meta tags. */
const MARKER = "<!-- lang-head -->";

type LangPagesOptions = {
  /** Public origin, without trailing slash (canonical and hreflang URLs). */
  siteUrl: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

/** Localized `<title>`, description, social meta and hreflang links for one language. */
function renderHead(lang: Lang, siteUrl: string) {
  const { title, description, ogLocale } = dictionaries[lang].meta;
  const t = escapeHtml(title);
  const d = escapeHtml(description);
  const url = `${siteUrl}/${lang}/`;
  const alternates = LANGS.filter((l) => l !== lang).map(
    (l) =>
      `<meta property="og:locale:alternate" content="${dictionaries[l].meta.ogLocale}" />`,
  );
  const hreflangs = LANGS.map(
    (l) => `<link rel="alternate" hreflang="${l}" href="${siteUrl}/${l}/" />`,
  );
  return [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:locale" content="${ogLocale}" />`,
    ...alternates,
    `<link rel="canonical" href="${url}" />`,
    ...hreflangs,
    `<link rel="alternate" hreflang="x-default" href="${siteUrl}/" />`,
  ].join("\n    ");
}

/**
 * Inline script for `/`: sends visitors to their saved or browser language before anything paints.
 * Only on `/` exactly, since the same file is the SPA fallback for unknown paths (404 page).
 */
function renderRedirect() {
  const langs = JSON.stringify(LANGS);
  return `<script>(function(){if(location.pathname!=="/")return;var L=${langs},s=null;try{s=localStorage.getItem("i18nextLng")}catch(e){}var c=[s].concat(navigator.languages||[navigator.language]);var l="${DEFAULT_LANG}";for(var i=0;i<c.length;i++){var v=(c[i]||"").slice(0,2).toLowerCase();if(L.indexOf(v)>-1){l=v;break}}location.replace("/"+l+"/"+location.search+location.hash)})()</script>`;
}

const localize = (html: string, lang: Lang, head: string) =>
  html
    .replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)
    .replace(MARKER, head);

/**
 * Build: emits one static page per language (`/en/index.html`, `/es/index.html`) with translated
 * metadata, so crawlers and link previews see it without running JS. `/index.html` keeps the
 * default language's metadata plus the language redirect.
 * Dev: serves the default language's metadata.
 */
export function langPages({ siteUrl }: LangPagesOptions): Plugin {
  return {
    name: "lang-pages",
    enforce: "post",
    transformIndexHtml: {
      order: "post",
      handler(html, ctx) {
        if (ctx.server)
          return localize(
            html,
            DEFAULT_LANG,
            renderHead(DEFAULT_LANG, siteUrl),
          );
        return html;
      },
    },
    generateBundle(_, bundle) {
      const index = bundle["index.html"];
      if (index?.type !== "asset" || typeof index.source !== "string") {
        this.error("lang-pages: index.html not found in the bundle");
      }
      const html = index.source;
      if (!html.includes(MARKER))
        this.error(`lang-pages: ${MARKER} missing from index.html`);

      for (const lang of LANGS) {
        this.emitFile({
          type: "asset",
          fileName: `${lang}/index.html`,
          source: localize(html, lang, renderHead(lang, siteUrl)),
        });
      }
      index.source = localize(
        html,
        DEFAULT_LANG,
        `${renderRedirect()}\n    ${renderHead(DEFAULT_LANG, siteUrl)}`,
      );
    },
  };
}
