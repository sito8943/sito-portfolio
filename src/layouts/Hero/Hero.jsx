import { Link } from "react-router-dom";

// framer-motion
import { motion } from "framer-motion";

// @mui/icons-material
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// @emotion/css
import { css } from "@emotion/css";

// @nextui-org
import { Container, Button, Text } from "@nextui-org/react";

// own components
import FloatingIcons from "./components/FloatingIcons";
import Section from "../../components/Section/Section";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

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

  const item = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <Section id="hero">
      <FloatingIcons />
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
    </Section>
  );
};

export default Hero;
