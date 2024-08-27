import React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn, tv, VariantProps } from '#utils';
import { Icon } from '#components/icons';

const _badge = tv({
	slots: {
		root: [
			'relative z-10 inline-flex size-max max-w-full items-center rounded-lg',
			'font-semibold leading-[1.42857em]',
			'after:absolute after:inset-0 after:-z-20 after:rounded-inherit',
			'before:absolute before:inset-0 before:-z-10 before:rounded-lg-minus-[1px]',
		],
		label: 'relative z-10 inline-flex px-1',
	},
	variants: {
		variant: {
			green: { root: 'after:bg-green-400' },
			cyan: { root: 'after:bg-cyan-400' },
			fuchsia: { root: 'after:bg-fuchsia-400' },
			gradient: {
				root: 'after:bg-gradient-to-br after:from-green-400 after:via-cyan-400 after:to-fuchsia-400',
			},
			neutral: { root: 'after:bg-foreground' }, // @see Compound variant for outline neutral
		},
		size: {
			sm: {
				root: 'px-1 py-0.5 text-xs',
			},
			md: {
				root: 'px-1.5 py-1 text-sm',
			},
		},
		type: {
			fill: { root: 'text-background' },
			outline: { root: 'text-contrasted-max before:bg-background after:-inset-px' },
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
				root: 'after:border after:bg-card',
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
	base: 'size-2 rounded-full bg-contrasted-max',
	variants: {
		variant: {
			green: 'bg-green-400',
			cyan: 'bg-cyan-400',
			fuchsia: 'bg-fuchsia-400',
			neutral: 'bg-neutral-300',
			gradient: 'bg-gradient-to-br from-green-400 via-cyan-400 to-fuchsia-400',
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
			'cursor-pointer text-foreground opacity-80 hover:opacity-100 motion-safe:transition-opacity motion-safe:duration-200',
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
