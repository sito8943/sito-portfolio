export type RevealTextProps = {
  text: string;
  as?: "h2" | "p";
  className?: string;
  /** Delay before the first word lights up, in ms. */
  startMs?: number;
};
