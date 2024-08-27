const Config = {
    extends: ['@commitlint/config-conventional'],
    formatter: '@commitlint/format',
    rules: {"scope-enum": [1, "always", ['configs', 'ui', 'utils', 'web', 'docs', 'deps']]}
};

export default Config;