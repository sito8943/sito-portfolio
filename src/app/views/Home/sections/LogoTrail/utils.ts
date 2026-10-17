import type { AnchorBox } from "./types";

export const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

export const lerp = (from: number, to: number, t: number) =>
  from + (to - from) * t;

/** Ease in and out, for horizontal drift and size. */
export const smoothstep = (t: number) => t * t * (3 - 2 * t);

/** The anchor marked with `data-logo-anchor="<name>"`, measured against `parent`. */
export function measureAnchor(name: string, parent: DOMRect): AnchorBox | null {
  const node = document.querySelector(`[data-logo-anchor="${name}"]`);
  if (!node) return null;
  const rect = node.getBoundingClientRect();
  if (!rect.width) return null;
  return {
    left: rect.left - parent.left,
    top: rect.top - parent.top,
    size: rect.width,
  };
}
