import React, { Fragment, useState, useEffect } from "react";
import useIsInViewport from "use-is-in-viewport";

// @emotion/css
import { css } from "@emotion/css";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// image
import logistics from "../../assets/images/projects/wmt.jpg";

// own components
import Card from "./components/Card";
import Section from "../../components/Section/Section";
import FloatingIcons from "./components/FloatingIcons";
import PrintAfter from "../../components/PrintAfter/PrintAfter";

const Projects = () => {
  const { languageState } = useLanguage();

  const [isInViewport, targetRef] = useIsInViewport({ threshold: 50 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isInViewport) setVisible(true);
  }, [isInViewport]);

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
                {languageState.texts.Projects.Title}
              </h2>
            </PrintAfter>

            <PrintAfter delay={200} animation="appear">
              <p className="text-center">
                {languageState.texts.Projects.Text}
                <a
                  name="github"
                  aria-label={languageState.texts.AriaLabels.Github}
                  href={languageState.texts.About.Github.Link}
                  rel="noreferrer"
                  target="_blank"
                  className="m-auto hover:text-primary underline"
                >
                  {languageState.texts.Projects.SeeMore}
                  <FontAwesomeIcon
                    icon={faExternalLink}
                    className={css({ marginLeft: "5px", fontSize: "15px" })}
                  />
                </a>
              </p>
            </PrintAfter>
            <ul className="flex items-center justify-center flex-wrap gap-5">
              {languageState.texts.Projects.Projects.map((item, i) => (
                <li key={item.Title}>
                  <PrintAfter delay={(i + 1) * 300} animation="appear">
                    <Card
                      link={item.Link}
                      image={item.Image || logistics}
                      alt={`${item.Title}-logo`}
                      text={item.Title}
                      more={item.Text}
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
