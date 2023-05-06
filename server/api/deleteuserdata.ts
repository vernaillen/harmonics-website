export default defineEventHandler((_event) => {
  return JSON.stringify({
    url: 'https://harmonics.be/api/deletion/abc123',
    confirmation_code: 'abc123'
  })
})
