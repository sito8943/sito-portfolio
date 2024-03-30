import React, { Fragment } from "react";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faLaptop, faMusic } from "@fortawesome/free-solid-svg-icons";

// @emotion/css
import { css } from "@emotion/css";

const FloatingIcons = () => {
  return (
    <Fragment>
      <div className={`sm:hidden scale-animation ${css({ left: "5%" })}`}>
        <div className={css({ transform: "rotate(-30deg)" })}>
          <FontAwesomeIcon
            icon={faPlane}
            className={`float-y ${css({
              fontSize: "3rem",
              color: "#088cd9",
              opacity: 0.5,
            })}`}
          />
        </div>
      </div>
      <div
        className={`sm:hidden scale-animation ${css({
          width: "100px",
          height: "100px",
          right: "5%",
          top: "30%",
        })}`}
      >
        <div className={css({ transform: "rotate(30deg)" })}>
          <FontAwesomeIcon
            icon={faMusic}
            className={`float-y ${css({
              fontSize: "3rem",
              color: "#9494f5",
              opacity: 0.5,
            })}`}
          />
        </div>
      </div>
      <div
        className={`sm:hidden scale-animation ${css({
          width: "100px",
          height: "100px",
          bottom: "4%",
          right: "20%",
        })}`}
      >
        <div className={css({ transform: "rotate(10deg)" })}>
          <FontAwesomeIcon
            icon={faLaptop}
            className={`float-y ${css({
              fontSize: "3rem",
              color: "#0fd908",
              opacity: 0.5,
            })}`}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default FloatingIcons;
