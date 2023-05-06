export default defineEventHandler((event) => {
  const { confirmationCode } = event.context.params
  const msg = `data deleted for code ${confirmationCode}`
  return msg
})
