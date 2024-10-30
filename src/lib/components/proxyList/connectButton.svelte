<script lang="ts">
	import type { ProxyServerApi } from '$lib/typeDef/proxyApiReponse';
	export let proxyEntry: ProxyServerApi;

	function connectToWhatsapp() {
		const url = `https://wa.me/proxy?host=${proxyEntry.ipAddress}&chatPort=${proxyEntry.proxyPort}&mediaPort=588&chatTLS=true`;
		window.location.href = url;
	}
</script>

<div>
	<button on:click={connectToWhatsapp}>Connect</button>
</div>

<style>
	button {
		background-color: #25D366;
		color: #000;
		border: none;
		border-radius: 5px;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		font-weight: 500;
		cursor: pointer;
		box-shadow: 0 4px #999;
	}

	button:hover {
		background-color: #128C7E;
	}

	button:active {
		box-shadow: 0 2px #666;
		transform: translateY(2px);
	}
</style>
