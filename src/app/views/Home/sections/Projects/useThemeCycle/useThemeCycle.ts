import { useEffect, useRef, useState } from "react";

import { useOnScreen } from "@/shared/hooks";

import { REDUCED_MOTION_QUERY, THEME_CYCLE_MS } from "./constants";

/**
 * Light or dark, flipping every `THEME_CYCLE_MS` while the element is on screen (paused
 * off screen, never with reduced motion). Also says whether it is on screen, to run its motion.
 */
export function useThemeCycle<T extends Element>() {
  const ref = useRef<T>(null);
  const onScreen = useOnScreen(ref);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (!onScreen || window.matchMedia(REDUCED_MOTION_QUERY).matches) return;
    const timer = window.setInterval(
      () => setDark((current) => !current),
      THEME_CYCLE_MS,
    );
    return () => window.clearInterval(timer);
  }, [onScreen]);

  return { ref, onScreen, theme: dark ? "dark" : "light" } as const;
}
