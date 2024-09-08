import React from 'react';

import { Container } from '@repo/ui/container';

import { SectionHeading } from '../_components/section-heading';
import { Cards } from './cards';

export const Design = () => {
	return (
		<Container
			id={'design'}
			size={'xl'}
			className={'scroll-m-[var(--nav-height,0)] py-16'}>
			<AsideContent />
			<Cards />
		</Container>
	);
};

const AsideContent = () => (
	<div className={'relative z-10 flex min-w-0 flex-col justify-center gap-6'}>
		<SectionHeading
			className={'[text-wrap:balance] lg:max-w-[400px]'}
			headingLevel={'H2'}
			description={'Spécialisé et expert'}
			icon={'Star'}>
			Nos créations suivent les fondamentaux.
		</SectionHeading>
	</div>
);
