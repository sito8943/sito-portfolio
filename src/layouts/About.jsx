// @nextui-org
import { Container, Button, Link } from "@nextui-org/react";

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
          <Link
            href={languageState.texts.About.Github.Link}
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa fa-github" aria-hidden="true" />
            {languageState.texts.About.Github.Text}
          </Link>

          <Link
            href={languageState.texts.About.Instagram.Link}
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa fa-instagram" aria-hidden="true" />
            {languageState.texts.About.Instagram.Text}
          </Link>
          <Link
            href={languageState.texts.About.Twitter.Link}
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa fa-twitter" aria-hidden="true" />
            {languageState.texts.About.Twitter.Text}
          </Link>
          <Link
            href={languageState.texts.About.Facebook.Link}
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa fa-facebook" aria-hidden="true" />
            {languageState.texts.About.Facebook.Text}
          </Link>
        </div>
      </Container>
    </Container>
  );
};

export default About;
