import React from 'react';

import { MainNavbar } from '@ui/components/main-nav';
import { Footer } from '@ui/sections/footer';
import { HomeJsonLd } from '@/app/seo-jsonld';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<MainNavbar />
			{children}
			<Footer />
			<HomeJsonLd />
		</>
	);
}
