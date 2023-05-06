<script setup lang="ts">
definePageMeta({
  layout: 'tickets',
  middleware: ['auth'],
  documentDriven: false
})
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="text-gray-400">
        TODO:
        <ul>
          <li>Reservatie formulier: Voornaam, Naam, email, whatsapp/gsm nummer, aantal tickets</li>
          <li>Reservatie opslaan in database, met status new, failed, success</li>
          <li>Mollie payment triggeren, order id meegeven -> werkt al</li>
          <li>Callback met order id: "Bedankt voornaam..." of "er liep iets mis, contacteer Wouter"</li>
          <li>Opvangen als betaling niet kon verwerkt worden en andere error handling</li>
          <li>Pagina met overzicht gemaakte reservaties/bestelde tickets</li>
          <li>Te bekijken: moet er een downloadbaar ticket zijn om af te printen? -> liefst niet</li>
        </ul>
      </div>
    </NuxtLayout>
  </div>
</template>
