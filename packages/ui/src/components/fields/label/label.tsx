'use client';

import React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '#utils';
import { Icon, IconName } from '#components/icons';

const labelVariants = tv({
	base: [
		'peer/label inline-flex items-center gap-2 text-sm text-contrasted-mid',
		'peer-disabled:pointer-events-none peer-disabled:opacity-50',
	],
	variants: {
		disabled: {
			true: 'opacity-50',
		},
		error: {
			true: 'text-danger-500',
		},
	},
});

type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
	VariantProps<typeof labelVariants> & {
		icon?: IconName;
		disabled?: boolean;
	};

const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, LabelProps>(
	({ className, children, icon, ...props }, ref) => (
		<LabelPrimitive.Root
			ref={ref}
			className={cn(labelVariants({ disabled: props.disabled }), className)}
			{...props}>
			{icon && <Icon i={icon} size={'sm'} />}
			{children}
		</LabelPrimitive.Root>
	),
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
export type { LabelProps };
