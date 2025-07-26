import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://portfolio-david-uribe.netlify.app/',
  output: 'server',
  adapter: netlify(),
  experimental: {
    session: true,  // Habilita la configuración experimental de sesiones
  },
});
