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
    <Section id={SECTIONS.skills} background="bg-pdark">
      <FloatingIcons />
      <div
        className="flex items-center justify-center flex-col h-full gap-4"
        ref={ref}
      >
        {inView ? (
          <>
            <InView delay="100ms">
              <h2 className="sm:text-3xl text-4xl font-bold text-center">
                {t("_pages:home.skills.title")}
              </h2>
            </InView>
            <InView delay="200ms">
              <p className="text-center mb-5 mx-auto w-[80%] body">
                {t("_pages:home.skills.body").replace(
                  "[year]",
                  String(yearsSince(CAREER_START_YEAR)),
                )}
              </p>
            </InView>
            <ul className="flex items-center justify-center flex-wrap gap-5">
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
              <h3 className="text-3xl font-bold text-center">
                {t("_pages:home.skills.other")}
              </h3>
            </InView>
            <InView delay="1200ms">
              <ul className="flex items-center justify-center flex-wrap gap-5">
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
                        className="object-cover w-10 h-10 rounded-full bg-white border-2 border-white"
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
