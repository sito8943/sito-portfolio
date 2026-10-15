import { Fragment, memo } from "react";

// components
import { MiniLogo } from "@/shared/ui/atoms";

function FloatingIconsBase() {
  return (
    <Fragment>
      <div className="about-float scale-animation big-floating">
        <MiniLogo className="about-float-logo float-y" />
      </div>
    </Fragment>
  );
}

/** Decorative floating icons (hidden on small screens). */
export const FloatingIcons = memo(FloatingIconsBase);
