'use client';

import * as React from 'react';
import { cn, tv, VariantProps } from '#utils';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';

import { ButtonLabel, ButtonRoot } from '../button';
import { Icon } from '../icons';

const carouselVariants = tv({
	slots: {
		content: '',
	},
	variants: {
		overflow: {
			hidden: { content: 'ui-overflow-hidden' },
			visible: { content: 'ui-overflow-visible' },
		},
	},
	defaultVariants: {
		overflow: 'hidden',
	},
});

const { content } = carouselVariants();

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
	opts?: CarouselOptions;
	plugins?: CarouselPlugin;
	orientation?: 'horizontal' | 'vertical';
	setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
	carouselRef: ReturnType<typeof useEmblaCarousel>[0];
	api: ReturnType<typeof useEmblaCarousel>[1];
	scrollPrev: () => void;
	scrollNext: () => void;
	canScrollPrev: boolean;
	canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
	const context = React.useContext(CarouselContext);

	if (!context) {
		throw new Error('useCarousel must be used within a <Carousel />');
	}

	return context;
}

const Carousel = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
	(
		{ orientation = 'horizontal', opts, setApi, plugins, className, children, ...props },
		ref,
	) => {
		const [carouselRef, api] = useEmblaCarousel(
			{
				...opts,
				align: 'start',
				axis: orientation === 'horizontal' ? 'x' : 'y',
			},
			plugins,
		);
		const [canScrollPrev, setCanScrollPrev] = React.useState(false);
		const [canScrollNext, setCanScrollNext] = React.useState(false);

		const onSelect = React.useCallback((api: CarouselApi) => {
			if (!api) {
				return;
			}

			setCanScrollPrev(api.canScrollPrev());
			setCanScrollNext(api.canScrollNext());
		}, []);

		const scrollPrev = React.useCallback(() => {
			api?.scrollPrev();
		}, [api]);

		const scrollNext = React.useCallback(() => {
			api?.scrollNext();
		}, [api]);

		const handleKeyDown = React.useCallback(
			(event: React.KeyboardEvent<HTMLDivElement>) => {
				if (event.key === 'ArrowLeft') {
					event.preventDefault();
					scrollPrev();
				} else if (event.key === 'ArrowRight') {
					event.preventDefault();
					scrollNext();
				}
			},
			[scrollPrev, scrollNext],
		);

		React.useEffect(() => {
			if (!api || !setApi) {
				return;
			}

			setApi(api);
		}, [api, setApi]);

		React.useEffect(() => {
			if (!api) {
				return;
			}

			onSelect(api);
			api.on('reInit', onSelect);
			api.on('select', onSelect);

			return () => {
				api?.off('select', onSelect);
			};
		}, [api, onSelect]);

		return (
			<CarouselContext.Provider
				value={{
					carouselRef,
					api: api,
					opts,
					orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
					scrollPrev,
					scrollNext,
					canScrollPrev,
					canScrollNext,
				}}>
				<div
					ref={ref}
					onKeyDownCapture={handleKeyDown}
					className={cn('ui-relative', className)}
					role="region"
					aria-roledescription="carousel"
					{...props}>
					{children}
				</div>
			</CarouselContext.Provider>
		);
	},
);
Carousel.displayName = 'Carousel';

type CarouselContentProps = React.HTMLAttributes<HTMLDivElement> &
	Pick<VariantProps<typeof carouselVariants>, 'overflow'>;

const CarouselContent = React.forwardRef<HTMLDivElement, CarouselContentProps>(
	({ className, overflow, ...props }, ref) => {
		const { carouselRef, orientation } = useCarousel();

		return (
			<div ref={carouselRef} className={cn(content({ overflow }))}>
				<div
					ref={ref}
					className={cn(
						'ui-flex',
						orientation === 'horizontal' ? '-ui-ml-4' : '-ui-mt-4 ui-flex-col',
						className,
					)}
					{...props}
				/>
			</div>
		);
	},
);
CarouselContent.displayName = 'CarouselContent';

type CarouselItemProps = React.HTMLAttributes<HTMLDivElement> & { index: number };

const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
	({ className, index, ...props }, ref) => {
		const { orientation, api } = useCarousel();
		const [isPassed, setIsPassed] = React.useState(false);
		const [canScrollTo, setCanScrollTo] = React.useState(true);

		const updateState = () => {
			if (!api) {
				return;
			}

			const selected = api.selectedScrollSnap();
			setIsPassed(selected > index);
			if ((!api.canScrollNext() && selected <= index) || selected === index) {
				setCanScrollTo(false);
			} else {
				setCanScrollTo(true);
			}
		};

		React.useEffect(() => {
			if (!api) {
				return;
			}

			updateState();

			api.on('select', updateState);
		}, [api]);

		const scrollTo = () => {
			if (!api || !canScrollTo) {
				return;
			}

			api.scrollTo(index);
		};

		return (
			<div
				ref={ref}
				role="group"
				aria-roledescription="slide"
				onClick={scrollTo}
				className={cn(
					'after:ui-absolute after:ui-inset-0 after:ui-z-20 after:ui-rounded-inherit after:ui-bg-background/25 after:ui-opacity-0 after:ui-backdrop-blur-sm after:ui-transition-opacity after:ui-delay-75 after:ui-duration-300',
					isPassed && 'after:ui-opacity-100 hover:after:ui-opacity-20',
					canScrollTo && 'ui-cursor-pointer',
					'ui-relative ui-min-w-0 ui-shrink-0 ui-grow-0 ui-basis-full',
					orientation === 'horizontal'
						? 'ui-pl-4 after:ui-left-4'
						: 'ui-pt-4 after:ui-top-4',
					className,
				)}
				{...props}
			/>
		);
	},
);
CarouselItem.displayName = 'CarouselItem';

const CarouselPrevious = React.forwardRef<
	HTMLButtonElement,
	React.ComponentProps<typeof ButtonRoot>
>(({ className, variant = 'ghost', size = 'icon', ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();

	return (
		<ButtonRoot
			ref={ref}
			variant={variant}
			size={size}
			className={cn(
				'ui-h-8 ui-w-8 ui-rounded-md',
				orientation === 'vertical' && 'ui-rotate-90',
				className,
			)}
			disabled={!canScrollPrev}
			onPress={scrollPrev}
			{...props}>
			<Icon i={'ArrowLeft'} />
			{/*todo: change to children to allow translations*/}
			<ButtonLabel srOnly>Previous slide</ButtonLabel>
		</ButtonRoot>
	);
});
CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = React.forwardRef<
	HTMLButtonElement,
	React.ComponentProps<typeof ButtonRoot>
>(({ className, variant = 'ghost', size = 'icon', ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel();

	return (
		<ButtonRoot
			ref={ref}
			variant={variant}
			size={size}
			className={cn(
				'ui-h-8 ui-w-8 ui-rounded-md',
				orientation === 'vertical' && 'ui-rotate-90',
				className,
			)}
			disabled={!canScrollNext}
			onPress={scrollNext}
			{...props}>
			<Icon i={'ArrowRight'} />
			{/*todo: change to children to allow translations*/}
			<ButtonLabel srOnly>Next slide</ButtonLabel>
		</ButtonRoot>
	);
});
CarouselNext.displayName = 'CarouselNext';

const CarouselReset = React.forwardRef<
	HTMLButtonElement,
	React.ComponentProps<typeof ButtonRoot>
>(({ className, ...props }, ref) => {
	const { api, canScrollPrev } = useCarousel();

	return (
		<ButtonRoot
			ref={ref}
			disabled={!canScrollPrev}
			variant="ghost"
			size="icon"
			className={cn('ui-h-8 ui-w-8 ui-rounded-md', className)}
			onPress={() => api?.scrollTo(0)}
			{...props}>
			<Icon i={'Refresh'} />
		</ButtonRoot>
	);
});
CarouselReset.displayName = 'CarouselReset';

export {
	type CarouselApi,
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
	CarouselReset,
};
