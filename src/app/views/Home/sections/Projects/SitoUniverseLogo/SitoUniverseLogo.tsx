import { MiniLogo, SitoLogo } from "@/shared/ui/atoms";

import type { SitoUniverseLogoProps } from "./types";

/** Sito's own lockup for the Universe stage: the red isotype beside the logotype. */
export function SitoUniverseLogo({ className, label }: SitoUniverseLogoProps) {
  return (
    <span
      className={`sito-universe-logo ${className ?? ""}`}
      role="img"
      aria-label={label}
    >
      <MiniLogo className="sito-universe-logo-mark" />
      <SitoLogo className="sito-universe-logo-word" />
    </span>
  );
}
