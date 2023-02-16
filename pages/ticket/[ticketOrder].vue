<script setup lang="ts">
const route = useRoute()
const user = useSupabaseUser()
const appConfig = useAppConfig()
const text = ref('')
const html = ref('')
if (user.value) {
  text.value = `Bedankt voor het bestellen van je ticket, ${user.value.user_metadata.name}.\nJe order nr is ${route.params.ticketOrder}`
  html.value = `Bedankt voor het bestellen van je ticket, ${user.value.user_metadata.name}<br><br>Je order nr is ${route.params.ticketOrder} <br><br>`
  try {
    await useFetch('/api/sendGrid', {
      method: 'POST',
      body: JSON.stringify({
        emailTo: user.value.email,
        emailFrom: appConfig.sendGridEmailFrom,
        subject: `Zo tof dat je komt meedansen, ${user.value.user_metadata.name}`,
        text: text.value,
        html: html.value,
      }),
    })
  }
  catch (error) {
    console.error(error)
  }
}
definePageMeta({
  middleware: ['auth'],
})
</script>

<template>
  <div class="flex-col">
    <div class="container mx-auto px-4 pt-[80px] mt-[30px] sm:mt-[68px]">
      <div v-if="user" class="flex flex-wrap">
        <div class="w-full lg:w-1/2 mb-5 px-4 sm:px-6 lg:px-8 prose">
          {{ text }}
          <br><br>
          Er is ook een e-mail bevestiging naar je gestuurd
        </div><div id="newsletter" class="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 mb-5 prose">
          <UserCard />
        </div>
      </div>
      <div v-else>
        <Spinner />
      </div>
    </div>
  </div>
</template>
