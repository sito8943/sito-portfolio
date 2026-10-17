import { LazyImage } from "@/shared/ui/atoms";

import type { AboutCardProps } from "./types";

/** Image-only card of the About fan; hovering, focusing or tapping it makes it active. */
export function AboutCard({
  image,
  alt,
  label,
  active,
  onActivate,
}: AboutCardProps) {
  return (
    <button
      type="button"
      data-active={active}
      aria-pressed={active}
      aria-label={label}
      className="about-card"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
    >
      <LazyImage src={image} alt={alt} className="about-card-media" />
    </button>
  );
}
