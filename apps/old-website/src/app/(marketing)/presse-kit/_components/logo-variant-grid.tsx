import React from 'react';

import { cn } from '@/lib/utils';

type LogoVariantGridProps = React.ComponentPropsWithoutRef<'div'> & {
	label: string;
};

export const LogoVariantGrid = ({
	label,
	children,
	className,
	...props
}: LogoVariantGridProps) => {
	return (
		<div className={cn('grid grid-cols-2 gap-1', className)} {...props}>
			<div
				className={
					'col-span-full mx-auto grid w-1/2 grid-cols-[1fr_max-content_1fr] items-end text-center'
				}>
				<svg
					className="justify-self-end"
					width="60"
					height="18"
					viewBox="0 0 60 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<rect x="0" y="0.5" width="58.73" height="1" fill="white" fillOpacity="0.5" />
					<rect x="0" y="1.5" width="1" height="16" fill="white" fillOpacity="0.5" />
				</svg>
				<div className={'px-2 pb-1 text-contrast-4'}>{label}</div>
				<svg
					className="justify-self-start"
					width="60"
					height="18"
					viewBox="0 0 60 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<rect x="0" y="0.5" width="58.73" height="1" fill="white" fillOpacity="0.5" />
					<rect x="59" y="1.5" width="1" height="16" fill="white" fillOpacity="0.5" />
				</svg>
			</div>
			{children}
		</div>
	);
};
