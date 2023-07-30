/* eslint-disable react-hooks/exhaustive-deps */

import React, { memo, useEffect, useCallback, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import loadable from "@loadable/component";
import Tippy from "@tippyjs/react";

// utils
import { parseDelay } from "../../utils/functions";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

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
const Card = loadable(() => import("../../components/Card/Card"));

const Skills = () => {
  const navigate = useNavigate();
  const { languageState } = useLanguage();

  const onScroll = useCallback(
    (e) => {
      // const top = window.pageYOffset || document.documentElement.scrollTop;
      // const skillTop = document.getElementById("skills");
      // if (skillTop.offsetTop - 77 < top) navigate("#skills");
      // else navigate("#about");
    },
    [navigate]
  );

  const images = [
    "https://ik.imagekit.io/lgqp0wffgtp/tr:q-50/SitoPortafolio/skills/react_E6SabUYXk.jpg?updatedAt=1682182309542",
    "https://ik.imagekit.io/lgqp0wffgtp/tr:q-100/SitoPortafolio/skills/htmlCss_R5P0fuwyV.jpg?updatedAt=1682182309500",
    "https://ik.imagekit.io/lgqp0wffgtp/tr:q-50/SitoPortafolio/skills/js_xQmEH10Am.png?updatedAt=1682182308628",
  ];
  const logos = [node, mui, nextui, mongodb, firebase];

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  const years = (start) => {
    const year = new Date().getFullYear();
    return year - start;
  };

  return (
    <Suspense>
      <Section id="skills">
        <FloatingIcons />
        <Container
          justify="center"
          alignItems="center"
          display="flex"
          direction="column"
          css={{
            height: "100%",
            div: {
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
          <InViewComponent>
            <Text h2>{languageState.texts.Skills.Title}</Text>
          </InViewComponent>
          <InViewComponent delay="0.4s">
            <Text css={{ textAlign: "center", marginBottom: "20px" }}>
              {languageState.texts.Skills.Body}
            </Text>
          </InViewComponent>
          <Container
            justify="center"
            display="flex"
            wrap="wrap"
            css={{
              flexDirection: "row !important",
              div: {
                display: "flex",
                flexDirection: "row",
              },
            }}
          >
            {languageState.texts.Skills.List.map((item, i) => (
              <InViewComponent
                key={i}
                className="bottom"
                delay={`${parseDelay(i, 0.5)}s`}
              >
                <Card
                  link={item.Link}
                  image={images[i]}
                  alt={item.Alt}
                  text={item.Text}
                  more={`${years(item.Start)}${item.Age}`}
                />
              </InViewComponent>
            ))}
          </Container>
          <InViewComponent delay="0.8s">
            <Text h4 css={{ margin: "20px 0" }}>
              {languageState.texts.Skills.Other}
            </Text>
          </InViewComponent>
          <Container
            justify="center"
            display="flex"
            wrap="wrap"
            css={{
              flexDirection: "row !important",
              div: {
                display: "flex",
                flexDirection: "row",
              },
            }}
          >
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
          </Container>
        </Container>
      </Section>
    </Suspense>
  );
};

const SkillsMemo = memo((props) => <Skills {...props} />);

export default SkillsMemo;
