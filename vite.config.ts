import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { plugin as markdown, Mode } from 'vite-plugin-markdown';

export default defineConfig({
	plugins: [markdown({ mode: [Mode.HTML] }), sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
