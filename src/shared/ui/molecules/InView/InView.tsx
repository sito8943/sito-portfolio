import type { CSSProperties } from "react";

// hooks
import { useInViewOnce } from "@/shared/hooks";

import type { InViewProps } from "./types";

/**
 * Fades and rises its children in the first time they scroll into view. With `appear` it plays
 * on first paint instead, in CSS alone, so prerendered content above the fold shows before any
 * script runs.
 */
export function InView({
  children,
  delay = "0.3s",
  className,
  appear = false,
}: InViewProps) {
  const { ref, inView } = useInViewOnce();

  return (
    <div
      ref={ref}
      data-shown={appear ? "appear" : inView}
      className={`in-view ${className ?? ""}`}
      style={{ "--in-view-delay": delay } as CSSProperties}
    >
      {children}
    </div>
  );
}
