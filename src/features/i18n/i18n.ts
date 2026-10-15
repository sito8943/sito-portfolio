import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// resources
import esCommon from "@/lang/es/_common.json";
import esPages from "@/lang/es/_pages.json";
import enCommon from "@/lang/en/_common.json";
import enPages from "@/lang/en/_pages.json";

import {
  DEFAULT_NAMESPACE,
  FALLBACK_LANGUAGE,
  NAMESPACES,
  SUPPORTED_LANGUAGES,
} from "./constants";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: FALLBACK_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGES,
    ns: NAMESPACES,
    defaultNS: DEFAULT_NAMESPACE,
    resources: {
      en: {
        _common: enCommon,
        _pages: enPages,
      },
      es: {
        _common: esCommon,
        _pages: esPages,
      },
    },
  });

export default i18n;
