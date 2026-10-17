export type LogoProps = {
  color?: string;
  className?: string;
};

export type MiniLogoProps = LogoProps & {
  /** Normalizes every stroke to this length, so dash animations share one scale. */
  pathLength?: number;
};
