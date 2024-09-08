import resolveConfig from 'tailwindcss/resolveConfig';

import { config as twConfig } from '@/styles/tailwind.config';

export const tailwindConfig = resolveConfig(twConfig);

const toNumber = (value: string) => Number(value.replace('px', ''));

export const Breakpoints = {
	xs: toNumber(tailwindConfig.theme.screens.xs),
	sm: toNumber(tailwindConfig.theme.screens.sm),
	md: toNumber(tailwindConfig.theme.screens.md),
	lg: toNumber(tailwindConfig.theme.screens.lg),
	xl: toNumber(tailwindConfig.theme.screens.xl),
	'2xl': toNumber(tailwindConfig.theme.screens['2xl']),
};

export type Breakpoint = keyof typeof Breakpoints;
