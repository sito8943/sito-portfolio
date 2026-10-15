import { useState, type ImgHTMLAttributes } from "react";

// images
import crash from "../../assets/images/crash.webp";

import "./styles.css";

type LazyImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
};

/** Image with a shimmer placeholder while loading and a fallback on error. */
function LazyImage({ src, alt = "", className, ...rest }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  return (
    <img
      loading="lazy"
      decoding="async"
      {...rest}
      src={failedSrc === src ? crash : src}
      alt={alt}
      className={`${loaded ? "" : "box"} ${className ?? ""}`}
      onLoad={() => setLoaded(true)}
      onError={() => setFailedSrc(src)}
    />
  );
}

export default LazyImage;
