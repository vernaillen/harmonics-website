import path from 'node:path'
import fs from 'node:fs'
import { addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'
import { defu } from 'defu'
import template from 'lodash.template'

// Module options TypeScript interface definition
export interface ModuleOptions {
  config: {
    siteId: number
    cookiePolicyId: number

    lang?: string
    gdprAppliesGlobally?: boolean
    cookiePolicyInOtherWindow?: boolean
    consentOnContinuedBrowsing?: boolean
    perPurposeConsent?: boolean
    whitelabel?: boolean
    cookiePolicyUrl?: string
    banner?: {
      acceptButtonDisplay?: boolean
      customizeButtonDisplay?: boolean
      rejectButtonDisplay?: boolean
      acceptButtonColor?: string
      acceptButtonCaptionColor?: string
      customizeButtonColor?: string
      customizeButtonCaptionColor?: string
      explicitWithdrawal?: boolean
      listPurposes?: boolean
      logo?: string
      linksColor?: string
      rejectButtonColor?: string
      rejectButtonCaptionColor?: string
      closeButtonDisplay?: boolean
      position?: string
      textColor?: string
      backgroundColor?: string
    }
  }
  i18n: {

  }
  head: {
    script: [
      {
        hid?: string
        src?: string
        innerHTML?: string
        async?: boolean
        __dangerouslyDisableSanitizersByTagID?: string
      }?,
    ]
  }
}

const defaultModuleOptions = {
  dev: true, // Activate module in dev environment.
  consentMode: true, // Use Google's consent mode.
  links: {
    enable: true, // Add script to include links to policy pages.
    style: 'nostyle', // Add styling to links. (nostyle, white or black)
    whiteLabel: true, // White label links.
    embed: true // Open links in popup.
  },
  i18n: {}
}

function getScript (options, env) {
  const filePath = path.resolve(__dirname, 'runtime/script.js')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const compiler = template(fileContents, { variable: 'options' })
  const script = compiler({
    ...options,
    config_json: JSON.stringify(options.config),
    env
  })
  return script
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'iubenda-module',
    configKey: 'iubenda'
  },
  // Default configuration options of the Nuxt module
  defaults: {
    config: {
      lang: 'en',
      gdprAppliesGlobally: false,
      cookiePolicyInOtherWindow: false,
      consentOnContinuedBrowsing: false,
      perPurposeConsent: true,
      banner: {
        acceptButtonDisplay: true,
        customizeButtonDisplay: true,
        rejectButtonDisplay: false,
        acceptButtonColor: 'black',
        acceptButtonCaptionColor: 'white',
        customizeButtonColor: '#bbb',
        customizeButtonCaptionColor: 'black',
        rejectButtonColor: 'white',
        rejectButtonCaptionColor: 'black',
        closeButtonDisplay: false,
        position: 'float-bottom-right',
        textColor: '#333',
        backgroundColor: '#ddd'
      }
    },
    head: {
      script: []
    }
  },
  setup (options, nuxt) {
    const moduleOptions = defu(nuxt.options.runtimeConfig.public.iubenda,
      {
        ...defaultModuleOptions,
        ...options
      })
    nuxt.options.runtimeConfig.public.iubenda = moduleOptions
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))

    // Check required options
    if (!moduleOptions.config.siteId || !moduleOptions.config.cookiePolicyId) {
      console.warn(
        '[iubenda-module] siteId and cookiePolicyId are required options.'
      )
      return
    }

    // Skip dev env.
    /* if (moduleOptions.dev === true) {
      return
    } */

    moduleOptions.head.script = moduleOptions.head.script || []

    // Add our setup script.
    moduleOptions.head.script.push({
      hid: 'iubenda-setup',
      innerHTML: getScript(moduleOptions, moduleOptions.dev ? 'dev' : 'prod')
    })

    // Add Iubenda script.
    moduleOptions.head.script.push({
      hid: 'iubenda-cs-script',
      src: '//cdn.iubenda.com/cs/iubenda_cs.js'
    })

    if (moduleOptions.links.enable) {
      moduleOptions.head.script.push({
        hid: 'iubenda-script',
        src: '//cdn.iubenda.com/iubenda.js',
        async: true
      })
    }

    // Disable sanitazions
    /* moduleOptions.head.__dangerouslyDisableSanitizersByTagID =
      moduleOptions.head.__dangerouslyDisableSanitizersByTagID || {}
    moduleOptions.head.__dangerouslyDisableSanitizersByTagID['iubenda-setup'] = [
      'innerHTML'
    ]
    moduleOptions.head.__dangerouslyDisableSanitizersByTagID[
      'iubenda-cs-script'
    ] = ['innerHTML']
    moduleOptions.head.__dangerouslyDisableSanitizersByTagID['iubenda-script'] = [
      'innerHTML'
    ] */
  }
})
