<script>
	import Footer from '$lib/components/footer/footer.svelte';
	import Navbar from '$lib/components/navbar/navbar.svelte';
	import { MirrorSiteList } from '$lib/const/mirrorList';
	import SEO from '$lib/components/SEO/index.svelte';
	import { onMount } from 'svelte';
	import { setupLocale } from '$lib/locale/i18';
	import { _ } from 'svelte-i18n';

	setupLocale();

	onMount(async () => {
		await import('@lottiefiles/lottie-player');
	});
	const SEOTags = {
		metadescription: 'Is our main site blocked in your country? Try one of our mirrored websites!',
		slug: 'mirror',
		title: 'Mirror sites'
	};
</script>

<SEO {...SEOTags} />
<Navbar />
<div class="content">
	<lottie-player
		autoplay={true}
		loop
		mode="normal"
		src="https://assets6.lottiefiles.com/packages/lf20_vpxae5vy.json"
		style="width: 60px"
		speed="0.5"
	/>
	<div class="header">
		<h1>{$_('SITE_NAME')}</h1>
		<span>{$_('WEBSITE_BLOCKED')}</span>
	</div>
	<div class="listWithMirrors">
		<ul>
			{#each MirrorSiteList as mirror}
				<li class="mirrorItem"><a href={mirror}>{mirror}</a></li>
			{/each}
		</ul>
	</div>
	<div class="mirrorDescription">
		<hr />
		<p class="defaultFont">
			{$_('MIRROR_USAGE_1')}
			<br />
			{$_('MIRROR_USAGE_2')}
			<br />
			{$_('MIRROR_USAGE_3')}
			<br />
			{$_('MIRROR_USAGE_4')}
		</p>
	</div>
</div>
<div class="footerComponent">
	<Footer />
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* justify-content: center; */
		/* min-height: 100vh; */
		background-color: white;
	}

	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: white;
	}

	.header span {
		font-size: 1.5rem;
		font-weight: 500;
		color: #000;
		margin: 0.5rem 0;
	}

	.header h1 {
		font-size: 3rem;
		font-weight: 900 !important;
		color: #000;
		margin: 0.5rem 0;
		margin-bottom: 0.5em !important;
	}

	.mirrorItem {
		font-size: 1.5rem;
		font-weight: 500;
		color: #000;
		margin: 0.5rem 0;
	}

	.mirrorDescription {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: white;
		width: 50%;
		text-align: center;
	}

	.mirrorDescription hr {
		width: 100%;
	}

	.mirrorDescription p {
		font-size: 1.5rem;
		font-weight: 500;
		color: #000;
		margin: 0.5rem 0;
	}

	@media only screen and (max-width: 810px) {
		.content {
			margin-left: 0.5em;
			margin-right: 0.5em;
			text-align: center;
			margin-bottom: 1em;
		}
		.mirrorDescription hr {
			width: 100%;
		}
		.mirrorDescription {
			width: 75%;
		}
	}
</style>
