import React from 'react';
import { cn } from '#utils';
import { VariantProps } from 'tailwind-variants';

import { innerEffect } from '../cn';

type InnerEffectProps = React.ComponentPropsWithoutRef<'span'> &
	VariantProps<typeof innerEffect>;

const InnerEffect: React.FC<InnerEffectProps> = ({ className, variant, ...props }) => {
	if (!variant) return null;
	return <span className={cn(innerEffect({ variant }), className)} {...props} />;
};

export { InnerEffect };
