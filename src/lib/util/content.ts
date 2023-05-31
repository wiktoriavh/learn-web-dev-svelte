import { error } from '@sveltejs/kit';

const FileRegex = /\/src\/content\/(?:([a-zA-Z0-9 /]+)\/)?(.+)\.md/;

type MarkdownContent<T = Record<string, unknown>> = {
	attributes: T;
	html: string;
};

export async function loadEntries(relativePath: string) {
	const modules = import.meta.glob(`/src/content/**/*.md`);

	const files = [];
	for (const module of Object.keys(modules)) {
		const [, path, file] = FileRegex.exec(module) ?? [];
		if (path === relativePath) {
			files.push(file);
		}
	}

	return files;
}

export async function loadFile<T = Record<string, unknown>>(relativePath: string) {
	const modules = import.meta.glob(`/src/content/**/*.md`, { eager: true });
	const [fullPath, , file] =
		Object.keys(modules)
			.map((m) => FileRegex.exec(m) ?? [])
			.find(([, path, file]) => joinPath(path, file) === relativePath) ?? [];

	if (file == null) {
		throw error(404, 'Not found');
	}

	const module = modules[fullPath] as MarkdownContent<T>;
	return {
		fullPath,
		file,
		...module
	};
}

function joinPath(...path: string[]) {
	return path.filter(Boolean).join('/');
}
