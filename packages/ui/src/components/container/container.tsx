import { forwardRef, HTMLAttributes } from 'react';
import { cn, tv, VariantProps } from '#utils';

const containerVariant = tv({
	base: 'ui-container ui-mx-auto',
	variants: {
		size: {
			default: '',
			sm: 'ui-max-w-screen-sm',
			md: 'ui-max-w-screen-md',
			lg: 'ui-max-w-screen-lg',
			xl: 'ui-max-w-screen-xl',
			'2xl': 'ui-max-w-screen-2xl',
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
