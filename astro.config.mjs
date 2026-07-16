// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://oliveibriel.com",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), sitemap(), react()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
});