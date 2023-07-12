<script lang="ts">
	import ProxyTable from '$lib/components/proxyList/proxyTable.svelte';
	import Footer from '$lib/components/footer/footer.svelte';
	import Navbar from '$lib/components/navbar/navbar.svelte';
	import ProxyInfo from '$lib/components/homepage/proxyInfo.svelte';
	import SEO from '$lib/components/SEO/index.svelte';
	import { HowToConnectRoute } from '$lib/const/routes';
	import { setupLocale } from '$lib/locale/i18';
	import { _ } from 'svelte-i18n';

	setupLocale();

	const SEOTags = {
		metadescription:
			'All your WhatsApp Proxies in one place. Using a WhatsApp proxy ensures that you can use WhatsApp anytime, anywhere!',
		slug: '',
		title: ' All your WhatsApp Proxies in one place'
	};
</script>

<SEO {...SEOTags} />
<Navbar />
<div class="content">
	<div class="header">
		<h1>{$_('SITE_NAME')}</h1>
		<span class="callToAction">{$_('THE_ONLY_SITE_YOU_NEED')}</span>
		<span>{$_('WE_OFFER_WIDE_VARIETY')}</span>
		<span class="howToConnect">
			{$_('NOT_SURE_HOW_TO_CONNECT')}
			<a href={HowToConnectRoute}> {$_('FOLLOW_THIS_GUIDE')} </a>
		</span>
	</div>
	<ProxyTable />
	<ProxyInfo />
</div>
<div class="footerComponent">
	<Footer />
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
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

	.callToAction {
		font-size: 2rem !important;
		font-weight: 700;
		color: rgb(24, 24, 24);
		margin-bottom: 2em !important;
	}

	.howToConnect {
		font-size: 1.5rem;
		font-weight: 500;
		color: #000;
		margin: 0.5rem 0;
	}

	.howToConnect a {
		color: #000;
		text-decoration: underline;
	}

	@media only screen and (max-width: 810px) {
		.content {
			margin-left: 0.5em;
			margin-right: 0.5em;
			text-align: center;
			margin-bottom: 1em;
		}
	}
</style>
