import {
  GLOBE_DOT_STEP,
  GLOBE_LATITUDES,
  GLOBE_RASTER_SCALE,
  GLOBE_ROUTE_LIFT,
  GLOBE_ROUTE_POINTS,
  MAX_LATITUDE,
  WORLD_WIDTH,
} from "./constants";
import type { CountryShape, GlobeColors, SpherePoint } from "./types";

const RAD = Math.PI / 180;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

/** Longitude and latitude (degrees) to map units, Web Mercator. */
export const project = (lng: number, lat: number) => {
  const phi = clamp(lat, -MAX_LATITUDE, MAX_LATITUDE) * RAD;
  return {
    x: ((lng + 180) / 360) * WORLD_WIDTH,
    y:
      WORLD_WIDTH / 2 -
      (WORLD_WIDTH / (2 * Math.PI)) * Math.log(Math.tan(Math.PI / 4 + phi / 2)),
  };
};

/** Longitude and latitude (degrees) on the unit sphere. */
export const toSphere = (lng: number, lat: number): SpherePoint => ({
  x: Math.cos(lat * RAD) * Math.sin(lng * RAD),
  y: Math.sin(lat * RAD),
  z: Math.cos(lat * RAD) * Math.cos(lng * RAD),
});

/** `p` turned by `-spin` around the vertical axis, then tilted by `tilt` towards the viewer. */
export const turn = (p: SpherePoint, spin: number, tilt: number) => {
  const s = Math.sin(-spin * RAD);
  const c = Math.cos(-spin * RAD);
  const x = p.x * c + p.z * s;
  const z1 = -p.x * s + p.z * c;
  const st = Math.sin(tilt * RAD);
  const ct = Math.cos(tilt * RAD);
  return { x, y: p.y * ct - z1 * st, z: p.y * st + z1 * ct };
};

/** The land's dots: a grid even on the sphere, kept where the world map has land. */
export function landDots(countries: readonly CountryShape[]): SpherePoint[] {
  const size = Math.ceil(WORLD_WIDTH * GLOBE_RASTER_SCALE);
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) return [];
  context.scale(GLOBE_RASTER_SCALE, GLOBE_RASTER_SCALE);
  const land = new Path2D();
  for (const { d } of countries) land.addPath(new Path2D(d));
  // A canvas fill, not Array.prototype.fill.
  // oxlint-disable-next-line unicorn/no-array-fill-with-reference-type
  context.fill(land);
  const pixels = context.getImageData(0, 0, size, size).data;
  const dots: SpherePoint[] = [];
  const [south, north] = GLOBE_LATITUDES;
  for (let lat = south; lat <= north; lat += GLOBE_DOT_STEP) {
    const step = GLOBE_DOT_STEP / Math.max(0.2, Math.cos(lat * RAD));
    for (let lng = -180; lng < 180; lng += step) {
      const { x, y } = project(lng, lat);
      const px = Math.floor(x * GLOBE_RASTER_SCALE);
      const py = Math.floor(y * GLOBE_RASTER_SCALE);
      if (px < 0 || py < 0 || px >= size || py >= size) continue;
      if ((pixels[(py * size + px) * 4 + 3] ?? 0) > 0)
        dots.push(toSphere(lng, lat));
    }
  }
  return dots;
}

/** Points along the great circle from `a` to `b`, raised towards the middle like a flight. */
export function routePoints(a: SpherePoint, b: SpherePoint): SpherePoint[] {
  const dot = clamp(a.x * b.x + a.y * b.y + a.z * b.z, -1, 1);
  const angle = Math.acos(dot);
  const sin = Math.sin(angle) || 1;
  return Array.from({ length: GLOBE_ROUTE_POINTS + 1 }, (_, i) => {
    const t = i / GLOBE_ROUTE_POINTS;
    const wa = Math.sin((1 - t) * angle) / sin;
    const wb = Math.sin(t * angle) / sin;
    const lift = 1 + GLOBE_ROUTE_LIFT * angle * Math.sin(Math.PI * t);
    return {
      x: (a.x * wa + b.x * wb) * lift,
      y: (a.y * wa + b.y * wb) * lift,
      z: (a.z * wa + b.z * wb) * lift,
    };
  });
}

/** Whether a turned point shows: in front, or raised past the globe's edge. */
export const shows = ({ x, y, z }: SpherePoint) => z > 0 || x * x + y * y > 1;

/** The globe's colours from its element's CSS (`--globe-*`). */
export function globeColors(element: Element): GlobeColors {
  const style = getComputedStyle(element);
  const read = (name: string) => style.getPropertyValue(name).trim();
  return {
    dot: read("--globe-dot"),
    rim: read("--globe-rim"),
    body: read("--globe-body"),
    arcs: ["--globe-arc-1", "--globe-arc-2", "--globe-arc-3"].map(read),
  };
}

const easeOut = (t: number) => 1 - (1 - t) ** 3;

/** A route's progress at `ms` into its cycle: how much is drawn, and how visible it is. */
export function routeState(
  ms: number,
  { draw, hold, fade }: { draw: number; hold: number; fade: number },
) {
  const cycle = draw + hold + fade;
  const t = ((ms % cycle) + cycle) % cycle;
  if (t < draw) return { drawn: easeOut(t / draw), alpha: 1 };
  if (t < draw + hold) return { drawn: 1, alpha: 1 };
  return { drawn: 1, alpha: 1 - (t - draw - hold) / fade };
}
