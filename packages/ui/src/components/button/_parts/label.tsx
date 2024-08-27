import React from 'react';

import { cn } from '#utils';

import { label } from '../cn';

type ButtonLabelProps = React.ComponentPropsWithoutRef<'span'>;
const ButtonLabel: React.FC<ButtonLabelProps> = ({ className, ...props }) => (
	<span className={cn(label(), className)} {...props} />
);

export { ButtonLabel, ButtonLabel as Label };
export type { ButtonLabelProps };
