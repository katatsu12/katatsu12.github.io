<script>
	import { projects } from '$lib/data.js';
	import { reveal } from '$lib/actions/reveal.js';
</script>

<section>
	<h2 class="section-label">Selected work</h2>
	<div class="grid">
		{#each projects as project (project.name)}
			<div class="card" use:reveal>
				<h3>{project.name}</h3>
				<p>{project.desc}</p>
				<div class="meta">{project.meta}</div>
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		padding-bottom: 72px;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 16px;
	}

	.card {
		border: 1px solid var(--line);
		border-radius: 10px;
		padding: 26px;
		background: var(--card);
		display: flex;
		flex-direction: column;
		gap: 12px;
		transition:
			border-color 0.2s ease,
			transform 0.25s ease;
	}

	.card:hover {
		border-color: #3a474f;
		transform: translateY(-4px);
	}

	h3 {
		margin: 0;
		font-size: 19px;
		font-weight: 600;
	}

	p {
		margin: 0;
		font-size: 14.5px;
		line-height: 1.6;
		color: var(--muted);
		text-wrap: pretty;
	}

	.meta {
		margin-top: auto;
		font-family: var(--font-mono);
		font-size: 12px;
		color: var(--faint);
	}
</style>
