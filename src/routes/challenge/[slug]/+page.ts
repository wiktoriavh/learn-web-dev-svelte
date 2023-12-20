import { cwd } from 'process';

const __root = cwd();

export async function load({ params }: { params: { slug: string } }) {
	const data = await import(`${__root}/content/challenge/${params.slug}.md`);

	console.log(data.metadata, data.default);

	// You'll need to parse the markdown content and metadata here
	// This depends on the structure of your markdown files

	return {
		content: data.default, // Replace with parsed content
		...data.metadata // Replace with parsed date
	};
}
