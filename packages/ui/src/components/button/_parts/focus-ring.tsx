import React from 'react';
import { VariantProps } from 'tailwind-variants';

import { ExtractSafeVariant } from '@/types/style';
import { cn, isVariant } from '#utils';
import {
	FocusRingProps as PrimitiveRingProps,
	FocusRing as RingPrimitive,
} from '#components/focus-ring';

import { focus } from '../cn';

type FocusRingProps = ExtractSafeVariant<VariantProps<typeof focus>> &
	Pick<VariantProps<typeof focus>, 'disabled'> &
	PrimitiveRingProps;
const FocusRing: React.FC<FocusRingProps> = ({
	safeVariant,
	disabled,
	children,
	...props
}) => {
	const variant = isVariant(focus, safeVariant) ? safeVariant : undefined;
	return (
		<RingPrimitive within focusRingClass={cn(focus({ variant, disabled }))} {...props}>
			{children}
		</RingPrimitive>
	);
};

export { FocusRing };
