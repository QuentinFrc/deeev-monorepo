import { useEffect, useGlobals } from '@storybook/addons';
import { Decorator } from '@storybook/react';

export const useTheme: Decorator = (fn) => {
	const [{ theme }] = useGlobals();

	useEffect(() => {
		// @ts-ignore
		document.querySelector('html').className = theme;
	}, [theme]);

	return fn();
};
