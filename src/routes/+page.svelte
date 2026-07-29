<script>
	import Hero from '$lib/components/Hero.svelte';
	import Flagship from '$lib/components/Flagship.svelte';
	import SelectedWork from '$lib/components/SelectedWork.svelte';
	import Services from '$lib/components/Services.svelte';
	import Stack from '$lib/components/Stack.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import { siteUrl } from '$lib/data.js';

	const title = 'Den Zubrytskyi — Senior Full-Stack Rails Engineer';
	const description =
		'I ship AI features into production SaaS — from LLM integration to a fine-tuned classifier in production — backed by 9 years of end-to-end Rails product work.';
	const ogImage = `${siteUrl}/og.png`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="theme-color" content="#0b0f12" />
	<link rel="canonical" href="{siteUrl}/" />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="{siteUrl}/" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="Den Zubrytskyi — Senior Full-Stack Rails Engineer shipping AI features into production SaaS"
	/>

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>

<div class="container">
	<main>
		<Hero />
		<Flagship />
		<SelectedWork />
		<Services />
		<Stack />
	</main>
	<Contact />
</div>

<style>
	.container {
		max-width: 1080px;
		margin: 0 auto;
		padding: 0 24px;
	}
</style>
