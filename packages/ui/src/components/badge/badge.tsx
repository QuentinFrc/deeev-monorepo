import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { Icon } from '#components/icons';
import { cn, tv, VariantProps } from '#utils';

const _badge = tv({
	slots: {
		root: [
			'ui-relative ui-z-10 ui-inline-flex ui-size-max ui-max-w-full ui-items-center ui-rounded-lg',
			'ui-font-semibold ui-leading-[1.42857em]',
			'after:ui-absolute after:ui-inset-0 after:-ui-z-20 after:ui-rounded-inherit',
			'before:ui-absolute before:ui-inset-0 before:-ui-z-10 before:ui-rounded-lg-minus-[1px]',
		],
		label: 'ui-relative ui-z-10 ui-inline-flex ui-px-1',
	},
	variants: {
		variant: {
			green: { root: 'after:ui-bg-green-400' },
			cyan: { root: 'after:ui-bg-cyan-400' },
			fuchsia: { root: 'after:ui-bg-fuchsia-400' },
			gradient: {
				root: 'after:ui-bg-gradient-to-br after:ui-from-green-400 after:ui-via-cyan-400 after:ui-to-fuchsia-400',
			},
			neutral: { root: 'after:ui-bg-foreground' }, // @see Compound variant for outline neutral
		},
		size: {
			sm: {
				root: 'ui-px-1 ui-py-0.5 ui-text-xs',
			},
			md: {
				root: 'ui-px-1.5 ui-py-1 ui-text-sm',
			},
		},
		type: {
			fill: { root: 'ui-text-background' },
			outline: {
				root: 'ui-text-contrasted-max before:-ui-inset-px before:ui-bg-background',
			},
		},
	},
	defaultVariants: {
		variant: 'gradient',
		type: 'fill',
		size: 'md',
	},
	compoundVariants: [
		{
			variant: 'neutral',
			type: 'outline',
			class: {
				root: 'after:ui-border after:ui-bg-card',
			},
		},
	],
});

const { root, label } = _badge();

export type BadgeRootProps = Pick<
	VariantProps<typeof _badge>,
	'variant' | 'type' | 'size'
> &
	React.ComponentPropsWithoutRef<'div'> & {
		asChild?: boolean;
	};

type BadgeRootRef = React.ElementRef<'div'>;

const BadgeRoot = React.forwardRef<BadgeRootRef, BadgeRootProps>(
	({ variant, type, size, asChild = false, className, ...props }, ref) => {
		const Comp = asChild ? Slot : 'div';
		return (
			<Comp
				ref={ref}
				className={cn(root({ variant, type, size }), className)}
				{...props}
			/>
		);
	},
);

BadgeRoot.displayName = 'BadgeRoot';

type BadgeLabelProps = React.ComponentPropsWithoutRef<'span'> &
	VariantProps<typeof label>;

const BadgeLabel = React.forwardRef<React.ElementRef<'span'>, BadgeLabelProps>(
	({ children, className, ...props }, ref) => (
		<span ref={ref} className={cn(label(), className)} {...props}>
			{children}
		</span>
	),
);

BadgeLabel.displayName = 'BadgeLabel';

const badgeDotVariants = tv({
	base: 'ui-size-2 ui-rounded-full ui-bg-contrasted-max',
	variants: {
		variant: {
			green: 'ui-bg-green-400',
			cyan: 'ui-bg-cyan-400',
			fuchsia: 'ui-bg-fuchsia-400',
			neutral: 'ui-bg-neutral-300',
			gradient:
				'ui-bg-gradient-to-br ui-from-green-400 ui-via-cyan-400 ui-to-fuchsia-400',
		},
	},
});

type BadgeDotProps = React.ComponentPropsWithoutRef<'div'> &
	VariantProps<typeof badgeDotVariants>;

const BadgeDot = React.forwardRef<React.ElementRef<'div'>, BadgeDotProps>(
	({ className, variant, ...props }, ref) => (
		<div ref={ref} className={cn(badgeDotVariants({ variant, className }))} {...props} />
	),
);

BadgeDot.displayName = 'BadgeDot';

type BadgeCrossProps = Omit<React.ComponentPropsWithoutRef<typeof Icon>, 'i'>;

const BadgeCross: React.FC<BadgeCrossProps> = ({ className, ...props }) => (
	<Icon
		i={'X'}
		size={'sm'}
		className={cn(
			'ui-cursor-pointer ui-text-foreground ui-opacity-80 hover:ui-opacity-100 motion-safe:ui-transition-opacity motion-safe:ui-duration-200',
			className,
		)}
		{...props}
	/>
);

BadgeCross.displayName = 'BadgeCross';

export {
	BadgeRoot,
	BadgeLabel,
	BadgeDot,
	BadgeCross,
	//
	BadgeRoot as Root,
	BadgeLabel as Label,
	BadgeDot as Dot,
	BadgeCross as Cross,
	//
	_badge as styles,
};
