import { Meta, StoryObj } from '@storybook/react';

import { LandingPage } from './page';

const meta: Meta<typeof LandingPage> = {
	title: 'Landing Page',
	component: LandingPage,
};

type Story = StoryObj<typeof LandingPage>;

export const Default: Story = {
	render: () => <LandingPage />,
};

export default meta;
