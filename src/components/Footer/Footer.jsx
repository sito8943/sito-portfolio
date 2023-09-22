import React from "react";

import { scrollTo } from "some-javascript-utils/browser";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

// @emotion/css
import { css } from "@emotion/css";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

const Footer = (props) => {
  const { languageState } = useLanguage();

  const icons = [faGithub, faInstagram, faTwitter, faLinkedin];

  return (
    <footer
      id="footer"
      className="items-center justify-center flex px-3 min-h-[50px] py-2 bg-dark-background flex-wrap"
    >
      <div className="w-[90%] flex items-center justify-between flex-wrap">
        <div className="flex">
          <p className="font-bold">{`<Sito /> © ${new Date().getFullYear()}`}</p>
        </div>
        <div className="flex sm:gap-1 gap-3">
          {languageState.texts.Hero.Social.map((item, i) => (
            <a
              key={item.Link}
              href={item.Link}
              rel="noreferrer"
              target="_blank"
              name={item.name}
              aria-label={item.ariaLabel}
              className="primary icon-button !text-white"
            >
              <FontAwesomeIcon
                className={css({ fontSize: "25px" })}
                icon={icons[i]}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
