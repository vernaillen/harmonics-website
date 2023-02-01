<template>
  <navbar-component />
  <div :class="isHydrated ? '' : 'opacity-30 blur-md'" class="flex flex-col min-h-screen">
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
    transition: all 0.05s;
}

.page-enter-from,
.page-leave-to {
    opacity: 80%;
    filter: blur(0.05rem);
}
</style>
