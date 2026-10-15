import type { ImgHTMLAttributes } from "react";

export type LazyImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
};
