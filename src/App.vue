<script setup>
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<template>
  <div>
    <navbar-component></navbar-component>
    <main>
      <router-view />
    </main>
    <footer-component></footer-component>
  </div>
</template>
