/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { getUserLanguage } from "some-javascript-utils/browser";

// contexts
import { useLanguage } from "./contexts/LanguageProvider";

// views
import Home from "./views/Home";
import NotFound from "./views/NotFound";

const App = () => {
  const { setLanguageState } = useLanguage();

  useEffect(() => {
    try {
      setLanguageState({ type: "set", lang: getUserLanguage() });
      if ("serviceWorker" in navigator) {
        window.addEventListener("load", function () {
          navigator.serviceWorker.register("/service-worker.js").then(
            function (registration) {
              console.info(
                "Service worker registered with scope:",
                registration.scope
              );
            },
            function (err) {
              console.error("Service worker registration failed:", err);
            }
          );
        });
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <BrowserRouter /* basename={process.env.PUBLIC_URL} */>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
