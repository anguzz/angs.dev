<script>
	import { concerts } from "$lib/data/music.js";

	let openIndex = null;

	function toggle(i) {
		openIndex = openIndex === i ? null : i;
	}
</script>

<h1>Music Journal</h1>
<p class="subtitle">Some bands I’ve seen and thoughts on them</p>

<div class="concerts">
	{#each concerts as concert, i}
		<div class="card">
			<button class="accordion" on:click={() => toggle(i)}>
				<span>{concert.heading}</span>
				<span class="arrow">{openIndex === i ? "▴" : "▾"}</span>
			</button>

			{#if openIndex === i}
				<p class="content">{concert.content}</p>
			{/if}
		</div>
	{/each}
</div>

<style>
	h1 {
		margin-bottom: 0.2rem;
	}

	.subtitle {
		opacity: 0.7;
		margin-bottom: 1.5rem;
	}

	.concerts {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.card {
		padding: 1rem;
		border-radius: 10px;
		background: #102041;
	}

	.accordion {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: none;
		background: transparent;
		color: white;
		font-size: 1rem;
		cursor: pointer;
		padding: 0;
	}

	.arrow {
		opacity: 0.7;
	}

	.content {
		margin-top: 0.6rem;
		line-height: 1.4;
		opacity: 0.9;
	}
</style>