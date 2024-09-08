import React from 'react';

import { cn } from '@/lib/utils';

const getOpacity = (columns: number, i: number, min = 0.16, max = 0.8) => {
	const range = max - min;
	const step = range / (columns / 2);
	return Math.round((min + step * i) * 100) / 100;
};
export const Strips = ({ columns = 12 }) => {
	const opacity = Array.from({ length: columns / 2 }, (_, i) => getOpacity(columns, i));

	return (
		<div
			className={cn([
				'pointer-events-none absolute inset-y-0 left-1/2 -z-10 -translate-x-1/2',
				'mx-auto grid w-max gap-5 opacity-25',
			])}
			style={{ gridTemplateColumns: `repeat(${columns},1fr)` } as React.CSSProperties}>
			{Array.from({ length: columns }).map((_, i) => (
				<div
					key={i}
					className={cn([
						'h-full w-16 bg-gradient-to-b from-transparent to-white',
						'translate-y-[var(--translate)] opacity-[var(--opacity)]',
					])}
					style={
						{
							gridColumn: `${i + 1}`,
							'--opacity': opacity[i < columns / 2 ? i : columns - i - 1],
							/*'--translate': `calc(${i % 2 === 0 ? '-' : ''}${Math.abs(i >= columns / 2 ? columns / 2 - i - 1 : columns / 2 - i)} * 8%)`,*/
							'--translate': `calc(-${Math.abs(i >= columns / 2 ? columns / 2 - i - 1 : columns / 2 - i)} * 8%)`,
						} as React.CSSProperties
					}
				/>
			))}
		</div>
	);
};
