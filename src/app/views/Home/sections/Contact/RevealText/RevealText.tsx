import type { CSSProperties } from "react";

import { WORD_STEP_MS } from "./constants";
import type { RevealTextProps } from "./types";

/** Text whose words light up one after another, like a deck being read. */
export function RevealText({
  text,
  as: Tag = "p",
  className = "",
  startMs = 0,
}: RevealTextProps) {
  const words = text.split(" ");

  return (
    <Tag className={`reveal-text ${className}`}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="reveal-word"
          style={
            {
              "--reveal-delay": `${startMs + i * WORD_STEP_MS}ms`,
            } as CSSProperties
          }
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
