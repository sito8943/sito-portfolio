import React, { Fragment, memo } from "react";

// components
import MiniLogo from "../../../components/Logo/MiniLogo";

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
        <MiniLogo className={`float-y opacity-50 h-[6rem]`} />
      </div>
    </Fragment>
  );
};

const FloatingIconsMemo = memo((props) => <FloatingIcons {...props} />);

export default FloatingIconsMemo;
