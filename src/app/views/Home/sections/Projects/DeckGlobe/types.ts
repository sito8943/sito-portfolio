/** A point on the unit sphere: x right, y up, z towards the viewer. */
export type SpherePoint = { x: number; y: number; z: number };

/** One country as `world.json` stores it, already projected (Web Mercator, 0–1000). */
export type CountryShape = {
  code: string | null;
  d: string;
  box: [number, number, number, number];
};

/** The colours the globe draws with, read from its CSS. */
export type GlobeColors = {
  dot: string;
  rim: string;
  body: string;
  arcs: string[];
};

export type GlobeScene = {
  dots: SpherePoint[];
  routes: { points: SpherePoint[]; tone: number }[];
  colors: GlobeColors;
};
