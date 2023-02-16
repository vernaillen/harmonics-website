<script setup lang="ts">
const route = useRoute()
const user = useSupabaseUser()
definePageMeta({
  middleware: ['auth'],
})
</script>

<template>
  <div class="flex-col">
    <div class="container mx-auto px-4 pt-[80px] mt-[30px] sm:mt-[68px]">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/2 mb-5 px-4 sm:px-6 lg:px-8 prose">
          Bedankt voor het bestellen van je ticket, {{ user?.user_metadata.name }}<br><br>
          Je order nr is {{ route.params.ticketOrder }}<br><br>
          Er is ook een e-mail bevestiging naar je gestuurd
        </div><div id="newsletter" class="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 mb-5 prose">
          <UserCard />
        </div>
      </div>
    </div>
  </div>
</template>
