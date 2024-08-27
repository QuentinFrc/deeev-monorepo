/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: ['@repo/react'], // @see <root>/packages/eslint-config-react
	parser: '@typescript-eslint/parser',
};
