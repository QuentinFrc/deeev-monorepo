import { forwardRef, HTMLAttributes } from 'react';

import { cn, tv, VariantProps } from '#utils';

const containerVariant = tv({
	base: 'container mx-auto',
	variants: {
		size: {
			default: '',
			sm: 'max-w-screen-sm',
			md: 'max-w-screen-md',
			lg: 'max-w-screen-lg',
			xl: 'max-w-screen-xl',
			'2xl': 'max-w-screen-2xl',
		},
	},
	defaultVariants: {
		size: 'default',
	},
});

export interface ContainerProps
	extends HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof containerVariant> {}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
	({ className, size, ...props }, ref) => {
		return (
			<div className={cn(containerVariant({ size, className }))} ref={ref} {...props} />
		);
	},
);

Container.displayName = 'Container';

export { Container, containerVariant };
