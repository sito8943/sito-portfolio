// @emotion/css
import { css } from "@emotion/css";

// hooks
import { useInViewOnce } from "@/shared/hooks";

import type { InViewProps } from "./types";

/** Fades and rises its children in the first time they scroll into view. */
export function InView({
  children,
  delay = "0.3s",
  className,
  animation,
}: InViewProps) {
  const { ref, inView } = useInViewOnce();

  const motionClass = css({
    transform: inView ? "translateY(0px)" : "translateY(20px)",
    opacity: inView ? 1 : 0,
    transition: `all 400ms ease-in-out ${delay}`,
  });

  const useCssAnimation = Boolean(animation);

  return (
    <div
      ref={ref}
      className={`${
        useCssAnimation ? (inView ? animation : "invisible") : motionClass
      } ${className ?? ""}`}
      style={useCssAnimation ? { animationDelay: delay } : undefined}
    >
      {children}
    </div>
  );
}
