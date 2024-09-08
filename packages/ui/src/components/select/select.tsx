'use client';

import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { FocusRing } from '#components/focus-ring';
import { Icon, IconProps } from '#components/icons';
import { cn } from '#utils';
import { AnimatePresence, motion } from 'framer-motion';
import { tv } from 'tailwind-variants';

const selectVariants = tv({
	slots: {
		trigger: [
			'ui-flex ui-h-9 ui-w-full ui-cursor-pointer ui-items-center ui-justify-between ui-rounded-md ui-border ui-border-border/80 ui-bg-card ui-p-2 ui-pl-4',
			'ui-text-sm ui-font-medium ui-text-contrasted-max ui-outline-none',
			'data-[placeholder]:ui-text-contrasted-min',
			'disabled:ui-cursor-not-allowed disabled:ui-opacity-50',
		],
		content: [
			'ui-relative ui-z-50 ui-min-w-32 ui-overflow-hidden ui-rounded-md ui-border ui-border-border/80 ui-bg-card',
		],
		icon: [
			'ui-text-contrasted-mid ui-opacity-50 motion-safe:ui-transition-transform motion-safe:ui-duration-150',
		],
		viewport: ['ui-space-y-2 ui-p-2'],
		label: [
			'ui-inline-flex ui-items-center ui-gap-1 ui-px-2 ui-py-1.5 ui-text-sm ui-font-medium ui-text-contrasted-min',
		],
		separator: ['-ui-mx-1 ui-my-1 ui-h-px ui-bg-border'],
		item: [
			'ui-group ui-relative ui-flex ui-w-full ui-cursor-pointer ui-select-none ui-items-center ui-rounded-sm ui-px-2 ui-py-1.5',
			'ui-text-sm ui-text-contrasted-max ui-outline-none',
			'data-[disabled]:ui-pointer-events-none data-[disabled]:ui-opacity-50',
		],
		itemBackground: [
			'ui-absolute ui-inset-0 ui-scale-75 ui-rounded-inherit ui-bg-foreground/10 ui-opacity-0 motion-safe:ui-transition-gpu motion-safe:ui-duration-200',
			'group-hover:ui-scale-100 group-hover:ui-opacity-50',
			'group-data-[state="checked"]:ui-scale-100 group-data-[state="checked"]:ui-opacity-100',
		],
		itemText: [
			'ui-inline-block motion-safe:ui-transition-transform motion-safe:ui-duration-150',
			'group-hover:ui-translate-x-3',
			'group-data-[state="checked"]:ui-translate-x-6',
		],
		indicator:
			'ui-absolute ui-left-2 ui-flex ui-size-3.5 ui-items-center ui-justify-center',
	},
	variants: {
		isOpen: {
			true: { icon: '-ui-rotate-180' },
			false: { icon: 'ui-rotate-0' },
		},
		position: {
			popper: {
				content: [
					'data-[side=bottom]:ui-mt-1 data-[side=left]:ui-mr-1 data-[side=right]:ui-ml-1 data-[side=top]:ui-mb-1',
					'ui-w-[var(--radix-select-trigger-width)]',
				],
			},
			'item-aligned': {},
		},
	},
});

const {
	trigger,
	content,
	icon,
	viewport,
	label,
	separator,
	item,
	itemBackground,
	itemText,
	indicator,
} = selectVariants();

type SelectContextType = {
	isOpen: boolean;
};

const SelectContext = React.createContext<SelectContextType>({
	isOpen: false,
});
const useSelectContext = () => {
	const context = React.useContext(SelectContext);
	if (context === undefined) {
		throw new Error('useSelectContext must be used within a SelectProvider');
	}
	return context;
};

type SelectProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>;
const Select: React.FC<SelectProps> = ({ children, ...props }) => {
	const [isOpen = false, setIsOpen] = useControllableState<boolean>({
		prop: props.open,
		defaultProp: props.defaultOpen,
		onChange: props.onOpenChange,
	});
	const handleChange = (open: boolean) => {
		setIsOpen(open);
		props.onOpenChange?.(open);
	};

	return (
		<SelectContext.Provider value={{ isOpen }}>
			<SelectPrimitive.Root {...props} onOpenChange={handleChange}>
				{children}
			</SelectPrimitive.Root>
		</SelectContext.Provider>
	);
};

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
	const { isOpen } = useSelectContext();

	return (
		<FocusRing isTextInput>
			<SelectPrimitive.Trigger ref={ref} className={cn(trigger(), className)} {...props}>
				{children}
				<SelectPrimitive.Icon asChild>
					<SelectIcon isOpen={isOpen} />
				</SelectPrimitive.Icon>
			</SelectPrimitive.Trigger>
		</FocusRing>
	);
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

type SelectIconProps = Omit<IconProps, 'size' | 'i'> & Pick<SelectContextType, 'isOpen'>;

const SelectIcon: React.FC<SelectIconProps> = ({ className, isOpen, ...props }) => (
	<Icon
		i={'ChevronDown'}
		size={'sm'}
		className={cn(icon({ isOpen }), className)}
		{...props}
	/>
);

const SelectViewport: React.FC<SelectPrimitive.SelectViewportProps> = ({
	className,
	...props
}) => <SelectPrimitive.Viewport className={cn(viewport(), className)} {...props} />;

const SelectContent = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
	<SelectPrimitive.Portal>
		<AnimatePresence>
			<SelectPrimitive.Content
				ref={ref}
				className={cn(content({ position }), className)}
				position={position}
				{...props}
				asChild>
				<motion.div
					initial={{ opacity: 0.5, scale: 0.75 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.07, duration: 0.15 }}>
					<SelectViewport>{children}</SelectViewport>
				</motion.div>
			</SelectPrimitive.Content>
		</AnimatePresence>
	</SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Label>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Label ref={ref} className={cn(label(), className)} {...props} />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Item ref={ref} className={cn(item(), className)} {...props}>
		{/**Hover Pill*/}
		<span className={cn(itemBackground())} />
		<SelectItemIndicator />
		<SelectItemText>{children}</SelectItemText>
	</SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

type SelectItemTextProps = Omit<SelectPrimitive.SelectItemTextProps, 'asChild'>;
const SelectItemText: React.FC<SelectItemTextProps> = ({ children, ...props }) => (
	<SelectPrimitive.ItemText asChild {...props}>
		<span className={cn(itemText())}>{children}</span>
	</SelectPrimitive.ItemText>
);

const SelectItemIndicator: React.FC<SelectPrimitive.SelectItemIndicatorProps> = ({
	className,
	...props
}) => (
	<SelectPrimitive.ItemIndicator className={cn(indicator(), className)} {...props}>
		<AnimatePresence>
			<Icon
				i={'Check'}
				size={'sm'}
				pathProps={{
					initial: { pathLength: 1, pathOffset: 1 },
					animate: { pathLength: 1, pathOffset: 0 },
					transition: { delay: 0.07, duration: 0.15 },
				}}
			/>
		</AnimatePresence>
	</SelectPrimitive.ItemIndicator>
);

const SelectSeparator = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Separator
		ref={ref}
		className={cn(separator(), className)}
		{...props}
	/>
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
	Select,
	SelectGroup,
	SelectValue,
	SelectTrigger,
	SelectContent,
	SelectLabel,
	SelectItem,
	SelectSeparator,
	//
	Select as Root,
	SelectGroup as Group,
	SelectValue as Value,
	SelectTrigger as Trigger,
	SelectContent as Content,
	SelectLabel as Label,
	SelectItem as Item,
	SelectSeparator as Separator,
};
