import type { PageLoad } from './$types';

const getSlugFromPath = (path: string) => {
	console.log('path', path);
	return path.match(/([^/]*)\.(md|svx)/)?.[1] ?? null;
};

export const load = (async ({ params }) => {
	const modules = import.meta.glob(`/src/content/challenge/*.{md,svx}`);

console.log('modules', Object.entries(modules).find(([path]) => getSlugFromPath(path) === params.slug));

	const match = Object.entries(modules).find(([path]) => getSlugFromPath(path) === params.slug); // boolean true or false

	if (!match) {
		return;
	}

	const [_path, module] = match;
	const post = await module();

	return {
		component: post.default,
		frontmatter: post.metadata
	};
}) satisfies PageLoad;
