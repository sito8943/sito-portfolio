import React, { Suspense, memo } from "react";
import loadable from "@loadable/component";

import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

// @emotion/css
import { css } from "@emotion/css";

// @nextui-org
const NextCardBody = loadable(() => import("../../components/NextUI/CardBody"));
const NextCard = loadable(() => import("../../components/NextUI/Card"));
const Image = loadable(() => import("../../components/NextUI/Image"));

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
  } = props;
  return (
    <Suspense>
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
          isPressable={onClick !== undefined || link !== undefined}
          isHoverable={onClick !== undefined || link !== undefined}
          onPress={onClick}
          variant="bordered"
          css={{
            maxWidth: "320px",
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
    </Suspense>
  );
};

Card.defaultProps = {
  onClick: undefined,
  align: "center",
  height: "306px",
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

const CardMemo = memo((props) => <Card {...props} />, arePropsEqual);

function arePropsEqual(oldProps, newProps) {
  return (
    oldProps.onClick === newProps.onClick &&
    oldProps.text === newProps.text &&
    oldProps.more === newProps.more &&
    oldProps.image === newProps.image &&
    oldProps.alt === newProps.alt &&
    oldProps.title === newProps.title &&
    oldProps.height === newProps.height &&
    oldProps.external === newProps.external
  );
}

export default CardMemo;
