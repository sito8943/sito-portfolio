import React, { useEffect, useState } from "react";

function CookieBox(props) {
  const [accept, setAccept] = useState(false);

  useEffect(() => {
    if (accept) {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        // eslint-disable-next-line no-undef
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-D9HLQQ818J");
    }
  }, [accept]);

  return <div></div>;
}

export default CookieBox;
