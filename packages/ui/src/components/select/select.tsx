'use client';

import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { AnimatePresence, motion } from 'framer-motion';
import { tv } from 'tailwind-variants';

import { cn } from '#utils';
import { FocusRing } from '#components/focus-ring';
import { Icon, IconProps } from '#components/icons';

const selectVariants = tv({
	slots: {
		trigger: [
			'flex h-9 w-full cursor-pointer items-center justify-between rounded-md border border-border/80 bg-card p-2 pl-4',
			'text-sm font-medium text-contrasted-max outline-none',
			'data-[placeholder]:text-contrasted-min',
			'disabled:cursor-not-allowed disabled:opacity-50',
		],
		content: [
			'relative z-50 min-w-32 overflow-hidden rounded-md border border-border/80 bg-card',
		],
		icon: [
			'text-contrasted-mid opacity-50 motion-safe:transition-transform motion-safe:duration-150',
		],
		viewport: ['space-y-2 p-2'],
		label: [
			'inline-flex items-center gap-1 px-2 py-1.5 text-sm font-medium text-contrasted-min',
		],
		separator: ['-mx-1 my-1 h-px bg-border'],
		item: [
			'group relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5',
			'text-sm text-contrasted-max outline-none',
			'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
		],
		itemBackground: [
			'absolute inset-0 scale-75 rounded-inherit bg-foreground/10 opacity-0 motion-safe:transition-gpu motion-safe:duration-200',
			'group-hover:scale-100 group-hover:opacity-50',
			'group-data-[state="checked"]:scale-100 group-data-[state="checked"]:opacity-100',
		],
		itemText: [
			'inline-block motion-safe:transition-transform motion-safe:duration-150',
			'group-hover:translate-x-3',
			'group-data-[state="checked"]:translate-x-6',
		],
		indicator: 'absolute left-2 flex size-3.5 items-center justify-center',
	},
	variants: {
		isOpen: {
			true: { icon: '-rotate-180' },
			false: { icon: 'rotate-0' },
		},
		position: {
			popper: {
				content: [
					'data-[side=bottom]:mt-1 data-[side=left]:mr-1 data-[side=right]:ml-1 data-[side=top]:mb-1',
					'w-[var(--radix-select-trigger-width)]',
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
