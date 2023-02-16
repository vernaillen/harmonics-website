export default defineEventHandler(async (event) => {
  console.log('mollieWebhook was called')
  console.log(event)
  return 'OK'
})
