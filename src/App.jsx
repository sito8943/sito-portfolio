/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// views
import Home from "./views/Home";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <BrowserRouter basename="sito-portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
