'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { useFocusRing } from '@react-aria/focus';
import { cn } from '#utils';
import { AnimatePresence, AnimatePresenceProps, motion } from 'framer-motion';
import { tv } from 'tailwind-variants';

type TabsContext = {
	value: string;
	defaultValue: string;
	setValue: (value: string) => void;
};

const TabsContext = React.createContext<TabsContext>({
	value: '',
	defaultValue: '',
	setValue: () => {},
});

const useTabsContext = () => {
	const context = React.useContext(TabsContext);
	if (!context) {
		throw new Error(
			'Tabs compound components cannot be rendered outside the Tabs component',
		);
	}
	return context;
};

const variants = tv({
	slots: {
		list: [
			'ui-flex ui-w-max ui-max-w-full ui-items-center ui-justify-between ui-gap-2',
			'ui-overflow-x-scroll ui-rounded-lg ui-border ui-bg-card ui-p-1 sm:ui-overflow-hidden',
		],
		trigger: [
			'ui-relative ui-whitespace-nowrap ui-rounded-sm ui-px-4 ui-py-1 ui-text-base ui-font-semibold',
			'ui-outline-none',
			'disabled:ui-pointer-events-none disabled:ui-opacity-50',
		],
		triggerLabel:
			'ui-relative ui-z-10 motion-safe:ui-transition-opacity motion-safe:ui-duration-300 motion-safe:ui-ease-in-out',
		triggerPill: ['ui-absolute ui-inset-0 ui-rounded-sm ui-bg-border'],
	},
	variants: {
		isActive: {
			true: {
				triggerLabel: 'ui-opacity-100',
			},
			false: {
				triggerLabel: 'ui-opacity-80',
			},
		},
		isFocused: {
			true: {
				triggerPill: 'ui-ring-1 ui-ring-foreground ui-ring-offset-2 ui-ring-offset-card',
			},
			false: {
				triggerPill: '',
			},
		},
	},
});

const { list, trigger, triggerLabel, triggerPill } = variants();

type TabsProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>;
const Tabs = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Root>, TabsProps>(
	({ defaultValue = '', ...props }, ref) => {
		const [selectedItem = defaultValue, setSelectedItem] = useControllableState<string>({
			prop: props.value,
			defaultProp: defaultValue,
			onChange: props.onValueChange,
		});

		return (
			<TabsContext.Provider
				value={React.useMemo(
					() => ({
						value: selectedItem,
						defaultValue: defaultValue,
						setValue: setSelectedItem,
					}),
					[selectedItem, setSelectedItem, defaultValue],
				)}>
				<TabsPrimitive.Root
					ref={ref}
					{...props}
					value={selectedItem}
					defaultValue={defaultValue}
					onValueChange={setSelectedItem}
				/>
			</TabsContext.Provider>
		);
	},
);

Tabs.displayName = TabsPrimitive.Root.displayName;

const TabsList = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.List ref={ref} className={cn(list(), className)} {...props} />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
	const { value } = useTabsContext();
	const isActive = value === props.value;
	const { focusProps, isFocusVisible: isFocused } = useFocusRing(props);
	return (
		<TabsPrimitive.Trigger
			ref={ref}
			className={cn(trigger(), className)}
			{...props}
			{...focusProps}>
			{isActive && (
				<motion.div
					layoutId={'tab-list-active-pill'}
					transition={{ duration: 0.3 }}
					className={cn(triggerPill({ isFocused }))}
				/>
			)}
			<span className={cn(triggerLabel({ isActive }))}>{children}</span>
		</TabsPrimitive.Trigger>
	);
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

type TabsContentProps = React.ComponentPropsWithoutRef<typeof motion.div> &
	TabsPrimitive.TabsContentProps & {
		presenceProps?: AnimatePresenceProps;
	};

const TabsContent = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Content>,
	TabsContentProps
>(({ className, presenceProps, children, ...props }, ref) => {
	const { value, defaultValue } = useTabsContext();
	const isActive = value === props.value;
	const isDefaultActive = defaultValue === props.value;

	return (
		<AnimatePresence {...presenceProps}>
			{isActive && (
				<TabsPrimitive.Content
					ref={ref}
					className={cn(
						'ui-inline-flex ui-justify-center ui-ring-offset-background',
						'focus-visible:ui-outline-none focus-visible:ui-ring-2 focus-visible:ui-ring-foreground focus-visible:ui-ring-offset-2',
						className,
					)}
					forceMount
					{...props}
					asChild>
					<motion.div
						key={props.value}
						initial={isDefaultActive ? 'visible' : 'hidden'}
						animate={isActive ? 'visible' : 'hidden'}
						exit={'hidden'}>
						{children}
					</motion.div>
				</TabsPrimitive.Content>
			)}
		</AnimatePresence>
	);
});
TabsContent.displayName = TabsPrimitive.Content.displayName;

export {
	Tabs,
	TabsList,
	TabsTrigger,
	TabsContent,
	//
	Tabs as Root,
	TabsList as List,
	TabsTrigger as Trigger,
	TabsContent as Content,
	//
	useTabsContext,
};
