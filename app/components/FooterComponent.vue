<script setup lang="ts">
const localePath = useLocalePath()
const config = useRuntimeConfig()
const { locale, t } = useI18n()
const currentYear: number = new Date().getFullYear()
const linksEN = [{
  children: [
    {
      label: 'Trance Movement™',
      to: '/en/trancemovement'
    },
    {
      label: 'Ecstatic Dance',
      to: '/en/ecstaticdance'
    }
  ]
},
{
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
  children: [
    {
      label: 'Trance Movement™',
      to: '/trancemovement'
    },
    {
      label: 'Ecstatic Dance',
      to: '/ecstaticdance'
    }
  ]
},
{
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
              <LanguageSwitcher />
              <ColorModeSwitcher />
              <SocialIcons class="px-3" />
            </div>
          </template>
        </UFooterColumns>
      </template>
      <template #left>
        <span class="prose dark:prose-invert text-sm text-primary-500 dark:text-primary-200">
          {{ t('footer.copyright') }} {{ currentYear }} Harmonics BV - BE0503971022
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
        <p class="w-full text-center xl:text-right prose dark:prose-invert text-sm">
          built with
          <UIcon
            name="i-mdi-heart"
            class="bg-red-500 inline-block align-text-bottom mb-[2px]"
          />
          by <NuxtLink
            href="https://vernaillen.dev"
            target="_blank"
          >
            <UAvatar
              src="https://avatars.githubusercontent.com/u/102268?s=40&v=4"
              alt="Avatar"
              size="3xs"
              class="-mb-[20px] mx-1"
            />
          </NuxtLink>
          using
          <NuxtLink
            href="https://nuxt.com"
            target="_blank"
          >
            <UIcon
              class="inline-block align-text-bottom mb-[3px] w-4 h-3"
              name="i-logos-nuxt-icon"
            />
            Nuxt {{ config.public.nuxtVersion }}
          </NuxtLink>
        </p>
      </template>
    </UFooter>
  </div>
</template>
