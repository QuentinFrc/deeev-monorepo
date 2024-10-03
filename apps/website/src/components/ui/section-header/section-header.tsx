import React from 'react';

import { BadgeLabel, BadgeRoot } from '@repo/ui/badge';
import { Headings, Typography } from '@repo/ui/typography';
import { cn, tv, VariantProps } from '@repo/ui/utils';

const variants = tv({
	slots: {
		header: 'flex flex-col gap-6',
	},
	variants: {
		align: {
			center: {
				header: 'items-center',
			},
		},
	},
});

const { header } = variants();

type SectionHeaderProps = React.ComponentPropsWithoutRef<'div'> &
	Pick<VariantProps<typeof variants>, 'align'>;

export const SectionHeader = ({
	children,
	align,
	className,
	...props
}: SectionHeaderProps) => {
	return (
		<div className={cn(header({ align }), className)} {...props}>
			{children}
		</div>
	);
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

type SectionHeaderDescriptionProps = React.ComponentPropsWithoutRef<
	typeof Typography.Default
>;
export const SectionHeaderDescription = ({
	children,
	...props
}: SectionHeaderDescriptionProps) => {
	return (
		<Typography.Default color={'contrasted-high'} {...props}>
			{children}
		</Typography.Default>
	);
};
