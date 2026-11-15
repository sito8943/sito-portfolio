import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import type { STACK_ICONS } from "./constants";

/** Logo name, a key of `STACK_ICONS`. */
export type StackIconSlug = keyof typeof STACK_ICONS;

/** Framework or library listed under a stack. */
export type StackTool = {
  /** Display name (also used in the aria label). */
  id: string;
  /** Logo in `STACK_ICONS`; without it a monogram is shown. */
  slug?: StackIconSlug;
  /** Monogram shown when there is no slug (e.g. "Ps"). */
  monogram?: string;
  /** Official brand color, shown on hover. */
  brand: string;
  link: string;
};

/** A stack: generic icon in a diamond, its tools listed below. */
export type Stack = {
  /** i18n key under `_pages:home.skills.stacks`. */
  id: "frontend" | "backend" | "devops" | "mobile" | "design";
  icon: IconDefinition;
  tools: StackTool[];
};
