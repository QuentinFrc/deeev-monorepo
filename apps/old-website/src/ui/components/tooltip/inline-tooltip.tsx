import React from 'react';

import { cn } from '@/lib/utils';

import { SimpleTooltip, SimpleTooltipProps } from './simple-tooltip';

type InlineTooltipProps = SimpleTooltipProps;
export const InlineTooltip: React.FC<InlineTooltipProps> = ({
	content,
	className,
	...props
}) => {
	return (
		<SimpleTooltip
			focusShape={'inline'}
			className={cn('underline', className)}
			content={content}
			{...props}
		/>
	);
};
