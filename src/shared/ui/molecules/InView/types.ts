import type { ReactNode } from "react";

export type InViewProps = {
  children?: ReactNode;
  /** CSS time, e.g. "200ms". */
  delay?: string;
  className?: string;
};
