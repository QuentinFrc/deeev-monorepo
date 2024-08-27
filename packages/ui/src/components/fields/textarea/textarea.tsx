import React from 'react';
import { tv } from 'tailwind-variants';

import { cn } from '#utils';

import { _field, FieldContainer } from '../base';

const _textarea = tv({
	extend: _field,
	base: ['h-10'],
});

const { base: textarea } = _textarea();

type TextareaProps = React.ComponentPropsWithoutRef<'textarea'> & {
	value?: React.ComponentPropsWithoutRef<'textarea'>['value'] | null;
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, ...props }, ref) => (
		<FieldContainer
			type={'text'}
			disabled={props.disabled ?? false}
			className={className}>
			<textarea className={cn(textarea(), className)} ref={ref} {...props} />
		</FieldContainer>
	),
);
Textarea.displayName = 'Textarea';

export { Textarea };
export type { TextareaProps };
