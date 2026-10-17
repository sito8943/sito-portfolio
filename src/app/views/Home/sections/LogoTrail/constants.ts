export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/** Leg progress (0 → 1) where the logo starts dissolving; it is gone on landing. */
export const DISSOLVE_START = 0.7;
/** Leg progress window where the logo reassembles after leaving a stop (all legs but the first). */
export const ASSEMBLE_START = 0.1;
export const ASSEMBLE_END = 0.35;
/** Leg progress past which the next stop counts as landed on. */
export const LANDED_AT = 0.85;
