'use client';

import React from 'react';
import Image from 'next/image';

import { Link } from '@/i18n/routing';
import { BadgeLabel, BadgeRoot } from '@repo/ui/badge';
import { ButtonLabel, ButtonRoot } from '@repo/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@repo/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	CarouselReset,
} from '@repo/ui/carousel';

import MockupBolight from './mockup-bolight.png';
import MockupBooknest from './mockup-booknest.png';
import MockupDreamPlan from './mockup-dream-plan.png';
import MockupEskape from './mockup-eskape.png';
import MockupKaizen from './mockup-kaizen.png';
import MockupSkillswap from './mockup-skillswap.png';
import SafariHeader from './safari-header.png';

const mockups = [
	MockupDreamPlan,
	MockupKaizen,
	MockupEskape,
	MockupBolight,
	MockupKaizen,
	MockupSkillswap,
	MockupBooknest,
];

type ServicesCarouselProps = {
	cards: {
		type: string;
		title: string;
		description: string;
	}[];
};

export const UseCasesCarousel = ({ cards }: ServicesCarouselProps) => {
	return (
		<Carousel className="w-full space-y-8">
			<CarouselContent overflow={'visible'}>
				{cards.map((card, index) => (
					<CarouselItem
						className={'group basis-[396px] rounded-lg'}
						index={index}
						key={index}>
						<Card className={'overflow-hidden'}>
							<CardContent className={'space-y-4'}>
								<CardHeader>
									<CardTitle weight={'medium'} size={'base'}>
										{card.title}
									</CardTitle>
									<CardDescription>{card.description}</CardDescription>
								</CardHeader>
								<div className="space-x-2">
									<BadgeRoot size={'sm'} type={'outline'} variant={'neutral'}>
										<BadgeLabel>{card.type}</BadgeLabel>
									</BadgeRoot>
								</div>
							</CardContent>
							<div className="relative z-10">
								<Image
									src={mockups[index]}
									alt={'Mock Up'}
									quality={30}
									height={'auto'}
									width={(1440 / 1024) * 192}
									className={
										'absolute size-full opacity-50 group-hover:opacity-80 duration-150 transition-opacity blur-3xl brightness-200 object-cover object-left-top -z-10'
									}
								/>
								<div
									className={
										'group-hover:translate-y-2 relative z-10 h-64 ml-4 p-1 w-full bg-neutral-900/80 rounded-t-md overflow-hidden border border-b-0 transition-transform duration-300 scale-150 origin-top-left backdrop-blur'
									}>
									<Image
										src={SafariHeader}
										alt={'Browser Header'}
										height={32}
										width={(1280 * 32) / 53}
										className={'object-cover object-left-top rounded-t-sm'}
									/>
									<Image
										src={mockups[index]}
										alt={'Mock Up'}
										height={'auto'}
										width={(1440 / 1024) * 192}
										className={'object-cover object-left-top'}
									/>
								</div>
							</div>
						</Card>
					</CarouselItem>
				))}
			</CarouselContent>
			<div className="flex items-center gap-1">
				<CarouselPrevious />
				<CarouselNext />
				<CarouselReset />
				<ButtonRoot asChild size={'sm'} variant={'ghost'}>
					<Link href={'#'}>
						{/*todo: page use cases*/}
						<ButtonLabel>Voir toutes les réalisations</ButtonLabel>
					</Link>
				</ButtonRoot>
			</div>
		</Carousel>
	);
};
