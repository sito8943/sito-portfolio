import { Fragment } from "react";

// @fortawesome
import { faPlane, faLaptop, faMusic } from "@fortawesome/free-solid-svg-icons";

import { Icon } from "@/shared/ui/atoms";

/** Decorative floating icons (hidden on small screens). */
export function FloatingIcons() {
  return (
    <Fragment>
      <div className="hero-plane scale-animation">
        <div className="hero-plane-tilt">
          <Icon icon={faPlane} className="hero-plane-icon float-y" />
        </div>
      </div>
      <div className="hero-music scale-animation big-floating">
        <div className="hero-music-tilt">
          <Icon icon={faMusic} className="hero-music-icon float-y" />
        </div>
      </div>
      <div className="hero-laptop scale-animation">
        <div className="hero-laptop-tilt">
          <Icon icon={faLaptop} className="hero-laptop-icon float-y" />
        </div>
      </div>
    </Fragment>
  );
}
