// @mui/icons-material
import JavascriptIcon from "@mui/icons-material/Javascript";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

// sito components
import SitoContainer from "sito-container";

// framer-motion
import { motion } from "framer-motion";

// @emotion/css
import { css } from "@emotion/css";

const FloatingIcons = () => {
  const containerImage = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={containerImage}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
    >
      <motion.div
        variants={item}
        className={`scale-animation ${css({ left: "5%" })}`}
      >
        <SitoContainer sx={{ transform: "rotate(-30deg)" }}>
          <JavascriptIcon
            className="float-y"
            sx={{ fontSize: "6rem", color: "#F0D81D", opacity: 0.5 }}
          />
        </SitoContainer>
      </motion.div>
      <motion.div
        variants={item}
        className={`scale-animation ${css({
          width: "100px",
          height: "100px",
          right: "5%",
          top: "15%",
        })}`}
      >
        <SitoContainer sx={{ transform: "rotate(30deg)" }}>
          <AddAPhotoIcon
            className="float-y"
            sx={{ fontSize: "6rem", color: "#9494f5", opacity: 0.5 }}
          />
        </SitoContainer>
      </motion.div>
    </motion.div>
  );
};

export default FloatingIcons;
