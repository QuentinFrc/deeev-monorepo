import React from 'react';
import { Meta } from '@storybook/react';

import * as Card from '#components/card';
import { Input, Label } from '#components/fields';
import { SimpleButton } from '@ui/components/simple-button';

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
			className="w-[400px]"
			value={active}
			onValueChange={setActive}>
			<Tabs.List className="grid w-full grid-cols-2">
				<Tabs.Trigger value="account">Account</Tabs.Trigger>
				<Tabs.Trigger value="password">Password</Tabs.Trigger>
			</Tabs.List>
			<div className="grid overflow-hidden p-1 [&>*]:[grid-area:1/1]">
				<Tabs.Content value="account">
					<Card.Root>
						<Card.Header>
							<Card.Title>Account</Card.Title>
							<Card.Description>
								Make changes to your account here. Click save when you&apos;re done.
							</Card.Description>
						</Card.Header>
						<Card.Content className="space-y-2">
							<div className="space-y-1">
								<Label htmlFor="name">Name</Label>
								<Input id="name" defaultValue="Pedro Duarte" />
							</div>
							<div className="space-y-1">
								<Label htmlFor="username">Username</Label>
								<Input id="username" defaultValue="@peduarte" />
							</div>
						</Card.Content>
						<Card.Footer>
							<SimpleButton variant={'secondary'} label={'Save changes'} />
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
						<Card.Content className="space-y-2">
							<div className="space-y-1">
								<Label htmlFor="current">Current password</Label>
								<Input id="current" type="password" />
							</div>
							<div className="space-y-1">
								<Label htmlFor="new">New password</Label>
								<Input id="new" type="password" />
							</div>
						</Card.Content>
						<Card.Footer>
							<SimpleButton variant={'secondary'} label={'Save password'} />
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
