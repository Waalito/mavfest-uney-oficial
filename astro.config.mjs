// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    //svg: {
      //mode: 'sprite',
    //}
  },
  site: 'https://mavfest-uney.netlify.app',
  integrations: [sitemap()],
});