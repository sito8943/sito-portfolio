/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import loadable from "@loadable/component";

// @nextui-org
import { useModal, Container, Avatar, Text } from "@nextui-org/react";

// utils
import { parseDelay } from "../../utils/functions";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// images
import code from "../../assets/images/coding.jpg";
import trip from "../../assets/images/trips.jpg";
import piano from "../../assets/images/piano.jpg";

// own components
const InViewComponent = loadable(() =>
  import("../../components/InViewComponent/InViewComponent")
);
const FloatingIcons = loadable(() => import("./components/FloatingIcons"));
const Section = loadable(() => import("../../components/Section/Section"));
const Modal = loadable(() => import("../../components/Modal/Modal"));
const Card = loadable(() => import("../../components/Card/Card"));

const About = () => {
  const navigate = useNavigate();
  const { languageState } = useLanguage();

  const [show, setShow] = useState("Me");

  const { setVisible, bindings } = useModal();

  const showModal = (which) => {
    setShow(which);
    if (show === "") setVisible(false);
    else setVisible(true);
  };

  const images = [code, trip, piano];

  const onScroll = useCallback(
    (e) => {
      // const top = window.pageYOffset || document.documentElement.scrollTop;
      // const aboutTop = document.getElementById("about");
      // if (aboutTop.offsetTop - 77 < top) navigate("#about");
      // else navigate("#hero");
    },
    [navigate]
  );

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <Suspense>
      <Section id="about" background="#222222">
        <FloatingIcons />
        <Modal
          onClose={() => setVisible(false)}
          bindings={bindings}
          title={languageState.texts.About[show].Title}
          content={languageState.texts.About[show].Content}
        />
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
            <Text h2>{languageState.texts.About.Title}</Text>
          </InViewComponent>
          <InViewComponent delay="0.4s">
            <Avatar
              src="https://ik.imagekit.io/tx6beroitnm/admin-photo_mrLiDrvvO"
              css={{ size: "$20", margin: "10px 0" }}
            />
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
            {languageState.texts.About.Cards.map((item, i) => (
              <InViewComponent key={i} delay={`${parseDelay(i, 0.4)}s`}>
                <Card
                  image={images[i]}
                  alt={item.Alt}
                  onClick={() => showModal(item.Id)}
                  text={item.Text}
                  more={item.More}
                />
              </InViewComponent>
            ))}
          </Container>
        </Container>
      </Section>
    </Suspense>
  );
};

export default About;
