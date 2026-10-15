// @sito/ui
import { Spinner } from "@sito/ui";

/** Full-screen loading state shown while the first route loads. */
export function SplashScreen() {
  return (
    <div className="splash">
      <h1 className="splash-title logo">Sito</h1>
      <Spinner className="splash-spinner" />
    </div>
  );
}
