import { Meta, StoryObj } from '@storybook/react';

import { Label, LabelProps } from '../label';
import { Textarea, TextareaProps } from './textarea';

const meta: Meta<typeof Textarea> = {
	title: 'Fields/Textarea',
	component: Textarea,
};

type Story = StoryObj<{
	labelProps: LabelProps;
	textareaProps: TextareaProps;
}>;

const Template: Story = {
	render: ({ textareaProps, labelProps }) => (
		<div className={'ui-space-y-2'}>
			<Label {...labelProps} />
			<Textarea {...textareaProps} />
		</div>
	),
};

export const Default: Story = {
	...Template,
	args: {
		textareaProps: {
			id: 'textarea-el',
			placeholder: 'Your message',
			className: 'ui-w-96',
		},
		labelProps: {
			htmlFor: 'textarea-el',
			children: 'Message',
			icon: 'MessageChatSquare',
		},
	},
};

export const Disabled: Story = {
	...Template,
	args: {
		textareaProps: {
			id: 'textarea-el',
			placeholder: 'Your message',
			disabled: true,
			className: 'ui-w-96',
		},
		labelProps: {
			htmlFor: 'textarea-el',
			children: 'Message',
			icon: 'MessageChatSquare',
		},
	},
};

export const WithValue: Story = {
	...Template,
	args: {
		textareaProps: {
			id: 'textarea-el',
			placeholder: 'Your message',
			value:
				'Hello world, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium, aliquid beatae consequuntur cupiditate dolorem doloremque dolores ducimus eius ipsa ipsam itaque laboriosam, ratione rerum similique tenetur unde veniam voluptatibus? ',
			className: 'ui-min-w-96 ui-min-h-40',
		},
		labelProps: {
			htmlFor: 'textarea-el',
			children: 'Message',
			icon: 'MessageChatSquare',
		},
	},
};

export const WithValueDisabled: Story = {
	...Template,
	args: {
		textareaProps: {
			id: 'textarea-el',
			placeholder: 'Your message',
			value:
				'Hello world, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium, aliquid beatae consequuntur cupiditate dolorem doloremque dolores ducimus eius ipsa ipsam itaque laboriosam, ratione rerum similique tenetur unde veniam voluptatibus? ',
			className: 'ui-min-w-96 ui-min-h-40',
			disabled: true,
		},
		labelProps: {
			htmlFor: 'textarea-el',
			children: 'Message',
			icon: 'MessageChatSquare',
		},
	},
};

export const WithLabelDisabled: Story = {
	...Template,
	args: {
		textareaProps: {
			id: 'textarea-el',
			placeholder: 'Your message',
			value:
				'Hello world, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium, aliquid beatae consequuntur cupiditate dolorem doloremque dolores ducimus eius ipsa ipsam itaque laboriosam, ratione rerum similique tenetur unde veniam voluptatibus? ',
			className: 'ui-min-w-96 ui-min-h-40',
			disabled: true,
		},
		labelProps: {
			htmlFor: 'textarea-el',
			children: 'Message',
			icon: 'MessageChatSquare',
			disabled: true,
		},
	},
};

export default meta;
