import PropTypes from "prop-types";

// sito components
import SitoContainer from "sito-container";

// @nextui-org
import { Button, Link, Text } from "@nextui-org/react";

// @mui/icons-material
import ClearIcon from "@mui/icons-material/Clear";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

const OffCanvas = (props) => {
  const { visible, handleClose } = props;

  const { languageState } = useLanguage();

  return (
    <SitoContainer
      sx={{
        top: 0,
        left: 0,
        height: "100vh",
        width: "100%",
        position: "fixed",
        transition: "all 500ms ease",
        zIndex: visible ? 99999 : -1,
        background: "#222222ce",
      }}
    >
      <SitoContainer
        flexDirection="column"
        sx={{
          transition: "all 500ms ease",
          height: "100%",
          width: "300px",
          transform: `translateX(${visible ? 0 : "-300px"})`,
          background: "#333444",
        }}
      >
        <SitoContainer
          sx={{ width: "100%", position: "relative", height: "40px" }}
        >
          <Button
            flat
            rounded
            css={{
              margin: "10px",
              width: "40px",
              minWidth: "0",
              position: "absolute",
              right: "15px",
            }}
            onPress={handleClose}
          >
            <ClearIcon />
          </Button>
        </SitoContainer>
        <SitoContainer flexDirection="column" sx={{ paddingLeft: "20px" }}>
          <Text h3>Sito</Text>
          <ul className={`uk-nav uk-nav-primary uk-nav-left`}>
            {languageState.texts.Navbar.Links.map((item) => (
              <li key={item.label}>
                <Button light rounded flat color="primary">
                  <Link href={item.to}>{item.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </SitoContainer>
      </SitoContainer>
    </SitoContainer>
  );
};

OffCanvas.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default OffCanvas;
