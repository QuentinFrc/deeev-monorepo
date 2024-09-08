'use client';

import React from 'react';
import {
	FocusRing as AriaFocusRing,
	FocusRingProps as AriaFocusRingProps,
} from '@react-aria/focus';
import { cn } from '#utils';

type FocusRingProps = AriaFocusRingProps;
export const FocusRing: React.FC<FocusRingProps> = ({
	focusRingClass,
	children,
	...props
}) => (
	<AriaFocusRing
		focusRingClass={cn(
			'ui-ring-1 ui-ring-foreground ui-ring-offset-1 ui-ring-offset-background',
			focusRingClass,
		)}
		{...props}>
		{children}
	</AriaFocusRing>
);

export type { FocusRingProps };
