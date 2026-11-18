# shreyashavaldar7.github.io

Personal website, built with [Astro](https://astro.build) and deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `master`.

## Editing content

| What | Where |
| --- | --- |
| News on the home page | `src/data/news.ts` |
| Publications | `src/data/publications.ts` |
| Name, CV link, social links, tabs | `src/data/site.ts` |
| Books on the Reading tab | `src/data/books.json` |
| Blog posts | `src/content/blog/*.md` (front matter: `title`, `date`, `description`) |
| About page | `src/pages/about.astro` |
| Colours and fonts | `src/styles/global.css` |

## Running locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```
