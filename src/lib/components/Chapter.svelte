<script lang="ts">
	import ResourceCard from './ResourceCard.svelte';
	import type { Resource } from '$lib/types/Resource';
	import PickOneCard from './PickOneCard.svelte';
	import PickOneCardContent from './PickOneCardContent.svelte';
	export let title: string;
	export let resources: Resource[];
</script>

<section>
	<h2 class="">{title}</h2>
	<div class="grid grid-cols-4 gap-8">
		{#each resources as resource}
			{#if resource.isPickOne}
				<PickOneCard difficulty={resource.difficulty} title={resource.title} type={resource.type}>
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
