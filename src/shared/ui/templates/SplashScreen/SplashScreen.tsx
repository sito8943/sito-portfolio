// @sito/ui
import { Spinner } from "@sito/ui";

/** Full-screen loading state shown while the first route loads. */
export function SplashScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-dark-background">
      <h1 className="font-bold text-4xl text-plight logo">Sito</h1>
      <Spinner className="text-secondary" />
    </div>
  );
}
