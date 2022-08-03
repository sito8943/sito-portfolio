import PropTypes from "prop-types";

// @nextui-org
import { Button } from "@nextui-org/react";

// utils
import { scrollTo } from "../../utils/functions";

const ButtonTo = (props) => {
  const { target, icon, css, text } = props;
  return (
    <Button onPress={() => scrollTo(target)} css={css}>
      {icon && <i className={`fa ${icon}`} aria-hidden="true" />}
      {text}
    </Button>
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
