import type { CSSProperties } from "react";

import { useInViewOnce } from "@/shared/hooks";

import { REVEAL_THRESHOLD } from "./constants";
import type { StageIntroProps } from "./types";

/** Stagger slot for the reveal (`--stage-i`), see animations.css. */
const step = (i: number) => ({ "--stage-i": i }) as CSSProperties;

/**
 * A stage's opening screen, in the company's own identity: logo, tagline, what it does and my
 * role there. Its content and brand motifs reveal once, when it scrolls into view.
 */
export function StageIntro({
  brand,
  label,
  logo,
  tagline,
  about,
  facts,
  decor,
}: StageIntroProps) {
  const { ref, inView } = useInViewOnce<HTMLElement>(REVEAL_THRESHOLD);

  return (
    <header
      ref={ref}
      className="stage-intro"
      data-brand={brand}
      data-shown={inView}
    >
      {decor}
      <div className="stage-intro-content">
        <p className="stage-intro-label stage-reveal" style={step(0)}>
          {label}
        </p>
        <div className="stage-intro-logo-wrap stage-reveal" style={step(1)}>
          {logo}
        </div>
        <p className="stage-intro-tagline stage-reveal" style={step(2)}>
          {tagline}
        </p>
        <p className="stage-intro-about stage-reveal" style={step(3)}>
          {about}
        </p>
        <dl className="stage-intro-facts stage-reveal" style={step(4)}>
          {facts.map((fact) => (
            <div key={fact.label} className="stage-intro-fact">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}
