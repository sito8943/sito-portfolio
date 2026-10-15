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
    <article
      className={`${
        noHover
          ? "!border-0"
          : "hover:-translate-y-2 hover:shadow-lg hover:shadow-yellow/40 transition duration-300 border-placeholder-dark"
      } bg-dark-background2 md:w-full md:h-auto w-[300px] h-[250px] rounded-xl border-[1px] `}
    >
      <LazyImage
        src={image}
        alt={alt}
        className="w-full md:h-[300px] h-[150px] rounded-t-xl object-cover object-bottom"
      />
      <div className="p-1 px-5">
        <p className="text-lg font-bold text-center">{text}</p>
        <p className="text-center mb-5">{more}</p>
      </div>
    </article>
  );
}
