import React from 'react';

import { cn, tv } from '#utils';

import * as Badge from '../badge';
import { BadgeRootProps } from '../badge';

const badgeGroupVariants = tv({
	extend: Badge.styles,
	slots: {
		root: ['gap-3 rounded-xl p-1 pr-3'],
		content: ['inline-flex max-w-full items-center justify-start gap-1 *:pl-1'],
	},
});

const { root, content } = badgeGroupVariants();

export type BadgeGroupRootProps = Pick<BadgeRootProps, 'variant'> &
	React.PropsWithChildren<{}>;
const BadgeGroupRoot: React.FC<BadgeGroupRootProps> = ({ variant, ...props }) => (
	<div className={cn(root({ variant, type: 'outline' }))} {...props} />
);

type BadgeGroupContentProps = React.PropsWithChildren<{}>;
const BadgeGroupContent: React.FC<BadgeGroupContentProps> = ({ ...props }) => (
	<span className={cn(content())} {...props} />
);

export {
	BadgeGroupRoot,
	BadgeGroupContent,
	//
	BadgeGroupRoot as Root,
	BadgeGroupContent as Content,
};
