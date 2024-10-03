import { Config, getDefaultConfig, mergeConfigs } from 'tailwind-merge';

export const withPrefix = <T extends string, V extends string>({
	prefix,
}: {
	prefix: string;
}) => {
	return (config: Config<T, V>) => {
		const c = mergeConfigs(config, getDefaultConfig());

		const classGroupWithPrefix = Object.entries(c.classGroups).map(([group, el]) => {
			return {
				[`${group}`]: [
					...el,
					...el.map((def) => {
						if (typeof def === 'string') {
							return prefix + def;
						} else if (typeof def === 'object') {
							const key = Object.keys(def)[0];
							if (key === undefined) throw new Error('Invalid class object');
							return { [prefix + key]: def[key] };
						}
						return def;
					}),
				],
			};
		});

		return mergeConfigs(c, {
			override: {
				classGroups: Object.values(classGroupWithPrefix).reduce((acc, el) => {
					return { ...acc, ...el };
				}, {}),
			},
		});
	};
};
