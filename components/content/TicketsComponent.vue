<script setup lang="ts">
import type { Payment } from '@mollie/api-client'

const message = ref()

const startPayment = async () => {
  const { data: payment } = await useFetch<Payment>('/api/mollie')
  if (payment && payment.value) {
    if (payment.value === 'MollieApiKeyMissing') {
      message.value = payment.value
    }
    else {
      console.log(payment.value)
      const paymentData: Payment = payment.value
      console.log(paymentData)
      if (paymentData._links.checkout && paymentData._links.checkout?.href)
        document.location.href = paymentData._links.checkout?.href
    }
  }
}
</script>

<template>
  <button
    class="text-base font-medium text-white bg-primary py-1 px-3 m-2 hover:bg-opacity-80 hover:shadow-signUp rounded-md"
    @click="startPayment"
  >
    Bestel nu
  </button> {{ message }}
</template>
