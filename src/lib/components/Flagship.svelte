<script>
	import { flagshipStack } from '$lib/data.js';
	import { reveal } from '$lib/actions/reveal.js';
</script>

<section id="work">
	<div class="section-label">Flagship project</div>
	<a
		href="https://apps.shopify.com/review-copilot"
		target="_blank"
		rel="noopener"
		class="card"
		use:reveal
	>
		<div class="head">
			<h2>Review Copilot</h2>
			<div class="status">Live on the Shopify App Store &middot; July 2026 &rarr;</div>
		</div>
		<p class="summary">
			AI review analytics for Shopify merchants &mdash; solo-built, end to end. Full lifecycle
			ownership: scoping, ML model training, deployment, and App Store approval.
		</p>
		<p class="detail">
			Includes a custom fine-tuned DistilBERT multi-label classifier served via a Python/FastAPI
			microservice alongside the Rails app.
		</p>
		<div class="tags">
			{#each flagshipStack as tag (tag)}
				<span>{tag}</span>
			{/each}
		</div>
	</a>
</section>

<style>
	section {
		padding-bottom: 72px;
	}

	.card {
		display: block;
		text-decoration: none;
		color: inherit;
		border: 1px solid var(--line);
		border-radius: 10px;
		padding: clamp(28px, 4vw, 48px);
		background: var(--card);
		transition:
			border-color 0.2s ease,
			transform 0.25s ease,
			box-shadow 0.25s ease;
	}

	.card:hover {
		border-color: var(--accent);
		color: inherit;
		transform: translateY(-4px);
		box-shadow: 0 16px 44px rgba(0, 0, 0, 0.35);
	}

	.head {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		align-items: baseline;
		justify-content: space-between;
	}

	h2 {
		margin: 0;
		font-size: clamp(26px, 3.4vw, 36px);
		font-weight: 700;
		letter-spacing: -0.01em;
	}

	.status {
		font-family: var(--font-mono);
		font-size: 13px;
		color: var(--accent);
	}

	.summary {
		margin: 18px 0 0 0;
		max-width: 680px;
		font-size: 17px;
		line-height: 1.6;
		color: var(--muted);
		text-wrap: pretty;
	}

	.detail {
		margin: 14px 0 0 0;
		max-width: 680px;
		font-size: 15px;
		line-height: 1.6;
		color: var(--faint);
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-top: 26px;
	}

	.tags span {
		font-family: var(--font-mono);
		font-size: 12px;
		color: var(--muted);
		border: 1px solid var(--line);
		border-radius: 4px;
		padding: 5px 10px;
	}
</style>
