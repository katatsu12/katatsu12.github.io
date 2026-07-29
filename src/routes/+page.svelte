<script>
	import Hero from '$lib/components/Hero.svelte';
	import Flagship from '$lib/components/Flagship.svelte';
	import SelectedWork from '$lib/components/SelectedWork.svelte';
	import Services from '$lib/components/Services.svelte';
	import Stack from '$lib/components/Stack.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<svelte:head>
	<title>Den Zubrytskyi — Senior Full-Stack Rails Engineer</title>
	<meta
		name="description"
		content="Senior full-stack Rails engineer shipping AI features into production SaaS — from LLM integration to a fine-tuned classifier in production — backed by 9 years of end-to-end product work."
	/>
	<meta name="theme-color" content="#0b0f12" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Den Zubrytskyi — Senior Full-Stack Rails Engineer" />
	<meta
		property="og:description"
		content="I ship AI features into production SaaS — from LLM integration to a fine-tuned classifier in production — backed by 9 years of end-to-end Rails product work."
	/>
</svelte:head>

<div class="container">
	<Hero />
	<Flagship />
	<SelectedWork />
	<Services />
	<Stack />
	<Contact />
</div>

<style>
	.container {
		max-width: 1080px;
		margin: 0 auto;
		padding: 0 24px;
	}
</style>
