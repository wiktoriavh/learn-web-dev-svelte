<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import '../app.css';

	export let title = '';
</script>

<div class="app">
	<Header
		subtitle="A compilation of resources from entry level coding to advanced development techniques, curated by one of the largest web development communities on Discord."
	/>

	<main class="container my-auto">
		<h1 class="text-4xl font-bold mb-4">{title}</h1>

		<slot />
	</main>

	<Footer />
</div>
