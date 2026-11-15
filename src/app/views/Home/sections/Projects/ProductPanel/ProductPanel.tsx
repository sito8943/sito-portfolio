import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
  alt,
  media,
  link,
  visitLabel,
  facts,
}: ProductPanelProps) {
  return (
    <article className="product-panel" data-media={media}>
      <div className="product-panel-media">
        {media === "bleed" ? (
          <img src={image} alt={alt} loading="lazy" decoding="async" />
        ) : null}
      </div>
      <div className="product-panel-content">
        <div className="product-panel-top">
          <span className="product-panel-index">{index}</span>
          <div className="product-panel-heading">
            <span className="product-panel-eyebrow">{eyebrow}</span>
            <h3 className="product-panel-title">{title}</h3>
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
