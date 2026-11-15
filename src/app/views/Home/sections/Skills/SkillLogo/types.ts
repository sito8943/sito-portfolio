import type { StackIconSlug } from "../types";

export type SkillLogoProps = {
  /** Logo in `STACK_ICONS`. */
  slug?: StackIconSlug | undefined;
  /** Fallback letters when there is no slug. */
  monogram?: string | undefined;
};
