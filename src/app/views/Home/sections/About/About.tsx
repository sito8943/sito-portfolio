import { useState } from "react";

import { useTranslation } from "@/features/i18n";

import { SECTIONS } from "@/shared/config";
import { useInViewOnce } from "@/shared/hooks";
import { InView } from "@/shared/ui/molecules";
import { Section } from "@/shared/ui/templates";

import { LOGO_ANCHORS } from "../../constants";

import { AboutCard } from "./AboutCard";
import { ABOUT_CARDS, DEFAULT_ABOUT_CARD } from "./constants";

export function About() {
  const { t } = useTranslation();

  const { ref, inView } = useInViewOnce();
  const [activeId, setActiveId] = useState(DEFAULT_ABOUT_CARD);

  return (
    <Section id={SECTIONS.about}>
      <div className="about-layout">
        <InView delay="100ms" className="about-heading">
          <h2 className="section-title">{t("_pages:home.about.title")}</h2>
        </InView>
        <div ref={ref} data-shown={inView} className="about-fan">
          <span
            className="about-logo-anchor"
            data-logo-anchor={LOGO_ANCHORS.about}
            aria-hidden="true"
          />
          <ul className="about-fan-list">
            {ABOUT_CARDS.map((item) => (
              <li
                key={item.id}
                data-slot={item.slot}
                data-active={item.id === activeId}
                className="about-fan-item"
              >
                <AboutCard
                  image={item.image}
                  alt={item.alt}
                  label={t(`_pages:home.about.${item.id}.title`)}
                  active={item.id === activeId}
                  onActivate={() => setActiveId(item.id)}
                />
              </li>
            ))}
          </ul>
        </div>
        <InView delay="300ms" className="about-detail">
          <div key={activeId} className="about-detail-body" aria-live="polite">
            <h3 className="about-detail-title">
              {t(`_pages:home.about.${activeId}.title`)}
            </h3>
            <p className="about-detail-text">
              {t(`_pages:home.about.${activeId}.text`)}
            </p>
            <p className="about-detail-more">
              {t(`_pages:home.about.${activeId}.more`)}
            </p>
          </div>
        </InView>
      </div>
    </Section>
  );
}
