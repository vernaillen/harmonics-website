import type { H3Event } from 'h3'

// If the user does not exist on the request, throw a 401 error
export default (event: H3Event) => {
  const { user } = event.context

  if (!user) {
    console.warn(`Unauthorized access of ${event.path}`)
    throw createError({
      statusCode: 401,
      message: 'Unauthorized',
    })
  }
}
