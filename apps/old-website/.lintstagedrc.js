const path = require('path');

const buildEslintCommand = (filenames) =>
	`pnpm lint --file ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(' --file ')}`;

const buildPrettierCommand = (filenames) => `pnpm format ${filenames.join(' ')}`;

module.exports = {
	// Type check TypeScript files
	/*'**!/!*.{ts,tsx}': () => 'yarn tsc --noEmit',*/
	//disabled because : .next/types/app/layout.ts(8,13) : Property 'manifest' is incompatible with index signature.

	// Lint & Prettify TS and JS files
	'**/*.{js,jsx,ts,tsx}': [buildEslintCommand, buildPrettierCommand],

	// Prettify only Markdown, CSS and JSON files
	'**/*.{md,json,mdx,css}': buildPrettierCommand,
};
