// Central place for site-wide facts. Update these, not the templates.

export const SITE = {
  name: 'Layor76',
  title: 'Layor76 — Songs and the numbers behind them',
  description:
    'Layor76 — musician on Royal Legacy Records, and a 1099 gig driver writing the tax playbook drivers actually need.',
  url: 'https://layor76.com',
};

// TODO: replace with real contact email
export const CONTACT_EMAIL = 'TODO@layor76.com';

// TODO: paste real links, or leave as null to hide the item from the UI.
export const LINKS = {
  spotify: null as string | null,
  appleMusic: null as string | null,
  youtubeMusic: null as string | null,
  soundcloud: null as string | null,
  bandcamp: null as string | null,
  instagram: null as string | null,
  tiktok: null as string | null,
  youtube: null as string | null,
  x: null as string | null,
};

// One-line change when the book goes on sale: paste the Gumroad/Lemon Squeezy
// checkout URL into books/keep-what-you-earn.md's `checkoutUrl` frontmatter field.
// This constant is a fallback only, used if that frontmatter field is empty.
export const DEFAULT_CHECKOUT_URL: string | null = null;
