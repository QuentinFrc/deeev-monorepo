'use client';

import React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cn } from '#utils';
import { tv, VariantProps } from 'tailwind-variants';

import { percent } from '@repo/utils/math';

const _progress = tv({
	slots: {
		root: 'ui-flex ui-size-full ui-items-center ui-justify-center ui-gap-1',
		progress: 'ui-relative ui-overflow-hidden ui-rounded-full ui-bg-neutral-900',
		thumb:
			'ui-size-full ui-flex-1 ui-overflow-hidden ui-from-green-500 ui-via-cyan-500 ui-to-fuchsia-500',
		label: 'ui-select-none ui-text-sm ui-font-bold ui-text-contrasted-min',
	},
	variants: {
		orientation: {
			horizontal: {
				root: 'ui-flex-row',
				progress: 'ui-h-1 ui-w-full',
				thumb: 'ui-bg-gradient-to-r [clip-path:inset(0_var(--inverse-percentage)_0_0)]',
			},
			vertical: {
				root: 'ui-flex-col',
				progress: 'ui-h-full ui-w-1',
				thumb: 'ui-bg-gradient-to-b [clip-path:inset(0_0_var(--inverse-percentage)_0)]',
			},
		},
	},
	defaultVariants: {
		orientation: 'horizontal',
	},
});

const { root, progress, thumb, label } = _progress();

type ProgressPropsVariants = VariantProps<typeof _progress>;

type ProgressProps = React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> &
	ProgressPropsVariants & {
		labelStart?: string;
		labelEnd?: string;
		/** Useful to control the progress bar direct with css var
		 *  Use '--percentage' to control the progress bar
		 * */
		uncontrolled?: boolean;
	};

const Progress = React.forwardRef<
	React.ElementRef<typeof ProgressPrimitive.Root>,
	ProgressProps
>(
	(
		{
			className,
			orientation,
			value,
			uncontrolled = false,
			max = 100,
			labelStart,
			labelEnd,
			...props
		},
		ref,
	) => {
		const safeValue = value ?? max / 2;
		const percentage = percent(safeValue, max);
		const inversePercentage = 100 - percentage;

		const style = (
			!uncontrolled
				? {
						'--inverse-percentage': `${inversePercentage}%`,
					}
				: {
						'--inverse-percentage': `calc(100% - var(--percentage))`,
					}
		) as React.CSSProperties;

		return (
			<div className={cn(root({ orientation }), className)}>
				{labelStart && <ProgressLabel>{labelStart}</ProgressLabel>}
				<ProgressPrimitive.Root
					ref={ref}
					className={cn(progress({ orientation }))}
					max={max}
					value={safeValue}
					title={props.title ?? `${percentage}% - ${safeValue} of ${max}`}
					{...props}>
					<ProgressPrimitive.Indicator
						className={cn(thumb({ orientation }))}
						style={style}>
						<span className="ui-sr-only">{percentage}%</span>
					</ProgressPrimitive.Indicator>
				</ProgressPrimitive.Root>
				{labelEnd && <ProgressLabel>{labelEnd}</ProgressLabel>}
			</div>
		);
	},
);
Progress.displayName = ProgressPrimitive.Root.displayName;

const ProgressLabel = React.forwardRef<React.ElementRef<'span'>, ProgressProps>(
	({ children, className, ...props }, ref) => {
		return (
			<span ref={ref} className={cn(label(), className)} {...props}>
				{children}
			</span>
		);
	},
);

ProgressLabel.displayName = 'ProgressLabel';

export { Progress };
export type { ProgressProps };
