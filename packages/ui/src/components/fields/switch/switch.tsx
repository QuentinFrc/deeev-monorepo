'use client';

import React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cn } from '#utils';
import { tv, VariantProps } from 'tailwind-variants';

import { FieldContainer } from '../base';

const _switch = tv({
	slots: {
		root: [
			'ui-peer ui-inline-flex ui-shrink-0 ui-cursor-pointer ui-items-center ui-rounded-full ui-transition-colors',
			'disabled:ui-cursor-not-allowed disabled:ui-opacity-50',
		],
		thumb:
			'ui-pointer-events-none ui-block ui-rounded-full ui-border ui-border-background ui-bg-foreground ui-transition-transform data-[state=unchecked]:ui-translate-x-[3px]',
	},
	variants: {
		size: {
			sm: {
				root: 'ui-h-5 ui-w-9',
				thumb: 'ui-size-3.5 data-[state=checked]:ui-translate-x-[19px]',
			},
			md: {
				root: 'ui-h-6 ui-w-11',
				thumb: 'ui-size-4.5 data-[state=checked]:ui-translate-x-[23px]',
			},
		},
	},
	defaultVariants: {
		size: 'sm',
	},
});

const { root: switchRoot, thumb } = _switch();

type SwitchProps = React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> &
	VariantProps<typeof _switch>;

const Switch = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitives.Root>,
	SwitchProps
>(({ className, size = 'sm', ...props }, ref) => (
	<FieldContainer type={'switch'} disabled={props.disabled ?? false}>
		<SwitchPrimitives.Root
			className={cn(switchRoot({ size }), className)}
			{...props}
			ref={ref}>
			<SwitchPrimitives.Thumb className={cn(thumb({ size }))} />
		</SwitchPrimitives.Root>
	</FieldContainer>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
export type { SwitchProps };
