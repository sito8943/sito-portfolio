import type { StageFact } from "../StageIntro";

export type ProductMedia = "bleed" | "frame";

export type ProductPanelProps = {
  /** "01" */
  index: string;
  /** Small line over the title: stage and kind of product. */
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  /** `bleed`: the screenshot fills the panel; `frame`: shown in a browser frame (light sites). */
  media: ProductMedia;
  link: string;
  visitLabel: string;
  facts: StageFact[];
};
