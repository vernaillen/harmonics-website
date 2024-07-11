<template>
  <div>
    <div class="relative z-0 h-full">
      <div class="grid grid-cols-3  h-full">
        <div class="bg-gradient-to-r from-ecstatic to-music h-full" />
        <div class="bg-gradient-to-r from-music to-sound overflow-visible relative h-full" />
        <div class="bg-gradient-to-r from-sound to-trance h-full" />
      </div>
      <div class="absolute top-0 w-full">
        <slot />
      </div>
    </div>
  </div>
</template>
