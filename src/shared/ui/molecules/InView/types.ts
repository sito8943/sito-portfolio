import type { ReactNode } from "react";

export type InViewProps = {
  children?: ReactNode;
  /** CSS time, e.g. "200ms". */
  delay?: string;
  className?: string;
  /** Optional CSS animation class applied once in view (instead of the default rise). */
  animation?: string;
};
