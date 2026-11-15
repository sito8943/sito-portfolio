import type { CSSProperties } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useInViewOnce } from "@/shared/hooks";

import { useReducedMotion } from "./useReducedMotion";
import type { ProductPanelProps } from "./types";

/**
 * A full-screen product chapter that sticks while the next one slides over it: big index and
 * title, its screenshot, a facts list and a link to the live site.
 */
export function ProductPanel({
  index,
  eyebrow,
  title,
  text,
  image,
  video,
  alt,
  media,
  link,
  visitLabel,
  facts,
  hideTitle = false,
}: ProductPanelProps) {
  const reducedMotion = useReducedMotion();
  // The clip loads only once the panel nears the screen, so it never weighs on the first load.
  const { ref, inView } = useInViewOnce<HTMLElement>(0);
  const playClip = Boolean(video) && inView && !reducedMotion;

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
          video
            ? ({ "--panel-backdrop": video.backdrop } as CSSProperties)
            : undefined
        }
      >
        {media === "bleed" && video && playClip ? (
          <video
            className="product-panel-video"
            autoPlay
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
        {media === "bleed" && !playClip ? (
          <img src={image} alt={alt} loading="lazy" decoding="async" />
        ) : null}
      </div>
      <div className="product-panel-content">
        <div className="product-panel-top">
          <span className="product-panel-index">{index}</span>
          <div className="product-panel-heading">
            <span className="product-panel-eyebrow">{eyebrow}</span>
            <h3 className="product-panel-title" data-hidden={hideTitle}>
              {title}
            </h3>
          </div>
        </div>
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
