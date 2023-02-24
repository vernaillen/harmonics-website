export default defineEventHandler(async (event) => {
  const { confirmationCode } = event.context.params
  return `data deleted for code ${confirmationCode}`
})
