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
const Container = loadable(() => import("../../components/NextUI/Container"));
const Text = loadable(() => import("../../components/NextUI/Text"));
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
        <Container
          justify="center"
          alignItems="center"
          display="flex"
          direction="column"
          css={{
            height: "100%",
            width: "100%",
            div: {
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
          <FloatingIcons />
          <InViewComponent>
            <Text h2 className={css({ textAlign: "center" })}>
              {languageState.texts.Projects.Title}
            </Text>
          </InViewComponent>
          <InViewComponent delay="0.4s">
            <Text css={{ textAlign: "center" }}>
              {languageState.texts.Projects.Text}
              <Link
                href={languageState.texts.About.Github.Link}
                rel="noreferrer"
                target="_blank"
                css={{ margin: "auto" }}
              >
                {languageState.texts.Projects.SeeMore}
                <FontAwesomeIcon
                  icon={faExternalLink}
                  className={css({ marginLeft: "5px", fontSize: "18px" })}
                />
              </Link>
            </Text>
          </InViewComponent>
          <Container
            justify="center"
            display="flex"
            wrap="wrap"
            css={{
              marginTop: "10px",
              flexDirection: "row !important",
              div: {
                display: "flex",
                flexDirection: "row",
              },
            }}
          >
            {languageState.texts.Projects.Projects.map((item, i) => (
              <InViewComponent
                key={item.Title}
                delay={`${parseDelay(i, 0.4)}s`}
              >
                <Link href={item.Link} target="_blank" rel="noopener">
                  <Card
                    image={item.Image || logistics}
                    alt={`${item.Title}-logo`}
                    onClick={() => window.open(item.Link)}
                    text={item.Title}
                    more={item.Text}
                  />
                </Link>
              </InViewComponent>
            ))}
          </Container>
        </Container>
      </Section>
    </Suspense>
  );
};

const ProjectsMemo = memo((props) => <Projects {...props} />);

export default ProjectsMemo;
