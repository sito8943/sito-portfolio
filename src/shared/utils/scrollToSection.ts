import { scrollTo } from "some-javascript-utils/browser";

/** Smooth-scrolls to the section with the given id (top of the page if missing). */
export const scrollToSection = (id: string) =>
  scrollTo(document.getElementById(id)?.offsetTop ?? 0);
