// @nextui-org
import { Container } from "@nextui-org/react";

// contexts
import { useLanguage } from "../contexts/LanguageProvider";

const About = () => {
  const { languageState } = useLanguage();

  return (
    <Container
      css={{
        padding: "100px 40px",
        height: "100vh",
      }}
    >
      <Container
        id="about"
        justify="center"
        alignItems="center"
        display="flex"
        direction="column"
        css={{ height: "100%", width: "100%" }}
      >
        <h2>{languageState.texts.About.Title}</h2>

        <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default About;
