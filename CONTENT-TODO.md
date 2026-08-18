# Content TODO

Everything left as a placeholder in this build. Organized by what it blocks, not by file.

## ⚠️ Read this one first — needs your explicit review

The album's `note` field and the About page now pull from your real backstory (Warren, Ohio,
oldest of five, hardship growing up, paper routes) — sourced from your own Google Drive archive
because you asked me to read it and use it. I wrote it deliberately general and tasteful: no
graphic details, no naming family members, no lyrics reproduced anywhere. But this is genuinely
personal material about real people in your life, and I'm not the one who should have final say
on what's public. **Read `src/content/releases/the-life-i-fought-for.md` (the `note` field) and
the second paragraph of `src/pages/about.astro` before this goes live** — cut anything you're not
comfortable with strangers reading.

Separately: your archive also contains material about your wife (a song and some deeply personal
lyrics about struggles in your marriage). I did not use any of that, and didn't put anything from
it on the site — that's private, about a real person who isn't a public figure, and not something
that belongs on a promotional website regardless of what else gets used. Flagging so you know it
was seen and deliberately left out, not missed.

## Blocks launch — do these first

- **Site facts** (`src/lib/site.ts`)
  - `CONTACT_EMAIL` — real contact address (currently `TODO@layor76.com`)
  - `LINKS` — Spotify / Apple Music / YouTube Music / SoundCloud / Bandcamp / Instagram / TikTok /
    YouTube / X. All `null` right now.
- **Email capture** — set `BUTTONDOWN_USERNAME` env var, or the signup form stays in its
  mailto-fallback state. See README.
- **Contact form** — set `FORMSPREE_ID` env var, same deal.

## Music

- **`the-life-i-fought-for.md`** (the album) — tracklist titles and durations are now **real**,
  pulled directly from your actual audio files (`02 - Layor76 Music, Art & Merch\The Life I Fought
  For - Album`), not invented. Two small spelling fixes applied against the filenames: "More Then
  My Scars" → "More Than My Scars", "My Brothers Smile" → "My Brother's Smile" — confirm those
  were typos and not intentional. `coverAlt`/cover image still needed — no album art found in your
  Drive. `releaseDate` still a guess (June 2026 per the brief) — confirm the exact day.

- **Singles** — now 6 real releases instead of 2, all sourced from your actual "Singles -
  Released" folder:
  - `beautiful-hunger.md`, `youve-only-met-the-smoke.md` — cover art in place, still need real
    release dates and streaming links.
  - `raised-by-smoke-and-empty-bottles.md`, `born-in-the-dark.md`, `ghost-you-made.md`,
    `the-day-the-shortcuts-died.md` — **new**, no cover art yet, `releaseDate` is a placeholder
    guess for all four (confirm real dates), `note` fields are TODO.
  - Not added: the "Singles - Unreleased" tracks in your Drive (Five Lifetimes, Stronger Then She
    Knows, Midnight With Janie, and others) — correctly unreleased, shouldn't be on a live site.
    Add them here when they actually come out.
  - `streamingLinks` — empty on all 6, add Spotify/Apple/YouTube URLs when you have them.

## Writing

- **`src/content/books/keep-what-you-earn.md`**
  - `coverAlt` / cover image — no book cover exists yet.
  - `checkoutUrl` — unset, sales page shows "Not for sale yet — join the list."
  - `sampleChapterUrl` — unset, sample-chapter button doesn't render.

- **`src/pages/writing/keep-what-you-earn.astro`**
  - "What it saves you" now has one real worked example (26,000 mi/year at the actual 2026 IRS
    rate = $18,850), sourced from your own tax research notes. Still has a second TODO paragraph
    asking for a real before/after figure from your actual returns, once you have one.
  - "What's covered" chapter list (6 entries now, including the tip-deduction chapter) is still a
    *structural placeholder* — plausible topics grounded in your real source material, not a
    confirmed table of contents. Replace with the real one.

- **Articles** (`src/content/posts/`) — 4 real ones now, not just a proof-of-concept:
  1. "The deduction most drivers get wrong" — mileage rate vs. actual expenses
  2. "The IRS wants its money four times a year, not once" — quarterly estimated taxes
  3. "What actually counts as a business expense" — the ordinary/necessary test
  4. "The tip deduction most drivers don't know exists" — the 2025 tip-income law

  All four use real figures from your own tax research (the recovered ChatGPT source pack in
  `03A - Book - Keep What You Earn`), not invented numbers. Each still has one small TODO inside
  it (marked clearly in the file) for a follow-up figure or link you'd need to source and confirm
  before it's fully done — I didn't remove those markers, so search each file for "TODO" before
  publishing.

- **RSS feed** — live at `/rss.xml`, auto-discovered via `<link rel="alternate">` in the page
  head. Pulls from the same posts collection, nothing to maintain separately.

## About

- **`src/pages/about.astro`** — now has the Warren, Ohio line (see the review flag at the top of
  this file). One more explicit TODO left for anything else you want said — still short on
  purpose.

## Scaffolded, not live

- **`src/pages/_disabled/tools.astro`** and **`store.astro`** — unchanged, still placeholder
  shells with enable instructions in each file's header comment.

## Things NOT invented, on purpose

- Every track title and duration on `the-life-i-fought-for` and the new singles came from your
  actual filenames and actual audio file metadata — not guessed.
- Every tax figure in the four articles and the book's "what it saves you" section came from your
  own saved research, not invented.
- Chart positions, streaming numbers, quotes, and anything about family members beyond the general
  framing described above — still not invented, still not included.
