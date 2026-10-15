import { useTranslation } from "@/features/i18n";

import { SECTIONS } from "@/shared/config";
import { useInViewOnce } from "@/shared/hooks";
import { LazyImage } from "@/shared/ui/atoms";
import { InView } from "@/shared/ui/molecules";
import { Section } from "@/shared/ui/templates";

import { AboutCard } from "./AboutCard";
import { ABOUT_CARDS, PROFILE_PHOTO } from "./constants";
import { FloatingIcons } from "./FloatingIcons";

export function About() {
  const { t } = useTranslation();

  const { ref, inView } = useInViewOnce();

  return (
    <Section id={SECTIONS.about}>
      <FloatingIcons />
      <div className="section-stack" ref={ref}>
        {inView ? (
          <>
            <InView delay="100ms">
              <h2 className="section-title">{t("_pages:home.about.title")}</h2>
            </InView>
            <InView delay="200ms">
              <LazyImage
                src={PROFILE_PHOTO}
                alt="Sito"
                className="about-photo"
              />
            </InView>
            <ul className="card-row about-cards">
              {ABOUT_CARDS.map((item, i) => (
                <li key={item.id} className="card-row-item">
                  <InView delay={`${(i + 1) * 300}ms`}>
                    <AboutCard
                      image={item.image}
                      noHover
                      alt={item.alt}
                      text={t(`_pages:home.about.${item.id}.text`)}
                      more={t(`_pages:home.about.${item.id}.more`)}
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
