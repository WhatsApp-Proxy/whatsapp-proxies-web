<script lang="ts">
	import { goto } from '$app/navigation';
	import { HomeRoute } from '$lib/const/routes';
	import { onMount } from 'svelte';
	import { setupLocale } from '$lib/locale/i18';
	import { _ } from 'svelte-i18n';

	setupLocale();

	onMount(async () => {
		await import('@lottiefiles/lottie-player');
	});

	function routeTo(route: string) {
		goto(route);
		return;
	}
</script>

<div class="proxyInfo">
	<hr />
	<lottie-player
		class="proxyInfoLottie"
		autoplay={true}
		loop
		mode="normal"
		src="https://assets10.lottiefiles.com/packages/lf20_0nnf0are/data.json"
		speed="0.25"
	/>
	<div class="proxyInfoText">
		<h2 class="headerText">{$_('BENEFITS_OF_USING_PROXY')} {new Date().getFullYear()}</h2>
		<p1 class="defaultFont">
			<!-- TEXT 1 -->
			{$_('PROXY_INFO_TEXT_1')}
			<br />
			<!-- TEXT 2 -->
			{$_('PROXY_INFO_TEXT_2')}
			<br />
			<!-- TEXT 3 -->
			{$_('PROXY_INFO_TEXT_3')}
		</p1>
		<p1 class="defaultFont">
			<!-- TEXT 4 -->
			{$_('PROXY_INFO_TEXT_4')}
		</p1>
		<p1 class="defaultFont">
			{$_('OUR_TEAM_AT')} <a href={HomeRoute}>WhatsApp-proxy.com</a>
			{$_('OUR_TEAM_AT_2')}
		</p1>
		<p1 class="defaultFont">
			<!-- TEXT 5 -->
			{$_('PROXY_INFO_TEXT_5')}
			<br />
			<!-- TEXT 6 -->
			{$_('PROXY_INFO_TEXT_6')}
			<br />
			<!-- TEXT 7 -->
			{$_('PROXY_INFO_TEXT_7')}
			<a href={HomeRoute}>WhatsApp-proxy.com</a>
			<!-- TEXT 8 -->
			{$_('PROXY_INFO_TEXT_8')}
			<br />
			<!-- TEXT 9 -->
			{$_('PROXY_INFO_TEXT_9')}
			<a href="#proxyTable">{$_('TABLE')}</a>
			{$_('above')}.
		</p1>
	</div>
	<hr />
</div>

<style>
	.proxyInfoLottie {
		height: 300px;
	}
	hr {
		width: 25%;
		border: 1px solid #000;
		margin-top: 5em;
	}
	.proxyInfo {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: white;
	}

	.proxyInfoText {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: white;
		margin-top: 2rem;
		width: 50%;
		text-overflow: clip;
	}

	p1 {
		font-size: 1.25rem;
		font-weight: 500;
		color: #000;
		margin: 0.5rem 0;
		text-align: center;
	}
	.headerText {
		font-size: 2rem;
		font-weight: 900;
		color: #000;
		margin: 0.5rem 0;
	}

	@media only screen and (max-width: 810px) {
		.proxyInfoText {
			width: 90%;
		}
		.proxyInfoLottie {
			height: 150px;
		}
	}
</style>
