import { Meta, StoryObj } from '@storybook/react';

import { Kbd, KBD } from './kbd';

const meta: Meta<typeof Kbd> = {
	title: 'Kbd',
	component: Kbd,
};

type Story = StoryObj<typeof Kbd>;

const KbdTemplate: Story = {
	render: (args) => <Kbd {...args} />,
};

export const Default: Story = {
	...KbdTemplate,
	args: {
		caps: 'Default',
	},
};

export const MacOsCommand: Story = {
	...KbdTemplate,
	args: {
		caps: KBD.command.MacOs,
	},
};

export const MacOsOption: Story = {
	...KbdTemplate,
	args: {
		caps: KBD.option.MacOs,
	},
};

export const MacOsCommandOption: Story = {
	...KbdTemplate,
	args: {
		caps: [KBD.command.MacOs, KBD.option.MacOs],
	},
};

export const WindowsCommand: Story = {
	...KbdTemplate,
	args: {
		caps: KBD.command.Windows,
	},
};

export const WindowsOption: Story = {
	...KbdTemplate,
	args: {
		caps: KBD.option.Windows,
	},
};

export const WindowsCommandOption: Story = {
	...KbdTemplate,
	args: {
		caps: [KBD.command.Windows, KBD.option.Windows],
	},
};

export default meta;
