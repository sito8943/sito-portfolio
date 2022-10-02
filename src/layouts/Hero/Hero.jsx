// @mui/icons-material
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

// @emotion/css
import { css } from "@emotion/css";

// sito components
import SitoContainer from "sito-container";

// @nextui-org
import { Button, Text, Link } from "@nextui-org/react";

// own components
import InViewComponent from "../../components/InViewComponent/InViewComponent";
import FloatingIcons from "./components/FloatingIcons";
import Section from "../../components/Section/Section";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// utils
import { parseDelay } from "../../utils/functions";

const Hero = () => {
  const { languageState } = useLanguage();

  const fontSize = { fontSize: "30px" };

  const icons = [
    <GitHubIcon sx={fontSize} />,
    <InstagramIcon sx={fontSize} />,
    <TwitterIcon sx={fontSize} />,
    <FacebookIcon sx={fontSize} />,
  ];

  return (
    <Section id="hero">
      <FloatingIcons />
      <SitoContainer
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{
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
        <InViewComponent delay="0.6s">
          <Text
            css={{
              textAlign: "center",
              marginBottom: "10px",
              marginTop: "50px",
            }}
          >
            {languageState.texts.Hero.Meet}
          </Text>
        </InViewComponent>
        <SitoContainer
          justifyContent="center"
          sx={{
            flexDirection: "row !important",
            gap: "15px",
            a: {
              fontSize: "30px",
              marginRight: "10px",
              transition: "all 500ms ease",
              "&:hover": { transform: "translateY(-5px)" },
            },
            div: {
              display: "flex",
              flexDirection: "row",
            },
          }}
          wrap="wrap"
        >
          {languageState.texts.Hero.Social.map((item, i) => (
            <InViewComponent key={item.Text} delay={`${parseDelay(i, 0.6)}s`}>
              <Link href={item.Link} rel="noreferrer" target="_blank">
                {icons[i]}
              </Link>
            </InViewComponent>
          ))}
        </SitoContainer>
      </SitoContainer>
    </Section>
  );
};

export default Hero;
