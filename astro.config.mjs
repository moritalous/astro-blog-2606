// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://moritalous.github.io',
  base: '/astro-blog-2606',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});