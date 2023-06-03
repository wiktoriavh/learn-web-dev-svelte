export type PickDescription = {
	title: string;
	description: string;
	link: string;
};

export type BaseResource = {
	difficulty: 'beginner' | 'intermediate' | 'advanced';
	title: string;
	type: 'video' | 'article' | 'book' | 'course' | 'tool';
};

export type PickResource = BaseResource & {
	isPickOne: true;
	description: PickDescription[];
};

export type SingleResource = BaseResource & {
	isPickOne: false;
	description: string;
	link: string;
};

export type Resource = PickResource | SingleResource;
