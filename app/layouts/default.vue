<script setup lang="ts">
const { isMobileNavOpen } = useMobileNav()

const contentClass = computed(() => {
  return isMobileNavOpen.value ? 'opacity-0' : 'opacity-1'
})
</script>

<template>
  <div :class="contentClass" class="flex flex-col">
    <slot />
  </div>
</template>
