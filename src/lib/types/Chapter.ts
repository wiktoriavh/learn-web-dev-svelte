import type { Resource } from './Resource';

export type Chapter = {
	title: string;
	description: string;
	resources: Resource[];
};
