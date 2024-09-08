'use client';

import React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { cn } from '#utils';
import { AnimatePresence, motion } from 'framer-motion';

type HoverCardContext = {
	isActive: boolean;
};
const HoverCardContext = React.createContext<HoverCardContext>({ isActive: false });

const useHoverCardContext = () => {
	const context = React.useContext(HoverCardContext);
	if (context === undefined) {
		throw new Error('useHoverCardContext must be used within a HoverCard');
	}
	return context;
};

type HoverCardProps = React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Root>;

const HoverCard: React.FC<HoverCardProps> = ({
	open,
	defaultOpen = false,
	onOpenChange,
	children,
	...props
}) => {
	const [isActive = defaultOpen, setIsActive] = useControllableState({
		prop: open,
		defaultProp: defaultOpen,
		onChange: onOpenChange,
	});

	return (
		<HoverCardContext.Provider value={{ isActive }}>
			<HoverCardPrimitive.Root
				onOpenChange={setIsActive}
				open={isActive}
				defaultOpen={defaultOpen}
				{...props}>
				{children}
			</HoverCardPrimitive.Root>
		</HoverCardContext.Provider>
	);
};

const HoverCardTrigger = HoverCardPrimitive.Trigger;

type HoverCardContentProps = React.ComponentPropsWithoutRef<
	typeof HoverCardPrimitive.Content
> &
	React.ComponentPropsWithoutRef<typeof motion.div>;
const HoverCardContent = React.forwardRef<
	React.ElementRef<typeof HoverCardPrimitive.Content>,
	HoverCardContentProps
>(({ className, align = 'center', sideOffset = 4, children, ...props }, ref) => {
	const { isActive } = useHoverCardContext();

	return (
		<AnimatePresence>
			{isActive && (
				<HoverCardPrimitive.Content
					ref={ref}
					align={align}
					sideOffset={sideOffset}
					className={cn(
						[
							'ui-z-50 ui-w-64 ui-rounded-md ui-border ui-bg-card ui-p-4 ui-text-foreground ui-shadow-md ui-outline-none',
						],
						className,
					)}
					forceMount
					asChild>
					<motion.div {...props}>{children}</motion.div>
				</HoverCardPrimitive.Content>
			)}
		</AnimatePresence>
	);
});
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export {
	HoverCard,
	HoverCardTrigger,
	HoverCardContent,
	//
	HoverCard as Root,
	HoverCardTrigger as Trigger,
	HoverCardContent as Content,
};
