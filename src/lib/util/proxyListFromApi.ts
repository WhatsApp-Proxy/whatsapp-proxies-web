import { MirrorSiteList, defaultDomain } from '$lib/const/mirrorList';
import type { AllServersAPIReponse } from '$lib/typeDef/proxyApiReponse';

export async function proxyListFromApi(currentDomain: string = "whatsapp-proxy.com"): Promise<AllServersAPIReponse> {
	const response = await fetch(`${getBackendUrlFromDomain(currentDomain)}/server`);
	const data = await response.json();
	return data;
}

function getBackendUrlFromDomain(domain: string): string {
	domain = domain.replace(/^www\./, '');
	const usableDomain = MirrorSiteList.find((element) => { if(element == domain) return element; }) || defaultDomain;
	return `https://backend.${usableDomain}`;
}
