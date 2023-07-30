import React, { useRef } from "react";

import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

// framer-motion
import { useInView } from "framer-motion";

const InViewComponent = (props) => {
  const { children, delay, className } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className={`${css({
        transform: isInView ? "translateY(0px)" : "translateY(20px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.1s linear ${delay}`,
      })} ${className || ""}`}
    >
      {children}
    </div>
  );
};

InViewComponent.defaultProps = {
  children: <></>,
  delay: "0.3s",
  className: undefined,
};

InViewComponent.propTypes = {
  children: PropTypes.node,
  delay: PropTypes.string,
  className: PropTypes.string,
};

export default InViewComponent;
