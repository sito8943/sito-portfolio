import React from "react"

import PropTypes from "prop-types";

// @nextui-org
import { Card as NextCard } from "@nextui-org/react";

const Card = (props) => {
  const { children } = props;
  return (
    <NextCard
      variant="bordered"
      css={{
        width: "350px",
        margin: "10px",
        display: "flex",
        flexDirection: "column !important",
      }}
    >
      <NextCard.Body
        css={{
          display: "flex",
          flexDirection: "column !important",
        }}
      >
        {children}
      </NextCard.Body>
    </NextCard>
  );
};

Card.defaultProps = {
  children: <></>,
};

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
