'use client';

import React from 'react';
import Image, { ImageProps } from 'next/image';

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
				{cards.map(
					(card, index) =>
						mockups[index] && (
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
									<CarouselLaptopImage src={mockups[index]} alt={card.title} />
								</Card>
							</CarouselItem>
						),
				)}
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

const LAPTOP_IMAGE_DIMENSIONS = {
	ratio: 1024 / 1440,
	height: 192,
};

type CarouselLaptopImageProps = ImageProps;
const CarouselLaptopImage = ({ src, alt }: CarouselLaptopImageProps) => {
	return (
		<div className="relative z-10">
			<Image
				src={src}
				alt={alt}
				quality={15}
				height={LAPTOP_IMAGE_DIMENSIONS.height}
				width={LAPTOP_IMAGE_DIMENSIONS.height * LAPTOP_IMAGE_DIMENSIONS.ratio}
				className={
					'absolute -z-10 size-full object-cover object-left-top opacity-50 blur-3xl brightness-200 transition-opacity duration-150 group-hover:opacity-80'
				}
			/>
			<div
				className={
					'relative z-10 ml-4 h-64 w-full origin-top-left scale-150 overflow-hidden rounded-t-md border border-b-0 bg-neutral-900/80 p-1 backdrop-blur transition-transform duration-300 group-hover:translate-y-2'
				}>
				<Image
					src={SafariHeader}
					alt={'Browser Header'}
					height={LAPTOP_IMAGE_DIMENSIONS.height}
					width={LAPTOP_IMAGE_DIMENSIONS.height * LAPTOP_IMAGE_DIMENSIONS.ratio}
					className={'rounded-t-sm object-cover object-left-top'}
				/>
				<Image
					src={src}
					alt={`Blurred image of ${alt}`}
					height={LAPTOP_IMAGE_DIMENSIONS.height}
					width={LAPTOP_IMAGE_DIMENSIONS.height * LAPTOP_IMAGE_DIMENSIONS.ratio}
					className={'object-cover object-left-top'}
				/>
			</div>
		</div>
	);
};
