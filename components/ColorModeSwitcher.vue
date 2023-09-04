<template>
  <div class="inline-flex w-6 md:w-7">
    <ClientOnly>
      <UButton
        size="xs"
        aria-label="Switch to Dark Color Mode"
        icon="i-heroicons-sun"
        class="!my-0 cursor-pointer inline-flex dark:hidden"
        @click="useColorMode().preference = 'dark'"
      />
      <UButton
        size="xs"
        aria-label="Switch to Light Color Mode"
        icon="i-heroicons-moon"
        class="!my-0 cursor-pointer hidden dark:inline-flex"
        @click="useColorMode().preference = 'light'"
      />
      <template #fallback>
        <UButton
          size="xs"
          aria-label="Loading Color Mode..."
          icon="i-ph-spinner"
          class="!my-0 inline-flex animate-spin rounded-full"
        />
      </template>
    </ClientOnly>
  </div>
</template>
