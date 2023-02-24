export default defineEventHandler(async (event) => {
  console.log('deleting data')
  console.log(event)
  return JSON.stringify({
    url: 'https://harmonics.be/api/deletion/abc123',
    confirmation_code: 'abc123',
  })
})
