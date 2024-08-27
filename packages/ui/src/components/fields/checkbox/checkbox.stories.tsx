import { Meta, StoryObj } from '@storybook/react';

import { Label, LabelProps } from '../label';
import { Checkbox, CheckboxProps } from './checkbox';

const meta: Meta<typeof Checkbox> = {
	component: Checkbox,
	title: 'Fields/Checkbox',
};

type LabelItemProps = {
	item: CheckboxProps;
	label: LabelProps;
};

type CheckboxStory = StoryObj<{ items: LabelItemProps[] }>;

const MultipleCheckboxTemplate: CheckboxStory = {
	render: ({ items }) => (
		<div className={'space-y-2'}>
			<p className={'font-medium text-contrasted-max'}>
				Wich of these are you interested in ?
			</p>
			{items.map(({ item, label }, i) => (
				<div className="flex flex-row-reverse items-center justify-end gap-x-2" key={i}>
					<Label {...label} htmlFor={item.id}>
						{label.children}
					</Label>
					<Checkbox {...item} />
				</div>
			))}
		</div>
	),
};

export const Default: CheckboxStory = {
	...MultipleCheckboxTemplate,
	args: {
		items: [
			{
				item: { value: 'design', id: 'option-one' },
				label: { children: 'Design, UX & UI' },
			},
			{
				item: { value: 'front-dev', id: 'option-two' },
				label: { children: 'Development, React.js & Next.js' },
			},
			{
				item: { value: 'back-dev', id: 'option-three' },
				label: { children: 'Development, Node.js & Express.js' },
			},
			{
				item: { value: 'prod-eng', id: 'option-four' },
				label: { children: 'Prod Engineering, DevOps & Cloud' },
			},
		],
	},
};

export const OneDisabled: CheckboxStory = {
	...MultipleCheckboxTemplate,
	args: {
		items: [
			{
				item: { value: 'design', id: 'option-one' },
				label: { htmlFor: 'option-one', children: 'Design, UX & UI' },
			},
			{
				item: { value: 'front-dev', id: 'option-two' },
				label: { htmlFor: 'option-two', children: 'Development, React.js & Next.js' },
			},
			{
				item: { value: 'back-dev', id: 'option-three' },
				label: { id: 'option-three', children: 'Development, Node.js & Express.js' },
			},
			{
				item: { value: 'prod-eng', id: 'option-four', disabled: true },
				label: {
					id: 'option-four',
					children: 'Prod Engineering, DevOps & Cloud',
					disabled: true,
				},
			},
		],
	},
};

export const AllDisabled: CheckboxStory = {
	...MultipleCheckboxTemplate,
	args: {
		items: [
			{
				item: { value: 'design', id: 'option-one', disabled: true },
				label: { htmlFor: 'option-one', children: 'Design, UX & UI', disabled: true },
			},
			{
				item: { value: 'front-dev', id: 'option-two', disabled: true },
				label: {
					htmlFor: 'option-two',
					children: 'Development, React.js & Next.js',
					disabled: true,
				},
			},
			{
				item: { value: 'back-dev', id: 'option-three', disabled: true },
				label: {
					htmlFor: 'option-three',
					children: 'Development, Node.js & Express.js',
					disabled: true,
				},
			},
			{
				item: { value: 'prod-eng', id: 'option-four', disabled: true },
				label: {
					htmlFor: 'option-four',
					children: 'Prod Engineering, DevOps & Cloud',
					disabled: true,
				},
			},
		],
	},
};

export const CheckedDisabled: CheckboxStory = {
	...MultipleCheckboxTemplate,
	args: {
		items: [
			{
				item: { value: 'design', id: 'option-one', disabled: true, checked: true },
				label: { htmlFor: 'option-one', children: 'Design, UX & UI', disabled: true },
			},
			{
				item: { value: 'front-dev', id: 'option-two', checked: false },
				label: { htmlFor: 'option-two', children: 'Development, React.js & Next.js' },
			},
			{
				item: { value: 'back-dev', id: 'option-three', checked: false },
				label: { htmlFor: 'option-three', children: 'Development, Node.js & Express.js' },
			},
			{
				item: { value: 'prod-eng', id: 'option-four', checked: false },
				label: { htmlFor: 'option-four', children: 'Prod Engineering, DevOps & Cloud' },
			},
		],
	},
};

export const MD = Default;

export const LG: CheckboxStory = {
	...MultipleCheckboxTemplate,
	args: {
		items: [
			{
				item: { value: 'design', id: 'option-one', size: 'lg' },
				label: { htmlFor: 'option-one', children: 'Design, UX & UI' },
			},
			{
				item: { value: 'front-dev', id: 'option-two', size: 'lg' },
				label: { htmlFor: 'option-two', children: 'Development, React.js & Next.js' },
			},
			{
				item: { value: 'back-dev', id: 'option-three', size: 'lg' },
				label: { htmlFor: 'option-three', children: 'Development, Node.js & Express.js' },
			},
			{
				item: { value: 'prod-eng', id: 'option-four', size: 'lg' },
				label: { htmlFor: 'option-four', children: 'Prod Engineering, DevOps & Cloud' },
			},
		],
	},
};
export default meta;
