import { Link } from "react-router-dom";

// sito components
import SitoContainer from "sito-container";

// @mui/icons-material
import ErrorIcon from "@mui/icons-material/Error";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import BlockIcon from "@mui/icons-material/Block";

// @nextui-org
import { Button, Text } from "@nextui-org/react";

// @emotion/css
import { css } from "@emotion/css";

// framer-motion
import { motion } from "framer-motion";

// contexts
import { useLanguage } from "../contexts/LanguageProvider";

const NotFound = () => {
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
        delayChildren: 0.1,
        staggerChildren: 0.3,
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
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
    >
      <SitoContainer
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{ width: "100%", height: "100vh" }}
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
              <ErrorIcon
                className="float-y"
                sx={{ fontSize: "6rem", color: "#f53b3b", opacity: 0.5 }}
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
              <ThumbDownIcon
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
            <BlockIcon
              className="float-y"
              sx={{ fontSize: "6rem", color: "#d908d9", opacity: 0.5 }}
            />
          </motion.div>
        </motion.div>
        <SitoContainer justifyContent="center" sx={{ width: "100%" }}>
          <motion.div variants={item}>
            <Text h1 css={{ fontSize: "10rem" }}>
              4
            </Text>
          </motion.div>
          <motion.div variants={item}>
            <Text h1 css={{ fontSize: "10rem" }}>
              0
            </Text>
          </motion.div>
          <motion.div variants={item}>
            <Text h1 css={{ fontSize: "10rem" }}>
              4
            </Text>
          </motion.div>
        </SitoContainer>
        <motion.div variants={item}>
          <Text css={{ marginBottom: "40px" }}>
            {languageState.texts.NotFound.Body}
          </Text>
        </motion.div>
        <motion.div variants={item}>
          <Link to="/" className={css({ textDecoration: "none" })}>
            <Button flat ghost>
              <i
                className={`fa fa-home ${css({ marginRight: "10px" })}`}
                aria-hidden="true"
              />
              {languageState.texts.NotFound.GoHome}
            </Button>
          </Link>
        </motion.div>
      </SitoContainer>
    </motion.div>
  );
};

export default NotFound;
