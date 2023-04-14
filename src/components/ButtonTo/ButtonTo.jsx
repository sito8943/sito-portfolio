import React, { Suspense } from "react";
import loadable from "@loadable/component";

import PropTypes from "prop-types";

// utils
import { scrollTo } from "../../utils/functions";

// @nextui-org
const Button = loadable(() => import("../../components/NextUI/Button"));

const ButtonTo = (props) => {
  const { target, icon, css, text } = props;
  return (
    <Suspense>
      <Button onPress={() => scrollTo(target)} css={css}>
        {icon && <i className={`fa ${icon}`} aria-hidden="true" />}
        {text}
      </Button>
    </Suspense>
  );
};

ButtonTo.defaultProps = {
  css: {},
  text: "",
};

ButtonTo.propTypes = {
  target: PropTypes.string.isRequired,
  icon: PropTypes.string,
  css: PropTypes.object,
  text: PropTypes.string,
};

export default ButtonTo;
