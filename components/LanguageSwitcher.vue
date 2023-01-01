<script setup lang="ts">
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()
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
