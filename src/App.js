/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

// next-themes
import { useTheme as useNextTheme } from "next-themes";

// views
import Home from "./views/Home";

const App = () => {
  const { setTheme } = useNextTheme();

  useEffect(() => {
    setTheme("dark");
  }, []);

  return <Home />;
};

export default App;
