/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
    colors: {
      white: "#f0f0f0",
      "white-hover": "#c2c7cc",
      "placeholder-dark": "#636362",
      "dark-background2": "#1b1b1b",
      "dark-background": "#222333",
      "light-background2": "#f0f0f0",
      "light-background": "#e3e3e3",
      primary: "#004493",
      plight: "#3369a8",
      pdark: "#002f66",
      secondary: "#610726",
      slight: "#803851",
      sdark: "#43041a",
      "pdark-hover": "#00acd639",
      "p2dark-hover": "#00acd670",
      "dark-drawer-background": "#222222ce",
      "light-drawer-background": "#e3e3e3ce",
      error: "#ff3b3b",
      warning: "#FF8800",
      success: "#007733",
      info: "#0099CC",
    },
  },
  plugins: [],
};
