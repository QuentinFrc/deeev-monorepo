import React from 'react';
import PlausibleProvider from 'next-plausible';

import { APP_URL, STATS_URL } from '@/config/env';

export const AnalyticsProvider = ({ children }: { children: React.ReactNode }) => {
	const DOMAIN = APP_URL.split('://')[1];
	return (
		<PlausibleProvider domain={DOMAIN} selfHosted customDomain={STATS_URL}>
			{children}
		</PlausibleProvider>
	);
};
