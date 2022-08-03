/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

// @nextui-org
import { useModal, Container, Avatar, Link, Text } from "@nextui-org/react";

// own components
import Card from "../components/Card/Card";

// contexts
import { useLanguage } from "../contexts/LanguageProvider";
import Modal from "../components/Modal/Modal";

const About = () => {
  const { languageState } = useLanguage();

  const [show, setShow] = useState("");

  const { setVisible, bindings } = useModal();

  useEffect(() => {
    if (show !== "") setVisible(true);
    else setVisible(false);
  }, [show]);

  return (
    <Container
      css={{
        padding: "100px 40px",
      }}
    >
      {show && (
        <Modal
          onClose={() => setVisible(false)}
          bindings={bindings}
          title={languageState.texts.About[show].Title}
          content={languageState.texts.About[show].BigText}
        />
      )}
      <Container
        id="about"
        justify="center"
        alignItems="center"
        display="flex"
        direction="column"
        css={{
          height: "100%",
        }}
      >
        <Text h2>{languageState.texts.About.Title}</Text>
        <Avatar
          src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.6435-9/48426782_2289894674624936_7302552186934788096_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=Dy5gxJkQVbwAX9-MgDU&_nc_ht=scontent-mia3-1.xx&oh=00_AT9P4YPHWYTUJf9TvVF_2s54iZVYNecq1O9U62VhT7ODJw&oe=630F48A7"
          css={{ size: "$20", margin: "10px 0" }}
        />
        <Text h4 css={{ textAlign: "center", margin: "10px 0" }}>
          {languageState.texts.About.Subtitle}
        </Text>
        <Container justify="center" display="flex" wrap="wrap">
          <Card
            onClick={() => setShow("Me")}
            text={languageState.texts.About.Me.Text}
            more={languageState.texts.About.Me.More}
          />
          <Card
            onClick={() => setShow("Optional")}
            text={languageState.texts.About.Optional.Text}
            more={languageState.texts.About.Optional.More}
          />
          <Card
            onClick={() => setShow("FreeTime")}
            text={languageState.texts.About.FreeTime.Text}
            more={languageState.texts.About.FreeTime.More}
          />
        </Container>
        <Text css={{ textAlign: "center", marginBottom: "10px" }}>
          {languageState.texts.About.Meet}
        </Text>
        <Container
          display="flex"
          justify="center"
          css={{
            gap: "15px",
            a: {
              fontSize: "30px",
              transition: "all 500ms ease",
              "&:hover": { transform: "translateY(-5px)" },
            },
          }}
          wrap="wrap"
        >
          <Link
            href={languageState.texts.About.Github.Link}
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa fa-github" aria-hidden="true" />
          </Link>

          <Link
            href={languageState.texts.About.Instagram.Link}
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa fa-instagram" aria-hidden="true" />
          </Link>
          <Link
            href={languageState.texts.About.Twitter.Link}
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa fa-twitter" aria-hidden="true" />
          </Link>
          <Link
            href={languageState.texts.About.Facebook.Link}
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa fa-facebook" aria-hidden="true" />
          </Link>
        </Container>
      </Container>
    </Container>
  );
};

export default About;
