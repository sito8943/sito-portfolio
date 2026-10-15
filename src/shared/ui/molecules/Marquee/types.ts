import type { ReactNode } from "react";

export type MarqueeProps<T> = {
  elements: T[];
  renderFunction: (item: T, index: number) => ReactNode;
  getKey?: (item: T, index: number) => string | number;
  reverse?: boolean;
  className?: string;
};
