import { SIMPLE_ICONS_CDN } from "./constants";

/** Whole years elapsed since `start`. */
export const yearsSince = (start: number) => new Date().getFullYear() - start;

/** CSS mask url for a simple-icons logo. */
export const iconUrl = (slug: string) => `url(${SIMPLE_ICONS_CDN}/${slug}.svg)`;

/** Tab index after an arrow/Home/End key, or null for other keys. */
export const nextTabIndex = (key: string, current: number, total: number) => {
  if (key === "ArrowRight") return (current + 1) % total;
  if (key === "ArrowLeft") return (current - 1 + total) % total;
  if (key === "Home") return 0;
  if (key === "End") return total - 1;
  return null;
};
