import { Fragment, memo } from "react";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function FloatingIconsBase() {
  return (
    <Fragment>
      <div className="contact-float scale-animation big-floating">
        <FontAwesomeIcon
          icon={faPhone}
          className="contact-float-icon float-y"
        />
      </div>
    </Fragment>
  );
}

/** Decorative floating icons (hidden on small screens). */
export const FloatingIcons = memo(FloatingIconsBase);
