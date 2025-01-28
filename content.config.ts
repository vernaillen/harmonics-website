import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: {
        include: '**/*.md'
      },
      schema: z.object({
        nav: z.string().optional(),
        navIcon: z.string().optional(),
        category: z.string().optional(),
        header: z.object({
          image: z.string().optional(),
          video: z.string().optional(),
          modifiers: z.string().optional(),
          wrapperClass: z.string().optional(),
        }).optional(),
      })
    }),
    newsnl: defineCollection({
      type: 'page',
      source: 'news/**',
      schema: z.object({
        category: z.string().optional(),
        header: z.object({
          image: z.string().optional(),
          video: z.string().optional(),
          modifiers: z.string().optional(),
          wrapperClass: z.string().optional(),
        }).optional(),
      })
    }),
    newsen: defineCollection({
      type: 'page',
      source: 'en/news/**',
      schema: z.object({
        category: z.string().optional(),
        header: z.object({
          image: z.string().optional(),
          video: z.string().optional(),
          modifiers: z.string().optional(),
          wrapperClass: z.string().optional(),
        }).optional(),
      })
    }),
    upcomingsessions_nl: defineCollection({
      source: {
        include: '_upcomingsessions.json',
        exclude: ['en/**']
      },
      type: 'data',
      schema: z.object({
        body: z.array(z.object({
          title: z.string(),
          description: z.string(),
          date: z.string(),
          url: z.string(),
          showTime: z.boolean(),
          category: z.string(),
        })),
      })
    }),
    upcomingsessions_en: defineCollection({
      source: 'en/_upcomingsessions.json',
      type: 'data',
      schema: z.object({
        body: z.array(z.object({
          title: z.string(),
          description: z.string(),
          date: z.string(),
          url: z.string(),
          showTime: z.boolean(),
          category: z.string(),
        })),
      })
    }),
  },
})
