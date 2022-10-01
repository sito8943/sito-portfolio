// @mui/icons-material
import FlightIcon from "@mui/icons-material/Flight";
import LaptopIcon from "@mui/icons-material/Laptop";
import PianoIcon from "@mui/icons-material/Piano";

// @nextui-org
import { Link } from "@nextui-org/react";

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
    hidden: { scale: 0, opacity: 0 },
    visible: {
      y: 0,
      scale: 1,
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
        <div className={css({ transform: "rotate(-30deg)" })}>
          <Link href="#about">
            <FlightIcon
              className="float-y"
              sx={{ fontSize: "6rem", color: "#d908d9", opacity: 0.5 }}
            />
          </Link>
        </div>
      </motion.div>
      <motion.div
        variants={item}
        className={`scale-animation top-20 ${css({
          width: "100px",
          height: "100px",
          right: "5%",
        })}`}
      >
        <div className={css({ transform: "rotate(30deg)" })}>
          <PianoIcon
            className="float-y"
            sx={{ fontSize: "6rem", color: "#9494f5", opacity: 0.5 }}
          />
        </div>
      </motion.div>
      <motion.div
        variants={item}
        className={`scale-animation ${css({
          width: "100px",
          height: "100px",
          bottom: "4%",
          right: "20%",
        })}`}
      >
        <div className={css({ transform: "rotate(10deg)" })}>
          <LaptopIcon
            className="float-y"
            sx={{ fontSize: "6rem", color: "#0fd908", opacity: 0.5 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingIcons;
