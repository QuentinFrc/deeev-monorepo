import React from 'react';
import { Meta } from '@storybook/react';
import * as Card from '#components/card';
import { Input, Label } from '#components/fields';

import { ButtonLabel, ButtonRoot } from '../button';
import * as Tabs from './tabs';

const meta: Meta<typeof Tabs.Root> = {
	title: 'Tabs',
	component: Tabs.Root,
};

export default meta;

const TabDemo = () => {
	const [active, setActive] = React.useState('account');
	return (
		<Tabs.Root
			defaultValue="account"
			className="ui-w-[400px]"
			value={active}
			onValueChange={setActive}>
			<Tabs.List className="ui-grid ui-w-full ui-grid-cols-2">
				<Tabs.Trigger value="account">Account</Tabs.Trigger>
				<Tabs.Trigger value="password">Password</Tabs.Trigger>
			</Tabs.List>
			<div className="ui-grid ui-overflow-hidden ui-p-1 [&>*]:[grid-area:1/1]">
				<Tabs.Content value="account">
					<Card.Root>
						<Card.Header>
							<Card.Title>Account</Card.Title>
							<Card.Description>
								Make changes to your account here. Click save when you&apos;re done.
							</Card.Description>
						</Card.Header>
						<Card.Content className="ui-space-y-2">
							<div className="ui-space-y-1">
								<Label htmlFor="name">Name</Label>
								<Input id="name" defaultValue="Pedro Duarte" />
							</div>
							<div className="ui-space-y-1">
								<Label htmlFor="username">Username</Label>
								<Input id="username" defaultValue="@peduarte" />
							</div>
						</Card.Content>
						<Card.Footer>
							<ButtonRoot variant={'secondary'}>
								<ButtonLabel>Save Changes</ButtonLabel>
							</ButtonRoot>
						</Card.Footer>
					</Card.Root>
				</Tabs.Content>
				<Tabs.Content value="password">
					<Card.Root>
						<Card.Header>
							<Card.Title>Password</Card.Title>
							<Card.Description>
								Change your password here. After saving, you&apos;ll be logged out.
							</Card.Description>
						</Card.Header>
						<Card.Content className="ui-space-y-2">
							<div className="ui-space-y-1">
								<Label htmlFor="current">Current password</Label>
								<Input id="current" type="password" />
							</div>
							<div className="ui-space-y-1">
								<Label htmlFor="new">New password</Label>
								<Input id="new" type="password" />
							</div>
						</Card.Content>
						<Card.Footer>
							<ButtonRoot variant={'secondary'}>
								<ButtonLabel>Save Password</ButtonLabel>
							</ButtonRoot>
						</Card.Footer>
					</Card.Root>
				</Tabs.Content>
			</div>
		</Tabs.Root>
	);
};

export const Default = {
	render: () => <TabDemo />,
};
