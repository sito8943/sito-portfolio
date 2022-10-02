// @mui/icons-material
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// @emotion/css
import { css } from "@emotion/css";

// @nextui-org
import { Container, Button, Text, Link } from "@nextui-org/react";

// own components
import InViewComponent from "../../components/InViewComponent/InViewComponent";
import FloatingIcons from "./components/FloatingIcons";
import Section from "../../components/Section/Section";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

const Hero = () => {
  const { languageState } = useLanguage();

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
        <InViewComponent>
          <Text h1 css={{ textAlign: "center" }}>
            <Link href="#about">{"<Sito />"}</Link>
          </Text>
        </InViewComponent>
        <InViewComponent delay="0.4s">
          <Text>{languageState.texts.Hero.Text}</Text>
        </InViewComponent>
        <InViewComponent delay="0.5s">
          <Link href="#projects" className={css({ textDecoration: "none" })}>
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
        </InViewComponent>
      </Container>
    </Section>
  );
};

export default Hero;
