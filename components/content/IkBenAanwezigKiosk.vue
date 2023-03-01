<script setup lang="ts">
const { locale } = useI18n()
const ticketsLink = computed(() => {
  if (locale.value === 'en')
    return 'https://shop.ikbenaanwezig.nl/language/language_redirect/english?current_url=https%3A%2F%2Fshop.ikbenaanwezig.nl%2Fkiosk%2Fharmonics-trancedans'
  else
    return 'https://shop.ikbenaanwezig.nl/language/language_redirect/dutch?current_url=https%3A%2F%2Fshop.ikbenaanwezig.nl%2Fkiosk%2Fharmonics-trancedans'
})
</script>

<template>
  <a :href="ticketsLink" target="_blank" class="menu-scroll text-base text-primary dark:text-white group-hover:opacity-70 active:text-primary ">
    <Icon
      name="ph:ticket-duotone" size="24" class="mr-2"
    />Tickets
  </a>
</template>
