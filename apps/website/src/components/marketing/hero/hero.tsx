import { randomUUID } from 'crypto';
import React from 'react';
import Image from 'next/image';

import { Logos } from '@/components/marketing';
import { FoundersAvatars } from '@/components/ui/founders-avatars';
import { useTranslations } from '@/hooks/use-translations';
import { Spotlight } from '@repo/ui/assets';
import { ButtonLabel, ButtonRoot } from '@repo/ui/button';
import { GradientText } from '@repo/ui/gradient-text';
import { Icon } from '@repo/ui/icons';
import { TextBoxCarousel, TextBoxElement } from '@repo/ui/motion-box-reveal';
import {
	MotionButtonDefaultLabel,
	MotionButtonHoverLabel,
	MotionButtonRoot,
} from '@repo/ui/motion-button';
import { ShimmerText } from '@repo/ui/shimmer-text';
import { Headings, Typography } from '@repo/ui/typography';
import { cn } from '@repo/ui/utils';

import tmp from './tmp.jpg';

const members = ['Enzo', 'Quentin', 'Sebastien'] as const;

const getMember = () => {
	return {
		memberName: members[0],
	};
};

const getTranslations = () => {
	const t = useTranslations('homepage.hero');
	const { memberName } = getMember();
	return {
		title: t('title'),
		alternative_line_1: [
			t('title_alternative_line_1.business_owners'),
			t('title_alternative_line_1.companies'),
			t('title_alternative_line_1.solopreneurs'),
			t('title_alternative_line_1.startups'),
		],
		alternative_line_2: [
			t('title_alternative_line_2.business_owners'),
			t('title_alternative_line_2.companies'),
			t('title_alternative_line_2.solopreneurs'),
			t('title_alternative_line_2.startups'),
		],
		accessibility_title: t('accessibility_title'),
		description: t('description'),
		main_cta: {
			default: t('main_cta.default', { name: memberName }),
			hover: t('main_cta.hover'),
		},
		sub_cta: t('sub_cta'),
	};
};

type HeroProps = {};

export const Hero = (props: HeroProps) => {
	const {
		title,
		alternative_line_1,
		alternative_line_2,
		accessibility_title,
		description,
		main_cta,
		sub_cta,
	} = getTranslations();

	const { memberName } = getMember();

	const Avatar = FoundersAvatars[`${memberName}Avatar`];

	const itemsFirstLine = alternative_line_1.map((item, i) => ({
		content: item,
		id: randomUUID(),
		className: cn(
			'w-max font-medium',
			i % 2 == 0
				? '[--shimmer-color-1:theme(colors.cyan.200)] [--shimmer-color-2:theme(colors.green.200)]'
				: '[--shimmer-color-1:theme(colors.fuchsia.200)] [--shimmer-color-2:theme(colors.cyan.200)]',
		),
	}));

	const itemsSecondLine = alternative_line_2.map((item, i) => ({
		content: item,
		id: randomUUID(),
		className: cn(
			'[--shimmer-delay:0.3s] [--color-direction:65deg]',
			'w-max font-medium',
			i % 2 == 0
				? '[--shimmer-color-1:theme(colors.cyan.200)] [--shimmer-color-2:theme(colors.green.200)]'
				: '[--shimmer-color-1:theme(colors.fuchsia.200)] [--shimmer-color-2:theme(colors.cyan.200)]',
		),
	}));

	return (
		<>
			<section
				className={'relative pt-12 space-y-16& lg:pt-24 lg:space-y-32 lg:min-h-[880px]'}>
				<div className="max-w-[1280px] lg:w-[90%] absolute size-full right-0 bottom-0 -z-10 [mask-image:linear-gradient(90deg,transparent_100px,white)]">
					<div
						className={
							'relative size-full [mask-image:linear-gradient(transparent,white_30%,white_70%,transparent)]'
						}>
						<div className={'absolute inset-0 bg-dot-[white]/[36%]'} />
						<Image
							src={tmp}
							alt="hero"
							layout="fill"
							objectFit="cover"
							className={'opacity-50'}
						/>
					</div>
				</div>

				<header className={'relative py-24 flex items-center'}>
					<Spotlight />
					<div className="container space-y-16">
						<div className={'space-y-6'}>
							<Headings.H1 className={'max-w-[17ch]'} unbalanced>
								{title}{' '}
								<TextBoxCarousel items={itemsFirstLine} delay={6100}>
									{itemsFirstLine.map(({ className, content, id }, index) => (
										<TextBoxElement id={id} key={index} asChild>
											<ShimmerText className={className} color={'transparent'} asChild>
												<GradientText
													gradient={index % 2 === 0 ? 'green-cyan' : 'cyan-fuchsia'}>
													{content}
												</GradientText>
											</ShimmerText>
										</TextBoxElement>
									))}
								</TextBoxCarousel>{' '}
								<br />
								<TextBoxCarousel items={itemsSecondLine} delay={6100}>
									{itemsSecondLine.map(({ className, content, id }, index) => (
										<TextBoxElement id={id} key={index} asChild>
											<ShimmerText className={className} color={'transparent'} asChild>
												<GradientText
													gradient={index % 2 === 0 ? 'green-cyan' : 'cyan-fuchsia'}>
													{content}
												</GradientText>
											</ShimmerText>
										</TextBoxElement>
									))}
								</TextBoxCarousel>
								<span className={'sr-only'}>{accessibility_title}</span>
							</Headings.H1>
							<Typography.Lead className={'max-w-[51rem]'}>{description}</Typography.Lead>
						</div>

						<div className={'flex items-center gap-2'}>
							<MotionButtonRoot variant={'gradient'}>
								<MotionButtonDefaultLabel>
									{main_cta.default}
									<Avatar />
								</MotionButtonDefaultLabel>
								<MotionButtonHoverLabel>{main_cta.hover}</MotionButtonHoverLabel>
							</MotionButtonRoot>

							<ButtonRoot variant={'ghost'} size={'lg'}>
								<ButtonLabel>{sub_cta}</ButtonLabel>
								<Icon i={'ArrowRight'} />
							</ButtonRoot>
						</div>
					</div>
				</header>
				<Logos />
			</section>
		</>
	);
};
