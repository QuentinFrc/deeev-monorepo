'use client';

import React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Icon, IconName } from '#components/icons';
import { cn } from '#utils';
import { tv, type VariantProps } from 'tailwind-variants';

const labelVariants = tv({
	base: [
		'ui-peer/label ui-inline-flex ui-items-center ui-gap-2 ui-text-sm ui-text-contrasted-mid',
		'peer-disabled:ui-pointer-events-none peer-disabled:ui-opacity-50',
	],
	variants: {
		disabled: {
			true: 'ui-opacity-50',
		},
		error: {
			true: 'ui-text-danger-500',
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
