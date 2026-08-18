# Content TODO

Everything left as a placeholder in this build. Organized by what it blocks, not by file.

## Blocks launch — do these first

- **Site facts** (`src/lib/site.ts`)
  - `CONTACT_EMAIL` — real contact address (currently `TODO@layor76.com`, shown on `/contact`
    and in the email-signup fallback)
  - `LINKS` — Spotify / Apple Music / YouTube Music / SoundCloud / Bandcamp / Instagram / TikTok /
    YouTube / X. All `null` right now, so nothing renders for them — paste real URLs as you get
    them, or leave `null` to keep hiding an item.
- **Email capture** — set `BUTTONDOWN_USERNAME` env var (Cloudflare Pages + local `.env`), or the
  signup form stays in its mailto-fallback state forever. See README.
- **Contact form** — set `FORMSPREE_ID` env var, same deal, or `/contact` stays in its
  mailto-fallback state.

## Music

- **`src/content/releases/the-life-i-fought-for.md`** (the album)
  - `coverAlt` / cover image — no cover art found for this one. Add the image to
    `src/assets/images/` and set the `cover:` field.
  - All 13 `tracklist` entries — titles are literally "TODO — Track N title", durations are
    "00:00". None of this was invented; it needs the real tracklist.
  - `note` — placeholder liner-note copy. Replace with the real short story behind the record.
  - `releaseDate` — currently set to 2026-06-01 per the brief's "June 2026," confirm exact day.

- **`src/content/releases/beautiful-hunger.md`** and **`youve-only-met-the-smoke.md`** (singles)
  - `releaseDate` on both is a guess (Jan/Feb 2026) — confirm real dates.
  - `note` on both — placeholder, needs real copy.
  - `streamingLinks` — empty on both, add Spotify/Apple/YouTube URLs when you have them.
  - Cover art **was** pulled in from Google Drive (the DistroKid promo mockups) — these work as
    real images, but you may want cleaner flat cover art (no "Available Now / DistroKid" overlay)
    for the site specifically. Current files:
    `src/assets/images/cover-beautiful-hunger-v2.png` and
    `src/assets/images/cover-youve-only-met-the-smoke.png`.

- **`/music/[slug].astro`** — the page renders "TODO — streaming links not added yet." whenever a
  release has no streaming links. That's not a bug, it's a real content gap showing through — fill
  in `streamingLinks` per release to make it go away.

## Writing

- **`src/content/books/keep-what-you-earn.md`**
  - `coverAlt` / cover image — no book cover exists yet.
  - `checkoutUrl` — unset, so the sales page shows "Not for sale yet — join the list" instead of a
    buy button. One-line add when you have a Gumroad/Lemon Squeezy link (see README).
  - `sampleChapterUrl` — unset, so the "Read a free sample chapter" button doesn't render at all.

- **`src/pages/writing/keep-what-you-earn.astro`** (the sales page copy, hand-written directly in
  this file, not the content collection)
  - "What it saves you" section is explicitly a placeholder — deliberately not shipped with a
    fake "save thousands" claim. Needs a real, specific number once you have one.
  - "What's covered" chapter list (the `covers` array near the top of the file) is a *structural
    placeholder* — five plausible chapter topics, not confirmed real chapters. Replace with the
    actual table of contents.

- **`/writing`** — no articles exist yet (`src/content/posts/` is empty). The page correctly shows
  "no articles published yet" instead of breaking. Drop a Markdown file in when you have one.

## About

- **`src/pages/about.astro`** — has one real sentence (gig driver / musician / Northeast Ohio) and
  one explicit TODO for more. Deliberately short rather than padded with filler, per the brief.

## Scaffolded, not live

- **`src/pages/_disabled/tools.astro`** and **`store.astro`** — placeholder shells, not in the
  nav. Each file has enable instructions in its header comment. Both need real content before
  going live either way.

## Things NOT invented, on purpose

Per the brief's content rules, none of the following were fabricated — every instance above is
marked TODO rather than guessed:

- Song titles, lyrics, or track counts beyond "13" (which the brief itself stated)
- Exact release dates for the two singles
- Chart positions, streaming numbers, or any performance claims
- Quotes attributed to anyone
- The book's chapter count or specific dollar-savings figures
- Any biographical detail beyond "gig driver, songwriter, Northeast Ohio, Royal Legacy Records"
