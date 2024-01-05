import React from "react";

// @sito/ui
import { useStyle } from "@sito/ui";

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

const Footer = () => {
  const { colors } = useStyle();

  const socials = [
    {
      text: "github",
      link: "https://github.com/SitoNumbis",
      icon: faGithub,
    },
    {
      text: "instagram",
      link: "https://www.instagram.com/sito.8943/",
      icon: faInstagram,
    },
    {
      text: "twitter",
      link: "https://twitter.com/sito8943",
      icon: faTwitter,
    },
    {
      text: "linkedin",
      link: "https://www.linkedin.com/in/sito8943",
      icon: faLinkedin,
    },
  ];

  return (
    <footer
      id="footer"
      className="items-center justify-center flex px-3 min-h-[50px] py-2 bg-dark-background flex-wrap"
    >
      <div className="w-[90%] flex items-center justify-between flex-wrap gap-y-5 sm:my-5">
        <div className="flex">
          <p className="logo">{`<Sito /> © ${new Date().getFullYear()}`}</p>
        </div>
        <div className="flex items-center sm:gap-3 gap-5">
          {socials.map((item, i) => (
            <a
              key={item.link}
              href={item.link}
              rel="noreferrer"
              target="_blank"
              name={item.text}
              aria-label={item.text}
              className={`transition ${css({
                "&:hover": {
                  color: colors.primary.light,
                },
              })}`}
            >
              <FontAwesomeIcon
                className={css({ fontSize: "25px" })}
                icon={item.icon}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
