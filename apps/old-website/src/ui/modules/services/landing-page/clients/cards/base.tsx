import React from 'react';

import { cn } from '@/lib/utils';
import * as Card from '@repo/ui/card';
import { Icon as BaseIcon, IconName } from '@repo/ui/icons';
import { headingStyles, Text, textStyles } from '@ui/components/typography';
import { WithMouseMove } from '@ui/components/with-mouse-move';

type CardProps = {} & React.ComponentPropsWithoutRef<'div'>;

const ClientBaseCard: React.FC<CardProps> = ({ children, className, ...props }) => (
	<WithMouseMove className={'max-w-md'}>
		<Card.Root className={cn('relative', className)} {...props}>
			<div
				className={cn([
					'pointer-events-none absolute -inset-px opacity-[var(--opacity,0)] mix-blend-plus-lighter rounded-lg-minus-[1px]',
					'bg-[radial-gradient(circle_at_var(--mouseX)_var(--mouseY),hsl(var(--color)/15%),transparent_150px)]',
					'transition-opacity duration-300 ease-in-out',
				])}
			/>
			<Card.Content className={'relative z-10'}>{children}</Card.Content>
		</Card.Root>
	</WithMouseMove>
);

type ClientCardIconProps = { icon: IconName };
const ClientCardIcon: React.FC<ClientCardIconProps> = ({ icon }) => (
	<div className="aspect-square w-max rounded-lg bg-[hsl(var(--color)/12%)] p-2">
		<BaseIcon i={icon} size={'lg'} className={'text-[hsl(var(--color))]'} />
	</div>
);

type ClientCardHeaderProps = React.ComponentPropsWithoutRef<typeof Card.Header>;
const ClientCardHeader: React.FC<ClientCardHeaderProps> = (props) => (
	<Card.Header className="mb-4 flex flex-col items-start gap-2" {...props} />
);

type ClientCardTitleProps = React.PropsWithChildren<{}>;
const ClientCardTitle: React.FC<ClientCardTitleProps> = ({ children }) => (
	<Card.Title asChild>
		<h3 className={cn(headingStyles(), textStyles({ size: 'xl' }), 'mb-0')}>
			{children}
		</h3>
	</Card.Title>
);

type ClientCardContentProps = Omit<
	React.ComponentPropsWithoutRef<typeof Text>,
	'contrast'
>;
const ClientCardContent: React.FC<ClientCardContentProps> = (props) => (
	<Text contrast={2} {...props} />
);

export {
	ClientBaseCard,
	ClientCardIcon,
	ClientCardTitle,
	ClientCardHeader,
	ClientCardContent,
	//
	ClientBaseCard as Root,
	ClientCardIcon as Icon,
	ClientCardHeader as Header,
	ClientCardTitle as Title,
	ClientCardContent as Content,
};
