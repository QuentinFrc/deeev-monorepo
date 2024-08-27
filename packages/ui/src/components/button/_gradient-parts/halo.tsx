import React from 'react';
import { VariantProps } from 'tailwind-variants';

import { cn } from '#utils';

import { effectVariant, haloVariant } from './cn';

type HaloProps = React.ComponentPropsWithoutRef<'div'> &
	Required<Pick<VariantProps<typeof effectVariant>, 'layout' | 'size'>>;

const Halo: React.FC<HaloProps> = ({ layout, size, children }) => (
	<div className={cn(effectVariant({ layout, size }))}>
		{children}
		<span className={cn(haloVariant({ layout, size }))} />
	</div>
);

export { Halo };
export type { HaloProps };
