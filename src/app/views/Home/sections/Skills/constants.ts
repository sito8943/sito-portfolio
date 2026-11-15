import {
  faCode,
  faInfinity,
  faMobileScreen,
  faPenNib,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

import { LINKS } from "@/shared/config";

import type { Stack } from "./types";

/** Year of the first professional frontend work. */
export const CAREER_START_YEAR = 2020;

export const TABS_ID = "skills-stacks";

export const SIMPLE_ICONS_CDN =
  "https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons";

export const STACKS: Stack[] = [
  {
    id: "frontend",
    icon: faCode,
    tools: [
      { id: "React", slug: "react", brand: "#61DAFB", link: LINKS.REACT },
      {
        id: "TypeScript",
        slug: "typescript",
        brand: "#3178C6",
        link: LINKS.TYPESCRIPT,
      },
      { id: "Vite", slug: "vite", brand: "#646CFF", link: LINKS.VITE },
      {
        id: "Tailwind",
        slug: "tailwindcss",
        brand: "#06B6D4",
        link: LINKS.TAILWINDCSS,
      },
      { id: "MUI", slug: "mui", brand: "#007FFF", link: LINKS.MUI },
    ],
  },
  {
    id: "backend",
    icon: faServer,
    tools: [
      { id: "Node.js", slug: "nodedotjs", brand: "#5FA04E", link: LINKS.NODE },
      { id: "Express", slug: "express", brand: "#FFFFFF", link: LINKS.EXPRESS },
      {
        id: "Laravel",
        slug: "laravel",
        brand: "#FF2D20",
        link: LINKS.LARAVEL,
      },
      {
        id: "Spring Boot",
        slug: "springboot",
        brand: "#6DB33F",
        link: LINKS.SPRING_BOOT,
      },
      {
        id: "MySQL",
        slug: "mysql",
        brand: "#4479A1",
        link: LINKS.MYSQL,
      },
      {
        id: "PostgreSQL",
        slug: "postgresql",
        brand: "#4169E1",
        link: LINKS.POSTGRESQL,
      },
      { id: "MongoDB", slug: "mongodb", brand: "#47A248", link: LINKS.MONGODB },
      {
        id: "Firebase",
        slug: "firebase",
        brand: "#DD2C00",
        link: LINKS.FIREBASE,
      },
    ],
  },
  {
    id: "devops",
    icon: faInfinity,
    tools: [
      { id: "Docker", slug: "docker", brand: "#2496ED", link: LINKS.DOCKER },
      { id: "Git", slug: "git", brand: "#F05032", link: LINKS.GIT },
      {
        id: "GitHub Actions",
        slug: "githubactions",
        brand: "#2088FF",
        link: LINKS.GITHUB_ACTIONS,
      },
    ],
  },
  {
    id: "mobile",
    icon: faMobileScreen,
    tools: [
      {
        id: "React Native",
        slug: "react",
        brand: "#61DAFB",
        link: LINKS.REACT_NATIVE,
      },
      { id: "Expo", slug: "expo", brand: "#FFFFFF", link: LINKS.EXPO },
      { id: "Kotlin", slug: "kotlin", brand: "#7F52FF", link: LINKS.KOTLIN },
    ],
  },
  {
    id: "design",
    icon: faPenNib,
    tools: [
      { id: "Figma", slug: "figma", brand: "#F24E1E", link: LINKS.FIGMA },
      {
        id: "Photoshop",
        monogram: "Ps",
        brand: "#31A8FF",
        link: LINKS.PHOTOSHOP,
      },
    ],
  },
];
