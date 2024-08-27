'use client';

import React from 'react';
import { tv } from 'tailwind-variants';
import { Drawer as DrawerPrimitive } from 'vaul';

import { cn } from '#utils';

import { baseVariants } from '../dialog';

const variants = tv({
	extend: baseVariants,
	slots: {
		content: [
			'group fixed inset-x-2 bottom-0 z-50 mt-24 flex max-h-[96%] flex-col rounded-t-lg border bg-card focus:outline-none',
		],
		scrollView: ['flex w-full flex-col overflow-auto p-4'],
		thumb: [
			'mx-auto h-1.5 w-24 rounded-full bg-contrasted-min opacity-50 outline-none transition-opacity group-hover:opacity-100',
		],
	},
});

const {
	overlay: overlayVariant,
	header: headerVariant,
	content: contentVariant,
	footer: footerVariant,
	title: titleVariant,
	description: descriptionVariant,
	thumb: thumbVariant,
	scrollView: scrollViewVariant,
} = variants();

const Drawer = ({
	shouldScaleBackground = true,
	...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
	<DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);
Drawer.displayName = 'Drawer';

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
	React.ElementRef<typeof DrawerPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DrawerPrimitive.Overlay
		ref={ref}
		className={cn(overlayVariant(), className)}
		{...props}
	/>
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
	React.ElementRef<typeof DrawerPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<DrawerPortal>
		<DrawerOverlay />
		<DrawerPrimitive.Content
			ref={ref}
			className={cn(contentVariant(), className)}
			{...props}>
			<DrawerScrollView>
				<div className={cn(thumbVariant())} />
				{children}
			</DrawerScrollView>
		</DrawerPrimitive.Content>
	</DrawerPortal>
));
DrawerContent.displayName = 'DrawerContent';

const DrawerScrollView = React.forwardRef<
	React.ElementRef<'div'>,
	React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn(scrollViewVariant(), className)} {...props} />
));

DrawerScrollView.displayName = 'DrawerScrollView';

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn(headerVariant(), className)} {...props} />
);
DrawerHeader.displayName = 'DrawerHeader';

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn(footerVariant(), className)} {...props} />
);
DrawerFooter.displayName = 'DrawerFooter';

const DrawerTitle = React.forwardRef<
	React.ElementRef<typeof DrawerPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DrawerPrimitive.Title ref={ref} className={cn(titleVariant(), className)} {...props} />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
	React.ElementRef<typeof DrawerPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
	<DrawerPrimitive.Description
		ref={ref}
		className={cn(descriptionVariant(), className)}
		{...props}
	/>
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
	Drawer,
	DrawerPortal,
	DrawerOverlay,
	DrawerTrigger,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerFooter,
	DrawerTitle,
	DrawerDescription,
	//
	Drawer as Root,
	DrawerPortal as Portal,
	DrawerOverlay as Overlay,
	DrawerTrigger as Trigger,
	DrawerClose as Close,
	DrawerContent as Content,
	DrawerScrollView as ScrollView,
	DrawerHeader as Header,
	DrawerFooter as Footer,
	DrawerTitle as Title,
	DrawerDescription as Description,
};
