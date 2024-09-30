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
				src={
					'https://media.licdn.com/dms/image/D4E03AQGy6P5WN1rA7A/profile-displayphoto-shrink_200_200/0/1696022298868?e=1703116800&v=beta&t=2XU3SQu9lj4EAVSzh8V9FJPuoByxgoKy6_a0n6dbUTQ'
				}
			/>
			<Avatar.Fallback>ZAU</Avatar.Fallback>
		</Avatar.Root>
		{/*Fallback*/}
		<Avatar.Root {...args}>
			<Avatar.Image src={''} alt={'Alternative Text'} />
			<Avatar.Fallback>ZAU</Avatar.Fallback>
		</Avatar.Root>
		{/*Online Indicator*/}
		<Avatar.Root {...args}>
			<Avatar.Image
				alt={'Alternative Text'}
				src={
					'https://media.licdn.com/dms/image/D4E03AQGy6P5WN1rA7A/profile-displayphoto-shrink_200_200/0/1696022298868?e=1703116800&v=beta&t=2XU3SQu9lj4EAVSzh8V9FJPuoByxgoKy6_a0n6dbUTQ'
				}
			/>
			<Avatar.Fallback>ZAU</Avatar.Fallback>
			<Avatar.Indicator type={'online'} size={args.size} />
		</Avatar.Root>
		{/*Offline Indicator*/}
		<Avatar.Root {...args}>
			<Avatar.Image
				alt={'Alternative Text'}
				src={
					'https://media.licdn.com/dms/image/D4E03AQGy6P5WN1rA7A/profile-displayphoto-shrink_200_200/0/1696022298868?e=1703116800&v=beta&t=2XU3SQu9lj4EAVSzh8V9FJPuoByxgoKy6_a0n6dbUTQ'
				}
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

export const All: Story = AvatarsTemplate([
	{ size: 'sm' },
	{ size: 'md' },
	{ size: 'lg' },
	{ size: 'xl' },
]);

export default meta;
