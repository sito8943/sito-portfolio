import { useTranslation as useI18nextTranslation } from "react-i18next";

import { NAMESPACES } from "../constants";

/** `useTranslation` with every namespace loaded, so `t("_common:…")` and `t("_pages:…")` are typed. */
export function useTranslation() {
  return useI18nextTranslation(NAMESPACES);
}
