import { createMollieClient } from '@mollie/api-client'
const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  if (config.mollieApiKey) {
    const body = await readBody(event)

    const unitPrice = 45
    const totalPrice: number = unitPrice * body.amount

    const mollieClient = createMollieClient({ apiKey: config.mollieApiKey })

    try {
      const paymentResponse = await mollieClient.payments.create({
        amount: {
          value: `${totalPrice}.00`,
          currency: 'EUR',
        },
        description: 'Tickets Trancedans 20 februari 2023',
        redirectUrl: `${config.mollieRedirectBase}/tickets/123456`,
        webhookUrl: `${config.mollieRedirectBase}/api/mollieWebhook`,
        metadata: {
          order_id: '123456',
        },
      })
      return paymentResponse
    }
    catch (error) {
      console.error(error)
    }
  }
  else {
    return 'MollieApiKeyMissing'
  }
})
