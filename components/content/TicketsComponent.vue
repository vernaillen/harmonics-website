<script setup lang="ts">
const emailResponse = ref()

const triggerPayment = async () => {
  // call to the Netlify Function you created
  try {
    const { data: resp } = await useFetch('/.netlify/functions/triggerPaymentReceivedEmail', {
      method: 'POST',
      body: JSON.stringify({
        subscriberName: 'WouterSubscriber',
        subscriberEmail: 'wouter@vernaillen.com',
      }),
    })
    console.log(resp)
    emailResponse.value = resp
  }
  catch (error) {
    console.error(error)
  }
  /* const { data: payment } = await useFetch<Payment>('/api/mollie', {
    body: { amount: 2 },
    method: 'post',
  })

  if (payment && payment.value) {
    const paymentData: Pick<Payment, any> = payment.value
    if (paymentData._links.checkout && paymentData._links.checkout?.href)
      document.location.href = paymentData._links.checkout?.href
  } */
}
</script>

<template>
  TODO:
  <ul>
    <li>Reservatie formulier: Voornaam, Naam, email, whatsapp/gsm nummer, aantal tickets, lid van Dwarsligger of niet</li>
    <li>Reservatie opslaan in Supabase, met status new, failed, success</li>
    <li>Mollie payment triggeren, order id meegeven</li>
    <li>Callback met order id: "Bedankt voornaam..." of "er liep iets mis, contacteer Wouter"</li>
  </ul>
  <br>
  <button
    class="text-base font-medium text-white bg-primary py-1 px-3 m-2 hover:bg-opacity-80 hover:shadow-signUp rounded-md"
    @click="triggerPayment"
  >
    Bestel nu
  </button> {{ emailResponse.value }}
</template>
