<script setup lang="ts">
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()
const router = useRouter()

const setLanguage = (lang: string) => {
  router.push(switchLocalePath(lang))
}
</script>

<template>
  <div class="languageSwitcher min-w-[50px]">
    <NuxtLink :to="switchLocalePath('nl')" :class="locale === 'nl' ? 'opacity-100' : 'opacity-30'" class="pr-1 text-sm">
      NL
    </NuxtLink>
    <NuxtLink :to="switchLocalePath('en')" :class="locale === 'en' ? 'opacity-100' : 'opacity-30'" class="text-sm">
      EN
    </NuxtLink>
  </div>
</template>
