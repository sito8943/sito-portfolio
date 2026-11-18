import { useEffect, useRef } from "react";

import { DOCK_ANCHOR_SELECTOR } from "./constants";
import { getDockLift } from "./utils";

/**
 * Raises the button's fixed anchor so it stays centred on the element `dockTo` once that element
 * scrolls up to it. Writes the CSS `translate` directly (no re-render per scroll frame).
 */
export function useDockLift(dockTo: string | undefined) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const anchor = button?.closest<HTMLElement>(DOCK_ANCHOR_SELECTOR);
    if (!dockTo || !button || !anchor) return;
    let lift = 0;

    const update = () => {
      const target = document.getElementById(dockTo);
      const next = target ? getDockLift(button, target, lift) : 0;
      if (next === lift) return;
      lift = next;
      anchor.style.translate = lift ? `0 ${-lift}px` : "";
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      anchor.style.translate = "";
    };
  }, [dockTo]);

  return buttonRef;
}
