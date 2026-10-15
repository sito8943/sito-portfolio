import { DEFAULT_LANG, LANGS } from "@/lang";

/** i18next namespaces: one module per namespace in `src/lang/<lng>/`. */
export const NAMESPACES = ["_common", "_pages"] as const;

export const SUPPORTED_LANGUAGES = LANGS;

export const FALLBACK_LANGUAGE = DEFAULT_LANG;

export const DEFAULT_NAMESPACE = "_pages";

/**
 * Each language is its own prerendered page (`/en/`, `/es/`): the URL decides the language.
 * `localStorage` remembers it for the redirect on `/`.
 */
export const DETECTION = {
  order: ["path", "localStorage", "navigator"],
  lookupFromPathIndex: 0,
  caches: ["localStorage"],
};
