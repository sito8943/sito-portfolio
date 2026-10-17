export type AboutCardProps = {
  image: string;
  alt: string;
  /** Accessible name: the card's title. */
  label: string;
  active: boolean;
  onActivate: () => void;
};
