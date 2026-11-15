import type { CSSProperties } from "react";

import type { SkillLogoProps } from "./types";
import { iconUrl } from "../utils";

/** Brand logo painted through a CSS mask; letters when no icon exists. */
export function SkillLogo({ slug, monogram }: SkillLogoProps) {
  if (!slug)
    return (
      <span aria-hidden="true" className="skill-monogram">
        {monogram}
      </span>
    );

  return (
    <span
      aria-hidden="true"
      className="skill-logo"
      style={{ "--skill-icon": iconUrl(slug) } as CSSProperties}
    />
  );
}
