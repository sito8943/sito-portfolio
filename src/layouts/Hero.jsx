// @nextui-org
import { Container, Text } from "@nextui-org/react";

// react-icons
import FaAngleDown from "react-icons/fa/FaAngleDown";

// own components
import ButtonTo from "../components/ButtonTo/ButtonTo";

// contexts
import { useLanguage } from "../contexts/LanguageProvider";

const Hero = () => {
  const { languageState } = useLanguage();

  return (
    <Container
      id="section-home"
      justify="center"
      alignItems="center"
      display="flex"
      direction="column"
      css={{ padding: "100px 40px", height: "100vh" }}
    >
      <Text h1>
        {languageState.texts.Hero.Title}
        <a href=""></a>
        {languageState.texts.Hero.Name}
      </Text>

      <Text>{languageState.texts.Hero.Text}</Text>
      <ButtonTo target="about" icon="About" css={{ borderRadius: "100%" }} />
    </Container>
  );
};

export default Hero;
