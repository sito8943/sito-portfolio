import React, { Fragment } from "react";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faLaptop, faMusic } from "@fortawesome/free-solid-svg-icons";

// @emotion/css
import { css } from "@emotion/css";

const FloatingIcons = () => {
  return (
    <Fragment>
      <div className="sm:hidden scale-animation left-[5%]">
        <div className={css({ transform: "rotate(-30deg)" })}>
          <FontAwesomeIcon
            icon={faPlane}
            className="float-y text-[3rem] opacity-50 text-yellow"
          />
        </div>
      </div>
      <div className={`sm:hidden scale-animation big-floating !top-[30%]`}>
        <div className={css({ transform: "rotate(30deg)" })}>
          <FontAwesomeIcon
            icon={faMusic}
            className="float-y opacity-50 text-green text-[3rem]"
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
            className="float-y text-[3rem] opacity-50 text-white"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default FloatingIcons;
