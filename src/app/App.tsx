import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { SplashScreen } from "@/shared/ui/templates";

import { AppRoutes } from "./AppRoutes";

export function App() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Suspense>
  );
}
