/** Account rows on the phone: width of the name (%) and whether money came in. */
export const ACCOUNTS = [
  { width: 48, income: true },
  { width: 36, income: false },
  { width: 52, income: true },
  { width: 40, income: false },
] as const;

/** Monthly bars on the side chart: money in and out, as a share of the card height (%). */
export const MONTHS = [
  { in: 62, out: 40 },
  { in: 48, out: 52 },
  { in: 74, out: 36 },
  { in: 56, out: 44 },
  { in: 82, out: 30 },
  { in: 68, out: 46 },
] as const;

/** Bottom navigation: tabs on each side of the add button; the first one is active. */
export const NAV_TABS = [0, 1, 2, 3] as const;
export const NAV_ACTIVE = 0;
