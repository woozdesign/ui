import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Checkbox, { CheckboxProps } from './Checkbox';
import Theme from '../Theme';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
  },
} as Meta;

const Template: Story<CheckboxProps> = (args) => (
  <Theme.ThemeProvider>
    <Checkbox {...args} />
  </Theme.ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Sample Label',
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  size: 'large',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  ...Default.args,
  color: 'green',
};

export const CustomRadius = Template.bind({});
CustomRadius.args = {
  ...Default.args,
  radius: '8px',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
