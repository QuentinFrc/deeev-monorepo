import React from 'react';

import * as Badge from '@repo/ui/badge';
import { Icon } from '@repo/ui/icons';

import CloudPattern from '../lights/fuchsia.png';
import * as TeamCard from './base';
import { TeamMember } from './base';

export const CloudEngineerCard: React.FC<TeamMember> = ({
	firstname = '',
	lastname = '',
	tasks = [],
	avatarImage,
}) => {
	return (
		<TeamCard.Root>
			<TeamCard.Content>
				<TeamCard.Background src={CloudPattern} alt={"Trainé d'astéroïdes fuchsia"} />
				<TeamCard.Header>
					<TeamCard.Avatar
						variant={'cloud'}
						avatarImage={avatarImage}
						lastname={lastname}
						firstname={firstname}
					/>
					<TeamCard.Title firstname={firstname} lastname={lastname} />
					<Badge.Root variant={'fuchsia'} type={'outline'}>
						<Badge.Label>Cloud Engineer</Badge.Label>
						<Icon i={'Globe'} size={'sm'} />
					</Badge.Root>
				</TeamCard.Header>
				<TeamCard.Tasks tasks={tasks} />
			</TeamCard.Content>
		</TeamCard.Root>
	);
};
