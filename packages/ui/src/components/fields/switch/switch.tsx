'use client';

import React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '#utils';

import { FieldContainer } from '../base';

const _switch = tv({
	slots: {
		root: [
			'peer inline-flex shrink-0 cursor-pointer items-center rounded-full transition-colors',
			'disabled:cursor-not-allowed disabled:opacity-50',
		],
		thumb:
			'pointer-events-none block rounded-full border border-background bg-foreground transition-transform data-[state=unchecked]:translate-x-[3px]',
	},
	variants: {
		size: {
			sm: {
				root: 'h-5 w-9',
				thumb: 'size-3.5 data-[state=checked]:translate-x-[19px]',
			},
			md: {
				root: 'h-6 w-11',
				thumb: 'size-4.5 data-[state=checked]:translate-x-[23px]',
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
