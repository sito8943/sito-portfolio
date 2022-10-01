// @mui/icons-material
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddReactionIcon from "@mui/icons-material/AddReaction";

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
        className={`scale-animation ${css({ left: "10%", bottom: "10%" })}`}
      >
        <CheckCircleIcon
          className="float-y"
          sx={{ fontSize: "3rem", color: "#0fd908", opacity: 0.5 }}
        />
      </motion.div>
      <motion.div
        variants={item}
        className={`scale-animation ${css({ left: "15%", bottom: "15%" })}`}
      >
        <Link>
          <AddReactionIcon
            className="float-y"
            sx={{ fontSize: "4rem", color: "#0fd908", opacity: 0.5 }}
          />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default FloatingIcons;
