<script lang="ts">
	import { setupLocale } from '$lib/locale/i18';
	import { _ } from 'svelte-i18n';

	setupLocale();
</script>

<div class="footer">
	<span>© {new Date().getFullYear()} - {$_('SITE_NAME')}</span>
	<span>
		{$_('MADE_WITH')} <span class="emojiFont">❤️</span>
		{$_('BY')}
		<a
			class="githubProfile"
			target="_blank"
			rel="noreferrer"
			href="https://github.com/GewoonJaap/whatsapp-proxies">Jaap</a
		>
	</span>
	<span class="addYourProxy">
		<a
			href="https://github.com/GewoonJaap/whatsapp-proxies/issues/new/choose"
			target="_blank"
			rel="noreferrer"
		>
			{$_('ADD_YOUR_PROXY_HERE')}
		</a>
	</span>
	<span class="disclaimer">
		{$_('WHATSAPP_DISCLAIMER')}
		<a href="https://whatsapp.com/" target="_blank" rel="noreferrer">https://whatsapp.com</a>
	</span>
</div>

<style>
	.footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: white;
		margin-top: 2rem;
		flex-shrink: 0;
	}

	.footer span {
		font-size: 1.5rem;
		font-weight: 500;
		color: #000;
		margin: 0.5rem 0;
		text-align: center;
	}

	.githubProfile {
		color: #000;
		text-decoration: underline;
	}

	.disclaimer {
		font-size: 1em !important;
		font-weight: 500;
		color: #000;
		margin: 0.5rem 0;
	}

	.addYourProxy {
		font-size: 1.25em !important;
		font-weight: 500;
		color: #000;
		margin: 0.5rem 0;
	}
</style>
