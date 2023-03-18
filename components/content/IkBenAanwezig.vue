<script setup lang="ts">
const { locale } = useI18n()
const ticketsLink = computed(() => {
  const language = locale.value === 'en' ? 'english' : 'dutch'
  return `https://shop.ikbenaanwezig.nl/language/language_redirect/${language}?current_url=https%3A%2F%2Fshop.ikbenaanwezig.nl%2Ftickets%2Fevent%2Fharmonics-trancedans-20maart2023`
})
</script>

<template>
  <a :href="ticketsLink" target="_blank" class="menu-scroll text-base text-primary dark:text-white group-hover:opacity-70 active:text-primary ">
    <Icon
      name="ph:ticket-duotone" size="24" class="mx-2"
    />Tickets
  </a>
</template>
