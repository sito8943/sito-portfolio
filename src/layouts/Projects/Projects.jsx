import React, { Fragment, useState, useEffect } from "react";
import useIsInViewport from "use-is-in-viewport";
import { useTranslation } from "react-i18next";

// @emotion/css
import { PrintAfter } from "@sito/ui";

// @emotion/css
import { css } from "@emotion/css";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

// image
import logistics from "../../assets/images/projects/wmt.jpg";

// components
import Card from "./components/Card";
import Section from "../../components/Section/Section";
import FloatingIcons from "./components/FloatingIcons";

const Projects = () => {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 50 });
  const [visible, setVisible] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    if (isInViewport) setVisible(true);
  }, [isInViewport]);

  const projects = [
    {
      id: "m2g-fotos",
      link: "https://m2g-fotos.web.app/",
      image:
        "https://ik.imagekit.io/lgqp0wffgtp/tr:w-318,h-180/M2g/sito-portfolio_OfGGxvLKE.jpg",

    },
    {
      id: "descubre-trinidad",
      image:
        "https://ik.imagekit.io/lgqp0wffgtp/tr:w-318,h-180/SitoPortafolio/sito-portfolio_OhYw223Ki.jpg",
      link: "https://descubretrinidad.com",
    },
    {
      id: "findylin",
      image:
        "https://ik.imagekit.io/lgqp0wffgtp/findylin_kKPu-nu5FS.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678490535881",
      link: "https://findylin-369a7.web.app/",
    },
  ];

  return (
    <Section id="projects">
      <FloatingIcons />
      <div
        className="flex items-center justify-center flex-col h-full gap-4"
        ref={targetRef}
      >
        {visible ? (
          <Fragment>
            <PrintAfter delay={100} animation="appear">
              <h2 className="sm:text-3xl text-4xl font-bold text-center">
                {t("_pages:home.projects.title")}
              </h2>
            </PrintAfter>

            <PrintAfter delay={200} animation="appear">
              <p className="text-center">
                {t("_pages:home.projects.text")}
                <a
                  name="github"
                  aria-label={t("_pages:home.hero.social.github")}
                  href="https://github.com/SitoNumbis"
                  rel="noreferrer"
                  target="_blank"
                  className="m-auto hover:text-primary underline"
                >
                  {t("_common:buttons.see")}
                  <FontAwesomeIcon
                    icon={faExternalLink}
                    className={css({ marginLeft: "5px", fontSize: "15px" })}
                  />
                </a>
              </p>
            </PrintAfter>
            <ul className="flex items-center justify-center flex-wrap gap-5">
              {projects.map((item, i) => (
                <li key={item.id} className="md:w-full">
                  <PrintAfter delay={(i + 1) * 300} animation="appear">
                    <Card
                      link={item.link}
                      image={item.image || logistics}
                      alt={`${item.title}-logo`}
                      text={t(`_pages:home.projects.projects.${item.id}.title`)}
                      more={t(`_pages:home.projects.projects.${item.id}.text`)}
                      ariaLabel={`${t("_common:ariaLabels.linkTo")} ${
                        item.link
                      }`}
                    />
                  </PrintAfter>
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
