<script>
	import { email, github, linkedin } from '$lib/data.js';
</script>

<header class="hero">
	<div class="glow"></div>
	<div class="kicker">
		Senior Full-Stack Rails Engineer &middot; Ukraine (UTC+2/+3) &middot; EU hours, 4h overlap with
		US Pacific<span class="cursor"></span>
	</div>
	<h1>Den Zubrytskyi</h1>
	<p class="lede">
		I ship AI features into production SaaS &mdash; from LLM integration to a fine-tuned
		classifier in production &mdash; backed by 9 years of end-to-end Rails product work.
	</p>
	<div class="cta">
		<a href="#work" class="btn primary">View my work</a>
		<a href="mailto:{email}" class="btn ghost" data-umami-event="email-click-hero">Get in touch</a>
		<div class="social">
			<a href={github} target="_blank" rel="noopener">GitHub</a>
			<a href={linkedin} target="_blank" rel="noopener">LinkedIn</a>
		</div>
	</div>
</header>

<style>
	.hero {
		position: relative;
		padding: clamp(80px, 14vh, 160px) 0 clamp(64px, 10vh, 120px) 0;
		display: flex;
		flex-direction: column;
		gap: 28px;
	}

	.glow {
		position: fixed;
		inset: -60px -220px 0 -220px;
		z-index: -1;
		pointer-events: none;
		background: radial-gradient(
			640px 420px at 18% 14%,
			color-mix(in oklab, var(--accent) 9%, transparent),
			transparent 70%
		);
	}

	.kicker {
		position: relative;
		font-family: var(--font-mono);
		font-size: 13px;
		letter-spacing: 0.12em;
		color: var(--accent);
		text-transform: uppercase;
		animation: fadeUp 0.7s ease both;
	}

	.cursor {
		display: inline-block;
		width: 8px;
		height: 13px;
		background: var(--accent);
		margin-left: 10px;
		vertical-align: -1px;
		animation: blink 1.1s steps(1) infinite;
	}

	h1 {
		position: relative;
		margin: 0;
		font-size: clamp(40px, 6.5vw, 72px);
		font-weight: 700;
		line-height: 1.02;
		letter-spacing: -0.02em;
		animation: fadeUp 0.7s ease 0.1s both;
	}

	.lede {
		position: relative;
		margin: 0;
		max-width: 640px;
		font-size: clamp(18px, 2.2vw, 22px);
		line-height: 1.55;
		color: var(--muted);
		text-wrap: pretty;
		animation: fadeUp 0.7s ease 0.2s both;
	}

	.cta {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		gap: 14px;
		margin-top: 8px;
		align-items: center;
		animation: fadeUp 0.7s ease 0.32s both;
	}

	.btn {
		display: inline-block;
		font-size: 15px;
		text-decoration: none;
		border-radius: 6px;
	}

	.btn.primary {
		padding: 13px 26px;
		background: var(--accent);
		color: #06110f;
		font-weight: 600;
		transition: filter 0.15s ease;
	}

	.btn.primary:hover {
		filter: brightness(1.12);
		color: #06110f;
	}

	.btn.ghost {
		padding: 12px 25px;
		border: 1px solid #2a343a;
		color: var(--ink);
		font-weight: 500;
		transition: border-color 0.15s ease;
	}

	.btn.ghost:hover {
		border-color: var(--accent);
		color: var(--ink);
	}

	.social {
		display: flex;
		gap: 18px;
		margin-left: 6px;
		font-family: var(--font-mono);
		font-size: 13px;
	}

	.social a {
		color: var(--faint);
		text-decoration: none;
	}

	.social a:hover {
		color: var(--accent);
	}
</style>
