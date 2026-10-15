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
      <article className="hover:-translate-y-2 hover:shadow-lg hover:shadow-sdark transition duration-300 bg-dark-background2 md:w-full md:h-auto w-[300px] h-[300px] rounded-xl border-[1px] border-placeholder-dark">
        <LazyImage
          src={image}
          alt={alt}
          className="w-full md:h-[300px] h-[150px] rounded-t-xl object-cover object-center"
        />
        <div className="p-5">
          <p className="text-lg font-bold text-center">{text}</p>
          <p className="text-center">{more}</p>
        </div>
      </article>
    </a>
  );
}
