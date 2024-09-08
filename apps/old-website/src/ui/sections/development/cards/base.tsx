import React from 'react';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';
import * as Card from '@repo/ui/card';
import { Icon, IconName } from '@repo/ui/icons';

export type CardOnTitleProps = React.HTMLAttributes<HTMLParagraphElement> & {
	icon: IconName;
};

type RootProps = Card.CardProps;
const Root: React.FC<RootProps> = ({ className, ...props }) => (
	<Card.Root className={cn('max-w-[450px] pl-6 sm:pr-6', className)} {...props} />
);

const contentVariants = tv({
	base: 'pl-0 pr-6 sm:px-0',
});

type ContentProps = Card.CardContentProps & VariantProps<typeof contentVariants>;

const Content: React.FC<ContentProps> = ({ className, ...props }) => (
	<Card.Content className={cn(contentVariants(), className)} {...props} />
);

const Header = Card.Header;

const OnTitle: React.FC<CardOnTitleProps> = ({ icon, children }) => {
	return (
		<p
			className={
				'inline-flex items-center gap-x-0.75 text-sm font-medium text-contrasted-min'
			}>
			<Icon i={icon} size={'sm'} />
			{children}
		</p>
	);
};

type TitleProps = {
	title: string;
};
const Title: React.FC<TitleProps> = ({ title }) => (
	<Card.Title className={'mb-2 text-xl font-normal'}>{title}</Card.Title>
);

type DescriptionProps = Card.CardDescriptionProps & {
	desc: string;
};
const Description: React.FC<DescriptionProps> = ({ desc, className, ...props }) => (
	<Card.Description className={cn('text-base', className)} {...props}>
		{desc}
	</Card.Description>
);

const svgCardVariants = tv({
	slots: {
		wrapper: ['h-64 overflow-hidden sm:max-h-48 md:max-h-32'],
		svg: ['relative ml-4 min-h-full min-w-full rounded-lg border bg-card sm:ml-0'],
	},
	variants: {
		position: {
			top: {
				svg: ['bottom-4 [filter:drop-shadow(0_1px_5px_hsl(var(--border)/19%))]'],
			},
			bottom: {
				svg: ['top-4 [filter:drop-shadow(0_-1px_5px_hsl(var(--border)/19%))]'],
			},
		},
	},
});

const { wrapper, svg } = svgCardVariants();

type SvgCardProps = React.ComponentPropsWithoutRef<'div'> &
	VariantProps<typeof svg> & {
		wrapperClassName?: React.ComponentPropsWithoutRef<'div'>['className'];
	};
const SvgCard: React.FC<SvgCardProps> = ({
	className,
	position = 'bottom',
	wrapperClassName,
	...props
}) => (
	<div className={cn(wrapper(), 'h-6', wrapperClassName)}>
		{/*todo: remove hidden when all svg illustrations */}
		<div className={cn(svg({ position }), 'hidden', className)} {...props} />
	</div>
);

export { Root, Content, Header, OnTitle, Title, Description, SvgCard };
