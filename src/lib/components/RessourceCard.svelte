<script lang="ts">
	export let difficulty: 'beginner' | 'intermediate' | 'advanced';
	export let title: string;
</script>

<article class="flex flex-col overflow-hidden rounded text-black-900 bg-black-100">
	<header class="bg-black-800 p-2 text-black-100">
		<div class="flex items-center justify-between font-mono text-xs">
			<span title="Beginner" class="h-min rounded-full bg-green-300 px-2 py-0.5 text-green-800">
				{difficulty}
			</span>
		</div>

		<h3 class="text-lg font-semibold">{title}</h3>
	</header>

	<main class="m-2 max-w-xs flex-1 gap-3">
		<slot />
	</main>

	<footer class="m-2 flex">
		<a
			href="https://javascript.info"
			title="Read more"
			target="_blank"
			class="ml-auto block h-full w-max rounded-full p-2 text-gray-700 hover:bg-black/5"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="h-5 w-5"
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
