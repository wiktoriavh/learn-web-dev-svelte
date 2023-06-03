<script lang="ts">
	import type { SingleResource } from '$lib/types/Resource';

	export let difficulty: SingleResource['difficulty'];
	export let title: SingleResource['title'];
	export let link: SingleResource['link'];
	export let isPickOne: SingleResource['isPickOne'];
	export let type: SingleResource['type'];
</script>

<article
	class={`flex flex-col overflow-hidden rounded-xl text-black-900 bg-black-100 ${
		isPickOne ? 'col-span-2' : ''
	}`}
>
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

	<main class="p-3 flex-1 gap-3">
		<slot />
	</main>

	<footer class="p-3 flex">
		<a
			href={link}
			title="Go to Resource {title}"
			target="_blank"
			class="text-black-900 hover:text-black-800 w-full h-full flex underline underline-offset-2 justify-end gap-2 items-center rounded-xl p-2 group"
		>
			Go to Resource <svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="h-5 w-5 mr-2 group-hover:mr-0 ease-in-out transition-all"
			>
				<path
					fill-rule="evenodd"
					d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
					clip-rule="evenodd"
				/>
			</svg>
		</a>
	</footer>
</article>
