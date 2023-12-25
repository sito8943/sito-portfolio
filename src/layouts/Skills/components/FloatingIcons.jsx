import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";

// @emotion/css
import { css } from "@emotion/css";

const FloatingIcons = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <div className={`scale-animation ${css({ left: "5%" })}`}>
        <div sx={{ transform: "rotate(-30deg)", display: "flex" }}>
          <FontAwesomeIcon
            icon={faJs}
            className={`float-y ${css({
              fontSize: "6rem",
              color: "#F0D81D",
              opacity: 0.5,
            })}`}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default FloatingIcons;
