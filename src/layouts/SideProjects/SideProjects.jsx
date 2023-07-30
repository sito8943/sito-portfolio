/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useRef, Suspense } from "react";

import loadable from "@loadable/component";

// @emotion/css
import { css } from "@emotion/css";

// utils
import { parseDelay } from "../../utils/functions";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// @nextui-org
const Text = loadable(() => import("../../components/NextUI/Text"));
const Container = loadable(() => import("../../components/NextUI/Container"));

// own components
const InViewComponent = loadable(() =>
  import("../../components/InViewComponent/InViewComponent")
);
const FloatingIcons = loadable(() =>
  import("./FloatingIcons.jsx/FloatingIcons")
);
const Section = loadable(() => import("../../components/Section/Section"));
const Card = loadable(() => import("../../components/Card/Card"));

const SideProjects = () => {
  const { languageState } = useLanguage();

  const ref = useRef(null);

  return (
    <Suspense>
      <Section ref={ref} id="side-projects">
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
              {languageState.texts.SideProjects.Title}
            </Text>
          </InViewComponent>
          <InViewComponent delay="0.4s">
            <Text css={{ textAlign: "center" }}>
              {languageState.texts.SideProjects.Text}
            </Text>
          </InViewComponent>
          <InViewComponent delay="0.5s">
            <Text css={{ textAlign: "center" }}>
              {languageState.texts.SideProjects.CallMe}
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
            {languageState.texts.SideProjects.Projects.map((item, i) => (
              <InViewComponent
                delay={`${parseDelay(i, 0.4)}s`}
                key={item.Title}
              >
                <Card
                  image={item.Image}
                  alt="about"
                  link={item.Link}
                  text={item.Title}
                  more={item.Text}
                />
              </InViewComponent>
            ))}
          </Container>
        </Container>
      </Section>
    </Suspense>
  );
};

const SideProjectsMemo = memo((props) => <SideProjects {...props} />);

export default SideProjectsMemo;
