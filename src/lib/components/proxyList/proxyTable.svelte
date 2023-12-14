<script lang="ts">
	import ProxyEntry from '$lib/components/proxyList/proxyEntry.svelte';
	import { ProxyList } from '$lib/const/proxyList';
	import { onMount } from 'svelte';
	import { proxyListFromApi } from '$lib/util/proxyListFromApi';
	import type { ProxyServerApi } from '$lib/typeDef/proxyApiReponse';
	import { setupLocale } from '$lib/locale/i18';
	import { _ } from 'svelte-i18n';

	setupLocale();

	let proxyList: ProxyServerApi[] = [];

	onMount(async () => {
		//get current domain to see if we are on a mirror
		const currentDomain = window.location.hostname;
		const proxyData = await proxyListFromApi(currentDomain);
		if (proxyData.error == null) {
			proxyList = proxyData.data;
		} else {
			proxyList = ProxyList;
		}
	});
</script>

<!-- #proxyTable here -->
<div class="listWithProxys" id="proxyTable">
	<span>{$_('USE_ONE_OF_THE_PROXIES_BELOW')}</span>
	<hr />
	{#if proxyList.length != 0}
		<div class="table">
			<table>
				<thead>
					<tr>
						<th>{$_('NAME')}</th>
						<th>{$_('IP')}</th>
						<th>{$_('COUNTRY')}</th>
						<!-- <th>Uptime</th> -->
						<th>{$_('RESPONSE_TIME')}</th>
					</tr>
				</thead>

				{#each proxyList as proxy}
					<ProxyEntry proxyEntry={proxy} />
				{/each}
			</table>
		</div>
	{:else}
		<span>{$_('LOADING_PROXIES')}</span>
	{/if}
</div>

<style>
	.listWithProxys {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: rgb(252, 252, 252);
		border-radius: 10px;
		box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.1);
		z-index: 1;
		margin-top: 2rem;
		width: 50%;
	}

	.listWithProxys span {
		font-size: 1.5rem;
		font-weight: 500;
		color: #000;
		margin: 0.5rem 0;
	}

	.listWithProxys hr {
		width: 100%;
		border: 1px solid #000;
	}

	.listWithProxys table {
		border-collapse: collapse;
		width: 100%;
		margin-top: 1rem;
	}

	.table {
		max-height: 500px !important;
		overflow-y: scroll;
		width: 95%;
	}

	th {
		padding: 20px 15px;
		text-align: left;
		font-weight: 500;
		font-size: 12px;
		color: black;
		text-transform: uppercase;
	}

	/* on phone screen */
	@media only screen and (max-width: 810px) {
		.listWithProxys {
			width: 80%;
		}
		.table {
			width: 100%;
		}
	}
</style>
