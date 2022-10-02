import { forwardRef } from "react";

import PropTypes from "prop-types";

// sito components
import SitoContainer from "sito-container";

const Section = forwardRef((props, ref) => {
  const { id, background, children } = props;

  return (
    <SitoContainer
      ref={ref}
      id={id}
      justifyContent="center"
      alignItems="center"
      sx={{
        padding: "100px 0",
        minHeight: "100vh",
        background,
        position: "relative",
      }}
    >
      {children}
    </SitoContainer>
  );
});

Section.defaultProps = {
  id: "",
  children: <></>,
  background: "",
};

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  background: PropTypes.string,
};

export default Section;
