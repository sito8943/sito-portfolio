import { en } from "./en";
import { es } from "./es";
import type { Dict, Lang, Resources } from "./types";

export type { Dict, Lang, Meta, Resources } from "./types";

/** Supported languages. The first one is the fallback. */
export const LANGS = ["en", "es"] as const satisfies readonly Lang[];

export const DEFAULT_LANG: Lang = "en";

export const dictionaries: Record<Lang, Dict> = { en, es };

/** i18next resources: every namespace except `meta`. */
export const resources: Record<Lang, Resources> = {
  en: { _common: en._common, _pages: en._pages },
  es: { _common: es._common, _pages: es._pages },
};
