<script setup>
  import NavbarComponent from "./components/Navbar.vue"
  import FooterComponent from "./components/Footer.vue"
</script>

<template>
  <div>
    <navbar-component></navbar-component>
    <main>
      <div class="mt-20">
        <router-view />
      </div>
    </main>
    <footer-component></footer-component>
  </div>
</template>
