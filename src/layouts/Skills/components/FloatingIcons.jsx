import React, { Fragment } from "react";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";

// @emotion/css
import { css } from "@emotion/css";

// contexts
import { useLanguage } from "../../../contexts/LanguageProvider";

const FloatingIcons = () => {
  const { languageState } = useLanguage();

  return (
    <Fragment>
      <div className={`scale-animation ${css({ left: "5%" })}`}>
        <div sx={{ transform: "rotate(-30deg)", display: "flex" }}>
          <a
            name="javascript"
            aria-label={languageState.texts.Skills.List[2].ariaLabel}
            href="https://developer.mozilla.org/es/docs/Web/JavaScript"
            target="_blank"
            rel="noopener"
          >
            <FontAwesomeIcon
              icon={faJs}
              className={`float-y ${css({
                fontSize: "6rem",
                color: "#F0D81D",
                opacity: 0.5,
              })}`}
            />
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default FloatingIcons;
