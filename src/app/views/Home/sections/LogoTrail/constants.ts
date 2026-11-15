export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/** Leg progress (0 → 1) where the logo starts dissolving; it is gone on landing. */
export const DISSOLVE_START = 0.7;
/** Leg progress window where the logo reassembles after leaving a stop (all legs but the first). */
export const ASSEMBLE_START = 0.1;
export const ASSEMBLE_END = 0.35;
/** Leg progress past which the next stop counts as landed on. */
export const LANDED_AT = 0.85;
/** How long the logo glides when the final anchor moves (keep in sync with styles.css). */
export const GLIDE_MS = 600;
/** Viewport fraction where the final anchor's centre sits when the logo docks on it. */
export const FINAL_LAND_VIEWPORT = 0.85;
