export async function notifyAdminAboutSignIn (emailFrom: string, extraBody?: string) {
  try {
    await useFetch('/api/sendgrid', {
      method: 'POST',
      body: JSON.stringify({
        emailTo: 'wouter@vernaillen.com',
        emailFrom,
        subject: 'someone is trying to login to Harmonics.be',
        text: 'someone is trying to login to Harmonics.be',
        html: `someone is trying to login to <strong>Harmonics.be</strong><br><br>${extraBody}`
      })
    })
  } catch (error) {
    console.error(error)
  }
}

export async function notifyAdminAboutMollie (emailFrom: string) {
  try {
    await useFetch('/api/sendgrid', {
      method: 'POST',
      body: JSON.stringify({
        emailTo: 'wouter@vernaillen.com',
        emailFrom,
        subject: 'someone is testing Mollie on Harmonics.be',
        text: 'someone is testing Mollie on Harmonics.be',
        html: 'someone is testing Mollie on Harmonics.be'
      })
    })
  } catch (error) {
    console.error(error)
  }
}
