/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";

// framer-motion
import { motion } from "framer-motion";

// @nextui-org
import { useModal, Container, Avatar, Link, Text } from "@nextui-org/react";

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

  const [show, setShow] = useState("");

  const { setVisible, bindings } = useModal();

  const getImage = () => {
    switch (show) {
      case "Me":
        return code;
      case "Optional":
        return;
      case "FreeTime":
        return piano;
      default:
        return "";
    }
  };

  const getAlt = () => {
    switch (show) {
      case "Me":
        return "code";
      case "Optional":
        return "optional";
      case "FreeTime":
        return "piano";
      default:
        return "";
    }
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
    if (show === "") setVisible(true);
    else setVisible(false);
  };

  return (
    <Container
      justify="center"
      alignItems="center"
      display="flex"
      css={{
        padding: "100px 40px",
        minHeight: "100vh",
      }}
    >
      {show && (
        <Modal
          image={getImage()}
          alt={getAlt()}
          onClose={() => setVisible(false)}
          bindings={bindings}
          title={languageState.texts.About[show].Title}
          content={languageState.texts.About[show].BigText}
        />
      )}
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
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={item}>
            <Text h2>{languageState.texts.About.Title}</Text>
          </motion.div>
          <motion.div variants={item}>
            <Avatar
              src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.6435-9/48426782_2289894674624936_7302552186934788096_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=Dy5gxJkQVbwAX9-MgDU&_nc_ht=scontent-mia3-1.xx&oh=00_AT9P4YPHWYTUJf9TvVF_2s54iZVYNecq1O9U62VhT7ODJw&oe=630F48A7"
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
    </Container>
  );
};

export default About;
