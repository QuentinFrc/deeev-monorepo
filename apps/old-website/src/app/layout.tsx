import React from 'react';

import '@/styles/globals.css';

import { fontClassNames } from '@/config/font';
import { cn } from '@/lib/utils';
import { Toaster } from '@repo/ui/sonner';
import { Dialog as ContactDialog } from '@ui/components/contact';
import { TailwindIndicator } from '@ui/components/tw-indicator';
import { Providers } from '@/app/_providers/providers';

import { PublicEnvScript } from './_providers/public-env-script';
import { RootJsonLd } from './seo-jsonld';

export * from '@/config/next-metadata';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<PublicEnvScript />
			</head>
			<Providers>
				<body className={cn(fontClassNames)}>
					<div vaul-drawer-wrapper={''}>{children}</div>
					<Toaster />
					<ContactDialog />
					<TailwindIndicator />
					<RootJsonLd />
				</body>
			</Providers>
		</html>
	);
}
