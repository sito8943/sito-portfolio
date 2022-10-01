/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";

// framer-motion
import { motion } from "framer-motion";

// @nextui-org
import { useModal, Container, Avatar, Link, Text } from "@nextui-org/react";

// @mui/icons-material
import JavascriptIcon from "@mui/icons-material/Javascript";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

// @emotion/css
import { css } from "@emotion/css";

// sito components
import SitoContainer from "sito-container";

// own components
import Card from "../components/Card/Card";
import Modal from "../components/Modal/Modal";

// contexts
import { useLanguage } from "../contexts/LanguageProvider";

// images
import code from "../assets/images/coding.webp";
import trip from "../assets/images/trips.webp";
import piano from "../assets/images/piano.webp";

const About = () => {
  const { languageState } = useLanguage();

  const [show, setShow] = useState("Me");

  const { setVisible, bindings } = useModal();

  const containerImage = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

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
      <motion.div
        variants={containerImage}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <motion.div
          variants={item}
          className={`scale-animation ${css({ left: "5%" })}`}
        >
          <SitoContainer sx={{ transform: "rotate(-30deg)" }}>
            <JavascriptIcon
              className="float-y"
              sx={{ fontSize: "6rem", color: "#F0D81D", opacity: 0.5 }}
            />
          </SitoContainer>
        </motion.div>
        <motion.div
          variants={item}
          className={`scale-animation ${css({
            width: "100px",
            height: "100px",
            right: "5%",
            top: "15%",
          })}`}
        >
          <SitoContainer sx={{ transform: "rotate(30deg)" }}>
            <AddAPhotoIcon
              className="float-y"
              sx={{ fontSize: "6rem", color: "#9494f5", opacity: 0.5 }}
            />
          </SitoContainer>
        </motion.div>
      </motion.div>
      <Modal
        onClose={() => setVisible(false)}
        bindings={bindings}
        title={languageState.texts.About[show].Title}
        content={languageState.texts.About[show].Content}
      />
      <Container
        id="about"
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
                <i className="fa fa-github" aria-hidden="true" />
              </Link>
            </motion.div>

            <motion.div variants={item}>
              <Link
                href={languageState.texts.About.Instagram.Link}
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa fa-instagram" aria-hidden="true" />
              </Link>
            </motion.div>
            <motion.div variants={item}>
              <Link
                href={languageState.texts.About.Twitter.Link}
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa fa-twitter" aria-hidden="true" />
              </Link>
            </motion.div>
            <motion.div variants={item}>
              <Link
                href={languageState.texts.About.Facebook.Link}
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa fa-facebook" aria-hidden="true" />
              </Link>
            </motion.div>
          </Container>
        </motion.div>
      </Container>
    </SitoContainer>
  );
};

export default About;
