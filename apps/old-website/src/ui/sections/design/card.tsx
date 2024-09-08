import React from 'react';

import { Icon, IconName } from '@repo/ui/icons';

export type CardProps = {
	icon: IconName;
	title: string;
	description: string;
};

export const Card: React.FC<CardProps> = ({ icon, title, description }) => {
	return (
		<div className={'min-w-0 max-w-full text-contrasted md:mx-auto md:w-[384px]'}>
			<div className="inline-flex w-full items-center gap-1">
				<Icon size={'lg'} i={icon} />
				<h3
					className={
						'whitespace-nowrap font-sans text-lg font-medium leading-none text-contrasted-max'
					}>
					{title}
				</h3>
				<div className="ms-2 block h-px w-full grow rounded bg-border" />
			</div>
			<div className={'flex items-stretch gap-3'}>
				<div className="ms-2 w-px rounded bg-border" />
				<p className="text-base font-medium text-contrasted-min md:text-balance">
					{description}
				</p>
			</div>
		</div>
	);
};
