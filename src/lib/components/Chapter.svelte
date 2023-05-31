<script lang="ts">
	import type { Ressource } from '$lib/types/Ressource';
	import RessourceCard from './RessourceCard.svelte';
	export let title: string;
	export let ressources: Ressource[];

	console.log(ressources);
</script>

<section>
	<h2>{title}</h2>
	<div class="grid grid-cols-4 gap-8">
		{#each ressources as ressource}
			<RessourceCard resource={ressource}>
				{@html ressource.description}
			</RessourceCard>
		{/each}
	</div>
</section>
