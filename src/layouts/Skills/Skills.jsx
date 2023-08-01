/* eslint-disable react-hooks/exhaustive-deps */

import React, { memo, Suspense } from "react";

import loadable from "@loadable/component";
import Tippy from "@tippyjs/react";

// utils
import { parseDelay } from "../../utils/functions";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// styles
import "./styles.css";

// images
// other skills
import mui from "../../assets/images/logos/mui.webp";
import node from "../../assets/images/logos/node.webp";
import nextui from "../../assets/images/logos/nextui.webp";
import mongodb from "../../assets/images/logos/mongodb.webp";
import firebase from "../../assets/images/logos/firebase.webp";

// @nextui-org
const Text = loadable(() => import("../../components/NextUI/Text"));
const Link = loadable(() => import("../../components/NextUI/Link"));
const Image = loadable(() => import("../../components/NextUI/Image"));
const Container = loadable(() => import("../../components/NextUI/Container"));

// own components
const InViewComponent = loadable(() =>
  import("../../components/InViewComponent/InViewComponent")
);
const FloatingIcons = loadable(() => import("./components/FloatingIcons"));
const Section = loadable(() => import("../../components/Section/Section"));

const Skills = () => {
  const { languageState } = useLanguage();

  const images = [
    "https://ik.imagekit.io/lgqp0wffgtp/tr:w-250,h-250/SitoPortafolio/skills/React_Native_Logo_Yn2-u9mCt.png?updatedAt=1690681265746",
    "https://ik.imagekit.io/lgqp0wffgtp/tr:q-100/SitoPortafolio/skills/htmlCss_R5P0fuwyV.jpg?updatedAt=1682182309500",
    "https://ik.imagekit.io/lgqp0wffgtp/tr:w-250,h-250/SitoPortafolio/skills/js_i2rCcXKsm.jpg?updatedAt=1690681565275",
  ];
  const logos = [node, mui, nextui, mongodb, firebase];

  const years = (start) => {
    const year = new Date().getFullYear();
    return year - start;
  };

  return (
    <Suspense>
      <Section id="skills">
        <FloatingIcons />
        <div className="main-container">
          <InViewComponent>
            <Text h2>{languageState.texts.Skills.Title}</Text>
          </InViewComponent>
          <InViewComponent delay="0.4s">
            <Text css={{ textAlign: "center", marginBottom: "20px" }}>
              {languageState.texts.Skills.Body.replace(
                "[year]",
                String(`${years(2019)}`)
              )}
            </Text>
          </InViewComponent>
          <Container
            justify="center"
            display="flex"
            wrap="wrap"
            css={{
              flexDirection: "row !important",
              gap: "20px",
            }}
          >
            {languageState.texts.Skills.List.map((item, i) => (
              <InViewComponent
                key={i}
                className="bottom"
                delay={`${parseDelay(i, 0.5)}s`}
              >
                <Link href={item.Link} target="blank" rel="noreferrer">
                  <Image
                    src={images[i]}
                    alt={item.Alt}
                    className="skill"
                    height={200}
                    width={200}
                  />
                </Link>
              </InViewComponent>
            ))}
          </Container>
          <InViewComponent delay="0.8s">
            <Text h4 css={{ margin: "20px 0" }}>
              {languageState.texts.Skills.Other}
            </Text>
          </InViewComponent>
          <div className="secondary-container">
            {languageState.texts.Skills.Others.map((jtem, j) => (
              <InViewComponent key={j} delay={`${parseDelay(j, 0.9)}s`}>
                <Tippy content={jtem.Text}>
                  <Link href={jtem.Link} target="_blank" rel="noopener">
                    <Image
                      css={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "100%",
                        marginRight: "10px",
                      }}
                      key={jtem.Alt}
                      src={logos[j]}
                      alt={jtem.Alt}
                    />
                  </Link>
                </Tippy>
              </InViewComponent>
            ))}
          </div>
        </div>
      </Section>
    </Suspense>
  );
};

const SkillsMemo = memo((props) => <Skills {...props} />);

export default SkillsMemo;
