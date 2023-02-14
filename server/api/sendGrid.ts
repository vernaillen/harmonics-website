import sgMail from '@sendgrid/mail'

const config = useRuntimeConfig()
sgMail.setApiKey(config.sendgridApiKey)

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const msg = {
    to: body.subscriberEmail,
    from: 'wouter@harmonics.be', // Use the email address or domain you verified above
    subject: `Zo tof dat je komt mee dansen, ${body.subscriberName}!`,
    text: 'het verzenden van e-mails lukt dus :)',
    html: `het verzenden van e-mails lukt dus :)<br><br>bedankt om te testen ${body.subscriberName}!`,
  }
  sgMail
    .send(msg)
    .then(() => {}, (error) => {
      console.error(error)

      if (error.response)
        console.error(error.response.body)
    })

  return {
    statusCode: 200,
    body: JSON.stringify('Email sent!'),
  }
})
