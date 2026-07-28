<script>
	import '@fontsource/space-grotesk/400.css';
	import '@fontsource/space-grotesk/500.css';
	import '@fontsource/space-grotesk/600.css';
	import '@fontsource/space-grotesk/700.css';
	import '@fontsource/jetbrains-mono/400.css';
	import '@fontsource/jetbrains-mono/500.css';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="app">
	{@render children()}
</div>

<style>
	/* The hero glow intentionally bleeds past the container; clip it here
	   (not on body, where overflow propagates to the viewport) so it never
	   creates horizontal scrolling. */
	.app {
		overflow-x: clip;
		min-height: 100vh;
	}
</style>
