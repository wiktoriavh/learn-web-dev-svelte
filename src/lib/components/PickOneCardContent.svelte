<script lang="ts">
	import type { PickDescription } from '$lib/types/Resource';

	export let title: PickDescription['title'];
	export let description: PickDescription['description'];
	export let link: PickDescription['link'];
</script>

<div class="bg-white/40 p-4 rounded-md hover:bg-white/60 group flex flex-col gap-2 h-full">
	<h4 class="font-bold">{title}</h4>
	<p class="flex-1">{description}</p>
	<a
		href={link}
		target="_blank"
		title="Go to Resource {title}"
		rel="noopener noreferrer"
		class="flex p-2 pr-4 hover:pr-2 ease-in-out transition-all border border-transparent justify-end gap-2 items-center underline underline-offset-2 group-hover:bg-black-100 rounded-md"
	>
		Go to Resource <svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			class="h-5 w-5 mr-2"
		>
			<path
				fill-rule="evenodd"
				d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
				clip-rule="evenodd"
			/>
		</svg>
	</a>
</div>
