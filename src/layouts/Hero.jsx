// framer-motion
import { motion } from "framer-motion";

// @nextui-org
import { Container, Link, Text } from "@nextui-org/react";

// own components
import ButtonTo from "../components/ButtonTo/ButtonTo";

// contexts
import { useLanguage } from "../contexts/LanguageProvider";

const Hero = () => {
  const { languageState } = useLanguage();

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

  return (
    <Container
      justify="center"
      alignItems="center"
      display="flex"
      css={{ padding: "100px 40px", minHeight: "100vh" }}
    >
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
        <motion.div variants={container} initial="hidden" animate="visible">
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
            <ButtonTo
              target="about"
              icon="fa-arrow-down"
              css={{
                borderRadius: "100%",
                marginTop: "15px",
                minWidth: "40px !important",
                transition: "all 500ms ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            />
          </motion.div>
        </motion.div>
      </Container>
    </Container>
  );
};

export default Hero;
