import { LazyImage } from "@/shared/ui/atoms";

import type { AboutCardProps } from "./types";

export function AboutCard({
  image,
  alt,
  text,
  more,
  noHover = false,
}: AboutCardProps) {
  return (
    <article data-hover={!noHover} className="about-card">
      <LazyImage
        src={image}
        alt={alt}
        className="card-media about-card-media"
      />
      <div className="about-card-body">
        <p className="card-title">{text}</p>
        <p className="about-card-text">{more}</p>
      </div>
    </article>
  );
}
