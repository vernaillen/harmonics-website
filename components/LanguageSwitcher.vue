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
  <div class="languageSwitcher min-w-[60px]">
    <NuxtLink :to="switchLocalePath('nl')" :class="locale === 'nl' ? 'opacity-100' : 'opacity-40'" class="px-1">
      <Icon name="flagpack:nl" size="1.2em" />
    </NuxtLink>
    <NuxtLink :to="switchLocalePath('en')" :class="locale === 'en' ? 'opacity-100' : 'opacity-40'" class="px-1">
      <Icon name="flagpack:gb-ukm" size="1.2em" />
    </NuxtLink>
  </div>
</template>
