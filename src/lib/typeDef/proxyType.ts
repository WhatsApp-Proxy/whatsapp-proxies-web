export interface ProxyType {
	name: string;
	ip: string;
	port: number;
	country: string;
	uptime: string | undefined;
	responseTime: number;
	lastChecked: string | undefined;
}
