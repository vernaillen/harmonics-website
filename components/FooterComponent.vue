<script setup lang="ts">
const localePath = useLocalePath()
const config = useRuntimeConfig()
const { locale, t } = useI18n()
const currentYear: number = new Date().getFullYear()
const linksEN = [{
  label: 'Dance concepts',
  children: [
    {
      label: 'Ecstatic Dance',
      to: '/en/ecstaticdance'
    },
    {
      label: 'Trance Dance',
      to: '/en/trancedance'
    }
  ]
},
{
  label: 'Pages',
  children: [
    {
      label: 'News',
      to: '/en/news'
    },
    {
      label: 'About Wouter',
      to: '/en/about'
    },
    {
      label: 'Contact',
      to: '/en/contact'
    }
  ]
}]
const linksNL = [{
  label: 'Dans concepten',
  children: [
    {
      label: 'Ecstatic Dance',
      to: '/ecstaticdance'
    },
    {
      label: 'Trancedans',
      to: '/trancedance'
    }
  ]
},
{
  label: 'Pagina\'s',
  children: [
    {
      label: 'Nieuws',
      to: '/news'
    },
    {
      label: 'Over Wouter',
      to: '/about'
    },
    {
      label: 'Contact',
      to: '/contact'
    }
  ]
}]
</script>
<template>
  <div class="text-center pb-5 ">
    <UFooter :ui="{ wrapper: 'border-t border-primary-500/50 mt-5' }">
      <template #top>
        <UFooterColumns
          :links="locale == 'en' ? linksEN : linksNL"
        >
          <template #right>
            <div class="w-full text-center xl:text-right">
              <LanguageSwitcher class="" />
              <ColorModeSwitcher class="mr-8" />
              <SocialIcons class="px-3" />
            </div>
          </template>
        </UFooterColumns>
      </template>
      <template #left>
        <span class="prose dark:prose-invert text-sm text-primary-500 dark:text-primary-200">
          {{ t( 'footer.copyright' ) }} {{ currentYear }} Harmonics BV - BE0503971022
        </span>
      </template>
      <template #center>
        <div class="prose dark:prose-invert text-sm">
          <NuxtLink :to="localePath('/privacypolicy')" class="text-primary-500 dark:text-primary-200" :aria-label="t('footer.privacypolicy')">
            {{ t('footer.privacypolicy') }}
          </NuxtLink>
          -
          <NuxtLink :to="localePath('/cookiepolicy')" class="text-primary-500 dark:text-primary-200" :aria-label="t('footer.cookiepolicy')">
            {{ t('footer.cookiepolicy') }}
          </NuxtLink>
          <span v-if="false">
            & {{ t('footer.cookiesettings') }}: <MyCookieControl />
          </span>
        </div>
      </template>

      <template #right>
        <p class="w-full text-right prose dark:prose-invert text-sm">
          built with
          <UIcon
            name="i-mdi-heart"
            class="bg-red-500 inline-block align-text-bottom mb-[2px]"
          />
          using
          <UIcon
            class="inline-block align-text-bottom mb-[3px] w-4 h-3"
            name="i-logos-nuxt-icon"
          />
          <NuxtLink
            href="https://nuxt.com"
            target="_blank"
          >
            Nuxt {{ config.public.nuxtVersion }}
          </NuxtLink>
        </p>
      </template>
    </UFooter>
  </div>
</template>
