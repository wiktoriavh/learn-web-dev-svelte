import type { Ressource } from '$lib/types/Ressource';
import { loadEntries, loadFile } from '$lib/util/content';
import type { Load } from '@sveltejs/kit';

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export const load: Load = async () => {
	return {
		categories: [{ title: 'HTML', resources: await _loadCategoryResources('html') }]
	};
};

// _loadCategoryResources loads all resources for a specified category
async function _loadCategoryResources(name: string) {
	const entries = await loadEntries(`resources/${name}`);
	const resources: Ressource[] = [];

	for (const entry of entries) {
		const { file, attributes, html } = await loadFile<Ressource>(`resources/${name}/${entry}`);

		resources.push({
			...attributes,
			title: file,
			description: html
		});
	}

	return resources;
}
