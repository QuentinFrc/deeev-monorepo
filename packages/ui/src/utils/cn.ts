import baseConfig from '#tailwind.config';
import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge, validators } from 'tailwind-merge';
import resolveConfig from 'tailwindcss/resolveConfig';

import { withPrefix } from './tw-merge-with-prefix';

const config = resolveConfig(baseConfig);

export type ClassDefinition = string | ClassValidator | ClassObject;
export type ClassValidator = (classPart: string) => boolean;

type ClassObject = Record<string, readonly ClassDefinition[]>;

type AdditionalClassGroups =
	| 'font-fluid'
	| 'font-size-fluid-max'
	| 'font-size-fluid-min'
	| 'rounded-minus'
	| 'rounded-plus';
type AdditionalThemeIds = never;

const fluidFontSizes = Object.keys(config.theme.fontSize).filter((v) => v !== 'fluid');
const roundedValues = Object.keys(config.theme.borderRadius).filter(
	(v) => v !== 'DEFAULT',
);

const twMerge = extendTailwindMerge<AdditionalClassGroups, AdditionalThemeIds>(
	{
		extend: {
			classGroups: {
				'font-size': [{ text: ['fluid'] }],
				rounded: roundedValues.map((value) => ({
					[`rounded-${value}-minus`]: [
						(value: string) => validators.isArbitraryValue(value),
					],
					[`rounded-${value}-plus`]: [
						(value: string) => validators.isArbitraryValue(value),
					],
				})),
				'font-size-fluid-max': [{ 'text-max': fluidFontSizes }],
				'font-size-fluid-min': [{ 'text-min': fluidFontSizes }],
			},
			conflictingClassGroups: {
				'font-size': ['font-size-fluid-max', 'font-size-fluid-min'],
			},
		},
	},
	withPrefix({
		prefix: config.prefix,
	}),
);

/**
 * Classnames utility
 * @param inputs The classnames to merge
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
