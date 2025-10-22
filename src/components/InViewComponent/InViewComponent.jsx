import React, { useEffect, useRef, useState } from "react";

import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

const InViewComponent = (props) => {
  const { children, delay, className, animation } = props;

  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return () => {};

    // Use native IntersectionObserver to trigger once
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const motionClass = css({
    transform: isInView ? "translateY(0px)" : "translateY(20px)",
    opacity: isInView ? 1 : 0,
    transition: `all 400ms ease-in-out ${delay}`,
  });

  const useCssAnimation = Boolean(animation);

  return (
    <div
      ref={ref}
      className={`${
        useCssAnimation ? (isInView ? animation : "invisible") : motionClass
      } ${className || ""}`}
      style={useCssAnimation ? { animationDelay: delay } : undefined}
    >
      {children}
    </div>
  );
};

InViewComponent.defaultProps = {
  children: <></>,
  delay: "0.3s",
  className: undefined,
  animation: undefined,
};

InViewComponent.propTypes = {
  children: PropTypes.node,
  delay: PropTypes.string,
  className: PropTypes.string,
  animation: PropTypes.string,
};

export default InViewComponent;
