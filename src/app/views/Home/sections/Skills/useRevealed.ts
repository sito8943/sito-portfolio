import { useEffect, useRef, useState } from "react";

/**
 * True once the `InView` wrapping the referenced element has finished fading in (its `opacity`
 * transition ended), so follow-up motion starts on a settled block, not during the rise.
 */
export function useRevealed<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const wrapper = ref.current?.closest(".in-view");
    if (!wrapper) return;
    const onEnd = (e: Event) => {
      const { target, propertyName } = e as TransitionEvent;
      if (target === wrapper && propertyName === "opacity") setRevealed(true);
    };
    wrapper.addEventListener("transitionend", onEnd);
    return () => wrapper.removeEventListener("transitionend", onEnd);
  }, []);

  return { ref, revealed };
}
