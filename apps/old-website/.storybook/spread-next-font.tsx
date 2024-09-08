'use client';

import { useEffect } from '@storybook/addons';
import { Decorator } from '@storybook/react';

export const spreadNextFont: Decorator = (fn) => {
	useEffect(() => {
		// @ts-ignore
		const main = document.querySelector('main');
		if (main) {
			const classes = main.className.split(' ');
			// @ts-ignore
			document.body.classList.add(...classes);
		}
	}, []);

	return fn();
};
