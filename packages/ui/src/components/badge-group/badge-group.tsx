import React from 'react';
import { cn, tv } from '#utils';

import * as Badge from '../badge';
import { BadgeRootProps } from '../badge';

const { root: baseRootStyle } = Badge.styles();

const badgeGroupVariants = tv({
	slots: {
		root: ['ui-gap-3 ui-rounded-xl ui-p-1 ui-pr-3'],
		content: [
			'ui-inline-flex ui-max-w-full ui-items-center ui-justify-start ui-gap-1 *:ui-pl-1',
		],
	},
});

const { root, content } = badgeGroupVariants();

export type BadgeGroupRootProps = Pick<BadgeRootProps, 'variant'> &
	React.PropsWithChildren;
const BadgeGroupRoot: React.FC<BadgeGroupRootProps> = ({ variant, ...props }) => (
	<div
		className={cn(baseRootStyle({ variant, type: 'outline', group: true }), root())}
		{...props}
	/>
);

type BadgeGroupContentProps = React.PropsWithChildren;
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
