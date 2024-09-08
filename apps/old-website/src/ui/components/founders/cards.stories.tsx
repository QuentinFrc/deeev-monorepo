import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { FounderCards } from './cards';

type CardProps = {
	name: keyof typeof FounderCards;
};
const Card: React.FC<CardProps> = ({ name }) => {
	const FounderCard = FounderCards[name];
	return <FounderCard />;
};

const meta: Meta<typeof Card> = {
	title: 'Founders Cards',
};

type Story = StoryObj<typeof Card>;

const template: Story = {
	render: (args) => <Card {...args} />,
};

export const Enzo: Story = {
	...template,
	args: { name: 'EnzoCard' },
};

export const Quentin: Story = {
	...template,
	args: { name: 'QuentinCard' },
};

export const Sebastien: Story = {
	...template,
	args: { name: 'SebastienCard' },
};

export const All: Story = {
	render: () => (
		<div className={'space-y-2'}>
			{Object.values(FounderCards).map((card, i) => {
				const FounderCard = card;
				return <FounderCard key={i} />;
			})}
		</div>
	),
};
export default meta;
