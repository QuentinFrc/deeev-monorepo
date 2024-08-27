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
					'hidden md:flex',
					'select-none flex-nowrap items-center gap-1 text-sm text-contrasted-max',
					'opacity-50 hover:opacity-100 motion-safe:transition-opacity motion-safe:duration-200',
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
				'inline select-none rounded-sm border border-contrasted-max px-1 py-0.5 font-mono',
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
