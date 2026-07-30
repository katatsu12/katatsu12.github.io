<script>
	import { stack } from '$lib/data.js';
	import { reveal } from '$lib/actions/reveal.js';
</script>

<section>
	<h2 class="section-label">Stack</h2>
	<div class="groups">
		{#each stack as { group, items } (group)}
			<div class="group" use:reveal>
				<div class="group-label">{group}</div>
				<div class="tags">
					{#each items as tag (tag)}
						<span>{tag}</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		padding-bottom: 96px;
	}

	.groups {
		display: flex;
		flex-direction: column;
		gap: 22px;
	}

	.group {
		display: grid;
		grid-template-columns: 132px 1fr;
		align-items: start;
		gap: 10px;
	}

	.group-label {
		font-family: var(--font-mono);
		font-size: 13px;
		color: var(--faint);
		padding-top: 8px;
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

	/* Stack the label above its tags once the two-column split gets cramped. */
	@media (max-width: 560px) {
		.group {
			grid-template-columns: 1fr;
			gap: 8px;
		}

		.group-label {
			padding-top: 0;
		}
	}
</style>
