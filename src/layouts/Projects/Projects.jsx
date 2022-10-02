// @nextui-org
import { Container, Link, Text } from "@nextui-org/react";

// @mui/icons-material
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

// own components
import InViewComponent from "../../components/InViewComponent/InViewComponent";
import Section from "../../components/Section/Section";
import FloatingIcons from "./components/FloatingIcons";
import Card from "../../components/Card/Card";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// utils
import { parseDelay } from "../../utils/functions";

const Projects = () => {
  const { languageState } = useLanguage();

  return (
    <Section id="projects">
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
        <FloatingIcons />
        <InViewComponent>
          <Text h1 css={{ textAlign: "center" }}>
            {languageState.texts.Projects.Title}
          </Text>
        </InViewComponent>
        <InViewComponent delay="0.4s">
          <Text css={{ textAlign: "center" }}>
            {languageState.texts.Projects.Text}
            <Link
              href={languageState.texts.About.Github.Link}
              rel="noreferrer"
              target="_blank"
              css={{ margin: "auto" }}
            >
              {languageState.texts.Projects.SeeMore}
              <OpenInNewIcon sx={{ marginLeft: "5px", fontSize: "18px" }} />
            </Link>
          </Text>
        </InViewComponent>
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
          {languageState.texts.Projects.Projects.map((item, i) => (
            <InViewComponent key={item.Title} delay={`${parseDelay(i, 0.4)}s`}>
              <Card
                image={item.Image}
                alt="about"
                onClick={() => window.open(item.Link)}
                text={item.Title}
                more={item.Text}
              />
            </InViewComponent>
          ))}
        </Container>
      </Container>
    </Section>
  );
};

export default Projects;
