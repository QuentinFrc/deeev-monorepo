import React from 'react';

import { cn } from '@/lib/utils';
import { Text } from '@ui/components/typography';

type LabSectionSpyProps = React.PropsWithChildren<{
	name: string;
}>;

export const Section: React.FC<LabSectionSpyProps> = ({ name, children }) => {
	return (
		<div className={'relative sm:ml-24 lg:ml-12 xl:ml-0'}>
			<div
				className="absolute left-0 top-0 hidden h-full -translate-x-full pr-4 sm:block"
				aria-hidden={true}>
				<Text size={'sm'} contrast={4} className={cn('sticky top-[80px] mb-4 w-max')}>
					{name}
				</Text>
			</div>
			{children}
		</div>
	);
};
