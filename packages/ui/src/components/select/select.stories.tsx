import { Meta, StoryObj } from '@storybook/react';
import { Icon } from '#components/icons';

import * as Select from './select';

const meta: Meta<typeof Select.Root> = {
	title: 'Fields/Select',
	component: Select.Root,
};

type Story = StoryObj<typeof Select.Root>;

const ThemeTemplate: Story = {
	render: (props) => (
		<Select.Root {...props}>
			<Select.Trigger className="ui-w-[180px]">
				<Select.Value placeholder="Theme" />
			</Select.Trigger>
			<Select.Content>
				<Select.Item value="light">Light</Select.Item>
				<Select.Item value="dark">Dark</Select.Item>
				<Select.Item value="system">System</Select.Item>
			</Select.Content>
		</Select.Root>
	),
};

const FilterTemplate: Story = {
	render: (props) => (
		<Select.Root {...props}>
			<Select.Trigger className="ui-w-[180px]">
				<Select.Value placeholder="Filter" />
			</Select.Trigger>
			<Select.Content>
				<Select.Group>
					<Select.Label>
						<Icon i={'FilterFunnel01'} size={'sm'} /> Filter
					</Select.Label>
					<Select.Item value="all">All</Select.Item>
					<Select.Item value="completed">Completed</Select.Item>
					<Select.Item value="active">Active</Select.Item>
				</Select.Group>
			</Select.Content>
		</Select.Root>
	),
};

const StateTemplate: Story = {
	render: (props) => (
		<Select.Root {...props}>
			<Select.Trigger className="ui-w-[180px]">
				<Select.Value placeholder="Currency" />
			</Select.Trigger>
			<Select.Content>
				<Select.Group>
					<Select.Label>
						<Icon i={'Placeholder'} size={'sm'} /> Crypto
					</Select.Label>
					<Select.Item value="btc">Bitcoin</Select.Item>
					<Select.Item value="eth">Ethereum</Select.Item>
					<Select.Item value="plu">Pluton</Select.Item>
				</Select.Group>
				<Select.Separator />
				<Select.Group>
					<Select.Label>
						<Icon i={'Placeholder'} size={'sm'} /> Fiat
					</Select.Label>
					<Select.Item value="usd">USD</Select.Item>
					<Select.Item value="eur">EUR</Select.Item>
					<Select.Item value="gbp">GBP</Select.Item>
				</Select.Group>
			</Select.Content>
		</Select.Root>
	),
};

export const Default: Story = {
	...ThemeTemplate,
};

export const DefaultOpen: Story = {
	...ThemeTemplate,
	args: {
		open: true,
	},
};

export const WithGroup: Story = {
	...FilterTemplate,
};

export const WithGroupOpen: Story = {
	...FilterTemplate,
	args: {
		open: true,
	},
};

export const WithGroups = {
	...StateTemplate,
};

export const WithGroupsOpen: Story = {
	...StateTemplate,
	args: {
		open: true,
	},
};

export default meta;
