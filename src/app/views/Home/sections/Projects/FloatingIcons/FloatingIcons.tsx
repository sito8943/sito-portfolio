import { Fragment } from "react";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faFaceLaughWink,
} from "@fortawesome/free-solid-svg-icons";

/** Decorative floating icons (hidden on small screens). */
export function FloatingIcons() {
  return (
    <Fragment>
      <div className="projects-check scale-animation">
        <FontAwesomeIcon
          icon={faCircleCheck}
          className="projects-float-icon float-y"
        />
      </div>
      <div className="projects-wink scale-animation">
        <FontAwesomeIcon
          icon={faFaceLaughWink}
          className="projects-float-icon float-y"
        />
      </div>
    </Fragment>
  );
}
