import { useTranslation } from "react-i18next";
import { Tooltip } from "react-tooltip";

import { SECTIONS } from "@/shared/config";
import { useInViewOnce } from "@/shared/hooks";
import { LazyImage } from "@/shared/ui/atoms";
import { InView } from "@/shared/ui/molecules";
import { Section } from "@/shared/ui/templates";

import {
  CAREER_START_YEAR,
  MAIN_SKILLS,
  OTHER_SKILLS,
  TOOLTIP_ID,
} from "./constants";
import { FloatingIcons } from "./FloatingIcons";
import { yearsSince } from "./utils";

export function Skills() {
  const { t } = useTranslation();

  const { ref, inView } = useInViewOnce();

  return (
    <Section id={SECTIONS.skills} className="skills-section">
      <FloatingIcons />
      <div className="section-stack" ref={ref}>
        {inView ? (
          <>
            <InView delay="100ms">
              <h2 className="section-title">{t("_pages:home.skills.title")}</h2>
            </InView>
            <InView delay="200ms">
              <p className="skills-lead body">
                {t("_pages:home.skills.body").replace(
                  "[year]",
                  String(yearsSince(CAREER_START_YEAR)),
                )}
              </p>
            </InView>
            <ul className="card-row">
              {MAIN_SKILLS.map((item, i) => (
                <li key={item.id}>
                  <InView delay={`${(i + 1) * 300}ms`}>
                    <a
                      aria-label={`${t("_common:ariaLabels.linkTo")} ${item.id}`}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LazyImage
                        src={item.image}
                        alt={item.id}
                        className="skill"
                        height={120}
                        width={120}
                      />
                    </a>
                  </InView>
                </li>
              ))}
            </ul>
            <InView delay="1000ms">
              <h3 className="skills-subtitle">
                {t("_pages:home.skills.other")}
              </h3>
            </InView>
            <InView delay="1200ms">
              <ul className="card-row">
                {OTHER_SKILLS.map((item) => (
                  <li key={item.id}>
                    <a
                      data-tooltip-id={TOOLTIP_ID}
                      data-tooltip-content={item.id}
                      aria-label={`${t("_common:ariaLabels.linkTo")} ${item.link}`}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LazyImage
                        className="skill-badge"
                        src={item.image}
                        alt={item.id}
                      />
                    </a>
                  </li>
                ))}
              </ul>
              <Tooltip id={TOOLTIP_ID} />
            </InView>
          </>
        ) : null}
      </div>
    </Section>
  );
}
