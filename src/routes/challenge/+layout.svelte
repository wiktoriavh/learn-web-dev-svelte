<script lang="ts">
	export let title = '';
</script>

<div class="app">
	<main class="container my-auto">
		<h1 class="text-4xl font-bold mb-4">{title}</h1>

		<slot />
	</main>
</div>
