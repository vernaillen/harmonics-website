export default defineEventHandler(async (_event) => {
  return JSON.stringify({
    url: 'https://harmonics.be/api/deletion/abc123',
    confirmation_code: 'abc123',
  })
})
