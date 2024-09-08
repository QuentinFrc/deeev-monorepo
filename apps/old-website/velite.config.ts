import rehypeShiki from '@shikijs/rehype';
import {
	transformerMetaHighlight,
	transformerMetaWordHighlight,
	transformerNotationFocus,
} from '@shikijs/transformers';
import remarkGemoji from 'remark-gemoji';
import { defineCollection, defineConfig, s } from 'velite';

const changelog = defineCollection({
	name: 'Changelog',
	pattern: 'CHANGELOG.md',
	single: true,
	schema: s.object({
		content: s.mdx({
			remarkPlugins: [remarkGemoji],
		}),
	}),
});

const experiments = defineCollection({
	name: 'Experiments',
	pattern: 'src/ui/modules/labs/_experiments/**/doc.mdx',
	schema: s.object({
		slug: s.enum(['artificial-delay']),
		date: s.isodate(),
		title: s.string(),
		description: s.string(),
		keywords: s.array(s.string()),
		content: s.mdx(),
		metadata: s.metadata(),
		author: s.string(),
	}),
});

const legalFiles = defineCollection({
	name: 'Legals',
	pattern: 'src/content/legals/**.mdx',
	schema: s.object({
		slug: s.string(),
		title: s.string(),
		description: s.string(),
		content: s.mdx(),
	}),
});

export default defineConfig({
	root: '.',
	collections: { changelog, experiments, legalFiles },
	mdx: {
		rehypePlugins: [
			[
				rehypeShiki as any,
				{
					theme: 'aurora-x',
					transformers: [
						{
							code: (node: any) => {
								//If node is not in a pre tag, it's not a code block => add class 'in-block
								node.properties.className = ['in-code-block'];
							},
						},
						transformerMetaHighlight(),
						transformerMetaWordHighlight(),
						transformerNotationFocus(),
					],
				},
			],
		],
	},
});
