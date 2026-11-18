import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shreyashavaldar7.github.io',
  trailingSlash: 'ignore',
  // Compression strips the space before links that start a new source line.
  compressHTML: false,
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  // Keep links from the old Jekyll site working.
  redirects: {
    '/pubs': '/publications',
    '/books': '/reading',
    '/blog': '/writing',
    '/2020-07-23-read': '/writing/getting-back-to-reading',
    '/2020-08-05-random': '/writing/random-thoughts',
  },
});
