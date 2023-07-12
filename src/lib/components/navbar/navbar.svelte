<script lang="ts">
	import { goto } from '$app/navigation';
	import { HomeRoute, MirrorRoute, HowToConnectRoute } from '$lib/const/routes';
	import { setupLocale, setLocale } from '$lib/locale/i18';
	import { _ } from 'svelte-i18n';

	setupLocale();

	function routeTo(route: string) {
		goto(route);
		return;
	}

	function englishLanguage(){
		setLocale('en');
	}
</script>

<div class="navbarContent">
	<div class="routeButtons">
		<button on:click={() => routeTo(HomeRoute)} class="routeButton defaultFont">{$_('HOME')}</button
		>
		<button on:click={() => routeTo(HowToConnectRoute)} class="routeButton defaultFont"
			>{$_('HOW_TO_CONNECT')}</button
		>
		<button on:click={() => routeTo(MirrorRoute)} class="routeButton defaultFont"
			>{$_('MIRRORS')}</button
		>
	</div>
	<div class="rightContent">
		<button on:click={() => englishLanguage()} class="emojiFont languageSwitcher routeButton">🇬🇧</button>
		</div>
</div>

<style>
	
	.navbarContent {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		background-color: white;
		z-index: 1;
		box-shadow: 10px 10px 5px lightblue;
		width: 100%;
		height: 50px;
		margin-bottom: 5em;
		padding-top: 1em;
		padding-bottom: 1em;
	}

	.routeButtons {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: left;
		width: 100%;
		height: 100px;
		margin: 0.25em;
		margin-left: 1em;
		padding-bottom: 0.25em;
		margin-top: 0 !important;
	}

	/* route buttons from left to right */

	.routeButton {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		background-color: white;
		width: auto;
		height: 2em;
		border: none;
		outline: none;
		cursor: pointer;
		font-size: 1.5rem;
		font-weight: 500;
		color: #000;
		margin: 0.5rem 0;
		margin-left: 1em;
		margin-right: 1em;
		border-radius: 0.5em;
		color: black;
		margin-top: 0 !important;
	}
</style>
