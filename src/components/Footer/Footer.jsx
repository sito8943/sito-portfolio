/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @mui/icons-material
import {
  Instagram,
  Facebook,
  Twitter,
  GitHub,
  Launch,
} from "@mui/icons-material/";

// @nextui-org
import { Text, Link as MUILink } from "@nextui-org/react";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

const Footer = forwardRef((props, ref) => {
  const { languageState } = useLanguage();

  const fontSize = { fontSize: "25px" };

  const icons = [
    <GitHub sx={fontSize} />,
    <Instagram sx={fontSize} />,
    <Twitter sx={fontSize} />,
    <Facebook sx={fontSize} />,
  ];

  return (
    <div
      ref={ref}
      className={css({
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 24px",
        height: "50px",
        background: "#222333",
        flexWrap: "wrap",
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
            <Launch sx={{ fontSize: "20px", marginLeft: "5px" }} />
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
            {icons[i]}
          </MUILink>
        ))}
      </div>
    </div>
  );
});

export default Footer;
