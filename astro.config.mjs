// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Replace with the real domain once JR owns one.
  site: 'https://jr-camper-conversions.netlify.app',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
