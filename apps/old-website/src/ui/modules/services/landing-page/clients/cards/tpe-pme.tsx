import React from 'react';

import * as Card from './base';

export const TpePmeCard = () => (
	<Card.Root style={{ '--color': '180 73% 50%' } as React.CSSProperties}>
		<Card.Header>
			<Card.Icon icon={'Users'} />
			<Card.Title>TPE/PME</Card.Title>
		</Card.Header>
		<Card.Content size={'sm'} className={'space-y-2'}>
			<p>Vous êtes une TPE/PME ?</p>
			<p>
				La landing page est un outil indispensable pour{' '}
				<span className="font-semibold">convertir vos visiteurs en clients.</span>
			</p>
		</Card.Content>
	</Card.Root>
);
