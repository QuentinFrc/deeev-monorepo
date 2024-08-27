'use client';

import React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '#utils';
import { Icon } from '#components/icons';

type BreadcrumbContext = {
	separator: React.ReactNode;
	withSeparator: boolean;
	itemCount: number;
	setItemCount: React.Dispatch<React.SetStateAction<number>>;
};

const BreadcrumbContext = React.createContext<BreadcrumbContext>({
	separator: <Icon i={'ChevronRight'} />,
	withSeparator: true,
	itemCount: 0,
	setItemCount: () => {},
});

const useBreadcrumbContext = () => {
	const context = React.useContext(BreadcrumbContext);
	if (context === undefined) {
		throw new Error('useBreadcrumbContext must be used within a BreadcrumbProvider');
	}
	return context;
};

type BreadcrumbProps = React.ComponentPropsWithoutRef<'nav'> & {
	/**
	 * The breadcrumb item separator.
	 * @default <Icons.chevronRight className={'h-4 w-4'} />
	 */
	separator?: React.ReactNode;
	/**
	 * If true, adds a separator between each breadcrumb item.
	 * @default true
	 * */
	withSeparator?: boolean;
};

const Breadcrumb = React.forwardRef<React.ElementRef<'nav'>, BreadcrumbProps>(
	(
		{
			children,
			className,
			separator = <Icon i={'ChevronRight'} />,
			withSeparator = true,
			...props
		},
		forwardedRef,
	) => {
		const [itemCount, setItemCount] = React.useState(0);

		return (
			<BreadcrumbContext.Provider
				value={{ withSeparator, separator, itemCount, setItemCount }}>
				<nav
					className={cn('relative break-words', className)}
					aria-label="breadcrumb"
					{...props}
					ref={forwardedRef}>
					<ol className={'flex items-center'}>{children}</ol>
				</nav>
			</BreadcrumbContext.Provider>
		);
	},
);

Breadcrumb.displayName = 'Breadcrumb';

type BreadcrumbItemProps = {
	isLastChild?: boolean;
} & React.ComponentPropsWithoutRef<'li'>;

const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
	({ children, className, ...props }, forwardedRef) => {
		const { separator, withSeparator } = useBreadcrumbContext();

		return (
			<li
				className={cn(
					'inline-flex items-center text-sm [&:last-child>[role="presentation"]]:hidden',
					className,
				)}
				{...props}
				ref={forwardedRef}>
				{children}
				{withSeparator && <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>}
			</li>
		);
	},
);

BreadcrumbItem.displayName = 'BreadcrumbItem';

type BreadcrumbLinkProps = React.PropsWithChildren<{
	asChild?: boolean;
	/**
	 * If `true`, indicates that the breadcrumb item is active, adds
	 * `aria-current=page`
	 */
	isCurrentPage?: boolean;
}> &
	React.ComponentPropsWithoutRef<'a'>;

const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
	({ asChild = false, isCurrentPage, className, ...props }, forwardedRef) => {
		const Comp = asChild ? Slot : 'a';

		return (
			<Comp
				className={cn(
					'text-sm font-medium underline-offset-4 aria-[current]:opacity-60 [&:not([aria-current])]:hover:underline',
					className,
				)}
				aria-current={isCurrentPage ? 'page' : undefined}
				{...props}
				ref={forwardedRef}
			/>
		);
	},
);

BreadcrumbLink.displayName = 'BreadcrumbLink';

type BreadcrumbLabelProps = React.ComponentPropsWithoutRef<'span'> &
	Pick<BreadcrumbLinkProps, 'isCurrentPage'>;

const BreadcrumbLabel = React.forwardRef<HTMLSpanElement, BreadcrumbLabelProps>(
	({ className, isCurrentPage, ...props }, forwardedRef) => {
		return (
			<span
				className={cn('text-sm font-medium aria-[current]:opacity-60', className)}
				aria-current={isCurrentPage ? 'page' : undefined}
				{...props}
				ref={forwardedRef}
			/>
		);
	},
);

BreadcrumbLabel.displayName = 'BreadcrumbLabel';

type BreadcrumbSeparatorProps = React.ComponentPropsWithoutRef<'span'>;

const BreadcrumbSeparator = React.forwardRef<HTMLSpanElement, BreadcrumbSeparatorProps>(
	({ className, ...props }, forwardedRef) => {
		return (
			<span
				className={cn('mx-2 opacity-50', className)}
				role="presentation"
				{...props}
				ref={forwardedRef}
			/>
		);
	},
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

export {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbLabel,
	BreadcrumbSeparator,
	//
	Breadcrumb as Root,
	BreadcrumbItem as Item,
	BreadcrumbLink as Link,
	BreadcrumbLabel as Label,
	BreadcrumbSeparator as Separator,
};
