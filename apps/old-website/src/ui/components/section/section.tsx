import React from 'react';

import { cn, tv, VariantProps } from '@/lib/utils';

const sectionStyles = tv({
	base: [''],
	variants: {
		size: {
			'lg-responsive': ['py-16 md:py-32'],
			lg: ['py-32'],
		},
	},
	defaultVariants: {
		size: 'lg-responsive',
	},
});

type SectionProps = React.ComponentPropsWithoutRef<'section'> &
	VariantProps<typeof sectionStyles>;

const Section: React.FC<SectionProps> = ({ className, size, ...props }) => (
	<section className={cn(sectionStyles({ size }), className)} {...props} />
);

export {
	Section,
	//
	Section as Root,
};
