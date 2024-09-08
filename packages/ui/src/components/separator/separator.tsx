'use client';

import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cn, tv, VariantProps } from '#utils';

const separatorStyle = tv({
	base: 'ui-shrink-0 ui-bg-border',
	variants: {
		orientation: {
			horizontal: 'ui-h-px',
			vertical: 'ui-w-px',
		},
		inFlexParent: {
			true: '',
		},
	},
	compoundVariants: [
		{
			orientation: 'horizontal',
			inFlexParent: false,
			className: 'ui-w-full',
		},
		{
			orientation: 'vertical',
			inFlexParent: false,
			className: 'ui-h-full',
		},
	],
	defaultVariants: {
		inFlexParent: false,
	},
});

type SeparatorStyleProps = VariantProps<typeof separatorStyle>;
type SeparatorProps = Pick<SeparatorStyleProps, 'inFlexParent'> &
	React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>;

const Separator = React.forwardRef<
	React.ElementRef<typeof SeparatorPrimitive.Root>,
	SeparatorProps
>(
	(
		{
			className,
			inFlexParent = false,
			orientation = 'horizontal',
			decorative = true,
			...props
		},
		ref,
	) => (
		<SeparatorPrimitive.Root
			ref={ref}
			decorative={decorative}
			orientation={orientation}
			className={cn(separatorStyle({ orientation, inFlexParent }), className)}
			{...props}
		/>
	),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
