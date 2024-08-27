'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { DialogProps, DialogTriggerProps } from '@radix-ui/react-dialog';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import {
	AnimatePresence,
	AnimatePresenceProps,
	motion,
	MotionConfig,
} from 'framer-motion';
import { tv } from 'tailwind-variants';

import { IOS_TRANSITION_CONFIG } from '@/config/const';
import { cn } from '#utils';
import { FocusRing } from '#components/focus-ring';
import { Icon } from '#components/icons';

const baseVariants = tv({
	slots: {
		overlay: ['fixed inset-0 z-50 bg-background/80'],
		header: ['my-4 flex flex-col space-y-1.5 text-center sm:text-left'],
		footer: ['flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'],
		title: ['text-lg font-semibold leading-none tracking-tight'],
		description: ['text-sm text-contrasted-mid'],
	},
});

const variants = tv({
	extend: baseVariants,
	slots: {
		overlay: ['grid place-items-center'],
		content: [
			'relative',
			'grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg outline-none',
			'[--closed-opacity:0%] [--closed-y:25%] [--open-opacity:100%] [--open-y:0%]',
		],
		close: [
			'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity',
			'hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-card data-[state=open]:text-contrasted-min',
		],
	},
	variants: {
		withOverflow: {
			true: {
				overlay: ['overflow-y-auto py-8'],
			},
		},
	},
});

const {
	overlay: overlayVariant,
	header: headerVariant,
	content: contentVariant,
	close: closeVariant,
	footer: footerVariant,
	title: titleVariant,
	description: descriptionVariant,
} = variants();

type DialogContextType = {
	isOpen: boolean;
};

const DialogContext = React.createContext<DialogContextType>({
	isOpen: false,
});
const useDialogContext = () => {
	const context = React.useContext(DialogContext);
	if (context === undefined) {
		throw new Error('useDialogContext must be used within a DialogProvider');
	}
	return context;
};

const Dialog: React.FC<DialogPrimitive.DialogProps> = ({
	open,
	defaultOpen,
	onOpenChange,
	children,
	...props
}) => {
	const [isOpen, setIsOpen] = useControllableState<boolean>({
		prop: open,
		defaultProp: defaultOpen,
		onChange: onOpenChange,
	});

	return (
		<DialogContext.Provider value={{ isOpen: isOpen ?? defaultOpen ?? false }}>
			<DialogPrimitive.Root
				open={isOpen}
				defaultOpen={defaultOpen}
				onOpenChange={(state) => {
					onOpenChange?.(state);
					setIsOpen(state);
				}}
				{...props}>
				{children}
			</DialogPrimitive.Root>
		</DialogContext.Provider>
	);
};

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = ({ children, ...props }: DialogPrimitive.DialogPortalProps) => (
	<DialogPrimitive.Portal {...props}>{children}</DialogPrimitive.Portal>
);
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

const overlayVariants = {
	closed: { opacity: 0 },
	open: { opacity: 1 },
};

type DialogOverlayProps = React.ComponentPropsWithoutRef<
	typeof DialogPrimitive.Overlay
> & {
	withOverflow?: boolean;
};
const DialogOverlay = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Overlay>,
	DialogOverlayProps
>(({ className, children, ...props }, ref) => (
	<DialogPrimitive.Overlay
		ref={ref}
		className={cn(overlayVariant(), className)}
		{...props}
		asChild>
		<motion.div variants={overlayVariants} initial="closed" animate="open" exit="closed">
			{children}
		</motion.div>
	</DialogPrimitive.Overlay>
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const dialogVariants = {
	closed: { opacity: 'var(--closed-opacity)', y: 'var(--closed-y)' },
	open: { opacity: 'var(--open-opacity)', y: 'var(--open-y)' },
};

type DialogContentProps = React.ComponentPropsWithoutRef<
	typeof DialogPrimitive.Content
> & {
	portalProps?: DialogPrimitive.DialogPortalProps;
	animatePresenceProps?: AnimatePresenceProps;
} & Pick<DialogOverlayProps, 'withOverflow'>;

const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
	(
		{ withOverflow, portalProps, animatePresenceProps, className, children, ...props },
		ref,
	) => {
		const { isOpen } = useDialogContext();
		return (
			<AnimatePresence {...animatePresenceProps}>
				{isOpen && (
					<DialogPortal {...portalProps} forceMount>
						<DialogOverlay className={cn(overlayVariant({ withOverflow }))}>
							<MotionConfig transition={IOS_TRANSITION_CONFIG} reducedMotion={'user'}>
								<DialogPrimitive.Content ref={ref} {...props} forceMount>
									<motion.div
										className={cn(contentVariant(), className)}
										variants={dialogVariants}
										initial="closed"
										animate="open"
										exit="closed">
										{children}
										<DialogClose />
									</motion.div>
								</DialogPrimitive.Content>
							</MotionConfig>
						</DialogOverlay>
					</DialogPortal>
				)}
			</AnimatePresence>
		);
	},
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogClose = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Close>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, ...props }, ref) => (
	<FocusRing>
		<DialogPrimitive.Close ref={ref} className={cn(closeVariant(), className)} {...props}>
			<Icon i={'XClose'} size={'md'} />
			<span className="sr-only">Close</span>
		</DialogPrimitive.Close>
	</FocusRing>
));

DialogClose.displayName = DialogPrimitive.Close.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn(headerVariant(), className)} {...props} />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn(footerVariant(), className)} {...props} />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Title ref={ref} className={cn(titleVariant(), className)} {...props} />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Description
		ref={ref}
		className={cn(descriptionVariant(), className)}
		{...props}
	/>
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
	Dialog,
	DialogPortal,
	DialogOverlay,
	DialogTrigger,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogFooter,
	DialogTitle,
	DialogDescription,
	//
	Dialog as Root,
	DialogPortal as Portal,
	DialogOverlay as Overlay,
	DialogTrigger as Trigger,
	DialogClose as Close,
	DialogContent as Content,
	DialogHeader as Header,
	DialogFooter as Footer,
	DialogTitle as Title,
	DialogDescription as Description,
	// Style are used by drawer component
	baseVariants,
	overlayVariant,
	headerVariant,
	contentVariant,
	footerVariant,
	titleVariant,
	descriptionVariant,
};

export type { DialogProps, DialogTriggerProps };
