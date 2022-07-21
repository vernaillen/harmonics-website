<script setup lang="ts">
const { locale } = useI18n()
</script>

<template>
  <form>
    <select v-model="locale">
      <option value="nl">
        NL
      </option>
      <option value="en">
        EN
      </option>
    </select>
  </form>
</template>
