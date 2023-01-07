<script lang="ts">
	import type { ProxyType } from '$lib/typeDef/proxyType';
	import { getFlagEmoji } from '$lib/util/countryToEmoji';
	import { onMount } from 'svelte';
	import ConnectButton from './connectButton.svelte';
	export let proxyEntry: ProxyType;

	let isFinishedPing = false;
	const highPing = 500;
	const lowPing = 100;
	const averagePing = 300;

	onMount(async () => {
		const pingResponse = await fetch(
			`https://latency.mrproper.dev/?ip=${proxyEntry.ip}&port=${proxyEntry.port}`
		);
		const pingResponseJson = await pingResponse.json();
		proxyEntry.responseTime = pingResponseJson.latency;
		isFinishedPing = true;
	});

	function getPingColorClass(ping: number): string {
		if (ping < lowPing) {
			return 'lowPing';
		} else if (ping < averagePing) {
			return 'averagePing';
		} else {
			return 'highPing';
		}
	}

	function copyIpToClipBoard(): void {
		navigator.clipboard.writeText(`${proxyEntry.ip}:${proxyEntry.port}`);
	}
</script>

<tr>
	<td>{proxyEntry.name}</td>
	<td on:click={copyIpToClipBoard} on:keydown={copyIpToClipBoard}
		>{proxyEntry.ip}:{proxyEntry.port}</td
	>
	<td class="emojiFont">{getFlagEmoji(proxyEntry.country)}</td>
	<!-- <td>{proxyEntry.uptime}</td> -->
	{#if isFinishedPing}
		<td class={getPingColorClass(proxyEntry.responseTime)}>{proxyEntry.responseTime}ms</td>
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
		color: yellow;
	}
</style>
