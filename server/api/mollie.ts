import { createMollieClient } from '@mollie/api-client'
const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  if (config.mollieApiKey) {
    const body = await readBody(event)
    const totalPrice: number = body.unitPrice * body.amount
    const mollieClient = createMollieClient({ apiKey: config.mollieApiKey })

    try {
      const paymentResponse = await mollieClient.payments.create({
        amount: {
          value: `${totalPrice}.00`,
          currency: 'EUR',
        },
        description: body.ticketTitle,
        redirectUrl: `${body.host}/ticket/123456`,
        webhookUrl: `${config.host}/api/mollieWebhook`,
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
