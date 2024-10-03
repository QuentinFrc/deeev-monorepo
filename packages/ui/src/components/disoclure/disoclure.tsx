'use client';

import React from 'react';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { cn } from '#utils';
import { motion, MotionConfig, Transition, Variant, Variants } from 'framer-motion';

import { ButtonRoot } from '../button';

type DisclosureContextType = {
	open: boolean;
	toggle: () => void;
	variants?: { expanded: Variant; collapsed: Variant };
};

const DisclosureContext = React.createContext<DisclosureContextType | undefined>(
	undefined,
);

type DisclosureProviderProps = {
	children: React.ReactNode;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	defaultOpen?: boolean;
	variants?: { expanded: Variant; collapsed: Variant };
};

function DisclosureProvider({ children, variants, ...props }: DisclosureProviderProps) {
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
		<DisclosureContext.Provider
			value={{
				open: isOpen,
				toggle: React.useCallback(() => {
					handleChange(!isOpen);
				}, [isOpen]),

				variants,
			}}>
			{children}
		</DisclosureContext.Provider>
	);
}

function useDisclosure() {
	const context = React.useContext(DisclosureContext);
	if (!context) {
		throw new Error('useDisclosure must be used within a DisclosureProvider');
	}
	return context;
}

type DisclosureProps = {
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	children: React.ReactNode;
	className?: string;
	variants?: { expanded: Variant; collapsed: Variant };
	transition?: Transition;
};

export function Disclosure({
	open,
	onOpenChange,
	children,
	className,
	transition,
	variants,
}: DisclosureProps) {
	return (
		<MotionConfig transition={transition}>
			<DisclosureProvider open={open} onOpenChange={onOpenChange} variants={variants}>
				<DisclosureWrapper className={className}>{children}</DisclosureWrapper>
			</DisclosureProvider>
		</MotionConfig>
	);
}

const DisclosureWrapper = (props: React.ComponentPropsWithoutRef<'div'>) => {
	const { open } = useDisclosure();

	return <div data-state={open ? 'open' : 'closed'} {...props} />;
};

type DisclosureTriggerProps = React.ComponentPropsWithoutRef<typeof ButtonRoot>;
export function DisclosureTrigger({
	children,
	className,
	...props
}: DisclosureTriggerProps) {
	const { toggle, open } = useDisclosure();

	const onKeyDown = (e: { key: string; preventDefault: () => void }) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			toggle();
		}
	};

	return (
		<ButtonRoot
			data-state={open ? 'open' : 'closed'}
			className={cn(className)}
			onPress={toggle}
			role={'button'}
			aria-expanded={open}
			tabIndex={0}
			onKeyDown={onKeyDown}
			{...props}>
			{children}
		</ButtonRoot>
	);
}

export function DisclosureContent({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	const { open, variants } = useDisclosure();
	const uniqueId = React.useId();

	const BASE_VARIANTS: Variants = {
		expanded: {
			height: 'auto',
			opacity: 1,
		},
		collapsed: {
			height: 'var(--collapse-height)',
			opacity: 'var(--collapse-opacity)',
		},
	};

	const combinedVariants = {
		expanded: { ...BASE_VARIANTS.expanded, ...variants?.expanded },
		collapsed: { ...BASE_VARIANTS.collapsed, ...variants?.collapsed },
	};

	return (
		<div
			data-state={open ? 'open' : 'closed'}
			className={cn(
				'ui-overflow-hidden [--collapse-height:0] [--collapse-opacity:0]',
				className,
			)}>
			<motion.div
				id={uniqueId}
				initial="collapsed"
				animate={open ? 'expanded' : 'collapsed'}
				variants={combinedVariants}>
				{children}
			</motion.div>
		</div>
	);
}

export default {
	Disclosure,
	DisclosureProvider,
	DisclosureTrigger,
	DisclosureContent,
};
