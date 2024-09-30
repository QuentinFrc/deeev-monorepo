import React from 'react';
import {
	FocusRingProps as PrimitiveRingProps,
	FocusRing as RingPrimitive,
} from '#components/focus-ring';
import { cn } from '#utils';
import { VariantProps } from 'tailwind-variants';

import { focus } from '../cn';

type FocusRingProps = Pick<VariantProps<typeof focus>, 'disabled' | 'variant'> &
	PrimitiveRingProps;
const FocusRing: React.FC<FocusRingProps> = ({
	variant,
	disabled,
	children,
	...props
}) => {
	return (
		<RingPrimitive within focusRingClass={cn(focus({ variant, disabled }))} {...props}>
			{children}
		</RingPrimitive>
	);
};

export { FocusRing };
