import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

import { LANGS } from "@/lang";
import { ROUTES, langHome } from "@/shared/config";

// views: Home ships in the entry chunk, since it is almost every visit's first paint and
// lazy-loading it added a round trip before anything showed. The rest load on demand.
import Home from "./views/Home";

const NotFound = loadable(() => import("./views/NotFound"));

/** Every route, without a router: the browser wraps it in BrowserRouter, the build in StaticRouter. */
export function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
      {LANGS.map((lang) => (
        <Route key={lang} path={langHome(lang)} element={<Home />} />
      ))}
      <Route path={ROUTES.notFound} element={<NotFound />} />
    </Routes>
  );
}
