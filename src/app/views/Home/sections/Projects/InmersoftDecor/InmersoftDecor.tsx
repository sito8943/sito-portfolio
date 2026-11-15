import type { CSSProperties } from "react";

/** Stagger slot for the stroke drawing (`--decor-i`), see animations.css. */
const step = (i: number) => ({ "--decor-i": i }) as CSSProperties;

/**
 * Inmersoft's graphic motifs (as on inmersoft.net): a striped circle, a grid of crosses and a
 * zigzag. Decorative; they draw in when the stage intro reveals.
 */
export function InmersoftDecor() {
  return (
    <div className="inmersoft-decor" aria-hidden="true">
      <span className="inmersoft-decor-stripes" />
      <svg className="inmersoft-decor-crosses" viewBox="0 0 120 120">
        {[0, 1, 2].flatMap((row) =>
          [0, 1, 2].map((col) => (
            <path
              key={`${row}-${col}`}
              d={`M${col * 44 + 4} ${row * 44 + 4}l24 24m0 -24l-24 24`}
              pathLength={1}
              style={step(row + col)}
            />
          )),
        )}
      </svg>
      <svg className="inmersoft-decor-zigzag" viewBox="0 0 160 40">
        <path
          d="M2 8l19 19 19-19 19 19 19-19 19 19 19-19 19 19 19-19"
          pathLength={1}
          style={step(0)}
        />
        <path
          d="M2 22l19 19 19-19 19 19 19-19 19 19 19-19 19 19 19-19"
          pathLength={1}
          style={step(1)}
        />
      </svg>
    </div>
  );
}
