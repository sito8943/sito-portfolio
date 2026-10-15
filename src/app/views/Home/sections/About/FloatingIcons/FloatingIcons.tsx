import { Fragment, memo } from "react";

// components
import { MiniLogo } from "@/shared/ui/atoms";

function FloatingIconsBase() {
  return (
    <Fragment>
      <div className="sm:hidden scale-animation big-floating">
        <MiniLogo className="float-y opacity-50 h-[6rem]" />
      </div>
    </Fragment>
  );
}

/** Decorative floating icons (hidden on small screens). */
export const FloatingIcons = memo(FloatingIconsBase);
