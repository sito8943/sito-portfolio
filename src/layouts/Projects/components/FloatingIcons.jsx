import React, { Fragment } from "react";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faFaceLaughWink,
} from "@fortawesome/free-solid-svg-icons";

// @emotion/css
import { css } from "@emotion/css";

const FloatingIcons = () => {
  return (
    <Fragment>
      <div
        className={`sm:hidden scale-animation ${css({ right: "10%", bottom: "10%" })}`}
      >
        <FontAwesomeIcon
          icon={faCircleCheck}
          className={`float-y ${css({
            fontSize: "3rem",
            color: "#0fd908",
            opacity: 0.5,
          })}`}
        />
      </div>
      <div
        className={`sm:hidden scale-animation ${css({ right: "15%", bottom: "15%" })}`}
      >
        <FontAwesomeIcon
          icon={faFaceLaughWink}
          className={`float-y ${css({
            fontSize: "4rem",
            color: "#0fd908",
            opacity: 0.5,
          })}`}
        />
      </div>
    </Fragment>
  );
};

export default FloatingIcons;
