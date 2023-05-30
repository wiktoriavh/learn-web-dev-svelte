<script lang="ts">
	import RessourceCard from './RessourceCard.svelte';
	export let title: string;
	export let ressources: {
		difficulty: 'beginner' | 'intermediate' | 'advanced';
		title: string;
		description: string;
		link: string;
	}[];
</script>

<section>
	<h2>{title}</h2>
	<div class="grid grid-cols-4 gap-8">
		{#each ressources as ressource}
			<RessourceCard
				difficulty={ressource.difficulty}
				title={ressource.title}
				link={ressource.link}
			>
				{ressource.description}
			</RessourceCard>
		{/each}
	</div>
</section>
