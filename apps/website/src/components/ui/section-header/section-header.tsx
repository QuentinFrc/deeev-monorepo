import React from 'react';

import { BadgeLabel, BadgeRoot } from '@repo/ui/badge';
import { Headings, Typography } from '@repo/ui/typography';

type SectionHeaderProps = React.ComponentPropsWithoutRef<'div'>;

export const SectionHeader = ({ children }: SectionHeaderProps) => {
	return <div className={'flex flex-col items-stretch gap-6 mb-16'}>{children}</div>;
};

export const SectionHeaderAnchor = ({ children }: { children: React.ReactNode }) => {
	return (
		<BadgeRoot className={''} variant={'neutral'} type={'fill'}>
			<BadgeLabel>{children}</BadgeLabel>
		</BadgeRoot>
	);
};

export const SectionHeaderTitle = ({ children }: { children: React.ReactNode }) => {
	return <Headings.H2>{children}</Headings.H2>;
};

export const SectionHeaderDescription = ({ children }: { children: React.ReactNode }) => {
	return <Typography.Default color={'contrasted-mid'}>{children}</Typography.Default>;
};
