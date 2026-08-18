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
  - `CONTACT_EMAIL` — still `TODO@layor76.com`, needs a real address.
  - `LINKS` — Spotify, Apple Music, YouTube Music, YouTube, Amazon Music, Deezer, and now
    **iHeartRadio** and **TikTok** (`@layor1976`) are **real, verified links**. SoundCloud,
    Tidal, Pandora, and Audiomack were checked — no presence on any of them yet. Napster's
    consumer app is gone (it's B2B-only now), so skipped. The `@layor76` TikTok handle belongs to
    an unrelated private account — not you — so I didn't use it; your real one is `@layor1976`.
    **Bandcamp still doesn't exist — you'll need to create it yourself**, then paste the URL into
    `LINKS.bandcamp`. Instagram and X still `null`, not checked.
  - **These links are now actually used** — previously `LINKS` was defined but never imported
    anywhere. Added a "Listen on" / "Follow" row to the site footer (`BaseLayout.astro`) so it
    shows on every page.
  - Shortened versions of the 4 main platform links (via TinyURL) were given to you separately in
    chat for anywhere character count matters (social bios, etc.) — the site itself uses the real
    direct URLs, which is the right call for actual hrefs.
- **Email capture** — set `BUTTONDOWN_USERNAME` env var, or the signup form stays in its
  mailto-fallback state. See README.
- **Contact form** — set `FORMSPREE_ID` env var, same deal.

## Music

- **`the-life-i-fought-for.md`** (the album) — tracklist titles and durations are **real**, pulled
  from your actual audio files. Two small spelling fixes against the filenames: "More Then My
  Scars" → "More Than My Scars", "My Brothers Smile" → "My Brother's Smile" — confirm those were
  typos. **Cover art is now the real, official released cover** (found via Amazon Music, same
  image used for the memoir). `releaseDate` is the **real confirmed date: June 28, 2026** (via
  Amazon Music and Deezer, both agree).

- **Singles** — 7 real releases now, all with **real confirmed release dates** cross-checked on
  Deezer:
  - `who-am-i-without-the-fire.md` (new — released 06/14/2026, ahead of the album as a preview)
  - `the-day-the-shortcuts-died.md` (06/28/2026, same day as the album)
  - `born-in-the-dark.md` (07/11/2026)
  - `youve-only-met-the-smoke.md` (07/25/2026)
  - `beautiful-hunger.md` (08/02/2026)
  - `ghost-you-made.md` (08/08/2026)
  - `raised-by-smoke-and-empty-bottles.md` — release date still a guess, wasn't in the Deezer
    results I checked; confirm.
  - **Cover art is now real on all 7** — pulled directly from Spotify's own CDN via their oEmbed
    API (the official released artwork, not a mockup).
  - **Every release now has a working audio player** — an official Spotify embed
    (`AudioPlayer.astro`), driven by a new `spotifyId` field in each release's frontmatter. No
    audio is hosted on the site; it streams straight from Spotify, so this works even with the
    "no server runtime" constraint.
  - **Beautiful Hunger also has its real YouTube Short embedded** (`YouTubeEmbed.astro`, driven by
    a new `youtubeShortId` field) — found on your channel, confirmed by the audio credit
    ("Beautiful Hunger · Layor76") on the Short itself.
  - `streamingLinks` (per-song deep links, the Apple Music/YouTube Music/etc. buttons on each
    release page) — still empty on all 7. Lower priority now that the Spotify player handles
    actual listening; still worth filling in per-track links eventually.
  - **New: `/music/coming-soon` page** — built from your real "Singles - Unreleased" Drive folder.
    Lists 9 unreleased track titles (no audio, no lyrics — titles only, since none of this is out)
    and embeds the real short video you made for "Dig Deeper" (44 sec, `public/videos/`). Linked
    from the main `/music` page. **One track from that folder, "Midnight with Janie," was left off
    this list on purpose** — it puts a real, non-public person's name (your wife's) in a public
    teaser list, which felt like the same category of call I flagged before about not publishing
    private material about her without you explicitly saying so. Add it yourself if you're fine
    with it being public.
  - The "Dig Deeper" video is 44MB for 44 seconds — loads fine (`preload="none"`, only fetches on
    click) but is a heavy file. Worth compressing if you get the chance; no video tooling on this
    machine to do it here.

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

- **Three more book projects added**, all confirmed real from your archive (not guessed), all
  early-stage and correctly marked `in-progress` with no cover art or sales copy yet:
  - `project-smoke.md` — the actual book (not the band pre-production binder, which is a
    different thing living in your Drive under the same working name — I mixed those up at first,
    thanks for the correction). Per your own notes: "a book of human observations... not a memoir,
    not self-help."
  - `project-fire.md` — future book on identity, transformation, purpose, resilience.
  - `echoes.md` — the poetry collection, working subtitle "Poems from the Fire, the Smoke, and the
    Silence." **No actual poems are reproduced anywhere in this repo or on the site** — confirmed
    per your content rules, even though I read some in your archive for context.
  - All three titles are working titles per your own notes ("when the time comes to publish, each
    project can receive its final title") — expect these to change.

- **`src/content/books/the-life-i-fought-for.md`** — the memoir, new. Shares the album's real
  cover art (they're the same release). Has a generic auto-generated page at
  `/writing/the-life-i-fought-for` (built via `src/pages/writing/[slug].astro` — any future book
  gets this same generic page automatically unless you build it a dedicated one like Keep What You
  Earn's). No checkout link or sample chapter yet, so no "Get the book" button shows.

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
