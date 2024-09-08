import React from 'react';

import { Container } from '@repo/ui/container';

import { SectionHeading } from '../_components/section-heading';
import * as DevCard from './cards';

export const Development = () => {
	return (
		<Container size={'xl'} className={'h-max py-16 lg:h-screen lg:max-h-[800px]'}>
			<div className="mb-16 space-y-4">
				<SectionHeading
					headingLevel={'H2'}
					description={'Rapidité et performance'}
					subtext={
						'Nous créons des sites web rapides et performants. Tout est pensé pour que vos utilisateurs puissent profiter de votre site web sans attendre et sans frustration.'
					}
					icon={'ZapFast'}>
					Nos solutions sont optimisées.
				</SectionHeading>
			</div>
			<div className="flex flex-wrap items-stretch justify-start gap-4 sm:justify-center">
				<DevCard.CardPerf />
				<DevCard.CardAccess />
				<DevCard.CardOpt />
				<DevCard.CardUpdate />
			</div>
		</Container>
	);
};
