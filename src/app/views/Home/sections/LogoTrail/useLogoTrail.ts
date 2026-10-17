import { useEffect, useRef } from "react";

import { LOGO_LANDED_ATTRIBUTE, LOGO_STOPS } from "../../constants";

import {
  ASSEMBLE_END,
  ASSEMBLE_START,
  DISSOLVE_START,
  LANDED_AT,
  REDUCED_MOTION_QUERY,
} from "./constants";
import { clamp, lerp, measureStops, ramp, smoothstep } from "./utils";

/**
 * Moves the referenced element along the logo anchors (Hero → About → Features)
 * as the page scrolls. While travelling it holds still vertically on screen, so
 * it reads as following the reader down; it lands on each anchor exactly.
 * `--logo-trail-dissolve` (0 → 1) fades it out before each landing and back in
 * after leaving; landed anchors get `data-logo-landed`.
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
      const stops = measureStops(LOGO_STOPS, parent.getBoundingClientRect());
      const first = stops[0];
      if (!first) {
        node.setAttribute("data-ready", "false");
        return;
      }

      // The logo lands on stop k once the page has scrolled by its distance from the first.
      const scroll = window.scrollY;
      let leg = 0;
      while (
        leg < stops.length - 2 &&
        scroll > (stops[leg + 1]?.top ?? 0) - first.top
      )
        leg += 1;
      const from = stops[leg] ?? first;
      const to = stops[leg + 1] ?? from;

      const distance = to.top - from.top;
      let progress =
        distance > 0 ? clamp((scroll - (from.top - first.top)) / distance) : 0;
      if (reducedMotion.matches) progress = Math.round(progress);
      const eased = smoothstep(progress);
      const shown =
        (leg === 0 ? 1 : ramp(progress, ASSEMBLE_START, ASSEMBLE_END)) *
        (1 - ramp(progress, DISSOLVE_START, 1));

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
      node.style.setProperty("--logo-trail-dissolve", `${1 - shown}`);
      node.setAttribute("data-ready", "true");

      // Every stop up to the one being landed on has had the logo dissolve into it.
      const landed = progress >= LANDED_AT ? leg + 1 : leg;
      stops
        .slice(1, landed + 1)
        .forEach((stop) =>
          stop.node.setAttribute(LOGO_LANDED_ATTRIBUTE, "true"),
        );
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
