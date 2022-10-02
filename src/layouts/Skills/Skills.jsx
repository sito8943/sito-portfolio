/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

// @nextui-org
import { Container, Image, Link, Text } from "@nextui-org/react";

// own components
import InViewComponent from "../../components/InViewComponent/InViewComponent";
import FloatingIcons from "./components/FloatingIcons";
import Section from "../../components/Section/Section";
import Card from "../../components/Card/Card";

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
// skills
import jsSkills from "../../assets/images/skills/js.webp";
import reactSkills from "../../assets/images/skills/react.webp";
import htmlCss from "../../assets/images/skills/react.webp";

const Skills = () => {
  const navigate = useNavigate();
  const { languageState } = useLanguage();

  const onScroll = useCallback(
    (e) => {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      const skillTop = document.getElementById("skills");
      if (skillTop.offsetTop - 77 < top) navigate("#skills");
      else navigate("#about");
    },
    [navigate]
  );

  const images = [reactSkills, htmlCss, jsSkills];
  const logos = [node, mui, nextui, mongodb, firebase];

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
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
            <InViewComponent delay={`${parseDelay(i, 0.5)}s`}>
              <Card
                image={images[i]}
                alt={item.Alt}
                text={item.Text}
                more={item.Age}
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
            <InViewComponent delay={`${parseDelay(j, 0.9)}s`}>
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
            </InViewComponent>
          ))}
        </Container>
      </Container>
    </Section>
  );
};

export default Skills;
