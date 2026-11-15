import { useEffect, useRef } from "react";

import {
  LOGO_ANCHOR_MOVE_EVENT,
  LOGO_DOCK_STOPS,
  LOGO_LANDED_ATTRIBUTE,
  LOGO_STOPS,
} from "../../constants";

import {
  ASSEMBLE_END,
  ASSEMBLE_START,
  DISSOLVE_START,
  DOCK_LAND_VIEWPORT,
  DOCK_LEAVE_VIEWPORT,
  FRONT_FROM,
  GLIDE_MS,
  LANDED_AT,
  REDUCED_MOTION_QUERY,
} from "./constants";
import { clamp, lerp, measureStops, ramp, smoothstep } from "./utils";

/**
 * Moves the referenced element along the logo anchors (Hero → About → Features → Skills →
 * Contact) as the page scrolls. While travelling it holds still vertically on screen, so
 * it reads as following the reader down; it lands on each anchor exactly.
 * `--logo-trail-dissolve` (0 → 1) fades it out before each landing and back in
 * after leaving; landed anchors get `data-logo-landed`. On dock stops (`LOGO_DOCK_STOPS`)
 * it does not dissolve: it docks while the anchor is mid-screen and glides whenever that
 * anchor moves. The last stop always lands by the bottom of the page.
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

      // Scroll positions where the logo lands on each stop and leaves it. It lands on stop k
      // once the page has scrolled by its distance from the first. Dock stops land as soon
      // as their anchor is well on screen and hold the logo until the anchor nears the top;
      // the last stop lands by the bottom of the page at the latest.
      const isDock = (k: number) =>
        LOGO_DOCK_STOPS.includes(stops[k]?.node.dataset["logoAnchor"] ?? "");
      const height = window.innerHeight;
      const maxScroll = document.documentElement.scrollHeight - height;
      const land: number[] = [];
      const leave: number[] = [];
      stops.forEach((stop, k) => {
        let at = k === 0 ? 0 : stop.top - first.top;
        if (k > 0 && isDock(k))
          at -= Math.max(
            0,
            height * DOCK_LAND_VIEWPORT - stop.size / 2 - first.top,
          );
        if (k === LOGO_STOPS.length - 1) at = Math.min(at, maxScroll);
        at = k === 0 ? 0 : Math.max(at, (leave[k - 1] ?? 0) + 1);
        land.push(at);
        leave.push(
          isDock(k)
            ? at + height * (DOCK_LAND_VIEWPORT - DOCK_LEAVE_VIEWPORT)
            : at,
        );
      });
      // The last stop must stay reachable: a dock before it lets go in time.
      const lastLand = land[stops.length - 1] ?? 0;
      const beforeLast = stops.length - 2;
      if (beforeLast >= 0 && (leave[beforeLast] ?? 0) >= lastLand)
        leave[beforeLast] = Math.max(land[beforeLast] ?? 0, lastLand - 1);

      const scroll = window.scrollY;
      let leg = 0;
      while (leg < stops.length - 2 && scroll > (leave[leg + 1] ?? 0)) leg += 1;
      const from = stops[leg] ?? first;
      const to = stops[leg + 1] ?? from;

      const distance = to.top - from.top;
      const start = leave[leg] ?? 0;
      const span = (land[leg + 1] ?? start) - start;
      let progress = span > 0 ? clamp((scroll - start) / span) : 0;
      if (reducedMotion.matches) progress = Math.round(progress);
      const eased = smoothstep(progress);
      // Leaving a dock stop it is already whole; arriving at one it stays whole.
      const fromDock = leg === 0 || isDock(leg);
      const toDock = stops.length > leg + 1 && isDock(leg + 1);
      const shown =
        (fromDock ? 1 : ramp(progress, ASSEMBLE_START, ASSEMBLE_END)) *
        (toDock ? 1 : 1 - ramp(progress, DISSOLVE_START, 1));

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
      node.setAttribute("data-docked", String(toDock && progress >= 1));
      // Heading for the last stop (a signature on an opaque card), it flies over the
      // sections once clear of the previous stop, so it is seen landing.
      const toLast =
        leg + 2 === LOGO_STOPS.length && stops.length === LOGO_STOPS.length;
      node.setAttribute("data-front", String(toLast && progress > FRONT_FROM));
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

    // A dock anchor moved (hover/tab change): glide there instead of jumping.
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
