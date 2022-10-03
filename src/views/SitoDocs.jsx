// sito components
import SitoContainer from "sito-container";

// @mui/icons-material
import Launch from "@mui/icons-material/Launch";

// @emotion/css
import { css } from "@emotion/css";

// @nextui-org
import { Text, Link } from "@nextui-org/react";

// own components
import InViewComponent from "../components/InViewComponent/InViewComponent";
import DocCard from "../components/DocCard/DocCard";

// contexts
import { useLanguage } from "../contexts/LanguageProvider";

const SitoDocs = () => {
  const { languageState } = useLanguage();

  return (
    <SitoContainer flexDirection="column" sx={{ padding: "24px" }}>
      <Text h1>{languageState.texts.Docs.Title}</Text>
      {languageState.texts.Docs.Components.map((item) => (
        <InViewComponent key={item.id}>
          <DocCard>
            <SitoContainer alignItems="center" sx={{ marginBottom: "10px" }}>
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
            </SitoContainer>
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
                  {jtem.name} v: {jtem.version}
                </Link>
              ))}
            </SitoContainer>
          </DocCard>
        </InViewComponent>
      ))}
    </SitoContainer>
  );
};

export default SitoDocs;
