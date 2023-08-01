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
        <div className="main-container">
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
          <div className="secondary-container">
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
          </div>
        </div>
      </Section>
    </Suspense>
  );
};

const SideProjectsMemo = memo((props) => <SideProjects {...props} />);

export default SideProjectsMemo;
