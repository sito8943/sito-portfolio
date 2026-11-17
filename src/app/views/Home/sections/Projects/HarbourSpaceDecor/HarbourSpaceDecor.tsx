import type { CSSProperties } from "react";

/** Stagger slot for the stroke drawing (`--decor-i`), see animations.css. */
const step = (i: number) => ({ "--decor-i": i }) as CSSProperties;

/**
 * Harbour.Space's graphic motifs (as on harbour.space): their diagonal lattice spread over the
 * whole intro (not the hero's circle, which the website clip right after already shows), and
 * thin line-art circuits ending in small circles and diamonds. Decorative; they
 * draw in when the stage intro reveals.
 */
export function HarbourSpaceDecor() {
  return (
    <div className="hs-decor" aria-hidden="true">
      <span className="hs-decor-lattice" />
      <svg
        className="hs-decor-circuit hs-decor-circuit-left"
        viewBox="0 0 220 160"
      >
        <path d="M0 40h70l30 30v50h80" pathLength={1} style={step(0)} />
        <path d="M0 100h40l20-20" pathLength={1} style={step(1)} />
        <circle cx="186" cy="120" r="6" pathLength={1} style={step(2)} />
        <path d="M64 74l8-8 8 8-8 8z" pathLength={1} style={step(3)} />
      </svg>
      <svg
        className="hs-decor-circuit hs-decor-circuit-right"
        viewBox="0 0 220 160"
      >
        <path d="M220 120h-60l-30-30V30H40" pathLength={1} style={step(1)} />
        <path d="M220 60h-30l-20 20" pathLength={1} style={step(2)} />
        <circle cx="34" cy="30" r="6" pathLength={1} style={step(3)} />
        <path d="M158 84l8-8 8 8-8 8z" pathLength={1} style={step(4)} />
      </svg>
    </div>
  );
}
