import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.sathhat-jeddah.com",
  integrations: [
    sitemap({
      customPages: [
        {
          url: "https://www.sathhat-jeddah.com/",
          priority: 1.0,
        },
        {
          url: "https://www.sathhat-jeddah.com/contact",
          priority: 0.8,
        }
      ]
    })],
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