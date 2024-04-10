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
        className={`sm:hidden scale-animation ${css({
          width: "100px",
          height: "100px",
          right: "5%",
          top: "15%",
        })}`}
      >
        <FontAwesomeIcon
          icon={faPhone}
          className="float-y text-green opacity-50 text-[6rem]"
        />
      </div>
    </Fragment>
  );
};

const FloatingIconsMemo = memo((props) => <FloatingIcons {...props} />);

export default FloatingIconsMemo;
