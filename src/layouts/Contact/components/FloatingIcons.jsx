import React, { Fragment, memo } from "react";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

// @emotion/css
import { css } from "@emotion/css";

const FloatingIcons = () => {
  return (
    <Fragment>
      <div
        className={`scale-animation ${css({
          width: "100px",
          height: "100px",
          right: "5%",
          top: "15%",
        })}`}
      >
        <div sx={{ transform: "rotate(30deg)", display: "flex" }}>
          <FontAwesomeIcon
            icon={faPhone}
            className={`float-y ${css({
              fontSize: "6rem",
              color: "#9494f5",
              opacity: 0.5,
            })}`}
          />
        </div>
      </div>
    </Fragment>
  );
};

const FloatingIconsMemo = memo((props) => <FloatingIcons {...props} />);

export default FloatingIconsMemo;
