// Add a new top-level section here — that's it, no template edits needed.
export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Music', href: '/music' },
  { label: 'Writing', href: '/writing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  // Tools and Store are scaffolded but hidden from nav until enabled.
  // Uncomment when ready — see src/pages/tools.astro and src/pages/store.astro.
  // { label: 'Tools', href: '/tools' },
  // { label: 'Store', href: '/store' },
  // Kept last and separate on purpose — the tax/1099 material isn't part of
  // the music/writing identity, it's a distinct small utility off to the side.
  { label: 'Tax Guide', href: '/writing/keep-what-you-earn' },
];
