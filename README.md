<<<<<<< HEAD
# tecfaro
website landing page
=======
# Tecfaro Website

Accessible marketing site for Tecfaro, built with React, Vite, and Tailwind CSS.

## Local development

Use:

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```

The static output is generated in `dist`.

## Cloudflare Pages deployment

Use these settings in Cloudflare Pages:

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `20` or newer

The project includes `public/_redirects` so direct navigation to SPA routes resolves to `index.html`.

## Accessibility updates

This version includes:

- semantic landmarks and heading structure
- a skip link for keyboard users
- visible focus states
- improved link/button behavior
- stronger color contrast
- descriptive page metadata
>>>>>>> 347c14c (Initial Tecfaro website update)
