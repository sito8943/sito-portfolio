import { useTranslation } from "react-i18next";

import { SECTIONS } from "@/shared/config";
import { useInViewOnce } from "@/shared/hooks";
import { InView, Marquee } from "@/shared/ui/molecules";
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
            <Marquee
              elements={FEATURE_CARDS}
              getKey={(el) => el}
              renderFunction={(el, i) => (
                <InView delay={`${(i + 1) * 200}ms`}>
                  <FeatureCard
                    title={t(`_pages:home.features.cards.${el}.title`)}
                    body={t(`_pages:home.features.cards.${el}.body`)}
                  />
                </InView>
              )}
            />
          </>
        ) : null}
      </div>
    </Section>
  );
}
