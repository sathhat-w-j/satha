import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://sathhat-jeddah.com',
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});