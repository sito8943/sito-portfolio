import { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";

// components
import SplashScreen from "./components/SplashScreen/SplashScreen";

// views
const Home = loadable(() => import("./views/Home"));
const NotFound = loadable(() => import("./views/NotFound"));

const App = () => {
  return (
    <Suspense fallback={<SplashScreen />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
