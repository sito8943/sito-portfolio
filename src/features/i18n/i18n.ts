import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { resources } from "@/lang";

import {
  DEFAULT_NAMESPACE,
  DETECTION,
  FALLBACK_LANGUAGE,
  NAMESPACES,
  SUPPORTED_LANGUAGES,
} from "./constants";

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: FALLBACK_LANGUAGE,
  supportedLngs: SUPPORTED_LANGUAGES,
  ns: NAMESPACES,
  defaultNS: DEFAULT_NAMESPACE,
  detection: DETECTION,
  resources,
});

export default i18n;
