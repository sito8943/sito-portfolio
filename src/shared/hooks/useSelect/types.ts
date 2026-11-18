export type UseSelectOptions = {
  /** Label of each option, in order; drives typeahead. */
  labels: string[];
  selectedIndex: number;
  onSelect: (index: number) => void;
};
