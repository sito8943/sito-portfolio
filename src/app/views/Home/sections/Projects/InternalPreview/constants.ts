/** Skeleton rows of the admin table: width of the title cell (%) and its status. */
export const ADMIN_ROWS = [
  { width: 62, status: "live" },
  { width: 48, status: "draft" },
  { width: 70, status: "live" },
  { width: 40, status: "live" },
  { width: 56, status: "draft" },
  { width: 66, status: "live" },
  { width: 44, status: "live" },
] as const;

/** Side navigation items of the admin; the second one is active. */
export const ADMIN_NAV = [0, 1, 2, 3, 4] as const;
export const ADMIN_NAV_ACTIVE = 1;

/** Course tiles in the portal, with how far each one is done (%). */
export const PORTAL_TILES = [72, 38, 90] as const;
