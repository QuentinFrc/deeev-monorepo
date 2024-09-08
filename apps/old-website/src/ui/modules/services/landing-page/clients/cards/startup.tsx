import React from 'react';

import * as Card from './base';

export const StartupCard = () => (
	<Card.Root style={{ '--color': '300 100% 50%' } as React.CSSProperties}>
		<Card.Header>
			<Card.Icon icon={'Rocket'} />
			<Card.Title>Startup</Card.Title>
		</Card.Header>
		<Card.Content size={'sm'} className={'space-y-2'}>
			<p>Vous êtes une startup, une entreprise en pleine croissance ?</p>
			<p>
				La landing page est un outil indispensable pour{' '}
				<span className="font-semibold">convertir vos visiteurs en clients.</span>
			</p>
		</Card.Content>
	</Card.Root>
);
