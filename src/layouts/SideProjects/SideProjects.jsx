/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// framer-motion
import { useInView } from "framer-motion";

// @nextui-org
import { Container, Text } from "@nextui-org/react";

// own components
import InViewComponent from "../../components/InViewComponent/InViewComponent";
import FloatingIcons from "./FloatingIcons.jsx/FloatingIcons";
import Section from "../../components/Section/Section";
import Card from "../../components/Card/Card";

// utils
import { parseDelay } from "../../utils/functions";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

const SideProjects = () => {
  const navigate = useNavigate();
  const { languageState } = useLanguage();

  const ref = useRef(null);
  const isInView = useInView(ref);

  const onScroll = useCallback(
    (e) => {
      // const top = window.pageYOffset || document.documentElement.scrollTop;
      // const sideProjectsTop = document.getElementById("side-projects");
      // if (isInView) {
      // if (sideProjectsTop.offsetTop - 100 < top) navigate("#side-projects");
      // else navigate("#projects");
      // }
    },
    [navigate, isInView]
  );

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
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
          <Text h1 css={{ textAlign: "center" }}>
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
            <InViewComponent delay={`${parseDelay(i, 0.4)}s`} key={item.Title}>
              <Card
                image={item.Image}
                alt="about"
                onClick={() => window.open(item.Link)}
                text={item.Title}
                more={item.Text}
              />
            </InViewComponent>
          ))}
        </Container>
      </Container>
    </Section>
  );
};

export default SideProjects;
