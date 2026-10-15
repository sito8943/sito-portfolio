import { useTranslation } from "react-i18next";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

import { LINKS, SECTIONS } from "@/shared/config";
import { useInViewOnce } from "@/shared/hooks";
import { InView } from "@/shared/ui/molecules";
import { Section } from "@/shared/ui/templates";

import { PROJECTS } from "./constants";
import { FloatingIcons } from "./FloatingIcons";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const { ref, inView } = useInViewOnce();

  const { t } = useTranslation();

  return (
    <Section id={SECTIONS.projects}>
      <FloatingIcons />
      <div
        className="flex items-center justify-center flex-col h-full gap-4"
        ref={ref}
      >
        {inView ? (
          <>
            <InView delay="100ms">
              <h2 className="sm:text-3xl text-4xl font-bold text-center">
                {t("_pages:home.projects.title")}
              </h2>
            </InView>

            <InView delay="200ms">
              <p className="text-center">
                {t("_pages:home.projects.text")}
                <a
                  aria-label={t("_pages:home.hero.social.github")}
                  href={LINKS.GITHUB}
                  rel="noreferrer"
                  target="_blank"
                  className="m-auto hover:text-green underline"
                >
                  {t("_pages:home.projects.seeMore")}
                  <FontAwesomeIcon
                    icon={faExternalLink}
                    className="ml-[5px] text-[15px]"
                  />
                </a>
              </p>
            </InView>
            <ul className="flex items-center justify-center flex-wrap gap-5">
              {PROJECTS.map((item, i) => (
                <li key={item.id} className="md:w-full">
                  <InView delay={`${(i + 1) * 300}ms`}>
                    <ProjectCard
                      link={item.link}
                      image={item.image}
                      alt={`${item.id}-logo`}
                      text={t(`_pages:home.projects.projects.${item.id}.title`)}
                      more={t(`_pages:home.projects.projects.${item.id}.text`)}
                      ariaLabel={`${t("_common:ariaLabels.linkTo")} ${item.link}`}
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
