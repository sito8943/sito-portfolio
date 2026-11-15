import { useRef } from "react";

import { useGlobe } from "./useGlobe";
import { useOnScreen } from "@/shared/hooks";

/**
 * The Presentation Deck's Creative Layer globe piece: a dotted world that spins with glowing
 * routes between cities. It only animates while on screen. Decorative.
 */
export function DeckGlobe() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const playing = useOnScreen(canvas);
  useGlobe(canvas, playing);

  return <canvas ref={canvas} className="deck-globe" aria-hidden="true" />;
}
