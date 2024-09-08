import React from 'react';

import { Agency } from '@ui/sections/agency';
import { Design } from '@ui/sections/design/design';
import { Development } from '@ui/sections/development';
import { Faq } from '@ui/sections/faq';
import { Hero } from '@ui/sections/hero';
import { Pricing } from '@ui/sections/pricing';
import { Team } from '@ui/sections/team';

import { Missions } from './sections/missions';

export const HomePage = () => {
	return (
		<main className="min-h-screen">
			<Hero alignment={'center'} />
			<Agency />
			<Design />
			<Development />
			<Missions />
			<Pricing />
			<Team />
			<Faq />
		</main>
	);
};
