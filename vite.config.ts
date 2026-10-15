import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import { langPages } from "./plugins/langPages";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
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
