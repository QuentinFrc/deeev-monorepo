import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import * as Avatar from './avatar';

const meta: Meta<typeof Avatar.Root> = {
	title: 'Avatar',
	component: Avatar.Root,
};

type AvatarStoryProps = Avatar.Props;
const StoryAvatar: React.FC<AvatarStoryProps> = (args) => (
	<div className={'ui-flex ui-space-x-2'}>
		<Avatar.Root {...args}>
			<Avatar.Image
				alt={'Alternative Text'}
				src={'https://i.pravatar.cc/300'}
				width={64}
				height={64}
			/>
			<Avatar.Fallback>ZAU</Avatar.Fallback>
		</Avatar.Root>
		{/*Fallback*/}
		<Avatar.Root {...args}>
			<Avatar.Image
				alt={'Alternative Text'}
				src={'https://i.pravatar.cc/300'}
				width={64}
				height={64}
			/>
			<Avatar.Fallback>ZAU</Avatar.Fallback>
		</Avatar.Root>
		{/*Online Indicator*/}
		<Avatar.Root {...args}>
			<Avatar.Image
				alt={'Alternative Text'}
				src={'https://i.pravatar.cc/300'}
				width={64}
				height={64}
			/>
			<Avatar.Fallback>ZAU</Avatar.Fallback>
			<Avatar.Indicator type={'online'} size={args.size} />
		</Avatar.Root>
		{/*Offline Indicator*/}
		<Avatar.Root {...args}>
			<Avatar.Image
				alt={'Alternative Text'}
				src={'https://i.pravatar.cc/300'}
				width={64}
				height={64}
			/>
			<Avatar.Fallback>ZAU</Avatar.Fallback>
			<Avatar.Indicator type={'offline'} size={args.size} />
		</Avatar.Root>
	</div>
);

type Story = StoryObj<typeof StoryAvatar>;

const AvatarTemplate: Story = {
	render: (args) => <StoryAvatar {...args} />,
};

const AvatarsTemplate = (props: AvatarStoryProps[], genericProps?: AvatarStoryProps) => ({
	render: () => (
		<div className="ui-flex ui-space-x-4">
			{props.map((props, i) => (
				<StoryAvatar key={i} {...genericProps} {...props} />
			))}
		</div>
	),
});

export const Default: Story = {
	...AvatarTemplate,
};

export const SM: Story = {
	...AvatarTemplate,
	args: {
		size: 'sm',
	},
};

export const MD: Story = {
	...AvatarTemplate,
	args: {
		size: 'md',
	},
};

export const LG: Story = {
	...AvatarTemplate,
	args: {
		size: 'lg',
	},
};

export const XL: Story = {
	...AvatarTemplate,
	args: {
		size: 'xl',
	},
};

export const Rounded: Story = AvatarsTemplate([
	{ shape: 'rounded-sm' },
	{ shape: 'rounded-md' },
	{ shape: 'rounded-lg' },
	{ shape: 'rounded-xl' },
	{ shape: 'rounded-full' },
]);

export const All: Story = AvatarsTemplate([
	{ size: 'sm' },
	{ size: 'md' },
	{ size: 'lg' },
	{ size: 'xl' },
]);

export default meta;
