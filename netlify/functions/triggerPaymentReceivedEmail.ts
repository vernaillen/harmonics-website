import type { Handler } from '@netlify/functions'
import fetch from 'node-fetch'

const handler: Handler = async function (event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify('Payload required'),
    }
  }
  console.log(event.body)

  const requestBody = JSON.parse(event.body) as {
    subscriberName: string
    subscriberEmail: string
  }

  // automatically generated snippet from the email preview
  // sends a request to an email handler for a subscribed email
  await fetch(`${process.env.URL}/.netlify/functions/emails/paymentReceived`, {
    headers: {
      'netlify-emails-secret': process.env.NETLIFY_EMAILS_SECRET as string,
    },
    method: 'POST',
    body: JSON.stringify({
      from: 'wouter@harmonics.be',
      to: requestBody.subscriberEmail,
      subject: 'Payment received',
      parameters: {
        name: requestBody.subscriberName,
        email: requestBody.subscriberEmail,
      },
    }),
  })

  return {
    statusCode: 200,
    body: JSON.stringify('Email sent!'),
  }
}

export { handler }
