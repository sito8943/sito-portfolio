import {
  faCode,
  faCodeBranch,
  faMobileScreen,
  faPenNib,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

import { LINKS } from "@/shared/config";

import type { Stack } from "./types";

/** Year of the first professional job (Inmersoft, June 2021). */
export const CAREER_START_YEAR = 2021;

export const TABS_ID = "skills-stacks";

/**
 * Brand logos (simple-icons 13.21.0, single-colour SVGs) hosted on ImageKit; painted through a
 * CSS mask, so the host must send CORS headers.
 */
export const STACK_ICONS = {
  react: "https://ik.imagekit.io/lgqp0wffgtp/portfolio/react_Ykdi4sT8rH.svg",
  typescript:
    "https://ik.imagekit.io/lgqp0wffgtp/portfolio/typescript__Ec0SoSNxj.svg",
  vite: "https://ik.imagekit.io/lgqp0wffgtp/portfolio/vite_wiv6q4eSeD.svg",
  tailwindcss:
    "https://ik.imagekit.io/lgqp0wffgtp/portfolio/tailwindcss_Q8QNl5Ppxm.svg",
  mui: "https://ik.imagekit.io/lgqp0wffgtp/portfolio/mui_XnSlvo3aWT.svg",
  nodedotjs:
    "https://ik.imagekit.io/lgqp0wffgtp/portfolio/nodedotjs_lYtuZ2kze.svg",
  express: "https://ik.imagekit.io/lgqp0wffgtp/portfolio/express_xDqioeOE-.svg",
  laravel:
    "https://ik.imagekit.io/lgqp0wffgtp/portfolio/laravel_VXQcSE6Uuj.svg",
  springboot:
    "https://ik.imagekit.io/lgqp0wffgtp/portfolio/springboot_o7Blg1OO0a.svg",
  mysql: "https://ik.imagekit.io/lgqp0wffgtp/portfolio/mysql_dCESWdj_h.svg",
  postgresql:
    "https://ik.imagekit.io/lgqp0wffgtp/portfolio/postgresql_TiiFw_J00z.svg",
  mongodb:
    "https://ik.imagekit.io/lgqp0wffgtp/portfolio/mongodb_gn1FtOURvA.svg",
  firebase:
    "https://ik.imagekit.io/lgqp0wffgtp/portfolio/firebase_vNGMHsYiOc.svg",
  docker: "https://ik.imagekit.io/lgqp0wffgtp/portfolio/docker_RSDHvHpxt.svg",
  git: "https://ik.imagekit.io/lgqp0wffgtp/portfolio/git_yypxWsN2go.svg",
  githubactions:
    "https://ik.imagekit.io/lgqp0wffgtp/portfolio/githubactions_pGJdDnCLGP.svg",
  expo: "https://ik.imagekit.io/lgqp0wffgtp/portfolio/expo_u5e6kyVGC.svg",
  kotlin: "https://ik.imagekit.io/lgqp0wffgtp/portfolio/kotlin_KcPON_0UK.svg",
  figma: "https://ik.imagekit.io/lgqp0wffgtp/portfolio/figma_6ZeCqaiTN.svg",
} as const;

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
    icon: faCodeBranch,
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
