<template>
  <div class="flex flex-col min-h-screen">
    <navbar-component />
    <main class="flex-grow">
      <NuxtPage />
    </main>
    <LazyHydrate when-idle>
      <footer-component />
      <easy-lightbox />
    </LazyHydrate>
  </div>
</template>
