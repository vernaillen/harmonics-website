<script setup>
  import NavbarComponent from "./components/Navbar.vue"
  import FooterComponent from "./components/Footer.vue"
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
