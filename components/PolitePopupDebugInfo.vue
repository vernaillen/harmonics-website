<script setup lang="ts">
const { debugInfo } = usePolitePopup()
</script>

<template>
  <div
    class="
      fixed
      z-50
      left-0
      bottom-0
      p-4
      rounded-md
      shadow-lg
      bg-white
      bg-slate-400
    "
  >
    <div class="flex gap-4">
      <div>
        <input v-model="debugInfo.readTimeElapsed" type="checkbox" disabled name="readTimeElapsed">
        <label for="readTimeElapsed">Read time elapsed</label>
      </div>
      <div>
        <input v-model="debugInfo.scrolledContent" type="checkbox" disabled name="scrolledContent">
        <label for="scrolledContent">Content scrolled</label>
      </div>
      <span>{{ debugInfo.amountScrolledInPercentage }}% scrolled</span>
      {{ debugInfo.storedData }}
    </div>
  </div>
</template>
