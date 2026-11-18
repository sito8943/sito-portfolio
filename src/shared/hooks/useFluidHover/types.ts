/** Vertical extent of one item, in viewport pixels, in DOM order. */
export type FluidItemBox = {
  top: number;
  bottom: number;
  /** Items in the same run form one list; the highlight never crosses between runs. */
  run: string;
};

export type FluidBox = { x: number; y: number; width: number; height: number };
