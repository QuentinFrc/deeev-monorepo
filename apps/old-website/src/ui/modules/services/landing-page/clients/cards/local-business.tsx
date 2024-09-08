import React from 'react';

import * as Card from './base';

export const LocalBusinessCard = () => (
	<Card.Root style={{ '--color': '28 50% 50%' } as React.CSSProperties}>
		<Card.Header>
			<Card.Icon icon={'LocalBusiness'} />
			<Card.Title>Business Local</Card.Title>
		</Card.Header>
		<Card.Content size={'sm'} className={'space-y-2'}>
			<p>
				Vous êtes un commerce de proximité, un restaurant, un artisan ou un indépendant ?
			</p>
			<p>
				La landing page est un excellent moyen de{' '}
				<span className="font-semibold">
					vous faire connaître et attirer de nouveaux clients.
				</span>
			</p>
		</Card.Content>
	</Card.Root>
);
