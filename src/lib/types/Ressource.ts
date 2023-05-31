type PickDescription = {
	title: string;
	description: string;
	link: string;
};
type Description = string | PickDescription[];

export type Ressource = {
	difficulty: 'beginner' | 'intermediate' | 'advanced';
	title: string;
	link?: string;
	type: 'video' | 'article' | 'book' | 'course' | 'tool';
	category: string;
	isPickOne?: boolean;
	description: Description;
};
