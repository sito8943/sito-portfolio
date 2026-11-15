import { useEffect } from "react";
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
 * `playing` (on screen). The world map is its own chunk, fetched only when the globe first plays.
 * Reduced motion: one still frame with every route drawn.
 */
export function useGlobe(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  playing: boolean,
) {
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context || !playing) return;
    let scene: GlobeScene | undefined;
    let frame = 0;
    let cancelled = false;
    const still = window.matchMedia(REDUCED_MOTION_QUERY).matches;
    const started = performance.now();

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
      const spin =
        GLOBE_START_LONGITUDE + (still ? 0 : (ms / 1000) * GLOBE_SPIN);
      drawGlobe(context, fit(), scene, spin, ms, still);
      if (!still) frame = requestAnimationFrame(render);
    };

    void import("@/assets/data/world.json").then(({ default: world }) => {
      if (cancelled) return;
      scene = {
        dots: landDots(world as CountryShape[]),
        routes: GLOBE_ROUTES.map(({ from, to, tone }) => ({
          points: routePoints(
            toSphere(from[0], from[1]),
            toSphere(to[0], to[1]),
          ),
          tone,
        })),
        colors: globeColors(canvas),
      };
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
