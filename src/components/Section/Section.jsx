import React, { Fragment } from "react";

import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

function Section(props) {
  const { id, background, children } = props;

  return (
    <section
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
    </section>
  );
}

Section.defaultProps = {
  id: "",
  children: <Fragment></Fragment>,
  background: "",
};

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  background: PropTypes.string,
};

export default Section;
