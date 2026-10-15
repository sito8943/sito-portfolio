import { Fragment } from "react";
import { useTranslation } from "react-i18next";

// hooks
import { useInViewOnce } from "../../hooks/useInViewOnce";
import InViewComponent from "../../components/InViewComponent/InViewComponent";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

// image
import logistics from "../../assets/images/projects/wmt.jpg";

// components
import Card from "./components/Card";
import Section from "../../components/Section/Section";
import FloatingIcons from "./components/FloatingIcons";
import { LINKS } from "../../config/links";

const Projects = () => {
  const { ref: elementRef, inView: visible } = useInViewOnce();

  const { t } = useTranslation();

  const projects = [
    {
      id: "m2g-fotos",
      link: LINKS.PROJECT_M2G_FOTOS,
      image:
        "https://ik.imagekit.io/lgqp0wffgtp/SitoPortafolio/Group%203_GS4a4h2tQ.png",
    },
    {
      id: "descubre-trinidad",
      image:
        "https://ik.imagekit.io/lgqp0wffgtp/SitoPortafolio/sito-portfolio_OhYw223Ki.jpg",
      link: LINKS.PROJECT_DESCUBRE_TRINIDAD,
    },
    {
      id: "sito-library",
      image:
        "https://ik.imagekit.io/lgqp0wffgtp/SitoPortafolio/Imagekit_yqb3gsC7a.png",
      link: LINKS.PROJECT_SITO_LIBRARY,
    },
  ];

  return (
    <Section id="projects">
      <FloatingIcons />
      <div
        className="flex items-center justify-center flex-col h-full gap-4"
        ref={elementRef}
      >
        {visible ? (
          <Fragment>
            <InViewComponent delay="100ms">
              <h2 className="sm:text-3xl text-4xl font-bold text-center">
                {t("_pages:home.projects.title")}
              </h2>
            </InViewComponent>

            <InViewComponent delay="200ms">
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
            </InViewComponent>
            <ul className="flex items-center justify-center flex-wrap gap-5">
              {projects.map((item, i) => (
                <li key={item.id} className="md:w-full">
                  <InViewComponent delay={`${(i + 1) * 300}ms`}>
                    <Card
                      link={item.link}
                      image={item.image || logistics}
                      alt={`${item.id}-logo`}
                      text={t(`_pages:home.projects.projects.${item.id}.title`)}
                      more={t(`_pages:home.projects.projects.${item.id}.text`)}
                      ariaLabel={`${t("_common:ariaLabels.linkTo")} ${
                        item.link
                      }`}
                    />
                  </InViewComponent>
                </li>
              ))}
            </ul>
          </Fragment>
        ) : null}
      </div>
    </Section>
  );
};

export default Projects;
