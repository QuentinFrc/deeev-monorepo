import React from 'react';
import { VariantProps } from 'tailwind-variants';

import { ExtractSafeVariant } from '@/types/style';
import { cn, isVariant } from '#utils';

import { innerEffect } from '../cn';

type InnerEffectProps = React.ComponentPropsWithoutRef<'span'> &
	ExtractSafeVariant<VariantProps<typeof innerEffect>>;

const InnerEffect: React.FC<InnerEffectProps> = ({
	className,
	safeVariant,
	...props
}) => {
	return (
		isVariant(innerEffect, safeVariant) && (
			<span className={cn(innerEffect({ variant: safeVariant }), className)} {...props} />
		)
	);
};

export { InnerEffect };
