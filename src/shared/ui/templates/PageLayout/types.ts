import type { ReactNode } from "react";

export type PageLayoutProps = {
  header?: ReactNode;
  footer?: ReactNode;
  /** Floating extras (e.g. ToTop). */
  overlay?: ReactNode;
  children?: ReactNode;
};
