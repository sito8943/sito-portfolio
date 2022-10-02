import { useRef } from "react";

import PropTypes from "prop-types";

// framer-motion
import { useInView } from "framer-motion";

// sito components
import SitoContainer from "sito-container";

const InViewComponent = (props) => {
  const { children, delay, className } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <SitoContainer
      ref={ref}
      className={className}
      sx={{
        transform: isInView ? "translateY(0px)" : "translateY(20px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.1s linear ${delay}`,
      }}
    >
      {children}
    </SitoContainer>
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
