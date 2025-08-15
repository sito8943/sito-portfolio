import React, { Fragment, memo } from "react";

// components
import MiniLogo from "../../../components/Logo/MiniLogo";

const FloatingIcons = () => {
  return (
    <Fragment>
      <div className="sm:hidden scale-animation big-floating">
        <MiniLogo className="float-y opacity-50 h-[6rem]" />
      </div>
    </Fragment>
  );
};

const FloatingIconsMemo = memo((props) => <FloatingIcons {...props} />);

export default FloatingIconsMemo;
