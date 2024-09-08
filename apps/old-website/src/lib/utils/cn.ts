import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';
import { createTV, VariantProps as TvVariantProps } from 'tailwind-variants';
import resolveConfig from 'tailwindcss/resolveConfig';

import { config as twConfig } from '@/styles/tailwind.config';

const config = resolveConfig(twConfig);

type AdditionalClassGroups =
	| 'font-fluid'
	| 'font-size-fluid-max'
	| 'font-size-fluid-min'
	| 'text-balance';
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
			'text-balance': ['text-balance'],
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

export const tv = createTV({
	twMerge: false,
});

export type VariantProps<T extends (...args: any) => any> = TvVariantProps<T>;
