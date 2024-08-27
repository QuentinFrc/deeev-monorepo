const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

const twConfig = resolve(process.cwd(), 'tailwind.config.ts');

/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: [
		'next/core-web-vitals',
		'plugin:tailwindcss/recommended',
		'prettier',
		'turbo',
	],
	parser: '@typescript-eslint/parser',
	rules: {
		'tailwindcss/classnames-order': 'error',
		'@next/next/no-html-link-for-pages': 'off',
	},
	globals: {
		React: true,
		JSX: true,
	},
	env: {
		node: true,
		browser: true,
	},
	plugins: ['only-warn', 'tailwindcss'],
	settings: {
		'import/resolver': {
			typescript: {
				project,
			},
		},
		tailwindcss: {
			config: twConfig,
			callees: ['cn'],
		},
	},
	ignorePatterns: [
		'.next',
		'.turbo',
		'node_modules',
		'**/*.js',
		'**/*.mjs',
		'**/*.jsx',
	],
	overrides: [{ files: ['*.ts?(x)'] },],
};
