<script lang="ts">
	import ResourceCard from './ResourceCard.svelte';
	import type { Resource } from '$lib/types/Resource';
	import PickOneCard from './PickOneCard.svelte';
	import PickOneCardContent from './PickOneCardContent.svelte';
	export let title: string;
	export let description: string;
	export let resources: Resource[];
</script>

<section>
	<h2 class="text-3xl font-bold section-heading w-fit">{title}</h2>
	<p class="my-2 text-lg">
		{description}
	</p>
	<div class="grid grid-cols-3 gap-8 my-4">
		{#each resources as resource}
			{#if resource.isPickOne}
				<PickOneCard
					length={resource.description.length}
					difficulty={resource.difficulty}
					title={resource.title}
					type={resource.type}
				>
					{#each resource.description as description}
						<PickOneCardContent
							title={description.title}
							description={description.description}
							link={description.link}
						/>
					{/each}
				</PickOneCard>
			{:else}
				<ResourceCard
					difficulty={resource.difficulty}
					title={resource.title}
					link={resource.link}
					isPickOne={resource.isPickOne}
					type={resource.type}
				>
					<p>{resource.description}</p>
				</ResourceCard>
			{/if}
		{/each}
	</div>
</section>

<style>
	.section-heading {
		background: linear-gradient(90deg, #f18b74 0%, #f472b6 51.56%, #7b61ff 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
