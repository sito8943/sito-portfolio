import React from "react";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

// @emotion/css
import { css } from "@emotion/css";

const FloatingIcons = () => {
  return (
    <div className={`scale-animation ${css({ left: "10%", bottom: "10%" })}`}>
      <FontAwesomeIcon
        icon={faLightbulb}
        className={`float-y ${css({
          fontSize: "5rem",
          color: "#F0D81D",
          opacity: 0.5,
        })}`}
      />
    </div>
  );
};

export default FloatingIcons;
