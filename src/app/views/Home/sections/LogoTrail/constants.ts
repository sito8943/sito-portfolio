import type { LogoPiece } from "./types";

export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/** MiniLogo viewBox, and its centre, which pieces scatter away from. */
export const LOGO_VIEWBOX = "0 0 76 77";
export const LOGO_CENTER = { x: 38, y: 38.3 };

/** The MiniLogo strokes as polylines (same points as its three paths). */
const LOGO_POLYLINES: [number, number][][] = [
  [
    [46.44, 29.54],
    [55.2, 20.89],
    [37.73, 3.41],
    [20.26, 20.89],
    [55.02, 55.77],
    [37.73, 73.21],
    [20.28, 55.77],
    [28.87, 47.24],
  ],
  [
    [59.51, 25.14],
    [72.47, 38.3],
    [59.51, 51.45],
  ],
  [
    [16.03, 51.32],
    [3.07, 38.31],
    [16.03, 25],
  ],
];

/** One straight piece per segment of every polyline. */
export const LOGO_PIECES: LogoPiece[] = LOGO_POLYLINES.flatMap((line) =>
  line.slice(1).map(([x2, y2], i) => {
    const [x1, y1] = line[i] ?? [x2, y2];
    return { x1, y1, x2, y2 };
  }),
);

/** How far (viewBox units) and how much (deg) pieces drift at mid-journey. */
export const PIECE_SPREAD = 14;
export const PIECE_SPREAD_STEP = 6;
export const PIECE_SPIN = 50;
