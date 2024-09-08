import React from 'react';
import * as runtime from 'react/jsx-runtime';
import Image from 'next/image';

import { cn, tv } from '@/lib/utils';
import { Headings } from '@ui/components/typography';

const variants = tv({
	slots: {
		heading: ['scroll-m-20 text-contrasted-max'],
		code: [
			'[&:not(.in-code-block)]:text-contrasted-max',
			'[&:not(.in-code-block)]:rounded-md [&:not(.in-code-block)]:border [&:not(.in-code-block)]:p-1',
		],
		pre: 'overflow-x-auto',
		p: 'mb-4',
	},
	variants: {
		level: {
			1: { heading: ['mb-10 mt-12 border-b pb-2'] },
			2: { heading: ['mb-8 mt-10'] },
			3: { heading: ['mb-6 mt-8'] },
			4: { heading: ['mb-4 mt-6'] },
			5: { heading: ['mb-2 mt-4'] },
		},
	},
});

export const {
	heading: headingStyles,
	code: codeStyles,
	pre: preStyles,
	p: pStyles,
} = variants();

const defaults = {
	h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<Headings.H1 className={cn(headingStyles({ level: 1 }), className)} {...props} />
	),
	h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<Headings.H2 className={cn(headingStyles({ level: 2 }), className)} {...props} />
	),
	h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<Headings.H3 className={cn(headingStyles({ level: 3 }), className)} {...props} />
	),
	h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<Headings.H4 className={cn(headingStyles({ level: 4 }), className)} {...props} />
	),
	code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
		<code className={cn(codeStyles(), className)} {...props} />
	),
	pre: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
		<pre className={cn(preStyles(), className)} {...props} />
	),
	p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
		<p className={cn(pStyles(), className)} {...props} />
	),
};
const useMDXComponent = (code: string) => {
	const fn = new Function(code);
	return fn({ ...runtime }).default;
};

export type MdxProps = {
	code: string;
	components?: Record<string, React.ComponentType>;
};

export const Mdx: React.FC<MdxProps> = ({ code, components }: MdxProps) => {
	const Component = useMDXComponent(code);
	return <Component components={{ Image, ...defaults, ...components }} />;
};
