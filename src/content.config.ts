import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const releases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/releases' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      type: z.enum(['album', 'single']),
      releaseDate: z.coerce.date(),
      label: z.string().default('Royal Legacy Records'),
      cover: image().optional(),
      coverAlt: z.string(),
      note: z.string(),
      spotifyId: z.string().optional(), // Spotify album ID (singles are 1-track albums) — powers the embedded player.
      youtubeShortId: z.string().optional(), // YouTube Shorts video ID for this release, if one exists.
      tracklist: z
        .array(
          z.object({
            title: z.string(),
            duration: z.string(), // "MM:SS"
          })
        )
        .optional(),
      streamingLinks: z
        .object({
          spotify: z.string().url().optional(),
          appleMusic: z.string().url().optional(),
          youtubeMusic: z.string().url().optional(),
          soundcloud: z.string().url().optional(),
          bandcamp: z.string().url().optional(),
        })
        .default({}),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      status: z.enum(['in-progress', 'published']),
      tagline: z.string(),
      cover: image().optional(),
      coverAlt: z.string(),
      // One-line swap: set this to the Gumroad/Lemon Squeezy URL when ready to sell.
      checkoutUrl: z.string().url().optional(),
      sampleChapterUrl: z.string().url().optional(),
      description: z.string(),
      draft: z.boolean().default(false),
    }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { releases, books, posts };
