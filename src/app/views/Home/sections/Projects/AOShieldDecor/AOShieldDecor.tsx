import type { CSSProperties } from "react";

/** Stagger slot for the stroke drawing (`--decor-i`), see animations.css. */
const step = (i: number) => ({ "--decor-i": i }) as CSSProperties;

/** The shield outline, centred on (0, 0), 80 wide. */
const SHIELD = "M-40 -46 0 -56l40 10v38c0 28-18 48-40 58-22-10-40-30-40-58z";

/**
 * AOShield's motif: the logo's shield as nested outlines around the content, like layers of
 * protection, over a faint dot grid. Decorative; the outlines draw in when the intro reveals,
 * then a light keeps running around the inner one.
 */
export function AOShieldDecor() {
  return (
    <div className="aos-decor" aria-hidden="true">
      <span className="aos-decor-grid" />
      <svg className="aos-decor-shields" viewBox="-160 -160 320 320">
        {[1.5, 2, 2.5].map((scale, i) => (
          <path
            key={scale}
            d={SHIELD}
            transform={`scale(${scale})`}
            vectorEffect="non-scaling-stroke"
            pathLength={1}
            style={step(i)}
          />
        ))}
        <path
          d={SHIELD}
          transform="scale(1.5)"
          vectorEffect="non-scaling-stroke"
          pathLength={1}
          className="aos-decor-trace"
        />
      </svg>
    </div>
  );
}
