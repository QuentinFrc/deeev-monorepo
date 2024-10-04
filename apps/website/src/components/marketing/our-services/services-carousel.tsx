'use client';

import React from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@repo/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	CarouselReset,
} from '@repo/ui/carousel';

type ServicesCarouselProps = {
	cards: {
		title: string;
		description: string;
	}[];
};

export const ServicesCarousel = ({ cards }: ServicesCarouselProps) => {
	return (
		<Carousel className="w-full space-y-4">
			<CarouselContent overflow={'visible'}>
				{cards.map((card, index) => (
					<CarouselItem className={'basis-[396px]'} index={index} key={index}>
						<Card>
							<CardContent>
								<CardHeader>
									<CardTitle weight={'medium'} size={'base'}>
										{card.title}
									</CardTitle>
									<CardDescription>{card.description}</CardDescription>
								</CardHeader>
							</CardContent>
							<div className={'h-48 w-full bg-neutral-800/40'}></div>
						</Card>
					</CarouselItem>
				))}
			</CarouselContent>
			<div className="flex items-center gap-1">
				<CarouselPrevious />
				<CarouselNext />
				<CarouselReset />
			</div>
		</Carousel>
	);
};
