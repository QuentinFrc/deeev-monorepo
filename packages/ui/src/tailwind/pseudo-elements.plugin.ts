import plugin from 'tailwindcss/plugin';

export const pseudoElements = () => {
	return plugin(({ addVariant }) => {
		addVariant('pseudo', ['&:after', '&:before']);
	});
};
