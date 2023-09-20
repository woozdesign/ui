import React from 'react';
import { Meta, Story } from '@storybook/react';
import TextField, { TextFieldProps } from './TextField';
import '@/styles/core.scss';
import Theme from '../Theme/Theme';

export default {
  title: 'Components/TextField',
  component: TextField,
  args: {
    size: 'medium',
    label: 'Default Label',
    block: false,
  },
} as Meta;

const Template: Story<TextFieldProps> = (args) => (
  <Theme.ThemeProvider>
    <TextField {...args} />
  </Theme.ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  iconPrepend: <span>🔍</span>,
  iconAppend: <span>❌</span>,
};

export const Block = Template.bind({});
Block.args = {
  block: true,
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  label: undefined,
};

// ...add more stories as needed
