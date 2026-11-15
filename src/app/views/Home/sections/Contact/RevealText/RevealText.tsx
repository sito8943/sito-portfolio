import { forwardRef } from "react";

import type { RevealTextProps } from "./types";

/** Statement whose words light up as it is read (scroll-linked, as in the presentation deck). */
export const RevealText = forwardRef<HTMLParagraphElement, RevealTextProps>(
  function RevealText({ text, progress, className = "" }, ref) {
    const words = text.split(" ");
    const lit = Math.round(progress * words.length);

    return (
      <p ref={ref} className={`reveal-text ${className}`}>
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="reveal-word"
            data-lit={i < lit || undefined}
          >
            {word}{" "}
          </span>
        ))}
      </p>
    );
  },
);
