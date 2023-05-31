<script lang="ts">
	import type { Ressource } from '$lib/types/Ressource';

	export let resource: Ressource;
	const { difficulty, title, link, isPickOne, type } = resource;
</script>

<article class="flex flex-col overflow-hidden rounded-xl text-black-900 bg-black-100">
	<header class="p-3 bg-black-800 text-black-100">
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

	{#if isPickOne}
		<main class="grid max-w-xs gap-3 p-3">
			<slot />
		</main>
	{:else}
		<main class="flex-1 max-w-xs gap-3 p-3">
			<slot />
		</main>

		<footer class="flex p-3">
			<a
				href={link}
				title="Go to ressource {title}"
				target="_blank"
				class="flex items-center justify-end w-full h-full gap-2 p-2 underline text-black-900 hover:text-black-800 underline-offset-2 rounded-xl group"
			>
				Go to Ressource <svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					class="w-5 h-5 mr-2 transition-all ease-in-out group-hover:mr-0"
				>
					<path
						fill-rule="evenodd"
						d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>
		</footer>
	{/if}
</article>
