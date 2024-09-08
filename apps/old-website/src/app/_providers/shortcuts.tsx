'use client';

import React from 'react';

import { useShortcuts } from '@/lib/hooks/use-shortcuts';

export const ShortcutsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const { handleKeyDown } = useShortcuts();
	React.useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [handleKeyDown]);

	return children;
};
