
// import { mdsvex } from 'mdsvex';
// import adapter from '@sveltejs/adapter-static';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		adapter: adapter(),
// 		prerender: {
// 			handleUnseenRoutes: 'ignore'
// 		}
// 	},
// 	vitePlugin: {
// 		dynamicCompileOptions: ({ filename }) => filename.includes('node_modules') ? undefined : { runes: true }
// 	},
// 	preprocess: [mdsvex({ extensions: ['.md'], highlight: { theme: 'one-dark-pro' } })],
// 	extensions: ['.svelte', '.md']
// };

// export default config;
//
import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
import adapter from '@sveltejs/adapter-static';

const highlighter = await createHighlighter({
	themes: ['one-dark-pro'],
	langs: ['javascript', 'typescript', 'rust', 'bash', 'css', 'html', 'svelte', 'json', 'apache']
});
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			handleUnseenRoutes: 'ignore'
		}
	},
	vitePlugin: {
		dynamicCompileOptions: ({ filename }) => filename.includes('node_modules') ? undefined : { runes: true }
	},
	preprocess: [mdsvex({
		extensions: ['.md'],
		highlight: {
			highlighter: async (code, lang = 'text') => {
				const supportedLangs = ['javascript', 'typescript', 'rust', 'bash', 'css', 'html', 'svelte', 'json', 'apache'];
				const safeLang = supportedLangs.includes(lang) ? lang : 'text';
				const html = escapeSvelte(highlighter.codeToHtml(code, { lang: safeLang, theme: 'one-dark-pro' }));
				return `{@html \`${html}\`}`;
			}
		}
	})],
	extensions: ['.svelte', '.md']
};

export default config;
