import type { CSSProperties } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { Icon } from "@/shared/ui/atoms";

import { DeckGlobe } from "../DeckGlobe";
import { DeckMark } from "../DeckMark";
import { useThemeCycle } from "../useThemeCycle";

import { SLIDE_LINES, SLIDES } from "./constants";

/**
 * Sito Presentation Deck as a skeleton editor: a rail of slide thumbnails and the open slide,
 * which carries the deck's live globe piece, plus the presenter controls and the app icon.
 * Shares `InternalPreview`'s palette, pieces, light/dark cycle and float. Decorative.
 */
export function DeckPreview() {
  const { ref, theme, onScreen } = useThemeCycle<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="internal-preview deck-preview"
      data-theme={theme}
      data-on={onScreen}
      aria-hidden="true"
    >
      <div className="internal-preview-card deck-preview-app">
        <span className="internal-preview-bar" />
        <span className="deck-preview-body">
          <span className="deck-preview-rail">
            {SLIDES.map((slide) => (
              <span
                key={slide}
                className="deck-preview-thumb"
                style={{ "--slide-i": slide } as CSSProperties}
              >
                <span className="deck-preview-thumb-line" />
                <span className="deck-preview-thumb-line" />
              </span>
            ))}
          </span>
          <span className="deck-preview-main">
            <span className="internal-preview-toolbar deck-preview-toolbar">
              <span
                className="internal-preview-line internal-preview-title"
                style={{ width: "30%" }}
              />
              <span className="internal-preview-button" />
            </span>
            <span className="deck-preview-slide">
              <span className="deck-preview-slide-copy">
                <span className="deck-preview-slide-kicker" />
                <span className="deck-preview-slide-title" />
                <span className="deck-preview-slide-title deck-preview-slide-title-short" />
                {SLIDE_LINES.map((width, i) => (
                  <span
                    key={i}
                    className="deck-preview-slide-line"
                    style={{ width: `${width}%` }}
                  />
                ))}
              </span>
              <span className="deck-preview-slide-globe">
                <DeckGlobe />
              </span>
            </span>
          </span>
        </span>
      </div>

      <span className="deck-preview-controls">
        <Icon icon={faChevronLeft} />
        <span className="deck-preview-progress" />
        <Icon icon={faChevronRight} />
      </span>

      <span className="deck-preview-icon">
        <DeckMark className="deck-preview-icon-mark" />
      </span>
    </div>
  );
}
