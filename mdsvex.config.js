import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import slug from 'rehype-slug';

const config = defineConfig({
	extensions: ['.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: [slug],

	layout: './src/routes/challenge/+layout.svelte'
});

export default config;
