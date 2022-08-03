import PropTypes from "prop-types";

// @nextui-org
import { Button } from "@nextui-org/react";

// utils
import { scrollTo } from "../../utils/functions";

const ButtonTo = (props) => {
  const { target, icon, css, text } = props;
  return (
    <Button onClick={scrollTo(target)} css={css} icon={icon}>
      {icon}
      {text}
    </Button>
  );
};

ButtonTo.defaultProps = {
  css: {},
  text: "",
  icon: <></>,
};

ButtonTo.propTypes = {
  target: PropTypes.string.isRequired,
  icon: PropTypes.string,
  css: PropTypes.object,
  text: PropTypes.string,
};

export default ButtonTo;
