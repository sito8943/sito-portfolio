/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

// framer-motion

// @nextui-org
import { useModal, Container, Avatar, Link, Text } from "@nextui-org/react";

// @mui/icons-material
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

// own components
import InViewComponent from "../../components/InViewComponent/InViewComponent";
import FloatingIcons from "./components/FloatingIcons";
import Section from "../../components/Section/Section";
import Modal from "../../components/Modal/Modal";
import Card from "../../components/Card/Card";

// utils
import { parseDelay } from "../../utils/functions";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// images
import code from "../../assets/images/coding.webp";
import trip from "../../assets/images/trips.webp";
import piano from "../../assets/images/piano.webp";

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

  const fontSize = { fontSize: "30px" };

  const icons = [
    <GitHubIcon sx={fontSize} />,
    <InstagramIcon sx={fontSize} />,
    <TwitterIcon sx={fontSize} />,
    <FacebookIcon sx={fontSize} />,
  ];

  const images = [code, trip, piano];

  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    const aboutTop = document.getElementById("about");
    console.log(aboutTop.offsetTop, top);
    if (aboutTop.offsetTop < top) navigate("#about");
    else navigate("#hero");
  }, [scrollOffset]);

  useEffect(() => {
    
  }, []);

  return (
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
            <InViewComponent delay={`${parseDelay(i, 0.4)}s`}>
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
        <InViewComponent delay="0.8s">
          <Text css={{ textAlign: "center", marginBottom: "10px" }}>
            {languageState.texts.About.Meet}
          </Text>
        </InViewComponent>
        <Container
          display="flex"
          justify="center"
          css={{
            flexDirection: "row !important",
            gap: "15px",
            a: {
              fontSize: "30px",
              marginRight: "10px",
              transition: "all 500ms ease",
              "&:hover": { transform: "translateY(-5px)" },
            },
            div: {
              display: "flex",
              flexDirection: "row",
            },
          }}
          wrap="wrap"
        >
          {languageState.texts.About.Social.map((item, i) => (
            <InViewComponent key={item.Text} delay={`${parseDelay(i, 0.8)}s`}>
              <Link href={item.Link} rel="noreferrer" target="_blank">
                {icons[i]}
              </Link>
            </InViewComponent>
          ))}
        </Container>
      </Container>
    </Section>
  );
};

export default About;
