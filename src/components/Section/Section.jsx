import React, { Fragment } from "react";

import PropTypes from "prop-types";

function Section(props) {
  const { id, background, children, containerClass, className } = props;

  return (
    <section
      id={id}
      className={`flex justify-center items-center py-[100px] relative ${background} ${className}`}
    >
      <div className={`w-[90%] ${containerClass}`}>{children}</div>
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
