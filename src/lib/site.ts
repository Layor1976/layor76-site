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
  spotify: 'https://open.spotify.com/artist/5G43p3f4m3HuiFqtMJySQb' as string | null,
  appleMusic: 'https://music.apple.com/us/artist/layor76/6794717315' as string | null,
  youtubeMusic: 'https://music.youtube.com/channel/UCLw28FhhfY5irBwzkuwXnAA' as string | null,
  amazonMusic: 'https://music.amazon.com/artists/B0H59FXCYK/layor76' as string | null,
  deezer: 'https://www.deezer.com/us/artist/396722661' as string | null,
  iheart: 'https://www.iheart.com/artist/layor76-51059949' as string | null,
  soundcloud: null as string | null,
  // No Bandcamp page yet — you have to create this one yourself (I don't
  // create accounts). Once it exists, paste the URL here.
  bandcamp: null as string | null,
  instagram: null as string | null,
  tiktok: 'https://www.tiktok.com/@layor1976' as string | null,
  youtube: 'https://www.youtube.com/channel/UCLw28FhhfY5irBwzkuwXnAA' as string | null,
  x: 'https://x.com/76Layor' as string | null,
  // TODO — couldn't verify without logging in (Facebook hides profiles from
  // logged-out visitors). Confirm your exact handle/URL and paste it here.
  facebook: null as string | null,
};

// One-line change when the book goes on sale: paste the Gumroad/Lemon Squeezy
// checkout URL into books/keep-what-you-earn.md's `checkoutUrl` frontmatter field.
// This constant is a fallback only, used if that frontmatter field is empty.
export const DEFAULT_CHECKOUT_URL: string | null = null;
