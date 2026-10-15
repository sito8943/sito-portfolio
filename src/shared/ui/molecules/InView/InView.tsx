import type { CSSProperties } from "react";

// hooks
import { useInViewOnce } from "@/shared/hooks";

import type { InViewProps } from "./types";

/** Fades and rises its children in the first time they scroll into view. */
export function InView({ children, delay = "0.3s", className }: InViewProps) {
  const { ref, inView } = useInViewOnce();

  return (
    <div
      ref={ref}
      data-shown={inView}
      className={`in-view ${className ?? ""}`}
      style={{ "--in-view-delay": delay } as CSSProperties}
    >
      {children}
    </div>
  );
}
