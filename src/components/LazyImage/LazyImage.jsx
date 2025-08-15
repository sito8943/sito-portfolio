import React, { useState, useEffect } from "react";

// images
import crash from "../../assets/images/crash.webp";

import "./styles.css";

function LazyImage(props) {
  const [loaded, setLoaded] = useState(false);

  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [props.src]);

  return (
    <div
      style={props.styles}
      className={`${!loaded ? "box" : null} ${props.className} `}
    >
      <img
        onError={() => {
          setError(true);
        }}
        onLoad={() => setLoaded(true)}
        {...props}
        src={error ? crash : props.src}
        alt={props.alt}
      />
    </div>
  );
}

export default LazyImage;
