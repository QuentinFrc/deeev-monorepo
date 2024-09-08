import React from 'react';

import { TooltipProvider } from '@repo/ui/tooltip';

import { AnalyticsProvider } from './analytics';
import { QueryProvider } from './query-client';
import { ShortcutsProvider } from './shortcuts';

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => (
	<AnalyticsProvider>
		<QueryProvider>
			<ShortcutsProvider>
				<TooltipProvider>{children}</TooltipProvider>
			</ShortcutsProvider>
		</QueryProvider>
	</AnalyticsProvider>
);
