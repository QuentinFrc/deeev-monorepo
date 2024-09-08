import plugin from 'tailwindcss/plugin';

/**
 * Plugin to add border-radius utilities, allow calc relative to base border-radius theme value
 * Useful to adjust border-radius for outer or inner elements
 */
export const RoundedCalcRelative = () => {
	return plugin(({ matchUtilities, theme }) => {
		const roundedBases = ['sm', 'md', 'lg', 'xl'];

		roundedBases.forEach((base) => {
			matchUtilities({
				[`rounded-${base}-plus`]: (value: string) => {
					return {
						'border-radius': `calc(${theme(`borderRadius.${base}`)} + ${value})`,
					};
				},
				[`rounded-${base}-minus`]: (value: string) => {
					return {
						'border-radius': `calc(${theme(`borderRadius.${base}`)} - ${value})`,
					};
				},
			});
		});
	});
};
