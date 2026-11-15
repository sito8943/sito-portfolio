import { useEffect, useRef } from "react";
import type { RefObject } from "react";

import {
  GLOBE_ROUTES,
  GLOBE_SPIN,
  GLOBE_START_LONGITUDE,
  REDUCED_MOTION_QUERY,
} from "./constants";
import { drawGlobe } from "./drawGlobe";
import type { CountryShape, GlobeScene } from "./types";
import { globeColors, landDots, routePoints, toSphere } from "./utils";

/**
 * Draws the dotted, glowing globe on `canvas`, spinning with routes flying between cities, while
 * `playing` (on screen). The world map is its own chunk, fetched and rasterised only once, when
 * the globe first plays; time carries over pauses.
 * Reduced motion: one still frame with every route drawn.
 */
/** Built once (the land raster is costly), reused whenever the globe comes back on screen. */
let cachedScene: Promise<GlobeScene> | undefined;

function loadScene(canvas: HTMLCanvasElement) {
  cachedScene ??= import("@/assets/data/world.json").then(
    ({ default: world }) => ({
      dots: landDots(world as CountryShape[]),
      routes: GLOBE_ROUTES.map(({ from, to, tone }) => ({
        points: routePoints(toSphere(from[0], from[1]), toSphere(to[0], to[1])),
        tone,
      })),
      colors: globeColors(canvas),
    }),
  );
  return cachedScene;
}

export function useGlobe(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  playing: boolean,
) {
  /** Time already played, so pausing off screen resumes where it left off. */
  const elapsed = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context || !playing) return;
    let scene: GlobeScene | undefined;
    let frame = 0;
    let cancelled = false;
    const still = window.matchMedia(REDUCED_MOTION_QUERY).matches;
    const started = performance.now() - elapsed.current;

    const fit = () => {
      const ratio = window.devicePixelRatio || 1;
      const size = Math.round(canvas.clientWidth * ratio);
      if (canvas.width !== size) {
        canvas.width = size;
        canvas.height = size;
      }
      return size;
    };
    const render = (now: number) => {
      if (!scene) return;
      const ms = now - started;
      elapsed.current = ms;
      const spin =
        GLOBE_START_LONGITUDE + (still ? 0 : (ms / 1000) * GLOBE_SPIN);
      drawGlobe(context, fit(), scene, spin, ms, still);
      if (!still) frame = requestAnimationFrame(render);
    };

    void loadScene(canvas).then((loaded) => {
      if (cancelled) return;
      scene = loaded;
      render(performance.now());
    });
    const resize = new ResizeObserver(() => {
      if (still && scene) render(performance.now());
    });
    resize.observe(canvas);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      resize.disconnect();
    };
  }, [canvasRef, playing]);
}
