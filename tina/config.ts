import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
	branch,
	clientId: 'de4a98c4-ddc3-4305-8699-557488b8eb4d', // Get this from tina.io
	token: 'aef56042f52da6a85ac616916a052ca0b8df2c2f', // Get this from tina.io

	build: {
		outputFolder: 'admin',
		publicFolder: 'static'
	},
	media: {
		tina: {
			mediaRoot: '',
			publicFolder: 'static'
		}
	},
	schema: {
		collections: [
			{
				name: 'post',
				label: 'Posts',
				path: 'content/posts',
				fields: [
					{
						type: 'string',
						name: 'title',
						label: 'Title',
						isTitle: true,
						required: true
					},
					{
						type: 'rich-text',
						name: 'body',
						label: 'Body',
						isBody: true
					}
				]
			},
			{
				name: 'resources',
				label: 'Resources',
				path: 'content/resources',
				fields: [
					{
						type: 'string',
						name: 'difficulty',
						label: 'Difficulty'
					},
					{
						type: 'string',
						name: 'title',
						label: 'Title',
						isTitle: true,
						required: true
					},
					{
						type: 'string',
						name: 'type',
						label: 'Type'
					},
					{
						type: 'string',
						name: 'description',
						label: 'Description',
						isBody: true,
						required: true
					},
					{
						type: 'string',
						name: 'link',
						label: 'Link'
					}
				]
			}
		]
	}
});
