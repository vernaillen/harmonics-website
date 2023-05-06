export default defineEventHandler(async () => {
  const storage = useStorage('data')
  const count = (await storage.getItem('count')) as number
  const newCount = count + 1
  await storage.setItem('count', newCount)

  return {
    count: newCount
  }
})
