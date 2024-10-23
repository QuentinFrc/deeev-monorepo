import baseConfig from '#tailwind.config';
import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge, validators } from 'tailwind-merge';
import resolveConfig from 'tailwindcss/resolveConfig';

import { withPrefix } from './tw-merge';

type AdditionalClassGroups =
	| 'font-fluid'
	| 'font-size-fluid-max'
	| 'font-size-fluid-min'
	| 'rounded-minus'
	| 'rounded-plus';
type AdditionalThemeIds = never;

const config = resolveConfig(baseConfig);
const fluidFontSizes = Object.keys(config.theme.fontSize).filter((v) => v !== 'fluid');
const roundedValues = Object.keys(config.theme.borderRadius).filter(
	(v) => v !== 'DEFAULT',
);

const twMerge = extendTailwindMerge<AdditionalClassGroups, AdditionalThemeIds>(
	{
		extend: {
			classGroups: {
				/*'font-size': [{ text: ['fluid'] }],*/
				rounded: roundedValues.map((value) => ({
					[`rounded-${value}-minus`]: [
						(value: string) => validators.isArbitraryValue(value),
					],
					[`rounded-${value}-plus`]: [
						(value: string) => validators.isArbitraryValue(value),
					],
				})),
				'font-fluid': [{ text: ['fluid'] }],
				'font-size-fluid-max': [{ 'text-max': fluidFontSizes }],
				'font-size-fluid-min': [{ 'text-min': fluidFontSizes }],
			},
			conflictingClassGroups: {
				'font-size': ['font-fluid', 'font-size-fluid-max', 'font-size-fluid-min'],
				'font-fluid': ['font-size'],
				'font-size-fluid-max': ['font-size'],
				'font-size-fluid-min': ['font-size'],
			},
		},
	},
	withPrefix('ui-'),
);

/**
 * Classnames utility
 * @param inputs The classnames to merge
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
