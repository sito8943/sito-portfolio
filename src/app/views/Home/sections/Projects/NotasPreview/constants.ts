/** Category tabs over the notes: width of each one (cqw); the first one is active. */
export const TABS = [7, 9, 6, 8] as const;
export const TAB_ACTIVE = 0;

/** Notes in the grid, column by column: lines of text (widths, %) and their tag colour. */
export const NOTE_COLUMNS = [
  [
    { lines: [80, 64, 72], tag: "accent" },
    { lines: [70, 52], tag: "green" },
    { lines: [62, 74, 48], tag: "amber" },
  ],
  [
    { lines: [74, 58], tag: "amber" },
    { lines: [66, 78, 50, 60], tag: "accent" },
    { lines: [58, 70], tag: "green" },
  ],
  [
    { lines: [60, 72, 44, 68, 56], tag: "green" },
    { lines: [76], tag: "amber" },
    { lines: [64, 52, 70], tag: "accent" },
  ],
] as const;

/** Index of each column's first note, so every note gets its own turn. */
export const NOTE_OFFSETS = NOTE_COLUMNS.map((_, c) =>
  NOTE_COLUMNS.slice(0, c).reduce((total, column) => total + column.length, 0),
);

/** Editor: its toolbar buttons, the text lines being typed (widths, %), then a checklist. */
export const EDITOR_TOOLS = [0, 1, 2, 3, 4] as const;
export const EDITOR_LINES = [88, 72, 80] as const;
export const EDITOR_CHECKS = [
  { width: 54, done: true },
  { width: 64, done: true },
  { width: 48, done: false },
] as const;
