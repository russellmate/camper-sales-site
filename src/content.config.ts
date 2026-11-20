import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * A Build is the documented record of one Conversion (see CONTEXT.md).
 * Each Build lives in its own folder under src/content/builds/<slug>/,
 * with an index.md and the photos it uses alongside it.
 */
const builds = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/builds' }),
  schema: ({ image }) => {
    const photo = z.object({
      src: image(),
      alt: z.string().min(1, 'Every photo needs alt text describing what it shows.'),
      caption: z.string().optional(),
    });

    return z.object({
      title: z.string(),
      summary: z.string(),
      van: z.string(),
      draft: z.boolean().default(false),
      /** Landscape photo used wherever the Build is listed. */
      cover: photo,
      /** Before/after pair at the top of the Build page. */
      before: photo,
      after: photo,
      stages: z
        .array(
          z.object({
            title: z.string(),
            description: z.string(),
            photos: z.array(photo).min(1),
          }),
        )
        .min(1),
    });
  },
});

export const collections = { builds };
