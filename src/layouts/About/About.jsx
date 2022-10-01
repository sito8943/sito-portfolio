/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";

// framer-motion
import { motion } from "framer-motion";

// @nextui-org
import { useModal, Container, Avatar, Link, Text } from "@nextui-org/react";

// @mui/icons-material
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

// sito components
import SitoContainer from "sito-container";

// own components
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// images
import code from "../../assets/images/coding.webp";
import trip from "../../assets/images/trips.webp";
import piano from "../../assets/images/piano.webp";
import FloatingIcons from "./components/FloatingIcons";

const About = () => {
  const { languageState } = useLanguage();

  const [show, setShow] = useState("Me");

  const { setVisible, bindings } = useModal();

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const showModal = (which) => {
    setShow(which);
    if (show === "") setVisible(false);
    else setVisible(true);
  };

  return (
    <SitoContainer
      id="about"
      justify="center"
      alignItems="center"
      display="flex"
      sx={{
        padding: "100px 0",
        minHeight: "100vh",
        background: "#222222",
        position: "relative",
      }}
    >
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
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={item}>
            <Text h2>{languageState.texts.About.Title}</Text>
          </motion.div>
          <motion.div variants={item}>
            <Avatar
              src="https://ik.imagekit.io/tx6beroitnm/admin-photo_mrLiDrvvO"
              css={{ size: "$20", margin: "10px 0" }}
            />
          </motion.div>
          <motion.div variants={item}>
            <Text h4 css={{ textAlign: "center", margin: "10px 0" }}>
              {languageState.texts.About.Subtitle}
            </Text>
          </motion.div>
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
            <motion.div variants={item}>
              <Card
                image={code}
                alt="about"
                onClick={() => showModal("Me")}
                text={languageState.texts.About.Me.Text}
                more={languageState.texts.About.Me.More}
              />
            </motion.div>
            <motion.div variants={item}>
              <Card
                alt="optional"
                image={trip}
                onClick={() => showModal("Optional")}
                text={languageState.texts.About.Optional.Text}
                more={languageState.texts.About.Optional.More}
              />
            </motion.div>
            <motion.div variants={item}>
              <Card
                image={piano}
                alt="free-time"
                onClick={() => showModal("FreeTime")}
                text={languageState.texts.About.FreeTime.Text}
                more={languageState.texts.About.FreeTime.More}
              />
            </motion.div>
          </Container>
          <motion.div variants={item}>
            <Text css={{ textAlign: "center", marginBottom: "10px" }}>
              {languageState.texts.About.Meet}
            </Text>
          </motion.div>
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
            <motion.div variants={item}>
              <Link
                href={languageState.texts.About.Github.Link}
                rel="noreferrer"
                target="_blank"
              >
                <GitHubIcon sx={{ fontSize: "30px" }} />
              </Link>
            </motion.div>

            <motion.div variants={item}>
              <Link
                href={languageState.texts.About.Instagram.Link}
                rel="noreferrer"
                target="_blank"
              >
                <InstagramIcon sx={{ fontSize: "30px" }} />
              </Link>
            </motion.div>
            <motion.div variants={item}>
              <Link
                href={languageState.texts.About.Twitter.Link}
                rel="noreferrer"
                target="_blank"
              >
                <TwitterIcon sx={{ fontSize: "30px" }} />
              </Link>
            </motion.div>
            <motion.div variants={item}>
              <Link
                href={languageState.texts.About.Facebook.Link}
                rel="noreferrer"
                target="_blank"
              >
                <FacebookIcon sx={{ fontSize: "30px" }} />
              </Link>
            </motion.div>
          </Container>
        </motion.div>
      </Container>
    </SitoContainer>
  );
};

export default About;
