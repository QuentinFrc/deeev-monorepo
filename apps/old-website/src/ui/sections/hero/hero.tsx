import React from 'react';
import Link from 'next/link';
import { VariantProps } from 'tailwind-variants';

import { cn, tv } from '@/lib/utils';
import * as Badge from '@repo/ui/badge';
import * as Button from '@repo/ui/button';
import { Container } from '@repo/ui/container';
import { Icon } from '@repo/ui/icons';
import { Kbd } from '@repo/ui/keyboard';
import { DialogTrigger as ContactDialogTrigger } from '@ui/components/contact';
import { SimpleButton } from '@ui/components/simple-button';
import { Headings } from '@ui/components/typography';

const variants = tv({
	slots: {
		section: ['relative py-16'],
		container: [
			'relative grid gap-10',
			'lg:max-h-[800px] lg:min-h-max lg:pt-24 lg:h-screen-80',
		],
		content: ['flex min-w-0 flex-col gap-12'],
		pattern: ['absolute inset-0 -z-10 size-full overflow-hidden opacity-40'],
	},
	variants: {
		alignment: {
			center: {
				content: ['items-center'],
			},
			left: {
				content: ['lg:w-2/3'],
			},
		},
	},
});

const { section, container, content, pattern } = variants();

type HeroProps = Pick<VariantProps<typeof variants>, 'alignment'>;
export const Hero: React.FC<HeroProps> = (props) => {
	return (
		<section id={'hero'} className={section(props)}>
			<Container className={cn(container(props))} size={'2xl'}>
				<div className={cn(content(props))}>
					<HeroContent {...props} />
					<CallToActions />
				</div>
			</Container>
			<Background />
		</section>
	);
};

const contentVariants = tv({
	slots: {
		wrapper: ['flex flex-col gap-4'],
		gradient1: ['bg-gradient-to-br from-green-500 to-cyan-500 font-bold'],
		gradient2: ['bg-gradient-to-br from-cyan-500 to-fuchsia-500 font-bold'],
		description: ['text-lg text-contrasted-mid lg:max-w-[780px]'],
	},
	variants: {
		alignment: {
			center: {
				wrapper: ['items-center text-center'],
			},
			left: {
				wrapper: ['items-start'],
			},
		},
	},
});

const { wrapper, gradient1, gradient2, description } = contentVariants();

const HeroContent: React.FC<HeroProps> = (props) => (
	<div className={cn(wrapper(props))}>
		<ContactDialogTrigger>
			<Badge.Root variant={'gradient'} type={'outline'}>
				<Badge.Label>Devenez notre premier client privilégié</Badge.Label>
				<Icon i={'Hearts'} />
			</Badge.Root>
		</ContactDialogTrigger>
		<Headings.H1>
			Créateurs de sites web{' '}
			<span
				className={cn(gradient1(props))}
				style={
					{
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
					} as React.CSSProperties
				}>
				élégants
			</span>{' '}
			et{' '}
			<span
				className={cn(gradient2(props))}
				style={
					{
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
					} as React.CSSProperties
				}>
				performants
			</span>
			.
		</Headings.H1>
		<p className={cn(description(props))}>
			Notre approche collaborative, associée à notre passion pour les dernières
			innovations, nous permettent de vous offrir des solutions digitales qui se
			démarquent.{/* tant par leurs aspects que leurs performances.*/}
		</p>
	</div>
);

const callToActionsVariants = tv({
	slots: {
		ctasWrapper: ['grid gap-4 md:w-max md:grid-cols-2'],
		ctaWrapper: ['flex flex-col items-center gap-4'],
		cta: ['w-full md:min-w-[300px]'],
	},
});

const { ctasWrapper, ctaWrapper, cta } = callToActionsVariants();

const CallToActions = () => (
	<div className={cn(ctasWrapper())}>
		<div className={cn(ctaWrapper())}>
			<ContactDialogTrigger>
				<SimpleButton
					variant={'secondary'}
					size={'lg'}
					label={'Contactez-nous'}
					className={cta()}
				/>
			</ContactDialogTrigger>
			<Kbd caps={['shift', 'c']} />
		</div>
		<div className={cn(ctaWrapper())}>
			<Button.Root variant={'ghost'} size={'lg'} className={cta()} asChild>
				<Link href={'#pricing'}>
					<Button.Label>Découvrir nos solutions</Button.Label>
					<Button.Icon i={'ArrowRight'} size={'lg'} />
				</Link>
			</Button.Root>
			<Kbd caps={['shift', 's']} />
		</div>
	</div>
);

const Background = () => (
	<div className={cn(pattern())}>
		<svg
			width="736"
			height="368"
			viewBox="0 0 736 368"
			className={cn('size-full')}
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<mask
				id="mask0_992_1729"
				style={{ maskType: 'alpha' }}
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="736"
				height="368">
				<rect width="736" height="368" fill="url(#paint0_radial_992_1729)" />
			</mask>
			<g mask="url(#mask0_992_1729)">
				<g opacity="0.4">
					<path
						d="M0 46V0H46M0 46H46M0 46V92M46 46V0M46 46V92M46 46H92M46 0H92M0 92H46M0 92V138M46 92V138M46 92H92M0 138H46M0 138V184M46 138V184M46 138H92M0 184H46M0 184V230M46 184V230M46 184H92M0 230H46M0 230V276M46 230V276M46 230H92M0 276H46M0 276V322M46 276V322M46 276H92M0 322H46M0 322V368H46M46 322V368M46 322H92M46 368H92M92 46V0M92 46V92M92 46H138M92 0H138M92 92V138M92 92H138M92 138V184M92 138H138M92 184V230M92 184H138M92 230V276M92 230H138M92 276V322M92 276H138M92 322V368M92 322H138M92 368H138M138 46V0M138 46V92M138 46H184M138 0H184M138 92V138M138 92H184M138 138V184M138 138H184M138 184V230M138 184H184M138 230V276M138 230H184M138 276V322M138 276H184M138 322V368M138 322H184M138 368H184M184 46V0M184 46V92M184 46H230.01M184 0H230.01M184 92V138M184 92H230.01M184 138V184M184 138H230.01M184 184V230M184 184H230.01M184 230V276M184 230H230.01M184 276V322M184 276H230.01M184 322V368M184 322H230.01M184 368H230.009M230.01 46V0M230.01 46V92M230.01 46H276M230.01 0H276M230.01 92V138M230.01 92H276M230.01 138L230.01 184M230.01 138H276M230.01 184L230.01 230M230.01 184H276M230.01 230L230.01 276M230.01 230H276M230.01 276L230.01 322M230.01 276H276M230.01 322L230.009 368M230.01 322H276M230.009 368H276M276 46V0M276 46V92M276 46H322M276 0H322M276 92V138M276 92H322M276 138V184M276 138H322M276 184V230M276 184H322M276 230V276M276 230H322M276 276V322M276 276H322M276 322V368M276 322H322M276 368H322M322 46V0M322 46V92M322 46H368M322 0H368M322 92V138M322 92H368M322 138V184M322 138H368M322 184V230M322 184H368M322 230V276M322 230H368M322 276V322M322 276H368M322 322V368M322 322H368M322 368H368M368 46V0M368 46V92M368 46L414 46M368 0H414M368 92V138M368 92L414 92M368 138V184M368 138L414 138M368 184V230M368 184L414 184M368 230V276M368 230H414M368 276V322M368 276L414 276M368 322V368M368 322L414 322M368 368H414M414 46V0M414 46V92M414 46H460M414 0H460M414 92V138M414 92H460M414 138V184M414 138H460M414 184V230M414 184H460M414 230V276M414 230H460M414 276V322M414 276H460M414 322V368M414 322H460M414 368H460M460 46V0M460 46V92M460 46H506M460 0H506M460 92V138M460 92H506M460 138V184M460 138H506M460 184V230M460 184H506M460 230V276M460 230H506M460 276V322M460 276H506M460 322V368M460 322H506M460 368H506M506 46V0M506 46V92M506 46H552M506 0H552M506 92V138M506 92H552M506 138V184M506 138H552M506 184V230M506 184H552M506 230V276M506 230H552M506 276V322M506 276H552M506 322V368M506 322H552M506 368H552M552 46V0M552 46V92M552 46H598.01M552 0H598.01M552 92V138M552 92H598.01M552 138V184M552 138H598.01M552 184V230M552 184H598.01M552 230V276M552 230H598.01M552 276V322M552 276H598.01M552 322V368M552 322H598.01M552 368H598.009M598.01 46V0M598.01 46V92M598.01 46H644M598.01 0H644M598.01 92V138M598.01 92H644M598.01 138L598.01 184M598.01 138H644M598.01 184V230M598.01 184H644M598.01 230L598.01 276M598.01 230H644M598.01 276L598.01 322M598.01 276H644M598.01 322L598.009 368M598.01 322H644M598.009 368H644M644 46V0M644 46H690M644 46V92M644 0H690M644 92V138M644 92H690M644 138V184M644 138H690M644 184V230M644 184H690M644 230V276M644 230H690M644 276V322M644 276H690M644 322V368M644 322H690M644 368H690M690 46V0M690 46V92M690 46H736M690 0H736V46M690 92V138M690 92H736M690 138V184M690 138H736M690 184V230M690 184H736M690 230V276M690 230H736M690 276V322M690 276H736M690 322V368M690 322H736M690 368H736V322M736 46V92M736 92V138M736 138V184M736 184V230M736 230V276M736 276V322"
						stroke="white"
					/>
					<path
						d="M183.5 137.5H138.5V92.5H183.5V137.5Z"
						fill="white"
						stroke="white"
						strokeWidth="2"
					/>
					<path
						d="M321.5 275.5H276.5V230.5H321.5V275.5Z"
						fill="white"
						stroke="white"
						strokeWidth="2"
					/>
					<path
						d="M91.5 321.5H46.5V276.5H91.5V321.5Z"
						fill="white"
						stroke="white"
						strokeWidth="2"
					/>
					<path
						d="M321.5 45.5H276.5V0.5H321.5V45.5Z"
						fill="white"
						stroke="white"
						strokeWidth="2"
					/>
					<path
						d="M552.5 183.5H597.5V138.5H552.5V183.5Z"
						fill="white"
						stroke="white"
						strokeWidth="2"
					/>
					<path
						d="M414.5 321.5H459.5V276.5H414.5V321.5Z"
						fill="white"
						stroke="white"
						strokeWidth="2"
					/>
					<path
						d="M644.5 367.5H689.5V322.5H644.5V367.5Z"
						fill="white"
						stroke="white"
						strokeWidth="2"
					/>
					<path
						d="M414.5 91.5H459.5V46.5H414.5V91.5Z"
						fill="white"
						stroke="white"
						strokeWidth="2"
					/>
				</g>
			</g>
			<defs>
				<radialGradient
					id="paint0_radial_992_1729"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(368 184) rotate(90) scale(184 368)">
					<stop offset="0.4" stopOpacity="0.5" />
					<stop offset="1" stopOpacity="0" />
				</radialGradient>
			</defs>
		</svg>
	</div>
);
