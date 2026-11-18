import { useEffect, useRef, useState } from "react";

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
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  // A prerendered image can finish loading before React takes over and misses `onLoad`.
  useEffect(() => {
    const image = ref.current;
    if (image?.complete && image.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <img
      ref={ref}
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
