import { Fragment } from "react";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faLaptop, faMusic } from "@fortawesome/free-solid-svg-icons";

/** Decorative floating icons (hidden on small screens). */
export function FloatingIcons() {
  return (
    <Fragment>
      <div className="hero-plane scale-animation">
        <div className="hero-plane-tilt">
          <FontAwesomeIcon icon={faPlane} className="hero-plane-icon float-y" />
        </div>
      </div>
      <div className="hero-music scale-animation big-floating">
        <div className="hero-music-tilt">
          <FontAwesomeIcon icon={faMusic} className="hero-music-icon float-y" />
        </div>
      </div>
      <div className="hero-laptop scale-animation">
        <div className="hero-laptop-tilt">
          <FontAwesomeIcon
            icon={faLaptop}
            className="hero-laptop-icon float-y"
          />
        </div>
      </div>
    </Fragment>
  );
}
