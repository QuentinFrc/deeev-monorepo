import React from 'react';
import { VariantProps } from 'tailwind-variants';

import { cn } from '#utils';

import { borderVariant, wrapperVariant } from './cn';

type BorderProps = React.ComponentPropsWithoutRef<'div'> &
	Required<Pick<VariantProps<typeof wrapperVariant>, 'size'>>;

const Border: React.FC<BorderProps> = ({ size, children }) => (
	<div className={cn(wrapperVariant({ size }))}>
		<span className={cn(borderVariant({ size }))} />
		{children}
	</div>
);

export { Border };
export type { BorderProps };
