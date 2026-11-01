# Pianotopia

Website for [pianotopia.se](https://pianotopia.se), a private piano school in Kalmar.

Built with [Next.js](https://nextjs.org) as a fully static export and hosted on Cloudflare (static assets).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Outputs the static site to `out/`. Note that `next start` does not work with static export; preview the build with any static file server, or with `npx wrangler dev`.

## Deployment

Cloudflare builds and deploys automatically on every push to `main` (build command `npm run build`, configuration in `wrangler.jsonc`).

## Notes

- Images go through a custom loader (`src/app/lib/image-loader.ts`) because there is no image optimization server. Unsplash images are resized by Unsplash; local images are served as-is.
- The contact form sends email client-side via [EmailJS](https://www.emailjs.com).
