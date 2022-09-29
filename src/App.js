/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// next-themes
import { useTheme as useNextTheme } from "next-themes";

// views
import Home from "./views/Home";
import NotFound from "./views/NotFound";

const App = () => {
  const { setTheme } = useNextTheme();

  useEffect(() => {
    setTheme("dark");
  }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
