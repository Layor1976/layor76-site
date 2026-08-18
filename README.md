# layor76.com

Personal hub site for Layor76 — musician on Royal Legacy Records, and a 1099 gig driver writing
*Keep What You Earn: The Gig Driver's Tax Playbook*.

Astro + Tailwind, static output. No CMS, no database, no server runtime. Content lives in
Markdown files with typed frontmatter — adding a release or article means dropping in one file,
not editing a template.

## Run it locally

```
npm install
npm run dev
```

Opens at `http://localhost:4321`. One command, per the brief.

```
npm run build      # static output to dist/
npm run preview    # serve the production build locally
```

## Design plan

The palette/type/layout pitch this site was built from is a separate artifact (not part of this
repo) — ask whoever ran the original build session for the link if you need to revisit it. The
short version: Night Route (dark blue-charcoal ground), Sodium Amber + Rust Belt accents, Big
Shoulders Display for headlines, Literata for body copy, JetBrains Mono for every number on the
site. Tokens live in `src/styles/global.css` under `@theme`.

## How to add a release (album or single)

1. Add the cover image to `src/assets/images/` (any format Astro's image pipeline handles — png,
   jpg, webp).
2. Create a new Markdown file in `src/content/releases/`, filename becomes the URL slug, e.g.
   `src/content/releases/new-single.md` → `/music/new-single`.
3. Fill in frontmatter. Minimum for a single:

   ```yaml
   ---
   title: "Track Name"
   type: single
   releaseDate: 2026-09-01
   cover: "../../assets/images/cover-track-name.png"
   coverAlt: "Describe what's actually in the image"
   note: "One or two sentences about this release."
   streamingLinks:
     spotify: "https://..."
     appleMusic: "https://..."
   ---
   ```

   For an album, also add a `tracklist:` array (see
   `src/content/releases/the-life-i-fought-for.md` for the shape) and set `featured: true` if
   this should be the one shown on the homepage / "Now playing" rail.
4. That's it — it shows up on `/music` and gets its own page automatically. No template edits.

## How to add a post (article)

Create a Markdown file in `src/content/posts/`, e.g. `src/content/posts/my-article.md`:

```yaml
---
title: "Article Title"
description: "One sentence for search results and social previews."
pubDate: 2026-09-01
tags: ["taxes", "driving"]
---

Article body in Markdown goes here.
```

Articles are listed on `/writing` automatically. There's no dedicated `/writing/articles/[slug]`
page built yet in this repo — add one at `src/pages/writing/articles/[slug].astro` (copy the
pattern from `src/pages/music/[slug].astro`) the first time you actually have an article to
publish, so it's driven by real content instead of a guess.

## How to publish the book page

`/writing/keep-what-you-earn` is a hand-built sales page (`src/pages/writing/keep-what-you-earn.astro`),
not a generic content-collection render — per the brief, it's the highest-value page on the site
and deserves real copy, not a template loop. To update it:

- Content collection entry at `src/content/books/keep-what-you-earn.md` holds the
  title/tagline/cover/status/checkoutUrl/sampleChapterUrl frontmatter.
- The actual page copy (who it's for, what it saves you, what's covered) lives directly in the
  `.astro` file. Edit it there.
- The chapter list in that file is a placeholder (`covers` array near the top of the file) —
  replace with real chapter titles when you have them.

## How to swap in the checkout URL

One line. In `src/content/books/keep-what-you-earn.md`, add:

```yaml
checkoutUrl: "https://your-gumroad-or-lemonsqueezy-link"
```

The page automatically switches from "Not for sale yet — join the list" to a working "Get the
book" button pointing at that URL. No code changes.

## Email capture setup (Buttondown)

The signup form (`src/components/EmailSignup.astro`) posts directly to Buttondown's public embed
endpoint — a plain HTML form, works with JavaScript fully disabled.

1. Create a free account at [buttondown.com](https://buttondown.com).
2. Set the `BUTTONDOWN_USERNAME` environment variable to your Buttondown username (not a secret —
   it's the public subscribe endpoint, no API key needed for this).
3. Locally: copy `.env.example` to `.env` and fill it in.
4. In production: set it in Cloudflare Pages → your project → Settings → Environment variables.

If the variable is unset, the form doesn't render broken — it shows a `mailto:` fallback instead.
Update the fallback address in `src/lib/site.ts` (`CONTACT_EMAIL`).

## Contact form setup (Formspree)

Same pattern, for `/contact`. Create a free form at [formspree.io](https://formspree.io), set
`FORMSPREE_ID` to the ID from the endpoint they give you. Unset → mailto fallback, same as above.

## Enabling /tools and /store

Both are scaffolded but disabled — see `src/pages/_disabled/tools.astro` and
`src/pages/_disabled/store.astro` for the exact steps (move the file out of `_disabled/`,
uncomment the nav entry in `src/lib/nav.ts`).

## Deploy to Cloudflare Pages

1. Push this repo to GitHub (or GitLab).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, pick this
   repo.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Add environment variables (`BUTTONDOWN_USERNAME`, `FORMSPREE_ID`) under **Settings →
   Environment variables** for both Production and Preview.
5. Deploy. Cloudflare gives you a `*.pages.dev` URL immediately.
6. Add the custom domain: **Custom domains → Set up a custom domain**, enter `layor76.com`.
   Cloudflare will tell you the DNS records to add — see `DNS.md` for the exact Porkbun setup
   (apex + www, plus the `.life`/`.org` redirects).

Free tier covers this comfortably — static site, no Workers usage beyond the free Pages build
minutes.
