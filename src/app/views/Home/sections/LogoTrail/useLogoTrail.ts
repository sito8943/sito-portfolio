import { useEffect, useRef } from "react";

import {
  LOGO_ANCHOR_MOVE_EVENT,
  LOGO_LANDED_ATTRIBUTE,
  LOGO_STOPS,
} from "../../constants";

import {
  ASSEMBLE_END,
  ASSEMBLE_START,
  DISSOLVE_START,
  FINAL_LAND_VIEWPORT,
  GLIDE_MS,
  LANDED_AT,
  REDUCED_MOTION_QUERY,
} from "./constants";
import { clamp, lerp, measureStops, ramp, smoothstep } from "./utils";

/**
 * Moves the referenced element along the logo anchors (Hero → About → Features → Skills)
 * as the page scrolls. While travelling it holds still vertically on screen, so
 * it reads as following the reader down; it lands on each anchor exactly.
 * `--logo-trail-dissolve` (0 → 1) fades it out before each landing and back in
 * after leaving; landed anchors get `data-logo-landed`. On the last stop it does
 * not dissolve: it docks there and glides whenever that anchor moves.
 */
export function useLogoTrail<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    const parent = node?.offsetParent;
    if (!node || !(parent instanceof HTMLElement)) return;

    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);
    let frame = 0;
    let glideTimer = 0;

    const update = () => {
      frame = 0;
      const stops = measureStops(LOGO_STOPS, parent.getBoundingClientRect());
      const first = stops[0];
      if (!first) {
        node.setAttribute("data-ready", "false");
        return;
      }

      // The logo lands on stop k once the page has scrolled by its distance from the first.
      // The final stop lands earlier, as soon as its anchor is well on screen, since the logo docks there.
      const last = stops[LOGO_STOPS.length - 1];
      const lead = last
        ? Math.max(
            0,
            window.innerHeight * FINAL_LAND_VIEWPORT -
              last.size / 2 -
              first.top,
          )
        : 0;
      const landAt = (k: number) =>
        (stops[k]?.top ?? 0) -
        first.top -
        (k === LOGO_STOPS.length - 1 ? lead : 0);
      const scroll = window.scrollY;
      let leg = 0;
      while (leg < stops.length - 2 && scroll > landAt(leg + 1)) leg += 1;
      const from = stops[leg] ?? first;
      const to = stops[leg + 1] ?? from;

      const distance = to.top - from.top;
      const span = landAt(leg + 1) - landAt(leg);
      let progress = span > 0 ? clamp((scroll - landAt(leg)) / span) : 0;
      if (reducedMotion.matches) progress = Math.round(progress);
      const eased = smoothstep(progress);
      const finalLeg =
        leg + 2 === LOGO_STOPS.length && stops.length === LOGO_STOPS.length;
      const shown =
        (leg === 0 ? 1 : ramp(progress, ASSEMBLE_START, ASSEMBLE_END)) *
        (finalLeg ? 1 : 1 - ramp(progress, DISSOLVE_START, 1));

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
      node.setAttribute("data-docked", String(finalLeg && progress >= 1));
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

    // The last anchor moved (hover/tab change): glide there instead of jumping.
    const onAnchorMove = () => {
      node.setAttribute("data-gliding", "true");
      window.clearTimeout(glideTimer);
      glideTimer = window.setTimeout(
        () => node.removeAttribute("data-gliding"),
        GLIDE_MS,
      );
      schedule();
    };

    // The page grows when lazy sections (About) mount: re-measure then too.
    const resizeObserver = new ResizeObserver(schedule);
    resizeObserver.observe(parent);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reducedMotion.addEventListener("change", schedule);
    window.addEventListener(LOGO_ANCHOR_MOVE_EVENT, onAnchorMove);
    // Anchors also move when their section's rise-in (InView) finishes.
    parent.addEventListener("transitionend", schedule);
    parent.addEventListener("animationend", schedule);
    schedule();

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(glideTimer);
      window.removeEventListener(LOGO_ANCHOR_MOVE_EVENT, onAnchorMove);
      parent.removeEventListener("transitionend", schedule);
      parent.removeEventListener("animationend", schedule);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reducedMotion.removeEventListener("change", schedule);
    };
  }, []);

  return ref;
}
