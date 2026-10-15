import { Fragment, memo } from "react";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function FloatingIconsBase() {
  return (
    <Fragment>
      <div className="sm:hidden scale-animation big-floating">
        <FontAwesomeIcon
          icon={faPhone}
          className="float-y text-green opacity-50 text-[6rem]"
        />
      </div>
    </Fragment>
  );
}

/** Decorative floating icons (hidden on small screens). */
export const FloatingIcons = memo(FloatingIconsBase);
