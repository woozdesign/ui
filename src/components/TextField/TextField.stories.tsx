import React from 'react';
import { Meta, Story } from '@storybook/react';
import TextField, { TextFieldProps } from './TextField';
import '@/styles/core.scss';

import Theme from '../Theme/Theme';
import { Icon } from '@woozdesign/icons';

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
  iconPrepend: <Icon type={'Search'} color={'blue'} size={'medium'} />,
  iconAppend: <Icon type={'X'} color={'amber'} size={'medium'} />,
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  iconPrepend: <Icon type={'Search'} size={'dynamic'} />,
  iconAppend: <Icon type={'X'} color={'amber'} size={'dynamic'} />,
  size: 'large',
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  iconPrepend: <Icon type={'Search'} />,
  iconAppend: <Icon type={'X'} color={'amber'} size={'dynamic'} />,
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
