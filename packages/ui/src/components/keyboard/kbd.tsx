import React, { forwardRef } from 'react';
import { cn } from '#utils';

type KbdProps = Omit<React.ComponentPropsWithoutRef<'span'>, 'children'> & {
	caps: string | string[];
};
const Kbd = forwardRef<React.ElementRef<'span'>, KbdProps>(
	({ caps, className, ...props }, ref) => {
		return (
			<span
				ref={ref}
				className={cn(
					'ui-hidden md:ui-flex',
					'ui-select-none ui-flex-nowrap ui-items-center ui-gap-1 ui-text-sm ui-text-contrasted-max',
					'ui-opacity-50 hover:ui-opacity-100 motion-safe:ui-transition-opacity motion-safe:ui-duration-200',
					className,
				)}
				{...props}>
				{Array.isArray(caps) ? (
					caps.map((cap, i) => (
						<React.Fragment key={cap}>
							<Key cap={cap} />
							{i === 0 && '+'}
						</React.Fragment>
					))
				) : (
					<Key cap={caps} />
				)}
			</span>
		);
	},
);

Kbd.displayName = 'Kbd';

type KeyProps = React.ComponentPropsWithoutRef<'kbd'> & {
	cap: string;
};

const Key = forwardRef<React.ElementRef<'kbd'>, KeyProps>(
	({ cap, className, ...props }, ref) => (
		<kbd
			ref={ref}
			className={cn(
				'ui-inline ui-select-none ui-rounded-sm ui-border ui-border-contrasted-max ui-px-1 ui-py-0.5 ui-font-mono',
				className,
			)}
			{...props}>
			{cap}
		</kbd>
	),
);

Key.displayName = 'Key';

const KBD = {
	command: {
		MacOs: '⌘',
		Windows: 'Ctrl',
	},
	option: {
		MacOs: '⌥',
		Windows: 'Alt',
	},
};

export { Kbd, KBD };
