import {
  LOGO_CENTER,
  PIECE_SPIN,
  PIECE_SPREAD,
  PIECE_SPREAD_STEP,
} from "./constants";
import type { AnchorBox, LogoPiece, PieceScatter } from "./types";

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

/**
 * Scatter for the piece at `index`: away from the logo centre, at a distance and
 * spin that vary per piece so the lines don't move in lockstep.
 */
export function pieceScatter(
  { x1, y1, x2, y2 }: LogoPiece,
  index: number,
): PieceScatter {
  const midX = (x1 + x2) / 2 - LOGO_CENTER.x;
  const midY = (y1 + y2) / 2 - LOGO_CENTER.y;
  const length = Math.hypot(midX, midY) || 1;
  const distance = PIECE_SPREAD + (index % 3) * PIECE_SPREAD_STEP;
  const spin = (index % 2 ? 1 : -1) * PIECE_SPIN * (0.5 + (index % 4) / 6);
  return {
    x: (midX / length) * distance,
    y: (midY / length) * distance,
    rotate: spin,
  };
}
