export async function calculatePing(ip: string, port: number): Promise<number> {
	try {
		const begin = new Date().getTime();
		await fetch(`http://${ip}:${port}/ping`);
		const end = new Date().getTime();

		return end - begin;
	} catch (e) {
		return -1;
	}
}
