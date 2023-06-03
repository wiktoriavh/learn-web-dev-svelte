<script lang="ts">
	import type { PickResource } from '$lib/types/Resource';

	export let difficulty: PickResource['difficulty'];
	export let title: PickResource['title'];
	export let type: PickResource['type'];
</script>

<article class={`flex flex-col overflow-hidden rounded-xl text-black-900 bg-black-100 col-span-2`}>
	<header class="bg-black-800 p-3 text-black-100">
		<div class="flex items-center justify-between font-mono text-xs">
			<span>
				{type}
			</span>
			<span class="h-min rounded-full bg-green-300 px-2 py-0.5 text-green-800">
				{difficulty}
			</span>
		</div>
		<h3 class="text-lg font-semibold">{title}</h3>
	</header>

	<main class="p-3 w-full grid gap-3 grid-cols-2">
		<slot />
	</main>
</article>
