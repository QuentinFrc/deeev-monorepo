import React from 'react';

import { cn } from '@/lib/utils';
import { Icon } from '@repo/ui/icons';
import * as Tooltip from '@repo/ui/tooltip';
import { TooltipContentProps, TooltipTriggerProps } from '@repo/ui/tooltip';

export type SimpleTooltipProps = React.ComponentPropsWithoutRef<typeof Tooltip.Root> &
	Pick<TooltipTriggerProps, 'className' | 'focusShape'> &
	Pick<TooltipContentProps, 'size'> & {
		content: React.ReactNode;
		withIcon?: boolean;
	};
export const SimpleTooltip: React.FC<SimpleTooltipProps> = ({
	withIcon = false,
	content,
	children,
	size,
	className,
	focusShape,
	...props
}) => {
	return (
		<Tooltip.Root {...props}>
			<Tooltip.Trigger
				focusShape={focusShape}
				className={cn(withIcon && 'inline-flex items-center gap-1', className)}>
				{children} {withIcon && <Icon i={'Info'} />}
			</Tooltip.Trigger>
			<Tooltip.Content size={size}>{content}</Tooltip.Content>
		</Tooltip.Root>
	);
};
