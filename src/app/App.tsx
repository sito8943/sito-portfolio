import { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";

import { LANGS } from "@/lang";
import { ROUTES, langHome } from "@/shared/config";
import { SplashScreen } from "@/shared/ui/templates";

// views: Home ships in the entry chunk, since it is almost every visit's first paint and
// lazy-loading it added a round trip before anything showed. The rest load on demand.
import Home from "./views/Home";

const NotFound = loadable(() => import("./views/NotFound"));

export function App() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.home} element={<Home />} />
          {LANGS.map((lang) => (
            <Route key={lang} path={langHome(lang)} element={<Home />} />
          ))}
          <Route path={ROUTES.notFound} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
