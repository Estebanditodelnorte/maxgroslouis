// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://maxgroslouis.com',
  integrations: [
    sitemap({
      filter: (page) => {
        const hiddenRoutes = [
          'https://maxgroslouis.com/education/',
          'https://maxgroslouis.com/fr/education/',
        ];

        return !hiddenRoutes.includes(page);
      },
    }),
  ],
});
