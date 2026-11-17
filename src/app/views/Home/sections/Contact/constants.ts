/**
 * Viewport fractions the statement's top moves through while it is "read". It finishes while
 * the statement is still in the lower half, so the whole card is never shown half-read.
 */
export const READ_WINDOW = { start: 0.95, end: 0.6 } as const;

export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
