import "i18next";

import type { Resources } from "@/lang";

// Typed keys: `t("_pages:home.hero.nmae")` is a compile error.
declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "_pages";
    resources: Resources;
  }
}
