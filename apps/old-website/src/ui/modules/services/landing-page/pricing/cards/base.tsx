import React from 'react';

import { cn } from '@/lib/utils';
import * as Card from '@repo/ui/card';
import { ContentProps, HeaderProps, RootProps } from '@repo/ui/card';

const CardRoot: React.FC<RootProps> = ({ className, ...props }) => (
	<Card.Root className={cn('relative h-max md:max-w-md', className)} {...props} />
);

const CardContent: React.FC<ContentProps> = ({ className, ...props }) => (
	<Card.Content className={cn('space-y-4', className)} {...props} />
);

const CardHeader: React.FC<HeaderProps> = ({ className, ...props }) => (
	<Card.Header className={cn('gap-0', className)} {...props} />
);

const CardTitle = Card.Title;

const CardDescription = Card.Description;

export {
	CardRoot as Root,
	CardContent as Content,
	CardHeader as Header,
	CardTitle as Title,
	CardDescription as Description,
};
