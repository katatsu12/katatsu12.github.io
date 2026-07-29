<script>
	import { stack } from '$lib/data.js';
	import { reveal } from '$lib/actions/reveal.js';
</script>

<section>
	<h2 class="section-label">Stack</h2>
	<div class="tags">
		{#each stack as tag (tag)}
			<span use:reveal>{tag}</span>
		{/each}
	</div>
</section>

<style>
	section {
		padding-bottom: 96px;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	span {
		font-family: var(--font-mono);
		font-size: 13px;
		color: var(--muted);
		border: 1px solid var(--line);
		border-radius: 4px;
		padding: 8px 14px;
		transition:
			border-color 0.15s ease,
			color 0.15s ease;
	}

	span:hover {
		border-color: var(--accent);
		color: var(--ink);
	}
</style>
