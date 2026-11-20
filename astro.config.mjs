// @ts-check
import { defineConfig } from 'astro/config';

// The live site (Netlify) is served from the root. The GitHub Pages review copy
// sets SITE_URL and BASE_PATH so it can live under /camper-sales-site/.
export default defineConfig({
  // Replace the default with the real domain once JR owns one.
  site: process.env.SITE_URL ?? 'https://jr-camper-conversions.netlify.app',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
