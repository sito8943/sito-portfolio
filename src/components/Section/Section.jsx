import React, { Fragment } from "react";

import PropTypes from "prop-types";

function Section(props) {
  const { id, background, children } = props;

  return (
    <section
      id={id}
      className={`flex justify-center items-center py-[100px] min-h-[100vh] relative ${background}`}
    >
      <div className="w-[90%]">{children}</div>
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
