import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { namespaces } from "./lang/nameSpaces";

// resources
// es
import esCommon from "./lang/es/_common.json";
import esPages from "./lang/es/_pages.json";
// en
import enCommon from "./lang/en/_common.json";
import enPages from "./lang/en/_pages.json";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "es"],
    ns: namespaces,
    defaultNS: "_pages",
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
