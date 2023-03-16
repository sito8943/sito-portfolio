import React from "react";

import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

// @nextui-org
import { Card as NextCard, Image } from "@nextui-org/react";

const Card = (props) => {
  const { onClick, text, more, image, alt, title, align, height } = props;
  return (
    <NextCard
      isPressable
      isHoverable
      onPress={onClick}
      variant="bordered"
      css={{
        maxWidth: "320px",
        height,
        width: "100%",
        margin: "10px",
        display: "flex",
        flexDirection: "column !important",
      }}
    >
      {image ? (
        <Image
          width={320}
          height={180}
          src={image}
          alt={alt}
          objectFit="cover"
        />
      ) : null}
      <NextCard.Body
        css={{
          display: "flex",
          flexDirection: "column !important",
          alignItems: align,
        }}
      >
        {title ? <h4>{title}</h4> : null}
        <p className={css({ textAlign: align })}>{text}</p>
        <p className={css({ textAlign: align })}>{more}</p>
      </NextCard.Body>
    </NextCard>
  );
};

Card.defaultProps = {
  onClick: undefined,
  align: "center",
  height: "306px",
};

Card.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  more: PropTypes.string.isRequired,
  image: PropTypes.string,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
  height: PropTypes.string,
};

export default Card;
