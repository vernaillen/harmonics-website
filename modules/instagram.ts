import { addComponent, addServerHandler, createResolver, defineNuxtModule, extendPages } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  instagram: {
    enabled?: boolean
    wpUrl?: string
    wpPageId?: number
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-vernaillen-module',
    configKey: 'vernaillenModule',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    instagram: {
      enabled: false,
    },
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    if (options.instagram.enabled) {
      // addPlugin(resolver.resolve('instagramruntime/plugin'))

      nuxt.hook('nitro:config', async (nitroConfig) => {
        nitroConfig.publicAssets ||= []
        nitroConfig.publicAssets.push({
          dir: resolver.resolve('instagramruntime/public'),
          maxAge: 60 * 60 * 24 * 365, // 1 year
        })
      })

      // Add supabase session endpoint to store the session on server-side
      addServerHandler({
        route: '/api/instagram',
        handler: resolver.resolve('instagramruntime/server/api/instagram'),
      })

      extendPages((pages) => {
        pages.push({
          name: 'Instagram',
          path: '/instagram',
          file: resolver.resolve('instagramruntime/pages/instagram.vue'),
        })
      })

      addComponent({
        name: 'InstagramIframe',
        filePath: resolver.resolve('instagramruntime/components/InstagramIframe.vue'),
      })
    }
  },
})
