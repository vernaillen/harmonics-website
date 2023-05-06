export default defineEventHandler(async (event) => {
    const storage = useStorage('data');
    let count = (await storage.getItem('count')) as number
    const newCount = count + 1
    await storage.setItem('count', newCount);

    return {
        count: newCount,
    };
});