/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useCallback } from "react";

// next-themes
import { useTheme as useNextTheme } from "next-themes";

// views
import Home from "./views/Home";

const App = () => {
  const { setTheme } = useNextTheme();

  const onScroll = useCallback(() => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    const home = document.getElementById("home");
    const about = document.getElementById("about");
    if (home.offsetTop <= top) {
      console.log("home");
      setTheme("dark");
    }
    if (about.offsetTop - 400 <= top) {
      console.log("about");
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return <Home />;
};

export default App;
