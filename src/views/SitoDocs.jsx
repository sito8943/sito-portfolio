import React from "react";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLink,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

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
    <div
      className={css({
        padding: "24px",
        flexDirection: "column",
        display: "flex",
      })}
    >
      <div className={css({ display: "flex", alignItems: "center" })}>
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
            <FontAwesomeIcon
              className={css({ fontSize: "40px" })}
              icon={faArrowCircleLeft}
            />
          </Button>
        </Link>
        <Text h1 css={{ marginBottom: 5 }}>
          {languageState.texts.Docs.Title}
        </Text>
      </div>
      <div className={css({ display: "flex" })}>
        {languageState.texts.Docs.Components.map((item, i) => (
          <InViewComponent key={item.id} delay={`${parseDelay(i, 0.3)}s`}>
            <DocCard>
              <div
                className={css({
                  marginBottom: "10px",
                  alignItems: "center",
                  justifyContent: "space-between",
                })}
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
                  <FontAwesomeIcon
                    icon={faExternalLink}
                    className={css({ marginLeft: "5px", fontSize: "20px" })}
                  />
                </Link>
                <Text span size="$xs">
                  {item.size}
                </Text>
              </div>
              <Text span size="$xs">
                @{item.version}
              </Text>
              <hr className={css({ margin: "10px 0" })} />
              <Text p>{item.description}</Text>
              <hr className={css({ margin: "10px 0" })} />
              <Text h5 css={{ margin: 0 }}>
                {languageState.texts.Docs.Dependencies}
              </Text>
              <div sx={{ flexWrap: "wrap", display: "flex" }}>
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
              </div>
            </DocCard>
          </InViewComponent>
        ))}
      </div>
    </div>
  );
};

export default SitoDocs;
