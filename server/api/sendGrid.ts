import sgMail from '@sendgrid/mail'

const config = useRuntimeConfig()
sgMail.setApiKey(config.sendGridApiKey)

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const msg = {
    to: body.emailTo,
    from: body.emailFrom,
    subject: body.subject,
    text: body.text,
    html: body.html,
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
