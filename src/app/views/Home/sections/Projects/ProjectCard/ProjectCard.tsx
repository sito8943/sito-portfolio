import { LazyImage } from "@/shared/ui/atoms";

import type { ProjectCardProps } from "./types";

export function ProjectCard({
  link,
  image,
  alt,
  text,
  more,
  ariaLabel,
}: ProjectCardProps) {
  return (
    <a href={link} target="_blank" rel="noreferrer" aria-label={ariaLabel}>
      <article className="project-card">
        <LazyImage
          src={image}
          alt={alt}
          className="card-media project-card-media"
        />
        <div className="project-card-body">
          <p className="card-title">{text}</p>
          <p className="project-card-text">{more}</p>
        </div>
      </article>
    </a>
  );
}
