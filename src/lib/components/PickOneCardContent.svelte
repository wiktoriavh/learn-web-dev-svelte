<script lang="ts">
	import type { PickDescription } from '$lib/types/Resource';

	export let title: PickDescription['title'];
	export let description: PickDescription['description'];
	export let link: PickDescription['link'];
</script>

<div>
	<h4>{title}</h4>
	<p>{description}</p>
	<a href={link} target="_blank" rel="noopener noreferrer">
		{link}
	</a>
</div>
