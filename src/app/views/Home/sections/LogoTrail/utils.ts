import type { AnchorBox } from "./types";

export const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

export const lerp = (from: number, to: number, t: number) =>
  from + (to - from) * t;

/** Ease in and out, for horizontal drift and size. */
export const smoothstep = (t: number) => t * t * (3 - 2 * t);

/** 0 before `start`, 1 after `end`, eased in between. */
export const ramp = (t: number, start: number, end: number) =>
  smoothstep(clamp((t - start) / (end - start)));

/** The anchor marked with `data-logo-anchor="<name>"`, measured against `parent`. */
export function measureAnchor(name: string, parent: DOMRect): AnchorBox | null {
  const node = document.querySelector<HTMLElement>(
    `[data-logo-anchor="${name}"]`,
  );
  if (!node) return null;
  const rect = node.getBoundingClientRect();
  if (!rect.width) return null;
  return {
    node,
    left: rect.left - parent.left,
    top: rect.top - parent.top,
    size: rect.width,
  };
}

/** Anchors measured in order, stopping at the first one not on the page yet (lazy sections). */
export function measureStops(names: readonly string[], parent: DOMRect) {
  const stops: AnchorBox[] = [];
  for (const name of names) {
    const stop = measureAnchor(name, parent);
    if (!stop) break;
    stops.push(stop);
  }
  return stops;
}
