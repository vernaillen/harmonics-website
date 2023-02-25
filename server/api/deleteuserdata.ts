export default defineEventHandler(async (event) => {
  console.log('deleting data, req:')
  console.log(event.node.req)
  return JSON.stringify({
    url: 'https://harmonics.be/api/deletion/abc123',
    confirmation_code: 'abc123',
  })
})
