'use client';

import React from 'react';

export const useWindowSize = () => {
	const hasWindow = typeof window !== 'undefined';
	const getWindowDimensions = React.useCallback(() => {
		const width = hasWindow ? window.innerWidth : 0;
		const height = hasWindow ? window.innerHeight : 0;
		return {
			width,
			height,
		};
	}, [hasWindow]);

	const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());

	React.useEffect(() => {
		if (hasWindow) {
			const handleResize = () => {
				setWindowDimensions(getWindowDimensions());
			};

			window.addEventListener('resize', handleResize);
			return () => window.removeEventListener('resize', handleResize);
		}
	}, [getWindowDimensions, hasWindow]);

	return windowDimensions;
};
