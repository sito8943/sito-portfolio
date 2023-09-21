import React from "react";

import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

// @emotion/css
import { css } from "@emotion/css";

const Card = (props) => {
  const {
    onClick,
    text,
    more,
    image,
    alt,
    title,
    align,
    height,
    external,
    link,
    maxWidth,
  } = props;
  return (
    <a
      className={css({
        color: "inherit",
        textDecoration: "none",
        cursor: link ? "pointer" : "default",
      })}
      href={link}
      target="blank"
      rel="noreferrer"
    >
      <NextCard
        className="hola"
        isPressable={onClick !== undefined || link !== undefined}
        isHoverable={onClick !== undefined || link !== undefined}
        onPress={onClick}
        variant="bordered"
        css={{
          maxWidth,
          minHeight: "250px",
          height,
          width: "100%",
          margin: "10px",
          display: "flex",
          flexDirection: "column !important",
          position: "relative",
          cursor: link ? "pointer" : "default",
        }}
      >
        {external ? (
          <FontAwesomeIcon
            icon={faExternalLink}
            className={css({
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: 99,
            })}
          />
        ) : null}
        {image ? (
          <Image
            width={320}
            height={180}
            src={image}
            alt={alt}
            objectFit="cover"
          />
        ) : null}
        <NextCardBody
          css={{
            display: "flex",
            flexDirection: "column !important",
            alignItems: align,
          }}
        >
          {title ? <h4>{title}</h4> : null}
          <p className={css({ textAlign: align, fontWeight: "bold" })}>
            {text}
          </p>
          <p className={css({ textAlign: align })}>{more}</p>
        </NextCardBody>
      </NextCard>
    </a>
  );
};

Card.defaultProps = {
  onClick: undefined,
  align: "center",
  height: "306px",
  maxWidth: "320px",
  external: false,
};

Card.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  more: PropTypes.string.isRequired,
  image: PropTypes.string,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
  height: PropTypes.string,
  external: PropTypes.bool,
};

export default Card;
