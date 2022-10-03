// sito components
import SitoContainer from "sito-container";

// @mui/icons-material
import Launch from "@mui/icons-material/Launch";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

// @emotion/css
import { css } from "@emotion/css";

// @nextui-org
import { Button, Text, Link } from "@nextui-org/react";

// own components
import InViewComponent from "../components/InViewComponent/InViewComponent";
import DocCard from "../components/DocCard/DocCard";

// contexts
import { useLanguage } from "../contexts/LanguageProvider";

// utils
import { parseDelay } from "../utils/functions";

const SitoDocs = () => {
  const { languageState } = useLanguage();

  return (
    <SitoContainer flexDirection="column" sx={{ padding: "24px" }}>
      <SitoContainer alignItems="center">
        <Link href="/">
          <Button
            color="primary"
            light
            css={{
              minWidth: "0px !important",
              width: "40px",
              transition: "all 500ms ease",
              "&:hover": {
                transform: "translateY(-5px)",
              },
              marginRight: "20px",
              marginLeft: "5px",
            }}
          >
            <ArrowCircleLeftIcon sx={{ fontSize: "40px" }} />
          </Button>
        </Link>
        <Text h1 css={{ marginBottom: 5 }}>
          {languageState.texts.Docs.Title}
        </Text>
      </SitoContainer>
      <SitoContainer>
        {languageState.texts.Docs.Components.map((item, i) => (
          <InViewComponent key={item.id} delay={`${parseDelay(i, 0.3)}s`}>
            <DocCard>
              <SitoContainer
                alignItems="center"
                justifyContent="space-between"
                sx={{ marginBottom: "10px" }}
              >
                <Link
                  color="primary"
                  href={item.link}
                  target="_blank"
                  rel="noopener"
                >
                  <Text h4 color="primary" css={{ marginBottom: 3 }}>
                    {item.title}
                  </Text>
                  <Launch sx={{ marginLeft: "5px", fontSize: "20px" }} />
                </Link>
                <Text span size="$xs">
                  {item.size}
                </Text>
              </SitoContainer>
              <Text span size="$xs">
                @{item.version}
              </Text>
              <hr className={css({ margin: "10px 0" })} />
              <Text p>{item.description}</Text>
              <hr className={css({ margin: "10px 0" })} />
              <Text h5 css={{ margin: 0 }}>
                {languageState.texts.Docs.Dependencies}
              </Text>
              <SitoContainer sx={{ flexWrap: "wrap" }}>
                {item.dependencies.map((jtem) => (
                  <Link
                    css={{ marginRight: "10px" }}
                    key={jtem.name}
                    href={jtem.link}
                  >
                    {jtem.name}
                    {jtem.version}
                  </Link>
                ))}
              </SitoContainer>
            </DocCard>
          </InViewComponent>
        ))}
      </SitoContainer>
    </SitoContainer>
  );
};

export default SitoDocs;
