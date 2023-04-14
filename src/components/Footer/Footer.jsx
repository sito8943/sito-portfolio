/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { forwardRef, Suspense } from "react";
import { Link } from "react-router-dom";
import loadable from "@loadable/component";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faGithub,
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

  const icons = [faGithub, faInstagram, faTwitter, faFacebook];

  return (
    <Suspense>
      <div
        ref={ref}
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
            <Link
              color="inherit"
              to="/sito-lib"
              className={css({ display: "flex", alignItems: "center" })}
            >
              {languageState.texts.Footer.SitoLib}
              {"<Sito />"}
              <FontAwesomeIcon
                icon={faExternalLink}
                className={css({ fontSize: "15px", marginLeft: "5px" })}
              />
            </Link>
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
