import { Config, mergeConfigs } from 'tailwind-merge';

export type ThemeObject<ThemeGroupIds extends string> = Record<
	ThemeGroupIds,
	ClassGroup<ThemeGroupIds>
>;
type ClassGroup<ThemeGroupIds extends string> = readonly ClassDefinition<ThemeGroupIds>[];
export type ClassValidator = (classPart: string) => boolean;
export interface ThemeGetter {
	(theme: ThemeObject<string>): ClassGroup<string>;
	isThemeGetter: true;
}
type ClassDefinition<ThemeGroupIds extends string> =
	| string
	| ClassValidator
	| ThemeGetter
	| ClassObject<ThemeGroupIds>;

type ClassObject<ThemeGroupIds extends string> = Record<
	string,
	readonly ClassDefinition<ThemeGroupIds>[]
>;

export const withPrefix =
	(prefix: string) =>
	<T extends string, V extends string>(config: Config<T, V>) => {
		const classGroupsArray = Object.entries(config.classGroups) as [T, ClassGroup<V>][];

		const defaultWithPrefix = classGroupsArray
			.map(([key, value]) => {
				const valueWithPrefix = value
					.map((value) => {
						if (typeof value === 'string') {
							console.log(value);
							return [value, `${prefix}${value}`] as const;
						}
						const [k, v] = Object.entries(value)[0]! as [
							string,
							ClassDefinition<string>[],
						];
						return [{ [`${k}`]: v }, { [`${prefix}${k}`]: v }] as const;
					})
					.flat();
				return {
					[`${key}`]: valueWithPrefix,
				};
			})
			.reduce((acc, el) => ({ ...acc, ...el }), {});

		const configWithClassGroupPrefixed = {
			override: {
				classGroups: defaultWithPrefix,
			},
		} as const;

		return mergeConfigs(config, configWithClassGroupPrefixed);
	};
