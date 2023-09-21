/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense, memo } from "react";
import loadable from "@loadable/component";

// @emotion/css
import { css } from "@emotion/css";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// utils
import { parseDelay } from "../../utils/functions";

// image
import logistics from "../../assets/images/projects/wmt.jpg";

// @nextui-org
const Link = loadable(() => import("../../components/NextUI/Link"));

// own components
const InViewComponent = loadable(() =>
  import("../../components/InViewComponent/InViewComponent")
);
const Section = loadable(() => import("../../components/Section/Section"));
const FloatingIcons = loadable(() => import("./components/FloatingIcons"));
const Card = loadable(() => import("../../components/Card/Card"));

const Projects = () => {
  const { languageState } = useLanguage();

  return (
    <Suspense>
      <Section id="projects" background="#222">
        <div className="flex items-center justify-center flex-col w-full h-full">
          <FloatingIcons />
          <InViewComponent className="flex items-center justify-center flex-col">
            <h2 className={css({ textAlign: "center" })}>
              {languageState.texts.Projects.Title}
            </h2>
          </InViewComponent>
          <InViewComponent
            delay="0.4s"
            className="flex items-center justify-center flex-col"
          >
            <p className="text-center">
              {languageState.texts.Projects.Text}
              <Link
                href={languageState.texts.About.Github.Link}
                rel="noreferrer"
                target="_blank"
                className="m-auto"
              >
                {languageState.texts.Projects.SeeMore}
                <FontAwesomeIcon
                  icon={faExternalLink}
                  className={css({ marginLeft: "5px", fontSize: "18px" })}
                />
              </Link>
            </p>
          </InViewComponent>
          <div className="secondary-container">
            {languageState.texts.Projects.Projects.map((item, i) => (
              <InViewComponent
                key={item.Title}
                delay={`${parseDelay(i, 0.4)}s`}
              >
                <Card
                  link={item.Link}
                  image={item.Image || logistics}
                  alt={`${item.Title}-logo`}
                  text={item.Title}
                  more={item.Text}
                />
              </InViewComponent>
            ))}
          </div>
        </div>
      </Section>
    </Suspense>
  );
};

const ProjectsMemo = memo((props) => <Projects {...props} />);

export default ProjectsMemo;
