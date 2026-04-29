import { defineCollection, z } from 'astro:content';

const laboratuvar = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum([
      'beden_sinir_sistemi',
      'sinirlar_iletisim',
      'baglanma_laboratuvari',
      'kokler_golgeler',
      'edebiyat_felsefe'
    ]),
    description: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    book_candidate: z.boolean().default(false),
    status: z.enum(['essay', 'note', 'fragment', 'chapter_draft']).default('essay')
  })
});

const ruyalar = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    symbols: z.array(z.string()),
    themes: z.array(z.string()),
    featured: z.boolean().default(false),
    book_candidate: z.boolean().default(false)
  })
});

export const collections = { laboratuvar, ruyalar };
