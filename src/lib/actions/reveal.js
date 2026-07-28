/** @type {IntersectionObserver | undefined} */
let observer;

function getObserver() {
	if (!observer) {
		observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add('revealed');
						observer?.unobserve(entry.target);
					}
				}
			},
			// Fire once the element crosses ~94% of the viewport height,
			// matching the original design's reveal threshold.
			{ rootMargin: '0px 0px -6% 0px' }
		);
	}
	return observer;
}

/**
 * Staggered scroll-reveal: hides the element until it enters the viewport,
 * then fades it up. Siblings using this action within the same parent are
 * staggered by 90ms each. Styles live in app.css (.reveal / .revealed).
 *
 * @param {HTMLElement} node
 */
export function reveal(node) {
	node.classList.add('reveal');

	// Earlier siblings mount first and already carry .reveal, so the index
	// of this node among them is its position in the stagger sequence.
	const group = Array.from(node.parentElement?.children ?? []).filter((el) =>
		el.classList.contains('reveal')
	);
	node.style.setProperty('--reveal-delay', `${group.indexOf(node) * 90}ms`);

	const io = getObserver();
	io.observe(node);

	return {
		destroy() {
			io.unobserve(node);
		}
	};
}
