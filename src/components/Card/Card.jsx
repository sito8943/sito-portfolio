import React from "react";

import PropTypes from "prop-types";

// @nextui-org
import { Card as NextCard, Image, Text } from "@nextui-org/react";

const Card = (props) => {
  const { onClick, text, more, image, alt } = props;
  return (
    <NextCard
      isPressable
      isHoverable
      onPress={onClick}
      variant="bordered"
      css={{
        maxWidth: "320px",
        height: "306px",
        width: "100%",
        margin: "10px",
        display: "flex",
        flexDirection: "column !important",
      }}
    >
      <Image width={320} height={180} src={image} alt={alt} objectFit="cover" />
      <NextCard.Body
        css={{
          display: "flex",
          flexDirection: "column !important",
          alignItems: "center",
        }}
      >
        <Text css={{ marginLeft: "10px", textAlign: "center" }}>{text}</Text>
        <Text css={{ marginLeft: "10px", textAlign: "center" }}>{more}</Text>
      </NextCard.Body>
    </NextCard>
  );
};

Card.defaultProps = {
  onClick: undefined,
};

Card.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  more: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Card;
