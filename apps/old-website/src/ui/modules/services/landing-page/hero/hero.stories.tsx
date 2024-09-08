import { Meta, StoryObj } from '@storybook/react';

import { LandingPageHero } from './hero';

const meta: Meta<typeof LandingPageHero> = {
	title: 'Landing Page/Hero',
	component: LandingPageHero,
};

type Story = StoryObj<typeof LandingPageHero>;

const Template: Story = {
	render: (args: any) => <LandingPageHero {...args} />,
};

export const Default: Story = Template;
export default meta;
