import type { CSSProperties } from "react";

import { MiniLogo } from "@/shared/ui/atoms";

import { LOGO_PIECES, LOGO_VIEWBOX } from "./constants";
import { useLogoTrail } from "./useLogoTrail";
import { pieceScatter } from "./utils";

/**
 * Animated logo outline around the Hero portrait. Scrolling to About breaks it
 * into its strokes, which follow the reader down and rebuild the logo behind the cards.
 */
export function LogoTrail() {
  const ref = useLogoTrail<HTMLDivElement>();

  return (
    <div ref={ref} className="logo-trail" aria-hidden="true">
      <div className="logo-trail-art">
        <MiniLogo className="logo-trail-outline" />
        <MiniLogo className="logo-trail-trace" pathLength={100} />
      </div>
      <svg viewBox={LOGO_VIEWBOX} className="logo-trail-pieces">
        {LOGO_PIECES.map((piece, i) => {
          const scatter = pieceScatter(piece, i);
          return (
            <line
              key={`${piece.x1}-${piece.y1}`}
              {...piece}
              className="logo-trail-piece"
              style={
                {
                  "--piece-x": scatter.x,
                  "--piece-y": scatter.y,
                  "--piece-rotate": scatter.rotate,
                } as CSSProperties
              }
            />
          );
        })}
      </svg>
    </div>
  );
}
