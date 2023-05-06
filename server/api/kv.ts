export default defineEventHandler(async (event) => {
    const storage = useStorage('data');
    let count = (await storage.getItem('count')) as number
    await storage.setItem('count', count++);

    return {
        id: await storage.getItem('count'),
    };
});