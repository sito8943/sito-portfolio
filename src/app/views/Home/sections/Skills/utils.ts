import { STACK_ICONS } from "./constants";
import type { StackIconSlug } from "./types";

/** Whole years elapsed since `start`. */
export const yearsSince = (start: number) => new Date().getFullYear() - start;

/** CSS mask url for a stack logo. */
export const iconUrl = (slug: StackIconSlug) => `url(${STACK_ICONS[slug]})`;

/** Tab index after an arrow/Home/End key, or null for other keys. */
export const nextTabIndex = (key: string, current: number, total: number) => {
  if (key === "ArrowRight") return (current + 1) % total;
  if (key === "ArrowLeft") return (current - 1 + total) % total;
  if (key === "Home") return 0;
  if (key === "End") return total - 1;
  return null;
};

/** Fast start, gentle landing: `t` and the result both run 0 to 1. */
export const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;
