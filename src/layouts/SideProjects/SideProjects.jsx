/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, Suspense } from "react";

import loadable from "@loadable/component";

// @emotion/css
import { css } from "@emotion/css";

// utils
import { parseDelay } from "../../utils/functions";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

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

  return (
    <Suspense>
      <Section id="side-projects">
        <div className="main-container">
          <FloatingIcons />
          <InViewComponent>
            <h2 className={css({ textAlign: "center" })}>
              {languageState.texts.SideProjects.Title}
            </h2>
          </InViewComponent>
          <InViewComponent delay="0.4s">
            <p className="text-center">
              {languageState.texts.SideProjects.Text}
            </p>
          </InViewComponent>
          <InViewComponent delay="0.5s">
            <p className="text-center">
              {languageState.texts.SideProjects.CallMe}
            </p>
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
