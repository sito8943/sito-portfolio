import React from "react";
import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

// styles
import "./style.css";

const Loading = (props) => {
  const { type, className } = props;

  return (
    <div
      className={`${css({
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      })} type-${type}} ${className}`}
    >
      <div className="loader-container">
        <div className="loader">
          <svg className="circular" viewBox="25 25 50 50">
            <circle
              className={`path ${css({ stroke: "#222222" })}`}
              cx="50"
              cy="50"
              r="20"
              fill="none"
              strokeWidth="4"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

Loading.propTypes = {
  type: PropTypes.string,
};

export default Loading;
