import { useEffect, useState } from "react";

import { COUNT_UP_MS, REDUCED_MOTION_QUERY } from "./constants";
import { easeOutCubic } from "./utils";

/**
 * Counts from 0 up to `target` once `run` turns true, easing out over `COUNT_UP_MS`.
 * Shows `target` straight away with reduced motion.
 */
export function useCountUp(target: number, run: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // Reduced motion turns transitions off, so `run` may never come: show the figure now.
    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) {
      setValue(target);
      return;
    }
    if (!run) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / COUNT_UP_MS);
      setValue(Math.round(easeOutCubic(t) * target));
      if (t < 1) frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [target, run]);

  return value;
}
