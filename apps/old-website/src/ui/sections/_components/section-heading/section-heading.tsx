'use client';

import React from 'react';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';
import { Icon, IconName } from '@repo/ui/icons';
import { Headings } from '@ui/components/typography';

const headingVariants = tv({
	base: 'flex flex-col [text-wrap:balance]',
	variants: {
		align: {
			start: 'items-start text-start',
			center: 'items-center text-center',
			end: 'items-end text-end',
		},
		responsive: {
			true: '',
		},
	},
	defaultVariants: {
		align: 'start',
		responsive: false,
	},
	compoundVariants: [
		{
			responsive: true,
			align: 'center',
			className: 'items-start text-start sm:items-center sm:text-center',
		},
	],
});

type HeadingVariantsProps = VariantProps<typeof headingVariants>;

type SectionHeadingProps = {
	description: string;
	headingLevel: 'H1' | 'H2';
	icon: IconName;
	subtext?: string;
} & HeadingVariantsProps &
	React.ComponentPropsWithoutRef<'hgroup'>;

const IconViewBoxWidth = 24;
const IconTextGap = 4;

export const SectionHeading: React.FC<SectionHeadingProps> = ({
	children,
	className,
	align = 'start',
	responsive = false,
	description,
	headingLevel = 'H1',
	icon,
	subtext,
	...props
}) => {
	const Heading = Headings[headingLevel];
	const textRef = React.useRef<SVGTextElement>(null);
	const svgRef = React.useRef<SVGSVGElement>(null);

	React.useEffect(() => {
		if (textRef.current && svgRef.current) {
			const box = textRef.current.getBBox();
			const viewBoxWidth = box.width + IconTextGap + IconViewBoxWidth;
			svgRef.current.setAttribute('viewBox', `0 0 ${viewBoxWidth} 24`);
		}
	}, []);

	/* Generate id for mask based on description */
	const id = React.useMemo(
		() =>
			//Lowercase, replace spaces with dashes
			description.toLowerCase().replace(/\s/g, '-'),
		[description],
	);

	return (
		<hgroup className={cn(headingVariants({ align, responsive }), className)} {...props}>
			<svg
				ref={svgRef}
				height="24"
				viewBox="0 0 190 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<mask
					id={`mask-${id}`}
					style={{ maskType: 'alpha' }}
					x="0"
					y="0"
					height="100%"
					width={'100%'}>
					{icon && <Icon i={icon} x={0} />}
					<text
						fill={'black'}
						fontWeight={500}
						fontSize={16}
						x={28}
						y={13}
						dominantBaseline="middle">
						{description}
					</text>
				</mask>
				<text
					ref={textRef}
					fill={'transparent'}
					fontWeight={500}
					fontSize={16}
					x={28}
					y={13}
					dominantBaseline="middle">
					{description}
				</text>
				<rect
					x="0"
					width="100%"
					height="24"
					mask={`url(#mask-${id})`}
					fill={`url(#gradient-${id})`}
				/>
				<linearGradient id={`gradient-${id}`} x1="0%" y1="0%" x2="400%" y2="0%">
					<stop offset="0%" className={cn('[stop-color:theme(colors.green.500)]')} />
					<stop offset="12.5%" className={cn('[stop-color:theme(colors.cyan.500)]')} />
					<stop offset="25%" className={cn('[stop-color:theme(colors.fuchsia.500)]')} />
					<stop offset="37.5%" className={cn('[stop-color:theme(colors.cyan.500)]')} />
					<stop offset="50%" className={cn('[stop-color:theme(colors.green.500)]')} />
					<stop offset="62.5%" className={cn('[stop-color:theme(colors.cyan.500)]')} />
					<stop offset="75%" className={cn('[stop-color:theme(colors.fuchsia.500)]')} />
					<stop offset="87.5%" className={cn('[stop-color:theme(colors.cyan.500)]')} />
					<stop offset="100%" className={cn('[stop-color:theme(colors.green.500)]')} />
					<animate
						attributeName="x1"
						dur="8s"
						from="0%"
						to="-200%"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="x2"
						dur="8s"
						from="400%"
						to="200%"
						repeatCount="indefinite"
					/>
				</linearGradient>
			</svg>
			<div>
				<Heading className={'mb-1 font-heading font-bold text-contrasted-max'}>
					{children}
				</Heading>
				{subtext && <p className="text-contrasted">{subtext}</p>}
			</div>
		</hgroup>
	);
};
