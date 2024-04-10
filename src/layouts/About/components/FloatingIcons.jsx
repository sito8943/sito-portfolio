import React, { Fragment, memo } from "react";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

// @emotion/css
import { css } from "@emotion/css";
import MiniLogo from "../../../components/Logo/MiniLogo";

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
        <div sx={{ transform: "rotate(30deg)", display: "flex" }}>
          <MiniLogo className={`float-y opacity-50 h-[6rem]`} />
        </div>
      </div>
    </Fragment>
  );
};

const FloatingIconsMemo = memo((props) => <FloatingIcons {...props} />);

export default FloatingIconsMemo;
