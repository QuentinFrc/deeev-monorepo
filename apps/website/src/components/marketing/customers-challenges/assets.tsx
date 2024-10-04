import React from 'react';
import Image from 'next/image';

import { cn } from '@repo/ui/utils';

import bankCardSrc from './bank-card.png';

const AssetWrapper = ({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) => (
	<div
		className={cn('flex h-64 items-center justify-center py-8', className)}
		{...props}
	/>
);

export const VisibilitySvg = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M22 12s-4-8-10-8S2 12 2 12s4 8 10 8 10-8 10-8z" />
			<circle cx="12" cy="12" r="3" />
		</svg>
	);
};

export const ConversionAsset = () => {
	return <div>Conversion Asset</div>;
};

export const CostAsset = () => {
	return (
		<AssetWrapper>
			<Image src={bankCardSrc} alt={'Bank Card'} width={256} height={256} />
		</AssetWrapper>
	);
};

export const LongTermSolutionAsset = () => {
	return (
		<AssetWrapper>
			<svg
				width="118"
				height="120"
				viewBox="0 0 118 120"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<rect
					x="0.890381"
					y="3.77905"
					width="116.22"
					height="116.22"
					rx="58.11"
					fill="black"
				/>
				<rect
					x="0.890381"
					y="3.77905"
					width="116.22"
					height="116.22"
					rx="58.11"
					fill="url(#paint0_radial_934_1897)"
				/>
				<path
					d="M73.984 74.5866C72.0682 74.5894 70.1706 74.2143 68.4004 73.4824C66.6297 72.75 65.0218 71.6757 63.6677 70.3205L59.2354 65.8881L54.8025 70.3205C52.7608 72.3616 50.1596 73.7517 47.3278 74.3146C44.4961 74.8775 41.5608 74.5883 38.8936 73.483C36.2259 72.3777 33.946 70.5066 32.342 68.106C30.7381 65.7053 29.8821 62.883 29.8821 59.9959C29.8821 57.1087 30.7381 54.2859 32.342 51.8852C33.946 49.4845 36.2259 47.6135 38.8936 46.5082C41.5608 45.4034 44.4961 45.1137 47.3278 45.6766C50.1596 46.2395 52.7608 47.6296 54.8025 49.6712L59.2354 54.1036L63.6677 49.6712C65.3664 47.9759 67.4568 46.7248 69.7539 46.0301C72.0515 45.3353 74.4849 45.2173 76.8385 45.6871C79.1921 46.1569 81.3938 47.2002 83.2482 48.7238C85.1026 50.2474 86.5531 52.2043 87.4706 54.4222C88.3887 56.64 88.7449 59.0501 88.5094 61.4386C88.2734 63.8271 87.4523 66.1203 86.1187 68.1159C84.7852 70.1116 82.9801 71.7471 80.8636 72.8791C78.7466 74.0104 76.3842 74.6027 73.984 74.6032V74.5866ZM65.0805 59.9986L69.5129 64.431C70.3922 65.3103 71.5125 65.9092 72.7325 66.1524C73.9525 66.3951 75.2168 66.2704 76.3659 65.7945C77.515 65.3186 78.4973 64.5124 79.1882 63.478C79.8791 62.4442 80.2481 61.2286 80.2481 59.9848C80.2481 58.7409 79.8791 57.5248 79.1882 56.491C78.4973 55.4566 77.515 54.6504 76.3659 54.1745C75.2168 53.6986 73.9525 53.5745 72.7325 53.8172C71.5125 54.0598 70.3922 54.6587 69.5129 55.5386L65.0805 59.9986ZM44.4418 53.7158C43.4069 53.7124 42.3874 53.9656 41.4733 54.451C40.5596 54.9369 39.7795 55.6411 39.2028 56.5004C38.626 57.3603 38.2709 58.3487 38.1678 59.3787C38.0648 60.4081 38.2177 61.448 38.6127 62.4043C39.0078 63.3611 39.6333 64.2055 40.4328 64.8626C41.2328 65.5197 42.1819 65.9696 43.1969 66.1712C44.2119 66.3735 45.2613 66.3219 46.2519 66.0211C47.2425 65.7202 48.1434 65.1801 48.8747 64.4476L53.3071 60.0153L48.8747 55.5829C47.709 54.3983 46.1211 53.7246 44.459 53.7102L44.4418 53.7158Z"
					fill="white"
					fill-opacity="0.32"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M8.4131 61.8895C8.4131 89.828 31.0617 112.477 59.0001 112.477C86.9386 112.477 109.587 89.828 109.587 61.8895C109.587 33.9511 86.9386 11.3025 59.0001 11.3025C31.0617 11.3025 8.4131 33.9511 8.4131 61.8895ZM59.0001 3.7793C26.9067 3.7793 0.889893 29.7961 0.889893 61.8895C0.889893 93.9829 26.9067 120 59.0001 120C91.0935 120 117.11 93.9829 117.11 61.8895C117.11 29.7961 91.0935 3.7793 59.0001 3.7793Z"
					fill="url(#paint1_angular_934_1897)"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M1.83029 61.8895C1.83029 93.4636 27.4261 119.059 59.0001 119.059C90.5742 119.059 116.17 93.4636 116.17 61.8895C116.17 30.3155 90.5742 4.7197 59.0001 4.7197C27.4261 4.7197 1.83029 30.3155 1.83029 61.8895ZM59.0001 3.7793C26.9067 3.7793 0.889893 29.7961 0.889893 61.8895C0.889893 93.9829 26.9067 120 59.0001 120C91.0935 120 117.11 93.9829 117.11 61.8895C117.11 29.7961 91.0935 3.7793 59.0001 3.7793Z"
					fill="url(#paint2_angular_934_1897)"
				/>
				<path
					d="M72.0305 7.52296L58.9999 15.0462L58.9999 -0.00024471L72.0305 7.52296Z"
					fill="#D3D3D3"
				/>
				<defs>
					<radialGradient
						id="paint0_radial_934_1897"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(59.0004 3.77906) rotate(90) scale(58.11 117.865)">
						<stop stop-color="white" stop-opacity="0.16" />
						<stop offset="1" stop-color="white" stop-opacity="0" />
					</radialGradient>
					<radialGradient
						id="paint1_angular_934_1897"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(59.0001 61.8895) rotate(90) scale(58.1102)">
						<stop offset="0.000146018" stop-color="white" stop-opacity="0.4" />
						<stop offset="0.501205" stop-color="white" stop-opacity="0.8" />
						<stop offset="0.502859" stop-color="white" stop-opacity="0" />
						<stop offset="0.549737" stop-color="white" stop-opacity="0" />
						<stop offset="0.748302" stop-color="white" stop-opacity="0.6" />
					</radialGradient>
					<radialGradient
						id="paint2_angular_934_1897"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(59.0001 61.8895) rotate(90) scale(58.1102)">
						<stop offset="0.000146018" stop-color="white" stop-opacity="0.4" />
						<stop offset="0.501205" stop-color="white" stop-opacity="0.8" />
						<stop offset="0.502859" stop-color="white" stop-opacity="0" />
						<stop offset="0.549737" stop-color="white" stop-opacity="0" />
						<stop offset="0.748302" stop-color="white" stop-opacity="0.6" />
					</radialGradient>
				</defs>
			</svg>
		</AssetWrapper>
	);
};
