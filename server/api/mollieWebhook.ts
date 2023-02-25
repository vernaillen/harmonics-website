export default defineEventHandler(async (event) => {
  console.log('mollieWebhook was called')
  console.log(event.node.req)
  return 'OK'
})
