<script lang="ts">
	import type { PageData } from './$types';
	import type { Post } from './+page';

	export let data: PageData;
	let posts: Post[] = data.posts;
</script>

<div class="space-y-4 mb-4">
	<ul>
		{#each posts as post (post.title)}
			<li><a href={`/challenge/${post.slug}`}>{post.title}</a></li>
		{/each}
	</ul>
</div>
