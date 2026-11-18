import {
  useCallback,
  useEffect,
  useRef,
  type FocusEvent,
  type PointerEvent,
} from "react";
import {
  FLUID_HOVERED_ATTR,
  FLUID_ITEM_ATTR,
  FLUID_JUMP_ATTR,
} from "./constants";
import { getFluidBox, getFluidItems, pickFluidItem } from "./utils";

/**
 * One background that glides between items instead of each item lighting up on
 * its own. Mark items with `fluidItem(run)`, render the highlight (`highlightRef`,
 * `FLUID_HIGHLIGHT_CLASS`, styled in `molecules/Select`) inside the container (`containerRef`, `relative isolate`).
 *
 * `handlers` drive it from the mouse and keyboard focus (pointer wins); `moveTo`
 * drives it directly (e.g. a listbox's active option). Scroll and resize re-place
 * it without gliding.
 */
export function useFluidHover<
  T extends HTMLElement,
  H extends HTMLElement = HTMLDivElement,
>() {
  const containerRef = useRef<T>(null);
  const highlightRef = useRef<H>(null);
  const current = useRef<HTMLElement | null>(null);
  const focused = useRef<HTMLElement | null>(null);
  const pointerY = useRef<number | null>(null);

  const hide = useCallback(() => {
    current.current?.removeAttribute(FLUID_HOVERED_ATTR);
    current.current = null;
    if (highlightRef.current) highlightRef.current.style.opacity = "0";
  }, []);

  /** Puts the highlight under `item` (gliding unless it was hidden or `jump`), or hides it. */
  const moveTo = useCallback(
    (item: HTMLElement | null | undefined, jump = false) => {
      const container = containerRef.current;
      const highlight = highlightRef.current;
      if (!item || !container || !highlight) return hide();
      highlight.toggleAttribute(FLUID_JUMP_ATTR, jump || !current.current);
      if (item !== current.current) {
        current.current?.removeAttribute(FLUID_HOVERED_ATTR);
        item.setAttribute(FLUID_HOVERED_ATTR, "");
        current.current = item;
      }
      const box = getFluidBox(item, container);
      highlight.style.transform = `translate(${box.x}px, ${box.y}px)`;
      highlight.style.width = `${box.width}px`;
      highlight.style.height = `${box.height}px`;
      highlight.style.opacity = "1";
    },
    [hide],
  );

  const update = useCallback(
    (jump: boolean) => {
      const container = containerRef.current;
      if (!container) return;
      const items = getFluidItems(container);
      if (pointerY.current === null)
        return moveTo(
          focused.current && items.includes(focused.current)
            ? focused.current
            : null,
          jump,
        );
      const index = pickFluidItem(
        pointerY.current,
        items.map((item) => {
          const rect = item.getBoundingClientRect();
          return {
            top: rect.top,
            bottom: rect.bottom,
            run: item.getAttribute(FLUID_ITEM_ATTR) ?? "",
          };
        }),
      );
      moveTo(index === null ? null : items[index], jump);
    },
    [moveTo],
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new ResizeObserver(() => {
      if (current.current) update(true);
    });
    observer.observe(container);
    for (const child of container.children) observer.observe(child);
    return () => observer.disconnect();
  }, [update]);

  const handlers = {
    onPointerMove: (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      pointerY.current = e.clientY;
      update(false);
    },
    onPointerLeave: () => {
      pointerY.current = null;
      update(false);
    },
    onFocus: (e: FocusEvent) => {
      const item = e.target.closest<HTMLElement>(`[${FLUID_ITEM_ATTR}]`);
      focused.current =
        item && e.target.matches(":focus-visible") ? item : null;
      if (pointerY.current === null) update(false);
    },
    onBlur: (e: FocusEvent) => {
      if (
        e.relatedTarget instanceof Node &&
        containerRef.current?.contains(e.relatedTarget)
      )
        return;
      focused.current = null;
      if (pointerY.current === null) update(false);
    },
    onScroll: () => update(true),
  };

  return { containerRef, highlightRef, handlers, moveTo, hide };
}
