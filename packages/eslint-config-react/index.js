const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

const twConfig = resolve(process.cwd(), 'tailwind.config.ts');

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:tailwindcss/recommended', 'prettier', 'turbo'],
	plugins: ['only-warn', 'tailwindcss'],
	'rules': {
		'react/prop-types': 'off',
		'tailwindcss/classnames-order': 'error',
	},
	globals: {
		JSX: true,
	},
	env: {
		browser: true,
	},
	settings: {
		'import/resolver': {
			typescript: {
				project,
			},
		},
		'react': {
			'version': 'detect',
		},
		tailwindcss: {
			config: twConfig,
			callees: ['cn'],
		},
	},
	ignorePatterns: [
		// Ignore dotfiles
		'.*.js',
		'lint-staged.mjs',
		'node_modules/',
		'dist/',
	],
	overrides: [
		// Force ESLint to detect .tsx files
		{ files: ['*.js?(x)', '*.ts?(x)'] },
	],
};
