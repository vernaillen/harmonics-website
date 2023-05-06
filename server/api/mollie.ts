import { createMollieClient } from '@mollie/api-client'
import protectRoute from '~/server/utils/protectRoute'

const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  protectRoute(event)

  if (config.mollieApiKey) {
    const body = await readBody(event)
    const totalPrice: number = body.unitPrice * body.amount
    const mollieClient = createMollieClient({ apiKey: config.mollieApiKey })

    try {
      const paymentResponse = await mollieClient.payments.create({
        amount: {
          value: `${totalPrice}.00`,
          currency: 'EUR'
        },
        description: body.ticketTitle,
        redirectUrl: `${body.host}/tickets/order/123456`,
        webhookUrl: 'https://harmonics.be/api/mollieWebhook',
        metadata: {
          order_id: '123456'
        }
      })
      return paymentResponse
    } catch (error) {
      console.error(error)
    }
  } else {
    return 'MollieApiKeyMissing'
  }
})
