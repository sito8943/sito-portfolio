// framer-motion
import { motion } from "framer-motion";

// @nextui-org
import { Container, Link, Text } from "@nextui-org/react";

// own components
import Card from "../components/Card/Card";

// contexts
import { useLanguage } from "../contexts/LanguageProvider";

const Projects = () => {
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
      css={{ padding: "100px 0", minHeight: "100vh" }}
      id="projects"
    >
      <Container
        id="projects"
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
              {languageState.texts.Projects.Title}
            </Text>
          </motion.div>
          <motion.div variants={item}>
            <Text>
              {languageState.texts.Projects.Text}
              <Link
                href={languageState.texts.About.Github.Link}
                rel="noreferrer"
                target="_blank"
              >
                {languageState.texts.Projects.SeeMore}
              </Link>
            </Text>
          </motion.div>
          <Container
            justify="center"
            display="flex"
            wrap="wrap"
            css={{
              marginTop: "10px",
              flexDirection: "row !important",
              div: {
                display: "flex",
                flexDirection: "row",
              },
            }}
          >
            {languageState.texts.Projects.Projects.map((item) => (
              <motion.div variants={item} key={item.Title}>
                <Card
                  image={item.Image}
                  alt="about"
                  onClick={() => window.open(item.Link)}
                  text={item.Title}
                  more={item.Text}
                />
              </motion.div>
            ))}
          </Container>
        </motion.div>
      </Container>
    </Container>
  );
};

export default Projects;
