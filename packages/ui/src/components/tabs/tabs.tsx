'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { useFocusRing } from '@react-aria/focus';
import { AnimatePresence, AnimatePresenceProps, motion } from 'framer-motion';
import { tv } from 'tailwind-variants';

import { cn } from '#utils';

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
			'flex w-max max-w-full items-center justify-between gap-2',
			'overflow-x-scroll rounded-lg border bg-card p-1 sm:overflow-hidden',
		],
		trigger: [
			'relative whitespace-nowrap rounded-sm px-4 py-1 text-base font-semibold',
			'outline-none',
			'disabled:pointer-events-none disabled:opacity-50',
		],
		triggerLabel:
			'relative z-10 motion-safe:transition-opacity motion-safe:duration-300 motion-safe:ease-in-out',
		triggerPill: ['absolute inset-0 rounded-sm bg-border'],
	},
	variants: {
		isActive: {
			true: {
				triggerLabel: 'opacity-100',
			},
			false: {
				triggerLabel: 'opacity-80',
			},
		},
		isFocused: {
			true: {
				triggerPill: 'ring-1 ring-foreground ring-offset-2 ring-offset-card',
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
						'inline-flex justify-center ring-offset-background',
						'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2',
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
