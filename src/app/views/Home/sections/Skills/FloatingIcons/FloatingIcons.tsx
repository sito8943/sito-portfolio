import { Fragment } from "react";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";

/** Decorative floating icons (hidden on small screens). */
export function FloatingIcons() {
  return (
    <Fragment>
      <div className="skills-float scale-animation">
        <div className="skills-float-tilt">
          <FontAwesomeIcon icon={faJs} className="skills-float-icon float-y" />
        </div>
      </div>
    </Fragment>
  );
}
