import type { PageLoad } from './$types';

export type Post = {
	title: string;
	prerequisites: string[];
	slug: string;
	description: string;
	id: number;
};

export const load = (async () => {
	const modules = import.meta.glob('/src/content/challenge/*.{md,svx}');

	const postPromise = Object.values(modules).map(async (mod) => {
		const post = (await mod()) as {
			metadata: { title: string; prerequisites: string[]; description: string; id: number };
		};

		return {
			title: post.metadata.title,
			prerequisites: post.metadata.prerequisites,
			slug: post.metadata.title.toLowerCase().replace(/ /g, '-'),
			description: post.metadata.description,
			id: post.metadata.id
		} as Post;
	});

	const posts = await Promise.all(postPromise);

	return { posts };
}) satisfies PageLoad;
