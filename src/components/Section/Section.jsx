import { forwardRef } from "react";

import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

const Section = forwardRef((props, ref) => {
  const { id, background, children } = props;

  return (
    <div
      ref={ref}
      id={id}
      className={css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "100px 0",
        minHeight: "100vh",
        background,
        position: "relative",
      })}
    >
      {children}
    </div>
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
