import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import { langPages } from "./plugins/langPages";
import { preloads } from "./plugins/preloads";
import {
  AVATAR_SIZES,
  AVATAR_SRC,
  AVATAR_SRCSET,
} from "./src/app/views/Home/sections/Hero/constants";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    preloads({
      // Hero title (Poppins 700), body (Roboto 400) and the hero role line (Poppins 400).
      fonts: [
        /poppins-latin-700-normal-[^.]+\.woff2$/,
        /poppins-latin-400-normal-[^.]+\.woff2$/,
        /roboto-latin-400-normal-[^.]+\.woff2$/,
      ],
      image: { href: AVATAR_SRC, srcset: AVATAR_SRCSET, sizes: AVATAR_SIZES },
    }),
    langPages({ siteUrl: "https://sito8943.com" }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: 3001,
    fs: {
      strict: true,
      deny: [".env", ".env.*", "*.pem", "*.crt", "*.key", ".git/**"],
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (!id.includes("node_modules")) return;
          if (
            id.includes("/react/") ||
            id.includes("/react-dom/") ||
            id.includes("/react-router-dom/")
          ) {
            return "vendor-react";
          }
          if (id.includes("/i18next/") || id.includes("/react-i18next/")) {
            return "vendor-i18n";
          }
          if (id.includes("/@fortawesome/")) return "vendor-icons";
          return;
        },
      },
    },
  },
});
