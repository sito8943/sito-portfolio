import type { ReactNode } from "react";

// @emotion/css
import { css } from "@emotion/css";

// hooks
import { useInViewOnce } from "../../hooks/useInViewOnce";

type InViewComponentProps = {
  children?: ReactNode;
  delay?: string;
  className?: string;
  animation?: string;
};

const InViewComponent = ({
  children,
  delay = "0.3s",
  className,
  animation,
}: InViewComponentProps) => {
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
};

export default InViewComponent;
