<template>
  <div class="flex flex-col min-h-screen">
    <LazyHydrate when-idle>
      <navbar-component />
    </LazyHydrate>
    <main class="flex-grow">
      <NuxtPage />
    </main>
    <LazyHydrate when-idle>
      <footer-component />
      <easy-lightbox />
    </LazyHydrate>
  </div>
</template>
