import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
// const allowLocalhost = process.env.RESEND_ALLOW_LOCALHOST === 'true'

export default defineEventHandler(async (event) => {
  const domain = event.req.headers.referer?.split('/')[2].split(':')[0]
  const body = await readBody(event)

  /* let allowed = false
  if (domain === 'localhost' && allowLocalhost) {
    allowed = true
  } else {
    const allowedDomains = await resend.domains.list()
    console.log('allowedDomains', allowedDomains.data)
    allowedDomains?.data?.forEach((allowedDomain) => {
      if (allowedDomain.name === domain) {
        allowed = true
      }
    })
  } */

  // if (allowed) {
  console.log('allowing request to send mail from domain ' + domain + ': ', body)
  try {
    await resend.emails.send({
      from: 'wouter@harmonics.be',
      reply_to: body.email,
      to: 'wouter@harmonics.be',
      subject: body.subjectForWouter + body.name + ' (via Harmonics.be)',
      html: body.message.replace(/\n/g, '<br>')
    })
    const data = await resend.emails.send({
      from: 'wouter@harmonics.be',
      to: body.email,
      subject: body.subjectForSender,
      html: 'Dag ' + body.name + '<br><br>' + body.bodyForSender.replace(/\n/g, '<br>')
    })
    return data
  }
  catch (error) {
    return { error }
  }
  /* } else {
    console.warn(`Unauthorized access of ${event.path}`)
    throw createError({
      statusCode: 401,
      message: 'Unauthorized'
    })
  } */
})
