import React from 'react';
import { VariantProps } from 'tailwind-variants';

import { ExtractSafeVariant } from '@/types/style';
import { cn, isVariant } from '#utils';

import { hover } from '../cn';

type HoverProps = ExtractSafeVariant<VariantProps<typeof hover>> &
	React.ComponentPropsWithoutRef<'span'>;

const HoverEffect: React.FC<HoverProps> = ({ safeVariant, className, ...props }) => {
	return (
		isVariant(hover, safeVariant) && (
			<span className={cn(hover({ variant: safeVariant }), className)} {...props} />
		)
	);
};

export { HoverEffect };
