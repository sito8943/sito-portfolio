import type { en } from "./en";

export type Lang = "en" | "es";

/** Shape every language must match: English is the source of truth. */
export type Dict = typeof en;

/** i18next namespaces (`_common`, `_pages`). */
export type Resources = Omit<Dict, "meta">;

/** Page metadata, written into each language's static HTML at build time. */
export type Meta = Dict["meta"];
