import plugin from 'tailwindcss/plugin';

type Params = { minBreakpoint?: number; maxBreakpoint?: number };

export const fluidTypography = (params?: Params) => {
	return plugin(({ matchUtilities, theme }) => {
		const defaultMaxBreakpoint = params?.minBreakpoint ?? theme('screens[2xl]');
		const defaultMinBreakpoint = params?.maxBreakpoint ?? theme('screens[xs]');
		matchUtilities(
			{
				'text-min': (value: string, { modifier }) => ({
					'--min-breakpoint': modifier ?? defaultMinBreakpoint,
					'--min-breakpoint-no-unit': `${parseFloat(modifier ?? defaultMinBreakpoint)}`,
					'--fs-min': value,
					'--fs-min-no-unit': `${parseFloat(value)}`,
				}),
				'text-max': (value: string, { modifier }) => ({
					'--max-breakpoint': modifier ?? defaultMaxBreakpoint,
					'--max-breakpoint-no-unit': `${parseFloat(modifier ?? defaultMaxBreakpoint)}`,
					'--fs-max': value,
					'--fs-max-no-unit': `${parseFloat(value)}`,
				}),
			},
			{
				values: theme('fontSize'),
				modifiers: theme('screens'),
				type: 'length',
			},
		);
	});
};
