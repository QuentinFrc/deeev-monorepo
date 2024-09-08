import React from 'react';

import { Breakpoint, Breakpoints } from '@/lib/tailwind';

type MediaQueryParams = {
	breakpoint: Breakpoint;
	type: 'min' | 'max';
};

const query = ({ breakpoint, type }: MediaQueryParams) => {
	const breakValue = Breakpoints[breakpoint];
	const query = `(min-width: ${breakValue}px)`;
	return type === 'min' ? query : `not all and ${query}`;
};

export function useMediaQuery(params: MediaQueryParams) {
	const [value, setValue] = React.useState(false);

	React.useEffect(() => {
		function onChange(event: MediaQueryListEvent) {
			setValue(event.matches);
		}

		const result = matchMedia(query(params));
		result.addEventListener('change', onChange);
		setValue(result.matches);

		return () => result.removeEventListener('change', onChange);
	}, [params]);

	return value;
}
