<script setup lang="ts">
import type { Payment } from '@mollie/api-client'
import { useCart } from '~/stores/cart'
import type { EventTicket } from '~~/types/tickets'
const { t } = useI18n()
const user = useSupabaseUser()
const { order, addTicketOrder } = useCart()

async function triggerPayment() {
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
function addTicket(ticket: EventTicket) {
  if (user.value && user.value.email) {
    const ticketOrder = {
      ticket,
      fullname: user.value.user_metadata.fullname,
      email: user.value.email,
    }
    addTicketOrder(ticketOrder)
  }
  else {
    console.error('user not correctly authenticated')
    navigateTo('/login?redirectTo=/tickets')
  }
}
</script>

<template>
  Mollie test modus (dus betaling kan je uitvoeren, gebeurt niet echt):<br><br>

  <div v-for="ticket, index in useTickets()" :key="index">
    {{ t(ticket.titleKey) }} - €{{ ticket.unitPrice }}
    <button class="bg-primary text-white px-2 py-1 rounded-md" @click="addTicket(ticket)">
      <Icon name="mdi:plus" />
    </button>
  </div>
  <br>
  Shopping cart created for:<br>
  {{ order.user.user_metadata.email }}<br><br>
  tickets added:<br>
  <ul>
    <li v-for="ticketOrder in order.ticketOrder" :key="ticketOrder.ticket.id">
      {{ t(ticketOrder.ticket.titleKey) }} - €{{ ticketOrder.ticket.unitPrice }}
    </li>
  </ul>

  <br><br>
  <button
    class="text-base font-medium text-white bg-primary py-1 px-3 m-2 hover:bg-opacity-80 hover:shadow-signUp rounded-md"
    @click="triggerPayment"
  >
    {{ t('tickets.orderbutton') }}
  </button>
</template>
