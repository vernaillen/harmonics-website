<script setup lang="ts">
import type { Payment } from '@mollie/api-client'

const triggerPayment = async () => {
  notifyAdminAboutMollie(useAppConfig().sendGridEmailFrom)
  const { data: payment } = await useFetch<Payment>('/api/mollie', {
    body: {
      amount: 1,
      unitPrice: 25,
      ticketTitle: 'Ticket Trancedans 20 maart 2023',
      host: window.location.origin,
    },
    method: 'post',
  })

  if (payment && payment.value) {
    const paymentData: Pick<Payment, any> = payment.value
    if (paymentData._links.checkout && paymentData._links.checkout?.href)
      document.location.href = paymentData._links.checkout?.href
  }
}
</script>

<template>
  Mollie test modus (dus betaling kan je uitvoeren, gebeurt niet echt):<br><br>
  <button
    class="text-base font-medium text-white bg-primary py-1 px-3 m-2 hover:bg-opacity-80 hover:shadow-signUp rounded-md"
    @click="triggerPayment"
  >
    Reserveer je ticket
  </button>
  <br>
  <br>
  TODO:
  <ul>
    <li>Reservatie formulier: Voornaam, Naam, email, whatsapp/gsm nummer, aantal tickets</li>
    <li>Reservatie opslaan in database, met status new, failed, success</li>
    <li>Mollie payment triggeren, order id meegeven</li>
    <li>Callback met order id: "Bedankt voornaam..." of "er liep iets mis, contacteer Wouter"</li>
  </ul>
</template>
