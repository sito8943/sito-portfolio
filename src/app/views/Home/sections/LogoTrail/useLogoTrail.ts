import { useEffect, useRef } from "react";

import { LOGO_ANCHORS } from "../../constants";

import { DISSOLVE_START, REDUCED_MOTION_QUERY } from "./constants";
import { clamp, lerp, measureAnchor, smoothstep } from "./utils";

/**
 * Moves the referenced element from the Hero anchor to the About anchor as the
 * page scrolls. While travelling it holds still vertically on screen, so it
 * reads as following the reader down; it lands on the About anchor exactly.
 * `--logo-trail-dissolve` (0 → 1) fades it out over the last stretch.
 */
export function useLogoTrail<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    const parent = node?.offsetParent;
    if (!node || !(parent instanceof HTMLElement)) return;

    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);
    let frame = 0;

    const update = () => {
      frame = 0;
      const box = parent.getBoundingClientRect();
      const from = measureAnchor(LOGO_ANCHORS.hero, box);
      if (!from) {
        node.setAttribute("data-ready", "false");
        return;
      }
      const to = measureAnchor(LOGO_ANCHORS.about, box) ?? from;

      const distance = to.top - from.top;
      let progress = distance > 0 ? clamp(window.scrollY / distance) : 1;
      if (reducedMotion.matches) progress = Math.round(progress);
      const eased = smoothstep(progress);
      const dissolve = smoothstep(
        clamp((progress - DISSOLVE_START) / (1 - DISSOLVE_START)),
      );

      node.style.setProperty("--logo-trail-size", `${from.size}px`);
      node.style.setProperty(
        "--logo-trail-x",
        `${lerp(from.left, to.left, eased)}px`,
      );
      node.style.setProperty(
        "--logo-trail-y",
        `${from.top + distance * progress}px`,
      );
      node.style.setProperty(
        "--logo-trail-scale",
        `${lerp(1, to.size / from.size, eased)}`,
      );
      node.style.setProperty("--logo-trail-dissolve", `${dissolve}`);
      node.setAttribute("data-ready", "true");
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    // The page grows when lazy sections (About) mount: re-measure then too.
    const resizeObserver = new ResizeObserver(schedule);
    resizeObserver.observe(parent);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reducedMotion.addEventListener("change", schedule);
    schedule();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reducedMotion.removeEventListener("change", schedule);
    };
  }, []);

  return ref;
}
