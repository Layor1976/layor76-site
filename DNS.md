# DNS setup — Porkbun

Domain registrar and DNS host: **Porkbun**. This assumes Porkbun stays the DNS provider (not
switching nameservers to Cloudflare) — the records below use Porkbun's `ALIAS` record type, which
gives CNAME-like behavior at the root domain (a plain `CNAME` isn't valid at an apex per the DNS
spec, which is why `ALIAS` exists).

First, deploy the site to Cloudflare Pages (see `README.md`) and note the `*.pages.dev` URL
Cloudflare assigns your project — you'll need it below. It'll look like
`layor76-site.pages.dev` (or whatever you name the Pages project).

## layor76.com — apex + www

In Porkbun → your domain → **DNS Records**:

| Type    | Host  | Answer                     | TTL   |
|---------|-------|----------------------------|-------|
| `ALIAS` | `@`   | `layor76-site.pages.dev`   | 600   |
| `CNAME` | `www` | `layor76-site.pages.dev`   | 600   |

Replace `layor76-site.pages.dev` with your actual Pages project domain in both rows.

Then in Cloudflare Pages: **your project → Custom domains → Set up a custom domain**, add both
`layor76.com` and `www.layor76.com`. Cloudflare issues SSL certificates automatically once the
records above resolve (usually within a few minutes, can take up to 24h for DNS propagation).

Delete any pre-existing `A` or `CNAME` records on `@` or `www` first — Porkbun's default parking
page records will conflict otherwise.

## layor76.life and layor76.org — redirect to .com for now

Don't point these at Cloudflare Pages. Use Porkbun's built-in **URL Forwarding** instead — it's a
plain 301 redirect at the registrar level, no DNS records or hosting needed, and it's what "for
now, with the option to split off later" actually calls for: reversible in one settings screen,
no infrastructure to unwind later.

For **both** `layor76.life` and `layor76.org`, in Porkbun → domain → **URL Forwarding**:

- **Forward to:** `https://layor76.com`
- **Type:** Permanent (301)
- **Include path in redirect:** Yes — so `layor76.life/music` forwards to `layor76.com/music`,
  not just the homepage
- **Forward www too:** Yes — set the same forward for `www.layor76.life` /
  `www.layor76.org` if Porkbun asks separately

## Splitting a domain off later

When `.life` or `.org` is ready to be its own thing: remove the Porkbun URL Forwarding entry, add
`ALIAS`/`CNAME` records the same way as `.com` above (pointing at whatever hosts that project),
and add it as a custom domain on whichever Cloudflare Pages project should serve it. Nothing about
today's `.com` setup needs to change.

## Verification checklist

- [ ] `layor76.com` and `www.layor76.com` both load the site over HTTPS
- [ ] `layor76.life` redirects (301) to `layor76.com`, including subpaths
- [ ] `layor76.org` redirects (301) to `layor76.com`, including subpaths
- [ ] No mixed-content warnings (Cloudflare Pages serves HTTPS by default)
