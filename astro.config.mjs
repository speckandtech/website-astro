import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // site: "https://speckand.tech",
  site: 'https://speckandtech.github.io',
  base: '/website-astro',
  integrations: [mdx(), sitemap(), tailwind()],
});