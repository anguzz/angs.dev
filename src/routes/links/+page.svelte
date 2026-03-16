<script>
	import { links } from "$lib/data/links.js";

	let selectedTag = "All";

	// collect unique tags
	const tags = ["All", ...new Set(links.map((l) => l.tag))];

	// reactive filtered list
	$: filteredLinks =
		selectedTag === "All"
			? links
			: links.filter((l) => l.tag === selectedTag);
</script>

<h1>Cool Links</h1>
<p class="subtitle">Internet stuff I’ve found useful or interesting.</p>

<div class="tags">
	{#each tags as tag}
		<button
			class:selected={selectedTag === tag}
			on:click={() => (selectedTag = tag)}
		>
			{tag}
		</button>
	{/each}
</div>

<div class="links">
	{#each filteredLinks as link}
		<div class="card">
			<h3>
				<a href={link.link} target="_blank" rel="noopener noreferrer">
					{link.title}
				</a>
			</h3>
			<p>{link.description}</p>
			<span class="tag">{link.tag}</span>
		</div>
	{/each}
</div>

<style>
	h1 {
		margin-bottom: 1rem;
	}

	.tags {
		margin-bottom: 1.5rem;
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	button {
		padding: 0.3rem 0.7rem;
		border-radius: 6px;
		border: 1px solid #466cdd;
		background: transparent;
		cursor: pointer;
	}

	button.selected {
		background: #4c6ef5;
		border-color: #4c6ef5;
		color: white;
	}

	.links {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.card {
		padding: 1rem;
		border-radius: 10px;
		background: #102041;
	}

	a {
		color: #7db7ff;
		text-decoration: none;
		font-weight: bold;
	}

	a:hover {
		text-decoration: underline;
	}

	.tag {
		font-size: 0.75rem;
		opacity: 0.7;
	}

	.subtitle {
	margin-bottom: 1.5rem;
}
</style>