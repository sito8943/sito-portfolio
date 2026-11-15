import { useEffect, useState } from "react";
import type { RefObject } from "react";

import { READ_WINDOW, REDUCED_MOTION_QUERY } from "./constants";

/**
 * How far a block has been read as the page scrolls past it, 0 to 1: while its top moves
 * through `READ_WINDOW` of the viewport (ported from the presentation deck). Near the end of
 * the page, where its top can never reach the window's end, the reading finishes exactly at
 * the bottom of the page instead. 1 at once with reduced motion. Measured once per frame at most.
 */
export function useReadProgress(ref: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) {
      setProgress(1);
      return;
    }
    let frame = 0;
    const measure = () => {
      frame = 0;
      const element = ref.current;
      if (!element) return;
      const { top } = element.getBoundingClientRect();
      const height = window.innerHeight;
      const { start, end } = READ_WINDOW;
      // Where the top will sit once the page is scrolled to the bottom.
      const maxScroll = document.documentElement.scrollHeight - height;
      const lowestTop = (top + window.scrollY - maxScroll) / height;
      const finish = Math.min(start - 0.05, Math.max(end, lowestTop));
      const read = (start * height - top) / ((start - finish) * height);
      setProgress(Math.min(1, Math.max(0, read)));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [ref]);

  return progress;
}
