import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
};

export const SubmitButton = Template.bind({});
SubmitButton.args = {
  label: 'Submit',
  type: 'submit',
};

export const ResetButton = Template.bind({});
ResetButton.args = {
  label: 'Reset',
  type: 'reset',
};
