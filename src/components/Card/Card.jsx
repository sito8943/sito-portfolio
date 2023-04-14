import React, { Suspense } from "react";
import loadable from "@loadable/component";

import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

// @nextui-org
const NextCardBody = loadable(() => import("../../components/NextUI/CardBody"));
const NextCard = loadable(() => import("../../components/NextUI/Card"));
const Image = loadable(() => import("../../components/NextUI/Image"));

const Card = (props) => {
  const { onClick, text, more, image, alt, title, align, height } = props;
  return (
    <Suspense>
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
        <NextCardBody
          css={{
            display: "flex",
            flexDirection: "column !important",
            alignItems: align,
          }}
        >
          {title ? <h4>{title}</h4> : null}
          <p className={css({ textAlign: align })}>{text}</p>
          <p className={css({ textAlign: align })}>{more}</p>
        </NextCardBody>
      </NextCard>
    </Suspense>
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
