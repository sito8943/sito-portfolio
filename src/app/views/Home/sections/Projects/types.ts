import type { Resources } from "@/lang";

export type Project = {
  /** Key under `_pages:home.projects.projects`. */
  id: keyof Resources["_pages"]["home"]["projects"]["projects"];
  image: string;
  link: string;
};
