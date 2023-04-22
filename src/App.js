/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { getUserLanguage } from "some-javascript-utils/browser";
import loadable from "@loadable/component";

// next-themes
import { useTheme as useNextTheme } from "next-themes";

// framer-motion
import { LazyMotion, domAnimation } from "framer-motion";

// contexts
import { useLanguage } from "./contexts/LanguageProvider";

// components
import Loading from "./components/Loading/Loading";
import CookieBox from "./components/CookieBox/CookieBox";

// views
const Home = loadable(() => import("./views/Home"));
const NotFound = loadable(() => import("./views/NotFound"));

const App = () => {
  const { setTheme } = useNextTheme();
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

  useEffect(() => {
    setTheme("dark");
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <Suspense fallback={<Loading />}>
        <CookieBox />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </LazyMotion>
  );
};

export default App;
