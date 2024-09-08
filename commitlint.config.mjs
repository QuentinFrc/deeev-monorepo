const Config = {
	extends: ['@commitlint/config-conventional'],
	formatter: '@commitlint/format',
	rules: {
		'scope-enum': [1, 'always', ['configs', 'ui', 'utils', 'web', 'docs', 'deps']],
		'type-enum': [
			2,
			'always',
			[
				'feat',
				'fix',
				'docs',
				'style',
				'refactor',
				'test',
				'chore',
				'revert',
				'ci',
				'perf',
				'build',
				'release',
				'wip',
				'merge',
			],
		],
	},
};

export default Config;