export type ToTopProps = {
  /** Accessible name, already translated. */
  label: string;
  /** Short text shown on hover. */
  tooltip: string;
  /**
   * Id of an element to line up with: once it scrolls up past the button's resting spot, the
   * button rises with it, centred on it (e.g. the footer's copyright row at the page bottom).
   */
  dockTo?: string;
};
