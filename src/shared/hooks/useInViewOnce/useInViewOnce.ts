import { useEffect, useRef, useState } from "react";

import { DEFAULT_THRESHOLD } from "./constants";

/**
 * Flags `true` the first time the referenced element enters the viewport
 * and stays `true` afterwards.
 */
export function useInViewOnce<T extends Element = HTMLDivElement>(
  threshold = DEFAULT_THRESHOLD,
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [inView, threshold]);

  return { ref, inView };
}
