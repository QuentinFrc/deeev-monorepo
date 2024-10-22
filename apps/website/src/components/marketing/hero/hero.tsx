import { randomUUID } from 'crypto';
import React from 'react';
import Image from 'next/image';

import { Logos } from '@/components/marketing';
import { FoundersAvatars } from '@/components/ui/founders-avatars';
import { getTranslations } from '@/lib/get-translations';
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

const getHeroTranslations = () => {
	const t = getTranslations('homepage.hero');
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

export const Hero = () => {
	const {
		title,
		alternative_line_1,
		alternative_line_2,
		accessibility_title,
		description,
		main_cta,
		sub_cta,
	} = getHeroTranslations();

	const { memberName } = getMember();

	const Avatar = FoundersAvatars[`${memberName}Avatar`];

	const itemsFirstLine = alternative_line_1.map((item) => ({
		content: item,
		id: randomUUID(),
		className: cn('w-max font-medium'),
	}));

	const itemsSecondLine = alternative_line_2.map((item) => ({
		content: item,
		id: randomUUID(),
		className: cn('w-max font-medium [--color-direction:65deg] [--shimmer-delay:0.3s]'),
	}));

	return (
		<>
			<section
				className={'relative space-y-16 pt-12 lg:min-h-[880px] lg:space-y-32 lg:pt-24'}>
				<div className="absolute bottom-0 right-0 -z-10 size-full max-w-screen-xl [mask-image:linear-gradient(90deg,transparent_100px,white)] lg:w-[90%]">
					<div
						className={
							'relative size-full [mask-image:linear-gradient(transparent,white_30%,white_70%,transparent)]'
						}>
						<div className={'absolute inset-0'} />
						<Image
							src={tmp}
							alt="hero"
							layout="fill"
							objectFit="cover"
							className={'opacity-50'}
						/>
					</div>
				</div>

				<header className={'relative flex items-center py-24'}>
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
