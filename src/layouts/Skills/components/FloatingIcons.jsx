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
      <div className={`sm:hidden scale-animation ${css({ left: "5%" })}`}>
        <div sx={{ transform: "rotate(-30deg)", display: "flex" }}>
          <FontAwesomeIcon
            icon={faJs}
            className="float-y sm:!text-5xl text-[6rem] text-yellow opacity-50"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default FloatingIcons;
