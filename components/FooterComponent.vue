<script setup lang="ts">
const localePath = useLocalePath()
const { locale, t } = useI18n()
const currentYear: number = new Date().getFullYear()
</script>
<template>
  <footer class="w-full text-center pt-14 pb-3">
    <div class="w-full container mx-auto">
      <HorizontalRule class="-mb-3 opacity-60" />
      <div class="text-sm text-primary-500 dark:text-primary-200 pb-1">
        <LanguageSwitcher class="" />
        <ColorModeSwitcher class="mr-8" />
        <SocialIcons class="px-3" />
      </div>
      <div class="prose mx-auto text-sm text-primary-500 dark:text-primary-200 py-1">
        <div class="w-full">
          {{ t( 'footer.copyright' ) }} {{ currentYear }} Harmonics BV - BE0503971022
        </div>
        <div class="w-full mt-2">
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
      </div>
      <div class="prose dark:prose-invert mx-auto text-[11px] py-1">
        <GitHub :locale="locale" />
      </div>
    </div>
  </footer>
</template>
