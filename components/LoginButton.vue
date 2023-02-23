<script setup lang="ts">
defineProps<{
  text: string
  icon: string
}>()
</script>

<template>
  <button class="w-full flex rounded-lg overflow-hidden mr-2 my-2 hover:bg-opacity-90 hover:shadow-signUp">
    <div class="flex-none items-center h-max py-2 px-3 bg-white/30">
      <Icon :name="icon" size="24" class="text-white" />
    </div>
    <div class="flex-auto text-white p-2">
      {{ text }}
    </div>
  </button>
</template>
