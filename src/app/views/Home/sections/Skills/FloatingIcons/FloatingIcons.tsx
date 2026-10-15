import { Fragment } from "react";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";

// @emotion/css
import { css } from "@emotion/css";

/** Decorative floating icons (hidden on small screens). */
export function FloatingIcons() {
  return (
    <Fragment>
      <div className={`sm:hidden scale-animation ${css({ left: "5%" })}`}>
        <div className="flex -rotate-30">
          <FontAwesomeIcon
            icon={faJs}
            className="float-y sm:!text-5xl text-[6rem] text-yellow opacity-50"
          />
        </div>
      </div>
    </Fragment>
  );
}
