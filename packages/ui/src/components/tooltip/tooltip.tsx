'use client';

import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { AnimatePresence, motion } from 'framer-motion';
import { tv } from 'tailwind-variants';

import { cn, VariantProps } from '#utils';

const _tooltipVariants = tv({
	slots: {
		trigger: [
			'focus-visible:ring-foreground focus-visible:ring-offset-background',
			'outline-none',
		],
		content: [
			'relative z-50 rounded-lg border bg-card p-4 text-sm text-contrasted [text-wrap:balance]',
			'max-w-screen',
		],
	},
	variants: {
		focusShape: {
			badge: {
				trigger: ['rounded-lg focus-visible:ring-2 focus-visible:ring-offset-4'],
			},
			inline: {
				trigger: ['rounded-sm focus-visible:ring-1 focus-visible:ring-offset-2'],
			},
		},
		size: {
			sm: { content: 'w-[192px]' },
			md: { content: 'w-[256px]' },
			lg: { content: 'w-[320px]' },
			xl: { content: 'w-[428px]' },
			full: { content: 'w-full' },
		},
	},
});

const { trigger, content } = _tooltipVariants();

type TooltipStyleProps = Pick<
	TooltipPrimitive.TooltipContentProps,
	'align' | 'alignOffset' | 'side' | 'sideOffset'
> &
	TooltipPrimitive.TooltipProps;

type TooltipProviderProps = TooltipPrimitive.TooltipProviderProps;
const TooltipProvider: React.FC<TooltipProviderProps> = ({ children, ...props }) => (
	<TooltipPrimitive.Provider delayDuration={0} {...props}>
		{children}
	</TooltipPrimitive.Provider>
);

type TooltipContextType = {
	isOpen: boolean;
	isFocus: boolean;
	setIsOpen: (open: boolean) => void;
	setIsFocus: (open: boolean) => void;
};

const TooltipContext = React.createContext<TooltipContextType>({
	isOpen: false,
	isFocus: false,
	setIsOpen: () => {},
	setIsFocus: () => {},
});

const useTooltipContext = () => {
	const context = React.useContext(TooltipContext);
	if (context === undefined) {
		throw new Error('useTooltipContext must be used within a TooltipProvider');
	}
	return context;
};

const Tooltip: React.FC<TooltipPrimitive.TooltipProps> = ({
	open,
	defaultOpen = false,
	onOpenChange,
	...props
}) => {
	const [isOpen = defaultOpen, setIsOpen] = useControllableState<boolean>({
		prop: open,
		defaultProp: defaultOpen,
		onChange: onOpenChange,
	});

	/*@see https://github.com/radix-ui/primitives/pull/2392*/
	const [isFocus, setIsFocus] = React.useState(false);

	return (
		<TooltipContext.Provider
			value={React.useMemo(
				() => ({ isOpen, isFocus, setIsOpen, setIsFocus }),
				[isFocus, isOpen, setIsOpen],
			)}>
			<TooltipPrimitive.Root
				onOpenChange={setIsOpen}
				open={isOpen}
				defaultOpen={defaultOpen}
				{...props}
			/>
		</TooltipContext.Provider>
	);
};

type TooltipTriggerVariantProps = Pick<VariantProps<typeof trigger>, 'focusShape'>;
type TooltipTriggerProps = React.ComponentPropsWithoutRef<
	typeof TooltipPrimitive.Trigger
> &
	TooltipTriggerVariantProps;
const TooltipTrigger = React.forwardRef<
	React.ElementRef<typeof TooltipPrimitive.Trigger>,
	TooltipTriggerProps
>(({ className, focusShape, children, ...props }, ref) => {
	const { setIsFocus } = useTooltipContext();
	return (
		<TooltipPrimitive.Trigger
			ref={ref}
			className={cn(trigger({ focusShape }), className)}
			onFocus={() => {
				setIsFocus(true);
			}}
			onBlur={() => {
				setIsFocus(false);
			}}
			{...props}>
			{children}
		</TooltipPrimitive.Trigger>
	);
});

TooltipTrigger.displayName = TooltipPrimitive.Trigger.displayName;

const TooltipArrow = () => (
	<TooltipPrimitive.Arrow asChild>
		<svg
			width="12"
			height="8"
			viewBox="0 0 12 8"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path d="M6 8L12 0H0L6 8Z" className="fill-border" />
		</svg>
	</TooltipPrimitive.Arrow>
);

/*const contentVariants = {
	initial: { opacity: 0, transition: { duration: 0.11, delay: 0.22 } },
	exit: { opacity: 0, transition: { duration: 0.11 } },
	animate: {
		opacity: 1,
		transition: { delayChildren: 0.22, duration: 0.11, delay: 0.22 },
	},
};*/
type GlobalContentProps = 'sideOffset';
type ContentSize = Pick<VariantProps<typeof content>, 'size'>;

type TooltipContentProps = Omit<
	React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
	GlobalContentProps
> &
	React.ComponentPropsWithoutRef<typeof motion.div> &
	ContentSize;
const TooltipContent = React.forwardRef<
	React.ElementRef<typeof TooltipPrimitive.Content>,
	TooltipContentProps
>(({ children, className, side, size, ...props }, ref) => {
	/*console.log(`-- id: ${children.toString()}`);
	console.log(`content: ${isOpen}`);
	console.log(`--`);*/
	const { isFocus, isOpen } = useTooltipContext();
	return (
		<AnimatePresence>
			{(isFocus || isOpen) && (
				<TooltipPrimitive.Content
					ref={ref}
					sideOffset={8}
					side={side}
					className={cn(content({ size }), className)}
					forceMount
					asChild>
					<motion.div {...props}>
						{/*	initial={'initial'}
						animate={'animate'}
						variants={contentVariants}*/}
						{children}
						<TooltipArrow />
					</motion.div>
				</TooltipPrimitive.Content>
			)}
		</AnimatePresence>
	);
});

TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export {
	Tooltip,
	TooltipTrigger,
	TooltipContent,
	TooltipProvider,
	//
	Tooltip as Root,
	TooltipTrigger as Trigger,
	TooltipContent as Content,
	TooltipProvider as Provider,
};

export type { TooltipStyleProps as StyleProps, TooltipContentProps, TooltipTriggerProps };
