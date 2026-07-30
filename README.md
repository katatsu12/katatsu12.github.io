# Den Zubrytskyi — Portfolio

Personal portfolio landing page. Built with SvelteKit (Svelte 5) and fully prerendered to static HTML via `@sveltejs/adapter-static`.

## Development

```sh
npm install
npm run dev
```

## Build & preview

```sh
npm run build
npm run preview
```

## Deployment

Deployed with Github pages available on https://katatsu12.github.io/

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. For a project-page repo the workflow sets `BASE_PATH` to `/<repo-name>` automatically; a user-page repo (`<user>.github.io`) is served from the root and needs no base path.

In the repo settings, set **Pages → Source** to **GitHub Actions** before the first deploy.

## Structure

- `src/routes/+page.svelte` — page assembly and meta tags
- `src/lib/components/` — Hero, Flagship, SelectedWork, Services, Stack, Contact sections
- `src/lib/data.js` — all page content (projects, services, stack, links)
- `src/lib/actions/reveal.js` — staggered scroll-reveal action
- `src/app.css` — theme tokens (accent color, palette) and global styles
