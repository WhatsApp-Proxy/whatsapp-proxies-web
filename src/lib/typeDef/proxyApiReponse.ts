export interface AllServersAPIReponse {
	data: ProxyServerApi[];
	error: null | object;
}

export interface ProxyServerApi {
	_id: string;
	ipAddress: string;
	proxyPort: number;
	discoveryPort?: number;
	serverName: string;
	country: string;
	pendingDeletion: boolean;
	createdBy: string;
	createdAt: string;
	updatedAt: string;
	responseTime?: number;
}
