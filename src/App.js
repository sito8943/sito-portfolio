/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { getUserLanguage } from "some-javascript-utils/browser";

// next-themes
import { useTheme as useNextTheme } from "next-themes";

// framer-motion
import { LazyMotion, domAnimation } from "framer-motion";

// contexts
import { useLanguage } from "./contexts/LanguageProvider";

// views
import Home from "./views/Home";
import SitoDocs from "./views/SitoDocs";
import NotFound from "./views/NotFound";

const App = () => {
  const { setTheme } = useNextTheme();
  const { setLanguageState } = useLanguage();

  useEffect(() => {
    try {
      setLanguageState({ type: "set", lang: getUserLanguage() });
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    setTheme("dark");
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sito-lib" element={<SitoDocs />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LazyMotion>
  );
};

export default App;
