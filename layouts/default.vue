<template>
  <div class="flex flex-col min-h-screen">
    <main class="flex-grow">
      <slot />
    </main>
    <footer-component />
    <easy-lightbox />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
    opacity: 60%;
    filter: blur(0.1rem);
}
</style>
