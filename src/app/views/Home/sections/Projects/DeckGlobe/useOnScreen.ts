import { useEffect, useState } from "react";
import type { RefObject } from "react";

/** Whether `ref` is on screen now (unlike useInViewOnce, it turns false again when it leaves). */
export function useOnScreen(ref: RefObject<Element | null>) {
  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) =>
      setOnScreen(Boolean(entry?.isIntersecting)),
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref]);

  return onScreen;
}
