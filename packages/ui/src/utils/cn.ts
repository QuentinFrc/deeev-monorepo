import baseConfig from '#tailwind.config';
import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';
import resolveConfig from 'tailwindcss/resolveConfig';

const config = resolveConfig(baseConfig);

type AdditionalClassGroups = 'font-fluid' | 'font-size-fluid-max' | 'font-size-fluid-min';
type AdditionalThemeIds = never;

const fluidFontSizes = Object.keys(config.theme.fontSize).filter((v) => v !== 'fluid');

const twMerge = extendTailwindMerge<AdditionalClassGroups, AdditionalThemeIds>({
	override: {
		conflictingClassGroups: {
			'font-size': ['font-size-fluid-max', 'font-size-fluid-min'],
		},
	},
	extend: {
		classGroups: {
			'font-size': [{ text: ['fluid'] }],
			'font-size-fluid-max': [{ 'text-max': fluidFontSizes }],
			'font-size-fluid-min': [{ 'text-min': fluidFontSizes }],
		},
	},
});

/**
 * Classnames utility
 * @param inputs The classnames to merge
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
