/** Box relative to the logo's offset parent, in px. */
export type AnchorBox = {
  left: number;
  top: number;
  size: number;
};

/** One straight stroke of the logo, in viewBox units. */
export type LogoPiece = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

/** Where a piece drifts to when the logo comes apart. */
export type PieceScatter = {
  x: number;
  y: number;
  rotate: number;
};
