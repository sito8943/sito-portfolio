// @nextui-org
import { Container, Link, Text } from "@nextui-org/react";

// own components
import ButtonTo from "../components/ButtonTo/ButtonTo";

// contexts
import { useLanguage } from "../contexts/LanguageProvider";

const Hero = () => {
  const { languageState } = useLanguage();

  return (
    <Container css={{ padding: "100px 40px", height: "100vh" }}>
      <Container
        id="home"
        justify="center"
        alignItems="center"
        display="flex"
        direction="column"
        css={{ height: "100%", width: "100%" }}
      >
        <Text h1 css={{ textAlign: "center" }}>
          {languageState.texts.Hero.Title}
          <Link href="#about">{languageState.texts.Hero.Name}</Link>
        </Text>

        <Text>{languageState.texts.Hero.Text}</Text>
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
      </Container>
    </Container>
  );
};

export default Hero;
