import React from 'react';

import * as Badge from '@repo/ui/badge';
import { Icon, IconName } from '@repo/ui/icons';

type PricingBadgeProps = React.ComponentPropsWithoutRef<typeof Badge.Root> & {
	icon?: false | IconName;
};
export const PricingBadge: React.FC<PricingBadgeProps> = ({
	children,
	icon,
	...props
}) => (
	<Badge.Root {...props}>
		<Badge.Label>{children}</Badge.Label>
		{icon && <Icon i={icon} />}
	</Badge.Root>
);
