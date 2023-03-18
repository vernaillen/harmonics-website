export default defineEventHandler(async (event) => {
  const { confirmationCode } = event.context.params
  const msg = `data deleted for code ${confirmationCode}`
  return msg
})
