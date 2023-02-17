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
  layout: 'tickets',
  middleware: ['auth'],
  documentDriven: false,
})
</script>

<template>
  <div>
    {{ text }}
    <br><br>
    Er is ook een e-mail bevestiging naar je gestuurd
  </div>
</template>
