export type RevealTextProps = {
  text: string;
  /** How much has been read, 0 to 1: that share of the words is lit. */
  progress: number;
  className?: string;
};
