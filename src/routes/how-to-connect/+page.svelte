<script>
	import Footer from '$lib/components/footer/footer.svelte';
	import Navbar from '$lib/components/navbar/navbar.svelte';
	import SEO from '$lib/components/SEO/index.svelte';
	import { goto } from '$app/navigation';
	import { HomeRoute } from '$lib/const/routes';
	import { onMount } from 'svelte';
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
		<h1>How to connect?</h1>
		<span>Not sure how to connect to one of our secure proxies? Look no further!</span>
		<p1 class="callToActionHomePage"
			>We offer a wide variety of secure proxies, visit our <a href={HomeRoute}>home page</a></p1
		>
	</div>
	<div class="connectSteps">
		<hr />
		<h2>Step 1</h2>
		<p>Make sure you are using the most current version of WhatsApp.</p>
		<h2>Step 2</h2>
		<p>Go to WhatsApp <span class="bold">Settings</span>.</p>
		<h2>Step 3</h2>
		<p>Tap <span class="bold">Storage and Data > Proxy</span>.</p>
		<h2>Step 4</h2>
		<p>Tap <span class="bold">Use Proxy</span>.</p>
		<h2>Step 5</h2>
		<p>
			Enter the <span class="bold">proxy address and port</span>. (You can find proxies at our
			<a href={HomeRoute + '/#proxyTable'}>home page</a> )
		</p>
		<h2>Step 6</h2>
		<p>Tap <span class="bold">Save</span>.</p>
		<h2>Step 7</h2>
		<p>
			A <span class="bold">check mark</span> will show if the connection is
			<span class="bold">successful</span>.
		</p>
		<h2>Step 8</h2>
		<p>
			If you are still unable to send or receive WhatsApp messages using a proxy, that proxy may
			have been blocked. Try again using a different proxy address.
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
