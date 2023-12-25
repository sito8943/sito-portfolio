/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";

// @sito/ui
import { SplashScreen } from "@sito/ui";

// views
const Home = loadable(() => import("./views/Home"));
const NotFound = loadable(() => import("./views/NotFound"));

const App = () => {
  return (
    <Suspense
      fallback={
        <SplashScreen
          visible
          logo={
            <div>
              <h1 className="font-bold text-4xl text-plight logo">
                {"<Sito />"}
              </h1>
            </div>
          }
        />
      }
    >
      <BrowserRouter basename="sito-portfolio">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
