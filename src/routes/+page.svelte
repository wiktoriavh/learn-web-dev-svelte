<script lang="ts">
	import type { Chapter as ChapterType } from '$lib/types/Chapter';
	import Chapter from '$lib/components/Chapter.svelte';
	const test: ChapterType[] = [
		{
			title: 'Learn HTML',
			resources: [
				{
					title: 'HTML Crash Course For Absolute Beginners',
					description:
						'In this crash course I will cram as much about HTML that I can. This is meant for absolute beginners. If you are interested in learning HTML but know nothing, then you are in the right place. We will be creating a cheat sheet with all of the common HTML5 tags, attributes, semantic markup, etc. We will not be focusing on CSS in this video. The CSS crash course will be released shortly after this one.',
					link: 'https://www.youtube.com/watch?v=UB1O30fR-EE',
					difficulty: 'beginner',
					type: 'video',
					isPickOne: false
				},
				{
					title: 'HTML Full Course - Build a Website Tutorial',
					description:
						'Learn the basics of HTML5 and web development in this awesome course for beginners.',
					link: 'https://www.youtube.com/watch?v=pQN-pnXPaVg',
					difficulty: 'beginner',
					type: 'video',
					isPickOne: false
				},
				{
					title: 'HTML Crash Course For Absolute Beginners',
					description:
						'In this crash course I will cram as much about HTML that I can. This is meant for absolute beginners. If you are interested in learning HTML but know nothing, then you are in the right place. We will be creating a cheat sheet with all of the common HTML5 tags, attributes, semantic markup, etc. We will not be focusing on CSS in this video. The CSS crash course will be released shortly after this one.',
					link: 'https://www.youtube.com/watch?v=UB1O30fR-EE',
					difficulty: 'beginner',
					type: 'video',
					isPickOne: false
				},
				{
					title: 'HTML Full Course - Build a Website Tutorial',
					description:
						'Learn the basics of HTML5 and web development in this awesome course for beginners.',
					link: 'https://www.youtube.com/watch?v=pQN-pnXPaVg',
					difficulty: 'beginner',
					type: 'video',
					isPickOne: false
				},
				{
					title: 'HTML Crash Course For Absolute Beginners',
					description:
						'In this crash course I will cram as much about HTML that I can. This is meant for absolute beginners. If you are interested in learning HTML but know nothing, then you are in the right place. We will be creating a cheat sheet with all of the common HTML5 tags, attributes, semantic markup, etc. We will not be focusing on CSS in this video. The CSS crash course will be released shortly after this one.',
					link: 'https://www.youtube.com/watch?v=UB1O30fR-EE',
					difficulty: 'beginner',
					type: 'video',
					isPickOne: false
				},
				{
					title: 'HTML Full Course - Build a Website Tutorial',
					description: [
						{
							title: 'Visual Studio Code',
							description:
								'Visual Studio Code is a source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.',
							link: 'https://code.visualstudio.com/'
						},
						{
							title: 'Visual Studio Code',
							description:
								'Visual Studio Code is a source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.',
							link: 'https://code.visualstudio.com/'
						}
					],
					difficulty: 'beginner',
					type: 'video',
					isPickOne: true
				},
				{
					title: 'HTML Crash Course For Absolute Beginners',
					description:
						'In this crash course I will cram as much about HTML that I can. This is meant for absolute beginners. If you are interested in learning HTML but know nothing, then you are in the right place. We will be creating a cheat sheet with all of the common HTML5 tags, attributes, semantic markup, etc. We will not be focusing on CSS in this video. The CSS crash course will be released shortly after this one.',
					link: 'https://www.youtube.com/watch?v=UB1O30fR-EE',
					difficulty: 'beginner',
					type: 'video',
					isPickOne: false
				},
				{
					title: 'HTML Full Course - Build a Website Tutorial',
					description:
						'Learn the basics of HTML5 and web development in this awesome course for beginners.',
					link: 'https://www.youtube.com/watch?v=pQN-pnXPaVg',
					difficulty: 'beginner',
					type: 'video',
					isPickOne: false
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Learn Web Development</title>
	<meta
		name="description"
		content="Learn Web Developing by following this curated path, covering topics from beginner to advanced."
	/>
</svelte:head>

<section>
	{#each test as chapter}
		<Chapter title={chapter.title} resources={chapter.resources} />
	{/each}
</section>
