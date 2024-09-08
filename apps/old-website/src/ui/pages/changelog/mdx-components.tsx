import React from 'react';

import { cn } from '@/lib/utils';

export const ChangelogComponents = {
	h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h2
			className={cn(
				'mt-12 scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0',
				className,
			)}
			{...props}
		/>
	),
	h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h3
			className={cn(
				'mt-8 scroll-m-20 font-mono text-lg font-semibold tracking-tight',
				className,
			)}
			{...props}
		/>
	),
	a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
		<a className={cn('text-contrasted-min hover:underline', className)} {...props} />
	),
	ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
		<ul className={cn('pl-4 text-contrasted', className)} {...props} />
	),
	li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
		<li className={cn('mt-2 text-sm [&>strong]:text-foreground', className)} {...props} />
	),
};
