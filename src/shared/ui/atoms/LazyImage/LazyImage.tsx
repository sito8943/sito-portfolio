import { useState } from "react";

// images
import crash from "@/assets/images/crash.webp";

import type { LazyImageProps } from "./types";

/** Image with a pulsing placeholder while loading and a fallback on error. */
export function LazyImage({
  src,
  alt = "",
  className,
  ...rest
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  return (
    <img
      loading="lazy"
      decoding="async"
      {...rest}
      src={failedSrc === src ? crash : src}
      alt={alt}
      data-loaded={loaded}
      className={`lazy-image ${className ?? ""}`}
      onLoad={() => setLoaded(true)}
      onError={() => setFailedSrc(src)}
    />
  );
}
