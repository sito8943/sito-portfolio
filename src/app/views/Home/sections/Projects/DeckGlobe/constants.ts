// Ported from the Presentation Deck's Creative Layer globe piece (ShowcasePiece / useGlobe).

/** Width of the world map in units: x runs 0–1000 from longitude -180 to 180. */
export const WORLD_WIDTH = 1000;

/** Mercator stretches to infinity at the poles; points past this latitude sit on its edge. */
export const MAX_LATITUDE = 85;

/** Land dots: degrees between rows, and between dots on the equator. */
export const GLOBE_DOT_STEP = 2.4;

/** Latitudes the dots cover (no Antarctica: the map has none). */
export const GLOBE_LATITUDES = [-58, 80] as const;

/** Tilt towards the viewer (degrees) and spin (degrees per second). */
export const GLOBE_TILT = 18;
export const GLOBE_SPIN = 6;

/** Where the globe starts, facing (longitude). */
export const GLOBE_START_LONGITUDE = -30;

/** Routes as `[lng, lat]` pairs and the accent each takes (index into the arc colours). */
export const GLOBE_ROUTES = [
  { from: [-3.7, 40.4], to: [-74, 40.7], tone: 0 },
  { from: [-74, 40.7], to: [-46.6, -23.5], tone: 1 },
  { from: [2.35, 48.85], to: [55.3, 25.3], tone: 2 },
  { from: [-0.13, 51.5], to: [28, -26.2], tone: 1 },
  { from: [-118.2, 34], to: [139.7, 35.7], tone: 0 },
  { from: [77.2, 28.6], to: [151.2, -33.9], tone: 2 },
] as const;

/** A route's cycle, in ms: it draws, holds, fades; routes start `GLOBE_ROUTE_GAP_MS` apart. */
export const GLOBE_ROUTE_MS = { draw: 1400, hold: 1800, fade: 700 } as const;
export const GLOBE_ROUTE_GAP_MS = 900;

/** How high a route rises above the surface at its middle, per radian it spans. */
export const GLOBE_ROUTE_LIFT = 0.16;

/** Points along each route. */
export const GLOBE_ROUTE_POINTS = 48;

/** The raster the land is sampled from: map units per pixel. */
export const GLOBE_RASTER_SCALE = 0.5;

export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
