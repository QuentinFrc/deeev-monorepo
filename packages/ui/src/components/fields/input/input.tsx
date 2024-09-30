'use client';

import React from 'react';
import { cn } from '#utils';
import { tv } from 'tailwind-variants';

import { _field, FieldContainer } from '../base';

const _input = tv({
	extend: _field,
	base: [
		'ui-h-10',
		'[&[type="file"]]:ui-p-1',
		'file:ui-h-full file:ui-rounded-sm file:ui-border-0 file:ui-bg-border file:ui-px-2 file:ui-text-sm file:ui-font-medium file:ui-text-contrasted-max',
	],
});

const { base: input } = _input();

type InputProps = React.ComponentPropsWithoutRef<'input'>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<FieldContainer
				type={'text'}
				disabled={props.disabled ?? false}
				className={className}
				{...props}>
				<input type={type} className={cn(input(), className)} ref={ref} {...props} />
			</FieldContainer>
		);
	},
);
Input.displayName = 'Input';

export { Input };
export type { InputProps };
