<script lang="ts">
	import website from '$lib/config/website';

	const { author, ogLanguage, siteLanguage, siteShortTitle, siteTitle, siteUrl, githubPage } =
		website;

	export let metadescription: string;
	export let slug;
	export let title;

	const defaultAlt =
		'picture of a person with long, curly hair, wearing a red had taking a picture with an analogue camera';

	const pageTitle = `${siteTitle} | ${title}`;
	const url = `${siteUrl}/${slug}`;
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metadescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<link rel="canonical" href={url} />
	<meta name="og:title" property="og:title" content={metadescription} />
	<meta name="twitter:card" content={metadescription} />
</svelte:head>
