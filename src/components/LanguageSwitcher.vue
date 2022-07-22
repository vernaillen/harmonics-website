<script setup lang="ts">
import { useLocale } from '@/stores/lang'
const setLanguage = (event: Event) => {
  useLocale().setLanguage(event.target.value)
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
