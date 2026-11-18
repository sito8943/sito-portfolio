import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { useFluidHover } from "../useFluidHover";
import { OPEN_KEYS } from "./constants";
import type { UseSelectOptions } from "./types";
import { findTypeaheadIndex, getNextIndex } from "./utils";

/**
 * Open state, highlighted option and keyboard handling for a select-only listbox
 * (WAI-ARIA APG pattern): arrows / Home / End move, Enter / Space pick, Escape closes,
 * a letter jumps to the next option starting with it.
 */
export function useSelect({
  labels,
  selectedIndex,
  onSelect,
}: UseSelectOptions) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(selectedIndex);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const {
    containerRef: listboxRef,
    highlightRef,
    moveTo,
    hide,
  } = useFluidHover<HTMLUListElement, HTMLLIElement>();

  const show = () => {
    setActiveIndex(selectedIndex);
    setOpen(true);
  };
  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };
  const choose = (index: number) => {
    onSelect(index);
    close();
  };

  useEffect(() => {
    if (open) listboxRef.current?.focus();
  }, [open]);

  // The active option carries the gliding highlight; it appears in place on open.
  useEffect(() => {
    if (!open) return hide();
    const option =
      listboxRef.current?.querySelectorAll<HTMLElement>("[role=option]")[
        activeIndex
      ];
    option?.scrollIntoView({ block: "nearest" });
    moveTo(option);
  }, [open, activeIndex, listboxRef, moveTo, hide]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!(e.target instanceof Node) || !rootRef.current?.contains(e.target))
        setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const onTriggerKeyDown = (e: KeyboardEvent) => {
    if (!OPEN_KEYS.includes(e.key)) return;
    e.preventDefault();
    show();
  };

  const onListboxKeyDown = (e: KeyboardEvent) => {
    const next = getNextIndex(activeIndex, e.key, labels.length);
    if (next !== undefined) {
      e.preventDefault();
      setActiveIndex(next);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      choose(activeIndex);
    } else if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "Tab") {
      setOpen(false);
    } else if (e.key.length === 1) {
      const match = findTypeaheadIndex(labels, e.key, activeIndex);
      if (match !== -1) setActiveIndex(match);
    }
  };

  return {
    open,
    activeIndex,
    setActiveIndex,
    toggle: () => (open ? close() : show()),
    choose,
    rootRef,
    triggerRef,
    listboxRef,
    highlightRef,
    onTriggerKeyDown,
    onListboxKeyDown,
  };
}
