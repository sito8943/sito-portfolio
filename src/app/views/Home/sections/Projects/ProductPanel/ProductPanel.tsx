import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useInViewOnce, useOnScreen } from "@/shared/hooks";

import { PRELOAD_MARGIN } from "./constants";
import { useReducedMotion } from "./useReducedMotion";
import type { ProductPanelProps } from "./types";

/**
 * A full-screen product chapter that sticks while the next one slides over it: big
 * title, its screenshot, a facts list and a link to the live site.
 */
export function ProductPanel({
  eyebrow,
  title,
  text,
  image,
  video,
  brand,
  feature,
  alt,
  media,
  link,
  visitLabel,
  facts,
  hideTitle = false,
}: ProductPanelProps) {
  const reducedMotion = useReducedMotion();
  // Media (image or clip) loads only once the panel is a screen away, never on the first load.
  const { ref, inView } = useInViewOnce<HTMLElement>(0, PRELOAD_MARGIN);
  const playClip = Boolean(video) && inView && !reducedMotion;
  // Once loaded, the clip only plays while the panel is on screen.
  const onScreen = useOnScreen(ref);
  const clipRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const clip = clipRef.current;
    if (!clip) return;
    if (onScreen) void clip.play().catch(() => undefined);
    else clip.pause();
  }, [onScreen, playClip]);

  return (
    <article
      ref={ref}
      className="product-panel"
      data-media={media}
      data-clip={Boolean(video)}
    >
      <div
        className="product-panel-media"
        style={
          {
            "--panel-backdrop": video?.backdrop ?? brand?.background,
            "--panel-brand": brand?.color,
          } as CSSProperties
        }
      >
        {media === "brand" && brand ? (
          <brand.Mark className="product-panel-brand-mark" />
        ) : null}
        {media === "bleed" && video && playClip ? (
          <video
            ref={clipRef}
            className="product-panel-video"
            muted
            loop
            playsInline
            preload="auto"
            poster={image}
            aria-label={alt}
          >
            <source src={video.webm} type="video/webm" />
            <source src={video.mp4} type="video/mp4" />
          </video>
        ) : null}
        {media === "bleed" && inView && !playClip ? (
          <img src={image} alt={alt} loading="lazy" decoding="async" />
        ) : null}
      </div>
      <div className="product-panel-content">
        <div className="product-panel-top">
          <div className="product-panel-heading">
            <span className="product-panel-eyebrow">{eyebrow}</span>
            <h3 className="product-panel-title" data-hidden={hideTitle}>
              {title}
            </h3>
          </div>
        </div>
        {feature ? <div className="product-panel-stage">{feature}</div> : null}
        {media === "frame" ? (
          <div className="product-panel-stage">
            <div className="product-panel-frame">
              <span className="product-panel-frame-bar" aria-hidden="true" />
              <img src={image} alt={alt} loading="lazy" decoding="async" />
            </div>
          </div>
        ) : null}
        <div className="product-panel-bottom">
          <dl className="product-panel-facts">
            {facts.map((fact) => (
              <div key={fact.label} className="product-panel-fact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className="product-panel-copy">
            <p>{text}</p>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="product-panel-cta"
            >
              {visitLabel}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="product-panel-cta-arrow"
              />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
