import React from 'react';

import * as Badge from '@repo/ui/badge';
import { Icon } from '@repo/ui/icons';

import DeveloperPattern from '../lights/cyan.png';
import * as TeamCard from './base';
import { TeamMember } from './base';

export const DeveloperCard: React.FC<TeamMember> = ({
	firstname = '',
	lastname = '',
	tasks = [],
	avatarImage,
}) => {
	return (
		<TeamCard.Root>
			<TeamCard.Content>
				<TeamCard.Background src={DeveloperPattern} alt={"Trainé d'astéroïdes cyan"} />
				<TeamCard.Header>
					<TeamCard.Avatar
						variant={'developer'}
						avatarImage={avatarImage}
						lastname={lastname}
						firstname={firstname}
					/>
					<TeamCard.Title firstname={firstname} lastname={lastname} />
					<Badge.Root variant={'cyan'} type={'outline'}>
						<Badge.Label>Full stack Developer</Badge.Label>
						<Icon i={'Code'} size={'sm'} />
					</Badge.Root>
				</TeamCard.Header>
				<TeamCard.Tasks tasks={tasks} />
			</TeamCard.Content>
		</TeamCard.Root>
	);
};
