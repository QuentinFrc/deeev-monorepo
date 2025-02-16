'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
export const QueryProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
