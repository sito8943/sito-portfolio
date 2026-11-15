import type { ReactNode } from "react";

export type StageFact = { label: string; value: string };

export type StageIntroProps = {
  /** Brand the intro dresses in (`data-brand`): its fonts, colours and motifs. */
  brand: string;
  /** "Etapa 01" */
  label: string;
  logo: ReactNode;
  tagline: string;
  about: string;
  facts: StageFact[];
  /** Brand motifs behind the content. */
  decor?: ReactNode;
};
