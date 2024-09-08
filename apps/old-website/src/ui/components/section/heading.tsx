import React from 'react';

import { cn, tv, VariantProps } from '@/lib/utils';
import { Headings, Text } from '@ui/components/typography';

const head = tv({
	base: ['mb-12 flex flex-col justify-center gap-2'],
	variants: {
		alignement: {
			center: ['items-center text-center'],
			start: ['items-start'],
		},
	},
	defaultVariants: {
		alignement: 'start',
	},
});

type SectionHeadProps = React.ComponentPropsWithoutRef<'div'> & VariantProps<typeof head>;
const SectionHead: React.FC<SectionHeadProps> = ({ className, alignement, ...props }) => (
	<div className={cn(head({ alignement }), className)} {...props} />
);

type HeadingProps = React.ComponentPropsWithoutRef<typeof Headings.H2> & {
	themeReverted?: boolean;
};
const SectionHeading: React.FC<HeadingProps> = ({ themeReverted = false, ...props }) => {
	return <Headings.H2 theme={themeReverted ? 'reverted' : 'default'} {...props} />;
};

type MainHeadingProps = React.ComponentPropsWithoutRef<typeof Headings.H1>;
const SectionMainHeading: React.FC<MainHeadingProps> = (props) => {
	return <Headings.H1 {...props} />;
};

type SubHeadingProps = Omit<React.ComponentPropsWithoutRef<typeof Text>, 'contrast'> & {
	contrastReverted?: boolean;
};

const SectionSubHeading: React.FC<SubHeadingProps> = ({ contrastReverted, ...props }) => {
	return (
		<Text
			contrast={contrastReverted ? 'high-reverted' : 'high'}
			size={'base'}
			className={'md:text-lg'}
			{...props}
		/>
	);
};

export {
	SectionHead,
	SectionMainHeading,
	SectionHeading,
	SectionSubHeading,
	//
	SectionHead as Head,
	SectionMainHeading as MainHeading,
	SectionHeading as Heading,
	SectionSubHeading as SubHeading,
};
