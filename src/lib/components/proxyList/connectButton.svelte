<script lang="ts">
	import type { ProxyType } from '$lib/typeDef/proxyType';
	export let proxyEntry: ProxyType;

	function connectToWhatsApp() {
		const url = `https://wa.me/proxy?host=${proxyEntry.ip}&chatPort=${proxyEntry.port}&mediaPort=588&chatTLS=true`;
		window.location.href = url;
	}
</script>

<div>
	<button on:click={connectToWhatsApp}>Connect</button>
</div>

<style>
	button {
		background-color: #25D366;
		color: #fff;
		border: none;
		border-radius: 5px;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		font-weight: 500;
		cursor: pointer;
	}
</style>
