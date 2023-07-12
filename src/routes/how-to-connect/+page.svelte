<script>
	import Footer from '$lib/components/footer/footer.svelte';
	import Navbar from '$lib/components/navbar/navbar.svelte';
	import SEO from '$lib/components/SEO/index.svelte';
	import { goto } from '$app/navigation';
	import { HomeRoute } from '$lib/const/routes';
	import { onMount } from 'svelte';
	import { setupLocale } from '$lib/locale/i18';
	import { _ } from 'svelte-i18n';

	setupLocale();

	onMount(async () => {
		await import('@lottiefiles/lottie-player');
	});
	const SEOTags = {
		metadescription: 'Not sure how to connect to one of our secure proxies? Look no further!',
		slug: 'how-to-connect',
		title: 'How to connect to a secure proxy'
	};
</script>

<SEO {...SEOTags} />
<Navbar />
<div class="content">
	<lottie-player
		autoplay={true}
		loop
		mode="normal"
		src="https://assets6.lottiefiles.com/private_files/lf30_6inghz1i.json"
		style="width: 200px"
		speed="1"
		alt="Connecting infographic"
	/>
	<div class="header">
		<h1>{$_('HOW_TO_CONNECT')}?</h1>
		<span>{$_('NOT_SURE_HOW_TO_CONNECT_2')}</span>
		<p1 class="callToActionHomePage"
			>{$_('VISIT_OUR_HOME_PAGE')} <a href={HomeRoute}>{$_('HOME_PAGE')}</a></p1
		>
	</div>
	<div class="connectSteps">
		<hr />
		<h2>{$_('STEP_1')}</h2>
		<p>{$_('MAKE_SURE_YOU_USE_LATEST_VERSION')}</p>
		<h2>{$_('STEP_2')}</h2>
		<p>{$_('GO_TO_WHATSAPP_SETTINGS')} <span class="bold">{$_('SETTINGS')}</span>.</p>
		<h2>{$_('STEP_3')}</h2>
		<p>{$_('TAP')} <span class="bold">{$_('STORAGE_AND_DATA')}</span>.</p>
		<h2>{$_('STEP_4')}</h2>
		<p>{$_('TAP')} <span class="bold">{$_('USE_PROXY')}</span>.</p>
		<h2>{$_('STEP_5')}</h2>
		<p>
			{$_('ENTER_THE')} <span class="bold">{$_('PROXY_ADDRESS_AND_PORT')}</span>. ({$_(
				'YOU_CAN_FIND_PROXIES_AT'
			)}
			<a href={HomeRoute + '/#proxyTable'}>{$_('HOME_PAGE')}</a> )
		</p>
		<h2>{$_('STEP_6')}</h2>
		<p>{$_('TAP')} <span class="bold">{$_('SAVE')}</span>.</p>
		<h2>{$_('STEP_7')}</h2>
		<p>
			{$_('A')} <span class="bold">{$_('CHECK_MARK')}</span>
			{$_('WILL_SHOW_IF_THE_CONNECTION')}
			<span class="bold">{$_('SUCCESSFUL')}</span>.
		</p>
		<h2>{$_('STEP_8')}</h2>
		<p>
			{$_('UNABLE_TO_RECEIVE')}
		</p>
	</div>
</div>
<div class="footerComponent">
	<Footer />
</div>

<style>
	.bold {
		font-weight: bold;
	}
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

	.connectSteps {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: white;
		margin-top: 1em;
	}

	.connectSteps hr {
		width: 50%;
		border: 1px solid #000;
	}

	.connectSteps h2 {
		font-size: 1.5rem;
		font-weight: 500;
		color: #000;
		margin: 0.5rem 0;
	}

	.connectSteps p {
		font-size: 1.25rem;
		font-weight: 500;
		color: #000;
		margin: 0.5rem 0;
		text-align: center;
	}

	.callToActionHomePage {
		font-size: 1.25rem;
		font-weight: 500;
		color: #000;
		margin: 0.5rem 0;
		text-align: center;
	}

	@media only screen and (max-width: 810px) {
		.content {
			margin-left: 0.5em;
			margin-right: 0.5em;
			text-align: center;
			margin-bottom: 1em;
		}
		.connectSteps hr {
			width: 75%;
		}
	}
</style>
