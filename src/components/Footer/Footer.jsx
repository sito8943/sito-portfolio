/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { forwardRef } from "react";

// @mui/icons-material
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Launch from "@mui/icons-material/Launch";

// @nextui-org
import { Text, Link } from "@nextui-org/react";

// sito components
import SitoContainer from "sito-container";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

const Footer = forwardRef((props, ref) => {
  const { languageState } = useLanguage();

  const fontSize = { fontSize: "25px" };

  const icons = [
    <GitHubIcon sx={fontSize} />,
    <InstagramIcon sx={fontSize} />,
    <TwitterIcon sx={fontSize} />,
    <FacebookIcon sx={fontSize} />,
  ];

  return (
    <SitoContainer
      ref={ref}
      alignItems="center"
      justifyContent="space-between"
      sx={{
        padding: "10px 24px",
        height: "50px",
        background: "#222",
      }}
    >
      <SitoContainer>
        <Text b css={{ margin: 0 }}>
          <Link color="inherit" href="/sito-lib" target="_blank" rel="noopener">
            {languageState.texts.Footer.SitoLib}
            {"<Sito />"}
            <Launch sx={{ fontSize: "20px", marginLeft: "5px" }} />
          </Link>
        </Text>
      </SitoContainer>
      <SitoContainer sx={{ gap: "20px" }}>
        {languageState.texts.Hero.Social.map((item, i) => (
          <Link
            key={item.Link}
            href={item.Link}
            rel="noreferrer"
            target="_blank"
          >
            {icons[i]}
          </Link>
        ))}
      </SitoContainer>
    </SitoContainer>
  );
});

export default Footer;
