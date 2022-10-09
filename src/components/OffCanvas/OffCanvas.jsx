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
        position: "fixed",
        height: "100vh",
        top: 0,
        left: 0,
        opacity: visible ? 1 : 0,
        zIndex: visible ? 99999 : -1,
      }}
    >
      <SitoContainer
        flexDirection="column"
        sx={{
          transition: "all 500ms ease",
          height: "100%",
          width: "300px",
          transform: `translateX(${visible ? 0 : -300})`,
          background: "#333444",
        }}
      >
        <SitoContainer justifyContent="flex-end" sx={{ width: "100%" }}>
          <Button
            flat
            rounded
            css={{ margin: "10px", width: "40px", minWidth: "0" }}
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
                <Button rounded flat color="primary">
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
