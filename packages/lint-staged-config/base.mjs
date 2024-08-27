import { ESLint } from 'eslint'

const removeIgnoredFiles = async (files) => {
	const eslint = new ESLint();
	const isIgnored = await Promise.all(
		files.map((file) => eslint.isPathIgnored(file)),
	);
	return files.filter((_, i) => !isIgnored[i]);
};

const buildEslintCommand = async (filenames) => {
	const filesToLint = await removeIgnoredFiles(filenames);
	return `eslint --max-warnings 0 ${filesToLint.join(' ')}`;
};


const buildPrettierCommand = (filenames) =>
	`pnpm prettier -w ${filenames.join(' ')}`;

const Config = {
	// Lint & Prettify TS and JS files
	'**/*.{mjs,js,jsx,ts,tsx}': [buildEslintCommand, buildPrettierCommand],
	'**/*.{md,json,mdx,css}': buildPrettierCommand,
};

export default Config;
