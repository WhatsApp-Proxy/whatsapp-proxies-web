<script>
	import Footer from '$lib/components/footer/footer.svelte';
	import { MirrorSiteList } from '$lib/const/mirrorList';
</script>

<div class="content">
	<div class="header">
		<h1>WhatsApp Proxy</h1>
		<span>Is our site blocked in your country? Try one of our mirrored websites!</span>
	</div>
	<div class="listWithMirrors">
		<ul>
			{#each MirrorSiteList as mirror}
				<li><a href={mirror}>{mirror}</a></li>
			{/each}
		</ul>
	</div>
	<div class="footerComponent">
		<Footer />
	</div>
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
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

	@media only screen and (max-width: 810px) {
		.content {
			margin-left: 0.5em;
			margin-right: 0.5em;
			text-align: center;
			margin-bottom: 1em;
		}
	}
</style>
