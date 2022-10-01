import { Link } from "react-router-dom";

// framer-motion
import { motion } from "framer-motion";

// @mui/icons-material
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FlightIcon from "@mui/icons-material/Flight";
import LaptopIcon from "@mui/icons-material/Laptop";
import PianoIcon from "@mui/icons-material/Piano";

// @emotion/css
import { css } from "@emotion/css";

// @nextui-org
import { Container, Button, Text } from "@nextui-org/react";

// contexts
import { useLanguage } from "../contexts/LanguageProvider";

const Hero = () => {
  const { languageState } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

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

  const item = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <Container
      justify="center"
      alignItems="center"
      display="flex"
      css={{ padding: "100px 0", minHeight: "100vh", position: "relative" }}
      id="hero"
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
          <div className={css({ transform: "rotate(-30deg)" })}>
            <FlightIcon
              className="float-y"
              sx={{ fontSize: "6rem", color: "#d908d9", opacity: 0.5 }}
            />
          </div>
        </motion.div>
        <motion.div
          variants={item}
          className={`scale-animation top-20 ${css({
            width: "100px",
            height: "100px",
            right: "5%",
          })}`}
        >
          <div className={css({ transform: "rotate(30deg)" })}>
            <PianoIcon
              className="float-y"
              sx={{ fontSize: "6rem", color: "#9494f5", opacity: 0.5 }}
            />
          </div>
        </motion.div>
        <motion.div
          variants={item}
          className={`scale-animation ${css({
            width: "100px",
            height: "100px",
            bottom: "4%",
            right: "20%",
          })}`}
        >
          <div className={css({ transform: "rotate(10deg)" })}>
            <LaptopIcon
              className="float-y"
              sx={{ fontSize: "6rem", color: "#0fd908", opacity: 0.5 }}
            />
          </div>
        </motion.div>
      </motion.div>
      <Container
        id="home"
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
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={item}>
            <Text h1 css={{ textAlign: "center" }}>
              {languageState.texts.Hero.Title}
              <Link href="#about">{languageState.texts.Hero.Name}</Link>
            </Text>
          </motion.div>
          <motion.div variants={item}>
            <Text>{languageState.texts.Hero.Text}</Text>
          </motion.div>
          <motion.div variants={item}>
            <Link to="#projects" className={css({ textDecoration: "none" })}>
              <Button
                css={{
                  borderRadius: "100%",
                  marginTop: "15px",
                  minWidth: "0px !important",
                  width: "40px",
                  transition: "all 500ms ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <ArrowDownwardIcon />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </Container>
  );
};

export default Hero;
