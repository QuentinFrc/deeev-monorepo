import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '#utils';

import { label } from '../cn';

type ButtonLabelProps = React.ComponentPropsWithoutRef<'span'> & { asChild?: boolean };
const ButtonLabel: React.FC<ButtonLabelProps> = ({ className, asChild, ...props }) => {
	const Comp = asChild ? Slot : 'span';

	return <Comp className={cn(label(), className)} {...props} />;
};

export { ButtonLabel, ButtonLabel as Label };
export type { ButtonLabelProps };
