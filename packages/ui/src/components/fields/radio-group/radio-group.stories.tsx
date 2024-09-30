import { Meta, StoryObj } from '@storybook/react';

import { Label, LabelProps } from '../label';
import { RadioGroup, RadioGroupProps, RadioItem, RadioItemProps } from './radio-group';

const meta: Meta<typeof RadioGroup> = {
	title: 'Fields/Radio Group',
	component: RadioGroup,
};

type LabelItemProps = {
	item: RadioItemProps;
	label: LabelProps;
};

type RadioStory = StoryObj<{
	itemsProps: LabelItemProps[];
	groupProps: RadioGroupProps;
}>;

const MultipleRadioTemplate: RadioStory = {
	render: ({ itemsProps, groupProps }) => (
		<div className={'ui-space-y-2'}>
			<p className={'ui-font-medium ui-text-contrasted-max'}>
				What is you&apos;re position at Deeev ?
			</p>
			<RadioGroup className={'ui-text-contrasted-max'} {...groupProps}>
				{itemsProps.map(({ item, label }, i) => (
					<div
						className="ui-flex ui-items-center ui-justify-between ui-space-x-2"
						key={i}>
						<Label {...label} htmlFor={item.id}>
							{label.children}
						</Label>
						<RadioItem {...item} />
					</div>
				))}
			</RadioGroup>
		</div>
	),
};

export const Default: RadioStory = {
	...MultipleRadioTemplate,
	args: {
		itemsProps: [
			{
				item: { value: 'designer', id: 'option-one' },
				label: { children: 'Designer' },
			},
			{
				item: { value: 'front-developer', id: 'option-two' },
				label: { children: 'Front End Developer' },
			},
			{
				item: { value: 'back-developer', id: 'option-three' },
				label: { children: 'Back End Developer' },
			},
			{
				item: { value: 'production-engineer', id: 'option-four' },
				label: { children: 'Production Engineer' },
			},
		],
		groupProps: { defaultValue: 'option-one' },
	},
};

export const OneDisabled: RadioStory = {
	...MultipleRadioTemplate,
	args: {
		itemsProps: [
			{
				item: { value: 'designer', id: 'option-one' },
				label: { children: 'Designer' },
			},
			{
				item: { value: 'front-developer', id: 'option-two' },
				label: { children: 'Front End Developer' },
			},
			{
				item: { value: 'back-developer', id: 'option-three', disabled: true },
				label: { children: 'Back End Developer', disabled: true },
			},
			{
				item: { value: 'production-engineer', id: 'option-four' },
				label: { children: 'Production Engineer' },
			},
		],
		groupProps: { defaultValue: 'option-one' },
	},
};

export const AllDisabled: RadioStory = {
	...MultipleRadioTemplate,
	args: {
		itemsProps: [
			{
				item: { value: 'designer', id: 'option-one', disabled: true },
				label: { children: 'Designer', disabled: true },
			},
			{
				item: { value: 'front-developer', id: 'option-two', disabled: true },
				label: { children: 'Front End Developer', disabled: true },
			},
			{
				item: { value: 'back-developer', id: 'option-three', disabled: true },
				label: { children: 'Back End Developer', disabled: true },
			},
			{
				item: { value: 'production-engineer', id: 'option-four', disabled: true },
				label: { children: 'Production Engineer', disabled: true },
			},
		],
	},
};

export const CheckedDisabled: RadioStory = {
	...MultipleRadioTemplate,
	args: {
		itemsProps: [
			{
				item: { value: 'designer', id: 'option-one', disabled: true, checked: true },
				label: { children: 'Designer', disabled: true },
			},
			{
				item: { value: 'front-developer', id: 'option-two', checked: false },
				label: { children: 'Front End Developer' },
			},
			{
				item: { value: 'back-developer', id: 'option-three', checked: false },
				label: { children: 'Back End Developer' },
			},
			{
				item: { value: 'production-engineer', id: 'option-four', checked: false },
				label: { children: 'Production Engineer' },
			},
		],
	},
};

export const MD: RadioStory = Default;

export const LG: RadioStory = {
	...MultipleRadioTemplate,
	args: {
		itemsProps: [
			{
				item: { value: 'designer', id: 'option-one', size: 'lg' },
				label: { children: 'Designer' },
			},
			{
				item: { value: 'front-developer', id: 'option-two', size: 'lg' },
				label: { children: 'Front End Developer' },
			},
			{
				item: { value: 'back-developer', id: 'option-three', size: 'lg' },
				label: { children: 'Back End Developer' },
			},
			{
				item: { value: 'production-engineer', id: 'option-four', size: 'lg' },
				label: { children: 'Production Engineer' },
			},
		],
		groupProps: { defaultValue: 'option-one' },
	},
};

export default meta;
