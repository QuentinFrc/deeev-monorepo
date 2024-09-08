'use client';

import React from 'react';

import { Container } from '@repo/ui/container';

import { SectionHeading } from '../_components/section-heading';
import { InspirationCard, MaintenanceCard, OtherCard, VitrineCard } from './cards';

export const Pricing = () => {
	return (
		<section id={'#pricing'} className={'scroll-m-[var(--nav-height,0)]'}>
			<Container
				className={'flex w-full flex-col justify-center gap-16 py-16 min-h-screen-80'}
				size={'xl'}>
				<SectionHeading icon={'Star'} description={'Nos services'} headingLevel={'H2'}>
					Ce que nous faisons de mieux
				</SectionHeading>
				<div className="grid items-start gap-8 py-4 md:grid-cols-2 md:gap-4 xl:grid-cols-3">
					<div>
						<VitrineCard />
					</div>
					<div className={'self-center max-md:-order-1 md:row-span-2 xl:row-span-1'}>
						<InspirationCard />
					</div>
					<div>
						<OtherCard />
					</div>
				</div>
				<MaintenanceCard />
			</Container>
		</section>
	);
};
