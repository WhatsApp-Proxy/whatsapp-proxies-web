import type { AllServersAPIReponse } from '$lib/typeDef/proxyApiReponse';

export async function proxyListFromApi(): Promise<AllServersAPIReponse> {
	const response = await fetch('https://backend.whatsapp-proxy.com/server');
	const data = await response.json();
	return data;
}
