<script lang="ts">
	import type { ProxyType } from '$lib/typeDef/proxyType';
	import { getFlagEmoji } from '$lib/util/countryToEmoji';
	import ConnectButton from './connectButton.svelte';
	export let proxyEntry: ProxyType;
</script>

<tr>
	<td>{proxyEntry.name}</td>
	<td>{proxyEntry.ip}:{proxyEntry.port}</td>
	<td class="emojiFont">{getFlagEmoji(proxyEntry.country)}</td>
	<td>{proxyEntry.uptime}</td>
	<td>{proxyEntry.responseTime}ms</td>
</tr>

<style>
	td {
		padding: 15px;
		text-align: left;
		vertical-align: middle;
		font-weight: 300;
		font-size: 1em;
		color: black;
		border-bottom: solid 1px rgba(255, 255, 255, 0.1);
	}
</style>
