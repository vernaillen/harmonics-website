<script setup lang="ts">
import { useLocale } from '@/stores/lang'
const setLanguage = (event: Event) => {
  const target = event.target as HTMLSelectElement
  useLocale().setLanguage(target.value)
}
</script>

<template>
  <form>
    <select @change="setLanguage">
      <option value="nl">
        NL
      </option>
      <option value="en">
        EN
      </option>
    </select>
  </form>
</template>
