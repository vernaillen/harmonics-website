<script setup lang="ts">
export interface Props {
  to: string
  label: string
}
defineProps<Props>()
</script>

<template>
  <UButton :to="to" :label="label" />
</template>
