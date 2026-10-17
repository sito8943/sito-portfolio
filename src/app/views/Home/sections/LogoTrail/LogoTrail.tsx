import { MiniLogo } from "@/shared/ui/atoms";

import { useLogoTrail } from "./useLogoTrail";

/**
 * Animated logo outline around the Hero portrait. Scrolling to About carries it,
 * whole, down with the reader; it dissolves behind the cards as it lands.
 */
export function LogoTrail() {
  const ref = useLogoTrail<HTMLDivElement>();

  return (
    <div ref={ref} className="logo-trail" aria-hidden="true">
      <div className="logo-trail-art">
        <MiniLogo className="logo-trail-outline" />
        <MiniLogo className="logo-trail-trace" pathLength={100} />
      </div>
    </div>
  );
}
