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
      <div className="section-stack" ref={ref}>
        {inView ? (
          <>
            <InView delay="100ms">
              <h2 className="section-title">
                {t("_pages:home.projects.title")}
              </h2>
            </InView>

            <InView delay="200ms">
              <p className="projects-lead">
                {t("_pages:home.projects.text")}
                <a
                  aria-label={t("_pages:home.hero.social.github")}
                  href={LINKS.GITHUB}
                  rel="noreferrer"
                  target="_blank"
                  className="projects-github"
                >
                  {t("_pages:home.projects.seeMore")}
                  <FontAwesomeIcon
                    icon={faExternalLink}
                    className="projects-github-icon"
                  />
                </a>
              </p>
            </InView>
            <ul className="card-row">
              {PROJECTS.map((item, i) => (
                <li key={item.id} className="card-row-item">
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
