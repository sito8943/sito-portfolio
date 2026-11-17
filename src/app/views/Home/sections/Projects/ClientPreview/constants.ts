/** Dashboard: key figures (width of the number bar, %) and whether each one went up. */
export const KPIS = [
  { width: 58, up: true },
  { width: 44, up: true },
  { width: 66, up: false },
] as const;

/** Dashboard chart, in a 100 × 40 box: the series as a line, and as a filled area. */
export const CHART_LINE =
  "M0 30 C8 28 12 22 20 23 S32 30 40 24 S52 12 60 15 S72 22 80 13 S92 6 100 4";
export const CHART_AREA = `${CHART_LINE} V40 H0 Z`;

/** Dashboard list beside the chart: width of each entry (%). */
export const FEED = [70, 52, 64, 46] as const;

/** Board: each column's task cards, as the width of their title (%) and tag colour. */
export const COLUMNS = [
  [
    { width: 72, tag: "accent" },
    { width: 54, tag: "amber" },
    { width: 64, tag: "green" },
  ],
  [
    { width: 60, tag: "green" },
    { width: 76, tag: "accent" },
  ],
  [
    { width: 50, tag: "amber" },
    { width: 68, tag: "green" },
    { width: 58, tag: "accent" },
  ],
] as const;

/** Index of each column's first task, so every card gets its own turn to lift. */
export const TASK_OFFSETS = COLUMNS.map((_, c) =>
  COLUMNS.slice(0, c).reduce((total, column) => total + column.length, 0),
);

/** Board's mini calendar: 4 weeks × 7 days; these days are booked, this one is today. */
export const CALENDAR_DAYS = 28;
export const CALENDAR_BOOKED = [3, 9, 10, 16, 23] as const;
export const CALENDAR_TODAY = 12;
