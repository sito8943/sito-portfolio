import { faLanguage } from "@fortawesome/free-solid-svg-icons";

import { langHome } from "@/shared/config";
import { Icon } from "@/shared/ui/atoms";
import { Select } from "@/shared/ui/molecules";
import type { Lang } from "@/lang";

import { useTranslation } from "../../hooks";
import {
  FALLBACK_LANGUAGE,
  LANGUAGE_NAMES,
  SUPPORTED_LANGUAGES,
} from "../../constants";

import type { LanguageSelectProps } from "./types";

/**
 * Switches the language, like the presentation deck's selector. Each language is its own
 * prerendered page, so picking one opens that page (`/en/`, `/es/`); the detector remembers it.
 * Opens below by default; `placement` opens it above where there's no room below (the footer).
 */
export function LanguageSelect({
  placement = "bottom-end",
}: LanguageSelectProps) {
  const { t, i18n } = useTranslation();
  const options = SUPPORTED_LANGUAGES.map((lng) => ({
    value: lng,
    label: LANGUAGE_NAMES[lng],
  }));
  const current = (i18n.resolvedLanguage ?? FALLBACK_LANGUAGE) as Lang;

  return (
    <Select
      value={current}
      options={options}
      onChange={(lng) => {
        if (lng !== current) window.location.assign(langHome(lng));
      }}
      label={t("_common:ariaLabels.language")}
      icon={<Icon icon={faLanguage} />}
      placement={placement}
      className="language-select"
    />
  );
}
