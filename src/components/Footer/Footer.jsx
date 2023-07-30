/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { forwardRef, Suspense } from "react";
import loadable from "@loadable/component";

import { scrollTo } from "some-javascript-utils/browser";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faFacebook,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

// @emotion/css
import { css } from "@emotion/css";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// @nextui-org
const Text = loadable(() => import("../../components/NextUI/Text"));
const MUILink = loadable(() => import("../../components/NextUI/Link"));

const Footer = forwardRef((props, ref) => {
  const { languageState } = useLanguage();

  const icons = [faGithub, faInstagram, faTwitter, faFacebook, faLinkedin];

  return (
    <Suspense>
      <div
        id="footer"
        className={css({
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 24px",
          height: "50px",
          background: "#222333",
          flexWrap: "wrap",
          display: "flex",
        })}
      >
        <div className={css({ display: "flex" })}>
          <Text b css={{ margin: 0 }}>
            <MUILink
              onClick={() => scrollTo(0)}
              color="inherit"
              href="#"
              className={css({ display: "flex", alignItems: "center" })}
            >
              {`<Sito /> © ${new Date().getFullYear()}`}
            </MUILink>
          </Text>
        </div>
        <div className={css({ gap: "20px", display: "flex" })}>
          {languageState.texts.Hero.Social.map((item, i) => (
            <MUILink
              key={item.Link}
              href={item.Link}
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                className={css({ fontSize: "25px" })}
                icon={icons[i]}
              />
            </MUILink>
          ))}
        </div>
      </div>
    </Suspense>
  );
});

export default Footer;
