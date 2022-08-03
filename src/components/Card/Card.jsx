import PropTypes from "prop-types";

// @nextui-org
import { Card as NextCard, Text } from "@nextui-org/react";

const Card = (props) => {
  const { onClick, text, more } = props;
  return (
    <NextCard
      isPressable
      isHoverable
      onPress={onClick}
      variant="bordered"
      css={{ width: "250px", marginRight: "10px", marginBottom: "10px" }}
    >
      <NextCard.Body>
        <Text css={{ marginLeft: "10px" }}>{text}</Text>
        <Text css={{ marginLeft: "10px" }}>{more}</Text>
      </NextCard.Body>
    </NextCard>
  );
};

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  more: PropTypes.string.isRequired,
};

export default Card;
