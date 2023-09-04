export default defineEventHandler((event) => {
  const ipHeader = getHeader(event, 'x-forwarded-for')
  const ip = ipHeader ? ipHeader.split(',')[0] : '-'

  return {
    ip
  }
})
