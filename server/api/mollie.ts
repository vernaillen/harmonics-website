import type { Payment } from '@mollie/api-client'
import { createMollieClient } from '@mollie/api-client'
const config = useRuntimeConfig()

export default defineEventHandler(async () => {
  if (config.mollieApiKey) {
    const mollieClient = createMollieClient({ apiKey: config.mollieApiKey })

    const paymentResponse: Payment = await mollieClient.payments.create({
      amount: {
        value: '10.00',
        currency: 'EUR',
      },
      description: 'My next API payment',
      redirectUrl: 'https://harmonics.be/tickets/123456',
      webhookUrl: 'https://harmonics.be/api/mollieWebhook',
      metadata: {
        order_id: '123456',
      },
    })
    return paymentResponse
  }
  else {
    return 'MollieApiKeyMissing'
  }
})
