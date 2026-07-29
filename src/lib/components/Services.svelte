<script>
	import { services } from '$lib/data.js';
	import { reveal } from '$lib/actions/reveal.js';
</script>

<section>
	<h2 class="section-label">What I do</h2>
	<div class="grid">
		{#each services as service (service.num)}
			<div class="item" use:reveal>
				<div class="num">{service.num}</div>
				<h3>{service.title}</h3>
				<p>{service.desc}</p>
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
		gap: 0;
		border-top: 1px solid var(--line);
	}

	.item {
		padding: 28px 24px 28px 0;
		border-bottom: 1px solid var(--line);
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.num {
		font-family: var(--font-mono);
		font-size: 13px;
		color: var(--accent);
	}

	h3 {
		margin: 0;
		font-size: 18px;
		font-weight: 600;
	}

	p {
		margin: 0;
		font-size: 14.5px;
		line-height: 1.6;
		color: var(--muted);
		text-wrap: pretty;
	}
</style>
