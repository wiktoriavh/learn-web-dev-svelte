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
				name: 'challenge',
				label: 'Challenges',
				path: 'content/challenge',
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
					},
					{
						type: 'string',
						name: 'prerequisites',
						label: 'Prerequisites',
						list: true
					},
					{
						type: 'string',
						name: 'tags',
						label: 'Tags',
						options: ['html', 'css', 'javascript']
					},
					{
						type: 'number',
						name: 'id',
						label: 'Post ID',
					},
				],
			},
		]
	}
});
