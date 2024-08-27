'use client';

import React from 'react';
import { tv } from 'tailwind-variants';

import { cn } from '#utils';

import { _field, FieldContainer } from '../base';

const _input = tv({
	extend: _field,
	base: [
		'h-10',
		'[&[type="file"]]:p-1',
		'file:h-full file:rounded-sm file:border-0 file:bg-border file:px-2 file:text-sm file:font-medium file:text-contrasted-max',
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
