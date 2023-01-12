<script lang="ts">
	import type { ProxyServerApi } from '$lib/typeDef/proxyApiReponse';
	import { calculatePing } from '$lib/util/calculatePing';
	import { getFlagEmoji } from '$lib/util/countryToEmoji';
	import { onMount } from 'svelte';
	import ConnectButton from './connectButton.svelte';
	export let proxyEntry: ProxyServerApi;

	let isFinishedPing = false;
	const highPing = 500;
	const lowPing = 100;
	const averagePing = 300;

	onMount(async () => {
		let pingResponseTime = 0;
		// if (proxyEntry.discoveryPort) {
		// 	pingResponseTime = await calculatePing(proxyEntry.ipAddress, proxyEntry.discoveryPort);
		// } Disabled because it doesnt work with HTTPS enabled..

		if (pingResponseTime == 0 || pingResponseTime == -1) {
			const pingResponse = await fetch(
				`https://latency.mrproper.dev/?ip=${proxyEntry.ipAddress}&port=${proxyEntry.proxyPort}`
			);
			const pingResponseJson = await pingResponse.json();
			pingResponseTime = pingResponseJson.latency;
		}
		proxyEntry.responseTime = pingResponseTime;
		isFinishedPing = true;
	});

	function getPingColorClass(ping: number): string {
		if (ping == -1 || ping > highPing) {
			return 'highPing';
		}
		if (ping < lowPing) {
			return 'lowPing';
		} else if (ping < averagePing) {
			return 'averagePing';
		} else {
			return 'highPing';
		}
	}

	function formatResponseTimeText(responseTime: number): string {
		return responseTime == -1 ? 'Unreachable' : `${responseTime}ms`;
	}

	function copyIpToClipBoard(): void {
		navigator.clipboard.writeText(`${proxyEntry.ipAddress}:${proxyEntry.proxyPort}`);
	}
</script>

<tr>
	<td>{proxyEntry.serverName}</td>
	<td class="ipAddress" on:click={copyIpToClipBoard} on:keydown={copyIpToClipBoard}
		>{proxyEntry.ipAddress}:{proxyEntry.proxyPort}</td
	>
	<td class="emojiFont">{getFlagEmoji(proxyEntry.country)}</td>
	<!-- <td>{proxyEntry.uptime}</td> -->
	{#if isFinishedPing}
		<td class={getPingColorClass(proxyEntry.responseTime ?? -1)}
			>{formatResponseTimeText(proxyEntry.responseTime ?? -1)}</td
		>
	{:else}
		<td>Pinging...</td>
	{/if}
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

	.highPing {
		color: red;
	}
	.lowPing {
		color: green;
	}
	.averagePing {
		color: rgb(153, 153, 0);
	}

	.ipAddress {
		cursor: pointer;
	}
</style>
