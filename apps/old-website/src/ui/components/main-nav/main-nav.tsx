'use client';

import React from 'react';
import Link from 'next/link';
import { motion, MotionConfig } from 'framer-motion';
import useMeasure from 'react-use-measure';
import { tv, VariantProps } from 'tailwind-variants';

import { WEB_ROOT } from '@/config/const';
import { cn } from '@/lib/utils';
import { Container } from '@repo/ui/container';
import { Icon } from '@repo/ui/icons';
import * as Nav from '@repo/ui/navigation-menu';
import { DialogTrigger as ContactDialogTrigger } from '@ui/components/contact';
import { Logo } from '@ui/components/logo';
import { SimpleButton } from '@ui/components/simple-button';

export const MainNavbar = () => {
	return (
		<div className={'overflow-x-hidden'}>
			<StaticNav />
			<FixedNav />
		</div>
	);
};

const fixedNavVariants = tv({
	slots: {
		wrapper: [
			'fixed left-1/2 top-0 z-50 -translate-x-1/2 overflow-hidden py-6 pb-1 max-lg:hidden',
		],
		inner: [
			'relative flex w-max items-center gap-1 overflow-hidden rounded-2xl border bg-background',
			'p-[var(--inner-padding)] [--border-width:1px] [--inner-padding:theme(spacing.1)]',
			'[filter:drop-shadow(2px_4px_6px_theme(colors.background))]',
		],
		item: [
			'relative inline-flex items-center gap-1 rounded-xl px-6 py-3',
			'hover:[--hover-opacity:100%] hover:[--hover-scale:100%]',
		],
		icon: ['stroke-2'],
		itemActive: [
			'absolute inset-0 -z-10 rounded-inherit border-neutral-700 bg-neutral-900 transition-gpu duration-300',
			'scale-[var(--hover-scale,75%)] opacity-[var(--hover-opacity,0)]',
		],
	},
});

const {
	wrapper: fixedWrapper,
	inner: fixedInner,
	item: fixedItem,
	itemActive: fixedItemActive,
	icon,
} = fixedNavVariants();

const NavButtonVariants = {
	hide: { opacity: 0, x: 'calc(100% + var(--inner-padding))', y: '-50%' },
	show: { opacity: 1, x: 0, y: '-50%' },
};

const FixedNav: React.FC<{}> = () => {
	const [revealButton, setRevealButton] = React.useState(false);
	const [isAnimating, setAnimating] = React.useState(false);
	const [navRef, navBounds] = useMeasure();
	const [buttonRef, buttonBounds] = useMeasure();
	React.useEffect(() => {
		const handleScroll = () => {
			const { scrollTop } = document.documentElement;
			setRevealButton(scrollTop > 0);
		};
		handleScroll();
		document.addEventListener('scroll', handleScroll);
		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const wrapperWidth = navBounds.width + (revealButton ? buttonBounds.width : 0);
	return (
		<MotionConfig transition={{ duration: 0.24 }}>
			<div className={fixedWrapper()}>
				<Container size={'2xl'}>
					<motion.div
						className={cn(fixedInner(), {
							'overflow-visible': !isAnimating && revealButton,
						})}
						initial={false}
						animate={{
							width:
								wrapperWidth === 0
									? 'auto'
									: `calc(${wrapperWidth}px + 2*var(--inner-padding) + 2*var(--border-width))`,
						}}
						onAnimationStart={() => setAnimating(true)}
						onAnimationComplete={() => setAnimating(false)}>
						<Nav.Root ref={navRef}>
							<Nav.List>
								<NavItem href={'/'}>
									<Icon i={'ArrowUp'} className={icon()} /> Accueil
								</NavItem>
								<NavItem href={'/services/landing-page'}>
									<Icon i={'Rocket'} className={icon()} /> Landing Page
								</NavItem>
							</Nav.List>
						</Nav.Root>

						<motion.div
							ref={buttonRef}
							className={'absolute right-1 top-1/2 inline-flex items-center gap-2 ps-1'}
							variants={NavButtonVariants}
							initial={'hide'}
							animate={revealButton ? 'show' : 'hide'}
							transition={{ duration: revealButton ? 0.24 : 0.19 }}>
							<div className={'ml-2 h-5 w-px bg-border'} />
							<ContactButton excludeFromTabOrder={!revealButton} />
						</motion.div>
					</motion.div>
				</Container>
			</div>
		</MotionConfig>
	);
};

const staticNavVariants = tv({
	slots: {
		inner: ['flex w-full items-center justify-between py-6'],
	},
});

const { inner } = staticNavVariants();

const topNavVariants = {
	logo: {
		hide: { opacity: 0, x: '-100%' },
		show: { opacity: 1, x: 0 },
	},
	button: {
		hide: { opacity: 0, x: '100%' },
		show: { opacity: 1, x: 0 },
	},
};

const StaticNav: React.FC<{}> = () => {
	/*const [navRef, { top, height }] = useMeasure();*/
	const [isNavVisible, setNavVisible] = React.useState(true);
	React.useEffect(
		() => {
			const handleScroll = () => {
				const { scrollTop } = document.documentElement;
				setNavVisible(!(scrollTop > 0));
			};
			handleScroll();
			document.addEventListener('scroll', handleScroll);
			return () => {
				document.removeEventListener('scroll', handleScroll);
			};
		},
		[
			/*top, height*/
		],
	);
	return (
		<MotionConfig transition={{ duration: 0.19 }}>
			<Container size={'2xl'}>
				<motion.div className={inner()} animate={isNavVisible ? 'show' : 'hide'}>
					{/*todo add container query removing letters*/}
					<motion.div variants={topNavVariants.logo}>
						<Link href={WEB_ROOT} aria-label={"Allez à la page d'accueil"}>
							<Logo uniqueId={'main-nav-logo-tiny'} full className={'hidden sm:block'} />
							<Logo uniqueId={'main-nav-logo-full'} className={'sm:hidden'} />
						</Link>
					</motion.div>
					<motion.div variants={topNavVariants.button}>
						<ContactButton excludeFromTabOrder={!isNavVisible} />
					</motion.div>
				</motion.div>
			</Container>
		</MotionConfig>
	);
};

const navItemVariants = tv({
	base: ['whitespace-nowrap'],
	variants: {
		disabled: {
			true: ['pointer-events-none opacity-50'],
		},
	},
	defaultVariants: {
		disabled: false,
	},
});
type NavItemVariantProps = Pick<VariantProps<typeof navItemVariants>, 'disabled'>;
type NavItemProps = NavItemVariantProps & React.ComponentPropsWithoutRef<typeof Link>;
const NavItem = React.forwardRef<React.ElementRef<typeof Link>, NavItemProps>(
	({ className, children, disabled, ...props }, ref) => {
		return (
			<Nav.Item className={navItemVariants({ disabled })}>
				<Nav.Link asChild>
					<Link ref={ref} className={cn(fixedItem(), className)} {...props}>
						{children}
						<span className={fixedItemActive()} />
					</Link>
				</Nav.Link>
			</Nav.Item>
		);
	},
);
NavItem.displayName = 'ListItem';

type ContactButtonProps = Partial<React.ComponentPropsWithoutRef<typeof SimpleButton>>;
const ContactButton: React.FC<ContactButtonProps> = (props) => (
	<ContactDialogTrigger>
		<SimpleButton
			label={'Contactez nous'}
			icon={'Send'}
			iconPosition={'left'}
			{...props}
		/>
	</ContactDialogTrigger>
);
