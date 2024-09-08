import React from 'react';
import Link from 'next/link';

import { Container } from '@repo/ui/container';
import { Logo } from '@ui/components/logo';

export type LabsLayoutProps = React.PropsWithChildren<{}>;
export const LabsLayout = ({ children }: LabsLayoutProps) => (
	<div className={'pt-[96px]'}>
		<nav
			className={
				'fixed top-0 z-50 w-full rounded-md bg-background/60 px-4 py-6 backdrop-blur-md'
			}>
			<Container size={'2xl'}>
				<div className={'flex items-center justify-between gap-4'}>
					<Logo full uniqueId={'lab-nav-logo'} />
					<div>
						<Link href={'/'}>Retourner au site</Link>
					</div>
				</div>
			</Container>
		</nav>
		<main className={'flex min-h-screen flex-col'}>{children}</main>
	</div>
);
