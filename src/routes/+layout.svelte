<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import '../app.css';
</script>

<div class="app">
	<Header
		subtitle="A compilation of resources from entry level coding to advanced development techniques, curated by one of the largest web development communities on Discord."
	/>

	<main class="container my-auto">
		<slot />
	</main>

	<Footer />
</div>
