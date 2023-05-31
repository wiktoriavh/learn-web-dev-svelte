<script lang="ts">
	import Chapter from '$lib/components/Chapter.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Learn Web Development</title>
	<meta
		name="description"
		content="Learn Web Developing by following this curated path, covering topics from beginner to advanced."
	/>
</svelte:head>

<section>
	{#each data.categories as category}
		<Chapter title={category.title} ressources={category.resources} />
	{/each}
</section>
