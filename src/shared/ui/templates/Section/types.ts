import type { ReactNode } from "react";

export type SectionProps = {
  id?: string;
  /** Semantic class(es) for the <section>. */
  className?: string;
  /** Semantic class(es) for the inner content column. */
  containerClassName?: string;
  children?: ReactNode;
};
