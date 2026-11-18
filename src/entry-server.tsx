import { StrictMode, Suspense } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import { AppRoutes } from "@/app";
import { i18n } from "@/features/i18n";
import { langHome } from "@/shared/config";
import { SplashScreen } from "@/shared/ui/templates";
import type { Lang } from "@/lang";

/**
 * Build only (plugins/langPages.ts): one language's home as HTML, so its first screen paints
 * before any script runs. Same tree as `main.tsx` + `App`, with a StaticRouter; lazy sections
 * render nothing here and load in the browser as before.
 */
export async function render(lang: Lang) {
  await i18n.changeLanguage(lang);
  return renderToString(
    <StrictMode>
      <Suspense fallback={<SplashScreen />}>
        <StaticRouter location={langHome(lang)}>
          <AppRoutes />
        </StaticRouter>
      </Suspense>
    </StrictMode>,
  );
}
