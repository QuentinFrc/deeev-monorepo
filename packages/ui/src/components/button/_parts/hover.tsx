import React from 'react';
import { cn } from '#utils';
import { VariantProps } from 'tailwind-variants';

import { hover } from '../cn';

type HoverProps = VariantProps<typeof hover> & React.ComponentPropsWithoutRef<'span'>;

const HoverEffect: React.FC<HoverProps> = ({ variant, className, ...props }) => {
	if (!variant) return null;
	return <span className={cn(hover({ variant }), className)} {...props} />;
};

export { HoverEffect };
