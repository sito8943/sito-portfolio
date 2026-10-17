import { useTranslation } from "@/features/i18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SECTIONS } from "@/shared/config";
import { useInViewOnce } from "@/shared/hooks";
import { InView } from "@/shared/ui/molecules";
import { Section } from "@/shared/ui/templates";

import { FEATURE_CARDS } from "./constants";
import { FeatureCard } from "./FeatureCard";

export function Features() {
  const { ref, inView } = useInViewOnce();

  const { t } = useTranslation();

  return (
    <Section
      id={SECTIONS.features}
      className="features-section"
      containerClassName="features-container"
    >
      <div className="features" ref={ref}>
        {inView ? (
          <>
            <InView delay="100ms">
              <h2 className="section-title features-title">
                {t("_pages:home.features.title")}
              </h2>
            </InView>
            <ul className="features-grid">
              {FEATURE_CARDS.map(({ id, icon, tone }, i) => (
                <li key={id} className="features-grid-item" data-tone={tone}>
                  <InView delay={`${(i + 1) * 200}ms`}>
                    <FeatureCard
                      icon={<FontAwesomeIcon icon={icon} aria-hidden="true" />}
                      title={t(`_pages:home.features.cards.${id}.title`)}
                      body={t(`_pages:home.features.cards.${id}.body`)}
                      tags={t(`_pages:home.features.cards.${id}.tags`, {
                        returnObjects: true,
                      })}
                    />
                  </InView>
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </Section>
  );
}
