<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()
</script>

<template>
  <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mt-24 md:mt-32 mb-16 md:mb-20 place-items-center text-center">
    <div class="hidden xl:block" />
    <UButton
      color="ecstatic"
      variant="solid"
      class="w-full h-full justify-center text-lg !text-white dark:!text-white dark:!bg-ecstatic dark:hover:!bg-ecstatic-400"
      :label="t('category.ecstatic')"
      :to="localePath('/ecstaticdance')"
    />
    <UButton
      color="trance"
      variant="solid"
      class="w-full h-full justify-center text-lg !text-white dark:!text-white hover:!bg-trance-400 dark:!bg-trance-500 dark:hover:!bg-trance-400"
      :label="t('category.trance')"
      :to="localePath('/trancedance')"
    />
    <div class="hidden xl:block" />
  </div>
</template>
