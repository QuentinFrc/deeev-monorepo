/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: ['@repo/react', 'plugin:storybook/recommended'], // @see <root>/packages/eslint-config-react
};
