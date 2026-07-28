<script>
	import { email, github, linkedin } from '$lib/data.js';
	import { reveal } from '$lib/actions/reveal.js';
</script>

<footer use:reveal>
	<h2>Get in touch</h2>
	<a href="mailto:{email}" class="email">{email}</a>
	<div class="note">Available for engagements via Active Bridge.</div>
	<div class="social">
		<a href={github} target="_blank" rel="noopener">GitHub</a>
		<a href={linkedin} target="_blank" rel="noopener">LinkedIn</a>
	</div>
</footer>

<style>
	footer {
		border-top: 1px solid var(--line);
		padding: 64px 0 80px 0;
		display: flex;
		flex-direction: column;
		gap: 18px;
	}

	h2 {
		margin: 0;
		font-size: clamp(26px, 3.4vw, 34px);
		font-weight: 700;
		letter-spacing: -0.01em;
	}

	.email {
		font-family: var(--font-mono);
		font-size: clamp(15px, 2vw, 18px);
		color: var(--accent);
		text-decoration: none;
		align-self: flex-start;
	}

	.email:hover {
		text-decoration: underline;
		color: var(--accent);
	}

	.note {
		font-size: 14.5px;
		color: var(--faint);
	}

	.social {
		display: flex;
		gap: 18px;
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
