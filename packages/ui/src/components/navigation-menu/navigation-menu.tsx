import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { Icon } from '#components/icons';
import { cn } from '#utils';
import { tv } from 'tailwind-variants';

const navigationMenuVariants = tv({
	slots: {
		menu: 'ui-relative ui-z-10 ui-flex ui-max-w-max ui-flex-1 ui-items-center ui-justify-center',
		list: 'ui-group ui-flex ui-list-none ui-items-center ui-justify-center ui-gap-2',
		trigger: [
			'ui-group ui-inline-flex ui-items-center ui-justify-center ui-rounded-md ui-bg-background ui-text-sm ui-font-medium ui-transition-colors focus:ui-outline-none disabled:ui-pointer-events-none disabled:ui-opacity-50',
			/* focus:bg-accent focus:text-accent-foreground  */
			'ui-h-10 ui-w-max ui-px-4 ui-py-2' /* hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent/50 data-[active]:bg-accent/50 */,
		],
		content: [
			/* data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 */
			'ui-left-0 ui-top-0 ui-w-full md:ui-absolute md:ui-w-auto',
		],
		viewport: [
			'ui-relative ui-mt-1.5 ui-h-[var(--radix-navigation-menu-viewport-height)] ui-w-full ui-origin-top ui-overflow-hidden ui-rounded-md ui-border ui-bg-card ui-text-foreground ui-shadow-lg',
			'md:ui-w-[var(--radix-navigation-menu-viewport-width)]' /*data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90*/,
		],
		indicator: [
			'ui-top-full ui-z-[1] ui-flex ui-h-1.5 ui-items-end ui-justify-center ui-overflow-hidden',
			// data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in
		],
	},
});

const {
	menu: root,
	list,
	trigger,
	content,
	viewport,
	indicator,
} = navigationMenuVariants();

export type NavigationMenuProps = ComponentPropsWithoutRef<
	typeof NavigationMenuPrimitive.Root
>;
const NavigationMenu = forwardRef<
	ElementRef<typeof NavigationMenuPrimitive.Root>,
	NavigationMenuProps
>(({ className, children, ...props }, ref) => (
	<NavigationMenuPrimitive.Root ref={ref} className={cn(root(), className)} {...props}>
		{children}
		<NavigationMenuViewport />
	</NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = forwardRef<
	ElementRef<typeof NavigationMenuPrimitive.List>,
	ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.List ref={ref} className={cn(list(), className)} {...props} />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const NavigationMenuTrigger = forwardRef<
	ElementRef<typeof NavigationMenuPrimitive.Trigger>,
	ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<NavigationMenuPrimitive.Trigger
		ref={ref}
		className={cn(trigger(), className)}
		{...props}>
		{children}{' '}
		<Icon
			i={'ChevronDown'}
			className="ui-relative ui-top-px ui-ml-1 ui-size-3 ui-transition ui-duration-200 group-data-[state=open]:ui-rotate-180"
			aria-hidden="true"
		/>
	</NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = forwardRef<
	ElementRef<typeof NavigationMenuPrimitive.Content>,
	ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Content
		ref={ref}
		className={cn(content(), className)}
		{...props}
	/>
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = forwardRef<
	ElementRef<typeof NavigationMenuPrimitive.Viewport>,
	ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
	<div className={cn('ui-absolute ui-left-0 ui-top-full ui-flex ui-justify-center')}>
		<NavigationMenuPrimitive.Viewport
			className={cn(viewport(), className)}
			ref={ref}
			{...props}
		/>
	</div>
));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = forwardRef<
	ElementRef<typeof NavigationMenuPrimitive.Indicator>,
	ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Indicator
		ref={ref}
		className={cn(indicator(), className)}
		{...props}>
		<div className="ui-relative ui-top-[60%] ui-size-2 ui-rotate-45 ui-rounded-tl-sm ui-bg-border ui-shadow-md" />
	</NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

export {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuContent,
	NavigationMenuTrigger,
	NavigationMenuLink,
	NavigationMenuIndicator,
	NavigationMenuViewport,
	trigger as triggerStyle,
	//
	NavigationMenu as Root,
	NavigationMenuList as List,
	NavigationMenuItem as Item,
	NavigationMenuContent as Content,
	NavigationMenuTrigger as Trigger,
	NavigationMenuLink as Link,
	NavigationMenuIndicator as Indicator,
	NavigationMenuViewport as Viewport,
};
