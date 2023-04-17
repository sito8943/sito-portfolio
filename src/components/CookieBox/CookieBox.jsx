/* eslint-disable no-undef */
import React, { useEffect, useState, memo } from "react";

import config from "../../config";

// import ReactGA from "react-ga";

// ReactGA.initialize("UA-204369338-1");

function CookieBox(props) {
  const [accept, setAccept] = useState(false);

  const AddCookieScript = memo(
    () => {
      console.log("hola");
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        console.log(arguments);
        // eslint-disable-next-line no-undef
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", config.ga);
      return <div></div>;
    },
    (oldProps, newProps) => {
      return false;
    }
  );

  useEffect(() => {
    // ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  /* return (
    {/* <div>
      <AddCookieScript />
      <button
        onClick={() => {
          console.log("hola");
          ReactGA.event({
            category: "User",
            action: "Clicked button",
            label: "Sign up",
          });
        }}
      >
        Hola
      </button>
    </div> }
  ); */
  return <div></div>;
}

export default CookieBox;
