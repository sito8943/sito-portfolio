// framer-motion
import { motion } from "framer-motion";

// @emotion/css
import { css } from "@emotion/css";

// @nextui-org
import { Container, Link, Text, Image } from "@nextui-org/react";

// own components
import ButtonTo from "../components/ButtonTo/ButtonTo";

// contexts
import { useLanguage } from "../contexts/LanguageProvider";

// images
import fly from "../assets/images/floating/fly.png";
import laptop from "../assets/images/floating/laptop.png";

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
    >
      <motion.div
        variants={containerImage}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        className={{ width: "100%", height: "100vh", position: "absolute" }}
      >
        <motion.div
          variants={item}
          className={`scale-animation left-10 bottom-10 ${css({
            width: "100px",
            height: "100px",
          })}`}
        >
          <Image
            src={fly}
            alt="fly"
            className="float-y"
            objectFit="contain"
            css={{ width: "100px", height: "100px" }}
          />
        </motion.div>
        <motion.div
          variants={item}
          className={`scale-animation top-20 right-10 ${css({
            width: "100px",
            height: "100px",
          })}`}
        >
          <Image
            src={laptop}
            alt="laptop"
            className="float-y"
            objectFit="contain"
            css={{ width: "100px", height: "100px" }}
          />
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
            <ButtonTo
              target="projects"
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
